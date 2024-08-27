import ErrorMessage from '../../ErrorMessage';
import { Box, TextField, type TextFieldProps } from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import { inputOnChange, inputValue } from './utils';

type FsTextFieldProps = Omit<TextFieldProps, 'label' | 'name'> & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps['rules'];
  onlyNumbers?: boolean;
};

const FsInput = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  onlyNumbers,
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
          <TextField
            {...field}
            label={t(i18nKey)}
            fullWidth
            {...rest}
            value={inputValue(field, onlyNumbers)}
            onChange={(e) => inputOnChange(e, onlyNumbers, field)}
          />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};

export default FsInput;
