import { create } from 'zustand';
import { ProgressSet, ProgressStep } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';

type ProgressStore = {
  progress: ProgressSet;
  setProgress: (step: ProgressStep) => void;
  removeProgress: (step: ProgressStep) => void;
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set) => ({
      progress: new Set<ProgressStep>([]),

      setProgress: (step) =>
        set((state) => {
          state.progress.add(step);
          return { progress: state.progress };
        }),
      removeProgress: (step) =>
        set((state) => {
          state.progress.delete(step);
          return { progress: state.progress };
        }),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ progress: state.progress }),
      version: 1,
    }
  )
);
