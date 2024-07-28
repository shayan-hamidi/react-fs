import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment, { type Moment } from "moment-jalaali";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FsDatePickerProps = DatePickerProps<Moment> & {
  i18nKey: string;
  rules?: ControllerProps["rules"];
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
  const { control } = useFormContext();
  const { t } = useTranslation();
  moment.loadPersian({ dialect: "persian-modern" });
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
          <DatePicker label={t(i18nKey)} {...field} {...rest} />
        </LocalizationProvider>
      )}
    />
  );
};
export default FsDatePicker;
