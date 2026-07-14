import axios from "axios";

const API_URL = "http://10.69.0.135:5000/api/users";

export const loginUser = async (email, password) => {
  const response = await axios.post(
    `${API_URL}/login`,
    {
      email,
      password,
    }
  );

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axios.post(
    `${API_URL}/register`,
    userData
  );

  return response.data;
};

export const changePassword = async (
  email,
  currentPassword,
  newPassword
) => {
  const response = await axios.put(
    `${API_URL}/change-password`,
    {
      email,
      currentPassword,
      newPassword,
    }
  );

  return response.data;
};