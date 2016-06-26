//스마트홈 - 보관함 담기 - 2016-06-26 추가
function smarthomeCubbyhole(){
	$(".smarthomeList").find(".favorite").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});
}

//스마트홈 - 패키지 슬라이더 - 2016-06-26 추가
function slickSlider(){
	$packageContainer = $('section.package');
	$slick = $packageContainer.find('.slick-container');

	var options = {
		dots: true,
		arrows: false,
		infinite: true,
		draggable: true,
		speed: 300,
		autoplay: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		customPaging : function(slider, i) {
			var thumbTxt = $(slider.$slides[i]).data('thumb');
			return '<button type="button">' + thumbTxt + '</button>';
		}
	}

	// 슬릭 슬라이더
	if( $slick.length > 0 ) {
		$slick.slick(options);
	}
}

//스마트홈 - 서비스가입유형 선택
function openWithTarget(target) {
	$('.service-type-sub').hide();
	$('.service-type-sub[data-rel=' + target).show();
}

function selectServiceType() {
	var $serviceType = $('[name=service-type]');
	$serviceType.on('click', function(e) {
		if( $(this).is(":checked") ) {
			var target = $(this).val();
			openWithTarget(target);
		}
	});
}

$(document).ready(function(){
	smarthomeCubbyhole();	//스마트홈 - 보관함 담기 - 2016-06-26 추가
	slickSlider();			//스마트홈 - 패키지 슬라이더 - 2016-06-26 추가
	selectServiceType();	//스마트홈 - 서비스가입유형 선택
});

