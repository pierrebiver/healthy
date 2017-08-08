import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from './App';
import {ApolloClient, createNetworkInterface, ApolloProvider} from 'react-apollo'
import '../semantic/dist/semantic.css';

const networkInterface = createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
});


const client = new ApolloClient({
    networkInterface,
    connectToDevTools: true
});


ReactDOM.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);