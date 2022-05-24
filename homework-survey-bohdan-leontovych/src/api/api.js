import axios from "axios";
import { API_URL, QUESTIONS_URI, ANSWERS_URI } from "../constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getQuestions() {
  return api.get(QUESTIONS_URI);
}

export function postAnswers(obj) {
  return api.get(ANSWERS_URI, obj);
}
