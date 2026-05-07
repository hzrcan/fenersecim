import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Building, Users, TrendingUp, Smartphone, Trophy, Globe, Heart, BarChart, Gamepad2 } from "lucide-react";
import { allProjects, generateSlug } from "../../data/candidatesData";
import { updatePageMeta, addStructuredData, createBreadcrumbSchema } from "../../../utils/seo";

const iconMap: Record<string, any> = {
  building: Building,
  users: Users,
  "trending-up": TrendingUp,
  smartphone: Smartphone,
  trophy: Trophy,
  globe: Globe,
  heart: Heart,
  "bar-chart": BarChart,
  "gamepad-2": Gamepad2,
};

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...new Set(allProjects.map(p => p.category))];

  useEffect(() => {
    // Sayfanın meta bilgilerini güncelle
    updatePageMeta({
      title: "Önerilen Projeler | Fenerbahçe Başkanlık Seçimleri 2026",
      description: `Fenerbahçe Spor Kulübü başkanlık adayları tarafından önerilen ${allProjects.length} proje ve girişim. Altyapı, finansal, spor, teknoloji ve tesisleşme projelerini keşfedin.`,
      keywords: "Fenerbahçe projeler, başkanlık projeleri, 2026, adaylar, girişimler, geliştirme planları",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/projeler",
      type: "website",
    });

    // Breadcrumb yapılandırılmış verisi
    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Projeler", url: "https://fenersecim.com/projeler" },
      ])
    );
  }, []);

  const filteredProjects = selectedCategory === "all"
    ? allProjects
    : allProjects.filter(p => p.category === selectedCategory);

  const projectsByCategory = categories
    .filter(cat => cat !== "all")
    .map(category => ({
      category,
      count: allProjects.filter(p => p.category === category).length,
    }));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-[#001C54]">Önerilen Projeler</h1>
        <p className="text-gray-600">
          Başkanlık adayları tarafından önerilen tüm girişimleri ve projeleri keşfedin
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
        {projectsByCategory.map(({ category, count }) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedCategory === category
                ? "bg-[#001C54] text-white border-[#001C54] shadow-lg"
                : "bg-white text-[#001C54] border-gray-200 hover:border-[#FFED00] hover:shadow-md"
            }`}
          >
            <div className="text-2xl mb-2">{count}</div>
            <div className="text-sm">{category}</div>
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("all")}
          className={`p-4 rounded-xl border-2 transition-all ${
            selectedCategory === "all"
              ? "bg-gradient-to-br from-[#001C54] to-[#0052A3] text-white border-[#001C54] shadow-lg"
              : "bg-white text-[#001C54] border-gray-200 hover:border-[#FFED00] hover:shadow-md"
          }`}
        >
          <div className="text-2xl mb-2">{allProjects.length}</div>
          <div className="text-sm">Tüm Projeler</div>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const Icon = iconMap[project.icon] || Building;

          return (
            <div
              key={`${project.candidateId}-${project.id}`}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#001C54] to-[#0052A3] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-[#FFED00]" />
                </div>
                <span className={`px-3 py-1 text-xs rounded-full ${
                  project.priority === "high"
                    ? "bg-red-100 text-red-700"
                    : project.priority === "medium"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {project.priority.toUpperCase()}
                </span>
              </div>

              <h3 className="text-[#001C54] mb-2">{project.title}</h3>

              <div className="inline-block px-3 py-1 bg-[#FFED00] text-[#001C54] text-xs rounded-full mb-4">
                {project.category}
              </div>

              <p className="text-gray-600 text-sm mb-4">{project.description}</p>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Tarafından önerildi</span>
                  <Link
                    to={`/adaylar/${generateSlug(project.candidateName)}`}
                    className="text-sm text-[#0052A3] hover:underline"
                  >
                    {project.candidateName}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
