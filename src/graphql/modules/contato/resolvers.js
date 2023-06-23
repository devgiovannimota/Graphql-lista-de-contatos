const db = require("../../../db");

module.exports = {
  Query: {
    contatos: async (obj, args, { usuarioCadastroService }, info) =>
      await usuarioCadastroService.contatos(),
  },
  Mutation: {
    criarContato: async (_, { data }, { usuarioCadastroService }) =>
      await usuarioCadastroService.criarContato(data),
    atualizarContato: async (_, { id, data }, { usuarioCadastroService }) =>
      await usuarioCadastroService.atualizarContato(id, data),
    deletarContato: async (_, { filtro }, { usuarioCadastroService }) =>
      await usuarioCadastroService.deletarContato(filtro),
  },
};
