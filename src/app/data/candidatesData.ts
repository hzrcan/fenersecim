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
  coachCandidates?: CoachCandidate[];
}

export interface BoardMember {
  id: string;
  name: string;
  position: string;
}

export interface CoachCandidate {
  id: string;
  name: string;
  status: string;
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
    slogan: "Deneyim ve Yenilik",  // Unchanged; focus remains on business experience + bold moves
    photo: "/assets/hakansafi.jpg",
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya'da (özellikle AC Milan odaklı) yoğun transfer ve teknik direktör görüşmeleri yapıyor; Rafael Leão, Fikayo Tomori, Mike Maignan, Dusan Vlahovic gibi isimlerle bağlantılar gündemde.",
    vision: "Uzun vadeli planlarla (1+3 yıl) kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Tek başına seçime giriyor. İlk sezonda güçlü transferler ve şampiyonluk hedefi. İtalya'daki görüşmelerle kongreye somut isimler sunma hazırlığında. 'Tarihin en iddialı ve değerli kadrosunu kuracağız' vurgusu yapıyor. Seçim sürecinde tereddüt etmeden harekete geçtiğini, Fenerbahçe'ye maddi/manevi her türlü katkıyı sunmaya hazır olduğunu belirtiyor.",
    experience: [
      "Safi Holding Yönetim Kurulu Başkanı",
      "Eski Fenerbahçe Yönetim Kurulu Üyesi",
      "Marmara Üniversitesi İktisat mezunu",
      "Fenerbahçe Kongre ve Yüksek Divan Kurulu Üyesi (1998'den beri)"
    ],
    projects: [
      {
        id: "p1",
        title: "Transfer ve Teknik Ekip",
        description: "Güçlü yabancı hoca ve kaliteli kadro (baba transferler; agresif strateji, İtalya-AC Milan görüşmeleri devam ediyor: Rafael Leão, Tomori, Maignan, Vlahovic, Nkunku gibi isimler gündemde; Antonio Conte öncelikli hoca adayı)",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p2",
        title: "Mali Yapı Güçlendirme",
        description: "Holding tecrübesiyle finansal disiplin",
        category: "Finansal",
        icon: "trending-up",
        priority: "acil"
      },
      {
        id: "p3",
        title: "Taraftar ve Birlik",
        description: "Camia bütünlüğünü sağlama",
        category: "Topluluk",
        icon: "heart",
        priority: "önemli"
      },
      {
        id: "p4",
        title: "Altyapı Yatırımları",
        description: "Sürdürülebilir gençlik gelişimi",
        category: "Altyapı",
        icon: "users",
        priority: "önemli"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı" },
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; İtalya transfer/hoca turu (AC Milan görüşmeleri, Leão, Tomori, Maignan vb. bağlantıları dahil); kongreye somut isimler hazırlığında; birleşme çağrılarını reddetti; 'Dünya yıldızları getireceğiz' vurgusu" }
    ],
    popularity: 35,  // Trailing in recent sentiment/polls; Aziz leads significantly
    boardMembers: [
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi" },
      { id: "b2", name: "Metin Sipahioğlu", position: "İletişimden Sorumlu Yönetim Kurulu Üyesi" },
      { id: "b3", name: "Ruşen Çetin", position: "Yönetim Kurulu Üyesi" }
    ],
    coachCandidates: [
      { id: "c1", name: "Antonio Conte", status: "Liste başı / İlk tercih (Napoli bağlantıları ve kupa başarısı vurgusu; 7 lig şampiyonluğu)" },
      { id: "c2", name: "Filipe Luis", status: "Güçlü aday" },
      { id: "c3", name: "Xabi Alonso", status: "Listede" },
      { id: "c4", name: "Oliver Glasner", status: "Kulislerde" },
      { id: "c5", name: "Sebastian Hoeness", status: "Kulislerde" },
      { id: "c6", name: "Andoni Iraola", status: "Görüşme yapılabilir" },
      { id: "c7", name: "Ruben Amorim", status: "Alternatif" },
      { id: "c8", name: "İsmail Kartal", status: "Yerli alternatif" }
    ]
  },
  {
    id: "2",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonluk ve başarıyla anılan efsane isim. 6 Mayıs 2026'da resmen adaylığını açıkladı. Barış Göktürk'ün desteğini aldı ve derneklerle buluşmalar yapıyor (Bursa, İzmir vb.).",
    vision: "Kanıtlanmış tecrübeyle hızlı şampiyonluk ve Avrupa başarısı. 2026-27 sezonu için 'şampiyonluk mecburiyeti' vurgusu ('Olamazsa çok büyük tehlikeler bekliyor'). Disiplinli yönetim, taraftar birliği ve camianın 120. yılında birlik mesajı. Birleşme çağrıları yaptı (kısmen başarılı; Barış Göktürk katıldı).",
    experience: [
      "Fenerbahçe Başkanı (1998-2018)",
      "Çok sayıda lig ve kupa şampiyonluğu",
      "Deneyimli iş insanı"
    ],
    projects: [
      {
        id: "p5",
        title: "Hemen Şampiyonluk",
        description: "Kısa vadede zirve hedefi (2026-27 mecburiyeti; 'Olamazsa büyük tehlikeler bekliyor')",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p6",
        title: "Taraftar Birliği",
        description: "Camia içi dayanışmayı artırma; dernek buluşmaları",
        category: "Topluluk",
        icon: "heart",
        priority: "acil"
      },
      {
        id: "p7",
        title: "Yapısal Dönüşüm",
        description: "Kulübün geleceğini güvence altına alma",
        category: "Yönetim",
        icon: "shield",
        priority: "önemli"
      }
    ],
    pastInvolvement: [
      { year: "1990-1992", title: "Yönetim Kurulu Üyesi ve Futbol Şubesi Sorumlusu", description: "Aktif görev" },
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl liderlik" },
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk desteği; birlik çağrısı; dernek/kongre buluşmaları; seçim tarihinin erkene çekilmesi talebi" }
    ],
    popularity: 60,  // Leading in recent sentiment (~60% range in discussions/polls)
    boardMembers: [
      { id: "b4", name: "Barış Göktürk", position: "Başkan Vekili / Destekçi" },
      { id: "b5", name: "Mahmut Uslu", position: "Yönetim Kurulu Üyesi" },
      { id: "b6", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi" },
      { id: "b7", name: "Ömer Onan", position: "Yönetim Kurulu Üyesi" },
      { id: "b8", name: "Önder Fırat", position: "Yönetim Kurulu Üyesi" }
    ],
    coachCandidates: [
      { id: "c9", name: "Jorge Jesus", status: "Öncelikli / Bomba isim (Lizbon görüşmeleri gündemde; yüksek maliyet tartışmalı)" },
      { id: "c10", name: "Aykut Kocaman", status: "Güçlü yerli alternatif (yönetim/TD rolü veya futbol şubesi sorumlusu mümkün)" },
      { id: "c11", name: "Roberto Mancini", status: "Listede" },
      { id: "c12", name: "Nuri Şahin", status: "Alternatifler" },
      { id: "c13", name: "Vitor Bruno", status: "Kulislerde" }
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
