import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Facebook, ArrowRight, Award, ShieldCheck, Globe, BadgeCheck } from 'lucide-react';
import { Button } from './Button';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

export const Footer: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation('footer');
  const { lang, to } = useLang();

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();

    if (target.startsWith('/')) {
      navigate(to(target));
      window.scrollTo(0, 0);
    } else if (target.startsWith('#')) {
      const homePath = `/${lang}`;
      if (location.pathname === homePath) {
        const element = document.getElementById(target.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(homePath, { state: { target } });
      }
    }
  };

  return (
    <footer id="footer" className="bg-nyx-dark text-white border-t border-[#222]">

      {/* 1. PRE-FOOTER CTA SECTION */}
      <div className="w-full bg-[#111] border-b border-[#222]">
        <div className="container mx-auto px-6 md:px-10 py-16 md:py-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-3xl text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight uppercase">
              {t('cta.titleLine1')} <br className="hidden md:block"/>
              <span className="text-geo-yellow">{t('cta.titleHighlight')}</span>
            </h3>
            <p className="text-gray-400 text-lg font-light">
              {t('cta.body')}
            </p>
          </div>
          <div className="w-full lg:w-auto flex justify-center">
             <a href={to('/request-inspection')} onClick={(e) => handleNavigation(e, '/request-inspection')} className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto py-5 px-10 text-sm font-bold shadow-[0_0_20px_rgba(255,204,0,0.2)] uppercase">
                {t('cta.btn')} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN FOOTER LAYOUT */}
      <div className="w-full bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-10 pt-20 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">

          {/* COLUMN 1: CORPORATE IDENTITY */}
          <div className="col-span-1">
            <div className="flex items-center mb-6 cursor-pointer" onClick={() => { navigate(`/${lang}`); window.scrollTo(0, 0); }}>
              <img
                 src="/logoGEONYX.png"
                 alt="GEONYX"
                 className="h-9 md:h-10 w-auto object-contain !bg-transparent"
              />
            </div>
            <p className="text-gray-400 text-sm font-normal leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <div className="border-t border-[#222] pt-6">
                <p className="text-white font-bold text-xs uppercase mb-1">GEONYX GROUP LTD.</p>
                <p className="text-gray-500 text-xs font-mono">VAT (ЕИК): BG206972055</p>
            </div>
          </div>

          {/* COLUMN 2: ENGINEERING SYSTEMS */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-geo-yellow"></span> {t('systems.heading')}
            </h5>
            <ul className="space-y-4">
              <li>
                <a href={to('/armor')} onClick={(e) => handleNavigation(e, '/armor')} className="text-gray-400 hover:text-geo-yellow transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('systems.armor')}
                </a>
              </li>
              <li>
                <a href={to('/chem')} onClick={(e) => handleNavigation(e, '/chem')} className="text-gray-400 hover:text-geo-yellow transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('systems.chem')}
                </a>
              </li>
              <li>
                <a href={to('/therm')} onClick={(e) => handleNavigation(e, '/therm')} className="text-gray-400 hover:text-geo-yellow transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('systems.therm')}
                </a>
              </li>
              <li>
                <a href={to('/hydro')} onClick={(e) => handleNavigation(e, '/hydro')} className="text-gray-400 hover:text-geo-yellow transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('systems.hydro')}
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: ENGINEERING PORTAL */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-geo-yellow"></span> {t('portal.heading')}
            </h5>
            <ul className="space-y-4">
              <li>
                <a href={to('/technical-maps')} onClick={(e) => handleNavigation(e, '/technical-maps')} className="text-gray-400 hover:text-white transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.techMaps')}
                </a>
              </li>
              <li>
                <a href={to('/cad-bim')} onClick={(e) => handleNavigation(e, '/cad-bim')} className="text-gray-400 hover:text-white transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.cadBim')}
                </a>
              </li>
              <li>
                <a href={to('/certificates')} onClick={(e) => handleNavigation(e, '/certificates')} className="text-gray-400 hover:text-white transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.certs')}
                </a>
              </li>
              <li>
                <a href={to('/references')} onClick={(e) => handleNavigation(e, '/references')} className="text-gray-400 hover:text-white transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.references')}
                </a>
              </li>
              <li>
                <a href={to('/hseq')} onClick={(e) => handleNavigation(e, '/hseq')} className="text-gray-400 hover:text-white transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.hseq')}
                </a>
              </li>
              <li>
                <a href={to('/licensing')} onClick={(e) => handleNavigation(e, '/licensing')} className="text-gray-400 hover:text-geo-yellow transition-colors text-sm font-normal uppercase tracking-wide">
                  {t('portal.licensing')}
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: GLOBAL CONTACTS */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-geo-yellow"></span> {t('contacts.heading')}
            </h5>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <MapPin className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow mr-4 mt-0.5 transition-colors" />
                <span className="text-gray-400 text-sm font-normal">
                  {t('contacts.addressLine1')}<br/>
                  {t('contacts.addressLine2')}<br/>
                  {t('contacts.addressLine3')}
                </span>
              </li>

              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow mr-4 transition-colors" />
                <a href="tel:+359897000011" className="text-gray-400 text-sm font-bold tracking-wide group-hover:text-geo-yellow transition-colors">+359 897 0000 11</a>
              </li>

              <li className="flex items-center group">
                <Phone className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow mr-4 transition-colors" />
                <a href="tel:+359894343990" className="text-gray-400 text-sm font-bold tracking-wide group-hover:text-geo-yellow transition-colors">+359 894 343 990</a>
              </li>

              <li className="flex items-center group">
                <Mail className="w-5 h-5 text-gray-500 group-hover:text-geo-yellow mr-4 transition-colors" />
                <span className="text-gray-400 text-sm font-normal hover:text-white transition-colors">office@geonyxgroup.com</span>
              </li>
            </ul>
          </div>

          {/* COLUMN 5: NEWSLETTER */}
          <div>
            <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-geo-yellow"></span> {t('newsletter.heading')}
            </h5>

            <div className="flex gap-4 mb-10">
              <a href="https://linkedin.com/company/geonyx" target="_blank" rel="noopener noreferrer" aria-label="GEONYX в LinkedIn" className="bg-[#222] p-3 rounded hover:bg-blue-700 hover:text-white text-gray-400 transition-all duration-300">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com/GEONYXGROUP" target="_blank" rel="noopener noreferrer" aria-label="GEONYX във Facebook" className="bg-[#222] p-3 rounded hover:bg-blue-600 hover:text-white text-gray-400 transition-all duration-300">
                <Facebook size={20} />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-8">
              <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-3">
                {t('newsletter.label')}
              </label>
              <div className="flex relative mb-4">
                <input
                  type="email"
                  placeholder={t('newsletter.emailPlaceholder')}
                  className="w-full bg-[#151515] border border-gray-800 text-gray-300 text-sm py-3 px-4 focus:outline-none focus:border-geo-yellow transition-colors placeholder-gray-600"
                />
                <button className="absolute right-0 top-0 bottom-0 bg-geo-yellow text-nyx-dark px-4 font-bold hover:bg-white transition-colors text-xs uppercase">
                  {t('newsletter.btn')}
                </button>
              </div>
              <p className="text-[10px] text-gray-600 font-normal leading-tight">
                  {t('newsletter.disclaimer')}
              </p>
            </div>
          </div>
        </div>

        {/* 3. BOTTOM BAR */}
        <div className="border-t border-[#222] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-gray-600 text-xs font-bold uppercase tracking-wider">
              {t('legal.copyright')}
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              <a href={to('/privacy-policy')} onClick={(e) => handleNavigation(e, '/privacy-policy')} className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-wide font-bold">
                  {t('legal.privacy')}
              </a>
              <a href="#" className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-wide font-bold cursor-not-allowed opacity-50">
                  {t('legal.cookies')}
              </a>
              <a href={to('/terms-conditions')} onClick={(e) => handleNavigation(e, '/terms-conditions')} className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-wide font-bold">
                  {t('legal.terms')}
              </a>
              <a href={to('/hseq')} onClick={(e) => handleNavigation(e, '/hseq')} className="text-gray-500 text-xs hover:text-white transition-colors uppercase tracking-wide font-bold">
                  {t('legal.esg')}
              </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500">

             <div className="group flex flex-col items-center gap-2 cursor-default" title="Quality Management">
                <BadgeCheck className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">ISO 9001</span>
             </div>

             <div className="group flex flex-col items-center gap-2 cursor-default" title="Environmental Management">
                <ShieldCheck className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">ISO 14001</span>
             </div>

             <div className="group flex flex-col items-center gap-2 cursor-default" title="Global Standards">
                <Globe className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Global</span>
             </div>

             <div className="group flex flex-col items-center gap-2 cursor-default" title="Premium Quality">
                <Award className="w-6 h-6 text-gray-500 group-hover:text-geo-yellow transition-colors" strokeWidth={1.5} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Quality</span>
             </div>

          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};
