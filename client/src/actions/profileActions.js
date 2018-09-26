import axios from "axios";

import { SET_CURRENT_USER, GET_ERRORS, CLEAR_CURRENT_PROFILE, GET_PROFILE, PROFILE_LOADING } from "./types";

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

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    axios
        .post("https://devconnector-liamwebb.c9users.io/api/profile", profileData)
        .then(res => history.push("/dashboard"))
        .catch(err =>
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        )
}


// Delete account & profile
export const deleteAccount = () => dispatch => {
    if(window.confirm("Are you sure? This can NOT be undone!")) {
        axios
            .delete("https://devconnector-liamwebb.c9users.io/api/profile")
            .then(res =>
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            ). catch(err =>
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            )
    }
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

