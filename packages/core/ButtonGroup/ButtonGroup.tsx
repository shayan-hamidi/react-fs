import { ButtonGroup, ButtonGroupProps } from "@mui/material";

export default function FsButtonGroup({
  children,
  ...rest
}: ButtonGroupProps) {
  return (
    <ButtonGroup {...rest} aria-label="button group">
      {children}
    </ButtonGroup>
  );
}
