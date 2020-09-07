import React, { useEffect, useState } from "react";
import { Service } from "../../services";
import { useWeatherData } from "../../utilities/hooks/use-weather-data";
import Form from "react-bootstrap/Form";
import { Row, Col, Container } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const countryList = [];
const SearchField = (props) => {
  const service = new Service();
  const [country, setCountry] = useState("");
  const { setWeatherData } = useWeatherData();

  useEffect(() => {
    const getData = async () => {
      let result;

      if (country) {
        result = await service.getWeatherMapByCountry(country);
        if (result.status === 200) {
          const data = result.data;

          const newCountry = {
            country: data.name,
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            maxtemperature: data.main.temp_max,
            mintemperature: data.main.temp_min,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };
          setWeatherData(newCountry);

          countryList.push(newCountry);
          if (countryList.length > 5) countryList.shift();

          localStorage.setItem(
            "countrySearchHistory",
            JSON.stringify(countryList)
          );
          //   props.setdata(newCountry);
        }
      }
    };
    getData();
  }, [country]);

  const searchCountry = async (e) => {
    e.preventDefault();
    const { country } = e.target.elements;
    if (country.value) setCountry(country.value);
  };

  return (
    <Container>
      <Row>
        <Col md="12" xs="12" className="mx-auto">
          <Form onSubmit={searchCountry}>
            <Form.Group>
              <Form.Label className="font-weight-bold">
                Search By Country
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="text"
                  name="country"
                  {...props}
                ></Form.Control>
                <InputGroup.Append>
                  <Button type="input" variant="primary">
                    Search Weather Info
                  </Button>
                </InputGroup.Append>
              </InputGroup>
              {/* <Form.Control
                type="text"
                name="country"
                // onChange={(e) => setCountry(e.target.value)}
                {...props}
              /> */}
              {/* <Button type="input" variant="primary">
                Search Weather Info
              </Button> */}
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchField;
