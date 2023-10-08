const timeout = 1000;
const {isPair}  = require("./misc")

console.log(setImmediate(myTheme, "6"));

setTimeout(myTheme, timeout, "Node");
myTheme("Js");

myTheme("Js");

setInterval(myInterval, 10)

function myInterval()
{
  const myRand = (Math.random() *100).toFixed(0) % 100;
  console.log(myRand);
  if(myRand==50)
    process.exit(1);

}

function myTheme(theme)
{
  console.log(`The theme is ${theme}`);
}

