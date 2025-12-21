// Arrays 


const myHeros = ['superman','shaktiman','Ironman'];
console.log(myHeros[0])

//  +++++++++++ Methods in Array +++++++++++++++++

//* methods like push,pop,unshift,shift ,includes,indexOf
// slice doesn't change the original array and gives us the answer of the array
// splice cut down the original array as given below

let arr = [0,1,2,3,4,5]
const myArr = arr.join() //* returns us the value of all arrays in string with each dicrete value
console.log(myArr)
console.log(arr)
let myn1 = arr.slice(1,3);    //
console.log("Original after using slice",arr)
console.log("Slice method used",myn1)  
let myn2 = arr.splice(1,3)    //
console.log("Original after using splice",arr)
console.log("Splice method used",myn1)


//* outputs of above inputs

// Original after using slice [ 0, 1, 2, 3, 4, 5 ]
// Slice method used [ 1, 2 ]
// Original after using splice [ 0, 4, 5 ]
// Splice method used [ 1, 2 ]

