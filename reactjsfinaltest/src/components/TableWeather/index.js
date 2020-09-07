import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";

const TableWeather = (props) => {
  return (
    <Form.Group>
      <Form.Label className="font-weight-bold">Current Search</Form.Label>
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
          <tr>
            <td>{props.weatherData?.country}</td>
            <td>{props.weatherData?.temperature}</td>
            <td>{props.weatherData?.pressure}</td>
            <td>{props.weatherData?.humidity}</td>
            <td>{props.weatherData?.maxtemperature}</td>
            <td>{props.weatherData?.mintemperature}</td>
          </tr>
        </tbody>
      </Table>
    </Form.Group>
  );
};
export default TableWeather;
