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
	$('input[name=one], input[name=unlimited]').prop('checked', false);
	updateInstallment(true);
	updateServicePrice(false);

	$('.service-type-sub[data-rel=' + target + ']').show();
	if( target == "device" ) {
		$('.except-device').hide();
	} else {
		$('.except-device').show();
	}
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

//스마트홈 - 서비스가입유형 약정 선택
function selectServiceStipulation() {
	var $stipulation = $('input[name=one], input[name=unlimited]');
	$stipulation.on('click', function(e) {
		var eid = $(this).attr('id');
		if( $(this).is(":checked") ) {
			if( ( eid == "unlimited36" || eid == "one36" ) ) {
				updateInstallment(false);
			}
			updateServicePrice(true);
		} else {
			updateInstallment(true);
		}
	});
}

//스마트홈 - 36개월 할부 활성화
function updateInstallment(active) {
	$('#payments36').prop('disabled', active);
}

//스마트홈 - 서비스 납부금액 show/hide
function updateServicePrice(active) {
	if( active ) {
		$('#servicePriceContent').show();
		$('#servicePriceMessage').hide();
	} else {
		$('#servicePriceContent').hide();
		$('#servicePriceMessage').show();
	}
}

//스마트홈 - 브릿지 구입여부
function withBridge() {
	var $bridgeItems = $('input[name=bridge]');
	$bridgeItems.on('click', function(e) {
		if( $(this).is(":checked") ) {
			$('[name=service-type]').removeAttr('checked');;
			$('.service-type-sub').hide();
			updateInstallment(true);

			var action = $(this).attr("data-action");
			var ins = $("#prodcut-count .select").getInstance();
			if( action == "with-bridge" ) {
				ins.disabledSB(true);
				$('#only-device').hide();
			} else if( action == "only-device" ) {
				ins.disabledSB(false);
				$('#prodcut-count .select').removeAttr('disabled');
				$('#only-device').show();
			}
		}
	});

	$("input[name=bridge]:first").prop("checked", true).trigger("click");
}

$(document).ready(function(){
	smarthomeCubbyhole();			//스마트홈 - 보관함 담기 - 2016-06-26 추가
	slickSlider();					//스마트홈 - 패키지 슬라이더 - 2016-06-26 추가
	selectServiceType();			//스마트홈 - 서비스가입유형 선택
	selectServiceStipulation();		//스마트홈 - 서비스가입유형 약정 선택
	withBridge();					//스마트홈 - 브릿지 구입여부
});

