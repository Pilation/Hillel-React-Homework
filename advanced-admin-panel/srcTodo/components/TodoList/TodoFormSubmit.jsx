import { TextField, Button, Box } from "@mui/material";

export default function TodoFormSubmit({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <TextField name="newTodo" fullWidth />
        <Button type="submit" variant="contained" color="success" size="large">
          Add
        </Button>
      </Box>
    </form>
  );
}
