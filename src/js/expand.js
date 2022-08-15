const expandArea = document.querySelectorAll('.expand-area')
const expandBtn = document.querySelectorAll('.expand-btn')
const expandBtnText = document.querySelectorAll('.expand-btn__text')
const hide = 'Скрыть'

/* Фунция  показать больше*/
const showMoreInfo = function (i, text) {
   // i - индекс expandArea., text - изначальный текст кнопки
   expandBtn[i].addEventListener('click', function () {
      expandArea[i].classList.toggle('expand-btn-active')
      expandBtn[i].classList.toggle('expand-btn--rotate')

      const changeBtnText = function () {
         if (expandBtnText[i].textContent === hide) {
            return (expandBtnText[i].textContent = text)
         } else if (expandBtnText[i].textContent === text) {
            return (expandBtnText[i].textContent = hide)
         }
      }
      changeBtnText(text)
   })
}
showMoreInfo(0, 'Читать далее')
showMoreInfo(1, 'Показать все')
showMoreInfo(2, 'Показать все')
