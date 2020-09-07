import React from "react";
import {
  SearchField,
  TableWeather,
  SearchHistory,
  SearchCountryMap,
} from "../../components";
import { Row, Col, Container } from "react-bootstrap";
import { useWeatherData } from "../../utilities/hooks/use-weather-data";

const Home = () => {
  const { weatherData } = useWeatherData();
  // const [data, setData] = useState({});
  return (
    <Container fluid={true}>
      <Row>
        <Col md="12" xs="2" className="mx-auto text-center">
          <span className="display-4">ReactJs Intermedio - Final Test</span>
        </Col>
      </Row>
      <Row>
        <Col md="4" xs="12" className="pt-4">
          <SearchField
            placeholder="Search..."
            // setdata={(value) => setData(value)}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6" xs="12" className="pt-4">
          <TableWeather weatherData={weatherData}></TableWeather>
          <SearchHistory></SearchHistory>
        </Col>
      </Row>
      <Row>
        <SearchCountryMap
          id="leafletmap"
          weatherData={weatherData}
          style={{ width: "100%", height: "800px" }}
        ></SearchCountryMap>
      </Row>
    </Container>
  );
};

export default Home;
