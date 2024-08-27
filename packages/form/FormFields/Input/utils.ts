import { type ControllerRenderProps, type FieldValues } from 'react-hook-form';

const formatNumberWithSeparator = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const parseNumberValue = (value: string) => {
  return value.replace(new RegExp(`\\${','}`, 'g'), '');
};

const inputOnChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  onlyNumbers?: boolean,
  field?: ControllerRenderProps<FieldValues, string>,
  maxLength?: number
) => {
  let rawValue = parseNumberValue(e.target.value);

  if (!!maxLength && rawValue.length > maxLength) {
    rawValue = rawValue.substring(0, maxLength);
  }

  if (!onlyNumbers || /^\d*$/.test(rawValue)) {
    field!.onChange(rawValue);
  }
};

const inputValue = (
  field: ControllerRenderProps<FieldValues, string>,
  onlyNumbers?: boolean
) =>
  onlyNumbers ? formatNumberWithSeparator(field.value.toString()) : field.value;

export { formatNumberWithSeparator, inputOnChange, inputValue };
