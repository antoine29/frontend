const defaultState = {
    tickets: [],
    contact: {name:{}},
    loading: false,
    errors: {},
    ticket: {}
}

export default (state=defaultState, action={}) => {
    switch (action.type){
        case 'FETCH_TICKETS': {
            return {
                ...state,
                tickets: action.payload
            }
        }
        case "FETCH_TICKETS_FULFILLED":{
            return {
                ...state,
                tickets: action.payload.data.data || action.payload.data
                // tickets: action.payload.data
            }
        }
        case "NEW_TICKET":{
            return {
                ...state,
                ticket: {name:{}}
            }
        }
        case "SAVE_TICKET_PENDING":{
            return {
                ...state,
                loading: true
            }
        }
        case "SAVE_TICKET_FULFILLED":{
            return {
                ...state,
                tickets: [...state.tickets, action.payload.data],
                errors: {},
                loading: false
            }
        }
        case "SAVE_TICKET_REJECTED":{
            const data = action.payload.response.data;
            // conversion de errores de feathers?
            const { propietario, tipo, descripcion, estado} = data.errors;
            const errors = {global: data.message, propietario, tipo, descripcion, estado};
            return {
                ...state,
                errors: errors,
                loading: false
            }
            // return {
            //     ...state,
            //     tickets: [...state.tickets, action.payload.data],
            //     errors: {},
            //     loading: false
            // }
        }
        // para el clientSide validation
        case 'FETCH_TICKET_PENDING':{
            return {
                ...state,
                loading: true,
                ticket: {name: {}}
            }
        }
        case 'FETCH_TICKET_FULFILLED':{
            return{
                ...state,
                ticket: action.payload.data,
                errors: {},
                loading: false
            }
        }
        case 'UPDATE_TICKET_PENDING':{
            return{
                ...state,
                loading: true
            }
        }
        case 'UPDATE_TICKET_FULFILLED':{
            const ticket = action.payload.data;
            return {
                ...state,
                tickets: state.tickets.map( item => item._id === ticket._id ? ticket : item),
                errors: {},
                loading: false
            }
        }
        case 'UPDATE_TICKET_REJECTED':{
            const data = action.payload.response.data;
            const {propietario, tipo, descripcion, estado} = data.errors;
            const errors = { global: data.message, propietario, tipo, descripcion, estado};
            return {
                ...state,
                errors: errors,
                loading: false
            }
        }
        default: 
            return state;
    }
}