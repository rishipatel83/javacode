// const fbUser = new Object()  // singeleton Object
const fbUser = {
   id:1,
   username: "rishipatel83",
   isLoggedIn: false
}

const obj1 = {a:1,b:2}
const obj2 = {c:2,d:3}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} // spread and gather
// console.log(obj3)
// console.log(fbUser)
// console.log(Object.keys(fbUser))  // returns us an array of keys 
// console.log(Object.values(fbUser))  // returns us an array of values 
// console.log(Object.entries(fbUser));  // returns us an array of array of key and value pair
// console.log(fbUser.hasOwnProperty('isLoggedIn'));
// nested object
const user = {
   username:{
      userfullname:{
         firstname : "rishi",
         lastname : "kurmi"
      }
   }
}
// console.log(user)
// console.log(user.username);


//* +++++++++++++++++++++++++++++++ destructuring ++++++++++++++++++++++++

const Instauser = {
   username: "rishipatel83",
   followers: 332
}

// const {username} = Instauser
// console.log(username);

//    +++++++++++ OR +++++++++++=

const {username:Id} = Instauser
console.log(Id)

// json and API 
/* api are written in json it is nothing but and object with no name shown below 
   there could be array inside them or object in array or vice-versa

{
   user:"rishi",
   id : 121,

}
*/
// in following format also 
[
   {},
   {},
   {}
]