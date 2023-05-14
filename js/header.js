




document.addEventListener("DOMContentLoaded", function() {
  let link = document.querySelector('.link-anchor');
let mainBtn = document.querySelector('.main-title-btn');
let links = document.querySelectorAll('.header__nav-link[href^="#"]');
let burger = document.querySelector('.burger-img');
let burgerBody = document.querySelector('.burger');
let burgerlinks = document.querySelectorAll('.burger-link[href^="#"]');

const linksArr = [link, mainBtn];
linksArr.push(...links, ...burgerlinks);
console.log(linksArr);

for (let i = 0; i < linksArr.length; i++) {
  linksArr[i].addEventListener('click', handleClick);
}

function handleClick(event) {
  event.preventDefault();
  burgerBody.classList.remove('burger-active');

  let targetId = this.getAttribute('href');
  let targetElement = document.querySelector(targetId);
  let headerHeight = document.querySelector('header').offsetHeight;
  let offset = targetElement.offsetTop - headerHeight;

  window.scrollTo({
    top: offset,
    behavior: 'smooth'
  });
}

burger.addEventListener('click', () => {
  burgerBody.classList.toggle('burger-active');
})
});






