import { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router";
import { Home, Users, FolderKanban, GitCompare, UserPlus, Tv, Sparkles } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";
import { ShareActions } from "./ShareActions";

function formatCandidateNameFromSlug(slug: string) {
  return decodeURIComponent(slug)
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toLocaleUpperCase("tr-TR") + part.slice(1))
    .join(" ");
}

function getShareContent(pathname: string) {
  if (pathname === "/") {
    return {
      title: "Fenerbahçe Başkanlık Seçimleri 2026",
      text: "Adayları, projeleri ve seçim takvimini tek yerde incele.",
    };
  }

  if (pathname === "/adaylar") {
    return {
      title: "Fenerbahçe Başkan Adayları",
      text: "Tüm başkan adaylarını vizyon ve projeleriyle karşılaştır.",
    };
  }

  if (pathname.startsWith("/adaylar/")) {
    const slug = pathname.split("/").pop() || "";
    const candidateName = formatCandidateNameFromSlug(slug);

    return {
      title: `${candidateName} | Başkanlık Adayı`,
      text: `${candidateName} aday profilini ve projelerini incele.`,
    };
  }

  if (pathname === "/projeler") {
    return {
      title: "Fenerbahçe İçin Önerilen Projeler",
      text: "Adayların spor, finans ve altyapı odaklı proje planlarını keşfet.",
    };
  }

  if (pathname === "/karsilastir") {
    return {
      title: "Adayları Karşılaştır",
      text: "Başkan adaylarını yan yana karşılaştır ve farkları tek tabloda gör.",
    };
  }

  if (pathname === "/roportajlar") {
    return {
      title: "Aday Röportajları",
      text: "Başkan adaylarının röportajlarını tek sayfadan izleyin.",
    };
  }

  if (pathname === "/kongre-uyesi-on-kayit") {
    return {
      title: "Kongre Üyesi Ön Kayıt",
      text: "Kongre üyelerine özel platform daveti için ön kaydını oluştur.",
    };
  }

  if (pathname === "/haberler") {
    return {
      title: "Seçim Haberleri ve Güncellemeler",
      text: "Fenerbahçe seçim sürecindeki son haber ve analizleri takip et.",
    };
  }

  return {
    title: "Fenerbahçe Seçim Platformu",
    text: "Fenerbahçe seçimleriyle ilgili bu sayfayı incele.",
  };
}

export function Layout() {
  const location = useLocation();
  const shareContent = getShareContent(location.pathname);
  const showInviteSharePrompt = location.pathname === "/kongre-uyesi-on-kayit";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);

  const navItems = [
    { path: "/", label: "Anasayfa", icon: Home },
    { path: "/adaylar", label: "Adaylar", icon: Users },
    { path: "/projeler", label: "Projeler", icon: FolderKanban },
    { path: "/karsilastir", label: "Karşılaştır", icon: GitCompare },
    { path: "/roportajlar", label: "Röportajlar", icon: Tv },
    { path: "/kongre-uyesi-on-kayit", label: "Kongre Üyesi Ön Kayıt", icon: UserPlus, featured: true },
    // { path: "/haberler", label: "Haberler", icon: Newspaper }, // Hidden from menu
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50">
      <nav className="sticky top-0 z-50 bg-[#001C54] shadow-lg backdrop-blur-sm bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-[#FFED00] rounded-full flex items-center justify-center">
                <span className="font-bold text-[#001C54]">FB</span>
              </div>
              <span className="text-white hidden sm:block">Fenerbahçe Seçim Platformu</span>
            </Link>

            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path ||
                  (item.path !== "/" && location.pathname.startsWith(item.path));
                const isFeatured = item.featured;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#FFED00] text-[#001C54]"
                        : isFeatured
                          ? "bg-[#FFED00] text-[#001C54] hover:bg-[#FFE733] shadow-md ring-1 ring-[#FFED00]/60"
                          : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline font-medium">{item.label}</span>
                    {isFeatured && !isActive && (
                      <span className="hidden lg:inline-flex h-2 w-2 rounded-full bg-[#001C54] animate-pulse" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          {showInviteSharePrompt ? (
            <div className="mt-4 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-yellow-50 p-4 sm:p-5 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0052A3]">Daha fazla üyeye ulaşalım</p>
              <p className="mt-1 text-sm sm:text-base text-[#001C54] font-medium">
                Daha fazla kongre üyesine ulaşmamıza yardımcı olun.
              </p>
              <p className="mt-1 text-xs sm:text-sm text-slate-600">
                Bu sayfayı ilgili kongre üyeleriyle paylaşarak davet listesine daha fazla kişinin ulaşmasını sağlayabilirsiniz.
              </p>
            </div>
          ) : null}
          <ShareActions
            title={shareContent.title}
            text={shareContent.text}
            className={showInviteSharePrompt ? "mt-3" : "mt-4"}
          />
        </div>
      </main>

      <footer className="bg-[#001C54] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © 2026 Fenerbahçe Seçim Platformu. Tasarım ve Geliştirme: <a href="https://hizircan.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFED00] transition-colors">hizircan.nl</a>
            </p>
            <p className="text-xs opacity-80 mt-2">
              Kurucu beyanı: Platform geliştiricisi kongre üyesidir. Bu platform resmi kulüp veya aday kampanya sitesi değildir.
            </p>
            <p className="text-xs mt-1">
              <Link to="/metodoloji-seffaflik" className="hover:text-[#FFED00] underline underline-offset-2">
                Metodoloji ve şeffaflık notları
              </Link>
            </p>
          </div>
        </div>
      </footer>

      <Link
        to="/kongre-uyesi-on-kayit?source=invite-page"
        className="fixed bottom-4 right-4 z-50 group"
        aria-label="Kongre üyeleri davet listesine hemen katıl"
      >
        <div className="rounded-2xl bg-[#001C54] text-white shadow-2xl border border-white/20 px-4 py-3 w-[280px] max-w-[calc(100vw-2rem)] transition-all group-hover:translate-y-[-2px] group-hover:bg-[#003F7F]">
          <p className="text-[11px] uppercase tracking-wide text-[#FFED00] mb-1">Ön Kayıt Açık</p>
          <div className="flex items-start gap-2">
            <Sparkles className="w-4 h-4 mt-0.5 text-[#FFED00]" />
            <div>
              <p className="text-sm font-semibold leading-5">Kongre Üyelerine Özel Platform</p>
              <p className="text-xs text-blue-100 mt-1">Hemen katıl, davet ve erişim bilgisini ilk alanlardan ol.</p>
            </div>
          </div>
        </div>
      </Link>

      <Analytics />
    </div>
  );
}
