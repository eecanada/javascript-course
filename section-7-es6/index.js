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

// //ES6
// {
//   const a = 1
//   let b = 2 
//   var c = 3 
// }
// console.log(a + b) // error since values are not accessible from outside the block
// console.log(c) // 3 variables with the var keyword, it does not matter if there are inside or outaide the block they will console log because they are function scope and not blocked scope

// //ES5 - a making a variable that is only accesible from the block 
// (function(){
//   var c = 3
// })()



////////////////////////////////////////////////////STRINGS////////////////////////////////////////////////////////////

// let firstName = 'john'
// let lastName = 'Smith'
// const yearOfBirth = 1990

// function calcAge (year){
//   return 2016 - year
// }

// //ES5 
// console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth))

// //ES6 - template literal 
// console.log( `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`)


// const n = `${firstName} ${lastName}`
// console.log(n.startsWith('j')) //true, since the first letter of the name is j
// console.log(n.endsWith('h')) // true, since the last letter of the name is h
// console.log(n.includes(' ')) // true, since the name does include a space, so this test to catch any letter
// console.log(firstName.repeat(5)) // johnjohnjohnjohnjohn



////////////////////////////////////////////////////ARROW FUNCTIONS/////////////////////////////////////////////////////

const years = [1990, 1965, 1982, 1937]

//ES5
var ages5 = years.map(function(el) { 
  console.log(el) //1990, 1965, 1982, 1937
  return 2016 - el 
 
 })
 console.log(ages5) //[ 26, 51, 34, 79 ]

 //ES6 - with map i have access to the current index, element and array itself
 // 1st Method - one arguement and one line of code 
 let  ages6 = years.map (el => 2016 - el)
 console.log(ages6) //[ 26, 51, 34, 79 ]

 //2nd Method - two arguements, use parenthesis, and one line  
 //since this is all in one line the return is implicit 
 ages6  = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`)
 console.log(ages6) //  'Age element 1: 26', 'Age element 2: 51', 'Age element 3: 34', 'Age element 4: 79']
 

 // 3rd Method - two arguements, use parenthesis, and use curly brackets to for mutiple lines of code, and use return 
 ages6 = years.map((el, index)=>{
   const now = new Date().getFullYear()
   const age = now - el 
   return `Age element ${index + 1}: ${age}`
 })

 console.log(ages6) // ['Age element 1: 30','Age element 2: 55','Age element 3: 38','Age element 4: 83']
