/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './FormCadastro.css';

const FormmularioCadastro = () => {
  const [formValores, setFormValores] = useState({
    nome: '',
    idade: '',
    cpf: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValores((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Dados enviados com sucesso: ', formValores);
      const response = await fetch(`http://localhost:3000/cadastrarPessoa`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValores),
      });
      const json = await response.json();
      console.log(response);
      console.log(json);
    } catch (err) {
      console.error(`Erro ao enviar os dados: ${err}`);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="formCadastro">
        <label htmlFor="nome">Nome de usuário</label>
        <input
          type="text"
          name="nome"
          onChange={handleChange}
          value={formValores.nome}
        />
        <label htmlFor="idade" id="idade">
          Idade
        </label>
        <input
          type="text"
          name="idade"
          onChange={handleChange}
          value={formValores.idade}
        />
        <label htmlFor="cpf">CPF</label>
        <input
          type="text"
          name="cpf"
          onChange={handleChange}
          value={formValores.cpf}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormmularioCadastro;
