const url = 'https://api.chucknorris.io/jokes/random';

const button=document.getElementById('getJoke');
button.addEventListener('click',()=>{
  console.log("button clicked!");

})
const joke = document.createElement('div');

// handle this end point with XMLHttpRequest

const xhr = new XMLHttpRequest();
xhr.open("GET",url);
console.log(xhr.readyState);
xhr.onreadystatechange = () =>{
  console.log(xhr.readyState)
  if(xhr.readyState===4){
    const data = (this.responseText);
    console.log(typeof data);
  }
}
xhr.send();

// handle this end point with promises

// handle the case of race condition
