import { Alert, Box, type AlertProps } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

type FsNotifiedAlertProps = AlertProps & {
  i18nkey: string;
  delay?: 2000 | 3000 | 4000 | 5000;
};

const FsNotifiedAlert = ({
  i18nkey,
  delay = 2000,
  ...rest
}: FsNotifiedAlertProps) => {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setMounted(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!mounted) {
    return null;
  }

  return (
    <Box
      zIndex={1}
      position={'fixed'}
      top={'0.7rem'}
      left={'50%'}
      className={`alert ${visible ? 'alert-enter' : 'alert-exit'}`}
    >
      <Alert
        sx={{
          transform: 'translateX(-50%)',
        }}
        {...rest}
      >
        {t(i18nkey)}
      </Alert>
    </Box>
  );
};

export default FsNotifiedAlert;
