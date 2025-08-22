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
      progress: [],

      setProgress: (step) =>
        set((state) =>
          state.progress.includes(step)
            ? state
            : { progress: [...state.progress, step] }
        ),
      removeProgress: (step) =>
        set((state) => ({
          progress: state.progress.filter((s) => s !== step),
        })),
    }),
    {
      name: 'progress-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ progress: state.progress }),
      version: 1,
    }
  )
);
