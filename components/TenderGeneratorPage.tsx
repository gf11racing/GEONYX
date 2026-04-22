import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Copy, Check, FileText } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { usePageMeta } from '../hooks/usePageMeta';

type FormState = {
  projectName: string;
  facilityType: string;
  area: string;
  system: string;
  lifespan: string;
  warranty: string;
  requirements: string[];
};

const SYSTEMS = ['ARMOR', 'CHEM', 'THERM', 'HYDRO', 'mixed'];
const FACILITY_TYPES = ['logistics', 'factory', 'foodpharma', 'chemical', 'foundry', 'underground', 'workshop'];
const LIFESPANS = ['10', '15', '20', '25'];
const WARRANTIES = ['2', '5', '10'];
const REQUIREMENTS = ['esd', 'haccp', 'fire', 'waterproof', 'superflat', 'dustfree', 'chemical'];

export const TenderGeneratorPage: React.FC = () => {
  usePageMeta('tendergenerator');
  const { t } = useTranslation('tendergenerator');

  const [form, setForm] = useState<FormState>({
    projectName: '',
    facilityType: 'logistics',
    area: '',
    system: 'ARMOR',
    lifespan: '20',
    warranty: '5',
    requirements: [],
  });

  const [copied, setCopied] = useState(false);

  const generatedText = useMemo(() => {
    const facilityDesc = t(`facility.${form.facilityType}`);
    const systemLabel = form.system === 'mixed' ? 'GEONYX ARMOR / GEONYX CHEM' : `GEONYX ${form.system}`;
    const areaDisplay = form.area || '____';

    const line1 = form.projectName
      ? t('output.line1WithProject', { name: form.projectName, facility: facilityDesc, area: areaDisplay, system: systemLabel })
      : t('output.line1', { facility: facilityDesc, area: areaDisplay, system: systemLabel });

    const reqLines = form.requirements.length > 0
      ? form.requirements.map(r => `– ${t(`req.${r}`)}`).join('\n')
      : `– ${t('req.none')}`;

    return [
      line1,
      '',
      t('output.reqHeader'),
      `– ${t('output.lifespanLine', { lifespan: form.lifespan })}`,
      reqLines,
      `– ${t('output.dust')}`,
      `– ${t('output.repair')}`,
      `– ${t('output.standard')}`,
      '',
      t('output.warrantyLine', { warranty: form.warranty }),
      '',
      t('output.reference', { area: areaDisplay }),
    ].join('\n');
  }, [form, t]);

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleReq = (req: string) => {
    setForm(f => ({
      ...f,
      requirements: f.requirements.includes(req)
        ? f.requirements.filter(r => r !== req)
        : [...f.requirements, req],
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-[#080808] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
            <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
              {t('eyebrow')}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
            {t('title')}
          </h1>
          <p className="text-gray-500 text-sm font-mono uppercase tracking-widest border-l-2 border-[#333] pl-4 max-w-2xl">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Form */}
          <div className="space-y-6">

            {/* Project name */}
            <Field label={t('field.projectName')}>
              <input
                type="text"
                value={form.projectName}
                onChange={e => setForm(f => ({ ...f, projectName: e.target.value }))}
                placeholder={t('field.projectNamePlaceholder')}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono placeholder-gray-700"
              />
            </Field>

            {/* Facility type */}
            <Field label={t('field.facilityType')}>
              <select
                value={form.facilityType}
                onChange={e => setForm(f => ({ ...f, facilityType: e.target.value }))}
                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:outline-none focus:border-geo-yellow transition-colors font-mono"
              >
                {FACILITY_TYPES.map(ft => (
                  <option key={ft} value={ft}>{t(`facility.${ft}`)}</option>
                ))}
              </select>
            </Field>

            {/* Area */}
            <Field label={t('field.area')}>
              <div className="flex items-center border border-[#2a2a2a] bg-[#0a0a0a] focus-within:border-geo-yellow transition-colors">
                <input
                  type="number"
                  value={form.area}
                  onChange={e => setForm(f => ({ ...f, area: e.target.value }))}
                  placeholder="0"
                  min="0"
                  className="flex-1 bg-transparent text-white text-sm px-4 py-3 focus:outline-none font-mono placeholder-gray-700"
                />
                <span className="text-gray-600 text-xs font-black tracking-widest uppercase pr-4">m²</span>
              </div>
            </Field>

            {/* System */}
            <Field label={t('field.system')}>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {SYSTEMS.map(s => (
                  <button
                    key={s}
                    onClick={() => setForm(f => ({ ...f, system: s }))}
                    className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
                      form.system === s
                        ? 'border-geo-yellow bg-geo-yellow text-black'
                        : 'border-[#2a2a2a] text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {s === 'mixed' ? t('system.mixed') : s}
                  </button>
                ))}
              </div>
            </Field>

            {/* Lifespan */}
            <Field label={t('field.lifespan')}>
              <div className="grid grid-cols-4 gap-2">
                {LIFESPANS.map(l => (
                  <button
                    key={l}
                    onClick={() => setForm(f => ({ ...f, lifespan: l }))}
                    className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
                      form.lifespan === l
                        ? 'border-geo-yellow bg-geo-yellow text-black'
                        : 'border-[#2a2a2a] text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {l} {t('field.years')}
                  </button>
                ))}
              </div>
            </Field>

            {/* Warranty */}
            <Field label={t('field.warranty')}>
              <div className="grid grid-cols-3 gap-2">
                {WARRANTIES.map(w => (
                  <button
                    key={w}
                    onClick={() => setForm(f => ({ ...f, warranty: w }))}
                    className={`px-3 py-2 text-[10px] font-black uppercase tracking-widest border transition-all ${
                      form.warranty === w
                        ? 'border-geo-yellow bg-geo-yellow text-black'
                        : 'border-[#2a2a2a] text-gray-400 hover:border-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {w} {t('field.years')}
                  </button>
                ))}
              </div>
            </Field>

            {/* Special requirements */}
            <Field label={t('field.requirements')}>
              <div className="grid grid-cols-2 gap-2">
                {REQUIREMENTS.map(r => (
                  <button
                    key={r}
                    onClick={() => toggleReq(r)}
                    className={`px-3 py-2.5 text-[10px] font-black uppercase tracking-widest border text-left transition-all ${
                      form.requirements.includes(r)
                        ? 'border-geo-yellow text-geo-yellow bg-[#0f0f0a]'
                        : 'border-[#2a2a2a] text-gray-500 hover:border-gray-500 hover:text-gray-400'
                    }`}
                  >
                    {t(`req.${r}`)}
                  </button>
                ))}
              </div>
            </Field>
          </div>

          {/* RIGHT: Output */}
          <div className="lg:sticky lg:top-24">
            <div className="border border-[#2a2a2a] bg-[#0a0a0a]">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#1e1e1e]">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-geo-yellow" strokeWidth={1.5} />
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-gray-400">
                    {t('output.label')}
                  </span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest transition-colors px-3 py-1.5 border border-[#333] hover:border-geo-yellow hover:text-geo-yellow text-gray-500"
                >
                  {copied
                    ? <Check className="w-3 h-3 text-geo-yellow" />
                    : <Copy className="w-3 h-3" />
                  }
                  {copied ? t('output.copied') : t('output.copy')}
                </button>
              </div>
              <div className="p-5">
                <p className="text-gray-300 text-sm leading-relaxed font-mono whitespace-pre-wrap">
                  {generatedText}
                </p>
              </div>
            </div>
            <p className="text-gray-700 text-[10px] font-mono tracking-widest uppercase mt-3 text-center">
              {t('output.hint')}
            </p>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-[10px] font-black tracking-[0.25em] uppercase text-gray-600 mb-2">{label}</p>
      {children}
    </div>
  );
}
