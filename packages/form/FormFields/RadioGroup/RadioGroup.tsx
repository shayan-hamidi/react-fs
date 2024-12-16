import ErrorMessage from '../../ErrorMessage';
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  type SxProps,
  type RadioGroupProps,
} from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';

type FsRadioGroupProps = Omit<RadioGroupProps, 'children'> & {
  i18nKey?: string;
  rules?: ControllerProps['rules'];
  name: string;
  list: { label: string; value: string | boolean; disabled?: boolean }[];
  defaultValue?: string | number | boolean;
  containerStyles?: SxProps;
};

const FsRadioGroup = ({
  name,
  rules,
  i18nKey = '',
  containerStyles,
  list,
  defaultValue,
  ...rest
}: FsRadioGroupProps) => {
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
      defaultValue={defaultValue || null}
      rules={rules}
      render={({ field }) => {
        return (
          <Box sx={containerStyles}>
            <FormLabel>{t(i18nKey)}</FormLabel>
            <RadioGroup
              {...field}
              {...rest}
              onChange={(e) => {
                const value =
                  e.target.value === 'true'
                    ? true
                    : e.target.value === 'false'
                    ? false
                    : e.target.value;
                field.onChange(value);
              }}
            >
              {list.map(({ label, value, disabled }, index) => (
                <FormControlLabel
                  sx={{ width: 'fit-content' }}
                  key={index}
                  value={value.toString()}
                  control={<Radio size="small" />}
                  label={t(label)}
                  disabled={disabled}
                />
              ))}
            </RadioGroup>
            <ErrorMessage i18nKey={errorI18nKey} />
          </Box>
        );
      }}
    />
  );
};

export default FsRadioGroup;
