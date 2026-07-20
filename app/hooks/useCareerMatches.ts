"use client";

import { useQuery } from "@tanstack/react-query";
import { getCareerMatches } from "../services/career.service";

export interface Career {
  title: string;
  matchPercentage: number;
  requiredSkills: string[];
  missingSkills: string[];
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
    refetch,
  } = useQuery({
    queryKey: ["career-matches"],
    queryFn: async () => {
      const response = await getCareerMatches();
      return response.data;
    },
  });


  return {
    matches: (data as CareerMatch[]) ?? [],
    loading: isLoading,
    error: isError,
    refetch,
  };
}