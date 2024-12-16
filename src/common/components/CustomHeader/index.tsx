import { FsTypography } from '@fs/core';
import { Grid, SxProps } from '@mui/material';
import { PropsWithChildren } from 'react';

const CustomHeader = ({
  title,
  icon,
  sx,
  children,
}: {
  title: string;
  icon: JSX.Element;
  sx?: SxProps;
} & PropsWithChildren) => (
  <Grid
    mb={4}
    container
    sx={sx}
    alignItems={'center'}
    justifyContent={'space-between'}
  >
    <Grid item display={'flex'} alignItems={'center'} gap={1}>
      {icon}
      <FsTypography i18nKey={title} variant="h6" fontWeight={'500'} />
    </Grid>
    {children}
  </Grid>
);

export default CustomHeader;
