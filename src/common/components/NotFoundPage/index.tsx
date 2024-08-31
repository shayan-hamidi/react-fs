import React from 'react';
import { Box, Grid } from '@mui/material';
import { FsTypography } from '@fs/core';

type CoolMessageProps = {
  message: string;
};

const CoolMessage: React.FC<CoolMessageProps> = ({ message }) => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <FsTypography i18nKey={message} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoolMessage;
