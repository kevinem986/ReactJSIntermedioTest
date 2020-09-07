import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Service } from "../../services";
import { useWeatherData } from "../../utilities/hooks/use-weather-data";

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

  return (
    <Form.Group>
      <Form.Label className="font-weight-bold">Search By Country</Form.Label>
      <Form.Control onChange={(e) => setCountry(e.target.value)} {...props} />
    </Form.Group>
  );
};

export default SearchField;
