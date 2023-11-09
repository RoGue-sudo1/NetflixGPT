import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        trailerVideo:null
    },
    reducers:{
        nowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upComingMovies = action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload
        }
    }
})

export const {nowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies} =  moviesSlice.actions

export default moviesSlice.reducer