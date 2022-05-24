import { useState, useEffect, useCallback } from "react";
import { getQuestions, postAnswers } from "../api/api";

export default function useQestionsAPI() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getQuestions()
      .then(({ data }) => {
        setQuestions(data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [setQuestions]);

  const sendAnswers = useCallback(() => {
    postAnswers().catch((error) => {
      console.log(error.response);
    });
  }, []);

  return {
    questions,
    sendAnswers,
  };
}
