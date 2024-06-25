import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const airQualityFetch = createAsyncThunk('airQualityData/fetchApi', async (aqiCityCode)=>{

  const res = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${aqiCityCode.coord.lat}&lon=${aqiCityCode.coord.lon}&appid=4c56309336ce3a8c11f2f28bb34f75d2&units=metric `);
  const data = await res.json()
return data;

});

const airqualitySlice = createSlice({
  name : "airQualityData",
  initialState:{
    airQualityData:null,
    loading: false,
    error:null
  },
  extraReducers:(builder)=>{

    builder.addCase(airQualityFetch.pending, (state)=>{

      state.loading=true;
      state.error=null

    }).addCase(airQualityFetch.fulfilled, (state, action)=>{

      state.airQualityData = action.payload;
      state.loading=false;

     })
     .addCase(airQualityFetch.rejected, (state, action)=>{

      state.airQualityData = null;
      state.loading=false;
      state.error = action.payload;
      
     })
  }
})

export default airqualitySlice.reducer