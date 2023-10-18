import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "http://gabriel-vi.sc1nbnd7186.universe.wf/wp-beaulieu/beaulieu-architectes/graphql",
  cache: new InMemoryCache(),
});

export default client;
