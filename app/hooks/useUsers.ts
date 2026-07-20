"use client";

import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../services/admin.service";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  photo?: string;
}

export default function useUsers() {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getAllUsers();
      return res.data;
    },
  });

  return {
    users: data ?? [],
    loading: isLoading,
    error,
    refetch,
  };
}