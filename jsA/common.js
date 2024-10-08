
$(function(){fn_width();});

// WIDTH LAYOUT
function fn_width(){
	var clsArr = ['w_per', 'w_px',  'mw_',  'miw_', 'div_per', 'h_', 'ineH_', 'ml', 'ml_', 'mt', 'mt_', 'mr' , 'mr_', 'mb', 'mb_', 'pl', 'pt', 'pr', 'pb'];
	$(clsArr).each(function(idx, cls) {
		$("[class*='"+cls+"']").each(function(){
			var string = $(this).attr('class');
			var words = string.split(' ');
			function sentence(value){return value.indexOf(cls)>=0;}
			var className = words.filter(sentence).toString();
			var num = className.replace(/[^0-9]/g,"");			
			switch (cls) {
				case 'w_per'	 	: if ( className.indexOf( 'h' ) >=0 ){ $(this).css({'width':num + '.5%'}); } else { $(this).css({'width':num + '% '}); } if ( num == 333 ){ $(this).css({'width':'33.333333333' + '% '}); } break;
				case 'w_px' 	 	: $(this).css({'width':num + 'px'}); break;
				case 'mw_'  	 	: $(this).css({'max-width':num + 'px'}); break;
				case 'miw_' 	 	: $(this).css({'min-width':num + 'px'}); break;
				case 'div_per' 	 	: if ( num == 100 ){ $(this).css({'width':'100%'}); } else { $(this).css({'width':'calc(' + num + '% - 10px)'}); } break;
				case 'h_'   	 	: if ( className.indexOf( 'per' ) >=0 ){ $(this).css({'height':num + '%'}); } else { $(this).css({'height':num + 'px'}); } break;
				case 'ineH_'	 	: if ( className.indexOf( 'h' ) >=0 ){ $(this).css({'width':num + '.5px'}); } else { $(this).css({'line-height':num + 'px'}); } break;
				case 'ml'  		 	: $(this).css({'margin-left':num + 'px'}); break;
				case 'ml_'			: $(this).css({'margin-left':'-' + num + 'px'}); break;
				case 'mt'  		 	: $(this).css({'margin-top':num + 'px'}); break;
				case 'mt_'  	 	: $(this).css({'margin-top':'-' + num + 'px'}); break;
				case 'mr'  			: $(this).css({'margin-right':num + 'px'}); break;
				case 'mr_'  		: $(this).css({'margin-right':'-' + num + 'px'}); break;
				case 'mb'  		 	: $(this).css({'margin-bottom':num + 'px'}); break;
				case 'mb_'  	 	: $(this).css({'margin-bottom':'-' + num + 'px'}); break;
				case 'pd'  		 	: $(this).css({'padding':num + 'px'}); break;
				case 'pl'  		 	: $(this).css({'padding-left':num + 'px'}); break;
				case 'pt'  		 	: $(this).css({'padding-top':num + 'px'}); break;
				case 'pr'  		 	: $(this).css({'padding-right':num + 'px'}); break;
				case 'pb'  		 	: $(this).css({'padding-bottom':num + 'px'}); break;
			}
		});	
	});
}

$(document).ready(function(){
	var navBgH;
	/*alert($(".nav ul li").length);*/
//	if($(".nav ul li").length==5 || $(".nav ul li").length==7 || $(".nav ul li").length==8 || $(".nav ul li").length==9 || $(".nav ul li").length==10 ){
	if($(".nav ul li").length==5 || $(".nav ul li").length==7 || $(".nav ul li").length==8 || $(".nav ul li").length==9 || $(".nav ul li").length==10 || $(".nav ul li").length==11 ){
		navBgH = $(".nav ul li:first-child .drop").outerHeight();
	}else if($(".nav ul li").length >= 13 ){
		navBgH = $(".nav ul li:last-child .drop").outerHeight();
	}
	
//	$(".navBg").css("height",navBgH + 27);
	$(".navBg").css("height",navBgH + 14);
	
	$("header").mouseenter(function(){
    	$(".drop").show();
    	$(".navBg").show();
	});
	$("header").mouseleave(function(){
    	$(".drop").hide();
    	$(".navBg").hide();
	});
	$(".nav ul li a").focus(function(){
		$(".drop").show();
		$(".navBg").show();
	});
	$(".nav ul li a").blur(function(){
    	$(".drop").hide();
    	$(".navBg").hide();
	});

	
	/* Mobile Menu */
	var moGnbLi = $('.mobileMenu > ul > li');
	$(".mobileMenuBtn").click(function(){
	    $(this).toggleClass("on");
	    $(".mobileMenu").toggleClass("On");
		if( $(".mobileMenu.On")){
			moGnbLi.click(function(){
				$('.tm_02dep').stop().slideUp();
				$(this).find('.tm_02dep').stop().slideToggle();
			});
		}
	});

	/*Sub Navigation*/
	$(".subNav div").click(function(){
		$(this).toggleClass("on");
		$(this).siblings("div").children("ul").slideUp();
		$(this).children("ul").slideToggle();
	});

	/* Open Tab */
	$(".tabContent").eq(0).show(0);
	$(".tabBtns h2").click(function () {
		var idx = $(this).index();
		$(".tabContent").hide();
		$(".tabContent").eq(idx).fadeIn();
		$(".tabBtns button").removeClass("active");
		$(this).children().addClass("active");
	});

	/* Modal */
	$('.modalBtn').click(function(){
		$(this).siblings('.modal').fadeIn();
	});
	$('.modalContent').click(function(){
		$('.modal').fadeOut();
	});

	/*List Table style*/
	$('.foldStyle tr').click(function(){
		$(this).next('tr').find('td p').slideToggle().css('border-top', '1px solid #ddd');
	});

	/*Table style*/
	if( $('.horizontal tbody tr').find('th').length >= 2){
		$('.horizontal tbody tr').find('th').not('th:first-child').css('border-left','1px solid #ddd');
	};
	$('.table.hover tr').click(function(){
		$('.table.hover tr').removeClass("on");
		$(this).addClass("on");
	});

	/*MainPage Table style*/
	
	$('.tdHover td').mouseenter(function(){
		var tdText = $(this).html();
		$(this).append("<p class='tooltip'>" + tdText + "</p>");
		$(this).find('.tooltip').animate({opacity:'1'}, 300);
	});
	$('.tdHover td').mouseleave(function(){
		$(this).find('.tooltip').remove();
	});
	
	/*Login Page*/
	$('.pageLogIn').parents('body, html').css('height', '100%');

    /* Modal */
    var $this;

    $(".openPopup").on("click", function(event) {
    	$this = $(this);
    	$("#popup").fadeIn(400).attr("tabindex", 0).show().focus();;   //팝업 오픈
   		$("body").append('<div class="bgPopup"></div>');
   		
   		fn_search_modal();
    });
    
    /* Title Line Button */
    if( $(".conTitle > .buttonRow > button").length >= 5 ){
    	$("button").parent(".buttonRow").addClass("long");
    }
    
    $("body").on("click", function(event) { 
        if(event.target.className == 'bgPopup'){
            $("#popup").fadeOut(400); 
            $(".bgPopup").fadeOut(400);
            $this.siblings("input, a, button").focus();
        }
    });
    $("#popup .close").on("click", function(event) { 
        $("#popup").fadeOut(400); 
        $(".bgPopup").fadeOut(400);
        $this.siblings("input, a, button").focus();
    });
    
    /* Tooltip Mobile */
    if($(window).width()<480){
    	$(".btnTootip").click(function(){
    		$(this).toggleClass("on");
    	});
    };
    
}); 



