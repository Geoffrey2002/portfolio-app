import { faqs, siteConfig, siteUrl } from "@/lib/site-config";

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: siteConfig.alternateNames,
    jobTitle: siteConfig.title,
    description: siteConfig.description,
    url: siteUrl,
    email: `mailto:${siteConfig.email}`,
    image: `${siteUrl}/assets/my passport.jpg`,
    sameAs: [siteConfig.linkedIn, siteConfig.github],
    knowsAbout: siteConfig.skills,
    nationality: {
      "@type": "Country",
      name: "Kenya",
    },
    homeLocation: {
      "@type": "Place",
      name: siteConfig.location,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nairobi",
        addressCountry: siteConfig.country,
      },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: siteConfig.title,
      occupationLocation: {
        "@type": "City",
        name: "Nairobi",
      },
      skills: siteConfig.skills.join(", "),
    },
  };

  return (
    <script
      id="person-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function WebsiteStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} Portfolio`,
    alternateName: `${siteConfig.fullName} Portfolio`,
    description: siteConfig.description,
    url: siteUrl,
    author: {
      "@type": "Person",
      name: siteConfig.fullName,
      url: siteUrl,
    },
    inLanguage: "en-US",
    dateModified: siteConfig.lastUpdated,
  };

  return (
    <script
      id="website-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProfilePageStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2019-01-01T00:00:00+00:00",
    dateModified: `${siteConfig.lastUpdated}T00:00:00+00:00`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.fullName,
      alternateName: siteConfig.alternateNames,
      description: siteConfig.description,
      image: `${siteUrl}/assets/my passport.jpg`,
      sameAs: [siteConfig.linkedIn, siteConfig.github],
    },
  };

  return (
    <script
      id="profile-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function FAQStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function ProfessionalServiceStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${siteConfig.name} — Frontend Development`,
    description: siteConfig.description,
    url: siteUrl,
    image: `${siteUrl}/assets/about.jpg`,
    email: siteConfig.email,
    areaServed: {
      "@type": "Country",
      name: "Kenya",
    },
    serviceType: siteConfig.services,
    provider: {
      "@type": "Person",
      name: siteConfig.fullName,
      jobTitle: siteConfig.title,
      url: siteUrl,
      sameAs: [siteConfig.linkedIn, siteConfig.github],
    },
  };

  return (
    <script
      id="professional-service-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function SkillsItemListStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Geoffrey Muthoni Technical Skills",
    description: "Technologies and tools used by Geoffrey Muthoni for web development",
    numberOfItems: siteConfig.skills.length,
    itemListElement: siteConfig.skills.map((skill, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: skill,
    })),
  };

  return (
    <script
      id="skills-item-list-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export function BreadcrumbStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      id="breadcrumb-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
