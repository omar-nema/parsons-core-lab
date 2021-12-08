const names = [
  { name: 'ahmed' },
  { name: 'maria' },
  { name: 'carlos' },
  { name: 'noor' },
  { name: 'steph' },
  { name: 'kevin' },
];

function addUserDivs() {
  names.forEach((d) => {
    let el = document.createElement('li');
    el.innerText = `Name: ${d.name}`;
    document.querySelector('.name-list').append(el);
  });
}

function listForInput() {
  document.querySelector('#addName').addEventListener('click', () => {
    console.log('clicked');
    let el = document.createElement('li');
    let inputText = document.querySelector('#name').value;
    el.innerText = 'Name: ' + inputText;
    if (inputText !== '') {
      document.querySelector('.name-list').append(el);
    }
  });
}

addUserDivs();
listForInput();
