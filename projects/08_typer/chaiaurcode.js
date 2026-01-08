const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const words = ["Love", "Jhakaas", "mast", "dhinchak", "Weird"];
const str = Array.from(words[0]);
console.log(str);

let wordIdx = 0;
let charIdx = 0;
function type() {
  //* 1. here we added the character to the span
  if (charIdx < words[wordIdx].length) {
    typedTextSpan.innerHTML += words[wordIdx].charAt(charIdx);
    charIdx++;
    //* 2. setTimeout for the next character call
    setTimeout(type, 200);
  } else {
    //* 3. at the end when the word got completed we erase with the delay of a sec
    setTimeout(erase, 1000);
  }
}

function erase() {
  //* 1. we erase it like by adding the new sliced word to the textContent we can also use substring in place of slice
  if (charIdx > 0) {
    typedTextSpan.textContent = words[wordIdx].slice(0, charIdx - 1);
    charIdx--;
    //* 2. now here we called erase again so it erases the next character from the word
    setTimeout(erase, 150);
  } else {
    //* 3. at the end we move on to the next word
    wordIdx++;
    //* 4. if the words in the array got over we reset the index to zero
    if (wordIdx >= words.length) wordIdx = 0;
    //* 5. then finally we called type to print a new word
    setTimeout(type, 1000);
  }
}

//* whole story begins here when the page is loaded

document.addEventListener("DOMContentLoaded", () => {
  //* as the page got loaded we called the type in the delay of a sec
  if (words.length) setTimeout(type, 1000);
});
