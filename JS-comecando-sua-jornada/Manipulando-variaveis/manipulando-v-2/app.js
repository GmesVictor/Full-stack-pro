/* manipulando variáveis 2 */

/* ponto importante as variáveis são cases sensitive ou seja se você criar uma variável com o nome "nome" e outra com o nome "Nome", elas serão tratadas como variáveis diferentes */
var nome = "João";
var Nome = "Maria";
console.log(nome); // saída: João
console.log(Nome); // saída: Maria

// existem palavras reservadas que não podem ser usadas como nomes de variáveis, como "var", "let", "const", "if", "else", "for", "while", entre outras. Se você tentar usar uma palavra reservada como nome de variável, o JavaScript irá gerar um erro. Por exemplo:
// var var = "teste"; // isso irá gerar um erro, pois "var" é uma palavra reservada

// existem também algumas regras para nomear variáveis, como:
// - o nome da variável deve começar com uma letra, um cifrão ($) ou um sublinhado (_)
// - o nome da variável não pode conter espaços ou caracteres especiais (exceto $ e _)
// - o nome da variável deve ser único dentro do mesmo escopo

// Fazendo calculos com variáveis
var val1 = 10;
var val2 = 5;

console.log(val1 + val2); // saída: 15
console.log(val1 - val2); // saída: 5
console.log(val1 * val2); // saída: 50
console.log(val1 / val2); // saída: 2
console.log(val1 % val2); // saída: 0 (resto da divisão)