import { Container, Paper, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { FsTextInput } from '@fs/form';
import { FsButton } from '@fs/core';
import { useMutation } from 'react-query';

const LogIn = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };
  // co780b6hgv5nst { mutate } = useMutation();

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
      <Paper elevation={3} style={{ padding: '20px', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Log In
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FsTextInput name="UserName" i18nKey={'UserName'} />
            <FsTextInput name="password" i18nKey={'password'} />
            <FsButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              i18nKey="settings"
            />
          </form>
        </FormProvider>
      </Paper>
    </Container>
  );
};

export default LogIn;
