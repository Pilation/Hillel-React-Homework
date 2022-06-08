import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import useTodosAPI from "../../hooks/useTodosAPI";
import { useSelector } from "react-redux";
import {
  Container,
  List,
  Typography,
  Paper,
  ListItem,
  CircularProgress,
  Card,
} from "@mui/material";

export default function TodoList() {
  const { postTodo, changeTodo, deleteTodo } = useTodosAPI();
  const todos = useSelector((state) => state.todos);
  const requestStatus = useSelector((state) => state.requestStatus);
  console.log(requestStatus);

  const handleClick = (id) => {
    deleteTodo(id);
  };

  const handleCheckbox = (e, id, text) => {
    changeTodo({ description: text, completed: e.target.checked }, id);
  };

  const handleSubmitNew = (e) => {
    e.preventDefault();
    postTodo({
      description: e.target.newTodo.value,
      completed: false,
    });
    e.target.reset();
  };

  const handleSubmitChange = (e, id) => {
    e.preventDefault();
    changeTodo(
      { description: e.target.newTodo.value, completed: e.target.checked },
      id
    );
  };

  return (
    <Container>
      <Typography
        variant="h2"
        component="h1"
        sx={{ textAlign: "center", mt: 4, mb: 2 }}
      >
        My plans
      </Typography>
      <Paper sx={{ border: "1px solid #00000040", px: 1 }}>
        <List sx={{ m: 0, p: 0 }}>
          {todos.map((el) => {
            return requestStatus !== "done" ? (
              <ListItem
                key={el.id}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                  my: 1,
                  gap: 2,
                }}
              >
                <CircularProgress size={42} />
              </ListItem>
            ) : (
              <TodoItem
                key={el.id}
                id={el.id}
                text={el.description}
                handleClick={handleClick}
                completed={el.completed}
                handleCheckbox={handleCheckbox}
                color={el.completed ? "#06c25840" : "#f4ede4"}
                requestStatus={requestStatus}
                handleSubmitChange={handleSubmitChange}
              />
            );
          })}
        </List>
      </Paper>
      <Card
        sx={{
          mt: 2,
          mb: 4,
          p: 2,
        }}
      >
        <TodoForm handleSubmit={handleSubmitNew} buttonText="add" />
      </Card>
    </Container>
  );
}
