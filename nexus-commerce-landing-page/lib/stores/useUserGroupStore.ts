import { UserTier } from '../types';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type UserTierStore = {
  userTier: UserTier | null;
  addUserTier: (group: UserTier) => void;
  resetUserTier: () => void;
};

export const useUserTierStore = create<UserTierStore>()(
  persist(
    (set) => ({
      userTier: null,
      addUserTier: (group: UserTier) =>
        set((state) => ({
          userTier: group,
        })),
      resetUserTier: () => set({ userTier: null }),
    }),
    {
      name: 'user-group-store-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ userTier: state.userTier }),
      version: 1,
    }
  )
);
