// ///////////////////////OBEJECTS//////////////////

// // Person object --> making other people using the person objects(constructor) is called INSTANCES and then using athletes to use the person object is called INHERITANCE

// //////////////////////////////////FUNCTION CONSTRUCTOR//////////////////////

// // object
// const eder = {
//   name: 'Eder',
//   yearOfBirth: 1994,
//   job: 'software developer'
// }

// // function constructor must start with capital letter
// const Person = function (name, yearOfBirth, job){
//   this.name = name
//   this.yearOfBirth = yearOfBirth
//   this.job = job
//   this.calculateAge = function () {
//       console.log(2020 - this.yearOfBirth, 'this is my age')
//     }
// }
// // // I do not need to have the method in my constructor as I can inherit it using prototype
// // Person.prototype.calculateAge = function () {
// //   console.log(2020 - this.yearOfBirth, 'this is my age')
// //   }

// // // This is another example of inheritance using prototype. I am now using it to add the same property and value on all of my instances 
// // Person.prototype.lastName = 'Smith'

// // I am making a new object from my Person function constructor and this is call instantiation because tim is an instance of the Person constructor 
// const tim = new Person ('Tim', 1990, 'teacher', 'John')
// tim.calculateAge()
// console.log(tim)
// console.log(tim.lastName)


// const Car = function (brand, year, color){
//   this.brand = brand,
//   this.year = year,
//   this.color = color 
// }

// Car.prototype.loveCar = function (brand) {
//   console.log(`i love my new ${this.brand}`)
// } 

// const toyota = new Car ('toyota', 2017, 'silver')
// console.log(toyota)
// toyota.loveCar()

// //////////////////////////////////PROTOTYPE CHAIN IN THE CONSOLE//////////////////////

// // new methods to check my new instances  if they have a certain property in the object or to see what object are they being an instance of  
// console.log(toyota.hasOwnProperty('brand')) // true
// console.log(toyota instanceof Car) // true 


//////////////////////////////////OBJECT.CREATE//////////////////////

// // The difference between object.create and function constructor, is that object.create builds an object that inherits directly from the one that I passed into the first arguement, while the with the function constructor the newly created object inherits from the constructor prototype property, so that object I made is an instance, but with object.create it inherits.

// const personProto = {
//   calculateAge: function(){
//     console.log(2020 - this.yearOfBirth)
//     },
//   lastName: 'Smith'
// }

// const john = Object.create(personProto)
// john.name = 'John'
// john.yearOfBirth = 1990
// john.job = 'Dentist'
// console.log(john ) // --> logs the whole object

// const jane = Object.create(personProto,{
//   name: {value: 'Jane'},
//   yearOfBirth: {value: 1973},
//   job: {value: 'Teacher'}
// })

//////////////////////////////////PRIMITIVES VS OBJECTS//////////////////////
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
console.log(age, obj.city) //---> 27, SF