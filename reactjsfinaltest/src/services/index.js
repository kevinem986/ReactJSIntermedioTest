import axios from "axios";
// import { openWeatherMapApiKey } from "../../utilities/config";

export class Service {
  async getWeatherMapByCountry(country) {
    const openWeatherMapApiKey = "f6e6fc3341a02a7d32c2c9637887e452";
    // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6e6fc3341a02a7d32c2c9637887e452
    let res = null;
    try {
      res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&APPID=${openWeatherMapApiKey}`
      );
    } catch (err) {
      res = err.response;
      // console.error(err);
    }

    return res;
  }
}
