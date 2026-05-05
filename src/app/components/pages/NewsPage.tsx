import { Calendar, User, Tag } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Başkanlık Tartışmaları Rekor Katılım Çekti",
    excerpt: "15.000'den fazla Fenerbahçe üyesi ilk başkanlık tartışmasına Şükrü Saraçoğlu Stadyumu'nda katıldı, bu da kulüp seçim tarihinde en büyük toplanma oldu.",
    date: "3 Mayıs 2026",
    author: "Spor Editörü",
    category: "Etkinlikler",
    image: "https://images.unsplash.com/photo-1540747913346-19e32834a8f3?w=800&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Adaylar Gençlik Gelişimi için Vizyonlarını Sundu",
    excerpt: "Üç aday da gençlik akademisi yatırımının önemini vurgulayarak önemli bütçe artışları ve tesis yükseltmeleri önerdi.",
    date: "1 Mayıs 2026",
    author: "Ahmet Yılmaz",
    category: "Analiz",
    image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Taraftar Duygu Anketi: Yakın Yarış Bekleniyor",
    excerpt: "Son anketler, üyeler her adayın önerilerini dikkatle değerlendirirken net bir öncü olmadan rekabetçi üçlü bir yarışı göstermektedir.",
    date: "28 Nisan 2026",
    author: "Araştırma Takımı",
    category: "Anketler",
    image: "https://images.unsplash.com/photo-1547941126-3d5322b218b0?w=800&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Altyapı Planları: Stadyum Önerilerinin Karşılaştırması",
    excerpt: "Her adayın stadyum ve tesis geliştirme planlarının maliyetleri, zaman çizelgeleri ve finansman stratejileri dahil olmak üzere detaylı bir dökümü.",
    date: "25 Nisan 2026",
    author: "Teknik Analiz",
    category: "Projeler",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Mali Uzmanlar Kulübün Geleceği Hakkında Görüş Bildirdi",
    excerpt: "Bağımsız mali analistler, mali sürdürülebilirlik ve rekabetçi harcama başarısı için aday önerilerini gözden geçirdi.",
    date: "22 Nisan 2026",
    author: "Finans Masası",
    category: "Analiz",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Seçim Takvimi: Önemli Tarihler Açıklandı",
    excerpt: "Kalan tartışmalar, sunumlar ve 15 Haziran'daki son seçim günü için resmi takvim yayınlandı.",
    date: "20 Nisan 2026",
    author: "Kulüp Yönetimi",
    category: "Haberler",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=400&fit=crop",
  },
];

export function NewsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-[#001C54]">Seçim Haberleri & Güncellemeler</h1>
        <p className="text-gray-600">
          Başkanlık yarışından en son haber ve gelişmelerle bilgilenin
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {newsArticles.map((article, index) => (
            <article
              key={article.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`grid ${index === 0 ? "md:grid-cols-2" : "grid-cols-1"} gap-6`}>
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className={`w-full object-cover hover:scale-110 transition-transform duration-300 ${
                      index === 0 ? "h-full min-h-[300px]" : "h-48"
                    }`}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-[#FFED00] text-[#001C54] text-xs rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className={`text-[#001C54] mb-3 ${index === 0 ? "" : ""}`}>
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="space-y-8">
          <div className="bg-gradient-to-br from-[#001C54] to-[#003F7F] rounded-xl p-6 text-white shadow-lg sticky top-24">
            <h3 className="mb-6 text-white">Yaklaşan Etkinlikler</h3>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-[#FFED00] text-sm mb-1">1 Haziran 2026</div>
                <div>Son Aday Sunumları</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-[#FFED00] text-sm mb-1">8 Haziran 2026</div>
                <div>Kapanış Tartışması</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-[#FFED00] text-sm mb-1">15 Haziran 2026</div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-[#FFED00] rounded-full animate-pulse"></span>
                  <span>Seçim Günü</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-5 h-5 text-[#001C54]" />
              <h4 className="text-[#001C54]">Popüler Konular</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Stadyum", "Gençlik Akademisi", "Finansman", "Şampiyonlar Ligi", "Sürdürülebilirlik"].map(
                (topic) => (
                  <button
                    key={topic}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-[#FFED00] hover:text-[#001C54] transition-colors"
                  >
                    {topic}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFED00] to-[#FFC600] rounded-xl p-6 shadow-lg">
            <h4 className="text-[#001C54] mb-4">Güncel Kalın</h4>
            <p className="text-[#001C54] text-sm mb-4">
              Size teslim edilmek üzere en son seçim haberlerini ve güncellemelerini alın
            </p>
            <button className="w-full bg-[#001C54] text-white py-3 rounded-lg hover:bg-[#003F7F] transition-colors">
              Güncellemelere Abone Ol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
