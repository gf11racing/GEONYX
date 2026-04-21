
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowRight, Globe, Factory, Utensils, Sprout, Droplets, Zap, Truck, Building2, FileText, Download, Box, CheckCircle, Users, Briefcase, Leaf } from 'lucide-react';
import { Button } from './Button';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { SystemsMenu } from './SystemsMenu';
import logoGEONYX from '../assets/logoGEONYX.png';
import { useTranslation } from 'react-i18next';
import { useLang } from '../hooks/useLang';

const LANGUAGES = [
  { code: 'bg', label: 'Български', flag: 'BG' },
  { code: 'en', label: 'English',   flag: 'EN' },
  { code: 'de', label: 'Deutsch',   flag: 'DE' },
  { code: 'fr', label: 'Français',  flag: 'FR' },
  { code: 'es', label: 'Español',   flag: 'ES' },
  { code: 'tr', label: 'Türkçe',    flag: 'TR' },
  { code: 'ru', label: 'Русский',   flag: 'RU' },
  { code: 'el', label: 'Ελληνικά', flag: 'EL' },
];

type MenuKey = 'solutions' | 'systems' | 'tech-center' | 'about';

interface NavItem {
  label: string;
  href: string;
  menuKey?: MenuKey;
  children?: { label: string; href: string }[];
}

interface MegaMenuProps {
  data: any[];
  onClose: () => void;
  onNavigate: (href: string) => void;
}

const UnifiedMegaMenu: React.FC<MegaMenuProps> = ({ data, onClose, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState(data[0]);

  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] bg-[#1a1a1a] border-t-2 border-geo-yellow shadow-2xl flex animate-in fade-in slide-in-from-top-2 duration-200 h-[560px]">
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
              <h3 className={`font-medium uppercase text-sm transition-colors ${
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
        <img
          key={activeCategory.id}
          src={activeCategory.image}
          alt={activeCategory.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-in fade-in zoom-in duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-transparent"></div>

        <div className="absolute bottom-0 left-0 w-full p-12">
          <div className="inline-flex items-center gap-2 bg-geo-yellow text-black px-4 py-1.5 font-bold text-xs uppercase tracking-wider mb-6 shadow-lg">
            {activeCategory.icon && <activeCategory.icon className="w-4 h-4" />}
            {activeCategory.badge}
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white uppercase leading-none mb-4 drop-shadow-xl">
            {activeCategory.heroTitle || activeCategory.title}
          </h2>
          <p className="text-gray-300 text-lg font-light leading-relaxed max-w-lg mb-8 border-l-2 border-geo-yellow pl-4">
            {activeCategory.desc}
          </p>
          <div className="flex items-center gap-3 text-white text-sm font-bold uppercase tracking-widest group-hover:text-geo-yellow transition-colors">
            {activeCategory.buttonText} <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MenuKey | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { t, i18n } = useTranslation('common');
  const { lang } = useLang();
  const activeLang = LANGUAGES.find(l => l.code === lang)?.flag ?? 'BG';

  const navigate = useNavigate();
  const location = useLocation();

  const handleLangSwitch = (newLang: string) => {
    const pathWithoutLang = location.pathname.replace(/^\/[a-z]{2}/, '') || '';
    navigate(`/${newLang}${pathWithoutLang}`);
    setIsLangMenuOpen(false);
    setIsOpen(false);
  };

  // Build translated data arrays inside render so t() is reactive
  const SOLUTIONS_DATA = [
    { id: 'heavy',     href: '/heavy-industry',  image: '/GEONYX-HEAVY-INDUSTRY-AND-LOGISTICS-background.webp', icon: Factory,   title: t('mega.solutions.heavy.title'),     desc: t('mega.solutions.heavy.desc'),     badge: t('mega.solutions.heavy.badge') },
    { id: 'food',      href: '/food-industry',   image: '/GEONYX-FOOD-HERO.webp',                               icon: Utensils,  title: t('mega.solutions.food.title'),      desc: t('mega.solutions.food.desc'),      badge: t('mega.solutions.food.badge') },
    { id: 'agro',      href: '/agriculture',     image: '/GEONYX-AGRO-HERO.webp',                               icon: Sprout,    title: t('mega.solutions.agro.title'),      desc: t('mega.solutions.agro.desc'),      badge: t('mega.solutions.agro.badge') },
    { id: 'water',     href: '/water-marine',    image: '/GEONYX-WATERTIGHTNESS-UNDER-PRESSURE.webp',           icon: Droplets,  title: t('mega.solutions.water.title'),     desc: t('mega.solutions.water.desc'),     badge: t('mega.solutions.water.badge') },
    { id: 'energy',    href: '/energy-defense',  image: '/GEONYX-ENERGY-MINES-AND-HEAVY-DEFENSE.webp',          icon: Zap,       title: t('mega.solutions.energy.title'),    desc: t('mega.solutions.energy.desc'),    badge: t('mega.solutions.energy.badge') },
    { id: 'transport', href: '/infrastructure',  image: '/GEONYX-parking-salt.webp',                            icon: Truck,     title: t('mega.solutions.transport.title'), desc: t('mega.solutions.transport.desc'), badge: t('mega.solutions.transport.badge') },
    { id: 'urban',     href: '/construction',    image: '/GEONYX-RADA-AND-HIGH-TECH-ZONES.webp',                icon: Building2, title: t('mega.solutions.urban.title'),     desc: t('mega.solutions.urban.desc'),     badge: t('mega.solutions.urban.badge') },
  ];

  const TECH_CENTER_DATA = [
    { id: 'arch-zone', href: '/architectural',  image: '/GEONYX-Architectural.webp',        icon: Box,          title: t('mega.techCenter.archZone.title'), desc: t('mega.techCenter.archZone.desc'), label: t('mega.techCenter.archZone.label'), heroTitle: t('mega.techCenter.archZone.heroTitle'), buttonText: t('mega.techCenter.archZone.buttonText'), badge: t('mega.techCenter.archZone.badge') },
    { id: 'tech-maps', href: '/technical-maps', image: '/GEONYX-technical-data-sheet.webp', icon: FileText,     title: t('mega.techCenter.techMaps.title'), desc: t('mega.techCenter.techMaps.desc'), label: t('mega.techCenter.techMaps.label'), heroTitle: t('mega.techCenter.techMaps.heroTitle'), buttonText: t('mega.techCenter.techMaps.buttonText'), badge: t('mega.techCenter.techMaps.badge') },
    { id: 'cad-bim',   href: '/cad-bim',        image: '/GEONYX-CAD-BIM.webp',              icon: Download,     title: t('mega.techCenter.cadBim.title'),   desc: t('mega.techCenter.cadBim.desc'),   label: t('mega.techCenter.cadBim.label'),   heroTitle: t('mega.techCenter.cadBim.heroTitle'),   buttonText: t('mega.techCenter.cadBim.buttonText'),   badge: t('mega.techCenter.cadBim.badge') },
    { id: 'certs',     href: '/certificates',   image: '/GEONYX-Certificates.webp',         icon: CheckCircle,  title: t('mega.techCenter.certs.title'),    desc: t('mega.techCenter.certs.desc'),    label: t('mega.techCenter.certs.label'),    heroTitle: t('mega.techCenter.certs.heroTitle'),    buttonText: t('mega.techCenter.certs.buttonText'),    badge: t('mega.techCenter.certs.badge') },
  ];

  const ABOUT_DATA = [
    { id: 'about-main', href: '/about',   image: '/GEONYX-background-about.webp',   icon: Users,    title: t('mega.about.main.title'),    desc: t('mega.about.main.desc'),    label: t('mega.about.main.label'),    heroTitle: t('mega.about.main.heroTitle'),    buttonText: t('mega.about.main.buttonText'),    badge: t('mega.about.main.badge') },
    { id: 'careers',    href: '/careers', image: '/GEONYX-background-careers.webp', icon: Briefcase, title: t('mega.about.careers.title'), desc: t('mega.about.careers.desc'), label: t('mega.about.careers.label'), heroTitle: t('mega.about.careers.heroTitle'), buttonText: t('mega.about.careers.buttonText'), badge: t('mega.about.careers.badge') },
    { id: 'hseq',       href: '/hseq',   image: '/HSEQ1.webp',                      icon: Leaf,     title: t('mega.about.hseq.title'),    desc: t('mega.about.hseq.desc'),    label: t('mega.about.hseq.label'),    heroTitle: t('mega.about.hseq.heroTitle'),    buttonText: t('mega.about.hseq.buttonText'),    badge: t('mega.about.hseq.badge') },
  ];

  const NAV_ITEMS: NavItem[] = [
    {
      label: t('nav.solutions'), href: '#solutions', menuKey: 'solutions',
      children: [
        { label: t('navChildren.heavy'),     href: '/heavy-industry' },
        { label: t('navChildren.food'),      href: '/food-industry' },
        { label: t('navChildren.agro'),      href: '/agriculture' },
        { label: t('navChildren.water'),     href: '/water-marine' },
        { label: t('navChildren.energy'),    href: '/energy-defense' },
        { label: t('navChildren.transport'), href: '/infrastructure' },
        { label: t('navChildren.urban'),     href: '/construction' },
      ]
    },
    {
      label: t('nav.systems'), href: '#systems', menuKey: 'systems',
      children: [
        { label: 'GEONYX ARMOR', href: '/armor' },
        { label: 'GEONYX CHEM',  href: '/chem' },
        { label: 'GEONYX HYDRO', href: '/hydro' },
        { label: 'GEONYX THERM', href: '/therm' },
      ]
    },
    {
      label: t('nav.techCenter'), href: '#tech-center', menuKey: 'tech-center',
      children: [
        { label: t('navChildren.archZone'), href: '/architectural' },
        { label: t('navChildren.techMaps'), href: '/technical-maps' },
        { label: t('navChildren.cadBim'),   href: '/cad-bim' },
        { label: t('navChildren.certs'),    href: '/certificates' },
      ]
    },
    { label: t('nav.references'), href: '/references' },
    {
      label: t('nav.company'), href: '/about', menuKey: 'about',
      children: [
        { label: t('navChildren.aboutMain'), href: '/about' },
        { label: t('navChildren.careers'),   href: '/careers' },
        { label: t('navChildren.hseq'),      href: '/hseq' },
      ]
    },
    { label: t('nav.contacts'), href: '/contacts' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavigation = (href: string) => {
    if (href === '#' || href === '#tech-center' || href === '#solutions' || href === '#systems') return;
    setIsOpen(false);
    setActiveMegaMenu(null);
    if (href.startsWith('/')) {
      navigate(`/${lang}${href}`);
      window.scrollTo(0, 0);
    } else if (href.startsWith('#')) {
      const homePath = `/${lang}`;
      if (location.pathname !== homePath) {
        navigate(homePath, { state: { target: href } });
      } else {
        const element = document.getElementById(href.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMouseEnterLink = (key: MenuKey | undefined) => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
    if (key) setActiveMegaMenu(key);
    else setActiveMegaMenu(null);
  };

  const handleMouseLeaveLink = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMegaMenu(null), 200);
  };

  const handleMouseEnterMenu = () => {
    if (closeTimeoutRef.current) { clearTimeout(closeTimeoutRef.current); closeTimeoutRef.current = null; }
  };

  const handleMouseLeaveMenu = () => setActiveMegaMenu(null);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          scrolled
            ? 'bg-[#111111]/95 backdrop-blur-md border-[#222] py-4 shadow-2xl'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-10 flex justify-between items-center relative">
          <Link to={`/${lang}`} className="flex items-center cursor-pointer select-none relative z-50">
            <img src={logoGEONYX} alt="GEONYX" className="h-7 md:h-9 w-auto object-contain !bg-transparent" />
          </Link>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 absolute left-1/2 transform -translate-x-1/2 h-full">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group h-full flex items-center">
                {item.menuKey ? (
                  <div
                    onMouseEnter={() => handleMouseEnterLink(item.menuKey)}
                    onMouseLeave={handleMouseLeaveLink}
                    className="h-full flex items-center"
                  >
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors focus:outline-none ${
                        activeMegaMenu === item.menuKey ? 'text-geo-yellow' : 'text-white hover:text-geo-yellow'
                      }`}
                    >
                      {item.label}
                      <ChevronDown size={14} className={`transition-transform duration-300 ${activeMegaMenu === item.menuKey ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                ) : (
                  <div onMouseEnter={() => handleMouseEnterLink(undefined)} className="h-full flex items-center">
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className="flex items-center gap-1 text-sm font-medium uppercase tracking-wide text-white hover:text-geo-yellow transition-colors focus:outline-none"
                    >
                      {item.label}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {/* Language Switcher */}
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
                      onClick={() => handleLangSwitch(lang.code)}
                      className={`text-left px-4 py-3 text-xs font-bold uppercase tracking-wider hover:bg-[#222] hover:text-geo-yellow transition-colors border-b border-[#222] last:border-none ${activeLang === lang.flag ? 'text-geo-yellow' : 'text-gray-400'}`}
                    >
                      {lang.label} ({lang.flag})
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <Button onClick={() => handleNavigation('/request-inspection')} variant="primary" className="py-3 px-6 text-sm font-bold">
              {t('nav.projectInquiry')}
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-6 relative z-50">
            <button className="text-white hover:text-geo-yellow transition-colors" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        <div
          className="absolute top-full left-0 w-full z-40"
          onMouseEnter={handleMouseEnterMenu}
          onMouseLeave={handleMouseLeaveMenu}
        >
          {activeMegaMenu === 'solutions'   && <UnifiedMegaMenu data={SOLUTIONS_DATA}   onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
          {activeMegaMenu === 'systems'     && <SystemsMenu                              onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
          {activeMegaMenu === 'tech-center' && <UnifiedMegaMenu data={TECH_CENTER_DATA} onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
          {activeMegaMenu === 'about'       && <UnifiedMegaMenu data={ABOUT_DATA}       onClose={() => setActiveMegaMenu(null)} onNavigate={handleNavigation} />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-[#0f0f0f] z-40 lg:hidden flex flex-col pt-24 px-6 md:px-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex-1 flex flex-col gap-6 overflow-y-auto pb-6 custom-scrollbar">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-gray-800 pb-4 last:border-none">
              <button onClick={() => handleNavigation(item.href)} className="text-lg font-medium uppercase text-white hover:text-geo-yellow mb-3 block text-left w-full">
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

          {/* Mobile Language Switcher */}
          <div className="border-b border-gray-800 pb-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Language</p>
            <div className="flex flex-wrap gap-2">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangSwitch(lang.code)}
                  className={`px-3 py-1.5 text-xs font-bold uppercase border transition-colors ${
                    activeLang === lang.flag
                      ? 'border-geo-yellow text-geo-yellow'
                      : 'border-gray-700 text-gray-400 hover:border-white hover:text-white'
                  }`}
                >
                  {lang.flag}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="pb-8 pt-4 border-t border-gray-800 flex flex-col gap-4">
          <Button onClick={() => handleNavigation('/request-inspection')} variant="primary" className="w-full py-4 text-sm font-bold">
            {t('nav.projectInquiry')}
          </Button>
        </div>
      </div>
    </>
  );
};
