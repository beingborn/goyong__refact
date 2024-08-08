


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
    var lastScrollTop = 0;

    $(window).scroll(function() {
      var scrollTop = $(this).scrollTop();
      var headerHeight = $('.header').outerHeight();
  
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