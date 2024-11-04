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

type FsTimePickerProps = Omit<TimePickerProps<Moment>, 'value' | 'onChange'> & {
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  defaultValue?: string;
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

  const formattedTime = (time: Moment | null) =>
    time ? time.format('HH:mm:ss') : '';

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || ''}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
            <Box display={'flex'} flexDirection={'column'}>
              <TimePicker
                label={t(i18nKey)}
                {...rest}
                onChange={(time) => {
                  field.onChange(formattedTime(time));
                }}
                format="HH:mm:ss"
              />
              <ErrorMessage i18nKey={errorI18nKey} />
            </Box>
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default FsTimePicker;
