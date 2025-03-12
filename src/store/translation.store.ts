import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface LanguageState {
  lang: 'fr' | 'en';
  setLang: (newLang: 'fr' | 'en') => void;
  toggleLang: () => void;
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: 'fr', 
      
      setLang: (newLang: 'fr' | 'en') => {
        set({ lang: newLang });
      },
      
      toggleLang: () => {
        const currentLang = get().lang;
        set({ lang: currentLang === 'fr' ? 'en' : 'fr' });
      }
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useLanguageStore;