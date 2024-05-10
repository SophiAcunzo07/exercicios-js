// Exercício 6: Verificação de idade

// Escreva um programa que solicita o ano de nascimento de uma pessoa e verifica se ela é maior
// de 18 anos. Exiba uma mensagem indicando se a pessoa é maior de idade ou não.

//solicite a idade

let anoNascimento = parseInt (prompt("digite seu ano de nascimento: "))

//ano atual

let anoAtual = new Date().getFullYear(2024);

//calcule a idade da pessoa

let idade = anoAtual - anoNascimento;

// Verifica se a pessoa é maior de 18 anos
if (idade >= 18) {
    console.log("Você é maior de idade!");
} 
else {
    console.log("Você não é maior de idade.");
}