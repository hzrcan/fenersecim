import { useEffect, useState } from "react";
import { Check, X, TrendingUp } from "lucide-react";
import { candidates, generateSlug } from "../../data/candidatesData";
import { updatePageMeta, addStructuredData, createBreadcrumbSchema, createQASchema } from "../../../utils/seo";

const compareQaItems = [
  {
    question: "Hangi aday sportif başarıya daha hızlı odaklanıyor?",
    answers: [
      { candidate: "Hakan Safi", answer: "Transfer ve teknik ekip konusunda hızlı ve iddialı sezon başlangıcı hedefi vurgulanıyor." },
      { candidate: "Aziz Yıldırım", answer: "Kısa vadede şampiyonluk ve güçlü kadro kurma önceliği açık şekilde öne çıkıyor." },
    ],
  },
  {
    question: "Mali ve yapısal güçlenme yaklaşımı nasıl farklı?",
    answers: [
      { candidate: "Hakan Safi", answer: "Gelir artışına dayalı uzun vadeli finansal hedefler ve altyapı yatırımları öne çıkıyor." },
      { candidate: "Aziz Yıldırım", answer: "Denetim, yönetim deneyimi ve yapısal dönüşüm odaklı model vurgulanıyor." },
    ],
  },
  {
    question: "Stadyum ve tesis gelişimi konusunda neler vaat ediliyor?",
    answers: [
      { candidate: "Hakan Safi", answer: "Stadyum kapasite artışı ve tesis yenileme adımlarıyla uzun vadeli gelir hedefleniyor." },
      { candidate: "Aziz Yıldırım", answer: "Stadyum modernizasyonu ve kapasite artışı, hızlandırılmış izin süreçleriyle ele alınıyor." },
    ],
  },
];

export function ComparePage() {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([
    candidates[0]?.id || "",
    candidates[1]?.id || "",
  ]);

  useEffect(() => {
    // Sayfanın meta bilgilerini güncelle
    updatePageMeta({
      title: "Adayları Karşılaştır | Fenerbahçe Başkanlık Seçimleri 2026",
      description: "Fenerbahçe başkanlık adaylarını yan yana karşılaştırın: proje odakları, deneyim, kampanya ekipleri ve yönetim yaklaşımlarını tek tabloda inceleyin.",
      keywords: "aday karşılaştırma, Fenerbahçe başkanlık, 2026 seçimi, adaylar, karşılaştırma aracı",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/karsilastir",
      type: "website",
    });

    // Breadcrumb yapılandırılmış verisi
    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Karşılaştır", url: "https://fenersecim.com/karsilastir" },
      ])
    );

    addStructuredData(createQASchema(compareQaItems));
  }, []);

  const handleCandidateChange = (index: number, candidateId: string) => {
    const newSelection = [...selectedCandidates];
    newSelection[index] = candidateId;
    setSelectedCandidates(newSelection);
  };

  const compareData = selectedCandidates.map(id => candidates.find(c => c.id === id)).filter(Boolean);

  const allCategories = [...new Set(candidates.flatMap(c => c.projects.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="mb-4 text-[#001C54]">Adayları Karşılaştır</h1>
        <p className="text-gray-600">
          Başkanlık adaylarının yan yana karşılaştırması
        </p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[0, 1].map((index) => (
            <div key={index}>
              <label className="block text-sm mb-2 text-gray-700">
                Aday {index + 1}
              </label>
              <select
                value={selectedCandidates[index]}
                onChange={(e) => handleCandidateChange(index, e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#001C54] focus:border-transparent"
              >
                {candidates.map((candidate) => (
                  <option key={candidate.id} value={candidate.id}>
                    {candidate.name}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#001C54]">
                <tr>
                  <th className="px-6 py-4 text-left text-white">Kriterler</th>
                  {compareData.map((candidate) => (
                    <th key={candidate?.id} className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center">
                        <img
                          src={candidate?.photo}
                          alt={candidate?.name}
                          className="w-16 h-16 rounded-full border-2 border-[#FFED00] mb-2 object-cover"
                        />
                        <span className="text-white">{candidate?.name}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-[#001C54] align-top">Slogan</td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4 text-center text-gray-600 italic">
                      "{candidate?.slogan}"
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="px-6 py-4 text-[#001C54] flex items-start space-x-2 align-top">
                    <TrendingUp className="w-5 h-5" />
                    <span>Popülarite</span>
                  </td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl text-[#001C54] mb-2">{candidate?.popularity}%</span>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-[#001C54] to-[#FFED00] h-full rounded-full"
                            style={{ width: `${candidate?.popularity}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  ))}
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-[#001C54] align-top">Toplam Projeler</td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4 text-center">
                      <span className="inline-block px-4 py-2 bg-[#FFED00] text-[#001C54] rounded-full">
                        {candidate?.projects.length}
                      </span>
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="px-6 py-4 text-[#001C54] align-top">Deneyim</td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4">
                      <ul className="text-sm text-gray-600 space-y-1">
                        {candidate?.experience.map((exp, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>{exp}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-[#001C54] align-top">
                    Yönetim Kurulu Üyeleri
                    <span className="ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-700 border border-emerald-300 align-middle">
                      Doğrulanmış
                    </span>
                  </td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4">
                      {candidate?.boardMembers && candidate.boardMembers.length > 0 ? (
                        <div className="space-y-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#001C54] mb-2">Asil Üyeler</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {candidate.boardMembers
                                .filter((member) => member.type === "asil")
                                .map((member) => (
                                  <li key={member.id} className="flex flex-col">
                                    <span className="font-medium text-[#001C54]">{member.name}</span>
                                    <span className="text-xs text-gray-500">{member.position}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>

                          {candidate.boardMembers.some((member) => member.type === "asil") &&
                            candidate.boardMembers.some((member) => member.type === "yedek") && (
                              <div className="border-t border-gray-200"></div>
                            )}

                          <div>
                            <p className="text-xs font-semibold uppercase tracking-wide text-[#001C54] mb-2">Yedek Üyeler</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {candidate.boardMembers
                                .filter((member) => member.type === "yedek")
                                .map((member) => (
                                  <li key={member.id} className="flex flex-col">
                                    <span className="font-medium text-[#001C54]">{member.name}</span>
                                    <span className="text-xs text-gray-500">{member.position}</span>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="px-6 py-4 text-[#001C54] align-top">
                    Seçim Kampanyası İletişim Sorumluları
                    <span className="ml-2 inline-block px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-700 border border-emerald-300 align-middle">
                      Doğrulanmış
                    </span>
                  </td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4">
                      {candidate?.campaignContacts && candidate.campaignContacts.length > 0 ? (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {candidate.campaignContacts.map((contact) => (
                            <li key={contact.id} className="flex flex-col">
                              <span className="font-medium text-[#001C54]">{contact.name}</span>
                              <span className="text-xs text-gray-500">Kampanya İletişim Sorumlusu</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td className="px-6 py-4 text-[#001C54] align-top">Antrenör Adayları</td>
                  {compareData.map((candidate) => (
                    <td key={candidate?.id} className="px-6 py-4">
                      {candidate?.coachCandidates && candidate.coachCandidates.length > 0 ? (
                        <ul className="text-sm text-gray-600 space-y-1">
                          {candidate.coachCandidates.map((coach) => (
                            <li key={coach.id} className="flex flex-col">
                              <span className="font-medium text-[#001C54]">{coach.name}</span>
                              <span className="text-xs text-gray-500">{coach.status}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <X className="w-6 h-6 text-gray-300 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>

                {allCategories.map((category) => (
                  <tr key={category} className="bg-gray-50">
                    <td className="px-6 py-4 text-[#001C54] align-top">{category}</td>
                    {compareData.map((candidate) => {
                      const hasCategory = candidate?.projects.some(p => p.category === category);
                      const categoryProjects = candidate?.projects.filter(p => p.category === category) || [];

                      return (
                        <td key={candidate?.id} className="px-6 py-4 text-center">
                          {hasCategory ? (
                            <div className="space-y-2">
                              <Check className="w-6 h-6 text-green-600 mx-auto" />
                              <div className="text-xs text-gray-600">
                                {categoryProjects.map(p => p.title).join(", ")}
                              </div>
                            </div>
                          ) : (
                            <X className="w-6 h-6 text-gray-300 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#FFED00] to-[#FFC600] rounded-xl p-8">
        <h3 className="text-[#001C54] mb-4">Karar vermeye hazır mısınız?</h3>
        <p className="text-[#001C54] mb-6">
          Her adayın tam profili için Fenerbahçe'nin vizyonu ve planları hakkında daha ayrıntılı bilgi alın.
        </p>
        <div className="flex flex-wrap gap-4">
          {compareData.map((candidate) => (
            <a
              key={candidate?.id}
              href={`/adaylar/${generateSlug(candidate?.name || "")}`}
              className="bg-[#001C54] text-white px-6 py-3 rounded-lg hover:bg-[#003F7F] transition-colors"
            >
              {candidate?.name} Profilini Görüntüle
            </a>
          ))}
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-white border border-slate-200 shadow-lg p-6 sm:p-8">
        <h3 className="text-[#001C54] mb-6">Karar Desteği: Kısa Soru-Cevap</h3>
        <div className="space-y-5">
          {compareQaItems.map((item) => (
            <div key={item.question} className="rounded-lg border border-slate-200 p-4">
              <p className="text-[#001C54] font-medium mb-3">{item.question}</p>
              <ul className="space-y-2">
                {item.answers.map((entry) => (
                  <li key={`${item.question}-${entry.candidate}`} className="text-sm text-gray-600">
                    <span className="font-semibold text-[#001C54]">{entry.candidate}:</span> {entry.answer}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
