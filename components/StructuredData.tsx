"use client";

import Script from "next/script";

export function PersonStructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Geoffrey Mwangi Muthoni",
    jobTitle: "Frontend Developer",
    description: "Self-taught Frontend Developer specializing in React, Next.js, and WordPress",
    url: "https://geoffreymuthoni.com",
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
      "Web Development",
      "Frontend Development",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Self-Taught",
    },
  };

  return (
    <Script
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
    name: "Geoffrey Muthoni Portfolio",
    description: "Portfolio of Geoffrey Mwangi Muthoni - Frontend Developer",
    url: "https://geoffreymuthoni.com",
    author: {
      "@type": "Person",
      name: "Geoffrey Mwangi Muthoni",
    },
    inLanguage: "en-US",
  };

  return (
    <Script
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
    dateCreated: "2019-01-01T00:00:00-00:00",
    dateModified: new Date().toISOString(),
    mainEntity: {
      "@type": "Person",
      name: "Geoffrey Mwangi Muthoni",
      alternateName: "Geoffrey Muthoni",
      description: "Self-taught Frontend Developer with 4+ years of experience",
      image: "https://geoffreymuthoni.com/assets/my-passport.jpg",
      sameAs: [
        "https://www.linkedin.com/in/geoffrey-muthoni/",
        "https://github.com/Geoffrey2002",
      ],
    },
  };

  return (
    <Script
      id="profile-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}




