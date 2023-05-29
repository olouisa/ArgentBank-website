import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg : "",
    user: "",
    token: "",
    error: ""
}


export const signInUser = createAsyncThunk("user/signInUser", async (data) => {
    const res = await fetch("http://localhost:3001/api/v1/user/login", {
        method : "post",
        headers: {
            "content-type": "application/json",
           "accept": "application/json"
        },
        body: JSON.stringify(data)

    })
    return res.json();
})


const authSlice = createSlice({
    
name: "user",
initialState,
reducers: {

    addToken :(state, action) => {
        localStorage.getItem("token");
    }, 
    addUser: (state, action) => {
        localStorage.getItem("user") 
    },
    logOut : (state, action) => {
        state.token = null;
        localStorage.clear();
    }

},
extraReducers: {

    // Login 

    [signInUser.pending] : (state, action) => {
        state.loading = true
    },

    [signInUser.pending] : (state,{payload: {error, msg, token, user}} ) => {
        state.loading = false;
        if(error) {
            state.error = error;
        
        } else {
            state.msg = msg;
            state.user = user;
            state.token = token;

            localStorage.setItem("msg", msg);
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", token);

        }
    },

    [signInUser.pending] : (state, action) => {
        state.loading = true
    },

// Sign In 

[signInUser.pending] : (state, action) => {
    state.loading = true
},

[signInUser.pending] : (state,{payload: {error, msg}} ) => {
    state.loading = false;
    if(error) {
        state.error = error
    } else {
        state.msg = msg
    }
},

[signInUser.pending] : (state, action) => {
    state.loading = true
}



}});


export const {addToken, addUser, logOut} = authSlice.actions;
export default authSlice.reducer;