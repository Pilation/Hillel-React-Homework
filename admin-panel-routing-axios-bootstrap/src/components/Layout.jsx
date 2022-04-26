import { Outlet } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";
import { CustomLink } from "./CustomLink";
import { BackButton } from "./BackButton";

export default function Layout() {
  return (
    <>
      <header>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2" className="d-flex justify-content-center">
              <CustomLink
                to="/"
                className="link-secondary text-uppercase fs-4 fw-bolder"
              >
                dashboard
              </CustomLink>
            </Col>
            <Col xs md="2" className="d-flex justify-content-center">
              <CustomLink
                to="users"
                className="link-secondary text-uppercase fs-4 fw-bolder fw-bolder"
              >
                users
              </CustomLink>
            </Col>
            <Col xs lg="2" className="d-flex justify-content-center">
              <CustomLink
                to="albums"
                className="link-secondary text-uppercase fs-4 fw-bolder fw-bolder"
              >
                albums
              </CustomLink>
            </Col>
          </Row>
        </Container>
      </header>

      <main>
        <Container>
          <BackButton />

          <Outlet />
        </Container>
      </main>

      <footer>
        <Container>Footer</Container>
      </footer>
    </>
  );
}
