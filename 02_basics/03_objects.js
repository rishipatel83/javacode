// singelton when we create an object by constructor singleton will form otherwise in object literals no singelton is there and that's whats we have learnt below

// Object.create  // this is the method what we are talking about the constructor method 

//object literals

// Symbol datatype

let mySym = Symbol("key1") // defining a Symbol

const JsUser = {
   "my Name": "Rishi",   // keys are taken as string even if we don't give them inside "" commas
   [mySym]: "key1",      // adding a Symbol as keys in objects
   id:101,
   email:"rishi@google.com"
}
// console.log(JsUser.id)     // usual method everyone uses
// console.log(JsUser[mySym])       // a better method used even we can call the keys as String also
// console.log(JsUser["my Name"])
JsUser.email = "rishi@chatgpt.com"
// Object.freeze(JsUser)   // locked the object can't change anything further
JsUser.email = "rishi@microsoft.com"
// console.log(JsUser)

JsUser.treat = function () {
   console.log("hey hello Js user ")
}
JsUser.treatTwo = function () {
   console.log(`Hey Hello Js user ${this.name}`)
}
// console.log(JsUser.treat) // gives refrence of the function 

console.log(JsUser.treat())
console.log(JsUser.treatTwo())   
console.log(JsUser)   

