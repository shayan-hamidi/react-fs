import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
// import useTheme from '@mui/system/useTheme';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
// import { useTranslation } from "react-i18next";

type FsDatePickerProps = {
  i18nKey: string;
  rules?: ControllerProps["rules"];
  name: string;
  defaultValue?: string | number | boolean;
};

const FsDatePicker = ({ rules }: FsDatePickerProps) => {
  const { control } = useFormContext();
  // const { t } = useTranslation();
  return (
    <Controller
      name={"d"}
      control={control}
      rules={rules}
      defaultValue={null}
      render={() => (
        <div dir="rtl">
          <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
            <DateTimePicker
              label="AdapterDateFnsJalali"
              defaultValue={new Date(2022, 1, 1, 12)}
            />
          </LocalizationProvider>
        </div>
      )}
    />
  );
};
export default FsDatePicker;
