import { FormProvider } from "react-hook-form";
import { ReactNode } from "react";

type FsFormProviderProps = {
  children: ReactNode;
};
const FsFormProvider = ({ children }: FsFormProviderProps) => {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default FsFormProvider;
