/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useState,
  type ReactNode,
} from "react";


import type {
  User,
} from "../types/auth";



interface AuthContextType {


  user: User | null;


  login: (
    user: User
  ) => void;



  logout: () => void;



  isAuthenticated: boolean;


}





export const AuthContext =
  createContext<AuthContextType | undefined>(
    undefined
  );







interface AuthProviderProps {

  children: ReactNode;

}








export function AuthProvider(
  {
    children
  }: AuthProviderProps
) {



  const storedUser =
    localStorage.getItem(
      "authUser"
    );



  const [user,setUser] =
    useState<User | null>(

      storedUser
      ? JSON.parse(storedUser)
      : null

    );







  const login = (
    userData: User
  ) => {


    setUser(
      userData
    );


    localStorage.setItem(
      "authUser",
      JSON.stringify(userData)
    );


  };







  const logout = () => {


    setUser(null);


    localStorage.removeItem(
      "authUser"
    );


  };







  const value: AuthContextType = {


    user,


    login,


    logout,


    isAuthenticated:
      user !== null,



  };






  return (

    <AuthContext.Provider
      value={value}
    >

      {children}


    </AuthContext.Provider>

  );



}