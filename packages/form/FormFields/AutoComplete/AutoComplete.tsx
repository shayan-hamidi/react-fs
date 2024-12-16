import {
  Autocomplete,
  type AutocompleteProps,
  Box,
  TextField,
} from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import ErrorMessage from '../../ErrorMessage';
import ClearButton from '../../ClearButton';

type TOptions = { value: string; label: string };

type FsAutoCompleteProps<TMultiple extends boolean | undefined> = Omit<
  AutocompleteProps<TOptions, TMultiple, true, false>,
  'renderInput' | 'options'
> & {
  i18nKey: string;
  name: string;
  options: TOptions[];
  clearButton?: boolean;
  multiple?: TMultiple;
  rules?: ControllerProps['rules'];
};

function FsAutoComplete<TMultiple extends boolean | undefined>({
  name,
  i18nKey,
  options,
  multiple,
  rules,
  clearButton = true,
  ...rest
}: FsAutoCompleteProps<TMultiple>) {
  const { t } = useTranslation();
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue={multiple ? [] : undefined}
      render={({ field }) => (
        <Box position={'relative'}>
          {clearButton && field.value && <ClearButton field={field} />}
          <Autocomplete
            {...rest}
            disableClearable
            multiple={multiple}
            options={options}
            value={
              multiple
                ? field.value &&
                  options.filter((option) => field.value.includes(option.value))
                : field.value
                ? options.find((option) => option.value === field.value)
                : null
            }
            onChange={(_event, newValue) => {
              field.onChange(
                multiple
                  ? (newValue as TOptions[]).map((item) => item.value)
                  : newValue
                  ? (newValue as TOptions).value
                  : undefined
              );
            }}
            getOptionLabel={(option) => option.label}
            ref={field.ref}
            renderInput={(params) => (
              <TextField
                {...params}
                name={`input-${name}`}
                label={t(i18nKey)}
              />
            )}
          />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
}

export default FsAutoComplete;
