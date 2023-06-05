import React from 'react';
import "../styles/pages.css";
import { useSelector } from 'react-redux';
import Arrow from "../assets/img/arrow_right.png";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AccountButton() {
  let userId = useSelector((state) => state.id);
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/edit/" + userId ?
        <div className="account-content-arrow">
          <Link to={""} className="transaction-button-arrow"><img className="arrowImg" src={Arrow} alt="flèche d'ouverture" /></Link>
        </div>
        :
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      }
    </div>
  )
}

export default AccountButton
