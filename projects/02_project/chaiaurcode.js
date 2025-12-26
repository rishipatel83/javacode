const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height not ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight not ${weight}`;
  } else {
    bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6) {
      results.innerHTML = `<span>You are Underweight Eat something your bmi is : ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Congratulations! you are too fit to live in this world with bmi : ${bmi}</span>`;
    } else {
      results.innerHTML = `<span>Ohh shit do some exercise otherwise you will die with Obesity your too much BMI is : ${bmi}</span>`;
    }
  }
});
