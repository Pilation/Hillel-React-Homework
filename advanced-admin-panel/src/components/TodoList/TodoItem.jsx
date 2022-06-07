import {
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  IconButton,
  ListItem,
} from "@mui/material";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function TodoItem({
  text,
  id,
  completed,
  handleClick,
  handleSubmitChange,
  handleCheckbox,
  color,
}) {
  const [editMode, setEditMode] = useState(false);
  const handleEdit = (e) => {
    setEditMode(!editMode);
  };

  const handleSubmit = (e, id) => {
    handleSubmitChange(e, id);
    setEditMode(!editMode);
  };

  return (
    <>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          p: 1,
          my: 1,
          gap: 2,
          backgroundColor: color,
        }}
      >
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked={completed}
              color="success"
              onChange={(e) => handleCheckbox(e, id, text)}
            />
          }
          label="Done"
        />
        {editMode ? (
          <Box sx={{ width: "100%" }}>
            <TodoForm
              defaultValue={text}
              handleSubmit={(e) => handleSubmit(e, id)}
              buttonText="edit"
            />
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              m: 0,
              p: 0,
              gap: 2,
            }}
          >
            <Typography variant="body2" component="span">
              {text}
            </Typography>

            <IconButton
              variant="outlined"
              aria-label="delete"
              color="error"
              onClick={() => handleClick(id)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        )}

        <IconButton variant="outlined" aria-label="edit" onClick={handleEdit}>
          <EditOutlinedIcon />
        </IconButton>
      </ListItem>
    </>
  );
}
