

// 배너 스와이퍼
var swiper = new Swiper(".bannerSwiper", {
  slidesPerView : 1,
  loop: true,
  loopAdditionalSlides : 1,


  navigation: {
    nextEl: ".banner__btn .swiper-button-next",
    prevEl: ".banner__btn .swiper-button-prev",
  },

  breakpoints: {

    767: {
      slidesPerView : 3,
      spaceBetween: 20,
    },

    1080: {
      slidesPerView : 3,
      spaceBetween: 20,
    },

    1440: {
      slidesPerView : 3,
      spaceBetween: 32,
    }
  }

});










$(document).on('keydown', function(event) {
    if (event.key === 'Tab') {
        console.log("탭 키 눌렸음");

        // 모든 버튼들 선택
        let errorButtons = $('.main__swiper .swiper-slide .item .item__wrap .btn__group button');

        // 현재 포커스된 요소
        let focusedElement = $(document.activeElement);

        // 9번째에서 12번째 버튼에 포커스가 있을 때
        errorButtons.each(function(index) {
            if (focusedElement.is(errorButtons.eq(index))) {
                if (index >= 9 && index < 13) {
                    console.log(index + "번째 버튼입니다!");

                    setTimeout(function(){
                        // errorButtons.eq(index + 1).focus();
                        $('#last__prev__income').focus();
                    }, 50)
                }
            }
        });
    }
});




// 메인 스와이퍼

  var swiper = new Swiper(".mainSwiper", {
    slidesPerView : 'auto',
    loop: true,               
    loopAdditionalSlides : 1,
    centeredSlides: false,

    autoplay: {
      delay: 3000,
    },

    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {  
     1080: {
      slidesPerView : 'auto',
     }, 
      1440: {
        slidesPerView : 'auto',
        centeredSlides: false, 
      }
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },

    on : {
      init : function(){
      },

    }
  });


    /** 
   * autoplay 토글 
   * 접근성 FOCUS, ENTER, HOVER
   */



  // document.addEventListener('DOMContentLoaded', function() {
    const img = document.querySelector('.swiper__pause img');
    let slideBtns = $('.main__swiper .btn__group button')

    const updateImage = (isPlaying) => {
      img.src = isPlaying ? 'img/pause.png' : 'img/play.png';
    };
  
    img.addEventListener('click', function() {
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
        updateImage(false);
      } else {
        swiper.autoplay.start();
        updateImage(true);
      }
    });
  
    img.addEventListener('mouseenter', function() {
        swiper.autoplay.stop();
        updateImage(false);
    });
  
    img.addEventListener('mouseleave', function() {
      updateImage(swiper.autoplay.running);
    });
  
    img.addEventListener('focus', function() {
      updateImage(false);
    });
  
    img.addEventListener('blur', function() {
      updateImage(swiper.autoplay.running);
    });



  // });


  /**
   * 메인 배너 버튼 
   * 변수로써 각 선언
   * this의 z-index값 4로 변경, color white, background-color == 003675로 변경
   * this.not 은 z-index 값 3으로 변경 color = #1d1d1d backgroundcolor = white로 변경
   * 
   * 주의 사항 slide active의 포함된 버튼을 누를 시와 아닌 것을 누를 때의 color 및 background를 각각 다르게 지정시켜주어야 한다. 
   * 1번 문제 : 액티브 슬라이드가 다른 코드로 넘어갔을 때를 인식하지 못한다. 즉 클릭했을 때만 parentHasSlideActive를 판단하기 때문에
   */



  var slide = $('.main__swiper .swiper-slide')

  $(document).ready(function() {
    $('.main__swiper .swiper-slide').each(function(index,slide) {
      // 각 슬라이드 내의 버튼 요소를 선택
      let buttons = $(slide).find('.btn__group button');
  
      // 버튼 클릭 이벤트 핸들러 추가
      buttons.click(function() {
        // 클릭된 버튼에 active--style 클래스 추가
        $(this).addClass('active--style');
  
        // 클릭되지 않은 동일한 슬라이드 내의 다른 버튼에서 active--style 클래스 제거
        buttons.not(this).removeClass('active--style');
      });
    });
  });




