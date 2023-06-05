import React from 'react';
import "../styles/pages.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearDatas } from '../actions';

function SignOut({style}) {
 let firstname = useSelector((state) => state.firstname);
 const dispatch = useDispatch();
 let token = useDispatch((state) => state.token);
 let id = useDispatch((state) => state.id);

const handleClick = () => {
  dispatch(clearDatas());
  console.log(firstname, token, id);
  localStorage.clear();


}


  return (
    <div>
         <Link to="/profile" className="main-nav-item">
         <FontAwesomeIcon style={style} icon={faCircleUser} />
          {firstname}
        </Link>
        <Link  onClick={()=> {handleClick()}} to="/" className="main-nav-item">
        <FontAwesomeIcon style={style} icon={faRightFromBracket} /> 
          Sign Out
        </Link>
        
    </div>
  )
}

export default SignOut
