
$(document).ready(function(){
    for (i = 0; i <= 5; i++) {
        if(i % 2 == 0 ){
            $('.search__accounting .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

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


    $('.check__data').click(function(){
        $('.data__modal').show()
    })

    $('.modal__close button').click(function(){
        $('.data__modal').hide()
    })

    for (i = 0; i <= 34; i++) {
        if(i % 2 == 0 ){
            $('.table__template__radio .radio__wrap input[type="radio"]').eq(i).first().prop('checked', true)
        }
    }

})