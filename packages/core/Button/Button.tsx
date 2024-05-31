import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

type Tbutton = {
  i18nKey: string;
};

export default function FsButton({
  i18nKey,
  ...rest
}: ButtonProps & Tbutton) {
  const { t } = useTranslation();
  return <Button {...rest}>{t(i18nKey)}</Button>;
}
