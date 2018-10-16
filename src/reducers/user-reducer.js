const defaultState = {
    users: [],
    contact: {name:{}},
    loading: false,
    errors: {},
    user: {}
}

export default (state=defaultState, action={}) => {

    switch(action.type) {
        case  'FETCH_USER': {
            return {
                ...state,
                users: action.payload
            }
        }
        default: return state;
    }
}