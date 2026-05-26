import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { AlertCircle, CheckCircle2, Mail, ShieldCheck, Users } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import {
  LeadSource,
  submitCongressInviteLead,
} from "../../data/congressInviteLeads";
import {
  addStructuredData,
  createBreadcrumbSchema,
  updatePageMeta,
} from "../../../utils/seo";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+0-9\s()-]{7,20}$/;

type FieldName = "fullName" | "sicilNo" | "phone" | "email" | "consent";

function getLeadSource(search: string): LeadSource {
  const params = new URLSearchParams(search);
  const source = params.get("source");

  if (source === "homepage") return "homepage";
  if (source === "candidates") return "candidates";
  if (source === "invite-page") return "invite-page";
  return "unknown";
}

export function CongressInvitePage() {
  const location = useLocation();
  const source = useMemo(() => getLeadSource(location.search), [location.search]);

  const [fullName, setFullName] = useState("");
  const [sicilNo, setSicilNo] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldName, string>>>({});

  useEffect(() => {
    updatePageMeta({
      title: "Kongre Üyesi Ön Kayıt | Fenerbahçe Seçimleri",
      description:
        "Kongre üyeleri için ön kayda katılın. Ayrı kongre platformu açıldığında e-posta ile ilk bilgilendirmeyi alın.",
      keywords: "kongre üyesi, ön kayıt, davet listesi, fenerbahçe seçim, üye platformu",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/kongre-uyesi-on-kayit",
      type: "website",
    });

    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Kongre Üyesi Ön Kayıt", url: "https://fenersecim.com/kongre-uyesi-on-kayit" },
      ]),
    );
  }, []);

  function getFieldError(field: FieldName) {
    if (field === "fullName") {
      if (fullName.trim().length < 4) {
        return "Ad soyad alanını en az 4 karakter olacak şekilde doldurun.";
      }
      return "";
    }

    if (field === "sicilNo") {
      if (sicilNo.trim().length < 4) {
        return "Lütfen geçerli bir sicil no girin.";
      }
      return "";
    }

    if (field === "email") {
      if (!EMAIL_REGEX.test(email.trim())) {
        return "Geçerli bir e-posta adresi girin.";
      }
      return "";
    }

    if (field === "phone") {
      if (phone.trim() && !PHONE_REGEX.test(phone.trim())) {
        return "Telefon numarası formatı geçersiz görünüyor.";
      }
      return "";
    }

    if (!consent) {
      return "Davet ve bilgilendirme e-postaları için onay vermeniz gerekiyor.";
    }

    return "";
  }

  function validateForm() {
    const errors: Partial<Record<FieldName, string>> = {
      fullName: getFieldError("fullName"),
      sicilNo: getFieldError("sicilNo"),
      phone: getFieldError("phone"),
      email: getFieldError("email"),
      consent: getFieldError("consent"),
    };

    setFieldErrors(errors);

    return Object.values(errors).find(Boolean) ?? null;
  }

  function handleFieldBlur(field: FieldName) {
    setFieldErrors((previous) => ({
      ...previous,
      [field]: getFieldError(field),
    }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);
    setIsSuccess(false);

    const validationError = validateForm();
    if (validationError) {
      setSubmitError(validationError);
      return;
    }

    setIsSubmitting(true);
    const result = await submitCongressInviteLead({
      fullName,
      sicilNo,
      phone,
      email,
      consentToContact: consent,
      source,
    });
    setIsSubmitting(false);

    if (!result.ok) {
      setSubmitError(result.message || "Kayıt sırasında beklenmeyen bir sorun oluştu.");
      return;
    }

    setIsSuccess(true);
    setSuccessMessage(
      result.delivery === "email"
        ? "Kaydınız alındı. Onay e-postası gönderildi, açılışta davet e-postası da alacaksınız."
        : (result.message || "Kaydınız alındı. Platform yayına açıldığında size e-posta ile davet gönderilecektir."),
    );
    setFullName("");
    setSicilNo("");
    setPhone("");
    setEmail("");
    setConsent(false);
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#001C54] via-[#0052A3] to-[#001C54] text-white p-6 sm:p-8 shadow-xl">
        <p className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-[#FFED00] mb-3">
          30 saniyede tamamlanır
        </p>
        <h1 className="text-white mb-3">Kongre Platformu Davet Listesine Katıl</h1>
        <p className="text-blue-100 max-w-3xl">
          Seçim sonrası yalnızca kongre üyelerine özel ayrı bir platform açacağız. Şimdi ön kaydını oluştur, açılışta davet ve erişim bilgilendirmesini ilk alanlardan ol.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div id="invite-form" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
          <h2 className="text-[#001C54] mb-2">Hemen Katıl</h2>
          <p className="text-sm text-gray-600 mb-6">Bilgilerini bırak, davet e-postasını ilk alanlardan ol.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Ad Soyad</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(event) => {
                  setFullName(event.target.value);
                  if (fieldErrors.fullName) {
                    setFieldErrors((previous) => ({ ...previous, fullName: "" }));
                  }
                }}
                onBlur={() => handleFieldBlur("fullName")}
                placeholder="Örn. Ahmet Yılmaz"
                autoComplete="name"
                className={fieldErrors.fullName ? "border-red-400 focus-visible:ring-red-400" : ""}
                aria-invalid={Boolean(fieldErrors.fullName)}
                aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
              />
              {fieldErrors.fullName ? (
                <p id="fullName-error" className="text-xs text-red-600">{fieldErrors.fullName}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="sicilNo">Sicil No <span className="text-xs text-gray-500">(Üyelik numaranız)</span></Label>
              <Input
                id="sicilNo"
                value={sicilNo}
                onChange={(event) => {
                  setSicilNo(event.target.value);
                  if (fieldErrors.sicilNo) {
                    setFieldErrors((previous) => ({ ...previous, sicilNo: "" }));
                  }
                }}
                onBlur={() => handleFieldBlur("sicilNo")}
                placeholder="Örn. 12345"
                className={fieldErrors.sicilNo ? "border-red-400 focus-visible:ring-red-400" : ""}
                aria-invalid={Boolean(fieldErrors.sicilNo)}
                aria-describedby={fieldErrors.sicilNo ? "sicilNo-error" : "sicilNo-help"}
              />
              <p id="sicilNo-help" className="text-xs text-gray-500">Kulüp üyelik kaydınızda geçen sicil numarasını girin.</p>
              {fieldErrors.sicilNo ? (
                <p id="sicilNo-error" className="text-xs text-red-600">{fieldErrors.sicilNo}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon (Opsiyonel)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => {
                  setPhone(event.target.value);
                  if (fieldErrors.phone) {
                    setFieldErrors((previous) => ({ ...previous, phone: "" }));
                  }
                }}
                onBlur={() => handleFieldBlur("phone")}
                placeholder="Örn. +90 5xx xxx xx xx"
                autoComplete="tel"
                className={fieldErrors.phone ? "border-red-400 focus-visible:ring-red-400" : ""}
                aria-invalid={Boolean(fieldErrors.phone)}
                aria-describedby={fieldErrors.phone ? "phone-error" : "phone-help"}
              />
              <p id="phone-help" className="text-xs text-gray-500">Sadece gerektiğinde daha hızlı bilgilendirme için kullanılır.</p>
              {fieldErrors.phone ? (
                <p id="phone-error" className="text-xs text-red-600">{fieldErrors.phone}</p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (fieldErrors.email) {
                    setFieldErrors((previous) => ({ ...previous, email: "" }));
                  }
                }}
                onBlur={() => handleFieldBlur("email")}
                placeholder="ornek@mail.com"
                autoComplete="email"
                className={fieldErrors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
                aria-invalid={Boolean(fieldErrors.email)}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
              />
              {fieldErrors.email ? (
                <p id="email-error" className="text-xs text-red-600">{fieldErrors.email}</p>
              ) : null}
            </div>

            <div className={`flex items-start gap-3 rounded-lg border p-4 ${fieldErrors.consent ? "border-red-200 bg-red-50" : "border-blue-100 bg-blue-50"}`}>
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => {
                  setConsent(Boolean(checked));
                  if (fieldErrors.consent) {
                    setFieldErrors((previous) => ({ ...previous, consent: "" }));
                  }
                }}
                className="mt-0.5"
              />
              <div>
                <Label htmlFor="consent" className="leading-5 text-gray-700">
                  Platform daveti, açılış duyurusu ve erişim bilgilerini e-posta ile almayı onaylıyorum.
                </Label>
                <p className="text-xs text-gray-500 mt-1">
                  Detaylar için <Link to="/metodoloji-seffaflik" className="text-[#0052A3] underline underline-offset-2">şeffaflık notları</Link> sayfasını inceleyebilirsiniz.
                </p>
                {fieldErrors.consent ? (
                  <p className="text-xs text-red-600 mt-2">{fieldErrors.consent}</p>
                ) : null}
              </div>
            </div>

            {submitError ? (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 flex items-start gap-2">
                <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                <span>{submitError}</span>
              </div>
            ) : null}

            {isSuccess ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>{successMessage}</p>
                  <p className="text-xs text-emerald-800 mt-1">Dilerseniz bu sayfayı kongre üyesi arkadaşlarınızla da paylaşabilirsiniz.</p>
                </div>
              </div>
            ) : null}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 bg-[#001C54] text-white hover:bg-[#003F7F]"
            >
              {isSubmitting ? "Kaydediliyor..." : "Davet Listesine Katıl"}
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100">
            <h3 className="text-[#001C54] mb-4">Neden topluyoruz?</h3>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <Users className="w-4 h-4 text-[#0052A3] mt-0.5" />
                Kongre üyelerine özel ayrı platformu doğru kitleyle açmak için.
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#0052A3] mt-0.5" />
                Açılış günü davet ve erişim bilgilerini doğrudan iletebilmek için.
              </li>
              <li className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#0052A3] mt-0.5" />
                Şimdilik yalnızca davet amacıyla minimum veri (ad, sicil no, e-posta ve opsiyonel telefon) toplamak için.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 border border-blue-100 text-sm text-gray-700">
            <p className="font-semibold text-[#001C54] mb-2">Platformta neler olacak?</p>
            <p className="mb-3">
              Hedefimiz, kongre üyelerinin sadece bilgi tükettiği bir ekran değil, birlikte düşünen, birlikte üreten ve birlikte etki oluşturan güçlü bir dijital üye ekosistemi kurmak. Bu alan resmi bir kulüp platformu değil; platform içi doğrulanmış üyelerin güvenle bir araya geldiği, fikirlerinin görünür olduğu ve katılımın gerçek değere dönüştüğü bağımsız bir topluluk merkezi olacak.
            </p>
            <p className="text-gray-600">
              Platformu; fikir ve proje önerilerinin birlikte olgunlaştırıldığı, üyelerin ilgi alanlarına göre ağ kurabildiği, gündem başlıklarında topluluk oylamalarıyla nabız tutulabildiği, moderasyonlu tartışma alanlarında sağlıklı diyalog kurulabildiği, bölgesel/tematik çalışma gruplarıyla somut çıktı üretilebildiği ve ortak raporlar üzerinden kolektif hafıza oluşturulabildiği kapsamlı bir kongre üyesi topluluğu olarak tasarlıyoruz.
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl border border-blue-100 p-6 text-sm text-gray-700">
            <p className="font-semibold text-[#001C54] mb-2">Şeffaflık Notu</p>
            <p>
              Bu kayıt, oy kullanımı veya seçim sonucu ile ilgili bir işlem değildir. Sadece seçim sonrası açılacak ayrı platform için davet ön-listesidir.
            </p>
          </div>

          <Link
            to="/"
            className="block text-center rounded-lg border border-[#001C54] text-[#001C54] py-3 hover:bg-[#001C54] hover:text-white transition-colors"
          >
            Anasayfaya Dön
          </Link>
        </div>
      </div>

      <a
        href="#invite-form"
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40 rounded-xl bg-[#001C54] text-white text-center py-3 shadow-xl border border-white/20"
      >
        Formu Tamamla
      </a>
    </div>
  );
}
