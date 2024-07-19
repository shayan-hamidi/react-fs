import { FsTypography } from "@fs/core";
import { Checkbox, CheckboxProps, FormControlLabel } from "@mui/material";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useExtractErrorInfo } from "../useExtractErrorInfo";

type FsCheckboxProps = CheckboxProps & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number | boolean;
  rules?: ControllerProps["rules"];
};

const FsCheckbox = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  ...rest
}: FsCheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || false}
      rules={rules}
      render={({ field }) => {
        return (
          <>
            <FormControlLabel
              control={<Checkbox {...field} {...rest} />}
              label={t(i18nKey)}
              sx={{ display: "block" }}
            />
            <FsTypography
              component={"span"}
              variant="body2"
              i18nKey={errorI18nKey}
              color={"error"}
            />
          </>
        );
      }}
    />
  );
};

export default FsCheckbox;
