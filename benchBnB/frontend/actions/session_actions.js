import * as APIUtil from '.././util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const login = user => dispatch => {
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const logout = () => dispatch => {
    return APIUtil.logout()
    .then((user) => dispatch(logoutCurrentUser()))
}

export const signup = user => dispatch => {
    return APIUtil.signup(user)
        .then((user) => dispatch(receiveCurrentUser(user)), 
        errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const receiveCurrentUser = function(currentUser){
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors
    }
}