import React, { useState } from 'react';
import Logo from "../assets/img/argentBankLogo.png";
import "../styles/pages.css";
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoEdit from "../assets/img/argentBankEdit.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { postUserToken } from '../selectors';
import { getUserDatas } from '../actions';
import { useDispatch } from 'react-redux';
import { getToken } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';




function Header() {
  const token = useSelector((state)=> state.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(token);
    let tokenLocalStor = localStorage.getItem("token");

  if((token== null || token=== "") && tokenLocalStor) {
    // // navigate("/connection");
    dispatch(getToken(localStorage.getItem("token")));

     postUserToken(localStorage.getItem("token")).then((userDatas) => {
      console.log(userDatas);
      let userData = userDatas.body;
      dispatch(getUserDatas(userData.id, userData.firstName, userData.userName, userData.lastName));
      console.log(userData.userName);
     });
 

  }
  }, [token])



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
