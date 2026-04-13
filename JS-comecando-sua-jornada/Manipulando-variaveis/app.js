/* manipulando variáveis */

/* tipo string */
var curso = "JavaScript";
console.log(curso);

/* mudando o valor da variável */
curso = "Curso de JavaScript";
console.log(curso);

// Se rodar no Node.js, o alert dá erro. No navegador, ele funciona.
// console.log(curso); 
// alert(curso); 

/* concatenando strings */
// Adicionei um espaço antes de "Sujeito" para não ficar grudado
console.log(curso + " - Sujeito Programador"); 

/* tipo number */
var idade = 25;
console.log("Minha idade é: " + idade);

/* Calculando variáveis de number */
var valor1 = 7;
var valor2 = 5;

var soma = valor1 + valor2;
console.log("O resultado da soma é: " + soma);

soma = (valor1 + valor2) / 2;
console.log("O resultado da média é: " + soma);