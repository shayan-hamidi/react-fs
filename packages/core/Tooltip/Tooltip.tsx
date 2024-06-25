import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

type FsTooltipProps = Omit<TooltipProps, "title"> & {
  i18nKey: string;
};

export default function FsTooltip({
  children,
  i18nKey,
  ...rest
}: FsTooltipProps) {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(i18nKey)} {...rest}>
      {children}
    </Tooltip>
  );
}
