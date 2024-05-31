import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export default function FsTextInput({
  name,
  textFieldProps,
}: {
  name: string;
  textFieldProps?: TextFieldProps;
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <TextField
          {...field}
          {...textFieldProps}
          label={name}
          variant="outlined"
          fullWidth
          margin="normal"
        />
      )}
    />
  );
}
