$(document).ready(function() {
    // depth-1 항목 클릭 이벤트 설정
    $('.menu__depth-1 > a').click(function(e) {
        e.preventDefault(); // 링크 기본 동작 방지

        // 클릭된 depth-1 항목의 부모(li 요소)를 active 클래스로 토글
        var $depth1Item = $(this).parent();

        // 다른 depth-1 항목의 active 클래스 제거 및 depth-2 항목 숨기기
        // $('.menu__depth-1').not($depth1Item).removeClass('active').find('.menu__depth-2').slideUp();

        // 클릭된 항목의 depth-2 항목 슬라이드 토글 및 active 클래스 토글
        $depth1Item.toggleClass('active').find('.menu__depth-2').slideToggle();
    });
});


// 기본 css에 innerHeight로 값 주기 
// lnb height 기본값이 auto 여서 slideToggle 기능 수행 시 document가 함께 늘어남. 
// 그래서 innerHeight을 이용해서 값을 유동적으로 지정해줘서 그 안에서만 slide되게 지정함

$(document).ready(function(){
    let lnb = $('.main__content .sub .lnb')
    let lnbHeight = lnb.innerHeight();

    lnb.css('height', lnbHeight)
})



$(document).ready(function(){
    let tablePagination = $('.pagination .page-link') 


    tablePagination.click(function (e) {
    e.preventDefault(); // 링크 기본 동작 방지



    $(this).addClass("active");
    tablePagination.not($(this)).removeClass('active')
  });

  tablePagination.eq(0).addClass('active')

})



$(document).ready(function(){
    $('.menu__depth-2').click(function(e){
        e.preventDefault(); // 링크 기본 동작 방지

        let currentIndex = $(this).index();
        $(this).addClass("active");
        $('.menu__depth-2').not($(this)).removeClass('active')
        $('.auth__wrap').hide().eq(currentIndex).show();
    })

    $('.menu__depth-2').eq(0).addClass('active');
    $('.auth__wrap').hide().eq(0).show();
})


/**
 * 콘텐츠간 높이 구하기 위해 

        부모 wrap scrollHeight 값에서 해당 엘리먼트 값 간의 차이 구해서 
        오른쪽 radio wrap들에게 동적으로 정확한 값 주기 // radio__wrap은 position absolute 처리되어있음
        만약 depth2의 offsetTop을 뺄경우에는 - 2 값을 해주어야한다.

 * 
 * 
 */



    // 임시

    $(document).ready(function(){
        for (i = 0; i <= 21; i++) {
            if(i % 2 == 0 ){
                $('.manager__auth .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
            }
        }

    })



    let manageAuthScroll = $('.manager__auth').offset().top;

    // 메뉴들을 배열로 정리
    let menus = [
    $('.manager__auth .depth__1__tree').eq(0).offset().top,
    $('.manager__auth .depth__2__tree').eq(0).offset().top,
    $('.manager__auth .depth__2__tree').eq(1).offset().top,
    $('.manager__auth .depth__2__tree').eq(2).offset().top,
    $('.manager__auth .depth__2__tree').eq(3).offset().top,
    $('.manager__auth .depth__1__tree').eq(1).offset().top,
    $('.manager__auth .depth__2__tree').eq(4).offset().top,
    $('.manager__auth .depth__2__tree').eq(5).offset().top,
    $('.manager__auth .depth__1__tree').eq(2).offset().top,
    $('.manager__auth .depth__2__tree').eq(6).offset().top,
    $('.manager__auth .depth__2__tree').eq(7).offset().top
    ];



    menus.forEach((menuOffsetTop, index) => {
    let adjustment = 0;

    // depth__2__tree일 경우 -2 값을 적용
    if ($('.manager__auth .depth__2__tree').is(`:eq(${index})`)) {
        adjustment = -2;
    }

    $('.manager__auth .radio__wrap').eq(index).css('margin-top', (menuOffsetTop - manageAuthScroll + adjustment));
});





$(document).ready(function(){
    for (i = 0; i <= 21; i++) {
        if(i % 2 == 0 ){
            $('.union__auth .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

})





let unionAuthScroll = $('.union__auth').offset().top;

// 메뉴들을 배열로 정리
let unionMenus = [
$('.union__auth .depth__1__tree').eq(0).offset().top,
$('.union__auth .depth__2__tree').eq(0).offset().top,
$('.union__auth .depth__2__tree').eq(1).offset().top,
$('.union__auth .depth__2__tree').eq(2).offset().top,
$('.union__auth .depth__2__tree').eq(3).offset().top,
$('.union__auth .depth__1__tree').eq(1).offset().top,
$('.union__auth .depth__2__tree').eq(4).offset().top,
$('.union__auth .depth__2__tree').eq(5).offset().top,
$('.union__auth .depth__1__tree').eq(2).offset().top,
$('.union__auth .depth__2__tree').eq(6).offset().top,
$('.union__auth .depth__2__tree').eq(7).offset().top
];



unionMenus.forEach((menuOffsetTop, index) => {
let adjustment = 0;

// depth__2__tree일 경우 -2 값을 적용
if ($('.union__auth .depth__2__tree').is(`:eq(${index})`)) {
    adjustment = -2;
}

$('.union__auth .radio__wrap').eq(index).css('margin-top', (menuOffsetTop - unionAuthScroll + adjustment));
});



// 회계공시 조합
$(document).ready(function(){
    for (i = 0; i <= 21; i++) {
        if(i % 2 == 0 ){
            $('.union__auth .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

})
   




