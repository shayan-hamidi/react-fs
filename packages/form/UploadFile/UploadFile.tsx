import { FsButton } from "@fs/core";
import {
    Box,
    FormControl,
    FormHelperText
} from "@mui/material";
import { useState } from "react";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useExtractErrorInfo } from "../useExtractErrorInfo";

type FsUploadFileProps = {
  i18nKey: string;
  rules?: ControllerProps["rules"];
  name: string;
  accept?: string;
  multiple?: boolean;
};

const FsUploadFile = ({
  name,
  rules,
  i18nKey,
  accept,
  multiple,
}: FsUploadFileProps) => {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { t } = useTranslation();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <Box>
            <FormControl error={!!errors[name]}>
              <FsButton  variant="contained" component="label" i18nKey={i18nKey}>
                <input
                  type="file"
                  hidden
                  accept={accept}
                  multiple={multiple}
                  onChange={(e) => {
                    handleFileChange(e);
                    field.onChange(e.target.files);
                  }}
                />
              </FsButton>
              {selectedFiles && (
                <Box>
                  {Array.from(selectedFiles).map((file, index) => (
                    <FormHelperText key={index}>{file.name}</FormHelperText>
                  ))}
                </Box>
              )}
              <FormHelperText error>{t(errorI18nKey)}</FormHelperText>
            </FormControl>
          </Box>
        );
      }}
    />
  );
};

export default FsUploadFile;
