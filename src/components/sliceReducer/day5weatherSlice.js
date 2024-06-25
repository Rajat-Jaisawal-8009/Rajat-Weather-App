import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const day5WeatherFetch = createAsyncThunk('day5Weather/fetchApi', async(position)=>{

if(position.cityName){

  const res = await fetch( `https://api.openweathermap.org/data/2.5/forecast?q=${position.cityName}&appid=4c56309336ce3a8c11f2f28bb34f75d2&units=metric`);
  const data = await res.json();
  return data;
}

if(position.coords){

  const res = await fetch( `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=4c56309336ce3a8c11f2f28bb34f75d2&units=metric`);
  const data = await res.json();
  return data;
 

}
 
});


const day5Weatherslice = createSlice({

  name : "day5weather",
  initialState:{
    day5weather :null,
    loading : false,
    error: null

  },
  
  extraReducers:(builder)=>{
    builder.addCase(day5WeatherFetch.pending, (state)=>{
      state.loading = true;
      state.error = null;
    })
    .addCase(day5WeatherFetch.fulfilled, (state, action)=>{
      state.day5weather = action.payload;
      state.loading = false;
     
    }).addCase(day5WeatherFetch.rejected, (state, action)=>{
      state.day5weather = null;
      state.loading = false;
      state.error = action.payload
     
    })
  }

  
})

export default day5Weatherslice.reducer