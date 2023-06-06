import React from 'react';
import AccountButton from '../components/AccountButton';
import "../styles/pages.css";
import { useLocation } from 'react-router-dom';




function Account({title, amount, description}) {
  const location = useLocation();
  return (
    <div>
            <section className={location.pathname === "/edit"? "account-edit" : "account" }>
        <div className="account-content-wrapper-edit account-content-wrapper" >
          <h3 className="account-title account-title-edit">{title}</h3>
          <p className={location.pathname === "/edit" ? "account-amount-edit" : "account-amount" }      >{amount}</p>
          <p className="account-amount-description account-amount-description-edit">{description}</p>
        </div>
       <AccountButton/>
      </section>
    </div>
  )
}

export default Account
