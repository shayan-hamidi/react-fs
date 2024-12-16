import { FsTypography } from '@fs/core';
import { Grid } from '@mui/material';

const Dahboard = () => {
  return (
    <Grid container height={'50DVH'} justifyContent={'center'}>
      <Grid item display={'flex'} alignItems={'center'}>
        <FsTypography
          variant="h1"
          i18nKey={'_HOME.WELCOME'}
          fontSize={80}
          className="typing-effect"
        />
      </Grid>
    </Grid>
  );
};

export default Dahboard;
