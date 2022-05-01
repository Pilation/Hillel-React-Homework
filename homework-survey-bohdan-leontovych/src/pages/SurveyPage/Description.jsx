import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Description() {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography
        variant="body1"
        component="p"
        align="center"
        sx={{ fontWeight: "medium", my: 1 }}
      >
        Hi!
      </Typography>

      <Typography variant="body1" component="p" align="center" sx={{ my: 1 }}>
        Please answer the following questions in a range from 0 to 100 points.
      </Typography>
      <Typography variant="body1" component="p" align="center" sx={{ my: 1 }}>
        Where 0 is Completely Disagree and 100 is Completely agree.
      </Typography>
    </Box>
  );
}
