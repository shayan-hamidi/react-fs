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
import ClearButton from '../../ClearButton';

type FsTimePickerProps = Omit<TimePickerProps<Moment>, 'value' | 'onChange'> & {
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  defaultValue?: string;
  clearButton?: boolean;
};

const FsTimePicker = ({
  rules,
  name,
  i18nKey,
  defaultValue,
  clearButton = true,
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
            <Box
              display={'flex'}
              flexDirection={'column'}
              position={'relative'}
            >
              {clearButton && field.value && <ClearButton field={field} />}
              <TimePicker
                label={t(i18nKey)}
                {...rest}
                {...field}
                value={
                  field.value ? moment(field.value, 'HH:mm:ss') : undefined
                }
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
