import { FormState } from '../form.types';

export async function createAddress(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  return {
    success: true,
  };
}
