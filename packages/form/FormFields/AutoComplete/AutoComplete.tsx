import { Autocomplete, type AutocompleteProps, Box } from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FsInput } from '../TextInput';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';
import ErrorMessage from '../../ErrorMessage';

type TOptions = { value: string; label: string };

type FsAutoCompleteProps<TMultiple extends boolean | undefined> = Omit<
  AutocompleteProps<TOptions, TMultiple, false, false>,
  'renderInput' | 'options'
> & {
  i18nKey: string;
  name: string;
  options: TOptions[];
  multiple?: TMultiple;
  rules?: ControllerProps['rules'];
};

function FsAutoComplete<TMultiple extends boolean | undefined>({
  name,
  i18nKey,
  options,
  multiple,
  rules,
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
      render={({ field: { onChange, value, ref } }) => (
        <Box>
          <Autocomplete
            {...rest}
            multiple={multiple}
            options={options}
            value={
              multiple
                ? value &&
                  options.filter((option) => value.includes(option.value))
                : value
                ? options.find((option) => option.value === value)
                : null
            }
            onChange={(_event, newValue) => {
              onChange(
                multiple
                  ? (newValue as TOptions[]).map((item) => item.value)
                  : newValue
                  ? (newValue as TOptions).value
                  : undefined
              );
            }}
            getOptionLabel={(option) => option.label}
            ref={ref}
            renderInput={(params) => (
              <FsInput
                {...params}
                name={`input-${name}`}
                i18nKey={t(i18nKey)}
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
