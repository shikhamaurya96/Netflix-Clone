import React, { useState } from 'react'
import { headerLogo } from '../utils/constants';
import { bgImage } from '../utils/constants';
import validateForm from '../utils/validateForm';
import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { useDispatch } from 'react-redux';
import {auth} from "./firebase"
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
 

const Registration = () => {
  const dispatch = useDispatch()
const[email,setEmail] = useState("");
const[password,setPassword] = useState("");
const[userName,setUserName] = useState("");
const[errorMsg,setErrorMessage] = useState("")
const navigate = useNavigate();

  function handleButton(e){
    e.preventDefault();
  const result= validateForm(email,password);
  setErrorMessage(result);
  if(result) return;
  
  createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
     const user = userCredential.user; 
    updateProfile(user, {
      displayName: userName
    }).then(() => {
      
      const {email,uid,displayName}=auth.currentUser
      dispatch(addUser({
        email:email,
        userId:uid,
        name:displayName
      }))   
    }).catch((error) => {
      
      setErrorMessage(error.message);
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
       
  });
  }
  function login(){
    navigate("/login")
  }
  
  return (
    <div >
       
      <div className='relative'>
      <img className='w-44 h-20 absolute m-6 bg-gradient-to-r from-black-200 to-black-500' src={headerLogo} alt="netflix logo"/>
      <img src={bgImage}
      alt='background-img' /> 
    <div className= 'bg-black bg-opacity-80 absolute top-24  left-1/3 w-1/3 h-max b text-white shadow-lg'>
      <h1 className='text-white mt-14 text-3xl font-bold ml-14'>Sign Up</h1>
      <div className='text-center'>
      <form >
         <div><input type='text'  placeholder='Full name' className='m-4 p-3 w-3/4 bg-slate-800' value={userName} onChange={(e)=>setUserName(e.target.value)}/><br/></div>
       <input type='text'  placeholder='Email or phone number' className='m-4 p-3 w-3/4 bg-slate-800' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
       <input type="password"  placeholder='password' className='m-4 p-3 w-3/4 bg-slate-800' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
       <p className='text-red-500'>{errorMsg}</p>
       <button className='m-4  p-2 bg-red-900 text-white w-3/4' onClick={(e)=>handleButton(e)}>Sign In</button> 
      </form> 
      
      </div>
      <h1 className='ml-14 mt-14'>Remember me</h1>
      <p className='ml-14 mt-4 mb-14  text-white cursor-pointer'  onClick={login}>  Already a user? Log In Now</p>
    </div>
    
      </div>
     
        
    </div>
  )
}

export default Registration