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

  countersParrent.forEach(parrent => {
    const letir = setInterval(() => {
      if (parrent.classList.contains('_reveal_counter')) {
        counters.forEach(counter => {
          outNum(counter);
          clearInterval(letir);
        })
      }
    }, 10);
  })

 



  function outNum(elem) {
      let n = 0;
      let t = Math.round(time / (elem.id / step));
      let interval = setInterval(() => {
        n = n + step;
        if (n == elem.id) {
          clearInterval(interval)
        }
        elem.innerHTML = n;
      }, t)
  }

  function elementScrollAnimation (element, cssClassModification) {
    document.addEventListener('scroll', (event) => {
      event.preventDefault();
      const distance = element.getBoundingClientRect();
      if (distance.top + (window.innerHeight / 8) < window.innerHeight && distance.bottom - (window.innerHeight / 8) > 0){
        element.classList.add(cssClassModification);
      }
    })
  }

})
