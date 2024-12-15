import { Chip, Skeleton, type ChipProps } from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsChipProps = Omit<ChipProps, 'label'> & {
  i18nkey: string;
  isLoading?: boolean;
};

const FsChip = ({ i18nkey, isLoading, ...rest }: FsChipProps) => {
  const { t } = useTranslation();
  return isLoading ? (
    <Skeleton width={'3rem'} />
  ) : (
    <Chip label={t(i18nkey)} {...rest} />
  );
};

export default FsChip;
