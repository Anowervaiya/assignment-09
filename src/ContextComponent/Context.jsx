import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import React from "react";
import auth from "../authentication/authentication";
import { GoogleAuthProvider } from "firebase/auth";

import { getAuth, signOut } from "firebase/auth";

export const contextApi = createContext(null);
const Context = ({ children }) => {
  const [data, setData] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const stateChanged = () => {
    return onAuthStateChanged(auth, (user) => setUser(user));
  };



  const SignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {

      })
      .catch((error) => {

      });
  };



  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("google mama tho ase na");
      });

    signInWithPopup(auth, provider);
  };
  const ContextData = {
    data,
    user,
    createUser,
    stateChanged,
    GoogleLogin,
    SignOut
  };

  return (
    <div>
      <contextApi.Provider value={ContextData}>{children}</contextApi.Provider>
    </div>
  );
};

export default Context;
