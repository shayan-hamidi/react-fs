import { Button, CircularProgress, type ButtonProps } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FsTooltip, type FsTooltipProps } from '../Tooltip';

type FsButtonProps = ButtonProps & {
  i18nKey?: string;
  loading?: boolean;
  tooltipProps?: Omit<FsTooltipProps, 'children'>;
};

const FsButtonTemplate = ({
  i18nKey = '',
  children,
  loading,
  disabled,
  startIcon,
  endIcon,
  ...rest
}: Omit<FsButtonProps, 'tooltipProps'>) => {
  const { t } = useTranslation();

  return (
    <Button
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : undefined}
      endIcon={!loading ? endIcon : undefined}
      {...rest}
    >
      {loading ? (
        <CircularProgress color="inherit" size={'1.5em'} />
      ) : (
        <>
          {children}
          {t(i18nKey)}
        </>
      )}
    </Button>
  );
};

const FsButton = ({ tooltipProps, ...rest }: FsButtonProps) => {
  return tooltipProps ? (
    <FsTooltip {...tooltipProps}>
      <FsButtonTemplate {...rest} />
    </FsTooltip>
  ) : (
    <FsButtonTemplate {...rest} />
  );
};

export default FsButton;
