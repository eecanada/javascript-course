/////////////////How Code is Executed/////////////////////////

// Host (browser) where JS is hosted has some sort of JS engine that takes my code and excutes it. So a JS engine is a program that excutes JS code. 

// Code is parsered by a parser ---> reads code line by line and sees if syntax is correct ----> if everything is correct then the parser produces a Abstract syntax tree ----> tree is translated into machine code ----> turns js code into code that can be excuted directly by a cpu proccessor ----> then code finally runs 
 


//////////Execution Context and the Execution Stack///////////

// all JS codes need an enviroment to run in, and these enviroments are called execution context 

// lastName === window.lastName, because lastName is a property of the window object

// Everytime  I call a function it gets it's brand new execution context, there seems to be an excution stack when a function is being called within another function. The function that was called last is going to be the execution context block ontop 


/////////////////Hoisting/////////////////////////

// Example of Hoisting - wiht function decleration
calculateAge(1965) //--> 54

function calculateAge(year){
  console.log(2019 - year)
}
 
// Hoisting will NOT work with function expression
retirement(1990) //--> error 

const retirement = function(year){
  console.log(65 - (2019 - year))
}


// Hoisting will NOT work with global variable 
console.log(age) //--> undefined  
const age = 23
 
// Each have own execution object 
function foo (){
  const age = 65
  console.log(age)
}

foo()


//////////////////Scoping///////////////////////////

// Each function created a scope which is a space in which the variables are accessable. 

