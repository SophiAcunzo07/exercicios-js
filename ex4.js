// Exercício 4: Notas escolares

// Faça um programa que receba 4 notas de um aluno, calcule e imprima a média aritmética das
// notas e a mensagem de APROVADO para média superior ou igual a 7,0 RECUPERAÇÃO para
// notas entre 5.0 e 7,0 ou a mensagem de REPROVADO para média inferior a 5,0.

//receba 4 notas

let nota1 = parseInt(prompt("adicione a primeira nota: "))
let nota2 = parseInt(prompt("adicione a segunda nota: "))
let nota3 = parseInt(prompt("adicione a terceira nota: "))
let nota4 = parseInt(prompt("adicione a quarta nota: "))

//some as notas

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log (media)

//faca a media das notas  

//APROVADO = 7 ou maior
//RECUPERCAO entre 5 e 7
//REPROVADO menos que 5

if (media >= 7) {
    console.log ("aprovado!")
}

else if (media > 4 && media < 7) {
    console.log ("recupercao")
}

else if (media < 5) {
    console.log ("reprovado")
}