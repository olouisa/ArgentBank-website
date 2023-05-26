
import Axios from "axios";
import axios from "axios";
export const ADD_POST = "ADD_POST";

export const addPost = (data) => {

    return (dispatch) => { 
      
        return axios.post("http://localhost:3001/api/v1/user/login", data).then((res) => {
            dispatch({type: ADD_POST, playload: data})
        })

        }}