///////////////////////////////////////////////////////////////LET AND CONST////////////////////////////////////////////////////////////////

//ES5 - function scope
var name5 = 'Jane Smith'
var age5 = 23
name5 = 'Jane Miller'
console.log(name5) // 'Jane Miller'

//ES6 - block scope
const name6 = 'Jane Smith'
let age6 = 23
name6 = 'Jane Miller'
console.log(name6) // error because const cannot be mutated 


//ES5 
function driverLicence5(passedTest){
  if (passedTest){
    var firstName = 'John'
    var yearOfBirth = 1990

    console.log(firstName + ' born in ' + yearOfBirth + ' is now officially allowed to drive a car ')
  }
}
driverLicence5(true) // worked because of the function scope, var is functioned scope so the variables do not need to be within the same block, but does need to be in the same function

//ES6
function driverLicence6(passedTest){
  if(passedTest){
    let firstName = 'John'
    const yearOfBirth = 1990
  }
  console.log(`${firstName} born in ${yearOfBirth} is now officially allowed to drive a car`) // does not worked because of the block function, the variables are outside of the block 
}

let i = 30 

for(let i = 0; i < 5; i++){
  console.log(i) // '0,1,2,3,4
}

console.log(i) // 30
// both i variables are seperate because of the block scope 
// pretty much var is a global variable 



///////////////////////////////////////////////////////////BLOCKS AND IIFES/////////////////////////////////////////////////////////////////

//ES6
{
  const a = 1
  let b = 2 
  var c = 3 
}
console.log(a + b) // error since values are not accessible from outside the block
console.log(c) // 3 variables with the var keyword, it does not matter if there are inside or outside the block they will console log because they are function scope and not blocked scope

//ES5 - a making a variable that is only accesible from the block 
(function(){
  var c = 3
})()



//////////////////////////////////////////////////////////////////////STRINGS///////////////////////////////////////////////////////////////

let firstName = 'john'
let lastName = 'Smith'
const yearOfBirth = 1990

function calcAge (year){
  return 2016 - year
}

//ES5 
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today he is ' + calcAge(yearOfBirth))

//ES6 - template literal 
console.log( `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)}`)

// a variety of string methodsto check if the string starts, end, or includes a certain character
const n = `${firstName} ${lastName}`
console.log(n.startsWith('j')) //true, since the first letter of the name is j
console.log(n.endsWith('h')) // true, since the last letter of the name is h
console.log(n.includes(' ')) // true, since the name does include a space, so this test to catch any letter
console.log(firstName.repeat(5)) // johnjohnjohnjohnjohn



//////////////////////////////////////////////////////////////////////ARROW FUNCTIONS///////////////////////////////////////////////////////

const years = [1990, 1965, 1982, 1937]

//ES5
var ages5 = years.map(function(el) { 
  console.log(el) //1990, 1965, 1982, 1937
  return 2016 - el 
 
 })
 console.log(ages5) //[ 26, 51, 34, 79 ]

 // ES6 - with map i have access to the current index, element and array itself
 //1st Method - one arguement and one line of code 
 let  ages6 = years.map (el => 2016 - el)
 console.log(ages6) //[ 26, 51, 34, 79 ]

// same as above  
 let age6 = years.map ((el)=>{
   console.log(el)
 })

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




///////////////////////////////////////////////////////////ARROW FUNCTIONS[THIS KEYWORD]//////////////////////////////////////////////////

//ES5
var box5 = {
  color: 'green',
  position: 1,
  clickMe: function(){
    var self = this
    document.querySelector('.green').addEventListener('click', function(){
      var str = 'This is box number' + self.position + ' and it is' + self.color
      alert(str)
    })
  }
}
box5.clickMe();
 


//ES6 - arrrow functions share the this lexical of its surroundings, which is one level above it 
const box6 = {
  color: 'green',
  position: 1,
  clickMe: function () {
    // for arrow functions if I have more than one parameters, or no parameters than I have to use parenthesis.
    document.querySelector('.green').addEventListener('click', () => {
      alert(`The color of the box is ${this.color} and the position is ${this.position}`)
    })
    }
}

box6.clickMe()



// function constructor 
function Person (name){
  this.name = name
}

//ES5
Person.prototype.myFriends5 = function (friends) {
  // var self = this will work if I uncomment this line of code
  var arr = friends.map(function (el) { 
    return this.name + ' is friends with ' + el
   })
   console.log(arr) // 'undefined is friends with bob', wo ill not work because this is pointing to global object
  }

  var friends = ['bob','jane','mark']
  // new Person('John').myFriends5(friends)


//ES6 this fuctions does not have a this keyword
Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map(el => `${this.name} is friends with ${el}`)
  console.log(arr)
  }

  // instance of Person objecy 
  new Person('Eder').myFriends6(friends)


  

///////////////////////////////////////////////////////////DESTRUCTURING//////////////////////////////////////////////////////////////////

//ES5
var john = ['John', 26]
var name = john[0]
var age = john[1]

//ES6 - destructuring for array use brackets ], it let's me extract data from object or arrays
const [name, age] = ['Eder', 26 ]
console.log(name) // eder
console.log(age) // 26

const [hobby, book] = ['traveling','tribes of mentor']
console.log(hobby) // traveling
console.log(book) // tribes of mentors 

//ES6 destructuring for objects use curly brackets, keys have to match 
const obj = {
  firstName: 'Eder',
  lastName: 'Canada'
}

const {firstName, lastName} = obj
console.log(firstName) // Eder
console.log(lastName) // Canada 

// This is to rename the key variable name, but it will still have the same value 
const{firstName: a, lastName: b} = obj
console.log(a) // Eder
console.log(b) // Canada


function calcAgeRetirement(year) {
   const age = new Date().getFullYear() - year
   return [age, 65 - age] // age is one variable and 65-age is another variable(retirement)
  }

const [age, retirement] = calcAgeRetirement(1990)
console.log(age, 'age') // 35
console.log(retirement, 'retirement') // 30


function vacationYear(year) {
  const yearsLeft = Math.abs(new Date().getFullYear() - year)
  return [yearsLeft]
  }

const [yearsLeft] = vacationYear(2021)
console.log(yearsLeft) // 1 



/////////////////////////////////////////////////////////////ARRAYS//////////////////////////////////////////////////////////////////////

// nodeslist
const boxes = document.querySelectorAll('.box')

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes) //turns node list into an array
boxesArr5.forEach(function(cur){
  cur.style.backgroundColor = 'dodgerblue'
})

//ES6 - .from(boxes), is turning my boxes node list into an array, i can use the map method to map through on array  or maybe a for loop?
const boxesArr6 = Array.from(boxes) - // this returns the array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerBlue')

//ES5
for(var i = 0; i < boxesArr5.length; i++){
  if(boxesArr5[i].className === 'box blue'){
    continue // will skip this iteration and go to the next iteration, while a break will just stop the iteration 
  }
  boxesArr5[i].textContent = 'I change to blue'
}

//ES6 - how to do a es5 for loop using the for of loop
for (const currentElement of boxesArr6) {
  if(currentElement.className.includes('blue')){
    continue
  } else {
    currentElement.textContent = 'This is working'
  }
}


//ES5
var ages = [12,7,8,21,14,11]
var full = ages.map(function (currentElement) {
  return currentElement >= 18
  })
console.log(full) // [ false, false, false, true, false, false ]
console.log(full.indexOf(true)) // 3
console.log(ages[full.indexOf(true)]) // 21 

//ES6 - findIndex, will return the currentElement in which the condition is true 
// .findIndex has access to current element. current index, and the entire array
console.log(ages.findIndex(currentElement => currentElement >= 18)) //3 
console.log(ages.find(currentElement => currentElement >= 18)) //21



/////////////////////////////////////////////////////////////SPREAD OPERATOR////////////////////////////////////////////////////////////////


// SPREAD OPERATOR = going from array to single values, it is used when I am invoking the function and want to pass an array as an arguement EXAMPLE calcAge(...)


const addFourAges = ((a,b,c,d) => a + b + c + d)
console.log(addFourAges(18,30,12,21)) // 81 

//ES5 - apply takes in the array, call the addFourAges function using the elements of the array
var ages = [18,30,12,21]
var sum2 = addFourAges.apply(null, ages)
console.log(sum2) //81

//ES6 - spread operator, passing the array into the function 
console.log(addFourAges(...ages)) // 81

// using spread operator on array in order to combine two seperate arrays
const familySmith = ['John', 'Jane', 'Mark']
const familyCanada = ['Eder', 'Wendy','Bryan']
const families = [...familyCanada,...familySmith]
console.log(families) // [ 'Eder', 'Wendy', 'Bryan', 'John', 'Jane', 'Mark' ]


// using spread operator on node list, since document returns a node list 
const h = document.querySelector('h1')
const boxes = document.querySelectorAll('.box')
const all = [h,...boxes] // or does it convert here? 
console.log(all) 

// converting the node list to an array and looping through that array and changing its style
all.forEach(currentElement => currentElement.style.color = 'purple')


/////////////////////////////////////////////////////////////REST PARAMETERS////////////////////////////////////////////////////////////////


// REST PARAMETERS = going from single values to an array, this is used to pass multiple single values as parameters in a function decleration EXAMPLE function calcAge(...)


//RANDOM EXAMPLE
const hobbies = ['reading','working out', 'traveling','coding']
hobbies.forEach(currentElement => console.log(currentElement)) // reading, working, traveling, coding (being looped, NOT in array)


function isFullAge() {  
  console.log(arguments)
}

isFullAge(13,12,14) // this is an object that I want to turn into an array


// ES5
function isFullAge5(){
  var argsArr = Array.prototype.slice.call(arguments)  // going from an object to an array 
  argsArr.forEach(function (currentElment) { // looping through the array
    console.log(2020 - currentElment >= 18)
    })

  };

isFullAge5(1990,1995,1996) // true,true,true 


//ES6 is it converting the arguements which is an object to an array, then looping each index and running the function
const isFullAge6 = ((...years) => {
  years.forEach(currentElement => console.log(2020 - currentElement >= 18))
})

isFullAge6(1990,1995,1996) // true, true, true 


//ES5
function isFullAge5(limit){
  console.log(arguments) // [21,1990,1999,1965]
  var argsArr = Array.prototype.slice.call(arguments,1) // will turn the arguements into an array and split the array starting from position one
  console.log(argsArr) // [1990,1999,1965]
  argsArr.forEach(currentElement => console.log(2020 - currentElement >= limit));
}

isFullAge5(21,1990,1999,1965) // true, true, true 

//ES6 
const isFullAge6 = ((limit, ...years) => {
  console.log(limit)
  years.forEach(currentElement => console.log(2020 - currentElement >= 30))
})

isFullAge6(21, 1990,1999,1965) // true false true, the function is reading the first arguement and assigning it as the limit, and the rest are the years



/////////////////////////////////////////////////////////////DEFAULT PARAMETERS/////////////////////////////////////////////////////////////

//ES5 - function constructor 
function SmithPerson(firstName,yearOfBirth,lastName,nationality){
  lastName === undefined ? lastName = 'Smith' : lastName
  nationality === undefined ? nationality = 'Mexican' : lastName

  this.firstName = firstName
  this.yearOfBirth =yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

const john = new SmithPerson('john', 1990)
console.log(john) // object of SmithPerson {}

const emily = new SmithPerson('emily',1983,'Diaz','Spanish')
console.log(emily)


//ES6 - adding default paramerters to a function constructor using ES6, if I do add arguements to my instance than it will take them otherwise it will take the default parameters
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'Mexican'){
  this.firstName = firstName
  this.yearOfBirth = yearOfBirth
  this.lastName = lastName
  this.nationality = nationality
}

const mike = new SmithPerson('Mike', 1993)
console.log(mike)

const mike = new SmithPerson('Mike', 1993, 'Tam', 'Asian')
console.log(mike)


////////////////////////////////////////////////////////////////MAP///////////////////////////////////////////////////////////////////////

//creating an empty map
const question = new Map ()
// setting the key and values of the map
question.set('question', 'what is the official name of JavaScript?')
question.set(1, 'EMCAScript')
question.set(2, 'ES5')
question.set(3, 'ES6')
question.set(4, 'ES2020')
question.set('correct', 1)
question.set(true, 'Correct Answer')
question.set(false, 'Wrong, please try again')

//this .get retrieves value data from the map
console.log(question.get('question')) // what is the official name of JavaScript?

// this .size method on maps lets me know the number of keys in the map 
// console.log(question.size) // 8

question.delete(4) // key and value number 4 are deleted from the map object
question.clear() // deletes all the key and value pairs from the question object, and leaves the map empty

//Maps are itterable, which is something I cannot do with objects, but their key or value are iterable 
question.forEach((value, key) => {
  console.log(`This is the ${key}, and is set to ${value}`)
})

// loooping though each key and value using the for of loop and destructuring, .entries it returns all entries of my questions map
for(let [key,value] of question.entries()){ 
  if(typeof(key) === 'number'){
    console.log(`Answer ${key}: ${value}`)
  }
}

// converting the response from  a string to a number
const ans = parseInt(prompt('Write the correct answer'))
// compare if the response is equal to correct, then console.log true 
console.log(question.get(ans === question.get('correct'))) // it is going to either be true or false 



////////////////////////////////////////////////////////////////CLASSES////////////////////////////////////////////////////////////////////


//ES5 - function constrcutor, would work with function decleration and expression would work the same
var Person5 = function (name, yearOfBirth, job) {
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
  }

// adding function to my function constructor using prototype
Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
}
var john5 = new Person5('john',1990,'teacher')
john5.calculateAge()


//ES6 - class decleration, the new ES6 way of writing a function constructor object
class Person6 {
  // the constuctor is where I write the properties that I want my object to have
  constructor(name, yearOfBirth,job){
    this.name = name 
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calculateAge(){
    let age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
  static geeting (){
    console.log('hi!') // STATIC used to add method only to original class. somewhat useless, cannot be called on instances of the class
  }
}
const john6 = new Person6 ('john',1990,'teacher')
john6.calculateAge()


//////////////////////////////////////////////////////////CLASSES WITH SUBCLASSES///////////////////////////////////////////////////////////

//ES5 - connecting to serpate function constuctors, this is the super class
var Person5 = function (name, yearofBirth, job) {
  this.name = name
  this.yearofBirth = yearofBirth
  this.job = job
  }

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearofBirth
  console.log(age)
  }
// call is used to call the super class, and Athelete5 is the subclass
  var Athlete5 = function(name, yearofBirth, job, olympicGames, medals){
    Person5.call(this, name, yearofBirth,job)
    this.olympicGames = olympicGames
    this.medals = medals
  }

  
//now the two function constuctors are connected, took alot of work and code
Athlete5.prototype = Object.create(Person5.prototype)

// after I connect the function constructors, then I can create a method only for the subclass 
Athlete5.prototype.wonMedal = function () {
  this.medals++
  console.log(this.medals)
  }

// Making a brand new object using Athlete5 but that is a subclass of Person5
var johnAthlete5 = new Athlete5 ('john', 1990, 'swimmer', 3, 10)
console.log(johnAthlete5) // object of john 

johnAthlete5.calculateAge() //30
johnAthlete5.wonMedal() // 11





//ES6 - how to combine two classes or function constructors with class  
class Person6 {
  constructor(name, yearofBirth, job){
    this.name = name
    this.yearofBirth = yearofBirth
    this.job = job
  }
  calculateAge(){
    let age = new Date().getFullYear() - this.yearofBirth
    console.log(age)
  }
}

// subclass Althete6 extends the superclass Person6 
class Athlete6 extends Person6 {
  constructor(name, yearofBirth,job,olympicGames,medals){ // constructor hold the properties I want my class to have
    super(name, yearofBirth,job) // calls the super class Person6, pass the original class parameters in here 
    this.olympicGames = olympicGames
    this.medals = medals
  }
  wonMedal() {
    this.medals++
    console.log(this.medals)
  }
}

const johnAthlete6 = new Athlete6 ('john', 1990, 'swimmer',3,10)
johnAthlete6.calculateAge() //30
johnAthlete6.wonMedal() // 11