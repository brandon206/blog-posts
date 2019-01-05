import axios from 'axios';

import types from './types';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_KEY = '?key=brandoniscoding';

//function that returns a function
export const fetchPosts = () => async dispatch => {
    const resp = await axios.get(`${BASE_URL}/posts`);
    dispatch({
        type: types.FETCH_POSTS,
        payload: resp
    })
};