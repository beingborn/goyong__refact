

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


/**
 * 조회 버튼 클릭 시 모달 팝업
 * 
 */



$(document).ready(function(){
    $('.check__data').click(function(){
        $('.data__modal').show()
    })

    $('.modal__close button').click(function(){
        $('.data__modal').hide()
    })


    
    $('.error__display').click(function(){
        $('.data__error__modal').show()
    })

    $('.modal__close button').click(function(){
        $('.data__error__modal').hide()
    })



    // 임시로 radio 체크 상태 지정

    for (i = 0; i <= 34; i++) {
        if(i % 2 == 0 ){
            $('.table__template__radio .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }
    
    for (i = 0; i <= 5; i++) {
        if(i % 2 == 0 ){
            $('.search__accounting .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

})