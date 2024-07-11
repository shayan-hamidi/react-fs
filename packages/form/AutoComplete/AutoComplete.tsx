import { Autocomplete, AutocompleteProps } from "@mui/material";
import { FsTextInput } from "../TextInput";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TOptions = { value: string; label: string };

type FsAutoCompleteProps<TMultiple extends boolean | undefined> = Omit<
  AutocompleteProps<TOptions, TMultiple, false, false>,
  "renderInput" | "options"
> & {
  i18nKey: string;
  name: string;
  options: TOptions[];
  multiple?: TMultiple;
};

function FsAutoComplete<TMultiple extends boolean | undefined>({
  name,
  i18nKey,
  options,
  multiple,
  ...rest
}: FsAutoCompleteProps<TMultiple>) {
  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={multiple ? [] : undefined}
      render={({ field: { onChange, value, ref } }) => (
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
            <FsTextInput {...params} name={name} i18nKey={t(i18nKey)} />
          )}
        />
      )}
    />
  );
}

export default FsAutoComplete;
