const counter = document.getElementById('counter');
const btnIncrease = document.getElementById('btn-increase');
const btnDecrease = document.getElementById('btn-decrease');
const btnRestart = document.getElementById('btn-restart');

let count = 0;

const increaseCount = () => {
  if(count < 20) {
  count++;
  counter.innerText = `${count}`;  
  } else {
    alert(`Not possible to count more than ${count}`);
  }
}

const decreaseCount = () => {
  if (count > 0) {
    count--;
    counter.innerText = `${count}`;
  } else {
    alert('Action not possible');
  }
}

const restartCount = () => {
  count = 0;
  counter.innerText = `${count}`;
}

btnIncrease.addEventListener('click', increaseCount);

btnDecrease.addEventListener('click', decreaseCount);

btnRestart.addEventListener('click', restartCount);