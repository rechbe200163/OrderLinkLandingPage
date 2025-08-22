import { create } from 'zustand';
import { CreateSiteConfig } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';

type CompanyStore = {
  company: CreateSiteConfig;
  setCompanyName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhoneNumber: (phone: string) => void;
  setIban: (iban: string) => void;
  setCompanyNumber: (number: string) => void;
  resetCompany: () => void;
};

const initial: CreateSiteConfig = {
  companyName: '',
  email: '',
  phoneNumber: '',
  iban: '',
  companyNumber: '',
};

export const useCompanyStore = create<CompanyStore>()(
  persist(
    (set) => ({
      company: initial,
      setCompanyName: (name) =>
        set((state) => ({ company: { ...state.company, companyName: name } })),
      setEmail: (email) =>
        set((state) => ({ company: { ...state.company, email } })),
      setPhoneNumber: (phoneNumber) =>
        set((state) => ({ company: { ...state.company, phoneNumber } })),
      setIban: (iban) =>
        set((state) => ({ company: { ...state.company, iban } })),
      setCompanyNumber: (companyNumber) =>
        set((state) => ({ company: { ...state.company, companyNumber } })),
      resetCompany: () => set({ company: initial }),
    }),
    {
      name: 'company-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ company: state.company }),
      version: 1,
    }
  )
);
