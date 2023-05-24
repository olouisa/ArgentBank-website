import React from 'react'
import FormButton from '../components/FormButton';
import { useState } from 'react';

function Form() {
const [type, setType]= useState(false);


  return (
    <div>
       <form>
          <div class="input-wrapper">
            <label for="username">Username</label
            ><input type="text" id="username" />
          </div>
          <div class="input-wrapper">
            <label for="password">Password</label
            ><input type="password" id="password" />
          </div>
          <div class="input-remember">
            <input type="checkbox" id="remember-me" /><label for="remember-me"
              >Remember me</label>
          </div>
           <FormButton/>
        </form>
    </div>
  )
}

export default Form
