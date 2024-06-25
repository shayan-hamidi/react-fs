import { Button, ButtonProps } from "@mui/material";
import { useTranslation } from "react-i18next";

type FsButtonProps = ButtonProps & {
  i18nKey: string;
};

const FsButton = ({ i18nKey, ...rest }: FsButtonProps) => {
  const { t } = useTranslation();
  return <Button {...rest}>{t(i18nKey)}</Button>;
};

export default FsButton;
