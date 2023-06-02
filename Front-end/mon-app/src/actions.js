import { createAsyncThunk } from "@reduxjs/toolkit";

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