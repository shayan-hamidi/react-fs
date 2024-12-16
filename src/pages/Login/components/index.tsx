import { FsButton, FsTypography, useAlert } from '@fs/core';
import { FsCaptcha, FsFormProvider, FsInput } from '@fs/form';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import defaultLBg from 'src/assets/images/default-L-login-bg.jpg';
import defaultDBg from 'src/assets/images/default-D-login-bg.jpg';
import purpleLBg from 'src/assets/images/purple-L-login-bg.jpg';
import purpleDBg from 'src/assets/images/purple-D-login-bg.jpg';
import yellowLBg from 'src/assets/images/yellow-L-login-bg.jpg';
import yellowDBg from 'src/assets/images/yellow-D-login-bg.jpg';
import brownLBg from 'src/assets/images/brown-L-login-bg.jpg';
import brownDBg from 'src/assets/images/brown-D-login-bg.jpg';
import greenLBg from 'src/assets/images/green-L-login-bg.jpg';
import greenDBg from 'src/assets/images/green-D-login-bg.jpg';
import blueLBg from 'src/assets/images/blue-L-login-bg.jpg';
import blueDBg from 'src/assets/images/blue-D-login-bg.jpg';
import logo from 'src/assets/images/logo.png';
import { Footer } from 'src/common/components/Layout';
import { useFsTheme } from '@fs/utils';

const Login = () => {
  const [_captchaGuid, setCaptchaGuid] = useState('');

  const { triggerAlert } = useAlert();
  const methods = useForm();
  const navigate = useNavigate();
  const { mode, themeTemplate } = useFsTheme();
  const { t } = useTranslation();
  const onSubmit = () => {
    navigate('/');
    triggerAlert('ورود با موفقیت انجام شد', 2000);
  };
  const getLoginBg = () => {
    if (mode === 'light') {
      switch (themeTemplate) {
        case 'default':
          return defaultLBg;
        case 'blue':
          return blueLBg;
        case 'brown':
          return brownLBg;
        case 'green':
          return greenLBg;
        case 'purple':
          return purpleLBg;
        case 'yellow':
          return yellowLBg;
        default:
          return defaultLBg;
      }
    } else {
      switch (themeTemplate) {
        case 'default':
          return defaultDBg;
        case 'blue':
          return blueDBg;
        case 'brown':
          return brownDBg;
        case 'green':
          return greenDBg;
        case 'purple':
          return purpleDBg;
        case 'yellow':
          return yellowDBg;
        default:
          return defaultDBg;
      }
    }
  };
  return (
    <Box
      sx={{
        backgroundImage: `url(${getLoginBg()})`,
        backgroundSize: '100% 50vh',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Container
        sx={{
          flexGrow: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        maxWidth="sm"
      >
        <Paper
          elevation={5}
          style={{
            padding: '1.25rem',
            textAlign: 'center',
            borderRadius: '0.75rem',
          }}
        >
          <img src={logo} alt="site logo" width={150} />
          <FsTypography
            i18nKey={'LOGIN_IN_SYSTEM'}
            color={'primary'}
            fontWeight={'bold'}
            variant="h5"
            mb={2}
          />
          <FsFormProvider
            formProps={{ onSubmit: methods.handleSubmit(onSubmit) }}
            methods={methods}
            name={'logInForm'}
          >
            <Grid container gap={1}>
              <Grid item xs={12}>
                <FsInput
                  name="userName"
                  i18nKey="_LOGIN.USER_NAME"
                  rules={{ required: t('FEILD_REQUIRED_MSG') }}
                />
              </Grid>
              <Grid item xs={12}>
                <FsInput
                  name="password"
                  i18nKey="_LOGIN.PASSWORD"
                  rules={{ required: t('FEILD_REQUIRED_MSG') }}
                />
              </Grid>
              <Grid item xs={12}>
                <FsCaptcha
                  name="captchaString"
                  i18nKey="_LOGIN.CAPTCHA"
                  rules={{ required: t('FEILD_REQUIRED_MSG') }}
                  setCaptchaGuid={setCaptchaGuid}
                />
              </Grid>
              <Grid item xs={12}>
                <FsButton
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  i18nKey="LOGIN"
                />
              </Grid>
            </Grid>
          </FsFormProvider>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};
export default Login;
