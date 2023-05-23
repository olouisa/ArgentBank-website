import React from 'react';
import "../styles/pages.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

function SignIn({style}) {
  return (
    <div>
       <a className="main-nav-item" href="./sign-in.html">
        <FontAwesomeIcon style={style} icon={faCircleUser} />
          {/* <i class="fa fa-user-circle"></i> */}
          Sign In
        </a>
    </div>
  )
}

export default SignIn
