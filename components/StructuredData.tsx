
import React from 'react';

export const StructuredData: React.FC = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GEONYX GROUP LTD.",
    "alternateName": "GEONYX",
    "url": "https://geonyxgroup.com",
    "logo": "https://geonyxgroup.com/logoGEONYX.png",
    "description": "Manufacturer of patented geopolymer systems for industrial floor protection and critical infrastructure. GEONYX systems provide guaranteed service life of 20+ years in the most demanding environments.",
    "email": "office@geonyxgroup.com",
    "telephone": "+359 897 0000 11",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "ул. „Юрий Венелин\" 18, ет. 2",
      "addressLocality": "Габрово",
      "postalCode": "5300",
      "addressCountry": "BG"
    },
    "vatID": "BG206972055",
    "foundingDate": "2018",
    "areaServed": ["BG", "EU", "TR", "RU", "GR", "DE", "FR", "ES"],
    "knowsAbout": [
      "geopolymer flooring",
      "industrial floor protection",
      "chemical resistant coatings",
      "mineral floor systems",
      "critical infrastructure coatings"
    ],
    "sameAs": [
      "https://linkedin.com/company/geonyx",
      "https://facebook.com/GEONYXGROUP"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+359 897 0000 11",
        "contactType": "customer service",
        "email": "office@geonyxgroup.com",
        "availableLanguage": ["Bulgarian", "English", "German", "French", "Spanish", "Turkish", "Russian", "Greek"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+359 894 343 990",
        "contactType": "sales",
        "email": "office@geonyxgroup.com",
        "availableLanguage": ["Bulgarian", "English"]
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "GEONYX Geopolymer Systems",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "GEONYX ARMOR",
            "description": "Geopolymer industrial floor system for extreme mechanical loads. Compressive strength ≥110 N/mm², hardness MOHS 9, wear resistance AR ≤0.5 (DIN 52108), fire class A1, service life ≥20 years. Designed for mines, logistics, foundries, and critical infrastructure.",
            "brand": { "@type": "Brand", "name": "GEONYX" },
            "url": "https://geonyxgroup.com/en/armor",
            "category": "Industrial Floor Protection",
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "Compressive Strength", "value": "≥110 N/mm²" },
              { "@type": "PropertyValue", "name": "Hardness", "value": "MOHS 9" },
              { "@type": "PropertyValue", "name": "Fire Class", "value": "A1" },
              { "@type": "PropertyValue", "name": "Service Life", "value": "≥20 years" }
            ]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "GEONYX CHEM",
            "description": "Geopolymer chemical protection system for floors and surfaces exposed to strong acids, bases, solvents, oils, disinfectants, and biogenic sulphuric acid. Resistant to pH 0–14.",
            "brand": { "@type": "Brand", "name": "GEONYX" },
            "url": "https://geonyxgroup.com/en/chem",
            "category": "Chemical Resistant Flooring",
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "pH Resistance", "value": "0–14" },
              { "@type": "PropertyValue", "name": "Service Life", "value": "≥20 years" }
            ]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "GEONYX THERM",
            "description": "Non-combustible geopolymer system for environments with high temperatures, thermal shock, molten metal splashes. Temperature resistance up to 800°C. Fire class A1fl.",
            "brand": { "@type": "Brand", "name": "GEONYX" },
            "url": "https://geonyxgroup.com/en/therm",
            "category": "Thermal Protection Flooring",
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "Temperature Resistance", "value": "up to 800°C" },
              { "@type": "PropertyValue", "name": "Fire Class", "value": "A1fl" }
            ]
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "GEONYX HYDRO",
            "description": "100% watertight geopolymer system for surfaces under hydrostatic pressure, water immersion, biogenic corrosion in sewage, and chloride-rich marine environments.",
            "brand": { "@type": "Brand", "name": "GEONYX" },
            "url": "https://geonyxgroup.com/en/hydro",
            "category": "Waterproofing Systems",
            "additionalProperty": [
              { "@type": "PropertyValue", "name": "Watertightness", "value": "100%" },
              { "@type": "PropertyValue", "name": "Service Life", "value": "≥20 years" }
            ]
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GEONYX GROUP",
    "url": "https://geonyxgroup.com",
    "inLanguage": ["bg", "en", "de", "fr", "es", "tr", "ru", "el"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://geonyxgroup.com/en/system-selector",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteData)}
      </script>
    </>
  );
};
