import React from 'react';
import Logo from "../assets/img/argentBankLogo.png";
import "../styles/pages.css";
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';




function Header() {
  const style = {paddingRight:"5px"};
  return (
    <div>
          <nav className="main-nav">
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src= {Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
       <SignIn style={style} />
       <SignOut style={style}/>
      </div>
    </nav>
    </div>
  )
}

export default Header
