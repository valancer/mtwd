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
 * 2016.06.02
 * @getVersion 바다os, 블랙베리 분기 처리 추가
 *
 * 2016.06.07
 * @setSwiper 기본 넓이 swiperCon넓이로 변경 
 * @setSwiper sidemg15 if문 변경
 * SwiperSlider display:none 의 부모가 있을시에는 높이값 재설정 부분 제거
 * 
 * 2016.06.08
 * common/mUT1.4.html 간격 맞추기
 * @setTab 항목 선택시 resize 이벤트 발생 추가
 * @setTab 두번째탭 클릭 오픈시 빈내용 출력 수정(첫번째탭 항목의 'on'클래스 기준 인덱스 사용) //mpoc/util/common/mUT1.3.2.1.html
 * 
 * 2016.06.10
 * @setPopup 시스템 팝업 상단 타이틀이랑 내용이랑 붙는 경우 추가('.freeCall')
 * @setTab, @setSwiper 투뎁스 탭 컨텐츠 영역 높이 조절 수정
 *
 * 2016.06.13
 * @setCalendar 초기 기본값 변경(현재일:사용자PC 기준 오늘 날짜, 시작일:현재일 30일 전,  마지막일:현재일 30일 후)
 *
 * 2016.06.14
 * @setQInfo 말풍선버튼 연속 클릭 시 넓이값이 변하는 오류 수정 //mpoc/guide/etc.html
 *
 * 2016.06.15
 * @setTab a태그 href가 있는 경우 페이지이동 분기 처리 추가
 * 
 * 2016.06.16
 * bind => on교체 calendar의 경우 (pc와 동일하게 유지 하기 위해서) bind로 설정 되어 있기 때문에 변경하지 않고 나머지는 on로 변경
 * @setLayerPopupHeight 초기화 추가
 *
 * 2016.06.17
 * @commonJs.setSelectBox initSB() 수정
 *
 * 2016.06.21
 * @setTab 2depth탭 인덱스 문제 수정//mpoc/util/common/mUT1.3.1.html
 * 
 * 2016.06.24
 * mMY1.6.4.4T.1T.1.html  .btnBoxFloating 번튼 영역의 scroll 에 다한 위치 제어
 * @setBanner 추가
 * Jessture 클래스 추가
 * @setBanner 변수없이도 작동하도록 수정 요망
 * 
 * 2016.06.27
 * 'div.appsList>div.swiperCon2'  mpoc/product/mTS.html 스와이프 타입 추가
 * document ready setBanner(document); -> setBanner($(document)); 변경
 * @setSelectBox 클래스 추가 기능 추가//mpoc/myt/mMY1.4.1T.2.13P.html
 * @setSelectBox 클래스 추가 기능 null처리 추가//mpoc/myt/mMY1.4.1T.2.13P.html
 * @clearMask dispaly->$(this).css('display') 오타수정
 * @setMain 추가 
 * 
 * 2016.06.29
 * @setMain swiper 높이 수정
 * @setBanner 이미지 태그 삽입시 높이 조절 스크립트 추가
 * 
 * 2016.06.30
 * @setTab 2뎁스탭 마지막 뎁스 선택 처리 추가 및 x버튼 처리
 *
 * 2016.07.01
 * @setCenter 관심매장 등록 버튼 에러 수정 (:last -> :eq(1)로 수정)
 * 
 * 2016.07.04
 * @setTabJs direct/mDS.html# none 상태에서 block될때 사이즈가 잡히지 안는부분 수정 
 *
 * 2016.07.05
 * @setMyt 기본배송지 버튼 스크립트 삭제
 * 
 * 2016.07.06
 * @setCommon changeLineSlide 셀렉트 박스 값에 따른 하단 슬라이드 변경 이벤트 수정
 *
 * 2016.07.07
 * @commonJs.setSelectBox getTextSB() span태그 같이 넘어 오는 문제 수정
 *
 * 2016.07.11
 * @setCalendar end버튼 first버튼 실행함수 변경 (prevYear(), nextYear())
 *
 * 2016.07.12
 * @setTab 2뎁스탭 초기화 시 dethList "on" class 삭제
 * @setTab 2뎁스탭 클릭시 1뎁스탭 "on" class 삭제
 * @setTglBtn 보여질때 안에 "div.swiperCon, div.tabSwipe"있을경우 리사이즈 이벤트 발생
 * @commonJs.setSelectbox bt,lt,rt null처리 추가
 *
 * 2016.07.14
 * @commonJs.setSelectBox 셀렉트박스 선택창 닫기버튼 트리거 추가("close.selectbox")
 * @setCalendar 제이쿼리 확장함수 삭제 외부함수 피씨랑 동일하게 변경
 *
 * 2016.07.15
 * @commonJs.setSelectBox 셀렉트박스 실제 셀렉트 선택 추가
 *
 * 2016.07.18
 * @commonJs.setSelectBox 셀렉트박스 실제 셀렉트 선택 수정
 *
 * 2016.07.20
 * @setCircuit 회선정보 fixed처리 최소 동작 범위 지정 스크립트 추가.
 * @commonJs.loadMainNotice 메인페이지 공지사항 스크립트 추가
 *
 * 2016.07.25
 * @commonJs.setSlider 외부 리셋 함수 추가(resetSlider(curVal, max, hasPoint, hasCurVal))
 *
 * 2016.07.26
 * @setSwiper 길이조절 외부함수 추가 (ex. $('.swiperCon').getInstance().setLength(3);) 개발자요청!!
 * @setCheckBox 라이브 이벤트로 변경
 *
 * 2016.07.28
 * 개발팀요청 document.domain = 'tworld.co.kr'; 추가 
 * @commonJs.closeLayerPop 추가
 *
 * 2016.08.03
 * @setTglBtn 라이브 이벤트로 변경
 * @setSwiper -> commonJs.setSwiper외부 함수로 변경
 * @Jessture 마우스 이벤트 제거
 * 
 * 2016.08.05
 * Jessture 이벤트 변경
 * @setTab reHeight _reHeight_exc 예외 처리 추가
 * 
 * 2016.08.09
 *@setCommon 웹전근성 관련 <a href="#tabCon" class="hidden">메뉴 건너뛰기</a> 태그 추가및 아이디 값 부여  
 * 
 * 2016.08.10
 * commonjs 공통함수 추가
 * 
 * 2016.08.11
 * setSwiepr 스와프의 li의 가장 높이가 큰 값에 따라 콘텐츠 높이가 나타나게 변경
 * @setCalendar 달력 오늘 버튼 수정
 * 
 * 2016.08.16
 * 캘린더 포커스 수정및
 * commonJs.closeTabkeyFocus 추가
 * commonJs.findFocusElements 추가
 * setQInfo 스와이프 내부에 있는 경우 추가
 * setTab() 리스트 수정
 * @commonJs.setSlider touchend이벤트 슬라이더 사용중에만 동작하게 변경
 * 
 * 2016.08.17
 * 스와이프 수정 및 iframe으로 들어갈시 체크 및 함수 실행 제한 
 * @commonJs.setSlider 파라미터 초기화 수정
 * 
 * 2016.08.18
 * @setBanner 수정
 * @setBanner POC콘텐츠 배너 추가
 * @setBanner 배너 추가
 * @setCookie, @getCookie 추가
 * @setCommon 탑배너(스프레드) 1일간 보이지 않기 기능 추가
 * 
 * 2016.08.19
 * 슬라이드배너 배경속성 repeat->repeat-x로 변경
 *
 * 2016.08.22
 * @setBanner 슬라이드 네비 셀렉터 수정
 * @setBanner 스프레드 배너 초기화 수정
 *
 * 2016.08.23
 * @commonJs.loadMainNotice 공지사항 스크립트 수정
 * @setPopup 레이어팝업 이벤트 라이브로 변경
 *
 * 2016.08.24
 * @setPopup 시스템 팝업 .popCon 셀렉트 변경 및 mbLen null처리
 * @setBanner 알파 네비게이션 삽입 스크립트 변경(js변수 파싱값으로 단순 html 삽입 -> js변수 파싱값으로 기본태그 삽입 후 상세내역 html삽입으로 변경)
 * @setTab "2뎁스탭" 선택값이 1뎁스 메뉴일때 2뎁스 선택 전 취소시 빈 2뎁스가 화면에 남아 있는 현상 수정
 *
 * 2016.08.30
 * @setRadioBox 라디오 이벤트 라이브로 변경
 *
 * 2016.09.01
 * @setCheckPoint 동적 이벤트로 변경
 * @setPopup 시스템 팝업 가이드 페이지 body fixed방지
 * @commonJs.setSwiper slideNavi2 페이징 기능 추가
 *
 * 2016.09.02
 * @setRadioBox 초기화 기능 추가
 *
 * 2016.09.04
 * @setBanner poc cont. banner (ul>li) 
 *
 * 2016.09.05
 * @setRadioBox 라디오박스 disabled 처리
 * @setPopup subClose 추가
 * @setMain alpha_navi 수정
 * @commonJs.setSwiper irregular2 추가
 * @setCenter FAQ 자주찾는질문 카테고리 설정 live -> on 이벤트로 변경
 *
 * 2016.09.06
 * @commonJs.setSwiper slideNavi2 검색 next->siblings로 변경
 *
 * 2016.09.07
 * @commonJs.setSwiper auto_sw_width 기능 추가
 *
 * 2016.09.08
 * @setMain 디자인 변경으로 인한 알파내비게이션 수정
 * @setQInfo 라이브 이벤트로 변경
 *
 * 2016.09.11
 * @setCheckBox 기본 초기화 추가
 * @setRadioBox 라디오 버튼 클릭 스크롤 막기 수정
 * "tabType2" 문자 text -> html 변경
 *
 * 2016.09.12
 * @setCommon 회원안내 이용 가능 메뉴 링크 삽입(.siteMap a[ucode])
 *
 * 2016.09.17
 * @setCheckBox no_checkbox_evt 추가
 * 
 * 2016.09.18
 * @setProduct 나의 요금상품정보('.myContents') 스크립트 삭제 fixed고정으로 변경
 *
 * 2016.09.19
 * @setProduct 나의 요금상품정보('.myContents') resize추가
 * @setQInfo resize 수정
 * @setMyt 기간선택 기준월 선택 이벤트 동적이벤트로 변경
 * @setMyt 기간선택 버튼 이벤트 동적이벤트로 변경
 *
 * 2016.09.20
 * 타이머관련 개발 스크립트 삽입
 */


/************* 개발팀 요청 스크립트 *************/

if(document.domain) document.domain='localhost';

/***************************************************/
//쿠키 조회
function _poc_GetCookie(cookName) {
    var aCookie = document.cookie.split("; ");
    for (var i = 0; i < aCookie.length; i++) {
        var cPos = aCookie[i].indexOf("=");
        var cName = aCookie[i].substring(0, cPos);
        if (cName == cookName) {
            return unescape(aCookie[i].substring(cPos + 1));
        }
    }
    return "";
}
// 타이머 시간 설정 30분 설정
var cnt = parseInt(1800);

function timer_start(siteCd) {
    //로그인한 경우에만 수행
    var isLogin = _poc_GetCookie("SKTSSO");
    if (isLogin == "Y") {
        setInterval("counter_run()", 1000);
    }
}

function counter_run() {
    cnt--;
    if (cnt < 0) {
       // self.location = location.protocol + "//m.tworld.co.kr/mpoc/common/loginout/control/LogoutServlet.jsp ";
    }
}
timer_start();

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
	
	
	$( window.top ).resize(function() 
	{
		commonJs.WIDTH = $(window.top).width();
		commonJs.HEIGHT = $(window).height();		
		$(resizeObject).trigger('resize');
	});
	$( window ).scroll(function() 
	{
		$(resizeObject).trigger('scroll');
	});

	//main page 공지사항
	commonJs.loadMainNotice=function(){
		if(typeof _noticeXml=='undefined'||!_noticeXml) return;

		var noitceArr=_noticeXml.split('||');
		var detailStrong=$('ul.notice_list>li>a>strong');

		detailStrong.text(noitceArr[0]);
		detailStrong.parent('a').attr('href',"javascript:goNoticeDetail('"+noitceArr[1]+"');");
		$('dl.notice_area a.moreBtn').attr('href',"javascript:goNoticeList();");
	};
	
	// 셀렉트 박스 관련 추가
	/*
	var selectBox = $({});
	commonJs.selectBox = selectBox;
	commonJs.event = {
		SELECTBOX_INIT : 'selectBoxInit'
	};
	*/
	/*
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

				var tmpStr=('<a href="#ls_'+sltBoxIdx+'" title="'+OrglSlt.attr('title')+'"><span>선택하세요</span></a>');
				SelectBox.prepend(tmpStr);

				tmpStr='<div class="layerSelect" id="ls_'+sltBoxIdx+'"><div class="selectCon"><div class="list"><ul>';
				for(var i=0;i<sltArrTxt.length;i++){
					if(OrglSltOpt.eq(i).is(":disabled")){
						if(OrglSltOpt.eq(i).attr('class')){
							tmpStr+='<li class="disabled"><a href="#"><span class="'+OrglSltOpt.eq(i).attr('class')+'">'+sltArrTxt[i]+'</span></a></li>';
						}else{
							tmpStr+='<li class="disabled"><a href="#"><span>'+sltArrTxt[i]+'</span></a></li>';
						}	
					}else{
						if(OrglSltOpt.eq(i).attr('class')){
							tmpStr+='<li><a href="#"><span class="'+OrglSltOpt.eq(i).attr('class')+'">'+sltArrTxt[i]+'</span></a></li>';	
						}else{
							tmpStr+='<li><a href="#"><span>'+sltArrTxt[i]+'</span></a></li>';
						}
					}					
				}
				tmpStr+='</ul></div>';
				tmpStr+='<div class="btnBox h20"><a href="#" class="btnL btnGray">닫기</a></div></div>';

				$('body').append(tmpStr);				
				
				layerSelect=$("#ls_"+sltBoxIdx);
				selectList=layerSelect.find('div.list');
				selectListLi=selectList.find('ul>li');
				selectListA=selectListLi.children('a');
				selectBoxA=SelectBox.children('a');


				if(isSlt2){
					SelectBox.addClass('select2');
					layerSelect.prepend('<div class="tit"><p><span></span><em></em><span></span></p></div>');

					if(bfSpanTxt&&(OrglSlt.hasClass('lt')||OrglSlt.hasClass('bt'))&&bfSpanTxt=="null") 
						layerSelect.children('div.tit').find('span:eq(0)').text(bfSpanTxt);

					if(afSpanTxt&&(OrglSlt.hasClass('rt')||OrglSlt.hasClass('bt'))&&afSpanTxt=="null") 
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
				// sltTxt=selectListA.eq(idx).html();
				sltVal=sltArrVal[idx];
				selectBoxA.html(sltTxt);

				if(isSlt2){
					lsEm.html(sltTxt);
				}
				_sortLayerSelect();
				// SelectBox.trigger('change.selectbox', _getInfoSB());
				OrglSlt.find('option').removeAttr('selected').eq(idx).prop('selected',true).parent('select').trigger('change.selectbox', _getInfoSB());

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
				selectBoxA.on('click',function(e){
					e.preventDefault();
					if(SelectBox.hasClass('disabled')) return;

					layerSelect.show();
					_sortLayerSelect();
					setMask();
				});

				selectListA.on('click',function(e){
					e.preventDefault();
					var thisLi=$(this).parent();
					if(thisLi.hasClass('disabled')) return;

					var idx=thisLi.index();
					_selectListByIdx(idx);
				});

				layerSelect.find('.btnBox>a.btnL').on('click',function(e){
					e.preventDefault();
					layerSelect.hide();
					clearMask();
					SelectBox.trigger('close.selectbox', _getInfoSB());
				});

				$(resizeObject).on('resize',function(){
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
				if(!OrglSlt) return false;
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
	*/
	
	
	// const variable
	var TABKEY_CODE = 9;
	
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

	//쿠키 설정
	function setCookie(key, value, days) {
		var date, expires;
		if (days) {
			date = new Date();
			date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
			expires = "; expires=" + date.toGMTString();
		} else {
			expires = "";
		}
		document.cookie = key + "=" + value + expires + "; path=/";
	}

	//쿠키 값 얻어오기
	function getCookie(key) {
		var results = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
		if (results) {
			return ( unescape(results[2]) );
		} else {
			return undefined;
		}
	}
	
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
				if($(this).css('display')!='none') {
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

		if(x.indexOf('BlackBerry')>-1) return false; //블랙베리 분기 처리
		if(x.indexOf('Bada')>-1) return false; //바다os 분기 처리

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
	
	// 공통함수
	commonJs.setMask = setMask;
	commonJs.clearMask = clearMask;
	commonJs.resizeObject = resizeObject;
	commonJs.getVersion = getVersion;
	
	var doc = $(window.document);
	
	
	commonJs.findFocusElements = function( target )
	{
		//div[tabindex="0"], a, button, input, textarea
		return target.find('div[tabindex="0"], a, button, input, textarea');
	};
	
	// 탭키 포커스 이동 함수
	commonJs.closeTabkeyFocus = function( obj )
	{
		var first = obj.eq(0);
		$(first).data('first',true);
		
		var end = obj.eq(obj.size()-1);
		var focusObj = function( )
		{
			var _this = this;
			$(first).unbind('keydown').bind('keydown' , function(e)
			{
				//console.log( 'tab==' );
				if( e.shiftKey && e.keyCode == TABKEY_CODE)
				{
					if( $(e.target).data('first') ){
						$(end).focus();
						e.preventDefault();					
					}					
				}
			});
			
			$(end).unbind('keydown').bind('keydown' , function(e)
			{
				if( !e.shiftKey && e.keyCode == TABKEY_CODE)
				{
					//console.log( '= end keydown = '+$(first) );
					$(first).focus();
					e.preventDefault();
				}
			});
			
			_this.clear = function()
			{
				$(first).unbind('keydown');
				$(end).unbind('keydown');
			};
			
			// 팝업창 이동형태가 활성화된 창에서만 도는 경우에는 필요가 업으나 팝업창이 닫히고 다른 이벤트가 발생하여야 하는 경우에는 사용 할수도 있음
			_this.off = function(){ };
			_this.on = function(){ };
			_this.bind = function( evt , func)
			{
				
			};
		};
		return new focusObj();
	};
	
	
	function setMembership()
	{
		
		doc.find('div.mms_section2').each(function(index) 
		{
			var section =$(this);
			var list = section.find('div.list>ul>li');
			list.filter(':gt(5)').css('display','none');
			var alist = section.find('div.list>div.moreBoxType1>a');
			alist.on('click' , function( evt )
			{
				evt.preventDefault();
				if( $(evt.target).hasClass('close') )
				{
					alist.filter('.close').parent().css('display','none');
					alist.not('.close').parent().css('display','block');
					list.filter(':gt(5)').css('display','none');					
				}else{
					alist.filter('.close').parent().css('display','block');
					alist.not('.close').parent().css('display','none');
					list.filter(':gt(5)').css('display','block');
				}				
			});
		});
	}
	
	function setMain()
	{
		doc.find('div.alpha_navi').each(function( idx ) 
		{
			var alpha_navi =  $(this);
			var alpha_con = alpha_navi.children('div.alpha_con');
			var mode = false;
			
			var js = new Jessture( alpha_con );
			js.on( js.RIGHT , function()
			{ 
				cn--;
				if( cn < 0){
					cn = 0;
				}
				moveF('L');
			});
			js.on( js.LEFT , function()
			{
				cn++;
				if( cn > tn){
					cn = tn;
				}
				moveF('R');
			});
			
			var swipBox =alpha_con.children('ul');
			var swipList = doc.find('div.alpha_navi>div.alpha_con>ul>li'); 
			var btn = alpha_navi.children('button');
			
			var tn = swipList.length-1;
			var cn = 0;

			var liW=swipList.eq(0).outerWidth(true);
			var ulW=liW*(tn+1);
			var maxMg=swipBox.parent().width()-ulW;
			if(maxMg>0) maxMg=0;
			swipBox.css('width',ulW+'px');
			swipBox.css('margin-left' , '0px');

			var pos = function(id)
			{
				return -((commonJs.WIDTH*(id))-( 30*id ));
			};
			var btnCheck = function()
			{
				if(mode){
					btn.removeClass('on');
					if( cn > 0){
						btn.eq(0).addClass('on');
					}
					if( tn != cn)
					{
						btn.eq(1).addClass('on');
					}
				}else{
					btn.removeClass('on');
					var ml=Number(swipBox.css('margin-left').replace('px',''));
					if(ml<0) {
						btn.eq(0).addClass('on');
					}
					if(ml>maxMg) {
						btn.eq(1).addClass('on');	
					}
				}				
			};
			btnCheck();
			var swiperMode = function( id )
			{
				mode = true;
				alpha_con.css('overflow','hidden');
				swipBox.css('width','100000px');
				swipList.css('width',(commonJs.WIDTH-30)+'px');
				swipBox.css('margin-left' ,  pos(id)+'px');
				swipList.css('display','block');
				
				cn = id;
				/*
				if( id != 0)
				{
					var n = swipList.eq(id).height();
					console.log( 'dd '+swipList.find('.swiperCon').height() );
					alpha_con.css('height',n);
				}
				*/
				var n = swipList.eq(id).height();
				alpha_con.css('height' , n );
				/*
				if( n < swipList.find('.swiperCon').height() )
				{
					alpha_con.css('height' , swipList.find('.swiperCon').height() );
				}
				*/
				//console.log( 'dd '+swipList.find('.swiperCon').height() );
				//
				
				btnCheck();
				$(resizeObject).on('resize', resizeF);
			};
			function resizeF()
			{
				swipList.css('width','');
				swipList.css('width',commonJs.WIDTH-30+'px');
				alpha_con.css('height','');
				swipBox.css('margin-left' ,  pos( cn )+'px');
				var n = swipList.eq(cn).height();
				alpha_con.css('height',n);

			}

			$(resizeObject).on('resize', function(){
				swipBox.css('margin-left' ,  '0px');
				maxMg=swipBox.parent().width()-ulW;
				if(maxMg>0) maxMg=0;
				btnCheck();
			});

			var swiperOff = function()
			{
				mode = false;
				$(resizeObject).off('resize', resizeF);
				swipBox.css('width',ulW+'px');
				// swipBox.css('width','');
				swipList.css('width','');
				swipBox.css('margin-left' , '0px');
				alpha_con.css('height','');	
			};
			
			swipList.each(function( idx ) 
			{
				var li = $(this);
				li.children('a').on('click' , function( evt ) 
				{
					evt.preventDefault();
					alpha_con.parent().addClass('on');
					$(resizeObject).trigger('resize');
					swiperMode( $(evt.target).closest('li').index() );
				});
				
				li.find('div.apCon>a.btn_close').on('click',function( evt )
				{
					evt.preventDefault();
					swiperOff();
					alpha_con.parent().removeClass('on');
				});
			});

			btn.on( 'click' , function()
			{
				if( $(this).hasClass('alphaPrev') )
				{
					cn--;
					if( cn < 0){
						cn = 0;
					}

					moveF('L');
			  	}else{
				  	cn++;
					if( cn > tn){
						cn = tn;
					}
					moveF('R');
				}
			});
			
			function moveF(d)
			{
				var ml=0;

				if(mode){
					ml=pos(cn);
				}else if(d=='L'){
					ml=Number(swipBox.css('margin-left').replace('px',''))+liW;
					if(ml>0) ml=0;					
				}else if(d=='R'){
					ml=Number(swipBox.css('margin-left').replace('px',''))-liW;
					if(ml<maxMg) ml=maxMg;
					
				}

				TweenMax.to(  swipBox, 0.3, {'margin-left':  ml+"px" , ease:Circ.easeInOut , onComplete : 	function( e ){
					alpha_con.css('height','');
					var n = swipList.eq(cn).height();
					alpha_con.css('height',n);
					btnCheck();
				}} );
			}
		});
	}
	
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

			var initTitle;
			var initSub;
			var initTitLi;

			if( tabContent.size()>0 )
			{
				// 탭에 상단 메뉴가 2개인 경우
				dethList.removeClass('on');//초기화  on값 삭제
				var tCont1DepLi=tabContent.eq(0).find('li');
				var tCont2DepDiv=tabContent.eq(1).children('div');
				menuType = 0;
				var title = dethList.eq(0).children('a').children('span');
				var sub = dethList.eq(1).children('a').children('span');

				initTitle=title.text();
				initSub=sub.text();
				initTitLi=tabContent.eq(0).find('div.group li.on');

				dethList.children('a').on('click' , function( evt )
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

							$(resizeObject).trigger('resize');
						}						
					}else if(tabContent.eq(1).css('display')=="none"){//열기
						var idx=0;
						
						tCont1DepLi.each(function (i){
							if($(this).hasClass('on')) {
								idx=i;
								return false;
							}
						});
						tCont2DepDiv.css('display','none');
						tCont2DepDiv.eq(idx).css('display','block');
						
						ta.addClass('on');
						$this.children('.tabContent').css('display','block');

						tabContent.eq(0).css('display','none');
						tabContent.eq(1).css('display','block');

						$(resizeObject).trigger('resize');
						dethList.eq(0).removeClass('on');
					}else{//닫기
						tabContent.css('display','none');
						if(tabTitle){
							tabTitle.children('a').removeClass('on');
						}
						
						dethList.eq(0).removeClass('on');
						dethList.eq(1).removeClass('on');
					}
					// reHeight( tabContent.eq(0).children('.tabSwipe'));
					
				});
				var resize = function()
				{
					tabContent.children('.tabSwipe').each(function(i){
						var target=$(this);
						
						if(target.closest('li').css('display')!='none'&&target.css('display')!='none') {
							reHeight(target);
						}
					});
					
				};
				tabContent.children('.tabSwipe').data('resizeH',resize);

				tabContent.css('display','none');
			}else{
				menuType = 1;
				tabTitle = $this.children('.tabTitle');
				tabContent = $this.children('.tabContent');
				tabContent.css('display','none');
				$this.children('div.tabTitle').children('a').on('click' , function(evt)
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
				swiper.children('button.btnClose').on('click',function()
				{
					tContent.css('display','none');
					if(tabTitle){
						tabTitle.children('a').removeClass('on');
					}
					
					dethList.eq(0).removeClass('on');
					dethList.eq(1).removeClass('on');

					//init
					if(title) {
						title.text(initTitle);

						if(sub) {
							if(initSub){
								sub.text(initSub);
							}else{
								var subLi=sub.closest('li');
								subLi.hide();
								subLi.prev('li').addClass('center');
							}							
						}
						tabContent.eq(0).find('div.group li').removeClass('on');
						if(sub) initTitLi.addClass('on');
					}
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

					lilist.children('a').on('click', function(evt) 
					{
						if($(this).attr('href')=='#') evt.preventDefault();
						lilist.removeClass('on');
						var target =$(evt.target).closest('li');
						target.addClass('on');
						
						switch( menuType )
						{
							case 0 :
								if( depth == 0){
									var tarIdx=target.index();
									if(target.closest('div.group').index()>0){
										tarIdx+=6;
									}
									dethList.eq(0).removeClass('on');
									dethList.eq(1).addClass('on');
									_title.empty();
									_title.html( target.text() );
									tabContent.eq(0).css('display','none');
									
									tabContent.eq(1).css('display','block');
									tabContent.eq(1).children('.tabSwipe').css('display','none');
									tabContent.eq(1).children('.tabSwipe').eq(tarIdx).css('display','block');
									
									reHeight( tabContent.eq(1).children('.tabSwipe').eq(tarIdx));
									var swipe = tabContent.eq(1).children('.tabSwipe').eq(tarIdx).find('ul>li').eq(0).children('a');
									_sub.empty();
									_sub.html( swipe.text() );
									menuCheck( dethList );
									$(resizeObject).trigger('resize');
								}else{
									var txt=$(this).text();

									sub.html(txt);
									initTitle=title.text();
									initSub=sub.text();
									initTitLi=tabContent.eq(0).find('div.group li.on');
									tContent.css('display','none');
									if(tabTitle){
										tabTitle.children('a').removeClass('on');
									}
									
									dethList.eq(0).removeClass('on');
									dethList.eq(1).removeClass('on');
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
								tabTitle.find('a').removeClass('on');
								tabContent.css('display','none');
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
				var list = $(this).find('ul>li:not("._reHeight_exc")');
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

	//get instance
	if (jQuery.fn.getInstance === undefined) jQuery.fn.getInstance = function () { return this.data('scope'); };

	//슬라이더 ex)//mpoc/product/mTS1.1.4.html
	commonJs.setSlider=function(_sltr, _curVal, _max, _hasPoint, _hasCurVal){
		$(_sltr).each(function(){
			var sltr=_sltr;
			var curVal=_curVal;
			var max=_max;
			var hasPoint=_hasPoint;
			var hasCurVal=_hasCurVal;

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

			var init=function(_curVal, _max, _hasPoint, _hasCurVal){
				curVal=_curVal;
				max=_max;
				hasPoint=_hasPoint;
				hasCurVal=_hasCurVal;

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
			};

			init(curVal, max, hasPoint, hasCurVal);			

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
		    ctrl.on("touchstart",function(e){
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;//모바일 화면 드래그 방지
		    	curX=e.originalEvent.touches[0].clientX;
		    	sliderHandle=this;

		    	$('html').on("touchend",function(e){
		    		curX=null;
		    		sliderHandle=null;
		    		$('html').off('touchend');
		    	});
		    });

		    $('html').on("touchmove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.originalEvent.touches[0].clientX);
					curX=e.originalEvent.touches[0].clientX;
		    	}    	
		    });
		    //--------------------------------------------------------------------------

		    ctrl.on("dragstart",function(e){//블록 드래그 방지 ie7/8
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;
		    });

			//pc mouse event
		    ctrl.on("mousedown",function(e){
		    	curX=e.pageX;
		    	sliderHandle=this;
		    });
		    ctrl.on("click",function(e){//a 태그 클릭 이벤트 방지.
		    	e.preventDefault();
		    });
		    
		    $('html').on("mouseup",function(e){
		    	curX=null;
		    	sliderHandle=null;
		    });

		    $('html').on("mousemove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.pageX);
		    		curX=e.pageX;
		    	}    	
		    });

		    ctrl.on('keydown',function(e){
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
		    slider.data('scope',{
		    	resetSlider:function(curVal, max, hasPoint, hasCurVal){
		    		init(curVal, max, hasPoint, hasCurVal);
		    	}
			});
			
		});
	};
	//----------------------
	function Jessture( target )
	{
		var startX = 0;
		var startY = 0;
		var _this = $(this);
		var RIGHT = this.RIGHT = 'jsRight';
		var LEFT = this.LEFT = 'jsLeft';
		
		target.bind('touchstart , mousedown' , function(e)
		{
			if(e.type == 'mousedown'){
				// input 필드 체크
				if( $(e.target).filter('input').length == 0){
					e.preventDefault();
				}
				startX = e.pageX;
				startY = e.pageY;
			}else{
				startX = e.originalEvent.touches[0].pageX;
				startY = e.originalEvent.touches[0].pageY;
			}
		});
		
		target.bind( 'touchmove , mousemove' , function(e) 
		{
			var endX = 0;
			var endY = 0;
			
			if(e.type != 'mousemove')
			{
				endX = e.originalEvent.touches[0].pageX;
				endY = e.originalEvent.touches[0].pageY;	
			}
			if( Math.abs(startX - endX)>Math.abs(startY - endY) )
			{
				e.preventDefault();
			}
		});
		
		
		target.on('touchend , mouseup' , function(e)
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
					_this.trigger( RIGHT );
				}else{
					_this.trigger( LEFT );
				}
			}
			startX = 0;
		});
		
		this.on = function( evt , func)
		{
			_this.on(evt , func ); 
		};
	}
	
	
	// 추가
	function SwiperSlider( target , opt )
	{
		var swiper = this;
		swiper.target = $(target);
		
		var warper = swiper.target.children('.swiperWrap');
		warper.css('width','10000px');
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
		var tch = true;
		warper.parents().each(function(index) 
		{
			if( $(this).css('display') == 'none' )
			{
				tch = false;
				return;
			} 
		});
		
		if(th && tch ){
			setTimeout(function(){
				th = first.outerHeight(true);
				warper.css('height',th+'px');
			},10);	
		}
		
		var js = new Jessture( warper );
		js.on( js.RIGHT , function()
		{ 
			if( eventBlock && ( swiper.activeIndex > 0) )
			{	
				swiper.__prevSlider();
			}
		});
		js.on( js.LEFT , function()
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
			//console.log( 'swiper resize' );
			
			var s = -((swiper.activeIndex) *  opt.width);
			if( opt.type=='type3' ){
				s = -(commonJs.WIDTH/2 + 70)*swiper.activeIndex;
			}
			var sWarper =swiper.target.find('.swiper-warper'); 
			sWarper.css('margin-left' , s );
			var li = sWarper.children('.swiper-container').eq(swiper.activeIndex);
			var h = li.outerHeight(true);
			
			var tch = true;
			sWarper.parents().each(function(index) 
			{
				if( $(this).css('display') == 'none' )
				{
					tch = false;
					return;
				} 
			});
			
			if(th && tch )
			{
				sWarper.css('height',h+'px');
			}
			
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
	SwiperSlider.prototype.on = function( event , callBack ) 
	{
		 //this.target.on(event , callBack );
		 this.target.on(event , callBack ); 
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
	
	commonJs.setSwiper=function(targetSlt){
		doc.find(targetSlt).each(function(index)
		{
			if( window.top != window.self )
			{
				$(document).find('body').css('width' , commonJs.WIDTH+'px');
			}
			
			var con = $(this);
			var sNavi = con.children('.slideNavi');
			var sNavi2 = con.siblings('.slideNavi2');
			var sNavi2Cnt = sNavi2.find('strong>span:first');
			if( sNavi.length == 0 ) sNavi = con.parent().children('.slideNavi');

			var is_auto_sw_width=con.hasClass('auto_sw_width');

			var sNaviList = sNavi.children('ul').children('li');
			var liList = con.children('.swiperWrap').children();
			
			var paging=con.children('.paging');

			var sliderW = function(){
				var n= con.outerWidth(true);
				
				//if( con.hasClass('sideMargin') ){
				//	n = commonJs.WIDTH - 30;
				//}else if(con.hasClass('sidemg15') ){//mpoc/center/mCS.html
				//	n = commonJs.WIDTH - 30;
				//}
				if( con.hasClass('sideMargin') || con.hasClass('sidemg15') ){
					n = commonJs.WIDTH - 30;
				}
				return n;
			};
			
			//debug( 'dd '+ window.resizeTo( )  );
			//debug('width' +' : '+ sliderW() );
			
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
			
			//mMa.html swipe 안에 스와이프
			$(this).data('swiper', function()
			{
				//console.log('ddd');
				//liList.css('width' , (con.outerWidth(true))+'px' );
				//swiper.resize();
				resizeH();
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
				$(this).find('a').on('click', function(evt) 
				{
					evt.preventDefault();
					var idx = $(evt.target).parent().index();
					menuActive( idx );
					swiper.moveSlider( idx );
				});
			});
			
			var th = 0;
			liList.each(function()
			{
				var h = $(this).outerHeight();
    			th = h > th ? h : th;
				//console.log( $(this).outerHeight() );
			});
			liList.css({
				'display'	:'block',
				'width'	:sliderW()+'px'
			});
			
			//irregular 높이값이 가변일 경우에;
			if( th > 0 && !( con.hasClass('irregular')||con.hasClass('irregular2') ) )
			{
				liList.css('height',th+'px');	
			}
			
			var target =$(this); 	
			$(resizeObject).on('resize',resizeH);
				
			function resizeH()
			{
				if( window.top != window.self ){
					$(document).find('body').css('width' , commonJs.WIDTH+'px');
				}
				var sw=sliderW();
				swiper.setSlideWidth( sw );
				liList.css('width' , sliderW()+'px' );
				
				if( target.hasClass('roundMargin') ){
					var left = (commonJs.WIDTH/2) - 70;
					liList.not(':eq(0)').css('margin-left', -left+'px');
				}
				if( target.data('resizeH') )
				{
					target.data('resizeH')();
					//var actCon=con.find('.swiper-container').eq(swiper.activeIndex);
					//actCon.parent().css('height',actCon.outerHeight()+'px');
				}
				
				// myt/mMY1.2.1.2T.1.html  요일별, 차트의 스와이프 단일적용
				if( conWidth < sliderW() && conWidth ){
					swiper.setLength(0);
				}else if( conWidth ){
					swiper.setLength(2);
				}
				
				swiper.resize();

				if(is_auto_sw_width){
					var tot=swiper.getLength();
					var curIdx=swiper.getActiveIndex();
		        	var rm=Number(liList.eq(0).css('margin-right').replace('px',''));
		        	var ul=con.find('.swiperWrap');
		        	ul.css('width',sw*(tot+1)+'px');
		        	ul.css('margin-left',  -((sw+rm) * curIdx)+'px');
				}				
			}

			if(is_auto_sw_width) resizeH();
			
				
			swiper.on( 'complete' , function( event, obj )
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
				
			con.children('button').on('click' , function()
			{
				if( swiper.getLength()==1 ){
					return;
				}
				var n =swiper.getActiveIndex();
				if( $(this).hasClass('swipeNext') || $(this).hasClass('btnPre') )
				{
					if( n < (swiper.getLength() -1) ){
						swiper.moveSlider( n+1 );
						
						if(sNavi2Cnt.length==1){
							sNavi2Cnt.text(n+2);
						}
						if(paging.length==1){
							pagingCur.text(n+2);
						}
					}
				}else{
					if( n != 0){
						swiper.moveSlider( n-1 );
						if(sNavi2Cnt.length==1){
							sNavi2Cnt.text(n);
						}
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

				if(sNavi2Cnt.length==1){
					sNavi2Cnt.text(n+1);
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
				btnPlay.on('click' , btnClick);
				btnStop.on('click' , btnClick);

				
				startSlide();
			}

			var scope={
				setLength:function(i){swiper.setLength(i);}
			};
			con.data('scope',scope);
	
		});

	};

	
	function setProduct()
	{
		//mTS1.1.1.html# 10GB이상(무제한) 탭 클릭시
		doc.find('div.findProduct').children('div.tabType2').each(function()
		{
			//console.log( $(this).children('a.tabBtn') );
			$(this).children('a.tabBtn').on('click',function(evt)
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

			target.css('display' ,'block');

			$('body').append('<div id="myContents_dummy" style="height:'+target.outerHeight(true)+'px;"></div>');

			$(resizeObject).on('resize',function(){
				$('#myContents_dummy').css('height',target.outerHeight(true)+'px');
			});
		});

		//mpoc/product/mTs1.1.4.html
		$('div.tabType3').each(function(){
			var target=$(this).children('ul').children('li');

			target.children('a').on('click',function(e){
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

			tabTitle.on('click',function(e){
				e.preventDefault();
				var target=$(this).parent();
				target.toggleClass('on');
				if(target.hasClass('on')){
					fn_resize();
				}
			});

			$thisA.on('click',function(e){
				e.preventDefault();
				tabTitle.parent().removeClass('on');
				tabTitle.html($(this).html());
			});

			$(resizeObject).on('resize',fn_resize);
		});	
			
		doc.find('div.appsList>div.swiperCon2').each(function( idx ) 
		{
			var waper = $(this).parent();
			var con =$(this).find('ul'); 
			
			var list = doc.find('div.appsList>div.appsCont');
			var libox = $(this).find('div.inner>ul>li');
			var sellCnt = 3;
			var tn = (function(){
				return (libox.size()/sellCnt)-1;
			})();
			var cn = 0;
			
			var docview = function( wid )
			{
				list.css('display','none');
				//var n =$(this).attr('href');
				doc.find(wid).css('display','block');
			};
			
			libox.children('a').on('click' , function( evt )
			{
				evt.preventDefault();
				libox.removeClass('on');
				$(evt.target).closest('li').addClass('on');
				docview( $(this).attr('href') );
			});
			
			
			$(this).children('button').bind('click', function( evt ) 
			{
			  //console.log(   );
			  if( $(evt.target).closest('button').hasClass('swipePrev') )
			  {
				cn--;
				if( cn < 0){
					cn = 0;
				}
			  }else{
			  	cn++;
				if( cn > tn){
					cn = tn;
				}
			  }
			  moveF();
			});
			
			var moveF = function()
			{
				var mn = -(cn * 240)+'px';
				TweenMax.to(  con, 0.3, {'margin-left': mn , ease:Circ.easeInOut , onComplete : 	function( e ){}});
				var id = cn*sellCnt;
				libox.removeClass('on');
				libox.eq(id).addClass('on');
				docview( libox.eq(id).find('a').attr('href') );
				//console.log( 'dd '+id );
				//console.log( libox.eq(id).find('a').attr('href') );
			};
			
			var js = new Jessture(waper);
			js.on( js.RIGHT , function()
			{
				cn--;
				if( cn < 0){
					cn = 0;
				}
				moveF();
			});
			js.on( js.LEFT , function()
			{
				cn++;
				if( cn > tn){
					cn = tn;
				}
				moveF();
			});
			
		});
	}
	
	function setCommon()
	{
		// tabcontent 존재하는 경우 웹접근성 관련 추가
		doc.find('div.tab').each(function(index) 
		{
			var t = $(this);
			t.prepend('<a href="#tabCon" class="hidden">메뉴 건너뛰기</a>');
			t.after('<div id="tabCon"><!-- 콘텐츠 시작 --></div>');
		});
		
		
		//eng/mMA6.1.html#
		doc.find('div.allMenu>div.menuList>ul>li.plusDepth>a').on( 'click' , function( evt )
		{
			var li = $(evt.target).closest('li');
			li.toggleClass('on');
		});
		
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
				 
		$(resizeObject).on('resize', function(event) 
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

		//'.changeLineSlide' //mpoc/util/common/mUT10.8P.html
		$('.changeLineSlide').each(function(){
			var $this=$(this);
			
			var target=$this.children('.swiperCon');
			var initNum=$this.find('.select>select>option:selected').index();

			target.hide();

			if(initNum&&initNum>0) target.eq(initNum).show();
			else target.eq(0).show();

			$this.on('change.selectbox','div.select:first',function(e,v){
				target.hide();
				target.eq(v.index).show();
				$(resizeObject).trigger('resize');
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
			$(resizeObject).on('resize',function(){
				setH();
			});
		});

		//탑배너(스프레드) 닫기 스크립트 및 1일간 보이지 않기//mpoc/util/common/mUT8.3.1L.html
		$('.topBanner').each(function(){
			var target=$(this);
			target.find('.bnrClose').on('click',function(e){
				e.preventDefault();

				var day_off=target.find('#todayClose:checked').length;

				if(day_off){
					var spredId=target.children('div[id]:first').attr('id');
				 	if(spredId) setCookie(spredId,'off',1);
				 }

				target.animate({'height':'0px'},500,function()
				{
					target.hide();
				});
			});
		});
		// common/mUT1.4.html 간격 맞추기
		var kWordlist =$('.keywordPack2>.con2>dd:eq(0)>ol>li');
		if( kWordlist.length ){
			
			$(resizeObject).on('resize', function(event) 
			{
				var kWordlist2 =$('.keywordPack2>.con2>dd:eq(1)>ol>li');
				for( var i = 0; i<kWordlist.length; i++ ){
					kWordlist.eq(i).removeAttr("style");
					kWordlist2.eq(i).removeAttr("style");
					if(  kWordlist.eq(0).height() > kWordlist2.eq(i).height()){
						kWordlist2.eq(i).css('height',kWordlist.eq(i).height()+'px');
					}else{
						kWordlist.eq(i).css('height',kWordlist2.eq(i).height()+'px');
					}
				}
			});
		}

		//이용 가능 메뉴 링크 삽입
		$('.siteMap a[ucode], .siteMap+.txtInfo a[ucode]').each(function(){
			var _this = $(this);
			var ucode = _this.attr('ucode');
			var url = window[ucode];
			if( url )
			{
				var arr = url.split('$');
				if( arr[0] )
				{
					var t = String(arr[0].split('_'));
					_this.attr('href',"javascript:poclink('" +ucode+ "')");
					var n = window['n'+arr[0]];
					if(n){
						var ta = n.split('$');
						if( _this.find('img').length == 0){
							_this.html( ta[1] );
						}
					}						
				}
			}

		});
	}

	//onclick="javascript:commonJs.closeLayerPop(this);"
	

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
				target.css('height','');
				inPop.css('height','');
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

		commonJs.closeLayerPop=function(_this){
			var target=$(_this).closest('div.layer_pop');
			if(target.length>0){
				target.hide();
				clearMask(true);
			}			
		};

		$(document).on('click','a.id_layerOpen',function(e){
			e.preventDefault();
			var href=$(this).attr('href');
			$(href).show();
			
			setLayerPopupHeight($(href));
			sortLayerPopup($(href));
			
			setMask();
			$(resizeObject).trigger('resize');
		});	

		$(document).on('click','div.layer_pop div.layerClose>button, div.layer_pop .subClose',function(e){//닫기버튼
			e.preventDefault();
			commonJs.closeLayerPop(this);
		});
		
		$(resizeObject).on('resize',function(){
			setLayerPopupHeight($('div.layer_pop'));
			sortLayerPopup($('div.layer_pop'));
		});
		//////////////////////////////////////////////////////////////////////

		//시스템 팝업
		doc.find('div.popup').each(function()
		{
			var p = $(this);

			if(p.parent('pre').length>0) return true;

			var pHead = p.find('div.popHead');
			var pCon = p.find('div.popCon');
			var content = pCon.children('div.inPop');
			var contentH = content.height();
			var pClose = p.children('div.popClose');
			
			var grayCont=pCon.children('div.grayCont');

			//화면사이즈조절 //www/mpoc/guide/syspop.html
			var setInPopHeight=function(){
				var gHeight=grayCont.outerHeight(true);
				var hHeight=pHead.outerHeight(true);

				var pConPB=pCon.css("padding-bottom");
				var mbLen=0;

				if(pConPB){
					mbLen=Number(pConPB.replace('px',''));
				}				

				var excEl=p.find('.steptype, .lineType1, .tab, .hideView, .freeCall');
				if(excEl.length>0){
					excEl.each(function(){
						var target=$(this);
						if(target.parent().hasClass('inPop')&&target.prev().length==0){
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

			$(resizeObject).on('resize',function(evt)
			{
				setInPopHeight();
			});
			//////////////////////////////////////////////////////////////////////
		});
	}
	
	function setRadioBox()
	{
		//라디오박스 초기화
		$('input:radio:not(.basicType)').each(function(index){
			var ta=$(this);
			if(ta.is(':checked')){
				ta.parent().addClass('checked');
			}

			if(ta.is(':disabled')){
				ta.parent().addClass('disabled');
			}			
		});
		
		//라디오 박스 클릭 스크롤 이벤트 막기
		var curTop=0;

		// if(inPop.length>0&&getVersion()){
		if(getVersion()){
			$(document).on('touchstart, mousedown','input:radio:not(.basicType)~label',function(e){//라디오 박스 클릭 스크롤 이벤트 막기
				curTop=$('.inPop:visible').scrollTop();
			});
		}
		/////////////////////////////////////////////////////////////////////////////

		$(document).on('click','input:radio:not(.basicType)',function(e){
			var $this=$(this);
			var inPop=$this.closest('.inPop');
			if(!$this.parent().hasClass('disabled')){
				var nm=$this.attr('name');
				var isChecked=$this.is(':checked');
				$('input:radio[name='+nm+']').each(function(){
					var target=$(this);
					target.attr("checked",false);
					target.parent().removeClass('checked');
					if(target.parent().hasClass('bgOn'))
					{
						target.parent().parent().removeClass('on');
					}
				});

				if($this.parent().hasClass('bgOn')){
					$this.parent().parent().addClass('on');
				}
				$this.parent().addClass('checked');
				$this.attr("checked",true);
				$this.trigger("liOnEvt");
				$this.focus();
			}

			if(inPop.length>0&&getVersion()){//라디오 박스 클릭 스크롤 이벤트 막기
				$(window).trigger('resize');
				inPop.scrollTop(curTop);
			}			
		});
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
				
				$(this).on('click' , function( e )
				{
					e.preventDefault();
					//e.stopPropagation();
					//

					p.removeClass('on');
					t.addClass('on');

					$.each( objArr, function(index, value) 
					{
						if(value!='#'&&value!='') {
							$(value).css('display','none');
						}
					});
					
					if(objArr[i]=='#tabAll'){
						// product/mTS2a.3.1T.html tabjs 추가 
						if( $(e.target).closest('.pkgTab').length>0 ){
							doc.find('.pkgTabCon').addClass('pkgAll');
						}
						$.each( objArr, function(index, value) 
						{
							if(index!=i&&value!='#'&&value!='') doc.find(value).css('display','block');
						});
					}else{
						// product/mTS2a.3.1T.html tabjs 추가 
						if( $(e.target).closest('.pkgTab').length>0 ){
							doc.find('.pkgTabCon').removeClass('pkgAll');
						}
						if(objArr[i]!='#'&&objArr[i]!='') doc.find(objArr[i]).css('display','block');	
					}
					//mDS.html 스와이프의 사이즈가 제대로 잡히지 안는경우
					if( objArr[i].substr(0,10) == '#ratingCon'){
						$(resizeObject).trigger('resize');
					}
				});
			});

		});
	}
	
	
	function setCheckBox()
	{
		$('.formWrap>input:checkbox:not(".basicType")').each(function(idx)
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
		});

		$(document).on( 'click' , '.formWrap>input:checkbox:not(".basicType"):not(.no_checkbox_evt)', function( e )
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

			li.children('a').on('click',function(e){
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
			$(this).find('input:radio').on('click', function(evt) 
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
			list.children('a').on('click',function( evt )
			{
			 	evt.preventDefault();
				 var ta = $(evt.target); 
				 list.removeClass('on');
				ta.parent().addClass('on');
			});
		});

		//기간선택 버튼 이벤트 //myt/mMY1.1.4.5.html
		$(document).on('click','div.datesetting>button',function(){
			var useSearch=$(this).closest('.useSearch');
			var target=useSearch.next('.settingCon');

			if(target.css('display')=='none'){
				target.show();
				useSearch.addClass('on');
			}else{
				target.hide();
				useSearch.removeClass('on');
			}
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
		    currDataImg.on("touchstart",function(e){
		    	e.preventDefault ? e.preventDefault() : e.returnValue = false;//모바일 화면 드래그 방지
		    	curX=e.originalEvent.touches[0].clientX;
		    	sliderHandle=this;

		    	$('html').on("touchend",function(e){
			    	curX=null;
			    	sliderHandle=null;
			    	cur=Number(currData.css("left").replace("px",""));
			    	$('html').off("touchend");
			    });
		    });

		    $('html').on("touchmove",function(e){
		    	if(sliderHandle!=null) {
		    		fn_result(e.originalEvent.touches[0].clientX);
					curX=e.originalEvent.touches[0].clientX;
		    	}    	
		    });
		    //--------------------------------------------------------------------------
		});

		//기간선택 기준월 선택 //mpoc/myt/mMY1.1.4.4.html
		$(document).on('click','.settingCon .dateSort>li>button',function(){
			var target=$(this);
			var liBt=target.closest('.dateSort').find('li>button');

			liBt.siblings('span').remove();
			liBt.parent().removeClass('on');
			target.after('<span class="hidden">선택</span>');
			target.parent().addClass('on');				
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

			$(resizeObject).on('resize',fn_resize);
			

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

		var curD=new Date();
		var stD=new Date(Date.parse(curD) - 30 * 1000 * 60 * 60 * 24);
		var endD=new Date(Date.parse(curD) + 30 * 1000 * 60 * 60 * 24);

		var option={
			start 	: { year : stD.getFullYear(), month : stD.getMonth()+1, day : stD.getDate() }, 		//달력 시작일
			current : { year : curD.getFullYear(), month : curD.getMonth()+1, day : curD.getDate() },	//달력 현재일
			end 	: { year : endD.getFullYear(), month : endD.getMonth()+1, day : endD.getDate() }	//달력 마지막
		};
		
		$.fn.getCalrendar = function()
		{
			//console.log('= getCalrendar =');
			return this.data('calrendar');
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
		// $.fn.setup = function(opt)
		// {
		// 	var d=this.data('calrendar');
		// 	if(opt.start){
		// 		d.setStartDay(opt.start);
		// 	}
		// 	if(opt.end){
		// 		d.setEndDay(opt.end);
		// 	}
		// 	if(opt.today){
		// 		d.setToday(opt.today);
		// 	}
		// 	if(opt.date){
		// 		d.setDate(opt.date);
		// 		$(this).children('input').attr('value',opt.date.year+'.'+addZero( opt.date.month )+'.'+addZero( opt.date.day ));
		// 	}
		// };
		
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
				year : box.find('.year'),				// 달표시
				month :box.find('.month') ,				// 월표시
				start 	: option.start, 				//달력 시작일
				current : option.current,				//달력 현재일
				end 	: option.end					//달력 마지막
			});
			cal.data('calrendar',calObj);
			calObj.setVisible( false );
			
			var input =  cal.children('input');
			
			input.attr('value',option.current.year+'.'+addZero( option.current.month )+'.'+addZero( option.current.day ));			
			
			// 달력 포커스 제어
			var first = commonJs.findFocusElements( box );
			commonJs.closeTabkeyFocus( first );
			
			calObj.calrendarClose = function()
			{
				cal.css('z-index',1);
				this.setVisible(false);
			};

			//날짜 선택 함수.
			//ex. $(생성된달력셀렉터[ex.='.calendar:eq(0)']).getCalrendar().selectDate({year:2015,month:5,day:21});
			calObj.selectDate = function(d){
				if(!d) return;
				calObj.setDate(d);
				input.attr('value',d.year+'.'+addZero( d.month )+'.'+addZero( d.day ));
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
			
			cal.children('button.calBtn').on('click', function(evt) 
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
			
			top.children('button.first').on('click', function(evt) 
			{
				calObj.prevYear();
			});
			top.children('button.prev').on('click', function(evt) 
			{
				calObj.prev();
			});
			top.children('button.next').on('click', function(evt) 
			{
				calObj.next();
			});
			top.children('button.end').on('click', function(evt) 
			{
				calObj.nextYear();
			});
			
			// 하단 버튼 영역
			var btn = box.children('div.btn');
			btn.children('button.close').on('click' , function( evt )
			{
				cal.removeClass('on');
				calObj.setVisible(false);
				clearMask();
			});
			btn.children('button.today').on('click' , function( evt )
			{
				var td=calObj.getToday();
				calObj.setDate(td);
				input.attr('value',td.year+'.'+addZero( td.month )+'.'+addZero( td.day ));
			});
			
		});
		
		
		// 전체변경
		// $('div.calendar:eq(0)').getCalrendar().setup({
		// 		start 	: { year : 2015 , month : 1, day : 1 }, 
		// 		current : { year : 2016 , month : 4, day : 6 },
		// 		end 	: { year : 2017 , month : 8, day : 1 }	
		// });
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
			//target.on('click' , function(e)
			target.on('click' , function(e)
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
		var m=15;

		var chWidth = function(_tar)
		{
			var qInfo=_tar;
			var n =commonJs.WIDTH;
			 if( qInfo.closest('.swiperCon').length>0 )
			{
				n = qInfo.closest('.cont').width() - 10;
			}

			return n;
		};
		var setTxtWidth=function(_tar){
			var qInfo=_tar;
			var qTxt=qInfo.children('.qTxt');
			var qCon=qTxt.children('.con');
			var inPop=qInfo.closest('.inPop');

			var qTxt_w=qTxt.outerWidth(true);
			if(inPop.length==0){
				if( chWidth(qInfo) <qTxt_w+2*m){
					var w=qCon.width()-qTxt_w-2*m+ chWidth(qInfo);
					qCon.css('min-width',w+'px');
					qCon.width(w);
				}else{
					qCon.css('min-width',qCon.css('width'));
				}
			}else{
				var inPopW=inPop.width();
				if(inPopW<qTxt_w+2*m){
				
					var w=qCon.width()-qTxt_w-2*m+inPopW;
					qCon.css('min-width',w+'px');
					qCon.width(w);
				}else{
					qCon.css('min-width',qCon.css('width'));
				}
			}
			// qTxtW=qTxt.outerWidth(true);
		};
		var setTxtLeft=function(_tar, _value){
			var qInfo=_tar;
			var qTxt=qInfo.children('.qTxt');
			var qCon=qTxt.children('.con');
			var inPop=qInfo.closest('.inPop');
			var l=qInfo.offset().left;
			var qTxt_w=qTxt.outerWidth(true);
			// var qTxt_w;
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
				
				l=l-( commonJs.WIDTH -inPopW)/2;
				sum=l+qTxt_w+m;
				if(sum<=inPopW){
					qTxt.css("left","0px");
				}else {
					qTxt.css("left",(inPopW-sum)+"px");
				}
			}
			
			if( qInfo.closest('.swiperCon').length>0 )
			{
				var l=qInfo.offset().left;
				var sum=l+qTxt_w+m;
				
				if(sum<=chWidth(_tar) ){
					qTxt.css("left","0px");
				}else {
					qTxt.css("left",(l-chWidth(_tar)+m)+"px");
				}
			}
		};

		$('.qInfo').each(function(){
			var qInfo=$(this);
			var qTxt=qInfo.children('.qTxt');
			var qCon=qTxt.children('.con');

			setTxtLeft(qInfo,true);//화면 왼쪽으로 붙이기
			qCon.addClass('conReset');
			setTxtWidth(qInfo);
			setTxtLeft(qInfo);
		});

		$(resizeObject).on('resize',function(){
			$('.qInfo.on').each(function(){
				$(this).removeClass('on');
				showQInfo($(this));
				// setTxtLeft($(this),true);//화면 왼쪽으로 붙이기
			});
			// $('.qInfo').filter('.on').hide();
			// $('.qInfo').each(function(){
			// 	setTxtLeft($(this),true);//화면 왼쪽으로 붙이기
			// });			
			// $('.qInfo').filter('.on').show();
			//setTxtWidth();
			//setTxtLeft();
		});

		function showQInfo(_tar){
			var target=_tar;
			var qCon=target.children('.qTxt').children('.con');
			$('.qInfo').removeClass('on');
			target.addClass('on');
			if(!qCon.hasClass('conReset')){
				qCon.addClass('conReset');
			}
			setTxtWidth(target);
			setTxtLeft(target);
		}

		$(document).on('click','.qInfo>a.qTit',function(e){
			e.preventDefault();
			showQInfo($(this).parent());
			// var target=$(this).parent();
			// var qCon=target.children('.qTxt').children('.con');
			// $('.qInfo').removeClass('on');
			// target.addClass('on');
			// if(!qCon.hasClass('conReset')){
			// 	qCon.addClass('conReset');
			// }
			// setTxtWidth(target);
			// setTxtLeft(target);
		});

		$(document).on('click','.qInfo a.btnClose',function(e){
			e.preventDefault();
			$(this).parent().parent().removeClass('on');
		});
	}

	//.topConBox toggle on //mpoc/guide/layout2.html
	function setTopConBoxTglOn(){
		$('.topConBox').each(function(){
			var target=$(this);
			target.find('button.btnMore').on('click',function(e){
				e.preventDefault();
				target.toggleClass('on');
			});
		});
	}

	function setTglBtn(){
		$(document).on('click','.tglBtn',function(e){
			e.preventDefault();
			var tglBtn=$(this);
			var target=tglBtn.closest('.tglClsOpen');
			if(target[0].tagName=='UL' || target[0].tagName=='ul'){
				target=tglBtn.closest('li');
				if(!target.hasClass('on')){
					target.siblings('li').removeClass('on');
				}
				target.toggleClass('on');
			}else{
				target.toggleClass('on');	
			}

			if(target.hasClass('on')&&target.find('div.swiperCon, div.tabSwipe, div.myContents').length>0){
				$(resizeObject).trigger('resize');
			}
		});

		$(document).on('click','.tglBtnClose',function(e){
			e.preventDefault();
			var tglBtnClose=$(this);
			var target=tglBtnClose.closest('.tglClsOpen');
			if( target.length )
			{
				if(target[0].tagName=='UL' || target[0].tagName=='ul'){
					target=tglBtnClose.closest('li');
				}				
			}else{
				target = tglBtnClose.closest('.tglCont').parent().children('.tglClsOpen');
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
				

				tm.before('<div style="height:0px; position:relative; z-index:1;"></div>');

				var targetDummy=tm.prev();

				function checkVisible()
				{
					if(tm.css('position')=='fixed') check=targetDummy.offset().top;
					else check=tH+targetDummy.offset().top;
					
					target.css('display' , 'block');
					if( $(document).scrollTop() > check && $("body").outerHeight(true)-check>commonJs.HEIGHT+tH+tH){
						
						//tm.css({'position':'absolute' , 'top':'550px' ,'z-index':'1000'});
						//var t =$(document).scrollTop()+commonJs.HEIGHT-(tm.outerHeight());
						//tm.css({'position':'absolute' , 'top':t+'px' ,'z-index':'1000'});
						// 삼성폰의 경우 하단에 컨트롤 바가 생기는 경우에는 제대로 제어가 안되서 height 값을 계산해서 설정한다.
						//var t =commonJs.HEIGHT-(tm.outerHeight());
						//tm.css({'position':'fixed' , 'top':t+'px' ,'z-index':'1000'});
						tm.css({'position':'fixed' , 'bottom':'0' ,'z-index':'1000'});
						if( tm.hasClass('lineType1'))
						{
							tm.addClass('mLine');
						}
					}else{
						//tm.css({'position':'relative' ,'z-index':'1' ,'margin-top':'0px'});
						tm.css({'position':'relative' ,'z-index':'1' });
						if( tm.hasClass('mLine') ){
							tm.removeClass('mLine');
						}
					}
					
					$('.btnBoxFloating').each(function(index)
					{
						var t = $(this);
						if( tm.css('position')=='fixed'){
							t.css('bottom','93px');
						}else{
							t.css('bottom','0px');
						}
					});
				}
				
				var inter;

				var fn_scroll=function(){
					if( inter ){
						//clearTimeout(inter);
					}
					//checkVisible();
					
					if( ($(document).scrollTop()+commonJs.HEIGHT ) != $('body').prop('scrollHeight') )
					{
						checkVisible();
						//if( $(document).scrollTop() > check )
						//{
						//	inter = setTimeout(checkVisible,200);
						//}else{
						//	checkVisible();
						//}	
					}else if(tm.css('position')=='fixed'){
						target.css('display' , 'none');	
					}
					
					$('.btnBoxFloating').each(function( idx ) {
						var t = $(this);
						if( target.css('display') == 'none'){
						 	t.css('bottom','0px');
						}
					});

				};

				$(resizeObject).on('scroll' , fn_scroll);
			});	
		}		
	}
	

	function setCheckPoint(){
		$('.checkPoint').each(function(){
			$(this).children('ol').children('li').each(function(i){
				if(i>4) $(this).hide();
			});
			$(this).children('.btnBox').children('.btnClose').hide();
		});

		$(document).on('click',"div.checkPoint>div.tit>a",function(e){
			e.preventDefault();
			var checkPoint=$(this).closest('.checkPoint');
			var btnBox=checkPoint.children('div.btnBox');
			var cpLiLen=checkPoint.children('ol').children('li').length;

			checkPoint.toggleClass('on');

			if(cpLiLen>5&&checkPoint.hasClass('on')){
				btnBox.show();
			}else if(cpLiLen>5){
				btnBox.hide();
			}
			// grayCont.trigger('grayCont_resize');
			$(resizeObject).trigger('resize');
		});

		$(document).on('click',"div.checkPoint>div.btnBox>a.btnPlus",function(e){
			var checkPoint=$(this).closest('.checkPoint');
			var cpLi=checkPoint.children('ol').children('li');
			var btnBox=checkPoint.children('div.btnBox');
			var btnPlus=btnBox.children('a.btnPlus');
			var btnClose=btnBox.children('a.btnClose');

			e.preventDefault();
			btnPlus.hide();
			btnClose.show();
			cpLi.show();
			// grayCont.trigger('grayCont_resize');
			$(resizeObject).trigger('resize');
		});

		$(document).on('click',"div.checkPoint>div.btnBox>a.btnClose",function(e){
			var checkPoint=$(this).closest('.checkPoint');
			var cpLi=checkPoint.children('ol').children('li');
			var btnBox=checkPoint.children('div.btnBox');
			var btnPlus=btnBox.children('a.btnPlus');
			var btnClose=btnBox.children('a.btnClose');

			e.preventDefault();
			btnClose.hide();
			btnPlus.show();
			cpLi.each(function(i){
				if(i>4)	$(this).hide();
			});
			// grayCont.trigger('grayCont_resize');
			$(resizeObject).trigger('resize');			
		});

		$(document).on('click',"div.checkPoint>ol>li>a",function(e){
			var cpLi=$(this).parent().siblings('li');

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
	}

	//mpoc/purchase
	function setPurchase(){ 
		//"부가서비스 신청" 서비스 옵션 선택 토글'on' //mpoc/purchase/mPJ2.1.23.html
		$('ul.serviveOption').each(function(){
			var li=$(this).children('li');
			li.find('input[type="radio"]').on('click',function(e){
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

			$(document).on('click','.selectedCtgr>a',function(e){
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

			faqDep1.find('li>a').on('click',function(e){
				e.preventDefault();
				selectCtgr($(this));
			});

			faqDep2.find('li>a').on('click',function(e){
				e.preventDefault();
				selectCtgr($(this));
			});

			btnMore.children('a').on('click',function(e){
				e.preventDefault();
				btnMore.hide();
				btnClose.show();
				dep1_hidden.show();
			});

			btnClose.children('a').on('click',function(e){
				e.preventDefault();
				btnMore.show();
				btnClose.hide();
				dep1_hidden.hide();
			});

			btnSearchAgain.on('click',function(e){
				e.preventDefault();
				init();
			});

			init();//초기화
		}

		// 지도보기 상세 목록열고/닫기 //mpoc/center/mCS4.1.1T.2.2.html#
		$('.mapList_area').each(function(){
			var target=$(this);
			target.children('a').on('click',function(e){
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

			target.children('button').on('click',function(e){
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
			var target=$(this).children('a:eq(1)');
			if(target.length>0){
				target.on('click',function(e){
					e.preventDefault();
					var target=$(this);
					target.toggleClass('on');
					if(target.hasClass('on')){
						$(this).children('span').text('관심매장 취소');
					}else{
						$(this).children('span').text('관심매장 등록');
					}
				});
			}
			
		});

		//ARS고객센터 문의량 급증 예상 캘린더 스크립트 //mpoc/center/mCS.1T.html
		$('.layerCalendar').each(function(){
			var $this=$(this);
			var li=$this.find('.calCon>ul>li');
			var liLen=li.length;

			$this.find('.prevMonth').on('click',function(){
				var idx=li.filter('.on').index();
				var targetIdx=idx-1;
				if(targetIdx<0) return;
				else{
					li.eq(idx).removeClass('on');
					li.eq(targetIdx).addClass('on');
				}
			});

			$this.find('.nextMonth').on('click',function(){
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

	function setBanner()
	{
		//promotion banner (ul>li) 
		var promoId=["_banner_2001_F","_banner_2004_F","_banner_2005_F", "_banner_2007_F"];
		
		var setPromo=function(targetId){
			var val=window[targetId];
			if(val&&val.length>0){
				var wrap=$('ul#'+targetId);
				var sldNaviUl=wrap.closest('.swiperCon').siblings('.slideNavi').children('ul');
				if(wrap.length>0){
					wrap.empty();
					sldNaviUl.empty();
					for(var j=0;j<val.length;j++){
						sldNaviUl.append('<li><span>프로모션 '+(j+1)+'</span></li>');
						var arrTmp=val[j].split('||');						
						var tmpHtml="";

						if(arrTmp[1]=="I"){// img
							tmpHtml+='<li class="cont">';

							tmpHtml+='<div class="imgType"';
							if(arrTmp[3]) tmpHtml+=' style="background-repeat:repeat-x; background:'+arrTmp[3]+';"';
							tmpHtml+='>';

							tmpHtml+='<a';// a
							if(arrTmp[10]) tmpHtml+=' href="'+arrTmp[10]+'"'; // href
							else tmpHtml+=' href="#"';
							if(arrTmp[8]) tmpHtml+=' target="'+arrTmp[8]+'"'; // target
							if(arrTmp[7]) tmpHtml+=' title="'+arrTmp[7]+'"'; // title
							tmpHtml+='>';// a

							tmpHtml+='<img';// img
							if(arrTmp[2]) tmpHtml+=' src="'+arrTmp[2]+'"'; // src

							if(arrTmp[6]) tmpHtml+=' alt="'+arrTmp[6]+'"'; // alt
							tmpHtml+='>';// img

							tmpHtml+='</a>';							
							tmpHtml+='</div>';
							tmpHtml+="</li>";	

							wrap.append(tmpHtml);
						}else if(arrTmp[1]=="H"&&arrTmp[2]){//html
							$.ajax({
								type: "get",
								dataType: "html",
								url: arrTmp[2], //html url
								data: { },
								async: false, //동기 처리
								beforeSend : function( xhr ){
									xhr.overrideMimeType('text/html; charset=UTF-8');
									// xhr.overrideMimeType('text/html; charset=EUC-KR');
								},
								success: function( result )
								{
									if(result){
										wrap.append('<li class="cont"></li>');
										var li=wrap.children('li:last');
										
										if(arrTmp[4]) {
											li.css({
												'background':arrTmp[4],
												'background-repeat':'repeat-x'
											});
										}

										li.html(result);
									}
								}
							});
						}
					}
				}
			}
		};
		for(var i=0; i<promoId.length; i++){
			setPromo(promoId[i]);
		}

		//single promotion banner
		var sPromoId=["_banner_2002_F","_banner_2006_F","_banner_2011_F","_banner_2012_F","_banner_2013_F","_banner_2014_F"];
		
		var setSPromo=function(targetId){
			var val=window[targetId];
			if(val&&val.length>0){
				var wrap=$('#'+targetId);
				if(wrap.length>0){
					wrap.empty();
					
					var arrTmp=val[0].split('||');
					var tmpHtml="";

					if(arrTmp[1]=="I"){// img

						tmpHtml='<a';// a
						if(arrTmp[10]) tmpHtml+=' href="'+arrTmp[10]+'"'; // href
						else tmpHtml+=' href="#"';
						if(arrTmp[8]) tmpHtml+=' target="'+arrTmp[8]+'"'; // target

						if(arrTmp[7]) tmpHtml+=' title="'+arrTmp[7]+'"'; // title
						tmpHtml+='>';// a

						tmpHtml+='<img class="banner_img_cls"';// img
						if(arrTmp[2]) tmpHtml+=' src="'+arrTmp[2]+'"'; // src

						if(arrTmp[6]) tmpHtml+=' alt="'+arrTmp[6]+'"'; // alt
						tmpHtml+='>';// img
						tmpHtml+='</a>';

						wrap.append(tmpHtml);
					}else if(arrTmp[1]=="H"&&arrTmp[2]){//html

						$.ajax({
							type: "get",
							dataType: "html",
							url: arrTmp[2], //html url
							data: { },
							beforeSend : function( xhr ){
								xhr.overrideMimeType('text/html; charset=UTF-8');
								// xhr.overrideMimeType('text/html; charset=EUC-KR');
							},
							success: function( result )
							{
								if(result){
									wrap.html(result);
								}
							}
						});
					}				
				}
			}
		};
		for(var i=0; i<sPromoId.length; i++){
			setSPromo(sPromoId[i]);
		}

		//spred banner
		var spredId=["_spred_2001_F","_spred_2002_F"];
		for(var i=0; i<spredId.length; i++){
			var val=window[spredId[i]];
			var wrap=$('#'+spredId[i]);
			var close_area=wrap.next('.close_area');
			close_area.hide();
			if(val&&val.length>0){				
				if(getCookie(spredId[i])=='off') {
					wrap.empty();
					continue;
				}
				
				if(wrap.length>0){
					var arrTmp=val[0].split('||');
					var tmpHtml="";
					if(arrTmp[1]=="I"){// img
						tmpHtml='<a';// a
						if(arrTmp[10]) tmpHtml+=' href="'+arrTmp[10]+'"'; // href
						else tmpHtml+=' href="#"';
						if(arrTmp[8]) tmpHtml+=' target="'+arrTmp[8]+'"'; // target

						if(arrTmp[7]) tmpHtml+=' title="'+arrTmp[7]+'"'; // title
						tmpHtml+='>';// a

						tmpHtml+='<img class="banner_img_cls"';// img
						if(arrTmp[2]) tmpHtml+=' src="'+arrTmp[2]+'"'; // src

						if(arrTmp[6]) tmpHtml+=' alt="'+arrTmp[6]+'"'; // alt
						tmpHtml+='>';// img

						tmpHtml+='</a>';

						wrap.html(tmpHtml);
					}else if(arrTmp[1]=="H"&&arrTmp[2]){//html
						$.ajax({
							type: "get",
							dataType: "html",
							url: arrTmp[2], //html url
							data: { },
							async: false, //동기 처리
							beforeSend : function( xhr ){
								xhr.overrideMimeType('text/html; charset=UTF-8');
								// xhr.overrideMimeType('text/html; charset=EUC-KR');
							},
							success: function( result )
							{
								if(result){
									wrap.html(result);								
								}
							}
						});
					}
					close_area.show();
				}
			}
		}

		//poc cont. banner (ul>li) 
		var pocContId=["_banner_2003_F"];
		
		var setPocCont=function(targetId){
			var val=window[targetId];
			if(val&&val.length>0){
				var wrap=$('ul#'+targetId);
				var sldNaviUl=wrap.closest('.swiperCon').siblings('.slideNavi').children('ul');
				if(wrap.length>0){
					wrap.empty();
					sldNaviUl.empty();
					for(var j=0;j<val.length;j++){
						sldNaviUl.append('<li><span>poc banner '+(j+1)+'</span></li>');
						var arrTmp=val[j].split('||');						
						var tmpHtml="";

						if(arrTmp[1]=="I"){// img
							tmpHtml+='<li class="cont">';
							if(arrTmp[3]) tmpHtml+=' style="background-repeat:repeat-x; background:'+arrTmp[3]+';"';
							tmpHtml+='>';

							tmpHtml+='<a';// a
							if(arrTmp[10]) tmpHtml+=' href="'+arrTmp[10]+'"'; // href
							else tmpHtml+=' href="#"';
							if(arrTmp[8]) tmpHtml+=' target="'+arrTmp[8]+'"'; // target
							if(arrTmp[7]) tmpHtml+=' title="'+arrTmp[7]+'"'; // title
							tmpHtml+='>';// a

							tmpHtml+='<img';// img
							if(arrTmp[2]) tmpHtml+=' src="'+arrTmp[2]+'"'; // src

							if(arrTmp[6]) tmpHtml+=' alt="'+arrTmp[6]+'"'; // alt
							tmpHtml+='>';// img

							tmpHtml+='</a>';							
							tmpHtml+="</li>";	

							wrap.append(tmpHtml);
						}else if(arrTmp[1]=="H"&&arrTmp[2]){//html
							$.ajax({
								type: "get",
								dataType: "html",
								url: arrTmp[2], //html url
								data: { },
								async: false, //동기 처리
								beforeSend : function( xhr ){
									xhr.overrideMimeType('text/html; charset=UTF-8');
									// xhr.overrideMimeType('text/html; charset=EUC-KR');
								},
								success: function( result )
								{
									if(result){
										wrap.append('<li class="cont"></li>');
										var li=wrap.children('li:last');
										
										if(arrTmp[4]) {
											li.css({
												'background':arrTmp[4],
												'background-repeat':'repeat-x'
											});
										}

										li.html(result);
									}
								}
							});
						}
					}
				}
			}
		};
		for(var i=0; i<pocContId.length; i++){
			setPocCont(pocContId[i]);
		}

		//alpha banner
		var alphaId=["_alpha_2001_F","_alpha_2002_F"];
		for(var i=0; i<alphaId.length; i++){
			var val=window[alphaId[i]];
			if(val&&val.length>0){
				var wrap=$('#'+alphaId[i]);
				if(wrap.length>0){
					wrap.empty();
					for(var j=0;j<val.length;j++){
						var arrTmp=val[j].split('||');
						var strHtml='';
						strHtml+='<li><a href="#"><strong>';
						if(arrTmp[1]) strHtml+=arrTmp[1];						
						strHtml+='</strong></a><div class="apCon"><p class="info">';
						if(arrTmp[2]) strHtml+=arrTmp[2];
						strHtml+='</p><div class="dtlCon alphaCon2"></div><a href="#" class="btn_close">닫기</a></div></li>';
						wrap.append(strHtml);//기본태그 삽입

						if(arrTmp[3]){
							$.ajax({
								type: "get",
								dataType: "html",
								url: arrTmp[3], //html url
								async: false, //동기 처리
								data: { },
								beforeSend : function( xhr ){
									xhr.overrideMimeType('text/html; charset=UTF-8');
									// xhr.overrideMimeType('text/html; charset=EUC-KR');
								},
								success: function( result )
								{
									if(result){//상세내역 삽입
										wrap.children('li:last').find('div.dtlCon').prepend(result);
									}
								}
							});
						}
					}
				}
			}
		}

		if(window.loadMain) window.loadMain();	
	}

	$(window).ready(function()
	{
		//$('head').append( '<div data-role="header" data-fullscreen="true"/>' );
		commonJs.WIDTH = $(window.top).width();
		commonJs.HEIGHT = $(window.top).height();		
		
		var mobilecheck = function () {
			var check = false;
			(function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
			return check;
		};
		//clickEvent = ( mobilecheck() ) ? 'touchend' : 'click';
		clickEvent = 'click';
		if( window.top == window.self )
		{
		}
		setBanner();
		setCommon();
		//commonJs.setSelectBox('select');
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
		setMain();
		setMembership();
		// 추가
		setCircuit();
		setTab();
		setTabJs();
	});
	$(window).load(function() 
	{
		if( window.top == window.self ){
		}
		
		setQInfo();
		commonJs.setSwiper('div.swiperCon,div.tabSwipe');
	});
})(jQuery, window);