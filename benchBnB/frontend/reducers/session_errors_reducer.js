import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ERRORS:
            return Object.assign({}, state, {errors: action.errors});
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { errors: null });
        default:
            return state;
    }
}

export default sessionErrorsReducer;