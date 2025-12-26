let clock = document.querySelector("#clock");
let now = setInterval(function(){
   const date = new Date();
   const time = (date.toLocaleTimeString('en-IN'));
   clock.innerHTML = time;
},1000)
let date = document.querySelector("#date");
const din = new Date();

const pdate = din.toLocaleDateString() ;  
const day = din.toLocaleString('default',{
   weekday:"short"
});
console.log(day);
date.innerHTML = pdate;
date.innerHTML += " ";
date.innerHTML += day;