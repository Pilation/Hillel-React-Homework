import { useEffect, useState, useCallback } from "react";
import { Grid, Box, Button, Paper } from "@mui/material";

import { useAuth } from "../../hooks/useAuth";

import { QUESTIONS_URI, ANSWERS_URI } from "../../constants";
import useQestionsAPI from "../../hooks/useQestionsAPI";
import SurveyModal from "./SurveyModal";
import Description from "./Description";

import SurveyCarousel from "./SurveyCarousel";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SurveyPage() {
  const { questions, surveyValues, setSurveyValues, postQuestions } =
    useQestionsAPI(QUESTIONS_URI);
  const [index, setIndex] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (surveyValues.length < 1) return;
    const checker = surveyValues.every((e) => e.hasOwnProperty("checked"));
    if (checker && isDisabled) {
      setIsDisabled(false);
    }
  }, [surveyValues, setSurveyValues, isDisabled]);

  const toggleModal = useCallback(() => {
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

  // review
  const handleModalSubmit = useCallback(() => {
    const answersToPost = surveyValues.map((e) => {
      const answers = {};
      answers.questionId = e.id;
      answers.value = e.value;
      return answers;
    });
    const objToPost = {
      user: user,
      answers: answersToPost,
    };

    postQuestions(ANSWERS_URI, objToPost);
  }, [surveyValues, postQuestions, user]);
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
          <Box sx={{ maxWidth: 500 }}>
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
                />
              </Stack>
              <SurveyCarousel
                handleSlideChange={handleSlideChange}
                handleInputChange={handleInputChange}
                questions={questions}
              />

              <Box textAlign="center">
                <Button
                  onClick={toggleModal}
                  disabled={isDisabled}
                  variant="outlined"
                  color="primary"
                  sx={{ mx: "auto" }}
                >
                  Submit
                </Button>
              </Box>
            </Paper>
          </Box>
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
