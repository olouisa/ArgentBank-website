import React from 'react';
import "../styles/pages.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function SignOut({style}) {
  const user = useSelector((state) => state.userReducer);
  return (
    <div>
         <Link to="/profile" className="main-nav-item">
         <FontAwesomeIcon style={style} icon={faCircleUser} />
          {user.firstName}
        </Link>
        <Link to="/" className="main-nav-item">
        <FontAwesomeIcon style={style} icon={faRightFromBracket} /> 
          Sign Out
        </Link>
        
    </div>
  )
}

export default SignOut
