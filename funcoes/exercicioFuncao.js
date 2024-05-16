//construir menu para escolher um dos exercicios anteriores para ser executado
//faca com que repita sua execucao
//disponibilize as opcoes para o usuari
//ate que seja digitado sair

function exercicioDia() {
    let dia = prompt("digite um numero de 1 a 7: ") 

    if (dia == 1)  {console.log("hoje e segunda feira")}

    if (dia == 2)  {console.log("hoje e terca feira")}
    
    if (dia == 3)  {console.log("hoje e quarta feira")}
    
    if (dia ==4)  {console.log("hoje e quinta feira")}
    
    if (dia == 5)  {console.log("hoje e sexta feira")}
    
    if (dia == 6) {console.log("hoje e sabado")}
    
    if (dia == 7)  {console.log("domigo")}
}

//

function exercicioParImpar () {
    let numero = parseInt(prompt("digite um numero: "))

if (numero % 2 == 0) {console.log("numero par!") }

else {console.log("numero impar!")}
}

//

function exercicioMedia () {
    let nota1 = parseInt(prompt("adicione a primeira nota: "))
let nota2 = parseInt(prompt("adicione a segunda nota: "))
let nota3 = parseInt(prompt("adicione a terceira nota: "))
let nota4 = parseInt(prompt("adicione a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log (media)

if (media >= 7) {
    console.log ("aprovado!")
}

else if (media > 4 && media < 7) {
    console.log ("recupercao")
}

else if (media < 5) {
    console.log ("reprovado")
}
}

//

function exercicioContar () {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

//

function exercicio2 () {
    for (let i = 2; i <= 10; i += 2) {
        console.log(i);
    }
}

//

function exercicio5 () {
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
}

let opcao = window.prompt("MENU\nDigite a opcao desejada: \n\n1 - exercicioDia")

let opcao2 = window.prompt("MENU\nDigite a opcao desejada: \n\n2 - exercicioParImpar")

let opcao3 = window.prompt("MENU\nDigite a opcao desejada: \n\n3 - exercicioMedia")

let opcao4 = window.prompt("MENU\nDigite a opcao desejada: \n\n4 - exercicioContar")

let opcao5 = window.prompt("MENU\nDigite a opcao desejada: \n\n5 - exercicio2")

let opcao6 = window.prompt("MENU\nDigite a opcao desejada: \n\n6 - exercicio5")

switch (opcao) {
    case "1":
        exercicioDia()
        break;

    case "2":
        exercicioParImpar()
        break;

    case "3":
        exercicioMedia ()
        break;

    case "4":
        exercicioContar()
        break;    

    case "5":
        exercicio2()
        break;

    case "6":
        exercicio5()
        break;

    default:
        break
}