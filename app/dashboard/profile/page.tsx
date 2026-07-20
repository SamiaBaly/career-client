"use client";

import useProfile from "@/app/hooks/useProfile";
import { updateProfile } from "@/app/services/user.service";
import { useState } from "react";

export default function ProfilePage() {
  const {
    profile,
    loading,
    refetch,
  } = useProfile();

  const [saving, setSaving] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = String(
      formData.get("name") || ""
    );

    const photo = String(
      formData.get("photo") || ""
    );

    try {
      setSaving(true);

      await updateProfile({
        name,
        photo,
      });

      await refetch();

      alert("Profile updated successfully.");

    } catch (error) {

      console.error(error);

      alert("Failed to update profile.");

    } finally {

      setSaving(false);

    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 dark:bg-slate-950">

      <div
        className="
          mx-auto
          max-w-3xl
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          dark:bg-slate-900
        "
      >

        <div className="flex flex-col items-center">

          <img
            src={
              profile?.photo ||
              "https://i.pravatar.cc/200"
            }
            alt="Profile"
            className="
              h-32
              w-32
              rounded-full
              border-4
              border-blue-500
              object-cover
            "
          />

          <h1 className="mt-5 text-3xl font-bold">
            My Profile
          </h1>

          <p className="mt-2 text-slate-500">
            Manage your account information
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 space-y-6"
        >

          <div>

            <label className="mb-2 block font-medium">
              Name
            </label>

            <input
              name="name"
              defaultValue={profile?.name}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-blue-500
                dark:border-slate-700
                dark:bg-slate-800
              "
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Email
            </label>

            <input
              value={profile?.email}
              disabled
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                bg-slate-100
                px-4
                py-3
                dark:border-slate-700
                dark:bg-slate-800
              "
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Photo URL
            </label>

            <input
              name="photo"
              defaultValue={profile?.photo}
              className="
                w-full
                rounded-xl
                border
                border-slate-300
                px-4
                py-3
                outline-none
                focus:border-blue-500
                dark:border-slate-700
                dark:bg-slate-800
              "
            />

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Role
            </label>

            <span
              className="
                inline-block
                rounded-full
                bg-blue-100
                px-4
                py-2
                font-semibold
                text-blue-700
                dark:bg-blue-900
                dark:text-blue-200
              "
            >
              {profile?.role}
            </span>

          </div>

          <button
            disabled={saving}
            className="
              w-full
              rounded-xl
              bg-blue-600
              py-3
              font-semibold
              text-white
              transition
              hover:bg-blue-700
              disabled:opacity-50
            "
          >
            {saving
              ? "Updating..."
              : "Update Profile"}
          </button>

        </form>

      </div>

    </div>
  );
}