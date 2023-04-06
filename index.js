const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    for (let i = seconds; i >= 0; i--) {
      setTimeout(() => {
        let h = Math.floor(i / 3600)
        let m = Math.floor((i - h*3600)/60)
        let s = i - h*3600 - m*60
        timerEl.textContent = `${h<10?'0'+h:h}:${m<10?'0'+m:m}:${s<10?'0'+s:s}`
      },(seconds-i)*1000)
    }
  }
}

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  if (isNaN(Number(inputEl.value.slice(-1)))) {
    inputEl.value = inputEl.value.slice(0,-1)
  }
  // Очистите input так, чтобы в значении
  // оставались только числа
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
