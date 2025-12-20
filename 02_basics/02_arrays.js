const marvelHeros = ["IronMan","Spiderman","Thor"];
const DCHeros = ["SuperMan","Flash","BatMan"]
// console.log(marvelHeros.push(DCHeros))  //gives array into a array
// console.log(marvelHeros)
const AllHeros = marvelHeros.concat(DCHeros)
// console.log(AllHeros)  // give array with each element discrete

const newAllHeros = [...marvelHeros,...DCHeros] // spread method is used to distribute or to spread out all the elements in the array
// console.log(newAllHeros)

const anotherArray = [0,1,2,[6,7],[8,9,[3,4]]]

// console.log(anotherArray)

const arrayUsingFlat = anotherArray.flat(Infinity)

// console.log(arrayUsingFlat)

console.log(Array.isArray("Rishi"))  // returns false
console.log(Array.from("Rishi")) // returns [ 'R', 'i', 's', 'h', 'i' ]
console.log(Array.from({name:"rishi"})) //idea returns an empty array because it is unable to judge the array of key value or what 

let run1 = 89;
let run2 = 2;
let run3 = 264;

console.log(Array.of(run1,run2,run3))