import { FsTypography } from '@fs/core';
import { ErrorOutlineOutlined } from '@mui/icons-material';
import { Box } from '@mui/material';

const ErrorMessage = ({ i18nKey }: { i18nKey: string }) => (
  <Box
    mt={0.5}
    minHeight={'1.2rem'}
    display={'flex'}
    alignItems={'center'}
    fontSize={'.75rem'}
    gap={1}
  >
    {i18nKey && (
      <Box display={'flex'} alignItems={'center'} gap={1}>
        <ErrorOutlineOutlined color="error" fontSize="inherit" />
        <FsTypography
          component={'span'}
          variant="inherit"
          i18nKey={i18nKey}
          color={'error'}
          display={'block'}
          width={'100%'}
          textAlign={'justify'}
        />
      </Box>
    )}
  </Box>
);
export default ErrorMessage;
