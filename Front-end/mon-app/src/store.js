
import {createStore} from "redux";
import {produce} from "immer";
import { composeWithDevTools } from "redux-devtools-extension"

const initialState= {
    token : null,
    firstname: "",
    username: "",
    lastname: "",
    errorMsg: null
  
}

export const store = createStore(reducer, initialState, composeWithDevTools());

export function reducer(state = initialState, action) {
    if(action.type === "getToken") {
        return produce(state, (draft)=> {
            draft.token = action.payload.token
        }) 
    
    }

    if(action.type === "getUserDatas") {
        return produce(state, (draft) => {
            draft.firstname = action.payload.firstname;
            draft.username= action.payload.username;
            draft.lastname = action.payload.lastname
        })
    }
  if(action.type === "showErrorMsg") {
    return produce(state, (draft) => {
        if(!draft.token) {
            draft.errorMsg = action.payload.errorMsg;
        }
       
    })
  }
  if(action.type === "clearDatas") {
    return produce(state, (draft) => {
        draft.token = null;
        draft.id= null;
        draft.firstname= "";
        draft.username= "";
        draft.password= null;
        draft.errorMsg = null
    })
  }
if(action.type === "changeName") {
    return produce(state, (draft) => {
        draft.username = action.payload.username
    })
}

    return state


}



store.subscribe(() => {
    console.log("Nouveau state:");
    console.log(store.getState());
  });













































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