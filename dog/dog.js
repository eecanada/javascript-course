const fs = require('fs')
const superagent = require('superagent')

fs.readFile(`${__dirname}/dog.txt`,'utf-8',(err, dog)=>{
  console.log(dog)
 
  superagent
    .get(`https://dog.ceo/api/breed/${dog}/images/random`)
    .end((err, res)=>{
    console.log(res.body.message)

    fs.writeFile('dog-img.txt',res.body.message, err => {
      console.log('random dog image file saved')
    })
  })

})


 