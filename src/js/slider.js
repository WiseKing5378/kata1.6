const slider = document.querySelectorAll('.slider')
let mySwiper = []

function mobileSlider() {
   for (let i = 0; i < slider.length; i++) {
      if (window.innerWidth < 768 && slider[i].dataset.mobile == 'false') {
         mySwiper[i] = new Swiper(slider[i], {
            slidesPerView: 'auto',
            slideClass: 'slider__card',
            wrapperClass: 'slider__wrapper',

            // pagination
            pagination: {
               el: '.swiper-pagination',
               clickable: true
            }
         })

         slider[i].dataset.mobile = 'true'
      }

      if (window.innerWidth >= 768) {
         slider[i].dataset.mobile = 'false'
         if (slider[i].classList.contains('swiper-initialized')) {
            mySwiper[i].destroy()
         }
      }
   }
}
mobileSlider()

window.addEventListener('resize', function () {
   mobileSlider()
})
