import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:"search",
    initialState:{
        searchShow: false,
    },
    reducers:{
        toggleSearch:(state)=>{
            state.searchShow = !state.searchShow
        }
    }
})

export const {toggleSearch} = searchSlice.actions

export default searchSlice.reducer