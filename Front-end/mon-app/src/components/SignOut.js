import React from 'react';
import "../styles/pages.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearDatas } from '../actions';

function SignOut({style}) {
 let username = useSelector((state) => state.username);
 const dispatch = useDispatch();
 let token = useSelector((state) => state.token);
 let id = useSelector((state) => state.id);

const handleClick = () => {
  dispatch(clearDatas());
  localStorage.clear();
  console.log(username, token, id);


}



  return (
    <div>
         <Link to={"/profile/" + id} className="main-nav-item">
         <FontAwesomeIcon style={style} icon={faCircleUser} />
          {username}
        </Link>
        <Link  onClick={()=> {handleClick()}} to="/" className="main-nav-item">
        <FontAwesomeIcon style={style} icon={faRightFromBracket} /> 
          Sign Out
        </Link>
        
    </div>
  )
}

export default SignOut
