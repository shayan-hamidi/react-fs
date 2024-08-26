import {
  ToggleButton,
  ToggleButtonGroup,
  type ToggleButtonGroupProps,
  type ToggleButtonProps,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

type FsToggleButtonGroupProps = Omit<ToggleButtonGroupProps, 'children'> & {
  items: {
    value: string;
    label: string;
    toggleButtonProps?: ToggleButtonProps;
  }[];
};

const FsToggleButtonGroup = ({ items, ...rest }: FsToggleButtonGroupProps) => {
  const { t } = useTranslation();

  return (
    <ToggleButtonGroup {...rest}>
      {items.map(({ value, label, toggleButtonProps }) => (
        <ToggleButton key={value} value={value} {...toggleButtonProps}>
          {t(label)}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
export default FsToggleButtonGroup;
