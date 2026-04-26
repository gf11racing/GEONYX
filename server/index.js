import express from 'express';
import nodemailer from 'nodemailer';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.set('trust proxy', true);
app.use(express.json({ limit: '32kb' }));

const PORT = parseInt(process.env.PORT || '3001', 10);
const SMTP_HOST = process.env.SMTP_HOST || 'mail.geonyxgroup.com';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '465', 10);
const SMTP_USER = process.env.SMTP_USER || 'office@geonyxgroup.com';
const SMTP_PASSWORD = process.env.SMTP_PASSWORD || '';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;

if (!SMTP_PASSWORD) {
  console.warn('[contact-api] WARNING: SMTP_PASSWORD env var is empty — emails will fail to send');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465,
  auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
});

// Load GEONYX logo as buffer once at startup. Tries common locations.
const logoCandidates = [
  path.resolve(__dirname, 'logoGEONYX.png'),
  path.resolve(__dirname, '../public/logoGEONYX.png'),
  '/usr/share/nginx/html/logoGEONYX.png',
];
let logoBuffer = null;
let logoFoundAt = null;
for (const p of logoCandidates) {
  try {
    if (fs.existsSync(p)) {
      logoBuffer = fs.readFileSync(p);
      logoFoundAt = p;
      break;
    }
  } catch {
    /* keep trying */
  }
}
console.log(`[contact-api] logo: ${logoFoundAt || '(not found — emails will be sent without logo)'}`);

const FORM_CONFIG = {
  contact: {
    subject: 'Ново запитване от geonyxgroup.com',
    titleBg: 'Ново контактно запитване',
    introBg: 'Получихте ново запитване през контактната форма на сайта.',
    fields: ['name', 'company', 'email', 'phone', 'sector', 'message'],
  },
  inspection: {
    subject: 'Нова заявка за инспекция от geonyxgroup.com',
    titleBg: 'Нова заявка за инспекция на обект',
    introBg: 'Получихте нова заявка за инспекция през сайта.',
    fields: ['name', 'company', 'email', 'phone', 'location', 'sector', 'scale', 'risks'],
  },
  careers: {
    subject: 'Нова кандидатура за работа от geonyxgroup.com',
    titleBg: 'Нова кандидатура за работа',
    introBg: 'Получихте нова кандидатура за позиция в GEONYX.',
    fields: ['name', 'email', 'phone', 'position', 'message'],
  },
};

const FIELD_LABELS_BG = {
  name: 'Име',
  company: 'Компания',
  email: 'Имейл',
  phone: 'Телефон',
  sector: 'Сектор',
  location: 'Местоположение',
  scale: 'Мащаб на обекта',
  risks: 'Рискови фактори',
  position: 'Позиция',
  message: 'Съобщение',
};

const SECTOR_LABELS_BG = {
  heavy: 'Тежка индустрия',
  food: 'Хранително-вкусова промишленост',
  agro: 'Агро / Биогаз',
  water: 'Водни / морски обекти',
  energy: 'Енергетика / Отбрана',
  transport: 'Транспорт / Паркинги',
  urban: 'Градска / Hi-Tech среда',
  other: 'Друго',
};

const POSITION_LABELS_BG = {
  sales: 'Продажби',
  production: 'Производство',
  rnd: 'R&D / Инженеринг',
};

function humanizeFieldValue(key, value) {
  if (key === 'sector' && SECTOR_LABELS_BG[value]) return SECTOR_LABELS_BG[value];
  if (key === 'position' && POSITION_LABELS_BG[value]) return POSITION_LABELS_BG[value];
  return value;
}

const rateLimit = new Map();
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 5;

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (rateLimit.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_MAX) {
    rateLimit.set(ip, recent);
    return true;
  }
  recent.push(now);
  rateLimit.set(ip, recent);
  return false;
}

setInterval(() => {
  const cutoff = Date.now() - RATE_WINDOW_MS;
  for (const [ip, times] of rateLimit) {
    const fresh = times.filter((t) => t > cutoff);
    if (fresh.length === 0) rateLimit.delete(ip);
    else rateLimit.set(ip, fresh);
  }
}, 5 * 60_000).unref();

function escapeHtml(s) {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function renderEmailHtml(formType, fields) {
  const config = FORM_CONFIG[formType];
  const name = String(fields.name || '').trim() || 'клиент';

  const rows = config.fields
    .filter((k) => fields[k] != null && String(fields[k]).trim() !== '')
    .map((k) => {
      const label = FIELD_LABELS_BG[k] || k;
      const rawValue = humanizeFieldValue(k, String(fields[k]));
      let valueHtml = escapeHtml(rawValue).replace(/\n/g, '<br>');
      if (k === 'email') {
        valueHtml = `<a href="mailto:${escapeHtml(rawValue)}" style="color:#0F0F0F;text-decoration:underline;">${escapeHtml(rawValue)}</a>`;
      } else if (k === 'phone') {
        const tel = rawValue.replace(/[^+\d]/g, '');
        valueHtml = `<a href="tel:${escapeHtml(tel)}" style="color:#0F0F0F;text-decoration:underline;">${escapeHtml(rawValue)}</a>`;
      }
      return `<tr>
        <td style="padding:12px 16px;font-weight:600;background:#f7f7f7;width:170px;vertical-align:top;border-bottom:1px solid #eee;color:#555;font-size:13px;text-transform:uppercase;letter-spacing:0.3px;">${escapeHtml(label)}</td>
        <td style="padding:12px 16px;border-bottom:1px solid #eee;color:#222;font-size:14px;">${valueHtml}</td>
      </tr>`;
    })
    .join('');

  return `<!DOCTYPE html>
<html lang="bg">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f0f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f0f0f0;padding:32px 16px;">
  <tr><td align="center">
    <table role="presentation" width="640" cellpadding="0" cellspacing="0" border="0" style="max-width:640px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 16px rgba(0,0,0,0.08);">

      <tr><td style="background:#0F0F0F;padding:32px;text-align:center;">
        <img src="cid:geonyx-logo" alt="GEONYX" width="160" style="display:inline-block;height:auto;max-width:160px;border:0;outline:none;">
      </td></tr>

      <tr><td style="background:#FFCC00;color:#0F0F0F;padding:18px 32px;font-weight:800;font-size:16px;letter-spacing:0.5px;text-transform:uppercase;text-align:center;">
        ${escapeHtml(config.titleBg)}
      </td></tr>

      <tr><td style="padding:28px 32px 12px;color:#333;font-size:15px;line-height:1.6;">
        ${escapeHtml(config.introBg)}
      </td></tr>

      <tr><td style="padding:8px 32px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;border:1px solid #e8e8e8;border-radius:6px;overflow:hidden;">
          ${rows}
        </table>
      </td></tr>

      <tr><td style="padding:0 32px 24px;">
        <div style="background:#FFFBE6;border-left:4px solid #FFCC00;padding:14px 18px;color:#5a4a00;font-size:13px;line-height:1.5;border-radius:4px;">
          <b>Бърз отговор:</b> Натиснете <b>Reply</b> в имейл клиента си — отговорът ще отиде директно на ${escapeHtml(name)}.
        </div>
      </td></tr>

      <tr><td style="background:#0F0F0F;padding:20px 32px;color:#888;font-size:12px;text-align:center;line-height:1.6;">
        Изпратено автоматично от <a href="https://geonyxgroup.com" style="color:#FFCC00;text-decoration:none;font-weight:600;">geonyxgroup.com</a><br>
        <span style="color:#555;font-size:11px;">GEONYX — Сигурността започва от основите</span>
      </td></tr>

    </table>
  </td></tr>
</table>
</body>
</html>`;
}

function renderEmailText(formType, fields) {
  const config = FORM_CONFIG[formType];
  const lines = [
    config.titleBg,
    '='.repeat(config.titleBg.length),
    '',
    config.introBg,
    '',
  ];
  for (const k of config.fields) {
    const v = fields[k];
    if (v == null || String(v).trim() === '') continue;
    lines.push(`${FIELD_LABELS_BG[k] || k}: ${humanizeFieldValue(k, String(v))}`);
  }
  lines.push('', '---', 'Изпратено от geonyxgroup.com');
  return lines.join('\n');
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.ip || 'unknown';
    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'Прекалено много заявки. Моля, изчакайте минута и опитайте отново.' });
    }

    const { formType, fields } = req.body || {};
    const config = FORM_CONFIG[formType];
    if (!config) return res.status(400).json({ error: 'Невалиден тип форма' });
    if (!fields || typeof fields !== 'object') return res.status(400).json({ error: 'Невалидни данни' });

    const email = String(fields.email || '').trim();
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'Моля, въведете валиден имейл адрес' });
    const name = String(fields.name || '').trim();
    if (name.length < 2) return res.status(400).json({ error: 'Моля, въведете име' });

    const safe = {};
    for (const key of config.fields) {
      const v = fields[key];
      if (v != null && String(v).trim() !== '') safe[key] = String(v).slice(0, 5000);
    }

    const html = renderEmailHtml(formType, safe);
    const text = renderEmailText(formType, safe);

    const attachments = logoBuffer
      ? [{ filename: 'logoGEONYX.png', content: logoBuffer, cid: 'geonyx-logo' }]
      : [];

    await transporter.sendMail({
      from: `"GEONYX Уебсайт" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: config.subject,
      text,
      html,
      attachments,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[contact-api] send error:', err);
    res.status(500).json({ error: 'Изпращането се провали. Моля, опитайте отново по-късно.' });
  }
});

const SAMPLE_FIELDS = {
  contact: {
    name: 'Иван Петров',
    company: 'Тестова Фирма ЕООД',
    email: 'ivan.petrov@example.bg',
    phone: '+359 888 123 456',
    sector: 'food',
    message: 'Здравейте, бихме искали да получим оферта за подова система за нашия нов производствен цех от 1200 кв.м. Има изисквания за хигиена и устойчивост на разтворители.',
  },
  inspection: {
    name: 'Мария Георгиева',
    company: 'Индустриал Груп АД',
    email: 'm.georgieva@example.bg',
    phone: '+359 887 654 321',
    location: 'гр. Габрово, Индустриална зона',
    sector: 'energy',
    scale: '850 кв.м, височина 6м',
    risks: 'Химическа агресия (киселини), Термален шок, Износване от тежка техника',
  },
  careers: {
    name: 'Стоян Димитров',
    email: 'stoyan.d@example.bg',
    phone: '+359 899 111 222',
    position: 'sales',
    message: 'Опит: 7 години в B2B продажби в строителния сектор. Завършил съм инженерство в ТУ-София. Свободен съм да започна от 1 май.',
  },
};

app.get('/api/preview/:type', (req, res) => {
  const type = req.params.type;
  const sample = SAMPLE_FIELDS[type];
  if (!sample) return res.status(400).type('html').send('<h1>Невалиден тип. Опитай: /api/preview/contact, /api/preview/inspection или /api/preview/careers</h1>');

  // For preview, replace cid:geonyx-logo with /logoGEONYX.png so browser can load it
  const html = renderEmailHtml(type, sample).replace('cid:geonyx-logo', '/logoGEONYX.png');
  res.type('html').send(html);
});

app.get('/api/preview', (req, res) => {
  res.type('html').send(`<!DOCTYPE html>
<html lang="bg"><head><meta charset="utf-8"><title>GEONYX — Email Preview</title>
<style>body{font-family:-apple-system,sans-serif;background:#f0f0f0;padding:40px;color:#222;}h1{margin-top:0;}a{display:block;padding:16px 24px;background:#FFCC00;color:#0F0F0F;text-decoration:none;font-weight:700;border-radius:6px;margin-bottom:12px;text-transform:uppercase;letter-spacing:0.5px;font-size:14px;}a:hover{background:#0F0F0F;color:#FFCC00;}</style></head>
<body><h1>GEONYX — Email Preview</h1>
<p>Кликни върху някой от линковете долу, за да видиш как ще изглежда имейлът, който идва от съответната форма:</p>
<a href="/api/preview/contact">📧 Преглед: Контактна форма (главна страница)</a>
<a href="/api/preview/inspection">🔍 Преглед: Заявка за инспекция</a>
<a href="/api/preview/careers">💼 Преглед: Кандидатура за работа</a>
</body></html>`);
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`[contact-api] listening on :${PORT} — SMTP ${SMTP_HOST}:${SMTP_PORT}`);
  console.log(`[contact-api] preview available at: http://localhost:${PORT}/api/preview`);
});
