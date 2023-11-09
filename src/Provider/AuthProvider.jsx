import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContex = createContext(null);

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true)
  const googleLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    // or

    // onAuthStateChanged(auth, (user) => {
    //   setUser(user)
    // });

    // or
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);
  console.log(user);
  const authentication = {
    googleLogin,
    createUser,
    signIn,
    user,
    logOut,
    loading
  };

  return (
    <AuthContex.Provider value={authentication}>{children}</AuthContex.Provider>
  );
};

export default AuthProvider;
