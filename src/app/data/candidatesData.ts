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
  shortBio?: string;
  verified?: boolean;
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
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya bağlantıları güçlü; Paolo Maldini ile İstanbul'da görüşme gerçekleştirdi (futbol stratejisi/transfer akıl hocalığı). Roberto Mancini ve diğer İtalyan bağlantıları aktif. Seçim öncesi hoca + transfer açıklamaları planlıyor. Dernek ziyaretleri (Şanlıurfa, Mardin vb.) ve Avrupa temasları sürüyor. Aziz Yıldırım'ın birlik çağrısını reddetti; 'Dünya yıldızları getireceğiz' vurgusu yapıyor. Liverpool'dan kaleci (Ederson alternatifi) ve diğer bombalar gündemde.",
    vision: "Uzun vadeli (1+3 yıl) planlarla kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Tek başına seçime giriyor. İlk sezonda güçlü transferler ve şampiyonluk hedefi. İtalya görüşmeleriyle kongreye somut isimler sunma hazırlığında. 'Tarihin en iddialı ve değerli kadrosunu kuracağız' vurgusu. 'Türkiye'yi bilen, işi ehli hoca getireceğiz' mesajı (Sportif direktör olmayacak). Seçim öncesi hoca + bomba transfer açıklamaları hedefi sürüyor. Stadyum kapasite artışı (64k) ve altyapı/pilot takım projeleri öne çıkıyor.",
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
        description: "Güçlü yabancı hoca ve kaliteli kadro (Paolo Maldini ile futbol yapılanması/transfer akıl hocalığı görüşmeleri yapıldı; Roberto Mancini temasları aktif. Yerli: İsmail Kartal öncelikli seçeneklerden. Bombalar: Rafael Leão, Tomori, Maignan, Vlahović, Nkunku, Guirassy, Pavlidis, Greenwood vb. Liverpool bağlantılarıyla kaleci görüşmeleri başladı. Seçim öncesi somut hoca + 2-4 bomba transfer duyurusu hedefi; 'Dünya yıldızları getireceğiz', 4 baba transfer vaadi)",
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
        description: "Sürdürülebilir gençlik gelişimi, uzun vadeli akademi yatırımları ve Anadolu'dan 5 pilot takım satın alma projesi",
        category: "Altyapı",
        icon: "users",
        priority: "önemli"
      },
      {
        id: "p9",
        title: "Stadyum ve Tesis Yenileme",
        description: "Şükrü Saracoğlu Stadyumu'nu aynı yerde kapasite artışı (64.000 kişiye çıkarma); loca sayısını artırma ve tribün gelirlerini maksimize etme. Tesis projelerine öncelik",
        category: "Altyapı",
        icon: "stadium",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı" },
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; 22 Mayıs'ta yönetim listesini açıkladı; İtalya/Avrupa turu, Maldini görüşmesi ve Liverpool bağlantıları; Yıldırım'ın birlik çağrısını reddetti; 'Dünya yıldızları getireceğiz', stadyum kapasite artışı (64k), pilot takımlar ve tesis projeleri; seçim öncesi somut açıklamalar planı; dernek ziyaretleri devam ediyor" }
    ],
    popularity: 46, // Polls approximate; dynamic
    boardMembers: [
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aytemiz Petrol'ün kurucusu. Sanayi ve enerji teknolojileri sektörlerinde tecrübeli; Fenerbahçeliler 2000 Derneği eski başkanı." },
      { id: "b2", name: "Metin Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe camiasının tanınmış isimlerinden; dernek ve kulüp faaliyetlerinde uzun yıllar aktif." },
      { id: "b3", name: "Agah Ruşen Çetin", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "TUREKS Grubu Yönetim Kurulu Başkanı. 1907 Fenerbahçe Derneği kurucusu ve eski başkanı (2017-2021); eski Fenerbahçe ve TFF yönetim kurulu üyesi." },
      { id: "b4", name: "Metin Sipahioğlu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1983 doğumlu. 2018-2021 döneminde Fenerbahçe yönetim kurulu üyesi; kurumsal iletişim ve kadın basketboldan sorumlu." },
      { id: "b5", name: "Dağlarca Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı ve spor yöneticisi; Çağdaş Bodrumspor'da görev aldı. Fenerbahçe altyapısında futbol oynamış." },
      { id: "b6", name: "Rahmi Mertay Türk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1988 Ankara doğumlu. ŞA-RA Grup Genel Müdürü ve Yönetim Kurulu Başkanı; enerji, inşaat ve turizm." },
      { id: "b7", name: "Mustafa Ömer Topbaş", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe Futbol A.Ş. Yönetim Kurulu Üyesi. Sportif yönetim tarafında aktif." },
      { id: "b8", name: "Özgür Özaktaç", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1988 İstanbul doğumlu, Özaktaç A.Ş. Yönetim Kurulu Başkanı. Eski Fenerbahçe yönetim kurulu üyesi; altyapı görevleri." },
      { id: "b9", name: "Atakan Altınbaş", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Altınbaş Holding'in genç kuşak temsilcisi. Tekstil, enerji, lüks tüketim ve finans." },
      { id: "b10", name: "Orhan Turan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe kongre üyesi iş insanı; kulüp faaliyetlerinde aktif." },
      { id: "b11", name: "Selahattin Süleymanoğlu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Halk Bankası eski Genel Müdür Yardımcısı. Finans ve spor yönetimi tecrübesi." },
      { id: "b12", name: "Ogün Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Doğanlar Holding Yönetim Kurulu Üyesi. Enerji ve holding faaliyetleri." },
      { id: "b13", name: "Şanser Özyıldırım", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İstanbul Jet Havacılık ve Yakıt Hizmetleri A.Ş. kurucu ve yönetim kurulu başkanı. Tekerlekli sandalye basketbol sponsoru." },
      { id: "b14", name: "Taha Gökberk Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Avukat ve spor hukukçusu. Fenerbahçeli Hukukçular Derneği kurucu başkanı." },
      { id: "b15", name: "Esra Öztürk Çilingir", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe Sicil Kurulu üyesi; idari operasyonlar uzmanı." },
      { id: "b16", name: "Ahmet Bulut", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe Yüksek Divan Kurulu üyesi." },
      { id: "b17", name: "Ahmet Murat Emanetoğlu", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Op. Dr.; eski Fenerbahçe yönetim kurulu üyesi ve 1907 Derneği üyesi." },
      { id: "b18", name: "Ertuğrul Eren Ergen", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b19", name: "Barış Öztürk", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; dernek faaliyetlerinde aktif." },
      { id: "b20", name: "Mustafa Enes Yıldırım", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b21", name: "Aras Bağ", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; iş dünyasında aktif." }
    ],
    campaignContacts: [
      { id: "cc1", name: "Yusuf Kenan Çalık" }
    ],
    coachCandidates: [
      { id: "c2", name: "Roberto Mancini", status: "İtalya bağlantıları güçlü, görüşmeler aktif" },
      { id: "c3", name: "İsmail Kartal", status: "Yerli öncelikli seçenek / Türkiye'yi bilen profil" }
    ]
  },
  {
    id: "2",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonlukla anılan efsane isim. 6 Mayıs 2026'da resmen adaylığını açıkladı. Barış Göktürk’ün desteğini aldı, Özgür Peker’yi Safi listesinden kendi listesine kattı. Dernek buluşmaları (Bursa, İzmir, Mardin, Çorlu, Londra vb.) yoğun şekilde devam ediyor. Seçim ofisi açıldı. Birlik çağrıları yaptı.",
    vision: "Kanıtlanmış tecrübeyle hızlı şampiyonluk ve Avrupa başarısı. 2026-27 sezonu için 'şampiyonluk mecburiyeti' vurgusu. Disiplinli yönetim, taraftar birliği ve camianın 120. yılında birlik mesajı. 'Yıldız + 10 asker' felsefesiyle tecrübeli futbol komitesi (Oğuz Çetin, Aykut Kocaman, Volkan Demirel, Dirk Kuijt vb.). En fazla 5-6 transferle kadroyu güçlendirme.",
    experience: [
      "Fenerbahçe Başkanı (1998-2018)",
      "Çok sayıda lig ve kupa şampiyonluğu",
      "Deneyimli iş insanı"
    ],
    projects: [
      {
        id: "p5",
        title: "Hemen Şampiyonluk",
        description: "Kısa vadede zirve hedefi (2026-27 mecburiyeti). 2 santrfor (Sörloth/Lukaku/Muriqi/Guirassy bağlantıları; prensip anlaşmaları var); 1 Haziran civarı açıklamalar. En az 3-5 bomba isim (Sörloth, Muriqi, Kim Min-jae, Zhegrova, Malick Diouf, Rashford vb.). Toplam 5-6 transfer. Sezon başlangıcında tam kadro sözü.",
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
        description: "Eski Fenerbahçe efsanelerinden (Oğuz Çetin - futbol aklı, Aykut Kocaman vb.) oluşan danışma/transfer/izleme komitesi",
        category: "Yönetim",
        icon: "shield",
        priority: "acil"
      },
      {
        id: "p10",
        title: "Stadyum Yenileme",
        description: "Şükrü Saracoğlu Stadyumu'nu aynı yerde modernize etme ve kapasite artışı (64.000-65.000); loca ve tribün gelirleri",
        category: "Altyapı",
        icon: "stadium",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "1990-1992", title: "Yönetim Kurulu Üyesi ve Futbol Şubesi Sorumlusu", description: "Aktif görev" },
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl liderlik" },
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk + Özgür Peker desteği; 22 Mayıs basın toplantısı ve birlik çağrıları; dernek buluşmaları; Oğuz Çetin, Aykut Kocaman vb. ile komite; 2 santrfor + bomba transfer hedefleri; stadyum kapasite artışı (64-65k); Londra/Europa temasları" }
    ],
    popularity: 54, // Approximate; dynamic
    boardMembers: [
      { id: "b22", name: "Barış Göktürk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Göktürk Holding Yönetim Kurulu Başkanı. Eski Fenerbahçe Futbol A.Ş. yönetim kurulu üyesi." },
      { id: "b23", name: "Mahmut Nedim Uslu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aziz Yıldırım dönemlerinde görev yapmış eski Fenerbahçe yöneticisi." },
      { id: "b24", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı; önceki Yıldırım yönetimlerinde aktif." },
      { id: "b25", name: "Mustafa Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe camiasından, iş dünyası destekçisi." },
      { id: "b26", name: "Ahmet Önder Fırat", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Önceki dönemlerde yönetimde yer almış tecrübeli isim." },
      { id: "b27", name: "Cihan Kamer", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Eski Fenerbahçe Asbaşkanı. Atasay Kuyumculuk CEO'su." },
      { id: "b28", name: "Fatih Öztürk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aziz Yıldırım'ın güvendiği, kulüp yönetimine aşina isim." },
      { id: "b29", name: "Batuhan Özdemir", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş dünyasından Fenerbahçeli yönetici." },
      { id: "b30", name: "Tanju Kaya", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Camia ve iş dünyasından destekçi." },
      { id: "b31", name: "Ahmet Murat İman", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Yıldırım listelerinde yer alan tecrübeli isim." },
      { id: "b32", name: "Özgür Peker", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı; önceki yönetimlerden tanınan." },
      { id: "b33", name: "Yusuf Buğra Tanık", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Genç kuşak Fenerbahçeli yönetici adayı." },
      { id: "b34", name: "Mehmet Aydın", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Tecrübeli camia ismi." },
      { id: "b35", name: "Mehmet Selim Kosif", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Yıldırım dönemlerinde aktif." },
      { id: "b36", name: "Fatih Aslan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Kongre üyesi ve camia destekçisi." },
      { id: "b37", name: "Volkan Akan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe camiasında destekçi." },
      { id: "b38", name: "Mustafa Aydın Acun", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Yedek yönetim adayı." },
      { id: "b39", name: "Barış Karagöz", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b40", name: "Savaş Adalet", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe camiasında destekçi." },
      { id: "b41", name: "Demre İşcan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Destekçi üye." },
      { id: "b42", name: "Yasemin Babayiğit", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçeli kadın üye." }
    ],
    campaignContacts: [
      { id: "cc2", name: "Yusuf Mertol" }
    ],
    coachCandidates: [
      { id: "c8", name: "Aykut Kocaman", status: "Öncelikli aday" }
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
