import React from 'react';
import HeaderUser from '../containers/HeaderUser';
import Account from '../containers/Account';
import "../styles/pages.css";
import Data from "../Lists/features.json";



function Profile({stylePaddings={}}) {
  return (
    <div>
        <main style={{...stylePaddings}} className="main bg-dark">
   <HeaderUser/>
      <h2 class="sr-only">Accounts</h2>
      {Data.accounts.map((account) => {
        return (
          <Account key={account.id} title={account.title} amount={account.amount} description={account.description} />

        )

      })
        }
    </main>
    </div>
  )
}

export default Profile
