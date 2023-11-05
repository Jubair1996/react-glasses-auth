import { createContext } from "react";

export const AuthContex = createContext(null);
const AuthProvider = ({ children }) => {
  return <AuthContex.Provider value={}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
