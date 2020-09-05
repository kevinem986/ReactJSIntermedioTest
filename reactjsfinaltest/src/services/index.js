import axios from "axios";
import { openWeatherMapApiKey } from "../../utilities/config";

const axios = require("axios");
export class Service {
  async getWeatherMapByCountry(country) {
    // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f6e6fc3341a02a7d32c2c9637887e452
    const res = await this.axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${country}&APPID${openWeatherMapApiKey}`
    );
    return res.data;
  }
}
