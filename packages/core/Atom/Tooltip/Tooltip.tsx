import Tooltip, { type TooltipProps } from '@mui/material/Tooltip';
import { useTranslation } from 'react-i18next';

type FsTooltipProps = Omit<TooltipProps, 'title'> & {
  i18nKey: string;
};

const FsTooltip = ({ children, i18nKey, ...rest }: FsTooltipProps) => {
  const { t } = useTranslation();
  return (
    <Tooltip title={t(i18nKey)} {...rest}>
      {children}
    </Tooltip>
  );
};

export default FsTooltip;
