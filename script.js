let firstNumber = prompt("Digite o primeiro número")
let secondNumber = prompt("Digite o segundo número")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = (firstNumber + secondNumber)
const sub = (firstNumber - secondNumber)
const mult = (firstNumber * secondNumber)
const div = (firstNumber / secondNumber)
const divRest = (firstNumber % secondNumber)

alert(sum + ' é o resultado da soma')
alert(sub + ' é o resultado da subtração')
alert(mult + ' é o resultado da multiplicação')
alert(div + ' é o resultado da divisão')
alert(divRest + ' é o resto da divisão')

if(firstNumber == secondNumber){
  console.log("Números iguais")
} else {
  console.log("Números diferentes")
}

if(sum % 2 == 0) {
  console.log("A soma desses números é par")
} else {
  console.log("A soma desses números é ímpar")
}
