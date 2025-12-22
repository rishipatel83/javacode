// we used iife Immediately Invoked Function Expression 
// to prevent from the global scope polution 
// ()()  // this is the way to call the iife second parenthesis is just call to that function
//this is named iife
(function chai(){
   console.log(`DB connected`)
})();   // don't forget to apply semicolon here 
// this is not named iife
((userName)=>{
   console.log(`${userName} just logged in to the DB`)
})('rishi');
