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

// //스마트홈 - 상품 결제방식 36개월 할부 선택
function selectPayments36() {
	var $paymentsType = $('input[name=payments]');

	$paymentsType.on('click', function(e) {
		$paymentsType.removeAttr("checked");
		$(this).attr('checked', true);

		var eid = $(this).attr('id');
		var target;
		if( ( eid == "payments36" ) ) {
			$('[name=service-type]').each(function() {
				if( $(this)[0].hasAttribute("checked") ) {
					target = $(this).val();
				}
			});
			checkedServiceTypeSub(target);
		}
	});
}

//스마트홈 - 36개월 할부 활성화
function checkedServiceTypeSub(target) {
	var $sub = $('input[name=' + target + ']:checked');
	if( $sub.val() != 36 ) {
		var result = confirm('36개월 할부 선택 시 서비스 요금약정이 36개월로 변경됩니다.\n변경하시겠습니까?');
		if( result ) {
			$('input[name=' + target + ']').removeAttr("checked");
			$('input[name=' + target + '][value=36]').attr('checked', true);
		}
	}
}
//스마트홈 - 서비스가입유형 선택
function openWithTarget(target) {
	$('.service-type-sub').hide();
	$('.sk-auth').show();
	$('input[name=one], input[name=unlimited]').attr('checked', false);
	$("input[name=" + target + "][value=36]").attr("checked", true);

	updateServicePrice(true);

	$('.service-type-sub[data-rel=' + target + ']').show();
	if( target == "device" ) {
		$('#payments36').attr("disabled", true);
		$('.except-device').hide();
		$('.sk-auth').hide();
	} else {
		$('#payments36').attr("disabled", false);
		$('.except-device').show();
	}
}

function selectServiceType() {
	var $serviceType = $('input[name=service-type]');

	$serviceType.each(function() {
		if( $(this).prop("checked") ) {
			var target = $(this).val();
			openWithTarget(target);
		}
	});

	$serviceType.on('click', function(e) {
		$serviceType.removeAttr("checked");
		$(this).attr('checked', true);

		var target = $(this).val();
		openWithTarget(target);
	});
}

//스마트홈 - 서비스가입유형 약정 선택
function selectServiceStipulation() {
	var $stipulation = $('input[name=one], input[name=unlimited]');
	$stipulation.on('click', function(e) {
		$stipulation.removeAttr("checked");
		$(this).attr('checked', true);

		var eid = $(this).attr('id');
		if( ( eid != "unlimited36" || eid != "one36" ) ) {
			$('input[name=payments]').removeAttr("checked");
			$('input[name=payments][value=0]').attr('checked', true);
		}
		updateServicePrice(true);
	});
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
	var $bridgeItems = $('input[name=isBridge]');
	$bridgeItems.on('click', function(e) {
		$bridgeItems.removeAttr("checked");
		$(this).attr('checked', true);

		$('[name=service-type]').removeAttr('checked');;
		$('.service-type-sub').hide();
		$('.sk-auth').hide();

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
	});

//	$("input[name=isBridge]:first").prop("checked", true).trigger("click");
}

//스마트홈 - 보관함 담기, 구매하기 이벤트 제거
function removeBuyCart() {
	$(document).off("click",".buyWrap .btnDgray");
}


$(document).ready(function(){
	smarthomeCubbyhole();			//스마트홈 - 보관함 담기 - 2016-06-26 추가
	slickSlider();					//스마트홈 - 패키지 슬라이더 - 2016-06-26 추가
	selectPayments36();				//스마트홈 - 상품 결제방식 36개월 할부 선택
	selectServiceType();			//스마트홈 - 서비스가입유형 선택
	selectServiceStipulation();		//스마트홈 - 서비스가입유형 약정 선택
	withBridge();					//스마트홈 - 브릿지 구입여부
	removeBuyCart();				//스마트홈 - 보관함 담기, 구매하기 이벤트 제거

});

