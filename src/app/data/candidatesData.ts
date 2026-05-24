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
  campaignContacts?: CampaignContact[];
}

export interface BoardMember {
  id: string;
  name: string;
  position: string;
  type: "asil" | "yedek";
}

export interface CoachCandidate {
  id: string;
  name: string;
  status: string;
}

export interface CampaignContact {
  id: string;
  name: string;
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
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya odaklı (AC Milan bağlantıları) transfer ve teknik direktör görüşmeleri sürüyor; Paolo Maldini ile futbol stratejisi/transfer akıl hocalığı anlaşması sağladı (Maldini resmi görev almayacak, dostluk/akıl rolü).",
    vision: "Uzun vadeli (1+3 yıl) planlarla kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Tek başına seçime giriyor. İlk sezonda güçlü transferler ve şampiyonluk hedefi. İtalya görüşmeleriyle kongreye somut isimler sunma hazırlığında. 'Tarihin en iddialı ve değerli kadrosunu kuracağız' vurgusu. Seçim sürecinde tereddüt etmeden harekete geçtiğini, Fenerbahçe'ye maddi/manevi her türlü katkıyı sunmaya hazır olduğunu belirtiyor. 'Türkiye'yi bilen, işi ehli hoca getireceğiz' mesajı veriyor (Sportif direktör olmayacak, hoca doğrudan yönetim kurulu ve başkana bağlı çalışacak). Seçim öncesi hoca + en az 2-4 bomba transfer açıklaması planlıyor.",
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
        description: "Güçlü yabancı hoca ve kaliteli kadro (Paolo Maldini ile futbol yapılanması/transfer akıl hocalığı anlaşması; 'Türkiye'yi bilen hoca' öncelikli - tecrübeli ve ligi tanıyan profil. Yerli: İsmail Kartal öncelikli seçeneklerden; agresif İtalya-AC Milan görüşmeleri: Rafael Leão, Fikayo Tomori, Mike Maignan, Dusan Vlahovic, Nkunku vb. gibi isimler gündemde. Seçim öncesi hoca + 2-4 bomba transfer duyurusu hedefi; 'Dünya yıldızları getireceğiz', 4 baba transfer vaadi)",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p2",
        title: "Mali Yapı Güçlendirme",
        description: "Holding tecrübesiyle finansal disiplin ve sürdürülebilir gelir modelleri (kulüp gelirini 350M €'dan 1 milyar €'ya çıkarma hedefi)",
        category: "Finansal",
        icon: "trending-up",
        priority: "acil"
      },
      {
        id: "p3",
        title: "Taraftar ve Birlik",
        description: "Camia bütünlüğünü sağlama, dernek ve divan ziyaretleri",
        category: "Topluluk",
        icon: "heart",
        priority: "önemli"
      },
      {
        id: "p4",
        title: "Altyapı Yatırımları",
        description: "Sürdürülebilir gençlik gelişimi ve uzun vadeli akademi yatırımları",
        category: "Altyapı",
        icon: "users",
        priority: "önemli"
      },
      {
        id: "p9",
        title: "Stadyum ve Tesis Yenileme",
        description: "Şükrü Saracoğlu Stadyumu'nu aynı yerde kapasite artışı (65.000 kişiye çıkarma); loca sayısını artırma ve tribün gelirlerini maksimize etme. Tesis projelerine de öncelik (kulübe uzun vadeli gelir artışı hedefi)",
        category: "Altyapı",
        icon: "stadium",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı" },
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; İtalya transfer/hoca turu (AC Milan bağlantıları, Leão, Tomori, Maignan vb.); Paolo Maldini ile strateji/akıl hocalığı anlaşması (resmi görev yok); 20+ Mayıs vurguları: 'Türkiye'yi bilen hoca' (Conte denklem dışı); Birleşme çağrılarını reddetti; 'Dünya yıldızları getireceğiz', stadyum kapasite artışı (65k) ve tesis projeleri; seçim öncesi somut açıklamalar planı" }
    ],
    popularity: 40,  // Active campaigning, Italy buzz, and transfer promises providing momentum (~35-45%)
    boardMembers: [
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b2", name: "Metin Doğan", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b3", name: "Agah Ruşen Çetin", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b4", name: "Metin Sipahioğlu", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b5", name: "Dağlarca Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b6", name: "Rahmi Mertay Türk", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b7", name: "Mustafa Ömer Topbaş", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b8", name: "Özgür Özaktaç", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b9", name: "Atakan Altınbaş", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b10", name: "Orhan Turan", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b11", name: "Selahattin Süleymanoğlu", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b12", name: "Ogün Doğan", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b13", name: "Şanser Özyıldırım", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b14", name: "Taha Gökberk Doğan", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b15", name: "Esra Öztürk Çilingir", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b16", name: "Ahmet Bulut", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b17", name: "Ahmet Murat Emanetoğlu", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b18", name: "Ertuğrul Eren Ergen", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b19", name: "Barış Öztürk", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b20", name: "Mustafa Enes Yıldırım", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b21", name: "Aras Bağ", position: "Yönetim Kurulu Üyesi", type: "yedek" }
    ],
    campaignContacts: [
      { id: "cc1", name: "Yusuf Kenan Çalık" }
    ],
    coachCandidates: [
      { id: "c1", name: "Francesco Farioli", status: "Türkiye'yi iyi bilen profil. Porto deneyimi var." },
      { id: "c2", name: "Roberto Mancini", status: "Türkiye'yi iyi bilen profil. İtalya bağlantıları güçlü." },
      { id: "c3", name: "İsmail Kartal", status: "Yerli öncelikli seçenek / Türkiye'yi çok iyi bilen profil" },
      { id: "c4", name: "Stefano Pioli", status: "Maldini önerisi (İtalya deneyimi var ama Türkiye bilgisi sınırlı)" },
      { id: "c5", name: "Filipe Luis", status: "Liste adayı (yeni nesil; Türkiye deneyimi yok)" }
    ]
  },
  {
    id: "2",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonluk ve başarıyla anılan efsane isim. 6 Mayıs 2026'da resmen adaylığını açıkladı. Barış Göktürk’ün desteğini aldı, derneklerle buluşmalar yapıyor (Bursa, İzmir vb.). Özgür Peker’yi Safi listesinden kendi listesine kattı.",
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
        description: "Kısa vadede zirve hedefi (2026-27 mecburiyeti; 'Olamazsa büyük tehlikeler bekliyor'). İlk transferler: Alexander Sörloth ana hedef (B planı Lukaku), en az 3-5 bomba isim (Sörloth, Muriqi, Kim Min-jae, Zhegrova, Malick Diouf vb. bağlantıları)",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p6",
        title: "Taraftar Birliği",
        description: "Camia içi dayanışmayı artırma; dernek buluşmaları ve geniş birlik çağrıları",
        category: "Topluluk",
        icon: "heart",
        priority: "acil"
      },
      {
        id: "p7",
        title: "Yapısal Dönüşüm",
        description: "Kulübün geleceğini güvence altına alma, mali disiplin ve ibra/denetim vurgusu",
        category: "Yönetim",
        icon: "shield",
        priority: "önemli"
      },
      {
        id: "p8",
        title: "Futbol Aklı ve Yapısal Dönüşüm",
        description: "Eski Fenerbahçe efsanelerinden (Oğuz Çetin - futbol aklı, Aykut Kocaman - teknik/TD rolü, Volkan Demirel vb.) oluşan danışma/transfer/izleme komitesi kurma; tecrübelerinden faydalanarak karar mekanizmasını güçlendirme (son haftalarda planlar netleşti)",
        category: "Yönetim",
        icon: "shield",
        priority: "acil"
      },
      {
        id: "p10",
        title: "Stadyum Yenileme",
        description: "Şükrü Saracoğlu Stadyumu'nu aynı yerde modernize etme ve kapasite artışı (64.000-65.000 kişiye çıkarma); loca sayısını artırma, yeni/modern tribünler. İzin süreçlerini hızlandırma ve gelir artışı hedefi",
        category: "Altyapı",
        icon: "stadium",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "1990-1992", title: "Yönetim Kurulu Üyesi ve Futbol Şubesi Sorumlusu", description: "Aktif görev" },
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl liderlik" },
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk desteği + Özgür Peker transferi; birlik çağrısı; dernek/kongre buluşmaları; seçim tarihinin erkene çekilmesi talebi; Oğuz Çetin, Aykut Kocaman vb. ile futbol kontrolü planı; Jorge Jesus öncelikli; Sörloth ana transfer hedefi; stadyum kapasite artışı (64-65k) projesi" }
    ],
    popularity: 60,  // Strong lead in sentiment, veteran support, and recent list gains (~55-65%)
    boardMembers: [
      { id: "b22", name: "Barış Göktürk", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b23", name: "Mahmut Nedim Uslu", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b24", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b25", name: "Mustafa Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b26", name: "Ahmet Önder Fırat", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b27", name: "Cihan Kamer", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b28", name: "Fatih Öztürk", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b29", name: "Batuhan Özdemir", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b30", name: "Tanju Kaya", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b31", name: "Ahmet Murat İman", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b32", name: "Özgür Peker", position: "Yönetim Kurulu Üyesi", type: "asil" },  // Recently added from Safi's list
      { id: "b33", name: "Yusuf Buğra Tanık", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b34", name: "Mehmet Aydın", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b35", name: "Mehmet Selim Kosif", position: "Yönetim Kurulu Üyesi", type: "asil" },
      { id: "b36", name: "Fatih Aslan", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b37", name: "Volkan Akan", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b38", name: "Mustafa Aydın Acun", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b39", name: "Barış Karagöz", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b40", name: "Savaş Adalet", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b41", name: "Demre İşcan", position: "Yönetim Kurulu Üyesi", type: "yedek" },
      { id: "b42", name: "Yasemin Babayiğit", position: "Yönetim Kurulu Üyesi", type: "yedek" }
    ],
    campaignContacts: [
      { id: "cc2", name: "Yusuf Mertol" }
    ],
    coachCandidates: [
      { id: "c5", name: "Jorge Jesus", status: "Öncelikli / Bomba isim (eski Fenerbahçe deneyimi, yüksek maliyet tartışmalı; Türkiye'yi iyi biliyor)" },
      { id: "c6", name: "Aykut Kocaman", status: "Güçlü yerli alternatif (futbol aklı / TD rolü vurgusu; Oğuz Çetin ve diğer veterenlerle futbol kontrolü)" },
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
