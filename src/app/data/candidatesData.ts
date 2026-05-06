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
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  priority: "high" | "medium" | "low";
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

// export const candidates: Candidate[] = [
//   {
//     id: "1",
//     name: "Ali Koç",
//     slogan: "Güçlü Fenerbahçe, Güçlü Gelecek",
//     photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//     biography: "Deneyimli iş insanı ve Fenerbahçe Spor Kulübü'nün mevcut başkanı. Kulübü önemli altyapı geliştirmeleri ve finansal yeniden yapılandırma yoluyla yönetmiştir.",
//     vision: "Fenerbahçe'yi son teknoloji tesisler ve dünya standartlarında bir gençlik akademisi ile kendi kendine sürdürülebilir bir Avrupa güç merkezi haline dönüştürmek.",
//     experience: [
//       "Koç Holding Yönetim Kurulu Üyesi",
//       "Eski Fenerbahçe Başkanı (2018-mevcut)",
//       "İşletme Yönetimi, Rice Üniversitesi"
//     ],
//     projects: [
//       {
//         id: "p1",
//         title: "Yeni Stadyum Geliştirmesi",
//         description: "Son teknoloji ile donatılmış modern 60.000 kişilik stadyum",
//         category: "Altyapı",
//         icon: "building",
//         priority: "high"
//       },
//       {
//         id: "p2",
//         title: "Gençlik Akademisi Genişlemesi",
//         description: "Gençlik geliştirimi için dünya sınıfı antrenman tesisleri",
//         category: "Gençlik Gelişimi",
//         icon: "users",
//         priority: "high"
//       },
//       {
//         id: "p3",
//         title: "Mali Sürdürülebilirlik",
//         description: "Sıfır borç politikası ve gelir çeşitlendirmesi",
//         category: "Finansal",
//         icon: "trending-up",
//         priority: "high"
//       },
//       {
//         id: "p4",
//         title: "Dijital Dönüşüm",
//         description: "Teknoloji aracılığıyla geliştirilmiş taraftar deneyimi",
//         category: "Teknoloji",
//         icon: "smartphone",
//         priority: "medium"
//       }
//     ],
//     pastInvolvement: [
//       { year: "2018", title: "Başkan Seçildi", description: "Oyların %65'i ile başkanlığı kazandı" },
//       { year: "2020", title: "Stadyum Projesi Başlatıldı", description: "Yeni stadyum planları duyuruldu" },
//       { year: "2023", title: "Gençlik Akademisi Yenilendi", description: "Gençlik antrenman tesisleri modernize edildi" }
//     ],
//     popularity: 85
//   },
//   {
//     id: "2",
//     name: "Aziz Yıldırım",
//     slogan: "Tecrübe ve Kararlılık",
//     photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
//     biography: "Fenerbahçe tarihinde en uzun süre görev yapmış başkan, 20 yıllık deneyim sahibi. Tutkulu liderlik ve şampiyonluk başarılarıyla bilinir.",
//     vision: "Kanıtlanmış yöntemler ve deneyimli liderlik aracılığıyla şampiyonluk görkeminin geri dönüşü. Gelecek için inşa ederken hemen başarıya odaklanma.",
//     experience: [
//       "Fenerbahçe Başkanı (1998-2018)",
//       "17 Şampiyonluk Unvanı",
//       "İş İnsanı ve Girişimci"
//     ],
//     projects: [
//       {
//         id: "p5",
//         title: "Önce Şampiyonluk Stratejisi",
//         description: "Süper Lig şampiyonluğunu kazanmaya hemen odaklanma",
//         category: "Spor",
//         icon: "trophy",
//         priority: "high"
//       },
//       {
//         id: "p6",
//         title: "Avrupa Başarı Planı",
//         description: "Şampiyonlar Ligi'ne devamlı olarak katılma",
//         category: "Spor",
//         icon: "globe",
//         priority: "high"
//       },
//       {
//         id: "p7",
//         title: "Taraftar Katılım Programı",
//         description: "Kulüp ve taraftarlar arasındaki bağı güçlendirme",
//         category: "Topluluk",
//         icon: "heart",
//         priority: "medium"
//       },
//       {
//         id: "p8",
//         title: "Stadyum Renovasyonu",
//         description: "Şükrü Saraçoğlu Stadyumu'nu yükseltme",
//         category: "Altyapı",
//         icon: "building",
//         priority: "medium"
//       }
//     ],
//     pastInvolvement: [
//       { year: "1998", title: "İlk Seçim", description: "İlk defa başkan oldu" },
//       { year: "2004", title: "Şampiyonluk Dönemi Başladı", description: "Ard arda 6 şampiyonluktan ilkini kazandı" },
//       { year: "2018", title: "Dönemi Sonu", description: "20 yıllık başkanlığı tamamladı" }
//     ],
//     popularity: 78
//   },
//   {
//     id: "3",
//     name: "Mehmet Sepil",
//     slogan: "Yenilikçi Fenerbahçe",
//     photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
//     biography: "Uluslararası iş deneyimine sahip yenilikçi girişimci. Kulüp liderliğine taze perspektif ve modern yönetim yaklaşımı getiriyor.",
//     vision: "Veri odaklı kararlar, sürdürülebilir finansman ve küresel marka genişlemesi ile kulüp operasyonlarını modernize etme.",
//     experience: [
//       "Uluslararası İşletme Yöneticisi",
//       "Spor Pazarlaması Uzmanı",
//       "Eski Gençlik Takımı Taraftarı"
//     ],
//     projects: [
//       {
//         id: "p9",
//         title: "Veri Analitikleri Merkezi",
//         description: "Oyuncu transferi ve performans için ileri istatistikler",
//         category: "Teknoloji",
//         icon: "bar-chart",
//         priority: "high"
//       },
//       {
//         id: "p10",
//         title: "Küresel Marka Genişlemesi",
//         description: "Fenerbahçe markasını uluslararası alanda genişletme",
//         category: "Ticari",
//         icon: "globe",
//         priority: "high"
//       },
//       {
//         id: "p11",
//         title: "Kadın Futboluna Yatırım",
//         description: "Kadın takımı için eşit kaynaklar",
//         category: "Spor",
//         icon: "users",
//         priority: "medium"
//       },
//       {
//         id: "p12",
//         title: "Esports Bölümü",
//         description: "Rekabetçi esports pazarına giriş",
//         category: "Teknoloji",
//         icon: "gamepad-2",
//         priority: "low"
//       }
//     ],
//     pastInvolvement: [
//       { year: "2021", title: "Danışma Kurulu", description: "Kulüp danışma kuruluna katıldı" },
//       { year: "2024", title: "İnovasyon Komitesi", description: "Dijital dönüşüm komitesine liderlik etti" },
//       { year: "2025", title: "Başkanlık Adaylığı", description: "Başkanlığa adaylığını ilan etti" }
//     ],
//     popularity: 65
//   }
// ];

export const candidates: Candidate[] = [
  {
    id: "2",
    name: "Hakan Safi",
    slogan: "Deneyim ve Yenilik",
    photo: "/assets/hakansafi.jpg",
    biography: "Safi Holding Yönetim Kurulu Başkanı. Liman işletmeciliği, gayrimenkul ve lojistik sektörlerinde faaliyet gösteren iş insanı. Ali Koç döneminde Fenerbahçe Yönetim Kurulu Üyesi olarak görev yaptı.",
    vision: "Uzun vadeli planlarla (1+3 yıl) kulübü sportif ve mali açıdan güçlendirmek. Deneyimli kadrolarla hızlı başarı hedeflemek.",
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
        description: "Güçlü yabancı hoca ve kaliteli kadro oluşturma",
        category: "Spor",
        icon: "trophy",
        priority: "high"
      },
      {
        id: "p6",
        title: "Mali Yapı Güçlendirme",
        description: "Holding tecrübesiyle finansal disiplin",
        category: "Finansal",
        icon: "trending-up",
        priority: "high"
      },
      {
        id: "p7",
        title: "Taraftar ve Birlik",
        description: "Camia bütünlüğünü sağlama",
        category: "Topluluk",
        icon: "heart",
        priority: "medium"
      },
      {
        id: "p8",
        title: "Altyapı Yatırımları",
        description: "Sürdürülebilir gençlik gelişimi",
        category: "Altyapı",
        icon: "users",
        priority: "medium"
      }
    ],
    pastInvolvement: [
      { year: "Ali Koç Dönemi", title: "YK Üyesi", description: "Yönetimde aktif rol aldı (Kerem Aktürkoğlu transferi vb.)" },
      { year: "2026", title: "Başkan Adaylığı", description: "Resmi adaylığını açıkladı" }
    ],
    popularity: 68
  },
  {
    id: "3",
    name: "Aziz Yıldırım",
    slogan: "Tecrübe ve Zafer",
    photo: "/assets/azizyildirim.jpg",
    biography: "Fenerbahçe'nin en uzun süre görev yapan eski başkanı (1998-2018). Birçok şampiyonluk ve başarıyla anılan efsane isim. Henüz resmen adaylığını açıklamadı ancak kulislerde ve taraftar baskısıyla güçlü bir aday.",
    vision: "Kanıtlanmış tecrübeyle hızlı şampiyonluk ve Avrupa başarısı. Disiplinli yönetim ve taraftar birliği.",
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
        priority: "high"
      },
      {
        id: "p10",
        title: "Avrupa'da Kalıcılık",
        description: "Şampiyonlar Ligi'nde düzenli başarı",
        category: "Spor",
        icon: "globe",
        priority: "high"
      },
      {
        id: "p11",
        title: "Taraftar Birliği",
        description: "Camia içi dayanışmayı artırma",
        category: "Topluluk",
        icon: "heart",
        priority: "high"
      }
    ],
    pastInvolvement: [
      { year: "1998-2018", title: "Başkanlık Dönemi", description: "20 yıl boyunca kulübe liderlik etti" },
      { year: "2026", title: "Potansiyel Adaylık", description: "Kararını yakında açıklayabilir" }
    ],
    popularity: 82
  }
];

export const allProjects = candidates.flatMap(c =>
  c.projects.map(p => ({ ...p, candidateId: c.id, candidateName: c.name }))
);
