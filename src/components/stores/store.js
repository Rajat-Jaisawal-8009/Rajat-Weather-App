import { configureStore } from "@reduxjs/toolkit";

import day5weatherSlice from "../sliceReducer/day5weatherSlice";
import currentWeatherSlice from '../sliceReducer/createSlice';
import airQualitySlice  from "../sliceReducer/airQualitySlice";
import themeSlice from "../sliceReducer/themeSlice";

const weatherStore = configureStore({
  reducer:{
    weatherData: currentWeatherSlice ,
    day5WeatherData:day5weatherSlice,
    airQuality:airQualitySlice,
    backgroundTheme : themeSlice

  }
})

export default  weatherStore;
