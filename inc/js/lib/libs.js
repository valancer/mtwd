/*
$(document).ready(function(){
	$.setIdAndHeadersToTables();
});
*/
//http://code.jquery.com/jquery-1.11.3.min.js


//class값에 tableJs가 있는 테이블만 값세팅.(param값이 없을 시)
//적용할 table class값 변경 시 param에 class명을 넘김.
//코딩 시 th/td 구분 및 scope, colspan, rowspan 값을 정확히 세팅.
//코딩 시 th에 id값을 넣으면 그 값으로 세팅됨.
// 2016.03.23 수정 
//114 수정 hdrs 가 널인경우에 ie7에서 에러 발생 해서 if문을 걸었다.

// 2016.04.20
// $.fn.calendarInit setCurrentDate 추가
//
// 2016.04.29 
// $.fn.calendarInit setCurrentDate > setDate 변경
// $.fn.calendarInit setToday 수정
//
// 2016.07.11
// prevYear, nextYear 추가
//
// 2016.07.14
// _todayfunc 파라미터삭제
// _setToday _todayfunc() 두번 실행되던거 한번으로 변경.
//
// 2016.08.11
// getToday 추가
//
// 2016.08.16
// 캘린더 포커스 수정

/**
 * VERSION: beta 1.8.0
 * DATE: 2013-01-21
 * JavaScript (ActionScript 3 and 2 also available)
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, easing.EasePack, plugins.CSSPlugin, plugins.RoundPropsPlugin, plugins.BezierPlugin
 *
 * @license Copyright (c) 2008-2013, GreenSock. All rights reserved.
 * This work is subject to the terms in http://www.greensock.com/terms_of_use.html or for 
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
(window._gsQueue||(window._gsQueue=[])).push(function(){_gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0},e=d.prototype=c.to({},.1,{}),f=[];d.version="1.8.0",e.constructor=d,e.kill()._gc=!1,d.killTweensOf=d.killDelayedCallsTo=c.killTweensOf,d.getTweensOf=c.getTweensOf,d.ticker=c.ticker,e.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},e.updateTo=function(a,b){var e,d=this.ratio;b&&null!=this.timeline&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(e in a)this.vars[e]=a[e];if(this._initted)if(b)this._initted=!1;else if(this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var f=this._time;this.render(0,!0,!1),this._initted=!1,this.render(f,!0,!1)}else if(this._time>0){this._initted=!1,this._init();for(var i,g=1/(1-d),h=this._firstPT;h;)i=h.s+h.c,h.c*=g,h.s=i-h.c,h=h._next}return this},e.render=function(a,b,c){var i,j,k,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._totalTime,h=this._cycle;if(a>=d)this._totalTime=d,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(i=!0,j="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==g||0===this._duration&&this._rawPrevTime>0)&&(j="onReverseComplete",i=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else{if(this._totalTime=this._time=a,0!==this._repeat){var l=this._duration+this._repeatDelay;this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?this._time=this._duration:0>this._time&&(this._time=0)}if(this._easeType){var m=this._time/this._duration,n=this._easeType,o=this._easePower;(1===n||3===n&&m>=.5)&&(m=1-m),3===n&&(m*=2),1===o?m*=m:2===o?m*=m*m:3===o?m*=m*m*m:4===o&&(m*=m*m*m*m),this.ratio=1===n?1-m:2===n?m:.5>this._time/this._duration?m/2:1-m/2}else this.ratio=this._ease.getRatio(this._time/this._duration)}if(e===this._time&&!c)return g!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),void 0;for(this._initted||(this._init(),!i&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===g&&this.vars.onStart&&(0!==this._totalTime||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),k=this._firstPT;k;)k.f?k.t[k.p](k.c*this.ratio+k.s):k.t[k.p]=k.c*this.ratio+k.s,k=k._next;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),this._cycle!==h&&(b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||f)),j&&(this._gc||(i&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[j]&&this.vars[j].apply(this.vars[j+"Scope"]||this,this.vars[j+"Params"]||f)))},d.to=function(a,b,c){return new d(a,b,c)},d.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender!==!1&&(c.immediateRender=!0),new d(a,b,c)},d.fromTo=function(a,b,c,e){return e.startAt=c,c.immediateRender&&(e.immediateRender=!0),new d(a,b,e)},d.staggerTo=d.allTo=function(a,b,c,e,f,g,h){e=e||0;var l,m,n,i=[],j=a.length,k=c.delay||0;for(m=0;j>m;m++){l={};for(n in c)l[n]=c[n];l.delay=k,m===j-1&&f&&(l.onComplete=function(){c.onComplete&&c.onComplete.apply(c.onCompleteScope,c.onCompleteParams),f.apply(h,g)}),i[m]=new d(a[m],b,l),k+=e}return i},d.staggerFrom=d.allFrom=function(a,b,c,e,f,g,h){return c.runBackwards=!0,c.immediateRender!==!1&&(c.immediateRender=!0),d.staggerTo(a,b,c,e,f,g,h)},d.staggerFromTo=d.allFromTo=function(a,b,c,e,f,g,h,i){return e.startAt=c,c.immediateRender&&(e.immediateRender=!0),d.staggerTo(a,b,e,f,g,h,i)},d.delayedCall=function(a,b,c,e,f){return new d(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:e,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:e,immediateRender:!1,useFrames:f,overwrite:0})},d.set=function(a,b){return new d(a,0,b)},d.isTweening=function(a){for(var e,b=c.getTweensOf(a),d=b.length;--d>-1;)if((e=b[d])._active||e._startTime===e.timeline._time&&e.timeline._active)return!0;return!1};var g=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(g(f,b)),e=d.length),f=f._next;return d},h=d.getAllTweens=function(b){var c=g(a._rootTimeline,b);return c.concat(g(a._rootFramesTimeline,b))};d.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var j,k,l,f=h(0!=e),g=f.length,i=c&&d&&e;for(l=0;g>l;l++)k=f[l],(i||k instanceof b||(j=k.target===k.vars.onComplete)&&d||c&&!j)&&(a?k.totalTime(k.totalDuration()):k._enabled(!1,!1))},d.killChildTweensOf=function(a,b){if(null!=a){if(a.jquery)return a.each(function(a,c){d.killChildTweensOf(c,b)}),void 0;var g,h,i,j,e=c._tweenLookup,f=[];for(h in e)for(g=e[h].target.parentNode;g;)g===a&&(f=f.concat(e[h].tweens)),g=g.parentNode;for(j=f.length,i=0;j>i;i++)b&&f[i].totalTime(f[i].totalDuration()),f[i]._enabled(!1,!1)}},d.pauseAll=function(a,b,c){i(!0,a,b,c)},d.resumeAll=function(a,b,c){i(!1,a,b,c)};var i=function(a,c,d,e){void 0===c&&(c=!0),void 0===d&&(d=!0);for(var j,k,f=h(e),g=c&&d&&e,i=f.length;--i>-1;)k=f[i],(g||k instanceof b||(j=k.target===k.vars.onComplete)&&d||c&&!j)&&k.paused(a)};return e.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},e.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},e.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},e.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},e.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},e.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},d},!0),_gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){"use strict";var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;for(var d,f,c=e.length;--c>-1;)if(f=this.vars[e[c]])for(d=f.length;--d>-1;)"{self}"===f[d]&&(f=this.vars[e[c]]=f.concat(),f[d]=this);this.vars.tweens instanceof Array&&this.add(this.vars.tweens,0,this.vars.align,this.vars.stagger)},e=["onStartParams","onUpdateParams","onCompleteParams","onReverseCompleteParams","onRepeatParams"],f=[],g=function(a){var c,b={};for(c in a)b[c]=a[c];return b},h=d.prototype=new b;return d.version="1.8.0",h.constructor=d,h.kill()._gc=!1,h.to=function(a,b,d,e){return this.add(new c(a,b,d),e)},h.from=function(a,b,d,e){return this.add(c.from(a,b,d),e)},h.fromTo=function(a,b,d,e,f){return this.add(c.fromTo(a,b,d,e),f)},h.staggerTo=function(a,b,e,f,h,i,j,k){var l=new d({onComplete:i,onCompleteParams:j,onCompleteScope:k});f=f||0;for(var m=0;a.length>m;m++)null!=e.startAt&&(e.startAt=g(e.startAt)),l.add(new c(a[m],b,g(e)),m*f);return this.add(l,h)},h.staggerFrom=function(a,b,c,d,e,f,g,h){return null==c.immediateRender&&(c.immediateRender=!0),c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},h.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,c.immediateRender&&(d.immediateRender=!0),this.staggerTo(a,b,d,e,f,g,h,i)},h.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},h.set=function(a,b,d){return b.immediateRender=!1,this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e=new d(a),f=e._timeline;null==b&&(b=!0),f._remove(e,!0),e._startTime=0,e._rawPrevTime=e._time=e._totalTime=f._time;for(var h,g=f._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||e.add(g,g._startTime-g._delay),g=h;return f.add(e,0),e},h.add=function(e,f,g,h){if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),e instanceof a);else{if(e instanceof Array){g=g||"normal",h=h||0;var k,l,i=f,j=e.length;for(k=0;j>k;k++)(l=e[k])instanceof Array&&(l=new d({tweens:l})),this.add(l,i),"string"!=typeof l&&"function"!=typeof l&&("sequence"===g?i=l._startTime+l.totalDuration()/l._timeScale:"start"===g&&(l._startTime-=l.delay())),i+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the TimelineLite/Max: it is neither a tween, timeline, function, nor a String.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),this._gc&&!this._paused&&this._time===this._duration&&this._time<this.duration())for(var m=this;m._gc&&m._timeline;)m._timeline.smoothChildTiming?m.totalTime(m._totalTime,!0):m._enabled(!0,!1),m=m._timeline;return this},h.remove=function(b){if(b instanceof a)return this._remove(b,!1);if(b instanceof Array){for(var c=b.length;--c>-1;)this.remove(b[c]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},h.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},h.insert=h.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},h.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},h.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},h.removeLabel=function(a){return delete this._labels[a],this},h.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},h._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e instanceof Array)for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},h.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},h.stop=function(){return this.paused(!0)},h.gotoAndPlay=function(a,c){return b.prototype.play.call(this,a,c)},h.gotoAndStop=function(a,b){return this.pause(a,b)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var j,k,l,m,d=this._dirty?this.totalDuration():this._totalDuration,e=this._time,g=this._startTime,h=this._timeScale,i=this._paused;if(a>=d?(this._totalTime=this._time=d,this._reversed||this._hasPausedChild()||(k=!0,m="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,a=d+1e-6):0>=a?(this._totalTime=this._time=0,(0!==e||0===this._duration&&this._rawPrevTime>0)&&(m="onReverseComplete",k=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=-1e-6):this._totalTime=this._time=this._rawPrevTime=a,this._time!==e||c){if(this._initted||(this._initted=!0),0===e&&this.vars.onStart&&0!==this._time&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||f)),this._time>e)for(j=this._first;j&&(l=j._next,!this._paused||i);)(j._active||j._startTime<=this._time&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,!1):j.render((a-j._startTime)*j._timeScale,b,!1)),j=l;else for(j=this._last;j&&(l=j._prev,!this._paused||i);)(j._active||e>=j._startTime&&!j._paused&&!j._gc)&&(j._reversed?j.render((j._dirty?j.totalDuration():j._totalDuration)-(a-j._startTime)*j._timeScale,b,!1):j.render((a-j._startTime)*j._timeScale,b,!1)),j=l;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||f)),m&&(this._gc||(g===this._startTime||h!=this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(k&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[m]&&this.vars[m].apply(this.vars[m+"Scope"]||this,this.vars[m+"Params"]||f)))}},h._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},h.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)e>g._startTime||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},h.getTweensOf=function(a,b){for(var d=c.getTweensOf(a),e=d.length,f=[],g=0;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(f[g++]=d[e]);return f},h._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},h.shiftChildren=function(a,b,c){c=c||0;for(var d=this._first;d;)d._startTime>=c&&(d._startTime+=a),d=d._next;if(b)for(var e in this._labels)this._labels[e]>=c&&(this._labels[e]+=a);return this._uncache(!0)},h._kill=function(a,b){if(null==a&&null==b)return this._enabled(!1,!1);for(var c=null==b?this.getChildren(!0,!0,!1):this.getTweensOf(b),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},h.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},h.invalidate=function(){for(var a=this._first;a;)a.invalidate(),a=a._next;return this},h._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*a,!1):this._time/this.duration()},h.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},h.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var e,f,b=0,c=this._first,d=-999999999999;c;)e=c._next,d>c._startTime&&this._sortChildren?this.add(c,c._startTime-c._delay):d=c._startTime,0>c._startTime&&(b-=c._startTime,this.shiftChildren(-c._startTime,!1,-9999999999)),f=c._startTime+(c._dirty?c.totalDuration():c._totalDuration)/c._timeScale,f>b&&(b=f),c=e;this._duration=this._totalDuration=b,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==a&&this.timeScale(this._totalDuration/a),this},h.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},h.rawTime=function(){return this._paused||0!==this._totalTime&&this._totalTime!==this._totalDuration?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=[],f=new c(null,null,1,0),g=function(a){for(;a;){if(a._paused)return!0;a=a._timeline}return!1},h=d.prototype=new a;return h.constructor=d,h.kill()._gc=!1,d.version="1.8.0",h.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},h.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},h.removeCallback=function(a,b){if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},h.tweenTo=function(a,c){c=c||{};var g,h,d={ease:f,overwrite:2,useFrames:this.usesFrames(),immediateRender:!1};for(g in c)d[g]=c[g];return d.time=this._parseTimeOrLabel(a),h=new b(this,Math.abs(Number(d.time)-this._time)/this._timeScale||.001,d),d.onStart=function(){h.target.paused(!0),h.vars.time!==h.target.time()&&h.duration(Math.abs(h.vars.time-h.target.time())/h.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||h,c.onStartParams||e)},h},h.tweenFromTo=function(a,b,c){c=c||{},c.startAt={time:this._parseTimeOrLabel(a)};var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-d.vars.startAt.time)/this._timeScale||.001)},h.render=function(a,b,c){this._gc&&this._enabled(!0,!1),this._active=!this._paused;var m,n,o,q,d=this._dirty?this.totalDuration():this._totalDuration,f=this._time,g=this._totalTime,h=this._startTime,i=this._timeScale,j=this._rawPrevTime,k=this._paused,l=this._cycle;if(a>=d)this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,q="onComplete",0===this._duration&&(0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0)),this._rawPrevTime=a,this._yoyo&&0!==(1&this._cycle)?(this._time=0,a=-1e-6):(this._time=this._duration,a=this._duration+1e-6);else if(0>=a)this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==f||0===this._duration&&this._rawPrevTime>0&&!this._locked)&&(q="onReverseComplete",n=this._reversed),0>a?(this._active=!1,0===this._duration&&this._rawPrevTime>=0&&(c=!0)):this._initted||(c=!0),this._rawPrevTime=a,a=0===this._duration?0:-1e-6;else if(this._time=this._rawPrevTime=a,!this._locked&&(this._totalTime=a,0!==this._repeat)){var r=this._duration+this._repeatDelay;this._cycle=this._totalTime/r>>0,0!==this._cycle&&this._cycle===this._totalTime/r&&this._cycle--,this._time=this._totalTime-this._cycle*r,this._yoyo&&0!==(1&this._cycle)&&(this._time=this._duration-this._time),this._time>this._duration?(this._time=this._duration,a=this._duration+1e-6):0>this._time?this._time=a=0:a=this._time}if(this._cycle!==l&&!this._locked){var s=this._yoyo&&0!==(1&l),t=s===(this._yoyo&&0!==(1&this._cycle)),u=this._totalTime,v=this._cycle,w=this._rawPrevTime,x=this._time;this._totalTime=l*this._duration,l>this._cycle?s=!s:this._totalTime+=this._duration,this._time=f,this._rawPrevTime=0===this._duration?j-1e-5:j,this._cycle=l,this._locked=!0,f=s?0:this._duration,this.render(f,b,0===this._duration),b||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||e),t&&(f=s?this._duration+1e-6:-1e-6,this.render(f,!0,!1)),this._time=x,this._totalTime=u,this._cycle=v,this._rawPrevTime=w,this._locked=!1}if(this._time===f&&!c)return g!==this._totalTime&&this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),void 0;if(this._initted||(this._initted=!0),0===g&&this.vars.onStart&&0!==this._totalTime&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||e)),this._time>f)for(m=this._first;m&&(o=m._next,!this._paused||k);)(m._active||m._startTime<=this._time&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,!1):m.render((a-m._startTime)*m._timeScale,b,!1)),m=o;else for(m=this._last;m&&(o=m._prev,!this._paused||k);)(m._active||f>=m._startTime&&!m._paused&&!m._gc)&&(m._reversed?m.render((m._dirty?m.totalDuration():m._totalDuration)-(a-m._startTime)*m._timeScale,b,!1):m.render((a-m._startTime)*m._timeScale,b,!1)),m=o;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||e)),q&&(this._locked||this._gc||(h===this._startTime||i!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(n&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[q]&&this.vars[q].apply(this.vars[q+"Scope"]||this,this.vars[q+"Params"]||e)))},h.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var i,j,d=[],e=this.getChildren(a,b,c),f=0,h=e.length;for(i=0;h>i;i++)j=e[i],j._paused||j._timeline._time>=j._startTime&&j._timeline._time<j._startTime+j._totalDuration/j._timeScale&&(g(j._timeline)||(d[f++]=j));return d},h.getLabelAfter=function(a){a||0!==a&&(a=this._time);var d,b=this.getLabelsArray(),c=b.length;for(d=0;c>d;d++)if(b[d].time>a)return b[d].name;return null},h.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(a>b[c].time)return b[c].name;return null},h.getLabelsArray=function(){var c,a=[],b=0;for(c in this._labels)a[b++]={time:this._labels[c],name:c};return a.sort(function(a,b){return a.time-b.time}),a},h.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},h.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},h.totalDuration=function(b){return arguments.length?-1===this._repeat?this:this.duration((b-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},h.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},h.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},h.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},h.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsDefine("plugins.BezierPlugin",["plugins.TweenPlugin"],function(a){var b=function(){a.call(this,"bezier",-1),this._overwriteProps.pop(),this._func={},this._round={}},c=b.prototype=new a("bezier",1),d=180/Math.PI,e=Math.PI/180,f=[],g=[],h=[],i={},j=function j(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},k=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",l=b.bezierThrough=function(a,b,c,d,e,j){var q,r,s,t,u,v,w,x,l={},m=[],p=j||a[0];e="string"==typeof e?","+e+",":k,null==b&&(b=1);for(r in a[0])m.push(r);if(a.length>1){for(x=a[a.length-1],w=!0,q=m.length;--q>-1;)if(r=m[q],Math.abs(p[r]-x[r])>.05){w=!1;break}w&&(a=a.concat(),j&&a.unshift(j),a.push(a[1]),j=a[a.length-3])}for(f.length=g.length=h.length=0,q=m.length;--q>-1;)r=m[q],i[r]=-1!==e.indexOf(","+r+","),l[r]=n(a,r,i[r],j);for(q=f.length;--q>-1;)f[q]=Math.sqrt(f[q]),g[q]=Math.sqrt(g[q]);if(!d){for(q=m.length;--q>-1;)if(i[r])for(s=l[m[q]],v=s.length-1,t=0;v>t;t++)u=s[t+1].da/g[t]+s[t].da/f[t],h[t]=(h[t]||0)+u*u;for(q=h.length;--q>-1;)h[q]=Math.sqrt(h[q])}for(q=m.length,t=c?4:1;--q>-1;)r=m[q],s=l[r],o(s,b,c,d,i[r]),w&&(s.splice(0,t),s.splice(s.length-t,t));return l},m=function(a,b,c){b=b||"soft";var h,i,k,l,m,n,o,p,q,r,s,d={},e="cubic"===b?3:2,f="soft"===b,g=[];if(f&&c&&(a=[c].concat(a)),null==a||e+1>a.length)throw"invalid Bezier data";for(q in a[0])g.push(q);for(n=g.length;--n>-1;){for(q=g[n],d[q]=m=[],r=0,p=a.length,o=0;p>o;o++)h=null==c?a[o][q]:"string"==typeof(s=a[o][q])&&"="===s.charAt(1)?c[q]+Number(s.charAt(0)+s.substr(2)):Number(s),f&&o>1&&p-1>o&&(m[r++]=(h+m[r-2])/2),m[r++]=h;for(p=r-e+1,r=0,o=0;p>o;o+=e)h=m[o],i=m[o+1],k=m[o+2],l=2===e?0:m[o+3],m[r++]=s=3===e?new j(h,i,k,l):new j(h,(2*i+h)/3,(2*i+k)/3,k);m.length=r}return d},n=function(a,b,c,d){var h,i,k,l,m,n,e=[];if(d)for(a=[d].concat(a),i=a.length;--i>-1;)"string"==typeof(n=a[i][b])&&"="===n.charAt(1)&&(a[i][b]=d[b]+Number(n.charAt(0)+n.substr(2)));if(h=a.length-2,0>h)return e[0]=new j(a[0][b],0,0,a[-1>h?0:1][b]),e;for(i=0;h>i;i++)k=a[i][b],l=a[i+1][b],e[i]=new j(k,0,0,l),c&&(m=a[i+2][b],f[i]=(f[i]||0)+(l-k)*(l-k),g[i]=(g[i]||0)+(m-l)*(m-l));return e[i]=new j(a[i][b],0,0,a[i+1][b]),e},o=function(a,b,c,d,e){var l,m,n,o,q,r,s,t,u,v,w,x,y,i=a.length-1,j=0,k=a[0].a;for(l=0;i>l;l++)q=a[j],m=q.a,n=q.d,o=a[j+1].d,e?(w=f[l],x=g[l],y=.25*(x+w)*b/(d?.5:h[l]||.5),r=n-(n-m)*(d?.5*b:y/w),s=n+(o-n)*(d?.5*b:y/x),t=n-(r+(s-r)*(3*w/(w+x)+.5)/4)):(r=n-.5*(n-m)*b,s=n+.5*(o-n)*b,t=n-(r+s)/2),r+=t,s+=t,q.c=u=r,q.b=0!==l?k:k=q.a+.6*(q.c-q.a),q.da=n-m,q.ca=u-m,q.ba=k-m,c?(v=p(m,k,u,n),a.splice(j,1,v[0],v[1],v[2],v[3]),j+=4):j++,k=s;q=a[j],q.b=k,q.c=k+.4*(q.d-k),q.da=q.d-q.a,q.ca=q.c-q.a,q.ba=k-q.a,c&&(v=p(q.a,k,q.c,q.d),a.splice(j,1,v[0],v[1],v[2],v[3]))},p=b.cubicToQuadratic=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},q=function(a,b){b=b>>0||6;var j,k,l,m,c=[],d=[],e=0,f=0,g=b-1,h=[],i=[];for(j in a)r(a[j],c,b);for(l=c.length,k=0;l>k;k++)e+=Math.sqrt(c[k]),m=k%b,i[m]=e,m===g&&(f+=e,m=k/b>>0,h[m]=i,d[m]=f,e=0,i=[]);return{length:f,lengths:d,segments:h}},r=function(a,b,c){for(var f,g,h,i,j,k,l,m,n,o,p,d=1/c,e=a.length;--e>-1;)for(o=a[e],h=o.a,i=o.d-h,j=o.c-h,k=o.b-h,f=g=0,m=1;c>=m;m++)l=d*m,n=1-l,f=g-(g=(l*l*i+3*n*(l*j+n*k))*l),p=e*c+m-1,b[p]=(b[p]||0)+f*f};return c.constructor=b,b.API=2,b._autoCSS=!0,b.quadraticToCubic=function(a,b,c){return new j(a,(2*b+a)/3,(2*b+c)/3,c)},b._cssRegister=function(){var a=(window.GreenSockGlobals||window).com.greensock.plugins.CSSPlugin;if(a){var c=a._internals,d=c._parseToProxy,f=c._setPluginRatio,g=c.CSSPropTween;c._registerComplexSpecialProp("bezier",null,function(a,c,h,i,j,k){c instanceof Array&&(c={values:c}),k=new b;var p,q,r,l=c.values,m=l.length-1,n=[],o={};if(0>m)return j;for(p=0;m>=p;p++)r=d(a,l[p],i,j,k,m!==p),n[p]=r.end;for(q in c)o[q]=c[q];return o.values=n,j=new g(a,"bezier",0,0,r.pt,2),j.data=r,j.plugin=k,j.setRatio=f,0===o.autoRotate&&(o.autoRotate=!0),o.autoRotate&&(o.autoRotate instanceof Array||(p=o.autoRotate===!0?0:Number(o.autoRotate)*e,o.autoRotate=null!=r.end.left?[["left","top","rotation",p,!0]]:null!=r.end.x?[["x","y","rotation",p,!0]]:!1)),o.autoRotate&&(i._transform||i._enableTransforms(!1),r.autoRotate=i._target._gsTransform),k._onInitTween(r.proxy,o,i._tween),j})}},c._onInitTween=function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var h,i,j,k,n,d=b.values||[],e={},f=d[0],g=b.autoRotate||c.vars.orientToBezier;this._autoRotate=g?g instanceof Array?g:[["x","y","rotation",g===!0?0:Number(g)||0]]:null;for(h in f)this._props.push(h);for(j=this._props.length;--j>-1;)h=this._props[j],this._overwriteProps.push(h),i=this._func[h]="function"==typeof a[h],e[h]=i?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]():parseFloat(a[h]),n||e[h]!==d[0][h]&&(n=e);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(d,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,n):m(d,b.type,e),this._segCount=this._beziers[h].length,this._timeRes){var o=q(this._beziers,this._timeRes);this._length=o.length,this._lengths=o.lengths,this._segments=o.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(g=this._autoRotate)for(g[0]instanceof Array||(this._autoRotate=g=[g]),j=g.length;--j>-1;)for(k=0;3>k;k++)h=g[j][k],this._func[h]="function"==typeof a[h]?a[h.indexOf("set")||"function"!=typeof a["get"+h.substr(3)]?h:"get"+h.substr(3)]:!1;return!0},c.setRatio=function(a){var f,g,h,i,j,k,l,m,n,o,b=this._segCount,c=this._func,e=this._target;if(this._timeRes){if(n=this._lengths,o=this._curSeg,a*=this._length,h=this._li,a>this._l2&&b-1>h){for(m=b-1;m>h&&a>=(this._l2=n[++h]););this._l1=n[h-1],this._li=h,this._curSeg=o=this._segments[h],this._s2=o[this._s1=this._si=0]}else if(this._l1>a&&h>0){for(;h>0&&(this._l1=n[--h])>=a;);0===h&&this._l1>a?this._l1=0:h++,this._l2=n[h],this._li=h,this._curSeg=o=this._segments[h],this._s1=o[(this._si=o.length-1)-1]||0,this._s2=o[this._si]}if(f=h,a-=this._l1,h=this._si,a>this._s2&&o.length-1>h){for(m=o.length-1;m>h&&a>=(this._s2=o[++h]););this._s1=o[h-1],this._si=h}else if(this._s1>a&&h>0){for(;h>0&&(this._s1=o[--h])>=a;);0===h&&this._s1>a?this._s1=0:h++,this._s2=o[h],this._si=h}k=(h+(a-this._s1)/(this._s2-this._s1))*this._prec}else f=0>a?0:a>=1?b-1:b*a>>0,k=(a-f*(1/b))*b;for(g=1-k,h=this._props.length;--h>-1;)i=this._props[h],j=this._beziers[i][f],l=(k*k*j.da+3*g*(k*j.ca+g*j.ba))*k+j.a,this._round[i]&&(l=l+(l>0?.5:-.5)>>0),c[i]?e[i](l):e[i]=l;if(this._autoRotate){var q,r,s,t,u,v,w,p=this._autoRotate;for(h=p.length;--h>-1;)i=p[h][2],v=p[h][3]||0,w=p[h][4]===!0?1:d,j=this._beziers[p[h][0]][f],q=this._beziers[p[h][1]][f],r=j.a+(j.b-j.a)*k,t=j.b+(j.c-j.b)*k,r+=(t-r)*k,t+=(j.c+(j.d-j.c)*k-t)*k,s=q.a+(q.b-q.a)*k,u=q.b+(q.c-q.b)*k,s+=(u-s)*k,u+=(q.c+(q.d-q.c)*k-u)*k,l=Math.atan2(u-s,t-r)*w+v,c[i]?c[i].call(e,l):e[i]=l}},c._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},c._kill=function(b){var d,e,c=this._props;for(d in this._beziers)if(d in b)for(delete this._beziers[d],delete this._func[d],e=c.length;--e>-1;)c[e]===d&&c.splice(e,1);return a.prototype._kill.call(this,b)},a.activate([b]),b},!0),_gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a){"use strict";var d,e,f,g,c=function(){a.call(this,"css"),this._overwriteProps.length=0},h={},i=c.prototype=new a("css");i.constructor=c,c.version="1.8.0",c.API=2,c.defaultTransformPerspective=0,i="px",c.suffixMap={top:i,right:i,bottom:i,left:i,width:i,height:i,fontSize:i,padding:i,margin:i,perspective:i};var G,H,I,J,K,L,j=/(?:\d|\-\d|\.\d|\-\.\d)+/g,k=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,l=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,m=/[^\d\-\.]/g,n=/(?:\d|\-|\+|=|#|\.)*/g,o=/opacity *= *([^)]*)/,p=/opacity:([^;]*)/,q=/alpha\(opacity *=.+?\)/i,r=/([A-Z])/g,s=/-([a-z])/gi,t=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,u=function(a,b){return b.toUpperCase()},v=/(?:Left|Right|Width)/i,w=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,x=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,y=Math.PI/180,z=180/Math.PI,A={},B=document,C=B.createElement("div"),D=B.createElement("img"),E=c._internals={_specialProps:h},F=navigator.userAgent,M=function(){var c,a=F.indexOf("Android"),b=B.createElement("div");
return I=-1!==F.indexOf("Safari")&&-1===F.indexOf("Chrome")&&(-1===a||Number(F.substr(a+8,1))>3),K=I&&6>Number(F.substr(F.indexOf("Version/")+8,1)),J=-1!==F.indexOf("Firefox"),/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(F),L=parseFloat(RegExp.$1),b.innerHTML="<a style='top:1px;opacity:.55;'>a</a>",c=b.getElementsByTagName("a")[0],c?/^0.55/.test(c.style.opacity):!1}(),N=function(a){return o.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},O=function(a){window.console&&console.log(a)},P="",Q="",R=function(a,b){b=b||C;var d,e,c=b.style;if(void 0!==c[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),d=["O","Moz","ms","Ms","Webkit"],e=5;--e>-1&&void 0===c[d[e]+a];);return e>=0?(Q=3===e?"ms":d[e],P="-"+Q.toLowerCase()+"-",Q+a):null},S=B.defaultView?B.defaultView.getComputedStyle:function(){},T=c.getStyle=function(a,b,c,d,e){var f;return M||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||S(a,null))?(a=c.getPropertyValue(b.replace(r,"-$1").toLowerCase()),f=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,f=c[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):N(a)},U=function(a,b,c){var f,g,d={},e=a._gsOverwrittenClassNamePT;if(e&&!c){for(;e;)e.setRatio(0),e=e._next;a._gsOverwrittenClassNamePT=null}if(b=b||S(a,null))if(f=b.length)for(;--f>-1;)d[b[f].replace(s,u)]=b.getPropertyValue(b[f]);else for(f in b)d[f]=b[f];else if(b=a.currentStyle||a.style)for(f in b)d[f.replace(s,u)]=b[f];return M||(d.opacity=N(a)),g=wb(a,b,!1),d.rotation=g.rotation*z,d.skewX=g.skewX*z,d.scaleX=g.scaleX,d.scaleY=g.scaleY,d.x=g.x,d.y=g.y,vb&&(d.z=g.z,d.rotationX=g.rotationX*z,d.rotationY=g.rotationY*z,d.scaleZ=g.scaleZ),d.filters&&delete d.filters,d},V=function(a,b,c,d){var g,h,i,e={},f=a.style;for(h in c)"cssText"!==h&&"length"!==h&&isNaN(h)&&b[h]!==(g=c[h])&&-1===h.indexOf("Origin")&&("number"==typeof g||"string"==typeof g)&&(e[h]=""!==g&&"auto"!==g&&"none"!==g||"string"!=typeof b[h]||""===b[h].replace(m,"")?g:0,void 0!==f[h]&&(i=new jb(f,h,f[h],i)));if(d)for(h in d)"className"!==h&&(e[h]=d[h]);return{difs:e,firstMPT:i}},W={width:["Left","Right"],height:["Top","Bottom"]},X=["marginLeft","marginRight","marginTop","marginBottom"],Y=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=W[b],f=e.length;for(c=c||S(a,null);--f>-1;)d-=parseFloat(T(a,"padding"+e[f],c,!0))||0,d-=parseFloat(T(a,"border"+e[f]+"Width",c,!0))||0;return d},Z=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var j,f=v.test(b),g=a,h=C.style,i=0>c;return i&&(c=-c),"%"===d&&-1!==b.indexOf("border")?j=c/100*(f?a.clientWidth:a.clientHeight):(h.cssText="border-style:solid; border-width:0; position:absolute; line-height:0;","%"!==d&&"em"!==d&&g.appendChild?h[f?"borderLeftWidth":"borderTopWidth"]=c+d:(g=a.parentNode||B.body,h[f?"width":"height"]=c+d),g.appendChild(C),j=parseFloat(C[f?"offsetWidth":"offsetHeight"]),g.removeChild(C),0!==j||e||(j=Z(a,b,c,d,!0))),i?-j:j},$=function(a,b){(null==a||""===a||"auto"===a||"auto auto"===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d)))&&(d="50%"),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(m,"")),b.oy=parseFloat(e.replace(m,""))),d+" "+e+(c.length>2?" "+c[2]:"")},_=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},ab=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*Number(a.substr(2))+b:parseFloat(a)},bb=function(a,b){if(null==a)return b;var c=-1===a.indexOf("rad")?y:1,d="="===a.charAt(1);return a=Number(a.replace(m,""))*c,d?a+b:a},cb=function(a,b){var c="number"==typeof a?a*y:bb(a,b),d=(c-b)%(2*Math.PI);return d!==d%Math.PI&&(d+=Math.PI*(0>d?2:-2)),b+d},db={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},eb=function(a){if(!a||""===a)return db.black;if(db[a])return db[a];if("number"==typeof a)return[a>>16,255&a>>8,255&a];if("#"===a.charAt(0)){if(4===a.length){var b=a.charAt(1),c=a.charAt(2),d=a.charAt(3);a="#"+b+b+c+c+d+d}return a=parseInt(a.substr(1),16),[a>>16,255&a>>8,255&a]}return a=a.match(j)||db.transparent,a[0]=Number(a[0]),a[1]=Number(a[1]),a[2]=Number(a[2]),a.length>3&&(a[3]=Number(a[3])),a},fb="(?:\\b(?:(?:rgb|rgba)\\(.+?\\))|\\B#.+?\\b";for(i in db)fb+="|"+i+"\\b";fb=RegExp(fb+")","gi");var gb=function(a,b,c){if(null==a)return function(a){return a};var d=b?(a.match(fb)||[""])[0]:"",e=a.split(d).join("").match(l)||[],f=a.substr(0,a.indexOf(e[0])),g=")"===a.charAt(a.length-1)?")":"",h=-1!==a.indexOf(" ")?" ":",",i=e.length,k=i>0?e[0].replace(j,""):"";return b?function(a){"number"==typeof a&&(a+=k);var b=(a.match(fb)||[d])[0],j=a.split(b).join("").match(l)||[],m=j.length;if(i>m--)for(;i>++m;)j[m]=c?j[(m-1)/2>>0]:e[m];return f+j.join(h)+h+b+g}:function(a){"number"==typeof a&&(a+=k);var b=a.match(l)||[],d=b.length;if(i>d--)for(;i>++d;)b[d]=c?b[(d-1)/2>>0]:e[d];return f+b.join(h)+g}},hb=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var j,i=(c+"").split(" ");for(h={},j=0;4>j;j++)h[a[j]]=i[j]=i[j]||i[(j-1)/2>>0];return e.parse(b,h,f,g)}},jb=(E._setPluginRatio=function(a){this.plugin.setRatio(a);for(var f,g,h,i,b=this.data,c=b.proxy,d=b.firstMPT,e=1e-6;d;)f=c[d.v],d.r?f=f>0?f+.5>>0:f-.5>>0:e>f&&f>-e&&(f=0),d.t[d.p]=f,d=d._next;if(b.autoRotate&&(b.autoRotate.rotation=c.rotation),1===a)for(d=b.firstMPT;d;){if(g=d.t,g.type){if(1===g.type){for(i=g.xs0+g.s+g.xs1,h=1;g.l>h;h++)i+=g["xn"+h]+g["xs"+(h+1)];g.e=i}}else g.e=g.s+g.xs0;d=d._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),lb=(E._parseToProxy=function(a,b,c,d,e,f){var l,m,n,o,p,g=d,h={},i={},j=c._transform,k=A;for(c._transform=null,A=b,d=p=c.parse(a,b,d,e),A=k,f&&(c._transform=j,g&&(g._prev=null,g._prev&&(g._prev._next=null)));d&&d!==g;){if(1>=d.type&&(m=d.p,i[m]=d.s+d.c,h[m]=d.s,f||(o=new jb(d,"s",m,o,d.r),d.c=0),1===d.type))for(l=d.l;--l>0;)n="xn"+l,m=d.p+"_"+n,i[m]=d.data[n],h[m]=d[n],f||(o=new jb(d,n,m,o,d.rxp[n]));d=d._next}return{proxy:h,end:i,firstMPT:o,pt:p}},E.CSSPropTween=function(a,b,c,e,f,h,i,j,k,l,m){this.t=a,this.p=b,this.s=c,this.c=e,this.n=i||"css_"+b,a instanceof lb||g.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,d=!0),this.b=void 0===l?c:l,this.e=void 0===m?c+e:m,f&&(this._next=f,f._prev=this)}),mb=c.parseComplex=function(a,b,c,d,e,f,g,h,i,l){g=new lb(a,b,0,0,g,l?2:1,null,!1,h,c,d);var q,r,s,t,u,v,w,x,y,z,A,B,m=c.split(", ").join(",").split(" "),n=(d+"").split(", ").join(",").split(" "),o=m.length,p=G!==!1;for(o!==n.length&&(m=(f||"").split(" "),o=m.length),g.plugin=i,g.setRatio=l,q=0;o>q;q++)if(t=m[q],u=n[q],x=parseFloat(t),x||0===x)g.appendXtra("",x,_(u,x),u.replace(k,""),p&&-1!==u.indexOf("px"),!0);else if(e&&("#"===t.charAt(0)||0===t.indexOf("rgb")||db[t]))t=eb(t),u=eb(u),y=t.length+u.length>6,y&&!M&&0===u[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(n[q]).join("transparent")):(M||(y=!1),g.appendXtra(y?"rgba(":"rgb(",t[0],u[0]-t[0],",",!0,!0).appendXtra("",t[1],u[1]-t[1],",",!0).appendXtra("",t[2],u[2]-t[2],y?",":")",!0),y&&(t=4>t.length?1:t[3],g.appendXtra("",t,(4>u.length?1:u[3])-t,")",!1)));else if(v=t.match(j)){if(w=u.match(k),!w||w.length!==v.length)return g;for(s=0,r=0;v.length>r;r++)A=v[r],z=t.indexOf(A,s),g.appendXtra(t.substr(s,z-s),Number(A),_(w[r],A),"",p&&"px"===t.substr(z+A.length,2),0===r),s=z+A.length;g["xs"+g.l]+=t.substr(s)}else g["xs"+g.l]+=g.l?" "+t:t;if(-1!==d.indexOf("=")&&g.data){for(B=g.xs0+g.data.s,q=1;g.l>q;q++)B+=g["xs"+q]+g.data["xn"+q];g.e=B+g["xs"+q]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},nb=9;for(i=lb.prototype,i.l=i.pr=0;--nb>0;)i["xn"+nb]=0,i["xs"+nb]="";i.xs0="",i._next=i._prev=i.xfirst=i.data=i.plugin=i.setRatio=i.rxp=null,i.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new lb(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ob=function(a,b,c,d,e,f,g){this.p=d?R(a)||a:a,h[a]=h[this.p]=this,this.format=f||gb(b,e),c&&(this.parse=c),this.clrs=e,this.dflt=b,this.pr=g||0},pb=E._registerComplexSpecialProp=function(a,b,c,d,e,f,g){for(var k,h=a.split(","),i=b instanceof Array?b:[b],j=h.length;--j>-1;)k=new ob(h[j],i[j],c,d&&0===j,e,f,g)},qb=function(a){if(!h[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";pb(a,null,function(a,c,d,e,f,g,i){var j=(window.GreenSockGlobals||window).com.greensock.plugins[b];return j?(j._cssRegister(),h[d].parse(a,c,d,e,f,g,i)):(O("Error: "+b+" js file not loaded."),f)})}};i=ob.prototype,i.parseComplex=function(a,b,c,d,e,f){return mb(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},i.parse=function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,c,f,!1,this.dflt)),this.format(b),e,g)},c.registerSpecialProp=function(a,b,c){pb(a,null,function(a,d,e,f,g,h){var j=new lb(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},!1,!1,null,c)};var rb=["scaleX","scaleY","scaleZ","x","y","z","skewX","rotation","rotationX","rotationY","perspective"],sb=R("transform"),tb=P+"transform",ub=R("transformOrigin"),vb=null!==R("perspective"),wb=function(a,b,d){var l,m,n,o,p,q,r,s,t,u,v,x,e=d?a._gsTransform||{skewY:0}:{skewY:0},f=0>e.scaleX,g=2e-5,h=1e5,i=-Math.PI+1e-4,j=Math.PI-1e-4,k=vb?parseFloat(T(a,ub,b,!1,"0 0 0").split(" ")[2])||e.zOrigin||0:0;for(sb?l=T(a,tb,b,!0):a.currentStyle&&(l=a.currentStyle.filter.match(w),l=l&&4===l.length?l[0].substr(4)+","+Number(l[2].substr(4))+","+Number(l[1].substr(4))+","+l[3].substr(4)+","+(e?e.x:0)+","+(e?e.y:0):null),m=(l||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],n=m.length;--n>-1;)o=Number(m[n]),m[n]=(o*h+(0>o?-.5:.5)>>0)/h;if(16===m.length){var y=m[8],z=m[9],A=m[10],B=m[12],C=m[13],D=m[14];if(e.zOrigin&&(D=-e.zOrigin,B=y*D-m[12],C=z*D-m[13],D=A*D+e.zOrigin-m[14]),!d||B!==e.x||C!==e.y||D!==e.z){var P,Q,R,S,U,V,W,X,E=m[0],F=m[1],G=m[2],H=m[3],I=m[4],J=m[5],K=m[6],L=m[7],M=m[11],N=e.rotationX=Math.atan2(K,A),O=i>N||N>j;N&&(U=Math.cos(-N),V=Math.sin(-N),P=I*U+y*V,Q=J*U+z*V,R=K*U+A*V,S=L*U+M*V,y=I*-V+y*U,z=J*-V+z*U,A=K*-V+A*U,M=L*-V+M*U,I=P,J=Q,K=R),N=e.rotationY=Math.atan2(y,E),N&&(W=i>N||N>j,U=Math.cos(-N),V=Math.sin(-N),P=E*U-y*V,Q=F*U-z*V,R=G*U-A*V,S=H*U-M*V,z=F*V+z*U,A=G*V+A*U,M=H*V+M*U,E=P,F=Q,G=R),N=e.rotation=Math.atan2(F,J),N&&(X=i>N||N>j,U=Math.cos(-N),V=Math.sin(-N),E=E*U+I*V,Q=F*U+J*V,J=F*-V+J*U,K=G*-V+K*U,F=Q),X&&O?e.rotation=e.rotationX=0:X&&W?e.rotation=e.rotationY=0:W&&O&&(e.rotationY=e.rotationX=0),e.scaleX=(Math.sqrt(E*E+F*F)*h+.5>>0)/h,e.scaleY=(Math.sqrt(J*J+z*z)*h+.5>>0)/h,e.scaleZ=(Math.sqrt(K*K+A*A)*h+.5>>0)/h,e.skewX=0,e.perspective=M?1/M:0,e.x=B,e.y=C,e.z=D}}else if(!vb||0===m.length||e.x!==m[4]||e.y!==m[5]||!e.rotationX&&!e.rotationY){var Y=m.length>=6,Z=Y?m[0]:1,$=m[1]||0,_=m[2]||0,ab=Y?m[3]:1;e.x=m[4]||0,e.y=m[5]||0,p=Math.sqrt(Z*Z+$*$),q=Math.sqrt(ab*ab+_*_),r=Z||$?Math.atan2($,Z):e.rotation||0,s=_||ab?Math.atan2(_,ab)+r:e.skewX||0,t=p-Math.abs(e.scaleX||0),u=q-Math.abs(e.scaleY||0),Math.abs(s)>Math.PI/2&&Math.abs(s)<1.5*Math.PI&&(f?(p*=-1,s+=0>=r?Math.PI:-Math.PI,r+=0>=r?Math.PI:-Math.PI):(q*=-1,s+=0>=s?Math.PI:-Math.PI)),v=(r-e.rotation)%Math.PI,x=(s-e.skewX)%Math.PI,(void 0===e.skewX||t>g||-g>t||u>g||-g>u||v>i&&j>v&&0!==v*h>>0||x>i&&j>x&&0!==x*h>>0)&&(e.scaleX=p,e.scaleY=q,e.rotation=r,e.skewX=s),vb&&(e.rotationX=e.rotationY=e.z=0,e.perspective=parseFloat(c.defaultTransformPerspective)||0,e.scaleZ=1)}e.zOrigin=k;for(n in e)g>e[n]&&e[n]>-g&&(e[n]=0);return d&&(a._gsTransform=e),e},xb=function(a){var l,m,b=this.data,c=-b.rotation,d=c+b.skewX,e=1e5,f=(Math.cos(c)*b.scaleX*e>>0)/e,g=(Math.sin(c)*b.scaleX*e>>0)/e,h=(Math.sin(d)*-b.scaleY*e>>0)/e,i=(Math.cos(d)*b.scaleY*e>>0)/e,j=this.t.style,k=this.t.currentStyle;if(k){m=g,g=-h,h=-m,l=k.filter,j.filter="";var v,w,p=this.t.offsetWidth,q=this.t.offsetHeight,r="absolute"!==k.position,s="progid:DXImageTransform.Microsoft.Matrix(M11="+f+", M12="+g+", M21="+h+", M22="+i,t=b.x,u=b.y;if(null!=b.ox&&(v=(b.oxp?.01*p*b.ox:b.ox)-p/2,w=(b.oyp?.01*q*b.oy:b.oy)-q/2,t+=v-(v*f+w*g),u+=w-(v*h+w*i)),r)v=p/2,w=q/2,s+=", Dx="+(v-(v*f+w*g)+t)+", Dy="+(w-(v*h+w*i)+u)+")";else{var z,A,B,y=8>L?1:-1;for(v=b.ieOffsetX||0,w=b.ieOffsetY||0,b.ieOffsetX=Math.round((p-((0>f?-f:f)*p+(0>g?-g:g)*q))/2+t),b.ieOffsetY=Math.round((q-((0>i?-i:i)*q+(0>h?-h:h)*p))/2+u),nb=0;4>nb;nb++)A=X[nb],z=k[A],m=-1!==z.indexOf("px")?parseFloat(z):Z(this.t,A,parseFloat(z),z.replace(n,""))||0,B=m!==b[A]?2>nb?-b.ieOffsetX:-b.ieOffsetY:2>nb?v-b.ieOffsetX:w-b.ieOffsetY,j[A]=(b[A]=Math.round(m-B*(0===nb||2===nb?1:y)))+"px";s+=", sizingMethod='auto expand')"}j.filter=-1!==l.indexOf("DXImageTransform.Microsoft.Matrix(")?l.replace(x,s):s+" "+l,(0===a||1===a)&&1===f&&0===g&&0===h&&1===i&&(r&&-1===s.indexOf("Dx=0, Dy=0")||o.test(l)&&100!==parseFloat(RegExp.$1)||-1===l.indexOf("gradient(")&&j.removeAttribute("filter"))}},yb=function(){var x,y,z,A,B,C,D,E,F,b=this.data,c=this.t.style,d=b.perspective,e=b.scaleX,f=0,g=0,h=0,i=0,j=b.scaleY,k=0,l=0,m=0,n=0,o=b.scaleZ,p=0,q=0,r=0,s=d?-1/d:0,t=b.rotation,u=b.zOrigin,v=",",w=1e5;J&&(D=T(this.t,"top",null,!1,"0"),E=parseFloat(D)||0,F=D.substr((E+"").length),b._ffFix=!b._ffFix,c.top=(b._ffFix?E+.05:E-.05)+(""===F?"px":F)),t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=j*y,f=e*-y,j*=x,e=z,i=A),t=b.rotationY,t&&(x=Math.cos(t),y=Math.sin(t),z=e*x,A=i*x,B=o*-y,C=s*-y,g=e*y,k=i*y,o*=x,s*=x,e=z,i=A,m=B,q=C),t=b.rotationX,t&&(x=Math.cos(t),y=Math.sin(t),z=f*x+g*y,A=j*x+k*y,B=n*x+o*y,C=r*x+s*y,g=f*-y+g*x,k=j*-y+k*x,o=n*-y+o*x,s=r*-y+s*x,f=z,j=A,n=B,r=C),u&&(p-=u,h=g*p,l=k*p,p=o*p+u),h+=b.x,l+=b.y,p=((p+b.z)*w>>0)/w,c[sb]="matrix3d("+(e*w>>0)/w+v+(i*w>>0)/w+v+(m*w>>0)/w+v+(q*w>>0)/w+v+(f*w>>0)/w+v+(j*w>>0)/w+v+(n*w>>0)/w+v+(r*w>>0)/w+v+(g*w>>0)/w+v+(k*w>>0)/w+v+(o*w>>0)/w+v+(s*w>>0)/w+v+(h*w>>0)/w+v+(l*w>>0)/w+v+p+v+(d?1+-p/d:1)+")"},zb=function(){var d,e,f,g,h,i,j,k,b=this.data,c=this.t;J&&(d=T(c,"top",null,!1,"0"),e=parseFloat(d)||0,f=d.substr((e+"").length),b._ffFix=!b._ffFix,c.style.top=(b._ffFix?e+.05:e-.05)+(""===f?"px":f)),b.rotation||b.skewX?(g=b.rotation,h=g-b.skewX,i=1e5,j=b.scaleX*i,k=b.scaleY*i,c.style[sb]="matrix("+(Math.cos(g)*j>>0)/i+","+(Math.sin(g)*j>>0)/i+","+(Math.sin(h)*-k>>0)/i+","+(Math.cos(h)*k>>0)/i+","+b.x+","+b.y+")"):c.style[sb]="matrix("+b.scaleX+",0,0,"+b.scaleY+","+b.x+","+b.y+")"};pb("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective",null,function(a,b,c,d,e,g,h){if(d._transform)return e;var n,o,p,q,r,s,t,i=d._transform=wb(a,f,!0),j=a.style,k=1e-6,l=rb.length,m=h;for("string"==typeof m.transform&&sb?(q=j[sb],j[sb]=m.transform,n=wb(a,null,!1),j[sb]=q):"object"==typeof m&&(o=null!=m.rotation?m.rotation:null!=m.rotationZ?m.rotationZ:i.rotation*z,n={scaleX:ab(null!=m.scaleX?m.scaleX:m.scale,i.scaleX),scaleY:ab(null!=m.scaleY?m.scaleY:m.scale,i.scaleY),scaleZ:ab(null!=m.scaleZ?m.scaleZ:m.scale,i.scaleZ),x:ab(m.x,i.x),y:ab(m.y,i.y),z:ab(m.z,i.z),perspective:ab(m.transformPerspective,i.perspective)},n.rotation=null!=m.shortRotation||null!=m.shortRotationZ?cb(m.shortRotation||m.shortRotationZ||0,i.rotation):"number"==typeof o?o*y:bb(o,i.rotation),vb&&(n.rotationX=null!=m.shortRotationX?cb(m.shortRotationX,i.rotationX):"number"==typeof m.rotationX?m.rotationX*y:bb(m.rotationX,i.rotationX),n.rotationY=null!=m.shortRotationY?cb(m.shortRotationY,i.rotationY):"number"==typeof m.rotationY?m.rotationY*y:bb(m.rotationY,i.rotationY),k>n.rotationX&&n.rotationX>-k&&(n.rotationX=0),k>n.rotationY&&n.rotationY>-k&&(n.rotationY=0)),n.skewX=null==m.skewX?i.skewX:"number"==typeof m.skewX?m.skewX*y:bb(m.skewX,i.skewX),n.skewY=null==m.skewY?i.skewY:"number"==typeof m.skewY?m.skewY*y:bb(m.skewY,i.skewY),(p=n.skewY-i.skewY)&&(n.skewX+=p,n.rotation+=p),k>n.skewY&&n.skewY>-k&&(n.skewY=0),k>n.skewX&&n.skewX>-k&&(n.skewX=0),k>n.rotation&&n.rotation>-k&&(n.rotation=0)),s=i.z||i.rotationX||i.rotationY||n.z||n.rotationX||n.rotationY||n.perspective,s||null==n.scale||(n.scaleZ=1);--l>-1;)c=rb[l],r=n[c]-i[c],(r>k||-k>r||null!=A[c])&&(t=!0,e=new lb(i,c,i[c],r,e),e.xs0=0,e.plugin=g,d._overwriteProps.push(e.n));return r=m.transformOrigin,(r||vb&&s&&i.zOrigin)&&(sb?(t=!0,r=(r||T(a,c,f,!1,"50% 50%"))+"",c=ub,e=new lb(j,c,0,0,e,-1,"css_transformOrigin"),e.b=j[c],e.plugin=g,vb?(q=i.zOrigin,r=r.split(" "),i.zOrigin=(r.length>2?parseFloat(r[2]):q)||0,e.xs0=e.e=j[c]=r[0]+" "+(r[1]||"50%")+" 0px",e=new lb(i,"zOrigin",0,0,e,-1,e.n),e.b=q,e.xs0=e.e=i.zOrigin):e.xs0=e.e=j[c]=r):$(r+"",i)),t&&(d._transformType=s||3===this._transformType?3:2),e},!0),pb("boxShadow","0px 0px 0px 0px #999",function(a,b,c,d,e,g){var h=-1!==(b+"").indexOf("inset")?" inset":"";return this.parseComplex(a.style,this.format(T(a,this.p,f,!1,this.dflt))+h,this.format(b)+h,e,g)},!0,!0),pb("borderRadius","0px",function(a,b,c,d,g){b=this.format(b);var k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,i=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],j=a.style;for(s=parseFloat(a.offsetWidth),t=parseFloat(a.offsetHeight),k=b.split(" "),l=0;i.length>l;l++)this.p.indexOf("border")&&(i[l]=R(i[l])),o=n=T(a,i[l],f,!1,"0px"),-1!==o.indexOf(" ")&&(n=o.split(" "),o=n[0],n=n[1]),p=m=k[l],q=parseFloat(o),v=o.substr((q+"").length),w="="===p.charAt(1),w?(r=parseInt(p.charAt(0)+"1",10),p=p.substr(2),r*=parseFloat(p),u=p.substr((r+"").length-(0>r?1:0))||""):(r=parseFloat(p),u=p.substr((r+"").length)),""===u&&(u=e[c]||v),u!==v&&(x=Z(a,"borderLeft",q,v),y=Z(a,"borderTop",q,v),"%"===u?(o=100*(x/s)+"%",n=100*(y/t)+"%"):"em"===u?(z=Z(a,"borderLeft",1,"em"),o=x/z+"em",n=y/z+"em"):(o=x+"px",n=y+"px"),w&&(p=parseFloat(o)+r+u,m=parseFloat(n)+r+u)),g=mb(j,i[l],o+" "+n,p+" "+m,!1,"0px",g);return g},!0,!1,gb("0px 0px 0px 0px",!1,!0)),pb("backgroundPosition","0 0",function(a,b,c,d,e,g){var l,m,n,o,p,h="background-position",i=f||S(a,null),j=this.format((i?L?i.getPropertyValue(h+"-x")+" "+i.getPropertyValue(h+"-y"):i.getPropertyValue(h):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),k=this.format(b);if(-1!==j.indexOf("%")!=(-1!==k.indexOf("%"))){for(l=j.split(" "),m=k.split(" "),D.setAttribute("src",T(a,"backgroundImage").replace(t,"")),n=2;--n>-1;)j=l[n],o=-1!==j.indexOf("%"),o!==(-1!==m[n].indexOf("%"))&&(p=0===n?a.offsetWidth-D.width:a.offsetHeight-D.height,l[n]=o?parseFloat(j)/100*p+"px":100*(parseFloat(j)/p)+"%");j=l.join(" ")}return this.parseComplex(a.style,j,k,e,g)},!1,!1,$),pb("backgroundSize","0 0",null,!1,!1,$),pb("perspective","0px",null,!0),pb("perspectiveOrigin","50% 50%",null,!0),pb("transformStyle","preserve-3d",null,!0),pb("backfaceVisibility","visible",null,!0),pb("margin",null,hb("marginTop,marginRight,marginBottom,marginLeft")),pb("padding",null,hb("paddingTop,paddingRight,paddingBottom,paddingLeft")),pb("clip","rect(0px,0px,0px,0px)"),pb("textShadow","0px 0px 0px #999",null,!1,!0),pb("autoRound",null,function(a,b,c,d,e){return e}),pb("border","0px solid #000",function(a,b,c,d,e,g){return this.parseComplex(a.style,this.format(T(a,"borderTopWidth",f,!1,"0px")+" "+T(a,"borderTopStyle",f,!1,"solid")+" "+T(a,"borderTopColor",f,!1,"#000")),this.format(b),e,g)},!1,!0,function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(fb)||["#000"])[0]});var Ab=function(a){var e,b=this.t,c=b.filter,d=this.s+this.c*a>>0;100===d&&(-1===c.indexOf("atrix(")&&-1===c.indexOf("radient(")?(b.removeAttribute("filter"),e=!T(this.data,"filter")):(b.filter=c.replace(q,""),e=!0)),e||(this.xn1&&(b.filter=c=c||"alpha(opacity=100)"),-1===c.indexOf("opacity")?b.filter+=" alpha(opacity="+d+")":b.filter=c.replace(o,"opacity="+d))};pb("opacity,alpha,autoAlpha","1",function(a,b,c,d,e,g){var j,h=parseFloat(T(a,"opacity",f,!1,"1")),i=a.style;return b=parseFloat(b),"autoAlpha"===c&&(j=T(a,"visibility",f),1===h&&"hidden"===j&&0!==b&&(h=0),e=new lb(i,"visibility",0,0,e,-1,null,!1,0,0!==h?"visible":"hidden",0===b?"hidden":"visible"),e.xs0="visible",d._overwriteProps.push(e.n)),M?e=new lb(i,"opacity",h,b-h,e):(e=new lb(i,"opacity",100*h,100*(b-h),e),e.xn1="autoAlpha"===c?1:0,i.zoom=1,e.type=2,e.b="alpha(opacity="+e.s+")",e.e="alpha(opacity="+(e.s+e.c)+")",e.data=a,e.plugin=g,e.setRatio=Ab),e});var Bb=function(a){if(1===a||0===a){this.t.className=1===a?this.e:this.b;for(var b=this.data,c=this.t.style,d=c.removeProperty?"removeProperty":"removeAttribute";b;)b.v?c[b.p]=b.v:c[d](b.p.replace(r,"-$1").toLowerCase()),b=b._next}else this.t.className!==this.b&&(this.t.className=this.b)};for(pb("className",null,function(a,b,c,d,e,g,h){var k,l,i=a.className,j=a.style.cssText;return e=d._classNamePT=new lb(a,c,0,0,e,2),e.setRatio=Bb,e.b=i,e.e="="!==b.charAt(1)?b:"+"===b.charAt(0)?i+" "+b.substr(2):i.split(b.substr(2)).join(""),d._tween._duration&&(l=U(a,f,!0),a.className=e.e,k=V(a,l,U(a),h),a.className=i,e.data=k.firstMPT,a.style.cssText=j,e=e.xfirst=d.parse(a,k.difs,e,g)),e}),i="bezier,throwProps,physicsProps,physics2D".split(","),nb=i.length;nb--;)qb(i[nb]);return i=c.prototype,i._firstPT=null,i._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,G=b.autoRound,d=!1,e=b.suffixMap||c.suffixMap,f=S(a,""),g=this._overwriteProps;var j,k,l,m,n,o,q,r,s,i=a.style;if(H&&""===i.zIndex&&(j=T(a,"zIndex",f),("auto"===j||""===j)&&(i.zIndex=0)),"string"==typeof b&&(m=i.cssText,j=U(a,f),i.cssText=m+";"+b,j=V(a,j,U(a)).difs,!M&&p.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,i.cssText=m),this._firstPT=k=this.parse(a,b,null),this._transformType){for(s=3===this._transformType,sb?I&&(H=!0,""===i.zIndex&&(q=T(a,"zIndex",f),("auto"===q||""===q)&&(i.zIndex=0)),K&&(i.WebkitBackfaceVisibility=this._vars.WebkitBackfaceVisibility||(s?"visible":"hidden"))):i.zoom=1,l=k;l&&l._next;)l=l._next;r=new lb(a,"transform",0,0,null,2),this._linkCSSP(r,null,l),r.setRatio=s&&vb?yb:sb?zb:xb,r.data=this._transform||wb(a,f,!0),g.pop()}if(d){for(;k;){for(o=k._next,l=m;l&&l.pr>k.pr;)l=l._next;(k._prev=l?l._prev:n)?k._prev._next=k:m=k,(k._next=l)?l._prev=k:n=k,k=o}this._firstPT=m}return!0},i.parse=function(a,b,c,d){var i,j,k,l,m,n,o,p,q,r,g=a.style;for(i in b)n=b[i],j=h[i],j?c=j.parse(a,n,i,this,c,d,b):(m=T(a,i,f)+"",q="string"==typeof n,"color"===i||"fill"===i||"stroke"===i||-1!==i.indexOf("Color")||q&&!n.indexOf("rgb")?(q||(n=eb(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=mb(g,i,m,n,!0,"transparent",c,0,d)):!q||-1===n.indexOf(" ")&&-1===n.indexOf(",")?(k=parseFloat(m),o=k||0===k?m.substr((k+"").length):"",(""===m||"auto"===m)&&("width"===i||"height"===i?(k=Y(a,i,f),o="px"):(k="opacity"!==i?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.substr((l+"").length-(0>l?1:0))||""):(l=parseFloat(n),p=q?n.substr((l+"").length)||"":""),""===p&&(p=e[i]||o),n=l||0===l?(r?l+k:l)+p:b[i],o!==p&&""!==p&&(l||0===l)&&(k||0===k)&&(k=Z(a,i,k,o),"%"===p?(k/=Z(a,i,100,"%")/100,k>100&&(k=100)):"em"===p?k/=Z(a,i,1,"em"):(l=Z(a,i,l,p),p="px"),r&&(l||0===l)&&(n=l+k+p)),r&&(l+=k),!k&&0!==k||!l&&0!==l?n||"NaN"!=n+""&&null!=n?(c=new lb(g,i,l||k||0,0,c,-1,"css_"+i,!1,0,m,n),c.xs0="display"===i&&"none"===n?m:n):O("invalid "+i+" tween value. "):(c=new lb(g,i,k,l-k,c,0,"css_"+i,G!==!1&&("px"===p||"zIndex"===i),0,m,n),c.xs0=p)):c=mb(g,i,m,n,!0,null,c,0,d)),d&&c&&!c.plugin&&(c.plugin=d);return c},i.setRatio=function(a){var d,e,f,b=this._firstPT,c=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;b;){if(d=b.c*a+b.s,b.r?d=d>0?d+.5>>0:d-.5>>0:c>d&&d>-c&&(d=0),b.type)if(1===b.type)if(f=b.l,2===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2;else if(3===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3;else if(4===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4;else if(5===f)b.t[b.p]=b.xs0+d+b.xs1+b.xn1+b.xs2+b.xn2+b.xs3+b.xn3+b.xs4+b.xn4+b.xs5;else{for(e=b.xs0+d+b.xs1,f=1;b.l>f;f++)e+=b["xn"+f]+b["xs"+(f+1)];b.t[b.p]=e}else-1===b.type?b.t[b.p]=b.xs0:b.setRatio&&b.setRatio(a);else b.t[b.p]=d+b.xs0;b=b._next}else for(;b;)2!==b.type?b.t[b.p]=b.b:b.setRatio(a),b=b._next;else for(;b;)2!==b.type?b.t[b.p]=b.e:b.setRatio(a),b=b._next},i._enableTransforms=function(a){this._transformType=a||3===this._transformType?3:2},i._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next),a._next=b,a._prev=c),a},i._kill=function(b){var e,f,g,c=b,d=!1;if(b.css_autoAlpha||b.css_alpha){c={};for(f in b)c[f]=b[f];c.css_opacity=1,c.css_autoAlpha&&(c.css_visibility=1)}return b.css_className&&(e=this._classNamePT)&&(g=e.xfirst,g&&g._prev?this._linkCSSP(g._prev,e._next,g._prev._prev):g===this._firstPT&&(this._firstPT=null),e._next&&this._linkCSSP(e._next,e._next._next,g._prev),this._target._gsOverwrittenClassNamePT=this._linkCSSP(e,this._target._gsOverwrittenClassNamePT),this._classNamePT=null,d=!0),a.prototype._kill.call(this,c)||d},a.activate([c]),c},!0),_gsDefine("plugins.RoundPropsPlugin",["plugins.TweenPlugin"],function(a){var b=function(){a.call(this,"roundProps",-1),this._overwriteProps.length=0},c=b.prototype=new a("roundProps",-1);return c.constructor=b,b.API=2,c._onInitTween=function(a,b,c){return this._tween=c,!0},c._onInitAllProps=function(){for(var f,g,h,a=this._tween,b=a.vars.roundProps instanceof Array?a.vars.roundProps:a.vars.roundProps.split(","),c=b.length,d={},e=a._propLookup.roundProps;--c>-1;)d[b[c]]=1;for(c=b.length;--c>-1;)for(f=b[c],g=a._firstPT;g;)h=g._next,g.pg?g.t._roundProps(d,!0):g.n===f&&(this._add(g.t,f,g.s,g.c),h&&(h._prev=g._prev),g._prev?g._prev._next=h:a._firstPT===g&&(a._firstPT=h),g._next=g._prev=null,a._propLookup[f]=e),g=h;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)},a.activate([b]),b},!0),_gsDefine("easing.Back",["easing.Ease"],function(a){var n,o,b=window.GreenSockGlobals||window,c=b.com.greensock,d=2*Math.PI,e=Math.PI/2,f=c._class,g=function(b,c){var d=f("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},h=a.register||function(){},i=function(a,b,c,d){var g=f("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return h(g,a),g},j=function(b,c){var d=f("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},k=i("Back",j("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),j("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),j("BackInOut",function(a){return 1>(a*=2)?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),l=f("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),m=l.prototype=new a;return m.constructor=l,m.getRatio=function(a){var b=a+(.5-a)*this._p;return this._p1>a?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},l.ease=new l(.7,.7),m.config=l.config=function(a,b,c){return new l(a,b,c)},n=f("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),m=n.prototype=new a,m.constructor=n,m.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},m.config=n.config=function(a){return new n(a)},i("Bounce",g("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),g("BounceIn",function(a){return 1/2.75>(a=1-a)?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),g("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),i("Circ",g("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),g("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),g("CircInOut",function(a){return 1>(a*=2)?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),o=function(b,c,e){var g=f("easing."+b,function(a,b){this._p1=a||1,this._p2=b||e,this._p3=this._p2/d*(Math.asin(1/this._p1)||0)},!0),h=g.prototype=new a;return h.constructor=g,h.getRatio=c,h.config=function(a,b){return new g(a,b)},g},i("Elastic",o("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*d/this._p2)+1},.3),o("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2))},.3),o("ElasticInOut",function(a){return 1>(a*=2)?-.5*this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*d/this._p2):.5*this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*d/this._p2)+1},.45)),i("Expo",g("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),g("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),g("ExpoInOut",function(a){return 1>(a*=2)?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),i("Sine",g("SineOut",function(a){return Math.sin(a*e)}),g("SineIn",function(a){return-Math.cos(a*e)+1}),g("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),f("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),h(b.SlowMo,"SlowMo","ease,"),h(n,"SteppedEase","ease,"),k},!0)}),function(a){"use strict";var e,f,g,h,b=a.GreenSockGlobals||a,c=function(a){var e,c=a.split("."),d=b;for(e=0;c.length>e;e++)d[c[e]]=d=d[c[e]]||{};return d},d=c("com.greensock"),i={},j=function(d,e,f,g){this.sc=i[d]?i[d].sc:[],i[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(k){for(var n,o,p,q,l=e.length,m=l;--l>-1;)(n=i[e[l]]||new j(e[l],[])).gsClass?(h[l]=n.gsClass,m--):k&&n.sc.push(this);if(0===m&&f)for(o=("com.greensock."+d).split("."),p=o.pop(),q=c(o.join("."))[p]=this.gsClass=f.apply(f,h),g&&(b[p]=q,"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").join("/"),[],function(){return q}):"undefined"!=typeof module&&module.exports&&(module.exports=q)),l=0;this.sc.length>l;l++)this.sc[l].check()},this.check(!0)},k=a._gsDefine=function(a,b,c,d){return new j(a,b,c,d)},l=d._class=function(a,b,c){return b=b||function(){},k(a,[],function(){return b},c),b},m=[0,0,1,1],n=[],o=l("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?m.concat(b):m},!0),p=o.map={},q=o.register=function(a,b,c,e){for(var i,j,k,m,f=b.split(","),g=f.length,h=(c||"easeIn,easeOut,easeInOut").split(",");--g>-1;)for(j=f[g],i=e?l("easing."+j,null,!0):d.easing[j]||{},k=h.length;--k>-1;)m=h[k],p[j+"."+m]=p[m+j]=i[m]=a.getRatio?a:a[m]||new a};for(g=o.prototype,g._calcEnd=!1,g.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},e=["Linear","Quad","Cubic","Quart","Quint,Strong"],f=e.length;--f>-1;)g=e[f]+",Power"+f,q(new o(null,null,1,f),g,"easeOut",!0),q(new o(null,null,2,f),g,"easeIn"+(0===f?",easeNone":"")),q(new o(null,null,3,f),g,"easeInOut");p.linear=d.easing.Linear.easeIn,p.swing=d.easing.Quad.easeInOut;
var r=l("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});g=r.prototype,g.addEventListener=function(a,b,c,d,e){e=e||0;var h,i,f=this._listeners[a],g=0;for(null==f&&(this._listeners[a]=f=[]),i=f.length;--i>-1;)h=f[i],h.c===b?f.splice(i,1):0===g&&e>h.pr&&(g=i+1);f.splice(g,0,{c:b,s:c,up:d,pr:e})},g.removeEventListener=function(a,b){var d,c=this._listeners[a];if(c)for(d=c.length;--d>-1;)if(c[d].c===b)return c.splice(d,1),void 0},g.dispatchEvent=function(a){var b=this._listeners[a];if(b)for(var e,c=b.length,d=this._eventTarget;--c>-1;)e=b[c],e.up?e.c.call(e.s||d,{type:a,target:d}):e.c.call(e.s||d)};var s=a.requestAnimationFrame,t=a.cancelAnimationFrame,u=Date.now||function(){return(new Date).getTime()};for(e=["ms","moz","webkit","o"],f=e.length;--f>-1&&!s;)s=a[e[f]+"RequestAnimationFrame"],t=a[e[f]+"CancelAnimationFrame"]||a[e[f]+"CancelRequestAnimationFrame"];l("Ticker",function(b,c){var g,h,i,j,k,d=this,e=u(),f=c!==!1&&s,l=function(){null!=i&&(f&&t?t(i):a.clearTimeout(i),i=null)},m=function(a){d.time=(u()-e)/1e3,(!g||d.time>=k||a===!0)&&(d.frame++,k=d.time>k?d.time+j-(d.time-k):d.time+j-.001,d.time+.001>k&&(k=d.time+.001),d.dispatchEvent("tick")),a!==!0&&(i=h(m))};r.call(d),this.time=this.frame=0,this.tick=function(){m(!0)},this.fps=function(b){return arguments.length?(g=b,j=1/(g||60),k=this.time+j,h=0===g?function(){}:f&&s?s:function(b){return a.setTimeout(b,1e3*(k-d.time)+1>>0||1)},l(),i=h(m),void 0):g},this.useRAF=function(a){return arguments.length?(l(),f=a,d.fps(g),void 0):f},d.fps(b),setTimeout(function(){f&&!i&&d.useRAF(!1)},1e3)}),g=d.Ticker.prototype=new d.events.EventDispatcher,g.constructor=d.Ticker;var v=l("core.Animation",function(a,b){if(this.vars=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(this.vars.delay)||0,this._timeScale=1,this._active=this.vars.immediateRender===!0,this.data=this.vars.data,this._reversed=this.vars.reversed===!0,G){h||(w.tick(),h=!0);var c=this.vars.useFrames?F:G;c.add(this,c._time),this.vars.paused&&this.paused(!0)}}),w=v.ticker=new d.Ticker;g=v.prototype,g._dirty=g._gc=g._initted=g._paused=!1,g._totalTime=g._time=0,g._rawPrevTime=-1,g._next=g._last=g._onUpdate=g._timeline=g.timeline=null,g._paused=!1,g.play=function(a,b){return arguments.length&&this.seek(a,b),this.reversed(!1),this.paused(!1)},g.pause=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!0)},g.resume=function(a,b){return arguments.length&&this.seek(a,b),this.paused(!1)},g.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},g.restart=function(a,b){return this.reversed(!1),this.paused(!1),this.totalTime(a?-this._delay:0,b!==!1)},g.reverse=function(a,b){return arguments.length&&this.seek(a||this.totalDuration(),b),this.reversed(!0),this.paused(!1)},g.render=function(){},g.invalidate=function(){return this},g._enabled=function(a,b){return this._gc=!a,this._active=a&&!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration,b!==!0&&(a&&null==this.timeline?this._timeline.add(this,this._startTime-this._delay):a||null==this.timeline||this._timeline._remove(this,!0)),!1},g._kill=function(){return this._enabled(!1,!1)},g.kill=function(a,b){return this._kill(a,b),this},g._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},g.eventCallback=function(a,b,c,d){if(null==a)return null;if("on"===a.substr(0,2)){if(1===arguments.length)return this.vars[a];if(null==b)delete this.vars[a];else if(this.vars[a]=b,this.vars[a+"Params"]=c,this.vars[a+"Scope"]=d,c)for(var e=c.length;--e>-1;)"{self}"===c[e]&&(c=this.vars[a+"Params"]=c.concat(),c[e]=this);"onUpdate"===a&&(this._onUpdate=b)}return this},g.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},g.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},g.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},g.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this.totalTime(a,b)):this._time},g.totalTime=function(a,b){if(!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&(a+=this.totalDuration()),this._timeline.smoothChildTiming&&(this._dirty&&this.totalDuration(),a>this._totalDuration&&(a=this._totalDuration),this._startTime=(this._paused?this._pauseTime:this._timeline._time)-(this._reversed?this._totalDuration-a:a)/this._timeScale,this._timeline._dirty||this._uncache(!1),!this._timeline._active))for(var c=this._timeline;c._timeline;)c.totalTime(c._totalTime,!0),c=c._timeline;this._gc&&this._enabled(!0,!1),this._totalTime!==a&&this.render(a,b,!1)}return this},g.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},g.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||1e-6,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime||0===this._pauseTime?this._pauseTime:this._timeline._totalTime;this._startTime=b-(b-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},g.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._totalTime,!0)),this):this._reversed},g.paused=function(a){return arguments.length?(a!=this._paused&&this._timeline&&(!a&&this._timeline.smoothChildTiming&&(this._startTime+=this._timeline.rawTime()-this._pauseTime,this._uncache(!1)),this._pauseTime=a?this._timeline.rawTime():null,this._paused=a,this._active=!this._paused&&this._totalTime>0&&this._totalTime<this._totalDuration),this._gc&&(a||this._enabled(!0,!1)),this):this._paused};var x=l("core.SimpleTimeline",function(a){v.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});g=x.prototype=new v,g.constructor=x,g.kill()._gc=!1,g._first=g._last=null,g._sortChildren=!1,g.add=function(a,b){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._timeline&&this._uncache(!0),this},g.insert=g.add,g._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a.timeline=null,a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),this._timeline&&this._uncache(!0)),this},g.render=function(a,b){var e,d=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;d;)e=d._next,(d._active||a>=d._startTime&&!d._paused)&&(d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,!1):d.render((a-d._startTime)*d._timeScale,b,!1)),d=e},g.rawTime=function(){return this._totalTime};var y=l("TweenLite",function(a,b,c){if(v.call(this,b,c),null==a)throw"Cannot tween an undefined reference.";this.target=a="string"!=typeof a?a:y.selector(a)||a,this._overwrite=null==this.vars.overwrite?E[y.defaultOverwrite]:"number"==typeof this.vars.overwrite?this.vars.overwrite>>0:E[this.vars.overwrite];var d,e;if((a instanceof Array||a.jquery)&&"object"==typeof a[0])for(this._targets=a.slice(0),this._propLookup=[],this._siblings=[],d=0;this._targets.length>d;d++)e=this._targets[d],e.jquery?(this._targets.splice(d--,1),this._targets=this._targets.concat(e.constructor.makeArray(e))):(this._siblings[d]=H(e,this,!1),1===this._overwrite&&this._siblings[d].length>1&&I(e,this,null,1,this._siblings[d]));else this._propLookup={},this._siblings=H(a,this,!1),1===this._overwrite&&this._siblings.length>1&&I(a,this,null,1,this._siblings);(this.vars.immediateRender||0===b&&0===this._delay&&this.vars.immediateRender!==!1)&&this.render(-this._delay,!1,!0)},!0),z=function(a){var c,b={};for(c in a)!D[c]&&(!A[c]||A[c]&&A[c]._autoCSS)&&(b[c]=a[c],delete a[c]);a.css=b};g=y.prototype=new v,g.constructor=y,g.kill()._gc=!1,g.ratio=0,g._firstPT=g._targets=g._overwrittenProps=null,g._notifyPluginsOfEnabled=!1,y.version="1.8.0",y.defaultEase=g._ease=new o(null,null,1,1),y.defaultOverwrite="auto",y.ticker=w,y.selector=a.$||a.jQuery||function(b){return a.$?(y.selector=a.$,a.$(b)):a.document?a.document.getElementById("#"===b.charAt(0)?b.substr(1):b):b};var A=y._plugins={},B=y._tweenLookup={},C=0,D={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,orientToBezier:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1},E={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},F=v._rootFramesTimeline=new x,G=v._rootTimeline=new x;G._startTime=w.time,F._startTime=w.frame,G._active=F._active=!0,v._updateRoot=function(){if(G.render((w.time-G._startTime)*G._timeScale,!1,!1),F.render((w.frame-F._startTime)*F._timeScale,!1,!1),!(w.frame%120)){var a,b,c;for(c in B){for(b=B[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete B[c]}}},w.addEventListener("tick",v._updateRoot);var H=function(a,b,c){var e,f,d=a._gsTweenID;if(B[d||(a._gsTweenID=d="t"+C++)]||(B[d]={target:a,tweens:[]}),b&&(e=B[d].tweens,e[f=e.length]=b,c))for(;--f>-1;)e[f]===b&&e.splice(f,1);return B[d].tweens},I=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._enabled(!1,!1)&&(g=!0);else if(5===d)break;return g}var n,j=b._startTime+1e-10,k=[],l=0,m=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(n=n||J(b,0,m),0===J(h,n,m)&&(k[l++]=h)):j>=h._startTime&&h._startTime+h.totalDuration()/h._timeScale+1e-10>j&&((m||!h._initted)&&2e-10>=j-h._startTime||(k[l++]=h)));for(f=l;--f>-1;)h=k[f],2===d&&h._kill(c,a)&&(g=!0),(2!==d||!h._firstPT&&h._initted)&&h._enabled(!1,!1)&&(g=!0);return g},J=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2e-10>f-b?1e-10:(f+=a.totalDuration()/a._timeScale/e)>b?0:f-b-1e-10};g._init=function(){var c,d,e,a=this.vars,b=a.ease;if(a.startAt&&(a.startAt.overwrite=0,a.startAt.immediateRender=!0,y.to(this.target,0,a.startAt)),this._ease=b?b instanceof o?a.easeParams instanceof Array?b.config.apply(b,a.easeParams):b:"function"==typeof b?new o(b,a.easeParams):p[b]||y.defaultEase:y.defaultEase,this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(c=this._targets.length;--c>-1;)this._initProps(this._targets[c],this._propLookup[c]={},this._siblings[c],this._overwrittenProps?this._overwrittenProps[c]:null)&&(d=!0);else d=this._initProps(this.target,this._propLookup,this._siblings,this._overwrittenProps);if(d&&y._onPluginEvent("_onInitAllProps",this),this._overwrittenProps&&null==this._firstPT&&"function"!=typeof this.target&&this._enabled(!1,!1),a.runBackwards)for(e=this._firstPT;e;)e.s+=e.c,e.c=-e.c,e=e._next;this._onUpdate=a.onUpdate,this._initted=!0},g._initProps=function(a,b,c,d){var e,f,g,h,i,j,k;if(null==a)return!1;this.vars.css||a.style&&a.nodeType&&this.vars.autoCSS!==!1&&z(this.vars);for(e in this.vars){if(D[e]){if(("onStartParams"===e||"onUpdateParams"===e||"onCompleteParams"===e||"onReverseCompleteParams"===e||"onRepeatParams"===e)&&(i=this.vars[e]))for(f=i.length;--f>-1;)"{self}"===i[f]&&(i=this.vars[e]=i.concat(),i[f]=this)}else if(A[e]&&(h=new A[e])._onInitTween(a,this.vars[e],this)){for(this._firstPT=j={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:!0,n:e,pg:!0,pr:h._priority},f=h._overwriteProps.length;--f>-1;)b[h._overwriteProps[f]]=this._firstPT;(h._priority||h._onInitAllProps)&&(g=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0)}else this._firstPT=b[e]=j={_next:this._firstPT,t:a,p:e,f:"function"==typeof a[e],n:e,pg:!1,pr:0},j.s=j.f?a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]():parseFloat(a[e]),k=this.vars[e],j.c="string"==typeof k&&"="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*Number(k.substr(2)):Number(k)-j.s||0;j&&j._next&&(j._next._prev=j)}return d&&this._kill(d,a)?this._initProps(a,b,c,d):this._overwrite>1&&this._firstPT&&c.length>1&&I(a,this,b,this._overwrite,c)?(this._kill(b,a),this._initProps(a,b,c,d)):g},g.render=function(a,b,c){var e,f,g,d=this._time;if(a>=this._duration)this._totalTime=this._time=this._duration,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(e=!0,f="onComplete"),0===this._duration&&((0===a||0>this._rawPrevTime)&&this._rawPrevTime!==a&&(c=!0),this._rawPrevTime=a);else if(0>=a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==d||0===this._duration&&this._rawPrevTime>0)&&(f="onReverseComplete",e=this._reversed),0>a?(this._active=!1,0===this._duration&&(this._rawPrevTime>=0&&(c=!0),this._rawPrevTime=a)):this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var h=a/this._duration,i=this._easeType,j=this._easePower;(1===i||3===i&&h>=.5)&&(h=1-h),3===i&&(h*=2),1===j?h*=h:2===j?h*=h*h:3===j?h*=h*h*h:4===j&&(h*=h*h*h*h),this.ratio=1===i?1-h:2===i?h:.5>a/this._duration?h/2:1-h/2}else this.ratio=this._ease.getRatio(a/this._duration);if(this._time!==d||c){for(this._initted||(this._init(),!e&&this._time&&(this.ratio=this._ease.getRatio(this._time/this._duration))),this._active||this._paused||(this._active=!0),0===d&&this.vars.onStart&&(0!==this._time||0===this._duration)&&(b||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||n)),g=this._firstPT;g;)g.f?g.t[g.p](g.c*this.ratio+g.s):g.t[g.p]=g.c*this.ratio+g.s,g=g._next;this._onUpdate&&(b||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||n)),f&&(this._gc||(e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),b||this.vars[f]&&this.vars[f].apply(this.vars[f+"Scope"]||this,this.vars[f+"Params"]||n)))}},g._kill=function(a,b){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:y.selector(b)||b;var c,d,e,f,g,h,i,j;if((b instanceof Array||b.jquery)&&"object"==typeof b[0])for(c=b.length;--c>-1;)this._kill(a,b[c])&&(h=!0);else{if(this._targets){for(c=this._targets.length;--c>-1;)if(b===this._targets[c]){g=this._propLookup[c]||{},this._overwrittenProps=this._overwrittenProps||[],d=this._overwrittenProps[c]=a?this._overwrittenProps[c]||{}:"all";break}}else{if(b!==this.target)return!1;g=this._propLookup,d=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(g){i=a||g,j=a!==d&&"all"!==d&&a!==g&&(null==a||a._tempKill!==!0);for(e in i)(f=g[e])&&(f.pg&&f.t._kill(i)&&(h=!0),f.pg&&0!==f.t._overwriteProps.length||(f._prev?f._prev._next=f._next:f===this._firstPT&&(this._firstPT=f._next),f._next&&(f._next._prev=f._prev),f._next=f._prev=null),delete g[e]),j&&(d[e]=1)}}return h},g.invalidate=function(){return this._notifyPluginsOfEnabled&&y._onPluginEvent("_onDisable",this),this._firstPT=null,this._overwrittenProps=null,this._onUpdate=null,this._initted=this._active=this._notifyPluginsOfEnabled=!1,this._propLookup=this._targets?{}:[],this},g._enabled=function(a,b){if(a&&this._gc)if(this._targets)for(var c=this._targets.length;--c>-1;)this._siblings[c]=H(this._targets[c],this,!0);else this._siblings=H(this.target,this,!0);return v.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?y._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},y.to=function(a,b,c){return new y(a,b,c)},y.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender!==!1&&(c.immediateRender=!0),new y(a,b,c)},y.fromTo=function(a,b,c,d){return d.startAt=c,c.immediateRender&&(d.immediateRender=!0),new y(a,b,d)},y.delayedCall=function(a,b,c,d,e){return new y(b,0,{delay:a,onComplete:b,onCompleteParams:c,onCompleteScope:d,onReverseComplete:b,onReverseCompleteParams:c,onReverseCompleteScope:d,immediateRender:!1,useFrames:e,overwrite:0})},y.set=function(a,b){return new y(a,0,b)},y.killTweensOf=y.killDelayedCallsTo=function(a,b){for(var c=y.getTweensOf(a),d=c.length;--d>-1;)c[d]._kill(b,a)},y.getTweensOf=function(a){if(null!=a){a="string"!=typeof a?a:y.selector(a)||a;var b,c,d,e;if((a instanceof Array||a.jquery)&&"object"==typeof a[0]){for(b=a.length,c=[];--b>-1;)c=c.concat(y.getTweensOf(a[b]));for(b=c.length;--b>-1;)for(e=c[b],d=b;--d>-1;)e===c[d]&&c.splice(b,1)}else for(c=H(a).concat(),b=c.length;--b>-1;)c[b]._gc&&c.splice(b,1);return c}};var K=l("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0},!0);if(g=K.prototype,K.version=12,K.API=2,g._firstPT=null,g._addTween=function(a,b,c,d,e,f){var g,h;null!=d&&(g="number"==typeof d||"="!==d.charAt(1)?Number(d)-c:parseInt(d.charAt(0)+"1",10)*Number(d.substr(2)))&&(this._firstPT=h={_next:this._firstPT,t:a,p:b,s:c,c:g,f:"function"==typeof a[b],n:e||b,r:f},h._next&&(h._next._prev=h))},g.setRatio=function(a){for(var c,b=this._firstPT;b;)c=b.c*a+b.s,b.r&&(c=c+(c>0?.5:-.5)>>0),b.f?b.t[b.p](c):b.t[b.p]=c,b=b._next},g._kill=function(a){if(null!=a[this._propName])this._overwriteProps=[];else for(var b=this._overwriteProps.length;--b>-1;)null!=a[this._overwriteProps[b]]&&this._overwriteProps.splice(b,1);for(var c=this._firstPT;c;)null!=a[c.n]&&(c._next&&(c._next._prev=c._prev),c._prev?(c._prev._next=c._next,c._prev=null):this._firstPT===c&&(this._firstPT=c._next)),c=c._next;return!1},g._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},y._onPluginEvent=function(a,b){var d,c=b._firstPT;if("_onInitAllProps"===a){for(var e,f,g,h;c;){for(h=c._next,e=f;e&&e.pr>c.pr;)e=e._next;(c._prev=e?e._prev:g)?c._prev._next=c:f=c,(c._next=e)?e._prev=c:g=c,c=h}c=b._firstPT=f}for(;c;)c.pg&&"function"==typeof c.t[a]&&c.t[a]()&&(d=!0),c=c._next;return d},K.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===K.API&&(y._plugins[(new a[b])._propName]=a[b]);return!0},e=a._gsQueue){for(f=0;e.length>f;f++)e[f]();for(g in i)i[g].func||a.console.log("GSAP encountered missing dependency: com.greensock."+g)}h=!1}(window);

$.setIdAndHeadersToTables=function(param){
	var prefixId="tb"// id = prefixId-tbIdx-thIdx
	var tbIdx=0;
	
	var str = 'table.'+param;
	if(!param){
		str = 'table.tableJs';
	}
	
	$(str).each(function (){
		//--- set id --------------------------------------
		var thIdx=0;
		$(this).find("th").each(function (){
			if(!this.id||this.id=="") this.id=prefixId+"-"+tbIdx+"-"+thIdx;			
			thIdx++;
		});
		//-------------------------------------------------

		//--- count row&column ----------------------------
		var rowCnt=$(this).find("tr").length;
		var colCnt=0;
		$(this).find("tr:eq(0)").children().each(function(){
			var colspan=$(this).attr("colspan");
			if(colspan) colCnt+=Number(colspan);
			else colCnt++;
		});
		//-------------------------------------------------

		//--- 초기화 table array ----------------------------
		var tableArr=new Array(rowCnt);
		for(var i=0;i<rowCnt;i++) tableArr[i]=new Array(colCnt);
		//-------------------------------------------------

		//--- set tableElement to array -------------------
		var row=0;
		$(this).find("tr").each(function(){
			var col=0;
			$(this).children().each(function(){
				var rs=$(this).attr("rowspan");
				var cs=$(this).attr("colspan");

				for(var i=col;i<colCnt;i++){
					if(!tableArr[row][i]){
						col=i;
						break;
					}
				}

				if(rs && cs){
					for(var i=0;i<Number(rs);i++) {
						for(var j=0;j<Number(cs);j++) {
							tableArr[row+i][col+j]=this;	
						}
					}
					col+=(Number(cs)-1);
				}
				else if(rs){
					for(var i=0;i<Number(rs);i++) {
						tableArr[row+i][col]=this;
					}
				}else if(cs){
					for(var i=0;i<Number(cs);i++) {
						tableArr[row][col+i]=this;
					}
					col+=(Number(cs)-1);
				}else{
					tableArr[row][col]=this;
				}

				col++;
			});
			row++;	
		});
		//-------------------------------------------------

		//--- set headers ---------------------------------
		var setHeaders=function(id,scp,i,j){
			var arrIndexOf=function(arr,str){//ie7 array에서 indexOf 작동안함.
				for(var i=0;i<arr.length;i++){
					if(arr[i]==str) return true;
				}
				return false;
			};
			if(scp&&scp.indexOf("row")==0){
				for(var k=j+1;k<colCnt;k++) {
					
					//console.log( 'check : '+tableArr[i][k] );
					if( tableArr[i][k] ){
						// console.log( 'check : '+tableArr[i][k].tagName );
						if(tableArr[i][k].tagName=="TH" || tableArr[i][k].tagName=="th") {
							var childScp=$(tableArr[i][k]).attr("scope");
							if(childScp&&childScp.indexOf("row")==-1) {
								setHeaders(id+" "+tableArr[i][k].id,childScp,i,k); //재귀
							}
							continue;
						}
					}
					var hdrs=$(tableArr[i][k]).attr("headers");
					var idArr=id.split(" ");
					
					for(var x=0;x<idArr.length;x++)
					{
						
						//console.log( 'xxx '+hdrs );
						// 수정 hdrs 가 널인경우에 ie7에서 에러 발생 해서 if문을 걸었다.
						
						if( hdrs )
						{
							if(hdrs && arrIndexOf(hdrs.split(" "),idArr[x])){
								continue;
							}
							if(hdrs==""|| !hdrs) {
								hdrs=idArr[x];
								$(tableArr[i][k]).attr("headers",hdrs);
							}
							else {
								hdrs+=" "+idArr[x];
								$(tableArr[i][k]).attr("headers",hdrs);
							}
						}
					}
				}
			}else if(scp&&scp.indexOf("col")==0){
				for(var k=i+1;k<rowCnt;k++) {
					if(tableArr[k][j].tagName=="TH" || tableArr[k][j].tagName=="th") {
						var childScp=$(tableArr[k][j]).attr("scope");
						if(childScp&&childScp.indexOf("col")==-1) {
							setHeaders(id+" "+tableArr[k][j].id,childScp,k,j); //재귀
						}
						continue;
					}

					var hdrs=$(tableArr[k][j]).attr("headers");
					var idArr=id.split(" ");

					for(var x=0;x<idArr.length;x++){
						//if(hdrs && hdrs.split(" ").indexOf(idArr[x])!=-1) continue;
						if(hdrs && arrIndexOf(hdrs.split(" "),idArr[x])) continue;	

						if(hdrs==""|| !hdrs) {
							hdrs=idArr[x];
							$(tableArr[k][j]).attr("headers",hdrs);
						}
						else {
							hdrs+=" "+idArr[x];
							$(tableArr[k][j]).attr("headers",hdrs);
						}
					}
				}
			}
		};

		for(var i=0;i<rowCnt;i++){
			for(var j=0;j<colCnt;j++){
				if( tableArr[i][j] ){
					if(tableArr[i][j].tagName=="TH" || tableArr[i][j].tagName=="th") {
						setHeaders(tableArr[i][j].id,$(tableArr[i][j]).attr("scope"),i,j);
					}
				}
			}
		}
		//-------------------------------------------------

		tbIdx++;
	});
};

/**
	@author		: 
	@version	:
	@since		: 

	$.fn.calendarInit({
		target : 지정 요소 다음에 일자가 표시되는 테이블이 생성된다
		start 	: { year : 2015 , month : 1, day : 1 }, 
		current : { year : 2016 , month : 1, day : 10 },
		end 	: { year : 2017 , month : 8, day : 1 } })	:	캘린더 생성 함수 option으로 시작값 현재값 마지막 값이 들어간다.
	first													:	option의 시작값 일로 이동
	end														:	option의 마지막 일로 이동
	prev													:	option의 현재의 이전달 이동
	next													:	option의 현재의 다음달 이동
	setVisible((true&false))								:	달력의 표시 여부를 설정(true,false)
	getVisible() return (true&false)						:	달력의 표시 여부를 리턴(true,false)
 **/

(function ($, window) 
{
	var str = 
	'<table summary="일,월,화,수,목,금,토 등 달력정보를 확인하실 수 있습니다.">'+
		'<caption>달력 정보</caption>'+
		'<colgroup>'+
			'<col style="width:15%">'+
			'<col style="width:14%">'+
			'<col style="width:14%">'+
			'<col style="width:*;">'+
			'<col style="width:14%">'+
			'<col style="width:14%">'+
			'<col style="width:15%">'+
		'</colgroup>'+
		'<thead>'+
			'<tr>'+
				'<th scope="col">일</th>'+
				'<th scope="col">월</th>'+
				'<th scope="col">화</th>'+
				'<th scope="col">수</th>'+
				'<th scope="col">목</th>'+
				'<th scope="col">금</th>'+
				'<th scope="col">토</th>'+
			'</tr>'+
		'</thead>'+
		'<tbody>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
			'<tr>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
				'<td></td>'+
			'</tr>'+
		'</tbody>'+
	'</table>';
	
	
	$.fn.calendarInit = function( _option )
	{
		var cal = this;
		var topInfo = this.children('.calTop');
		//var topInfo = this.children().eq(0);
		var month = topInfo.children('P');
		var btn = this.children('.btn');
		var defaults = {
			target		: 	null,
			year		: 	null ,
			month		: 	null,
			start 	: {  }, 		//달력 시작일
			current : {},		//달력 현재일
			end 	: {}
		};
		
		var option = $.extend(defaults, _option);
		
		var _cy = option.current.year;		//	현재 년도
		var _cm = option.current.month;	//	현재 달
		var _cd = option.current.day;		//	현재 일
		var _ty = _cy;
		var _tm = _cm;
		var _td = _cd;
		
		var _sy , _sm , _sd = null;
		if( option.start ){
			_sy = option.start.year;		//	시작 년도
			_sm = option.start.month;		//	시작 달
			_sd = option.start.day;		//	시작 일			
		}
		var _ey , _em , _ed = null;
		if( option.end ){
			_ey = option.end.year;			//	마지막 년도
			_em = option.end.month;		//	마지막 달
			_ed = option.end.day;			//	마지막 일	
		}
		
		var _today = 0;
		var year 	= option.year;
		var month = option.month;
		var _target = option.target;
		if( _target ){
			_target.after(str);
		}
		
		//_target.after(str).trigger('create');
		//$(this).children().eq(1).after(str);
		var calView = function( y , m , day)
		{
			_cy = y;
			_cm = m;
			
			var tt = topInfo.children('P');
			year.html( _cy );
			month.html( _cm );
			
			var d1 = (y+(y-y%4)/4-(y-y%100)/100+(y-y%400)/400+m*2+(m*5-m*5%9)/9-(m<3?y%4||y%100==0&&y%400?2:3:4))%7;
			cal.find('tbody>tr').each(function()
			{
				$(this).find('td').each(function(c)
				{
					if($(this).hasClass('today')){
						_today = $(this).text();
						$(this).removeClass('today');
					}
					$(this).empty();
				});
			});
			
			var row = 0;
			var column = 0;
			for (var i = 0; i < 42; i++)
			{
				column++;
				if (i%7==0){
					row++;
				}
				if( column > 7){
					column = 1;
				}
				if (i < d1 || i >= d1+(m*9-m*9%8)/8%2+(m==2?y%4||y%100==0&&y%400?28:29:30)){}
				else
				{
					var d = (i+1-d1);
					cal.find('tbody>tr:eq('+(row-1)+')').each(function()
					{
						var cc = $(this).find('td:eq('+(column-1)+')');
						// today 설정을 어떻게 하냐에 따라 달라짐?
						if( d == day )
						{
							_checkToday( cc );
							//tClass = false;
							//cc.addClass('today');
						}
						cc.empty();
						cc.html('<a href="#">'+d+'</a>');
						
						var a = cc.children('a');
						a.unbind().bind( 'click' , function( e )
						{
							cal.trigger('select',
							[{
								year	:	_cy,
								month	:	_cm,
								day		:	$(this).parent().text()
							}]);
							_checkToday($(this).parent());
							e.preventDefault();
							//e.stopPropagation();
						});
					});
				}
			}
		};

		var _setDate=function( to ){
			_cy = to.year;
			_cm = to.month;
			_cd = to.day;
			calView(_cy, _cm, _cd);
		};
		
		var _checkToday = function( to )
		{
			if( _today ){
				$(_today).removeClass('today');
			}
			_today = to;
			to.addClass('today');
			//to.focus();
		};
		
		var _setVisible = function( value )
		{
			var str = 'block';
			if( !value ){
				str = 'none';
			}
			cal.css({
				'display' : str,
				'z-index':1000
			});
		};
		
		var _getVisible = function()
		{
			return (cal.css('display')=='block')?true:false;
		};
		
		var _first = function()
		{
			if( option.start ){
				calView( _sy , _sm , _sd);
			}
		};
		
		var _end = function()
		{
			if( option.end ){
				calView( _ey , _em , _ed);
			}
		};
		
		var _prev = function()
		{
			if( Number(String(_sy)+String(_numCheck(_sm))) != Number(String(_cy)+String(_numCheck(_cm))) || !option.start )
			{
				_cm--;
				if( _cm < 1 ){
					_cm = 12;
					_cy--;
				}
				calView( _cy , _cm , 1);
			}
		};
		
		var _next = function()
		{
			if( Number(String(_ey)+String(_numCheck(_em))) > Number(String(_cy)+String(_numCheck(_cm))) || !option.end )
			{
				_cm ++;
				if( _cm > 12 ){
					_cm = 1;
					_cy++;
				}
				calView( _cy , _cm , 1);
			}
		};

		var _prevYear = function()
		{
			if( option.start ){
				_cy--;
				if(_cy<_sy||_cm<_sm){
					_cy=_sy;
					_cm=_sm;
				}
				calView( _cy , _cm , 1);
				
			}
		};
		
		var _nextYear = function()
		{
			if( option.end ){
				_cy++;
				if(_cy>_ey||_cm>_em){
					_cy=_ey;
					_cm=_em;
				}
				calView( _cy , _cm , 1);
			}
		};
		
		function _numCheck(n)
		{
			return (String(n).length > 1)? n : '0'+n;
		}
		
		var _todayfunc = function(  )
		{
			calView( _ty , _tm , _td);
		};
		
		var _setStartDay = function( option )
		{
			_sy = option.year;			//	시작 년도
			_sm = option.month;		//	시작 달
			_sd = option.day;			//	시작 일			
		};
		
		var _setEndDay = function( option )
		{
			_ey = option.year;			//	마지막 년도
			_em = option.month;		//	마지막 달
			_ed = option.day;			//	마지막 일
		};
		
		var _setToday = function( option )
		{
			
			_ty = option.year;			//오늘 년도
			_tm = option.month;			//오늘 달
			_td = option.day;			//오늘 일
			_todayfunc();
		};
		
		var _setup = function( _option )
		{
			option = $.extend( option, _option );
			_setStartDay( option.start );
			_setEndDay( option.end );
			_setToday( option.current );
		};
		
		//var inter;
		//cal.focusin( function()
		//{
		//	if( !_getVisible())
		//	{
		//		_setVisible(true);
		//	}
		//	if(inter){
		//		clearInterval(inter);	
		//	}	
		//});
		//cal.focusout( function()
		//{
		//	inter = setInterval( function()
		//	{
		//		_setVisible(false);
		//		cal.trigger('FOCUSOUT');
		//		clearInterval(inter);
		//	},1);
		//});
		
		
		calView( _cy , _cm , _cd);
		_setVisible(true);
		
		return{
			first			:	_first,
			end				:	_end,
			prev			:	_prev,
			next			:	_next,
			prevYear		: 	_prevYear,
			nextYear		: 	_nextYear,
			setVisible		:	_setVisible,
			getVisible		:	_getVisible,
			setStartDay 	: 	_setStartDay,
			setEndDay 		: 	_setEndDay,
			setToday 		: 	_setToday,
			setDate  		: 	_setDate,
			setup 			: 	_setup,
			today			:	_todayfunc,
			EVENTS			:	{
				SELECT		:	'select',
				FOCUSIN		: 	'FOCUSIN',
				FOCUSOUT	: 	'FOCUSOUT'
			},
			bind 			: function( event , func )
			{
				cal.bind(event , func);
			},
			getToday		: function(){
				return {
					year:_ty,
					month:_tm,
					day:_td
				};
			}
		};
	};
})
(jQuery, window);

// commonJs 
(function ($, window) 
{
	var commonJs;
	var doc = $(window.document);
	
	if( !window.commonJs )
	{
		window.commonJs = {};
	}
	commonJs = window.commonJs;
	//$(document).find('.graph>.graphCon>.dataEnd').css('display','none');
	//console.log($(document).find('.graph').attr('class'));
	
	// 원형 차트 /poc/myt/MY1.2.2.1.html
	commonJs.pieChart = function( _target , cn , total )
	{
		var target = doc.find(_target);
		var canvas = target.find(".can")[0];

		var context = canvas.getContext('2d');
		var image = new Image();
		// 원이 그려지는 시작점
		var START_POINT = 138;
		var MAX_POINT = 264;
		
		var degreesToRadians = function(degrees){
		   return degrees * (Math.PI/180);     
		};
	
		var radiansToDegrees = function(radians) {
		   return radians * (180/Math.PI);
		};
		
		var drawCircle = function( now ) 
		{
			context.clearRect(0, 0, 200, 200);
			context.beginPath();
			context.arc(75, 75, 69, degreesToRadians(START_POINT), degreesToRadians(START_POINT + now), false);
			context.lineWidth = 12;
			context.strokeStyle=context.createPattern(image, "repeat");
			context.lineCap = 'round';
			context.stroke();
			//context.clip();
		};
		var start = function()
		{
			var current = (cn * MAX_POINT)/total;
			drawCircle( current );
		};
		if( cn == 0){
			target.children('.dataEnd').css('display','block');
		}else{
			var path = target.closest('.remainingGraph').attr('class').replace('remainingGraph ','');
			// 영문의 경우 형태가 다르기 때문에 graphType2 를 채크해서 변경
			if( path == 'graphType2' ){
				path = target.closest('.graph').attr('class').replace('graph ','');
			}
			//console.log( 'dd '+path +'  '+target.closest('.graph').attr('class'));
			image.src = "/mpoc/img/common/graph_"+path+".png";
			image.onload = start;			
		}
		//var path = target.closest('.remainingGraph').attr('class').substr(-3);
	};
	
	//콤마찍기
	function numberFormat(num) 
	{
		var pattern = /(-?[0-9]+)([0-9]{3})/;
		while(pattern.test(num)) {
			num = num.replace(pattern,"$1,$2");
		}
		return num;
	}
	
	//콤마제거
	function unNumberFormat(num) 
	{
		return (num.replace(/\,/g,""));
	}

	// 막대그래프 myt/MY1.2.5.1T.html
	var imgArr = [];
	// 패턴 경로
	///mpoc/img/common/
	imgArr[0] = '/mpoc/img/myt/graph_pattern_1.png';
	imgArr[1] = '/mpoc/img/myt/graph_pattern_2.png';
	imgArr[2] = '/mpoc/img/myt/graph_pattern_3.png';
	imgArr[3] = '/mpoc/img/myt/graph_pattern_4.png';
	imgArr[4] = '/mpoc/img/myt/graph_pattern_5.png';
	imgArr[5] = '/mpoc/img/myt/graph_pattern_6.png';
	imgArr[6] = '/mpoc/img/myt/graph_pattern_7.png';
	
	commonJs.useListChart = function(  _target , arr , type , limit)
	{
		// type(type1 원 표시가 된다. ,type2 100%로 표기된다.);
		var obj = {};
		for( var i = 0; i<arr.length; i++)
		{
			obj['m'+i] = new Image();
			obj['m'+i].src = imgArr[i];
			obj['m'+i].onload = endF;
		}
		// 이미지로드 및 로드 완료후 실행
		var cc = 0;
		function endF(){
			cc++;
			if( cc == arr.length)
			{
				if( type == 'type1'){
					if( limit ){
						drawStart3();
					}else{
						drawStart();
					}
				}else{
					drawStart2();
				}
			}
		}
		
		var target = doc.find(_target);
		//console.log( target.attr('class') );
		
		var context = target[0].getContext("2d");
		
		var mtx = 90;
		var mty = 62;
		// 기획쪽에서 애기하길 금액은 50만원을 넘길수 없다고 함
		var maxPoint = 500000;
		// 곡선이 그려지는 높이의 최대치가 360이다 이값을 기준으로 계산이 이루어진다.
		var curveMax = 198;
		
		// 초기화
		context.clearRect(0, 0, target.width(), target.height());
		function drawShape(ctx, xoff, yoff , th, tw, num) 
		{
			xoff = xoff - mtx;
			yoff = yoff - mty;
			context.beginPath();
			context.fillStyle = '#333333';
			context.fill();
			context.font="bold 13px Malgun Gothic";
			context.textAlign = 'center';
			//console.log('type '+type);
			var titley = (type=='type1')?55:0;
			var dan =  (type=='type1')?'원':'%';
			context.fillText(numberFormat( String(tw) )+dan,xoff+72, (curveMax-th)-titley , 100);
			// 데이터가 0이면 그리지 않는다.
			if( th == 0){
				//return;
			}
			
			ctx.moveTo(40 + xoff, 219 + yoff);
			ctx.bezierCurveTo(49 + xoff, 221 + yoff, 52 + xoff, 20 + yoff+(curveMax-th), 72 + xoff, 20 + yoff+(curveMax-th));
			ctx.bezierCurveTo(92 + xoff, 20 + yoff+(curveMax-th), 89 + xoff, 219 + yoff, 100 + xoff, 218 + yoff);
			// th는 차트의 높이값을 변수로 받아서 변화 시키며 기존 커브 계산값에 추가
  			//ctx.moveTo(118 + xoff, 501 + yoff);
  			//ctx.bezierCurveTo(144 + xoff, 501 + yoff, 144 + xoff, 144 + yoff+(curveMax-th), 203 + xoff, 144 + yoff+(curveMax-th));
  			//ctx.bezierCurveTo(258 + xoff, 144 + yoff+(curveMax-th), 264 + xoff, 501 + yoff, 282 + xoff, 501 + yoff);
			
			context.fillStyle=context.createPattern( obj['m'+num] , "repeat");
			context.fill();
		}
		
		function drawStart()
		{
			// 셀하나당 최대치 31
			for( var i = 0; i<arr.length; i++ )
			{
				var won = arr[i];
				//var tmax = 257;
				var tmp = 0;
				if( won <= 50000){
					tmp = ((won/50000)*31);
				}else if( won <= 100000){
					tmp = ((won/100000)*31)+31;
				}else if( won <= 300000 ){
					// 차트의 눈금간 간격을 계산하기 위해서 값을 뺀다 (전체 비율이 다름)
					tmp = ((won/300000)*31)+62;
					// 차트에 표시되는 금액때문에 뺀 금액을 다시 더해준다. (전체 비율이 다름)
				}else{
					tmp = ((won/500000)*31)+93;
				}
				// 최소 0 ,  최대 125  , 눈금 하나 크기 31   
				drawShape(context,(i*100)+100 , 0 , tmp , won , i);
				//drawShape(context,(i*83)+83 , 0 , tmp , won , i);
			}
		}
		
		// 월별 시간대별 차트 myt/mMY1.2.1.2T.1.html 막대
		function drawStart2()
		{
			for( var i = 0; i<arr.length; i++ )
			{
				// 막대 최대치 164
				var won = arr[i];
				var tmp = (won/100)*164;
				drawShape(context,(i*65)+65 , 49 , tmp , won , i);
			}
		}
		
		function drawStart3()
		{
			//console.log( 'limit '+ limit );
			for( var i = 0; i<arr.length; i++ )
			{
				// 막대 최대치 164
				var won = arr[i];
				var tmp = (won/limit)*125;
				//console.log( 'ddd '+tmp );
				drawShape(context,(i*83)+83 , 0 , tmp , won , i);
			}
		}
	};
})(jQuery, window);