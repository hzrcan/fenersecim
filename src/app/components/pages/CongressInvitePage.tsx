import { FormEvent, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import { Mail, ShieldCheck, Users } from "lucide-react";
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

  useEffect(() => {
    updatePageMeta({
      title: "Kongre Üyesi Davet Listesi | Fenerbahçe Seçimleri",
      description:
        "Kongre üyeleri için davet listesine katılın. Ayrı kongre platformu açıldığında e-posta ile bilgilendirme alın.",
      keywords: "kongre üyesi, davet listesi, fenerbahçe seçim, üye platformu",
      image: "https://fenersecim.com/og-image.png",
      url: "https://fenersecim.com/kongre-davet",
      type: "website",
    });

    addStructuredData(
      createBreadcrumbSchema([
        { name: "Anasayfa", url: "https://fenersecim.com/" },
        { name: "Kongre Davet", url: "https://fenersecim.com/kongre-davet" },
      ]),
    );
  }, []);

  function validateForm() {
    if (fullName.trim().length < 4) {
      return "Ad soyad alanını en az 4 karakter olacak şekilde doldurun.";
    }

    if (sicilNo.trim().length < 4) {
      return "Lütfen geçerli bir sicil no girin.";
    }

    if (!EMAIL_REGEX.test(email.trim())) {
      return "Geçerli bir e-posta adresi girin.";
    }

    if (phone.trim() && !PHONE_REGEX.test(phone.trim())) {
      return "Telefon numarası formatı geçersiz görünüyor.";
    }

    if (!consent) {
      return "Davet için e-posta iletişimi onayını vermeniz gerekiyor.";
    }

    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError(null);
    setSuccessMessage(null);

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
        <h1 className="text-white mb-3">Kongre Üyesi Davet Listesi</h1>
        <p className="text-blue-100 max-w-3xl">
          Seçim sonrası yalnızca kongre üyelerine özel ayrı bir platform açacağız. Açılışta size davet gönderebilmemiz için temel iletişim bilgilerinizi bırakabilirsiniz.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-100">
          <h2 className="text-[#001C54] mb-6">Kayıt Formu</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="fullName">Ad Soyad</Label>
              <Input
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Örn. Ahmet Yılmaz"
                autoComplete="name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="sicilNo">Sicil No</Label>
              <Input
                id="sicilNo"
                value={sicilNo}
                onChange={(event) => setSicilNo(event.target.value)}
                placeholder="Örn. 12345"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefon (Opsiyonel)</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                placeholder="Örn. +90 5xx xxx xx xx"
                autoComplete="tel"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-posta</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="ornek@mail.com"
                autoComplete="email"
              />
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <Checkbox
                id="consent"
                checked={consent}
                onCheckedChange={(checked) => setConsent(Boolean(checked))}
                className="mt-0.5"
              />
              <Label htmlFor="consent" className="leading-5 text-gray-700">
                Seçim sonrası açılacak kongre platformu için davet, duyuru ve erişim bilgilendirmesi amacıyla e-posta üzerinden iletişim kurulmasını onaylıyorum.
              </Label>
            </div>

            {submitError ? (
              <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {submitError}
              </div>
            ) : null}

            {isSuccess ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                {successMessage}
              </div>
            ) : null}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#001C54] text-white hover:bg-[#003F7F]"
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
              Yol haritası üzerinde çalışıyoruz. Amaç, kongre üyelerinin doğrulanmış bilgiye hızlı eriştiği ve karşılaştırma yapabildiği özel bir karar destek alanı oluşturmak.
            </p>
            <p className="text-gray-600">
              Erken kayıtlar sayesinde açılış sürümündeki öncelikli özellikleri kongre üyelerinin ihtiyaçlarına göre belirleyeceğiz.
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
    </div>
  );
}
