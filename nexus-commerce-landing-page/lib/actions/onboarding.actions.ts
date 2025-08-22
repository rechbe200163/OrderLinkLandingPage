"use server";

import { CreateAddress, CreateSiteConfig } from '@/lib/types';

export async function finalizeOnboarding(data: {
  address: CreateAddress;
  company: CreateSiteConfig;
}) {
  console.log('finalizeOnboarding', data);
}

