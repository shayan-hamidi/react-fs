import { FsTypography } from "@fs/core";
import { Box } from "@mui/material";
import { useState } from "react";
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
  multiple = false,
}: FsUploadFileProps) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const {
    control,
    formState: { errors },
    getValues
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  const removeFile = (fileName: string) => {
    setFileNames((prev) => prev.filter((name) => name !== fileName));
    console.log(getValues(name))
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
              <AfterUpload fileNames={fileNames} removeFile={removeFile} />
            )}
          </Box>
        );
      }}
    />
  );
};

export default FsUploadFile;
