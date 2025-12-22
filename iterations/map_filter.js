const myNums = [1,2,3,4,5,6,7,8,9]
// +++++++++filter++++++++
// const newNums = myNums.filter((num)=> num>4)
// console.log(newNums)

//++++++++++map++++++++++++
// const newNums = myNums.map((num)=>num+1)
// console.log(newNums)


// if we have used forEach for this map function then
// newNums = []
// myNums.forEach((num)=>{
//    return newNums.push(num + 1);
// })
// console.log(newNums)

// +++++++++++ chaining+++++++++

newNums = myNums
.map((num) => num*100)
.map((num) => num+5)
.filter((num) => num>=105)
console.log(newNums);
