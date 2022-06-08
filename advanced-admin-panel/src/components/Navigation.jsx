import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { BackButton } from "./BackButton";

export default function Navigation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        my: 1,
        gap: 2,
      }}
    >
      <BackButton />
      <Link to="/">dashboard</Link>
      <Link to="/users">users</Link>
      <Link to="/albums">albums</Link>
    </Box>
  );
}
