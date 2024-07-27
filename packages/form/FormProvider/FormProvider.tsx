import { FormHTMLAttributes, ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

type FsFormProviderProps = {
  children: ReactNode;
  formProps: FormHTMLAttributes<HTMLFormElement>;
  methods: UseFormReturn<FieldValues, any, undefined>;
};
const FsFormProvider = ({
  children,
  methods,
  formProps,
}: FsFormProviderProps) => {
  return (
    <FormProvider {...methods}>
      <form {...formProps}>{children}</form>
    </FormProvider>
  );
};

export default FsFormProvider;
