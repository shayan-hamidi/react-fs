import { createContext, ReactNode, useCallback, useState } from 'react';

type ModalState = {
  open: boolean;
  data: any;
};

type ModalContextProps = {
  modals: Record<string, ModalState>;
  openModal: (key: string, data?: object) => void;
  closeModal: (key: string) => void;
};

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

type ModalProviderProps = {
  children: ReactNode;
};

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modals, setModals] = useState<Record<string, ModalState>>({});

  const openModal = useCallback((key: string, data: Object = {}) => {
    setModals((prev) => ({
      ...prev,
      [key]: { open: true, data },
    }));
  }, []);

  const closeModal = useCallback((key: string) => {
    setModals((prev) => ({
      ...prev,
      [key]: { ...prev[key], open: false },
    }));
  }, []);

  return (
    <ModalContext.Provider value={{ modals, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext };
