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
];
