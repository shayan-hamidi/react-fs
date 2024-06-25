import { ButtonGroup, ButtonGroupProps } from "@mui/material";

const FsButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return (
    <ButtonGroup {...rest} aria-label="button group">
      {children}
    </ButtonGroup>
  );
};
export default FsButtonGroup;
