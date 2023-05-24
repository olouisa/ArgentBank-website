import React from 'react';
import "../styles/pages.css";


function HeaderUser() {
  return (
    <div>
         <div className="header">
            {/* Mettre une state avec le nom du user connecté ici */}
        <h1>Welcome back<br />Tony Jarvis!</h1> 
        <button className="edit-button">Edit Name</button>
      </div>
    </div>
  )
}

export default HeaderUser
