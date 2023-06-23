const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const usuarioCadastroService = require("./src/services/usuarioCadastroService");

const server = new ApolloServer({
  ...graphql,
  context: () => ({
    usuarioCadastroService: usuarioCadastroService,
  }),
});

server.listen().then(({ url }) => console.log(url));
