import { tickets } from "../ticket-data";

// for api calls
import { client } from './index';
const url = '/tickets';

export function fetchTickets(){
    return dispatch => {
        dispatch({
            type: 'FETCH_TICKETS',
            // payload: tickets
            payload: client.get(url)
        })
    }
}

export function newTicket(){
    return dispatch => {
        dispatch({
            type: 'NEW_TICKET'
        })
    }
}

export function saveTicket(ticket){
    return dispatch => {
        return dispatch({
            type: 'SAVE_CONTACT',
            payload: client.post(url, ticket)
        })
    }
}
