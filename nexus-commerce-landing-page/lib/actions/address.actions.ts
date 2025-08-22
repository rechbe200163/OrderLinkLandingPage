import { FormState } from '../form.types';

export async function createAddress(
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // simulate creating address and returning its id
  const id = Math.random().toString(36).slice(2, 10);
  console.log('createAddress', Object.fromEntries(formData.entries()));
  return {
    success: true,
    data: id,
  };
}
