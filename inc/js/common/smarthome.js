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
	var $paymentsType = $('input[name=payments]');

	$paymentsType.on('click', function(e) {
		$(this).prop('checked', function (i, value) {
			return !value;
		});

		var eid = $(this).attr('id');
		if( ( eid == "payments36" ) ) {
			checkedServiceTypeSub($('[name=service-type]:checked').val());
		}
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
	$('.sk-auth').show();
	$('input[name=one], input[name=unlimited]').prop('checked', false);
	$("input[name=" + target + "][value=36]").prop("checked", true);

	updateServicePrice(true);

	$('.service-type-sub[data-rel=' + target + ']').show();
	if( target == "device" ) {
		$('#payments36').prop("disabled", true);
		$('.except-device').hide();
		$('.sk-auth').hide();
	} else {
		$('#payments36').prop("disabled", false);
		$('.except-device').show();
	}
}

function selectServiceType() {
	var $serviceType = $('input[name=service-type]');

	$serviceType.each(function() {
		if( $(this).is(":checked") ) {
			var target = $(this).val();
			openWithTarget(target);
		}
	});

	$serviceType.on('click', function(e) {
		$(this).prop('checked', function (i, value) {
			return !value;
		});

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
		$(this).prop('checked', function (i, value) {
			return !value;
		});

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
	var $bridgeItems = $('input[name=isBridge]');
	$bridgeItems.on('click', function(e) {
		$(this).prop('checked', function (i, value) {
			return !value;
		});

		if( $(this).is(":checked") ) {
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
		}
	});

//	$("input[name=isBridge]:first").prop("checked", true).trigger("click");
}

//����ƮȨ - ������ ���, �����ϱ� �̺�Ʈ ����
function removeBuyCart() {
	$(document).off("click",".buyWrap .btnDgray");
}


$(document).ready(function(){
	smarthomeCubbyhole();			//����ƮȨ - ������ ��� - 2016-06-26 �߰�
	slickSlider();					//����ƮȨ - ��Ű�� �����̴� - 2016-06-26 �߰�
	selectPayments36();				//����ƮȨ - ��ǰ ������� 36���� �Һ� ����
	selectServiceType();			//����ƮȨ - ���񽺰������� ����
	selectServiceStipulation();		//����ƮȨ - ���񽺰������� ���� ����
	withBridge();					//����ƮȨ - �긴�� ���Կ���
	removeBuyCart();				//����ƮȨ - ������ ���, �����ϱ� �̺�Ʈ ����

});

