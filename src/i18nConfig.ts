import { defaultI18n, generateDefaultI18nConfig } from '@fs/utils';
const config = generateDefaultI18nConfig();

// Initialize i18n with the configuration
defaultI18n
  .init(config as object)
  .then(() => {})
  .catch((err) => {
    console.error('i18n initialization failed:', err);
  });

const addTranslationSchema = (locale: 'fa' | 'en', resources: any) => {
  defaultI18n.addResourceBundle(locale, 'translation', resources, true, true);
};

export { defaultI18n, addTranslationSchema };
