import React from 'react';
import "../styles/pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';

function SignOut({style}) {
  return (
    <div>
         <a className="main-nav-item" href="./user.html">
         <FontAwesomeIcon style={style} icon={faCircleUser} />
          Tony
        </a>
        <a className="main-nav-item" href="./index.html">
        <FontAwesomeIcon style={style} icon={faRightFromBracket} /> 
          Sign Out
        </a>
        
    </div>
  )
}

export default SignOut
