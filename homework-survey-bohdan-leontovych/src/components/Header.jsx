import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

export default function Header() {
  const { signout, user } = useAuth();
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {user && (
            <Button
              variant="outlined"
              onClick={() => signout(() => navigate("/", { replace: true }))}
              color="inherit"
            >
              Logout
            </Button>
          )}
          <Box sx={{ flexGrow: 1 }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
