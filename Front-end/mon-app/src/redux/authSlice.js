import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    msg : "",
    user: "",
    token: "",
    error: ""
}


const signInUser = createAsyncThunk("user/signInUser", async (data) => {
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

},
extraReducers: {

}

});


export default authSlice.reducer;