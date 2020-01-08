///////////////////////OBEJECTS//////////////////

// Person object --> making other people using the person objects(constructor) is called INSTANCES and then using athletes to use the person object is called INHERITANCE

//////////////////////////////////FUNCTION CONSTRUCTOR//////////////////////

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
// Person.prototype.calculateAge = function () {
//   console.log(2020 - this.yearOfBirth, 'this is my age')
//   }

// // This is another example of inheritance using prototype. I am now using it to add the same property and value on all of my instances 
// Person.prototype.lastName = 'Smith'

// I am making a new object from my Person function constructor and this is call instantization because tim is an instance of the Person constructor 
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