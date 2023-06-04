import React from 'react';
import "../styles/pages.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function HeaderUser({id, firstname}) {
// const {id} = useParams();
// const userId = useSelector((state) => state.id);


  return (
    <div>
         <div className="header">
            {/* Mettre une state avec le nom du user connecté ici */}
        <h1>Welcome back<br />{firstname}!</h1> 
        <button className="edit-button">Edit Name</button>
      </div>
    </div>
    

  )
}

export default HeaderUser
