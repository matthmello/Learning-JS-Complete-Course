// (Variáveis)

let nome = 'Matheus';           //strings
let idade = 26;                 //Number
let peso = 75;       
let altura = 1.75;
const anoNascimento = 1996;
let masculino = true;           //boolean

console.log(`${nome} tem ${idade} anos, pesa ${peso}kg, 
mede: ${altura} e nasceu no ano de ${anoNascimento}`);
console.log()
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Objetos) {}

let pessoa = {
    nome: 'Matheus',
    idade: 26,
    altura: 1.75,
    masculino: true,
    sobrenome: 'Melo'
};

console.log(pessoa.nome, pessoa.sobrenome, idade, altura);
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Arrays) []
// Inserindo objetos dentro de um array

let familia = [{
    nome: 'Matheus',
    idade: 26,
}, {nome: 'Joao',
    idade: 20,
}, {
    nome: 'Jonathan',
    idade: 30
}];

console.log(familia[0].nome, idade); //mostrando nome e idade do objeto 0 da array
console.log(familia.length);         //mostrando tamanho da array
console.log(familia[0].nome.length); //mostrando tamanho do nome dentro do objeto 0
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Functions)

function parOuImpar(n){
    if (n % 2 == 0) {
        console.log('O número é Par')
    } else if (n % 2 == 1) {
        console.log('O número é Ímpar')
    } 
};

//resp = prompt('Digite um número para saber se é par ou impar: ')
//parOuImpar(resp);

function multiplicaNumero(a, b){
    m = a * b
    console.log(`${a} x ${b} = ${m}`)
//  return a * b
};

multiplicaNumero(5, 10)
//console.log(multiplicaNumero(5, 6))
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Operadores)

// Operadores Aritméticos:

// Soma: + , Subtração: - , Multiplicação: * , Divisão: / , Exponencial: **
// Incremento: ++ , Decremento: --

// Operadores de Atribuição:

// Recebe: = , Concatenar: + 

// Operadores de Igualdade:

// Comparação de valores: == , Comparação de valores e tipos: ===

// Operador Ternário:

// let tipo = pontos > 100 ? 'premium' : 'comum'; 
// (Se pontos for maior que 100 é premium se não for maior é comum)

// Operadores lógicos

// && = and  (Para retornar true deve ser os dois)
// || = or   (Para retornar true deve ser apenas um ou outro)

// Comparação lógica com operadores não booleanos

// Falsy = undefined, null, 0, false, '', Nan
// Truthy 

// Ex: false || 'Matheus' = 'Matheus'
// Ex: false || 1 = 1
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 1)

let a = 'Vermelho';
let b = 'Azul';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Condicionais If...Else)

// Se a hora estiver entre 06:00 até 12:00 : Bom dia!
// Se estiver entre 12:00 até 18:00 : Boa tarde!
// Caso contrário: Boa noite!

let horaAtual = 12;

if (horaAtual >= 6 && horaAtual < 12) {
    console.log('Bom dia!')
} else if (horaAtual >= 12 && horaAtual < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Switch Case)

let permissao; //comum, gerente, diretor

switch (permissao) {
    case 'comum':
    console.log('Usuário Comum');
    break;

    case 'gerente':
        console.log('Usuário Gerente');
        break;

    case 'diretor':
    console.log('Usuário Diretor');
    break;

    default: //default é caso nao seja nenhum dos cases acima
    console.log('Usuário não reconhecido!')
}
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Laços de repetição)
// 1 - (For)
for (let i = 1; i <= 5; i++) {
    console.log('Testando For Loop', i)
}
//imprimir apenas valores ímpares
for (let i = 1; i < 10; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// 2 - (While)
let i = 0
while (i < 10) {
    if (i % 2 == 1) {
        console.log(i)
    }
    i++
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// 3 - (Do While)
let index = 0
do {
    console.log('Digitando', index);
    index++;
} while (index < 10)
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// 4 - (For in)
const person = {    //Objeto
    nome: 'Matheus',
    idade: '26'
};
// key-value
for(let key in person) {
    console.log(key,person['nome'])
}
console.log('')

const colors = ['Vermelho', 'Azul', 'Verde']; //Array
for(let i in colors) {
   console.log(i, colors[i])
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// 5 - (For of)

for(let cor of colors) {
   console.log(cor)
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 2)

//Escreva uma função que usa 2 números e retorna o maior entre eles

let valorMaior = retornaMaior(35,25)
console.log(valorMaior);

function retornaMaior(n1, n2) {
    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 3)

// FizzBuzz
// Divisível por 3 = Fizz
// Divisível por 5 = Buzz
// Divisível por 3 e 5 = FizzBuzz
// Não divisivel por 3 e 5 = entrada
// Não é um número = ''Não é um número''

const res = fizzBuzz(15);
console.log(res)

function fizzBuzz(entrada) {
    if (typeof entrada !== 'number') {
        return ('Não é um número');
    } else if (entrada % 3 == 0 && entrada % 5 == 0 && entrada != 0) {
        return ('FizzBuzz');      
    } else if (entrada % 3 == 0 && entrada != 0) {
        return ('Fizz');
    } else if (entrada % 5 == 0 && entrada != 0) {
        return ('Buzz');
    } 
    return (entrada);
}
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (Constructor Function)
//Constructor diferente do Factory utiliza a Primeira letra Capitalized
//Não é necessário retornar um valor
function Cadastro(nome, idade, sexo) {
    this.nome = nome,
    this.idade = idade,
    this.sexo = sexo,
    this.mensagem = function() {
        console.log('Usuário Cadastrado')
    }

}

const cliente1 = new Cadastro('Matheus', 26, 'M');
console.log(cliente1)

// (Factory Function)
//Factory utiliza o mesmo das outras funções, ''capitalized nas proximas palavras''
//Ele precisa retornar um valor
function cadastroClientes(nome, idade, sexo) {
    return {
        nome,
        idade,
        sexo,
        mensagem() {
            console.log('Usuário Cadastrado')
        }
    }
}
const cliente2 = cadastroClientes('Matheus', 26, 'M')
console.log(cliente2)
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 4)

// Velocidade máxima de até 70
// A cada 5km acima do limite você ganha 1 ponto na carteira
// Dica: Math.floor()
// Caso os pontos sejam maior que 12 ''Carteira Suspensa''

verificadorVelocidade(130);

function verificadorVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    if (velocidade <= velocidadeMaxima) {
        console.log(`Você está a ${velocidade}km, Velocidade ok`)       
    } else {
        console.log(`Você está a ${velocidade}km e está acima do limite permitido!`)
        if (velocidade >= 75) {
            const pontos = (velocidade - velocidadeMaxima) / KmPorPonto
            console.log(`Você recebeu: ${Math.floor(pontos)} ponto(s) na carteira`)
            if (pontos >= 12) {
                console.log('Carteira Suspensa!')
            }
        } 
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 5)

// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é Par ou Impar

exibirTipo(5);

function exibirTipo(limite) {
    for (i=0; i <= limite; i++) {
        if (i % 2 == 0) {
        console.log(`${i} é Par`)
        } else {
        console.log(`${i} é Ímpar`)
        }
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 6)

// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    título: 'Os Vingadores',
    anoLançamento: 2012,
    diretor: 'Joss Whedon'
}

exibirPropriedades(filme)

function exibirPropriedades(objeto) {
   for (value in objeto) {
        if (typeof(objeto[value]) === 'string') {
            console.log(value, objeto[value])   
        }
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 7)

// Criar função somar que retorna a soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite) {
    let multiploDe3 = 0;
    let multiplode5 = 0;
    for (i=0; i <= limite; i++) {
        if (i % 3 == 0) {
            multiploDe3 += i
        } else if (i % 5 == 0) {
            multiplode5 += i
        }
    }
    console.log(multiploDe3 + multiplode5);
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 8)

// Nota Escolar
// Obter a média a partir de um array

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100 : A


const array = [70, 90, 80];
console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
    let mediaNotas = calcularMedia(notas);

    if (mediaNotas <= 59) {
        return 'F';
    } else if (mediaNotas >= 60 && mediaNotas <= 69) {
        return 'D';
    } else if (mediaNotas >= 70 && mediaNotas <= 79) {
        return 'C';
    } else if (mediaNotas >= 80 && mediaNotas <= 89) {
        return 'B';
    } else {
        return 'A'
    }
}

function calcularMedia(array) {
    let somaNotas = 0;
    for (value in array) {
        somaNotas += array[value];
    }
    return somaNotas / (array.length);
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 9)

// Criar uma função que exibe a quantidade de * que aquela linha possui

exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    padrao = '';
    for(i=1; i <= linhas; i++) {
        padrao += '*';
        console.log(padrao)
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 10)

// Criar uma função para mostrar os números primos
// Um número primo só pode ser divisível por 1 e por ele mesmo
exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite) {
    for (i = 2; i <= limite; i++) {
        numPrimo = true;

        for (divisor = 2; divisor < i; divisor++){
            if(i % divisor === 0) {
                numPrimo = false;
                break;
            }
        }

        if (numPrimo) console.log(i)
    }
}
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
//Sequencia Fibonacci: 

//let n = prompt(`Informe um número: `, );
//let t1 = 0;
//let t2 = 1;
//console.log(`${t1}`)
//console.log(`${t2}`)
//for (let i= 1; i <= n; i++) {
//        let t3 = t1 + t2
//        console.log(`${t3}`)
//        t1 = t2
//        t2 = t3
//}
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 11)

// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
// exibirEndereco(endereco)

let endereço = {
    Rua: 'Moraes Pinheiro',
    Cidade: 'Rio de Janeiro',
    CEP: '21545-410'
}

let exibirEndereço = (endereço) => {
    for (let key in endereço) {
        console.log(key, endereço[key])
    }
}

exibirEndereço(endereço)
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 12)

// Encontre a igualdade

class Endereço {
    constructor (rua,cidade,cep) {
        this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
    }
}

const endereço1 = new Endereço('a', 'b', 'c');
const endereço2 = new Endereço('a', 'b', 'c')

let saoIguais = (endereço1, endereço2) => {
    return endereço1.rua === endereço2.rua &&
            endereço1.cidade === endereço2.cidade &&
            endereço1.cep === endereço2.cep 
 
} 

console.log(saoIguais(endereço1, endereço2))

let temEndereçoMemoriaIguais = (endereço1, endereço2) => {
    return endereço1 === endereço2
}

console.log(temEndereçoMemoriaIguais(endereço1, endereço2))
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 13)

// Crie um objeto de postagem de blog
let postagem = {
    titulo: 'Minha Postagem',
    mensagem: 'Olá esse é o 14° exercício do curso de JS',
    autor: 'Matheus Melo',
    visualizações: 50,
    comentarios: [
        {autor: 'Fulano', mensagem: 'Olá'},
        {autor: 'Ciclano', mensagem: 'Eae'},
    ],
    estaAoVivo: true
}

console.log(postagem)
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// (EXERCÍCIO 14)

let faixadepreços = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'de R$1000 ou mais', minimo: 1000, maximo: 9999999}
];

console.log(faixadepreços)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

class Criafaixa{
    constructor(tooltip, minimo, maximo){
        this.tooltip = tooltip
        this.minimo = minimo
        this.maximo = maximo
    }
}

let faixadepreços2 = [
    new Criafaixa('a', 0, 100),
    new Criafaixa('b', 100, 1000),
    new Criafaixa('c', 1000, 10000)
]

console.log(faixadepreços2)
console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

// Constructor Function com Class:

class Celular{
    constructor(marca, tamtela, preço){
        this.marca = marca,
        this.tamtela = tamtela,
        this.preço = preço
    }
    ligar = () => console.log(`O seu Celular está ligando`)   
}

let celular1 = [
    new Celular('Samsung', 5.50, 2500),
    new Celular('iPhone', 5, 4500),
    new Celular('ASUS', 4.50, 1500),
];
console.log(celular1);

// Factory Function: 

function criaCelular(marca, tamtela, preço) {
    return {  //Factory function sempre deve retornar o valor
        marca,
        tamtela,
        preço
    };
}

let celular2 = new criaCelular('Galaxy', 5, 3000);
console.log(celular2)
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //

let calcularIMC = (altura, peso) => {
    let res = 0
    res = peso / (altura * altura)
    return res;
}


let pessoa1 = calcularIMC(1.75, 75)

console.log(`O seu IMC é de: ${(pessoa1).toFixed(2)}`) //para arredondar em 2 casas após o .
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Introdução aos Arrays

// Add elementos ao array
const numeros = [1, 2, 3, 3];

// Add no início:
numeros.unshift(0);  // adicinou 0 no início
console.log(numeros)

// Add no meio:
numeros.splice(1, 0, 'A') //Inseriu 'A' no índice 1, 0 para nao deletar nada
console.log(numeros)

// Add no final:
numeros.push(5)    // adicionou 5 no final
console.log(numeros)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Encontrando um elemento dentro do array

indice = numeros.indexOf(2) // Vai buscar no array o valor no parametro
console.log(indice)         // Vai retornar o número do índice que ele está
                            // Ou irá retornar -1 caso o valor nao esteja no array e seja false

console.log(numeros.lastIndexOf(3)) //vai buscar o ultimo indice de 3

numTeste = numeros.includes(9) //Verifica se o valor no parâmetro se inclui dentro do array numeros
console.log(numTeste)          // Retorna como true ou false

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Encontrando elementos de tipo referencia

const marcas = [    
    {id: 1, nome: 'a'},    //utilizar includes em objeto nao funciona
    {id: 2, nome: 'b'},
    {id: 3, nome: 'c'}     //para buscar dentro de objeto, usar metodo find()
]

let marca = (marcas.find((marca) => {
    return marca.nome === 'a';
}))

console.log(marca)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Removendo elementos de array

// Anteriormente aprendemos os metodos para adicionar:
// numeros.unshift()  numeros.splice()  numeros.push()

// Para remover:

const primeiro = numeros.shift()  // removeu o primeiro elemento do array
console.log(primeiro) // o número removido
console.log(numeros) // Array atualizado

const meio = numeros.splice(4, 1) // Na posição 4 do array remover 1 número
console.log(meio)    // o número removido
console.log(numeros) // Array atualizado

const ultimo = numeros.pop() // removeu o ultimo numero do array (5)
console.log(ultimo)   // o número removido
console.log(numeros)  // Array atualizado

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Esvaziando um array

let listaNumeros = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

// Solução 1
listaNumeros = []; // Porém nesse caso se listaNumeros tiver referencias, será um problema
// EX: let outros = listaNumeros, a variável ''outros'' nao será deletada também, ele irá limpar apenas a listaNumeros

console.log(listaNumeros)

// Solução 2  (MAIS RECOMENDADA)
listaNumeros.length = 0;   // Nesse caso esse array será zerado e todas as referencias também irão limpar
console.log(listaNumeros) // Ex: let outros = listaNumeros, a variavel array 'outros' também será zerada para []

// Solução 3 (nao muito recomendada)
listaNumeros.splice(0, listaNumeros.length)
console.log(listaNumeros)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Combinando e cortando um array (jeito antigo)

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// Combinar os dois arrays:
const combinado = firstArray.concat(secondArray) //.concat
console.log(combinado) // mostrará o firstArray combinado com o secondArray

// Divir um array:
const cortado = combinado.slice(1, 3) // nesse caso ele vai igual o for, inicia no 1 e termina no 2
console.log(cortado)  // mostrará apenas os valores cortados (2, 3)
// no caso do slice, caso deseja que seja cortado de um indice até o final:
// Colocar apenas ex: combinado.slice(1) nesse caso vai cortar do indice 1 até o final do array

//E combinado.slice() sem parametros irá criar uma cópia de referencia 

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Operador Spread = [...] (Modo atual de combinar arrays) (1)

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// Combinando arrays do jeito novo com Operador Spread
const combinando = [...array1,...array2] //Jeito novo de combinar Arrays
//também da pra adicionar elementos novos ex:
// const combinado = [...array1,'a',...array2,'#']
console.log(combinando)

// Clonar um array com Operador Spread
const clonado = [...combinado];
console.log(clonado)

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Foreach

const listaArray = [1, 2, 3, 4, 5]

// Anteriormente aprendemos o for of:
//for (number of listaArray){
//    console.log(number) // Nesse caso irá imprimir todos os valores dentro do array 1, 2, 3, 4, 5
//}

// O Foreach:

listaArray.forEach((number) => {  //Foreach deverá receber uma função de callback dentro
    console.log(number) // Nesse caso teremos o mesmo resultado do for of acima
})                       

console.log('')

listaArray.forEach((number, i) => {  //Podemos aqui implementar também o indice
    console.log(number, i) 
})   
// foreach para ter mais informação sobre o array
console.log('')

// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Combinando Arrays (2)

const arrayCombinado = listaArray.join('.'); //adicionará um . entre todos os numeros
console.log(arrayCombinado);

const frase = 'Olá bem vindo ao curso!';
const resultado = frase.split(' '); //irá separar os arrays onde tiver cada espaço ' '
console.log(resultado); // ex: ['Olá', 'bem', 'vindo', 'ao', 'curso!']

//ex:
// Como criar array de objetos em javascript

const frase1 = 'Como criar array de objetos em javascript';
const inserirTraço = frase1.split(' '); //Primeiro separando a frase por espaço
console.log(inserirTraço.join('-')); //Colocando - entre as palavras
// Esse é um slug, url com traço entre elas
// No exemplo acimá sairá: Como-criar-array-de-objetos-em-javascript

console.log('')
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// Input do JS (prompt)

//let idadePessoa = prompt('Qual a sua idade? ')
//    if (idadePessoa >= 18) {
//        console.log('Você ja é maior de idade!')
//    } else {
//        console.log('Você é menor de idade.')
//    }
// ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– //
// INTRODUÇÃO DO DOM (Document Object Model)

