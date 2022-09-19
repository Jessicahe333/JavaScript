var myName = "Jessica";

console.log(myName)

let language = "Javascript";

const pattern = "ECMAScript";
// 'const' sempre tem que contribuir o valor, e não é mudável no código.

{
    var age = 32;
    // Se for 'let', não é permitido exibir mensagem, pq tá fora do escopo.
}

console.log(age);

var Nome = "Jessica"; // sring
var Idade = 26; //numero
var Altura = 1.56; //numero

null
undefined

var isAluno = false //boolean

//Objeto, array, e function
var person = {
    "name": "Luana",
    "age": 32
}

var students = ["Simara", "João", "Maria"]

function sum(a,b) {
    return a+b
}

//operador typeof [Mostrar o tipo de variável]
console.log(typeof age)
console.log(typeof isAluno)

var object = null
console.log(typeof object)

function soma() {
    return 5+2
}
console.log(typeof soma)

//operador aritméticos
//adição +
var sumTwoNumbers = 1 + 3
console.log(sumTwoNumbers)

//subtração -
var subTwoNumbers = 4 - 3
console.log(subTwoNumbers)

// multiplicação *
var multTwoNumbers = 4 * 3
console.log(multTwoNumbers)

// divisão /
var divTwoNumbers = 4 / 2
console.log(divTwoNumbers)

// módulo ou resto de uma divisão %
var modTwoNumbers = 4 % 3
console.log(modTwoNumbers)

// incremento ++
var num = 1
console.log(++num)

// decremento --
var numero = 2
console.log(--numero)


//operadores de atribuição
// = atribuição
// atribuição de soma
var x = 1
var y = 3
console.log(x+=y) // == x = x+y
console.log(x-=y)
console.log(x*=y)
console.log(x/=y)
console.log(x%=y)

// operador de comparação
// ==
// ===
// !=
// < ou <=
// > ou >=

// operador lógicos
// e: &&
// ou: ||
// negação: !


// Condicionais:
var num = 1
if (num === 1) {
    console.log("num é igual a 1")
} else if(num === 2){
    console.log("num é igual a 2")
} else {
    console.log("num é 5")
}


var mes = "janeiro"
switch (mes) {
    case "fevereiro":
        console.log("mes 2")
        break

    case "março":
        console.log("mes 3")
        break

    case "janeiro":
        console.log("mes 1")
        break

    default:
        console.log("nenhum dos casos acima atendidos")
}




// Estrutura de repetição:
var colors = ["black", "white", "yellow", "green", "blue"]
for (var i = 0; i < colors.length; i++){
    console.log(colors[i])
}


for (var i=0; i < 10; i++) {
    console.log(i)
}


var i = 1;
while (i <= 10) {
    console.log(i)
    i++
}


var i = 0
do{
    console.log(i)
    i++
} while(i < 10)




// Funções:
function sayHello(name, lastName) {
    console.log("Hello " + name + " " + lastName)
}

sayHello("Jessica", "Baby")

function sum(a, b) {
    return a + b
}

console.log (sum (40, 70))