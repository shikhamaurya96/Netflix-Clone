import { createSlice } from "@reduxjs/toolkit";
 const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailer:null,
        genre:null,
        selectedMovie:null,
    },
    reducers:{
        addMovies:(state,action)=>{
            //console.log(action.payload)
            state.nowPlayingMovies=action.payload
        },
        addTrailer:(state,action)=>{
          state.trailer=action.payload
        },
        addGenres:(state,action)=>{
            //console.log(action.payload)
            state.genre = action.payload
        },
        setSelectedMovie:(state,action)=>{
            state.selectedMovie = action.payload;
        }
    }
 })
 export const{addMovies,addTrailer,addGenres,setSelectedMovie} = movieSlice.actions
 export default movieSlice.reducer