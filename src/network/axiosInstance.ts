import axios from "axios";
import { JOKES_BASE_URL } from "../constants/urls";

const axiosInstance = axios.create({
  validateStatus: (status) => status < 500,
  baseURL: JOKES_BASE_URL,
});

export default axiosInstance;
