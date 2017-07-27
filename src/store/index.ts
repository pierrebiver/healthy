import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

// Cannot access to unknown key from object window, that why we use this hack to use extension tools.
interface Window {
    [key: string]: any
}

const windowExtended: Window = window;
const reduxDevTools = windowExtended['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'];
const composeEnhancers = reduxDevTools || compose;


export const history = createHistory();


export const store = createStore(
    combineReducers({
        router: routerReducer
    }),
    composeEnhancers(applyMiddleware(thunk, routerMiddleware(history)))
);
