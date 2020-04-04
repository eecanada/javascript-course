///////////////////////////////////////////////// DATA TYPES /////////////////////////////////////////////////

// // String 
// const firstName = 'John'
// const lastName = 'Smith'

// // Number
// const age = 28 

// // Boolean
// const fullAge = true 

// // Undefined 
// const job; 
// console.log(job)



/////////////////////////////////////////////Variable Mutation and Type Coercion/////////////////////////////////////

// // Examples of Type Coercion, JS converts types from one to another as needed 
// const firstName = 'John'
// const age = 28
// console.log(firstName + " "+ age) // --> John 28


// const job, isMarried 
// job = 'teacher'
// isMarried = false 
// console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried )


// // Examples of Variable Mutations 
// age = 'twenty-eight'
// job = 'driver'
// alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

// // here I am able to use prompt to display a prompt to answer and save the answer a variable lastName 
// const lastName = prompt('what is his last name?')
// console.log(firstName + ' ' + lastName)



/////////////////////////////////////////////////Basic Operators//////////////////////////////////////////////////

// const now, yearJohn, yearMark
// now = 2019
// ageJohn = 28
// ageMark = 33

// // Examples of Math Operator 
// yearJohn  = now - ageJohn
// yearMark = now - ageMark
// console.log(yearJohn)
// console.log(now + 2)
// console.log(now * 2)
// console.log(now  / 10)

// // Examples of Logical Operators 
// const johnOlder = ageJohn > ageMark 
// console.log(johnOlder) 

// // Example of typeof Operator 
// console.log(typeof(johnOlder)) //--> boolean
// console.log(typeof(ageJohn)) //--> number
// console.log(typeof('JS is fun'))//--> String
// const x
// console.log(typeof(x))//--> undefined



//////////////////////////////////////////////////////Operator Precedence///////////////////////////////////////////

// const now = 2019
// const yearJohn = 1989
// const fullAge = 18

// // Multiple Operators
// const isFullAge = now - yearJohn >= fullAge
// console.log(isFullAge)//--> true

// // Grouping
// const ageJohn = now - yearJohn
// const ageMark = 35
// const average = (ageJohn + ageMark) / 2
// console.log(average)//--> 32.5

// // Multiple Assignments 
// const x,y 
// x = y = (3 + 5) * 4 - 6 // because of the associativity of the = operator it reads right to left x = y
// console.log(x) //--> 26

// // More Operators 
// x = x * 2
// x *= 2

// x = x + 10
// x += 10

// x = x / 2 
// x /= 2

// x = x + 1 
// x += 1
// x ++

// x = x -1
// x -= 1
// x --


////////////////////////////////////////////////If and Else //////////////////////////////////////////////////////

// const firstName = 'john'
// const civilStatus = 'single'

// // if the if statement is false then the else block will execute
// if (civilStatus === 'married'){
//   console.log(`${firstName} is married!`)
// } else {
//   console.log(`${firstName} will marry soon.`)
// }

 
// const isMarried = false 
// if (isMarried){
//   console.log(`${firstName} is married!`)
// } else {
//   console.log(`${firstName} will marry soon.`)
// }


// const markHeight = 1.77
// const johnHeight = 1.89
// const markMass = 72.57
// const johnMass = 65.77

// const markBmi = markMass / (markHeight * markHeight)
// const johnBmi = johnMass / (johnHeight * johnHeight)

// if(markBmi > johnBmi){
//   console.log(`Mark has a higher BMI than John`)
// } else {
//   console.log(`John has a higher BMI than Mark`)
// }

////////////////////////////////////////////////Boolean Logic ////////////////////////////////////////////////////

// const firstName = 'john'
// const age = 20

// if(age > 20){
//   console.log(`${firstName} is a boy`)
// } else if (age >= 13 && age < 20){
//   console.log(`${firstName} is a teenager`)
// } else if(age >= 20 && age < 30){
//   console.log(`${firstName} is a young man`)
// } else {
//   console.log(`${firstName} is a man`)
// }



////////////////////////////////////////////////Ternary Operator and Switch Statement ////////////////////////////

// const firstName = 'john'
// const age = 22

// // it reads: if age is greater than or equal to 18 then console.log this first statement, if it is not console.log the second statement
// age >= 18 ? console.log(firstName + 'drinks beer') : console.log(firstName + 'drinks juice')

// // this reads: drinks will equal beer or juice
// const drinks = age >= 18 ? 'beer' : 'juice'
// console.log(drinks)

// if(age>=18){
//   const drinks = 'beer'
// } else {
//   const drinks = 'juice'
// }


// // Switch Statement 
// // this reads: if job equal to teacher then run the case for teacher and console.log the statement below, if none of the cases match is will default
// const job = 'teacher' 
// switch (job){
//   case 'teacher':
//   case 'instructor':
//     console.log(`${firstName} teach kids how to code`)
//     break;
//   case 'driver':
//     console.log(`${firstName} drives an uber in Lisbon`)
//     break;
//   case 'designer':
//     console.log(`${firstName} designs beautiful websites `)
//     break;
//   default: 
//     console.log(`${firstName} does something else `)
// } 

// // this reads: the age that matches one of these case will run
// switch(true){
//   case age < 13:
//     console.log(`${firstName} is a boy`)
//     break
//   case age >= 13 && age < 20:
//     console.log(`${firstName} is a teenager`)
//     break  
//   case age >= 20 && age < 30:
//     console.log(`${firstName} is a young man`)
//     break
//   default:
//     console.log(`${firstName} is a man`)
// }




/////////////////////////////////////////////////Truthy and Falsy Values////////////////////////////////////////////

 // fasly value is a value that is considered false when evaluated in an if/else statement(undefined, null, NaN, 0, '') 

 //truthy values are values that return true when evaluated in an if/else statement(all value NOT falsy)

 // HOW TO CHECK IF VARIABLE IS DEFINED 
//  const height 
//  height = 23
//  // if height = 0 I would still get undefined, but with the or statment it will not
//  if(height || height === 0){
//    console.log('Variable is defined')
//  } else {
//    console.log('Variable has NOT been defined')
//  }


//  // Equality Operators 
// if(height == '23'){
//   console.log('The == operator does type coercion')
// }



///////////////////////////////////////////////////Functions////////////////////////////////////////////////////////////

// // this reads: I pass different years in as arguements, I returned something here so I can return something later
// function calculateAge(birthYear){
//   return 2019 - birthYear
// }
 
// const ageJohn = calculateAge(1994)
// const ageMike = calculateAge(1944)
// const ageJane = calculateAge(1974)
// console.log(ageJohn, ageMike, ageJane)

// // this reads: functions can actually call other functions. I pass year which is 1990 and then it is passed into  calculateAge(year) and calculates the age.
// function yearsUntilRetirement(year, firstName){
//   const age = calculateAge(year)
//   const retirement = 65 - age
//   if (retirement > 0){
//     console.log(`${firstName}  retires in ${retirement} years`)
//   } else {
//     console.log(`${firstName} is already retired`)
//   }
// }

// yearsUntilRetirement(1990, 'John')
// yearsUntilRetirement(1959, 'Mike')
// yearsUntilRetirement(1973, 'Mary')



/////////////////////////////////////////////////////Function Expression and Declerations///////////////////////////////

// // Function Decleration - they produce actions, do not produce immediate value 
// // function whatDoYouDo(job , firstName){

// // }

// // Function Expression - they always produce a single value
// const whatDoYouDo = function(job, firstName){
//   switch(job){
//     case 'teacher':
//       return firstName + ' teaches kids to code'
//     case 'driver':
//       return firstName + ' drievs a cab in Lisbon'
//     case 'designer':
//       return firstName + ' designs beautiful websites'
//       default:
//         return firstName + ' does something else'
//   }
// } 

// console.log(whatDoYouDo('teacher', 'john'))  



/////////////////////////////////////////////////////Arrays//////////////////////////////////////////////////////

// const names = ['john', 'mark', 'eder', 'jane']
// // Another way to create and Array
// const years = new Array(1990, 1962, 1948)
// // Target single element in the array
// console.log(names[0]) //--> john
// // Target all elements in the array
// console.log(names)
// // See total number of elements in an array
// console.log(names.length) //--> 4

// // Mutate element in an array
// names[0] = 'ben'
// console.log(names)
// // adding mary element to the end of the array
// names[names.length] = 'mary'

// // Different Datatypes in an array
// const john = ['john', 'smith', 1990, 'teacher', false]
// // pushes element to end of array
// john.push('blue') ['john', 'smith', 1990, 'teacher', false, 'blue]

// // instead of pushing to the end of array, push to the first of the array
// john.unshift('Mr') //['Mr','john', 'smith', 1990, 'teacher', false, 'blue]

// // deletes the last element in the array
// john.pop() //['Mr','john', 'smith', 1990, 'teacher', false]

// // deletes the first element in the array
// john.shift() //['john', 'smith', 1990, 'teacher', false]

// // Tells me the position element is in the array
// console.log(john.indexOf(1990)) //--> 2 

// // if the element is not present in the array it will return a -1
// if(john.indexOf('designer')){
//   console.log('does not exist') //-1
// }

// const isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John has cool designs'
// console.log(isDesigner) //'John is NOT a designer' 


///////////////////////////////////////////////Objects and Properties/////////////////////////////////////////////

// // Object literal: an object with key and value pairs 
// const john = {
//   firstName: 'john',
//   lastName: 'smith',
//   birthYear: 1990,
//   family : ['jane','mark','bob','emily'],
//   job: 'teacher',
//   isMarried: false 
// }

// // using dot notation 
// console.log(john.firstName)//--> john
// // using string and bracket to get a value from a key
// console.log(john['lastName'])//--> smith
// // assigning a variable to a value in the object
// var x = 'birthYear'
// console.log(john[x])//--> 1990
// // using dot notation to mutate the object
// john.job = 'designer'
// console.log(john.job)//-> designer

// // Object Syntax: Another way of making an object
// const jane = new Object();
// jane.firstName = 'Jane';
// jane.birthYear = 1991
// jane['lastName'] = 'Brown'
// console.log(jane)

///////////////////////////////////////////////Objects and Methods/////////////////////////////////////////////

// // only object have methods 
// // this.birthYear = john.birthYear
// const john = {
//   firstName : 'john',
//   lastName : 'smith',
//   birthYear : 1990,
//   family : ['jane','mark','bob','emily'],
//   job : 'teacher',
//   isMarried : false, 
//   calcAge: function(){
//     this.age = 2019 - this.birthYear
//   }
// }

// // I am invoking the calAge function and passing in birthYear using this, then I am setting a new property of age with this.age and rhe value of that is 29
// john.calcAge()
// console.log(john)



/////////////////////////////////////////////////////Loops and Iteration/////////////////////////////////////////////

// // the start i = 0, condition, and if condition is true, then log to console, and finally start loop again with i+1
// for(let i = 0; i <= 20; i +=2){
//   console.log(i)
// }

// // for looping through an array
// const arr = ['john', 'mark','eder','jim']
// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]) 
// }

// // while looping through an array, only takes the condition 
// let i = 0
// while(i < arr.length){
//   console.log(arr[i])
//   i++
// }

//continue and break statments 
const arr = ['john', 'mark','eder',1900,'jim']
for(let i = 0; i < arr.length; i++){
  // looping through this array, but everytime I reach something that is not a string, do not console.log, but keep looping to the next thing

  // if string does not equal string then do continue, like 1990 it will continue and block will not execute
  if(typeof(arr[i]) !== 'string') continue 
  console.log(arr[i]) // ['john', 'mark','eder','jim']
}

// once I hit something that is not a string then it will break out the loop, and it stops the whole loops 
// for(let i = 0; i < arr.length; i++){
//   if(typeof(arr[i]) !== 'string') break
//   console.log(arr[i]) 
// }



// looping backwards
 for(let i = arr.length; i >= 0; i--){ 
   console.log(arr[i])
 }  
