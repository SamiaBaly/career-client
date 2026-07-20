"use client";

import { useQuery } from "@tanstack/react-query";
import { getCareerMatches } from "../services/career.service";

export interface Career {
  _id: string;
  title: string;
  matchPercentage: number;
  requiredSkills: string[];
  missingSkills: string[];
  reason?: string;
}

export interface CareerMatch {
  _id: string;
  userId: string;
  careers: Career[];
  createdAt: string;
}

export default function useCareerMatches() {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<CareerMatch[]>({
    queryKey: ["career-matches"],
    queryFn: async () => {
      const response = await getCareerMatches();

      // API Response:
      // {
      //   success: true,
      //   data: [...]
      // }

      return response.data;
    },
  });

  return {
    matches: data ?? [],
    loading: isLoading,
    error: isError ? error : null,
    refetch,
  };
}