// Exercício 8: Cálculo de IMC

// Escreva um programa que solicita ao usuário seu peso em quilogramas e sua altura em metros.
// Em seguida, calcule o Índice de Massa Corporal (IMC) utilizando a fórmula: IMC = peso / (altura
// * altura). Com base no resultado, exiba uma mensagem indicando a faixa de peso em que o
// usuário se encontra, de acordo com a tabela a seguir:
// IMC menor que 18.5: Abaixo do peso
// IMC de 18.5 a 24.9: Peso normal
// IMC de 25.0 a 29.9: Sobrepeso
// IMC de 30.0 a 34.9: Obesidade grau 1
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3
// IMC de 35.0 a 39.9: Obesidade grau 2
// IMC maior ou igual a 40.0: Obesidade grau 3

// Solicita ao usuário seu peso em quilogramas e sua altura em metros

let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));

// Calcula o Índice de Massa Corporal (IMC)

let imc = peso / (altura * altura);

// Determina a faixa de peso com base no IMC

console.log ("seu IMC e: " + imc)

if (imc < 18.5) {
    mensagem = "Abaixo do peso";
} 
else if (imc >= 18.5 && imc <= 24.9) {
    mensagem = "Peso normal";
} 
else if (imc >= 25.0 && imc <= 29.9) {
    mensagem = "Sobrepeso";
} 
else if (imc >= 30.0 && imc <= 34.9) {
    mensagem = "Obesidade grau 1";
} 
else if (imc >= 35.0 && imc <= 39.9) {
    mensagem = "Obesidade grau 2";
} 
else {
    mensagem = "Obesidade grau 3";
}

// Exibe a mensagem com a faixa de peso

console.log("Seu IMC é: " + imc.toFixed(2) + " - " + mensagem);
