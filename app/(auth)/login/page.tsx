"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { useAuth } from "@/app/providers/AuthProvider";

interface LoginFormData {
  email: string;
  password: string;
}

export default function LoginPage() {

  const router = useRouter();

  const { login } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();


  const onSubmit = async (
    data: LoginFormData
  ) => {

    try {

      setLoading(true);

      await login(
        data.email,
        data.password
      );

      toast.success("Login successful");

      router.push("/dashboard");

    } catch (error: unknown) {

      toast.error("Invalid email or password");

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
          Login
        </h1>


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

            <p className="text-red-500 text-sm mt-1">

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
            })}
          />

          {errors.password && (

            <p className="text-red-500 text-sm mt-1">

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
            ? "Logging in..."
            : "Login"}

        </button>

      </form>

    </div>

  );

}