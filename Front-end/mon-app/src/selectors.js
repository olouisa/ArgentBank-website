export const hasToken = (token) => { return (state) => state.token = token }

export async function postUserData(_email, _passWord) {
    let data = {
        email: _email,
        password: _passWord
    }
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json"
        },
        body: JSON.stringify(data)

    });
    return await response.json();
};

export async function postUserToken(_token) {
  
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            'Authorization': `Bearer ${_token}`
        }

    });
    return await response.json();
};

export async function editName(_token,_username) {
   
let user_name = {
    userName: _username
}
    const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            "accept": "application/json",
            'Authorization': `Bearer ${_token}`
        },
        body: JSON.stringify(user_name)

    })
    console.log(response);
    return response;
}