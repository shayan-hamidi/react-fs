export default function generateDefaultI18nConfig(loadPath: string) {
  return {
    lng: 'fa',
    fallbackLng: 'fa',
    backend: {
      loadPath,
    },
    detection: {
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'lng',
      lookupCookie: 'lng',
      cookieMinutes: 1000,
      order: ['localStorage', 'cookie'],
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      nsMode: 'default',
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  };
}
