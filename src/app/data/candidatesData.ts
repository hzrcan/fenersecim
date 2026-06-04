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
  potentialTransfers?: PotentialTransfer[];
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

export interface PotentialTransfer {
  id: string;
  playerName: string;
  position: string;
  status: string;
  source: string;
  sourceUrl?: string;
  sourceType: "trusted_media" | "club_statement" | "x_discussion";
  xDiscussion?: string;
  xQueryUrl?: string;
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
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı. 5 Mayıs 2026'da resmen adaylığını açıkladı ve tek başına devam ediyor. İtalya bağlantıları güçlü; AC Milan ile transfer stratejisi görüşmeleri gerçekleştirdi. Roberto Mancini ve diğer İtalyan bağlantıları aktif. Seçim öncesi hoca + transfer açıklamaları planlıyor. Dernek ziyaretleri (Muğla/Bodrum, İstanbul Fenerbahçeliler Derneği vb.) yoğun şekilde sürüyor. Aziz Yıldırım'ın birlik çağrısını reddetti; 'Dünya yıldızları getireceğiz' vurgusu yapıyor. Hakan Çalhanoğlu ve Merih Demiral ile temsilciler üzerinden görüşmelerde prensip anlaşması iddiaları var (2 milli oyuncu vaadi). Liverpool bağlantılarıyla kaleci ve diğer bombalar gündemde. 3 Haziran 2026'da Yağız Sabuncuoğlu'nun açıklamasıyla Sporting CP forması giyen Luis Suarez ile 3+1 yıllık kişisel anlaşmaya vardığı duyuruldu. 4 Haziran itibarıyla Merih Demiral ile kişisel anlaşma sağlandı (Al-Ahli'ye 18-20M€ teklif planı); Mason Greenwood ile İngiltere'de kritik zirve (yönetim üyeleri + menajer); Hakan Çalhanoğlu'nun temsilcisiyle görüşme yapıldı, oyuncu kulüp onayı halinde sıcak baktığını belirtti. 6-7 Haziran seçimleri öncesi 'çarşambadan itibaren her gün bayram havası' vaat ediyor.",
    vision: "Uzun vadeli (1+3 yıl) planlarla kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek. Tek başına seçime giriyor. İlk sezonda güçlü transferler ve şampiyonluk hedefi. İtalya görüşmeleriyle kongreye somut isimler sunma hazırlığında. 'Tarihin en iddialı ve değerli kadrosunu kuracağız' vurgusu. 'Türkiye'yi bilen, işi ehli hoca getireceğiz' mesajı (Sportif direktör olmayacak). Seçim öncesi hoca + bomba transfer açıklamaları hedefi sürüyor (2 milli + 2-3 dünya yıldızı). Stadyum kapasite artışı (64k) ve altyapı/pilot takım projeleri öne çıkıyor. Kulüp gelirini 350M €'dan 500M €+ seviyeye çıkarma hedefi.",
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
        description: "Güçlü yabancı hoca ve kaliteli kadro (AC Milan ile transfer stratejisi görüşmeleri; Roberto Mancini temasları aktif. Yerli: İsmail Kartal öncelikli seçeneklerden. Son açıklamalarda 2 milli oyuncu (Hakan Çalhanoğlu ve Merih Demiral) ile prensip anlaşması iddiaları. Bombalar: Greenwood (İngiltere'de yönetim zirvesi), Maignan, Nkunku, Guirassy, Pavlidis, Lewandowski, Luis Suarez (Sporting, 3+1 kişisel anlaşma tamamlandı - menajer İstanbul'dan ayrıldı). Liverpool bağlantılarıyla kaleci görüşmeleri. Seçim öncesi somut hoca + 2-4 bomba transfer duyurusu hedefi; '2 milli + 2-3 dünya yıldızı getireceğiz', 4 baba transfer vaadi. Çarşambadan itibaren günlük bayram havası açıklamaları planlanıyor)",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p2",
        title: "Mali Yapı Güçlendirme",
        description: "Holding tecrübesiyle finansal disiplin ve sürdürülebilir gelir modelleri (kulüp gelirini 350M €'dan 500M €+ seviyeye çıkarma hedefi)",
        category: "Finansal",
        icon: "trending-up",
        priority: "acil"
      },
      {
        id: "p3",
        title: "Taraftar ve Birlik",
        description: "Camia bütünlüğünü sağlama, dernek ve divan ziyaretleri (Muğla, Bodrum, İstanbul dernek buluşmaları yoğun)",
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
      { year: "2026", title: "Başkan Adaylığı", description: "5 Mayıs'ta resmen açıkladı, tek başına devam ediyor; 22 Mayıs'ta yönetim listesini açıkladı; İtalya/AC Milan görüşmeleri, Mancini temasları ve Liverpool bağlantıları; Hakan Çalhanoğlu + Merih Demiral temsilcileriyle görüşmeler ve prensip anlaşması iddiaları; 4 Haziran Merih Demiral ile kişisel anlaşma (Al-Ahli'ye teklif planı); Mason Greenwood İngiltere zirvesi; Çalhanoğlu temsilcisi İstanbul görüşmesi; Yıldırım'ın birlik çağrısını reddetti; 'Dünya yıldızları getireceğiz'; stadyum kapasite artışı (64k), pilot takımlar ve tesis projeleri; Muğla/Bodrum/İstanbul dernek ziyaretleri; seçim öncesi (6-7 Haziran) somut hoca + transfer açıklamaları ve 'bayram havası' planı sürüyor; 3 Haziran'da Yağız Sabuncuoğlu açıklamasıyla Luis Suarez ile 3+1 yıllık kişisel anlaşma sağlandı (menajer 4 Haziran'da İstanbul'dan ayrıldı)" }
    ],
    popularity: 46, // Polls approximate; dynamic (no new verified poll as of 4 June)
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
      { id: "b18", name: "Mert Sayın", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Bodrum Fenerbahçeliler Derneği eski Başkanı." },
      { id: "b19", name: "Barış Öztürk", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; dernek faaliyetlerinde aktif." },
      { id: "b20", name: "Mustafa Enes Yıldırım", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi." },
      { id: "b21", name: "Aras Bağ", position: "Yönetim Kurulu Üyesi", type: "yedek", shortBio: "Fenerbahçe kongre üyesi; iş dünyasında aktif." }
    ],
    campaignContacts: [
      { id: "cc1", name: "Yusuf Kenan Çalık" }
    ],
    coachCandidates: [
      { id: "c2", name: "Roberto Mancini", status: "İtalya bağlantıları güçlü, görüşmeler aktif (en kuvvetli adaylardan)" },
      { id: "c3", name: "İsmail Kartal", status: "Yerli öncelikli seçenek / Türkiye'yi bilen profil" }
    ],
    potentialTransfers: [
      {
        id: "t2",
        playerName: "Mason Greenwood",
        position: "Sag Kanat / Forvet",
        status: "Son dönemde kişisel anlaşma iddiaları ve medya haberlerinde öne çıkan potansiyel alternatif; 4 Haziran'da Safi yönetiminden Ömer Topbaş, Özgür Özaktaç ve menajer Cenk Melih Yazıcı İngiltere'de kritik zirve gerçekleştirdi",
        source: "Yağız Sabuncuoğlu + spor medyası",
        sourceUrl: "",
        sourceType: "trusted_media",
        xDiscussion: "X gündeminde son dönemde hızı artan rumor başlıklarından biri",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Greenwood&src=typed_query&f=live"
      },
      {
        id: "t3",
        playerName: "Mike Maignan",
        position: "Kaleci",
        status: "Kaleci transfer planı kapsamında geçen adaylardan (Liverpool bağlantıları aktif)",
        source: "Spor medyası ve kampanya odaklı transfer tartışmaları",
        sourceUrl: "https://www.trtspor.com.tr/haber/futbol/transfer-gundemi",
        sourceType: "trusted_media",
        xDiscussion: "X üzerinde kaleci aday listelerinde konuşuluyor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Maignan&src=typed_query&f=live"
      },
      {
        id: "t9",
        playerName: "Robert Lewandowski",
        position: "Forvet",
        status: "Yeni dönemde ortaya çıkan yüksek profilli dedikodu (Yağız Sabuncuoğlu canlı yayınında son durum sorgulanıyor)",
        source: "X gündemi ve yorumcu hesaplarındaki son tartışmalar",
        sourceType: "x_discussion",
        xDiscussion: "X tarafında son günlerde hızlanan ancak resmi teyidi olmayan rumor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Lewandowski&src=typed_query&f=live"
      },
      {
        id: "t11",
        playerName: "Hakan Çalhanoğlu",
        position: "Merkezi Orta Saha / Ön Libero",
        status: "Temsilcileri (Gordon Stipic) ile İstanbul’da kritik görüşmeler yapıldı (2 Haziran'da temsilci İstanbul'a geldi, 4 Haziran Safi ile görüşme); kişisel şartlarda prensip anlaşması iddiaları var (Merih Demiral ile birlikte '2 milli oyuncu' vaadi kapsamında). Seçim öncesi en güçlü bomba adaylardan",
        source: "Yağız Sabuncuoğlu + Spor medyası (Fotomaç, Fanatik, A Spor, Sporx)",
        sourceUrl: "https://www.fotomac.com.tr/fenerbahce/2026/05/14/fenerbahcede-iki-baskan-adayindan-galatasarayi-kizdiracak-hamle",
        sourceType: "trusted_media",
        xDiscussion: "X gündeminde en çok konuşulan Fenerbahçe transfer rumoru",
        xQueryUrl: "https://x.com/search?q=Çalhanoğlu%20Safi&src=typed_query&f=live"
      },
      {
        id: "t12",
        playerName: "Luis Suarez",
        position: "Forvet",
        status: "Sporting CP forması giyen; 3+1 yıllık kişisel anlaşma sağlandı. Seçimi kazanırsa bonservisi için Sporting CP ile masaya oturulacak (Yağız Sabuncuoğlu). 3 Haziran anlaşma + 4 Haziran menajer Fali Ramadani İstanbul'dan ayrıldı. Safi bizzat açıkladı",
        source: "Yağız Sabuncuoğlu + Safi açıklaması",
        sourceUrl: "",
        sourceType: "trusted_media",
        xDiscussion: "X gündeminde bomba transfer olarak en çok konuşulan gelişme",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Suarez%20Safi&src=typed_query&f=live"
      },
      {
        id: "t13",
        playerName: "Merih Demiral",
        position: "Stoper",
        status: "Fenerbahçe Başkan Adayı Hakan Safi, Merih Demiral ile anlaşmaya vardı. Seçilirse Al-Ahli'ye resmi 18-20M€ bonservis teklifi yapılacak (Al-Ahli'den 'DNA'sı damarlarında' açıklaması geldi)",
        source: "Yağız Sabuncuoğlu (4 Haziran)",
        sourceUrl: "",
        sourceType: "trusted_media",
        xDiscussion: "X'te bugün en çok konuşulan Fenerbahçe bombası",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Demiral%20Safi&src=typed_query&f=live"
      }
    ]
  },
  {
    id: "2",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonlukla anılan efsane isim. 6 Mayıs 2026'da resmen adaylığını açıkladı. Barış Göktürk’ün desteğini aldı, Özgür Peker’yi Safi listesinden kendi listesine kattı. Dernek buluşmaları (Bursa, İzmir, Mardin, Çorlu, Londra, Ankara vb.) yoğun şekilde devam ediyor. Seçim ofisi açıldı. Birlik çağrıları yaptı (Ali Koç ve Hakan Safi’ye). Hakan Çalhanoğlu ile genel görüşme iddiaları var. Son gelişmede Yağız Sabuncuoğlu'na göre Serhou Guirassy ve Borussia Dortmund ile sözlü anlaşma sağlandı. 4 Haziran'da yönetim kurulu üyesi Mahmut Uslu '2 santrforun transferini bitirdik' açıklaması yaptı. 6-7 Haziran seçimleri öncesi Ankara temasları ve kongre çalışmaları sürüyor.",
    vision: "Kanıtlanmış tecrübeyle hızlı şampiyonluk ve Avrupa başarısı. 2026-27 sezonu için 'şampiyonluk mecburiyeti' vurgusu. Disiplinli yönetim, taraftar birliği ve camianın 120. yılında birlik mesajı. 'Yıldız + 10 asker' felsefesiyle tecrübeli futbol komitesi (Oğuz Çetin, Aykut Kocaman, Volkan Demirel, Dirk Kuijt vb. + yeni Avrupa'da aktif bir isim eklendi). En fazla 5-6 transferle kadroyu güçlendirme (2 santrfor + 2 stoper + milli yıldızlar öncelikli).",
    experience: [
      "Fenerbahçe Başkanı (1998-2018)",
      "Çok sayıda lig ve kupa şampiyonluğu",
      "Deneyimli iş insanı"
    ],
    projects: [
      {
        id: "p5",
        title: "Hemen Şampiyonluk",
        description: "Kısa vadede zirve hedefi (2026-27 mecburiyeti). 2 santrfor (Sörloth/Lukaku/Muriqi/Guirassy bağlantıları; Guirassy ile Borussia Dortmund ve oyuncuyla sözlü anlaşma sağlandı); 4 Haziran Mahmut Uslu açıklaması: '2 santrforun transferini bitirdik'. Hakan Çalhanoğlu gibi milli yıldızlar da gündemde. En az 3-5 bomba isim. Toplam 5-6 transfer. Sezon başlangıcında tam kadro sözü. Stoper rotasyonu için özel liste hazırlandı.",
        category: "Spor",
        icon: "trophy",
        priority: "acil"
      },
      {
        id: "p6",
        title: "Taraftar Birliği",
        description: "Camia içi dayanışmayı artırma; dernek buluşmaları ve geniş birlik çağrıları (Ankara temasları dahil)",
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
        description: "Eski Fenerbahçe efsanelerinden (Oğuz Çetin - futbol aklı, Aykut Kocaman vb.) oluşan danışma/transfer/izleme komitesi + yeni Avrupa'da aktif bir isim eklendi",
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
      { year: "2026", title: "Başkan Adaylığı", description: "6 Mayıs'ta açıkladı; Barış Göktürk + Özgür Peker desteği; 22 Mayıs basın toplantısı ve yönetim listesi açıklaması; dernek buluşmaları; Oğuz Çetin, Aykut Kocaman vb. ile komite + yeni Avrupa komite üyesi; 2 santrfor + bomba transfer hedefleri; Hakan Çalhanoğlu genel görüşme iddiaları; stadyum kapasite artışı (64-65k); Ankara/Anıtkabir ziyaretleri; Londra/Europa temasları; birlik çağrıları devam ediyor (6-7 Haziran seçimleri öncesi); Serhou Guirassy ile Borussia Dortmund ve oyuncuyla sözlü anlaşma sağlandı; 4 Haziran Mahmut Uslu: '2 santrforun transferini bitirdik'" }
    ],
    popularity: 54,
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
      { id: "c8", name: "Aykut Kocaman", status: "Öncelikli aday (futbol komitesi içinde)" }
    ],
    potentialTransfers: [
      {
        id: "t5",
        playerName: "Alexander Sorloth",
        position: "Forvet",
        status: "Öncelikli golcü hedefi olarak sıkça anılıyor (2 santrfor planı kapsamında)",
        source: "Kampanya açıklamaları ve spor medyası",
        sourceUrl: "https://www.trtspor.com.tr/haber/futbol/aziz-yildirim-iki-oyuncuyla-anlastik-31470560",
        sourceType: "trusted_media",
        xDiscussion: "X üzerinde en yüksek etkileşim alan forvet başlıklarından biri",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Sorloth&src=typed_query&f=live"
      },
      {
        id: "t6",
        playerName: "Vedat Muriqi",
        position: "Forvet",
        status: "Forvet rotasyonu için öne çıkan isim",
        source: "Aday çevresi iddiaları ve medya değerlendirmeleri",
        sourceUrl: "https://www.trtspor.com.tr/haber/futbol/aziz-yildirim-iki-oyuncuyla-anlastik-31470560",
        sourceType: "trusted_media",
        xDiscussion: "X tarafında ikinci forvet profili olarak sıklıkla konuşuluyor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Muriqi&src=typed_query&f=live"
      },
      {
        id: "t7",
        playerName: "Kim Min-jae",
        position: "Stoper",
        status: "Savunma lideri profili olarak gündeme geliyor",
        source: "Spor medyası transfer iddiaları",
        sourceType: "x_discussion",
        xDiscussion: "X üzerinde nostalji ve sportif uyum gerekçesiyle yoğun tartışılıyor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Kim%20Min-jae&src=typed_query&f=live"
      },
      {
        id: "t8",
        playerName: "Marcus Rashford",
        position: "Sol Kanat / Forvet",
        status: "Yüksek profilli yıldız adayları arasında geçiyor",
        source: "Transfer iddia haberleri ve yorum programları",
        sourceType: "x_discussion",
        xDiscussion: "X'te etkileşimi yüksek ancak maliyet nedeniyle tartışmalı başlıklardan",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Rashford&src=typed_query&f=live"
      },
      {
        id: "t10",
        playerName: "Nathan Ake",
        position: "Stoper / Sol Bek",
        status: "Savunma rotasyonunu güçlendirecek çok yönlü profil olarak anılıyor",
        source: "Transfer iddia haberleri ve yorumcu değerlendirmeleri",
        sourceType: "x_discussion",
        xDiscussion: "X'te stoper ve sol bek esnekliği nedeniyle özellikle savunma kurgusunda konuşuluyor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Nathan%20Ake&src=typed_query&f=live"
      },
      {
        id: "t12",
        playerName: "Serhou Guirassy",
        position: "Forvet",
        status: "Borussia Dortmund forması giyen; oyuncu ve kulüple sözlü anlaşma sağlandı. Seçimi kazanırsa resmiyete dökülecek (Yağız Sabuncuoğlu). 4 Haziran itibarıyla yeni gelişme yok",
        source: "Yağız Sabuncuoğlu açıklaması",
        sourceUrl: "",
        sourceType: "trusted_media",
        xDiscussion: "X üzerinde forvet bombası olarak konuşuluyor",
        xQueryUrl: "https://x.com/search?q=Fenerbahce%20Guirassy%20Yıldırım&src=typed_query&f=live"
      }
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
