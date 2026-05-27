import { useEffect } from "react";
import { Link } from "react-router";
import { AlertTriangle, ShieldCheck, FileText, Scale, Database, Mail } from "lucide-react";
import {
  addStructuredData,
  createBreadcrumbSchema,
  createFAQSchema,
  updatePageMeta,
} from "../../../utils/seo";

const transparencyFaqItems = [
  {
    question: "Bu platform resmi kulüp platformu mu?",
    answer: "Hayır. Bu platform bağımsız bir seçim bilgilendirme ve karşılaştırma çalışmasıdır.",
  },
  {
    question: "Platform kurucusunun kongre üyeliği var mı?",
    answer: "Evet. Platformun geliştiricisi Fenerbahçe kongre üyesidir ve bu durum şeffaflık ilkesi gereği açıkça beyan edilir.",
  },
  {
    question: "Popülerlik skoru resmi anket yerine geçer mi?",
    answer: "Hayır. Popülerlik skoru resmi anket veya seçim sonucu değildir; sadece kamusal ilgi seviyesini gösteren yaklaşık bir göstergedir.",
  },
];

export function MethodologyTransparencyPage() {
  useEffect(() => {
    updatePageMeta({
      title: "Metodoloji ve Şeffaflık | Fenerbahçe Seçimleri 2026",
      description:
        "Fenersecim platformunun veri kaynakları, güncelleme metodolojisi, çıkar çatışması beyanları ve şeffaflık ilkelerini inceleyin.",
      keywords:
        "metodoloji, şeffaflık, çıkar çatışması, aday verileri, fenerbahçe seçim platformu",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/metodoloji-seffaflik",
      type: "website",
    });

    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Metodoloji ve Şeffaflık", url: "https://fenersecim.com/metodoloji-seffaflik" },
      ])
    );

    addStructuredData(createFAQSchema(transparencyFaqItems));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#001C54] via-[#0052A3] to-[#001C54] text-white p-6 sm:p-8 shadow-xl">
        <p className="text-xs uppercase tracking-wide text-[#FFED00] mb-2">Açık Beyan</p>
        <h1 className="text-white mb-3">Metodoloji ve Şeffaflık</h1>
        <p className="text-blue-100 max-w-3xl">
          Bu sayfa, platformdaki içeriklerin nasıl derlendiğini, nasıl güncellendiğini ve çıkar çatışması risklerinin nasıl yönetildiğini açıkça paylaşmak için hazırlandı.
        </p>
      </div>

      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 mb-8">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-700 mt-0.5" />
          <div>
            <p className="text-amber-900 font-semibold mb-1">Çıkar Çatışması Beyanı</p>
            <p className="text-sm text-amber-800">
              Platformun geliştiricisi Fenerbahçe kongre üyesidir. Bu platform hiçbir başkan adayının resmi kampanya kanalı değildir ve resmi kulüp platformu olarak konumlanmaz.
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3 text-[#001C54]">
            <FileText className="w-5 h-5" />
            <h2 className="text-[#001C54]">İçerik ve Kaynak Politikası</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Aday profilleri açık kaynaklar, basın açıklamaları ve kamuya açık beyanlar temel alınarak derlenir.</li>
            <li>Yanlış veya eksik olduğu bildirilen bilgiler kaynak kontrolü sonrasında güncellenir.</li>
            <li>Güncelleme talepleri adaylar, temsilciler veya üyeler tarafından e-posta ile iletilebilir.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3 text-[#001C54]">
            <Scale className="w-5 h-5" />
            <h2 className="text-[#001C54]">Editoryal Tarafsızlık</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Her aday için aynı veri başlıkları ve benzer sunum şeması uygulanır.</li>
            <li>Popülerlik skoru resmi anket veya seçim sonucu yerine geçmez.</li>
            <li>Platformdaki bilgiler seçmen yönlendirmesi değil, karar sürecini destekleme amacı taşır.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3 text-[#001C54]">
            <Database className="w-5 h-5" />
            <h2 className="text-[#001C54]">Veri Toplama ve Saklama</h2>
          </div>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>Kongre üyesi ön kayıt formunda minimum veri toplanır: ad soyad, e-posta, opsiyonel telefon.</li>
            <li>Bu veri yalnızca davet ve bilgilendirme amacıyla kullanılır; oy kullanma süreciyle ilişkili değildir.</li>
            <li>Silme ve düzeltme talepleri e-posta üzerinden alınıp en kısa sürede sonuçlandırılır.</li>
          </ul>
        </section>

        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
          <div className="flex items-center gap-2 mb-3 text-[#001C54]">
            <ShieldCheck className="w-5 h-5" />
            <h2 className="text-[#001C54]">Yönetişim ve Düzeltme Hattı</h2>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Bilgi düzeltme, çıkar çatışması beyanına ilişkin geri bildirim veya veri talepleriniz için:
          </p>
          <a
            href="mailto:fenersecim@gmail.com"
            className="inline-flex items-center gap-2 text-[#0052A3] hover:underline font-medium"
          >
            <Mail className="w-4 h-4" />
            fenersecim@gmail.com
          </a>
        </section>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <h3 className="text-[#001C54] mb-4">Sık Sorulan Sorular</h3>
        <div className="space-y-4">
          {transparencyFaqItems.map((item) => (
            <details key={item.question} className="group rounded-lg border border-slate-200 p-4 open:bg-slate-50">
              <summary className="cursor-pointer text-[#001C54] font-medium">{item.question}</summary>
              <p className="mt-3 text-sm text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-[#001C54] text-white px-5 py-3 hover:bg-[#003F7F] transition-colors"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}