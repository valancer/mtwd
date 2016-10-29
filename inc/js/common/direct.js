//공통 - 파일업로드 input
function fileUpload(){
	$(".boxUpload .btnUpload").change(function(){
		var txtValue = $(this).val();
		var txtInput = $(this).parents(".boxUpload").find(".uploadFile");
		console.log(txtValue);
		txtInput.attr('placeholder','');
		txtInput.val(txtValue);
	});
}
// 모바일 - 필터설정하기 스크롤, 2016-08-11 수정
function filter_bar(){
	$(window).scroll(function(){
		var headerH = $("header").outerHeight();
		var conInfoH = $(".conInfo").outerHeight();
		var filter_wrapH = $(".filter_wrap").outerHeight();
		var filter_barH = conInfoH + filter_wrapH;
		//$(".header_blank").css({'padding-top':headerH+'px'});
		$(".filter_wrap2").css({'top':headerH+'px'});
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
	$(".item_wrap ul li .info_area .pick").on('click',function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
		}else{
			$(this).addClass('on');
		}
	});
}

// 모바일 - 가입 단계
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
			btnAll.find("span").text("기획전 전체보기");
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
			$("body").css({'overflow-y':'hidden'});
		} else {
			$(this).removeClass("on");
			$(this).find("span").text("기획전 전체보기");
			$(".planning_tab").find("ul").css("height", 68);
			$("#mask").remove();
			$('#Wrap header').css("z-index",0);
			$('#Wrap #content .conInfo').css("z-index",0);
			$("body").css({'overflow-y':'auto'});
			if($(".planning_tab").hasClass('scroll')){
				$(".planning_tab").find("ul").css("height", 0);
			}
		}
	});
	var imghh = $(".planning_tab li img").height();
	$(".planning_tab li img").css('margin-top',-imghh/2);
}

//액세서리 - 체크박스 전체 선택 노출 - 2016-06-10 추가
function checkBoxAll(){
	var allChecked = $(".accMobile .checkAll input");
	var otherChecked = $(".accMobile").find("input:checkbox");

	/* 2016-08-22 수정 */
	allChecked.click(function(){
		if($(this).is(":checked")){
			otherChecked.prop("checked", true);
			$(".accMobile").find(".formWrap").addClass("checked");
			allChecked.prop("checked", true);
		} else {
			otherChecked.prop("checked", false);
			$(".accMobile").find(".formWrap").removeClass("checked");
			allChecked.prop("checked", false);
		}
	});
	
	otherChecked.change(function(){
		var checkSize = $(".accMobile").find("li:gt(0)").find("input:checkbox").size();
		var checkedSize = $(".accMobile").find("li:gt(0)").find("input:checkbox:checked").size();
	
		if(checkedSize < checkSize){
			allChecked.prop("checked", false);
			$(".accMobile").find(".checkAll").removeClass("checked");
		} else {
			allChecked.prop("checked", true);
			$(".accMobile").find(".checkAll").addClass("checked");
		}
	});	
	/* //2016-08-22 수정 */
}

//액세서리 - 쿠폰 체크 - 2016-06-10 추가 - 2016-09-12 비활성 쿠폰 클릭제어
function accCoupon(){
	$(".accCoupon").each(function(){
		$(this).find("li").on("click",function(){
			if ($(this).hasClass("disabled")) {
				$(this).preventDefault();
			} 
			else if (!$(this).hasClass("on")){
				$(this).parent().find("li").removeClass("on");
				$(this).addClass("on");
			}
			else {
				$(this).removeClass("on");
			}			
		});
	});
}

//액세서리 - 보관함 담기 - 2016-06-13 추가
function accCubbyhole(){
	$(".accList").find(".favorite").on("click",function(){
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
//구매프로세스의 티기프트 상세화면에도 사용
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
//구매 프로세스 - 매장 방문일자 변경하기
function visitStore(){
	$(document).on("click", ".visitStore .btnVisit",function(){
		var visitStore = $(this).parents('.visitStore');
		var changeVisit = $(this).parents('.visitStore').next();
		var btnVisitEnd = $(this).parents('.visitStore').next().find('.btnVisitEnd');
		visitStore.removeClass('on');
		changeVisit.addClass('on');
		btnVisitEnd.click(function(){
			visitStore.addClass('on');
			changeVisit.removeClass('on');
		});
	});
	return;
}

//액세서리 - 상품 상세 - 2016-06-14 추가
function accDetail(){

	/* 2016-08-22 삭제
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
	*/

	/* 2016-08-22 수정 */
	//셀렉트박스 클릭
	$(document).on("click",".dropSelect>a",function(){
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

	//셀렉트박스 내용 클릭 2016-09-13 구조 변경
	$(document).on("click",".dropSelect .select_drop li",function(){
		if($(this).hasClass("soldout")){
			$(this).preventDefault();
		} else {
			var txt = $(this).find("span").text();
			$(this).parent().parent().prev().removeClass("on").text(txt);
			$(this).parent().parent().hide();
		}
	});
	/* //2016-08-22 수정 */

	$(document).on("click",".buyWrap .btnDgray",function(){
		if(!$(this).hasClass("on") && !$(this).parent().parent().hasClass("btnSoldout")){
			$(this).addClass("on");
		} else {
			$(this).removeClass("on");
		}
	});
}

//공시지원금 - 요금제별 지원금 보기에서 다이렉트샵 추가지원금 보기 
//2016-07-25 show, hide 개체 수정
function directPrice(){
	$(document).on("click",".directAddPrice button",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on").text("보기");
			$(".sf_directPrice").find(".directPrice_area").each(function(){
				if(!$(this).hasClass("typeCircle")){
					$(this).show();
					$(".directPrice_Type1").hide();
				} else {
					$(this).show().css("display", "inline-block");
				}
			});					
		} else {
			$(this).removeClass("on").text("닫기");
			$(".sf_directPrice").find(".directPrice_area").hide();
			$(".directPrice_Type1").show();
		}		
	});

	//공시지원금 - 변동 문자 알림
	$(document).on("click",".support .alert_wrap .bar_area p .btn_close",function(){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(".support .alert_wrap .alert_content").hide();
		} else {
			$(this).removeClass("on");
			$(".support .alert_wrap .alert_content").show();
		}
	});
}

//공시지원금 - 요금제 설정 중 맞춤요금제 조회 클릭
function sfPriceEdit(){
	$(".popSfprice .tab_select_box").each(function(){
		var selectBox = $(this);
		selectBox.find(".btnBox a").on("click",function(){
			$(".tab_select_box").find(".result").removeClass("checked");
			$(".tab_select_box").find(".result").find("input:radio").attr("checked",false);
			selectBox.find(".result").addClass("checked").show();
			selectBox.find(".result").find("input:radio").attr("checked",true);
		});
	});	
}


//더보기 버튼 관련 스크립트
function viewMore() {
	$(document).on("click",".order_type_wrap .member",function(){
		if(!$(this).hasClass("on")){
			$(".order_type_wrap .member").removeClass("on");
			$(this).addClass("on");
		}
	});
};

//모바일 필터설정 공시지원금 셀렉트 박스 체크박스로 변경
function range_check() {
	var docH = $(window).height();

	$(".montn_cont .layerSelect").css({'max-height' : docH - 70});
	var layerhh = $(".montn_cont .layerSelect").height();

	$(document).on("click",".range .month",function(){
		$(".montn_cont .mask, .montn_cont .layerSelect").show();
		$(".montn_cont .layerSelect").css({'margin-top' : -layerhh / 2 + 'px'});
	});
	$(document).on("click",".montn_cont .btnBox a",function(){
		$(".montn_cont .mask, .montn_cont .layerSelect").hide();
	});

	$(".plan_cont .layerSelect").css({'max-height' : docH - 70});
	var layerhhh = $(".plan_cont .layerSelect").height();

	$(document).on("click",".plan .plan_pick",function(){
		$(".plan_cont .mask, .plan_cont .layerSelect").show();
		$(".plan_cont .layerSelect").css({'margin-top' : -layerhhh / 2 + 'px'});
	});
	$(document).on("click",".plan_cont .btnBox a",function(){
		$(".plan_cont .mask, .plan_cont .layerSelect").hide();
	});
	$(document).on("click",".plan_cont li a",function(){
		$(".plan_cont li").removeClass('on');
		$(this).parents().addClass('on');
	});
};

//주문방식 선택 (적용 mAC1.3.2P.2T.html)
function order_type_click() {
	$('.moreBoxType1 a').click(function(){
		var items = $('.afterList li'),
		firstTen = items.slice(0, 5);
	$('.afterList').append(firstTen.clone());
	//applyLayout();
  });
};

//2016-07-19 구매프로세스 고객정보보호 추가
function customSave(){
	$(".customSave .step2").hide();
	$(".customSave .step1 .btnConfirm").click(function(){
		$(this).parents('.step1').hide();
		$(this).parents('.step1').next().show();
	});
	$(".inputTxt1").click(function(){
		if($(this).focus){
			$(this).next().removeClass('btnDisabled');
		}
	});
}

//기획전 스크롤 이벤트
function pr_scroll(){
	var headerH = $("header").outerHeight();
	var conInfoH = $(".conInfo").outerHeight();
	var pt_topH = headerH + conInfoH + 69;
	$(window).scroll(function(){
		if($(this).scrollTop() > pt_topH){
			//console.log('pt_topH'); 2016-08-11 주석 처리
			$(".planning_tab").addClass('scroll');
			$(".planning_tab").css({'position':'fixed'});
			$(".planning_tab .ul_box ul").css({'height':'0'});
		}else{
			$(".planning_tab").removeClass('scroll');
			$(".planning_tab").css({'position':'absolute', 'top':'0'});
			$(".planning_tab .ul_box ul").css({'height':'68px'});
		}
	});
}

//2016-07-25 레이어 팝업 닫기 추가 2016-09-16 닫기 버튼 위치 수정
function layerpopClose(){
	$(document).on("click", ".layer_pop .btnBox .btnClose", function(){
		$(this).parents('.layer_pop').hide();
		$("#container").css("z-index",1);
		$("body").css("z-index","auto");
		$("#mask").remove();
	});

	//이중레이어로 1번 닫고 2번 레이어 열때 1번 버튼에 넣을 클래스
	$(document).on("click", ".layer_pop .btnClose2", function(){
		$(this).parents('.layer_pop').hide();
		$("#mask").css("z-index",900);
	});
}

//2016-07-27 탭버튼 빈공간 클릭 제어
function tabDisable(){
	$(document).on("click", ".tabSwipe .swiperWrap .group .tabJs li", function(){
		$(this).preventDefault();
	});
}

//2016-08-01 뒤로가기 버튼 위치
function backBtn(){
	var topHeadResize = null; 
		$(document).find('div.topHead').each(function(index) 
		{
			var head = $(this);
			var backBtn = $(document).find('div.backBtn');
			var header = $('#Wrap header').height();

			var h = head.outerHeight(true);
			var bH = 0;
			if(backBtn.length>0) {
				bH = backBtn.height();
				backBtn.css('top' , ((h/2)-(bH/2)+ header) +'px');
			}
		});
}

// 2016-08-18 open close Layer  추가 
function ocLayer(){
	/* 1개 제어 */
	$(".box_open").hide();
	$(".bt_open").click(function() {
		var btnIndex = $(".bt_open").index(this);
		$(".box_open").eq(btnIndex).show();
	});

	/* 하위뎁스제어 */
	$("[class*=box_opens]").each(function(idx){
		$(".box_opens"+idx).hide();
		$(".box_opens"+idx+".opened").show();
		$('.bt_opens'+idx).bind('click' , function(){
			var btnIndex = $(".bt_opens"+idx).index(this);
			$(".box_opens"+idx).hide();
			$(".box_opens"+idx).eq(btnIndex).show();
		});
	});
}

// 2016-08-18 option, 구매가이드 버튼 제어
function subOption(){
	$(".sub_function>li, .shDeliver .listReturn li").click(function(){
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
	});
}

// 구매가이드에 사용된 2depth 탭버튼 제어
function shGuide(){
	$(".shBuyGuide .tabContent .tabSwipe .swiperWrap .group ul li .bt_opens1").css("font-size","20px"); //.unbind("click"); 2016-08-19 추가 by phj
}

//2016-08-23 실시간 채팅 상담 
function popCounsel(){
	var winhh = $(window).height();
	var chathead = $(".popChat").parent().find(".popHead").height();
	$(".pop_counsel .chat_view").css("height",winhh-chathead-100);
}

$(document).ready(function(){
	backBtn(); //2016-08-01 뒤로가기 버튼 위치
	fileUpload(); //공통 - 파일업로드 input
	pick(); // 모바일 - 리스트 찜
	mobile_step(); // 모바일 - 가입 단계 -2016-06-09 수정-
	planningAdd(); //기획전
	checkBoxAll();//액세서리 - 체크박스 전체 선택 노출 - 2016-06-10 추가
	accCoupon();//액세서리 - 쿠폰 체크 - 2016-06-10 추가
	accCubbyhole();//액세서리 - 보관함 담기 - 2016-06-13 추가
	scrollList();//공통 - 가로 스크롤 리스트 넓이 지정 - 2016-06-13 추가
	accBuyLayer();//액세서리 - 구매하기 레이어 옵션 선택 - 2016-06-13 추가
	buyService(); //구매 프로세스 - 서비스 업그레이드 2016-06-13 추가
	visitStore(); //구매 프로세스 - 매장 방문일자 변경하기
	accDetail();//액세서리 - 상품상세 - 2016-06-14 추가
	directPrice();//공시지원금 - 요금제별 지원금 보기에서 다이렉트샵 추가지원금 보기
	sfPriceEdit();//공시지원금 - 요금제 설정 중 맞춤요금제 조회 클릭
	viewMore();//더보기 버튼 관련 스크립트
	range_check();//모바일 필터설정 공시지원금 셀렉트 박스 체크박스로 변경
	order_type_click();//주문방식 선택
	customSave(); //구매프로세스 고객정보보호 2016-07-14 추가
	pr_scroll();//기획전 스크롤 이벤트
	layerpopClose(); //2016-07-25 레이어 팝업 닫기 추가, 이중레이어 제어
	//tabDisable(); //2016-07-27 탭버튼 빈공간 클릭 제어
	ocLayer(); //2016-08-18 div 열고 닫음 제어
	subOption(); // 2016-08-18 option버튼 제어
});
$(window).load(function(){
	shGuide();
	popCounsel(); //2016-08-23 실시간 채팅 상담  
	filter_bar(); // 모바일 - 필터설정하기 스크롤 2016-09-12 window load로 이동
});

