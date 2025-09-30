export enum ModulePackageName {
  INSIGHT = 'INSIGHT', // Statistiken
  FLOW = 'FLOW', // Navigation
  ACCESS = 'ACCESS', // Custom Roles
}

export enum UserTier {
  CORE = 'CORE',
  TEAM = 'TEAM',
  PRO = 'PRO',
  ENTERPRISE = 'ENTERPRISE',
}

// Map ModuleName to ModulePackageName
export const Package: Record<ModuleName, ModulePackageName> = {
  STATISTICS: ModulePackageName.INSIGHT,
  NAVIGATION: ModulePackageName.FLOW,
  CUSTOM_ROLES: ModulePackageName.ACCESS,
};

// Pricing for each package
export const PackagePricing: Record<ModulePackageName, number> = {
  [ModulePackageName.INSIGHT]: 10,
  [ModulePackageName.FLOW]: 15,
  [ModulePackageName.ACCESS]: 5,
};

// Map user count to UserTier
export const USER_TIER_BY_COUNT: Record<number, UserTier> = {
  3: UserTier.CORE,
  5: UserTier.TEAM,
  7: UserTier.PRO,
};

// Pricing for each user tier
export const UserTierPricing: Record<UserTier, number> = {
  [UserTier.CORE]: 0, // up to 3 users
  [UserTier.TEAM]: 5, // up to 5 users
  [UserTier.PRO]: 10, // up to 7 users
  [UserTier.ENTERPRISE]: 0, // custom pricing
};

export const MODULE_NAMES = [
  'STATISTICS',
  'NAVIGATION',
  'CUSTOM_ROLES',
] as const;
export type ModuleName = (typeof MODULE_NAMES)[number];

export interface OnboardingAddress {
  country: string;
  state: string;
  city: string;
  postCode: string;
  streetName: string;
  streetNumber: string;
}

export interface OnboardingSiteConfig {
  companyName: string;
  email: string;
  phoneNumber: string;
  iban: string;
  companyNumber: string;
}

export interface CreateOnboardingDto {
  siteConfig: OnboardingSiteConfig;
  address: OnboardingAddress;
}

export interface Address extends OnboardingAddress {
  addressId: string;
  data?: unknown;
}

export interface CreateAddress {
  country: string;
  state: string;
  city: string;
  postCode: string;
  streetName: string;
  streetNumber: string;
}
