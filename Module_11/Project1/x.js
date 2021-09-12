const { dogName = 'snickers' } = { dogName: undefined }
console.log(dogName) // what will it be? 'snickers'!
const { dogName1 = 'snickers' } = { dogName1: null }
console.log(dogName1) // what will it be? null!
const { dogName2 = 'snickers' } = { dogName2: false }
console.log(dogName2) // what will it be? false!
const { dogName3 = 'snickers' } = { dogName3: 0 }
console.log(dogName3) // what will it be? 0!