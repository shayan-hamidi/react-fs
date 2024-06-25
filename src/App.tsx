import "./App.css";
import { useTranslation } from "react-i18next";
import { addTranslationSchema } from "./i18nConfig";
import faTranslations from "src/i18n/fa.json";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const { ready } = useTranslation();
  ready && addTranslationSchema("fa", faTranslations);
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <AppRoutes />
    </Router>
  );
}

export default App;
