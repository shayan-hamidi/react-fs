import { useEffect, useRef } from 'react';
import { Box, TextField } from '@mui/material';
import {
  useFormContext,
  Controller,
  type ControllerProps,
} from 'react-hook-form';
import { handleChange, handleKeyDown, handlePaste } from './utils';
import ErrorMessage from '../../ErrorMessage';

type FsSmsVerificationProps = {
  numInputs?: number;
  name: string;
  defaultValue?: string;
  rules?: ControllerProps['rules'];
};

const FsSmsVerification = ({
  numInputs = 4,
  name,
  defaultValue,
  rules,
}: FsSmsVerificationProps) => {
  const {
    control,
    setValue,
    getValues,
    setError,
    clearErrors,
    getFieldState,
    formState: { errors },
  } = useFormContext();

  const refs = useRef<(HTMLInputElement | null)[]>(Array(numInputs).fill(null));

  // useEffect(() => {
  //   const error = get(errors, name);
  //   console.log(error);
  //   const errorArray = (errors as unknown as any)[name] || [];
  //   const hasError = (errorArray || []).some(
  //     (error: any) => error !== undefined
  //   );

  //   if (hasError) {
  //     setError(name, {
  //       message: errorArray[0].message,
  //     });
  //     trigger(`${name}[${0}]`);
  //   } else {
  //     clearErrors(name);
  //   }
  //   console.count();
  // }, [isValidating, trigger]);
  return (
    <>
      <Box
        display={'flex'}
        width={'fit-content'}
        gap={2}
        sx={{ direction: 'rtl' }}
      >
        {Array.from({ length: numInputs }, (_, index) => (
          <Controller
            key={index}
            name={`${name}[${index}]`}
            control={control}
            defaultValue={defaultValue || ''}
            rules={rules}
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
                onChange={handleChange(
                  index,
                  setValue,
                  numInputs,
                  refs,
                  name,
                  getValues,
                  clearErrors,
                  setError
                )}
                onKeyDown={handleKeyDown(
                  index,
                  getValues,
                  setValue,
                  refs,
                  name
                )}
                onPaste={handlePaste(numInputs, setValue, refs, name)}
              />
            )}
          />
        ))}
      </Box>
      <ErrorMessage i18nKey={((errors as any)[name] || [])[0]?.message || ''} />
    </>
  );
};

export default FsSmsVerification;
