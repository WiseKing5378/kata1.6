/*Модальнке окна*/
const modalCall = document.querySelector('.modal-call')
const modalFeedback = document.querySelector('.modal-feedback')
const modalMenu = document.querySelector('.left-menu')
const overlay = document.querySelector('.overlay')

/*Кнопки */
const callBtn = document.querySelectorAll('.call-btn')
const feedbackBtn = document.querySelectorAll('.feedback-btn')
const menuBtn = document.querySelector('.menu-btn')
const closeModal = document.querySelectorAll('.modal__close-btn')
const closeMenu = document.querySelector('.close-menu')

/*Заказать звонок*/
for (let i = 0; i < callBtn.length; i++) {
   callBtn[i].addEventListener('click', function () {
      modalCall.classList.remove('modal__hidden')
      overlay.classList.remove('overlay-hidden')

      if (window.innerWidth < 1440) {
         modalMenu.classList.add('left-menu__hidden')
      }
   })
}
closeModal[1].addEventListener('click', function () {
   modalCall.classList.add('modal__hidden')
   overlay.classList.add('overlay-hidden')
})

/*Обратная связь */
for (let i = 0; i < feedbackBtn.length; i++) {
   feedbackBtn[i].addEventListener('click', function () {
      modalFeedback.classList.remove('modal__hidden')
      overlay.classList.remove('overlay-hidden')

      if (window.innerWidth < 1366) {
         modalMenu.classList.add('left-menu__hidden')
      }
   })
}
closeModal[0].addEventListener('click', function () {
   modalFeedback.classList.add('modal__hidden')
   overlay.classList.add('overlay-hidden')
})

/*Меню */
menuBtn.addEventListener('click', function () {
   modalMenu.classList.remove('left-menu__hidden')
   overlay.classList.remove('overlay-hidden')
})
closeMenu.addEventListener('click', function () {
   modalMenu.classList.add('left-menu__hidden')
   overlay.classList.add('overlay-hidden')
})

overlay.addEventListener('click', function () {
   modalCall.classList.add('modal__hidden')
   modalFeedback.classList.add('modal__hidden')
   modalMenu.classList.add('left-menu__hidden')
   overlay.classList.add('overlay-hidden')
})
