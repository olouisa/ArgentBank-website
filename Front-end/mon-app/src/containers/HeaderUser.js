import React from 'react';
import "../styles/pages.css";
import { useNavigate } from 'react-router-dom';

function HeaderUser({username }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/edit");

  }

  return (
    <div>
      <div className="header">
        {/* Mettre une state avec le nom du user connecté ici */}
        <h1>Welcome back<br />{username}!</h1>
        <button onClick={() => { handleClick() }} className="edit-button">Edit Name</button>
      </div>
    </div>


  )
}

export default HeaderUser
