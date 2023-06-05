




export const getToken = (fetchToken) => ({
    type: "getToken",
    payload: { token: fetchToken }

});

export const getUserDatas = (_id, _firstname, _username) => ({
    type: "getUserDatas",
    payload: {
        id: _id,
        firstname: _firstname,
        username: _username
    }

    });

    export const showErrorMsg = () => ({
        type :"showErrorMsg",
        payload: {
            errorMsg : "Identifiant ou mot de passe incorrect",
        }
    });

    export const clearDatas = () => ({
        type: "clearDatas"
    })




















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