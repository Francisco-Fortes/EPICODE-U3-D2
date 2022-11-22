import { Container, Row, Col } from "react-bootstrap";

const MyJumbotron = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <jumbotron className="justify-content-center">
            <h1>Books4Free</h1>
            <h3>Cheapest bookstore you will never find</h3>
          </jumbotron>
        </Col>
      </Row>
    </Container>
  );
};
export default MyJumbotron;
