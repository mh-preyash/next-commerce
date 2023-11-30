import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

export default function CustomModal({
  size = '5xl',
  modal,
  setModal,
  children,
  bg = 'bg-primary'
}) {
  return (
    <Modal
      size={size}
      isOpen={modal}
      onOpenChange={setModal}
      className="m-4 h-auto max-h-[90vh]"
      classNames={{
        backdrop: 'z-[500]',
        wrapper: 'z-[500]',
        closeButton: 'z-[500]'
      }}
    >
      <ModalContent>
        <ModalBody className={`${bg} py-6`}>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
}
