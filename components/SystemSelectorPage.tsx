import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, FlaskConical, Flame, Droplets, ArrowRight, RotateCcw, ChevronLeft } from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useLang } from '../hooks/useLang';
import { usePageMeta } from '../hooks/usePageMeta';

type SystemKey = 'armor' | 'chem' | 'therm' | 'hydro';
type Scores = Record<SystemKey, number>;

const SYSTEM_META: Record<SystemKey, { icon: React.ComponentType<any>; color: string; link: string }> = {
  armor: { icon: ShieldCheck, color: '#F5C842', link: '/armor' },
  chem:  { icon: FlaskConical, color: '#4ADE80', link: '/chem' },
  therm: { icon: Flame,        color: '#FB923C', link: '/therm' },
  hydro: { icon: Droplets,     color: '#60A5FA', link: '/hydro' },
};

// Each answer key maps to score deltas for each system
const ANSWER_SCORES: Record<string, Scores> = {
  // Q1: facility type
  a1_logistics:    { armor: 3, chem: 1, therm: 0, hydro: 0 },
  a1_factory:      { armor: 2, chem: 2, therm: 1, hydro: 0 },
  a1_food:         { armor: 0, chem: 3, therm: 0, hydro: 1 },
  a1_chemical:     { armor: 0, chem: 3, therm: 1, hydro: 0 },
  a1_foundry:      { armor: 1, chem: 0, therm: 3, hydro: 0 },
  a1_underground:  { armor: 0, chem: 0, therm: 0, hydro: 3 },
  a1_workshop:     { armor: 1, chem: 2, therm: 1, hydro: 0 },
  // Q2: main load
  a2_mechanical:   { armor: 3, chem: 0, therm: 0, hydro: 0 },
  a2_chemical:     { armor: 0, chem: 3, therm: 0, hydro: 0 },
  a2_thermal:      { armor: 0, chem: 0, therm: 3, hydro: 0 },
  a2_moisture:     { armor: 0, chem: 0, therm: 0, hydro: 3 },
  a2_combined:     { armor: 2, chem: 2, therm: 0, hydro: 0 },
  // Q3: main problem
  a3_dust:         { armor: 2, chem: 1, therm: 0, hydro: 0 },
  a3_corrosion:    { armor: 0, chem: 2, therm: 0, hydro: 1 },
  a3_thermal:      { armor: 0, chem: 0, therm: 2, hydro: 0 },
  a3_water:        { armor: 0, chem: 0, therm: 0, hydro: 2 },
  a3_new:          { armor: 1, chem: 1, therm: 1, hydro: 1 },
  // Q4: special requirements
  a4_esd:          { armor: 2, chem: 1, therm: 0, hydro: 0 },
  a4_hygiene:      { armor: 0, chem: 2, therm: 0, hydro: 0 },
  a4_fire:         { armor: 0, chem: 0, therm: 2, hydro: 0 },
  a4_waterproof:   { armor: 0, chem: 0, therm: 0, hydro: 2 },
  a4_superflat:    { armor: 2, chem: 0, therm: 0, hydro: 0 },
  a4_none:         { armor: 0, chem: 0, therm: 0, hydro: 0 },
};

type Question = { key: string; answers: { id: string; scoreKey: string }[] };

const QUESTIONS: Question[] = [
  { key: 'q1', answers: [
    { id: 'a1', scoreKey: 'a1_logistics' },
    { id: 'a2', scoreKey: 'a1_factory' },
    { id: 'a3', scoreKey: 'a1_food' },
    { id: 'a4', scoreKey: 'a1_chemical' },
    { id: 'a5', scoreKey: 'a1_foundry' },
    { id: 'a6', scoreKey: 'a1_underground' },
    { id: 'a7', scoreKey: 'a1_workshop' },
  ]},
  { key: 'q2', answers: [
    { id: 'a1', scoreKey: 'a2_mechanical' },
    { id: 'a2', scoreKey: 'a2_chemical' },
    { id: 'a3', scoreKey: 'a2_thermal' },
    { id: 'a4', scoreKey: 'a2_moisture' },
    { id: 'a5', scoreKey: 'a2_combined' },
  ]},
  { key: 'q3', answers: [
    { id: 'a1', scoreKey: 'a3_dust' },
    { id: 'a2', scoreKey: 'a3_corrosion' },
    { id: 'a3', scoreKey: 'a3_thermal' },
    { id: 'a4', scoreKey: 'a3_water' },
    { id: 'a5', scoreKey: 'a3_new' },
  ]},
  { key: 'q4', answers: [
    { id: 'a1', scoreKey: 'a4_esd' },
    { id: 'a2', scoreKey: 'a4_hygiene' },
    { id: 'a3', scoreKey: 'a4_fire' },
    { id: 'a4', scoreKey: 'a4_waterproof' },
    { id: 'a5', scoreKey: 'a4_superflat' },
    { id: 'a6', scoreKey: 'a4_none' },
  ]},
];

function calcResult(chosen: string[]): { primary: SystemKey; secondary: SystemKey | null } {
  const scores: Scores = { armor: 0, chem: 0, therm: 0, hydro: 0 };
  chosen.forEach(key => {
    const delta = ANSWER_SCORES[key];
    if (delta) (Object.keys(delta) as SystemKey[]).forEach(s => { scores[s] += delta[s]; });
  });
  const sorted = (Object.keys(scores) as SystemKey[]).sort((a, b) => scores[b] - scores[a]);
  const primary = sorted[0];
  const secondary = scores[sorted[1]] >= 3 && sorted[1] !== primary ? sorted[1] : null;
  return { primary, secondary };
}

export const SystemSelectorPage: React.FC = () => {
  usePageMeta('systemselector');
  const { t } = useTranslation('systemselector');
  const { lang, to } = useLang();
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 0-3 = questions, 4 = result
  const [chosen, setChosen] = useState<string[]>([]);

  const isResult = step === QUESTIONS.length;

  const handleAnswer = (scoreKey: string) => {
    const next = [...chosen, scoreKey];
    setChosen(next);
    if (step + 1 === QUESTIONS.length) {
      setStep(QUESTIONS.length);
    } else {
      setStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (step === 0) return;
    setChosen(c => c.slice(0, -1));
    setStep(s => s - 1);
  };

  const handleRestart = () => { setStep(0); setChosen([]); };

  const result = isResult ? calcResult(chosen) : null;

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col">
      <Navbar />

      {/* Hero header — matches site-wide pattern */}
      <section className="relative pt-32 pb-16 bg-[#080808] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-10">

            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[2px] w-12 bg-geo-yellow shadow-[0_0_15px_#FFCC00]"></div>
                <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  {t('eyebrow')}
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                {t('title')}
              </h1>
              <p className="text-gray-500 text-sm font-mono uppercase tracking-widest border-l-2 border-[#333] pl-4">
                {t('subtitle')}
              </p>
            </div>

            {/* System indicators — desktop */}
            <div className="hidden md:flex gap-6 flex-shrink-0">
              {(Object.entries(SYSTEM_META) as [SystemKey, typeof SYSTEM_META[SystemKey]][]).map(([key, meta]) => {
                const Icon = meta.icon;
                return (
                  <div key={key} className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center">
                      <Icon className="w-5 h-5" style={{ color: meta.color }} strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] text-gray-600 font-black tracking-widest uppercase">
                      {key.toUpperCase()}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      <main className="flex-1 flex flex-col items-center justify-start px-4 py-14 md:py-20">

        {!isResult ? (
          <>
            {/* Progress bar */}
            <div className="w-full max-w-2xl mb-8">
              <div className="flex justify-between text-[10px] text-gray-600 font-bold tracking-widest uppercase mb-2">
                <span>{t('progress', { current: step + 1, total: QUESTIONS.length })}</span>
                {step > 0 && (
                  <button onClick={handleBack} className="flex items-center gap-1 text-gray-500 hover:text-white transition-colors">
                    <ChevronLeft className="w-3 h-3" />
                    {t('back')}
                  </button>
                )}
              </div>
              <div className="w-full h-px bg-[#222]">
                <div
                  className="h-px bg-geo-yellow transition-all duration-500"
                  style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="w-full max-w-2xl">
              <h2 className="text-white font-black text-lg md:text-xl uppercase tracking-tight mb-6 text-center">
                {t(`${QUESTIONS[step].key}.text`)}
              </h2>
              <div className="flex flex-col gap-3">
                {QUESTIONS[step].answers.map((ans) => (
                  <button
                    key={ans.id}
                    onClick={() => handleAnswer(ans.scoreKey)}
                    className="w-full text-left px-5 py-4 border border-[#2a2a2a] text-gray-400 text-sm font-semibold tracking-wide hover:border-geo-yellow hover:text-white hover:bg-[#111] transition-all duration-200 group flex items-center justify-between"
                  >
                    <span>{t(`${QUESTIONS[step].key}.${ans.id}`)}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-geo-yellow flex-shrink-0 ml-4" />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : result ? (
          /* Result screen */
          <div className="w-full max-w-2xl">
            <p className="text-geo-yellow text-xs font-black tracking-[0.3em] uppercase mb-6 text-center">
              {t('result.title')}
            </p>

            {/* Primary system */}
            <PrimaryCard systemKey={result.primary} t={t} to={to} navigate={navigate} />

            {/* Secondary system */}
            {result.secondary && (
              <div className="mt-4">
                <p className="text-gray-600 text-[10px] font-black tracking-[0.25em] uppercase mb-3">
                  {t('result.secondary')}
                </p>
                <SecondaryCard systemKey={result.secondary} t={t} to={to} navigate={navigate} />
              </div>
            )}

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate(to('/contacts'))}
                className="flex-1 px-6 py-3 bg-geo-yellow text-black text-xs font-black uppercase tracking-wider hover:bg-white transition-colors"
              >
                {t('result.ctaProject')}
              </button>
              <button
                onClick={() => navigate(to('/request-inspection'))}
                className="flex-1 px-6 py-3 border border-[#444] text-gray-400 text-xs font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors"
              >
                {t('result.ctaInspection')}
              </button>
            </div>

            {/* Restart */}
            <div className="mt-6 text-center">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 text-gray-600 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors mx-auto"
              >
                <RotateCcw className="w-3 h-3" />
                {t('result.restart')}
              </button>
            </div>
          </div>
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

function PrimaryCard({ systemKey, t, to, navigate }: { systemKey: SystemKey; t: any; to: (p: string) => string; navigate: any }) {
  const meta = SYSTEM_META[systemKey];
  const Icon = meta.icon;
  const systemName = `GEONYX ${systemKey.toUpperCase()}`;

  return (
    <div className="border border-[#2a2a2a] bg-[#0a0a0a] p-6">
      <p className="text-gray-600 text-[10px] font-black tracking-[0.25em] uppercase mb-4">
        {t('result.primary')}
      </p>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-12 h-12 border border-[#333] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6" style={{ color: meta.color }} strokeWidth={1.5} />
        </div>
        <div>
          <p className="text-white font-black text-xl uppercase tracking-tight">{systemName}</p>
        </div>
      </div>
      <p className="text-gray-500 text-xs font-bold tracking-widest uppercase mb-2">
        {t('result.whyTitle')}
      </p>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">
        {t(`result.${systemKey}.why`)}
      </p>
      <button
        onClick={() => navigate(to(SYSTEM_META[systemKey].link))}
        className="flex items-center gap-2 text-xs font-black uppercase tracking-wider transition-colors"
        style={{ color: meta.color }}
      >
        {t('result.ctaSystem')}
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}

function SecondaryCard({ systemKey, t, to, navigate }: { systemKey: SystemKey; t: any; to: (p: string) => string; navigate: any }) {
  const meta = SYSTEM_META[systemKey];
  const Icon = meta.icon;

  return (
    <div className="border border-[#1e1e1e] bg-[#080808] px-5 py-4 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <Icon className="w-5 h-5 flex-shrink-0" style={{ color: meta.color }} strokeWidth={1.5} />
        <p className="text-gray-400 text-sm font-bold uppercase tracking-wider">
          GEONYX {systemKey.toUpperCase()}
        </p>
      </div>
      <button
        onClick={() => navigate(to(SYSTEM_META[systemKey].link))}
        className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-gray-600 hover:text-white transition-colors flex-shrink-0"
      >
        {t('result.ctaSystem')}
        <ArrowRight className="w-3 h-3" />
      </button>
    </div>
  );
}
