class cadastroPessoa {
  constructor(nome, idade, cpf) {
    this.nome = nome;
    this.idade = idade;
    this.cpf;
  }

  getNome() {
    return this.nome;
  }

  setNome(novoNome) {
    this.name = novoNome;
  }

  getIdade() {
    return this.idade;
  }

  setIdade(novaIdade) {
    this.idade = novaIdade;
  }

  getCPF() {
    return this.cpf;
  }

  setCPF(novoCPF) {
    this.cpf = novoCPF;
  }
}

export default cadastroPessoa;
