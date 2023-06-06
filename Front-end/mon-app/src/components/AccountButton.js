import React from 'react';
import "../styles/pages.css";
import Arrow from "../assets/img/arrow_right.png";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


function AccountButton() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/edit" ?
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
