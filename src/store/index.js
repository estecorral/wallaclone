import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { connectRouter, routerMiddleware } from "connected-react-router";

import * as reducers from "./reducers";
import {createBrowserHistory} from "history";

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    ...reducers
});
export const history = createBrowserHistory();

export const configureStore = config => preloadedState => {
    const reducer = createRootReducer(history);
    const middlewares = [routerMiddleware(config.history), thunkMiddleware];
    const composeEnhancers = composeWithDevTools;
    const store = createStore(
        reducer,
        preloadedState,
        composeEnhancers(applyMiddleware(...middlewares)),
    );
    return store;
};