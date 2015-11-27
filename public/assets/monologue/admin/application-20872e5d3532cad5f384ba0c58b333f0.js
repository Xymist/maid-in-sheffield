/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1><$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1><$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=Z.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)
});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&&_(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&&"withCredentials"in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||_.expando+"_"+jc++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Mc),b&&a.jQuery===_&&(a.jQuery=Lc),_},typeof b===zb&&(a.jQuery=a.$=_),_});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/

!function(e){e(function(){"use strict";e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()},e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e(function(){e("body").on("click.alert.data-api",t,n.prototype.close)})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")},e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e(function(){e("body").on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=n,this.options.slide&&this.slide(this.options.slide),this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},to:function(t){var n=this.$element.find(".item.active"),r=n.parent().children(),i=r.index(n),s=this;if(t>r.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){s.to(t)}):i==t?this.pause().cycle():this.slide(t>i?"next":"prev",e(r[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle()),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f=e.Event("slide",{relatedTarget:i[0]});this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u]();if(i.hasClass("active"))return;if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}},e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e(function(){e("body").on("click.carousel.data-api","[data-slide]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=!i.data("modal")&&e.extend({},i.data(),n.data());i.carousel(s),t.preventDefault()})})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning)return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning)return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}},e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=typeof n=="object"&&n;i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e(function(){e("body").on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})})}(window.jQuery),!function(e){"use strict";function r(){i(e(t)).removeClass("open")}function i(t){var n=t.attr("data-target"),r;return n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=e(n),r.length||(r=t.parent()),r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||(s.toggleClass("open"),n.focus()),!1},keydown:function(t){var n,r,s,o,u,a;if(!/(38|40|27)/.test(t.keyCode))return;n=e(this),t.preventDefault(),t.stopPropagation();if(n.is(".disabled, :disabled"))return;o=i(n),u=o.hasClass("open");if(!u||u&&t.keyCode==27)return n.click();r=e("[role=menu] li:not(.divider) a",o);if(!r.length)return;a=r.index(r.filter(":focus")),t.keyCode==38&&a>0&&a--,t.keyCode==40&&a<r.length-1&&a++,~a||(a=0),r.eq(a).focus()}},e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e(function(){e("html").on("click.dropdown.data-api touchstart.dropdown.data-api",r),e("body").on("click.dropdown touchstart.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api touchstart.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api touchstart.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;e("body").addClass("modal-open"),this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1).focus(),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.trigger("shown")}):t.$element.trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,e("body").removeClass("modal-open"),this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(e){this.$element.hide().trigger("hidden"),this.backdrop()},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.options.backdrop!="static"&&this.$backdrop.click(e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,e.proxy(this.removeBackdrop,this)):this.removeBackdrop()):t&&t()}},e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e(function(){e("body").on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,this.options.trigger=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):this.options.trigger!="manual"&&(i=this.options.trigger=="hover"?"mouseenter":"focus",s=this.options.trigger=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this))),this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,t,this.$element.data()),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);if(!n.options.delay||!n.options.delay.show)return n.show();clearTimeout(this.timeout),n.hoverState="in",this.timeout=setTimeout(function(){n.hoverState=="in"&&n.show()},n.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var e,t,n,r,i,s,o;if(this.hasContent()&&this.enabled){e=this.tip(),this.setContent(),this.options.animation&&e.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,e[0],this.$element[0]):this.options.placement,t=/in/.test(s),e.remove().css({top:0,left:0,display:"block"}).appendTo(t?this.$element:document.body),n=this.getPosition(t),r=e[0].offsetWidth,i=e[0].offsetHeight;switch(t?s.split(" ")[1]:s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}e.css(o).addClass(s).addClass("in")}},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function r(){var t=setTimeout(function(){n.off(e.support.transition.end).remove()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.remove()})}var t=this,n=this.tip();return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?r():n.remove(),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").removeAttr("title")},hasContent:function(){return this.getTitle()},getPosition:function(t){return e.extend({},t?{top:0,left:0}:this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass("in")?"hide":"show"]()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}},e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover",title:"",delay:0,html:!0}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content > *")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-content")||(typeof n.content=="function"?n.content.call(t[0]):n.content),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}}),e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var t=e(this),n=t.data("target")||t.attr("href"),r=/^#\w/.test(n)&&e(n);return r&&r.length&&[[r.position().top,n]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}},e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active a").last()[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}},e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e(function(){e("body").on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.$menu=e(this.options.menu).appendTo("body"),this.source=this.options.source,this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.offset(),{height:this.$element[0].offsetHeight});return this.$menu.css({top:t.top+t.height,left:t.left}),this.$menu.show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),(e.browser.chrome||e.browser.webkit||e.browser.msie)&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this))},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=!~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},blur:function(e){var t=this;setTimeout(function(){t.hide()},150)},click:function(e){e.stopPropagation(),e.preventDefault(),this.select()},mouseenter:function(t){this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")}},e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e(function(){e("body").on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;t.preventDefault(),n.typeahead(n.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))},e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
/* ===========================================================
 * bootstrap-datepicker.js v1.3.0
 * http://twitter.github.com/bootstrap/javascript.html#datepicker
 * ===========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Contributed by Scott Torborg - github.com/storborg
 * Loosely based on jquery.date_input.js by Jon Leighton, heavily updated and
 * rewritten to match bootstrap javascript approach and add UI features.
 * =========================================================== */



!function ( $ ) { 

  var selector = '[data-datepicker]',
      all = [];

  function clearDatePickers(except) {
    var ii;
    for(ii = 0; ii < all.length; ii++) {
      if(all[ii] != except) {
        all[ii].hide();
      }
    }
  }

  function DatePicker( element, options ) {
    this.$el = $(element);
    this.proxy('show').proxy('ahead').proxy('hide').proxy('keyHandler').proxy('selectDate');

    var options = $.extend({}, $.fn.datepicker.defaults, options );

    if((!!options.parse) || (!!options.format) || !this.detectNative()) {
      $.extend(this, options);
      this.$el.data('datepicker', this);
      all.push(this);
      this.init();
    }
  }

  DatePicker.prototype = {

      detectNative: function(el) {
        // Attempt to activate the native datepicker, if there is a known good
        // one. If successful, return true. Note that input type="date"
        // requires that the string be RFC3339, so if the format/parse methods
        // have been overridden, this won't be used.
        if(navigator.userAgent.match(/(iPad|iPhone); CPU(\ iPhone)? OS 5_\d/i)) {
          // jQuery will only change the input type of a detached element.
          var $marker = $('<span>').insertBefore(this.$el);
          this.$el.detach().attr('type', 'date').insertAfter($marker);
          $marker.remove();
          return true;
        }
        return false;
      }

    , init: function() {
        var $months = this.nav('months', 1);
        var $years = this.nav('years', 12);

        var $nav = $('<div>').addClass('nav').append($months, $years);

        this.$month = $('.name', $months);
        this.$year = $('.name', $years);

        $calendar = $("<div>").addClass('calendar');

        // Populate day of week headers, realigned by startOfWeek.
        for (var i = 0; i < this.shortDayNames.length; i++) {
          $calendar.append('<div class="dow">' + this.shortDayNames[(i + this.startOfWeek) % 7] + '</div>');
        };

        this.$days = $('<div>').addClass('days');
        $calendar.append(this.$days);

        this.$picker = $('<div>')
          .click(function(e) { e.stopPropagation() })
          // Use this to prevent accidental text selection.
          .mousedown(function(e) { e.preventDefault() })
          .addClass('datepicker')
          .append($nav, $calendar)
          .insertAfter(this.$el);

        this.$el
          .focus(this.show)
          .click(this.show)
          .change($.proxy(function() { this.selectDate(); }, this));

        this.selectDate();
        this.hide();
      }

    , nav: function( c, months ) {
        var $subnav = $('<div>' +
                          '<span class="prev button">&larr;</span>' +
                          '<span class="name"></span>' +
                          '<span class="next button">&rarr;</span>' +
                        '</div>').addClass(c)
        $('.prev', $subnav).click($.proxy(function() { this.ahead(-months, 0) }, this));
        $('.next', $subnav).click($.proxy(function() { this.ahead(months, 0) }, this));
        return $subnav;

    }

    , updateName: function($area, s) {
        // Update either the month or year field, with a background flash
        // animation.
        var cur = $area.find('.fg').text(),
            $fg = $('<div>').addClass('fg').append(s);
        $area.empty();
        if(cur != s) {
          var $bg = $('<div>').addClass('bg');
          $area.append($bg, $fg);
          $bg.fadeOut('slow', function() {
            $(this).remove();
          });
        } else {
          $area.append($fg);
        }
    }

    , selectMonth: function(date) {
        var newMonth = new Date(date.getFullYear(), date.getMonth(), 1);

        if (!this.curMonth || !(this.curMonth.getFullYear() == newMonth.getFullYear() &&
                                this.curMonth.getMonth() == newMonth.getMonth())) {

          this.curMonth = newMonth;

          var rangeStart = this.rangeStart(date), rangeEnd = this.rangeEnd(date);
          var num_days = this.daysBetween(rangeStart, rangeEnd);
          this.$days.empty();

          for (var ii = 0; ii <= num_days; ii++) {
            var thisDay = new Date(rangeStart.getFullYear(), rangeStart.getMonth(), rangeStart.getDate() + ii, 12, 00);
            var $day = $('<div>').attr('date', this.format(thisDay));
            $day.text(thisDay.getDate());

            if (thisDay.getMonth() != date.getMonth()) {
              $day.addClass('overlap');
            };

            this.$days.append($day);
          };

          this.updateName(this.$month, this.monthNames[date.getMonth()]);
          this.updateName(this.$year, this.curMonth.getFullYear());

          $('div', this.$days).click($.proxy(function(e) {
            var $targ = $(e.target);

            // The date= attribute is used here to provide relatively fast
            // selectors for setting certain date cells.
            this.update($targ.get(0).getAttribute("date"));

            // Don't consider this selection final if we're just going to an
            // adjacent month.
            if(!$targ.hasClass('overlap')) {
              this.hide();
            }

          }, this));

          $("[date='" + this.format(new Date()) + "']", this.$days).addClass('today');

        };

        $('.selected', this.$days).removeClass('selected');
        $('[date="' + this.selectedDateStr + '"]', this.$days).addClass('selected');
      }

    , selectDate: function(date) {
        if (typeof(date) == "undefined") {
          date = this.parse(this.$el.val());
        };
        if (!date) date = new Date();

          this.selectedDate = date;
          this.selectedDateStr = this.format(this.selectedDate);
          this.selectMonth(this.selectedDate);
      }

    , update: function(s) {
        this.$el.val(s).change();
      }

    , show: function(e) {
        e && e.stopPropagation();

        // Hide all other datepickers.
        clearDatePickers(this);

        var offset = this.$el.offset();

        this.$picker.css({
          top: offset.top + this.$el.outerHeight() + 2,
          left: offset.left
        }).show();

        $('html').on('keydown', this.keyHandler);
      }

    , hide: function() {
        this.$picker.hide();
        $('html').off('keydown', this.keyHandler);
      }

    , keyHandler: function(e) {
        // Keyboard navigation shortcuts.
        switch (e.keyCode)
        {
          case 9: 
          case 27: 
            // Tab or escape hides the datepicker. In this case, just return
            // instead of breaking, so that the e doesn't get stopped.
            this.hide(); return;
          case 13: 
            // Enter selects the currently highlighted date.
            this.update(this.selectedDateStr); this.hide(); break;
          case 38: 
            // Arrow up goes to prev week.
            this.ahead(0, -7); break;
          case 40: 
            // Arrow down goes to next week.
            this.ahead(0, 7); break;
          case 37: 
            // Arrow left goes to prev day.
            this.ahead(0, -1); break;
          case 39: 
            // Arrow right goes to next day.
            this.ahead(0, 1); break;
          default:
            return;
        }
        e.preventDefault();
      }

    , parse: function(s) {
        // Parse a partial RFC 3339 string into a Date.
        var m;
        if ((m = s.match(/^(\d{4,4})-(\d{2,2})-(\d{2,2})$/))) {
          return new Date(m[1], m[2] - 1, m[3]);
        } else {
          return null;
        }
      }

    , format: function(date) {
        // Format a Date into a string as specified by RFC 3339.
        var month = (date.getMonth() + 1).toString(),
            dom = date.getDate().toString();
        if (month.length === 1) {
          month = '0' + month;
        }
        if (dom.length === 1) {
          dom = '0' + dom;
        }
        return date.getFullYear() + '-' + month + "-" + dom;
      }

    , ahead: function(months, days) {
        // Move ahead ``months`` months and ``days`` days, both integers, can be
        // negative.
        this.selectDate(new Date(this.selectedDate.getFullYear(),
                                 this.selectedDate.getMonth() + months,
                                 this.selectedDate.getDate() + days));
      }

    , proxy: function(meth) {
        // Bind a method so that it always gets the datepicker instance for
        // ``this``. Return ``this`` so chaining calls works.
        this[meth] = $.proxy(this[meth], this);
        return this;
      }

    , daysBetween: function(start, end) {
        // Return number of days between ``start`` Date object and ``end``.
        var start = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
        var end = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
        return (end - start) / 86400000;
      }

    , findClosest: function(dow, date, direction) {
        // From a starting date, find the first day ahead of behind it that is
        // a given day of the week.
        var difference = direction * (Math.abs(date.getDay() - dow - (direction * 7)) % 7);
        return new Date(date.getFullYear(), date.getMonth(), date.getDate() + difference);
      }

    , rangeStart: function(date) {
        // Get the first day to show in the current calendar view.
        return this.findClosest(this.startOfWeek,
                                new Date(date.getFullYear(), date.getMonth()),
                                -1);
      }

    , rangeEnd: function(date) {
        // Get the last day to show in the current calendar view.
        return this.findClosest((this.startOfWeek - 1) % 7,
                                new Date(date.getFullYear(), date.getMonth() + 1, 0),
                                1);
      }
  };
  
  /* DATEPICKER PLUGIN DEFINITION
   * ============================ */

  $.fn.datepicker = function( options ) {
    return this.each(function() { new DatePicker(this, options); });
  };

  $(function() {
    $(selector).datepicker();
    $('html').click(clearDatePickers);
  });

  $.fn.datepicker.DatePicker = DatePicker;

  $.fn.datepicker.defaults = {
    monthNames: ["January", "February", "March", "April", "May", "June",
                 "July", "August", "September", "October", "November", "December"]
  , shortDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  , startOfWeek: 1
  };
}( window.jQuery || window.ender );
// French localized datepicker for bootstrap
$.fn.datepicker.defaults_fr = {
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
                 "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"]
  , shortDayNames: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"]
  , startOfWeek: 1
  };

$.fn.datepicker.defaults_fr_CA = $.fn.datepicker.defaults_fr; // For french-canadian locale
;
// Portuguese localized datepicker for bootstrap
$.fn.datepicker.defaults_pt = {
    monthNames: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
                 "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
    shortDayNames: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
    startOfWeek: 1
  };

$.fn.datepicker.defaults_pt_BR = $.fn.datepicker.defaults_pt; // For brazilian-portuguese locale
;
// Spanish localized datepicker for bootstrap
$.fn.datepicker.defaults_es = {
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                 "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    shortDayNames: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    startOfWeek: 1
  };
window['CKEDITOR_BASEPATH'] = "/assets/ckeditor/";

window.CKEDITOR_ASSETS_MAPPING = {
  "monologue/admin/ckeditor-config.js": "/assets/monologue/admin/ckeditor-config.js",
  "ckeditor/application.js": "/assets/ckeditor/application.js",
  "ckeditor/config.js": "/assets/ckeditor/config.js",
  "ckeditor/filebrowser/images/gal_add.jpg": "/assets/ckeditor/filebrowser/images/gal_add.jpg",
  "ckeditor/filebrowser/images/gal_add.png": "/assets/ckeditor/filebrowser/images/gal_add.png",
  "ckeditor/filebrowser/images/gal_del.png": "/assets/ckeditor/filebrowser/images/gal_del.png",
  "ckeditor/filebrowser/images/gal_more.gif": "/assets/ckeditor/filebrowser/images/gal_more.gif",
  "ckeditor/filebrowser/images/preloader.gif": "/assets/ckeditor/filebrowser/images/preloader.gif",
  "ckeditor/filebrowser/images/thumbs/avi.gif": "/assets/ckeditor/filebrowser/images/thumbs/avi.gif",
  "ckeditor/filebrowser/images/thumbs/ckfnothumb.gif": "/assets/ckeditor/filebrowser/images/thumbs/ckfnothumb.gif",
  "ckeditor/filebrowser/images/thumbs/doc.gif": "/assets/ckeditor/filebrowser/images/thumbs/doc.gif",
  "ckeditor/filebrowser/images/thumbs/docx.gif": "/assets/ckeditor/filebrowser/images/thumbs/docx.gif",
  "ckeditor/filebrowser/images/thumbs/exe.gif": "/assets/ckeditor/filebrowser/images/thumbs/exe.gif",
  "ckeditor/filebrowser/images/thumbs/gz.gif": "/assets/ckeditor/filebrowser/images/thumbs/gz.gif",
  "ckeditor/filebrowser/images/thumbs/htm.gif": "/assets/ckeditor/filebrowser/images/thumbs/htm.gif",
  "ckeditor/filebrowser/images/thumbs/jpg.gif": "/assets/ckeditor/filebrowser/images/thumbs/jpg.gif",
  "ckeditor/filebrowser/images/thumbs/mp3.gif": "/assets/ckeditor/filebrowser/images/thumbs/mp3.gif",
  "ckeditor/filebrowser/images/thumbs/mpg.gif": "/assets/ckeditor/filebrowser/images/thumbs/mpg.gif",
  "ckeditor/filebrowser/images/thumbs/pdf.gif": "/assets/ckeditor/filebrowser/images/thumbs/pdf.gif",
  "ckeditor/filebrowser/images/thumbs/psd.gif": "/assets/ckeditor/filebrowser/images/thumbs/psd.gif",
  "ckeditor/filebrowser/images/thumbs/rar.gif": "/assets/ckeditor/filebrowser/images/thumbs/rar.gif",
  "ckeditor/filebrowser/images/thumbs/swf.gif": "/assets/ckeditor/filebrowser/images/thumbs/swf.gif",
  "ckeditor/filebrowser/images/thumbs/tar.gif": "/assets/ckeditor/filebrowser/images/thumbs/tar.gif",
  "ckeditor/filebrowser/images/thumbs/txt.gif": "/assets/ckeditor/filebrowser/images/thumbs/txt.gif",
  "ckeditor/filebrowser/images/thumbs/unknown.gif": "/assets/ckeditor/filebrowser/images/thumbs/unknown.gif",
  "ckeditor/filebrowser/images/thumbs/wmv.gif": "/assets/ckeditor/filebrowser/images/thumbs/wmv.gif",
  "ckeditor/filebrowser/images/thumbs/xls.gif": "/assets/ckeditor/filebrowser/images/thumbs/xls.gif",
  "ckeditor/filebrowser/images/thumbs/xlsx.gif": "/assets/ckeditor/filebrowser/images/thumbs/xlsx.gif",
  "ckeditor/filebrowser/images/thumbs/zip.gif": "/assets/ckeditor/filebrowser/images/thumbs/zip.gif",
  "ckeditor/filebrowser/javascripts/application.js": "/assets/ckeditor/filebrowser/javascripts/application.js",
  "ckeditor/filebrowser/javascripts/fileuploader.js": "/assets/ckeditor/filebrowser/javascripts/fileuploader.js",
  "ckeditor/filebrowser/javascripts/jquery.endless-scroll.js": "/assets/ckeditor/filebrowser/javascripts/jquery.endless-scroll.js",
  "ckeditor/filebrowser/javascripts/jquery.min.js": "/assets/ckeditor/filebrowser/javascripts/jquery.min.js",
  "ckeditor/filebrowser/javascripts/jquery.tmpl.min.js": "/assets/ckeditor/filebrowser/javascripts/jquery.tmpl.min.js",
  "ckeditor/filebrowser/javascripts/rails.js": "/assets/ckeditor/filebrowser/javascripts/rails.js",
  "ckeditor/filebrowser/stylesheets/uploader.css": "/assets/ckeditor/filebrowser/stylesheets/uploader.css",
  "ckeditor/init.js": "/assets/ckeditor/init.js",
  "ckeditor/application.css": "/assets/ckeditor/application.css",
  "ckeditor/CHANGES.md": "/assets/ckeditor/CHANGES.md",
  "ckeditor/LICENSE.md": "/assets/ckeditor/LICENSE.md",
  "ckeditor/README.md": "/assets/ckeditor/README.md",
  "ckeditor/adapters/jquery.js": "/assets/ckeditor/adapters/jquery.js",
  "ckeditor/build-config.js": "/assets/ckeditor/build-config.js",
  "ckeditor/ckeditor.js": "/assets/ckeditor/ckeditor.js",
  "ckeditor/contents.css": "/assets/ckeditor/contents.css",
  "ckeditor/lang/af.js": "/assets/ckeditor/lang/af.js",
  "ckeditor/lang/ar.js": "/assets/ckeditor/lang/ar.js",
  "ckeditor/lang/bg.js": "/assets/ckeditor/lang/bg.js",
  "ckeditor/lang/bn.js": "/assets/ckeditor/lang/bn.js",
  "ckeditor/lang/bs.js": "/assets/ckeditor/lang/bs.js",
  "ckeditor/lang/ca.js": "/assets/ckeditor/lang/ca.js",
  "ckeditor/lang/cs.js": "/assets/ckeditor/lang/cs.js",
  "ckeditor/lang/cy.js": "/assets/ckeditor/lang/cy.js",
  "ckeditor/lang/da.js": "/assets/ckeditor/lang/da.js",
  "ckeditor/lang/de.js": "/assets/ckeditor/lang/de.js",
  "ckeditor/lang/el.js": "/assets/ckeditor/lang/el.js",
  "ckeditor/lang/en-au.js": "/assets/ckeditor/lang/en-au.js",
  "ckeditor/lang/en-ca.js": "/assets/ckeditor/lang/en-ca.js",
  "ckeditor/lang/en-gb.js": "/assets/ckeditor/lang/en-gb.js",
  "ckeditor/lang/en.js": "/assets/ckeditor/lang/en.js",
  "ckeditor/lang/eo.js": "/assets/ckeditor/lang/eo.js",
  "ckeditor/lang/es.js": "/assets/ckeditor/lang/es.js",
  "ckeditor/lang/et.js": "/assets/ckeditor/lang/et.js",
  "ckeditor/lang/eu.js": "/assets/ckeditor/lang/eu.js",
  "ckeditor/lang/fa.js": "/assets/ckeditor/lang/fa.js",
  "ckeditor/lang/fi.js": "/assets/ckeditor/lang/fi.js",
  "ckeditor/lang/fo.js": "/assets/ckeditor/lang/fo.js",
  "ckeditor/lang/fr-ca.js": "/assets/ckeditor/lang/fr-ca.js",
  "ckeditor/lang/fr.js": "/assets/ckeditor/lang/fr.js",
  "ckeditor/lang/gl.js": "/assets/ckeditor/lang/gl.js",
  "ckeditor/lang/gu.js": "/assets/ckeditor/lang/gu.js",
  "ckeditor/lang/he.js": "/assets/ckeditor/lang/he.js",
  "ckeditor/lang/hi.js": "/assets/ckeditor/lang/hi.js",
  "ckeditor/lang/hr.js": "/assets/ckeditor/lang/hr.js",
  "ckeditor/lang/hu.js": "/assets/ckeditor/lang/hu.js",
  "ckeditor/lang/id.js": "/assets/ckeditor/lang/id.js",
  "ckeditor/lang/is.js": "/assets/ckeditor/lang/is.js",
  "ckeditor/lang/it.js": "/assets/ckeditor/lang/it.js",
  "ckeditor/lang/ja.js": "/assets/ckeditor/lang/ja.js",
  "ckeditor/lang/ka.js": "/assets/ckeditor/lang/ka.js",
  "ckeditor/lang/km.js": "/assets/ckeditor/lang/km.js",
  "ckeditor/lang/ko.js": "/assets/ckeditor/lang/ko.js",
  "ckeditor/lang/ku.js": "/assets/ckeditor/lang/ku.js",
  "ckeditor/lang/lt.js": "/assets/ckeditor/lang/lt.js",
  "ckeditor/lang/lv.js": "/assets/ckeditor/lang/lv.js",
  "ckeditor/lang/mk.js": "/assets/ckeditor/lang/mk.js",
  "ckeditor/lang/mn.js": "/assets/ckeditor/lang/mn.js",
  "ckeditor/lang/ms.js": "/assets/ckeditor/lang/ms.js",
  "ckeditor/lang/nb.js": "/assets/ckeditor/lang/nb.js",
  "ckeditor/lang/nl.js": "/assets/ckeditor/lang/nl.js",
  "ckeditor/lang/no.js": "/assets/ckeditor/lang/no.js",
  "ckeditor/lang/pl.js": "/assets/ckeditor/lang/pl.js",
  "ckeditor/lang/pt-br.js": "/assets/ckeditor/lang/pt-br.js",
  "ckeditor/lang/pt.js": "/assets/ckeditor/lang/pt.js",
  "ckeditor/lang/ro.js": "/assets/ckeditor/lang/ro.js",
  "ckeditor/lang/ru.js": "/assets/ckeditor/lang/ru.js",
  "ckeditor/lang/si.js": "/assets/ckeditor/lang/si.js",
  "ckeditor/lang/sk.js": "/assets/ckeditor/lang/sk.js",
  "ckeditor/lang/sl.js": "/assets/ckeditor/lang/sl.js",
  "ckeditor/lang/sq.js": "/assets/ckeditor/lang/sq.js",
  "ckeditor/lang/sr-latn.js": "/assets/ckeditor/lang/sr-latn.js",
  "ckeditor/lang/sr.js": "/assets/ckeditor/lang/sr.js",
  "ckeditor/lang/sv.js": "/assets/ckeditor/lang/sv.js",
  "ckeditor/lang/th.js": "/assets/ckeditor/lang/th.js",
  "ckeditor/lang/tr.js": "/assets/ckeditor/lang/tr.js",
  "ckeditor/lang/ug.js": "/assets/ckeditor/lang/ug.js",
  "ckeditor/lang/uk.js": "/assets/ckeditor/lang/uk.js",
  "ckeditor/lang/vi.js": "/assets/ckeditor/lang/vi.js",
  "ckeditor/lang/zh-cn.js": "/assets/ckeditor/lang/zh-cn.js",
  "ckeditor/lang/zh.js": "/assets/ckeditor/lang/zh.js",
  "ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/a11yhelp.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/_translationstatus.txt": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/_translationstatus.txt",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ar.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ar.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/bg.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/bg.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ca.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ca.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/cs.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/cs.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/cy.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/cy.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/da.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/da.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/de.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/de.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/el.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/el.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/en-gb.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/en-gb.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/en.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/en.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/eo.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/eo.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/es.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/es.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/et.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/et.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/fa.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/fa.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/fi.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/fi.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/fr-ca.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/fr-ca.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/fr.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/fr.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/gl.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/gl.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/gu.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/gu.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/he.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/he.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/hi.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/hi.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/hr.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/hr.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/hu.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/hu.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/id.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/id.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/it.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/it.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ja.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ja.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/km.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/km.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ko.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ko.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ku.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ku.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/lt.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/lt.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/lv.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/lv.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/mk.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/mk.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/mn.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/mn.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/nb.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/nb.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/nl.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/nl.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/no.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/no.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/pl.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/pl.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/pt-br.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/pt-br.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/pt.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/pt.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ro.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ro.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ru.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ru.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/si.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/si.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sk.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sk.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sl.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sl.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sq.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sq.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sr-latn.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sr-latn.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sr.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sr.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/sv.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/sv.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/th.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/th.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/tr.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/tr.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/ug.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/ug.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/uk.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/uk.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/vi.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/vi.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/zh-cn.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/zh-cn.js",
  "ckeditor/plugins/a11yhelp/dialogs/lang/zh.js": "/assets/ckeditor/plugins/a11yhelp/dialogs/lang/zh.js",
  "ckeditor/plugins/about/dialogs/about.js": "/assets/ckeditor/plugins/about/dialogs/about.js",
  "ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png": "/assets/ckeditor/plugins/about/dialogs/hidpi/logo_ckeditor.png",
  "ckeditor/plugins/about/dialogs/logo_ckeditor.png": "/assets/ckeditor/plugins/about/dialogs/logo_ckeditor.png",
  "ckeditor/plugins/clipboard/dialogs/paste.js": "/assets/ckeditor/plugins/clipboard/dialogs/paste.js",
  "ckeditor/plugins/colordialog/dialogs/colordialog.js": "/assets/ckeditor/plugins/colordialog/dialogs/colordialog.js",
  "ckeditor/plugins/dialog/dialogDefinition.js": "/assets/ckeditor/plugins/dialog/dialogDefinition.js",
  "ckeditor/plugins/div/dialogs/div.js": "/assets/ckeditor/plugins/div/dialogs/div.js",
  "ckeditor/plugins/fakeobjects/images/spacer.gif": "/assets/ckeditor/plugins/fakeobjects/images/spacer.gif",
  "ckeditor/plugins/find/dialogs/find.js": "/assets/ckeditor/plugins/find/dialogs/find.js",
  "ckeditor/plugins/flash/dialogs/flash.js": "/assets/ckeditor/plugins/flash/dialogs/flash.js",
  "ckeditor/plugins/flash/images/placeholder.png": "/assets/ckeditor/plugins/flash/images/placeholder.png",
  "ckeditor/plugins/forms/dialogs/button.js": "/assets/ckeditor/plugins/forms/dialogs/button.js",
  "ckeditor/plugins/forms/dialogs/checkbox.js": "/assets/ckeditor/plugins/forms/dialogs/checkbox.js",
  "ckeditor/plugins/forms/dialogs/form.js": "/assets/ckeditor/plugins/forms/dialogs/form.js",
  "ckeditor/plugins/forms/dialogs/hiddenfield.js": "/assets/ckeditor/plugins/forms/dialogs/hiddenfield.js",
  "ckeditor/plugins/forms/dialogs/radio.js": "/assets/ckeditor/plugins/forms/dialogs/radio.js",
  "ckeditor/plugins/forms/dialogs/select.js": "/assets/ckeditor/plugins/forms/dialogs/select.js",
  "ckeditor/plugins/forms/dialogs/textarea.js": "/assets/ckeditor/plugins/forms/dialogs/textarea.js",
  "ckeditor/plugins/forms/dialogs/textfield.js": "/assets/ckeditor/plugins/forms/dialogs/textfield.js",
  "ckeditor/plugins/forms/images/hiddenfield.gif": "/assets/ckeditor/plugins/forms/images/hiddenfield.gif",
  "ckeditor/plugins/icons.png": "/assets/ckeditor/plugins/icons.png",
  "ckeditor/plugins/icons_hidpi.png": "/assets/ckeditor/plugins/icons_hidpi.png",
  "ckeditor/plugins/iframe/dialogs/iframe.js": "/assets/ckeditor/plugins/iframe/dialogs/iframe.js",
  "ckeditor/plugins/iframe/images/placeholder.png": "/assets/ckeditor/plugins/iframe/images/placeholder.png",
  "ckeditor/plugins/image/dialogs/image.js": "/assets/ckeditor/plugins/image/dialogs/image.js",
  "ckeditor/plugins/image/images/noimage.png": "/assets/ckeditor/plugins/image/images/noimage.png",
  "ckeditor/plugins/link/dialogs/anchor.js": "/assets/ckeditor/plugins/link/dialogs/anchor.js",
  "ckeditor/plugins/link/dialogs/link.js": "/assets/ckeditor/plugins/link/dialogs/link.js",
  "ckeditor/plugins/link/images/anchor.png": "/assets/ckeditor/plugins/link/images/anchor.png",
  "ckeditor/plugins/link/images/hidpi/anchor.png": "/assets/ckeditor/plugins/link/images/hidpi/anchor.png",
  "ckeditor/plugins/liststyle/dialogs/liststyle.js": "/assets/ckeditor/plugins/liststyle/dialogs/liststyle.js",
  "ckeditor/plugins/magicline/images/hidpi/icon.png": "/assets/ckeditor/plugins/magicline/images/hidpi/icon.png",
  "ckeditor/plugins/magicline/images/icon.png": "/assets/ckeditor/plugins/magicline/images/icon.png",
  "ckeditor/plugins/pagebreak/images/pagebreak.gif": "/assets/ckeditor/plugins/pagebreak/images/pagebreak.gif",
  "ckeditor/plugins/pastefromword/filter/default.js": "/assets/ckeditor/plugins/pastefromword/filter/default.js",
  "ckeditor/plugins/preview/preview.html": "/assets/ckeditor/plugins/preview/preview.html",
  "ckeditor/plugins/scayt/LICENSE.md": "/assets/ckeditor/plugins/scayt/LICENSE.md",
  "ckeditor/plugins/scayt/README.md": "/assets/ckeditor/plugins/scayt/README.md",
  "ckeditor/plugins/scayt/dialogs/options.js": "/assets/ckeditor/plugins/scayt/dialogs/options.js",
  "ckeditor/plugins/scayt/dialogs/toolbar.css": "/assets/ckeditor/plugins/scayt/dialogs/toolbar.css",
  "ckeditor/plugins/showblocks/images/block_address.png": "/assets/ckeditor/plugins/showblocks/images/block_address.png",
  "ckeditor/plugins/showblocks/images/block_blockquote.png": "/assets/ckeditor/plugins/showblocks/images/block_blockquote.png",
  "ckeditor/plugins/showblocks/images/block_div.png": "/assets/ckeditor/plugins/showblocks/images/block_div.png",
  "ckeditor/plugins/showblocks/images/block_h1.png": "/assets/ckeditor/plugins/showblocks/images/block_h1.png",
  "ckeditor/plugins/showblocks/images/block_h2.png": "/assets/ckeditor/plugins/showblocks/images/block_h2.png",
  "ckeditor/plugins/showblocks/images/block_h3.png": "/assets/ckeditor/plugins/showblocks/images/block_h3.png",
  "ckeditor/plugins/showblocks/images/block_h4.png": "/assets/ckeditor/plugins/showblocks/images/block_h4.png",
  "ckeditor/plugins/showblocks/images/block_h5.png": "/assets/ckeditor/plugins/showblocks/images/block_h5.png",
  "ckeditor/plugins/showblocks/images/block_h6.png": "/assets/ckeditor/plugins/showblocks/images/block_h6.png",
  "ckeditor/plugins/showblocks/images/block_p.png": "/assets/ckeditor/plugins/showblocks/images/block_p.png",
  "ckeditor/plugins/showblocks/images/block_pre.png": "/assets/ckeditor/plugins/showblocks/images/block_pre.png",
  "ckeditor/plugins/smiley/dialogs/smiley.js": "/assets/ckeditor/plugins/smiley/dialogs/smiley.js",
  "ckeditor/plugins/smiley/images/angel_smile.gif": "/assets/ckeditor/plugins/smiley/images/angel_smile.gif",
  "ckeditor/plugins/smiley/images/angel_smile.png": "/assets/ckeditor/plugins/smiley/images/angel_smile.png",
  "ckeditor/plugins/smiley/images/angry_smile.gif": "/assets/ckeditor/plugins/smiley/images/angry_smile.gif",
  "ckeditor/plugins/smiley/images/angry_smile.png": "/assets/ckeditor/plugins/smiley/images/angry_smile.png",
  "ckeditor/plugins/smiley/images/broken_heart.gif": "/assets/ckeditor/plugins/smiley/images/broken_heart.gif",
  "ckeditor/plugins/smiley/images/broken_heart.png": "/assets/ckeditor/plugins/smiley/images/broken_heart.png",
  "ckeditor/plugins/smiley/images/confused_smile.gif": "/assets/ckeditor/plugins/smiley/images/confused_smile.gif",
  "ckeditor/plugins/smiley/images/confused_smile.png": "/assets/ckeditor/plugins/smiley/images/confused_smile.png",
  "ckeditor/plugins/smiley/images/cry_smile.gif": "/assets/ckeditor/plugins/smiley/images/cry_smile.gif",
  "ckeditor/plugins/smiley/images/cry_smile.png": "/assets/ckeditor/plugins/smiley/images/cry_smile.png",
  "ckeditor/plugins/smiley/images/devil_smile.gif": "/assets/ckeditor/plugins/smiley/images/devil_smile.gif",
  "ckeditor/plugins/smiley/images/devil_smile.png": "/assets/ckeditor/plugins/smiley/images/devil_smile.png",
  "ckeditor/plugins/smiley/images/embaressed_smile.gif": "/assets/ckeditor/plugins/smiley/images/embaressed_smile.gif",
  "ckeditor/plugins/smiley/images/embarrassed_smile.gif": "/assets/ckeditor/plugins/smiley/images/embarrassed_smile.gif",
  "ckeditor/plugins/smiley/images/embarrassed_smile.png": "/assets/ckeditor/plugins/smiley/images/embarrassed_smile.png",
  "ckeditor/plugins/smiley/images/envelope.gif": "/assets/ckeditor/plugins/smiley/images/envelope.gif",
  "ckeditor/plugins/smiley/images/envelope.png": "/assets/ckeditor/plugins/smiley/images/envelope.png",
  "ckeditor/plugins/smiley/images/heart.gif": "/assets/ckeditor/plugins/smiley/images/heart.gif",
  "ckeditor/plugins/smiley/images/heart.png": "/assets/ckeditor/plugins/smiley/images/heart.png",
  "ckeditor/plugins/smiley/images/kiss.gif": "/assets/ckeditor/plugins/smiley/images/kiss.gif",
  "ckeditor/plugins/smiley/images/kiss.png": "/assets/ckeditor/plugins/smiley/images/kiss.png",
  "ckeditor/plugins/smiley/images/lightbulb.gif": "/assets/ckeditor/plugins/smiley/images/lightbulb.gif",
  "ckeditor/plugins/smiley/images/lightbulb.png": "/assets/ckeditor/plugins/smiley/images/lightbulb.png",
  "ckeditor/plugins/smiley/images/omg_smile.gif": "/assets/ckeditor/plugins/smiley/images/omg_smile.gif",
  "ckeditor/plugins/smiley/images/omg_smile.png": "/assets/ckeditor/plugins/smiley/images/omg_smile.png",
  "ckeditor/plugins/smiley/images/regular_smile.gif": "/assets/ckeditor/plugins/smiley/images/regular_smile.gif",
  "ckeditor/plugins/smiley/images/regular_smile.png": "/assets/ckeditor/plugins/smiley/images/regular_smile.png",
  "ckeditor/plugins/smiley/images/sad_smile.gif": "/assets/ckeditor/plugins/smiley/images/sad_smile.gif",
  "ckeditor/plugins/smiley/images/sad_smile.png": "/assets/ckeditor/plugins/smiley/images/sad_smile.png",
  "ckeditor/plugins/smiley/images/shades_smile.gif": "/assets/ckeditor/plugins/smiley/images/shades_smile.gif",
  "ckeditor/plugins/smiley/images/shades_smile.png": "/assets/ckeditor/plugins/smiley/images/shades_smile.png",
  "ckeditor/plugins/smiley/images/teeth_smile.gif": "/assets/ckeditor/plugins/smiley/images/teeth_smile.gif",
  "ckeditor/plugins/smiley/images/teeth_smile.png": "/assets/ckeditor/plugins/smiley/images/teeth_smile.png",
  "ckeditor/plugins/smiley/images/thumbs_down.gif": "/assets/ckeditor/plugins/smiley/images/thumbs_down.gif",
  "ckeditor/plugins/smiley/images/thumbs_down.png": "/assets/ckeditor/plugins/smiley/images/thumbs_down.png",
  "ckeditor/plugins/smiley/images/thumbs_up.gif": "/assets/ckeditor/plugins/smiley/images/thumbs_up.gif",
  "ckeditor/plugins/smiley/images/thumbs_up.png": "/assets/ckeditor/plugins/smiley/images/thumbs_up.png",
  "ckeditor/plugins/smiley/images/tongue_smile.gif": "/assets/ckeditor/plugins/smiley/images/tongue_smile.gif",
  "ckeditor/plugins/smiley/images/tongue_smile.png": "/assets/ckeditor/plugins/smiley/images/tongue_smile.png",
  "ckeditor/plugins/smiley/images/tounge_smile.gif": "/assets/ckeditor/plugins/smiley/images/tounge_smile.gif",
  "ckeditor/plugins/smiley/images/whatchutalkingabout_smile.gif": "/assets/ckeditor/plugins/smiley/images/whatchutalkingabout_smile.gif",
  "ckeditor/plugins/smiley/images/whatchutalkingabout_smile.png": "/assets/ckeditor/plugins/smiley/images/whatchutalkingabout_smile.png",
  "ckeditor/plugins/smiley/images/wink_smile.gif": "/assets/ckeditor/plugins/smiley/images/wink_smile.gif",
  "ckeditor/plugins/smiley/images/wink_smile.png": "/assets/ckeditor/plugins/smiley/images/wink_smile.png",
  "ckeditor/plugins/specialchar/dialogs/lang/_translationstatus.txt": "/assets/ckeditor/plugins/specialchar/dialogs/lang/_translationstatus.txt",
  "ckeditor/plugins/specialchar/dialogs/lang/ar.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ar.js",
  "ckeditor/plugins/specialchar/dialogs/lang/bg.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/bg.js",
  "ckeditor/plugins/specialchar/dialogs/lang/ca.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ca.js",
  "ckeditor/plugins/specialchar/dialogs/lang/cs.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/cs.js",
  "ckeditor/plugins/specialchar/dialogs/lang/cy.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/cy.js",
  "ckeditor/plugins/specialchar/dialogs/lang/de.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/de.js",
  "ckeditor/plugins/specialchar/dialogs/lang/el.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/el.js",
  "ckeditor/plugins/specialchar/dialogs/lang/en-gb.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/en-gb.js",
  "ckeditor/plugins/specialchar/dialogs/lang/en.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/en.js",
  "ckeditor/plugins/specialchar/dialogs/lang/eo.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/eo.js",
  "ckeditor/plugins/specialchar/dialogs/lang/es.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/es.js",
  "ckeditor/plugins/specialchar/dialogs/lang/et.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/et.js",
  "ckeditor/plugins/specialchar/dialogs/lang/fa.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/fa.js",
  "ckeditor/plugins/specialchar/dialogs/lang/fi.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/fi.js",
  "ckeditor/plugins/specialchar/dialogs/lang/fr-ca.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/fr-ca.js",
  "ckeditor/plugins/specialchar/dialogs/lang/fr.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/fr.js",
  "ckeditor/plugins/specialchar/dialogs/lang/gl.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/gl.js",
  "ckeditor/plugins/specialchar/dialogs/lang/he.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/he.js",
  "ckeditor/plugins/specialchar/dialogs/lang/hr.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/hr.js",
  "ckeditor/plugins/specialchar/dialogs/lang/hu.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/hu.js",
  "ckeditor/plugins/specialchar/dialogs/lang/id.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/id.js",
  "ckeditor/plugins/specialchar/dialogs/lang/it.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/it.js",
  "ckeditor/plugins/specialchar/dialogs/lang/ja.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ja.js",
  "ckeditor/plugins/specialchar/dialogs/lang/km.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/km.js",
  "ckeditor/plugins/specialchar/dialogs/lang/ku.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ku.js",
  "ckeditor/plugins/specialchar/dialogs/lang/lv.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/lv.js",
  "ckeditor/plugins/specialchar/dialogs/lang/nb.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/nb.js",
  "ckeditor/plugins/specialchar/dialogs/lang/nl.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/nl.js",
  "ckeditor/plugins/specialchar/dialogs/lang/no.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/no.js",
  "ckeditor/plugins/specialchar/dialogs/lang/pl.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/pl.js",
  "ckeditor/plugins/specialchar/dialogs/lang/pt-br.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/pt-br.js",
  "ckeditor/plugins/specialchar/dialogs/lang/pt.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/pt.js",
  "ckeditor/plugins/specialchar/dialogs/lang/ru.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ru.js",
  "ckeditor/plugins/specialchar/dialogs/lang/si.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/si.js",
  "ckeditor/plugins/specialchar/dialogs/lang/sk.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/sk.js",
  "ckeditor/plugins/specialchar/dialogs/lang/sl.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/sl.js",
  "ckeditor/plugins/specialchar/dialogs/lang/sq.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/sq.js",
  "ckeditor/plugins/specialchar/dialogs/lang/sv.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/sv.js",
  "ckeditor/plugins/specialchar/dialogs/lang/th.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/th.js",
  "ckeditor/plugins/specialchar/dialogs/lang/tr.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/tr.js",
  "ckeditor/plugins/specialchar/dialogs/lang/ug.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/ug.js",
  "ckeditor/plugins/specialchar/dialogs/lang/uk.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/uk.js",
  "ckeditor/plugins/specialchar/dialogs/lang/vi.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/vi.js",
  "ckeditor/plugins/specialchar/dialogs/lang/zh-cn.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/zh-cn.js",
  "ckeditor/plugins/specialchar/dialogs/lang/zh.js": "/assets/ckeditor/plugins/specialchar/dialogs/lang/zh.js",
  "ckeditor/plugins/specialchar/dialogs/specialchar.js": "/assets/ckeditor/plugins/specialchar/dialogs/specialchar.js",
  "ckeditor/plugins/table/dialogs/table.js": "/assets/ckeditor/plugins/table/dialogs/table.js",
  "ckeditor/plugins/tabletools/dialogs/tableCell.js": "/assets/ckeditor/plugins/tabletools/dialogs/tableCell.js",
  "ckeditor/plugins/templates/dialogs/templates.css": "/assets/ckeditor/plugins/templates/dialogs/templates.css",
  "ckeditor/plugins/templates/dialogs/templates.js": "/assets/ckeditor/plugins/templates/dialogs/templates.js",
  "ckeditor/plugins/templates/templates/default.js": "/assets/ckeditor/plugins/templates/templates/default.js",
  "ckeditor/plugins/templates/templates/images/template1.gif": "/assets/ckeditor/plugins/templates/templates/images/template1.gif",
  "ckeditor/plugins/templates/templates/images/template2.gif": "/assets/ckeditor/plugins/templates/templates/images/template2.gif",
  "ckeditor/plugins/templates/templates/images/template3.gif": "/assets/ckeditor/plugins/templates/templates/images/template3.gif",
  "ckeditor/plugins/wsc/LICENSE.md": "/assets/ckeditor/plugins/wsc/LICENSE.md",
  "ckeditor/plugins/wsc/README.md": "/assets/ckeditor/plugins/wsc/README.md",
  "ckeditor/plugins/wsc/dialogs/ciframe.html": "/assets/ckeditor/plugins/wsc/dialogs/ciframe.html",
  "ckeditor/plugins/wsc/dialogs/tmp.html": "/assets/ckeditor/plugins/wsc/dialogs/tmp.html",
  "ckeditor/plugins/wsc/dialogs/tmpFrameset.html": "/assets/ckeditor/plugins/wsc/dialogs/tmpFrameset.html",
  "ckeditor/plugins/wsc/dialogs/wsc.css": "/assets/ckeditor/plugins/wsc/dialogs/wsc.css",
  "ckeditor/plugins/wsc/dialogs/wsc.js": "/assets/ckeditor/plugins/wsc/dialogs/wsc.js",
  "ckeditor/plugins/wsc/dialogs/wsc_ie.js": "/assets/ckeditor/plugins/wsc/dialogs/wsc_ie.js",
  "ckeditor/skins/moono/dialog.css": "/assets/ckeditor/skins/moono/dialog.css",
  "ckeditor/skins/moono/dialog_ie.css": "/assets/ckeditor/skins/moono/dialog_ie.css",
  "ckeditor/skins/moono/dialog_ie7.css": "/assets/ckeditor/skins/moono/dialog_ie7.css",
  "ckeditor/skins/moono/dialog_ie8.css": "/assets/ckeditor/skins/moono/dialog_ie8.css",
  "ckeditor/skins/moono/dialog_iequirks.css": "/assets/ckeditor/skins/moono/dialog_iequirks.css",
  "ckeditor/skins/moono/dialog_opera.css": "/assets/ckeditor/skins/moono/dialog_opera.css",
  "ckeditor/skins/moono/editor.css": "/assets/ckeditor/skins/moono/editor.css",
  "ckeditor/skins/moono/editor_gecko.css": "/assets/ckeditor/skins/moono/editor_gecko.css",
  "ckeditor/skins/moono/editor_ie.css": "/assets/ckeditor/skins/moono/editor_ie.css",
  "ckeditor/skins/moono/editor_ie7.css": "/assets/ckeditor/skins/moono/editor_ie7.css",
  "ckeditor/skins/moono/editor_ie8.css": "/assets/ckeditor/skins/moono/editor_ie8.css",
  "ckeditor/skins/moono/editor_iequirks.css": "/assets/ckeditor/skins/moono/editor_iequirks.css",
  "ckeditor/skins/moono/icons.png": "/assets/ckeditor/skins/moono/icons.png",
  "ckeditor/skins/moono/icons_hidpi.png": "/assets/ckeditor/skins/moono/icons_hidpi.png",
  "ckeditor/skins/moono/images/arrow.png": "/assets/ckeditor/skins/moono/images/arrow.png",
  "ckeditor/skins/moono/images/close.png": "/assets/ckeditor/skins/moono/images/close.png",
  "ckeditor/skins/moono/images/hidpi/close.png": "/assets/ckeditor/skins/moono/images/hidpi/close.png",
  "ckeditor/skins/moono/images/hidpi/lock-open.png": "/assets/ckeditor/skins/moono/images/hidpi/lock-open.png",
  "ckeditor/skins/moono/images/hidpi/lock.png": "/assets/ckeditor/skins/moono/images/hidpi/lock.png",
  "ckeditor/skins/moono/images/hidpi/refresh.png": "/assets/ckeditor/skins/moono/images/hidpi/refresh.png",
  "ckeditor/skins/moono/images/lock-open.png": "/assets/ckeditor/skins/moono/images/lock-open.png",
  "ckeditor/skins/moono/images/lock.png": "/assets/ckeditor/skins/moono/images/lock.png",
  "ckeditor/skins/moono/images/refresh.png": "/assets/ckeditor/skins/moono/images/refresh.png",
  "ckeditor/skins/moono/readme.md": "/assets/ckeditor/skins/moono/readme.md",
  "ckeditor/styles.js": "/assets/ckeditor/styles.js",
}

window.CKEDITOR_GETURL = function( resource ) {
  // If this is not a full or absolute path.
  if ( resource.indexOf( ':/' ) == -1 && resource.indexOf( '/' ) !== 0 )
    resource = this.basePath + resource;

  // Add the timestamp, except for directories.
  if ( resource.charAt( resource.length - 1 ) != '/'  ){
    var url = resource.match( /^(.*?:\/\/[^\/]*)\/assets\/(.+)/ );
    if(url) resource = (CKEDITOR_ASSETS_MAPPING[url[2]] || '/assets/' + url[2]);
  }

  return resource;
}
;



(function() {
  if (typeof window['CKEDITOR_BASEPATH'] === "undefined" || window['CKEDITOR_BASEPATH'] === null) {
    window['CKEDITOR_BASEPATH'] = "/assets/ckeditor/";
  }
}).call(this);
/*
Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

(function(){if(window.CKEDITOR&&window.CKEDITOR.dom)return;window.CKEDITOR||(window.CKEDITOR=function(){var a={timestamp:"E2PC",version:"4.3.4",revision:"40ccd20",rnd:Math.floor(900*Math.random())+100,_:{pending:[]},status:"unloaded",basePath:function(){var b=window.CKEDITOR_BASEPATH||"";if(!b)for(var e=document.getElementsByTagName("script"),a=0;a<e.length;a++){var d=e[a].src.match(/(^|.*[\\\/])ckeditor(?:_basic)?(?:_source)?.js(?:\?.*)?$/i);if(d){b=d[1];break}}-1==b.indexOf(":/")&&"//"!=b.slice(0,2)&&(b=0===b.indexOf("/")?location.href.match(/^.*?:\/\/[^\/]*/)[0]+
b:location.href.match(/^[^\?]*\/(?:)/)[0]+b);if(!b)throw'The CKEditor installation path could not be automatically detected. Please set the global variable "CKEDITOR_BASEPATH" before creating editor instances.';return b}(),getUrl:function(b){-1==b.indexOf(":/")&&0!==b.indexOf("/")&&(b=this.basePath+b);this.timestamp&&("/"!=b.charAt(b.length-1)&&!/[&?]t=/.test(b))&&(b+=(0<=b.indexOf("?")?"&":"?")+"t="+this.timestamp);return b},domReady:function(){function b(){try{document.addEventListener?(document.removeEventListener("DOMContentLoaded",
b,!1),e()):document.attachEvent&&"complete"===document.readyState&&(document.detachEvent("onreadystatechange",b),e())}catch(a){}}function e(){for(var e;e=a.shift();)e()}var a=[];return function(e){a.push(e);"complete"===document.readyState&&setTimeout(b,1);if(1==a.length)if(document.addEventListener)document.addEventListener("DOMContentLoaded",b,!1),window.addEventListener("load",b,!1);else if(document.attachEvent){document.attachEvent("onreadystatechange",b);window.attachEvent("onload",b);e=!1;try{e=
!window.frameElement}catch(d){}if(document.documentElement.doScroll&&e){var h=function(){try{document.documentElement.doScroll("left")}catch(e){setTimeout(h,1);return}b()};h()}}}}()},d=window.CKEDITOR_GETURL;if(d){var b=a.getUrl;a.getUrl=function(c){return d.call(a,c)||b.call(a,c)}}return a}());
CKEDITOR.event||(CKEDITOR.event=function(){},CKEDITOR.event.implementOn=function(a){var d=CKEDITOR.event.prototype,b;for(b in d)a[b]==void 0&&(a[b]=d[b])},CKEDITOR.event.prototype=function(){function a(a){var e=d(this);return e[a]||(e[a]=new b(a))}var d=function(b){b=b.getPrivate&&b.getPrivate()||b._||(b._={});return b.events||(b.events={})},b=function(b){this.name=b;this.listeners=[]};b.prototype={getListenerIndex:function(b){for(var e=0,a=this.listeners;e<a.length;e++)if(a[e].fn==b)return e;return-1}};
return{define:function(b,e){var i=a.call(this,b);CKEDITOR.tools.extend(i,e,true)},on:function(b,e,i,d,l){function h(a,f,o,s){a={name:b,sender:this,editor:a,data:f,listenerData:d,stop:o,cancel:s,removeListener:k};return e.call(i,a)===false?false:a.data}function k(){s.removeListener(b,e)}var o=a.call(this,b);if(o.getListenerIndex(e)<0){o=o.listeners;i||(i=this);isNaN(l)&&(l=10);var s=this;h.fn=e;h.priority=l;for(var q=o.length-1;q>=0;q--)if(o[q].priority<=l){o.splice(q+1,0,h);return{removeListener:k}}o.unshift(h)}return{removeListener:k}},
once:function(){var b=arguments[1];arguments[1]=function(e){e.removeListener();return b.apply(this,arguments)};return this.on.apply(this,arguments)},capture:function(){CKEDITOR.event.useCapture=1;var b=this.on.apply(this,arguments);CKEDITOR.event.useCapture=0;return b},fire:function(){var b=0,e=function(){b=1},a=0,g=function(){a=1};return function(l,h,k){var o=d(this)[l],l=b,s=a;b=a=0;if(o){var q=o.listeners;if(q.length)for(var q=q.slice(0),u,f=0;f<q.length;f++){if(o.errorProof)try{u=q[f].call(this,
k,h,e,g)}catch(p){}else u=q[f].call(this,k,h,e,g);u===false?a=1:typeof u!="undefined"&&(h=u);if(b||a)break}}h=a?false:typeof h=="undefined"?true:h;b=l;a=s;return h}}(),fireOnce:function(b,e,a){e=this.fire(b,e,a);delete d(this)[b];return e},removeListener:function(b,e){var a=d(this)[b];if(a){var g=a.getListenerIndex(e);g>=0&&a.listeners.splice(g,1)}},removeAllListeners:function(){var b=d(this),e;for(e in b)delete b[e]},hasListeners:function(b){return(b=d(this)[b])&&b.listeners.length>0}}}());
CKEDITOR.editor||(CKEDITOR.editor=function(){CKEDITOR._.pending.push([this,arguments]);CKEDITOR.event.call(this)},CKEDITOR.editor.prototype.fire=function(a,d){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fire.call(this,a,d,this)},CKEDITOR.editor.prototype.fireOnce=function(a,d){a in{instanceReady:1,loaded:1}&&(this[a]=true);return CKEDITOR.event.prototype.fireOnce.call(this,a,d,this)},CKEDITOR.event.implementOn(CKEDITOR.editor.prototype));
CKEDITOR.env||(CKEDITOR.env=function(){var a=navigator.userAgent.toLowerCase(),d=window.opera,b={ie:a.indexOf("trident/")>-1,opera:!!d&&d.version,webkit:a.indexOf(" applewebkit/")>-1,air:a.indexOf(" adobeair/")>-1,mac:a.indexOf("macintosh")>-1,quirks:document.compatMode=="BackCompat"&&(!document.documentMode||document.documentMode<10),mobile:a.indexOf("mobile")>-1,iOS:/(ipad|iphone|ipod)/.test(a),isCustomDomain:function(){if(!this.ie)return false;var b=document.domain,e=window.location.hostname;return b!=
e&&b!="["+e+"]"},secure:location.protocol=="https:"};b.gecko=navigator.product=="Gecko"&&!b.webkit&&!b.opera&&!b.ie;if(b.webkit)a.indexOf("chrome")>-1?b.chrome=true:b.safari=true;var c=0;if(b.ie){c=b.quirks||!document.documentMode?parseFloat(a.match(/msie (\d+)/)[1]):document.documentMode;b.ie9Compat=c==9;b.ie8Compat=c==8;b.ie7Compat=c==7;b.ie6Compat=c<7||b.quirks}if(b.gecko){var e=a.match(/rv:([\d\.]+)/);if(e){e=e[1].split(".");c=e[0]*1E4+(e[1]||0)*100+(e[2]||0)*1}}b.opera&&(c=parseFloat(d.version()));
b.air&&(c=parseFloat(a.match(/ adobeair\/(\d+)/)[1]));b.webkit&&(c=parseFloat(a.match(/ applewebkit\/(\d+)/)[1]));b.version=c;b.isCompatible=b.iOS&&c>=534||!b.mobile&&(b.ie&&c>6||b.gecko&&c>=10801||b.opera&&c>=9.5||b.air&&c>=1||b.webkit&&c>=522||false);b.hidpi=window.devicePixelRatio>=2;b.needsBrFiller=b.gecko||b.webkit||b.ie&&c>10;b.needsNbspFiller=b.ie&&c<11;b.cssClass="cke_browser_"+(b.ie?"ie":b.gecko?"gecko":b.opera?"opera":b.webkit?"webkit":"unknown");if(b.quirks)b.cssClass=b.cssClass+" cke_browser_quirks";
if(b.ie){b.cssClass=b.cssClass+(" cke_browser_ie"+(b.quirks||b.version<7?"6":b.version));if(b.quirks)b.cssClass=b.cssClass+" cke_browser_iequirks"}if(b.gecko)if(c<10900)b.cssClass=b.cssClass+" cke_browser_gecko18";else if(c<=11E3)b.cssClass=b.cssClass+" cke_browser_gecko19";if(b.air)b.cssClass=b.cssClass+" cke_browser_air";if(b.iOS)b.cssClass=b.cssClass+" cke_browser_ios";if(b.hidpi)b.cssClass=b.cssClass+" cke_hidpi";return b}());
"unloaded"==CKEDITOR.status&&function(){CKEDITOR.event.implementOn(CKEDITOR);CKEDITOR.loadFullCore=function(){if(CKEDITOR.status!="basic_ready")CKEDITOR.loadFullCore._load=1;else{delete CKEDITOR.loadFullCore;var a=document.createElement("script");a.type="text/javascript";a.src=CKEDITOR.basePath+"ckeditor.js";document.getElementsByTagName("head")[0].appendChild(a)}};CKEDITOR.loadFullCoreTimeout=0;CKEDITOR.add=function(a){(this._.pending||(this._.pending=[])).push(a)};(function(){CKEDITOR.domReady(function(){var a=
CKEDITOR.loadFullCore,d=CKEDITOR.loadFullCoreTimeout;if(a){CKEDITOR.status="basic_ready";a&&a._load?a():d&&setTimeout(function(){CKEDITOR.loadFullCore&&CKEDITOR.loadFullCore()},d*1E3)}})})();CKEDITOR.status="basic_loaded"}();CKEDITOR.dom={};
(function(){var a=[],d=CKEDITOR.env.gecko?"-moz-":CKEDITOR.env.webkit?"-webkit-":CKEDITOR.env.opera?"-o-":CKEDITOR.env.ie?"-ms-":"";CKEDITOR.on("reset",function(){a=[]});CKEDITOR.tools={arrayCompare:function(b,a){if(!b&&!a)return true;if(!b||!a||b.length!=a.length)return false;for(var e=0;e<b.length;e++)if(b[e]!=a[e])return false;return true},clone:function(b){var a;if(b&&b instanceof Array){a=[];for(var e=0;e<b.length;e++)a[e]=CKEDITOR.tools.clone(b[e]);return a}if(b===null||typeof b!="object"||
b instanceof String||b instanceof Number||b instanceof Boolean||b instanceof Date||b instanceof RegExp)return b;a=new b.constructor;for(e in b)a[e]=CKEDITOR.tools.clone(b[e]);return a},capitalize:function(b,a){return b.charAt(0).toUpperCase()+(a?b.slice(1):b.slice(1).toLowerCase())},extend:function(b){var a=arguments.length,e,i;if(typeof(e=arguments[a-1])=="boolean")a--;else if(typeof(e=arguments[a-2])=="boolean"){i=arguments[a-1];a=a-2}for(var d=1;d<a;d++){var l=arguments[d],h;for(h in l)if(e===
true||b[h]==void 0)if(!i||h in i)b[h]=l[h]}return b},prototypedCopy:function(b){var a=function(){};a.prototype=b;return new a},copy:function(b){var a={},e;for(e in b)a[e]=b[e];return a},isArray:function(b){return Object.prototype.toString.call(b)=="[object Array]"},isEmpty:function(b){for(var a in b)if(b.hasOwnProperty(a))return false;return true},cssVendorPrefix:function(b,a,e){if(e)return d+b+":"+a+";"+b+":"+a;e={};e[b]=a;e[d+b]=a;return e},cssStyleToDomStyle:function(){var b=document.createElement("div").style,
a=typeof b.cssFloat!="undefined"?"cssFloat":typeof b.styleFloat!="undefined"?"styleFloat":"float";return function(b){return b=="float"?a:b.replace(/-./g,function(b){return b.substr(1).toUpperCase()})}}(),buildStyleHtml:function(b){for(var b=[].concat(b),a,e=[],i=0;i<b.length;i++)if(a=b[i])/@import|[{}]/.test(a)?e.push("<style>"+a+"</style>"):e.push('<link type="text/css" rel=stylesheet href="'+a+'">');return e.join("")},htmlEncode:function(b){return(""+b).replace(/&/g,"&amp;").replace(/>/g,"&gt;").replace(/</g,
"&lt;")},htmlEncodeAttr:function(b){return b.replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlDecodeAttr:function(b){return b.replace(/&quot;/g,'"').replace(/&lt;/g,"<").replace(/&gt;/g,">")},getNextNumber:function(){var b=0;return function(){return++b}}(),getNextId:function(){return"cke_"+this.getNextNumber()},override:function(b,a){var e=a(b);e.prototype=b.prototype;return e},setTimeout:function(b,a,e,i,d){d||(d=window);e||(e=d);return d.setTimeout(function(){i?b.apply(e,[].concat(i)):
b.apply(e)},a||0)},trim:function(){var b=/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g;return function(a){return a.replace(b,"")}}(),ltrim:function(){var b=/^[ \t\n\r]+/g;return function(a){return a.replace(b,"")}}(),rtrim:function(){var b=/[ \t\n\r]+$/g;return function(a){return a.replace(b,"")}}(),indexOf:function(b,a){if(typeof a=="function")for(var e=0,i=b.length;e<i;e++){if(a(b[e]))return e}else{if(b.indexOf)return b.indexOf(a);e=0;for(i=b.length;e<i;e++)if(b[e]===a)return e}return-1},search:function(b,
a){var e=CKEDITOR.tools.indexOf(b,a);return e>=0?b[e]:null},bind:function(b,a){return function(){return b.apply(a,arguments)}},createClass:function(b){var a=b.$,e=b.base,i=b.privates||b._,d=b.proto,b=b.statics;!a&&(a=function(){e&&this.base.apply(this,arguments)});if(i)var l=a,a=function(){var a=this._||(this._={}),b;for(b in i){var e=i[b];a[b]=typeof e=="function"?CKEDITOR.tools.bind(e,this):e}l.apply(this,arguments)};if(e){a.prototype=this.prototypedCopy(e.prototype);a.prototype.constructor=a;a.base=
e;a.baseProto=e.prototype;a.prototype.base=function(){this.base=e.prototype.base;e.apply(this,arguments);this.base=arguments.callee}}d&&this.extend(a.prototype,d,true);b&&this.extend(a,b,true);return a},addFunction:function(b,c){return a.push(function(){return b.apply(c||this,arguments)})-1},removeFunction:function(b){a[b]=null},callFunction:function(b){var c=a[b];return c&&c.apply(window,Array.prototype.slice.call(arguments,1))},cssLength:function(){var a=/^-?\d+\.?\d*px$/,c;return function(e){c=
CKEDITOR.tools.trim(e+"")+"px";return a.test(c)?c:e||""}}(),convertToPx:function(){var a;return function(c){if(!a){a=CKEDITOR.dom.element.createFromHtml('<div style="position:absolute;left:-9999px;top:-9999px;margin:0px;padding:0px;border:0px;"></div>',CKEDITOR.document);CKEDITOR.document.getBody().append(a)}if(!/%$/.test(c)){a.setStyle("width",c);return a.$.clientWidth}return c}}(),repeat:function(a,c){return Array(c+1).join(a)},tryThese:function(){for(var a,c=0,e=arguments.length;c<e;c++){var i=
arguments[c];try{a=i();break}catch(d){}}return a},genKey:function(){return Array.prototype.slice.call(arguments).join("-")},defer:function(a){return function(){var c=arguments,e=this;window.setTimeout(function(){a.apply(e,c)},0)}},normalizeCssText:function(a,c){var e=[],i,d=CKEDITOR.tools.parseCssText(a,true,c);for(i in d)e.push(i+":"+d[i]);e.sort();return e.length?e.join(";")+";":""},convertRgbToHex:function(a){return a.replace(/(?:rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\))/gi,function(a,b,i,d){a=
[b,i,d];for(b=0;b<3;b++)a[b]=("0"+parseInt(a[b],10).toString(16)).slice(-2);return"#"+a.join("")})},parseCssText:function(a,c,e){var i={};if(e){e=new CKEDITOR.dom.element("span");e.setAttribute("style",a);a=CKEDITOR.tools.convertRgbToHex(e.getAttribute("style")||"")}if(!a||a==";")return i;a.replace(/&quot;/g,'"').replace(/\s*([^:;\s]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,b,e){if(c){b=b.toLowerCase();b=="font-family"&&(e=e.toLowerCase().replace(/["']/g,"").replace(/\s*,\s*/g,","));e=CKEDITOR.tools.trim(e)}i[b]=
e});return i},writeCssText:function(a,c){var e,i=[];for(e in a)i.push(e+":"+a[e]);c&&i.sort();return i.join("; ")},objectCompare:function(a,c,e){var i;if(!a&&!c)return true;if(!a||!c)return false;for(i in a)if(a[i]!=c[i])return false;if(!e)for(i in c)if(a[i]!=c[i])return false;return true},objectKeys:function(a){var c=[],e;for(e in a)c.push(e);return c},convertArrayToObject:function(a,c){var e={};arguments.length==1&&(c=true);for(var i=0,d=a.length;i<d;++i)e[a[i]]=c;return e},fixDomain:function(){for(var a;;)try{a=
window.parent.document.domain;break}catch(c){a=a?a.replace(/.+?(?:\.|$)/,""):document.domain;if(!a)break;document.domain=a}return!!a},eventsBuffer:function(a,c){function e(){d=(new Date).getTime();i=false;c()}var i,d=0;return{input:function(){if(!i){var c=(new Date).getTime()-d;c<a?i=setTimeout(e,a-c):e()}},reset:function(){i&&clearTimeout(i);i=d=0}}},enableHtml5Elements:function(a,c){for(var e=["abbr","article","aside","audio","bdi","canvas","data","datalist","details","figcaption","figure","footer",
"header","hgroup","mark","meter","nav","output","progress","section","summary","time","video"],i=e.length,d;i--;){d=a.createElement(e[i]);c&&a.appendChild(d)}}}})();
CKEDITOR.dtd=function(){var a=CKEDITOR.tools.extend,d=function(a,e){for(var b=CKEDITOR.tools.clone(a),i=1;i<arguments.length;i++){var e=arguments[i],c;for(c in e)delete b[c]}return b},b={},c={},e={address:1,article:1,aside:1,blockquote:1,details:1,div:1,dl:1,fieldset:1,figure:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,hr:1,menu:1,nav:1,ol:1,p:1,pre:1,section:1,table:1,ul:1},i={command:1,link:1,meta:1,noscript:1,script:1,style:1},g={},l={"#":1},h={center:1,dir:1,noframes:1};
a(b,{a:1,abbr:1,area:1,audio:1,b:1,bdi:1,bdo:1,br:1,button:1,canvas:1,cite:1,code:1,command:1,datalist:1,del:1,dfn:1,em:1,embed:1,i:1,iframe:1,img:1,input:1,ins:1,kbd:1,keygen:1,label:1,map:1,mark:1,meter:1,noscript:1,object:1,output:1,progress:1,q:1,ruby:1,s:1,samp:1,script:1,select:1,small:1,span:1,strong:1,sub:1,sup:1,textarea:1,time:1,u:1,"var":1,video:1,wbr:1},l,{acronym:1,applet:1,basefont:1,big:1,font:1,isindex:1,strike:1,style:1,tt:1});a(c,e,b,h);d={a:d(b,{a:1,button:1}),abbr:b,address:c,
area:g,article:a({style:1},c),aside:a({style:1},c),audio:a({source:1,track:1},c),b:b,base:g,bdi:b,bdo:b,blockquote:c,body:c,br:g,button:d(b,{a:1,button:1}),canvas:b,caption:c,cite:b,code:b,col:g,colgroup:{col:1},command:g,datalist:a({option:1},b),dd:c,del:b,details:a({summary:1},c),dfn:b,div:a({style:1},c),dl:{dt:1,dd:1},dt:c,em:b,embed:g,fieldset:a({legend:1},c),figcaption:c,figure:a({figcaption:1},c),footer:c,form:c,h1:b,h2:b,h3:b,h4:b,h5:b,h6:b,head:a({title:1,base:1},i),header:c,hgroup:{h1:1,
h2:1,h3:1,h4:1,h5:1,h6:1},hr:g,html:a({head:1,body:1},c,i),i:b,iframe:l,img:g,input:g,ins:b,kbd:b,keygen:g,label:b,legend:b,li:c,link:g,map:c,mark:b,menu:a({li:1},c),meta:g,meter:d(b,{meter:1}),nav:c,noscript:a({link:1,meta:1,style:1},b),object:a({param:1},b),ol:{li:1},optgroup:{option:1},option:l,output:b,p:b,param:g,pre:b,progress:d(b,{progress:1}),q:b,rp:b,rt:b,ruby:a({rp:1,rt:1},b),s:b,samp:b,script:l,section:a({style:1},c),select:{optgroup:1,option:1},small:b,source:g,span:b,strong:b,style:l,
sub:b,summary:b,sup:b,table:{caption:1,colgroup:1,thead:1,tfoot:1,tbody:1,tr:1},tbody:{tr:1},td:c,textarea:l,tfoot:{tr:1},th:c,thead:{tr:1},time:d(b,{time:1}),title:l,tr:{th:1,td:1},track:g,u:b,ul:{li:1},"var":b,video:a({source:1,track:1},c),wbr:g,acronym:b,applet:a({param:1},c),basefont:g,big:b,center:c,dialog:g,dir:{li:1},font:b,isindex:g,noframes:c,strike:b,tt:b};a(d,{$block:a({audio:1,dd:1,dt:1,figcaption:1,li:1,video:1},e,h),$blockLimit:{article:1,aside:1,audio:1,body:1,caption:1,details:1,dir:1,
div:1,dl:1,fieldset:1,figcaption:1,figure:1,footer:1,form:1,header:1,hgroup:1,menu:1,nav:1,ol:1,section:1,table:1,td:1,th:1,tr:1,ul:1,video:1},$cdata:{script:1,style:1},$editable:{address:1,article:1,aside:1,blockquote:1,body:1,details:1,div:1,fieldset:1,figcaption:1,footer:1,form:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,header:1,hgroup:1,nav:1,p:1,pre:1,section:1},$empty:{area:1,base:1,basefont:1,br:1,col:1,command:1,dialog:1,embed:1,hr:1,img:1,input:1,isindex:1,keygen:1,link:1,meta:1,param:1,source:1,track:1,
wbr:1},$inline:b,$list:{dl:1,ol:1,ul:1},$listItem:{dd:1,dt:1,li:1},$nonBodyContent:a({body:1,head:1,html:1},d.head),$nonEditable:{applet:1,audio:1,button:1,embed:1,iframe:1,map:1,object:1,option:1,param:1,script:1,textarea:1,video:1},$object:{applet:1,audio:1,button:1,hr:1,iframe:1,img:1,input:1,object:1,select:1,table:1,textarea:1,video:1},$removeEmpty:{abbr:1,acronym:1,b:1,bdi:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,mark:1,meter:1,output:1,q:1,ruby:1,s:1,samp:1,
small:1,span:1,strike:1,strong:1,sub:1,sup:1,time:1,tt:1,u:1,"var":1},$tabIndex:{a:1,area:1,button:1,input:1,object:1,select:1,textarea:1},$tableContent:{caption:1,col:1,colgroup:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1},$transparent:{a:1,audio:1,canvas:1,del:1,ins:1,map:1,noscript:1,object:1,video:1},$intermediate:{caption:1,colgroup:1,dd:1,dt:1,figcaption:1,legend:1,li:1,optgroup:1,option:1,rp:1,rt:1,summary:1,tbody:1,td:1,tfoot:1,th:1,thead:1,tr:1}});return d}();
CKEDITOR.dom.event=function(a){this.$=a};
CKEDITOR.dom.event.prototype={getKey:function(){return this.$.keyCode||this.$.which},getKeystroke:function(){var a=this.getKey();if(this.$.ctrlKey||this.$.metaKey)a=a+CKEDITOR.CTRL;this.$.shiftKey&&(a=a+CKEDITOR.SHIFT);this.$.altKey&&(a=a+CKEDITOR.ALT);return a},preventDefault:function(a){var d=this.$;d.preventDefault?d.preventDefault():d.returnValue=false;a&&this.stopPropagation()},stopPropagation:function(){var a=this.$;a.stopPropagation?a.stopPropagation():a.cancelBubble=true},getTarget:function(){var a=
this.$.target||this.$.srcElement;return a?new CKEDITOR.dom.node(a):null},getPhase:function(){return this.$.eventPhase||2},getPageOffset:function(){var a=this.getTarget().getDocument().$;return{x:this.$.pageX||this.$.clientX+(a.documentElement.scrollLeft||a.body.scrollLeft),y:this.$.pageY||this.$.clientY+(a.documentElement.scrollTop||a.body.scrollTop)}}};CKEDITOR.CTRL=1114112;CKEDITOR.SHIFT=2228224;CKEDITOR.ALT=4456448;CKEDITOR.EVENT_PHASE_CAPTURING=1;CKEDITOR.EVENT_PHASE_AT_TARGET=2;
CKEDITOR.EVENT_PHASE_BUBBLING=3;CKEDITOR.dom.domObject=function(a){if(a)this.$=a};
CKEDITOR.dom.domObject.prototype=function(){var a=function(a,b){return function(c){typeof CKEDITOR!="undefined"&&a.fire(b,new CKEDITOR.dom.event(c))}};return{getPrivate:function(){var a;if(!(a=this.getCustomData("_")))this.setCustomData("_",a={});return a},on:function(d){var b=this.getCustomData("_cke_nativeListeners");if(!b){b={};this.setCustomData("_cke_nativeListeners",b)}if(!b[d]){b=b[d]=a(this,d);this.$.addEventListener?this.$.addEventListener(d,b,!!CKEDITOR.event.useCapture):this.$.attachEvent&&
this.$.attachEvent("on"+d,b)}return CKEDITOR.event.prototype.on.apply(this,arguments)},removeListener:function(a){CKEDITOR.event.prototype.removeListener.apply(this,arguments);if(!this.hasListeners(a)){var b=this.getCustomData("_cke_nativeListeners"),c=b&&b[a];if(c){this.$.removeEventListener?this.$.removeEventListener(a,c,false):this.$.detachEvent&&this.$.detachEvent("on"+a,c);delete b[a]}}},removeAllListeners:function(){var a=this.getCustomData("_cke_nativeListeners"),b;for(b in a){var c=a[b];this.$.detachEvent?
this.$.detachEvent("on"+b,c):this.$.removeEventListener&&this.$.removeEventListener(b,c,false);delete a[b]}CKEDITOR.event.prototype.removeAllListeners.call(this)}}}();
(function(a){var d={};CKEDITOR.on("reset",function(){d={}});a.equals=function(a){try{return a&&a.$===this.$}catch(c){return false}};a.setCustomData=function(a,c){var e=this.getUniqueId();(d[e]||(d[e]={}))[a]=c;return this};a.getCustomData=function(a){var c=this.$["data-cke-expando"];return(c=c&&d[c])&&a in c?c[a]:null};a.removeCustomData=function(a){var c=this.$["data-cke-expando"],c=c&&d[c],e,i;if(c){e=c[a];i=a in c;delete c[a]}return i?e:null};a.clearCustomData=function(){this.removeAllListeners();
var a=this.$["data-cke-expando"];a&&delete d[a]};a.getUniqueId=function(){return this.$["data-cke-expando"]||(this.$["data-cke-expando"]=CKEDITOR.tools.getNextNumber())};CKEDITOR.event.implementOn(a)})(CKEDITOR.dom.domObject.prototype);
CKEDITOR.dom.node=function(a){return a?new CKEDITOR.dom[a.nodeType==CKEDITOR.NODE_DOCUMENT?"document":a.nodeType==CKEDITOR.NODE_ELEMENT?"element":a.nodeType==CKEDITOR.NODE_TEXT?"text":a.nodeType==CKEDITOR.NODE_COMMENT?"comment":a.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT?"documentFragment":"domObject"](a):this};CKEDITOR.dom.node.prototype=new CKEDITOR.dom.domObject;CKEDITOR.NODE_ELEMENT=1;CKEDITOR.NODE_DOCUMENT=9;CKEDITOR.NODE_TEXT=3;CKEDITOR.NODE_COMMENT=8;CKEDITOR.NODE_DOCUMENT_FRAGMENT=11;
CKEDITOR.POSITION_IDENTICAL=0;CKEDITOR.POSITION_DISCONNECTED=1;CKEDITOR.POSITION_FOLLOWING=2;CKEDITOR.POSITION_PRECEDING=4;CKEDITOR.POSITION_IS_CONTAINED=8;CKEDITOR.POSITION_CONTAINS=16;
CKEDITOR.tools.extend(CKEDITOR.dom.node.prototype,{appendTo:function(a,d){a.append(this,d);return a},clone:function(a,d){var b=this.$.cloneNode(a),c=function(e){e["data-cke-expando"]&&(e["data-cke-expando"]=false);if(e.nodeType==CKEDITOR.NODE_ELEMENT){d||e.removeAttribute("id",false);if(a)for(var e=e.childNodes,b=0;b<e.length;b++)c(e[b])}};c(b);return new CKEDITOR.dom.node(b)},hasPrevious:function(){return!!this.$.previousSibling},hasNext:function(){return!!this.$.nextSibling},insertAfter:function(a){a.$.parentNode.insertBefore(this.$,
a.$.nextSibling);return a},insertBefore:function(a){a.$.parentNode.insertBefore(this.$,a.$);return a},insertBeforeMe:function(a){this.$.parentNode.insertBefore(a.$,this.$);return a},getAddress:function(a){for(var d=[],b=this.getDocument().$.documentElement,c=this.$;c&&c!=b;){var e=c.parentNode;e&&d.unshift(this.getIndex.call({$:c},a));c=e}return d},getDocument:function(){return new CKEDITOR.dom.document(this.$.ownerDocument||this.$.parentNode.ownerDocument)},getIndex:function(a){var d=this.$,b=-1,
c;if(!this.$.parentNode)return b;do if(!a||!(d!=this.$&&d.nodeType==CKEDITOR.NODE_TEXT&&(c||!d.nodeValue))){b++;c=d.nodeType==CKEDITOR.NODE_TEXT}while(d=d.previousSibling);return b},getNextSourceNode:function(a,d,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getFirst&&this.getFirst(),e;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getNext()}for(;!a&&(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getNext()}return!a||
b&&b(a)===false?null:d&&d!=a.type?a.getNextSourceNode(false,d,b):a},getPreviousSourceNode:function(a,d,b){if(b&&!b.call)var c=b,b=function(a){return!a.equals(c)};var a=!a&&this.getLast&&this.getLast(),e;if(!a){if(this.type==CKEDITOR.NODE_ELEMENT&&b&&b(this,true)===false)return null;a=this.getPrevious()}for(;!a&&(e=(e||this).getParent());){if(b&&b(e,true)===false)return null;a=e.getPrevious()}return!a||b&&b(a)===false?null:d&&a.type!=d?a.getPreviousSourceNode(false,d,b):a},getPrevious:function(a){var d=
this.$,b;do b=(d=d.previousSibling)&&d.nodeType!=10&&new CKEDITOR.dom.node(d);while(b&&a&&!a(b));return b},getNext:function(a){var d=this.$,b;do b=(d=d.nextSibling)&&new CKEDITOR.dom.node(d);while(b&&a&&!a(b));return b},getParent:function(a){var d=this.$.parentNode;return d&&(d.nodeType==CKEDITOR.NODE_ELEMENT||a&&d.nodeType==CKEDITOR.NODE_DOCUMENT_FRAGMENT)?new CKEDITOR.dom.node(d):null},getParents:function(a){var d=this,b=[];do b[a?"push":"unshift"](d);while(d=d.getParent());return b},getCommonAncestor:function(a){if(a.equals(this))return this;
if(a.contains&&a.contains(this))return a;var d=this.contains?this:this.getParent();do if(d.contains(a))return d;while(d=d.getParent());return null},getPosition:function(a){var d=this.$,b=a.$;if(d.compareDocumentPosition)return d.compareDocumentPosition(b);if(d==b)return CKEDITOR.POSITION_IDENTICAL;if(this.type==CKEDITOR.NODE_ELEMENT&&a.type==CKEDITOR.NODE_ELEMENT){if(d.contains){if(d.contains(b))return CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING;if(b.contains(d))return CKEDITOR.POSITION_IS_CONTAINED+
CKEDITOR.POSITION_FOLLOWING}if("sourceIndex"in d)return d.sourceIndex<0||b.sourceIndex<0?CKEDITOR.POSITION_DISCONNECTED:d.sourceIndex<b.sourceIndex?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING}for(var d=this.getAddress(),a=a.getAddress(),b=Math.min(d.length,a.length),c=0;c<=b-1;c++)if(d[c]!=a[c]){if(c<b)return d[c]<a[c]?CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_FOLLOWING;break}return d.length<a.length?CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_PRECEDING:CKEDITOR.POSITION_IS_CONTAINED+
CKEDITOR.POSITION_FOLLOWING},getAscendant:function(a,d){var b=this.$,c;if(!d)b=b.parentNode;for(;b;){if(b.nodeName&&(c=b.nodeName.toLowerCase(),typeof a=="string"?c==a:c in a))return new CKEDITOR.dom.node(b);try{b=b.parentNode}catch(e){b=null}}return null},hasAscendant:function(a,d){var b=this.$;if(!d)b=b.parentNode;for(;b;){if(b.nodeName&&b.nodeName.toLowerCase()==a)return true;b=b.parentNode}return false},move:function(a,d){a.append(this.remove(),d)},remove:function(a){var d=this.$,b=d.parentNode;
if(b){if(a)for(;a=d.firstChild;)b.insertBefore(d.removeChild(a),d);b.removeChild(d)}return this},replace:function(a){this.insertBefore(a);a.remove()},trim:function(){this.ltrim();this.rtrim()},ltrim:function(){for(var a;this.getFirst&&(a=this.getFirst());){if(a.type==CKEDITOR.NODE_TEXT){var d=CKEDITOR.tools.ltrim(a.getText()),b=a.getLength();if(d){if(d.length<b){a.split(b-d.length);this.$.removeChild(this.$.firstChild)}}else{a.remove();continue}}break}},rtrim:function(){for(var a;this.getLast&&(a=
this.getLast());){if(a.type==CKEDITOR.NODE_TEXT){var d=CKEDITOR.tools.rtrim(a.getText()),b=a.getLength();if(d){if(d.length<b){a.split(d.length);this.$.lastChild.parentNode.removeChild(this.$.lastChild)}}else{a.remove();continue}}break}if(CKEDITOR.env.needsBrFiller)(a=this.$.lastChild)&&(a.type==1&&a.nodeName.toLowerCase()=="br")&&a.parentNode.removeChild(a)},isReadOnly:function(){var a=this;this.type!=CKEDITOR.NODE_ELEMENT&&(a=this.getParent());if(a&&typeof a.$.isContentEditable!="undefined")return!(a.$.isContentEditable||
a.data("cke-editable"));for(;a;){if(a.data("cke-editable"))break;if(a.getAttribute("contentEditable")=="false")return true;if(a.getAttribute("contentEditable")=="true")break;a=a.getParent()}return!a}});CKEDITOR.dom.window=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.window.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.window.prototype,{focus:function(){this.$.focus()},getViewPaneSize:function(){var a=this.$.document,d=a.compatMode=="CSS1Compat";return{width:(d?a.documentElement.clientWidth:a.body.clientWidth)||0,height:(d?a.documentElement.clientHeight:a.body.clientHeight)||0}},getScrollPosition:function(){var a=this.$;if("pageXOffset"in a)return{x:a.pageXOffset||0,y:a.pageYOffset||0};a=a.document;return{x:a.documentElement.scrollLeft||a.body.scrollLeft||0,y:a.documentElement.scrollTop||
a.body.scrollTop||0}},getFrame:function(){var a=this.$.frameElement;return a?new CKEDITOR.dom.element.get(a):null}});CKEDITOR.dom.document=function(a){CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.document.prototype=new CKEDITOR.dom.domObject;
CKEDITOR.tools.extend(CKEDITOR.dom.document.prototype,{type:CKEDITOR.NODE_DOCUMENT,appendStyleSheet:function(a){if(this.$.createStyleSheet)this.$.createStyleSheet(a);else{var d=new CKEDITOR.dom.element("link");d.setAttributes({rel:"stylesheet",type:"text/css",href:a});this.getHead().append(d)}},appendStyleText:function(a){if(this.$.createStyleSheet){var d=this.$.createStyleSheet("");d.cssText=a}else{var b=new CKEDITOR.dom.element("style",this);b.append(new CKEDITOR.dom.text(a,this));this.getHead().append(b)}return d||
b.$.sheet},createElement:function(a,d){var b=new CKEDITOR.dom.element(a,this);if(d){d.attributes&&b.setAttributes(d.attributes);d.styles&&b.setStyles(d.styles)}return b},createText:function(a){return new CKEDITOR.dom.text(a,this)},focus:function(){this.getWindow().focus()},getActive:function(){return new CKEDITOR.dom.element(this.$.activeElement)},getById:function(a){return(a=this.$.getElementById(a))?new CKEDITOR.dom.element(a):null},getByAddress:function(a,d){for(var b=this.$.documentElement,c=
0;b&&c<a.length;c++){var e=a[c];if(d)for(var i=-1,g=0;g<b.childNodes.length;g++){var l=b.childNodes[g];if(!(d===true&&l.nodeType==3&&l.previousSibling&&l.previousSibling.nodeType==3)){i++;if(i==e){b=l;break}}}else b=b.childNodes[e]}return b?new CKEDITOR.dom.node(b):null},getElementsByTag:function(a,d){if((!CKEDITOR.env.ie||document.documentMode>8)&&d)a=d+":"+a;return new CKEDITOR.dom.nodeList(this.$.getElementsByTagName(a))},getHead:function(){var a=this.$.getElementsByTagName("head")[0];return a=
a?new CKEDITOR.dom.element(a):this.getDocumentElement().append(new CKEDITOR.dom.element("head"),true)},getBody:function(){return new CKEDITOR.dom.element(this.$.body)},getDocumentElement:function(){return new CKEDITOR.dom.element(this.$.documentElement)},getWindow:function(){return new CKEDITOR.dom.window(this.$.parentWindow||this.$.defaultView)},write:function(a){this.$.open("text/html","replace");CKEDITOR.env.ie&&(a=a.replace(/(?:^\s*<!DOCTYPE[^>]*?>)|^/i,'$&\n<script data-cke-temp="1">('+CKEDITOR.tools.fixDomain+
")();<\/script>"));this.$.write(a);this.$.close()},find:function(a){return new CKEDITOR.dom.nodeList(this.$.querySelectorAll(a))},findOne:function(a){return(a=this.$.querySelector(a))?new CKEDITOR.dom.element(a):null},_getHtml5ShivFrag:function(){var a=this.getCustomData("html5ShivFrag");if(!a){a=this.$.createDocumentFragment();CKEDITOR.tools.enableHtml5Elements(a,true);this.setCustomData("html5ShivFrag",a)}return a}});CKEDITOR.dom.nodeList=function(a){this.$=a};
CKEDITOR.dom.nodeList.prototype={count:function(){return this.$.length},getItem:function(a){if(a<0||a>=this.$.length)return null;return(a=this.$[a])?new CKEDITOR.dom.node(a):null}};CKEDITOR.dom.element=function(a,d){typeof a=="string"&&(a=(d?d.$:document).createElement(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.element.get=function(a){return(a=typeof a=="string"?document.getElementById(a)||document.getElementsByName(a)[0]:a)&&(a.$?a:new CKEDITOR.dom.element(a))};
CKEDITOR.dom.element.prototype=new CKEDITOR.dom.node;CKEDITOR.dom.element.createFromHtml=function(a,d){var b=new CKEDITOR.dom.element("div",d);b.setHtml(a);return b.getFirst().remove()};
CKEDITOR.dom.element.setMarker=function(a,d,b,c){var e=d.getCustomData("list_marker_id")||d.setCustomData("list_marker_id",CKEDITOR.tools.getNextNumber()).getCustomData("list_marker_id"),i=d.getCustomData("list_marker_names")||d.setCustomData("list_marker_names",{}).getCustomData("list_marker_names");a[e]=d;i[b]=1;return d.setCustomData(b,c)};CKEDITOR.dom.element.clearAllMarkers=function(a){for(var d in a)CKEDITOR.dom.element.clearMarkers(a,a[d],1)};
CKEDITOR.dom.element.clearMarkers=function(a,d,b){var c=d.getCustomData("list_marker_names"),e=d.getCustomData("list_marker_id"),i;for(i in c)d.removeCustomData(i);d.removeCustomData("list_marker_names");if(b){d.removeCustomData("list_marker_id");delete a[e]}};
(function(){function a(a){var b=true;if(!a.$.id){a.$.id="cke_tmp_"+CKEDITOR.tools.getNextNumber();b=false}return function(){b||a.removeAttribute("id")}}function d(a,b){return"#"+a.$.id+" "+b.split(/,\s*/).join(", #"+a.$.id+" ")}function b(a){for(var b=0,d=0,l=c[a].length;d<l;d++)b=b+(parseInt(this.getComputedStyle(c[a][d])||0,10)||0);return b}CKEDITOR.tools.extend(CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_ELEMENT,addClass:function(a){var b=this.$.className;b&&(RegExp("(?:^|\\s)"+a+"(?:\\s|$)",
"").test(b)||(b=b+(" "+a)));this.$.className=b||a},removeClass:function(a){var b=this.getAttribute("class");if(b){a=RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","i");if(a.test(b))(b=b.replace(a,"").replace(/^\s+/,""))?this.setAttribute("class",b):this.removeAttribute("class")}return this},hasClass:function(a){return RegExp("(?:^|\\s+)"+a+"(?=\\s|$)","").test(this.getAttribute("class"))},append:function(a,b){typeof a=="string"&&(a=this.getDocument().createElement(a));b?this.$.insertBefore(a.$,this.$.firstChild):
this.$.appendChild(a.$);return a},appendHtml:function(a){if(this.$.childNodes.length){var b=new CKEDITOR.dom.element("div",this.getDocument());b.setHtml(a);b.moveChildren(this)}else this.setHtml(a)},appendText:function(a){this.$.text!=void 0?this.$.text=this.$.text+a:this.append(new CKEDITOR.dom.text(a))},appendBogus:function(a){if(a||CKEDITOR.env.needsBrFiller||CKEDITOR.env.opera){for(a=this.getLast();a&&a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.rtrim(a.getText());)a=a.getPrevious();if(!a||!a.is||
!a.is("br")){a=CKEDITOR.env.opera?this.getDocument().createText(""):this.getDocument().createElement("br");CKEDITOR.env.gecko&&a.setAttribute("type","_moz");this.append(a)}}},breakParent:function(a){var b=new CKEDITOR.dom.range(this.getDocument());b.setStartAfter(this);b.setEndAfter(a);a=b.extractContents();b.insertNode(this.remove());a.insertAfterNode(this)},contains:CKEDITOR.env.ie||CKEDITOR.env.webkit?function(a){var b=this.$;return a.type!=CKEDITOR.NODE_ELEMENT?b.contains(a.getParent().$):b!=
a.$&&b.contains(a.$)}:function(a){return!!(this.$.compareDocumentPosition(a.$)&16)},focus:function(){function a(){try{this.$.focus()}catch(b){}}return function(b){b?CKEDITOR.tools.setTimeout(a,100,this):a.call(this)}}(),getHtml:function(){var a=this.$.innerHTML;return CKEDITOR.env.ie?a.replace(/<\?[^>]*>/g,""):a},getOuterHtml:function(){if(this.$.outerHTML)return this.$.outerHTML.replace(/<\?[^>]*>/,"");var a=this.$.ownerDocument.createElement("div");a.appendChild(this.$.cloneNode(true));return a.innerHTML},
getClientRect:function(){var a=CKEDITOR.tools.extend({},this.$.getBoundingClientRect());!a.width&&(a.width=a.right-a.left);!a.height&&(a.height=a.bottom-a.top);return a},setHtml:CKEDITOR.env.ie&&CKEDITOR.env.version<9?function(a){try{var b=this.$;if(this.getParent())return b.innerHTML=a;var c=this.getDocument()._getHtml5ShivFrag();c.appendChild(b);b.innerHTML=a;c.removeChild(b);return a}catch(d){this.$.innerHTML="";b=new CKEDITOR.dom.element("body",this.getDocument());b.$.innerHTML=a;for(b=b.getChildren();b.count();)this.append(b.getItem(0));
return a}}:function(a){return this.$.innerHTML=a},setText:function(a){CKEDITOR.dom.element.prototype.setText=this.$.innerText!=void 0?function(a){return this.$.innerText=a}:function(a){return this.$.textContent=a};return this.setText(a)},getAttribute:function(){var a=function(a){return this.$.getAttribute(a,2)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)?function(a){switch(a){case "class":a="className";break;case "http-equiv":a="httpEquiv";break;case "name":return this.$.name;
case "tabindex":a=this.$.getAttribute(a,2);a!==0&&this.$.tabIndex===0&&(a=null);return a;case "checked":a=this.$.attributes.getNamedItem(a);return(a.specified?a.nodeValue:this.$.checked)?"checked":null;case "hspace":case "value":return this.$[a];case "style":return this.$.style.cssText;case "contenteditable":case "contentEditable":return this.$.attributes.getNamedItem("contentEditable").specified?this.$.getAttribute("contentEditable"):null}return this.$.getAttribute(a,2)}:a}(),getChildren:function(){return new CKEDITOR.dom.nodeList(this.$.childNodes)},
getComputedStyle:CKEDITOR.env.ie?function(a){return this.$.currentStyle[CKEDITOR.tools.cssStyleToDomStyle(a)]}:function(a){var b=this.getWindow().$.getComputedStyle(this.$,null);return b?b.getPropertyValue(a):""},getDtd:function(){var a=CKEDITOR.dtd[this.getName()];this.getDtd=function(){return a};return a},getElementsByTag:CKEDITOR.dom.document.prototype.getElementsByTag,getTabIndex:CKEDITOR.env.ie?function(){var a=this.$.tabIndex;a===0&&(!CKEDITOR.dtd.$tabIndex[this.getName()]&&parseInt(this.getAttribute("tabindex"),
10)!==0)&&(a=-1);return a}:CKEDITOR.env.webkit?function(){var a=this.$.tabIndex;if(a==void 0){a=parseInt(this.getAttribute("tabindex"),10);isNaN(a)&&(a=-1)}return a}:function(){return this.$.tabIndex},getText:function(){return this.$.textContent||this.$.innerText||""},getWindow:function(){return this.getDocument().getWindow()},getId:function(){return this.$.id||null},getNameAtt:function(){return this.$.name||null},getName:function(){var a=this.$.nodeName.toLowerCase();if(CKEDITOR.env.ie&&!(document.documentMode>
8)){var b=this.$.scopeName;b!="HTML"&&(a=b.toLowerCase()+":"+a)}return(this.getName=function(){return a})()},getValue:function(){return this.$.value},getFirst:function(a){var b=this.$.firstChild;(b=b&&new CKEDITOR.dom.node(b))&&(a&&!a(b))&&(b=b.getNext(a));return b},getLast:function(a){var b=this.$.lastChild;(b=b&&new CKEDITOR.dom.node(b))&&(a&&!a(b))&&(b=b.getPrevious(a));return b},getStyle:function(a){return this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]},is:function(){var a=this.getName();
if(typeof arguments[0]=="object")return!!arguments[0][a];for(var b=0;b<arguments.length;b++)if(arguments[b]==a)return true;return false},isEditable:function(a){var b=this.getName();if(this.isReadOnly()||this.getComputedStyle("display")=="none"||this.getComputedStyle("visibility")=="hidden"||CKEDITOR.dtd.$nonEditable[b]||CKEDITOR.dtd.$empty[b]||this.is("a")&&(this.data("cke-saved-name")||this.hasAttribute("name"))&&!this.getChildCount())return false;if(a!==false){a=CKEDITOR.dtd[b]||CKEDITOR.dtd.span;
return!(!a||!a["#"])}return true},isIdentical:function(a){var b=this.clone(0,1),a=a.clone(0,1);b.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);a.removeAttributes(["_moz_dirty","data-cke-expando","data-cke-saved-href","data-cke-saved-name"]);if(b.$.isEqualNode){b.$.style.cssText=CKEDITOR.tools.normalizeCssText(b.$.style.cssText);a.$.style.cssText=CKEDITOR.tools.normalizeCssText(a.$.style.cssText);return b.$.isEqualNode(a.$)}b=b.getOuterHtml();a=a.getOuterHtml();
if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&this.is("a")){var c=this.getParent();if(c.type==CKEDITOR.NODE_ELEMENT){c=c.clone();c.setHtml(b);b=c.getHtml();c.setHtml(a);a=c.getHtml()}}return b==a},isVisible:function(){var a=(this.$.offsetHeight||this.$.offsetWidth)&&this.getComputedStyle("visibility")!="hidden",b,c;if(a&&(CKEDITOR.env.webkit||CKEDITOR.env.opera)){b=this.getWindow();if(!b.equals(CKEDITOR.document.getWindow())&&(c=b.$.frameElement))a=(new CKEDITOR.dom.element(c)).isVisible()}return!!a},
isEmptyInlineRemoveable:function(){if(!CKEDITOR.dtd.$removeEmpty[this.getName()])return false;for(var a=this.getChildren(),b=0,c=a.count();b<c;b++){var d=a.getItem(b);if(!(d.type==CKEDITOR.NODE_ELEMENT&&d.data("cke-bookmark"))&&(d.type==CKEDITOR.NODE_ELEMENT&&!d.isEmptyInlineRemoveable()||d.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(d.getText())))return false}return true},hasAttributes:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)?function(){for(var a=this.$.attributes,b=0;b<
a.length;b++){var c=a[b];switch(c.nodeName){case "class":if(this.getAttribute("class"))return true;case "data-cke-expando":continue;default:if(c.specified)return true}}return false}:function(){var a=this.$.attributes,b=a.length,c={"data-cke-expando":1,_moz_dirty:1};return b>0&&(b>2||!c[a[0].nodeName]||b==2&&!c[a[1].nodeName])},hasAttribute:function(){function a(b){b=this.$.attributes.getNamedItem(b);return!(!b||!b.specified)}return CKEDITOR.env.ie&&CKEDITOR.env.version<8?function(b){return b=="name"?
!!this.$.name:a.call(this,b)}:a}(),hide:function(){this.setStyle("display","none")},moveChildren:function(a,b){var c=this.$,a=a.$;if(c!=a){var d;if(b)for(;d=c.lastChild;)a.insertBefore(c.removeChild(d),a.firstChild);else for(;d=c.firstChild;)a.appendChild(c.removeChild(d))}},mergeSiblings:function(){function a(b,e,c){if(e&&e.type==CKEDITOR.NODE_ELEMENT){for(var d=[];e.data("cke-bookmark")||e.isEmptyInlineRemoveable();){d.push(e);e=c?e.getNext():e.getPrevious();if(!e||e.type!=CKEDITOR.NODE_ELEMENT)return}if(b.isIdentical(e)){for(var k=
c?b.getLast():b.getFirst();d.length;)d.shift().move(b,!c);e.moveChildren(b,!c);e.remove();k&&k.type==CKEDITOR.NODE_ELEMENT&&k.mergeSiblings()}}}return function(b){if(b===false||CKEDITOR.dtd.$removeEmpty[this.getName()]||this.is("a")){a(this,this.getNext(),true);a(this,this.getPrevious())}}}(),show:function(){this.setStyles({display:"",visibility:""})},setAttribute:function(){var a=function(a,b){this.$.setAttribute(a,b);return this};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)?
function(b,c){b=="class"?this.$.className=c:b=="style"?this.$.style.cssText=c:b=="tabindex"?this.$.tabIndex=c:b=="checked"?this.$.checked=c:b=="contenteditable"?a.call(this,"contentEditable",c):a.apply(this,arguments);return this}:CKEDITOR.env.ie8Compat&&CKEDITOR.env.secure?function(b,c){if(b=="src"&&c.match(/^http:\/\//))try{a.apply(this,arguments)}catch(d){}else a.apply(this,arguments);return this}:a}(),setAttributes:function(a){for(var b in a)this.setAttribute(b,a[b]);return this},setValue:function(a){this.$.value=
a;return this},removeAttribute:function(){var a=function(a){this.$.removeAttribute(a)};return CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)?function(a){a=="class"?a="className":a=="tabindex"?a="tabIndex":a=="contenteditable"&&(a="contentEditable");this.$.removeAttribute(a)}:a}(),removeAttributes:function(a){if(CKEDITOR.tools.isArray(a))for(var b=0;b<a.length;b++)this.removeAttribute(a[b]);else for(b in a)a.hasOwnProperty(b)&&this.removeAttribute(b)},removeStyle:function(a){var b=
this.$.style;if(!b.removeProperty&&(a=="border"||a=="margin"||a=="padding")){var c=["top","left","right","bottom"],d;a=="border"&&(d=["color","style","width"]);for(var b=[],h=0;h<c.length;h++)if(d)for(var k=0;k<d.length;k++)b.push([a,c[h],d[k]].join("-"));else b.push([a,c[h]].join("-"));for(a=0;a<b.length;a++)this.removeStyle(b[a])}else{b.removeProperty?b.removeProperty(a):b.removeAttribute(CKEDITOR.tools.cssStyleToDomStyle(a));this.$.style.cssText||this.removeAttribute("style")}},setStyle:function(a,
b){this.$.style[CKEDITOR.tools.cssStyleToDomStyle(a)]=b;return this},setStyles:function(a){for(var b in a)this.setStyle(b,a[b]);return this},setOpacity:function(a){if(CKEDITOR.env.ie&&CKEDITOR.env.version<9){a=Math.round(a*100);this.setStyle("filter",a>=100?"":"progid:DXImageTransform.Microsoft.Alpha(opacity="+a+")")}else this.setStyle("opacity",a)},unselectable:function(){this.setStyles(CKEDITOR.tools.cssVendorPrefix("user-select","none"));if(CKEDITOR.env.ie||CKEDITOR.env.opera){this.setAttribute("unselectable",
"on");for(var a,b=this.getElementsByTag("*"),c=0,d=b.count();c<d;c++){a=b.getItem(c);a.setAttribute("unselectable","on")}}},getPositionedAncestor:function(){for(var a=this;a.getName()!="html";){if(a.getComputedStyle("position")!="static")return a;a=a.getParent()}return null},getDocumentPosition:function(a){var b=0,c=0,d=this.getDocument(),h=d.getBody(),k=d.$.compatMode=="BackCompat";if(document.documentElement.getBoundingClientRect){var o=this.$.getBoundingClientRect(),s=d.$.documentElement,q=s.clientTop||
h.$.clientTop||0,u=s.clientLeft||h.$.clientLeft||0,f=true;if(CKEDITOR.env.ie){f=d.getDocumentElement().contains(this);d=d.getBody().contains(this);f=k&&d||!k&&f}if(f){b=o.left+(!k&&s.scrollLeft||h.$.scrollLeft);b=b-u;c=o.top+(!k&&s.scrollTop||h.$.scrollTop);c=c-q}}else{h=this;for(d=null;h&&!(h.getName()=="body"||h.getName()=="html");){b=b+(h.$.offsetLeft-h.$.scrollLeft);c=c+(h.$.offsetTop-h.$.scrollTop);if(!h.equals(this)){b=b+(h.$.clientLeft||0);c=c+(h.$.clientTop||0)}for(;d&&!d.equals(h);){b=b-
d.$.scrollLeft;c=c-d.$.scrollTop;d=d.getParent()}d=h;h=(o=h.$.offsetParent)?new CKEDITOR.dom.element(o):null}}if(a){h=this.getWindow();d=a.getWindow();if(!h.equals(d)&&h.$.frameElement){a=(new CKEDITOR.dom.element(h.$.frameElement)).getDocumentPosition(a);b=b+a.x;c=c+a.y}}if(!document.documentElement.getBoundingClientRect&&CKEDITOR.env.gecko&&!k){b=b+(this.$.clientLeft?1:0);c=c+(this.$.clientTop?1:0)}return{x:b,y:c}},scrollIntoView:function(a){var b=this.getParent();if(b){do{(b.$.clientWidth&&b.$.clientWidth<
b.$.scrollWidth||b.$.clientHeight&&b.$.clientHeight<b.$.scrollHeight)&&!b.is("body")&&this.scrollIntoParent(b,a,1);if(b.is("html")){var c=b.getWindow();try{var d=c.$.frameElement;d&&(b=new CKEDITOR.dom.element(d))}catch(h){}}}while(b=b.getParent())}},scrollIntoParent:function(a,b,c){var d,h,k,o;function s(b,f){if(/body|html/.test(a.getName()))a.getWindow().$.scrollBy(b,f);else{a.$.scrollLeft=a.$.scrollLeft+b;a.$.scrollTop=a.$.scrollTop+f}}function q(a,b){var c={x:0,y:0};if(!a.is(f?"body":"html")){var e=
a.$.getBoundingClientRect();c.x=e.left;c.y=e.top}e=a.getWindow();if(!e.equals(b)){e=q(CKEDITOR.dom.element.get(e.$.frameElement),b);c.x=c.x+e.x;c.y=c.y+e.y}return c}function u(a,b){return parseInt(a.getComputedStyle("margin-"+b)||0,10)||0}!a&&(a=this.getWindow());k=a.getDocument();var f=k.$.compatMode=="BackCompat";a instanceof CKEDITOR.dom.window&&(a=f?k.getBody():k.getDocumentElement());k=a.getWindow();h=q(this,k);var p=q(a,k),y=this.$.offsetHeight;d=this.$.offsetWidth;var A=a.$.clientHeight,m=
a.$.clientWidth;k=h.x-u(this,"left")-p.x||0;o=h.y-u(this,"top")-p.y||0;d=h.x+d+u(this,"right")-(p.x+m)||0;h=h.y+y+u(this,"bottom")-(p.y+A)||0;if(o<0||h>0)s(0,b===true?o:b===false?h:o<0?o:h);if(c&&(k<0||d>0))s(k<0?k:d,0)},setState:function(a,b,c){b=b||"cke";switch(a){case CKEDITOR.TRISTATE_ON:this.addClass(b+"_on");this.removeClass(b+"_off");this.removeClass(b+"_disabled");c&&this.setAttribute("aria-pressed",true);c&&this.removeAttribute("aria-disabled");break;case CKEDITOR.TRISTATE_DISABLED:this.addClass(b+
"_disabled");this.removeClass(b+"_off");this.removeClass(b+"_on");c&&this.setAttribute("aria-disabled",true);c&&this.removeAttribute("aria-pressed");break;default:this.addClass(b+"_off");this.removeClass(b+"_on");this.removeClass(b+"_disabled");c&&this.removeAttribute("aria-pressed");c&&this.removeAttribute("aria-disabled")}},getFrameDocument:function(){var a=this.$;try{a.contentWindow.document}catch(b){a.src=a.src}return a&&new CKEDITOR.dom.document(a.contentWindow.document)},copyAttributes:function(a,
b){for(var c=this.$.attributes,b=b||{},d=0;d<c.length;d++){var h=c[d],k=h.nodeName.toLowerCase(),o;if(!(k in b))if(k=="checked"&&(o=this.getAttribute(k)))a.setAttribute(k,o);else if(h.specified||CKEDITOR.env.ie&&h.nodeValue&&k=="value"){o=this.getAttribute(k);if(o===null)o=h.nodeValue;a.setAttribute(k,o)}}if(this.$.style.cssText!=="")a.$.style.cssText=this.$.style.cssText},renameNode:function(a){if(this.getName()!=a){var b=this.getDocument(),a=new CKEDITOR.dom.element(a,b);this.copyAttributes(a);
this.moveChildren(a);this.getParent()&&this.$.parentNode.replaceChild(a.$,this.$);a.$["data-cke-expando"]=this.$["data-cke-expando"];this.$=a.$;delete this.getName}},getChild:function(){function a(b,c){var e=b.childNodes;if(c>=0&&c<e.length)return e[c]}return function(b){var c=this.$;if(b.slice)for(;b.length>0&&c;)c=a(c,b.shift());else c=a(c,b);return c?new CKEDITOR.dom.node(c):null}}(),getChildCount:function(){return this.$.childNodes.length},disableContextMenu:function(){this.on("contextmenu",function(a){a.data.getTarget().hasClass("cke_enable_context_menu")||
a.data.preventDefault()})},getDirection:function(a){return a?this.getComputedStyle("direction")||this.getDirection()||this.getParent()&&this.getParent().getDirection(1)||this.getDocument().$.dir||"ltr":this.getStyle("direction")||this.getAttribute("dir")},data:function(a,b){a="data-"+a;if(b===void 0)return this.getAttribute(a);b===false?this.removeAttribute(a):this.setAttribute(a,b);return null},getEditor:function(){var a=CKEDITOR.instances,b,c;for(b in a){c=a[b];if(c.element.equals(this)&&c.elementMode!=
CKEDITOR.ELEMENT_MODE_APPENDTO)return c}return null},find:function(b){var c=a(this),b=new CKEDITOR.dom.nodeList(this.$.querySelectorAll(d(this,b)));c();return b},findOne:function(b){var c=a(this),b=this.$.querySelector(d(this,b));c();return b?new CKEDITOR.dom.element(b):null},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var d=a(this);if(d!==false)for(var c=this.getChildren(),h=0;h<c.count();h++){d=c.getItem(h);d.type==CKEDITOR.NODE_ELEMENT?d.forEach(a,b):(!b||d.type==b)&&a(d)}}});var c={width:["border-left-width",
"border-right-width","padding-left","padding-right"],height:["border-top-width","border-bottom-width","padding-top","padding-bottom"]};CKEDITOR.dom.element.prototype.setSize=function(a,c,d){if(typeof c=="number"){if(d&&(!CKEDITOR.env.ie||!CKEDITOR.env.quirks))c=c-b.call(this,a);this.setStyle(a,c+"px")}};CKEDITOR.dom.element.prototype.getSize=function(a,c){var d=Math.max(this.$["offset"+CKEDITOR.tools.capitalize(a)],this.$["client"+CKEDITOR.tools.capitalize(a)])||0;c&&(d=d-b.call(this,a));return d}})();
CKEDITOR.dom.documentFragment=function(a){a=a||CKEDITOR.document;this.$=a.type==CKEDITOR.NODE_DOCUMENT?a.$.createDocumentFragment():a};
CKEDITOR.tools.extend(CKEDITOR.dom.documentFragment.prototype,CKEDITOR.dom.element.prototype,{type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,insertAfterNode:function(a){a=a.$;a.parentNode.insertBefore(this.$,a.nextSibling)}},!0,{append:1,appendBogus:1,getFirst:1,getLast:1,getParent:1,getNext:1,getPrevious:1,appendTo:1,moveChildren:1,insertBefore:1,insertAfterNode:1,replace:1,trim:1,type:1,ltrim:1,rtrim:1,getDocument:1,getChildCount:1,getChild:1,getChildren:1});
(function(){function a(a,b){var c=this.range;if(this._.end)return null;if(!this._.start){this._.start=1;if(c.collapsed){this.end();return null}c.optimize()}var f,e=c.startContainer;f=c.endContainer;var o=c.startOffset,d=c.endOffset,m,j=this.guard,n=this.type,i=a?"getPreviousSourceNode":"getNextSourceNode";if(!a&&!this._.guardLTR){var h=f.type==CKEDITOR.NODE_ELEMENT?f:f.getParent(),t=f.type==CKEDITOR.NODE_ELEMENT?f.getChild(d):f.getNext();this._.guardLTR=function(a,b){return(!b||!h.equals(a))&&(!t||
!a.equals(t))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}if(a&&!this._.guardRTL){var g=e.type==CKEDITOR.NODE_ELEMENT?e:e.getParent(),k=e.type==CKEDITOR.NODE_ELEMENT?o?e.getChild(o-1):null:e.getPrevious();this._.guardRTL=function(a,b){return(!b||!g.equals(a))&&(!k||!a.equals(k))&&(a.type!=CKEDITOR.NODE_ELEMENT||!b||!a.equals(c.root))}}var l=a?this._.guardRTL:this._.guardLTR;m=j?function(a,b){return l(a,b)===false?false:j(a,b)}:l;if(this.current)f=this.current[i](false,n,m);else{if(a)f.type==
CKEDITOR.NODE_ELEMENT&&(f=d>0?f.getChild(d-1):m(f,true)===false?null:f.getPreviousSourceNode(true,n,m));else{f=e;if(f.type==CKEDITOR.NODE_ELEMENT&&!(f=f.getChild(o)))f=m(e,true)===false?null:e.getNextSourceNode(true,n,m)}f&&m(f)===false&&(f=null)}for(;f&&!this._.end;){this.current=f;if(!this.evaluator||this.evaluator(f)!==false){if(!b)return f}else if(b&&this.evaluator)return false;f=f[i](false,n,m)}this.end();return this.current=null}function d(b){for(var c,e=null;c=a.call(this,b);)e=c;return e}
function b(a){if(k(a))return false;if(a.type==CKEDITOR.NODE_TEXT)return true;if(a.type==CKEDITOR.NODE_ELEMENT){if(a.is(CKEDITOR.dtd.$inline)||a.getAttribute("contenteditable")=="false")return true;var b;if(b=!CKEDITOR.env.needsBrFiller)if(b=a.is(o))a:{b=0;for(var c=a.getChildCount();b<c;++b)if(!k(a.getChild(b))){b=false;break a}b=true}if(b)return true}return false}CKEDITOR.dom.walker=CKEDITOR.tools.createClass({$:function(a){this.range=a;this._={}},proto:{end:function(){this._.end=1},next:function(){return a.call(this)},
previous:function(){return a.call(this,1)},checkForward:function(){return a.call(this,0,1)!==false},checkBackward:function(){return a.call(this,1,1)!==false},lastForward:function(){return d.call(this)},lastBackward:function(){return d.call(this,1)},reset:function(){delete this.current;this._={}}}});var c={block:1,"list-item":1,table:1,"table-row-group":1,"table-header-group":1,"table-footer-group":1,"table-row":1,"table-column-group":1,"table-column":1,"table-cell":1,"table-caption":1},e={absolute:1,
fixed:1};CKEDITOR.dom.element.prototype.isBlockBoundary=function(a){return this.getComputedStyle("float")=="none"&&!(this.getComputedStyle("position")in e)&&c[this.getComputedStyle("display")]?true:!!(this.is(CKEDITOR.dtd.$block)||a&&this.is(a))};CKEDITOR.dom.walker.blockBoundary=function(a){return function(b){return!(b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary(a))}};CKEDITOR.dom.walker.listItemBoundary=function(){return this.blockBoundary({br:1})};CKEDITOR.dom.walker.bookmark=function(a,b){function c(a){return a&&
a.getName&&a.getName()=="span"&&a.data("cke-bookmark")}return function(f){var e,o;e=f&&f.type!=CKEDITOR.NODE_ELEMENT&&(o=f.getParent())&&c(o);e=a?e:e||c(f);return!!(b^e)}};CKEDITOR.dom.walker.whitespaces=function(a){return function(b){var c;b&&b.type==CKEDITOR.NODE_TEXT&&(c=!CKEDITOR.tools.trim(b.getText())||CKEDITOR.env.webkit&&b.getText()=="​");return!!(a^c)}};CKEDITOR.dom.walker.invisible=function(a){var b=CKEDITOR.dom.walker.whitespaces();return function(c){if(b(c))c=1;else{c.type==CKEDITOR.NODE_TEXT&&
(c=c.getParent());c=!c.$.offsetHeight}return!!(a^c)}};CKEDITOR.dom.walker.nodeType=function(a,b){return function(c){return!!(b^c.type==a)}};CKEDITOR.dom.walker.bogus=function(a){function b(a){return!g(a)&&!l(a)}return function(c){var f=CKEDITOR.env.needsBrFiller?c.is&&c.is("br"):c.getText&&i.test(c.getText());if(f){f=c.getParent();c=c.getNext(b);f=f.isBlockBoundary()&&(!c||c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary())}return!!(a^f)}};CKEDITOR.dom.walker.temp=function(a){return function(b){b.type!=
CKEDITOR.NODE_ELEMENT&&(b=b.getParent());b=b&&b.hasAttribute("data-cke-temp");return!!(a^b)}};var i=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,g=CKEDITOR.dom.walker.whitespaces(),l=CKEDITOR.dom.walker.bookmark(),h=CKEDITOR.dom.walker.temp();CKEDITOR.dom.walker.ignored=function(a){return function(b){b=g(b)||l(b)||h(b);return!!(a^b)}};var k=CKEDITOR.dom.walker.ignored(),o=function(a){var b={},c;for(c in a)CKEDITOR.dtd[c]["#"]&&(b[c]=1);return b}(CKEDITOR.dtd.$block);CKEDITOR.dom.walker.editable=function(a){return function(c){return!!(a^
b(c))}};CKEDITOR.dom.element.prototype.getBogus=function(){var a=this;do a=a.getPreviousSourceNode();while(l(a)||g(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.is(CKEDITOR.dtd.$inline)&&!a.is(CKEDITOR.dtd.$empty));return a&&(CKEDITOR.env.needsBrFiller?a.is&&a.is("br"):a.getText&&i.test(a.getText()))?a:false}})();
CKEDITOR.dom.range=function(a){this.endOffset=this.endContainer=this.startOffset=this.startContainer=null;this.collapsed=true;var d=a instanceof CKEDITOR.dom.document;this.document=d?a:a.getDocument();this.root=d?a.getBody():a};
(function(){function a(){var a=false,b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(true),e=CKEDITOR.dom.walker.bogus();return function(f){if(c(f)||b(f))return true;if(e(f)&&!a)return a=true;return f.type==CKEDITOR.NODE_TEXT&&(f.hasAscendant("pre")||CKEDITOR.tools.trim(f.getText()).length)||f.type==CKEDITOR.NODE_ELEMENT&&!f.is(i)?false:true}}function d(a){var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(1);return function(e){return c(e)||b(e)?true:!a&&g(e)||
e.type==CKEDITOR.NODE_ELEMENT&&e.is(CKEDITOR.dtd.$removeEmpty)}}function b(a){return function(){var b;return this[a?"getPreviousNode":"getNextNode"](function(a){!b&&k(a)&&(b=a);return h(a)&&!(g(a)&&a.equals(b))})}}var c=function(a){a.collapsed=a.startContainer&&a.endContainer&&a.startContainer.equals(a.endContainer)&&a.startOffset==a.endOffset},e=function(a,b,c,e){a.optimizeBookmark();var f=a.startContainer,d=a.endContainer,i=a.startOffset,h=a.endOffset,m,j;if(d.type==CKEDITOR.NODE_TEXT)d=d.split(h);
else if(d.getChildCount()>0)if(h>=d.getChildCount()){d=d.append(a.document.createText(""));j=true}else d=d.getChild(h);if(f.type==CKEDITOR.NODE_TEXT){f.split(i);f.equals(d)&&(d=f.getNext())}else if(i)if(i>=f.getChildCount()){f=f.append(a.document.createText(""));m=true}else f=f.getChild(i).getPrevious();else{f=f.append(a.document.createText(""),1);m=true}var i=f.getParents(),h=d.getParents(),n,r,g;for(n=0;n<i.length;n++){r=i[n];g=h[n];if(!r.equals(g))break}for(var t=c,k,G,l,B=n;B<i.length;B++){k=
i[B];t&&!k.equals(f)&&(G=t.append(k.clone()));for(k=k.getNext();k;){if(k.equals(h[B])||k.equals(d))break;l=k.getNext();if(b==2)t.append(k.clone(true));else{k.remove();b==1&&t.append(k)}k=l}t&&(t=G)}t=c;for(c=n;c<h.length;c++){k=h[c];b>0&&!k.equals(d)&&(G=t.append(k.clone()));if(!i[c]||k.$.parentNode!=i[c].$.parentNode)for(k=k.getPrevious();k;){if(k.equals(i[c])||k.equals(f))break;l=k.getPrevious();if(b==2)t.$.insertBefore(k.$.cloneNode(true),t.$.firstChild);else{k.remove();b==1&&t.$.insertBefore(k.$,
t.$.firstChild)}k=l}t&&(t=G)}if(b==2){r=a.startContainer;if(r.type==CKEDITOR.NODE_TEXT){r.$.data=r.$.data+r.$.nextSibling.data;r.$.parentNode.removeChild(r.$.nextSibling)}a=a.endContainer;if(a.type==CKEDITOR.NODE_TEXT&&a.$.nextSibling){a.$.data=a.$.data+a.$.nextSibling.data;a.$.parentNode.removeChild(a.$.nextSibling)}}else{if(r&&g&&(f.$.parentNode!=r.$.parentNode||d.$.parentNode!=g.$.parentNode)){b=g.getIndex();m&&g.$.parentNode==f.$.parentNode&&b--;if(e&&r.type==CKEDITOR.NODE_ELEMENT){e=CKEDITOR.dom.element.createFromHtml('<span data-cke-bookmark="1" style="display:none">&nbsp;</span>',
a.document);e.insertAfter(r);r.mergeSiblings(false);a.moveToBookmark({startNode:e})}else a.setStart(g.getParent(),b)}a.collapse(true)}m&&f.remove();j&&d.$.parentNode&&d.remove()},i={abbr:1,acronym:1,b:1,bdo:1,big:1,cite:1,code:1,del:1,dfn:1,em:1,font:1,i:1,ins:1,label:1,kbd:1,q:1,samp:1,small:1,span:1,strike:1,strong:1,sub:1,sup:1,tt:1,u:1,"var":1},g=CKEDITOR.dom.walker.bogus(),l=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,h=CKEDITOR.dom.walker.editable(),k=CKEDITOR.dom.walker.ignored(true);CKEDITOR.dom.range.prototype=
{clone:function(){var a=new CKEDITOR.dom.range(this.root);a.startContainer=this.startContainer;a.startOffset=this.startOffset;a.endContainer=this.endContainer;a.endOffset=this.endOffset;a.collapsed=this.collapsed;return a},collapse:function(a){if(a){this.endContainer=this.startContainer;this.endOffset=this.startOffset}else{this.startContainer=this.endContainer;this.startOffset=this.endOffset}this.collapsed=true},cloneContents:function(){var a=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||
e(this,2,a);return a},deleteContents:function(a){this.collapsed||e(this,0,null,a)},extractContents:function(a){var b=new CKEDITOR.dom.documentFragment(this.document);this.collapsed||e(this,1,b,a);return b},createBookmark:function(a){var b,c,e,f,d=this.collapsed;b=this.document.createElement("span");b.data("cke-bookmark",1);b.setStyle("display","none");b.setHtml("&nbsp;");if(a){e="cke_bm_"+CKEDITOR.tools.getNextNumber();b.setAttribute("id",e+(d?"C":"S"))}if(!d){c=b.clone();c.setHtml("&nbsp;");a&&c.setAttribute("id",
e+"E");f=this.clone();f.collapse();f.insertNode(c)}f=this.clone();f.collapse(true);f.insertNode(b);if(c){this.setStartAfter(b);this.setEndBefore(c)}else this.moveToPosition(b,CKEDITOR.POSITION_AFTER_END);return{startNode:a?e+(d?"C":"S"):b,endNode:a?e+"E":c,serializable:a,collapsed:d}},createBookmark2:function(){function a(b){var c=b.container,e=b.offset,f;f=c;var d=e;f=f.type!=CKEDITOR.NODE_ELEMENT||d===0||d==f.getChildCount()?0:f.getChild(d-1).type==CKEDITOR.NODE_TEXT&&f.getChild(d).type==CKEDITOR.NODE_TEXT;
if(f){c=c.getChild(e-1);e=c.getLength()}c.type==CKEDITOR.NODE_ELEMENT&&e>1&&(e=c.getChild(e-1).getIndex(true)+1);if(c.type==CKEDITOR.NODE_TEXT){f=c;for(d=0;(f=f.getPrevious())&&f.type==CKEDITOR.NODE_TEXT;)d=d+f.getLength();e=e+d}b.container=c;b.offset=e}return function(b){var c=this.collapsed,e={container:this.startContainer,offset:this.startOffset},f={container:this.endContainer,offset:this.endOffset};if(b){a(e);c||a(f)}return{start:e.container.getAddress(b),end:c?null:f.container.getAddress(b),
startOffset:e.offset,endOffset:f.offset,normalized:b,collapsed:c,is2:true}}}(),moveToBookmark:function(a){if(a.is2){var b=this.document.getByAddress(a.start,a.normalized),c=a.startOffset,e=a.end&&this.document.getByAddress(a.end,a.normalized),a=a.endOffset;this.setStart(b,c);e?this.setEnd(e,a):this.collapse(true)}else{b=(c=a.serializable)?this.document.getById(a.startNode):a.startNode;a=c?this.document.getById(a.endNode):a.endNode;this.setStartBefore(b);b.remove();if(a){this.setEndBefore(a);a.remove()}else this.collapse(true)}},
getBoundaryNodes:function(){var a=this.startContainer,b=this.endContainer,c=this.startOffset,e=this.endOffset,f;if(a.type==CKEDITOR.NODE_ELEMENT){f=a.getChildCount();if(f>c)a=a.getChild(c);else if(f<1)a=a.getPreviousSourceNode();else{for(a=a.$;a.lastChild;)a=a.lastChild;a=new CKEDITOR.dom.node(a);a=a.getNextSourceNode()||a}}if(b.type==CKEDITOR.NODE_ELEMENT){f=b.getChildCount();if(f>e)b=b.getChild(e).getPreviousSourceNode(true);else if(f<1)b=b.getPreviousSourceNode();else{for(b=b.$;b.lastChild;)b=
b.lastChild;b=new CKEDITOR.dom.node(b)}}a.getPosition(b)&CKEDITOR.POSITION_FOLLOWING&&(a=b);return{startNode:a,endNode:b}},getCommonAncestor:function(a,b){var c=this.startContainer,e=this.endContainer,c=c.equals(e)?a&&c.type==CKEDITOR.NODE_ELEMENT&&this.startOffset==this.endOffset-1?c.getChild(this.startOffset):c:c.getCommonAncestor(e);return b&&!c.is?c.getParent():c},optimize:function(){var a=this.startContainer,b=this.startOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setStartAfter(a):
this.setStartBefore(a));a=this.endContainer;b=this.endOffset;a.type!=CKEDITOR.NODE_ELEMENT&&(b?b>=a.getLength()&&this.setEndAfter(a):this.setEndBefore(a))},optimizeBookmark:function(){var a=this.startContainer,b=this.endContainer;a.is&&(a.is("span")&&a.data("cke-bookmark"))&&this.setStartAt(a,CKEDITOR.POSITION_BEFORE_START);b&&(b.is&&b.is("span")&&b.data("cke-bookmark"))&&this.setEndAt(b,CKEDITOR.POSITION_AFTER_END)},trim:function(a,b){var c=this.startContainer,e=this.startOffset,f=this.collapsed;
if((!a||f)&&c&&c.type==CKEDITOR.NODE_TEXT){if(e)if(e>=c.getLength()){e=c.getIndex()+1;c=c.getParent()}else{var d=c.split(e),e=c.getIndex()+1,c=c.getParent();if(this.startContainer.equals(this.endContainer))this.setEnd(d,this.endOffset-this.startOffset);else if(c.equals(this.endContainer))this.endOffset=this.endOffset+1}else{e=c.getIndex();c=c.getParent()}this.setStart(c,e);if(f){this.collapse(true);return}}c=this.endContainer;e=this.endOffset;if(!b&&!f&&c&&c.type==CKEDITOR.NODE_TEXT){if(e){e>=c.getLength()||
c.split(e);e=c.getIndex()+1}else e=c.getIndex();c=c.getParent();this.setEnd(c,e)}},enlarge:function(a,b){function c(a){return a&&a.type==CKEDITOR.NODE_ELEMENT&&a.hasAttribute("contenteditable")?null:a}var e=RegExp(/[^\s\ufeff]/);switch(a){case CKEDITOR.ENLARGE_INLINE:var f=1;case CKEDITOR.ENLARGE_ELEMENT:if(this.collapsed)break;var d=this.getCommonAncestor(),i=this.root,k,m,j,n,r,h=false,t,g;t=this.startContainer;var l=this.startOffset;if(t.type==CKEDITOR.NODE_TEXT){if(l){t=!CKEDITOR.tools.trim(t.substring(0,
l)).length&&t;h=!!t}if(t&&!(n=t.getPrevious()))j=t.getParent()}else{l&&(n=t.getChild(l-1)||t.getLast());n||(j=t)}for(j=c(j);j||n;){if(j&&!n){!r&&j.equals(d)&&(r=true);if(f?j.isBlockBoundary():!i.contains(j))break;if(!h||j.getComputedStyle("display")!="inline"){h=false;r?k=j:this.setStartBefore(j)}n=j.getPrevious()}for(;n;){t=false;if(n.type==CKEDITOR.NODE_COMMENT)n=n.getPrevious();else{if(n.type==CKEDITOR.NODE_TEXT){g=n.getText();e.test(g)&&(n=null);t=/[\s\ufeff]$/.test(g)}else if((n.$.offsetWidth>
0||b&&n.is("br"))&&!n.data("cke-bookmark"))if(h&&CKEDITOR.dtd.$removeEmpty[n.getName()]){g=n.getText();if(e.test(g))n=null;else for(var l=n.$.getElementsByTagName("*"),I=0,B;B=l[I++];)if(!CKEDITOR.dtd.$removeEmpty[B.nodeName.toLowerCase()]){n=null;break}n&&(t=!!g.length)}else n=null;t&&(h?r?k=j:j&&this.setStartBefore(j):h=true);if(n){t=n.getPrevious();if(!j&&!t){j=n;n=null;break}n=t}else j=null}}j&&(j=c(j.getParent()))}t=this.endContainer;l=this.endOffset;j=n=null;r=h=false;var N=function(a,b){var c=
new CKEDITOR.dom.range(i);c.setStart(a,b);c.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);var c=new CKEDITOR.dom.walker(c),f;for(c.guard=function(a){return!(a.type==CKEDITOR.NODE_ELEMENT&&a.isBlockBoundary())};f=c.next();){if(f.type!=CKEDITOR.NODE_TEXT)return false;g=f!=a?f.getText():f.substring(b);if(e.test(g))return false}return true};if(t.type==CKEDITOR.NODE_TEXT)if(CKEDITOR.tools.trim(t.substring(l)).length)h=true;else{h=!t.getLength();if(l==t.getLength()){if(!(n=t.getNext()))j=t.getParent()}else N(t,
l)&&(j=t.getParent())}else(n=t.getChild(l))||(j=t);for(;j||n;){if(j&&!n){!r&&j.equals(d)&&(r=true);if(f?j.isBlockBoundary():!i.contains(j))break;if(!h||j.getComputedStyle("display")!="inline"){h=false;r?m=j:j&&this.setEndAfter(j)}n=j.getNext()}for(;n;){t=false;if(n.type==CKEDITOR.NODE_TEXT){g=n.getText();N(n,0)||(n=null);t=/^[\s\ufeff]/.test(g)}else if(n.type==CKEDITOR.NODE_ELEMENT){if((n.$.offsetWidth>0||b&&n.is("br"))&&!n.data("cke-bookmark"))if(h&&CKEDITOR.dtd.$removeEmpty[n.getName()]){g=n.getText();
if(e.test(g))n=null;else{l=n.$.getElementsByTagName("*");for(I=0;B=l[I++];)if(!CKEDITOR.dtd.$removeEmpty[B.nodeName.toLowerCase()]){n=null;break}}n&&(t=!!g.length)}else n=null}else t=1;t&&h&&(r?m=j:this.setEndAfter(j));if(n){t=n.getNext();if(!j&&!t){j=n;n=null;break}n=t}else j=null}j&&(j=c(j.getParent()))}if(k&&m){d=k.contains(m)?m:k;this.setStartBefore(d);this.setEndAfter(d)}break;case CKEDITOR.ENLARGE_BLOCK_CONTENTS:case CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:j=new CKEDITOR.dom.range(this.root);i=
this.root;j.setStartAt(i,CKEDITOR.POSITION_AFTER_START);j.setEnd(this.startContainer,this.startOffset);j=new CKEDITOR.dom.walker(j);var H,v,x=CKEDITOR.dom.walker.blockBoundary(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?{br:1}:null),C=null,D=function(a){if(a.type==CKEDITOR.NODE_ELEMENT&&a.getAttribute("contenteditable")=="false")if(C){if(C.equals(a)){C=null;return}}else C=a;else if(C)return;var b=x(a);b||(H=a);return b},f=function(a){var b=D(a);!b&&(a.is&&a.is("br"))&&(v=a);return b};j.guard=D;j=j.lastBackward();
H=H||i;this.setStartAt(H,!H.is("br")&&(!j&&this.checkStartOfBlock()||j&&H.contains(j))?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_AFTER_END);if(a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS){j=this.clone();j=new CKEDITOR.dom.walker(j);var z=CKEDITOR.dom.walker.whitespaces(),T=CKEDITOR.dom.walker.bookmark();j.evaluator=function(a){return!z(a)&&!T(a)};if((j=j.previous())&&j.type==CKEDITOR.NODE_ELEMENT&&j.is("br"))break}j=this.clone();j.collapse();j.setEndAt(i,CKEDITOR.POSITION_BEFORE_END);j=new CKEDITOR.dom.walker(j);
j.guard=a==CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS?f:D;H=null;j=j.lastForward();H=H||i;this.setEndAt(H,!j&&this.checkEndOfBlock()||j&&H.contains(j)?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_BEFORE_START);v&&this.setEndAfter(v)}},shrink:function(a,b,c){if(!this.collapsed){var a=a||CKEDITOR.SHRINK_TEXT,e=this.clone(),f=this.startContainer,d=this.endContainer,i=this.startOffset,h=this.endOffset,m=1,j=1;if(f&&f.type==CKEDITOR.NODE_TEXT)if(i)if(i>=f.getLength())e.setStartAfter(f);else{e.setStartBefore(f);
m=0}else e.setStartBefore(f);if(d&&d.type==CKEDITOR.NODE_TEXT)if(h)if(h>=d.getLength())e.setEndAfter(d);else{e.setEndAfter(d);j=0}else e.setEndBefore(d);var e=new CKEDITOR.dom.walker(e),n=CKEDITOR.dom.walker.bookmark();e.evaluator=function(b){return b.type==(a==CKEDITOR.SHRINK_ELEMENT?CKEDITOR.NODE_ELEMENT:CKEDITOR.NODE_TEXT)};var r;e.guard=function(b,f){if(n(b))return true;if(a==CKEDITOR.SHRINK_ELEMENT&&b.type==CKEDITOR.NODE_TEXT||f&&b.equals(r)||c===false&&b.type==CKEDITOR.NODE_ELEMENT&&b.isBlockBoundary()||
b.type==CKEDITOR.NODE_ELEMENT&&b.hasAttribute("contenteditable"))return false;!f&&b.type==CKEDITOR.NODE_ELEMENT&&(r=b);return true};if(m)(f=e[a==CKEDITOR.SHRINK_ELEMENT?"lastForward":"next"]())&&this.setStartAt(f,b?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_START);if(j){e.reset();(e=e[a==CKEDITOR.SHRINK_ELEMENT?"lastBackward":"previous"]())&&this.setEndAt(e,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_END)}return!(!m&&!j)}},insertNode:function(a){this.optimizeBookmark();this.trim(false,
true);var b=this.startContainer,c=b.getChild(this.startOffset);c?a.insertBefore(c):b.append(a);a.getParent()&&a.getParent().equals(this.endContainer)&&this.endOffset++;this.setStartBefore(a)},moveToPosition:function(a,b){this.setStartAt(a,b);this.collapse(true)},moveToRange:function(a){this.setStart(a.startContainer,a.startOffset);this.setEnd(a.endContainer,a.endOffset)},selectNodeContents:function(a){this.setStart(a,0);this.setEnd(a,a.type==CKEDITOR.NODE_TEXT?a.getLength():a.getChildCount())},setStart:function(a,
b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex();a=a.getParent()}this.startContainer=a;this.startOffset=b;if(!this.endContainer){this.endContainer=a;this.endOffset=b}c(this)},setEnd:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$empty[a.getName()]){b=a.getIndex()+1;a=a.getParent()}this.endContainer=a;this.endOffset=b;if(!this.startContainer){this.startContainer=a;this.startOffset=b}c(this)},setStartAfter:function(a){this.setStart(a.getParent(),a.getIndex()+
1)},setStartBefore:function(a){this.setStart(a.getParent(),a.getIndex())},setEndAfter:function(a){this.setEnd(a.getParent(),a.getIndex()+1)},setEndBefore:function(a){this.setEnd(a.getParent(),a.getIndex())},setStartAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setStart(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==CKEDITOR.NODE_TEXT?this.setStart(a,a.getLength()):this.setStart(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setStartBefore(a);break;case CKEDITOR.POSITION_AFTER_END:this.setStartAfter(a)}c(this)},
setEndAt:function(a,b){switch(b){case CKEDITOR.POSITION_AFTER_START:this.setEnd(a,0);break;case CKEDITOR.POSITION_BEFORE_END:a.type==CKEDITOR.NODE_TEXT?this.setEnd(a,a.getLength()):this.setEnd(a,a.getChildCount());break;case CKEDITOR.POSITION_BEFORE_START:this.setEndBefore(a);break;case CKEDITOR.POSITION_AFTER_END:this.setEndAfter(a)}c(this)},fixBlock:function(a,b){var c=this.createBookmark(),e=this.document.createElement(b);this.collapse(a);this.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);this.extractContents().appendTo(e);
e.trim();e.appendBogus();this.insertNode(e);this.moveToBookmark(c);return e},splitBlock:function(a){var b=new CKEDITOR.dom.elementPath(this.startContainer,this.root),c=new CKEDITOR.dom.elementPath(this.endContainer,this.root),e=b.block,f=c.block,d=null;if(!b.blockLimit.equals(c.blockLimit))return null;if(a!="br"){if(!e){e=this.fixBlock(true,a);f=(new CKEDITOR.dom.elementPath(this.endContainer,this.root)).block}f||(f=this.fixBlock(false,a))}a=e&&this.checkStartOfBlock();b=f&&this.checkEndOfBlock();
this.deleteContents();if(e&&e.equals(f))if(b){d=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(f,CKEDITOR.POSITION_AFTER_END);f=null}else if(a){d=new CKEDITOR.dom.elementPath(this.startContainer,this.root);this.moveToPosition(e,CKEDITOR.POSITION_BEFORE_START);e=null}else{f=this.splitElement(e);e.is("ul","ol")||e.appendBogus()}return{previousBlock:e,nextBlock:f,wasStartOfBlock:a,wasEndOfBlock:b,elementPath:d}},splitElement:function(a){if(!this.collapsed)return null;
this.setEndAt(a,CKEDITOR.POSITION_BEFORE_END);var b=this.extractContents(),c=a.clone(false);b.appendTo(c);c.insertAfter(a);this.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);return c},removeEmptyBlocksAtEnd:function(){function a(e){return function(a){return b(a)||(c(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.isEmptyInlineRemoveable())||e.is("table")&&a.is("caption")?false:true}}var b=CKEDITOR.dom.walker.whitespaces(),c=CKEDITOR.dom.walker.bookmark(false);return function(b){for(var c=this.createBookmark(),
e=this[b?"endPath":"startPath"](),d=e.block||e.blockLimit,i;d&&!d.equals(e.root)&&!d.getFirst(a(d));){i=d.getParent();this[b?"setEndAt":"setStartAt"](d,CKEDITOR.POSITION_AFTER_END);d.remove(1);d=i}this.moveToBookmark(c)}}(),startPath:function(){return new CKEDITOR.dom.elementPath(this.startContainer,this.root)},endPath:function(){return new CKEDITOR.dom.elementPath(this.endContainer,this.root)},checkBoundaryOfElement:function(a,b){var c=b==CKEDITOR.START,e=this.clone();e.collapse(c);e[c?"setStartAt":
"setEndAt"](a,c?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END);e=new CKEDITOR.dom.walker(e);e.evaluator=d(c);return e[c?"checkBackward":"checkForward"]()},checkStartOfBlock:function(){var b=this.startContainer,c=this.startOffset;if(CKEDITOR.env.ie&&c&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.ltrim(b.substring(0,c));l.test(b)&&this.trim(0,1)}this.trim();b=new CKEDITOR.dom.elementPath(this.startContainer,this.root);c=this.clone();c.collapse(true);c.setStartAt(b.block||b.blockLimit,
CKEDITOR.POSITION_AFTER_START);b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkBackward()},checkEndOfBlock:function(){var b=this.endContainer,c=this.endOffset;if(CKEDITOR.env.ie&&b.type==CKEDITOR.NODE_TEXT){b=CKEDITOR.tools.rtrim(b.substring(c));l.test(b)&&this.trim(1,0)}this.trim();b=new CKEDITOR.dom.elementPath(this.endContainer,this.root);c=this.clone();c.collapse(false);c.setEndAt(b.block||b.blockLimit,CKEDITOR.POSITION_BEFORE_END);b=new CKEDITOR.dom.walker(c);b.evaluator=a();return b.checkForward()},
getPreviousNode:function(a,b,c){var e=this.clone();e.collapse(1);e.setStartAt(c||this.root,CKEDITOR.POSITION_AFTER_START);c=new CKEDITOR.dom.walker(e);c.evaluator=a;c.guard=b;return c.previous()},getNextNode:function(a,b,c){var e=this.clone();e.collapse();e.setEndAt(c||this.root,CKEDITOR.POSITION_BEFORE_END);c=new CKEDITOR.dom.walker(e);c.evaluator=a;c.guard=b;return c.next()},checkReadOnly:function(){function a(b,c){for(;b;){if(b.type==CKEDITOR.NODE_ELEMENT){if(b.getAttribute("contentEditable")==
"false"&&!b.data("cke-editable"))return 0;if(b.is("html")||b.getAttribute("contentEditable")=="true"&&(b.contains(c)||b.equals(c)))break}b=b.getParent()}return 1}return function(){var b=this.startContainer,c=this.endContainer;return!(a(b,c)&&a(c,b))}}(),moveToElementEditablePosition:function(a,b){if(a.type==CKEDITOR.NODE_ELEMENT&&!a.isEditable(false)){this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);return true}for(var c=0;a;){if(a.type==CKEDITOR.NODE_TEXT){b&&this.endContainer&&
this.checkEndOfBlock()&&l.test(a.getText())?this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START):this.moveToPosition(a,b?CKEDITOR.POSITION_AFTER_END:CKEDITOR.POSITION_BEFORE_START);c=1;break}if(a.type==CKEDITOR.NODE_ELEMENT)if(a.isEditable()){this.moveToPosition(a,b?CKEDITOR.POSITION_BEFORE_END:CKEDITOR.POSITION_AFTER_START);c=1}else if(b&&a.is("br")&&this.endContainer&&this.checkEndOfBlock())this.moveToPosition(a,CKEDITOR.POSITION_BEFORE_START);else if(a.getAttribute("contenteditable")=="false"&&
a.is(CKEDITOR.dtd.$block)){this.setStartBefore(a);this.setEndAfter(a);return true}var e=a,f=c,d=void 0;e.type==CKEDITOR.NODE_ELEMENT&&e.isEditable(false)&&(d=e[b?"getLast":"getFirst"](k));!f&&!d&&(d=e[b?"getPrevious":"getNext"](k));a=d}return!!c},moveToClosestEditablePosition:function(a,b){var c=new CKEDITOR.dom.range(this.root),e=0,f,d=[CKEDITOR.POSITION_AFTER_END,CKEDITOR.POSITION_BEFORE_START];c.moveToPosition(a,d[b?0:1]);if(a.is(CKEDITOR.dtd.$block)){if(f=c[b?"getNextEditableNode":"getPreviousEditableNode"]()){e=
1;if(f.type==CKEDITOR.NODE_ELEMENT&&f.is(CKEDITOR.dtd.$block)&&f.getAttribute("contenteditable")=="false"){c.setStartAt(f,CKEDITOR.POSITION_BEFORE_START);c.setEndAt(f,CKEDITOR.POSITION_AFTER_END)}else c.moveToPosition(f,d[b?1:0])}}else e=1;e&&this.moveToRange(c);return!!e},moveToElementEditStart:function(a){return this.moveToElementEditablePosition(a)},moveToElementEditEnd:function(a){return this.moveToElementEditablePosition(a,true)},getEnclosedNode:function(){var a=this.clone();a.optimize();if(a.startContainer.type!=
CKEDITOR.NODE_ELEMENT||a.endContainer.type!=CKEDITOR.NODE_ELEMENT)return null;var a=new CKEDITOR.dom.walker(a),b=CKEDITOR.dom.walker.bookmark(false,true),c=CKEDITOR.dom.walker.whitespaces(true);a.evaluator=function(a){return c(a)&&b(a)};var e=a.next();a.reset();return e&&e.equals(a.previous())?e:null},getTouchedStartNode:function(){var a=this.startContainer;return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.startOffset)||a},getTouchedEndNode:function(){var a=this.endContainer;
return this.collapsed||a.type!=CKEDITOR.NODE_ELEMENT?a:a.getChild(this.endOffset-1)||a},getNextEditableNode:b(),getPreviousEditableNode:b(1),scrollIntoView:function(){var a=new CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",this.document),b,c,e,f=this.clone();f.optimize();if(e=f.startContainer.type==CKEDITOR.NODE_TEXT){c=f.startContainer.getText();b=f.startContainer.split(f.startOffset);a.insertAfter(f.startContainer)}else f.insertNode(a);a.scrollIntoView();if(e){f.startContainer.setText(c);
b.remove()}a.remove()}}})();CKEDITOR.POSITION_AFTER_START=1;CKEDITOR.POSITION_BEFORE_END=2;CKEDITOR.POSITION_BEFORE_START=3;CKEDITOR.POSITION_AFTER_END=4;CKEDITOR.ENLARGE_ELEMENT=1;CKEDITOR.ENLARGE_BLOCK_CONTENTS=2;CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS=3;CKEDITOR.ENLARGE_INLINE=4;CKEDITOR.START=1;CKEDITOR.END=2;CKEDITOR.SHRINK_ELEMENT=1;CKEDITOR.SHRINK_TEXT=2;"use strict";
(function(){function a(a){if(!(arguments.length<1)){this.range=a;this.forceBrBreak=0;this.enlargeBr=1;this.enforceRealBlocks=0;this._||(this._={})}}function d(a,b,c){for(a=a.getNextSourceNode(b,null,c);!i(a);)a=a.getNextSourceNode(b,null,c);return a}function b(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")=="true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function c(a,e,d,i){a:{i==void 0&&(i=b(d));for(var g;g=i.shift();)if(g.getDtd().p){i={element:g,remaining:i};
break a}i=null}if(!i)return 0;if((g=CKEDITOR.filter.instances[i.element.data("cke-filter")])&&!g.check(e))return c(a,e,d,i.remaining);e=new CKEDITOR.dom.range(i.element);e.selectNodeContents(i.element);e=e.createIterator();e.enlargeBr=a.enlargeBr;e.enforceRealBlocks=a.enforceRealBlocks;e.activeFilter=e.filter=g;a._.nestedEditable={element:i.element,container:d,remaining:i.remaining,iterator:e};return 1}var e=/^[\r\n\t ]+$/,i=CKEDITOR.dom.walker.bookmark(false,true),g=CKEDITOR.dom.walker.whitespaces(true),
l=function(a){return i(a)&&g(a)};a.prototype={getNextParagraph:function(a){var b,g,s,q,u,a=a||"p";if(this._.nestedEditable){if(b=this._.nestedEditable.iterator.getNextParagraph(a)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return b}this.activeFilter=this.filter;if(c(this,a,this._.nestedEditable.container,this._.nestedEditable.remaining)){this.activeFilter=this._.nestedEditable.iterator.activeFilter;return this._.nestedEditable.iterator.getNextParagraph(a)}this._.nestedEditable=
null}if(!this.range.root.getDtd()[a])return null;if(!this._.started){var f=this.range.clone();f.shrink(CKEDITOR.SHRINK_ELEMENT,true);g=f.endContainer.hasAscendant("pre",true)||f.startContainer.hasAscendant("pre",true);f.enlarge(this.forceBrBreak&&!g||!this.enlargeBr?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);if(!f.collapsed){g=new CKEDITOR.dom.walker(f.clone());var p=CKEDITOR.dom.walker.bookmark(true,true);g.evaluator=p;this._.nextNode=g.next();g=new CKEDITOR.dom.walker(f.clone());
g.evaluator=p;g=g.previous();this._.lastNode=g.getNextSourceNode(true);if(this._.lastNode&&this._.lastNode.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(this._.lastNode.getText())&&this._.lastNode.getParent().isBlockBoundary()){p=this.range.clone();p.moveToPosition(this._.lastNode,CKEDITOR.POSITION_AFTER_END);if(p.checkEndOfBlock()){p=new CKEDITOR.dom.elementPath(p.endContainer,p.root);this._.lastNode=(p.block||p.blockLimit).getNextSourceNode(true)}}if(!this._.lastNode||!f.root.contains(this._.lastNode)){this._.lastNode=
this._.docEndMarker=f.document.createText("");this._.lastNode.insertAfter(g)}f=null}this._.started=1;g=f}p=this._.nextNode;f=this._.lastNode;for(this._.nextNode=null;p;){var y=0,A=p.hasAscendant("pre"),m=p.type!=CKEDITOR.NODE_ELEMENT,j=0;if(m)p.type==CKEDITOR.NODE_TEXT&&e.test(p.getText())&&(m=0);else{var n=p.getName();if(CKEDITOR.dtd.$block[n]&&p.getAttribute("contenteditable")=="false"){b=p;c(this,a,b);break}else if(p.isBlockBoundary(this.forceBrBreak&&!A&&{br:1})){if(n=="br")m=1;else if(!g&&!p.getChildCount()&&
n!="hr"){b=p;s=p.equals(f);break}if(g){g.setEndAt(p,CKEDITOR.POSITION_BEFORE_START);if(n!="br")this._.nextNode=p}y=1}else{if(p.getFirst()){if(!g){g=this.range.clone();g.setStartAt(p,CKEDITOR.POSITION_BEFORE_START)}p=p.getFirst();continue}m=1}}if(m&&!g){g=this.range.clone();g.setStartAt(p,CKEDITOR.POSITION_BEFORE_START)}s=(!y||m)&&p.equals(f);if(g&&!y)for(;!p.getNext(l)&&!s;){n=p.getParent();if(n.isBlockBoundary(this.forceBrBreak&&!A&&{br:1})){y=1;m=0;s||n.equals(f);g.setEndAt(n,CKEDITOR.POSITION_BEFORE_END);
break}p=n;m=1;s=p.equals(f);j=1}m&&g.setEndAt(p,CKEDITOR.POSITION_AFTER_END);p=d(p,j,f);if((s=!p)||y&&g)break}if(!b){if(!g){this._.docEndMarker&&this._.docEndMarker.remove();return this._.nextNode=null}b=new CKEDITOR.dom.elementPath(g.startContainer,g.root);p=b.blockLimit;y={div:1,th:1,td:1};b=b.block;if(!b&&p&&!this.enforceRealBlocks&&y[p.getName()]&&g.checkStartOfBlock()&&g.checkEndOfBlock()&&!p.equals(g.root))b=p;else if(!b||this.enforceRealBlocks&&b.getName()=="li"){b=this.range.document.createElement(a);
g.extractContents().appendTo(b);b.trim();g.insertNode(b);q=u=true}else if(b.getName()!="li"){if(!g.checkStartOfBlock()||!g.checkEndOfBlock()){b=b.clone(false);g.extractContents().appendTo(b);b.trim();u=g.splitBlock();q=!u.wasStartOfBlock;u=!u.wasEndOfBlock;g.insertNode(b)}}else if(!s)this._.nextNode=b.equals(f)?null:d(g.getBoundaryNodes().endNode,1,f)}if(q)(q=b.getPrevious())&&q.type==CKEDITOR.NODE_ELEMENT&&(q.getName()=="br"?q.remove():q.getLast()&&q.getLast().$.nodeName.toLowerCase()=="br"&&q.getLast().remove());
if(u)(q=b.getLast())&&q.type==CKEDITOR.NODE_ELEMENT&&q.getName()=="br"&&(!CKEDITOR.env.needsBrFiller||q.getPrevious(i)||q.getNext(i))&&q.remove();if(!this._.nextNode)this._.nextNode=s||b.equals(f)||!f?null:d(b,1,f);return b}};CKEDITOR.dom.range.prototype.createIterator=function(){return new a(this)}})();
CKEDITOR.command=function(a,d){this.uiItems=[];this.exec=function(b){if(this.state==CKEDITOR.TRISTATE_DISABLED||!this.checkAllowed())return false;this.editorFocus&&a.focus();return this.fire("exec")===false?true:d.exec.call(this,a,b)!==false};this.refresh=function(a,b){if(!this.readOnly&&a.readOnly)return true;if(this.context&&!b.isContextFor(this.context)){this.disable();return true}if(!this.checkAllowed(true)){this.disable();return true}this.startDisabled||this.enable();this.modes&&!this.modes[a.mode]&&
this.disable();return this.fire("refresh",{editor:a,path:b})===false?true:d.refresh&&d.refresh.apply(this,arguments)!==false};var b;this.checkAllowed=function(c){return!c&&typeof b=="boolean"?b:b=a.activeFilter.checkFeature(this)};CKEDITOR.tools.extend(this,d,{modes:{wysiwyg:1},editorFocus:1,contextSensitive:!!d.context,state:CKEDITOR.TRISTATE_DISABLED});CKEDITOR.event.call(this)};
CKEDITOR.command.prototype={enable:function(){this.state==CKEDITOR.TRISTATE_DISABLED&&this.checkAllowed()&&this.setState(!this.preserveState||typeof this.previousState=="undefined"?CKEDITOR.TRISTATE_OFF:this.previousState)},disable:function(){this.setState(CKEDITOR.TRISTATE_DISABLED)},setState:function(a){if(this.state==a||a!=CKEDITOR.TRISTATE_DISABLED&&!this.checkAllowed())return false;this.previousState=this.state;this.state=a;this.fire("state");return true},toggleState:function(){this.state==CKEDITOR.TRISTATE_OFF?
this.setState(CKEDITOR.TRISTATE_ON):this.state==CKEDITOR.TRISTATE_ON&&this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.event.implementOn(CKEDITOR.command.prototype);CKEDITOR.ENTER_P=1;CKEDITOR.ENTER_BR=2;CKEDITOR.ENTER_DIV=3;
CKEDITOR.config={customConfig:"config.js",autoUpdateElement:!0,language:"",defaultLanguage:"en",contentsLangDirection:"",enterMode:CKEDITOR.ENTER_P,forceEnterMode:!1,shiftEnterMode:CKEDITOR.ENTER_BR,docType:"<!DOCTYPE html>",bodyId:"",bodyClass:"",fullPage:!1,height:200,extraPlugins:"",removePlugins:"",protectedSource:[],tabIndex:0,width:"",baseFloatZIndex:1E4,blockedKeystrokes:[CKEDITOR.CTRL+66,CKEDITOR.CTRL+73,CKEDITOR.CTRL+85,CKEDITOR.CTRL+89,CKEDITOR.CTRL+90,CKEDITOR.CTRL+CKEDITOR.SHIFT+90]};
(function(){function a(a,b,c,f,z){var j=b.name;if((f||typeof a.elements!="function"||a.elements(j))&&(!a.match||a.match(b))){if(f=!z){a:if(a.nothingRequired)f=true;else{if(z=a.requiredClasses){j=b.classes;for(f=0;f<z.length;++f)if(CKEDITOR.tools.indexOf(j,z[f])==-1){f=false;break a}}f=e(b.styles,a.requiredStyles)&&e(b.attributes,a.requiredAttributes)}f=!f}if(!f){if(!a.propertiesOnly)c.valid=true;if(!c.allAttributes)c.allAttributes=d(a.attributes,b.attributes,c.validAttributes);if(!c.allStyles)c.allStyles=
d(a.styles,b.styles,c.validStyles);if(!c.allClasses){a=a.classes;b=b.classes;f=c.validClasses;if(a)if(a===true)b=true;else{for(var z=0,j=b.length,i;z<j;++z){i=b[z];f[i]||(f[i]=a(i))}b=false}else b=false;c.allClasses=b}}}}function d(a,b,c){if(!a)return false;if(a===true)return true;for(var e in b)c[e]||(c[e]=a(e,b[e]));return false}function b(a,b){if(!a)return false;if(a===true)return a;if(typeof a=="string"){a=J(a);return a=="*"?true:CKEDITOR.tools.convertArrayToObject(a.split(b))}if(CKEDITOR.tools.isArray(a))return a.length?
CKEDITOR.tools.convertArrayToObject(a):false;var c={},e=0,f;for(f in a){c[f]=a[f];e++}return e?c:false}function c(b){if(b._.filterFunction)return b._.filterFunction;var c=/^cke:(object|embed|param)$/,e=/^(object|embed|param)$/;return b._.filterFunction=function(f,d,j,i,m,n,t){var g=f.name,r,y=false;if(m)f.name=g=g.replace(c,"$1");if(j=j&&j[g]){h(f);for(g=0;g<j.length;++g)p(b,f,j[g]);k(f)}if(d){var g=f.name,j=d.elements[g],l=d.generic,d={valid:false,validAttributes:{},validClasses:{},validStyles:{},
allAttributes:false,allClasses:false,allStyles:false};if(!j&&!l){i.push(f);return true}h(f);if(j){g=0;for(r=j.length;g<r;++g)a(j[g],f,d,true,n)}if(l){g=0;for(r=l.length;g<r;++g)a(l[g],f,d,false,n)}if(!d.valid){i.push(f);return true}n=d.validAttributes;g=d.validStyles;j=d.validClasses;r=f.attributes;var l=f.styles,J=r["class"],G=r.style,w,B,A=[],I=[],s=/^data-cke-/,q=false;delete r.style;delete r["class"];if(!d.allAttributes)for(w in r)if(!n[w])if(s.test(w)){if(w!=(B=w.replace(/^data-cke-saved-/,""))&&
!n[B]){delete r[w];q=true}}else{delete r[w];q=true}if(d.allStyles){if(G)r.style=G}else{for(w in l)g[w]?A.push(w+":"+l[w]):q=true;if(A.length)r.style=A.sort().join("; ")}if(d.allClasses)J&&(r["class"]=J);else{for(w in j)j[w]&&I.push(w);I.length&&(r["class"]=I.sort().join(" "));J&&I.length<J.split(/\s+/).length&&(q=true)}q&&(y=true);if(!t&&!o(f)){i.push(f);return true}}if(m)f.name=f.name.replace(e,"cke:$1");return y}}function e(a,b){if(!b)return true;for(var c=0;c<b.length;++c)if(!(b[c]in a))return false;
return true}function i(a){if(!a)return{};for(var a=a.split(/\s*,\s*/).sort(),b={};a.length;)b[a.shift()]=t;return b}function g(a){for(var b,c,e,f,d={},j=1,a=J(a);b=a.match(B);){if(c=b[2]){e=l(c,"styles");f=l(c,"attrs");c=l(c,"classes")}else e=f=c=null;d["$"+j++]={elements:b[1],classes:c,styles:e,attributes:f};a=a.slice(b[0].length)}return d}function l(a,b){var c=a.match(N[b]);return c?J(c[1]):null}function h(a){if(!a.styles)a.styles=CKEDITOR.tools.parseCssText(a.attributes.style||"",1);if(!a.classes)a.classes=
a.attributes["class"]?a.attributes["class"].split(/\s+/):[]}function k(a){var b=a.attributes,c;delete b.style;delete b["class"];if(c=CKEDITOR.tools.writeCssText(a.styles,true))b.style=c;a.classes.length&&(b["class"]=a.classes.sort().join(" "))}function o(a){switch(a.name){case "a":if(!a.children.length&&!a.attributes.name)return false;break;case "img":if(!a.attributes.src)return false}return true}function s(a){return!a?false:a===true?true:function(b){return b in a}}function q(){return new CKEDITOR.htmlParser.element("br")}
function u(a){return a.type==CKEDITOR.NODE_ELEMENT&&(a.name=="br"||n.$block[a.name])}function f(a,b,c){var e=a.name;if(n.$empty[e]||!a.children.length)if(e=="hr"&&b=="br")a.replaceWith(q());else{a.parent&&c.push({check:"it",el:a.parent});a.remove()}else if(n.$block[e]||e=="tr")if(b=="br"){if(a.previous&&!u(a.previous)){b=q();b.insertBefore(a)}if(a.next&&!u(a.next)){b=q();b.insertAfter(a)}a.replaceWithChildren()}else{var e=a.children,f;b:{f=n[b];for(var d=0,j=e.length,i;d<j;++d){i=e[d];if(i.type==
CKEDITOR.NODE_ELEMENT&&!f[i.name]){f=false;break b}}f=true}if(f){a.name=b;a.attributes={};c.push({check:"parent-down",el:a})}else{f=a.parent;for(var d=f.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT||f.name=="body",m,j=e.length;j>0;){i=e[--j];if(d&&(i.type==CKEDITOR.NODE_TEXT||i.type==CKEDITOR.NODE_ELEMENT&&n.$inline[i.name])){if(!m){m=new CKEDITOR.htmlParser.element(b);m.insertAfter(a);c.push({check:"parent-down",el:m})}m.add(i,0)}else{m=null;i.insertAfter(a);f.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(i.type==
CKEDITOR.NODE_ELEMENT&&!n[f.name][i.name])&&c.push({check:"el-up",el:i})}}a.remove()}}else if(e=="style")a.remove();else{a.parent&&c.push({check:"it",el:a.parent});a.replaceWithChildren()}}function p(a,b,c){var e,f;for(e=0;e<c.length;++e){f=c[e];if((!f.check||a.check(f.check,false))&&(!f.left||f.left(b))){f.right(b,H);break}}}function y(a,b){var c=b.getDefinition(),e=c.attributes,f=c.styles,d,j,i,m;if(a.name!=c.element)return false;for(d in e)if(d=="class"){c=e[d].split(/\s+/);for(i=a.classes.join("|");m=
c.pop();)if(i.indexOf(m)==-1)return false}else if(a.attributes[d]!=e[d])return false;for(j in f)if(a.styles[j]!=f[j])return false;return true}function A(a,b){var c,e;if(typeof a=="string")c=a;else if(a instanceof CKEDITOR.style)e=a;else{c=a[0];e=a[1]}return[{element:c,left:e,right:function(a,c){c.transform(a,b)}}]}function m(a){return function(b){return y(b,a)}}function j(a){return function(b,c){c[a](b)}}var n=CKEDITOR.dtd,r=CKEDITOR.tools.copy,J=CKEDITOR.tools.trim,t="cke-test",w=["","p","br","div"];
CKEDITOR.filter=function(a){this.allowedContent=[];this.disabled=false;this.editor=null;this.id=CKEDITOR.tools.getNextNumber();this._={rules:{},transformations:{},cachedTests:{}};CKEDITOR.filter.instances[this.id]=this;if(a instanceof CKEDITOR.editor){a=this.editor=a;this.customConfig=true;var b=a.config.allowedContent;if(b===true)this.disabled=true;else{if(!b)this.customConfig=false;this.allow(b,"config",1);this.allow(a.config.extraAllowedContent,"extra",1);this.allow(w[a.enterMode]+" "+w[a.shiftEnterMode],
"default",1)}}else{this.customConfig=false;this.allow(a,"default",1)}};CKEDITOR.filter.instances={};CKEDITOR.filter.prototype={allow:function(a,c,e){if(this.disabled||this.customConfig&&!e||!a)return false;this._.cachedChecks={};var f,d;if(typeof a=="string")a=g(a);else if(a instanceof CKEDITOR.style){d=a.getDefinition();e={};a=d.attributes;e[d.element]=d={styles:d.styles,requiredStyles:d.styles&&CKEDITOR.tools.objectKeys(d.styles)};if(a){a=r(a);d.classes=a["class"]?a["class"].split(/\s+/):null;d.requiredClasses=
d.classes;delete a["class"];d.attributes=a;d.requiredAttributes=a&&CKEDITOR.tools.objectKeys(a)}a=e}else if(CKEDITOR.tools.isArray(a)){for(f=0;f<a.length;++f)d=this.allow(a[f],c,e);return d}var j,e=[];for(j in a){d=a[j];d=typeof d=="boolean"?{}:typeof d=="function"?{match:d}:r(d);if(j.charAt(0)!="$")d.elements=j;if(c)d.featureName=c.toLowerCase();var i=d;i.elements=b(i.elements,/\s+/)||null;i.propertiesOnly=i.propertiesOnly||i.elements===true;var m=/\s*,\s*/,n=void 0;for(n in G){i[n]=b(i[n],m)||null;
var p=i,t=I[n],h=b(i[I[n]],m),k=i[n],y=[],l=true,w=void 0;h?l=false:h={};for(w in k)if(w.charAt(0)=="!"){w=w.slice(1);y.push(w);h[w]=true;l=false}for(;w=y.pop();){k[w]=k["!"+w];delete k["!"+w]}p[t]=(l?false:h)||null}i.match=i.match||null;this.allowedContent.push(d);e.push(d)}c=this._.rules;j=c.elements||{};a=c.generic||[];d=0;for(i=e.length;d<i;++d){m=r(e[d]);n=m.classes===true||m.styles===true||m.attributes===true;p=m;t=void 0;for(t in G)p[t]=s(p[t]);h=true;for(t in I){t=I[t];p[t]=CKEDITOR.tools.objectKeys(p[t]);
p[t]&&(h=false)}p.nothingRequired=h;if(m.elements===true||m.elements===null){m.elements=s(m.elements);a[n?"unshift":"push"](m)}else{p=m.elements;delete m.elements;for(f in p)if(j[f])j[f][n?"unshift":"push"](m);else j[f]=[m]}}c.elements=j;c.generic=a.length?a:null;return true},applyTo:function(a,b,e,d){if(this.disabled)return false;var j=[],i=!e&&this._.rules,m=this._.transformations,p=c(this),g=this.editor&&this.editor.config.protectedSource,t=false;a.forEach(function(a){if(a.type==CKEDITOR.NODE_ELEMENT){if(a.attributes["data-cke-filter"]==
"off")return false;if(!b||!(a.name=="span"&&~CKEDITOR.tools.objectKeys(a.attributes).join("|").indexOf("data-cke-")))p(a,i,m,j,b)&&(t=true)}else if(a.type==CKEDITOR.NODE_COMMENT&&a.value.match(/^\{cke_protected\}(?!\{C\})/)){var c;a:{var e=decodeURIComponent(a.value.replace(/^\{cke_protected\}/,""));c=[];var f,d,n;if(g)for(d=0;d<g.length;++d)if((n=e.match(g[d]))&&n[0].length==e.length){c=true;break a}e=CKEDITOR.htmlParser.fragment.fromHtml(e);e.children.length==1&&(f=e.children[0]).type==CKEDITOR.NODE_ELEMENT&&
p(f,i,m,c,b);c=!c.length}c||j.push(a)}},null,true);j.length&&(t=true);for(var r,a=[],d=w[d||(this.editor?this.editor.enterMode:CKEDITOR.ENTER_P)];e=j.pop();)e.type==CKEDITOR.NODE_ELEMENT?f(e,d,a):e.remove();for(;r=a.pop();){e=r.el;if(e.parent)switch(r.check){case "it":n.$removeEmpty[e.name]&&!e.children.length?f(e,d,a):o(e)||f(e,d,a);break;case "el-up":e.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&!n[e.parent.name][e.name]&&f(e,d,a);break;case "parent-down":e.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT&&
!n[e.parent.name][e.name]&&f(e.parent,d,a)}}return t},checkFeature:function(a){if(this.disabled||!a)return true;a.toFeature&&(a=a.toFeature(this.editor));return!a.requiredContent||this.check(a.requiredContent)},disable:function(){this.disabled=true},addContentForms:function(a){if(!this.disabled&&a){var b,c,e=[],f;for(b=0;b<a.length&&!f;++b){c=a[b];if((typeof c=="string"||c instanceof CKEDITOR.style)&&this.check(c))f=c}if(f){for(b=0;b<a.length;++b)e.push(A(a[b],f));this.addTransformations(e)}}},addFeature:function(a){if(this.disabled||
!a)return true;a.toFeature&&(a=a.toFeature(this.editor));this.allow(a.allowedContent,a.name);this.addTransformations(a.contentTransformations);this.addContentForms(a.contentForms);return this.customConfig&&a.requiredContent?this.check(a.requiredContent):true},addTransformations:function(a){var b,c;if(!this.disabled&&a){var e=this._.transformations,f;for(f=0;f<a.length;++f){b=a[f];var d=void 0,i=void 0,n=void 0,p=void 0,g=void 0,t=void 0;c=[];for(i=0;i<b.length;++i){n=b[i];if(typeof n=="string"){n=
n.split(/\s*:\s*/);p=n[0];g=null;t=n[1]}else{p=n.check;g=n.left;t=n.right}if(!d){d=n;d=d.element?d.element:p?p.match(/^([a-z0-9]+)/i)[0]:d.left.getDefinition().element}g instanceof CKEDITOR.style&&(g=m(g));c.push({check:p==d?null:p,left:g,right:typeof t=="string"?j(t):t})}b=d;e[b]||(e[b]=[]);e[b].push(c)}}},check:function(a,b,e){if(this.disabled)return true;if(CKEDITOR.tools.isArray(a)){for(var f=a.length;f--;)if(this.check(a[f],b,e))return true;return false}var d,j;if(typeof a=="string"){j=a+"<"+
(b===false?"0":"1")+(e?"1":"0")+">";if(j in this._.cachedChecks)return this._.cachedChecks[j];f=g(a).$1;d=f.styles;var m=f.classes;f.name=f.elements;f.classes=m=m?m.split(/\s*,\s*/):[];f.styles=i(d);f.attributes=i(f.attributes);f.children=[];m.length&&(f.attributes["class"]=m.join(" "));if(d)f.attributes.style=CKEDITOR.tools.writeCssText(f.styles);d=f}else{f=a.getDefinition();d=f.styles;m=f.attributes||{};if(d){d=r(d);m.style=CKEDITOR.tools.writeCssText(d,true)}else d={};d={name:f.element,attributes:m,
classes:m["class"]?m["class"].split(/\s+/):[],styles:d,children:[]}}var m=CKEDITOR.tools.clone(d),n=[],t;if(b!==false&&(t=this._.transformations[d.name])){for(f=0;f<t.length;++f)p(this,d,t[f]);k(d)}c(this)(m,this._.rules,b===false?false:this._.transformations,n,false,!e,!e);b=n.length>0?false:CKEDITOR.tools.objectCompare(d.attributes,m.attributes,true)?true:false;typeof a=="string"&&(this._.cachedChecks[j]=b);return b},getAllowedEnterMode:function(){var a=["p","div","br"],b={p:CKEDITOR.ENTER_P,div:CKEDITOR.ENTER_DIV,
br:CKEDITOR.ENTER_BR};return function(c,e){var f=a.slice(),d;if(this.check(w[c]))return c;for(e||(f=f.reverse());d=f.pop();)if(this.check(d))return b[d];return CKEDITOR.ENTER_BR}}()};var G={styles:1,attributes:1,classes:1},I={styles:"requiredStyles",attributes:"requiredAttributes",classes:"requiredClasses"},B=/^([a-z0-9*\s]+)((?:\s*\{[!\w\-,\s\*]+\}\s*|\s*\[[!\w\-,\s\*]+\]\s*|\s*\([!\w\-,\s\*]+\)\s*){0,3})(?:;\s*|$)/i,N={styles:/{([^}]+)}/,attrs:/\[([^\]]+)\]/,classes:/\(([^\)]+)\)/},H=CKEDITOR.filter.transformationsTools=
{sizeToStyle:function(a){this.lengthToStyle(a,"width");this.lengthToStyle(a,"height")},sizeToAttribute:function(a){this.lengthToAttribute(a,"width");this.lengthToAttribute(a,"height")},lengthToStyle:function(a,b,c){c=c||b;if(!(c in a.styles)){var e=a.attributes[b];if(e){/^\d+$/.test(e)&&(e=e+"px");a.styles[c]=e}}delete a.attributes[b]},lengthToAttribute:function(a,b,c){c=c||b;if(!(c in a.attributes)){var e=a.styles[b],f=e&&e.match(/^(\d+)(?:\.\d*)?px$/);f?a.attributes[c]=f[1]:e==t&&(a.attributes[c]=
t)}delete a.styles[b]},alignmentToStyle:function(a){if(!("float"in a.styles)){var b=a.attributes.align;if(b=="left"||b=="right")a.styles["float"]=b}delete a.attributes.align},alignmentToAttribute:function(a){if(!("align"in a.attributes)){var b=a.styles["float"];if(b=="left"||b=="right")a.attributes.align=b}delete a.styles["float"]},matchesStyle:y,transform:function(a,b){if(typeof b=="string")a.name=b;else{var c=b.getDefinition(),e=c.styles,f=c.attributes,d,j,i,m;a.name=c.element;for(d in f)if(d==
"class"){c=a.classes.join("|");for(i=f[d].split(/\s+/);m=i.pop();)c.indexOf(m)==-1&&a.classes.push(m)}else a.attributes[d]=f[d];for(j in e)a.styles[j]=e[j]}}}})();
(function(){CKEDITOR.focusManager=function(a){if(a.focusManager)return a.focusManager;this.hasFocus=false;this.currentActive=null;this._={editor:a};return this};CKEDITOR.focusManager._={blurDelay:200};CKEDITOR.focusManager.prototype={focus:function(a){this._.timer&&clearTimeout(this._.timer);if(a)this.currentActive=a;if(!this.hasFocus&&!this._.locked){(a=CKEDITOR.currentInstance)&&a.focusManager.blur(1);this.hasFocus=true;(a=this._.editor.container)&&a.addClass("cke_focus");this._.editor.fire("focus")}},
lock:function(){this._.locked=1},unlock:function(){delete this._.locked},blur:function(a){function d(){if(this.hasFocus){this.hasFocus=false;var a=this._.editor.container;a&&a.removeClass("cke_focus");this._.editor.fire("blur")}}if(!this._.locked){this._.timer&&clearTimeout(this._.timer);var b=CKEDITOR.focusManager._.blurDelay;a||!b?d.call(this):this._.timer=CKEDITOR.tools.setTimeout(function(){delete this._.timer;d.call(this)},b,this)}},add:function(a,d){var b=a.getCustomData("focusmanager");if(!b||
b!=this){b&&b.remove(a);var b="focus",c="blur";if(d)if(CKEDITOR.env.ie){b="focusin";c="focusout"}else CKEDITOR.event.useCapture=1;var e={blur:function(){a.equals(this.currentActive)&&this.blur()},focus:function(){this.focus(a)}};a.on(b,e.focus,this);a.on(c,e.blur,this);if(d)CKEDITOR.event.useCapture=0;a.setCustomData("focusmanager",this);a.setCustomData("focusmanager_handlers",e)}},remove:function(a){a.removeCustomData("focusmanager");var d=a.removeCustomData("focusmanager_handlers");a.removeListener("blur",
d.blur);a.removeListener("focus",d.focus)}}})();CKEDITOR.keystrokeHandler=function(a){if(a.keystrokeHandler)return a.keystrokeHandler;this.keystrokes={};this.blockedKeystrokes={};this._={editor:a};return this};
(function(){var a,d=function(b){var b=b.data,e=b.getKeystroke(),d=this.keystrokes[e],g=this._.editor;a=g.fire("key",{keyCode:e})===false;if(!a){d&&(a=g.execCommand(d,{from:"keystrokeHandler"})!==false);a||(a=!!this.blockedKeystrokes[e])}a&&b.preventDefault(true);return!a},b=function(b){if(a){a=false;b.data.preventDefault(true)}};CKEDITOR.keystrokeHandler.prototype={attach:function(a){a.on("keydown",d,this);if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)a.on("keypress",b,this)}}})();
(function(){CKEDITOR.lang={languages:{af:1,ar:1,bg:1,bn:1,bs:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,"en-au":1,"en-ca":1,"en-gb":1,en:1,eo:1,es:1,et:1,eu:1,fa:1,fi:1,fo:1,"fr-ca":1,fr:1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,ja:1,ka:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,ms:1,nb:1,nl:1,no:1,pl:1,"pt-br":1,pt:1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,"sr-latn":1,sr:1,sv:1,th:1,tr:1,ug:1,uk:1,vi:1,"zh-cn":1,zh:1},rtl:{ar:1,fa:1,he:1,ku:1,ug:1},load:function(a,d,b){if(!a||!CKEDITOR.lang.languages[a])a=this.detect(d,
a);this[a]?b(a,this[a]):CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("lang/"+a+".js"),function(){this[a].dir=this.rtl[a]?"rtl":"ltr";b(a,this[a])},this)},detect:function(a,d){var b=this.languages,d=d||navigator.userLanguage||navigator.language||a,c=d.toLowerCase().match(/([a-z]+)(?:-([a-z]+))?/),e=c[1],c=c[2];b[e+"-"+c]?e=e+"-"+c:b[e]||(e=null);CKEDITOR.lang.detect=e?function(){return e}:function(a){return a};return e||a}}})();
CKEDITOR.scriptLoader=function(){var a={},d={};return{load:function(b,c,e,i){var g=typeof b=="string";g&&(b=[b]);e||(e=CKEDITOR);var l=b.length,h=[],k=[],o=function(a){c&&(g?c.call(e,a):c.call(e,h,k))};if(l===0)o(true);else{var s=function(a,b){(b?h:k).push(a);if(--l<=0){i&&CKEDITOR.document.getDocumentElement().removeStyle("cursor");o(b)}},q=function(b,c){a[b]=1;var e=d[b];delete d[b];for(var f=0;f<e.length;f++)e[f](b,c)},u=function(b){if(a[b])s(b,true);else{var e=d[b]||(d[b]=[]);e.push(s);if(!(e.length>
1)){var f=new CKEDITOR.dom.element("script");f.setAttributes({type:"text/javascript",src:b});if(c)if(CKEDITOR.env.ie&&CKEDITOR.env.version<11)f.$.onreadystatechange=function(){if(f.$.readyState=="loaded"||f.$.readyState=="complete"){f.$.onreadystatechange=null;q(b,true)}};else{f.$.onload=function(){setTimeout(function(){q(b,true)},0)};f.$.onerror=function(){q(b,false)}}f.appendTo(CKEDITOR.document.getHead())}}};i&&CKEDITOR.document.getDocumentElement().setStyle("cursor","wait");for(var f=0;f<l;f++)u(b[f])}},
queue:function(){function a(){var b;(b=c[0])&&this.load(b.scriptUrl,b.callback,CKEDITOR,0)}var c=[];return function(e,d){var g=this;c.push({scriptUrl:e,callback:function(){d&&d.apply(this,arguments);c.shift();a.call(g)}});c.length==1&&a.call(this)}}()}}();CKEDITOR.resourceManager=function(a,d){this.basePath=a;this.fileName=d;this.registered={};this.loaded={};this.externals={};this._={waitingList:{}}};
CKEDITOR.resourceManager.prototype={add:function(a,d){if(this.registered[a])throw'[CKEDITOR.resourceManager.add] The resource name "'+a+'" is already registered.';var b=this.registered[a]=d||{};b.name=a;b.path=this.getPath(a);CKEDITOR.fire(a+CKEDITOR.tools.capitalize(this.fileName)+"Ready",b);return this.get(a)},get:function(a){return this.registered[a]||null},getPath:function(a){var d=this.externals[a];return CKEDITOR.getUrl(d&&d.dir||this.basePath+a+"/")},getFilePath:function(a){var d=this.externals[a];
return CKEDITOR.getUrl(this.getPath(a)+(d?d.file:this.fileName+".js"))},addExternal:function(a,d,b){for(var a=a.split(","),c=0;c<a.length;c++){var e=a[c];b||(d=d.replace(/[^\/]+$/,function(a){b=a;return""}));this.externals[e]={dir:d,file:b||this.fileName+".js"}}},load:function(a,d,b){CKEDITOR.tools.isArray(a)||(a=a?[a]:[]);for(var c=this.loaded,e=this.registered,i=[],g={},l={},h=0;h<a.length;h++){var k=a[h];if(k)if(!c[k]&&!e[k]){var o=this.getFilePath(k);i.push(o);o in g||(g[o]=[]);g[o].push(k)}else l[k]=
this.get(k)}CKEDITOR.scriptLoader.load(i,function(a,e){if(e.length)throw'[CKEDITOR.resourceManager.load] Resource name "'+g[e[0]].join(",")+'" was not found at "'+e[0]+'".';for(var i=0;i<a.length;i++)for(var f=g[a[i]],p=0;p<f.length;p++){var h=f[p];l[h]=this.get(h);c[h]=1}d.call(b,l)},this)}};CKEDITOR.plugins=new CKEDITOR.resourceManager("plugins/","plugin");
CKEDITOR.plugins.load=CKEDITOR.tools.override(CKEDITOR.plugins.load,function(a){var d={};return function(b,c,e){var i={},g=function(b){a.call(this,b,function(a){CKEDITOR.tools.extend(i,a);var b=[],l;for(l in a){var s=a[l],q=s&&s.requires;if(!d[l]){if(s.icons)for(var u=s.icons.split(","),f=u.length;f--;)CKEDITOR.skin.addIcon(u[f],s.path+"icons/"+(CKEDITOR.env.hidpi&&s.hidpi?"hidpi/":"")+u[f]+".png");d[l]=1}if(q){q.split&&(q=q.split(","));for(s=0;s<q.length;s++)i[q[s]]||b.push(q[s])}}if(b.length)g.call(this,
b);else{for(l in i){s=i[l];if(s.onLoad&&!s.onLoad._called){s.onLoad()===false&&delete i[l];s.onLoad._called=1}}c&&c.call(e||window,i)}},this)};g.call(this,b)}});CKEDITOR.plugins.setLang=function(a,d,b){var c=this.get(a),a=c.langEntries||(c.langEntries={}),c=c.lang||(c.lang=[]);c.split&&(c=c.split(","));CKEDITOR.tools.indexOf(c,d)==-1&&c.push(d);a[d]=b};CKEDITOR.ui=function(a){if(a.ui)return a.ui;this.items={};this.instances={};this.editor=a;this._={handlers:{}};return this};
CKEDITOR.ui.prototype={add:function(a,d,b){b.name=a.toLowerCase();var c=this.items[a]={type:d,command:b.command||null,args:Array.prototype.slice.call(arguments,2)};CKEDITOR.tools.extend(c,b)},get:function(a){return this.instances[a]},create:function(a){var d=this.items[a],b=d&&this._.handlers[d.type],c=d&&d.command&&this.editor.getCommand(d.command),b=b&&b.create.apply(this,d.args);this.instances[a]=b;c&&c.uiItems.push(b);if(b&&!b.type)b.type=d.type;return b},addHandler:function(a,d){this._.handlers[a]=
d},space:function(a){return CKEDITOR.document.getById(this.spaceId(a))},spaceId:function(a){return this.editor.id+"_"+a}};CKEDITOR.event.implementOn(CKEDITOR.ui);
(function(){function a(a,c,i){CKEDITOR.event.call(this);a=a&&CKEDITOR.tools.clone(a);if(c!==void 0){if(c instanceof CKEDITOR.dom.element){if(!i)throw Error("One of the element modes must be specified.");}else throw Error("Expect element of type CKEDITOR.dom.element.");if(CKEDITOR.env.ie&&CKEDITOR.env.quirks&&i==CKEDITOR.ELEMENT_MODE_INLINE)throw Error("Inline element mode is not supported on IE quirks.");if(!(i==CKEDITOR.ELEMENT_MODE_INLINE?c.is(CKEDITOR.dtd.$editable)||c.is("textarea"):i==CKEDITOR.ELEMENT_MODE_REPLACE?
!c.is(CKEDITOR.dtd.$nonBodyContent):1))throw Error('The specified element mode is not supported on element: "'+c.getName()+'".');this.element=c;this.elementMode=i;this.name=this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO&&(c.getId()||c.getNameAtt())}else this.elementMode=CKEDITOR.ELEMENT_MODE_NONE;this._={};this.commands={};this.templates={};this.name=this.name||d();this.id=CKEDITOR.tools.getNextId();this.status="unloaded";this.config=CKEDITOR.tools.prototypedCopy(CKEDITOR.config);this.ui=new CKEDITOR.ui(this);
this.focusManager=new CKEDITOR.focusManager(this);this.keystrokeHandler=new CKEDITOR.keystrokeHandler(this);this.on("readOnly",b);this.on("selectionChange",function(a){e(this,a.data.path)});this.on("activeFilterChange",function(){e(this,this.elementPath(),true)});this.on("mode",b);this.on("instanceReady",function(){this.config.startupFocus&&this.focus()});CKEDITOR.fire("instanceCreated",null,this);CKEDITOR.add(this);CKEDITOR.tools.setTimeout(function(){g(this,a)},0,this)}function d(){do var a="editor"+
++q;while(CKEDITOR.instances[a]);return a}function b(){var a=this.commands,b;for(b in a)c(this,a[b])}function c(a,b){b[b.startDisabled?"disable":a.readOnly&&!b.readOnly?"disable":b.modes[a.mode]?"enable":"disable"]()}function e(a,b,c){if(b){var e,d,j=a.commands;for(d in j){e=j[d];(c||e.contextSensitive)&&e.refresh(a,b)}}}function i(a){var b=a.config.customConfig;if(!b)return false;var b=CKEDITOR.getUrl(b),c=u[b]||(u[b]={});if(c.fn){c.fn.call(a,a.config);(CKEDITOR.getUrl(a.config.customConfig)==b||
!i(a))&&a.fireOnce("customConfigLoaded")}else CKEDITOR.scriptLoader.queue(b,function(){c.fn=CKEDITOR.editorConfig?CKEDITOR.editorConfig:function(){};i(a)});return true}function g(a,b){a.on("customConfigLoaded",function(){if(b){if(b.on)for(var c in b.on)a.on(c,b.on[c]);CKEDITOR.tools.extend(a.config,b,true);delete a.config.on}c=a.config;a.readOnly=!(!c.readOnly&&!(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.is("textarea")?a.element.hasAttribute("disabled"):a.element.isReadOnly():a.elementMode==
CKEDITOR.ELEMENT_MODE_REPLACE&&a.element.hasAttribute("disabled")));a.blockless=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?!(a.element.is("textarea")||CKEDITOR.dtd[a.element.getName()].p):false;a.tabIndex=c.tabIndex||a.element&&a.element.getAttribute("tabindex")||0;a.activeEnterMode=a.enterMode=a.blockless?CKEDITOR.ENTER_BR:c.enterMode;a.activeShiftEnterMode=a.shiftEnterMode=a.blockless?CKEDITOR.ENTER_BR:c.shiftEnterMode;if(c.skin)CKEDITOR.skinName=c.skin;a.fireOnce("configLoaded");a.dataProcessor=
new CKEDITOR.htmlDataProcessor(a);a.filter=a.activeFilter=new CKEDITOR.filter(a);l(a)});if(b&&b.customConfig!=void 0)a.config.customConfig=b.customConfig;i(a)||a.fireOnce("customConfigLoaded")}function l(a){CKEDITOR.skin.loadPart("editor",function(){h(a)})}function h(a){CKEDITOR.lang.load(a.config.language,a.config.defaultLanguage,function(b,c){var e=a.config.title;a.langCode=b;a.lang=CKEDITOR.tools.prototypedCopy(c);a.title=typeof e=="string"||e===false?e:[a.lang.editor,a.name].join(", ");if(CKEDITOR.env.gecko&&
CKEDITOR.env.version<10900&&a.lang.dir=="rtl")a.lang.dir="ltr";if(!a.config.contentsLangDirection)a.config.contentsLangDirection=a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?a.element.getDirection(1):a.lang.dir;a.fire("langLoaded");k(a)})}function k(a){a.getStylesSet(function(b){a.once("loaded",function(){a.fire("stylesSet",{styles:b})},null,null,1);o(a)})}function o(a){var b=a.config,c=b.plugins,e=b.extraPlugins,d=b.removePlugins;if(e)var j=RegExp("(?:^|,)(?:"+e.replace(/\s*,\s*/g,"|")+")(?=,|$)",
"g"),c=c.replace(j,""),c=c+(","+e);if(d)var i=RegExp("(?:^|,)(?:"+d.replace(/\s*,\s*/g,"|")+")(?=,|$)","g"),c=c.replace(i,"");CKEDITOR.env.air&&(c=c+",adobeair");CKEDITOR.plugins.load(c.split(","),function(c){var e=[],d=[],j=[];a.plugins=c;for(var m in c){var g=c[m],h=g.lang,k=null,l=g.requires,v;CKEDITOR.tools.isArray(l)&&(l=l.join(","));if(l&&(v=l.match(i)))for(;l=v.pop();)CKEDITOR.tools.setTimeout(function(a,b){throw Error('Plugin "'+a.replace(",","")+'" cannot be removed from the plugins list, because it\'s required by "'+
b+'" plugin.');},0,null,[l,m]);if(h&&!a.lang[m]){h.split&&(h=h.split(","));if(CKEDITOR.tools.indexOf(h,a.langCode)>=0)k=a.langCode;else{k=a.langCode.replace(/-.*/,"");k=k!=a.langCode&&CKEDITOR.tools.indexOf(h,k)>=0?k:CKEDITOR.tools.indexOf(h,"en")>=0?"en":h[0]}if(!g.langEntries||!g.langEntries[k])j.push(CKEDITOR.getUrl(g.path+"lang/"+k+".js"));else{a.lang[m]=g.langEntries[k];k=null}}d.push(k);e.push(g)}CKEDITOR.scriptLoader.load(j,function(){for(var c=["beforeInit","init","afterInit"],j=0;j<c.length;j++)for(var i=
0;i<e.length;i++){var m=e[i];j===0&&(d[i]&&m.lang&&m.langEntries)&&(a.lang[m.name]=m.langEntries[d[i]]);if(m[c[j]])m[c[j]](a)}a.fireOnce("pluginsLoaded");b.keystrokes&&a.setKeystroke(a.config.keystrokes);for(i=0;i<a.config.blockedKeystrokes.length;i++)a.keystrokeHandler.blockedKeystrokes[a.config.blockedKeystrokes[i]]=1;a.status="loaded";a.fireOnce("loaded");CKEDITOR.fire("instanceLoaded",null,a)})})}function s(){var a=this.element;if(a&&this.elementMode!=CKEDITOR.ELEMENT_MODE_APPENDTO){var b=this.getData();
this.config.htmlEncodeOutput&&(b=CKEDITOR.tools.htmlEncode(b));a.is("textarea")?a.setValue(b):a.setHtml(b);return true}return false}a.prototype=CKEDITOR.editor.prototype;CKEDITOR.editor=a;var q=0,u={};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{addCommand:function(a,b){b.name=a.toLowerCase();var e=new CKEDITOR.command(this,b);this.mode&&c(this,e);return this.commands[a]=e},_attachToForm:function(){var a=this,b=a.element,c=new CKEDITOR.dom.element(b.$.form);if(b.is("textarea")&&c){var e=function(c){a.updateElement();
a._.required&&(!b.getValue()&&a.fire("required")===false)&&c.data.preventDefault()};c.on("submit",e);if(c.$.submit&&c.$.submit.call&&c.$.submit.apply)c.$.submit=CKEDITOR.tools.override(c.$.submit,function(a){return function(){e();a.apply?a.apply(this):a()}});a.on("destroy",function(){c.removeListener("submit",e)})}},destroy:function(a){this.fire("beforeDestroy");!a&&s.call(this);this.editable(null);this.status="destroyed";this.fire("destroy");this.removeAllListeners();CKEDITOR.remove(this);CKEDITOR.fire("instanceDestroyed",
null,this)},elementPath:function(a){if(!a){a=this.getSelection();if(!a)return null;a=a.getStartElement()}return a?new CKEDITOR.dom.elementPath(a,this.editable()):null},createRange:function(){var a=this.editable();return a?new CKEDITOR.dom.range(a):null},execCommand:function(a,b){var c=this.getCommand(a),e={name:a,commandData:b,command:c};if(c&&c.state!=CKEDITOR.TRISTATE_DISABLED&&this.fire("beforeCommandExec",e)!==false){e.returnValue=c.exec(e.commandData);if(!c.async&&this.fire("afterCommandExec",
e)!==false)return e.returnValue}return false},getCommand:function(a){return this.commands[a]},getData:function(a){!a&&this.fire("beforeGetData");var b=this._.data;if(typeof b!="string")b=(b=this.element)&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE?b.is("textarea")?b.getValue():b.getHtml():"";b={dataValue:b};!a&&this.fire("getData",b);return b.dataValue},getSnapshot:function(){var a=this.fire("getSnapshot");if(typeof a!="string"){var b=this.element;b&&this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&
(a=b.is("textarea")?b.getValue():b.getHtml())}return a},loadSnapshot:function(a){this.fire("loadSnapshot",a)},setData:function(a,b,c){if(b)this.on("dataReady",function(a){a.removeListener();b.call(a.editor)});a={dataValue:a};!c&&this.fire("setData",a);this._.data=a.dataValue;!c&&this.fire("afterSetData",a)},setReadOnly:function(a){a=a==void 0||a;if(this.readOnly!=a){this.readOnly=a;this.keystrokeHandler.blockedKeystrokes[8]=+a;this.editable().setReadOnly(a);this.fire("readOnly")}},insertHtml:function(a,
b){this.fire("insertHtml",{dataValue:a,mode:b})},insertText:function(a){this.fire("insertText",a)},insertElement:function(a){this.fire("insertElement",a)},focus:function(){this.fire("beforeFocus")},checkDirty:function(){return this.status=="ready"&&this._.previousValue!==this.getSnapshot()},resetDirty:function(){this._.previousValue=this.getSnapshot()},updateElement:function(){return s.call(this)},setKeystroke:function(){for(var a=this.keystrokeHandler.keystrokes,b=CKEDITOR.tools.isArray(arguments[0])?
arguments[0]:[[].slice.call(arguments,0)],c,e,d=b.length;d--;){c=b[d];e=0;if(CKEDITOR.tools.isArray(c)){e=c[1];c=c[0]}e?a[c]=e:delete a[c]}},addFeature:function(a){return this.filter.addFeature(a)},setActiveFilter:function(a){if(!a)a=this.filter;if(this.activeFilter!==a){this.activeFilter=a;this.fire("activeFilterChange");a===this.filter?this.setActiveEnterMode(null,null):this.setActiveEnterMode(a.getAllowedEnterMode(this.enterMode),a.getAllowedEnterMode(this.shiftEnterMode,true))}},setActiveEnterMode:function(a,
b){a=a?this.blockless?CKEDITOR.ENTER_BR:a:this.enterMode;b=b?this.blockless?CKEDITOR.ENTER_BR:b:this.shiftEnterMode;if(this.activeEnterMode!=a||this.activeShiftEnterMode!=b){this.activeEnterMode=a;this.activeShiftEnterMode=b;this.fire("activeEnterModeChange")}}})})();CKEDITOR.ELEMENT_MODE_NONE=0;CKEDITOR.ELEMENT_MODE_REPLACE=1;CKEDITOR.ELEMENT_MODE_APPENDTO=2;CKEDITOR.ELEMENT_MODE_INLINE=3;
CKEDITOR.htmlParser=function(){this._={htmlPartsRegex:RegExp("<(?:(?:\\/([^>]+)>)|(?:!--([\\S|\\s]*?)--\>)|(?:([^\\s>]+)\\s*((?:(?:\"[^\"]*\")|(?:'[^']*')|[^\"'>])*)\\/?>))","g")}};
(function(){var a=/([\w\-:.]+)(?:(?:\s*=\s*(?:(?:"([^"]*)")|(?:'([^']*)')|([^\s>]+)))|(?=\s|$))/g,d={checked:1,compact:1,declare:1,defer:1,disabled:1,ismap:1,multiple:1,nohref:1,noresize:1,noshade:1,nowrap:1,readonly:1,selected:1};CKEDITOR.htmlParser.prototype={onTagOpen:function(){},onTagClose:function(){},onText:function(){},onCDATA:function(){},onComment:function(){},parse:function(b){for(var c,e,i=0,g;c=this._.htmlPartsRegex.exec(b);){e=c.index;if(e>i){i=b.substring(i,e);if(g)g.push(i);else this.onText(i)}i=
this._.htmlPartsRegex.lastIndex;if(e=c[1]){e=e.toLowerCase();if(g&&CKEDITOR.dtd.$cdata[e]){this.onCDATA(g.join(""));g=null}if(!g){this.onTagClose(e);continue}}if(g)g.push(c[0]);else if(e=c[3]){e=e.toLowerCase();if(!/="/.test(e)){var l={},h;c=c[4];var k=!!(c&&c.charAt(c.length-1)=="/");if(c)for(;h=a.exec(c);){var o=h[1].toLowerCase();h=h[2]||h[3]||h[4]||"";l[o]=!h&&d[o]?o:CKEDITOR.tools.htmlDecodeAttr(h)}this.onTagOpen(e,l,k);!g&&CKEDITOR.dtd.$cdata[e]&&(g=[])}}else if(e=c[2])this.onComment(e)}if(b.length>
i)this.onText(b.substring(i,b.length))}}})();
CKEDITOR.htmlParser.basicWriter=CKEDITOR.tools.createClass({$:function(){this._={output:[]}},proto:{openTag:function(a){this._.output.push("<",a)},openTagClose:function(a,d){d?this._.output.push(" />"):this._.output.push(">")},attribute:function(a,d){typeof d=="string"&&(d=CKEDITOR.tools.htmlEncodeAttr(d));this._.output.push(" ",a,'="',d,'"')},closeTag:function(a){this._.output.push("</",a,">")},text:function(a){this._.output.push(a)},comment:function(a){this._.output.push("<\!--",a,"--\>")},write:function(a){this._.output.push(a)},
reset:function(){this._.output=[];this._.indent=false},getHtml:function(a){var d=this._.output.join("");a&&this.reset();return d}}});"use strict";
(function(){CKEDITOR.htmlParser.node=function(){};CKEDITOR.htmlParser.node.prototype={remove:function(){var a=this.parent.children,d=CKEDITOR.tools.indexOf(a,this),b=this.previous,c=this.next;b&&(b.next=c);c&&(c.previous=b);a.splice(d,1);this.parent=null},replaceWith:function(a){var d=this.parent.children,b=CKEDITOR.tools.indexOf(d,this),c=a.previous=this.previous,e=a.next=this.next;c&&(c.next=a);e&&(e.previous=a);d[b]=a;a.parent=this.parent;this.parent=null},insertAfter:function(a){var d=a.parent.children,
b=CKEDITOR.tools.indexOf(d,a),c=a.next;d.splice(b+1,0,this);this.next=a.next;this.previous=a;a.next=this;c&&(c.previous=this);this.parent=a.parent},insertBefore:function(a){var d=a.parent.children,b=CKEDITOR.tools.indexOf(d,a);d.splice(b,0,this);this.next=a;(this.previous=a.previous)&&(a.previous.next=this);a.previous=this;this.parent=a.parent},getAscendant:function(a){var d=typeof a=="function"?a:typeof a=="string"?function(b){return b.name==a}:function(b){return b.name in a},b=this.parent;for(;b&&
b.type==CKEDITOR.NODE_ELEMENT;){if(d(b))return b;b=b.parent}return null},wrapWith:function(a){this.replaceWith(a);a.add(this);return a},getIndex:function(){return CKEDITOR.tools.indexOf(this.parent.children,this)},getFilterContext:function(a){return a||{}}}})();"use strict";CKEDITOR.htmlParser.comment=function(a){this.value=a;this._={isBlockLike:false}};
CKEDITOR.htmlParser.comment.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_COMMENT,filter:function(a,d){var b=this.value;if(!(b=a.onComment(d,b,this))){this.remove();return false}if(typeof b!="string"){this.replaceWith(b);return false}this.value=b;return true},writeHtml:function(a,d){d&&this.filter(d);a.comment(this.value)}});"use strict";
(function(){CKEDITOR.htmlParser.text=function(a){this.value=a;this._={isBlockLike:false}};CKEDITOR.htmlParser.text.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(a,d){if(!(this.value=a.onText(d,this.value,this))){this.remove();return false}},writeHtml:function(a,d){d&&this.filter(d);a.text(this.value)}})})();"use strict";
(function(){CKEDITOR.htmlParser.cdata=function(a){this.value=a};CKEDITOR.htmlParser.cdata.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_TEXT,filter:function(){},writeHtml:function(a){a.write(this.value)}})})();"use strict";CKEDITOR.htmlParser.fragment=function(){this.children=[];this.parent=null;this._={isBlockLike:true,hasInlineStarted:false}};
(function(){function a(a){return a.attributes["data-cke-survive"]?false:a.name=="a"&&a.attributes.href||CKEDITOR.dtd.$removeEmpty[a.name]}var d=CKEDITOR.tools.extend({table:1,ul:1,ol:1,dl:1},CKEDITOR.dtd.table,CKEDITOR.dtd.ul,CKEDITOR.dtd.ol,CKEDITOR.dtd.dl),b={ol:1,ul:1},c=CKEDITOR.tools.extend({},{html:1},CKEDITOR.dtd.html,CKEDITOR.dtd.body,CKEDITOR.dtd.head,{style:1,script:1}),e={ul:"li",ol:"li",dl:"dd",table:"tbody",tbody:"tr",thead:"tr",tfoot:"tr",tr:"td"};CKEDITOR.htmlParser.fragment.fromHtml=
function(i,g,l){function h(a){var b;if(y.length>0)for(var c=0;c<y.length;c++){var e=y[c],d=e.name,f=CKEDITOR.dtd[d],j=m.name&&CKEDITOR.dtd[m.name];if((!j||j[d])&&(!a||!f||f[a]||!CKEDITOR.dtd[a])){if(!b){k();b=1}e=e.clone();e.parent=m;m=e;y.splice(c,1);c--}else if(d==m.name){s(m,m.parent,1);c--}}}function k(){for(;A.length;)s(A.shift(),m)}function o(a){if(a._.isBlockLike&&a.name!="pre"&&a.name!="textarea"){var b=a.children.length,c=a.children[b-1],e;if(c&&c.type==CKEDITOR.NODE_TEXT)(e=CKEDITOR.tools.rtrim(c.value))?
c.value=e:a.children.length=b-1}}function s(b,c,e){var c=c||m||p,d=m;if(b.previous===void 0){if(q(c,b)){m=c;f.onTagOpen(l,{});b.returnPoint=c=m}o(b);(!a(b)||b.children.length)&&c.add(b);b.name=="pre"&&(n=false);b.name=="textarea"&&(j=false)}if(b.returnPoint){m=b.returnPoint;delete b.returnPoint}else m=e?c:d}function q(a,b){if((a==p||a.name=="body")&&l&&(!a.name||CKEDITOR.dtd[a.name][l])){var c,e;return(c=b.attributes&&(e=b.attributes["data-cke-real-element-type"])?e:b.name)&&c in CKEDITOR.dtd.$inline&&
!(c in CKEDITOR.dtd.head)&&!b.isOrphan||b.type==CKEDITOR.NODE_TEXT}}function u(a,b){return a in CKEDITOR.dtd.$listItem||a in CKEDITOR.dtd.$tableContent?a==b||a=="dt"&&b=="dd"||a=="dd"&&b=="dt":false}var f=new CKEDITOR.htmlParser,p=g instanceof CKEDITOR.htmlParser.element?g:typeof g=="string"?new CKEDITOR.htmlParser.element(g):new CKEDITOR.htmlParser.fragment,y=[],A=[],m=p,j=p.name=="textarea",n=p.name=="pre";f.onTagOpen=function(e,i,g,p){i=new CKEDITOR.htmlParser.element(e,i);if(i.isUnknown&&g)i.isEmpty=
true;i.isOptionalClose=p;if(a(i))y.push(i);else{if(e=="pre")n=true;else{if(e=="br"&&n){m.add(new CKEDITOR.htmlParser.text("\n"));return}e=="textarea"&&(j=true)}if(e=="br")A.push(i);else{for(;;){p=(g=m.name)?CKEDITOR.dtd[g]||(m._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!i.isUnknown&&!m.isUnknown&&!p[e])if(m.isOptionalClose)f.onTagClose(g);else if(e in b&&g in b){g=m.children;(g=g[g.length-1])&&g.name=="li"||s(g=new CKEDITOR.htmlParser.element("li"),m);!i.returnPoint&&(i.returnPoint=m);
m=g}else if(e in CKEDITOR.dtd.$listItem&&!u(e,g))f.onTagOpen(e=="li"?"ul":"dl",{},0,1);else if(g in d&&!u(e,g)){!i.returnPoint&&(i.returnPoint=m);m=m.parent}else{g in CKEDITOR.dtd.$inline&&y.unshift(m);if(m.parent)s(m,m.parent,1);else{i.isOrphan=1;break}}else break}h(e);k();i.parent=m;i.isEmpty?s(i):m=i}}};f.onTagClose=function(a){for(var b=y.length-1;b>=0;b--)if(a==y[b].name){y.splice(b,1);return}for(var c=[],e=[],d=m;d!=p&&d.name!=a;){d._.isBlockLike||e.unshift(d);c.push(d);d=d.returnPoint||d.parent}if(d!=
p){for(b=0;b<c.length;b++){var f=c[b];s(f,f.parent)}m=d;d._.isBlockLike&&k();s(d,d.parent);if(d==m)m=m.parent;y=y.concat(e)}a=="body"&&(l=false)};f.onText=function(a){if((!m._.hasInlineStarted||A.length)&&!n&&!j){a=CKEDITOR.tools.ltrim(a);if(a.length===0)return}var b=m.name,i=b?CKEDITOR.dtd[b]||(m._.isBlockLike?CKEDITOR.dtd.div:CKEDITOR.dtd.span):c;if(!j&&!i["#"]&&b in d){f.onTagOpen(e[b]||"");f.onText(a)}else{k();h();!n&&!j&&(a=a.replace(/[\t\r\n ]{2,}|[\t\r\n]/g," "));a=new CKEDITOR.htmlParser.text(a);
if(q(m,a))this.onTagOpen(l,{},0,1);m.add(a)}};f.onCDATA=function(a){m.add(new CKEDITOR.htmlParser.cdata(a))};f.onComment=function(a){k();h();m.add(new CKEDITOR.htmlParser.comment(a))};f.parse(i);for(k();m!=p;)s(m,m.parent,1);o(p);return p};CKEDITOR.htmlParser.fragment.prototype={type:CKEDITOR.NODE_DOCUMENT_FRAGMENT,add:function(a,b){isNaN(b)&&(b=this.children.length);var c=b>0?this.children[b-1]:null;if(c){if(a._.isBlockLike&&c.type==CKEDITOR.NODE_TEXT){c.value=CKEDITOR.tools.rtrim(c.value);if(c.value.length===
0){this.children.pop();this.add(a);return}}c.next=a}a.previous=c;a.parent=this;this.children.splice(b,0,a);if(!this._.hasInlineStarted)this._.hasInlineStarted=a.type==CKEDITOR.NODE_TEXT||a.type==CKEDITOR.NODE_ELEMENT&&!a._.isBlockLike},filter:function(a,b){b=this.getFilterContext(b);a.onRoot(b,this);this.filterChildren(a,false,b)},filterChildren:function(a,b,c){if(this.childrenFilteredBy!=a.id){c=this.getFilterContext(c);if(b&&!this.parent)a.onRoot(c,this);this.childrenFilteredBy=a.id;for(b=0;b<this.children.length;b++)this.children[b].filter(a,
c)===false&&b--}},writeHtml:function(a,b){b&&this.filter(b);this.writeChildrenHtml(a)},writeChildrenHtml:function(a,b,c){var e=this.getFilterContext();if(c&&!this.parent&&b)b.onRoot(e,this);b&&this.filterChildren(b,false,e);b=0;c=this.children;for(e=c.length;b<e;b++)c[b].writeHtml(a)},forEach:function(a,b,c){if(!c&&(!b||this.type==b))var e=a(this);if(e!==false)for(var c=this.children,d=0;d<c.length;d++){e=c[d];e.type==CKEDITOR.NODE_ELEMENT?e.forEach(a,b):(!b||e.type==b)&&a(e)}},getFilterContext:function(a){return a||
{}}}})();"use strict";
(function(){function a(){this.rules=[]}function d(b,c,e,d){var g,l;for(g in c){(l=b[g])||(l=b[g]=new a);l.add(c[g],e,d)}}CKEDITOR.htmlParser.filter=CKEDITOR.tools.createClass({$:function(b){this.id=CKEDITOR.tools.getNextNumber();this.elementNameRules=new a;this.attributeNameRules=new a;this.elementsRules={};this.attributesRules={};this.textRules=new a;this.commentRules=new a;this.rootRules=new a;b&&this.addRules(b,10)},proto:{addRules:function(a,c){var e;if(typeof c=="number")e=c;else if(c&&"priority"in
c)e=c.priority;typeof e!="number"&&(e=10);typeof c!="object"&&(c={});a.elementNames&&this.elementNameRules.addMany(a.elementNames,e,c);a.attributeNames&&this.attributeNameRules.addMany(a.attributeNames,e,c);a.elements&&d(this.elementsRules,a.elements,e,c);a.attributes&&d(this.attributesRules,a.attributes,e,c);a.text&&this.textRules.add(a.text,e,c);a.comment&&this.commentRules.add(a.comment,e,c);a.root&&this.rootRules.add(a.root,e,c)},applyTo:function(a){a.filter(this)},onElementName:function(a,c){return this.elementNameRules.execOnName(a,
c)},onAttributeName:function(a,c){return this.attributeNameRules.execOnName(a,c)},onText:function(a,c,e){return this.textRules.exec(a,c,e)},onComment:function(a,c,e){return this.commentRules.exec(a,c,e)},onRoot:function(a,c){return this.rootRules.exec(a,c)},onElement:function(a,c){for(var e=[this.elementsRules["^"],this.elementsRules[c.name],this.elementsRules.$],d,g=0;g<3;g++)if(d=e[g]){d=d.exec(a,c,this);if(d===false)return null;if(d&&d!=c)return this.onNode(a,d);if(c.parent&&!c.name)break}return c},
onNode:function(a,c){var e=c.type;return e==CKEDITOR.NODE_ELEMENT?this.onElement(a,c):e==CKEDITOR.NODE_TEXT?new CKEDITOR.htmlParser.text(this.onText(a,c.value)):e==CKEDITOR.NODE_COMMENT?new CKEDITOR.htmlParser.comment(this.onComment(a,c.value)):null},onAttribute:function(a,c,e,d){return(e=this.attributesRules[e])?e.exec(a,d,c,this):d}}});CKEDITOR.htmlParser.filterRulesGroup=a;a.prototype={add:function(a,c,e){this.rules.splice(this.findIndex(c),0,{value:a,priority:c,options:e})},addMany:function(a,
c,e){for(var d=[this.findIndex(c),0],g=0,l=a.length;g<l;g++)d.push({value:a[g],priority:c,options:e});this.rules.splice.apply(this.rules,d)},findIndex:function(a){for(var c=this.rules,e=c.length-1;e>=0&&a<c[e].priority;)e--;return e+1},exec:function(a,c){var e=c instanceof CKEDITOR.htmlParser.node||c instanceof CKEDITOR.htmlParser.fragment,d=Array.prototype.slice.call(arguments,1),g=this.rules,l=g.length,h,k,o,s;for(s=0;s<l;s++){if(e){h=c.type;k=c.name}o=g[s];if(!(a.nonEditable&&!o.options.applyToAll||
a.nestedEditable&&o.options.excludeNestedEditable)){o=o.value.apply(null,d);if(o===false||e&&o&&(o.name!=k||o.type!=h))return o;o!=void 0&&(d[0]=c=o)}}return c},execOnName:function(a,c){for(var e=0,d=this.rules,g=d.length,l;c&&e<g;e++){l=d[e];!(a.nonEditable&&!l.options.applyToAll||a.nestedEditable&&l.options.excludeNestedEditable)&&(c=c.replace(l.value[0],l.value[1]))}return c}}})();
(function(){function a(a,d){function f(a){return a||CKEDITOR.env.needsNbspFiller?new CKEDITOR.htmlParser.text(" "):new CKEDITOR.htmlParser.element("br",{"data-cke-bogus":1})}function j(a,e){return function(d){if(d.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var j=[],m=b(d),n,g;if(m)for(t(m,1)&&j.push(m);m;){if(i(m)&&(n=c(m))&&t(n))if((g=c(n))&&!i(g))j.push(n);else{f(h).insertAfter(n);n.remove()}m=m.previous}for(m=0;m<j.length;m++)j[m].remove();if(j=CKEDITOR.env.opera&&!a||(typeof e=="function"?e(d)!==
false:e))if(!h&&!CKEDITOR.env.needsBrFiller&&d.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)j=false;else if(!h&&!CKEDITOR.env.needsBrFiller&&(document.documentMode>7||d.name in CKEDITOR.dtd.tr||d.name in CKEDITOR.dtd.$listItem))j=false;else{j=b(d);j=!j||d.name=="form"&&j.name=="input"}j&&d.add(f(a))}}}function t(a,b){if((!h||CKEDITOR.env.needsBrFiller)&&a.type==CKEDITOR.NODE_ELEMENT&&a.name=="br"&&!a.attributes["data-cke-eol"])return true;var c;if(a.type==CKEDITOR.NODE_TEXT&&(c=a.value.match(y))){if(c.index){(new CKEDITOR.htmlParser.text(a.value.substring(0,
c.index))).insertBefore(a);a.value=c[0]}if(!CKEDITOR.env.needsBrFiller&&h&&(!b||a.parent.name in p))return true;if(!h)if((c=a.previous)&&c.name=="br"||!c||i(c))return true}return false}var v={elements:{}},h=d=="html",p=CKEDITOR.tools.extend({},n),r;for(r in p)"#"in m[r]||delete p[r];for(r in p)v.elements[r]=j(h,a.config.fillEmptyBlocks!==false);v.root=j(h);v.elements.br=function(a){return function(b){if(b.parent.type!=CKEDITOR.NODE_DOCUMENT_FRAGMENT){var d=b.attributes;if("data-cke-bogus"in d||"data-cke-eol"in
d)delete d["data-cke-bogus"];else{for(d=b.next;d&&e(d);)d=d.next;var j=c(b);!d&&i(b.parent)?g(b.parent,f(a)):i(d)&&(j&&!i(j))&&f(a).insertBefore(d)}}}}(h);return v}function d(a,b){return a!=CKEDITOR.ENTER_BR&&b!==false?a==CKEDITOR.ENTER_DIV?"div":"p":false}function b(a){for(a=a.children[a.children.length-1];a&&e(a);)a=a.previous;return a}function c(a){for(a=a.previous;a&&e(a);)a=a.previous;return a}function e(a){return a.type==CKEDITOR.NODE_TEXT&&!CKEDITOR.tools.trim(a.value)||a.type==CKEDITOR.NODE_ELEMENT&&
a.attributes["data-cke-bookmark"]}function i(a){return a&&(a.type==CKEDITOR.NODE_ELEMENT&&a.name in n||a.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT)}function g(a,b){var c=a.children[a.children.length-1];a.children.push(b);b.parent=a;if(c){c.next=b;b.previous=c}}function l(a){a=a.attributes;a.contenteditable!="false"&&(a["data-cke-editable"]=a.contenteditable?"true":1);a.contenteditable="false"}function h(a){a=a.attributes;switch(a["data-cke-editable"]){case "true":a.contenteditable="true";break;case "1":delete a.contenteditable}}
function k(a){return a.replace(G,function(a,b,c){return"<"+b+c.replace(I,function(a,b){return B.test(b)&&c.indexOf("data-cke-saved-"+b)==-1?" data-cke-saved-"+a+" data-cke-"+CKEDITOR.rnd+"-"+a:a})+">"})}function o(a,b){return a.replace(b,function(a,b,c){a.indexOf("<textarea")===0&&(a=b+u(c).replace(/</g,"&lt;").replace(/>/g,"&gt;")+"</textarea>");return"<cke:encoded>"+encodeURIComponent(a)+"</cke:encoded>"})}function s(a){return a.replace(v,function(a,b){return decodeURIComponent(b)})}function q(a){return a.replace(/<\!--(?!{cke_protected})[\s\S]+?--\>/g,
function(a){return"<\!--"+A+"{C}"+encodeURIComponent(a).replace(/--/g,"%2D%2D")+"--\>"})}function u(a){return a.replace(/<\!--\{cke_protected\}\{C\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)})}function f(a,b){var c=b._.dataStore;return a.replace(/<\!--\{cke_protected\}([\s\S]+?)--\>/g,function(a,b){return decodeURIComponent(b)}).replace(/\{cke_protected_(\d+)\}/g,function(a,b){return c&&c[b]||""})}function p(a,b){for(var c=[],e=b.config.protectedSource,d=b._.dataStore||(b._.dataStore=
{id:1}),f=/<\!--\{cke_temp(comment)?\}(\d*?)--\>/g,e=[/<script[\s\S]*?<\/script>/gi,/<noscript[\s\S]*?<\/noscript>/gi].concat(e),a=a.replace(/<\!--[\s\S]*?--\>/g,function(a){return"<\!--{cke_tempcomment}"+(c.push(a)-1)+"--\>"}),j=0;j<e.length;j++)a=a.replace(e[j],function(a){a=a.replace(f,function(a,b,e){return c[e]});return/cke_temp(comment)?/.test(a)?a:"<\!--{cke_temp}"+(c.push(a)-1)+"--\>"});a=a.replace(f,function(a,b,e){return"<\!--"+A+(b?"{C}":"")+encodeURIComponent(c[e]).replace(/--/g,"%2D%2D")+
"--\>"});return a.replace(/<\w([^'">]+|'[^']*'|"[^"]*")+>/g,function(a){return a.replace(/<\!--\{cke_protected\}([^>]*)--\>/g,function(a,b){d[d.id]=decodeURIComponent(b);return"{cke_protected_"+d.id++ +"}"})})}CKEDITOR.htmlDataProcessor=function(b){var c,e,j=this;this.editor=b;this.dataFilter=c=new CKEDITOR.htmlParser.filter;this.htmlFilter=e=new CKEDITOR.htmlParser.filter;this.writer=new CKEDITOR.htmlParser.basicWriter;c.addRules(r);c.addRules(J,{applyToAll:true});c.addRules(a(b,"data"),{applyToAll:true});
e.addRules(t);e.addRules(w,{applyToAll:true});e.addRules(a(b,"html"),{applyToAll:true});b.on("toHtml",function(a){var a=a.data,c=a.dataValue,c=p(c,b),c=o(c,H),c=k(c),c=o(c,N),c=c.replace(x,"$1cke:$2"),c=c.replace(D,"<cke:$1$2></cke:$1>"),c=CKEDITOR.env.opera?c:c.replace(/(<pre\b[^>]*>)(\r\n|\n)/g,"$1$2$2"),c=c.replace(/([^a-z0-9<\-])(on\w{3,})(?!>)/gi,"$1data-cke-"+CKEDITOR.rnd+"-$2"),e=a.context||b.editable().getName(),f;if(CKEDITOR.env.ie&&CKEDITOR.env.version<9&&e=="pre"){e="div";c="<pre>"+c+"</pre>";
f=1}e=b.document.createElement(e);e.setHtml("a"+c);c=e.getHtml().substr(1);c=c.replace(RegExp("data-cke-"+CKEDITOR.rnd+"-","ig"),"");f&&(c=c.replace(/^<pre>|<\/pre>$/gi,""));c=c.replace(C,"$1$2");c=s(c);c=u(c);a.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.context,a.fixForBody===false?false:d(a.enterMode,b.config.autoParagraph))},null,null,5);b.on("toHtml",function(a){a.data.filter.applyTo(a.data.dataValue,true,a.data.dontFilter,a.data.enterMode)&&b.fire("dataFiltered")},null,null,6);b.on("toHtml",
function(a){a.data.dataValue.filterChildren(j.dataFilter,true)},null,null,10);b.on("toHtml",function(a){var a=a.data,b=a.dataValue,c=new CKEDITOR.htmlParser.basicWriter;b.writeChildrenHtml(c);b=c.getHtml(true);a.dataValue=q(b)},null,null,15);b.on("toDataFormat",function(a){var c=a.data.dataValue;a.data.enterMode!=CKEDITOR.ENTER_BR&&(c=c.replace(/^<br *\/?>/i,""));a.data.dataValue=CKEDITOR.htmlParser.fragment.fromHtml(c,a.data.context,d(a.data.enterMode,b.config.autoParagraph))},null,null,5);b.on("toDataFormat",
function(a){a.data.dataValue.filterChildren(j.htmlFilter,true)},null,null,10);b.on("toDataFormat",function(a){a.data.filter.applyTo(a.data.dataValue,false,true)},null,null,11);b.on("toDataFormat",function(a){var c=a.data.dataValue,e=j.writer;e.reset();c.writeChildrenHtml(e);c=e.getHtml(true);c=u(c);c=f(c,b);a.data.dataValue=c},null,null,15)};CKEDITOR.htmlDataProcessor.prototype={toHtml:function(a,b,c,e){var d=this.editor,f,j,m;if(b&&typeof b=="object"){f=b.context;c=b.fixForBody;e=b.dontFilter;j=
b.filter;m=b.enterMode}else f=b;!f&&f!==null&&(f=d.editable().getName());return d.fire("toHtml",{dataValue:a,context:f,fixForBody:c,dontFilter:e,filter:j||d.filter,enterMode:m||d.enterMode}).dataValue},toDataFormat:function(a,b){var c,e,d;if(b){c=b.context;e=b.filter;d=b.enterMode}!c&&c!==null&&(c=this.editor.editable().getName());return this.editor.fire("toDataFormat",{dataValue:a,filter:e||this.editor.filter,context:c,enterMode:d||this.editor.enterMode}).dataValue}};var y=/(?:&nbsp;|\xa0)$/,A="{cke_protected}",
m=CKEDITOR.dtd,j=["caption","colgroup","col","thead","tfoot","tbody"],n=CKEDITOR.tools.extend({},m.$blockLimit,m.$block),r={elements:{input:l,textarea:l}},J={attributeNames:[[/^on/,"data-cke-pa-on"],[/^data-cke-expando$/,""]]},t={elements:{embed:function(a){var b=a.parent;if(b&&b.name=="object"){var c=b.attributes.width,b=b.attributes.height;if(c)a.attributes.width=c;if(b)a.attributes.height=b}},a:function(a){if(!a.children.length&&!a.attributes.name&&!a.attributes["data-cke-saved-name"])return false}}},
w={elementNames:[[/^cke:/,""],[/^\?xml:namespace$/,""]],attributeNames:[[/^data-cke-(saved|pa)-/,""],[/^data-cke-.*/,""],["hidefocus",""]],elements:{$:function(a){var b=a.attributes;if(b){if(b["data-cke-temp"])return false;for(var c=["name","href","src"],e,d=0;d<c.length;d++){e="data-cke-saved-"+c[d];e in b&&delete b[c[d]]}}return a},table:function(a){a.children.slice(0).sort(function(a,b){var c,e;if(a.type==CKEDITOR.NODE_ELEMENT&&b.type==a.type){c=CKEDITOR.tools.indexOf(j,a.name);e=CKEDITOR.tools.indexOf(j,
b.name)}if(!(c>-1&&e>-1&&c!=e)){c=a.parent?a.getIndex():-1;e=b.parent?b.getIndex():-1}return c>e?1:-1})},param:function(a){a.children=[];a.isEmpty=true;return a},span:function(a){a.attributes["class"]=="Apple-style-span"&&delete a.name},html:function(a){delete a.attributes.contenteditable;delete a.attributes["class"]},body:function(a){delete a.attributes.spellcheck;delete a.attributes.contenteditable},style:function(a){var b=a.children[0];if(b&&b.value)b.value=CKEDITOR.tools.trim(b.value);if(!a.attributes.type)a.attributes.type=
"text/css"},title:function(a){var b=a.children[0];!b&&g(a,b=new CKEDITOR.htmlParser.text);b.value=a.attributes["data-cke-title"]||""},input:h,textarea:h},attributes:{"class":function(a){return CKEDITOR.tools.ltrim(a.replace(/(?:^|\s+)cke_[^\s]*/g,""))||false}}};if(CKEDITOR.env.ie)w.attributes.style=function(a){return a.replace(/(^|;)([^\:]+)/g,function(a){return a.toLowerCase()})};var G=/<(a|area|img|input|source)\b([^>]*)>/gi,I=/([\w-]+)\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|(?:[^ "'>]+))/gi,B=/^(href|src|name)$/i,
N=/(?:<style(?=[ >])[^>]*>[\s\S]*?<\/style>)|(?:<(:?link|meta|base)[^>]*>)/gi,H=/(<textarea(?=[ >])[^>]*>)([\s\S]*?)(?:<\/textarea>)/gi,v=/<cke:encoded>([^<]*)<\/cke:encoded>/gi,x=/(<\/?)((?:object|embed|param|html|body|head|title)[^>]*>)/gi,C=/(<\/?)cke:((?:html|body|head|title)[^>]*>)/gi,D=/<cke:(param|embed)([^>]*?)\/?>(?!\s*<\/cke:\1)/gi})();"use strict";
CKEDITOR.htmlParser.element=function(a,d){this.name=a;this.attributes=d||{};this.children=[];var b=a||"",c=b.match(/^cke:(.*)/);c&&(b=c[1]);b=!(!CKEDITOR.dtd.$nonBodyContent[b]&&!CKEDITOR.dtd.$block[b]&&!CKEDITOR.dtd.$listItem[b]&&!CKEDITOR.dtd.$tableContent[b]&&!(CKEDITOR.dtd.$nonEditable[b]||b=="br"));this.isEmpty=!!CKEDITOR.dtd.$empty[a];this.isUnknown=!CKEDITOR.dtd[a];this._={isBlockLike:b,hasInlineStarted:this.isEmpty||!b}};
CKEDITOR.htmlParser.cssStyle=function(a){var d={};((a instanceof CKEDITOR.htmlParser.element?a.attributes.style:a)||"").replace(/&quot;/g,'"').replace(/\s*([^ :;]+)\s*:\s*([^;]+)\s*(?=;|$)/g,function(a,c,e){c=="font-family"&&(e=e.replace(/["']/g,""));d[c.toLowerCase()]=e});return{rules:d,populate:function(a){var c=this.toString();if(c)a instanceof CKEDITOR.dom.element?a.setAttribute("style",c):a instanceof CKEDITOR.htmlParser.element?a.attributes.style=c:a.style=c},toString:function(){var a=[],c;
for(c in d)d[c]&&a.push(c,":",d[c],";");return a.join("")}}};
(function(){function a(a){return function(b){return b.type==CKEDITOR.NODE_ELEMENT&&(typeof a=="string"?b.name==a:b.name in a)}}var d=function(a,b){a=a[0];b=b[0];return a<b?-1:a>b?1:0},b=CKEDITOR.htmlParser.fragment.prototype;CKEDITOR.htmlParser.element.prototype=CKEDITOR.tools.extend(new CKEDITOR.htmlParser.node,{type:CKEDITOR.NODE_ELEMENT,add:b.add,clone:function(){return new CKEDITOR.htmlParser.element(this.name,this.attributes)},filter:function(a,b){var d=this,g,l,b=d.getFilterContext(b);if(b.off)return true;
if(!d.parent)a.onRoot(b,d);for(;;){g=d.name;if(!(l=a.onElementName(b,g))){this.remove();return false}d.name=l;if(!(d=a.onElement(b,d))){this.remove();return false}if(d!==this){this.replaceWith(d);return false}if(d.name==g)break;if(d.type!=CKEDITOR.NODE_ELEMENT){this.replaceWith(d);return false}if(!d.name){this.replaceWithChildren();return false}}g=d.attributes;var h,k;for(h in g){k=h;for(l=g[h];;)if(k=a.onAttributeName(b,h))if(k!=h){delete g[h];h=k}else break;else{delete g[h];break}k&&((l=a.onAttribute(b,
d,k,l))===false?delete g[k]:g[k]=l)}d.isEmpty||this.filterChildren(a,false,b);return true},filterChildren:b.filterChildren,writeHtml:function(a,b){b&&this.filter(b);var i=this.name,g=[],l=this.attributes,h,k;a.openTag(i,l);for(h in l)g.push([h,l[h]]);a.sortAttributes&&g.sort(d);h=0;for(k=g.length;h<k;h++){l=g[h];a.attribute(l[0],l[1])}a.openTagClose(i,this.isEmpty);this.writeChildrenHtml(a);this.isEmpty||a.closeTag(i)},writeChildrenHtml:b.writeChildrenHtml,replaceWithChildren:function(){for(var a=
this.children,b=a.length;b;)a[--b].insertAfter(this);this.remove()},forEach:b.forEach,getFirst:function(b){if(!b)return this.children.length?this.children[0]:null;typeof b!="function"&&(b=a(b));for(var e=0,d=this.children.length;e<d;++e)if(b(this.children[e]))return this.children[e];return null},getHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeChildrenHtml(a);return a.getHtml()},setHtml:function(a){for(var a=this.children=CKEDITOR.htmlParser.fragment.fromHtml(a).children,b=0,
d=a.length;b<d;++b)a[b].parent=this},getOuterHtml:function(){var a=new CKEDITOR.htmlParser.basicWriter;this.writeHtml(a);return a.getHtml()},split:function(a){for(var b=this.children.splice(a,this.children.length-a),d=this.clone(),g=0;g<b.length;++g)b[g].parent=d;d.children=b;if(b[0])b[0].previous=null;if(a>0)this.children[a-1].next=null;this.parent.add(d,this.getIndex()+1);return d},removeClass:function(a){var b=this.attributes["class"];if(b)(b=CKEDITOR.tools.trim(b.replace(RegExp("(?:\\s+|^)"+a+
"(?:\\s+|$)")," ")))?this.attributes["class"]=b:delete this.attributes["class"]},hasClass:function(a){var b=this.attributes["class"];return!b?false:RegExp("(?:^|\\s)"+a+"(?=\\s|$)").test(b)},getFilterContext:function(a){var b=[];a||(a={off:false,nonEditable:false,nestedEditable:false});!a.off&&this.attributes["data-cke-processor"]=="off"&&b.push("off",true);!a.nonEditable&&this.attributes.contenteditable=="false"?b.push("nonEditable",true):this.name!="body"&&(!a.nestedEditable&&this.attributes.contenteditable==
"true")&&b.push("nestedEditable",true);if(b.length)for(var a=CKEDITOR.tools.copy(a),d=0;d<b.length;d=d+2)a[b[d]]=b[d+1];return a}},true)})();(function(){var a={},d=/{([^}]+)}/g,b=/([\\'])/g,c=/\n/g,e=/\r/g;CKEDITOR.template=function(i){if(a[i])this.output=a[i];else{var g=i.replace(b,"\\$1").replace(c,"\\n").replace(e,"\\r").replace(d,function(a,b){return"',data['"+b+"']==undefined?'{"+b+"}':data['"+b+"'],'"});this.output=a[i]=Function("data","buffer","return buffer?buffer.push('"+g+"'):['"+g+"'].join('');")}}})();
delete CKEDITOR.loadFullCore;CKEDITOR.instances={};CKEDITOR.document=new CKEDITOR.dom.document(document);CKEDITOR.add=function(a){CKEDITOR.instances[a.name]=a;a.on("focus",function(){if(CKEDITOR.currentInstance!=a){CKEDITOR.currentInstance=a;CKEDITOR.fire("currentInstance")}});a.on("blur",function(){if(CKEDITOR.currentInstance==a){CKEDITOR.currentInstance=null;CKEDITOR.fire("currentInstance")}});CKEDITOR.fire("instance",null,a)};CKEDITOR.remove=function(a){delete CKEDITOR.instances[a.name]};
(function(){var a={};CKEDITOR.addTemplate=function(d,b){var c=a[d];if(c)return c;c={name:d,source:b};CKEDITOR.fire("template",c);return a[d]=new CKEDITOR.template(c.source)};CKEDITOR.getTemplate=function(d){return a[d]}})();(function(){var a=[];CKEDITOR.addCss=function(d){a.push(d)};CKEDITOR.getCss=function(){return a.join("\n")}})();CKEDITOR.on("instanceDestroyed",function(){CKEDITOR.tools.isEmpty(this.instances)&&CKEDITOR.fire("reset")});CKEDITOR.TRISTATE_ON=1;CKEDITOR.TRISTATE_OFF=2;
CKEDITOR.TRISTATE_DISABLED=0;
(function(){CKEDITOR.inline=function(a,d){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var b=new CKEDITOR.editor(d,a,CKEDITOR.ELEMENT_MODE_INLINE),c=a.is("textarea")?a:null;if(c){b.setData(c.getValue(),null,true);a=CKEDITOR.dom.element.createFromHtml('<div contenteditable="'+!!b.readOnly+'" class="cke_textarea_inline">'+c.getValue()+"</div>",CKEDITOR.document);
a.insertAfter(c);c.hide();c.$.form&&b._attachToForm()}else b.setData(a.getHtml(),null,true);b.on("loaded",function(){b.fire("uiReady");b.editable(a);b.container=a;b.setData(b.getData(1));b.resetDirty();b.fire("contentDom");b.mode="wysiwyg";b.fire("mode");b.status="ready";b.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,b)},null,null,1E4);b.on("destroy",function(){if(c){b.container.clearCustomData();b.container.remove();c.show()}b.element.clearCustomData();delete b.element});return b};
CKEDITOR.inlineAll=function(){var a,d,b;for(b in CKEDITOR.dtd.$editable)for(var c=CKEDITOR.document.getElementsByTag(b),e=0,i=c.count();e<i;e++){a=c.getItem(e);if(a.getAttribute("contenteditable")=="true"){d={element:a,config:{}};CKEDITOR.fire("inline",d)!==false&&CKEDITOR.inline(a,d.config)}}};CKEDITOR.domReady(function(){!CKEDITOR.disableAutoInline&&CKEDITOR.inlineAll()})})();CKEDITOR.replaceClass="ckeditor";
(function(){function a(a,c,g,l){if(!CKEDITOR.env.isCompatible)return null;a=CKEDITOR.dom.element.get(a);if(a.getEditor())throw'The editor instance "'+a.getEditor().name+'" is already attached to the provided element.';var h=new CKEDITOR.editor(c,a,l);if(l==CKEDITOR.ELEMENT_MODE_REPLACE){a.setStyle("visibility","hidden");h._.required=a.hasAttribute("required");a.removeAttribute("required")}g&&h.setData(g,null,true);h.on("loaded",function(){b(h);l==CKEDITOR.ELEMENT_MODE_REPLACE&&(h.config.autoUpdateElement&&
a.$.form)&&h._attachToForm();h.setMode(h.config.startupMode,function(){h.resetDirty();h.status="ready";h.fireOnce("instanceReady");CKEDITOR.fire("instanceReady",null,h)})});h.on("destroy",d);return h}function d(){var a=this.container,b=this.element;if(a){a.clearCustomData();a.remove()}if(b){b.clearCustomData();if(this.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE){b.show();this._.required&&b.setAttribute("required","required")}delete this.element}}function b(a){var b=a.name,d=a.element,l=a.elementMode,
h=a.fire("uiSpace",{space:"top",html:""}).html,k=a.fire("uiSpace",{space:"bottom",html:""}).html;c||(c=CKEDITOR.addTemplate("maincontainer",'<{outerEl} id="cke_{name}" class="{id} cke cke_reset cke_chrome cke_editor_{name} cke_{langDir} '+CKEDITOR.env.cssClass+'"  dir="{langDir}" lang="{langCode}" role="application" aria-labelledby="cke_{name}_arialbl"><span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span><{outerEl} class="cke_inner cke_reset" role="presentation">{topHtml}<{outerEl} id="{contentId}" class="cke_contents cke_reset" role="presentation"></{outerEl}>{bottomHtml}</{outerEl}></{outerEl}>'));
b=CKEDITOR.dom.element.createFromHtml(c.output({id:a.id,name:b,langDir:a.lang.dir,langCode:a.langCode,voiceLabel:[a.lang.editor,a.name].join(", "),topHtml:h?'<span id="'+a.ui.spaceId("top")+'" class="cke_top cke_reset_all" role="presentation" style="height:auto">'+h+"</span>":"",contentId:a.ui.spaceId("contents"),bottomHtml:k?'<span id="'+a.ui.spaceId("bottom")+'" class="cke_bottom cke_reset_all" role="presentation">'+k+"</span>":"",outerEl:CKEDITOR.env.ie?"span":"div"}));if(l==CKEDITOR.ELEMENT_MODE_REPLACE){d.hide();
b.insertAfter(d)}else d.append(b);a.container=b;h&&a.ui.space("top").unselectable();k&&a.ui.space("bottom").unselectable();d=a.config.width;l=a.config.height;d&&b.setStyle("width",CKEDITOR.tools.cssLength(d));l&&a.ui.space("contents").setStyle("height",CKEDITOR.tools.cssLength(l));b.disableContextMenu();CKEDITOR.env.webkit&&b.on("focus",function(){a.focus()});a.fireOnce("uiReady")}CKEDITOR.replace=function(b,c){return a(b,c,null,CKEDITOR.ELEMENT_MODE_REPLACE)};CKEDITOR.appendTo=function(b,c,d){return a(b,
c,d,CKEDITOR.ELEMENT_MODE_APPENDTO)};CKEDITOR.replaceAll=function(){for(var a=document.getElementsByTagName("textarea"),b=0;b<a.length;b++){var c=null,d=a[b];if(d.name||d.id){if(typeof arguments[0]=="string"){if(!RegExp("(?:^|\\s)"+arguments[0]+"(?:$|\\s)").test(d.className))continue}else if(typeof arguments[0]=="function"){c={};if(arguments[0](d,c)===false)continue}this.replace(d,c)}}};CKEDITOR.editor.prototype.addMode=function(a,b){(this._.modes||(this._.modes={}))[a]=b};CKEDITOR.editor.prototype.setMode=
function(a,b){var c=this,d=this._.modes;if(!(a==c.mode||!d||!d[a])){c.fire("beforeSetMode",a);if(c.mode){var h=c.checkDirty();c._.previousMode=c.mode;c.fire("beforeModeUnload");c.editable(0);c.ui.space("contents").setHtml("");c.mode=""}this._.modes[a](function(){c.mode=a;h!==void 0&&!h&&c.resetDirty();setTimeout(function(){c.fire("mode");b&&b.call(c)},0)})}};CKEDITOR.editor.prototype.resize=function(a,b,c,d){var h=this.container,k=this.ui.space("contents"),o=CKEDITOR.env.webkit&&this.document&&this.document.getWindow().$.frameElement,
d=d?h.getChild(1):h;d.setSize("width",a,true);o&&(o.style.width="1%");k.setStyle("height",Math.max(b-(c?0:(d.$.offsetHeight||0)-(k.$.clientHeight||0)),0)+"px");o&&(o.style.width="100%");this.fire("resize")};CKEDITOR.editor.prototype.getResizable=function(a){return a?this.ui.space("contents"):this.container};var c;CKEDITOR.domReady(function(){CKEDITOR.replaceClass&&CKEDITOR.replaceAll(CKEDITOR.replaceClass)})})();CKEDITOR.config.startupMode="wysiwyg";
(function(){function a(a){var b=a.editor,e=a.data.path,i=e.blockLimit,m=a.data.selection,j=m.getRanges()[0],n;if(CKEDITOR.env.gecko||CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)if(m=d(m,e)){m.appendBogus();n=CKEDITOR.env.ie}if(b.config.autoParagraph!==false&&b.activeEnterMode!=CKEDITOR.ENTER_BR&&b.editable().equals(i)&&!e.block&&j.collapsed&&!j.getCommonAncestor().isReadOnly()){e=j.clone();e.enlarge(CKEDITOR.ENLARGE_BLOCK_CONTENTS);i=new CKEDITOR.dom.walker(e);i.guard=function(a){return!c(a)||a.type==
CKEDITOR.NODE_COMMENT||a.isReadOnly()};if(!i.checkForward()||e.checkStartOfBlock()&&e.checkEndOfBlock()){b=j.fixBlock(true,b.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p");if(!CKEDITOR.env.needsBrFiller)(b=b.getFirst(c))&&(b.type==CKEDITOR.NODE_TEXT&&CKEDITOR.tools.trim(b.getText()).match(/^(?:&nbsp;|\xa0)$/))&&b.remove();n=1;a.cancel()}}n&&j.select()}function d(a,b){if(a.isFake)return 0;var d=b.block||b.blockLimit,e=d&&d.getLast(c);if(d&&d.isBlockBoundary()&&(!e||!(e.type==CKEDITOR.NODE_ELEMENT&&
e.isBlockBoundary()))&&!d.is("pre")&&!d.getBogus())return d}function b(a){var b=a.data.getTarget();if(b.is("input")){b=b.getAttribute("type");(b=="submit"||b=="reset")&&a.data.preventDefault()}}function c(a){return o(a)&&s(a)}function e(a,b){return function(c){var d=CKEDITOR.dom.element.get(c.data.$.toElement||c.data.$.fromElement||c.data.$.relatedTarget);(!d||!b.equals(d)&&!b.contains(d))&&a.call(this,c)}}function i(a){var b,d=a.getRanges()[0],e=a.root,m={table:1,ul:1,ol:1,dl:1};if(d.startPath().contains(m)){var a=
function(a){return function(d,e){e&&(d.type==CKEDITOR.NODE_ELEMENT&&d.is(m))&&(b=d);if(!e&&c(d)&&(!a||!h(d)))return false}},j=d.clone();j.collapse(1);j.setStartAt(e,CKEDITOR.POSITION_AFTER_START);e=new CKEDITOR.dom.walker(j);e.guard=a();e.checkBackward();if(b){j=d.clone();j.collapse();j.setEndAt(b,CKEDITOR.POSITION_AFTER_END);e=new CKEDITOR.dom.walker(j);e.guard=a(true);b=false;e.checkForward();return b}}return null}function g(a){a.editor.focus();a.editor.fire("saveSnapshot")}function l(a,b){var c=
a.editor;!b&&c.getSelection().scrollIntoView();setTimeout(function(){c.fire("saveSnapshot")},0)}CKEDITOR.editable=CKEDITOR.tools.createClass({base:CKEDITOR.dom.element,$:function(a,b){this.base(b.$||b);this.editor=a;this.hasFocus=false;this.setup()},proto:{focus:function(){var a;if(CKEDITOR.env.webkit&&!this.hasFocus){a=this.editor._.previousActive||this.getDocument().getActive();if(this.contains(a)){a.focus();return}}try{this.$[CKEDITOR.env.ie&&this.getDocument().equals(CKEDITOR.document)?"setActive":
"focus"]()}catch(b){if(!CKEDITOR.env.ie)throw b;}if(CKEDITOR.env.safari&&!this.isInline()){a=CKEDITOR.document.getActive();a.equals(this.getWindow().getFrame())||this.getWindow().focus()}},on:function(a,b){var c=Array.prototype.slice.call(arguments,0);if(CKEDITOR.env.ie&&/^focus|blur$/.exec(a)){a=a=="focus"?"focusin":"focusout";b=e(b,this);c[0]=a;c[1]=b}return CKEDITOR.dom.element.prototype.on.apply(this,c)},attachListener:function(a,b,c,d,e,j){!this._.listeners&&(this._.listeners=[]);var n=Array.prototype.slice.call(arguments,
1),n=a.on.apply(a,n);this._.listeners.push(n);return n},clearListeners:function(){var a=this._.listeners;try{for(;a.length;)a.pop().removeListener()}catch(b){}},restoreAttrs:function(){var a=this._.attrChanges,b,c;for(c in a)if(a.hasOwnProperty(c)){b=a[c];b!==null?this.setAttribute(c,b):this.removeAttribute(c)}},attachClass:function(a){var b=this.getCustomData("classes");if(!this.hasClass(a)){!b&&(b=[]);b.push(a);this.setCustomData("classes",b);this.addClass(a)}},changeAttr:function(a,b){var c=this.getAttribute(a);
if(b!==c){!this._.attrChanges&&(this._.attrChanges={});a in this._.attrChanges||(this._.attrChanges[a]=c);this.setAttribute(a,b)}},insertHtml:function(a,b){g(this);q(this,b||"html",a)},insertText:function(a){g(this);var b=this.editor,c=b.getSelection().getStartElement().hasAscendant("pre",true)?CKEDITOR.ENTER_BR:b.activeEnterMode,b=c==CKEDITOR.ENTER_BR,d=CKEDITOR.tools,a=d.htmlEncode(a.replace(/\r\n/g,"\n")),a=a.replace(/\t/g,"&nbsp;&nbsp; &nbsp;"),c=c==CKEDITOR.ENTER_P?"p":"div";if(!b){var e=/\n{2}/g;
if(e.test(a))var j="<"+c+">",n="</"+c+">",a=j+a.replace(e,function(){return n+j})+n}a=a.replace(/\n/g,"<br>");b||(a=a.replace(RegExp("<br>(?=</"+c+">)"),function(a){return d.repeat(a,2)}));a=a.replace(/^ | $/g,"&nbsp;");a=a.replace(/(>|\s) /g,function(a,b){return b+"&nbsp;"}).replace(/ (?=<)/g,"&nbsp;");q(this,"text",a)},insertElement:function(a,b){b?this.insertElementIntoRange(a,b):this.insertElementIntoSelection(a)},insertElementIntoRange:function(a,b){var c=this.editor,d=c.config.enterMode,e=a.getName(),
j=CKEDITOR.dtd.$block[e];if(b.checkReadOnly())return false;b.deleteContents(1);b.startContainer.type==CKEDITOR.NODE_ELEMENT&&b.startContainer.is({tr:1,table:1,tbody:1,thead:1,tfoot:1})&&u(b);var n,i;if(j)for(;(n=b.getCommonAncestor(0,1))&&(i=CKEDITOR.dtd[n.getName()])&&(!i||!i[e]);)if(n.getName()in CKEDITOR.dtd.span)b.splitElement(n);else if(b.checkStartOfBlock()&&b.checkEndOfBlock()){b.setStartBefore(n);b.collapse(true);n.remove()}else b.splitBlock(d==CKEDITOR.ENTER_DIV?"div":"p",c.editable());b.insertNode(a);
return true},insertElementIntoSelection:function(a){var b=this.editor,d=b.activeEnterMode,b=b.getSelection(),e=b.getRanges()[0],m=a.getName(),m=CKEDITOR.dtd.$block[m];g(this);if(this.insertElementIntoRange(a,e)){e.moveToPosition(a,CKEDITOR.POSITION_AFTER_END);if(m)if((m=a.getNext(function(a){return c(a)&&!h(a)}))&&m.type==CKEDITOR.NODE_ELEMENT&&m.is(CKEDITOR.dtd.$block))m.getDtd()["#"]?e.moveToElementEditStart(m):e.moveToElementEditEnd(a);else if(!m&&d!=CKEDITOR.ENTER_BR){m=e.fixBlock(true,d==CKEDITOR.ENTER_DIV?
"div":"p");e.moveToElementEditStart(m)}}b.selectRanges([e]);l(this,CKEDITOR.env.opera)},setData:function(a,b){b||(a=this.editor.dataProcessor.toHtml(a));this.setHtml(a);this.editor.fire("dataReady")},getData:function(a){var b=this.getHtml();a||(b=this.editor.dataProcessor.toDataFormat(b));return b},setReadOnly:function(a){this.setAttribute("contenteditable",!a)},detach:function(){this.removeClass("cke_editable");var a=this.editor;this._.detach();delete a.document;delete a.window},isInline:function(){return this.getDocument().equals(CKEDITOR.document)},
setup:function(){var a=this.editor;this.attachListener(a,"beforeGetData",function(){var b=this.getData();this.is("textarea")||a.config.ignoreEmptyParagraph!==false&&(b=b.replace(k,function(a,b){return b}));a.setData(b,null,1)},this);this.attachListener(a,"getSnapshot",function(a){a.data=this.getData(1)},this);this.attachListener(a,"afterSetData",function(){this.setData(a.getData(1))},this);this.attachListener(a,"loadSnapshot",function(a){this.setData(a.data,1)},this);this.attachListener(a,"beforeFocus",
function(){var b=a.getSelection();(b=b&&b.getNative())&&b.type=="Control"||this.focus()},this);this.attachListener(a,"insertHtml",function(a){this.insertHtml(a.data.dataValue,a.data.mode)},this);this.attachListener(a,"insertElement",function(a){this.insertElement(a.data)},this);this.attachListener(a,"insertText",function(a){this.insertText(a.data)},this);this.setReadOnly(a.readOnly);this.attachClass("cke_editable");this.attachClass(a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?"cke_editable_inline":
a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE||a.elementMode==CKEDITOR.ELEMENT_MODE_APPENDTO?"cke_editable_themed":"");this.attachClass("cke_contents_"+a.config.contentsLangDirection);a.keystrokeHandler.blockedKeystrokes[8]=+a.readOnly;a.keystrokeHandler.attach(this);this.on("blur",function(a){CKEDITOR.env.opera&&CKEDITOR.document.getActive().equals(this.isInline()?this:this.getWindow().getFrame())?a.cancel():this.hasFocus=false},null,null,-1);this.on("focus",function(){this.hasFocus=true},null,null,
-1);a.focusManager.add(this);if(this.equals(CKEDITOR.document.getActive())){this.hasFocus=true;a.once("contentDom",function(){a.focusManager.focus()})}this.isInline()&&this.changeAttr("tabindex",a.tabIndex);if(!this.is("textarea")){a.document=this.getDocument();a.window=this.getWindow();var d=a.document;this.changeAttr("spellcheck",!a.config.disableNativeSpellChecker);var e=a.config.contentsLangDirection;this.getDirection(1)!=e&&this.changeAttr("dir",e);var g=CKEDITOR.getCss();if(g){e=d.getHead();
if(!e.getCustomData("stylesheet")){g=d.appendStyleText(g);g=new CKEDITOR.dom.element(g.ownerNode||g.owningElement);e.setCustomData("stylesheet",g);g.data("cke-temp",1)}}e=d.getCustomData("stylesheet_ref")||0;d.setCustomData("stylesheet_ref",e+1);this.setCustomData("cke_includeReadonly",!a.config.disableReadonlyStyling);this.attachListener(this,"click",function(a){var a=a.data,b=(new CKEDITOR.dom.elementPath(a.getTarget(),this)).contains("a");b&&(a.$.button!=2&&b.isReadOnly())&&a.preventDefault()});
var m={8:1,46:1};this.attachListener(a,"key",function(b){if(a.readOnly)return true;var c=b.data.keyCode,d;if(c in m){var b=a.getSelection(),e,g=b.getRanges()[0],h=g.startPath(),k,l,p,c=c==8;if(CKEDITOR.env.ie&&CKEDITOR.env.version<11&&(e=b.getSelectedElement())||(e=i(b))){a.fire("saveSnapshot");g.moveToPosition(e,CKEDITOR.POSITION_BEFORE_START);e.remove();g.select();a.fire("saveSnapshot");d=1}else if(g.collapsed)if((k=h.block)&&(p=k[c?"getPrevious":"getNext"](o))&&p.type==CKEDITOR.NODE_ELEMENT&&p.is("table")&&
g[c?"checkStartOfBlock":"checkEndOfBlock"]()){a.fire("saveSnapshot");g[c?"checkEndOfBlock":"checkStartOfBlock"]()&&k.remove();g["moveToElementEdit"+(c?"End":"Start")](p);g.select();a.fire("saveSnapshot");d=1}else if(h.blockLimit&&h.blockLimit.is("td")&&(l=h.blockLimit.getAscendant("table"))&&g.checkBoundaryOfElement(l,c?CKEDITOR.START:CKEDITOR.END)&&(p=l[c?"getPrevious":"getNext"](o))){a.fire("saveSnapshot");g["moveToElementEdit"+(c?"End":"Start")](p);g.checkStartOfBlock()&&g.checkEndOfBlock()?p.remove():
g.select();a.fire("saveSnapshot");d=1}else if((l=h.contains(["td","th","caption"]))&&g.checkBoundaryOfElement(l,c?CKEDITOR.START:CKEDITOR.END))d=1}return!d});a.blockless&&(CKEDITOR.env.ie&&CKEDITOR.env.needsBrFiller)&&this.attachListener(this,"keyup",function(b){if(b.data.getKeystroke()in m&&!this.getFirst(c)){this.appendBogus();b=a.createRange();b.moveToPosition(this,CKEDITOR.POSITION_AFTER_START);b.select()}});this.attachListener(this,"dblclick",function(b){if(a.readOnly)return false;b={element:b.data.getTarget()};
a.fire("doubleclick",b)});CKEDITOR.env.ie&&this.attachListener(this,"click",b);!CKEDITOR.env.ie&&!CKEDITOR.env.opera&&this.attachListener(this,"mousedown",function(b){var c=b.data.getTarget();if(c.is("img","hr","input","textarea","select")){a.getSelection().selectElement(c);c.is("input","textarea","select")&&b.data.preventDefault()}});CKEDITOR.env.gecko&&this.attachListener(this,"mouseup",function(b){if(b.data.$.button==2){b=b.data.getTarget();if(!b.getOuterHtml().replace(k,"")){var c=a.createRange();
c.moveToElementEditStart(b);c.select(true)}}});if(CKEDITOR.env.webkit){this.attachListener(this,"click",function(a){a.data.getTarget().is("input","select")&&a.data.preventDefault()});this.attachListener(this,"mouseup",function(a){a.data.getTarget().is("input","textarea")&&a.data.preventDefault()})}}}},_:{detach:function(){this.editor.setData(this.editor.getData(),0,1);this.clearListeners();this.restoreAttrs();var a;if(a=this.removeCustomData("classes"))for(;a.length;)this.removeClass(a.pop());if(!this.is("textarea")){a=
this.getDocument();var b=a.getHead();if(b.getCustomData("stylesheet")){var c=a.getCustomData("stylesheet_ref");if(--c)a.setCustomData("stylesheet_ref",c);else{a.removeCustomData("stylesheet_ref");b.removeCustomData("stylesheet").remove()}}}this.editor.fire("contentDomUnload");delete this.editor}}});CKEDITOR.editor.prototype.editable=function(a){var b=this._.editable;if(b&&a)return 0;if(arguments.length)b=this._.editable=a?a instanceof CKEDITOR.editable?a:new CKEDITOR.editable(this,a):(b&&b.detach(),
null);return b};var h=CKEDITOR.dom.walker.bogus(),k=/(^|<body\b[^>]*>)\s*<(p|div|address|h\d|center|pre)[^>]*>\s*(?:<br[^>]*>|&nbsp;|\u00A0|&#160;)?\s*(:?<\/\2>)?\s*(?=$|<\/body>)/gi,o=CKEDITOR.dom.walker.whitespaces(true),s=CKEDITOR.dom.walker.bookmark(false,true);CKEDITOR.on("instanceLoaded",function(b){var c=b.editor;c.on("insertElement",function(a){a=a.data;if(a.type==CKEDITOR.NODE_ELEMENT&&(a.is("input")||a.is("textarea"))){a.getAttribute("contentEditable")!="false"&&a.data("cke-editable",a.hasAttribute("contenteditable")?
"true":"1");a.setAttribute("contentEditable",false)}});c.on("selectionChange",function(b){if(!c.readOnly){var d=c.getSelection();if(d&&!d.isLocked){d=c.checkDirty();c.fire("lockSnapshot");a(b);c.fire("unlockSnapshot");!d&&c.resetDirty()}}})});CKEDITOR.on("instanceCreated",function(a){var b=a.editor;b.on("mode",function(){var a=b.editable();if(a&&a.isInline()){var c=b.title;a.changeAttr("role","textbox");a.changeAttr("aria-label",c);c&&a.changeAttr("title",c);if(c=this.ui.space(this.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?
"top":"contents")){var d=CKEDITOR.tools.getNextId(),e=CKEDITOR.dom.element.createFromHtml('<span id="'+d+'" class="cke_voice_label">'+this.lang.common.editorHelp+"</span>");c.append(e);a.changeAttr("aria-describedby",d)}}})});CKEDITOR.addCss(".cke_editable{cursor:text}.cke_editable img,.cke_editable input,.cke_editable textarea{cursor:default}");var q=function(){function a(b){return b.type==CKEDITOR.NODE_ELEMENT}function b(c,d){var e,j,m,i,g=[],t=d.range.startContainer;e=d.range.startPath();for(var t=
n[t.getName()],h=0,k=c.getChildren(),r=k.count(),l=-1,o=-1,q=0,s=e.contains(n.$list);h<r;++h){e=k.getItem(h);if(a(e)){m=e.getName();if(s&&m in CKEDITOR.dtd.$list)g=g.concat(b(e,d));else{i=!!t[m];if(m=="br"&&e.data("cke-eol")&&(!h||h==r-1)){q=(j=h?g[h-1].node:k.getItem(h+1))&&(!a(j)||!j.is("br"));j=j&&a(j)&&n.$block[j.getName()]}l==-1&&!i&&(l=h);i||(o=h);g.push({isElement:1,isLineBreak:q,isBlock:e.isBlockBoundary(),hasBlockSibling:j,node:e,name:m,allowed:i});j=q=0}}else g.push({isElement:0,node:e,
allowed:1})}if(l>-1)g[l].firstNotAllowed=1;if(o>-1)g[o].lastNotAllowed=1;return g}function d(b,c){var e=[],j=b.getChildren(),m=j.count(),i,g=0,t=n[c],h=!b.is(n.$inline)||b.is("br");for(h&&e.push(" ");g<m;g++){i=j.getItem(g);a(i)&&!i.is(t)?e=e.concat(d(i,c)):e.push(i)}h&&e.push(" ");return e}function e(b){return b&&a(b)&&(b.is(n.$removeEmpty)||b.is("a")&&!b.isBlockBoundary())}function m(b,c,d,e){var j=b.clone(),g,n;j.setEndAt(c,CKEDITOR.POSITION_BEFORE_END);if((g=(new CKEDITOR.dom.walker(j)).next())&&
a(g)&&i[g.getName()]&&(n=g.getPrevious())&&a(n)&&!n.getParent().equals(b.startContainer)&&d.contains(n)&&e.contains(g)&&g.isIdentical(n)){g.moveChildren(n);g.remove();m(b,c,d,e)}}function j(b,c){function d(b,c){if(c.isBlock&&c.isElement&&!c.node.is("br")&&a(b)&&b.is("br")){b.remove();return 1}}var e=c.endContainer.getChild(c.endOffset),j=c.endContainer.getChild(c.endOffset-1);e&&d(e,b[b.length-1]);if(j&&d(j,b[0])){c.setEnd(c.endContainer,c.endOffset-1);c.collapse()}}var n=CKEDITOR.dtd,i={p:1,div:1,
h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,li:1,pre:1,dl:1,blockquote:1},g={p:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1},t=CKEDITOR.tools.extend({},n.$inline);delete t.br;return function(i,h,k){var r=i.editor;i.getDocument();var o=r.getSelection().getRanges()[0],q=false;if(h=="unfiltered_html"){h="html";q=true}if(!o.checkReadOnly()){var v=(new CKEDITOR.dom.elementPath(o.startContainer,o.root)).blockLimit||o.root,h={type:h,dontFilter:q,editable:i,editor:r,range:o,blockLimit:v,mergeCandidates:[],zombies:[]},
r=h.range,q=h.mergeCandidates,x,C,D,z;if(h.type=="text"&&r.shrink(CKEDITOR.SHRINK_ELEMENT,true,false)){x=CKEDITOR.dom.element.createFromHtml("<span>&nbsp;</span>",r.document);r.insertNode(x);r.setStartAfter(x)}C=new CKEDITOR.dom.elementPath(r.startContainer);h.endPath=D=new CKEDITOR.dom.elementPath(r.endContainer);if(!r.collapsed){var v=D.block||D.blockLimit,T=r.getCommonAncestor();v&&(!v.equals(T)&&!v.contains(T)&&r.checkEndOfBlock())&&h.zombies.push(v);r.deleteContents()}for(;(z=a(r.startContainer)&&
r.startContainer.getChild(r.startOffset-1))&&a(z)&&z.isBlockBoundary()&&C.contains(z);)r.moveToPosition(z,CKEDITOR.POSITION_BEFORE_END);m(r,h.blockLimit,C,D);if(x){r.setEndBefore(x);r.collapse();x.remove()}x=r.startPath();if(v=x.contains(e,false,1)){r.splitElement(v);h.inlineStylesRoot=v;h.inlineStylesPeak=x.lastElement}x=r.createBookmark();(v=x.startNode.getPrevious(c))&&a(v)&&e(v)&&q.push(v);(v=x.startNode.getNext(c))&&a(v)&&e(v)&&q.push(v);for(v=x.startNode;(v=v.getParent())&&e(v);)q.push(v);r.moveToBookmark(x);
if(x=k){x=h.range;if(h.type=="text"&&h.inlineStylesRoot){z=h.inlineStylesPeak;r=z.getDocument().createText("{cke-peak}");for(q=h.inlineStylesRoot.getParent();!z.equals(q);){r=r.appendTo(z.clone());z=z.getParent()}k=r.getOuterHtml().split("{cke-peak}").join(k)}z=h.blockLimit.getName();if(/^\s+|\s+$/.test(k)&&"span"in CKEDITOR.dtd[z])var s='<span data-cke-marker="1">&nbsp;</span>',k=s+k+s;k=h.editor.dataProcessor.toHtml(k,{context:null,fixForBody:false,dontFilter:h.dontFilter,filter:h.editor.activeFilter,
enterMode:h.editor.activeEnterMode});z=x.document.createElement("body");z.setHtml(k);if(s){z.getFirst().remove();z.getLast().remove()}if((s=x.startPath().block)&&!(s.getChildCount()==1&&s.getBogus()))a:{var E;if(z.getChildCount()==1&&a(E=z.getFirst())&&E.is(g)){s=E.getElementsByTag("*");x=0;for(q=s.count();x<q;x++){r=s.getItem(x);if(!r.is(t))break a}E.moveChildren(E.getParent(1));E.remove()}}h.dataWrapper=z;x=k}if(x){E=h.range;var s=E.document,u,k=h.blockLimit;x=0;var K;z=[];var F,O,q=r=0,L,Q;C=E.startContainer;
var v=h.endPath.elements[0],R;D=v.getPosition(C);T=!!v.getCommonAncestor(C)&&D!=CKEDITOR.POSITION_IDENTICAL&&!(D&CKEDITOR.POSITION_CONTAINS+CKEDITOR.POSITION_IS_CONTAINED);C=b(h.dataWrapper,h);for(j(C,E);x<C.length;x++){D=C[x];if(u=D.isLineBreak){u=E;L=k;var M=void 0,U=void 0;if(D.hasBlockSibling)u=1;else{M=u.startContainer.getAscendant(n.$block,1);if(!M||!M.is({div:1,p:1}))u=0;else{U=M.getPosition(L);if(U==CKEDITOR.POSITION_IDENTICAL||U==CKEDITOR.POSITION_CONTAINS)u=0;else{L=u.splitElement(M);u.moveToPosition(L,
CKEDITOR.POSITION_AFTER_START);u=1}}}}if(u)q=x>0;else{u=E.startPath();if(!D.isBlock&&h.editor.config.autoParagraph!==false&&(h.editor.activeEnterMode!=CKEDITOR.ENTER_BR&&h.editor.editable().equals(u.blockLimit)&&!u.block)&&(O=h.editor.activeEnterMode!=CKEDITOR.ENTER_BR&&h.editor.config.autoParagraph!==false?h.editor.activeEnterMode==CKEDITOR.ENTER_DIV?"div":"p":false)){O=s.createElement(O);O.appendBogus();E.insertNode(O);CKEDITOR.env.needsBrFiller&&(K=O.getBogus())&&K.remove();E.moveToPosition(O,
CKEDITOR.POSITION_BEFORE_END)}if((u=E.startPath().block)&&!u.equals(F)){if(K=u.getBogus()){K.remove();z.push(u)}F=u}D.firstNotAllowed&&(r=1);if(r&&D.isElement){u=E.startContainer;for(L=null;u&&!n[u.getName()][D.name];){if(u.equals(k)){u=null;break}L=u;u=u.getParent()}if(u){if(L){Q=E.splitElement(L);h.zombies.push(Q);h.zombies.push(L)}}else{L=k.getName();R=!x;u=x==C.length-1;L=d(D.node,L);for(var M=[],U=L.length,X=0,Z=void 0,$=0,aa=-1;X<U;X++){Z=L[X];if(Z==" "){if(!$&&(!R||X)){M.push(new CKEDITOR.dom.text(" "));
aa=M.length}$=1}else{M.push(Z);$=0}}u&&aa==M.length&&M.pop();R=M}}if(R){for(;u=R.pop();)E.insertNode(u);R=0}else E.insertNode(D.node);if(D.lastNotAllowed&&x<C.length-1){(Q=T?v:Q)&&E.setEndAt(Q,CKEDITOR.POSITION_AFTER_START);r=0}E.collapse()}}h.dontMoveCaret=q;h.bogusNeededBlocks=z}K=h.range;var V;Q=h.bogusNeededBlocks;for(R=K.createBookmark();F=h.zombies.pop();)if(F.getParent()){O=K.clone();O.moveToElementEditStart(F);O.removeEmptyBlocksAtEnd()}if(Q)for(;F=Q.pop();)CKEDITOR.env.needsBrFiller?F.appendBogus():
F.append(K.document.createText(" "));for(;F=h.mergeCandidates.pop();)F.mergeSiblings();K.moveToBookmark(R);if(!h.dontMoveCaret){for(F=a(K.startContainer)&&K.startContainer.getChild(K.startOffset-1);F&&a(F)&&!F.is(n.$empty);){if(F.isBlockBoundary())K.moveToPosition(F,CKEDITOR.POSITION_BEFORE_END);else{if(e(F)&&F.getHtml().match(/(\s|&nbsp;)$/g)){V=null;break}V=K.clone();V.moveToPosition(F,CKEDITOR.POSITION_BEFORE_END)}F=F.getLast(c)}V&&K.moveToRange(V)}o.select();l(i)}}}(),u=function(){function a(b){b=
new CKEDITOR.dom.walker(b);b.guard=function(a,b){if(b)return false;if(a.type==CKEDITOR.NODE_ELEMENT)return a.is(CKEDITOR.dtd.$tableContent)};b.evaluator=function(a){return a.type==CKEDITOR.NODE_ELEMENT};return b}function b(a,c,d){c=a.getDocument().createElement(c);a.append(c,d);return c}function c(a){var b=a.count(),d;for(b;b-- >0;){d=a.getItem(b);if(!CKEDITOR.tools.trim(d.getHtml())){d.appendBogus();CKEDITOR.env.ie&&(CKEDITOR.env.version<9&&d.getChildCount())&&d.getFirst().remove()}}}return function(d){var e=
d.startContainer,j=e.getAscendant("table",1),i=false;c(j.getElementsByTag("td"));c(j.getElementsByTag("th"));j=d.clone();j.setStart(e,0);j=a(j).lastBackward();if(!j){j=d.clone();j.setEndAt(e,CKEDITOR.POSITION_BEFORE_END);j=a(j).lastForward();i=true}j||(j=e);if(j.is("table")){d.setStartAt(j,CKEDITOR.POSITION_BEFORE_START);d.collapse(true);j.remove()}else{j.is({tbody:1,thead:1,tfoot:1})&&(j=b(j,"tr",i));j.is("tr")&&(j=b(j,j.getParent().is("thead")?"th":"td",i));(e=j.getBogus())&&e.remove();d.moveToPosition(j,
i?CKEDITOR.POSITION_AFTER_START:CKEDITOR.POSITION_BEFORE_END)}}}()})();
(function(){function a(){var a=this._.fakeSelection,b;if(a){b=this.getSelection(1);if(!b||!b.isHidden()){a.reset();a=0}}if(!a){a=b||this.getSelection(1);if(!a||a.getType()==CKEDITOR.SELECTION_NONE)return}this.fire("selectionCheck",a);b=this.elementPath();if(!b.compare(this._.selectionPreviousPath)){if(CKEDITOR.env.webkit)this._.previousActive=this.document.getActive();this._.selectionPreviousPath=b;this.fire("selectionChange",{selection:a,path:b})}}function d(){q=true;if(!s){b.call(this);s=CKEDITOR.tools.setTimeout(b,
200,this)}}function b(){s=null;if(q){CKEDITOR.tools.setTimeout(a,0,this);q=false}}function c(a){function b(c,d){return!c||c.type==CKEDITOR.NODE_TEXT?false:a.clone()["moveToElementEdit"+(d?"End":"Start")](c)}if(!(a.root instanceof CKEDITOR.editable))return false;var c=a.startContainer,d=a.getPreviousNode(u,null,c),e=a.getNextNode(u,null,c);return b(d)||b(e,1)||!d&&!e&&!(c.type==CKEDITOR.NODE_ELEMENT&&c.isBlockBoundary()&&c.getBogus())?true:false}function e(a){return a.getCustomData("cke-fillingChar")}
function i(a,b){var c=a&&a.removeCustomData("cke-fillingChar");if(c){if(b!==false){var d,e=a.getDocument().getSelection().getNative(),f=e&&e.type!="None"&&e.getRangeAt(0);if(c.getLength()>1&&f&&f.intersectsNode(c.$)){d=[e.anchorOffset,e.focusOffset];f=e.focusNode==c.$&&e.focusOffset>0;e.anchorNode==c.$&&e.anchorOffset>0&&d[0]--;f&&d[1]--;var i;f=e;if(!f.isCollapsed){i=f.getRangeAt(0);i.setStart(f.anchorNode,f.anchorOffset);i.setEnd(f.focusNode,f.focusOffset);i=i.collapsed}i&&d.unshift(d.pop())}}c.setText(g(c.getText()));
if(d){c=e.getRangeAt(0);c.setStart(c.startContainer,d[0]);c.setEnd(c.startContainer,d[1]);e.removeAllRanges();e.addRange(c)}}}function g(a){return a.replace(/\u200B( )?/g,function(a){return a[1]?" ":""})}function l(a,b,c){var d=a.on("focus",function(a){a.cancel()},null,null,-100);if(CKEDITOR.env.ie)var e=a.getDocument().on("selectionchange",function(a){a.cancel()},null,null,-100);else{var f=new CKEDITOR.dom.range(a);f.moveToElementEditStart(a);var i=a.getDocument().$.createRange();i.setStart(f.startContainer.$,
f.startOffset);i.collapse(1);b.removeAllRanges();b.addRange(i)}c&&a.focus();d.removeListener();e&&e.removeListener()}function h(a){var b=CKEDITOR.dom.element.createFromHtml('<div data-cke-hidden-sel="1" data-cke-temp="1" style="'+(CKEDITOR.env.ie?"display:none":"position:fixed;top:0;left:-1000px")+'">&nbsp;</div>',a.document);a.fire("lockSnapshot");a.editable().append(b);var c=a.getSelection(1),d=a.createRange(),e=c.root.on("selectionchange",function(a){a.cancel()},null,null,0);d.setStartAt(b,CKEDITOR.POSITION_AFTER_START);
d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);c.selectRanges([d]);e.removeListener();a.fire("unlockSnapshot");a._.hiddenSelectionContainer=b}function k(a){var b={37:1,39:1,8:1,46:1};return function(c){var d=c.data.getKeystroke();if(b[d]){var e=a.getSelection().getRanges(),f=e[0];if(e.length==1&&f.collapsed)if((d=f[d<38?"getPreviousEditableNode":"getNextEditableNode"]())&&d.type==CKEDITOR.NODE_ELEMENT&&d.getAttribute("contenteditable")=="false"){a.getSelection().fake(d);c.data.preventDefault();c.cancel()}}}}
function o(a){for(var b=0;b<a.length;b++){var c=a[b];c.getCommonAncestor().isReadOnly()&&a.splice(b,1);if(!c.collapsed){if(c.startContainer.isReadOnly())for(var d=c.startContainer,e;d;){if((e=d.type==CKEDITOR.NODE_ELEMENT)&&d.is("body")||!d.isReadOnly())break;e&&d.getAttribute("contentEditable")=="false"&&c.setStartAfter(d);d=d.getParent()}d=c.startContainer;e=c.endContainer;var f=c.startOffset,i=c.endOffset,g=c.clone();d&&d.type==CKEDITOR.NODE_TEXT&&(f>=d.getLength()?g.setStartAfter(d):g.setStartBefore(d));
e&&e.type==CKEDITOR.NODE_TEXT&&(i?g.setEndAfter(e):g.setEndBefore(e));d=new CKEDITOR.dom.walker(g);d.evaluator=function(d){if(d.type==CKEDITOR.NODE_ELEMENT&&d.isReadOnly()){var e=c.clone();c.setEndBefore(d);c.collapsed&&a.splice(b--,1);if(!(d.getPosition(g.endContainer)&CKEDITOR.POSITION_CONTAINS)){e.setStartAfter(d);e.collapsed||a.splice(b+1,0,e)}return true}return false};d.next()}}return a}var s,q,u=CKEDITOR.dom.walker.invisible(1),f=function(){function a(b){return function(a){var c=a.editor.createRange();
c.moveToClosestEditablePosition(a.selected,b)&&a.editor.getSelection().selectRanges([c]);return false}}function b(a){return function(b){var c=b.editor,d=c.createRange(),e;if(!(e=d.moveToClosestEditablePosition(b.selected,a)))e=d.moveToClosestEditablePosition(b.selected,!a);e&&c.getSelection().selectRanges([d]);c.fire("saveSnapshot");b.selected.remove();if(!e){d.moveToElementEditablePosition(c.editable());c.getSelection().selectRanges([d])}c.fire("saveSnapshot");return false}}var c=a(),d=a(1);return{37:c,
38:c,39:d,40:d,8:b(),46:b(1)}}();CKEDITOR.on("instanceCreated",function(b){function c(){var a=e.getSelection();a&&a.removeAllRanges()}var e=b.editor;e.on("contentDom",function(){var b=e.document,c=CKEDITOR.document,f=e.editable(),j=b.getBody(),g=b.getDocumentElement(),m=f.isInline(),h,l;CKEDITOR.env.gecko&&f.attachListener(f,"focus",function(a){a.removeListener();if(h!==0)if((a=e.getSelection().getNative())&&a.isCollapsed&&a.anchorNode==f.$){a=e.createRange();a.moveToElementEditStart(f);a.select()}},
null,null,-2);f.attachListener(f,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){h&&CKEDITOR.env.webkit&&(h=e._.previousActive&&e._.previousActive.equals(b.getActive()));e.unlockSelection(h);h=0},null,null,-1);f.attachListener(f,"mousedown",function(){h=0});if(CKEDITOR.env.ie||CKEDITOR.env.opera||m){var o=function(){l=new CKEDITOR.dom.selection(e.getSelection());l.lock()};p?f.attachListener(f,"beforedeactivate",o,null,null,-1):f.attachListener(e,"selectionCheck",o,null,null,-1);f.attachListener(f,
CKEDITOR.env.webkit?"DOMFocusOut":"blur",function(){e.lockSelection(l);h=1},null,null,-1);f.attachListener(f,"mousedown",function(){h=0})}if(CKEDITOR.env.ie&&!m){var v;f.attachListener(f,"mousedown",function(a){if(a.data.$.button==2){a=e.document.getSelection();if(!a||a.getType()==CKEDITOR.SELECTION_NONE)v=e.window.getScrollPosition()}});f.attachListener(f,"mouseup",function(a){if(a.data.$.button==2&&v){e.document.$.documentElement.scrollLeft=v.x;e.document.$.documentElement.scrollTop=v.y}v=null});
if(b.$.compatMode!="BackCompat"){if(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)g.on("mousedown",function(a){function b(a){a=a.data.$;if(e){var c=j.$.createTextRange();try{c.moveToPoint(a.x,a.y)}catch(d){}e.setEndPoint(i.compareEndPoints("StartToStart",c)<0?"EndToEnd":"StartToStart",c);e.select()}}function d(){g.removeListener("mousemove",b);c.removeListener("mouseup",d);g.removeListener("mouseup",d);e.select()}a=a.data;if(a.getTarget().is("html")&&a.$.y<g.$.clientHeight&&a.$.x<g.$.clientWidth){var e=
j.$.createTextRange();try{e.moveToPoint(a.$.x,a.$.y)}catch(f){}var i=e.duplicate();g.on("mousemove",b);c.on("mouseup",d);g.on("mouseup",d)}});if(CKEDITOR.env.version>7&&CKEDITOR.env.version<11){g.on("mousedown",function(a){if(a.data.getTarget().is("html")){c.on("mouseup",x);g.on("mouseup",x)}});var x=function(){c.removeListener("mouseup",x);g.removeListener("mouseup",x);var a=CKEDITOR.document.$.selection,d=a.createRange();a.type!="None"&&d.parentElement().ownerDocument==b.$&&d.select()}}}}f.attachListener(f,
"selectionchange",a,e);f.attachListener(f,"keyup",d,e);f.attachListener(f,CKEDITOR.env.webkit?"DOMFocusIn":"focus",function(){e.forceNextSelectionCheck();e.selectionChange(1)});if(m?CKEDITOR.env.webkit||CKEDITOR.env.gecko:CKEDITOR.env.opera){var C;f.attachListener(f,"mousedown",function(){C=1});f.attachListener(b.getDocumentElement(),"mouseup",function(){C&&d.call(e);C=0})}else f.attachListener(CKEDITOR.env.ie?f:b.getDocumentElement(),"mouseup",d,e);CKEDITOR.env.webkit&&f.attachListener(b,"keydown",
function(a){switch(a.data.getKey()){case 13:case 33:case 34:case 35:case 36:case 37:case 39:case 8:case 45:case 46:i(f)}},null,null,-1);f.attachListener(f,"keydown",k(e),null,null,-1)});e.on("contentDomUnload",e.forceNextSelectionCheck,e);e.on("dataReady",function(){delete e._.fakeSelection;delete e._.hiddenSelectionContainer;e.selectionChange(1)});e.on("loadSnapshot",function(){var a=e.editable().getLast(function(a){return a.type==CKEDITOR.NODE_ELEMENT});a&&a.hasAttribute("data-cke-hidden-sel")&&
a.remove()},null,null,100);CKEDITOR.env.ie9Compat&&e.on("beforeDestroy",c,null,null,9);CKEDITOR.env.webkit&&e.on("setData",c);e.on("contentDomUnload",function(){e.unlockSelection()});e.on("key",function(a){if(e.mode=="wysiwyg"){var b=e.getSelection();if(b.isFake){var c=f[a.data.keyCode];if(c)return c({editor:e,selected:b.getSelectedElement(),selection:b,keyEvent:a})}}})});CKEDITOR.on("instanceReady",function(a){var b=a.editor;if(CKEDITOR.env.webkit){b.on("selectionChange",function(){var a=b.editable(),
c=e(a);c&&(c.getCustomData("ready")?i(a):c.setCustomData("ready",1))},null,null,-1);b.on("beforeSetMode",function(){i(b.editable())},null,null,-1);var c,d,a=function(){var a=b.editable();if(a)if(a=e(a)){var f=b.document.$.defaultView.getSelection();f.type=="Caret"&&f.anchorNode==a.$&&(d=1);c=a.getText();a.setText(g(c))}},f=function(){var a=b.editable();if(a)if(a=e(a)){a.setText(c);if(d){b.document.$.defaultView.getSelection().setPosition(a.$,a.getLength());d=0}}};b.on("beforeUndoImage",a);b.on("afterUndoImage",
f);b.on("beforeGetData",a,null,null,0);b.on("getData",f)}});CKEDITOR.editor.prototype.selectionChange=function(b){(b?a:d).call(this)};CKEDITOR.editor.prototype.getSelection=function(a){if((this._.savedSelection||this._.fakeSelection)&&!a)return this._.savedSelection||this._.fakeSelection;return(a=this.editable())&&this.mode=="wysiwyg"?new CKEDITOR.dom.selection(a):null};CKEDITOR.editor.prototype.lockSelection=function(a){a=a||this.getSelection(1);if(a.getType()!=CKEDITOR.SELECTION_NONE){!a.isLocked&&
a.lock();this._.savedSelection=a;return true}return false};CKEDITOR.editor.prototype.unlockSelection=function(a){var b=this._.savedSelection;if(b){b.unlock(a);delete this._.savedSelection;return true}return false};CKEDITOR.editor.prototype.forceNextSelectionCheck=function(){delete this._.selectionPreviousPath};CKEDITOR.dom.document.prototype.getSelection=function(){return new CKEDITOR.dom.selection(this)};CKEDITOR.dom.range.prototype.select=function(){var a=this.root instanceof CKEDITOR.editable?
this.root.editor.getSelection():new CKEDITOR.dom.selection(this.root);a.selectRanges([this]);return a};CKEDITOR.SELECTION_NONE=1;CKEDITOR.SELECTION_TEXT=2;CKEDITOR.SELECTION_ELEMENT=3;var p=typeof window.getSelection!="function",y=1;CKEDITOR.dom.selection=function(a){if(a instanceof CKEDITOR.dom.selection)var b=a,a=a.root;var c=a instanceof CKEDITOR.dom.element;this.rev=b?b.rev:y++;this.document=a instanceof CKEDITOR.dom.document?a:a.getDocument();this.root=a=c?a:this.document.getBody();this.isLocked=
0;this._={cache:{}};if(b){CKEDITOR.tools.extend(this._.cache,b._.cache);this.isFake=b.isFake;this.isLocked=b.isLocked;return this}b=p?this.document.$.selection:this.document.getWindow().$.getSelection();if(CKEDITOR.env.webkit)(b.type=="None"&&this.document.getActive().equals(a)||b.type=="Caret"&&b.anchorNode.nodeType==CKEDITOR.NODE_DOCUMENT)&&l(a,b);else if(CKEDITOR.env.gecko)b&&(this.document.getActive().equals(a)&&b.anchorNode&&b.anchorNode.nodeType==CKEDITOR.NODE_DOCUMENT)&&l(a,b,true);else if(CKEDITOR.env.ie){var d;
try{d=this.document.getActive()}catch(e){}if(p)b.type=="None"&&(d&&d.equals(this.document.getDocumentElement()))&&l(a,null,true);else{(b=b&&b.anchorNode)&&(b=new CKEDITOR.dom.node(b));d&&(d.equals(this.document.getDocumentElement())&&b&&(a.equals(b)||a.contains(b)))&&l(a,null,true)}}d=this.getNative();var f,i;if(d)if(d.getRangeAt)f=(i=d.rangeCount&&d.getRangeAt(0))&&new CKEDITOR.dom.node(i.commonAncestorContainer);else{try{i=d.createRange()}catch(g){}f=i&&CKEDITOR.dom.element.get(i.item&&i.item(0)||
i.parentElement())}if(!f||!(f.type==CKEDITOR.NODE_ELEMENT||f.type==CKEDITOR.NODE_TEXT)||!this.root.equals(f)&&!this.root.contains(f)){this._.cache.type=CKEDITOR.SELECTION_NONE;this._.cache.startElement=null;this._.cache.selectedElement=null;this._.cache.selectedText="";this._.cache.ranges=new CKEDITOR.dom.rangeList}return this};var A={img:1,hr:1,li:1,table:1,tr:1,td:1,th:1,embed:1,object:1,ol:1,ul:1,a:1,input:1,form:1,select:1,textarea:1,button:1,fieldset:1,thead:1,tfoot:1};CKEDITOR.dom.selection.prototype=
{getNative:function(){return this._.cache.nativeSel!==void 0?this._.cache.nativeSel:this._.cache.nativeSel=p?this.document.$.selection:this.document.getWindow().$.getSelection()},getType:p?function(){var a=this._.cache;if(a.type)return a.type;var b=CKEDITOR.SELECTION_NONE;try{var c=this.getNative(),d=c.type;if(d=="Text")b=CKEDITOR.SELECTION_TEXT;if(d=="Control")b=CKEDITOR.SELECTION_ELEMENT;if(c.createRange().parentElement())b=CKEDITOR.SELECTION_TEXT}catch(e){}return a.type=b}:function(){var a=this._.cache;
if(a.type)return a.type;var b=CKEDITOR.SELECTION_TEXT,c=this.getNative();if(!c||!c.rangeCount)b=CKEDITOR.SELECTION_NONE;else if(c.rangeCount==1){var c=c.getRangeAt(0),d=c.startContainer;if(d==c.endContainer&&d.nodeType==1&&c.endOffset-c.startOffset==1&&A[d.childNodes[c.startOffset].nodeName.toLowerCase()])b=CKEDITOR.SELECTION_ELEMENT}return a.type=b},getRanges:function(){var a=p?function(){function a(b){return(new CKEDITOR.dom.node(b)).getIndex()}var b=function(b,c){b=b.duplicate();b.collapse(c);
var d=b.parentElement();if(!d.hasChildNodes())return{container:d,offset:0};for(var e=d.children,f,i,g=b.duplicate(),h=0,m=e.length-1,v=-1,k,n;h<=m;){v=Math.floor((h+m)/2);f=e[v];g.moveToElementText(f);k=g.compareEndPoints("StartToStart",b);if(k>0)m=v-1;else if(k<0)h=v+1;else return{container:d,offset:a(f)}}if(v==-1||v==e.length-1&&k<0){g.moveToElementText(d);g.setEndPoint("StartToStart",b);g=g.text.replace(/(\r\n|\r)/g,"\n").length;e=d.childNodes;if(!g){f=e[e.length-1];return f.nodeType!=CKEDITOR.NODE_TEXT?
{container:d,offset:e.length}:{container:f,offset:f.nodeValue.length}}for(d=e.length;g>0&&d>0;){i=e[--d];if(i.nodeType==CKEDITOR.NODE_TEXT){n=i;g=g-i.nodeValue.length}}return{container:n,offset:-g}}g.collapse(k>0?true:false);g.setEndPoint(k>0?"StartToStart":"EndToStart",b);g=g.text.replace(/(\r\n|\r)/g,"\n").length;if(!g)return{container:d,offset:a(f)+(k>0?0:1)};for(;g>0;)try{i=f[k>0?"previousSibling":"nextSibling"];if(i.nodeType==CKEDITOR.NODE_TEXT){g=g-i.nodeValue.length;n=i}f=i}catch(l){return{container:d,
offset:a(f)}}return{container:n,offset:k>0?-g:n.nodeValue.length+g}};return function(){var a=this.getNative(),c=a&&a.createRange(),d=this.getType();if(!a)return[];if(d==CKEDITOR.SELECTION_TEXT){a=new CKEDITOR.dom.range(this.root);d=b(c,true);a.setStart(new CKEDITOR.dom.node(d.container),d.offset);d=b(c);a.setEnd(new CKEDITOR.dom.node(d.container),d.offset);a.endContainer.getPosition(a.startContainer)&CKEDITOR.POSITION_PRECEDING&&a.endOffset<=a.startContainer.getIndex()&&a.collapse();return[a]}if(d==
CKEDITOR.SELECTION_ELEMENT){for(var d=[],e=0;e<c.length;e++){for(var f=c.item(e),g=f.parentNode,i=0,a=new CKEDITOR.dom.range(this.root);i<g.childNodes.length&&g.childNodes[i]!=f;i++);a.setStart(new CKEDITOR.dom.node(g),i);a.setEnd(new CKEDITOR.dom.node(g),i+1);d.push(a)}return d}return[]}}():function(){var a=[],b,c=this.getNative();if(!c)return a;for(var d=0;d<c.rangeCount;d++){var e=c.getRangeAt(d);b=new CKEDITOR.dom.range(this.root);b.setStart(new CKEDITOR.dom.node(e.startContainer),e.startOffset);
b.setEnd(new CKEDITOR.dom.node(e.endContainer),e.endOffset);a.push(b)}return a};return function(b){var c=this._.cache,d=c.ranges;if(!d)c.ranges=d=new CKEDITOR.dom.rangeList(a.call(this));return!b?d:o(new CKEDITOR.dom.rangeList(d.slice()))}}(),getStartElement:function(){var a=this._.cache;if(a.startElement!==void 0)return a.startElement;var b;switch(this.getType()){case CKEDITOR.SELECTION_ELEMENT:return this.getSelectedElement();case CKEDITOR.SELECTION_TEXT:var c=this.getRanges()[0];if(c){if(c.collapsed){b=
c.startContainer;b.type!=CKEDITOR.NODE_ELEMENT&&(b=b.getParent())}else{for(c.optimize();;){b=c.startContainer;if(c.startOffset==(b.getChildCount?b.getChildCount():b.getLength())&&!b.isBlockBoundary())c.setStartAfter(b);else break}b=c.startContainer;if(b.type!=CKEDITOR.NODE_ELEMENT)return b.getParent();b=b.getChild(c.startOffset);if(!b||b.type!=CKEDITOR.NODE_ELEMENT)b=c.startContainer;else for(c=b.getFirst();c&&c.type==CKEDITOR.NODE_ELEMENT;){b=c;c=c.getFirst()}}b=b.$}}return a.startElement=b?new CKEDITOR.dom.element(b):
null},getSelectedElement:function(){var a=this._.cache;if(a.selectedElement!==void 0)return a.selectedElement;var b=this,c=CKEDITOR.tools.tryThese(function(){return b.getNative().createRange().item(0)},function(){for(var a=b.getRanges()[0].clone(),c,d,e=2;e&&(!(c=a.getEnclosedNode())||!(c.type==CKEDITOR.NODE_ELEMENT&&A[c.getName()]&&(d=c)));e--)a.shrink(CKEDITOR.SHRINK_ELEMENT);return d&&d.$});return a.selectedElement=c?new CKEDITOR.dom.element(c):null},getSelectedText:function(){var a=this._.cache;
if(a.selectedText!==void 0)return a.selectedText;var b=this.getNative(),b=p?b.type=="Control"?"":b.createRange().text:b.toString();return a.selectedText=b},lock:function(){this.getRanges();this.getStartElement();this.getSelectedElement();this.getSelectedText();this._.cache.nativeSel=null;this.isLocked=1},unlock:function(a){if(this.isLocked){if(a)var b=this.getSelectedElement(),c=!b&&this.getRanges(),d=this.isFake;this.isLocked=0;this.reset();if(a)(a=b||c[0]&&c[0].getCommonAncestor())&&a.getAscendant("body",
1)&&(d?this.fake(b):b?this.selectElement(b):this.selectRanges(c))}},reset:function(){this._.cache={};this.isFake=0;var a=this.root.editor;if(a&&a._.fakeSelection&&this.rev==a._.fakeSelection.rev){delete a._.fakeSelection;var b=a._.hiddenSelectionContainer;if(b){a.fire("lockSnapshot");b.remove();a.fire("unlockSnapshot")}delete a._.hiddenSelectionContainer}this.rev=y++},selectElement:function(a){var b=new CKEDITOR.dom.range(this.root);b.setStartBefore(a);b.setEndAfter(a);this.selectRanges([b])},selectRanges:function(a){var b=
this.root.editor,b=b&&b._.hiddenSelectionContainer;this.reset();if(b)for(var b=this.root,d,e=0;e<a.length;++e){d=a[e];if(d.endContainer.equals(b))d.endOffset=Math.min(d.endOffset,b.getChildCount())}if(a.length)if(this.isLocked){var f=CKEDITOR.document.getActive();this.unlock();this.selectRanges(a);this.lock();!f.equals(this.root)&&f.focus()}else{var g;a:{var h,k;if(a.length==1&&!(k=a[0]).collapsed&&(g=k.getEnclosedNode())&&g.type==CKEDITOR.NODE_ELEMENT){k=k.clone();k.shrink(CKEDITOR.SHRINK_ELEMENT,
true);if((h=k.getEnclosedNode())&&h.type==CKEDITOR.NODE_ELEMENT)g=h;if(g.getAttribute("contenteditable")=="false")break a}g=void 0}if(g)this.fake(g);else{if(p){k=CKEDITOR.dom.walker.whitespaces(true);h=/\ufeff|\u00a0/;b={table:1,tbody:1,tr:1};if(a.length>1){g=a[a.length-1];a[0].setEnd(g.endContainer,g.endOffset)}g=a[0];var a=g.collapsed,l,o,q;if((d=g.getEnclosedNode())&&d.type==CKEDITOR.NODE_ELEMENT&&d.getName()in A&&(!d.is("a")||!d.getText()))try{q=d.$.createControlRange();q.addElement(d.$);q.select();
return}catch(s){}(g.startContainer.type==CKEDITOR.NODE_ELEMENT&&g.startContainer.getName()in b||g.endContainer.type==CKEDITOR.NODE_ELEMENT&&g.endContainer.getName()in b)&&g.shrink(CKEDITOR.NODE_ELEMENT,true);q=g.createBookmark();b=q.startNode;if(!a)f=q.endNode;q=g.document.$.body.createTextRange();q.moveToElementText(b.$);q.moveStart("character",1);if(f){h=g.document.$.body.createTextRange();h.moveToElementText(f.$);q.setEndPoint("EndToEnd",h);q.moveEnd("character",-1)}else{l=b.getNext(k);o=b.hasAscendant("pre");
l=!(l&&l.getText&&l.getText().match(h))&&(o||!b.hasPrevious()||b.getPrevious().is&&b.getPrevious().is("br"));o=g.document.createElement("span");o.setHtml("&#65279;");o.insertBefore(b);l&&g.document.createText("﻿").insertBefore(b)}g.setStartBefore(b);b.remove();if(a){if(l){q.moveStart("character",-1);q.select();g.document.$.selection.clear()}else q.select();g.moveToPosition(o,CKEDITOR.POSITION_BEFORE_START);o.remove()}else{g.setEndBefore(f);f.remove();q.select()}}else{f=this.getNative();if(!f)return;
if(CKEDITOR.env.opera){q=this.document.$.createRange();q.selectNodeContents(this.root.$);f.addRange(q)}this.removeAllRanges();for(q=0;q<a.length;q++){if(q<a.length-1){g=a[q];l=a[q+1];h=g.clone();h.setStart(g.endContainer,g.endOffset);h.setEnd(l.startContainer,l.startOffset);if(!h.collapsed){h.shrink(CKEDITOR.NODE_ELEMENT,true);o=h.getCommonAncestor();h=h.getEnclosedNode();if(o.isReadOnly()||h&&h.isReadOnly()){l.setStart(g.startContainer,g.startOffset);a.splice(q--,1);continue}}}g=a[q];o=this.document.$.createRange();
l=g.startContainer;if(CKEDITOR.env.opera&&g.collapsed&&l.type==CKEDITOR.NODE_ELEMENT){h=l.getChild(g.startOffset-1);k=l.getChild(g.startOffset);if(!h&&!k&&l.is(CKEDITOR.dtd.$removeEmpty)||h&&h.type==CKEDITOR.NODE_ELEMENT||k&&k.type==CKEDITOR.NODE_ELEMENT){g.insertNode(this.document.createText(""));g.collapse(1)}}if(g.collapsed&&CKEDITOR.env.webkit&&c(g)){l=this.root;i(l,false);h=l.getDocument().createText("​");l.setCustomData("cke-fillingChar",h);g.insertNode(h);if((l=h.getNext())&&!h.getPrevious()&&
l.type==CKEDITOR.NODE_ELEMENT&&l.getName()=="br"){i(this.root);g.moveToPosition(l,CKEDITOR.POSITION_BEFORE_START)}else g.moveToPosition(h,CKEDITOR.POSITION_AFTER_END)}o.setStart(g.startContainer.$,g.startOffset);try{o.setEnd(g.endContainer.$,g.endOffset)}catch(v){if(v.toString().indexOf("NS_ERROR_ILLEGAL_VALUE")>=0){g.collapse(1);o.setEnd(g.endContainer.$,g.endOffset)}else throw v;}f.addRange(o)}}this.reset();this.root.fire("selectionchange")}}},fake:function(a){var b=this.root.editor;this.reset();
h(b);var c=this._.cache,d=new CKEDITOR.dom.range(this.root);d.setStartBefore(a);d.setEndAfter(a);c.ranges=new CKEDITOR.dom.rangeList(d);c.selectedElement=c.startElement=a;c.type=CKEDITOR.SELECTION_ELEMENT;c.selectedText=c.nativeSel=null;this.isFake=1;this.rev=y++;b._.fakeSelection=this;this.root.fire("selectionchange")},isHidden:function(){var a=this.getCommonAncestor();a&&a.type==CKEDITOR.NODE_TEXT&&(a=a.getParent());return!(!a||!a.data("cke-hidden-sel"))},createBookmarks:function(a){a=this.getRanges().createBookmarks(a);
this.isFake&&(a.isFake=1);return a},createBookmarks2:function(a){a=this.getRanges().createBookmarks2(a);this.isFake&&(a.isFake=1);return a},selectBookmarks:function(a){for(var b=[],c=0;c<a.length;c++){var d=new CKEDITOR.dom.range(this.root);d.moveToBookmark(a[c]);b.push(d)}a.isFake?this.fake(b[0].getEnclosedNode()):this.selectRanges(b);return this},getCommonAncestor:function(){var a=this.getRanges();return!a.length?null:a[0].startContainer.getCommonAncestor(a[a.length-1].endContainer)},scrollIntoView:function(){this.type!=
CKEDITOR.SELECTION_NONE&&this.getRanges()[0].scrollIntoView()},removeAllRanges:function(){if(this.getType()!=CKEDITOR.SELECTION_NONE){var a=this.getNative();try{a&&a[p?"empty":"removeAllRanges"]()}catch(b){}this.reset()}}}})();"use strict";
CKEDITOR.editor.prototype.attachStyleStateChange=function(a,d){var b=this._.styleStateChangeCallbacks;if(!b){b=this._.styleStateChangeCallbacks=[];this.on("selectionChange",function(a){for(var d=0;d<b.length;d++){var i=b[d],g=i.style.checkActive(a.data.path)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF;i.fn.call(this,g)}})}b.push({style:a,fn:d})};CKEDITOR.STYLE_BLOCK=1;CKEDITOR.STYLE_INLINE=2;CKEDITOR.STYLE_OBJECT=3;
(function(){function a(a,b){for(var c,d;a=a.getParent();){if(a.equals(b))break;if(a.getAttribute("data-nostyle"))c=a;else if(!d){var e=a.getAttribute("contentEditable");e=="false"?c=a:e=="true"&&(d=1)}}return c}function d(b){var e=b.document;if(b.collapsed){e=y(this,e);b.insertNode(e);b.moveToPosition(e,CKEDITOR.POSITION_BEFORE_END)}else{var f=this.element,g=this._.definition,i,h=g.ignoreReadonly,j=h||g.includeReadonly;j==void 0&&(j=b.root.getCustomData("cke_includeReadonly"));var k=CKEDITOR.dtd[f];
if(!k){i=true;k=CKEDITOR.dtd.span}b.enlarge(CKEDITOR.ENLARGE_INLINE,1);b.trim();var l=b.createBookmark(),m=l.startNode,n=l.endNode,o=m,q;if(!h){var p=b.getCommonAncestor(),h=a(m,p),p=a(n,p);h&&(o=h.getNextSourceNode(true));p&&(n=p)}for(o.getPosition(n)==CKEDITOR.POSITION_FOLLOWING&&(o=0);o;){h=false;if(o.equals(n)){o=null;h=true}else{var s=o.type==CKEDITOR.NODE_ELEMENT?o.getName():null,p=s&&o.getAttribute("contentEditable")=="false",r=s&&o.getAttribute("data-nostyle");if(s&&o.data("cke-bookmark")){o=
o.getNextSourceNode(true);continue}if(p&&j&&CKEDITOR.dtd.$block[s])for(var t=o,w=c(t),A=void 0,B=w.length,G=0,t=B&&new CKEDITOR.dom.range(t.getDocument());G<B;++G){var A=w[G],J=CKEDITOR.filter.instances[A.data("cke-filter")];if(J?J.check(this):1){t.selectNodeContents(A);d.call(this,t)}}w=s?!k[s]||r?0:p&&!j?0:(o.getPosition(n)|N)==N&&(!g.childRule||g.childRule(o)):1;if(w)if((w=o.getParent())&&((w.getDtd()||CKEDITOR.dtd.span)[f]||i)&&(!g.parentRule||g.parentRule(w))){if(!q&&(!s||!CKEDITOR.dtd.$removeEmpty[s]||
(o.getPosition(n)|N)==N)){q=b.clone();q.setStartBefore(o)}s=o.type;if(s==CKEDITOR.NODE_TEXT||p||s==CKEDITOR.NODE_ELEMENT&&!o.getChildCount()){for(var s=o,W;(h=!s.getNext(I))&&(W=s.getParent(),k[W.getName()])&&(W.getPosition(m)|H)==H&&(!g.childRule||g.childRule(W));)s=W;q.setEndAfter(s)}}else h=true;else h=true;o=o.getNextSourceNode(r||p)}if(h&&q&&!q.collapsed){for(var h=y(this,e),p=h.hasAttributes(),r=q.getCommonAncestor(),s={},w={},A={},B={},S,P,Y;h&&r;){if(r.getName()==f){for(S in g.attributes)if(!B[S]&&
(Y=r.getAttribute(P)))h.getAttribute(S)==Y?w[S]=1:B[S]=1;for(P in g.styles)if(!A[P]&&(Y=r.getStyle(P)))h.getStyle(P)==Y?s[P]=1:A[P]=1}r=r.getParent()}for(S in w)h.removeAttribute(S);for(P in s)h.removeStyle(P);p&&!h.hasAttributes()&&(h=null);if(h){q.extractContents().appendTo(h);q.insertNode(h);u.call(this,h);h.mergeSiblings();CKEDITOR.env.ie||h.$.normalize()}else{h=new CKEDITOR.dom.element("span");q.extractContents().appendTo(h);q.insertNode(h);u.call(this,h);h.remove(true)}q=null}}b.moveToBookmark(l);
b.shrink(CKEDITOR.SHRINK_TEXT);b.shrink(CKEDITOR.NODE_ELEMENT,true)}}function b(a){function b(){for(var a=new CKEDITOR.dom.elementPath(d.getParent()),c=new CKEDITOR.dom.elementPath(l.getParent()),e=null,f=null,g=0;g<a.elements.length;g++){var h=a.elements[g];if(h==a.block||h==a.blockLimit)break;m.checkElementRemovable(h)&&(e=h)}for(g=0;g<c.elements.length;g++){h=c.elements[g];if(h==c.block||h==c.blockLimit)break;m.checkElementRemovable(h)&&(f=h)}f&&l.breakParent(f);e&&d.breakParent(e)}a.enlarge(CKEDITOR.ENLARGE_INLINE,
1);var c=a.createBookmark(),d=c.startNode;if(a.collapsed){for(var e=new CKEDITOR.dom.elementPath(d.getParent(),a.root),g,i=0,h;i<e.elements.length&&(h=e.elements[i]);i++){if(h==e.block||h==e.blockLimit)break;if(this.checkElementRemovable(h)){var k;if(a.collapsed&&(a.checkBoundaryOfElement(h,CKEDITOR.END)||(k=a.checkBoundaryOfElement(h,CKEDITOR.START)))){g=h;g.match=k?"start":"end"}else{h.mergeSiblings();h.is(this.element)?q.call(this,h):f(h,j(this)[h.getName()])}}}if(g){h=d;for(i=0;;i++){k=e.elements[i];
if(k.equals(g))break;else if(k.match)continue;else k=k.clone();k.append(h);h=k}h[g.match=="start"?"insertBefore":"insertAfter"](g)}}else{var l=c.endNode,m=this;b();for(e=d;!e.equals(l);){g=e.getNextSourceNode();if(e.type==CKEDITOR.NODE_ELEMENT&&this.checkElementRemovable(e)){e.getName()==this.element?q.call(this,e):f(e,j(this)[e.getName()]);if(g.type==CKEDITOR.NODE_ELEMENT&&g.contains(d)){b();g=d.getNext()}}e=g}}a.moveToBookmark(c);a.shrink(CKEDITOR.NODE_ELEMENT,true)}function c(a){var b=[];a.forEach(function(a){if(a.getAttribute("contenteditable")==
"true"){b.push(a);return false}},CKEDITOR.NODE_ELEMENT,true);return b}function e(a){var b=a.getEnclosedNode()||a.getCommonAncestor(false,true);(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1))&&!a.isReadOnly()&&A(a,this)}function i(a){var b=a.getCommonAncestor(true,true);if(a=(new CKEDITOR.dom.elementPath(b,a.root)).contains(this.element,1)){var b=this._.definition,c=b.attributes;if(c)for(var d in c)a.removeAttribute(d,c[d]);if(b.styles)for(var e in b.styles)b.styles.hasOwnProperty(e)&&
a.removeStyle(e)}}function g(a){var b=a.createBookmark(true),c=a.createIterator();c.enforceRealBlocks=true;if(this._.enterMode)c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e=a.document,f;d=c.getNextParagraph();)if(!d.isReadOnly()&&(c.activeFilter?c.activeFilter.check(this):1)){f=y(this,e,d);h(d,f)}a.moveToBookmark(b)}function l(a){var b=a.createBookmark(1),c=a.createIterator();c.enforceRealBlocks=true;c.enlargeBr=this._.enterMode!=CKEDITOR.ENTER_BR;for(var d,e;d=c.getNextParagraph();)if(this.checkElementRemovable(d))if(d.is("pre")){(e=
this._.enterMode==CKEDITOR.ENTER_BR?null:a.document.createElement(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))&&d.copyAttributes(e);h(d,e)}else q.call(this,d);a.moveToBookmark(b)}function h(a,b){var c=!b;if(c){b=a.getDocument().createElement("div");a.copyAttributes(b)}var d=b&&b.is("pre"),e=a.is("pre"),f=!d&&e;if(d&&!e){e=b;(f=a.getBogus())&&f.remove();f=a.getHtml();f=o(f,/(?:^[ \t\n\r]+)|(?:[ \t\n\r]+$)/g,"");f=f.replace(/[ \t\r\n]*(<br[^>]*>)[ \t\r\n]*/gi,"$1");f=f.replace(/([ \t\n\r]+|&nbsp;)/g,
" ");f=f.replace(/<br\b[^>]*>/gi,"\n");if(CKEDITOR.env.ie){var g=a.getDocument().createElement("div");g.append(e);e.$.outerHTML="<pre>"+f+"</pre>";e.copyAttributes(g.getFirst());e=g.getFirst().remove()}else e.setHtml(f);b=e}else f?b=s(c?[a.getHtml()]:k(a),b):a.moveChildren(b);b.replace(a);if(d){var c=b,h;if((h=c.getPrevious(B))&&h.type==CKEDITOR.NODE_ELEMENT&&h.is("pre")){d=o(h.getHtml(),/\n$/,"")+"\n\n"+o(c.getHtml(),/^\n/,"");CKEDITOR.env.ie?c.$.outerHTML="<pre>"+d+"</pre>":c.setHtml(d);h.remove()}}else c&&
p(b)}function k(a){a.getName();var b=[];o(a.getOuterHtml(),/(\S\s*)\n(?:\s|(<span[^>]+data-cke-bookmark.*?\/span>))*\n(?!$)/gi,function(a,b,c){return b+"</pre>"+c+"<pre>"}).replace(/<pre\b.*?>([\s\S]*?)<\/pre>/gi,function(a,c){b.push(c)});return b}function o(a,b,c){var d="",e="",a=a.replace(/(^<span[^>]+data-cke-bookmark.*?\/span>)|(<span[^>]+data-cke-bookmark.*?\/span>$)/gi,function(a,b,c){b&&(d=b);c&&(e=c);return""});return d+a.replace(b,c)+e}function s(a,b){var c;a.length>1&&(c=new CKEDITOR.dom.documentFragment(b.getDocument()));
for(var d=0;d<a.length;d++){var e=a[d],e=e.replace(/(\r\n|\r)/g,"\n"),e=o(e,/^[ \t]*\n/,""),e=o(e,/\n$/,""),e=o(e,/^[ \t]+|[ \t]+$/g,function(a,b){return a.length==1?"&nbsp;":b?" "+CKEDITOR.tools.repeat("&nbsp;",a.length-1):CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "}),e=e.replace(/\n/g,"<br>"),e=e.replace(/[ \t]{2,}/g,function(a){return CKEDITOR.tools.repeat("&nbsp;",a.length-1)+" "});if(c){var f=b.clone();f.setHtml(e);c.append(f)}else b.setHtml(e)}return c||b}function q(a,b){var c=this._.definition,
d=c.attributes,c=c.styles,e=j(this)[a.getName()],g=CKEDITOR.tools.isEmpty(d)&&CKEDITOR.tools.isEmpty(c),h;for(h in d)if(!((h=="class"||this._.definition.fullMatch)&&a.getAttribute(h)!=n(h,d[h]))&&!(b&&h.slice(0,5)=="data-")){g=a.hasAttribute(h);a.removeAttribute(h)}for(var i in c)if(!(this._.definition.fullMatch&&a.getStyle(i)!=n(i,c[i],true))){g=g||!!a.getStyle(i);a.removeStyle(i)}f(a,e,J[a.getName()]);g&&(this._.definition.alwaysRemoveElement?p(a,1):!CKEDITOR.dtd.$block[a.getName()]||this._.enterMode==
CKEDITOR.ENTER_BR&&!a.hasAttributes()?p(a):a.renameNode(this._.enterMode==CKEDITOR.ENTER_P?"p":"div"))}function u(a){for(var b=j(this),c=a.getElementsByTag(this.element),d,e=c.count();--e>=0;){d=c.getItem(e);d.isReadOnly()||q.call(this,d,true)}for(var g in b)if(g!=this.element){c=a.getElementsByTag(g);for(e=c.count()-1;e>=0;e--){d=c.getItem(e);d.isReadOnly()||f(d,b[g])}}}function f(a,b,c){if(b=b&&b.attributes)for(var d=0;d<b.length;d++){var e=b[d][0],f;if(f=a.getAttribute(e)){var g=b[d][1];(g===null||
g.test&&g.test(f)||typeof g=="string"&&f==g)&&a.removeAttribute(e)}}c||p(a)}function p(a,b){if(!a.hasAttributes()||b)if(CKEDITOR.dtd.$block[a.getName()]){var c=a.getPrevious(B),d=a.getNext(B);c&&(c.type==CKEDITOR.NODE_TEXT||!c.isBlockBoundary({br:1}))&&a.append("br",1);d&&(d.type==CKEDITOR.NODE_TEXT||!d.isBlockBoundary({br:1}))&&a.append("br");a.remove(true)}else{c=a.getFirst();d=a.getLast();a.remove(true);if(c){c.type==CKEDITOR.NODE_ELEMENT&&c.mergeSiblings();d&&(!c.equals(d)&&d.type==CKEDITOR.NODE_ELEMENT)&&
d.mergeSiblings()}}}function y(a,b,c){var d;d=a.element;d=="*"&&(d="span");d=new CKEDITOR.dom.element(d,b);c&&c.copyAttributes(d);d=A(d,a);b.getCustomData("doc_processing_style")&&d.hasAttribute("id")?d.removeAttribute("id"):b.setCustomData("doc_processing_style",1);return d}function A(a,b){var c=b._.definition,d=c.attributes,c=CKEDITOR.style.getStyleText(c);if(d)for(var e in d)a.setAttribute(e,d[e]);c&&a.setAttribute("style",c);return a}function m(a,b){for(var c in a)a[c]=a[c].replace(G,function(a,
c){return b[c]})}function j(a){if(a._.overrides)return a._.overrides;var b=a._.overrides={},c=a._.definition.overrides;if(c){CKEDITOR.tools.isArray(c)||(c=[c]);for(var d=0;d<c.length;d++){var e=c[d],f,g;if(typeof e=="string")f=e.toLowerCase();else{f=e.element?e.element.toLowerCase():a.element;g=e.attributes}e=b[f]||(b[f]={});if(g){var e=e.attributes=e.attributes||[],h;for(h in g)e.push([h.toLowerCase(),g[h]])}}}return b}function n(a,b,c){var d=new CKEDITOR.dom.element("span");d[c?"setStyle":"setAttribute"](a,
b);return d[c?"getStyle":"getAttribute"](a)}function r(a,b){for(var c=a.document,d=a.getRanges(),e=b?this.removeFromRange:this.applyToRange,f,g=d.createIterator();f=g.getNextRange();)e.call(this,f);a.selectRanges(d);c.removeCustomData("doc_processing_style")}var J={address:1,div:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,p:1,pre:1,section:1,header:1,footer:1,nav:1,article:1,aside:1,figure:1,dialog:1,hgroup:1,time:1,meter:1,menu:1,command:1,keygen:1,output:1,progress:1,details:1,datagrid:1,datalist:1},t={a:1,
embed:1,hr:1,img:1,li:1,object:1,ol:1,table:1,td:1,tr:1,th:1,ul:1,dl:1,dt:1,dd:1,form:1,audio:1,video:1},w=/\s*(?:;\s*|$)/,G=/#\((.+?)\)/g,I=CKEDITOR.dom.walker.bookmark(0,1),B=CKEDITOR.dom.walker.whitespaces(1);CKEDITOR.style=function(a,b){var c=a.attributes;if(c&&c.style){a.styles=CKEDITOR.tools.extend({},a.styles,CKEDITOR.tools.parseCssText(c.style));delete c.style}if(b){a=CKEDITOR.tools.clone(a);m(a.attributes,b);m(a.styles,b)}c=this.element=a.element?typeof a.element=="string"?a.element.toLowerCase():
a.element:"*";this.type=a.type||(J[c]?CKEDITOR.STYLE_BLOCK:t[c]?CKEDITOR.STYLE_OBJECT:CKEDITOR.STYLE_INLINE);if(typeof this.element=="object")this.type=CKEDITOR.STYLE_OBJECT;this._={definition:a}};CKEDITOR.editor.prototype.applyStyle=function(a){a.checkApplicable(this.elementPath())&&r.call(a,this.getSelection())};CKEDITOR.editor.prototype.removeStyle=function(a){a.checkApplicable(this.elementPath())&&r.call(a,this.getSelection(),1)};CKEDITOR.style.prototype={apply:function(a){r.call(this,a.getSelection())},
remove:function(a){r.call(this,a.getSelection(),1)},applyToRange:function(a){return(this.applyToRange=this.type==CKEDITOR.STYLE_INLINE?d:this.type==CKEDITOR.STYLE_BLOCK?g:this.type==CKEDITOR.STYLE_OBJECT?e:null).call(this,a)},removeFromRange:function(a){return(this.removeFromRange=this.type==CKEDITOR.STYLE_INLINE?b:this.type==CKEDITOR.STYLE_BLOCK?l:this.type==CKEDITOR.STYLE_OBJECT?i:null).call(this,a)},applyToObject:function(a){A(a,this)},checkActive:function(a){switch(this.type){case CKEDITOR.STYLE_BLOCK:return this.checkElementRemovable(a.block||
a.blockLimit,true);case CKEDITOR.STYLE_OBJECT:case CKEDITOR.STYLE_INLINE:for(var b=a.elements,c=0,d;c<b.length;c++){d=b[c];if(!(this.type==CKEDITOR.STYLE_INLINE&&(d==a.block||d==a.blockLimit))){if(this.type==CKEDITOR.STYLE_OBJECT){var e=d.getName();if(!(typeof this.element=="string"?e==this.element:e in this.element))continue}if(this.checkElementRemovable(d,true))return true}}}return false},checkApplicable:function(a,b){if(b&&!b.check(this))return false;switch(this.type){case CKEDITOR.STYLE_OBJECT:return!!a.contains(this.element);
case CKEDITOR.STYLE_BLOCK:return!!a.blockLimit.getDtd()[this.element]}return true},checkElementMatch:function(a,b){var c=this._.definition;if(!a||!c.ignoreReadonly&&a.isReadOnly())return false;var d=a.getName();if(typeof this.element=="string"?d==this.element:d in this.element){if(!b&&!a.hasAttributes())return true;if(d=c._AC)c=d;else{var d={},e=0,f=c.attributes;if(f)for(var g in f){e++;d[g]=f[g]}if(g=CKEDITOR.style.getStyleText(c)){d.style||e++;d.style=g}d._length=e;c=c._AC=d}if(c._length){for(var h in c)if(h!=
"_length"){e=a.getAttribute(h)||"";if(h=="style")a:{d=c[h];typeof d=="string"&&(d=CKEDITOR.tools.parseCssText(d));typeof e=="string"&&(e=CKEDITOR.tools.parseCssText(e,true));g=void 0;for(g in d)if(!(g in e&&(e[g]==d[g]||d[g]=="inherit"||e[g]=="inherit"))){d=false;break a}d=true}else d=c[h]==e;if(d){if(!b)return true}else if(b)return false}if(b)return true}else return true}return false},checkElementRemovable:function(a,b){if(this.checkElementMatch(a,b))return true;var c=j(this)[a.getName()];if(c){var d;
if(!(c=c.attributes))return true;for(var e=0;e<c.length;e++){d=c[e][0];if(d=a.getAttribute(d)){var f=c[e][1];if(f===null||typeof f=="string"&&d==f||f.test(d))return true}}}return false},buildPreview:function(a){var b=this._.definition,c=[],d=b.element;d=="bdo"&&(d="span");var c=["<",d],e=b.attributes;if(e)for(var f in e)c.push(" ",f,'="',e[f],'"');(e=CKEDITOR.style.getStyleText(b))&&c.push(' style="',e,'"');c.push(">",a||b.name,"</",d,">");return c.join("")},getDefinition:function(){return this._.definition}};
CKEDITOR.style.getStyleText=function(a){var b=a._ST;if(b)return b;var b=a.styles,c=a.attributes&&a.attributes.style||"",d="";c.length&&(c=c.replace(w,";"));for(var e in b){var f=b[e],g=(e+":"+f).replace(w,";");f=="inherit"?d=d+g:c=c+g}c.length&&(c=CKEDITOR.tools.normalizeCssText(c,true));return a._ST=c+d};var N=CKEDITOR.POSITION_PRECEDING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED,H=CKEDITOR.POSITION_FOLLOWING|CKEDITOR.POSITION_IDENTICAL|CKEDITOR.POSITION_IS_CONTAINED})();
CKEDITOR.styleCommand=function(a,d){this.requiredContent=this.allowedContent=this.style=a;CKEDITOR.tools.extend(this,d,true)};CKEDITOR.styleCommand.prototype.exec=function(a){a.focus();this.state==CKEDITOR.TRISTATE_OFF?a.applyStyle(this.style):this.state==CKEDITOR.TRISTATE_ON&&a.removeStyle(this.style)};CKEDITOR.stylesSet=new CKEDITOR.resourceManager("","stylesSet");CKEDITOR.addStylesSet=CKEDITOR.tools.bind(CKEDITOR.stylesSet.add,CKEDITOR.stylesSet);
CKEDITOR.loadStylesSet=function(a,d,b){CKEDITOR.stylesSet.addExternal(a,d,"");CKEDITOR.stylesSet.load(a,b)};
CKEDITOR.editor.prototype.getStylesSet=function(a){if(this._.stylesDefinitions)a(this._.stylesDefinitions);else{var d=this,b=d.config.stylesCombo_stylesSet||d.config.stylesSet;if(b===false)a(null);else if(b instanceof Array){d._.stylesDefinitions=b;a(b)}else{b||(b="default");var b=b.split(":"),c=b[0];CKEDITOR.stylesSet.addExternal(c,b[1]?b.slice(1).join(":"):CKEDITOR.getUrl("styles.js"),"");CKEDITOR.stylesSet.load(c,function(b){d._.stylesDefinitions=b[c];a(d._.stylesDefinitions)})}}};
CKEDITOR.dom.comment=function(a,d){typeof a=="string"&&(a=(d?d.$:document).createComment(a));CKEDITOR.dom.domObject.call(this,a)};CKEDITOR.dom.comment.prototype=new CKEDITOR.dom.node;CKEDITOR.tools.extend(CKEDITOR.dom.comment.prototype,{type:CKEDITOR.NODE_COMMENT,getOuterHtml:function(){return"<\!--"+this.$.nodeValue+"--\>"}});"use strict";
(function(){var a={},d={},b;for(b in CKEDITOR.dtd.$blockLimit)b in CKEDITOR.dtd.$list||(a[b]=1);for(b in CKEDITOR.dtd.$block)b in CKEDITOR.dtd.$blockLimit||b in CKEDITOR.dtd.$empty||(d[b]=1);CKEDITOR.dom.elementPath=function(b,e){var i=null,g=null,l=[],h=b,k,e=e||b.getDocument().getBody();do if(h.type==CKEDITOR.NODE_ELEMENT){l.push(h);if(!this.lastElement){this.lastElement=h;if(h.is(CKEDITOR.dtd.$object)||h.getAttribute("contenteditable")=="false")continue}if(h.equals(e))break;if(!g){k=h.getName();
h.getAttribute("contenteditable")=="true"?g=h:!i&&d[k]&&(i=h);if(a[k]){var o;if(o=!i){if(k=k=="div"){a:{k=h.getChildren();o=0;for(var s=k.count();o<s;o++){var q=k.getItem(o);if(q.type==CKEDITOR.NODE_ELEMENT&&CKEDITOR.dtd.$block[q.getName()]){k=true;break a}}k=false}k=!k}o=k}o?i=h:g=h}}}while(h=h.getParent());g||(g=e);this.block=i;this.blockLimit=g;this.root=e;this.elements=l}})();
CKEDITOR.dom.elementPath.prototype={compare:function(a){var d=this.elements,a=a&&a.elements;if(!a||d.length!=a.length)return false;for(var b=0;b<d.length;b++)if(!d[b].equals(a[b]))return false;return true},contains:function(a,d,b){var c;typeof a=="string"&&(c=function(b){return b.getName()==a});a instanceof CKEDITOR.dom.element?c=function(b){return b.equals(a)}:CKEDITOR.tools.isArray(a)?c=function(b){return CKEDITOR.tools.indexOf(a,b.getName())>-1}:typeof a=="function"?c=a:typeof a=="object"&&(c=
function(b){return b.getName()in a});var e=this.elements,i=e.length;d&&i--;if(b){e=Array.prototype.slice.call(e,0);e.reverse()}for(d=0;d<i;d++)if(c(e[d]))return e[d];return null},isContextFor:function(a){var d;if(a in CKEDITOR.dtd.$block){d=this.contains(CKEDITOR.dtd.$intermediate)||this.root.equals(this.block)&&this.block||this.blockLimit;return!!d.getDtd()[a]}return true},direction:function(){return(this.block||this.blockLimit||this.root).getDirection(1)}};
CKEDITOR.dom.text=function(a,d){typeof a=="string"&&(a=(d?d.$:document).createTextNode(a));this.$=a};CKEDITOR.dom.text.prototype=new CKEDITOR.dom.node;
CKEDITOR.tools.extend(CKEDITOR.dom.text.prototype,{type:CKEDITOR.NODE_TEXT,getLength:function(){return this.$.nodeValue.length},getText:function(){return this.$.nodeValue},setText:function(a){this.$.nodeValue=a},split:function(a){var d=this.$.parentNode,b=d.childNodes.length,c=this.getLength(),e=this.getDocument(),i=new CKEDITOR.dom.text(this.$.splitText(a),e);if(d.childNodes.length==b)if(a>=c){i=e.createText("");i.insertAfter(this)}else{a=e.createText("");a.insertAfter(i);a.remove()}return i},substring:function(a,
d){return typeof d!="number"?this.$.nodeValue.substr(a):this.$.nodeValue.substring(a,d)}});
(function(){function a(a,c,d){var i=a.serializable,g=c[d?"endContainer":"startContainer"],l=d?"endOffset":"startOffset",h=i?c.document.getById(a.startNode):a.startNode,a=i?c.document.getById(a.endNode):a.endNode;if(g.equals(h.getPrevious())){c.startOffset=c.startOffset-g.getLength()-a.getPrevious().getLength();g=a.getNext()}else if(g.equals(a.getPrevious())){c.startOffset=c.startOffset-g.getLength();g=a.getNext()}g.equals(h.getParent())&&c[l]++;g.equals(a.getParent())&&c[l]++;c[d?"endContainer":"startContainer"]=
g;return c}CKEDITOR.dom.rangeList=function(a){if(a instanceof CKEDITOR.dom.rangeList)return a;a?a instanceof CKEDITOR.dom.range&&(a=[a]):a=[];return CKEDITOR.tools.extend(a,d)};var d={createIterator:function(){var a=this,c=CKEDITOR.dom.walker.bookmark(),d=[],i;return{getNextRange:function(g){i=i==void 0?0:i+1;var l=a[i];if(l&&a.length>1){if(!i)for(var h=a.length-1;h>=0;h--)d.unshift(a[h].createBookmark(true));if(g)for(var k=0;a[i+k+1];){for(var o=l.document,g=0,h=o.getById(d[k].endNode),o=o.getById(d[k+
1].startNode);;){h=h.getNextSourceNode(false);if(o.equals(h))g=1;else if(c(h)||h.type==CKEDITOR.NODE_ELEMENT&&h.isBlockBoundary())continue;break}if(!g)break;k++}for(l.moveToBookmark(d.shift());k--;){h=a[++i];h.moveToBookmark(d.shift());l.setEnd(h.endContainer,h.endOffset)}}return l}}},createBookmarks:function(b){for(var c=[],d,i=0;i<this.length;i++){c.push(d=this[i].createBookmark(b,true));for(var g=i+1;g<this.length;g++){this[g]=a(d,this[g]);this[g]=a(d,this[g],true)}}return c},createBookmarks2:function(a){for(var c=
[],d=0;d<this.length;d++)c.push(this[d].createBookmark2(a));return c},moveToBookmarks:function(a){for(var c=0;c<this.length;c++)this[c].moveToBookmark(a[c])}}})();
(function(){function a(){return CKEDITOR.getUrl(CKEDITOR.skinName.split(",")[1]||"skins/"+CKEDITOR.skinName.split(",")[0]+"/")}function d(b){var c=CKEDITOR.skin["ua_"+b],d=CKEDITOR.env;if(c)for(var c=c.split(",").sort(function(a,b){return a>b?-1:1}),e=0,g;e<c.length;e++){g=c[e];if(d.ie&&(g.replace(/^ie/,"")==d.version||d.quirks&&g=="iequirks"))g="ie";if(d[g]){b=b+("_"+c[e]);break}}return CKEDITOR.getUrl(a()+b+".css")}function b(a,b){if(!i[a]){CKEDITOR.document.appendStyleSheet(d(a));i[a]=1}b&&b()}
function c(a){var b=a.getById(g);if(!b){b=a.getHead().append("style");b.setAttribute("id",g);b.setAttribute("type","text/css")}return b}function e(a,b,c){var d,e,f;if(CKEDITOR.env.webkit){b=b.split("}").slice(0,-1);for(e=0;e<b.length;e++)b[e]=b[e].split("{")}for(var g=0;g<a.length;g++)if(CKEDITOR.env.webkit)for(e=0;e<b.length;e++){f=b[e][1];for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);a[g].$.sheet.addRule(b[e][0],f)}else{f=b;for(d=0;d<c.length;d++)f=f.replace(c[d][0],c[d][1]);CKEDITOR.env.ie&&
CKEDITOR.env.version<11?a[g].$.styleSheet.cssText=a[g].$.styleSheet.cssText+f:a[g].$.innerHTML=a[g].$.innerHTML+f}}var i={};CKEDITOR.skin={path:a,loadPart:function(c,d){CKEDITOR.skin.name!=CKEDITOR.skinName.split(",")[0]?CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(a()+"skin.js"),function(){b(c,d)}):b(c,d)},getPath:function(a){return CKEDITOR.getUrl(d(a))},icons:{},addIcon:function(a,b,c,d){a=a.toLowerCase();this.icons[a]||(this.icons[a]={path:b,offset:c||0,bgsize:d||"16px"})},getIconStyle:function(a,
b,c,d,e){var f;if(a){a=a.toLowerCase();b&&(f=this.icons[a+"-rtl"]);f||(f=this.icons[a])}a=c||f&&f.path||"";d=d||f&&f.offset;e=e||f&&f.bgsize||"16px";return a&&"background-image:url("+CKEDITOR.getUrl(a)+");background-position:0 "+d+"px;background-size:"+e+";"}};CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{getUiColor:function(){return this.uiColor},setUiColor:function(a){var b=c(CKEDITOR.document);return(this.setUiColor=function(a){var c=CKEDITOR.skin.chameleon,d=[[h,a]];this.uiColor=a;e([b],c(this,
"editor"),d);e(l,c(this,"panel"),d)}).call(this,a)}});var g="cke_ui_color",l=[],h=/\$color/g;CKEDITOR.on("instanceLoaded",function(a){if(!CKEDITOR.env.ie||!CKEDITOR.env.quirks){var b=a.editor,a=function(a){a=(a.data[0]||a.data).element.getElementsByTag("iframe").getItem(0).getFrameDocument();if(!a.getById("cke_ui_color")){a=c(a);l.push(a);var d=b.getUiColor();d&&e([a],CKEDITOR.skin.chameleon(b,"panel"),[[h,d]])}};b.on("panelShow",a);b.on("menuShow",a);b.config.uiColor&&b.setUiColor(b.config.uiColor)}})})();
(function(){if(CKEDITOR.env.webkit)CKEDITOR.env.hc=false;else{var a=CKEDITOR.dom.element.createFromHtml('<div style="width:0;height:0;position:absolute;left:-10000px;border:1px solid;border-color:red blue"></div>',CKEDITOR.document);a.appendTo(CKEDITOR.document.getHead());try{var d=a.getComputedStyle("border-top-color"),b=a.getComputedStyle("border-right-color");CKEDITOR.env.hc=!!(d&&d==b)}catch(c){CKEDITOR.env.hc=false}a.remove()}if(CKEDITOR.env.hc)CKEDITOR.env.cssClass=CKEDITOR.env.cssClass+" cke_hc";
CKEDITOR.document.appendStyleText(".cke{visibility:hidden;}");CKEDITOR.status="loaded";CKEDITOR.fireOnce("loaded");if(a=CKEDITOR._.pending){delete CKEDITOR._.pending;for(d=0;d<a.length;d++){CKEDITOR.editor.prototype.constructor.apply(a[d][0],a[d][1]);CKEDITOR.add(a[d][0])}}})();/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
CKEDITOR.skin.name="moono";CKEDITOR.skin.ua_editor="ie,iequirks,ie7,ie8,gecko";CKEDITOR.skin.ua_dialog="ie,iequirks,ie7,ie8,opera";
CKEDITOR.skin.chameleon=function(){var b=function(){return function(b,e){for(var a=b.match(/[^#]./g),c=0;3>c;c++){var f=a,h=c,d;d=parseInt(a[c],16);d=("0"+(0>e?0|d*(1+e):0|d+(255-d)*e).toString(16)).slice(-2);f[h]=d}return"#"+a.join("")}}(),c=function(){var b=new CKEDITOR.template("background:#{to};background-image:-webkit-gradient(linear,lefttop,leftbottom,from({from}),to({to}));background-image:-moz-linear-gradient(top,{from},{to});background-image:-webkit-linear-gradient(top,{from},{to});background-image:-o-linear-gradient(top,{from},{to});background-image:-ms-linear-gradient(top,{from},{to});background-image:linear-gradient(top,{from},{to});filter:progid:DXImageTransform.Microsoft.gradient(gradientType=0,startColorstr='{from}',endColorstr='{to}');");return function(c,
a){return b.output({from:c,to:a})}}(),f={editor:new CKEDITOR.template("{id}.cke_chrome [border-color:{defaultBorder};] {id} .cke_top [ {defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_bottom [{defaultGradient}border-top-color:{defaultBorder};] {id} .cke_resizer [border-right-color:{ckeResizer}] {id} .cke_dialog_title [{defaultGradient}border-bottom-color:{defaultBorder};] {id} .cke_dialog_footer [{defaultGradient}outline-color:{defaultBorder};border-top-color:{defaultBorder};] {id} .cke_dialog_tab [{lightGradient}border-color:{defaultBorder};] {id} .cke_dialog_tab:hover [{mediumGradient}] {id} .cke_dialog_contents [border-top-color:{defaultBorder};] {id} .cke_dialog_tab_selected, {id} .cke_dialog_tab_selected:hover [background:{dialogTabSelected};border-bottom-color:{dialogTabSelectedBorder};] {id} .cke_dialog_body [background:{dialogBody};border-color:{defaultBorder};] {id} .cke_toolgroup [{lightGradient}border-color:{defaultBorder};] {id} a.cke_button_off:hover, {id} a.cke_button_off:focus, {id} a.cke_button_off:active [{mediumGradient}] {id} .cke_button_on [{ckeButtonOn}] {id} .cke_toolbar_separator [background-color: {ckeToolbarSeparator};] {id} .cke_combo_button [border-color:{defaultBorder};{lightGradient}] {id} a.cke_combo_button:hover, {id} a.cke_combo_button:focus, {id} .cke_combo_on a.cke_combo_button [border-color:{defaultBorder};{mediumGradient}] {id} .cke_path_item [color:{elementsPathColor};] {id} a.cke_path_item:hover, {id} a.cke_path_item:focus, {id} a.cke_path_item:active [background-color:{elementsPathBg};] {id}.cke_panel [border-color:{defaultBorder};] "),
panel:new CKEDITOR.template(".cke_panel_grouptitle [{lightGradient}border-color:{defaultBorder};] .cke_menubutton_icon [background-color:{menubuttonIcon};] .cke_menubutton:hover .cke_menubutton_icon, .cke_menubutton:focus .cke_menubutton_icon, .cke_menubutton:active .cke_menubutton_icon [background-color:{menubuttonIconHover};] .cke_menuseparator [background-color:{menubuttonIcon};] a:hover.cke_colorbox, a:focus.cke_colorbox, a:active.cke_colorbox [border-color:{defaultBorder};] a:hover.cke_colorauto, a:hover.cke_colormore, a:focus.cke_colorauto, a:focus.cke_colormore, a:active.cke_colorauto, a:active.cke_colormore [background-color:{ckeColorauto};border-color:{defaultBorder};] ")};
return function(g,e){var a=g.uiColor,a={id:"."+g.id,defaultBorder:b(a,-0.1),defaultGradient:c(b(a,0.9),a),lightGradient:c(b(a,1),b(a,0.7)),mediumGradient:c(b(a,0.8),b(a,0.5)),ckeButtonOn:c(b(a,0.6),b(a,0.7)),ckeResizer:b(a,-0.4),ckeToolbarSeparator:b(a,0.5),ckeColorauto:b(a,0.8),dialogBody:b(a,0.7),dialogTabSelected:c("#FFFFFF","#FFFFFF"),dialogTabSelectedBorder:"#FFF",elementsPathColor:b(a,-0.6),elementsPathBg:a,menubuttonIcon:b(a,0.5),menubuttonIconHover:b(a,0.3)};return f[e].output(a).replace(/\[/g,
"{").replace(/\]/g,"}")}}();CKEDITOR.plugins.add("dialogui",{onLoad:function(){var i=function(b){this._||(this._={});this._["default"]=this._.initValue=b["default"]||"";this._.required=b.required||!1;for(var a=[this._],d=1;d<arguments.length;d++)a.push(arguments[d]);a.push(!0);CKEDITOR.tools.extend.apply(CKEDITOR.tools,a);return this._},r={build:function(b,a,d){return new CKEDITOR.ui.dialog.textInput(b,a,d)}},l={build:function(b,a,d){return new CKEDITOR.ui.dialog[a.type](b,a,d)}},n={isChanged:function(){return this.getValue()!=
this.getInitValue()},reset:function(b){this.setValue(this.getInitValue(),b)},setInitValue:function(){this._.initValue=this.getValue()},resetInitValue:function(){this._.initValue=this._["default"]},getInitValue:function(){return this._.initValue}},o=CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onChange:function(b,a){this._.domOnChangeRegistered||(b.on("load",function(){this.getInputElement().on("change",function(){b.parts.dialog.isVisible()&&this.fire("change",{value:this.getValue()})},
this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},!0),s=/^on([A-Z]\w+)/,p=function(b){for(var a in b)(s.test(a)||"title"==a||"type"==a)&&delete b[a];return b};CKEDITOR.tools.extend(CKEDITOR.ui.dialog,{labeledElement:function(b,a,d,e){if(!(4>arguments.length)){var c=i.call(this,a);c.labelId=CKEDITOR.tools.getNextId()+"_label";this._.children=[];CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"div",null,{role:"presentation"},function(){var f=[],d=a.required?" cke_required":"";"horizontal"!=
a.labelLayout?f.push('<label class="cke_dialog_ui_labeled_label'+d+'" ',' id="'+c.labelId+'"',c.inputId?' for="'+c.inputId+'"':"",(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",a.label,"</label>",'<div class="cke_dialog_ui_labeled_content"',a.controlStyle?' style="'+a.controlStyle+'"':"",' role="radiogroup" aria-labelledby="'+c.labelId+'">',e.call(this,b,a),"</div>"):(d={type:"hbox",widths:a.widths,padding:0,children:[{type:"html",html:'<label class="cke_dialog_ui_labeled_label'+d+'" id="'+c.labelId+
'" for="'+c.inputId+'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">"+CKEDITOR.tools.htmlEncode(a.label)+"</span>"},{type:"html",html:'<span class="cke_dialog_ui_labeled_content"'+(a.controlStyle?' style="'+a.controlStyle+'"':"")+">"+e.call(this,b,a)+"</span>"}]},CKEDITOR.dialog._.uiElementBuilders.hbox.build(b,d,f));return f.join("")})}},textInput:function(b,a,d){if(!(3>arguments.length)){i.call(this,a);var e=this._.inputId=CKEDITOR.tools.getNextId()+"_textInput",c={"class":"cke_dialog_ui_input_"+
a.type,id:e,type:a.type};a.validate&&(this.validate=a.validate);a.maxLength&&(c.maxlength=a.maxLength);a.size&&(c.size=a.size);a.inputStyle&&(c.style=a.inputStyle);var f=this,h=!1;b.on("load",function(){f.getInputElement().on("keydown",function(a){a.data.getKeystroke()==13&&(h=true)});f.getInputElement().on("keyup",function(a){if(a.data.getKeystroke()==13&&h){b.getButton("ok")&&setTimeout(function(){b.getButton("ok").click()},0);h=false}},null,null,1E3)});CKEDITOR.ui.dialog.labeledElement.call(this,
b,a,d,function(){var b=['<div class="cke_dialog_ui_input_',a.type,'" role="presentation"'];a.width&&b.push('style="width:'+a.width+'" ');b.push("><input ");c["aria-labelledby"]=this._.labelId;this._.required&&(c["aria-required"]=this._.required);for(var d in c)b.push(d+'="'+c[d]+'" ');b.push(" /></div>");return b.join("")})}},textarea:function(b,a,d){if(!(3>arguments.length)){i.call(this,a);var e=this,c=this._.inputId=CKEDITOR.tools.getNextId()+"_textarea",f={};a.validate&&(this.validate=a.validate);
f.rows=a.rows||5;f.cols=a.cols||20;f["class"]="cke_dialog_ui_input_textarea "+(a["class"]||"");"undefined"!=typeof a.inputStyle&&(f.style=a.inputStyle);a.dir&&(f.dir=a.dir);CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){f["aria-labelledby"]=this._.labelId;this._.required&&(f["aria-required"]=this._.required);var a=['<div class="cke_dialog_ui_input_textarea" role="presentation"><textarea id="',c,'" '],b;for(b in f)a.push(b+'="'+CKEDITOR.tools.htmlEncode(f[b])+'" ');a.push(">",CKEDITOR.tools.htmlEncode(e._["default"]),
"</textarea></div>");return a.join("")})}},checkbox:function(b,a,d){if(!(3>arguments.length)){var e=i.call(this,a,{"default":!!a["default"]});a.validate&&(this.validate=a.validate);CKEDITOR.ui.dialog.uiElement.call(this,b,a,d,"span",null,null,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_checkbox":CKEDITOR.tools.getNextId()+"_checkbox"},true),d=[],h=CKEDITOR.tools.getNextId()+"_label",g={"class":"cke_dialog_ui_checkbox_input",type:"checkbox","aria-labelledby":h};p(c);if(a["default"])g.checked=
"checked";if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;e.checkbox=new CKEDITOR.ui.dialog.uiElement(b,c,d,"input",null,g);d.push(' <label id="',h,'" for="',g.id,'"'+(a.labelStyle?' style="'+a.labelStyle+'"':"")+">",CKEDITOR.tools.htmlEncode(a.label),"</label>");return d.join("")})}},radio:function(b,a,d){if(!(3>arguments.length)){i.call(this,a);this._["default"]||(this._["default"]=this._.initValue=a.items[0][1]);a.validate&&(this.validate=a.valdiate);var e=[],c=this;CKEDITOR.ui.dialog.labeledElement.call(this,
b,a,d,function(){for(var d=[],h=[],g=(a.id?a.id:CKEDITOR.tools.getNextId())+"_radio",k=0;k<a.items.length;k++){var j=a.items[k],i=j[2]!==void 0?j[2]:j[0],l=j[1]!==void 0?j[1]:j[0],m=CKEDITOR.tools.getNextId()+"_radio_input",n=m+"_label",m=CKEDITOR.tools.extend({},a,{id:m,title:null,type:null},true),i=CKEDITOR.tools.extend({},m,{title:i},true),o={type:"radio","class":"cke_dialog_ui_radio_input",name:g,value:l,"aria-labelledby":n},q=[];if(c._["default"]==l)o.checked="checked";p(m);p(i);if(typeof m.inputStyle!=
"undefined")m.style=m.inputStyle;m.keyboardFocusable=true;e.push(new CKEDITOR.ui.dialog.uiElement(b,m,q,"input",null,o));q.push(" ");new CKEDITOR.ui.dialog.uiElement(b,i,q,"label",null,{id:n,"for":o.id},j[0]);d.push(q.join(""))}new CKEDITOR.ui.dialog.hbox(b,e,d,h);return h.join("")});this._.children=e}},button:function(b,a,d){if(arguments.length){"function"==typeof a&&(a=a(b.getParentEditor()));i.call(this,a,{disabled:a.disabled||!1});CKEDITOR.event.implementOn(this);var e=this;b.on("load",function(){var a=
this.getElement();(function(){a.on("click",function(a){e.click();a.data.preventDefault()});a.on("keydown",function(a){a.data.getKeystroke()in{32:1}&&(e.click(),a.data.preventDefault())})})();a.unselectable()},this);var c=CKEDITOR.tools.extend({},a);delete c.style;var f=CKEDITOR.tools.getNextId()+"_label";CKEDITOR.ui.dialog.uiElement.call(this,b,c,d,"a",null,{style:a.style,href:"javascript:void(0)",title:a.label,hidefocus:"true","class":a["class"],role:"button","aria-labelledby":f},'<span id="'+f+
'" class="cke_dialog_ui_button">'+CKEDITOR.tools.htmlEncode(a.label)+"</span>")}},select:function(b,a,d){if(!(3>arguments.length)){var e=i.call(this,a);a.validate&&(this.validate=a.validate);e.inputId=CKEDITOR.tools.getNextId()+"_select";CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){var c=CKEDITOR.tools.extend({},a,{id:a.id?a.id+"_select":CKEDITOR.tools.getNextId()+"_select"},true),d=[],h=[],g={id:e.inputId,"class":"cke_dialog_ui_input_select","aria-labelledby":this._.labelId};d.push('<div class="cke_dialog_ui_input_',
a.type,'" role="presentation"');a.width&&d.push('style="width:'+a.width+'" ');d.push(">");if(a.size!=void 0)g.size=a.size;if(a.multiple!=void 0)g.multiple=a.multiple;p(c);for(var k=0,j;k<a.items.length&&(j=a.items[k]);k++)h.push('<option value="',CKEDITOR.tools.htmlEncode(j[1]!==void 0?j[1]:j[0]).replace(/"/g,"&quot;"),'" /> ',CKEDITOR.tools.htmlEncode(j[0]));if(typeof c.inputStyle!="undefined")c.style=c.inputStyle;e.select=new CKEDITOR.ui.dialog.uiElement(b,c,d,"select",null,g,h.join(""));d.push("</div>");
return d.join("")})}},file:function(b,a,d){if(!(3>arguments.length)){void 0===a["default"]&&(a["default"]="");var e=CKEDITOR.tools.extend(i.call(this,a),{definition:a,buttons:[]});a.validate&&(this.validate=a.validate);b.on("load",function(){CKEDITOR.document.getById(e.frameId).getParent().addClass("cke_dialog_ui_input_file")});CKEDITOR.ui.dialog.labeledElement.call(this,b,a,d,function(){e.frameId=CKEDITOR.tools.getNextId()+"_fileInput";var b=['<iframe frameborder="0" allowtransparency="0" class="cke_dialog_ui_input_file" role="presentation" id="',
e.frameId,'" title="',a.label,'" src="javascript:void('];b.push(CKEDITOR.env.ie?"(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"})()":"0");b.push(')"></iframe>');return b.join("")})}},fileButton:function(b,a,d){if(!(3>arguments.length)){i.call(this,a);var e=this;a.validate&&(this.validate=a.validate);var c=CKEDITOR.tools.extend({},a),f=c.onClick;c.className=(c.className?c.className+" ":"")+"cke_dialog_ui_button";c.onClick=function(c){var d=
a["for"];if(!f||f.call(this,c)!==false){b.getContentElement(d[0],d[1]).submit();this.disable()}};b.on("load",function(){b.getContentElement(a["for"][0],a["for"][1])._.buttons.push(e)});CKEDITOR.ui.dialog.button.call(this,b,c,d)}},html:function(){var b=/^\s*<[\w:]+\s+([^>]*)?>/,a=/^(\s*<[\w:]+(?:\s+[^>]*)?)((?:.|\r|\n)+)$/,d=/\/$/;return function(e,c,f){if(!(3>arguments.length)){var h=[],g=c.html;"<"!=g.charAt(0)&&(g="<span>"+g+"</span>");var k=c.focus;if(k){var j=this.focus;this.focus=function(){("function"==
typeof k?k:j).call(this);this.fire("focus")};c.isFocusable&&(this.isFocusable=this.isFocusable);this.keyboardFocusable=!0}CKEDITOR.ui.dialog.uiElement.call(this,e,c,h,"span",null,null,"");h=h.join("").match(b);g=g.match(a)||["","",""];d.test(g[1])&&(g[1]=g[1].slice(0,-1),g[2]="/"+g[2]);f.push([g[1]," ",h[1]||"",g[2]].join(""))}}}(),fieldset:function(b,a,d,e,c){var f=c.label;this._={children:a};CKEDITOR.ui.dialog.uiElement.call(this,b,c,e,"fieldset",null,null,function(){var a=[];f&&a.push("<legend"+
(c.labelStyle?' style="'+c.labelStyle+'"':"")+">"+f+"</legend>");for(var b=0;b<d.length;b++)a.push(d[b]);return a.join("")})}},!0);CKEDITOR.ui.dialog.html.prototype=new CKEDITOR.ui.dialog.uiElement;CKEDITOR.ui.dialog.labeledElement.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setLabel:function(b){var a=CKEDITOR.document.getById(this._.labelId);1>a.getChildCount()?(new CKEDITOR.dom.text(b,CKEDITOR.document)).appendTo(a):a.getChild(0).$.nodeValue=b;return this},getLabel:function(){var b=
CKEDITOR.document.getById(this._.labelId);return!b||1>b.getChildCount()?"":b.getChild(0).getText()},eventProcessors:o},!0);CKEDITOR.ui.dialog.button.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{click:function(){return!this._.disabled?this.fire("click",{dialog:this._.dialog}):!1},enable:function(){this._.disabled=!1;var b=this.getElement();b&&b.removeClass("cke_disabled")},disable:function(){this._.disabled=!0;this.getElement().addClass("cke_disabled")},isVisible:function(){return this.getElement().getFirst().isVisible()},
isEnabled:function(){return!this._.disabled},eventProcessors:CKEDITOR.tools.extend({},CKEDITOR.ui.dialog.uiElement.prototype.eventProcessors,{onClick:function(b,a){this.on("click",function(){a.apply(this,arguments)})}},!0),accessKeyUp:function(){this.click()},accessKeyDown:function(){this.focus()},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.textInput.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return CKEDITOR.document.getById(this._.inputId)},
focus:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&a.$.focus()},0)},select:function(){var b=this.selectParentTab();setTimeout(function(){var a=b.getInputElement();a&&(a.$.focus(),a.$.select())},0)},accessKeyUp:function(){this.select()},setValue:function(b){!b&&(b="");return CKEDITOR.ui.dialog.uiElement.prototype.setValue.apply(this,arguments)},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.textarea.prototype=new CKEDITOR.ui.dialog.textInput;CKEDITOR.ui.dialog.select.prototype=
CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,{getInputElement:function(){return this._.select.getElement()},add:function(b,a,d){var e=new CKEDITOR.dom.element("option",this.getDialog().getParentEditor().document),c=this.getInputElement().$;e.$.text=b;e.$.value=void 0===a||null===a?b:a;void 0===d||null===d?CKEDITOR.env.ie?c.add(e.$):c.add(e.$,null):c.add(e.$,d);return this},remove:function(b){this.getInputElement().$.remove(b);return this},clear:function(){for(var b=this.getInputElement().$;0<
b.length;)b.remove(0);return this},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.checkbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getInputElement:function(){return this._.checkbox.getElement()},setValue:function(b,a){this.getInputElement().$.checked=b;!a&&this.fire("change",{value:b})},getValue:function(){return this.getInputElement().$.checked},accessKeyUp:function(){this.setValue(!this.getValue())},eventProcessors:{onChange:function(b,a){if(!CKEDITOR.env.ie||8<CKEDITOR.env.version)return o.onChange.apply(this,
arguments);b.on("load",function(){var a=this._.checkbox.getElement();a.on("propertychange",function(b){b=b.data.$;"checked"==b.propertyName&&this.fire("change",{value:a.$.checked})},this)},this);this.on("change",a);return null}},keyboardFocusable:!0},n,!0);CKEDITOR.ui.dialog.radio.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{setValue:function(b,a){for(var d=this._.children,e,c=0;c<d.length&&(e=d[c]);c++)e.getElement().$.checked=e.getValue()==b;!a&&this.fire("change",{value:b})},
getValue:function(){for(var b=this._.children,a=0;a<b.length;a++)if(b[a].getElement().$.checked)return b[a].getValue();return null},accessKeyUp:function(){var b=this._.children,a;for(a=0;a<b.length;a++)if(b[a].getElement().$.checked){b[a].getElement().focus();return}b[0].getElement().focus()},eventProcessors:{onChange:function(b,a){if(CKEDITOR.env.ie)b.on("load",function(){for(var a=this._.children,b=this,c=0;c<a.length;c++)a[c].getElement().on("propertychange",function(a){a=a.data.$;"checked"==a.propertyName&&
this.$.checked&&b.fire("change",{value:this.getAttribute("value")})})},this),this.on("change",a);else return o.onChange.apply(this,arguments);return null}}},n,!0);CKEDITOR.ui.dialog.file.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.labeledElement,n,{getInputElement:function(){var b=CKEDITOR.document.getById(this._.frameId).getFrameDocument();return 0<b.$.forms.length?new CKEDITOR.dom.element(b.$.forms[0].elements[0]):this.getElement()},submit:function(){this.getInputElement().getParent().$.submit();
return this},getAction:function(){return this.getInputElement().getParent().$.action},registerEvents:function(b){var a=/^on([A-Z]\w+)/,d,e=function(a,b,c,d){a.on("formLoaded",function(){a.getInputElement().on(c,d,a)})},c;for(c in b)if(d=c.match(a))this.eventProcessors[c]?this.eventProcessors[c].call(this,this._.dialog,b[c]):e(this,this._.dialog,d[1].toLowerCase(),b[c]);return this},reset:function(){function b(){d.$.open();var b="";e.size&&(b=e.size-(CKEDITOR.env.ie?7:0));var i=a.frameId+"_input";
d.$.write(['<html dir="'+g+'" lang="'+k+'"><head><title></title></head><body style="margin: 0; overflow: hidden; background: transparent;">','<form enctype="multipart/form-data" method="POST" dir="'+g+'" lang="'+k+'" action="',CKEDITOR.tools.htmlEncode(e.action),'"><label id="',a.labelId,'" for="',i,'" style="display:none">',CKEDITOR.tools.htmlEncode(e.label),'</label><input style="width:100%" id="',i,'" aria-labelledby="',a.labelId,'" type="file" name="',CKEDITOR.tools.htmlEncode(e.id||"cke_upload"),
'" size="',CKEDITOR.tools.htmlEncode(0<b?b:""),'" /></form></body></html><script>',CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+")();":"","window.parent.CKEDITOR.tools.callFunction("+f+");","window.onbeforeunload = function() {window.parent.CKEDITOR.tools.callFunction("+h+")}","<\/script>"].join(""));d.$.close();for(b=0;b<c.length;b++)c[b].enable()}var a=this._,d=CKEDITOR.document.getById(a.frameId).getFrameDocument(),e=a.definition,c=a.buttons,f=this.formLoadedNumber,h=this.formUnloadNumber,g=a.dialog._.editor.lang.dir,
k=a.dialog._.editor.langCode;f||(f=this.formLoadedNumber=CKEDITOR.tools.addFunction(function(){this.fire("formLoaded")},this),h=this.formUnloadNumber=CKEDITOR.tools.addFunction(function(){this.getInputElement().clearCustomData()},this),this.getDialog()._.editor.on("destroy",function(){CKEDITOR.tools.removeFunction(f);CKEDITOR.tools.removeFunction(h)}));CKEDITOR.env.gecko?setTimeout(b,500):b()},getValue:function(){return this.getInputElement().$.value||""},setInitValue:function(){this._.initValue=
""},eventProcessors:{onChange:function(b,a){this._.domOnChangeRegistered||(this.on("formLoaded",function(){this.getInputElement().on("change",function(){this.fire("change",{value:this.getValue()})},this)},this),this._.domOnChangeRegistered=!0);this.on("change",a)}},keyboardFocusable:!0},!0);CKEDITOR.ui.dialog.fileButton.prototype=new CKEDITOR.ui.dialog.button;CKEDITOR.ui.dialog.fieldset.prototype=CKEDITOR.tools.clone(CKEDITOR.ui.dialog.hbox.prototype);CKEDITOR.dialog.addUIElement("text",r);CKEDITOR.dialog.addUIElement("password",
r);CKEDITOR.dialog.addUIElement("textarea",l);CKEDITOR.dialog.addUIElement("checkbox",l);CKEDITOR.dialog.addUIElement("radio",l);CKEDITOR.dialog.addUIElement("button",l);CKEDITOR.dialog.addUIElement("select",l);CKEDITOR.dialog.addUIElement("file",l);CKEDITOR.dialog.addUIElement("fileButton",l);CKEDITOR.dialog.addUIElement("html",l);CKEDITOR.dialog.addUIElement("fieldset",{build:function(b,a,d){for(var e=a.children,c,f=[],h=[],g=0;g<e.length&&(c=e[g]);g++){var i=[];f.push(i);h.push(CKEDITOR.dialog._.uiElementBuilders[c.type].build(b,
c,i))}return new CKEDITOR.ui.dialog[a.type](b,h,f,d,a)}})}});CKEDITOR.DIALOG_RESIZE_NONE=0;CKEDITOR.DIALOG_RESIZE_WIDTH=1;CKEDITOR.DIALOG_RESIZE_HEIGHT=2;CKEDITOR.DIALOG_RESIZE_BOTH=3;
(function(){function t(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId)+a,c=b-1;c>b-a;c--)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function u(){for(var a=this._.tabIdList.length,b=CKEDITOR.tools.indexOf(this._.tabIdList,this._.currentTabId),c=b+1;c<b+a;c++)if(this._.tabs[this._.tabIdList[c%a]][0].$.offsetHeight)return this._.tabIdList[c%a];return null}function G(a,b){for(var c=a.$.getElementsByTagName("input"),
e=0,d=c.length;e<d;e++){var g=new CKEDITOR.dom.element(c[e]);"text"==g.getAttribute("type").toLowerCase()&&(b?(g.setAttribute("value",g.getCustomData("fake_value")||""),g.removeCustomData("fake_value")):(g.setCustomData("fake_value",g.getAttribute("value")),g.setAttribute("value","")))}}function P(a,b){var c=this.getInputElement();c&&(a?c.removeAttribute("aria-invalid"):c.setAttribute("aria-invalid",!0));a||(this.select?this.select():this.focus());b&&alert(b);this.fire("validated",{valid:a,msg:b})}
function Q(){var a=this.getInputElement();a&&a.removeAttribute("aria-invalid")}function R(a){var a=CKEDITOR.dom.element.createFromHtml(CKEDITOR.addTemplate("dialog",S).output({id:CKEDITOR.tools.getNextNumber(),editorId:a.id,langDir:a.lang.dir,langCode:a.langCode,editorDialogClass:"cke_editor_"+a.name.replace(/\./g,"\\.")+"_dialog",closeTitle:a.lang.common.close,hidpi:CKEDITOR.env.hidpi?"cke_hidpi":""})),b=a.getChild([0,0,0,0,0]),c=b.getChild(0),e=b.getChild(1);if(CKEDITOR.env.ie&&!CKEDITOR.env.ie6Compat){var d=
"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())";CKEDITOR.dom.element.createFromHtml('<iframe frameBorder="0" class="cke_iframe_shim" src="'+d+'" tabIndex="-1"></iframe>').appendTo(b.getParent())}c.unselectable();e.unselectable();return{element:a,parts:{dialog:a.getChild(0),title:c,close:e,tabs:b.getChild(2),contents:b.getChild([3,0,0,0]),footer:b.getChild([3,0,1,0])}}}function H(a,b,c){this.element=b;this.focusIndex=c;this.tabIndex=
0;this.isFocusable=function(){return!b.getAttribute("disabled")&&b.isVisible()};this.focus=function(){a._.currentFocusIndex=this.focusIndex;this.element.focus()};b.on("keydown",function(a){a.data.getKeystroke()in{32:1,13:1}&&this.fire("click")});b.on("focus",function(){this.fire("mouseover")});b.on("blur",function(){this.fire("mouseout")})}function T(a){function b(){a.layout()}var c=CKEDITOR.document.getWindow();c.on("resize",b);a.on("hide",function(){c.removeListener("resize",b)})}function I(a,b){this._=
{dialog:a};CKEDITOR.tools.extend(this,b)}function U(a){function b(b){var c=a.getSize(),h=CKEDITOR.document.getWindow().getViewPaneSize(),o=b.data.$.screenX,j=b.data.$.screenY,n=o-e.x,m=j-e.y;e={x:o,y:j};d.x+=n;d.y+=m;a.move(d.x+i[3]<f?-i[3]:d.x-i[1]>h.width-c.width-f?h.width-c.width+("rtl"==g.lang.dir?0:i[1]):d.x,d.y+i[0]<f?-i[0]:d.y-i[2]>h.height-c.height-f?h.height-c.height+i[2]:d.y,1);b.data.preventDefault()}function c(){CKEDITOR.document.removeListener("mousemove",b);CKEDITOR.document.removeListener("mouseup",
c);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mousemove",b);a.removeListener("mouseup",c)}}var e=null,d=null;a.getElement().getFirst();var g=a.getParentEditor(),f=g.config.dialog_magnetDistance,i=CKEDITOR.skin.margins||[0,0,0,0];"undefined"==typeof f&&(f=20);a.parts.title.on("mousedown",function(f){e={x:f.data.$.screenX,y:f.data.$.screenY};CKEDITOR.document.on("mousemove",b);CKEDITOR.document.on("mouseup",c);d=a.getPosition();if(CKEDITOR.env.ie6Compat){var k=
q.getChild(0).getFrameDocument();k.on("mousemove",b);k.on("mouseup",c)}f.data.preventDefault()},a)}function V(a){var b,c;function e(d){var e="rtl"==i.lang.dir,j=o.width,C=o.height,D=j+(d.data.$.screenX-b)*(e?-1:1)*(a._.moved?1:2),n=C+(d.data.$.screenY-c)*(a._.moved?1:2),x=a._.element.getFirst(),x=e&&x.getComputedStyle("right"),y=a.getPosition();y.y+n>h.height&&(n=h.height-y.y);if((e?x:y.x)+D>h.width)D=h.width-(e?x:y.x);if(f==CKEDITOR.DIALOG_RESIZE_WIDTH||f==CKEDITOR.DIALOG_RESIZE_BOTH)j=Math.max(g.minWidth||
0,D-l);if(f==CKEDITOR.DIALOG_RESIZE_HEIGHT||f==CKEDITOR.DIALOG_RESIZE_BOTH)C=Math.max(g.minHeight||0,n-k);a.resize(j,C);a._.moved||a.layout();d.data.preventDefault()}function d(){CKEDITOR.document.removeListener("mouseup",d);CKEDITOR.document.removeListener("mousemove",e);j&&(j.remove(),j=null);if(CKEDITOR.env.ie6Compat){var a=q.getChild(0).getFrameDocument();a.removeListener("mouseup",d);a.removeListener("mousemove",e)}}var g=a.definition,f=g.resizable;if(f!=CKEDITOR.DIALOG_RESIZE_NONE){var i=a.getParentEditor(),
l,k,h,o,j,n=CKEDITOR.tools.addFunction(function(f){o=a.getSize();var g=a.parts.contents;g.$.getElementsByTagName("iframe").length&&(j=CKEDITOR.dom.element.createFromHtml('<div class="cke_dialog_resize_cover" style="height: 100%; position: absolute; width: 100%;"></div>'),g.append(j));k=o.height-a.parts.contents.getSize("height",!(CKEDITOR.env.gecko||CKEDITOR.env.opera||CKEDITOR.env.ie&&CKEDITOR.env.quirks));l=o.width-a.parts.contents.getSize("width",1);b=f.screenX;c=f.screenY;h=CKEDITOR.document.getWindow().getViewPaneSize();
CKEDITOR.document.on("mousemove",e);CKEDITOR.document.on("mouseup",d);CKEDITOR.env.ie6Compat&&(g=q.getChild(0).getFrameDocument(),g.on("mousemove",e),g.on("mouseup",d));f.preventDefault&&f.preventDefault()});a.on("load",function(){var b="";f==CKEDITOR.DIALOG_RESIZE_WIDTH?b=" cke_resizer_horizontal":f==CKEDITOR.DIALOG_RESIZE_HEIGHT&&(b=" cke_resizer_vertical");b=CKEDITOR.dom.element.createFromHtml('<div class="cke_resizer'+b+" cke_resizer_"+i.lang.dir+'" title="'+CKEDITOR.tools.htmlEncode(i.lang.common.resize)+
'" onmousedown="CKEDITOR.tools.callFunction('+n+', event )">'+("ltr"==i.lang.dir?"◢":"◣")+"</div>");a.parts.footer.append(b,1)});i.on("destroy",function(){CKEDITOR.tools.removeFunction(n)})}}function E(a){a.data.preventDefault(1)}function J(a){var b=CKEDITOR.document.getWindow(),c=a.config,e=c.dialog_backgroundCoverColor||"white",d=c.dialog_backgroundCoverOpacity,g=c.baseFloatZIndex,c=CKEDITOR.tools.genKey(e,d,g),f=w[c];f?f.show():(g=['<div tabIndex="-1" style="position: ',CKEDITOR.env.ie6Compat?
"absolute":"fixed","; z-index: ",g,"; top: 0px; left: 0px; ",!CKEDITOR.env.ie6Compat?"background-color: "+e:"",'" class="cke_dialog_background_cover">'],CKEDITOR.env.ie6Compat&&(e="<html><body style=\\'background-color:"+e+";\\'></body></html>",g.push('<iframe hidefocus="true" frameborder="0" id="cke_dialog_background_iframe" src="javascript:'),g.push("void((function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.write( '"+e+"' );document.close();")+"})())"),g.push('" style="position:absolute;left:0;top:0;width:100%;height: 100%;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=0)"></iframe>')),
g.push("</div>"),f=CKEDITOR.dom.element.createFromHtml(g.join("")),f.setOpacity(void 0!=d?d:0.5),f.on("keydown",E),f.on("keypress",E),f.on("keyup",E),f.appendTo(CKEDITOR.document.getBody()),w[c]=f);a.focusManager.add(f);q=f;var a=function(){var a=b.getViewPaneSize();f.setStyles({width:a.width+"px",height:a.height+"px"})},i=function(){var a=b.getScrollPosition(),c=CKEDITOR.dialog._.currentTop;f.setStyles({left:a.x+"px",top:a.y+"px"});if(c){do{a=c.getPosition();c.move(a.x,a.y)}while(c=c._.parentDialog)
}};F=a;b.on("resize",a);a();(!CKEDITOR.env.mac||!CKEDITOR.env.webkit)&&f.focus();if(CKEDITOR.env.ie6Compat){var l=function(){i();arguments.callee.prevScrollHandler.apply(this,arguments)};b.$.setTimeout(function(){l.prevScrollHandler=window.onscroll||function(){};window.onscroll=l},0);i()}}function K(a){q&&(a.focusManager.remove(q),a=CKEDITOR.document.getWindow(),q.hide(),a.removeListener("resize",F),CKEDITOR.env.ie6Compat&&a.$.setTimeout(function(){window.onscroll=window.onscroll&&window.onscroll.prevScrollHandler||
null},0),F=null)}var r=CKEDITOR.tools.cssLength,S='<div class="cke_reset_all {editorId} {editorDialogClass} {hidpi}" dir="{langDir}" lang="{langCode}" role="dialog" aria-labelledby="cke_dialog_title_{id}"><table class="cke_dialog '+CKEDITOR.env.cssClass+' cke_{langDir}" style="position:absolute" role="presentation"><tr><td role="presentation"><div class="cke_dialog_body" role="presentation"><div id="cke_dialog_title_{id}" class="cke_dialog_title" role="presentation"></div><a id="cke_dialog_close_button_{id}" class="cke_dialog_close_button" href="javascript:void(0)" title="{closeTitle}" role="button"><span class="cke_label">X</span></a><div id="cke_dialog_tabs_{id}" class="cke_dialog_tabs" role="tablist"></div><table class="cke_dialog_contents" role="presentation"><tr><td id="cke_dialog_contents_{id}" class="cke_dialog_contents_body" role="presentation"></td></tr><tr><td id="cke_dialog_footer_{id}" class="cke_dialog_footer" role="presentation"></td></tr></table></div></td></tr></table></div>';
CKEDITOR.dialog=function(a,b){function c(){var a=m._.focusList;a.sort(function(a,b){return a.tabIndex!=b.tabIndex?b.tabIndex-a.tabIndex:a.focusIndex-b.focusIndex});for(var b=a.length,c=0;c<b;c++)a[c].focusIndex=c}function e(a){var b=m._.focusList,a=a||0;if(!(1>b.length)){var c=m._.currentFocusIndex;try{b[c].getInputElement().$.blur()}catch(f){}for(var d=c=(c+a+b.length)%b.length;a&&!b[d].isFocusable()&&!(d=(d+a+b.length)%b.length,d==c););b[d].focus();"text"==b[d].type&&b[d].select()}}function d(b){if(m==
CKEDITOR.dialog._.currentTop){var c=b.data.getKeystroke(),d="rtl"==a.lang.dir;o=j=0;if(9==c||c==CKEDITOR.SHIFT+9)c=c==CKEDITOR.SHIFT+9,m._.tabBarMode?(c=c?t.call(m):u.call(m),m.selectPage(c),m._.tabs[c][0].focus()):e(c?-1:1),o=1;else if(c==CKEDITOR.ALT+121&&!m._.tabBarMode&&1<m.getPageCount())m._.tabBarMode=!0,m._.tabs[m._.currentTabId][0].focus(),o=1;else if((37==c||39==c)&&m._.tabBarMode)c=c==(d?39:37)?t.call(m):u.call(m),m.selectPage(c),m._.tabs[c][0].focus(),o=1;else if((13==c||32==c)&&m._.tabBarMode)this.selectPage(this._.currentTabId),
this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1),o=1;else if(13==c){c=b.data.getTarget();if(!c.is("a","button","select","textarea")&&(!c.is("input")||"button"!=c.$.type))(c=this.getButton("ok"))&&CKEDITOR.tools.setTimeout(c.click,0,c),o=1;j=1}else if(27==c)(c=this.getButton("cancel"))?CKEDITOR.tools.setTimeout(c.click,0,c):!1!==this.fire("cancel",{hide:!0}).hide&&this.hide(),j=1;else return;g(b)}}function g(a){o?a.data.preventDefault(1):j&&a.data.stopPropagation()}var f=CKEDITOR.dialog._.dialogDefinitions[b],
i=CKEDITOR.tools.clone(W),l=a.config.dialog_buttonsOrder||"OS",k=a.lang.dir,h={},o,j;("OS"==l&&CKEDITOR.env.mac||"rtl"==l&&"ltr"==k||"ltr"==l&&"rtl"==k)&&i.buttons.reverse();f=CKEDITOR.tools.extend(f(a),i);f=CKEDITOR.tools.clone(f);f=new L(this,f);i=R(a);this._={editor:a,element:i.element,name:b,contentSize:{width:0,height:0},size:{width:0,height:0},contents:{},buttons:{},accessKeyMap:{},tabs:{},tabIdList:[],currentTabId:null,currentTabIndex:null,pageCount:0,lastTab:null,tabBarMode:!1,focusList:[],
currentFocusIndex:0,hasFocus:!1};this.parts=i.parts;CKEDITOR.tools.setTimeout(function(){a.fire("ariaWidget",this.parts.contents)},0,this);i={position:CKEDITOR.env.ie6Compat?"absolute":"fixed",top:0,visibility:"hidden"};i["rtl"==k?"right":"left"]=0;this.parts.dialog.setStyles(i);CKEDITOR.event.call(this);this.definition=f=CKEDITOR.fire("dialogDefinition",{name:b,definition:f},a).definition;if(!("removeDialogTabs"in a._)&&a.config.removeDialogTabs){i=a.config.removeDialogTabs.split(";");for(k=0;k<
i.length;k++)if(l=i[k].split(":"),2==l.length){var n=l[0];h[n]||(h[n]=[]);h[n].push(l[1])}a._.removeDialogTabs=h}if(a._.removeDialogTabs&&(h=a._.removeDialogTabs[b]))for(k=0;k<h.length;k++)f.removeContents(h[k]);if(f.onLoad)this.on("load",f.onLoad);if(f.onShow)this.on("show",f.onShow);if(f.onHide)this.on("hide",f.onHide);if(f.onOk)this.on("ok",function(b){a.fire("saveSnapshot");setTimeout(function(){a.fire("saveSnapshot")},0);!1===f.onOk.call(this,b)&&(b.data.hide=!1)});if(f.onCancel)this.on("cancel",
function(a){!1===f.onCancel.call(this,a)&&(a.data.hide=!1)});var m=this,p=function(a){var b=m._.contents,c=!1,d;for(d in b)for(var f in b[d])if(c=a.call(this,b[d][f]))return};this.on("ok",function(a){p(function(b){if(b.validate){var c=b.validate(this),d="string"==typeof c||!1===c;d&&(a.data.hide=!1,a.stop());P.call(b,!d,"string"==typeof c?c:void 0);return d}})},this,null,0);this.on("cancel",function(b){p(function(c){if(c.isChanged())return!a.config.dialog_noConfirmCancel&&!confirm(a.lang.common.confirmCancel)&&
(b.data.hide=!1),!0})},this,null,0);this.parts.close.on("click",function(a){!1!==this.fire("cancel",{hide:!0}).hide&&this.hide();a.data.preventDefault()},this);this.changeFocus=e;var v=this._.element;a.focusManager.add(v,1);this.on("show",function(){v.on("keydown",d,this);if(CKEDITOR.env.opera||CKEDITOR.env.gecko)v.on("keypress",g,this)});this.on("hide",function(){v.removeListener("keydown",d);(CKEDITOR.env.opera||CKEDITOR.env.gecko)&&v.removeListener("keypress",g);p(function(a){Q.apply(a)})});this.on("iframeAdded",
function(a){(new CKEDITOR.dom.document(a.data.iframe.$.contentWindow.document)).on("keydown",d,this,null,0)});this.on("show",function(){c();if(a.config.dialog_startupFocusTab&&1<m._.pageCount)m._.tabBarMode=!0,m._.tabs[m._.currentTabId][0].focus();else if(!this._.hasFocus)if(this._.currentFocusIndex=-1,f.onFocus){var b=f.onFocus.call(this);b&&b.focus()}else e(1)},this,null,4294967295);if(CKEDITOR.env.ie6Compat)this.on("load",function(){var a=this.getElement(),b=a.getFirst();b.remove();b.appendTo(a)},
this);U(this);V(this);(new CKEDITOR.dom.text(f.title,CKEDITOR.document)).appendTo(this.parts.title);for(k=0;k<f.contents.length;k++)(h=f.contents[k])&&this.addPage(h);this.parts.tabs.on("click",function(a){var b=a.data.getTarget();b.hasClass("cke_dialog_tab")&&(b=b.$.id,this.selectPage(b.substring(4,b.lastIndexOf("_"))),this._.tabBarMode&&(this._.tabBarMode=!1,this._.currentFocusIndex=-1,e(1)),a.data.preventDefault())},this);k=[];h=CKEDITOR.dialog._.uiElementBuilders.hbox.build(this,{type:"hbox",
className:"cke_dialog_footer_buttons",widths:[],children:f.buttons},k).getChild();this.parts.footer.setHtml(k.join(""));for(k=0;k<h.length;k++)this._.buttons[h[k].id]=h[k]};CKEDITOR.dialog.prototype={destroy:function(){this.hide();this._.element.remove()},resize:function(){return function(a,b){if(!this._.contentSize||!(this._.contentSize.width==a&&this._.contentSize.height==b))CKEDITOR.dialog.fire("resize",{dialog:this,width:a,height:b},this._.editor),this.fire("resize",{width:a,height:b},this._.editor),
this.parts.contents.setStyles({width:a+"px",height:b+"px"}),"rtl"==this._.editor.lang.dir&&this._.position&&(this._.position.x=CKEDITOR.document.getWindow().getViewPaneSize().width-this._.contentSize.width-parseInt(this._.element.getFirst().getStyle("right"),10)),this._.contentSize={width:a,height:b}}}(),getSize:function(){var a=this._.element.getFirst();return{width:a.$.offsetWidth||0,height:a.$.offsetHeight||0}},move:function(a,b,c){var e=this._.element.getFirst(),d="rtl"==this._.editor.lang.dir,
g="fixed"==e.getComputedStyle("position");CKEDITOR.env.ie&&e.setStyle("zoom","100%");if(!g||!this._.position||!(this._.position.x==a&&this._.position.y==b))this._.position={x:a,y:b},g||(g=CKEDITOR.document.getWindow().getScrollPosition(),a+=g.x,b+=g.y),d&&(g=this.getSize(),a=CKEDITOR.document.getWindow().getViewPaneSize().width-g.width-a),b={top:(0<b?b:0)+"px"},b[d?"right":"left"]=(0<a?a:0)+"px",e.setStyles(b),c&&(this._.moved=1)},getPosition:function(){return CKEDITOR.tools.extend({},this._.position)},
show:function(){var a=this._.element,b=this.definition;!a.getParent()||!a.getParent().equals(CKEDITOR.document.getBody())?a.appendTo(CKEDITOR.document.getBody()):a.setStyle("display","block");if(CKEDITOR.env.gecko&&10900>CKEDITOR.env.version){var c=this.parts.dialog;c.setStyle("position","absolute");setTimeout(function(){c.setStyle("position","fixed")},0)}this.resize(this._.contentSize&&this._.contentSize.width||b.width||b.minWidth,this._.contentSize&&this._.contentSize.height||b.height||b.minHeight);
this.reset();this.selectPage(this.definition.contents[0].id);null===CKEDITOR.dialog._.currentZIndex&&(CKEDITOR.dialog._.currentZIndex=this._.editor.config.baseFloatZIndex);this._.element.getFirst().setStyle("z-index",CKEDITOR.dialog._.currentZIndex+=10);null===CKEDITOR.dialog._.currentTop?(CKEDITOR.dialog._.currentTop=this,this._.parentDialog=null,J(this._.editor)):(this._.parentDialog=CKEDITOR.dialog._.currentTop,this._.parentDialog.getElement().getFirst().$.style.zIndex-=Math.floor(this._.editor.config.baseFloatZIndex/
2),CKEDITOR.dialog._.currentTop=this);a.on("keydown",M);a.on(CKEDITOR.env.opera?"keypress":"keyup",N);this._.hasFocus=!1;for(var e in b.contents)if(b.contents[e]){var a=b.contents[e],d=this._.tabs[a.id],g=a.requiredContent,f=0;if(d){for(var i in this._.contents[a.id]){var l=this._.contents[a.id][i];"hbox"==l.type||("vbox"==l.type||!l.getInputElement())||(l.requiredContent&&!this._.editor.activeFilter.check(l.requiredContent)?l.disable():(l.enable(),f++))}!f||g&&!this._.editor.activeFilter.check(g)?
d[0].addClass("cke_dialog_tab_disabled"):d[0].removeClass("cke_dialog_tab_disabled")}}CKEDITOR.tools.setTimeout(function(){this.layout();T(this);this.parts.dialog.setStyle("visibility","");this.fireOnce("load",{});CKEDITOR.ui.fire("ready",this);this.fire("show",{});this._.editor.fire("dialogShow",this);this._.parentDialog||this._.editor.focusManager.lock();this.foreach(function(a){a.setInitValue&&a.setInitValue()})},100,this)},layout:function(){var a=this.parts.dialog,b=this.getSize(),c=CKEDITOR.document.getWindow().getViewPaneSize(),
e=(c.width-b.width)/2,d=(c.height-b.height)/2;CKEDITOR.env.ie6Compat||(b.height+(0<d?d:0)>c.height||b.width+(0<e?e:0)>c.width?a.setStyle("position","absolute"):a.setStyle("position","fixed"));this.move(this._.moved?this._.position.x:e,this._.moved?this._.position.y:d)},foreach:function(a){for(var b in this._.contents)for(var c in this._.contents[b])a.call(this,this._.contents[b][c]);return this},reset:function(){var a=function(a){a.reset&&a.reset(1)};return function(){this.foreach(a);return this}}(),
setupContent:function(){var a=arguments;this.foreach(function(b){b.setup&&b.setup.apply(b,a)})},commitContent:function(){var a=arguments;this.foreach(function(b){CKEDITOR.env.ie&&this._.currentFocusIndex==b.focusIndex&&b.getInputElement().$.blur();b.commit&&b.commit.apply(b,a)})},hide:function(){if(this.parts.dialog.isVisible()){this.fire("hide",{});this._.editor.fire("dialogHide",this);this.selectPage(this._.tabIdList[0]);var a=this._.element;a.setStyle("display","none");this.parts.dialog.setStyle("visibility",
"hidden");for(X(this);CKEDITOR.dialog._.currentTop!=this;)CKEDITOR.dialog._.currentTop.hide();if(this._.parentDialog){var b=this._.parentDialog.getElement().getFirst();b.setStyle("z-index",parseInt(b.$.style.zIndex,10)+Math.floor(this._.editor.config.baseFloatZIndex/2))}else K(this._.editor);if(CKEDITOR.dialog._.currentTop=this._.parentDialog)CKEDITOR.dialog._.currentZIndex-=10;else{CKEDITOR.dialog._.currentZIndex=null;a.removeListener("keydown",M);a.removeListener(CKEDITOR.env.opera?"keypress":"keyup",
N);var c=this._.editor;c.focus();setTimeout(function(){c.focusManager.unlock()},0)}delete this._.parentDialog;this.foreach(function(a){a.resetInitValue&&a.resetInitValue()})}},addPage:function(a){if(!a.requiredContent||this._.editor.filter.check(a.requiredContent)){for(var b=[],c=a.label?' title="'+CKEDITOR.tools.htmlEncode(a.label)+'"':"",e=CKEDITOR.dialog._.uiElementBuilders.vbox.build(this,{type:"vbox",className:"cke_dialog_page_contents",children:a.elements,expand:!!a.expand,padding:a.padding,
style:a.style||"width: 100%;"},b),d=this._.contents[a.id]={},g=e.getChild(),f=0;e=g.shift();)!e.notAllowed&&("hbox"!=e.type&&"vbox"!=e.type)&&f++,d[e.id]=e,"function"==typeof e.getChild&&g.push.apply(g,e.getChild());f||(a.hidden=!0);b=CKEDITOR.dom.element.createFromHtml(b.join(""));b.setAttribute("role","tabpanel");e=CKEDITOR.env;d="cke_"+a.id+"_"+CKEDITOR.tools.getNextNumber();c=CKEDITOR.dom.element.createFromHtml(['<a class="cke_dialog_tab"',0<this._.pageCount?" cke_last":"cke_first",c,a.hidden?
' style="display:none"':"",' id="',d,'"',e.gecko&&10900<=e.version&&!e.hc?"":' href="javascript:void(0)"',' tabIndex="-1" hidefocus="true" role="tab">',a.label,"</a>"].join(""));b.setAttribute("aria-labelledby",d);this._.tabs[a.id]=[c,b];this._.tabIdList.push(a.id);!a.hidden&&this._.pageCount++;this._.lastTab=c;this.updateStyle();b.setAttribute("name",a.id);b.appendTo(this.parts.contents);c.unselectable();this.parts.tabs.append(c);a.accessKey&&(O(this,this,"CTRL+"+a.accessKey,Y,Z),this._.accessKeyMap["CTRL+"+
a.accessKey]=a.id)}},selectPage:function(a){if(this._.currentTabId!=a&&!this._.tabs[a][0].hasClass("cke_dialog_tab_disabled")&&!1!==this.fire("selectPage",{page:a,currentPage:this._.currentTabId})){for(var b in this._.tabs){var c=this._.tabs[b][0],e=this._.tabs[b][1];b!=a&&(c.removeClass("cke_dialog_tab_selected"),e.hide());e.setAttribute("aria-hidden",b!=a)}var d=this._.tabs[a];d[0].addClass("cke_dialog_tab_selected");CKEDITOR.env.ie6Compat||CKEDITOR.env.ie7Compat?(G(d[1]),d[1].show(),setTimeout(function(){G(d[1],
1)},0)):d[1].show();this._.currentTabId=a;this._.currentTabIndex=CKEDITOR.tools.indexOf(this._.tabIdList,a)}},updateStyle:function(){this.parts.dialog[(1===this._.pageCount?"add":"remove")+"Class"]("cke_single_page")},hidePage:function(a){var b=this._.tabs[a]&&this._.tabs[a][0];b&&(1!=this._.pageCount&&b.isVisible())&&(a==this._.currentTabId&&this.selectPage(t.call(this)),b.hide(),this._.pageCount--,this.updateStyle())},showPage:function(a){if(a=this._.tabs[a]&&this._.tabs[a][0])a.show(),this._.pageCount++,
this.updateStyle()},getElement:function(){return this._.element},getName:function(){return this._.name},getContentElement:function(a,b){var c=this._.contents[a];return c&&c[b]},getValueOf:function(a,b){return this.getContentElement(a,b).getValue()},setValueOf:function(a,b,c){return this.getContentElement(a,b).setValue(c)},getButton:function(a){return this._.buttons[a]},click:function(a){return this._.buttons[a].click()},disableButton:function(a){return this._.buttons[a].disable()},enableButton:function(a){return this._.buttons[a].enable()},
getPageCount:function(){return this._.pageCount},getParentEditor:function(){return this._.editor},getSelectedElement:function(){return this.getParentEditor().getSelection().getSelectedElement()},addFocusable:function(a,b){if("undefined"==typeof b)b=this._.focusList.length,this._.focusList.push(new H(this,a,b));else{this._.focusList.splice(b,0,new H(this,a,b));for(var c=b+1;c<this._.focusList.length;c++)this._.focusList[c].focusIndex++}}};CKEDITOR.tools.extend(CKEDITOR.dialog,{add:function(a,b){if(!this._.dialogDefinitions[a]||
"function"==typeof b)this._.dialogDefinitions[a]=b},exists:function(a){return!!this._.dialogDefinitions[a]},getCurrent:function(){return CKEDITOR.dialog._.currentTop},isTabEnabled:function(a,b,c){a=a.config.removeDialogTabs;return!(a&&a.match(RegExp("(?:^|;)"+b+":"+c+"(?:$|;)","i")))},okButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"ok",type:"button",label:a.lang.common.ok,"class":"cke_dialog_ui_button_ok",onClick:function(a){a=a.data.dialog;!1!==a.fire("ok",{hide:!0}).hide&&
a.hide()}},c,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,b)},{type:"button"},!0)};return a}(),cancelButton:function(){var a=function(a,c){c=c||{};return CKEDITOR.tools.extend({id:"cancel",type:"button",label:a.lang.common.cancel,"class":"cke_dialog_ui_button_cancel",onClick:function(a){a=a.data.dialog;!1!==a.fire("cancel",{hide:!0}).hide&&a.hide()}},c,!0)};a.type="button";a.override=function(b){return CKEDITOR.tools.extend(function(c){return a(c,
b)},{type:"button"},!0)};return a}(),addUIElement:function(a,b){this._.uiElementBuilders[a]=b}});CKEDITOR.dialog._={uiElementBuilders:{},dialogDefinitions:{},currentTop:null,currentZIndex:null};CKEDITOR.event.implementOn(CKEDITOR.dialog);CKEDITOR.event.implementOn(CKEDITOR.dialog.prototype);var W={resizable:CKEDITOR.DIALOG_RESIZE_BOTH,minWidth:600,minHeight:400,buttons:[CKEDITOR.dialog.okButton,CKEDITOR.dialog.cancelButton]},z=function(a,b,c){for(var e=0,d;d=a[e];e++)if(d.id==b||c&&d[c]&&(d=z(d[c],
b,c)))return d;return null},A=function(a,b,c,e,d){if(c){for(var g=0,f;f=a[g];g++){if(f.id==c)return a.splice(g,0,b),b;if(e&&f[e]&&(f=A(f[e],b,c,e,!0)))return f}if(d)return null}a.push(b);return b},B=function(a,b,c){for(var e=0,d;d=a[e];e++){if(d.id==b)return a.splice(e,1);if(c&&d[c]&&(d=B(d[c],b,c)))return d}return null},L=function(a,b){this.dialog=a;for(var c=b.contents,e=0,d;d=c[e];e++)c[e]=d&&new I(a,d);CKEDITOR.tools.extend(this,b)};L.prototype={getContents:function(a){return z(this.contents,
a)},getButton:function(a){return z(this.buttons,a)},addContents:function(a,b){return A(this.contents,a,b)},addButton:function(a,b){return A(this.buttons,a,b)},removeContents:function(a){B(this.contents,a)},removeButton:function(a){B(this.buttons,a)}};I.prototype={get:function(a){return z(this.elements,a,"children")},add:function(a,b){return A(this.elements,a,b,"children")},remove:function(a){B(this.elements,a,"children")}};var F,w={},q,s={},M=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=
a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-1],b.keydown&&b.keydown.call(b.uiElement,b.dialog,b.key),a.data.preventDefault()},N=function(a){var b=a.data.$.ctrlKey||a.data.$.metaKey,c=a.data.$.altKey,e=a.data.$.shiftKey,d=String.fromCharCode(a.data.$.keyCode);if((b=s[(b?"CTRL+":"")+(c?"ALT+":"")+(e?"SHIFT+":"")+d])&&b.length)b=b[b.length-1],b.keyup&&(b.keyup.call(b.uiElement,b.dialog,b.key),
a.data.preventDefault())},O=function(a,b,c,e,d){(s[c]||(s[c]=[])).push({uiElement:a,dialog:b,key:c,keyup:d||a.accessKeyUp,keydown:e||a.accessKeyDown})},X=function(a){for(var b in s){for(var c=s[b],e=c.length-1;0<=e;e--)(c[e].dialog==a||c[e].uiElement==a)&&c.splice(e,1);0===c.length&&delete s[b]}},Z=function(a,b){a._.accessKeyMap[b]&&a.selectPage(a._.accessKeyMap[b])},Y=function(){};(function(){CKEDITOR.ui.dialog={uiElement:function(a,b,c,e,d,g,f){if(!(4>arguments.length)){var i=(e.call?e(b):e)||"div",
l=["<",i," "],k=(d&&d.call?d(b):d)||{},h=(g&&g.call?g(b):g)||{},o=(f&&f.call?f.call(this,a,b):f)||"",j=this.domId=h.id||CKEDITOR.tools.getNextId()+"_uiElement";this.id=b.id;b.requiredContent&&!a.getParentEditor().filter.check(b.requiredContent)&&(k.display="none",this.notAllowed=!0);h.id=j;var n={};b.type&&(n["cke_dialog_ui_"+b.type]=1);b.className&&(n[b.className]=1);b.disabled&&(n.cke_disabled=1);for(var m=h["class"]&&h["class"].split?h["class"].split(" "):[],j=0;j<m.length;j++)m[j]&&(n[m[j]]=1);
m=[];for(j in n)m.push(j);h["class"]=m.join(" ");b.title&&(h.title=b.title);n=(b.style||"").split(";");b.align&&(m=b.align,k["margin-left"]="left"==m?0:"auto",k["margin-right"]="right"==m?0:"auto");for(j in k)n.push(j+":"+k[j]);b.hidden&&n.push("display:none");for(j=n.length-1;0<=j;j--)""===n[j]&&n.splice(j,1);0<n.length&&(h.style=(h.style?h.style+"; ":"")+n.join("; "));for(j in h)l.push(j+'="'+CKEDITOR.tools.htmlEncode(h[j])+'" ');l.push(">",o,"</",i,">");c.push(l.join(""));(this._||(this._={})).dialog=
a;"boolean"==typeof b.isChanged&&(this.isChanged=function(){return b.isChanged});"function"==typeof b.isChanged&&(this.isChanged=b.isChanged);"function"==typeof b.setValue&&(this.setValue=CKEDITOR.tools.override(this.setValue,function(a){return function(c){a.call(this,b.setValue.call(this,c))}}));"function"==typeof b.getValue&&(this.getValue=CKEDITOR.tools.override(this.getValue,function(a){return function(){return b.getValue.call(this,a.call(this))}}));CKEDITOR.event.implementOn(this);this.registerEvents(b);
this.accessKeyUp&&(this.accessKeyDown&&b.accessKey)&&O(this,a,"CTRL+"+b.accessKey);var p=this;a.on("load",function(){var b=p.getInputElement();if(b){var c=p.type in{checkbox:1,ratio:1}&&CKEDITOR.env.ie&&CKEDITOR.env.version<8?"cke_dialog_ui_focused":"";b.on("focus",function(){a._.tabBarMode=false;a._.hasFocus=true;p.fire("focus");c&&this.addClass(c)});b.on("blur",function(){p.fire("blur");c&&this.removeClass(c)})}});CKEDITOR.tools.extend(this,b);this.keyboardFocusable&&(this.tabIndex=b.tabIndex||
0,this.focusIndex=a._.focusList.push(this)-1,this.on("focus",function(){a._.currentFocusIndex=p.focusIndex}))}},hbox:function(a,b,c,e,d){if(!(4>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.widths||null,i=d&&d.height||null,l,k={role:"presentation"};d&&d.align&&(k.align=d.align);CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"hbox"},e,"table",{},k,function(){var a=['<tbody><tr class="cke_dialog_ui_hbox">'];for(l=0;l<c.length;l++){var b="cke_dialog_ui_hbox_child",e=[];0===
l&&(b="cke_dialog_ui_hbox_first");l==c.length-1&&(b="cke_dialog_ui_hbox_last");a.push('<td class="',b,'" role="presentation" ');f?f[l]&&e.push("width:"+r(f[l])):e.push("width:"+Math.floor(100/c.length)+"%");i&&e.push("height:"+r(i));d&&void 0!=d.padding&&e.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[l].align)&&e.push("text-align:"+g[l].align);0<e.length&&a.push('style="'+e.join("; ")+'" ');a.push(">",c[l],"</td>")}a.push("</tr></tbody>");return a.join("")})}},vbox:function(a,
b,c,e,d){if(!(3>arguments.length)){this._||(this._={});var g=this._.children=b,f=d&&d.width||null,i=d&&d.heights||null;CKEDITOR.ui.dialog.uiElement.call(this,a,d||{type:"vbox"},e,"div",null,{role:"presentation"},function(){var b=['<table role="presentation" cellspacing="0" border="0" '];b.push('style="');d&&d.expand&&b.push("height:100%;");b.push("width:"+r(f||"100%"),";");CKEDITOR.env.webkit&&b.push("float:none;");b.push('"');b.push('align="',CKEDITOR.tools.htmlEncode(d&&d.align||("ltr"==a.getParentEditor().lang.dir?
"left":"right")),'" ');b.push("><tbody>");for(var e=0;e<c.length;e++){var h=[];b.push('<tr><td role="presentation" ');f&&h.push("width:"+r(f||"100%"));i?h.push("height:"+r(i[e])):d&&d.expand&&h.push("height:"+Math.floor(100/c.length)+"%");d&&void 0!=d.padding&&h.push("padding:"+r(d.padding));CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&g[e].align)&&h.push("text-align:"+g[e].align);0<h.length&&b.push('style="',h.join("; "),'" ');b.push(' class="cke_dialog_ui_vbox_child">',c[e],"</td></tr>")}b.push("</tbody></table>");
return b.join("")})}}}})();CKEDITOR.ui.dialog.uiElement.prototype={getElement:function(){return CKEDITOR.document.getById(this.domId)},getInputElement:function(){return this.getElement()},getDialog:function(){return this._.dialog},setValue:function(a,b){this.getInputElement().setValue(a);!b&&this.fire("change",{value:a});return this},getValue:function(){return this.getInputElement().getValue()},isChanged:function(){return!1},selectParentTab:function(){for(var a=this.getInputElement();(a=a.getParent())&&
-1==a.$.className.search("cke_dialog_page_contents"););if(!a)return this;a=a.getAttribute("name");this._.dialog._.currentTabId!=a&&this._.dialog.selectPage(a);return this},focus:function(){this.selectParentTab().getInputElement().focus();return this},registerEvents:function(a){var b=/^on([A-Z]\w+)/,c,e=function(a,b,c,d){b.on("load",function(){a.getInputElement().on(c,d,a)})},d;for(d in a)if(c=d.match(b))this.eventProcessors[d]?this.eventProcessors[d].call(this,this._.dialog,a[d]):e(this,this._.dialog,
c[1].toLowerCase(),a[d]);return this},eventProcessors:{onLoad:function(a,b){a.on("load",b,this)},onShow:function(a,b){a.on("show",b,this)},onHide:function(a,b){a.on("hide",b,this)}},accessKeyDown:function(){this.focus()},accessKeyUp:function(){},disable:function(){var a=this.getElement();this.getInputElement().setAttribute("disabled","true");a.addClass("cke_disabled")},enable:function(){var a=this.getElement();this.getInputElement().removeAttribute("disabled");a.removeClass("cke_disabled")},isEnabled:function(){return!this.getElement().hasClass("cke_disabled")},
isVisible:function(){return this.getInputElement().isVisible()},isFocusable:function(){return!this.isEnabled()||!this.isVisible()?!1:!0}};CKEDITOR.ui.dialog.hbox.prototype=CKEDITOR.tools.extend(new CKEDITOR.ui.dialog.uiElement,{getChild:function(a){if(1>arguments.length)return this._.children.concat();a.splice||(a=[a]);return 2>a.length?this._.children[a[0]]:this._.children[a[0]]&&this._.children[a[0]].getChild?this._.children[a[0]].getChild(a.slice(1,a.length)):null}},!0);CKEDITOR.ui.dialog.vbox.prototype=
new CKEDITOR.ui.dialog.hbox;(function(){var a={build:function(a,c,e){for(var d=c.children,g,f=[],i=[],l=0;l<d.length&&(g=d[l]);l++){var k=[];f.push(k);i.push(CKEDITOR.dialog._.uiElementBuilders[g.type].build(a,g,k))}return new CKEDITOR.ui.dialog[c.type](a,i,f,e,c)}};CKEDITOR.dialog.addUIElement("hbox",a);CKEDITOR.dialog.addUIElement("vbox",a)})();CKEDITOR.dialogCommand=function(a,b){this.dialogName=a;CKEDITOR.tools.extend(this,b,!0)};CKEDITOR.dialogCommand.prototype={exec:function(a){CKEDITOR.env.opera?
CKEDITOR.tools.setTimeout(function(){a.openDialog(this.dialogName)},0,this):a.openDialog(this.dialogName)},canUndo:!1,editorFocus:1};(function(){var a=/^([a]|[^a])+$/,b=/^\d*$/,c=/^\d*(?:\.\d+)?$/,e=/^(((\d*(\.\d+))|(\d*))(px|\%)?)?$/,d=/^(((\d*(\.\d+))|(\d*))(px|em|ex|in|cm|mm|pt|pc|\%)?)?$/i,g=/^(\s*[\w-]+\s*:\s*[^:;]+(?:;|$))*$/;CKEDITOR.VALIDATE_OR=1;CKEDITOR.VALIDATE_AND=2;CKEDITOR.dialog.validate={functions:function(){var a=arguments;return function(){var b=this&&this.getValue?this.getValue():
a[0],c=void 0,d=CKEDITOR.VALIDATE_AND,e=[],g;for(g=0;g<a.length;g++)if("function"==typeof a[g])e.push(a[g]);else break;g<a.length&&"string"==typeof a[g]&&(c=a[g],g++);g<a.length&&"number"==typeof a[g]&&(d=a[g]);var j=d==CKEDITOR.VALIDATE_AND?!0:!1;for(g=0;g<e.length;g++)j=d==CKEDITOR.VALIDATE_AND?j&&e[g](b):j||e[g](b);return!j?c:!0}},regex:function(a,b){return function(c){c=this&&this.getValue?this.getValue():c;return!a.test(c)?b:!0}},notEmpty:function(b){return this.regex(a,b)},integer:function(a){return this.regex(b,
a)},number:function(a){return this.regex(c,a)},cssLength:function(a){return this.functions(function(a){return d.test(CKEDITOR.tools.trim(a))},a)},htmlLength:function(a){return this.functions(function(a){return e.test(CKEDITOR.tools.trim(a))},a)},inlineStyle:function(a){return this.functions(function(a){return g.test(CKEDITOR.tools.trim(a))},a)},equals:function(a,b){return this.functions(function(b){return b==a},b)},notEqual:function(a,b){return this.functions(function(b){return b!=a},b)}};CKEDITOR.on("instanceDestroyed",
function(a){if(CKEDITOR.tools.isEmpty(CKEDITOR.instances)){for(var b;b=CKEDITOR.dialog._.currentTop;)b.hide();for(var c in w)w[c].remove();w={}}var a=a.editor._.storedDialogs,d;for(d in a)a[d].destroy()})})();CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{openDialog:function(a,b){var c=null,e=CKEDITOR.dialog._.dialogDefinitions[a];null===CKEDITOR.dialog._.currentTop&&J(this);if("function"==typeof e)c=this._.storedDialogs||(this._.storedDialogs={}),c=c[a]||(c[a]=new CKEDITOR.dialog(this,a)),b&&b.call(c,
c),c.show();else{if("failed"==e)throw K(this),Error('[CKEDITOR.dialog.openDialog] Dialog "'+a+'" failed when loading definition.');"string"==typeof e&&CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(e),function(){"function"!=typeof CKEDITOR.dialog._.dialogDefinitions[a]&&(CKEDITOR.dialog._.dialogDefinitions[a]="failed");this.openDialog(a,b)},this,0,1)}CKEDITOR.skin.loadPart("dialog");return c}})})();
CKEDITOR.plugins.add("dialog",{requires:"dialogui",init:function(t){t.on("doubleclick",function(u){u.data.dialog&&t.openDialog(u.data.dialog)},null,null,999)}});CKEDITOR.plugins.add("about",{requires:"dialog",init:function(a){var b=a.addCommand("about",new CKEDITOR.dialogCommand("about"));b.modes={wysiwyg:1,source:1};b.canUndo=!1;b.readOnly=1;a.ui.addButton&&a.ui.addButton("About",{label:a.lang.about.title,command:"about",toolbar:"about"});CKEDITOR.dialog.add("about",this.path+"dialogs/about.js")}});(function(){CKEDITOR.plugins.add("a11yhelp",{requires:"dialog",availableLangs:{ar:1,bg:1,ca:1,cs:1,cy:1,da:1,de:1,el:1,en:1,eo:1,es:1,et:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,gu:1,he:1,hi:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ko:1,ku:1,lt:1,lv:1,mk:1,mn:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ro:1,ru:1,si:1,sk:1,sl:1,sq:1,sr:1,"sr-latn":1,sv:1,th:1,tr:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},init:function(b){var c=this;b.addCommand("a11yHelp",{exec:function(){var a=b.langCode,a=c.availableLangs[a]?a:c.availableLangs[a.replace(/-.*/,
"")]?a.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path+"dialogs/lang/"+a+".js"),function(){b.lang.a11yhelp=c.langEntries[a];b.openDialog("a11yHelp")})},modes:{wysiwyg:1,source:1},readOnly:1,canUndo:!1});b.setKeystroke(CKEDITOR.ALT+48,"a11yHelp");CKEDITOR.dialog.add("a11yHelp",this.path+"dialogs/a11yhelp.js")}})})();(function(){function f(c){var a=this.att,c=c&&c.hasAttribute(a)&&c.getAttribute(a)||"";void 0!==c&&this.setValue(c)}function g(){for(var c,a=0;a<arguments.length;a++)if(arguments[a]instanceof CKEDITOR.dom.element){c=arguments[a];break}if(c){var a=this.att,b=this.getValue();b?c.setAttribute(a,b):c.removeAttribute(a,b)}}var i={id:1,dir:1,classes:1,styles:1};CKEDITOR.plugins.add("dialogadvtab",{requires:"dialog",allowedContent:function(c){c||(c=i);var a=[];c.id&&a.push("id");c.dir&&a.push("dir");var b=
"";a.length&&(b+="["+a.join(",")+"]");c.classes&&(b+="(*)");c.styles&&(b+="{*}");return b},createAdvancedTab:function(c,a,b){a||(a=i);var d=c.lang.common,h={id:"advanced",label:d.advancedTab,title:d.advancedTab,elements:[{type:"vbox",padding:1,children:[]}]},e=[];if(a.id||a.dir)a.id&&e.push({id:"advId",att:"id",type:"text",requiredContent:b?b+"[id]":null,label:d.id,setup:f,commit:g}),a.dir&&e.push({id:"advLangDir",att:"dir",type:"select",requiredContent:b?b+"[dir]":null,label:d.langDir,"default":"",
style:"width:100%",items:[[d.notSet,""],[d.langDirLTR,"ltr"],[d.langDirRTL,"rtl"]],setup:f,commit:g}),h.elements[0].children.push({type:"hbox",widths:["50%","50%"],children:[].concat(e)});if(a.styles||a.classes)e=[],a.styles&&e.push({id:"advStyles",att:"style",type:"text",requiredContent:b?b+"{cke-xyz}":null,label:d.styles,"default":"",validate:CKEDITOR.dialog.validate.inlineStyle(d.invalidInlineStyle),onChange:function(){},getStyle:function(a,c){var b=this.getValue().match(RegExp("(?:^|;)\\s*"+a+
"\\s*:\\s*([^;]*)","i"));return b?b[1]:c},updateStyle:function(a,b){var d=this.getValue(),e=c.document.createElement("span");e.setAttribute("style",d);e.setStyle(a,b);d=CKEDITOR.tools.normalizeCssText(e.getAttribute("style"));this.setValue(d,1)},setup:f,commit:g}),a.classes&&e.push({type:"hbox",widths:["45%","55%"],children:[{id:"advCSSClasses",att:"class",type:"text",requiredContent:b?b+"(cke-xyz)":null,label:d.cssClasses,"default":"",setup:f,commit:g}]}),h.elements[0].children.push({type:"hbox",
widths:["50%","50%"],children:[].concat(e)});return h}})})();CKEDITOR.plugins.add("basicstyles",{init:function(c){var e=0,d=function(g,d,b,a){if(a){var a=new CKEDITOR.style(a),f=h[b];f.unshift(a);c.attachStyleStateChange(a,function(a){!c.readOnly&&c.getCommand(b).setState(a)});c.addCommand(b,new CKEDITOR.styleCommand(a,{contentForms:f}));c.ui.addButton&&c.ui.addButton(g,{label:d,command:b,toolbar:"basicstyles,"+(e+=10)})}},h={bold:["strong","b",["span",function(a){a=a.styles["font-weight"];return"bold"==a||700<=+a}]],italic:["em","i",["span",function(a){return"italic"==
a.styles["font-style"]}]],underline:["u",["span",function(a){return"underline"==a.styles["text-decoration"]}]],strike:["s","strike",["span",function(a){return"line-through"==a.styles["text-decoration"]}]],subscript:["sub"],superscript:["sup"]},b=c.config,a=c.lang.basicstyles;d("Bold",a.bold,"bold",b.coreStyles_bold);d("Italic",a.italic,"italic",b.coreStyles_italic);d("Underline",a.underline,"underline",b.coreStyles_underline);d("Strike",a.strike,"strike",b.coreStyles_strike);d("Subscript",a.subscript,
"subscript",b.coreStyles_subscript);d("Superscript",a.superscript,"superscript",b.coreStyles_superscript);c.setKeystroke([[CKEDITOR.CTRL+66,"bold"],[CKEDITOR.CTRL+73,"italic"],[CKEDITOR.CTRL+85,"underline"]])}});CKEDITOR.config.coreStyles_bold={element:"strong",overrides:"b"};CKEDITOR.config.coreStyles_italic={element:"em",overrides:"i"};CKEDITOR.config.coreStyles_underline={element:"u"};CKEDITOR.config.coreStyles_strike={element:"s",overrides:"strike"};CKEDITOR.config.coreStyles_subscript={element:"sub"};
CKEDITOR.config.coreStyles_superscript={element:"sup"};(function(){function n(a,f,d,b){if(!a.isReadOnly()&&!a.equals(d.editable())){CKEDITOR.dom.element.setMarker(b,a,"bidi_processed",1);for(var b=a,c=d.editable();(b=b.getParent())&&!b.equals(c);)if(b.getCustomData("bidi_processed")){a.removeStyle("direction");a.removeAttribute("dir");return}b="useComputedState"in d.config?d.config.useComputedState:1;if((b?a.getComputedStyle("direction"):a.getStyle("direction")||a.hasAttribute("dir"))!=f)a.removeStyle("direction"),b?(a.removeAttribute("dir"),f!=a.getComputedStyle("direction")&&
a.setAttribute("dir",f)):a.setAttribute("dir",f),d.forceNextSelectionCheck()}}function r(a,f,d){var b=a.getCommonAncestor(!1,!0),a=a.clone();a.enlarge(d==CKEDITOR.ENTER_BR?CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS:CKEDITOR.ENLARGE_BLOCK_CONTENTS);if(a.checkBoundaryOfElement(b,CKEDITOR.START)&&a.checkBoundaryOfElement(b,CKEDITOR.END)){for(var c;b&&b.type==CKEDITOR.NODE_ELEMENT&&(c=b.getParent())&&1==c.getChildCount()&&!(b.getName()in f);)b=c;return b.type==CKEDITOR.NODE_ELEMENT&&b.getName()in f&&b}}function m(a){return{context:"p",
allowedContent:{"h1 h2 h3 h4 h5 h6 table ul ol blockquote div tr p div li td":{propertiesOnly:!0,attributes:"dir"}},requiredContent:"p[dir]",refresh:function(a,d){var b=a.config.useComputedState,c,b=void 0===b||b;if(!b){c=d.lastElement;for(var h=a.editable();c&&!(c.getName()in q||c.equals(h));){var e=c.getParent();if(!e)break;c=e}}c=c||d.block||d.blockLimit;c.equals(a.editable())&&(h=a.getSelection().getRanges()[0].getEnclosedNode())&&h.type==CKEDITOR.NODE_ELEMENT&&(c=h);c&&(b=b?c.getComputedStyle("direction"):
c.getStyle("direction")||c.getAttribute("dir"),a.getCommand("bidirtl").setState("rtl"==b?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF),a.getCommand("bidiltr").setState("ltr"==b?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF));b=(d.block||d.blockLimit||a.editable()).getDirection(1);if(b!=(a._.selDir||a.lang.dir))a._.selDir=b,a.fire("contentDirChanged",b)},exec:function(f){var d=f.getSelection(),b=f.config.enterMode,c=d.getRanges();if(c&&c.length){for(var h={},e=d.createBookmarks(),c=c.createIterator(),g,
j=0;g=c.getNextRange(1);){var i=g.getEnclosedNode();if(!i||i&&!(i.type==CKEDITOR.NODE_ELEMENT&&i.getName()in o))i=r(g,p,b);i&&n(i,a,f,h);var k=new CKEDITOR.dom.walker(g),l=e[j].startNode,m=e[j++].endNode;k.evaluator=function(a){return!!(a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in p&&!(a.getName()==(b==CKEDITOR.ENTER_P?"p":"div")&&a.getParent().type==CKEDITOR.NODE_ELEMENT&&"blockquote"==a.getParent().getName())&&a.getPosition(l)&CKEDITOR.POSITION_FOLLOWING&&(a.getPosition(m)&CKEDITOR.POSITION_PRECEDING+
CKEDITOR.POSITION_CONTAINS)==CKEDITOR.POSITION_PRECEDING)};for(;i=k.next();)n(i,a,f,h);g=g.createIterator();for(g.enlargeBr=b!=CKEDITOR.ENTER_BR;i=g.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div");)n(i,a,f,h)}CKEDITOR.dom.element.clearAllMarkers(h);f.forceNextSelectionCheck();d.selectBookmarks(e);f.focus()}}}}function s(a){var f=a==j.setAttribute,d=a==j.removeAttribute,b=/\bdirection\s*:\s*(.*?)\s*(:?$|;)/;return function(c,h){if(!this.isReadOnly()){var e;if(e=c==(f||d?"dir":"direction")||"style"==
c&&(d||b.test(h))){a:{e=this;for(var g=e.getDocument().getBody().getParent();e;){if(e.equals(g)){e=!1;break a}e=e.getParent()}e=!0}e=!e}if(e&&(e=this.getDirection(1),g=a.apply(this,arguments),e!=this.getDirection(1)))return this.getDocument().fire("dirChanged",this),g}return a.apply(this,arguments)}}var p={table:1,ul:1,ol:1,blockquote:1,div:1},o={},q={};CKEDITOR.tools.extend(o,p,{tr:1,p:1,div:1,li:1});CKEDITOR.tools.extend(q,o,{td:1});CKEDITOR.plugins.add("bidi",{init:function(a){function f(b,c,d,
e,f){a.addCommand(d,new CKEDITOR.command(a,e));a.ui.addButton&&a.ui.addButton(b,{label:c,command:d,toolbar:"bidi,"+f})}if(!a.blockless){var d=a.lang.bidi;f("BidiLtr",d.ltr,"bidiltr",m("ltr"),10);f("BidiRtl",d.rtl,"bidirtl",m("rtl"),20);a.on("contentDom",function(){a.document.on("dirChanged",function(b){a.fire("dirChanged",{node:b.data,dir:b.data.getDirection(1)})})});a.on("contentDirChanged",function(b){var b=(a.lang.dir!=b.data?"add":"remove")+"Class",c=a.ui.space(a.config.toolbarLocation);if(c)c[b]("cke_mixed_dir_content")})}}});
for(var j=CKEDITOR.dom.element.prototype,l=["setStyle","removeStyle","setAttribute","removeAttribute"],k=0;k<l.length;k++)j[l[k]]=CKEDITOR.tools.override(j[l[k]],s)})();(function(){var k={exec:function(g){var a=g.getCommand("blockquote").state,i=g.getSelection(),c=i&&i.getRanges()[0];if(c){var h=i.createBookmarks();if(CKEDITOR.env.ie){var e=h[0].startNode,b=h[0].endNode,d;if(e&&"blockquote"==e.getParent().getName())for(d=e;d=d.getNext();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){e.move(d,!0);break}if(b&&"blockquote"==b.getParent().getName())for(d=b;d=d.getPrevious();)if(d.type==CKEDITOR.NODE_ELEMENT&&d.isBlockBoundary()){b.move(d);break}}var f=c.createIterator();
f.enlargeBr=g.config.enterMode!=CKEDITOR.ENTER_BR;if(a==CKEDITOR.TRISTATE_OFF){for(e=[];a=f.getNextParagraph();)e.push(a);1>e.length&&(a=g.document.createElement(g.config.enterMode==CKEDITOR.ENTER_P?"p":"div"),b=h.shift(),c.insertNode(a),a.append(new CKEDITOR.dom.text("﻿",g.document)),c.moveToBookmark(b),c.selectNodeContents(a),c.collapse(!0),b=c.createBookmark(),e.push(a),h.unshift(b));d=e[0].getParent();c=[];for(b=0;b<e.length;b++)a=e[b],d=d.getCommonAncestor(a.getParent());for(a={table:1,tbody:1,
tr:1,ol:1,ul:1};a[d.getName()];)d=d.getParent();for(b=null;0<e.length;){for(a=e.shift();!a.getParent().equals(d);)a=a.getParent();a.equals(b)||c.push(a);b=a}for(;0<c.length;)if(a=c.shift(),"blockquote"==a.getName()){for(b=new CKEDITOR.dom.documentFragment(g.document);a.getFirst();)b.append(a.getFirst().remove()),e.push(b.getLast());b.replace(a)}else e.push(a);c=g.document.createElement("blockquote");for(c.insertBefore(e[0]);0<e.length;)a=e.shift(),c.append(a)}else if(a==CKEDITOR.TRISTATE_ON){b=[];
for(d={};a=f.getNextParagraph();){for(e=c=null;a.getParent();){if("blockquote"==a.getParent().getName()){c=a.getParent();e=a;break}a=a.getParent()}c&&(e&&!e.getCustomData("blockquote_moveout"))&&(b.push(e),CKEDITOR.dom.element.setMarker(d,e,"blockquote_moveout",!0))}CKEDITOR.dom.element.clearAllMarkers(d);a=[];e=[];for(d={};0<b.length;)f=b.shift(),c=f.getParent(),f.getPrevious()?f.getNext()?(f.breakParent(f.getParent()),e.push(f.getNext())):f.remove().insertAfter(c):f.remove().insertBefore(c),c.getCustomData("blockquote_processed")||
(e.push(c),CKEDITOR.dom.element.setMarker(d,c,"blockquote_processed",!0)),a.push(f);CKEDITOR.dom.element.clearAllMarkers(d);for(b=e.length-1;0<=b;b--){c=e[b];a:{d=c;for(var f=0,k=d.getChildCount(),j=void 0;f<k&&(j=d.getChild(f));f++)if(j.type==CKEDITOR.NODE_ELEMENT&&j.isBlockBoundary()){d=!1;break a}d=!0}d&&c.remove()}if(g.config.enterMode==CKEDITOR.ENTER_BR)for(c=!0;a.length;)if(f=a.shift(),"div"==f.getName()){b=new CKEDITOR.dom.documentFragment(g.document);c&&(f.getPrevious()&&!(f.getPrevious().type==
CKEDITOR.NODE_ELEMENT&&f.getPrevious().isBlockBoundary()))&&b.append(g.document.createElement("br"));for(c=f.getNext()&&!(f.getNext().type==CKEDITOR.NODE_ELEMENT&&f.getNext().isBlockBoundary());f.getFirst();)f.getFirst().remove().appendTo(b);c&&b.append(g.document.createElement("br"));b.replace(f);c=!1}}i.selectBookmarks(h);g.focus()}},refresh:function(g,a){this.setState(g.elementPath(a.block||a.blockLimit).contains("blockquote",1)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)},context:"blockquote",
allowedContent:"blockquote",requiredContent:"blockquote"};CKEDITOR.plugins.add("blockquote",{init:function(g){g.blockless||(g.addCommand("blockquote",k),g.ui.addButton&&g.ui.addButton("Blockquote",{label:g.lang.blockquote.toolbar,command:"blockquote",toolbar:"blocks,10"}))}})})();(function(){function w(b){function a(){var e=b.editable();e.on(q,function(b){(!CKEDITOR.env.ie||!n)&&u(b)});CKEDITOR.env.ie&&e.on("paste",function(e){r||(f(),e.data.preventDefault(),u(e),l("paste")||b.openDialog("paste"))});CKEDITOR.env.ie&&(e.on("contextmenu",h,null,null,0),e.on("beforepaste",function(b){b.data&&!b.data.$.ctrlKey&&h()},null,null,0));e.on("beforecut",function(){!n&&i(b)});var a;e.attachListener(CKEDITOR.env.ie?e:b.document.getDocumentElement(),"mouseup",function(){a=setTimeout(function(){s()},
0)});b.on("destroy",function(){clearTimeout(a)});e.on("keyup",s)}function c(e){return{type:e,canUndo:"cut"==e,startDisabled:!0,exec:function(){"cut"==this.type&&i();var e;var a=this.type;if(CKEDITOR.env.ie)e=l(a);else try{e=b.document.$.execCommand(a,!1,null)}catch(d){e=!1}e||alert(b.lang.clipboard[this.type+"Error"]);return e}}}function d(){return{canUndo:!1,async:!0,exec:function(b,a){var d=function(a,d){a&&g(a.type,a.dataValue,!!d);b.fire("afterCommandExec",{name:"paste",command:c,returnValue:!!a})},
c=this;"string"==typeof a?d({type:"auto",dataValue:a},1):b.getClipboardData(d)}}}function f(){r=1;setTimeout(function(){r=0},100)}function h(){n=1;setTimeout(function(){n=0},10)}function l(e){var a=b.document,d=a.getBody(),c=!1,i=function(){c=!0};d.on(e,i);(7<CKEDITOR.env.version?a.$:a.$.selection.createRange()).execCommand(e);d.removeListener(e,i);return c}function g(e,a,d){e={type:e};if(d&&!1===b.fire("beforePaste",e)||!a)return!1;e.dataValue=a;return b.fire("paste",e)}function i(){if(CKEDITOR.env.ie&&
!CKEDITOR.env.quirks){var e=b.getSelection(),a,d,c;if(e.getType()==CKEDITOR.SELECTION_ELEMENT&&(a=e.getSelectedElement()))d=e.getRanges()[0],c=b.document.createText(""),c.insertBefore(a),d.setStartBefore(c),d.setEndAfter(a),e.selectRanges([d]),setTimeout(function(){a.getParent()&&(c.remove(),e.selectElement(a))},0)}}function k(a,d){var c=b.document,i=b.editable(),k=function(b){b.cancel()},f=CKEDITOR.env.gecko&&10902>=CKEDITOR.env.version,h;if(!c.getById("cke_pastebin")){var o=b.getSelection(),v=o.createBookmarks(),
j=new CKEDITOR.dom.element((CKEDITOR.env.webkit||i.is("body"))&&!CKEDITOR.env.ie&&!CKEDITOR.env.opera?"body":"div",c);j.setAttributes({id:"cke_pastebin","data-cke-temp":"1"});CKEDITOR.env.opera&&j.appendBogus();var g=0,c=c.getWindow();f?(j.insertAfter(v[0].startNode),j.setStyle("display","inline")):(CKEDITOR.env.webkit?(i.append(j),j.addClass("cke_editable"),i.is("body")||(f="static"!=i.getComputedStyle("position")?i:CKEDITOR.dom.element.get(i.$.offsetParent),g=f.getDocumentPosition().y)):i.getAscendant(CKEDITOR.env.ie||
CKEDITOR.env.opera?"body":"html",1).append(j),j.setStyles({position:"absolute",top:c.getScrollPosition().y-g+10+"px",width:"1px",height:Math.max(1,c.getViewPaneSize().height-20)+"px",overflow:"hidden",margin:0,padding:0}));(f=j.getParent().isReadOnly())?(j.setOpacity(0),j.setAttribute("contenteditable",!0)):j.setStyle("ltr"==b.config.contentsLangDirection?"left":"right","-1000px");b.on("selectionChange",k,null,null,0);if(CKEDITOR.env.webkit||CKEDITOR.env.gecko)h=i.once("blur",k,null,null,-100);f&&
j.focus();f=new CKEDITOR.dom.range(j);f.selectNodeContents(j);var l=f.select();CKEDITOR.env.ie&&(h=i.once("blur",function(){b.lockSelection(l)}));var m=CKEDITOR.document.getWindow().getScrollPosition().y;setTimeout(function(){if(CKEDITOR.env.webkit||CKEDITOR.env.opera)CKEDITOR.document[CKEDITOR.env.webkit?"getBody":"getDocumentElement"]().$.scrollTop=m;h&&h.removeListener();CKEDITOR.env.ie&&i.focus();o.selectBookmarks(v);j.remove();var a;if(CKEDITOR.env.webkit&&(a=j.getFirst())&&a.is&&a.hasClass("Apple-style-span"))j=
a;b.removeListener("selectionChange",k);d(j.getHtml())},0)}}function o(){if(CKEDITOR.env.ie){b.focus();f();var a=b.focusManager;a.lock();if(b.editable().fire(q)&&!l("paste"))return a.unlock(),!1;a.unlock()}else try{if(b.editable().fire(q)&&!b.document.$.execCommand("Paste",!1,null))throw 0;}catch(d){return!1}return!0}function p(a){if("wysiwyg"==b.mode)switch(a.data.keyCode){case CKEDITOR.CTRL+86:case CKEDITOR.SHIFT+45:a=b.editable();f();!CKEDITOR.env.ie&&a.fire("beforepaste");(CKEDITOR.env.opera||
CKEDITOR.env.gecko&&10900>CKEDITOR.env.version)&&a.fire("paste");break;case CKEDITOR.CTRL+88:case CKEDITOR.SHIFT+46:b.fire("saveSnapshot"),setTimeout(function(){b.fire("saveSnapshot")},50)}}function u(a){var d={type:"auto"},c=b.fire("beforePaste",d);k(a,function(b){b=b.replace(/<span[^>]+data-cke-bookmark[^<]*?<\/span>/ig,"");c&&g(d.type,b,0,1)})}function s(){if("wysiwyg"==b.mode){var a=m("paste");b.getCommand("cut").setState(m("cut"));b.getCommand("copy").setState(m("copy"));b.getCommand("paste").setState(a);
b.fire("pasteState",a)}}function m(a){if(t&&a in{paste:1,cut:1})return CKEDITOR.TRISTATE_DISABLED;if("paste"==a)return CKEDITOR.TRISTATE_OFF;var a=b.getSelection(),d=a.getRanges();return a.getType()==CKEDITOR.SELECTION_NONE||1==d.length&&d[0].collapsed?CKEDITOR.TRISTATE_DISABLED:CKEDITOR.TRISTATE_OFF}var n=0,r=0,t=0,q=CKEDITOR.env.ie?"beforepaste":"paste";(function(){b.on("key",p);b.on("contentDom",a);b.on("selectionChange",function(a){t=a.data.selection.getRanges()[0].checkReadOnly();s()});b.contextMenu&&
b.contextMenu.addListener(function(a,b){t=b.getRanges()[0].checkReadOnly();return{cut:m("cut"),copy:m("copy"),paste:m("paste")}})})();(function(){function a(d,c,i,e,f){var k=b.lang.clipboard[c];b.addCommand(c,i);b.ui.addButton&&b.ui.addButton(d,{label:k,command:c,toolbar:"clipboard,"+e});b.addMenuItems&&b.addMenuItem(c,{label:k,command:c,group:"clipboard",order:f})}a("Cut","cut",c("cut"),10,1);a("Copy","copy",c("copy"),20,4);a("Paste","paste",d(),30,8)})();b.getClipboardData=function(a,d){function c(a){a.removeListener();
a.cancel();d(a.data)}function i(a){a.removeListener();a.cancel();g=!0;d({type:h,dataValue:a.data})}function f(){this.customTitle=a&&a.title}var k=!1,h="auto",g=!1;d||(d=a,a=null);b.on("paste",c,null,null,0);b.on("beforePaste",function(a){a.removeListener();k=true;h=a.data.type},null,null,1E3);!1===o()&&(b.removeListener("paste",c),k&&b.fire("pasteDialog",f)?(b.on("pasteDialogCommit",i),b.on("dialogHide",function(a){a.removeListener();a.data.removeListener("pasteDialogCommit",i);setTimeout(function(){g||
d(null)},10)})):d(null))}}function x(b){if(CKEDITOR.env.webkit){if(!b.match(/^[^<]*$/g)&&!b.match(/^(<div><br( ?\/)?><\/div>|<div>[^<]*<\/div>)*$/gi))return"html"}else if(CKEDITOR.env.ie){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi)&&!b.match(/^(<p>([^<]|<br( ?\/)?>)*<\/p>|(\r\n))*$/gi))return"html"}else if(CKEDITOR.env.gecko||CKEDITOR.env.opera){if(!b.match(/^([^<]|<br( ?\/)?>)*$/gi))return"html"}else return"html";return"htmlifiedtext"}function y(b,a){function c(a){return CKEDITOR.tools.repeat("</p><p>",
~~(a/2))+(1==a%2?"<br>":"")}a=a.replace(/\s+/g," ").replace(/> +</g,"><").replace(/<br ?\/>/gi,"<br>");a=a.replace(/<\/?[A-Z]+>/g,function(a){return a.toLowerCase()});if(a.match(/^[^<]$/))return a;CKEDITOR.env.webkit&&-1<a.indexOf("<div>")&&(a=a.replace(/^(<div>(<br>|)<\/div>)(?!$|(<div>(<br>|)<\/div>))/g,"<br>").replace(/^(<div>(<br>|)<\/div>){2}(?!$)/g,"<div></div>"),a.match(/<div>(<br>|)<\/div>/)&&(a="<p>"+a.replace(/(<div>(<br>|)<\/div>)+/g,function(a){return c(a.split("</div><div>").length+1)})+
"</p>"),a=a.replace(/<\/div><div>/g,"<br>"),a=a.replace(/<\/?div>/g,""));if((CKEDITOR.env.gecko||CKEDITOR.env.opera)&&b.enterMode!=CKEDITOR.ENTER_BR)CKEDITOR.env.gecko&&(a=a.replace(/^<br><br>$/,"<br>")),-1<a.indexOf("<br><br>")&&(a="<p>"+a.replace(/(<br>){2,}/g,function(a){return c(a.length/4)})+"</p>");return p(b,a)}function z(){var b=new CKEDITOR.htmlParser.filter,a={blockquote:1,dl:1,fieldset:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ol:1,p:1,table:1,ul:1},c=CKEDITOR.tools.extend({br:0},CKEDITOR.dtd.$inline),
d={p:1,br:1,"cke:br":1},f=CKEDITOR.dtd,h=CKEDITOR.tools.extend({area:1,basefont:1,embed:1,iframe:1,map:1,object:1,param:1},CKEDITOR.dtd.$nonBodyContent,CKEDITOR.dtd.$cdata),l=function(a){delete a.name;a.add(new CKEDITOR.htmlParser.text(" "))},g=function(a){for(var b=a,c;(b=b.next)&&b.name&&b.name.match(/^h\d$/);){c=new CKEDITOR.htmlParser.element("cke:br");c.isEmpty=!0;for(a.add(c);c=b.children.shift();)a.add(c)}};b.addRules({elements:{h1:g,h2:g,h3:g,h4:g,h5:g,h6:g,img:function(a){var a=CKEDITOR.tools.trim(a.attributes.alt||
""),b=" ";a&&!a.match(/(^http|\.(jpe?g|gif|png))/i)&&(b=" ["+a+"] ");return new CKEDITOR.htmlParser.text(b)},td:l,th:l,$:function(b){var k=b.name,g;if(h[k])return!1;b.attributes={};if("br"==k)return b;if(a[k])b.name="p";else if(c[k])delete b.name;else if(f[k]){g=new CKEDITOR.htmlParser.element("cke:br");g.isEmpty=!0;if(CKEDITOR.dtd.$empty[k])return g;b.add(g,0);g=g.clone();g.isEmpty=!0;b.add(g);delete b.name}d[b.name]||delete b.name;return b}}},{applyToAll:!0});return b}function A(b,a,c){var a=new CKEDITOR.htmlParser.fragment.fromHtml(a),
d=new CKEDITOR.htmlParser.basicWriter;a.writeHtml(d,c);var a=d.getHtml(),a=a.replace(/\s*(<\/?[a-z:]+ ?\/?>)\s*/g,"$1").replace(/(<cke:br \/>){2,}/g,"<cke:br />").replace(/(<cke:br \/>)(<\/?p>|<br \/>)/g,"$2").replace(/(<\/?p>|<br \/>)(<cke:br \/>)/g,"$1").replace(/<(cke:)?br( \/)?>/g,"<br>").replace(/<p><\/p>/g,""),f=0,a=a.replace(/<\/?p>/g,function(a){if("<p>"==a){if(1<++f)return"</p><p>"}else if(0<--f)return"</p><p>";return a}).replace(/<p><\/p>/g,"");return p(b,a)}function p(b,a){b.enterMode==
CKEDITOR.ENTER_BR?a=a.replace(/(<\/p><p>)+/g,function(a){return CKEDITOR.tools.repeat("<br>",2*(a.length/7))}).replace(/<\/?p>/g,""):b.enterMode==CKEDITOR.ENTER_DIV&&(a=a.replace(/<(\/)?p>/g,"<$1div>"));return a}CKEDITOR.plugins.add("clipboard",{requires:"dialog",init:function(b){var a;w(b);CKEDITOR.dialog.add("paste",CKEDITOR.getUrl(this.path+"dialogs/paste.js"));b.on("paste",function(a){var b=a.data.dataValue,f=CKEDITOR.dtd.$block;-1<b.indexOf("Apple-")&&(b=b.replace(/<span class="Apple-converted-space">&nbsp;<\/span>/gi,
" "),"html"!=a.data.type&&(b=b.replace(/<span class="Apple-tab-span"[^>]*>([^<]*)<\/span>/gi,function(a,b){return b.replace(/\t/g,"&nbsp;&nbsp; &nbsp;")})),-1<b.indexOf('<br class="Apple-interchange-newline">')&&(a.data.startsWithEOL=1,a.data.preSniffing="html",b=b.replace(/<br class="Apple-interchange-newline">/,"")),b=b.replace(/(<[^>]+) class="Apple-[^"]*"/gi,"$1"));if(b.match(/^<[^<]+cke_(editable|contents)/i)){var h,l,g=new CKEDITOR.dom.element("div");for(g.setHtml(b);1==g.getChildCount()&&(h=
g.getFirst())&&h.type==CKEDITOR.NODE_ELEMENT&&(h.hasClass("cke_editable")||h.hasClass("cke_contents"));)g=l=h;l&&(b=l.getHtml().replace(/<br>$/i,""))}CKEDITOR.env.ie?b=b.replace(/^&nbsp;(?: |\r\n)?<(\w+)/g,function(b,d){if(d.toLowerCase()in f){a.data.preSniffing="html";return"<"+d}return b}):CKEDITOR.env.webkit?b=b.replace(/<\/(\w+)><div><br><\/div>$/,function(b,d){if(d in f){a.data.endsWithEOL=1;return"</"+d+">"}return b}):CKEDITOR.env.gecko&&(b=b.replace(/(\s)<br>$/,"$1"));a.data.dataValue=b},null,
null,3);b.on("paste",function(c){var c=c.data,d=c.type,f=c.dataValue,h,l=b.config.clipboard_defaultContentType||"html";h="html"==d||"html"==c.preSniffing?"html":x(f);"htmlifiedtext"==h?f=y(b.config,f):"text"==d&&"html"==h&&(f=A(b.config,f,a||(a=z(b))));c.startsWithEOL&&(f='<br data-cke-eol="1">'+f);c.endsWithEOL&&(f+='<br data-cke-eol="1">');"auto"==d&&(d="html"==h||"html"==l?"html":"text");c.type=d;c.dataValue=f;delete c.preSniffing;delete c.startsWithEOL;delete c.endsWithEOL},null,null,6);b.on("paste",
function(a){a=a.data;b.insertHtml(a.dataValue,a.type);setTimeout(function(){b.fire("afterPaste")},0)},null,null,1E3);b.on("pasteDialog",function(a){setTimeout(function(){b.openDialog("paste",a.data)},0)})}})})();(function(){var c='<a id="{id}" class="cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&10900<=CKEDITOR.env.version&&!CKEDITOR.env.hc?"":" href=\"javascript:void('{titleJs}')\"")+' title="{title}" tabindex="-1" hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="{hasArrow}" aria-disabled="{ariaDisabled}"';if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)c+=' onkeypress="return false;"';CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText = this.style.cssText;"');
var c=c+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus="return CKEDITOR.tools.callFunction({focusFn},event);"  onmousedown="return CKEDITOR.tools.callFunction({mousedownFn},event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span class="cke_button_icon cke_button__{iconName}_icon" style="{style}"'),c=c+'>&nbsp;</span><span id="{id}_label" class="cke_button_label cke_button__{name}_label" aria-hidden="false">{label}</span>{arrowHtml}</a>',
m=CKEDITOR.addTemplate("buttonArrow",'<span class="cke_button_arrow">'+(CKEDITOR.env.hc?"&#9660;":"")+"</span>"),n=CKEDITOR.addTemplate("button",c);CKEDITOR.plugins.add("button",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};
CKEDITOR.ui.button.prototype={render:function(a,b){var c=CKEDITOR.env,i=this._.id=CKEDITOR.tools.getNextId(),f="",e=this.command,l;this._.editor=a;var d={id:i,button:this,editor:a,focus:function(){CKEDITOR.document.getById(i).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},o=CKEDITOR.tools.addFunction(function(a){if(d.onkey)return a=new CKEDITOR.dom.event(a),!1!==d.onkey(d,a.getKeystroke())}),p=CKEDITOR.tools.addFunction(function(a){var b;d.onfocus&&(b=
!1!==d.onfocus(d,new CKEDITOR.dom.event(a)));CKEDITOR.env.gecko&&10900>CKEDITOR.env.version&&a.preventBubble();return b}),j=0,q=CKEDITOR.tools.addFunction(function(){if(CKEDITOR.env.opera){var b=a.editable();b.isInline()&&b.hasFocus&&(a.lockSelection(),j=1)}});d.clickFn=l=CKEDITOR.tools.addFunction(function(){j&&(a.unlockSelection(1),j=0);d.execute()});if(this.modes){var k={},g=function(){var b=a.mode;b&&(b=this.modes[b]?void 0!=k[b]?k[b]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,b=a.readOnly&&
!this.readOnly?CKEDITOR.TRISTATE_DISABLED:b,this.setState(b),this.refresh&&this.refresh())};a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(k[a.mode]=this._.state)},this);a.on("activeFilterChange",g,this);a.on("mode",g,this);!this.readOnly&&a.on("readOnly",g,this)}else if(e&&(e=a.getCommand(e)))e.on("state",function(){this.setState(e.state)},this),f+=e.state==CKEDITOR.TRISTATE_ON?"on":e.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";if(this.directional)a.on("contentDirChanged",
function(b){var c=CKEDITOR.document.getById(this._.id),d=c.getFirst(),b=b.data;b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl");d.setAttribute("style",CKEDITOR.skin.getIconStyle(h,"rtl"==b,this.icon,this.iconOffset))},this);e||(f+="off");var h=g=this.name||this.command;this.icon&&!/\./.test(this.icon)&&(h=this.icon,this.icon=null);c={id:i,name:g,iconName:h,label:this.label,cls:this.className||"",state:f,ariaDisabled:"disabled"==f?"true":"false",title:this.title,titleJs:c.gecko&&
10900<=c.version&&!c.hc?"":(this.title||"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:o,mousedownFn:q,focusFn:p,clickFn:l,style:CKEDITOR.skin.getIconStyle(h,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?m.output():""};n.output(c,b);if(this.onRender)this.onRender();return d},setState:function(a){if(this._.state==a)return!1;this._.state=a;var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",
!0):b.removeAttribute("aria-disabled"),this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;var b=this;!this.allowedContent&&(!this.requiredContent&&this.command)&&(b=a.getCommand(this.command)||
b);return this._.feature=b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}})();CKEDITOR.plugins.add("panelbutton",{requires:"button",onLoad:function(){function e(c){var a=this._;a.state!=CKEDITOR.TRISTATE_DISABLED&&(this.createPanel(c),a.on?a.panel.hide():a.panel.showBlock(this._.id,this.document.getById(this._.id),4))}CKEDITOR.ui.panelButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(c){var a=c.panel||{};delete c.panel;this.base(c);this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.block={attributes:a.attributes};this.hasArrow=a.toolbarRelated=
!0;this.click=e;this._={panelDefinition:a}},statics:{handler:{create:function(c){return new CKEDITOR.ui.panelButton(c)}}},proto:{createPanel:function(c){var a=this._;if(!a.panel){var f=this._.panelDefinition,e=this._.panelDefinition.block,g=f.parent||CKEDITOR.document.getBody(),d=this._.panel=new CKEDITOR.ui.floatPanel(c,g,f),f=d.addBlock(a.id,e),b=this;d.onShow=function(){b.className&&this.element.addClass(b.className+"_panel");b.setState(CKEDITOR.TRISTATE_ON);a.on=1;b.editorFocus&&c.focus();if(b.onOpen)b.onOpen()};
d.onHide=function(d){b.className&&this.element.getFirst().removeClass(b.className+"_panel");b.setState(b.modes&&b.modes[c.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);a.on=0;if(!d&&b.onClose)b.onClose()};d.onEscape=function(){d.hide(1);b.document.getById(a.id).focus()};if(this.onBlock)this.onBlock(d,f);f.onHide=function(){a.on=0;b.setState(CKEDITOR.TRISTATE_OFF)}}}}})},beforeInit:function(e){e.ui.addHandler(CKEDITOR.UI_PANELBUTTON,CKEDITOR.ui.panelButton.handler)}});
CKEDITOR.UI_PANELBUTTON="panelbutton";(function(){CKEDITOR.plugins.add("panel",{beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_PANEL,CKEDITOR.ui.panel.handler)}});CKEDITOR.UI_PANEL="panel";CKEDITOR.ui.panel=function(a,b){b&&CKEDITOR.tools.extend(this,b);CKEDITOR.tools.extend(this,{className:"",css:[]});this.id=CKEDITOR.tools.getNextId();this.document=a;this.isFramed=this.forceIFrame||this.css.length;this._={blocks:{}}};CKEDITOR.ui.panel.handler={create:function(a){return new CKEDITOR.ui.panel(a)}};var f=CKEDITOR.addTemplate("panel",
'<div lang="{langCode}" id="{id}" dir={dir} class="cke cke_reset_all {editorId} cke_panel cke_panel {cls} cke_{dir}" style="z-index:{z-index}" role="presentation">{frame}</div>'),g=CKEDITOR.addTemplate("panel-frame",'<iframe id="{id}" class="cke_panel_frame" role="presentation" frameborder="0" src="{src}"></iframe>'),h=CKEDITOR.addTemplate("panel-frame-inner",'<!DOCTYPE html><html class="cke_panel_container {env}" dir="{dir}" lang="{langCode}"><head>{css}</head><body class="cke_{dir}" style="margin:0;padding:0" onload="{onload}"></body></html>');
CKEDITOR.ui.panel.prototype={render:function(a,b){this.getHolderElement=function(){var a=this._.holder;if(!a){if(this.isFramed){var a=this.document.getById(this.id+"_frame"),b=a.getParent(),a=a.getFrameDocument();CKEDITOR.env.iOS&&b.setStyles({overflow:"scroll","-webkit-overflow-scrolling":"touch"});b=CKEDITOR.tools.addFunction(CKEDITOR.tools.bind(function(){this.isLoaded=!0;if(this.onLoad)this.onLoad()},this));a.write(h.output(CKEDITOR.tools.extend({css:CKEDITOR.tools.buildStyleHtml(this.css),onload:"window.parent.CKEDITOR.tools.callFunction("+
b+");"},d)));a.getWindow().$.CKEDITOR=CKEDITOR;a.on("key"+(CKEDITOR.env.opera?"press":"down"),function(a){var b=a.data.getKeystroke(),c=this.document.getById(this.id).getAttribute("dir");this._.onKeyDown&&!1===this._.onKeyDown(b)?a.data.preventDefault():(27==b||b==("rtl"==c?39:37))&&this.onEscape&&!1===this.onEscape(b)&&a.data.preventDefault()},this);a=a.getBody();a.unselectable();CKEDITOR.env.air&&CKEDITOR.tools.callFunction(b)}else a=this.document.getById(this.id);this._.holder=a}return a};var d=
{editorId:a.id,id:this.id,langCode:a.langCode,dir:a.lang.dir,cls:this.className,frame:"",env:CKEDITOR.env.cssClass,"z-index":a.config.baseFloatZIndex+1};if(this.isFramed){var e=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent("document.open();("+CKEDITOR.tools.fixDomain+")();document.close();")+"}())":"";d.frame=g.output({id:this.id+"_frame",src:e})}e=f.output(d);b&&b.push(e);return e},addBlock:function(a,b){b=this._.blocks[a]=b instanceof CKEDITOR.ui.panel.block?
b:new CKEDITOR.ui.panel.block(this.getHolderElement(),b);this._.currentBlock||this.showBlock(a);return b},getBlock:function(a){return this._.blocks[a]},showBlock:function(a){var a=this._.blocks[a],b=this._.currentBlock,d=!this.forceIFrame||CKEDITOR.env.ie?this._.holder:this.document.getById(this.id+"_frame");b&&b.hide();this._.currentBlock=a;CKEDITOR.fire("ariaWidget",d);a._.focusIndex=-1;this._.onKeyDown=a.onKeyDown&&CKEDITOR.tools.bind(a.onKeyDown,a);a.show();return a},destroy:function(){this.element&&
this.element.remove()}};CKEDITOR.ui.panel.block=CKEDITOR.tools.createClass({$:function(a,b){this.element=a.append(a.getDocument().createElement("div",{attributes:{tabindex:-1,"class":"cke_panel_block"},styles:{display:"none"}}));b&&CKEDITOR.tools.extend(this,b);this.element.setAttributes({role:this.attributes.role||"presentation","aria-label":this.attributes["aria-label"],title:this.attributes.title||this.attributes["aria-label"]});this.keys={};this._.focusIndex=-1;this.element.disableContextMenu()},
_:{markItem:function(a){-1!=a&&(a=this.element.getElementsByTag("a").getItem(this._.focusIndex=a),(CKEDITOR.env.webkit||CKEDITOR.env.opera)&&a.getDocument().getWindow().focus(),a.focus(),this.onMark&&this.onMark(a))}},proto:{show:function(){this.element.setStyle("display","")},hide:function(){(!this.onHide||!0!==this.onHide.call(this))&&this.element.setStyle("display","none")},onKeyDown:function(a,b){var d=this.keys[a];switch(d){case "next":for(var e=this._.focusIndex,d=this.element.getElementsByTag("a"),
c;c=d.getItem(++e);)if(c.getAttribute("_cke_focus")&&c.$.offsetWidth){this._.focusIndex=e;c.focus();break}return!c&&!b?(this._.focusIndex=-1,this.onKeyDown(a,1)):!1;case "prev":e=this._.focusIndex;for(d=this.element.getElementsByTag("a");0<e&&(c=d.getItem(--e));){if(c.getAttribute("_cke_focus")&&c.$.offsetWidth){this._.focusIndex=e;c.focus();break}c=null}return!c&&!b?(this._.focusIndex=d.count(),this.onKeyDown(a,1)):!1;case "click":case "mouseup":return e=this._.focusIndex,(c=0<=e&&this.element.getElementsByTag("a").getItem(e))&&
(c.$[d]?c.$[d]():c.$["on"+d]()),!1}return!0}}})})();CKEDITOR.plugins.add("floatpanel",{requires:"panel"});
(function(){function q(a,b,c,i,f){var f=CKEDITOR.tools.genKey(b.getUniqueId(),c.getUniqueId(),a.lang.dir,a.uiColor||"",i.css||"",f||""),h=g[f];h||(h=g[f]=new CKEDITOR.ui.panel(b,i),h.element=c.append(CKEDITOR.dom.element.createFromHtml(h.render(a),b)),h.element.setStyles({display:"none",position:"absolute"}));return h}var g={};CKEDITOR.ui.floatPanel=CKEDITOR.tools.createClass({$:function(a,b,c,i){function f(){d.hide()}c.forceIFrame=1;c.toolbarRelated&&a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&
(b=CKEDITOR.document.getById("cke_"+a.name));var h=b.getDocument(),i=q(a,h,b,c,i||0),j=i.element,l=j.getFirst(),d=this;j.disableContextMenu();this.element=j;this._={editor:a,panel:i,parentElement:b,definition:c,document:h,iframe:l,children:[],dir:a.lang.dir};a.on("mode",f);a.on("resize",f);h.getWindow().on("resize",f)},proto:{addBlock:function(a,b){return this._.panel.addBlock(a,b)},addListBlock:function(a,b){return this._.panel.addListBlock(a,b)},getBlock:function(a){return this._.panel.getBlock(a)},
showBlock:function(a,b,c,i,f,h){var j=this._.panel,l=j.showBlock(a);this.allowBlur(!1);a=this._.editor.editable();this._.returnFocus=a.hasFocus?a:new CKEDITOR.dom.element(CKEDITOR.document.$.activeElement);var d=this.element,a=this._.iframe,a=CKEDITOR.env.ie?a:new CKEDITOR.dom.window(a.$.contentWindow),g=d.getDocument(),o=this._.parentElement.getPositionedAncestor(),p=b.getDocumentPosition(g),g=o?o.getDocumentPosition(g):{x:0,y:0},m="rtl"==this._.dir,e=p.x+(i||0)-g.x,k=p.y+(f||0)-g.y;if(m&&(1==c||
4==c))e+=b.$.offsetWidth;else if(!m&&(2==c||3==c))e+=b.$.offsetWidth-1;if(3==c||4==c)k+=b.$.offsetHeight-1;this._.panel._.offsetParentId=b.getId();d.setStyles({top:k+"px",left:0,display:""});d.setOpacity(0);d.getFirst().removeStyle("width");this._.editor.focusManager.add(a);this._.blurSet||(CKEDITOR.event.useCapture=!0,a.on("blur",function(a){this.allowBlur()&&a.data.getPhase()==CKEDITOR.EVENT_PHASE_AT_TARGET&&(this.visible&&!this._.activeChild)&&(delete this._.returnFocus,this.hide())},this),a.on("focus",
function(){this._.focused=!0;this.hideChild();this.allowBlur(!0)},this),CKEDITOR.event.useCapture=!1,this._.blurSet=1);j.onEscape=CKEDITOR.tools.bind(function(a){if(this.onEscape&&this.onEscape(a)===false)return false},this);CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.tools.bind(function(){d.removeStyle("width");if(l.autoSize){var a=l.element.getDocument(),a=(CKEDITOR.env.webkit?l.element:a.getBody()).$.scrollWidth;CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&a>0)&&(a=a+((d.$.offsetWidth||0)-(d.$.clientWidth||
0)+3));d.setStyle("width",a+10+"px");a=l.element.$.scrollHeight;CKEDITOR.env.ie&&(CKEDITOR.env.quirks&&a>0)&&(a=a+((d.$.offsetHeight||0)-(d.$.clientHeight||0)+3));d.setStyle("height",a+"px");j._.currentBlock.element.setStyle("display","none").removeStyle("display")}else d.removeStyle("height");m&&(e=e-d.$.offsetWidth);d.setStyle("left",e+"px");var b=j.element.getWindow(),a=d.$.getBoundingClientRect(),b=b.getViewPaneSize(),c=a.width||a.right-a.left,f=a.height||a.bottom-a.top,i=m?a.right:b.width-a.left,
g=m?b.width-a.right:a.left;m?i<c&&(e=g>c?e+c:b.width>c?e-a.left:e-a.right+b.width):i<c&&(e=g>c?e-c:b.width>c?e-a.right+b.width:e-a.left);c=a.top;b.height-a.top<f&&(k=c>f?k-f:b.height>f?k-a.bottom+b.height:k-a.top);if(CKEDITOR.env.ie){b=a=new CKEDITOR.dom.element(d.$.offsetParent);b.getName()=="html"&&(b=b.getDocument().getBody());b.getComputedStyle("direction")=="rtl"&&(e=CKEDITOR.env.ie8Compat?e-d.getDocument().getDocumentElement().$.scrollLeft*2:e-(a.$.scrollWidth-a.$.clientWidth))}var a=d.getFirst(),
n;(n=a.getCustomData("activePanel"))&&n.onHide&&n.onHide.call(this,1);a.setCustomData("activePanel",this);d.setStyles({top:k+"px",left:e+"px"});d.setOpacity(1);h&&h()},this);j.isLoaded?a():j.onLoad=a;CKEDITOR.tools.setTimeout(function(){var a=CKEDITOR.env.webkit&&CKEDITOR.document.getWindow().getScrollPosition().y;this.focus();l.element.focus();if(CKEDITOR.env.webkit)CKEDITOR.document.getBody().$.scrollTop=a;this.allowBlur(true);this._.editor.fire("panelShow",this)},0,this)},CKEDITOR.env.air?200:
0,this);this.visible=1;this.onShow&&this.onShow.call(this)},focus:function(){if(CKEDITOR.env.webkit){var a=CKEDITOR.document.getActive();!a.equals(this._.iframe)&&a.$.blur()}(this._.lastFocused||this._.iframe.getFrameDocument().getWindow()).focus()},blur:function(){var a=this._.iframe.getFrameDocument().getActive();a.is("a")&&(this._.lastFocused=a)},hide:function(a){if(this.visible&&(!this.onHide||!0!==this.onHide.call(this))){this.hideChild();CKEDITOR.env.gecko&&this._.iframe.getFrameDocument().$.activeElement.blur();
this.element.setStyle("display","none");this.visible=0;this.element.getFirst().removeCustomData("activePanel");if(a=a&&this._.returnFocus)CKEDITOR.env.webkit&&a.type&&a.getWindow().$.focus(),a.focus();delete this._.lastFocused;this._.editor.fire("panelHide",this)}},allowBlur:function(a){var b=this._.panel;void 0!=a&&(b.allowBlur=a);return b.allowBlur},showAsChild:function(a,b,c,g,f,h){this._.activeChild==a&&a._.panel._.offsetParentId==c.getId()||(this.hideChild(),a.onHide=CKEDITOR.tools.bind(function(){CKEDITOR.tools.setTimeout(function(){this._.focused||
this.hide()},0,this)},this),this._.activeChild=a,this._.focused=!1,a.showBlock(b,c,g,f,h),this.blur(),(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat)&&setTimeout(function(){a.element.getChild(0).$.style.cssText+=""},100))},hideChild:function(a){var b=this._.activeChild;b&&(delete b.onHide,delete this._.activeChild,b.hide(),a&&this.focus())}}});CKEDITOR.on("instanceDestroyed",function(){var a=CKEDITOR.tools.isEmpty(CKEDITOR.instances),b;for(b in g){var c=g[b];a?c.destroy():c.element.hide()}a&&(g=
{})})})();CKEDITOR.plugins.add("colorbutton",{requires:"panelbutton,floatpanel",init:function(c){function m(l,g,e,h){var j=new CKEDITOR.style(i["colorButton_"+g+"Style"]),k=CKEDITOR.tools.getNextId()+"_colorBox";c.ui.add(l,CKEDITOR.UI_PANELBUTTON,{label:e,title:e,modes:{wysiwyg:1},editorFocus:0,toolbar:"colors,"+h,allowedContent:j,requiredContent:j,panel:{css:CKEDITOR.skin.getPath("editor"),attributes:{role:"listbox","aria-label":f.panelTitle}},onBlock:function(a,b){b.autoSize=!0;b.element.addClass("cke_colorblock");
b.element.setHtml(o(a,g,k));b.element.getDocument().getBody().setStyle("overflow","hidden");CKEDITOR.ui.fire("ready",this);var d=b.keys,e="rtl"==c.lang.dir;d[e?37:39]="next";d[40]="next";d[9]="next";d[e?39:37]="prev";d[38]="prev";d[CKEDITOR.SHIFT+9]="prev";d[32]="click"},refresh:function(){c.activeFilter.check(j)||this.setState(CKEDITOR.TRISTATE_DISABLED)},onOpen:function(){var a=c.getSelection(),a=a&&a.getStartElement(),a=c.elementPath(a),b;if(a){a=a.block||a.blockLimit||c.document.getBody();do b=
a&&a.getComputedStyle("back"==g?"background-color":"color")||"transparent";while("back"==g&&"transparent"==b&&a&&(a=a.getParent()));if(!b||"transparent"==b)b="#ffffff";this._.panel._.iframe.getFrameDocument().getById(k).setStyle("background-color",b);return b}}})}function o(l,g,e){var h=[],j=i.colorButton_colors.split(","),k=CKEDITOR.tools.addFunction(function(a,b){if("?"==a){var e=arguments.callee,d=function(a){this.removeListener("ok",d);this.removeListener("cancel",d);"ok"==a.name&&e(this.getContentElement("picker",
"selectedColor").getValue(),b)};c.openDialog("colordialog",function(){this.on("ok",d);this.on("cancel",d)})}else{c.focus();l.hide();c.fire("saveSnapshot");c.removeStyle(new CKEDITOR.style(i["colorButton_"+b+"Style"],{color:"inherit"}));if(a){var f=i["colorButton_"+b+"Style"];f.childRule="back"==b?function(a){return n(a)}:function(a){return!(a.is("a")||a.getElementsByTag("a").count())||n(a)};c.applyStyle(new CKEDITOR.style(f,{color:a}))}c.fire("saveSnapshot")}});h.push('<a class="cke_colorauto" _cke_focus=1 hidefocus=true title="',
f.auto,'" onclick="CKEDITOR.tools.callFunction(',k,",null,'",g,"');return false;\" href=\"javascript:void('",f.auto,'\')" role="option"><table role="presentation" cellspacing=0 cellpadding=0 width="100%"><tr><td><span class="cke_colorbox" id="',e,'"></span></td><td colspan=7 align=center>',f.auto,'</td></tr></table></a><table role="presentation" cellspacing=0 cellpadding=0 width="100%">');for(e=0;e<j.length;e++){0===e%8&&h.push("</tr><tr>");var a=j[e].split("/"),b=a[0],d=a[1]||b;a[1]||(b="#"+b.replace(/^(.)(.)(.)$/,
"$1$1$2$2$3$3"));a=c.lang.colorbutton.colors[d]||d;h.push('<td><a class="cke_colorbox" _cke_focus=1 hidefocus=true title="',a,'" onclick="CKEDITOR.tools.callFunction(',k,",'",b,"','",g,"'); return false;\" href=\"javascript:void('",a,'\')" role="option"><span class="cke_colorbox" style="background-color:#',d,'"></span></a></td>')}(c.plugins.colordialog&&void 0===i.colorButton_enableMore||i.colorButton_enableMore)&&h.push('</tr><tr><td colspan=8 align=center><a class="cke_colormore" _cke_focus=1 hidefocus=true title="',
f.more,'" onclick="CKEDITOR.tools.callFunction(',k,",'?','",g,"');return false;\" href=\"javascript:void('",f.more,"')\"",' role="option">',f.more,"</a></td>");h.push("</tr></table>");return h.join("")}function n(c){return"false"==c.getAttribute("contentEditable")||c.getAttribute("data-nostyle")}var i=c.config,f=c.lang.colorbutton;CKEDITOR.env.hc||(m("TextColor","fore",f.textColorTitle,10),m("BGColor","back",f.bgColorTitle,20))}});CKEDITOR.config.colorButton_colors="000,800000,8B4513,2F4F4F,008080,000080,4B0082,696969,B22222,A52A2A,DAA520,006400,40E0D0,0000CD,800080,808080,F00,FF8C00,FFD700,008000,0FF,00F,EE82EE,A9A9A9,FFA07A,FFA500,FFFF00,00FF00,AFEEEE,ADD8E6,DDA0DD,D3D3D3,FFF0F5,FAEBD7,FFFFE0,F0FFF0,F0FFFF,F0F8FF,E6E6FA,FFF";
CKEDITOR.config.colorButton_foreStyle={element:"span",styles:{color:"#(color)"},overrides:[{element:"font",attributes:{color:null}}]};CKEDITOR.config.colorButton_backStyle={element:"span",styles:{"background-color":"#(color)"}};CKEDITOR.plugins.colordialog={requires:"dialog",init:function(b){var c=new CKEDITOR.dialogCommand("colordialog");c.editorFocus=!1;b.addCommand("colordialog",c);CKEDITOR.dialog.add("colordialog",this.path+"dialogs/colordialog.js");b.getColorFromDialog=function(c,f){var d=function(a){this.removeListener("ok",d);this.removeListener("cancel",d);a="ok"==a.name?this.getValueOf("picker","selectedColor"):null;c.call(f,a)},e=function(a){a.on("ok",d);a.on("cancel",d)};b.execCommand("colordialog");if(b._.storedDialogs&&
b._.storedDialogs.colordialog)e(b._.storedDialogs.colordialog);else CKEDITOR.on("dialogDefinition",function(a){if("colordialog"==a.data.name){var b=a.data.definition;a.removeListener();b.onLoad=CKEDITOR.tools.override(b.onLoad,function(a){return function(){e(this);b.onLoad=a;"function"==typeof a&&a.call(this)}})}})}}};CKEDITOR.plugins.add("colordialog",CKEDITOR.plugins.colordialog);(function(){CKEDITOR.plugins.add("templates",{requires:"dialog",init:function(a){CKEDITOR.dialog.add("templates",CKEDITOR.getUrl(this.path+"dialogs/templates.js"));a.addCommand("templates",new CKEDITOR.dialogCommand("templates"));a.ui.addButton&&a.ui.addButton("Templates",{label:a.lang.templates.button,command:"templates",toolbar:"doctools,10"})}});var c={},f={};CKEDITOR.addTemplates=function(a,d){c[a]=d};CKEDITOR.getTemplates=function(a){return c[a]};CKEDITOR.loadTemplates=function(a,d){for(var e=
[],b=0,c=a.length;b<c;b++)f[a[b]]||(e.push(a[b]),f[a[b]]=1);e.length?CKEDITOR.scriptLoader.load(e,d):setTimeout(d,0)}})();CKEDITOR.config.templates_files=[CKEDITOR.getUrl("plugins/templates/templates/default.js")];CKEDITOR.config.templates_replaceContent=!0;CKEDITOR.plugins.add("menu",{requires:"floatpanel",beforeInit:function(g){for(var h=g.config.menu_groups.split(","),m=g._.menuGroups={},l=g._.menuItems={},a=0;a<h.length;a++)m[h[a]]=a+1;g.addMenuGroup=function(b,a){m[b]=a||100};g.addMenuItem=function(a,c){m[c.group]&&(l[a]=new CKEDITOR.menuItem(this,a,c))};g.addMenuItems=function(a){for(var c in a)this.addMenuItem(c,a[c])};g.getMenuItem=function(a){return l[a]};g.removeMenuItem=function(a){delete l[a]}}});
(function(){function g(a){a.sort(function(a,c){return a.group<c.group?-1:a.group>c.group?1:a.order<c.order?-1:a.order>c.order?1:0})}var h='<span class="cke_menuitem"><a id="{id}" class="cke_menubutton cke_menubutton__{name} cke_menubutton_{state} {cls}" href="{href}" title="{title}" tabindex="-1"_cke_focus=1 hidefocus="true" role="{role}" aria-haspopup="{hasPopup}" aria-disabled="{disabled}" {ariaChecked}';if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)h+=' onkeypress="return false;"';
CKEDITOR.env.gecko&&(h+=' onblur="this.style.cssText = this.style.cssText;"');var h=h+(' onmouseover="CKEDITOR.tools.callFunction({hoverFn},{index});" onmouseout="CKEDITOR.tools.callFunction({moveOutFn},{index});" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},{index}); return false;">'),m=CKEDITOR.addTemplate("menuItem",h+'<span class="cke_menubutton_inner"><span class="cke_menubutton_icon"><span class="cke_button_icon cke_button__{iconName}_icon" style="{iconStyle}"></span></span><span class="cke_menubutton_label">{label}</span>{arrowHtml}</span></a></span>'),
l=CKEDITOR.addTemplate("menuArrow",'<span class="cke_menuarrow"><span>{label}</span></span>');CKEDITOR.menu=CKEDITOR.tools.createClass({$:function(a,b){b=this._.definition=b||{};this.id=CKEDITOR.tools.getNextId();this.editor=a;this.items=[];this._.listeners=[];this._.level=b.level||1;var c=CKEDITOR.tools.extend({},b.panel,{css:[CKEDITOR.skin.getPath("editor")],level:this._.level-1,block:{}}),k=c.block.attributes=c.attributes||{};!k.role&&(k.role="menu");this._.panelDefinition=c},_:{onShow:function(){var a=
this.editor.getSelection(),b=a&&a.getStartElement(),c=this.editor.elementPath(),k=this._.listeners;this.removeAll();for(var e=0;e<k.length;e++){var j=k[e](b,a,c);if(j)for(var i in j){var f=this.editor.getMenuItem(i);if(f&&(!f.command||this.editor.getCommand(f.command).state))f.state=j[i],this.add(f)}}},onClick:function(a){this.hide();if(a.onClick)a.onClick();else a.command&&this.editor.execCommand(a.command)},onEscape:function(a){var b=this.parent;b?b._.panel.hideChild(1):27==a&&this.hide(1);return!1},
onHide:function(){this.onHide&&this.onHide()},showSubMenu:function(a){var b=this._.subMenu,c=this.items[a];if(c=c.getItems&&c.getItems()){b?b.removeAll():(b=this._.subMenu=new CKEDITOR.menu(this.editor,CKEDITOR.tools.extend({},this._.definition,{level:this._.level+1},!0)),b.parent=this,b._.onClick=CKEDITOR.tools.bind(this._.onClick,this));for(var k in c){var e=this.editor.getMenuItem(k);e&&(e.state=c[k],b.add(e))}var j=this._.panel.getBlock(this.id).element.getDocument().getById(this.id+(""+a));setTimeout(function(){b.show(j,
2)},0)}else this._.panel.hideChild(1)}},proto:{add:function(a){a.order||(a.order=this.items.length);this.items.push(a)},removeAll:function(){this.items=[]},show:function(a,b,c,k){if(!this.parent&&(this._.onShow(),!this.items.length))return;var b=b||("rtl"==this.editor.lang.dir?2:1),e=this.items,j=this.editor,i=this._.panel,f=this._.element;if(!i){i=this._.panel=new CKEDITOR.ui.floatPanel(this.editor,CKEDITOR.document.getBody(),this._.panelDefinition,this._.level);i.onEscape=CKEDITOR.tools.bind(function(a){if(!1===
this._.onEscape(a))return!1},this);i.onShow=function(){i._.panel.getHolderElement().getParent().addClass("cke cke_reset_all")};i.onHide=CKEDITOR.tools.bind(function(){this._.onHide&&this._.onHide()},this);f=i.addBlock(this.id,this._.panelDefinition.block);f.autoSize=!0;var d=f.keys;d[40]="next";d[9]="next";d[38]="prev";d[CKEDITOR.SHIFT+9]="prev";d["rtl"==j.lang.dir?37:39]=CKEDITOR.env.ie?"mouseup":"click";d[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(d[13]="mouseup");f=this._.element=
f.element;d=f.getDocument();d.getBody().setStyle("overflow","hidden");d.getElementsByTag("html").getItem(0).setStyle("overflow","hidden");this._.itemOverFn=CKEDITOR.tools.addFunction(function(a){clearTimeout(this._.showSubTimeout);this._.showSubTimeout=CKEDITOR.tools.setTimeout(this._.showSubMenu,j.config.menu_subMenuDelay||400,this,[a])},this);this._.itemOutFn=CKEDITOR.tools.addFunction(function(){clearTimeout(this._.showSubTimeout)},this);this._.itemClickFn=CKEDITOR.tools.addFunction(function(a){var b=
this.items[a];if(b.state==CKEDITOR.TRISTATE_DISABLED)this.hide(1);else if(b.getItems)this._.showSubMenu(a);else this._.onClick(b)},this)}g(e);for(var d=j.elementPath(),d=['<div class="cke_menu'+(d&&d.direction()!=j.lang.dir?" cke_mixed_dir_content":"")+'" role="presentation">'],h=e.length,m=h&&e[0].group,l=0;l<h;l++){var n=e[l];m!=n.group&&(d.push('<div class="cke_menuseparator" role="separator"></div>'),m=n.group);n.render(this,l,d)}d.push("</div>");f.setHtml(d.join(""));CKEDITOR.ui.fire("ready",
this);this.parent?this.parent._.panel.showAsChild(i,this.id,a,b,c,k):i.showBlock(this.id,a,b,c,k);j.fire("menuShow",[i])},addListener:function(a){this._.listeners.push(a)},hide:function(a){this._.onHide&&this._.onHide();this._.panel&&this._.panel.hide(a)}}});CKEDITOR.menuItem=CKEDITOR.tools.createClass({$:function(a,b,c){CKEDITOR.tools.extend(this,c,{order:0,className:"cke_menubutton__"+b});this.group=a._.menuGroups[this.group];this.editor=a;this.name=b},proto:{render:function(a,b,c){var h=a.id+(""+
b),e="undefined"==typeof this.state?CKEDITOR.TRISTATE_OFF:this.state,j="",i=e==CKEDITOR.TRISTATE_ON?"on":e==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";this.role in{menuitemcheckbox:1,menuitemradio:1}&&(j=' aria-checked="'+(e==CKEDITOR.TRISTATE_ON?"true":"false")+'"');var f=this.getItems,d="&#"+("rtl"==this.editor.lang.dir?"9668":"9658")+";",g=this.name;this.icon&&!/\./.test(this.icon)&&(g=this.icon);a={id:h,name:this.name,iconName:g,label:this.label,cls:this.className||"",state:i,hasPopup:f?"true":
"false",disabled:e==CKEDITOR.TRISTATE_DISABLED,title:this.label,href:"javascript:void('"+(this.label||"").replace("'")+"')",hoverFn:a._.itemOverFn,moveOutFn:a._.itemOutFn,clickFn:a._.itemClickFn,index:b,iconStyle:CKEDITOR.skin.getIconStyle(g,"rtl"==this.editor.lang.dir,g==this.icon?null:this.icon,this.iconOffset),arrowHtml:f?l.output({label:d}):"",role:this.role?this.role:"menuitem",ariaChecked:j};m.output(a,c)}}})})();CKEDITOR.config.menu_groups="clipboard,form,tablecell,tablecellproperties,tablerow,tablecolumn,table,anchor,link,image,flash,checkbox,radio,textfield,hiddenfield,imagebutton,button,select,textarea,div";CKEDITOR.plugins.add("contextmenu",{requires:"menu",onLoad:function(){CKEDITOR.plugins.contextMenu=CKEDITOR.tools.createClass({base:CKEDITOR.menu,$:function(a){this.base.call(this,a,{panel:{className:"cke_menu_panel",attributes:{"aria-label":a.lang.contextmenu.options}}})},proto:{addTarget:function(a,c){a.on("contextmenu",function(a){var a=a.data,b=CKEDITOR.env.webkit?d:CKEDITOR.env.mac?a.$.metaKey:a.$.ctrlKey;if(!c||!b){a.preventDefault();var e=a.getTarget().getDocument(),f=a.getTarget().getDocument().getDocumentElement(),
b=!e.equals(CKEDITOR.document),e=e.getWindow().getScrollPosition(),g=b?a.$.clientX:a.$.pageX||e.x+a.$.clientX,h=b?a.$.clientY:a.$.pageY||e.y+a.$.clientY;CKEDITOR.tools.setTimeout(function(){this.open(f,null,g,h)},CKEDITOR.env.ie?200:0,this)}},this);if(CKEDITOR.env.webkit){var d,b=function(){d=0};a.on("keydown",function(a){d=CKEDITOR.env.mac?a.data.$.metaKey:a.data.$.ctrlKey});a.on("keyup",b);a.on("contextmenu",b)}},open:function(a,c,d,b){this.editor.focus();a=a||CKEDITOR.document.getDocumentElement();
this.editor.selectionChange(1);this.show(a,c,d,b)}}})},beforeInit:function(a){var c=a.contextMenu=new CKEDITOR.plugins.contextMenu(a);a.on("contentDom",function(){c.addTarget(a.editable(),!1!==a.config.browserContextMenuOnCtrl)});a.addCommand("contextMenu",{exec:function(){a.contextMenu.open(a.document.getBody())}});a.setKeystroke(CKEDITOR.SHIFT+121,"contextMenu");a.setKeystroke(CKEDITOR.CTRL+CKEDITOR.SHIFT+121,"contextMenu")}});(function(){CKEDITOR.plugins.add("div",{requires:"dialog",init:function(a){if(!a.blockless){var c=a.lang.div,b="div(*)";CKEDITOR.dialog.isTabEnabled(a,"editdiv","advanced")&&(b+=";div[dir,id,lang,title]{*}");a.addCommand("creatediv",new CKEDITOR.dialogCommand("creatediv",{allowedContent:b,requiredContent:"div",contextSensitive:!0,refresh:function(a,c){this.setState("div"in(a.config.div_wrapTable?c.root:c.blockLimit).getDtd()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}}));a.addCommand("editdiv",
new CKEDITOR.dialogCommand("editdiv",{requiredContent:"div"}));a.addCommand("removediv",{requiredContent:"div",exec:function(a){function c(b){if((b=CKEDITOR.plugins.div.getSurroundDiv(a,b))&&!b.data("cke-div-added"))f.push(b),b.data("cke-div-added")}for(var b=a.getSelection(),g=b&&b.getRanges(),e,h=b.createBookmarks(),f=[],d=0;d<g.length;d++)e=g[d],e.collapsed?c(b.getStartElement()):(e=new CKEDITOR.dom.walker(e),e.evaluator=c,e.lastForward());for(d=0;d<f.length;d++)f[d].remove(!0);b.selectBookmarks(h)}});
a.ui.addButton&&a.ui.addButton("CreateDiv",{label:c.toolbar,command:"creatediv",toolbar:"blocks,50"});a.addMenuItems&&(a.addMenuItems({editdiv:{label:c.edit,command:"editdiv",group:"div",order:1},removediv:{label:c.remove,command:"removediv",group:"div",order:5}}),a.contextMenu&&a.contextMenu.addListener(function(b){return!b||b.isReadOnly()?null:CKEDITOR.plugins.div.getSurroundDiv(a)?{editdiv:CKEDITOR.TRISTATE_OFF,removediv:CKEDITOR.TRISTATE_OFF}:null}));CKEDITOR.dialog.add("creatediv",this.path+
"dialogs/div.js");CKEDITOR.dialog.add("editdiv",this.path+"dialogs/div.js")}}});CKEDITOR.plugins.div={getSurroundDiv:function(a,c){var b=a.elementPath(c);return a.elementPath(b.blockLimit).contains(function(a){return a.is("div")&&!a.isReadOnly()},1)}}})();CKEDITOR.plugins.add("resize",{init:function(b){var f,g,n,o,a=b.config,q=b.ui.spaceId("resizer"),h=b.element?b.element.getDirection(1):"ltr";!a.resize_dir&&(a.resize_dir="vertical");void 0==a.resize_maxWidth&&(a.resize_maxWidth=3E3);void 0==a.resize_maxHeight&&(a.resize_maxHeight=3E3);void 0==a.resize_minWidth&&(a.resize_minWidth=750);void 0==a.resize_minHeight&&(a.resize_minHeight=250);if(!1!==a.resize_enabled){var c=null,i=("both"==a.resize_dir||"horizontal"==a.resize_dir)&&a.resize_minWidth!=a.resize_maxWidth,
l=("both"==a.resize_dir||"vertical"==a.resize_dir)&&a.resize_minHeight!=a.resize_maxHeight,j=function(d){var e=f,m=g,c=e+(d.data.$.screenX-n)*("rtl"==h?-1:1),d=m+(d.data.$.screenY-o);i&&(e=Math.max(a.resize_minWidth,Math.min(c,a.resize_maxWidth)));l&&(m=Math.max(a.resize_minHeight,Math.min(d,a.resize_maxHeight)));b.resize(i?e:null,m)},k=function(){CKEDITOR.document.removeListener("mousemove",j);CKEDITOR.document.removeListener("mouseup",k);b.document&&(b.document.removeListener("mousemove",j),b.document.removeListener("mouseup",
k))},p=CKEDITOR.tools.addFunction(function(d){c||(c=b.getResizable());f=c.$.offsetWidth||0;g=c.$.offsetHeight||0;n=d.screenX;o=d.screenY;a.resize_minWidth>f&&(a.resize_minWidth=f);a.resize_minHeight>g&&(a.resize_minHeight=g);CKEDITOR.document.on("mousemove",j);CKEDITOR.document.on("mouseup",k);b.document&&(b.document.on("mousemove",j),b.document.on("mouseup",k));d.preventDefault&&d.preventDefault()});b.on("destroy",function(){CKEDITOR.tools.removeFunction(p)});b.on("uiSpace",function(a){if("bottom"==
a.data.space){var e="";i&&!l&&(e=" cke_resizer_horizontal");!i&&l&&(e=" cke_resizer_vertical");var c='<span id="'+q+'" class="cke_resizer'+e+" cke_resizer_"+h+'" title="'+CKEDITOR.tools.htmlEncode(b.lang.common.resize)+'" onmousedown="CKEDITOR.tools.callFunction('+p+', event)">'+("ltr"==h?"◢":"◣")+"</span>";"ltr"==h&&"ltr"==e?a.data.html+=c:a.data.html=c+a.data.html}},b,null,100);b.on("maximize",function(a){b.ui.space("resizer")[a.data==CKEDITOR.TRISTATE_ON?"hide":"show"]()})}}});(function(){function w(a){function d(){for(var b=g(),e=CKEDITOR.tools.clone(a.config.toolbarGroups)||n(a),f=0;f<e.length;f++){var k=e[f];if("/"!=k){"string"==typeof k&&(k=e[f]={name:k});var i,d=k.groups;if(d)for(var h=0;h<d.length;h++)i=d[h],(i=b[i])&&c(k,i);(i=b[k.name])&&c(k,i)}}return e}function g(){var b={},c,f,e;for(c in a.ui.items)f=a.ui.items[c],e=f.toolbar||"others",e=e.split(","),f=e[0],e=parseInt(e[1]||-1,10),b[f]||(b[f]=[]),b[f].push({name:c,order:e});for(f in b)b[f]=b[f].sort(function(b,
a){return b.order==a.order?0:0>a.order?-1:0>b.order?1:b.order<a.order?-1:1});return b}function c(c,e){if(e.length){c.items?c.items.push(a.ui.create("-")):c.items=[];for(var f;f=e.shift();)if(f="string"==typeof f?f:f.name,!b||-1==CKEDITOR.tools.indexOf(b,f))(f=a.ui.create(f))&&a.addFeature(f)&&c.items.push(f)}}function h(b){var a=[],e,d,h;for(e=0;e<b.length;++e)d=b[e],h={},"/"==d?a.push(d):CKEDITOR.tools.isArray(d)?(c(h,CKEDITOR.tools.clone(d)),a.push(h)):d.items&&(c(h,CKEDITOR.tools.clone(d.items)),
h.name=d.name,a.push(h));return a}var b=a.config.removeButtons,b=b&&b.split(","),e=a.config.toolbar;"string"==typeof e&&(e=a.config["toolbar_"+e]);return a.toolbar=e?h(e):d()}function n(a){return a._.toolbarGroups||(a._.toolbarGroups=[{name:"document",groups:["mode","document","doctools"]},{name:"clipboard",groups:["clipboard","undo"]},{name:"editing",groups:["find","selection","spellchecker"]},{name:"forms"},"/",{name:"basicstyles",groups:["basicstyles","cleanup"]},{name:"paragraph",groups:["list",
"indent","blocks","align","bidi"]},{name:"links"},{name:"insert"},"/",{name:"styles"},{name:"colors"},{name:"tools"},{name:"others"},{name:"about"}])}var u=function(){this.toolbars=[];this.focusCommandExecuted=!1};u.prototype.focus=function(){for(var a=0,d;d=this.toolbars[a++];)for(var g=0,c;c=d.items[g++];)if(c.focus){c.focus();return}};var x={modes:{wysiwyg:1,source:1},readOnly:1,exec:function(a){a.toolbox&&(a.toolbox.focusCommandExecuted=!0,CKEDITOR.env.ie||CKEDITOR.env.air?setTimeout(function(){a.toolbox.focus()},
100):a.toolbox.focus())}};CKEDITOR.plugins.add("toolbar",{requires:"button",init:function(a){var d,g=function(c,h){var b,e="rtl"==a.lang.dir,j=a.config.toolbarGroupCycling,o=e?37:39,e=e?39:37,j=void 0===j||j;switch(h){case 9:case CKEDITOR.SHIFT+9:for(;!b||!b.items.length;)if(b=9==h?(b?b.next:c.toolbar.next)||a.toolbox.toolbars[0]:(b?b.previous:c.toolbar.previous)||a.toolbox.toolbars[a.toolbox.toolbars.length-1],b.items.length)for(c=b.items[d?b.items.length-1:0];c&&!c.focus;)(c=d?c.previous:c.next)||
(b=0);c&&c.focus();return!1;case o:b=c;do b=b.next,!b&&j&&(b=c.toolbar.items[0]);while(b&&!b.focus);b?b.focus():g(c,9);return!1;case 40:return c.button&&c.button.hasArrow?(a.once("panelShow",function(b){b.data._.panel._.currentBlock.onKeyDown(40)}),c.execute()):g(c,40==h?o:e),!1;case e:case 38:b=c;do b=b.previous,!b&&j&&(b=c.toolbar.items[c.toolbar.items.length-1]);while(b&&!b.focus);b?b.focus():(d=1,g(c,CKEDITOR.SHIFT+9),d=0);return!1;case 27:return a.focus(),!1;case 13:case 32:return c.execute(),
!1}return!0};a.on("uiSpace",function(c){if(c.data.space==a.config.toolbarLocation){c.removeListener();a.toolbox=new u;var d=CKEDITOR.tools.getNextId(),b=['<span id="',d,'" class="cke_voice_label">',a.lang.toolbar.toolbars,"</span>",'<span id="'+a.ui.spaceId("toolbox")+'" class="cke_toolbox" role="group" aria-labelledby="',d,'" onmousedown="return false;">'],d=!1!==a.config.toolbarStartupExpanded,e,j;a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&b.push('<span class="cke_toolbox_main"'+
(d?">":' style="display:none">'));for(var o=a.toolbox.toolbars,f=w(a),k=0;k<f.length;k++){var i,l=0,r,m=f[k],s;if(m)if(e&&(b.push("</span>"),j=e=0),"/"===m)b.push('<span class="cke_toolbar_break"></span>');else{s=m.items||m;for(var t=0;t<s.length;t++){var p=s[t],n;if(p)if(p.type==CKEDITOR.UI_SEPARATOR)j=e&&p;else{n=!1!==p.canGroup;if(!l){i=CKEDITOR.tools.getNextId();l={id:i,items:[]};r=m.name&&(a.lang.toolbar.toolbarGroups[m.name]||m.name);b.push('<span id="',i,'" class="cke_toolbar"',r?' aria-labelledby="'+
i+'_label"':"",' role="toolbar">');r&&b.push('<span id="',i,'_label" class="cke_voice_label">',r,"</span>");b.push('<span class="cke_toolbar_start"></span>');var q=o.push(l)-1;0<q&&(l.previous=o[q-1],l.previous.next=l)}n?e||(b.push('<span class="cke_toolgroup" role="presentation">'),e=1):e&&(b.push("</span>"),e=0);i=function(c){c=c.render(a,b);q=l.items.push(c)-1;if(q>0){c.previous=l.items[q-1];c.previous.next=c}c.toolbar=l;c.onkey=g;c.onfocus=function(){a.toolbox.focusCommandExecuted||a.focus()}};
j&&(i(j),j=0);i(p)}}e&&(b.push("</span>"),j=e=0);l&&b.push('<span class="cke_toolbar_end"></span></span>')}}a.config.toolbarCanCollapse&&b.push("</span>");if(a.config.toolbarCanCollapse&&a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var v=CKEDITOR.tools.addFunction(function(){a.execCommand("toolbarCollapse")});a.on("destroy",function(){CKEDITOR.tools.removeFunction(v)});a.addCommand("toolbarCollapse",{readOnly:1,exec:function(b){var a=b.ui.space("toolbar_collapser"),c=a.getPrevious(),e=b.ui.space("contents"),
d=c.getParent(),f=parseInt(e.$.style.height,10),h=d.$.offsetHeight,g=a.hasClass("cke_toolbox_collapser_min");g?(c.show(),a.removeClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarCollapse)):(c.hide(),a.addClass("cke_toolbox_collapser_min"),a.setAttribute("title",b.lang.toolbar.toolbarExpand));a.getFirst().setText(g?"▲":"◀");e.setStyle("height",f-(d.$.offsetHeight-h)+"px");b.fire("resize")},modes:{wysiwyg:1,source:1}});a.setKeystroke(CKEDITOR.ALT+(CKEDITOR.env.ie||CKEDITOR.env.webkit?
189:109),"toolbarCollapse");b.push('<a title="'+(d?a.lang.toolbar.toolbarCollapse:a.lang.toolbar.toolbarExpand)+'" id="'+a.ui.spaceId("toolbar_collapser")+'" tabIndex="-1" class="cke_toolbox_collapser');d||b.push(" cke_toolbox_collapser_min");b.push('" onclick="CKEDITOR.tools.callFunction('+v+')">','<span class="cke_arrow">&#9650;</span>',"</a>")}b.push("</span>");c.data.html+=b.join("")}});a.on("destroy",function(){if(this.toolbox){var a,d=0,b,e,g;for(a=this.toolbox.toolbars;d<a.length;d++){e=a[d].items;
for(b=0;b<e.length;b++)g=e[b],g.clickFn&&CKEDITOR.tools.removeFunction(g.clickFn),g.keyDownFn&&CKEDITOR.tools.removeFunction(g.keyDownFn)}}});a.on("uiReady",function(){var c=a.ui.space("toolbox");c&&a.focusManager.add(c,1)});a.addCommand("toolbarFocus",x);a.setKeystroke(CKEDITOR.ALT+121,"toolbarFocus");a.ui.add("-",CKEDITOR.UI_SEPARATOR,{});a.ui.addHandler(CKEDITOR.UI_SEPARATOR,{create:function(){return{render:function(a,d){d.push('<span class="cke_toolbar_separator" role="separator"></span>');return{}}}}})}});
CKEDITOR.ui.prototype.addToolbarGroup=function(a,d,g){var c=n(this.editor),h=0===d,b={name:a};if(g){if(g=CKEDITOR.tools.search(c,function(a){return a.name==g})){!g.groups&&(g.groups=[]);if(d&&(d=CKEDITOR.tools.indexOf(g.groups,d),0<=d)){g.groups.splice(d+1,0,a);return}h?g.groups.splice(0,0,a):g.groups.push(a);return}d=null}d&&(d=CKEDITOR.tools.indexOf(c,function(a){return a.name==d}));h?c.splice(0,0,a):"number"==typeof d?c.splice(d+1,0,b):c.push(a)}})();CKEDITOR.UI_SEPARATOR="separator";
CKEDITOR.config.toolbarLocation="top";(function(){var k;function n(a,c){function j(d){d=i.list[d];if(d.equals(a.editable())||"true"==d.getAttribute("contenteditable")){var e=a.createRange();e.selectNodeContents(d);e.select()}else a.getSelection().selectElement(d);a.focus()}function s(){l&&l.setHtml(o);delete i.list}var m=a.ui.spaceId("path"),l,i=a._.elementsPath,n=i.idBase;c.html+='<span id="'+m+'_label" class="cke_voice_label">'+a.lang.elementspath.eleLabel+'</span><span id="'+m+'" class="cke_path" role="group" aria-labelledby="'+m+
'_label">'+o+"</span>";a.on("uiReady",function(){var d=a.ui.space("path");d&&a.focusManager.add(d,1)});i.onClick=j;var t=CKEDITOR.tools.addFunction(j),u=CKEDITOR.tools.addFunction(function(d,e){var g=i.idBase,b,e=new CKEDITOR.dom.event(e);b="rtl"==a.lang.dir;switch(e.getKeystroke()){case b?39:37:case 9:return(b=CKEDITOR.document.getById(g+(d+1)))||(b=CKEDITOR.document.getById(g+"0")),b.focus(),!1;case b?37:39:case CKEDITOR.SHIFT+9:return(b=CKEDITOR.document.getById(g+(d-1)))||(b=CKEDITOR.document.getById(g+
(i.list.length-1))),b.focus(),!1;case 27:return a.focus(),!1;case 13:case 32:return j(d),!1}return!0});a.on("selectionChange",function(){a.editable();for(var d=[],e=i.list=[],g=[],b=i.filters,c=!0,j=a.elementPath().elements,f,k=j.length;k--;){var h=j[k],p=0;f=h.data("cke-display-name")?h.data("cke-display-name"):h.data("cke-real-element-type")?h.data("cke-real-element-type"):h.getName();c=h.hasAttribute("contenteditable")?"true"==h.getAttribute("contenteditable"):c;!c&&!h.hasAttribute("contenteditable")&&
(p=1);for(var q=0;q<b.length;q++){var r=b[q](h,f);if(!1===r){p=1;break}f=r||f}p||(e.unshift(h),g.unshift(f))}e=e.length;for(b=0;b<e;b++)f=g[b],c=a.lang.elementspath.eleTitle.replace(/%1/,f),f=v.output({id:n+b,label:c,text:f,jsTitle:"javascript:void('"+f+"')",index:b,keyDownFn:u,clickFn:t}),d.unshift(f);l||(l=CKEDITOR.document.getById(m));g=l;g.setHtml(d.join("")+o);a.fire("elementsPathUpdate",{space:g})});a.on("readOnly",s);a.on("contentDomUnload",s);a.addCommand("elementsPathFocus",k);a.setKeystroke(CKEDITOR.ALT+
122,"elementsPathFocus")}k={editorFocus:!1,readOnly:1,exec:function(a){(a=CKEDITOR.document.getById(a._.elementsPath.idBase+"0"))&&a.focus(CKEDITOR.env.ie||CKEDITOR.env.air)}};var o='<span class="cke_path_empty">&nbsp;</span>',c="";if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)c+=' onkeypress="return false;"';CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText = this.style.cssText;"');var v=CKEDITOR.addTemplate("pathItem",'<a id="{id}" href="{jsTitle}" tabindex="-1" class="cke_path_item" title="{label}"'+
(CKEDITOR.env.gecko&&10900>CKEDITOR.env.version?' onfocus="event.preventBubble();"':"")+c+' hidefocus="true"  onkeydown="return CKEDITOR.tools.callFunction({keyDownFn},{index}, event );" onclick="CKEDITOR.tools.callFunction({clickFn},{index}); return false;" role="button" aria-label="{label}">{text}</a>');CKEDITOR.plugins.add("elementspath",{init:function(a){a._.elementsPath={idBase:"cke_elementspath_"+CKEDITOR.tools.getNextNumber()+"_",filters:[]};a.on("uiSpace",function(c){"bottom"==c.data.space&&
n(a,c.data)})}})})();(function(){function l(e,c,b){b=e.config.forceEnterMode||b;"wysiwyg"==e.mode&&(c||(c=e.activeEnterMode),e.elementPath().isContextFor("p")||(c=CKEDITOR.ENTER_BR,b=1),e.fire("saveSnapshot"),c==CKEDITOR.ENTER_BR?o(e,c,null,b):p(e,c,null,b),e.fire("saveSnapshot"))}function q(e){for(var e=e.getSelection().getRanges(!0),c=e.length-1;0<c;c--)e[c].deleteContents();return e[0]}CKEDITOR.plugins.add("enterkey",{init:function(e){e.addCommand("enter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(c){l(c)}});
e.addCommand("shiftEnter",{modes:{wysiwyg:1},editorFocus:!1,exec:function(c){l(c,c.activeShiftEnterMode,1)}});e.setKeystroke([[13,"enter"],[CKEDITOR.SHIFT+13,"shiftEnter"]])}});var t=CKEDITOR.dom.walker.whitespaces(),u=CKEDITOR.dom.walker.bookmark();CKEDITOR.plugins.enterkey={enterBlock:function(e,c,b,i){if(b=b||q(e)){var f=b.document,j=b.checkStartOfBlock(),h=b.checkEndOfBlock(),a=e.elementPath(b.startContainer).block,k=c==CKEDITOR.ENTER_DIV?"div":"p",d;if(j&&h){if(a&&(a.is("li")||a.getParent().is("li"))){b=
a.getParent();d=b.getParent();var i=!a.hasPrevious(),m=!a.hasNext(),k=e.getSelection(),g=k.createBookmarks(),j=a.getDirection(1),h=a.getAttribute("class"),n=a.getAttribute("style"),l=d.getDirection(1)!=j,e=e.enterMode!=CKEDITOR.ENTER_BR||l||n||h;if(d.is("li"))if(i||m)a[i?"insertBefore":"insertAfter"](d);else a.breakParent(d);else{if(e)if(d=f.createElement(c==CKEDITOR.ENTER_P?"p":"div"),l&&d.setAttribute("dir",j),n&&d.setAttribute("style",n),h&&d.setAttribute("class",h),a.moveChildren(d),i||m)d[i?
"insertBefore":"insertAfter"](b);else a.breakParent(b),d.insertAfter(b);else if(a.appendBogus(!0),i||m)for(;f=a[i?"getFirst":"getLast"]();)f[i?"insertBefore":"insertAfter"](b);else for(a.breakParent(b);f=a.getLast();)f.insertAfter(b);a.remove()}k.selectBookmarks(g);return}if(a&&a.getParent().is("blockquote")){a.breakParent(a.getParent());a.getPrevious().getFirst(CKEDITOR.dom.walker.invisible(1))||a.getPrevious().remove();a.getNext().getFirst(CKEDITOR.dom.walker.invisible(1))||a.getNext().remove();
b.moveToElementEditStart(a);b.select();return}}else if(a&&a.is("pre")&&!h){o(e,c,b,i);return}if(h=b.splitBlock(k)){c=h.previousBlock;a=h.nextBlock;e=h.wasStartOfBlock;j=h.wasEndOfBlock;if(a)g=a.getParent(),g.is("li")&&(a.breakParent(g),a.move(a.getNext(),1));else if(c&&(g=c.getParent())&&g.is("li"))c.breakParent(g),g=c.getNext(),b.moveToElementEditStart(g),c.move(c.getPrevious());if(!e&&!j)a.is("li")&&(d=b.clone(),d.selectNodeContents(a),d=new CKEDITOR.dom.walker(d),d.evaluator=function(a){return!(u(a)||
t(a)||a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in CKEDITOR.dtd.$inline&&!(a.getName()in CKEDITOR.dtd.$empty))},(g=d.next())&&(g.type==CKEDITOR.NODE_ELEMENT&&g.is("ul","ol"))&&(CKEDITOR.env.needsBrFiller?f.createElement("br"):f.createText(" ")).insertBefore(g)),a&&b.moveToElementEditStart(a);else{if(c){if(c.is("li")||!r.test(c.getName())&&!c.is("pre"))d=c.clone()}else a&&(d=a.clone());d?i&&!d.is("li")&&d.renameNode(k):g&&g.is("li")?d=g:(d=f.createElement(k),c&&(m=c.getDirection())&&d.setAttribute("dir",
m));if(f=h.elementPath){i=0;for(k=f.elements.length;i<k;i++){g=f.elements[i];if(g.equals(f.block)||g.equals(f.blockLimit))break;CKEDITOR.dtd.$removeEmpty[g.getName()]&&(g=g.clone(),d.moveChildren(g),d.append(g))}}d.appendBogus();d.getParent()||b.insertNode(d);d.is("li")&&d.removeAttribute("value");if(CKEDITOR.env.ie&&e&&(!j||!c.getChildCount()))b.moveToElementEditStart(j?c:d),b.select();b.moveToElementEditStart(e&&!j?a:d)}b.select();b.scrollIntoView()}}},enterBr:function(e,c,b,i){if(b=b||q(e)){var f=
b.document,j=b.checkEndOfBlock(),h=new CKEDITOR.dom.elementPath(e.getSelection().getStartElement()),a=h.block,h=a&&h.block.getName();!i&&"li"==h?p(e,c,b,i):(!i&&j&&r.test(h)?(j=a.getDirection())?(f=f.createElement("div"),f.setAttribute("dir",j),f.insertAfter(a),b.setStart(f,0)):(f.createElement("br").insertAfter(a),CKEDITOR.env.gecko&&f.createText("").insertAfter(a),b.setStartAt(a.getNext(),CKEDITOR.env.ie?CKEDITOR.POSITION_BEFORE_START:CKEDITOR.POSITION_AFTER_START)):(a="pre"==h&&CKEDITOR.env.ie&&
8>CKEDITOR.env.version?f.createText("\r"):f.createElement("br"),b.deleteContents(),b.insertNode(a),CKEDITOR.env.needsBrFiller?(f.createText("﻿").insertAfter(a),j&&a.getParent().appendBogus(),a.getNext().$.nodeValue="",b.setStartAt(a.getNext(),CKEDITOR.POSITION_AFTER_START)):b.setStartAt(a,CKEDITOR.POSITION_AFTER_END)),b.collapse(!0),b.select(),b.scrollIntoView())}}};var s=CKEDITOR.plugins.enterkey,o=s.enterBr,p=s.enterBlock,r=/^h[1-6]$/})();(function(){function j(a,b){var d={},e=[],f={nbsp:" ",shy:"­",gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},a=a.replace(/\b(nbsp|shy|gt|lt|amp|apos|quot)(?:,|$)/g,function(a,h){var c=b?"&"+h+";":f[h];d[c]=b?f[h]:"&"+h+";";e.push(c);return""});if(!b&&a){var a=a.split(","),c=document.createElement("div"),g;c.innerHTML="&"+a.join(";&")+";";g=c.innerHTML;c=null;for(c=0;c<g.length;c++){var i=g.charAt(c);d[i]="&"+a[c]+";";e.push(i)}}d.regex=e.join(b?"|":"");return d}CKEDITOR.plugins.add("entities",{afterInit:function(a){var b=
a.config;if(a=(a=a.dataProcessor)&&a.htmlFilter){var d=[];!1!==b.basicEntities&&d.push("nbsp,gt,lt,amp");b.entities&&(d.length&&d.push("quot,iexcl,cent,pound,curren,yen,brvbar,sect,uml,copy,ordf,laquo,not,shy,reg,macr,deg,plusmn,sup2,sup3,acute,micro,para,middot,cedil,sup1,ordm,raquo,frac14,frac12,frac34,iquest,times,divide,fnof,bull,hellip,prime,Prime,oline,frasl,weierp,image,real,trade,alefsym,larr,uarr,rarr,darr,harr,crarr,lArr,uArr,rArr,dArr,hArr,forall,part,exist,empty,nabla,isin,notin,ni,prod,sum,minus,lowast,radic,prop,infin,ang,and,or,cap,cup,int,there4,sim,cong,asymp,ne,equiv,le,ge,sub,sup,nsub,sube,supe,oplus,otimes,perp,sdot,lceil,rceil,lfloor,rfloor,lang,rang,loz,spades,clubs,hearts,diams,circ,tilde,ensp,emsp,thinsp,zwnj,zwj,lrm,rlm,ndash,mdash,lsquo,rsquo,sbquo,ldquo,rdquo,bdquo,dagger,Dagger,permil,lsaquo,rsaquo,euro"),
b.entities_latin&&d.push("Agrave,Aacute,Acirc,Atilde,Auml,Aring,AElig,Ccedil,Egrave,Eacute,Ecirc,Euml,Igrave,Iacute,Icirc,Iuml,ETH,Ntilde,Ograve,Oacute,Ocirc,Otilde,Ouml,Oslash,Ugrave,Uacute,Ucirc,Uuml,Yacute,THORN,szlig,agrave,aacute,acirc,atilde,auml,aring,aelig,ccedil,egrave,eacute,ecirc,euml,igrave,iacute,icirc,iuml,eth,ntilde,ograve,oacute,ocirc,otilde,ouml,oslash,ugrave,uacute,ucirc,uuml,yacute,thorn,yuml,OElig,oelig,Scaron,scaron,Yuml"),b.entities_greek&&d.push("Alpha,Beta,Gamma,Delta,Epsilon,Zeta,Eta,Theta,Iota,Kappa,Lambda,Mu,Nu,Xi,Omicron,Pi,Rho,Sigma,Tau,Upsilon,Phi,Chi,Psi,Omega,alpha,beta,gamma,delta,epsilon,zeta,eta,theta,iota,kappa,lambda,mu,nu,xi,omicron,pi,rho,sigmaf,sigma,tau,upsilon,phi,chi,psi,omega,thetasym,upsih,piv"),
b.entities_additional&&d.push(b.entities_additional));var e=j(d.join(",")),f=e.regex?"["+e.regex+"]":"a^";delete e.regex;b.entities&&b.entities_processNumerical&&(f="[^ -~]|"+f);var f=RegExp(f,"g"),c=function(a){return b.entities_processNumerical=="force"||!e[a]?"&#"+a.charCodeAt(0)+";":e[a]},g=j("nbsp,gt,lt,amp,shy",!0),i=RegExp(g.regex,"g"),k=function(a){return g[a]};a.addRules({text:function(a){return a.replace(i,k).replace(f,c)}},{applyToAll:!0,excludeNestedEditable:!0})}}})})();
CKEDITOR.config.basicEntities=!0;CKEDITOR.config.entities=!0;CKEDITOR.config.entities_latin=!0;CKEDITOR.config.entities_greek=!0;CKEDITOR.config.entities_additional="#39";CKEDITOR.plugins.add("popup");
CKEDITOR.tools.extend(CKEDITOR.editor.prototype,{popup:function(e,a,b,d){a=a||"80%";b=b||"70%";"string"==typeof a&&(1<a.length&&"%"==a.substr(a.length-1,1))&&(a=parseInt(window.screen.width*parseInt(a,10)/100,10));"string"==typeof b&&(1<b.length&&"%"==b.substr(b.length-1,1))&&(b=parseInt(window.screen.height*parseInt(b,10)/100,10));640>a&&(a=640);420>b&&(b=420);var f=parseInt((window.screen.height-b)/2,10),g=parseInt((window.screen.width-a)/2,10),d=(d||"location=no,menubar=no,toolbar=no,dependent=yes,minimizable=no,modal=yes,alwaysRaised=yes,resizable=yes,scrollbars=yes")+",width="+
a+",height="+b+",top="+f+",left="+g,c=window.open("",null,d,!0);if(!c)return!1;try{-1==navigator.userAgent.toLowerCase().indexOf(" chrome/")&&(c.moveTo(g,f),c.resizeTo(a,b)),c.focus(),c.location.href=e}catch(h){window.open(e,null,d,!0)}return!0}});(function(){function g(a,c){var d=[];if(c)for(var b in c)d.push(b+"="+encodeURIComponent(c[b]));else return a;return a+(-1!=a.indexOf("?")?"&":"?")+d.join("&")}function i(a){a+="";return a.charAt(0).toUpperCase()+a.substr(1)}function k(){var a=this.getDialog(),c=a.getParentEditor();c._.filebrowserSe=this;var d=c.config["filebrowser"+i(a.getName())+"WindowWidth"]||c.config.filebrowserWindowWidth||"80%",a=c.config["filebrowser"+i(a.getName())+"WindowHeight"]||c.config.filebrowserWindowHeight||"70%",
b=this.filebrowser.params||{};b.CKEditor=c.name;b.CKEditorFuncNum=c._.filebrowserFn;b.langCode||(b.langCode=c.langCode);b=g(this.filebrowser.url,b);c.popup(b,d,a,c.config.filebrowserWindowFeatures||c.config.fileBrowserWindowFeatures)}function l(){var a=this.getDialog();a.getParentEditor()._.filebrowserSe=this;return!a.getContentElement(this["for"][0],this["for"][1]).getInputElement().$.value||!a.getContentElement(this["for"][0],this["for"][1]).getAction()?!1:!0}function m(a,c,d){var b=d.params||{};
b.CKEditor=a.name;b.CKEditorFuncNum=a._.filebrowserFn;b.langCode||(b.langCode=a.langCode);c.action=g(d.url,b);c.filebrowser=d}function j(a,c,d,b){if(b&&b.length)for(var e,g=b.length;g--;)if(e=b[g],("hbox"==e.type||"vbox"==e.type||"fieldset"==e.type)&&j(a,c,d,e.children),e.filebrowser)if("string"==typeof e.filebrowser&&(e.filebrowser={action:"fileButton"==e.type?"QuickUpload":"Browse",target:e.filebrowser}),"Browse"==e.filebrowser.action){var f=e.filebrowser.url;void 0===f&&(f=a.config["filebrowser"+
i(c)+"BrowseUrl"],void 0===f&&(f=a.config.filebrowserBrowseUrl));f&&(e.onClick=k,e.filebrowser.url=f,e.hidden=!1)}else if("QuickUpload"==e.filebrowser.action&&e["for"]&&(f=e.filebrowser.url,void 0===f&&(f=a.config["filebrowser"+i(c)+"UploadUrl"],void 0===f&&(f=a.config.filebrowserUploadUrl)),f)){var h=e.onClick;e.onClick=function(a){var b=a.sender;return h&&h.call(b,a)===false?false:l.call(b,a)};e.filebrowser.url=f;e.hidden=!1;m(a,d.getContents(e["for"][0]).get(e["for"][1]),e.filebrowser)}}function h(a,
c,d){if(-1!==d.indexOf(";")){for(var d=d.split(";"),b=0;b<d.length;b++)if(h(a,c,d[b]))return!0;return!1}return(a=a.getContents(c).get(d).filebrowser)&&a.url}function n(a,c){var d=this._.filebrowserSe.getDialog(),b=this._.filebrowserSe["for"],e=this._.filebrowserSe.filebrowser.onSelect;b&&d.getContentElement(b[0],b[1]).reset();if(!("function"==typeof c&&!1===c.call(this._.filebrowserSe))&&!(e&&!1===e.call(this._.filebrowserSe,a,c))&&("string"==typeof c&&c&&alert(c),a&&(b=this._.filebrowserSe,d=b.getDialog(),
b=b.filebrowser.target||null)))if(b=b.split(":"),e=d.getContentElement(b[0],b[1]))e.setValue(a),d.selectPage(b[0])}CKEDITOR.plugins.add("filebrowser",{requires:"popup",init:function(a){a._.filebrowserFn=CKEDITOR.tools.addFunction(n,a);a.on("destroy",function(){CKEDITOR.tools.removeFunction(this._.filebrowserFn)})}});CKEDITOR.on("dialogDefinition",function(a){if(a.editor.plugins.filebrowser)for(var c=a.data.definition,d,b=0;b<c.contents.length;++b)if(d=c.contents[b])j(a.editor,a.data.name,c,d.elements),
d.hidden&&d.filebrowser&&(d.hidden=!h(c,d.id,d.filebrowser))})})();CKEDITOR.plugins.add("find",{requires:"dialog",init:function(a){var b=a.addCommand("find",new CKEDITOR.dialogCommand("find"));b.canUndo=!1;b.readOnly=1;a.addCommand("replace",new CKEDITOR.dialogCommand("replace")).canUndo=!1;a.ui.addButton&&(a.ui.addButton("Find",{label:a.lang.find.find,command:"find",toolbar:"find,10"}),a.ui.addButton("Replace",{label:a.lang.find.replace,command:"replace",toolbar:"find,20"}));CKEDITOR.dialog.add("find",this.path+"dialogs/find.js");CKEDITOR.dialog.add("replace",this.path+
"dialogs/find.js")}});CKEDITOR.config.find_highlight={element:"span",styles:{"background-color":"#004",color:"#fff"}};(function(){function g(a,b){var c=j.exec(a),d=j.exec(b);if(c){if(!c[2]&&"px"==d[2])return d[1];if("px"==c[2]&&!d[2])return d[1]+"px"}return b}var i=CKEDITOR.htmlParser.cssStyle,h=CKEDITOR.tools.cssLength,j=/^((?:\d*(?:\.\d+))|(?:\d+))(.*)?$/i,l={elements:{$:function(a){var b=a.attributes;if((b=(b=(b=b&&b["data-cke-realelement"])&&new CKEDITOR.htmlParser.fragment.fromHtml(decodeURIComponent(b)))&&b.children[0])&&a.attributes["data-cke-resizable"]){var c=(new i(a)).rules,a=b.attributes,d=c.width,c=
c.height;d&&(a.width=g(a.width,d));c&&(a.height=g(a.height,c))}return b}}},k=CKEDITOR.plugins.add("fakeobjects",{init:function(a){a.filter.allow("img[!data-cke-realelement,src,alt,title](*){*}","fakeobjects")},afterInit:function(a){(a=(a=a.dataProcessor)&&a.htmlFilter)&&a.addRules(l)}});CKEDITOR.editor.prototype.createFakeElement=function(a,b,c,d){var e=this.lang.fakeobjects,e=e[c]||e.unknown,b={"class":b,"data-cke-realelement":encodeURIComponent(a.getOuterHtml()),"data-cke-real-node-type":a.type,
alt:e,title:e,align:a.getAttribute("align")||""};CKEDITOR.env.hc||(b.src=CKEDITOR.getUrl(k.path+"images/spacer.gif"));c&&(b["data-cke-real-element-type"]=c);d&&(b["data-cke-resizable"]=d,c=new i,d=a.getAttribute("width"),a=a.getAttribute("height"),d&&(c.rules.width=h(d)),a&&(c.rules.height=h(a)),c.populate(b));return this.document.createElement("img",{attributes:b})};CKEDITOR.editor.prototype.createFakeParserElement=function(a,b,c,d){var e=this.lang.fakeobjects,e=e[c]||e.unknown,f;f=new CKEDITOR.htmlParser.basicWriter;
a.writeHtml(f);f=f.getHtml();b={"class":b,"data-cke-realelement":encodeURIComponent(f),"data-cke-real-node-type":a.type,alt:e,title:e,align:a.attributes.align||""};CKEDITOR.env.hc||(b.src=CKEDITOR.getUrl(k.path+"images/spacer.gif"));c&&(b["data-cke-real-element-type"]=c);d&&(b["data-cke-resizable"]=d,d=a.attributes,a=new i,c=d.width,d=d.height,void 0!=c&&(a.rules.width=h(c)),void 0!=d&&(a.rules.height=h(d)),a.populate(b));return new CKEDITOR.htmlParser.element("img",b)};CKEDITOR.editor.prototype.restoreRealElement=
function(a){if(a.data("cke-real-node-type")!=CKEDITOR.NODE_ELEMENT)return null;var b=CKEDITOR.dom.element.createFromHtml(decodeURIComponent(a.data("cke-realelement")),this.document);if(a.data("cke-resizable")){var c=a.getStyle("width"),a=a.getStyle("height");c&&b.setAttribute("width",g(b.getAttribute("width"),c));a&&b.setAttribute("height",g(b.getAttribute("height"),a))}return b}})();(function(){function d(a){a=a.attributes;return"application/x-shockwave-flash"==a.type||f.test(a.src||"")}function e(a,b){return a.createFakeParserElement(b,"cke_flash","flash",!0)}var f=/\.swf(?:$|\?)/i;CKEDITOR.plugins.add("flash",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss("img.cke_flash{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},
init:function(a){var b="object[classid,codebase,height,hspace,vspace,width];param[name,value];embed[height,hspace,pluginspage,src,type,vspace,width]";CKEDITOR.dialog.isTabEnabled(a,"flash","properties")&&(b+=";object[align]; embed[allowscriptaccess,quality,scale,wmode]");CKEDITOR.dialog.isTabEnabled(a,"flash","advanced")&&(b+=";object[id]{*}; embed[bgcolor]{*}(*)");a.addCommand("flash",new CKEDITOR.dialogCommand("flash",{allowedContent:b,requiredContent:"embed"}));a.ui.addButton&&a.ui.addButton("Flash",
{label:a.lang.common.flash,command:"flash",toolbar:"insert,20"});CKEDITOR.dialog.add("flash",this.path+"dialogs/flash.js");a.addMenuItems&&a.addMenuItems({flash:{label:a.lang.flash.properties,command:"flash",group:"flash"}});a.on("doubleclick",function(a){var b=a.data.element;b.is("img")&&"flash"==b.data("cke-real-element-type")&&(a.data.dialog="flash")});a.contextMenu&&a.contextMenu.addListener(function(a){if(a&&a.is("img")&&!a.isReadOnly()&&"flash"==a.data("cke-real-element-type"))return{flash:CKEDITOR.TRISTATE_OFF}})},
afterInit:function(a){var b=a.dataProcessor;(b=b&&b.dataFilter)&&b.addRules({elements:{"cke:object":function(b){var c=b.attributes;if((!c.classid||!(""+c.classid).toLowerCase())&&!d(b)){for(c=0;c<b.children.length;c++)if("cke:embed"==b.children[c].name){if(!d(b.children[c]))break;return e(a,b)}return null}return e(a,b)},"cke:embed":function(b){return!d(b)?null:e(a,b)}}},5)}})})();CKEDITOR.tools.extend(CKEDITOR.config,{flashEmbedTagOnly:!1,flashAddEmbedTag:!0,flashConvertOnEdit:!1});(function(){function q(a){var i=a.config,l=a.fire("uiSpace",{space:"top",html:""}).html,o=function(){function f(a,c,e){b.setStyle(c,t(e));b.setStyle("position",a)}function e(a){var b=r.getDocumentPosition();switch(a){case "top":f("absolute","top",b.y-m-n);break;case "pin":f("fixed","top",q);break;case "bottom":f("absolute","top",b.y+(c.height||c.bottom-c.top)+n)}j=a}var j,r,k,c,h,m,s,l=i.floatSpaceDockedOffsetX||0,n=i.floatSpaceDockedOffsetY||0,p=i.floatSpacePinnedOffsetX||0,q=i.floatSpacePinnedOffsetY||
0;return function(d){if(r=a.editable())if(d&&"focus"==d.name&&b.show(),b.removeStyle("left"),b.removeStyle("right"),k=b.getClientRect(),c=r.getClientRect(),h=g.getViewPaneSize(),m=k.height,s="pageXOffset"in g.$?g.$.pageXOffset:CKEDITOR.document.$.documentElement.scrollLeft,j){m+n<=c.top?e("top"):m+n>h.height-c.bottom?e("pin"):e("bottom");var d=h.width/2,d=0<c.left&&c.right<h.width&&c.width>k.width?"rtl"==a.config.contentsLangDirection?"right":"left":d-c.left>c.right-d?"left":"right",f;k.width>h.width?
(d="left",f=0):(f="left"==d?0<c.left?c.left:0:c.right<h.width?h.width-c.right:0,f+k.width>h.width&&(d="left"==d?"right":"left",f=0));b.setStyle(d,t(("pin"==j?p:l)+f+("pin"==j?0:"left"==d?s:-s)))}else j="pin",e("pin"),o(d)}}();if(l){var b=CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml(u.output({content:l,id:a.id,langDir:a.lang.dir,langCode:a.langCode,name:a.name,style:"display:none;z-index:"+(i.baseFloatZIndex-1),topId:a.ui.spaceId("top"),voiceLabel:a.lang.editorPanel+", "+
a.name}))),p=CKEDITOR.tools.eventsBuffer(500,o),e=CKEDITOR.tools.eventsBuffer(100,o);b.unselectable();b.on("mousedown",function(a){a=a.data;a.getTarget().hasAscendant("a",1)||a.preventDefault()});a.on("focus",function(b){o(b);a.on("change",p.input);g.on("scroll",e.input);g.on("resize",e.input)});a.on("blur",function(){b.hide();a.removeListener("change",p.input);g.removeListener("scroll",e.input);g.removeListener("resize",e.input)});a.on("destroy",function(){g.removeListener("scroll",e.input);g.removeListener("resize",
e.input);b.clearCustomData();b.remove()});a.focusManager.hasFocus&&b.show();a.focusManager.add(b,1)}}var u=CKEDITOR.addTemplate("floatcontainer",'<div id="cke_{name}" class="cke {id} cke_reset_all cke_chrome cke_editor_{name} cke_float cke_{langDir} '+CKEDITOR.env.cssClass+'" dir="{langDir}" title="'+(CKEDITOR.env.gecko?" ":"")+'" lang="{langCode}" role="application" style="{style}" aria-labelledby="cke_{name}_arialbl"><span id="cke_{name}_arialbl" class="cke_voice_label">{voiceLabel}</span><div class="cke_inner"><div id="{topId}" class="cke_top" role="presentation">{content}</div></div></div>'),
g=CKEDITOR.document.getWindow(),t=CKEDITOR.tools.cssLength;CKEDITOR.plugins.add("floatingspace",{init:function(a){a.on("loaded",function(){q(this)},null,null,20)}})})();CKEDITOR.plugins.add("listblock",{requires:"panel",onLoad:function(){var f=CKEDITOR.addTemplate("panel-list",'<ul role="presentation" class="cke_panel_list">{items}</ul>'),g=CKEDITOR.addTemplate("panel-list-item",'<li id="{id}" class="cke_panel_listItem" role=presentation><a id="{id}_option" _cke_focus=1 hidefocus=true title="{title}" href="javascript:void(\'{val}\')"  {onclick}="CKEDITOR.tools.callFunction({clickFn},\'{val}\'); return false;" role="option">{text}</a></li>'),h=CKEDITOR.addTemplate("panel-list-group",
'<h1 id="{id}" class="cke_panel_grouptitle" role="presentation" >{label}</h1>'),i=/\'/g;CKEDITOR.ui.panel.prototype.addListBlock=function(a,b){return this.addBlock(a,new CKEDITOR.ui.listBlock(this.getHolderElement(),b))};CKEDITOR.ui.listBlock=CKEDITOR.tools.createClass({base:CKEDITOR.ui.panel.block,$:function(a,b){var b=b||{},c=b.attributes||(b.attributes={});(this.multiSelect=!!b.multiSelect)&&(c["aria-multiselectable"]=!0);!c.role&&(c.role="listbox");this.base.apply(this,arguments);this.element.setAttribute("role",
c.role);c=this.keys;c[40]="next";c[9]="next";c[38]="prev";c[CKEDITOR.SHIFT+9]="prev";c[32]=CKEDITOR.env.ie?"mouseup":"click";CKEDITOR.env.ie&&(c[13]="mouseup");this._.pendingHtml=[];this._.pendingList=[];this._.items={};this._.groups={}},_:{close:function(){if(this._.started){var a=f.output({items:this._.pendingList.join("")});this._.pendingList=[];this._.pendingHtml.push(a);delete this._.started}},getClick:function(){this._.click||(this._.click=CKEDITOR.tools.addFunction(function(a){var b=this.toggle(a);
if(this.onClick)this.onClick(a,b)},this));return this._.click}},proto:{add:function(a,b,c){var d=CKEDITOR.tools.getNextId();this._.started||(this._.started=1,this._.size=this._.size||0);this._.items[a]=d;var e;e=CKEDITOR.tools.htmlEncodeAttr(a).replace(i,"\\'");a={id:d,val:e,onclick:CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick",clickFn:this._.getClick(),title:CKEDITOR.tools.htmlEncodeAttr(c||a),text:b||a};this._.pendingList.push(g.output(a))},startGroup:function(a){this._.close();
var b=CKEDITOR.tools.getNextId();this._.groups[a]=b;this._.pendingHtml.push(h.output({id:b,label:a}))},commit:function(){this._.close();this.element.appendHtml(this._.pendingHtml.join(""));delete this._.size;this._.pendingHtml=[]},toggle:function(a){var b=this.isMarked(a);b?this.unmark(a):this.mark(a);return!b},hideGroup:function(a){var b=(a=this.element.getDocument().getById(this._.groups[a]))&&a.getNext();a&&(a.setStyle("display","none"),b&&"ul"==b.getName()&&b.setStyle("display","none"))},hideItem:function(a){this.element.getDocument().getById(this._.items[a]).setStyle("display",
"none")},showAll:function(){var a=this._.items,b=this._.groups,c=this.element.getDocument(),d;for(d in a)c.getById(a[d]).setStyle("display","");for(var e in b)a=c.getById(b[e]),d=a.getNext(),a.setStyle("display",""),d&&"ul"==d.getName()&&d.setStyle("display","")},mark:function(a){this.multiSelect||this.unmarkAll();var a=this._.items[a],b=this.element.getDocument().getById(a);b.addClass("cke_selected");this.element.getDocument().getById(a+"_option").setAttribute("aria-selected",!0);this.onMark&&this.onMark(b)},
unmark:function(a){var b=this.element.getDocument(),a=this._.items[a],c=b.getById(a);c.removeClass("cke_selected");b.getById(a+"_option").removeAttribute("aria-selected");this.onUnmark&&this.onUnmark(c)},unmarkAll:function(){var a=this._.items,b=this.element.getDocument(),c;for(c in a){var d=a[c];b.getById(d).removeClass("cke_selected");b.getById(d+"_option").removeAttribute("aria-selected")}this.onUnmark&&this.onUnmark()},isMarked:function(a){return this.element.getDocument().getById(this._.items[a]).hasClass("cke_selected")},
focus:function(a){this._.focusIndex=-1;var b=this.element.getElementsByTag("a"),c,d=-1;if(a)for(c=this.element.getDocument().getById(this._.items[a]).getFirst();a=b.getItem(++d);){if(a.equals(c)){this._.focusIndex=d;break}}else this.element.focus();c&&setTimeout(function(){c.focus()},0)}}})}});CKEDITOR.plugins.add("richcombo",{requires:"floatpanel,listblock,button",beforeInit:function(d){d.ui.addHandler(CKEDITOR.UI_RICHCOMBO,CKEDITOR.ui.richCombo.handler)}});
(function(){var d='<span id="{id}" class="cke_combo cke_combo__{name} {cls}" role="presentation"><span id="{id}_label" class="cke_combo_label">{label}</span><a class="cke_combo_button" hidefocus=true title="{title}" tabindex="-1"'+(CKEDITOR.env.gecko&&10900<=CKEDITOR.env.version&&!CKEDITOR.env.hc?"":'" href="javascript:void(\'{titleJs}\')"')+' hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="true"';if(CKEDITOR.env.opera||CKEDITOR.env.gecko&&CKEDITOR.env.mac)d+=' onkeypress="return false;"';
CKEDITOR.env.gecko&&(d+=' onblur="this.style.cssText = this.style.cssText;"');var d=d+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event,this);" onmousedown="return CKEDITOR.tools.callFunction({mousedownFn},event);"  onfocus="return CKEDITOR.tools.callFunction({focusFn},event);" '+(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span id="{id}_text" class="cke_combo_text cke_combo_inlinelabel">{label}</span><span class="cke_combo_open"><span class="cke_combo_arrow">'+
(CKEDITOR.env.hc?"&#9660;":CKEDITOR.env.air?"&nbsp;":"")+"</span></span></a></span>"),i=CKEDITOR.addTemplate("combo",d);CKEDITOR.UI_RICHCOMBO="richcombo";CKEDITOR.ui.richCombo=CKEDITOR.tools.createClass({$:function(a){CKEDITOR.tools.extend(this,a,{canGroup:!1,title:a.label,modes:{wysiwyg:1},editorFocus:1});a=this.panel||{};delete this.panel;this.id=CKEDITOR.tools.getNextNumber();this.document=a.parent&&a.parent.getDocument()||CKEDITOR.document;a.className="cke_combopanel";a.block={multiSelect:a.multiSelect,
attributes:a.attributes};a.toolbarRelated=!0;this._={panelDefinition:a,items:{}}},proto:{renderHtml:function(a){var b=[];this.render(a,b);return b.join("")},render:function(a,b){function g(){var c=this.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;a.readOnly&&!this.readOnly&&(c=CKEDITOR.TRISTATE_DISABLED);this.setState(c);this.setValue("");c!=CKEDITOR.TRISTATE_DISABLED&&this.refresh&&this.refresh()}var d=CKEDITOR.env,h="cke_"+this.id,e=CKEDITOR.tools.addFunction(function(b){j&&(a.unlockSelection(1),
j=0);c.execute(b)},this),f=this,c={id:h,combo:this,focus:function(){CKEDITOR.document.getById(h).getChild(1).focus()},execute:function(c){var b=f._;if(b.state!=CKEDITOR.TRISTATE_DISABLED)if(f.createPanel(a),b.on)b.panel.hide();else{f.commit();var d=f.getValue();d?b.list.mark(d):b.list.unmarkAll();b.panel.showBlock(f.id,new CKEDITOR.dom.element(c),4)}},clickFn:e};a.on("activeFilterChange",g,this);a.on("mode",g,this);a.on("selectionChange",g,this);!this.readOnly&&a.on("readOnly",g,this);var k=CKEDITOR.tools.addFunction(function(b,
d){var b=new CKEDITOR.dom.event(b),g=b.getKeystroke();if(40==g)a.once("panelShow",function(a){a.data._.panel._.currentBlock.onKeyDown(40)});switch(g){case 13:case 32:case 40:CKEDITOR.tools.callFunction(e,d);break;default:c.onkey(c,g)}b.preventDefault()}),l=CKEDITOR.tools.addFunction(function(){c.onfocus&&c.onfocus()}),j=0,m=CKEDITOR.tools.addFunction(function(){if(CKEDITOR.env.opera){var b=a.editable();b.isInline()&&b.hasFocus&&(a.lockSelection(),j=1)}});c.keyDownFn=k;d={id:h,name:this.name||this.command,
label:this.label,title:this.title,cls:this.className||"",titleJs:d.gecko&&10900<=d.version&&!d.hc?"":(this.title||"").replace("'",""),keydownFn:k,mousedownFn:m,focusFn:l,clickFn:e};i.output(d,b);if(this.onRender)this.onRender();return c},createPanel:function(a){if(!this._.panel){var b=this._.panelDefinition,d=this._.panelDefinition.block,i=b.parent||CKEDITOR.document.getBody(),h="cke_combopanel__"+this.name,e=new CKEDITOR.ui.floatPanel(a,i,b),f=e.addListBlock(this.id,d),c=this;e.onShow=function(){this.element.addClass(h);
c.setState(CKEDITOR.TRISTATE_ON);c._.on=1;c.editorFocus&&!a.focusManager.hasFocus&&a.focus();if(c.onOpen)c.onOpen();a.once("panelShow",function(){f.focus(!f.multiSelect&&c.getValue())})};e.onHide=function(b){this.element.removeClass(h);c.setState(c.modes&&c.modes[a.mode]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);c._.on=0;if(!b&&c.onClose)c.onClose()};e.onEscape=function(){e.hide(1)};f.onClick=function(a,b){c.onClick&&c.onClick.call(c,a,b);e.hide()};this._.panel=e;this._.list=f;e.getBlock(this.id).onHide=
function(){c._.on=0;c.setState(CKEDITOR.TRISTATE_OFF)};this.init&&this.init()}},setValue:function(a,b){this._.value=a;var d=this.document.getById("cke_"+this.id+"_text");d&&(!a&&!b?(b=this.label,d.addClass("cke_combo_inlinelabel")):d.removeClass("cke_combo_inlinelabel"),d.setText("undefined"!=typeof b?b:a))},getValue:function(){return this._.value||""},unmarkAll:function(){this._.list.unmarkAll()},mark:function(a){this._.list.mark(a)},hideItem:function(a){this._.list.hideItem(a)},hideGroup:function(a){this._.list.hideGroup(a)},
showAll:function(){this._.list.showAll()},add:function(a,b,d){this._.items[a]=d||a;this._.list.add(a,b,d)},startGroup:function(a){this._.list.startGroup(a)},commit:function(){this._.committed||(this._.list.commit(),this._.committed=1,CKEDITOR.ui.fire("ready",this));this._.committed=1},setState:function(a){if(this._.state!=a){var b=this.document.getById("cke_"+this.id);b.setState(a,"cke_combo");a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled");this._.state=
a}},getState:function(){return this._.state},enable:function(){this._.state==CKEDITOR.TRISTATE_DISABLED&&this.setState(this._.lastState)},disable:function(){this._.state!=CKEDITOR.TRISTATE_DISABLED&&(this._.lastState=this._.state,this.setState(CKEDITOR.TRISTATE_DISABLED))}},statics:{handler:{create:function(a){return new CKEDITOR.ui.richCombo(a)}}}});CKEDITOR.ui.prototype.addRichCombo=function(a,b){this.add(a,CKEDITOR.UI_RICHCOMBO,b)}})();(function(){function g(a,b,g,h,j,n,l,o){for(var p=a.config,k=new CKEDITOR.style(l),c=j.split(";"),j=[],f={},d=0;d<c.length;d++){var e=c[d];if(e){var e=e.split("/"),m={},i=c[d]=e[0];m[g]=j[d]=e[1]||i;f[i]=new CKEDITOR.style(l,m);f[i]._.definition.name=i}else c.splice(d--,1)}a.ui.addRichCombo(b,{label:h.label,title:h.panelTitle,toolbar:"styles,"+o,allowedContent:k,requiredContent:k,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(p.contentsCss),multiSelect:!1,attributes:{"aria-label":h.panelTitle}},
init:function(){this.startGroup(h.panelTitle);for(var a=0;a<c.length;a++){var b=c[a];this.add(b,f[b].buildPreview(),b)}},onClick:function(b){a.focus();a.fire("saveSnapshot");var c=f[b];a[this.getValue()==b?"removeStyle":"applyStyle"](c);a.fire("saveSnapshot")},onRender:function(){a.on("selectionChange",function(a){for(var b=this.getValue(),a=a.data.path.elements,c=0,d;c<a.length;c++){d=a[c];for(var e in f)if(f[e].checkElementMatch(d,!0)){e!=b&&this.setValue(e);return}}this.setValue("",n)},this)},
refresh:function(){a.activeFilter.check(k)||this.setState(CKEDITOR.TRISTATE_DISABLED)}})}CKEDITOR.plugins.add("font",{requires:"richcombo",init:function(a){var b=a.config;g(a,"Font","family",a.lang.font,b.font_names,b.font_defaultLabel,b.font_style,30);g(a,"FontSize","size",a.lang.font.fontSize,b.fontSize_sizes,b.fontSize_defaultLabel,b.fontSize_style,40)}})})();CKEDITOR.config.font_names="Arial/Arial, Helvetica, sans-serif;Comic Sans MS/Comic Sans MS, cursive;Courier New/Courier New, Courier, monospace;Georgia/Georgia, serif;Lucida Sans Unicode/Lucida Sans Unicode, Lucida Grande, sans-serif;Tahoma/Tahoma, Geneva, sans-serif;Times New Roman/Times New Roman, Times, serif;Trebuchet MS/Trebuchet MS, Helvetica, sans-serif;Verdana/Verdana, Geneva, sans-serif";
CKEDITOR.config.font_defaultLabel="";CKEDITOR.config.font_style={element:"span",styles:{"font-family":"#(family)"},overrides:[{element:"font",attributes:{face:null}}]};CKEDITOR.config.fontSize_sizes="8/8px;9/9px;10/10px;11/11px;12/12px;14/14px;16/16px;18/18px;20/20px;22/22px;24/24px;26/26px;28/28px;36/36px;48/48px;72/72px";CKEDITOR.config.fontSize_defaultLabel="";CKEDITOR.config.fontSize_style={element:"span",styles:{"font-size":"#(size)"},overrides:[{element:"font",attributes:{size:null}}]};CKEDITOR.plugins.add("forms",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss(".cke_editable form{border: 1px dotted #FF0000;padding: 2px;}\n");CKEDITOR.addCss("img.cke_hidden{background-image: url("+CKEDITOR.getUrl(this.path+"images/hiddenfield.gif")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 16px !important;height: 16px !important;}")},init:function(b){var a=b.lang,e=0,h={email:1,password:1,search:1,tel:1,text:1,url:1},j={checkbox:"input[type,name,checked]",
radio:"input[type,name,checked]",textfield:"input[type,name,value,size,maxlength]",textarea:"textarea[cols,rows,name]",select:"select[name,size,multiple]; option[value,selected]",button:"input[type,name,value]",form:"form[action,name,id,enctype,target,method]",hiddenfield:"input[type,name,value]",imagebutton:"input[type,alt,src]{width,height,border,border-width,border-style,margin,float}"},k={checkbox:"input",radio:"input",textfield:"input",textarea:"textarea",select:"select",button:"input",form:"form",
hiddenfield:"input",imagebutton:"input"},d=function(g,c,d){var h={allowedContent:j[c],requiredContent:k[c]};"form"==c&&(h.context="form");b.addCommand(c,new CKEDITOR.dialogCommand(c,h));b.ui.addButton&&b.ui.addButton(g,{label:a.common[g.charAt(0).toLowerCase()+g.slice(1)],command:c,toolbar:"forms,"+(e+=10)});CKEDITOR.dialog.add(c,d)},f=this.path+"dialogs/";!b.blockless&&d("Form","form",f+"form.js");d("Checkbox","checkbox",f+"checkbox.js");d("Radio","radio",f+"radio.js");d("TextField","textfield",
f+"textfield.js");d("Textarea","textarea",f+"textarea.js");d("Select","select",f+"select.js");d("Button","button",f+"button.js");var i=b.plugins.image;i&&!b.plugins.image2&&d("ImageButton","imagebutton",CKEDITOR.plugins.getPath("image")+"dialogs/image.js");d("HiddenField","hiddenfield",f+"hiddenfield.js");b.addMenuItems&&(d={checkbox:{label:a.forms.checkboxAndRadio.checkboxTitle,command:"checkbox",group:"checkbox"},radio:{label:a.forms.checkboxAndRadio.radioTitle,command:"radio",group:"radio"},textfield:{label:a.forms.textfield.title,
command:"textfield",group:"textfield"},hiddenfield:{label:a.forms.hidden.title,command:"hiddenfield",group:"hiddenfield"},button:{label:a.forms.button.title,command:"button",group:"button"},select:{label:a.forms.select.title,command:"select",group:"select"},textarea:{label:a.forms.textarea.title,command:"textarea",group:"textarea"}},i&&(d.imagebutton={label:a.image.titleButton,command:"imagebutton",group:"imagebutton"}),!b.blockless&&(d.form={label:a.forms.form.menu,command:"form",group:"form"}),
b.addMenuItems(d));b.contextMenu&&(!b.blockless&&b.contextMenu.addListener(function(g,c,b){if((g=b.contains("form",1))&&!g.isReadOnly())return{form:CKEDITOR.TRISTATE_OFF}}),b.contextMenu.addListener(function(b){if(b&&!b.isReadOnly()){var c=b.getName();if(c=="select")return{select:CKEDITOR.TRISTATE_OFF};if(c=="textarea")return{textarea:CKEDITOR.TRISTATE_OFF};if(c=="input"){var a=b.getAttribute("type")||"text";switch(a){case "button":case "submit":case "reset":return{button:CKEDITOR.TRISTATE_OFF};case "checkbox":return{checkbox:CKEDITOR.TRISTATE_OFF};
case "radio":return{radio:CKEDITOR.TRISTATE_OFF};case "image":return i?{imagebutton:CKEDITOR.TRISTATE_OFF}:null}if(h[a])return{textfield:CKEDITOR.TRISTATE_OFF}}if(c=="img"&&b.data("cke-real-element-type")=="hiddenfield")return{hiddenfield:CKEDITOR.TRISTATE_OFF}}}));b.on("doubleclick",function(a){var c=a.data.element;if(!b.blockless&&c.is("form"))a.data.dialog="form";else if(c.is("select"))a.data.dialog="select";else if(c.is("textarea"))a.data.dialog="textarea";else if(c.is("img")&&c.data("cke-real-element-type")==
"hiddenfield")a.data.dialog="hiddenfield";else if(c.is("input")){c=c.getAttribute("type")||"text";switch(c){case "button":case "submit":case "reset":a.data.dialog="button";break;case "checkbox":a.data.dialog="checkbox";break;case "radio":a.data.dialog="radio";break;case "image":a.data.dialog="imagebutton"}if(h[c])a.data.dialog="textfield"}})},afterInit:function(b){var a=b.dataProcessor,e=a&&a.htmlFilter,a=a&&a.dataFilter;CKEDITOR.env.ie&&e&&e.addRules({elements:{input:function(a){var a=a.attributes,
b=a.type;b||(a.type="text");("checkbox"==b||"radio"==b)&&"on"==a.value&&delete a.value}}},{applyToAll:!0});a&&a.addRules({elements:{input:function(a){if("hidden"==a.attributes.type)return b.createFakeParserElement(a,"cke_hidden","hiddenfield")}}},{applyToAll:!0})}});
CKEDITOR.env.ie&&(CKEDITOR.dom.element.prototype.hasAttribute=CKEDITOR.tools.override(CKEDITOR.dom.element.prototype.hasAttribute,function(b){return function(a){this.$.attributes.getNamedItem(a);if("input"==this.getName())switch(a){case "class":return 0<this.$.className.length;case "checked":return!!this.$.checked;case "value":var e=this.getAttribute("type");return"checkbox"==e||"radio"==e?"on"!=this.$.value:this.$.value}return b.apply(this,arguments)}}));CKEDITOR.plugins.add("format",{requires:"richcombo",init:function(a){if(!a.blockless){for(var f=a.config,c=a.lang.format,j=f.format_tags.split(";"),d={},k=0,l=[],g=0;g<j.length;g++){var h=j[g],i=new CKEDITOR.style(f["format_"+h]);if(!a.filter.customConfig||a.filter.check(i))k++,d[h]=i,d[h]._.enterMode=a.config.enterMode,l.push(i)}0!==k&&a.ui.addRichCombo("Format",{label:c.label,title:c.panelTitle,toolbar:"styles,20",allowedContent:l,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(f.contentsCss),
multiSelect:!1,attributes:{"aria-label":c.panelTitle}},init:function(){this.startGroup(c.panelTitle);for(var b in d){var a=c["tag_"+b];this.add(b,d[b].buildPreview(a),a)}},onClick:function(b){a.focus();a.fire("saveSnapshot");var b=d[b],c=a.elementPath();a[b.checkActive(c)?"removeStyle":"applyStyle"](b);setTimeout(function(){a.fire("saveSnapshot")},0)},onRender:function(){a.on("selectionChange",function(b){var c=this.getValue(),b=b.data.path;this.refresh();for(var e in d)if(d[e].checkActive(b)){e!=
c&&this.setValue(e,a.lang.format["tag_"+e]);return}this.setValue("")},this)},onOpen:function(){this.showAll();for(var b in d)a.activeFilter.check(d[b])||this.hideItem(b)},refresh:function(){var b=a.elementPath();if(b){if(b.isContextFor("p"))for(var c in d)if(a.activeFilter.check(d[c]))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}}})}}});CKEDITOR.config.format_tags="p;h1;h2;h3;h4;h5;h6;pre;address;div";CKEDITOR.config.format_p={element:"p"};CKEDITOR.config.format_div={element:"div"};
CKEDITOR.config.format_pre={element:"pre"};CKEDITOR.config.format_address={element:"address"};CKEDITOR.config.format_h1={element:"h1"};CKEDITOR.config.format_h2={element:"h2"};CKEDITOR.config.format_h3={element:"h3"};CKEDITOR.config.format_h4={element:"h4"};CKEDITOR.config.format_h5={element:"h5"};CKEDITOR.config.format_h6={element:"h6"};(function(){var b={canUndo:!1,exec:function(a){var b=a.document.createElement("hr");a.insertElement(b)},allowedContent:"hr",requiredContent:"hr"};CKEDITOR.plugins.add("horizontalrule",{init:function(a){a.blockless||(a.addCommand("horizontalrule",b),a.ui.addButton&&a.ui.addButton("HorizontalRule",{label:a.lang.horizontalrule.toolbar,command:"horizontalrule",toolbar:"insert,40"}))}})})();CKEDITOR.plugins.add("htmlwriter",{init:function(b){var a=new CKEDITOR.htmlWriter;a.forceSimpleAmpersand=b.config.forceSimpleAmpersand;a.indentationChars=b.config.dataIndentationChars||"\t";b.dataProcessor.writer=a}});
CKEDITOR.htmlWriter=CKEDITOR.tools.createClass({base:CKEDITOR.htmlParser.basicWriter,$:function(){this.base();this.indentationChars="\t";this.selfClosingEnd=" />";this.lineBreakChars="\n";this.sortAttributes=1;this._.indent=0;this._.indentation="";this._.inPre=0;this._.rules={};var b=CKEDITOR.dtd,a;for(a in CKEDITOR.tools.extend({},b.$nonBodyContent,b.$block,b.$listItem,b.$tableContent))this.setRules(a,{indent:!b[a]["#"],breakBeforeOpen:1,breakBeforeClose:!b[a]["#"],breakAfterClose:1,needsSpace:a in
b.$block&&!(a in{li:1,dt:1,dd:1})});this.setRules("br",{breakAfterOpen:1});this.setRules("title",{indent:0,breakAfterOpen:0});this.setRules("style",{indent:0,breakBeforeClose:1});this.setRules("pre",{breakAfterOpen:1,indent:0})},proto:{openTag:function(b){var a=this._.rules[b];this._.afterCloser&&(a&&a.needsSpace&&this._.needsSpace)&&this._.output.push("\n");this._.indent?this.indentation():a&&a.breakBeforeOpen&&(this.lineBreak(),this.indentation());this._.output.push("<",b);this._.afterCloser=0},
openTagClose:function(b,a){var c=this._.rules[b];a?(this._.output.push(this.selfClosingEnd),c&&c.breakAfterClose&&(this._.needsSpace=c.needsSpace)):(this._.output.push(">"),c&&c.indent&&(this._.indentation+=this.indentationChars));c&&c.breakAfterOpen&&this.lineBreak();"pre"==b&&(this._.inPre=1)},attribute:function(b,a){"string"==typeof a&&(this.forceSimpleAmpersand&&(a=a.replace(/&amp;/g,"&")),a=CKEDITOR.tools.htmlEncodeAttr(a));this._.output.push(" ",b,'="',a,'"')},closeTag:function(b){var a=this._.rules[b];
a&&a.indent&&(this._.indentation=this._.indentation.substr(this.indentationChars.length));this._.indent?this.indentation():a&&a.breakBeforeClose&&(this.lineBreak(),this.indentation());this._.output.push("</",b,">");"pre"==b&&(this._.inPre=0);a&&a.breakAfterClose&&(this.lineBreak(),this._.needsSpace=a.needsSpace);this._.afterCloser=1},text:function(b){this._.indent&&(this.indentation(),!this._.inPre&&(b=CKEDITOR.tools.ltrim(b)));this._.output.push(b)},comment:function(b){this._.indent&&this.indentation();
this._.output.push("<\!--",b,"--\>")},lineBreak:function(){!this._.inPre&&0<this._.output.length&&this._.output.push(this.lineBreakChars);this._.indent=1},indentation:function(){!this._.inPre&&this._.indentation&&this._.output.push(this._.indentation);this._.indent=0},reset:function(){this._.output=[];this._.indent=0;this._.indentation="";this._.afterCloser=0;this._.inPre=0},setRules:function(b,a){var c=this._.rules[b];c?CKEDITOR.tools.extend(c,a,!0):this._.rules[b]=a}}});(function(){CKEDITOR.plugins.add("iframe",{requires:"dialog,fakeobjects",onLoad:function(){CKEDITOR.addCss("img.cke_iframe{background-image: url("+CKEDITOR.getUrl(this.path+"images/placeholder.png")+");background-position: center center;background-repeat: no-repeat;border: 1px solid #a9a9a9;width: 80px;height: 80px;}")},init:function(a){var b=a.lang.iframe,c="iframe[align,longdesc,frameborder,height,name,scrolling,src,title,width]";a.plugins.dialogadvtab&&(c+=";iframe"+a.plugins.dialogadvtab.allowedContent({id:1,
classes:1,styles:1}));CKEDITOR.dialog.add("iframe",this.path+"dialogs/iframe.js");a.addCommand("iframe",new CKEDITOR.dialogCommand("iframe",{allowedContent:c,requiredContent:"iframe"}));a.ui.addButton&&a.ui.addButton("Iframe",{label:b.toolbar,command:"iframe",toolbar:"insert,80"});a.on("doubleclick",function(a){var b=a.data.element;b.is("img")&&"iframe"==b.data("cke-real-element-type")&&(a.data.dialog="iframe")});a.addMenuItems&&a.addMenuItems({iframe:{label:b.title,command:"iframe",group:"image"}});
a.contextMenu&&a.contextMenu.addListener(function(a){if(a&&a.is("img")&&"iframe"==a.data("cke-real-element-type"))return{iframe:CKEDITOR.TRISTATE_OFF}})},afterInit:function(a){var b=a.dataProcessor;(b=b&&b.dataFilter)&&b.addRules({elements:{iframe:function(b){return a.createFakeParserElement(b,"cke_iframe","iframe",!0)}}})}})})();(function(){function k(a){var d=this.editor,b=a.document,c=b.body;(a=b.getElementById("cke_actscrpt"))&&a.parentNode.removeChild(a);(a=b.getElementById("cke_shimscrpt"))&&a.parentNode.removeChild(a);CKEDITOR.env.gecko&&(c.contentEditable=!1,2E4>CKEDITOR.env.version&&(c.innerHTML=c.innerHTML.replace(/^.*<\!-- cke-content-start --\>/,""),setTimeout(function(){var a=new CKEDITOR.dom.range(new CKEDITOR.dom.document(b));a.setStart(new CKEDITOR.dom.node(c),0);d.getSelection().selectRanges([a])},0)));c.contentEditable=
!0;CKEDITOR.env.ie&&(c.hideFocus=!0,c.disabled=!0,c.removeAttribute("disabled"));delete this._.isLoadingData;this.$=c;b=new CKEDITOR.dom.document(b);this.setup();CKEDITOR.env.ie&&(b.getDocumentElement().addClass(b.$.compatMode),d.config.enterMode!=CKEDITOR.ENTER_P&&this.attachListener(b,"selectionchange",function(){var a=b.getBody(),c=d.getSelection(),e=c&&c.getRanges()[0];e&&(a.getHtml().match(/^<p>(?:&nbsp;|<br>)<\/p>$/i)&&e.startContainer.equals(a))&&setTimeout(function(){e=d.getSelection().getRanges()[0];
if(!e.startContainer.equals("body")){a.getFirst().remove(1);e.moveToElementEditEnd(a);e.select()}},0)}));if(CKEDITOR.env.webkit||CKEDITOR.env.ie&&10<CKEDITOR.env.version)b.getDocumentElement().on("mousedown",function(a){a.data.getTarget().is("html")&&setTimeout(function(){d.editable().focus()})});try{d.document.$.execCommand("2D-position",!1,!0)}catch(e){}try{d.document.$.execCommand("enableInlineTableEditing",!1,!d.config.disableNativeTableHandles)}catch(g){}if(d.config.disableObjectResizing)try{this.getDocument().$.execCommand("enableObjectResizing",
!1,!1)}catch(f){this.attachListener(this,CKEDITOR.env.ie?"resizestart":"resize",function(a){a.data.preventDefault()})}(CKEDITOR.env.gecko||CKEDITOR.env.ie&&"CSS1Compat"==d.document.$.compatMode)&&this.attachListener(this,"keydown",function(a){var b=a.data.getKeystroke();if(b==33||b==34)if(CKEDITOR.env.ie)setTimeout(function(){d.getSelection().scrollIntoView()},0);else if(d.window.$.innerHeight>this.$.offsetHeight){var c=d.createRange();c[b==33?"moveToElementEditStart":"moveToElementEditEnd"](this);
c.select();a.data.preventDefault()}});CKEDITOR.env.ie&&this.attachListener(b,"blur",function(){try{b.$.selection.empty()}catch(a){}});d.document.getElementsByTag("title").getItem(0).data("cke-title",d.document.$.title);CKEDITOR.env.ie&&(d.document.$.title=this._.docTitle);CKEDITOR.tools.setTimeout(function(){d.fire("contentDom");if(this._.isPendingFocus){d.focus();this._.isPendingFocus=false}setTimeout(function(){d.fire("dataReady")},0);CKEDITOR.env.ie&&setTimeout(function(){if(d.document){var a=
d.document.$.body;a.runtimeStyle.marginBottom="0px";a.runtimeStyle.marginBottom=""}},1E3)},0,this)}function l(){var a=[];if(8<=CKEDITOR.document.$.documentMode){a.push("html.CSS1Compat [contenteditable=false]{min-height:0 !important}");var d=[],b;for(b in CKEDITOR.dtd.$removeEmpty)d.push("html.CSS1Compat "+b+"[contenteditable=false]");a.push(d.join(",")+"{display:inline-block}")}else CKEDITOR.env.gecko&&(a.push("html{height:100% !important}"),a.push("img:-moz-broken{-moz-force-broken-image-icon:1;min-width:24px;min-height:24px}"));
a.push("html{cursor:text;*cursor:auto}");a.push("img,input,textarea{cursor:default}");return a.join("\n")}CKEDITOR.plugins.add("wysiwygarea",{init:function(a){a.config.fullPage&&a.addFeature({allowedContent:"html head title; style [media,type]; body (*)[id]; meta link [*]",requiredContent:"body"});a.addMode("wysiwyg",function(d){function b(b){b&&b.removeListener();a.editable(new j(a,e.$.contentWindow.document.body));a.setData(a.getData(1),d)}var c="document.open();"+(CKEDITOR.env.ie?"("+CKEDITOR.tools.fixDomain+
")();":"")+"document.close();",c=CKEDITOR.env.air?"javascript:void(0)":CKEDITOR.env.ie?"javascript:void(function(){"+encodeURIComponent(c)+"}())":"",e=CKEDITOR.dom.element.createFromHtml('<iframe src="'+c+'" frameBorder="0"></iframe>');e.setStyles({width:"100%",height:"100%"});e.addClass("cke_wysiwyg_frame cke_reset");var g=a.ui.space("contents");g.append(e);if(c=CKEDITOR.env.ie||CKEDITOR.env.gecko)e.on("load",b);var f=a.title,h=a.lang.common.editorHelp;f&&(CKEDITOR.env.ie&&(f+=", "+h),e.setAttribute("title",
f));var f=CKEDITOR.tools.getNextId(),i=CKEDITOR.dom.element.createFromHtml('<span id="'+f+'" class="cke_voice_label">'+h+"</span>");g.append(i,1);a.on("beforeModeUnload",function(a){a.removeListener();i.remove()});e.setAttributes({"aria-describedby":f,tabIndex:a.tabIndex,allowTransparency:"true"});!c&&b();CKEDITOR.env.webkit&&(c=function(){g.setStyle("width","100%");e.hide();e.setSize("width",g.getSize("width"));g.removeStyle("width");e.show()},e.setCustomData("onResize",c),CKEDITOR.document.getWindow().on("resize",
c));a.fire("ariaWidget",e)})}});var j=CKEDITOR.tools.createClass({$:function(a){this.base.apply(this,arguments);this._.frameLoadedHandler=CKEDITOR.tools.addFunction(function(a){CKEDITOR.tools.setTimeout(k,0,this,a)},this);this._.docTitle=this.getWindow().getFrame().getAttribute("title")},base:CKEDITOR.editable,proto:{setData:function(a,d){var b=this.editor;if(d)this.setHtml(a),b.fire("dataReady");else{this._.isLoadingData=!0;b._.dataStore={id:1};var c=b.config,e=c.fullPage,g=c.docType,f=CKEDITOR.tools.buildStyleHtml(l()).replace(/<style>/,
'<style data-cke-temp="1">');e||(f+=CKEDITOR.tools.buildStyleHtml(b.config.contentsCss));var h=c.baseHref?'<base href="'+c.baseHref+'" data-cke-temp="1" />':"";e&&(a=a.replace(/<!DOCTYPE[^>]*>/i,function(a){b.docType=g=a;return""}).replace(/<\?xml\s[^\?]*\?>/i,function(a){b.xmlDeclaration=a;return""}));a=b.dataProcessor.toHtml(a);e?(/<body[\s|>]/.test(a)||(a="<body>"+a),/<html[\s|>]/.test(a)||(a="<html>"+a+"</html>"),/<head[\s|>]/.test(a)?/<title[\s|>]/.test(a)||(a=a.replace(/<head[^>]*>/,"$&<title></title>")):
a=a.replace(/<html[^>]*>/,"$&<head><title></title></head>"),h&&(a=a.replace(/<head>/,"$&"+h)),a=a.replace(/<\/head\s*>/,f+"$&"),a=g+a):a=c.docType+'<html dir="'+c.contentsLangDirection+'" lang="'+(c.contentsLanguage||b.langCode)+'"><head><title>'+this._.docTitle+"</title>"+h+f+"</head><body"+(c.bodyId?' id="'+c.bodyId+'"':"")+(c.bodyClass?' class="'+c.bodyClass+'"':"")+">"+a+"</body></html>";CKEDITOR.env.gecko&&(a=a.replace(/<body/,'<body contenteditable="true" '),2E4>CKEDITOR.env.version&&(a=a.replace(/<body[^>]*>/,
"$&<\!-- cke-content-start --\>")));c='<script id="cke_actscrpt" type="text/javascript"'+(CKEDITOR.env.ie?' defer="defer" ':"")+">var wasLoaded=0;function onload(){if(!wasLoaded)window.parent.CKEDITOR.tools.callFunction("+this._.frameLoadedHandler+",window);wasLoaded=1;}"+(CKEDITOR.env.ie?"onload();":'document.addEventListener("DOMContentLoaded", onload, false );')+"<\/script>";CKEDITOR.env.ie&&9>CKEDITOR.env.version&&(c+='<script id="cke_shimscrpt">window.parent.CKEDITOR.tools.enableHtml5Elements(document)<\/script>');
a=a.replace(/(?=\s*<\/(:?head)>)/,c);this.clearCustomData();this.clearListeners();b.fire("contentDomUnload");var i=this.getDocument();try{i.write(a)}catch(j){setTimeout(function(){i.write(a)},0)}}},getData:function(a){if(a)return this.getHtml();var a=this.editor,d=a.config,b=d.fullPage,c=b&&a.docType,e=b&&a.xmlDeclaration,g=this.getDocument(),b=b?g.getDocumentElement().getOuterHtml():g.getBody().getHtml();CKEDITOR.env.gecko&&d.enterMode!=CKEDITOR.ENTER_BR&&(b=b.replace(/<br>(?=\s*(:?$|<\/body>))/,
""));b=a.dataProcessor.toDataFormat(b);e&&(b=e+"\n"+b);c&&(b=c+"\n"+b);return b},focus:function(){this._.isLoadingData?this._.isPendingFocus=!0:j.baseProto.focus.call(this)},detach:function(){var a=this.editor,d=a.document,a=a.window.getFrame();j.baseProto.detach.call(this);this.clearCustomData();d.getDocumentElement().clearCustomData();a.clearCustomData();CKEDITOR.tools.removeFunction(this._.frameLoadedHandler);(d=a.removeCustomData("onResize"))&&d.removeListener();a.remove()}}})})();
CKEDITOR.config.disableObjectResizing=!1;CKEDITOR.config.disableNativeTableHandles=!0;CKEDITOR.config.disableNativeSpellChecker=!0;CKEDITOR.config.contentsCss=CKEDITOR.getUrl("contents.css");(function(){function e(b,a){a||(a=b.getSelection().getSelectedElement());if(a&&a.is("img")&&!a.data("cke-realelement")&&!a.isReadOnly())return a}function f(b){var a=b.getStyle("float");if("inherit"==a||"none"==a)a=0;a||(a=b.getAttribute("align"));return a}CKEDITOR.plugins.add("image",{requires:"dialog",init:function(b){if(!b.plugins.image2){CKEDITOR.dialog.add("image",this.path+"dialogs/image.js");var a="img[alt,!src]{border-style,border-width,float,height,margin,margin-bottom,margin-left,margin-right,margin-top,width}";
CKEDITOR.dialog.isTabEnabled(b,"image","advanced")&&(a="img[alt,dir,id,lang,longdesc,!src,title]{*}(*)");b.addCommand("image",new CKEDITOR.dialogCommand("image",{allowedContent:a,requiredContent:"img[alt,src]",contentTransformations:[["img{width}: sizeToStyle","img[width]: sizeToAttribute"],["img{float}: alignmentToStyle","img[align]: alignmentToAttribute"]]}));b.ui.addButton&&b.ui.addButton("Image",{label:b.lang.common.image,command:"image",toolbar:"insert,10"});b.on("doubleclick",function(b){var a=
b.data.element;a.is("img")&&(!a.data("cke-realelement")&&!a.isReadOnly())&&(b.data.dialog="image")});b.addMenuItems&&b.addMenuItems({image:{label:b.lang.image.menu,command:"image",group:"image"}});b.contextMenu&&b.contextMenu.addListener(function(a){if(e(b,a))return{image:CKEDITOR.TRISTATE_OFF}})}},afterInit:function(b){function a(a){var d=b.getCommand("justify"+a);if(d){if("left"==a||"right"==a)d.on("exec",function(d){var c=e(b),g;c&&(g=f(c),g==a?(c.removeStyle("float"),a==f(c)&&c.removeAttribute("align")):
c.setStyle("float",a),d.cancel())});d.on("refresh",function(d){var c=e(b);c&&(c=f(c),this.setState(c==a?CKEDITOR.TRISTATE_ON:"right"==a||"left"==a?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED),d.cancel())})}}b.plugins.image2||(a("left"),a("right"),a("center"),a("block"))}})})();CKEDITOR.config.image_removeLinkByEmptyURL=!0;(function(){function k(a,b){var e,f;b.on("refresh",function(a){var b=[i],c;for(c in a.data.states)b.push(a.data.states[c]);this.setState(CKEDITOR.tools.search(b,m)?m:i)},b,null,100);b.on("exec",function(b){e=a.getSelection();f=e.createBookmarks(1);b.data||(b.data={});b.data.done=!1},b,null,0);b.on("exec",function(){a.forceNextSelectionCheck();e.selectBookmarks(f)},b,null,100)}var i=CKEDITOR.TRISTATE_DISABLED,m=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indent",{init:function(a){var b=CKEDITOR.plugins.indent.genericDefinition;
k(a,a.addCommand("indent",new b(!0)));k(a,a.addCommand("outdent",new b));a.ui.addButton&&(a.ui.addButton("Indent",{label:a.lang.indent.indent,command:"indent",directional:!0,toolbar:"indent,20"}),a.ui.addButton("Outdent",{label:a.lang.indent.outdent,command:"outdent",directional:!0,toolbar:"indent,10"}));a.on("dirChanged",function(b){var f=a.createRange(),j=b.data.node;f.setStartBefore(j);f.setEndAfter(j);for(var l=new CKEDITOR.dom.walker(f),c;c=l.next();)if(c.type==CKEDITOR.NODE_ELEMENT)if(!c.equals(j)&&
c.getDirection()){f.setStartAfter(c);l=new CKEDITOR.dom.walker(f)}else{var d=a.config.indentClasses;if(d)for(var g=b.data.dir=="ltr"?["_rtl",""]:["","_rtl"],h=0;h<d.length;h++)if(c.hasClass(d[h]+g[0])){c.removeClass(d[h]+g[0]);c.addClass(d[h]+g[1])}d=c.getStyle("margin-right");g=c.getStyle("margin-left");d?c.setStyle("margin-left",d):c.removeStyle("margin-left");g?c.setStyle("margin-right",g):c.removeStyle("margin-right")}})}});CKEDITOR.plugins.indent={genericDefinition:function(a){this.isIndent=
!!a;this.startDisabled=!this.isIndent},specificDefinition:function(a,b,e){this.name=b;this.editor=a;this.jobs={};this.enterBr=a.config.enterMode==CKEDITOR.ENTER_BR;this.isIndent=!!e;this.relatedGlobal=e?"indent":"outdent";this.indentKey=e?9:CKEDITOR.SHIFT+9;this.database={}},registerCommands:function(a,b){a.on("pluginsLoaded",function(){for(var a in b)(function(a,b){var e=a.getCommand(b.relatedGlobal),c;for(c in b.jobs)e.on("exec",function(d){d.data.done||(a.fire("lockSnapshot"),b.execJob(a,c)&&(d.data.done=
!0),a.fire("unlockSnapshot"),CKEDITOR.dom.element.clearAllMarkers(b.database))},this,null,c),e.on("refresh",function(d){d.data.states||(d.data.states={});d.data.states[b.name+"@"+c]=b.refreshJob(a,c,d.data.path)},this,null,c);a.addFeature(b)})(this,b[a])})}};CKEDITOR.plugins.indent.genericDefinition.prototype={context:"p",exec:function(){}};CKEDITOR.plugins.indent.specificDefinition.prototype={execJob:function(a,b){var e=this.jobs[b];if(e.state!=i)return e.exec.call(this,a)},refreshJob:function(a,
b,e){b=this.jobs[b];b.state=a.activeFilter.checkFeature(this)?b.refresh.call(this,a,e):i;return b.state},getContext:function(a){return a.contains(this.context)}}})();(function(){function h(b,c,a){if(!b.getCustomData("indent_processed")){var d=this.editor,f=this.isIndent;if(c){d=b.$.className.match(this.classNameRegex);a=0;d&&(d=d[1],a=CKEDITOR.tools.indexOf(c,d)+1);if(0>(a+=f?1:-1))return;a=Math.min(a,c.length);a=Math.max(a,0);b.$.className=CKEDITOR.tools.ltrim(b.$.className.replace(this.classNameRegex,""));0<a&&b.addClass(c[a-1])}else{var c=i(b,a),a=parseInt(b.getStyle(c),10),g=d.config.indentOffset||40;isNaN(a)&&(a=0);a+=(f?1:-1)*g;if(0>a)return;a=Math.max(a,
0);a=Math.ceil(a/g)*g;b.setStyle(c,a?a+(d.config.indentUnit||"px"):"");""===b.getAttribute("style")&&b.removeAttribute("style")}CKEDITOR.dom.element.setMarker(this.database,b,"indent_processed",1)}}function i(b,c){return"ltr"==(c||b.getComputedStyle("direction"))?"margin-left":"margin-right"}var j=CKEDITOR.dtd.$listItem,l=CKEDITOR.dtd.$list,f=CKEDITOR.TRISTATE_DISABLED,k=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentblock",{requires:"indent",init:function(b){function c(b,c){a.specificDefinition.apply(this,
arguments);this.allowedContent={"div h1 h2 h3 h4 h5 h6 ol p pre ul":{propertiesOnly:!0,styles:!d?"margin-left,margin-right":null,classes:d||null}};this.enterBr&&(this.allowedContent.div=!0);this.requiredContent=(this.enterBr?"div":"p")+(d?"("+d.join(",")+")":"{margin-left}");this.jobs={20:{refresh:function(a,b){var e=b.block||b.blockLimit;if(e.is(j))e=e.getParent();else if(e.getAscendant(j))return f;if(!this.enterBr&&!this.getContext(b))return f;if(d){var c;c=d;var e=e.$.className.match(this.classNameRegex),
g=this.isIndent;c=e?g?e[1]!=c.slice(-1):true:g;return c?k:f}return this.isIndent?k:e?CKEDITOR[(parseInt(e.getStyle(i(e)),10)||0)<=0?"TRISTATE_DISABLED":"TRISTATE_OFF"]:f},exec:function(a){var b=a.getSelection(),b=b&&b.getRanges()[0],c;if(c=a.elementPath().contains(l))h.call(this,c,d);else{b=b.createIterator();a=a.config.enterMode;b.enforceRealBlocks=true;for(b.enlargeBr=a!=CKEDITOR.ENTER_BR;c=b.getNextParagraph(a==CKEDITOR.ENTER_P?"p":"div");)c.isReadOnly()||h.call(this,c,d)}return true}}}}var a=
CKEDITOR.plugins.indent,d=b.config.indentClasses;a.registerCommands(b,{indentblock:new c(b,"indentblock",!0),outdentblock:new c(b,"outdentblock")});CKEDITOR.tools.extend(c.prototype,a.specificDefinition.prototype,{context:{div:1,dl:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,ul:1,ol:1,p:1,pre:1,table:1},classNameRegex:d?RegExp("(?:^|\\s+)("+d.join("|")+")(?=$|\\s)"):null})}})})();(function(){function s(e){function g(b){for(var f=d.startContainer,a=d.endContainer;f&&!f.getParent().equals(b);)f=f.getParent();for(;a&&!a.getParent().equals(b);)a=a.getParent();if(!f||!a)return!1;for(var h=f,f=[],c=!1;!c;)h.equals(a)&&(c=!0),f.push(h),h=h.getNext();if(1>f.length)return!1;h=b.getParents(!0);for(a=0;a<h.length;a++)if(h[a].getName&&k[h[a].getName()]){b=h[a];break}for(var h=n.isIndent?1:-1,a=f[0],f=f[f.length-1],c=CKEDITOR.plugins.list.listToArray(b,o),g=c[f.getCustomData("listarray_index")].indent,
a=a.getCustomData("listarray_index");a<=f.getCustomData("listarray_index");a++)if(c[a].indent+=h,0<h){var l=c[a].parent;c[a].parent=new CKEDITOR.dom.element(l.getName(),l.getDocument())}for(a=f.getCustomData("listarray_index")+1;a<c.length&&c[a].indent>g;a++)c[a].indent+=h;f=CKEDITOR.plugins.list.arrayToList(c,o,null,e.config.enterMode,b.getDirection());if(!n.isIndent){var i;if((i=b.getParent())&&i.is("li"))for(var h=f.listNode.getChildren(),m=[],j,a=h.count()-1;0<=a;a--)(j=h.getItem(a))&&(j.is&&
j.is("li"))&&m.push(j)}f&&f.listNode.replace(b);if(m&&m.length)for(a=0;a<m.length;a++){for(j=b=m[a];(j=j.getNext())&&j.is&&j.getName()in k;)CKEDITOR.env.needsNbspFiller&&!b.getFirst(t)&&b.append(d.document.createText(" ")),b.append(j);b.insertAfter(i)}f&&e.fire("contentDomInvalidated");return!0}for(var n=this,o=this.database,k=this.context,l=e.getSelection(),l=(l&&l.getRanges()).createIterator(),d;d=l.getNextRange();){for(var b=d.getCommonAncestor();b&&!(b.type==CKEDITOR.NODE_ELEMENT&&k[b.getName()]);)b=
b.getParent();b||(b=d.startPath().contains(k))&&d.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);if(!b){var c=d.getEnclosedNode();c&&(c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in k)&&(d.setStartAt(c,CKEDITOR.POSITION_AFTER_START),d.setEndAt(c,CKEDITOR.POSITION_BEFORE_END),b=c)}b&&(d.startContainer.type==CKEDITOR.NODE_ELEMENT&&d.startContainer.getName()in k)&&(c=new CKEDITOR.dom.walker(d),c.evaluator=i,d.startContainer=c.next());b&&(d.endContainer.type==CKEDITOR.NODE_ELEMENT&&d.endContainer.getName()in k)&&
(c=new CKEDITOR.dom.walker(d),c.evaluator=i,d.endContainer=c.previous());if(b)return g(b)}return 0}function p(e,g){g||(g=e.contains(this.context));return g&&e.block&&e.block.equals(g.getFirst(i))}function i(e){return e.type==CKEDITOR.NODE_ELEMENT&&e.is("li")}function t(e){return u(e)&&v(e)}var u=CKEDITOR.dom.walker.whitespaces(!0),v=CKEDITOR.dom.walker.bookmark(!1,!0),q=CKEDITOR.TRISTATE_DISABLED,r=CKEDITOR.TRISTATE_OFF;CKEDITOR.plugins.add("indentlist",{requires:"indent",init:function(e){function g(e,
g){i.specificDefinition.apply(this,arguments);this.requiredContent=["ul","ol"];e.on("key",function(g){if("wysiwyg"==e.mode&&g.data.keyCode==this.indentKey){var d=this.getContext(e.elementPath());if(d&&(!this.isIndent||!p.call(this,e.elementPath(),d)))e.execCommand(this.relatedGlobal),g.cancel()}},this);this.jobs[this.isIndent?10:30]={refresh:this.isIndent?function(e,d){var b=this.getContext(d),c=p.call(this,d,b);return!b||!this.isIndent||c?q:r}:function(e,d){return!this.getContext(d)||this.isIndent?
q:r},exec:CKEDITOR.tools.bind(s,this)}}var i=CKEDITOR.plugins.indent;i.registerCommands(e,{indentlist:new g(e,"indentlist",!0),outdentlist:new g(e,"outdentlist")});CKEDITOR.tools.extend(g.prototype,i.specificDefinition.prototype,{context:{ol:1,ul:1}})}})})();CKEDITOR.plugins.add("smiley",{requires:"dialog",init:function(a){a.config.smiley_path=a.config.smiley_path||this.path+"images/";a.addCommand("smiley",new CKEDITOR.dialogCommand("smiley",{allowedContent:"img[alt,height,!src,title,width]",requiredContent:"img"}));a.ui.addButton&&a.ui.addButton("Smiley",{label:a.lang.smiley.toolbar,command:"smiley",toolbar:"insert,50"});CKEDITOR.dialog.add("smiley",this.path+"dialogs/smiley.js")}});CKEDITOR.config.smiley_images="regular_smile.png sad_smile.png wink_smile.png teeth_smile.png confused_smile.png tongue_smile.png embarrassed_smile.png omg_smile.png whatchutalkingabout_smile.png angry_smile.png angel_smile.png shades_smile.png devil_smile.png cry_smile.png lightbulb.png thumbs_down.png thumbs_up.png heart.png broken_heart.png kiss.png envelope.png".split(" ");
CKEDITOR.config.smiley_descriptions="smiley;sad;wink;laugh;frown;cheeky;blush;surprise;indecision;angry;angel;cool;devil;crying;enlightened;no;yes;heart;broken heart;kiss;mail".split(";");(function(){function l(a,c){var c=void 0===c||c,b;if(c)b=a.getComputedStyle("text-align");else{for(;!a.hasAttribute||!a.hasAttribute("align")&&!a.getStyle("text-align");){b=a.getParent();if(!b)break;a=b}b=a.getStyle("text-align")||a.getAttribute("align")||""}b&&(b=b.replace(/(?:-(?:moz|webkit)-)?(?:start|auto)/i,""));!b&&c&&(b="rtl"==a.getComputedStyle("direction")?"right":"left");return b}function g(a,c,b){this.editor=a;this.name=c;this.value=b;this.context="p";var c=a.config.justifyClasses,h=a.config.enterMode==
CKEDITOR.ENTER_P?"p":"div";if(c){switch(b){case "left":this.cssClassName=c[0];break;case "center":this.cssClassName=c[1];break;case "right":this.cssClassName=c[2];break;case "justify":this.cssClassName=c[3]}this.cssClassRegex=RegExp("(?:^|\\s+)(?:"+c.join("|")+")(?=$|\\s)");this.requiredContent=h+"("+this.cssClassName+")"}else this.requiredContent=h+"{text-align}";this.allowedContent={"caption div h1 h2 h3 h4 h5 h6 p pre td th li":{propertiesOnly:!0,styles:this.cssClassName?null:"text-align",classes:this.cssClassName||
null}};a.config.enterMode==CKEDITOR.ENTER_BR&&(this.allowedContent.div=!0)}function j(a){var c=a.editor,b=c.createRange();b.setStartBefore(a.data.node);b.setEndAfter(a.data.node);for(var h=new CKEDITOR.dom.walker(b),d;d=h.next();)if(d.type==CKEDITOR.NODE_ELEMENT)if(!d.equals(a.data.node)&&d.getDirection())b.setStartAfter(d),h=new CKEDITOR.dom.walker(b);else{var e=c.config.justifyClasses;e&&(d.hasClass(e[0])?(d.removeClass(e[0]),d.addClass(e[2])):d.hasClass(e[2])&&(d.removeClass(e[2]),d.addClass(e[0])));
e=d.getStyle("text-align");"left"==e?d.setStyle("text-align","right"):"right"==e&&d.setStyle("text-align","left")}}g.prototype={exec:function(a){var c=a.getSelection(),b=a.config.enterMode;if(c){for(var h=c.createBookmarks(),d=c.getRanges(),e=this.cssClassName,g,f,i=a.config.useComputedState,i=void 0===i||i,k=d.length-1;0<=k;k--){g=d[k].createIterator();for(g.enlargeBr=b!=CKEDITOR.ENTER_BR;f=g.getNextParagraph(b==CKEDITOR.ENTER_P?"p":"div");)if(!f.isReadOnly()){f.removeAttribute("align");f.removeStyle("text-align");
var j=e&&(f.$.className=CKEDITOR.tools.ltrim(f.$.className.replace(this.cssClassRegex,""))),m=this.state==CKEDITOR.TRISTATE_OFF&&(!i||l(f,!0)!=this.value);e?m?f.addClass(e):j||f.removeAttribute("class"):m&&f.setStyle("text-align",this.value)}}a.focus();a.forceNextSelectionCheck();c.selectBookmarks(h)}},refresh:function(a,c){var b=c.block||c.blockLimit;this.setState("body"!=b.getName()&&l(b,this.editor.config.useComputedState)==this.value?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("justify",
{init:function(a){if(!a.blockless){var c=new g(a,"justifyleft","left"),b=new g(a,"justifycenter","center"),h=new g(a,"justifyright","right"),d=new g(a,"justifyblock","justify");a.addCommand("justifyleft",c);a.addCommand("justifycenter",b);a.addCommand("justifyright",h);a.addCommand("justifyblock",d);a.ui.addButton&&(a.ui.addButton("JustifyLeft",{label:a.lang.justify.left,command:"justifyleft",toolbar:"align,10"}),a.ui.addButton("JustifyCenter",{label:a.lang.justify.center,command:"justifycenter",
toolbar:"align,20"}),a.ui.addButton("JustifyRight",{label:a.lang.justify.right,command:"justifyright",toolbar:"align,30"}),a.ui.addButton("JustifyBlock",{label:a.lang.justify.block,command:"justifyblock",toolbar:"align,40"}));a.on("dirChanged",j)}}})})();CKEDITOR.plugins.add("menubutton",{requires:"button,menu",onLoad:function(){var d=function(c){var a=this._,b=a.menu;a.state!==CKEDITOR.TRISTATE_DISABLED&&(a.on&&b?b.hide():(a.previousState=a.state,b||(b=a.menu=new CKEDITOR.menu(c,{panel:{className:"cke_menu_panel",attributes:{"aria-label":c.lang.common.options}}}),b.onHide=CKEDITOR.tools.bind(function(){var b=this.command?c.getCommand(this.command).modes:this.modes;this.setState(!b||b[c.mode]?a.previousState:CKEDITOR.TRISTATE_DISABLED);a.on=0},this),
this.onMenu&&b.addListener(this.onMenu)),this.setState(CKEDITOR.TRISTATE_ON),a.on=1,setTimeout(function(){b.show(CKEDITOR.document.getById(a.id),4)},0)))};CKEDITOR.ui.menuButton=CKEDITOR.tools.createClass({base:CKEDITOR.ui.button,$:function(c){delete c.panel;this.base(c);this.hasArrow=!0;this.click=d},statics:{handler:{create:function(c){return new CKEDITOR.ui.menuButton(c)}}}})},beforeInit:function(d){d.ui.addHandler(CKEDITOR.UI_MENUBUTTON,CKEDITOR.ui.menuButton.handler)}});
CKEDITOR.UI_MENUBUTTON="menubutton";(function(){CKEDITOR.plugins.add("language",{requires:"menubutton",init:function(a){var b=a.config.language_list||["ar:Arabic:rtl","fr:French","es:Spanish"],c=this,d=a.lang.language,e={},g,h,i,f;a.addCommand("language",{allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",contextSensitive:!0,exec:function(a,b){var c=e["language_"+b];if(c)a[c.style.checkActive(a.elementPath())?"removeStyle":"applyStyle"](c.style)},refresh:function(a){this.setState(c.getCurrentLangElement(a)?CKEDITOR.TRISTATE_ON:
CKEDITOR.TRISTATE_OFF)}});for(f=0;f<b.length;f++)g=b[f].split(":"),h=g[0],i="language_"+h,e[i]={label:g[1],langId:h,group:"language",order:f,ltr:"rtl"!=(""+g[2]).toLowerCase(),onClick:function(){a.execCommand("language",this.langId)},role:"menuitemcheckbox"},e[i].style=new CKEDITOR.style({element:"span",attributes:{lang:h,dir:e[i].ltr?"ltr":"rtl"}});e.language_remove={label:d.remove,group:"language_remove",state:CKEDITOR.TRISTATE_DISABLED,order:e.length,onClick:function(){var b=c.getCurrentLangElement(a);
b&&a.execCommand("language",b.getAttribute("lang"))}};a.addMenuGroup("language",1);a.addMenuGroup("language_remove");a.addMenuItems(e);a.ui.add("Language",CKEDITOR.UI_MENUBUTTON,{label:d.button,allowedContent:"span[!lang,!dir]",requiredContent:"span[lang,dir]",toolbar:"bidi,30",command:"language",onMenu:function(){var b={},d=c.getCurrentLangElement(a),f;for(f in e)b[f]=CKEDITOR.TRISTATE_OFF;b.language_remove=d?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED;d&&(b["language_"+d.getAttribute("lang")]=
CKEDITOR.TRISTATE_ON);return b}})},getCurrentLangElement:function(a){var b=a.elementPath(),a=b&&b.elements,c;if(b)for(var d=0;d<a.length;d++)b=a[d],!c&&("span"==b.getName()&&b.hasAttribute("dir")&&b.hasAttribute("lang"))&&(c=b);return c}})})();CKEDITOR.plugins.add("link",{requires:"dialog,fakeobjects",onLoad:function(){function b(b){return d.replace(/%1/g,"rtl"==b?"right":"left").replace(/%2/g,"cke_contents_"+b)}var a="background:url("+CKEDITOR.getUrl(this.path+"images"+(CKEDITOR.env.hidpi?"/hidpi":"")+"/anchor.png")+") no-repeat %1 center;border:1px dotted #00f;background-size:16px;",d=".%2 a.cke_anchor,.%2 a.cke_anchor_empty,.cke_editable.%2 a[name],.cke_editable.%2 a[data-cke-saved-name]{"+a+"padding-%1:18px;cursor:auto;}"+(CKEDITOR.plugins.link.synAnchorSelector?
"a.cke_anchor_empty{display:inline-block;"+(CKEDITOR.env.ie&&10<CKEDITOR.env.version?"min-height:16px;vertical-align:middle":"")+"}":"")+".%2 img.cke_anchor{"+a+"width:16px;min-height:15px;height:1.15em;vertical-align:"+(CKEDITOR.env.opera?"middle":"text-bottom")+";}";CKEDITOR.addCss(b("ltr")+b("rtl"))},init:function(b){var a="a[!href]";CKEDITOR.dialog.isTabEnabled(b,"link","advanced")&&(a=a.replace("]",",accesskey,charset,dir,id,lang,name,rel,tabindex,title,type]{*}(*)"));CKEDITOR.dialog.isTabEnabled(b,
"link","target")&&(a=a.replace("]",",target,onclick]"));b.addCommand("link",new CKEDITOR.dialogCommand("link",{allowedContent:a,requiredContent:"a[href]"}));b.addCommand("anchor",new CKEDITOR.dialogCommand("anchor",{allowedContent:"a[!name,id]",requiredContent:"a[name]"}));b.addCommand("unlink",new CKEDITOR.unlinkCommand);b.addCommand("removeAnchor",new CKEDITOR.removeAnchorCommand);b.setKeystroke(CKEDITOR.CTRL+76,"link");b.ui.addButton&&(b.ui.addButton("Link",{label:b.lang.link.toolbar,command:"link",
toolbar:"links,10"}),b.ui.addButton("Unlink",{label:b.lang.link.unlink,command:"unlink",toolbar:"links,20"}),b.ui.addButton("Anchor",{label:b.lang.link.anchor.toolbar,command:"anchor",toolbar:"links,30"}));CKEDITOR.dialog.add("link",this.path+"dialogs/link.js");CKEDITOR.dialog.add("anchor",this.path+"dialogs/anchor.js");b.on("doubleclick",function(a){var c=CKEDITOR.plugins.link.getSelectedLink(b)||a.data.element;if(!c.isReadOnly())if(c.is("a")){a.data.dialog=c.getAttribute("name")&&(!c.getAttribute("href")||
!c.getChildCount())?"anchor":"link";b.getSelection().selectElement(c)}else if(CKEDITOR.plugins.link.tryRestoreFakeAnchor(b,c))a.data.dialog="anchor"});b.addMenuItems&&b.addMenuItems({anchor:{label:b.lang.link.anchor.menu,command:"anchor",group:"anchor",order:1},removeAnchor:{label:b.lang.link.anchor.remove,command:"removeAnchor",group:"anchor",order:5},link:{label:b.lang.link.menu,command:"link",group:"link",order:1},unlink:{label:b.lang.link.unlink,command:"unlink",group:"link",order:5}});b.contextMenu&&
b.contextMenu.addListener(function(a){if(!a||a.isReadOnly())return null;a=CKEDITOR.plugins.link.tryRestoreFakeAnchor(b,a);if(!a&&!(a=CKEDITOR.plugins.link.getSelectedLink(b)))return null;var c={};a.getAttribute("href")&&a.getChildCount()&&(c={link:CKEDITOR.TRISTATE_OFF,unlink:CKEDITOR.TRISTATE_OFF});if(a&&a.hasAttribute("name"))c.anchor=c.removeAnchor=CKEDITOR.TRISTATE_OFF;return c})},afterInit:function(b){var a=b.dataProcessor,d=a&&a.dataFilter,a=a&&a.htmlFilter,c=b._.elementsPath&&b._.elementsPath.filters;
d&&d.addRules({elements:{a:function(a){var c=a.attributes;if(!c.name)return null;var d=!a.children.length;if(CKEDITOR.plugins.link.synAnchorSelector){var a=d?"cke_anchor_empty":"cke_anchor",g=c["class"];if(c.name&&(!g||0>g.indexOf(a)))c["class"]=(g||"")+" "+a;d&&CKEDITOR.plugins.link.emptyAnchorFix&&(c.contenteditable="false",c["data-cke-editable"]=1)}else if(CKEDITOR.plugins.link.fakeAnchor&&d)return b.createFakeParserElement(a,"cke_anchor","anchor");return null}}});CKEDITOR.plugins.link.emptyAnchorFix&&
a&&a.addRules({elements:{a:function(a){delete a.attributes.contenteditable}}});c&&c.push(function(a,c){if("a"==c&&(CKEDITOR.plugins.link.tryRestoreFakeAnchor(b,a)||a.getAttribute("name")&&(!a.getAttribute("href")||!a.getChildCount())))return"anchor"})}});
CKEDITOR.plugins.link={getSelectedLink:function(b){var a=b.getSelection(),d=a.getSelectedElement();return d&&d.is("a")?d:(a=a.getRanges()[0])?(a.shrink(CKEDITOR.SHRINK_TEXT),b.elementPath(a.getCommonAncestor()).contains("a",1)):null},getEditorAnchors:function(b){for(var a=b.editable(),d=a.isInline()&&!b.plugins.divarea?b.document:a,c=d.getElementsByTag("a"),a=[],f=0,e;e=c.getItem(f++);)if(e.data("cke-saved-name")||e.hasAttribute("name"))a.push({name:e.data("cke-saved-name")||e.getAttribute("name"),
id:e.getAttribute("id")});if(this.fakeAnchor){d=d.getElementsByTag("img");for(f=0;e=d.getItem(f++);)(e=this.tryRestoreFakeAnchor(b,e))&&a.push({name:e.getAttribute("name"),id:e.getAttribute("id")})}return a},fakeAnchor:CKEDITOR.env.opera||CKEDITOR.env.webkit,synAnchorSelector:CKEDITOR.env.ie,emptyAnchorFix:CKEDITOR.env.ie&&8>CKEDITOR.env.version,tryRestoreFakeAnchor:function(b,a){if(a&&a.data("cke-real-element-type")&&"anchor"==a.data("cke-real-element-type")){var d=b.restoreRealElement(a);if(d.data("cke-saved-name"))return d}}};
CKEDITOR.unlinkCommand=function(){};CKEDITOR.unlinkCommand.prototype={exec:function(b){var a=new CKEDITOR.style({element:"a",type:CKEDITOR.STYLE_INLINE,alwaysRemoveElement:1});b.removeStyle(a)},refresh:function(b,a){var d=a.lastElement&&a.lastElement.getAscendant("a",!0);d&&"a"==d.getName()&&d.getAttribute("href")&&d.getChildCount()?this.setState(CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_DISABLED)},contextSensitive:1,startDisabled:1,requiredContent:"a[href]"};
CKEDITOR.removeAnchorCommand=function(){};CKEDITOR.removeAnchorCommand.prototype={exec:function(b){var a=b.getSelection(),d=a.createBookmarks(),c;if(a&&(c=a.getSelectedElement())&&(CKEDITOR.plugins.link.fakeAnchor&&!c.getChildCount()?CKEDITOR.plugins.link.tryRestoreFakeAnchor(b,c):c.is("a")))c.remove(1);else if(c=CKEDITOR.plugins.link.getSelectedLink(b))c.hasAttribute("href")?(c.removeAttributes({name:1,"data-cke-saved-name":1}),c.removeClass("cke_anchor")):c.remove(1);a.selectBookmarks(d)},requiredContent:"a[name]"};
CKEDITOR.tools.extend(CKEDITOR.config,{linkShowAdvancedTab:!0,linkShowTargetTab:!0});(function(){function E(c,j,e){function b(b){if((d=a[b?"getFirst":"getLast"]())&&(!d.is||!d.isBlockBoundary())&&(m=j.root[b?"getPrevious":"getNext"](CKEDITOR.dom.walker.invisible(!0)))&&(!m.is||!m.isBlockBoundary({br:1})))c.document.createElement("br")[b?"insertBefore":"insertAfter"](d)}for(var k=CKEDITOR.plugins.list.listToArray(j.root,e),g=[],h=0;h<j.contents.length;h++){var f=j.contents[h];if((f=f.getAscendant("li",!0))&&!f.getCustomData("list_item_processed"))g.push(f),CKEDITOR.dom.element.setMarker(e,
f,"list_item_processed",!0)}f=null;for(h=0;h<g.length;h++)f=g[h].getCustomData("listarray_index"),k[f].indent=-1;for(h=f+1;h<k.length;h++)if(k[h].indent>k[h-1].indent+1){g=k[h-1].indent+1-k[h].indent;for(f=k[h].indent;k[h]&&k[h].indent>=f;)k[h].indent+=g,h++;h--}var a=CKEDITOR.plugins.list.arrayToList(k,e,null,c.config.enterMode,j.root.getAttribute("dir")).listNode,d,m;b(!0);b();a.replace(j.root);c.fire("contentDomInvalidated")}function x(c,j){this.name=c;this.context=this.type=j;this.allowedContent=
j+" li";this.requiredContent=j}function A(c,j,e,b){for(var k,g;k=c[b?"getLast":"getFirst"](F);)(g=k.getDirection(1))!==j.getDirection(1)&&k.setAttribute("dir",g),k.remove(),e?k[b?"insertBefore":"insertAfter"](e):j.append(k,b)}function B(c){var j;(j=function(e){var b=c[e?"getPrevious":"getNext"](q);b&&(b.type==CKEDITOR.NODE_ELEMENT&&b.is(c.getName()))&&(A(c,b,null,!e),c.remove(),c=b)})();j(1)}function C(c){return c.type==CKEDITOR.NODE_ELEMENT&&(c.getName()in CKEDITOR.dtd.$block||c.getName()in CKEDITOR.dtd.$listItem)&&
CKEDITOR.dtd[c.getName()]["#"]}function y(c,j,e){c.fire("saveSnapshot");e.enlarge(CKEDITOR.ENLARGE_LIST_ITEM_CONTENTS);var b=e.extractContents();j.trim(!1,!0);var k=j.createBookmark(),g=new CKEDITOR.dom.elementPath(j.startContainer),h=g.block,g=g.lastElement.getAscendant("li",1)||h,f=new CKEDITOR.dom.elementPath(e.startContainer),a=f.contains(CKEDITOR.dtd.$listItem),f=f.contains(CKEDITOR.dtd.$list);h?(h=h.getBogus())&&h.remove():f&&(h=f.getPrevious(q))&&v(h)&&h.remove();(h=b.getLast())&&(h.type==
CKEDITOR.NODE_ELEMENT&&h.is("br"))&&h.remove();(h=j.startContainer.getChild(j.startOffset))?b.insertBefore(h):j.startContainer.append(b);if(a&&(b=w(a)))g.contains(a)?(A(b,a.getParent(),a),b.remove()):g.append(b);for(;e.checkStartOfBlock()&&e.checkEndOfBlock();){f=e.startPath();b=f.block;if(!b)break;b.is("li")&&(g=b.getParent(),b.equals(g.getLast(q))&&b.equals(g.getFirst(q))&&(b=g));e.moveToPosition(b,CKEDITOR.POSITION_BEFORE_START);b.remove()}e=e.clone();b=c.editable();e.setEndAt(b,CKEDITOR.POSITION_BEFORE_END);
e=new CKEDITOR.dom.walker(e);e.evaluator=function(a){return q(a)&&!v(a)};(e=e.next())&&(e.type==CKEDITOR.NODE_ELEMENT&&e.getName()in CKEDITOR.dtd.$list)&&B(e);j.moveToBookmark(k);j.select();c.fire("saveSnapshot")}function w(c){return(c=c.getLast(q))&&c.type==CKEDITOR.NODE_ELEMENT&&c.getName()in r?c:null}var r={ol:1,ul:1},G=CKEDITOR.dom.walker.whitespaces(),D=CKEDITOR.dom.walker.bookmark(),q=function(c){return!(G(c)||D(c))},v=CKEDITOR.dom.walker.bogus();CKEDITOR.plugins.list={listToArray:function(c,
j,e,b,k){if(!r[c.getName()])return[];b||(b=0);e||(e=[]);for(var g=0,h=c.getChildCount();g<h;g++){var f=c.getChild(g);f.type==CKEDITOR.NODE_ELEMENT&&f.getName()in CKEDITOR.dtd.$list&&CKEDITOR.plugins.list.listToArray(f,j,e,b+1);if("li"==f.$.nodeName.toLowerCase()){var a={parent:c,indent:b,element:f,contents:[]};k?a.grandparent=k:(a.grandparent=c.getParent(),a.grandparent&&"li"==a.grandparent.$.nodeName.toLowerCase()&&(a.grandparent=a.grandparent.getParent()));j&&CKEDITOR.dom.element.setMarker(j,f,
"listarray_index",e.length);e.push(a);for(var d=0,m=f.getChildCount(),i;d<m;d++)i=f.getChild(d),i.type==CKEDITOR.NODE_ELEMENT&&r[i.getName()]?CKEDITOR.plugins.list.listToArray(i,j,e,b+1,a.grandparent):a.contents.push(i)}}return e},arrayToList:function(c,j,e,b,k){e||(e=0);if(!c||c.length<e+1)return null;for(var g,h=c[e].parent.getDocument(),f=new CKEDITOR.dom.documentFragment(h),a=null,d=e,m=Math.max(c[e].indent,0),i=null,n,l,p=b==CKEDITOR.ENTER_P?"p":"div";;){var o=c[d];g=o.grandparent;n=o.element.getDirection(1);
if(o.indent==m){if(!a||c[d].parent.getName()!=a.getName())a=c[d].parent.clone(!1,1),k&&a.setAttribute("dir",k),f.append(a);i=a.append(o.element.clone(0,1));n!=a.getDirection(1)&&i.setAttribute("dir",n);for(g=0;g<o.contents.length;g++)i.append(o.contents[g].clone(1,1));d++}else if(o.indent==Math.max(m,0)+1)o=c[d-1].element.getDirection(1),d=CKEDITOR.plugins.list.arrayToList(c,null,d,b,o!=n?n:null),!i.getChildCount()&&(CKEDITOR.env.needsNbspFiller&&!(7<h.$.documentMode))&&i.append(h.createText(" ")),
i.append(d.listNode),d=d.nextIndex;else if(-1==o.indent&&!e&&g){r[g.getName()]?(i=o.element.clone(!1,!0),n!=g.getDirection(1)&&i.setAttribute("dir",n)):i=new CKEDITOR.dom.documentFragment(h);var a=g.getDirection(1)!=n,u=o.element,z=u.getAttribute("class"),v=u.getAttribute("style"),w=i.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&(b!=CKEDITOR.ENTER_BR||a||v||z),s,x=o.contents.length,t;for(g=0;g<x;g++)if(s=o.contents[g],D(s)&&1<x)w?t=s.clone(1,1):i.append(s.clone(1,1));else if(s.type==CKEDITOR.NODE_ELEMENT&&
s.isBlockBoundary()){a&&!s.getDirection()&&s.setAttribute("dir",n);l=s;var y=u.getAttribute("style");y&&l.setAttribute("style",y.replace(/([^;])$/,"$1;")+(l.getAttribute("style")||""));z&&s.addClass(z);l=null;t&&(i.append(t),t=null);i.append(s.clone(1,1))}else w?(l||(l=h.createElement(p),i.append(l),a&&l.setAttribute("dir",n)),v&&l.setAttribute("style",v),z&&l.setAttribute("class",z),t&&(l.append(t),t=null),l.append(s.clone(1,1))):i.append(s.clone(1,1));t&&((l||i).append(t),t=null);i.type==CKEDITOR.NODE_DOCUMENT_FRAGMENT&&
d!=c.length-1&&(CKEDITOR.env.needsBrFiller&&(n=i.getLast())&&(n.type==CKEDITOR.NODE_ELEMENT&&n.is("br"))&&n.remove(),n=i.getLast(q),(!n||!(n.type==CKEDITOR.NODE_ELEMENT&&n.is(CKEDITOR.dtd.$block)))&&i.append(h.createElement("br")));n=i.$.nodeName.toLowerCase();("div"==n||"p"==n)&&i.appendBogus();f.append(i);a=null;d++}else return null;l=null;if(c.length<=d||Math.max(c[d].indent,0)<m)break}if(j)for(c=f.getFirst();c;){if(c.type==CKEDITOR.NODE_ELEMENT&&(CKEDITOR.dom.element.clearMarkers(j,c),c.getName()in
CKEDITOR.dtd.$listItem&&(e=c,h=k=b=void 0,b=e.getDirection()))){for(k=e.getParent();k&&!(h=k.getDirection());)k=k.getParent();b==h&&e.removeAttribute("dir")}c=c.getNextSourceNode()}return{listNode:f,nextIndex:d}}};var H=/^h[1-6]$/,F=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT);x.prototype={exec:function(c){this.refresh(c,c.elementPath());var j=c.config,e=c.getSelection(),b=e&&e.getRanges();if(this.state==CKEDITOR.TRISTATE_OFF){var k=c.editable();if(k.getFirst(q)){var g=1==b.length&&b[0];(j=
g&&g.getEnclosedNode())&&(j.is&&this.type==j.getName())&&this.setState(CKEDITOR.TRISTATE_ON)}else j.enterMode==CKEDITOR.ENTER_BR?k.appendBogus():b[0].fixBlock(1,j.enterMode==CKEDITOR.ENTER_P?"p":"div"),e.selectRanges(b)}for(var j=e.createBookmarks(!0),k=[],h={},b=b.createIterator(),f=0;(g=b.getNextRange())&&++f;){var a=g.getBoundaryNodes(),d=a.startNode,m=a.endNode;d.type==CKEDITOR.NODE_ELEMENT&&"td"==d.getName()&&g.setStartAt(a.startNode,CKEDITOR.POSITION_AFTER_START);m.type==CKEDITOR.NODE_ELEMENT&&
"td"==m.getName()&&g.setEndAt(a.endNode,CKEDITOR.POSITION_BEFORE_END);g=g.createIterator();for(g.forceBrBreak=this.state==CKEDITOR.TRISTATE_OFF;a=g.getNextParagraph();)if(!a.getCustomData("list_block")){CKEDITOR.dom.element.setMarker(h,a,"list_block",1);for(var i=c.elementPath(a),d=i.elements,m=0,i=i.blockLimit,n,l=d.length-1;0<=l&&(n=d[l]);l--)if(r[n.getName()]&&i.contains(n)){i.removeCustomData("list_group_object_"+f);(d=n.getCustomData("list_group_object"))?d.contents.push(a):(d={root:n,contents:[a]},
k.push(d),CKEDITOR.dom.element.setMarker(h,n,"list_group_object",d));m=1;break}m||(m=i,m.getCustomData("list_group_object_"+f)?m.getCustomData("list_group_object_"+f).contents.push(a):(d={root:m,contents:[a]},CKEDITOR.dom.element.setMarker(h,m,"list_group_object_"+f,d),k.push(d)))}}for(n=[];0<k.length;)if(d=k.shift(),this.state==CKEDITOR.TRISTATE_OFF)if(r[d.root.getName()]){b=c;f=d;d=h;g=n;m=CKEDITOR.plugins.list.listToArray(f.root,d);i=[];for(a=0;a<f.contents.length;a++)if(l=f.contents[a],(l=l.getAscendant("li",
!0))&&!l.getCustomData("list_item_processed"))i.push(l),CKEDITOR.dom.element.setMarker(d,l,"list_item_processed",!0);for(var l=f.root.getDocument(),p=void 0,o=void 0,a=0;a<i.length;a++){var u=i[a].getCustomData("listarray_index"),p=m[u].parent;p.is(this.type)||(o=l.createElement(this.type),p.copyAttributes(o,{start:1,type:1}),o.removeStyle("list-style-type"),m[u].parent=o)}d=CKEDITOR.plugins.list.arrayToList(m,d,null,b.config.enterMode);m=void 0;i=d.listNode.getChildCount();for(a=0;a<i&&(m=d.listNode.getChild(a));a++)m.getName()==
this.type&&g.push(m);d.listNode.replace(f.root);b.fire("contentDomInvalidated")}else{m=c;a=d;g=n;i=a.contents;b=a.root.getDocument();f=[];1==i.length&&i[0].equals(a.root)&&(d=b.createElement("div"),i[0].moveChildren&&i[0].moveChildren(d),i[0].append(d),i[0]=d);a=a.contents[0].getParent();for(l=0;l<i.length;l++)a=a.getCommonAncestor(i[l].getParent());p=m.config.useComputedState;m=d=void 0;p=void 0===p||p;for(l=0;l<i.length;l++)for(o=i[l];u=o.getParent();){if(u.equals(a)){f.push(o);!m&&o.getDirection()&&
(m=1);o=o.getDirection(p);null!==d&&(d=d&&d!=o?null:o);break}o=u}if(!(1>f.length)){i=f[f.length-1].getNext();l=b.createElement(this.type);g.push(l);for(p=g=void 0;f.length;)g=f.shift(),p=b.createElement("li"),g.is("pre")||H.test(g.getName())||"false"==g.getAttribute("contenteditable")?g.appendTo(p):(g.copyAttributes(p),d&&g.getDirection()&&(p.removeStyle("direction"),p.removeAttribute("dir")),g.moveChildren(p),g.remove()),p.appendTo(l);d&&m&&l.setAttribute("dir",d);i?l.insertBefore(i):l.appendTo(a)}}else this.state==
CKEDITOR.TRISTATE_ON&&r[d.root.getName()]&&E.call(this,c,d,h);for(l=0;l<n.length;l++)B(n[l]);CKEDITOR.dom.element.clearAllMarkers(h);e.selectBookmarks(j);c.focus()},refresh:function(c,j){var e=j.contains(r,1),b=j.blockLimit||j.root;e&&b.contains(e)?this.setState(e.is(this.type)?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF):this.setState(CKEDITOR.TRISTATE_OFF)}};CKEDITOR.plugins.add("list",{requires:"indentlist",init:function(c){c.blockless||(c.addCommand("numberedlist",new x("numberedlist","ol")),c.addCommand("bulletedlist",
new x("bulletedlist","ul")),c.ui.addButton&&(c.ui.addButton("NumberedList",{label:c.lang.list.numberedlist,command:"numberedlist",directional:!0,toolbar:"list,10"}),c.ui.addButton("BulletedList",{label:c.lang.list.bulletedlist,command:"bulletedlist",directional:!0,toolbar:"list,20"})),c.on("key",function(j){var e=j.data.keyCode;if(c.mode=="wysiwyg"&&e in{8:1,46:1}){var b=c.getSelection().getRanges()[0],k=b&&b.startPath();if(b&&b.collapsed){var g=e==8,h=c.editable(),f=new CKEDITOR.dom.walker(b.clone());
f.evaluator=function(a){return q(a)&&!v(a)};f.guard=function(a,b){return!(b&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))};e=b.clone();if(g){var a,d;if((a=k.contains(r))&&b.checkBoundaryOfElement(a,CKEDITOR.START)&&(a=a.getParent())&&a.is("li")&&(a=w(a))){d=a;a=a.getPrevious(q);e.moveToPosition(a&&v(a)?a:d,CKEDITOR.POSITION_BEFORE_START)}else{f.range.setStartAt(h,CKEDITOR.POSITION_AFTER_START);f.range.setEnd(b.startContainer,b.startOffset);if((a=f.previous())&&a.type==CKEDITOR.NODE_ELEMENT&&(a.getName()in
r||a.is("li"))){if(!a.is("li")){f.range.selectNodeContents(a);f.reset();f.evaluator=C;a=f.previous()}d=a;e.moveToElementEditEnd(d)}}if(d){y(c,e,b);j.cancel()}else if((e=k.contains(r))&&b.checkBoundaryOfElement(e,CKEDITOR.START)){d=e.getFirst(q);if(b.checkBoundaryOfElement(d,CKEDITOR.START)){a=e.getPrevious(q);if(w(d)){if(a){b.moveToElementEditEnd(a);b.select()}}else c.execCommand("outdent");j.cancel()}}}else if(d=k.contains("li")){f.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);h=(k=d.getLast(q))&&
C(k)?k:d;d=0;if((a=f.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.getName()in r&&a.equals(k)){d=1;a=f.next()}else b.checkBoundaryOfElement(h,CKEDITOR.END)&&(d=1);if(d&&a){b=b.clone();b.moveToElementEditStart(a);y(c,e,b);j.cancel()}}else{f.range.setEndAt(h,CKEDITOR.POSITION_BEFORE_END);if((a=f.next())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is(r)){a=a.getFirst(q);if(k.block&&b.checkStartOfBlock()&&b.checkEndOfBlock()){k.block.remove();b.moveToElementEditStart(a);b.select()}else if(w(a)){b.moveToElementEditStart(a);
b.select()}else{b=b.clone();b.moveToElementEditStart(a);y(c,e,b)}j.cancel()}}setTimeout(function(){c.selectionChange(1)})}}}))}})})();(function(){CKEDITOR.plugins.liststyle={requires:"dialog,contextmenu",init:function(a){if(!a.blockless){var b;b=new CKEDITOR.dialogCommand("numberedListStyle",{requiredContent:"ol",allowedContent:"ol{list-style-type}[start]"});b=a.addCommand("numberedListStyle",b);a.addFeature(b);CKEDITOR.dialog.add("numberedListStyle",this.path+"dialogs/liststyle.js");b=new CKEDITOR.dialogCommand("bulletedListStyle",{requiredContent:"ul",allowedContent:"ul{list-style-type}"});b=a.addCommand("bulletedListStyle",b);
a.addFeature(b);CKEDITOR.dialog.add("bulletedListStyle",this.path+"dialogs/liststyle.js");a.addMenuGroup("list",108);a.addMenuItems({numberedlist:{label:a.lang.liststyle.numberedTitle,group:"list",command:"numberedListStyle"},bulletedlist:{label:a.lang.liststyle.bulletedTitle,group:"list",command:"bulletedListStyle"}});a.contextMenu.addListener(function(a){if(!a||a.isReadOnly())return null;for(;a;){var b=a.getName();if("ol"==b)return{numberedlist:CKEDITOR.TRISTATE_OFF};if("ul"==b)return{bulletedlist:CKEDITOR.TRISTATE_OFF};
a=a.getParent()}return null})}}};CKEDITOR.plugins.add("liststyle",CKEDITOR.plugins.liststyle)})();(function(){function Q(a,c,d){return m(c)&&m(d)&&d.equals(c.getNext(function(a){return!(z(a)||A(a)||p(a))}))}function u(a){this.upper=a[0];this.lower=a[1];this.set.apply(this,a.slice(2))}function J(a){var c=a.element;if(c&&m(c)&&(c=c.getAscendant(a.triggers,!0))&&a.editable.contains(c)){var d=K(c,!0);if("true"==d.getAttribute("contenteditable"))return c;if(d.is(a.triggers))return d}return null}function ga(a,c,d){o(a,c);o(a,d);a=c.size.bottom;d=d.size.top;return a&&d?0|(a+d)/2:a||d}function r(a,c,
d){return c=c[d?"getPrevious":"getNext"](function(b){return b&&b.type==CKEDITOR.NODE_TEXT&&!z(b)||m(b)&&!p(b)&&!v(a,b)})}function K(a,c){if(a.data("cke-editable"))return null;for(c||(a=a.getParent());a&&!a.data("cke-editable");){if(a.hasAttribute("contenteditable"))return a;a=a.getParent()}return null}function ha(a){var c=a.doc,d=B('<span contenteditable="false" style="'+L+"position:absolute;border-top:1px dashed "+a.boxColor+'"></span>',c),b=this.path+"images/"+(n.hidpi?"hidpi/":"")+"icon.png";q(d,
{attach:function(){this.wrap.getParent()||this.wrap.appendTo(a.editable,!0);return this},lineChildren:[q(B('<span title="'+a.editor.lang.magicline.title+'" contenteditable="false">&#8629;</span>',c),{base:L+"height:17px;width:17px;"+(a.rtl?"left":"right")+":17px;background:url("+b+") center no-repeat "+a.boxColor+";cursor:pointer;"+(n.hc?"font-size: 15px;line-height:14px;border:1px solid #fff;text-align:center;":"")+(n.hidpi?"background-size: 9px 10px;":""),looks:["top:-8px;"+CKEDITOR.tools.cssVendorPrefix("border-radius",
"2px",1),"top:-17px;"+CKEDITOR.tools.cssVendorPrefix("border-radius","2px 2px 0px 0px",1),"top:-1px;"+CKEDITOR.tools.cssVendorPrefix("border-radius","0px 0px 2px 2px",1)]}),q(B(R,c),{base:S+"left:0px;border-left-color:"+a.boxColor+";",looks:["border-width:8px 0 8px 8px;top:-8px","border-width:8px 0 0 8px;top:-8px","border-width:0 0 8px 8px;top:0px"]}),q(B(R,c),{base:S+"right:0px;border-right-color:"+a.boxColor+";",looks:["border-width:8px 8px 8px 0;top:-8px","border-width:8px 8px 0 0;top:-8px","border-width:0 8px 8px 0;top:0px"]})],
detach:function(){this.wrap.getParent()&&this.wrap.remove();return this},mouseNear:function(){o(a,this);var b=a.holdDistance,c=this.size;return c&&a.mouse.y>c.top-b&&a.mouse.y<c.bottom+b&&a.mouse.x>c.left-b&&a.mouse.x<c.right+b?!0:!1},place:function(){var b=a.view,c=a.editable,d=a.trigger,h=d.upper,g=d.lower,j=h||g,l=j.getParent(),k={};this.trigger=d;h&&o(a,h,!0);g&&o(a,g,!0);o(a,l,!0);a.inInlineMode&&C(a,!0);l.equals(c)?(k.left=b.scroll.x,k.right=-b.scroll.x,k.width=""):(k.left=j.size.left-j.size.margin.left+
b.scroll.x-(a.inInlineMode?b.editable.left+b.editable.border.left:0),k.width=j.size.outerWidth+j.size.margin.left+j.size.margin.right+b.scroll.x,k.right="");h&&g?k.top=h.size.margin.bottom===g.size.margin.top?0|h.size.bottom+h.size.margin.bottom/2:h.size.margin.bottom<g.size.margin.top?h.size.bottom+h.size.margin.bottom:h.size.bottom+h.size.margin.bottom-g.size.margin.top:h?g||(k.top=h.size.bottom+h.size.margin.bottom):k.top=g.size.top-g.size.margin.top;d.is(x)||k.top>b.scroll.y-15&&k.top<b.scroll.y+
5?(k.top=a.inInlineMode?0:b.scroll.y,this.look(x)):d.is(y)||k.top>b.pane.bottom-5&&k.top<b.pane.bottom+15?(k.top=a.inInlineMode?b.editable.height+b.editable.padding.top+b.editable.padding.bottom:b.pane.bottom-1,this.look(y)):(a.inInlineMode&&(k.top-=b.editable.top+b.editable.border.top),this.look(s));a.inInlineMode&&(k.top--,k.top+=b.editable.scroll.top,k.left+=b.editable.scroll.left);for(var T in k)k[T]=CKEDITOR.tools.cssLength(k[T]);this.setStyles(k)},look:function(a){if(this.oldLook!=a){for(var b=
this.lineChildren.length,c;b--;)(c=this.lineChildren[b]).setAttribute("style",c.base+c.looks[0|a/2]);this.oldLook=a}},wrap:new M("span",a.doc)});for(c=d.lineChildren.length;c--;)d.lineChildren[c].appendTo(d);d.look(s);d.appendTo(d.wrap);d.unselectable();d.lineChildren[0].on("mouseup",function(b){d.detach();N(a,function(b){var c=a.line.trigger;b[c.is(D)?"insertBefore":"insertAfter"](c.is(D)?c.lower:c.upper)},!0);a.editor.focus();!n.ie&&a.enterMode!=CKEDITOR.ENTER_BR&&a.hotNode.scrollIntoView();b.data.preventDefault(!0)});
d.on("mousedown",function(a){a.data.preventDefault(!0)});a.line=d}function N(a,c,d){var b=new CKEDITOR.dom.range(a.doc),e=a.editor,f;n.ie&&a.enterMode==CKEDITOR.ENTER_BR?f=a.doc.createText(E):(f=(f=K(a.element,!0))&&f.data("cke-enter-mode")||a.enterMode,f=new M(F[f],a.doc),f.is("br")||a.doc.createText(E).appendTo(f));d&&e.fire("saveSnapshot");c(f);b.moveToPosition(f,CKEDITOR.POSITION_AFTER_START);e.getSelection().selectRanges([b]);a.hotNode=f;d&&e.fire("saveSnapshot")}function U(a,c){return{canUndo:!0,
modes:{wysiwyg:1},exec:function(){function d(b){var d=n.ie&&9>n.version?" ":E,f=a.hotNode&&a.hotNode.getText()==d&&a.element.equals(a.hotNode)&&a.lastCmdDirection===!!c;N(a,function(d){f&&a.hotNode&&a.hotNode.remove();d[c?"insertAfter":"insertBefore"](b);d.setAttributes({"data-cke-magicline-hot":1,"data-cke-magicline-dir":!!c});a.lastCmdDirection=!!c});!n.ie&&a.enterMode!=CKEDITOR.ENTER_BR&&a.hotNode.scrollIntoView();a.line.detach()}return function(b){var b=b.getSelection().getStartElement(),e,b=
b.getAscendant(V,1);if(!W(a,b)&&b&&!b.equals(a.editable)&&!b.contains(a.editable)){if((e=K(b))&&"false"==e.getAttribute("contenteditable"))b=e;a.element=b;e=r(a,b,!c);var f;m(e)&&e.is(a.triggers)&&e.is(ia)&&(!r(a,e,!c)||(f=r(a,e,!c))&&m(f)&&f.is(a.triggers))?d(e):(f=J(a,b),m(f)&&(r(a,f,!c)?(b=r(a,f,!c))&&(m(b)&&b.is(a.triggers))&&d(f):d(f)))}}}()}}function v(a,c){if(!c||!(c.type==CKEDITOR.NODE_ELEMENT&&c.$))return!1;var d=a.line;return d.wrap.equals(c)||d.wrap.contains(c)}function m(a){return a&&
a.type==CKEDITOR.NODE_ELEMENT&&a.$}function p(a){if(!m(a))return!1;var c;if(!(c=X(a)))m(a)?(c={left:1,right:1,center:1},c=!(!c[a.getComputedStyle("float")]&&!c[a.getAttribute("align")])):c=!1;return c}function X(a){return!!{absolute:1,fixed:1}[a.getComputedStyle("position")]}function G(a,c){return m(c)?c.is(a.triggers):null}function W(a,c){if(!c)return!1;for(var d=c.getParents(1),b=d.length;b--;)for(var e=a.tabuList.length;e--;)if(d[b].hasAttribute(a.tabuList[e]))return!0;return!1}function ja(a,c,
d){c=c[d?"getLast":"getFirst"](function(b){return a.isRelevant(b)&&!b.is(ka)});if(!c)return!1;o(a,c);return d?c.size.top>a.mouse.y:c.size.bottom<a.mouse.y}function Y(a){var c=a.editable,d=a.mouse,b=a.view,e=a.triggerOffset;C(a);var f=d.y>(a.inInlineMode?b.editable.top+b.editable.height/2:Math.min(b.editable.height,b.pane.height)/2),c=c[f?"getLast":"getFirst"](function(a){return!(z(a)||A(a))});if(!c)return null;v(a,c)&&(c=a.line.wrap[f?"getPrevious":"getNext"](function(a){return!(z(a)||A(a))}));if(!m(c)||
p(c)||!G(a,c))return null;o(a,c);return!f&&0<=c.size.top&&0<d.y&&d.y<c.size.top+e?(a=a.inInlineMode||0===b.scroll.y?x:s,new u([null,c,D,H,a])):f&&c.size.bottom<=b.pane.height&&d.y>c.size.bottom-e&&d.y<b.pane.height?(a=a.inInlineMode||c.size.bottom>b.pane.height-e&&c.size.bottom<b.pane.height?y:s,new u([c,null,Z,H,a])):null}function $(a){var c=a.mouse,d=a.view,b=a.triggerOffset,e=J(a);if(!e)return null;o(a,e);var b=Math.min(b,0|e.size.outerHeight/2),f=[],i,h;if(c.y>e.size.top-1&&c.y<e.size.top+b)h=
!1;else if(c.y>e.size.bottom-b&&c.y<e.size.bottom+1)h=!0;else return null;if(p(e)||ja(a,e,h)||e.getParent().is(aa))return null;var g=r(a,e,!h);if(g){if(g&&g.type==CKEDITOR.NODE_TEXT)return null;if(m(g)){if(p(g)||!G(a,g)||g.getParent().is(aa))return null;f=[g,e][h?"reverse":"concat"]().concat([O,H])}}else e.equals(a.editable[h?"getLast":"getFirst"](a.isRelevant))?(C(a),h&&c.y>e.size.bottom-b&&c.y<d.pane.height&&e.size.bottom>d.pane.height-b&&e.size.bottom<d.pane.height?i=y:0<c.y&&c.y<e.size.top+b&&
(i=x)):i=s,f=[null,e][h?"reverse":"concat"]().concat([h?Z:D,H,i,e.equals(a.editable[h?"getLast":"getFirst"](a.isRelevant))?h?y:x:s]);return 0 in f?new u(f):null}function P(a,c,d,b){for(var e=function(){var b=n.ie?c.$.currentStyle:a.win.$.getComputedStyle(c.$,"");return n.ie?function(a){return b[CKEDITOR.tools.cssStyleToDomStyle(a)]}:function(a){return b.getPropertyValue(a)}}(),f=c.getDocumentPosition(),i={},h={},g={},j={},l=t.length;l--;)i[t[l]]=parseInt(e("border-"+t[l]+"-width"),10)||0,g[t[l]]=
parseInt(e("padding-"+t[l]),10)||0,h[t[l]]=parseInt(e("margin-"+t[l]),10)||0;(!d||b)&&I(a,b);j.top=f.y-(d?0:a.view.scroll.y);j.left=f.x-(d?0:a.view.scroll.x);j.outerWidth=c.$.offsetWidth;j.outerHeight=c.$.offsetHeight;j.height=j.outerHeight-(g.top+g.bottom+i.top+i.bottom);j.width=j.outerWidth-(g.left+g.right+i.left+i.right);j.bottom=j.top+j.outerHeight;j.right=j.left+j.outerWidth;a.inInlineMode&&(j.scroll={top:c.$.scrollTop,left:c.$.scrollLeft});return q({border:i,padding:g,margin:h,ignoreScroll:d},
j,!0)}function o(a,c,d){if(!m(c))return c.size=null;if(c.size){if(c.size.ignoreScroll==d&&c.size.date>new Date-ba)return null}else c.size={};return q(c.size,P(a,c,d),{date:+new Date},!0)}function C(a,c){a.view.editable=P(a,a.editable,c,!0)}function I(a,c){a.view||(a.view={});var d=a.view;if(c||!(d&&d.date>new Date-ba)){var b=a.win,d=b.getScrollPosition(),b=b.getViewPaneSize();q(a.view,{scroll:{x:d.x,y:d.y,width:a.doc.$.documentElement.scrollWidth-b.width,height:a.doc.$.documentElement.scrollHeight-
b.height},pane:{width:b.width,height:b.height,bottom:b.height+d.y},date:+new Date},!0)}}function la(a,c,d,b){for(var e=b,f=b,i=0,h=!1,g=!1,j=a.view.pane.height,l=a.mouse;l.y+i<j&&0<l.y-i;){h||(h=c(e,b));g||(g=c(f,b));!h&&0<l.y-i&&(e=d(a,{x:l.x,y:l.y-i}));!g&&l.y+i<j&&(f=d(a,{x:l.x,y:l.y+i}));if(h&&g)break;i+=2}return new u([e,f,null,null])}CKEDITOR.plugins.add("magicline",{init:function(a){var c=a.config,d=c.magicline_triggerOffset||30,b={editor:a,enterMode:c.enterMode,triggerOffset:d,holdDistance:0|
d*(c.magicline_holdDistance||0.5),boxColor:c.magicline_color||"#ff0000",rtl:"rtl"==c.contentsLangDirection,tabuList:["data-cke-hidden-sel"].concat(c.magicline_tabuList||[]),triggers:c.magicline_everywhere?V:{table:1,hr:1,div:1,ul:1,ol:1,dl:1,form:1,blockquote:1}},e,f,i;b.isRelevant=function(a){return m(a)&&!v(b,a)&&!p(a)};a.on("contentDom",function(){var d=a.editable(),g=a.document,j=a.window;q(b,{editable:d,inInlineMode:d.isInline(),doc:g,win:j,hotNode:null},!0);b.boundary=b.inInlineMode?b.editable:
b.doc.getDocumentElement();d.is(w.$inline)||(b.inInlineMode&&!X(d)&&d.setStyles({position:"relative",top:null,left:null}),ha.call(this,b),I(b),d.attachListener(a,"beforeUndoImage",function(){b.line.detach()}),d.attachListener(a,"beforeGetData",function(){b.line.wrap.getParent()&&(b.line.detach(),a.once("getData",function(){b.line.attach()},null,null,1E3))},null,null,0),d.attachListener(b.inInlineMode?g:g.getWindow().getFrame(),"mouseout",function(c){if("wysiwyg"==a.mode)if(b.inInlineMode){var d=c.data.$.clientX,
c=c.data.$.clientY;I(b);C(b,!0);var e=b.view.editable,f=b.view.scroll;if(!(d>e.left-f.x&&d<e.right-f.x)||!(c>e.top-f.y&&c<e.bottom-f.y))clearTimeout(i),i=null,b.line.detach()}else clearTimeout(i),i=null,b.line.detach()}),d.attachListener(d,"keyup",function(){b.hiddenMode=0}),d.attachListener(d,"keydown",function(c){if("wysiwyg"==a.mode)switch(c=c.data.getKeystroke(),a.getSelection().getStartElement(),c){case 2228240:case 16:b.hiddenMode=1,b.line.detach()}}),d.attachListener(b.inInlineMode?d:g,"mousemove",
function(c){f=!0;if(!("wysiwyg"!=a.mode||a.readOnly||i)){var d={x:c.data.$.clientX,y:c.data.$.clientY};i=setTimeout(function(){b.mouse=d;i=b.trigger=null;I(b);if(f&&!b.hiddenMode&&a.focusManager.hasFocus&&!b.line.mouseNear()&&(b.element=ca(b,!0)))(b.trigger=Y(b)||$(b)||da(b))&&!W(b,b.trigger.upper||b.trigger.lower)?b.line.attach().place():(b.trigger=null,b.line.detach()),f=!1},30)}}),d.attachListener(j,"scroll",function(){"wysiwyg"==a.mode&&(b.line.detach(),n.webkit&&(b.hiddenMode=1,clearTimeout(e),
e=setTimeout(function(){b.mouseDown||(b.hiddenMode=0)},50)))}),d.attachListener(ea?g:j,"mousedown",function(){"wysiwyg"==a.mode&&(b.line.detach(),b.hiddenMode=1,b.mouseDown=1)}),d.attachListener(ea?g:j,"mouseup",function(){b.hiddenMode=0;b.mouseDown=0}),a.addCommand("accessPreviousSpace",U(b)),a.addCommand("accessNextSpace",U(b,!0)),a.setKeystroke([[c.magicline_keystrokePrevious,"accessPreviousSpace"],[c.magicline_keystrokeNext,"accessNextSpace"]]),a.on("loadSnapshot",function(){var c,d,e,f;for(f in{p:1,
br:1,div:1}){c=a.document.getElementsByTag(f);for(e=c.count();e--;)if((d=c.getItem(e)).data("cke-magicline-hot")){b.hotNode=d;b.lastCmdDirection="true"===d.data("cke-magicline-dir")?!0:!1;return}}}),this.backdoor={accessFocusSpace:N,boxTrigger:u,isLine:v,getAscendantTrigger:J,getNonEmptyNeighbour:r,getSize:P,that:b,triggerEdge:$,triggerEditable:Y,triggerExpand:da})},this)}});var q=CKEDITOR.tools.extend,M=CKEDITOR.dom.element,B=M.createFromHtml,n=CKEDITOR.env,ea=CKEDITOR.env.ie&&9>CKEDITOR.env.version,
w=CKEDITOR.dtd,F={},D=128,Z=64,O=32,H=16,fa=8,x=4,y=2,s=1,E=" ",aa=w.$listItem,ka=w.$tableContent,ia=q({},w.$nonEditable,w.$empty),V=w.$block,ba=100,L="width:0px;height:0px;padding:0px;margin:0px;display:block;z-index:9999;color:#fff;position:absolute;font-size: 0px;line-height:0px;",S=L+"border-color:transparent;display:block;border-style:solid;",R="<span>"+E+"</span>";F[CKEDITOR.ENTER_BR]="br";F[CKEDITOR.ENTER_P]="p";F[CKEDITOR.ENTER_DIV]="div";u.prototype={set:function(a,c,d){this.properties=a+
c+(d||s);return this},is:function(a){return(this.properties&a)==a}};var ca=function(){return function(a,c,d){if(!a.mouse)return null;var b=a.doc,e=a.line.wrap,d=d||a.mouse,f=new CKEDITOR.dom.element(b.$.elementFromPoint(d.x,d.y));c&&v(a,f)&&(e.hide(),f=new CKEDITOR.dom.element(b.$.elementFromPoint(d.x,d.y)),e.show());return!f||!(f.type==CKEDITOR.NODE_ELEMENT&&f.$)||n.ie&&9>n.version&&!a.boundary.equals(f)&&!a.boundary.contains(f)?null:f}}(),z=CKEDITOR.dom.walker.whitespaces(),A=CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_COMMENT),
da=function(){function a(a){var b=a.element,e,f,i;if(!m(b)||b.contains(a.editable)||b.isReadOnly())return null;i=la(a,function(a,b){return!b.equals(a)},function(a,b){return ca(a,!0,b)},b);e=i.upper;f=i.lower;if(Q(a,e,f))return i.set(O,fa);if(e&&b.contains(e))for(;!e.getParent().equals(b);)e=e.getParent();else e=b.getFirst(function(b){return c(a,b)});if(f&&b.contains(f))for(;!f.getParent().equals(b);)f=f.getParent();else f=b.getLast(function(b){return c(a,b)});if(!e||!f)return null;o(a,e);o(a,f);if(!(a.mouse.y>
e.size.top&&a.mouse.y<f.size.bottom))return null;for(var b=Number.MAX_VALUE,h,g,j,l;f&&!f.equals(e)&&(g=e.getNext(a.isRelevant));)h=Math.abs(ga(a,e,g)-a.mouse.y),h<b&&(b=h,j=e,l=g),e=g,o(a,e);if(!j||!l||!(a.mouse.y>j.size.top&&a.mouse.y<l.size.bottom))return null;i.upper=j;i.lower=l;return i.set(O,fa)}function c(a,b){return!(b&&b.type==CKEDITOR.NODE_TEXT||A(b)||p(b)||v(a,b)||b.type==CKEDITOR.NODE_ELEMENT&&b.$&&b.is("br"))}return function(c){var b=a(c),e;if(e=b){e=b.upper;var f=b.lower;e=!e||!f||p(f)||
p(e)||f.equals(e)||e.equals(f)||f.contains(e)||e.contains(f)?!1:G(c,e)&&G(c,f)&&Q(c,e,f)?!0:!1}return e?b:null}}(),t=["top","left","right","bottom"]})();CKEDITOR.config.magicline_keystrokePrevious=CKEDITOR.CTRL+CKEDITOR.SHIFT+51;CKEDITOR.config.magicline_keystrokeNext=CKEDITOR.CTRL+CKEDITOR.SHIFT+52;(function(){function l(a){if(!a||a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())return[];for(var e=[],f=["style","className"],b=0;b<f.length;b++){var d=a.$.elements.namedItem(f[b]);d&&(d=new CKEDITOR.dom.element(d),e.push([d,d.nextSibling]),d.remove())}return e}function o(a,e){if(a&&!(a.type!=CKEDITOR.NODE_ELEMENT||"form"!=a.getName())&&0<e.length)for(var f=e.length-1;0<=f;f--){var b=e[f][0],d=e[f][1];d?b.insertBefore(d):b.appendTo(a)}}function n(a,e){var f=l(a),b={},d=a.$;e||(b["class"]=d.className||
"",d.className="");b.inline=d.style.cssText||"";e||(d.style.cssText="position: static; overflow: visible");o(f);return b}function p(a,e){var f=l(a),b=a.$;"class"in e&&(b.className=e["class"]);"inline"in e&&(b.style.cssText=e.inline);o(f)}function q(a){if(!a.editable().isInline()){var e=CKEDITOR.instances,f;for(f in e){var b=e[f];"wysiwyg"==b.mode&&!b.readOnly&&(b=b.document.getBody(),b.setAttribute("contentEditable",!1),b.setAttribute("contentEditable",!0))}a.editable().hasFocus&&(a.toolbox.focus(),
a.focus())}}CKEDITOR.plugins.add("maximize",{init:function(a){function e(){var b=d.getViewPaneSize();a.resize(b.width,b.height,null,!0)}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var f=a.lang,b=CKEDITOR.document,d=b.getWindow(),j,k,m,l=CKEDITOR.TRISTATE_OFF;a.addCommand("maximize",{modes:{wysiwyg:!CKEDITOR.env.iOS,source:!CKEDITOR.env.iOS},readOnly:1,editorFocus:!1,exec:function(){var h=a.container.getChild(1),g=a.ui.space("contents");if("wysiwyg"==a.mode){var c=a.getSelection();j=c&&c.getRanges();
k=d.getScrollPosition()}else{var i=a.editable().$;j=!CKEDITOR.env.ie&&[i.selectionStart,i.selectionEnd];k=[i.scrollLeft,i.scrollTop]}if(this.state==CKEDITOR.TRISTATE_OFF){d.on("resize",e);m=d.getScrollPosition();for(c=a.container;c=c.getParent();)c.setCustomData("maximize_saved_styles",n(c)),c.setStyle("z-index",a.config.baseFloatZIndex-5);g.setCustomData("maximize_saved_styles",n(g,!0));h.setCustomData("maximize_saved_styles",n(h,!0));g={overflow:CKEDITOR.env.webkit?"":"hidden",width:0,height:0};
b.getDocumentElement().setStyles(g);!CKEDITOR.env.gecko&&b.getDocumentElement().setStyle("position","fixed");(!CKEDITOR.env.gecko||!CKEDITOR.env.quirks)&&b.getBody().setStyles(g);CKEDITOR.env.ie?setTimeout(function(){d.$.scrollTo(0,0)},0):d.$.scrollTo(0,0);h.setStyle("position",CKEDITOR.env.gecko&&CKEDITOR.env.quirks?"fixed":"absolute");h.$.offsetLeft;h.setStyles({"z-index":a.config.baseFloatZIndex-5,left:"0px",top:"0px"});h.addClass("cke_maximized");e();g=h.getDocumentPosition();h.setStyles({left:-1*
g.x+"px",top:-1*g.y+"px"});CKEDITOR.env.gecko&&q(a)}else if(this.state==CKEDITOR.TRISTATE_ON){d.removeListener("resize",e);g=[g,h];for(c=0;c<g.length;c++)p(g[c],g[c].getCustomData("maximize_saved_styles")),g[c].removeCustomData("maximize_saved_styles");for(c=a.container;c=c.getParent();)p(c,c.getCustomData("maximize_saved_styles")),c.removeCustomData("maximize_saved_styles");CKEDITOR.env.ie?setTimeout(function(){d.$.scrollTo(m.x,m.y)},0):d.$.scrollTo(m.x,m.y);h.removeClass("cke_maximized");CKEDITOR.env.webkit&&
(h.setStyle("display","inline"),setTimeout(function(){h.setStyle("display","block")},0));a.fire("resize")}this.toggleState();if(c=this.uiItems[0])g=this.state==CKEDITOR.TRISTATE_OFF?f.maximize.maximize:f.maximize.minimize,c=CKEDITOR.document.getById(c._.id),c.getChild(1).setHtml(g),c.setAttribute("title",g),c.setAttribute("href",'javascript:void("'+g+'");');"wysiwyg"==a.mode?j?(CKEDITOR.env.gecko&&q(a),a.getSelection().selectRanges(j),(i=a.getSelection().getStartElement())&&i.scrollIntoView(!0)):
d.$.scrollTo(k.x,k.y):(j&&(i.selectionStart=j[0],i.selectionEnd=j[1]),i.scrollLeft=k[0],i.scrollTop=k[1]);j=k=null;l=this.state;a.fire("maximize",this.state)},canUndo:!1});a.ui.addButton&&a.ui.addButton("Maximize",{label:f.maximize.maximize,command:"maximize",toolbar:"tools,10"});a.on("mode",function(){var b=a.getCommand("maximize");b.setState(b.state==CKEDITOR.TRISTATE_DISABLED?CKEDITOR.TRISTATE_DISABLED:l)},null,null,100)}}})})();CKEDITOR.plugins.add("newpage",{init:function(a){a.addCommand("newpage",{modes:{wysiwyg:1,source:1},exec:function(b){var a=this;b.setData(b.config.newpage_html||"",function(){b.focus();setTimeout(function(){b.fire("afterCommandExec",{name:"newpage",command:a});b.selectionChange()},200)})},async:!0});a.ui.addButton&&a.ui.addButton("NewPage",{label:a.lang.newpage.toolbar,command:"newpage",toolbar:"document,20"})}});(function(){function e(a){return{"aria-label":a,"class":"cke_pagebreak",contenteditable:"false","data-cke-display-name":"pagebreak","data-cke-pagebreak":1,style:"page-break-after: always",title:a}}CKEDITOR.plugins.add("pagebreak",{requires:"fakeobjects",onLoad:function(){var a=("background:url("+CKEDITOR.getUrl(this.path+"images/pagebreak.gif")+") no-repeat center center;clear:both;width:100%;border-top:#999 1px dotted;border-bottom:#999 1px dotted;padding:0;height:5px;cursor:default;").replace(/;/g,
" !important;");CKEDITOR.addCss("div.cke_pagebreak{"+a+"}")},init:function(a){a.blockless||(a.addCommand("pagebreak",CKEDITOR.plugins.pagebreakCmd),a.ui.addButton&&a.ui.addButton("PageBreak",{label:a.lang.pagebreak.toolbar,command:"pagebreak",toolbar:"insert,70"}),(CKEDITOR.env.opera||CKEDITOR.env.webkit)&&a.on("contentDom",function(){a.document.on("click",function(b){b=b.data.getTarget();b.is("div")&&b.hasClass("cke_pagebreak")&&a.getSelection().selectElement(b)})}))},afterInit:function(a){function b(f){CKEDITOR.tools.extend(f.attributes,
e(a.lang.pagebreak.alt),!0);f.children.length=0}var c=a.dataProcessor,g=c&&c.dataFilter,c=c&&c.htmlFilter,h=/page-break-after\s*:\s*always/i,i=/display\s*:\s*none/i;c&&c.addRules({attributes:{"class":function(a,b){var c=a.replace("cke_pagebreak","");if(c!=a){var d=CKEDITOR.htmlParser.fragment.fromHtml('<span style="display: none;">&nbsp;</span>').children[0];b.children.length=0;b.add(d);d=b.attributes;delete d["aria-label"];delete d.contenteditable;delete d.title}return c}}},{applyToAll:!0,priority:5});
g&&g.addRules({elements:{div:function(a){if(a.attributes["data-cke-pagebreak"])b(a);else if(h.test(a.attributes.style)){var c=a.children[0];c&&("span"==c.name&&i.test(c.attributes.style))&&b(a)}}}})}});CKEDITOR.plugins.pagebreakCmd={exec:function(a){var b=a.document.createElement("div",{attributes:e(a.lang.pagebreak.alt)});a.insertElement(b)},context:"div",allowedContent:{div:{styles:"!page-break-after"},span:{match:function(a){return(a=a.parent)&&"div"==a.name&&a.styles["page-break-after"]},styles:"display"}},
requiredContent:"div{page-break-after}"}})();(function(){var c={canUndo:!1,async:!0,exec:function(a){a.getClipboardData({title:a.lang.pastetext.title},function(b){b&&a.fire("paste",{type:"text",dataValue:b.dataValue});a.fire("afterCommandExec",{name:"pastetext",command:c,returnValue:!!b})})}};CKEDITOR.plugins.add("pastetext",{requires:"clipboard",init:function(a){a.addCommand("pastetext",c);a.ui.addButton&&a.ui.addButton("PasteText",{label:a.lang.pastetext.button,command:"pastetext",toolbar:"clipboard,40"});if(a.config.forcePasteAsPlainText)a.on("beforePaste",
function(a){"html"!=a.data.type&&(a.data.type="text")});a.on("pasteState",function(b){a.getCommand("pastetext").setState(b.data)})}})})();(function(){function h(a,d,f){var b=CKEDITOR.cleanWord;b?f():(a=CKEDITOR.getUrl(a.config.pasteFromWordCleanupFile||d+"filter/default.js"),CKEDITOR.scriptLoader.load(a,f,null,!0));return!b}function i(a){a.data.type="html"}CKEDITOR.plugins.add("pastefromword",{requires:"clipboard",init:function(a){var d=0,f=this.path;a.addCommand("pastefromword",{canUndo:!1,async:!0,exec:function(a){var e=this;d=1;a.once("beforePaste",i);a.getClipboardData({title:a.lang.pastefromword.title},function(c){c&&a.fire("paste",
{type:"html",dataValue:c.dataValue});a.fire("afterCommandExec",{name:"pastefromword",command:e,returnValue:!!c})})}});a.ui.addButton&&a.ui.addButton("PasteFromWord",{label:a.lang.pastefromword.toolbar,command:"pastefromword",toolbar:"clipboard,50"});a.on("pasteState",function(b){a.getCommand("pastefromword").setState(b.data)});a.on("paste",function(b){var e=b.data,c=e.dataValue;if(c&&(d||/(class=\"?Mso|style=\"[^\"]*\bmso\-|w:WordDocument)/.test(c))){var g=h(a,f,function(){if(g)a.fire("paste",e);
else if(!a.config.pasteFromWordPromptCleanup||d||confirm(a.lang.pastefromword.confirmCleanup))e.dataValue=CKEDITOR.cleanWord(c,a)});g&&b.cancel()}},null,null,3)}})})();(function(){var h,i={modes:{wysiwyg:1,source:1},canUndo:!1,readOnly:1,exec:function(a){var g,b=a.config,f=b.baseHref?'<base href="'+b.baseHref+'"/>':"";if(b.fullPage)g=a.getData().replace(/<head>/,"$&"+f).replace(/[^>]*(?=<\/title>)/,"$& &mdash; "+a.lang.preview.preview);else{var b="<body ",d=a.document&&a.document.getBody();d&&(d.getAttribute("id")&&(b+='id="'+d.getAttribute("id")+'" '),d.getAttribute("class")&&(b+='class="'+d.getAttribute("class")+'" '));g=a.config.docType+'<html dir="'+a.config.contentsLangDirection+
'"><head>'+f+"<title>"+a.lang.preview.preview+"</title>"+CKEDITOR.tools.buildStyleHtml(a.config.contentsCss)+"</head>"+(b+">")+a.getData()+"</body></html>"}f=640;b=420;d=80;try{var c=window.screen,f=Math.round(0.8*c.width),b=Math.round(0.7*c.height),d=Math.round(0.1*c.width)}catch(i){}if(!1===a.fire("contentPreview",a={dataValue:g}))return!1;var c="",e;CKEDITOR.env.ie&&(window._cke_htmlToLoad=a.dataValue,e="javascript:void( (function(){document.open();"+("("+CKEDITOR.tools.fixDomain+")();").replace(/\/\/.*?\n/g,
"").replace(/parent\./g,"window.opener.")+"document.write( window.opener._cke_htmlToLoad );document.close();window.opener._cke_htmlToLoad = null;})() )",c="");CKEDITOR.env.gecko&&(window._cke_htmlToLoad=a.dataValue,c=h+"preview.html");c=window.open(c,null,"toolbar=yes,location=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes,width="+f+",height="+b+",left="+d);CKEDITOR.env.ie&&c&&(c.location=e);!CKEDITOR.env.ie&&!CKEDITOR.env.gecko&&(e=c.document,e.open(),e.write(a.dataValue),e.close());return!0}};
CKEDITOR.plugins.add("preview",{init:function(a){a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&(h=this.path,a.addCommand("preview",i),a.ui.addButton&&a.ui.addButton("Preview",{label:a.lang.preview.preview,command:"preview",toolbar:"document,40"}))}})})();CKEDITOR.plugins.add("print",{init:function(a){a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE&&(a.addCommand("print",CKEDITOR.plugins.print),a.ui.addButton&&a.ui.addButton("Print",{label:a.lang.print.toolbar,command:"print",toolbar:"document,50"}))}});CKEDITOR.plugins.print={exec:function(a){CKEDITOR.env.opera||(CKEDITOR.env.gecko?a.window.$.print():a.document.$.execCommand("Print"))},canUndo:!1,readOnly:1,modes:{wysiwyg:!CKEDITOR.env.opera}};CKEDITOR.plugins.add("removeformat",{init:function(a){a.addCommand("removeFormat",CKEDITOR.plugins.removeformat.commands.removeformat);a.ui.addButton&&a.ui.addButton("RemoveFormat",{label:a.lang.removeformat.toolbar,command:"removeFormat",toolbar:"cleanup,10"})}});
CKEDITOR.plugins.removeformat={commands:{removeformat:{exec:function(a){for(var h=a._.removeFormatRegex||(a._.removeFormatRegex=RegExp("^(?:"+a.config.removeFormatTags.replace(/,/g,"|")+")$","i")),e=a._.removeAttributes||(a._.removeAttributes=a.config.removeFormatAttributes.split(",")),f=CKEDITOR.plugins.removeformat.filter,k=a.getSelection().getRanges(1),l=k.createIterator(),c;c=l.getNextRange();){c.collapsed||c.enlarge(CKEDITOR.ENLARGE_ELEMENT);var i=c.createBookmark(),b=i.startNode,j=i.endNode,
d=function(b){for(var c=a.elementPath(b),e=c.elements,d=1,g;(g=e[d])&&!g.equals(c.block)&&!g.equals(c.blockLimit);d++)h.test(g.getName())&&f(a,g)&&b.breakParent(g)};d(b);if(j){d(j);for(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT);b&&!b.equals(j);)d=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT),!("img"==b.getName()&&b.data("cke-realelement"))&&f(a,b)&&(h.test(b.getName())?b.remove(1):(b.removeAttributes(e),a.fire("removeFormatCleanup",b))),b=d}c.moveToBookmark(i)}a.forceNextSelectionCheck();a.getSelection().selectRanges(k)}}},
filter:function(a,h){for(var e=a._.removeFormatFilters||[],f=0;f<e.length;f++)if(!1===e[f](h))return!1;return!0}};CKEDITOR.editor.prototype.addRemoveFormatFilter=function(a){this._.removeFormatFilters||(this._.removeFormatFilters=[]);this._.removeFormatFilters.push(a)};CKEDITOR.config.removeFormatTags="b,big,code,del,dfn,em,font,i,ins,kbd,q,s,samp,small,span,strike,strong,sub,sup,tt,u,var";CKEDITOR.config.removeFormatAttributes="class,style,lang,width,height,align,hspace,valign";(function(){var b={readOnly:1,exec:function(a){if(a.fire("save")&&(a=a.element.$.form))try{a.submit()}catch(b){a.submit.click&&a.submit.click()}}};CKEDITOR.plugins.add("save",{init:function(a){a.elementMode==CKEDITOR.ELEMENT_MODE_REPLACE&&(a.addCommand("save",b).modes={wysiwyg:!!a.element.$.form},a.ui.addButton&&a.ui.addButton("Save",{label:a.lang.save.toolbar,command:"save",toolbar:"document,10"}))}})})();(function(){CKEDITOR.plugins.add("selectall",{init:function(b){b.addCommand("selectAll",{modes:{wysiwyg:1,source:1},exec:function(a){var b=a.editable();if(b.is("textarea"))a=b.$,CKEDITOR.env.ie?a.createTextRange().execCommand("SelectAll"):(a.selectionStart=0,a.selectionEnd=a.value.length),a.focus();else{if(b.is("body"))a.document.$.execCommand("SelectAll",!1,null);else{var c=a.createRange();c.selectNodeContents(b);c.select()}a.forceNextSelectionCheck();a.selectionChange()}},canUndo:!1});b.ui.addButton&&
b.ui.addButton("SelectAll",{label:b.lang.selectall.toolbar,command:"selectAll",toolbar:"selection,10"})}})})();(function(){var i={readOnly:1,preserveState:!0,editorFocus:!1,exec:function(a){this.toggleState();this.refresh(a)},refresh:function(a){if(a.document){var c=this.state==CKEDITOR.TRISTATE_ON&&(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||a.focusManager.hasFocus)?"attachClass":"removeClass";a.editable()[c]("cke_show_blocks")}}};CKEDITOR.plugins.add("showblocks",{onLoad:function(){var a="p div pre address blockquote h1 h2 h3 h4 h5 h6".split(" "),c,b,e,f,i=CKEDITOR.getUrl(this.path),j=!(CKEDITOR.env.ie&&
9>CKEDITOR.env.version),g=j?":not([contenteditable=false]):not(.cke_show_blocks_off)":"",d,h;for(c=b=e=f="";d=a.pop();)h=a.length?",":"",c+=".cke_show_blocks "+d+g+h,e+=".cke_show_blocks.cke_contents_ltr "+d+g+h,f+=".cke_show_blocks.cke_contents_rtl "+d+g+h,b+=".cke_show_blocks "+d+g+"{background-image:url("+i+"images/block_"+d+".png)}";CKEDITOR.addCss((c+"{background-repeat:no-repeat;border:1px dotted gray;padding-top:8px}").concat(b,e+"{background-position:top left;padding-left:8px}",f+"{background-position:top right;padding-right:8px}"));
j||CKEDITOR.addCss(".cke_show_blocks [contenteditable=false],.cke_show_blocks .cke_show_blocks_off{border:none;padding-top:0;background-image:none}.cke_show_blocks.cke_contents_rtl [contenteditable=false],.cke_show_blocks.cke_contents_rtl .cke_show_blocks_off{padding-right:0}.cke_show_blocks.cke_contents_ltr [contenteditable=false],.cke_show_blocks.cke_contents_ltr .cke_show_blocks_off{padding-left:0}")},init:function(a){function c(){b.refresh(a)}if(!a.blockless){var b=a.addCommand("showblocks",i);
b.canUndo=!1;a.config.startupOutlineBlocks&&b.setState(CKEDITOR.TRISTATE_ON);a.ui.addButton&&a.ui.addButton("ShowBlocks",{label:a.lang.showblocks.toolbar,command:"showblocks",toolbar:"tools,20"});a.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)});a.elementMode==CKEDITOR.ELEMENT_MODE_INLINE&&(a.on("focus",c),a.on("blur",c));a.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)})}}})})();(function(){var f={preserveState:!0,editorFocus:!1,readOnly:1,exec:function(a){this.toggleState();this.refresh(a)},refresh:function(a){if(a.document){var b=this.state==CKEDITOR.TRISTATE_ON?"attachClass":"removeClass";a.editable()[b]("cke_show_borders")}}};CKEDITOR.plugins.add("showborders",{modes:{wysiwyg:1},onLoad:function(){var a;a=(CKEDITOR.env.ie6Compat?[".%1 table.%2,",".%1 table.%2 td, .%1 table.%2 th","{","border : #d3d3d3 1px dotted","}"]:".%1 table.%2,;.%1 table.%2 > tr > td, .%1 table.%2 > tr > th,;.%1 table.%2 > tbody > tr > td, .%1 table.%2 > tbody > tr > th,;.%1 table.%2 > thead > tr > td, .%1 table.%2 > thead > tr > th,;.%1 table.%2 > tfoot > tr > td, .%1 table.%2 > tfoot > tr > th;{;border : #d3d3d3 1px dotted;}".split(";")).join("").replace(/%2/g,
"cke_show_border").replace(/%1/g,"cke_show_borders ");CKEDITOR.addCss(a)},init:function(a){var b=a.addCommand("showborders",f);b.canUndo=!1;!1!==a.config.startupShowBorders&&b.setState(CKEDITOR.TRISTATE_ON);a.on("mode",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)},null,null,100);a.on("contentDom",function(){b.state!=CKEDITOR.TRISTATE_DISABLED&&b.refresh(a)});a.on("removeFormatCleanup",function(d){d=d.data;a.getCommand("showborders").state==CKEDITOR.TRISTATE_ON&&(d.is("table")&&(!d.hasAttribute("border")||
0>=parseInt(d.getAttribute("border"),10)))&&d.addClass("cke_show_border")})},afterInit:function(a){var b=a.dataProcessor,a=b&&b.dataFilter,b=b&&b.htmlFilter;a&&a.addRules({elements:{table:function(a){var a=a.attributes,b=a["class"],c=parseInt(a.border,10);if((!c||0>=c)&&(!b||-1==b.indexOf("cke_show_border")))a["class"]=(b||"")+" cke_show_border"}}});b&&b.addRules({elements:{table:function(a){var a=a.attributes,b=a["class"];b&&(a["class"]=b.replace("cke_show_border","").replace(/\s{2}/," ").replace(/^\s+|\s+$/,
""))}}})}});CKEDITOR.on("dialogDefinition",function(a){var b=a.data.name;if("table"==b||"tableProperties"==b)if(a=a.data.definition,b=a.getContents("info").get("txtBorder"),b.commit=CKEDITOR.tools.override(b.commit,function(a){return function(b,c){a.apply(this,arguments);var e=parseInt(this.getValue(),10);c[!e||0>=e?"addClass":"removeClass"]("cke_show_border")}}),a=(a=a.getContents("advanced"))&&a.get("advCSSClasses"))a.setup=CKEDITOR.tools.override(a.setup,function(a){return function(){a.apply(this,
arguments);this.setValue(this.getValue().replace(/cke_show_border/,""))}}),a.commit=CKEDITOR.tools.override(a.commit,function(a){return function(b,c){a.apply(this,arguments);parseInt(c.getAttribute("border"),10)||c.addClass("cke_show_border")}})})})();(function(){CKEDITOR.plugins.add("sourcearea",{init:function(a){function d(){this.hide();this.setStyle("height",this.getParent().$.clientHeight+"px");this.setStyle("width",this.getParent().$.clientWidth+"px");this.show()}if(a.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE){var e=CKEDITOR.plugins.sourcearea;a.addMode("source",function(e){var b=a.ui.space("contents").getDocument().createElement("textarea");b.setStyles(CKEDITOR.tools.extend({width:CKEDITOR.env.ie7Compat?"99%":"100%",height:"100%",resize:"none",
outline:"none","text-align":"left"},CKEDITOR.tools.cssVendorPrefix("tab-size",a.config.sourceAreaTabSize||4)));b.setAttribute("dir","ltr");b.addClass("cke_source cke_reset cke_enable_context_menu");a.ui.space("contents").append(b);b=a.editable(new c(a,b));b.setData(a.getData(1));CKEDITOR.env.ie&&(b.attachListener(a,"resize",d,b),b.attachListener(CKEDITOR.document.getWindow(),"resize",d,b),CKEDITOR.tools.setTimeout(d,0,b));a.fire("ariaWidget",this);e()});a.addCommand("source",e.commands.source);a.ui.addButton&&
a.ui.addButton("Source",{label:a.lang.sourcearea.toolbar,command:"source",toolbar:"mode,10"});a.on("mode",function(){a.getCommand("source").setState("source"==a.mode?CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)})}}});var c=CKEDITOR.tools.createClass({base:CKEDITOR.editable,proto:{setData:function(a){this.setValue(a);this.editor.fire("dataReady")},getData:function(){return this.getValue()},insertHtml:function(){},insertElement:function(){},insertText:function(){},setReadOnly:function(a){this[(a?"set":
"remove")+"Attribute"]("readOnly","readonly")},detach:function(){c.baseProto.detach.call(this);this.clearCustomData();this.remove()}}})})();CKEDITOR.plugins.sourcearea={commands:{source:{modes:{wysiwyg:1,source:1},editorFocus:!1,readOnly:1,exec:function(c){"wysiwyg"==c.mode&&c.fire("saveSnapshot");c.getCommand("source").setState(CKEDITOR.TRISTATE_DISABLED);c.setMode("source"==c.mode?"wysiwyg":"source")},canUndo:!1}}};CKEDITOR.plugins.add("specialchar",{availableLangs:{ar:1,bg:1,ca:1,cs:1,cy:1,de:1,el:1,en:1,eo:1,es:1,et:1,fa:1,fi:1,fr:1,"fr-ca":1,gl:1,he:1,hr:1,hu:1,id:1,it:1,ja:1,km:1,ku:1,lv:1,nb:1,nl:1,no:1,pl:1,pt:1,"pt-br":1,ru:1,si:1,sk:1,sl:1,sq:1,sv:1,th:1,tr:1,ug:1,uk:1,vi:1,zh:1,"zh-cn":1},requires:"dialog",init:function(a){var c=this;CKEDITOR.dialog.add("specialchar",this.path+"dialogs/specialchar.js");a.addCommand("specialchar",{exec:function(){var b=a.langCode,b=c.availableLangs[b]?b:c.availableLangs[b.replace(/-.*/,
"")]?b.replace(/-.*/,""):"en";CKEDITOR.scriptLoader.load(CKEDITOR.getUrl(c.path+"dialogs/lang/"+b+".js"),function(){CKEDITOR.tools.extend(a.lang.specialchar,c.langEntries[b]);a.openDialog("specialchar")})},modes:{wysiwyg:1},canUndo:!1});a.ui.addButton&&a.ui.addButton("SpecialChar",{label:a.lang.specialchar.toolbar,command:"specialchar",toolbar:"insert,50"})}});CKEDITOR.config.specialChars="! &quot; # $ % &amp; ' ( ) * + - . / 0 1 2 3 4 5 6 7 8 9 : ; &lt; = &gt; ? @ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z [ ] ^ _ ` a b c d e f g h i j k l m n o p q r s t u v w x y z { | } ~ &euro; &lsquo; &rsquo; &ldquo; &rdquo; &ndash; &mdash; &iexcl; &cent; &pound; &curren; &yen; &brvbar; &sect; &uml; &copy; &ordf; &laquo; &not; &reg; &macr; &deg; &sup2; &sup3; &acute; &micro; &para; &middot; &cedil; &sup1; &ordm; &raquo; &frac14; &frac12; &frac34; &iquest; &Agrave; &Aacute; &Acirc; &Atilde; &Auml; &Aring; &AElig; &Ccedil; &Egrave; &Eacute; &Ecirc; &Euml; &Igrave; &Iacute; &Icirc; &Iuml; &ETH; &Ntilde; &Ograve; &Oacute; &Ocirc; &Otilde; &Ouml; &times; &Oslash; &Ugrave; &Uacute; &Ucirc; &Uuml; &Yacute; &THORN; &szlig; &agrave; &aacute; &acirc; &atilde; &auml; &aring; &aelig; &ccedil; &egrave; &eacute; &ecirc; &euml; &igrave; &iacute; &icirc; &iuml; &eth; &ntilde; &ograve; &oacute; &ocirc; &otilde; &ouml; &divide; &oslash; &ugrave; &uacute; &ucirc; &uuml; &yacute; &thorn; &yuml; &OElig; &oelig; &#372; &#374 &#373 &#375; &sbquo; &#8219; &bdquo; &hellip; &trade; &#9658; &bull; &rarr; &rArr; &hArr; &diams; &asymp;".split(" ");(function(){function o(a,c){var b=0,d;for(d in c)if(c[d]==a){b=1;break}return b}var j="",r=function(){function a(){b.once("focus",g);b.once("blur",c)}function c(b){var b=b.editor,c=d.getScayt(b),g=b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE;c&&(d.setPaused(b,!c.disabled),d.setControlId(b,c.id),c.destroy(!0),delete d.instances[b.name],g&&a())}var b=this,g=function(){if(!("undefined"!=typeof d.instances[b.name]||null!=d.instances[b.name])){var a=b.config,c={};c.srcNodeRef="BODY"==b.editable().$.nodeName?
b.document.getWindow().$.frameElement:b.editable().$;c.assocApp="CKEDITOR."+CKEDITOR.version+"@"+CKEDITOR.revision;c.customerid=a.scayt_customerid||"1:WvF0D4-UtPqN1-43nkD4-NKvUm2-daQqk3-LmNiI-z7Ysb4-mwry24-T8YrS3-Q2tpq2";c.customDictionaryIds=a.scayt_customDictionaryIds||"";c.userDictionaryName=a.scayt_userDictionaryName||"";c.sLang=a.scayt_sLang||"en_US";c.onLoad=function(){CKEDITOR.env.ie&&8>CKEDITOR.env.version||this.addStyle(this.selectorCss(),"padding-bottom: 2px !important;");b.editable().hasFocus&&
!d.isControlRestored(b)&&this.focus()};a=window.scayt_custom_params;if("object"==typeof a)for(var g in a)c[g]=a[g];d.getControlId(b)&&(c.id=d.getControlId(b));var e=new window.scayt(c);e.afterMarkupRemove.push(function(a){(new CKEDITOR.dom.element(a,e.document)).mergeSiblings()});if(c=d.instances[b.name])e.sLang=c.sLang,e.option(c.option()),e.paused=c.paused;d.instances[b.name]=e;try{e.setDisabled(!1===d.isPaused(b))}catch(n){}b.fire("showScaytState")}};b.elementMode==CKEDITOR.ELEMENT_MODE_INLINE?
a():b.on("contentDom",g);b.on("contentDomUnload",function(){for(var a=CKEDITOR.document.getElementsByTag("script"),b=/^dojoIoScript(\d+)$/i,c=/^https?:\/\/svc\.webspellchecker\.net\/spellcheck\/script\/ssrv\.cgi/i,d=0;d<a.count();d++){var g=a.getItem(d),e=g.getId(),f=g.getAttribute("src");e&&(f&&e.match(b)&&f.match(c))&&g.remove()}});b.on("beforeCommandExec",function(a){"source"==a.data.name&&"source"==b.mode&&d.markControlRestore(b)});b.on("afterCommandExec",function(a){if(d.isScaytEnabled(b)&&"wysiwyg"==
b.mode&&("undo"==a.data.name||"redo"==a.data.name))d.getScayt(b).setDisabled(!0),d.refresh_timeout&&window.clearTimeout(d.refresh_timeout),d.refresh_timeout=window.setTimeout(function(){d.getScayt(b).setDisabled(!1);d.getScayt(b).focus();d.getScayt(b).refresh()},10)});b.on("destroy",c);b.on("setData",c);b.on("insertElement",function(){var a=d.getScayt(b);d.isScaytEnabled(b)&&(CKEDITOR.env.ie&&b.getSelection().unlock(!0),window.setTimeout(function(){a.focus();a.refresh()},10))},this,null,50);b.on("insertHtml",
function(){var a=d.getScayt(b);d.isScaytEnabled(b)&&(CKEDITOR.env.ie&&b.getSelection().unlock(!0),window.setTimeout(function(){a.focus();a.refresh()},10))},this,null,50);b.on("scaytDialog",function(a){a.data.djConfig=window.djConfig;a.data.scayt_control=d.getScayt(b);a.data.tab=j;a.data.scayt=window.scayt});var e=b.dataProcessor;(e=e&&e.htmlFilter)&&e.addRules({elements:{span:function(a){if(a.attributes["data-scayt_word"]&&a.attributes["data-scaytid"])return delete a.name,a}}});var e=CKEDITOR.plugins.undo.Image.prototype,
f="function"==typeof e.equalsContent?"equalsContent":"equals";e[f]=CKEDITOR.tools.override(e[f],function(a){return function(b){var c=this.contents,g=b.contents,e=d.getScayt(this.editor);e&&d.isScaytReady(this.editor)&&(this.contents=e.reset(c)||"",b.contents=e.reset(g)||"");e=a.apply(this,arguments);this.contents=c;b.contents=g;return e}});e=CKEDITOR.editor.prototype;e.checkDirty=CKEDITOR.tools.override(e.checkDirty,function(a){return function(){var b=null,c=d.getScayt(this);c&&d.isScaytReady(this)?
(b=c.reset(this.getSnapshot()),c=c.reset(this._.previousValue),b=b!==c):b=a.apply(this);return b}});b.document&&(b.elementMode!=CKEDITOR.ELEMENT_MODE_INLINE||b.focusManager.hasFocus)&&g()};CKEDITOR.plugins.scayt={engineLoaded:!1,instances:{},controlInfo:{},setControlInfo:function(a,c){a&&(a.name&&"object"!=typeof this.controlInfo[a.name])&&(this.controlInfo[a.name]={});for(var b in c)this.controlInfo[a.name][b]=c[b]},isControlRestored:function(a){return a&&a.name&&this.controlInfo[a.name]?this.controlInfo[a.name].restored:
!1},markControlRestore:function(a){this.setControlInfo(a,{restored:!0})},setControlId:function(a,c){this.setControlInfo(a,{id:c})},getControlId:function(a){return a&&a.name&&this.controlInfo[a.name]&&this.controlInfo[a.name].id?this.controlInfo[a.name].id:null},setPaused:function(a,c){this.setControlInfo(a,{paused:c})},isPaused:function(a){if(a&&a.name&&this.controlInfo[a.name])return this.controlInfo[a.name].paused},getScayt:function(a){return this.instances[a.name]},isScaytReady:function(a){return!0===
this.engineLoaded&&"undefined"!==typeof window.scayt&&this.getScayt(a)},isScaytEnabled:function(a){return(a=this.getScayt(a))?!1===a.disabled:!1},getUiTabs:function(a){var c=[],b=a.config.scayt_uiTabs||"1,1,1",b=b.split(",");b[3]="1";for(var d=0;4>d;d++)c[d]="undefined"!=typeof window.scayt&&"undefined"!=typeof window.scayt.uiTags?parseInt(b[d],10)&&window.scayt.uiTags[d]:parseInt(b[d],10);"object"==typeof a.plugins.wsc?c.push(1):c.push(0);return c},loadEngine:function(a){if(CKEDITOR.env.gecko&&10900>
CKEDITOR.env.version||CKEDITOR.env.opera||CKEDITOR.env.air)return a.fire("showScaytState");if(!0===this.engineLoaded)return r.apply(a);if(-1==this.engineLoaded)return CKEDITOR.on("scaytReady",function(){r.apply(a)});CKEDITOR.on("scaytReady",r,a);CKEDITOR.on("scaytReady",function(){this.engineLoaded=!0},this,null,0);this.engineLoaded=-1;var c=document.location.protocol,c=-1!=c.search(/https?:/)?c:"http:",c=a.config.scayt_srcUrl||c+"//svc.webspellchecker.net/scayt26/loader__base.js",b=d.parseUrl(c).path+
"/";void 0==window.scayt?(CKEDITOR._djScaytConfig={baseUrl:b,addOnLoad:[function(){CKEDITOR.fireOnce("scaytReady")}],isDebug:!1},CKEDITOR.document.getHead().append(CKEDITOR.document.createElement("script",{attributes:{type:"text/javascript",async:"true",src:c}}))):CKEDITOR.fireOnce("scaytReady");return null},parseUrl:function(a){var c;return a.match&&(c=a.match(/(.*)[\/\\](.*?\.\w+)$/))?{path:c[1],file:c[2]}:a}};var d=CKEDITOR.plugins.scayt,p=function(a,c,b,d,e,f,h){a.addCommand(d,e);a.addMenuItem(d,
{label:b,command:d,group:f,order:h})},u={preserveState:!0,editorFocus:!1,canUndo:!1,exec:function(a){if(d.isScaytReady(a)){var c=d.isScaytEnabled(a);this.setState(c?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_ON);a=d.getScayt(a);a.focus();a.setDisabled(c)}else!a.config.scayt_autoStartup&&0<=d.engineLoaded&&(a.focus(),this.setState(CKEDITOR.TRISTATE_DISABLED),d.loadEngine(a))}};CKEDITOR.plugins.add("scayt",{requires:"menubutton,dialog",beforeInit:function(a){var c=a.config.scayt_contextMenuItemsOrder||
"suggest|moresuggest|control",b="";if((c=c.split("|"))&&c.length)for(var d=0;d<c.length;d++)b+="scayt_"+c[d]+(c.length!=parseInt(d,10)+1?",":"");a.config.menu_groups=b+","+a.config.menu_groups},checkEnvironment:function(){return CKEDITOR.env.opera||CKEDITOR.env.air?0:1},init:function(a){var c=a.dataProcessor&&a.dataProcessor.dataFilter,b={elements:{span:function(a){var b=a.attributes;b&&b["data-scaytid"]&&delete a.name}}};c&&c.addRules(b);var g={},e={},f=a.addCommand("scaytcheck",u);CKEDITOR.dialog.add("scaytcheck",
CKEDITOR.getUrl(this.path+"dialogs/options.js"));c=d.getUiTabs(a);a.addMenuGroup("scaytButton");a.addMenuGroup("scayt_suggest",-10);a.addMenuGroup("scayt_moresuggest",-9);a.addMenuGroup("scayt_control",-8);var b={},h=a.lang.scayt;b.scaytToggle={label:h.enable,command:"scaytcheck",group:"scaytButton"};1==c[0]&&(b.scaytOptions={label:h.options,group:"scaytButton",onClick:function(){j="options";a.openDialog("scaytcheck")}});1==c[1]&&(b.scaytLangs={label:h.langs,group:"scaytButton",onClick:function(){j=
"langs";a.openDialog("scaytcheck")}});1==c[2]&&(b.scaytDict={label:h.dictionariesTab,group:"scaytButton",onClick:function(){j="dictionaries";a.openDialog("scaytcheck")}});b.scaytAbout={label:a.lang.scayt.about,group:"scaytButton",onClick:function(){j="about";a.openDialog("scaytcheck")}};1==c[4]&&(b.scaytWSC={label:a.lang.wsc.toolbar,group:"scaytButton",command:"checkspell"});a.addMenuItems(b);a.ui.add("Scayt",CKEDITOR.UI_MENUBUTTON,{label:h.title,title:CKEDITOR.env.opera?h.opera_title:h.title,modes:{wysiwyg:this.checkEnvironment()},
toolbar:"spellchecker,20",onRender:function(){f.on("state",function(){this.setState(f.state)},this)},onMenu:function(){var b=d.isScaytEnabled(a);a.getMenuItem("scaytToggle").label=h[b?"disable":"enable"];var c=d.getUiTabs(a);return{scaytToggle:CKEDITOR.TRISTATE_OFF,scaytOptions:b&&c[0]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytLangs:b&&c[1]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytDict:b&&c[2]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,scaytAbout:b&&c[3]?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED,scaytWSC:c[4]?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}});a.contextMenu&&a.addMenuItems&&a.contextMenu.addListener(function(b,c){if(!d.isScaytEnabled(a)||c.getRanges()[0].checkReadOnly())return null;var f=d.getScayt(a),n=f.getScaytNode();if(!n)return null;var i=f.getWord(n);if(!i)return null;var j=f.getLang(),l=a.config.scayt_contextCommands||"all",i=window.scayt.getSuggestion(i,j),l=l.split("|"),m;for(m in g){delete a._.menuItems[m];delete a.commands[m]}for(m in e){delete a._.menuItems[m];
delete a.commands[m]}if(!i||!i.length){p(a,"no_sugg",h.noSuggestions,"scayt_no_sugg",{exec:function(){}},"scayt_control",1,true);e.scayt_no_sugg=CKEDITOR.TRISTATE_OFF}else{g={};e={};m=a.config.scayt_moreSuggestions||"on";var j=false,s=a.config.scayt_maxSuggestions;typeof s!="number"&&(s=5);!s&&(s=i.length);for(var k=0,r=i.length;k<r;k=k+1){var q="scayt_suggestion_"+i[k].replace(" ","_"),t=function(a,b){return{exec:function(){f.replace(a,b)}}}(n,i[k]);if(k<s){p(a,"button_"+q,i[k],q,t,"scayt_suggest",
k+1);e[q]=CKEDITOR.TRISTATE_OFF}else if(m=="on"){p(a,"button_"+q,i[k],q,t,"scayt_moresuggest",k+1);g[q]=CKEDITOR.TRISTATE_OFF;j=true}}if(j){a.addMenuItem("scayt_moresuggest",{label:h.moreSuggestions,group:"scayt_moresuggest",order:10,getItems:function(){return g}});e.scayt_moresuggest=CKEDITOR.TRISTATE_OFF}}if(o("all",l)||o("ignore",l)){p(a,"ignore",h.ignore,"scayt_ignore",{exec:function(){f.ignore(n)}},"scayt_control",2);e.scayt_ignore=CKEDITOR.TRISTATE_OFF}if(o("all",l)||o("ignoreall",l)){p(a,"ignore_all",
h.ignoreAll,"scayt_ignore_all",{exec:function(){f.ignoreAll(n)}},"scayt_control",3);e.scayt_ignore_all=CKEDITOR.TRISTATE_OFF}if(o("all",l)||o("add",l)){p(a,"add_word",h.addWord,"scayt_add_word",{exec:function(){window.scayt.addWordToUserDictionary(n)}},"scayt_control",4);e.scayt_add_word=CKEDITOR.TRISTATE_OFF}f.fireOnContextMenu&&f.fireOnContextMenu(a);return e});c=function(b){b.removeListener();CKEDITOR.env.opera||CKEDITOR.env.air?f.setState(CKEDITOR.TRISTATE_DISABLED):f.setState(d.isScaytEnabled(a)?
CKEDITOR.TRISTATE_ON:CKEDITOR.TRISTATE_OFF)};a.on("showScaytState",c);a.on("instanceReady",c);if(a.config.scayt_autoStartup)a.on("instanceReady",function(){d.loadEngine(a)})},afterInit:function(a){var c,b=function(a){if(a.hasAttribute("data-scaytid"))return!1};a._.elementsPath&&(c=a._.elementsPath.filters)&&c.push(b);a.addRemoveFormatFilter&&a.addRemoveFormatFilter(b)}})})();(function(){CKEDITOR.plugins.add("stylescombo",{requires:"richcombo",init:function(c){var j=c.config,f=c.lang.stylescombo,e={},i=[],k=[];c.on("stylesSet",function(b){if(b=b.data.styles){for(var a,h,d=0,g=b.length;d<g;d++)if(a=b[d],!(c.blockless&&a.element in CKEDITOR.dtd.$block)&&(h=a.name,a=new CKEDITOR.style(a),!c.filter.customConfig||c.filter.check(a)))a._name=h,a._.enterMode=j.enterMode,a._.weight=d+1E3*(a.type==CKEDITOR.STYLE_OBJECT?1:a.type==CKEDITOR.STYLE_BLOCK?2:3),e[h]=a,i.push(a),k.push(a);
i.sort(function(a,b){return a._.weight-b._.weight})}});c.ui.addRichCombo("Styles",{label:f.label,title:f.panelTitle,toolbar:"styles,10",allowedContent:k,panel:{css:[CKEDITOR.skin.getPath("editor")].concat(j.contentsCss),multiSelect:!0,attributes:{"aria-label":f.panelTitle}},init:function(){var b,a,c,d,g,e;g=0;for(e=i.length;g<e;g++)b=i[g],a=b._name,d=b.type,d!=c&&(this.startGroup(f["panelTitle"+d]),c=d),this.add(a,b.type==CKEDITOR.STYLE_OBJECT?a:b.buildPreview(),a);this.commit()},onClick:function(b){c.focus();
c.fire("saveSnapshot");var b=e[b],a=c.elementPath();c[b.checkActive(a)?"removeStyle":"applyStyle"](b);c.fire("saveSnapshot")},onRender:function(){c.on("selectionChange",function(b){for(var a=this.getValue(),b=b.data.path.elements,c=0,d=b.length,g;c<d;c++){g=b[c];for(var f in e)if(e[f].checkElementRemovable(g,!0)){f!=a&&this.setValue(f);return}}this.setValue("")},this)},onOpen:function(){var b=c.getSelection().getSelectedElement(),b=c.elementPath(b),a=[0,0,0,0];this.showAll();this.unmarkAll();for(var h in e){var d=
e[h],g=d.type;d.checkApplicable(b,c.activeFilter)?a[g]++:this.hideItem(h);d.checkActive(b)&&this.mark(h)}a[CKEDITOR.STYLE_BLOCK]||this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_BLOCK]);a[CKEDITOR.STYLE_INLINE]||this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_INLINE]);a[CKEDITOR.STYLE_OBJECT]||this.hideGroup(f["panelTitle"+CKEDITOR.STYLE_OBJECT])},refresh:function(){var b=c.elementPath();if(b){for(var a in e)if(e[a].checkApplicable(b,c.activeFilter))return;this.setState(CKEDITOR.TRISTATE_DISABLED)}},reset:function(){e=
{};i=[]}})}})})();(function(){function i(c){return{editorFocus:!1,canUndo:!1,modes:{wysiwyg:1},exec:function(d){if(d.editable().hasFocus){var e=d.getSelection(),b;if(b=(new CKEDITOR.dom.elementPath(e.getCommonAncestor(),e.root)).contains({td:1,th:1},1)){var e=d.createRange(),a=CKEDITOR.tools.tryThese(function(){var a=b.getParent().$.cells[b.$.cellIndex+(c?-1:1)];a.parentNode.parentNode;return a},function(){var a=b.getParent(),a=a.getAscendant("table").$.rows[a.$.rowIndex+(c?-1:1)];return a.cells[c?a.cells.length-1:
0]});if(!a&&!c){for(var f=b.getAscendant("table").$,a=b.getParent().$.cells,f=new CKEDITOR.dom.element(f.insertRow(-1),d.document),g=0,h=a.length;g<h;g++)f.append((new CKEDITOR.dom.element(a[g],d.document)).clone(!1,!1)).appendBogus();e.moveToElementEditStart(f)}else if(a)a=new CKEDITOR.dom.element(a),e.moveToElementEditStart(a),(!e.checkStartOfBlock()||!e.checkEndOfBlock())&&e.selectNodeContents(a);else return!0;e.select(!0);return!0}}return!1}}}var h={editorFocus:!1,modes:{wysiwyg:1,source:1}},
g={exec:function(c){c.container.focusNext(!0,c.tabIndex)}},f={exec:function(c){c.container.focusPrevious(!0,c.tabIndex)}};CKEDITOR.plugins.add("tab",{init:function(c){for(var d=!1!==c.config.enableTabKeyTools,e=c.config.tabSpaces||0,b="";e--;)b+=" ";if(b)c.on("key",function(a){9==a.data.keyCode&&(c.insertHtml(b),a.cancel())});if(d)c.on("key",function(a){(9==a.data.keyCode&&c.execCommand("selectNextCell")||a.data.keyCode==CKEDITOR.SHIFT+9&&c.execCommand("selectPreviousCell"))&&a.cancel()});c.addCommand("blur",
CKEDITOR.tools.extend(g,h));c.addCommand("blurBack",CKEDITOR.tools.extend(f,h));c.addCommand("selectNextCell",i());c.addCommand("selectPreviousCell",i(!0))}})})();
CKEDITOR.dom.element.prototype.focusNext=function(i,h){var g=void 0===h?this.getTabIndex():h,f,c,d,e,b,a;if(0>=g)for(b=this.getNextSourceNode(i,CKEDITOR.NODE_ELEMENT);b;){if(b.isVisible()&&0===b.getTabIndex()){d=b;break}b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT)}else for(b=this.getDocument().getBody().getFirst();b=b.getNextSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&b.equals(this)){if(c=!0,i){if(!(b=b.getNextSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(b)&&
(f=1);if(b.isVisible()&&!(0>(a=b.getTabIndex()))){if(f&&a==g){d=b;break}a>g&&(!d||!e||a<e)?(d=b,e=a):!d&&0===a&&(d=b,e=a)}}d&&d.focus()};
CKEDITOR.dom.element.prototype.focusPrevious=function(i,h){for(var g=void 0===h?this.getTabIndex():h,f,c,d,e=0,b,a=this.getDocument().getBody().getLast();a=a.getPreviousSourceNode(!1,CKEDITOR.NODE_ELEMENT);){if(!f)if(!c&&a.equals(this)){if(c=!0,i){if(!(a=a.getPreviousSourceNode(!0,CKEDITOR.NODE_ELEMENT)))break;f=1}}else c&&!this.contains(a)&&(f=1);if(a.isVisible()&&!(0>(b=a.getTabIndex())))if(0>=g){if(f&&0===b){d=a;break}b>e&&(d=a,e=b)}else{if(f&&b==g){d=a;break}if(b<g&&(!d||b>e))d=a,e=b}}d&&d.focus()};CKEDITOR.plugins.add("table",{requires:"dialog",init:function(a){function d(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,e){this.setState(e.contains("table",1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}if(!a.blockless){var b=a.lang.table;a.addCommand("table",new CKEDITOR.dialogCommand("table",{context:"table",allowedContent:"table{width,height}[align,border,cellpadding,cellspacing,summary];caption tbody thead tfoot;th td tr[scope];"+(a.plugins.dialogadvtab?
"table"+a.plugins.dialogadvtab.allowedContent():""),requiredContent:"table",contentTransformations:[["table{width}: sizeToStyle","table[width]: sizeToAttribute"]]}));a.addCommand("tableProperties",new CKEDITOR.dialogCommand("tableProperties",d()));a.addCommand("tableDelete",d({exec:function(a){var c=a.elementPath().contains("table",1);if(c){var b=c.getParent();1==b.getChildCount()&&!b.is("body","td","th")&&(c=b);a=a.createRange();a.moveToPosition(c,CKEDITOR.POSITION_BEFORE_START);c.remove();a.select()}}}));
a.ui.addButton&&a.ui.addButton("Table",{label:b.toolbar,command:"table",toolbar:"insert,30"});CKEDITOR.dialog.add("table",this.path+"dialogs/table.js");CKEDITOR.dialog.add("tableProperties",this.path+"dialogs/table.js");a.addMenuItems&&a.addMenuItems({table:{label:b.menu,command:"tableProperties",group:"table",order:5},tabledelete:{label:b.deleteTable,command:"tableDelete",group:"table",order:1}});a.on("doubleclick",function(a){a.data.element.is("table")&&(a.data.dialog="tableProperties")});a.contextMenu&&
a.contextMenu.addListener(function(){return{tabledelete:CKEDITOR.TRISTATE_OFF,table:CKEDITOR.TRISTATE_OFF}})}}});(function(){function p(e){function d(a){!(0<b.length)&&(a.type==CKEDITOR.NODE_ELEMENT&&y.test(a.getName())&&!a.getCustomData("selected_cell"))&&(CKEDITOR.dom.element.setMarker(c,a,"selected_cell",!0),b.push(a))}for(var e=e.getRanges(),b=[],c={},a=0;a<e.length;a++){var f=e[a];if(f.collapsed)f=f.getCommonAncestor(),(f=f.getAscendant("td",!0)||f.getAscendant("th",!0))&&b.push(f);else{var f=new CKEDITOR.dom.walker(f),g;for(f.guard=d;g=f.next();)if(g.type!=CKEDITOR.NODE_ELEMENT||!g.is(CKEDITOR.dtd.table))if((g=
g.getAscendant("td",!0)||g.getAscendant("th",!0))&&!g.getCustomData("selected_cell"))CKEDITOR.dom.element.setMarker(c,g,"selected_cell",!0),b.push(g)}}CKEDITOR.dom.element.clearAllMarkers(c);return b}function o(e,d){for(var b=p(e),c=b[0],a=c.getAscendant("table"),c=c.getDocument(),f=b[0].getParent(),g=f.$.rowIndex,b=b[b.length-1],h=b.getParent().$.rowIndex+b.$.rowSpan-1,b=new CKEDITOR.dom.element(a.$.rows[h]),g=d?g:h,f=d?f:b,b=CKEDITOR.tools.buildTableMap(a),a=b[g],g=d?b[g-1]:b[g+1],b=b[0].length,
c=c.createElement("tr"),h=0;a[h]&&h<b;h++){var i;1<a[h].rowSpan&&g&&a[h]==g[h]?(i=a[h],i.rowSpan+=1):(i=(new CKEDITOR.dom.element(a[h])).clone(),i.removeAttribute("rowSpan"),i.appendBogus(),c.append(i),i=i.$);h+=i.colSpan-1}d?c.insertBefore(f):c.insertAfter(f)}function q(e){if(e instanceof CKEDITOR.dom.selection){for(var d=p(e),b=d[0].getAscendant("table"),c=CKEDITOR.tools.buildTableMap(b),e=d[0].getParent().$.rowIndex,d=d[d.length-1],a=d.getParent().$.rowIndex+d.$.rowSpan-1,d=[],f=e;f<=a;f++){for(var g=
c[f],h=new CKEDITOR.dom.element(b.$.rows[f]),i=0;i<g.length;i++){var j=new CKEDITOR.dom.element(g[i]),l=j.getParent().$.rowIndex;1==j.$.rowSpan?j.remove():(j.$.rowSpan-=1,l==f&&(l=c[f+1],l[i-1]?j.insertAfter(new CKEDITOR.dom.element(l[i-1])):(new CKEDITOR.dom.element(b.$.rows[f+1])).append(j,1)));i+=j.$.colSpan-1}d.push(h)}c=b.$.rows;b=new CKEDITOR.dom.element(c[a+1]||(0<e?c[e-1]:null)||b.$.parentNode);for(f=d.length;0<=f;f--)q(d[f]);return b}e instanceof CKEDITOR.dom.element&&(b=e.getAscendant("table"),
1==b.$.rows.length?b.remove():e.remove());return null}function r(e,d){for(var b=d?Infinity:0,c=0;c<e.length;c++){var a;a=e[c];for(var f=d,g=a.getParent().$.cells,h=0,i=0;i<g.length;i++){var j=g[i],h=h+(f?1:j.colSpan);if(j==a.$)break}a=h-1;if(d?a<b:a>b)b=a}return b}function k(e,d){for(var b=p(e),c=b[0].getAscendant("table"),a=r(b,1),b=r(b),a=d?a:b,f=CKEDITOR.tools.buildTableMap(c),c=[],b=[],g=f.length,h=0;h<g;h++)c.push(f[h][a]),b.push(d?f[h][a-1]:f[h][a+1]);for(h=0;h<g;h++)c[h]&&(1<c[h].colSpan&&
b[h]==c[h]?(a=c[h],a.colSpan+=1):(a=(new CKEDITOR.dom.element(c[h])).clone(),a.removeAttribute("colSpan"),a.appendBogus(),a[d?"insertBefore":"insertAfter"].call(a,new CKEDITOR.dom.element(c[h])),a=a.$),h+=a.rowSpan-1)}function u(e,d){var b=e.getStartElement();if(b=b.getAscendant("td",1)||b.getAscendant("th",1)){var c=b.clone();c.appendBogus();d?c.insertBefore(b):c.insertAfter(b)}}function t(e){if(e instanceof CKEDITOR.dom.selection){var e=p(e),d=e[0]&&e[0].getAscendant("table"),b;a:{var c=0;b=e.length-
1;for(var a={},f,g;f=e[c++];)CKEDITOR.dom.element.setMarker(a,f,"delete_cell",!0);for(c=0;f=e[c++];)if((g=f.getPrevious())&&!g.getCustomData("delete_cell")||(g=f.getNext())&&!g.getCustomData("delete_cell")){CKEDITOR.dom.element.clearAllMarkers(a);b=g;break a}CKEDITOR.dom.element.clearAllMarkers(a);g=e[0].getParent();(g=g.getPrevious())?b=g.getLast():(g=e[b].getParent(),b=(g=g.getNext())?g.getChild(0):null)}for(g=e.length-1;0<=g;g--)t(e[g]);b?m(b,!0):d&&d.remove()}else e instanceof CKEDITOR.dom.element&&
(d=e.getParent(),1==d.getChildCount()?d.remove():e.remove())}function m(e,d){var b=e.getDocument(),c=CKEDITOR.document;CKEDITOR.env.ie&&10==CKEDITOR.env.version&&(c.focus(),b.focus());b=new CKEDITOR.dom.range(b);if(!b["moveToElementEdit"+(d?"End":"Start")](e))b.selectNodeContents(e),b.collapse(d?!1:!0);b.select(!0)}function v(e,d,b){e=e[d];if("undefined"==typeof b)return e;for(d=0;e&&d<e.length;d++){if(b.is&&e[d]==b.$)return d;if(d==b)return new CKEDITOR.dom.element(e[d])}return b.is?-1:null}function s(e,
d,b){var c=p(e),a;if((d?1!=c.length:2>c.length)||(a=e.getCommonAncestor())&&a.type==CKEDITOR.NODE_ELEMENT&&a.is("table"))return!1;var f,e=c[0];a=e.getAscendant("table");var g=CKEDITOR.tools.buildTableMap(a),h=g.length,i=g[0].length,j=e.getParent().$.rowIndex,l=v(g,j,e);if(d){var n;try{var m=parseInt(e.getAttribute("rowspan"),10)||1;f=parseInt(e.getAttribute("colspan"),10)||1;n=g["up"==d?j-m:"down"==d?j+m:j]["left"==d?l-f:"right"==d?l+f:l]}catch(z){return!1}if(!n||e.$==n)return!1;c["up"==d||"left"==
d?"unshift":"push"](new CKEDITOR.dom.element(n))}for(var d=e.getDocument(),o=j,m=n=0,q=!b&&new CKEDITOR.dom.documentFragment(d),s=0,d=0;d<c.length;d++){f=c[d];var k=f.getParent(),t=f.getFirst(),r=f.$.colSpan,u=f.$.rowSpan,k=k.$.rowIndex,w=v(g,k,f),s=s+r*u,m=Math.max(m,w-l+r);n=Math.max(n,k-j+u);if(!b){r=f;(u=r.getBogus())&&u.remove();r.trim();if(f.getChildren().count()){if(k!=o&&t&&(!t.isBlockBoundary||!t.isBlockBoundary({br:1})))(o=q.getLast(CKEDITOR.dom.walker.whitespaces(!0)))&&(!o.is||!o.is("br"))&&
q.append("br");f.moveChildren(q)}d?f.remove():f.setHtml("")}o=k}if(b)return n*m==s;q.moveChildren(e);e.appendBogus();m>=i?e.removeAttribute("rowSpan"):e.$.rowSpan=n;n>=h?e.removeAttribute("colSpan"):e.$.colSpan=m;b=new CKEDITOR.dom.nodeList(a.$.rows);c=b.count();for(d=c-1;0<=d;d--)a=b.getItem(d),a.$.cells.length||(a.remove(),c++);return e}function w(e,d){var b=p(e);if(1<b.length)return!1;if(d)return!0;var b=b[0],c=b.getParent(),a=c.getAscendant("table"),f=CKEDITOR.tools.buildTableMap(a),g=c.$.rowIndex,
h=v(f,g,b),i=b.$.rowSpan,j;if(1<i){j=Math.ceil(i/2);for(var i=Math.floor(i/2),c=g+j,a=new CKEDITOR.dom.element(a.$.rows[c]),f=v(f,c),l,c=b.clone(),g=0;g<f.length;g++)if(l=f[g],l.parentNode==a.$&&g>h){c.insertBefore(new CKEDITOR.dom.element(l));break}else l=null;l||a.append(c)}else{i=j=1;a=c.clone();a.insertAfter(c);a.append(c=b.clone());l=v(f,g);for(h=0;h<l.length;h++)l[h].rowSpan++}c.appendBogus();b.$.rowSpan=j;c.$.rowSpan=i;1==j&&b.removeAttribute("rowSpan");1==i&&c.removeAttribute("rowSpan");return c}
function x(e,d){var b=p(e);if(1<b.length)return!1;if(d)return!0;var b=b[0],c=b.getParent(),a=c.getAscendant("table"),a=CKEDITOR.tools.buildTableMap(a),f=v(a,c.$.rowIndex,b),g=b.$.colSpan;if(1<g)c=Math.ceil(g/2),g=Math.floor(g/2);else{for(var g=c=1,h=[],i=0;i<a.length;i++){var j=a[i];h.push(j[f]);1<j[f].rowSpan&&(i+=j[f].rowSpan-1)}for(a=0;a<h.length;a++)h[a].colSpan++}a=b.clone();a.insertAfter(b);a.appendBogus();b.$.colSpan=c;a.$.colSpan=g;1==c&&b.removeAttribute("colSpan");1==g&&a.removeAttribute("colSpan");
return a}var y=/^(?:td|th)$/;CKEDITOR.plugins.tabletools={requires:"table,dialog,contextmenu",init:function(e){function d(a){return CKEDITOR.tools.extend(a||{},{contextSensitive:1,refresh:function(a,b){this.setState(b.contains({td:1,th:1},1)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)}})}function b(a,b){var c=e.addCommand(a,b);e.addFeature(c)}var c=e.lang.table;b("cellProperties",new CKEDITOR.dialogCommand("cellProperties",d({allowedContent:"td th{width,height,border-color,background-color,white-space,vertical-align,text-align}[colspan,rowspan]",
requiredContent:"table"})));CKEDITOR.dialog.add("cellProperties",this.path+"dialogs/tableCell.js");b("rowDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();m(q(a))}}));b("rowInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();o(a,!0)}}));b("rowInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();o(a)}}));b("columnDelete",d({requiredContent:"table",exec:function(a){for(var a=a.getSelection(),a=p(a),b=a[0],c=a[a.length-1],a=b.getAscendant("table"),
d=CKEDITOR.tools.buildTableMap(a),e,j,l=[],n=0,o=d.length;n<o;n++)for(var k=0,q=d[n].length;k<q;k++)d[n][k]==b.$&&(e=k),d[n][k]==c.$&&(j=k);for(n=e;n<=j;n++)for(k=0;k<d.length;k++)c=d[k],b=new CKEDITOR.dom.element(a.$.rows[k]),c=new CKEDITOR.dom.element(c[n]),c.$&&(1==c.$.colSpan?c.remove():c.$.colSpan-=1,k+=c.$.rowSpan-1,b.$.cells.length||l.push(b));j=a.$.rows[0]&&a.$.rows[0].cells;e=new CKEDITOR.dom.element(j[e]||(e?j[e-1]:a.$.parentNode));l.length==o&&a.remove();e&&m(e,!0)}}));b("columnInsertBefore",
d({requiredContent:"table",exec:function(a){a=a.getSelection();k(a,!0)}}));b("columnInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();k(a)}}));b("cellDelete",d({requiredContent:"table",exec:function(a){a=a.getSelection();t(a)}}));b("cellMerge",d({allowedContent:"td[colspan,rowspan]",requiredContent:"td[colspan,rowspan]",exec:function(a){m(s(a.getSelection()),!0)}}));b("cellMergeRight",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){m(s(a.getSelection(),
"right"),!0)}}));b("cellMergeDown",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){m(s(a.getSelection(),"down"),!0)}}));b("cellVerticalSplit",d({allowedContent:"td[rowspan]",requiredContent:"td[rowspan]",exec:function(a){m(w(a.getSelection()))}}));b("cellHorizontalSplit",d({allowedContent:"td[colspan]",requiredContent:"td[colspan]",exec:function(a){m(x(a.getSelection()))}}));b("cellInsertBefore",d({requiredContent:"table",exec:function(a){a=a.getSelection();u(a,!0)}}));
b("cellInsertAfter",d({requiredContent:"table",exec:function(a){a=a.getSelection();u(a)}}));e.addMenuItems&&e.addMenuItems({tablecell:{label:c.cell.menu,group:"tablecell",order:1,getItems:function(){var a=e.getSelection(),b=p(a);return{tablecell_insertBefore:CKEDITOR.TRISTATE_OFF,tablecell_insertAfter:CKEDITOR.TRISTATE_OFF,tablecell_delete:CKEDITOR.TRISTATE_OFF,tablecell_merge:s(a,null,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_merge_right:s(a,"right",!0)?CKEDITOR.TRISTATE_OFF:
CKEDITOR.TRISTATE_DISABLED,tablecell_merge_down:s(a,"down",!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_vertical:w(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_split_horizontal:x(a,!0)?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,tablecell_properties:0<b.length?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED}}},tablecell_insertBefore:{label:c.cell.insertBefore,group:"tablecell",command:"cellInsertBefore",order:5},tablecell_insertAfter:{label:c.cell.insertAfter,
group:"tablecell",command:"cellInsertAfter",order:10},tablecell_delete:{label:c.cell.deleteCell,group:"tablecell",command:"cellDelete",order:15},tablecell_merge:{label:c.cell.merge,group:"tablecell",command:"cellMerge",order:16},tablecell_merge_right:{label:c.cell.mergeRight,group:"tablecell",command:"cellMergeRight",order:17},tablecell_merge_down:{label:c.cell.mergeDown,group:"tablecell",command:"cellMergeDown",order:18},tablecell_split_horizontal:{label:c.cell.splitHorizontal,group:"tablecell",
command:"cellHorizontalSplit",order:19},tablecell_split_vertical:{label:c.cell.splitVertical,group:"tablecell",command:"cellVerticalSplit",order:20},tablecell_properties:{label:c.cell.title,group:"tablecellproperties",command:"cellProperties",order:21},tablerow:{label:c.row.menu,group:"tablerow",order:1,getItems:function(){return{tablerow_insertBefore:CKEDITOR.TRISTATE_OFF,tablerow_insertAfter:CKEDITOR.TRISTATE_OFF,tablerow_delete:CKEDITOR.TRISTATE_OFF}}},tablerow_insertBefore:{label:c.row.insertBefore,
group:"tablerow",command:"rowInsertBefore",order:5},tablerow_insertAfter:{label:c.row.insertAfter,group:"tablerow",command:"rowInsertAfter",order:10},tablerow_delete:{label:c.row.deleteRow,group:"tablerow",command:"rowDelete",order:15},tablecolumn:{label:c.column.menu,group:"tablecolumn",order:1,getItems:function(){return{tablecolumn_insertBefore:CKEDITOR.TRISTATE_OFF,tablecolumn_insertAfter:CKEDITOR.TRISTATE_OFF,tablecolumn_delete:CKEDITOR.TRISTATE_OFF}}},tablecolumn_insertBefore:{label:c.column.insertBefore,
group:"tablecolumn",command:"columnInsertBefore",order:5},tablecolumn_insertAfter:{label:c.column.insertAfter,group:"tablecolumn",command:"columnInsertAfter",order:10},tablecolumn_delete:{label:c.column.deleteColumn,group:"tablecolumn",command:"columnDelete",order:15}});e.contextMenu&&e.contextMenu.addListener(function(a,b,c){return(a=c.contains({td:1,th:1},1))&&!a.isReadOnly()?{tablecell:CKEDITOR.TRISTATE_OFF,tablerow:CKEDITOR.TRISTATE_OFF,tablecolumn:CKEDITOR.TRISTATE_OFF}:null})},getSelectedCells:p};
CKEDITOR.plugins.add("tabletools",CKEDITOR.plugins.tabletools)})();CKEDITOR.tools.buildTableMap=function(p){for(var p=p.$.rows,o=-1,q=[],r=0;r<p.length;r++){o++;!q[o]&&(q[o]=[]);for(var k=-1,u=0;u<p[r].cells.length;u++){var t=p[r].cells[u];for(k++;q[o][k];)k++;for(var m=isNaN(t.colSpan)?1:t.colSpan,t=isNaN(t.rowSpan)?1:t.rowSpan,v=0;v<t;v++){q[o+v]||(q[o+v]=[]);for(var s=0;s<m;s++)q[o+v][k+s]=p[r].cells[u]}k+=m-1}}return q};(function(){function g(a){this.editor=a;this.reset()}CKEDITOR.plugins.add("undo",{init:function(a){function c(a){b.enabled&&!1!==a.data.command.canUndo&&b.save()}function d(){b.enabled=a.readOnly?!1:"wysiwyg"==a.mode;b.onChange()}var b=a.undoManager=new g(a),e=a.addCommand("undo",{exec:function(){b.undo()&&(a.selectionChange(),this.fire("afterUndo"))},startDisabled:!0,canUndo:!1}),f=a.addCommand("redo",{exec:function(){b.redo()&&(a.selectionChange(),this.fire("afterRedo"))},startDisabled:!0,canUndo:!1});
a.setKeystroke([[CKEDITOR.CTRL+90,"undo"],[CKEDITOR.CTRL+89,"redo"],[CKEDITOR.CTRL+CKEDITOR.SHIFT+90,"redo"]]);b.onChange=function(){e.setState(b.undoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED);f.setState(b.redoable()?CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED)};a.on("beforeCommandExec",c);a.on("afterCommandExec",c);a.on("saveSnapshot",function(a){b.save(a.data&&a.data.contentOnly)});a.on("contentDom",function(){a.editable().on("keydown",function(a){a=a.data.getKey();(8==a||46==
a)&&b.type(a,0)});a.editable().on("keypress",function(a){b.type(a.data.getKey(),1)})});a.on("beforeModeUnload",function(){"wysiwyg"==a.mode&&b.save(!0)});a.on("mode",d);a.on("readOnly",d);a.ui.addButton&&(a.ui.addButton("Undo",{label:a.lang.undo.undo,command:"undo",toolbar:"undo,10"}),a.ui.addButton("Redo",{label:a.lang.undo.redo,command:"redo",toolbar:"undo,20"}));a.resetUndo=function(){b.reset();a.fire("saveSnapshot")};a.on("updateSnapshot",function(){b.currentImage&&b.update()});a.on("lockSnapshot",
function(a){b.lock(a.data&&a.data.dontUpdate)});a.on("unlockSnapshot",b.unlock,b)}});CKEDITOR.plugins.undo={};var f=CKEDITOR.plugins.undo.Image=function(a,c){this.editor=a;a.fire("beforeUndoImage");var d=a.getSnapshot();CKEDITOR.env.ie&&d&&(d=d.replace(/\s+data-cke-expando=".*?"/g,""));this.contents=d;c||(this.bookmarks=(d=d&&a.getSelection())&&d.createBookmarks2(!0));a.fire("afterUndoImage")},h=/\b(?:href|src|name)="[^"]*?"/gi;f.prototype={equalsContent:function(a){var c=this.contents,a=a.contents;
if(CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.ie6Compat))c=c.replace(h,""),a=a.replace(h,"");return c!=a?!1:!0},equalsSelection:function(a){var c=this.bookmarks,a=a.bookmarks;if(c||a){if(!c||!a||c.length!=a.length)return!1;for(var d=0;d<c.length;d++){var b=c[d],e=a[d];if(b.startOffset!=e.startOffset||b.endOffset!=e.endOffset||!CKEDITOR.tools.arrayCompare(b.start,e.start)||!CKEDITOR.tools.arrayCompare(b.end,e.end))return!1}}return!0}};g.prototype={type:function(a,c){var d=!c&&a!=this.lastKeystroke,
b=this.editor;if(!this.typing||c&&!this.wasCharacter||d){var e=new f(b),g=this.snapshots.length;CKEDITOR.tools.setTimeout(function(){var a=b.getSnapshot();CKEDITOR.env.ie&&(a=a.replace(/\s+data-cke-expando=".*?"/g,""));e.contents!=a&&g==this.snapshots.length&&(this.typing=!0,this.save(!1,e,!1)||this.snapshots.splice(this.index+1,this.snapshots.length-this.index-1),this.hasUndo=!0,this.hasRedo=!1,this.modifiersCount=this.typesCount=1,this.onChange())},0,this)}this.lastKeystroke=a;(this.wasCharacter=
c)?(this.modifiersCount=0,this.typesCount++,25<this.typesCount?(this.save(!1,null,!1),this.typesCount=1):setTimeout(function(){b.fire("change")},0)):(this.typesCount=0,this.modifiersCount++,25<this.modifiersCount?(this.save(!1,null,!1),this.modifiersCount=1):setTimeout(function(){b.fire("change")},0))},reset:function(){this.lastKeystroke=0;this.snapshots=[];this.index=-1;this.limit=this.editor.config.undoStackSize||20;this.currentImage=null;this.hasRedo=this.hasUndo=!1;this.locked=null;this.resetType()},
resetType:function(){this.typing=!1;delete this.lastKeystroke;this.modifiersCount=this.typesCount=0},fireChange:function(){this.hasUndo=!!this.getNextImage(!0);this.hasRedo=!!this.getNextImage(!1);this.resetType();this.onChange()},save:function(a,c,d){if(this.locked)return!1;var b=this.snapshots;c||(c=new f(this.editor));if(!1===c.contents)return!1;if(this.currentImage)if(c.equalsContent(this.currentImage)){if(a||c.equalsSelection(this.currentImage))return!1}else this.editor.fire("change");b.splice(this.index+
1,b.length-this.index-1);b.length==this.limit&&b.shift();this.index=b.push(c)-1;this.currentImage=c;!1!==d&&this.fireChange();return!0},restoreImage:function(a){var c=this.editor,d;a.bookmarks&&(c.focus(),d=c.getSelection());this.locked=1;this.editor.loadSnapshot(a.contents);a.bookmarks?d.selectBookmarks(a.bookmarks):CKEDITOR.env.ie&&(d=this.editor.document.getBody().$.createTextRange(),d.collapse(!0),d.select());this.locked=0;this.index=a.index;this.currentImage=this.snapshots[this.index];this.update();
this.fireChange();c.fire("change")},getNextImage:function(a){var c=this.snapshots,d=this.currentImage,b;if(d)if(a)for(b=this.index-1;0<=b;b--){if(a=c[b],!d.equalsContent(a))return a.index=b,a}else for(b=this.index+1;b<c.length;b++)if(a=c[b],!d.equalsContent(a))return a.index=b,a;return null},redoable:function(){return this.enabled&&this.hasRedo},undoable:function(){return this.enabled&&this.hasUndo},undo:function(){if(this.undoable()){this.save(!0);var a=this.getNextImage(!0);if(a)return this.restoreImage(a),
!0}return!1},redo:function(){if(this.redoable()&&(this.save(!0),this.redoable())){var a=this.getNextImage(!1);if(a)return this.restoreImage(a),!0}return!1},update:function(a){if(!this.locked){a||(a=new f(this.editor));for(var c=this.index,d=this.snapshots;0<c&&this.currentImage.equalsContent(d[c-1]);)c-=1;d.splice(c,this.index-c+1,a);this.index=c;this.currentImage=a}},lock:function(a){this.locked?this.locked.level++:a?this.locked={level:1}:(a=new f(this.editor,!0),this.locked={update:this.currentImage&&
this.currentImage.equalsContent(a)?a:null,level:1})},unlock:function(){if(this.locked&&!--this.locked.level){var a=this.locked.update,c=a&&new f(this.editor,!0);this.locked=null;a&&!a.equalsContent(c)&&this.update()}}}})();CKEDITOR.config.wsc_removeGlobalVariable=!0;
CKEDITOR.plugins.add("wsc",{requires:"dialog",parseApi:function(a){a.config.wsc_onFinish="function"===typeof a.config.wsc_onFinish?a.config.wsc_onFinish:function(){};a.config.wsc_onClose="function"===typeof a.config.wsc_onClose?a.config.wsc_onClose:function(){}},parseConfig:function(a){a.config.wsc_customerId=a.config.wsc_customerId||CKEDITOR.config.wsc_customerId||"1:ua3xw1-2XyGJ3-GWruD3-6OFNT1-oXcuB1-nR6Bp4-hgQHc-EcYng3-sdRXG3-NOfFk";a.config.wsc_customDictionaryIds=a.config.wsc_customDictionaryIds||
CKEDITOR.config.wsc_customDictionaryIds||"";a.config.wsc_userDictionaryName=a.config.wsc_userDictionaryName||CKEDITOR.config.wsc_userDictionaryName||"";a.config.wsc_customLoaderScript=a.config.wsc_customLoaderScript||CKEDITOR.config.wsc_customLoaderScript;CKEDITOR.config.wsc_cmd=a.config.wsc_cmd||CKEDITOR.config.wsc_cmd||"spell";CKEDITOR.config.wsc_version="v4.3.0-1e748a6"},init:function(a){this.parseConfig(a);this.parseApi(a);a.addCommand("checkspell",new CKEDITOR.dialogCommand("checkspell")).modes=
{wysiwyg:!CKEDITOR.env.opera&&!CKEDITOR.env.air&&document.domain==window.location.hostname};"undefined"==typeof a.plugins.scayt&&a.ui.addButton&&a.ui.addButton("SpellChecker",{label:a.lang.wsc.toolbar,command:"checkspell",toolbar:"spellchecker,10"});CKEDITOR.dialog.add("checkspell",this.path+(CKEDITOR.env.ie&&8>=CKEDITOR.env.version?"dialogs/wsc_ie.js":window.postMessage?"dialogs/wsc.js":"dialogs/wsc_ie.js"))}});CKEDITOR.config.plugins='dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,div,resize,toolbar,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,undo,wsc';CKEDITOR.config.skin='moono';(function() {var setIcons = function(icons, strip) {var path = CKEDITOR.getUrl( 'plugins/' + strip );icons = icons.split( ',' );for ( var i = 0; i < icons.length; i++ )CKEDITOR.skin.icons[ icons[ i ] ] = { path: path, offset: -icons[ ++i ], bgsize : icons[ ++i ] };};if (CKEDITOR.env.hidpi) setIcons('about,0,,bold,24,,italic,48,,strike,72,,subscript,96,,superscript,120,,underline,144,,bidiltr,168,,bidirtl,192,,blockquote,216,,copy-rtl,240,,copy,264,,cut-rtl,288,,cut,312,,paste-rtl,336,,paste,360,,bgcolor,384,,textcolor,408,,templates-rtl,432,,templates,456,,creatediv,480,,find-rtl,504,,find,528,,replace,552,,flash,576,,button,600,,checkbox,624,,form,648,,hiddenfield,672,,imagebutton,696,,radio,720,,select-rtl,744,,select,768,,textarea-rtl,792,,textarea,816,,textfield-rtl,840,,textfield,864,,horizontalrule,888,,iframe,912,,image,936,,indent-rtl,960,,indent,984,,outdent-rtl,1008,,outdent,1032,,smiley,1056,,justifyblock,1080,,justifycenter,1104,,justifyleft,1128,,justifyright,1152,,language,1176,,anchor-rtl,1200,,anchor,1224,,link,1248,,unlink,1272,,bulletedlist-rtl,1296,,bulletedlist,1320,,numberedlist-rtl,1344,,numberedlist,1368,,maximize,1392,,newpage-rtl,1416,,newpage,1440,,pagebreak-rtl,1464,,pagebreak,1488,,pastetext-rtl,1512,,pastetext,1536,,pastefromword-rtl,1560,,pastefromword,1584,,preview-rtl,1608,,preview,1632,,print,1656,,removeformat,1680,,save,1704,,selectall,1728,,showblocks-rtl,1752,,showblocks,1776,,source-rtl,1800,,source,1824,,specialchar,1848,,scayt,1872,,table,1896,,redo-rtl,1920,,redo,1944,,undo-rtl,1968,,undo,1992,,spellchecker,2016,','icons_hidpi.png');else setIcons('about,0,auto,bold,24,auto,italic,48,auto,strike,72,auto,subscript,96,auto,superscript,120,auto,underline,144,auto,bidiltr,168,auto,bidirtl,192,auto,blockquote,216,auto,copy-rtl,240,auto,copy,264,auto,cut-rtl,288,auto,cut,312,auto,paste-rtl,336,auto,paste,360,auto,bgcolor,384,auto,textcolor,408,auto,templates-rtl,432,auto,templates,456,auto,creatediv,480,auto,find-rtl,504,auto,find,528,auto,replace,552,auto,flash,576,auto,button,600,auto,checkbox,624,auto,form,648,auto,hiddenfield,672,auto,imagebutton,696,auto,radio,720,auto,select-rtl,744,auto,select,768,auto,textarea-rtl,792,auto,textarea,816,auto,textfield-rtl,840,auto,textfield,864,auto,horizontalrule,888,auto,iframe,912,auto,image,936,auto,indent-rtl,960,auto,indent,984,auto,outdent-rtl,1008,auto,outdent,1032,auto,smiley,1056,auto,justifyblock,1080,auto,justifycenter,1104,auto,justifyleft,1128,auto,justifyright,1152,auto,language,1176,auto,anchor-rtl,1200,auto,anchor,1224,auto,link,1248,auto,unlink,1272,auto,bulletedlist-rtl,1296,auto,bulletedlist,1320,auto,numberedlist-rtl,1344,auto,numberedlist,1368,auto,maximize,1392,auto,newpage-rtl,1416,auto,newpage,1440,auto,pagebreak-rtl,1464,auto,pagebreak,1488,auto,pastetext-rtl,1512,auto,pastetext,1536,auto,pastefromword-rtl,1560,auto,pastefromword,1584,auto,preview-rtl,1608,auto,preview,1632,auto,print,1656,auto,removeformat,1680,auto,save,1704,auto,selectall,1728,auto,showblocks-rtl,1752,auto,showblocks,1776,auto,source-rtl,1800,auto,source,1824,auto,specialchar,1848,auto,scayt,1872,auto,table,1896,auto,redo-rtl,1920,auto,redo,1944,auto,undo-rtl,1968,auto,undo,1992,auto,spellchecker,2016,auto','icons.png');})();CKEDITOR.lang.languages={"af":1,"sq":1,"ar":1,"eu":1,"bn":1,"bs":1,"bg":1,"ca":1,"zh-cn":1,"zh":1,"hr":1,"cs":1,"da":1,"nl":1,"en":1,"en-au":1,"en-ca":1,"en-gb":1,"eo":1,"et":1,"fo":1,"fi":1,"fr":1,"fr-ca":1,"gl":1,"ka":1,"de":1,"el":1,"gu":1,"he":1,"hi":1,"hu":1,"is":1,"id":1,"it":1,"ja":1,"km":1,"ko":1,"ku":1,"lv":1,"lt":1,"mk":1,"ms":1,"mn":1,"no":1,"nb":1,"fa":1,"pl":1,"pt-br":1,"pt":1,"ro":1,"ru":1,"sr":1,"sr-latn":1,"si":1,"sk":1,"sl":1,"es":1,"sv":1,"th":1,"tr":1,"ug":1,"uk":1,"vi":1,"cy":1};}());
$(function() {

//    Full configuation can be found under  http://docs.cksource.com/CKEditor_3.x/Developers_Guide/Toolbar
    CKEDITOR.config.toolbar = 'Basic';
    CKEDITOR.config.toolbar_Basic =
    [
    	{ name: 'document', items : [ 'Source','-','Save','NewPage','DocProps','Preview','Print','-','Templates' ] },
    	{ name: 'clipboard', items : [ 'Cut','Copy','Paste','PasteText','PasteFromWord','-','Undo','Redo' ] },
    	{ name: 'editing', items : [ 'Find','Replace','-','SelectAll','-','SpellChecker', 'Scayt' ] },
    	{ name: 'basicstyles', items : [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ] },
        '/',
    	{ name: 'paragraph', items : [ 'NumberedList','BulletedList','-','Outdent','Indent','-','Blockquote','CreateDiv',
    	'-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ] },
    	{ name: 'links', items : [ 'Link','Unlink','Anchor' ] },
    	{ name: 'insert', items : [ 'Image','Table','HorizontalRule','Smiley','SpecialChar','PageBreak','Iframe' ] },
    	'/',
    	{ name: 'styles', items : [ 'Styles','Format','Font','FontSize' ] },
    	{ name: 'colors', items : [ 'TextColor','BGColor' ] },
    	{ name: 'tools', items : [ 'Maximize', 'ShowBlocks' ] }
    ];
});
$(document).ready (function(){
   
   var preview = {
      el: null,
      
      // initialize - bind events, etc.
      init: function(selector) {
         this.el = $(selector);
         if (this.el.length == 0) { return;}
         $(this.el.attr("data-trigger")).click(this, this.open);
         this.el.find("[data-dismiss='post-preview']").click(this, this.close);
      },
      
      // open preview
      open: function(e) {
         var el = e.data.el;
         var iframe = el.find("iframe")[0];
         if(iframe.contentDocument){
            var doc = iframe.contentDocument;
         }
         else if(iframe.contentWindow){
            var doc = iframe.contentWindow.document;
         } else {
            var doc = iframe.document;
         }

         $("#post_content").val(CKEDITOR.instances["post_content"].getData()); // update textarea with CKEDITOR content.
         $.post(el.attr("data-url"), $("form").serialize(), function(data) {
            doc.open();
            doc.writeln(data);
            doc.close();
            $(doc).keydown(e.data, e.data.keydown);   
         });

         // show preview & hide scrollbars
         el.show();
         $("body").attr("style", "overflow:hidden;");

         // look for esc
         $(document).on("keydown.post-preview", e.data, e.data.keydown);
      },
      
      // close preview on esc key.
      keydown: function(e) {
         if (e.keyCode==27) {
            e.data.close();
         }
      },
      
      // close preview
      close: function(e) {
         var el = (e==undefined)? this.el: e.data.el;
         el.hide();
         $("body").attr("style", "overflow:auto;");
         $(document).off("keydown.post-preview");
      }
   }
   
   
   // initialize preview.
   preview.init("[data-toggle='post-preview']");
})
;
/*
Copyright 2012 Igor Vaynberg

Version: 3.5.2 Timestamp: Sat Nov  1 14:43:36 EDT 2014

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/

(function ($) {
    if(typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            /*
            * 4-10 times faster .each replacement
            * use it carefully, as it overrides jQuery context of element on each iteration
            */
            each2 : function (c) {
                var j = $([0]), i = -1, l = this.length;
                while (
                    ++i < l
                    && (j.context = j[0] = this[i])
                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                );
                return this;
            }
        });
    }
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

    KEY = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (k) {
            k = k.which ? k.which : k;
            switch (k) {
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.UP:
            case KEY.DOWN:
                return true;
            }
            return false;
        },
        isControl: function (e) {
            var k = e.which;
            switch (k) {
            case KEY.SHIFT:
            case KEY.CTRL:
            case KEY.ALT:
                return true;
            }

            if (e.metaKey) return true;

            return false;
        },
        isFunctionKey: function (k) {
            k = k.which ? k.which : k;
            return k >= 112 && k <= 123;
        }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z","\u0386":"\u0391","\u0388":"\u0395","\u0389":"\u0397","\u038A":"\u0399","\u03AA":"\u0399","\u038C":"\u039F","\u038E":"\u03A5","\u03AB":"\u03A5","\u038F":"\u03A9","\u03AC":"\u03B1","\u03AD":"\u03B5","\u03AE":"\u03B7","\u03AF":"\u03B9","\u03CA":"\u03B9","\u0390":"\u03B9","\u03CC":"\u03BF","\u03CD":"\u03C5","\u03CB":"\u03C5","\u03B0":"\u03C5","\u03C9":"\u03C9","\u03C2":"\u03C3"};

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


    function reinsertElement(element) {
        var placeholder = $(document.createTextNode(''));

        element.before(placeholder);
        placeholder.before(element);
        placeholder.remove();
    }

    function stripDiacritics(str) {
        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
        function match(a) {
            return DIACRITICS[a] || a;
        }

        return str.replace(/[^\u0000-\u007E]/g, match);
    }

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo(document.body);

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        // Check whether 'a' or 'b' is a string (primitive or object).
        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
        return false;
    }

    /**
     * Splits the string into an array of values, transforming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator, transform) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = transform(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }


    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
        element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
            of the current event has finished - which seems like the only reliable way
            to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
                sometimes modals or others listeners may steal it after its set */
            var isVisible = (el.offsetWidth > 0 || el.offsetHeight > 0);
            if (isVisible && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                    just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class","select2-sizer");
            $(document.body).append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = $.trim(dest.attr("class"));

        if (classes) {
            classes = '' + classes; // for IE which returns object

            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }

        classes = $.trim(src.attr("class"));

        if (classes) {
            classes = '' + classes; // for IE which returns object

            $(classes.split(/\s+/)).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);

                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }

        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
            return replace_map[match];
        });
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration parameters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber, query) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                var data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if (handler && typeof handler.abort === "function") { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        // added query as third paramter to keep backwards compatibility
                        var results = options.results(data, query.page, query);
                        query.callback(results);
                    },
                    error: function(jqXHR, textStatus, errorThrown){
                        var results = {
                            hasError: true,
                            jqXHR: jqXHR,
                            textStatus: textStatus,
                            errorThrown: errorThrown
                        };

                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used it is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

         if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

         if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            var result = isFunc ? data(query) : data;
            if ($.isArray(result)) {
                $(result).each(function () {
                    var isObject = this.text !== undefined,
                        text = isObject ? this.text : this;
                    if (t === "" || query.matcher(t, text)) {
                        filtered.results.push(isObject ? this : {id: this, text: this});
                    }
                });
                query.callback(filtered);
            }
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        if (typeof(formatter) === 'string') return true;
        throw new Error(formatterName +" must be a string, function, or falsy value");
    }

  /**
   * Returns a given value
   * If given a function, returns its output
   *
   * @param val string|function
   * @param context value of "this" to be passed to function
   * @returns {*}
   */
    function evaluate(val, context) {
        if ($.isFunction(val)) {
            var args = Array.prototype.slice.call(arguments, 2);
            return val.apply(context, args);
        }
        return val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    function cleanupJQueryElements() {
        var self = this;

        $.each(arguments, function (i, element) {
            self[element].remove();
            self[element] = null;
        });
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results";

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }

            this.container = this.createContainer();

            this.liveRegion = $('.select2-hidden-accessible');
            if (this.liveRegion.length == 0) {
                this.liveRegion = $("<span>", {
                        role: "status",
                        "aria-live": "polite"
                    })
                    .addClass("select2-hidden-accessible")
                    .appendTo(document.body);
            }

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerEventName= this.containerId
                .replace(/([.])/g, '_')
                .replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            this.container.attr("title", opts.element.attr("title"));

            this.body = $(document.body);

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss, this.opts.element));
            this.container.addClass(evaluate(opts.containerCssClass, this.opts.element));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent); // do not leak click events

            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");

            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

            this.dropdown.addClass(evaluate(opts.dropdownCssClass, this.opts.element));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            this.container.on("click", killEvent);

            installFilteredMouseMove(this.results);

            this.dropdown.on("mousemove-filtered", resultsSelector, this.bind(this.highlightUnderEvent));
            this.dropdown.on("touchstart touchmove touchend", resultsSelector, this.bind(function (event) {
                this._touchEvent = true;
                this.highlightUnderEvent(event);
            }));
            this.dropdown.on("touchmove", resultsSelector, this.bind(this.touchMoved));
            this.dropdown.on("touchstart touchend", resultsSelector, this.bind(this.clearTouchMoved));

            // Waiting for a click event on touch devices to select option and hide dropdown
            // otherwise click will be triggered on an underlying element
            this.dropdown.on('click', this.bind(function (event) {
                if (this._touchEvent) {
                    this._touchEvent = false;
                    this.selectHighlighted();
                }
            }));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            // focusin can cause focus wars between modals and select2 since the dropdown is outside the modal.
            this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function (e) { e.stopPropagation(); });

            this.nextSearchTerm = undefined;

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();

            this.search.attr("placeholder", opts.searchInputPlaceholder);
        },

        // abstract
        destroy: function () {
            var element=this.opts.element, select2 = element.data("select2"), self = this;

            this.close();

            if (element.length && element[0].detachEvent && self._sync) {
                element.each(function () {
                    if (self._sync) {
                        this.detachEvent("onpropertychange", self._sync);
                    }
                });
            }
            if (this.propertyObserver) {
                this.propertyObserver.disconnect();
                this.propertyObserver = null;
            }
            this._sync = null;

            if (select2 !== undefined) {
                select2.container.remove();
                select2.liveRegion.remove();
                select2.dropdown.remove();
                element
                    .show()
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({tabindex: this.elementTabIndex});
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }

            cleanupJQueryElements.call(this,
                "container",
                "liveRegion",
                "dropdown",
                "results",
                "search"
            );
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id=this.opts.id, liveRegion=this.liveRegion;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        // collect the created nodes for bulk append
                        var nodes = [];
                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));
                            node.attr("role", "presentation");

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");
                            label.attr("id", "select2-result-label-" + nextUid());
                            label.attr("role", "option");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                                node.append(label);
                            }


                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            nodes.push(node[0]);
                        }

                        // bulk append the created nodes
                        container.append(nodes);
                        liveRegion.text(opts.formatMatches(results.length));
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, placeholderOption, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children=children.not(placeholderOption);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and their id is hardcoded
                opts.id=function(e) { return e.id; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator, opts.transformVal)).each(function () {
                                    var obj = { id: this, text: this },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
                                    data.push(obj);
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            if (opts.createSearchChoicePosition === 'top') {
                opts.createSearchChoicePosition = function(list, item) { list.unshift(item); };
            }
            else if (opts.createSearchChoicePosition === 'bottom') {
                opts.createSearchChoicePosition = function(list, item) { list.push(item); };
            }
            else if (typeof(opts.createSearchChoicePosition) !== "function")  {
                throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, observer, self = this;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            this._sync = this.bind(function () {

                // sync enabled state
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                if (this.container) {
                    syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                    this.container.addClass(evaluate(this.opts.containerCssClass, this.opts.element));
                }

                if (this.dropdown) {
                    syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                    this.dropdown.addClass(evaluate(this.opts.dropdownCssClass, this.opts.element));
                }

            });

            // IE8-10 (IE9/10 won't fire propertyChange via attachEventListener)
            if (el.length && el[0].attachEvent) {
                el.each(function() {
                    this.attachEvent("onpropertychange", self._sync);
                });
            }

            // safari, chrome, firefox, IE11
            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new observer(function (mutations) {
                    $.each(mutations, self._sync);
                });
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data, choice: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignores the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },

        // abstract
        disable: function() {
            this.enable(false);
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
        },

        // abstract
        opened: function () {
            return (this.container) ? this.container.hasClass("select2-dropdown-open") : false;
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                container = this.container,
                offset = container.offset(),
                height = container.outerHeight(false),
                width = container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= $window.scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = function() {
                    return dropLeft + dropWidth <= viewPortRight;
                },
                enoughRoomOnLeft = function() {
                    return offset.left + viewPortRight + container.outerWidth(false)  > dropWidth;
                },
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;

            // always prefer the current above/below alignment, unless there is not enough room
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }

            //if we are changing direction we need to get positions when dropdown is hidden;
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                $dropdown.show();

                // fix so the cursor does not move to the left within the search-textbox in IE
                this.focusSearch();
            }

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                dropHeight = $dropdown.outerHeight(false);
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body.scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static
            if (this.body.css('position') !== 'static') {
                bodyOffset = this.body.offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            if (!enoughRoomOnRight() && enoughRoomOnLeft()) {
                dropLeft = offset.left + this.container.outerWidth(false) - dropWidth;
            }

            css =  {
                left: dropLeft,
                width: width
            };

            if (above) {
                css.top = offset.top - dropHeight;
                css.bottom = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss, this.opts.element));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            // Only bind the document mousemove when the dropdown is visible
            $document.on("mousemove.select2Event", function (e) {
                lastMousePosition.x = e.pageX;
                lastMousePosition.y = e.pageY;
            });

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body.children().last()[0]) {
                this.dropdown.detach().appendTo(this.body);
            }

            // create the dropdown mask if doesn't already exist
            mask = $("#select2-drop-mask");
            if (mask.length === 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body);
                mask.on("mousedown touchstart click", function (e) {
                    // Prevent IE from generating a click event on the body
                    reinsertElement(mask);

                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close();
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.show();

            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    if (that.opened()) that.positionDropdown();
                });
            });


        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerEventName,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();

            // Now that the dropdown is closed, unbind the global document mousemove event
            $document.off("mousemove.select2Event");

            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        /**
         * Opens control, sets input value, and updates results.
         */
        // abstract
        externalSearch: function (term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize, this.opts.element);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more, topOffset;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            topOffset = (child.offset() || {}).top || 0;

            hb = topOffset + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(false);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = topOffset - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.removeHighlight();

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            // ensure assistive technology can determine the active choice
            this.search.attr("aria-activedescendant", choice.find(".select2-result-label").attr("id"));

            this.ensureHighlightVisible();

            this.liveRegion.text(choice.text());

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },

        touchMoved: function() {
            this._touchMoved = true;
        },

        clearTouchMoved: function() {
          this._touchMoved = false;
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove all highlights
                this.removeHighlight();
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                        element: this.opts.element,
                        term: term,
                        page: page,
                        context: context,
                        matcher: this.opts.matcher,
                        callback: this.bind(function (data) {

                    // ignore a response if the select2 has been closed before it was received
                    if (!self.opened()) return;


                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                    self.postprocessResults(data, false, false);

                    if (data.more===true) {
                        more.detach().appendTo(results).html(self.opts.escapeMarkup(evaluate(self.opts.formatLoadMore, self.opts.element, page+1)));
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    } else {
                        more.remove();
                    }
                    self.positionDropdown();
                    self.resultsPage = page;
                    self.context = data.context;
                    this.opts.element.trigger({ type: "select2-loaded", items: data });
                })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                // sequence number used to drop out-of-order responses
                queryNumber;

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
                if (results.find('.select2-no-results,.select2-selection-limit,.select2-searching').length) {
                    self.liveRegion.text(results.text());
                }
                else {
                    self.liveRegion.text(self.opts.formatMatches(results.find('.select2-result-selectable:not(".select2-selected")').length));
                }
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            queryNumber = ++this.queryCount;

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + evaluate(opts.formatSelectionTooBig, opts.element, maxSelSize) + "</li>");
                    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooShort, opts.element, search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatInputTooLong, opts.element, search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + evaluate(opts.formatSearching, opts.element) + "</li>");
            }

            search.addClass("select2-active");

            this.removeHighlight();

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                    term: search.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: opts.matcher,
                    callback: this.bind(function (data) {
                var def; // default choice

                // ignore old responses
                if (queryNumber != this.queryCount) {
                  return;
                }

                // ignore a response if the select2 has been closed before it was received
                if (!this.opened()) {
                    this.search.removeClass("select2-active");
                    return;
                }

                // handle ajax error
                if(data.hasError !== undefined && checkFormatter(opts.formatAjaxError, "formatAjaxError")) {
                    render("<li class='select2-ajax-error'>" + evaluate(opts.formatAjaxError, opts.element, data.jqXHR, data.textStatus, data.errorThrown) + "</li>");
                    return;
                }

                // save context, if any
                this.context = (data.context===undefined) ? null : data.context;
                // create a default choice and prepend it to the list
                if (this.opts.createSearchChoice && search.val() !== "") {
                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                        if ($(data.results).filter(
                            function () {
                                return equal(self.id(this), self.id(def));
                            }).length === 0) {
                            this.opts.createSearchChoicePosition(data.results, def);
                        }
                    }
                }

                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                    render("<li class='select2-no-results'>" + evaluate(opts.formatNoMatches, opts.element, search.val()) + "</li>");
                    return;
                }

                results.empty();
                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                    results.append("<li class='select2-more-results'>" + opts.escapeMarkup(evaluate(opts.formatLoadMore, opts.element, this.resultsPage)) + "</li>");
                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                }

                this.postprocessResults(data, initial);

                postRender();

                this.opts.element.trigger({ type: "select2-loaded", items: data });
            })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            if (this._touchMoved) {
              this.clearTouchMoved();
              return;
            }
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },

        // abstract
        getPlaceholder: function () {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },

        // abstract
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined ) {
                    //Determine the placeholder option based on the specified placeholderOption setting
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if ($.trim(firstOption.text()) === "" && firstOption.val() === "") {
                    //No explicit placeholder option specified, use the first if it's blank
                    return firstOption;
                }
            }
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    if (this.opts.width === "resolve") {
                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                        // when attached to input type=hidden or elements hidden via css
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;

                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
               }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>",
                "   <span class='select2-chosen'>&#160;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <span class='select2-arrow' role='presentation'><b role='presentation'></b></span>",
                "</a>",
                "<label for='' class='select2-offscreen'></label>",
                "<input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' />",
                "<div class='select2-drop select2-display-none'>",
                "   <div class='select2-search'>",
                "       <label for='' class='select2-offscreen'></label>",
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'",
                "       aria-autocomplete='list' />",
                "   </div>",
                "   <ul class='select2-results' role='listbox'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range, len;

            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }

            this.parent.opening.apply(this, arguments);

            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
                // move the cursor to the end after focussing, otherwise it will be at the beginning and
                // new text will appear *before* focusser.val()
                el = this.search.get(0);
                if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                } else if (el.setSelectionRange) {
                    len = this.search.val().length;
                    el.setSelectionRange(len, len);
                }
            }

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);

            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.prop("disabled", false);
                if (this.opts.shouldFocusInput(this)) {
                    this.focusser.focus();
                }
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.prop("disabled", false);

            if (this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }
        },

        // single
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "selection",
                "focusser"
            );
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown,
                idSuffix = nextUid(),
                elementLabel;

            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // add aria associations
            selection.find(".select2-chosen").attr("id", "select2-chosen-"+idSuffix);
            this.focusser.attr("aria-labelledby", "select2-chosen-"+idSuffix);
            this.results.attr("id", "select2-results-"+idSuffix);
            this.search.attr("aria-owns", "select2-results-"+idSuffix);

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+idSuffix);

            elementLabel = $("label[for='" + this.opts.element.attr("id") + "']");
            this.opts.element.focus(this.bind(function () { this.focus(); }));

            this.focusser.prev()
                .text(elementLabel.text())
                .attr('for', this.focusser.attr('id'));

            // Ensure the original element retains an accessible name
            var originalTitle = this.opts.element.attr("title");
            this.opts.element.attr("title", (originalTitle || elementLabel.text()));

            this.focusser.attr("tabindex", this.elementTabIndex);

            // write label for search field using the label from the focusser element
            this.search.attr("id", this.focusser.attr('id') + '_search');

            this.search.prev()
                .text($("label[for='" + this.focusser.attr('id') + "']").text())
                .attr('for', this.search.attr('id'));

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                // filter 229 keyCodes (input method editor is processing key input)
                if (229 == e.keyCode) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body.get(0)) {
                    window.setTimeout(this.bind(function() {
                        if (this.opened()) {
                            this.search.focus();
                        }
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));

            selection.on("mousedown touchstart", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) {
                    return;
                }

                this.clear();
                killEventImmediately(e);
                this.close();

                if (this.selection) {
                    this.selection.focus();
                }
            }));

            selection.on("mousedown touchstart", this.bind(function (e) {
                // Prevent IE from generating a click event on the body
                reinsertElement(selection);

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown touchstart", this.bind(function() {
                if (this.opts.shouldFocusInput(this)) {
                    this.search.focus();
                }
            }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.hide();
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                        self.nextSearchTerm = self.opts.nextSearchTerm(selected, self.search.val());
                    }
                });
            }
        },

        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (this.getPlaceholder() === undefined) return false; // no placeholder specified so no option should be considered
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
                || (this.opts.element.val() === "")
                || (this.opts.element.val() === undefined)
                || (this.opts.element.val() === null);
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find("option").filter(function() { return this.selected && !this.disabled });
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without a valid placeholder option ignore it
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

                // check for a placeholder option if attached to a select
                if (this.select && this.getPlaceholderOption() === undefined) return;

                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }

            // hide the search box if this is the first we got the results and there are enough of them for search

            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },

        // single
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;

            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();

            if ((!options || !options.noFocus) && this.opts.shouldFocusInput(this)) {
                this.focusser.focus();
            }

            if (!equal(old, this.id(data))) {
                this.triggerChange({ added: data, removed: oldData });
            }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

            this.selection.data("select2-data", data);

            container.empty();
            if (data !== null) {
                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass=this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value) {
            var data,
                triggerChange = false;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "<ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <label for='' class='select2-offscreen'></label>",
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi select2-display-none'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified
            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find("option").filter(function() { return this.selected && !this.disabled }).each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator, opts.transformVal);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        // multi
        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);

            cleanupJQueryElements.call(this,
                "searchContainer",
                "selection"
            );
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function (e) {
                _this.search[0].focus();
                _this.selectChoice($(this));
            });

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());

            this.search.prev()
                .text($("label[for='" + this.opts.element.attr("id") + "']").text())
                .attr('for', this.search.attr('id'));
            this.opts.element.focus(this.bind(function () { this.focus(); }));

            this.search.on("input paste", this.bind(function() {
                if (this.search.attr('placeholder') && this.search.val().length == 0) return;
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = prev.length ? prev : next;
                        }
                    } else if (e.which == KEY.DELETE) {
                        if (this.unselect(selected.first())) {
                            this.search.width(10);
                            selectedChoice = next.length ? next : null;
                        }
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus:true});
                        this.close();
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("click", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.hide();

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.updateResults(true);
            if (this.opts.shouldFocusInput(this)) {
                this.search.focus();
            }
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data) || data.text === "") { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            // keep track of the search's value before it gets cleared
            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());

            this.clearSearch();
            this.updateResults();

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    } else {
                        // initializes search's value with nextSearchTerm and update search result
                        if(this.nextSearchTerm != undefined){
                            this.search.val(this.nextSearchTerm);
                            this.updateResults();
                            this.search.select();
                        }
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;

            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith($("<div></div>").html(formatted));
            }
            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }

            if(enableChoice){
              choice.find(".select2-search-choice-close")
                  .on("mousedown", killEvent)
                  .on("click dblclick", this.bind(function (e) {
                  if (!this.isInterfaceEnabled()) return;

                  this.unselect($(e.target));
                  this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                  killEvent(e);
                  this.close();
                  this.focusSearch();
              })).on("focus", this.bind(function () {
                  if (!this.isInterfaceEnabled()) return;
                  this.container.addClass("select2-container-active");
                  this.dropdown.addClass("select2-drop-active");
              }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);

            if (evt.isDefaultPrevented()) {
                return false;
            }

            while((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }

            selected.remove();

            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });

            return true;
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesn't have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false && this.opts.closeOnSelect === true){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMatches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + evaluate(self.opts.formatNoMatches, self.opts.element, self.search.val()) + "</li>");
                    }
                }
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
              searchWidth = minimumWidth;
            }

            this.search.width(Math.floor(searchWidth));
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator, this.opts.transformVal);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if(i>0){
                            i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                 return this.selection
                     .children(".select2-search-choice")
                     .map(function() { return $(this).data("select2-data"); })
                     .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = { search: "externalSearch" };

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new window.Select2["class"].multi() : new window.Select2["class"].single();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;

                method=args[0];

                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];

                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0
                    || (indexOf(args[0], propertyMethods) >= 0 && args.length == 1)) {
                    return false; // abort the iteration, ready to return first matched value
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(this.text(result), query.term, markup, escapeMarkup);
            return markup.join("");
        },
        transformVal: function(val) {
            return $.trim(val);
        },
        formatSelection: function (data, container, escapeMarkup) {
            return data ? escapeMarkup(this.text(data)) : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return data.css;},
        formatSelectionCssClass: function(data, container) {return undefined;},
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e == undefined ? null : e.id; },
        text: function (e) {
          if (e && this.data && this.data.text) {
            if ($.isFunction(this.data.text)) {
              return this.data.text(e);
            } else {
              return e[this.data.text];
            }
          } else {
            return e.text;
          }
        },
        matcher: function(term, text) {
            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; },
        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; },
        searchInputPlaceholder: '',
        createSearchChoicePosition: 'top',
        shouldFocusInput: function (instance) {
            // Attempt to detect touch devices
            var supportsTouchEvents = (('ontouchstart' in window) ||
                                       (navigator.msMaxTouchPoints > 0));

            // Only devices which support touch events should be special cased
            if (!supportsTouchEvents) {
                return true;
            }

            // Never focus the input if search is disabled
            if (instance.opts.minimumResultsForSearch < 0) {
                return false;
            }

            return true;
        }
    };

    $.fn.select2.locales = [];

    $.fn.select2.locales['en'] = {
         formatMatches: function (matches) { if (matches === 1) { return "One result is available, press enter to select it."; } return matches + " results are available, use up and down arrow keys to navigate."; },
         formatNoMatches: function () { return "No matches found"; },
         formatAjaxError: function (jqXHR, textStatus, errorThrown) { return "Loading failed"; },
         formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " or more character" + (n == 1 ? "" : "s"); },
         formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1 ? "" : "s"); },
         formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
         formatLoadMore: function (pageNumber) { return "Loading more results…"; },
         formatSearching: function () { return "Searching…"; }
    };

    $.extend($.fn.select2.defaults, $.fn.select2.locales['en']);

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));
// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//












;
