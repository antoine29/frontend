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
            type: 'SAVE_TICKET',
            payload: client.post(url, ticket)
        })
    }
}

export function fetchTicket(_id){
    return dispatch => {
        return dispatch({
            type: 'FETCH_TICKET',
            payload: client.get(`${url}/${_id}`)
        })
    }
}

export function updateTicket(ticket){
    return dispatch => {
        return dispatch({
            type: 'UPDATE_TICKET',
            payload: client.put(`${url}/${ticket._id}`, ticket)
        })
    }
}