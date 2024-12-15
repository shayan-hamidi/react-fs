import { FsButton, FsTypography, useAlert } from '@fs/core';
import { FsCaptcha, FsFormProvider, FsInput } from '@fs/form';
import { useService } from '@fs/utils';
import { Box, Container, Grid, Paper } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import backgroundLogin from 'src/assets/images/background-login.jpg';
import logo from 'src/assets/images/logo.png';
import { Footer } from 'src/common/components/Layout';
import type { LoginServiceActions } from '../loginService';

const Login = () => {
  const [captchaGuid, setCaptchaGuid] = useState('');

  const { triggerAlert } = useAlert();
  const methods = useForm();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { mutate, isLoading } = useService<
    LoginServiceActions,
    'login',
    'login'
  >('login', 'login');

  const onSubmit = (data: any) => {
    mutate(
      { ...data, captchaGuid },
      {
        onSuccess() {
          navigate('/');
          triggerAlert('ورود با موفقیت انجام شد', 2000);
        },
      }
    );
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundLogin})`,
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
          <img src={logo} alt="site logo" />
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
                  loading={isLoading}
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
