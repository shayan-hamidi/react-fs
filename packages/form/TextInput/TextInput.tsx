import { TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const FsTextInput = ({
  name,
  textFieldProps,
}: {
  name: string;
  textFieldProps?: TextFieldProps;
}) => {
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
          fullWidth
        />
      )}
    />
  );
};
export default FsTextInput;
