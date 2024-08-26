import {
  Box,
  Checkbox,
  FormControlLabel,
  type CheckboxProps,
} from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import ErrorMessage from '../../ErrorMessage';

type FsCheckboxProps = CheckboxProps & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number | boolean;
  rules?: ControllerProps['rules'];
};

const FsCheckbox = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  ...rest
}: FsCheckboxProps) => {
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
      defaultValue={defaultValue || false}
      rules={rules}
      render={({ field }) => {
        return (
          <Box>
            <FormControlLabel
              control={<Checkbox {...field} {...rest} />}
              label={t(i18nKey)}
              sx={{ display: 'block' }}
            />
            <ErrorMessage i18nKey={errorI18nKey} />
          </Box>
        );
      }}
    />
  );
};

export default FsCheckbox;
