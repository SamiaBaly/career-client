"use client";

import {
  Bell,
  UserCircle,
} from "lucide-react";

import useAuth from "@/app/hooks/useAuth";


export default function DashboardNavbar() {

  const {
    user,
  } = useAuth();


  return (

    <header
      className="
        flex
        h-16
        items-center
        justify-between
        border-b
        bg-white
        px-6
        dark:bg-slate-900
      "
    >

      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>



      <div className="flex items-center gap-5">


        <button
          className="
            rounded-full
            p-2
            hover:bg-slate-100
            dark:hover:bg-slate-800
          "
        >
          <Bell size={20} />
        </button>



        <div
          className="
            flex
            items-center
            gap-2
          "
        >

          <UserCircle size={32} />


          <div className="hidden md:block">

            <p className="text-sm font-medium">
              {user?.name || "User"}
            </p>


            <p className="text-xs text-slate-500">
              {user?.role || "user"}
            </p>

          </div>


        </div>


      </div>


    </header>

  );

}