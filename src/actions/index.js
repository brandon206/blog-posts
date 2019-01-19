import axios from 'axios';

import types from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_KEY = '?key=brandoniscoding';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    //when calling an action creator inside of an action creator
    //need to call dispatch because it's returning a function, redux thunk
    //immediately calls this function, AWAIT waits for the get request to be completed
    await dispatch(fetchPosts());
    //this gets the value inside of the posts reducer
    console.log(getState().posts);
}

//function that returns a function
export const fetchPosts = () => async dispatch => {
    const resp = await axios.get(`${BASE_URL}/posts`);
    dispatch({
        type: types.FETCH_POSTS,
        payload: resp.data
    })
};

// id = the id of the user we want to fetch
export const fetchUser = (id) => async dispatch => {
    const resp = await axios.get(`${BASE_URL}/users/${id}`);
    dispatch({
        // fetching one user at a time so using USER
        type: types.FETCH_USER,
        payload: resp.data
    })
}