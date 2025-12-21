let a = 1;
const b=2;
var c = 3;


// ++++++++++++++ interesting +++++++++++++++
console.log(addone(5))
console.log(addTwo(5))  // this one is unaccesible 
function addone(num){
   return num + 1;
}
//* interesting case 
const addTwo = function(num){
   return num + 2;
}