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

type FsInputProps = Omit<TextFieldProps, 'label' | 'name' | 'inputProps'> & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps['rules'];
  onlyNumbers?: boolean;
  maxLength?: number;
  inputProps?: Omit<TextFieldProps['inputProps'], 'min' | 'max'>;
};

const FsInput = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  onlyNumbers,
  maxLength,
  ...rest
}: FsInputProps) => {
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
            onChange={(e) => inputOnChange(e, onlyNumbers, field, maxLength)}
          />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};

export default FsInput;
