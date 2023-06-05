import React from 'react';
import HeaderUser from '../containers/HeaderUser';
import Account from '../containers/Account';
import "../styles/pages.css";
import Data from "../Lists/features.json";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';



function Profile({stylePaddings = {} }) {
  // const { id } = useParams();
  const userId = useSelector((state) => state.id);
  const username = useSelector((state) => state.username);

  return (
    <div>
      <main style={{ ...stylePaddings }} className="main bg-dark">
        <HeaderUser id={userId} username={username} />
        <h2 className="sr-only">Accounts</h2>
        {Data.accounts.map((account) => {
          return (
            <Account id={userId} key={account.id} title={account.title} amount={account.amount} description={account.description} />

          )

        })
        }
      </main>
    </div>
  )
}

export default Profile
