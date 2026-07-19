import api from "./api";


// Register User
export const registerUser = async (userData: {
  name: string;
  email: string;
  image: string;
  password: string;
}) => {
  const response = await api.post("/auth/register", userData);

  return response.data;
};


// Login User
export const loginUser = async (userData: {
  email: string;
  password: string;
}) => {

  const response = await api.post("/auth/login", userData);

  return response.data;
};


// Logout User
export const logoutUser = async () => {

  const response = await api.post("/auth/logout");

  return response.data;
};


// Get Current User
export const getCurrentUser = async () => {

  const response = await api.get("/auth/me");

  return response.data;
};