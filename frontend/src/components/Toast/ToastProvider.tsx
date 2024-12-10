import { createContext, useCallback, useContext, useState } from 'react'
import { Toast, ToastType, ToastPosition } from './Toast'

interface ToastContextData {
  addToast: (data: AddToast) => void;
  removeToast: (id: string) => void;
}

interface AddToast {
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
}

interface ToastMessage {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  position?: ToastPosition;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ type, title, message, duration, position }: AddToast) => {
      const id = Math.random().toString(36).substring(2);

      const toast = {
        id,
        type,
        title,
        message,
        duration,
        position,
      };

      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      {messages.map((message) => (
        <Toast
          key={message.id}
          id={message.id}
          type={message.type}
          title={message.title}
          message={message.message}
          duration={message.duration}
          position={message.position}
          onClose={removeToast}
        />
      ))}
    </ToastContext.Provider>
  );
};

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}
