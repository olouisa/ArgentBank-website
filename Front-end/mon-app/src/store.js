
import { createAsyncThunk } from '@reduxjs/toolkit';
import { createStore } from 'redux';


const InitialState = {
    token: null,
}

export const store = createStore(reducer);

function reducer(state = InitialState, action) {

    if (action.type === "add_data") {
        const  postUserData = (_email, _passWord) => {
            let data = {
                email: _email,
                password: _passWord
            }
            const res = fetch("http://localhost:3001/api/v1/user/login", {
                method: "post",
                headers: {
                    "content-type": "application/json",
                    "accept": "application/json"
                },
                body: JSON.stringify(data)

            });
            return res.json();
        };
        postData();
        if(state.token === postData.res.token) {
            localStorage.getItem("token", postData.res.token)
        }
    } 
  
}


// Actions
export const postData = () => ({
    type: "add_data",

})