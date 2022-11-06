import React from 'react'
import { useState } from 'react'
import axios from "axios";

const Login = (props) => {
    const [username,setUserName]=useState("")
    const [pass,setPass]=useState("")

const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(username)

    const formdata = new FormData(e.target)
    const email = formdata.get("email")
    const password = formdata.get("password")
    axios.post("http://localhost:8000/signin", {
        email: email,
        password: password
    }).then((res) => {
        if (res.data.message === "success") {
            window.localStorage.setItem("token", res.data.token)
            alert("signin Sucessull!")
            console.log(email);
            // navigate("/homePage");

        }
        if (res.data.message === "please add all fields") {
            alert("User not Registered !")
        }
        if (res.data.message === "please enter valid info") {
            alert("Invalid Crediential!")
        }


    })
        .catch(err => {
            console.log(err)
            alert("entervaliddetails")
        })
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
