'use server';

import { CreateOnboardingDto } from '@/lib/types';
import { FormState } from '../form.types';

export async function finalizeOnboarding(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const payload: CreateOnboardingDto = {
    siteConfig: {
      companyName: String(formData.get('companyName') || ''),
      email: String(formData.get('email') || ''),
      phoneNumber: String(formData.get('phoneNumber') || ''),
      iban: String(formData.get('iban') || ''),
      companyNumber: String(formData.get('companyNumber') || ''),
    },
    address: {
      country: String(formData.get('country') || ''),
      state: String(formData.get('state') || ''),
      city: String(formData.get('city') || ''),
      postCode: String(formData.get('postCode') || ''),
      streetName: String(formData.get('streetName') || ''),
      streetNumber: String(formData.get('streetNumber') || ''),
    },
  };

  try {
    const baseUrl =
      process.env.NEXUS_API_BASE_URL ||
      process.env.API_BASE_URL ||
      process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL is not configured');
    }

    const url = `${baseUrl.replace(/\/$/, '')}/onboardings`;

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

    let siteConfigId: string | number | undefined;
    try {
      const json = await res.json();
      siteConfigId =
        json?.siteConfigId ??
        json?.data?.siteConfigId ??
        json?.data?.id ??
        json?.data ??
        undefined;
    } catch {
      siteConfigId = undefined;
    }

    return {
      success: true,
      data: siteConfigId !== undefined ? String(siteConfigId) : undefined,
    };
  } catch (error: unknown) {
    const message =
      error instanceof Error ? error.message : 'Failed to finalize onboarding';
    return {
      success: false,
      message,
    };
  }
}
