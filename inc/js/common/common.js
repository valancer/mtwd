/*
 * 2016.04.26
 * @setQInfo qInfo 스크립트 //mpoc/guide/layout_sp.html
 *
 * 2016.04.27
 * @setTopConBoxTglOn 추가 //mpoc/guide/layout2.html
 * @setUlExtendTglOn 추가 //www/mpoc/guide/etc.html
 * @setPopup .popup 사이즈 조절 추가 //www/mpoc/guide/syspop.html
 * @setPopup .popup checkPoint클릭 열고/닫기 추가//www/mpoc/guide/syspop.html
 * @setPopup .layer_pop 열고/닫기 추가 //www/mpoc/guide/syspop.html
 *
 * 2016.04.28
 * @setSwiper 추가
 * 	commonJs.HEIGHT , commonJs.WIDTH 추가 및 초기 ready 실행후 값을 셋팅후 resize 마다
 * @setTglBtn 추가
 * @setQInfo resizeObject로 변경
 * @setRadioBox , setCheckBox 변경
 * @setMyt 추가
 * mMY3.2.1.2.3.html 페이지 라디오 버튼 아래 툴팁정보 추가
 * @setMyt ul.autopayInfo 탭버튼 높이조절 추가 //mMY3.4.2.1.html
 * @ArcBox, @setUlExtendTglOn 삭제
 * @setTglBtn .tglBtnClose 추가
 * @setCheckPoint 추가 @setPopup checkPoint 삭제 //
 * @setCircuit 추가 회선정보 fixed 처리
 * @setCheckBox 체크박스 selector 변경 .formWrap //www/mpoc/guide/form.html
 * @setSwiper
 *
 * 2016.04.29
 * @setQInfo 수정
 * @setCheckPoint grayCont_resize 삭제
 * @setPopup grayCont_resize 삭제
 * @setCalendar 함수명 변경 및 코드 수정
 * @SetCheckBox, @SetRadioBox 클릭 이벤트 e.preventdefault() 삭제 ***** 모바일 토크백 사용시 비정상 작동 *****
 * @setPopup layerPopup 가운데정렬 및 마스크 설정 추가//mpoc/guide/layerpop.html
 * @SwiperSlider 높이 가변 추가
 * @setCalendar 외부연결 함수 추가 selectDate,getDate,setup
 * @setCommon 추가 layout3.html 화살표 센터제어
 * @setLayerPopupCenter inerpop 페딩제어 및 닫기버튼 제어
 *
 * 2016.05.02
 * @setCommon  헤드 closeBtn위치 조절 스크립트 추가 //mpoc/guide/layout4.html
 * swiper 수정
 * @setPopup 레이어팝업 닫기 버튼 스크립트 수정
 * @setPopup 시스템팝업 inPop height 세팅 스크립트 수정
 * @setProduct 추가 토글 버튼 및 fixed영역 제어
 * @setCircuit  mMY1.1.4.2.html 회선 정보 스크롤시 안보이다 스크롤 하지 안을시 나오도록 추가
 *
 * 2016.05.03
 * @setMyt 포인트이용내역 검색 기간검색 버튼 스크립트 추가//myt/mMY1.1.4.5.html
 * @commonJs.setSlider 추가//mpoc/product/MTS1.1.4.html
 * @setCommon shareWrap 정렬 추가 //mpoc/guide/layout3.html
 * @setProduct tabType3 추가//mpoc/product/mTs1.1.4.html
 * @setMyt 선물할 데이터량 선택 추가 //myt/mMY2.2.2.1T.1.html
 * @setCommon  .topConBox 안에 버튼이 없을 시 padding-right제거 추가
 * @setCommon  .circuit1.center>.lineCon.type1 버튼 없을시 padding-right 제거 추가
 *
 * 2016.05.04
 * @debug 추가
 * @swiperSlider 수정
 * @setPopup setLayerPopupCenter 닫기버튼 가운데정렬 추가
 * @getVersion 안드로이드 버전 체크 함수 추가
 *
 * 2016.05.06
 * @setQInfo 레이어팝업 오류 수정 //mpoc/myt/mMY3.1.3.1P.html#
 * @setQInfo div셀렉터 삭제
 *
 * 2016.05.09
 * @setProduct 탭클릭 'on'클래스 및 '열기'/'닫기' 토글 추가 //mTS1.1.1.html# 10GB이상(무제한) 탭 클릭시
 * @setPopup 레이어 및 시스템 팝업 안드로이드 4.0버전이하 fixed변경 스크립트 추가
 * @getVersion 아이폰 분기 처리.
 * @setCommon .circuit1>.lineType1 변경
 * @setSwiper paging기능 추가
 * @setCommon changeLineSlide 슬라이드 선택 셀렉트 박스 스크립트 추가 //mpoc/util/common/mUT10.8P.html
 * @setMyt div.datesetting>button 스크립트 parent('.narrowCon') > parent() 변경
 * @changeLineSlide 초기화 수정//mpoc/util/common/mUT10.8P.html
 * @setMyt div.datesetting>button click이벤트 높이 값 수정
 * @setTab 추가
 *
 * 2016.05.10
 * @setProduct 내가 찾은 요금상품 카테고리 탭//mpoc/product/mTS1.1.1.html#
 * @setTab 수정
 * @setPopup #mask 하위버전 css변경 수정
 *
 * 2016.05.11
 * @setTab 수정
 * @setMask @clearMask 추가
 * @setTabJs 추가 setTabJs 클래스가 존재 하면 href 의 id값에 따라 활성화 비활성화 처리
 * @setCalendar 가운데 정렬 추가
 *
 * 2016.05.12
 * @setProduct findProduct>tabType2 로 변경 //내가 찾은 요금상품 카테고리 탭 //추가 mMY1.2.1.2T.1.html#
 * @setTab 글자 높이값 조절 수정
 * @setSwiper 수정 mMY2.1.1.1.html 적용
 *
 * 2016.05.13
 * @commonJs.setSelectBox 셀렉트 박스 생성 스크립트 추가
 * @setMask, clearMask 스크롤 방지 스크립트 삭제
 * @setMyt div.datesetting>button '.call_gift'삽입 폐이지 높이값 변경 스크립트 추가//mpoc/myt/mMY1.2.1.1T.1.1.html
 * @setMyt div.datesetting>button '.data_info' 높이 값 설정 추가//mpoc/myt/mMY1.2.1.1T.1.1.html
 *
 * 2016.05.16
 * @SwiperSlider 수정
 * @commonJs.setSlider 마우스 이벤트 추가 (mousedown, click, mouseup, mousemove, keydown, dragstart)
 *
 * 2016.05.17
 * @setQInfo 화면 폭보다 qTxt가 클 경우 width/min-width 변경 스크립트 추가
 * @setTab 타이틀값 변경 스크립트 추가
 * @setQInfo conReset클래스 삽입 스크립트 추가, 실행 함수 위치변경(ready -> load)
 * @setMyt '.datesetting .dateSort' 기간선택에 기준월 선택 스크립트 추가//mpoc/myt/mMY1.1.4.4.html
 * @setPopup 시스템 팝업 window.scrollbars.visible없는 경우 높이 auto로 변경//mpoc/myt/mMY1.1.1.3.4.1L.html
 * @setCalendar>calendarFocus animate효과 삭제
 * @setMyt 기본배송지 버튼 'on'클래스 토글 기능 추가//mpoc/myt/mMY1.1.6.1.html
 *
 * 2016.05.18
 * @setMask, @clearMask 바디 스크롤 방지 스크립트 추가
 * @setPopup 레이어팝업 높이 조절 스크립트 수정(화면의 80%보다 작을 경우 현재 높이 유지)
 *
 * 2016.05.19
 * @setPurchase 추가
 * @setPurchase "결합상품신청" 이용약관 높이 조절 //mpoc/purchase/mPJ1.3.4.1.1.html
 * @setPurchase "부가서비스 신청" 서비스 옵션 선택 토글'on' //mpoc/purchase/mPJ2.1.23.html
 *
 * 2016.05.20
 * @setPurchase "결합상품신청" 이용약관 높이 조절 클래스 추가(.agreeBox, .agreeCheck)//mpoc/myt/mMY5.3.4P.1.html
 * @setPurchase 이용약관 높이 조절 스크립트 @setCommon으로 이동
 *
 * 2016.05.24
 * @setCenter 추가
 * @setCenter FAQ 자주찾는질문 카테고리 스크립트 추가 //mpoc/center/mCS2.1.1T.html
 *
 * 2016.05.25
 * @setCenter 지도보기 상세 목록 열고/닫기 //mpoc/center/mCS4.1.1T.2.2.html#
 * on -> bind로 변경
 * @setTab urld해쉬태그 처리 //mpoc/center/mCS3.2.1T.html
 * @setPopup 시스템 팝업 body fixed 처리 추가
 * @setPopup 시스템 팝업 .popup 넓이 화면 넓이로 css변경 처리 추가
 *
 * 2016.05.26
 * @setSwiper '.sidemg15' 화면에 좌우 margin이 각각 15인경우 넓이 조절 추가//mpoc/center/mCS.html
 * @setCenter '공식 인증 대리점' 관심매장 등록 버튼 //mpoc/center/mCS4.1.1T.1.html
 * @setCenter '매장소개' 관심매장 등록 버튼 //mpoc/center/mCS4.1.1.html
 * @setCheckBox, @setRadioBox  체크박스, 라디오버튼에 '.basicType'클래스가 있을시 디자인 미적용 스크립트 추가
 * @setCenter ARS고객센터 문의량 급증 예상 캘린더 스크립트 추가 //mpoc/center/mCS.1T.html
 * @setRadioBox 팝업창에서 라디오 박스 클릭시 스크롤 자동이동 막기 추가 //mpoc/center/mCS1.1.2.1L.1T.html
 * @setCommon 탑배너 닫기 스크립트 추가 //mpoc/util/common/mUT8.3.1L.html
 * @SwiperSlider __resize함수 높이 설정 현재 인덱스 수정 //mpoc/util/common/mUT8.1.html
 *
 * 2016.05.27
 * @setPopup 시스템 팝업 스크롤이 안되는 경우(갤럭시S3) body css를 position:fixed -> overflow-y:hidden 으로 변경 추가
 * @setPopup 시스템팝업 컨텐츠영역 상하 여백 제거(mbLen 삭제)
 * @setPopup 레이어 팝업 오픈 시 resize 트리거 실행(이용약관 높이 조절 실행) 추가
 * @setTab Tab/type1 열려있을때 탭클릭시 닫기 기능 추가, Tap/type2 탭클릭으로 닫을 경우 'on'클래스 삭제 추가 //mpoc/guide/tab.html
 * @setTab Tab/type1 2번째 탭 클릭시 해당컨텐츠 열고 닫기 기능 추가
 * @setPopup mbLen삭제 복원, 해당 엘리먼트(.steptype, .lineType1, .tab, .hideView)가 있는 경우만 상단 여백 제거
 *
 * 2016.05.30
 * @setPopup 레이어 팝업 body 넓이값 설정(100%) 추가(타이틀이 화면 넓이보다 커짐)//mpoc/center/mCS4.1.1.html#
 * @setTab 탭클릭이벤트 reHeight함수 resize 트리거 실행으로 변경(안보이는 경우 리사이즈되면 해당 탭 높이가 0이됨)
 * @setPopup 높이 80% -> 90%로 변경
 * @setMyt 기간선택 버튼 이벤트 높이 조절 스크립트 삭제('div.datesetting>button')
 * @setMyt 기간선택 버튼 개월버튼 셀렉터 변경('.datesetting .dateSort' -> '.settingCon .dateSort')
 * @setMyt 이용내역 박스 높이 조절 추가 //mpoc/myt/mMY1.1.4.3.1.html, mpoc/myt/mMY1.1.4.4.html#, mpoc/myt/mMY1.1.4.5.html
 *
 * 2016.05.31
 * @setMyt 기간선택 버튼 클래스 'on' 토글 기능 추가('.useSearch')//myt/mMY1.1.4.5.html
 * @setMyt '이용내역 박스 높이 조절' 스크립트 resize시 무한 증가 방지 스크립트 추가
 * @setMyt 내가 찾은 요금상품 카테고리 탭 높이(padding-top,padding-bottom) 조절 스크립트 추가//mpoc/product/mTS1.1.1.html //mMY1.2.1.2T.1.html
 * @setQInfo 특정단말기(갤럭시S3) resize시 왼쪽 여백 생기는 현상 추가 수정
 * @setMask, @clearMask 레이어팝업에서 셀렉트 박스 여는 경우 레이어팝업을 mask밑으로 이동 스크립트 추가
 *
 * 2016.06.01
 * @setSwiper auto 기능 추가
 *
 */

(function ($, window)
{
	'use strict';
	if( !window.commonJs )
	{
		window.commonJs = {};
	}
	var commonJs = window.commonJs;
	commonJs.HEIGHT = 0;
	commonJs.WIDTH = 0;

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


	// 셀렉트 박스 관련 추가
	var selectBox = $({});
	commonJs.selectBox = selectBox;
	commonJs.event = {
		SELECTBOX_INIT : 'selectBoxInit'
	};

	var indexSB=0;
	commonJs.setSelectBox=function(trgt){
		$(trgt).each(function (){
			var OrglSlt=$(this);
			var OrglSltOpt;
			var SelectBox;

			var sltArrTxt=[];
			var sltArrVal=[];
			var sltIdx;
			var sltTxt;
			var sltVal;
			var sltLen;
			var sltBoxIdx=indexSB;
			indexSB++;

			var bfSpanTxt;
			var lsEm;
			var afSpanTxt;

			var isSlt2=false;
			var layerSelect;
			var selectList;
			var selectListLi;
			var selectListA;
			var selectBoxA;

			var _init=function(){
				OrglSltOpt=OrglSlt.children('option');
				OrglSlt.children('option').each(function(){
					sltArrTxt.push($(this).text());
					sltArrVal.push($(this).attr('value'));
				});
				sltLen=sltArrTxt.length;
				isSlt2=OrglSlt.hasClass('select2');
				if(isSlt2){
					if(OrglSlt.hasClass('rt')){//right
						afSpanTxt=OrglSlt.next('span').text();
					}else if(OrglSlt.hasClass('lt')){//left
						bfSpanTxt=OrglSlt.prev('span').text();
					}else if(OrglSlt.hasClass('bt')){//both
						afSpanTxt=OrglSlt.next('span').text();
						bfSpanTxt=OrglSlt.prev('span').text();
					}

				}
				OrglSlt.hide();
				_creatLayout(OrglSlt);
				_sortLayerSelect();
				_setEvent();

				var i=OrglSlt.find('option:selected').index();
				_selectListByIdx(i);
				_setApi();
			};

			var _creatLayout=function(target){
				target.wrap('<div/>');
				SelectBox=target.parent('div');

				var tmpStr=('<a href="#ls_'+sltBoxIdx+'" title="'+OrglSlt.attr('title')+'">선택하세요</a>');
				SelectBox.prepend(tmpStr);

				tmpStr='<div class="layerSelect" id="ls_'+sltBoxIdx+'"><div class="selectCon"><div class="list"><ul>';
				for(var i=0;i<sltArrTxt.length;i++){
					if(OrglSltOpt.eq(i).is(":disabled")){
						tmpStr+='<li class="disabled"><a href="#">'+sltArrTxt[i]+'</a></li>';
					}else{
						tmpStr+='<li><a href="#">'+sltArrTxt[i]+'</a></li>';
					}
				}
				tmpStr+='</ul></div>';
				tmpStr+='<div class="btnBox h20"><a href="#" class="btnL btnGray">닫기</a></div></div>'

				$('body').append(tmpStr);

				layerSelect=$("#ls_"+sltBoxIdx);
				selectList=layerSelect.find('div.list');
				selectListLi=selectList.find('ul>li');
				selectListA=selectListLi.children('a');
				selectBoxA=SelectBox.children('a');


				if(isSlt2){
					SelectBox.addClass('select2');
					layerSelect.prepend('<div class="tit"><p><span></span><em></em><span></span></p></div>');

					layerSelect.children('div.tit').find('span:eq(0)').text(bfSpanTxt);
					layerSelect.children('div.tit').find('span:eq(1)').text(afSpanTxt);
					lsEm=layerSelect.children('div.tit').find('em');


					layerSelect.children('.selectCon').addClass('topLine');
				}else{
					SelectBox.addClass('select');
				}

				if(OrglSlt.is(':disabled')) SelectBox.addClass('disabled');

				if(!getVersion()){
					layerSelect.css('position','absolute');
				}

			};

			var _sortLayerSelect=function(){
				if(getVersion()){
					var maxHeight=commonJs.HEIGHT*0.8;
					var lsHeight=layerSelect.outerHeight(true);
					var slHeight=selectList.outerHeight(true);
					if(maxHeight<lsHeight) selectList.css('height',(maxHeight-lsHeight+slHeight)+'px');
					layerSelect.css('top',(commonJs.HEIGHT/2-layerSelect.outerHeight(true)/2)+'px');
				}else{
					var scTop=$(window).scrollTop();
					layerSelect.css('top',(scTop+commonJs.HEIGHT*0.07)+'px');
				}
			};

			var _selectListByIdx=function(idx){
				if(!(typeof idx=="number")) return false;

				selectListLi.removeClass('on');
				selectListLi.eq(idx).addClass('on');
				sltIdx=idx;
				sltTxt=sltArrTxt[idx];
				sltVal=sltArrVal[idx];
				selectBoxA.text(sltTxt);

				if(isSlt2){
					lsEm.text(sltTxt);
				}
				_sortLayerSelect();
				SelectBox.trigger('change.selectbox', _getInfoSB());

				return sltIdx;
			};

			var _selectListByTxt=function(val){
				for(var i=0;i<sltLen;i++){
					if(sltArrTxt[i]==val) {
						return _selectListByIdx(i);
					}
				}
				return false;
			};

			var _selectListByValue=function(val){
				for(var i=0;i<sltLen;i++){
					if(sltArrVal[i]==val) {
						return _selectListByIdx(i);
					}
				}
				return false;
			};

			var _setEvent=function(){
				selectBoxA.bind('click',function(e){
					e.preventDefault();
					if(SelectBox.hasClass('disabled')) return;

					layerSelect.show();
					_sortLayerSelect();
					setMask();
				});

				selectListA.bind('click',function(e){
					e.preventDefault();
					var thisLi=$(this).parent();
					if(thisLi.hasClass('disabled')) return;

					var idx=thisLi.index();
					_selectListByIdx(idx);
				});

				layerSelect.find('.btnBox>a.btnL').bind('click',function(e){
					e.preventDefault();
					layerSelect.hide();
					clearMask();
				});

				$(resizeObject).bind('resize',function(){
					_sortLayerSelect();
				});
			};

			var _remove=function(){
				SelectBox.before(OrglSlt[0]);

				var retVal=SelectBox.prev();
				retVal.show();
				SelectBox.remove();
				layerSelect.remove();

				OrglSlt=null;
				OrglSltOpt=null;
				sltArrTxt=[];
				sltArrVal=[];
				sltIdx=null;
				sltTxt=null;
				sltVal=null;
				sltLen=null;
				bfSpanTxt=null;
				lsEm=null;
				afSpanTxt=null;
				isSlt2=false;
				layerSelect=null;
				selectList=null;
				selectListLi=null;
				selectListA=null;
				selectBoxA=null;

				return retVal;
			};

			var _resetSB=function(){
				OrglSlt=_remove();
				return _initSB();
			};

			var _initSB=function(){
				if(OrglSlt) return false;
				_init();
				return SelectBox;
			};

			var _disabledSB=function(val){
				if(typeof val!="boolean"){
					return -1;
				}
				if(val) SelectBox.addClass('disabled');
				else SelectBox.removeClass('disabled');
				return val;
			};

			var _getInfoSB=function(){
				return {
					index:sltIdx,
					value:sltVal,
					text:sltTxt
				};
			};

			var _setApi=function(){
				var scope={
					getInfoSB:function(){return _getInfoSB();},
					getIndexSB:function(){return sltIdx;},
					getValueSB:function(){return sltVal;},
					getTextSB:function(){return sltTxt;},
					setIndexSB:function(val){return _selectListByIdx(val);},
					setTextSB:function(val){return _selectListByTxt(val);},
					setValueSB:function(val){return _selectListByValue(val);},
					removeSB:function(){return _remove();},
					resetSB:function(){return _resetSB();},
					disabledSB:function(val){return _disabledSB(val);}
				};
				SelectBox.data('scope',scope);
			};

			_init();
		});
	};

	if (jQuery.fn.getInstance === undefined) jQuery.fn.getInstance = function () {
		if($(this).length>1) return null;
		return this.data('scope');
	};

	// 모바일용 디버거
	function debug( str )
	{
		var debug = $('#debugPannel');
		if( !debug.attr('id') )
		{
			var body = '<textarea name="debugPannel" id="debugPannel"></textarea>';
			$('body').prepend(body);
			debug = $('#debugPannel');
			debug.css(
				{
					'position':'fixed',
					'bottom':'100px',
					'width':'100px',
					'height':'100px',
					'z-index':'99999999',
				});
		}
		debug.css('width',commonJs.WIDTH);
		var s = debug.html()+'\n' + str;
		debug.html(s);
	};

	// 마스크 추가
	var currentTop=0;
	function setMask(bfObj){
		if($("#mask").length!=0) {//레이어팝업 열려있는 경우
			$('.layer_pop').each(function(){
				var target=$(this);
				if(target.css('display')!='none') target.css('z-index','999');
			});
			return;
		}

		if(!getVersion()){
			$('body').prepend('<div id="mask"></div>');

			$("#mask").css({
				'position':'absolute',
				'top':'0px',
				'height':document.body.scrollHeight+'px'
			});
		}else{
			if(bfObj) bfObj.before('<div id="mask"></div>');
			else $('body').append('<div id="mask"></div>');

			currentTop=$('body').scrollTop();
			$('body').css({
				'top':'-'+currentTop+'px',
				'position':'fixed',
				'width':'100%'
			});
		}
	}

	// 마스크 삭제
	function clearMask(isLayerPop){
		var chkLayer=false;
		if(!isLayerPop){
			$('.layer_pop').each(function(){//레이어팝업 열려있는 경우
				if($(this).css('dispaly')!='none') {
					$('.layer_pop, calBox').css('z-index','999999');
					chkLayer=true;
				}
			});
		}

		if(chkLayer) return;

		$("#mask").remove();
		if(getVersion()) {
			$('body').css({
				'top':'',
				'position':'',
				'width':'auto'
			});

			$('body').scrollTop(currentTop);
		}
	}

	function getVersion()
	{
		var x = navigator.userAgent;
		var index = x.indexOf('Android');
		if(index==-1) return true; //아이폰 분기 처리.
		var and_v = eval(x.substr(index+8,1));
		var check = true;
		if( and_v < 4){
			check = false;
		}
		//debug( x );
		//debug( and_v );
		return check;
	}

	var doc = $(window.document);

	function setTab()
	{
		var tab = doc.find('div.tab');
		tab.each(function()
		{
			var $this = $(this);
			var dethList = $this.children('ul.dethList').children('li');
			dethList.each(function( idx )
			{
			});

			var tabContent = $this.children('.tabContent').children('li');
			var tabTitle;
			var menuType = 0;

			if( tabContent.size()>0 )
			{
				// 탭에 상단 메뉴가 2개인 경우
				menuType = 0;
				var title = dethList.eq(0).children('a').children('span');
				var sub = dethList.eq(1).children('a').children('span');
				dethList.children('a').bind('click' , function( evt )
				{
					evt.preventDefault();
					var ta = $(evt.target).closest('li');

					if( ta.index() == 0){
						if(tabContent.eq(0).css('display')=="block"){//닫기
							tabContent.css('display','none');
							if(tabTitle){
								tabTitle.children('a').removeClass('on');
							}

							dethList.eq(0).removeClass('on');
							dethList.eq(1).removeClass('on');
						}else{//열기
							//0518 추가
							ta.addClass('on');
							$this.children('.tabContent').css('display','block');
							//0518 추가

							tabContent.eq(0).css('display','block');
							tabContent.eq(1).css('display','none');
						}
					}else if(tabContent.eq(1).css('display')=="none"){//열기
						ta.addClass('on');
						$this.children('.tabContent').css('display','block');

						tabContent.eq(0).css('display','none');
						tabContent.eq(1).css('display','block');
					}else{//닫기
						tabContent.css('display','none');
						if(tabTitle){
							tabTitle.children('a').removeClass('on');
						}

						dethList.eq(0).removeClass('on');
						dethList.eq(1).removeClass('on');
					}

					$(resizeObject).trigger('resize');
					// reHeight( tabContent.eq(0).children('.tabSwipe'));

				});
				tabContent.css('display','none');
			}else{
				menuType = 1;
				tabTitle = $this.children('.tabTitle');
				tabContent = $this.children('.tabContent');
				tabContent.css('display','none');
				$this.children('div.tabTitle').children('a').bind('click' , function(evt)
				{
					evt.preventDefault();
					$(evt.target).closest('a').addClass('on');
					if( tabContent.css('display') == 'none'){
						tabContent.css('display','block');
					}else{
						tabContent.css('display','none');
						$(evt.target).closest('a').removeClass('on');
					}

					$(resizeObject).trigger('resize');
					// reHeight( tabContent.children('.tabSwipe'));
				});
				var resize = function()
				{
					reHeight( tabContent.children('.tabSwipe'));
				};
				tabContent.children('.tabSwipe').data('resizeH',resize);
			}
			menuCheck( dethList );
			tabContent.each(function(idx)
			{
				var tContent = $(this);
				var swiper = tContent.children('div.tabSwipe');
				var gropList = swiper.children('.swiperWrap');
				var _title = title;
				var _sub = sub;
				var depth = idx;
				var paging = swiper.children('.paging');
				//var paging=con.children('.paging');
				//console.log( paging.attr('class') );
				swiper.children('button.btnClose').bind('click',function()
				{
					tContent.css('display','none');
					if(tabTitle){
						tabTitle.children('a').removeClass('on');
					}

					dethList.eq(0).removeClass('on');
					dethList.eq(1).removeClass('on');
				});

				gropList.each(function( idx2 )
				{
					var lilist = $(this).children('.group').children('ul').children('li');
					// 리스트 첫번째 요소 활성화
					//lilist.eq(0).addClass('on');
					var tabJS = (function()
					{
						var ch = false;
						if( lilist.parent().hasClass('tabJs') ){
							ch = true;
						}
						return ch;
					})();

					//해쉬태그 처리 //mpoc/center/mCS3.2.1T.html
					var hashTag=window.location.hash;
					lilist.children('a').each(function(){
						if($(this).attr('href')==hashTag){
							lilist.removeClass('on');
							$(this).parent().addClass('on');
							return false;
						}
					});

					lilist.children('a').bind('click', function(evt)
					{
						evt.preventDefault();
						lilist.removeClass('on');
						var target =$(evt.target).closest('li');
						target.addClass('on');
						switch( menuType )
						{
							case 0 :
								if( depth == 0){
									dethList.eq(0).removeClass('on');
									dethList.eq(1).addClass('on');
									_title.empty();
									_title.html( target.text() );
									tabContent.eq(0).css('display','none');

									tabContent.eq(1).css('display','block');
									tabContent.eq(1).children('.tabSwipe').css('display','none');
									tabContent.eq(1).children('.tabSwipe').eq(target.index()).css('display','block');

									reHeight( tabContent.eq(1).children('.tabSwipe').eq(target.index()));
									var swipe = tabContent.eq(1).children('.tabSwipe').eq(target.index()).find('ul>li').eq(0).children('a');
									_sub.empty();
									_sub.html( swipe.text() );
									menuCheck( dethList );
								}else{

								}
							break;
							case 1 :
								if( tabJS )
								{
									var id = $(this).attr('href');
									if ( doc.find( id ).attr('id') )
									{
										tabContent.css('display','none');
									}
								}
								tabTitle.find('a>span').text($(this).text());
							break;
						}
					});
				});
			});
		});

		function menuCheck( target )
		{
			var ch = false;
			var n = 0;
			target.filter('li').each(function()
			{
				$(this).removeAttr("style");
				$(this).children('a').removeClass('center');
				if( !$(this).children('a').text().length )
				{
					ch = true;
					$(this).css('display','none');
					n = $(this).index();
				}
			});
			if( ch )
			{
				target.not(':eq('+n+')').children('a').addClass('center');
			}
		}

		function reHeight( target )
		{
			//console.log('===reHeight===');
			target.find('.swiper-container').each(function(idx)
			{
				var list = $(this).find('ul>li');
				list.filter(':even').each(function(index)
				{
					var li = $(this);
					var tli = list.eq(li.index()+1);
					var h = 0;
					li.removeAttr("style");
					tli.removeAttr("style");
					li.children().removeAttr("style");
					tli.children().removeAttr("style");
					if( li.height() > tli.height())
					{
						h = li.height();
						li.css({'height':h+'px' } );
						tli.find('a').css('line-height',(h/2)+'px');
						tli.css({'height':h+'px' });
					}else if( li.height() < tli.height() ){
						h = tli.height();
						li.find('a').css('line-height',(h/2)+'px');
						li.css({'height':h+'px'  });
						tli.css({'height':h+'px'  });
					}
				});
			});
		}
	}

	//슬라이더 ex)//mpoc/product/mTS1.1.4.html
	commonJs.setSlider=function(sltr, curVal, max, hasPoint, hasCurVal){
		$(sltr).each(function(){
			var curX=null;
			var sliderHandle=null;
			var slider=$(this);
			var ctrl=slider.find('.controller');
			var ctrlVal=ctrl.find('strong>span');
			var overUnit=ctrl.find('strong>em');
			var currUsage=slider.find('span.currUsage');
			var maxLeft=Number(ctrl.parent('.controllerArea').css("width").replace("px",""));

			var currPoint;
			var customUsage;
			var currPointLeft;
			var ctrlEmVal;

			if(hasCurVal){
				currPoint=slider.find('.currPoint');
				customUsage=slider.find('.customUsage');
				ctrlEmVal=ctrl.find('em>span');
				ctrlEmVal.text(0);
			}

			if(curVal>=max){
				ctrl.css("left", maxLeft+"px");
				currUsage.css("width", maxLeft+"px");
				ctrlVal.text(max);
				if(hasCurVal){
					currPoint.css("left", maxLeft+"px");
					customUsage.css("width", maxLeft+"px");
					currPointLeft=Number(currPoint.css("left").replace("px",""));
				}
				overUnit.show();
			}
			else if(curVal<0){
				ctrl.css("left","0px");
				currUsage.css("width","0px");
				ctrlVal.text(0);
				if(hasCurVal){
					currPoint.css("left", "0px");
					customUsage.css("width", "0px");
					currPointLeft=Number(currPoint.css("left").replace("px",""));
				}
				overUnit.hide();
			}
			else{
				ctrl.css("left",curVal/max*maxLeft+"px");
				currUsage.css("width",curVal/max*maxLeft+"px");
				if(hasPoint) ctrlVal.text(Math.round(curVal*10)/10);
				// else ctrlVal.text(parseInt(curVal));
				else ctrlVal.text(Math.round(curVal));

				if(hasCurVal){
					currPoint.css("left",curVal/max*maxLeft+"px");
					customUsage.css("width",curVal/max*maxLeft+"px");
					currPointLeft=Number(currPoint.css("left").replace("px",""));
				}
				overUnit.hide();
			}

			var fn_result=function(x, isKeyDown){
				var curLeft=Number(ctrl.css("left").replace("px",""));
				var resLeft=curLeft-curX+x;

				if(isKeyDown) resLeft=curLeft+x;

				var val;
				var emVal;
				if(hasCurVal){
					if(resLeft<0) {
						ctrl.css("left","0px");
						currUsage.css("width","0px");
						customUsage.css("width",currPointLeft+"px");
						ctrlVal.text(0);
						ctrlEmVal.text(-curVal);
						overUnit.hide();
					}else if(resLeft>=maxLeft) {
						ctrl.css("left",maxLeft+"px");
						currUsage.css("width",currPointLeft+"px");
						customUsage.css("width",maxLeft+"px");
						ctrlVal.text(max);
						if(hasPoint) ctrlEmVal.text("+"+Math.round((max-curVal)*10)/10);
						else ctrlEmVal.text("+"+Math.round(max-curVal));
						overUnit.show();
					}else if(resLeft<=currPointLeft){
						ctrl.css("left",resLeft+"px");
						currUsage.css("width",resLeft+"px");
						customUsage.css("width",currPointLeft+"px");

						if(hasPoint) {
							val=Math.round(resLeft/maxLeft*max*10)/10;
							emVal=Math.round((val-curVal)*10)/10;
						}else {
							// val=parseInt(resLeft/maxLeft*max);
							val=Math.round(resLeft/maxLeft*max);
							emVal=val-curVal;
						}

						ctrlVal.text(val);
						ctrlEmVal.text(emVal);
						overUnit.hide();
					}else if(resLeft>currPointLeft){
						ctrl.css("left",resLeft+"px");
						currUsage.css("width",currPointLeft+"px");
						customUsage.css("width",resLeft+"px");

						if(hasPoint) {
							val=Math.round(resLeft/maxLeft*max*10)/10;
							emVal=Math.round((val-curVal)*10)/10;
						}
						else {
							// val=parseInt(resLeft/maxLeft*max);
							val=Math.round(resLeft/maxLeft*max);
							emVal=val-curVal;
						}

						ctrlVal.text(val);
						ctrlEmVal.text("+"+emVal);
						overUnit.hide();
					}
				}else{
					if(resLeft<0) {
						ctrl.css("left","0px");
						currUsage.css("width","0px");
						ctrlVal.text(0);
						overUnit.hide();
					}
					else if(resLeft>=maxLeft) {
						ctrl.css("left",maxLeft+"px");
						currUsage.css("width",maxLeft+"px");
						ctrlVal.text(max);
						overUnit.show();
					}
					else {
						ctrl.css("left",resLeft+"px");
						currUsage.css("width",resLeft+"px");

						if(hasPoint) val=Math.round(resLeft/maxLeft*max*10)/10;
						// else val=parseInt(resLeft/maxLeft*max);
						else val=Math.round(resLeft/maxLeft*max);
						ctrlVal.text(val);
						overUnit.hide();
					}
				}

			};

		    //event----------------------------------------------------------------------
		    ctrl.bind("touchstart",function(e){
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;//모바일 화면 드래그 방지
		    	curX=e.originalEvent.touches[0].clientX;
		    	sliderHandle=this;
		    });

		    $('html').bind("touchend",function(e){
		    	curX=null;
		    	sliderHandle=null;
		    });

		    $('html').bind("touchmove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.originalEvent.touches[0].clientX);
					curX=e.originalEvent.touches[0].clientX;
		    	}
		    });
		    //--------------------------------------------------------------------------

		    ctrl.bind("dragstart",function(e){//블록 드래그 방지 ie7/8
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;
		    });

			//pc mouse event
		    ctrl.bind("mousedown",function(e){
		    	curX=e.pageX;
		    	sliderHandle=this;
		    });
		    ctrl.bind("click",function(e){//a 태그 클릭 이벤트 방지.
		    	e.preventDefault();
		    });

		    $('html').bind("mouseup",function(e){
		    	curX=null;
		    	sliderHandle=null;
		    });

		    $('html').bind("mousemove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.pageX);
		    		curX=e.pageX;
		    	}
		    });

		    ctrl.bind('keydown',function(e){
		    	if(e.keyCode==39||e.keyCode==38){
		    		e.preventDefault();
		    		if(hasPoint){
		    			fn_result(maxLeft/(max*10),true);
		    		}else{
		    			fn_result(maxLeft/max,true);
		    		}

		    	}else if(e.keyCode==37||e.keyCode==40){
		    		e.preventDefault()
		    		if(hasPoint){
		    			fn_result(-maxLeft/(max*10),true);
		    		}else{
		    			fn_result(-maxLeft/max,true);
		    		}
		    	}
		    });
		    //--------------------------------------------------------------------------

		});
	};
	//----------------------

	// 추가
	function SwiperSlider( target , opt )
	{
		var swiper = this;
		swiper.target = $(target);

		var warper = swiper.target.children('.swiperWrap');
		warper.css('width','999999px');
		warper.addClass('swiper-warper');
		var container = warper.children();
		container.addClass('swiper-container');
		swiper.activeIndex = 0;
		var eventBlock = true;
		var totalItem = container.length;
		swiper.length = totalItem;

		// 스와이프 컨텐츠의 높이 값을 제대로 읽지 못하는 경우가 있어서 timeout  추가
		var first =container.eq(0);
		var th = first.outerHeight(true);
		if(th){
			setTimeout(function(){
				th = first.outerHeight(true);
				warper.css('height',th+'px');
			},10);
		}

		var startX = 0;
		var startY = 0;

		warper.bind('touchstart , mousedown' , function(e)
		{
			//e.stopPropagation();
			if(e.type == 'mousedown'){
			//if(!e.originalEvent.touches){
				e.preventDefault();
				startX = e.pageX;
			}else{
				startX = e.originalEvent.touches[0].pageX;
				startY = e.originalEvent.touches[0].pageY;
			}
		});

		warper.bind( 'touchmove , mousemove' , function(e)
		{
			var endX = 0;
			var endY = 0;

			if(e.type != 'mousemove')
			{
				endX = e.originalEvent.touches[0].pageX;
				endY = e.originalEvent.touches[0].pageY;

				if( Math.abs(startX - endX)>Math.abs(startY - endY) )
				{
					e.preventDefault();
				}
			}
		});

		warper.bind('touchend , mouseup' , function(e)
		{
			var endX = 0;
			if(e.type == 'mouseup'){
			//if(!e.originalEvent.touches){
				endX = Number(e.pageX);
				e.preventDefault();
			}else{
				endX = Number(e.originalEvent.changedTouches[0].pageX);
			}

			if( Math.abs(startX - endX) > 70)
			{
				if(startX < endX)
				{
					warper.trigger('swiperright');
				}else{
					warper.trigger('swiperleft');
				}
			}
			startX = 0;
		});

		warper.bind('swiperright' , function()
		{
			if( eventBlock && ( swiper.activeIndex > 0) )
			{
				swiper.__prevSlider();
			}
		});
		warper.bind('swiperleft' , function()
		{
			if( eventBlock && (  swiper.activeIndex < swiper.length-1))
			{
				swiper.__nextSlider();
			}
		});

		swiper.__moving = false;
		swiper.__nextSlider = function()
		{
			this.__moveSlider( swiper.activeIndex+1 );
		};

		swiper.__prevSlider = function ()
		{
			this.__moveSlider( swiper.activeIndex-1 );
		};

		swiper.__setSlideWidth = function( n )
		{
			opt.width = n;
		};

		swiper.__resize = function()
		{
			var s = -((swiper.activeIndex) *  opt.width);
			if( opt.type=='type3' ){
				s = -(commonJs.WIDTH/2 + 70)*swiper.activeIndex;
			}
			var sWarper =swiper.target.find('.swiper-warper');
			sWarper.css('margin-left' , s );
			var li = sWarper.children('.swiper-container').eq(swiper.activeIndex);
			var h = li.outerHeight(true);
			sWarper.css('height',h+'px');

			//myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 단일적용
			if( opt.conWidth && swiper.activeIndex > 0)
			{
				if( opt.conWidth < opt.width){
					s = 0;
				}else{
					s = opt.width-opt.conWidth;
				}
				sWarper.css('margin-left' , s );
			}
		};

		swiper.__moveSlider = function( nen)
		{
			swiper.__moving =false;
			if( swiper.activeIndex != nen && !swiper.__moving && eventBlock)
			{
				//n = 0;
				eventBlock = false;
				swiper.__moving = true;
				var act =  swiper.target.find('.swiper-warper');
				var li =  swiper.target.find('.swiper-container').css('margin-right');
				var rm = Number(li.replace('px',''));

				var actPos =  0;
				actPos = -((opt.width+rm) * nen);
				// myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 단일적용
				//if( opt.conWidth && actPos ){
				if( opt.conWidth && actPos ){
					actPos =  opt.width-opt.conWidth;
				}
				if( opt.type=='type3' ){
					actPos = -(commonJs.WIDTH/2 + 70)*nen;
				}
				//

				TweenMax.to(  act, 0.3, {'margin-left':actPos+"px" , ease:Circ.easeInOut , onComplete : 	function( e )
				{
					swiper.activeIndex = nen;
					//eventBlock = true;
					check();
				}} );
			}

			function check()
			{
				eventBlock = true;
				swiper.__moving = false;
				var target = container.eq(swiper.activeIndex);
				//container.css('height',h+'px');
				warper.css('height',target.outerHeight()+'px');
				swiper.target.trigger('complete' , [{ data : swiper }]);
			}
		};
	}
	SwiperSlider.prototype.bind = function( event , callBack )
	{
		 //this.target.bind(event , callBack );
		 this.target.bind(event , callBack );
	};
	SwiperSlider.prototype.nextSlider = function(){ this.__nextSlider(); };
	SwiperSlider.prototype.moveSlider = function( n ){ this.__moveSlider( n ); };
	SwiperSlider.prototype.toString = function(){ return 'SwiperSlider'; };
	SwiperSlider.prototype.moving = function(){ return this.__moving; };
	SwiperSlider.prototype.resize = function(){ return this.__resize(); };
	SwiperSlider.prototype.setSlideWidth = function( n ){ this.__setSlideWidth( n ); };
	SwiperSlider.prototype.getActiveIndex = function(){ return this.activeIndex; };
	SwiperSlider.prototype.getLength = function(){ return this.length; };
	SwiperSlider.prototype.setLength = function(n){ this.length = n; };

	var clickEvent = '';

	function setSwiper()
	{
		doc.find('div.swiperCon,div.tabSwipe').each(function(index)
		{
			var con = $(this);
			var sNavi = con.children('.slideNavi');
			if( sNavi.length == 0 ) sNavi = con.parent().children('.slideNavi');
			var sNaviList = sNavi.children('ul').children('li');
			var liList = con.children('.swiperWrap').children();

			var paging=con.children('.paging');
			var sliderW = function(){
				var n = commonJs.WIDTH;
				if( con.hasClass('sideMargin') ){
					n = commonJs.WIDTH - 30;
				}else if(con.hasClass('sidemg15') ){//mpoc/center/mCS.html
					n = commonJs.WIDTH - 30;
				}
				return n;
			};

			// myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 적용
			var type = 'type1';
			var conWidth = 0;
			if( $(this).hasClass('resizeWidth') ){
				type = 'type2';
				conWidth = $(this).find('.dayGraph').width();
			}
			if( $(this).hasClass('roundMargin') ){
				type = 'type3';
				var left = (commonJs.WIDTH/2) - 70;
				liList.not(':eq(0)').css('margin-left', -left+'px');
			}

			var swiper = new SwiperSlider( con ,
			{
				width : sliderW(),
				conWidth : conWidth,
				type:type
			});
			con.children('.swiperWrap').css({
				'position'	:'relative'
			});
			var pagingCur;
			if(paging.length==1){
				if( $(this).hasClass('tabSwipe')){
					pagingCur=paging.children('span').eq(0);
					pagingCur.text('1');
					paging.children('span').eq(1).text(swiper.getLength());
				}else{
					pagingCur=paging.children('span').eq(0).children('span>span');
					pagingCur.text('1');
					paging.children('span').eq(1).children('span>span').text(swiper.getLength());
				}
			}

			// myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 단일적용
			if( $(this).hasClass('resizeWidth') ){
				swiper.setLength(2);
			}

			var menu = doc.find('div.changeType>ul>li,div.inforCont>ul>li');
			var menuActive = function( idx )
			{
				menu.removeClass('on');
				menu.eq(idx).addClass('on');
			};
			menu.each(function()
			{
				$(this).find('a').bind('click', function(evt)
				{
					evt.preventDefault();
					var idx = $(evt.target).parent().index();
					menuActive( idx );
					swiper.moveSlider( idx );
				});
			});

			liList.css({
				'display'	:'block',
				'width'	:sliderW()+'px'
			});


			var target =$(this);
			$(resizeObject).bind('resize',function(evt)
			{
				swiper.setSlideWidth( sliderW() );
				liList.css('width' , sliderW()+'px' );

				if( target.hasClass('roundMargin') ){
					var left = (commonJs.WIDTH/2) - 70;
					liList.not(':eq(0)').css('margin-left', -left+'px');
				}
				if( target.data('resizeH') )
				{
					target.data('resizeH')();
				}

				// myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 단일적용
				if( conWidth < sliderW() && conWidth ){
					swiper.setLength(0);
				}else if( conWidth ){
					swiper.setLength(2);
				}

				swiper.resize();
			});

			swiper.bind( 'complete' , function( event, obj )
			{
				sNaviList.removeClass('on');
				sNaviList.eq( obj.data.getActiveIndex() ).addClass('on');
				if( menuActive ){
					menuActive(obj.data.getActiveIndex());
				}
				check();
			});
			var prev = con.children('button.swipePrev');
			var next = con.children('button.swipeNext');

			con.children('button').bind('click' , function()
			{
				if( swiper.getLength()==1 ){
					return;
				}
				var n =swiper.getActiveIndex();
				if( $(this).hasClass('swipeNext') || $(this).hasClass('btnPre') )
				{
					if( n < (swiper.getLength() -1) ){
						swiper.moveSlider( n+1 );
						if(paging.length==1){
							pagingCur.text(n+2);
						}
					}
				}else{
					if( n != 0){
						swiper.moveSlider( n-1 );
						if(paging.length==1){
							pagingCur.text(n);
						}
					}
				}
			});

			function check()
			{
				var n = swiper.getActiveIndex();
				if( n == 0 ){
					prev.removeClass('on');
				}else{
					prev.addClass('on');
				}
				if( n == (swiper.getLength() -1) ){
					next.removeClass('on');
				}else{
					next.addClass('on');
				}

				if(paging.length==1){
					pagingCur.text(n+1);
				}
			};
			check();


			//auto slide
			var startSlide , stopSlide , aDuration = 3000 , timer=0;;
			var isAuto=con.hasClass('autoSlide');
			var isPause=false , stopBtn = true;;
			//btnPlay
			if( isAuto ){
				var btnPlay =  sNavi.find('.btnStop');
				var btnStop =  sNavi.find('.btnPlay');
				btnPlay.hide();
				btnStop.show();

				startSlide=function(){
					if(!timer) timer=setInterval(function()
					{
						var idx = swiper.getActiveIndex()+1;
						if( idx >= swiper.getLength() ){
							idx = 0;
						}
						swiper.moveSlider( idx );
					},aDuration);
				};
				stopSlide=function(){
					if(timer) clearInterval(timer);
					timer=null;
				};

				var btnClick = function( evt )
				{
					if( btnPlay.css('display')=='block' ){
						btnPlay.css('display','none');
						btnStop.css('display','block');
						startSlide();
					}else{
						btnPlay.css('display','block');
						btnStop.css('display','none');

						stopSlide();
					}
				};
				btnPlay.bind('click' , btnClick);
				btnStop.bind('click' , btnClick);


				startSlide();
			}

		});
	}


	function setProduct()
	{
		//mTS1.1.1.html# 10GB이상(무제한) 탭 클릭시
		doc.find('div.findProduct').children('div.tabType2').each(function()
		{
			//console.log( $(this).children('a.tabBtn') );
			$(this).children('a.tabBtn').bind('click',function(evt)
			{
				evt.preventDefault();
				var target = $(evt.target).next();

				if( target.css('display') == 'none')
				{
					target.css('display','block');
					$(this).addClass('on');
					$(this).children('span').text('열림');
				}else{
					target.css('display','none');
					$(this).removeClass('on');
					$(this).children('span').text('닫힘');
				}
			});
		});
		doc.find('div.myContents').each(function(index)
		{
			var target = $(this);
			function show()
			{
				target.css('display' ,'block');
			}
			var inter;
			$(resizeObject).bind('scroll' , function()
			{
				if( inter ){
					clearTimeout(inter);
				}
				target.css('display' , 'none');
				if( ($(document).scrollTop()+commonJs.HEIGHT ) != $('body').prop('scrollHeight') )
				{
					inter = setTimeout(show,200);
				}
			});
		});

		//mpoc/product/mTs1.1.4.html
		$('div.tabType3').each(function(){
			var target=$(this).children('ul').children('li');

			target.children('a').bind('click',function(e){
				e.preventDefault();
				target.removeClass('on');
				$(this).parent().addClass('on');
			});
		});

		//내가 찾은 요금상품 카테고리 탭//mpoc/product/mTS1.1.1.html# //mMY1.2.1.2T.1.html#
		$('div.tabType2').each(function(){
			var $thisA=$(this).find('div.tabContent>div.group>ul>li>a');
			var tabTitle=$(this).find('div.tabTitle>a');

			var fn_resize=function(){
				$thisA.each(function(i){
					if(i%2==1) return true;
					var od=$thisA.eq(i);
					var ev=$thisA.eq(i+1);
					if(od.length>0&&ev.length>0){
						//resize 패딩 무한증가 방지 초기화
						var odPdT=Number(od.css('padding-top').replace('px',''));
						var evPdT=Number(ev.css('padding-top').replace('px',''));
						if(odPdT>evPdT){
							od.css('padding-top',evPdT+'px');
						}
						else{
							ev.css('padding-top',odPdT+'px');
						}
						var odPdB=Number(od.css('padding-bottom').replace('px',''));
						var evPdB=Number(ev.css('padding-bottom').replace('px',''));
						if(odPdB>evPdB){
							od.css('padding-bottom',evPdB+'px');
						}
						else{
							ev.css('padding-bottom',odPdB+'px');
						}
						//

						var odH=od.outerHeight(true);
						var evH=ev.outerHeight(true);

						if(odH>evH){
							var gap=(odH-evH)/2
							ev.css('padding-top', (Number(ev.css('padding-top').replace('px',''))+gap)+'px');
							ev.css('padding-bottom', (Number(ev.css('padding-bottom').replace('px',''))+gap)+'px');
						}else{
							var gap=(evH-odH)/2
							od.css('padding-top', (Number(od.css('padding-top').replace('px',''))+gap)+'px');
							od.css('padding-bottom', (Number(od.css('padding-bottom').replace('px',''))+gap)+'px');
						}

					}
				});
			};

			tabTitle.bind('click',function(e){
				e.preventDefault();
				var target=$(this).parent();
				target.toggleClass('on');
				if(target.hasClass('on')){
					fn_resize();
				}
			});

			$thisA.bind('click',function(e){
				e.preventDefault();
				tabTitle.parent().removeClass('on');
				tabTitle.text($(this).text());
			});

			$(resizeObject).bind('resize',fn_resize);
		});
	}

	function setCommon()
	{
		//mpoc/guide/layout3.html, mpoc/guide/layout4.html
		var topHeadResize = null;
		doc.find('div.topHead').each(function(index)
		{
			var head = $(this);
			var backBtn = doc.find('div.backBtn');
			var closeBtn = doc.find('div.closeBtn');
			var shareWrap= doc.find('div.shareWrap');

			topHeadResize = function()
		  	{
		  		var h = head.outerHeight(true);
		  		var bH = 0;
		  		if(backBtn.length>0) {
		  			bH = backBtn.height();
		  			backBtn.css('top' , ((h/2)-(bH/2))+'px');
		  		}
		  		if(closeBtn.length>0) {
		  			bH = closeBtn.height();
		  			closeBtn.css('top' , ((h/2)-(bH/2))+'px');
		  		}
		  		if(shareWrap.length>0) {
		  			bH = shareWrap.height();
		  			shareWrap.css('top' , ((h/2)-(bH/2))+'px');
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

		//.topConBox 버튼 없을시 padding-right 제거
		$('.topConBox').each(function(){
			var target=$(this).children("strong");
			if(target.children("button").length==0){
				target.css("padding-right","0px");
			}
		});

		//.lineType1.center>.lineCon.type1 버튼 없을시 padding-right 제거
		$('.lineType1.center>.lineCon.type1').each(function(){
			var target=$(this);
			if(target.children(".btnChange").length==0){
				target.css("padding-right","0px");
			}
		});

		//changeLineSlide //mpoc/util/common/mUT10.8P.html
		$('.changeLineSlide').each(function(){
			var target=$(this).children('.swiperCon');
			var sltBox=$(this).children('select');
			var initNum=sltBox.children('option:selected').index();

			if(initNum<0) {
				initNum=0;
				sltBox.children('option').eq(0).attr('selected',true);
			}

			target.hide();
			target.eq(initNum).show();

			sltBox.bind('change',function(){
				var sltIdx=$(this).children('option:selected').index();
				target.hide();
				target.eq(sltIdx).show();
			});
		});

		//동의 체크박스 높이 조절 //mpoc/guide/etc.html //mpoc/purchase/mPJ1.3.4.1.1.html //mpoc/myt/mMY5.3.4P.1.html
		$('.totalAgree, .agreeBox').each(function(){
			var $this=$(this);
			var target=$(this).children('.totalAgree_check, .agreeCheck');
			var setH=function(){

				var h=Number(target.css('padding-top').replace('px',''))+Number(target.css('padding-bottom').replace('px',''))+target.children('.formWrap').height();
				target.css('height',h+'px');
				$this.css('padding-top',target.outerHeight(true)+'px');
			};
			setH();
			$(resizeObject).bind('resize',function(){
				setH();
			});
		});


		//탑배너 닫기 스크립트 //mpoc/util/common/mUT8.3.1L.html
		$('.topBanner').each(function(){
			var target=$(this);
			target.find('.bnrClose').bind('click',function(e){
				e.preventDefault();
				target.hide();
			});
		});
	}

	function setPopup()
	{
		var verChk=getVersion();
		//레이어팝업
		var setLayerPopupHeight=function(trgt){
			var layerH=commonJs.HEIGHT*0.9;
			trgt.each(function(){
				var target=$(this);
				var inPop=target.find('div.inPop');
				inPop.height(inPop.height());
				var checkPoint=inPop.find('div.checkPoint');
				var pHead=target.find('div.popHead');
				var popCon=target.find('div.popCon');
				var btnBox2=popCon.children('div.btnBox2');
				var targetH=target.outerHeight(true);
				var inPopH=inPop.outerHeight(true);

				popCon.css('padding-top', ((pHead.height()/2)+45) +'px');

				if(verChk){
					var resH=layerH-Number(pHead.css('padding-top').replace('px',''))-Number(popCon.css('padding-top').replace('px',''))-Number(popCon.css('padding-bottom').replace('px',''));
					if(btnBox2.length!=0){
						resH-=btnBox2.outerHeight(true);
					}
					var h=inPop.height();
					if(resH<h) inPop.css('height',resH+'px');
					else inPop.css('height',h+'px');

				}else{
					target.css('position','absolute');
					pHead.css('position','absolute');
					target.find('div.layerClose').css('position','absolute');
				}


			});
		};

		var sortLayerPopup=function (trgt){
			trgt.each(function(){
				var target=$(this);
				var pHead=target.find('div.popHead');
				var pt=Number(pHead.css('padding-top').replace('px',''));
				var targetH=target.outerHeight(true);
				var pClose = target.find('div.layerClose');

				var pH = pClose.height();
				var hOh = pHead.outerHeight(true);

				var scTop=$(window).scrollTop();
				if(verChk){
					pHead.css('top',(commonJs.HEIGHT/2-targetH/2-pt/2)+'px');
					target.css('top',(commonJs.HEIGHT/2-targetH/2+pt/2)+'px');
					pClose.css('top',(hOh/2-pH/2-pt)+'px');
				}else{
					var popCon=target.find('div.layerWrap>div.popCon');
					pHead.css('top','0px');
					target.css('top',(scTop+commonJs.HEIGHT*0.07)+'px');
					popCon.css('margin-top',pt+'px');
					pClose.css('top',(hOh/2-pH/2)+'px');
					target.css('margin-bottom',(commonJs.HEIGHT*0.07)+'px');
				}
			});
		};

		$('a.id_layerOpen').bind('click',function(e){
			e.preventDefault();
			var href=$(this).attr('href');
			$(href).show();

			setLayerPopupHeight($(href));
			sortLayerPopup($(href));

			setMask();
			$(resizeObject).trigger('resize');
		});

		$('div.layer_pop').each(function(){
			var target=$(this);
			// setLayerPopupHeight(target);
			// sortLayerPopup(target);
			target.find('div.layerClose>button').bind('click',function(e){//닫기버튼
				e.preventDefault();
				target.hide();
				clearMask(true);
			});
		});

		$(resizeObject).bind('resize',function(){
			setLayerPopupHeight($('div.layer_pop'));
			sortLayerPopup($('div.layer_pop'));
		});
		//////////////////////////////////////////////////////////////////////

		//시스템 팝업
		doc.find('div.popup').each(function()
		{
			var p = $(this);
			var pHead = p.children('div.popHead');
			var pCon = p.children('div.popCon');
			var content = pCon.children('div.inPop');
			var contentH = content.height();
			var pClose = p.children('div.popClose');

			var grayCont=pCon.children('div.grayCont');

			//화면사이즈조절 //www/mpoc/guide/syspop.html
			var setInPopHeight=function(){
				var gHeight=grayCont.outerHeight(true);
				var hHeight=pHead.outerHeight(true);


				var mbLen=Number(pCon.css("padding-bottom").replace('px',''));

				var excEl=p.find('.steptype, .lineType1, .tab, .hideView');
				if(excEl.length>0){
					excEl.each(function(){
						if(excEl.parent().hasClass('inPop')&&excEl.prev().length==0){
							mbLen=0;
						}
					});
				}
				var hH = pHead.height();
				var cH = pClose.height();
				pClose.css('top' , ((hH/2)-cH/2)+'px');

				// if(false){
				if(verChk){
					if(window.scrollbars&&window.scrollbars.visible){
						var cHeight=commonJs.HEIGHT-gHeight-hHeight-mbLen;
						content.css('height',cHeight+'px');
						$('body').css('position','fixed');
					}else{
						content.css('height','auto');
						content.css('padding-bottom',gHeight+'px');
						$('body').css('overflow-y','hidden');
					}
					pCon.css('padding-top',(hHeight+mbLen)+'px');//padding-top 조절

					p.width(commonJs.WIDTH);
				}else{
					pHead.css('position','static');
					pCon.css({
						'padding-top':mbLen+'px',
						'padding-bottom':'0px',
						'position':'static'
					});
					content.css({
						'height':'auto'
					});

					if(grayCont.length!=0){
						grayCont.css('position','static');
					}
					pClose.css('position','absolute');
				}
			};

			setInPopHeight();

			$(resizeObject).bind('resize',function(evt)
			{
				setInPopHeight();
			});
			//////////////////////////////////////////////////////////////////////
		});
	}

	function setRadioBox()
	{
		//label
		var radioBox = doc.find('input:radio').not('.basicType');
		var inPop=$('.inPop');
		//if( !radioBox.length ){
		if( !radioBox.next('label').attr('for') ){
		//	return;
		}

		var nameObj = {};
		var choiceObj = {};


		//팝업창에서 라디오 박스 클릭시 스크롤 자동이동 막기 //mpoc/center/mCS1.1.2.1L.1T.html
		var curTop=0;
		var chkMove=false;
		//

		radioBox.each(function(index)
		{
			if( !nameObj[$(this).attr('name')] )
			{
				nameObj[$(this).attr('name')] = new Array();
			}
			//console.log( $(this).attr('id') );
			nameObj[$(this).attr('name')].push($(this));

			if(inPop.length>0&&getVersion()){//라디오 박스 클릭 스크롤 이벤트 막기
				$('label[for="'+$(this).attr('id')+'"]').bind('touchstart, mousedown', function(e){
					curTop=inPop.scrollTop();
					chkMove=true;
				});
			}
		});

		if(inPop.length>0&&getVersion()){//라디오 박스 클릭 스크롤 이벤트 막기
			inPop.bind('scroll', function(e){
				chkMove=false;
			});
		}

		for( var a in nameObj )
		{
			var arr = nameObj[a];
			choiceObj[arr[0].attr('name')] = null;
			for( var i = 0; i<arr.length; i++)
			{
				var radio = arr[i];
				if( radio.attr('checked') ){
					radio.parent().addClass('checked');
					choiceObj[radio.attr('name')] = radio;
				}
				if( radio.attr('disabled') ){
					radio.parent().addClass('disabled');
				}

				radio.data('radio', {
					target : radio,
					func : function( value )
							{
								if( !value.parent().hasClass('disabled') )
								{
									var tarr = nameObj[value.attr('name')];
									for( var i =0; i<tarr.length; i++){
										tarr[i].attr("checked",false);
										tarr[i].parent().removeClass('checked');
										// MY2.2.1.1T.html 라디오 버튼중에 bg색이 변해야 하는 경우가 존재해 퍼블쪽에 bgOn 클래스 추가 및 해당 하는 경우만 적용
										if(tarr[i].parent().hasClass('bgOn'))
										{
											tarr[i].parent().parent().removeClass('on');
										}
									}
									if(value.parent().hasClass('bgOn'))
									{
										value.parent().parent().addClass('on');
									}
									if(choiceObj[value.attr('name')]){
										choiceObj[value.attr('name')].parent().removeClass('checked');
									}
									value.parent().addClass('checked');
									value.attr("checked",true);
									value.trigger("liOnEvt");
									value.focus();
								}
							}
				});

				radio.bind('click' , function( e )
				{
					// e.preventDefault(); //!!사용시 토크백 오작동!!
					// e.stopPropagation();

					var target = $(this);
					var obj = target.data('radio');
					obj.func( obj.target );

					if(inPop.length>0&&chkMove&&getVersion()){//라디오 박스 클릭 스크롤 이벤트 막기
						inPop.scrollTop(curTop);
						chkMove=false;
					}
				});
			}
		}
	}

	function setTabJs()
	{
		doc.find('.tabJs').each(function(index)
		{
			var objArr = new Array();
			//var p = $(this).children('li'); 바로 아래가 li가 아닌경우도 잡아 내기 위해 변경
			var p = $(this).find('li');

			p.each(function(index)
			{
				var t = $(this);
				var a = t.children('a');
				// 제어할 id등록
				objArr.push( a.attr('href') );
				var i = index;

				$(this).bind('click' , function( e )
				{
					e.preventDefault();
					//e.stopPropagation();

					p.removeClass('on');
					t.addClass('on');

					$.each( objArr, function(index, value)
					{
						if(value!='#'&&value!='') {
							$(value).css('display','none');
						}
					});
					if(objArr[i]=='#tabAll'){
						$.each( objArr, function(index, value)
						{
							if(index!=i&&value!='#'&&value!='') doc.find(value).css('display','block');
						});
					}else{
						if(objArr[i]!='#'&&objArr[i]!='') doc.find(objArr[i]).css('display','block');
					}
				});
			});

		});
	}


	function setCheckBox()
	{
		//var chkBox = doc.find('input:checkbox');
		//var chkBox = doc.find('input:checkbox');
		//var chkBox = doc.find('span.checkbox>input:checkbox');
		var chkBox = doc.find('.formWrap>input:checkbox').not('.basicType');
		chkBox.each(function(idx)
		{
			var box = $(this);
			if( box.attr('checked') )
			{
				box.parent().addClass('checked');
			}

			if( box.attr('disabled') )
			{
				box.parent().addClass('disabled');
			}

			box.bind( 'click' , function( e )
			{
				// e.preventDefault(); //!!사용시 토크백 오작동!!
				// e.stopPropagation();
				var target = $(this);
				var tParnet =target.parent();
				if( !tParnet.hasClass('disabled') ){
					tParnet.toggleClass('checked');
					if( tParnet.hasClass('checked') ){
						target.attr('checked', true);
					}else{
						target.attr('checked', false);
					}
				}
			});
		});
	}

	//www/mpoc/myt/
	function setMyt()
	{
		//ul.autopayInfo 탭버튼 높이조절  //mMY3.4.2.1.html
		$('ul.autopayInfo').each(function (){
			var ul=$(this);
			var li=$(this).children('li');
			var liHeight=li.outerHeight(true);
			//init
			ul.css('height',(liHeight+li.filter('.on').children('.infoCon').outerHeight(true)+10)+'px');
			//

			li.children('a').bind('click',function(e){
				e.preventDefault();
				li.removeClass('on');
				var target=$(this).parent('li');
				target.addClass('on');
				ul.css('height',(liHeight+target.children('.infoCon').outerHeight(true)+10)+'px');
			});
		});
		/////////////////////////////////////////////////////////
		//myt/mMY3.2.1.2.3.html 라디오 버튼 아래 툴팁
		doc.find('div.useType').each(function()
		{
			$(this).find('input:radio').bind('click', function(evt)
			{
				var ta = $(evt.target);
				var warp = ta.parent().parent().children('.formWrap');
				warp.removeClass('on');
				ta.parent().addClass('on');

				var info = ta.parent().parent().children('.addInfo');
				info.css('display','none');
				ta.parent().next().css('display','block');
			});
		});

		//myt/mMY3.5.2.1.1.html
		doc.find('div.narrowCon>.billSelect').each(function()
		{
			var list = $(this).children('li');
			list.children('a').bind('click',function( evt )
			{
			 	evt.preventDefault();
				 var ta = $(evt.target);
				 list.removeClass('on');
				ta.parent().addClass('on');
			});
		});

		//기간선택 버튼 이벤트 //myt/mMY1.1.4.5.html
		$('div.datesetting>button').each(function(){
			var useSearch=$(this).closest('.useSearch');
			var target=useSearch.next('.settingCon');

			$(this).bind('click',function(){
				if(target.css('display')=='none'){
					target.show();
					useSearch.addClass('on');
				}else{
					target.hide();
					useSearch.removeClass('on');
				}
			});
		});

		//선물할 데이터량 선택 myt/mMY2.2.2.1T.1.html
		$('div.graphType2').each(function(){
			var curX=null;
			var sliderHandle=null;
			var len=$(this).children('.baseArea').width();
			var currGuage=$(this).find('.currGuage');
			var currData=$(this).find('.currData');
			var currDataImg=currData.children('img');
			var currDataSt=currData.find('strong');
			var cur;

			currGuage.width(len*4/9);
			currData.css('left',(len*4/9)+'px');
			currDataSt.text("500MB");
			cur=len*4/9;

			var fn_result=function(x){
				var curLeft=cur;
				var resLeft=curLeft-curX+x;

				var setMin=function(){
					currGuage.css('width','0px');
					currData.css('left','0px');
					currDataSt.text("100MB");
					currDataSt.removeClass('max');
					currDataSt.addClass('min');
				};

				var setMax=function(){
					currGuage.css('width',len+'px');
					currData.css('left',len+'px');
					currDataSt.text("1GB");
					currDataSt.removeClass('min');
					currDataSt.addClass('max');
				};

				var setRes=function(i){
					currGuage.css('width', (len/9*i)+'px');
					currData.css('left',(len/9*i)+'px');
					currDataSt.text((i+1)+"00MB");
					currDataSt.removeClass('max');
					currDataSt.removeClass('min');
				};
				if(resLeft>=len){
					cur=len;
					setMax();
				}else if(resLeft<=0){
					cur=0;
					setMin();
				}else {
					cur=resLeft;
					if(0<cur&&cur<len/18*1) setMin();
					else if(len/18*1<=cur&&cur<len/18*3) setRes(1);
					else if(len/18*3<=cur&&cur<len/18*5) setRes(2);
					else if(len/18*5<=cur&&cur<len/18*7) setRes(3);
					else if(len/18*7<=cur&&cur<len/18*9) setRes(4);
					else if(len/18*9<=cur&&cur<len/18*11) setRes(5);
					else if(len/18*11<=cur&&cur<len/18*13) setRes(6);
					else if(len/18*13<=cur&&cur<len/18*15) setRes(7);
					else if(len/18*15<=cur&&cur<len/18*17) setRes(8);
					else setMax();
				}

			};
			//event----------------------------------------------------------------------
		    currDataImg.bind("touchstart",function(e){
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;//모바일 화면 드래그 방지
		    	curX=e.originalEvent.touches[0].clientX;
		    	sliderHandle=this;
		    });

		    $('html').bind("touchend",function(e){
		    	curX=null;
		    	sliderHandle=null;
		    	cur=Number(currData.css("left").replace("px",""));
		    });

		    $('html').bind("touchmove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.originalEvent.touches[0].clientX);
					curX=e.originalEvent.touches[0].clientX;
		    	}
		    });
		    //--------------------------------------------------------------------------
		});

		//기간선택 기준월 선택 //mpoc/myt/mMY1.1.4.4.html
		$('.settingCon .dateSort').each(function(){
			var $this=$(this);
			var target=$this.find('li>button');

			target.bind('click',function(e){
				target.siblings('span').remove();
				target.parent().removeClass('on');
				$(this).after('<span class="hidden">선택</span>');
				$(this).parent().addClass('on');
			});
		});

		//기본배송지 버튼 //mpoc/myt/mMY1.1.6.1.html
		$('.btnBasic').bind('click',function(){
			$(this).toggleClass('on');
		});

		//이용내역 박스 높이 조절 //mpoc/myt/mMY1.1.4.3.1.html, mpoc/myt/mMY1.1.4.4.html#, mpoc/myt/mMY1.1.4.5.html#
		$('.useHistory>ul').each(function(){
			var target=$(this).children('li').children('dl');
			var fn_resize=function(){
				target.each(function(i){
					if(i%2==0){
						var od=target.eq(i);
						var ev=target.eq(i+1);
						var odCon=od.children('dd.con');
						var evCon=ev.children('dd.con');
						//resize 패딩 무한증가 방지 초기화
						od.css('height','auto');
						ev.css('height','auto');
						//
						if(odCon.length==1&&evCon.length==1){
							//resize 패딩 무한증가 방지 초기화
							var odConPdT=Number(odCon.css('padding-top').replace('px',''));
							var evConPdT=Number(evCon.css('padding-top').replace('px',''));
							if(odConPdT>evConPdT){
								odCon.css('padding-top',evConPdT+'px');
							}
							else{
								evCon.css('padding-top',odConPdT+'px');
							}
							var odConPdB=Number(odCon.css('padding-bottom').replace('px',''));
							var evConPdB=Number(evCon.css('padding-bottom').replace('px',''));
							if(odConPdB>evConPdB){
								odCon.css('padding-bottom',evConPdB+'px');
							}
							else{
								evCon.css('padding-bottom',odConPdB+'px');
							}
							//

							var odConH=odCon.height();
							var evConH=evCon.height();

							if(odConH>evConH){
								var gap=(odConH-evConH)/2
								evCon.css('padding-top', (Number(evCon.css('padding-top').replace('px',''))+gap)+'px');
								evCon.css('padding-bottom', (Number(evCon.css('padding-bottom').replace('px',''))+gap)+'px');
							}else{
								var gap=(evConH-odConH)/2
								odCon.css('padding-top', (Number(odCon.css('padding-top').replace('px',''))+gap)+'px');
								odCon.css('padding-bottom', (Number(odCon.css('padding-bottom').replace('px',''))+gap)+'px');
							}
						}

						if(od.length==1&&ev.length==1){
							var odH=od.height();
							var evH=ev.height();

							if(odH>evH){
								od.height(odH);
								ev.height(odH);
							}else{
								od.height(evH);
								ev.height(evH);
							}
						}
					}
				});
			};

			fn_resize();

			$(resizeObject).bind('resize',fn_resize);


		});
	}

	function search()
	{

		$( "select" ).focus(function( e )
		{
			$(this).addClass('on');
		});
		$( "select" ).focusout(function( e )
		{
			$(this).removeClass('on');
		});
		/* */
		/*
		$( "form input" ).focus(function( e )
		{
			$(this).parent().addClass('on');
		});
		$( "form input" ).focusout(function( e )
		{
			$(this).parent().removeClass('on');
		});
		*/
	}

	function setCalendar()
	{

		var calendar = doc.find('div.calendar');
		if( !calendar.length ){
			return;
		}
		function addZero( n )
		{
			return (String(n).length < 2)? '0'+n:n;
		}

		$.fn.getCalrendar = function()
		{
			//console.log('= getCalrendar =');
			return this.data('calrendar');
		};

		//ex.) $('div.calendar:eq(0)').selectDate({year:2015,month:5,day:10});
		$.fn.selectDate = function(opt)
		{
			this.data('calrendar').setDate(opt);
			$(this).children('input').attr('value',opt.year+'.'+addZero( opt.month )+'.'+addZero( opt.day ));
			return true;
		};

		//ex.) $('div.calendar:eq(0)').getDate();
		$.fn.getDate = function()
		{
			return $(this).children('input').attr('placeholder');
		};

		/*
		ex.)
		$('div.calendar:eq(0)').setup({
			start 	: { year:2016, month:1,  day:1  },
			end 	: { year:2016, month:12, day:31 },
			today 	: { year:2016, month:5,  day:1  },
			date 	: { year:2016, month:5,  day:8  }
		});
		*/
		$.fn.setup = function(opt)
		{
			var d=this.data('calrendar');
			if(opt.start){
				d.setStartDay(opt.start);
			}
			if(opt.end){
				d.setEndDay(opt.end);
			}
			if(opt.today){
				d.setToday(opt.today);
			}
			if(opt.date){
				d.setDate(opt.date);
				$(this).children('input').attr('value',opt.date.year+'.'+addZero( opt.date.month )+'.'+addZero( opt.date.day ));
			}
		};

		//var dt = new Date();
		//var month = dt.getMonth()+1;
		//var day = dt.getDate();
		//var year = dt.getFullYear();
		//dt.getFullYear() , month : dt.getMonth()+1, day : dt.getDate()				//pc값 셋팅

		calendar.each(function( idx )
		{
			var cal = $(this);
			var mIndex = cal.css('z-index');
			var box = cal.parent().children('div.calBox');

			var calObj = box.calendarInit({
				//target : box.children('.calTop'),
				year : box.find('.year'),								// 달표시
				month :box.find('.month') ,							// 월표시
				start 	: { year : 2015 , month : 1, day : 1 }, 		//달력 시작일
				current : { year : 2016 , month : 1, day : 6 },		//달력 현재일
				end 	: { year : 2017 , month : 8, day : 1 }			//달력 마지막
			});
			cal.data('calrendar',calObj);
			calObj.setVisible( false );

			var input =  cal.children('input');



			calObj.calrendarClose = function()
			{
				cal.css('z-index',1);
				this.setVisible(false);
			};
			calObj.calrendarOpen = function()
			{
				cal.css('z-index',1000);
				this.setVisible(true);
			};

			calObj.bind( calObj.EVENTS.SELECT , function( evt , date )
			{
				input.attr('value',date.year+'.'+addZero( date.month )+'.'+addZero( date.day ));
			});
			calObj.bind(calObj.EVENTS.FOCUSOUT , function( evt ){
				$(evt.target).parent().removeClass('on');
			});

			cal.children('button.calBtn').bind('click', function(evt)
			{
				calendar.css('z-index',1);
				calendar.removeClass('on');
				cal.css('z-index',1000);
				cal.addClass('on');

				$.each( calendar , function( idx , value)
				{
					if( $(value).data('calrendar') )
					{
						$(value).data('calrendar').setVisible( false );
					}
				});
				calendarFocus( cal.parent() );
				calObj.setVisible( true );

				if(getVersion()){
					//fixed, 가운데정렬
					box.css({
						'position':'fixed',
						'top':(commonJs.HEIGHT-box.outerHeight(true))/2+'px',
						'width':'94%',
						'left':'3%'
					});
				}else{
					//하위버전 카렌더 인풋 박스 마스크 뒤로 이동
					cal.css('z-index',999);
				}

				setMask(box);
			});


		function calendarFocus( target )
		{
			target.children('.calBox').css({
					'display':'block'
			});
			var position = target.children('.calendar').offset();
			target.children('.calendar').addClass('on');
			// $('html,body').animate({scrollTop:position.top}, 300);
		}

			var top = box.children('div.calTop');

			top.children('button.first').bind('click', function(evt)
			{
				calObj.first();
			});
			top.children('button.prev').bind('click', function(evt)
			{
				calObj.prev();
			});
			top.children('button.next').bind('click', function(evt)
			{
				calObj.next();
			});
			top.children('button.end').bind('click', function(evt)
			{
				calObj.end();
			});

			// 하단 버튼 영역
			var btn = box.children('div.btn');
			btn.children('button.close').bind('click' , function( evt )
			{
				cal.removeClass('on');
				calObj.setVisible(false);
				clearMask();
			});
			btn.children('button.today').bind('click' , function( evt )
			{
				calObj.today();
			});

		});


		// 전체변경
		$('div.calendar:eq(0)').getCalrendar().setup({
				start 	: { year : 2015 , month : 1, day : 1 },
				current : { year : 2016 , month : 4, day : 6 },
				end 	: { year : 2017 , month : 8, day : 1 }
		});
		// 단일값 변경
		//$('div.calendar:eq(0)').getCalrendar().setToday(
		//	{
		//		year : 2016 , month : 4, day : 3
		//	}
		//);
		// 단일 달력 접근
		//$('div.calendar:eq(0)').getCalrendar().calrendarOpen();		// 열기
		//$('div.calendar:eq(0)').getCalrendar().calrendarClose();		// 닫기


	}

	function setList()
	{
		var list = $('ul.listCon');
		if( !list.length ){
			return;
		}

		var callLink = function( link )
		{
			if( link ){
				window.location.href = link;
			}
		};

		var subSeting = function( target , n )
		{
			var parentN = n;
			//target.bind('click' , function(e)
			target.bind('click' , function(e)
			{
				e.preventDefault();
				e.stopPropagation();

				var sub =$(this).children('ul');
				var href = $(this).children('a').attr('href');
				if( sub.length )
				{
					$(this).toggleClass('on');
					if( $(this).hasClass('on') ){
						sub.css('display','block');
					}else{
						sub.css('display','none');
						callLink( href );
					}
				}
				else{
					callLink( href );
				}
			});

			target.children('ul').css('display','none');
			target.removeClass('on');
			target.children('ul').each(function(index)
			{
				$(this).children('li').each(function(index)
				{
					// 재귀호출 및 기존 부모 댑스 전달
					var str = parentN+'|'+index;
					subSeting( $(this) , str );
				});
			});
		};

		list.children('li:not(:eq(0))').each(function(index)
		{
			subSeting( $(this) , index);
		});
	}

	//setQInfo qInfo 스크립트 //mpoc/guide/layout_sp.html
	function setQInfo(){
		var qInfo_all=$('.qInfo');
		qInfo_all.each(function (){
			var qInfo=$(this);
			var qTxt=qInfo.children('.qTxt');
			var qCon=qTxt.children('.con');
			var inPop=qInfo.closest('.inPop');
			var m=15;
			// var qTxtW=null;

			var setTxtWidth=function(){
				var qTxt_w=qTxt.outerWidth(true);

				if(inPop.length==0){
					if(commonJs.WIDTH<qTxt_w+2*m){
						var w=qCon.width()-qTxt_w-2*m+commonJs.WIDTH;
						qCon.css('min-width',w+'px');
						qCon.width(w);
					}
				}else{
					var inPopW=inPop.width();
					if(inPopW<qTxt_w+2*m){
						var w=qCon.width()-qTxt_w-2*m+inPopW;
						qCon.css('min-width',w+'px');
						qCon.width(w);
					}
				}
				// qTxtW=qTxt.outerWidth(true);
			};
			var setTxtLeft=function(_value){
				var l=qInfo.offset().left;
				var qTxt_w=qTxt.outerWidth(true);
				var qTxt_w;
				var sum;

				// if(qTxtW!=null) qTxt_w=qTxtW;
				// else qTxt_w=qTxt.outerWidth(true);

				if(inPop.length==0){
					if(typeof _value=='boolean') qTxt_w=commonJs.WIDTH;

					sum=l+qTxt_w+m;
					if(sum<=commonJs.WIDTH){
						qTxt.css("left","0px");
					}else {
						qTxt.css("left",(commonJs.WIDTH-sum)+"px");
					}
				}else{
					var inPopW=inPop.width();

					if(typeof _value=='boolean') qTxt_w=inPopW;

					l=l-(commonJs.WIDTH-inPopW)/2;
					sum=l+qTxt_w+m;
					if(sum<=inPopW){
						qTxt.css("left","0px");
					}else {
						qTxt.css("left",(inPopW-sum)+"px");
					}
				}
			};

			setTxtLeft(true);//화면 왼쪽으로 붙이기
			qCon.addClass('conReset');
			setTxtWidth();
			setTxtLeft();

			$(resizeObject).bind('resize',function(){
				qInfo_all.filter('.on').hide();
				setTxtLeft(true);//화면 왼쪽으로 붙이기
				qInfo_all.filter('.on').show();
				setTxtWidth();
				setTxtLeft();
			});

			qInfo.children('a.qTit').bind('click',function(e){
				e.preventDefault();
				qInfo_all.removeClass('on');
				qInfo.addClass('on');
				setTxtWidth();
				setTxtLeft();
			});
			qInfo.find('a.btnClose').bind('click',function(e){
				e.preventDefault();
				qInfo.removeClass('on');
			});

		});
	}

	//.topConBox toggle on //mpoc/guide/layout2.html
	function setTopConBoxTglOn(){
		$('.topConBox').each(function(){
			var target=$(this);
			target.find('button.btnMore').bind('click',function(e){
				e.preventDefault();
				target.toggleClass('on');
			});
		});
	}

	function setTglBtn(){
		$('.tglBtn').bind('click',function(e){
			e.preventDefault();
			var tglBtn=$(this);
			var target=tglBtn.closest('.tglClsOpen');
			if(target[0].tagName=='UL' || target[0].tagName=='ul'){
				var tagetLi=tglBtn.closest('li');
				if(!tagetLi.hasClass('on')){
					tagetLi.siblings('li').removeClass('on');
				}
				tagetLi.toggleClass('on');
			}else{
				target.toggleClass('on');
			}
		});

		$('.tglBtnClose').bind('click',function(e){
			e.preventDefault();
			var tglBtnClose=$(this);
			var target=tglBtnClose.closest('.tglClsOpen');
			if(target[0].tagName=='UL' || target[0].tagName=='ul'){
				target=tglBtnClose.closest('li');
			}
			target.removeClass('on');
		});
	}

	// mMY1.1.5.html회선 정보
	function setCircuit()
	{
		var check = true;
		doc.find('div.myContents').each(function()
		{
			check = false;
		});

		//mTS1.1.1.html# 내 요금상품 보기에서 .myContents 클래스가 없는 경우에만 실행 된다.
		if( check )
		{
			var target =doc.find('article.lineType1,article.lineType2,article.lineType3,article.lineType4');
			target.each(function()
			{
				var check = 0;
				var tm = $(this);
				var tH = tm.outerHeight();
				var t = tm.offset().top;
				check = t + tH;

				function checkVisible()
				{
					target.css('display' , 'block');
					if( $(document).scrollTop() > check){

						//tm.css({'position':'absolute' , 'top':'550px' ,'z-index':'1000'});
						//var t =$(document).scrollTop()+commonJs.HEIGHT-(tm.outerHeight());
						//tm.css({'position':'absolute' , 'top':t+'px' ,'z-index':'1000'});
						// 삼성폰의 경우 하단에 컨트롤 바가 생기는 경우에는 제대로 제어가 안되서 height 값을 계산해서 설정한다.
						//var t =commonJs.HEIGHT-(tm.outerHeight());
						//tm.css({'position':'fixed' , 'top':t+'px' ,'z-index':'1000'});
						tm.css({'position':'fixed' , 'bottom':'0' ,'z-index':'1000'});
					}else{
						//tm.css({'position':'relative' ,'z-index':'1' ,'margin-top':'0px'});
						tm.css({'position':'relative' ,'z-index':'1' });
					}
				}

				var inter;
				$(resizeObject).bind('scroll' , function()
				{
					if( inter ){
						//clearTimeout(inter);
					}
					//checkVisible();
					target.css('display' , 'none');
					if( ($(document).scrollTop()+commonJs.HEIGHT ) != $('body').prop('scrollHeight') )
					{
						checkVisible();

						//if( $(document).scrollTop() > check )
						//{
						//	inter = setTimeout(checkVisible,200);
						//}else{
						//	checkVisible();
						//}
					}
				});
			});
		}
	}


	function setCheckPoint(){
		$("div.checkPoint").each(function(){
			//www/mpoc/guide/syspop.html
			var checkPoint=$(this);

			var grayCont=checkPoint.closest('div.grayCont');

			var cpOl=checkPoint.children('ol');
			var cpLi=cpOl.children('li');
			var cpLiLen=cpLi.length;
			var btnBox=checkPoint.children('div.btnBox');
			var btnPlus=btnBox.children('a.btnPlus');
			var btnClose=btnBox.children('a.btnClose');

			if(cpLiLen>5){
				cpLi.each(function(i){
					if(i>4)	$(this).hide();
				});
				btnBox.hide();
				btnPlus.show();
				btnClose.hide();

				btnPlus.bind('click',function(e){
					e.preventDefault();
					btnPlus.hide();
					btnClose.show();
					cpLi.show();
					// grayCont.trigger('grayCont_resize');
					$(resizeObject).trigger('resize');
				});

				btnClose.bind('click',function(e){
					e.preventDefault();
					btnClose.hide();
					btnPlus.show();
					cpLi.each(function(i){
						if(i>4)	$(this).hide();
					});
					// grayCont.trigger('grayCont_resize');
					$(resizeObject).trigger('resize');
				});
			}

			checkPoint.children('div.tit').children('a').bind('click',function(e){
				e.preventDefault();
				checkPoint.toggleClass('on');
				if(cpLiLen>5&&checkPoint.hasClass('on')){
					btnBox.show();
				}else if(cpLiLen>5){
					btnBox.hide();
				}
				// grayCont.trigger('grayCont_resize');
				$(resizeObject).trigger('resize');
			});

			cpLi.children('a').bind('click',function(e){
				e.preventDefault();
				var target=$(this).parent();
				if(target.hasClass('on')){
					target.removeClass('on');
				}else{
					cpLi.removeClass('on');
					target.addClass('on');
				}
				// grayCont.trigger('grayCont_resize');
				$(resizeObject).trigger('resize');
			});
		});
	}

	//mpoc/purchase
	function setPurchase(){
		//"부가서비스 신청" 서비스 옵션 선택 토글'on' //mpoc/purchase/mPJ2.1.23.html
		$('ul.serviveOption').each(function(){
			var li=$(this).children('li');
			li.find('input[type="radio"]').bind('click',function(e){
				li.removeClass('on');
				$(this).closest('li').addClass('on');
			});
		});
	}

	//mpoc/center/
	function setCenter(){
		// FAQ 자주찾는질문 카테고리 설정  //mpoc/center/mCS2.1.1T.html
		var faqDep1=$('ul.faqDep1');
		if(faqDep1.length>0){
			var rExp=/#ctgrDepth?/;
			var selectedCtgr=faqDep1.siblings('.selectedCtgr');
			var faqDep2=faqDep1.siblings('.faqDep2');
			var dep1=faqDep1.eq(0);
			var dep1_hidden=faqDep1.eq(1);
			var btnMore=faqDep1.siblings('.moreBoxType3').not('.close');
			var btnClose=faqDep1.siblings('.moreBoxType3.close');
			var btnBox=faqDep1.siblings('.btnBox');
			var btnSearchAgain=btnBox.find('a:first');
			var isSameDept=false;

			var allHide=function(){
				faqDep1.hide();
				faqDep2.hide();
				btnMore.hide();
				btnClose.hide();
				btnBox.hide();
				selectedCtgr.hide();
			};

			var init=function(){
				faqDep2.hide();
				selectedCtgr.hide();
				selectedCtgr.html("<em><span>선택하신 카테고리</span></em>");
				dep1_hidden.hide();
				dep1.show();
				btnMore.show();
				btnClose.hide();
				btnBox.hide();
			};

			var selectCtgr=function(el){

				var sltHref=el.attr('href');

				if(isSameDept){
					selectedCtgr.find('a:last').remove();
				}
				if(rExp.test(sltHref)){
					allHide();

					$(sltHref).show();
					isSameDept=false;
				}else if(sltHref=="#selectedTab"){
					btnBox.show();
					isSameDept=true;
				}
				selectedCtgr.append(el.clone());
				selectedCtgr.show();
			};

			$('.selectedCtgr>a').live('click',function(e){
				e.preventDefault();
				var $this=$(this);
				var sltHref=$this.attr('href');
				if(rExp.test(sltHref)){
					var bfHref=$this.prev().attr('href');
					var idx=$this.index();
					$this.siblings().each(function(i){
						var target=$(this);
						if(target.index()>=idx) target.remove();
					});
					$this.remove();
					if(bfHref){
						allHide();
						$(bfHref).show();
						selectedCtgr.show();
					}else{
						init();
					}
				}else if(sltHref=="#selectedTab"){
					$this.remove();
				}
				isSameDept=false;
				btnBox.hide();
			});

			faqDep1.find('li>a').bind('click',function(e){
				e.preventDefault();
				selectCtgr($(this));
			});

			faqDep2.find('li>a').bind('click',function(e){
				e.preventDefault();
				selectCtgr($(this));
			});

			btnMore.children('a').bind('click',function(e){
				e.preventDefault();
				btnMore.hide();
				btnClose.show();
				dep1_hidden.show();
			});

			btnClose.children('a').bind('click',function(e){
				e.preventDefault();
				btnMore.show();
				btnClose.hide();
				dep1_hidden.hide();
			});

			btnSearchAgain.bind('click',function(e){
				e.preventDefault();
				init();
			});

			init();//초기화
		}

		// 지도보기 상세 목록열고/닫기 //mpoc/center/mCS4.1.1T.2.2.html#
		$('.mapList_area').each(function(){
			var target=$(this);
			target.children('a').bind('click',function(e){
				e.preventDefault();
				target.toggleClass('on');
				if(target.hasClass('on')){
					target.siblings('.mapInfo').addClass('off');
					$(this).text('목록 닫기');
				}else{
					target.siblings('.mapInfo').removeClass('off');
					$(this).text('목록 열기');
				}
			});
		});

		// '매장소개' 관심매장 등록 버튼 //mpoc/center/mCS4.1.1.html
		$('.favoriteBtn').each(function(){
			var target=$(this);

			target.children('button').bind('click',function(e){
				target.toggleClass('on');
				if(target.hasClass('on')){
					$(this).text('관심매장 취소');
				}else{
					$(this).text('관심매장 등록');
				}
			});
		});

		// '공식 인증 대리점' 관심매장 등록 버튼 //mpoc/center/mCS4.1.1T.1.html
		$('.shopList .detailBtn').each(function(){
			$(this).children('a:last').bind('click',function(e){
				e.preventDefault();
				var target=$(this);
				target.toggleClass('on');
				if(target.hasClass('on')){
					$(this).children('span').text('관심매장 취소');
				}else{
					$(this).children('span').text('관심매장 등록');
				}
			});
		});

		//ARS고객센터 문의량 급증 예상 캘린더 스크립트 //mpoc/center/mCS.1T.html
		$('.layerCalendar').each(function(){
			var $this=$(this);
			var li=$this.find('.calCon>ul>li');
			var liLen=li.length;

			$this.find('.prevMonth').bind('click',function(){
				var idx=li.filter('.on').index();
				var targetIdx=idx-1;
				if(targetIdx<0) return;
				else{
					li.eq(idx).removeClass('on');
					li.eq(targetIdx).addClass('on');
				}
			});

			$this.find('.nextMonth').bind('click',function(){
				var idx=li.filter('.on').index();
				var targetIdx=idx+1;
				if(targetIdx>=liLen) return;
				else{
					li.eq(idx).removeClass('on');
					li.eq(targetIdx).addClass('on');
				}
			});
		});
	}

	$(window).ready(function()
	{
		//$('head').append( '<div data-role="header" data-fullscreen="true"/>' );
		commonJs.WIDTH = $(window).width();
		commonJs.HEIGHT = $(window).height();

		var mobilecheck = function () {
			var check = false;
			(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		};
		//clickEvent = ( mobilecheck() ) ? 'touchend' : 'click';
		clickEvent = 'click';
		setCommon();
		commonJs.setSelectBox('select');

		setPopup();
		search();
		setList();
		setCalendar();
		setRadioBox();
		setCheckBox();
		setTopConBoxTglOn();
		setTglBtn();
		setCheckPoint();

		setMyt();
		setProduct();
		setPurchase();
		setCenter();

		// 추가
		setCircuit();
		setTab();
		setTabJs();
	});
	$(window).load(function()
	{
		setQInfo();
		setSwiper();
	});

})(jQuery, window);