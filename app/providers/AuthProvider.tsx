"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
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
  login: (email: string, password: string) => Promise<unknown>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

export const AuthContext =
  createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({
  children,
}: AuthProviderProps) => {

  const [user, setUser] =
    useState<IUser | null>(null);

  const [loading, setLoading] =
    useState(true);

  const refreshUser = useCallback(async () => {

    try {

      const res = await getCurrentUser();

      setUser(res.data);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }

  }, []);

  useEffect(() => {

    let mounted = true;


    const checkUser = async () => {

      try {

        const res = await getCurrentUser();


        if (mounted) {
          setUser(res.data);
        }


      } catch (error) {

        if (mounted) {
          setUser(null);
        }


      } finally {

        if (mounted) {
          setLoading(false);
        }

      }

    };


    checkUser();


    return () => {
      mounted = false;
    };


  }, []);

  const login = async (
    email: string,
    password: string
  ): Promise<unknown> => {

    const res = await loginUser({
      email,
      password,
    });

    await refreshUser();

    return res;
  };

  const logout = async (): Promise<void> => {

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