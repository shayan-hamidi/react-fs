import ErrorMessage from "../../ErrorMessage";
import { Box, Slider, SliderProps } from "@mui/material";
import { Controller, ControllerProps, useFormContext } from "react-hook-form";
import { useExtractErrorInfo } from "../../useExtractErrorInfo";

type FsRangeSliderProps = SliderProps & {
  name: string;
  defaultValue?: string | number;
  rules?: ControllerProps["rules"];
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
