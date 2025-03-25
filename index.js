const bulb = document.getElementById('bulb');
const body = document.querySelector('body');

function changeBackground() {
  if (bulb.style.color === 'black') {
    bulb.style.color = 'yellow';
    body.classList.add('dark-body');
  } else {
    bulb.style.color = 'black';
    body.classList.remove('dark-body');
  }
}

bulb.addEventListener('click', changeBackground);
