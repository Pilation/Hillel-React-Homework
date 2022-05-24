import { TextField, Button, Box } from "@mui/material";

export default function TodoForm({ handleSubmit, defaultValue, buttonText }) {
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField name="newTodo" fullWidth defaultValue={defaultValue} />
        <Button type="submit" variant="contained" color="success" size="large">
          {buttonText}
        </Button>
      </Box>
    </form>
  );
}
