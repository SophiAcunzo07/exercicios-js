// Exercício 7: Cálculo de desconto progressivo

// Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
// pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
// aplique um desconto de acordo com o valor total da compra. Siga a tabela:
// Valor total da compra até R$ 100,00: sem desconto.
// Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
// Valor total da compra acima de R$ 200,00: desconto de 20%.
// Exiba o valor final da compra com o desconto aplicado.

// let valorCompra = prompt("Digite o valor total da compra:");

// // Converte o valor da compra para um número

// valorCompra = parseFloat(valorCompra);

// // Define variável para armazenar o valor final da compra com desconto

// let valorFinal;

// // Verifica o valor da compra e aplica o desconto progressivo

// if (valorCompra <= 100) {

//     // Sem desconto

//     valorFinal = valorCompra;
// } else if (valorCompra <= 200) {

//     // Desconto de 10%

//     valorFinal = valorCompra * 0.9;
// } else {

//     // Desconto de 20%

//     valorFinal = valorCompra * 0.8;
// }

// // Exibe o valor final da compra com desconto aplicado

// console.log("O valor final da compra com desconto é: R$" + valorFinal.toFixed(2));

//

let valorTotal = parseFloat(prompt("digite o valor dqa compra: "))

let desconto;

if (valorTotal <= 100) {
    //sem desconto
    desconto = 0;
    console.log("o valor de desconto foi: " + (desconto))
}

else if (valorTotal <= 200) {
    //sem desconto
    desconto = 0.1;
    console.log("o valor de desconto foi: " + (desconto*100)+ "%")
}
else {
    desconto = 0.2;
    console.log("o valor de desconto foi: " + (desconto*100)+ "%")
}

let valorFinal = valorTotal - (valorTotal*desconto)

console.log("valor final da compra com desconto e de: R$" + valorFinal)