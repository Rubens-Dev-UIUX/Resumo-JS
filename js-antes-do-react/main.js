// Nullish Coalesching Operador

// const idade = 0;
// const idadeNull = null;

// document.body.innerText = 'Idade informada é: ' + idade; Deste modo o retorno será "0"
// document.body.innerText = 'Idade informada é: ' + idadeNull; Deste modo o valor retornará "null"
// document.body.innerText = 'Idade informada é: ' + (idade || 'Não informado'); Desde modo retornará "Não informado", pois o operador || não interpreta o "0", como valor válido 
// document.body.innerText = 'Idade informada é: ' + (idadeNull || 'Não informado'); Deste modo retornará "Não informado"

// Deste modo irá interpretar tanto o "0", quanto um valor "Null"
// document.body.innerText = 'Idade informada é: ' + (idade ?? 'Não informado'); 
// document.body.innerText = 'Idade informada é: ' + (idadeNull ?? 'Não informado'); 

//-----------------------------------------------------------------------------------

//Objetos

// const user = {
//   name: 'Rubens',
//   idade: 21,
//   address: {
//     street: 'Rua test',
//     number: 123,
//   },
// };

//Métodos de objetos
// document.body.innerHTML = ('name' in user); Busca se possui a chave especificada dentro do meu objeto
// document.body.innerHTML = Object.keys(user); Lista as chaves de meu objeto 
// document.body.innerHTML = Object.values(user); Lista os valores das chaves, porém para estruturas de dados mais complexas, podemos usar o exemplo abaixo
// document.body.innerHTML = JSON.stringify(Object.values(user)); Lista os valores das chaves, mais detalhadamente 
// document.body.innerHTML = JSON.stringify(Object.entries(user)); Lista as chaves e valores do meu objeto

//Desestruturação
// const { address, idade: age, nickname = 'Bianca' } = user
// document.body.innerHTML = JSON.stringify({ address, age, nickname });

//Desestruturação em Função
// function mostraIdade(user) {
//   return user.idade
// }

// document.body.innerText = mostraIdade(user);

//-----------------------------------------------------------------------------------

// Rest operator 

// const user = {
//   name: 'Rubens',
//   idade: 21,
//   address: {
//     street: 'Rua test',
//     number: 123,
//   },
// };
// const { name, ...rest } = user;

// document.body.innerText = JSON.stringify(rest)

//Desestruturação de array
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [ first, second, ...rest] = array;
// const [ first, , third, ...rest] = array; // Pulando a 2º posição

// document.body.innerText = JSON.stringify({ first, second, rest })
// document.body.innerText = JSON.stringify({ first, third, rest })

//-----------------------------------------------------------------------------------

// Shorts syntax

// const name = 'Rubens';
// const age = 21;

// const user = {
//     name,
//     age,

// } 

// document.body.innerText = JSON.stringify(user)

//-----------------------------------------------------------------------------------

//Optinal Chaining

// const user = {
//       name: 'Rubens',
//       age: 21,
//       address: {
//         street: 'Rua test',
//         number: 123,
//         zip: {
//             code: '123450000',
//             city: 'São Paulo'
//         },
//         showFullAddress() {
//             return 'ok';
//         }
//       },
//     };

//     const key = 'name';


// document.body.innerText = user.address.street; //Mostrando apenas o valor 'street'
// document.body.innerText = user.address ? user.address.street : 'Não informado';  // Verificando se existe o campo informado, se não exibe mensagem
// Já para verificarmos os valores dentro do 'zip', utilizando o mesmo metodo acima, ficaria muito complexo

// document.body.innerText = user.address?.zip?.code ?? 'Não informado'; // Dessa maneira além de verificarmos etapa por etapa, conseguira ser identificado de existe um valor Null 

//Outros cenários
// document.body.innerText = user.address?.showFullAddress?.() ; // Assim verificamos se o 'Address' existe e verificamos se a Função 'showFullAddress' existe também

// document.body.innerText = user[key]; // Exibindo valor do Objeto especificado na variavel 'key'

//-----------------------------------------------------------------------------------

//Metodos de array 

// const array = [1, 2, 3, 4, 5];

// Como percorrer um array com for

// for ( const i of array ) {
//     document.body.innerHTML += i; 
// }

// Com forEach e arrow function

// array.forEach( item => {
//     document.body.innerHTML += item;
// })

// Com Map (O map é mais recomendado caso for preciso alterarmos o valores de nosso array, ou seja criar um novo array a partir de nosso Original
// com isso nosso novo array criado a partir do original SEMPRE terá o mesmo tamanho do array original)

// const novoArray = array.map( item => {
//     return item * 2;

// })

// document.body.innerText = JSON.stringify(novoArray);

// Filter (Este metodo apenas filtra os valores de nosso array, retornando apenas os valores solicitados, no exemplo abaixo retornamos apenas os valores pares de nosso array)

// const novoArray = array.filter( item => item % 2 === 0) // numeros pares
// const novoArray = array.filter( item => item % 2 !== 0) // numeros impares

// document.body.innerText = JSON.stringify(novoArray);

//Every ( Nos retorna um boolean - verifica de todos'every' os itens satisfazem uma condição )

// const todosItensSaoNumeros =  array.every(item => {
//     return typeof item === 'number'
// }); // verificando se todos os itens do array são numeros

// document.body.innerText = JSON.stringify(todosItensSaoNumeros);

// Some ( Nos retorna um boolean - Verifica se pelo menos um item satisfaz a condição )

// const peloMenosUmItemNaoENumero = array.some(item => {
//     return typeof item !== 'number';    
// }); // verificando se apenas 1 item não é numero

// document.body.innerText = JSON.stringify(peloMenosUmItemNaoENumero);

// Find ( Encontra 1 item do array )

// const par = array.find(item => item % 2 === 0 );// buscando o primeiro item do array que satisfaça nossa condição

// document.body.innerText = JSON.stringify(par);

//FindIndex ( Mostra a posição/index do item)

// const par = array.findIndex(item => item % 2 === 0 ); // mostrando a posição do primeiro numero par

// document.body.innerText = JSON.stringify(par);

// Reduce ( Cria uma nova estrutura de dados a partir de nosso array )

// const soma = array.reduce((acc, item) => {
//     return acc + item;
// }, 0 ); // Cria uma nova estrutura de dados que soma todos os itens de nosso array, iniciando com a soma de 0 + 1

// document.body.innerText = JSON.stringify(soma);

//-----------------------------------------------------------------------------------

// Template Literals

// const name = null;

// const hello = `Bem Vindo ${name ?? 'Visitante'}`

// document.body.innerText = hello;

//-----------------------------------------------------------------------------------

//Promises ( Promessas/'Requisições' - abaixo utilizamos uma api do github para buscar valores a serem utilizados como 'resove' ou 'reject')

// .then/.cath/.finally
// .then - quando nossa requisição da certo
// .cath - quando nossa requisição da erro
// .finally - será executado dando certo ou errado

// Realizando requisição

// fetch('https://api.github.com/users/Rubens-Dev-UIUX')
// .then(response => {
//     return response.json();
// })
// .then(body => {
//     console.log(body)
// })
// .catch(err => {
//     console.log(err)
// })
// .finally(() => {
// console.log('Executado')
// })

// Colocando nossa requisição dentro de uma função e a tornando assincrona

// async function BuscaDadoGithub() { //Função assincrona ( toda função assincrona automaticamente se torna uma promisse)
//     try {
//         const response = await fetch('https://api.github.com/users/Rubens-Dev-UIUX'); // nosso script irá aguardar essa busca
//         const body = await response.json(); // nosso script irá aguardar a conversão para json

//         console.log(body); // exibindo resultados em json no nosso console
//     } catch (err) {
//         console.log(err); // capturando erro e exibindo em nosso console
//     } finally {
//         console.log('Requisição executada'); // Será executado dando certo ou erro
//     }
// };

// BuscaDadoGithub();

//-----------------------------------------------------------------------------------

//Importações e exportações de funções

// import { soma, sub, PI } from './lib/math';
// import renomeandoSum from './lib/math-default';
// import * as math from './lib/math';

// console.log(math); // exibindo todos os exports de 'math.js'

// console.log(soma(1, 3));
// console.log(sub(2, 1));
// console.log(renomeandoSum(5, 5));
// console.log(PI);

