import { defaultI18nObject } from '@fs/utils';

const i18nObject = defaultI18nObject;
i18nObject.init({
  fallbackLng: 'fa',
  // debug: process.env.NODE_ENV === "development",
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
});

const addTranslationSchema = (locale: 'fa' | 'en', resources: any) => {
  defaultI18nObject.addResourceBundle(
    locale,
    'translation',
    resources,
    true,
    true
  );
};

export { i18nObject, addTranslationSchema };
