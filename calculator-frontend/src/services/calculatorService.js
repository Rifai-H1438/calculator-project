
import axios from "axios";

const API_URL =
  process.env.REACT_APP_API_URL ||
  "https://calculator-backend-xmgh.onrender.com";

const api = axios.create({
  baseURL: `${API_URL}/api/calculator`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const calculate = async (number1, number2, operation) => {
  try {
    const response = await api.post("/calculate", {
      number1: Number(number1),
      number2: Number(number2),
      operation: operation,
    });

    return response.data;

  } catch (error) {
    const message =
      error.response?.data?.message ||
      "Unable to connect to the server";

    throw new Error(message);
  }
};
