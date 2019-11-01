import {applyMiddleware} from 'redux';

const loggerMiddleware = store => next => action => console.log(action.type) || next(action);

export const middlewares = applyMiddleware(loggerMiddleware);
