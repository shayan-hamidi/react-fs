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
import ClearButton from '../../ClearButton';

type FsDatePickerProps = Omit<DatePickerProps<Moment>, 'value' | 'onChange'> & {
  i18nKey: string;
  rules?: ControllerProps['rules'];
  name: string;
  defaultValue?: string;
  clearButton?: boolean;
};

const FsDatePicker = ({
  rules,
  name,
  i18nKey,
  defaultValue,
  clearButton = true,
  ...rest
}: FsDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);
  moment.loadPersian({ dialect: 'persian-modern' });

  const formattedDate = (date: Moment | null) => {
    return date ? date.format('YYYY-MM-DD') : '';
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || null}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              position={'relative'}
            >
              {clearButton && field.value && <ClearButton field={field} />}
              <DatePicker
                slotProps={{
                  calendarHeader: {
                    sx: {
                      '.MuiIconButton-edgeStart,.MuiIconButton-edgeEnd': {
                        rotate:
                          import.meta.env.MODE !== 'development'
                            ? '180deg'
                            : undefined,
                      },
                    },
                  },
                }}
                label={t(i18nKey)}
                {...rest}
                {...field}
                value={field.value ? moment(field.value) : undefined}
                onChange={(date) => {
                  field.onChange(formattedDate(date));
                }}
              />
              <ErrorMessage i18nKey={errorI18nKey} />
            </Box>
          </LocalizationProvider>
        );
      }}
    />
  );
};

export default FsDatePicker;
