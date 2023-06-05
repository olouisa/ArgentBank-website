import React from 'react';
import "../styles/pages.css";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HeaderUser({id, username}) {
  const navigate = useNavigate();

// const {id} = useParams();
// const userId = useSelector((state) => state.id);
const handleClick = () => {
  navigate("/edit/" + id);

}

  return (
    <div>
         <div className="header">
            {/* Mettre une state avec le nom du user connecté ici */}
        <h1>Welcome back<br />{username}!</h1> 
        <button onClick={()=>{handleClick()}} className="edit-button">Edit Name</button>
      </div>
    </div>
    

  )
}

export default HeaderUser
