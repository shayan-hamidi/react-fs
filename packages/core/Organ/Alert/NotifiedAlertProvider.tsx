import { type AlertProps } from '@mui/material';
import { createContext, ReactNode, useCallback, useState } from 'react';
import FsNotifiedAlert from './NotifiedAlert';

type AlertState = {
  id: string;
  visible: boolean;
  i18nkey: string;
  delay: 2000 | 3000 | 4000 | 5000;
  alertProps?: Omit<
    React.ComponentProps<typeof FsNotifiedAlert>,
    'i18nkey' | 'delay'
  >;
};

type AlertContextProps = {
  alerts: AlertState[];
  triggerAlert: (
    i18nkey: string,
    delay?: 2000 | 3000 | 4000 | 5000,
    alertProps?: AlertProps
  ) => void;
};

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

type AlertProviderProps = {
  children: ReactNode;
};

let alertIdCounter = 0;

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [alerts, setAlerts] = useState<AlertState[]>([]);

  const triggerAlert = useCallback(
    (
      i18nkey: string,
      delay: 2000 | 3000 | 4000 | 5000 = 2000,
      alertProps: AlertProps = {}
    ) => {
      const id = `alert-${alertIdCounter++}`;
      const newAlert = { id, visible: true, i18nkey, delay, alertProps };

      setAlerts((prev) => [...prev, newAlert]);

      setTimeout(() => {
        closeAlert(id);
      }, delay);
    },
    []
  );

  const closeAlert = useCallback((id: string) => {
    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id ? { ...alert, visible: false } : alert
      )
    );

    setTimeout(() => {
      setAlerts((prev) => prev.filter((alert) => alert.id !== id));
    }, 300);
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, triggerAlert }}>
      {children}
      {alerts.map((alert) => (
        <FsNotifiedAlert
          key={alert.id}
          i18nkey={alert.i18nkey}
          delay={alert.delay}
          {...alert.alertProps}
        />
      ))}
    </AlertContext.Provider>
  );
};

export { AlertContext };

