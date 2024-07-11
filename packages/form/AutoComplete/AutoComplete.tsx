import { Autocomplete, AutocompleteProps } from "@mui/material";
import { FsTextInput } from "../TextInput";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

type TOptions = { value: string; label: string };

type FsAutoCompleteProps = Omit<
  AutocompleteProps<TOptions, false, false, false>,
  "renderInput" | "options"
> & {
  i18nKey: string;
  name: string;
  options: TOptions[];
};

const FsAutoComplete = ({
  name,
  i18nKey,
  options,
  ...rest
}: FsAutoCompleteProps) => {
  const { t } = useTranslation();
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={null}
      render={({ field: { onChange, value, ref } }) => (
        <Autocomplete
          {...rest}
          options={options}
          value={options.find((option) => option.value === value) || null}
          onChange={(_event, newValue: TOptions | null) => {
            onChange(newValue ? newValue.value : null);
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
};

export default FsAutoComplete;
