let inputField = document.getElementById('display-calc');
let deleteData = document.getElementById('delete');
let compute = document.getElementById('equal-sign');
let unlockBtn = document.getElementById('unlock-img-btn');
let image = document.getElementById('meme');

function displayVal(val) {
  inputField.value += `${val}`;
}

deleteData.addEventListener('click', function () {
  inputField.value = '';
});

compute.addEventListener('click', function () {
  if (inputField.value === '') {
    inputField.value = '';
  } else if (inputField.value.includes('√')) {
    const result = inputField.value.replace('√', '');
    const square = Math.sqrt(result);
    inputField.value = square;
  } else if (inputField.value.includes('%')) {
    const result = inputField.value.replace('%', '');
    const percentage = result / 100;
    inputField.value = percentage;
  } else {
    inputField.value = Function('return ' + inputField.value)();
  }
});

unlockBtn.addEventListener('click', function () {
  if (image.style.display === 'none') {
    image.style.display = 'inline-block';
  } else {
    image.style.display = 'none';
  }
});
