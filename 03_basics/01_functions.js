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
console.log(isLoggedIn("sumit"))