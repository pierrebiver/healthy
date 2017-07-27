import * as React from 'react';
import {ApolloClient, createNetworkInterface} from 'react-apollo'
import {Route} from 'react-router';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {store, history} from "./store/index";
import Food from 'components/foods';

const networkInterface = createNetworkInterface({
    uri: 'localhost:8080/graphql'
});

const client = new ApolloClient({
    networkInterface
});


export const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Route path="/food" render={Food}/>
        </ConnectedRouter>
    </Provider>
)