import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function SignUp() {
    const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
const [redirect, setRedirect] = useState(false)
  async function signup(e){
    e.preventDefault()
    const response = await fetch(`http://localhost:4000/signup`,{
        method:'POST',
        body:JSON.stringify({username,password}),
        headers:{'Content-Type':"application/json"}
    })
    
    if(response.status === 200){
        setRedirect(true)
    }else{
        alert("Registration failed")
    }
}

if(redirect){
    return <Navigate to={"/login"}></Navigate>
}
  return (
    <div className="container my-3 input">
      <form onSubmit={signup}>
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
          SignUp
        </button>
      </form>
    </div>
  )
}
