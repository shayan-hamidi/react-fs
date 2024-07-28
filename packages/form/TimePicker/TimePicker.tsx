import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { TimePicker, TimePickerProps } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import moment, { type Moment } from "moment-jalaali";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FsTimePickerProps = TimePickerProps<Moment> & {
  i18nKey: string;
  rules?: ControllerProps["rules"];
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
          <TimePicker label={t(i18nKey)} {...field} {...rest} />
        </LocalizationProvider>
      )}
    />
  );
};
export default FsTimePicker;
