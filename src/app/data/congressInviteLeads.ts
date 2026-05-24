export type LeadSource = "homepage" | "candidates" | "invite-page" | "unknown";

export interface CongressInviteLeadInput {
  fullName: string;
  sicilNo: string;
  phone?: string;
  email: string;
  consentToContact: boolean;
  source: LeadSource;
}

export interface CongressInviteLeadRecord {
  id: string;
  fullName: string;
  sicilNo: string;
  phone?: string;
  email: string;
  consentToContact: boolean;
  source: LeadSource;
  createdAt: string;
  reviewStatus: "pending";
}

export interface SubmitLeadResult {
  ok: boolean;
  delivery: "email" | "local";
  code?: "duplicate" | "failed";
  message?: string;
  record?: CongressInviteLeadRecord;
}

const STORAGE_KEY = "fenersecim_congress_invite_leads_v2";

function normalizeName(name: string) {
  return name.trim().replace(/\s+/g, " ");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function normalizePhone(phone?: string) {
  if (!phone) return undefined;
  const trimmed = phone.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function readLocalLeads(): CongressInviteLeadRecord[] {
  if (typeof window === "undefined") return [];

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocalLeads(leads: CongressInviteLeadRecord[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
}

function createRecord(input: CongressInviteLeadInput): CongressInviteLeadRecord {
  return {
    id: crypto.randomUUID(),
    fullName: normalizeName(input.fullName),
    sicilNo: input.sicilNo.trim(),
    phone: normalizePhone(input.phone),
    email: normalizeEmail(input.email),
    consentToContact: input.consentToContact,
    source: input.source,
    createdAt: new Date().toISOString(),
    reviewStatus: "pending",
  };
}

export async function submitCongressInviteLead(
  input: CongressInviteLeadInput,
): Promise<SubmitLeadResult> {
  const webhookUrl =
    (import.meta.env.VITE_CONGRESS_INVITE_WEBHOOK as string | undefined) || "/api/congress-invite";
  const record = createRecord(input);

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(record),
      });

      if (!response.ok) {
        // If email delivery is not configured yet, keep collecting leads locally.
      } else {
        return { ok: true, delivery: "email", record };
      }
    } catch {
      // Network errors fall back to local lead storage.
    }
  }

  const leads = readLocalLeads();
  const duplicateByEmail = leads.some((item) => item.email === record.email);

  if (duplicateByEmail) {
    return {
      ok: false,
      delivery: "local",
      code: "duplicate",
      message: "Bu e-posta adresiyle daha önce kayıt yapılmış görünüyor.",
    };
  }

  leads.push(record);
  writeLocalLeads(leads);

  return {
    ok: true,
    delivery: "local",
    record,
    message:
      "Kayıt alındı. E-posta gönderimi henüz aktif değil; veriniz güvenli şekilde bekleme listesine eklendi.",
  };
}
