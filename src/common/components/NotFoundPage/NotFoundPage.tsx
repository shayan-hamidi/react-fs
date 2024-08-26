import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';
import { styled } from '@mui/system';

type CoolMessageProps = {
  message: string;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const FullScreenContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const MessageBox = styled(Grid)`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  animation: ${slideUp} 1s ease-out;
`;

const MessageText = styled(Typography)`
  font-size: 2rem;
  color: #ffffff;
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const CoolMessage: React.FC<CoolMessageProps> = ({ message }) => {
  return (
    <FullScreenContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={8} md={6}>
          <MessageBox container justifyContent="center" alignItems="center">
            <Grid item>
              <MessageText>{message}</MessageText>
            </Grid>
          </MessageBox>
        </Grid>
      </Grid>
    </FullScreenContainer>
  );
};

export default CoolMessage;
