import { useContext, createContext } from "react";

export const AppContext = createContext(null);

export function useAppConext() {
  return useContext(AppContext);
};
