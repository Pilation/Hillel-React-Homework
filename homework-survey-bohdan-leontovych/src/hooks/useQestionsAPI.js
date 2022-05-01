import { useState, useEffect, useCallback } from "react";
import api from "../api/api";

export default function useQestionsAPI(getURI) {
  const [questions, setQuestions] = useState([]);
  const [surveyValues, setSurveyValues] = useState([]);

  const prepareTemplateValues = useCallback((questions) => {
    const templateValues = questions.map((elem) => {
      const templateObj = {};
      templateObj.id = elem.id;
      templateObj.question = elem.question;
      templateObj.value = 0;
      return templateObj;
    });
    return templateValues;
  }, []);

  const getAndSetQuestions = useCallback(() => {
    api
      .get(getURI)
      .then(({ data }) => {
        setQuestions(data);
        return data;
      })
      .then((data) => {
        setSurveyValues(prepareTemplateValues(data));
      });
  }, [getURI, prepareTemplateValues]);

  const postQuestions = useCallback((postURI, obj) => {
    api.post(postURI, obj);
  }, []);

  useEffect(() => {
    getAndSetQuestions();
  }, [getURI, getAndSetQuestions]);

  return {
    questions,
    surveyValues,
    setSurveyValues,
    postQuestions,
  };
}
