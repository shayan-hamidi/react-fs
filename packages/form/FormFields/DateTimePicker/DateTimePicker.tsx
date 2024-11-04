import { Box } from '@mui/material';
import { AdapterMomentJalaali } from '@mui/x-date-pickers/AdapterMomentJalaali';
import {
  DateTimePicker,
  type DateTimePickerProps,
} from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import moment, { type Moment } from 'moment-jalaali';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import ErrorMessage from '../../ErrorMessage';

type FsTimePickerProps = Omit<
  DateTimePickerProps<Moment>,
  'value' | 'onChange'
> & {
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

  const formattedDate = (date: Moment | null) =>
    date ? date.format('jYYYY-MM-DDTHH:mm:ss') : '';

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
              <DateTimePicker
                label={t(i18nKey)}
                {...rest}
                onChange={(date) => {
                  field.onChange(formattedDate(date));
                }}
                ampm={false}
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
