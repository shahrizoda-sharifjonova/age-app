import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

const menu = document.querySelector('.menu');
const menuBtn = document.querySelectorAll('.menu-btn');
const menuClose = document.querySelector('.menu__close');
const headerList = document.querySelector('.header__list');
const body = document.querySelector('body');

menu.addEventListener('click', (e)=>{
    menu.classList.toggle('active')
    menuBtn.forEach(el => {
        el.classList.remove('active')
        el.classList.toggle('hidden')
    });
    menuClose.classList.toggle('active')
    headerList.classList.toggle('active')
    body.classList.toggle('hidden')
})

