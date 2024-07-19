import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TMenuItems = { value: number | string; label: string }[];
type FsSelectProps = Omit<SelectProps, "label" | "children" | "name"> & {
  i18nKey: string;
  name: string;
  items: TMenuItems;
};

const FsSelect = ({ name, i18nKey, items, ...rest }: FsSelectProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <>
          <FormControl fullWidth>
            <InputLabel id={name}>{t(i18nKey)}</InputLabel>
            <Select {...field} labelId={name} label={t(i18nKey)} {...rest}>
              {items.map(({ label, value }) => (
                <MenuItem key={value} value={value}>
                  {t(label)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
    />
  );
};
export default FsSelect;
