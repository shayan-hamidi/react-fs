import { useCallback, useContext } from 'react';
import { ModalContext } from './ModalProvider';

export const useModal = (key: string) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  const { modals, openModal, closeModal } = context;
  const modalState = modals[key] || { open: false, data: null };

  const open = useCallback(
    (data?: any) => openModal(key, data),
    [key, openModal]
  );
  const close = useCallback(() => closeModal(key), [key, closeModal]);

  return {
    ...modalState,
    open,
    close,
  };
};
