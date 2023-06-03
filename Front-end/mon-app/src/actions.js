




export const getToken = (fetchToken) => ({
    type: "getToken",
    payload: {token: fetchToken}

});





    















// export const signInUser = createAsyncThunk("user/signInUser", async (data) => {
//     const res = await fetch("http://localhost:3001/api/v1/user/login", {
//         method : "post",
//         headers: {
//             "content-type": "application/json",
//            "accept": "application/json"
//         },
//         body: JSON.stringify(data)

//     })
//     return res.json();
// })