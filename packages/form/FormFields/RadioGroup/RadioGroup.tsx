import ErrorMessage from '../../ErrorMessage';
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
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
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  list: { label: string; value: string | boolean }[];
  defaultValue?: string | number | boolean;
};

const FsRadioGroup = ({
  name,
  rules,
  i18nKey,
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
          <Box>
            <FormLabel>{t(i18nKey)}</FormLabel>
            <RadioGroup {...field} {...rest}>
              {list.map(({ label, value }, index) => (
                <FormControlLabel
                  sx={{ width: 'fit-content' }}
                  key={index}
                  value={value}
                  control={<Radio />}
                  label={t(label)}
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
