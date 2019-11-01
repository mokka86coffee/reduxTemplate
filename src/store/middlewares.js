import {applyMiddleware, compose} from 'redux';

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const loggerMiddleware = store => next => action => console.log('TCL: My custom action\'s logger', action) || next(action);

const middlewareCollection = [
    loggerMiddleware
];

export const middlewares = composeEnhancers(
  applyMiddleware(...middlewareCollection),
  // other store enhancers if any
);