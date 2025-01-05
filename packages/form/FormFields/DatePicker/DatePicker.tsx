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
import moment from 'moment-jalaali';
import { isValid } from 'date-fns-jalali';

type FsDatePickerProps = Omit<DatePickerProps<Date>, 'value' | 'onChange'> & {
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
  minDate = new Date('1921-03-21'),
  maxDate = new Date('2082-03-19'),
  ...rest
}: FsDatePickerProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  const formattedDate = (date: Date | null) => {
    const momentDate = moment.isMoment(date) ? date : moment(date);
    return momentDate.format('YYYY-MM-DD');
  };
  const internalValidate = {
    isAlpha: (value: any) => {
      if (value) {
        return isValid(new Date(value)) || t('INVALID_DATE');
      } else {
        return true;
      }
    },
    isWithinRange: (value: any) => {
      const parsedValue = moment(value);
      const minY = moment(minDate).format('jYYYY');
      const minM = moment(minDate).format('jMM');
      const minD = moment(minDate).format('jDD');
      const maxY = moment(maxDate).format('jYYYY');
      const maxM = moment(maxDate).format('jMM');
      const maxD = moment(maxDate).format('jDD');
      if (minDate && parsedValue.isBefore(moment(minDate), 'day')) {
        return t('MIN_DATE_ERROR', {
          minDate: `${minY}/${minM}/${minD}`,
        });
      }
      if (maxDate && parsedValue.isAfter(moment(maxDate), 'day')) {
        return t('MAX_DATE_ERROR', {
          maxDate: `${maxY}/${maxM}/${maxD}`,
        });
      }
      return true;
    },
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
                minDate={minDate}
                maxDate={maxDate}
                label={t(i18nKey)}
                {...rest}
                {...field}
                value={field.value ? new Date(field.value) : null}
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
