import axios from "axios";
import { API_URL, USERS_URI, ALBUMS_URI } from "../constants";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
