const timerDisplay = document.querySelector('.timer');
const focusButton = document.querySelector('#focus');
const shortBreakButton = document.querySelector('#short-break');
const longBreakButton = document.querySelector('#long-break');
const startButton = document.querySelector('.start-icon');
const resetIcon = document.querySelector('.reset-icon');

let countdown;
let workDuration = 25 * 60; // 25 minutes in seconds
let shortBreakDuration = 5 * 60; // 5 minutes in seconds
let longBreakDuration = 15 * 60; // 15 minutes in seconds
let currentDuration = workDuration;
let isPaused = true;

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  isPaused = false;
  startButton.classList.remove('fa-circle-play');
  startButton.classList.add('fa-circle-pause');
  countdown = setInterval(() => {
    currentDuration--;
    timerDisplay.textContent = formatTime(currentDuration);
    if (currentDuration === 0) {
      clearInterval(countdown);
      alert('Time is up!');
    }
  }, 1000);
}

function pauseTimer() {
  isPaused = true;
  startButton.classList.remove('fa-circle-pause');
  startButton.classList.add('fa-circle-play');
  clearInterval(countdown);
}

function resetTimer() {
  pauseTimer();
  currentDuration = workDuration;
  timerDisplay.textContent = formatTime(currentDuration);
}

focusButton.addEventListener('click', () => {
  currentDuration = workDuration;
  timerDisplay.textContent = formatTime(currentDuration);
});

shortBreakButton.addEventListener('click', () => {
  currentDuration = shortBreakDuration;
  timerDisplay.textContent = formatTime(currentDuration);
});

longBreakButton.addEventListener('click', () => {
  currentDuration = longBreakDuration;
  timerDisplay.textContent = formatTime(currentDuration);
});

startButton.addEventListener('click', () => {
  if (isPaused) {
    startTimer();
  } else {
    pauseTimer();
  }
});

resetIcon.addEventListener('click', resetTimer);
