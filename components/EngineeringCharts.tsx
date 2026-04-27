import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

// ─── Animated number counter ───────────────────────────────────────────────
export const AnimatedCounter: React.FC<{
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}> = ({ to, decimals = 0, duration = 1.6, delay = 0, suffix = '', prefix = '', className }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    let startTs: number | null = null;
    const tick = (t: number) => {
      if (startTs == null) startTs = t;
      const elapsed = (t - startTs) / 1000 - delay;
      if (elapsed < 0) { raf = requestAnimationFrame(tick); return; }
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(eased * to);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, delay]);

  return <span ref={ref} className={className}>{prefix}{val.toFixed(decimals)}{suffix}</span>;
};

// ─── Shared card chrome ────────────────────────────────────────────────────
const ChartCard: React.FC<{
  Icon: LucideIcon;
  title: string;
  note?: string;
  delay?: number;
  replayKey: number;
  onReplay: () => void;
  children: React.ReactNode;
  innerKey: string;
}> = ({ Icon, title, note, delay = 0, replayKey, onReplay, children, innerKey }) => (
  <motion.div
    className="bg-gradient-to-br from-[#141414] to-[#0d0d0d] p-8 border border-[#222] hover:border-geo-yellow/30 transition-colors cursor-default relative overflow-hidden"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut', delay }}
    onMouseEnter={onReplay}
  >
    <h3 className="text-white font-bold uppercase mb-6 flex items-center gap-2">
      <Icon className="text-geo-yellow w-5 h-5" /> {title}
    </h3>
    <div key={`${innerKey}-${replayKey}`}>
      {children}
    </div>
    {note && <p className="text-gray-500 text-xs mt-6 text-center leading-relaxed">{note}</p>}
  </motion.div>
);

// ─── Bar shape used by both horizontal and vertical charts ─────────────────
export type ChartBar = {
  label: string;
  percent: number;       // 0-100, how full the bar is
  color: 'red' | 'orange' | 'yellow' | 'gray' | 'blue' | 'cyan';
  hero?: boolean;        // GEONYX bar — gets glow + shimmer
  thin?: boolean;        // tiny reference bar (e.g. Diamond)
  value?: number;        // numeric value, animates as counter
  decimals?: number;
  suffix?: string;
  prefix?: string;
  valueText?: string;    // static text alternative to value (e.g. "Significant change")
};

const BAR_COLORS: Record<ChartBar['color'], { fill: string; border: string; gradient: string; glow: string }> = {
  red:    { fill: 'bg-red-700',    border: 'border-red-500',    gradient: 'from-red-900/70 to-red-700/40',    glow: 'shadow-[0_0_18px_rgba(239,68,68,0.4)]' },
  orange: { fill: 'bg-orange-600', border: 'border-orange-500', gradient: 'from-orange-900/70 to-orange-700/40', glow: 'shadow-[0_0_18px_rgba(249,115,22,0.4)]' },
  yellow: { fill: 'bg-geo-yellow', border: 'border-geo-yellow', gradient: 'from-geo-yellow to-yellow-600/70', glow: 'shadow-[0_0_22px_rgba(255,204,0,0.45)]' },
  gray:   { fill: 'bg-gray-600',   border: 'border-gray-600',   gradient: 'from-gray-700/70 to-gray-600/40', glow: '' },
  blue:   { fill: 'bg-blue-700',   border: 'border-blue-700',   gradient: 'from-blue-900/70 to-blue-700/40', glow: '' },
  cyan:   { fill: 'bg-cyan-800',   border: 'border-cyan-800',   gradient: 'from-cyan-900/70 to-cyan-800/40', glow: '' },
};

// ─── 1. Horizontal bars card ───────────────────────────────────────────────
export const HorizontalBarsCard: React.FC<{
  Icon: LucideIcon;
  title: string;
  note?: string;
  bars: ChartBar[];
  scaleTicks?: number;     // shows 1..N reference ticks at top
  delay?: number;
}> = ({ Icon, title, note, bars, scaleTicks, delay }) => {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <ChartCard Icon={Icon} title={title} note={note} delay={delay} replayKey={replayKey} onReplay={() => setReplayKey(k => k + 1)} innerKey="hbars">
      {scaleTicks && (
        <div className="relative mb-3 h-3">
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#222]"></div>
          <div className="absolute inset-x-0 top-0 flex justify-between">
            {Array.from({ length: scaleTicks }, (_, i) => i + 1).map(n => (
              <span key={n} className="text-[8px] text-gray-700 font-mono">{n}</span>
            ))}
          </div>
        </div>
      )}
      <div className="space-y-5">
        {bars.map((row, i) => {
          const c = BAR_COLORS[row.color];
          const stagger = i * 0.15;
          return (
            <div key={row.label}>
              <div className={`flex items-center text-xs uppercase justify-between ${row.hero ? 'text-geo-yellow font-black' : 'text-gray-400 font-bold'}`}>
                <span>{row.label}</span>
                {row.valueText
                  ? <span>{row.valueText}</span>
                  : <AnimatedCounter to={row.value ?? 0} decimals={row.decimals ?? 0} duration={1.4} delay={stagger} suffix={row.suffix} prefix={row.prefix} />
                }
              </div>
              <div className={`w-full ${row.thin ? 'h-1' : row.hero ? `h-4 border ${c.border} ${c.glow}` : 'h-2'} bg-[#1a1a1a] overflow-hidden mt-1.5 relative`}>
                <motion.div
                  className={`h-full ${c.fill} relative`}
                  initial={{ width: 0 }}
                  animate={{ width: `${row.percent}%` }}
                  transition={{ duration: 1.4, delay: stagger, ease: [0.16, 1, 0.3, 1] }}
                >
                  {row.hero && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      initial={{ x: '-100%' }}
                      animate={{ x: '200%' }}
                      transition={{ duration: 1.8, delay: stagger + 1.2, repeat: Infinity, repeatDelay: 2.5, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </ChartCard>
  );
};

// ─── 2. Vertical bars card ─────────────────────────────────────────────────
export const VerticalBarsCard: React.FC<{
  Icon: LucideIcon;
  title: string;
  note?: string;
  bars: ChartBar[];
  yAxisLabels?: (string | number)[];
  badge?: string;           // optional pill below chart
  delay?: number;
}> = ({ Icon, title, note, bars, yAxisLabels, badge, delay }) => {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <ChartCard Icon={Icon} title={title} note={note} delay={delay} replayKey={replayKey} onReplay={() => setReplayKey(k => k + 1)} innerKey="vbars">
      <div className="h-56 relative pl-9">
        {yAxisLabels && yAxisLabels.map((tick, i) => (
          <div key={`tick-${i}`} className="absolute left-0 right-0 flex items-center" style={{ top: `${(i / Math.max(yAxisLabels.length - 1, 1)) * 88}%` }}>
            <span className="text-[9px] text-gray-600 font-mono w-7 text-right pr-2">{tick}</span>
            <div className="flex-1 border-t border-dashed border-[#222]"></div>
          </div>
        ))}

        <div className="absolute inset-0 pl-9 flex items-end justify-around gap-6 pb-0">
          {bars.map((row, i) => {
            const c = BAR_COLORS[row.color];
            const stagger = 0.2 + i * 0.2;
            const valueColorClass = row.color === 'yellow' ? 'text-geo-yellow' : row.color === 'red' ? 'text-red-500' : row.color === 'orange' ? 'text-orange-500' : 'text-gray-400';
            return (
              <div key={row.label} className="flex flex-col items-center justify-end h-full w-24 relative">
                <motion.span
                  className={`${valueColorClass} font-black text-sm mb-2 font-mono`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: stagger + 1.2 }}
                >
                  {row.valueText
                    ? row.valueText
                    : <>{row.prefix}<AnimatedCounter to={row.value ?? 0} decimals={row.decimals ?? 0} duration={1.4} delay={stagger} suffix={row.suffix} /></>
                  }
                </motion.span>
                <motion.div
                  className={`w-full bg-gradient-to-t ${c.gradient} border-t border-x ${c.border} relative overflow-hidden ${row.hero ? c.glow : ''}`}
                  initial={{ height: 0 }}
                  animate={{ height: `${row.percent}%` }}
                  transition={{ duration: 1.4, delay: stagger, ease: [0.16, 1, 0.3, 1] }}
                >
                  {row.hero && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-transparent via-white/40 to-transparent"
                      initial={{ y: '100%' }}
                      animate={{ y: '-200%' }}
                      transition={{ duration: 2, delay: stagger + 1.4, repeat: Infinity, repeatDelay: 3, ease: 'easeInOut' }}
                    />
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-around px-4 pt-3 pl-9 gap-6">
        {bars.map(row => (
          <span key={`xlabel-${row.label}`} className={`text-[10px] uppercase font-bold w-24 text-center ${row.hero ? 'text-geo-yellow font-black' : 'text-gray-400'}`}>
            {row.label}
          </span>
        ))}
      </div>
      {badge && (
        <motion.div
          className="mt-3 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.9 }}
        >
          <span className="inline-block text-[10px] font-black uppercase tracking-[0.2em] text-geo-yellow border border-geo-yellow/40 bg-geo-yellow/5 px-3 py-1">
            {badge}
          </span>
        </motion.div>
      )}
    </ChartCard>
  );
};

// ─── 3. Dual-curve card (red dashed vs yellow solid) ───────────────────────
export const DualCurveCard: React.FC<{
  Icon: LucideIcon;
  title: string;
  note?: string;
  redPath: string;
  yellowPath: string;
  yellowAreaPath?: string;        // optional closed path for area fill under yellow curve
  redLabel: string;
  yellowLabel: string;
  redLabelPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  yellowLabelPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  redDot?: { x: number; y: number };       // SVG coords 0-100
  yellowDot?: { x: number; y: number };
  xLabel?: string;
  yLabel?: string;
  delay?: number;
}> = ({
  Icon, title, note, redPath, yellowPath, yellowAreaPath,
  redLabel, yellowLabel,
  redLabelPosition = 'top-left', yellowLabelPosition = 'top-right',
  redDot, yellowDot, xLabel, yLabel, delay,
}) => {
  const [replayKey, setReplayKey] = useState(0);

  const positionClass = (pos: string) => {
    switch (pos) {
      case 'top-left':     return 'top-2 left-2';
      case 'top-right':    return 'top-2 right-2';
      case 'bottom-left':  return 'bottom-2 left-2';
      case 'bottom-right': return 'bottom-2 right-2';
      default:             return 'top-2 left-2';
    }
  };

  const gradId = `dc-area-${title.replace(/\s/g, '-').slice(0, 20)}`;

  return (
    <ChartCard Icon={Icon} title={title} note={note} delay={delay} replayKey={replayKey} onReplay={() => setReplayKey(k => k + 1)} innerKey="dcurve">
      <div className="relative w-full h-48">
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFCC00" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#FFCC00" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Gridlines */}
          {[20, 40, 60, 80].map(y => (
            <line key={`hg-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#222" strokeWidth="0.3" strokeDasharray="1 2" />
          ))}
          {[25, 50, 75].map(x => (
            <line key={`vg-${x}`} x1={x} y1="0" x2={x} y2="100" stroke="#222" strokeWidth="0.3" strokeDasharray="1 2" />
          ))}
          <line x1="0" y1="100" x2="100" y2="100" stroke="#444" strokeWidth="0.6" />
          <line x1="0" y1="0" x2="0" y2="100" stroke="#444" strokeWidth="0.6" />

          {/* Red dashed curve (brittle / standard) */}
          <motion.path
            d={redPath}
            fill="none"
            stroke="#ef4444"
            strokeWidth="1.8"
            strokeDasharray="3 1.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, delay: 0.3, ease: 'easeOut' }}
          />

          {/* Optional yellow area fill */}
          {yellowAreaPath && (
            <motion.path
              d={yellowAreaPath}
              fill={`url(#${gradId})`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.6 }}
            />
          )}

          {/* Yellow solid curve (GEONYX) */}
          <motion.path
            d={yellowPath}
            fill="none"
            stroke="#FFCC00"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 1.6, ease: 'easeOut' }}
          />
        </svg>

        {/* Round HTML dots (avoid SVG circle stretching from preserveAspectRatio=none) */}
        {redDot && (
          <>
            <motion.div
              className="absolute w-3 h-3 bg-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_14px_rgba(239,68,68,0.7)] z-10"
              style={{ left: `${redDot.x}%`, top: `${redDot.y}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.div
              className="absolute w-3 h-3 border-2 border-red-500 rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${redDot.x}%`, top: `${redDot.y}%` }}
              animate={{ scale: [1, 2.6], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, delay: 1.6, repeat: Infinity, repeatDelay: 0.4, ease: 'easeOut' }}
            />
          </>
        )}
        {yellowDot && (
          <>
            <motion.div
              className="absolute w-4 h-4 bg-geo-yellow rounded-full -translate-x-1/2 -translate-y-1/2 shadow-[0_0_22px_rgba(255,204,0,0.9)] z-10"
              style={{ left: `${yellowDot.x}%`, top: `${yellowDot.y}%` }}
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.8, 1] }}
              transition={{ duration: 0.5, delay: 3.2 }}
            />
            <motion.div
              className="absolute w-4 h-4 border-2 border-geo-yellow rounded-full -translate-x-1/2 -translate-y-1/2 z-10"
              style={{ left: `${yellowDot.x}%`, top: `${yellowDot.y}%` }}
              animate={{ scale: [1, 3], opacity: [0.8, 0] }}
              transition={{ duration: 2, delay: 3.6, repeat: Infinity, repeatDelay: 0.3, ease: 'easeOut' }}
            />
          </>
        )}

        <motion.div
          className={`absolute ${positionClass(redLabelPosition)} text-[11px] font-bold text-red-400 whitespace-nowrap bg-red-500/10 border border-red-500/40 px-2.5 py-1 rounded-sm tracking-wide z-20`}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          {redLabel}
        </motion.div>
        <motion.div
          className={`absolute ${positionClass(yellowLabelPosition)} text-[11px] font-bold text-geo-yellow whitespace-nowrap bg-geo-yellow/10 border border-geo-yellow/40 px-2.5 py-1 rounded-sm tracking-wide shadow-[0_0_12px_rgba(255,204,0,0.15)] z-20`}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 3.4 }}
        >
          {yellowLabel}
        </motion.div>
      </div>
      {(xLabel || yLabel) && (
        <div className="flex justify-between text-[10px] text-gray-500 font-mono mt-3">
          <span>{xLabel}</span>
          <span>{yLabel}</span>
        </div>
      )}
    </ChartCard>
  );
};
