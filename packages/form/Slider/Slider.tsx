import { Slider, SliderProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type FsRangeSliderProps = SliderProps & {
  name: string;
};

const FsRangeSlider = ({ name, ...rest }: FsRangeSliderProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Slider valueLabelDisplay="auto" {...field} {...rest} />
      )}
    />
  );
};
export default FsRangeSlider;
