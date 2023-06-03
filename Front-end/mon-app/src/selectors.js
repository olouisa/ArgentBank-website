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