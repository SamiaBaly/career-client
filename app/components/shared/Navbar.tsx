"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useAuth from "@/app/hooks/useAuth";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const router = useRouter();


  // TODO: Replace with your auth hook
  // Example:
  // const { user } = useAuth();

  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    await logout();

    setOpen(false);

    router.replace("/");

    router.refresh();
  };

  if (loading) {
    return null;
  }

  const dashboardRoute =
    user?.role === "admin"
      ? "/dashboard/admin"
      : "/dashboard/user";


  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Career",
      href: "/career",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ];

  return (
    <nav
      className="
        sticky
        top-0
        z-50
        bg-white/80
        dark:bg-gray-950/80
        backdrop-blur
        border-b
        border-gray-200
        dark:border-gray-800
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
            text-2xl
            font-bold
            text-blue-600
          "
        >
          CareerPilot AI
        </Link>



        {/* Desktop Menu */}

        <div
          className="
            hidden
            md:flex
            items-center
            gap-7
          "
        >

          {
            navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="
                  text-gray-700
                  dark:text-gray-300
                  hover:text-blue-600
                  transition
                "
              >
                {item.name}
              </Link>
            ))
          }



          {
            user ? (

              <>

                {/* Profile */}

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <div className="flex items-center gap-2">
                    {user?.photo ? (
                      <Image
                        src={user.photo}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-full
        bg-blue-600
        text-white
        font-bold
        text-lg
      "
                      >
                        {user?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}

                    <span
                      className="
      font-medium
      text-gray-800
      dark:text-gray-200
    "
                    >
                      {user.name}
                    </span>
                  </div>


                  <span
                    className="
                      font-medium
                      text-gray-800
                      dark:text-gray-200
                    "
                  >
                    {user.name}
                  </span>

                </div>




                {/* Dashboard */}

                <Link
                  href={dashboardRoute}
                  className="
                    px-5
                    py-2
                    rounded-lg
                    bg-blue-600
                    text-white
                    hover:bg-blue-700
                    transition
                  "
                >
                  {
                    user.role === "admin"
                      ? "Admin Dashboard"
                      : "Dashboard"
                  }
                </Link>




                {/* Logout */}

                <button
                  onClick={handleLogout}
                  className="
                    px-5
                    py-2
                    rounded-lg
                    border
                    border-red-500
                    text-red-500
                    hover:bg-red-50
                    transition
                  "
                >
                  Logout
                </button>


              </>


            ) : (


              <>


                <Link
                  href="/login"
                  className="
                    px-5
                    py-2
                    rounded-lg
                    bg-blue-600
                    text-white
                  "
                >
                  Login
                </Link>



                <Link
                  href="/register"
                  className="
                    px-5
                    py-2
                    rounded-lg
                    border
                    border-blue-600
                    text-blue-600
                  "
                >
                  Get Started
                </Link>


              </>


            )
          }


        </div>




        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >

          {
            open
              ? <X size={28} />
              : <Menu size={28} />
          }

        </button>


      </div>





      {/* Mobile Menu */}

      {
        open && (

          <div
            className="
              md:hidden
              px-6
              pb-5
              flex
              flex-col
              gap-4
            "
          >

            {
              navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              ))
            }



            {
              user ? (

                <>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >

                    {user?.photo ? (
                      <Image
                        src={user.photo}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-blue-600
      text-white
      font-bold
    "
                      >
                        {user?.name?.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <span>
                      {user.name}
                    </span>

                  </div>



                  <Link
                    href={dashboardRoute}
                    className="
                      bg-blue-600
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      text-center
                    "
                  >
                    Dashboard
                  </Link>



                  <button
                    onClick={handleLogout}
                    className="
                      border
                      border-red-500
                      text-red-500
                      px-5
                      py-2
                      rounded-lg
                    "
                  >
                    Logout
                  </button>


                </>


              ) : (

                <>

                  <Link
                    href="/login"
                    className="
                      bg-blue-600
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      text-center
                    "
                  >
                    Login
                  </Link>


                  <Link
                    href="/register"
                    className="
                      border
                      border-blue-600
                      text-blue-600
                      px-5
                      py-2
                      rounded-lg
                      text-center
                    "
                  >
                    Get Started
                  </Link>

                </>

              )
            }


          </div>

        )
      }


    </nav>
  );
}