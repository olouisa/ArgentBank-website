




export const getToken = (fetchToken) => ({
    type: "getToken",
    payload: {token: fetchToken}

});




const  postUserData = (_email, _passWord) => {
                let data = {
                    email: _email,
                    password: _passWord
                }
                const response = fetch("http://localhost:3001/api/v1/user/login", {
                    method: "post",
                    headers: {
                        "content-type": "application/json",
                        "accept": "application/json"
                    },
                    body: JSON.stringify(data)
    
                });
                return response.json();
            };















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