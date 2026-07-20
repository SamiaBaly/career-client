import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getMyAnalyses = async () => {
  const res = await axios.get(
    `${API_URL}/analysis`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const getAnalysis = async (
  resumeId: string
) => {
  const res = await axios.get(
    `${API_URL}/analysis/${resumeId}`,
    {
      withCredentials: true,
    }
  );

  return res.data;
};

export const createAnalysis = async (
  resumeId: string
) => {
  const res = await axios.post(
    `${API_URL}/analysis/${resumeId}`,
    {},
    {
      withCredentials: true,
    }
  );

  return res.data;
};