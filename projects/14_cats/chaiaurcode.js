const url = 'https://api.thecatapi.com/v1/images/search';
const button = document.querySelector('.btn')
let imgUrl ="";
// const calling = function(){
  const div = document.createElement('div')
  console.log(div)
  div.className = "cats"
  let img = document.createElement('img')
  // img.setAttribute('src',imgUrl)
  img.src = imgUrl
  console.log(img)
  div.appendChild(img)
  document.body.appendChild(div)
// }
button.addEventListener('click',()=>{
  console.log('Cat');
  fetch(url)
  .then((res)=>{
    console.log(res);
    return res.json();
  })
  .then((data)=>{
    console.log(data)
    imgUrl = data[0].url;
    console.log(imgUrl);
  })

  .catch((error)=>{
    console.log(error);
  })
})
