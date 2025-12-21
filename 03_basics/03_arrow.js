const user = {
   username : "rishi",
   isLoggedIn:true,
   welcomeMessage: function(){
      console.log(`${this.username} , logged in to the website`)
      console.log(this);
      
   }
}
// console.log(user.welcomeMessage())
// console.log(this)       // this will give us an empty object because we are running it in node otherwise in browser in will return us window test it in the browser for it 

// function cart(){
//    console.log(this)
// }
// cart()

const chai = () => {
   console.log(this)
}
chai()
const addTwo = (num1,num2) => (num1 + num2) //implicit return
// or by this method   const addTwo = (num1,num2) => num1 + num2  //implicit return
console.log(addTwo(2,4))

const userName = (num1,num2) => ({username:"rishi"})
console.log(userName());
