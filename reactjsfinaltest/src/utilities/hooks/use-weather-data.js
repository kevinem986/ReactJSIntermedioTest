import React, { useState, useContext, createContext } from "react";
const WeatherDataContext = createContext({});

export const WeatherProvider = ({ children }) => {
  const weatherProvider = useWeatherProvider();

  return (
    <WeatherDataContext.Provider value={weatherProvider}>
      {children}
    </WeatherDataContext.Provider>
  );
};

const useWeatherProvider = () => {
  const [weatherData, setWeatherData] = useState([]);

  return { weatherData, setWeatherData };
};
export const useWeatherData = () => useContext(WeatherDataContext);
