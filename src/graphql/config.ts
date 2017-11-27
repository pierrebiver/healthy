import {ApolloClient} from "apollo-client";
import * as Link from "apollo-link-http";
import * as Cache from "apollo-cache-inmemory";

const client = new ApolloClient({
    link: Link.createHttpLink({
        uri: `http://localhost:8080/graphql`
    }),
    cache: new Cache.InMemoryCache()
    // for SSR, use:
    // cache: new Cache().restore(window.__APOLLO_STATE__ || {})
});

export default client