///////////////////////////////////////////OBEJECTS//////////////////////////////////////////////////////////////////

// Person object --> making other people using the person objects(constructor) is called INSTANCES and then using athletes to use the person object is called INHERITANCE

//////////////////////////////////FUNCTION CONSTRUCTOR////////////////////////////////////////////////////////

// object
const eder = {
  name: 'Eder',
  yearOfBirth: 1994,
  job: 'software developer'
}

// function constructor must start with capital letter
const Person = function (name, yearOfBirth, job){
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
  this.calculateAge = function () {
      console.log(2020 - this.yearOfBirth, 'this is my age')
    }
}
// // I do not need to have the method in my constructor as I can inherit it using prototype
Person.prototype.calculateAge = function () {
  console.log(2020 - this.yearOfBirth, 'this is my age')
  }

// // This is another example of inheritance using prototype. I am now using it to add the same property and value on all of my instances 
Person.prototype.lastName = 'Smith'

// I am making a new object from my Person function constructor and this is call instantiation because tim is an instance of the Person constructor 
const tim = new Person ('Tim', 1990, 'teacher', 'John')
tim.calculateAge()
console.log(tim)
console.log(tim.lastName)


const Car = function (brand, year, color){
  this.brand = brand,
  this.year = year,
  this.color = color 
}

Car.prototype.loveCar = function (brand) {
  console.log(`i love my new ${this.brand}`)
} 

const toyota = new Car ('toyota', 2017, 'silver')
console.log(toyota)
toyota.loveCar()

//////////////////////////////////PROTOTYPE CHAIN IN THE CONSOLE/////////////////////////////////////////////////////

// new methods to check my new instances  if they have a certain property in the object or to see what object are they being an instance of  
console.log(toyota.hasOwnProperty('brand')) // true
console.log(toyota instanceof Car) // true 


////////////////////////////////OBJECT.CREATE///////////////////////////////////////////////////////////////////////////

// The difference between object.create and function constructor, is that object.create builds an object that inherits directly from the one that I passed into the first arguement, while the with the function constructor the newly created object inherits from the constructor prototype property, so that object I made is an instance, but with object.create it inherits.

const personProto = {
  calculateAge: function(){
    console.log(2020 - this.yearOfBirth)
    },
  lastName: 'Smith'
}

const john = Object.create(personProto)
john.name = 'John'
john.yearOfBirth = 1990
john.job = 'Dentist'
console.log(john ) // --> logs the whole object

const jane = Object.create(personProto,{
  name: {value: 'Jane'},
  yearOfBirth: {value: 1973},
  job: {value: 'Teacher'}
})

//////////////////////////////////////////////PRIMITIVES VS OBJECTS/////////////////////////////////////////////////////
// Primitive
var a = 23
var b = a
a = 46
// console.log(a,b) // -> 46,23



// Objects
var obj1 = {
  name: 'eder',
  age: 24
}

var obj2 = obj1
obj1.age = 30

// console.log(obj1,obj2)

// Functions
var age = 27
var obj = {
  name: 'mike',
  city: 'LA',
}

function change (a,b){
  a = 30
  b.city = 'SF'
}

change(age, obj)
console.log(age, obj.city) //---> 27, 


/////////////////////////////////////////////PASSING FUNCTIONS AS ARGUEMENTS////////////////////////////////////////////
// //Functions are also objects, with functions I can do the same things with objects

// array
var years = [1990, 1965, 1937, 2005, 1998]

// FUNCTION 1 - a function that I can pass an array and a function as parameters 
function arrayCalc(arr,fn){
  // this stores results 
  var arrRes = []
  // this loops through array
  for(var i = 0; i < arr.length; i++){
  // what I am pushing is the result of callling my fn( )
    arrRes.push(fn(arr[i]))
  }
  return arrRes
}

// FUNCTION 2 
function calculateAge(el) {
  return 2020 - el
}

// FUNCTION 3
function isFullAge(el) {
  return el >= 18
}

// FUNCTION 4
function maxHeartRate(el) {
  if(el >= 18 && el < 81){
    return Math.round(206.9 - (0.67 * el))
  }
  return -1 
}

function oldOrYoung (el){
  if(el > 40){
    return 'old'
  } else if (el < 40){
    return 'young'
  }
}

// Here I am passing in the years array and also my calculateAge function
var ages = arrayCalc(years,calculateAge)

// Here I am passing in the ages and also my calculateAge function
var fullAges = arrayCalc(ages, isFullAge)

// Here I am passing in the ages and also my maxHeartRate function
var rates = arrayCalc (ages, maxHeartRate)

var youth = arrayCalc(ages, oldOrYoung)

console.log(ages)
console.log(fullAges)
console.log(rates)
console.log(youth)


/////////////////////////////////////////////FUNCTIONS RETURNING FUNCTIONS//////////////////////////////////////////////

function interviewQuestions(job){
  if (job === 'designer'){
    return function(name){
      console.log(`${name}, can you explain what UX design is?`)
    }
  } else if (job === 'teacher'){
    return function(name){
      console.log(`${name}, what subject do you teach?`)
    }
  } else {
    return function (name) { 
      console.log(`${name}, what do you do?`)
     }
  }
}

const designer = interviewQuestions('designer')
console.log(designer('eder'))


const teacherQuestions = interviewQuestions('teacher')
teacherQuestions('eder')
console.log(teacherQuestions)




function carQuestions(car){
  if(car === 'toyota'){
    return function (name) {
      console.log(`${name}, how reliable is your car?`)
      }
  } else if (car === 'bmw'){
    return function (name) {
      console.log(`${name}, how expensive is your car?`)
      }
  } else {
    return function(name){
      console.log(`${name}, what do you love about your car?`)
    }
  }
}

const affordbleCar = carQuestions('toyota')('eder')
console.log(affordableCar)

const expensiveCar = carQuestions('bmw')
expensiveCar('mike')
console.log(expensiveCar)

/////////////////////////////////////////////Immediately Invoked Function Expressions///////////////////////////////////

function game(){
  const score = Math.random() * 10
  console.log(score >= 5)
}
game()



// what is inside of parenthisis cannot be a statement, so it will treat this IIFE like a function expression NOT function decleration. The score varible cannot be accessed from the outside. These functions are useful because they are not meant to be reusable code> I want to create a scope that is hidden from the outside scope, where I can safely put variable. It acts as data privacy.
(function(){
  const score = Math.random() * 10
  console.log(score >= 5)
}) ();

// Here I am using the same IIFE and I can even pass a parameter through it
(function(goodLuck){
  const score = Math.random() * 10
  console.log(score >= 5 - goodLuck)
})(5)


//////////////////////////////////////////////////////////CLOSURES////////////////////////////////////////////////////

// //so closure is when an inner function is able to access the variables of the outer function, even after the outer function has returned. 

function retirement(ageOfRetirement){
  const sentence = 'years left of retirement.'
  return function(birthYear){
    const age = 2020 - birthYear
    console.log(`${ageOfRetirement}` - `${age}` + ` ${sentence}`)
  }
}

const retirementUnitedStates = retirement(65)
retirementUnitedStates(1994)
console.log(retirementUnitedStates) //--> 39 years left of retirement.

const retirementFinland = retirement(60)(1990) 
console.log(retirementFinland) // --> 30 years left of retirement.

function interviewQuestions(job){
  return function(name){
    if (job === 'designer'){
      console.log(`${name}, can you explain what UX design is?`)
    } else if (job === 'teacher'){
      console.log(`${name}, what subject do you teach?`)
    } else {
      console.log(`${name}, what do you do?`)
    }
  }
}
  
const designer = interviewQuestions('designer')('eder')


////////////////////////////////////////////////////////BIND, CALL, AND APPLY//////////////////////////////////////////

const john = {
  name: ' john',
  job: 'teacher',
  age: 27,
  presentation: function (style, timeOfDay){
    if (style === 'formal'){
      console.log(`Good ${timeOfDay}, my name is ${this.name}. I am a ${this.age} year old ${this.job}.`)
    } else if (style === 'friendly'){
      console.log(`Hey what's up! My name is ${this.name}, and I am a ${this.age} year old ${this.job}. Have a nice ${timeOfDay}`)
    }
  }
}
john.presentation('formal','morning') //--> Good morning, my name is  john. I am a 27 year old teacher

// Example of using the call method on the john.presentation function. This allows me to me to use the presentation method from the john object on my emily object. this is called method borowing 
const emily = {
  name: 'emily',
  job: 'designer',
  age: 24
}

john.presentation.call(emily, 'friendly', 'afternoon')//--> Hey what's up! My name is emily, and I am a 24 year old designer.


// Example of bind where I can preset the value of a certain parameter, and leabve the other blank 
const johnFriendly = john.presentation.bind(john, 'friendly')
johnFriendly('morning') //--> Hey what's up! My name is  john, and I am a 27 year old teacher. Have a nice morning
johnFriendly('night') //-->Hey what's up! My name is  john, and I am a 27 year old teacher. Have a nice night

const formalEmily = john.presentation.bind(emily, 'formal')
formalEmily('evening') //--> Good evening, my name is emily. I am a 24 year old designer.
formalEmily('afternoon') //--> Good afternoon, my name is emily. I am a 24 year old designer.



// NEW EXAMPLE
var years = [1990, 1965, 1937, 2005, 1998]
function arrayCalc(arr, fn) {
  var arrRes = []
  for(var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]))
  }
  return arrRes;
}

function calculateAge(el) {
  return 2016 - el;
}
function isFullAge(limit, el) {
  return el >= limit;
}

// this function is calculating the ages of the years array
const ages = arrayCalc(years, calculateAge)
console.log(ages) //-->[ 26, 51, 79, 11, 18 ]

const fullAgesJapan = arrayCalc(ages, isFullAge.bind(this,20))
console.log(fullAgesJapan)//-->[ true, true, true, false, false ]




































