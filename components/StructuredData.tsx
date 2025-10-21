// Server-side structured data components for SEO

export function PersonStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Geoffrey Mwangi Muthoni",
    alternateName: "Geoffrey Muthoni",
    jobTitle: "Frontend Developer",
    description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress with 4+ years of experience",
    url: baseUrl,
    email: "mailto:contact@geoffreymuthoni.com",
    image: `${baseUrl}/assets/my passport.jpg`,
    sameAs: [
      "https://www.linkedin.com/in/geoffrey-muthoni/",
      "https://github.com/Geoffrey2002",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "WordPress",
      "Tailwind CSS",
      "Supabase",
      "Web Development",
      "Frontend Development",
      "UI/UX Design",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Self-Taught Developer",
    },
    workLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressCountry: "KE",
      },
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Geoffrey Muthoni Portfolio",
    alternateName: "Geoffrey Mwangi Portfolio",
    description: "Professional portfolio showcasing web development projects and skills of Geoffrey Muthoni - Frontend Developer specializing in React, Next.js, and WordPress",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: "Geoffrey Mwangi Muthoni",
    },
    inLanguage: "en-US",
    copyrightYear: 2019,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://geoffreymuthoni.com';
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2019-01-01T00:00:00+00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Geoffrey Mwangi Muthoni",
      alternateName: "Geoffrey Muthoni",
      description: "Self-taught Frontend Developer with 4+ years of experience specializing in modern web technologies",
      image: `${baseUrl}/assets/my passport.jpg`,
      sameAs: [
        "https://www.linkedin.com/in/geoffrey-muthoni/",
        "https://github.com/Geoffrey2002",
      ],
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

export function BreadcrumbStructuredData({ items }: { items: Array<{ name: string; url: string }> }) {
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




