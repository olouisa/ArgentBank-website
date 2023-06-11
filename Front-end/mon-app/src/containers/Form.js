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
  const [isChecked, setIsChecked] = useState(false);
  const token = useSelector((state) => state.token);
  const firstName = useSelector((state) => state.firstname);
  const userName = useSelector((state) => state.username);
  const error = useSelector((state) => state.errorMsg);
  // const [error, setError] = useState("")


  console.log(firstName, userName, token);
  console.log(isChecked);
  const dispatch = useDispatch();
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  }

  const handleForm = async (e) => {
    e.preventDefault();
    let data = await postUserData(username, password);
    const userToken = data.body.token;
    localStorage.setItem("checked", isChecked);
    localStorage.setItem("token", userToken);
    dispatch(getToken(userToken));

    if (data.status !== 200) {
          dispatch(showErrorMsg());
      return
    }
    console.log(data);
    console.log(data.body.token);
    console.log(username, password);


    if (userToken) {
      let userDatas = await postUserToken(userToken);
      console.log(userDatas);
      let userData = userDatas.body;
      dispatch(getUserDatas(userData.firstName, userData.userName, userData.lastName));
      console.log(userData.userName);
      navigate("/profile");

    }



  }

  return (
    <div>
      <form onSubmit={(e) => handleForm(e)}>
        <div className="input-wrapper">
          <label>Email</label><input type="text" id="Email" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-wrapper">
          <label>Password</label><input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p style={{ "color": "red" }}>{error}</p>

        <div className="input-remember">
          <input type="checkbox" id="remember-me" checked={isChecked} onChange={handleOnChange}/><label>Remember me</label>
        </div>
        <FormButton />
      </form>
    </div>
  )
}

export default Form
