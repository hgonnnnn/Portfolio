$(function () {

  /* 인트로 */
  // setTimeout(() => $('.intro').removeClass('on'), 3000);
  setTimeout(() => $('.intro').addClass('off'), 3000);
  setTimeout(() => $('.intro p').addClass('on'), 500);
  setTimeout(() => $('.intro strong').addClass('on'), 1500);

  /* 인트로 시작 시 스크롤 막기 */
  $('body').addClass('on');
  $('body').on('scroll touchmove mousewheel', function () {
      return false;
  });
  setTimeout(() =>
      $('body').off('scroll touchmove mousewheel'), 3000);
  setTimeout(() =>
      $('body').removeClass('on'), 3000);

  /* 스크롤 시 콘텐츠 나타내기 */
  window.addEventListener('scroll', function () {
      let about = document.querySelector('.about');
      let contact = document.querySelector('.contact');
      let scrollBar = window.scrollY;

      if ($(window).width() >= 1024) {
          if (500 < scrollY) {
              about.classList.add('scroll_on');
          } else {
              about.classList.remove('scroll_on')
          }
          // if (5000 < scrollY) {
          //     contact.classList.add('scroll_on');
          // } else {
          //     contact.classList.remove('scroll_on');
          // }
      }
      // console.log(scrollBar);
      if ($(window).width() < 1024) {
          about.classList.add('scroll_on');
          // contact.classList.add('scroll_on');
      }
  });

  /* up버튼 */
  $('.up_btn').click(function () {
      $('html,body').animate({
          scrollTop: 0
      }, 700)
  });
  $(window).scroll(function () {
      if ($(window).scrollTop() > 0) {
          $('.up_btn').css({
              'display': 'block'
          })
          $('.main_btn').removeClass('on');
      } else {
          $('.up_btn').css({
              'display': 'none'
          })
          $('header').removeClass('on');
          $('.gnb li').removeClass('on');
          $('.main_btn').addClass('on');
      }
  });

  /* 슬라이드 */
  var swiper = new Swiper(".design_slide", {
      watchSlidesProgress: true,
      freeMode: false,
      enteredSlides: true,
      speed: 8e3,
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      loop: true,
      // pauseOnHover: true,
      allowTouchMove: true,
      slidesPerView: 2,
      breakpoints: {
          620: {
              slidesPerView: 3,
          },
      },
  });
}); //script end