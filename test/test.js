// ////////BLOCKING//////
// // takes two arguements, path to file I am reading and character encoding
// // reading a file
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')
// console.log(textIn)

// const textOut = `This is what we know about the avocado ${textIn}. \nCreated on ${Date.now()}`
// //writing and creating file, takes two arguements path of file and what I want to put inside it 
// fs.writeFileSync('./txt/output.txt',textOut)
// console.log('File has been written')

// /////////NON-BLOCKING////////
// // data can be named anything I want it, it is the file start.txt
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   fs.readFile(`./txt/${data1}.txt`, 'utf-8',(err, data2)=>{
//     fs.readFile('./txt/append.txt','utf-8', (err, data3)=>{
//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err =>{
//         console.log('your file has been written')
//       })
//     })
//   })
// })


////////////////////////////////////////////////////////////////////////////////////////////////

// // let eder = ['eder', 25]

// let [name, age] = ['eder', 25]

// console.log(age)


// const obj = {
//   firstName: 'eder',
//   lastName: 'can'
// }

// //keys have to be the same name
// const {firstName, lastName} = obj
// console.log(firstName)
 
// // i can rename keys but have to do :
// const {firstName: myName, lastName:myAge} = obj
// console.log(myName)


// function calcAgeRetirement(year){
//   const age = new Date().getFullYear() - year
//   return[age, 65 -age]

// }

// const [age2, retirement] = calcAgeRetirement(1990)
// console.log(age)
// console.log(retirement)


// let arr = [1,2,3,4,5]

// arr2 = arr.filter(el => el > 1 && el< 3)
// console.log(arr2)



////////////////////////////////////////////////////////////////////////////////////////////////

// es5 
var Person5 = function (name, yearOfBirth, job){
  this.name = name
  this.yearOfBirth = yearOfBirth
  this.job = job
}

Person5.prototype.calcAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth
  console.log(age)
  }

  var eder5 = new Person5('eder',1994,'developer')

//es6 
class Person6 {
  constructor(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth
    this.job = job
  }
  calcAge(){
    let age = new Date().getFullYear() - this.yearOfBirth
    console.log(age)
  }
}

let eder6 = new Person6('eder', 1994, 'software developer')
eder6.calcAge()