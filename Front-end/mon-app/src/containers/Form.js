import React from 'react'
import FormButton from '../components/FormButton';
import { useState } from 'react';

function Form() {

  return (
    <div>
       <form>
          <div className="input-wrapper">
            <label>Username</label><input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label>Password</label><input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" /><label>Remember me</label>
          </div>
           <FormButton/>
        </form>
    </div>
  )
}

export default Form
