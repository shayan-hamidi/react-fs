import ErrorMessage from '../../ErrorMessage';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectProps,
} from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';

type TMenuItems = { value: number | string; label: string }[];
type FsSelectProps = Omit<SelectProps, 'label' | 'children' | 'name'> & {
  i18nKey: string;
  name: string;
  items: TMenuItems;
  rules?: ControllerProps['rules'];
  defaultValue?: string | number | boolean;
};

const FsSelect = ({
  name,
  i18nKey,
  items,
  rules,
  defaultValue,
  ...rest
}: FsSelectProps) => {
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
          <FormControl fullWidth>
            <InputLabel id={name}>{t(i18nKey)}</InputLabel>
            <Select {...field} labelId={name} label={t(i18nKey)} {...rest}>
              {items.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {t(label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};
export default FsSelect;
