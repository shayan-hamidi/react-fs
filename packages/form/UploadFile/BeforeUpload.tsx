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
      const names = Array.from(files).map((file) => file.name);
      setFileNames(names);
    }
  };
  return (
    <Box
      onDrop={(e) => {
        eventHandler(e);
        handleFiles(e.dataTransfer.files);
        field.onChange(e.dataTransfer.files);
      }}
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
          onChange={(e) => {
            handleFiles(e.target.files);
            field.onChange(e.target.files);
          }}
        />
        Drag & Drop files here, or click to select files
      </FsButton>
    </Box>
  );
};

export default BeforeUpload;
