import React from "react";
import {
  gql,
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  useQuery,
} from "@apollo/client";

const GET_MSG = gql`
  {
    message {
      title
      content
    }
  }
`;

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4444",
  }),
});

const Home = () => {
  const { loading, error, data } = useQuery(GET_MSG);
  console.log(data);
  if (error) return <p>error</p>;
  if (loading || !data) return <p>fetching...</p>;
  return (
    <div>
      <h1>{data.message.title}</h1>
      <p>{data.message.content}</p>
    </div>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default App;
