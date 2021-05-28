const { ApolloServer, gql } = require("apollo-server");

const books = [
  {
    id: "1",
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    id: "2",
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const message = {
  title: "hello",
  content: "hello world",
};

const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  type Message {
    title: String
    content: String
  }

  type Query {
    books: [Book]
    book(id: String): Book
    message: Message
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args, context, info) => {
      const { id } = args;
      return books.find((book) => book.id === id);
    },
    message: () => message,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4444 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
