////////////////////////////////////////////////////////PROMISES//////////////////////////////////////////////////

// created promise with executor function
const getIDs = new Promise((resolve,reject)=> {
   setTimeout(()=>{
    resolve([523,883,432,974]) // the data that is returned, promise is fufilled
   }, 1500)
})

// consumed the successful promise 
getIDs
   .then(idsFromGetIDs => {
      console.log(idsFromGetIDs)
   })
   .catch(err => {
      console.log('an error has happened')
   })
