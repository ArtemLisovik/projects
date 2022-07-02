'use strict'

document.addEventListener('DOMContentLoaded', () => {

  const burgerBtn = document.querySelector('.header__menu-icon'),
    burgerMenu = document.querySelector('.header__nav'),
    burgerBtnElement = document.querySelectorAll('.menu-icon__element'),
    mainBody = document.querySelector('body');

  burgerBtn.addEventListener('click', (e) => {
    burgerMenu.classList.toggle('_active');
    burgerBtnElement.forEach(item => {
      item.classList.toggle('_active')
    });
    mainBody.classList.toggle('_lock')
  });
  // --------------------------------------------------
  const elements = [...document.querySelectorAll('.title')];
  const titles = elements.slice(0, elements.length - 1);
  const footer = elements.slice(elements.length - 1);

  titles.forEach(item => elementScrollAnimation(item, '_text-anim'));

  // window.addEventListener('scroll', (e) => {

  //   titles.forEach(title => {

  //     const titlePosition = title.getBoundingClientRect().bottom;
  //     if (titlePosition <= document.documentElement.clientHeight) {
  //       title.classList.add('_text-anim')
  //     }
  //   })

  //   if (document.documentElement.scrollTop + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 50) {
  //     footer[0].classList.add('_text-anim')
  //   }
  // })

  // ---------------------------------------------------Portfolio_photo_animation

  const portfolioItems = document.querySelectorAll('.portfolio__element');

  portfolioItems.forEach(item => {
    elementScrollAnimation(item, '_img_anim');
  })

  function elementScrollAnimation (element, cssClassModification) {
    const elementPosition = element.getBoundingClientRect().bottom - element.getBoundingClientRect().height / 2;
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop < elementPosition) {
        if(document.documentElement.scrollTop + document.documentElement.clientHeight >= elementPosition) {
          element.classList.add(cssClassModification);
        }
      }
    })
  }
})
