import useAPImethod from "../hooks/common";
import { ALBUMS_URI } from "../constants";
import { Container, Row, Col } from "react-bootstrap";

export default function Albums() {
  const { APIelements } = useAPImethod(ALBUMS_URI);

  return (
    <Container>
      <Row>
        {APIelements.map((album) => (
          <Col
            key={album.userId + APIelements.indexOf(album)}
            xs
            lg="2"
            className="
            bg-transparent
            flex-column
            justify-content-center
            p-1
            "
          >
            <div className="bg-primary rounded p-2 pb-4 h-100">
              <div
                className="
                bg-light 
                align-self-sm-stretch p-2 rounded"
              >
                <p>
                  <strong>user ID:</strong> {album.userId};
                </p>
                <p>
                  <strong>user Title:</strong> {album.title};
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
