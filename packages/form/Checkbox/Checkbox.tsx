import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FsCheckboxProps = CheckboxProps & {
  i18nKey: string;
  name: string;
};

const FsCheckbox = ({ name, i18nKey, ...rest }: FsCheckboxProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormControlLabel
            control={<Checkbox {...field} {...rest} />}
            label={t(i18nKey)}
          />
        );
      }}
    />
  );
};

export default FsCheckbox;
