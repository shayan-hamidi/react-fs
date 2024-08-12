import { FsModal, useModal } from '@fs/core';
import { Box } from '@mui/material';
import React from 'react';

const Test1Modal: React.FC = () => {
  const { data } = useModal('test1Modal');

  return (
    <FsModal modalKey="test1Modal">
      <Box sx={{ background: 'yellow', padding: 2 }}>
        TestModal1 - User ID: {data?.userId}
      </Box>
    </FsModal>
  );
};

export default Test1Modal;
