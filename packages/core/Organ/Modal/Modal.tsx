import { Modal, type ModalProps } from '@mui/material';
import { useContext } from 'react';
import { ModalContext } from './ModalProvider';

type FsModalProps = Omit<ModalProps, 'open'> & {
  modalKey: string;
};

const FsModal = ({ children, modalKey, ...rest }: FsModalProps) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('FsModal must be used within a ModalProvider');
  }

  const { modals, closeModal } = context;
  const modalState = modals[modalKey] || { open: false };

  if (!modalState.open) {
    return null;
  }

  return (
    <Modal
      open={modalState.open}
      onClose={() => closeModal(modalKey)}
      closeAfterTransition
      {...rest}
    >
      {children}
    </Modal>
  );
};

export default FsModal;
