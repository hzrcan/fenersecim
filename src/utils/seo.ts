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

const STRUCTURED_DATA_SCRIPT_ID = "fenersecim-structured-data";
let lastStructuredDataPath = "";

export function updatePageMeta(metadata: SEOMetadata) {
  // Güncelle başlık
  document.title = metadata.title;

  // Site-wide SEO visibility is intentionally disabled.
  updateMetaTag("robots", "noindex, nofollow, noarchive, nosnippet, noimageindex");
  updateMetaTag("googlebot", "noindex, nofollow, noarchive, nosnippet, noimageindex");

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
  const currentPath = window.location.pathname;
  const shouldResetGraph = lastStructuredDataPath !== currentPath;
  lastStructuredDataPath = currentPath;

  let script = document.getElementById(STRUCTURED_DATA_SCRIPT_ID) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = STRUCTURED_DATA_SCRIPT_ID;
    document.head.appendChild(script);
  }

  let payload: Record<string, any> = {
    "@context": "https://schema.org",
    "@graph": [],
  };

  if (!shouldResetGraph && script.textContent) {
    try {
      const parsed = JSON.parse(script.textContent);
      if (parsed && Array.isArray(parsed["@graph"])) {
        payload = parsed;
      }
    } catch {
      payload = {
        "@context": "https://schema.org",
        "@graph": [],
      };
    }
  }

  if (Array.isArray(data["@graph"])) {
    payload["@graph"] = [...payload["@graph"], ...data["@graph"]];
  } else {
    payload["@graph"].push(data);
  }

  script.textContent = JSON.stringify(payload);
}

/**
 * Tekil bir aday için yapılandırılmış veri oluştur
 */
export function createCandidateSchema(candidate: {
  id: string;
  slug?: string;
  name: string;
  slogan: string;
  photo: string;
  popularity: number;
  knowsAbout?: string[];
  affiliation?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: candidate.name,
    description: candidate.slogan,
    image: candidate.photo,
    url: `${window.location.origin}/adaylar/${candidate.slug || candidate.id}`,
    knowsAbout: candidate.knowsAbout,
    affiliation: candidate.affiliation?.map((item) => ({
      "@type": "Organization",
      name: item,
    })),
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

export function createFAQSchema(items: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function createQASchema(
  items: Array<{ question: string; answers: Array<{ candidate: string; answer: string; url?: string; datePublished?: string }> }>,
  pageUrl?: string
) {
  const now = new Date().toISOString().split("T")[0];
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      text: item.question,
      answerCount: item.answers.length,
      datePublished: now,
      suggestedAnswer: item.answers.map((entry) => ({
        "@type": "Answer",
        text: entry.answer,
        datePublished: entry.datePublished ?? now,
        upvoteCount: 0,
        url: entry.url ?? pageUrl ?? window.location.href,
        author: {
          "@type": "Person",
          name: entry.candidate,
        },
      })),
    })),
  };
}

export function createBoardMemberListSchema(candidateName: string, candidateUrl: string, members: Array<{
  name: string;
  position: string;
  shortBio?: string;
}>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${candidateName} yönetim kurulu üyeleri`,
    itemListElement: members.map((member, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Person",
        name: member.name,
        jobTitle: member.position,
        description: member.shortBio,
        url: candidateUrl,
      },
    })),
  };
}
