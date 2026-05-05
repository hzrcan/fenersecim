import { Link } from "react-router";
import { Users, Calendar, TrendingUp, Award } from "lucide-react";
import { candidates } from "../../data/candidatesData";

export function HomePage() {
  const totalCandidates = candidates.length;
  const totalProjects = candidates.reduce((sum, c) => sum + c.projects.length, 0);
  const featuredCandidate = candidates[Math.floor(Math.random() * candidates.length)];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="mb-4 bg-gradient-to-r from-[#001C54] via-[#0052A3] to-[#001C54] bg-clip-text text-transparent">
          Fenerbahçe Başkanlık Seçimleri 2026
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Adayları takip edin, vizyonları karşılaştırın ve kulübümüzün gelecek liderliği hakkında bilgi sahibi olun.
        </p>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm mt-2">
          Bu platform, Fenerbahçe seçimlerinde şeffaflığı ve demokratik katılımı desteklemek amacıyla oluşturulmuştur ve sürekli olarak güncellenecektir.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#001C54] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Users className="w-10 h-10 text-[#001C54]" />
            <div className="bg-[#FFED00] rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-[#001C54]">{totalCandidates}</span>
            </div>
          </div>
          <h3 className="text-gray-600 mb-1">Aktif Adaylar</h3>
          <Link to="/adaylar" className="text-sm text-[#0052A3] hover:underline">
            Hepsini Gör →
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#FFED00] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="w-10 h-10 text-[#001C54]" />
            <div className="bg-[#001C54] rounded-full w-12 h-12 flex items-center justify-center">
              <span className="font-bold text-white">{totalProjects}</span>
            </div>
          </div>
          <h3 className="text-gray-600 mb-1">Önerilen Projeler</h3>
          <Link to="/projeler" className="text-sm text-[#0052A3] hover:underline">
            Keşfet →
          </Link>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#0052A3] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="w-10 h-10 text-[#001C54]" />
            <div className="bg-gradient-to-br from-[#001C54] to-[#0052A3] rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-xs text-white">Haz</span>
            </div>
          </div>
          <h3 className="text-gray-600 mb-1">Seçim Tarihi</h3>
          <p className="text-sm text-gray-500">6-7 Haziran 2026</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-[#001C54] hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-10 h-10 text-[#FFED00]" />
            <div className="bg-gradient-to-br from-[#FFED00] to-[#FFC600] rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-2xl">🏆</span>
            </div>
          </div>
          <h3 className="text-gray-600 mb-1">Misyonumuz</h3>
          <p className="text-sm text-gray-500">Daha güçlü bir gelecek inşa edin</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#001C54] via-[#003F7F] to-[#001C54] rounded-2xl shadow-2xl overflow-hidden mb-16">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="flex flex-col justify-center text-white">
            <div className="inline-block px-4 py-1 bg-[#FFED00] text-[#001C54] rounded-full text-sm mb-4 w-fit">
              Öne Çıkan Aday
            </div>
            <h2 className="mb-4 text-white">{featuredCandidate.name}</h2>
            <p className="text-[#FFED00] mb-6 italic">"{featuredCandidate.slogan}"</p>
            <p className="text-gray-200 mb-6 line-clamp-3">{featuredCandidate.biography}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {featuredCandidate.projects.slice(0, 3).map(project => (
                <div key={project.id} className="px-3 py-1 bg-white/10 rounded-full text-sm backdrop-blur-sm">
                  {project.category}
                </div>
              ))}
            </div>
            <Link
              to={`/adaylar/${featuredCandidate.id}`}
              className="bg-[#FFED00] text-[#001C54] px-6 py-3 rounded-lg hover:bg-[#FFC600] transition-colors w-fit"
            >
              Tam Profili Görüntüle →
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFED00] rounded-full blur-2xl opacity-20"></div>
              <img
                src={featuredCandidate.photo}
                alt={featuredCandidate.name}
                className="relative w-64 h-64 rounded-full object-cover border-4 border-[#FFED00] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="mb-6 text-[#001C54]">Seçim Takvimi</h3>
          
          <div className="mb-6 p-4 bg-gradient-to-br from-[#001C54] to-[#0052A3] rounded-lg text-white">
            <p className="text-sm opacity-90 mb-1">Seçime Kalan Gün</p>
            <p className="text-4xl font-bold">{Math.max(0, Math.ceil((new Date(2026, 5, 7).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)))}</p>
          </div>

          <div className="space-y-4">
            {[
              { date: "28 Nisan", event: "Seçim Kararı Alındı - Başkanımız Sadettin Saran tarafından", status: "completed" },
              { date: "6 Haziran", event: "Konuşmalar - Olağanüstü Seçimli Genel Kurul", status: "upcoming" },
              { date: "7 Haziran", event: "Seçim Günü - Oy Atılıyor ve Sonuç Belli Oluyor", status: "upcoming" },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-3 h-3 rounded-full mt-1 ${
                  item.status === "completed" ? "bg-[#FFED00]" : "bg-gray-300"
                }`}></div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">{item.date}</p>
                  <p className="text-[#001C54]">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#FFED00] to-[#FFC600] rounded-xl p-8 shadow-lg">
          <h3 className="mb-6 text-[#001C54]">Hızlı İşlemler</h3>
          <div className="space-y-3">
            <Link
              to="/adaylar"
              className="block bg-white text-[#001C54] px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Tüm Adayları Görüntüle
            </Link>
            <Link
              to="/karsilastir"
              className="block bg-[#001C54] text-white px-6 py-3 rounded-lg hover:bg-[#003F7F] transition-colors"
            >
              Adayları Karşılaştır
            </Link>
            <Link
              to="/projeler"
              className="block bg-white text-[#001C54] px-6 py-3 rounded-lg hover:shadow-lg transition-shadow"
            >
              Projeleri Keşfet
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border-l-4 border-[#0052A3] rounded-lg p-6 mt-12">
        <h4 className="text-[#001C54] font-semibold mb-2">📋 Aday Bilgileri Hakkında</h4>
        <p className="text-gray-700 text-sm mb-3">
          Bu platformdaki aday bilgileri çeşitli kaynaklar aracılığıyla derlenmiştir. Adaylarla ilgili bilgileri kontrol ederken duyarlı oluyoruz, ancak bazı bilgilerin eksik veya yanlış olabilme ihtimali bulunmaktadır.
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Bilgi Düzeltme:</strong> Eğer aday bilgilerinde herhangi bir yanlışlık veya eksiklik tespit ederseniz, lütfen{' '}
          <a href="mailto:fenersecim@gmail.com" className="text-[#0052A3] hover:underline font-semibold">
            fenersecim@gmail.com
          </a>
          {' '}adresine yazınız. Adaylar ve temsilcileri de bilgileri doğru tutmak için bize bilgi gönderebilirler. Tüm düzeltmeler en kısa sürede uygulanacaktır.
        </p>
      </div>
    </div>
  );
}
