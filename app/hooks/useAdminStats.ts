"use client";

import { useQuery } from "@tanstack/react-query";
import { getAdminStats } from "../services/admin.service";

export interface IAdminStats {
  totalUsers: number;
  totalResumes: number;
  totalAnalyses: number;
}

export default function useAdminStats() {
  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await getAdminStats();
      return res.data;
    },
  });

  return {
    stats: data as IAdminStats,
    loading: isLoading,
    error,
    refetch,
  };
}