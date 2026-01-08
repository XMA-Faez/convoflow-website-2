const WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/NiZDx1EdWj2vIGRJkg5Z/webhook-trigger/17746e45-e7dd-404d-acae-ec4d71d6f70c";

export interface LeadSubmissionData {
  firstName: string;
  lastName: string;
  phone: string;
  language?: string;
  communicationMode?: string;
  source?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  error?: string;
}

export async function submitLead(
  data: LeadSubmissionData
): Promise<LeadSubmissionResult> {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        language: data.language || "en",
        communicationMode: data.communicationMode || "call",
        source: data.source || "website",
      }),
    });

    if (!response.ok) {
      return {
        success: false,
        error: "Failed to submit form",
      };
    }

    return { success: true };
  } catch {
    return {
      success: false,
      error: "Network error. Please try again.",
    };
  }
}
