import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Paper, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function LoginPage() {
  const [name, setName] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || "/";

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = name;

    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <Paper
      variant="outlined"
      sx={{ p: 4, mt: 10, width: "fit-content", mx: "auto" }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ mb: 4 }}
        color="primary"
        align="center"
      >
        Login page
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            required
            helperText="Please enter your Name"
            id="user-name"
            label="Name"
            type="text"
            value={name}
            onChange={handleChange}
            sx={{ mb: 4 }}
          />

          <Button type="submit" variant="outlined" color="primary">
            Login
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
