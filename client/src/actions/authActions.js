import { GET_ERRORS } from "./types";
import axios from "axios";

// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
    .post("https://devconnector-liamwebb.c9users.io/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    );

}