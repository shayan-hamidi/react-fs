import { type FormHTMLAttributes, type ReactNode } from 'react';
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from 'react-hook-form';

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
