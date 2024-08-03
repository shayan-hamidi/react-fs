import { FsTypography } from "@fs/core";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useExtractErrorInfo } from "../useExtractErrorInfo";
import AfterUpload from "./AfterUpload";
import BeforeUpload from "./BeforeUpload";

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
  multiple = true,
}: FsUploadFileProps) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const {
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  useEffect(() => {
    const files: FileList | File[] = getValues(name) || [];
    setFileNames(Array.from(files).map((file: File) => file.name));
  }, [getValues, name]);

  const removeFile = (fileName: string, field: { value: [] }) => {
    const newFiles = Array.from(field.value).filter(
      (file: File) => file.name !== fileName
    );
    setValue(name, newFiles);
    setFileNames(newFiles.map((file: File) => file.name));
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => {
        return (
          <Box display={"block"}>
            {!(fileNames.length > 0) ? (
              <>
                <BeforeUpload
                  setFileNames={setFileNames}
                  i18nKey={i18nKey}
                  accept={accept}
                  field={field}
                  multiple={multiple}
                />
                <FsTypography
                  component={"span"}
                  variant="body2"
                  i18nKey={errorI18nKey}
                  color={"error"}
                />
              </>
            ) : (
              <AfterUpload
                fileNames={fileNames}
                removeFile={(fileName: string) => removeFile(fileName, field)}
              />
            )}
          </Box>
        );
      }}
    />
  );
};

export default FsUploadFile;
