import { Modal, Paper, type ModalProps } from '@mui/material';
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
      <Paper
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: {
            xs: '80%',
            sm: 400,
            md: 500,
            lg: 600,
            xl: 700,
          },
          maxWidth: '100%',
          px: 3,
          py: 1,
        }}
      >
        {children}
      </Paper>
    </Modal>
  );
};

export default FsModal;
