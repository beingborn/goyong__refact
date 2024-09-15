

  /**
   * 스크롤 이벤트 감지해서 헤더 고정 
   * or 숨기기
   * 
   * 1. 윈도우 스크롤 값 저장 
   * 2. 스크롤 값이 초기값 보다 커진다 => 스크롤을 내린다 true , headerHeight 보다 더 커졌을 때 header fixed
   * 3. 그 반대도 똑같이 진행
   * 4. 단 스크롤 높이 값이 헤더 높이 보다 작아진다면 다시 position relative 로 전환
   */


  $(document).ready(function() {
    let lastScrollTop = 0;

    $(window).scroll(function() {
      let scrollTop = $(this).scrollTop();
      let headerHeight = $('.header').outerHeight();
  
      if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
        // 스크롤을 내릴 때 헤더를 숨김 (단 스크롤이 헤더 높이보다 높을 때만)
        
        $('.header').css('transform', 'translateY(-100%)').removeClass('header__fixed');
      } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight){
        // 스크롤을 올릴 때 헤더를 고정
        $('.header').css('transform', 'translateY(0)').addClass('header__fixed');
      } 
      
      if (scrollTop <= headerHeight) {
        // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기
        $('.header').css('transform', 'translateY(0%)').removeClass('header__fixed');
      }
      
      lastScrollTop = scrollTop;
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 스크롤이 0일 때 음수로 가지 않게 함
    });
  });


  /**
   * 헤더 영역 토글 함수
   * 
   * 
   * 1. active 값에 따라 펼치기
   * 
   */

  $(document).ready(function() {
    const gnbTop__Menu = $('#gnb1 > .top__menu > li.plus > a');
    const gnbSub__Menu = $('#gnb1 .sub__menu > ul > li > a');

    let gnbOpenMenu;

    gnbTop__Menu.click(function() {
        gnbOpenMenu = $(this).parent(); 
        const isItOpen = gnbOpenMenu.hasClass('active');
     
        if (isItOpen) {
            gnbOpenMenu.removeClass('active');
            $('.gnb__bg').hide()

        } else {
            // 모든 상위 메뉴에서 'active' 클래스 제거
            gnbTop__Menu.parent().removeClass('active');
            // 현재 클릭된 상위 메뉴에 'active' 클래스 추가
            gnbOpenMenu.addClass('active');
            $('.gnb__bg').show()
        }
        
        const firstSub__MenuItem = gnbOpenMenu.find('.sub__menu ul li:first-child a');
        if (firstSub__MenuItem.length > 0) {
            gnbOpenMenu.siblings().find('.sub__menu ul li').removeClass('active');
            firstSub__MenuItem.parent().addClass('active');
        }
        });
        gnbSub__Menu.click(function() {
        const gnbOpenSub__Menu = $(this).parent();
        gnbSub__Menu.parent().removeClass('active');
        gnbOpenSub__Menu.addClass('active');
        });


        $('.gnb__bg').click(function(){
          gnbOpenMenu.removeClass('active');
          $(this).hide();
        })
    });

  // 모바일 GNB 이벤트
  $('#gnb2 .menu__wrap a').eq(0).addClass('active')
  $('#gnb2 .menu__wrap a').click(function(){
    $('#gnb2 .menu__wrap a').removeClass('active')
    $(this).addClass('active')
  })

  // 모바일 GNB 스크롤 이벤트
    $('#gnb2 .menu__wrap a').on('click', function(event) {
      event.preventDefault(); 
      var targetId = $(this).data('target');
      var targetElement = $('#' + targetId);
      var offsetY = targetElement.position().top;
      $('.submenu__wrap').css('transform', 'translateY(-' + offsetY + 'px)');
    });


  // 모달 닫기 이벤트 핸들러
  $('.modal__close button').click(function() {
      $('.modal, .modal__bg').hide();  // 모든 모달 요소를 숨김
  });

  /** 메뉴 클릭 시 gnb2 메뉴 토글 */
  $('.hamburger').on('click', function(){
    $('#gnb2').addClass('active');
    $('body').css('overflow','hidden')
  })

  $('.gnb__close').click(function(){
    $('#gnb2').removeClass('active')
    $('body').css('overflow','')
  })

  // 메뉴 권한 애니메이션 높이 제어
$(document).ready(function(){
  let menuList = $('.menu-wrap')
  let menuHeight = menuList.innerHeight();
  menuList.css('height', menuHeight)
})

// 테이블 페이지 네이션 전환
$(document).ready(function(){
  let tablePagination = $('.pagination .page-link') 
  tablePagination.click(function (e) {
  e.preventDefault(); // 링크 기본 동작 방지

  $(this).addClass("active");
  tablePagination.not($(this)).removeClass('active')
});
tablePagination.eq(0).addClass('active')
})

/**
 *  table 버튼 클릭 시
 *  active class를 토글하여
 *  강조 색상을 지정 (css에 따로 지정)
 *  모든 테이블 페이지 네이션에 적용
 */

$(document).ready(function(){
  let tablePagination = $('.pagination .page-link') 
  tablePagination.click(function (e) {
  e.preventDefault(); // 링크 기본 동작 방지
  $(this).addClass("active");
  tablePagination.not($(this)).removeClass('active')
});
tablePagination.eq(0).addClass('active')
})

$(document).ready(function() {
  setModalWidth();
  $('[data-target]').click(function() {  // 모달 열기 이벤트 핸들러
      const targetModal = $(this).data('target');
      setModalWidth(targetModal)
      $(targetModal).show();
      $('.modal__bg').show();
  });
  $('.modal__close button').click(function() {
      $('.modal, .modal__bg').hide();  
  });
  $('.modal__hide').click(function(){
      const targetModal = $(this).closest('.modal')
      console.log(targetModal)
      targetModal.hide();
      $('.modal__bg').hide();
  })
  // 모달의 너비를 부모 요소에 맞게 설정하는 함수
  function setModalWidth(targetModal) {
      const modalWidth = $('.main__inner').innerWidth() - 20;
      $(targetModal).css('width', modalWidth);
  }
  $('.modal__bg').hide();
});
