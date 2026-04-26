import express from 'express';
import nodemailer from 'nodemailer';

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

const FORM_CONFIG = {
  contact: {
    subject: 'New Contact Inquiry — GEONYX Website',
    fields: ['name', 'company', 'email', 'phone', 'sector', 'message'],
  },
  inspection: {
    subject: 'New Inspection Request — GEONYX Website',
    fields: ['name', 'company', 'email', 'phone', 'location', 'sector', 'scale', 'risks'],
  },
  careers: {
    subject: 'New Job Application — GEONYX Website',
    fields: ['name', 'email', 'phone', 'position', 'message'],
  },
};

const FIELD_LABELS = {
  name: 'Name',
  company: 'Company',
  email: 'Email',
  phone: 'Phone',
  sector: 'Sector',
  location: 'Location',
  scale: 'Scale',
  risks: 'Risk Factors',
  position: 'Position',
  message: 'Message',
};

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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/contact', async (req, res) => {
  try {
    const ip = req.ip || 'unknown';
    if (isRateLimited(ip)) {
      return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
    }

    const { formType, fields } = req.body || {};
    const config = FORM_CONFIG[formType];
    if (!config) return res.status(400).json({ error: 'Invalid form type' });
    if (!fields || typeof fields !== 'object') return res.status(400).json({ error: 'Invalid fields' });

    const email = String(fields.email || '').trim();
    if (!EMAIL_RE.test(email)) return res.status(400).json({ error: 'Valid email required' });
    const name = String(fields.name || '').trim();
    if (name.length < 2) return res.status(400).json({ error: 'Name required' });

    const safe = {};
    for (const key of config.fields) {
      const v = fields[key];
      if (v != null && String(v).trim() !== '') safe[key] = String(v).slice(0, 5000);
    }

    const textBody = config.fields
      .filter((k) => safe[k])
      .map((k) => `${FIELD_LABELS[k] || k}: ${safe[k]}`)
      .join('\n');

    const htmlRows = config.fields
      .filter((k) => safe[k])
      .map(
        (k) =>
          `<tr><td style="padding:8px 14px;font-weight:600;background:#f7f7f7;width:140px;vertical-align:top;border-bottom:1px solid #eee;">${escapeHtml(FIELD_LABELS[k] || k)}</td><td style="padding:8px 14px;border-bottom:1px solid #eee;">${escapeHtml(safe[k]).replace(/\n/g, '<br>')}</td></tr>`,
      )
      .join('');

    const html = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:640px;margin:0 auto;"><div style="background:#FFCC00;color:#111;padding:14px 18px;font-weight:700;font-size:15px;">${escapeHtml(config.subject)}</div><table style="border-collapse:collapse;width:100%;border:1px solid #eee;font-size:14px;color:#222;">${htmlRows}</table><p style="color:#888;font-size:12px;margin-top:16px;">Sent from geonyxgroup.com contact form. Reply directly to respond to ${escapeHtml(name)}.</p></div>`;

    await transporter.sendMail({
      from: `"GEONYX Website" <${SMTP_USER}>`,
      to: MAIL_TO,
      replyTo: `"${name}" <${email}>`,
      subject: config.subject,
      text: textBody,
      html,
    });

    res.json({ ok: true });
  } catch (err) {
    console.error('[contact-api] send error:', err);
    res.status(500).json({ error: 'Failed to send. Please try again later.' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`[contact-api] listening on :${PORT} — SMTP ${SMTP_HOST}:${SMTP_PORT}`);
});
