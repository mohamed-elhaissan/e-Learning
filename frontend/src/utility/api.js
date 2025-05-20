import axios from "axios";

// this file for making axios easy to use and not repeat it on every components !

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const post = async (url, data) => {
  try {
    const response = await client.post(url, data);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = "/";
    }
    throw error;
  }
};
