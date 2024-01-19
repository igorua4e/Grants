'use strict';
//підключення бургера
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__body-menu').toggleClass('active');
      $('body').toggleClass('lock')
   })
});

$(document).ready(function () {
   $('.built__slider').slick({
      slidesToShow: 3,
      centerMode: true,
      responsive: [
         {
            breakpoint: 768,
            settings: {
               centerMode: false,
               slidesToShow: 1
            }
         },
      ]
   });
});


const headers = document.querySelectorAll('.quest__body-item-title');
headers.forEach(function (item) {
   item.addEventListener('click', function () {
      this.nextElementSibling.classList.toggle('opened');
   })
});

//==============================================
//for section funded




//=============================================
//for section discover
const cardItem = document.querySelectorAll('.discover__cards-item');

const discoverBtn = document.querySelectorAll('.discover-btn');

const allBtn = document.querySelector('.all-btn');
const openBtn = document.querySelector('.open-btn');
const fundedBtn = document.querySelector('.funded-btn');
const completedBtn = document.querySelector('.completed-btn');


const cardFunded = document.querySelectorAll('.funded');
const cardOpen = document.querySelectorAll('.open');
const cardCompleted = document.querySelectorAll('.completed');




discoverBtn.forEach(function (item) {
   item.addEventListener('click', function () {
      discoverBtn.forEach(function (item) {
         item.classList.remove('active');
      });
      item.classList.add('active');


   })

})


openBtn.addEventListener('click', function () {
   cardFunded.forEach(function (item) {
      item.classList.add('not-show')
   })
   cardCompleted.forEach(function (item) {
      item.classList.add('not-show')
   })
   cardOpen.forEach(function (item) {
      item.classList.remove('not-show')
   })
})

allBtn.addEventListener('click', function () {
   cardFunded.forEach(function (item) {
      item.classList.remove('not-show')
   })
   cardCompleted.forEach(function (item) {
      item.classList.remove('not-show')
   })
   cardOpen.forEach(function (item) {
      item.classList.remove('not-show')
   })
   cardOpen.forEach(function (item) {
      item.classList.remove('not-show')
   })
})

fundedBtn.addEventListener('click', function () {
   cardOpen.forEach(function (item) {
      item.classList.add('not-show')
   })
   cardCompleted.forEach(function (item) {
      item.classList.add('not-show')
   })
   cardFunded.forEach(function (item) {
      item.classList.remove('not-show')
   })
})

completedBtn.addEventListener('click', function () {
   cardOpen.forEach(function (item) {
      item.classList.add('not-show')
   })
   cardCompleted.forEach(function (item) {
      item.classList.remove('not-show')
   })
   cardFunded.forEach(function (item) {
      item.classList.add('not-show')
   })
})

//========================================================




