import React from "react";
import Home from "./containers/Home";
import { WeatherProvider } from "./utilities/hooks/use-weather-data";

function App() {
  return (
    <WeatherProvider>
      <Home />
    </WeatherProvider>
  );
}

export default App;
