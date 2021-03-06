import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';



const configureStore = (preloadedState = {}) => {
    return createStore(preloadedState, rootReducer,applyMiddleware(thunk, logger))
}

export default configureStore;