"use server";

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
  };
  const addressId = String(formData.get('addressId') || '');
  console.log('finalizeOnboarding', { addressId, company });
  return { success: true };
}

