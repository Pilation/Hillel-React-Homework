import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2" className="d-flex justify-content-center">
          <Link
            to={"/dashboard"}
            className="link-success text-uppercase fs-4 fw-bolder"
          >
            dashboard
          </Link>
        </Col>
        <Col xs md="2" className="d-flex justify-content-center">
          <Link
            to={"/users"}
            className="link-primary text-uppercase fs-4 fw-bolder fw-bolder"
          >
            users
          </Link>
        </Col>
        <Col xs lg="2" className="d-flex justify-content-center">
          <Link
            to={"/albums"}
            className="link-secondary text-uppercase fs-4 fw-bolder fw-bolder"
          >
            albums
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
