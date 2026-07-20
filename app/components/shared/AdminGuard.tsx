"use client";

import { ReactNode } from "react";
import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function AdminGuard({
  children,
}: {
  children: ReactNode;
}) {


  const {
    user,
  } = useAuth();


  const router = useRouter();



  useEffect(() => {

    if (user && user.role !== "admin") {

      router.push("/dashboard");

    }

  }, [user, router]);



  if (!user) {

    return (
      <p className="p-6 text-gray-400">
        Loading...
      </p>
    );

  }



  if (user.role !== "admin") {

    return null;

  }



  return children;

}