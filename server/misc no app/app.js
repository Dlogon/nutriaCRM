const {
    sayHello,
    goodBye
} = require('./greet')

console.log(sayHello("Diego"));
console.log(goodBye("Diego"))
console.error(new Error(goodBye("Diego")));
console.log(process.env)