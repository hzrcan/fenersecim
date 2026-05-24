import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router";
import { Filter, TrendingUp, Users as UsersIcon } from "lucide-react";
import { candidates, generateSlug } from "../../data/candidatesData";
import { updatePageMeta, addStructuredData, createBreadcrumbSchema, createFAQSchema } from "../../../utils/seo";

const candidateFaqItems = [
  {
    question: "Popülerlik skoru resmi bir anket sonucu mudur?",
    answer: "Hayır. Platformdaki popülerlik skoru kamuoyu ilgisini yansıtan yaklaşık bir göstergedir ve resmi seçim sonucu yerine geçmez.",
  },
  {
    question: "Aday profillerinde hangi başlıklar yer alır?",
    answer: "Her aday için biyografi, vizyon, proje başlıkları, deneyim, yönetim kurulu ve kampanya ekip bilgileri paylaşılır.",
  },
  {
    question: "Adayları en hızlı nasıl karşılaştırabilirim?",
    answer: "Adayları Karşılaştır sayfasında iki adayı yan yana seçip proje kategorileri ve temel farkları tek tabloda görebilirsiniz.",
  },
];

export function CandidatesPage() {
  const [sortBy, setSortBy] = useState<"name" | "popularity">("popularity");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const availableCategories = useMemo(() => {
    const categories = new Set(candidates.flatMap(c => c.projects.map(p => p.category)));
    return ["all", ...Array.from(categories).sort((a, b) => a.localeCompare(b, "tr"))];
  }, []);

  useEffect(() => {
    if (filterCategory !== "all" && !availableCategories.includes(filterCategory)) {
      setFilterCategory("all");
    }
  }, [availableCategories, filterCategory]);

  useEffect(() => {
    // Sayfanın meta bilgilerini güncelle
    updatePageMeta({
      title: "Başkanlık Adayları | Fenerbahçe Seçimleri 2026",
      description: `Fenerbahçe 2026 başkanlık seçimi için ${candidates.length} adayın profilini inceleyin. Vizyon, proje odağı ve deneyim farklarını tek sayfada karşılaştırın.`,
      keywords: "Fenerbahçe adayları, başkanlık adayları, 2026 seçimi, aday profilleri, seçim",
      image: candidates[0]?.photo || "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/adaylar",
      type: "website",
    });

    // Breadcrumb yapılandırılmış verisi
    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Adaylar", url: "https://fenersecim.com/adaylar" },
      ])
    );

    addStructuredData(createFAQSchema(candidateFaqItems));
  }, []);

  const filteredCandidates = candidates
    .filter(candidate => {
      if (filterCategory === "all") return true;
      return candidate.projects.some(p => p.category === filterCategory);
    })
    .sort((a, b) => {
      if (sortBy === "popularity") return b.popularity - a.popularity;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-[#001C54]">Başkanlık Adayları</h1>
        <p className="text-gray-600">
          Fenerbahçe Spor Kulübü başkanlığı için aday olan adaylarla tanışın
        </p>
        <p className="text-gray-500 text-sm mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-[#0052A3]">
          <strong>Popülerlik Skoru Hakkında:</strong> Popülerlik skoru, adayların güncel kamuoyu algısını yansıtan yaklaşık bir tahmindir. Bu skor; son dönem anketler, sosyal medya etkileşimleri, medya görünürlüğü ve genel taraftar tartışmalarına dayanılarak oluşturulmuştur. <strong>Önemli Not:</strong> Bu skorlar tamamen subjektif tahminlerden oluşmakta olup bilimsel bir anket sonucu değildir. Hiçbir adayı öne çıkarmak veya pozitif/negatif bir imaj çizmek amacıyla kullanılmamıştır. Sadece mevcut tartışma ve ilgi seviyesine göre genel bir fikir vermek için eklenmiştir ve güncellenecektir.
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-[#001C54]" />
            <span className="text-gray-700">Odağına göre filtrele:</span>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001C54] focus:border-transparent"
            >
              {availableCategories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Tüm Kategoriler" : cat}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-[#001C54]" />
            <span className="text-gray-700">Sıralama:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "name" | "popularity")}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001C54] focus:border-transparent"
            >
              <option value="popularity">Popülarite</option>
              <option value="name">Ad</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50 to-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-[#001C54] font-semibold">Kongre üyeleri için ayrı platform hazırlıyoruz</p>
          <p className="text-sm text-gray-600">Seçim sonrası açılış daveti için iletişim bilginizi bırakabilirsiniz.</p>
        </div>
        <Link
          to="/kongre-uyesi-on-kayit?source=candidates"
          className="inline-flex items-center justify-center rounded-lg bg-[#001C54] text-white px-4 py-2.5 hover:bg-[#003F7F] transition-colors"
        >
          Davet Listesine Katıl
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCandidates.map((candidate) => (
          <div
            key={candidate.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow group"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001C54] to-transparent opacity-60"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-white mb-1">{candidate.name}</h3>
                <p className="text-[#FFED00] text-sm italic">"{candidate.slogan}"</p>
              </div>
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                <span className="text-[#001C54] text-sm flex items-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>{candidate.popularity}%</span>
                </span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {candidate.biography}
              </p>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <UsersIcon className="w-4 h-4 text-[#001C54]" />
                  <span className="text-sm text-gray-700">Temel Odak Alanları:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {[...new Set(candidate.projects.slice(0, 3).map(p => p.category))].map((category) => (
                    <span
                      key={category}
                      className="px-3 py-1 bg-gradient-to-r from-[#001C54] to-[#0052A3] text-white text-xs rounded-full"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Popülarite</span>
                  <span className="text-[#001C54]">{candidate.popularity}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#001C54] to-[#FFED00] h-full rounded-full transition-all duration-500"
                    style={{ width: `${candidate.popularity}%` }}
                  ></div>
                </div>
              </div>

              <Link
                to={`/adaylar/${generateSlug(candidate.name)}`}
                className="block w-full bg-[#FFED00] text-[#001C54] py-3 rounded-lg text-center hover:bg-[#FFC600] transition-colors"
              >
                Tam Profili Görüntüle
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-8">
        <h3 className="text-[#001C54] mb-6">Adaylar Hakkında Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {candidateFaqItems.map((item) => (
            <details key={item.question} className="group rounded-lg border border-slate-200 p-4 open:bg-slate-50">
              <summary className="cursor-pointer text-[#001C54] font-medium">{item.question}</summary>
              <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
