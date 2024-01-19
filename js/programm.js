//підключення бургера
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});

const programBtn = document.querySelectorAll('.program__buttons-btn');


programBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      programBtn.forEach(function (item) {
         item.classList.remove('active')
      })
      item.classList.add('active');
   });


})