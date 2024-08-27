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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formProps.onSubmit && formProps.onSubmit(event);
  };
  return (
    <FormProvider {...methods}>
      <form {...formProps} data-cy={name} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};

export default FsFormProvider;
