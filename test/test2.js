////////////////////////////////////////////////////////PROMISES//////////////////////////////////////////////////

// // created promise with executor function
// const getIDs = new Promise((resolve,reject)=> {
//    setTimeout(()=>{
//     resolve([523,883,432,974]) // the data that is returned, promise is fufilled
//    }, 1500)
// })

// const getRecipe = idFromGetIDs2 => {
//    return new Promise((resolve,reject)=>{
//       setTimeout((idFromGetIDs2)=>{
//          const recipe = {title: 'Fresh Tomato pasta', publisher: 'eder'}
//          resolve(`${idFromGetIDs2}: ${recipe.title}`)
//       },1000,idFromGetIDs2 )
//    })
// } 

// const getRelated = publisherFromGetRecipe => {
//    return new Promise((resolve,reject)=>{
//       setTimeout((publisherFromGetRecipe)=>{
//          const recipe2 = {title: 'pizza', publisher: 'eder'}
//          resolve(`Here is another recipe ${recipe2.title} ${publisherFromGetRecipe} made up`)
//       },1000, publisherFromGetRecipe)
//    })
// }

// // consumed the successful promise 
// getIDs
//    .then(idsFromGetIDs => {
//       console.log(idsFromGetIDs)
//       return getRecipe(idsFromGetIDs[2]) 
//    })
//    .then(resolveFromGetRecipe =>{ // this is the resolve 
//       console.log(resolveFromGetRecipe)
//       return getRelated('eder')
//    })
//    .then(resolveFromGetRelated=>{
//       console.log(resolveFromGetRelated)
//    })
//    .catch(err => {
//       console.log('an error has happened')
//    })


////////////////////////////////////////////////////////PROMISES//////////////////////////////////////////////////
// //promises  are used for asynchronous js


// const gatherIDs = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//       resolve([123,233,532,901])
//    },1000)
// })


// const gatherRecipe = idsFromGatherIDs2 => {
//    return new Promise((resolve,reject)=>{
//       setTimeout((idsFromGatherIDs2)=>{
//          const recipe = {title: 'hamburger', cook:'eshani'}
//          resolve(idsFromGatherIDs2 + recipe.title)
//       },1000,idsFromGatherIDs2 )
//    })
// }

// const gatherCook = cook => {
//    return new Promise((resolve, reject)=>{
//       setTimeout((cook)=>{
//          resolve(`${cook} makes all the recipes`)
//       },1000, cook)
//    })
// }

// gatherIDs
//    .then(idsFromGatherIDs =>{
//       return gatherRecipe(idsFromGatherIDs[2])
//    })
//    .then(recipeAndID=>{
//       console.log(recipeAndID)
//       return gatherCook('eder')
//    })
//    .then(whoMadeIt =>{
//       console.log(whoMadeIt)
//    })

// .catch(err =>{
//    console.log('error')
// })



// const getIDs = new Promise ((resolve, reject)=>{
//    setTimeout(()=>{
//       resolve([123,421,145,584])
//    },1000)
// })

// const getRecipe = recID2 =>{
//    return new Promise((resolve,reject)=>{
//       setTimeout((recID2)=>{
//          const recipe = {title:'pizza', cook:'eder'}
//          resolve(`${recID2} : ${recipe.title}`)
//       },1500, recID2)
//    })
// }

// const getCook = cook => {
//    return new Promise((resolve,reject)=>{
//       setTimeout((cook)=>{
//          resolve(`${cook} makes the best food`)
//       },2000, cook)
//    })
// }

// getIDs
//    .then(IDs=>{
//       console.log(IDs)
//       return getRecipe(IDs[2])   
//    })
//    .then(recipeNumAndTitle =>{
//       console.log(recipeNumAndTitle)
//       return getCook('eder')
//    })
//    .then(ederBestCook=>{
//       console.log(ederBestCook)
//    })
//    .catch(err =>{
//       console.log('error happened')
//    })

   

////////////////////////////////////////////////////////ASYNC/AWAIT////////////////////////////////////////////
const getIDs = new Promise ((resolve, reject)=>{
   setTimeout(()=>{
      resolve([123,421,145,584])
   },1000)
})

const getRecipe = recID2 =>{
   return new Promise((resolve,reject)=>{
      setTimeout((recID2)=>{
         const recipe = {title:'pizza', cook:'eder'}
         resolve(`${recID2} : ${recipe.title}`)
      },1500, recID2)
   })
}

const getCook = cook => {
   return new Promise((resolve,reject)=>{
      setTimeout((cook)=>{
         resolve(`${cook} makes the best food`)
      },2000, cook)
   })
}

async function getRecipeAW(){
   const IDs = await getIDs;
   console.log(IDs)
   const recipe = await getRecipe(IDs[2])
   console.log(recipe)
   const bestCook = await getCook('eder')
   console.log(bestCook)

} 

getRecipeAW()