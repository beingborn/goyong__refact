$(document).ready(function() {
    // depth-1 항목 클릭 이벤트 설정
    $('.menu__depth-1 > a').click(function(e) {
        e.preventDefault(); // 링크 기본 동작 방지

        // 클릭된 depth-1 항목의 부모(li 요소)를 active 클래스로 토글
        let $depth1Item = $(this).parent();
        console.log($depth1Item)
        // 다른 depth-1 항목의 active 클래스 제거 및 depth-2 항목 숨기기
        // $depth1Item.toggleClass('active').find('.menu__depth-2').slideToggle();
    });

    $('.menu__depth-2 > .depth__2-title').click(function(e){
        e.preventDefault();

        let $depth2Item = $(this).parent();
        console.log($depth2Item)

        // $depth2Item.toggleClass('active').find('.menu__depth-3').slideToggle();
    })

});


// 기본 css에 innerHeight로 값 주기 
// lnb height 기본값이 auto 여서 slideToggle 기능 수행 시 document가 함께 늘어남. 
// 그래서 innerHeight을 이용해서 값을 유동적으로 지정해줘서 그 안에서만 slide되게 지정함

// $(document).ready(function(){
//     let menuWrap = $('.menu-list')
//     let menuHeight = menuWrap.innerHeight();
//     menuWrap.css('height', menuHeight)
// })

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

        // let currentIndex = $(this).index();
        // $(this).addClass("active");
        // $('.menu__depth-2').not($(this)).removeClass('active')

    })
    $('.menu__depth-2').eq(0).addClass('active');
})





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
   





let menuAuth = $('.menu__auth-input') 

console.log(menuAuth)

$('.menu__auth-input').click(function(){
    console.log("클릭되었습니다.")
})




