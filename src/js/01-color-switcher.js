const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
}
let colorIntervalId = null;
const colorIntervalMs = 1000;


const onStartButton = () => {
    refs.startBtn.disabled = true;
    refs.stopBtn.disabled = false;

    colorIntervalId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, colorIntervalMs);
};

const onStopButton = () => {
    refs.startBtn.disabled = false;
    refs.stopBtn.disabled = true;

    clearInterval(colorIntervalId);
};

refs.startBtn.addEventListener('click', onStartButton);
refs.stopBtn.addEventListener('click', onStopButton);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}