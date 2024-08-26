import { Chip, type ChipProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsChipProps = Omit<ChipProps, 'label'> & {
  i18nkey: string;
};

const FsChip = ({ i18nkey, ...rest }: FsChipProps) => {
  const { t } = useTranslation();
  return <Chip label={t(i18nkey)} {...rest} />;
};

export default FsChip;
