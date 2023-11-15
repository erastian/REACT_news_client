import { API_URL } from "~shared/config";
import axios from "axios";

const ApiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default ApiInstance;