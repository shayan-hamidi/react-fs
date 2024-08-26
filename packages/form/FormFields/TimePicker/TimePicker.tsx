import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali';
import {
  TimePicker,
  type TimePickerProps,
} from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { type Moment } from 'moment-jalaali';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import ErrorMessage from '../../ErrorMessage';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';

type FsTimePickerProps = TimePickerProps<Moment> & {
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  defaultValue?: Date;
};

const FsTimePicker = ({
  rules,
  name,
  i18nKey,
  defaultValue,
  ...rest
}: FsTimePickerProps) => {
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
            <TimePicker label={t(i18nKey)} {...field} {...rest} />
            <ErrorMessage i18nKey={errorI18nKey} />
          </Box>
        </LocalizationProvider>
      )}
    />
  );
};
export default FsTimePicker;
