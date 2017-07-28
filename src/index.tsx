import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo'


const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    opts: {
        mode: 'no-cors'
    }
});

const client = new ApolloClient({
    networkInterface
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);