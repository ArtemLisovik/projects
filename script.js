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
  const elements = [...document.querySelectorAll('.object__wrapper-anim')];
  const titles = elements.slice(0, elements.length - 1);
  const footer = elements.slice(elements.length - 1);

  titles.forEach(item => elementScrollAnimation(item, '_active'));


  // ---------------------------------------------------Portfolio_photo_animation

  const portfolioItems = document.querySelectorAll('.img__animation-wrapper');

  portfolioItems.forEach(item => {
    elementScrollAnimation(item, '_anim');
  })


  // ---------------------------------------------------------------------My_skills_counter_anim

  const time = 1500;
  const step = 1;

  let counters = document.querySelectorAll('.counter__level'),
    countersParrent = document.querySelectorAll('.counter__item');

  for (let i = 0; i < countersParrent.length; i++) {
    elementScrollAnimation(countersParrent[i], `_reveal_counter`);
  }

  const counterReavel = document.addEventListener('scroll', () => {
    counters.forEach(counter => {
      countersParrent.forEach(parrent => {
        outNum(counter, '_reveal_counter', parrent);

      })
    })
  })



  function outNum(elem, activeClass, parrent) {
    if (parrent.classList.contains(activeClass)) {
      let n = 0;
      let t = Math.round(time / (elem.id / step));
      let interval = setInterval(() => {
        n = n + step;
        if (n == elem.id) {
          clearInterval(interval)
        }
        elem.innerHTML = n;
      }, t)
      counterReavel.removeEventListener('scroll' , )
    }
  }

  function elementScrollAnimation(element, cssClassModification) {
    const elementPosition = element.getBoundingClientRect().top + element.getBoundingClientRect().height / 1.5;
    document.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop < elementPosition) {
        if (document.documentElement.scrollTop + document.documentElement.clientHeight >= elementPosition) {
          element.classList.add(cssClassModification);
        }
      }
    })
  }


})
