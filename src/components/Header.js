import React from 'react'
import { headerLogo } from '../utils/constants';
import { userIcon } from '../utils/constants';
import {  signOut } from "firebase/auth";
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
const Header = ({user}) => {
    const navigate = useNavigate();
    function handleSignOut(){
  
        signOut(auth).then(() => {
         navigate("/login")
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          navigate("/")
        });
        } 
  return (
    <div className='flex justify-between bg-gray-900 h-16 absolute w-full top-0'>
    <img className='w-44 h-20 bg-gradient-to-r from-black-200 to-black-500' src={headerLogo} alt='netflix-logo'/>
      <div className='flex'>
        <p className='font-bold text-white mr-5 mt-4'>{user.name}</p>
        <img className='h-12 shadow-lg mr-4 mt-2' src={userIcon} alt='user-icon'/>
        <button className=' h-12 w-20 font-bold text-white bg-sky-600 rounded-lg shadow-lg mr-3 mt-2' onClick={handleSignOut}>Log Out</button>
      </div>
    </div>
  )
}

export default Header