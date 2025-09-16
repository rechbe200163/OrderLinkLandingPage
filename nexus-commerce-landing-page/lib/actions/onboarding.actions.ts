'use server';

import { CreateSiteConfig } from '@/lib/types';
import { FormState } from '../form.types';

export async function finalizeOnboarding(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const company: CreateSiteConfig = {
    companyName: String(formData.get('companyName') || ''),
    email: String(formData.get('email') || ''),
    phoneNumber: String(formData.get('phoneNumber') || ''),
    iban: String(formData.get('iban') || ''),
    companyNumber: String(formData.get('companyNumber') || ''),
    addressId: String(formData.get('addressId') || ''),
  };
  try {
    const baseUrl =
      process.env.NEXUS_API_BASE_URL ||
      process.env.API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL is not configured');
    }

    const url = `${baseUrl.replace(/\/$/, '')}/companies`;
    const payload = { ...company };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Finalize onboarding failed (${res.status}): ${text}`);
    }

    return { success: true, data: company.addressId };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Failed to finalize onboarding',
    };
  }
}
