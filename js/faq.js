$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});


const headers = document.querySelectorAll('.faq__body-item-title');
headers.forEach(function (item) {
   item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('opened');
   })
});

const animTitle = document.querySelectorAll('.faq__body-item-title');
animTitle.forEach(function (item) {
   item.addEventListener('click', function () {
      item.classList.toggle('active')
   })
})