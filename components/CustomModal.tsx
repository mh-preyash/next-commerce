import { Modal, ModalBody, ModalContent } from '@nextui-org/react';

interface ISetModal {
  isOpen: boolean
}

interface ICustomModal {
  size?: '5xl' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' | 'xs' | '3xl' | '4xl' | undefined;
  children?: any;
  bg?: string;
  modal?: any;
  setModal?: (isOpen: ISetModal) => void;
}

export default function CustomModal({
  size = '5xl',
  modal: isOpen,
  setModal,
  children,
  bg = 'bg-primary'
}: ICustomModal) {
  return (
    <Modal
      size={size}
      isOpen={isOpen}
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
    </Modal >
  );
}
