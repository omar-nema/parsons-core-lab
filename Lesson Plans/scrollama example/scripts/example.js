document.addEventListener('DOMContentLoaded', async function () {
  function changeBallSize(width, height) {
    console.log(width, height);
    let ball = document.querySelector('.ball');
    ball.style.width = width + 'px';
    ball.style.height = height + 'px';
  }

  // instantiate the scrollama
  const scroller = scrollama();

  let numberSteps = document.querySelectorAll('.scroll-step').length;
  console.log(numberSteps);

  // setup the instance, pass callback functions
  scroller
    .setup({
      step: '.scroll-step',
    })
    .onStepEnter((response) => {
      let desiredSize = response.element.getAttribute('data-size');

      if (desiredSize) {
        changeBallSize(desiredSize, desiredSize);
      }

      // { element, index, direction }
    })
    .onStepExit((response) => {
      //detect if it's the last step
      if (response.index == numberSteps - 1) {
        changeBallSize(30, 30);
      }
    });
});
