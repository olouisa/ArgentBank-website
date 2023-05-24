import React from 'react';
import "../styles/pages.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

function SignOut({style}) {
  return (
    <div>
         <Link to="/profile" className="main-nav-item">
         <FontAwesomeIcon style={style} icon={faCircleUser} />
          Tony
        </Link>
        <Link to="/" className="main-nav-item">
        <FontAwesomeIcon style={style} icon={faRightFromBracket} /> 
          Sign Out
        </Link>
        
    </div>
  )
}

export default SignOut
