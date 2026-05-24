/// <reference types="node" />

type InvitePayload = {
  fullName: string;
  sicilNo: string;
  phone?: string;
  email: string;
  consentToContact: boolean;
  source: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value?: string) {
  if (!value) return true;
  return /^[+0-9\s()-]{7,20}$/.test(value);
}

function htmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function sendResendEmail(
  apiKey: string,
  payload: {
    from: string;
    to: string;
    subject: string;
    html: string;
  },
) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Resend error: ${response.status} ${details}`);
  }
}

function getEnv(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  const resendApiKey = getEnv("RESEND_API_KEY");
  const fromEmail = getEnv("CONGRESS_INVITE_FROM_EMAIL");
  const adminEmail = getEnv("CONGRESS_INVITE_ADMIN_EMAIL");

  if (!resendApiKey || !fromEmail || !adminEmail) {
    return res.status(500).json({
      ok: false,
      message: "Email service is not configured.",
    });
  }

  const body = (req.body || {}) as Partial<InvitePayload>;
  const fullName = (body.fullName || "").trim();
  const sicilNo = (body.sicilNo || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim().toLowerCase();
  const source = (body.source || "unknown").trim();
  const consentToContact = Boolean(body.consentToContact);

  if (fullName.length < 4 || sicilNo.length < 4 || !isValidEmail(email) || !isValidPhone(phone)) {
    return res.status(400).json({
      ok: false,
      message: "Invalid form data.",
    });
  }

  if (!consentToContact) {
    return res.status(400).json({
      ok: false,
      message: "Consent is required.",
    });
  }

  const safeName = htmlEscape(fullName);
  const safeSicilNo = htmlEscape(sicilNo);
  const safePhone = phone ? htmlEscape(phone) : "Belirtilmedi";
  const safeEmail = htmlEscape(email);
  const safeSource = htmlEscape(source);

  try {
    await sendResendEmail(resendApiKey, {
      from: fromEmail,
      to: email,
      subject: "Kongre Platformu Davet Ön Kaydınız Alındı",
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#0f172a;">
          <h2 style="margin-bottom:12px;">Ön kaydınız alındı</h2>
          <p>Merhaba ${safeName},</p>
          <p>Fenerbahçe kongre üyelerine özel platform için davet ön kaydınızı aldık. Platform açıldığında sizi bu e-posta adresi üzerinden bilgilendireceğiz.</p>
          <p style="margin-top:16px;"><strong>Kayıt bilgileri</strong></p>
          <ul>
            <li>Sicil No: ${safeSicilNo}</li>
            <li>E-posta: ${safeEmail}</li>
            <li>Telefon: ${safePhone}</li>
          </ul>
          <p style="margin-top:16px; font-size:12px; color:#475569;">Bu kayıt oy kullanma süreciyle ilgili değildir, yalnızca davet amaçlıdır.</p>
        </div>
      `,
    });

    await sendResendEmail(resendApiKey, {
      from: fromEmail,
      to: adminEmail,
      subject: `Yeni Kongre Davet Kaydı: ${fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6; color:#0f172a;">
          <h2 style="margin-bottom:12px;">Yeni kayıt geldi</h2>
          <ul>
            <li>Ad Soyad: ${safeName}</li>
            <li>Sicil No: ${safeSicilNo}</li>
            <li>E-posta: ${safeEmail}</li>
            <li>Telefon: ${safePhone}</li>
          </ul>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Email send failed";
    return res.status(500).json({ ok: false, message });
  }
}
