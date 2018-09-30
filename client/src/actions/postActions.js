import axios from "axios";

import {
    ADD_POST,
    GET_ERRORS,
    GET_POSTS,
    POST_LOADING
} from "./types";

// Add Post
export const addPost = postData => dispatch => {
    axios
        .post("https://devconnector-liamwebb.c9users.io/api/posts", postData)
        .then(res => 
            dispatch({
                type: ADD_POST,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        );
}

// Get Post
export const getPost = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get("https://devconnector-liamwebb.c9users.io/api/posts")
        .then(res => 
            dispatch({
                type: GET_POSTS,
                payload: res.data
            })
        )
        .catch(err => 
            dispatch({
                type: GET_POSTS,
                payload: null
            })
        );
}

// Set Loading State
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}
