import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"> Employee App </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <li><Link to="/">Dashboard</Link></li>
<li><Link to="/create">Add</Link></li>
        <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
        <a class="nav-link" active href="employee-front-end/create">Create</a>
  
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header