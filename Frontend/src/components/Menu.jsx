import React from 'react';
import {Link, link} from 'react-router-dom';

export default function Menu() {
 
      return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  
    <Link className="navbar-brand" to="/">Notes App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link className="nav-link active" aria-current="page" to="/">Notes</Link>
        <Link className="nav-link active" aria-current="page" to="/add/note">Ajouter une note</Link>
    
      </div>
    
  </div>
</nav>
      )

}