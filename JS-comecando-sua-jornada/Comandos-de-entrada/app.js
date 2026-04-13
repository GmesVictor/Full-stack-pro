/* comandos de entrada */

// Como o usuário pode fornecer dados para o programa?
var nome = prompt("Qual é o seu nome?");

var sobrenome = prompt("Qual é o seu sobrenome?");

console.log("Olá, " + nome + " " + sobrenome + "!");

// acessesando arvore de elementos do html
document.body.innerHTML += "<h1> Bem vindo " + nome + " " + sobrenome + "</h1>";

document.body.innerHTML += "<img src='https://sujeitoprogramador.com/steve.png' alt='Steve Jobs' />";