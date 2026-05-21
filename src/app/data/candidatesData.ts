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
    slogan: "Deneyim ve Yenilik",
    photo: "/assets/hakansafi.jpg",
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya'da (özellikle AC Milan odaklı) yoğun transfer ve teknik direktör görüşmeleri yapıyor; Paolo Maldini ile futbol yapılanması için anlaşma sağladı.",
    vision: "Uzun vadeli planlarla (1+3 yıl) kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Tek başına seçime giriyor. İlk sezonda güçlü transferler ve şampiyonluk hedefi. İtalya'daki görüşmelerle kongreye somut isimler sunma hazırlığında. 'Tarihin en iddialı ve değerli kadrosunu kuracağız' vurgusu yapıyor. Seçim sürecinde tereddüt etmeden harekete geçtiğini, Fenerbahçe'ye maddi/manevi her türlü katkıyı sunmaya hazır olduğunu belirtiyor. **'Türkiye'yi bilen, işi ehli hoca getireceğiz'** mesajı veriyor (Sportif direktör olmayacak, hoca doğrudan yönetim kurulu ve başkana bağlı çalışacak).",
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
        description: "Güçlü yabancı hoca ve kaliteli kadro (Paolo Maldini ile futbol yapılanması anlaşması - futbol elçisi/akıl rolü; 'Türkiye'yi bilen hoca' öncelikli vurgusu - tecrübeli ve ligi tanıyan profil hedefleniyor; Jorge Jesus (eski Fenerbahçe deneyimiyle güçlü aday), Stefano Pioli (Maldini önerisi), Filipe Luis vb.; yerli: İsmail Kartal öncelikli; agresif strateji, İtalya-AC Milan görüşmeleri: Rafael Leão, Fikayo Tomori, Mike Maignan, Dusan Vlahovic, Nkunku gibi isimler gündemde)",
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
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; İtalya transfer/hoca turu (AC Milan görüşmeleri, Leão, Tomori, Maignan vb. bağlantıları dahil; Paolo Maldini anlaşması - futbol aklı rolü); 20 Mayıs'ta 'Türkiye'yi bilen hoca' vurgusu (Conte denklem dışı bırakıldı); Jorge Jesus ve İsmail Kartal gibi isimler ön planda; kongreye somut isimler hazırlığında; birleşme çağrılarını reddetti; 'Dünya yıldızları getireceğiz' vurgusu" }
    ],
    popularity: 38,  // Trailing but active campaigning and transfer buzz providing slight momentum (~35-40% range)
    boardMembers: [
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi" },
      { id: "b2", name: "Metin Sipahioğlu", position: "Yönetim Kurulu Üyesi" },
      { id: "b3", name: "Ruşen Çetin", position: "Yönetim Kurulu Üyesi" },
      { id: "b4", name: "Ömer Topbaş", position: "Yönetim Kurulu Üyesi" },
      { id: "b5", name: "Ahmet Bulut", position: "Yönetim Kurulu Üyesi" },
      { id: "b6", name: "Selahattin Süleymanoğlu", position: "Yönetim Kurulu Üyesi" },
      { id: "b7", name: "Metin Doğan", position: "Yönetim Kurulu Üyesi" },
      { id: "b8", name: "Cem Ciritçi", position: "Yönetim Kurulu Üyesi" },
      { id: "b9", name: "Özgür Özaktaç", position: "Yönetim Kurulu Üyesi" },
      { id: "b10", name: "Enes Yıldırım", position: "Yönetim Kurulu Üyesi" },
      { id: "b11", name: "Ozan Vural", position: "Yönetim Kurulu Üyesi" },
      { id: "b12", name: "Şanser Özyıldırım", position: "Yönetim Kurulu Üyesi" }
    ],
    coachCandidates: [
      { id: "c1", name: "Jorge Jesus", status: "Güçlü aday (eski Fenerbahçe deneyimiyle 'Türkiye'yi bilen' kriterine uyumlu; her iki adayda da kulislerde)" },
      { id: "c2", name: "İsmail Kartal", status: "Yerli öncelikli seçenek / Türkiye'yi çok iyi bilen profil" },
      { id: "c3", name: "Stefano Pioli", status: "Maldini önerisi (İtalya deneyimi var ama Türkiye bilgisi sınırlı)" },
      { id: "c4", name: "Filipe Luis", status: "Liste adayı (yeni nesil; Türkiye deneyimi yok)" }
      // Conte fully removed per latest statements and "Türkiye'yi bilen" criterion
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
      },
      {
        id: "p8",
        title: "Futbol Aklı ve Yapısal Dönüşüm",
        description: "Eski Fenerbahçe efsanelerinden (Oğuz Çetin - futbol aklı, Aykut Kocaman - teknik/TD rolü ve diğer veterenler) oluşan danışma/transfer/izleme komitesi kurma; tecrübelerinden faydalanarak karar mekanizmasını güçlendirme (son haftalarda bir araya gelip plan yapıldı)",
        category: "Yönetim",
        icon: "shield",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "1990-1992", title: "Yönetim Kurulu Üyesi ve Futbol Şubesi Sorumlusu", description: "Aktif görev" },
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl liderlik" },
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk desteği; birlik çağrısı; dernek/kongre buluşmaları; seçim tarihinin erkene çekilmesi talebi; Oğuz Çetin, Aykut Kocaman, Volkan Demirel gibi eski futbolcularla futbol kontrolü planı; Jorge Jesus öncelikli" }
    ],
    popularity: 62,  // Strong lead in recent sentiment and member discussions (~60-65%)
    boardMembers: [
      { id: "b13", name: "Barış Göktürk", position: "Başkan Vekili / Destekçi" },
      { id: "b14", name: "Mahmut Uslu", position: "Yönetim Kurulu Üyesi" },
      { id: "b15", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi" },
      { id: "b16", name: "Ömer Onan", position: "Yönetim Kurulu Üyesi" },
      { id: "b17", name: "Önder Fırat", position: "Yönetim Kurulu Üyesi" },
      { id: "b18", name: "Özgür Peker", position: "Yönetim Kurulu Üyesi" },
      { id: "b19", name: "Yusuf Buğra Tanık", position: "Yönetim Kurulu Üyesi" },
      { id: "b20", name: "Batuhan Özdemir", position: "Yönetim Kurulu Üyesi" },
      { id: "b21", name: "Mustafa Çağlar", position: "Yönetim Kurulu Üyesi" },
      { id: "b22", name: "Mehmet İman", position: "Yönetim Kurulu Üyesi" },
      { id: "b23", name: "Volkan Akan", position: "Yönetim Kurulu Üyesi" }
    ],
    coachCandidates: [
      { id: "c5", name: "Jorge Jesus", status: "Öncelikli / Bomba isim (eski Fenerbahçe deneyimi, yüksek maliyet tartışmalı; Türkiye'yi iyi biliyor)" },
      { id: "c6", name: "Aykut Kocaman", status: "Güçlü yerli alternatif (futbol aklı / TD rolü vurgusu; Oğuz Çetin ve Rıdvan Dilmen ile birlikte futbol kontrolü)" },
      { id: "c7", name: "Roberto Mancini", status: "Listede" },
      { id: "c8", name: "Nuri Şahin", status: "Alternatifler" }
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
