import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalaliV3';
import {
  DatePicker,
  type DatePickerProps,
} from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
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
import type { Moment } from 'moment-jalaali';
import moment from 'moment-jalaali';
import { isValid } from 'date-fns-jalali';

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

  const formattedDate = (date: Moment | null) => {
    const momentDate = moment.isMoment(date) ? date : moment(date);
    return momentDate.format('YYYY-MM-DD');
  };
  const internalValidate = {
    isAlpha: (value: any) => isValid(new Date(value)) || 'تاریخ نامعتبر است',
  };
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        ...rules,
        validate: {
          ...internalValidate,
          ...(rules?.validate || {}),
        },
      }}
      defaultValue={defaultValue || null}
      render={({ field }) => {
        return (
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
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
                value={field.value ? moment(field.value) : null}
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
