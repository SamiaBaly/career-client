import api from "./api";



export const getProfile = async () => {

  const res = await api.get("/users/me");

  return res.data;

};


export const updateProfile = async (data: {
  name: string;
  photo: string;
}) => {

  const res = await api.patch(
    "/users/profile",
    data
  );

  return res.data;

};