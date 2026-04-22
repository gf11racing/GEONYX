import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export function usePageMeta(namespace: string) {
  const { t, i18n } = useTranslation(namespace);

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');

    document.title = title;

    const setMeta = (selector: string, attr: string, value: string) => {
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="twitter:title"]', 'content', title);
    setMeta('meta[property="twitter:description"]', 'content', description);
  }, [i18n.language, t]);
}
