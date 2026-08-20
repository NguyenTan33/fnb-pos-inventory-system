function Sy(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function ux(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var wd={exports:{}},ho={},bd={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function My(){if(_0)return bt;_0=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(D){return D===null||typeof D!="object"?null:(D=_&&D[_]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function S(D,G,be){this.props=D,this.context=G,this.refs=C,this.updater=be||M}S.prototype.isReactComponent={},S.prototype.setState=function(D,G){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,G,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function y(){}y.prototype=S.prototype;function N(D,G,be){this.props=D,this.context=G,this.refs=C,this.updater=be||M}var L=N.prototype=new y;L.constructor=N,w(L,S.prototype),L.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function b(D,G,be){var Re,Ne={},Z=null,ve=null;if(G!=null)for(Re in G.ref!==void 0&&(ve=G.ref),G.key!==void 0&&(Z=""+G.key),G)I.call(G,Re)&&!F.hasOwnProperty(Re)&&(Ne[Re]=G[Re]);var xe=arguments.length-2;if(xe===1)Ne.children=be;else if(1<xe){for(var Be=Array(xe),Ke=0;Ke<xe;Ke++)Be[Ke]=arguments[Ke+2];Ne.children=Be}if(D&&D.defaultProps)for(Re in xe=D.defaultProps,xe)Ne[Re]===void 0&&(Ne[Re]=xe[Re]);return{$$typeof:i,type:D,key:Z,ref:ve,props:Ne,_owner:P.current}}function O(D,G){return{$$typeof:i,type:D.type,key:G,ref:D.ref,props:D.props,_owner:D._owner}}function V(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function B(D){var G={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(be){return G[be]})}var J=/\/+/g;function ue(D,G){return typeof D=="object"&&D!==null&&D.key!=null?B(""+D.key):G.toString(36)}function me(D,G,be,Re,Ne){var Z=typeof D;(Z==="undefined"||Z==="boolean")&&(D=null);var ve=!1;if(D===null)ve=!0;else switch(Z){case"string":case"number":ve=!0;break;case"object":switch(D.$$typeof){case i:case e:ve=!0}}if(ve)return ve=D,Ne=Ne(ve),D=Re===""?"."+ue(ve,0):Re,T(Ne)?(be="",D!=null&&(be=D.replace(J,"$&/")+"/"),me(Ne,G,be,"",function(Ke){return Ke})):Ne!=null&&(V(Ne)&&(Ne=O(Ne,be+(!Ne.key||ve&&ve.key===Ne.key?"":(""+Ne.key).replace(J,"$&/")+"/")+D)),G.push(Ne)),1;if(ve=0,Re=Re===""?".":Re+":",T(D))for(var xe=0;xe<D.length;xe++){Z=D[xe];var Be=Re+ue(Z,xe);ve+=me(Z,G,be,Be,Ne)}else if(Be=x(D),typeof Be=="function")for(D=Be.call(D),xe=0;!(Z=D.next()).done;)Z=Z.value,Be=Re+ue(Z,xe++),ve+=me(Z,G,be,Be,Ne);else if(Z==="object")throw G=String(D),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ve}function K(D,G,be){if(D==null)return D;var Re=[],Ne=0;return me(D,Re,"","",function(Z){return G.call(be,Z,Ne++)}),Re}function pe(D){if(D._status===-1){var G=D._result;G=G(),G.then(function(be){(D._status===0||D._status===-1)&&(D._status=1,D._result=be)},function(be){(D._status===0||D._status===-1)&&(D._status=2,D._result=be)}),D._status===-1&&(D._status=0,D._result=G)}if(D._status===1)return D._result.default;throw D._result}var ee={current:null},$={transition:null},le={ReactCurrentDispatcher:ee,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function H(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:K,forEach:function(D,G,be){K(D,function(){G.apply(this,arguments)},be)},count:function(D){var G=0;return K(D,function(){G++}),G},toArray:function(D){return K(D,function(G){return G})||[]},only:function(D){if(!V(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=S,bt.Fragment=t,bt.Profiler=a,bt.PureComponent=N,bt.StrictMode=r,bt.Suspense=f,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,bt.act=H,bt.cloneElement=function(D,G,be){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Re=w({},D.props),Ne=D.key,Z=D.ref,ve=D._owner;if(G!=null){if(G.ref!==void 0&&(Z=G.ref,ve=P.current),G.key!==void 0&&(Ne=""+G.key),D.type&&D.type.defaultProps)var xe=D.type.defaultProps;for(Be in G)I.call(G,Be)&&!F.hasOwnProperty(Be)&&(Re[Be]=G[Be]===void 0&&xe!==void 0?xe[Be]:G[Be])}var Be=arguments.length-2;if(Be===1)Re.children=be;else if(1<Be){xe=Array(Be);for(var Ke=0;Ke<Be;Ke++)xe[Ke]=arguments[Ke+2];Re.children=xe}return{$$typeof:i,type:D.type,key:Ne,ref:Z,props:Re,_owner:ve}},bt.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},bt.createElement=b,bt.createFactory=function(D){var G=b.bind(null,D);return G.type=D,G},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:d,render:D}},bt.isValidElement=V,bt.lazy=function(D){return{$$typeof:g,_payload:{_status:-1,_result:D},_init:pe}},bt.memo=function(D,G){return{$$typeof:p,type:D,compare:G===void 0?null:G}},bt.startTransition=function(D){var G=$.transition;$.transition={};try{D()}finally{$.transition=G}},bt.unstable_act=H,bt.useCallback=function(D,G){return ee.current.useCallback(D,G)},bt.useContext=function(D){return ee.current.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D){return ee.current.useDeferredValue(D)},bt.useEffect=function(D,G){return ee.current.useEffect(D,G)},bt.useId=function(){return ee.current.useId()},bt.useImperativeHandle=function(D,G,be){return ee.current.useImperativeHandle(D,G,be)},bt.useInsertionEffect=function(D,G){return ee.current.useInsertionEffect(D,G)},bt.useLayoutEffect=function(D,G){return ee.current.useLayoutEffect(D,G)},bt.useMemo=function(D,G){return ee.current.useMemo(D,G)},bt.useReducer=function(D,G,be){return ee.current.useReducer(D,G,be)},bt.useRef=function(D){return ee.current.useRef(D)},bt.useState=function(D){return ee.current.useState(D)},bt.useSyncExternalStore=function(D,G,be){return ee.current.useSyncExternalStore(D,G,be)},bt.useTransition=function(){return ee.current.useTransition()},bt.version="18.3.1",bt}var y0;function _h(){return y0||(y0=1,bd.exports=My()),bd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function Ey(){if(S0)return ho;S0=1;var i=_h(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var g,_={},x=null,M=null;p!==void 0&&(x=""+p),f.key!==void 0&&(x=""+f.key),f.ref!==void 0&&(M=f.ref);for(g in f)r.call(f,g)&&!l.hasOwnProperty(g)&&(_[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)_[g]===void 0&&(_[g]=f[g]);return{$$typeof:e,type:d,key:x,ref:M,props:_,_owner:a.current}}return ho.Fragment=t,ho.jsx=c,ho.jsxs=c,ho}var M0;function wy(){return M0||(M0=1,wd.exports=Ey()),wd.exports}var m=wy(),he=_h();const dx=ux(he),by=Sy({__proto__:null,default:dx},[he]);var jl={},Td={exports:{}},qn={},Ad={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Ty(){return E0||(E0=1,(function(i){function e($,le){var H=$.length;$.push(le);e:for(;0<H;){var D=H-1>>>1,G=$[D];if(0<a(G,le))$[D]=le,$[H]=G,H=D;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var le=$[0],H=$.pop();if(H!==le){$[0]=H;e:for(var D=0,G=$.length,be=G>>>1;D<be;){var Re=2*(D+1)-1,Ne=$[Re],Z=Re+1,ve=$[Z];if(0>a(Ne,H))Z<G&&0>a(ve,Ne)?($[D]=ve,$[Z]=H,D=Z):($[D]=Ne,$[Re]=H,D=Re);else if(Z<G&&0>a(ve,H))$[D]=ve,$[Z]=H,D=Z;else break e}}return le}function a($,le){var H=$.sortIndex-le.sortIndex;return H!==0?H:$.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],p=[],g=1,_=null,x=3,M=!1,w=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=$)r(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function T($){if(C=!1,L($),!w)if(t(f)!==null)w=!0,pe(I);else{var le=t(p);le!==null&&ee(T,le.startTime-$)}}function I($,le){w=!1,C&&(C=!1,y(b),b=-1),M=!0;var H=x;try{for(L(le),_=t(f);_!==null&&(!(_.expirationTime>le)||$&&!B());){var D=_.callback;if(typeof D=="function"){_.callback=null,x=_.priorityLevel;var G=D(_.expirationTime<=le);le=i.unstable_now(),typeof G=="function"?_.callback=G:_===t(f)&&r(f),L(le)}else r(f);_=t(f)}if(_!==null)var be=!0;else{var Re=t(p);Re!==null&&ee(T,Re.startTime-le),be=!1}return be}finally{_=null,x=H,M=!1}}var P=!1,F=null,b=-1,O=5,V=-1;function B(){return!(i.unstable_now()-V<O)}function J(){if(F!==null){var $=i.unstable_now();V=$;var le=!0;try{le=F(!0,$)}finally{le?ue():(P=!1,F=null)}}else P=!1}var ue;if(typeof N=="function")ue=function(){N(J)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,K=me.port2;me.port1.onmessage=J,ue=function(){K.postMessage(null)}}else ue=function(){S(J,0)};function pe($){F=$,P||(P=!0,ue())}function ee($,le){b=S(function(){$(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){w||M||(w=!0,pe(I))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return x},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function($){switch(x){case 1:case 2:case 3:var le=3;break;default:le=x}var H=x;x=le;try{return $()}finally{x=H}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,le){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var H=x;x=$;try{return le()}finally{x=H}},i.unstable_scheduleCallback=function($,le,H){var D=i.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?D+H:D):H=D,$){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=H+G,$={id:g++,callback:le,priorityLevel:$,startTime:H,expirationTime:G,sortIndex:-1},H>D?($.sortIndex=H,e(p,$),t(f)===null&&$===t(p)&&(C?(y(b),b=-1):C=!0,ee(T,H-D))):($.sortIndex=G,e(f,$),w||M||(w=!0,pe(I))),$},i.unstable_shouldYield=B,i.unstable_wrapCallback=function($){var le=x;return function(){var H=x;x=le;try{return $.apply(this,arguments)}finally{x=H}}}})(Cd)),Cd}var w0;function Ay(){return w0||(w0=1,Ad.exports=Ty()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Cy(){if(b0)return qn;b0=1;var i=_h(),e=Ay();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return f.call(_,n)?!0:f.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function M(n,s,o,u){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,s,o,u){if(s===null||typeof s>"u"||M(n,s,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function C(n,s,o,u,h,v,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=s,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new C(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,N);S[s]=new C(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,N);S[s]=new C(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,N);S[s]=new C(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,s,o,u){var h=S.hasOwnProperty(s)?S[s]:null;(h!==null?h.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(w(s,o,h,u)&&(o=null),u||h===null?x(s)&&(o===null?n.removeAttribute(s):n.setAttribute(s,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(s=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(s):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,s,o):n.setAttribute(s,o))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),ee=Symbol.for("react.offscreen"),$=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var H=Object.assign,D;function G(n){if(D===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);D=s&&s[1]||""}return`
`+D+n}var be=!1;function Re(n,s){if(!n||be)return"";be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(fe){var u=fe}Reflect.construct(n,[],s)}else{try{s.call()}catch(fe){u=fe}n.call(s.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var h=fe.stack.split(`
`),v=u.stack.split(`
`),A=h.length-1,k=v.length-1;1<=A&&0<=k&&h[A]!==v[k];)k--;for(;1<=A&&0<=k;A--,k--)if(h[A]!==v[k]){if(A!==1||k!==1)do if(A--,k--,0>k||h[A]!==v[k]){var z=`
`+h[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=k);break}}}finally{be=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?G(n):""}function Ne(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Z(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case O:return"Profiler";case b:return"StrictMode";case ue:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case J:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case K:return s=n.displayName||null,s!==null?s:Z(n.type)||"Memo";case pe:s=n._payload,n=n._init;try{return Z(n(s))}catch{}}return null}function ve(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Z(s);case 8:return s===b?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function xe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ke(n){var s=Be(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,v=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return h.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Ze(n){n._valueTracker||(n._valueTracker=Ke(n))}function ht(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=Be(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Se(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rt(n,s){var o=s.checked;return H({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function st(n,s){var o=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;o=xe(s.value!=null?s.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ce(n,s){s=s.checked,s!=null&&L(n,"checked",s,!1)}function ut(n,s){Ce(n,s);var o=xe(s.value),u=s.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?gt(n,s.type,o):s.hasOwnProperty("defaultValue")&&gt(n,s.type,xe(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function yt(n,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,o||s===n.value||(n.value=s),n.defaultValue=s}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function gt(n,s,o){(s!=="number"||Se(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var kt=Array.isArray;function Nt(n,s,o,u){if(n=n.options,s){s={};for(var h=0;h<o.length;h++)s["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=s.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+xe(o),s=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}s!==null||n[h].disabled||(s=n[h])}s!==null&&(s.selected=!0)}}function Dt(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return H({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(t(92));if(kt(o)){if(1<o.length)throw Error(t(93));o=o[0]}s=o}s==null&&(s=""),o=s}n._wrapperState={initialValue:xe(o)}}function an(n,s){var o=xe(s.value),u=xe(s.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),s.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ct(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?U(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,te=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(s,o,u,h)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function ie(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var _e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Me=["Webkit","ms","Moz","O"];Object.keys(_e).forEach(function(n){Me.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),_e[s]=_e[n]})});function ce(n,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||_e.hasOwnProperty(n)&&_e[n]?(""+s).trim():s+"px"}function ge(n,s){n=n.style;for(var o in s)if(s.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=ce(o,s[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var De=H({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,s){if(s){if(De[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ie(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oe=null;function tt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,dt=null,j=null;function Fe(n){if(n=Za(n)){if(typeof ot!="function")throw Error(t(280));var s=n.stateNode;s&&(s=sl(s),ot(n.stateNode,n.type,s))}}function ye(n){dt?j?j.push(n):j=[n]:dt=n}function ke(){if(dt){var n=dt,s=j;if(j=dt=null,Fe(n),s)for(n=0;n<s.length;n++)Fe(s[n])}}function ze(n,s){return n(s)}function Ee(){}var Je=!1;function $e(n,s,o){if(Je)return n(s,o);Je=!0;try{return ze(n,s,o)}finally{Je=!1,(dt!==null||j!==null)&&(Ee(),ke())}}function Ht(n,s){var o=n.stateNode;if(o===null)return null;var u=sl(o);if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,s,typeof o));return o}var Ot=!1;if(d)try{var En={};Object.defineProperty(En,"passive",{get:function(){Ot=!0}}),window.addEventListener("test",En,En),window.removeEventListener("test",En,En)}catch{Ot=!1}function si(n,s,o,u,h,v,A,k,z){var fe=Array.prototype.slice.call(arguments,3);try{s.apply(o,fe)}catch(Te){this.onError(Te)}}var qr=!1,Rs=null,$r=!1,Yr=null,qc={onError:function(n){qr=!0,Rs=n}};function Vo(n,s,o,u,h,v,A,k,z){qr=!1,Rs=null,si.apply(qc,arguments)}function Ho(n,s,o,u,h,v,A,k,z){if(Vo.apply(this,arguments),qr){if(qr){var fe=Rs;qr=!1,Rs=null}else throw Error(t(198));$r||($r=!0,Yr=fe)}}function In(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function Ns(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Pa(n){if(In(n)!==n)throw Error(t(188))}function Go(n){var s=n.alternate;if(!s){if(s=In(n),s===null)throw Error(t(188));return s!==n?null:n}for(var o=n,u=s;;){var h=o.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===o)return Pa(h),n;if(v===u)return Pa(h),s;v=v.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=v;else{for(var A=!1,k=h.child;k;){if(k===o){A=!0,o=h,u=v;break}if(k===u){A=!0,u=h,o=v;break}k=k.sibling}if(!A){for(k=v.child;k;){if(k===o){A=!0,o=v,u=h;break}if(k===u){A=!0,u=v,o=h;break}k=k.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:s}function Kr(n){return n=Go(n),n!==null?La(n):null}function La(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=La(n);if(s!==null)return s;n=n.sibling}return null}var Zr=e.unstable_scheduleCallback,Da=e.unstable_cancelCallback,jo=e.unstable_shouldYield,$c=e.unstable_requestPaint,Kt=e.unstable_now,Yc=e.unstable_getCurrentPriorityLevel,Ia=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,de=e.unstable_LowPriority,ae=e.unstable_IdlePriority,se=null,Ue=null;function We(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var Le=Math.clz32?Math.clz32:xt,Qe=Math.log,at=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(Qe(n)/at|0)|0}var vt=64,nt=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Gt(n,s){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,A=o&268435455;if(A!==0){var k=A&~h;k!==0?u=Pt(k):(v&=A,v!==0&&(u=Pt(v)))}else A=o&~h,A!==0?u=Pt(A):v!==0&&(u=Pt(v));if(u===0)return 0;if(s!==0&&s!==u&&(s&h)===0&&(h=u&-u,v=s&-s,h>=v||h===16&&(v&4194240)!==0))return s;if((u&4)!==0&&(u|=o&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)o=31-Le(s),h=1<<o,u|=n[o],s&=~h;return u}function $t(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-Le(v),k=1<<A,z=h[A];z===-1?((k&o)===0||(k&u)!==0)&&(h[A]=$t(k,s)):z<=s&&(n.expiredLanes|=k),v&=~k}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ge(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function vn(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Mt(n,s,o){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Le(s),n[s]=o}function zn(n,s){var o=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-Le(o),v=1<<h;s[h]=0,u[h]=-1,n[h]=-1,o&=~v}}function Vn(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Le(o),h=1<<u;h&s|n[u]&s&&(n[u]|=s),o&=~h}}var wt=0;function qi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Wt,gi,zt,xi,Pi=!1,Jr=[],mr=null,gr=null,xr=null,Ua=new Map,Oa=new Map,vr=[],Gv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(n,s){switch(n){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ua.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(s.pointerId)}}function Fa(n,s,o,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},s!==null&&(s=Za(s),s!==null&&Wt(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),n)}function jv(n,s,o,u,h){switch(s){case"focusin":return mr=Fa(mr,n,s,o,u,h),!0;case"dragenter":return gr=Fa(gr,n,s,o,u,h),!0;case"mouseover":return xr=Fa(xr,n,s,o,u,h),!0;case"pointerover":var v=h.pointerId;return Ua.set(v,Fa(Ua.get(v)||null,n,s,o,u,h)),!0;case"gotpointercapture":return v=h.pointerId,Oa.set(v,Fa(Oa.get(v)||null,n,s,o,u,h)),!0}return!1}function ip(n){var s=Qr(n.target);if(s!==null){var o=In(s);if(o!==null){if(s=o.tag,s===13){if(s=Ns(o),s!==null){n.blockedOn=s,xi(n.priority,function(){gi(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wo(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Zc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Oe=u,o.target.dispatchEvent(u),Oe=null}else return s=Za(o),s!==null&&Wt(s),n.blockedOn=o,!1;s.shift()}return!0}function rp(n,s,o){Wo(n)&&o.delete(s)}function Wv(){Pi=!1,mr!==null&&Wo(mr)&&(mr=null),gr!==null&&Wo(gr)&&(gr=null),xr!==null&&Wo(xr)&&(xr=null),Ua.forEach(rp),Oa.forEach(rp)}function ka(n,s){n.blockedOn===s&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wv)))}function Ba(n){function s(h){return ka(h,n)}if(0<Jr.length){ka(Jr[0],n);for(var o=1;o<Jr.length;o++){var u=Jr[o];u.blockedOn===n&&(u.blockedOn=null)}}for(mr!==null&&ka(mr,n),gr!==null&&ka(gr,n),xr!==null&&ka(xr,n),Ua.forEach(s),Oa.forEach(s),o=0;o<vr.length;o++)u=vr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<vr.length&&(o=vr[0],o.blockedOn===null);)ip(o),o.blockedOn===null&&vr.shift()}var Ps=T.ReactCurrentBatchConfig,Xo=!0;function Xv(n,s,o,u){var h=wt,v=Ps.transition;Ps.transition=null;try{wt=1,Kc(n,s,o,u)}finally{wt=h,Ps.transition=v}}function qv(n,s,o,u){var h=wt,v=Ps.transition;Ps.transition=null;try{wt=4,Kc(n,s,o,u)}finally{wt=h,Ps.transition=v}}function Kc(n,s,o,u){if(Xo){var h=Zc(n,s,o,u);if(h===null)pu(n,s,u,qo,o),np(n,u);else if(jv(h,n,s,o,u))u.stopPropagation();else if(np(n,u),s&4&&-1<Gv.indexOf(n)){for(;h!==null;){var v=Za(h);if(v!==null&&Ft(v),v=Zc(n,s,o,u),v===null&&pu(n,s,u,qo,o),v===h)break;h=v}h!==null&&u.stopPropagation()}else pu(n,s,u,null,o)}}var qo=null;function Zc(n,s,o,u){if(qo=null,n=tt(u),n=Qr(n),n!==null)if(s=In(n),s===null)n=null;else if(o=s.tag,o===13){if(n=Ns(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return qo=n,null}function sp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yc()){case Ia:return 1;case R:return 4;case Y:case de:return 16;case ae:return 536870912;default:return 16}default:return 16}}var _r=null,Jc=null,$o=null;function ap(){if($o)return $o;var n,s=Jc,o=s.length,u,h="value"in _r?_r.value:_r.textContent,v=h.length;for(n=0;n<o&&s[n]===h[n];n++);var A=o-n;for(u=1;u<=A&&s[o-u]===h[v-u];u++);return $o=h.slice(n,1<u?1-u:void 0)}function Yo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Ko(){return!0}function op(){return!1}function Zn(n){function s(o,u,h,v,A){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ko:op,this.isPropagationStopped=op,this}return H(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ko)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ko)},persist:function(){},isPersistent:Ko}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qc=Zn(Ls),za=H({},Ls,{view:0,detail:0}),$v=Zn(za),eu,tu,Va,Zo=H({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:iu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Va&&(Va&&n.type==="mousemove"?(eu=n.screenX-Va.screenX,tu=n.screenY-Va.screenY):tu=eu=0,Va=n),eu)},movementY:function(n){return"movementY"in n?n.movementY:tu}}),lp=Zn(Zo),Yv=H({},Zo,{dataTransfer:0}),Kv=Zn(Yv),Zv=H({},za,{relatedTarget:0}),nu=Zn(Zv),Jv=H({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Zn(Jv),e_=H({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),t_=Zn(e_),n_=H({},Ls,{data:0}),cp=Zn(n_),i_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=s_[n])?!!s[n]:!1}function iu(){return a_}var o_=H({},za,{key:function(n){if(n.key){var s=i_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?r_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:iu,charCode:function(n){return n.type==="keypress"?Yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),l_=Zn(o_),c_=H({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Zn(c_),u_=H({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:iu}),d_=Zn(u_),f_=H({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),h_=Zn(f_),p_=H({},Zo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),m_=Zn(p_),g_=[9,13,27,32],ru=d&&"CompositionEvent"in window,Ha=null;d&&"documentMode"in document&&(Ha=document.documentMode);var x_=d&&"TextEvent"in window&&!Ha,dp=d&&(!ru||Ha&&8<Ha&&11>=Ha),fp=" ",hp=!1;function pp(n,s){switch(n){case"keyup":return g_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function v_(n,s){switch(n){case"compositionend":return mp(s);case"keypress":return s.which!==32?null:(hp=!0,fp);case"textInput":return n=s.data,n===fp&&hp?null:n;default:return null}}function __(n,s){if(Ds)return n==="compositionend"||!ru&&pp(n,s)?(n=ap(),$o=Jc=_r=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return dp&&s.locale!=="ko"?null:s.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!y_[n.type]:s==="textarea"}function xp(n,s,o,u){ye(u),s=nl(s,"onChange"),0<s.length&&(o=new Qc("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ga=null,ja=null;function S_(n){Up(n,0)}function Jo(n){var s=ks(n);if(ht(s))return n}function M_(n,s){if(n==="change")return s}var vp=!1;if(d){var su;if(d){var au="oninput"in document;if(!au){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),au=typeof _p.oninput=="function"}su=au}else su=!1;vp=su&&(!document.documentMode||9<document.documentMode)}function yp(){Ga&&(Ga.detachEvent("onpropertychange",Sp),ja=Ga=null)}function Sp(n){if(n.propertyName==="value"&&Jo(ja)){var s=[];xp(s,ja,n,tt(n)),$e(S_,s)}}function E_(n,s,o){n==="focusin"?(yp(),Ga=s,ja=o,Ga.attachEvent("onpropertychange",Sp)):n==="focusout"&&yp()}function w_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Jo(ja)}function b_(n,s){if(n==="click")return Jo(s)}function T_(n,s){if(n==="input"||n==="change")return Jo(s)}function A_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var vi=typeof Object.is=="function"?Object.is:A_;function Wa(n,s){if(vi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!f.call(s,h)||!vi(n[h],s[h]))return!1}return!0}function Mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ep(n,s){var o=Mp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Mp(o)}}function wp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?wp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function bp(){for(var n=window,s=Se();s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Se(n.document)}return s}function ou(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function C_(n){var s=bp(),o=n.focusedElem,u=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&wp(o.ownerDocument.documentElement,o)){if(u!==null&&ou(o)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(n,o.value.length);else if(n=(s=o.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=Ep(o,v);var A=Ep(o,u);h&&A&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=o;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)n=s[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var R_=d&&"documentMode"in document&&11>=document.documentMode,Is=null,lu=null,Xa=null,cu=!1;function Tp(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;cu||Is==null||Is!==Se(u)||(u=Is,"selectionStart"in u&&ou(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xa&&Wa(Xa,u)||(Xa=u,u=nl(lu,"onSelect"),0<u.length&&(s=new Qc("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Is)))}function Qo(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Us={animationend:Qo("Animation","AnimationEnd"),animationiteration:Qo("Animation","AnimationIteration"),animationstart:Qo("Animation","AnimationStart"),transitionend:Qo("Transition","TransitionEnd")},uu={},Ap={};d&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function el(n){if(uu[n])return uu[n];if(!Us[n])return n;var s=Us[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Ap)return uu[n]=s[o];return n}var Cp=el("animationend"),Rp=el("animationiteration"),Np=el("animationstart"),Pp=el("transitionend"),Lp=new Map,Dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,s){Lp.set(n,s),l(s,[n])}for(var du=0;du<Dp.length;du++){var fu=Dp[du],N_=fu.toLowerCase(),P_=fu[0].toUpperCase()+fu.slice(1);yr(N_,"on"+P_)}yr(Cp,"onAnimationEnd"),yr(Rp,"onAnimationIteration"),yr(Np,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Pp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L_=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function Ip(n,s,o){var u=n.type||"unknown-event";n.currentTarget=o,Ho(u,s,void 0,n),n.currentTarget=null}function Up(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var v=void 0;if(s)for(var A=u.length-1;0<=A;A--){var k=u[A],z=k.instance,fe=k.currentTarget;if(k=k.listener,z!==v&&h.isPropagationStopped())break e;Ip(h,k,fe),v=z}else for(A=0;A<u.length;A++){if(k=u[A],z=k.instance,fe=k.currentTarget,k=k.listener,z!==v&&h.isPropagationStopped())break e;Ip(h,k,fe),v=z}}}if($r)throw n=Yr,$r=!1,Yr=null,n}function Xt(n,s){var o=s[yu];o===void 0&&(o=s[yu]=new Set);var u=n+"__bubble";o.has(u)||(Op(s,n,2,!1),o.add(u))}function hu(n,s,o){var u=0;s&&(u|=4),Op(o,n,u,s)}var tl="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[tl]){n[tl]=!0,r.forEach(function(o){o!=="selectionchange"&&(L_.has(o)||hu(o,!1,n),hu(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[tl]||(s[tl]=!0,hu("selectionchange",!1,s))}}function Op(n,s,o,u){switch(sp(s)){case 1:var h=Xv;break;case 4:h=qv;break;default:h=Kc}o=h.bind(null,s,o,n),h=void 0,!Ot||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(s,o,{capture:!0,passive:h}):n.addEventListener(s,o,!0):h!==void 0?n.addEventListener(s,o,{passive:h}):n.addEventListener(s,o,!1)}function pu(n,s,o,u,h){var v=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var k=u.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(A===4)for(A=u.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===h||z.nodeType===8&&z.parentNode===h))return;A=A.return}for(;k!==null;){if(A=Qr(k),A===null)return;if(z=A.tag,z===5||z===6){u=v=A;continue e}k=k.parentNode}}u=u.return}$e(function(){var fe=v,Te=tt(o),Ae=[];e:{var we=Lp.get(n);if(we!==void 0){var je=Qc,Ye=n;switch(n){case"keypress":if(Yo(o)===0)break e;case"keydown":case"keyup":je=l_;break;case"focusin":Ye="focus",je=nu;break;case"focusout":Ye="blur",je=nu;break;case"beforeblur":case"afterblur":je=nu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Kv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=d_;break;case Cp:case Rp:case Np:je=Qv;break;case Pp:je=h_;break;case"scroll":je=$v;break;case"wheel":je=m_;break;case"copy":case"cut":case"paste":je=t_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=up}var et=(s&4)!==0,rn=!et&&n==="scroll",ne=et?we!==null?we+"Capture":null:we;et=[];for(var X=fe,oe;X!==null;){oe=X;var Pe=oe.stateNode;if(oe.tag===5&&Pe!==null&&(oe=Pe,ne!==null&&(Pe=Ht(X,ne),Pe!=null&&et.push(Ya(X,Pe,oe)))),rn)break;X=X.return}0<et.length&&(we=new je(we,Ye,null,o,Te),Ae.push({event:we,listeners:et}))}}if((s&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",we&&o!==Oe&&(Ye=o.relatedTarget||o.fromElement)&&(Qr(Ye)||Ye[$i]))break e;if((je||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,je?(Ye=o.relatedTarget||o.toElement,je=fe,Ye=Ye?Qr(Ye):null,Ye!==null&&(rn=In(Ye),Ye!==rn||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(je=null,Ye=fe),je!==Ye)){if(et=lp,Pe="onMouseLeave",ne="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(et=up,Pe="onPointerLeave",ne="onPointerEnter",X="pointer"),rn=je==null?we:ks(je),oe=Ye==null?we:ks(Ye),we=new et(Pe,X+"leave",je,o,Te),we.target=rn,we.relatedTarget=oe,Pe=null,Qr(Te)===fe&&(et=new et(ne,X+"enter",Ye,o,Te),et.target=oe,et.relatedTarget=rn,Pe=et),rn=Pe,je&&Ye)t:{for(et=je,ne=Ye,X=0,oe=et;oe;oe=Os(oe))X++;for(oe=0,Pe=ne;Pe;Pe=Os(Pe))oe++;for(;0<X-oe;)et=Os(et),X--;for(;0<oe-X;)ne=Os(ne),oe--;for(;X--;){if(et===ne||ne!==null&&et===ne.alternate)break t;et=Os(et),ne=Os(ne)}et=null}else et=null;je!==null&&Fp(Ae,we,je,et,!1),Ye!==null&&rn!==null&&Fp(Ae,rn,Ye,et,!0)}}e:{if(we=fe?ks(fe):window,je=we.nodeName&&we.nodeName.toLowerCase(),je==="select"||je==="input"&&we.type==="file")var it=M_;else if(gp(we))if(vp)it=T_;else{it=w_;var lt=E_}else(je=we.nodeName)&&je.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(it=b_);if(it&&(it=it(n,fe))){xp(Ae,it,o,Te);break e}lt&&lt(n,we,fe),n==="focusout"&&(lt=we._wrapperState)&&lt.controlled&&we.type==="number"&&gt(we,"number",we.value)}switch(lt=fe?ks(fe):window,n){case"focusin":(gp(lt)||lt.contentEditable==="true")&&(Is=lt,lu=fe,Xa=null);break;case"focusout":Xa=lu=Is=null;break;case"mousedown":cu=!0;break;case"contextmenu":case"mouseup":case"dragend":cu=!1,Tp(Ae,o,Te);break;case"selectionchange":if(R_)break;case"keydown":case"keyup":Tp(Ae,o,Te)}var ct;if(ru)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ds?pp(n,o)&&(mt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(dp&&o.locale!=="ko"&&(Ds||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ds&&(ct=ap()):(_r=Te,Jc="value"in _r?_r.value:_r.textContent,Ds=!0)),lt=nl(fe,mt),0<lt.length&&(mt=new cp(mt,n,null,o,Te),Ae.push({event:mt,listeners:lt}),ct?mt.data=ct:(ct=mp(o),ct!==null&&(mt.data=ct)))),(ct=x_?v_(n,o):__(n,o))&&(fe=nl(fe,"onBeforeInput"),0<fe.length&&(Te=new cp("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:fe}),Te.data=ct))}Up(Ae,s)})}function Ya(n,s,o){return{instance:n,listener:s,currentTarget:o}}function nl(n,s){for(var o=s+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=Ht(n,o),v!=null&&u.unshift(Ya(n,v,h)),v=Ht(n,s),v!=null&&u.push(Ya(n,v,h))),n=n.return}return u}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fp(n,s,o,u,h){for(var v=s._reactName,A=[];o!==null&&o!==u;){var k=o,z=k.alternate,fe=k.stateNode;if(z!==null&&z===u)break;k.tag===5&&fe!==null&&(k=fe,h?(z=Ht(o,v),z!=null&&A.unshift(Ya(o,z,k))):h||(z=Ht(o,v),z!=null&&A.push(Ya(o,z,k)))),o=o.return}A.length!==0&&n.push({event:s,listeners:A})}var D_=/\r\n?/g,I_=/\u0000|\uFFFD/g;function kp(n){return(typeof n=="string"?n:""+n).replace(D_,`
`).replace(I_,"")}function il(n,s,o){if(s=kp(s),kp(n)!==s&&o)throw Error(t(425))}function rl(){}var mu=null,gu=null;function xu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,U_=typeof clearTimeout=="function"?clearTimeout:void 0,Bp=typeof Promise=="function"?Promise:void 0,O_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bp<"u"?function(n){return Bp.resolve(null).then(n).catch(F_)}:vu;function F_(n){setTimeout(function(){throw n})}function _u(n,s){var o=s,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Ba(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Ba(s)}function Sr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function zp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Li="__reactFiber$"+Fs,Ka="__reactProps$"+Fs,$i="__reactContainer$"+Fs,yu="__reactEvents$"+Fs,k_="__reactListeners$"+Fs,B_="__reactHandles$"+Fs;function Qr(n){var s=n[Li];if(s)return s;for(var o=n.parentNode;o;){if(s=o[$i]||o[Li]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=zp(n);n!==null;){if(o=n[Li])return o;n=zp(n)}return s}n=o,o=n.parentNode}return null}function Za(n){return n=n[Li]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function sl(n){return n[Ka]||null}var Su=[],Bs=-1;function Mr(n){return{current:n}}function qt(n){0>Bs||(n.current=Su[Bs],Su[Bs]=null,Bs--)}function jt(n,s){Bs++,Su[Bs]=n.current,n.current=s}var Er={},wn=Mr(Er),Hn=Mr(!1),es=Er;function zs(n,s){var o=n.type.contextTypes;if(!o)return Er;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in o)h[v]=s[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=h),h}function Gn(n){return n=n.childContextTypes,n!=null}function al(){qt(Hn),qt(wn)}function Vp(n,s,o){if(wn.current!==Er)throw Error(t(168));jt(wn,s),jt(Hn,o)}function Hp(n,s,o){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in s))throw Error(t(108,ve(n)||"Unknown",h));return H({},o,u)}function ol(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Er,es=wn.current,jt(wn,n),jt(Hn,Hn.current),!0}function Gp(n,s,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Hp(n,s,es),u.__reactInternalMemoizedMergedChildContext=n,qt(Hn),qt(wn),jt(wn,n)):qt(Hn),jt(Hn,o)}var Yi=null,ll=!1,Mu=!1;function jp(n){Yi===null?Yi=[n]:Yi.push(n)}function z_(n){ll=!0,jp(n)}function wr(){if(!Mu&&Yi!==null){Mu=!0;var n=0,s=wt;try{var o=Yi;for(wt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Yi=null,ll=!1}catch(h){throw Yi!==null&&(Yi=Yi.slice(n+1)),Zr(Ia,wr),h}finally{wt=s,Mu=!1}}return null}var Vs=[],Hs=0,cl=null,ul=0,ai=[],oi=0,ts=null,Ki=1,Zi="";function ns(n,s){Vs[Hs++]=ul,Vs[Hs++]=cl,cl=n,ul=s}function Wp(n,s,o){ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=ts,ts=n;var u=Ki;n=Zi;var h=32-Le(u)-1;u&=~(1<<h),o+=1;var v=32-Le(s)+h;if(30<v){var A=h-h%5;v=(u&(1<<A)-1).toString(32),u>>=A,h-=A,Ki=1<<32-Le(s)+h|o<<h|u,Zi=v+n}else Ki=1<<v|o<<h|u,Zi=n}function Eu(n){n.return!==null&&(ns(n,1),Wp(n,1,0))}function wu(n){for(;n===cl;)cl=Vs[--Hs],Vs[Hs]=null,ul=Vs[--Hs],Vs[Hs]=null;for(;n===ts;)ts=ai[--oi],ai[oi]=null,Zi=ai[--oi],ai[oi]=null,Ki=ai[--oi],ai[oi]=null}var Jn=null,Qn=null,Yt=!1,_i=null;function Xp(n,s){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=n,s=n.deletions,s===null?(n.deletions=[o],n.flags|=16):s.push(o)}function qp(n,s){switch(n.tag){case 5:var o=n.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Jn=n,Qn=Sr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Jn=n,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=ts!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=s,o.return=n,n.child=o,Jn=n,Qn=null,!0):!1;default:return!1}}function bu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Tu(n){if(Yt){var s=Qn;if(s){var o=s;if(!qp(n,s)){if(bu(n))throw Error(t(418));s=Sr(o.nextSibling);var u=Jn;s&&qp(n,s)?Xp(u,o):(n.flags=n.flags&-4097|2,Yt=!1,Jn=n)}}else{if(bu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Jn=n}}}function $p(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function dl(n){if(n!==Jn)return!1;if(!Yt)return $p(n),Yt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!xu(n.type,n.memoizedProps)),s&&(s=Qn)){if(bu(n))throw Yp(),Error(t(418));for(;s;)Xp(n,s),s=Sr(s.nextSibling)}if($p(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(s===0){Qn=Sr(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}n=n.nextSibling}Qn=null}}else Qn=Jn?Sr(n.stateNode.nextSibling):null;return!0}function Yp(){for(var n=Qn;n;)n=Sr(n.nextSibling)}function Gs(){Qn=Jn=null,Yt=!1}function Au(n){_i===null?_i=[n]:_i.push(n)}var V_=T.ReactCurrentBatchConfig;function Ja(n,s,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(A){var k=h.refs;A===null?delete k[v]:k[v]=A},s._stringRef=v,s)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function fl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function Kp(n){var s=n._init;return s(n._payload)}function Zp(n){function s(ne,X){if(n){var oe=ne.deletions;oe===null?(ne.deletions=[X],ne.flags|=16):oe.push(X)}}function o(ne,X){if(!n)return null;for(;X!==null;)s(ne,X),X=X.sibling;return null}function u(ne,X){for(ne=new Map;X!==null;)X.key!==null?ne.set(X.key,X):ne.set(X.index,X),X=X.sibling;return ne}function h(ne,X){return ne=Lr(ne,X),ne.index=0,ne.sibling=null,ne}function v(ne,X,oe){return ne.index=oe,n?(oe=ne.alternate,oe!==null?(oe=oe.index,oe<X?(ne.flags|=2,X):oe):(ne.flags|=2,X)):(ne.flags|=1048576,X)}function A(ne){return n&&ne.alternate===null&&(ne.flags|=2),ne}function k(ne,X,oe,Pe){return X===null||X.tag!==6?(X=vd(oe,ne.mode,Pe),X.return=ne,X):(X=h(X,oe),X.return=ne,X)}function z(ne,X,oe,Pe){var it=oe.type;return it===F?Te(ne,X,oe.props.children,Pe,oe.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Kp(it)===X.type)?(Pe=h(X,oe.props),Pe.ref=Ja(ne,X,oe),Pe.return=ne,Pe):(Pe=Ol(oe.type,oe.key,oe.props,null,ne.mode,Pe),Pe.ref=Ja(ne,X,oe),Pe.return=ne,Pe)}function fe(ne,X,oe,Pe){return X===null||X.tag!==4||X.stateNode.containerInfo!==oe.containerInfo||X.stateNode.implementation!==oe.implementation?(X=_d(oe,ne.mode,Pe),X.return=ne,X):(X=h(X,oe.children||[]),X.return=ne,X)}function Te(ne,X,oe,Pe,it){return X===null||X.tag!==7?(X=us(oe,ne.mode,Pe,it),X.return=ne,X):(X=h(X,oe),X.return=ne,X)}function Ae(ne,X,oe){if(typeof X=="string"&&X!==""||typeof X=="number")return X=vd(""+X,ne.mode,oe),X.return=ne,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return oe=Ol(X.type,X.key,X.props,null,ne.mode,oe),oe.ref=Ja(ne,null,X),oe.return=ne,oe;case P:return X=_d(X,ne.mode,oe),X.return=ne,X;case pe:var Pe=X._init;return Ae(ne,Pe(X._payload),oe)}if(kt(X)||le(X))return X=us(X,ne.mode,oe,null),X.return=ne,X;fl(ne,X)}return null}function we(ne,X,oe,Pe){var it=X!==null?X.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return it!==null?null:k(ne,X,""+oe,Pe);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case I:return oe.key===it?z(ne,X,oe,Pe):null;case P:return oe.key===it?fe(ne,X,oe,Pe):null;case pe:return it=oe._init,we(ne,X,it(oe._payload),Pe)}if(kt(oe)||le(oe))return it!==null?null:Te(ne,X,oe,Pe,null);fl(ne,oe)}return null}function je(ne,X,oe,Pe,it){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ne=ne.get(oe)||null,k(X,ne,""+Pe,it);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case I:return ne=ne.get(Pe.key===null?oe:Pe.key)||null,z(X,ne,Pe,it);case P:return ne=ne.get(Pe.key===null?oe:Pe.key)||null,fe(X,ne,Pe,it);case pe:var lt=Pe._init;return je(ne,X,oe,lt(Pe._payload),it)}if(kt(Pe)||le(Pe))return ne=ne.get(oe)||null,Te(X,ne,Pe,it,null);fl(X,Pe)}return null}function Ye(ne,X,oe,Pe){for(var it=null,lt=null,ct=X,mt=X=0,gn=null;ct!==null&&mt<oe.length;mt++){ct.index>mt?(gn=ct,ct=null):gn=ct.sibling;var Ut=we(ne,ct,oe[mt],Pe);if(Ut===null){ct===null&&(ct=gn);break}n&&ct&&Ut.alternate===null&&s(ne,ct),X=v(Ut,X,mt),lt===null?it=Ut:lt.sibling=Ut,lt=Ut,ct=gn}if(mt===oe.length)return o(ne,ct),Yt&&ns(ne,mt),it;if(ct===null){for(;mt<oe.length;mt++)ct=Ae(ne,oe[mt],Pe),ct!==null&&(X=v(ct,X,mt),lt===null?it=ct:lt.sibling=ct,lt=ct);return Yt&&ns(ne,mt),it}for(ct=u(ne,ct);mt<oe.length;mt++)gn=je(ct,ne,mt,oe[mt],Pe),gn!==null&&(n&&gn.alternate!==null&&ct.delete(gn.key===null?mt:gn.key),X=v(gn,X,mt),lt===null?it=gn:lt.sibling=gn,lt=gn);return n&&ct.forEach(function(Dr){return s(ne,Dr)}),Yt&&ns(ne,mt),it}function et(ne,X,oe,Pe){var it=le(oe);if(typeof it!="function")throw Error(t(150));if(oe=it.call(oe),oe==null)throw Error(t(151));for(var lt=it=null,ct=X,mt=X=0,gn=null,Ut=oe.next();ct!==null&&!Ut.done;mt++,Ut=oe.next()){ct.index>mt?(gn=ct,ct=null):gn=ct.sibling;var Dr=we(ne,ct,Ut.value,Pe);if(Dr===null){ct===null&&(ct=gn);break}n&&ct&&Dr.alternate===null&&s(ne,ct),X=v(Dr,X,mt),lt===null?it=Dr:lt.sibling=Dr,lt=Dr,ct=gn}if(Ut.done)return o(ne,ct),Yt&&ns(ne,mt),it;if(ct===null){for(;!Ut.done;mt++,Ut=oe.next())Ut=Ae(ne,Ut.value,Pe),Ut!==null&&(X=v(Ut,X,mt),lt===null?it=Ut:lt.sibling=Ut,lt=Ut);return Yt&&ns(ne,mt),it}for(ct=u(ne,ct);!Ut.done;mt++,Ut=oe.next())Ut=je(ct,ne,mt,Ut.value,Pe),Ut!==null&&(n&&Ut.alternate!==null&&ct.delete(Ut.key===null?mt:Ut.key),X=v(Ut,X,mt),lt===null?it=Ut:lt.sibling=Ut,lt=Ut);return n&&ct.forEach(function(yy){return s(ne,yy)}),Yt&&ns(ne,mt),it}function rn(ne,X,oe,Pe){if(typeof oe=="object"&&oe!==null&&oe.type===F&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case I:e:{for(var it=oe.key,lt=X;lt!==null;){if(lt.key===it){if(it=oe.type,it===F){if(lt.tag===7){o(ne,lt.sibling),X=h(lt,oe.props.children),X.return=ne,ne=X;break e}}else if(lt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===pe&&Kp(it)===lt.type){o(ne,lt.sibling),X=h(lt,oe.props),X.ref=Ja(ne,lt,oe),X.return=ne,ne=X;break e}o(ne,lt);break}else s(ne,lt);lt=lt.sibling}oe.type===F?(X=us(oe.props.children,ne.mode,Pe,oe.key),X.return=ne,ne=X):(Pe=Ol(oe.type,oe.key,oe.props,null,ne.mode,Pe),Pe.ref=Ja(ne,X,oe),Pe.return=ne,ne=Pe)}return A(ne);case P:e:{for(lt=oe.key;X!==null;){if(X.key===lt)if(X.tag===4&&X.stateNode.containerInfo===oe.containerInfo&&X.stateNode.implementation===oe.implementation){o(ne,X.sibling),X=h(X,oe.children||[]),X.return=ne,ne=X;break e}else{o(ne,X);break}else s(ne,X);X=X.sibling}X=_d(oe,ne.mode,Pe),X.return=ne,ne=X}return A(ne);case pe:return lt=oe._init,rn(ne,X,lt(oe._payload),Pe)}if(kt(oe))return Ye(ne,X,oe,Pe);if(le(oe))return et(ne,X,oe,Pe);fl(ne,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,X!==null&&X.tag===6?(o(ne,X.sibling),X=h(X,oe),X.return=ne,ne=X):(o(ne,X),X=vd(oe,ne.mode,Pe),X.return=ne,ne=X),A(ne)):o(ne,X)}return rn}var js=Zp(!0),Jp=Zp(!1),hl=Mr(null),pl=null,Ws=null,Cu=null;function Ru(){Cu=Ws=pl=null}function Nu(n){var s=hl.current;qt(hl),n._currentValue=s}function Pu(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Xs(n,s){pl=n,Cu=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(jn=!0),n.firstContext=null)}function li(n){var s=n._currentValue;if(Cu!==n)if(n={context:n,memoizedValue:s,next:null},Ws===null){if(pl===null)throw Error(t(308));Ws=n,pl.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return s}var is=null;function Lu(n){is===null?is=[n]:is.push(n)}function Qp(n,s,o,u){var h=s.interleaved;return h===null?(o.next=o,Lu(s)):(o.next=h.next,h.next=o),s.interleaved=o,Ji(n,u)}function Ji(n,s){n.lanes|=s;var o=n.alternate;for(o!==null&&(o.lanes|=s),o=n,n=n.return;n!==null;)n.childLanes|=s,o=n.alternate,o!==null&&(o.childLanes|=s),o=n,n=n.return;return o.tag===3?o.stateNode:null}var br=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function em(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Tr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var h=u.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s,Ji(n,o)}return h=u.interleaved,h===null?(s.next=s,Lu(u)):(s.next=h.next,h.next=s),u.interleaved=s,Ji(n,o)}function ml(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Vn(n,o)}}function tm(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?h=v=A:v=v.next=A,o=o.next}while(o!==null);v===null?h=v=s:v=v.next=s}else h=v=s;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}function gl(n,s,o,u){var h=n.updateQueue;br=!1;var v=h.firstBaseUpdate,A=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var z=k,fe=z.next;z.next=null,A===null?v=fe:A.next=fe,A=z;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,k=Te.lastBaseUpdate,k!==A&&(k===null?Te.firstBaseUpdate=fe:k.next=fe,Te.lastBaseUpdate=z))}if(v!==null){var Ae=h.baseState;A=0,Te=fe=z=null,k=v;do{var we=k.lane,je=k.eventTime;if((u&we)===we){Te!==null&&(Te=Te.next={eventTime:je,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Ye=n,et=k;switch(we=s,je=o,et.tag){case 1:if(Ye=et.payload,typeof Ye=="function"){Ae=Ye.call(je,Ae,we);break e}Ae=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=et.payload,we=typeof Ye=="function"?Ye.call(je,Ae,we):Ye,we==null)break e;Ae=H({},Ae,we);break e;case 2:br=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[k]:we.push(k))}else je={eventTime:je,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Te===null?(fe=Te=je,z=Ae):Te=Te.next=je,A|=we;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;we=k,k=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(Te===null&&(z=Ae),h.baseState=z,h.firstBaseUpdate=fe,h.lastBaseUpdate=Te,s=h.shared.interleaved,s!==null){h=s;do A|=h.lane,h=h.next;while(h!==s)}else v===null&&(h.shared.lanes=0);as|=A,n.lanes=A,n.memoizedState=Ae}}function nm(n,s,o){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Qa={},Di=Mr(Qa),eo=Mr(Qa),to=Mr(Qa);function rs(n){if(n===Qa)throw Error(t(174));return n}function Iu(n,s){switch(jt(to,s),jt(eo,n),jt(Di,Qa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=E(s,n)}qt(Di),jt(Di,s)}function qs(){qt(Di),qt(eo),qt(to)}function im(n){rs(to.current);var s=rs(Di.current),o=E(s,n.type);s!==o&&(jt(eo,n),jt(Di,o))}function Uu(n){eo.current===n&&(qt(Di),qt(eo))}var Zt=Mr(0);function xl(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Ou=[];function Fu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var vl=T.ReactCurrentDispatcher,ku=T.ReactCurrentBatchConfig,ss=0,Jt=null,un=null,pn=null,_l=!1,no=!1,io=0,H_=0;function bn(){throw Error(t(321))}function Bu(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!vi(n[o],s[o]))return!1;return!0}function zu(n,s,o,u,h,v){if(ss=v,Jt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,vl.current=n===null||n.memoizedState===null?X_:q_,n=o(u,h),no){v=0;do{if(no=!1,io=0,25<=v)throw Error(t(301));v+=1,pn=un=null,s.updateQueue=null,vl.current=$_,n=o(u,h)}while(no)}if(vl.current=Ml,s=un!==null&&un.next!==null,ss=0,pn=un=Jt=null,_l=!1,s)throw Error(t(300));return n}function Vu(){var n=io!==0;return io=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?Jt.memoizedState=pn=n:pn=pn.next=n,pn}function ci(){if(un===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var s=pn===null?Jt.memoizedState:pn.next;if(s!==null)pn=s,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},pn===null?Jt.memoizedState=pn=n:pn=pn.next=n}return pn}function ro(n,s){return typeof s=="function"?s(n):s}function Hu(n){var s=ci(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=un,h=u.baseQueue,v=o.pending;if(v!==null){if(h!==null){var A=h.next;h.next=v.next,v.next=A}u.baseQueue=h=v,o.pending=null}if(h!==null){v=h.next,u=u.baseState;var k=A=null,z=null,fe=v;do{var Te=fe.lane;if((ss&Te)===Te)z!==null&&(z=z.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ae={lane:Te,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};z===null?(k=z=Ae,A=u):z=z.next=Ae,Jt.lanes|=Te,as|=Te}fe=fe.next}while(fe!==null&&fe!==v);z===null?A=u:z.next=k,vi(u,s.memoizedState)||(jn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do v=h.lane,Jt.lanes|=v,as|=v,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function Gu(n){var s=ci(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,v=s.memoizedState;if(h!==null){o.pending=null;var A=h=h.next;do v=n(v,A.action),A=A.next;while(A!==h);vi(v,s.memoizedState)||(jn=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),o.lastRenderedState=v}return[v,u]}function rm(){}function sm(n,s){var o=Jt,u=ci(),h=s(),v=!vi(u.memoizedState,h);if(v&&(u.memoizedState=h,jn=!0),u=u.queue,ju(lm.bind(null,o,u,n),[n]),u.getSnapshot!==s||v||pn!==null&&pn.memoizedState.tag&1){if(o.flags|=2048,so(9,om.bind(null,o,u,h,s),void 0,null),mn===null)throw Error(t(349));(ss&30)!==0||am(o,s,h)}return h}function am(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function om(n,s,o,u){s.value=o,s.getSnapshot=u,cm(s)&&um(n)}function lm(n,s,o){return o(function(){cm(s)&&um(n)})}function cm(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!vi(n,o)}catch{return!0}}function um(n){var s=Ji(n,1);s!==null&&Ei(s,n,1,-1)}function dm(n){var s=Ii();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:n},s.queue=n,n=n.dispatch=W_.bind(null,Jt,n),[s.memoizedState,n]}function so(n,s,o,u){return n={tag:n,create:s,destroy:o,deps:u,next:null},s=Jt.updateQueue,s===null?(s={lastEffect:null,stores:null},Jt.updateQueue=s,s.lastEffect=n.next=n):(o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n)),n}function fm(){return ci().memoizedState}function yl(n,s,o,u){var h=Ii();Jt.flags|=n,h.memoizedState=so(1|s,o,void 0,u===void 0?null:u)}function Sl(n,s,o,u){var h=ci();u=u===void 0?null:u;var v=void 0;if(un!==null){var A=un.memoizedState;if(v=A.destroy,u!==null&&Bu(u,A.deps)){h.memoizedState=so(s,o,v,u);return}}Jt.flags|=n,h.memoizedState=so(1|s,o,v,u)}function hm(n,s){return yl(8390656,8,n,s)}function ju(n,s){return Sl(2048,8,n,s)}function pm(n,s){return Sl(4,2,n,s)}function mm(n,s){return Sl(4,4,n,s)}function gm(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function xm(n,s,o){return o=o!=null?o.concat([n]):null,Sl(4,4,gm.bind(null,s,n),o)}function Wu(){}function vm(n,s){var o=ci();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&Bu(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function _m(n,s){var o=ci();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&Bu(s,u[1])?u[0]:(n=n(),o.memoizedState=[n,s],n)}function ym(n,s,o){return(ss&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(vi(o,s)||(o=Ge(),Jt.lanes|=o,as|=o,n.baseState=!0),s)}function G_(n,s){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var u=ku.transition;ku.transition={};try{n(!1),s()}finally{wt=o,ku.transition=u}}function Sm(){return ci().memoizedState}function j_(n,s,o){var u=Nr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Mm(n))Em(s,o);else if(o=Qp(n,s,o,u),o!==null){var h=On();Ei(o,n,u,h),wm(o,s,u)}}function W_(n,s,o){var u=Nr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Mm(n))Em(s,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var A=s.lastRenderedState,k=v(A,o);if(h.hasEagerState=!0,h.eagerState=k,vi(k,A)){var z=s.interleaved;z===null?(h.next=h,Lu(s)):(h.next=z.next,z.next=h),s.interleaved=h;return}}catch{}finally{}o=Qp(n,s,h,u),o!==null&&(h=On(),Ei(o,n,u,h),wm(o,s,u))}}function Mm(n){var s=n.alternate;return n===Jt||s!==null&&s===Jt}function Em(n,s){no=_l=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function wm(n,s,o){if((o&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Vn(n,o)}}var Ml={readContext:li,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},X_={readContext:li,useCallback:function(n,s){return Ii().memoizedState=[n,s===void 0?null:s],n},useContext:li,useEffect:hm,useImperativeHandle:function(n,s,o){return o=o!=null?o.concat([n]):null,yl(4194308,4,gm.bind(null,s,n),o)},useLayoutEffect:function(n,s){return yl(4194308,4,n,s)},useInsertionEffect:function(n,s){return yl(4,2,n,s)},useMemo:function(n,s){var o=Ii();return s=s===void 0?null:s,n=n(),o.memoizedState=[n,s],n},useReducer:function(n,s,o){var u=Ii();return s=o!==void 0?o(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=j_.bind(null,Jt,n),[u.memoizedState,n]},useRef:function(n){var s=Ii();return n={current:n},s.memoizedState=n},useState:dm,useDebugValue:Wu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=dm(!1),s=n[0];return n=G_.bind(null,n[1]),Ii().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,o){var u=Jt,h=Ii();if(Yt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=s(),mn===null)throw Error(t(349));(ss&30)!==0||am(u,s,o)}h.memoizedState=o;var v={value:o,getSnapshot:s};return h.queue=v,hm(lm.bind(null,u,v,n),[n]),u.flags|=2048,so(9,om.bind(null,u,v,o,s),void 0,null),o},useId:function(){var n=Ii(),s=mn.identifierPrefix;if(Yt){var o=Zi,u=Ki;o=(u&~(1<<32-Le(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=io++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=H_++,s=":"+s+"r"+o.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},q_={readContext:li,useCallback:vm,useContext:li,useEffect:ju,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Hu,useRef:fm,useState:function(){return Hu(ro)},useDebugValue:Wu,useDeferredValue:function(n){var s=ci();return ym(s,un.memoizedState,n)},useTransition:function(){var n=Hu(ro)[0],s=ci().memoizedState;return[n,s]},useMutableSource:rm,useSyncExternalStore:sm,useId:Sm,unstable_isNewReconciler:!1},$_={readContext:li,useCallback:vm,useContext:li,useEffect:ju,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Gu,useRef:fm,useState:function(){return Gu(ro)},useDebugValue:Wu,useDeferredValue:function(n){var s=ci();return un===null?s.memoizedState=n:ym(s,un.memoizedState,n)},useTransition:function(){var n=Gu(ro)[0],s=ci().memoizedState;return[n,s]},useMutableSource:rm,useSyncExternalStore:sm,useId:Sm,unstable_isNewReconciler:!1};function yi(n,s){if(n&&n.defaultProps){s=H({},s),n=n.defaultProps;for(var o in n)s[o]===void 0&&(s[o]=n[o]);return s}return s}function Xu(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:H({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var El={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,s,o){n=n._reactInternals;var u=On(),h=Nr(n),v=Qi(u,h);v.payload=s,o!=null&&(v.callback=o),s=Tr(n,v,h),s!==null&&(Ei(s,n,h,u),ml(s,n,h))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=On(),h=Nr(n),v=Qi(u,h);v.tag=1,v.payload=s,o!=null&&(v.callback=o),s=Tr(n,v,h),s!==null&&(Ei(s,n,h,u),ml(s,n,h))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=On(),u=Nr(n),h=Qi(o,u);h.tag=2,s!=null&&(h.callback=s),s=Tr(n,h,u),s!==null&&(Ei(s,n,u,o),ml(s,n,u))}};function bm(n,s,o,u,h,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):s.prototype&&s.prototype.isPureReactComponent?!Wa(o,u)||!Wa(h,v):!0}function Tm(n,s,o){var u=!1,h=Er,v=s.contextType;return typeof v=="object"&&v!==null?v=li(v):(h=Gn(s)?es:wn.current,u=s.contextTypes,v=(u=u!=null)?zs(n,h):Er),s=new s(o,v),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=El,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),s}function Am(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&El.enqueueReplaceState(s,s.state,null)}function qu(n,s,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Du(n);var v=s.contextType;typeof v=="object"&&v!==null?h.context=li(v):(v=Gn(s)?es:wn.current,h.context=zs(n,v)),h.state=n.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(Xu(n,s,v,o),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&El.enqueueReplaceState(h,h.state,null),gl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,s){try{var o="",u=s;do o+=Ne(u),u=u.return;while(u);var h=o}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:s,stack:h,digest:null}}function $u(n,s,o){return{value:n,source:null,stack:o??null,digest:s??null}}function Yu(n,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var Y_=typeof WeakMap=="function"?WeakMap:Map;function Cm(n,s,o){o=Qi(-1,o),o.tag=3,o.payload={element:null};var u=s.value;return o.callback=function(){Nl||(Nl=!0,ud=u),Yu(n,s)},o}function Rm(n,s,o){o=Qi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;o.payload=function(){return u(h)},o.callback=function(){Yu(n,s)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){Yu(n,s),typeof u!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),o}function Nm(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Y_;var h=new Set;u.set(s,h)}else h=u.get(s),h===void 0&&(h=new Set,u.set(s,h));h.has(o)||(h.add(o),n=cy.bind(null,n,s,o),s.then(n,n))}function Pm(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Lm(n,s,o,u,h){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=Qi(-1,1),s.tag=2,Tr(o,s,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var K_=T.ReactCurrentOwner,jn=!1;function Un(n,s,o,u){s.child=n===null?Jp(s,null,o,u):js(s,n.child,o,u)}function Dm(n,s,o,u,h){o=o.render;var v=s.ref;return Xs(s,h),u=zu(n,s,o,u,v,h),o=Vu(),n!==null&&!jn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,er(n,s,h)):(Yt&&o&&Eu(s),s.flags|=1,Un(n,s,u,h),s.child)}function Im(n,s,o,u,h){if(n===null){var v=o.type;return typeof v=="function"&&!xd(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=v,Um(n,s,v,u,h)):(n=Ol(o.type,null,u,s,s.mode,h),n.ref=s.ref,n.return=s,s.child=n)}if(v=n.child,(n.lanes&h)===0){var A=v.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(A,u)&&n.ref===s.ref)return er(n,s,h)}return s.flags|=1,n=Lr(v,u),n.ref=s.ref,n.return=s,s.child=n}function Um(n,s,o,u,h){if(n!==null){var v=n.memoizedProps;if(Wa(v,u)&&n.ref===s.ref)if(jn=!1,s.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(jn=!0);else return s.lanes=n.lanes,er(n,s,h)}return Ku(n,s,o,u,h)}function Om(n,s,o){var u=s.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(Ks,ei),ei|=o;else{if((o&1073741824)===0)return n=v!==null?v.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,jt(Ks,ei),ei|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:o,jt(Ks,ei),ei|=u}else v!==null?(u=v.baseLanes|o,s.memoizedState=null):u=o,jt(Ks,ei),ei|=u;return Un(n,s,h,o),s.child}function Fm(n,s){var o=s.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Ku(n,s,o,u,h){var v=Gn(o)?es:wn.current;return v=zs(s,v),Xs(s,h),o=zu(n,s,o,u,v,h),u=Vu(),n!==null&&!jn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,er(n,s,h)):(Yt&&u&&Eu(s),s.flags|=1,Un(n,s,o,h),s.child)}function km(n,s,o,u,h){if(Gn(o)){var v=!0;ol(s)}else v=!1;if(Xs(s,h),s.stateNode===null)bl(n,s),Tm(s,o,u),qu(s,o,u,h),u=!0;else if(n===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var z=A.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=li(fe):(fe=Gn(o)?es:wn.current,fe=zs(s,fe));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ae||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==u||z!==fe)&&Am(s,A,u,fe),br=!1;var we=s.memoizedState;A.state=we,gl(s,u,A,h),z=s.memoizedState,k!==u||we!==z||Hn.current||br?(typeof Te=="function"&&(Xu(s,o,Te,u),z=s.memoizedState),(k=br||bm(s,o,k,u,we,z,fe))?(Ae||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),A.props=u,A.state=z,A.context=fe,u=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,em(n,s),k=s.memoizedProps,fe=s.type===s.elementType?k:yi(s.type,k),A.props=fe,Ae=s.pendingProps,we=A.context,z=o.contextType,typeof z=="object"&&z!==null?z=li(z):(z=Gn(o)?es:wn.current,z=zs(s,z));var je=o.getDerivedStateFromProps;(Te=typeof je=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Ae||we!==z)&&Am(s,A,u,z),br=!1,we=s.memoizedState,A.state=we,gl(s,u,A,h);var Ye=s.memoizedState;k!==Ae||we!==Ye||Hn.current||br?(typeof je=="function"&&(Xu(s,o,je,u),Ye=s.memoizedState),(fe=br||bm(s,o,fe,u,we,Ye,z)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ye,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ye,z)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Ye),A.props=u,A.state=Ye,A.context=z,u=fe):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),u=!1)}return Zu(n,s,o,u,v,h)}function Zu(n,s,o,u,h,v){Fm(n,s);var A=(s.flags&128)!==0;if(!u&&!A)return h&&Gp(s,o,!1),er(n,s,v);u=s.stateNode,K_.current=s;var k=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&A?(s.child=js(s,n.child,null,v),s.child=js(s,null,k,v)):Un(n,s,k,v),s.memoizedState=u.state,h&&Gp(s,o,!0),s.child}function Bm(n){var s=n.stateNode;s.pendingContext?Vp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Vp(n,s.context,!1),Iu(n,s.containerInfo)}function zm(n,s,o,u,h){return Gs(),Au(h),s.flags|=256,Un(n,s,o,u),s.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Qu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Vm(n,s,o){var u=s.pendingProps,h=Zt.current,v=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(v=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),jt(Zt,h&1),n===null)return Tu(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=s.mode,v=s.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Fl(A,u,0,null),n=us(n,u,o,null),v.return=s,n.return=s,v.sibling=n,s.child=v,s.child.memoizedState=Qu(o),s.memoizedState=Ju,n):ed(s,A));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Z_(n,s,A,u,k,h,o);if(v){v=u.fallback,A=s.mode,h=n.child,k=h.sibling;var z={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==h?(u=s.child,u.childLanes=0,u.pendingProps=z,s.deletions=null):(u=Lr(h,z),u.subtreeFlags=h.subtreeFlags&14680064),k!==null?v=Lr(k,v):(v=us(v,A,o,null),v.flags|=2),v.return=s,u.return=s,u.sibling=v,s.child=u,u=v,v=s.child,A=n.child.memoizedState,A=A===null?Qu(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~o,s.memoizedState=Ju,u}return v=n.child,n=v.sibling,u=Lr(v,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=o),u.return=s,u.sibling=null,n!==null&&(o=s.deletions,o===null?(s.deletions=[n],s.flags|=16):o.push(n)),s.child=u,s.memoizedState=null,u}function ed(n,s){return s=Fl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function wl(n,s,o,u){return u!==null&&Au(u),js(s,n.child,null,o),n=ed(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Z_(n,s,o,u,h,v,A){if(o)return s.flags&256?(s.flags&=-257,u=$u(Error(t(422))),wl(n,s,A,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(v=u.fallback,h=s.mode,u=Fl({mode:"visible",children:u.children},h,0,null),v=us(v,h,A,null),v.flags|=2,u.return=s,v.return=s,u.sibling=v,s.child=u,(s.mode&1)!==0&&js(s,n.child,null,A),s.child.memoizedState=Qu(A),s.memoizedState=Ju,v);if((s.mode&1)===0)return wl(n,s,A,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var k=u.dgst;return u=k,v=Error(t(419)),u=$u(v,u,void 0),wl(n,s,A,u)}if(k=(A&n.childLanes)!==0,jn||k){if(u=mn,u!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|A))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,Ji(n,h),Ei(u,n,h,-1))}return gd(),u=$u(Error(t(421))),wl(n,s,A,u)}return h.data==="$?"?(s.flags|=128,s.child=n.child,s=uy.bind(null,n),h._reactRetry=s,null):(n=v.treeContext,Qn=Sr(h.nextSibling),Jn=s,Yt=!0,_i=null,n!==null&&(ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=ts,Ki=n.id,Zi=n.overflow,ts=s),s=ed(s,u.children),s.flags|=4096,s)}function Hm(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Pu(n.return,s,o)}function td(n,s,o,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=o,v.tailMode=h)}function Gm(n,s,o){var u=s.pendingProps,h=u.revealOrder,v=u.tail;if(Un(n,s,u.children,o),u=Zt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Hm(n,o,s);else if(n.tag===19)Hm(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(jt(Zt,u),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(o=s.child,h=null;o!==null;)n=o.alternate,n!==null&&xl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=s.child,s.child=null):(h=o.sibling,o.sibling=null),td(s,!1,h,o,v);break;case"backwards":for(o=null,h=s.child,s.child=null;h!==null;){if(n=h.alternate,n!==null&&xl(n)===null){s.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}td(s,!0,o,null,v);break;case"together":td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function er(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),as|=s.lanes,(o&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,o=Lr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Lr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function J_(n,s,o){switch(s.tag){case 3:Bm(s),Gs();break;case 5:im(s);break;case 1:Gn(s.type)&&ol(s);break;case 4:Iu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,h=s.memoizedProps.value;jt(hl,u._currentValue),u._currentValue=h;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(jt(Zt,Zt.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?Vm(n,s,o):(jt(Zt,Zt.current&1),n=er(n,s,o),n!==null?n.sibling:null);jt(Zt,Zt.current&1);break;case 19:if(u=(o&s.childLanes)!==0,(n.flags&128)!==0){if(u)return Gm(n,s,o);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),jt(Zt,Zt.current),u)break;return null;case 22:case 23:return s.lanes=0,Om(n,s,o)}return er(n,s,o)}var jm,nd,Wm,Xm;jm=function(n,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},nd=function(){},Wm=function(n,s,o,u){var h=n.memoizedProps;if(h!==u){n=s.stateNode,rs(Di.current);var v=null;switch(o){case"input":h=rt(n,h),u=rt(n,u),v=[];break;case"select":h=H({},h,{value:void 0}),u=H({},u,{value:void 0}),v=[];break;case"textarea":h=Dt(n,h),u=Dt(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=rl)}qe(o,u);var A;o=null;for(fe in h)if(!u.hasOwnProperty(fe)&&h.hasOwnProperty(fe)&&h[fe]!=null)if(fe==="style"){var k=h[fe];for(A in k)k.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(a.hasOwnProperty(fe)?v||(v=[]):(v=v||[]).push(fe,null));for(fe in u){var z=u[fe];if(k=h!=null?h[fe]:void 0,u.hasOwnProperty(fe)&&z!==k&&(z!=null||k!=null))if(fe==="style")if(k){for(A in k)!k.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in z)z.hasOwnProperty(A)&&k[A]!==z[A]&&(o||(o={}),o[A]=z[A])}else o||(v||(v=[]),v.push(fe,o)),o=z;else fe==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,k=k?k.__html:void 0,z!=null&&k!==z&&(v=v||[]).push(fe,z)):fe==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(fe,""+z):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(a.hasOwnProperty(fe)?(z!=null&&fe==="onScroll"&&Xt("scroll",n),v||k===z||(v=[])):(v=v||[]).push(fe,z))}o&&(v=v||[]).push("style",o);var fe=v;(s.updateQueue=fe)&&(s.flags|=4)}},Xm=function(n,s,o,u){o!==u&&(s.flags|=4)};function ao(n,s){if(!Yt)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function Q_(n,s,o){var u=s.pendingProps;switch(wu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return Gn(s.type)&&al(),Tn(s),null;case 3:return u=s.stateNode,qs(),qt(Hn),qt(wn),Fu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(dl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,_i!==null&&(hd(_i),_i=null))),nd(n,s),Tn(s),null;case 5:Uu(s);var h=rs(to.current);if(o=s.type,n!==null&&s.stateNode!=null)Wm(n,s,o,u,h),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(n=rs(Di.current),dl(s)){u=s.stateNode,o=s.type;var v=s.memoizedProps;switch(u[Li]=s,u[Ka]=v,n=(s.mode&1)!==0,o){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(h=0;h<qa.length;h++)Xt(qa[h],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":st(u,v),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Xt("invalid",u);break;case"textarea":q(u,v),Xt("invalid",u)}qe(o,v),h=null;for(var A in v)if(v.hasOwnProperty(A)){var k=v[A];A==="children"?typeof k=="string"?u.textContent!==k&&(v.suppressHydrationWarning!==!0&&il(u.textContent,k,n),h=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&il(u.textContent,k,n),h=["children",""+k]):a.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&Xt("scroll",u)}switch(o){case"input":Ze(u),yt(u,v,!0);break;case"textarea":Ze(u),Ct(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=rl)}u=h,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[Li]=s,n[Ka]=u,jm(n,s,!1,!1),s.stateNode=n;e:{switch(A=Ie(o,u),o){case"dialog":Xt("cancel",n),Xt("close",n),h=u;break;case"iframe":case"object":case"embed":Xt("load",n),h=u;break;case"video":case"audio":for(h=0;h<qa.length;h++)Xt(qa[h],n);h=u;break;case"source":Xt("error",n),h=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),h=u;break;case"details":Xt("toggle",n),h=u;break;case"input":st(n,u),h=rt(n,u),Xt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=H({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":q(n,u),h=Dt(n,u),Xt("invalid",n);break;default:h=u}qe(o,h),k=h;for(v in k)if(k.hasOwnProperty(v)){var z=k[v];v==="style"?ge(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&te(n,z)):v==="children"?typeof z=="string"?(o!=="textarea"||z!=="")&&ie(n,z):typeof z=="number"&&ie(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?z!=null&&v==="onScroll"&&Xt("scroll",n):z!=null&&L(n,v,z,A))}switch(o){case"input":Ze(n),yt(n,u,!1);break;case"textarea":Ze(n),Ct(n);break;case"option":u.value!=null&&n.setAttribute("value",""+xe(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Nt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Nt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=rl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(n&&s.stateNode!=null)Xm(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(o=rs(to.current),rs(Di.current),dl(s)){if(u=s.stateNode,o=s.memoizedProps,u[Li]=s,(v=u.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:il(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&il(u.nodeValue,o,(n.mode&1)!==0)}v&&(s.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Li]=s,s.stateNode=u}return Tn(s),null;case 13:if(qt(Zt),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Yp(),Gs(),s.flags|=98560,v=!1;else if(v=dl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Li]=s}else Gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),v=!1}else _i!==null&&(hd(_i),_i=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Zt.current&1)!==0?dn===0&&(dn=3):gd())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return qs(),nd(n,s),n===null&&$a(s.stateNode.containerInfo),Tn(s),null;case 10:return Nu(s.type._context),Tn(s),null;case 17:return Gn(s.type)&&al(),Tn(s),null;case 19:if(qt(Zt),v=s.memoizedState,v===null)return Tn(s),null;if(u=(s.flags&128)!==0,A=v.rendering,A===null)if(u)ao(v,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=xl(n),A!==null){for(s.flags|=128,ao(v,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=o,o=s.child;o!==null;)v=o,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return jt(Zt,Zt.current&1|2),s.child}n=n.sibling}v.tail!==null&&Kt()>Zs&&(s.flags|=128,u=!0,ao(v,!1),s.lanes=4194304)}else{if(!u)if(n=xl(A),n!==null){if(s.flags|=128,u=!0,o=n.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),ao(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Yt)return Tn(s),null}else 2*Kt()-v.renderingStartTime>Zs&&o!==1073741824&&(s.flags|=128,u=!0,ao(v,!1),s.lanes=4194304);v.isBackwards?(A.sibling=s.child,s.child=A):(o=v.last,o!==null?o.sibling=A:s.child=A,v.last=A)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=Kt(),s.sibling=null,o=Zt.current,jt(Zt,u?o&1|2:o&1),s):(Tn(s),null);case 22:case 23:return md(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ei&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ey(n,s){switch(wu(s),s.tag){case 1:return Gn(s.type)&&al(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return qs(),qt(Hn),qt(wn),Fu(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Uu(s),null;case 13:if(qt(Zt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gs()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return qt(Zt),null;case 4:return qs(),null;case 10:return Nu(s.type._context),null;case 22:case 23:return md(),null;case 24:return null;default:return null}}var Tl=!1,An=!1,ty=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ys(n,s){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){nn(n,s,u)}else o.current=null}function id(n,s,o){try{o()}catch(u){nn(n,s,u)}}var qm=!1;function ny(n,s){if(mu=Xo,n=bp(),ou(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var A=0,k=-1,z=-1,fe=0,Te=0,Ae=n,we=null;t:for(;;){for(var je;Ae!==o||h!==0&&Ae.nodeType!==3||(k=A+h),Ae!==v||u!==0&&Ae.nodeType!==3||(z=A+u),Ae.nodeType===3&&(A+=Ae.nodeValue.length),(je=Ae.firstChild)!==null;)we=Ae,Ae=je;for(;;){if(Ae===n)break t;if(we===o&&++fe===h&&(k=A),we===v&&++Te===u&&(z=A),(je=Ae.nextSibling)!==null)break;Ae=we,we=Ae.parentNode}Ae=je}o=k===-1||z===-1?null:{start:k,end:z}}else o=null}o=o||{start:0,end:0}}else o=null;for(gu={focusedElem:n,selectionRange:o},Xo=!1,Xe=s;Xe!==null;)if(s=Xe,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Xe=n;else for(;Xe!==null;){s=Xe;try{var Ye=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var et=Ye.memoizedProps,rn=Ye.memoizedState,ne=s.stateNode,X=ne.getSnapshotBeforeUpdate(s.elementType===s.type?et:yi(s.type,et),rn);ne.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){nn(s,s.return,Pe)}if(n=s.sibling,n!==null){n.return=s.return,Xe=n;break}Xe=s.return}return Ye=qm,qm=!1,Ye}function oo(n,s,o){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&id(s,o,v)}h=h.next}while(h!==u)}}function Al(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==s)}}function rd(n){var s=n.ref;if(s!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof s=="function"?s(n):s.current=n}}function $m(n){var s=n.alternate;s!==null&&(n.alternate=null,$m(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Li],delete s[Ka],delete s[yu],delete s[k_],delete s[B_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Ym(n){return n.tag===5||n.tag===3||n.tag===4}function Km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ym(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function sd(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(n,s):o.insertBefore(n,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(n,o)):(s=o,s.appendChild(n)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rl));else if(u!==4&&(n=n.child,n!==null))for(sd(n,s,o),n=n.sibling;n!==null;)sd(n,s,o),n=n.sibling}function ad(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(ad(n,s,o),n=n.sibling;n!==null;)ad(n,s,o),n=n.sibling}var _n=null,Si=!1;function Ar(n,s,o){for(o=o.child;o!==null;)Zm(n,s,o),o=o.sibling}function Zm(n,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(se,o)}catch{}switch(o.tag){case 5:An||Ys(o,s);case 6:var u=_n,h=Si;_n=null,Ar(n,s,o),_n=u,Si=h,_n!==null&&(Si?(n=_n,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):_n.removeChild(o.stateNode));break;case 18:_n!==null&&(Si?(n=_n,o=o.stateNode,n.nodeType===8?_u(n.parentNode,o):n.nodeType===1&&_u(n,o),Ba(n)):_u(_n,o.stateNode));break;case 4:u=_n,h=Si,_n=o.stateNode.containerInfo,Si=!0,Ar(n,s,o),_n=u,Si=h;break;case 0:case 11:case 14:case 15:if(!An&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&id(o,s,A),h=h.next}while(h!==u)}Ar(n,s,o);break;case 1:if(!An&&(Ys(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(k){nn(o,s,k)}Ar(n,s,o);break;case 21:Ar(n,s,o);break;case 22:o.mode&1?(An=(u=An)||o.memoizedState!==null,Ar(n,s,o),An=u):Ar(n,s,o);break;default:Ar(n,s,o)}}function Jm(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new ty),s.forEach(function(u){var h=dy.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Mi(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var v=n,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:_n=k.stateNode,Si=!1;break e;case 3:_n=k.stateNode.containerInfo,Si=!0;break e;case 4:_n=k.stateNode.containerInfo,Si=!0;break e}k=k.return}if(_n===null)throw Error(t(160));Zm(v,A,h),_n=null,Si=!1;var z=h.alternate;z!==null&&(z.return=null),h.return=null}catch(fe){nn(h,s,fe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Qm(s,n),s=s.sibling}function Qm(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(s,n),Ui(n),u&4){try{oo(3,n,n.return),Al(3,n)}catch(et){nn(n,n.return,et)}try{oo(5,n,n.return)}catch(et){nn(n,n.return,et)}}break;case 1:Mi(s,n),Ui(n),u&512&&o!==null&&Ys(o,o.return);break;case 5:if(Mi(s,n),Ui(n),u&512&&o!==null&&Ys(o,o.return),n.flags&32){var h=n.stateNode;try{ie(h,"")}catch(et){nn(n,n.return,et)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,A=o!==null?o.memoizedProps:v,k=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&Ce(h,v),Ie(k,A);var fe=Ie(k,v);for(A=0;A<z.length;A+=2){var Te=z[A],Ae=z[A+1];Te==="style"?ge(h,Ae):Te==="dangerouslySetInnerHTML"?te(h,Ae):Te==="children"?ie(h,Ae):L(h,Te,Ae,fe)}switch(k){case"input":ut(h,v);break;case"textarea":an(h,v);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var je=v.value;je!=null?Nt(h,!!v.multiple,je,!1):we!==!!v.multiple&&(v.defaultValue!=null?Nt(h,!!v.multiple,v.defaultValue,!0):Nt(h,!!v.multiple,v.multiple?[]:"",!1))}h[Ka]=v}catch(et){nn(n,n.return,et)}}break;case 6:if(Mi(s,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(et){nn(n,n.return,et)}}break;case 3:if(Mi(s,n),Ui(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ba(s.containerInfo)}catch(et){nn(n,n.return,et)}break;case 4:Mi(s,n),Ui(n);break;case 13:Mi(s,n),Ui(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(cd=Kt())),u&4&&Jm(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(An=(fe=An)||Te,Mi(s,n),An=fe):Mi(s,n),Ui(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Te&&(n.mode&1)!==0)for(Xe=n,Te=n.child;Te!==null;){for(Ae=Xe=Te;Xe!==null;){switch(we=Xe,je=we.child,we.tag){case 0:case 11:case 14:case 15:oo(4,we,we.return);break;case 1:Ys(we,we.return);var Ye=we.stateNode;if(typeof Ye.componentWillUnmount=="function"){u=we,o=we.return;try{s=u,Ye.props=s.memoizedProps,Ye.state=s.memoizedState,Ye.componentWillUnmount()}catch(et){nn(u,o,et)}}break;case 5:Ys(we,we.return);break;case 22:if(we.memoizedState!==null){n0(Ae);continue}}je!==null?(je.return=we,Xe=je):n0(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{h=Ae.stateNode,fe?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=Ae.stateNode,z=Ae.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,k.style.display=ce("display",A))}catch(et){nn(n,n.return,et)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=fe?"":Ae.memoizedProps}catch(et){nn(n,n.return,et)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Mi(s,n),Ui(n),u&4&&Jm(n);break;case 21:break;default:Mi(s,n),Ui(n)}}function Ui(n){var s=n.flags;if(s&2){try{e:{for(var o=n.return;o!==null;){if(Ym(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ie(h,""),u.flags&=-33);var v=Km(n);ad(n,v,h);break;case 3:case 4:var A=u.stateNode.containerInfo,k=Km(n);sd(n,k,A);break;default:throw Error(t(161))}}catch(z){nn(n,n.return,z)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function iy(n,s,o){Xe=n,e0(n)}function e0(n,s,o){for(var u=(n.mode&1)!==0;Xe!==null;){var h=Xe,v=h.child;if(h.tag===22&&u){var A=h.memoizedState!==null||Tl;if(!A){var k=h.alternate,z=k!==null&&k.memoizedState!==null||An;k=Tl;var fe=An;if(Tl=A,(An=z)&&!fe)for(Xe=h;Xe!==null;)A=Xe,z=A.child,A.tag===22&&A.memoizedState!==null?i0(h):z!==null?(z.return=A,Xe=z):i0(h);for(;v!==null;)Xe=v,e0(v),v=v.sibling;Xe=h,Tl=k,An=fe}t0(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Xe=v):t0(n)}}function t0(n){for(;Xe!==null;){var s=Xe;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Al(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!An)if(o===null)u.componentDidMount();else{var h=s.elementType===s.type?o.memoizedProps:yi(s.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&nm(s,v,u);break;case 3:var A=s.updateQueue;if(A!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}nm(s,A,o)}break;case 5:var k=s.stateNode;if(o===null&&s.flags&4){o=k;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&o.focus();break;case"img":z.src&&(o.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var fe=s.alternate;if(fe!==null){var Te=fe.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Ba(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&rd(s)}catch(we){nn(s,s.return,we)}}if(s===n){Xe=null;break}if(o=s.sibling,o!==null){o.return=s.return,Xe=o;break}Xe=s.return}}function n0(n){for(;Xe!==null;){var s=Xe;if(s===n){Xe=null;break}var o=s.sibling;if(o!==null){o.return=s.return,Xe=o;break}Xe=s.return}}function i0(n){for(;Xe!==null;){var s=Xe;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{Al(4,s)}catch(z){nn(s,o,z)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var h=s.return;try{u.componentDidMount()}catch(z){nn(s,h,z)}}var v=s.return;try{rd(s)}catch(z){nn(s,v,z)}break;case 5:var A=s.return;try{rd(s)}catch(z){nn(s,A,z)}}}catch(z){nn(s,s.return,z)}if(s===n){Xe=null;break}var k=s.sibling;if(k!==null){k.return=s.return,Xe=k;break}Xe=s.return}}var ry=Math.ceil,Cl=T.ReactCurrentDispatcher,od=T.ReactCurrentOwner,ui=T.ReactCurrentBatchConfig,It=0,mn=null,ln=null,yn=0,ei=0,Ks=Mr(0),dn=0,lo=null,as=0,Rl=0,ld=0,co=null,Wn=null,cd=0,Zs=1/0,tr=null,Nl=!1,ud=null,Cr=null,Pl=!1,Rr=null,Ll=0,uo=0,dd=null,Dl=-1,Il=0;function On(){return(It&6)!==0?Kt():Dl!==-1?Dl:Dl=Kt()}function Nr(n){return(n.mode&1)===0?1:(It&2)!==0&&yn!==0?yn&-yn:V_.transition!==null?(Il===0&&(Il=Ge()),Il):(n=wt,n!==0||(n=window.event,n=n===void 0?16:sp(n.type)),n)}function Ei(n,s,o,u){if(50<uo)throw uo=0,dd=null,Error(t(185));Mt(n,o,u),((It&2)===0||n!==mn)&&(n===mn&&((It&2)===0&&(Rl|=o),dn===4&&Pr(n,yn)),Xn(n,u),o===1&&It===0&&(s.mode&1)===0&&(Zs=Kt()+500,ll&&wr()))}function Xn(n,s){var o=n.callbackNode;Bt(n,s);var u=Gt(n,n===mn?yn:0);if(u===0)o!==null&&Da(o),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(o!=null&&Da(o),s===1)n.tag===0?z_(s0.bind(null,n)):jp(s0.bind(null,n)),O_(function(){(It&6)===0&&wr()}),o=null;else{switch(qi(u)){case 1:o=Ia;break;case 4:o=R;break;case 16:o=Y;break;case 536870912:o=ae;break;default:o=Y}o=h0(o,r0.bind(null,n))}n.callbackPriority=s,n.callbackNode=o}}function r0(n,s){if(Dl=-1,Il=0,(It&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Js()&&n.callbackNode!==o)return null;var u=Gt(n,n===mn?yn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Ul(n,u);else{s=u;var h=It;It|=2;var v=o0();(mn!==n||yn!==s)&&(tr=null,Zs=Kt()+500,ls(n,s));do try{oy();break}catch(k){a0(n,k)}while(!0);Ru(),Cl.current=v,It=h,ln!==null?s=0:(mn=null,yn=0,s=dn)}if(s!==0){if(s===2&&(h=on(n),h!==0&&(u=h,s=fd(n,h))),s===1)throw o=lo,ls(n,0),Pr(n,u),Xn(n,Kt()),o;if(s===6)Pr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!sy(h)&&(s=Ul(n,u),s===2&&(v=on(n),v!==0&&(u=v,s=fd(n,v))),s===1))throw o=lo,ls(n,0),Pr(n,u),Xn(n,Kt()),o;switch(n.finishedWork=h,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:cs(n,Wn,tr);break;case 3:if(Pr(n,u),(u&130023424)===u&&(s=cd+500-Kt(),10<s)){if(Gt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){On(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=vu(cs.bind(null,n,Wn,tr),s);break}cs(n,Wn,tr);break;case 4:if(Pr(n,u),(u&4194240)===u)break;for(s=n.eventTimes,h=-1;0<u;){var A=31-Le(u);v=1<<A,A=s[A],A>h&&(h=A),u&=~v}if(u=h,u=Kt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ry(u/1960))-u,10<u){n.timeoutHandle=vu(cs.bind(null,n,Wn,tr),u);break}cs(n,Wn,tr);break;case 5:cs(n,Wn,tr);break;default:throw Error(t(329))}}}return Xn(n,Kt()),n.callbackNode===o?r0.bind(null,n):null}function fd(n,s){var o=co;return n.current.memoizedState.isDehydrated&&(ls(n,s).flags|=256),n=Ul(n,s),n!==2&&(s=Wn,Wn=o,s!==null&&hd(s)),n}function hd(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function sy(n){for(var s=n;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],v=h.getSnapshot;h=h.value;try{if(!vi(v(),h))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Pr(n,s){for(s&=~ld,s&=~Rl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var o=31-Le(s),u=1<<o;n[o]=-1,s&=~u}}function s0(n){if((It&6)!==0)throw Error(t(327));Js();var s=Gt(n,0);if((s&1)===0)return Xn(n,Kt()),null;var o=Ul(n,s);if(n.tag!==0&&o===2){var u=on(n);u!==0&&(s=u,o=fd(n,u))}if(o===1)throw o=lo,ls(n,0),Pr(n,s),Xn(n,Kt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,cs(n,Wn,tr),Xn(n,Kt()),null}function pd(n,s){var o=It;It|=1;try{return n(s)}finally{It=o,It===0&&(Zs=Kt()+500,ll&&wr())}}function os(n){Rr!==null&&Rr.tag===0&&(It&6)===0&&Js();var s=It;It|=1;var o=ui.transition,u=wt;try{if(ui.transition=null,wt=1,n)return n()}finally{wt=u,ui.transition=o,It=s,(It&6)===0&&wr()}}function md(){ei=Ks.current,qt(Ks)}function ls(n,s){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,U_(o)),ln!==null)for(o=ln.return;o!==null;){var u=o;switch(wu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&al();break;case 3:qs(),qt(Hn),qt(wn),Fu();break;case 5:Uu(u);break;case 4:qs();break;case 13:qt(Zt);break;case 19:qt(Zt);break;case 10:Nu(u.type._context);break;case 22:case 23:md()}o=o.return}if(mn=n,ln=n=Lr(n.current,null),yn=ei=s,dn=0,lo=null,ld=Rl=as=0,Wn=co=null,is!==null){for(s=0;s<is.length;s++)if(o=is[s],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,v=o.pending;if(v!==null){var A=v.next;v.next=h,u.next=A}o.pending=u}is=null}return n}function a0(n,s){do{var o=ln;try{if(Ru(),vl.current=Ml,_l){for(var u=Jt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}_l=!1}if(ss=0,pn=un=Jt=null,no=!1,io=0,od.current=null,o===null||o.return===null){dn=1,lo=s,ln=null;break}e:{var v=n,A=o.return,k=o,z=s;if(s=yn,k.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var fe=z,Te=k,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var je=Pm(A);if(je!==null){je.flags&=-257,Lm(je,A,k,v,s),je.mode&1&&Nm(v,fe,s),s=je,z=fe;var Ye=s.updateQueue;if(Ye===null){var et=new Set;et.add(z),s.updateQueue=et}else Ye.add(z);break e}else{if((s&1)===0){Nm(v,fe,s),gd();break e}z=Error(t(426))}}else if(Yt&&k.mode&1){var rn=Pm(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Lm(rn,A,k,v,s),Au($s(z,k));break e}}v=z=$s(z,k),dn!==4&&(dn=2),co===null?co=[v]:co.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var ne=Cm(v,z,s);tm(v,ne);break e;case 1:k=z;var X=v.type,oe=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Cr===null||!Cr.has(oe)))){v.flags|=65536,s&=-s,v.lanes|=s;var Pe=Rm(v,k,s);tm(v,Pe);break e}}v=v.return}while(v!==null)}c0(o)}catch(it){s=it,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function o0(){var n=Cl.current;return Cl.current=Ml,n===null?Ml:n}function gd(){(dn===0||dn===3||dn===2)&&(dn=4),mn===null||(as&268435455)===0&&(Rl&268435455)===0||Pr(mn,yn)}function Ul(n,s){var o=It;It|=2;var u=o0();(mn!==n||yn!==s)&&(tr=null,ls(n,s));do try{ay();break}catch(h){a0(n,h)}while(!0);if(Ru(),It=o,Cl.current=u,ln!==null)throw Error(t(261));return mn=null,yn=0,dn}function ay(){for(;ln!==null;)l0(ln)}function oy(){for(;ln!==null&&!jo();)l0(ln)}function l0(n){var s=f0(n.alternate,n,ei);n.memoizedProps=n.pendingProps,s===null?c0(n):ln=s,od.current=null}function c0(n){var s=n;do{var o=s.alternate;if(n=s.return,(s.flags&32768)===0){if(o=Q_(o,s,ei),o!==null){ln=o;return}}else{if(o=ey(o,s),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,ln=null;return}}if(s=s.sibling,s!==null){ln=s;return}ln=s=n}while(s!==null);dn===0&&(dn=5)}function cs(n,s,o){var u=wt,h=ui.transition;try{ui.transition=null,wt=1,ly(n,s,o,u)}finally{ui.transition=h,wt=u}return null}function ly(n,s,o,u){do Js();while(Rr!==null);if((It&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=o.lanes|o.childLanes;if(zn(n,v),n===mn&&(ln=mn=null,yn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Pl||(Pl=!0,h0(Y,function(){return Js(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=ui.transition,ui.transition=null;var A=wt;wt=1;var k=It;It|=4,od.current=null,ny(n,o),Qm(o,n),C_(gu),Xo=!!mu,gu=mu=null,n.current=o,iy(o),$c(),It=k,wt=A,ui.transition=v}else n.current=o;if(Pl&&(Pl=!1,Rr=n,Ll=h),v=n.pendingLanes,v===0&&(Cr=null),We(o.stateNode),Xn(n,Kt()),s!==null)for(u=n.onRecoverableError,o=0;o<s.length;o++)h=s[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Nl)throw Nl=!1,n=ud,ud=null,n;return(Ll&1)!==0&&n.tag!==0&&Js(),v=n.pendingLanes,(v&1)!==0?n===dd?uo++:(uo=0,dd=n):uo=0,wr(),null}function Js(){if(Rr!==null){var n=qi(Ll),s=ui.transition,o=wt;try{if(ui.transition=null,wt=16>n?16:n,Rr===null)var u=!1;else{if(n=Rr,Rr=null,Ll=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,Xe=n.current;Xe!==null;){var v=Xe,A=v.child;if((Xe.flags&16)!==0){var k=v.deletions;if(k!==null){for(var z=0;z<k.length;z++){var fe=k[z];for(Xe=fe;Xe!==null;){var Te=Xe;switch(Te.tag){case 0:case 11:case 15:oo(8,Te,v)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Xe=Ae;else for(;Xe!==null;){Te=Xe;var we=Te.sibling,je=Te.return;if($m(Te),Te===fe){Xe=null;break}if(we!==null){we.return=je,Xe=we;break}Xe=je}}}var Ye=v.alternate;if(Ye!==null){var et=Ye.child;if(et!==null){Ye.child=null;do{var rn=et.sibling;et.sibling=null,et=rn}while(et!==null)}}Xe=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Xe=A;else e:for(;Xe!==null;){if(v=Xe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:oo(9,v,v.return)}var ne=v.sibling;if(ne!==null){ne.return=v.return,Xe=ne;break e}Xe=v.return}}var X=n.current;for(Xe=X;Xe!==null;){A=Xe;var oe=A.child;if((A.subtreeFlags&2064)!==0&&oe!==null)oe.return=A,Xe=oe;else e:for(A=X;Xe!==null;){if(k=Xe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Al(9,k)}}catch(it){nn(k,k.return,it)}if(k===A){Xe=null;break e}var Pe=k.sibling;if(Pe!==null){Pe.return=k.return,Xe=Pe;break e}Xe=k.return}}if(It=h,wr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(se,n)}catch{}u=!0}return u}finally{wt=o,ui.transition=s}}return!1}function u0(n,s,o){s=$s(o,s),s=Cm(n,s,1),n=Tr(n,s,1),s=On(),n!==null&&(Mt(n,1,s),Xn(n,s))}function nn(n,s,o){if(n.tag===3)u0(n,n,o);else for(;s!==null;){if(s.tag===3){u0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cr===null||!Cr.has(u))){n=$s(o,n),n=Rm(s,n,1),s=Tr(s,n,1),n=On(),s!==null&&(Mt(s,1,n),Xn(s,n));break}}s=s.return}}function cy(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),s=On(),n.pingedLanes|=n.suspendedLanes&o,mn===n&&(yn&o)===o&&(dn===4||dn===3&&(yn&130023424)===yn&&500>Kt()-cd?ls(n,0):ld|=o),Xn(n,s)}function d0(n,s){s===0&&((n.mode&1)===0?s=1:(s=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var o=On();n=Ji(n,s),n!==null&&(Mt(n,s,o),Xn(n,o))}function uy(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),d0(n,o)}function dy(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),d0(n,o)}var f0;f0=function(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps||Hn.current)jn=!0;else{if((n.lanes&o)===0&&(s.flags&128)===0)return jn=!1,J_(n,s,o);jn=(n.flags&131072)!==0}else jn=!1,Yt&&(s.flags&1048576)!==0&&Wp(s,ul,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;bl(n,s),n=s.pendingProps;var h=zs(s,wn.current);Xs(s,o),h=zu(null,s,u,n,h,o);var v=Vu();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(u)?(v=!0,ol(s)):v=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Du(s),h.updater=El,s.stateNode=h,h._reactInternals=s,qu(s,u,n,o),s=Zu(null,s,u,!0,v,o)):(s.tag=0,Yt&&v&&Eu(s),Un(null,s,h,o),s=s.child),s;case 16:u=s.elementType;e:{switch(bl(n,s),n=s.pendingProps,h=u._init,u=h(u._payload),s.type=u,h=s.tag=hy(u),n=yi(u,n),h){case 0:s=Ku(null,s,u,n,o);break e;case 1:s=km(null,s,u,n,o);break e;case 11:s=Dm(null,s,u,n,o);break e;case 14:s=Im(null,s,u,yi(u.type,n),o);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Ku(n,s,u,h,o);case 1:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),km(n,s,u,h,o);case 3:e:{if(Bm(s),n===null)throw Error(t(387));u=s.pendingProps,v=s.memoizedState,h=v.element,em(n,s),gl(s,u,null,o);var A=s.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){h=$s(Error(t(423)),s),s=zm(n,s,u,o,h);break e}else if(u!==h){h=$s(Error(t(424)),s),s=zm(n,s,u,o,h);break e}else for(Qn=Sr(s.stateNode.containerInfo.firstChild),Jn=s,Yt=!0,_i=null,o=Jp(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Gs(),u===h){s=er(n,s,o);break e}Un(n,s,u,o)}s=s.child}return s;case 5:return im(s),n===null&&Tu(s),u=s.type,h=s.pendingProps,v=n!==null?n.memoizedProps:null,A=h.children,xu(u,h)?A=null:v!==null&&xu(u,v)&&(s.flags|=32),Fm(n,s),Un(n,s,A,o),s.child;case 6:return n===null&&Tu(s),null;case 13:return Vm(n,s,o);case 4:return Iu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=js(s,null,u,o):Un(n,s,u,o),s.child;case 11:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Dm(n,s,u,h,o);case 7:return Un(n,s,s.pendingProps,o),s.child;case 8:return Un(n,s,s.pendingProps.children,o),s.child;case 12:return Un(n,s,s.pendingProps.children,o),s.child;case 10:e:{if(u=s.type._context,h=s.pendingProps,v=s.memoizedProps,A=h.value,jt(hl,u._currentValue),u._currentValue=A,v!==null)if(vi(v.value,A)){if(v.children===h.children&&!Hn.current){s=er(n,s,o);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var k=v.dependencies;if(k!==null){A=v.child;for(var z=k.firstContext;z!==null;){if(z.context===u){if(v.tag===1){z=Qi(-1,o&-o),z.tag=2;var fe=v.updateQueue;if(fe!==null){fe=fe.shared;var Te=fe.pending;Te===null?z.next=z:(z.next=Te.next,Te.next=z),fe.pending=z}}v.lanes|=o,z=v.alternate,z!==null&&(z.lanes|=o),Pu(v.return,o,s),k.lanes|=o;break}z=z.next}}else if(v.tag===10)A=v.type===s.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=o,k=A.alternate,k!==null&&(k.lanes|=o),Pu(A,o,s),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===s){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Un(n,s,h.children,o),s=s.child}return s;case 9:return h=s.type,u=s.pendingProps.children,Xs(s,o),h=li(h),u=u(h),s.flags|=1,Un(n,s,u,o),s.child;case 14:return u=s.type,h=yi(u,s.pendingProps),h=yi(u.type,h),Im(n,s,u,h,o);case 15:return Um(n,s,s.type,s.pendingProps,o);case 17:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),bl(n,s),s.tag=1,Gn(u)?(n=!0,ol(s)):n=!1,Xs(s,o),Tm(s,u,h),qu(s,u,h,o),Zu(null,s,u,!0,n,o);case 19:return Gm(n,s,o);case 22:return Om(n,s,o)}throw Error(t(156,s.tag))};function h0(n,s){return Zr(n,s)}function fy(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,s,o,u){return new fy(n,s,o,u)}function xd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function hy(n){if(typeof n=="function")return xd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===K)return 14}return 2}function Lr(n,s){var o=n.alternate;return o===null?(o=di(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ol(n,s,o,u,h,v){var A=2;if(u=n,typeof n=="function")xd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case F:return us(o.children,h,v,s);case b:A=8,h|=8;break;case O:return n=di(12,o,s,h|2),n.elementType=O,n.lanes=v,n;case ue:return n=di(13,o,s,h),n.elementType=ue,n.lanes=v,n;case me:return n=di(19,o,s,h),n.elementType=me,n.lanes=v,n;case ee:return Fl(o,h,v,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case B:A=9;break e;case J:A=11;break e;case K:A=14;break e;case pe:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=di(A,o,s,h),s.elementType=n,s.type=u,s.lanes=v,s}function us(n,s,o,u){return n=di(7,n,u,s),n.lanes=o,n}function Fl(n,s,o,u){return n=di(22,n,u,s),n.elementType=ee,n.lanes=o,n.stateNode={isHidden:!1},n}function vd(n,s,o){return n=di(6,n,null,s),n.lanes=o,n}function _d(n,s,o){return s=di(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function py(n,s,o,u,h){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function yd(n,s,o,u,h,v,A,k,z){return n=new py(n,s,o,k,z),s===1?(s=1,v===!0&&(s|=8)):s=0,v=di(3,null,null,s),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(v),n}function my(n,s,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:s,implementation:o}}function p0(n){if(!n)return Er;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return Hp(n,o,s)}return s}function m0(n,s,o,u,h,v,A,k,z){return n=yd(o,u,!0,n,h,v,A,k,z),n.context=p0(null),o=n.current,u=On(),h=Nr(o),v=Qi(u,h),v.callback=s??null,Tr(o,v,h),n.current.lanes=h,Mt(n,h,u),Xn(n,u),n}function kl(n,s,o,u){var h=s.current,v=On(),A=Nr(h);return o=p0(o),s.context===null?s.context=o:s.pendingContext=o,s=Qi(v,A),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Tr(h,s,A),n!==null&&(Ei(n,h,A,v),ml(n,h,A)),A}function Bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function g0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Sd(n,s){g0(n,s),(n=n.alternate)&&g0(n,s)}function gy(){return null}var x0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Md(n){this._internalRoot=n}zl.prototype.render=Md.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));kl(n,s,null,null)},zl.prototype.unmount=Md.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;os(function(){kl(null,n,null,null)}),s[$i]=null}};function zl(n){this._internalRoot=n}zl.prototype.unstable_scheduleHydration=function(n){if(n){var s=zt();n={blockedOn:null,target:n,priority:s};for(var o=0;o<vr.length&&s!==0&&s<vr[o].priority;o++);vr.splice(o,0,n),o===0&&ip(n)}};function Ed(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Vl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function v0(){}function xy(n,s,o,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var fe=Bl(A);v.call(fe)}}var A=m0(s,u,n,0,null,!1,!1,"",v0);return n._reactRootContainer=A,n[$i]=A.current,$a(n.nodeType===8?n.parentNode:n),os(),A}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var k=u;u=function(){var fe=Bl(z);k.call(fe)}}var z=yd(n,0,!1,null,null,!1,!1,"",v0);return n._reactRootContainer=z,n[$i]=z.current,$a(n.nodeType===8?n.parentNode:n),os(function(){kl(s,z,o,u)}),z}function Hl(n,s,o,u,h){var v=o._reactRootContainer;if(v){var A=v;if(typeof h=="function"){var k=h;h=function(){var z=Bl(A);k.call(z)}}kl(s,A,n,h)}else A=xy(o,s,n,h,u);return Bl(A)}Ft=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var o=Pt(s.pendingLanes);o!==0&&(Vn(s,o|1),Xn(s,Kt()),(It&6)===0&&(Zs=Kt()+500,wr()))}break;case 13:os(function(){var u=Ji(n,1);if(u!==null){var h=On();Ei(u,n,1,h)}}),Sd(n,1)}},Wt=function(n){if(n.tag===13){var s=Ji(n,134217728);if(s!==null){var o=On();Ei(s,n,134217728,o)}Sd(n,134217728)}},gi=function(n){if(n.tag===13){var s=Nr(n),o=Ji(n,s);if(o!==null){var u=On();Ei(o,n,s,u)}Sd(n,s)}},zt=function(){return wt},xi=function(n,s){var o=wt;try{return wt=n,s()}finally{wt=o}},ot=function(n,s,o){switch(s){case"input":if(ut(n,o),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var h=sl(u);if(!h)throw Error(t(90));ht(u),ut(u,h)}}}break;case"textarea":an(n,o);break;case"select":s=o.value,s!=null&&Nt(n,!!o.multiple,s,!1)}},ze=pd,Ee=os;var vy={usingClientEntryPoint:!1,Events:[Za,ks,sl,ye,ke,pd]},fo={findFiberByHostInstance:Qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_y={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Kr(n),n===null?null:n.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Gl.isDisabled&&Gl.supportsFiber)try{se=Gl.inject(_y),Ue=Gl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy,qn.createPortal=function(n,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ed(s))throw Error(t(200));return my(n,s,null,o)},qn.createRoot=function(n,s){if(!Ed(n))throw Error(t(299));var o=!1,u="",h=x0;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=yd(n,1,!1,null,null,o,!1,u,h),n[$i]=s.current,$a(n.nodeType===8?n.parentNode:n),new Md(s)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Kr(s),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return os(n)},qn.hydrate=function(n,s,o){if(!Vl(s))throw Error(t(200));return Hl(null,n,s,!0,o)},qn.hydrateRoot=function(n,s,o){if(!Ed(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,v="",A=x0;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),s=m0(s,null,n,1,o??null,h,!1,v,A),n[$i]=s.current,$a(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,h]:s.mutableSourceEagerHydrationData.push(o,h);return new zl(s)},qn.render=function(n,s,o){if(!Vl(s))throw Error(t(200));return Hl(null,n,s,!1,o)},qn.unmountComponentAtNode=function(n){if(!Vl(n))throw Error(t(40));return n._reactRootContainer?(os(function(){Hl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},qn.unstable_batchedUpdates=pd,qn.unstable_renderSubtreeIntoContainer=function(n,s,o,u){if(!Vl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Hl(n,s,o,!1,u)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var T0;function fx(){if(T0)return Td.exports;T0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Td.exports=Cy(),Td.exports}var A0;function Ry(){if(A0)return jl;A0=1;var i=fx();return jl.createRoot=i.createRoot,jl.hydrateRoot=i.hydrateRoot,jl}var Ny=Ry();const Py=ux(Ny);fx();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},To.apply(null,arguments)}var Hr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Hr||(Hr={}));const C0="popstate";function Ly(i){i===void 0&&(i={});function e(a,l){let{pathname:c="/",search:d="",hash:f=""}=As(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),vf("",{pathname:c,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let f=a.location.href,p=f.indexOf("#");d=p===-1?f:f.slice(0,p)}return d+"#"+(typeof l=="string"?l:Ec(l))}function r(a,l){yh(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Iy(e,t,r,i)}function en(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function yh(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Dy(){return Math.random().toString(36).substr(2,8)}function R0(i,e){return{usr:i.state,key:i.key,idx:e}}function vf(i,e,t,r){return t===void 0&&(t=null),To({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:t,key:e&&e.key||r||Dy()})}function Ec(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function Iy(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,d=Hr.Pop,f=null,p=g();p==null&&(p=0,c.replaceState(To({},c.state,{idx:p}),""));function g(){return(c.state||{idx:null}).idx}function _(){d=Hr.Pop;let S=g(),y=S==null?null:S-p;p=S,f&&f({action:d,location:C.location,delta:y})}function x(S,y){d=Hr.Push;let N=vf(C.location,S,y);t&&t(N,S),p=g()+1;let L=R0(N,p),T=C.createHref(N);try{c.pushState(L,"",T)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(T)}l&&f&&f({action:d,location:C.location,delta:1})}function M(S,y){d=Hr.Replace;let N=vf(C.location,S,y);t&&t(N,S),p=g();let L=R0(N,p),T=C.createHref(N);c.replaceState(L,"",T),l&&f&&f({action:d,location:C.location,delta:0})}function w(S){let y=a.location.origin!=="null"?a.location.origin:a.location.href,N=typeof S=="string"?S:Ec(S);return N=N.replace(/ $/,"%20"),en(y,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,y)}let C={get action(){return d},get location(){return i(a,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(C0,_),f=S,()=>{a.removeEventListener(C0,_),f=null}},createHref(S){return e(a,S)},createURL:w,encodeLocation(S){let y=w(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:x,replace:M,go(S){return c.go(S)}};return C}var N0;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(N0||(N0={}));function Uy(i,e,t){return t===void 0&&(t="/"),Oy(i,e,t)}function Oy(i,e,t,r){let a=typeof e=="string"?As(e):e,l=va(a.pathname||"/",t);if(l==null)return null;let c=hx(i);Fy(c);let d=null,f=$y(l);for(let p=0;d==null&&p<c.length;++p)d=Xy(c[p],f);return d}function hx(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&(en(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=jr([r,f.relativePath]),g=t.concat(f);l.children&&l.children.length>0&&(en(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),hx(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:jy(p,l.index),routesMeta:g})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let f of px(l.path))a(l,c,f)}),e}function px(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=px(r.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),a&&d.push(...c),d.map(f=>i.startsWith("/")&&f===""?"/":f)}function Fy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Wy(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const ky=/^:[\w-]+$/,By=3,zy=2,Vy=1,Hy=10,Gy=-2,P0=i=>i==="*";function jy(i,e){let t=i.split("/"),r=t.length;return t.some(P0)&&(r+=Gy),e&&(r+=zy),t.filter(a=>!P0(a)).reduce((a,l)=>a+(ky.test(l)?By:l===""?Vy:Hy),r)}function Wy(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function Xy(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let d=0;d<r.length;++d){let f=r[d],p=d===r.length-1,g=l==="/"?e:e.slice(l.length)||"/",_=_f({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},g),x=f.route;if(!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:jr([l,_.pathname]),pathnameBase:Zy(jr([l,_.pathnameBase])),route:x}),_.pathnameBase!=="/"&&(l=jr([l,_.pathnameBase]))}return c}function _f(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=qy(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((p,g,_)=>{let{paramName:x,isOptional:M}=g;if(x==="*"){let C=d[_]||"";c=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const w=d[_];return M&&!w?p[x]=void 0:p[x]=(w||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function qy(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),yh(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function $y(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return yh(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function va(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function Yy(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?As(i):i,l;return t?(t=mx(t),t.startsWith("/")?l=L0(t.substring(1),"/"):l=L0(t,e)):l=e,{pathname:l,search:Jy(r),hash:Qy(a)}}function L0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Rd(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ky(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Sh(i,e){let t=Ky(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Mh(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=As(i):(a=To({},i),en(!a.pathname||!a.pathname.includes("?"),Rd("?","pathname","search",a)),en(!a.pathname||!a.pathname.includes("#"),Rd("#","pathname","hash",a)),en(!a.search||!a.search.includes("#"),Rd("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let _=e.length-1;if(!r&&c.startsWith("..")){let x=c.split("/");for(;x[0]==="..";)x.shift(),_-=1;a.pathname=x.join("/")}d=_>=0?e[_]:"/"}let f=Yy(a,d),p=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||g)&&(f.pathname+="/"),f}const mx=i=>i.replace(/\/\/+/g,"/"),jr=i=>mx(i.join("/")),Zy=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Jy=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Qy=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function eS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const gx=["post","put","patch","delete"];new Set(gx);const tS=["get",...gx];new Set(tS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ao.apply(null,arguments)}const Uc=he.createContext(null),xx=he.createContext(null),hr=he.createContext(null),Oc=he.createContext(null),pr=he.createContext({outlet:null,matches:[],isDataRoute:!1}),vx=he.createContext(null);function nS(i,e){let{relative:t}=e===void 0?{}:e;wa()||en(!1);let{basename:r,navigator:a}=he.useContext(hr),{hash:l,pathname:c,search:d}=Fc(i,{relative:t}),f=c;return r!=="/"&&(f=c==="/"?r:jr([r,c])),a.createHref({pathname:f,search:d,hash:l})}function wa(){return he.useContext(Oc)!=null}function ba(){return wa()||en(!1),he.useContext(Oc).location}function _x(i){he.useContext(hr).static||he.useLayoutEffect(i)}function Eh(){let{isDataRoute:i}=he.useContext(pr);return i?xS():iS()}function iS(){wa()||en(!1);let i=he.useContext(Uc),{basename:e,future:t,navigator:r}=he.useContext(hr),{matches:a}=he.useContext(pr),{pathname:l}=ba(),c=JSON.stringify(Sh(a,t.v7_relativeSplatPath)),d=he.useRef(!1);return _x(()=>{d.current=!0}),he.useCallback(function(p,g){if(g===void 0&&(g={}),!d.current)return;if(typeof p=="number"){r.go(p);return}let _=Mh(p,JSON.parse(c),l,g.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:jr([e,_.pathname])),(g.replace?r.replace:r.push)(_,g.state,g)},[e,r,c,l,i])}const rS=he.createContext(null);function sS(i){let e=he.useContext(pr).outlet;return e&&he.createElement(rS.Provider,{value:i},e)}function Fc(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=he.useContext(hr),{matches:a}=he.useContext(pr),{pathname:l}=ba(),c=JSON.stringify(Sh(a,r.v7_relativeSplatPath));return he.useMemo(()=>Mh(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function aS(i,e){return oS(i,e)}function oS(i,e,t,r){wa()||en(!1);let{navigator:a}=he.useContext(hr),{matches:l}=he.useContext(pr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let p=ba(),g;if(e){var _;let S=typeof e=="string"?As(e):e;f==="/"||(_=S.pathname)!=null&&_.startsWith(f)||en(!1),g=S}else g=p;let x=g.pathname||"/",M=x;if(f!=="/"){let S=f.replace(/^\//,"").split("/");M="/"+x.replace(/^\//,"").split("/").slice(S.length).join("/")}let w=Uy(i,{pathname:M}),C=fS(w&&w.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:jr([f,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:jr([f,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return e&&C?he.createElement(Oc.Provider,{value:{location:Ao({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Hr.Pop}},C):C}function lS(){let i=gS(),e=eS(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return he.createElement(he.Fragment,null,he.createElement("h2",null,"Unexpected Application Error!"),he.createElement("h3",{style:{fontStyle:"italic"}},e),t?he.createElement("pre",{style:a},t):null,null)}const cS=he.createElement(lS,null);class uS extends he.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?he.createElement(pr.Provider,{value:this.props.routeContext},he.createElement(vx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dS(i){let{routeContext:e,match:t,children:r}=i,a=he.useContext(Uc);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),he.createElement(pr.Provider,{value:e},r)}function fS(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=(a=t)==null?void 0:a.errors;if(d!=null){let g=c.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);g>=0||en(!1),c=c.slice(0,Math.min(c.length,g+1))}let f=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let g=0;g<c.length;g++){let _=c[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:x,errors:M}=t,w=_.route.loader&&x[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||w){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((g,_,x)=>{let M,w=!1,C=null,S=null;t&&(M=d&&_.route.id?d[_.route.id]:void 0,C=_.route.errorElement||cS,f&&(p<0&&x===0?(vS("route-fallback"),w=!0,S=null):p===x&&(w=!0,S=_.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,x+1)),N=()=>{let L;return M?L=C:w?L=S:_.route.Component?L=he.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=g,he.createElement(dS,{match:_,routeContext:{outlet:g,matches:y,isDataRoute:t!=null},children:L})};return t&&(_.route.ErrorBoundary||_.route.errorElement||x===0)?he.createElement(uS,{location:t.location,revalidation:t.revalidation,component:C,error:M,children:N(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):N()},null)}var yx=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(yx||{}),Sx=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Sx||{});function hS(i){let e=he.useContext(Uc);return e||en(!1),e}function pS(i){let e=he.useContext(xx);return e||en(!1),e}function mS(i){let e=he.useContext(pr);return e||en(!1),e}function Mx(i){let e=mS(),t=e.matches[e.matches.length-1];return t.route.id||en(!1),t.route.id}function gS(){var i;let e=he.useContext(vx),t=pS(),r=Mx();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function xS(){let{router:i}=hS(yx.UseNavigateStable),e=Mx(Sx.UseNavigateStable),t=he.useRef(!1);return _x(()=>{t.current=!0}),he.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Ao({fromRouteId:e},l)))},[i,e])}const D0={};function vS(i,e,t){D0[i]||(D0[i]=!0)}function _S(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function yf(i){let{to:e,replace:t,state:r,relative:a}=i;wa()||en(!1);let{future:l,static:c}=he.useContext(hr),{matches:d}=he.useContext(pr),{pathname:f}=ba(),p=Eh(),g=Mh(e,Sh(d,l.v7_relativeSplatPath),f,a==="path"),_=JSON.stringify(g);return he.useEffect(()=>p(JSON.parse(_),{replace:t,state:r,relative:a}),[p,_,a,t,r]),null}function yS(i){return sS(i.context)}function Ai(i){en(!1)}function SS(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Hr.Pop,navigator:l,static:c=!1,future:d}=i;wa()&&en(!1);let f=e.replace(/^\/*/,"/"),p=he.useMemo(()=>({basename:f,navigator:l,static:c,future:Ao({v7_relativeSplatPath:!1},d)}),[f,d,l,c]);typeof r=="string"&&(r=As(r));let{pathname:g="/",search:_="",hash:x="",state:M=null,key:w="default"}=r,C=he.useMemo(()=>{let S=va(g,f);return S==null?null:{location:{pathname:S,search:_,hash:x,state:M,key:w},navigationType:a}},[f,g,_,x,M,w,a]);return C==null?null:he.createElement(hr.Provider,{value:p},he.createElement(Oc.Provider,{children:t,value:C}))}function MS(i){let{children:e,location:t}=i;return aS(Sf(e),t)}new Promise(()=>{});function Sf(i,e){e===void 0&&(e=[]);let t=[];return he.Children.forEach(i,(r,a)=>{if(!he.isValidElement(r))return;let l=[...e,a];if(r.type===he.Fragment){t.push.apply(t,Sf(r.props.children,l));return}r.type!==Ai&&en(!1),!r.props.index||!r.props.children||en(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Sf(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wc(){return wc=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},wc.apply(null,arguments)}function Ex(i,e){if(i==null)return{};var t={};for(var r in i)if({}.hasOwnProperty.call(i,r)){if(e.indexOf(r)!==-1)continue;t[r]=i[r]}return t}function ES(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function wS(i,e){return i.button===0&&(!e||e==="_self")&&!ES(i)}const bS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],TS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],AS="6";try{window.__reactRouterVersion=AS}catch{}const CS=he.createContext({isTransitioning:!1}),RS="startTransition",I0=by[RS];function NS(i){let{basename:e,children:t,future:r,window:a}=i,l=he.useRef();l.current==null&&(l.current=Ly({window:a,v5Compat:!0}));let c=l.current,[d,f]=he.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},g=he.useCallback(_=>{p&&I0?I0(()=>f(_)):f(_)},[f,p]);return he.useLayoutEffect(()=>c.listen(g),[c,g]),he.useEffect(()=>_S(r),[r]),he.createElement(SS,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:r})}const PS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",LS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,DS=he.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:d,target:f,to:p,preventScrollReset:g,viewTransition:_}=e,x=Ex(e,bS),{basename:M}=he.useContext(hr),w,C=!1;if(typeof p=="string"&&LS.test(p)&&(w=p,PS))try{let L=new URL(window.location.href),T=p.startsWith("//")?new URL(L.protocol+p):new URL(p),I=va(T.pathname,M);T.origin===L.origin&&I!=null?p=I+T.search+T.hash:C=!0}catch{}let S=nS(p,{relative:a}),y=US(p,{replace:c,state:d,target:f,preventScrollReset:g,relative:a,viewTransition:_});function N(L){r&&r(L),L.defaultPrevented||y(L)}return he.createElement("a",wc({},x,{href:w||S,onClick:C||l?r:N,ref:t,target:f}))}),Mo=he.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:c=!1,style:d,to:f,viewTransition:p,children:g}=e,_=Ex(e,TS),x=Fc(f,{relative:_.relative}),M=ba(),w=he.useContext(xx),{navigator:C,basename:S}=he.useContext(hr),y=w!=null&&OS(x)&&p===!0,N=C.encodeLocation?C.encodeLocation(x).pathname:x.pathname,L=M.pathname,T=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(L=L.toLowerCase(),T=T?T.toLowerCase():null,N=N.toLowerCase()),T&&S&&(T=va(T,S)||T);const I=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let P=L===N||!c&&L.startsWith(N)&&L.charAt(I)==="/",F=T!=null&&(T===N||!c&&T.startsWith(N)&&T.charAt(N.length)==="/"),b={isActive:P,isPending:F,isTransitioning:y},O=P?r:void 0,V;typeof l=="function"?V=l(b):V=[l,P?"active":null,F?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let B=typeof d=="function"?d(b):d;return he.createElement(DS,wc({},_,{"aria-current":O,className:V,ref:t,style:B,to:f,viewTransition:p}),typeof g=="function"?g(b):g)});var Mf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Mf||(Mf={}));var U0;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(U0||(U0={}));function IS(i){let e=he.useContext(Uc);return e||en(!1),e}function US(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,f=Eh(),p=ba(),g=Fc(i,{relative:c});return he.useCallback(_=>{if(wS(_,t)){_.preventDefault();let x=r!==void 0?r:Ec(p)===Ec(g);f(i,{replace:x,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[p,f,g,r,a,t,i,l,c,d])}function OS(i,e){e===void 0&&(e={});let t=he.useContext(CS);t==null&&en(!1);let{basename:r}=IS(Mf.useViewTransitionState),a=Fc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=va(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=va(t.nextLocation.pathname,r)||t.nextLocation.pathname;return _f(a.pathname,c)!=null||_f(a.pathname,l)!=null}function wx(i,e){return function(){return i.apply(e,arguments)}}const{toString:FS}=Object.prototype,{getPrototypeOf:_a}=Object,{iterator:Lo,toStringTag:bx}=Symbol,bc=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Co=(i,e)=>{let t=i;const r=[];for(;t!=null&&t!==Object.prototype;){if(r.indexOf(t)!==-1)return!1;if(r.push(t),bc(t,e))return!0;t=_a(t)}return!1},kS=(i,e)=>i!=null&&Co(i,e)?i[e]:void 0,wh=(i=>e=>{const t=FS.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),mi=i=>(i=i.toLowerCase(),e=>wh(e)===i),kc=i=>e=>typeof e===i,{isArray:Ms}=Array,Es=kc("undefined");function Ta(i){return i!==null&&!Es(i)&&i.constructor!==null&&!Es(i.constructor)&&Yn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Tx=mi("ArrayBuffer");function BS(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Tx(i.buffer),e}const zS=kc("string"),Yn=kc("function"),Ax=kc("number"),Aa=i=>i!==null&&typeof i=="object",VS=i=>i===!0||i===!1,pc=i=>{if(!Aa(i))return!1;const e=_a(i);return(e===null||e===Object.prototype||_a(e)===null)&&!Co(i,bx)&&!Co(i,Lo)},HS=i=>{if(!Aa(i)||Ta(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},GS=mi("Date"),jS=mi("File"),WS=i=>!!(i&&typeof i.uri<"u"),XS=i=>i&&typeof i.getParts<"u",qS=mi("Blob"),$S=mi("FileList"),YS=mi("Set"),KS=i=>Aa(i)&&Yn(i.pipe);function ZS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const O0=ZS(),F0=typeof O0.FormData<"u"?O0.FormData:void 0,JS=i=>{if(!i)return!1;if(F0&&i instanceof F0)return!0;const e=_a(i);if(!e||e===Object.prototype||!Yn(i.append))return!1;const t=wh(i);return t==="formdata"||t==="object"&&Yn(i.toString)&&i.toString()==="[object FormData]"},QS=mi("URLSearchParams"),[e1,t1,n1,i1]=["ReadableStream","Request","Response","Headers"].map(mi),r1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Do(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,a;if(typeof i!="object"&&(i=[i]),Ms(i))for(r=0,a=i.length;r<a;r++)e.call(null,i[r],r,i);else{if(Ta(i))return;const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let d;for(r=0;r<c;r++)d=l[r],e.call(null,i[d],d,i)}}function Cx(i,e){if(Ta(i))return null;e=e.toLowerCase();const t=Object.keys(i);let r=t.length,a;for(;r-- >0;)if(a=t[r],e===a.toLowerCase())return a;return null}const vs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rx=i=>!Es(i)&&i!==vs;function Ef(...i){const{caseless:e,skipUndefined:t}=Rx(this)&&this||{},r={},a=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const d=e&&typeof c=="string"&&Cx(r,c)||c,f=bc(r,d)?r[d]:void 0;pc(f)&&pc(l)?r[d]=Ef(f,l):pc(l)?r[d]=Ef({},l):Ms(l)?r[d]=l.slice():(!t||!Es(l))&&(r[d]=l)};for(let l=0,c=i.length;l<c;l++){const d=i[l];if(!d||Ta(d)||(Do(d,a),typeof d!="object"||Ms(d)))continue;const f=Object.getOwnPropertySymbols(d);for(let p=0;p<f.length;p++){const g=f[p];g1.call(d,g)&&a(d[g],g)}}return r}const s1=(i,e,t,{allOwnKeys:r}={})=>(Do(e,(a,l)=>{t&&Yn(a)?Object.defineProperty(i,l,{__proto__:null,value:wx(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),i),a1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),o1=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},l1=(i,e,t,r)=>{let a,l,c;const d={};if(e=e||{},i==null)return e;do{for(a=Object.getOwnPropertyNames(i),l=a.length;l-- >0;)c=a[l],(!r||r(c,i,e))&&!d[c]&&(e[c]=i[c],d[c]=!0);i=t!==!1&&_a(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},c1=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},u1=i=>{if(!i)return null;if(Ms(i))return i;let e=i.length;if(!Ax(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},d1=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&_a(Uint8Array)),f1=(i,e)=>{const r=(i&&i[Lo]).call(i);let a;for(;(a=r.next())&&!a.done;){const l=a.value;e.call(i,l[0],l[1])}},h1=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},p1=mi("HTMLFormElement"),m1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),{propertyIsEnumerable:g1}=Object.prototype,x1=mi("RegExp"),Nx=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};Do(t,(a,l)=>{let c;(c=e(a,l,i))!==!1&&(r[l]=c||a)}),Object.defineProperties(i,r)},v1=i=>{Nx(i,(e,t)=>{if(Yn(i)&&["arguments","caller","callee"].includes(t))return!1;const r=i[t];if(Yn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},_1=(i,e)=>{const t={},r=a=>{a.forEach(l=>{t[l]=!0})};return Ms(i)?r(i):r(String(i).split(e)),t},y1=()=>{},S1=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function M1(i){return!!(i&&Yn(i.append)&&i[bx]==="FormData"&&i[Lo])}const E1=i=>{const e=new WeakSet,t=r=>{if(Aa(r)){if(e.has(r))return;if(Ta(r))return r;if(!("toJSON"in r)){e.add(r);let a;if(YS(r)){a=[];for(const l of r){const c=t(l);!Es(c)&&a.push(c)}}else a=Ms(r)?[]:{},Do(r,(l,c)=>{const d=t(l);!Es(d)&&(a[c]=d)});return e.delete(r),a}}return r};return t(i)},w1=mi("AsyncFunction"),b1=i=>i&&(Aa(i)||Yn(i))&&Yn(i.then)&&Yn(i.catch),Px=((i,e)=>i?setImmediate:e?((t,r)=>(vs.addEventListener("message",({source:a,data:l})=>{a===vs&&l===t&&r.length&&r.shift()()},!1),a=>{r.push(a),vs.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Yn(vs.postMessage)),T1=typeof queueMicrotask<"u"?queueMicrotask.bind(vs):typeof process<"u"&&process.nextTick||Px,Lx=i=>i!=null&&Yn(i[Lo]),A1=i=>i!=null&&Co(i,Lo)&&Lx(i),W={isArray:Ms,isArrayBuffer:Tx,isBuffer:Ta,isFormData:JS,isArrayBufferView:BS,isString:zS,isNumber:Ax,isBoolean:VS,isObject:Aa,isPlainObject:pc,isEmptyObject:HS,isReadableStream:e1,isRequest:t1,isResponse:n1,isHeaders:i1,isUndefined:Es,isDate:GS,isFile:jS,isReactNativeBlob:WS,isReactNative:XS,isBlob:qS,isRegExp:x1,isFunction:Yn,isStream:KS,isURLSearchParams:QS,isTypedArray:d1,isFileList:$S,forEach:Do,merge:Ef,extend:s1,trim:r1,stripBOM:a1,inherits:o1,toFlatObject:l1,kindOf:wh,kindOfTest:mi,endsWith:c1,toArray:u1,forEachEntry:f1,matchAll:h1,isHTMLForm:p1,hasOwnProperty:bc,hasOwnProp:bc,hasOwnInPrototypeChain:Co,getSafeProp:kS,reduceDescriptors:Nx,freezeMethods:v1,toObjectSet:_1,toCamelCase:m1,noop:y1,toFiniteNumber:S1,findKey:Cx,global:vs,isContextDefined:Rx,isSpecCompliantForm:M1,toJSONObject:E1,isAsyncFn:w1,isThenable:b1,setImmediate:Px,asap:T1,isIterable:Lx,isSafeIterable:A1},C1=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),R1=i=>{const e={};let t,r,a;return i&&i.split(`
`).forEach(function(c){a=c.indexOf(":"),t=c.substring(0,a).trim().toLowerCase(),r=c.substring(a+1).trim();const d=W.hasOwnProp(e,t);!t||d&&W.hasOwnProp(C1,t)||(t==="set-cookie"?d?e[t].push(r):e[t]=[r]:e[t]=d?e[t]+", "+r:r)}),e};function N1(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const P1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),L1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function bh(i,e){return W.isArray(i)?i.map(t=>bh(t,e)):N1(String(i).replace(e,""))}const D1=i=>bh(i,P1),I1=i=>bh(i,L1);function Dx(i){const e=Object.create(null);return W.forEach(i.toJSON(),(t,r)=>{e[r]=I1(t)}),e}const k0=Symbol("internals");function po(i){return i&&String(i).trim().toLowerCase()}function mc(i){return i===!1||i==null?i:W.isArray(i)?i.map(mc):D1(String(i))}function U1(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const O1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Nd(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function F1(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let r=1;r<e;r++){const a=i.charCodeAt(r);if(a===34||a===92&&(r+=1,r>=e))return i;t+=i[r]}return t}function k1(i){const e=Object.create(null),t=String(i);let r=0,a=!1,l=!1;function c(d){const f=Nd(t.slice(r,d)),p=f.indexOf("=");if(p<1)return;const g=Nd(f.slice(0,p));if(!O1.test(g))return;const _=g.toLowerCase();if(_==="__proto__"||_==="constructor"||_==="prototype")return;const x=Nd(f.slice(p+1));e[_]=F1(x)}for(let d=0;d<t.length;d++){const f=t.charCodeAt(d);a?l?l=!1:f===92?l=!0:f===34&&(a=!1):f===34?a=!0:(f===44||f===59)&&(c(d),r=d+1)}return c(t.length),e}const B1=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Pd(i,e,t,r,a){if(W.isFunction(r))return r.call(this,e,t);if(a&&(e=t),!!W.isString(e)){if(W.isString(r))return e.indexOf(r)!==-1;if(W.isRegExp(r))return r.test(e)}}function z1(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function V1(i,e){const t=W.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{__proto__:null,value:function(a,l,c){return this[r].call(this,e,a,l,c)},configurable:!0})})}let Ln=class{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function l(d,f,p){const g=po(f);if(!g)return;const _=W.findKey(a,g);(!_||a[_]===void 0||p===!0||p===void 0&&a[_]!==!1)&&(a[_||f]=mc(d))}const c=(d,f)=>W.forEach(d,(p,g)=>l(p,g,f));if(W.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(W.isString(e)&&(e=e.trim())&&!B1(e))c(R1(e),t);else if(W.isObject(e)&&W.isSafeIterable(e)){let d=Object.create(null),f,p;for(const g of e){if(!W.isArray(g))throw new TypeError("Object iterator must return a key-value pair");p=g[0],W.hasOwnProp(d,p)?(f=d[p],d[p]=W.isArray(f)?[...f,g[1]]:[f,g[1]]):d[p]=g[1]}c(d,t)}else e!=null&&l(t,e,r);return this}get(e,t){if(e=po(e),e){const r=W.findKey(this,e);if(r){const a=this[r];if(!t)return a;if(t===!0)return U1(a);if(W.isFunction(t))return t.call(this,a,r);if(W.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=po(e),e){const r=W.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Pd(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let a=!1;function l(c){if(c=po(c),c){const d=W.findKey(r,c);d&&(!t||Pd(r,r[d],d,t))&&(delete r[d],a=!0)}}return W.isArray(e)?e.forEach(l):l(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const l=t[r];(!e||Pd(this,this[l],l,e,!0))&&(delete this[l],a=!0)}return a}normalize(e){const t=this,r={};return W.forEach(this,(a,l)=>{const c=W.findKey(r,l);if(c){t[c]=mc(a),delete t[l];return}const d=e?z1(l):String(l).trim();d!==l&&delete t[l],t[d]=mc(a),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=e&&W.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return W.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return k1(e)}static concat(e,...t){const r=new this(e);return t.forEach(a=>r.set(a)),r}static accessor(e){const r=(this[k0]=this[k0]={accessors:{}}).accessors,a=this.prototype;function l(c){const d=po(c);r[d]||(V1(a,c),r[d]=!0)}return W.isArray(e)?e.forEach(l):l(e),this}};Ln.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(Ln.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}});W.freezeMethods(Ln);const Tc="[REDACTED ****]";function H1(i){if(W.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(W.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function G1(i,e){const t=new Set(e.map(l=>String(l).toLowerCase())),r=[],a=l=>{if(l===null||typeof l!="object"||W.isBuffer(l))return l;if(r.indexOf(l)!==-1)return;l instanceof Ln&&(l=l.toJSON()),r.push(l);let c;if(W.isArray(l))c=[],l.forEach((d,f)=>{const p=a(d);W.isUndefined(p)||(c[f]=p)});else{if(!W.isPlainObject(l)&&H1(l))return r.pop(),l;c=Object.create(null);for(const[d,f]of Object.entries(l)){const p=t.has(d.toLowerCase())?Tc:a(f);W.isUndefined(p)||(c[d]=p)}}return r.pop(),c};return a(i)}function B0(i){try{return String(i)}catch{return""}}function j1(i){return i.errors.map(t=>{try{return t&&t.message?B0(t.message):B0(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let He=class Ix extends Error{static from(e,t,r,a,l,c){let d=e.message;!d&&W.isArray(e.errors)&&e.errors.length&&(d=j1(e));const f=new Ix(d,t||e.code,r,a,l);return Object.defineProperty(f,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),f.name=e.name,e.status!=null&&f.status==null&&(f.status=e.status),c&&Object.assign(f,c),f}constructor(e,t,r,a,l){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),l&&(this.response=l,this.status=l.status)}toJSON(){const e=this.config,t=e&&W.hasOwnProp(e,"redact")?e.redact:void 0,r=W.isArray(t)&&t.length>0?G1(e,t):W.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};He.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";He.ERR_BAD_OPTION="ERR_BAD_OPTION";He.ECONNABORTED="ECONNABORTED";He.ETIMEDOUT="ETIMEDOUT";He.ECONNREFUSED="ECONNREFUSED";He.ERR_NETWORK="ERR_NETWORK";He.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";He.ERR_DEPRECATED="ERR_DEPRECATED";He.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";He.ERR_BAD_REQUEST="ERR_BAD_REQUEST";He.ERR_CANCELED="ERR_CANCELED";He.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";He.ERR_INVALID_URL="ERR_INVALID_URL";He.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const W1=null,Ux=100;function wf(i){return W.isPlainObject(i)||W.isArray(i)}function Ox(i){return W.endsWith(i,"[]")?i.slice(0,-2):i}function Ld(i,e,t){return i?i.concat(e).map(function(a,l){return a=Ox(a),!t&&l?"["+a+"]":a}).join(t?".":""):e}function X1(i){return W.isArray(i)&&!i.some(wf)}const q1=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function Bc(i,e,t){if(!W.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=W.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,L){return!W.isUndefined(L[N])});const r=t.metaTokens,a=t.visitor||w,l=t.dots,c=t.indexes,d=t.Blob||typeof Blob<"u"&&Blob,f=t.maxDepth===void 0?Ux:t.maxDepth,p=d&&W.isSpecCompliantForm(e),g=[];if(!W.isFunction(a))throw new TypeError("visitor must be a function");function _(y){if(y===null)return"";if(W.isDate(y))return y.toISOString();if(W.isBoolean(y))return y.toString();if(!p&&W.isBlob(y))throw new He("Blob is not supported. Use a Buffer instead.");if(W.isArrayBuffer(y)||W.isTypedArray(y)){if(p&&typeof d=="function")return new d([y]);throw new He("Blob is not supported. Use a Buffer instead.",He.ERR_NOT_SUPPORT)}return y}function x(y){if(y>f)throw new He("Object is too deeply nested ("+y+" levels). Max depth: "+f,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(y,N){if(f===1/0)return JSON.stringify(y);const L=[];return JSON.stringify(y,function(I,P){if(!W.isObject(P))return P;for(;L.length&&L[L.length-1]!==this;)L.pop();return L.push(P),x(N+L.length-1),P})}function w(y,N,L){let T=y;if(W.isReactNative(e)&&W.isReactNativeBlob(y))return e.append(Ld(L,N,l),_(y)),!1;if(y&&!L&&typeof y=="object"){if(W.endsWith(N,"{}"))N=r?N:N.slice(0,-2),y=M(y,1);else if(W.isArray(y)&&X1(y)||(W.isFileList(y)||W.endsWith(N,"[]"))&&(T=W.toArray(y)))return N=Ox(N),T.forEach(function(P,F){!(W.isUndefined(P)||P===null)&&e.append(c===!0?Ld([N],F,l):c===null?N:N+"[]",_(P))}),!1}return wf(y)?!0:(e.append(Ld(L,N,l),_(y)),!1)}const C=Object.assign(q1,{defaultVisitor:w,convertValue:_,isVisitable:wf});function S(y,N,L=0){if(!W.isUndefined(y)){if(x(L),g.indexOf(y)!==-1)throw new Error("Circular reference detected in "+N.join("."));g.push(y),W.forEach(y,function(I,P){(!(W.isUndefined(I)||I===null)&&a.call(e,I,W.isString(P)?P.trim():P,N,C))===!0&&S(I,N?N.concat(P):[P],L+1)}),g.pop()}}if(!W.isObject(i))throw new TypeError("data must be an object");return S(i),e}function z0(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Th(i,e){this._pairs=[],i&&Bc(i,this,e)}const Fx=Th.prototype;Fx.append=function(e,t){this._pairs.push([e,t])};Fx.toString=function(e){const t=e?r=>e.call(this,r,z0):z0;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function $1(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function kx(i,e,t){if(!e)return i;i=i||"";const r=W.isFunction(t)?{serialize:t}:t,a=W.getSafeProp(r,"encode")||$1,l=W.getSafeProp(r,"serialize");let c;if(l?c=l(e,r):c=W.isURLSearchParams(e)?e.toString():new Th(e,r).toString(a),c){const d=i.indexOf("#");d!==-1&&(i=i.slice(0,d)),i+=(i.indexOf("?")===-1?"?":"&")+c}return i}class V0{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ah={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Y1=typeof URLSearchParams<"u"?URLSearchParams:Th,K1=typeof FormData<"u"?FormData:null,Z1=typeof Blob<"u"?Blob:null,J1={isBrowser:!0,classes:{URLSearchParams:Y1,FormData:K1,Blob:Z1},protocols:["http","https","file","blob","url","data"]},Ch=typeof window<"u"&&typeof document<"u",bf=typeof navigator=="object"&&navigator||void 0,Q1=Ch&&(!bf||["ReactNative","NativeScript","NS"].indexOf(bf.product)<0),eM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",tM=Ch&&window.location.href||"http://localhost",nM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ch,hasStandardBrowserEnv:Q1,hasStandardBrowserWebWorkerEnv:eM,navigator:bf,origin:tM},Symbol.toStringTag,{value:"Module"})),Sn={...nM,...J1};function iM(i,e){return Bc(i,new Sn.classes.URLSearchParams,{visitor:function(t,r,a,l){return Sn.isNode&&W.isBuffer(t)?(this.append(r,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}const H0=Ux;function Bx(i){if(i>H0)throw new He("FormData field is too deeply nested ("+i+" levels). Max depth: "+H0,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function rM(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=t.exec(i))!==null;)Bx(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function sM(i){const e={},t=Object.keys(i);let r;const a=t.length;let l;for(r=0;r<a;r++)l=t[r],e[l]=i[l];return e}function zx(i){function e(t,r,a,l){Bx(l);let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),f=l>=t.length;return c=!c&&W.isArray(a)?a.length:c,f?(W.hasOwnProp(a,c)?a[c]=W.isArray(a[c])?a[c].concat(r):[a[c],r]:a[c]=r,!d):((!W.hasOwnProp(a,c)||!W.isObject(a[c]))&&(a[c]=[]),e(t,r,a[c],l)&&W.isArray(a[c])&&(a[c]=sM(a[c])),!d)}if(W.isFormData(i)&&W.isFunction(i.entries)){const t={};return W.forEachEntry(i,(r,a)=>{e(rM(r),a,t,0)}),t}return null}const Qs=(i,e)=>i!=null&&W.hasOwnProp(i,e)?i[e]:void 0;function aM(i,e,t){if(W.isString(i))try{return(e||JSON.parse)(i),W.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const Io={transitional:Ah,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,l=W.isObject(e);if(l&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return a?JSON.stringify(zx(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)||W.isReadableStream(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){const f=Qs(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return iM(e,f).toString();if((d=W.isFileList(e))||r.indexOf("multipart/form-data")>-1){const p=Qs(this,"env"),g=p&&p.FormData;return Bc(d?{"files[]":e}:e,g&&new g,f)}}return l||a?(t.setContentType("application/json",!1),aM(e)):e}],transformResponse:[function(e){const t=Qs(this,"transitional")||Io.transitional,r=t&&t.forcedJSONParsing,a=Qs(this,"responseType"),l=a==="json";if(W.isResponse(e)||W.isReadableStream(e))return e;if(e&&W.isString(e)&&(r&&!a||l)){const d=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,Qs(this,"parseReviver"))}catch(f){if(d)throw f.name==="SyntaxError"?He.from(f,He.ERR_BAD_RESPONSE,this,null,Qs(this,"response")):f}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Sn.classes.FormData,Blob:Sn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch","query"],i=>{Io.headers[i]={}});function Dd(i,e){const t=this||Io,r=e||t,a=Ln.from(r.headers);let l=r.data;return W.forEach(i,function(d){l=d.call(t,l,a.normalize(),e?e.status:void 0)}),a.normalize(),l}function Vx(i){return!!(i&&i.__CANCEL__)}let Uo=class extends He{constructor(e,t,r){super(e??"canceled",He.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function Hx(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new He("Request failed with status code "+t.status,t.status>=400&&t.status<500?He.ERR_BAD_REQUEST:He.ERR_BAD_RESPONSE,t.config,t.request,t))}function oM(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function lM(i,e){i=i||10;const t=new Array(i),r=new Array(i);let a=0,l=0,c;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),g=r[l];c||(c=p),t[a]=f,r[a]=p;let _=l,x=0;for(;_!==a;)x+=t[_++],_=_%i;if(a=(a+1)%i,a===l&&(l=(l+1)%i),p-c<e)return;const M=g&&p-g;return M?Math.round(x*1e3/M):void 0}}function cM(i,e){let t=0,r=1e3/e,a,l;const c=(p,g=Date.now())=>{t=g,a=null,l&&(clearTimeout(l),l=null),i(...p)};return[(...p)=>{const g=Date.now(),_=g-t;_>=r?c(p,g):(a=p,l||(l=setTimeout(()=>{l=null,c(a)},r-_)))},()=>a&&c(a)]}const Ac=(i,e,t=3)=>{let r=0;const a=lM(50,250);return cM(l=>{if(!l||typeof l.loaded!="number")return;const c=l.loaded,d=l.lengthComputable?l.total:void 0,f=Math.max(0,d!=null?Math.min(c,d):c),p=Math.max(0,f-r),g=a(p);r=Math.max(r,f);const _={loaded:f,total:d,progress:d?f/d:void 0,bytes:p,rate:g||void 0,estimated:g&&d?(d-f)/g:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(_)},t)},G0=(i,e)=>{const t=i!=null;return[r=>e[0]({lengthComputable:t,total:i,loaded:r}),e[1]]},j0=(i,e=W.asap)=>(...t)=>e(()=>i(...t)),uM=Sn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,Sn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(Sn.origin),Sn.navigator&&/(msie|trident)/i.test(Sn.navigator.userAgent)):()=>!0,dM=Sn.hasStandardBrowserEnv?{write(i,e,t,r,a,l,c){if(typeof document>"u")return;const d=[`${i}=${encodeURIComponent(e)}`];W.isNumber(t)&&d.push(`expires=${new Date(t).toUTCString()}`),W.isString(r)&&d.push(`path=${r}`),W.isString(a)&&d.push(`domain=${a}`),l===!0&&d.push("secure"),W.isString(c)&&d.push(`SameSite=${c}`),document.cookie=d.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const r=e[t].replace(/^\s+/,""),a=r.indexOf("=");if(a!==-1&&r.slice(0,a)===i)try{return decodeURIComponent(r.slice(a+1))}catch{return r.slice(a+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function fM(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function hM(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const pM=/^https?:(?!\/\/)/i,mM=/[\t\n\r]/g;function gM(i){let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e)}function xM(i){return gM(i).replace(mM,"")}function vM(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,r="")=>`${t}${r}${Tc}`)}function _M(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Tc}@`),t=e.indexOf("#"),a=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Tc}`);return t===-1?a:`${a}#${vM(e.slice(t+1))}`}function W0(i,e){if(typeof i=="string"){const t=xM(i);if(pM.test(t))throw new He(`Invalid URL ${JSON.stringify(_M(t))}: missing "//" after protocol`,He.ERR_INVALID_URL,e)}}function Gx(i,e,t,r){W0(e,r);let a=!fM(e);return i&&(a||t===!1)?(W0(i,r),hM(i,e)):e}const X0=i=>i instanceof Ln?{...i}:i,yM=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function ws(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(g,_,x,M){return W.isPlainObject(g)&&W.isPlainObject(_)?W.merge.call({caseless:M},g,_):W.isPlainObject(_)?W.merge({},_):W.isArray(_)?_.slice():_}function a(g,_,x,M){if(W.isUndefined(_)){if(!W.isUndefined(g))return r(void 0,g,x,M)}else return r(g,_,x,M)}function l(g,_){if(!W.isUndefined(_))return r(void 0,_)}function c(g,_){if(W.isUndefined(_)){if(!W.isUndefined(g))return r(void 0,g)}else return r(void 0,_)}function d(g){const _=W.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!W.isUndefined(_))if(W.isPlainObject(_)){if(W.hasOwnProp(_,g))return _[g]}else return;const x=W.hasOwnProp(i,"transitional")?i.transitional:void 0;if(W.isPlainObject(x)&&W.hasOwnProp(x,g))return x[g]}function f(g,_,x){if(W.hasOwnProp(e,x))return r(g,_);if(W.hasOwnProp(i,x))return r(void 0,g)}const p={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,allowedSocketPaths:c,responseEncoding:c,validateStatus:f,headers:(g,_,x)=>a(X0(g),X0(_),x,!0)};return W.forEach(yM({...i,...e}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const x=W.hasOwnProp(p,_)?p[_]:a,M=W.hasOwnProp(i,_)?i[_]:void 0,w=W.hasOwnProp(e,_)?e[_]:void 0,C=x(M,w,_);W.isUndefined(C)&&x!==f||(t[_]=C)}),W.hasOwnProp(e,"validateStatus")&&W.isUndefined(e.validateStatus)&&d("validateStatusUndefinedResolves")===!1&&(W.hasOwnProp(i,"validateStatus")?t.validateStatus=r(void 0,i.validateStatus):delete t.validateStatus),t}const SM=["content-type","content-length"];function MM(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([r,a])=>{SM.includes(r.toLowerCase())&&i.set(r,a)})}const EM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function jx(i){const e=ws({},i),t=x=>W.hasOwnProp(e,x)?e[x]:void 0,r=t("data");let a=t("withXSRFToken");const l=t("xsrfHeaderName"),c=t("xsrfCookieName");let d=t("headers");const f=t("auth"),p=t("baseURL"),g=t("allowAbsoluteUrls"),_=t("url");if(e.headers=d=Ln.from(d),e.url=kx(Gx(p,_,g,e),t("params"),t("paramsSerializer")),f){const x=W.getSafeProp(f,"username")||"",M=W.getSafeProp(f,"password")||"";try{d.set("Authorization","Basic "+btoa(x+":"+(M?EM(M):"")))}catch(w){throw He.from(w,He.ERR_BAD_OPTION_VALUE,i)}}if(W.isFormData(r)&&(Sn.hasStandardBrowserEnv||Sn.hasStandardBrowserWebWorkerEnv||W.isReactNative(r)?d.setContentType(void 0):W.isFunction(r.getHeaders)&&MM(d,r.getHeaders(),t("formDataHeaderPolicy"))),Sn.hasStandardBrowserEnv&&(W.isFunction(a)&&(a=a(e)),a===!0||a==null&&uM(e.url))){const M=l&&c&&dM.read(c);M&&d.set(l,M)}return e}const wM=typeof XMLHttpRequest<"u",bM=wM&&function(i){return new Promise(function(t,r){const a=jx(i);let l=a.data;const c=Ln.from(a.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:p}=a,g,_,x,M,w;function C(){M&&M(),w&&w(),a.cancelToken&&a.cancelToken.unsubscribe(g),a.signal&&a.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function y(){if(!S)return;const L=Ln.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),I={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:L,config:i,request:S};Hx(function(F){t(F),C()},function(F){r(F),C()},I),S=null}"onloadend"in S?S.onloadend=y:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(y)},S.onabort=function(){S&&(r(new He("Request aborted",He.ECONNABORTED,i,S)),C(),S=null)},S.onerror=function(T){const I=T&&T.message?T.message:"Network Error",P=new He(I,He.ERR_NETWORK,i,S);P.event=T||null,r(P),C(),S=null},S.ontimeout=function(){let T=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const I=a.transitional||Ah;a.timeoutErrorMessage&&(T=a.timeoutErrorMessage),r(new He(T,I.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,i,S)),C(),S=null},l===void 0&&c.setContentType(null),"setRequestHeader"in S&&W.forEach(Dx(c),function(T,I){S.setRequestHeader(I,T)}),W.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),d&&d!=="json"&&(S.responseType=a.responseType),p&&([x,w]=Ac(p,!0),S.addEventListener("progress",x)),f&&S.upload&&([_,M]=Ac(f),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",M)),(a.cancelToken||a.signal)&&(g=L=>{S&&(r(!L||L.type?new Uo(null,i,S):L),S.abort(),C(),S=null)},a.cancelToken&&a.cancelToken.subscribe(g),a.signal&&(a.signal.aborted?g():a.signal.addEventListener("abort",g)));const N=oM(a.url);if(N&&!Sn.protocols.includes(N)){r(new He("Unsupported protocol "+N+":",He.ERR_BAD_REQUEST,i)),C();return}S.send(l||null)})},TM=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let r=!1;const a=function(f){if(!r){r=!0,c();const p=f instanceof Error?f:this.reason;t.abort(p instanceof He?p:new Uo(p instanceof Error?p.message:p))}};let l=e&&setTimeout(()=>{l=null,a(new He(`timeout of ${e}ms exceeded`,He.ETIMEDOUT))},e);const c=()=>{i&&(l&&clearTimeout(l),l=null,i.forEach(f=>{f.unsubscribe?f.unsubscribe(a):f.removeEventListener("abort",a)}),i=null)};i.forEach(f=>{if(!r){if(f.aborted){a.call(f);return}f.addEventListener("abort",a,{once:!0})}});const{signal:d}=t;return d.unsubscribe=()=>W.asap(c),d},AM=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let r=0,a;for(;r<t;)a=r+e,yield i.slice(r,a),r=a},CM=async function*(i,e){for await(const t of RM(i))yield*AM(t,e)},RM=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},q0=(i,e,t,r)=>{const a=CM(i,e);let l=0,c,d=f=>{c||(c=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:p,value:g}=await a.next();if(p){d(),f.close();return}let _=g.byteLength;if(t){let x=l+=_;t(x)}f.enqueue(new Uint8Array(g))}catch(p){throw d(p),p}},cancel(f){return d(f),a.return()}},{highWaterMark:2})},$0=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,Wx=(i,e,t)=>e+2<t&&$0(i.charCodeAt(e+1))&&$0(i.charCodeAt(e+2)),Y0=i=>i<=57?i-48:(i&223)-55,NM=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,PM=i=>i===9||i===10||i===12||i===13||i===32,LM=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},DM=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},IM=i=>{const e=i.length;let t=0,r=0,a=!1;for(let l=0;l<e;l++){let c=i.charCodeAt(l);if(c===37&&Wx(i,l,e)&&(c=Y0(i.charCodeAt(l+1))*16+Y0(i.charCodeAt(l+2)),l+=2),!PM(c)){if(c===61){r++;continue}if(!NM(c)||r>0){a=!0;continue}t++}}return a||r>2||r>0&&(t+r)%4!==0||t%4===1?DM(i):LM(t)},UM=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const r=i.slice(5,t),a=i.slice(t+1);if(/;base64/i.test(r))return e(a);let c=0;for(let d=0,f=a.length;d<f;d++){const p=a.charCodeAt(d);if(p===37&&Wx(a,d,f))c+=1,d+=2;else if(p<128)c+=1;else if(p<2048)c+=2;else if(p>=55296&&p<=56319&&d+1<f){const g=a.charCodeAt(d+1);g>=56320&&g<=57343?(c+=4,d++):c+=3}else c+=3}return c};function OM(i){const e=typeof i=="string"?i.indexOf("#"):-1;return UM(e===-1?i:i.slice(0,e),IM)}const Rh="1.19.0",K0=64*1024,{isFunction:Wl}=W,FM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Z0=i=>{if(!W.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},J0=(i,...e)=>{try{return!!i(...e)}catch{return!1}},kM=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},BM=i=>{const e=W.global!==void 0&&W.global!==null?W.global:globalThis,{ReadableStream:t,TextEncoder:r}=e;i=W.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:a,Request:l,Response:c}=i,d=a?Wl(a):typeof fetch=="function",f=Wl(l),p=Wl(c);if(!d)return!1;const g=d&&Wl(t),_=d&&(typeof r=="function"?(y=>N=>y.encode(N))(new r):async y=>new Uint8Array(await new l(y).arrayBuffer())),x=f&&g&&J0(()=>{let y=!1;const N=new l(Sn.origin,{body:new t,method:"POST",get duplex(){return y=!0,"half"}}),L=N.headers.has("Content-Type");return N.body!=null&&N.body.cancel(),y&&!L}),M=p&&g&&J0(()=>W.isReadableStream(new c("").body)),w={stream:M&&(y=>y.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!w[y]&&(w[y]=(N,L)=>{let T=N&&N[y];if(T)return T.call(N);throw new He(`Response type '${y}' is not supported`,He.ERR_NOT_SUPPORT,L)})});const C=async y=>{if(y==null)return 0;if(W.isBlob(y))return y.size;if(W.isSpecCompliantForm(y))return(await new l(Sn.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(W.isArrayBufferView(y)||W.isArrayBuffer(y))return y.byteLength;if(W.isURLSearchParams(y)&&(y=y+""),W.isString(y))return(await _(y)).byteLength},S=async(y,N)=>{const L=W.toFiniteNumber(y.getContentLength());return L??C(N)};return async y=>{let{url:N,method:L,data:T,signal:I,cancelToken:P,timeout:F,onDownloadProgress:b,onUploadProgress:O,responseType:V,headers:B,withCredentials:J="same-origin",fetchOptions:ue,maxContentLength:me,maxBodyLength:K}=jx(y);const pe=W.isNumber(me)&&me>-1,ee=W.isNumber(K)&&K>-1,$=Z=>W.hasOwnProp(y,Z)?y[Z]:void 0;let le=a||fetch;V=V?(V+"").toLowerCase():"text";let H=TM([I,P&&P.toAbortSignal()],F),D=null;const G=H&&H.unsubscribe&&(()=>{H.unsubscribe()});let be,Re=null;const Ne=()=>new He("Request body larger than maxBodyLength limit",He.ERR_BAD_REQUEST,y,D);try{let Z;const ve=$("auth");if(ve){const Ce=W.getSafeProp(ve,"username")||"",ut=W.getSafeProp(ve,"password")||"";Z={username:Ce,password:ut}}if(kM(N)){const Ce=new URL(N,Sn.origin);if(!Z&&(Ce.username||Ce.password)){const ut=Z0(Ce.username),yt=Z0(Ce.password);Z={username:ut,password:yt}}(Ce.username||Ce.password)&&(Ce.username="",Ce.password="",N=Ce.href)}if(Z&&(B.delete("authorization"),B.set("Authorization","Basic "+btoa(FM((Z.username||"")+":"+(Z.password||""))))),pe&&typeof N=="string"&&N.startsWith("data:")&&OM(N)>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,y,D);if(ee&&L!=="get"&&L!=="head"){const Ce=await C(T);if(typeof Ce=="number"&&isFinite(Ce)&&(be=Ce,Ce>K))throw Ne()}const xe=ee&&(W.isReadableStream(T)||W.isStream(T)),Be=(Ce,ut,yt)=>q0(Ce,K0,gt=>{if(ee&&gt>K)throw Re=Ne();ut&&ut(gt)},yt);if(x&&L!=="get"&&L!=="head"&&(O||xe)){if(be=be??await S(B,T),be!==0||xe){let Ce=new l(N,{method:"POST",body:T,duplex:"half"}),ut;if(W.isFormData(T)&&(ut=Ce.headers.get("content-type"))&&B.setContentType(ut),Ce.body){const[yt,gt]=O&&G0(be,Ac(j0(O)))||[];T=Be(Ce.body,yt,gt)}}}else if(xe&&!f&&g&&L!=="get"&&L!=="head")T=Be(T);else if(xe&&f&&!x&&L!=="get"&&L!=="head")throw new He("Stream request bodies are not supported by the current fetch implementation",He.ERR_NOT_SUPPORT,y,D);W.isString(J)||(J=J?"include":"omit");const Ke=f&&"credentials"in l.prototype;if(W.isFormData(T)){const Ce=B.getContentType();Ce&&/^multipart\/form-data/i.test(Ce)&&!/boundary=/i.test(Ce)&&B.delete("content-type")}B.set("User-Agent","axios/"+Rh,!1);const Ze={...ue,signal:H,method:L.toUpperCase(),headers:Dx(B.normalize()),body:T,duplex:"half",credentials:Ke?J:void 0};D=f&&new l(N,Ze);let ht=await(f?le(D,ue):le(N,Ze));const Se=Ln.from(ht.headers);if(pe){const Ce=W.toFiniteNumber(Se.getContentLength());if(Ce!=null&&Ce>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,y,D)}const rt=M&&(V==="stream"||V==="response");if(M&&ht.body&&(b||pe||rt&&G)){const Ce={};["status","statusText","headers"].forEach(Dt=>{Ce[Dt]=ht[Dt]});const ut=W.toFiniteNumber(Se.getContentLength()),[yt,gt]=b&&G0(ut,Ac(j0(b),!0))||[];let kt=0;const Nt=Dt=>{if(pe&&(kt=Dt,kt>me))throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,y,D);yt&&yt(Dt)};ht=new c(q0(ht.body,K0,Nt,()=>{gt&&gt(),G&&G()}),Ce)}V=V||"text";let st=await w[W.findKey(w,V)||"text"](ht,y);if(pe&&!M&&!rt){let Ce;if(st!=null&&(typeof st.byteLength=="number"?Ce=st.byteLength:typeof st.size=="number"?Ce=st.size:typeof st=="string"&&(Ce=typeof r=="function"?new r().encode(st).byteLength:st.length)),typeof Ce=="number"&&Ce>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,y,D)}return!rt&&G&&G(),await new Promise((Ce,ut)=>{Hx(Ce,ut,{data:st,headers:Ln.from(ht.headers),status:ht.status,statusText:ht.statusText,config:y,request:D})})}catch(Z){if(G&&G(),H&&H.aborted&&H.reason instanceof He){const ve=H.reason;throw ve.config=y,D&&(ve.request=D),Z!==ve&&Object.defineProperty(ve,"cause",{__proto__:null,value:Z,writable:!0,enumerable:!1,configurable:!0}),ve}if(Re)throw D&&!Re.request&&(Re.request=D),Re;if(Z instanceof He)throw D&&!Z.request&&(Z.request=D),Z;if(Z&&Z.name==="TypeError"&&/Load failed|fetch/i.test(Z.message)){const ve=new He("Network Error",He.ERR_NETWORK,y,D,Z&&Z.response);throw Object.defineProperty(ve,"cause",{__proto__:null,value:Z.cause||Z,writable:!0,enumerable:!1,configurable:!0}),ve}throw He.from(Z,Z&&Z.code,y,D,Z&&Z.response)}}},zM=new Map,Xx=i=>{let e=i&&i.env||{};const{fetch:t,Request:r,Response:a}=e,l=[r,a,t];let c=l.length,d=c,f,p,g=zM;for(;d--;)f=l[d],p=g.get(f),p===void 0&&g.set(f,p=d?new Map:BM(e)),g=p;return p};Xx();const Nh={http:W1,xhr:bM,fetch:{get:Xx}};W.forEach(Nh,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const Q0=i=>`- ${i}`,VM=i=>W.isFunction(i)||i===null||i===!1;function HM(i,e){i=W.isArray(i)?i:[i];const{length:t}=i;let r,a;const l={};for(let c=0;c<t;c++){r=i[c];let d;if(a=r,!VM(r)&&(a=Nh[(d=String(r)).toLowerCase()],a===void 0))throw new He(`Unknown adapter '${d}'`);if(a&&(W.isFunction(a)||(a=a.get(e))))break;l[d||"#"+c]=a}if(!a){const c=Object.entries(l).map(([f,p])=>`adapter ${f} `+(p===!1?"is not supported by the environment":"is not available in the build"));let d=t?c.length>1?`since :
`+c.map(Q0).join(`
`):" "+Q0(c[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+d,He.ERR_NOT_SUPPORT)}return a}const qx={getAdapter:HM,adapters:Nh};function Id(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Uo(null,i)}function Ud(i){return Id(i),i.headers=Ln.from(i.headers),i.data=Dd.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),qx.getAdapter(i.adapter||Io.adapter,i)(i).then(function(r){Id(i),i.response=r;try{r.data=Dd.call(i,i.transformResponse,r)}finally{delete i.response}return r.headers=Ln.from(r.headers),r},function(r){if(!Vx(r)&&(Id(i),r&&r.response)){i.response=r.response;try{r.response.data=Dd.call(i,i.transformResponse,r.response)}finally{delete i.response}r.response.headers=Ln.from(r.response.headers)}return Promise.reject(r)})}const zc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{zc[i]=function(r){return typeof r===i||"a"+(e<1?"n ":" ")+i}});const eg={};zc.transitional=function(e,t,r){function a(l,c){return"[Axios v"+Rh+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,d)=>{if(e===!1)throw new He(a(c," has been removed"+(t?" in "+t:"")),He.ERR_DEPRECATED);return t&&!eg[c]&&(eg[c]=!0,console.warn(a(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};zc.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function GM(i,e,t){if(typeof i!="object"||i===null)throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let a=r.length;for(;a-- >0;){const l=r[a],c=Object.prototype.hasOwnProperty.call(e,l)?e[l]:void 0;if(c){const d=i[l],f=d===void 0||c(d,l,i);if(f!==!0)throw new He("option "+l+" must be "+f,He.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new He("Unknown option "+l,He.ERR_BAD_OPTION)}}const gc={assertOptions:GM,validators:zc},Cn=gc.validators;let Ss=class{constructor(e){this.defaults=e||{},this.interceptors={request:new V0,response:new V0}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const l=(()=>{if(!a.stack)return"";const c=a.stack.indexOf(`
`);return c===-1?"":a.stack.slice(c+1)})();try{if(!r.stack)r.stack=l;else if(l){const c=l.indexOf(`
`),d=c===-1?-1:l.indexOf(`
`,c+1),f=d===-1?"":l.slice(d+1);String(r.stack).endsWith(f)||(r.stack+=`
`+l)}}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ws(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:l}=t;r!==void 0&&gc.assertOptions(r,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean),legacyInterceptorReqResOrdering:Cn.transitional(Cn.boolean),advertiseZstdAcceptEncoding:Cn.transitional(Cn.boolean),validateStatusUndefinedResolves:Cn.transitional(Cn.boolean)},!1),a!=null&&(W.isFunction(a)?t.paramsSerializer={serialize:a}:gc.assertOptions(a,{encode:Cn.function,serialize:Cn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),gc.assertOptions(t,{baseUrl:Cn.spelling("baseURL"),withXsrfToken:Cn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&W.merge(l.common,l[t.method]);l&&W.forEach(["delete","get","head","post","put","patch","query","common"],w=>{delete l[w]}),t.headers=Ln.concat(c,l);const d=[];let f=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(t)===!1)return;f=f&&C.synchronous;const S=t.transitional||Ah;S&&S.legacyInterceptorReqResOrdering?d.unshift(C.fulfilled,C.rejected):d.push(C.fulfilled,C.rejected)});const p=[];this.interceptors.response.forEach(function(C){p.push(C.fulfilled,C.rejected)});let g,_=0,x;if(!f){const w=[Ud.bind(this),void 0];for(w.unshift(...d),w.push(...p),x=w.length,g=Promise.resolve(t);_<x;)g=g.then(w[_++],w[_++]);return g}x=d.length;let M=t;for(;_<x;){const w=d[_++],C=d[_++];try{M=w?w(M):M}catch(S){if(!C){g=Promise.reject(S);break}try{const y=C.call(this,S);W.isThenable(y)&&(g=Promise.resolve(y).then(()=>Ud.call(this,M)))}catch(y){g=Promise.reject(y)}break}}if(!g)try{g=Ud.call(this,M)}catch(w){g=Promise.reject(w)}for(_=0,x=p.length;_<x;)g=g.then(p[_++],p[_++]);return g}getUri(e){e=ws(this.defaults,e);const t=Gx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return kx(t,e.params,e.paramsSerializer)}};W.forEach(["delete","get","head","options"],function(e){Ss.prototype[e]=function(t,r){return this.request(ws(r||{},{method:e,url:t,data:r&&W.hasOwnProp(r,"data")?r.data:void 0}))}});W.forEach(["post","put","patch","query"],function(e){function t(r){return function(l,c,d){return this.request(ws(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Ss.prototype[e]=t(),e!=="query"&&(Ss.prototype[e+"Form"]=t(!0))});let jM=class $x{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const r=this;this.promise.then(a=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](a);r._listeners=null}),this.promise.then=a=>{let l;const c=new Promise(d=>{r.subscribe(d),l=d}).then(a);return c.cancel=function(){r.unsubscribe(l)},c},e(function(l,c,d){r.reason||(r.reason=new Uo(l,c,d),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new $x(function(a){e=a}),cancel:e}}};function WM(i){return function(t){return i.apply(null,t)}}function XM(i){return W.isObject(i)&&i.isAxiosError===!0}const Tf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Tf).forEach(([i,e])=>{Tf[e]=i});function Yx(i){const e=new Ss(i),t=wx(Ss.prototype.request,e);return W.extend(t,Ss.prototype,e,{allOwnKeys:!0}),W.extend(t,e,null,{allOwnKeys:!0}),t.create=function(a){return Yx(ws(i,a))},t}const sn=Yx(Io);sn.Axios=Ss;sn.CanceledError=Uo;sn.CancelToken=jM;sn.isCancel=Vx;sn.VERSION=Rh;sn.toFormData=Bc;sn.AxiosError=He;sn.Cancel=sn.CanceledError;sn.all=function(e){return Promise.all(e)};sn.spread=WM;sn.isAxiosError=XM;sn.mergeConfig=ws;sn.AxiosHeaders=Ln;sn.formToJSON=i=>zx(W.isHTMLForm(i)?new FormData(i):i);sn.getAdapter=qx.getAdapter;sn.HttpStatusCode=Tf;sn.default=sn;const{Axios:fN,AxiosError:hN,CanceledError:pN,isCancel:mN,CancelToken:gN,VERSION:xN,all:vN,Cancel:_N,isAxiosError:yN,spread:SN,toFormData:MN,AxiosHeaders:EN,HttpStatusCode:wN,formToJSON:bN,getAdapter:TN,mergeConfig:AN,create:CN}=sn,ms=sn.create({baseURL:"/api",headers:{"Content-Type":"application/json"},timeout:1e4});ms.interceptors.request.use(i=>{const e=localStorage.getItem("jwt_token");return e&&(i.headers.Authorization=`Bearer ${e}`),i},i=>Promise.reject(i));ms.interceptors.response.use(i=>i,i=>{var e;return((e=i.response)==null?void 0:e.status)===401&&(localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")),Promise.reject(i)});const Od={login:async i=>(await ms.post("/Auth/login",i)).data,register:async i=>(await ms.post("/Auth/register",i)).data,verifyOtp:async i=>(await ms.post("/Auth/verify-otp",i)).data,testAuth:async()=>(await ms.get("/Auth/test-auth")).data,testUserRole:async()=>(await ms.get("/Auth/test-user-role")).data},Kx=he.createContext(void 0),qM=({children:i})=>{const[e,t]=he.useState(null),[r,a]=he.useState(null),[l,c]=he.useState(!0);he.useEffect(()=>{const x=localStorage.getItem("jwt_token"),M=localStorage.getItem("user_info");if(x&&M)try{a(x),t(JSON.parse(M))}catch(w){console.error("Failed to parse saved user info",w),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")}c(!1)},[]);const d=async(x,M)=>{try{const w=await Od.login({username:x,passwordHash:M}),C=w.roles&&w.roles.length>0?w.roles[0]:"Cashier",S={id:w.userId,username:w.username,fullName:w.username,roles:w.roles||["User"],role:C,token:w.token,expiration:w.expiration};return a(w.token),t(S),localStorage.setItem("jwt_token",w.token),localStorage.setItem("user_info",JSON.stringify(S)),w}catch(w){throw console.error("Login failed",w),w}},f=(x="Admin")=>{const M="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-sample-token",w={id:"demo-user-123",username:`demo_${x.toLowerCase()}`,fullName:`Quản trị ${x}`,roles:[x],role:x,token:M,expiration:"2026-12-31T23:59:59"};a(M),t(w),localStorage.setItem("jwt_token",M),localStorage.setItem("user_info",JSON.stringify(w))},p=async(x,M,w)=>await Od.register({username:x,passwordHash:M,phoneNumber:w}),g=async(x,M)=>await Od.verifyOtp({phoneNumber:x,otpCode:M}),_=()=>{a(null),t(null),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")};return m.jsx(Kx.Provider,{value:{user:e,token:r,isAuthenticated:!!r&&!!e,isLoading:l,login:d,loginAsDemoRole:f,register:p,verifyOtp:g,logout:_},children:i})},Oo=()=>{const i=he.useContext(Kx);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},Zx=he.createContext(void 0),$M=({children:i})=>{const[e,t]=he.useState(null),[r,a]=he.useState("DineIn"),[l,c]=he.useState([]),[d,f]=he.useState(0),[p,g]=he.useState("amount"),[_,x]=he.useState(""),[M,w]=he.useState(""),C=(P,F=[],b="")=>{const O=F.reduce((ue,me)=>ue+me.extraPrice,0),V=P.price+O,B=F.map(ue=>`${ue.optionId}:${ue.valueId}`).sort().join("|"),J=`${P.id}-${B}-${b}`;c(ue=>ue.find(K=>K.cartItemId===J)?ue.map(K=>K.cartItemId===J?{...K,quantity:K.quantity+1,totalPrice:(K.quantity+1)*V}:K):[...ue,{cartItemId:J,product:P,quantity:1,selectedOptions:F,note:b,unitPrice:V,totalPrice:V}])},S=(P,F)=>{c(b=>b.map(O=>{if(O.cartItemId===P){const V=O.quantity+F;return V<=0?null:{...O,quantity:V,totalPrice:V*O.unitPrice}}return O}).filter(Boolean))},y=P=>{c(F=>F.filter(b=>b.cartItemId!==P))},N=()=>{c([]),f(0),x(""),w("")},L=l.reduce((P,F)=>P+F.totalPrice,0),T=p==="percent"?Math.round(L*d/100):Math.min(d,L),I=Math.max(0,L-T);return m.jsx(Zx.Provider,{value:{selectedTable:e,setSelectedTable:t,orderType:r,setOrderType:a,cartItems:l,addToCart:C,updateQuantity:S,removeFromCart:y,clearCart:N,discountAmount:d,setDiscountAmount:f,discountType:p,setDiscountType:g,subTotal:L,calculatedDiscount:T,finalTotal:I,customerPhone:_,setCustomerPhone:x,customerName:M,setCustomerName:w},children:i})},YM=()=>{const i=he.useContext(Zx);if(!i)throw new Error("useCart must be used within a CartProvider");return i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jx=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=he.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},f)=>he.createElement("svg",{ref:f,...ZM,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:Jx("lucide",a),...d},[...c.map(([p,g])=>he.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(i,e)=>{const t=he.forwardRef(({className:r,...a},l)=>he.createElement(JM,{ref:l,iconNode:e,className:Jx(`lucide-${KM(i)}`,r),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],eE=ft("ArrowRight",QM);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],tg=ft("ArrowUpRight",tE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Qx=ft("Award",nE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],rE=ft("Banknote",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],aE=ft("Bell",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Ph=ft("Boxes",oE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],cE=ft("Calendar",lE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],ev=ft("ChartColumn",uE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],fE=ft("ChartNoAxesColumn",dE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],pE=ft("Check",hE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Lh=ft("ChefHat",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ng=ft("ChevronDown",gE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],vE=ft("ChevronRight",xE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],yE=ft("CircleAlert",_E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Fo=ft("CircleCheck",SE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Vc=ft("Clock",ME);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],wE=ft("CreditCard",EE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],TE=ft("DollarSign",bE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ig=ft("EyeOff",AE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rg=ft("Eye",CE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],NE=ft("KeyRound",RE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],LE=ft("LayoutGrid",PE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],sg=ft("Lock",DE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],UE=ft("LogIn",IE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],tv=ft("LogOut",OE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],kE=ft("Menu",FE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M5 12h14",key:"1ays0h"}]],zE=ft("Minus",BE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],nv=ft("Monitor",VE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],GE=ft("PhoneCall",HE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],WE=ft("Play",jE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Cc=ft("Plus",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],$E=ft("QrCode",qE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],ag=ft("Receipt",YE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Dh=ft("Search",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],JE=ft("Send",ZE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],iv=ft("ShieldCheck",QE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],tw=ft("ShoppingBag",ew);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],iw=ft("Smartphone",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],rv=ft("Sparkles",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],aw=ft("Store",sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],lw=ft("Ticket",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],uw=ft("TrendingUp",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fw=ft("TriangleAlert",dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],pw=ft("Truck",hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],og=ft("User",mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Hc=ft("Users",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],vw=ft("UtensilsCrossed",xw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],lg=ft("Utensils",_w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pa=ft("X",yw),Sw=({onToggleMobileSidebar:i})=>{var d,f;const{user:e,logout:t}=Oo(),[r,a]=he.useState(!1),[l,c]=he.useState("Chi nhánh Quận 1 (Chính)");return m.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm md:px-6",children:[m.jsxs("div",{className:"flex items-center space-x-3 md:space-x-4",children:[m.jsx("button",{onClick:i,className:"p-2 text-gray-600 rounded-lg hover:bg-gray-100 md:hidden focus:outline-none",title:"Mở menu",children:m.jsx(kE,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex items-center space-x-2.5",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 font-bold text-white rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20",children:"F&B"}),m.jsxs("div",{className:"hidden sm:block",children:[m.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900",children:"F&B POS & Inventory"}),m.jsx("span",{className:"block text-[10px] font-semibold tracking-wider text-emerald-600 uppercase",children:"Hệ Thống Thu Ngân & Kho"})]})]}),m.jsx("div",{className:"relative hidden lg:block ml-4",children:m.jsxs("div",{className:"flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors",children:[m.jsx(aw,{className:"w-4 h-4 mr-1.5 text-emerald-600"}),m.jsx("span",{children:l}),m.jsx(ng,{className:"w-3.5 h-3.5 ml-1.5 text-gray-500"})]})})]}),m.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[m.jsxs("div",{className:"hidden sm:flex items-center text-xs font-medium text-gray-500 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200",children:[m.jsx(GE,{className:"w-3.5 h-3.5 mr-1"}),m.jsx("span",{children:"Hotline: 1900 6868"})]}),m.jsxs("button",{className:"relative p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none",title:"Thông báo",children:[m.jsx(aE,{className:"w-5 h-5"}),m.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"}),m.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"})]}),m.jsxs("div",{className:"relative",children:[m.jsxs("button",{onClick:()=>a(!r),className:"flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none",children:[m.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300",children:((e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"U").charAt(0).toUpperCase()}),m.jsxs("div",{className:"hidden md:block text-left",children:[m.jsx("div",{className:"text-xs font-semibold text-gray-800 leading-tight",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),m.jsx("div",{className:"text-[10px] text-emerald-600 font-medium",children:(e==null?void 0:e.role)||((d=e==null?void 0:e.roles)==null?void 0:d[0])||"Staff"})]}),m.jsx(ng,{className:"w-4 h-4 text-gray-400 hidden md:block"})]}),r&&m.jsxs("div",{className:"absolute right-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150",onMouseLeave:()=>a(!1),children:[m.jsxs("div",{className:"px-4 py-2.5 border-b border-gray-100 bg-gray-50/50",children:[m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Đang đăng nhập với"}),m.jsx("p",{className:"text-sm font-bold text-gray-900 truncate",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),m.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 rounded-md",children:[m.jsx(iv,{className:"w-3 h-3 mr-1"}),"Role: ",(e==null?void 0:e.role)||((f=e==null?void 0:e.roles)==null?void 0:f[0])||"User"]})]}),m.jsx("div",{className:"py-1",children:m.jsxs("button",{onClick:()=>{a(!1),t()},className:"flex items-center w-full px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors",children:[m.jsx(tv,{className:"w-4 h-4 mr-2"}),"Đăng xuất tài khoản"]})})]})]})]})]})},Mw=({mobileOpen:i,onCloseMobile:e})=>{const{user:t,loginAsDemoRole:r}=Oo(),a=[{name:"POS Thu Ngân",path:"/pos",icon:nv,badge:"Chính",badgeColor:"bg-emerald-100 text-emerald-700"},{name:"Màn Hình Bếp (KDS)",path:"/kitchen",icon:Lh,badge:"Live",badgeColor:"bg-amber-100 text-amber-800"},{name:"Quản Lý Kho & Nguyên Liệu",path:"/inventory",icon:Ph},{name:"Báo Cáo & Thống Kê",path:"/dashboard",icon:ev},{name:"Khách Hàng & Loyalty",path:"/customers",icon:Hc},{name:"Điểm Danh Nhân Viên",path:"/attendance",icon:Vc}];return m.jsxs(m.Fragment,{children:[i&&m.jsx("div",{className:"fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity",onClick:e}),m.jsxs("aside",{className:`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${i?"translate-x-0":"-translate-x-full"}`,children:[m.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-gray-100 md:hidden bg-gray-50",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx("div",{className:"flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-emerald-600",children:"POS"}),m.jsx("span",{className:"font-bold text-gray-900",children:"F&B Management"})]}),m.jsx("button",{onClick:e,className:"p-1.5 text-gray-500 rounded-lg hover:bg-gray-200",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 px-3 py-4 overflow-y-auto space-y-1",children:[m.jsx("div",{className:"px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:"Phân Hệ Quản Lý FE"}),a.map(l=>{const c=l.icon;return m.jsxs(Mo,{to:l.path,onClick:e,className:({isActive:d})=>`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${d?"bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold":"text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700"}`,children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx(c,{className:"w-5 h-5 flex-shrink-0"}),m.jsx("span",{children:l.name})]}),l.badge&&m.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${l.badgeColor}`,children:l.badge})]},l.path)})]}),m.jsxs("div",{className:"p-3 m-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100",children:[m.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-800 font-bold text-xs mb-2",children:[m.jsx(rv,{className:"w-4 h-4 text-emerald-600 animate-pulse"}),m.jsx("span",{children:"Đổi Vai Trò Xem Demo"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[m.jsx("button",{onClick:()=>r("Admin"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Admin"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"👑 Admin"}),m.jsx("button",{onClick:()=>r("Cashier"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Cashier"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"💵 Thu Ngân"}),m.jsx("button",{onClick:()=>r("Kitchen"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Kitchen"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"🍳 Bếp"}),m.jsx("button",{onClick:()=>r("Warehouse"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Warehouse"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"📦 Kho"})]})]})]})]})},Ew=()=>{const[i,e]=he.useState(!1);return m.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50",children:[m.jsx(Sw,{onToggleMobileSidebar:()=>e(!0)}),m.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[m.jsx(Mw,{mobileOpen:i,onCloseMobile:()=>e(!1)}),m.jsx("main",{className:"flex-1 overflow-y-auto pb-16 md:pb-6 p-3 sm:p-5 md:p-6 bg-gray-50",children:m.jsx(yS,{})})]}),m.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-14 bg-white border-t border-gray-200 md:hidden shadow-lg",children:[m.jsxs(Mo,{to:"/pos",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(nv,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"POS"})]}),m.jsxs(Mo,{to:"/kitchen",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(Lh,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Bếp"})]}),m.jsxs(Mo,{to:"/inventory",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(Ph,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Kho"})]}),m.jsxs(Mo,{to:"/dashboard",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(ev,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Thống kê"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="185",ww=0,cg=1,bw=2,xc=1,sv=2,Eo=3,Wr=0,Kn=1,or=2,cr=0,ma=1,ug=2,dg=3,fg=4,Tw=5,gs=100,Aw=101,Cw=102,Rw=103,Nw=104,Pw=200,Lw=201,Dw=202,Iw=203,Af=204,Cf=205,Uw=206,Ow=207,Fw=208,kw=209,Bw=210,zw=211,Vw=212,Hw=213,Gw=214,Rf=0,Nf=1,Pf=2,ya=3,Lf=4,Df=5,If=6,Uf=7,av=0,jw=1,Ww=2,Vi=0,ov=1,lv=2,cv=3,Uh=4,uv=5,dv=6,fv=7,hv=300,bs=301,Sa=302,Fd=303,kd=304,Gc=306,Of=1e3,lr=1001,Ff=1002,Mn=1003,Xw=1004,Xl=1005,Pn=1006,Bd=1007,_s=1008,ri=1009,pv=1010,mv=1011,Ro=1012,Oh=1013,ji=1014,Bi=1015,dr=1016,Fh=1017,kh=1018,No=1020,gv=35902,xv=35899,vv=1021,_v=1022,Ri=1023,fr=1026,ys=1027,yv=1028,Bh=1029,Ts=1030,zh=1031,Vh=1033,vc=33776,_c=33777,yc=33778,Sc=33779,kf=35840,Bf=35841,zf=35842,Vf=35843,Hf=36196,Gf=37492,jf=37496,Wf=37488,Xf=37489,Rc=37490,qf=37491,$f=37808,Yf=37809,Kf=37810,Zf=37811,Jf=37812,Qf=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,ah=37820,oh=37821,lh=36492,ch=36494,uh=36495,dh=36283,fh=36284,Nc=36285,hh=36286,qw=3200,ph=0,$w=1,Vr="",hi="srgb",Pc="srgb-linear",Lc="linear",Vt="srgb",ea=7680,hg=519,Yw=512,Kw=513,Zw=514,Hh=515,Jw=516,Qw=517,Gh=518,eb=519,pg=35044,mg="300 es",zi=2e3,Po=2001;function tb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Dc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nb(){const i=Dc("canvas");return i.style.display="block",i}const gg={};function xg(...i){const e="THREE."+i.shift();console.log(e,...i)}function Sv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function pt(...i){i=Sv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Lt(...i){i=Sv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ga(...i){const e=i.join(" ");e in gg||(gg[e]=!0,pt(...i))}function ib(i,e,t){return new Promise(function(r,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const rb={[Rf]:Nf,[Pf]:If,[Lf]:Uf,[ya]:Df,[Nf]:Rf,[If]:Pf,[Uf]:Lf,[Df]:ya};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zd=Math.PI/180,mh=180/Math.PI;function ko(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function sb(i,e){return(i%e+e)%e}function Vd(i,e,t){return(1-t)*i+t*e}function mo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zh=class Zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zh.prototype.isVector2=!0;let At=Zh;class Ca{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3],x=l[c+0],M=l[c+1],w=l[c+2],C=l[c+3];if(_!==C||f!==x||p!==M||g!==w){let S=f*x+p*M+g*w+_*C;S<0&&(x=-x,M=-M,w=-w,C=-C,S=-S);let y=1-d;if(S<.9995){const N=Math.acos(S),L=Math.sin(N);y=Math.sin(y*N)/L,d=Math.sin(d*N)/L,f=f*y+x*d,p=p*y+M*d,g=g*y+w*d,_=_*y+C*d}else{f=f*y+x*d,p=p*y+M*d,g=g*y+w*d,_=_*y+C*d;const N=1/Math.sqrt(f*f+p*p+g*g+_*_);f*=N,p*=N,g*=N,_*=N}}e[t]=f,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],f=r[a+1],p=r[a+2],g=r[a+3],_=l[c],x=l[c+1],M=l[c+2],w=l[c+3];return e[t]=d*w+g*_+f*M-p*x,e[t+1]=f*w+g*x+p*_-d*M,e[t+2]=p*w+g*M+d*x-f*_,e[t+3]=g*w-d*_-f*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(r/2),g=d(a/2),_=d(l/2),x=f(r/2),M=f(a/2),w=f(l/2);switch(c){case"XYZ":this._x=x*g*_+p*M*w,this._y=p*M*_-x*g*w,this._z=p*g*w+x*M*_,this._w=p*g*_-x*M*w;break;case"YXZ":this._x=x*g*_+p*M*w,this._y=p*M*_-x*g*w,this._z=p*g*w-x*M*_,this._w=p*g*_+x*M*w;break;case"ZXY":this._x=x*g*_-p*M*w,this._y=p*M*_+x*g*w,this._z=p*g*w+x*M*_,this._w=p*g*_-x*M*w;break;case"ZYX":this._x=x*g*_-p*M*w,this._y=p*M*_+x*g*w,this._z=p*g*w-x*M*_,this._w=p*g*_+x*M*w;break;case"YZX":this._x=x*g*_+p*M*w,this._y=p*M*_+x*g*w,this._z=p*g*w-x*M*_,this._w=p*g*_-x*M*w;break;case"XZY":this._x=x*g*_-p*M*w,this._y=p*M*_-x*g*w,this._z=p*g*w+x*M*_,this._w=p*g*_+x*M*w;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],g=t[6],_=t[10],x=r+d+_;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-f)*M,this._y=(l-p)*M,this._z=(c-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(g-f)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-p)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(f+g)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(c-a)/M,this._x=(l+p)/M,this._y=(f+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,g=t._w;return this._x=r*g+c*d+a*p-l*f,this._y=a*g+c*f+l*d-r*p,this._z=l*g+c*p+r*f-a*d,this._w=c*g-r*d-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),g=Math.sin(p);f=Math.sin(f*p)/g,t=Math.sin(t*p)/g,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Jh=class Jh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*a-d*r),g=2*(d*t-l*a),_=2*(l*r-c*t);return this.x=t+f*p+c*_-d*g,this.y=r+f*g+d*p-l*_,this.z=a+f*_+l*g-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*c-r*f,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Jh.prototype.isVector3=!0;let re=Jh;const Hd=new re,vg=new Ca,Qh=class Qh{constructor(e,t,r,a,l,c,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,p)}set(e,t,r,a,l,c,d,f,p){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=t,g[4]=l,g[5]=f,g[6]=r,g[7]=c,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],p=r[1],g=r[4],_=r[7],x=r[2],M=r[5],w=r[8],C=a[0],S=a[3],y=a[6],N=a[1],L=a[4],T=a[7],I=a[2],P=a[5],F=a[8];return l[0]=c*C+d*N+f*I,l[3]=c*S+d*L+f*P,l[6]=c*y+d*T+f*F,l[1]=p*C+g*N+_*I,l[4]=p*S+g*L+_*P,l[7]=p*y+g*T+_*F,l[2]=x*C+M*N+w*I,l[5]=x*S+M*L+w*P,l[8]=x*y+M*T+w*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],g=e[8];return t*c*g-t*d*p-r*l*g+r*d*f+a*l*p-a*c*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],g=e[8],_=g*c-d*p,x=d*f-g*l,M=p*l-c*f,w=t*_+r*x+a*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(a*p-g*r)*C,e[2]=(d*r-a*c)*C,e[3]=x*C,e[4]=(g*t-a*f)*C,e[5]=(a*l-d*t)*C,e[6]=M*C,e[7]=(r*f-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*d)+c+e,-a*p,a*f,-a*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Gd.makeScale(e,t)),this}rotate(e){return ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Gd.makeRotation(-e)),this}translate(e,t){return ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Gd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Qh.prototype.isMatrix3=!0;let _t=Qh;const Gd=new _t,_g=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ab(){const i={enabled:!0,workingColorSpace:Pc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Vt&&(a.r=ur(a.r),a.g=ur(a.g),a.b=ur(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(a.r=xa(a.r),a.g=xa(a.g),a.b=xa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Vr?Lc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Pc]:{primaries:e,whitePoint:r,transfer:Lc,toXYZ:_g,fromXYZ:yg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:_g,fromXYZ:yg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),i}const Rt=ab();function ur(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ta;class ob{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ta===void 0&&(ta=Dc("canvas")),ta.width=e.width,ta.height=e.height;const a=ta.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ta}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Dc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ur(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lb=0;class jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push(jd(a[c].image)):l.push(jd(a[c]))}else l=jd(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function jd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ob.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let cb=0;const Wd=new re;class Bn extends Cs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=lr,a=lr,l=Pn,c=_s,d=Ri,f=ri,p=Bn.DEFAULT_ANISOTROPY,g=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=ko(),this.name="",this.source=new jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wd).x}get height(){return this.source.getSize(Wd).y}get depth(){return this.source.getSize(Wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Of:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Of:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=hv;Bn.DEFAULT_ANISOTROPY=1;const ep=class ep{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],g=f[4],_=f[8],x=f[1],M=f[5],w=f[9],C=f[2],S=f[6],y=f[10];if(Math.abs(g-x)<.01&&Math.abs(_-C)<.01&&Math.abs(w-S)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+C)<.1&&Math.abs(w+S)<.1&&Math.abs(p+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,T=(M+1)/2,I=(y+1)/2,P=(g+x)/4,F=(_+C)/4,b=(w+S)/4;return L>T&&L>I?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=P/r,l=F/r):T>I?T<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),r=P/a,l=b/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=F/l,a=b/l),this.set(r,a,l,t),this}let N=Math.sqrt((S-w)*(S-w)+(_-C)*(_-C)+(x-g)*(x-g));return Math.abs(N)<.001&&(N=1),this.x=(S-w)/N,this.y=(_-C)/N,this.z=(x-g)/N,this.w=Math.acos((p+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;let Qt=ep;class ub extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Bn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new jh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends ub{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Mv extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class db extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ic=class Ic{constructor(e,t,r,a,l,c,d,f,p,g,_,x,M,w,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,p,g,_,x,M,w,C,S)}set(e,t,r,a,l,c,d,f,p,g,_,x,M,w,C,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=d,y[13]=f,y[2]=p,y[6]=g,y[10]=_,y[14]=x,y[3]=M,y[7]=w,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ic().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/na.setFromMatrixColumn(e,0).length(),l=1/na.setFromMatrixColumn(e,1).length(),c=1/na.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=c*g,M=c*_,w=d*g,C=d*_;t[0]=f*g,t[4]=-f*_,t[8]=p,t[1]=M+w*p,t[5]=x-C*p,t[9]=-d*f,t[2]=C-x*p,t[6]=w+M*p,t[10]=c*f}else if(e.order==="YXZ"){const x=f*g,M=f*_,w=p*g,C=p*_;t[0]=x+C*d,t[4]=w*d-M,t[8]=c*p,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=M*d-w,t[6]=C+x*d,t[10]=c*f}else if(e.order==="ZXY"){const x=f*g,M=f*_,w=p*g,C=p*_;t[0]=x-C*d,t[4]=-c*_,t[8]=w+M*d,t[1]=M+w*d,t[5]=c*g,t[9]=C-x*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const x=c*g,M=c*_,w=d*g,C=d*_;t[0]=f*g,t[4]=w*p-M,t[8]=x*p+C,t[1]=f*_,t[5]=C*p+x,t[9]=M*p-w,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const x=c*f,M=c*p,w=d*f,C=d*p;t[0]=f*g,t[4]=C-x*_,t[8]=w*_+M,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-p*g,t[6]=M*_+w,t[10]=x-C*_}else if(e.order==="XZY"){const x=c*f,M=c*p,w=d*f,C=d*p;t[0]=f*g,t[4]=-_,t[8]=p*g,t[1]=x*_+C,t[5]=c*g,t[9]=M*_-w,t[2]=w*_-M,t[6]=d*g,t[10]=C*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fb,e,hb)}lookAt(e,t,r){const a=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ir.crossVectors(r,ti),Ir.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ir.crossVectors(r,ti)),Ir.normalize(),ql.crossVectors(ti,Ir),a[0]=Ir.x,a[4]=ql.x,a[8]=ti.x,a[1]=Ir.y,a[5]=ql.y,a[9]=ti.y,a[2]=Ir.z,a[6]=ql.z,a[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],p=r[12],g=r[1],_=r[5],x=r[9],M=r[13],w=r[2],C=r[6],S=r[10],y=r[14],N=r[3],L=r[7],T=r[11],I=r[15],P=a[0],F=a[4],b=a[8],O=a[12],V=a[1],B=a[5],J=a[9],ue=a[13],me=a[2],K=a[6],pe=a[10],ee=a[14],$=a[3],le=a[7],H=a[11],D=a[15];return l[0]=c*P+d*V+f*me+p*$,l[4]=c*F+d*B+f*K+p*le,l[8]=c*b+d*J+f*pe+p*H,l[12]=c*O+d*ue+f*ee+p*D,l[1]=g*P+_*V+x*me+M*$,l[5]=g*F+_*B+x*K+M*le,l[9]=g*b+_*J+x*pe+M*H,l[13]=g*O+_*ue+x*ee+M*D,l[2]=w*P+C*V+S*me+y*$,l[6]=w*F+C*B+S*K+y*le,l[10]=w*b+C*J+S*pe+y*H,l[14]=w*O+C*ue+S*ee+y*D,l[3]=N*P+L*V+T*me+I*$,l[7]=N*F+L*B+T*K+I*le,l[11]=N*b+L*J+T*pe+I*H,l[15]=N*O+L*ue+T*ee+I*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],g=e[2],_=e[6],x=e[10],M=e[14],w=e[3],C=e[7],S=e[11],y=e[15],N=f*M-p*x,L=d*M-p*_,T=d*x-f*_,I=c*M-p*g,P=c*x-f*g,F=c*_-d*g;return t*(C*N-S*L+y*T)-r*(w*N-S*I+y*P)+a*(w*L-C*I+y*F)-l*(w*T-C*P+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],f=e[2],p=e[6],g=e[10];return t*(c*g-d*p)-r*(l*g-d*f)+a*(l*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],g=e[8],_=e[9],x=e[10],M=e[11],w=e[12],C=e[13],S=e[14],y=e[15],N=t*d-r*c,L=t*f-a*c,T=t*p-l*c,I=r*f-a*d,P=r*p-l*d,F=a*p-l*f,b=g*C-_*w,O=g*S-x*w,V=g*y-M*w,B=_*S-x*C,J=_*y-M*C,ue=x*y-M*S,me=N*ue-L*J+T*B+I*V-P*O+F*b;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/me;return e[0]=(d*ue-f*J+p*B)*K,e[1]=(a*J-r*ue-l*B)*K,e[2]=(C*F-S*P+y*I)*K,e[3]=(x*P-_*F-M*I)*K,e[4]=(f*V-c*ue-p*O)*K,e[5]=(t*ue-a*V+l*O)*K,e[6]=(S*T-w*F-y*L)*K,e[7]=(g*F-x*T+M*L)*K,e[8]=(c*J-d*V+p*b)*K,e[9]=(r*V-t*J-l*b)*K,e[10]=(w*P-C*T+y*N)*K,e[11]=(_*T-g*P-M*N)*K,e[12]=(d*O-c*B-f*b)*K,e[13]=(t*B-r*O+a*b)*K,e[14]=(C*L-w*I-S*N)*K,e[15]=(g*I-_*L+x*N)*K,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,p=l*c,g=l*d;return this.set(p*c+r,p*d-a*f,p*f+a*d,0,p*d+a*f,g*d+r,g*f-a*c,0,p*f-a*d,g*f+a*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,g=c+c,_=d+d,x=l*p,M=l*g,w=l*_,C=c*g,S=c*_,y=d*_,N=f*p,L=f*g,T=f*_,I=r.x,P=r.y,F=r.z;return a[0]=(1-(C+y))*I,a[1]=(M+T)*I,a[2]=(w-L)*I,a[3]=0,a[4]=(M-T)*P,a[5]=(1-(x+y))*P,a[6]=(S+N)*P,a[7]=0,a[8]=(w+L)*F,a[9]=(S-N)*F,a[10]=(1-(x+C))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=na.set(a[0],a[1],a[2]).length();const d=na.set(a[4],a[5],a[6]).length(),f=na.set(a[8],a[9],a[10]).length();l<0&&(c=-c),wi.copy(this);const p=1/c,g=1/d,_=1/f;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=g,wi.elements[5]*=g,wi.elements[6]*=g,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,t.setFromRotationMatrix(wi),r.x=c,r.y=d,r.z=f,this}makePerspective(e,t,r,a,l,c,d=zi,f=!1){const p=this.elements,g=2*l/(t-e),_=2*l/(r-a),x=(t+e)/(t-e),M=(r+a)/(r-a);let w,C;if(f)w=l/(c-l),C=c*l/(c-l);else if(d===zi)w=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Po)w=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=zi,f=!1){const p=this.elements,g=2/(t-e),_=2/(r-a),x=-(t+e)/(t-e),M=-(r+a)/(r-a);let w,C;if(f)w=1/(c-l),C=c/(c-l);else if(d===zi)w=-2/(c-l),C=-(c+l)/(c-l);else if(d===Po)w=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Ic.prototype.isMatrix4=!0;let tn=Ic;const na=new re,wi=new tn,fb=new re(0,0,0),hb=new re(1,1,1),Ir=new re,ql=new re,ti=new re,Sg=new tn,Mg=new Ca;class Xr{constructor(e=0,t=0,r=0,a=Xr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],f=a[1],p=a[5],g=a[9],_=a[2],x=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Sg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mg.setFromEuler(this),this.setFromQuaternion(Mg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xr.DEFAULT_ORDER="XYZ";class Wh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pb=0;const Eg=new re,ia=new Ca,nr=new tn,$l=new re,go=new re,mb=new re,gb=new Ca,wg=new re(1,0,0),bg=new re(0,1,0),Tg=new re(0,0,1),Ag={type:"added"},xb={type:"removed"},ra={type:"childadded",child:null},Xd={type:"childremoved",child:null};class Dn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new re,t=new Xr,r=new Ca,a=new re(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new tn},normalMatrix:{value:new _t}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(wg,e)}rotateY(e){return this.rotateOnAxis(bg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return Eg.copy(e).applyQuaternion(this.quaternion),this.position.add(Eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wg,e)}translateY(e){return this.translateOnAxis(bg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?$l.copy(e):$l.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(go,$l,this.up):nr.lookAt($l,go,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),ia.setFromRotationMatrix(nr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ag),ra.child=e,this.dispatchEvent(ra),ra.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xb),Xd.child=e,this.dispatchEvent(Xd),Xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ag),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,mb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,gb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,g=f.length;p<g;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),g=c(e.images),_=c(e.shapes),x=c(e.skeletons),M=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=a,r;function c(d){const f=[];for(const p in d){const g=d[p];delete g.metadata,f.push(g)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new re(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class wo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vb={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),y=this._getHandJoint(p,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),M=.02,w=.005;p.inputState.pinching&&x>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vb)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new wo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ev={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function $d(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Rt.workingColorSpace){if(e=sb(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=$d(c,l,e+1/3),this.g=$d(c,l,e),this.b=$d(c,l,e-1/3)}return Rt.colorSpaceToWorking(this,a),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=Ev[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Rt.workingToColorSpace(Nn.copy(this),e),Math.round(Tt(Nn.r*255,0,255))*65536+Math.round(Tt(Nn.g*255,0,255))*256+Math.round(Tt(Nn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,a=Nn.g,l=Nn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let f,p;const g=(d+c)/2;if(d===c)f=0,p=0;else{const _=c-d;switch(p=g<=.5?_/(c+d):_/(2-c-d),c){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=g,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=hi){Rt.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,a=Nn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(Yl);const r=Vd(Ur.h,Yl.h,t),a=Vd(Ur.s,Yl.s,t),l=Vd(Ur.l,Yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Et;Et.NAMES=Ev;class _b extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xr,this.environmentIntensity=1,this.environmentRotation=new Xr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new re,ir=new re,Yd=new re,rr=new re,sa=new re,aa=new re,Cg=new re,Kd=new re,Zd=new re,Jd=new re,Qd=new Qt,ef=new Qt,tf=new Qt;class Ci{constructor(e=new re,t=new re,r=new re){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),bi.subVectors(e,t),a.cross(bi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){bi.subVectors(a,t),ir.subVectors(r,t),Yd.subVectors(e,t);const c=bi.dot(bi),d=bi.dot(ir),f=bi.dot(Yd),p=ir.dot(ir),g=ir.dot(Yd),_=c*p-d*d;if(_===0)return l.set(0,0,0),null;const x=1/_,M=(p*f-d*g)*x,w=(c*g-d*f)*x;return l.set(1-M-w,w,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,a,l,c,d,f){return this.getBarycoord(e,t,r,a,rr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,rr.x),f.addScaledVector(c,rr.y),f.addScaledVector(d,rr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,c){return Qd.setScalar(0),ef.setScalar(0),tf.setScalar(0),Qd.fromBufferAttribute(e,t),ef.fromBufferAttribute(e,r),tf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(Qd,l.x),c.addScaledVector(ef,l.y),c.addScaledVector(tf,l.z),c}static isFrontFacing(e,t,r,a){return bi.subVectors(r,t),ir.subVectors(e,t),bi.cross(ir).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),bi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;sa.subVectors(a,r),aa.subVectors(l,r),Kd.subVectors(e,r);const f=sa.dot(Kd),p=aa.dot(Kd);if(f<=0&&p<=0)return t.copy(r);Zd.subVectors(e,a);const g=sa.dot(Zd),_=aa.dot(Zd);if(g>=0&&_<=g)return t.copy(a);const x=f*_-g*p;if(x<=0&&f>=0&&g<=0)return c=f/(f-g),t.copy(r).addScaledVector(sa,c);Jd.subVectors(e,l);const M=sa.dot(Jd),w=aa.dot(Jd);if(w>=0&&M<=w)return t.copy(l);const C=M*p-f*w;if(C<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(r).addScaledVector(aa,d);const S=g*w-M*_;if(S<=0&&_-g>=0&&M-w>=0)return Cg.subVectors(l,a),d=(_-g)/(_-g+(M-w)),t.copy(a).addScaledVector(Cg,d);const y=1/(S+C+x);return c=C*y,d=x*y,t.copy(r).addScaledVector(sa,c).addScaledVector(aa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bo{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ti):Ti.fromBufferAttribute(l,c),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Kl.copy(r.boundingBox)),Kl.applyMatrix4(e.matrixWorld),this.union(Kl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xo),Zl.subVectors(this.max,xo),oa.subVectors(e.a,xo),la.subVectors(e.b,xo),ca.subVectors(e.c,xo),Or.subVectors(la,oa),Fr.subVectors(ca,la),ds.subVectors(oa,ca);let t=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-ds.z,ds.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,ds.z,0,-ds.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-ds.y,ds.x,0];return!nf(t,oa,la,ca,Zl)||(t=[1,0,0,0,1,0,0,0,1],!nf(t,oa,la,ca,Zl))?!1:(Jl.crossVectors(Or,Fr),t=[Jl.x,Jl.y,Jl.z],nf(t,oa,la,ca,Zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new re,new re,new re,new re,new re,new re,new re,new re],Ti=new re,Kl=new Bo,oa=new re,la=new re,ca=new re,Or=new re,Fr=new re,ds=new re,xo=new re,Zl=new re,Jl=new re,fs=new re;function nf(i,e,t,r,a){for(let l=0,c=i.length-3;l<=c;l+=3){fs.fromArray(i,l);const d=a.x*Math.abs(fs.x)+a.y*Math.abs(fs.y)+a.z*Math.abs(fs.z),f=e.dot(fs),p=t.dot(fs),g=r.dot(fs);if(Math.max(-Math.max(f,p,g),Math.min(f,p,g))>d)return!1}return!0}const cn=new re,Ql=new At;let yb=0;class Gi extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=pg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ql.fromBufferAttribute(this,t),Ql.applyMatrix3(e),this.setXY(t,Ql.x,Ql.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=mo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),a=$n(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),a=$n(a,this.array),l=$n(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wv extends Gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class bv extends Gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pi extends Gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Sb=new Bo,vo=new re,rf=new re;class Xh{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Sb.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(vo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(rf)),this.expandByPoint(vo.copy(e.center).sub(rf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Mb=0;const fi=new tn,sf=new Dn,ua=new re,ni=new Bo,_o=new Bo,xn=new re;class Xi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tb(e)?bv:wv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return sf.lookAt(e),sf.updateMatrix(),this.applyMatrix4(sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];_o.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ni.min,_o.min),ni.expandByPoint(xn),xn.addVectors(ni.max,_o.max),ni.expandByPoint(xn)):(ni.expandByPoint(_o.min),ni.expandByPoint(_o.max))}ni.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)xn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(xn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)xn.fromBufferAttribute(d,p),f&&(ua.fromBufferAttribute(e,p),xn.add(ua)),a=Math.max(a,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let b=0;b<r.count;b++)d[b]=new re,f[b]=new re;const p=new re,g=new re,_=new re,x=new At,M=new At,w=new At,C=new re,S=new re;function y(b,O,V){p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,O),_.fromBufferAttribute(r,V),x.fromBufferAttribute(l,b),M.fromBufferAttribute(l,O),w.fromBufferAttribute(l,V),g.sub(p),_.sub(p),M.sub(x),w.sub(x);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(C.copy(g).multiplyScalar(w.y).addScaledVector(_,-M.y).multiplyScalar(B),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-w.x).multiplyScalar(B),d[b].add(C),d[O].add(C),d[V].add(C),f[b].add(S),f[O].add(S),f[V].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let b=0,O=N.length;b<O;++b){const V=N[b],B=V.start,J=V.count;for(let ue=B,me=B+J;ue<me;ue+=3)y(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new re,T=new re,I=new re,P=new re;function F(b){I.fromBufferAttribute(a,b),P.copy(I);const O=d[b];L.copy(O),L.sub(I.multiplyScalar(I.dot(O))).normalize(),T.crossVectors(P,O);const B=T.dot(f[b])<0?-1:1;c.setXYZW(b,L.x,L.y,L.z,B)}for(let b=0,O=N.length;b<O;++b){const V=N[b],B=V.start,J=V.count;for(let ue=B,me=B+J;ue<me;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const a=new re,l=new re,c=new re,d=new re,f=new re,p=new re,g=new re,_=new re;if(e)for(let x=0,M=e.count;x<M;x+=3){const w=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);a.fromBufferAttribute(t,w),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),d.fromBufferAttribute(r,w),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),d.add(g),f.add(g),p.add(g),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let x=0,M=t.count;x<M;x+=3)a.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),c.fromBufferAttribute(t,x+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,f){const p=d.array,g=d.itemSize,_=d.normalized,x=new p.constructor(f.length*g);let M=0,w=0;for(let C=0,S=f.length;C<S;C++){d.isInterleavedBufferAttribute?M=f[C]*d.data.stride+d.offset:M=f[C]*g;for(let y=0;y<g;y++)x[w++]=p[M++]}return new Gi(x,g,_)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let g=0,_=p.length;g<_;g++){const x=p[g],M=e(x,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],g=[];for(let _=0,x=p.length;_<x;_++){const M=p[_];g.push(M.toJSON(e.data))}g.length>0&&(a[f]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const g=a[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,M=_.length;x<M;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,g=c.length;p<g;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Eb=0;class zo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eb++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=ma,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Af,this.blendDst=Cf,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(r.blending=this.blending),this.side!==Wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Af&&(r.blendSrc=this.blendSrc),this.blendDst!==Cf&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new At().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new re,af=new re,ec=new re,kr=new re,of=new re,tc=new re,lf=new re;class Tv{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){af.copy(e).add(t).multiplyScalar(.5),ec.copy(t).sub(e).normalize(),kr.copy(this.origin).sub(af);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ec),d=kr.dot(this.direction),f=-kr.dot(ec),p=kr.lengthSq(),g=Math.abs(1-c*c);let _,x,M,w;if(g>0)if(_=c*f-d,x=c*d-f,w=l*g,_>=0)if(x>=-w)if(x<=w){const C=1/g;_*=C,x*=C,M=_*(_+c*x+2*d)+x*(c*_+x+2*f)+p}else x=l,_=Math.max(0,-(c*x+d)),M=-_*_+x*(x+2*f)+p;else x=-l,_=Math.max(0,-(c*x+d)),M=-_*_+x*(x+2*f)+p;else x<=-w?(_=Math.max(0,-(-c*l+d)),x=_>0?-l:Math.min(Math.max(-l,-f),l),M=-_*_+x*(x+2*f)+p):x<=w?(_=0,x=Math.min(Math.max(-l,-f),l),M=x*(x+2*f)+p):(_=Math.max(0,-(c*l+d)),x=_>0?l:Math.min(Math.max(-l,-f),l),M=-_*_+x*(x+2*f)+p);else x=c>0?-l:l,_=Math.max(0,-(c*x+d)),M=-_*_+x*(x+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(af).addScaledVector(ec,x),M}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),a=ar.dot(ar)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,f;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,a=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,a=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,c=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,c=(e.min.y-x.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-x.z)*_,f=(e.max.z-x.z)*_):(d=(e.max.z-x.z)*_,f=(e.min.z-x.z)*_),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,a,l){of.subVectors(t,e),tc.subVectors(r,e),lf.crossVectors(of,tc);let c=this.direction.dot(lf),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;kr.subVectors(this.origin,e);const f=d*this.direction.dot(tc.crossVectors(kr,tc));if(f<0)return null;const p=d*this.direction.dot(of.cross(kr));if(p<0||f+p>c)return null;const g=-d*kr.dot(lf);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Av extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.combine=av,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rg=new tn,hs=new Tv,nc=new Xh,Ng=new re,ic=new re,rc=new re,sc=new re,cf=new re,ac=new re,Pg=new re,oc=new re;class Ni extends Dn{constructor(e=new Xi,t=new Av){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){ac.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const g=d[f],_=l[f];g!==0&&(cf.fromBufferAttribute(_,e),c?ac.addScaledVector(cf,g):ac.addScaledVector(cf.sub(t),g))}t.add(ac)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),nc.copy(r.boundingSphere),nc.applyMatrix4(l),hs.copy(e.ray).recast(e.near),!(nc.containsPoint(hs.origin)===!1&&(hs.intersectSphere(nc,Ng)===null||hs.origin.distanceToSquared(Ng)>(e.far-e.near)**2))&&(Rg.copy(l).invert(),hs.copy(e.ray).applyMatrix4(Rg),!(r.boundingBox!==null&&hs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,hs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,C=x.length;w<C;w++){const S=x[w],y=c[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let T=N,I=L;T<I;T+=3){const P=d.getX(T),F=d.getX(T+1),b=d.getX(T+2);a=lc(this,y,e,r,p,g,_,P,F,b),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=w,y=C;S<y;S+=3){const N=d.getX(S),L=d.getX(S+1),T=d.getX(S+2);a=lc(this,c,e,r,p,g,_,N,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let w=0,C=x.length;w<C;w++){const S=x[w],y=c[S.materialIndex],N=Math.max(S.start,M.start),L=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let T=N,I=L;T<I;T+=3){const P=T,F=T+1,b=T+2;a=lc(this,y,e,r,p,g,_,P,F,b),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const w=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=w,y=C;S<y;S+=3){const N=S,L=S+1,T=S+2;a=lc(this,c,e,r,p,g,_,N,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function wb(i,e,t,r,a,l,c,d){let f;if(e.side===Kn?f=r.intersectTriangle(c,l,a,!0,d):f=r.intersectTriangle(a,l,c,e.side===Wr,d),f===null)return null;oc.copy(d),oc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(oc);return p<t.near||p>t.far?null:{distance:p,point:oc.clone(),object:i}}function lc(i,e,t,r,a,l,c,d,f,p){i.getVertexPosition(d,ic),i.getVertexPosition(f,rc),i.getVertexPosition(p,sc);const g=wb(i,e,t,r,ic,rc,sc,Pg);if(g){const _=new re;Ci.getBarycoord(Pg,ic,rc,sc,_),a&&(g.uv=Ci.getInterpolatedAttribute(a,d,f,p,_,new At)),l&&(g.uv1=Ci.getInterpolatedAttribute(l,d,f,p,_,new At)),c&&(g.normal=Ci.getInterpolatedAttribute(c,d,f,p,_,new re),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:f,c:p,normal:new re,materialIndex:0};Ci.getNormal(ic,rc,sc,x.normal),g.face=x,g.barycoord=_}return g}class bb extends Bn{constructor(e=null,t=1,r=1,a,l,c,d,f,p=Mn,g=Mn,_,x){super(null,c,d,f,p,g,a,l,_,x),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uf=new re,Tb=new re,Ab=new _t;class zr{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=uf.subVectors(r,t).cross(Tb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(uf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Ab.getNormalMatrix(e),a=this.coplanarPoint(uf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Xh,Cb=new At(.5,.5),cc=new re;class qh{constructor(e=new zr,t=new zr,r=new zr,a=new zr,l=new zr,c=new zr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],p=l[3],g=l[4],_=l[5],x=l[6],M=l[7],w=l[8],C=l[9],S=l[10],y=l[11],N=l[12],L=l[13],T=l[14],I=l[15];if(a[0].setComponents(p-c,M-g,y-w,I-N).normalize(),a[1].setComponents(p+c,M+g,y+w,I+N).normalize(),a[2].setComponents(p+d,M+_,y+C,I+L).normalize(),a[3].setComponents(p-d,M-_,y-C,I-L).normalize(),r)a[4].setComponents(f,x,S,T).normalize(),a[5].setComponents(p-f,M-x,y-S,I-T).normalize();else if(a[4].setComponents(p-f,M-x,y-S,I-T).normalize(),t===zi)a[5].setComponents(p+f,M+x,y+S,I+T).normalize();else if(t===Po)a[5].setComponents(f,x,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){ps.center.set(0,0,0);const t=Cb.distanceTo(e.center);return ps.radius=.7071067811865476+t,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(cc.x=a.normal.x>0?e.max.x:e.min.x,cc.y=a.normal.y>0?e.max.y:e.min.y,cc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(cc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cv extends Bn{constructor(e=[],t=bs,r,a,l,c,d,f,p,g){super(e,t,r,a,l,c,d,f,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ma extends Bn{constructor(e,t,r=ji,a,l,c,d=Mn,f=Mn,p,g=fr,_=1){if(g!==fr&&g!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:t,depth:_};super(x,a,l,c,d,f,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rb extends Ma{constructor(e,t=ji,r=bs,a,l,c=Mn,d=Mn,f,p=fr){const g={width:e,height:e,depth:1},_=[g,g,g,g,g,g];super(e,e,t,r,a,l,c,d,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ra extends Xi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],g=[],_=[];let x=0,M=0;w("z","y","x",-1,-1,r,t,e,c,l,0),w("z","y","x",1,-1,r,t,-e,c,l,1),w("x","z","y",1,1,e,r,t,a,c,2),w("x","z","y",1,-1,e,r,-t,a,c,3),w("x","y","z",1,-1,e,t,r,a,l,4),w("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new pi(p,3)),this.setAttribute("normal",new pi(g,3)),this.setAttribute("uv",new pi(_,2));function w(C,S,y,N,L,T,I,P,F,b,O){const V=T/F,B=I/b,J=T/2,ue=I/2,me=P/2,K=F+1,pe=b+1;let ee=0,$=0;const le=new re;for(let H=0;H<pe;H++){const D=H*B-ue;for(let G=0;G<K;G++){const be=G*V-J;le[C]=be*N,le[S]=D*L,le[y]=me,p.push(le.x,le.y,le.z),le[C]=0,le[S]=0,le[y]=P>0?1:-1,g.push(le.x,le.y,le.z),_.push(G/F),_.push(1-H/b),ee+=1}}for(let H=0;H<b;H++)for(let D=0;D<F;D++){const G=x+D+K*H,be=x+D+K*(H+1),Re=x+(D+1)+K*(H+1),Ne=x+(D+1)+K*H;f.push(G,be,Ne),f.push(be,Re,Ne),$+=6}d.addGroup(M,$,O),M+=$,x+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jc extends Xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(a),p=d+1,g=f+1,_=e/d,x=t/f,M=[],w=[],C=[],S=[];for(let y=0;y<g;y++){const N=y*x-c;for(let L=0;L<p;L++){const T=L*_-l;w.push(T,-N,0),C.push(0,0,1),S.push(L/d),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let N=0;N<d;N++){const L=N+p*y,T=N+p*(y+1),I=N+1+p*(y+1),P=N+1+p*y;M.push(L,T,P),M.push(T,I,P)}this.setIndex(M),this.setAttribute("position",new pi(w,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jc(e.width,e.height,e.widthSegments,e.heightSegments)}}class $h extends Xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let p=0;const g=[],_=new re,x=new re,M=[],w=[],C=[],S=[];for(let y=0;y<=r;y++){const N=[],L=y/r,T=c+L*d,I=e*Math.cos(T),P=Math.sqrt(e*e-I*I);let F=0;y===0&&c===0?F=.5/t:y===r&&f===Math.PI&&(F=-.5/t);for(let b=0;b<=t;b++){const O=b/t,V=a+O*l;_.x=-P*Math.cos(V),_.y=I,_.z=P*Math.sin(V),w.push(_.x,_.y,_.z),x.copy(_).normalize(),C.push(x.x,x.y,x.z),S.push(O+F,1-L),N.push(p++)}g.push(N)}for(let y=0;y<r;y++)for(let N=0;N<t;N++){const L=g[y][N+1],T=g[y][N],I=g[y+1][N],P=g[y+1][N+1];(y!==0||c>0)&&M.push(L,T,P),(y!==r-1||f<Math.PI)&&M.push(T,I,P)}this.setIndex(M),this.setAttribute("position",new pi(w,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $h(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];if(Lg(a))a.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Lg(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const r=Ea(i[t]);for(const a in r)e[a]=r[a]}return e}function Lg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nb(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Pb={clone:Ea,merge:Fn};var Lb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Db=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lb,this.fragmentShader=Db,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=Nb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(a.value);break;case"v2":this.uniforms[r].value=new At().fromArray(a.value);break;case"v3":this.uniforms[r].value=new re().fromArray(a.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(a.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ib extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pv extends zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ub extends Pv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ob extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fb extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yh extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const df=new tn,Dg=new re,Ig=new re;class Lv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dg),Ig.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ig),t.updateMatrixWorld(),df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(df,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Po||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const uc=new re,dc=new Ca,Oi=new re;class Dv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(uc,dc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(uc,dc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uc,dc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Br=new re,Ug=new At,Og=new At;class ii extends Dv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mh*2*Math.atan(Math.tan(zd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Br.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Br.x,Br.y).multiplyScalar(-e/Br.z),Br.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Br.x,Br.y).multiplyScalar(-e/Br.z)}getViewSize(e,t){return this.getViewBounds(e,Ug,Og),t.subVectors(Og,Ug)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*r/p,a*=c.width/f,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kb extends Lv{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Bb extends Yh{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new kb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Kh extends Dv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=g*this.view.offsetY,f=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zb extends Lv{constructor(){super(new Kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Vb extends Yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new zb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hb extends Yh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const da=-90,fa=1;class Gb extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(da,fa,e,t);a.layers=this.layers,this.add(a);const l=new ii(da,fa,e,t);l.layers=this.layers,this.add(l);const c=new ii(da,fa,e,t);c.layers=this.layers,this.add(c);const d=new ii(da,fa,e,t);d.layers=this.layers,this.add(d);const f=new ii(da,fa,e,t);f.layers=this.layers,this.add(f);const p=new ii(da,fa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Po)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(_,x,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class jb extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Fg=new tn;class Wb{constructor(e,t,r=0,a=1/0){this.ray=new Tv(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Lt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fg),this}intersectObject(e,t=!0,r=[]){return gh(e,this,r,t),r.sort(kg),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)gh(e[a],this,r,t);return r.sort(kg),r}}function kg(i,e){return i.distance-e.distance}function gh(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=i.children;for(let c=0,d=l.length;c<d;c++)gh(l[c],e,t,!0)}}class Xb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const tp=class tp{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};tp.prototype.isMatrix2=!0;let Bg=tp;function zg(i,e,t,r){const a=qb(r);switch(t){case vv:return i*e;case yv:return i*e/a.components*a.byteLength;case Bh:return i*e/a.components*a.byteLength;case Ts:return i*e*2/a.components*a.byteLength;case zh:return i*e*2/a.components*a.byteLength;case _v:return i*e*3/a.components*a.byteLength;case Ri:return i*e*4/a.components*a.byteLength;case Vh:return i*e*4/a.components*a.byteLength;case vc:case _c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yc:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Bf:case Vf:return Math.max(i,16)*Math.max(e,8)/4;case kf:case zf:return Math.max(i,8)*Math.max(e,8)/2;case Hf:case Gf:case Wf:case Xf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jf:case Rc:case qf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case lh:case ch:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Nc:case hh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function qb(i){switch(i){case ri:case pv:return{byteLength:1,components:1};case Ro:case mv:case dr:return{byteLength:2,components:1};case Fh:case kh:return{byteLength:2,components:4};case ji:case Oh:case Bi:return{byteLength:4,components:1};case gv:case xv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Iv(){let i=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function $b(i){const e=new WeakMap;function t(d,f){const p=d.array,g=d.usage,_=p.byteLength,x=i.createBuffer();i.bindBuffer(f,x),i.bufferData(f,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const g=f.array,_=f.updateRanges;if(i.bindBuffer(p,d),_.length===0)i.bufferSubData(p,0,g);else{_.sort((M,w)=>M.start-w.start);let x=0;for(let M=1;M<_.length;M++){const w=_[x],C=_[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++x,_[x]=C)}_.length=x+1;for(let M=0,w=_.length;M<w;M++){const C=_[M];i.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:a,remove:l,update:c}}var Yb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,eT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,lT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,dT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,vT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_T=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ST=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ET=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bT="gl_FragColor = linearToOutputTexel( gl_FragColor );",TT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,CT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,OT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,VT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,HT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$T=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,YT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ZT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,JT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,s2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,l2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,c2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,u2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,p2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,m2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,y2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,b2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,C2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,R2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,L2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,D2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,j2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,nA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,iA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,rA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,pA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,gA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,yA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,St={alphahash_fragment:Yb,alphahash_pars_fragment:Kb,alphamap_fragment:Zb,alphamap_pars_fragment:Jb,alphatest_fragment:Qb,alphatest_pars_fragment:eT,aomap_fragment:tT,aomap_pars_fragment:nT,batching_pars_vertex:iT,batching_vertex:rT,begin_vertex:sT,beginnormal_vertex:aT,bsdfs:oT,iridescence_fragment:lT,bumpmap_pars_fragment:cT,clipping_planes_fragment:uT,clipping_planes_pars_fragment:dT,clipping_planes_pars_vertex:fT,clipping_planes_vertex:hT,color_fragment:pT,color_pars_fragment:mT,color_pars_vertex:gT,color_vertex:xT,common:vT,cube_uv_reflection_fragment:_T,defaultnormal_vertex:yT,displacementmap_pars_vertex:ST,displacementmap_vertex:MT,emissivemap_fragment:ET,emissivemap_pars_fragment:wT,colorspace_fragment:bT,colorspace_pars_fragment:TT,envmap_fragment:AT,envmap_common_pars_fragment:CT,envmap_pars_fragment:RT,envmap_pars_vertex:NT,envmap_physical_pars_fragment:VT,envmap_vertex:PT,fog_vertex:LT,fog_pars_vertex:DT,fog_fragment:IT,fog_pars_fragment:UT,gradientmap_pars_fragment:OT,lightmap_pars_fragment:FT,lights_lambert_fragment:kT,lights_lambert_pars_fragment:BT,lights_pars_begin:zT,lights_toon_fragment:HT,lights_toon_pars_fragment:GT,lights_phong_fragment:jT,lights_phong_pars_fragment:WT,lights_physical_fragment:XT,lights_physical_pars_fragment:qT,lights_fragment_begin:$T,lights_fragment_maps:YT,lights_fragment_end:KT,lightprobes_pars_fragment:ZT,logdepthbuf_fragment:JT,logdepthbuf_pars_fragment:QT,logdepthbuf_pars_vertex:e2,logdepthbuf_vertex:t2,map_fragment:n2,map_pars_fragment:i2,map_particle_fragment:r2,map_particle_pars_fragment:s2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:o2,morphinstance_vertex:l2,morphcolor_vertex:c2,morphnormal_vertex:u2,morphtarget_pars_vertex:d2,morphtarget_vertex:f2,normal_fragment_begin:h2,normal_fragment_maps:p2,normal_pars_fragment:m2,normal_pars_vertex:g2,normal_vertex:x2,normalmap_pars_fragment:v2,clearcoat_normal_fragment_begin:_2,clearcoat_normal_fragment_maps:y2,clearcoat_pars_fragment:S2,iridescence_pars_fragment:M2,opaque_fragment:E2,packing:w2,premultiplied_alpha_fragment:b2,project_vertex:T2,dithering_fragment:A2,dithering_pars_fragment:C2,roughnessmap_fragment:R2,roughnessmap_pars_fragment:N2,shadowmap_pars_fragment:P2,shadowmap_pars_vertex:L2,shadowmap_vertex:D2,shadowmask_pars_fragment:I2,skinbase_vertex:U2,skinning_pars_vertex:O2,skinning_vertex:F2,skinnormal_vertex:k2,specularmap_fragment:B2,specularmap_pars_fragment:z2,tonemapping_fragment:V2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:j2,uv_pars_fragment:W2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:$2,background_vert:Y2,background_frag:K2,backgroundCube_vert:Z2,backgroundCube_frag:J2,cube_vert:Q2,cube_frag:eA,depth_vert:tA,depth_frag:nA,distance_vert:iA,distance_frag:rA,equirect_vert:sA,equirect_frag:aA,linedashed_vert:oA,linedashed_frag:lA,meshbasic_vert:cA,meshbasic_frag:uA,meshlambert_vert:dA,meshlambert_frag:fA,meshmatcap_vert:hA,meshmatcap_frag:pA,meshnormal_vert:mA,meshnormal_frag:gA,meshphong_vert:xA,meshphong_frag:vA,meshphysical_vert:_A,meshphysical_frag:yA,meshtoon_vert:SA,meshtoon_frag:MA,points_vert:EA,points_frag:wA,shadow_vert:bA,shadow_frag:TA,sprite_vert:AA,sprite_frag:CA},Ve={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Fn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Fn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Fn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Fn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Fn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Fn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Fn([Ve.common,Ve.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Fn([Ve.lights,Ve.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const fc={r:0,b:0,g:0},RA=new tn,Uv=new _t;Uv.set(-1,0,0,0,1,0,0,0,1);function NA(i,e,t,r,a,l){const c=new Et(0);let d=a===!0?0:1,f,p,g=null,_=0,x=null;function M(N){let L=N.isScene===!0?N.background:null;if(L&&L.isTexture){const T=N.backgroundBlurriness>0;L=e.get(L,T)}return L}function w(N){let L=!1;const T=M(N);T===null?S(c,d):T&&T.isColor&&(S(T,1),L=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(N,L){const T=M(L);T&&(T.isCubeTexture||T.mapping===Gc)?(p===void 0&&(p=new Ni(new Ra(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ea(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(RA.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Uv),p.material.toneMapped=Rt.getTransfer(T.colorSpace)!==Vt,(g!==T||_!==T.version||x!==i.toneMapping)&&(p.material.needsUpdate=!0,g=T,_=T.version,x=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Ni(new jc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ea(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Rt.getTransfer(T.colorSpace)!==Vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(g!==T||_!==T.version||x!==i.toneMapping)&&(f.material.needsUpdate=!0,g=T,_=T.version,x=i.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function S(N,L){N.getRGB(fc,Nv(i)),t.buffers.color.setClear(fc.r,fc.g,fc.b,L,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(N,L=1){c.set(N),d=L,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,S(c,d)},render:w,addToRenderList:C,dispose:y}}function PA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=x(null);let l=a,c=!1;function d(B,J,ue,me,K){let pe=!1;const ee=_(B,me,ue,J);l!==ee&&(l=ee,p(l.object)),pe=M(B,me,ue,K),pe&&w(B,me,ue,K),K!==null&&e.update(K,i.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,T(B,J,ue,me),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function f(){return i.createVertexArray()}function p(B){return i.bindVertexArray(B)}function g(B){return i.deleteVertexArray(B)}function _(B,J,ue,me){const K=me.wireframe===!0;let pe=r[J.id];pe===void 0&&(pe={},r[J.id]=pe);const ee=B.isInstancedMesh===!0?B.id:0;let $=pe[ee];$===void 0&&($={},pe[ee]=$);let le=$[ue.id];le===void 0&&(le={},$[ue.id]=le);let H=le[K];return H===void 0&&(H=x(f()),le[K]=H),H}function x(B){const J=[],ue=[],me=[];for(let K=0;K<t;K++)J[K]=0,ue[K]=0,me[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ue,attributeDivisors:me,object:B,attributes:{},index:null}}function M(B,J,ue,me){const K=l.attributes,pe=J.attributes;let ee=0;const $=ue.getAttributes();for(const le in $)if($[le].location>=0){const D=K[le];let G=pe[le];if(G===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),D===void 0||D.attribute!==G||G&&D.data!==G.data)return!0;ee++}return l.attributesNum!==ee||l.index!==me}function w(B,J,ue,me){const K={},pe=J.attributes;let ee=0;const $=ue.getAttributes();for(const le in $)if($[le].location>=0){let D=pe[le];D===void 0&&(le==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),le==="instanceColor"&&B.instanceColor&&(D=B.instanceColor));const G={};G.attribute=D,D&&D.data&&(G.data=D.data),K[le]=G,ee++}l.attributes=K,l.attributesNum=ee,l.index=me}function C(){const B=l.newAttributes;for(let J=0,ue=B.length;J<ue;J++)B[J]=0}function S(B){y(B,0)}function y(B,J){const ue=l.newAttributes,me=l.enabledAttributes,K=l.attributeDivisors;ue[B]=1,me[B]===0&&(i.enableVertexAttribArray(B),me[B]=1),K[B]!==J&&(i.vertexAttribDivisor(B,J),K[B]=J)}function N(){const B=l.newAttributes,J=l.enabledAttributes;for(let ue=0,me=J.length;ue<me;ue++)J[ue]!==B[ue]&&(i.disableVertexAttribArray(ue),J[ue]=0)}function L(B,J,ue,me,K,pe,ee){ee===!0?i.vertexAttribIPointer(B,J,ue,K,pe):i.vertexAttribPointer(B,J,ue,me,K,pe)}function T(B,J,ue,me){C();const K=me.attributes,pe=ue.getAttributes(),ee=J.defaultAttributeValues;for(const $ in pe){const le=pe[$];if(le.location>=0){let H=K[$];if(H===void 0&&($==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),$==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),H!==void 0){const D=H.normalized,G=H.itemSize,be=e.get(H);if(be===void 0)continue;const Re=be.buffer,Ne=be.type,Z=be.bytesPerElement,ve=Ne===i.INT||Ne===i.UNSIGNED_INT||H.gpuType===Oh;if(H.isInterleavedBufferAttribute){const xe=H.data,Be=xe.stride,Ke=H.offset;if(xe.isInstancedInterleavedBuffer){for(let Ze=0;Ze<le.locationSize;Ze++)y(le.location+Ze,xe.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ze=0;Ze<le.locationSize;Ze++)S(le.location+Ze);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let Ze=0;Ze<le.locationSize;Ze++)L(le.location+Ze,G/le.locationSize,Ne,D,Be*Z,(Ke+G/le.locationSize*Ze)*Z,ve)}else{if(H.isInstancedBufferAttribute){for(let xe=0;xe<le.locationSize;xe++)y(le.location+xe,H.meshPerAttribute);B.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let xe=0;xe<le.locationSize;xe++)S(le.location+xe);i.bindBuffer(i.ARRAY_BUFFER,Re);for(let xe=0;xe<le.locationSize;xe++)L(le.location+xe,G/le.locationSize,Ne,D,G*Z,G/le.locationSize*xe*Z,ve)}}else if(ee!==void 0){const D=ee[$];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(le.location,D);break;case 3:i.vertexAttrib3fv(le.location,D);break;case 4:i.vertexAttrib4fv(le.location,D);break;default:i.vertexAttrib1fv(le.location,D)}}}}N()}function I(){O();for(const B in r){const J=r[B];for(const ue in J){const me=J[ue];for(const K in me){const pe=me[K];for(const ee in pe)g(pe[ee].object),delete pe[ee];delete me[K]}}delete r[B]}}function P(B){if(r[B.id]===void 0)return;const J=r[B.id];for(const ue in J){const me=J[ue];for(const K in me){const pe=me[K];for(const ee in pe)g(pe[ee].object),delete pe[ee];delete me[K]}}delete r[B.id]}function F(B){for(const J in r){const ue=r[J];for(const me in ue){const K=ue[me];if(K[B.id]===void 0)continue;const pe=K[B.id];for(const ee in pe)g(pe[ee].object),delete pe[ee];delete K[B.id]}}}function b(B){for(const J in r){const ue=r[J],me=B.isInstancedMesh===!0?B.id:0,K=ue[me];if(K!==void 0){for(const pe in K){const ee=K[pe];for(const $ in ee)g(ee[$].object),delete ee[$];delete K[pe]}delete ue[me],Object.keys(ue).length===0&&delete r[J]}}}function O(){V(),c=!0,l!==a&&(l=a,p(l.object))}function V(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:O,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:b,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function LA(i,e,t){let r;function a(f){r=f}function l(f,p){i.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,g){g!==0&&(i.drawArraysInstanced(r,f,p,g),t.update(p,r,g))}function d(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=p[M];t.update(x,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function DA(i,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ri&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const b=F===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!b)}function f(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=f(p);g!==p&&(pt("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&x===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:T,maxSamples:I,samples:P}}function IA(i){const e=this;let t=null,r=0,a=!1,l=!1;const c=new zr,d=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const M=_.length!==0||x||r!==0||a;return a=x,r=_.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,M){const w=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,y=i.get(_);if(!a||w===null||w.length===0||l&&!S)l?g(null):p();else{const N=l?0:r,L=N*4;let T=y.clippingState||null;f.value=T,T=g(w,x,L,M);for(let I=0;I!==L;++I)T[I]=t[I];y.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,M,w){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=f.value,w!==!0||S===null){const y=M+C*4,N=x.matrixWorldInverse;d.getNormalMatrix(N),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,T=M;L!==C;++L,T+=4)c.copy(_[L]).applyMatrix4(N,d),c.normal.toArray(S,T),S[T+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Gr=4,Vg=[.125,.215,.35,.446,.526,.582],xs=20,UA=256,yo=new Kh,Hg=new Et;let ff=null,hf=0,pf=0,mf=!1;const OA=new re;class Gg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=OA}=l;ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ff,hf,pf),this._renderer.xr.enabled=mf,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ff=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),pf=this._renderer.getActiveMipmapLevel(),mf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:dr,format:Ri,colorSpace:Pc,depthBuffer:!1},a=jg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FA(l)),this._blurMaterial=BA(l,e,t),this._ggxMaterial=kA(l,e,t)}return a}_compileMaterial(e){const t=new Ni(new Xi,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,r,a,l){const f=new ii(90,1,t,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,x=_.autoClear,M=_.toneMapping;_.getClearColor(Hg),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Ra,new Av({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const N=e.background;N?N.isColor&&(S.color.copy(N),e.background=null,y=!0):(S.color.copy(Hg),y=!0);for(let L=0;L<6;L++){const T=L%3;T===0?(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[L],l.y,l.z)):T===1?(f.up.set(0,0,p[L]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[L],l.z)):(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[L]));const I=this._cubeSize;ha(a,T*I,L>2?I:0,I,I),_.setRenderTarget(a),y&&_.render(C,f),_.render(e,f)}_.toneMapping=M,_.autoClear=x,e.background=N}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===bs||e.mapping===Sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;ha(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,yo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-g*g),x=0+p*1.25,M=_*x,{_lodMax:w}=this,C=this._sizeLods[r],S=3*C*(r>w-Gr?r-w+Gr:0),y=4*(this._cubeSize-C);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=w-t,ha(l,S,y,3*C,2*C),a.setRenderTarget(l),a.render(d,yo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=w-r,ha(e,S,y,3*C,2*C),a.setRenderTarget(e),a.render(d,yo)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=p;const x=p.uniforms,M=this._sizeLods[r]-1,w=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*xs-1),C=l/w,S=isFinite(l)?1+Math.floor(g*C):xs;S>xs&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const y=[];let N=0;for(let F=0;F<xs;++F){const b=F/C,O=Math.exp(-b*b/2);y.push(O),F===0?N+=O:F<S&&(N+=2*O)}for(let F=0;F<y.length;F++)y[F]=y[F]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=y,x.latitudinal.value=c==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:L}=this;x.dTheta.value=w,x.mipInt.value=L-r;const T=this._sizeLods[a],I=3*T*(a>L-Gr?a-L+Gr:0),P=4*(this._cubeSize-T);ha(t,I,P,3*T,2*T),f.setRenderTarget(t),f.render(_,yo)}}function FA(i){const e=[],t=[],r=[];let a=i;const l=i-Gr+1+Vg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let f=1/d;c>i-Gr?f=Vg[c-i+Gr-1]:c===0&&(f=0),t.push(f);const p=1/(d-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,w=6,C=3,S=2,y=1,N=new Float32Array(C*w*M),L=new Float32Array(S*w*M),T=new Float32Array(y*w*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,b=P>2?0:-1,O=[F,b,0,F+2/3,b,0,F+2/3,b+1,0,F,b,0,F+2/3,b+1,0,F,b+1,0];N.set(O,C*w*P),L.set(x,S*w*P);const V=[P,P,P,P,P,P];T.set(V,y*w*P)}const I=new Xi;I.setAttribute("position",new Gi(N,C)),I.setAttribute("uv",new Gi(L,S)),I.setAttribute("faceIndex",new Gi(T,y)),r.push(new Ni(I,null)),a>Gr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function jg(i,e,t){const r=new Hi(i,e,t);return r.texture.mapping=Gc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ha(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function kA(i,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:UA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function BA(i,e,t){const r=new Float32Array(xs),a=new re(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Wg(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Xg(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ov extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Cv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Ra(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:cr});l.uniforms.tEquirect.value=t;const c=new Ni(a,l),d=t.minFilter;return t.minFilter===_s&&(t.minFilter=Pn),new Gb(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function zA(i){let e=new WeakMap,t=new WeakMap,r=null;function a(x,M=!1){return x==null?null:M?c(x):l(x)}function l(x){if(x&&x.isTexture){const M=x.mapping;if(M===Fd||M===kd)if(e.has(x)){const w=e.get(x).texture;return d(w,x.mapping)}else{const w=x.image;if(w&&w.height>0){const C=new Ov(w.height);return C.fromEquirectangularTexture(i,x),e.set(x,C),x.addEventListener("dispose",p),d(C.texture,x.mapping)}else return null}}return x}function c(x){if(x&&x.isTexture){const M=x.mapping,w=M===Fd||M===kd,C=M===bs||M===Sa;if(w||C){let S=t.get(x);const y=S!==void 0?S.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return r===null&&(r=new Gg(i)),S=w?r.fromEquirectangular(x,S):r.fromCubemap(x,S),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),S.texture;if(S!==void 0)return S.texture;{const N=x.image;return w&&N&&N.height>0||C&&N&&f(N)?(r===null&&(r=new Gg(i)),S=w?r.fromEquirectangular(x):r.fromCubemap(x),S.texture.pmremVersion=x.pmremVersion,t.set(x,S),x.addEventListener("dispose",g),S.texture):null}}}return x}function d(x,M){return M===Fd?x.mapping=bs:M===kd&&(x.mapping=Sa),x}function f(x){let M=0;const w=6;for(let C=0;C<w;C++)x[C]!==void 0&&M++;return M===w}function p(x){const M=x.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function g(x){const M=x.target;M.removeEventListener("dispose",g);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function VA(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ga("WebGLRenderer: "+r+" extension not supported."),a}}}function HA(i,e,t,r){const a={},l=new WeakMap;function c(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const w in x.attributes)e.remove(x.attributes[w]);x.removeEventListener("dispose",c),delete a[x.id];const M=l.get(x);M&&(e.remove(M),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function d(_,x){return a[x.id]===!0||(x.addEventListener("dispose",c),a[x.id]=!0,t.memory.geometries++),x}function f(_){const x=_.attributes;for(const M in x)e.update(x[M],i.ARRAY_BUFFER)}function p(_){const x=[],M=_.index,w=_.attributes.position;let C=0;if(w===void 0)return;if(M!==null){const N=M.array;C=M.version;for(let L=0,T=N.length;L<T;L+=3){const I=N[L+0],P=N[L+1],F=N[L+2];x.push(I,P,P,F,F,I)}}else{const N=w.array;C=w.version;for(let L=0,T=N.length/3-1;L<T;L+=3){const I=L+0,P=L+1,F=L+2;x.push(I,P,P,F,F,I)}}const S=new(w.count>=65535?bv:wv)(x,1);S.version=C;const y=l.get(_);y&&e.remove(y),l.set(_,S)}function g(_){const x=l.get(_);if(x){const M=_.index;M!==null&&x.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:g}}function GA(i,e,t){let r;function a(_){r=_}let l,c;function d(_){l=_.type,c=_.bytesPerElement}function f(_,x){i.drawElements(r,x,l,_*c),t.update(x,r,1)}function p(_,x,M){M!==0&&(i.drawElementsInstanced(r,x,l,_*c,M),t.update(x,r,M))}function g(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,_,0,M);let C=0;for(let S=0;S<M;S++)C+=x[S];t.update(C,r,1)}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=g}function jA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function WA(i,e,t){const r=new WeakMap,a=new Qt;function l(c,d,f){const p=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(d);if(x===void 0||x.count!==_){let V=function(){b.dispose(),r.delete(d),d.removeEventListener("dispose",V)};var M=V;x!==void 0&&x.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let T=0;w===!0&&(T=1),C===!0&&(T=2),S===!0&&(T=3);let I=d.attributes.position.count*T,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*P*4*_),b=new Mv(F,I,P,_);b.type=Bi,b.needsUpdate=!0;const O=T*4;for(let B=0;B<_;B++){const J=y[B],ue=N[B],me=L[B],K=I*P*4*B;for(let pe=0;pe<J.count;pe++){const ee=pe*O;w===!0&&(a.fromBufferAttribute(J,pe),F[K+ee+0]=a.x,F[K+ee+1]=a.y,F[K+ee+2]=a.z,F[K+ee+3]=0),C===!0&&(a.fromBufferAttribute(ue,pe),F[K+ee+4]=a.x,F[K+ee+5]=a.y,F[K+ee+6]=a.z,F[K+ee+7]=0),S===!0&&(a.fromBufferAttribute(me,pe),F[K+ee+8]=a.x,F[K+ee+9]=a.y,F[K+ee+10]=a.z,F[K+ee+11]=me.itemSize===4?a.w:1)}}x={count:_,texture:b,size:new At(I,P)},r.set(d,x),d.addEventListener("dispose",V)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let w=0;for(let S=0;S<p.length;S++)w+=p[S];const C=d.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:l}}function XA(i,e,t,r,a){let l=new WeakMap;function c(p){const g=a.render.frame,_=p.geometry,x=e.get(p,_);if(l.get(x)!==g&&(e.update(x),l.set(x,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==g&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==g&&(M.update(),l.set(M,g))}return x}function d(){l=new WeakMap}function f(p){const g=p.target;g.removeEventListener("dispose",f),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const qA={[ov]:"LINEAR_TONE_MAPPING",[lv]:"REINHARD_TONE_MAPPING",[cv]:"CINEON_TONE_MAPPING",[Uh]:"ACES_FILMIC_TONE_MAPPING",[dv]:"AGX_TONE_MAPPING",[fv]:"NEUTRAL_TONE_MAPPING",[uv]:"CUSTOM_TONE_MAPPING"};function $A(i,e,t,r,a,l){const c=new Hi(e,t,{type:i,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new Ma(e,t):void 0}),d=new Hi(e,t,{type:dr,depthBuffer:!1,stencilBuffer:!1}),f=new Xi;f.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pi([0,2,0,0,2,0],2));const p=new Ib({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),g=new Ni(f,p),_=new Kh(-1,1,1,-1,0,1);let x=null,M=null,w=!1,C,S=null,y=[],N=!1;this.setSize=function(L,T){c.setSize(L,T),d.setSize(L,T);for(let I=0;I<y.length;I++){const P=y[I];P.setSize&&P.setSize(L,T)}},this.setEffects=function(L){y=L,N=y.length>0&&y[0].isRenderPass===!0;const T=c.width,I=c.height;for(let P=0;P<y.length;P++){const F=y[P];F.setSize&&F.setSize(T,I)}},this.begin=function(L,T){if(w||L.toneMapping===Vi&&y.length===0)return!1;if(S=T,T!==null){const I=T.width,P=T.height;(c.width!==I||c.height!==P)&&this.setSize(I,P)}return N===!1&&L.setRenderTarget(c),C=L.toneMapping,L.toneMapping=Vi,!0},this.hasRenderPass=function(){return N},this.end=function(L,T){L.toneMapping=C,w=!0;let I=c,P=d;for(let F=0;F<y.length;F++){const b=y[F];if(b.enabled!==!1&&(b.render(L,P,I,T),b.needsSwap!==!1)){const O=I;I=P,P=O}}if(x!==L.outputColorSpace||M!==L.toneMapping){x=L.outputColorSpace,M=L.toneMapping,p.defines={},Rt.getTransfer(x)===Vt&&(p.defines.SRGB_TRANSFER="");const F=qA[M];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=I.texture,L.setRenderTarget(S),L.render(g,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Fv=new Bn,xh=new Ma(1,1),kv=new Mv,Bv=new db,zv=new Cv,qg=[],$g=[],Yg=new Float32Array(16),Kg=new Float32Array(9),Zg=new Float32Array(4);function Na(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let l=qg[a];if(l===void 0&&(l=new Float32Array(a),qg[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function fn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function hn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Xc(i,e){let t=$g[e];t===void 0&&(t=new Int32Array(e),$g[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function YA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function KA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2fv(this.addr,e),hn(t,e)}}function ZA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;i.uniform3fv(this.addr,e),hn(t,e)}}function JA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4fv(this.addr,e),hn(t,e)}}function QA(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;Zg.set(r),i.uniformMatrix2fv(this.addr,!1,Zg),hn(t,r)}}function eC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;Kg.set(r),i.uniformMatrix3fv(this.addr,!1,Kg),hn(t,r)}}function tC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;Yg.set(r),i.uniformMatrix4fv(this.addr,!1,Yg),hn(t,r)}}function nC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function iC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2iv(this.addr,e),hn(t,e)}}function rC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3iv(this.addr,e),hn(t,e)}}function sC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4iv(this.addr,e),hn(t,e)}}function aC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function oC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;i.uniform2uiv(this.addr,e),hn(t,e)}}function lC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;i.uniform3uiv(this.addr,e),hn(t,e)}}function cC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;i.uniform4uiv(this.addr,e),hn(t,e)}}function uC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(xh.compareFunction=t.isReversedDepthBuffer()?Gh:Hh,l=xh):l=Fv,t.setTexture2D(e||l,a)}function dC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Bv,a)}function fC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||zv,a)}function hC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||kv,a)}function pC(i){switch(i){case 5126:return YA;case 35664:return KA;case 35665:return ZA;case 35666:return JA;case 35674:return QA;case 35675:return eC;case 35676:return tC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return rC;case 35669:case 35673:return sC;case 5125:return aC;case 36294:return oC;case 36295:return lC;case 36296:return cC;case 35678:case 36198:case 36298:case 36306:case 35682:return uC;case 35679:case 36299:case 36307:return dC;case 35680:case 36300:case 36308:case 36293:return fC;case 36289:case 36303:case 36311:case 36292:return hC}}function mC(i,e){i.uniform1fv(this.addr,e)}function gC(i,e){const t=Na(e,this.size,2);i.uniform2fv(this.addr,t)}function xC(i,e){const t=Na(e,this.size,3);i.uniform3fv(this.addr,t)}function vC(i,e){const t=Na(e,this.size,4);i.uniform4fv(this.addr,t)}function _C(i,e){const t=Na(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function yC(i,e){const t=Na(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function SC(i,e){const t=Na(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function MC(i,e){i.uniform1iv(this.addr,e)}function EC(i,e){i.uniform2iv(this.addr,e)}function wC(i,e){i.uniform3iv(this.addr,e)}function bC(i,e){i.uniform4iv(this.addr,e)}function TC(i,e){i.uniform1uiv(this.addr,e)}function AC(i,e){i.uniform2uiv(this.addr,e)}function CC(i,e){i.uniform3uiv(this.addr,e)}function RC(i,e){i.uniform4uiv(this.addr,e)}function NC(i,e,t){const r=this.cache,a=e.length,l=Xc(t,a);fn(r,l)||(i.uniform1iv(this.addr,l),hn(r,l));let c;this.type===i.SAMPLER_2D_SHADOW?c=xh:c=Fv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function PC(i,e,t){const r=this.cache,a=e.length,l=Xc(t,a);fn(r,l)||(i.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Bv,l[c])}function LC(i,e,t){const r=this.cache,a=e.length,l=Xc(t,a);fn(r,l)||(i.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||zv,l[c])}function DC(i,e,t){const r=this.cache,a=e.length,l=Xc(t,a);fn(r,l)||(i.uniform1iv(this.addr,l),hn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||kv,l[c])}function IC(i){switch(i){case 5126:return mC;case 35664:return gC;case 35665:return xC;case 35666:return vC;case 35674:return _C;case 35675:return yC;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return EC;case 35668:case 35672:return wC;case 35669:case 35673:return bC;case 5125:return TC;case 36294:return AC;case 36295:return CC;case 36296:return RC;case 35678:case 36198:case 36298:case 36306:case 35682:return NC;case 35679:case 36299:case 36307:return PC;case 35680:case 36300:case 36308:case 36293:return LC;case 36289:case 36303:case 36311:case 36292:return DC}}class UC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pC(t.type)}}class OC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IC(t.type)}}class FC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function Jg(i,e){i.seq.push(e),i.map[e.id]=e}function kC(i,e,t){const r=i.name,a=r.length;for(gf.lastIndex=0;;){const l=gf.exec(r),c=gf.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===a){Jg(t,p===void 0?new UC(d,i,e):new OC(d,i,e));break}else{let _=t.map[d];_===void 0&&(_=new FC(d),Jg(t,_)),t=_}}}class Mc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);kC(d,f,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function Qg(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const BC=37297;let zC=0;function VC(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const ex=new _t;function HC(i){Rt._getMatrix(ex,Rt.workingColorSpace,i);const e=`mat3( ${ex.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(i)){case Lc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function tx(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+VC(i.getShaderSource(e),d)}else return l}function GC(i,e){const t=HC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jC={[ov]:"Linear",[lv]:"Reinhard",[cv]:"Cineon",[Uh]:"ACESFilmic",[dv]:"AgX",[fv]:"Neutral",[uv]:"Custom"};function WC(i,e){const t=jC[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hc=new re;function XC(){Rt.getLuminanceCoefficients(hc);const i=hc.x.toFixed(4),e=hc.y.toFixed(4),t=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function qC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function $C(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function YC(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=i.getActiveAttrib(e,a),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function bo(i){return i!==""}function nx(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ix(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const KC=/^[ \t]*#include +<([\w\d./]+)>/gm;function vh(i){return i.replace(KC,JC)}const ZC=new Map;function JC(i,e){let t=St[e];if(t===void 0){const r=ZC.get(e);if(r!==void 0)t=St[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vh(t)}const QC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(i){return i.replace(QC,eR)}function eR(i,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function sx(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tR={[xc]:"SHADOWMAP_TYPE_PCF",[Eo]:"SHADOWMAP_TYPE_VSM"};function nR(i){return tR[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iR={[bs]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function rR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":iR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const sR={[Sa]:"ENVMAP_MODE_REFRACTION"};function aR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":sR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oR={[av]:"ENVMAP_BLENDING_MULTIPLY",[jw]:"ENVMAP_BLENDING_MIX",[Ww]:"ENVMAP_BLENDING_ADD"};function lR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":oR[i.combine]||"ENVMAP_BLENDING_NONE"}function cR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function uR(i,e,t,r){const a=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=nR(t),p=rR(t),g=aR(t),_=lR(t),x=cR(t),M=qC(t),w=$C(l),C=a.createProgram();let S,y,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(bo).join(`
`),y.length>0&&(y+=`
`)):(S=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),y=[sx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?St.tonemapping_pars_fragment:"",t.toneMapping!==Vi?WC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,GC("linearToOutputTexel",t.outputColorSpace),XC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(bo).join(`
`)),c=vh(c),c=nx(c,t),c=ix(c,t),d=vh(d),d=nx(d,t),d=ix(d,t),c=rx(c),d=rx(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=N+S+c,T=N+y+d,I=Qg(a,a.VERTEX_SHADER,L),P=Qg(a,a.FRAGMENT_SHADER,T);a.attachShader(C,I),a.attachShader(C,P),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(B){if(i.debug.checkShaderErrors){const J=a.getProgramInfoLog(C)||"",ue=a.getShaderInfoLog(I)||"",me=a.getShaderInfoLog(P)||"",K=J.trim(),pe=ue.trim(),ee=me.trim();let $=!0,le=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,C,I,P);else{const H=tx(a,I,"vertex"),D=tx(a,P,"fragment");Lt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+K+`
`+H+`
`+D)}else K!==""?pt("WebGLProgram: Program Info Log:",K):(pe===""||ee==="")&&(le=!1);le&&(B.diagnostics={runnable:$,programLog:K,vertexShader:{log:pe,prefix:S},fragmentShader:{log:ee,prefix:y}})}a.deleteShader(I),a.deleteShader(P),b=new Mc(a,C),O=YC(a,C)}let b;this.getUniforms=function(){return b===void 0&&F(this),b};let O;this.getAttributes=function(){return O===void 0&&F(this),O};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=a.getProgramParameter(C,BC)),V},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=P,this}let dR=0;class fR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hR(e),t.set(e,r)),r}}class hR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function pR(i){return i===Ts||i===Rc||i===Nc}function mR(i,e,t,r,a,l){const c=new Wh,d=new fR,f=new Set,p=[],g=new Map,_=r.logarithmicDepthBuffer;let x=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return f.add(b),b===0?"uv":`uv${b}`}function C(b,O,V,B,J,ue){const me=B.fog,K=J.geometry,pe=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?B.environment:null,ee=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,$=e.get(b.envMap||pe,ee),le=$&&$.mapping===Gc?$.image.height:null,H=M[b.type];b.precision!==null&&(x=r.getMaxPrecision(b.precision),x!==b.precision&&pt("WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const D=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,G=D!==void 0?D.length:0;let be=0;K.morphAttributes.position!==void 0&&(be=1),K.morphAttributes.normal!==void 0&&(be=2),K.morphAttributes.color!==void 0&&(be=3);let Re,Ne,Z,ve;if(H){const $e=ki[H];Re=$e.vertexShader,Ne=$e.fragmentShader}else{Re=b.vertexShader,Ne=b.fragmentShader;const $e=d.getVertexShaderStage(b),Ht=d.getFragmentShaderStage(b);d.update(b,$e,Ht),Z=$e.id,ve=Ht.id}const xe=i.getRenderTarget(),Be=i.state.buffers.depth.getReversed(),Ke=J.isInstancedMesh===!0,Ze=J.isBatchedMesh===!0,ht=!!b.map,Se=!!b.matcap,rt=!!$,st=!!b.aoMap,Ce=!!b.lightMap,ut=!!b.bumpMap&&b.wireframe===!1,yt=!!b.normalMap,gt=!!b.displacementMap,kt=!!b.emissiveMap,Nt=!!b.metalnessMap,Dt=!!b.roughnessMap,q=b.anisotropy>0,an=b.clearcoat>0,Ct=b.dispersion>0,U=b.iridescence>0,E=b.sheen>0,Q=b.transmission>0,te=q&&!!b.anisotropyMap,ie=an&&!!b.clearcoatMap,_e=an&&!!b.clearcoatNormalMap,Me=an&&!!b.clearcoatRoughnessMap,ce=U&&!!b.iridescenceMap,ge=U&&!!b.iridescenceThicknessMap,De=E&&!!b.sheenColorMap,qe=E&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,Oe=!!b.specularColorMap,tt=!!b.specularIntensityMap,ot=Q&&!!b.transmissionMap,dt=Q&&!!b.thicknessMap,j=!!b.gradientMap,Fe=!!b.alphaMap,ye=b.alphaTest>0,ke=!!b.alphaHash,ze=!!b.extensions;let Ee=Vi;b.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Je={shaderID:H,shaderType:b.type,shaderName:b.name,vertexShader:Re,fragmentShader:Ne,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:ve,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Ze,batchingColor:Ze&&J._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&J.instanceColor!==null,instancingMorph:Ke&&J.morphTexture!==null,outputColorSpace:xe===null?i.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ht,matcap:Se,envMap:rt,envMapMode:rt&&$.mapping,envMapCubeUVHeight:le,aoMap:st,lightMap:Ce,bumpMap:ut,normalMap:yt,displacementMap:gt,emissiveMap:kt,normalMapObjectSpace:yt&&b.normalMapType===$w,normalMapTangentSpace:yt&&b.normalMapType===ph,packedNormalMap:yt&&b.normalMapType===ph&&pR(b.normalMap.format),metalnessMap:Nt,roughnessMap:Dt,anisotropy:q,anisotropyMap:te,clearcoat:an,clearcoatMap:ie,clearcoatNormalMap:_e,clearcoatRoughnessMap:Me,dispersion:Ct,iridescence:U,iridescenceMap:ce,iridescenceThicknessMap:ge,sheen:E,sheenColorMap:De,sheenRoughnessMap:qe,specularMap:Ie,specularColorMap:Oe,specularIntensityMap:tt,transmission:Q,transmissionMap:ot,thicknessMap:dt,gradientMap:j,opaque:b.transparent===!1&&b.blending===ma&&b.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ye,alphaHash:ke,combine:b.combine,mapUv:ht&&w(b.map.channel),aoMapUv:st&&w(b.aoMap.channel),lightMapUv:Ce&&w(b.lightMap.channel),bumpMapUv:ut&&w(b.bumpMap.channel),normalMapUv:yt&&w(b.normalMap.channel),displacementMapUv:gt&&w(b.displacementMap.channel),emissiveMapUv:kt&&w(b.emissiveMap.channel),metalnessMapUv:Nt&&w(b.metalnessMap.channel),roughnessMapUv:Dt&&w(b.roughnessMap.channel),anisotropyMapUv:te&&w(b.anisotropyMap.channel),clearcoatMapUv:ie&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:_e&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:qe&&w(b.sheenRoughnessMap.channel),specularMapUv:Ie&&w(b.specularMap.channel),specularColorMapUv:Oe&&w(b.specularColorMap.channel),specularIntensityMapUv:tt&&w(b.specularIntensityMap.channel),transmissionMapUv:ot&&w(b.transmissionMap.channel),thicknessMapUv:dt&&w(b.thicknessMap.channel),alphaMapUv:Fe&&w(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(yt||q),vertexNormals:!!K.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!K.attributes.uv&&(ht||Fe),fog:!!me,useFog:b.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||K.attributes.normal===void 0&&yt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Be,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:K.attributes.position!==void 0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:be,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:ht&&b.map.isVideoTexture===!0&&Rt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:kt&&b.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===or,flipSided:b.side===Kn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Je.vertexUv1s=f.has(1),Je.vertexUv2s=f.has(2),Je.vertexUv3s=f.has(3),f.clear(),Je}function S(b){const O=[];if(b.shaderID?O.push(b.shaderID):(O.push(b.customVertexShaderID),O.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)O.push(V),O.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(y(O,b),N(O,b),O.push(i.outputColorSpace)),O.push(b.customProgramCacheKey),O.join()}function y(b,O){b.push(O.precision),b.push(O.outputColorSpace),b.push(O.envMapMode),b.push(O.envMapCubeUVHeight),b.push(O.mapUv),b.push(O.alphaMapUv),b.push(O.lightMapUv),b.push(O.aoMapUv),b.push(O.bumpMapUv),b.push(O.normalMapUv),b.push(O.displacementMapUv),b.push(O.emissiveMapUv),b.push(O.metalnessMapUv),b.push(O.roughnessMapUv),b.push(O.anisotropyMapUv),b.push(O.clearcoatMapUv),b.push(O.clearcoatNormalMapUv),b.push(O.clearcoatRoughnessMapUv),b.push(O.iridescenceMapUv),b.push(O.iridescenceThicknessMapUv),b.push(O.sheenColorMapUv),b.push(O.sheenRoughnessMapUv),b.push(O.specularMapUv),b.push(O.specularColorMapUv),b.push(O.specularIntensityMapUv),b.push(O.transmissionMapUv),b.push(O.thicknessMapUv),b.push(O.combine),b.push(O.fogExp2),b.push(O.sizeAttenuation),b.push(O.morphTargetsCount),b.push(O.morphAttributeCount),b.push(O.numDirLights),b.push(O.numPointLights),b.push(O.numSpotLights),b.push(O.numSpotLightMaps),b.push(O.numHemiLights),b.push(O.numRectAreaLights),b.push(O.numDirLightShadows),b.push(O.numPointLightShadows),b.push(O.numSpotLightShadows),b.push(O.numSpotLightShadowsWithMaps),b.push(O.numLightProbes),b.push(O.shadowMapType),b.push(O.toneMapping),b.push(O.numClippingPlanes),b.push(O.numClipIntersection),b.push(O.depthPacking)}function N(b,O){c.disableAll(),O.instancing&&c.enable(0),O.instancingColor&&c.enable(1),O.instancingMorph&&c.enable(2),O.matcap&&c.enable(3),O.envMap&&c.enable(4),O.normalMapObjectSpace&&c.enable(5),O.normalMapTangentSpace&&c.enable(6),O.clearcoat&&c.enable(7),O.iridescence&&c.enable(8),O.alphaTest&&c.enable(9),O.vertexColors&&c.enable(10),O.vertexAlphas&&c.enable(11),O.vertexUv1s&&c.enable(12),O.vertexUv2s&&c.enable(13),O.vertexUv3s&&c.enable(14),O.vertexTangents&&c.enable(15),O.anisotropy&&c.enable(16),O.alphaHash&&c.enable(17),O.batching&&c.enable(18),O.dispersion&&c.enable(19),O.batchingColor&&c.enable(20),O.gradientMap&&c.enable(21),O.packedNormalMap&&c.enable(22),O.vertexNormals&&c.enable(23),b.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.reversedDepthBuffer&&c.enable(4),O.skinning&&c.enable(5),O.morphTargets&&c.enable(6),O.morphNormals&&c.enable(7),O.morphColors&&c.enable(8),O.premultipliedAlpha&&c.enable(9),O.shadowMapEnabled&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.decodeVideoTextureEmissive&&c.enable(20),O.alphaToCoverage&&c.enable(21),O.numLightProbeGrids>0&&c.enable(22),O.hasPositionAttribute&&c.enable(23),b.push(c.mask)}function L(b){const O=M[b.type];let V;if(O){const B=ki[O];V=Pb.clone(B.uniforms)}else V=b.uniforms;return V}function T(b,O){let V=g.get(O);return V!==void 0?++V.usedTimes:(V=new uR(i,O,b,a),p.push(V),g.set(O,V)),V}function I(b){if(--b.usedTimes===0){const O=p.indexOf(b);p[O]=p[p.length-1],p.pop(),g.delete(b.cacheKey),b.destroy()}}function P(b){d.remove(b)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:T,releaseProgram:I,releaseShaderCache:P,programs:p,dispose:F}}function gR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function a(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function xR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ax(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ox(){const i=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(x){let M=0;return x.isInstancedMesh&&(M+=2),x.isSkinnedMesh&&(M+=1),M}function d(x,M,w,C,S,y){let N=i[e];return N===void 0?(N={id:x.id,object:x,geometry:M,material:w,materialVariant:c(x),groupOrder:C,renderOrder:x.renderOrder,z:S,group:y},i[e]=N):(N.id=x.id,N.object=x,N.geometry=M,N.material=w,N.materialVariant=c(x),N.groupOrder=C,N.renderOrder=x.renderOrder,N.z=S,N.group=y),e++,N}function f(x,M,w,C,S,y){const N=d(x,M,w,C,S,y);w.transmission>0?r.push(N):w.transparent===!0?a.push(N):t.push(N)}function p(x,M,w,C,S,y){const N=d(x,M,w,C,S,y);w.transmission>0?r.unshift(N):w.transparent===!0?a.unshift(N):t.unshift(N)}function g(x,M,w){t.length>1&&t.sort(x||xR),r.length>1&&r.sort(M||ax),a.length>1&&a.sort(M||ax),w&&(t.reverse(),r.reverse(),a.reverse())}function _(){for(let x=e,M=i.length;x<M;x++){const w=i[x];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:g}}function vR(){let i=new WeakMap;function e(r,a){const l=i.get(r);let c;return l===void 0?(c=new ox,i.set(r,[c])):a>=l.length?(c=new ox,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function _R(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new re,color:new Et};break;case"SpotLight":t={position:new re,direction:new re,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function yR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let SR=0;function MR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ER(i){const e=new _R,t=yR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new re);const a=new re,l=new tn,c=new tn;function d(p){let g=0,_=0,x=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let M=0,w=0,C=0,S=0,y=0,N=0,L=0,T=0,I=0,P=0,F=0;p.sort(MR);for(let O=0,V=p.length;O<V;O++){const B=p[O],J=B.color,ue=B.intensity,me=B.distance;let K=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Ts?K=B.shadow.map.texture:K=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=J.r*ue,_+=J.g*ue,x+=J.b*ue;else if(B.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(B.sh.coefficients[pe],ue);F++}else if(B.isDirectionalLight){const pe=e.get(B);if(pe.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const ee=B.shadow,$=t.get(B);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=K,r.directionalShadowMatrix[M]=B.shadow.matrix,N++}r.directional[M]=pe,M++}else if(B.isSpotLight){const pe=e.get(B);pe.position.setFromMatrixPosition(B.matrixWorld),pe.color.copy(J).multiplyScalar(ue),pe.distance=me,pe.coneCos=Math.cos(B.angle),pe.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),pe.decay=B.decay,r.spot[C]=pe;const ee=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,ee.updateMatrices(B),B.castShadow&&P++),r.spotLightMatrix[C]=ee.matrix,B.castShadow){const $=t.get(B);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=K,T++}C++}else if(B.isRectAreaLight){const pe=e.get(B);pe.color.copy(J).multiplyScalar(ue),pe.halfWidth.set(B.width*.5,0,0),pe.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=pe,S++}else if(B.isPointLight){const pe=e.get(B);if(pe.color.copy(B.color).multiplyScalar(B.intensity),pe.distance=B.distance,pe.decay=B.decay,B.castShadow){const ee=B.shadow,$=t.get(B);$.shadowIntensity=ee.intensity,$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,r.pointShadow[w]=$,r.pointShadowMap[w]=K,r.pointShadowMatrix[w]=B.shadow.matrix,L++}r.point[w]=pe,w++}else if(B.isHemisphereLight){const pe=e.get(B);pe.skyColor.copy(B.color).multiplyScalar(ue),pe.groundColor.copy(B.groundColor).multiplyScalar(ue),r.hemi[y]=pe,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const b=r.hash;(b.directionalLength!==M||b.pointLength!==w||b.spotLength!==C||b.rectAreaLength!==S||b.hemiLength!==y||b.numDirectionalShadows!==N||b.numPointShadows!==L||b.numSpotShadows!==T||b.numSpotMaps!==I||b.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=w,r.hemi.length=y,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=T+I-P,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,b.directionalLength=M,b.pointLength=w,b.spotLength=C,b.rectAreaLength=S,b.hemiLength=y,b.numDirectionalShadows=N,b.numPointShadows=L,b.numSpotShadows=T,b.numSpotMaps=I,b.numLightProbes=F,r.version=SR++)}function f(p,g){let _=0,x=0,M=0,w=0,C=0;const S=g.matrixWorldInverse;for(let y=0,N=p.length;y<N;y++){const L=p[y];if(L.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),_++}else if(L.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const T=r.rectArea[w];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),w++}else if(L.isPointLight){const T=r.point[x];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const T=r.hemi[C];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(S),C++}}}return{setup:d,setupView:f,state:r}}function lx(i){const e=new ER(i),t=[],r=[],a=[];function l(x){_.camera=x,t.length=0,r.length=0,a.length=0}function c(x){t.push(x)}function d(x){r.push(x)}function f(x){a.push(x)}function p(){e.setup(t)}function g(x){e.setupView(t,x)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function wR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new lx(i),e.set(a,[d])):l>=c.length?(d=new lx(i),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const bR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AR=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],CR=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],cx=new tn,So=new re,xf=new re;function RR(i,e,t){let r=new qh;const a=new At,l=new At,c=new Qt,d=new Ob,f=new Fb,p={},g=t.maxTextureSize,_={[Wr]:Kn,[Kn]:Wr,[or]:or},x=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:bR,fragmentShader:TR}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const w=new Xi;w.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ni(w,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let y=this.type;this.render=function(P,F,b){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===sv&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=xc);const O=i.getRenderTarget(),V=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),J=i.state;J.setBlending(cr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ue=y!==this.type;ue&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(K=>K.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,K=P.length;me<K;me++){const pe=P[me],ee=pe.shadow;if(ee===void 0){pt("WebGLShadowMap:",pe,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;a.copy(ee.mapSize);const $=ee.getFrameExtents();a.multiply($),l.copy(ee.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/$.x),a.x=l.x*$.x,ee.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/$.y),a.y=l.y*$.y,ee.mapSize.y=l.y));const le=i.state.buffers.depth.getReversed();if(ee.camera._reversedDepth=le,ee.map===null||ue===!0){if(ee.map!==null&&(ee.map.depthTexture!==null&&(ee.map.depthTexture.dispose(),ee.map.depthTexture=null),ee.map.dispose()),this.type===Eo){if(pe.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ee.map=new Hi(a.x,a.y,{format:Ts,type:dr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),ee.map.texture.name=pe.name+".shadowMap",ee.map.depthTexture=new Ma(a.x,a.y,Bi),ee.map.depthTexture.name=pe.name+".shadowMapDepth",ee.map.depthTexture.format=fr,ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Mn,ee.map.depthTexture.magFilter=Mn}else pe.isPointLight?(ee.map=new Ov(a.x),ee.map.depthTexture=new Rb(a.x,ji)):(ee.map=new Hi(a.x,a.y),ee.map.depthTexture=new Ma(a.x,a.y,ji)),ee.map.depthTexture.name=pe.name+".shadowMap",ee.map.depthTexture.format=fr,this.type===xc?(ee.map.depthTexture.compareFunction=le?Gh:Hh,ee.map.depthTexture.minFilter=Pn,ee.map.depthTexture.magFilter=Pn):(ee.map.depthTexture.compareFunction=null,ee.map.depthTexture.minFilter=Mn,ee.map.depthTexture.magFilter=Mn);ee.camera.updateProjectionMatrix()}const H=ee.map.isWebGLCubeRenderTarget?6:1;for(let D=0;D<H;D++){if(ee.map.isWebGLCubeRenderTarget)i.setRenderTarget(ee.map,D),i.clear();else{D===0&&(i.setRenderTarget(ee.map),i.clear());const G=ee.getViewport(D);c.set(l.x*G.x,l.y*G.y,l.x*G.z,l.y*G.w),J.viewport(c)}if(pe.isPointLight){const G=ee.camera,be=ee.matrix,Re=pe.distance||G.far;Re!==G.far&&(G.far=Re,G.updateProjectionMatrix()),So.setFromMatrixPosition(pe.matrixWorld),G.position.copy(So),xf.copy(G.position),xf.add(AR[D]),G.up.copy(CR[D]),G.lookAt(xf),G.updateMatrixWorld(),be.makeTranslation(-So.x,-So.y,-So.z),cx.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ee._frustum.setFromProjectionMatrix(cx,G.coordinateSystem,G.reversedDepth)}else ee.updateMatrices(pe);r=ee.getFrustum(),T(F,b,ee.camera,pe,this.type)}ee.isPointLightShadow!==!0&&this.type===Eo&&N(ee,b),ee.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(O,V,B)};function N(P,F){const b=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(a.x,a.y,{format:Ts,type:dr})),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(F,null,b,x,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(F,null,b,M,C,null)}function L(P,F,b,O){let V=null;const B=b.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)V=B;else if(V=b.isPointLight===!0?f:d,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const J=V.uuid,ue=F.uuid;let me=p[J];me===void 0&&(me={},p[J]=me);let K=me[ue];K===void 0&&(K=V.clone(),me[ue]=K,F.addEventListener("dispose",I)),V=K}if(V.visible=F.visible,V.wireframe=F.wireframe,O===Eo?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:_[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,b.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const J=i.properties.get(V);J.light=b}return V}function T(P,F,b,O,V){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===Eo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),me=P.material;if(Array.isArray(me)){const K=ue.groups;for(let pe=0,ee=K.length;pe<ee;pe++){const $=K[pe],le=me[$.materialIndex];if(le&&le.visible){const H=L(P,le,O,V);P.onBeforeShadow(i,P,F,b,ue,H,$),i.renderBufferDirect(b,null,ue,H,P,$),P.onAfterShadow(i,P,F,b,ue,H,$)}}}else if(me.visible){const K=L(P,me,O,V);P.onBeforeShadow(i,P,F,b,ue,K,null),i.renderBufferDirect(b,null,ue,K,P,null),P.onAfterShadow(i,P,F,b,ue,K,null)}}const J=P.children;for(let ue=0,me=J.length;ue<me;ue++)T(J[ue],F,b,O,V)}function I(P){P.target.removeEventListener("dispose",I);for(const b in p){const O=p[b],V=P.target.uuid;V in O&&(O[V].dispose(),delete O[V])}}}function NR(i,e){function t(){let j=!1;const Fe=new Qt;let ye=null;const ke=new Qt(0,0,0,0);return{setMask:function(ze){ye!==ze&&!j&&(i.colorMask(ze,ze,ze,ze),ye=ze)},setLocked:function(ze){j=ze},setClear:function(ze,Ee,Je,$e,Ht){Ht===!0&&(ze*=$e,Ee*=$e,Je*=$e),Fe.set(ze,Ee,Je,$e),ke.equals(Fe)===!1&&(i.clearColor(ze,Ee,Je,$e),ke.copy(Fe))},reset:function(){j=!1,ye=null,ke.set(-1,0,0,0)}}}function r(){let j=!1,Fe=!1,ye=null,ke=null,ze=null;return{setReversed:function(Ee){if(Fe!==Ee){const Je=e.get("EXT_clip_control");Ee?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Fe=Ee;const $e=ze;ze=null,this.setClear($e)}},getReversed:function(){return Fe},setTest:function(Ee){Ee?xe(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(Ee){ye!==Ee&&!j&&(i.depthMask(Ee),ye=Ee)},setFunc:function(Ee){if(Fe&&(Ee=rb[Ee]),ke!==Ee){switch(Ee){case Rf:i.depthFunc(i.NEVER);break;case Nf:i.depthFunc(i.ALWAYS);break;case Pf:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case Lf:i.depthFunc(i.EQUAL);break;case Df:i.depthFunc(i.GEQUAL);break;case If:i.depthFunc(i.GREATER);break;case Uf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=Ee}},setLocked:function(Ee){j=Ee},setClear:function(Ee){ze!==Ee&&(ze=Ee,Fe&&(Ee=1-Ee),i.clearDepth(Ee))},reset:function(){j=!1,ye=null,ke=null,ze=null,Fe=!1}}}function a(){let j=!1,Fe=null,ye=null,ke=null,ze=null,Ee=null,Je=null,$e=null,Ht=null;return{setTest:function(Ot){j||(Ot?xe(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ot){Fe!==Ot&&!j&&(i.stencilMask(Ot),Fe=Ot)},setFunc:function(Ot,En,si){(ye!==Ot||ke!==En||ze!==si)&&(i.stencilFunc(Ot,En,si),ye=Ot,ke=En,ze=si)},setOp:function(Ot,En,si){(Ee!==Ot||Je!==En||$e!==si)&&(i.stencilOp(Ot,En,si),Ee=Ot,Je=En,$e=si)},setLocked:function(Ot){j=Ot},setClear:function(Ot){Ht!==Ot&&(i.clearStencil(Ot),Ht=Ot)},reset:function(){j=!1,Fe=null,ye=null,ke=null,ze=null,Ee=null,Je=null,$e=null,Ht=null}}}const l=new t,c=new r,d=new a,f=new WeakMap,p=new WeakMap;let g={},_={},x={},M=new WeakMap,w=[],C=null,S=!1,y=null,N=null,L=null,T=null,I=null,P=null,F=null,b=new Et(0,0,0),O=0,V=!1,B=null,J=null,ue=null,me=null,K=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,$=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(le)[1]),ee=$>=1):le.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),ee=$>=2);let H=null,D={};const G=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),Re=new Qt().fromArray(G),Ne=new Qt().fromArray(be);function Z(j,Fe,ye,ke){const ze=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(j,Ee),i.texParameteri(j,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(j,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<ye;Je++)j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Fe+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return Ee}const ve={};ve[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),xe(i.DEPTH_TEST),c.setFunc(ya),ut(!1),yt(cg),xe(i.CULL_FACE),st(cr);function xe(j){g[j]!==!0&&(i.enable(j),g[j]=!0)}function Be(j){g[j]!==!1&&(i.disable(j),g[j]=!1)}function Ke(j,Fe){return x[j]!==Fe?(i.bindFramebuffer(j,Fe),x[j]=Fe,j===i.DRAW_FRAMEBUFFER&&(x[i.FRAMEBUFFER]=Fe),j===i.FRAMEBUFFER&&(x[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ze(j,Fe){let ye=w,ke=!1;if(j){ye=M.get(Fe),ye===void 0&&(ye=[],M.set(Fe,ye));const ze=j.textures;if(ye.length!==ze.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let Ee=0,Je=ze.length;Ee<Je;Ee++)ye[Ee]=i.COLOR_ATTACHMENT0+Ee;ye.length=ze.length,ke=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,ke=!0);ke&&i.drawBuffers(ye)}function ht(j){return C!==j?(i.useProgram(j),C=j,!0):!1}const Se={[gs]:i.FUNC_ADD,[Aw]:i.FUNC_SUBTRACT,[Cw]:i.FUNC_REVERSE_SUBTRACT};Se[Rw]=i.MIN,Se[Nw]=i.MAX;const rt={[Pw]:i.ZERO,[Lw]:i.ONE,[Dw]:i.SRC_COLOR,[Af]:i.SRC_ALPHA,[Bw]:i.SRC_ALPHA_SATURATE,[Fw]:i.DST_COLOR,[Uw]:i.DST_ALPHA,[Iw]:i.ONE_MINUS_SRC_COLOR,[Cf]:i.ONE_MINUS_SRC_ALPHA,[kw]:i.ONE_MINUS_DST_COLOR,[Ow]:i.ONE_MINUS_DST_ALPHA,[zw]:i.CONSTANT_COLOR,[Vw]:i.ONE_MINUS_CONSTANT_COLOR,[Hw]:i.CONSTANT_ALPHA,[Gw]:i.ONE_MINUS_CONSTANT_ALPHA};function st(j,Fe,ye,ke,ze,Ee,Je,$e,Ht,Ot){if(j===cr){S===!0&&(Be(i.BLEND),S=!1);return}if(S===!1&&(xe(i.BLEND),S=!0),j!==Tw){if(j!==y||Ot!==V){if((N!==gs||I!==gs)&&(i.blendEquation(i.FUNC_ADD),N=gs,I=gs),Ot)switch(j){case ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFunc(i.ONE,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",j);break}else switch(j){case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dg:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",j);break}L=null,T=null,P=null,F=null,b.set(0,0,0),O=0,y=j,V=Ot}return}ze=ze||Fe,Ee=Ee||ye,Je=Je||ke,(Fe!==N||ze!==I)&&(i.blendEquationSeparate(Se[Fe],Se[ze]),N=Fe,I=ze),(ye!==L||ke!==T||Ee!==P||Je!==F)&&(i.blendFuncSeparate(rt[ye],rt[ke],rt[Ee],rt[Je]),L=ye,T=ke,P=Ee,F=Je),($e.equals(b)===!1||Ht!==O)&&(i.blendColor($e.r,$e.g,$e.b,Ht),b.copy($e),O=Ht),y=j,V=!1}function Ce(j,Fe){j.side===or?Be(i.CULL_FACE):xe(i.CULL_FACE);let ye=j.side===Kn;Fe&&(ye=!ye),ut(ye),j.blending===ma&&j.transparent===!1?st(cr):st(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),l.setMask(j.colorWrite);const ke=j.stencilWrite;d.setTest(ke),ke&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),kt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?xe(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(j){B!==j&&(j?i.frontFace(i.CW):i.frontFace(i.CCW),B=j)}function yt(j){j!==ww?(xe(i.CULL_FACE),j!==J&&(j===cg?i.cullFace(i.BACK):j===bw?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),J=j}function gt(j){j!==ue&&(ee&&i.lineWidth(j),ue=j)}function kt(j,Fe,ye){j?(xe(i.POLYGON_OFFSET_FILL),(me!==Fe||K!==ye)&&(me=Fe,K=ye,c.getReversed()&&(Fe=-Fe),i.polygonOffset(Fe,ye))):Be(i.POLYGON_OFFSET_FILL)}function Nt(j){j?xe(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function Dt(j){j===void 0&&(j=i.TEXTURE0+pe-1),H!==j&&(i.activeTexture(j),H=j)}function q(j,Fe,ye){ye===void 0&&(H===null?ye=i.TEXTURE0+pe-1:ye=H);let ke=D[ye];ke===void 0&&(ke={type:void 0,texture:void 0},D[ye]=ke),(ke.type!==j||ke.texture!==Fe)&&(H!==ye&&(i.activeTexture(ye),H=ye),i.bindTexture(j,Fe||ve[j]),ke.type=j,ke.texture=Fe)}function an(){const j=D[H];j!==void 0&&j.type!==void 0&&(i.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ct(){try{i.compressedTexImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function E(){try{i.texSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Q(){try{i.texSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function ie(){try{i.compressedTexSubImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function _e(){try{i.texStorage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function Me(){try{i.texStorage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function ce(){try{i.texImage2D(...arguments)}catch(j){Lt("WebGLState:",j)}}function ge(){try{i.texImage3D(...arguments)}catch(j){Lt("WebGLState:",j)}}function De(j){return _[j]!==void 0?_[j]:i.getParameter(j)}function qe(j,Fe){_[j]!==Fe&&(i.pixelStorei(j,Fe),_[j]=Fe)}function Ie(j){Re.equals(j)===!1&&(i.scissor(j.x,j.y,j.z,j.w),Re.copy(j))}function Oe(j){Ne.equals(j)===!1&&(i.viewport(j.x,j.y,j.z,j.w),Ne.copy(j))}function tt(j,Fe){let ye=p.get(Fe);ye===void 0&&(ye=new WeakMap,p.set(Fe,ye));let ke=ye.get(j);ke===void 0&&(ke=i.getUniformBlockIndex(Fe,j.name),ye.set(j,ke))}function ot(j,Fe){const ke=p.get(Fe).get(j);f.get(Fe)!==ke&&(i.uniformBlockBinding(Fe,ke,j.__bindingPointIndex),f.set(Fe,ke))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},_={},H=null,D={},x={},M=new WeakMap,w=[],C=null,S=!1,y=null,N=null,L=null,T=null,I=null,P=null,F=null,b=new Et(0,0,0),O=0,V=!1,B=null,J=null,ue=null,me=null,K=null,Re.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:xe,disable:Be,bindFramebuffer:Ke,drawBuffers:Ze,useProgram:ht,setBlending:st,setMaterial:Ce,setFlipSided:ut,setCullFace:yt,setLineWidth:gt,setPolygonOffset:kt,setScissorTest:Nt,activeTexture:Dt,bindTexture:q,unbindTexture:an,compressedTexImage2D:Ct,compressedTexImage3D:U,texImage2D:ce,texImage3D:ge,pixelStorei:qe,getParameter:De,updateUBOMapping:tt,uniformBlockBinding:ot,texStorage2D:_e,texStorage3D:Me,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:te,compressedTexSubImage3D:ie,scissor:Ie,viewport:Oe,reset:dt}}function PR(i,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,g=new WeakMap,_=new Set;let x;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,E){return w?new OffscreenCanvas(U,E):Dc("canvas")}function S(U,E,Q){let te=1;const ie=Ct(U);if((ie.width>Q||ie.height>Q)&&(te=Q/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const _e=Math.floor(te*ie.width),Me=Math.floor(te*ie.height);x===void 0&&(x=C(_e,Me));const ce=E?C(_e,Me):x;return ce.width=_e,ce.height=Me,ce.getContext("2d").drawImage(U,0,0,_e,Me),pt("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+_e+"x"+Me+")."),ce}else return"data"in U&&pt("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),U;return U}function y(U){return U.generateMipmaps}function N(U){i.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?i.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(U,E,Q,te,ie,_e=!1){if(U!==null){if(i[U]!==void 0)return i[U];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Me;te&&(Me=e.get("EXT_texture_norm16"),Me||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ce=E;if(E===i.RED&&(Q===i.FLOAT&&(ce=i.R32F),Q===i.HALF_FLOAT&&(ce=i.R16F),Q===i.UNSIGNED_BYTE&&(ce=i.R8),Q===i.UNSIGNED_SHORT&&Me&&(ce=Me.R16_EXT),Q===i.SHORT&&Me&&(ce=Me.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ce=i.R8UI),Q===i.UNSIGNED_SHORT&&(ce=i.R16UI),Q===i.UNSIGNED_INT&&(ce=i.R32UI),Q===i.BYTE&&(ce=i.R8I),Q===i.SHORT&&(ce=i.R16I),Q===i.INT&&(ce=i.R32I)),E===i.RG&&(Q===i.FLOAT&&(ce=i.RG32F),Q===i.HALF_FLOAT&&(ce=i.RG16F),Q===i.UNSIGNED_BYTE&&(ce=i.RG8),Q===i.UNSIGNED_SHORT&&Me&&(ce=Me.RG16_EXT),Q===i.SHORT&&Me&&(ce=Me.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ce=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ce=i.RG16UI),Q===i.UNSIGNED_INT&&(ce=i.RG32UI),Q===i.BYTE&&(ce=i.RG8I),Q===i.SHORT&&(ce=i.RG16I),Q===i.INT&&(ce=i.RG32I)),E===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),Q===i.UNSIGNED_INT&&(ce=i.RGB32UI),Q===i.BYTE&&(ce=i.RGB8I),Q===i.SHORT&&(ce=i.RGB16I),Q===i.INT&&(ce=i.RGB32I)),E===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ce=i.RGBA32UI),Q===i.BYTE&&(ce=i.RGBA8I),Q===i.SHORT&&(ce=i.RGBA16I),Q===i.INT&&(ce=i.RGBA32I)),E===i.RGB&&(Q===i.UNSIGNED_SHORT&&Me&&(ce=Me.RGB16_EXT),Q===i.SHORT&&Me&&(ce=Me.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ce=i.R11F_G11F_B10F)),E===i.RGBA){const ge=_e?Lc:Rt.getTransfer(ie);Q===i.FLOAT&&(ce=i.RGBA32F),Q===i.HALF_FLOAT&&(ce=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ce=ge===Vt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Me&&(ce=Me.RGBA16_EXT),Q===i.SHORT&&Me&&(ce=Me.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function I(U,E){let Q;return U?E===null||E===ji||E===No?Q=i.DEPTH24_STENCIL8:E===Bi?Q=i.DEPTH32F_STENCIL8:E===Ro&&(Q=i.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===No?Q=i.DEPTH_COMPONENT24:E===Bi?Q=i.DEPTH_COMPONENT32F:E===Ro&&(Q=i.DEPTH_COMPONENT16),Q}function P(U,E){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Mn&&U.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function F(U){const E=U.target;E.removeEventListener("dispose",F),O(E),E.isVideoTexture&&g.delete(E),E.isHTMLTexture&&_.delete(E)}function b(U){const E=U.target;E.removeEventListener("dispose",b),B(E)}function O(U){const E=r.get(U);if(E.__webglInit===void 0)return;const Q=U.source,te=M.get(Q);if(te){const ie=te[E.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&V(U),Object.keys(te).length===0&&M.delete(Q)}r.remove(U)}function V(U){const E=r.get(U);i.deleteTexture(E.__webglTexture);const Q=U.source,te=M.get(Q);delete te[E.__cacheKey],c.memory.textures--}function B(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(E.__webglFramebuffer[te]))for(let ie=0;ie<E.__webglFramebuffer[te].length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[te][ie]);else i.deleteFramebuffer(E.__webglFramebuffer[te]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[te])}else{if(Array.isArray(E.__webglFramebuffer))for(let te=0;te<E.__webglFramebuffer.length;te++)i.deleteFramebuffer(E.__webglFramebuffer[te]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let te=0;te<E.__webglColorRenderbuffer.length;te++)E.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[te]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=U.textures;for(let te=0,ie=Q.length;te<ie;te++){const _e=r.get(Q[te]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),c.memory.textures--),r.remove(Q[te])}r.remove(U)}let J=0;function ue(){J=0}function me(){return J}function K(U){J=U}function pe(){const U=J;return U>=a.maxTextures&&pt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+a.maxTextures),J+=1,U}function ee(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function $(U,E){const Q=r.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Q.__version!==U.version){const te=U.image;if(te===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(Q,U,E);return}}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+E)}function le(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Be(Q,U,E);return}else U.isExternalTexture&&(Q.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+E)}function H(U,E){const Q=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Q.__version!==U.version){Be(Q,U,E);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+E)}function D(U,E){const Q=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Q.__version!==U.version){Ke(Q,U,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+E)}const G={[Of]:i.REPEAT,[lr]:i.CLAMP_TO_EDGE,[Ff]:i.MIRRORED_REPEAT},be={[Mn]:i.NEAREST,[Xw]:i.NEAREST_MIPMAP_NEAREST,[Xl]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Bd]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},Re={[Yw]:i.NEVER,[eb]:i.ALWAYS,[Kw]:i.LESS,[Hh]:i.LEQUAL,[Zw]:i.EQUAL,[Gh]:i.GEQUAL,[Jw]:i.GREATER,[Qw]:i.NOTEQUAL};function Ne(U,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Bd||E.magFilter===Xl||E.magFilter===_s||E.minFilter===Pn||E.minFilter===Bd||E.minFilter===Xl||E.minFilter===_s)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,G[E.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,G[E.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,G[E.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,be[E.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,be[E.minFilter]),E.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,Re[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Mn||E.minFilter!==Xl&&E.minFilter!==_s||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Z(U,E){let Q=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",F));const te=E.source;let ie=M.get(te);ie===void 0&&(ie={},M.set(te,ie));const _e=ee(E);if(_e!==U.__cacheKey){ie[_e]===void 0&&(ie[_e]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),ie[_e].usedTimes++;const Me=ie[U.__cacheKey];Me!==void 0&&(ie[U.__cacheKey].usedTimes--,Me.usedTimes===0&&V(E)),U.__cacheKey=_e,U.__webglTexture=ie[_e].texture}return Q}function ve(U,E,Q){return Math.floor(Math.floor(U/Q)/E)}function xe(U,E,Q,te){const _e=U.updateRanges;if(_e.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Q,te,E.data);else{_e.sort((qe,Ie)=>qe.start-Ie.start);let Me=0;for(let qe=1;qe<_e.length;qe++){const Ie=_e[Me],Oe=_e[qe],tt=Ie.start+Ie.count,ot=ve(Oe.start,E.width,4),dt=ve(Ie.start,E.width,4);Oe.start<=tt+1&&ot===dt&&ve(Oe.start+Oe.count-1,E.width,4)===ot?Ie.count=Math.max(Ie.count,Oe.start+Oe.count-Ie.start):(++Me,_e[Me]=Oe)}_e.length=Me+1;const ce=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),De=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let qe=0,Ie=_e.length;qe<Ie;qe++){const Oe=_e[qe],tt=Math.floor(Oe.start/4),ot=Math.ceil(Oe.count/4),dt=tt%E.width,j=Math.floor(tt/E.width),Fe=ot,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(i.UNPACK_SKIP_ROWS,j),t.texSubImage2D(i.TEXTURE_2D,0,dt,j,Fe,ye,Q,te,E.data)}U.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ce),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function Be(U,E,Q){let te=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(te=i.TEXTURE_3D);const ie=Z(U,E),_e=E.source;t.bindTexture(te,U.__webglTexture,i.TEXTURE0+Q);const Me=r.get(_e);if(_e.version!==Me.__version||ie===!0){if(t.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ye=Rt.getPrimaries(Rt.workingColorSpace),ke=E.colorSpace===Vr?null:Rt.getPrimaries(E.colorSpace),ze=E.colorSpace===Vr||ye===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ge=S(E.image,!1,a.maxTextureSize);ge=an(E,ge);const De=l.convert(E.format,E.colorSpace),qe=l.convert(E.type);let Ie=T(E.internalFormat,De,qe,E.normalized,E.colorSpace,E.isVideoTexture);Ne(te,E);let Oe;const tt=E.mipmaps,ot=E.isVideoTexture!==!0,dt=Me.__version===void 0||ie===!0,j=_e.dataReady,Fe=P(E,ge);if(E.isDepthTexture)Ie=I(E.format===ys,E.type),dt&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Ie,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,De,qe,null));else if(E.isDataTexture)if(tt.length>0){ot&&dt&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,tt[0].width,tt[0].height);for(let ye=0,ke=tt.length;ye<ke;ye++)Oe=tt[ye],ot?j&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,De,qe,Oe.data):t.texImage2D(i.TEXTURE_2D,ye,Ie,Oe.width,Oe.height,0,De,qe,Oe.data);E.generateMipmaps=!1}else ot?(dt&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,ge.width,ge.height),j&&xe(E,ge,De,qe)):t.texImage2D(i.TEXTURE_2D,0,Ie,ge.width,ge.height,0,De,qe,ge.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ot&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Ie,tt[0].width,tt[0].height,ge.depth);for(let ye=0,ke=tt.length;ye<ke;ye++)if(Oe=tt[ye],E.format!==Ri)if(De!==null)if(ot){if(j)if(E.layerUpdates.size>0){const ze=zg(Oe.width,Oe.height,E.format,E.type);for(const Ee of E.layerUpdates){const Je=Oe.data.subarray(Ee*ze/Oe.data.BYTES_PER_ELEMENT,(Ee+1)*ze/Oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Ee,Oe.width,Oe.height,1,De,Je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,ge.depth,De,Oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ie,Oe.width,Oe.height,ge.depth,0,Oe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?j&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Oe.width,Oe.height,ge.depth,De,qe,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ie,Oe.width,Oe.height,ge.depth,0,De,qe,Oe.data)}else{ot&&dt&&t.texStorage2D(i.TEXTURE_2D,Fe,Ie,tt[0].width,tt[0].height);for(let ye=0,ke=tt.length;ye<ke;ye++)Oe=tt[ye],E.format!==Ri?De!==null?ot?j&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ie,Oe.width,Oe.height,0,Oe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?j&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Oe.width,Oe.height,De,qe,Oe.data):t.texImage2D(i.TEXTURE_2D,ye,Ie,Oe.width,Oe.height,0,De,qe,Oe.data)}else if(E.isDataArrayTexture)if(ot){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,Ie,ge.width,ge.height,ge.depth),j)if(E.layerUpdates.size>0){const ye=zg(ge.width,ge.height,E.format,E.type);for(const ke of E.layerUpdates){const ze=ge.data.subarray(ke*ye/ge.data.BYTES_PER_ELEMENT,(ke+1)*ye/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ke,ge.width,ge.height,1,De,qe,ze)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,De,qe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,ge.width,ge.height,ge.depth,0,De,qe,ge.data);else if(E.isData3DTexture)ot?(dt&&t.texStorage3D(i.TEXTURE_3D,Fe,Ie,ge.width,ge.height,ge.depth),j&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,De,qe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,ge.width,ge.height,ge.depth,0,De,qe,ge.data);else if(E.isFramebufferTexture){if(dt)if(ot)t.texStorage2D(i.TEXTURE_2D,Fe,Ie,ge.width,ge.height);else{let ye=ge.width,ke=ge.height;for(let ze=0;ze<Fe;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ie,ye,ke,0,De,qe,null),ye>>=1,ke>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ge.parentNode!==ye){ye.appendChild(ge),_.add(E),ye.onpaint=ke=>{const ze=ke.changedElements;for(const Ee of _)ze.includes(Ee.image)&&(Ee.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{const ze=i.RGBA,Ee=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,Ee,Je,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(ot&&dt){const ye=Ct(tt[0]);t.texStorage2D(i.TEXTURE_2D,Fe,Ie,ye.width,ye.height)}for(let ye=0,ke=tt.length;ye<ke;ye++)Oe=tt[ye],ot?j&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,De,qe,Oe):t.texImage2D(i.TEXTURE_2D,ye,Ie,De,qe,Oe);E.generateMipmaps=!1}else if(ot){if(dt){const ye=Ct(ge);t.texStorage2D(i.TEXTURE_2D,Fe,Ie,ye.width,ye.height)}j&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,qe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Ie,De,qe,ge);y(E)&&N(te),Me.__version=_e.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ke(U,E,Q){if(E.image.length!==6)return;const te=Z(U,E),ie=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+Q);const _e=r.get(ie);if(ie.version!==_e.__version||te===!0){t.activeTexture(i.TEXTURE0+Q);const Me=Rt.getPrimaries(Rt.workingColorSpace),ce=E.colorSpace===Vr?null:Rt.getPrimaries(E.colorSpace),ge=E.colorSpace===Vr||Me===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,qe=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let Ee=0;Ee<6;Ee++)!De&&!qe?Ie[Ee]=S(E.image[Ee],!0,a.maxCubemapSize):Ie[Ee]=qe?E.image[Ee].image:E.image[Ee],Ie[Ee]=an(E,Ie[Ee]);const Oe=Ie[0],tt=l.convert(E.format,E.colorSpace),ot=l.convert(E.type),dt=T(E.internalFormat,tt,ot,E.normalized,E.colorSpace),j=E.isVideoTexture!==!0,Fe=_e.__version===void 0||te===!0,ye=ie.dataReady;let ke=P(E,Oe);Ne(i.TEXTURE_CUBE_MAP,E);let ze;if(De){j&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,Oe.width,Oe.height);for(let Ee=0;Ee<6;Ee++){ze=Ie[Ee].mipmaps;for(let Je=0;Je<ze.length;Je++){const $e=ze[Je];E.format!==Ri?tt!==null?j?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,$e.width,$e.height,tt,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,dt,$e.width,$e.height,0,$e.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,0,0,$e.width,$e.height,tt,ot,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je,dt,$e.width,$e.height,0,tt,ot,$e.data)}}}else{if(ze=E.mipmaps,j&&Fe){ze.length>0&&ke++;const Ee=Ct(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,dt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(qe){j?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ie[Ee].width,Ie[Ee].height,tt,ot,Ie[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,Ie[Ee].width,Ie[Ee].height,0,tt,ot,Ie[Ee].data);for(let Je=0;Je<ze.length;Je++){const Ht=ze[Je].image[Ee].image;j?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,Ht.width,Ht.height,tt,ot,Ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,dt,Ht.width,Ht.height,0,tt,ot,Ht.data)}}else{j?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,tt,ot,Ie[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,dt,tt,ot,Ie[Ee]);for(let Je=0;Je<ze.length;Je++){const $e=ze[Je];j?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,0,0,tt,ot,$e.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Je+1,dt,tt,ot,$e.image[Ee])}}}y(E)&&N(i.TEXTURE_CUBE_MAP),_e.__version=ie.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function Ze(U,E,Q,te,ie,_e){const Me=l.convert(Q.format,Q.colorSpace),ce=l.convert(Q.type),ge=T(Q.internalFormat,Me,ce,Q.normalized,Q.colorSpace),De=r.get(E),qe=r.get(Q);if(qe.__renderTarget=E,!De.__hasExternalTextures){const Ie=Math.max(1,E.width>>_e),Oe=Math.max(1,E.height>>_e);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,_e,ge,Ie,Oe,E.depth,0,Me,ce,null):t.texImage2D(ie,_e,ge,Ie,Oe,0,Me,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),Dt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ie,qe.__webglTexture,0,Nt(E)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ie,qe.__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(U,E,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,U),E.depthBuffer){const te=E.depthTexture,ie=te&&te.isDepthTexture?te.type:null,_e=I(E.stencilBuffer,ie),Me=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Dt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),_e,E.width,E.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,U)}else{const te=E.textures;for(let ie=0;ie<te.length;ie++){const _e=te[ie],Me=l.convert(_e.format,_e.colorSpace),ce=l.convert(_e.type),ge=T(_e.internalFormat,Me,ce,_e.normalized,_e.colorSpace);Dt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),ge,E.width,E.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),ge,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ge,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(U,E,Q){const te=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ie=r.get(E.depthTexture);if(ie.__renderTarget=E,(!ie.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),te){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ie.__webglTexture===void 0){ie.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E.depthTexture);const De=l.convert(E.depthTexture.format),qe=l.convert(E.depthTexture.type);let Ie;E.depthTexture.format===fr?Ie=i.DEPTH_COMPONENT24:E.depthTexture.format===ys&&(Ie=i.DEPTH24_STENCIL8);for(let Oe=0;Oe<6;Oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0,Ie,E.width,E.height,0,De,qe,null)}}else $(E.depthTexture,0);const _e=ie.__webglTexture,Me=Nt(E),ce=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,ge=E.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===fr)Dt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ce,_e,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ce,_e,0);else if(E.depthTexture.format===ys)Dt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ce,_e,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ce,_e,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(U){const E=r.get(U),Q=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const te=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),te){const ie=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),E.__depthDisposeCallback=ie}E.__boundDepthTexture=te}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let te=0;te<6;te++)Se(E.__webglFramebuffer[te],U,te);else{const te=U.texture.mipmaps;te&&te.length>0?Se(E.__webglFramebuffer[0],U,0):Se(E.__webglFramebuffer,U,0)}else if(Q){E.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[te]),E.__webglDepthbuffer[te]===void 0)E.__webglDepthbuffer[te]=i.createRenderbuffer(),ht(E.__webglDepthbuffer[te],U,!1);else{const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,_e)}}else{const te=U.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),ht(E.__webglDepthbuffer,U,!1);else{const ie=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,_e)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(U,E,Q){const te=r.get(U);E!==void 0&&Ze(te.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&rt(U)}function Ce(U){const E=U.texture,Q=r.get(U),te=r.get(E);U.addEventListener("dispose",b);const ie=U.textures,_e=U.isWebGLCubeRenderTarget===!0,Me=ie.length>1;if(Me||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=E.version,c.memory.textures++),_e){Q.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ce]=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[ce][ge]=i.createFramebuffer()}else Q.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)Q.__webglFramebuffer[ce]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ce=0,ge=ie.length;ce<ge;ce++){const De=r.get(ie[ce]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),c.memory.textures++)}if(U.samples>0&&Dt(U)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const ge=ie[ce];Q.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ce]);const De=l.convert(ge.format,ge.colorSpace),qe=l.convert(ge.type),Ie=T(ge.internalFormat,De,qe,ge.normalized,ge.colorSpace,U.isXRRenderTarget===!0),Oe=Nt(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ie,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(Q.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ze(Q.__webglFramebuffer[ce][ge],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Ze(Q.__webglFramebuffer[ce],U,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);y(E)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,ge=ie.length;ce<ge;ce++){const De=ie[ce],qe=r.get(De);let Ie=i.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ie=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ie,qe.__webglTexture),Ne(Ie,De),Ze(Q.__webglFramebuffer,U,De,i.COLOR_ATTACHMENT0+ce,Ie,0),y(De)&&N(Ie)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ce=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,te.__webglTexture),Ne(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Ze(Q.__webglFramebuffer[ge],U,E,i.COLOR_ATTACHMENT0,ce,ge);else Ze(Q.__webglFramebuffer,U,E,i.COLOR_ATTACHMENT0,ce,0);y(E)&&N(ce),t.unbindTexture()}U.depthBuffer&&rt(U)}function ut(U){const E=U.textures;for(let Q=0,te=E.length;Q<te;Q++){const ie=E[Q];if(y(ie)){const _e=L(U),Me=r.get(ie).__webglTexture;t.bindTexture(_e,Me),N(_e),t.unbindTexture()}}}const yt=[],gt=[];function kt(U){if(U.samples>0){if(Dt(U)===!1){const E=U.textures,Q=U.width,te=U.height;let ie=i.COLOR_BUFFER_BIT;const _e=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=r.get(U),ce=E.length>1;if(ce)for(let De=0;De<E.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const ge=U.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<E.length;De++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const qe=r.get(E[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,qe,0)}i.blitFramebuffer(0,0,Q,te,0,0,Q,te,ie,i.NEAREST),f===!0&&(yt.length=0,gt.length=0,yt.push(i.COLOR_ATTACHMENT0+De),U.depthBuffer&&U.resolveDepthBuffer===!1&&(yt.push(_e),gt.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let De=0;De<E.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const qe=r.get(E[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&f){const E=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Nt(U){return Math.min(a.maxSamples,U.samples)}function Dt(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function q(U){const E=c.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function an(U,E){const Q=U.colorSpace,te=U.format,ie=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Q!==Pc&&Q!==Vr&&(Rt.getTransfer(Q)===Vt?(te!==Ri||ie!==ri)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",Q)),E}function Ct(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=me,this.setTextureUnits=K,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=H,this.setTextureCube=D,this.rebindTextures=st,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ze,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LR(i,e){function t(r,a=Vr){let l;const c=Rt.getTransfer(a);if(r===ri)return i.UNSIGNED_BYTE;if(r===Fh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===kh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===gv)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===xv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===pv)return i.BYTE;if(r===mv)return i.SHORT;if(r===Ro)return i.UNSIGNED_SHORT;if(r===Oh)return i.INT;if(r===ji)return i.UNSIGNED_INT;if(r===Bi)return i.FLOAT;if(r===dr)return i.HALF_FLOAT;if(r===vv)return i.ALPHA;if(r===_v)return i.RGB;if(r===Ri)return i.RGBA;if(r===fr)return i.DEPTH_COMPONENT;if(r===ys)return i.DEPTH_STENCIL;if(r===yv)return i.RED;if(r===Bh)return i.RED_INTEGER;if(r===Ts)return i.RG;if(r===zh)return i.RG_INTEGER;if(r===Vh)return i.RGBA_INTEGER;if(r===vc||r===_c||r===yc||r===Sc)if(c===Vt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===vc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===_c)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===vc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===_c)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kf||r===Bf||r===zf||r===Vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf||r===Gf||r===jf||r===Wf||r===Xf||r===Rc||r===qf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Hf||r===Gf)return c===Vt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===jf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wf)return l.COMPRESSED_R11_EAC;if(r===Xf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Rc)return l.COMPRESSED_RG11_EAC;if(r===qf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$f||r===Yf||r===Kf||r===Zf||r===Jf||r===Qf||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$f)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Yf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Qf)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ah)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===oh)return c===Vt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===lh||r===ch||r===uh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===lh)return c===Vt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ch)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dh||r===fh||r===Nc||r===hh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===dh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===fh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===hh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const DR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class UR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Rv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:DR,fragmentShader:IR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new jc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends Cs{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",f=1,p=null,g=null,_=null,x=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",S=new UR,y={},N=t.getContextAttributes();let L=null,T=null;const I=[],P=[],F=new At;let b=null;const O=new ii;O.viewport=new Qt;const V=new ii;V.viewport=new Qt;const B=[O,V],J=new jb;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ve=I[Z];return ve===void 0&&(ve=new qd,I[Z]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Z){let ve=I[Z];return ve===void 0&&(ve=new qd,I[Z]=ve),ve.getGripSpace()},this.getHand=function(Z){let ve=I[Z];return ve===void 0&&(ve=new qd,I[Z]=ve),ve.getHandSpace()};function K(Z){const ve=P.indexOf(Z.inputSource);if(ve===-1)return;const xe=I[ve];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,p||c),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function pe(){a.removeEventListener("select",K),a.removeEventListener("selectstart",K),a.removeEventListener("selectend",K),a.removeEventListener("squeeze",K),a.removeEventListener("squeezestart",K),a.removeEventListener("squeezeend",K),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<I.length;Z++){const ve=P[Z];ve!==null&&(P[Z]=null,I[Z].disconnect(ve))}ue=null,me=null,S.reset();for(const Z in y)delete y[Z];e.setRenderTarget(L),M=null,x=null,_=null,a=null,T=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(b),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return w},this.getSession=function(){return a},this.setSession=async function(Z){if(a=Z,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",K),a.addEventListener("selectstart",K),a.addEventListener("selectend",K),a.addEventListener("squeeze",K),a.addEventListener("squeezestart",K),a.addEventListener("squeezeend",K),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",ee),N.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Be=null,Ke=null;N.depth&&(Ke=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=N.stencil?ys:fr,Be=N.stencil?No:ji);const Ze={colorFormat:t.RGBA8,depthFormat:Ke,scaleFactor:l};_=this.getBinding(),x=_.createProjectionLayer(Ze),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),T=new Hi(x.textureWidth,x.textureHeight,{format:Ri,type:ri,depthTexture:new Ma(x.textureWidth,x.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,xe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new Hi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await a.requestReferenceSpace(d),Ne.setContext(a),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function ee(Z){for(let ve=0;ve<Z.removed.length;ve++){const xe=Z.removed[ve],Be=P.indexOf(xe);Be>=0&&(P[Be]=null,I[Be].disconnect(xe))}for(let ve=0;ve<Z.added.length;ve++){const xe=Z.added[ve];let Be=P.indexOf(xe);if(Be===-1){for(let Ze=0;Ze<I.length;Ze++)if(Ze>=P.length){P.push(xe),Be=Ze;break}else if(P[Ze]===null){P[Ze]=xe,Be=Ze;break}if(Be===-1)break}const Ke=I[Be];Ke&&Ke.connect(xe)}}const $=new re,le=new re;function H(Z,ve,xe){$.setFromMatrixPosition(ve.matrixWorld),le.setFromMatrixPosition(xe.matrixWorld);const Be=$.distanceTo(le),Ke=ve.projectionMatrix.elements,Ze=xe.projectionMatrix.elements,ht=Ke[14]/(Ke[10]-1),Se=Ke[14]/(Ke[10]+1),rt=(Ke[9]+1)/Ke[5],st=(Ke[9]-1)/Ke[5],Ce=(Ke[8]-1)/Ke[0],ut=(Ze[8]+1)/Ze[0],yt=ht*Ce,gt=ht*ut,kt=Be/(-Ce+ut),Nt=kt*-Ce;if(ve.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Nt),Z.translateZ(kt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ke[10]===-1)Z.projectionMatrix.copy(ve.projectionMatrix),Z.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Dt=ht+kt,q=Se+kt,an=yt-Nt,Ct=gt+(Be-Nt),U=rt*Se/q*Dt,E=st*Se/q*Dt;Z.projectionMatrix.makePerspective(an,Ct,U,E,Dt,q),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function D(Z,ve){ve===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ve.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(a===null)return;let ve=Z.near,xe=Z.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(xe=S.depthFar)),J.near=V.near=O.near=ve,J.far=V.far=O.far=xe,(ue!==J.near||me!==J.far)&&(a.updateRenderState({depthNear:J.near,depthFar:J.far}),ue=J.near,me=J.far),J.layers.mask=Z.layers.mask|6,O.layers.mask=J.layers.mask&-5,V.layers.mask=J.layers.mask&-3;const Be=Z.parent,Ke=J.cameras;D(J,Be);for(let Ze=0;Ze<Ke.length;Ze++)D(Ke[Ze],Be);Ke.length===2?H(J,O,V):J.projectionMatrix.copy(O.projectionMatrix),G(Z,J,Be)};function G(Z,ve,xe){xe===null?Z.matrix.copy(ve.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ve.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ve.projectionMatrix),Z.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=mh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(x===null&&M===null))return f},this.setFoveation=function(Z){f=Z,x!==null&&(x.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(J)},this.getCameraTexture=function(Z){return y[Z]};let be=null;function Re(Z,ve){if(g=ve.getViewerPose(p||c),w=ve,g!==null){const xe=g.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let Be=!1;xe.length!==J.cameras.length&&(J.cameras.length=0,Be=!0);for(let Se=0;Se<xe.length;Se++){const rt=xe[Se];let st=null;if(M!==null)st=M.getViewport(rt);else{const ut=_.getViewSubImage(x,rt);st=ut.viewport,Se===0&&(e.setRenderTargetTextures(T,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(T))}let Ce=B[Se];Ce===void 0&&(Ce=new ii,Ce.layers.enable(Se),Ce.viewport=new Qt,B[Se]=Ce),Ce.matrix.fromArray(rt.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(rt.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(st.x,st.y,st.width,st.height),Se===0&&(J.matrix.copy(Ce.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Be===!0&&J.cameras.push(Ce)}const Ke=a.enabledFeatures;if(Ke&&Ke.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const Se=_.getDepthInformation(xe[0]);Se&&Se.isValid&&Se.texture&&S.init(Se,a.renderState)}if(Ke&&Ke.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let Se=0;Se<xe.length;Se++){const rt=xe[Se].camera;if(rt){let st=y[rt];st||(st=new Rv,y[rt]=st);const Ce=_.getCameraImage(rt);st.sourceTexture=Ce}}}}for(let xe=0;xe<I.length;xe++){const Be=P[xe],Ke=I[xe];Be!==null&&Ke!==void 0&&Ke.update(Be,ve,p||c)}be&&be(Z,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const Ne=new Iv;Ne.setAnimationLoop(Re),this.setAnimationLoop=function(Z){be=Z},this.dispose=function(){}}}const FR=new tn,Vv=new _t;Vv.set(-1,0,0,0,1,0,0,0,1);function kR(i,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Nv(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,N,L,T){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),x(S,y),y.isMeshPhysicalMaterial&&M(S,y,T)):y.isMeshMatcapMaterial?(l(S,y),w(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),C(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?f(S,y,N,L):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Kn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Kn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const N=e.get(y),L=N.envMap,T=N.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(FR.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Vv),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,N,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*N,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function x(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,N){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const N=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function BR(i,e,t,r){let a={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,I){const P=I.program;r.uniformBlockBinding(T,P)}function p(T,I){let P=a[T.id];P===void 0&&(S(T),P=g(T),a[T.id]=P,T.addEventListener("dispose",N));const F=I.program;r.updateUBOMapping(T,F);const b=e.render.frame;l[T.id]!==b&&(x(T),l[T.id]=b)}function g(T){const I=_();T.__bindingPointIndex=I;const P=i.createBuffer(),F=T.__size,b=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,F,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,P),P}function _(){for(let T=0;T<d;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(T){const I=a[T.id],P=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let b=0,O=P.length;b<O;b++){const V=P[b];if(Array.isArray(V))for(let B=0,J=V.length;B<J;B++)M(V[B],b,B,F);else M(V,b,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(T,I,P,F){if(C(T,I,P,F)===!0){const b=T.__offset,O=T.value;if(Array.isArray(O)){let V=0;for(let B=0;B<O.length;B++){const J=O[B],ue=y(J);w(J,T.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(O,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,T.__data)}}function w(T,I,P){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,P)}function C(T,I,P,F){const b=T.value,O=I+"_"+P;if(F[O]===void 0)return typeof b=="number"||typeof b=="boolean"?F[O]=b:ArrayBuffer.isView(b)?F[O]=b.slice():F[O]=b.clone(),!0;{const V=F[O];if(typeof b=="number"||typeof b=="boolean"){if(V!==b)return F[O]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(V.equals(b)===!1)return V.copy(b),!0}}return!1}function S(T){const I=T.uniforms;let P=0;const F=16;for(let O=0,V=I.length;O<V;O++){const B=Array.isArray(I[O])?I[O]:[I[O]];for(let J=0,ue=B.length;J<ue;J++){const me=B[J],K=Array.isArray(me.value)?me.value:[me.value];for(let pe=0,ee=K.length;pe<ee;pe++){const $=K[pe],le=y($),H=P%F,D=H%le.boundary,G=H+D;P+=D,G!==0&&F-G<le.storage&&(P+=F-G),me.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=P,P+=le.storage}}}const b=P%F;return b>0&&(P+=F-b),T.__size=P,T.__cache={},this}function y(T){const I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",T),I}function N(T){const I=T.target;I.removeEventListener("dispose",N);const P=c.indexOf(I.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function L(){for(const T in a)i.deleteBuffer(a[T]);c=[],a={},l={}}return{bind:f,update:p,dispose:L}}const zR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function VR(){return Fi===null&&(Fi=new bb(zR,16,16,Ts,dr),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=lr,Fi.wrapT=lr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class HR{constructor(e={}){const{canvas:t=nb(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const C=M,S=new Set([Vh,zh,Bh]),y=new Set([ri,ji,Ro,No,Fh,kh]),N=new Uint32Array(4),L=new Int32Array(4),T=new re;let I=null,P=null;const F=[],b=[];let O=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let B=!1,J=null,ue=null,me=null,K=null;this._outputColorSpace=hi;let pe=0,ee=0,$=null,le=-1,H=null;const D=new Qt,G=new Qt;let be=null;const Re=new Et(0);let Ne=0,Z=t.width,ve=t.height,xe=1,Be=null,Ke=null;const Ze=new Qt(0,0,Z,ve),ht=new Qt(0,0,Z,ve);let Se=!1;const rt=new qh;let st=!1,Ce=!1;const ut=new tn,yt=new re,gt=new Qt,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Dt(){return $===null?xe:1}let q=r;function an(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",Ht,!1),t.addEventListener("webglcontextrestored",Ot,!1),t.addEventListener("webglcontextcreationerror",En,!1),q===null){const Y="webgl2";if(q=an(Y,R),q===null)throw an(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Lt("WebGLRenderer: "+R.message),R}let Ct,U,E,Q,te,ie,_e,Me,ce,ge,De,qe,Ie,Oe,tt,ot,dt,j,Fe,ye,ke,ze,Ee;function Je(){Ct=new VA(q),Ct.init(),ke=new LR(q,Ct),U=new DA(q,Ct,e,ke),E=new NR(q,Ct),U.reversedDepthBuffer&&x&&E.buffers.depth.setReversed(!0),ue=q.createFramebuffer(),me=q.createFramebuffer(),K=q.createFramebuffer(),Q=new jA(q),te=new gR,ie=new PR(q,Ct,E,te,U,ke,Q),_e=new zA(V),Me=new $b(q),ze=new PA(q,Me),ce=new HA(q,Me,Q,ze),ge=new XA(q,ce,Me,ze,Q),j=new WA(q,U,ie),tt=new IA(te),De=new mR(V,_e,Ct,U,ze,tt),qe=new kR(V,te),Ie=new vR,Oe=new wR(Ct),dt=new NA(V,_e,E,ge,w,f),ot=new RR(V,ge,U),Ee=new BR(q,Q,U,E),Fe=new LA(q,Ct,Q),ye=new GA(q,Ct,Q),Q.programs=De.programs,V.capabilities=U,V.extensions=Ct,V.properties=te,V.renderLists=Ie,V.shadowMap=ot,V.state=E,V.info=Q}Je(),C!==ri&&(O=new $A(C,t.width,t.height,d,a,l));const $e=new OR(V,q);this.xr=$e,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const R=Ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(Z,ve,!1))},this.getSize=function(R){return R.set(Z,ve)},this.setSize=function(R,Y,de=!0){if($e.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=R,ve=Y,t.width=Math.floor(R*xe),t.height=Math.floor(Y*xe),de===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(Z*xe,ve*xe).floor()},this.setDrawingBufferSize=function(R,Y,de){Z=R,ve=Y,xe=de,t.width=Math.floor(R*de),t.height=Math.floor(Y*de),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(C===ri){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(D)},this.getViewport=function(R){return R.copy(Ze)},this.setViewport=function(R,Y,de,ae){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,Y,de,ae),E.viewport(D.copy(Ze).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(ht)},this.setScissor=function(R,Y,de,ae){R.isVector4?ht.set(R.x,R.y,R.z,R.w):ht.set(R,Y,de,ae),E.scissor(G.copy(ht).multiplyScalar(xe).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(R){E.setScissorTest(Se=R)},this.setOpaqueSort=function(R){Be=R},this.setTransparentSort=function(R){Ke=R},this.getClearColor=function(R){return R.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,de=!0){let ae=0;if(R){let se=!1;if($!==null){const Ue=$.texture.format;se=S.has(Ue)}if(se){const Ue=$.texture.type,We=y.has(Ue),Le=dt.getClearColor(),Qe=dt.getClearAlpha(),at=Le.r,xt=Le.g,vt=Le.b;We?(N[0]=at,N[1]=xt,N[2]=vt,N[3]=Qe,q.clearBufferuiv(q.COLOR,0,N)):(L[0]=at,L[1]=xt,L[2]=vt,L[3]=Qe,q.clearBufferiv(q.COLOR,0,L))}else ae|=q.COLOR_BUFFER_BIT}Y&&(ae|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&q.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),J=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Ht,!1),t.removeEventListener("webglcontextrestored",Ot,!1),t.removeEventListener("webglcontextcreationerror",En,!1),dt.dispose(),Ie.dispose(),Oe.dispose(),te.dispose(),_e.dispose(),ge.dispose(),ze.dispose(),Ee.dispose(),De.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Vo),$e.removeEventListener("sessionend",Ho),In.stop()};function Ht(R){R.preventDefault(),xg("WebGLRenderer: Context Lost."),B=!0}function Ot(){xg("WebGLRenderer: Context Restored."),B=!1;const R=Q.autoReset,Y=ot.enabled,de=ot.autoUpdate,ae=ot.needsUpdate,se=ot.type;Je(),Q.autoReset=R,ot.enabled=Y,ot.autoUpdate=de,ot.needsUpdate=ae,ot.type=se}function En(R){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function si(R){const Y=R.target;Y.removeEventListener("dispose",si),qr(Y)}function qr(R){Rs(R),te.remove(R)}function Rs(R){const Y=te.get(R).programs;Y!==void 0&&(Y.forEach(function(de){De.releaseProgram(de)}),R.isShaderMaterial&&De.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,de,ae,se,Ue){Y===null&&(Y=kt);const We=se.isMesh&&se.matrixWorld.determinantAffine()<0,Le=Kt(R,Y,de,ae,se);E.setMaterial(ae,We);let Qe=de.index,at=1;if(ae.wireframe===!0){if(Qe=ce.getWireframeAttribute(de),Qe===void 0)return;at=2}const xt=de.drawRange,vt=de.attributes.position;let nt=xt.start*at,Pt=(xt.start+xt.count)*at;Ue!==null&&(nt=Math.max(nt,Ue.start*at),Pt=Math.min(Pt,(Ue.start+Ue.count)*at)),Qe!==null?(nt=Math.max(nt,0),Pt=Math.min(Pt,Qe.count)):vt!=null&&(nt=Math.max(nt,0),Pt=Math.min(Pt,vt.count));const Gt=Pt-nt;if(Gt<0||Gt===1/0)return;ze.setup(se,ae,Le,de,Qe);let $t,Bt=Fe;if(Qe!==null&&($t=Me.get(Qe),Bt=ye,Bt.setIndex($t)),se.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*Dt()),Bt.setMode(q.LINES)):Bt.setMode(q.TRIANGLES);else if(se.isLine){let on=ae.linewidth;on===void 0&&(on=1),E.setLineWidth(on*Dt()),se.isLineSegments?Bt.setMode(q.LINES):se.isLineLoop?Bt.setMode(q.LINE_LOOP):Bt.setMode(q.LINE_STRIP)}else se.isPoints?Bt.setMode(q.POINTS):se.isSprite&&Bt.setMode(q.TRIANGLES);if(se.isBatchedMesh)if(Ct.get("WEBGL_multi_draw"))Bt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const on=se._multiDrawStarts,Ge=se._multiDrawCounts,vn=se._multiDrawCount,Mt=Qe?Me.get(Qe).bytesPerElement:1,zn=te.get(ae).currentProgram.getUniforms();for(let Vn=0;Vn<vn;Vn++)zn.setValue(q,"_gl_DrawID",Vn),Bt.render(on[Vn]/Mt,Ge[Vn])}else if(se.isInstancedMesh)Bt.renderInstances(nt,Gt,se.count);else if(de.isInstancedBufferGeometry){const on=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ge=Math.min(de.instanceCount,on);Bt.renderInstances(nt,Gt,Ge)}else Bt.render(nt,Gt)};function $r(R,Y,de){R.transparent===!0&&R.side===or&&R.forceSinglePass===!1?(R.side=Kn,R.needsUpdate=!0,Zr(R,Y,de),R.side=Wr,R.needsUpdate=!0,Zr(R,Y,de),R.side=or):Zr(R,Y,de)}this.compile=function(R,Y,de=null){de===null&&(de=R),P=Oe.get(de),P.init(Y),b.push(P),de.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),R!==de&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights();const ae=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ue=se.material;if(Ue)if(Array.isArray(Ue))for(let We=0;We<Ue.length;We++){const Le=Ue[We];$r(Le,de,se),ae.add(Le)}else $r(Ue,de,se),ae.add(Ue)}),P=b.pop(),ae},this.compileAsync=function(R,Y,de=null){const ae=this.compile(R,Y,de);return new Promise(se=>{function Ue(){if(ae.forEach(function(We){te.get(We).currentProgram.isReady()&&ae.delete(We)}),ae.size===0){se(R);return}setTimeout(Ue,10)}Ct.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Yr=null;function qc(R){Yr&&Yr(R)}function Vo(){In.stop()}function Ho(){In.start()}const In=new Iv;In.setAnimationLoop(qc),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(R){Yr=R,$e.setAnimationLoop(R),R===null?In.stop():In.start()},$e.addEventListener("sessionstart",Vo),$e.addEventListener("sessionend",Ho),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;J!==null&&J.renderStart(R,Y);const de=$e.enabled===!0&&$e.isPresenting===!0,ae=O!==null&&($===null||de)&&O.begin(V,$);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera(Y),Y=$e.getCamera()),R.isScene===!0&&R.onBeforeRender(V,R,Y,$),P=Oe.get(R,b.length),P.init(Y),P.state.textureUnits=ie.getTextureUnits(),b.push(P),ut.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),rt.setFromProjectionMatrix(ut,zi,Y.reversedDepth),Ce=this.localClippingEnabled,st=tt.init(this.clippingPlanes,Ce),I=Ie.get(R,F.length),I.init(),F.push(I),$e.enabled===!0&&$e.isPresenting===!0){const We=V.xr.getDepthSensingMesh();We!==null&&Ns(We,Y,-1/0,V.sortObjects)}Ns(R,Y,0,V.sortObjects),I.finish(),V.sortObjects===!0&&I.sort(Be,Ke,Y.reversedDepth),Nt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Nt&&dt.addToRenderList(I,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),st===!0&&tt.beginShadows();const se=P.state.shadowsArray;if(ot.render(se,R,Y),st===!0&&tt.endShadows(),(ae&&O.hasRenderPass())===!1){const We=I.opaque,Le=I.transmissive;if(P.setupLights(),Y.isArrayCamera){const Qe=Y.cameras;if(Le.length>0)for(let at=0,xt=Qe.length;at<xt;at++){const vt=Qe[at];Go(We,Le,R,vt)}Nt&&dt.render(R);for(let at=0,xt=Qe.length;at<xt;at++){const vt=Qe[at];Pa(I,R,vt,vt.viewport)}}else Le.length>0&&Go(We,Le,R,Y),Nt&&dt.render(R),Pa(I,R,Y)}$!==null&&ee===0&&(ie.updateMultisampleRenderTarget($),ie.updateRenderTargetMipmap($)),ae&&O.end(V),R.isScene===!0&&R.onAfterRender(V,R,Y),ze.resetDefaultState(),le=-1,H=null,b.pop(),b.length>0?(P=b[b.length-1],ie.setTextureUnits(P.state.textureUnits),st===!0&&tt.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?I=F[F.length-1]:I=null,J!==null&&J.renderEnd()};function Ns(R,Y,de,ae){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){ae&&gt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ut);const We=ge.update(R),Le=R.material;Le.visible&&I.push(R,We,Le,de,gt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const We=ge.update(R),Le=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),gt.copy(R.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),gt.copy(We.boundingSphere.center)),gt.applyMatrix4(R.matrixWorld).applyMatrix4(ut)),Array.isArray(Le)){const Qe=We.groups;for(let at=0,xt=Qe.length;at<xt;at++){const vt=Qe[at],nt=Le[vt.materialIndex];nt&&nt.visible&&I.push(R,We,nt,de,gt.z,vt)}}else Le.visible&&I.push(R,We,Le,de,gt.z,null)}}const Ue=R.children;for(let We=0,Le=Ue.length;We<Le;We++)Ns(Ue[We],Y,de,ae)}function Pa(R,Y,de,ae){const{opaque:se,transmissive:Ue,transparent:We}=R;P.setupLightsView(de),st===!0&&tt.setGlobalState(V.clippingPlanes,de),ae&&E.viewport(D.copy(ae)),se.length>0&&Kr(se,Y,de),Ue.length>0&&Kr(Ue,Y,de),We.length>0&&Kr(We,Y,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Go(R,Y,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const nt=Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Hi(1,1,{generateMipmaps:!0,type:nt?dr:ri,minFilter:_s,samples:Math.max(4,U.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[ae.id],We=ae.viewport||D;Ue.setSize(We.z*V.transmissionResolutionScale,We.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),Qe=V.getActiveCubeFace(),at=V.getActiveMipmapLevel();V.setRenderTarget(Ue),V.getClearColor(Re),Ne=V.getClearAlpha(),Ne<1&&V.setClearColor(16777215,.5),V.clear(),Nt&&dt.render(de);const xt=V.toneMapping;V.toneMapping=Vi;const vt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),st===!0&&tt.setGlobalState(V.clippingPlanes,ae),Kr(R,de,ae),ie.updateMultisampleRenderTarget(Ue),ie.updateRenderTargetMipmap(Ue),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Pt=0,Gt=Y.length;Pt<Gt;Pt++){const $t=Y[Pt],{object:Bt,geometry:on,material:Ge,group:vn}=$t;if(Ge.side===or&&Bt.layers.test(ae.layers)){const Mt=Ge.side;Ge.side=Kn,Ge.needsUpdate=!0,La(Bt,de,ae,on,Ge,vn),Ge.side=Mt,Ge.needsUpdate=!0,nt=!0}}nt===!0&&(ie.updateMultisampleRenderTarget(Ue),ie.updateRenderTargetMipmap(Ue))}V.setRenderTarget(Le,Qe,at),V.setClearColor(Re,Ne),vt!==void 0&&(ae.viewport=vt),V.toneMapping=xt}function Kr(R,Y,de){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,Ue=R.length;se<Ue;se++){const We=R[se],{object:Le,geometry:Qe,group:at}=We;let xt=We.material;xt.allowOverride===!0&&ae!==null&&(xt=ae),Le.layers.test(de.layers)&&La(Le,Y,de,Qe,xt,at)}}function La(R,Y,de,ae,se,Ue){R.onBeforeRender(V,Y,de,ae,se,Ue),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(V,Y,de,ae,R,Ue),se.transparent===!0&&se.side===or&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,V.renderBufferDirect(de,Y,ae,se,R,Ue),se.side=Wr,se.needsUpdate=!0,V.renderBufferDirect(de,Y,ae,se,R,Ue),se.side=or):V.renderBufferDirect(de,Y,ae,se,R,Ue),R.onAfterRender(V,Y,de,ae,se,Ue)}function Zr(R,Y,de){Y.isScene!==!0&&(Y=kt);const ae=te.get(R),se=P.state.lights,Ue=P.state.shadowsArray,We=se.state.version,Le=De.getParameters(R,se.state,Ue,Y,de,P.state.lightProbeGridArray),Qe=De.getProgramCacheKey(Le);let at=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const xt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=_e.get(R.envMap||ae.environment,xt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,at===void 0&&(R.addEventListener("dispose",si),at=new Map,ae.programs=at);let vt=at.get(Qe);if(vt!==void 0){if(ae.currentProgram===vt&&ae.lightsStateVersion===We)return jo(R,Le),vt}else Le.uniforms=De.getUniforms(R),J!==null&&R.isNodeMaterial&&J.build(R,de,Le),R.onBeforeCompile(Le,V),vt=De.acquireProgram(Le,Qe),at.set(Qe,vt),ae.uniforms=Le.uniforms;const nt=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=tt.uniform),jo(R,Le),ae.needsLights=Ia(R),ae.lightsStateVersion=We,ae.needsLights&&(nt.ambientLightColor.value=se.state.ambient,nt.lightProbe.value=se.state.probe,nt.directionalLights.value=se.state.directional,nt.directionalLightShadows.value=se.state.directionalShadow,nt.spotLights.value=se.state.spot,nt.spotLightShadows.value=se.state.spotShadow,nt.rectAreaLights.value=se.state.rectArea,nt.ltc_1.value=se.state.rectAreaLTC1,nt.ltc_2.value=se.state.rectAreaLTC2,nt.pointLights.value=se.state.point,nt.pointLightShadows.value=se.state.pointShadow,nt.hemisphereLights.value=se.state.hemi,nt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,nt.spotLightMatrix.value=se.state.spotLightMatrix,nt.spotLightMap.value=se.state.spotLightMap,nt.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.lightProbeGrid=P.state.lightProbeGridArray.length>0,ae.currentProgram=vt,ae.uniformsList=null,vt}function Da(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=Mc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function jo(R,Y){const de=te.get(R);de.outputColorSpace=Y.outputColorSpace,de.batching=Y.batching,de.batchingColor=Y.batchingColor,de.instancing=Y.instancing,de.instancingColor=Y.instancingColor,de.instancingMorph=Y.instancingMorph,de.skinning=Y.skinning,de.morphTargets=Y.morphTargets,de.morphNormals=Y.morphNormals,de.morphColors=Y.morphColors,de.morphTargetsCount=Y.morphTargetsCount,de.numClippingPlanes=Y.numClippingPlanes,de.numIntersection=Y.numClipIntersection,de.vertexAlphas=Y.vertexAlphas,de.vertexTangents=Y.vertexTangents,de.toneMapping=Y.toneMapping}function $c(R,Y){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;T.setFromMatrixPosition(Y.matrixWorld);for(let de=0,ae=R.length;de<ae;de++){const se=R[de];if(se.texture!==null&&se.boundingBox.containsPoint(T))return se}return null}function Kt(R,Y,de,ae,se){Y.isScene!==!0&&(Y=kt),ie.resetTextureUnits();const Ue=Y.fog,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,Le=$===null?V.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Rt.workingColorSpace,Qe=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,at=_e.get(ae.envMap||We,Qe),xt=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,vt=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),nt=!!de.morphAttributes.position,Pt=!!de.morphAttributes.normal,Gt=!!de.morphAttributes.color;let $t=Vi;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=V.toneMapping);const Bt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,on=Bt!==void 0?Bt.length:0,Ge=te.get(ae),vn=P.state.lights;if(st===!0&&(Ce===!0||R!==H)){const zt=R===H&&ae.id===le;tt.setState(ae,R,zt)}let Mt=!1;ae.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vn.state.version||Ge.outputColorSpace!==Le||se.isBatchedMesh&&Ge.batching===!1||!se.isBatchedMesh&&Ge.batching===!0||se.isBatchedMesh&&Ge.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Ge.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Ge.instancing===!1||!se.isInstancedMesh&&Ge.instancing===!0||se.isSkinnedMesh&&Ge.skinning===!1||!se.isSkinnedMesh&&Ge.skinning===!0||se.isInstancedMesh&&Ge.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ge.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ge.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ge.instancingMorph===!1&&se.morphTexture!==null||Ge.envMap!==at||ae.fog===!0&&Ge.fog!==Ue||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==tt.numPlanes||Ge.numIntersection!==tt.numIntersection)||Ge.vertexAlphas!==xt||Ge.vertexTangents!==vt||Ge.morphTargets!==nt||Ge.morphNormals!==Pt||Ge.morphColors!==Gt||Ge.toneMapping!==$t||Ge.morphTargetsCount!==on||!!Ge.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Ge.__version=ae.version);let zn=Ge.currentProgram;Mt===!0&&(zn=Zr(ae,Y,se),J&&ae.isNodeMaterial&&J.onUpdateProgram(ae,zn,Ge));let Vn=!1,wt=!1,qi=!1;const Ft=zn.getUniforms(),Wt=Ge.uniforms;if(E.useProgram(zn.program)&&(Vn=!0,wt=!0,qi=!0),ae.id!==le&&(le=ae.id,wt=!0),Ge.needsLights){const zt=$c(P.state.lightProbeGridArray,se);Ge.lightProbeGrid!==zt&&(Ge.lightProbeGrid=zt,wt=!0)}if(Vn||H!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(q,"projectionMatrix",R.projectionMatrix),Ft.setValue(q,"viewMatrix",R.matrixWorldInverse);const xi=Ft.map.cameraPosition;xi!==void 0&&xi.setValue(q,yt.setFromMatrixPosition(R.matrixWorld)),U.logarithmicDepthBuffer&&Ft.setValue(q,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ft.setValue(q,"isOrthographic",R.isOrthographicCamera===!0),H!==R&&(H=R,wt=!0,qi=!0)}if(Ge.needsLights&&(vn.state.directionalShadowMap.length>0&&Ft.setValue(q,"directionalShadowMap",vn.state.directionalShadowMap,ie),vn.state.spotShadowMap.length>0&&Ft.setValue(q,"spotShadowMap",vn.state.spotShadowMap,ie),vn.state.pointShadowMap.length>0&&Ft.setValue(q,"pointShadowMap",vn.state.pointShadowMap,ie)),se.isSkinnedMesh){Ft.setOptional(q,se,"bindMatrix"),Ft.setOptional(q,se,"bindMatrixInverse");const zt=se.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ft.setValue(q,"boneTexture",zt.boneTexture,ie))}se.isBatchedMesh&&(Ft.setOptional(q,se,"batchingTexture"),Ft.setValue(q,"batchingTexture",se._matricesTexture,ie),Ft.setOptional(q,se,"batchingIdTexture"),Ft.setValue(q,"batchingIdTexture",se._indirectTexture,ie),Ft.setOptional(q,se,"batchingColorTexture"),se._colorsTexture!==null&&Ft.setValue(q,"batchingColorTexture",se._colorsTexture,ie));const gi=de.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&j.update(se,de,zn),(wt||Ge.receiveShadow!==se.receiveShadow)&&(Ge.receiveShadow=se.receiveShadow,Ft.setValue(q,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(Wt.envMapIntensity.value=Y.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=VR()),wt){if(Ft.setValue(q,"toneMappingExposure",V.toneMappingExposure),Ge.needsLights&&Yc(Wt,qi),Ue&&ae.fog===!0&&qe.refreshFogUniforms(Wt,Ue),qe.refreshMaterialUniforms(Wt,ae,xe,ve,P.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const zt=Ge.lightProbeGrid;Wt.probesSH.value=zt.texture,Wt.probesMin.value.copy(zt.boundingBox.min),Wt.probesMax.value.copy(zt.boundingBox.max),Wt.probesResolution.value.copy(zt.resolution)}Mc.upload(q,Da(Ge),Wt,ie)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Mc.upload(q,Da(Ge),Wt,ie),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ft.setValue(q,"center",se.center),Ft.setValue(q,"modelViewMatrix",se.modelViewMatrix),Ft.setValue(q,"normalMatrix",se.normalMatrix),Ft.setValue(q,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const zt=ae.uniformsGroups;for(let xi=0,Pi=zt.length;xi<Pi;xi++){const Jr=zt[xi];Ee.update(Jr,zn),Ee.bind(Jr,zn)}}return zn}function Yc(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Ia(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(R,Y,de){const ae=te.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),te.get(R.texture).__webglTexture=Y,te.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const de=te.get(R);de.__webglFramebuffer=Y,de.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,de=0){$=R,pe=Y,ee=de;let ae=null,se=!1,Ue=!1;if(R){const Le=te.get(R);if(Le.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(q.FRAMEBUFFER,Le.__webglFramebuffer),D.copy(R.viewport),G.copy(R.scissor),be=R.scissorTest,E.viewport(D),E.scissor(G),E.setScissorTest(be),le=-1;return}else if(Le.__webglFramebuffer===void 0)ie.setupRenderTarget(R);else if(Le.__hasExternalTextures)ie.rebindTextures(R,te.get(R.texture).__webglTexture,te.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const xt=R.depthTexture;if(Le.__boundDepthTexture!==xt){if(xt!==null&&te.has(xt)&&(R.width!==xt.image.width||R.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ie.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ue=!0);const at=te.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(at[Y])?ae=at[Y][de]:ae=at[Y],se=!0):R.samples>0&&ie.useMultisampledRTT(R)===!1?ae=te.get(R).__webglMultisampledFramebuffer:Array.isArray(at)?ae=at[de]:ae=at,D.copy(R.viewport),G.copy(R.scissor),be=R.scissorTest}else D.copy(Ze).multiplyScalar(xe).floor(),G.copy(ht).multiplyScalar(xe).floor(),be=Se;if(de!==0&&(ae=ue),E.bindFramebuffer(q.FRAMEBUFFER,ae)&&E.drawBuffers(R,ae),E.viewport(D),E.scissor(G),E.setScissorTest(be),se){const Le=te.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Le.__webglTexture,de)}else if(Ue){const Le=Y;for(let Qe=0;Qe<R.textures.length;Qe++){const at=te.get(R.textures[Qe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Qe,at.__webglTexture,de,Le)}}else if(R!==null&&de!==0){const Le=te.get(R.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Le.__webglTexture,de)}le=-1},this.readRenderTargetPixels=function(R,Y,de,ae,se,Ue,We,Le=0){if(!(R&&R.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe){E.bindFramebuffer(q.FRAMEBUFFER,Qe);try{const at=R.textures[Le],xt=at.format,vt=at.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable(xt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(vt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-ae&&de>=0&&de<=R.height-se&&q.readPixels(Y,de,ae,se,ke.convert(xt),ke.convert(vt),Ue)}finally{const at=$!==null?te.get($).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(R,Y,de,ae,se,Ue,We,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=te.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&We!==void 0&&(Qe=Qe[We]),Qe)if(Y>=0&&Y<=R.width-ae&&de>=0&&de<=R.height-se){E.bindFramebuffer(q.FRAMEBUFFER,Qe);const at=R.textures[Le],xt=at.format,vt=at.type;if(R.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Le),!U.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,nt),q.bufferData(q.PIXEL_PACK_BUFFER,Ue.byteLength,q.STREAM_READ),q.readPixels(Y,de,ae,se,ke.convert(xt),ke.convert(vt),0);const Pt=$!==null?te.get($).__webglFramebuffer:null;E.bindFramebuffer(q.FRAMEBUFFER,Pt);const Gt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await ib(q,Gt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,nt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ue),q.deleteBuffer(nt),q.deleteSync(Gt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,de=0){const ae=Math.pow(2,-de),se=Math.floor(R.image.width*ae),Ue=Math.floor(R.image.height*ae),We=Y!==null?Y.x:0,Le=Y!==null?Y.y:0;ie.setTexture2D(R,0),q.copyTexSubImage2D(q.TEXTURE_2D,de,0,0,We,Le,se,Ue),E.unbindTexture()},this.copyTextureToTexture=function(R,Y,de=null,ae=null,se=0,Ue=0){let We,Le,Qe,at,xt,vt,nt,Pt,Gt;const $t=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(de!==null)We=de.max.x-de.min.x,Le=de.max.y-de.min.y,Qe=de.isBox3?de.max.z-de.min.z:1,at=de.min.x,xt=de.min.y,vt=de.isBox3?de.min.z:0;else{const Wt=Math.pow(2,-se);We=Math.floor($t.width*Wt),Le=Math.floor($t.height*Wt),R.isDataArrayTexture?Qe=$t.depth:R.isData3DTexture?Qe=Math.floor($t.depth*Wt):Qe=1,at=0,xt=0,vt=0}ae!==null?(nt=ae.x,Pt=ae.y,Gt=ae.z):(nt=0,Pt=0,Gt=0);const Bt=ke.convert(Y.format),on=ke.convert(Y.type);let Ge;Y.isData3DTexture?(ie.setTexture3D(Y,0),Ge=q.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ie.setTexture2DArray(Y,0),Ge=q.TEXTURE_2D_ARRAY):(ie.setTexture2D(Y,0),Ge=q.TEXTURE_2D),E.activeTexture(q.TEXTURE0),E.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Y.flipY),E.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),E.pixelStorei(q.UNPACK_ALIGNMENT,Y.unpackAlignment);const vn=E.getParameter(q.UNPACK_ROW_LENGTH),Mt=E.getParameter(q.UNPACK_IMAGE_HEIGHT),zn=E.getParameter(q.UNPACK_SKIP_PIXELS),Vn=E.getParameter(q.UNPACK_SKIP_ROWS),wt=E.getParameter(q.UNPACK_SKIP_IMAGES);E.pixelStorei(q.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(q.UNPACK_SKIP_PIXELS,at),E.pixelStorei(q.UNPACK_SKIP_ROWS,xt),E.pixelStorei(q.UNPACK_SKIP_IMAGES,vt);const qi=R.isDataArrayTexture||R.isData3DTexture,Ft=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const Wt=te.get(R),gi=te.get(Y),zt=te.get(Wt.__renderTarget),xi=te.get(gi.__renderTarget);E.bindFramebuffer(q.READ_FRAMEBUFFER,zt.__webglFramebuffer),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<Qe;Pi++)qi&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(R).__webglTexture,se,vt+Pi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,te.get(Y).__webglTexture,Ue,Gt+Pi)),q.blitFramebuffer(at,xt,We,Le,nt,Pt,We,Le,q.DEPTH_BUFFER_BIT,q.NEAREST);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||te.has(R)){const Wt=te.get(R),gi=te.get(Y);E.bindFramebuffer(q.READ_FRAMEBUFFER,me),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,K);for(let zt=0;zt<Qe;zt++)qi?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Wt.__webglTexture,se,vt+zt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Wt.__webglTexture,se),Ft?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,gi.__webglTexture,Ue,Gt+zt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,gi.__webglTexture,Ue),se!==0?q.blitFramebuffer(at,xt,We,Le,nt,Pt,We,Le,q.COLOR_BUFFER_BIT,q.NEAREST):Ft?q.copyTexSubImage3D(Ge,Ue,nt,Pt,Gt+zt,at,xt,We,Le):q.copyTexSubImage2D(Ge,Ue,nt,Pt,at,xt,We,Le);E.bindFramebuffer(q.READ_FRAMEBUFFER,null),E.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ft?R.isDataTexture||R.isData3DTexture?q.texSubImage3D(Ge,Ue,nt,Pt,Gt,We,Le,Qe,Bt,on,$t.data):Y.isCompressedArrayTexture?q.compressedTexSubImage3D(Ge,Ue,nt,Pt,Gt,We,Le,Qe,Bt,$t.data):q.texSubImage3D(Ge,Ue,nt,Pt,Gt,We,Le,Qe,Bt,on,$t):R.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ue,nt,Pt,We,Le,Bt,on,$t.data):R.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ue,nt,Pt,$t.width,$t.height,Bt,$t.data):q.texSubImage2D(q.TEXTURE_2D,Ue,nt,Pt,We,Le,Bt,on,$t);E.pixelStorei(q.UNPACK_ROW_LENGTH,vn),E.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(q.UNPACK_SKIP_PIXELS,zn),E.pixelStorei(q.UNPACK_SKIP_ROWS,Vn),E.pixelStorei(q.UNPACK_SKIP_IMAGES,wt),Ue===0&&Y.generateMipmaps&&q.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(R){te.get(R).__webglFramebuffer===void 0&&ie.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ie.setTextureCube(R,0):R.isData3DTexture?ie.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ie.setTexture2DArray(R,0):ie.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){pe=0,ee=0,$=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}const GR=()=>{const i=Eh(),{login:e,loginAsDemoRole:t,register:r,verifyOtp:a}=Oo(),[l,c]=he.useState("login"),[d,f]=he.useState(!1),[p,g]=he.useState(""),[_,x]=he.useState(""),[M,w]=he.useState(""),[C,S]=he.useState(!1),[y,N]=he.useState(""),[L,T]=he.useState(""),[I,P]=he.useState(!1),[F,b]=he.useState(["","","","","",""]),[O,V]=he.useState(""),[B,J]=he.useState(60),ue=he.useRef(null);he.useEffect(()=>{const H=ue.current;if(!H)return;let D=H.clientWidth,G=H.clientHeight;const be=new _b;be.background=new Et("#eef2f6");const Re=new ii(45,D/G,.1,1e3);Re.position.set(0,0,28);const Ne=new HR({antialias:!0,alpha:!0});Ne.setSize(D,G),Ne.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ne.shadowMap.enabled=!0,Ne.shadowMap.type=sv,Ne.toneMapping=Uh,H.appendChild(Ne.domElement);const Z=new Hb(16777215,1.3);be.add(Z);const ve=new Vb(16777215,2.5);ve.position.set(15,25,20),ve.castShadow=!0,ve.shadow.mapSize.width=2048,ve.shadow.mapSize.height=2048,be.add(ve);const xe=new Bb(16757683,3,50);xe.position.set(-10,-10,10),be.add(xe);const Be=new Ub({color:new Et("#ffb3b3"),roughness:.2,metalness:.05,clearcoat:.4,clearcoatRoughness:.1}),Ke=new Pv({color:new Et("#8a4427"),metalness:.9,roughness:.2}),Ze=42,ht=[],Se=new $h(1,32,32),rt=new Ra(.35,.35,.35);for(let te=0;te<Ze;te++){const ie=new wo,_e=.7+Math.random()*1.3,Me=new Ni(Se,Be);Me.scale.set(_e,_e,_e),Me.castShadow=!0,Me.receiveShadow=!0,ie.add(Me);const ce=new Ni(rt,Ke);ce.position.set(0,_e+.1,0),ce.castShadow=!0,ie.add(ce);const ge=new re((Math.random()-.5)*18,(Math.random()-.5)*14,(Math.random()-.5)*10);ie.position.copy(ge),be.add(ie),ht.push({mesh:ie,sphereMesh:Me,velocity:new re((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.02),radius:_e,initialPos:ge.clone(),isDragged:!1,prevPosition:ge.clone()})}const st=new Wb,Ce=new At(-999,-999),ut=new zr,yt=new re;let gt=null,kt=new re;const Nt=te=>{const ie=H.getBoundingClientRect();Ce.x=(te.clientX-ie.left)/D*2-1,Ce.y=-((te.clientY-ie.top)/G)*2+1,st.setFromCamera(Ce,Re);const _e=ht.map(Me=>Me.sphereMesh);return st.intersectObjects(_e,!1)},Dt=te=>{const ie=Nt(te);if(ie.length>0){const _e=ie[0].object,Me=ht.find(ce=>ce.sphereMesh===_e);Me&&(gt=Me,Me.isDragged=!0,Me.velocity.set(0,0,0),ut.setFromNormalAndCoplanarPoint(Re.getWorldDirection(new re).negate(),Me.mesh.position),st.ray.intersectPlane(ut,yt)&&kt.copy(Me.mesh.position).sub(yt),H.style.cursor="grabbing")}else{st.setFromCamera(Ce,Re);const _e=st.ray.origin.clone().add(st.ray.direction.clone().multiplyScalar(20));ht.forEach(Me=>{const ce=Me.mesh.position.clone().sub(_e),ge=ce.length();if(ge<15){const De=(15-ge)*.05;Me.velocity.add(ce.normalize().multiplyScalar(De))}})}},q=te=>{const ie=H.getBoundingClientRect();if(Ce.x=(te.clientX-ie.left)/D*2-1,Ce.y=-((te.clientY-ie.top)/G)*2+1,st.setFromCamera(Ce,Re),gt){if(ut.setFromNormalAndCoplanarPoint(Re.getWorldDirection(new re).negate(),gt.mesh.position),st.ray.intersectPlane(ut,yt)){const _e=yt.clone().add(kt);gt.velocity.copy(_e).sub(gt.mesh.position).multiplyScalar(.3),gt.mesh.position.copy(_e)}}else Nt(te).length>0?H.style.cursor="grab":H.style.cursor="default"},an=()=>{gt&&(gt.isDragged=!1,H.style.cursor="grab",gt=null)};H.addEventListener("mousedown",Dt),window.addEventListener("mousemove",q),window.addEventListener("mouseup",an);const Ct=()=>{H&&(D=H.clientWidth,G=H.clientHeight,Re.aspect=D/G,Re.updateProjectionMatrix(),Ne.setSize(D,G))};window.addEventListener("resize",Ct);let U,E=new Xb;const Q=()=>{U=requestAnimationFrame(Q);const te=E.getElapsedTime();for(let ie=0;ie<ht.length;ie++)for(let _e=ie+1;_e<ht.length;_e++){const Me=ht[ie],ce=ht[_e],ge=Me.mesh.position.distanceTo(ce.mesh.position),De=Me.radius+ce.radius;if(ge<De&&ge>0){const qe=De-ge,Ie=Me.mesh.position.clone().sub(ce.mesh.position).normalize();Me.isDragged||Me.mesh.position.add(Ie.clone().multiplyScalar(qe*.5)),ce.isDragged||ce.mesh.position.sub(Ie.clone().multiplyScalar(qe*.5));const tt=Me.velocity.clone().sub(ce.velocity).dot(Ie);if(tt<0){const ot=Ie.multiplyScalar(-1.5*tt);Me.isDragged||Me.velocity.add(ot),ce.isDragged||ce.velocity.sub(ot)}}}for(let ie=0;ie<ht.length;ie++){const _e=ht[ie],Me=_e.mesh.position;if(!_e.isDragged&&(Me.x+=Math.sin(te*.8+ie)*.005,Me.y+=Math.cos(te*.9+ie*2)*.005,Me.add(_e.velocity),_e.velocity.multiplyScalar(.96),Me.distanceTo(_e.initialPos)>12)){const ge=Me.clone().sub(_e.initialPos).multiplyScalar(-.008);_e.velocity.add(ge)}_e.mesh.rotation.x+=.003,_e.mesh.rotation.y+=.005}Ne.render(be,Re)};return Q(),()=>{H.removeEventListener("mousedown",Dt),window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",an),window.removeEventListener("resize",Ct),cancelAnimationFrame(U),H&&Ne.domElement&&H.removeChild(Ne.domElement),Ne.dispose()}},[]),he.useEffect(()=>{let H=null;return I&&B>0&&(H=setInterval(()=>J(D=>D-1),1e3)),()=>clearInterval(H)},[I,B]);const me=async H=>{var D,G,be;H.preventDefault(),N(""),T(""),S(!0);try{await e(p,_),i("/pos")}catch(Re){const Ne=((G=(D=Re.response)==null?void 0:D.data)==null?void 0:G.message)||((be=Re.response)==null?void 0:be.data);N(Ne||"Đăng nhập không thành công. Bạn có thể bấm Đăng nhập Demo bên dưới!")}finally{S(!1)}},K=async H=>{var D,G,be;H.preventDefault(),N(""),T(""),S(!0);try{const Re=await r(p,_,M);V(M),J(60),P(!0),T(Re.message||"Mã OTP đã được gửi! Vui lòng nhập OTP để xác thực.")}catch(Re){const Ne=((G=(D=Re.response)==null?void 0:D.data)==null?void 0:G.message)||((be=Re.response)==null?void 0:be.data);N(Ne||"Đăng ký thất bại. Tên đăng nhập hoặc Số điện thoại có thể đã tồn tại.")}finally{S(!1)}},pe=(H,D)=>{if(!/^\d*$/.test(D))return;const G=[...F];if(G[H]=D.slice(-1),b(G),D&&H<5){const be=document.getElementById(`otp-input-${H+1}`);be==null||be.focus()}},ee=(H,D)=>{if(D.key==="Backspace"&&!F[H]&&H>0){const G=document.getElementById(`otp-input-${H-1}`);G==null||G.focus()}},$=async H=>{var G,be,Re;H.preventDefault();const D=F.join("");if(D.length<6){N("Vui lòng nhập đủ 6 chữ số OTP.");return}N(""),S(!0);try{const Ne=await a(O,D);P(!1),T(Ne.message||"Xác thực OTP thành công! Bạn có thể đăng nhập ngay."),c("login")}catch(Ne){const Z=((be=(G=Ne.response)==null?void 0:G.data)==null?void 0:be.message)||((Re=Ne.response)==null?void 0:Re.data);N(Z||"Mã OTP không hợp lệ hoặc đã hết hạn.")}finally{S(!1)}},le=H=>{t(H),i(H==="Kitchen"?"/kitchen":H==="Admin"?"/dashboard":H==="Warehouse"?"/inventory":"/pos")};return m.jsxs("div",{className:"relative min-h-screen bg-[#eef2f6] text-gray-900 font-sans overflow-hidden flex flex-col justify-between select-none",children:[m.jsx("div",{ref:ue,className:"absolute inset-0 z-0 w-full h-full pointer-events-auto"}),m.jsxs("header",{className:"relative z-20 flex items-center justify-between px-8 py-6 pointer-events-none",children:[m.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[m.jsx("span",{className:"text-2xl font-black tracking-tighter text-black uppercase font-mono",children:"POIMANDRES"}),m.jsx("span",{className:"text-[10px] font-bold tracking-widest text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full uppercase border border-pink-200",children:"Interactive 3D Physics"})]}),m.jsxs("div",{className:"flex items-center space-x-6 text-xs font-bold text-gray-700 pointer-events-auto",children:[m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Docs"}),m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Blog"}),m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Tags"}),m.jsxs("div",{className:"flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-300 shadow-md",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),m.jsx("span",{className:"text-[11px] font-extrabold text-gray-900 uppercase tracking-wider",children:"BẤM & KÉO QUẢ CẦU 3D 🟢"})]})]})]}),m.jsxs("main",{className:"relative z-20 flex-1 flex items-center justify-between px-6 sm:px-12 pointer-events-none",children:[m.jsxs("div",{className:"hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-500 uppercase",children:"Stones, Metals and Gems"}),m.jsx("div",{className:"text-xs font-black text-gray-900 mt-0.5",children:"A Universal Deity"}),m.jsx("div",{className:"w-6 h-0.5 bg-black mt-2"})]}),m.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"X"}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-extrabold text-gray-900",children:"Wonders of Antiquity"}),m.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Pythagorean Mathematics"})]})]}),m.jsxs("div",{className:"w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl p-7 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-auto my-auto ml-auto",children:[m.jsxs("div",{className:"flex p-1 bg-gray-100/90 rounded-2xl border border-gray-200/80 mb-5",children:[m.jsx("button",{type:"button",onClick:()=>{c("login"),N(""),T("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${l==="login"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG NHẬP"}),m.jsx("button",{type:"button",onClick:()=>{c("register"),N(""),T("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${l==="register"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG KÝ"})]}),y&&m.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 font-medium",children:[m.jsx(yE,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-rose-600"}),m.jsx("span",{children:y})]}),L&&m.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 font-medium",children:[m.jsx(Fo,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-emerald-600"}),m.jsx("span",{children:L})]}),l==="login"?m.jsxs("form",{onSubmit:me,className:"space-y-3.5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập / SĐT"}),m.jsxs("div",{className:"relative",children:[m.jsx(og,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",required:!0,value:p,onChange:H=>g(H.target.value),placeholder:"admin hoặc 0909123456",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu"}),m.jsxs("div",{className:"relative",children:[m.jsx(sg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:d?"text":"password",required:!0,value:_,onChange:H=>x(H.target.value),placeholder:"Mật khẩu truy cập",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),m.jsx("button",{type:"button",onClick:()=>f(!d),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:d?m.jsx(ig,{className:"w-4 h-4"}):m.jsx(rg,{className:"w-4 h-4"})})]})]}),m.jsxs("button",{type:"submit",disabled:C,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:[C?"ĐANG KẾT NỐI...":"ĐĂNG NHẬP NGAY",m.jsx(eE,{className:"w-4 h-4 ml-1.5"})]})]}):m.jsxs("form",{onSubmit:K,className:"space-y-3.5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập Mới"}),m.jsxs("div",{className:"relative",children:[m.jsx(og,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",required:!0,value:p,onChange:H=>g(H.target.value),placeholder:"Username mới",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại (OTP)"}),m.jsxs("div",{className:"relative",children:[m.jsx(iw,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"tel",required:!0,value:M,onChange:H=>w(H.target.value),placeholder:"0909123456",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu"}),m.jsxs("div",{className:"relative",children:[m.jsx(sg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:d?"text":"password",required:!0,value:_,onChange:H=>x(H.target.value),placeholder:"Mật khẩu",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),m.jsx("button",{type:"button",onClick:()=>f(!d),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:d?m.jsx(ig,{className:"w-4 h-4"}):m.jsx(rg,{className:"w-4 h-4"})})]})]}),m.jsx("button",{type:"submit",disabled:C,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:C?"ĐANG KHỞI TẠO...":"TẠO TÀI KHOẢN & KHỞI TẠO OTP"})]}),m.jsxs("div",{className:"mt-5 pt-4 border-t border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[m.jsx("span",{children:"Đăng Nhập Xem Demo Nhanh:"}),m.jsx(rv,{className:"w-3.5 h-3.5 text-pink-500"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>le("Admin"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"👑 Admin"}),m.jsx("button",{type:"button",onClick:()=>le("Cashier"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"💵 Thu Ngân (POS)"}),m.jsx("button",{type:"button",onClick:()=>le("Kitchen"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"🍳 Bếp (KDS)"}),m.jsx("button",{type:"button",onClick:()=>le("Warehouse"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"📦 Kho Hàng"})]})]})]}),m.jsxs("div",{className:"hidden xl:flex flex-col justify-between h-[420px] pointer-events-auto text-right",children:[m.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-400 uppercase",children:"THE SUMMIT OF THE MANY"}),m.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"_01"}),m.jsxs("div",{className:"text-[11px] font-extrabold text-gray-400 space-x-2",children:[m.jsx("span",{className:"hover:text-black cursor-pointer",children:"pmnd.rs"}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"hover:text-black cursor-pointer",children:"git"}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"hover:text-black cursor-pointer",children:"csb"})]})]})]}),m.jsxs("footer",{className:"relative z-20 flex items-center justify-between px-8 py-4 text-[11px] font-bold text-gray-500 border-t border-gray-200/50 pointer-events-none",children:[m.jsx("div",{className:"pointer-events-auto",children:"THE SUMMIT OF THE MANY"}),m.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[m.jsx(iv,{className:"w-4 h-4 text-emerald-600"}),m.jsx("span",{children:"F&B POS & Inventory System © 2026"})]})]}),I&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:m.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center relative border border-gray-100",children:[m.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-pink-50 text-pink-600 rounded-2xl",children:m.jsx(NE,{className:"w-6 h-6"})}),m.jsx("h3",{className:"text-base font-black text-gray-900",children:"XÁC THỰC MÃ OTP SĐT"}),m.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:["Nhập mã OTP 6 chữ số gửi tới ",m.jsx("strong",{children:O})]}),m.jsxs("form",{onSubmit:$,className:"mt-5 space-y-4",children:[m.jsx("div",{className:"flex justify-between items-center gap-1.5",children:F.map((H,D)=>m.jsx("input",{id:`otp-input-${D}`,type:"text",maxLength:1,value:H,onChange:G=>pe(D,G.target.value),onKeyDown:G=>ee(D,G),className:"w-10 h-12 text-center text-lg font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},D))}),m.jsxs("div",{className:"flex space-x-2 pt-2",children:[m.jsx("button",{type:"button",onClick:()=>P(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"HỦY"}),m.jsx("button",{type:"submit",disabled:C,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-xl shadow-md",children:C?"...":"XÁC THỰC"})]})]})]})})]})},jR=[{id:"area-1",name:"Tầng 1 - Sảnh chính",description:"Khu vực máy lạnh sảnh trệt",tablesCount:8},{id:"area-2",name:"Tầng 2 - Lầu 1",description:"Không gian ấm cúng, sofa",tablesCount:6},{id:"area-3",name:"Sân Thượng / Ngoại trời",description:"Thoáng mát ngoài trời",tablesCount:5},{id:"area-4",name:"Phòng VIP",description:"Phòng riêng tổ chức tiệc",tablesCount:2}],WR=[{id:"t-101",code:"T101",name:"Bàn 101",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1001",totalAmount:285e3,occupiedAt:"2026-08-20T11:30:00"},{id:"t-102",code:"T102",name:"Bàn 102",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-103",code:"T103",name:"Bàn 103",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1002",totalAmount:41e4,occupiedAt:"2026-08-20T12:05:00"},{id:"t-104",code:"T104",name:"Bàn 104",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:6,status:"Reserved"},{id:"t-105",code:"T105",name:"Bàn 105",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Cleaning"},{id:"t-106",code:"T106",name:"Bàn 106",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-107",code:"T107",name:"Bàn 107",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:8,status:"Available"},{id:"t-108",code:"T108",name:"Bàn 108",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Available"},{id:"t-201",code:"T201",name:"Bàn 201",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Occupied",currentOrderId:"ORD-1003",totalAmount:175e3,occupiedAt:"2026-08-20T12:15:00"},{id:"t-202",code:"T202",name:"Bàn 202",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:2,status:"Available"},{id:"t-203",code:"T203",name:"Bàn 203",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Available"},{id:"t-204",code:"T204",name:"Bàn 204",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:6,status:"Available"},{id:"t-301",code:"ST01",name:"Sân Thượng 1",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Available"},{id:"t-302",code:"ST02",name:"Sân Thượng 2",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Occupied",currentOrderId:"ORD-1004",totalAmount:52e4,occupiedAt:"2026-08-20T11:45:00"},{id:"t-vip1",code:"VIP1",name:"Phòng VIP 1",areaId:"area-4",areaName:"Phòng VIP",capacity:12,status:"Reserved"},{id:"t-vip2",code:"VIP2",name:"Phòng VIP 2",areaId:"area-4",areaName:"Phòng VIP",capacity:16,status:"Available"}],XR=[{id:"cat-all",name:"Tất cả món",icon:"Utensils",itemCount:12},{id:"cat-coffee",name:"Cà phê",icon:"Coffee",itemCount:4},{id:"cat-milktea",name:"Trà sữa & Trà",icon:"CupSoda",itemCount:3},{id:"cat-food",name:"Món ăn điểm tâm",icon:"Pizza",itemCount:3},{id:"cat-dessert",name:"Bánh ngọt",icon:"Cake",itemCount:2}],qR=[{id:"prod-1",code:"CF01",name:"Cà Phê Sữa Đá Sài Gòn",categoryId:"cat-coffee",categoryName:"Cà phê",price:35e3,costPrice:8e3,imageUrl:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",isAvailable:!0,description:"Cà phê đậm đà kết hợp với sữa đặc béo ngậy truyền thống",options:[{id:"opt-ice",name:"Mức Đá",isRequired:!0,values:[{id:"ice-100",name:"100% Đá",extraPrice:0},{id:"ice-50",name:"50% Đá",extraPrice:0},{id:"ice-no",name:"Không Đá",extraPrice:0}]}]},{id:"prod-2",code:"CF02",name:"Bạc Xỉu Măng Đen",categoryId:"cat-coffee",categoryName:"Cà phê",price:42e3,costPrice:1e4,imageUrl:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-3",code:"CF03",name:"Espresso Double Shot",categoryId:"cat-coffee",categoryName:"Cà phê",price:38e3,imageUrl:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-4",code:"CF04",name:"Caramel Macchiato Đá",categoryId:"cat-coffee",categoryName:"Cà phê",price:55e3,imageUrl:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-5",code:"TM01",name:"Trà Sữa Trân Châu Hoàng Gia",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:49e3,imageUrl:"https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80",isAvailable:!0,options:[{id:"opt-topping",name:"Topping Thêm",isRequired:!1,values:[{id:"top-1",name:"Trân châu đen",extraPrice:1e4},{id:"top-2",name:"Pudding trứng",extraPrice:12e3}]}]},{id:"prod-6",code:"TM02",name:"Trà Đào Cam Sả",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:45e3,imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-7",code:"TM03",name:"Trà Vải Lài Kem Phô Mai",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:52e3,imageUrl:"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-8",code:"FD01",name:"Bánh Mì Chảo Bít Tết Đặc Biệt",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:68e3,imageUrl:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-9",code:"FD02",name:"Mì Ý Sốt Bò Băm Bolognese",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:79e3,imageUrl:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-10",code:"FD03",name:"Croissant Bơ Tỏi Nướng",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:45e3,imageUrl:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-11",code:"DS01",name:"Bánh Tiramisu Ý Ca Cao",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:48e3,imageUrl:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-12",code:"DS02",name:"Bánh Cheese Cake Chanh Dây",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:52e3,imageUrl:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",isAvailable:!0}],$R=[{id:"kt-1",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Cà Phê Sữa Đá Sài Gòn",quantity:2,note:"100% Đá, ít ngọt",status:"Pending",createdAt:"2026-08-20T12:20:00",elapsedMinutes:12},{id:"kt-2",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Bánh Mì Chảo Bít Tết Đặc Biệt",quantity:1,note:"Trứng ốp lọt",status:"Cooking",createdAt:"2026-08-20T12:21:00",elapsedMinutes:11},{id:"kt-3",orderId:"ORD-1003",orderCode:"ORD-1003",tableName:"Bàn 201",areaName:"Tầng 2",productName:"Trà Sữa Trân Châu Hoàng Gia",quantity:3,optionsText:"Topping Trân châu đen (+10k)",status:"Pending",createdAt:"2026-08-20T12:25:00",elapsedMinutes:7},{id:"kt-4",orderId:"ORD-1004",orderCode:"ORD-1004",tableName:"Sân Thượng 2",areaName:"Sân Thượng",productName:"Mì Ý Sốt Bò Băm Bolognese",quantity:2,status:"Ready",createdAt:"2026-08-20T12:10:00",elapsedMinutes:22}],YR=[{id:"inv-1",code:"RM001",name:"Hạt Cà Phê Robusta Buôn Ma Thuột",unit:"kg",minStock:10,currentStock:24.5,unitPrice:18e4,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-19T16:00:00"},{id:"inv-2",code:"RM002",name:"Sữa Đặc Ngôi Sao Phương Nam",unit:"Hộp",minStock:20,currentStock:8,unitPrice:22e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T08:00:00"},{id:"inv-3",code:"RM003",name:"Sữa Tươi Thanh Trùng Vinamilk 1L",unit:"Hộp",minStock:15,currentStock:42,unitPrice:34e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T09:30:00"},{id:"inv-4",code:"RM004",name:"Trân Châu Đen Đài Loan",unit:"kg",minStock:5,currentStock:3.2,unitPrice:65e3,category:"Topping & Thạch",lastUpdated:"2026-08-18T10:00:00"},{id:"inv-5",code:"RM005",name:"Thịt Bò Mỹ Xắt Lát (Bít tết)",unit:"kg",minStock:8,currentStock:12,unitPrice:28e4,category:"Thực phẩm tươi sống",lastUpdated:"2026-08-20T07:00:00"}],KR={todayRevenue:1485e4,revenueGrowthPercent:18.5,todayOrders:142,ordersGrowthPercent:12.3,averageOrderValue:104577,activeTablesCount:4,totalTablesCount:25,topSellingProducts:[{name:"Cà Phê Sữa Đá Sài Gòn",quantity:68,revenue:238e4},{name:"Trà Sữa Trân Châu Hoàng Gia",quantity:54,revenue:2646e3},{name:"Bạc Xỉu Măng Đen",quantity:42,revenue:1764e3},{name:"Bánh Mì Chảo Bít Tết",quantity:28,revenue:1904e3},{name:"Trà Đào Cam Sả",quantity:25,revenue:1125e3}],revenueChartData:[{time:"07:00",amount:85e4},{time:"09:00",amount:24e5},{time:"11:00",amount:48e5},{time:"13:00",amount:32e5},{time:"15:00",amount:19e5},{time:"17:00",amount:17e5}]},ZR=[{id:"cust-1",fullName:"Nguyễn Văn Minh",phoneNumber:"0909123456",email:"minh.nguyen@example.com",points:1450,tier:"Gold",totalSpent:145e5,lastVisit:"2026-08-19"},{id:"cust-2",fullName:"Trần Thị Thu Thảo",phoneNumber:"0988777666",email:"thao.tran@example.com",points:820,tier:"Silver",totalSpent:82e5,lastVisit:"2026-08-20"},{id:"cust-3",fullName:"Lê Hoàng Nam",phoneNumber:"0912345678",points:3100,tier:"Diamond",totalSpent:31e6,lastVisit:"2026-08-18"}],JR=[{id:"v-1",code:"CHAOHE2026",discountType:"Percentage",discountValue:15,minOrderValue:1e5,maxDiscount:5e4,validUntil:"2026-09-30",usageLimit:500,usedCount:142,isActive:!0},{id:"v-2",code:"KHAICHUONG30K",discountType:"FixedAmount",discountValue:3e4,minOrderValue:15e4,validUntil:"2026-12-31",usageLimit:1e3,usedCount:450,isActive:!0}],QR=[{id:"att-1",employeeName:"Nguyễn Văn Thu ngân",role:"Cashier",checkInTime:"06:45:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-2",employeeName:"Trần Văn Bếp",role:"Kitchen",checkInTime:"06:55:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-3",employeeName:"Lê Kho Hàng",role:"Warehouse",checkInTime:"08:00:00",shiftName:"Hành chính (08:00 - 17:00)",status:"Working"}],kn=i=>i==null?"0 ₫":new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",maximumFractionDigits:0}).format(i),eN=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})},Hv=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})},tN=()=>{var ht;const{selectedTable:i,setSelectedTable:e,orderType:t,setOrderType:r,cartItems:a,addToCart:l,updateQuantity:c,clearCart:d,discountAmount:f,setDiscountAmount:p,discountType:g,setDiscountType:_,subTotal:x,calculatedDiscount:M,finalTotal:w}=YM(),[C,S]=he.useState("floor"),[y,N]=he.useState("all"),[L,T]=he.useState("cat-all"),[I,P]=he.useState(""),[F,b]=he.useState(null),[O,V]=he.useState([]),[B,J]=he.useState(""),[ue,me]=he.useState(!1),[K,pe]=he.useState("Cash"),[ee,$]=he.useState(0),[le,H]=he.useState(!1),[D,G]=he.useState(""),[be,Re]=he.useState(WR),Ne=be.filter(Se=>y==="all"?!0:Se.areaId===y),Z=qR.filter(Se=>{const rt=L==="cat-all"?!0:Se.categoryId===L,st=Se.name.toLowerCase().includes(I.toLowerCase())||Se.code.toLowerCase().includes(I.toLowerCase());return rt&&st}),ve=Se=>{e(Se),r("DineIn"),S("order")},xe=Se=>{b(Se),V([]),J("")},Be=()=>{F&&(l(F,O,B),b(null))},Ke=()=>{a.length!==0&&(i&&Re(Se=>Se.map(rt=>rt.id===i.id?{...rt,status:"Occupied",totalAmount:w,occupiedAt:new Date().toISOString()}:rt)),G("Đã gửi đơn hàng xuống Màn hình Bếp (KDS) thành công!"),H(!0),setTimeout(()=>H(!1),3e3))},Ze=()=>{i&&Re(Se=>Se.map(rt=>rt.id===i.id?{...rt,status:"Cleaning",totalAmount:void 0,occupiedAt:void 0}:rt)),me(!1),d(),e(null),S("floor"),G("Thanh toán thành công & In hóa đơn hoàn tất!"),H(!0),setTimeout(()=>H(!1),3500)};return m.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)]",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl",children:[m.jsxs("button",{onClick:()=>S("floor"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="floor"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[m.jsx(LE,{className:"w-4 h-4"}),m.jsx("span",{children:"Sơ Đồ Bàn"})]}),m.jsxs("button",{onClick:()=>S("order"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="order"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[m.jsx(lg,{className:"w-4 h-4"}),m.jsx("span",{children:"Thực Đơn & Order"}),a.length>0&&m.jsx("span",{className:"flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-emerald-600 rounded-full",children:a.length})]})]}),i?m.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),m.jsxs("span",{children:["Đang chọn: ",m.jsx("strong",{children:i.name})," (",i.areaName,")"]}),m.jsx("button",{onClick:()=>{e(null),S("floor")},className:"ml-2 text-gray-400 hover:text-rose-600",children:m.jsx(pa,{className:"w-3.5 h-3.5"})})]}):m.jsxs("div",{className:"text-xs text-gray-500 font-medium hidden sm:block",children:["Vui lòng chọn bàn để tạo order hoặc chọn ",m.jsx("strong",{children:"Mang về"})]}),m.jsxs("div",{className:"flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold",children:[m.jsx("button",{onClick:()=>r("DineIn"),className:`px-3 py-1 rounded-lg transition-colors ${t==="DineIn"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Tại Bàn"}),m.jsx("button",{onClick:()=>{r("Takeaway"),e(null),S("order")},className:`px-3 py-1 rounded-lg transition-colors ${t==="Takeaway"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Mang Về"})]})]}),C==="floor"?m.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden",children:[m.jsxs("div",{className:"flex items-center space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:[m.jsxs("button",{onClick:()=>N("all"),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${y==="all"?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Tất cả khu vực (",be.length,")"]}),jR.map(Se=>m.jsxs("button",{onClick:()=>N(Se.id),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${y===Se.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[Se.name," (",Se.tablesCount,")"]},Se.id))]}),m.jsxs("div",{className:"flex items-center space-x-4 my-3 text-xs font-medium text-gray-600",children:[m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500"}),m.jsx("span",{children:"Bàn trống"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500"}),m.jsx("span",{children:"Đang có khách"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500"}),m.jsx("span",{children:"Đã đặt trước"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400"}),m.jsx("span",{children:"Cần dọn"})]})]}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 p-1",children:Ne.map(Se=>{const rt=Se.status==="Occupied",st=Se.status==="Reserved",Ce=Se.status==="Cleaning";let ut="bg-emerald-50 border-emerald-200 hover:border-emerald-500 text-emerald-900",yt="bg-emerald-500 text-white",gt="Sẵn sàng";return rt?(ut="bg-rose-50 border-rose-200 hover:border-rose-500 text-rose-900",yt="bg-rose-500 text-white",gt="Có khách"):st?(ut="bg-amber-50 border-amber-200 hover:border-amber-500 text-amber-900",yt="bg-amber-500 text-white",gt="Đã đặt"):Ce&&(ut="bg-blue-50 border-blue-200 hover:border-blue-500 text-blue-900",yt="bg-blue-500 text-white",gt="Cần dọn"),m.jsxs("div",{onClick:()=>ve(Se),className:`flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 hover:shadow-lg ${ut}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"font-extrabold text-sm tracking-tight",children:Se.name}),m.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${yt}`,children:gt})]}),m.jsx("div",{className:"flex items-center space-x-2 text-[11px] opacity-75 mt-1",children:m.jsxs("span",{className:"flex items-center",children:[m.jsx(Hc,{className:"w-3 h-3 mr-1"})," ",Se.capacity," chỗ"]})})]}),m.jsx("div",{className:"mt-3 pt-2 border-t border-black/5",children:rt?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"text-[11px] font-medium opacity-80",children:"Tổng đơn:"}),m.jsx("div",{className:"font-extrabold text-sm text-rose-700",children:kn(Se.totalAmount)}),Se.occupiedAt&&m.jsxs("div",{className:"flex items-center text-[10px] opacity-70 mt-0.5",children:[m.jsx(Vc,{className:"w-3 h-3 mr-1"}),m.jsx("span",{children:Hv(Se.occupiedAt)})]})]}):m.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold opacity-90",children:[m.jsx("span",{children:"Đặt món"}),m.jsx(vE,{className:"w-4 h-4"})]})})]},Se.id)})})]}):m.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden",children:[m.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm",children:[m.jsxs("div",{className:"relative mb-3",children:[m.jsx(Dh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:I,onChange:Se=>P(Se.target.value),placeholder:"Tìm tên món ăn, đồ uống...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"})]}),m.jsx("div",{className:"flex space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:XR.map(Se=>m.jsx("button",{onClick:()=>T(Se.id),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${L===Se.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:Se.name},Se.id))}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 p-1 mt-3",children:Z.map(Se=>m.jsxs("div",{onClick:()=>Se.options&&Se.options.length>0?xe(Se):l(Se),className:"group flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-2.5 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-150",children:[m.jsxs("div",{className:"relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-2",children:[m.jsx("img",{src:Se.imageUrl,alt:Se.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"}),m.jsx("span",{className:"absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold bg-black/60 text-white rounded",children:Se.code})]}),m.jsxs("div",{children:[m.jsx("h4",{className:"text-xs font-bold text-gray-900 line-clamp-2 leading-tight",children:Se.name}),m.jsxs("div",{className:"flex items-center justify-between mt-2",children:[m.jsx("span",{className:"text-xs font-extrabold text-emerald-700",children:kn(Se.price)}),m.jsx("button",{className:"p-1 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors",children:m.jsx(Cc,{className:"w-3.5 h-3.5"})})]})]})]},Se.id))})]}),m.jsxs("div",{className:"w-full md:w-80 lg:w-96 flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-md min-h-0",children:[m.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx(ag,{className:"w-5 h-5 text-emerald-600"}),m.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Chi Tiết Đơn Hàng"})]})}),m.jsx("div",{className:"flex-1 overflow-y-auto py-3 space-y-2.5 divide-y divide-gray-50",children:a.length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center h-48 text-center text-gray-400",children:[m.jsx(lg,{className:"w-10 h-10 mb-2 opacity-30"}),m.jsx("p",{className:"text-xs font-medium",children:"Chưa có món ăn nào trong giỏ"})]}):a.map(Se=>m.jsx("div",{className:"pt-2 first:pt-0",children:m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{className:"flex-1 pr-2",children:[m.jsx("div",{className:"text-xs font-bold text-gray-900",children:Se.product.name}),Se.selectedOptions.length>0&&m.jsx("div",{className:"text-[10px] text-gray-500 font-medium",children:Se.selectedOptions.map(rt=>rt.valueName).join(", ")}),m.jsx("div",{className:"text-xs font-semibold text-emerald-700 mt-0.5",children:kn(Se.unitPrice)})]}),m.jsxs("div",{className:"flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg",children:[m.jsx("button",{onClick:()=>c(Se.cartItemId,-1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:m.jsx(zE,{className:"w-3 h-3"})}),m.jsx("span",{className:"w-5 text-center text-xs font-bold",children:Se.quantity}),m.jsx("button",{onClick:()=>c(Se.cartItemId,1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:m.jsx(Cc,{className:"w-3 h-3"})})]}),m.jsx("div",{className:"w-16 text-right font-bold text-xs text-gray-900 ml-2",children:kn(Se.totalPrice)})]})},Se.cartItemId))}),a.length>0&&m.jsxs("div",{className:"pt-3 border-t border-gray-100 space-y-2",children:[m.jsxs("div",{className:"flex justify-between text-sm font-extrabold text-gray-900 pt-1 border-t border-gray-100",children:[m.jsx("span",{children:"Khách cần trả:"}),m.jsx("span",{className:"text-emerald-700 text-base",children:kn(w)})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[m.jsxs("button",{onClick:Ke,className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors",children:[m.jsx(JE,{className:"w-4 h-4"}),m.jsx("span",{children:"Gửi Bếp"})]}),m.jsxs("button",{onClick:()=>me(!0),className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-colors",children:[m.jsx(ag,{className:"w-4 h-4"}),m.jsx("span",{children:"Thanh Toán"})]})]})]})]})]}),F&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-gray-100",children:[m.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-gray-100",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-bold text-base text-gray-900",children:F.name}),m.jsx("p",{className:"text-xs text-emerald-700 font-extrabold",children:kn(F.price)})]}),m.jsx("button",{onClick:()=>b(null),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsx("div",{className:"py-4 space-y-4 max-h-80 overflow-y-auto",children:(ht=F.options)==null?void 0:ht.map(Se=>m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:Se.name}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:Se.values.map(rt=>{const st=O.some(Ce=>Ce.optionId===Se.id&&Ce.valueId===rt.id);return m.jsx("button",{type:"button",onClick:()=>{V(Ce=>[...Ce.filter(yt=>yt.optionId!==Se.id),{optionId:Se.id,optionName:Se.name,valueId:rt.id,valueName:rt.name,extraPrice:rt.extraPrice}])},className:`p-2 rounded-xl text-xs font-medium border text-left transition-all ${st?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}`,children:m.jsx("div",{children:rt.name})},rt.id)})})]},Se.id))}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{onClick:()=>b(null),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Hủy"}),m.jsx("button",{onClick:Be,className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30",children:"Thêm Vào Giỏ"})]})]})}),ue&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gray-100",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thanh Toán Hóa Đơn"}),m.jsx("p",{className:"text-xs text-gray-500",children:i?`Bàn: ${i.name}`:"Đơn mang về"})]}),m.jsx("button",{onClick:()=>me(!1),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"py-4 space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:"Phương Thức Thanh Toán"}),m.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[m.jsxs("button",{onClick:()=>pe("Cash"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${K==="Cash"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx(rE,{className:"w-6 h-6 mb-1 text-emerald-600"}),m.jsx("span",{className:"text-xs",children:"Tiền Mặt"})]}),m.jsxs("button",{onClick:()=>pe("QR"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${K==="QR"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx($E,{className:"w-6 h-6 mb-1 text-teal-600"}),m.jsx("span",{className:"text-xs",children:"Chuyển Khoản QR"})]}),m.jsxs("button",{onClick:()=>pe("Card"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${K==="Card"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx(wE,{className:"w-6 h-6 mb-1 text-blue-600"}),m.jsx("span",{className:"text-xs",children:"Thẻ POS"})]})]})]}),m.jsxs("div",{className:"p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center",children:[m.jsx("span",{className:"text-xs font-semibold text-emerald-900",children:"Tổng tiền cần thu:"}),m.jsx("span",{className:"text-lg font-black text-emerald-700",children:kn(w)})]})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{onClick:()=>me(!1),className:"flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Quay Lại"}),m.jsx("button",{onClick:Ze,className:"flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30",children:"Xác Nhận & In Hóa Đơn"})]})]})}),le&&m.jsxs("div",{className:"fixed bottom-20 right-5 z-50 flex items-center p-4 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-800 animate-in fade-in",children:[m.jsx(Fo,{className:"w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"}),m.jsx("span",{className:"text-xs font-bold",children:D})]})]})},nN=()=>{const[i,e]=he.useState($R),[t,r]=he.useState("ALL"),a=(c,d)=>{e(f=>f.map(p=>p.id===c?{...p,status:d}:p))},l=i.filter(c=>t==="ALL"?!0:c.status===t);return m.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)] space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-800 rounded-xl",children:m.jsx(Lh,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Màn Hình Bếp & Pha Chế (KDS)"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi và cập nhật tiến độ chế biến món ăn"})]})]}),m.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl space-x-1",children:[m.jsxs("button",{onClick:()=>r("ALL"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="ALL"?"bg-white text-gray-900 shadow-sm":"text-gray-600"}`,children:["Tất Cả (",i.length,")"]}),m.jsxs("button",{onClick:()=>r("Pending"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Pending"?"bg-rose-500 text-white shadow-sm":"text-gray-600"}`,children:["Chờ Làm (",i.filter(c=>c.status==="Pending").length,")"]}),m.jsxs("button",{onClick:()=>r("Cooking"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Cooking"?"bg-amber-500 text-white shadow-sm":"text-gray-600"}`,children:["Đang Chế Biến (",i.filter(c=>c.status==="Cooking").length,")"]}),m.jsxs("button",{onClick:()=>r("Ready"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Ready"?"bg-emerald-600 text-white shadow-sm":"text-gray-600"}`,children:["Hoàn Tất (",i.filter(c=>c.status==="Ready").length,")"]})]})]}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1",children:l.length===0?m.jsxs("div",{className:"col-span-full flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-2xl border border-gray-200",children:[m.jsx(vw,{className:"w-12 h-12 mb-2 opacity-30"}),m.jsx("p",{className:"text-sm font-bold text-gray-500",children:"Không có món ăn nào trong hàng chờ"})]}):l.map(c=>{const d=c.status==="Pending",f=c.status==="Cooking",p=c.status==="Ready";let g="border-gray-200",_="bg-gray-100 text-gray-800";return d?(g="border-rose-300 ring-2 ring-rose-500/20",_="bg-rose-500 text-white"):f?(g="border-amber-300 ring-2 ring-amber-500/20",_="bg-amber-500 text-white"):p&&(g="border-emerald-300",_="bg-emerald-600 text-white"),m.jsxs("div",{className:`flex flex-col justify-between bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all ${g}`,children:[m.jsxs("div",{className:`flex items-center justify-between px-4 py-2.5 ${_}`,children:[m.jsxs("div",{className:"font-extrabold text-sm",children:[c.tableName," (",c.areaName,")"]}),m.jsxs("div",{className:"flex items-center text-xs font-semibold space-x-1",children:[m.jsx(Vc,{className:"w-3.5 h-3.5"}),m.jsxs("span",{children:[c.elapsedMinutes," phút"]})]})]}),m.jsxs("div",{className:"p-4 space-y-3 flex-1",children:[m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"text-base font-extrabold text-gray-900 leading-tight",children:c.productName}),c.optionsText&&m.jsx("p",{className:"text-xs text-gray-600 font-medium mt-1",children:c.optionsText}),c.note&&m.jsxs("p",{className:"text-xs text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md mt-1 border border-rose-200 inline-block",children:["⚠️ ",c.note]})]}),m.jsxs("span",{className:"flex items-center justify-center w-8 h-8 font-black text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200",children:["x",c.quantity]})]}),m.jsxs("div",{className:"text-[11px] text-gray-400 font-medium",children:["Mã đơn: ",c.orderCode," • Nhận lúc: ",Hv(c.createdAt)]})]}),m.jsxs("div",{className:"p-3 bg-gray-50 border-t border-gray-100",children:[d&&m.jsxs("button",{onClick:()=>a(c.id,"Cooking"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-colors",children:[m.jsx(WE,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"BẮT ĐẦU CHẾ BIẾN"})]}),f&&m.jsxs("button",{onClick:()=>a(c.id,"Ready"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors",children:[m.jsx(pE,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"HOÀN TẤT (BÁO PHỤC VỤ)"})]}),p&&m.jsxs("div",{className:"flex items-center justify-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200",children:[m.jsx(Fo,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"Đã Xong - Chờ Phục Vụ"})]})]})]},c.id)})})]})},iN=()=>{const[i,e]=he.useState("items"),[t,r]=he.useState(YR),[a,l]=he.useState(""),[c,d]=he.useState(!1),[f,p]=he.useState(""),[g,_]=he.useState(""),[x,M]=he.useState("kg"),[w,C]=he.useState(10),[S,y]=he.useState(5e4),N=t.filter(T=>T.name.toLowerCase().includes(a.toLowerCase())||T.code.toLowerCase().includes(a.toLowerCase())),L=T=>{T.preventDefault();const I={id:`inv-${Date.now()}`,code:g||`RM00${t.length+1}`,name:f,unit:x,minStock:5,currentStock:Number(w),unitPrice:Number(S),category:"Nguyên liệu pha chế",lastUpdated:new Date().toISOString()};r([I,...t]),d(!1),p("")};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-xl",children:m.jsx(Ph,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Quản Lý Kho & Nguyên Liệu"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi tồn kho thực tế, nhập kho và định lượng món"})]})]}),m.jsxs("button",{onClick:()=>d(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[m.jsx(Cc,{className:"w-4 h-4"}),m.jsx("span",{children:"Thêm Nguyên Liệu Mới"})]})]}),m.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[m.jsxs("button",{onClick:()=>e("items"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="items"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Mục Nguyên Liệu (",t.length,")"]}),m.jsx("button",{onClick:()=>e("orders"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="orders"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Đơn Nhập Kho (PO)"})]}),i==="items"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsxs("div",{className:"relative max-w-md",children:[m.jsx(Dh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"Tìm tên nguyên liệu hoặc mã nguyên liệu...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Mã NL"}),m.jsx("th",{className:"p-3",children:"Tên Nguyên Liệu"}),m.jsx("th",{className:"p-3",children:"Đơn Vị Tính"}),m.jsx("th",{className:"p-3",children:"Tồn Kho Hiện Tại"}),m.jsx("th",{className:"p-3",children:"Đơn Giá Nhập"}),m.jsx("th",{className:"p-3",children:"Trạng Thái"}),m.jsx("th",{className:"p-3 text-right",children:"Cập Nhật"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:N.map(T=>{const I=T.currentStock<=T.minStock;return m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-800",children:T.code}),m.jsx("td",{className:"p-3 font-bold text-gray-900",children:T.name}),m.jsx("td",{className:"p-3 font-medium text-gray-600",children:T.unit}),m.jsxs("td",{className:"p-3 font-extrabold text-gray-900",children:[T.currentStock," ",T.unit]}),m.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:kn(T.unitPrice)}),m.jsx("td",{className:"p-3",children:I?m.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800",children:[m.jsx(fw,{className:"w-3 h-3 mr-1"}),"Sắp Hết Kho"]}):m.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[m.jsx(Fo,{className:"w-3 h-3 mr-1"}),"An Toàn"]})}),m.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:eN(T.lastUpdated)})]},T.id)})})]})})]}),i==="orders"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center",children:[m.jsx(pw,{className:"w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80"}),m.jsx("h3",{className:"text-sm font-bold text-gray-900",children:"Danh Sách Đơn Mua Hàng Nhà Cung Cấp (PO)"}),m.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-sm mx-auto",children:"Hệ thống hỗ trợ duyệt đơn nhập kho, kiểm hàng tự động cộng tồn kho tức thì."})]}),c&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thêm Nguyên Liệu Kho Mới"}),m.jsx("button",{onClick:()=>d(!1),className:"text-gray-400 hover:text-gray-600",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("form",{onSubmit:L,className:"py-4 space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Nguyên Liệu"}),m.jsx("input",{type:"text",value:g,onChange:T=>_(T.target.value),placeholder:"Ví dụ: RM006",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Tên Nguyên Liệu (*)"}),m.jsx("input",{type:"text",required:!0,value:f,onChange:T=>p(T.target.value),placeholder:"Ví dụ: Bột Matcha Nhật Bản",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Vị Tính"}),m.jsx("input",{type:"text",value:x,onChange:T=>M(T.target.value),placeholder:"kg, Hộp, Chai...",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Lượng Ban Đầu"}),m.jsx("input",{type:"number",value:w,onChange:T=>C(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Giá Nhập (₫)"}),m.jsx("input",{type:"number",value:S,onChange:T=>y(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{type:"button",onClick:()=>d(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200",children:"Hủy"}),m.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/30",children:"Lưu Nguyên Liệu"})]})]})]})})]})},rN=()=>{const i=KR;return m.jsxs("div",{className:"flex flex-col space-y-5",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl",children:m.jsx(fE,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Báo Cáo & Thống Kê Kinh Doanh"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Tổng quan doanh thu, đơn hàng và sản phẩm bán chạy"})]})]}),m.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200",children:[m.jsx(cE,{className:"w-4 h-4 text-emerald-600"}),m.jsxs("span",{children:["Hôm nay: ",new Date().toLocaleDateString("vi-VN")]})]})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Doanh Thu Hôm Nay"}),m.jsx("div",{className:"p-2 bg-emerald-50 text-emerald-700 rounded-xl",children:m.jsx(TE,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsx("div",{className:"text-2xl font-black text-gray-900",children:kn(i.todayRevenue)}),m.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[m.jsx(tg,{className:"w-4 h-4 mr-0.5"}),m.jsxs("span",{children:["+",i.revenueGrowthPercent,"% so với hôm qua"]})]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Số Đơn Phục Vụ"}),m.jsx("div",{className:"p-2 bg-blue-50 text-blue-700 rounded-xl",children:m.jsx(tw,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.todayOrders," đơn"]}),m.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[m.jsx(tg,{className:"w-4 h-4 mr-0.5"}),m.jsxs("span",{children:["+",i.ordersGrowthPercent,"% tăng trưởng"]})]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Giá Trị Đơn Trung Bình"}),m.jsx("div",{className:"p-2 bg-purple-50 text-purple-700 rounded-xl",children:m.jsx(uw,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsx("div",{className:"text-2xl font-black text-gray-900",children:kn(i.averageOrderValue)}),m.jsxs("div",{className:"text-xs font-medium text-gray-400 mt-1",children:["Tính trên ",i.todayOrders," hóa đơn"]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Tải Bàn Hiện Tại"}),m.jsx("div",{className:"p-2 bg-amber-50 text-amber-700 rounded-xl",children:m.jsx(Hc,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.activeTablesCount," / ",i.totalTablesCount," Bàn"]}),m.jsxs("div",{className:"text-xs font-semibold text-amber-600 mt-1",children:["Công suất: ",Math.round(i.activeTablesCount/i.totalTablesCount*100),"%"]})]})]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5",children:[m.jsxs("div",{className:"lg:col-span-2 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Biểu Đồ Doanh Thu Theo Giờ"}),m.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"Đơn vị: VNĐ"})]}),m.jsx("div",{className:"flex items-end justify-between h-56 pt-6 px-2 border-b border-gray-100",children:i.revenueChartData.map((e,t)=>{const r=Math.max(...i.revenueChartData.map(l=>l.amount)),a=Math.round(e.amount/r*100);return m.jsxs("div",{className:"flex flex-col items-center flex-1 mx-1 group",children:[m.jsx("div",{className:"text-[10px] font-bold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:kn(e.amount)}),m.jsx("div",{className:"w-full bg-emerald-100 group-hover:bg-emerald-600 rounded-t-xl transition-all duration-200",style:{height:`${a}%`}}),m.jsx("div",{className:"text-[11px] font-semibold text-gray-500 mt-2",children:e.time})]},t)})})]}),m.jsxs("div",{className:"p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[m.jsx(Qx,{className:"w-5 h-5 text-amber-500"}),m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Top Sản Phẩm Bán Chạy"})]}),m.jsx("div",{className:"space-y-3 divide-y divide-gray-50",children:i.topSellingProducts.map((e,t)=>m.jsxs("div",{className:"flex items-center justify-between pt-2.5 first:pt-0",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("span",{className:`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${t===0?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-600"}`,children:t+1}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-bold text-gray-900",children:e.name}),m.jsxs("div",{className:"text-[10px] text-gray-500 font-medium",children:["Đã bán: ",e.quantity," phần"]})]})]}),m.jsx("div",{className:"text-xs font-extrabold text-emerald-700",children:kn(e.revenue)})]},t))})]})]})]})},sN=()=>{const[i,e]=he.useState("customers"),[t]=he.useState(ZR),[r,a]=he.useState(JR),[l,c]=he.useState(""),[d,f]=he.useState(!1),[p,g]=he.useState(""),[_,x]=he.useState(2e4),M=t.filter(C=>C.fullName.toLowerCase().includes(l.toLowerCase())||C.phoneNumber.includes(l)),w=C=>{C.preventDefault();const S={id:`v-${Date.now()}`,code:p.toUpperCase()||"KM2026",discountType:"FixedAmount",discountValue:Number(_),minOrderValue:1e5,validUntil:"2026-12-31",usageLimit:200,usedCount:0,isActive:!0};a([S,...r]),f(!1),g("")};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-800 rounded-xl",children:m.jsx(Hc,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Khách Hàng & Chương Trình Khuyến Mãi"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Quản lý thành viên tích điểm và mã giảm giá Voucher"})]})]}),i==="vouchers"&&m.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[m.jsx(Cc,{className:"w-4 h-4"}),m.jsx("span",{children:"Tạo Voucher Mới"})]})]}),m.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[m.jsxs("button",{onClick:()=>e("customers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="customers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Sách Khách Hàng (",t.length,")"]}),m.jsxs("button",{onClick:()=>e("vouchers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="vouchers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Mã Giảm Giá Voucher (",r.length,")"]})]}),i==="customers"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsxs("div",{className:"relative max-w-md",children:[m.jsx(Dh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"Tìm theo tên hoặc số điện thoại khách hàng...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Họ & Tên"}),m.jsx("th",{className:"p-3",children:"Số Điện Thoại"}),m.jsx("th",{className:"p-3",children:"Điểm Tích Lũy"}),m.jsx("th",{className:"p-3",children:"Hạng Thành Viên"}),m.jsx("th",{className:"p-3",children:"Tổng Chi Tiêu"}),m.jsx("th",{className:"p-3 text-right",children:"Lần Ghé Gần Nhất"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:M.map(C=>m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-900",children:C.fullName}),m.jsx("td",{className:"p-3 font-medium text-gray-700",children:C.phoneNumber}),m.jsxs("td",{className:"p-3 font-extrabold text-amber-600",children:[C.points," điểm"]}),m.jsx("td",{className:"p-3",children:m.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${C.tier==="Diamond"?"bg-purple-100 text-purple-800":C.tier==="Gold"?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-800"}`,children:[m.jsx(Qx,{className:"w-3 h-3 mr-1"}),"Hạng ",C.tier]})}),m.jsx("td",{className:"p-3 font-bold text-emerald-700",children:kn(C.totalSpent)}),m.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:C.lastVisit})]},C.id))})]})})]}),i==="vouchers"&&m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(C=>m.jsx("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between",children:m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl font-black",children:m.jsx(lw,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-base font-black text-gray-900 tracking-wider",children:C.code}),m.jsx("div",{className:"text-xs font-bold text-emerald-700",children:C.discountType==="Percentage"?`Giảm ${C.discountValue}%`:`Giảm ${kn(C.discountValue)}`}),m.jsxs("div",{className:"text-[10px] text-gray-400",children:["Đơn từ ",kn(C.minOrderValue)," • Hạn: ",C.validUntil]})]})]})},C.id))}),d&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Tạo Mã Giảm Giá Mới"}),m.jsx("button",{onClick:()=>f(!1),className:"text-gray-400 hover:text-gray-600",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("form",{onSubmit:w,className:"py-4 space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Voucher (*)"}),m.jsx("input",{type:"text",required:!0,value:p,onChange:C=>g(C.target.value),placeholder:"Ví dụ: KM30K",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-bold tracking-wider"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Tiền Giảm (₫)"}),m.jsx("input",{type:"number",value:_,onChange:C=>x(Number(C.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{type:"button",onClick:()=>f(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl",children:"Hủy"}),m.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/30",children:"Tạo Voucher"})]})]})]})})]})},aN=()=>{const{user:i}=Oo(),[e,t]=he.useState(QR),[r,a]=he.useState(!1),l=()=>{var c;if(r)a(!1);else{const d={id:`att-${Date.now()}`,employeeName:(i==null?void 0:i.fullName)||(i==null?void 0:i.username)||"Nhân viên mới",role:(i==null?void 0:i.role)||((c=i==null?void 0:i.roles)==null?void 0:c[0])||"Cashier",checkInTime:new Date().toLocaleTimeString("vi-VN"),shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"};t([d,...e]),a(!0)}};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1",children:[m.jsx(Vc,{className:"w-4 h-4"}),m.jsx("span",{children:"Màn Hình Điểm Danh Ca Làm Việc"})]}),m.jsxs("h2",{className:"text-2xl font-black",children:["Xin chào, ",(i==null?void 0:i.fullName)||(i==null?void 0:i.username),"!"]}),m.jsxs("p",{className:"text-xs text-emerald-100 mt-0.5",children:["Thời gian hiện tại: ",new Date().toLocaleTimeString("vi-VN")," • Ca Sáng"]})]}),m.jsx("button",{onClick:l,className:`flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-xs font-black shadow-xl transition-all ${r?"bg-rose-500 hover:bg-rose-600 text-white shadow-rose-900/30":"bg-white text-emerald-800 hover:bg-emerald-50 shadow-emerald-900/30"}`,children:r?m.jsxs(m.Fragment,{children:[m.jsx(tv,{className:"w-4 h-4"}),m.jsx("span",{children:"CHECK-OUT KẾT THÚC CA"})]}):m.jsxs(m.Fragment,{children:[m.jsx(UE,{className:"w-4 h-4"}),m.jsx("span",{children:"CHECK-IN BẮT ĐẦU CA"})]})})]}),m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Bảng Theo Dõi Điểm Danh Ca Làm Việc"}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Nhân Viên"}),m.jsx("th",{className:"p-3",children:"Vai Trò"}),m.jsx("th",{className:"p-3",children:"Ca Làm Việc"}),m.jsx("th",{className:"p-3",children:"Giờ Check-in"}),m.jsx("th",{className:"p-3 text-right",children:"Trạng Thái"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:e.map(c=>m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-900",children:c.employeeName}),m.jsx("td",{className:"p-3",children:m.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-700 rounded-md",children:c.role})}),m.jsx("td",{className:"p-3 font-medium text-gray-600",children:c.shiftName}),m.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:c.checkInTime}),m.jsx("td",{className:"p-3 text-right",children:m.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[m.jsx(Fo,{className:"w-3 h-3 mr-1"}),"Đang Trong Ca"]})})]},c.id))})]})})]})]})},oN=({children:i})=>{const{isAuthenticated:e,isLoading:t}=Oo();return t?m.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:m.jsx("div",{className:"w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"})}):e?m.jsx(m.Fragment,{children:i}):m.jsx(yf,{to:"/login",replace:!0})},lN=()=>m.jsx(qM,{children:m.jsx($M,{children:m.jsx(NS,{children:m.jsxs(MS,{children:[m.jsx(Ai,{path:"/login",element:m.jsx(GR,{})}),m.jsxs(Ai,{path:"/",element:m.jsx(oN,{children:m.jsx(Ew,{})}),children:[m.jsx(Ai,{index:!0,element:m.jsx(yf,{to:"/pos",replace:!0})}),m.jsx(Ai,{path:"pos",element:m.jsx(tN,{})}),m.jsx(Ai,{path:"kitchen",element:m.jsx(nN,{})}),m.jsx(Ai,{path:"inventory",element:m.jsx(iN,{})}),m.jsx(Ai,{path:"dashboard",element:m.jsx(rN,{})}),m.jsx(Ai,{path:"customers",element:m.jsx(sN,{})}),m.jsx(Ai,{path:"attendance",element:m.jsx(aN,{})})]}),m.jsx(Ai,{path:"*",element:m.jsx(yf,{to:"/pos",replace:!0})})]})})})});Py.createRoot(document.getElementById("root")).render(m.jsx(dx.StrictMode,{children:m.jsx(lN,{})}));
