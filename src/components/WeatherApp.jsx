import React, { useEffect, useState } from 'react'
import './cssFiles/weatherAppCss.css'
import { useDispatch, useSelector } from 'react-redux'
import logo from './image/image.js'
import sunrise from './image/sunrise.png'
import sunset from './image/sunset.png'
import theme from './image/themeImg/nebula.png'
import { airQualityFetch } from './sliceReducer/airQualitySlice.js'
import { clear } from '@testing-library/user-event/dist/clear.js'


function WeatherApp() {

  const weatherData = useSelector((state) => state.weatherData)

  const weather5Day = useSelector((state) => state.day5WeatherData.day5weather)

  const aqiWeatherData = useSelector((state) => state.weatherData.cwd)

  const aqiApiData = useSelector((state) => state.airQuality.airQualityData)


  // const [aqiApiData, setAqiApiData] = useState({})

  const [timeNum, setTimeNum] = useState(2)

  console.log(timeNum)

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November']



  const aQiQuality = ['Very Good', 'Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']





  const airqualityDispatch = useDispatch()

  useEffect(() => {

    airqualityDispatch(airQualityFetch(aqiWeatherData))

  }, [weatherData?.cwd])






  const [timeAmPm, setTimeAmPm] = useState("")

  const timeFunction = () => {
    if(weatherData?.cwd?.timezone){
      const times = new Date().getTime()
  const hours = new Date( (weatherData?.cwd?.timezone*1000) + times).getUTCHours();
  const minutes =  new Date((weatherData?.cwd?.timezone*1000) + times).getUTCMinutes();

  if (hours < 12 && hours >= 0) {
    const timeAm = (` ${hours === 0 ? 12 : hours } : ${minutes < 10 ? '0' + minutes : minutes} AM`)

    setTimeAmPm(timeAm)
  } else {
    const timePm = ( `${hours === 12 ? 12 : hours - 12} : ${minutes < 10 ? '0' + minutes : minutes} PM ` )
  
    setTimeAmPm(timePm)
    console.log(timePm)
  }
    }
  
  }

 


 useEffect(() => {

  let intervalId = setInterval(timeFunction,1000)
  return(() => {
    clearInterval(intervalId)
    setInterval(intervalId)
})

},[weatherData?.cwd?.timezone])








  const getTheme = useSelector((state) => state.backgroundTheme);



  console.log(new Date((weatherData?.cwd?.sys?.sunrise + (weatherData?.cwd?.timezone)) * 1000).getUTCHours() + ':' + new Date((weatherData?.cwd?.sys?.sunrise + (weatherData?.cwd?.timezone)) * 1000).getUTCMinutes())

  return (
    <div className='weather-container'>

      <div className='weather-wrap' style={{ backgroundImage: `URL(${getTheme.theme})`, background: getTheme.theme }}>

        {/* //-----------------------------day5-weather-container------------------------------------- */}

        <div className='day5_3Hr_weather_container'>


          <div className='day5_3Hr_weather_wrap'>

            {weather5Day?.list?.map((value, ii) => (



              <div key={ii * 256} className='day5_3Hr_weather_colm' style={{ backgroundColor: getTheme.colorBox }}>

                <div className='day5_3Hr_weather_img_box' >
                  <div className='day5_3Hr_weather_img'>{logo.filter((val) => val.description == value.weather[0].description).map((logoData) => <img key={ii * 56464} className='day5_3Hr_weather_img_tag' src={new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() > new Date((weather5Day.city.timezone + weather5Day.city.sunrise) * 1000).getUTCHours() && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() < new Date((weather5Day.city.timezone + weather5Day.city.sunset) * 1000).getUTCHours() ? logoData.imgDay : logoData.imgNight} alt="logo" width={'100px'} />)}</div>
                </div>

                <div className='day5_3Hr_weather_tempre_box'> <div className='day5_3Hr_weather_tempre'>{Math.round(value.main.temp)}&deg;c </div></div>

                <div className='day5_3Hr_weather_description' style={{ backgroundColor: getTheme.colorBox }}>

                  <div className='day5_3Hr_weather_descr_top'>
                    <span>{value.weather[0].description}</span>
                  </div>

                  <div className='day5_3Hr_weather_temp_bottom' >

                    <div className='day5_3Hr_weather_feel_like'>  <div className='day5_3Hr_weather_feel_like_value'>{Math.round(value.main.feels_like)}&deg;c </div> <div className='day5_3Hr_weather_feel_like_text'>Feel like</div>  </div>
                    <div className='day5_3Hr_weather_temp_max'>  <div className='day5_3Hr_weather_temp_max_value'>{Math.round(value.main.temp_max)}&deg;c </div> <div className='day5_3Hr_weather_temp_max_text'>Temp max</div>  </div>
                    <div className='day5_3Hr_weather_temp_min'>  <div className='day5_3Hr_weather_temp_min_value'>{Math.round(value.main.temp_min)}&deg;c</div> <div className='day5_3Hr_weather_temp_min_text'>Temp min</div>  </div>


                  </div>
                </div>

                <div className='day5_3Hr_weather_timeDate'>
                  <div className='day5_3Hr_weather_time'>{new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() <= 11 ? ` ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 0 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours()} : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()} AM ` : `${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 12 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() - 12 } : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()} PM `}</div>
                  <div className='day5_3Hr_weather_day'> {days[new Date(weather5Day?.city?.timezone + value.dt * 1000).getUTCDay()]} </div>
                  <div className='day5_3Hr_weather_date'>{new Date(weather5Day?.city?.timezone + value.dt * 1000).getUTCDate() + ' / ' + (new Date(weather5Day?.city?.timezone + value.dt * 1000).getUTCMonth() + 1) + ' / ' + new Date(weather5Day?.city?.timezone + value.dt * 1000).getUTCFullYear()}</div>

                </div>



              </div>))}



          </div>
        </div>


        {/* //--------------------------------current-weather-wrap------------------------------------ */}

        <div className='current_weather_Container'  >

          <div className='current_weather_wrap'>
            {/* <button onClick={colors}>colors ch</button> */}

            {/* //-------------------temp_infor---------------------- */}


            <div className='current_weather_temp_infor_wrap '>

              {weatherData.loading ? <div className='temp_infor_image_time_colm loader'></div> :
                <div className='temp_infor_image_time_colm' style={{ backgroundColor: getTheme.colorBox }}>

                  <div className='temp_infor_image_box'>{weatherData?.cwd?.weather ? logo.filter((val) => val.description == weatherData?.cwd?.weather[0]?.description).map((logoData, ii) => <img key={ii * 87545454} className='current_weather_img_tag' src={new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getTime() > new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getTime() && new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getTime() < new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getTime() ? logoData.imgDay : logoData.imgNight} alt="logo" width={'100px'} />) : ""}</div>
                  <div className='temp_infor_time_box'> {timeAmPm}</div>

                </div>}


              {weatherData.loading ? <div className='temp_infor_description_colm loader'> </div> :
                <div className='temp_infor_description_colm' style={{ backgroundColor: getTheme.colorBox }}>

                  <div className='description_tempreture_box'>{Math.round(weatherData?.cwd?.main?.temp)}<small><sup>&deg;</sup>c</small></div>

                  <div className='description_text_box'>{weatherData?.cwd?.weather ? weatherData?.cwd?.weather[0]?.description : "..."}</div>

                  <div className='description_city_box'>{weatherData?.cwd?.name + "," + " "+ weatherData?.cwd?.sys?.country} </div>

                </div>}


              {weatherData.loading ? <div className='temp_infor_date_colm loader'></div> :
                <div className='temp_infor_date_colm' style={{ backgroundColor: getTheme.colorBox }}>

                  <div className='temp_infor_date_box'>{new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getUTCDate()} </div>
                  <div className='temp_infor_day_box'>{days[new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getUTCDay()]}</div>
                  <div className='temp_infor_month_box'>{month[new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getUTCMonth()]}</div>
                  <div className='temp_infor_year_box'>{new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.dt) * 1000).getUTCFullYear()}</div>



                </div>}

            </div>


            {/* //-------------------all_inform---------------------- */}


            <div className='current_weather_all_infor_wrap'>

              {weatherData.loading ? <div className='all_infor_temp_max_colm loader'></div> :
                <div className='all_infor_temp_max_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='temp_max_value'>{Math.round(weatherData?.cwd?.main?.temp_max)}&deg;c </div>
                  <div className='temp_max_text'>Temp max</div>
                </div>}

              {weatherData.loading ? <div className='all_infor_temp_min_colm loader'></div> :
                <div className='all_infor_temp_min_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='temp_min_value'>{Math.round(weatherData?.cwd?.main?.temp_min)}&deg;c</div>
                  <div className='temp_min_text'>Temp min</div>
                </div>}

              {weatherData.loading ? <div className='all_infor_feel_like_colm loader'></div> :
                <div className='all_infor_feel_like_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='feel_like_value'>{Math.round(weatherData?.cwd?.main?.feels_like)}&deg;c</div>
                  <div className='feel_like_text'>Feels like</div>
                </div>}

              {weatherData.loading ? <div className='all_infor_humidity_colm loader'></div> :
                <div className='all_infor_humidity_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='humidity_value'>{weatherData?.cwd?.main?.humidity} <small>%</small> </div>
                  <div className='humidity_text'>Humidity</div>
                </div>}

              {weatherData.loading ? <div className='all_infor_visibility_colm loader'></div> :
                <div className='all_infor_visibility_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='visibility_value'>{weatherData?.cwd?.visibility / 1000} <small>km</small> </div>
                  <div className='visibility_text'>Visibility</div>
                </div>}

              {weatherData.loading ? <div className='all_infor_wind_speed_colm loader' ></div> :
                <div className='all_infor_wind_speed_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='wind_speed_value'>{Math.round(weatherData?.cwd?.wind?.speed * 3600 / 1000)} <small>km/h</small> </div>
                  <div className='wind_speed_text'>Wind</div>
                </div>}


            </div>


            {/* //-------------------_air_quality_---------------------- */}


            <div className='current_weather_air_quality_wrap'>

              {weatherData.loading ? <div className='air_quality_grade_colm loader'></div> :
                <div className='air_quality_grade_colm' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='air_quality_grade_box'>{aqiApiData?.list ? aQiQuality[aqiApiData?.list[0]?.main?.aqi] : "NaN"}</div>
                  <div className='air_quality_units_box'>&micro;g/m<sup>3</sup> </div>
                  <div className='air_quality_text_box'> Air Quality</div>
                </div>}

              <div className='air_quality_all_value_colm'>

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? Math.round(aqiApiData?.list[0]?.components?.co) : "0.0"}</div>
                    <div className='air_quality_all_text'>CO<sub><small>2</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.no : "0.0"}</div>
                    <div className='air_quality_all_text'>NO</div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.no2 : "0.0"}</div>
                    <div className='air_quality_all_text'>NO<sub><small>2</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? Math.round(aqiApiData?.list[0]?.components?.o3) : "0.0"}</div>
                    <div className='air_quality_all_text'>O<sub><small>3</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.so2 : "0.0"}</div>
                    <div className='air_quality_all_text'>SO<sub><small>2</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.pm2_5 : "0.0"}</div>
                    <div className='air_quality_all_text'>PM<sub><small>2 .5</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.pm10 : "0.0"}</div>
                    <div className='air_quality_all_text'>PM<sub><small>10</small></sub></div>
                  </div>}

                {weatherData.loading ? <div className='air_quality_all_value_box loader'></div> :
                  <div className='air_quality_all_value_box' style={{ backgroundColor: getTheme.colorBox }}>
                    <div className='air_quality_all_value'>{aqiApiData?.list ? aqiApiData?.list[0]?.components?.nh3 : "0.0"}</div>
                    <div className='air_quality_all_text'>NH<sub><small>3</small></sub></div>
                  </div>}


              </div>

            </div>



            {/* //------------------sun_set_rise----------------------- */}

            {weatherData.loading ? <div className='current_weather_sun_set_rise_wrap loader'></div> :
            <div className='current_weather_sun_set_rise_wrap'>


            <div className='current_weather_sunrise_colm' style={{ backgroundColor: getTheme.colorBox }}>
              <div className='sunrise_image_box'>
                <div className='sunrise_image'><img className='sunrise_image_tag' src={sunrise} alt="sunrise" width={"70px"} /></div>
              </div>

              <div className='sunrise_time_text_box'>
                <div className='sunrise_time'>{new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCHours() >= 0 && new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCHours() <= 11 ? `${new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCHours()} : ${new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCMinutes() >= 0 && new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCMinutes() : new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunrise) * 1000).getUTCMinutes()} AM ` : ""}</div>
                <div className='sunrise_text'>Sunrise</div>
              </div>
            </div>


            <div className='current_weather_sunset_colm'>

              <div className='sunset_time_text_box'>
                <div className='sunset_time'>{new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCHours() >= 0 && new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCHours() <= 11 ? "" : `${new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCHours() - 12} : ${new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCMinutes() >= 0 && new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCMinutes() : new Date((weatherData?.cwd?.timezone + weatherData?.cwd?.sys?.sunset) * 1000).getUTCMinutes()} PM `}</div>
                <div className='sunset_text'>Sunset</div>
              </div>

              <div className='sunset_image_box'>
                <div className='sunset_image'><img className='sunset_image_tag' src={sunset} alt="sunset" width={"80px"} /></div>
              </div>

            </div>

          </div>}
            


            {/* //------------------_5days_infor----------------------- */}

            <div className='current_weather_or_5days_infor_wrap'>

              <div className='current_weather_or_5days_time_option_wrap'>
                <div className='a5days_time_option_box' style={{ backgroundColor: getTheme.colorBox }}>
                  <div className='a5days_Weather_Info_text'>5 days Weather Information</div>
                  <div className="a5days_time_option_btn" style={{ backgroundColor: getTheme.colorBox }}>

                    <select name="a5days_time_option_selector" className="a5days_time_option_btn" style={{ backgroundColor: getTheme.colorBox }} onChange={(e) => setTimeNum(e.target.value)} >

                      {weather5Day?.list?.filter((data) => (new Date((weather5Day?.city?.timezone + data.dt) * 1000).getUTCHours() >= 0 && new Date((weather5Day?.city?.timezone + data.dt) * 1000).getUTCHours() <= 23 && new Date((weather5Day?.city?.timezone + data.dt) * 1000).getUTCDate() == (new Date((weather5Day?.city?.timezone + weatherData?.cwd?.dt) * 1000).getUTCDate() + 1))).map((value, ii) =>
                      (
                        <option  style={{color:'black',textAlign:'right'}} key={ii * 551249877} value={new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours()}> {new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() <= 11 ? `${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 0 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours()} : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()}  AM ` : `${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 12 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() - 12 } : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()}  PM `}</option>
                      )
                      )}



                    </select>
                  </div>
                </div>
              </div>



              <div className='current_weather_or_5days_infor_colm_wrap'>

                <div className='current_weather_or_5days_infor_box'>



                  {weather5Day?.list?.filter((data) => (new Date((weather5Day?.city?.timezone + data.dt) * 1000).getUTCHours() == (timeNum))).map((value, ii) =>

                    (weatherData.loading ? <div className='a5days_infor_colm loader'></div> :

                    <div key={ii * 576690} className='a5days_infor_colm' style={{ backgroundColor: getTheme.colorBox }}>

                      <div className='day5_weather_img_box'>{logo.filter((val) => val.description == value.weather[0].description).map((logoData) => <img key={ii * 56464} className='day5_3Hr_weather_img_tag' src={new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() > new Date((weather5Day.city.timezone + weather5Day.city.sunrise) * 1000).getUTCHours() && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() < new Date((weather5Day.city.timezone + weather5Day.city.sunset) * 1000).getUTCHours() ? logoData.imgDay : logoData.imgNight} alt="logo" width={'100px'} />)}</div>
                      <div className='day5_weather_temp_box'>{Math.round(value.main.temp)}&deg;c</div>
                      <div className='day5_weather_date_box'>{new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCDate() + ' / ' + (new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMonth() + 1)}</div>
                      <div className='day5_weather_day_box'>{days[new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCDay()]}</div>
                      <div className='day5_weather_time_box'>{new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() <= 11 ? `${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 0 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours()} : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()} AM ` : `${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() == 12 ? 12 : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCHours() - 12 } : ${new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() >= 0 && new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() <= 9 ? '0' + new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes() : new Date((weather5Day?.city?.timezone + value.dt) * 1000).getUTCMinutes()} PM `}</div>

                    </div>)

                  )}


                </div>

              </div>

            </div>








          </div>

        </div>


      </div>

    </div>
  )
}

export default WeatherApp


