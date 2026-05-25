import { useEffect } from "react";
import { PlayCircle, Tv } from "lucide-react";
import {
  addStructuredData,
  createBreadcrumbSchema,
  updatePageMeta,
} from "../../../utils/seo";
import { interviewSummaries } from "../../data/interviewSummaries";

const interviews = [
  {
    id: "5KhqO9Cael4",
    candidate: "Aziz Yıldırım",
    title: "Aziz Yıldırım | TRT SPOR Röportajı",
    description: "Aziz Yıldırım'ın TRT SPOR yayınındaki değerlendirmesi.",
  },
  {
    id: "PQaDBiMete8",
    candidate: "Hakan Safi",
    title: "Hakan Safi | TRT SPOR Röportajı",
    description: "Hakan Safi'nin TRT SPOR yayınındaki değerlendirmesi.",
  },
];

function getEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

function getWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

function formatUpdatedAt(value: string) {
  const date = new Date(value);
  return date.toLocaleString("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function InterviewsPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Röportajlar | Fenerbahçe Seçimleri 2026",
      description:
        "Başkan adaylarının röportajlarını tek sayfada izleyin: Aziz Yıldırım ve Hakan Safi.",
      keywords:
        "röportajlar, Aziz Yıldırım, Hakan Safi, Fenerbahçe seçim, aday röportajları, 2026",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/roportajlar",
      type: "website",
    });

    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Röportajlar", url: "https://fenersecim.com/roportajlar" },
      ]),
    );

    addStructuredData({
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Röportajlar",
      description: "Fenerbahçe başkan adaylarının röportaj videoları.",
      url: "https://fenersecim.com/roportajlar",
    });

    interviews.forEach((video) => {
      const summary = interviewSummaries.find((item) => item.videoId === video.id);
      const schemaVideo: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.title,
        description: summary?.quickSummary || video.description,
        thumbnailUrl: `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`,
        embedUrl: getEmbedUrl(video.id),
        contentUrl: getWatchUrl(video.id),
        publisher: {
          "@type": "Organization",
          name: "TRT SPOR",
        },
        inLanguage: "tr-TR",
      };

      // Only include uploadDate when it is verified.
      if ("publishedAt" in video && typeof (video as { publishedAt?: unknown }).publishedAt === "string") {
        schemaVideo.uploadDate = (video as { publishedAt: string }).publishedAt;
      }

      addStructuredData({
        ...schemaVideo,
      });
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#001C54] via-[#0052A3] to-[#001C54] text-white p-6 sm:p-8 shadow-xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase text-[#FFED00] mb-4">
          <Tv className="w-4 h-4" />
          TRT SPOR Özel
        </div>
        <h1 className="text-white mb-3">Röportajlar</h1>
        <p className="text-blue-100 max-w-3xl">
          Aziz Yıldırım ve Hakan Safi'nin TRT SPOR yayınındaki röportajlarını tek sayfada izleyebilirsiniz.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {interviews.map((video) => (
          (() => {
            const summary = interviewSummaries.find((item) => item.videoId === video.id);

            return (
          <section key={video.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="aspect-video bg-black">
              <iframe
                src={getEmbedUrl(video.id)}
                title={video.title}
                className="w-full h-full"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-4 mb-2">
                <h2 className="text-[#001C54]">{video.candidate}</h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-[#FFED00] px-3 py-1 text-xs text-[#001C54]">
                  <PlayCircle className="w-3.5 h-3.5" />
                  TRT SPOR
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">{video.description}</p>

              {summary ? (
                <div className="mt-5 border-t border-slate-200 pt-5 space-y-4">
                  <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <p className="text-xs font-semibold tracking-wide uppercase text-[#001C54]">60 Saniyede Özet</p>
                      <span className={`text-[11px] px-2 py-1 rounded-full ${summary.status === "gozden-gecirildi" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                        {summary.status === "gozden-gecirildi" ? "Gözden Geçirildi" : "Taslak"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{summary.quickSummary}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#001C54] mb-2">Öne Çıkan Başlıklar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {summary.keyPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#001C54] mb-2">Belirtilen Taahhütler</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {summary.commitments.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[#001C54] mb-2">Henüz Netleşmeyen Noktalar</h3>
                    <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                      {summary.unclearPoints.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-lg border border-slate-200 p-3 text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span>Son güncelleme: {formatUpdatedAt(summary.updatedAt)}</span>
                    <a
                      href={summary.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0052A3] hover:underline"
                    >
                      Kaynak: {summary.sourceLabel}
                    </a>
                  </div>
                </div>
              ) : null}

            </div>
          </section>
            );
          })()
        ))}
      </div>
    </div>
  );
}
