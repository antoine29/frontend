import { combineReducers } from 'redux' ;
import TicketReducer from './ticket-reducer' ;
import { reducer as formReducer } from 'redux-form';

const reducers = {
    ticketStore: TicketReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;