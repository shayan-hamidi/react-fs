import { Route, Routes } from "react-router-dom";
import { addTranslationSchema } from "src/i18nConfig";
import authTranslations from "./i18n/fa.json";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Home from "src/components/home";

export default function HomeRoutes() {
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
}

export const counterMenu: any = [
  {
    path: "/login",
    intlMessageId: `sidebar.counter`,
    icon: <HomeOutlinedIcon />,
  },
];
