document.addEventListener('DOMContentLoaded', function () {
  // Your code goes here

  let textHolder = [
    "What's my favorite ice cream? To reveal it a dream. I could eat it day and night. Best not to wear white.Whatever size serving, I eat every bit. CHOCOLATE",
    'fudge ripples through vanilla ice cream. peanut butter cups and chunks of chocolate.sweet driblets trickle down a sugar cone...',
    'I recently started a brand new diet.It lets you eat ice cream,you really should try it.',
    'Give me Ice cream!',
    'Mint Chocolate Green…',
    'butter pecan',
    'lavender',
    'Ice cream, ice cream in a bowl. Ice cream, ice cream in a cone.',
    'ice cream is my friend, you are not',
    'Versatile vanilla vindicates vivacious flavor',
  ];

  let imgLinks = [
    'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlJTIwY3JlYW18ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974073-6dabdbbadac1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1588685232180-8bb64cb4837a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1612639267275-7c4ae6a12d84?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1587563974670-b5181b459b30?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1538489949601-cbabf5b0c105?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1579954115567-dff2eeb6fdeb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGljZSUyMGNyZWFtfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
  ];

  let container = document.querySelector('#container');
  function addImageElements() {
    imgLinks.forEach((d) => {
      let newImg = document.createElement('img');
      newImg.src = d;
      newImg.style.left = 100 * Math.random() + '%';
      newImg.style.top = 100 * Math.random() + '%';
      container.appendChild(newImg);
    });
  }
  addImageElements();
});
