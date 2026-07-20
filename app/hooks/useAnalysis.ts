"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalysis } from "../services/analysis.service";


export interface SingleAnalysis {
  _id: string;
  resumeId: string;
  score: number;
  strengths: string[];
  weaknesses: string[];
  suggestions: string[];
  createdAt: string;
}


export default function useAnalysis(
  resumeId: string
) {

  const {
    data,
    isLoading,
    isError,
  } = useQuery<SingleAnalysis | null>({
    
    queryKey: [
      "analysis",
      resumeId
    ],

    queryFn: async () => {

      const res =
        await getAnalysis(resumeId);

      return res.data ?? null;

    },

    enabled: !!resumeId,

  });



  return {
    analysis: data,
    loading: isLoading,
    error: isError,
  };

}