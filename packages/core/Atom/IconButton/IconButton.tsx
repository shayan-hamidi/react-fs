import { IconButton, IconButtonProps } from '@mui/material';
import { FsTooltip, FsTooltipProps } from '../Tooltip';

type FsIconButtonProps = IconButtonProps & {
    fsTooltipProps?: Omit<FsTooltipProps, 'children'>;
}


const FsIconButton = ({
  children,
  fsTooltipProps,
  ...rest
}: FsIconButtonProps) => {
  return fsTooltipProps ? (
    <FsTooltip {...fsTooltipProps}>
      <IconButton {...rest}>{children}</IconButton>
    </FsTooltip>
  ) : (
    <IconButton {...rest}>{children}</IconButton>
  );
};

export default FsIconButton;
