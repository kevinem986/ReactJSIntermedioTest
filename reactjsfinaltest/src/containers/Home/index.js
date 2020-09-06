import React from "react";
import "./styles.css";
import { SearchField } from "../../components";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md="12" xs="2" className="mx-auto">
          <h2 styles="margin-right:auto">ReactJs Intermedio - Final Test</h2>{" "}
        </Col>
      </Row>
      <Row>
        <Col md="4" xs="2">
          <span>Search By Country</span>
          <SearchField placeholder="Search Weather Info By Country..." />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
