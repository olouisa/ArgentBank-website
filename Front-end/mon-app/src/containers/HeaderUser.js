import React from 'react';
import "../styles/pages.css";
import { useSelector } from 'react-redux';

function HeaderUser() {

  return (
    <div>
         <div className="header">
            {/* Mettre une state avec le nom du user connecté ici */}
        <h1>Welcome back<br />Tony!</h1> 
        <button className="edit-button">Edit Name</button>
      </div>
    </div>
  )
}

export default HeaderUser
