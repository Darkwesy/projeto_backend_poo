import Express from 'express';
import cadastroPessoa from '../models/classPessoa.js';

export const cadastroRouter = Express.Router();

cadastroRouter.post('/', (request, response) => {
  const { nome, idade, cpf } = request.body;
  const novaPessoa = new cadastroPessoa(nome, idade, cpf);
  console.log(novaPessoa);

  response.status(201).json({
    status: true,
    message: 'Pessoa cadastrada com sucesso.',
    dadosRecebudo: { nome, idade, cpf },
  });
});
