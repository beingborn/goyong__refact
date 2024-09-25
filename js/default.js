/**
 * 스크롤 이벤트 감지해서 헤더 고정
 * or 숨기기
 *
 * 1. 윈도우 스크롤 값 저장
 * 2. 스크롤 값이 초기값 보다 커진다 => 스크롤을 내린다 true , headerHeight 보다 더 커졌을 때 header fixed
 * 3. 그 반대도 똑같이 진행
 * 4. 단 스크롤 높이 값이 헤더 높이 보다 작아진다면 다시 position relative 로 전환
 */

$(document).ready(function () {
  let lastScrollTop = 0;

  $(window).scroll(function () {
    let scrollTop = $(this).scrollTop();
    let headerHeight = $(".header").outerHeight();

    if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
      // 스크롤을 내릴 때 헤더를 숨김 (단 스크롤이 헤더 높이보다 높을 때만)

      $(".header")
        .css("transform", "translateY(-100%)")
        .removeClass("header__fixed");
    } else if (scrollTop < lastScrollTop || scrollTop <= headerHeight) {
      // 스크롤을 올릴 때 헤더를 고정
      $(".header").css("transform", "translateY(0)").addClass("header__fixed");
    }

    if (scrollTop <= headerHeight) {
      // 단 스크롤 높이 값이 headerHeight값보다 작아진다면 relative로 다시 전환하기
      $(".header")
        .css("transform", "translateY(0%)")
        .removeClass("header__fixed");
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

$(document).ready(function () {
  const gnbTop__Menu = $("#gnb1 > .top__menu > li.plus > a");
  const gnbSub__Menu = $("#gnb1 .sub__menu > ul > li > a");

  let gnbOpenMenu;

  gnbTop__Menu.click(function () {
    gnbOpenMenu = $(this).parent();
    const isItOpen = gnbOpenMenu.hasClass("active");

    if (isItOpen) {
      gnbOpenMenu.removeClass("active");

      $(".gnb__bg").hide();
    } else {
      gnbTop__Menu.parent().removeClass("active");
      gnbSub__Menu.parent().removeClass("active");
      gnbOpenMenu.addClass("active");
      $(".gnb__bg").show();
    }

    const firstSub__MenuItem = gnbOpenMenu.find(
      ".sub__menu ul li:first-child a"
    );
    if (firstSub__MenuItem.length > 0) {
      gnbOpenMenu.siblings().find(".sub__menu ul li").removeClass("active");
      firstSub__MenuItem.parent().addClass("active");
    }
  });
  gnbSub__Menu.click(function () {
    const gnbOpenSub__Menu = $(this).parent();
    gnbSub__Menu.parent().removeClass("active");
    gnbOpenSub__Menu.addClass("active");
  });

  $(".gnb__bg").click(function () {
    gnbOpenMenu.removeClass("active");
    $(this).hide();
  });
});

// 모바일 GNB 이벤트
$("#gnb2 .menu__wrap a").eq(0).addClass("active");
$("#gnb2 .menu__wrap a").click(function () {
  $("#gnb2 .menu__wrap a").removeClass("active");
  $(this).addClass("active");
});

// 모바일 GNB 스크롤 이벤트
// $("#gnb2 .menu__wrap a").on("click", function (event) {
//   event.preventDefault();
//   var targetId = $(this).data("target");
//   var targetElement = $("#" + targetId);
//   var offsetY = targetElement.position().top;
//   $(".submenu__wrap").css("transform", "translateY(-" + offsetY + "px)");
// });




function submenuOffsetUpdate(){
  $('.submenu__wrap .submenu').each(function() {
    var $node = $(this);
    var offsetTop = $node.offset().top; 
    $node.attr('data-offset-top', offsetTop);
  });  

  mobileGnbUpdate();
}

function submenu__init(){
  submenuOffsetUpdate()
}


// 스크롤 이벤트 - submenu__wrap에서 스크롤 시 active 클래스 변경
function mobileGnbUpdate() {
  var scrollTop = $(this).scrollTop();   // 스크롤 위치 확인
  $($('.submenu__wrap .submenu').get().reverse()).each(function(index){
      var $node = $(this);
      let nodeTop = $node.scrollTop();
      var offsetTop = parseInt($node.attr('data-offset-top'))
      // 스크롤 위치가 현재 ul의 위치에 있을 경우
      if (scrollTop >= offsetTop) {
          // 기존 active 클래스 제거
          $("#gnb2 .menu__wrap a").removeClass("active");
          // 해당 인덱스의 메뉴에 active 클래스 추가
          $("#gnb2 .menu__wrap a").eq(index).addClass("active");
          return false; 
      }
  });
};

// 초기화하기
submenu__init();

$('#gnb2 .submenu__wrap').scroll(mobileGnbUpdate);

$(document).ready(function() {
  let submenuWrap = $('#gnb2 .submenu__wrap')
  // 메뉴 항목 클릭 이벤트
  $('.menu__wrap a').click(function(event) {
      event.preventDefault(); // 기본 링크 동작 방지
      var target = $(this).data('target');
      // 해당 ID를 가진 요소의 위치 계산
      var targetOffset = $('#' + target).position().top + submenuWrap.scrollTop(); 
      // submenuWrap 안에서 부드럽게 스크롤 이동
      submenuWrap.animate({ scrollTop: targetOffset}, 500); // 500ms 동안 부드럽게 스크롤
  });
});

// 모바일 GNB 스크롤 값 바인딩
  let lastChild = document.querySelector('.gnb__body .submenu__wrap > ul:last-child');
  let wholeHeight = document.querySelector('#gnb2 .submenu__wrap').scrollHeight;
  let lastChildHeight = document.querySelector('.gnb__body .submenu__wrap > ul:last-child').scrollHeight;
  let difference = wholeHeight - lastChildHeight;
  if (lastChild) {
      lastChild.style.paddingBottom = difference + 'px';  
  }




// 모달 닫기 이벤트 핸들러
$(".modal__close button").click(function () {
  $(".modal, .modal__bg").hide(); // 모든 모달 요소를 숨김
});

/** 메뉴 클릭 시 gnb2 메뉴 토글 */
$(".hamburger").on("click", function () {
  $("#gnb2").addClass("active");
  $("body").css("overflow", "hidden");
});

$(".gnb__close").click(function () {
  $("#gnb2").removeClass("active");
  $("body").css("overflow", "");
});

// 메뉴 권한 애니메이션 높이 제어
$(document).ready(function () {
  let menuList = $(".menu-wrap");
  let menuHeight = menuList.innerHeight();
  menuList.css("height", menuHeight);
});

// 테이블 페이지 네이션 전환
$(document).ready(function () {
  let tablePagination = $(".pagination .page-link");
  tablePagination.click(function (e) {
    e.preventDefault();

    $(this).addClass("active");
    tablePagination.not($(this)).removeClass("active");
  });
  tablePagination.eq(0).addClass("active");
});

/**
 *  table 버튼 클릭 시
 *  active class를 토글하여
 *  강조 색상을 지정 (css에 따로 지정)
 *  모든 테이블 페이지 네이션에 적용
 */

$(document).ready(function () {
  let tablePagination = $(".pagination .page-link");
  tablePagination.click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지
    $(this).addClass("active");
    tablePagination.not($(this)).removeClass("active");
  });
  tablePagination.eq(0).addClass("active");
});

$(document).ready(function () {
  setModalWidth();
  $("[data-target]").click(function () {
    // 모달 열기 이벤트 핸들러
    const targetModal = $(this).data("target");
    setModalWidth(targetModal);
    $(targetModal).show();
    $(".modal__bg").show();
  });
  $(".modal__close button").click(function () {
    $(".modal, .modal__bg").hide();
  });
  $(".modal__hide").click(function () {
    const targetModal = $(this).closest(".modal");
    console.log(targetModal);
    targetModal.hide();
    $(".modal__bg").hide();
  });
  // 모달의 너비를 부모 요소에 맞게 설정하는 함수
  function setModalWidth(targetModal) {
    const modalWidth = $(".main__inner").innerWidth() - 20;
    $(targetModal).css("width", modalWidth);
  }
  $(".modal__bg").hide();
});

// 도움말 버튼 클릭 시 창 팝업
$(".info__tip").on("click", function (e) {
  e.stopPropagation();
  $(this).toggleClass("active");
  $(this).next(".tooltip__layer").toggleClass("active");
});
$(".tooltip__layer .info__close__btn").on("click", function (e) {
  e.stopPropagation();
  $(this).closest(".tooltip__layer").removeClass("active");
  $(this).closest(".tooltip__layer").prev(".info__tip").removeClass("active");
});

// 업로드 임시 이벤트 제거
$(".btn__upload").click(function (e) {
  e.preventDefault();
});

        // 비밀번호 숨기기 보이기 코드, 버튼 클릭 시. text 박스로 바꿈 나중 회원가입 페이지등 많을 것을 대비해 
        $(document).ready(function(){                      
          $('.secret__Check').each(function(){
              const pwInput = $(this).find('.password__input')
              const showButton = $(this).find('.icon__pw-visible')
              const showIcon = $(this).find('.show__icon')
              showButton.on('click', function() {
              const type = pwInput.attr('type') === 'password' ? 'text' : 'password';
              pwInput.attr('type', type);
              const iconSrc = type === 'password' ? 'img/icon__see.svg' : 'img/icon__see-visible.svg';
              showIcon.attr('src', iconSrc);
          });
          })   
      })