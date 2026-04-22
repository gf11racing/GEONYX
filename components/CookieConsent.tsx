import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Cookie, X } from 'lucide-react';

const GA_ID = 'G-PJZMR8VW6S';
const CONSENT_KEY = 'geonyx_cookie_consent';
const SUPPORTED_LANGS = ['bg', 'en', 'de', 'fr', 'es', 'tr', 'ru', 'el'];

function loadGA() {
  if ((window as any).__gaLoaded) return;
  (window as any).__gaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  (window as any).dataLayer = (window as any).dataLayer || [];
  function gtag(...args: any[]) { (window as any).dataLayer.push(args); }
  (window as any).gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID);
}

export const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation('common');
  const location = useLocation();

  const lang = (() => {
    const seg = location.pathname.split('/')[1];
    return SUPPORTED_LANGS.includes(seg) ? seg : 'bg';
  })();

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setVisible(true);
    } else if (consent === 'accepted') {
      loadGA();
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    loadGA();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6">
      <div className="max-w-5xl mx-auto bg-[#111] border border-[#333] shadow-2xl">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-5 md:p-6">

          <div className="flex-shrink-0 hidden md:block">
            <Cookie className="w-8 h-8 text-geo-yellow" strokeWidth={1.5} />
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-white font-bold text-sm uppercase tracking-wider mb-1">
              {t('cookies.title')}
            </p>
            <p className="text-gray-400 text-xs leading-relaxed">
              {t('cookies.desc')}{' '}
              <Link
                to={`/${lang}/privacy-policy`}
                className="text-geo-yellow hover:text-white underline transition-colors"
              >
                {t('cookies.privacyLink')}
              </Link>
            </p>
          </div>

          <div className="flex flex-row md:flex-col lg:flex-row items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <button
              onClick={accept}
              className="flex-1 md:flex-none px-5 py-2.5 bg-geo-yellow text-black text-xs font-black uppercase tracking-wider hover:bg-white transition-colors"
            >
              {t('cookies.acceptAll')}
            </button>
            <button
              onClick={decline}
              className="flex-1 md:flex-none px-5 py-2.5 border border-[#444] text-gray-400 text-xs font-bold uppercase tracking-wider hover:border-white hover:text-white transition-colors"
            >
              {t('cookies.essentialOnly')}
            </button>
          </div>

          <button
            onClick={decline}
            className="absolute top-4 right-4 md:relative md:top-auto md:right-auto text-gray-600 hover:text-white transition-colors flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
