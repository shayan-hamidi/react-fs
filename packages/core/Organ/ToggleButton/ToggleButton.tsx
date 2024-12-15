import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from '@mui/material';
import { FsTypography } from '../../Atom/Typography';

type FsToggleButtonGroupProps = Omit<ToggleButtonGroupProps, 'children'> & {
  items: {
    value: string;
    label: string;
    disabled?: boolean;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    toggleButtonProps?: Omit<ToggleButtonProps, 'disabled'>;
  }[];
};

const FsToggleButtonGroup = ({ items, ...rest }: FsToggleButtonGroupProps) => {
  return (
    <ToggleButtonGroup {...rest} color="primary">
      {items.map(
        ({ value, label, toggleButtonProps, endIcon, startIcon, disabled }) => (
          <ToggleButton
            key={value}
            value={value}
            disabled={disabled}
            {...toggleButtonProps}
          >
            {startIcon && startIcon}
            <FsTypography i18nKey={label} mx={1} />
            {endIcon && endIcon}
          </ToggleButton>
        )
      )}
    </ToggleButtonGroup>
  );
};
export default FsToggleButtonGroup;
