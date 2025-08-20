import { redirect } from 'next/navigation';
import { FormState } from '../form.types';
import { title } from 'process';
export async function createAddress(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  return {
    success: true,
  };
}
