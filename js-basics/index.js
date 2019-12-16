/////////////////////////// DATA TYPES ///////////////////////

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



////////////////Variable Mutation and Type Coercion///////////

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



///////////////////////Basic Operators////////////////////////

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




///////////////////Operator Precedence////////////////////////

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

//////////////////////Boolean Logic //////////////////////////

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



//////////////Ternary Operator and Switch Statement //////////

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




/////////////////////Truthy and Falsy Values//////////////////

 // fasly value is a value that is considered false when evaluated in an if/else statement(undefined, null, NaN, 0, '') 

 //truthy values are values that return true when evaluated in an if/else statement(all value NOT falsy)

 // HOW TO CHECK IF VARIABLE IS DEFINED 
 const height 
 height = 23
 // if height = 0 I would still get undefined, but with the or statment I will not
 if(height || height === 0){
   console.log('Variable is defined')
 } else {
   console.log('Variable has NOT been defined')
 }


 // Equality Operators 
if(height == '23'){
  console.log('The == operator does type coercion')
}
