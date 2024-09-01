import { UseFormSetValue, UseFormGetValues } from 'react-hook-form';

export const handleChange =
  (
    index: number,
    setValue: UseFormSetValue<any>,
    numInputs: number,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
    name: string,
    getValues: UseFormGetValues<any>,
    clearErrors: Function,
    setError: Function
  ) =>
  (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    setValue(`${name}[${index}]`, value);

    if (value && index < numInputs - 1) {
      refs.current[index + 1]?.focus();
    }
    if (!!(getValues(name) || []).every((i: any) => i)) {
      clearErrors(name);
    } 
    // if {
    //   console.count()
    //   setError(name, {
    //     message: 'پر کردن فیلد اجباری است.',
    //   });
    // }
    console.log((getValues(name) || []))
  };

export const handleKeyDown =
  (
    index: number,
    getValues: UseFormGetValues<any>,
    setValue: UseFormSetValue<any>,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
    name: string
  ) =>
  (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && !getValues(`${name}[${index}]`)) {
      if (index > 0) {
        setValue(`${name}[${index - 1}]`, '');
        refs.current[index - 1]?.focus();
      }
    }
  };

export const handlePaste =
  (
    numInputs: number,
    setValue: UseFormSetValue<any>,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>,
    name: string
  ) =>
  (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const pasteData = event.clipboardData
      .getData('text')
      .slice(0, numInputs)
      .replace(/\D/g, '');
    pasteData.split('').forEach((char, idx) => {
      setValue(`${name}[${idx}]`, char);
    });

    // Focus the last input
    const lastInputIndex = Math.min(pasteData.length, numInputs) - 1;
    refs.current[lastInputIndex]?.focus();
  };
