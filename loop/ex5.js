// Imprimir os primeiros 10 números da sequência de Fibonacci.

// Funcio para calcular os primeros n números de Fibonacci
function fibonacci(n) {
    let fib = [0, 1]; // Inicializamos o array com os dos primeros números de Fibonacci

    // Calculamos os seguintes números de Fibonacci
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}

// Imprimir os primeros 10 números de Fibonacci
console.log("os primeros 10 números de Fibonacci sao:");
console.log(fibonacci(10));
