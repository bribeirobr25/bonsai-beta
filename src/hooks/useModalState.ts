import { useState, useCallback } from 'react';

export const useModalState = <T = string>() => {
  const [selectedItem, setSelectedItem] = useState<T | null>(null);
  
  const open = useCallback((item: T) => {
    setSelectedItem(item);
  }, []);
  
  const close = useCallback(() => {
    setSelectedItem(null);
  }, []);
  
  return {
    selectedItem,
    isOpen: selectedItem !== null,
    open,
    close
  };
};