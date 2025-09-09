'use server';
import { FormState } from '../form.types';
import { CreateAddress } from '@/lib/types';
export async function createAddress(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  try {
    console.log(
      'Creating address with formData:',
      Object.fromEntries(formData.entries())
    );
    const payload: CreateAddress = {
      country: String(formData.get('country') || ''),
      state: String(formData.get('state') || ''),
      city: String(formData.get('city') || ''),
      postCode: String(formData.get('postCode') || ''),
      streetName: String(formData.get('streetName') || ''),
      streetNumber: String(formData.get('streetNumber') || ''),
    };
    const baseUrl =
      process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) {
      throw new Error('API base URL is not configured');
    }
    const res = await fetch(`${baseUrl.replace(/\/$/, '')}/addresses`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Server Actions run on the server; no-cache ensures fresh creation
      cache: 'no-store',
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      throw new Error(`Create address failed (${res.status}): ${text}`);
    }
    const json = await res.json().catch(() => ({} as any));
    const id = (json && (json.id || json.data?.id || json.data)) ?? undefined;
    if (!id) {
      throw new Error('API response missing address id');
    }
    return { success: true, data: String(id) };
  } catch (err: any) {
    return {
      success: false,
      message: err?.message || 'Failed to create address',
    };
  }
}
