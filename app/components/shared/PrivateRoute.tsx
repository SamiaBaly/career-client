"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "@/app/hooks/useAuth";

interface PrivateRouteProps {
  children: ReactNode;
}

export default function PrivateRoute({
  children,
}: PrivateRouteProps) {

  const router = useRouter();

  const {
    user,
    loading,
  } = useAuth();

  useEffect(() => {

    if (!loading && !user) {

      router.replace("/login");

    }

  }, [
    user,
    loading,
    router,
  ]);

  if (loading) {

    return (

      <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-950">

        <p className="text-lg font-medium text-slate-700 dark:text-slate-300">
          Loading...
        </p>

      </div>

    );

  }

  if (!user) {

    return null;

  }

  return children;

}