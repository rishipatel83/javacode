const btn = document.querySelector('#emoji');
const emojis = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];
const emoji = document.querySelector('#emoji')
emoji.addEventListener('mouseenter',()=>{
  let idx = Math.floor(Math.random()*33)
  // console.log(idx)
  
  emoji.innerHTML = emojis[idx]
})
// function reset(emo){
//   emoji.addEventListener('mouseleave',()=>{
//   emoji.innerHTML = emo;
//   return emo
// })
// }