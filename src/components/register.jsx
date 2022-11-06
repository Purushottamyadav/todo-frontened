import React from 'react'
import { useState } from 'react';
import axios from "axios";
// import {useNavigate} from "react-router-dom";

const Register = (props) => {
    const [username,setUserName]=useState("");
    const [pass,setPass]=useState("");
    // const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username)
        const formdata = new FormData(e.target)
        const email = formdata.get("email")
        const password = formdata.get("password")
        const confirmpassword = formdata.get("confirmpassword")
        
        
       axios.post('http://localhost:8000/signup',{
        email:email,
        password:password,
        confirmpassword:confirmpassword
       
      }).then( res=>res.json(),
      res=>alert(res.data),
      alert("saved success fully"),
      // navigate('/')
      )
        .then(
            (data)=>{console.log(data);
            }
        )
      
        .catch(err=>{
            console.log(err)
        })
           
    }
  return (
 <>
 <div className='auth-form-container'>
      <h1>Register</h1>
      <form className='register-form' onSubmit={handleSubmit}>
             
            <label htmlFor="username">UserName</label>
            <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='UserName' id="username" name="username" />

            <label htmlFor="password">Password</label>
             <input  value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" placeholder='*********' id="password" name="password" />
             <label htmlFor="confirm-password">confirm-Password</label>
             <input  value={pass}  onChange={(e)=>setPass(e.target.value)} type="password" placeholder='*********' id="password" name="password" />
             <button type='submit'>Register</button>
             <p>Member Login</p>
        </form>
          <button className='link-button' onClick={()=>props.onFormswitch('login')}>Log in</button>
      </div>
     
   
   
 </>
  )
}

export default Register
