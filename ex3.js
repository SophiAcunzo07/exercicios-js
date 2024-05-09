// Exercício 3: Ímpar ou par

// Faça um programa que receba um número do usuário e informe se este número é par ou
// ímpar.

//receba um numero do usuario

let numero = parseInt(prompt("digite um numero: "))

//se for divisivel por 2 e der um numero inteiro = par se nao for divisivel por dois = impar

if (numero % 2 == 0) {console.log("numero par!") }

else {console.log("numero impar!")}