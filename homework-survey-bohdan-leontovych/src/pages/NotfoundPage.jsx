import { useNavigate } from "react-router-dom";
import { Paper, Typography, Button } from "@mui/material";

export default function Notfoundpage() {
  const navigate = useNavigate();
  const handleOnclick = () => navigate("/", { replace: true });

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        mt: 10,
        width: "fit-content",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ mb: 4 }}
        color="primary"
        align="center"
      >
        This page doesn't exist
      </Typography>

      <Button
        type="button"
        variant="outlined"
        color="primary"
        onClick={handleOnclick}
      >
        Go home
      </Button>
    </Paper>
  );
}
