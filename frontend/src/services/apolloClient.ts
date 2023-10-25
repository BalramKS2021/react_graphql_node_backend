import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

// Set `RestLink` with your endpoint
const restLink = new RestLink({ uri: process.env.REACT_APP_REMOTE_API });

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: restLink,
  connectToDevTools: true,
});

export default client;
