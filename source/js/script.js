const pageHeaderBtn = document.querySelector('.page-header__btn');
const pageHeaderItemBurger = document.querySelector('.page-header__item-burger');
const navigation = document.querySelector('.nav');

navigation.classList.remove('nav--nojs');
pageHeaderBtn.classList.remove('page-header__btn--hidden');

pageHeaderBtn.onclick = function () {
navigation.classList.toggle('nav--active');
pageHeaderBtn.classList.toggle('page-header__btn-close');
pageHeaderItemBurger.classList.toggle('page-header__item-close');
};


