import { create } from 'zustand';
import { ModuleName } from '../types';
import { createJSONStorage, persist } from 'zustand/middleware';

type ModuleStore = {
  // Define the shape of your module store here
  modules: ModuleName[];
  addModule: (module: ModuleName) => void;
  removeModule: (module: ModuleName) => void;
  resetModules: () => void;
};

export const useModuleStore = create<ModuleStore>()(
  persist(
    (set) => ({
      modules: [],
      addModule: (module: ModuleName) =>
        set((state) => ({
          modules: [...state.modules, module],
        })),
      removeModule: (moduleName: ModuleName) =>
        set((state) => ({
          modules: state.modules.filter((module) => module !== moduleName),
        })),
      resetModules: () => set({ modules: [] }),
    }),
    {
      name: 'module-store-v1',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ modules: state.modules }),
      version: 1,
    }
  )
);
