import React, { useState } from 'react';
import Logo from "../assets/img/argentBankLogo.png";
import "../styles/pages.css";
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoEdit from "../assets/img/argentBankEdit.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';




function Header() {
  let id = useSelector((state)=> state.id);
  let userName = useSelector((state) => state.username);
  const style = {paddingRight:"5px"};
  const styleEdit= {padding: "28px 50px"}
const location = useLocation();
// console.log(location);

  return (
    
    <div>
          <nav className={location.pathname==="/edit/"+id ? "main-nav-edit" : "main-nav"}>
      <a className="main-nav-logo" href="./index.html">
        <img
          className="main-nav-logo-image"
          src={location.pathname === "/edit/" + id  ? LogoEdit : Logo } 
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>

   {
    id ? <SignOut style={style}/> : <SignIn style={style} />
   }


      </div>
    </nav>
    </div>
  )
}

export default Header
