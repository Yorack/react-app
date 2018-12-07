import axios from 'axios';
import _ from 'lodash';
import JsonPlaceHolders from '../Api/JsonPlaceholders'

const ROUTE_URL = `http://reduxblog.herokuapp.com/api`;
const API_KEY = `key=PAPERCLIP1234`;

export const blogActionType = {
    FETCH_POST: 'FETCH_POST',
    FETCH_USER: 'FETCH_USER',
};


export const blogAction = {
    fetchPost: () => {
        return async (dispatch) => {
            const response = await JsonPlaceHolders.get('/posts');

            dispatch({
                type: blogActionType.FETCH_POST,
                payload: response.data
            });
        }
    },

    fetchUser: (id) => {
        return async (dispatch) => {
            const response = await JsonPlaceHolders.get(`/users/${id}`);

            dispatch({
                type: blogActionType.FETCH_USER,
                payload: response.data
            });
        }
    }
};

export const fetchPostAndUser = () => {
    return async (dispatch, getState) => {
        console.log("I will fetch post")
        await dispatch(blogAction.fetchPost());

        _.chain(getState().posts)
            .map('userId')
            .uniq()
            .forEach(id => dispatch(blogAction.fetchUser(id)))
            .value();
    }
};