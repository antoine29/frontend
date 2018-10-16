import { tickets } from "../ticket-data";

// for api calls
import { client } from './index';
const url = '/users';

export function fetchUser(_user){
    return dispatch => {
        return dispatch({
            type: 'FETCH_USER',
            payload: client.get(`${url}?usuario=${_user}`)
        })
    }
}