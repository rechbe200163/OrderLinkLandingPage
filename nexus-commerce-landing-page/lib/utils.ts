import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function envSet(): boolean {
  return (
    !!process.env.NEXT_PUBLIC_API_BASE_URL &&
    !!process.env.NEXT_PUBLIC_ADMIN_URL
  );
}

export function enableTrustSection(): boolean {
  return process.env.ENABLE_TRUST_SECTION === 'true' ? true : false;
}
