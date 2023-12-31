import { useState, useEffect, createContext } from "react";

export const userContext = createContext();

//firebase
import app from "../firebase/firebase.config";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithPopup,
} from "firebase/auth";
import axios from "axios";
import useAxiosInstance from "../hooks/useAxiosInstance";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const axiosInstance = useAxiosInstance()

  //Authentication Functions
  const logInUsingGoogle = ()=>signInWithPopup(auth, googleProvider);

  const signupUserWithEamilAndPWD = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const updateUserProfile = (userData) =>
    updateProfile(auth.currentUser, userData);

  const loginWithEmailPassword = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logoutUser = () => signOut(auth);

  const userInfo = {
    user,
    isLoading,
    signupUserWithEamilAndPWD,
    updateUserProfile,
    loginWithEmailPassword,
    logInUsingGoogle,
    logoutUser,
  };

  useEffect(() => {
    const unSubScribe = onAuthStateChanged(auth, (currentUser) => {
      const email = currentUser?.email;
      setUser(currentUser);
      setIsLoading(false);
      if(currentUser){
        axiosInstance.post("/set-cookie", {email, uid:currentUser?.uid})
        .then(response => console.log("cookie set", response.data))
        .catch(error => console.log('cooking setting error', error.message))
      }else{
        axiosInstance.post("/clear-cookie",{email})
        .then(response => {
          console.log(response.data)
        })
        .catch(error => console.log('cookie clearing error', error.message))
      }
    });
    return () => unSubScribe();
  }, [user]);

  return (
    <userContext.Provider value={userInfo}>{children}</userContext.Provider>
  );
};

export default AuthContextProvider;
