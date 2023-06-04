
import {createStore} from "redux";
import {produce} from "immer";

const initialState= {
    token : null,
    id: null,
    firstname: "",
    username: ""
}

export const store = createStore(reducer, initialState);

export function reducer(state = initialState, action) {
    if(action.type === "getToken") {
        return produce(state, (draft)=> {
            draft.token = action.payload.token
        }) 
    
    }

    if(action.type === "getUserDatas") {
        return produce(state, (draft) => {
            draft.id = action.payload.id;
            draft.firstname = action.payload.firstname;
            draft.username= action.payload.username
        })
    }
    return state


}

















































// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import produce from "immer";


// const InitialState = {
//     token: null,
// }

// export const store = createStore(reducer);

// function reducer(state = InitialState, action) {

//     if (action.type === "add_data") {
//         const  postUserData = (_email, _passWord) => {
//             let data = {
//                 email: _email,
//                 password: _passWord
//             }
//             const res = fetch("http://localhost:3001/api/v1/user/login", {
//                 method: "post",
//                 headers: {
//                     "content-type": "application/json",
//                     "accept": "application/json"
//                 },
//                 body: JSON.stringify(data)

//             });
//             return res.json();
//         };
//         postData();
//         if(postData.res.token) {
//             localStorage.getItem("token", postData.res.token);
//             produce(state, (draft) => {
//                 draft.token = postData.res.token
//             }) 

//         }
//     } 
  
// }


// // Actions
// export const postData = () => ({
//     type: "add_data",

// })