//����ƮȨ - ������ ��� - 2016-06-26 �߰�
function smarthomeCubbyhole(){
	$(".smarthomeList").find(".favorite").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});
}

//����ƮȨ - ��Ű�� �����̴� - 2016-06-26 �߰�
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

	// ���� �����̴�
	if( $slick.length > 0 ) {
		$slick.slick(options);
	}
}

// //����ƮȨ - ��ǰ ������� 36���� �Һ� ����
function selectPayments36() {
	var $paymentType36 = $('#payments36');
	$paymentType36.on('click', function(e) {
		checkedServiceTypeSub($('[name=service-type]:checked').val());
	});
}

//����ƮȨ - 36���� �Һ� Ȱ��ȭ
function checkedServiceTypeSub(target) {
	var $sub = $('input[name=' + target + ']:checked');
	if( $sub.val() != 36 ) {
		var result = confirm('36���� �Һ� ���� �� ���� ��ݾ����� 36������ ����˴ϴ�.\n�����Ͻðڽ��ϱ�?');
		if( result ) {
			$('input[name=' + target + '][value=36]').prop('checked', true);
		}
	}
}
//����ƮȨ - ���񽺰������� ����
function openWithTarget(target) {
	$('.service-type-sub').hide();
	$('input[name=one], input[name=unlimited]').prop('checked', false);
	$("input[name=" + target + "][value=36]").prop("checked", true);

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

	$serviceType.each(function() {
		if( $(this).is(":checked") ) {
			var target = $(this).val();
			openWithTarget(target);
		}
	});

	$serviceType.on('click', function(e) {
		if( $(this).is(":checked") ) {
			var target = $(this).val();
			openWithTarget(target);
		}
	});
}

//����ƮȨ - ���񽺰������� ���� ����
function selectServiceStipulation() {
	var $stipulation = $('input[name=one], input[name=unlimited]');
	$stipulation.on('click', function(e) {
		var eid = $(this).attr('id');
		if( $(this).is(":checked") ) {
			if( ( eid != "unlimited36" || eid != "one36" ) ) {
				$('input[name=payments][value=0]').prop('checked', true);
			}
			updateServicePrice(true);
		}
	});
}


//����ƮȨ - ���� ���αݾ� show/hide
function updateServicePrice(active) {
	if( active ) {
		$('#servicePriceContent').show();
		$('#servicePriceMessage').hide();
	} else {
		$('#servicePriceContent').hide();
		$('#servicePriceMessage').show();
	}
}

//����ƮȨ - �긴�� ���Կ���
function withBridge() {
	var $bridgeItems = $('input[name=bridge]');
	$bridgeItems.on('click', function(e) {
		if( $(this).is(":checked") ) {
			$('[name=service-type]').removeAttr('checked');;
			$('.service-type-sub').hide();
			// updateInstallment(true);

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
	smarthomeCubbyhole();			//����ƮȨ - ������ ��� - 2016-06-26 �߰�
	slickSlider();					//����ƮȨ - ��Ű�� �����̴� - 2016-06-26 �߰�
	selectPayments36();				//����ƮȨ - ��ǰ ������� 36���� �Һ� ����
	selectServiceType();			//����ƮȨ - ���񽺰������� ����
	selectServiceStipulation();		//����ƮȨ - ���񽺰������� ���� ����
	withBridge();					//����ƮȨ - �긴�� ���Կ���
});

