import React, { createContext, useContext, useState } from "react";
import { Navigate } from 'react-router-dom'
import { UserContext } from "../Context/UserContext";



export default function Login() {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState('')
  const {setUser} = useContext(UserContext)
  async function login (e){
    e.preventDefault()
    const response = await fetch(`http://localhost:4000/login`,{
      method:'POST',
      body:JSON.stringify({username,password}),
      // credentials:'include',
      headers: {"Content-Type":"application/json"}
    })
    if(response.ok){
      response.json().then(userInfo=>{
        setUser(userInfo)
        setRedirect(true)
      })
      
      
    }else{
      alert('Invalid username or password')
    }
  }

  if(redirect){
    return <Navigate to={'/'}></Navigate>
  }
  return (
    <div className="container my-3 input">
      <form onSubmit={login}>
        <div className="row mb-3">
          <label htmlFor="username" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="username" value={username} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
}
