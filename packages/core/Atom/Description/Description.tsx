import { Box, Skeleton, SxProps, useTheme } from '@mui/material';
import { PropsWithChildren } from 'react';
import { FsTypography } from '../Typography';
import { NullTextHelper } from '../../../utils/helper/IfEmpty';

type FsDescriptionProps = PropsWithChildren & {
  text?: string;
  title?: string;
  sx?: SxProps;
  isLoading?: boolean;
};
function FsDescription({
  children,
  sx,
  text,
  title,
  isLoading,
}: FsDescriptionProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        p: 2,
        borderRadius: 1.5,
        color: theme.palette.grey[600],
        border: `0.15rem dashed ${theme.palette.grey[200]}`,
        minHeight: '3rem',
        minWidth: '10.25rem',
        background: theme.palette.customColor.gradient,
        ...sx,
      }}
    >
      {isLoading ? (
        <Skeleton height={'100%'} />
      ) : (
        <>
          {title && (
            <Box
              mb={2}
              display={'flex'}
              alignItems={'center'}
              justifyContent={'space-between'}
            >
              <FsTypography fontWeight={'500'} i18nKey={title} />
            </Box>
          )}
          <Box>
            {children || <FsTypography i18nKey={text || NullTextHelper} />}
          </Box>
        </>
      )}
    </Box>
  );
}

export default FsDescription;
