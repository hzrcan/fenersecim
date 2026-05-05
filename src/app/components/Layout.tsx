import { Outlet, Link, useLocation } from "react-router";
import { Home, Users, FolderKanban, GitCompare, Newspaper } from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

export function Layout() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Anasayfa", icon: Home },
    { path: "/adaylar", label: "Adaylar", icon: Users },
    { path: "/projeler", label: "Projeler", icon: FolderKanban },
    { path: "/karsilastir", label: "Karşılaştır", icon: GitCompare },
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
              <span className="text-white hidden sm:block">Başkanlık Seçimleri</span>
            </Link>

            <div className="flex space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path ||
                  (item.path !== "/" && location.pathname.startsWith(item.path));

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-[#FFED00] text-[#001C54]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden md:inline">{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer className="bg-[#001C54] text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-sm opacity-80">
              © 2026 Fenerbahçe Seçim Platformu. Tasarım ve Geliştirme: <a href="https://hizircan.nl" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFED00] transition-colors">hizircan.nl</a>
            </p>
          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}
