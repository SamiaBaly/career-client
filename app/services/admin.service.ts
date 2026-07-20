import api from "./api";

export const getAllUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const updateUserRole = async (
  id: string,
  role: "user" | "admin"
) => {
  const res = await api.patch(
    `/users/${id}/role`,
    { role }
  );

  return res.data;
};

export const deleteUser = async (
  id: string
) => {
  const res = await api.delete(
    `/users/${id}`
  );

  return res.data;
};

/* ======================
      Admin Resume
====================== */

export const getAllResumes = async () => {

  const res = await api.get(
    "/admin/resumes"
  );

  return res.data;

};

export const deleteResumeByAdmin = async (
  id: string
) => {

  const res = await api.delete(
    `/admin/resumes/${id}`
  );

  return res.data;

};

/* ======================
      Admin Analysis
====================== */

export const getAllAnalyses = async () => {

  const res = await api.get(
    "/admin/analyses"
  );

  return res.data;

};

export const deleteAnalysisByAdmin = async (
  id: string
) => {

  const res = await api.delete(
    `/admin/analyses/${id}`
  );

  return res.data;

};
export const getAdminStats = async () => {
  const res = await api.get("/admin/stats");
  return res.data;
};
