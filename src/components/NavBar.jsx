import React, { useEffect, useState } from 'react'
import './cssFiles/navBarCss.css'
import weatherlogo from './image/weatherlogo.png'

import { useDispatch, useSelector } from 'react-redux'
import { FaLocationDot } from "react-icons/fa6";
import { day5WeatherFetch } from './sliceReducer/day5weatherSlice'
import { fetchWeatherApi } from './sliceReducer/createSlice'
import { LuRefreshCw } from "react-icons/lu";

import themes from './image/theme.js'
import {changeBackground} from './sliceReducer/themeSlice.js'


function NavBar() {

  const dispatch = useDispatch()

  const [weatherCityName, setWeatherCityName] = useState({

    cityName: ""

  })


 
 

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  }

  function showPosition(position) {
    
    dispatch(fetchWeatherApi( position))
    dispatch(day5WeatherFetch( position))

}

const weatherApi = useSelector((state)=>state.weatherData?.cwd?.name)
useEffect(()=>{

  function setNameBylocat(){
   
    setWeatherCityName({

      cityName: weatherApi
  
    })
  }
  setNameBylocat()

},[weatherApi])

   
   
  useEffect(()=>{
    setTimeout(getLocation,1000)
  },[])

 


  const onSubmitWeatrheForm = (e) => {
    e.preventDefault();

   
    dispatch(fetchWeatherApi(weatherCityName))
    dispatch(day5WeatherFetch(weatherCityName))


    

  };



 

  const getInputValue = (e) => {

    const name = e.target.name;
    const value = e.target.value;

    setWeatherCityName({ ...weatherCityName, [name]: value })

  }

  const getTheme = useSelector((state)=>state.backgroundTheme)


 const  themeChange = (e)=>{

  const bgvalue = e.target.value;
  const boxColor = e.target.options[e.target.selectedIndex].className;
  
  dispatch(changeBackground({ theme : bgvalue, colorBox : boxColor}))
 }





  return (
    <div className='nav-container'>
    <div className='nav-header' style={{backgroundColor: getTheme.colorBox}}>

      <div className='menu-weather'>
        <div className='weatherLogo'>
          <img   src={weatherlogo} alt="logo" />
        </div>

        <div className='weather-app-name'>
<h1>Rajat's Weather App</h1>
        </div>

      </div>
      <div className='search-weather'>
        <div>
          <form className='form-search' action="" onSubmit={(e) => onSubmitWeatrheForm(e)}>

            <input  className='inputSearchBar' required type="text" placeholder='Enter city name' name='cityName' value={weatherCityName.cityName} onChange={(e) => getInputValue(e)} />

            <input className='search-btn' type="submit" value="Search" />

            <button className='refresh-btn' onClick={onSubmitWeatrheForm}><LuRefreshCw /> </button>

          </form>
        </div>

      <div className='location-btn-theme-wrap'>
      <div >
          <button className='location-btn' onClick={getLocation}><FaLocationDot />  Location</button>
        </div>

        <div >
          <select className='select-theme'   onChange={(e)=> themeChange(e)} >
            <option disabled selected>Themes</option>
            {themes.map((getTheme , ii)=>(
              <option style={{color:'black', textAlign:'left',fontWeight:'500'}} className={getTheme.boxColor} key={ii*7465}   value={getTheme.backgroundTheme }>{getTheme.name}</option>
            ))}
          </select>

        </div>
      </div>

      </div>

    </div>
    </div>
  )
}

export default NavBar
