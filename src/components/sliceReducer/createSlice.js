import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchWeatherApi = createAsyncThunk('currentWeatherData/fetchApi', async(position)=>{
  
if(position.cityName){
const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${position.cityName}&appid=4c56309336ce3a8c11f2f28bb34f75d2&units=metric`);
const data = await res.json();

return data;}

if(position.coords){

  const res = await fetch( `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4c56309336ce3a8c11f2f28bb34f75d2&units=metric`);
  const data = await res.json();
  return data;

}

});

const currentWeatherSlice = createSlice({
name: 'cwd',
initialState:{
  cwd:null,
  loading: false,
  error:null
},

extraReducers:(builder)=>{
  builder.addCase(fetchWeatherApi.pending,  (state)=>{
    state.loading = true;
    state.error = null

  }).addCase(fetchWeatherApi.fulfilled,  (state, action)=>{
  
    state.cwd =  action.payload
    state.loading = false;

  }).addCase(fetchWeatherApi.rejected ,  (state, action)=>{
    state.loading= false;
    state.error = action.payload;
  })
}

});

export default currentWeatherSlice.reducer ;


