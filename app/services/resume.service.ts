import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export const getMyResumes = async () => {

  const res = await axios.get(
    `${API_URL}/resumes`,
    {
      withCredentials: true,
    }
  );


  return res.data;

};




export const getResumeById = async (
  id: string
) => {

  const res = await axios.get(
    `${API_URL}/resumes/${id}`,
    {
      withCredentials: true,
    }
  );


  return res.data;

};





export const createResume = async (
  data: {
    title: string;
    summary: string;
    skills: string[];
  }
) => {

  const res = await axios.post(
    `${API_URL}/resumes`,
    data,
    {
      withCredentials: true,
    }
  );


  return res.data;

};