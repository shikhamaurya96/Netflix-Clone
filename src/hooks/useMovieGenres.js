import { options } from "../utils/constants"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addGenres } from "../utils/movieSlice";
const useMovieGenres = ()=>{
    const dispatch = useDispatch();
    async function movieGenre(){
    const data = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    const json = await data.json();
    console.log(json);
    dispatch(addGenres(json.genres));
    }
   useEffect(()=>{
  movieGenre();
   },[])
}
export default useMovieGenres;