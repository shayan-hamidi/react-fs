import { FsTypography } from '@fs/core';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton } from '@mui/material';
import excelIcon from 'src/assets/images/files/excel.svg';
import gifIcon from 'src/assets/images/files/gif.svg';
import htmlIcon from 'src/assets/images/files/html.svg';
import jpegIcon from 'src/assets/images/files/jpeg.svg';
import jpgIcon from 'src/assets/images/files/jpg.svg';
import jsonIcon from 'src/assets/images/files/json.svg';
import movIcon from 'src/assets/images/files/mov.svg';
import mp3Icon from 'src/assets/images/files/mp3.svg';
import pdfIcon from 'src/assets/images/files/pdf.svg';
import pngIcon from 'src/assets/images/files/png.svg';
import rarIcon from 'src/assets/images/files/rar.svg';
import svgIcon from 'src/assets/images/files/svg.svg';
import txtIcon from 'src/assets/images/files/txt.svg';
import uploadFileLoadingIcon from 'src/assets/images/files/uploadFileLoading.svg';
import wordIcon from 'src/assets/images/files/word.svg';

type AfterUploadProps = {
  fileNames: string[];
  removeFile: (fileName: string) => void;
};

const AfterUpload = ({ fileNames, removeFile }: AfterUploadProps) => {
  const getFileIcon = (fileName: string) => {
    const fileType = fileName.split('.').pop()?.toLowerCase();
    switch (fileType) {
      case 'xls':
      case 'xlsx':
        return excelIcon;
      case 'gif':
        return gifIcon;
      case 'jpeg':
        return jpegIcon;
      case 'jpg':
        return jpgIcon;
      case 'mov':
        return movIcon;
      case 'mp3':
        return mp3Icon;
      case 'pdf':
        return pdfIcon;
      case 'png':
        return pngIcon;
      case 'rar':
        return rarIcon;
      case 'svg':
        return svgIcon;
      case 'html':
        return htmlIcon;
      case 'json':
        return jsonIcon;
      case 'txt':
        return txtIcon;
      case 'doc':
      case 'docx':
        return wordIcon;
      default:
        return uploadFileLoadingIcon;
    }
  };
  return (
    <Box
      sx={{
        border: '2px dashed',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Box
        display={'flex'}
        flexDirection={'column'}
        gap={1.5}
        maxHeight={'200px'}
        overflow={'auto'}
      >
        {fileNames.map((name, index) => (
          <Box key={index} display={'flex'} alignItems={'center'} gap={1.5}>
            <img width={25} src={getFileIcon(name)} />
            <FsTypography key={index} variant="body2" i18nKey={name} />
            <IconButton onClick={() => removeFile(name)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AfterUpload;
