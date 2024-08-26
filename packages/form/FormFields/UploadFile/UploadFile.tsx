import ErrorMessage from '../../ErrorMessage';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import AfterUpload from './AfterUpload';
import BeforeUpload from './BeforeUpload';

type FsUploadFileProps = {
  i18nKey?: string;
  rules?: ControllerProps['rules'];
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
    setValue,
    getValues,
    setError,
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
          <Box display={'block'}>
            {!(fileNames.length > 0) ? (
              <>
                <BeforeUpload
                  setFileNames={setFileNames}
                  i18nKey={i18nKey}
                  accept={accept}
                  field={field}
                  multiple={multiple}
                  setError={setError}
                  name={name}
                />
                <ErrorMessage i18nKey={errorI18nKey} />
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
