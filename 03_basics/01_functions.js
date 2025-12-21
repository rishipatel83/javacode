function addTwo(para1,para2){ // the values passed in function is known as parameters
   console.log(para1+para2);
   
}
// addTwo(1,2)       // values passed inside this function call is known as arguments
function isLoggedIn(username = "Rishi"){
   if(!username){
      console.log("type a username")
      return
   }
   return `${username} just logged in.`
}
// console.log(isLoggedIn("sumit"))

function useRest(...score){   // similar to the spread but it gathers not spread the info
   return score               // provides in the form of a array
}
console.log(useRest(101,89,65))

const user = {
   username: "rishi",
   email:"rishi@google.com"
}
function giveDetail(getUser){
   return`${getUser.username} logged in with email ${getUser.email}`
}
console.log(giveDetail(user));

const myArr = [3,5,8,9,100];

function getIndexThree(getArray){
   return getArray[3]
}
console.log(getIndexThree(myArr));

