import React from 'react'
import { useState } from 'react'

const Login = (props) => {
    const [username,setUserName]=useState("")
    const [pass,setPass]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username)
}

  return (
    <>
      <div className='auth-form-container'>
      <h1>Member Login</h1>
      <form  className ="login-form"onSubmit={handleSubmit}>
             
            <label htmlFor="username">UserName</label>
            <input value={username} onChange={(e)=>setUserName(e.target.value)} type="text" placeholder='UserName' id="username" name="username" />

            <label htmlFor="password">Password</label>
             <input  value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder='*********' id="password" name="password" />
            <button type='submit'>Log In</button>
             <p>Forget password</p>
        </form>
          <button className='link-btn' onClick={()=>props.onFormswitch('register')}>Register</button>
      </div>
     
   
    </>
  )
}

export default Login
