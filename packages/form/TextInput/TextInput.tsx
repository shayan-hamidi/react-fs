import { FsTypography } from "@fs/core";
import { Box, TextField, TextFieldProps } from "@mui/material";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useExtractErrorInfo } from "../useExtractErrorInfo";

type FsTextFieldProps = Omit<TextFieldProps, "label" | "name"> & {
  i18nKey: string;
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps["rules"];
};

const FsTextInput = ({
  name,
  i18nKey,
  defaultValue,
  rules,
  ...rest
}: FsTextFieldProps) => {
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
      defaultValue={defaultValue || ""}
      rules={rules}
      render={({ field }) => (
        <Box>
          <TextField {...field} label={t(i18nKey)} fullWidth {...rest} />
          <FsTypography
            component={"span"}
            variant="body2"
            i18nKey={errorI18nKey}
            color={"error"}
          />
        </Box>
      )}
    />
  );
};
export default FsTextInput;
