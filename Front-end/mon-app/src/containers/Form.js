import FormButton from '../components/FormButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postData } from '../store';


function Form() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");


const user = useSelector((state) => state.userReducer);
const dispatch = useDispatch();

const handleForm = async (e) => {
  e.preventDefault();
  console.log(username, password);
  dispatch(postData({username, password}))
 

}

  return (
    <div>
       <form onSubmit={(e) => handleForm(e)}>
          <div className="input-wrapper">
            <label>Username</label><input type="text" id="username" onChange={(e)=> setUsername(e.target.value)} />
          </div>
          <div className="input-wrapper">
            <label>Password</label><input type="password" id="password" onChange={(e)=> setPassword(e.target.value)}/>
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
