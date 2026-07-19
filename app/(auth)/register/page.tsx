"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { registerUser } from "@/app/services/auth.service";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {

  const router = useRouter();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>();


  const onSubmit = async (
    data: RegisterFormData
  ) => {

    try {

      setLoading(true);

      const res = await registerUser(data);

      if (res.success) {

        toast.success(res.message);

        reset();

        router.push("/login");

      }

    } catch (error: unknown) {

      toast.error("Registration failed");

    } finally {

      setLoading(false);

    }

  };



  return (

    <div className="flex min-h-screen items-center justify-center">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md rounded-lg border p-6 shadow-md space-y-5"
      >

        <h1 className="text-3xl font-bold text-center">
          Register
        </h1>

        <div>

          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full"

            {...register("name", {
              required: "Name is required",
            })}
          />

          {errors.name && (

            <p className="text-sm text-red-500">

              {errors.name.message}

            </p>

          )}

        </div>


        <div>

          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full"

            {...register("email", {
              required: "Email is required",
            })}
          />

          {errors.email && (

            <p className="text-sm text-red-500">

              {errors.email.message}

            </p>

          )}

        </div>


        <div>

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"

            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            })}
          />

          {errors.password && (

            <p className="text-sm text-red-500">

              {errors.password.message}

            </p>

          )}

        </div>


        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary w-full"
        >

          {loading
            ? "Creating Account..."
            : "Register"}

        </button>


        <p className="text-center text-sm">

          Already have an account?

          <Link
            href="/login"
            className="ml-2 text-blue-600 font-medium"
          >
            Login
          </Link>

        </p>

      </form>

    </div>

  );

}