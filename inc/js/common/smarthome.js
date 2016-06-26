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
	smarthomeCubbyhole();	//����ƮȨ - ������ ��� - 2016-06-26 �߰�
	slickSlider();			//����ƮȨ - ��Ű�� �����̴� - 2016-06-26 �߰�
	selectServiceType();	//����ƮȨ - ���񽺰������� ����
});

