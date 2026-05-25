import { useEffect } from "react";
import { PlayCircle, Tv } from "lucide-react";
import {
  addStructuredData,
  createBreadcrumbSchema,
  updatePageMeta,
} from "../../../utils/seo";

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
      const schemaVideo: Record<string, unknown> = {
        "@context": "https://schema.org",
        "@type": "VideoObject",
        name: video.title,
        description: video.description,
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

            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
