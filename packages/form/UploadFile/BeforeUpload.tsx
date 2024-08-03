import { FsButton } from "@fs/core";
import { Box } from "@mui/material";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type BeforeUploadProps = {
  setFileNames: Function;
  i18nKey: string;
  accept?: string;
  field: ControllerRenderProps<FieldValues, string>;
  multiple?: boolean;
};

const BeforeUpload = ({
  setFileNames,
  i18nKey,
  accept,
  field,
  multiple,
}: BeforeUploadProps) => {
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
    if (!multiple && event.dataTransfer.files?.length > 1) {
      alert("تنها یک فایل قابل آپلود است");
    } else {
      eventHandler(event);
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
        border: "2px dashed",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <FsButton variant="contained" component="label" i18nKey={i18nKey}>
        <input
          type="file"
          hidden
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFiles(e.target.files)}
        />
        Drag & Drop files here, or click to select files
      </FsButton>
    </Box>
  );
};

export default BeforeUpload;
