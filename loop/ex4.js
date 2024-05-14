// Pedir p o usuario que colocar um número
const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));

// Verificar si se o número válido
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    // Imprimir a tabuada do número ingresado ate 10
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
