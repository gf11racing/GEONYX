
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Leaf, Award, FileCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const PARTNERS_STATIC = [
  { name: "AURUBIS",   tKey: "aurubis" },
  { name: "KAUFLAND",  tKey: "kaufland" },
  { name: "LUFTHANSA", tKey: "lufthansa" },
  { name: "DUNDEE",    tKey: "dundee" },
];

const CERTS_STATIC = [
  { name: "ISO 9001",   tKey: "iso9001",  icon: ShieldCheck },
  { name: "ISO 14001",  tKey: "iso14001", icon: Leaf },
  { name: "HACCP",      tKey: "haccp",    icon: Award },
  { name: "BDS EN 206", tKey: "bds",      icon: FileCheck },
];

export const LogoTicker: React.FC = () => {
  const [isPartners, setIsPartners] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const { t } = useTranslation('common');

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setOpacity(0);
      setTimeout(() => {
        setIsPartners((prev) => !prev);
        setOpacity(1);
      }, 600);
    }, 5000);
    return () => clearInterval(cycleInterval);
  }, []);

  const activeData = isPartners ? PARTNERS_STATIC : CERTS_STATIC;

  return (
    <div className="w-full">
      <div className="mb-6 transition-opacity duration-700 ease-in-out" style={{ opacity }}>
        <span className="text-geo-yellow font-black uppercase tracking-[0.3em] text-xs md:text-sm">
          {isPartners ? t('ticker.partnersLabel') : t('ticker.certsLabel')}
        </span>
      </div>

      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-start transition-opacity duration-700 ease-in-out"
        style={{ opacity }}
      >
        {activeData.map((item, index) => (
          <div key={index} className="flex flex-col justify-start group cursor-default">
            <div className="h-10 flex items-center mb-2">
              {'icon' in item && item.icon ? (
                <div className="flex items-center gap-3">
                  <item.icon className="w-8 h-8 text-white group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                  <span className="text-2xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-geo-yellow transition-colors">
                    {item.name}
                  </span>
                </div>
              ) : (
                <span className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-geo-yellow transition-colors">
                  {item.name}
                </span>
              )}
            </div>
            <div className="h-4 flex items-center">
              <div className="w-4 h-[1px] bg-white/20 mr-2 group-hover:w-8 group-hover:bg-geo-yellow transition-all duration-500"></div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors">
                {t(`ticker.${item.tKey}`)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
