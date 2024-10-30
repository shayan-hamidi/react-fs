import { Container, Paper, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { FsInput } from '@fs/form';
import { FsButton } from '@fs/core';
import { useService } from '@fs/utils';
import { useEffect } from 'react';
import { type LoginServiceActions } from '../loginService';

const LogIn = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const { mutate } = useService<LoginServiceActions, 'login', 'getList'>(
    'login',
    'getList'
  );

  useEffect(() => {
    mutate();
  }, []);

  return (
    <Container
      maxWidth="sm"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper elevation={3} style={{ padding: '1.25rem', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Log In
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FsInput name="UserName" i18nKey={'UserName'} />
            <FsInput name="password" i18nKey={'password'} />
            <FsButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              i18nKey="LOGIN"
            />
          </form>
        </FormProvider>
      </Paper>
    </Container>
  );
};

export default LogIn;
