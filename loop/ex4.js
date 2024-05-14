// Pedir al usuario que ingrese un número
const numero = parseInt(prompt("Coloque um numero para realizarmos a sua tabuada ate o 10:"));

// Verificar si se ingresó un número válido
if (isNaN(numero)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    // Imprimir la tabuada del número ingresado hasta el 10
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}
