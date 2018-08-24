import axios from 'axios';
export const FETCH_POSTS='fetch_posts';
const ROOT_URL='http://www.reduxblog.herokuapp.com/api';
const API_KEY='?key=12321';
export function fetchPosts()
{

    const request=axios.get(`${ROOT_URL}/posts${API_KEY}`);

    return{
        type: FETCH_POSTS,
        payload: request
    };
}