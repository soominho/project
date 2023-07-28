$(function(){
	let winT=0;
	let topFlag=false;
	let w;

	$(window).scroll(function(){
		winT=$(window).scrollTop();

		if(winT > 100){
			$("#header").addClass("active");
			topFlag=true;
		}
		else{
			$("#header").removeClass("active");
			topFlag=false;
		}
	});

	$(window).trigger("scroll");

	$("#gnb > ul").hover(
		function(){
			$("#header").addClass("active");
		},
		function(){
			if(topFlag == false){
				$("#header").removeClass("active");
			}
		}
	);

	$("#header .right_group .tab").click(function(e){
		e.preventDefault();
		$("body").addClass("fixed");
		$("#header .total_menu").animate({display:"block", right:"0%", opacity:"1"},300);
		$("#header .total_menu > ul > li").animate({opacity:"1"},300);
		$(this).toggleClass("active");
	});

	/*
	$(".total_menu").animate({ right: "-100%"}, 300, function(){
		$("#header .total_menu.active").each(function(e){
			e.preventDefault();
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
				$(this).children("ul").hide();
			}
		});
	});
	*/

	$("#header .total_menu > ul > li").click(function(e){
		e.preventDefault();
		
		if($(this).hasClass("active") == false){
		$("#header .total_menu > ul > li").removeClass("active");
		$(this).addClass("active");
		$("#header .total_menu ul ul").slideUp(300);
		$(this).find("ul").slideDown(300);
		}

		else{
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	$(window).resize(function(){
		w=$(window).width();

		if(w > 1024){
			$(".total_menu > ul > li").removeClass("active");
			$(".total_menu ul ul").removeAttr("style");
		}
	});

	$(function(){
		const mainSwiper = new Swiper(".mainSwiper", {
			on : {
				init: function(){
					$(".slider_btn .slider_numbering .current").text(this.realIndex+1);
					$(".slider_btn .slider_numbering .total").text(this.slides.length);
				},
				slideChange: function(){
					$(".slider_btn .slider_numbering .current").text(this.realIndex+1);
				}
			}
		});
		$(".slider_btn .left").click(function(){
			mainSwiper.slidePrev();
			textSwiper.slidePrev();			
		});
		$(".slider_btn .right").click(function(){
			mainSwiper.slideNext();
			textSwiper.slideNext();
		});
	
		const textSwiper = new Swiper(".textSwiper", {
			on : {
				init: function(){
					$(".slider_btn .slider_numbering .current").text(this.realIndex+1);
					$(".slider_btn .slider_numbering .total").text(this.slides.length);
				},
				slideChange: function(){
					$(".slider_btn .slider_numbering .current").text(this.realIndex+1);
				}
			}
		});
	});
	
});