import UsersItem from "./ UsersItem";
import useAPImethod from "../hooks/common";
import { USERS_URI, ALBUMS_URI } from "../constants";
import { Container, Row, Col } from "react-bootstrap";

export default function Users() {
  const { APIelements } = useAPImethod(USERS_URI);

  return (
    <Container>
      <Row>
        {APIelements.map((APIelement) => (
          <Col
            key={APIelement.id}
            xs
            lg="4"
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
                <UsersItem data={APIelement}></UsersItem>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
