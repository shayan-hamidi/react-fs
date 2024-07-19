import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { addTranslationSchema } from "src/i18nConfig";
import authTranslations from "./i18n/fa.json";

const Login = lazy(() => import("src/components/login"));

const LoginRoutes = () => {
  addTranslationSchema("fa", authTranslations);
  // const { instance } = getInstance()
  // const counterServices = counterService(instance)

  return (
    // <EntityRoot entityName="counter" httpService={counterServices}>
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
    // </EntityRoot>
  );
};
export default LoginRoutes;

export const counterMenu: any = [
  {
    path: "/login",
    intlMessageId: `sidebar.counter`,
    icon: <HomeOutlinedIcon />,
  },
];
