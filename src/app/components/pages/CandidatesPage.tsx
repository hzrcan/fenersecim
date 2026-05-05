import { useState } from "react";
import { Link } from "react-router";
import { Filter, TrendingUp, Users as UsersIcon } from "lucide-react";
import { candidates } from "../../data/candidatesData";

export function CandidatesPage() {
  const [sortBy, setSortBy] = useState<"name" | "popularity">("popularity");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const categories = ["all", "Altyapı", "Finansal", "Spor", "Teknoloji", "Tesisleşme"];

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
              {categories.map(cat => (
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
                  {candidate.projects.slice(0, 3).map((project) => (
                    <span
                      key={project.id}
                      className="px-3 py-1 bg-gradient-to-r from-[#001C54] to-[#0052A3] text-white text-xs rounded-full"
                    >
                      {project.category}
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
                to={`/adaylar/${candidate.id}`}
                className="block w-full bg-[#FFED00] text-[#001C54] py-3 rounded-lg text-center hover:bg-[#FFC600] transition-colors"
              >
                Tam Profili Görüntüle
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
