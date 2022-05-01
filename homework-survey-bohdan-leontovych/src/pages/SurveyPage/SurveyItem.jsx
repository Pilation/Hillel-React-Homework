import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import { Grid } from "@mui/material";

export default function SurveyItem({ data, handleInputChange }) {
  const [helperText, setHelperText] = useState(
    "Please, be honest in your answers"
  );

  const handleRadioChange = (event) => {
    handleInputChange(event.target.value, id);
    setHelperText(" ");
  };

  const { question, id } = data;

  const Labels = [];
  for (let index = 0; index <= 100; index += 10) {
    Labels.push(
      <FormControlLabel
        key={index}
        value={index}
        control={<Radio />}
        label={index}
        labelPlacement="bottom"
        sx={{
          "& .MuiSvgIcon-root": {
            fontSize: 16,
          },
          m: 0.5,
          "&, &.Mui-checked": {
            color: "primary",
          },
          color: "#1976d2",
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
            width: "80%",
            p: 1,
            mb: 4,
            mx: "auto",
            textAlign: "center",
            minHeight: 60,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormLabel id="survey-questions">{question}</FormLabel>
        </Paper>
        <RadioGroup
          row
          aria-labelledby="survey-questions"
          name="quiz"
          onChange={handleRadioChange}
          justify="center"
          sx={{ justifyContent: "center" }}
        >
          {Labels}
        </RadioGroup>
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ px: 1 }}
        >
          <Grid item xs={1}>
            <Typography
              variant="body2"
              component="p"
              align="right"
              sx={{ my: 1, color: "rgba(0, 0, 0, 0.6)" }}
            >
              no
            </Typography>
          </Grid>
          <Grid item xs={10}>
            <Divider />
          </Grid>
          <Grid item xs={1}>
            <Typography
              variant="body2"
              component="p"
              sx={{ my: 1, color: "rgba(0, 0, 0, 0.6)" }}
            >
              yes
            </Typography>
          </Grid>
        </Grid>

        <FormHelperText sx={{ textAlign: "center" }}>
          {helperText}
        </FormHelperText>
      </FormControl>
    </>
  );
}
