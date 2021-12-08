function generateNumber() {
  return Math.round(Math.random() * 10);
}

document.querySelector('#submit').addEventListener('click', () => {
  let currNumber = document.querySelector('#sampleText').value;

  let guessResult = document.querySelector('.guess-result');

  if (currNumber) {
    guessResult.style.opacity = 1;
    if (currNumber == generateNumber()) {
      guessResult.innerHTML =
        '<p>Your guess is so right wow ur so smart teach me how to be like you</p>';
    } else {
      guessResult.innerHTML = '<p>Um like no</p>';
    }
  }
});
