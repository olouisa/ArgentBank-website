import FormButton from '../components/FormButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hasToken } from '../selectors';
import { getToken, getUserDatas } from '../actions';
import { postUserData } from '../selectors';
import { postUserToken } from '../selectors';
import { useNavigate } from 'react-router-dom';
import { showErrorMsg } from '../actions';

function Form() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state) => state.token);
  const id = useSelector((state) => state.id);
  const firstName = useSelector((state) => state.firstname);
  const userName = useSelector((state) => state.username);
  const errorMsg = useSelector((state) => state.errorMsg);

  console.log(id, firstName, userName, token);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();
    let data = await postUserData(username, password);
    dispatch(showErrorMsg());

    console.log(data);
    console.log(data.body.token);
    const userToken = data.body.token;
    console.log(username, password);
    localStorage.setItem("token", userToken);

    dispatch(getToken(localStorage.getItem("token")));

    if (userToken) {
      // let token = localStorage.getItem("token")
      let userDatas = await postUserToken(userToken);
      console.log(userDatas);
      let userData = userDatas.body;
      dispatch(getUserDatas(userData.id, userData.firstName, userData.userName, userData.lastName));
      console.log(userData.userName);
      navigate("/profile/" + id);

    }



  }

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="input-wrapper">
          <label>Username</label><input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label>Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p style={{ "color": "red" }}>{errorMsg}</p>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" /><label>Remember me</label>
        </div>
        <FormButton />
      </form>
    </div>
  )
}

export default Form
