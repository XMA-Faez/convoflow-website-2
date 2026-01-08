"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface SignupPopupContextType {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
}

const SignupPopupContext = createContext<SignupPopupContextType | null>(null);

export function SignupPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SignupPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </SignupPopupContext.Provider>
  );
}

export function useSignupPopup() {
  const context = useContext(SignupPopupContext);
  if (!context) {
    throw new Error("useSignupPopup must be used within a SignupPopupProvider");
  }
  return context;
}
