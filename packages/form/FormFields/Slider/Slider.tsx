import ErrorMessage from '../../ErrorMessage';
import { Box, Slider, type SliderProps } from '@mui/material';
import {
  Controller,
  useFormContext,
  type ControllerProps,
} from 'react-hook-form';
import { useExtractErrorInfo } from '../../useExtractErrorInfo';

type FsRangeSliderProps = SliderProps & {
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps['rules'];
};

const FsRangeSlider = ({
  name,
  defaultValue,
  rules,
  ...rest
}: FsRangeSliderProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { errorI18nKey } = useExtractErrorInfo(errors, name);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || null}
      rules={rules}
      render={({ field }) => (
        <Box>
          <Slider valueLabelDisplay="auto" {...field} {...rest} />
          <ErrorMessage i18nKey={errorI18nKey} />
        </Box>
      )}
    />
  );
};
export default FsRangeSlider;
