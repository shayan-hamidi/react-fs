import { Container, Paper, Typography } from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { FsTextInput } from "@fs/form";
import { FsButton } from "../../../packages/core/Button";

const SignUp = () => {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FsTextInput name="UserName" i18nKey="" />
            <FsTextInput name="email" i18nKey="email" />
            <FsTextInput name="password" i18nKey="password" />
            <FsTextInput name="rePassword" i18nKey="rePassword" />
            <FsButton
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              i18nKey="Submit"
            />
          </form>
        </FormProvider>
      </Paper>
    </Container>
  );
};
export default SignUp;
