import { FsButton, FsTypography } from '@fs/core';
import { Box } from '@mui/material';
import {
  FieldValues,
  UseFormSetError,
  type ControllerRenderProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type BeforeUploadProps = {
  setFileNames: Function;
  i18nKey?: string;
  accept?: string;
  field: ControllerRenderProps<FieldValues, string>;
  multiple?: boolean;
  setError: UseFormSetError<FieldValues>;
  name: string;
};

const BeforeUpload = ({
  setFileNames,
  i18nKey,
  accept,
  field,
  multiple,
  name,
  setError,
}: BeforeUploadProps) => {
  const { t } = useTranslation();
  const eventHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleFiles = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      const names = fileArray.map((file) => file.name);
      setFileNames(names);
      field.onChange(fileArray);
    }
  };
  const onDrop = (event: React.DragEvent<HTMLDivElement>) => {
    eventHandler(event);
    if (!multiple && event.dataTransfer.files?.length > 1) {
      setError(name, {
        message: t('UPLOAD_NOT_MULTIPLE_ERROR_MSG'),
        type: 'pattern',
      });
    } else {
      handleFiles(event.dataTransfer.files);
    }
  };

  return (
    <Box
      onDrop={onDrop}
      onDragOver={eventHandler}
      onDragEnter={eventHandler}
      onDragLeave={eventHandler}
      sx={{
        border: '0.125rem dashed',
        borderRadius: '0.5rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1.25rem',
      }}
    >
      <FsButton variant="contained" component="label">
        <input
          type="file"
          hidden
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <FsTypography i18nKey={i18nKey || 'UPLOAD_FS_HINT'} />
      </FsButton>
    </Box>
  );
};

export default BeforeUpload;
