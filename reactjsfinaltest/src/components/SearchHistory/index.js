import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useWeatherData } from "../../utilities/hooks/use-weather-data";

const SearchHistory = () => {
  const [countryHistory, setCountryHistory] = useState([]);
  const { setWeatherData, weatherData } = useWeatherData();
  const getSearchHistory = () => {
    const storedInfo = localStorage.getItem("countrySearchHistory");
    return JSON.parse(storedInfo);
  };
  useEffect(() => {
    setCountryHistory(getSearchHistory());
  }, [weatherData]);

  const getData = (record) => {
    setWeatherData(record);
  };
  return (
    <Form.Group>
      <Form.Label className="font-weight-bold">History</Form.Label>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Country</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th>Max Temperature</th>
            <th>Min Temperature</th>
          </tr>
        </thead>
        <tbody>
          {countryHistory.map((l, i) => {
            return (
              <tr key={i}>
                <td>{l.country}</td>
                <td>{l.temperature}</td>
                <td>{l.pressure}</td>
                <td>{l.humidity}</td>
                <td>{l.maxtemperature}</td>
                <td>{l.mintemperature}</td>
                <td>
                  <Button variant="outline-primary" onClick={() => getData(l)}>
                    Select Country
                  </Button>
                </td>
                <td>
                  <Button
                    variant="outline-danger"
                    // onClick={setSelectCountry(countryHistory[i])}
                  >
                    Delete Country
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Form.Group>
  );
};

export default SearchHistory;
