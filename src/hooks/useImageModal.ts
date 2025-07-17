import { useModalState } from './useModalState';

export const useImageModal = () => {
  const { selectedItem: selectedImage, isOpen, open: openModal, close: closeModal } = useModalState<string>();

  return {
    selectedImage,
    isOpen,
    openModal,
    closeModal
  };
};