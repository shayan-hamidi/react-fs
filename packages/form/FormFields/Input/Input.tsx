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
import ClearButton from '../../ClearButton';

export type FsInputProps = Omit<
  TextFieldProps,
  'label' | 'name' | 'inputProps'
> & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps['rules'];
  onlyNumbers?: boolean;
  maxLength?: number;
  inputProps?: Omit<TextFieldProps['inputProps'], 'min' | 'max'>;
  separator?: boolean;
  clearButton?: boolean;
};

const FsInput = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  onlyNumbers,
  maxLength,
  clearButton = true,
  separator = true,
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
        <Box position={'relative'}>
          {clearButton && field.value && (
            <ClearButton field={field} iconButtonSx={{ right: 4 }} />
          )}
          <TextField
            {...field}
            label={t(i18nKey)}
            fullWidth
            {...rest}
            value={inputValue(field, onlyNumbers, separator)}
            onChange={(e) => inputOnChange(e, onlyNumbers, field, maxLength)}
          />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};

export default FsInput;
