/* eslint-disable no-unused-vars */
import './FormLogin.css';
import React, { useState } from 'react';

const FormularioLogin = () => {
  const [formValores, setFormValores] = useState({
    email: '',
    password: '',
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
      const response = await fetch(`http://localhost:3000/login`, {
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
      <form onSubmit={handleSubmit} className="formLogin">
        <label htmlFor="email">E-mail</label>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          value={formValores.nome}
        />
        <label htmlFor="password" id="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formValores.idade}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default FormularioLogin;
