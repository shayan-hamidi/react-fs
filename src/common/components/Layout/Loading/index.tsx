import { Box } from '@mui/material';
import LoadingComponent from 'src/common/components/Loading';

const Loading = () => {
  return (
    <Box
      position={'absolute'}
      top={0}
      right={0}
      width={'100%'}
      height={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Box width={'12rem'}>
        <LoadingComponent />
      </Box>
    </Box>
  );
};

export default Loading;
