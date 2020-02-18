///////////////////////////////////////////LET AND CONST////////////////////////////////////////////////////////////////

//ES5 - function scope
// var name5 = 'Jane Smith'
// var age5 = 23
// name5 = 'Jane Miller'
// console.log(name5) // 'Jane Miller'

// //ES6 - block scope
// const name6 = 'Jane Smith'
// let age6 = 23
// name6 = 'Jane Miller'
// console.log(name6) // error because const cannot be mutated 


// ES5 
// function driverLicence5(passedTest){
//   if (passedTest){
//     var firstName = 'John'
//     var yearOfBirth = 1990

//     console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car ')
//   }
// }
// driverLicence5(true) // worked because of the function scope

// //ES6
// function driverLicence6(passedTest){
//   if(passedTest){
//     let firstName = 'John'
//     const yearOfBirth = 1990
//   }
//   console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`) // does not worked because of the block function
// }


// let i = 30

// for(let i = 0; i < 5; i++){
//   console.log(i) // '0,1,2,3,4
// }

// console.log(i) // 30
// // both i variables are seperate because of the block scope 
// // pretty much var is a global variable 



///////////////////////////////////////////BLOCKS AND IIFES/////////////////////////////////////////////////////////////

//ES6
{
  const a = 1
  let b = 2 
  var c = 3 
}
console.log(a + b) // error since values are not accessible from outside the block
console.log(c) // 3 variables with the var keyword, it does not matter if there are inside or outaide the block they will console log because they are function scope and not blocked scope

//ES5 - a making a variable that is only accesible from the block 
(function(){
  var c = 3
})()