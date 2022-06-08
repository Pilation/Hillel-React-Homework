import UsersItem from "./ UsersItem";
import { useUsers } from "../../hooks/common";

import { Paper, Box, Button } from "@mui/material";

export default function Users() {
  const { users } = useUsers();

  const newUser = (
    <Paper
      sx={{
        p: 2,
        maxWidth: "25%",
        width: "100%",
        minWidth: 330,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "16px solid salmon",
        boxSizing: "border-box",
      }}
    >
      <Button
        // onClick={goBack}
        variant="contained"
        sx={{
          backgroundColor: "salmon",
          color: "white",
        }}
        size="medium"
      >
        add new user
      </Button>
    </Paper>
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "stretch",
        gap: 3,
      }}
    >
      {newUser}
      {users.map((user) => (
        <UsersItem data={user} key={user.id}></UsersItem>
      ))}
    </Box>
  );
}
