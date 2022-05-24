import { useAuth } from "../hooks/useAuth";
import { Paper, TextField, Button, Box } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";

export default function LoginPage() {
  const [name, setName] = useState("");
  const { signin } = useAuth();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signin(name);
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        p: 4,
        mt: 10,
        width: 500,
        mx: "auto",
      }}
    >
      <Typography
        variant="h4"
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
