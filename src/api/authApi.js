import axiosInstance from "../utils/Axiosinstance";

const ENDPOINTS = {
  REGISTER: `/api/users/register`, 
};

export const register = async (userData) => {
  const res = await axiosInstance.post(ENDPOINTS.REGISTER, userData);
  return res.data;
};
