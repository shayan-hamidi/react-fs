import { FsIconButton } from '@fs/core';
import type { SxProps } from '@mui/material';
import { ClearIcon } from '@mui/x-date-pickers/icons';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

const ClearButton = ({
  field,
  iconButtonSx,
}: {
  field: ControllerRenderProps<FieldValues, string>;
  iconButtonSx?: SxProps;
}) => {
  const handleClear = (field: ControllerRenderProps<FieldValues, string>) => {
    field.onChange(undefined);
  };
  return (
    <FsIconButton
      size="small"
      onClick={() => handleClear(field)}
      sx={{
        position: 'absolute',
        top: 4,
        right: 35,
        zIndex: 2,
        ...iconButtonSx,
      }}
    >
      <ClearIcon fontSize="small" />
    </FsIconButton>
  );
};

export default ClearButton;
