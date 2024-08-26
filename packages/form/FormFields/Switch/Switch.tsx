import { FormControlLabel, Switch, type SwitchProps } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

type FsSwitchProps = SwitchProps & {
  i18nKey: string;
  name: string;
};

const FsSwitch = ({ name, i18nKey, ...rest }: FsSwitchProps) => {
  const { control } = useFormContext();
  const { t } = useTranslation();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormControlLabel
            control={<Switch {...field} {...rest} />}
            label={t(i18nKey)}
          />
        );
      }}
    />
  );
};

export default FsSwitch;
