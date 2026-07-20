import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_URL;



export const getCareerMatches = async () => {

  const res = await axios.get(
    `${API_URL}/career`,
    {
      withCredentials: true,
    }
  );


  return res.data;

};




export const getCareerById = async (
  id: string
) => {

  const res = await axios.get(
    `${API_URL}/career/${id}`,
    {
      withCredentials: true,
    }
  );


  return res.data.data;

};