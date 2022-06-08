import axios from "axios";
import { API_URL, USERS_URI, ALBUMS_URI } from "../constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getUsers() {
  return api.get(USERS_URI);
}

export function postUser(obj) {
  return api.post(USERS_URI, obj);
}

export function changeUser(obj) {
  return api.put(USERS_URI, obj);
}

export function getAlbums(obj) {
  return api.get(ALBUMS_URI, obj);
}
