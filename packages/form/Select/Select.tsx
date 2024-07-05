import { Select, SelectProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

const FsSelect = ({
  name,
  selectProps,
}: {
  name: string;
  selectProps?: SelectProps;
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Select {...field} {...selectProps} label={name} fullWidth />
      )}
    />
  );
};
export default FsSelect;
