const myNums = [1,2,3]
const total = myNums.reduce((acc,currval)=> acc+currval,0)
// console.log(total);

const courses = [
   {
      course:"DSA",
      price: 999
   },
   {
      course:"machine learning",
      price: 3999
   },
   {
      course:"AIML",
      price: 5999
   }
]
const cartValue = courses.reduce((acc,item) => acc+item.price,0)
console.log(cartValue);

courses.reduce