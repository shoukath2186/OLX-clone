import React,{useState} from "react";

import { Link, useNavigate } from "react-router-dom";
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from "../Context/AuthContext";

function Login(){
   
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {User,logIn}=UserAuth()

    const[emailerror,setEmailerror]=useState('')
    const[passworderror,setPassworderror]=useState('')
    const[error,setError]=useState('')





     const Navigate=useNavigate()
    
    async function handilSubmit(e){ 
       e.preventDefault()

           setError('')
           setEmailerror('')
           setPassworderror('')

        if(email.trim()==''){
            setEmailerror("Enter Email.");
            return;
       }

       if(!CheckRegex(email)){
        setEmailerror("Invalid Email Format.");
         return; 
       }

       if(password.trim()==''){
        setPassworderror("Enter password.");
        return;
       }

       if(!CheckRegexPssword(password)){
        setPassworderror("Password must be at least 8 characters long.");
        return;
       }
       
       
      
       try {
          await logIn(email,password)

          Navigate('/')
       } catch (error) {
          console.log(error.message);
          setError(error.message=='Firebase: Error (auth/invalid-email).'?'invalid-email':error.message);
          

       }


    }


    function CheckRegex(email) {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
       return emailRegex.test(email);

    }
    function CheckRegexPssword(password){
        const passwordRegex =/^.{8,}$/
         return passwordRegex.test(password)
    }


   return(
<div className=" w-full flex items-center justify-center h-screen bg-gray-800 bg-opacity-40" style={{ WebkitTransform: 'translateZ(0)' }}>
    <div className="bg-white w-[400px] h-[600px] rounded flex flex-col  items-center">
    <div className="w-full flex justify-end">
        <p className="mr-5 mt-3" ><Link to='/'><AiOutlineClose/></Link></p> 
        </div>
        <img className="mt-5 w-[130px] h-[70px] " src="/olx-logo-13.png" alt="OLX Logo" />
            
        
        <h1 className=" m-4 text-3xl font-bold">Log In</h1>
        <p className="text-red-700">{error}</p>
        <form onSubmit={handilSubmit} >
        <input onChange={(e)=>{setEmail(e.target.value)}} className="w-[360px] h-[48px] m-3 p-3 rounded border-[3px] border-gray-500 " type="email" placeholder="Enter Email..." />
        <p className="text-red-700 text-center">{emailerror}</p>
        <input onChange={(e)=>{setPassword(e.target.value)}} className="w-[360px] h-[48px] m-3 p-3 rounded border-[3px] border-gray-500" type="password" placeholder="Enter Password..." />
        <p className="text-red-700 text-center">{passworderror}</p>
        <button className="w-[360px] h-[48px] m-3 p-3 rounded bg-gray-400 font-bold flex justify-center items-center">LOG IN</button>
        </form>
        <div>
            <p>
            <span>Create a new account.
            </span>{' '}

            <Link to='/signup' className="text-blue-800">Sign Up</Link>
            </p>
        </div>
        <p className="text-[10px] mt-10"><span >Your email is never shared with external parties nor do we use it to spam you in any way.</span></p>
    </div>
</div>
    
   )
}

export default Login;