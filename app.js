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

class Conta {
  constructor (nome) {
    this.nome = nome;
    this.saldo = 0;
  }

  // Polimorfismo (esses métodos são usados em diferentes operações)
  adicionar = (valor) => {
    this.saldo = this.saldo + valor;
    return this.saldo
  }

  remover = (valor) => {
    this.saldo = this.saldo - valor
    return this.saldo
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
    return this.remover(this.taxa)
  }
}
// Encapsulamento
class ContaPoupanca extends Conta {
  static #juros = 0.01
  constructor (nome) {
    super(nome);
  }

  investir = () => {
    return this.adicionar(this.saldo * ContaPoupanca.#juros)
  }
}

// Encapsulamento (protege o numero do cliente)
class Cliente {
  constructor (nome, cpf, numero) {
    this.nome = nome;
    this.cpf = cpf;
    this.numero = numero
    this.contacorrente = new ContaCorrente(this.nome);
    this.contapoupanca = new ContaPoupanca(this.nome);
  }
  
  somarSaldoTotal = () => {
    return this.contacorrente.saldo + this.contapoupanca.saldo;
  }
}
// CADASTRO CLIENTES
const clientes = [];
let numero = 0;

const hero = document.getElementById("hero")
var mainCadastro = document.getElementById("mainCadastro")
const formCadastro = document.getElementById("formCadastro")
formCadastro.addEventListener("submit", cadastrar)

function cadastrar(event) {
  event.preventDefault();
  console.log('cadastrando');
  const nome = document.getElementById("name");
  const cpf = document.getElementById("cpf");
  numero++
  
  let cliente1 = new Cliente(nome.value, cpf.value, numero)
  clientes.push(cliente1);
  console.log(cliente1);
  nome.value = ""
  cpf.value = ""
  const contas = document.getElementById("contas")
  contas.style.visibility = "visible"
  hero.style.display = "none"
  mainCadastro.style.display = "none"
  return clientes
}
// DADOS CLIENTE
const divCliente = document.getElementById("divCliente");
const buttonObterCliente = document.getElementById("buttonObterCliente")
buttonObterCliente.addEventListener("click", mostrar)
function mostrar() {
  divCliente.innerHTML = `<p class="resultados" >Nome: ${clientes[0].nome}, CPF: ${clientes[0].cpf}, Número: ${clientes[0].numero}.</p>`
  console.log("mostrando cliente")
}
const divSaldoTotal = document.getElementById("divSaldoTotal")
const buttonSaldoTotal = document.getElementById("buttonSaldoTotal")
buttonSaldoTotal.addEventListener("click", obterSaldoTotal)
function obterSaldoTotal() {
  const saldoTotal = clientes[0].somarSaldoTotal()
  divSaldoTotal.innerHTML = `<p class="resultados">Seu saldo é R$${saldoTotal}</p>`
  console.log("consultando saldo")
}

// CONTA CORRENTE
const divCorrente = document.getElementById("divCorrente")

// Saldo Corrente
const buttonSaldoCorrente = document.getElementById("buttonSaldoCorrente")
buttonSaldoCorrente.addEventListener("click", obterSaldoCorrente)
function obterSaldoCorrente() {
  const saldoObtido = clientes[0].contacorrente.saldo
  divCorrente.innerHTML += `<p class="resultados">Seu saldo é R$${saldoObtido}.</p>`
  console.log("consultando saldo da conta corrente")
}

// Depositar Corrente
const buttonDepositarCorrente = document.getElementById("buttonDepositarCorrente")
buttonDepositarCorrente.addEventListener("click", depositar)
function depositar() {
  let valorDeposito = Number(prompt("Quanto deseja depositar?"))

  if (valorDeposito <= 0) {
    return
  }
  const resultadoAdicionar = clientes[0].contacorrente.adicionar(valorDeposito)
  divCorrente.innerHTML += `<p class="resultados">Foi adicionado R$${valorDeposito}. Agora seu saldo é R$${resultadoAdicionar}.</p>`
  console.log("depositando na conta corrente")
}

// Sacar Corrente
const buttonSacarCorrente = document.getElementById("buttonSacarCorrente")
buttonSacarCorrente.addEventListener("click", sacar)
function sacar () {
  let valorSaque = Number(prompt("Quanto deseja sacar?"))
  saldoAtual = clientes[0].contacorrente.saldo

  if (valorSaque > saldoAtual){
    return window.alert("Saque negado. Valor acima do saldo")
  } else if (valorSaque <= 0) {
    return
  }
  const saldoSacado = clientes[0].contacorrente.remover(valorSaque)
  divCorrente.innerHTML += `<p class="resultados">Foi removido R$${valorSaque} do seu saldo. Agora seu saldo é R$${saldoSacado}.</p>`
  console.log("sacando da conta corrente")
}

// Pagar taxa
const buttonTaxaCorrente = document.getElementById("buttonTaxaCorrente")
buttonTaxaCorrente.addEventListener("click", pagarTaxa)
function pagarTaxa() {
  const saldoTaxado = clientes[0].contacorrente.cobrarTaxa()
  divCorrente.innerHTML += `<p class="resultados">Você pagou sua taxa ao Banko, agora seu saldo é ${saldoTaxado}</p>`
}
// CONTA POUPANÇA
const divPoupanca = document.getElementById("divPoupanca")

// Saldo Poupança
const buttonSaldoPoupanca = document.getElementById("buttonSaldoPoupanca")
buttonSaldoPoupanca.addEventListener("click", obterSaldoPoupanca)
function obterSaldoPoupanca() {
  const saldoObtido = clientes[0].contapoupanca.saldo
  divPoupanca.innerHTML += `<p class="resultados">Seu saldo atual é R$${saldoObtido}.</p>`
  console.log("consultando saldo da conta poupança")
}

// Depositar Poupança
const buttonDepositarPoupanca = document.getElementById("buttonDepositarPoupanca")
buttonDepositarPoupanca.addEventListener("click", depositaPoupanca)
function depositaPoupanca() {
  let valorDeposito = Number(prompt("Quanto deseja depositar?"))

  if (valorDeposito <= 0) {
    return
  }
  const resultadoAdicionar = clientes[0].contapoupanca.adicionar(valorDeposito)
  divPoupanca.innerHTML += `<p class="resultados">Foi adicionado R$${valorDeposito}. Agora seu saldo é R$${resultadoAdicionar}.</p>`
  console.log("depositando na conta poupança")
}

// Sacar Poupança
const buttonSacarPoupanca = document.getElementById("buttonSacarPoupanca")
buttonSacarPoupanca.addEventListener("click", sacarPoupana)
function sacarPoupana () {
  let valorSaque = Number(prompt("Quanto deseja sacar?"))
  saldoAtual = clientes[0].contapoupanca.saldo

  if (valorSaque > saldoAtual){
    return window.alert("Saque negado. Valor acima do saldo")
  } else if (valorSaque <= 0) {
    return
  }
  const saldoSacado = clientes[0].contapoupanca.remover(valorSaque)
  divPoupanca.innerHTML += `<p class="resultados">Foi removido R$${valorSaque} do seu saldo. Agora seu saldo é R$${saldoSacado}.</p>`
  console.log("sacando da conta poupança")
}

// Investir Poupaça
 const buttonInvestirPoupanca = document.getElementById("buttonInvestirPoupanca")
 buttonInvestirPoupanca.addEventListener("click", investirPoupanca)

 function investirPoupanca () {
  saldoInvestido = clientes[0].contapoupanca.investir()
  divPoupanca.innerHTML += `<p class="resultados"> Seu saldo foi investido. Agora seu saldo é R$${saldoInvestido}</p>`
 }