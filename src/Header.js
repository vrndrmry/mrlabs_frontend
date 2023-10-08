import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from './Context/UserContext'

export default function Header() {
  const {user, setUser} = useContext(UserContext)
  useEffect(()=>{
    const response = fetch('http://localhost:4000/')
  console.log(response)
  })
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><i className="bi bi-phone"></i> Mobile Phones</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/add"><i className="bi bi-plus-circle"></i> Add phone</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup"><i className="bi bi-person-fill-add"></i> Signup</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login"><i className="bi bi-box-arrow-in-right"></i> Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " aria-disabled="true"><i className="bi bi-box-arrow-left"></i> Logout</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
