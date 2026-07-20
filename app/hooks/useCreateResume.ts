"use client";

import { useMutation } from "@tanstack/react-query";
import { createResume } from "../services/resume.service";


export default function useCreateResume() {

  return useMutation({

    mutationFn: createResume,

  });

}