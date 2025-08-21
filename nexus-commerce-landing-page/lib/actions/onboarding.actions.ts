'use server';

import { FormState } from '../form.types';

export async function submitOnboarding(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // In a real implementation, this data would be sent to the backend API.
  // For now we simply return a success state.
  console.log('Submitting onboarding data', Object.fromEntries(formData.entries()));
  return {
    success: true,
  };
}
