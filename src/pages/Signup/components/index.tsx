import { Container, Paper, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { FsFormProvider, FsInput } from '@fs/form';
import { FsButton } from '@fs/core';

const SignUp = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

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
          Sign Up
        </Typography>
        <FsFormProvider
          formProps={{ onSubmit }}
          methods={methods}
          name={'signUpForm'}
        >
          <FsInput name="UserName" i18nKey="" />
          <FsInput name="email" i18nKey="email" />
          <FsInput name="password" i18nKey="password" />
          <FsInput name="rePassword" i18nKey="rePassword" />
          <FsButton
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            i18nKey="Submit"
          />
        </FsFormProvider>
      </Paper>
    </Container>
  );
};
export default SignUp;
