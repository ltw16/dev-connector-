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
        );
};

// Add experience
export const addExperience = (expData, history) => dispatch => {
  axios
    .post('https://devconnector-liamwebb.c9users.io/api/profile/experience', expData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Add education
export const addEducation = (eduData, history) => dispatch => {
  axios
    .post('https://devconnector-liamwebb.c9users.io/api/profile/education', eduData)
    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Experience
export const deleteExperience = (id) => dispatch => {
  axios
    .delete(`https://devconnector-liamwebb.c9users.io/api/profile/experience/${id}`)
    .then(res => 
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Delete Education
export const deleteEducation = (id) => dispatch => {
  axios
    .delete(`https://devconnector-liamwebb.c9users.io/api/profile/education/${id}`)
    .then(res => 
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};


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
            ).catch(err =>
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

