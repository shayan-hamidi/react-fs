import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FsTextFieldProps = Omit<TextFieldProps, "label" | "name"> & {
  i18nKey: string;
  name: string;
};

const FsTextInput = ({ name, i18nKey, ...rest }: FsTextFieldProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField {...field} label={t(i18nKey)} fullWidth {...rest} />
      )}
    />
  );
};
export default FsTextInput;
