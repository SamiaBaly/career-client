"use client";

import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../services/user.service";

export default function useProfile() {
  const {
    data,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await getProfile();
      return res.data;
    },
  });

  return {
    profile: data,
    loading: isLoading,
    refetch,
  };
}