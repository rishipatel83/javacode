const hex = '0123456789ABCDEF';
const body = document.querySelector('body');
let color = '';
const random = function () {
  for (let i = 0; i < 6; i++) {
    let select = Math.floor(Math.random() * 16);
    color += hex[select];
  }
  return color;
};
let interval;
const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
start.addEventListener('click', function () {
  interval = setInterval(function () {
    color = '#';
    random();
    console.log(color);
    body.style.backgroundColor = color;
  }, 1000);
});
stop.addEventListener('click', function () {
  clearInterval(interval);
  color = "#"
});
const reset = document.querySelector('#reset');
reset.addEventListener('click',()=>{
  setTimeout(function(){
    body.style.backgroundColor = "#212121"
  },0)
})
