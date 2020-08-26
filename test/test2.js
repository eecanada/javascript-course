////////////////////////////////////////////////////////PROMISES//////////////////////////////////////////////////


const getIDs = new Promise((resolve,reject)=> {
   setTimeout(()=>{
    resolve([523,883,432,974]) // the data that is returned, promise is fufilled
   }, 1500)
})

getIDs
   .then(idsFromGetIDs =>{
      console.log(idsFromGetIDs)
   })
