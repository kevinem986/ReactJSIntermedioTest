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

  const setHistoryData = (record) => {
    setWeatherData(record);
  };

  const deleteHistoryData = (record) => {
    const index = countryHistory.indexOf(record);
    countryHistory.splice(index, 1);
    setWeatherData(countryHistory);
    localStorage.setItem(
      "countrySearchHistory",
      JSON.stringify(countryHistory)
    );
  };

  return (
    <Form.Group>
      <Form.Label className="font-weight-bold h4">History</Form.Label>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr className="text-center">
            <th>Country</th>
            <th>Temperature</th>
            <th>Max Temperature</th>
            <th>Min Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {countryHistory &&
            countryHistory.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{data.country}</td>
                  <td>{data.temperature}</td>
                  <td>{data.maxtemperature}</td>
                  <td>{data.mintemperature}</td>
                  <td>{data.pressure}</td>
                  <td>{data.humidity}</td>
                  <td className="text-center">
                    <Button
                      variant="outline-primary"
                      onClick={() => setHistoryData(data)}
                      className="btn btn-icon m-1"
                      size="sm"
                    >
                      Select Country
                    </Button>
                    <Button
                      variant="outline-danger"
                      onClick={() => deleteHistoryData(data)}
                      className="btn btn-icon m-1"
                      size="sm"
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
