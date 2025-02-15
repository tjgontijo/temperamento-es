'use client';

import { useState, useEffect } from 'react';

export function useLocalStorageWatcher(key: string) {
  const [isCleared, setIsCleared] = useState(false);
  const [clearedAt, setClearedAt] = useState<Date | null>(null);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === key && event.newValue === null) {
        setIsCleared(true);
        setClearedAt(new Date());
        
        // Log para debug
        console.log(`LocalStorage key '${key}' was cleared at:`, new Date().toISOString());
      }
    };

    // Adiciona listener de evento de storage
    window.addEventListener('storage', handleStorageChange);

    // Limpeza do listener
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  // Função para verificar manualmente se o item foi removido
  const checkLocalStorage = () => {
    const item = localStorage.getItem(key);
    if (!item) {
      setIsCleared(true);
      setClearedAt(new Date());
    }
    return !item;
  };

  // Resetar estado
  const reset = () => {
    setIsCleared(false);
    setClearedAt(null);
  };

  return {
    isCleared,
    clearedAt,
    checkLocalStorage,
    reset
  };
}
