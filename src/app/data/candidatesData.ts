export interface Candidate {
  id: string;
  name: string;
  slogan: string;
  photo: string;
  biography: string;
  vision: string;
  experience: string[];
  projects: Project[];
  pastInvolvement: TimelineEvent[];
  popularity: number;
  boardMembers?: BoardMember[];
}

export interface BoardMember {
  id: string;
  name: string;
  position: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  priority: "acil" | "önemli" | "ikincil";
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// Utility function to generate slug from candidate name
export function generateSlug(name: string): string {
  // Turkish character mapping
  const turkishMap: { [key: string]: string } = {
    'ç': 'c', 'Ç': 'c',
    'ğ': 'g', 'Ğ': 'g',
    'ı': 'i', 'I': 'i',
    'İ': 'i',
    'ö': 'o', 'Ö': 'o',
    'ş': 's', 'Ş': 's',
    'ü': 'u', 'Ü': 'u',
  };

  return name
    .toLowerCase()
    // Replace Turkish characters with their ASCII equivalents
    .replace(/[çğıİöşü]/g, char => turkishMap[char] || char)
    // Replace spaces and ampersands with hyphens
    .replace(/[\s&]+/g, '-')
    // Remove any remaining non-word characters except hyphens
    .replace(/[^\w-]/g, '')
    // Replace multiple hyphens with single hyphen
    .replace(/-+/g, '-')
    .trim();
}

export const candidates: Candidate[] = [
  {
    id: "1",
    name: "Hakan Safi",
    slogan: "Deneyim ve Yenilik",
    photo: "/assets/hakansafi.jpg",
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı.",
    vision: "Uzun vadeli planlarla (1+3 yıl) kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Aziz Yıldırım'ın birleşme teklifini reddederek tek başına seçime gireceğini açıkladı. İlk sezonda şampiyonluk vaadiyle güçlü transferler hedefliyor.",
    experience: [
      "Safi Holding Yönetim Kurulu Başkanı",
      "Eski Fenerbahçe Yönetim Kurulu Üyesi",
      "Marmara Üniversitesi İktisat mezunu",
      "Fenerbahçe Kongre ve Yüksek Divan Kurulu Üyesi (1998'den beri)"
    ],
    projects: [
      {
        id: "p5",
        title: "Transfer ve Teknik Ekip",
        description: "Güçlü yabancı hoca ve kaliteli kadro oluşturma (baba transferler vurgusu)",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p6",
        title: "Mali Yapı Güçlendirme",
        description: "Holding tecrübesiyle finansal disiplin",
        category: "Finansal",
        icon: "trending-up",
        priority: "acil"
      },
      {
        id: "p7",
        title: "Taraftar ve Birlik",
        description: "Camia bütünlüğünü sağlama",
        category: "Topluluk",
        icon: "heart",
        priority: "önemli"
      },
      {
        id: "p8",
        title: "Altyapı Yatırımları",
        description: "Sürdürülebilir gençlik gelişimi",
        category: "Altyapı",
        icon: "users",
        priority: "önemli"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı" },
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor" }
    ],
    popularity: 72,
    boardMembers: [
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi" },
      { id: "b2", name: "Metin Sipahioğlu", position: "İletişimden Sorumlu Yönetim Kurulu Üyesi" }
    ]
  },
  {
    id: "2",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonluk ve başarıyla anılan efsane isim. 6 Mayıs 2026'da resmen adaylığını açıkladı ve diğer adaylara birleşme çağrısı yaptı.",
    vision: "Kanıtlanmış tecrübeyle hızlı şampiyonluk ve Avrupa başarısı. Disiplinli yönetim, taraftar birliği ve camianın 120. yılında birlik mesajı. Barış Göktürk'ün desteğini aldı.",
    experience: [
      "Fenerbahçe Başkanı (1998-2018)",
      "Çok sayıda lig ve kupa şampiyonluğu",
      "Deneyimli iş insanı"
    ],
    projects: [
      {
        id: "p9",
        title: "Hemen Şampiyonluk",
        description: "Kısa vadede zirve hedefi",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p10",
        title: "Avrupa'da Kalıcılık",
        description: "Şampiyonlar Ligi'nde düzenli başarı",
        category: "Spor",
        icon: "globe",
        priority: "acil"
      },
      {
        id: "p11",
        title: "Taraftar Birliği",
        description: "Camia içi dayanışmayı artırma",
        category: "Topluluk",
        icon: "heart",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "1990-1992", title: "Yönetim Kurulu Üyesi ve Futbol Şubesi Sorumlusu", description: "Fenerbahçe'de yönetim kurulunda ve futbol şubesinde aktif görev aldı" },
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl boyunca kulübe liderlik etti" },
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta resmen açıkladı, birlik çağrısı yaptı" }
    ],
    popularity: 85,
    boardMembers: [
      { id: "b6", name: "Barış Göktürk", position: "Başkan Vekili" },
      { id: "b7", name: "Mahmut Uslu (Nedim Uslu)", position: "Yönetim Kurulu Üyesi" },
      { id: "b8", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi" },
      { id: "b9", name: "Ömer Onan", position: "Yönetim Kurulu Üyesi" },
      { id: "b10", name: "Önder Fırat (Ahmet Önder Fırat)", position: "Yönetim Kurulu Üyesi" }
      // Selahattin Baki ve Ozan Balaban gibi isimler de kulislerde güçlü şekilde geçiyor.
    ]
  }
];

export const allProjects = candidates.flatMap(c =>
  c.projects.map(p => ({ ...p, candidateId: c.id, candidateName: c.name }))
);

// Helper functions for slug-based lookups
export function getCandidateBySlug(slug: string) {
  return candidates.find(c => generateSlug(c.name) === slug);
}

export function getCandidateSlug(candidate: Candidate | undefined): string | undefined {
  return candidate ? generateSlug(candidate.name) : undefined;
}

export function getSlugFromIdOrSlug(param: string): { slug: string; candidateId: string } | null {
  // Check if param is numeric (old-style ID)
  if (/^\d+$/.test(param)) {
    const candidate = candidates.find(c => c.id === param);
    if (candidate) {
      return { slug: generateSlug(candidate.name), candidateId: candidate.id };
    }
  }
  
  // Otherwise treat as slug
  const candidate = getCandidateBySlug(param);
  if (candidate) {
    return { slug: param, candidateId: candidate.id };
  }
  
  return null;
}
