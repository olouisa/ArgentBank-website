import React from 'react';
import Form from '../containers/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleUser} from '@fortawesome/free-solid-svg-icons';

function Connection({stylePaddings={}}) {
  return (
    <div>
       <main style={{...stylePaddings}} className="main bg-dark">
      <section className="sign-in-content">
      <FontAwesomeIcon  icon={faCircleUser} />
        {/* <i class="fa fa-user-circle sign-in-icon"></i> */}
        <h1>Sign In</h1>
       <Form/>
      </section>
    </main>
    </div>
  )
}

export default Connection;
