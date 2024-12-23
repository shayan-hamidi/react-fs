import { Box, TextField } from '@mui/material';
import { useMemo, useRef } from 'react';
import {
  Controller,
  useFormContext,
  useWatch,
  type ControllerProps,
} from 'react-hook-form';
import ErrorMessage from '../../ErrorMessage';
import { handleChange, handleKeyDown, handlePaste } from './utils';

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
    formState: { isSubmitted },
  } = useFormContext();
  const refs = useRef<(HTMLInputElement | null)[]>(Array(numInputs).fill(null));

  const value: string[] = useWatch({ name });
  const hasError = useMemo(() => {
    const isNotValid =
      (isSubmitted && !value) || (value && value?.some((i) => i === ''));
    return isNotValid;
  }, [value]);

  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'end'}
        flexDirection={'column'}
        gap={2}
        sx={(theme) => ({ direction: theme.direction })}
      >
        <Box display={'flex'} justifyContent={'center'} gap={2}>
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
                    style: {
                      width: '1.8rem',
                      height: '1.8rem',
                      textAlign: 'center',
                    },
                  }}
                  onChange={handleChange(
                    index,
                    setValue,
                    numInputs,
                    refs,
                    name
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
        {isSubmitted && (!value || hasError) && (
          <Box dir="rtl">
            <ErrorMessage i18nKey={String(rules?.required)} />
          </Box>
        )}
      </Box>
    </>
  );
};

export default FsSmsVerification;
