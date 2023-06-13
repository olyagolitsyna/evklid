let swiper = new Swiper('.swiper', {

  slidesPerView: 1,
  slidesPerGroup: 1,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});

/*acordion*/

document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  openOnInit: [0],
    collapse: true
});
})

/*burger*/

let burger = document.querySelector(".header__burger");
let menu = document.querySelector(".header__nav");
let menulinks = menu.querySelectorAll(".nav__link");

burger.addEventListener("click",

function () {

    burger.classList.toggle("burger--active");

    menu.classList.toggle("header__nav--active");

    document.body.classList.toggle("stop-scroll");
})

menulinks.forEach(function(el){
    el.addEventListener("click", function() {

        burger.classList.remove("burger--active");

        menu.classList.remove("header__nav--active");

        document.body.classList.remove("stop-scroll")
    })
})

/*serch*/

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('header__form').classList.add('header__form-show')
  })

  document.getElementById('header__btn-close').addEventListener('click', (e) => {
    document.getElementById('header__form').classList.remove('header__form-show')
  })
})

/*tabs*/

let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(btnElement) {
  btnElement.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) { btn.classList.remove('tabs-nav__btn--active')});
    e.currentTarget.classList.add('tabs-nav__btn--active');

    tabsItem.forEach(function(tabsBtn) { tabsBtn.classList.remove('tabs-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});





