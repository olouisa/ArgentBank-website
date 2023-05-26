import { GET_USER } from "../actions/getUser.action";
import { ADD_POST } from "../actions/post.action";

const initialState = {};

export default function userReducer( state = initialState, action ) {
    switch(action.type) {
                    case ADD_POST:
                return [action.payload, ...state];
                default: return state;

    }


}