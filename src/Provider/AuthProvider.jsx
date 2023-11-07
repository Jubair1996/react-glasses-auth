import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) =>{
    return  createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authentication = {
    googleLogin,createUser,signIn
  };

  return (
    <AuthContex.Provider value={authentication}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
