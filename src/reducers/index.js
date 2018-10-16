import { combineReducers } from 'redux' ;
import TicketReducer from './ticket-reducer' ;

import UserReducer from './user-reducer';

import { reducer as formReducer } from 'redux-form';

const reducers = {
    ticketStore: TicketReducer,
    userStore: UserReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;