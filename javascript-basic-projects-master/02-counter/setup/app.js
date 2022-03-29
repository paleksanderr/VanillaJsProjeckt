
// set initial count
let count = 0

// select value and the buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btns);

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    // console.log(btn.classList.contains('decrease'));
    if (btn.classList.contains('increase')) {
      count++;
    } else if (btn.classList.contains('decrease')) {
      count--;
    } else if (btn.classList.contains('reset')) {
      count = 0;
    }
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
    value.textContent = count;
  });
});

