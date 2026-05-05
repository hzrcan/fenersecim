/**
 * SEO Utility Functions - Fenerbahçe Başkanlık Seçimleri
 * Yardımcı fonksiyonlar meta tag ve yapılandırılmış veri yönetimine
 */

interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "profile";
  author?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

export function updatePageMeta(metadata: SEOMetadata) {
  // Güncelle başlık
  document.title = metadata.title;

  // Güncelle veya oluştur meta etiketleri
  updateMetaTag("description", metadata.description);
  updateMetaTag("keywords", metadata.keywords);
  updateMetaTag("og:title", metadata.title);
  updateMetaTag("og:description", metadata.description);
  updateMetaTag("og:image", metadata.image);
  updateMetaTag("og:url", metadata.url);
  updateMetaTag("og:type", metadata.type || "website");
  updateMetaTag("twitter:title", metadata.title);
  updateMetaTag("twitter:description", metadata.description);
  updateMetaTag("twitter:image", metadata.image);
  updateMetaTag("twitter:card", "summary_large_image");

  if (metadata.author) {
    updateMetaTag("author", metadata.author);
  }

  if (metadata.publishedDate) {
    updateMetaTag("article:published_time", metadata.publishedDate);
  }

  if (metadata.modifiedDate) {
    updateMetaTag("article:modified_time", metadata.modifiedDate);
  }

  // Güncelle canonical URL
  updateCanonicalUrl(metadata.url);

  // Güncelle Open Graph ve Twitter Card
  updateMetaTag("og:locale", "tr_TR");
}

function updateMetaTag(name: string, content?: string) {
  if (!content) return;

  const isProperty = name.startsWith("og:") || name.startsWith("article:") || name.startsWith("twitter:");
  const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let tag = document.querySelector(selector) as HTMLMetaElement;

  if (!tag) {
    tag = document.createElement("meta");
    if (isProperty) {
      tag.setAttribute("property", name);
    } else {
      tag.setAttribute("name", name);
    }
    document.head.appendChild(tag);
  }

  tag.content = content;
}

function updateCanonicalUrl(url?: string) {
  if (!url) return;

  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * JSON-LD Yapılandırılmış Veri
 */
export function addStructuredData(data: Record<string, any>) {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);

  // Eski script'i kaldır (varsa)
  const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
  existingScripts.forEach(s => s.remove());

  document.head.appendChild(script);
}

/**
 * Tekil bir aday için yapılandırılmış veri oluştur
 */
export function createCandidateSchema(candidate: {
  id: string;
  name: string;
  slogan: string;
  photo: string;
  popularity: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: candidate.name,
    description: candidate.slogan,
    image: candidate.photo,
    url: `${window.location.origin}/adaylar/${candidate.id}`,
    worksFor: {
      "@type": "Organization",
      name: "Fenerbahçe Spor Kulübü",
      url: "https://www.fenerbahce.org",
    },
  };
}

/**
 * Organizasyon için yapılandırılmış veri
 */
export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fenerbahçe Başkanlık Seçimleri 2026",
    description: "Fenerbahçe Spor Kulübü başkanlık seçimleri bilgilendirme platformu",
    url: window.location.origin,
    logo: `${window.location.origin}/favicon.ico`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: "https://www.fenerbahce.org",
    },
    sameAs: [
      "https://www.facebook.com/fenerbahce",
      "https://www.twitter.com/fenerbahce",
      "https://www.instagram.com/fenerbahce",
    ],
  };
}

/**
 * Breadcrumb Navigasyon Yapılandırılmış Veri
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Makale için yapılandırılmış veri
 */
export function createArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  author?: string;
  publishedDate: string;
  modifiedDate?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.description,
    image: article.image || `${window.location.origin}/og-image.png`,
    datePublished: article.publishedDate,
    dateModified: article.modifiedDate || article.publishedDate,
    author: {
      "@type": "Organization",
      name: article.author || "Fenerbahçe Başkanlık Seçimleri",
    },
    publisher: {
      "@type": "Organization",
      name: "Fenerbahçe Başkanlık Seçimleri",
      url: window.location.origin,
    },
    mainEntity: {
      "@type": "NewsArticle",
      url: article.url,
    },
  };
}

/**
 * Etkinlik için yapılandırılmış veri
 */
export function createEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  image?: string;
  location?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    image: event.image || `${window.location.origin}/og-image.png`,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: event.location || "Şükrü Saraçoğlu Stadyumu",
      address: {
        "@type": "PostalAddress",
        addressCountry: "TR",
        addressLocality: "İstanbul",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Fenerbahçe Spor Kulübü",
      url: "https://www.fenerbahce.org",
    },
    url: event.url,
  };
}
