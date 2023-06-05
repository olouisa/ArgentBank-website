import React from 'react';
import "../styles/pages.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearDatas } from '../actions';
import { useLocation } from 'react-router-dom';
import ProfileEdit from "../assets/img/profileEdit.png";
import Settings from "../assets/img/settings.png";
import Deconnect from "../assets/img/deconnect.png";

function SignOut({ style }) {
  let username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  const location = useLocation();
  let token = useSelector((state) => state.token);
  let id = useSelector((state) => state.id);

  const handleClick = () => {
    dispatch(clearDatas());
    localStorage.clear();
    console.log(username, token, id);


  }



  return (
    location.pathname === "/edit/" + id ?
      <div className='signOut-edit'>
        <Link to={"/profile/" + id} className="main-nav-a-edit">
          {username} <img className='profileImg nav-img' src={ProfileEdit} alt='logo de profile' />
        </Link>
        <Link className='setting-link main-nav-a-edit'><img className='setting nav-img' src={Settings} alt='logo pour les paramètres' /></Link>
        <Link onClick={() => { handleClick() }} to="/" className='deconnect-link main-nav-a-edit' ><img className='deconnect nav-img' src={Deconnect} alt='Bouton de déconnection' /></Link>
      </div>
      :
      <div>
        <Link to={"/profile/" + id} className="main-nav-item">
          <FontAwesomeIcon style={style} icon={faCircleUser} />
          {username}
        </Link>
        <Link onClick={() => { handleClick() }} to="/" className="main-nav-item">
          <FontAwesomeIcon style={style} icon={faRightFromBracket} />
          Sign Out
        </Link>

      </div>


  )
}

export default SignOut
