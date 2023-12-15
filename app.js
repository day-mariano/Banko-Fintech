// Criar a Fintech mais incrível do universo digital, "FinPOO"! Vamos mergulhar no mundo mágico da Programação Orientada a Objetos (POO) com JavaScript e construir um sistema bancário que até os extraterrestres vão querer usar!

// ## **Aventuras de POO:**

// ### 1. **Encapsulamento Mágico 🧙‍♂️**
//    - **O que é?** É como guardar seus segredos em um baú mágico! Ninguém vê o que está dentro, só o que você quer mostrar.
//    - **Missão:** Usar essa magia nas classes `Conta` para proteger os tesouros (dados) dos piratas (usuários não autorizados).

// ### 2. **Herança Real 👑**
//    - **O que é?** Como herdar um reino! Uma classe pode herdar todas as coisas legais de outra classe.
//    - **Missão:** Criar um reino de `Conta`, onde `ContaCorrente` e `ContaPoupanca` são príncipes e princesas com seus próprios superpoderes.

// ### 3. **Polimorfismo: O Camaleão 🦎**
//    - **O que é?** É como um camaleão que muda de cor! Um método pode se transformar dependendo da situação.
//    - **Missão:** Fazer com que o método `realizarOperacao` mude de forma em cada tipo de `Conta`, como um camaleão bancário.

// ### 4. **Abstração: O Mapa do Tesouro 🗺️**
//    - **O que é?** É como olhar para um mapa do tesouro e ver apenas o que é importante para encontrar o ouro.
//    - **Missão:** Criar um mapa abstrato chamado `OperacaoFinanceira` que mostra o caminho para operações como depósitos e saques.

// ## **Missões Secundárias:**

// - **Heróis e Vilões:** `Cliente`, `Conta`, `Transacao`, `HistoricoTransacoes`.
// - **Desafios Épicos:** Autenticação heroica, gerenciamento de contas e transações eletrizantes.
// - **Feitiço de Interface:** Conjurar uma interface web encantadora com HTML, CSS e JavaScript.

// ## **Avaliação:**
// Serás avaliado por tua bravura na aplicação dos encantamentos de POO, pela funcionalidade de teu reino bancário, pela segurança dos cofres do reino e pela magia da interface.

// const numeroConta = 0


class Conta {
  constructor (nome) {
    this.nome = nome;
    this.saldo = 0;
  }

  // Polimorfismo (esses métodos são usados em diferentes operações)
  obterSaldo = (valor) => {
    console.log(`${this.nome}, seu saldo atual é R$${this.saldo}.`);
  }

  adicionar = (valor) => {
    this.saldo = this.saldo + valor;
    console.log(`${this.nome}, foi adicionado R$${valor}. Agora seu saldo é R$${this.saldo}.`);
  }

  remover = (valor) => {
    if (this.saldo >= valor) {
      this.saldo = this.saldo - valor
      console.log(`${this.nome}, foi removido R$${valor} do seu saldo. Agora seu saldo é R$${this.saldo}.`)
    } else {
      console.log(`${this.nome}, saldo insuficiente!`)
    }
  }
}

// Herança (herda de Conta: nome, saldo, obterSaldo(), adicionar() e remover())
class ContaCorrente extends Conta {
  constructor (nome) {
    super(nome);
    this.taxa = 10
  }
  //Abstração (abstraí função que faz parte da operacão)
  cobrarTaxa = () => {
    this.remover(this.taxa)
  }
}
// Encapsulamento
class ContaPoupanca extends Conta {
  static #juros = 0.01
  constructor (nome) {
    super(nome);
  }

  investir = () => {
    this.adicionar(this.saldo *  ContaPoupanca.#juros)
  }
}

// Encapsulamento (protege o numero do cliente)
class Cliente {
  constructor (nome, numero) {
    this.nome = nome;
    this.numero = numero;
    this.contacorrente = new ContaCorrente(this.nome);
    this.contapoupanca = new ContaPoupanca(this.nome);
  }
  
  saldoTotal = () => {
    return (`Seu saldo atual é R$${this.contacorrente.saldo + this.contapoupanca.saldo}.`);
    // return this.contacorrente.saldo + this.contapoupanca.saldo
  }

  mostrarCliente = () => {
    console.log(this.nome, this.numero, this.saldoTotal())
  }
}
const cliente1 = new Cliente("Dayana", 12345)
cliente1.mostrarCliente()
// cliente1.saldoTotal()