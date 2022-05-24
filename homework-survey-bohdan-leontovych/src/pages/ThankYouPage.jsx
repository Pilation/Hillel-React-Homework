import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

export default function ThankYouPage() {
  const navigate = useNavigate();
  const handleOnclick = () => navigate("/", { replace: true });

  return (
    <Box
      variant="outlined"
      sx={{
        p: 6,
        mt: 10,
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" component="h1" color="primary" align="center">
        Thank you
      </Typography>
      <Typography variant="body1" component="p" sx={{ py: 2 }} align="center">
        Your answers were submitted!
      </Typography>
      <Typography variant="body1" component="p" sx={{ pt: 2 }} align="center">
        Have a very nice day!
      </Typography>

      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={handleOnclick}
        sx={{ mt: 6 }}
      >
        Go home
      </Button>
    </Box>
  );
}
