
import React from 'react';

export const StructuredData: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GEONYX GROUP LTD.",
    "alternateName": "GEONYX",
    "url": "https://geonyxgroup.com",
    "logo": "https://geonyxgroup.com/logoGEONYX.png",
    "description": "Разработваме високотехнологични геополимерни матрици за критична инфраструктура и тежка индустрия. Инженеринг отвъд границите на бетона.",
    "email": "office@geonyxgroup.com",
    "telephone": "+359 897 0000 11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. Кочани 4",
      "addressLocality": "София",
      "postalCode": "1000",
      "addressCountry": "BG",
      "addressRegion": "Гео Милев"
    },
    "vatID": "BG206972055",
    "sameAs": [
      "https://linkedin.com/company/geonyx",
      "https://facebook.com/GEONYXGROUP"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+359 897 0000 11",
      "contactType": "customer service",
      "email": "office@geonyxgroup.com",
      "availableLanguage": ["Bulgarian", "English"]
    }
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(organizationData)}
    </script>
  );
};
