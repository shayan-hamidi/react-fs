import { AlertProps } from '@mui/material';

type TriggerAlertFunction = (
  i18nkey: string,
  delay?: 2000 | 3000 | 4000 | 5000,
  alertProps?: AlertProps
) => void;

let triggerAlertFunction: TriggerAlertFunction | null = null;

/**
 * Registers the triggerAlert function from the AlertProvider.
 * This should be called once when the AlertProvider mounts.
 */
export const setTriggerAlert = (fn: TriggerAlertFunction) => {
  triggerAlertFunction = fn;
};

/**
 * Triggers an alert if the triggerAlert function has been set.
 * @param i18nkey The translation key for the alert message.
 * @param delay The duration before the alert dismisses.
 * @param alertProps Additional properties for the alert.
 */
export const showAlert = (
  i18nkey: string,
  delay: 2000 | 3000 | 4000 | 5000 = 2000,
  alertProps?: AlertProps
) => {
  if (triggerAlertFunction) {
    triggerAlertFunction(i18nkey, delay, alertProps);
  }
};
