import React, { useState } from 'react';
import Logo from "../assets/img/argentBankLogo.png";
import "../styles/pages.css";
import SignIn from '../components/SignIn';
import SignOut from '../components/SignOut';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoEdit from "../assets/img/argentBankEdit.png";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { postUserToken } from '../selectors';
import { getUserDatas } from '../actions';
import { useDispatch } from 'react-redux';
import { getToken } from '../actions';





function Header() {
  const token = useSelector((state) => state.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checked = localStorage.getItem("checked");

  useEffect(() => {
    console.log(token);
    console.log(checked);
    let tokenLocalStor = localStorage.getItem("token");

    if ((token == null || token === "") && tokenLocalStor) {
      if (checked === "true") {
        dispatch(getToken(localStorage.getItem("token")));

        postUserToken(localStorage.getItem("token")).then((userDatas) => {
          console.log(userDatas);
          let userData = userDatas.body;
          dispatch(getUserDatas(userData.id, userData.firstName, userData.userName, userData.lastName));
          console.log(userData.userName);
        });
      } else {
        navigate("/connection");
      }


    }

  }, [token])



  const style = { paddingRight: "5px" };
  const location = useLocation();
  // console.log(location);

  return (

    <div>
      <nav className={location.pathname === "/edit" ? "main-nav-edit" : "main-nav"}>
        <Link className="main-nav-logo" to={"/"}>
          <img
            className="main-nav-logo-image"
            src={location.pathname === "/edit" ? LogoEdit : Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>

          {
            token ? <SignOut style={style} /> : <SignIn style={style} />
          }


        </div>
      </nav>
    </div>
  )
}

export default Header
