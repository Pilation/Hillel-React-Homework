import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navigation from "./Navigation";
// import { CustomLink } from "./CustomLink";

export default function Layout() {
  return (
    <>
      <header>
        <Container>
          <Navigation />
        </Container>
      </header>

      <main>
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
