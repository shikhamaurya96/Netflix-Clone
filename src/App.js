

import { useEffect } from 'react';
import Loader from './components/Loader';
import Browse from './components/Browse';
import Login from './components/Login';
import MovieDescription from './components/movies/MovieDescription';
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Registration from './components/Registration';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './components/firebase';
import { useDispatch,useSelector } from 'react-redux';
import {addUser} from "./utils/userSlice"
import TrailorVideo from './components/movies/TrailorVideo';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedMovie = useSelector((store)=>store.movies.selectedMovie)
  console.log(selectedMovie);

  useEffect(()=>{
   onAuthStateChanged(auth, (user) => {
      if (user) {
        const {email,uid,displayName} = user;
        dispatch(addUser({
          email:email,
          userId:uid,
          name:displayName
        }))
        navigate("/browse")
        
      } 
      else{
        navigate("/register")
      }
    })
  },[])

  useEffect(()=>{
   if(selectedMovie!=null){
    navigate("movieDescription")
   }
  },[selectedMovie])
 
  
  return <>
  <Routes>
         <Route path='/login' element={<Login/>}/>
        <Route path='/browse' element={<Browse/>}/>
         <Route path='movieDescription' element={<MovieDescription movie = {selectedMovie}/>}/>
         <Route path='/register' element={<Registration/>}/>
         <Route path='/loader' element={<Loader/>}/>
         <Route path='/trailorVideo' element={<TrailorVideo/>}/>
  </Routes>
     </> 
}

export default App;

