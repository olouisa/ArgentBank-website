import React from 'react';
import "../styles/pages.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

function SignIn({style}) {
  return (
    <div>
       <Link to="/connection" className="main-nav-item">
        <FontAwesomeIcon style={style} icon={faCircleUser} />
          {/* <i class="fa fa-user-circle"></i> */}
          Sign In
        </Link>
    </div>
  )
}

export default SignIn
