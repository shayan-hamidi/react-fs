import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { addTranslationSchema } from "src/i18nConfig";
import authTranslations from "./i18n/fa.json";

const Home = lazy(() => import("./components"));

const HomeRoutes = () => {
  addTranslationSchema("fa", authTranslations);
  // const { instance } = getInstance()
  // const counterServices = counterService(instance)

  return (
    // <EntityRoot entityName="counter" httpService={counterServices}>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    // </EntityRoot>
  );
};

export default HomeRoutes;

export const counterMenu: any = [
  {
    path: "/login",
    intlMessageId: `sidebar.counter`,
    icon: <HomeOutlinedIcon />,
  },
];
