import { ButtonGroup, type ButtonGroupProps } from '@mui/material';

const FsButtonGroup = ({ children, ...rest }: ButtonGroupProps) => {
  return <ButtonGroup {...rest}>{children}</ButtonGroup>;
};
export default FsButtonGroup;
