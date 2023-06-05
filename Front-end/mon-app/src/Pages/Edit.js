import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import HeaderUser from '../containers/HeaderUser';
import Account from '../containers/Account';
import "../styles/pages.css";
import Data from "../Lists/features.json";
import { useState } from 'react';
import { editName } from '../selectors';
import { changeName } from '../actions';
import { getUserDatas } from '../actions';
import { postUserToken } from '../selectors';
import { useNavigate } from 'react-router-dom';

function Edit({ stylePaddings = {} }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const userId = useSelector((state) => state.id);
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
        navigate("/profile/" + userId);

        console.log(userName);
    }

    return (
        <div>
            <main style={{ ...stylePaddings }} className="main bg-dark">
                <form>
                    <div className="input-wrapper">
                        <label>User name</label><input type="text" id="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="input-wrapper">
                        <label>First name</label><input type="text" defaultValue={firstname} disabled="disabled"/>
                    </div>
                    <div className="input-wrapper">
                        <label>Last name</label><input type="text" defaultValue={lastname} disabled="disabled" />
                    </div>

                    <div className="input-remember">
                    < button  onClick={(e) => handleForm(e)}>Save</button>
                    < button>Cancel</button>
                    </div>

                </form>
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

export default Edit
