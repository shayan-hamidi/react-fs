import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali';
import {
  DatePicker,
  type DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { type Moment } from 'moment-jalaali';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import { Box } from '@mui/material';
import ErrorMessage from '../../ErrorMessage';

type FsDatePickerProps = DatePickerProps<Moment> & {
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  defaultValue?: Date;
};

const FsDatePicker = ({
  rules,
  name,
  i18nKey,
  defaultValue,
  ...rest
}: FsDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);
  moment.loadPersian({ dialect: 'persian-modern' });
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || null}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
          <Box display={'flex'} flexDirection={'column'}>
            <DatePicker label={t(i18nKey)} {...field} {...rest} />
            <ErrorMessage i18nKey={errorI18nKey} />
          </Box>
        </LocalizationProvider>
      )}
    />
  );
};
export default FsDatePicker;
