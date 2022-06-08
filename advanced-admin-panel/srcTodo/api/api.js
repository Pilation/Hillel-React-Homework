import axios from "axios";
import { API_URL, TODOS_URI } from "../constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getTD() {
  return api.get(TODOS_URI);
}

export function postTD(obj) {
  return api.post(TODOS_URI, obj);
}

export function putTD(obj, id) {
  return api.put(TODOS_URI + "/" + id, obj);
}

export function deleteTD(id) {
  return api.delete(TODOS_URI + "/" + id);
}
