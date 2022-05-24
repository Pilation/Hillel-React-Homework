import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import useQestionsAPI from "../../hooks/useQestionsAPI";
import SurveyModal from "./SurveyModal";
import Description from "./Description";
import SurveyCarousel from "./SurveyCarousel";

import { Grid, Box, Button, Paper } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SurveyPage() {
  const { questions, sendAnswers } = useQestionsAPI();
  const [index, setIndex] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [surveyValues, setSurveyValues] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

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

  useEffect(() => {
    setSurveyValues(prepareTemplateValues(questions));
  }, [questions, setSurveyValues, prepareTemplateValues]);

  useEffect(() => {
    if (surveyValues.length < 1) return;
    const checker = surveyValues.every((e) => e.hasOwnProperty("checked"));
    if (checker && !isDisplayed) {
      setIsDisplayed(true);
    }
  }, [surveyValues, setSurveyValues, isDisplayed]);

  const toggleModal = useCallback((e) => {
    e.preventDefault();
    setModalOpen((prev) => !prev);
  }, []);

  const handleInputChange = useCallback(
    (value, id) => {
      const newState = surveyValues.map((e) => {
        if (e.id !== id) {
          return e;
        }
        e.value = value;
        e.checked = true;
        return e;
      });
      setSurveyValues(newState);
    },
    [surveyValues, setSurveyValues]
  );

  const handleSlideChange = useCallback((slide) => {
    setIndex(slide.realIndex + 1);
  }, []);

  const handleModalSubmit = useCallback(() => {
    const answersToPost = surveyValues.map((e) => {
      return {
        questionId: e.id,
        value: e.value,
      };
    });
    const objToPost = {
      user: user,
      answers: answersToPost,
    };

    sendAnswers(objToPost);
    navigate("thankyou", { replace: true });
  }, [surveyValues, sendAnswers, user, navigate]);
  return (
    <>
      <Description />
      <Grid
        container
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} sx={{ mt: 10 }}>
          <form action="" onSubmit={toggleModal}>
            <Box sx={{ maxWidth: 550 }}>
              <Paper variant="outlined" sx={{ px: 2, py: 4 }}>
                <Stack
                  spacing={2}
                  sx={{ mx: "auto", mb: 4, width: "fit-content" }}
                >
                  <Pagination
                    count={questions.length}
                    color="primary"
                    hideNextButton
                    hidePrevButton
                    page={index}
                    variant="outlined"
                    sx={{ pointerEvents: "none" }}
                    size="large"
                  />
                </Stack>
                <SurveyCarousel
                  handleSlideChange={handleSlideChange}
                  handleInputChange={handleInputChange}
                  questions={questions}
                />

                <Box textAlign="center">
                  {isDisplayed && (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{ mx: "auto" }}
                      size="large"
                    >
                      Submit
                    </Button>
                  )}
                </Box>
              </Paper>
            </Box>
          </form>
        </Grid>
      </Grid>
      <SurveyModal
        defaultValue="Please, choose a value"
        open={modalOpen}
        handleClose={toggleModal}
        answers={surveyValues}
        handleSubmit={handleModalSubmit}
      />
    </>
  );
}
