//pro codigo funcionar, precisa ser retirado da pasta src
import readLineSync from 'readline-sync';

//readline-sync pacote, pra usar: var varName = readlineSync.question('May I have your name? ');

const arr = []

while(true) {
const questUser = readLineSync.question('Digite uma propriedade CSS e retornaremos uma lista ordenada pra voce: ')
    if(questUser.toLowerCase() === "sair") {
        break
    }else{
        arr.push(questUser)
    }
}
const outP = arr.sort() //ordena de a-z, entretanto, ordena primeiro caracteres maiusculos e depois os minusculos
console.log(outP.join(" "))
    