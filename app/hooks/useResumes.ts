"use client";

import { useEffect, useState } from "react";
import { getMyResumes } from "../services/resume.service";
import { Resume } from "../types/resume";


export default function useResumes() {

  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


  useEffect(() => {

    let mounted = true;


    const fetchData = async () => {

      try {

        setLoading(true);
        setError(false);


        const response = await getMyResumes();


        if (mounted) {
          setResumes(response.data || []);
        }


      } catch (error) {

        console.log(error);

        if (mounted) {
          setError(true);
        }


      } finally {

        if (mounted) {
          setLoading(false);
        }

      }

    };


    fetchData();


    return () => {
      mounted = false;
    };


  }, []);



  const refetch = async () => {

    try {

      setLoading(true);

      const response = await getMyResumes();

      setResumes(response.data || []);


    } catch (error) {

      console.log(error);

      setError(true);

    } finally {

      setLoading(false);

    }

  };


  return {
    resumes,
    loading,
    error,
    refetch,
  };

}