///////////////////////////////////////////////////////////////LET AND CONST////////////////////////////////////////////////////////////////

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



///////////////////////////////////////////////////////////BLOCKS AND IIFES/////////////////////////////////////////////////////////////////

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



//////////////////////////////////////////////////////////////////////STRINGS///////////////////////////////////////////////////////////////

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



//////////////////////////////////////////////////////////////////////ARROW FUNCTIONS///////////////////////////////////////////////////////

// const years = [1990, 1965, 1982, 1937]

// //ES5
// var ages5 = years.map(function(el) { 
//   console.log(el) //1990, 1965, 1982, 1937
//   return 2016 - el 
 
//  })
//  console.log(ages5) //[ 26, 51, 34, 79 ]

//  // ES6 - with map i have access to the current index, element and array itself
//  //1st Method - one arguement and one line of code 
//  let  ages6 = years.map (el => 2016 - el)
//  console.log(ages6) //[ 26, 51, 34, 79 ]

//  //2nd Method - two arguements, use parenthesis, and one line  
//  //since this is all in one line the return is implicit 
//  ages6  = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`)
//  console.log(ages6) //  'Age element 1: 26', 'Age element 2: 51', 'Age element 3: 34', 'Age element 4: 79']
 

//  // 3rd Method - two arguements, use parenthesis, and use curly brackets to for mutiple lines of code, and use return 
//  ages6 = years.map((el, index)=>{
//    const now = new Date().getFullYear()
//    const age = now - el 
//    return `Age element ${index + 1}: ${age}`
//  })

//  console.log(ages6) // ['Age element 1: 30','Age element 2: 55','Age element 3: 38','Age element 4: 83']




///////////////////////////////////////////////////////////ARROW FUNCTIONS[THIS KEYWORD]//////////////////////////////////////////////////

// //ES5
// var box5 = {
//   color: 'green',
//   position: 1,
//   clickMe: function (){
//     var self = this // I have to use self, because if I just used this.color inside the callback function it would return a variable in the window,  not in my box5 object
//     document.querySelector('.green').addEventListener('click', function () {
//       alert('The color of the box is' + self.color + ' and the position is ' + self.position)
//       })
//   }
// }
// box5.clickMe() 


// //ES6 - arrrow functions share the this lexical of its surroundings, which is one level above it 
// const box6 = {
//   color: 'green',
//   position: 1,
//   clickMe: function () {
//     document.querySelector('.green').addEventListener('click', () => {
//       alert(`The color of the box is ${this.color} and the position is ${this.position}`)
//     })
//     }
// }

// box6.clickMe()



// // function constructor 
// function Person (name){
//   this.name = name
// }

// //ES5
// Person.prototype.myFriends5 = function (friends) {
//   // var self = this will work if I uncomment this line of code
//   var arr = friends.map(function (el) { 
//     return this.name + ' is friends with ' + el
//    })
//    console.log(arr) // 'undefined is friends with bob', wo ill not work because this is pointing to global object
//   }

//   var friends = ['bob','jane','mark']
//   // new Person('John').myFriends5(friends)


// //ES6 this fuctions does not have a this keyword
// Person.prototype.myFriends6 = function (friends) {
//   let arr = friends.map(el => `${this.name} is friends with ${el}`)
//   console.log(arr)
//   }

//   // instance of Person objecy 
//   new Person('Eder').myFriends6(friends)


  

///////////////////////////////////////////////////////////DESTRUCTURING//////////////////////////////////////////////////////////////////

// //ES5
// var john = ['John', 26]
// var name = john[0]
// var age = john[1]

// //ES6 - destructuring for array use brackets 
// const [name, age] = ['Eder', 26 ]
// console.log(name) // eder
// console.log(age) // 26

// const [hobby, book] = ['traveling','tribes of mentor']
// console.log(hobby) // traveling
// console.log(book) // tribes of mentors 

// //ES6 destructuring for objects use curly brackets, keys have to match 
// const obj = {
//   firstName: 'Eder',
//   lastName: 'Canada'
// }

// const {firstName, lastName} = obj
// console.log(firstName) // Eder
// console.log(lastName) // Canada 

// // This is to rename the key variable name, but it will still have the same value 
// const{firstName: a, lastName: b} = obj
// console.log(a) // Eder
// console.log(b) // Canada


// function calcAgeRetirement(year) {
//    const age = new Date().getFullYear() - year
//    return [age, 65 - age] // age is one variable and 65-age is another variable(retirement)
//   }

// const [age, retirement] = calcAgeRetirement(1990)
// console.log(age, 'age') // 35
// console.log(retirement, 'retirement') // 30


// function vacationYear(year) {
//   const yearsLeft = Math.abs(new Date().getFullYear() - year)
//   return [yearsLeft]
//   }

// const [yearsLeft] = vacationYear(2021)
// console.log(yearsLeft) // 1 



/////////////////////////////////////////////////////////////ARRAYS//////////////////////////////////////////////////////////////////

// // nodeslist
// const boxes = document.querySelectorAll('.box')

// //ES5
// var boxesArr5 = Array.prototype.slice.call(boxes)
// boxesArr5.forEach(function(cur){
//   cur.style.backgroundColor = 'dodgerblue'
// })

// //ES6 - .from(boxes), is turing my boxes node list into an array, i can use the map method to map through on array  or maybe a for loop?
// const boxesArr6 = Array.from(boxes)
// boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerBlue')

// // //ES5
// // for(var i = 0; i < boxesArr5.length; i++){
// //   if(boxesArr5[i].className === 'box blue'){
// //     continue // will skip this iteration and go to the next iteration, while a break will just stop the iteration 
// //   }
// //   boxesArr5[i].textContent = 'I change to blue'
// // }

// //ES6 - how to do a es5 for loop using the for of loop
// for (const currentElement of boxesArr6) {
//   if(currentElement.className.includes('blue')){
//     continue
//   } else {
//     currentElement.textContent = 'This is working'
//   }
// }


//ES5
var ages = [12,7,8,21,14,11]
var full = ages.map(function (currentElement) {
  return currentElement >= 18
  })
console.log(full) // [ false, false, false, true, false, false ]
console.log(full.indexOf(true)) // 3
console.log(ages[full.indexOf(true)]) // 21 

//ES6 - findIndex, will return the currentElement in which the condition is true 
console.log(ages.findIndex(currentElement => currentElement >= 18)) //3 
console.log(ages.find(currentElement => currentElement >= 18)) //21