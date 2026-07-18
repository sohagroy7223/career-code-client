import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Loading from "../component/Loading";
import { useNavigate } from "react-router";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const sentEmailVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currenUser) => {
      if (currenUser) {
        setUser(currenUser);
        setLoading(false);
      }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const resetPasswordMail = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const signOutUser = () => {
    setLoading(false);
    return signOut(auth);
  };

  const userInfo = {
    signInWithGoogle,
    createUser,
    sentEmailVerification,
    loginUser,
    user,
    updateUser,
    setUser,
    resetPasswordMail,
    signOutUser,
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
