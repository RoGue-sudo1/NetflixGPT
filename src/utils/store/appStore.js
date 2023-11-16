import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import moviesReducer from "./slices/moviesSlice"
import searchReducer from "./slices/searchSlice"
import configReducer from "./slices/configSlice"

const appStore = configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,
        search:searchReducer,
        config:configReducer,
    }
})

export default appStore