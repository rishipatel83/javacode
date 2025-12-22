const myArr = [2,3,5,8,10,21]
for(const element of myArr){
   // console.log(element)
}
let userName = 'rishi patel'
for(const letter of userName){
   if(letter==" ") continue;
   // console.log(`letters in the userName ${letter}`)
}
// MAPS    -- it consist of key value pairs and it remembers the order also values will be unique
const map = new Map()
map.set('IN','India')
map.set('AUS','Australia')
map.set('Fr','France')
// console.log(map)
for (const [key,value] of map) {
   // console.log(key,':-',value);
}
const cars = {
   tata:"nano",
   mahindra:"thar",
   suzuki:"fronx"
}
// this doesn't works on objects 
// so we used for-in loop
for (const key in cars) {
   // console.log(key);
   
}
const coding = ['java','c++','ruby','python']
// coding.forEach(function (lang) {
//    console.log(lang); 
// });

// coding.forEach((key)=>{
//    console.log(key);
// })

// function print(key){
//    console.log(key)
// }
// coding.forEach(print)

// coding.forEach((item,index,myArr)=>{
//    console.log(item,index,myArr)
// })

// ++++++++ important ++++++++++

const lang = [
   {
      languageName:"javascript",
      languageFileName:"js"
   },
   {
      languageName:"python",
      languageFileName:"py"
   },
   {
      languageName:"c++",
      languageFileName:"cpp"
   }
]
lang.forEach( (item)=>{
   console.log(item.languageName)
})