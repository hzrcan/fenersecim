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
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya odaklı (AC Milan bağlantıları) transfer ve teknik direktör görüşmeleri sürüyor; Paolo Maldini ile futbol stratejisi/transfer akıl hocalığı anlaşması sağladı (Maldini resmi görev almayacak, dostluk/akıl hocalığı rolü; görüşmeler İstanbul ve Milano'da gerçekleşti).",
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
        description: "Şükrü Saracoğlu Stadyumu'nu aynı yerde kapasite artışı (64.000 kişiye çıkarma); loca sayısını artırma ve tribün gelirlerini maksimize etme. Tesis projelerine de öncelik (kulübe uzun vadeli gelir artışı hedefi)",
        category: "Altyapı",
        icon: "stadium",
        priority: "acil"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı" },
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; 22 Mayıs'ta yönetim listesini açıkladı; İtalya turu ve Maldini görüşmeleri; Yıldırım'ın birlik çağrısını reddetti; 'Dünya yıldızları getireceğiz', stadyum kapasite artışı (64k) ve tesis projeleri; seçim öncesi somut açıklamalar planı; dernek ziyaretleri devam ediyor" }
    ],
    popularity: 45,  // No major verified shift needed; recent polls show ~47% support in some surveys, but core base holds steady vs. Yıldırım's experience edge
    boardMembers: [  // Matches verified 22 Mayıs list
      { id: "b1", name: "Ali Aytemiz", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aytemiz Petrol'un kurucusu. Sanayi ve enerji teknolojileri sektörlerinde uzun yıllara dayanan tecrübeye sahip iş insanı; Fenerbahçeliler 2000 Derneği eski başkanı." },
      { id: "b2", name: "Metin Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe camiasının tanınmış isimlerinden; dernek ve kulüp faaliyetlerinde uzun yıllar aktif rol almış emektar yönetici." },
      { id: "b3", name: "Agah Ruşen Çetin", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "TUREKS Grubu Yönetim Kurulu Başkanı. 1907 Fenerbahçe Derneği kurucusu ve eski başkanı (2017-2021); eski Fenerbahçe ve TFF yönetim kurulu üyesi." },
      { id: "b4", name: "Metin Sipahioğlu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1983 doğumlu. 2018-2021 döneminde Fenerbahçe yönetim kurulu üyesi olarak kurumsal iletişim ve kadın basketboldan sorumlu görev yaptı." },
      { id: "b5", name: "Dağlarca Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı ve spor yöneticisi; Çağdaş Bodrumspor'da görev aldı. Fenerbahçe altyapısında futbol oynamış, altyapı bağlarıyla öne çıkan isim." },
      { id: "b6", name: "Rahmi Mertay Türk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1988 Ankara doğumlu. ŞA-RA Grup Genel Müdürü ve Yönetim Kurulu Başkanı; enerji, inşaat ve turizm alanlarında faaliyet gösteriyor." },
      { id: "b7", name: "Mustafa Ömer Topbaş", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe Futbol A.Ş. Yönetim Kurulu Üyesi. Sportif yönetim tarafında aktif rol alan, spor yönetimi eğitimi bulunan yönetici." },
      { id: "b8", name: "Özgür Özaktaç", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "1988 İstanbul doğumlu, Özaktaç A.Ş. Yönetim Kurulu Başkanı. Eski Fenerbahçe yönetim kurulu üyesi; altyapı ve akademilerde görev yaptı." },
      { id: "b9", name: "Atakan Altınbaş", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Altınbaş Holding'in genç kuşak temsilcisi. Tekstil, enerji, lüks tüketim ve finans sektörlerinde faaliyet gösteren holding yönetiminde yer alıyor." },
      { id: "b10", name: "Orhan Turan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe kongre üyesi iş insanı; kulüp faaliyetlerinde aktif rol alıyor." },
      { id: "b11", name: "Selahattin Süleymanoğlu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Halk Bankası eski Genel Müdür Yardımcısı. Finans ve spor yönetimi alanlarında tecrübeli, voleybol camiasında tanınan isim." },
      { id: "b12", name: "Ogün Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Doğanlar Holding Yönetim Kurulu Üyesi. Enerji ve holding faaliyetlerinde aktif rol alan iş insanı." },
      { id: "b13", name: "Şanser Özyıldırım", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İstanbul Jet Havacılık ve Yakıt Hizmetleri A.Ş. kurucu ve yönetim kurulu başkanı. Fenerbahçe tekerlekli sandalye basketbol takımının isim sponsoru." },
      { id: "b14", name: "Taha Gökberk Doğan", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Avukat ve spor hukukçusu. Fenerbahçeli Hukukçular Derneği kurucu başkanı; kulüpte iletişim ve voleybol şubelerinde görev yaptı." },
      { id: "b15", name: "Esra Öztürk Çilingir", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe Sicil Kurulu üyesi; idari operasyonlar ve üyelik süreçlerinde uzman." },
      { id: "b16", name: "Ahmet Bulut", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe Yüksek Divan Kurulu üyesi; kongre ve divan toplantılarında aktif rol alan camia ismi." },
      { id: "b17", name: "Ahmet Murat Emanetoğlu", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Op. Dr.; eski Fenerbahçe yönetim kurulu üyesi ve 1907 Fenerbahçe Derneği üyesi." },
      { id: "b18", name: "Ertuğrul Eren Ergen", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi ve camia destekçisi." },
      { id: "b19", name: "Barış Öztürk", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; dernek faaliyetlerinde aktif." },
      { id: "b20", name: "Mustafa Enes Yıldırım", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b21", name: "Aras Bağ", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; iş dünyasında aktif." }
    ],
    campaignContacts: [
      { id: "cc1", name: "Yusuf Kenan Çalık" }
    ],
    coachCandidates: [
      { id: "c2", name: "Roberto Mancini", status: "Türkiye'yi iyi bilen profil. İtalya bağlantıları güçlü." },
      { id: "c3", name: "İsmail Kartal", status: "Yerli öncelikli seçenek / Türkiye'yi çok iyi bilen profil" }
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
        description: "Kısa vadede zirve hedefi (2026-27 mecburiyeti; 'Olamazsa büyük tehlikeler bekliyor'). İlk transferler: Alexander Sörloth ana hedef (B planı Lukaku), en az 3-5 bomba isim (Sörloth, Muriqi, Kim Min-jae, Zhegrova, Malick Diouf vb. bağlantıları). Seçim öncesi 2 forvet + ek isimler açıklaması hedefi; en fazla 5-6 transfer",
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
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk desteği + Özgür Peker transferi; 22 Mayıs basın toplantısı ve birlik çağrıları (Ali Koç + Safi); dernek buluşmaları; Oğuz Çetin, Aykut Kocaman vb. ile futbol komitesi; Sörloth ve bomba transfer hedefleri; stadyum kapasite artışı (64-65k) projesi; Londra transfer görüşmeleri planı" }
    ],
    popularity: 55,
    boardMembers: [ 
      { id: "b22", name: "Barış Göktürk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Göktürk Holding Yönetim Kurulu Başkanı. Eski Fenerbahçe Futbol A.Ş. yönetim kurulu üyesi." },
      { id: "b23", name: "Mahmut Nedim Uslu", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aziz Yıldırım dönemlerinde görev yapmış eski Fenerbahçe yöneticisi." },
      { id: "b24", name: "Nihat Özbağı", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı; önceki Yıldırım yönetimlerinde aktif rol almış yönetici." },
      { id: "b25", name: "Mustafa Çağlar", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Fenerbahçe camiasından, iş dünyası destekçisi." },
      { id: "b26", name: "Ahmet Önder Fırat", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Önceki dönemlerde yönetimde yer almış tecrübeli isim." },
      { id: "b27", name: "Cihan Kamer", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Eski Fenerbahçe Asbaşkanı. Atasay Kuyumculuk CEO'su ve iş insanı." },
      { id: "b28", name: "Fatih Öztürk", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Aziz Yıldırım'ın güvendiği, kulüp yönetimine aşina isim." },
      { id: "b29", name: "Batuhan Özdemir", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş dünyasından Fenerbahçeli yönetici." },
      { id: "b30", name: "Tanju Kaya", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Camia ve iş dünyasından destekçi isim." },
      { id: "b31", name: "Ahmet Murat İman", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Yıldırım listelerinde yer alan tecrübeli isim." },
      { id: "b32", name: "Özgür Peker", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "İş insanı; önceki yönetim dönemlerinden tanınan isim." },
      { id: "b33", name: "Yusuf Buğra Tanık", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Genç kuşak Fenerbahçeli yönetici adayı." },
      { id: "b34", name: "Mehmet Aydın", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Tecrübeli camia ismi." },
      { id: "b35", name: "Mehmet Selim Kosif", position: "Yönetim Kurulu Üyesi", type: "asil", shortBio: "Yıldırım dönemlerinde aktif rol almış isim." },
      { id: "b36", name: "Fatih Aslan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Kongre üyesi ve camia destekçisi." },
      { id: "b37", name: "Volkan Akan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe camiasında destekçi isimlerden biri." },
      { id: "b38", name: "Mustafa Aydın Acun", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Yedek yönetim kurulu adayı." },
      { id: "b39", name: "Barış Karagöz", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b40", name: "Savaş Adalet", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe camiasında yer alan destekçi isim." },
      { id: "b41", name: "Demre İşcan", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Destekçi üye." },
      { id: "b42", name: "Yasemin Babayiğit", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçeli kadın üye." }
    ],
    campaignContacts: [
      { id: "cc2", name: "Yusuf Mertol" }
    ],
    coachCandidates: [
      { id: "c8", name: "Aykut Kocaman", status: "Aday" }
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
