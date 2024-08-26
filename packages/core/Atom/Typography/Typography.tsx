import { Typography, type TypographyProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsTypographyProps = TypographyProps & {
  i18nKey: string;
};

const FsTypography = ({
  component = 'p',
  i18nKey,
  ...rest
}: FsTypographyProps) => {
  const { t } = useTranslation();
  return (
    <Typography component={component} {...rest}>
      {t(i18nKey)}
    </Typography>
  );
};

export default FsTypography;
