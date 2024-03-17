import React, { useState} from 'react'
import { headerLogo } from '../utils/constants';
import validateForm from '../utils/validateForm';
import { signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from "./firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { Navigate } from 'react-router-dom';
 import { useNavigate } from 'react-router-dom';
 

const Login = () => {
  
const [email,setEmail]= useState("");
const [password,setPassword]= useState("");

const[errorMsg,setErrorMessage] = useState("")

const navigate = useNavigate();
const dispatch = useDispatch()
  function handleButton(e){
    e.preventDefault()
  const result= validateForm(email,password);
  //console.log(result);
  setErrorMessage(result);
  if(result) return;
  
  //sign up logic
  signInWithEmailAndPassword(auth, email,password)//10
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    const{email,uid,displayName} = user;
    dispatch(addUser({
      email:email,
      userId:uid,
      name:displayName
    }))
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
       
  });  
  }
function handleSignOut(){
  navigate("/register")
}
 
  return (
    <div >
       
      <div className='relative'>
      <img className='w-44 h-20 absolute m-6 bg-gradient-to-r from-black-200 to-black-500' src={headerLogo} alt='netflix-logo'/>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg'
      alt='background-img' /> 
    <div className= 'bg-black bg-opacity-80 absolute top-24  left-1/3 w-1/3 h-max b text-white shadow-lg'>
      <h1 className='text-white mt-14 text-3xl font-bold ml-14'>Log In</h1>
      <div className='text-center'>

      <form >
       <input type='text'  placeholder='Email or phone number' className='m-4 p-3 w-3/4 bg-slate-800' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
       <input type="password"  placeholder='password' className='m-4 p-3 w-3/4 bg-slate-800' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
       <p className='text-red-500'>{errorMsg}</p>
       <button className='m-4  p-2 bg-red-900 text-white w-3/4' onClick={(e)=>handleButton(e)}>Log In</button> 
      </form> 
        <p className='m-4 cursor-pointer' onClick={handleSignOut}>Create an Account? Sign Up</p>
      </div>
      
      </div>
    
      </div>
     
      </div>
  )
}

export default Login