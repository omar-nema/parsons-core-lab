import { logMe } from './test.js';

logMe();

document.addEventListener('DOMContentLoaded', async function () {
  function changeBallSize(width, height) {
    let ball = document.querySelector('.ball');
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';
  }

  // instantiate the scrollama
  const scroller = scrollama();

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: '.scroll-step',
    })
    .onStepEnter((response) => {
      console.log(response);
      let dataSize = response.element.getAttribute('data-size');
      if (dataSize) {
        //change the ball size to that size
        changeBallSize(dataSize, dataSize);
      }
    })
    .onStepExit((response) => {
      // { element, index, direction }
    });
});
