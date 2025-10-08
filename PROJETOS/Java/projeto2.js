// 1. Crie um código que declare uma variável chamada nome e exiba no console a mensagem:
// Olá, [nome]! Seja bem-vindo ao JavaScript!

let nome = "Davi"
 console.log (`Olá, ${nome}! Seja bem-vindo ao JavaScript`);

// ________________________________________
// 2. Faça um programa que receba a idade de uma pessoa e exiba se ela é maior ou menor de idade.

let idade = 17

if (idade >= 18){
  console.log("Você é maior de idade")
}
 else {
   console.log ("Você é menor de idade")
 }

// ________________________________________
// 3. Crie um programa que receba duas notas de um aluno, calcule a média e exiba se ele foi Aprovado, em Recuperação ou Reprovado.

let n1 = 19;
let n2 = 29;

let media = (n2+n1) /2;
console.log (media)

// ________________________________________
// 4. Desenvolva um programa que receba o salário de um funcionário e calcule um aumento de 15%. Mostre o novo salário.

let salario = 1000;
let aumento = salario*1.15;
console.log(aumento)

// ________________________________________
// 5. Monte um código que receba o nome de um produto e o valor de compra. Se o valor for maior que 100, aplique 10% de desconto e mostre o valor final.

let nome5 = "Notebook";
let valor= 1000;

if (valor<=100){
  console.log (valor = valor-(valor*0.1));
}
else {
  console.log(`Você não recebeu o desconto, o total ficou ${valor}`);
}

// ________________________________________
// 6. Crie um código que exiba todos os números de 1 a 10 usando um laço for.

for (i = 1; i <= 10; i++) {
  console.log (i)
}

// ________________________________________
// 7. Faça um programa que exiba todos os números pares de 0 a 20 usando o laço while.

let pares = 0

while (pares<=20){
  if(pares%2===0){
    console.log("pares " + pares);
  }
  pares++;
}

// ________________________________________
// 8. Crie um programa que receba um número e mostre a tabuada desse número de 1 a 10.

let tabuada = 2

for (i=1; i<=10; i++){
  console.log(tabuada*i)
}

// ________________________________________
// 9. Desenvolva um programa que peça um número e verifique se ele é par ou ímpar.

let n8= 50;
let verificar = n8%2;

if(verificar===0){
  console.log("Par");
}
else {
  console.log( "Impar")
}

// ________________________________________
// 10. Crie um programa que receba um nome de usuário e uma senha. Se o usuário e a senha estiverem corretos, mostre "Acesso permitido". Caso contrário, "Acesso negado".

let usuario = "Gabriel";

let senha = 1234;

if (usuario=== "Gabriel" && senha===1234){
  console.log ("Login Permitido");
}
else {
  console.log("Login incorreto");
}

// ________________________________________
// 11. Monte um programa que pergunte a distância em km e calcule o valor de uma corrida considerando:
// •	Tarifa base = R$5,00
// •	
// o	R$2,50 por km rodado
// Mostre o valor total da corrida.

let km= 254;
let tarifa= 5;
let rodado= 2.5;
let final= tarifa+(km/rodado);
  console.log(final);


// ________________________________________
// 12. Crie um vetor chamado frutas com três itens. Depois adicione mais uma fruta usando push() e exiba o vetor completo.

let frutas =["Uva", "Pera", "Laranja"]
console.log(frutas)
frutas.push ("Melancia")
console.log(frutas)

// ________________________________________
// 13. Crie um vetor com 5 números e exiba os números maiores que 10 e sua posição no console.



//________________________________________
// 14. Monte um programa que receba três nomes e armazene em um vetor. Depois, exiba apenas o segundo nome.
// ________________________________________
// 15. Faça um programa que armazene 5 notas em um vetor e mostre a média delas.
// ________________________________________
// 16. Crie um programa que pergunte o dia da semana (1 a 7) e mostre no console:
// 1 - Domingo
// 2 - Segunda
// ...
// 7 - Sábado
// ________________________________________
// Use a estrutura switch para isso.
// ________________________________________
// 17. Crie um código que receba o nome de uma cidade e mostre no console quantas letras ela possui.
// ________________________________________
// 18. Monte um programa que receba o nome completo de uma pessoa e exiba apenas o primeiro nome (dica: use split(" ")).
// ________________________________________
// 19. Crie um vetor com o nome de 5 alunos e, usando um laço for, exiba uma mensagem de boas-vindas para cada um deles no console.
// ________________________________________
// 20. Faça um programa que armazene em um vetor os preços de 4 produtos e mostre:
// •	O valor total da compra
// •	O preço médio dos produtos