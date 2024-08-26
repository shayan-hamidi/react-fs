import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const defaultI18n = i18n.use(LanguageDetector).use(initReactI18next);

export default defaultI18n;
