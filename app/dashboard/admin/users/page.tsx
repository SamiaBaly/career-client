"use client";

import useUsers, { IUser } from "@/app/hooks/useUsers";
import {
    deleteUser,
  updateUserRole,
} from "@/app/services/admin.service";


export default function AdminUsersPage() {

  const {
    users,
    loading,
    refetch,
  } = useUsers();

  if (loading) {
    return (
      <div className="p-6">
        Loading...
      </div>
    );
  }
  const handleRole = async (
    id: string,
    role: "user" | "admin"
  ) => {
    try {
      console.log(id, role);

      const res = await updateUserRole(
        id,
        role === "admin" ? "user" : "admin"
      );

      console.log(res);

      await refetch();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: string) => {

    const ok = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!ok) return;

    try {

      await deleteUser(id);

      await refetch();

    } catch (error) {

      console.error(error);

    }

  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          Users Management
        </h1>

        <p className="mt-2 text-slate-500 dark:text-slate-400">
          Manage all registered users.
        </p>
      </div>

      <div
        className="
    overflow-hidden
    rounded-3xl
    bg-white
    dark:bg-slate-900
    shadow-xl
    shadow-slate-200/40
    dark:shadow-black/20
  "
      >

        <table className="w-full">

          <thead
            className="
    bg-slate-100
    dark:bg-slate-800
  "
          >

            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Role</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-600 dark:text-slate-300">Actions</th>
            </tr>

          </thead>

          <tbody>

            {users.map((user: IUser) => (

              <tr
                key={user._id}
                className="
    border-b
    border-slate-100
    dark:border-slate-800
    transition
    hover:bg-slate-50
    dark:hover:bg-slate-800/40
  "
              >

                <td className="p-3">
                  {user.name}
                </td>

                <td className="p-3">
                  {user.email}
                </td>

                <td className="p-3">
                  {user.role}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      handleRole(
                        user._id,
                        user.role
                      )
                    }
                    className="
    rounded-xl
    bg-blue-600
    px-4
    py-2
    text-white
    hover:bg-blue-700
  "
                  >
                    Make {user.role === "admin" ? "User" : "Admin"}
                  </button>

                  <button
                    onClick={() => handleDelete(user._id)}
                    className="
    ml-2
    rounded-xl
    bg-red-600
    px-4
    py-2
    text-white
    hover:bg-red-700
  "
                  >
                    Delete
                  </button>
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}