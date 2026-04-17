
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, ShoppingBag, Globe, Factory, Utensils, Sprout, Droplets, Zap, Truck, Building2, Activity, FileText, Download, Box, CheckCircle, Users, Briefcase, Leaf } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { SystemsMenu } from './SystemsMenu';
import logoGEONYX from '../assets/logoGEONYX.png';

// --- DATA: SOLUTIONS MEGA MENU (INDUSTRIES) ---
const SOLUTIONS_DATA = [
  {
    id: 'heavy',
    title: 'ТЕЖКА ИНДУСТРИЯ И ЛОГИСТИКА',
    desc: 'Подове и системи за екстремни механични натоварвания.',
    href: '/heavy-industry',
    image: '/GEONYX-HEAVY-INDUSTRY-AND-LOGISTICS-background.webp',
    icon: Factory,
    badge: 'ЕКСТРЕМНИ НАТОВАРВАНИЯ'
  },
  {
    id: 'food',
    title: 'ХРАНИ, НАПИТКИ, ФАРМАЦИЯ И ХИГИЕНА',
    desc: 'Хигиена без компромис. Безфугови, лесни за измиване подове.',
    href: '/food-industry',
    image: '/GEONYX-FOOD-HERO.webp',
    icon: Utensils,
    badge: 'ХИГИЕНЕН КОНТРОЛ'
  },
  {
    id: 'agro',
    title: 'АГРО, БИОГАЗ, ТОРОВЕ И ЖИВОТИНСКИ СРЕДИ',
    desc: 'Защита от органични киселини, тор, амоняк и агресивни сокове.',
    href: '/agriculture',
    image: '/GEONYX-AGRO-HERO.webp',
    icon: Sprout,
    badge: 'ОРГАНИЧНА АГРЕСИЯ'
  },
  {
    id: 'water',
    title: 'ВОДА, ОТПАДЪЧНИ ВОДИ И МОРСКА ИНФРАСТРУКТУРА',
    desc: '100% водонепропускливост и устойчивост на соли и ерозия.',
    href: '/water-marine',
    image: '/GEONYX-WATERTIGHTNESS-UNDER-PRESSURE.webp',
    icon: Droplets,
    badge: 'ВОДНА ЗАЩИТА'
  },
  {
    id: 'energy',
    title: 'ЕНЕРГЕТИКА, МИНИ И ТЕЖКА ЗАЩИТА',
    desc: 'Негорими и химически устойчиви системи.',
    href: '/energy-defense',
    image: '/GEONYX-ENERGY-MINES-AND-HEAVY-DEFENSE.webp',
    icon: Zap,
    badge: 'КРИТИЧНА ИНФРАСТРУКТУРА'
  },
  {
    id: 'transport',
    title: 'ТРАНСПОРТ, ПАРКИНГИ, ГАРАЖИ И ДВИЖЕНИЕ',
    desc: 'Подове и рампи с високо сцепление, устойчиви на луга и соли.',
    href: '/infrastructure',
    image: '/GEONYX-parking-salt.webp',
    icon: Truck,
    badge: 'ЗОНИ С ИНТЕНЗИВЕН ТРАФИК'
  },
  {
    id: 'urban',
    title: 'ГРАДСКА СРЕДА, СТРОИТЕЛСТВО И ВИСОКА ТЕХНОЛОГИЯ',
    desc: 'UHPC решения за фасади и градска среда.',
    href: '/construction',
    image: '/GEONYX-RADA-AND-HIGH-TECH-ZONES.webp',
    icon: Building2,
    badge: 'ГРАДСКА ИНФРАСТРУКТУРА'
  }
];

const TECH_CENTER_DATA = [
  {
    id: 'arch-zone',
    title: 'АРХИТЕКТУРНА ЗОНА',
    desc: 'Текстури, PBR карти и визуални асети за проектиране.',
    href: '/architectural',
    image: '/GEONYX-Architectural.webp',
    label: 'DESIGN RESOURCES',
    heroTitle: 'DESIGN CENTER',
    buttonText: 'КЪМ ГАЛЕРИЯТА',
    icon: Box,
    badge: 'ПРОЕКТАНТСКА ПОДКРЕПА'
  },
  {
    id: 'tech-maps',
    title: 'ТЕХНИЧЕСКИ КАРТИ',
    desc: 'Подробни спецификации (TDS) и MSDS на всички системи.',
    href: '/technical-maps',
    image: '/GEONYX-technical-data-sheet.webp',
    label: 'SPECIFICATIONS',
    heroTitle: 'DOC CENTER',
    buttonText: 'ИЗТЕГЛИ TDS',
    icon: FileText,
    badge: 'ТЕХНИЧЕСКА ДОКУМЕНТАЦИЯ'
  },
  {
    id: 'cad-bim',
    title: 'CAD & BIM БИБЛИОТЕКА',
    desc: 'Готови системни детайли в .DWG и Revit формат.',
    href: '/cad-bim',
    image: '/GEONYX-CAD-BIM.webp',
    label: 'INTEGRATION',
    heroTitle: 'CAD / BIM ASSETS',
    buttonText: 'ЗАЯВИ ДОСТЪП',
    icon: Download,
    badge: 'BIM И ИНЖЕНЕРНИ МОДЕЛИ'
  },
  {
      id: 'certs',
      title: 'СЕРТИФИКАТИ',
      desc: 'HACCP, ISO и декларации за експлоатационни показатели.',
      href: '/certificates',
      image: '/GEONYX-Certificates.webp',
      label: 'COMPLIANCE',
      heroTitle: 'CERTIFICATION',
      buttonText: 'ВИЖ СЕРТИФИКАТИ',
      icon: CheckCircle,
      badge: 'СЪОТВЕТСТВИЕ И СЕРТИФИКАЦИЯ'
  }
];

const ABOUT_DATA = [
  {
    id: 'about-main',
    title: 'ЗА НАС',
    desc: 'Философия за иновации и устойчиво развитие.',
    href: '/about',
    subLinks: [],
    image: '/GEONYX-background-about.webp',
    label: 'ЗА КОМПАНИЯТА',
    heroTitle: 'ЗА НАС',
    buttonText: 'НАУЧЕТЕ ПОВЕЧЕ',
    icon: Users,
    badge: 'КОМПАНИЯТА'
  },
  {
    id: 'careers',
    title: 'КАРИЕРА И РАЗВИТИЕ',
    desc: 'Станете част от екипа на GEONYX.',
    href: '/careers',
    subLinks: [],
    image: '/GEONYX-background-careers.webp',
    label: 'ЕКИП & РАЗВИТИЕ',
    heroTitle: 'КАРИЕРА В GEONYX',
    buttonText: 'СВОБОДНИ ПОЗИЦИИ',
    icon: Briefcase,
    badge: 'ПРОФЕСИОНАЛНО РАЗВИТИЕ'
  },
  {
    id: 'hseq',
    title: 'HSEQ & УСТОЙЧИВОСТ',
    desc: 'Нашите ангажименти към здравето, безопасността и природата.',
    href: '/hseq',
    subLinks: [],
    image: '/HSEQ1.webp',
    label: 'ОТГОВОРНОСТ',
    heroTitle: 'СТАНДАРТИ ЗА СИГУРНОСТ',
    buttonText: 'ВИЖ ПОВЕЧЕ',
    icon: Leaf,
    badge: 'БЕЗОПАСНОСТ И УСТОЙЧИВОСТ'
  }
];

interface NavItem {
  label: string;
  href: string;
  isMegaMenu?: boolean;
  children?: { label: string; href: string }[];
}

const NAV_ITEMS: NavItem[] = [
  {
    label: 'РЕШЕНИЯ',
    href: '#solutions',
    isMegaMenu: true,
    children: [
      { label: 'Тежка Индустрия', href: '/heavy-industry' },
      { label: 'Храни и Фармация', href: '/food-industry' },
      { label: 'Агро и Екология', href: '/agriculture' },
      { label: 'Водна Инфраструктура', href: '/water-marine' },
      { label: 'Енергетика и Мини', href: '/energy-defense' },
      { label: 'Транспорт и Паркинги', href: '/infrastructure' },
      { label: 'Градска Среда', href: '/construction' },
    ]
  },
  {
    label: 'СИСТЕМИ',
    href: '#systems',
    isMegaMenu: true,
    children: [
      { label: 'GEONYX ARMOR (МЕХАНИЧНА УСТОЙЧИВОСТ)', href: '/armor' },
      { label: 'GEONYX CHEM (ХИМИЧЕСКА ЗАЩИТА)', href: '/chem' },
      { label: 'GEONYX HYDRO (ВОДНА ЗАЩИТА)', href: '/hydro' },
      { label: 'GEONYX THERM (ТЕРМИЧНА БЕЗОПАСНОСТ)', href: '/therm' },
    ]
  },
  {
    label: 'ТЕХНИЧЕСКИ ЦЕНТЪР',
    href: '#tech-center',
    isMegaMenu: true,
    children: [
      { label: 'Архитектурна Зона', href: '/architectural' },
      { label: 'Технически Карти', href: '/technical-maps' },
      { label: 'CAD & BIM Детайли', href: '/cad-bim' },
      { label: 'Сертификати', href: '/certificates' },
    ]
  },
  { label: 'РЕФЕРЕНЦИИ', href: '/references' },
  { 
    label: 'КОМПАНИЯТА', 
    href: '/about',
    isMegaMenu: true,
    children: [
      { label: 'За Нас', href: '/about' },
      { label: 'Кариери', href: '/careers' },
      { label: 'HSEQ & Устойчивост', href: '/hseq' },
    ]
  },
  { label: 'КОНТАКТИ', href: '/contacts' },
];

const LANGUAGES = [
  { code: 'BG', label: 'Български' },
  { code: 'EN', label: 'English' },
  { code: 'DE', label: 'Deutsch' },
  { code: 'FR', label: 'Français' },
  { code: 'ES', label: 'Español' },
];

interface MegaMenuProps {
  data: any[];
  onClose: () => void;
  onNavigate: (href: string) => void;
}

// THE UNIFIED MEGA MENU COMPONENT
const UnifiedMegaMenu: React.FC<MegaMenuProps> = ({ data, onClose, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState(data[0]);

  return (
    <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] bg-[#1a1a1a] border-t-2 border-geo-yellow shadow-2xl flex animate-in fade-in slide-in-from-top-2 duration-200 h-[560px]"
        // Removed onMouseLeave here, handled by parent wrapper
    >
        {/* LEFT COLUMN: NAVIGATION LIST (35%) */}
        <div className="w-[35%] py-0 bg-[#1a1a1a] border-r border-[#252525] flex flex-col overflow-y-auto custom-scrollbar">
            {data.map((cat: any) => (
                <div 
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat)}
                    onClick={() => onNavigate(cat.href)}
                    className={`group px-8 py-5 cursor-pointer border-l-4 border-b border-[#252525] transition-all duration-200 flex flex-col justify-center ${
                        activeCategory.id === cat.id 
                        ? 'border-l-geo-yellow bg-[#222]' 
                        : 'border-l-transparent hover:bg-[#1f1f1f] hover:border-l-geo-yellow'
                    }`}
                >
                    <div className="flex items-center justify-between mb-2">
                        <h3 className={`font-bold uppercase text-sm transition-colors ${
                            activeCategory.id === cat.id ? 'text-geo-yellow' : 'text-white group-hover:text-geo-yellow'
                        }`}>
                            {cat.title}
                        </h3>
                        <ArrowRight className={`w-4 h-4 transition-colors ${
                            activeCategory.id === cat.id ? 'text-geo-yellow' : 'text-[#333] group-hover:text-geo-yellow'
                        }`} />
                    </div>
                    <p className="text-xs text-gray-500 font-normal leading-relaxed max-w-[95%] line-clamp-2">
                        {cat.desc}
                    </p>
                </div>
            ))}
        </div>

        {/* RIGHT COLUMN: PREVIEW (65%) */}
        <div className="w-[65%] relative group cursor-pointer overflow-hidden" onClick={() => onNavigate(activeCategory.href)}>
            {/* Background Image */}
            <img 
                key={activeCategory.id}
                src={activeCategory.image} 
                alt={activeCategory.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in zoom-in duration-500"
            />
            
            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-[url('')] opacity-20 pointer-events-none"></div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-12">
                  {/* Tech Badge */}
                <div className="inline-flex items-center gap-2 bg-geo-yellow text-black px-4 py-1.5 font-bold text-xs uppercase tracking-wider mb-6 shadow-lg">
                    {activeCategory.icon && <activeCategory.icon className="w-4 h-4" />}
                    {activeCategory.badge || activeCategory.label || 'GEONYX STANDARD'}
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-none mb-4 drop-shadow-xl">
                    {activeCategory.heroTitle || activeCategory.title}
                </h2>
                
                <p className="text-gray-300 text-lg font-light leading-relaxed max-w-lg mb-8 border-l-2 border-geo-yellow pl-4">
                    {activeCategory.desc}
                </p>

                <div className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest group-hover:text-geo-yellow transition-colors">
                    {activeCategory.buttonText || 'Научи повече'} <ArrowRight className="w-4 h-4" />
                </div>
            </div>
        </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'solutions' | 'systems' | 'tech-center' | 'about' | null>(null);
  
  // Timeout ref for graceful closing
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const [activeLang, setActiveLang] = useState('BG');
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavigation = (href: string) => {
    if (href === '#' || href === '#tech-center' || href === '#solutions' || href === '#systems') return;

    setIsOpen(false);
    setActiveMegaMenu(null);
    
    if (href.startsWith('/')) {
      navigate(href);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/', { state: { target: href } });
      } else {
        const element = document.getElementById(href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const getMenuKey = (label: string): 'solutions' | 'systems' | 'tech-center' | 'about' | null => {
      if (label === 'РЕШЕНИЯ') return 'solutions';
      if (label === 'СИСТЕМИ') return 'systems';
      if (label === 'ТЕХНИЧЕСКИ ЦЕНТЪР') return 'tech-center';
      if (label === 'КОМПАНИЯТА') return 'about';
      return null;
  };

  // --- MEGA MENU HANDLERS ---
  const handleMouseEnterLink = (key: string | null) => {
      if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
      }
      if (key) setActiveMegaMenu(key as any);
  };

  const handleMouseLeaveLink = () => {
      closeTimeoutRef.current = setTimeout(() => {
          setActiveMegaMenu(null);
      }, 200); // 200ms grace period to allow mouse to enter the menu
  };

  const handleMouseEnterMenu = () => {
      if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
      }
  };

  const handleMouseLeaveMenu = () => {
      setActiveMegaMenu(null);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-[#111111]/95 backdrop-blur-md border-[#222] py-4 shadow-2xl' 
            : 'bg-transparent border-transparent py-6'
        }`}
        // Removed onMouseLeave from nav to prevent premature closing
      >
      <div className="container mx-auto px-6 md:px-10 flex justify-between items-center relative">
        <Link to="/" className="flex items-center cursor-pointer select-none relative z-50">
           <img 
             src={logoGEONYX} 
             alt="GEONYX" 
             className="h-7 md:h-9 w-auto object-contain !bg-transparent" 
           />
        </Link>

        <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2 h-full">
          {NAV_ITEMS.map((item) => {
            const menuKey = getMenuKey(item.label);
            return (
                <div key={item.label} className="relative group h-full flex items-center">
                {item.isMegaMenu ? (
                    <div 
                        onMouseEnter={() => handleMouseEnterLink(menuKey)} 
                        onMouseLeave={handleMouseLeaveLink}
                        className="h-full flex items-center"
                    >
                        <button 
                            onClick={() => handleNavigation(item.href)}
                            className={`flex items-center gap-1 text-sm font-bold uppercase tracking-wide transition-colors focus:outline-none ${
                                activeMegaMenu === menuKey ? 'text-geo-yellow' : 'text-white hover:text-geo-yellow'
                            }`}
                        >
                            {item.label}
                            <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === menuKey ? 'rotate-180' : ''}`} />
                        </button>
                    </div>
                ) : (
                    <div 
                        onMouseEnter={() => handleMouseEnterLink(null)} // Close others
                        className="h-full flex items-center"
                    >
                        <button 
                            onClick={() => handleNavigation(item.href)}
                            className="flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-white hover:text-geo-yellow transition-colors focus:outline-none"
                        >
                            {item.label}
                        </button>
                    </div>
                )}
                </div>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="relative" onMouseEnter={() => setIsLangMenuOpen(true)} onMouseLeave={() => setIsLangMenuOpen(false)}>
              <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-geo-yellow transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{activeLang}</span>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full right-0 pt-4 w-40 transition-all duration-200 ${isLangMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="bg-[#1a1a1a] border border-[#333] shadow-xl flex flex-col">
                      {LANGUAGES.map((lang) => (
                          <button 
                              key={lang.code}
                              onClick={() => { setActiveLang(lang.code); setIsLangMenuOpen(false); }}
                              className={`text-left px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#222] hover:text-geo-yellow transition-colors border-b border-[#222] last:border-none ${activeLang === lang.code ? 'text-geo-yellow' : 'text-gray-400'}`}
                          >
                              {lang.label} ({lang.code})
                          </button>
                      ))}
                  </div>
              </div>
          </div>

          <Button onClick={() => handleNavigation('/request-inspection')} variant="primary" className="py-3 px-6 text-sm font-bold">ПРОЕКТНО ЗАПИТВАНЕ</Button>
        </div>

        <div className="lg:hidden flex items-center gap-6 relative z-50">
          <button className="text-white hover:text-geo-yellow transition-colors" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      <div 
        className={`absolute top-full left-0 w-full z-40`} 
        onMouseEnter={handleMouseEnterMenu} 
        onMouseLeave={handleMouseLeaveMenu}
      >
         {/* ALL MENUS SHARE A CONSISTENT FIXED HEIGHT OF 560px */}
         {activeMegaMenu === 'solutions' && <UnifiedMegaMenu data={SOLUTIONS_DATA} onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
         {activeMegaMenu === 'systems' && <SystemsMenu onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
         {activeMegaMenu === 'tech-center' && <UnifiedMegaMenu data={TECH_CENTER_DATA} onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
         {activeMegaMenu === 'about' && <UnifiedMegaMenu data={ABOUT_DATA} onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
      </div>
      </nav>

      <div className={`fixed inset-0 bg-[#0f0f0f] z-40 lg:hidden flex flex-col pt-24 px-6 md:px-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6 custom-scrollbar">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-800 pb-4 last:border-none">
              <button onClick={() => handleNavigation(item.href)} className="text-lg font-bold uppercase text-white hover:text-geo-yellow mb-3 block text-left w-full">
                {item.label}
              </button>
              {item.children && (
                <div className="flex flex-col gap-3 pl-4 border-l border-gray-700 ml-1">
                  {item.children.map((child) => (
                    <button key={child.label} onClick={() => handleNavigation(child.href)} className="text-sm text-gray-400 hover:text-white uppercase tracking-wide text-left">
                      {child.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="pb-8 pt-4 border-t border-gray-800 flex flex-col gap-4">
          <Button onClick={() => handleNavigation('/request-inspection')} variant="primary" className="w-full py-4 text-sm font-bold">ПРОЕКТНО ЗАПИТВАНЕ</Button>
        </div>
      </div>
    </>
  );
};
