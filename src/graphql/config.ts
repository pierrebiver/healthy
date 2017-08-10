import {createNetworkInterface, ApolloClient} from 'apollo-client'


const client = new ApolloClient({
    networkInterface: createNetworkInterface({
        uri: 'http://localhost:8080/graphql',
    })
});

export default client