import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from '@mui/material';
import { useState } from 'react';
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

const FsToggleButtonGroup = ({
  items,
  value: controlledValue,
  onChange,
  ...rest
}: FsToggleButtonGroupProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(null);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newValue: string | null
  ) => {
    if (newValue === null) return;
    setInternalValue(newValue);
    onChange && onChange(_, newValue);
  };

  return (
    <ToggleButtonGroup
      {...rest}
      value={value}
      onChange={handleChange}
      color="primary"
    >
      {items.map(
        ({
          value: itemValue,
          label,
          toggleButtonProps,
          endIcon,
          startIcon,
          disabled,
        }) => (
          <ToggleButton
            key={itemValue}
            value={itemValue}
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
