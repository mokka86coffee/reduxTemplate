import {combineReducers} from 'redux';

export const rootReducer = (store = {}, {type, payload}) => {
    switch (type) {
        case 'test':
            return { ...store, test: 'test' };
        default:
            return store;
    }

    return store;
}