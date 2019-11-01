import {combineReducers} from 'redux';

const initialTestStore = {test: 'test'};

export const rootReducer = (store = initialTestStore, action) => {
    if (action.type === 'test') {
        return { test: 'test' };
    }
    return store;
}