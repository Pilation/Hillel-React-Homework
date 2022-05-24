import { useCallback } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Paper } from "@mui/material";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";

export default function SurveyItem({ data, handleInputChange }) {
  const { question, id } = data;

  const handleRadioChange = useCallback(
    (event) => {
      handleInputChange(event.target.value, id);
    },
    [handleInputChange, id]
  );

  const colors = [
    "#dd776e",
    "#e2886c",
    "#e79a69",
    "#ecac67",
    "#e9b861",
    "#f5ce62",
    "#d4c86a",
    "#b0be6e",
    "#94bd77",
    "#73b87e",
    "#57bb8a",
  ];

  const colorPicker = (i) => {
    if (!i) {
      return i;
    }
    return i / 10;
  };

  const labels = [];
  for (let index = 0; index <= 100; index += 10) {
    labels.push(
      <FormControlLabel
        key={index}
        value={index}
        control={<Radio />}
        label={index}
        labelPlacement="bottom"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 20,
          },
          m: 0.5,
          "&, &.Mui-checked": {
            color: "primary",
          },
          color: colors[colorPicker(index)],
        }}
      />
    );
  }

  return (
    <>
      <FormControl variant="standard" size="medium" color="primary">
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            mb: 4,
            mx: "auto",
            textAlign: "center",
            minHeight: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormLabel id="survey-questions" sx={{ fontSize: 20 }}>
            {question}
          </FormLabel>
        </Paper>
        <RadioGroup
          row
          aria-labelledby="survey-questions"
          name="quiz"
          onChange={handleRadioChange}
          justify="center"
          sx={{ justifyContent: "center" }}
        >
          {labels}
        </RadioGroup>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ px: 1, py: 3 }}
        >
          <Grid item xs={2} sx={{ textAlign: "center", p: 0 }}>
            <SentimentDissatisfiedOutlinedIcon
              sx={{ color: colors[0], fontSize: 30 }}
            />
          </Grid>
          <Grid item xs={8}>
            <Divider />
          </Grid>
          <Grid item xs={2} sx={{ textAlign: "center", p: 0 }}>
            <SentimentSatisfiedAltOutlinedIcon
              sx={{ color: colors[colors.length - 1], fontSize: 30 }}
            />
          </Grid>
        </Grid>
      </FormControl>
    </>
  );
}
