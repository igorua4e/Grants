$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});

const blogBtn = document.querySelectorAll('.blog__buttons-btn');


blogBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      blogBtn.forEach(function (item) {
         item.classList.remove('active')
      })
      item.classList.add('active')
   })
})