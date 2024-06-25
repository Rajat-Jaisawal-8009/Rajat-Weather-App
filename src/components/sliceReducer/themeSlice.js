import { createSlice } from "@reduxjs/toolkit";

const initialState = '';


const themeSlice = createSlice({
name: 'backgroundTheme',
initialState,
reducers:{
  changeBackground(state, action){
   return state = action.payload
  }
}

})

export const {changeBackground} = themeSlice.actions;

export default themeSlice.reducer;