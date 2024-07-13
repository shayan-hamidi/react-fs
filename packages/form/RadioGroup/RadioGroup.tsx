import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
} from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type FsRadioGroupProps = Omit<RadioGroupProps, "children"> & {
  i18nKey: string;
  name: string;
  list: { label: string; value: string | boolean }[];
};

const FsRadioGroup = ({ name, i18nKey, list, ...rest }: FsRadioGroupProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field }) => {
        return (
          <>
            <FormLabel>{t(i18nKey)}</FormLabel>
            <RadioGroup {...field} {...rest}>
              {list.map(({ label, value }, index) => (
                <FormControlLabel
                  sx={{ width: "fit-content" }}
                  key={index}
                  value={value}
                  control={<Radio />}
                  label={t(label)}
                />
              ))}
            </RadioGroup>
          </>
        );
      }}
    />
  );
};

export default FsRadioGroup;
