import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { getCookie } from "../utils/cookies";
import { useLocalStorage } from "../hooks";

export const AppContext = createContext(null);

/**
 * Contexto para la creacion de cotizaciones
 *
 * @param {Component} children Componente hijo
 * @param {Object} value Objeto con los valores del contexto
 * @returns
 */
/* eslint-disable react/prop-types */
export const AppContextProvider = ({ children }) => {
  const [storedValue, setLocalStorage] = useLocalStorage('user', null)
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(false);
  const token = getCookie("token");

  useEffect(() => {
    if (!session && token){
      setUser(storedValue)
      setSession(true);
    }
  }, [session]);

  const values = useMemo(
    () => ({
      user,
      setUser,
      session,
      setSession,
    }),
    [user, session, setUser]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

/**
 * Exportamos el hook del contexto
 * @returns
 */
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error("Error deploying App Context!!!");
  }

  return context;
}

export default useAppContext;
