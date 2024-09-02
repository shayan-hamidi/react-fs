import { useRef } from 'react';
import { Box, TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import { handleChange, handleKeyDown, handlePaste } from './utils';

type FsSmsVerificationProps = {
  numInputs?: number;
  name: string;
  defaultValue?: string;
};

const FsSmsVerification = ({
  numInputs = 4,
  name,
  defaultValue,
}: FsSmsVerificationProps) => {
  const { control, setValue, getValues } = useFormContext();
  const refs = useRef<(HTMLInputElement | null)[]>(Array(numInputs).fill(null));

  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      gap={2}
      sx={{ direction: 'rtl' }}
    >
      {Array.from({ length: numInputs }, (_, index) => (
        <Controller
          key={index}
          name={`${name}[${index}]`}
          control={control}
          defaultValue={defaultValue || ''}
          render={({ field }) => (
            <TextField
              {...field}
              inputRef={(el) => (refs.current[index] = el)}
              type="tel"
              inputProps={{
                maxLength: 1,
                pattern: '\\d*',
                style: { width: '22px', height: '18px' },
              }}
              onChange={handleChange(index, setValue, numInputs, refs, name)}
              onKeyDown={handleKeyDown(index, getValues, setValue, refs, name)}
              onPaste={handlePaste(numInputs, setValue, refs, name)}
            />
          )}
        />
      ))}
    </Box>
  );
};

export default FsSmsVerification;
