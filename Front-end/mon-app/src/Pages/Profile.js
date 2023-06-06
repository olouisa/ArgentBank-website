import React from 'react';
import HeaderUser from '../containers/HeaderUser';
import Account from '../containers/Account';
import "../styles/pages.css";
import Data from "../Lists/features.json";
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



function Profile({stylePaddings = {} }) {
  const username = useSelector((state) => state.username);
  const token = useSelector((state)=> state.token);
  const navigate = useNavigate();

  useEffect(() => {
    if(token == null || token==="") {
        navigate("/connection")
    }
   },[token])

  return (
    <div>
      <main style={{ ...stylePaddings }} className="main bg-dark">
        <HeaderUser username={username} />
        <h2 className="sr-only">Accounts</h2>
        {Data.accounts.map((account) => {
          return (
            <Account  key={account.id} title={account.title} amount={account.amount} description={account.description} />

          )

        })
        }
      </main>
    </div>
  )
}

export default Profile
