import { FormHTMLAttributes, ReactNode } from "react";
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form";

type FsFormProviderProps = {
  children: ReactNode;
  formProps: FormHTMLAttributes<HTMLFormElement>;
  methods: UseFormReturn<FieldValues, any, undefined>;
  name: string;
};
const FsFormProvider = ({
  children,
  methods,
  name,
  formProps,
}: FsFormProviderProps) => {
  return (
    <FormProvider {...methods}>
      <form data-cy={name} {...formProps}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FsFormProvider;
