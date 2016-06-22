
// 필터설정하기 스크롤
function filter_bar(){
	var headerH = $("header").outerHeight();
	var conInfoH = $(".conInfo").outerHeight();
	var filter_wrapH = $(".filter_wrap").outerHeight();
	var filter_barH = conInfoH + filter_wrapH;
	$(".header_blank").css({'padding-top':headerH+'px'});
	$(".filter_wrap2").css({'top':headerH+'px'});
	$(window).scroll(function(){
		if($(this).scrollTop() > filter_barH){
			$(".filter_wrap").addClass('hide');
			$(".filter_wrap2").show();
		}else{
			$(".filter_wrap").removeClass('hide');
			$(".filter_wrap2").hide();
		}
	});
}

// 모바일 - 리스트 찜
function pick(){
	$(".item_wrap ul li .info_area .pick").addClass("default");
	$(".item_wrap ul li .info_area .pick").on('click',function(){
		if($(this).hasClass('default')){
			$(this).addClass('on').removeClass('default');
		}else{
			$(this).addClass('default').removeClass('on');
		}
	});
}

// 모바일 - 가입 단계 -2016-06-09 수정-
function mobile_step()
{

	// 헤더 옵셥버튼 리사이징
	var resizeObject = {};
	$( window ).resize(function()
	{
		commonJs.WIDTH = $(window).width();
		commonJs.HEIGHT = $(window).height();
		$(resizeObject).trigger('resize');
	});
	$( window ).scroll(function()
	{
		$(resizeObject).trigger('scroll');
	});
	var doc = $(window.document);
	//mpoc/guide/layout3.html, mpoc/guide/layout4.html
	var topHeadResize = null;
	doc.find('div.topHead').each(function(index)
	{
		var head = $(this);
		var headerStep = doc.find('div.header_step');

		topHeadResize = function()
		{
			var h = head.outerHeight(true);
			var bH = 0;
			if(headerStep.length>0) {
				bH = headerStep.height();
				headerStep.css('top' , ((h/2)-(bH/2))+'px');
			}
		};
		topHeadResize();
	});
	/////////////////////////////////////////////////////

	$(resizeObject).bind('resize', function(event)
	{
		if( topHeadResize ){
			topHeadResize();
		}
	});

	// 컨텐츠에 헤더 사이즈만큼 여백 추가
	var topHeadH = $(".topHead").outerHeight();
	$(".step_wrap").css({'padding-top':topHeadH+'px'});

	// 헤더 옵션버튼 클릭 이벤트
	function popup_setting(){
		var topHeadH = $(".topHead").outerHeight();
		var popup_size = $(window).height();
		$("body").addClass('popup_setting');
		$(".header_step_wrap").css({'height' : popup_size - topHeadH + 'px', 'overflow-y' : 'auto'});
	}
	var count = 1;
	function popClose_setting(){
		$("body").removeClass('popup_setting');
		$(".header_step_wrap, #mask").hide();
		count=1;
	}
	$(document).on("click", ".topHead .header_step a",function(){
		if($(".step1.step_box ul.join li").hasClass('on')){
			popup_setting();
			$(".header_step_wrap.pop02, #mask").show();
		}else{
			popup_setting();
			$(".header_step_wrap.pop01, #mask").show();
		}
		if(count == 2){
			popClose_setting();
			count=0;
		}
		count++;
	});
	$(document).on("click", ".header_step_wrap.pop01 .step_list ul li a",function(){
		popClose_setting();
	});

	// 가입유형 클릭 이벤트
	$(document).on("click", ".step1.step_box ul.join li",function(){
		$(".step1.step_box ul.join li").removeClass('on');
		$(this).addClass('on');
		$(".box_hide").show();

		var topHeadH = $(".topHead").outerHeight();
		var teb_areaH = $(".teb_area").outerHeight();
		var step1H = $(".step1").outerHeight() - 41;
		var step2H = $(".step2").outerHeight();
		var step3H = $(".step3").outerHeight();
		var step4H = $(".step4").outerHeight();
		var step5H = $(".step5").outerHeight();
		var step6H = $(".step6").outerHeight();
		var basicHead = topHeadH + teb_areaH;
		var basicstep1H = teb_areaH + step1H;
		var basicstep2H = basicstep1H + teb_areaH + step2H;
		var basicstep3H = basicstep2H + teb_areaH + step3H;
		var basicstep4H = basicstep3H + teb_areaH + step4H;
		var basicstep5H = basicstep4H + teb_areaH + step5H;
		var basicstep6H = basicstep5H + teb_areaH + step6H;

		// 스크롤 이벤트
		$(window).scroll(function(){
			if($(this).scrollTop() > 0){
				$(".teb1").css({'position':'fixed'});
				$(".step1").css({'padding-top':'41px'});
				$(".topHead .header_step a").addClass('header_step1');
			}
			if($(this).scrollTop() < basicstep4H){
				$(".teb4").css({'position':'fixed'});
				$(".step4").css({'padding-top':'41px'});
				$(".teb5").css({'position':'relative','top':0});
				$(".step5").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step4');
				$(".topHead .header_step a").removeClass('header_step5');
			}
			if($(this).scrollTop() < basicstep3H){
				$(".teb3").css({'position':'fixed'});
				$(".step3").css({'padding-top':'41px'});
				$(".teb4").css({'position':'relative','top':0});
				$(".step4").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step3');
				$(".topHead .header_step a").removeClass('header_step4');
			}
			if($(this).scrollTop() < basicstep2H){
				$(".teb2").css({'position':'fixed'});
				$(".step2").css({'padding-top':'41px'});
				$(".teb3").css({'position':'relative','top':0});
				$(".step3").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step2');
				$(".topHead .header_step a").removeClass('header_step3');
			}
			if($(this).scrollTop() < basicstep1H){
				$(".teb1").css({'position':'fixed'});
				$(".step1").css({'padding-top':'41px'});
				$(".teb2").css({'position':'relative','top':0});
				$(".step2").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step1');
				$(".topHead .header_step a").removeClass('header_step2');
			}
			if($(this).scrollTop() > basicstep1H){
				$(".teb2").css({'position':'fixed','top':topHeadH+'px'});
				$(".step2").css({'padding-top':'41px'});
				$(".teb1").css({'position':'relative'});
				$(".step1").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step2');
				$(".topHead .header_step a").removeClass('header_step1');
			}
			if($(this).scrollTop() > basicstep2H){
				$(".teb3").css({'position':'fixed','top':topHeadH+'px'});
				$(".step3").css({'padding-top':'41px'});
				$(".teb2").css({'position':'relative'});
				$(".step2").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step3');
				$(".topHead .header_step a").removeClass('header_step2');
			}
			if($(this).scrollTop() > basicstep3H){
				$(".teb4").css({'position':'fixed','top':topHeadH+'px'});
				$(".step4").css({'padding-top':'41px'});
				$(".teb3").css({'position':'relative'});
				$(".step3").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step4');
				$(".topHead .header_step a").removeClass('header_step3');
			}
			if($(this).scrollTop() > basicstep4H){
				$(".teb5").css({'position':'fixed','top':topHeadH+'px'});
				$(".step5").css({'padding-top':'41px'});
				$(".teb4").css({'position':'relative'});
				$(".step4").css({'padding-top':0});
				$(".topHead .header_step a").addClass('header_step5');
				$(".topHead .header_step a").removeClass('header_step4');
			}
			if($(this).scrollTop() > basicstep5H){
				$(".teb_area.teb5").css({'position':'relative','top':0});
				$(".step5").css({'padding-top':0});
			}
		});

		// 클릭 이벤트
		$("body").animate({
			scrollTop : basicstep1H
		}, 500, function(){
			$(".teb2").css({'position':'fixed','top':topHeadH+'px'});
		});
		$(document).on("click", ".step_box ul li", function(){
			if($(this).hasClass('disabled')){
				$(this).removeClass('on');
			}else{
				$(this).parents().children("li").removeClass('on');
				$(this).addClass('on');
			}
		});

		// 팝업 닫기 클릭 이벤트
		$(document).on("click", ".header_step_wrap .step_list ul li span a",function(){
			popClose_setting();
			if($(this).parent().parent().is(':first-child')){
				$("body").animate({
					scrollTop : 0
				}, 500);
			}if($(this).parent().parent().is(':nth-child(2)')){
				$("body").animate({
					scrollTop : basicstep1H
				}, 500, function(){
					$(".teb2").css({'position':'fixed','top':topHeadH+'px'});
				});
			}if($(this).parent().parent().is(':nth-child(3)')){
				$("body").animate({
					scrollTop : basicstep2H
				}, 500, function(){
					$(".teb3").css({'position':'fixed','top':topHeadH+'px'});
				});
			}if($(this).parent().parent().is(':nth-child(4)')){
				$("body").animate({
					scrollTop : basicstep3H
				}, 500, function(){
					$(".teb4").css({'position':'fixed','top':topHeadH+'px'});
				});
			}if($(this).parent().parent().is(':nth-child(5)')){
				$("body").animate({
					scrollTop : basicstep4H
				}, 500, function(){
					$(".teb5").css({'position':'fixed','top':topHeadH+'px'});
					$(".step5").css({'padding-top':'41px'});
				});
			}
		});
	});
}



//기획전 - 더보기 및 클릭 이벤트 -2016-06-08 추가-
function planningAdd(){

	$(".planning_cont").find("li").eq(0).show();
	$(document).on("click", ".planning_tab ul li",function(){
		var thisIdx = $(this).index();
		var btnAll = $(".planning_tab .planning_all");

		$(this).parent().find("li").removeClass("on");
		$(this).addClass("on");
		$(".planning_cont").find("li").hide().eq(thisIdx).show();
		if (btnAll.hasClass('on')){
			btnAll.removeClass("on");
			btnAll.find("span").text("기획전 더보기");
			$(".planning_tab ul").css("height", 68);
			$("#mask").remove();
			$('#Wrap header').css("z-index",0);
			$('#Wrap #content .conInfo').css("z-index",0);
		}
	});

	$(document).on("click", ".planning_tab .planning_all",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).find("span").text("접기");
			$(".planning_tab").find("ul").css("height", "auto");
			$('.planning_cont').append("<div id='mask' style='display:block;z-index:1;'></div>");
			$('#Wrap header').css({"z-index":10000 , 'position':'relative'});
			$('#Wrap #content .conInfo').css({"z-index":10000 , 'position':'relative'});
		} else {
			$(this).removeClass("on");
			$(this).find("span").text("기획전 더보기");
			$(".planning_tab").find("ul").css("height", 68);
			$("#mask").remove();
			$('#Wrap header').css("z-index",0);
			$('#Wrap #content .conInfo').css("z-index",0);
		}
	});
	var imghh = $(".planning_tab li img").height();
	$(".planning_tab li img").css('margin-top',-imghh/2);
}

//액세서리 - 체크박스 전체 선택 노출 - 2016-06-10 추가
function checkBoxAll(){
	var allChecked = $(".accMobile").find(".checkAll input:checkbox");
	var otherChecked = $(".accMobile").find("input:checkbox");

	allChecked.click(function(){			
		if($(this).attr("checked")){
			otherChecked.attr("checked", true);
			$(".accMobile").find(".formWrap").addClass("checked");
		} else {
			otherChecked.attr("checked", false);
			$(".accMobile").find(".formWrap").removeClass("checked");
		}
	});
	
	otherChecked.change(function(){
		var checkSize = $(".accMobile").find("li:gt(0)").find("input:checkbox").size();
		var checkedSize = $(".accMobile").find("li:gt(0)").find("input:checkbox:checked").size();
	
		if(checkedSize < checkSize){
			allChecked.attr("checked", false);
			$(".accMobile").find(".checkAll").removeClass("checked");
		} else {
			allChecked.attr("checked", true);
			$(".accMobile").find(".checkAll").addClass("checked");
		}
	});	
}

//액세서리 - 쿠폰 체크 - 2016-06-10 추가
function accCoupon(){
	$(".accCoupon").each(function(){
		$(this).find("li").on("click",function(){
			if(!$(this).hasClass("on")){
				$(this).parent().find("li").removeClass("on");
				$(this).addClass("on");
			} else {
				$(this).removeClass("on");
			}			
		});
	});
}

//액세서리 - 보관함 담기 - 2016-06-13 추가
function accCubbyhole(){
	$(".accList, .smarthomeList").find(".favorite").on("click",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});
}

//공통 - 가로 스크롤 리스트 넓이 지정 - 2016-06-13 추가
function scrollList(){ 
	$(".slideList").each(function(){
		var ulW = $(this).find("li").size();
		var liW = $(this).find("li").outerWidth(true);

		$(".slideList").find("ul").css({"width":(ulW*liW)});
	});
}

//액세서리 - 구매하기 레이어 옵션 선택 - 2016-06-13 추가
function accBuyLayer(){
	$(".buyWrap").find(".open").on("click", function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).parent().find(".option").show();
		} else {
			$(this).removeClass("on");
			$(this).parent().find(".option").hide();
		}
	});

	$(".buyWrap").find(".btnRed").on("click", function(){
		$(".buyWrap").find(".open").addClass("on");
		$(".buyWrap").find(".option").show();
	});
}

//구매 프로세스 - 서비스 업그레이드 - buyService() 추가
function buyService(){
	$(document).on("click", ".listService dd .serviceBox li",function(){
		$(this).addClass("on");
		$(this).siblings('li').not(this).removeClass("on");
	});
}

//액세서리 - 상품 상세 - 2016-06-14 추가
function accDetail(){

	//하단 셀렉트박스
	$(".dropSelect").each(function(){
		//셀렉트박스 클릭
		$(this).find("> a").on("click", function(){
			$(".dropSelect").find("> a").not(this).removeClass("on");
			$(".dropSelect").find(".select_drop").hide();
			if(!$(this).hasClass("on")){
				$(this).addClass("on");
				$(this).parent().find(".select_drop").show();
			} else {
				$(this).removeClass("on");
				$(this).parent().find(".select_drop").hide();
			}
		});

		//셀렉트박스 내용 클릭
		$(this).find(".select_drop li").not(".soldout").on("click", function(){
			var txt = $(this).find("span").text();
			$(this).parent().parent().prev().removeClass("on").text(txt);
			$(this).parent().parent().hide();
		});
	});

	$(document).on("click",".buyWrap .btnDgray",function(){
		if(!$(this).hasClass("on") && !$(this).parent().parent().hasClass("btnSoldout")){
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});
}

$(document).ready(function(){
	filter_bar(); // 필터설정하기 스크롤
	pick(); // 모바일 - 리스트 찜
	mobile_step(); // 모바일 - 가입 단계 -2016-06-09 수정-
	planningAdd(); //기획전
	checkBoxAll();//액세서리 - 체크박스 전체 선택 노출 - 2016-06-10 추가
	accCoupon();//액세서리 - 쿠폰 체크 - 2016-06-10 추가
	accCubbyhole();//액세서리 - 보관함 담기 - 2016-06-13 추가
	scrollList();//공통 - 가로 스크롤 리스트 넓이 지정 - 2016-06-13 추가
	accBuyLayer();//액세서리 - 구매하기 레이어 옵션 선택 - 2016-06-13 추가
	buyService(); //구매 프로세스 - 서비스 업그레이드 2016-06-13 추가
	accDetail();//액세서리 - 상품상세 - 2016-06-14 추가
});

