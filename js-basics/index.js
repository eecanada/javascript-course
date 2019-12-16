/////////////////////////// DATA TYPES ///////////////////////

// // String 
// const firstName = 'John'
// const lastName = 'Smith'

// // Number
// let age = 28 

// // Boolean
// const fullAge = true 

// // Undefined 
// let job; 
// console.log(job)



////////////////Variable Mutation and Type Coercion///////////

// // Examples of Type Coercion, JS converts types from one to another as needed 
// let firstName = 'John'
// let age = 28
// console.log(firstName + " "+ age) // --> John 28


// var job, isMarried 
// job = 'teacher'
// isMarried = false 
// console.log(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried )


// // Examples of Variable Mutations 
// age = 'twenty-eight'
// job = 'driver'
// alert(firstName + ' is a ' + age + ' year old ' + job +'. Is he married? ' + isMarried)

// // here I am able to use prompt to display a prompt to answer and save the answer a variable lastName 
// var lastName = prompt('what is his last name?')
// console.log(firstName + ' ' + lastName)



///////////////////////Basic Operators////////////////////////

// var now, yearJohn, yearMark
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
// var johnOlder = ageJohn > ageMark 
// console.log(johnOlder)

// // Example of typeof Operator 
// console.log(typeof(johnOlder)) //--> boolean
// console.log(typeof(ageJohn)) //--> number
// console.log(typeof('JS is fun'))//--> String
// var x
// console.log(typeof(x))//--> undefined




///////////////////Operator Precedence////////////////////////

// var now = 2019
// var yearJohn = 1989
// var fullAge = 18

// // Multiple Operators
// var isFullAge = now - yearJohn >= fullAge
// console.log(isFullAge)//--> true

// // Grouping
// var ageJohn = now - yearJohn
// var ageMark = 35
// var average = (ageJohn + ageMark) / 2
// console.log(average)//--> 32.5

// // Multiple Assignments 
// var x,y 
// x = y = (3 + 5) * 4 - 6
// console.log(x) //--> 26

// // More Operators 
// x = x * 2
// x *= 2

// x = x + 10
// x += 10

// x = x / 2 
// x /= 2

// x = x + 1 
// x ++

// x = x -1
// x --


//////////////////////If and Else ////////////////////////////

var firstName = 'john'
var civilStatus = 'single'

// if the if statement is false then the else block will execute
if (civilStatus === 'married'){
  console.log(`${firstName} is married!`)
} else {
  console.log(`${firstName} will marry soon.`)
}

 
var isMarried = false 
if (isMarried){
  console.log(`${firstName} is married!`)
} else {
  console.log(`${firstName} will marry soon.`)
}


const markHeight = 1.77
const johnHeight = 1.89
const markMass = 72.57
const johnMass = 65.77

const markBmi = markMass / (markHeight * markHeight)
const johnBmi = johnMass / (johnHeight * johnHeight)

if(markBmi > johnBmi){
  console.log(`Mark has a higher BMI than John`)
} else {
  console.log(`John has a higher BMI than Mark`)
}