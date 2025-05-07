"use client"; // Next.js necesita "use client" para los contextos en App Router

import { initialState, reducer, State, Action } from "../context/reducer/reducer";
import React, { createContext, ReactNode, useContext, useReducer } from "react";

// Define la estructura del contexto
interface ContextGlobalType {
  state: State;
  dispatch: React.Dispatch<Action>;
}

interface GlobalContextProps {
    children: ReactNode;
}

// Crea el contexto con valores por defecto
const ContextGlobal = createContext<ContextGlobalType | undefined>(undefined);

// Crea el Provider
export function ContextGlobalProvider({ children }: GlobalContextProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
}

// Hook para usar el contexto fácilmente en cualquier componente
export function useContextGlobal() {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error("useContextGlobal debe usarse dentro de un ContextGlobalProvider");
  }
  return context;
}
