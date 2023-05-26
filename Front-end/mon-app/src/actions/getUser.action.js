const axios = require('axios')

export const  GET_USER = "GET_USER";

export const getUser = () => {
    return(dispatch) => axios.get("http://localhost:3001/api/v1/user/signup").then((response) => {
        console.log(response)
    })
}

