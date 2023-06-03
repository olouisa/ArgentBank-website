import FormButton from '../components/FormButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hasToken } from '../selectors';
import { getToken } from '../actions';
import { postUserData } from '../selectors';


function Form() {
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const token = useSelector((state) => state.token);
 console.log(token);

 


const dispatch = useDispatch();

const handleForm = async (e) => {
  e.preventDefault();
  let data = await postUserData(username, password);
  console.log(data);
  console.log(data.body.token);
  const userToken = data.body.token;
  console.log(username, password);  
 dispatch(getToken(userToken));

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
