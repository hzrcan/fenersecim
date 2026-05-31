export interface InterviewSummary {
  videoId: string;
  candidate: string;
  quickSummary: string;
  keyPoints: string[];
  commitments: string[];
  unclearPoints: string[];
  sourceUrl: string;
  sourceLabel: string;
  updatedAt: string;
  status: "taslak" | "gozden-gecirildi";
}

export const interviewSummaries: InterviewSummary[] = [
  {
    videoId: "5KhqO9Cael4",
    candidate: "Aziz Yıldırım",
    quickSummary:
      "Aziz Yıldırım röportajda adaylık gerekçesini liderlik eksikliği, sportif başarısızlık döngüsü ve camiada birlik ihtiyacı üzerinden açıkladı. Teknik ekipte güçlü bir model, bankalar birliği borcunu azaltma/kapatma hedefi ve stadyum kapasite artışı gibi başlıklara odaklandı; ayrıca seçilmesi halinde şampiyonluk sözü verdi.",
    keyPoints: [
      "Adaylık gerekçesini Trabzon maçı sonrası süreç, 2 Nisan/Urfa ve kulübün psikolojik kırılması üzerinden anlattı.",
      "Kulüpte temel sorunu liderlik ve karar alma gücü olarak tanımladı; birlik ve sakin bir seçim dili vurgusu yaptı.",
      "Mourinho ile görüştüğünü, teknik kadro kararlarında hocanın alanına müdahale etmeyecek bir model düşündüğünü söyledi.",
      "Mevcut kadroyu tamamen yetersiz görmediğini, ancak nokta transferlerle kalite artışı gerektiğini belirtti.",
      "Mali tabloda bankalar birliği borcunun faiz yükünü ana risk olarak çerçeveledi ve hızlı finansal yeniden denge vaadini öne çıkardı.",
      "Stadyum için 60.000-65.000 kapasite, iki kale arkası dönüşümü ve yaklaşık 3 yıllık tamamlanma perspektifi paylaştı.",
    ],
    commitments: [
      "Seçilmesi halinde şampiyonluk hedefini açık bir söz olarak ifade etti.",
      "Bankalar birliği kaynaklı borç/faiz baskısını azaltma ve borcu kapatma yönünde öncelikli adım atacağını söyledi.",
      "Stadyum kapasitesini artırma (60.000-65.000 bandı) ve projeyi etaplı şekilde tamamlama sözü verdi.",
      "Teknik direktörün taleplerine göre transferde esnek davranacaklarını, gerekirse kişisel kaynak desteği sağlayabileceğini belirtti.",
    ],
    unclearPoints: [
      "Şampiyonluk hedefinin operasyonel yol haritası (mevki planı, bütçe limiti, zamanlama) tam detaylandırılmadı.",
      "Bankalar birliği borcunun hangi araçlarla ve hangi takvimde kapatılacağı net finansal plan olarak açıklanmadı.",
      "Stadyum projesinde kesin başlangıç tarihi, izin süreçleri ve sözleşme modeli net takvimle paylaşılmadı.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=5KhqO9Cael4",
    sourceLabel: "TRT SPOR Röportaj Kaydı",
    updatedAt: "2026-05-25T19:00:00+03:00",
    status: "gozden-gecirildi",
  },
  {
    videoId: "THoM8jXbbcg",
    candidate: "Aziz Yıldırım",
    quickSummary:
      "Aziz Yıldırım bu uzun röportajda adaylık gerekçesini 12 yıllık sportif düşüş, camiada birlik ihtiyacı ve kulübün yeniden güçlü kimliğine dönmesi hedefiyle açıkladı. Transfer planında önceliği santrfora verdiğini, Şampiyonlar Ligi ön elemesi takvimini merkeze alan kadro mühendisliği yapacaklarını ve UEFA limitlerine uyumlu finansman modeliyle ilerleyeceklerini söyledi.",
    keyPoints: [
      "Geçen yıl aday olmama kararını gençleşme ve çok adaylı demokratik süreç beklentisiyle açıkladı; bu yıl adaylığını kulüpte başarısızlığın normalleşmesine bağladı.",
      "Teknik ve sportif modelde futbol aklı, yönetim kurulu ve futbol yapılanmasının birlikte çalışacağı bir yapı hedeflediğini belirtti.",
      "Kadro planında ilk önceliğin santrfor olduğunu, devamında stoper/sol bek gibi bölgelere ihtiyaca göre takviye yapılacağını söyledi.",
      "Milli takım takvimi nedeniyle ön eleme döneminde oluşabilecek eksiklere karşı geniş ve hazır kadro ihtiyacını vurguladı.",
      "UEFA mali limitleri ve lisans kriterlerinin belirleyici olduğunu, yüksek harcamanın tek başına çözüm olmadığını ifade etti.",
      "Birlik mesajını öne çıkararak tribün-atmosfer etkisinin sportif sonuçlarda kritik rol oynadığını tekrar vurguladı.",
    ],
    commitments: [
      "Bu adaylığının son adaylığı olduğunu ve bir yıllık güçlü sonuç odaklı dönem hedeflediğini belirtti.",
      "Öncelikli transfer olarak iki santrfor planladıklarını, pazarlık süreciyle kulüp menfaatini koruyacaklarını söyledi.",
      "UEFA kriterlerine uygun şekilde kurumsal yapı içinde transfer ve finansman yönetimi sözü verdi.",
      "Stadyum kapasite artışı projesini seçim sonrası izin süreçleriyle hızla başlatma hedefini paylaştı.",
      "Seçimden sonra mevcut kadroyla tek tek görüşüp kalacak-gidecek planını netleştireceklerini ifade etti.",
    ],
    unclearPoints: [
      "Açıklanan transfer önceliklerinin hangi isim/profil ve kesin bütçe aralığıyla tamamlanacağı netleşmedi.",
      "UEFA limiti kapsamında kullanılabilir kaynakların sezon bazlı detay dağılımı somut tabloyla paylaşılmadı.",
      "Teknik direktör kararının takvimi ve nihai aday listesi röportajda kesinleştirilmedi.",
      "Bahsedilen uzun vadeli büyük gelir projesinin kapsamı ve resmi zaman planı açıklanmadı.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=THoM8jXbbcg",
    sourceLabel: "Sports Digitale YouTube Röportaj Kaydı",
    updatedAt: "2026-05-26T10:30:00+03:00",
    status: "gozden-gecirildi",
  },
  {
    videoId: "1z6BC5yMV4s",
    candidate: "Aziz Yıldırım",
    quickSummary:
      "Aziz Yıldırım Sözcü TV özel yayınında adaylık kararını camiada birlik ihtiyacı ve uzun süren sportif başarısızlık gerekçesiyle açıkladı. Kısa vadede şampiyonluk hedefi, 4-6 oyunculuk transfer planı, teknik direktör kararının kapsamlı değerlendirmeyle verilmesi ve stat kapasite artışıyla gelir büyütme ekseninde bir yol haritası paylaştı.",
    keyPoints: [
      "4 Nisan otobüs saldırısı dosyasının yeniden incelenmesini önemli bulduğunu ve sürecin aydınlatılmasının camia için kritik olduğunu söyledi.",
      "Adaylık gerekçesini 12 yıllık şampiyonluk hasreti, kulüp içi dağınıklık ve birlik ihtiyacı üzerinden anlattı.",
      "Transfer planında santrfor önceliğini vurgulayarak toplamda 4-6 takviye ihtiyacından söz etti.",
      "Teknik direktör için birden fazla adayla temas olduğunu, nihai kararın yönetimle birlikte verileceğini belirtti.",
      "Stadyumun 64-65 bin kapasite bandına çıkarılmasını ve loca/gelir artışı hedefini paylaştı.",
      "Kısa vadeli sportif hedefin net şekilde şampiyonluk olduğunu, uzun vadede kurumsal gelir projeleri üzerinde çalıştıklarını ifade etti.",
    ],
    commitments: [
      "Seçilmesi halinde ilk sezon için ana hedefin şampiyonluk olacağını söyledi.",
      "Santrfor başta olmak üzere ihtiyaç duyulan bölgelere hızlı transfer hamlesi yapacaklarını belirtti.",
      "Teknik direktör ve kadro kararlarını yönetimle birlikte takvim içinde netleştireceklerini ifade etti.",
      "Stat kapasite artışı ve ek gelir projelerini seçim sonrası hızla başlatmayı hedeflediğini açıkladı.",
    ],
    unclearPoints: [
      "Bahsedilen transfer planının nihai oyuncu listesi ve kesin bütçe dağılımı netleşmedi.",
      "Teknik direktör tercihinde kesin isim ve resmi imza takvimi açıklanmadı.",
      "Stat projesinin izin, ihale ve uygulama adımlarına ilişkin detaylı zaman planı paylaşılmadı.",
      "Sözü edilen büyük gelir projelerinin operasyonel modeli ve resmi yol haritası somutlaştırılmadı.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=1z6BC5yMV4s",
    sourceLabel: "Sözcü TV YouTube Özel Yayını",
    updatedAt: "2026-05-31T20:00:00+03:00",
    status: "gozden-gecirildi",
  },
  {
    videoId: "PQaDBiMete8",
    candidate: "Hakan Safi",
    quickSummary:
      "Hakan Safi röportajda adaylığını, mevcut yönetimde edindiği gözlem sonrası 'icracı model' ile hızlı karar alma ihtiyacı üzerinden gerekçelendirdi. Ana ekseni; kısa vadede sportif başarı, stadyum kapasite artışıyla gelir büyütme, finansman desteğiyle yıldız transfer ve kulübün 2050 vizyonuna hazırlanması olarak çizdi.",
    keyPoints: [
      "Adaylık kararını 'beklemeden sorumluluk alma' ve kulübün zaman kaybı yaşamaması gerektiği teziyle açıkladı.",
      "Futbol modelinde sportif direktör yerine doğrudan yönetim kurulu + başkan sorumluluğunda daha hızlı karar alma yaklaşımı anlattı.",
      "Kadro planında özellikle santrfor, sol stoper ve kaleci bölgelerine öncelik verdiğini belirtti.",
      "Türkiye ligini bilen teknik direktör profilini vurguladı; teknik adam ve transfer başlıklarını seçim öncesi netleştireceğini söyledi.",
      "Stadyum kapasitesini kendi yerinde 64-65 bin bandına çıkarma ve yaklaşık 1.5 yıl içinde tamamlama hedefi paylaştı.",
      "Gelir tarafında stat, Şampiyonlar Ligi katılımı ve ticari modelle kulüp gelirini orta vadede artırma hedefini dile getirdi.",
    ],
    commitments: [
      "İlk hedefinin şampiyonluk olduğunu ve seçim sonrası sportif kadroyu buna göre kuracağını söyledi.",
      "Seçim sürecinde teknik direktör ve belirli transfer planlarını kongre üyeleriyle paylaşma sözü verdi.",
      "Stadı mevcut lokasyonda büyütme ve kulübün yıllık gelirini kademeli artırma hedefini taahhüt etti.",
      "Amatör branş bütçelerini küçültmek yerine koruyup uzun vadede büyütme yaklaşımını açıkladı.",
    ],
    unclearPoints: [
      "Açıklanacağı belirtilen teknik direktör ve transfer isimlerinin nihai listesi henüz netleşmedi.",
      "Stadyum projesinde finansman dağılımı, ruhsat/izin adımları ve resmi takvim detayları paylaşılmadı.",
      "Gelirin 500 milyon euro ve 1 milyar euro hedeflerine çıkışı için yıllara yayılmış somut yol haritası henüz açıklanmadı.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=PQaDBiMete8",
    sourceLabel: "TRT SPOR Röportaj Kaydı",
    updatedAt: "2026-05-25T21:00:00+03:00",
    status: "gozden-gecirildi",
  },
  {
    videoId: "dDQ2ip1X8nY",
    candidate: "Hakan Safi",
    quickSummary:
      "Hakan Safi bu A Spor Gündem Özel yayınında adaylığını hız, enerji, cesaret ve kulübe doğrudan maddi-manevi katkı sunma iddiasıyla savundu. Transferlerde önceliği omurgayı kuracak santrfor, sol stoper ve kaleci bölgelerine verdi; Türkiye ligini bilen hoca, stadyum kapasite artışı, pilot takımlar, Fener GO/Fenerium ve sürdürülebilir gelir modeli üzerinden 2050 vizyonu çizdi.",
    keyPoints: [
      "Adaylık kararını beklemeden aldığını, kulüpte zaman kaybı ve kararsızlık istemediğini söyledi.",
      "Kutuplaşma, kibir ve iç kavganın Fenerbahçe'yi yorduğunu; birlik, saygı ve göz teması üzerine kurulu bir kültür istediğini anlattı.",
      "Transferde ilk hedefin omurgayı kurmak olduğunu, forvet, sol stoper ve kaleci için aynı anda çalışma yürüttüklerini belirtti.",
      "Teknik direktörde Türkiye ligini bilen profili tercih edeceğini, rakamlar ve istatistiklerle karar verdiğini vurguladı.",
      "Stadı mevcut yerde 64.500 bandına çıkaracak bir kapasite artışı ve bunun gelir tarafını büyütecek bir model anlattı.",
      "Pilot takımlar, Fener GO, Fenerium, altyapı ve eğitim projeleriyle kulübün sürdürülebilir gelir üretmesi gerektiğini söyledi.",
    ],
    commitments: [
      "Seçilirse ilk hedefinin şampiyonluk olacağını ve kadroyu buna göre kuracağını söyledi.",
      "Dünya yıldızlarını ve seçim öncesi netleşecek transferleri kongre üyeleriyle paylaşma sözü verdi.",
      "Stadyum kapasite artışını, izin ve mühendislik süreçleriyle birlikte hayata geçirme hedefini açıkladı.",
      "Amatör branşları küçültmek yerine koruyup büyütme ve yeni gelir kanalları oluşturma yaklaşımını benimsediğini belirtti.",
    ],
    unclearPoints: [
      "Söz verilen transfer isimleri ve teknik direktör tercihi nihai olarak açıklanmadı.",
      "Stadyum büyütme projesinin resmi finansman, izin ve uygulama takvimi netleştirilmedi.",
      "Fener GO, Fenerium ve pilot takım modelinin hukuki/operasyonel yapısı ayrıntılandırılmadı.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=dDQ2ip1X8nY",
    sourceLabel: "A Spor Gündem Özel Röportajı",
    updatedAt: "2026-05-26T12:00:00+03:00",
    status: "gozden-gecirildi",
  },
  {
    videoId: "zIuK7TACKqY",
    candidate: "Hakan Safi",
    quickSummary:
      "Hakan Safi bu videoda kampanya günü akışını paylaşırken Fenerbahçe'nin şampiyonluk planını omurga transferleri, Türkiye ligini bilen teknik direktör profili, güçlü lobi ve yakın takip modeli üzerinden anlattı. Sportif direktör yerine başkan-yönetim-teknik ekip eksenli bir yönetim yapısı savunduğunu ve seçim öncesi etkili transfer adımları hedeflediğini belirtti.",
    keyPoints: [
      "Kampanya sürecinde saha içi hedefi net biçimde şampiyonluk olarak tanımladı ve bunu çoklu başlıkların aynı anda çalışmasıyla ilişkilendirdi.",
      "Transfer önceliklerinde sol stoper, sağ kanat ve forvet bölgelerini öne çıkardı; kaleci için de şartlara bağlı ek hamle ihtimalinden bahsetti.",
      "Sportif direktör modeli yerine teknik direktör + yönetim kurulu + başkan zinciriyle doğrudan karar alma yaklaşımını savundu.",
      "Türkiye ligini bilen teknik direktör tercihinin kritik olduğunu ve kadro mühendisliğinin buna göre kurulacağını söyledi.",
      "Uluslararası bağlantılar ve futbol çevresiyle ilişkileri üzerinden transfer süreçlerinde hız/avantaj sağlayabileceklerini ifade etti.",
      "Maldini ile ilişkinin resmi görevden ziyade istişari ve uluslararası futbol ağı desteği niteliğinde olduğunu belirtti.",
    ],
    commitments: [
      "Seçilmesi halinde kısa sürede etkili bir kadro yapılanmasıyla şampiyonluk yarışında güçlü bir takım kurma sözü verdi.",
      "Belirttiği kritik mevkiler için transfer hamleleri yapacaklarını ve seçim öncesi bazı adımları duyurmayı hedeflediklerini söyledi.",
      "Fenerbahçe'nin kurumsal temsil/lobi gücünü farklı kurullarda artıracak bir yapılanma hedeflediğini ifade etti.",
      "Başkan olarak futbol operasyonunu doğrudan takip edeceğini ve karar mekanizmasında aktif rol alacağını vurguladı.",
    ],
    unclearPoints: [
      "Bahsedilen transferlerin nihai isimleri, maliyet dağılımı ve resmi imza takvimi netleştirilmedi.",
      "Teknik direktör için çizilen profilin hangi adayla somutlaşacağı açıklanmadı.",
      "Sportif direktörsüz modelin görev paylaşımı ve operasyonel sınırları detaylı organizasyon şemasıyla sunulmadı.",
      "Seçim öncesi açıklanacağı belirtilen transfer adımlarının kapsamı ve kesin zamanlaması netleşmedi.",
    ],
    sourceUrl: "https://www.youtube.com/watch?v=zIuK7TACKqY",
    sourceLabel: "YouTube Kampanya Günü Röportajı",
    updatedAt: "2026-05-31T20:30:00+03:00",
    status: "gozden-gecirildi",
  },
];
