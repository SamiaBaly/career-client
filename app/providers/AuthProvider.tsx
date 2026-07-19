"use client";

import {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
} from "../services/auth.service";



interface IUser {
  _id: string;
  name: string;
  email: string;
  role: string;
}



interface AuthContextType {
  user: IUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}



export const AuthContext =
  createContext<AuthContextType | null>(null);



export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [user, setUser] =
    useState<IUser | null>(null);

  const [loading, setLoading] =
    useState(true);



  const refreshUser = async () => {

    try {

      const res = await getCurrentUser();

      setUser(res.data);

    } catch {

      setUser(null);

    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    refreshUser();

  }, []);



  const login = async (
    email: string,
    password: string
  ) => {

    const res = await loginUser({
      email,
      password,
    });

    await refreshUser();

    return res;
  };



  const logout = async () => {

    await logoutUser();

    setUser(null);

  };



  return (

    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>

  );

};