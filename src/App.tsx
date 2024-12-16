import { useTranslation } from 'react-i18next';
import enTranslations from 'src/i18n/en.json';
import faTranslations from 'src/i18n/fa.json';
import './App.css';
import { addTranslationSchema } from './i18nConfig';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const { ready } = useTranslation();
  ready && addTranslationSchema('fa', faTranslations);
  ready && addTranslationSchema('en', enTranslations);
  return <AppRoutes />;
};

export default App;
