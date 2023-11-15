import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptSearchShow: false,
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptSearchShow = !state.gptSearchShow
        }
    }
})

export const {toggleGptSearch} = gptSlice.actions

export default gptSlice.reducer