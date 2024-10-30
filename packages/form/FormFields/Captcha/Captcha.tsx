import { useEffect, useState } from 'react';
import {
  Box,
  CircularProgress,
  IconButton,
  InputAdornment,
} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import { FsInput } from '../Input';
import type { ControllerProps } from 'react-hook-form';
import { FsTooltip } from '@fs/core';

type FsCaptchaProps = {
  name: string;
  i18nKey: string;
  rules?: ControllerProps['rules'];
  setCaptchaGuid: (capthcaGuid: string) => void;
};

const Captcha = ({ i18nKey, name, rules }: FsCaptchaProps) => {
  const mockCaptcha =
    'iVBORw0KGgoAAAANSUhEUgAAAFAAAAAjCAYAAAADp43CAAAABHNCSVQICAgIfAhkiAAAAhNJREFUaIHlWbu2gyAQxBx7v47/s0+Rb7uFdW6lh+A+ZnEhYKZLwAWG2QcwvbbtHQT8PZ9S84ElRqjf3TBLjSl5O0EUoUuMp/9/hdCJUyBFHtdPa9dsjAyVwNKFS65/JzJPLowqDwXl+ndS5YNruLq4JUbVBpqgesaHAvMFcQmjBFISoqDF1l5wxMDUrbRFWheWu6yWsbnxeyT0ROAOarLW+MjFutwOZ9d7I/M5eGwIWQdyhhF1hmBPEtJ4lN3ScWpgTifiMRm0LuTGktqtcZSzm/93Zc3Tuq5HHYhmzdzNdmVy31uTkUSiZbMRoq8KRjzKaZNJSUPJQyacKs2aUNINpexZYiyC6bVtb0TKFhVRi9Dsa9DG56oIjjwvQAq0ELH39Y6r6P/eJykNsyRjlLiaNzGS8qT6MldeLTLnVPIlFwCtyOPctfYcNHzEQAqWuNiCPK1/jZOUhNnTYOv4w5VVyHde82PvA63w3PWSjUCqhBobzF5nWbEHai5gW25hrMiJQY+GHnBTYAhy0LeeGjyVl/d1j4Fe4GKRVNzm31G/e4YrgSkkUrT6rVQpUgZGLotLxnR1YQ+k7k65NfLUimTl7rJwCyCXARTJNcuroQjkwCm1xYP/8ARyRFH42m3MCJBcu2ZWH5pArr70vjSV4HYSaY1eHuWHJTAE/HmgJtnDEdjDU2aK4QgsQU0V/gSBIdQj8R8/mMwKuAVAYAAAAABJRU5ErkJggg==';
  const [captcha, _setCaptcha] = useState(
    `data:image/png;base64,${mockCaptcha}`
  );
  const isLoading = false;
  const getCaptcha = () => {
    console.log('mutate for base64 image');
  };
  useEffect(() => {
    getCaptcha();
  }, []);
  const handleRefresh = () => {
    getCaptcha();
  };

  return (
    <FsInput
      name={name}
      i18nKey={i18nKey}
      rules={rules}
      onlyNumbers={true}
      maxLength={4}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Box display="flex" alignItems="center" gap={1}>
              <FsTooltip i18nKey={'REFRESH_CAPTCHA'}>
                <IconButton onClick={handleRefresh} edge="end" size="small">
                  <RefreshIcon />
                </IconButton>
              </FsTooltip>
              {isLoading ? (
                <CircularProgress />
              ) : (
                <img
                  src={captcha}
                  alt={'captcha Image'}
                  style={{
                    height: '3.4rem',
                  }}
                />
              )}
            </Box>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Captcha;
