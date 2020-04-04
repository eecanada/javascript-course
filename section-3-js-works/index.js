////////////////////////////////////////////////////////How Code is Executed////////////////////////////////////

// Host (browser) where JS is hosted has some sort of JS engine that takes my code and excutes it. So a JS engine is a program that excutes JS code. 

// In the code engine my code is parsered by a parser ---> reads code line by line and sees if syntax is correct ----> if everything is correct then the parser produces an Abstract syntax tree ----> tree is translated into machine code ----> turns js code into code that can be excuted directly by a cpu proccessor ----> then code finally runs 
 


////////////////////////////////////Execution Context and the Execution Stack///////////////////////////////////////////

// all JS codes need an enviroment to run in, and these enviroments are called execution context 

// lastName === window.lastName, because lastName is a property of the window object and all things are part of this window object, so it seems the everything is js is an object

// Everytime  I call a function it gets it's brand new execution context, there seems to be an excution stack when a function is being called within another function. The function that was called last is going to be the execution context block ontop 


////////////////////////////////////////////////////////Hoisting//////////////////////////////////////////////////////

// // Example of Hoisting - with function decleration
// calculateAge(1965) //--> 54

// function calculateAge(year){
//   console.log(2019 - year)
// }
 
// // Hoisting will NOT work with function expression, but it will work with function declerations  
// retirement(1990) //--> error 

// const retirement = function(year){
//   console.log(65 - (2019 - year))
// }


// // Hoisting will NOT work with global variable 
// console.log(age) //--> undefined  
// const age = 23
 
// // Each have own execution object 
// function foo (){
//   const age = 65
//   console.log(age)
// }

// foo() //65


/////////////////////////////////////////////////////////Scoping/////////////////////////////////////////////////////

// Each function creates a scope: which is a space in which the variables are accessable. 
// functions in a function have access to the scope of there parent function


///////////////////////////////////////////////////////////This/////////////////////////////////////////////////////

// // console.log(this) //--> window object is default object 

// // function calculateAge(year){
// //   console.log(2019 - year)
// //   console.log(this)
// // }

// // calculateAge(1994)

// const john = {
//   name: 'john',
//   yearOfBirth: 1990,
//   calculateAge: function () {
//     console.log(this , 1)//-> refers to the object that called the method, which is john object
//     console.log(2019 - this.yearOfBirth)

//     function innerFunction () {
//       console.log(this, 2) //---> window object, since it it a regular function and not a method of an object, really strange of js
//       }
//       innerFunction()
//   }
// }

// john.calculateAge()

// const mike = {
//   name: 'mike',
//   yearOfBirth: 1994,
//   } 

// THis is an example of method borrowing, I am borrowing john's method and adding it as a property of my mike object
//   mike.calculateAge = john.calculateAge
//   mike.calculateAge() //25


