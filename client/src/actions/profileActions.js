import axios from "axios";

import { CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING, GET_ERRORS } from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
    dispatch(setProfileLoading());
    axios
        .get("https://devconnector-liamwebb.c9users.io/api/profile")
        .then(res =>
            dispatch({
                type: GET_PROFILE,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        )
}

// Profile Loading
export const setProfileLoading = () => {
    return {
        type: PROFILE_LOADING
    }
}

// Clear profile
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}