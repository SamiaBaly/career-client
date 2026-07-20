"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

import {
  LayoutDashboard,
  FileText,
  Brain,
  Briefcase,
  User,
  Users,
  Shield,
  Menu,
  X,
  LogOut,
} from "lucide-react";

import useProfile from "@/app/hooks/useProfile";

const userMenus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "My Resume",
    icon: FileText,
    path: "/dashboard/resumes",
  },
  {
    title: "AI Analysis",
    icon: Brain,
    path: "/dashboard/analysis",
  },
  {
    title: "Career",
    icon: Briefcase,
    path: "/dashboard/career",
  },
  {
    title: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
];

const adminMenus = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard/admin",
  },
  {
    title: "Users",
    icon: Users,
    path: "/dashboard/admin/users",
  },
  {
    title: "Resumes",
    icon: FileText,
    path: "/dashboard/admin/resumes",
  },
  {
    title: "Analyses",
    icon: Brain,
    path: "/dashboard/admin/analysis",
  },
  {
    title: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { profile } = useProfile();

  const menus =
    profile?.role === "admin"
      ? adminMenus
      : userMenus;
  return (
    <>

      {/* Mobile Open Button */}

      <button
        onClick={() => setOpen(true)}
        className="
          fixed
          left-4
          top-4
          z-50
          rounded-xl
          bg-white
          p-3
          shadow-md
          dark:bg-slate-900
          md:hidden
        "
      >
        <Menu size={22} />
      </button>


      {/* Desktop Sidebar */}

      <aside
        className="
          hidden
          min-h-screen
          w-72
          bg-white
          p-6
          shadow-sm
          dark:bg-slate-900
          md:block
        "
      >

        <div
          className="
            mb-10
            flex
            items-center
            gap-3
          "
        >

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-blue-600
              text-white
            "
          >
            <Shield size={24} />
          </div>


          <div>

            <h2
              className="
                text-xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              CareerPilot
            </h2>


            <p
              className="
                text-sm
                text-slate-500
              "
            >
              AI Platform
            </p>

          </div>

        </div>


        <nav className="space-y-2">

          {menus.map((item) => {

            const Icon = item.icon;

            const active =
              pathname === item.path;


            return (

              <Link
                key={item.path}
                href={item.path}
                className={`
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3
                  font-medium
                  transition

                  ${active
                    ?
                    "bg-blue-600 text-white"
                    :
                    "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }

                `}
              >

                <Icon size={20} />

                <span>
                  {item.title}
                </span>

              </Link>

            );

          })}

        </nav>


        {/* Logout */}

        <button
          onClick={() => {
            document.cookie =
              "token=; path=/; max-age=0";

            router.push("/login");
          }}
          className="
            mt-10
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-4
            py-3
            text-red-500
            hover:bg-red-50
            dark:hover:bg-red-950
          "
        >

          <LogOut size={20} />

          Logout

        </button>


      </aside>
      {/* Mobile Drawer */}

      {
        open && (

          <div
            className="
              fixed
              inset-0
              z-50
              md:hidden
            "
          >

            {/* Overlay */}

            <div
              onClick={() => setOpen(false)}
              className="
                absolute
                inset-0
                bg-black/40
              "
            />


            {/* Drawer */}

            <aside
              className="
                relative
                z-50
                h-full
                w-72
                bg-white
                p-6
                shadow-xl
                dark:bg-slate-900
              "
            >

              <div
                className="
                  mb-8
                  flex
                  items-center
                  justify-between
                "
              >

                <h2
                  className="
                    text-xl
                    font-bold
                    dark:text-white
                  "
                >
                  CareerPilot
                </h2>


                <button
                  onClick={() => setOpen(false)}
                >

                  <X size={24} />

                </button>


              </div>



              <nav className="space-y-2">


                {menus.map((item) => {

                  const Icon = item.icon;


                  const active =
                    pathname === item.path;


                  return (

                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className={`
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        px-4
                        py-3
                        font-medium
                        transition

                        ${active
                          ?
                          "bg-blue-600 text-white"
                          :
                          "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                        }

                      `}
                    >

                      <Icon size={20} />

                      {item.title}

                    </Link>

                  );


                })}


              </nav>



              <button
                onClick={() => {

                  document.cookie =
                    "token=; path=/; max-age=0";

                  router.push("/login");

                }}
                className="
                  mt-10
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-2xl
                  px-4
                  py-3
                  text-red-500
                  hover:bg-red-50
                  dark:hover:bg-red-950
                "
              >

                <LogOut size={20} />

                Logout

              </button>


            </aside>


          </div>

        )
      }


    </>
  );
}