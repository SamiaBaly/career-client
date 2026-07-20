"use client";

import { ReactNode } from "react";

import Sidebar from "../components/dashboard/Sidebar";
import DashboardNavbar from "../components/dashboard/DashboardNavbar";



export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {


  return (

    <div className="flex min-h-screen">


      <Sidebar />


      <div
        className="
          flex-1
          bg-gray-50
          dark:bg-gray-950
        "
      >

        <DashboardNavbar />


        <main>
          {children}
        </main>


      </div>


    </div>

  );
}