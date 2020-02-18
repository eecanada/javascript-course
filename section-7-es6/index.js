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
function driverLicence5(passedTest){
  if (passedTest){
    var firstName = 'John'
    var yearOfBirth = 1990

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car ')
  }
}
driverLicence5(true) // worked because of the function scope

//ES6
function driverLicence6(passedTest){
  if(passedTest){
    let firstName = 'John'
    const yearOfBirth = 1990
  }
  console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`) // does not worked because of the block function
}


let i = 30

for(let i = 0; i < 5; i++){
  console.log(i) // '0,1,2,3,4
}

console.log(i) // 30
// both i variables are seperate because of the block scope 
// pretty much var is a global variable 