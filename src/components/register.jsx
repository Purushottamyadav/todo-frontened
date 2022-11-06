import React from 'react'
import { useState } from 'react';

const Register = (props) => {
    const [username,setUserName]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(username)
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
