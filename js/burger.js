let burger = document.querySelector('.burger-img');
let burgerBody = document.querySelector('.burger');

burger.addEventListener('click', () => {
    burgerBody.classList.toggle('burger-active');
  })