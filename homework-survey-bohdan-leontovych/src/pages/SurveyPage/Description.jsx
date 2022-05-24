import { Typography } from "@mui/material";
import { Box } from "@mui/material";

export default function Description() {
  return (
    <Box sx={{ mt: 10, mx: "auto" }}>
      <Typography
        variant="body1"
        component="p"
        align="center"
        sx={{ fontWeight: "medium", my: 1, fontSize: 20 }}
      >
        Hi!
      </Typography>

      <Typography
        variant="body1"
        component="p"
        align="center"
        sx={{ my: 1, fontSize: 20 }}
      >
        Please answer the following questions in a range from 0 to 100 points.
      </Typography>
    </Box>
  );
}
