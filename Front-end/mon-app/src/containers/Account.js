import React from 'react';
import AccountButton from '../components/AccountButton';
import Data from "../Lists/features.json";
import "../styles/pages.css";



function Account({title, amount, description}) {
  console.log(Data.accounts);
  return (
    <div>
            <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{title}</h3>
          <p className="account-amount">{amount}</p>
          <p className="account-amount-description">{description}</p>
        </div>
       <AccountButton/>
      </section>
    </div>
  )
}

export default Account
