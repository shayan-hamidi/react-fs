import ErrorMessage from '../../ErrorMessage';
import { Box, TextField, type TextFieldProps } from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';

type FsTextFieldProps = Omit<TextFieldProps, 'label' | 'name'> & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps['rules'];
};

const FsTextInput = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  ...rest
}: FsTextFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ''}
      rules={rules}
      render={({ field }) => (
        <Box>
          <TextField {...field} label={t(i18nKey)} fullWidth {...rest} />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};
export default FsTextInput;
