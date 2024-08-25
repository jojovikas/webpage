$(document).ready(function () {
	$("a.link.active").parents("ul").siblings(".link").addClass("active");
});

$(document).ready(function () {
	$("#showNavBtn").on("click", function () {
		$("#hideNavBtn, #navBgOverlay").show();
		$("#nav").animate({ right: 0 }, "fast");
	});
	$("#hideNavBtn, #navBgOverlay").on("click", function () {
		$("#hideNavBtn, #navBgOverlay").hide();
		$("#nav").animate({ right: -290 }, "fast");
	});
});

// For Mobile Menu
if ($(window).width() < 1200) {
	var divs = $("#nav > ul > li > ul").hide();
	var h2s = $("#nav > ul > li > button").click(function () {
		h2s.not(this).removeClass("active")
		$(this).toggleClass("active")
		divs.not($(this).next()).slideUp()
		$(this).next().slideToggle()
		return false;
	});
}
$(window).resize(function () {
	if ($(window).width() > 1199) {
		$("#nav ul li ul").removeAttr("style");
	}
});

function fnHeaderSticky() {
	if ($(this).scrollTop() > 110) {
		$('#navHeader').addClass('sticky');
		$('#navHeader').removeClass('non-sticky');
	} else {
		$('#navHeader').removeClass('sticky');
		$('#navHeader').addClass('non-sticky');
	}
}
$(window).scroll(function () {
	fnHeaderSticky();
});
$(window).on("load", function () {
	fnHeaderSticky();
});

$(document).ready(function () {
	$(".card-more-btn").on("click", function () {
		
		if ($(this).siblings(".MoreText").css("height") == "56px") {
			$(this).siblings(".MoreText").css("height", "auto");
			$(this).text("Read Less..");
		}
		else {
			$(this).siblings(".MoreText").css("height", "56px");
			$(this).text("Read More..");
		}
	});
})



const multipleItemCarouselindia = document.querySelector('#carouselindia')
if(window.matchMedia("(min-width:576px)").matches){
	const carousel = new bootstrap.Carousel(multipleItemCarouselindia, {
		interval: false,
	  })
	var carouselWidth = $('.carousel-inner')[0].scrollWidth; 
	var cardWidth = $('.carousel-item').width();
	var scrollPosition = 0;
	$('.carousel-control-next').on('click', function(){
	if(scrollPosition < (carouselWidth - (cardWidth * 4))){
		console.log('next');
		scrollPosition = scrollPosition + cardWidth;
		$('.carousel-inner').animate({scrollLeft:
			scrollPosition}, 600);
		}
	});
	$('.carousel-control-prev').on('click', function(){
	if(scrollPosition > 0){
		console.log('prev');
		scrollPosition = scrollPosition - cardWidth;
		$('.carousel-inner').animate({scrollLeft:
			scrollPosition}, 600);
		}
	});
}else{
	$(multipleItemCarouselindia).addClass('slide');
}

const multipleItemCarouselHoney = document.querySelector('#carouselHoneymoon')
if(window.matchMedia("(min-width:576px)").matches){
	const carousel = new bootstrap.Carousel(multipleItemCarouselHoney, {
		interval: false,
	  })
	var carouselWidth = $('.carousel-inner')[0].scrollWidth; 
	var cardWidth = $('.carousel-item').width();
	var scrollPosition = 0;
	$('.carousel-control-next').on('click', function(){
	if(scrollPosition < (carouselWidth - (cardWidth * 4))){
		console.log('next');
		scrollPosition = scrollPosition + cardWidth;
		$('.carousel-inner').animate({scrollLeft:
			scrollPosition}, 600);
		}
	});
	$('.carousel-control-prev').on('click', function(){
	if(scrollPosition > 0){
		console.log('prev');
		scrollPosition = scrollPosition - cardWidth;
		$('.carousel-inner').animate({scrollLeft:
			scrollPosition}, 600);
		}
	});
}else{
	$(multipleItemCarouselHoney).addClass('slide');
}


var ActiveSlide = 0;
        ShowSlide(ActiveSlide);
        function Previous() {            
            if (ActiveSlide > 0) {
                ActiveSlide = ActiveSlide - 1;
            }
            else {
                ActiveSlide = document.getElementsByClassName("slide").length - 1;
            }
            ShowSlide(ActiveSlide);

        }
        function Next() {
            if (ActiveSlide < document.getElementsByClassName("slide").length - 1) {
                ActiveSlide = ActiveSlide + 1;
            }
            else {
                ActiveSlide = 0;
            }
            ShowSlide(ActiveSlide);
        }

        function ShowSlide(num) {            
            var slides = document.getElementsByClassName("slide");
            for (var i = 0; i < slides.length; i++) {                
                slides[i].style.display = "none";
            }            
            slides[num].style.display = "block";
        }