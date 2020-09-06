import React, { useEffect, useState } from "react";
import "./styles.css";
import { Service } from "../../services";

const SearchField = (props) => {
  const service = new Service();
  const [country, setCountry] = useState("");
  const [countryRecord, setCountryRecord] = useState("");

  useEffect(() => {
    const getData = async () => {
      let result;

      if (country) {
        result = await service.getWeatherMapByCountry(country);
        console.log(result);
        if (result.status === 200) {
          const data = result.data;
          const newCountry = {
            temperature: data.main.temp,
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            maxtemperature: data.main.temp_max,
            mintemperature: data.main.temp_min,
            latitud: data.coord.lat,
            longitud: data.coord.lon,
          };

          setCountryRecord(newCountry);
        }
      }
    };

    getData();

    // const query = querystring.stringify({ search: value.trim() });
    // let url = "/";

    // if (value) {
    //   url = `/?${query}`;
    // }

    // history.push(url);
  }, [country]);

  return (
    <input
      className="search-field"
      onChange={(e) => setCountry(e.target.value)}
      {...props}
    />
  );
};

export default SearchField;
