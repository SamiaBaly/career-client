"use client";

import { useEffect, useState } from "react";
import { getDashboardAnalytics } from "../services/analytics.service";
import { AnalyticsData } from "../types/analytics";


export default function useAnalytics() {

  const [analytics, setAnalytics] =
    useState<AnalyticsData | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);



  const fetchAnalytics = async () => {

    try {

      setLoading(true);
      setError(false);


      const response =
        await getDashboardAnalytics();


      setAnalytics(response.data);


    } catch (error) {

      console.log("Analytics Error:", error);

      setError(true);


    } finally {

      setLoading(false);

    }

  };



  useEffect(() => {

    const load = async () => {
      await fetchAnalytics();
    };

    load();

  }, []);



  return {
    analytics,
    loading,
    error,
    refetch: fetchAnalytics,
  };

}