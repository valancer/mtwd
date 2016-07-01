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

//����ƮȨ - ���񽺰������� ����
function openWithTarget(target) {
	$('.service-type-sub').hide();
	$('input[name=one], input[name=unlimited]').prop('checked', false);
	updateInstallment(true);

	$('.service-type-sub[data-rel=' + target + ']').show();
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

//����ƮȨ - ���񽺰������� ���� ����
function selectServiceStipulation() {
	var $stipulation = $('input[name=one], input[name=unlimited]');
	$stipulation.on('click', function(e) {
		var eid = $(this).attr('id');
		if( $(this).is(":checked") && ( eid == "unlimited36" || eid == "one36" ) ) {
			updateInstallment(false);
		} else {
			updateInstallment(true);
		}
	});
}

//����ƮȨ - 36���� �Һ� Ȱ��ȭ
function updateInstallment(active) {
	$('#payments36').prop('disabled', active);
}

//����ƮȨ - �긴�� ���Կ���
function withBridge() {
	var $bridgeItems = $('input[name=bridge]');
	$bridgeItems.on('click', function(e) {
		if( $(this).is(":checked") ) {
			$('[name=service-type]').removeAttr('checked');;
			$('.service-type-sub').hide();
			updateInstallment(true);

			var action = $(this).attr("data-action");
			if( action == "with-bridge" ) {
				$('#prodcut-count').hide();
				$('#prodcut-count + .emptyPlace').hide();
				$('#only-device').hide();
			} else if( action == "only-device" ) {
				$('#prodcut-count').show();
				$('#prodcut-count + .emptyPlace').show();
				$('#only-device').show();
			}
		}
	});

	$("input[name=bridge]:first").prop("checked", true).trigger("click");
}

$(document).ready(function(){
	smarthomeCubbyhole();			//����ƮȨ - ������ ��� - 2016-06-26 �߰�
	slickSlider();					//����ƮȨ - ��Ű�� �����̴� - 2016-06-26 �߰�
	selectServiceType();			//����ƮȨ - ���񽺰������� ����
	selectServiceStipulation();		//����ƮȨ - ���񽺰������� ���� ����
	withBridge();					//����ƮȨ - �긴�� ���Կ���
});

