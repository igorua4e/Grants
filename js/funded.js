//підключення бургера
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});


const showComleted = document.querySelector('.checkbox-label');
const notShowItems = document.querySelectorAll('.no-decor');

showComleted.addEventListener('click', function () {
   showComleted.classList.toggle('active');
   notShowItems.forEach(function (item) {
      item.classList.toggle('not-show');
   })
})