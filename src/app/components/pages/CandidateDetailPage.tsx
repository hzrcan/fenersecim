import { useParams, Link } from "react-router";
import { ArrowLeft, TrendingUp, Users, Briefcase, Target, Clock } from "lucide-react";
import { candidates } from "../../data/candidatesData";

export function CandidateDetailPage() {
  const { id } = useParams();
  const candidate = candidates.find(c => c.id === id);

  if (!candidate) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-[#001C54] mb-4">Aday bulunamadı</h2>
          <Link to="/candidates" className="text-[#0052A3] hover:underline">
            ← Adaylara Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  const priorityColors = {
    high: "bg-red-100 text-red-700 border-red-300",
    medium: "bg-yellow-100 text-yellow-700 border-yellow-300",
    low: "bg-green-100 text-green-700 border-green-300",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link
        to="/adaylar"
        className="inline-flex items-center space-x-2 text-[#0052A3] hover:underline mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Adaylara Geri Dön</span>
      </Link>

      <div className="bg-gradient-to-br from-[#001C54] via-[#003F7F] to-[#001C54] rounded-2xl shadow-2xl overflow-hidden mb-12">
        <div className="grid md:grid-cols-3 gap-8 p-8">
          <div className="md:col-span-1 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#FFED00] rounded-full blur-2xl opacity-20"></div>
              <img
                src={candidate.photo}
                alt={candidate.name}
                className="relative w-48 h-48 rounded-full object-cover border-4 border-[#FFED00] shadow-2xl"
              />
            </div>
            <h1 className="text-white mb-2">{candidate.name}</h1>
            <p className="text-[#FFED00] italic mb-4">"{candidate.slogan}"</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 w-full">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#FFED00]" />
                <span className="text-white">Popülarite Puanı</span>
              </div>
              <div className="text-4xl text-[#FFED00] mb-2">{candidate.popularity}%</div>
              <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-[#FFED00] h-full rounded-full"
                  style={{ width: `${candidate.popularity}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 text-white">
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-6 h-6 text-[#FFED00]" />
                <h2 className="text-white">Biyografi</h2>
              </div>
              <p className="text-gray-200 leading-relaxed">{candidate.biography}</p>
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <Target className="w-6 h-6 text-[#FFED00]" />
                <h3 className="text-white">Vizyon & Strateji</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">{candidate.vision}</p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="w-6 h-6 text-[#FFED00]" />
                <h3 className="text-white">Deneyim</h3>
              </div>
              <ul className="space-y-2">
                {candidate.experience.map((exp, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-[#FFED00] mt-1">•</span>
                    <span className="text-gray-200">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-8 text-[#001C54]">Önerilen Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {candidate.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-[#001C54] hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[#001C54] mb-2">{project.title}</h3>
                  <span className="inline-block px-3 py-1 bg-[#FFED00] text-[#001C54] text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
                <span className={`px-3 py-1 text-xs rounded-full border ${priorityColors[project.priority]}`}>
                  {project.priority.toUpperCase()}
                </span>
              </div>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center space-x-2 mb-8">
          <Clock className="w-6 h-6 text-[#001C54]" />
          <h2 className="text-[#001C54]">Fenerbahçe ile Geçmiş İşbirliği</h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#001C54] via-[#0052A3] to-[#FFED00]"></div>
          <div className="space-y-8">
            {candidate.pastInvolvement.map((event, index) => (
              <div key={index} className="relative flex items-start space-x-6 pl-0">
                <div className="flex-shrink-0 w-16 text-right">
                  <div className="inline-block bg-[#001C54] text-white px-3 py-1 rounded-lg text-sm">
                    {event.year}
                  </div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-[#FFED00] border-4 border-white shadow-lg relative z-10"></div>
                <div className="flex-1 bg-gray-50 rounded-lg p-4">
                  <h4 className="text-[#001C54] mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
