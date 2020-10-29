
function sayHello(name, age){
    return `Hello! ${name} you are ${age} years old `;
}

const greetNicolas = sayHello("Nicolas",14)

console.log(greetNicolas)

const calculator = {
    plus : function(a, b){
        return a+b;
    }
}
//console.log(greetNicolas)
const plus = calculator.plus(5,5)
console.log(plus)