
import axios from "axios";

const API_URL = "http://localhost:8080/api/calculator";

const api = axios.create({
  baseURL: API_URL,
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
