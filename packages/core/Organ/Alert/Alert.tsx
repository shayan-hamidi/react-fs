import { Alert, type AlertProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsAlertProps = AlertProps & {
  i18nkey: string;
};

const FsAlert = ({ i18nkey, ...rest }: FsAlertProps) => {
  const { t } = useTranslation();

  return <Alert {...rest}>{t(i18nkey)}</Alert>;
};

export default FsAlert;
