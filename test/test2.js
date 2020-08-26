////////////////////////////////////////////////////////PROMISES//////////////////////////////////////////////////

// created promise with executor function
const getIDs = new Promise((resolve,reject)=> {
   setTimeout(()=>{
    resolve([523,883,432,974]) // the data that is returned, promise is fufilled
   }, 1500)
})

const getRecipe = idFromGetIDs2 => {
   return new Promise((resolve,reject)=>{
      setTimeout((idFromGetIDs2)=>{
         const recipe = {title: 'Fresh Tomato pasta', publisher: 'eder'}
         resolve(`${idFromGetIDs2}: ${recipe.title}`)
      },1000,idFromGetIDs2 )
   })
} 

const getRelated = publisherFromGetRecipe => {
   return new Promise((resolve,reject)=>{
      setTimeout((publisherFromGetRecipe)=>{
         const recipe2 = {title: 'pizza', publisher: 'eder'}
         resolve(`Here is another recipe ${recipe2.title} ${publisherFromGetRecipe} made up`)
      },1000, publisherFromGetRecipe)
   })
}

// consumed the successful promise 
getIDs
   .then(idsFromGetIDs => {
      console.log(idsFromGetIDs)
      return getRecipe(idsFromGetIDs[2]) 
   })
   .then(resolveFromGetRecipe =>{ // this is the resolve 
      console.log(resolveFromGetRecipe)
      return getRelated('eder')
   })
   .then(resolveFromGetRelated=>{
      console.log(resolveFromGetRelated)
   })
   .catch(err => {
      console.log('an error has happened')
   })


