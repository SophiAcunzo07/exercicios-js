// Exercício 1: Verificação de login
// Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
// nome de usuário é "admin"; e a senha é "senha123". Exiba uma mensagem indicando se o login
// foi bem-sucedido ou não.


//solicitar ao usuario um nome de usuario

let username = prompt("digite um nome de usuario: ");

//solicitar ao usuario uma senha

let senha = prompt("digite a senha: ");

//verifique se o nome do usuario e admin e a senha e senha123
//CASO SIM- exiba uma mensagem de login bem sucedido 
//CASO NAO- exiba uma mensagem de login nao sucedido

if (username == "admin" && senha == "senha123"){
    console.log ("login bem sucedido");
} 
else 
{
    console.log("voce nao tem permissao de acesso")
}

//exiba uma mensagem indicando se o login foi bem sucedido ou nao
