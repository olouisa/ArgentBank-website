import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Account from '../containers/Account';
import "../styles/pages.css";
import Data from "../Lists/features.json";
import { useState } from 'react';
import { editName } from '../selectors';
import { changeName } from '../actions';
import { postUserToken } from '../selectors';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Edit({ stylePaddings = {} }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const userName = useSelector((state) => state.username);
    const firstname = useSelector((state) => state.firstname);
    const lastname = useSelector((state)=> state.lastname);
    let token = useSelector((state) =>state.token);


    const handleForm = async (e) => {
        e.preventDefault();
        let changeSend = await editName(token, username);
        console.log(changeSend);

        let userDatas = await postUserToken(token);
        console.log(userDatas);
        let userData = userDatas.body;
        dispatch(changeName(userData.userName));
        console.log(userData.userName);
        navigate("/profile");

        console.log(userName);
    }
    const cancel = () => {
        navigate("/profile");
    }
   useEffect(() => {
    if(token == null || token==="") {
        navigate("/connection")
    }
   },[token])

    return (
         <div>
                <form className='sign-in-content edit-content'>
                    <h2 className='edit-title'>Edit user info</h2>
                    <div className="input-wrapper_edit">
                        <label>User name:</label> <input className='input-edit' type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper_edit">
                        <label>First name:</label> <input className='input-edit' type="text" defaultValue={firstname} disabled="disabled"/>
                    </div>
                    <div className="input-wrapper_edit">
                        <label>Last name:</label> <input className='input-edit' type="text" defaultValue={lastname} disabled="disabled" />
                    </div>

                    <div className="input-remember edit-buttons">
                    < button className='sign-in-button sign-in-button-edit' onClick={(e) => handleForm(e)}>Save</button>
                    < button className='sign-in-button sign-in-button-edit' onClick={(e) => cancel()}>Cancel</button>
                    </div>

                </form>
                <main style={{ ...stylePaddings}} className="main bg-dark main-bg-white">

                <h2 className="sr-only">Accounts</h2>
                {Data.accounts.map((account) => {
                        console.log(account.title);

                    return (
                        <Account  key={account.id} title={account.title} amount={account.amount} description={account.description} />

                    )

                })
                }
            </main>
        </div> 
       
    )
}

export default Edit
