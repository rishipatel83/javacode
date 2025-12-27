// crating promise
const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async task is completed");
    resolve(); // if it is not called then the function inside the consumption with then will not be executed only this promise will be consumed
  }, 1000);
});
// consuming the created promise
promiseOne.then(function () {
  console.log("Promise consumed"); // this line will only be executed when we call resolve as then is connected to resolve
});

// another way to write just a syntax

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved ");
});
