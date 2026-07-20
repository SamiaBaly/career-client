"use client";

import { useQuery } from "@tanstack/react-query";
import { getResumeById } from "../services/resume.service";


export interface Resume {
  _id: string;
  title: string;
  skills: string[];
  createdAt: string;
  updatedAt?: string;
}


export default function useResume(
  resumeId: string
) {

  const {
    data,
    isLoading,
    isError,
  } = useQuery<Resume | null>({

    queryKey: [
      "resume",
      resumeId
    ],

    queryFn: async () => {

      const res =
        await getResumeById(resumeId);

      return res.data ?? null;

    },

    enabled: !!resumeId,

  });



  return {
    resume: data,
    loading: isLoading,
    error: isError,
  };

}