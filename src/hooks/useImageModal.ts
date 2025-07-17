import { useState, useCallback } from 'react';

export const useImageModal = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((imagePath: string) => {
    setSelectedImage(imagePath);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  return {
    selectedImage,
    isOpen: selectedImage !== null,
    openModal,
    closeModal
  };
};