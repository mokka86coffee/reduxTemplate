import {createStore} from 'redux';
import {rootReducer} from './reducers';
import {middlewares} from './middlewares';

const initialState = {};

export const store = createStore(rootReducer, initialState, middlewares);