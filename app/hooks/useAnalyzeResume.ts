"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAnalysis } from "../services/analysis.service";
import toast from "react-hot-toast";

export default function useAnalyzeResume() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createAnalysis,

    onSuccess: () => {
      toast.success("Resume analyzed successfully!");

      queryClient.invalidateQueries({
        queryKey: ["analyses"],
      });

      queryClient.invalidateQueries({
        queryKey: ["analytics"],
      });

      queryClient.invalidateQueries({
        queryKey: ["career-matches"],
      });
    },

    onError: (error) => {
      console.error(error);
      toast.error("Failed to analyze resume.");
    },
  });

  return mutation;
}