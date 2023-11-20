import {Modal, ModalBody, ModalContent} from '@nextui-org/react';

export default function CustomModal({size = '5xl', modal, setModal, children}) {
  return (
    <Modal
      size={size}
      isOpen={modal}
      onOpenChange={setModal}
      className="m-4 max-h-[90svh] h-full"
      classNames={{
        backdrop: 'z-[500]',
        wrapper: 'z-[500]',
        closeButton: 'z-[500]',
      }}
    >
      <ModalContent>
        {(onClose) => <ModalBody className="bg-black">{children}</ModalBody>}
      </ModalContent>
    </Modal>
  );
}
