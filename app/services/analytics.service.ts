import axios from "axios";
import { AnalyticsData } from "../types/analytics";


const API_URL = process.env.NEXT_PUBLIC_API_URL;


export const getDashboardAnalytics =
  async (): Promise<{ data: AnalyticsData }> => {

    const res = await axios.get(
      `${API_URL}/analytics`,
      {
        withCredentials: true,
      }
    );


    return res.data;

  };