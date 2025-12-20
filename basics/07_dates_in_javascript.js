let myDate = new Date();
// console.log(myDate);
console.log(myDate.toLocaleString('default',{
   weekday: 'short'
}));
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());
 
let myCreatedDate = new Date("12-18-2025");
// console.log(myCreatedDate.getTime())  // it will give us the time is milliseconds from 1970 onwards
let currentTime = Date.now();
// console.log(currentTime)

console.log(Math.floor(Date.now()/1000))  // Gives the answer in seconds


