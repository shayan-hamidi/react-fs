import { Button, ButtonProps, TooltipProps } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FsTooltip } from "../Tooltip";

type FsButtonProps = ButtonProps & {
  i18nKey: string;
  tooltipProps?: Omit<TooltipProps, "title" | "children"> & {
    i18nKey: string;
  };
};

const FsButton = ({ i18nKey, tooltipProps, ...rest }: FsButtonProps) => {
  const { t } = useTranslation();
  return tooltipProps ? (
    <FsTooltip {...tooltipProps}>
      <Button {...rest}>{t(i18nKey)}</Button>
    </FsTooltip>
  ) : (
    <Button {...rest}>{t(i18nKey)}</Button>
  );
};

export default FsButton;
