export default function generateDefaultI18nConfig() {
  return {
    detection: {
      caches: ['localStorage', 'cookie'],
      lookupLocalStorage: 'lng',
      lookupCookie: 'lng',
      cookieMinutes: 1000,
      order: ['localStorage', 'cookie'],
    },
    react: {
      bindI18n: 'languageChanged loaded',
      nsMode: 'default',
      useSuspense: true,
    },
    interpolation: {
      escapeValue: false,
    },
  };
}
