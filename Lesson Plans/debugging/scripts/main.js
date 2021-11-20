const names = [
  { name: 'ahmed' },
  { name: 'maria' },
  { name: 'carlos' },
  { name: 'noor' }
  { name: 'steph' },
  { name: 'kevin' }
];

function addUserDivs() {
  names.forEach((d) => {
    let el = document.createElement('li');
    el.innerText = `Name: ${d.name}`;
    document.querySelector('name-list').append(el);
  });
}

function listForInput() {
  document.querySelector('#addName').addEventListener('click', () => {
    let currentInputVal = '';
    let el = document.createElement('li');
    el.innerText = currentInputVal;
    document.querySelector('.name-list').append(el);
  });
}

addUserDivs();
