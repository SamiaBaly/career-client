"use client";

import { useQuery } from "@tanstack/react-query";
import { getMyAnalyses } from "../services/analysis.service";

export interface Analysis {
  _id: string;
  userId: string;
  resumeId: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  createdAt: string;
  updatedAt: string;
}

export default function useAnalyses() {
  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery<Analysis[]>({
    queryKey: ["analyses"],
    queryFn: async (): Promise<Analysis[]> => {
      const res = await getMyAnalyses();
      return res.data ?? [];
    },
  });

  return {
    analyses: data ?? [],
    loading: isLoading,
    error: isError,
    refetch,
  };
}