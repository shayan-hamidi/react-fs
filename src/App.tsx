import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import faTranslations from 'src/i18n/fa.json';
import enTranslations from 'src/i18n/en.json';
import './App.css';
import { addTranslationSchema } from './i18nConfig';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  const { ready } = useTranslation();
  ready && addTranslationSchema('fa', faTranslations);
  ready && addTranslationSchema('en', enTranslations);
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </Router>
  );
};

export default App;
