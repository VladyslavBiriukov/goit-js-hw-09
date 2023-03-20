const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
}
let colorIntervalId;
const colorIntervalMs = 1000;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const onStartButton = () => {
    refs.startBtn.disabled = true;
    colorIntervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, colorIntervalMs);
};

const onStopButton = () => {
    refs.startBtn.disabled = false;
    clearInterval(colorIntervalId);
};

refs.startBtn.addEventListener('click', onStartButton);
refs.stopBtn.addEventListener('click', onStopButton);

