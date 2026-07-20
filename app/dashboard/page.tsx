"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import useAuth from "../hooks/useAuth";


export default function DashboardPage() {


  const {
    user,
    loading,
  } = useAuth();


  const router = useRouter();



  useEffect(() => {

    if (loading) return;


    if (!user) {

      router.replace("/login");

      return;

    }


    if (user.role === "admin") {

      router.replace("/dashboard/admin");

    } else {

      router.replace("/dashboard/user");

    }


  }, [
    user,
    loading,
    router,
  ]);



  return (

    <div
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-gray-50
        dark:bg-gray-950
      "
    >

      <div className="text-center">


        <div
          className="
            mx-auto
            h-10
            w-10
            animate-spin
            rounded-full
            border-4
            border-blue-600
            border-t-transparent
          "
        />


        <p
          className="
            mt-4
            text-sm
            text-gray-500
            dark:text-gray-400
          "
        >
          Loading dashboard...
        </p>


      </div>


    </div>

  );

}