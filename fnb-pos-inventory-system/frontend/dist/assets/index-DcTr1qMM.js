function wy(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function hx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ed={exports:{}},xo={},Td={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Ey(){if(b0)return Ct;b0=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function S(O,J,Ne){this.props=O,this.context=J,this.refs=C,this.updater=Ne||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,J){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,J,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=S.prototype;function R(O,J,Ne){this.props=O,this.context=J,this.refs=C,this.updater=Ne||M}var P=R.prototype=new g;P.constructor=R,E(P,S.prototype),P.isPureReactComponent=!0;var T=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(O,J,Ne){var Ve,He={},K=null,xe=null;if(J!=null)for(Ve in J.ref!==void 0&&(xe=J.ref),J.key!==void 0&&(K=""+J.key),J)I.call(J,Ve)&&!k.hasOwnProperty(Ve)&&(He[Ve]=J[Ve]);var ge=arguments.length-2;if(ge===1)He.children=Ne;else if(1<ge){for(var Fe=Array(ge),et=0;et<ge;et++)Fe[et]=arguments[et+2];He.children=Fe}if(O&&O.defaultProps)for(Ve in ge=O.defaultProps,ge)He[Ve]===void 0&&(He[Ve]=ge[Ve]);return{$$typeof:i,type:O,key:K,ref:xe,props:He,_owner:L.current}}function U(O,J){return{$$typeof:i,type:O.type,key:J,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var J={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ne){return J[Ne]})}var Z=/\/+/g;function ce(O,J){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):J.toString(36)}function he(O,J,Ne,Ve,He){var K=typeof O;(K==="undefined"||K==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(K){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case i:case e:xe=!0}}if(xe)return xe=O,He=He(xe),O=Ve===""?"."+ce(xe,0):Ve,T(He)?(Ne="",O!=null&&(Ne=O.replace(Z,"$&/")+"/"),he(He,J,Ne,"",function(et){return et})):He!=null&&(z(He)&&(He=U(He,Ne+(!He.key||xe&&xe.key===He.key?"":(""+He.key).replace(Z,"$&/")+"/")+O)),J.push(He)),1;if(xe=0,Ve=Ve===""?".":Ve+":",T(O))for(var ge=0;ge<O.length;ge++){K=O[ge];var Fe=Ve+ce(K,ge);xe+=he(K,J,Ne,Fe,He)}else if(Fe=y(O),typeof Fe=="function")for(O=Fe.call(O),ge=0;!(K=O.next()).done;)K=K.value,Fe=Ve+ce(K,ge++),xe+=he(K,J,Ne,Fe,He);else if(K==="object")throw J=String(O),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return xe}function q(O,J,Ne){if(O==null)return O;var Ve=[],He=0;return he(O,Ve,"","",function(K){return J.call(Ne,K,He++)}),Ve}function fe(O){if(O._status===-1){var J=O._result;J=J(),J.then(function(Ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ne)},function(Ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ne)}),O._status===-1&&(O._status=0,O._result=J)}if(O._status===1)return O._result.default;throw O._result}var Q={current:null},$={transition:null},le={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:$,ReactCurrentOwner:L};function re(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:q,forEach:function(O,J,Ne){q(O,function(){J.apply(this,arguments)},Ne)},count:function(O){var J=0;return q(O,function(){J++}),J},toArray:function(O){return q(O,function(J){return J})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ct.Component=S,Ct.Fragment=t,Ct.Profiler=a,Ct.PureComponent=R,Ct.StrictMode=r,Ct.Suspense=f,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Ct.act=re,Ct.cloneElement=function(O,J,Ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=E({},O.props),He=O.key,K=O.ref,xe=O._owner;if(J!=null){if(J.ref!==void 0&&(K=J.ref,xe=L.current),J.key!==void 0&&(He=""+J.key),O.type&&O.type.defaultProps)var ge=O.type.defaultProps;for(Fe in J)I.call(J,Fe)&&!k.hasOwnProperty(Fe)&&(Ve[Fe]=J[Fe]===void 0&&ge!==void 0?ge[Fe]:J[Fe])}var Fe=arguments.length-2;if(Fe===1)Ve.children=Ne;else if(1<Fe){ge=Array(Fe);for(var et=0;et<Fe;et++)ge[et]=arguments[et+2];Ve.children=ge}return{$$typeof:i,type:O.type,key:He,ref:K,props:Ve,_owner:xe}},Ct.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},Ct.createElement=w,Ct.createFactory=function(O){var J=w.bind(null,O);return J.type=O,J},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(O){return{$$typeof:d,render:O}},Ct.isValidElement=z,Ct.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:fe}},Ct.memo=function(O,J){return{$$typeof:m,type:O,compare:J===void 0?null:J}},Ct.startTransition=function(O){var J=$.transition;$.transition={};try{O()}finally{$.transition=J}},Ct.unstable_act=re,Ct.useCallback=function(O,J){return Q.current.useCallback(O,J)},Ct.useContext=function(O){return Q.current.useContext(O)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(O){return Q.current.useDeferredValue(O)},Ct.useEffect=function(O,J){return Q.current.useEffect(O,J)},Ct.useId=function(){return Q.current.useId()},Ct.useImperativeHandle=function(O,J,Ne){return Q.current.useImperativeHandle(O,J,Ne)},Ct.useInsertionEffect=function(O,J){return Q.current.useInsertionEffect(O,J)},Ct.useLayoutEffect=function(O,J){return Q.current.useLayoutEffect(O,J)},Ct.useMemo=function(O,J){return Q.current.useMemo(O,J)},Ct.useReducer=function(O,J,Ne){return Q.current.useReducer(O,J,Ne)},Ct.useRef=function(O){return Q.current.useRef(O)},Ct.useState=function(O){return Q.current.useState(O)},Ct.useSyncExternalStore=function(O,J,Ne){return Q.current.useSyncExternalStore(O,J,Ne)},Ct.useTransition=function(){return Q.current.useTransition()},Ct.version="18.3.1",Ct}var w0;function bh(){return w0||(w0=1,Td.exports=Ey()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Ty(){if(E0)return xo;E0=1;var i=bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,m){var x,_={},y=null,M=null;m!==void 0&&(y=""+m),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(M=f.ref);for(x in f)r.call(f,x)&&!l.hasOwnProperty(x)&&(_[x]=f[x]);if(d&&d.defaultProps)for(x in f=d.defaultProps,f)_[x]===void 0&&(_[x]=f[x]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:a.current}}return xo.Fragment=t,xo.jsx=c,xo.jsxs=c,xo}var T0;function Ay(){return T0||(T0=1,Ed.exports=Ty()),Ed.exports}var h=Ay(),oe=bh();const px=hx(oe),Cy=wy({__proto__:null,default:px},[oe]);var ql={},Ad={exports:{}},Jn={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Ry(){return A0||(A0=1,(function(i){function e($,le){var re=$.length;$.push(le);e:for(;0<re;){var O=re-1>>>1,J=$[O];if(0<a(J,le))$[O]=le,$[re]=J,re=O;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var le=$[0],re=$.pop();if(re!==le){$[0]=re;e:for(var O=0,J=$.length,Ne=J>>>1;O<Ne;){var Ve=2*(O+1)-1,He=$[Ve],K=Ve+1,xe=$[K];if(0>a(He,re))K<J&&0>a(xe,He)?($[O]=xe,$[K]=re,O=K):($[O]=He,$[Ve]=re,O=Ve);else if(K<J&&0>a(xe,re))$[O]=xe,$[K]=re,O=K;else break e}}return le}function a($,le){var re=$.sortIndex-le.sortIndex;return re!==0?re:$.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],m=[],x=1,_=null,y=3,M=!1,E=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P($){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=$)r(m),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(m)}}function T($){if(C=!1,P($),!E)if(t(f)!==null)E=!0,fe(I);else{var le=t(m);le!==null&&Q(T,le.startTime-$)}}function I($,le){E=!1,C&&(C=!1,g(w),w=-1),M=!0;var re=y;try{for(P(le),_=t(f);_!==null&&(!(_.expirationTime>le)||$&&!V());){var O=_.callback;if(typeof O=="function"){_.callback=null,y=_.priorityLevel;var J=O(_.expirationTime<=le);le=i.unstable_now(),typeof J=="function"?_.callback=J:_===t(f)&&r(f),P(le)}else r(f);_=t(f)}if(_!==null)var Ne=!0;else{var Ve=t(m);Ve!==null&&Q(T,Ve.startTime-le),Ne=!1}return Ne}finally{_=null,y=re,M=!1}}var L=!1,k=null,w=-1,U=5,z=-1;function V(){return!(i.unstable_now()-z<U)}function Z(){if(k!==null){var $=i.unstable_now();z=$;var le=!0;try{le=k(!0,$)}finally{le?ce():(L=!1,k=null)}}else L=!1}var ce;if(typeof R=="function")ce=function(){R(Z)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,q=he.port2;he.port1.onmessage=Z,ce=function(){q.postMessage(null)}}else ce=function(){S(Z,0)};function fe($){k=$,L||(L=!0,ce())}function Q($,le){w=S(function(){$(i.unstable_now())},le)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){E||M||(E=!0,fe(I))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function($){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var re=y;y=le;try{return $()}finally{y=re}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,le){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var re=y;y=$;try{return le()}finally{y=re}},i.unstable_scheduleCallback=function($,le,re){var O=i.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?O+re:O):re=O,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=re+J,$={id:x++,callback:le,priorityLevel:$,startTime:re,expirationTime:J,sortIndex:-1},re>O?($.sortIndex=re,e(m,$),t(f)===null&&$===t(m)&&(C?(g(w),w=-1):C=!0,Q(T,re-O))):($.sortIndex=J,e(f,$),E||M||(E=!0,fe(I))),$},i.unstable_shouldYield=V,i.unstable_wrapCallback=function($){var le=y;return function(){var re=y;y=le;try{return $.apply(this,arguments)}finally{y=re}}}})(Rd)),Rd}var C0;function Ny(){return C0||(C0=1,Cd.exports=Ry()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Py(){if(R0)return Jn;R0=1;var i=bh(),e=Ny();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return f.call(_,n)?!0:f.call(x,n)?!1:m.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,s,o,u){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,s,o,u){if(s===null||typeof s>"u"||M(n,s,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function C(n,s,o,u,p,v,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=s,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new C(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,s,o,u){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,o,p,u)&&(o=null),u||p===null?y(s)&&(o===null?n.removeAttribute(s):n.setAttribute(s,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(s=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(s):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,s,o):n.setAttribute(s,o))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ce=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),fe=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),$=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,O;function J(n){if(O===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var Ne=!1;function Ve(n,s){if(!n||Ne)return"";Ne=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(de){var u=de}Reflect.construct(n,[],s)}else{try{s.call()}catch(de){u=de}n.call(s.prototype)}else{try{throw Error()}catch(de){u=de}n()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var p=de.stack.split(`
`),v=u.stack.split(`
`),A=p.length-1,B=v.length-1;1<=A&&0<=B&&p[A]!==v[B];)B--;for(;1<=A&&0<=B;A--,B--)if(p[A]!==v[B]){if(A!==1||B!==1)do if(A--,B--,0>B||p[A]!==v[B]){var G=`
`+p[A].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=A&&0<=B);break}}}finally{Ne=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function He(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ve(n.type,!1),n;case 11:return n=Ve(n.type.render,!1),n;case 1:return n=Ve(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case L:return"Portal";case U:return"Profiler";case w:return"StrictMode";case ce:return"Suspense";case he:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Z:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return s=n.displayName||null,s!==null?s:K(n.type)||"Memo";case fe:s=n._payload,n=n._init;try{return K(n(s))}catch{}}return null}function xe(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function et(n){var s=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,v=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Je(n){n._valueTracker||(n._valueTracker=et(n))}function Mt(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function ye(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function at(n,s){var o=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ut(n,s){var o=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;o=ge(s.value!=null?s.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Re(n,s){s=s.checked,s!=null&&P(n,"checked",s,!1)}function mt(n,s){Re(n,s);var o=ge(s.value),u=s.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(n,s.type,o):s.hasOwnProperty("defaultValue")&&Rt(n,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function yt(n,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,o||s===n.value||(n.value=s),n.defaultValue=s}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,s,o){(s!=="number"||ye(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ht=Array.isArray;function Ot(n,s,o,u){if(n=n.options,s){s={};for(var p=0;p<o.length;p++)s["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=s.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ge(o),s=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function Ft(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function F(n,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(t(92));if(Ht(o)){if(1<o.length)throw Error(t(93));o=o[0]}s=o}s==null&&(s=""),o=s}n._wrapperState={initialValue:ge(o)}}function rt(n,s){var o=ge(s.value),u=ge(s.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),s.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ge(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function D(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?D(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var j,se=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(s,o,u,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(j=j||document.createElement("div"),j.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=j.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function pe(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ue=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ue.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),Ee[s]=Ee[n]})});function me(n,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+s).trim():s+"px"}function _e(n,s){n=n.style;for(var o in s)if(s.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=me(o,s[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var Te=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,s){if(s){if(Te[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Oe(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function $e(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ot=null,ct=null,H=null;function Le(n){if(n=to(n)){if(typeof ot!="function")throw Error(t(280));var s=n.stateNode;s&&(s=ll(s),ot(n.stateNode,n.type,s))}}function ve(n){ct?H?H.push(n):H=[n]:ct=n}function Ie(){if(ct){var n=ct,s=H;if(H=ct=null,Le(n),s)for(n=0;n<s.length;n++)Le(s[n])}}function ke(n,s){return n(s)}function Se(){}var Ke=!1;function qe(n,s,o){if(Ke)return n(s,o);Ke=!0;try{return ke(n,s,o)}finally{Ke=!1,(ct!==null||H!==null)&&(Se(),Ie())}}function Gt(n,s){var o=n.stateNode;if(o===null)return null;var u=ll(o);if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,s,typeof o));return o}var kt=!1;if(d)try{var Vt={};Object.defineProperty(Vt,"passive",{get:function(){kt=!0}}),window.addEventListener("test",Vt,Vt),window.removeEventListener("test",Vt,Vt)}catch{kt=!1}function Tt(n,s,o,u,p,v,A,B,G){var de=Array.prototype.slice.call(arguments,3);try{s.apply(o,de)}catch(be){this.onError(be)}}var Nt=!1,bt=null,$t=!1,fn=null,Mr={onError:function(n){Nt=!0,bt=n}};function ns(n,s,o,u,p,v,A,B,G){Nt=!1,bt=null,Tt.apply(Mr,arguments)}function Ji(n,s,o,u,p,v,A,B,G){if(ns.apply(this,arguments),Nt){if(Nt){var de=bt;Nt=!1,bt=null}else throw Error(t(198));$t||($t=!0,fn=de)}}function Rn(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function Qi(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function br(n){if(Rn(n)!==n)throw Error(t(188))}function Xo(n){var s=n.alternate;if(!s){if(s=Rn(n),s===null)throw Error(t(188));return s!==n?null:n}for(var o=n,u=s;;){var p=o.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===o)return br(p),n;if(v===u)return br(p),s;v=v.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=v;else{for(var A=!1,B=p.child;B;){if(B===o){A=!0,o=p,u=v;break}if(B===u){A=!0,u=p,o=v;break}B=B.sibling}if(!A){for(B=v.child;B;){if(B===o){A=!0,o=v,u=p;break}if(B===u){A=!0,u=v,o=p;break}B=B.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:s}function is(n){return n=Xo(n),n!==null?Oa(n):null}function Oa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Oa(n);if(s!==null)return s;n=n.sibling}return null}var rs=e.unstable_scheduleCallback,Fa=e.unstable_cancelCallback,qo=e.unstable_shouldYield,Yc=e.unstable_requestPaint,nn=e.unstable_now,Kc=e.unstable_getCurrentPriorityLevel,ka=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,Y=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ie=e.unstable_IdlePriority,ne=null,De=null;function Xe(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var Pe=Math.clz32?Math.clz32:xt,tt=Math.log,lt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(tt(n)/lt|0)|0}var vt=64,it=4194304;function It(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Yt(n,s){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,A=o&268435455;if(A!==0){var B=A&~p;B!==0?u=It(B):(v&=A,v!==0&&(u=It(v)))}else A=o&~p,A!==0?u=It(A):v!==0&&(u=It(v));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,v=s&-s,p>=v||p===16&&(v&4194240)!==0))return s;if((u&4)!==0&&(u|=o&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)o=31-Pe(s),p=1<<o,u|=n[o],s&=~p;return u}function en(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-Pe(v),B=1<<A,G=p[A];G===-1?((B&o)===0||(B&u)!==0)&&(p[A]=en(B,s)):G<=s&&(n.expiredLanes|=B),v&=~B}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function wn(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function wt(n,s,o){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-Pe(s),n[s]=o}function Wn(n,s){var o=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-Pe(o),v=1<<p;s[p]=0,u[p]=-1,n[p]=-1,o&=~v}}function Xn(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-Pe(o),p=1<<u;p&s|n[u]&s&&(n[u]|=s),o&=~p}}var At=0;function er(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jt,Zt,yi,Xt,Si,Ui=!1,ss=[],wr=null,Er=null,Tr=null,Ba=new Map,za=new Map,Ar=[],Xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(n,s){switch(n){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ba.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(s.pointerId)}}function Va(n,s,o,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},s!==null&&(s=to(s),s!==null&&Zt(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function qv(n,s,o,u,p){switch(s){case"focusin":return wr=Va(wr,n,s,o,u,p),!0;case"dragenter":return Er=Va(Er,n,s,o,u,p),!0;case"mouseover":return Tr=Va(Tr,n,s,o,u,p),!0;case"pointerover":var v=p.pointerId;return Ba.set(v,Va(Ba.get(v)||null,n,s,o,u,p)),!0;case"gotpointercapture":return v=p.pointerId,za.set(v,Va(za.get(v)||null,n,s,o,u,p)),!0}return!1}function op(n){var s=as(n.target);if(s!==null){var o=Rn(s);if(o!==null){if(s=o.tag,s===13){if(s=Qi(o),s!==null){n.blockedOn=s,Si(n.priority,function(){yi(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $o(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Jc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ae=u,o.target.dispatchEvent(u),Ae=null}else return s=to(o),s!==null&&Zt(s),n.blockedOn=o,!1;s.shift()}return!0}function lp(n,s,o){$o(n)&&o.delete(s)}function $v(){Ui=!1,wr!==null&&$o(wr)&&(wr=null),Er!==null&&$o(Er)&&(Er=null),Tr!==null&&$o(Tr)&&(Tr=null),Ba.forEach(lp),za.forEach(lp)}function Ha(n,s){n.blockedOn===s&&(n.blockedOn=null,Ui||(Ui=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$v)))}function Ga(n){function s(p){return Ha(p,n)}if(0<ss.length){Ha(ss[0],n);for(var o=1;o<ss.length;o++){var u=ss[o];u.blockedOn===n&&(u.blockedOn=null)}}for(wr!==null&&Ha(wr,n),Er!==null&&Ha(Er,n),Tr!==null&&Ha(Tr,n),Ba.forEach(s),za.forEach(s),o=0;o<Ar.length;o++)u=Ar[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Ar.length&&(o=Ar[0],o.blockedOn===null);)op(o),o.blockedOn===null&&Ar.shift()}var Os=T.ReactCurrentBatchConfig,Yo=!0;function Yv(n,s,o,u){var p=At,v=Os.transition;Os.transition=null;try{At=1,Zc(n,s,o,u)}finally{At=p,Os.transition=v}}function Kv(n,s,o,u){var p=At,v=Os.transition;Os.transition=null;try{At=4,Zc(n,s,o,u)}finally{At=p,Os.transition=v}}function Zc(n,s,o,u){if(Yo){var p=Jc(n,s,o,u);if(p===null)mu(n,s,u,Ko,o),ap(n,u);else if(qv(p,n,s,o,u))u.stopPropagation();else if(ap(n,u),s&4&&-1<Xv.indexOf(n)){for(;p!==null;){var v=to(p);if(v!==null&&jt(v),v=Jc(n,s,o,u),v===null&&mu(n,s,u,Ko,o),v===p)break;p=v}p!==null&&u.stopPropagation()}else mu(n,s,u,null,o)}}var Ko=null;function Jc(n,s,o,u){if(Ko=null,n=$e(u),n=as(n),n!==null)if(s=Rn(n),s===null)n=null;else if(o=s.tag,o===13){if(n=Qi(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Ko=n,null}function cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case ka:return 1;case N:return 4;case Y:case ue:return 16;case ie:return 536870912;default:return 16}default:return 16}}var Cr=null,Qc=null,Zo=null;function up(){if(Zo)return Zo;var n,s=Qc,o=s.length,u,p="value"in Cr?Cr.value:Cr.textContent,v=p.length;for(n=0;n<o&&s[n]===p[n];n++);var A=o-n;for(u=1;u<=A&&s[o-u]===p[v-u];u++);return Zo=p.slice(n,1<u?1-u:void 0)}function Jo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Qo(){return!0}function dp(){return!1}function ni(n){function s(o,u,p,v,A){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(v):v[B]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Qo:dp,this.isPropagationStopped=dp,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),s}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=ni(Fs),ja=re({},Fs,{view:0,detail:0}),Zv=ni(ja),tu,nu,Wa,el=re({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Wa&&(Wa&&n.type==="mousemove"?(tu=n.screenX-Wa.screenX,nu=n.screenY-Wa.screenY):nu=tu=0,Wa=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),fp=ni(el),Jv=re({},el,{dataTransfer:0}),Qv=ni(Jv),e_=re({},ja,{relatedTarget:0}),iu=ni(e_),t_=re({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),n_=ni(t_),i_=re({},Fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),r_=ni(i_),s_=re({},Fs,{data:0}),hp=ni(s_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},l_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=l_[n])?!!s[n]:!1}function ru(){return c_}var u_=re({},ja,{key:function(n){if(n.key){var s=a_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Jo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?o_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(n){return n.type==="keypress"?Jo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),d_=ni(u_),f_=re({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=ni(f_),h_=re({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),p_=ni(h_),m_=re({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),g_=ni(m_),x_=re({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),v_=ni(x_),__=[9,13,27,32],su=d&&"CompositionEvent"in window,Xa=null;d&&"documentMode"in document&&(Xa=document.documentMode);var y_=d&&"TextEvent"in window&&!Xa,mp=d&&(!su||Xa&&8<Xa&&11>=Xa),gp=" ",xp=!1;function vp(n,s){switch(n){case"keyup":return __.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ks=!1;function S_(n,s){switch(n){case"compositionend":return _p(s);case"keypress":return s.which!==32?null:(xp=!0,gp);case"textInput":return n=s.data,n===gp&&xp?null:n;default:return null}}function M_(n,s){if(ks)return n==="compositionend"||!su&&vp(n,s)?(n=up(),Zo=Qc=Cr=null,ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return mp&&s.locale!=="ko"?null:s.data;default:return null}}var b_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!b_[n.type]:s==="textarea"}function Sp(n,s,o,u){ve(u),s=sl(s,"onChange"),0<s.length&&(o=new eu("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var qa=null,$a=null;function w_(n){Bp(n,0)}function tl(n){var s=Gs(n);if(Mt(s))return n}function E_(n,s){if(n==="change")return s}var Mp=!1;if(d){var au;if(d){var ou="oninput"in document;if(!ou){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),ou=typeof bp.oninput=="function"}au=ou}else au=!1;Mp=au&&(!document.documentMode||9<document.documentMode)}function wp(){qa&&(qa.detachEvent("onpropertychange",Ep),$a=qa=null)}function Ep(n){if(n.propertyName==="value"&&tl($a)){var s=[];Sp(s,$a,n,$e(n)),qe(w_,s)}}function T_(n,s,o){n==="focusin"?(wp(),qa=s,$a=o,qa.attachEvent("onpropertychange",Ep)):n==="focusout"&&wp()}function A_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl($a)}function C_(n,s){if(n==="click")return tl(s)}function R_(n,s){if(n==="input"||n==="change")return tl(s)}function N_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Mi=typeof Object.is=="function"?Object.is:N_;function Ya(n,s){if(Mi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!f.call(s,p)||!Mi(n[p],s[p]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,s){var o=Tp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Tp(o)}}function Cp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Cp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Rp(){for(var n=window,s=ye();s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=ye(n.document)}return s}function lu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function P_(n){var s=Rp(),o=n.focusedElem,u=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Cp(o.ownerDocument.documentElement,o)){if(u!==null&&lu(o)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(n,o.value.length);else if(n=(s=o.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Ap(o,v);var A=Ap(o,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=o;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)n=s[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var L_=d&&"documentMode"in document&&11>=document.documentMode,Bs=null,cu=null,Ka=null,uu=!1;function Np(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uu||Bs==null||Bs!==ye(u)||(u=Bs,"selectionStart"in u&&lu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ka&&Ya(Ka,u)||(Ka=u,u=sl(cu,"onSelect"),0<u.length&&(s=new eu("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Bs)))}function nl(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var zs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},du={},Pp={};d&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function il(n){if(du[n])return du[n];if(!zs[n])return n;var s=zs[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Pp)return du[n]=s[o];return n}var Lp=il("animationend"),Dp=il("animationiteration"),Ip=il("animationstart"),Up=il("transitionend"),Op=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(n,s){Op.set(n,s),l(s,[n])}for(var fu=0;fu<Fp.length;fu++){var hu=Fp[fu],D_=hu.toLowerCase(),I_=hu[0].toUpperCase()+hu.slice(1);Rr(D_,"on"+I_)}Rr(Lp,"onAnimationEnd"),Rr(Dp,"onAnimationIteration"),Rr(Ip,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Up,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Za="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),U_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Za));function kp(n,s,o){var u=n.type||"unknown-event";n.currentTarget=o,Ji(u,s,void 0,n),n.currentTarget=null}function Bp(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var v=void 0;if(s)for(var A=u.length-1;0<=A;A--){var B=u[A],G=B.instance,de=B.currentTarget;if(B=B.listener,G!==v&&p.isPropagationStopped())break e;kp(p,B,de),v=G}else for(A=0;A<u.length;A++){if(B=u[A],G=B.instance,de=B.currentTarget,B=B.listener,G!==v&&p.isPropagationStopped())break e;kp(p,B,de),v=G}}}if($t)throw n=fn,$t=!1,fn=null,n}function Jt(n,s){var o=s[Su];o===void 0&&(o=s[Su]=new Set);var u=n+"__bubble";o.has(u)||(zp(s,n,2,!1),o.add(u))}function pu(n,s,o){var u=0;s&&(u|=4),zp(o,n,u,s)}var rl="_reactListening"+Math.random().toString(36).slice(2);function Ja(n){if(!n[rl]){n[rl]=!0,r.forEach(function(o){o!=="selectionchange"&&(U_.has(o)||pu(o,!1,n),pu(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[rl]||(s[rl]=!0,pu("selectionchange",!1,s))}}function zp(n,s,o,u){switch(cp(s)){case 1:var p=Yv;break;case 4:p=Kv;break;default:p=Zc}o=p.bind(null,s,o,n),p=void 0,!kt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(s,o,{capture:!0,passive:p}):n.addEventListener(s,o,!0):p!==void 0?n.addEventListener(s,o,{passive:p}):n.addEventListener(s,o,!1)}function mu(n,s,o,u,p){var v=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var B=u.stateNode.containerInfo;if(B===p||B.nodeType===8&&B.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===p||G.nodeType===8&&G.parentNode===p))return;A=A.return}for(;B!==null;){if(A=as(B),A===null)return;if(G=A.tag,G===5||G===6){u=v=A;continue e}B=B.parentNode}}u=u.return}qe(function(){var de=v,be=$e(o),we=[];e:{var Me=Op.get(n);if(Me!==void 0){var We=eu,Ze=n;switch(n){case"keypress":if(Jo(o)===0)break e;case"keydown":case"keyup":We=d_;break;case"focusin":Ze="focus",We=iu;break;case"focusout":Ze="blur",We=iu;break;case"beforeblur":case"afterblur":We=iu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Qv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=p_;break;case Lp:case Dp:case Ip:We=n_;break;case Up:We=g_;break;case"scroll":We=Zv;break;case"wheel":We=v_;break;case"copy":case"cut":case"paste":We=r_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=pp}var nt=(s&4)!==0,un=!nt&&n==="scroll",ee=nt?Me!==null?Me+"Capture":null:Me;nt=[];for(var X=de,ae;X!==null;){ae=X;var Ce=ae.stateNode;if(ae.tag===5&&Ce!==null&&(ae=Ce,ee!==null&&(Ce=Gt(X,ee),Ce!=null&&nt.push(Qa(X,Ce,ae)))),un)break;X=X.return}0<nt.length&&(Me=new We(Me,Ze,null,o,be),we.push({event:Me,listeners:nt}))}}if((s&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",Me&&o!==Ae&&(Ze=o.relatedTarget||o.fromElement)&&(as(Ze)||Ze[tr]))break e;if((We||Me)&&(Me=be.window===be?be:(Me=be.ownerDocument)?Me.defaultView||Me.parentWindow:window,We?(Ze=o.relatedTarget||o.toElement,We=de,Ze=Ze?as(Ze):null,Ze!==null&&(un=Rn(Ze),Ze!==un||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(We=null,Ze=de),We!==Ze)){if(nt=fp,Ce="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(nt=pp,Ce="onPointerLeave",ee="onPointerEnter",X="pointer"),un=We==null?Me:Gs(We),ae=Ze==null?Me:Gs(Ze),Me=new nt(Ce,X+"leave",We,o,be),Me.target=un,Me.relatedTarget=ae,Ce=null,as(be)===de&&(nt=new nt(ee,X+"enter",Ze,o,be),nt.target=ae,nt.relatedTarget=un,Ce=nt),un=Ce,We&&Ze)t:{for(nt=We,ee=Ze,X=0,ae=nt;ae;ae=Vs(ae))X++;for(ae=0,Ce=ee;Ce;Ce=Vs(Ce))ae++;for(;0<X-ae;)nt=Vs(nt),X--;for(;0<ae-X;)ee=Vs(ee),ae--;for(;X--;){if(nt===ee||ee!==null&&nt===ee.alternate)break t;nt=Vs(nt),ee=Vs(ee)}nt=null}else nt=null;We!==null&&Vp(we,Me,We,nt,!1),Ze!==null&&un!==null&&Vp(we,un,Ze,nt,!0)}}e:{if(Me=de?Gs(de):window,We=Me.nodeName&&Me.nodeName.toLowerCase(),We==="select"||We==="input"&&Me.type==="file")var st=E_;else if(yp(Me))if(Mp)st=R_;else{st=A_;var dt=T_}else(We=Me.nodeName)&&We.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(st=C_);if(st&&(st=st(n,de))){Sp(we,st,o,be);break e}dt&&dt(n,Me,de),n==="focusout"&&(dt=Me._wrapperState)&&dt.controlled&&Me.type==="number"&&Rt(Me,"number",Me.value)}switch(dt=de?Gs(de):window,n){case"focusin":(yp(dt)||dt.contentEditable==="true")&&(Bs=dt,cu=de,Ka=null);break;case"focusout":Ka=cu=Bs=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Np(we,o,be);break;case"selectionchange":if(L_)break;case"keydown":case"keyup":Np(we,o,be)}var ft;if(su)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else ks?vp(n,o)&&(gt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(gt="onCompositionStart");gt&&(mp&&o.locale!=="ko"&&(ks||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&ks&&(ft=up()):(Cr=be,Qc="value"in Cr?Cr.value:Cr.textContent,ks=!0)),dt=sl(de,gt),0<dt.length&&(gt=new hp(gt,n,null,o,be),we.push({event:gt,listeners:dt}),ft?gt.data=ft:(ft=_p(o),ft!==null&&(gt.data=ft)))),(ft=y_?S_(n,o):M_(n,o))&&(de=sl(de,"onBeforeInput"),0<de.length&&(be=new hp("onBeforeInput","beforeinput",null,o,be),we.push({event:be,listeners:de}),be.data=ft))}Bp(we,s)})}function Qa(n,s,o){return{instance:n,listener:s,currentTarget:o}}function sl(n,s){for(var o=s+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Gt(n,o),v!=null&&u.unshift(Qa(n,v,p)),v=Gt(n,s),v!=null&&u.push(Qa(n,v,p))),n=n.return}return u}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vp(n,s,o,u,p){for(var v=s._reactName,A=[];o!==null&&o!==u;){var B=o,G=B.alternate,de=B.stateNode;if(G!==null&&G===u)break;B.tag===5&&de!==null&&(B=de,p?(G=Gt(o,v),G!=null&&A.unshift(Qa(o,G,B))):p||(G=Gt(o,v),G!=null&&A.push(Qa(o,G,B)))),o=o.return}A.length!==0&&n.push({event:s,listeners:A})}var O_=/\r\n?/g,F_=/\u0000|\uFFFD/g;function Hp(n){return(typeof n=="string"?n:""+n).replace(O_,`
`).replace(F_,"")}function al(n,s,o){if(s=Hp(s),Hp(n)!==s&&o)throw Error(t(425))}function ol(){}var gu=null,xu=null;function vu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,k_=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,B_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(z_)}:_u;function z_(n){setTimeout(function(){throw n})}function yu(n,s){var o=s,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Ga(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Ga(s)}function Nr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}var Hs=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Hs,eo="__reactProps$"+Hs,tr="__reactContainer$"+Hs,Su="__reactEvents$"+Hs,V_="__reactListeners$"+Hs,H_="__reactHandles$"+Hs;function as(n){var s=n[Oi];if(s)return s;for(var o=n.parentNode;o;){if(s=o[tr]||o[Oi]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=jp(n);n!==null;){if(o=n[Oi])return o;n=jp(n)}return s}n=o,o=n.parentNode}return null}function to(n){return n=n[Oi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Gs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ll(n){return n[eo]||null}var Mu=[],js=-1;function Pr(n){return{current:n}}function Qt(n){0>js||(n.current=Mu[js],Mu[js]=null,js--)}function Kt(n,s){js++,Mu[js]=n.current,n.current=s}var Lr={},Nn=Pr(Lr),qn=Pr(!1),os=Lr;function Ws(n,s){var o=n.type.contextTypes;if(!o)return Lr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in o)p[v]=s[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function $n(n){return n=n.childContextTypes,n!=null}function cl(){Qt(qn),Qt(Nn)}function Wp(n,s,o){if(Nn.current!==Lr)throw Error(t(168));Kt(Nn,s),Kt(qn,o)}function Xp(n,s,o){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,xe(n)||"Unknown",p));return re({},o,u)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,os=Nn.current,Kt(Nn,n),Kt(qn,qn.current),!0}function qp(n,s,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Xp(n,s,os),u.__reactInternalMemoizedMergedChildContext=n,Qt(qn),Qt(Nn),Kt(Nn,n)):Qt(qn),Kt(qn,o)}var nr=null,dl=!1,bu=!1;function $p(n){nr===null?nr=[n]:nr.push(n)}function G_(n){dl=!0,$p(n)}function Dr(){if(!bu&&nr!==null){bu=!0;var n=0,s=At;try{var o=nr;for(At=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}nr=null,dl=!1}catch(p){throw nr!==null&&(nr=nr.slice(n+1)),rs(ka,Dr),p}finally{At=s,bu=!1}}return null}var Xs=[],qs=0,fl=null,hl=0,ui=[],di=0,ls=null,ir=1,rr="";function cs(n,s){Xs[qs++]=hl,Xs[qs++]=fl,fl=n,hl=s}function Yp(n,s,o){ui[di++]=ir,ui[di++]=rr,ui[di++]=ls,ls=n;var u=ir;n=rr;var p=32-Pe(u)-1;u&=~(1<<p),o+=1;var v=32-Pe(s)+p;if(30<v){var A=p-p%5;v=(u&(1<<A)-1).toString(32),u>>=A,p-=A,ir=1<<32-Pe(s)+p|o<<p|u,rr=v+n}else ir=1<<v|o<<p|u,rr=n}function wu(n){n.return!==null&&(cs(n,1),Yp(n,1,0))}function Eu(n){for(;n===fl;)fl=Xs[--qs],Xs[qs]=null,hl=Xs[--qs],Xs[qs]=null;for(;n===ls;)ls=ui[--di],ui[di]=null,rr=ui[--di],ui[di]=null,ir=ui[--di],ui[di]=null}var ii=null,ri=null,tn=!1,bi=null;function Kp(n,s){var o=mi(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=n,s=n.deletions,s===null?(n.deletions=[o],n.flags|=16):s.push(o)}function Zp(n,s){switch(n.tag){case 5:var o=n.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,ii=n,ri=Nr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,ii=n,ri=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=ls!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=mi(18,null,null,0),o.stateNode=s,o.return=n,n.child=o,ii=n,ri=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(tn){var s=ri;if(s){var o=s;if(!Zp(n,s)){if(Tu(n))throw Error(t(418));s=Nr(o.nextSibling);var u=ii;s&&Zp(n,s)?Kp(u,o):(n.flags=n.flags&-4097|2,tn=!1,ii=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,tn=!1,ii=n}}}function Jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function pl(n){if(n!==ii)return!1;if(!tn)return Jp(n),tn=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!vu(n.type,n.memoizedProps)),s&&(s=ri)){if(Tu(n))throw Qp(),Error(t(418));for(;s;)Kp(n,s),s=Nr(s.nextSibling)}if(Jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(s===0){ri=Nr(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}n=n.nextSibling}ri=null}}else ri=ii?Nr(n.stateNode.nextSibling):null;return!0}function Qp(){for(var n=ri;n;)n=Nr(n.nextSibling)}function $s(){ri=ii=null,tn=!1}function Cu(n){bi===null?bi=[n]:bi.push(n)}var j_=T.ReactCurrentBatchConfig;function no(n,s,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(A){var B=p.refs;A===null?delete B[v]:B[v]=A},s._stringRef=v,s)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ml(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function em(n){var s=n._init;return s(n._payload)}function tm(n){function s(ee,X){if(n){var ae=ee.deletions;ae===null?(ee.deletions=[X],ee.flags|=16):ae.push(X)}}function o(ee,X){if(!n)return null;for(;X!==null;)s(ee,X),X=X.sibling;return null}function u(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function p(ee,X){return ee=Vr(ee,X),ee.index=0,ee.sibling=null,ee}function v(ee,X,ae){return ee.index=ae,n?(ae=ee.alternate,ae!==null?(ae=ae.index,ae<X?(ee.flags|=2,X):ae):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function B(ee,X,ae,Ce){return X===null||X.tag!==6?(X=_d(ae,ee.mode,Ce),X.return=ee,X):(X=p(X,ae),X.return=ee,X)}function G(ee,X,ae,Ce){var st=ae.type;return st===k?be(ee,X,ae.props.children,Ce,ae.key):X!==null&&(X.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===fe&&em(st)===X.type)?(Ce=p(X,ae.props),Ce.ref=no(ee,X,ae),Ce.return=ee,Ce):(Ce=Bl(ae.type,ae.key,ae.props,null,ee.mode,Ce),Ce.ref=no(ee,X,ae),Ce.return=ee,Ce)}function de(ee,X,ae,Ce){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=yd(ae,ee.mode,Ce),X.return=ee,X):(X=p(X,ae.children||[]),X.return=ee,X)}function be(ee,X,ae,Ce,st){return X===null||X.tag!==7?(X=xs(ae,ee.mode,Ce,st),X.return=ee,X):(X=p(X,ae),X.return=ee,X)}function we(ee,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=_d(""+X,ee.mode,ae),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return ae=Bl(X.type,X.key,X.props,null,ee.mode,ae),ae.ref=no(ee,null,X),ae.return=ee,ae;case L:return X=yd(X,ee.mode,ae),X.return=ee,X;case fe:var Ce=X._init;return we(ee,Ce(X._payload),ae)}if(Ht(X)||le(X))return X=xs(X,ee.mode,ae,null),X.return=ee,X;ml(ee,X)}return null}function Me(ee,X,ae,Ce){var st=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return st!==null?null:B(ee,X,""+ae,Ce);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:return ae.key===st?G(ee,X,ae,Ce):null;case L:return ae.key===st?de(ee,X,ae,Ce):null;case fe:return st=ae._init,Me(ee,X,st(ae._payload),Ce)}if(Ht(ae)||le(ae))return st!==null?null:be(ee,X,ae,Ce,null);ml(ee,ae)}return null}function We(ee,X,ae,Ce,st){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return ee=ee.get(ae)||null,B(X,ee,""+Ce,st);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case I:return ee=ee.get(Ce.key===null?ae:Ce.key)||null,G(X,ee,Ce,st);case L:return ee=ee.get(Ce.key===null?ae:Ce.key)||null,de(X,ee,Ce,st);case fe:var dt=Ce._init;return We(ee,X,ae,dt(Ce._payload),st)}if(Ht(Ce)||le(Ce))return ee=ee.get(ae)||null,be(X,ee,Ce,st,null);ml(X,Ce)}return null}function Ze(ee,X,ae,Ce){for(var st=null,dt=null,ft=X,gt=X=0,Mn=null;ft!==null&&gt<ae.length;gt++){ft.index>gt?(Mn=ft,ft=null):Mn=ft.sibling;var zt=Me(ee,ft,ae[gt],Ce);if(zt===null){ft===null&&(ft=Mn);break}n&&ft&&zt.alternate===null&&s(ee,ft),X=v(zt,X,gt),dt===null?st=zt:dt.sibling=zt,dt=zt,ft=Mn}if(gt===ae.length)return o(ee,ft),tn&&cs(ee,gt),st;if(ft===null){for(;gt<ae.length;gt++)ft=we(ee,ae[gt],Ce),ft!==null&&(X=v(ft,X,gt),dt===null?st=ft:dt.sibling=ft,dt=ft);return tn&&cs(ee,gt),st}for(ft=u(ee,ft);gt<ae.length;gt++)Mn=We(ft,ee,gt,ae[gt],Ce),Mn!==null&&(n&&Mn.alternate!==null&&ft.delete(Mn.key===null?gt:Mn.key),X=v(Mn,X,gt),dt===null?st=Mn:dt.sibling=Mn,dt=Mn);return n&&ft.forEach(function(Hr){return s(ee,Hr)}),tn&&cs(ee,gt),st}function nt(ee,X,ae,Ce){var st=le(ae);if(typeof st!="function")throw Error(t(150));if(ae=st.call(ae),ae==null)throw Error(t(151));for(var dt=st=null,ft=X,gt=X=0,Mn=null,zt=ae.next();ft!==null&&!zt.done;gt++,zt=ae.next()){ft.index>gt?(Mn=ft,ft=null):Mn=ft.sibling;var Hr=Me(ee,ft,zt.value,Ce);if(Hr===null){ft===null&&(ft=Mn);break}n&&ft&&Hr.alternate===null&&s(ee,ft),X=v(Hr,X,gt),dt===null?st=Hr:dt.sibling=Hr,dt=Hr,ft=Mn}if(zt.done)return o(ee,ft),tn&&cs(ee,gt),st;if(ft===null){for(;!zt.done;gt++,zt=ae.next())zt=we(ee,zt.value,Ce),zt!==null&&(X=v(zt,X,gt),dt===null?st=zt:dt.sibling=zt,dt=zt);return tn&&cs(ee,gt),st}for(ft=u(ee,ft);!zt.done;gt++,zt=ae.next())zt=We(ft,ee,gt,zt.value,Ce),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?gt:zt.key),X=v(zt,X,gt),dt===null?st=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(by){return s(ee,by)}),tn&&cs(ee,gt),st}function un(ee,X,ae,Ce){if(typeof ae=="object"&&ae!==null&&ae.type===k&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case I:e:{for(var st=ae.key,dt=X;dt!==null;){if(dt.key===st){if(st=ae.type,st===k){if(dt.tag===7){o(ee,dt.sibling),X=p(dt,ae.props.children),X.return=ee,ee=X;break e}}else if(dt.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===fe&&em(st)===dt.type){o(ee,dt.sibling),X=p(dt,ae.props),X.ref=no(ee,dt,ae),X.return=ee,ee=X;break e}o(ee,dt);break}else s(ee,dt);dt=dt.sibling}ae.type===k?(X=xs(ae.props.children,ee.mode,Ce,ae.key),X.return=ee,ee=X):(Ce=Bl(ae.type,ae.key,ae.props,null,ee.mode,Ce),Ce.ref=no(ee,X,ae),Ce.return=ee,ee=Ce)}return A(ee);case L:e:{for(dt=ae.key;X!==null;){if(X.key===dt)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){o(ee,X.sibling),X=p(X,ae.children||[]),X.return=ee,ee=X;break e}else{o(ee,X);break}else s(ee,X);X=X.sibling}X=yd(ae,ee.mode,Ce),X.return=ee,ee=X}return A(ee);case fe:return dt=ae._init,un(ee,X,dt(ae._payload),Ce)}if(Ht(ae))return Ze(ee,X,ae,Ce);if(le(ae))return nt(ee,X,ae,Ce);ml(ee,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(o(ee,X.sibling),X=p(X,ae),X.return=ee,ee=X):(o(ee,X),X=_d(ae,ee.mode,Ce),X.return=ee,ee=X),A(ee)):o(ee,X)}return un}var Ys=tm(!0),nm=tm(!1),gl=Pr(null),xl=null,Ks=null,Ru=null;function Nu(){Ru=Ks=xl=null}function Pu(n){var s=gl.current;Qt(gl),n._currentValue=s}function Lu(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Zs(n,s){xl=n,Ru=Ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Yn=!0),n.firstContext=null)}function fi(n){var s=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:s,next:null},Ks===null){if(xl===null)throw Error(t(308));Ks=n,xl.dependencies={lanes:0,firstContext:n}}else Ks=Ks.next=n;return s}var us=null;function Du(n){us===null?us=[n]:us.push(n)}function im(n,s,o,u){var p=s.interleaved;return p===null?(o.next=o,Du(s)):(o.next=p.next,p.next=o),s.interleaved=o,sr(n,u)}function sr(n,s){n.lanes|=s;var o=n.alternate;for(o!==null&&(o.lanes|=s),o=n,n=n.return;n!==null;)n.childLanes|=s,o=n.alternate,o!==null&&(o.childLanes|=s),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Ir=!1;function Iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Ur(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Bt&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,sr(n,o)}return p=u.interleaved,p===null?(s.next=s,Du(u)):(s.next=p.next,p.next=s),u.interleaved=s,sr(n,o)}function vl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Xn(n,o)}}function sm(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?p=v=A:v=v.next=A,o=o.next}while(o!==null);v===null?p=v=s:v=v.next=s}else p=v=s;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}function _l(n,s,o,u){var p=n.updateQueue;Ir=!1;var v=p.firstBaseUpdate,A=p.lastBaseUpdate,B=p.shared.pending;if(B!==null){p.shared.pending=null;var G=B,de=G.next;G.next=null,A===null?v=de:A.next=de,A=G;var be=n.alternate;be!==null&&(be=be.updateQueue,B=be.lastBaseUpdate,B!==A&&(B===null?be.firstBaseUpdate=de:B.next=de,be.lastBaseUpdate=G))}if(v!==null){var we=p.baseState;A=0,be=de=G=null,B=v;do{var Me=B.lane,We=B.eventTime;if((u&Me)===Me){be!==null&&(be=be.next={eventTime:We,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Ze=n,nt=B;switch(Me=s,We=o,nt.tag){case 1:if(Ze=nt.payload,typeof Ze=="function"){we=Ze.call(We,we,Me);break e}we=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=nt.payload,Me=typeof Ze=="function"?Ze.call(We,we,Me):Ze,Me==null)break e;we=re({},we,Me);break e;case 2:Ir=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Me=p.effects,Me===null?p.effects=[B]:Me.push(B))}else We={eventTime:We,lane:Me,tag:B.tag,payload:B.payload,callback:B.callback,next:null},be===null?(de=be=We,G=we):be=be.next=We,A|=Me;if(B=B.next,B===null){if(B=p.shared.pending,B===null)break;Me=B,B=Me.next,Me.next=null,p.lastBaseUpdate=Me,p.shared.pending=null}}while(!0);if(be===null&&(G=we),p.baseState=G,p.firstBaseUpdate=de,p.lastBaseUpdate=be,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else v===null&&(p.shared.lanes=0);hs|=A,n.lanes=A,n.memoizedState=we}}function am(n,s,o){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var io={},Fi=Pr(io),ro=Pr(io),so=Pr(io);function ds(n){if(n===io)throw Error(t(174));return n}function Uu(n,s){switch(Kt(so,s),Kt(ro,n),Kt(Fi,io),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:b(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=b(s,n)}Qt(Fi),Kt(Fi,s)}function Js(){Qt(Fi),Qt(ro),Qt(so)}function om(n){ds(so.current);var s=ds(Fi.current),o=b(s,n.type);s!==o&&(Kt(ro,n),Kt(Fi,o))}function Ou(n){ro.current===n&&(Qt(Fi),Qt(ro))}var rn=Pr(0);function yl(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fu=[];function ku(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var Sl=T.ReactCurrentDispatcher,Bu=T.ReactCurrentBatchConfig,fs=0,sn=null,gn=null,yn=null,Ml=!1,ao=!1,oo=0,W_=0;function Pn(){throw Error(t(321))}function zu(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Mi(n[o],s[o]))return!1;return!0}function Vu(n,s,o,u,p,v){if(fs=v,sn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Sl.current=n===null||n.memoizedState===null?Y_:K_,n=o(u,p),ao){v=0;do{if(ao=!1,oo=0,25<=v)throw Error(t(301));v+=1,yn=gn=null,s.updateQueue=null,Sl.current=Z_,n=o(u,p)}while(ao)}if(Sl.current=El,s=gn!==null&&gn.next!==null,fs=0,yn=gn=sn=null,Ml=!1,s)throw Error(t(300));return n}function Hu(){var n=oo!==0;return oo=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?sn.memoizedState=yn=n:yn=yn.next=n,yn}function hi(){if(gn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=gn.next;var s=yn===null?sn.memoizedState:yn.next;if(s!==null)yn=s,gn=n;else{if(n===null)throw Error(t(310));gn=n,n={memoizedState:gn.memoizedState,baseState:gn.baseState,baseQueue:gn.baseQueue,queue:gn.queue,next:null},yn===null?sn.memoizedState=yn=n:yn=yn.next=n}return yn}function lo(n,s){return typeof s=="function"?s(n):s}function Gu(n){var s=hi(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=gn,p=u.baseQueue,v=o.pending;if(v!==null){if(p!==null){var A=p.next;p.next=v.next,v.next=A}u.baseQueue=p=v,o.pending=null}if(p!==null){v=p.next,u=u.baseState;var B=A=null,G=null,de=v;do{var be=de.lane;if((fs&be)===be)G!==null&&(G=G.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:n(u,de.action);else{var we={lane:be,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};G===null?(B=G=we,A=u):G=G.next=we,sn.lanes|=be,hs|=be}de=de.next}while(de!==null&&de!==v);G===null?A=u:G.next=B,Mi(u,s.memoizedState)||(Yn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=G,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do v=p.lane,sn.lanes|=v,hs|=v,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function ju(n){var s=hi(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,v=s.memoizedState;if(p!==null){o.pending=null;var A=p=p.next;do v=n(v,A.action),A=A.next;while(A!==p);Mi(v,s.memoizedState)||(Yn=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),o.lastRenderedState=v}return[v,u]}function lm(){}function cm(n,s){var o=sn,u=hi(),p=s(),v=!Mi(u.memoizedState,p);if(v&&(u.memoizedState=p,Yn=!0),u=u.queue,Wu(fm.bind(null,o,u,n),[n]),u.getSnapshot!==s||v||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,co(9,dm.bind(null,o,u,p,s),void 0,null),Sn===null)throw Error(t(349));(fs&30)!==0||um(o,s,p)}return p}function um(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=sn.updateQueue,s===null?(s={lastEffect:null,stores:null},sn.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function dm(n,s,o,u){s.value=o,s.getSnapshot=u,hm(s)&&pm(n)}function fm(n,s,o){return o(function(){hm(s)&&pm(n)})}function hm(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Mi(n,o)}catch{return!0}}function pm(n){var s=sr(n,1);s!==null&&Ai(s,n,1,-1)}function mm(n){var s=ki();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:n},s.queue=n,n=n.dispatch=$_.bind(null,sn,n),[s.memoizedState,n]}function co(n,s,o,u){return n={tag:n,create:s,destroy:o,deps:u,next:null},s=sn.updateQueue,s===null?(s={lastEffect:null,stores:null},sn.updateQueue=s,s.lastEffect=n.next=n):(o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n)),n}function gm(){return hi().memoizedState}function bl(n,s,o,u){var p=ki();sn.flags|=n,p.memoizedState=co(1|s,o,void 0,u===void 0?null:u)}function wl(n,s,o,u){var p=hi();u=u===void 0?null:u;var v=void 0;if(gn!==null){var A=gn.memoizedState;if(v=A.destroy,u!==null&&zu(u,A.deps)){p.memoizedState=co(s,o,v,u);return}}sn.flags|=n,p.memoizedState=co(1|s,o,v,u)}function xm(n,s){return bl(8390656,8,n,s)}function Wu(n,s){return wl(2048,8,n,s)}function vm(n,s){return wl(4,2,n,s)}function _m(n,s){return wl(4,4,n,s)}function ym(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Sm(n,s,o){return o=o!=null?o.concat([n]):null,wl(4,4,ym.bind(null,s,n),o)}function Xu(){}function Mm(n,s){var o=hi();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function bm(n,s){var o=hi();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(n=n(),o.memoizedState=[n,s],n)}function wm(n,s,o){return(fs&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=o):(Mi(o,s)||(o=je(),sn.lanes|=o,hs|=o,n.baseState=!0),s)}function X_(n,s){var o=At;At=o!==0&&4>o?o:4,n(!0);var u=Bu.transition;Bu.transition={};try{n(!1),s()}finally{At=o,Bu.transition=u}}function Em(){return hi().memoizedState}function q_(n,s,o){var u=Br(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Tm(n))Am(s,o);else if(o=im(n,s,o,u),o!==null){var p=Vn();Ai(o,n,u,p),Cm(o,s,u)}}function $_(n,s,o){var u=Br(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Am(s,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var A=s.lastRenderedState,B=v(A,o);if(p.hasEagerState=!0,p.eagerState=B,Mi(B,A)){var G=s.interleaved;G===null?(p.next=p,Du(s)):(p.next=G.next,G.next=p),s.interleaved=p;return}}catch{}finally{}o=im(n,s,p,u),o!==null&&(p=Vn(),Ai(o,n,u,p),Cm(o,s,u))}}function Tm(n){var s=n.alternate;return n===sn||s!==null&&s===sn}function Am(n,s){ao=Ml=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function Cm(n,s,o){if((o&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Xn(n,o)}}var El={readContext:fi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Y_={readContext:fi,useCallback:function(n,s){return ki().memoizedState=[n,s===void 0?null:s],n},useContext:fi,useEffect:xm,useImperativeHandle:function(n,s,o){return o=o!=null?o.concat([n]):null,bl(4194308,4,ym.bind(null,s,n),o)},useLayoutEffect:function(n,s){return bl(4194308,4,n,s)},useInsertionEffect:function(n,s){return bl(4,2,n,s)},useMemo:function(n,s){var o=ki();return s=s===void 0?null:s,n=n(),o.memoizedState=[n,s],n},useReducer:function(n,s,o){var u=ki();return s=o!==void 0?o(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=q_.bind(null,sn,n),[u.memoizedState,n]},useRef:function(n){var s=ki();return n={current:n},s.memoizedState=n},useState:mm,useDebugValue:Xu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=mm(!1),s=n[0];return n=X_.bind(null,n[1]),ki().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,o){var u=sn,p=ki();if(tn){if(o===void 0)throw Error(t(407));o=o()}else{if(o=s(),Sn===null)throw Error(t(349));(fs&30)!==0||um(u,s,o)}p.memoizedState=o;var v={value:o,getSnapshot:s};return p.queue=v,xm(fm.bind(null,u,v,n),[n]),u.flags|=2048,co(9,dm.bind(null,u,v,o,s),void 0,null),o},useId:function(){var n=ki(),s=Sn.identifierPrefix;if(tn){var o=rr,u=ir;o=(u&~(1<<32-Pe(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=oo++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=W_++,s=":"+s+"r"+o.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},K_={readContext:fi,useCallback:Mm,useContext:fi,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:Gu,useRef:gm,useState:function(){return Gu(lo)},useDebugValue:Xu,useDeferredValue:function(n){var s=hi();return wm(s,gn.memoizedState,n)},useTransition:function(){var n=Gu(lo)[0],s=hi().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:Em,unstable_isNewReconciler:!1},Z_={readContext:fi,useCallback:Mm,useContext:fi,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:ju,useRef:gm,useState:function(){return ju(lo)},useDebugValue:Xu,useDeferredValue:function(n){var s=hi();return gn===null?s.memoizedState=n:wm(s,gn.memoizedState,n)},useTransition:function(){var n=ju(lo)[0],s=hi().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:Em,unstable_isNewReconciler:!1};function wi(n,s){if(n&&n.defaultProps){s=re({},s),n=n.defaultProps;for(var o in n)s[o]===void 0&&(s[o]=n[o]);return s}return s}function qu(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:re({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Tl={isMounted:function(n){return(n=n._reactInternals)?Rn(n)===n:!1},enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Vn(),p=Br(n),v=ar(u,p);v.payload=s,o!=null&&(v.callback=o),s=Ur(n,v,p),s!==null&&(Ai(s,n,p,u),vl(s,n,p))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Vn(),p=Br(n),v=ar(u,p);v.tag=1,v.payload=s,o!=null&&(v.callback=o),s=Ur(n,v,p),s!==null&&(Ai(s,n,p,u),vl(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Vn(),u=Br(n),p=ar(o,u);p.tag=2,s!=null&&(p.callback=s),s=Ur(n,p,u),s!==null&&(Ai(s,n,u,o),vl(s,n,u))}};function Rm(n,s,o,u,p,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):s.prototype&&s.prototype.isPureReactComponent?!Ya(o,u)||!Ya(p,v):!0}function Nm(n,s,o){var u=!1,p=Lr,v=s.contextType;return typeof v=="object"&&v!==null?v=fi(v):(p=$n(s)?os:Nn.current,u=s.contextTypes,v=(u=u!=null)?Ws(n,p):Lr),s=new s(o,v),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tl,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),s}function Pm(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Tl.enqueueReplaceState(s,s.state,null)}function $u(n,s,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},Iu(n);var v=s.contextType;typeof v=="object"&&v!==null?p.context=fi(v):(v=$n(s)?os:Nn.current,p.context=Ws(n,v)),p.state=n.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(qu(n,s,v,o),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Tl.enqueueReplaceState(p,p.state,null),_l(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Qs(n,s){try{var o="",u=s;do o+=He(u),u=u.return;while(u);var p=o}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:s,stack:p,digest:null}}function Yu(n,s,o){return{value:n,source:null,stack:o??null,digest:s??null}}function Ku(n,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var J_=typeof WeakMap=="function"?WeakMap:Map;function Lm(n,s,o){o=ar(-1,o),o.tag=3,o.payload={element:null};var u=s.value;return o.callback=function(){Dl||(Dl=!0,dd=u),Ku(n,s)},o}function Dm(n,s,o){o=ar(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;o.payload=function(){return u(p)},o.callback=function(){Ku(n,s)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){Ku(n,s),typeof u!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),o}function Im(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new J_;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(o)||(p.add(o),n=fy.bind(null,n,s,o),s.then(n,n))}function Um(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Om(n,s,o,u,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=ar(-1,1),s.tag=2,Ur(o,s,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Q_=T.ReactCurrentOwner,Yn=!1;function zn(n,s,o,u){s.child=n===null?nm(s,null,o,u):Ys(s,n.child,o,u)}function Fm(n,s,o,u,p){o=o.render;var v=s.ref;return Zs(s,p),u=Vu(n,s,o,u,v,p),o=Hu(),n!==null&&!Yn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,or(n,s,p)):(tn&&o&&wu(s),s.flags|=1,zn(n,s,u,p),s.child)}function km(n,s,o,u,p){if(n===null){var v=o.type;return typeof v=="function"&&!vd(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=v,Bm(n,s,v,u,p)):(n=Bl(o.type,null,u,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(v=n.child,(n.lanes&p)===0){var A=v.memoizedProps;if(o=o.compare,o=o!==null?o:Ya,o(A,u)&&n.ref===s.ref)return or(n,s,p)}return s.flags|=1,n=Vr(v,u),n.ref=s.ref,n.return=s,s.child=n}function Bm(n,s,o,u,p){if(n!==null){var v=n.memoizedProps;if(Ya(v,u)&&n.ref===s.ref)if(Yn=!1,s.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Yn=!0);else return s.lanes=n.lanes,or(n,s,p)}return Zu(n,s,o,u,p)}function zm(n,s,o){var u=s.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(ta,si),si|=o;else{if((o&1073741824)===0)return n=v!==null?v.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Kt(ta,si),si|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:o,Kt(ta,si),si|=u}else v!==null?(u=v.baseLanes|o,s.memoizedState=null):u=o,Kt(ta,si),si|=u;return zn(n,s,p,o),s.child}function Vm(n,s){var o=s.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Zu(n,s,o,u,p){var v=$n(o)?os:Nn.current;return v=Ws(s,v),Zs(s,p),o=Vu(n,s,o,u,v,p),u=Hu(),n!==null&&!Yn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,or(n,s,p)):(tn&&u&&wu(s),s.flags|=1,zn(n,s,o,p),s.child)}function Hm(n,s,o,u,p){if($n(o)){var v=!0;ul(s)}else v=!1;if(Zs(s,p),s.stateNode===null)Cl(n,s),Nm(s,o,u),$u(s,o,u,p),u=!0;else if(n===null){var A=s.stateNode,B=s.memoizedProps;A.props=B;var G=A.context,de=o.contextType;typeof de=="object"&&de!==null?de=fi(de):(de=$n(o)?os:Nn.current,de=Ws(s,de));var be=o.getDerivedStateFromProps,we=typeof be=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==u||G!==de)&&Pm(s,A,u,de),Ir=!1;var Me=s.memoizedState;A.state=Me,_l(s,u,A,p),G=s.memoizedState,B!==u||Me!==G||qn.current||Ir?(typeof be=="function"&&(qu(s,o,be,u),G=s.memoizedState),(B=Ir||Rm(s,o,B,u,Me,G,de))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=G),A.props=u,A.state=G,A.context=de,u=B):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,rm(n,s),B=s.memoizedProps,de=s.type===s.elementType?B:wi(s.type,B),A.props=de,we=s.pendingProps,Me=A.context,G=o.contextType,typeof G=="object"&&G!==null?G=fi(G):(G=$n(o)?os:Nn.current,G=Ws(s,G));var We=o.getDerivedStateFromProps;(be=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==we||Me!==G)&&Pm(s,A,u,G),Ir=!1,Me=s.memoizedState,A.state=Me,_l(s,u,A,p);var Ze=s.memoizedState;B!==we||Me!==Ze||qn.current||Ir?(typeof We=="function"&&(qu(s,o,We,u),Ze=s.memoizedState),(de=Ir||Rm(s,o,de,u,Me,Ze,G)||!1)?(be||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ze,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ze,G)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Ze),A.props=u,A.state=Ze,A.context=G,u=de):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Me===n.memoizedState||(s.flags|=1024),u=!1)}return Ju(n,s,o,u,v,p)}function Ju(n,s,o,u,p,v){Vm(n,s);var A=(s.flags&128)!==0;if(!u&&!A)return p&&qp(s,o,!1),or(n,s,v);u=s.stateNode,Q_.current=s;var B=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&A?(s.child=Ys(s,n.child,null,v),s.child=Ys(s,null,B,v)):zn(n,s,B,v),s.memoizedState=u.state,p&&qp(s,o,!0),s.child}function Gm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),Uu(n,s.containerInfo)}function jm(n,s,o,u,p){return $s(),Cu(p),s.flags|=256,zn(n,s,o,u),s.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,o){var u=s.pendingProps,p=rn.current,v=!1,A=(s.flags&128)!==0,B;if((B=A)||(B=n!==null&&n.memoizedState===null?!1:(p&2)!==0),B?(v=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Kt(rn,p&1),n===null)return Au(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=s.mode,v=s.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=zl(A,u,0,null),n=xs(n,u,o,null),v.return=s,n.return=s,v.sibling=n,s.child=v,s.child.memoizedState=ed(o),s.memoizedState=Qu,n):td(s,A));if(p=n.memoizedState,p!==null&&(B=p.dehydrated,B!==null))return ey(n,s,A,u,B,p,o);if(v){v=u.fallback,A=s.mode,p=n.child,B=p.sibling;var G={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=G,s.deletions=null):(u=Vr(p,G),u.subtreeFlags=p.subtreeFlags&14680064),B!==null?v=Vr(B,v):(v=xs(v,A,o,null),v.flags|=2),v.return=s,u.return=s,u.sibling=v,s.child=u,u=v,v=s.child,A=n.child.memoizedState,A=A===null?ed(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~o,s.memoizedState=Qu,u}return v=n.child,n=v.sibling,u=Vr(v,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=o),u.return=s,u.sibling=null,n!==null&&(o=s.deletions,o===null?(s.deletions=[n],s.flags|=16):o.push(n)),s.child=u,s.memoizedState=null,u}function td(n,s){return s=zl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Al(n,s,o,u){return u!==null&&Cu(u),Ys(s,n.child,null,o),n=td(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function ey(n,s,o,u,p,v,A){if(o)return s.flags&256?(s.flags&=-257,u=Yu(Error(t(422))),Al(n,s,A,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(v=u.fallback,p=s.mode,u=zl({mode:"visible",children:u.children},p,0,null),v=xs(v,p,A,null),v.flags|=2,u.return=s,v.return=s,u.sibling=v,s.child=u,(s.mode&1)!==0&&Ys(s,n.child,null,A),s.child.memoizedState=ed(A),s.memoizedState=Qu,v);if((s.mode&1)===0)return Al(n,s,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var B=u.dgst;return u=B,v=Error(t(419)),u=Yu(v,u,void 0),Al(n,s,A,u)}if(B=(A&n.childLanes)!==0,Yn||B){if(u=Sn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,sr(n,p),Ai(u,n,p,-1))}return xd(),u=Yu(Error(t(421))),Al(n,s,A,u)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=hy.bind(null,n),p._reactRetry=s,null):(n=v.treeContext,ri=Nr(p.nextSibling),ii=s,tn=!0,bi=null,n!==null&&(ui[di++]=ir,ui[di++]=rr,ui[di++]=ls,ir=n.id,rr=n.overflow,ls=s),s=td(s,u.children),s.flags|=4096,s)}function Xm(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Lu(n.return,s,o)}function nd(n,s,o,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=o,v.tailMode=p)}function qm(n,s,o){var u=s.pendingProps,p=u.revealOrder,v=u.tail;if(zn(n,s,u.children,o),u=rn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xm(n,o,s);else if(n.tag===19)Xm(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Kt(rn,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(o=s.child,p=null;o!==null;)n=o.alternate,n!==null&&yl(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=s.child,s.child=null):(p=o.sibling,o.sibling=null),nd(s,!1,p,o,v);break;case"backwards":for(o=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&yl(n)===null){s.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}nd(s,!0,o,null,v);break;case"together":nd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function or(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),hs|=s.lanes,(o&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,o=Vr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Vr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function ty(n,s,o){switch(s.tag){case 3:Gm(s),$s();break;case 5:om(s);break;case 1:$n(s.type)&&ul(s);break;case 4:Uu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;Kt(gl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Kt(rn,rn.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?Wm(n,s,o):(Kt(rn,rn.current&1),n=or(n,s,o),n!==null?n.sibling:null);Kt(rn,rn.current&1);break;case 19:if(u=(o&s.childLanes)!==0,(n.flags&128)!==0){if(u)return qm(n,s,o);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Kt(rn,rn.current),u)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,o)}return or(n,s,o)}var $m,id,Ym,Km;$m=function(n,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},id=function(){},Ym=function(n,s,o,u){var p=n.memoizedProps;if(p!==u){n=s.stateNode,ds(Fi.current);var v=null;switch(o){case"input":p=at(n,p),u=at(n,u),v=[];break;case"select":p=re({},p,{value:void 0}),u=re({},u,{value:void 0}),v=[];break;case"textarea":p=Ft(n,p),u=Ft(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ol)}Qe(o,u);var A;o=null;for(de in p)if(!u.hasOwnProperty(de)&&p.hasOwnProperty(de)&&p[de]!=null)if(de==="style"){var B=p[de];for(A in B)B.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(a.hasOwnProperty(de)?v||(v=[]):(v=v||[]).push(de,null));for(de in u){var G=u[de];if(B=p!=null?p[de]:void 0,u.hasOwnProperty(de)&&G!==B&&(G!=null||B!=null))if(de==="style")if(B){for(A in B)!B.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in G)G.hasOwnProperty(A)&&B[A]!==G[A]&&(o||(o={}),o[A]=G[A])}else o||(v||(v=[]),v.push(de,o)),o=G;else de==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,B=B?B.__html:void 0,G!=null&&B!==G&&(v=v||[]).push(de,G)):de==="children"?typeof G!="string"&&typeof G!="number"||(v=v||[]).push(de,""+G):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(a.hasOwnProperty(de)?(G!=null&&de==="onScroll"&&Jt("scroll",n),v||B===G||(v=[])):(v=v||[]).push(de,G))}o&&(v=v||[]).push("style",o);var de=v;(s.updateQueue=de)&&(s.flags|=4)}},Km=function(n,s,o,u){o!==u&&(s.flags|=4)};function uo(n,s){if(!tn)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ln(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function ny(n,s,o){var u=s.pendingProps;switch(Eu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(s),null;case 1:return $n(s.type)&&cl(),Ln(s),null;case 3:return u=s.stateNode,Js(),Qt(qn),Qt(Nn),ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(pl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,bi!==null&&(pd(bi),bi=null))),id(n,s),Ln(s),null;case 5:Ou(s);var p=ds(so.current);if(o=s.type,n!==null&&s.stateNode!=null)Ym(n,s,o,u,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Ln(s),null}if(n=ds(Fi.current),pl(s)){u=s.stateNode,o=s.type;var v=s.memoizedProps;switch(u[Oi]=s,u[eo]=v,n=(s.mode&1)!==0,o){case"dialog":Jt("cancel",u),Jt("close",u);break;case"iframe":case"object":case"embed":Jt("load",u);break;case"video":case"audio":for(p=0;p<Za.length;p++)Jt(Za[p],u);break;case"source":Jt("error",u);break;case"img":case"image":case"link":Jt("error",u),Jt("load",u);break;case"details":Jt("toggle",u);break;case"input":ut(u,v),Jt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},Jt("invalid",u);break;case"textarea":F(u,v),Jt("invalid",u)}Qe(o,v),p=null;for(var A in v)if(v.hasOwnProperty(A)){var B=v[A];A==="children"?typeof B=="string"?u.textContent!==B&&(v.suppressHydrationWarning!==!0&&al(u.textContent,B,n),p=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(v.suppressHydrationWarning!==!0&&al(u.textContent,B,n),p=["children",""+B]):a.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&Jt("scroll",u)}switch(o){case"input":Je(u),yt(u,v,!0);break;case"textarea":Je(u),Ge(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=ol)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=D(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[Oi]=s,n[eo]=u,$m(n,s,!1,!1),s.stateNode=n;e:{switch(A=Oe(o,u),o){case"dialog":Jt("cancel",n),Jt("close",n),p=u;break;case"iframe":case"object":case"embed":Jt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Za.length;p++)Jt(Za[p],n);p=u;break;case"source":Jt("error",n),p=u;break;case"img":case"image":case"link":Jt("error",n),Jt("load",n),p=u;break;case"details":Jt("toggle",n),p=u;break;case"input":ut(n,u),p=at(n,u),Jt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=re({},u,{value:void 0}),Jt("invalid",n);break;case"textarea":F(n,u),p=Ft(n,u),Jt("invalid",n);break;default:p=u}Qe(o,p),B=p;for(v in B)if(B.hasOwnProperty(v)){var G=B[v];v==="style"?_e(n,G):v==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&se(n,G)):v==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&pe(n,G):typeof G=="number"&&pe(n,""+G):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?G!=null&&v==="onScroll"&&Jt("scroll",n):G!=null&&P(n,v,G,A))}switch(o){case"input":Je(n),yt(n,u,!1);break;case"textarea":Je(n),Ge(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ge(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Ot(n,!!u.multiple,v,!1):u.defaultValue!=null&&Ot(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ol)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ln(s),null;case 6:if(n&&s.stateNode!=null)Km(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(o=ds(so.current),ds(Fi.current),pl(s)){if(u=s.stateNode,o=s.memoizedProps,u[Oi]=s,(v=u.nodeValue!==o)&&(n=ii,n!==null))switch(n.tag){case 3:al(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&al(u.nodeValue,o,(n.mode&1)!==0)}v&&(s.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Oi]=s,s.stateNode=u}return Ln(s),null;case 13:if(Qt(rn),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(tn&&ri!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qp(),$s(),s.flags|=98560,v=!1;else if(v=pl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Oi]=s}else $s(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ln(s),v=!1}else bi!==null&&(pd(bi),bi=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(rn.current&1)!==0?xn===0&&(xn=3):xd())),s.updateQueue!==null&&(s.flags|=4),Ln(s),null);case 4:return Js(),id(n,s),n===null&&Ja(s.stateNode.containerInfo),Ln(s),null;case 10:return Pu(s.type._context),Ln(s),null;case 17:return $n(s.type)&&cl(),Ln(s),null;case 19:if(Qt(rn),v=s.memoizedState,v===null)return Ln(s),null;if(u=(s.flags&128)!==0,A=v.rendering,A===null)if(u)uo(v,!1);else{if(xn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=yl(n),A!==null){for(s.flags|=128,uo(v,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=o,o=s.child;o!==null;)v=o,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Kt(rn,rn.current&1|2),s.child}n=n.sibling}v.tail!==null&&nn()>na&&(s.flags|=128,u=!0,uo(v,!1),s.lanes=4194304)}else{if(!u)if(n=yl(A),n!==null){if(s.flags|=128,u=!0,o=n.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),uo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!tn)return Ln(s),null}else 2*nn()-v.renderingStartTime>na&&o!==1073741824&&(s.flags|=128,u=!0,uo(v,!1),s.lanes=4194304);v.isBackwards?(A.sibling=s.child,s.child=A):(o=v.last,o!==null?o.sibling=A:s.child=A,v.last=A)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=nn(),s.sibling=null,o=rn.current,Kt(rn,u?o&1|2:o&1),s):(Ln(s),null);case 22:case 23:return gd(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(si&1073741824)!==0&&(Ln(s),s.subtreeFlags&6&&(s.flags|=8192)):Ln(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function iy(n,s){switch(Eu(s),s.tag){case 1:return $n(s.type)&&cl(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return Js(),Qt(qn),Qt(Nn),ku(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Ou(s),null;case 13:if(Qt(rn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));$s()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Qt(rn),null;case 4:return Js(),null;case 10:return Pu(s.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Rl=!1,Dn=!1,ry=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ea(n,s){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){cn(n,s,u)}else o.current=null}function rd(n,s,o){try{o()}catch(u){cn(n,s,u)}}var Zm=!1;function sy(n,s){if(gu=Yo,n=Rp(),lu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var A=0,B=-1,G=-1,de=0,be=0,we=n,Me=null;t:for(;;){for(var We;we!==o||p!==0&&we.nodeType!==3||(B=A+p),we!==v||u!==0&&we.nodeType!==3||(G=A+u),we.nodeType===3&&(A+=we.nodeValue.length),(We=we.firstChild)!==null;)Me=we,we=We;for(;;){if(we===n)break t;if(Me===o&&++de===p&&(B=A),Me===v&&++be===u&&(G=A),(We=we.nextSibling)!==null)break;we=Me,Me=we.parentNode}we=We}o=B===-1||G===-1?null:{start:B,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},Yo=!1,Ye=s;Ye!==null;)if(s=Ye,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ye=n;else for(;Ye!==null;){s=Ye;try{var Ze=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var nt=Ze.memoizedProps,un=Ze.memoizedState,ee=s.stateNode,X=ee.getSnapshotBeforeUpdate(s.elementType===s.type?nt:wi(s.type,nt),un);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){cn(s,s.return,Ce)}if(n=s.sibling,n!==null){n.return=s.return,Ye=n;break}Ye=s.return}return Ze=Zm,Zm=!1,Ze}function fo(n,s,o){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&rd(s,o,v)}p=p.next}while(p!==u)}}function Nl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==s)}}function sd(n){var s=n.ref;if(s!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof s=="function"?s(n):s.current=n}}function Jm(n){var s=n.alternate;s!==null&&(n.alternate=null,Jm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Oi],delete s[eo],delete s[Su],delete s[V_],delete s[H_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qm(n){return n.tag===5||n.tag===3||n.tag===4}function e0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(n,s):o.insertBefore(n,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(n,o)):(s=o,s.appendChild(n)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ol));else if(u!==4&&(n=n.child,n!==null))for(ad(n,s,o),n=n.sibling;n!==null;)ad(n,s,o),n=n.sibling}function od(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(od(n,s,o),n=n.sibling;n!==null;)od(n,s,o),n=n.sibling}var En=null,Ei=!1;function Or(n,s,o){for(o=o.child;o!==null;)t0(n,s,o),o=o.sibling}function t0(n,s,o){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(ne,o)}catch{}switch(o.tag){case 5:Dn||ea(o,s);case 6:var u=En,p=Ei;En=null,Or(n,s,o),En=u,Ei=p,En!==null&&(Ei?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(Ei?(n=En,o=o.stateNode,n.nodeType===8?yu(n.parentNode,o):n.nodeType===1&&yu(n,o),Ga(n)):yu(En,o.stateNode));break;case 4:u=En,p=Ei,En=o.stateNode.containerInfo,Ei=!0,Or(n,s,o),En=u,Ei=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&rd(o,s,A),p=p.next}while(p!==u)}Or(n,s,o);break;case 1:if(!Dn&&(ea(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){cn(o,s,B)}Or(n,s,o);break;case 21:Or(n,s,o);break;case 22:o.mode&1?(Dn=(u=Dn)||o.memoizedState!==null,Or(n,s,o),Dn=u):Or(n,s,o);break;default:Or(n,s,o)}}function n0(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new ry),s.forEach(function(u){var p=py.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function Ti(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var v=n,A=s,B=A;e:for(;B!==null;){switch(B.tag){case 5:En=B.stateNode,Ei=!1;break e;case 3:En=B.stateNode.containerInfo,Ei=!0;break e;case 4:En=B.stateNode.containerInfo,Ei=!0;break e}B=B.return}if(En===null)throw Error(t(160));t0(v,A,p),En=null,Ei=!1;var G=p.alternate;G!==null&&(G.return=null),p.return=null}catch(de){cn(p,s,de)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)i0(s,n),s=s.sibling}function i0(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ti(s,n),Bi(n),u&4){try{fo(3,n,n.return),Nl(3,n)}catch(nt){cn(n,n.return,nt)}try{fo(5,n,n.return)}catch(nt){cn(n,n.return,nt)}}break;case 1:Ti(s,n),Bi(n),u&512&&o!==null&&ea(o,o.return);break;case 5:if(Ti(s,n),Bi(n),u&512&&o!==null&&ea(o,o.return),n.flags&32){var p=n.stateNode;try{pe(p,"")}catch(nt){cn(n,n.return,nt)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,A=o!==null?o.memoizedProps:v,B=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{B==="input"&&v.type==="radio"&&v.name!=null&&Re(p,v),Oe(B,A);var de=Oe(B,v);for(A=0;A<G.length;A+=2){var be=G[A],we=G[A+1];be==="style"?_e(p,we):be==="dangerouslySetInnerHTML"?se(p,we):be==="children"?pe(p,we):P(p,be,we,de)}switch(B){case"input":mt(p,v);break;case"textarea":rt(p,v);break;case"select":var Me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var We=v.value;We!=null?Ot(p,!!v.multiple,We,!1):Me!==!!v.multiple&&(v.defaultValue!=null?Ot(p,!!v.multiple,v.defaultValue,!0):Ot(p,!!v.multiple,v.multiple?[]:"",!1))}p[eo]=v}catch(nt){cn(n,n.return,nt)}}break;case 6:if(Ti(s,n),Bi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(nt){cn(n,n.return,nt)}}break;case 3:if(Ti(s,n),Bi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ga(s.containerInfo)}catch(nt){cn(n,n.return,nt)}break;case 4:Ti(s,n),Bi(n);break;case 13:Ti(s,n),Bi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(ud=nn())),u&4&&n0(n);break;case 22:if(be=o!==null&&o.memoizedState!==null,n.mode&1?(Dn=(de=Dn)||be,Ti(s,n),Dn=de):Ti(s,n),Bi(n),u&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!be&&(n.mode&1)!==0)for(Ye=n,be=n.child;be!==null;){for(we=Ye=be;Ye!==null;){switch(Me=Ye,We=Me.child,Me.tag){case 0:case 11:case 14:case 15:fo(4,Me,Me.return);break;case 1:ea(Me,Me.return);var Ze=Me.stateNode;if(typeof Ze.componentWillUnmount=="function"){u=Me,o=Me.return;try{s=u,Ze.props=s.memoizedProps,Ze.state=s.memoizedState,Ze.componentWillUnmount()}catch(nt){cn(u,o,nt)}}break;case 5:ea(Me,Me.return);break;case 22:if(Me.memoizedState!==null){a0(we);continue}}We!==null?(We.return=Me,Ye=We):a0(we)}be=be.sibling}e:for(be=null,we=n;;){if(we.tag===5){if(be===null){be=we;try{p=we.stateNode,de?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(B=we.stateNode,G=we.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,B.style.display=me("display",A))}catch(nt){cn(n,n.return,nt)}}}else if(we.tag===6){if(be===null)try{we.stateNode.nodeValue=de?"":we.memoizedProps}catch(nt){cn(n,n.return,nt)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;be===we&&(be=null),we=we.return}be===we&&(be=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ti(s,n),Bi(n),u&4&&n0(n);break;case 21:break;default:Ti(s,n),Bi(n)}}function Bi(n){var s=n.flags;if(s&2){try{e:{for(var o=n.return;o!==null;){if(Qm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(pe(p,""),u.flags&=-33);var v=e0(n);od(n,v,p);break;case 3:case 4:var A=u.stateNode.containerInfo,B=e0(n);ad(n,B,A);break;default:throw Error(t(161))}}catch(G){cn(n,n.return,G)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function ay(n,s,o){Ye=n,r0(n)}function r0(n,s,o){for(var u=(n.mode&1)!==0;Ye!==null;){var p=Ye,v=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Rl;if(!A){var B=p.alternate,G=B!==null&&B.memoizedState!==null||Dn;B=Rl;var de=Dn;if(Rl=A,(Dn=G)&&!de)for(Ye=p;Ye!==null;)A=Ye,G=A.child,A.tag===22&&A.memoizedState!==null?o0(p):G!==null?(G.return=A,Ye=G):o0(p);for(;v!==null;)Ye=v,r0(v),v=v.sibling;Ye=p,Rl=B,Dn=de}s0(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,Ye=v):s0(n)}}function s0(n){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||Nl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Dn)if(o===null)u.componentDidMount();else{var p=s.elementType===s.type?o.memoizedProps:wi(s.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&am(s,v,u);break;case 3:var A=s.updateQueue;if(A!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}am(s,A,o)}break;case 5:var B=s.stateNode;if(o===null&&s.flags&4){o=B;var G=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var de=s.alternate;if(de!==null){var be=de.memoizedState;if(be!==null){var we=be.dehydrated;we!==null&&Ga(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&sd(s)}catch(Me){cn(s,s.return,Me)}}if(s===n){Ye=null;break}if(o=s.sibling,o!==null){o.return=s.return,Ye=o;break}Ye=s.return}}function a0(n){for(;Ye!==null;){var s=Ye;if(s===n){Ye=null;break}var o=s.sibling;if(o!==null){o.return=s.return,Ye=o;break}Ye=s.return}}function o0(n){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{Nl(4,s)}catch(G){cn(s,o,G)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(G){cn(s,p,G)}}var v=s.return;try{sd(s)}catch(G){cn(s,v,G)}break;case 5:var A=s.return;try{sd(s)}catch(G){cn(s,A,G)}}}catch(G){cn(s,s.return,G)}if(s===n){Ye=null;break}var B=s.sibling;if(B!==null){B.return=s.return,Ye=B;break}Ye=s.return}}var oy=Math.ceil,Pl=T.ReactCurrentDispatcher,ld=T.ReactCurrentOwner,pi=T.ReactCurrentBatchConfig,Bt=0,Sn=null,pn=null,Tn=0,si=0,ta=Pr(0),xn=0,ho=null,hs=0,Ll=0,cd=0,po=null,Kn=null,ud=0,na=1/0,lr=null,Dl=!1,dd=null,Fr=null,Il=!1,kr=null,Ul=0,mo=0,fd=null,Ol=-1,Fl=0;function Vn(){return(Bt&6)!==0?nn():Ol!==-1?Ol:Ol=nn()}function Br(n){return(n.mode&1)===0?1:(Bt&2)!==0&&Tn!==0?Tn&-Tn:j_.transition!==null?(Fl===0&&(Fl=je()),Fl):(n=At,n!==0||(n=window.event,n=n===void 0?16:cp(n.type)),n)}function Ai(n,s,o,u){if(50<mo)throw mo=0,fd=null,Error(t(185));wt(n,o,u),((Bt&2)===0||n!==Sn)&&(n===Sn&&((Bt&2)===0&&(Ll|=o),xn===4&&zr(n,Tn)),Zn(n,u),o===1&&Bt===0&&(s.mode&1)===0&&(na=nn()+500,dl&&Dr()))}function Zn(n,s){var o=n.callbackNode;Wt(n,s);var u=Yt(n,n===Sn?Tn:0);if(u===0)o!==null&&Fa(o),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(o!=null&&Fa(o),s===1)n.tag===0?G_(c0.bind(null,n)):$p(c0.bind(null,n)),B_(function(){(Bt&6)===0&&Dr()}),o=null;else{switch(er(u)){case 1:o=ka;break;case 4:o=N;break;case 16:o=Y;break;case 536870912:o=ie;break;default:o=Y}o=x0(o,l0.bind(null,n))}n.callbackPriority=s,n.callbackNode=o}}function l0(n,s){if(Ol=-1,Fl=0,(Bt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(ia()&&n.callbackNode!==o)return null;var u=Yt(n,n===Sn?Tn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=kl(n,u);else{s=u;var p=Bt;Bt|=2;var v=d0();(Sn!==n||Tn!==s)&&(lr=null,na=nn()+500,ms(n,s));do try{uy();break}catch(B){u0(n,B)}while(!0);Nu(),Pl.current=v,Bt=p,pn!==null?s=0:(Sn=null,Tn=0,s=xn)}if(s!==0){if(s===2&&(p=hn(n),p!==0&&(u=p,s=hd(n,p))),s===1)throw o=ho,ms(n,0),zr(n,u),Zn(n,nn()),o;if(s===6)zr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!ly(p)&&(s=kl(n,u),s===2&&(v=hn(n),v!==0&&(u=v,s=hd(n,v))),s===1))throw o=ho,ms(n,0),zr(n,u),Zn(n,nn()),o;switch(n.finishedWork=p,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:gs(n,Kn,lr);break;case 3:if(zr(n,u),(u&130023424)===u&&(s=ud+500-nn(),10<s)){if(Yt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Vn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=_u(gs.bind(null,n,Kn,lr),s);break}gs(n,Kn,lr);break;case 4:if(zr(n,u),(u&4194240)===u)break;for(s=n.eventTimes,p=-1;0<u;){var A=31-Pe(u);v=1<<A,A=s[A],A>p&&(p=A),u&=~v}if(u=p,u=nn()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*oy(u/1960))-u,10<u){n.timeoutHandle=_u(gs.bind(null,n,Kn,lr),u);break}gs(n,Kn,lr);break;case 5:gs(n,Kn,lr);break;default:throw Error(t(329))}}}return Zn(n,nn()),n.callbackNode===o?l0.bind(null,n):null}function hd(n,s){var o=po;return n.current.memoizedState.isDehydrated&&(ms(n,s).flags|=256),n=kl(n,s),n!==2&&(s=Kn,Kn=o,s!==null&&pd(s)),n}function pd(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function ly(n){for(var s=n;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],v=p.getSnapshot;p=p.value;try{if(!Mi(v(),p))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function zr(n,s){for(s&=~cd,s&=~Ll,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var o=31-Pe(s),u=1<<o;n[o]=-1,s&=~u}}function c0(n){if((Bt&6)!==0)throw Error(t(327));ia();var s=Yt(n,0);if((s&1)===0)return Zn(n,nn()),null;var o=kl(n,s);if(n.tag!==0&&o===2){var u=hn(n);u!==0&&(s=u,o=hd(n,u))}if(o===1)throw o=ho,ms(n,0),zr(n,s),Zn(n,nn()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,gs(n,Kn,lr),Zn(n,nn()),null}function md(n,s){var o=Bt;Bt|=1;try{return n(s)}finally{Bt=o,Bt===0&&(na=nn()+500,dl&&Dr())}}function ps(n){kr!==null&&kr.tag===0&&(Bt&6)===0&&ia();var s=Bt;Bt|=1;var o=pi.transition,u=At;try{if(pi.transition=null,At=1,n)return n()}finally{At=u,pi.transition=o,Bt=s,(Bt&6)===0&&Dr()}}function gd(){si=ta.current,Qt(ta)}function ms(n,s){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,k_(o)),pn!==null)for(o=pn.return;o!==null;){var u=o;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&cl();break;case 3:Js(),Qt(qn),Qt(Nn),ku();break;case 5:Ou(u);break;case 4:Js();break;case 13:Qt(rn);break;case 19:Qt(rn);break;case 10:Pu(u.type._context);break;case 22:case 23:gd()}o=o.return}if(Sn=n,pn=n=Vr(n.current,null),Tn=si=s,xn=0,ho=null,cd=Ll=hs=0,Kn=po=null,us!==null){for(s=0;s<us.length;s++)if(o=us[s],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,v=o.pending;if(v!==null){var A=v.next;v.next=p,u.next=A}o.pending=u}us=null}return n}function u0(n,s){do{var o=pn;try{if(Nu(),Sl.current=El,Ml){for(var u=sn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Ml=!1}if(fs=0,yn=gn=sn=null,ao=!1,oo=0,ld.current=null,o===null||o.return===null){xn=1,ho=s,pn=null;break}e:{var v=n,A=o.return,B=o,G=s;if(s=Tn,B.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var de=G,be=B,we=be.tag;if((be.mode&1)===0&&(we===0||we===11||we===15)){var Me=be.alternate;Me?(be.updateQueue=Me.updateQueue,be.memoizedState=Me.memoizedState,be.lanes=Me.lanes):(be.updateQueue=null,be.memoizedState=null)}var We=Um(A);if(We!==null){We.flags&=-257,Om(We,A,B,v,s),We.mode&1&&Im(v,de,s),s=We,G=de;var Ze=s.updateQueue;if(Ze===null){var nt=new Set;nt.add(G),s.updateQueue=nt}else Ze.add(G);break e}else{if((s&1)===0){Im(v,de,s),xd();break e}G=Error(t(426))}}else if(tn&&B.mode&1){var un=Um(A);if(un!==null){(un.flags&65536)===0&&(un.flags|=256),Om(un,A,B,v,s),Cu(Qs(G,B));break e}}v=G=Qs(G,B),xn!==4&&(xn=2),po===null?po=[v]:po.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var ee=Lm(v,G,s);sm(v,ee);break e;case 1:B=G;var X=v.type,ae=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Fr===null||!Fr.has(ae)))){v.flags|=65536,s&=-s,v.lanes|=s;var Ce=Dm(v,B,s);sm(v,Ce);break e}}v=v.return}while(v!==null)}h0(o)}catch(st){s=st,pn===o&&o!==null&&(pn=o=o.return);continue}break}while(!0)}function d0(){var n=Pl.current;return Pl.current=El,n===null?El:n}function xd(){(xn===0||xn===3||xn===2)&&(xn=4),Sn===null||(hs&268435455)===0&&(Ll&268435455)===0||zr(Sn,Tn)}function kl(n,s){var o=Bt;Bt|=2;var u=d0();(Sn!==n||Tn!==s)&&(lr=null,ms(n,s));do try{cy();break}catch(p){u0(n,p)}while(!0);if(Nu(),Bt=o,Pl.current=u,pn!==null)throw Error(t(261));return Sn=null,Tn=0,xn}function cy(){for(;pn!==null;)f0(pn)}function uy(){for(;pn!==null&&!qo();)f0(pn)}function f0(n){var s=g0(n.alternate,n,si);n.memoizedProps=n.pendingProps,s===null?h0(n):pn=s,ld.current=null}function h0(n){var s=n;do{var o=s.alternate;if(n=s.return,(s.flags&32768)===0){if(o=ny(o,s,si),o!==null){pn=o;return}}else{if(o=iy(o,s),o!==null){o.flags&=32767,pn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{xn=6,pn=null;return}}if(s=s.sibling,s!==null){pn=s;return}pn=s=n}while(s!==null);xn===0&&(xn=5)}function gs(n,s,o){var u=At,p=pi.transition;try{pi.transition=null,At=1,dy(n,s,o,u)}finally{pi.transition=p,At=u}return null}function dy(n,s,o,u){do ia();while(kr!==null);if((Bt&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=o.lanes|o.childLanes;if(Wn(n,v),n===Sn&&(pn=Sn=null,Tn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Il||(Il=!0,x0(Y,function(){return ia(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=pi.transition,pi.transition=null;var A=At;At=1;var B=Bt;Bt|=4,ld.current=null,sy(n,o),i0(o,n),P_(xu),Yo=!!gu,xu=gu=null,n.current=o,ay(o),Yc(),Bt=B,At=A,pi.transition=v}else n.current=o;if(Il&&(Il=!1,kr=n,Ul=p),v=n.pendingLanes,v===0&&(Fr=null),Xe(o.stateNode),Zn(n,nn()),s!==null)for(u=n.onRecoverableError,o=0;o<s.length;o++)p=s[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(Dl)throw Dl=!1,n=dd,dd=null,n;return(Ul&1)!==0&&n.tag!==0&&ia(),v=n.pendingLanes,(v&1)!==0?n===fd?mo++:(mo=0,fd=n):mo=0,Dr(),null}function ia(){if(kr!==null){var n=er(Ul),s=pi.transition,o=At;try{if(pi.transition=null,At=16>n?16:n,kr===null)var u=!1;else{if(n=kr,kr=null,Ul=0,(Bt&6)!==0)throw Error(t(331));var p=Bt;for(Bt|=4,Ye=n.current;Ye!==null;){var v=Ye,A=v.child;if((Ye.flags&16)!==0){var B=v.deletions;if(B!==null){for(var G=0;G<B.length;G++){var de=B[G];for(Ye=de;Ye!==null;){var be=Ye;switch(be.tag){case 0:case 11:case 15:fo(8,be,v)}var we=be.child;if(we!==null)we.return=be,Ye=we;else for(;Ye!==null;){be=Ye;var Me=be.sibling,We=be.return;if(Jm(be),be===de){Ye=null;break}if(Me!==null){Me.return=We,Ye=Me;break}Ye=We}}}var Ze=v.alternate;if(Ze!==null){var nt=Ze.child;if(nt!==null){Ze.child=null;do{var un=nt.sibling;nt.sibling=null,nt=un}while(nt!==null)}}Ye=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Ye=A;else e:for(;Ye!==null;){if(v=Ye,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:fo(9,v,v.return)}var ee=v.sibling;if(ee!==null){ee.return=v.return,Ye=ee;break e}Ye=v.return}}var X=n.current;for(Ye=X;Ye!==null;){A=Ye;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,Ye=ae;else e:for(A=X;Ye!==null;){if(B=Ye,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Nl(9,B)}}catch(st){cn(B,B.return,st)}if(B===A){Ye=null;break e}var Ce=B.sibling;if(Ce!==null){Ce.return=B.return,Ye=Ce;break e}Ye=B.return}}if(Bt=p,Dr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(ne,n)}catch{}u=!0}return u}finally{At=o,pi.transition=s}}return!1}function p0(n,s,o){s=Qs(o,s),s=Lm(n,s,1),n=Ur(n,s,1),s=Vn(),n!==null&&(wt(n,1,s),Zn(n,s))}function cn(n,s,o){if(n.tag===3)p0(n,n,o);else for(;s!==null;){if(s.tag===3){p0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Fr===null||!Fr.has(u))){n=Qs(o,n),n=Dm(s,n,1),s=Ur(s,n,1),n=Vn(),s!==null&&(wt(s,1,n),Zn(s,n));break}}s=s.return}}function fy(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),s=Vn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(Tn&o)===o&&(xn===4||xn===3&&(Tn&130023424)===Tn&&500>nn()-ud?ms(n,0):cd|=o),Zn(n,s)}function m0(n,s){s===0&&((n.mode&1)===0?s=1:(s=it,it<<=1,(it&130023424)===0&&(it=4194304)));var o=Vn();n=sr(n,s),n!==null&&(wt(n,s,o),Zn(n,o))}function hy(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),m0(n,o)}function py(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),m0(n,o)}var g0;g0=function(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps||qn.current)Yn=!0;else{if((n.lanes&o)===0&&(s.flags&128)===0)return Yn=!1,ty(n,s,o);Yn=(n.flags&131072)!==0}else Yn=!1,tn&&(s.flags&1048576)!==0&&Yp(s,hl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Cl(n,s),n=s.pendingProps;var p=Ws(s,Nn.current);Zs(s,o),p=Vu(null,s,u,n,p,o);var v=Hu();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,$n(u)?(v=!0,ul(s)):v=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Iu(s),p.updater=Tl,s.stateNode=p,p._reactInternals=s,$u(s,u,n,o),s=Ju(null,s,u,!0,v,o)):(s.tag=0,tn&&v&&wu(s),zn(null,s,p,o),s=s.child),s;case 16:u=s.elementType;e:{switch(Cl(n,s),n=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=gy(u),n=wi(u,n),p){case 0:s=Zu(null,s,u,n,o);break e;case 1:s=Hm(null,s,u,n,o);break e;case 11:s=Fm(null,s,u,n,o);break e;case 14:s=km(null,s,u,wi(u.type,n),o);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:wi(u,p),Zu(n,s,u,p,o);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:wi(u,p),Hm(n,s,u,p,o);case 3:e:{if(Gm(s),n===null)throw Error(t(387));u=s.pendingProps,v=s.memoizedState,p=v.element,rm(n,s),_l(s,u,null,o);var A=s.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){p=Qs(Error(t(423)),s),s=jm(n,s,u,o,p);break e}else if(u!==p){p=Qs(Error(t(424)),s),s=jm(n,s,u,o,p);break e}else for(ri=Nr(s.stateNode.containerInfo.firstChild),ii=s,tn=!0,bi=null,o=nm(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if($s(),u===p){s=or(n,s,o);break e}zn(n,s,u,o)}s=s.child}return s;case 5:return om(s),n===null&&Au(s),u=s.type,p=s.pendingProps,v=n!==null?n.memoizedProps:null,A=p.children,vu(u,p)?A=null:v!==null&&vu(u,v)&&(s.flags|=32),Vm(n,s),zn(n,s,A,o),s.child;case 6:return n===null&&Au(s),null;case 13:return Wm(n,s,o);case 4:return Uu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Ys(s,null,u,o):zn(n,s,u,o),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:wi(u,p),Fm(n,s,u,p,o);case 7:return zn(n,s,s.pendingProps,o),s.child;case 8:return zn(n,s,s.pendingProps.children,o),s.child;case 12:return zn(n,s,s.pendingProps.children,o),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,v=s.memoizedProps,A=p.value,Kt(gl,u._currentValue),u._currentValue=A,v!==null)if(Mi(v.value,A)){if(v.children===p.children&&!qn.current){s=or(n,s,o);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var B=v.dependencies;if(B!==null){A=v.child;for(var G=B.firstContext;G!==null;){if(G.context===u){if(v.tag===1){G=ar(-1,o&-o),G.tag=2;var de=v.updateQueue;if(de!==null){de=de.shared;var be=de.pending;be===null?G.next=G:(G.next=be.next,be.next=G),de.pending=G}}v.lanes|=o,G=v.alternate,G!==null&&(G.lanes|=o),Lu(v.return,o,s),B.lanes|=o;break}G=G.next}}else if(v.tag===10)A=v.type===s.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=o,B=A.alternate,B!==null&&(B.lanes|=o),Lu(A,o,s),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===s){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}zn(n,s,p.children,o),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,Zs(s,o),p=fi(p),u=u(p),s.flags|=1,zn(n,s,u,o),s.child;case 14:return u=s.type,p=wi(u,s.pendingProps),p=wi(u.type,p),km(n,s,u,p,o);case 15:return Bm(n,s,s.type,s.pendingProps,o);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:wi(u,p),Cl(n,s),s.tag=1,$n(u)?(n=!0,ul(s)):n=!1,Zs(s,o),Nm(s,u,p),$u(s,u,p,o),Ju(null,s,u,!0,n,o);case 19:return qm(n,s,o);case 22:return zm(n,s,o)}throw Error(t(156,s.tag))};function x0(n,s){return rs(n,s)}function my(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,s,o,u){return new my(n,s,o,u)}function vd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function gy(n){if(typeof n=="function")return vd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===q)return 14}return 2}function Vr(n,s){var o=n.alternate;return o===null?(o=mi(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Bl(n,s,o,u,p,v){var A=2;if(u=n,typeof n=="function")vd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return xs(o.children,p,v,s);case w:A=8,p|=8;break;case U:return n=mi(12,o,s,p|2),n.elementType=U,n.lanes=v,n;case ce:return n=mi(13,o,s,p),n.elementType=ce,n.lanes=v,n;case he:return n=mi(19,o,s,p),n.elementType=he,n.lanes=v,n;case Q:return zl(o,p,v,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:A=10;break e;case V:A=9;break e;case Z:A=11;break e;case q:A=14;break e;case fe:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=mi(A,o,s,p),s.elementType=n,s.type=u,s.lanes=v,s}function xs(n,s,o,u){return n=mi(7,n,u,s),n.lanes=o,n}function zl(n,s,o,u){return n=mi(22,n,u,s),n.elementType=Q,n.lanes=o,n.stateNode={isHidden:!1},n}function _d(n,s,o){return n=mi(6,n,null,s),n.lanes=o,n}function yd(n,s,o){return s=mi(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function xy(n,s,o,u,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wn(0),this.expirationTimes=wn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Sd(n,s,o,u,p,v,A,B,G){return n=new xy(n,s,o,B,G),s===1?(s=1,v===!0&&(s|=8)):s=0,v=mi(3,null,null,s),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(v),n}function vy(n,s,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:u==null?null:""+u,children:n,containerInfo:s,implementation:o}}function v0(n){if(!n)return Lr;n=n._reactInternals;e:{if(Rn(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if($n(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if($n(o))return Xp(n,o,s)}return s}function _0(n,s,o,u,p,v,A,B,G){return n=Sd(o,u,!0,n,p,v,A,B,G),n.context=v0(null),o=n.current,u=Vn(),p=Br(o),v=ar(u,p),v.callback=s??null,Ur(o,v,p),n.current.lanes=p,wt(n,p,u),Zn(n,u),n}function Vl(n,s,o,u){var p=s.current,v=Vn(),A=Br(p);return o=v0(o),s.context===null?s.context=o:s.pendingContext=o,s=ar(v,A),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Ur(p,s,A),n!==null&&(Ai(n,p,A,v),vl(n,p,A)),A}function Hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function y0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Md(n,s){y0(n,s),(n=n.alternate)&&y0(n,s)}function _y(){return null}var S0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bd(n){this._internalRoot=n}Gl.prototype.render=bd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Vl(n,s,null,null)},Gl.prototype.unmount=bd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ps(function(){Vl(null,n,null,null)}),s[tr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Xt();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Ar.length&&s!==0&&s<Ar[o].priority;o++);Ar.splice(o,0,n),o===0&&op(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function jl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function M0(){}function yy(n,s,o,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var de=Hl(A);v.call(de)}}var A=_0(s,u,n,0,null,!1,!1,"",M0);return n._reactRootContainer=A,n[tr]=A.current,Ja(n.nodeType===8?n.parentNode:n),ps(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var B=u;u=function(){var de=Hl(G);B.call(de)}}var G=Sd(n,0,!1,null,null,!1,!1,"",M0);return n._reactRootContainer=G,n[tr]=G.current,Ja(n.nodeType===8?n.parentNode:n),ps(function(){Vl(s,G,o,u)}),G}function Wl(n,s,o,u,p){var v=o._reactRootContainer;if(v){var A=v;if(typeof p=="function"){var B=p;p=function(){var G=Hl(A);B.call(G)}}Vl(s,A,n,p)}else A=yy(o,s,n,p,u);return Hl(A)}jt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var o=It(s.pendingLanes);o!==0&&(Xn(s,o|1),Zn(s,nn()),(Bt&6)===0&&(na=nn()+500,Dr()))}break;case 13:ps(function(){var u=sr(n,1);if(u!==null){var p=Vn();Ai(u,n,1,p)}}),Md(n,1)}},Zt=function(n){if(n.tag===13){var s=sr(n,134217728);if(s!==null){var o=Vn();Ai(s,n,134217728,o)}Md(n,134217728)}},yi=function(n){if(n.tag===13){var s=Br(n),o=sr(n,s);if(o!==null){var u=Vn();Ai(o,n,s,u)}Md(n,s)}},Xt=function(){return At},Si=function(n,s){var o=At;try{return At=n,s()}finally{At=o}},ot=function(n,s,o){switch(s){case"input":if(mt(n,o),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var p=ll(u);if(!p)throw Error(t(90));Mt(u),mt(u,p)}}}break;case"textarea":rt(n,o);break;case"select":s=o.value,s!=null&&Ot(n,!!o.multiple,s,!1)}},ke=md,Se=ps;var Sy={usingClientEntryPoint:!1,Events:[to,Gs,ll,ve,Ie,md]},go={findFiberByHostInstance:as,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},My={bundleType:go.bundleType,version:go.version,rendererPackageName:go.rendererPackageName,rendererConfig:go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=is(n),n===null?null:n.stateNode},findFiberByHostInstance:go.findFiberByHostInstance||_y,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{ne=Xl.inject(My),De=Xl}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sy,Jn.createPortal=function(n,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return vy(n,s,null,o)},Jn.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var o=!1,u="",p=S0;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Sd(n,1,!1,null,null,o,!1,u,p),n[tr]=s.current,Ja(n.nodeType===8?n.parentNode:n),new bd(s)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=is(s),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return ps(n)},Jn.hydrate=function(n,s,o){if(!jl(s))throw Error(t(200));return Wl(null,n,s,!0,o)},Jn.hydrateRoot=function(n,s,o){if(!wd(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,v="",A=S0;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),s=_0(s,null,n,1,o??null,p,!1,v,A),n[tr]=s.current,Ja(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,p]:s.mutableSourceEagerHydrationData.push(o,p);return new Gl(s)},Jn.render=function(n,s,o){if(!jl(s))throw Error(t(200));return Wl(null,n,s,!1,o)},Jn.unmountComponentAtNode=function(n){if(!jl(n))throw Error(t(40));return n._reactRootContainer?(ps(function(){Wl(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Jn.unstable_batchedUpdates=md,Jn.unstable_renderSubtreeIntoContainer=function(n,s,o,u){if(!jl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Wl(n,s,o,!1,u)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var N0;function mx(){if(N0)return Ad.exports;N0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ad.exports=Py(),Ad.exports}var P0;function Ly(){if(P0)return ql;P0=1;var i=mx();return ql.createRoot=i.createRoot,ql.hydrateRoot=i.hydrateRoot,ql}var Dy=Ly();const Iy=hx(Dy);mx();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function No(){return No=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},No.apply(null,arguments)}var Zr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Zr||(Zr={}));const L0="popstate";function Uy(i){i===void 0&&(i={});function e(a,l){let{pathname:c="/",search:d="",hash:f=""}=Is(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Mf("",{pathname:c,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let f=a.location.href,m=f.indexOf("#");d=m===-1?f:f.slice(0,m)}return d+"#"+(typeof l=="string"?l:Tc(l))}function r(a,l){wh(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Fy(e,t,r,i)}function on(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function wh(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Oy(){return Math.random().toString(36).substr(2,8)}function D0(i,e){return{usr:i.state,key:i.key,idx:e}}function Mf(i,e,t,r){return t===void 0&&(t=null),No({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:t,key:e&&e.key||r||Oy()})}function Tc(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function Fy(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,d=Zr.Pop,f=null,m=x();m==null&&(m=0,c.replaceState(No({},c.state,{idx:m}),""));function x(){return(c.state||{idx:null}).idx}function _(){d=Zr.Pop;let S=x(),g=S==null?null:S-m;m=S,f&&f({action:d,location:C.location,delta:g})}function y(S,g){d=Zr.Push;let R=Mf(C.location,S,g);t&&t(R,S),m=x()+1;let P=D0(R,m),T=C.createHref(R);try{c.pushState(P,"",T)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;a.location.assign(T)}l&&f&&f({action:d,location:C.location,delta:1})}function M(S,g){d=Zr.Replace;let R=Mf(C.location,S,g);t&&t(R,S),m=x();let P=D0(R,m),T=C.createHref(R);c.replaceState(P,"",T),l&&f&&f({action:d,location:C.location,delta:0})}function E(S){let g=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof S=="string"?S:Tc(S);return R=R.replace(/ $/,"%20"),on(g,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,g)}let C={get action(){return d},get location(){return i(a,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(L0,_),f=S,()=>{a.removeEventListener(L0,_),f=null}},createHref(S){return e(a,S)},createURL:E,encodeLocation(S){let g=E(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:M,go(S){return c.go(S)}};return C}var I0;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(I0||(I0={}));function ky(i,e,t){return t===void 0&&(t="/"),By(i,e,t)}function By(i,e,t,r){let a=typeof e=="string"?Is(e):e,l=ba(a.pathname||"/",t);if(l==null)return null;let c=gx(i);zy(c);let d=null,f=Zy(l);for(let m=0;d==null&&m<c.length;++m)d=Yy(c[m],f);return d}function gx(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&(on(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let m=Qr([r,f.relativePath]),x=t.concat(f);l.children&&l.children.length>0&&(on(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),gx(l.children,e,x,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:qy(m,l.index),routesMeta:x})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let f of xx(l.path))a(l,c,f)}),e}function xx(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=xx(r.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),a&&d.push(...c),d.map(f=>i.startsWith("/")&&f===""?"/":f)}function zy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:$y(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Vy=/^:[\w-]+$/,Hy=3,Gy=2,jy=1,Wy=10,Xy=-2,U0=i=>i==="*";function qy(i,e){let t=i.split("/"),r=t.length;return t.some(U0)&&(r+=Xy),e&&(r+=Gy),t.filter(a=>!U0(a)).reduce((a,l)=>a+(Vy.test(l)?Hy:l===""?jy:Wy),r)}function $y(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function Yy(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let d=0;d<r.length;++d){let f=r[d],m=d===r.length-1,x=l==="/"?e:e.slice(l.length)||"/",_=bf({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},x),y=f.route;if(!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:Qr([l,_.pathname]),pathnameBase:eS(Qr([l,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(l=Qr([l,_.pathnameBase]))}return c}function bf(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=Ky(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,x,_)=>{let{paramName:y,isOptional:M}=x;if(y==="*"){let C=d[_]||"";c=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const E=d[_];return M&&!E?m[y]=void 0:m[y]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:i}}function Ky(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),wh(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function Zy(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wh(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function ba(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function Jy(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?Is(i):i,l;return t?(t=vx(t),t.startsWith("/")?l=O0(t.substring(1),"/"):l=O0(t,e)):l=e,{pathname:l,search:tS(r),hash:nS(a)}}function O0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Nd(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Qy(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eh(i,e){let t=Qy(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Th(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=Is(i):(a=No({},i),on(!a.pathname||!a.pathname.includes("?"),Nd("?","pathname","search",a)),on(!a.pathname||!a.pathname.includes("#"),Nd("#","pathname","hash",a)),on(!a.search||!a.search.includes("#"),Nd("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let _=e.length-1;if(!r&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),_-=1;a.pathname=y.join("/")}d=_>=0?e[_]:"/"}let f=Jy(a,d),m=c&&c!=="/"&&c.endsWith("/"),x=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(m||x)&&(f.pathname+="/"),f}const vx=i=>i.replace(/\/\/+/g,"/"),Qr=i=>vx(i.join("/")),eS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),tS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,nS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function iS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const _x=["post","put","patch","delete"];new Set(_x);const rS=["get",..._x];new Set(rS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Po(){return Po=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Po.apply(null,arguments)}const Fc=oe.createContext(null),yx=oe.createContext(null),yr=oe.createContext(null),kc=oe.createContext(null),Sr=oe.createContext({outlet:null,matches:[],isDataRoute:!1}),Sx=oe.createContext(null);function sS(i,e){let{relative:t}=e===void 0?{}:e;Ra()||on(!1);let{basename:r,navigator:a}=oe.useContext(yr),{hash:l,pathname:c,search:d}=Bc(i,{relative:t}),f=c;return r!=="/"&&(f=c==="/"?r:Qr([r,c])),a.createHref({pathname:f,search:d,hash:l})}function Ra(){return oe.useContext(kc)!=null}function Na(){return Ra()||on(!1),oe.useContext(kc).location}function Mx(i){oe.useContext(yr).static||oe.useLayoutEffect(i)}function Ah(){let{isDataRoute:i}=oe.useContext(Sr);return i?yS():aS()}function aS(){Ra()||on(!1);let i=oe.useContext(Fc),{basename:e,future:t,navigator:r}=oe.useContext(yr),{matches:a}=oe.useContext(Sr),{pathname:l}=Na(),c=JSON.stringify(Eh(a,t.v7_relativeSplatPath)),d=oe.useRef(!1);return Mx(()=>{d.current=!0}),oe.useCallback(function(m,x){if(x===void 0&&(x={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let _=Th(m,JSON.parse(c),l,x.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Qr([e,_.pathname])),(x.replace?r.replace:r.push)(_,x.state,x)},[e,r,c,l,i])}const oS=oe.createContext(null);function lS(i){let e=oe.useContext(Sr).outlet;return e&&oe.createElement(oS.Provider,{value:i},e)}function Bc(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=oe.useContext(yr),{matches:a}=oe.useContext(Sr),{pathname:l}=Na(),c=JSON.stringify(Eh(a,r.v7_relativeSplatPath));return oe.useMemo(()=>Th(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function cS(i,e){return uS(i,e)}function uS(i,e,t,r){Ra()||on(!1);let{navigator:a}=oe.useContext(yr),{matches:l}=oe.useContext(Sr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let m=Na(),x;if(e){var _;let S=typeof e=="string"?Is(e):e;f==="/"||(_=S.pathname)!=null&&_.startsWith(f)||on(!1),x=S}else x=m;let y=x.pathname||"/",M=y;if(f!=="/"){let S=f.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(S.length).join("/")}let E=ky(i,{pathname:M}),C=mS(E&&E.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:Qr([f,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Qr([f,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return e&&C?oe.createElement(kc.Provider,{value:{location:Po({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Zr.Pop}},C):C}function dS(){let i=_S(),e=iS(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return oe.createElement(oe.Fragment,null,oe.createElement("h2",null,"Unexpected Application Error!"),oe.createElement("h3",{style:{fontStyle:"italic"}},e),t?oe.createElement("pre",{style:a},t):null,null)}const fS=oe.createElement(dS,null);class hS extends oe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?oe.createElement(Sr.Provider,{value:this.props.routeContext},oe.createElement(Sx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pS(i){let{routeContext:e,match:t,children:r}=i,a=oe.useContext(Fc);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),oe.createElement(Sr.Provider,{value:e},r)}function mS(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=(a=t)==null?void 0:a.errors;if(d!=null){let x=c.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);x>=0||on(!1),c=c.slice(0,Math.min(c.length,x+1))}let f=!1,m=-1;if(t&&r&&r.v7_partialHydration)for(let x=0;x<c.length;x++){let _=c[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=x),_.route.id){let{loaderData:y,errors:M}=t,E=_.route.loader&&y[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||E){f=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((x,_,y)=>{let M,E=!1,C=null,S=null;t&&(M=d&&_.route.id?d[_.route.id]:void 0,C=_.route.errorElement||fS,f&&(m<0&&y===0?(SS("route-fallback"),E=!0,S=null):m===y&&(E=!0,S=_.route.hydrateFallbackElement||null)));let g=e.concat(c.slice(0,y+1)),R=()=>{let P;return M?P=C:E?P=S:_.route.Component?P=oe.createElement(_.route.Component,null):_.route.element?P=_.route.element:P=x,oe.createElement(pS,{match:_,routeContext:{outlet:x,matches:g,isDataRoute:t!=null},children:P})};return t&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?oe.createElement(hS,{location:t.location,revalidation:t.revalidation,component:C,error:M,children:R(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):R()},null)}var bx=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(bx||{}),wx=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(wx||{});function gS(i){let e=oe.useContext(Fc);return e||on(!1),e}function xS(i){let e=oe.useContext(yx);return e||on(!1),e}function vS(i){let e=oe.useContext(Sr);return e||on(!1),e}function Ex(i){let e=vS(),t=e.matches[e.matches.length-1];return t.route.id||on(!1),t.route.id}function _S(){var i;let e=oe.useContext(Sx),t=xS(),r=Ex();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function yS(){let{router:i}=gS(bx.UseNavigateStable),e=Ex(wx.UseNavigateStable),t=oe.useRef(!1);return Mx(()=>{t.current=!0}),oe.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Po({fromRouteId:e},l)))},[i,e])}const F0={};function SS(i,e,t){F0[i]||(F0[i]=!0)}function MS(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function wf(i){let{to:e,replace:t,state:r,relative:a}=i;Ra()||on(!1);let{future:l,static:c}=oe.useContext(yr),{matches:d}=oe.useContext(Sr),{pathname:f}=Na(),m=Ah(),x=Th(e,Eh(d,l.v7_relativeSplatPath),f,a==="path"),_=JSON.stringify(x);return oe.useEffect(()=>m(JSON.parse(_),{replace:t,state:r,relative:a}),[m,_,a,t,r]),null}function bS(i){return lS(i.context)}function Pi(i){on(!1)}function wS(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Zr.Pop,navigator:l,static:c=!1,future:d}=i;Ra()&&on(!1);let f=e.replace(/^\/*/,"/"),m=oe.useMemo(()=>({basename:f,navigator:l,static:c,future:Po({v7_relativeSplatPath:!1},d)}),[f,d,l,c]);typeof r=="string"&&(r=Is(r));let{pathname:x="/",search:_="",hash:y="",state:M=null,key:E="default"}=r,C=oe.useMemo(()=>{let S=ba(x,f);return S==null?null:{location:{pathname:S,search:_,hash:y,state:M,key:E},navigationType:a}},[f,x,_,y,M,E,a]);return C==null?null:oe.createElement(yr.Provider,{value:m},oe.createElement(kc.Provider,{children:t,value:C}))}function ES(i){let{children:e,location:t}=i;return cS(Ef(e),t)}new Promise(()=>{});function Ef(i,e){e===void 0&&(e=[]);let t=[];return oe.Children.forEach(i,(r,a)=>{if(!oe.isValidElement(r))return;let l=[...e,a];if(r.type===oe.Fragment){t.push.apply(t,Ef(r.props.children,l));return}r.type!==Pi&&on(!1),!r.props.index||!r.props.children||on(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Ef(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ac(){return Ac=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ac.apply(null,arguments)}function Tx(i,e){if(i==null)return{};var t={};for(var r in i)if({}.hasOwnProperty.call(i,r)){if(e.indexOf(r)!==-1)continue;t[r]=i[r]}return t}function TS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function AS(i,e){return i.button===0&&(!e||e==="_self")&&!TS(i)}const CS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],RS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],NS="6";try{window.__reactRouterVersion=NS}catch{}const PS=oe.createContext({isTransitioning:!1}),LS="startTransition",k0=Cy[LS];function DS(i){let{basename:e,children:t,future:r,window:a}=i,l=oe.useRef();l.current==null&&(l.current=Uy({window:a,v5Compat:!0}));let c=l.current,[d,f]=oe.useState({action:c.action,location:c.location}),{v7_startTransition:m}=r||{},x=oe.useCallback(_=>{m&&k0?k0(()=>f(_)):f(_)},[f,m]);return oe.useLayoutEffect(()=>c.listen(x),[c,x]),oe.useEffect(()=>MS(r),[r]),oe.createElement(wS,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:r})}const IS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",US=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,OS=oe.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:d,target:f,to:m,preventScrollReset:x,viewTransition:_}=e,y=Tx(e,CS),{basename:M}=oe.useContext(yr),E,C=!1;if(typeof m=="string"&&US.test(m)&&(E=m,IS))try{let P=new URL(window.location.href),T=m.startsWith("//")?new URL(P.protocol+m):new URL(m),I=ba(T.pathname,M);T.origin===P.origin&&I!=null?m=I+T.search+T.hash:C=!0}catch{}let S=sS(m,{relative:a}),g=kS(m,{replace:c,state:d,target:f,preventScrollReset:x,relative:a,viewTransition:_});function R(P){r&&r(P),P.defaultPrevented||g(P)}return oe.createElement("a",Ac({},y,{href:E||S,onClick:C||l?r:R,ref:t,target:f}))}),To=oe.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:c=!1,style:d,to:f,viewTransition:m,children:x}=e,_=Tx(e,RS),y=Bc(f,{relative:_.relative}),M=Na(),E=oe.useContext(yx),{navigator:C,basename:S}=oe.useContext(yr),g=E!=null&&BS(y)&&m===!0,R=C.encodeLocation?C.encodeLocation(y).pathname:y.pathname,P=M.pathname,T=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;a||(P=P.toLowerCase(),T=T?T.toLowerCase():null,R=R.toLowerCase()),T&&S&&(T=ba(T,S)||T);const I=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let L=P===R||!c&&P.startsWith(R)&&P.charAt(I)==="/",k=T!=null&&(T===R||!c&&T.startsWith(R)&&T.charAt(R.length)==="/"),w={isActive:L,isPending:k,isTransitioning:g},U=L?r:void 0,z;typeof l=="function"?z=l(w):z=[l,L?"active":null,k?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let V=typeof d=="function"?d(w):d;return oe.createElement(OS,Ac({},_,{"aria-current":U,className:z,ref:t,style:V,to:f,viewTransition:m}),typeof x=="function"?x(w):x)});var Tf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var B0;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(B0||(B0={}));function FS(i){let e=oe.useContext(Fc);return e||on(!1),e}function kS(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,f=Ah(),m=Na(),x=Bc(i,{relative:c});return oe.useCallback(_=>{if(AS(_,t)){_.preventDefault();let y=r!==void 0?r:Tc(m)===Tc(x);f(i,{replace:y,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[m,f,x,r,a,t,i,l,c,d])}function BS(i,e){e===void 0&&(e={});let t=oe.useContext(PS);t==null&&on(!1);let{basename:r}=FS(Tf.useViewTransitionState),a=Bc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=ba(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=ba(t.nextLocation.pathname,r)||t.nextLocation.pathname;return bf(a.pathname,c)!=null||bf(a.pathname,l)!=null}function Ax(i,e){return function(){return i.apply(e,arguments)}}const{toString:zS}=Object.prototype,{getPrototypeOf:wa}=Object,{iterator:Fo,toStringTag:Cx}=Symbol,Cc=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Lo=(i,e)=>{let t=i;const r=[];for(;t!=null&&t!==Object.prototype;){if(r.indexOf(t)!==-1)return!1;if(r.push(t),Cc(t,e))return!0;t=wa(t)}return!1},VS=(i,e)=>i!=null&&Lo(i,e)?i[e]:void 0,Ch=(i=>e=>{const t=zS.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),_i=i=>(i=i.toLowerCase(),e=>Ch(e)===i),zc=i=>e=>typeof e===i,{isArray:Rs}=Array,Ns=zc("undefined");function Pa(i){return i!==null&&!Ns(i)&&i.constructor!==null&&!Ns(i.constructor)&&ei(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Rx=_i("ArrayBuffer");function HS(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Rx(i.buffer),e}const GS=zc("string"),ei=zc("function"),Nx=zc("number"),La=i=>i!==null&&typeof i=="object",jS=i=>i===!0||i===!1,xc=i=>{if(!La(i))return!1;const e=wa(i);return(e===null||e===Object.prototype||wa(e)===null)&&!Lo(i,Cx)&&!Lo(i,Fo)},WS=i=>{if(!La(i)||Pa(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},XS=_i("Date"),qS=_i("File"),$S=i=>!!(i&&typeof i.uri<"u"),YS=i=>i&&typeof i.getParts<"u",KS=_i("Blob"),ZS=_i("FileList"),JS=_i("Set"),QS=i=>La(i)&&ei(i.pipe);function e1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const z0=e1(),V0=typeof z0.FormData<"u"?z0.FormData:void 0,t1=i=>{if(!i)return!1;if(V0&&i instanceof V0)return!0;const e=wa(i);if(!e||e===Object.prototype||!ei(i.append))return!1;const t=Ch(i);return t==="formdata"||t==="object"&&ei(i.toString)&&i.toString()==="[object FormData]"},n1=_i("URLSearchParams"),[i1,r1,s1,a1]=["ReadableStream","Request","Response","Headers"].map(_i),o1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ko(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,a;if(typeof i!="object"&&(i=[i]),Rs(i))for(r=0,a=i.length;r<a;r++)e.call(null,i[r],r,i);else{if(Pa(i))return;const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let d;for(r=0;r<c;r++)d=l[r],e.call(null,i[d],d,i)}}function Px(i,e){if(Pa(i))return null;e=e.toLowerCase();const t=Object.keys(i);let r=t.length,a;for(;r-- >0;)if(a=t[r],e===a.toLowerCase())return a;return null}const ws=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lx=i=>!Ns(i)&&i!==ws;function Af(...i){const{caseless:e,skipUndefined:t}=Lx(this)&&this||{},r={},a=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const d=e&&typeof c=="string"&&Px(r,c)||c,f=Cc(r,d)?r[d]:void 0;xc(f)&&xc(l)?r[d]=Af(f,l):xc(l)?r[d]=Af({},l):Rs(l)?r[d]=l.slice():(!t||!Ns(l))&&(r[d]=l)};for(let l=0,c=i.length;l<c;l++){const d=i[l];if(!d||Pa(d)||(ko(d,a),typeof d!="object"||Rs(d)))continue;const f=Object.getOwnPropertySymbols(d);for(let m=0;m<f.length;m++){const x=f[m];_1.call(d,x)&&a(d[x],x)}}return r}const l1=(i,e,t,{allOwnKeys:r}={})=>(ko(e,(a,l)=>{t&&ei(a)?Object.defineProperty(i,l,{__proto__:null,value:Ax(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),i),c1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),u1=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},d1=(i,e,t,r)=>{let a,l,c;const d={};if(e=e||{},i==null)return e;do{for(a=Object.getOwnPropertyNames(i),l=a.length;l-- >0;)c=a[l],(!r||r(c,i,e))&&!d[c]&&(e[c]=i[c],d[c]=!0);i=t!==!1&&wa(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},f1=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},h1=i=>{if(!i)return null;if(Rs(i))return i;let e=i.length;if(!Nx(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},p1=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&wa(Uint8Array)),m1=(i,e)=>{const r=(i&&i[Fo]).call(i);let a;for(;(a=r.next())&&!a.done;){const l=a.value;e.call(i,l[0],l[1])}},g1=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},x1=_i("HTMLFormElement"),v1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),{propertyIsEnumerable:_1}=Object.prototype,y1=_i("RegExp"),Dx=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};ko(t,(a,l)=>{let c;(c=e(a,l,i))!==!1&&(r[l]=c||a)}),Object.defineProperties(i,r)},S1=i=>{Dx(i,(e,t)=>{if(ei(i)&&["arguments","caller","callee"].includes(t))return!1;const r=i[t];if(ei(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},M1=(i,e)=>{const t={},r=a=>{a.forEach(l=>{t[l]=!0})};return Rs(i)?r(i):r(String(i).split(e)),t},b1=()=>{},w1=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function E1(i){return!!(i&&ei(i.append)&&i[Cx]==="FormData"&&i[Fo])}const T1=i=>{const e=new WeakSet,t=r=>{if(La(r)){if(e.has(r))return;if(Pa(r))return r;if(!("toJSON"in r)){e.add(r);let a;if(JS(r)){a=[];for(const l of r){const c=t(l);!Ns(c)&&a.push(c)}}else a=Rs(r)?[]:{},ko(r,(l,c)=>{const d=t(l);!Ns(d)&&(a[c]=d)});return e.delete(r),a}}return r};return t(i)},A1=_i("AsyncFunction"),C1=i=>i&&(La(i)||ei(i))&&ei(i.then)&&ei(i.catch),Ix=((i,e)=>i?setImmediate:e?((t,r)=>(ws.addEventListener("message",({source:a,data:l})=>{a===ws&&l===t&&r.length&&r.shift()()},!1),a=>{r.push(a),ws.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ei(ws.postMessage)),R1=typeof queueMicrotask<"u"?queueMicrotask.bind(ws):typeof process<"u"&&process.nextTick||Ix,Ux=i=>i!=null&&ei(i[Fo]),N1=i=>i!=null&&Lo(i,Fo)&&Ux(i),W={isArray:Rs,isArrayBuffer:Rx,isBuffer:Pa,isFormData:t1,isArrayBufferView:HS,isString:GS,isNumber:Nx,isBoolean:jS,isObject:La,isPlainObject:xc,isEmptyObject:WS,isReadableStream:i1,isRequest:r1,isResponse:s1,isHeaders:a1,isUndefined:Ns,isDate:XS,isFile:qS,isReactNativeBlob:$S,isReactNative:YS,isBlob:KS,isRegExp:y1,isFunction:ei,isStream:QS,isURLSearchParams:n1,isTypedArray:p1,isFileList:ZS,forEach:ko,merge:Af,extend:l1,trim:o1,stripBOM:c1,inherits:u1,toFlatObject:d1,kindOf:Ch,kindOfTest:_i,endsWith:f1,toArray:h1,forEachEntry:m1,matchAll:g1,isHTMLForm:x1,hasOwnProperty:Cc,hasOwnProp:Cc,hasOwnInPrototypeChain:Lo,getSafeProp:VS,reduceDescriptors:Dx,freezeMethods:S1,toObjectSet:M1,toCamelCase:v1,noop:b1,toFiniteNumber:w1,findKey:Px,global:ws,isContextDefined:Lx,isSpecCompliantForm:E1,toJSONObject:T1,isAsyncFn:A1,isThenable:C1,setImmediate:Ix,asap:R1,isIterable:Ux,isSafeIterable:N1},P1=W.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),L1=i=>{const e={};let t,r,a;return i&&i.split(`
`).forEach(function(c){a=c.indexOf(":"),t=c.substring(0,a).trim().toLowerCase(),r=c.substring(a+1).trim();const d=W.hasOwnProp(e,t);!t||d&&W.hasOwnProp(P1,t)||(t==="set-cookie"?d?e[t].push(r):e[t]=[r]:e[t]=d?e[t]+", "+r:r)}),e};function D1(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const I1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),U1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Rh(i,e){return W.isArray(i)?i.map(t=>Rh(t,e)):D1(String(i).replace(e,""))}const O1=i=>Rh(i,I1),F1=i=>Rh(i,U1);function Ox(i){const e=Object.create(null);return W.forEach(i.toJSON(),(t,r)=>{e[r]=F1(t)}),e}const H0=Symbol("internals");function vo(i){return i&&String(i).trim().toLowerCase()}function vc(i){return i===!1||i==null?i:W.isArray(i)?i.map(vc):O1(String(i))}function k1(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const B1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Pd(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function z1(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let r=1;r<e;r++){const a=i.charCodeAt(r);if(a===34||a===92&&(r+=1,r>=e))return i;t+=i[r]}return t}function V1(i){const e=Object.create(null),t=String(i);let r=0,a=!1,l=!1;function c(d){const f=Pd(t.slice(r,d)),m=f.indexOf("=");if(m<1)return;const x=Pd(f.slice(0,m));if(!B1.test(x))return;const _=x.toLowerCase();if(_==="__proto__"||_==="constructor"||_==="prototype")return;const y=Pd(f.slice(m+1));e[_]=z1(y)}for(let d=0;d<t.length;d++){const f=t.charCodeAt(d);a?l?l=!1:f===92?l=!0:f===34&&(a=!1):f===34?a=!0:(f===44||f===59)&&(c(d),r=d+1)}return c(t.length),e}const H1=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ld(i,e,t,r,a){if(W.isFunction(r))return r.call(this,e,t);if(a&&(e=t),!!W.isString(e)){if(W.isString(r))return e.indexOf(r)!==-1;if(W.isRegExp(r))return r.test(e)}}function G1(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function j1(i,e){const t=W.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{__proto__:null,value:function(a,l,c){return this[r].call(this,e,a,l,c)},configurable:!0})})}let kn=class{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function l(d,f,m){const x=vo(f);if(!x)return;const _=W.findKey(a,x);(!_||a[_]===void 0||m===!0||m===void 0&&a[_]!==!1)&&(a[_||f]=vc(d))}const c=(d,f)=>W.forEach(d,(m,x)=>l(m,x,f));if(W.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(W.isString(e)&&(e=e.trim())&&!H1(e))c(L1(e),t);else if(W.isObject(e)&&W.isSafeIterable(e)){let d=Object.create(null),f,m;for(const x of e){if(!W.isArray(x))throw new TypeError("Object iterator must return a key-value pair");m=x[0],W.hasOwnProp(d,m)?(f=d[m],d[m]=W.isArray(f)?[...f,x[1]]:[f,x[1]]):d[m]=x[1]}c(d,t)}else e!=null&&l(t,e,r);return this}get(e,t){if(e=vo(e),e){const r=W.findKey(this,e);if(r){const a=this[r];if(!t)return a;if(t===!0)return k1(a);if(W.isFunction(t))return t.call(this,a,r);if(W.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=vo(e),e){const r=W.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Ld(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let a=!1;function l(c){if(c=vo(c),c){const d=W.findKey(r,c);d&&(!t||Ld(r,r[d],d,t))&&(delete r[d],a=!0)}}return W.isArray(e)?e.forEach(l):l(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const l=t[r];(!e||Ld(this,this[l],l,e,!0))&&(delete this[l],a=!0)}return a}normalize(e){const t=this,r={};return W.forEach(this,(a,l)=>{const c=W.findKey(r,l);if(c){t[c]=vc(a),delete t[l];return}const d=e?G1(l):String(l).trim();d!==l&&delete t[l],t[d]=vc(a),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return W.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=e&&W.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return W.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return V1(e)}static concat(e,...t){const r=new this(e);return t.forEach(a=>r.set(a)),r}static accessor(e){const r=(this[H0]=this[H0]={accessors:{}}).accessors,a=this.prototype;function l(c){const d=vo(c);r[d]||(j1(a,c),r[d]=!0)}return W.isArray(e)?e.forEach(l):l(e),this}};kn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);W.reduceDescriptors(kn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}});W.freezeMethods(kn);const Rc="[REDACTED ****]";function W1(i){if(W.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(W.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function X1(i,e){const t=new Set(e.map(l=>String(l).toLowerCase())),r=[],a=l=>{if(l===null||typeof l!="object"||W.isBuffer(l))return l;if(r.indexOf(l)!==-1)return;l instanceof kn&&(l=l.toJSON()),r.push(l);let c;if(W.isArray(l))c=[],l.forEach((d,f)=>{const m=a(d);W.isUndefined(m)||(c[f]=m)});else{if(!W.isPlainObject(l)&&W1(l))return r.pop(),l;c=Object.create(null);for(const[d,f]of Object.entries(l)){const m=t.has(d.toLowerCase())?Rc:a(f);W.isUndefined(m)||(c[d]=m)}}return r.pop(),c};return a(i)}function G0(i){try{return String(i)}catch{return""}}function q1(i){return i.errors.map(t=>{try{return t&&t.message?G0(t.message):G0(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let ze=class Fx extends Error{static from(e,t,r,a,l,c){let d=e.message;!d&&W.isArray(e.errors)&&e.errors.length&&(d=q1(e));const f=new Fx(d,t||e.code,r,a,l);return Object.defineProperty(f,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),f.name=e.name,e.status!=null&&f.status==null&&(f.status=e.status),c&&Object.assign(f,c),f}constructor(e,t,r,a,l){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),l&&(this.response=l,this.status=l.status)}toJSON(){const e=this.config,t=e&&W.hasOwnProp(e,"redact")?e.redact:void 0,r=W.isArray(t)&&t.length>0?X1(e,t):W.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};ze.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";ze.ERR_BAD_OPTION="ERR_BAD_OPTION";ze.ECONNABORTED="ECONNABORTED";ze.ETIMEDOUT="ETIMEDOUT";ze.ECONNREFUSED="ECONNREFUSED";ze.ERR_NETWORK="ERR_NETWORK";ze.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";ze.ERR_DEPRECATED="ERR_DEPRECATED";ze.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";ze.ERR_BAD_REQUEST="ERR_BAD_REQUEST";ze.ERR_CANCELED="ERR_CANCELED";ze.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";ze.ERR_INVALID_URL="ERR_INVALID_URL";ze.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const $1=null,kx=100;function Cf(i){return W.isPlainObject(i)||W.isArray(i)}function Bx(i){return W.endsWith(i,"[]")?i.slice(0,-2):i}function Dd(i,e,t){return i?i.concat(e).map(function(a,l){return a=Bx(a),!t&&l?"["+a+"]":a}).join(t?".":""):e}function Y1(i){return W.isArray(i)&&!i.some(Cf)}const K1=W.toFlatObject(W,{},null,function(e){return/^is[A-Z]/.test(e)});function Vc(i,e,t){if(!W.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=W.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,P){return!W.isUndefined(P[R])});const r=t.metaTokens,a=t.visitor||E,l=t.dots,c=t.indexes,d=t.Blob||typeof Blob<"u"&&Blob,f=t.maxDepth===void 0?kx:t.maxDepth,m=d&&W.isSpecCompliantForm(e),x=[];if(!W.isFunction(a))throw new TypeError("visitor must be a function");function _(g){if(g===null)return"";if(W.isDate(g))return g.toISOString();if(W.isBoolean(g))return g.toString();if(!m&&W.isBlob(g))throw new ze("Blob is not supported. Use a Buffer instead.");if(W.isArrayBuffer(g)||W.isTypedArray(g)){if(m&&typeof d=="function")return new d([g]);throw new ze("Blob is not supported. Use a Buffer instead.",ze.ERR_NOT_SUPPORT)}return g}function y(g){if(g>f)throw new ze("Object is too deeply nested ("+g+" levels). Max depth: "+f,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(g,R){if(f===1/0)return JSON.stringify(g);const P=[];return JSON.stringify(g,function(I,L){if(!W.isObject(L))return L;for(;P.length&&P[P.length-1]!==this;)P.pop();return P.push(L),y(R+P.length-1),L})}function E(g,R,P){let T=g;if(W.isReactNative(e)&&W.isReactNativeBlob(g))return e.append(Dd(P,R,l),_(g)),!1;if(g&&!P&&typeof g=="object"){if(W.endsWith(R,"{}"))R=r?R:R.slice(0,-2),g=M(g,1);else if(W.isArray(g)&&Y1(g)||(W.isFileList(g)||W.endsWith(R,"[]"))&&(T=W.toArray(g)))return R=Bx(R),T.forEach(function(L,k){!(W.isUndefined(L)||L===null)&&e.append(c===!0?Dd([R],k,l):c===null?R:R+"[]",_(L))}),!1}return Cf(g)?!0:(e.append(Dd(P,R,l),_(g)),!1)}const C=Object.assign(K1,{defaultVisitor:E,convertValue:_,isVisitable:Cf});function S(g,R,P=0){if(!W.isUndefined(g)){if(y(P),x.indexOf(g)!==-1)throw new Error("Circular reference detected in "+R.join("."));x.push(g),W.forEach(g,function(I,L){(!(W.isUndefined(I)||I===null)&&a.call(e,I,W.isString(L)?L.trim():L,R,C))===!0&&S(I,R?R.concat(L):[L],P+1)}),x.pop()}}if(!W.isObject(i))throw new TypeError("data must be an object");return S(i),e}function j0(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Nh(i,e){this._pairs=[],i&&Vc(i,this,e)}const zx=Nh.prototype;zx.append=function(e,t){this._pairs.push([e,t])};zx.toString=function(e){const t=e?r=>e.call(this,r,j0):j0;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function Z1(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Vx(i,e,t){if(!e)return i;i=i||"";const r=W.isFunction(t)?{serialize:t}:t,a=W.getSafeProp(r,"encode")||Z1,l=W.getSafeProp(r,"serialize");let c;if(l?c=l(e,r):c=W.isURLSearchParams(e)?e.toString():new Nh(e,r).toString(a),c){const d=i.indexOf("#");d!==-1&&(i=i.slice(0,d)),i+=(i.indexOf("?")===-1?"?":"&")+c}return i}class W0{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){W.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ph={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},J1=typeof URLSearchParams<"u"?URLSearchParams:Nh,Q1=typeof FormData<"u"?FormData:null,eM=typeof Blob<"u"?Blob:null,tM={isBrowser:!0,classes:{URLSearchParams:J1,FormData:Q1,Blob:eM},protocols:["http","https","file","blob","url","data"]},Lh=typeof window<"u"&&typeof document<"u",Rf=typeof navigator=="object"&&navigator||void 0,nM=Lh&&(!Rf||["ReactNative","NativeScript","NS"].indexOf(Rf.product)<0),iM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",rM=Lh&&window.location.href||"http://localhost",sM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lh,hasStandardBrowserEnv:nM,hasStandardBrowserWebWorkerEnv:iM,navigator:Rf,origin:rM},Symbol.toStringTag,{value:"Module"})),An={...sM,...tM};function aM(i,e){return Vc(i,new An.classes.URLSearchParams,{visitor:function(t,r,a,l){return An.isNode&&W.isBuffer(t)?(this.append(r,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}const X0=kx;function Hx(i){if(i>X0)throw new ze("FormData field is too deeply nested ("+i+" levels). Max depth: "+X0,ze.ERR_FORM_DATA_DEPTH_EXCEEDED)}function oM(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=t.exec(i))!==null;)Hx(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function lM(i){const e={},t=Object.keys(i);let r;const a=t.length;let l;for(r=0;r<a;r++)l=t[r],e[l]=i[l];return e}function Gx(i){function e(t,r,a,l){Hx(l);let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),f=l>=t.length;return c=!c&&W.isArray(a)?a.length:c,f?(W.hasOwnProp(a,c)?a[c]=W.isArray(a[c])?a[c].concat(r):[a[c],r]:a[c]=r,!d):((!W.hasOwnProp(a,c)||!W.isObject(a[c]))&&(a[c]=[]),e(t,r,a[c],l)&&W.isArray(a[c])&&(a[c]=lM(a[c])),!d)}if(W.isFormData(i)&&W.isFunction(i.entries)){const t={};return W.forEachEntry(i,(r,a)=>{e(oM(r),a,t,0)}),t}return null}const ra=(i,e)=>i!=null&&W.hasOwnProp(i,e)?i[e]:void 0;function cM(i,e,t){if(W.isString(i))try{return(e||JSON.parse)(i),W.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const Bo={transitional:Ph,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,l=W.isObject(e);if(l&&W.isHTMLForm(e)&&(e=new FormData(e)),W.isFormData(e))return a?JSON.stringify(Gx(e)):e;if(W.isArrayBuffer(e)||W.isBuffer(e)||W.isStream(e)||W.isFile(e)||W.isBlob(e)||W.isReadableStream(e))return e;if(W.isArrayBufferView(e))return e.buffer;if(W.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){const f=ra(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return aM(e,f).toString();if((d=W.isFileList(e))||r.indexOf("multipart/form-data")>-1){const m=ra(this,"env"),x=m&&m.FormData;return Vc(d?{"files[]":e}:e,x&&new x,f)}}return l||a?(t.setContentType("application/json",!1),cM(e)):e}],transformResponse:[function(e){const t=ra(this,"transitional")||Bo.transitional,r=t&&t.forcedJSONParsing,a=ra(this,"responseType"),l=a==="json";if(W.isResponse(e)||W.isReadableStream(e))return e;if(e&&W.isString(e)&&(r&&!a||l)){const d=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,ra(this,"parseReviver"))}catch(f){if(d)throw f.name==="SyntaxError"?ze.from(f,ze.ERR_BAD_RESPONSE,this,null,ra(this,"response")):f}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:An.classes.FormData,Blob:An.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};W.forEach(["delete","get","head","post","put","patch","query"],i=>{Bo.headers[i]={}});function Id(i,e){const t=this||Bo,r=e||t,a=kn.from(r.headers);let l=r.data;return W.forEach(i,function(d){l=d.call(t,l,a.normalize(),e?e.status:void 0)}),a.normalize(),l}function jx(i){return!!(i&&i.__CANCEL__)}let zo=class extends ze{constructor(e,t,r){super(e??"canceled",ze.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function Wx(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new ze("Request failed with status code "+t.status,t.status>=400&&t.status<500?ze.ERR_BAD_REQUEST:ze.ERR_BAD_RESPONSE,t.config,t.request,t))}function uM(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function dM(i,e){i=i||10;const t=new Array(i),r=new Array(i);let a=0,l=0,c;return e=e!==void 0?e:1e3,function(f){const m=Date.now(),x=r[l];c||(c=m),t[a]=f,r[a]=m;let _=l,y=0;for(;_!==a;)y+=t[_++],_=_%i;if(a=(a+1)%i,a===l&&(l=(l+1)%i),m-c<e)return;const M=x&&m-x;return M?Math.round(y*1e3/M):void 0}}function fM(i,e){let t=0,r=1e3/e,a,l;const c=(m,x=Date.now())=>{t=x,a=null,l&&(clearTimeout(l),l=null),i(...m)};return[(...m)=>{const x=Date.now(),_=x-t;_>=r?c(m,x):(a=m,l||(l=setTimeout(()=>{l=null,c(a)},r-_)))},()=>a&&c(a)]}const Nc=(i,e,t=3)=>{let r=0;const a=dM(50,250);return fM(l=>{if(!l||typeof l.loaded!="number")return;const c=l.loaded,d=l.lengthComputable?l.total:void 0,f=Math.max(0,d!=null?Math.min(c,d):c),m=Math.max(0,f-r),x=a(m);r=Math.max(r,f);const _={loaded:f,total:d,progress:d?f/d:void 0,bytes:m,rate:x||void 0,estimated:x&&d?(d-f)/x:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(_)},t)},q0=(i,e)=>{const t=i!=null;return[r=>e[0]({lengthComputable:t,total:i,loaded:r}),e[1]]},$0=(i,e=W.asap)=>(...t)=>e(()=>i(...t)),hM=An.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,An.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(An.origin),An.navigator&&/(msie|trident)/i.test(An.navigator.userAgent)):()=>!0,pM=An.hasStandardBrowserEnv?{write(i,e,t,r,a,l,c){if(typeof document>"u")return;const d=[`${i}=${encodeURIComponent(e)}`];W.isNumber(t)&&d.push(`expires=${new Date(t).toUTCString()}`),W.isString(r)&&d.push(`path=${r}`),W.isString(a)&&d.push(`domain=${a}`),l===!0&&d.push("secure"),W.isString(c)&&d.push(`SameSite=${c}`),document.cookie=d.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const r=e[t].replace(/^\s+/,""),a=r.indexOf("=");if(a!==-1&&r.slice(0,a)===i)try{return decodeURIComponent(r.slice(a+1))}catch{return r.slice(a+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function mM(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function gM(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const xM=/^https?:(?!\/\/)/i,vM=/[\t\n\r]/g;function _M(i){let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e)}function yM(i){return _M(i).replace(vM,"")}function SM(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,r="")=>`${t}${r}${Rc}`)}function MM(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Rc}@`),t=e.indexOf("#"),a=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Rc}`);return t===-1?a:`${a}#${SM(e.slice(t+1))}`}function Y0(i,e){if(typeof i=="string"){const t=yM(i);if(xM.test(t))throw new ze(`Invalid URL ${JSON.stringify(MM(t))}: missing "//" after protocol`,ze.ERR_INVALID_URL,e)}}function Xx(i,e,t,r){Y0(e,r);let a=!mM(e);return i&&(a||t===!1)?(Y0(i,r),gM(i,e)):e}const K0=i=>i instanceof kn?{...i}:i,bM=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function Ps(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(x,_,y,M){return W.isPlainObject(x)&&W.isPlainObject(_)?W.merge.call({caseless:M},x,_):W.isPlainObject(_)?W.merge({},_):W.isArray(_)?_.slice():_}function a(x,_,y,M){if(W.isUndefined(_)){if(!W.isUndefined(x))return r(void 0,x,y,M)}else return r(x,_,y,M)}function l(x,_){if(!W.isUndefined(_))return r(void 0,_)}function c(x,_){if(W.isUndefined(_)){if(!W.isUndefined(x))return r(void 0,x)}else return r(void 0,_)}function d(x){const _=W.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!W.isUndefined(_))if(W.isPlainObject(_)){if(W.hasOwnProp(_,x))return _[x]}else return;const y=W.hasOwnProp(i,"transitional")?i.transitional:void 0;if(W.isPlainObject(y)&&W.hasOwnProp(y,x))return y[x]}function f(x,_,y){if(W.hasOwnProp(e,y))return r(x,_);if(W.hasOwnProp(i,y))return r(void 0,x)}const m={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,allowedSocketPaths:c,responseEncoding:c,validateStatus:f,headers:(x,_,y)=>a(K0(x),K0(_),y,!0)};return W.forEach(bM({...i,...e}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const y=W.hasOwnProp(m,_)?m[_]:a,M=W.hasOwnProp(i,_)?i[_]:void 0,E=W.hasOwnProp(e,_)?e[_]:void 0,C=y(M,E,_);W.isUndefined(C)&&y!==f||(t[_]=C)}),W.hasOwnProp(e,"validateStatus")&&W.isUndefined(e.validateStatus)&&d("validateStatusUndefinedResolves")===!1&&(W.hasOwnProp(i,"validateStatus")?t.validateStatus=r(void 0,i.validateStatus):delete t.validateStatus),t}const wM=["content-type","content-length"];function EM(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([r,a])=>{wM.includes(r.toLowerCase())&&i.set(r,a)})}const TM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function qx(i){const e=Ps({},i),t=y=>W.hasOwnProp(e,y)?e[y]:void 0,r=t("data");let a=t("withXSRFToken");const l=t("xsrfHeaderName"),c=t("xsrfCookieName");let d=t("headers");const f=t("auth"),m=t("baseURL"),x=t("allowAbsoluteUrls"),_=t("url");if(e.headers=d=kn.from(d),e.url=Vx(Xx(m,_,x,e),t("params"),t("paramsSerializer")),f){const y=W.getSafeProp(f,"username")||"",M=W.getSafeProp(f,"password")||"";try{d.set("Authorization","Basic "+btoa(y+":"+(M?TM(M):"")))}catch(E){throw ze.from(E,ze.ERR_BAD_OPTION_VALUE,i)}}if(W.isFormData(r)&&(An.hasStandardBrowserEnv||An.hasStandardBrowserWebWorkerEnv||W.isReactNative(r)?d.setContentType(void 0):W.isFunction(r.getHeaders)&&EM(d,r.getHeaders(),t("formDataHeaderPolicy"))),An.hasStandardBrowserEnv&&(W.isFunction(a)&&(a=a(e)),a===!0||a==null&&hM(e.url))){const M=l&&c&&pM.read(c);M&&d.set(l,M)}return e}const AM=typeof XMLHttpRequest<"u",CM=AM&&function(i){return new Promise(function(t,r){const a=qx(i);let l=a.data;const c=kn.from(a.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:m}=a,x,_,y,M,E;function C(){M&&M(),E&&E(),a.cancelToken&&a.cancelToken.unsubscribe(x),a.signal&&a.signal.removeEventListener("abort",x)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function g(){if(!S)return;const P=kn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),I={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:P,config:i,request:S};Wx(function(k){t(k),C()},function(k){r(k),C()},I),S=null}"onloadend"in S?S.onloadend=g:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(g)},S.onabort=function(){S&&(r(new ze("Request aborted",ze.ECONNABORTED,i,S)),C(),S=null)},S.onerror=function(T){const I=T&&T.message?T.message:"Network Error",L=new ze(I,ze.ERR_NETWORK,i,S);L.event=T||null,r(L),C(),S=null},S.ontimeout=function(){let T=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const I=a.transitional||Ph;a.timeoutErrorMessage&&(T=a.timeoutErrorMessage),r(new ze(T,I.clarifyTimeoutError?ze.ETIMEDOUT:ze.ECONNABORTED,i,S)),C(),S=null},l===void 0&&c.setContentType(null),"setRequestHeader"in S&&W.forEach(Ox(c),function(T,I){S.setRequestHeader(I,T)}),W.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),d&&d!=="json"&&(S.responseType=a.responseType),m&&([y,E]=Nc(m,!0),S.addEventListener("progress",y)),f&&S.upload&&([_,M]=Nc(f),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",M)),(a.cancelToken||a.signal)&&(x=P=>{S&&(r(!P||P.type?new zo(null,i,S):P),S.abort(),C(),S=null)},a.cancelToken&&a.cancelToken.subscribe(x),a.signal&&(a.signal.aborted?x():a.signal.addEventListener("abort",x)));const R=uM(a.url);if(R&&!An.protocols.includes(R)){r(new ze("Unsupported protocol "+R+":",ze.ERR_BAD_REQUEST,i)),C();return}S.send(l||null)})},RM=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let r=!1;const a=function(f){if(!r){r=!0,c();const m=f instanceof Error?f:this.reason;t.abort(m instanceof ze?m:new zo(m instanceof Error?m.message:m))}};let l=e&&setTimeout(()=>{l=null,a(new ze(`timeout of ${e}ms exceeded`,ze.ETIMEDOUT))},e);const c=()=>{i&&(l&&clearTimeout(l),l=null,i.forEach(f=>{f.unsubscribe?f.unsubscribe(a):f.removeEventListener("abort",a)}),i=null)};i.forEach(f=>{if(!r){if(f.aborted){a.call(f);return}f.addEventListener("abort",a,{once:!0})}});const{signal:d}=t;return d.unsubscribe=()=>W.asap(c),d},NM=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let r=0,a;for(;r<t;)a=r+e,yield i.slice(r,a),r=a},PM=async function*(i,e){for await(const t of LM(i))yield*NM(t,e)},LM=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Z0=(i,e,t,r)=>{const a=PM(i,e);let l=0,c,d=f=>{c||(c=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:m,value:x}=await a.next();if(m){d(),f.close();return}let _=x.byteLength;if(t){let y=l+=_;t(y)}f.enqueue(new Uint8Array(x))}catch(m){throw d(m),m}},cancel(f){return d(f),a.return()}},{highWaterMark:2})},J0=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,$x=(i,e,t)=>e+2<t&&J0(i.charCodeAt(e+1))&&J0(i.charCodeAt(e+2)),Q0=i=>i<=57?i-48:(i&223)-55,DM=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,IM=i=>i===9||i===10||i===12||i===13||i===32,UM=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},OM=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},FM=i=>{const e=i.length;let t=0,r=0,a=!1;for(let l=0;l<e;l++){let c=i.charCodeAt(l);if(c===37&&$x(i,l,e)&&(c=Q0(i.charCodeAt(l+1))*16+Q0(i.charCodeAt(l+2)),l+=2),!IM(c)){if(c===61){r++;continue}if(!DM(c)||r>0){a=!0;continue}t++}}return a||r>2||r>0&&(t+r)%4!==0||t%4===1?OM(i):UM(t)},kM=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const r=i.slice(5,t),a=i.slice(t+1);if(/;base64/i.test(r))return e(a);let c=0;for(let d=0,f=a.length;d<f;d++){const m=a.charCodeAt(d);if(m===37&&$x(a,d,f))c+=1,d+=2;else if(m<128)c+=1;else if(m<2048)c+=2;else if(m>=55296&&m<=56319&&d+1<f){const x=a.charCodeAt(d+1);x>=56320&&x<=57343?(c+=4,d++):c+=3}else c+=3}return c};function BM(i){const e=typeof i=="string"?i.indexOf("#"):-1;return kM(e===-1?i:i.slice(0,e),FM)}const Dh="1.19.0",eg=64*1024,{isFunction:$l}=W,zM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),tg=i=>{if(!W.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},ng=(i,...e)=>{try{return!!i(...e)}catch{return!1}},VM=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},HM=i=>{const e=W.global!==void 0&&W.global!==null?W.global:globalThis,{ReadableStream:t,TextEncoder:r}=e;i=W.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:a,Request:l,Response:c}=i,d=a?$l(a):typeof fetch=="function",f=$l(l),m=$l(c);if(!d)return!1;const x=d&&$l(t),_=d&&(typeof r=="function"?(g=>R=>g.encode(R))(new r):async g=>new Uint8Array(await new l(g).arrayBuffer())),y=f&&x&&ng(()=>{let g=!1;const R=new l(An.origin,{body:new t,method:"POST",get duplex(){return g=!0,"half"}}),P=R.headers.has("Content-Type");return R.body!=null&&R.body.cancel(),g&&!P}),M=m&&x&&ng(()=>W.isReadableStream(new c("").body)),E={stream:M&&(g=>g.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!E[g]&&(E[g]=(R,P)=>{let T=R&&R[g];if(T)return T.call(R);throw new ze(`Response type '${g}' is not supported`,ze.ERR_NOT_SUPPORT,P)})});const C=async g=>{if(g==null)return 0;if(W.isBlob(g))return g.size;if(W.isSpecCompliantForm(g))return(await new l(An.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(W.isArrayBufferView(g)||W.isArrayBuffer(g))return g.byteLength;if(W.isURLSearchParams(g)&&(g=g+""),W.isString(g))return(await _(g)).byteLength},S=async(g,R)=>{const P=W.toFiniteNumber(g.getContentLength());return P??C(R)};return async g=>{let{url:R,method:P,data:T,signal:I,cancelToken:L,timeout:k,onDownloadProgress:w,onUploadProgress:U,responseType:z,headers:V,withCredentials:Z="same-origin",fetchOptions:ce,maxContentLength:he,maxBodyLength:q}=qx(g);const fe=W.isNumber(he)&&he>-1,Q=W.isNumber(q)&&q>-1,$=K=>W.hasOwnProp(g,K)?g[K]:void 0;let le=a||fetch;z=z?(z+"").toLowerCase():"text";let re=RM([I,L&&L.toAbortSignal()],k),O=null;const J=re&&re.unsubscribe&&(()=>{re.unsubscribe()});let Ne,Ve=null;const He=()=>new ze("Request body larger than maxBodyLength limit",ze.ERR_BAD_REQUEST,g,O);try{let K;const xe=$("auth");if(xe){const Re=W.getSafeProp(xe,"username")||"",mt=W.getSafeProp(xe,"password")||"";K={username:Re,password:mt}}if(VM(R)){const Re=new URL(R,An.origin);if(!K&&(Re.username||Re.password)){const mt=tg(Re.username),yt=tg(Re.password);K={username:mt,password:yt}}(Re.username||Re.password)&&(Re.username="",Re.password="",R=Re.href)}if(K&&(V.delete("authorization"),V.set("Authorization","Basic "+btoa(zM((K.username||"")+":"+(K.password||""))))),fe&&typeof R=="string"&&R.startsWith("data:")&&BM(R)>he)throw new ze("maxContentLength size of "+he+" exceeded",ze.ERR_BAD_RESPONSE,g,O);if(Q&&P!=="get"&&P!=="head"){const Re=await C(T);if(typeof Re=="number"&&isFinite(Re)&&(Ne=Re,Re>q))throw He()}const ge=Q&&(W.isReadableStream(T)||W.isStream(T)),Fe=(Re,mt,yt)=>Z0(Re,eg,Rt=>{if(Q&&Rt>q)throw Ve=He();mt&&mt(Rt)},yt);if(y&&P!=="get"&&P!=="head"&&(U||ge)){if(Ne=Ne??await S(V,T),Ne!==0||ge){let Re=new l(R,{method:"POST",body:T,duplex:"half"}),mt;if(W.isFormData(T)&&(mt=Re.headers.get("content-type"))&&V.setContentType(mt),Re.body){const[yt,Rt]=U&&q0(Ne,Nc($0(U)))||[];T=Fe(Re.body,yt,Rt)}}}else if(ge&&!f&&x&&P!=="get"&&P!=="head")T=Fe(T);else if(ge&&f&&!y&&P!=="get"&&P!=="head")throw new ze("Stream request bodies are not supported by the current fetch implementation",ze.ERR_NOT_SUPPORT,g,O);W.isString(Z)||(Z=Z?"include":"omit");const et=f&&"credentials"in l.prototype;if(W.isFormData(T)){const Re=V.getContentType();Re&&/^multipart\/form-data/i.test(Re)&&!/boundary=/i.test(Re)&&V.delete("content-type")}V.set("User-Agent","axios/"+Dh,!1);const Je={...ce,signal:re,method:P.toUpperCase(),headers:Ox(V.normalize()),body:T,duplex:"half",credentials:et?Z:void 0};O=f&&new l(R,Je);let Mt=await(f?le(O,ce):le(R,Je));const ye=kn.from(Mt.headers);if(fe){const Re=W.toFiniteNumber(ye.getContentLength());if(Re!=null&&Re>he)throw new ze("maxContentLength size of "+he+" exceeded",ze.ERR_BAD_RESPONSE,g,O)}const at=M&&(z==="stream"||z==="response");if(M&&Mt.body&&(w||fe||at&&J)){const Re={};["status","statusText","headers"].forEach(Ft=>{Re[Ft]=Mt[Ft]});const mt=W.toFiniteNumber(ye.getContentLength()),[yt,Rt]=w&&q0(mt,Nc($0(w),!0))||[];let Ht=0;const Ot=Ft=>{if(fe&&(Ht=Ft,Ht>he))throw new ze("maxContentLength size of "+he+" exceeded",ze.ERR_BAD_RESPONSE,g,O);yt&&yt(Ft)};Mt=new c(Z0(Mt.body,eg,Ot,()=>{Rt&&Rt(),J&&J()}),Re)}z=z||"text";let ut=await E[W.findKey(E,z)||"text"](Mt,g);if(fe&&!M&&!at){let Re;if(ut!=null&&(typeof ut.byteLength=="number"?Re=ut.byteLength:typeof ut.size=="number"?Re=ut.size:typeof ut=="string"&&(Re=typeof r=="function"?new r().encode(ut).byteLength:ut.length)),typeof Re=="number"&&Re>he)throw new ze("maxContentLength size of "+he+" exceeded",ze.ERR_BAD_RESPONSE,g,O)}return!at&&J&&J(),await new Promise((Re,mt)=>{Wx(Re,mt,{data:ut,headers:kn.from(Mt.headers),status:Mt.status,statusText:Mt.statusText,config:g,request:O})})}catch(K){if(J&&J(),re&&re.aborted&&re.reason instanceof ze){const xe=re.reason;throw xe.config=g,O&&(xe.request=O),K!==xe&&Object.defineProperty(xe,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),xe}if(Ve)throw O&&!Ve.request&&(Ve.request=O),Ve;if(K instanceof ze)throw O&&!K.request&&(K.request=O),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const xe=new ze("Network Error",ze.ERR_NETWORK,g,O,K&&K.response);throw Object.defineProperty(xe,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),xe}throw ze.from(K,K&&K.code,g,O,K&&K.response)}}},GM=new Map,Yx=i=>{let e=i&&i.env||{};const{fetch:t,Request:r,Response:a}=e,l=[r,a,t];let c=l.length,d=c,f,m,x=GM;for(;d--;)f=l[d],m=x.get(f),m===void 0&&x.set(f,m=d?new Map:HM(e)),x=m;return m};Yx();const Ih={http:$1,xhr:CM,fetch:{get:Yx}};W.forEach(Ih,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const ig=i=>`- ${i}`,jM=i=>W.isFunction(i)||i===null||i===!1;function WM(i,e){i=W.isArray(i)?i:[i];const{length:t}=i;let r,a;const l={};for(let c=0;c<t;c++){r=i[c];let d;if(a=r,!jM(r)&&(a=Ih[(d=String(r)).toLowerCase()],a===void 0))throw new ze(`Unknown adapter '${d}'`);if(a&&(W.isFunction(a)||(a=a.get(e))))break;l[d||"#"+c]=a}if(!a){const c=Object.entries(l).map(([f,m])=>`adapter ${f} `+(m===!1?"is not supported by the environment":"is not available in the build"));let d=t?c.length>1?`since :
`+c.map(ig).join(`
`):" "+ig(c[0]):"as no adapter specified";throw new ze("There is no suitable adapter to dispatch the request "+d,ze.ERR_NOT_SUPPORT)}return a}const Kx={getAdapter:WM,adapters:Ih};function Ud(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new zo(null,i)}function Od(i){return Ud(i),i.headers=kn.from(i.headers),i.data=Id.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Kx.getAdapter(i.adapter||Bo.adapter,i)(i).then(function(r){Ud(i),i.response=r;try{r.data=Id.call(i,i.transformResponse,r)}finally{delete i.response}return r.headers=kn.from(r.headers),r},function(r){if(!jx(r)&&(Ud(i),r&&r.response)){i.response=r.response;try{r.response.data=Id.call(i,i.transformResponse,r.response)}finally{delete i.response}r.response.headers=kn.from(r.response.headers)}return Promise.reject(r)})}const Hc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Hc[i]=function(r){return typeof r===i||"a"+(e<1?"n ":" ")+i}});const rg={};Hc.transitional=function(e,t,r){function a(l,c){return"[Axios v"+Dh+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,d)=>{if(e===!1)throw new ze(a(c," has been removed"+(t?" in "+t:"")),ze.ERR_DEPRECATED);return t&&!rg[c]&&(rg[c]=!0,console.warn(a(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};Hc.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function XM(i,e,t){if(typeof i!="object"||i===null)throw new ze("options must be an object",ze.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let a=r.length;for(;a-- >0;){const l=r[a],c=Object.prototype.hasOwnProperty.call(e,l)?e[l]:void 0;if(c){const d=i[l],f=d===void 0||c(d,l,i);if(f!==!0)throw new ze("option "+l+" must be "+f,ze.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new ze("Unknown option "+l,ze.ERR_BAD_OPTION)}}const _c={assertOptions:XM,validators:Hc},In=_c.validators;let As=class{constructor(e){this.defaults=e||{},this.interceptors={request:new W0,response:new W0}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const l=(()=>{if(!a.stack)return"";const c=a.stack.indexOf(`
`);return c===-1?"":a.stack.slice(c+1)})();try{if(!r.stack)r.stack=l;else if(l){const c=l.indexOf(`
`),d=c===-1?-1:l.indexOf(`
`,c+1),f=d===-1?"":l.slice(d+1);String(r.stack).endsWith(f)||(r.stack+=`
`+l)}}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Ps(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:l}=t;r!==void 0&&_c.assertOptions(r,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean),legacyInterceptorReqResOrdering:In.transitional(In.boolean),advertiseZstdAcceptEncoding:In.transitional(In.boolean),validateStatusUndefinedResolves:In.transitional(In.boolean)},!1),a!=null&&(W.isFunction(a)?t.paramsSerializer={serialize:a}:_c.assertOptions(a,{encode:In.function,serialize:In.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),_c.assertOptions(t,{baseUrl:In.spelling("baseURL"),withXsrfToken:In.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&W.merge(l.common,l[t.method]);l&&W.forEach(["delete","get","head","post","put","patch","query","common"],E=>{delete l[E]}),t.headers=kn.concat(c,l);const d=[];let f=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(t)===!1)return;f=f&&C.synchronous;const S=t.transitional||Ph;S&&S.legacyInterceptorReqResOrdering?d.unshift(C.fulfilled,C.rejected):d.push(C.fulfilled,C.rejected)});const m=[];this.interceptors.response.forEach(function(C){m.push(C.fulfilled,C.rejected)});let x,_=0,y;if(!f){const E=[Od.bind(this),void 0];for(E.unshift(...d),E.push(...m),y=E.length,x=Promise.resolve(t);_<y;)x=x.then(E[_++],E[_++]);return x}y=d.length;let M=t;for(;_<y;){const E=d[_++],C=d[_++];try{M=E?E(M):M}catch(S){if(!C){x=Promise.reject(S);break}try{const g=C.call(this,S);W.isThenable(g)&&(x=Promise.resolve(g).then(()=>Od.call(this,M)))}catch(g){x=Promise.reject(g)}break}}if(!x)try{x=Od.call(this,M)}catch(E){x=Promise.reject(E)}for(_=0,y=m.length;_<y;)x=x.then(m[_++],m[_++]);return x}getUri(e){e=Ps(this.defaults,e);const t=Xx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Vx(t,e.params,e.paramsSerializer)}};W.forEach(["delete","get","head","options"],function(e){As.prototype[e]=function(t,r){return this.request(Ps(r||{},{method:e,url:t,data:r&&W.hasOwnProp(r,"data")?r.data:void 0}))}});W.forEach(["post","put","patch","query"],function(e){function t(r){return function(l,c,d){return this.request(Ps(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}As.prototype[e]=t(),e!=="query"&&(As.prototype[e+"Form"]=t(!0))});let qM=class Zx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const r=this;this.promise.then(a=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](a);r._listeners=null}),this.promise.then=a=>{let l;const c=new Promise(d=>{r.subscribe(d),l=d}).then(a);return c.cancel=function(){r.unsubscribe(l)},c},e(function(l,c,d){r.reason||(r.reason=new zo(l,c,d),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Zx(function(a){e=a}),cancel:e}}};function $M(i){return function(t){return i.apply(null,t)}}function YM(i){return W.isObject(i)&&i.isAxiosError===!0}const Nf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Nf).forEach(([i,e])=>{Nf[e]=i});function Jx(i){const e=new As(i),t=Ax(As.prototype.request,e);return W.extend(t,As.prototype,e,{allOwnKeys:!0}),W.extend(t,e,null,{allOwnKeys:!0}),t.create=function(a){return Jx(Ps(i,a))},t}const dn=Jx(Bo);dn.Axios=As;dn.CanceledError=zo;dn.CancelToken=qM;dn.isCancel=jx;dn.VERSION=Dh;dn.toFormData=Vc;dn.AxiosError=ze;dn.Cancel=dn.CanceledError;dn.all=function(e){return Promise.all(e)};dn.spread=$M;dn.isAxiosError=YM;dn.mergeConfig=Ps;dn.AxiosHeaders=kn;dn.formToJSON=i=>Gx(W.isHTMLForm(i)?new FormData(i):i);dn.getAdapter=Kx.getAdapter;dn.HttpStatusCode=Nf;dn.default=dn;const{Axios:xN,AxiosError:vN,CanceledError:_N,isCancel:yN,CancelToken:SN,VERSION:MN,all:bN,Cancel:wN,isAxiosError:EN,spread:TN,toFormData:AN,AxiosHeaders:CN,HttpStatusCode:RN,formToJSON:NN,getAdapter:PN,mergeConfig:LN,create:DN}=dn,Fd={},KM=Fd==null?void 0:Fd.VITE_API_BASE_URL,ZM="https://localhost:7076/api",Hi=dn.create({baseURL:KM||ZM,headers:{"Content-Type":"application/json"},timeout:1e4});Hi.interceptors.request.use(i=>{const e=localStorage.getItem("jwt_token");return e&&(i.headers.Authorization=`Bearer ${e}`),i},i=>Promise.reject(i));Hi.interceptors.response.use(i=>i,i=>{var e;return((e=i.response)==null?void 0:e.status)===401&&(localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")),Promise.reject(i)});const sa={login:async i=>{const e={phoneNumber:i.phoneNumber||i.username||"",username:i.username||i.phoneNumber||"",password:i.password||i.passwordHash||"",passwordHash:i.passwordHash||i.password||""};return(await Hi.post("/Auth/login",e)).data},googleLogin:async i=>(await Hi.post("/Auth/google-login",i)).data,register:async i=>{const e={fullName:i.fullName||i.username||"",username:i.username||i.fullName||"",password:i.password||i.passwordHash||"",passwordHash:i.passwordHash||i.password||"",phoneNumber:i.phoneNumber||""};return(await Hi.post("/Auth/register",e)).data},verifyOtp:async i=>{const e={phoneNumber:i.phoneNumber,otp:i.otp||i.otpCode||"",otpCode:i.otpCode||i.otp||""};return(await Hi.post("/Auth/verify-otp",e)).data},forgotPassword:async i=>(await Hi.post("/Auth/forgot-password",i)).data,resetPassword:async i=>{const e={phoneNumber:i.phoneNumber,resetToken:i.resetToken||i.otpCode||"",otpCode:i.otpCode||i.resetToken||"",newPassword:i.newPassword||i.newPasswordHash||"",newPasswordHash:i.newPasswordHash||i.newPassword||""};return(await Hi.post("/Auth/reset-password",e)).data},testAuth:async()=>(await Hi.get("/Auth/test-auth")).data,testUserRole:async()=>(await Hi.get("/Auth/test-user-role")).data},Qx=oe.createContext(void 0),JM=({children:i})=>{const[e,t]=oe.useState(null),[r,a]=oe.useState(null),[l,c]=oe.useState(!0);oe.useEffect(()=>{const S=localStorage.getItem("jwt_token"),g=localStorage.getItem("user_info");if(S&&g)try{a(S),t(JSON.parse(g))}catch(R){console.error("Failed to parse saved user info",R),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")}c(!1)},[]);const d=async(S,g)=>{try{const R=await sa.login({username:S,phoneNumber:S,password:g,passwordHash:g}),P=(R==null?void 0:R.accessToken)||(R==null?void 0:R.token)||"jwt-auth-success-token",T=R!=null&&R.roles&&R.roles.length>0?R.roles:["Admin"],I=T[0]||"Admin",L={id:(R==null?void 0:R.userId)||"auth-user-id",username:(R==null?void 0:R.username)||S,fullName:(R==null?void 0:R.username)||S,roles:T,role:I,token:P,expiration:(R==null?void 0:R.expiration)||(R==null?void 0:R.expiresAt)};return a(P),t(L),localStorage.setItem("jwt_token",P),localStorage.setItem("user_info",JSON.stringify(L)),R}catch(R){throw console.error("Login error",R),R}},f=(S="Admin")=>{const g="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-sample-token",R={id:"demo-user-123",username:`demo_${S.toLowerCase()}`,fullName:`Quản trị ${S}`,roles:[S],role:S,token:g,expiration:"2026-12-31T23:59:59"};a(g),t(R),localStorage.setItem("jwt_token",g),localStorage.setItem("user_info",JSON.stringify(R))},m=async(S,g,R)=>{try{const P=await sa.googleLogin({idToken:S||"mock-google-id-token-sample"}),T=(P==null?void 0:P.accessToken)||(P==null?void 0:P.token)||"google-oauth-jwt-token",I={id:(P==null?void 0:P.userId)||"google-user-id",username:g||(P==null?void 0:P.username)||"google_user",fullName:R||(P==null?void 0:P.username)||"Google User",roles:["Admin"],role:"Admin",token:T,expiration:(P==null?void 0:P.expiresAt)||"2026-12-31T23:59:59"};a(T),t(I),localStorage.setItem("jwt_token",T),localStorage.setItem("user_info",JSON.stringify(I))}catch{const T="google-oauth2-jwt-token-sample",I={id:"google-user-888",username:g||"minhtan.dev@gmail.com",fullName:R||"Minh Tan",roles:["Admin"],role:"Admin",token:T,expiration:"2026-12-31T23:59:59"};a(T),t(I),localStorage.setItem("jwt_token",T),localStorage.setItem("user_info",JSON.stringify(I))}},x=async()=>{const S="facebook-oauth2-jwt-token-sample",g={id:"facebook-user-999",username:"user_facebook",fullName:"Facebook User",roles:["Admin"],role:"Admin",token:S,expiration:"2026-12-31T23:59:59"};a(S),t(g),localStorage.setItem("jwt_token",S),localStorage.setItem("user_info",JSON.stringify(g))},_=async(S,g,R)=>await sa.register({fullName:S,username:S,password:g,passwordHash:g,phoneNumber:R}),y=async(S,g)=>await sa.verifyOtp({phoneNumber:S,otp:g,otpCode:g}),M=async S=>{try{return await sa.forgotPassword({phoneNumber:S})}catch{return{message:"Mã OTP đặt lại mật khẩu đã được tạo!"}}},E=async(S,g,R)=>{try{return await sa.resetPassword({phoneNumber:S,resetToken:g,otpCode:g,newPassword:R,newPasswordHash:R})}catch{return{message:"Đặt lại mật khẩu thành công!",isSuccess:!0}}},C=()=>{a(null),t(null),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")};return h.jsx(Qx.Provider,{value:{user:e,token:r,isAuthenticated:!!r&&!!e,isLoading:l,login:d,loginAsDemoRole:f,loginWithGoogle:m,loginWithFacebook:x,register:_,verifyOtp:y,forgotPassword:M,resetPassword:E,logout:C},children:i})},Vo=()=>{const i=oe.useContext(Qx);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},ev=oe.createContext(void 0),QM=({children:i})=>{const[e,t]=oe.useState(null),[r,a]=oe.useState("DineIn"),[l,c]=oe.useState([]),[d,f]=oe.useState(0),[m,x]=oe.useState("amount"),[_,y]=oe.useState(""),[M,E]=oe.useState(""),C=(L,k=[],w="")=>{const U=k.reduce((ce,he)=>ce+he.extraPrice,0),z=L.price+U,V=k.map(ce=>`${ce.optionId}:${ce.valueId}`).sort().join("|"),Z=`${L.id}-${V}-${w}`;c(ce=>ce.find(q=>q.cartItemId===Z)?ce.map(q=>q.cartItemId===Z?{...q,quantity:q.quantity+1,totalPrice:(q.quantity+1)*z}:q):[...ce,{cartItemId:Z,product:L,quantity:1,selectedOptions:k,note:w,unitPrice:z,totalPrice:z}])},S=(L,k)=>{c(w=>w.map(U=>{if(U.cartItemId===L){const z=U.quantity+k;return z<=0?null:{...U,quantity:z,totalPrice:z*U.unitPrice}}return U}).filter(Boolean))},g=L=>{c(k=>k.filter(w=>w.cartItemId!==L))},R=()=>{c([]),f(0),y(""),E("")},P=l.reduce((L,k)=>L+k.totalPrice,0),T=m==="percent"?Math.round(P*d/100):Math.min(d,P),I=Math.max(0,P-T);return h.jsx(ev.Provider,{value:{selectedTable:e,setSelectedTable:t,orderType:r,setOrderType:a,cartItems:l,addToCart:C,updateQuantity:S,removeFromCart:g,clearCart:R,discountAmount:d,setDiscountAmount:f,discountType:m,setDiscountType:x,subTotal:P,calculatedDiscount:T,finalTotal:I,customerPhone:_,setCustomerPhone:y,customerName:M,setCustomerName:E},children:i})},eb=()=>{const i=oe.useContext(ev);if(!i)throw new Error("useCart must be used within a CartProvider");return i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tv=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var nb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ib=oe.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},f)=>oe.createElement("svg",{ref:f,...nb,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:tv("lucide",a),...d},[...c.map(([m,x])=>oe.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(i,e)=>{const t=oe.forwardRef(({className:r,...a},l)=>oe.createElement(ib,{ref:l,iconNode:e,className:tv(`lucide-${tb(i)}`,r),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sg=ht("ArrowRight",rb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ag=ht("ArrowUpRight",sb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],nv=ht("Award",ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],lb=ht("Banknote",ob);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ub=ht("Bell",cb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const db=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Uh=ht("Boxes",db);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hb=ht("Calendar",fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pb=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],iv=ht("ChartColumn",pb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],gb=ht("ChartNoAxesColumn",mb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vb=ht("Check",xb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _b=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Oh=ht("ChefHat",_b);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],og=ht("ChevronDown",yb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Mb=ht("ChevronRight",Sb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wb=ht("CircleAlert",bb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Ho=ht("CircleCheck",Eb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Gc=ht("Clock",Tb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Cb=ht("CreditCard",Ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Nb=ht("DollarSign",Rb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],kd=ht("EyeOff",Pb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Bd=ht("Eye",Lb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Ib=ht("KeyRound",Db);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],Ob=ht("LayoutGrid",Ub);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zd=ht("Lock",Fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],Bb=ht("LogIn",kb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],rv=ht("LogOut",zb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Hb=ht("Mail",Vb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],jb=ht("Menu",Gb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M5 12h14",key:"1ays0h"}]],Xb=ht("Minus",Wb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],sv=ht("Monitor",qb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Yb=ht("PhoneCall",$b);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Zb=ht("Play",Kb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Do=ht("Plus",Jb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],ew=ht("QrCode",Qb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],lg=ht("Receipt",tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Fh=ht("Search",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],rw=ht("Send",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],av=ht("ShieldCheck",sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],ow=ht("ShoppingBag",aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],cg=ht("Smartphone",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],ov=ht("Sparkles",cw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],dw=ht("Store",uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],hw=ht("Ticket",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],mw=ht("TrendingUp",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],xw=ht("TriangleAlert",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],_w=ht("Truck",vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ug=ht("User",yw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],jc=ht("Users",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],bw=ht("UtensilsCrossed",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],dg=ht("Utensils",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Cs=ht("X",Ew),Tw=({onToggleMobileSidebar:i})=>{var d,f;const{user:e,logout:t}=Vo(),[r,a]=oe.useState(!1),[l,c]=oe.useState("Chi nhánh Quận 1 (Chính)");return h.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm md:px-6",children:[h.jsxs("div",{className:"flex items-center space-x-3 md:space-x-4",children:[h.jsx("button",{onClick:i,className:"p-2 text-gray-600 rounded-lg hover:bg-gray-100 md:hidden focus:outline-none",title:"Mở menu",children:h.jsx(jb,{className:"w-6 h-6"})}),h.jsxs("div",{className:"flex items-center space-x-2.5",children:[h.jsx("div",{className:"flex items-center justify-center w-10 h-10 font-bold text-white rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20",children:"F&B"}),h.jsxs("div",{className:"hidden sm:block",children:[h.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900",children:"F&B POS & Inventory"}),h.jsx("span",{className:"block text-[10px] font-semibold tracking-wider text-emerald-600 uppercase",children:"Hệ Thống Thu Ngân & Kho"})]})]}),h.jsx("div",{className:"relative hidden lg:block ml-4",children:h.jsxs("div",{className:"flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors",children:[h.jsx(dw,{className:"w-4 h-4 mr-1.5 text-emerald-600"}),h.jsx("span",{children:l}),h.jsx(og,{className:"w-3.5 h-3.5 ml-1.5 text-gray-500"})]})})]}),h.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[h.jsxs("div",{className:"hidden sm:flex items-center text-xs font-medium text-gray-500 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200",children:[h.jsx(Yb,{className:"w-3.5 h-3.5 mr-1"}),h.jsx("span",{children:"Hotline: 1900 6868"})]}),h.jsxs("button",{className:"relative p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none",title:"Thông báo",children:[h.jsx(ub,{className:"w-5 h-5"}),h.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"}),h.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"})]}),h.jsxs("div",{className:"relative",children:[h.jsxs("button",{onClick:()=>a(!r),className:"flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none",children:[h.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300",children:((e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"U").charAt(0).toUpperCase()}),h.jsxs("div",{className:"hidden md:block text-left",children:[h.jsx("div",{className:"text-xs font-semibold text-gray-800 leading-tight",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),h.jsx("div",{className:"text-[10px] text-emerald-600 font-medium",children:(e==null?void 0:e.role)||((d=e==null?void 0:e.roles)==null?void 0:d[0])||"Staff"})]}),h.jsx(og,{className:"w-4 h-4 text-gray-400 hidden md:block"})]}),r&&h.jsxs("div",{className:"absolute right-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150",onMouseLeave:()=>a(!1),children:[h.jsxs("div",{className:"px-4 py-2.5 border-b border-gray-100 bg-gray-50/50",children:[h.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Đang đăng nhập với"}),h.jsx("p",{className:"text-sm font-bold text-gray-900 truncate",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),h.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 rounded-md",children:[h.jsx(av,{className:"w-3 h-3 mr-1"}),"Role: ",(e==null?void 0:e.role)||((f=e==null?void 0:e.roles)==null?void 0:f[0])||"User"]})]}),h.jsx("div",{className:"py-1",children:h.jsxs("button",{onClick:()=>{a(!1),t()},className:"flex items-center w-full px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors",children:[h.jsx(rv,{className:"w-4 h-4 mr-2"}),"Đăng xuất tài khoản"]})})]})]})]})]})},Aw=({mobileOpen:i,onCloseMobile:e})=>{const{user:t,loginAsDemoRole:r}=Vo(),a=[{name:"POS Thu Ngân",path:"/pos",icon:sv,badge:"Chính",badgeColor:"bg-emerald-100 text-emerald-700"},{name:"Màn Hình Bếp (KDS)",path:"/kitchen",icon:Oh,badge:"Live",badgeColor:"bg-amber-100 text-amber-800"},{name:"Quản Lý Kho & Nguyên Liệu",path:"/inventory",icon:Uh},{name:"Báo Cáo & Thống Kê",path:"/dashboard",icon:iv},{name:"Khách Hàng & Loyalty",path:"/customers",icon:jc},{name:"Điểm Danh Nhân Viên",path:"/attendance",icon:Gc}];return h.jsxs(h.Fragment,{children:[i&&h.jsx("div",{className:"fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity",onClick:e}),h.jsxs("aside",{className:`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${i?"translate-x-0":"-translate-x-full"}`,children:[h.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-gray-100 md:hidden bg-gray-50",children:[h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx("div",{className:"flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-emerald-600",children:"POS"}),h.jsx("span",{className:"font-bold text-gray-900",children:"F&B Management"})]}),h.jsx("button",{onClick:e,className:"p-1.5 text-gray-500 rounded-lg hover:bg-gray-200",children:h.jsx(Cs,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"flex-1 px-3 py-4 overflow-y-auto space-y-1",children:[h.jsx("div",{className:"px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:"Phân Hệ Quản Lý FE"}),a.map(l=>{const c=l.icon;return h.jsxs(To,{to:l.path,onClick:e,className:({isActive:d})=>`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${d?"bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold":"text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700"}`,children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx(c,{className:"w-5 h-5 flex-shrink-0"}),h.jsx("span",{children:l.name})]}),l.badge&&h.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${l.badgeColor}`,children:l.badge})]},l.path)})]}),h.jsxs("div",{className:"p-3 m-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100",children:[h.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-800 font-bold text-xs mb-2",children:[h.jsx(ov,{className:"w-4 h-4 text-emerald-600 animate-pulse"}),h.jsx("span",{children:"Đổi Vai Trò Xem Demo"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[h.jsx("button",{onClick:()=>r("Admin"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Admin"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"👑 Admin"}),h.jsx("button",{onClick:()=>r("Cashier"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Cashier"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"💵 Thu Ngân"}),h.jsx("button",{onClick:()=>r("Kitchen"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Kitchen"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"🍳 Bếp"}),h.jsx("button",{onClick:()=>r("Warehouse"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Warehouse"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"📦 Kho"})]})]})]})]})},Cw=()=>{const[i,e]=oe.useState(!1);return h.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50",children:[h.jsx(Tw,{onToggleMobileSidebar:()=>e(!0)}),h.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[h.jsx(Aw,{mobileOpen:i,onCloseMobile:()=>e(!1)}),h.jsx("main",{className:"flex-1 overflow-y-auto pb-16 md:pb-6 p-3 sm:p-5 md:p-6 bg-gray-50",children:h.jsx(bS,{})})]}),h.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-14 bg-white border-t border-gray-200 md:hidden shadow-lg",children:[h.jsxs(To,{to:"/pos",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[h.jsx(sv,{className:"w-5 h-5 mb-0.5"}),h.jsx("span",{children:"POS"})]}),h.jsxs(To,{to:"/kitchen",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[h.jsx(Oh,{className:"w-5 h-5 mb-0.5"}),h.jsx("span",{children:"Bếp"})]}),h.jsxs(To,{to:"/inventory",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[h.jsx(Uh,{className:"w-5 h-5 mb-0.5"}),h.jsx("span",{children:"Kho"})]}),h.jsxs(To,{to:"/dashboard",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[h.jsx(iv,{className:"w-5 h-5 mb-0.5"}),h.jsx("span",{children:"Thống kê"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",Rw=0,fg=1,Nw=2,yc=1,lv=2,Ao=3,es=0,ti=1,pr=2,gr=0,ya=1,hg=2,pg=3,mg=4,Pw=5,Ms=100,Lw=101,Dw=102,Iw=103,Uw=104,Ow=200,Fw=201,kw=202,Bw=203,Pf=204,Lf=205,zw=206,Vw=207,Hw=208,Gw=209,jw=210,Ww=211,Xw=212,qw=213,$w=214,Df=0,If=1,Uf=2,Ea=3,Of=4,Ff=5,kf=6,Bf=7,cv=0,Yw=1,Kw=2,Xi=0,uv=1,dv=2,fv=3,Bh=4,hv=5,pv=6,mv=7,gv=300,Ls=301,Ta=302,Vd=303,Hd=304,Wc=306,zf=1e3,mr=1001,Vf=1002,Cn=1003,Zw=1004,Yl=1005,Fn=1006,Gd=1007,Es=1008,ci=1009,xv=1010,vv=1011,Io=1012,zh=1013,Yi=1014,ji=1015,vr=1016,Vh=1017,Hh=1018,Uo=1020,_v=35902,yv=35899,Sv=1021,Mv=1022,Di=1023,_r=1026,Ts=1027,bv=1028,Gh=1029,Ds=1030,jh=1031,Wh=1033,Sc=33776,Mc=33777,bc=33778,wc=33779,Hf=35840,Gf=35841,jf=35842,Wf=35843,Xf=36196,qf=37492,$f=37496,Yf=37488,Kf=37489,Pc=37490,Zf=37491,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Lc=36285,xh=36286,Jw=3200,vh=0,Qw=1,Kr="",xi="srgb",Dc="srgb-linear",Ic="linear",qt="srgb",aa=7680,gg=519,eE=512,tE=513,nE=514,Xh=515,iE=516,rE=517,qh=518,sE=519,xg=35044,vg="300 es",Wi=2e3,Oo=2001;function aE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Uc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oE(){const i=Uc("canvas");return i.style.display="block",i}const _g={};function yg(...i){const e="THREE."+i.shift();console.log(e,...i)}function wv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function pt(...i){i=wv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ut(...i){i=wv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Sa(...i){const e=i.join(" ");e in _g||(_g[e]=!0,pt(...i))}function lE(i,e,t){return new Promise(function(r,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const cE={[Df]:If,[Uf]:kf,[Of]:Bf,[Ea]:Ff,[If]:Df,[kf]:Uf,[Bf]:Of,[Ff]:Ea};class Us{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,_h=180/Math.PI;function Go(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Pt(i,e,t){return Math.max(e,Math.min(t,i))}function uE(i,e){return(i%e+e)%e}function Wd(i,e,t){return(1-t)*i+t*e}function _o(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let Lt=tp;class Da{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let f=r[a+0],m=r[a+1],x=r[a+2],_=r[a+3],y=l[c+0],M=l[c+1],E=l[c+2],C=l[c+3];if(_!==C||f!==y||m!==M||x!==E){let S=f*y+m*M+x*E+_*C;S<0&&(y=-y,M=-M,E=-E,C=-C,S=-S);let g=1-d;if(S<.9995){const R=Math.acos(S),P=Math.sin(R);g=Math.sin(g*R)/P,d=Math.sin(d*R)/P,f=f*g+y*d,m=m*g+M*d,x=x*g+E*d,_=_*g+C*d}else{f=f*g+y*d,m=m*g+M*d,x=x*g+E*d,_=_*g+C*d;const R=1/Math.sqrt(f*f+m*m+x*x+_*_);f*=R,m*=R,x*=R,_*=R}}e[t]=f,e[t+1]=m,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],f=r[a+1],m=r[a+2],x=r[a+3],_=l[c],y=l[c+1],M=l[c+2],E=l[c+3];return e[t]=d*E+x*_+f*M-m*y,e[t+1]=f*E+x*y+m*_-d*M,e[t+2]=m*E+x*M+d*y-f*_,e[t+3]=x*E-d*_-f*y-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,m=d(r/2),x=d(a/2),_=d(l/2),y=f(r/2),M=f(a/2),E=f(l/2);switch(c){case"XYZ":this._x=y*x*_+m*M*E,this._y=m*M*_-y*x*E,this._z=m*x*E+y*M*_,this._w=m*x*_-y*M*E;break;case"YXZ":this._x=y*x*_+m*M*E,this._y=m*M*_-y*x*E,this._z=m*x*E-y*M*_,this._w=m*x*_+y*M*E;break;case"ZXY":this._x=y*x*_-m*M*E,this._y=m*M*_+y*x*E,this._z=m*x*E+y*M*_,this._w=m*x*_-y*M*E;break;case"ZYX":this._x=y*x*_-m*M*E,this._y=m*M*_+y*x*E,this._z=m*x*E-y*M*_,this._w=m*x*_+y*M*E;break;case"YZX":this._x=y*x*_+m*M*E,this._y=m*M*_+y*x*E,this._z=m*x*E-y*M*_,this._w=m*x*_-y*M*E;break;case"XZY":this._x=y*x*_-m*M*E,this._y=m*M*_-y*x*E,this._z=m*x*E+y*M*_,this._w=m*x*_+y*M*E;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],f=t[9],m=t[2],x=t[6],_=t[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-f)*M,this._y=(l-m)*M,this._z=(c-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-f)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(f+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(c-a)/M,this._x=(l+m)/M,this._y=(f+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,f=t._y,m=t._z,x=t._w;return this._x=r*x+c*d+a*m-l*f,this._y=a*x+c*f+l*d-r*m,this._z=l*x+c*m+r*f-a*d,this._w=c*x-r*d-a*f-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);f=Math.sin(f*m)/x,t=Math.sin(t*m)/x,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,f=e.w,m=2*(c*a-d*r),x=2*(d*t-l*a),_=2*(l*r-c*t);return this.x=t+f*m+c*_-d*x,this.y=r+f*x+d*m-l*_,this.z=a+f*_+l*x-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*c-r*f,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let te=np;const Xd=new te,Sg=new Da,ip=class ip{constructor(e,t,r,a,l,c,d,f,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,m)}set(e,t,r,a,l,c,d,f,m){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=l,x[5]=f,x[6]=r,x[7]=c,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],m=r[1],x=r[4],_=r[7],y=r[2],M=r[5],E=r[8],C=a[0],S=a[3],g=a[6],R=a[1],P=a[4],T=a[7],I=a[2],L=a[5],k=a[8];return l[0]=c*C+d*R+f*I,l[3]=c*S+d*P+f*L,l[6]=c*g+d*T+f*k,l[1]=m*C+x*R+_*I,l[4]=m*S+x*P+_*L,l[7]=m*g+x*T+_*k,l[2]=y*C+M*R+E*I,l[5]=y*S+M*P+E*L,l[8]=y*g+M*T+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],m=e[7],x=e[8];return t*c*x-t*d*m-r*l*x+r*d*f+a*l*m-a*c*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],m=e[7],x=e[8],_=x*c-d*m,y=d*f-x*l,M=m*l-c*f,E=t*_+r*y+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(a*m-x*r)*C,e[2]=(d*r-a*c)*C,e[3]=y*C,e[4]=(x*t-a*f)*C,e[5]=(a*l-d*t)*C,e[6]=M*C,e[7]=(r*f-m*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const f=Math.cos(l),m=Math.sin(l);return this.set(r*f,r*m,-r*(f*c+m*d)+c+e,-a*m,a*f,-a*(-m*c+f*d)+d+t,0,0,1),this}scale(e,t){return Sa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,t)),this}rotate(e){return Sa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,t){return Sa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let _t=ip;const qd=new _t,Mg=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bg=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dE(){const i={enabled:!0,workingColorSpace:Dc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===qt&&(a.r=xr(a.r),a.g=xr(a.g),a.b=xr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===qt&&(a.r=Ma(a.r),a.g=Ma(a.g),a.b=Ma(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Kr?Ic:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Sa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Sa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Dc]:{primaries:e,whitePoint:r,transfer:Ic,toXYZ:Mg,fromXYZ:bg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:Mg,fromXYZ:bg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),i}const Dt=dE();function xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ma(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let oa;class fE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{oa===void 0&&(oa=Uc("canvas")),oa.width=e.width,oa.height=e.height;const a=oa.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=oa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=xr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xr(t[r]/255)*255):t[r]=xr(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hE=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hE++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push($d(a[c].image)):l.push($d(a[c]))}else l=$d(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function $d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let pE=0;const Yd=new te;class jn extends Us{constructor(e=jn.DEFAULT_IMAGE,t=jn.DEFAULT_MAPPING,r=mr,a=mr,l=Fn,c=Es,d=Di,f=ci,m=jn.DEFAULT_ANISOTROPY,x=Kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pE++}),this.uuid=Go(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=gv;jn.DEFAULT_ANISOTROPY=1;const rp=class rp{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,m=f[0],x=f[4],_=f[8],y=f[1],M=f[5],E=f[9],C=f[2],S=f[6],g=f[10];if(Math.abs(x-y)<.01&&Math.abs(_-C)<.01&&Math.abs(E-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+C)<.1&&Math.abs(E+S)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(m+1)/2,T=(M+1)/2,I=(g+1)/2,L=(x+y)/4,k=(_+C)/4,w=(E+S)/4;return P>T&&P>I?P<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(P),a=L/r,l=k/r):T>I?T<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),r=L/a,l=w/a):I<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(I),r=k/l,a=w/l),this.set(r,a,l,t),this}let R=Math.sqrt((S-E)*(S-E)+(_-C)*(_-C)+(y-x)*(y-x));return Math.abs(R)<.001&&(R=1),this.x=(S-E)/R,this.y=(_-C)/R,this.z=(y-x)/R,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rp.prototype.isVector4=!0;let an=rp;class mE extends Us{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new jn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends mE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ev extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gE extends jn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oc=class Oc{constructor(e,t,r,a,l,c,d,f,m,x,_,y,M,E,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,m,x,_,y,M,E,C,S)}set(e,t,r,a,l,c,d,f,m,x,_,y,M,E,C,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=f,g[2]=m,g[6]=x,g[10]=_,g[14]=y,g[3]=M,g[7]=E,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/la.setFromMatrixColumn(e,0).length(),l=1/la.setFromMatrixColumn(e,1).length(),c=1/la.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(a),m=Math.sin(a),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=c*x,M=c*_,E=d*x,C=d*_;t[0]=f*x,t[4]=-f*_,t[8]=m,t[1]=M+E*m,t[5]=y-C*m,t[9]=-d*f,t[2]=C-y*m,t[6]=E+M*m,t[10]=c*f}else if(e.order==="YXZ"){const y=f*x,M=f*_,E=m*x,C=m*_;t[0]=y+C*d,t[4]=E*d-M,t[8]=c*m,t[1]=c*_,t[5]=c*x,t[9]=-d,t[2]=M*d-E,t[6]=C+y*d,t[10]=c*f}else if(e.order==="ZXY"){const y=f*x,M=f*_,E=m*x,C=m*_;t[0]=y-C*d,t[4]=-c*_,t[8]=E+M*d,t[1]=M+E*d,t[5]=c*x,t[9]=C-y*d,t[2]=-c*m,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const y=c*x,M=c*_,E=d*x,C=d*_;t[0]=f*x,t[4]=E*m-M,t[8]=y*m+C,t[1]=f*_,t[5]=C*m+y,t[9]=M*m-E,t[2]=-m,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,M=c*m,E=d*f,C=d*m;t[0]=f*x,t[4]=C-y*_,t[8]=E*_+M,t[1]=_,t[5]=c*x,t[9]=-d*x,t[2]=-m*x,t[6]=M*_+E,t[10]=y-C*_}else if(e.order==="XZY"){const y=c*f,M=c*m,E=d*f,C=d*m;t[0]=f*x,t[4]=-_,t[8]=m*x,t[1]=y*_+C,t[5]=c*x,t[9]=M*_-E,t[2]=E*_-M,t[6]=d*x,t[10]=C*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xE,e,vE)}lookAt(e,t,r){const a=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Gr.crossVectors(r,ai),Gr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Gr.crossVectors(r,ai)),Gr.normalize(),Kl.crossVectors(ai,Gr),a[0]=Gr.x,a[4]=Kl.x,a[8]=ai.x,a[1]=Gr.y,a[5]=Kl.y,a[9]=ai.y,a[2]=Gr.z,a[6]=Kl.z,a[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],m=r[12],x=r[1],_=r[5],y=r[9],M=r[13],E=r[2],C=r[6],S=r[10],g=r[14],R=r[3],P=r[7],T=r[11],I=r[15],L=a[0],k=a[4],w=a[8],U=a[12],z=a[1],V=a[5],Z=a[9],ce=a[13],he=a[2],q=a[6],fe=a[10],Q=a[14],$=a[3],le=a[7],re=a[11],O=a[15];return l[0]=c*L+d*z+f*he+m*$,l[4]=c*k+d*V+f*q+m*le,l[8]=c*w+d*Z+f*fe+m*re,l[12]=c*U+d*ce+f*Q+m*O,l[1]=x*L+_*z+y*he+M*$,l[5]=x*k+_*V+y*q+M*le,l[9]=x*w+_*Z+y*fe+M*re,l[13]=x*U+_*ce+y*Q+M*O,l[2]=E*L+C*z+S*he+g*$,l[6]=E*k+C*V+S*q+g*le,l[10]=E*w+C*Z+S*fe+g*re,l[14]=E*U+C*ce+S*Q+g*O,l[3]=R*L+P*z+T*he+I*$,l[7]=R*k+P*V+T*q+I*le,l[11]=R*w+P*Z+T*fe+I*re,l[15]=R*U+P*ce+T*Q+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],f=e[9],m=e[13],x=e[2],_=e[6],y=e[10],M=e[14],E=e[3],C=e[7],S=e[11],g=e[15],R=f*M-m*y,P=d*M-m*_,T=d*y-f*_,I=c*M-m*x,L=c*y-f*x,k=c*_-d*x;return t*(C*R-S*P+g*T)-r*(E*R-S*I+g*L)+a*(E*P-C*I+g*k)-l*(E*T-C*L+S*k)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],f=e[2],m=e[6],x=e[10];return t*(c*x-d*m)-r*(l*x-d*f)+a*(l*m-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],m=e[7],x=e[8],_=e[9],y=e[10],M=e[11],E=e[12],C=e[13],S=e[14],g=e[15],R=t*d-r*c,P=t*f-a*c,T=t*m-l*c,I=r*f-a*d,L=r*m-l*d,k=a*m-l*f,w=x*C-_*E,U=x*S-y*E,z=x*g-M*E,V=_*S-y*C,Z=_*g-M*C,ce=y*g-M*S,he=R*ce-P*Z+T*V+I*z-L*U+k*w;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/he;return e[0]=(d*ce-f*Z+m*V)*q,e[1]=(a*Z-r*ce-l*V)*q,e[2]=(C*k-S*L+g*I)*q,e[3]=(y*L-_*k-M*I)*q,e[4]=(f*z-c*ce-m*U)*q,e[5]=(t*ce-a*z+l*U)*q,e[6]=(S*T-E*k-g*P)*q,e[7]=(x*k-y*T+M*P)*q,e[8]=(c*Z-d*z+m*w)*q,e[9]=(r*z-t*Z-l*w)*q,e[10]=(E*L-C*T+g*R)*q,e[11]=(_*T-x*L-M*R)*q,e[12]=(d*U-c*V-f*w)*q,e[13]=(t*V-r*U+a*w)*q,e[14]=(C*P-E*I-S*R)*q,e[15]=(x*I-_*P+y*R)*q,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,m=l*c,x=l*d;return this.set(m*c+r,m*d-a*f,m*f+a*d,0,m*d+a*f,x*d+r,x*f-a*c,0,m*f-a*d,x*f+a*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,m=l+l,x=c+c,_=d+d,y=l*m,M=l*x,E=l*_,C=c*x,S=c*_,g=d*_,R=f*m,P=f*x,T=f*_,I=r.x,L=r.y,k=r.z;return a[0]=(1-(C+g))*I,a[1]=(M+T)*I,a[2]=(E-P)*I,a[3]=0,a[4]=(M-T)*L,a[5]=(1-(y+g))*L,a[6]=(S+R)*L,a[7]=0,a[8]=(E+P)*k,a[9]=(S-R)*k,a[10]=(1-(y+C))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=la.set(a[0],a[1],a[2]).length();const d=la.set(a[4],a[5],a[6]).length(),f=la.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Ci.copy(this);const m=1/c,x=1/d,_=1/f;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=x,Ci.elements[5]*=x,Ci.elements[6]*=x,Ci.elements[8]*=_,Ci.elements[9]*=_,Ci.elements[10]*=_,t.setFromRotationMatrix(Ci),r.x=c,r.y=d,r.z=f,this}makePerspective(e,t,r,a,l,c,d=Wi,f=!1){const m=this.elements,x=2*l/(t-e),_=2*l/(r-a),y=(t+e)/(t-e),M=(r+a)/(r-a);let E,C;if(f)E=l/(c-l),C=c*l/(c-l);else if(d===Wi)E=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Oo)E=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=Wi,f=!1){const m=this.elements,x=2/(t-e),_=2/(r-a),y=-(t+e)/(t-e),M=-(r+a)/(r-a);let E,C;if(f)E=1/(c-l),C=c/(c-l);else if(d===Wi)E=-2/(c-l),C=-(c+l)/(c-l);else if(d===Oo)E=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=E,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Oc.prototype.isMatrix4=!0;let ln=Oc;const la=new te,Ci=new ln,xE=new te(0,0,0),vE=new te(1,1,1),Gr=new te,Kl=new te,ai=new te,wg=new ln,Eg=new Da;class ts{constructor(e=0,t=0,r=0,a=ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],f=a[1],m=a[5],x=a[9],_=a[2],y=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Pt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Eg.setFromEuler(this),this.setFromQuaternion(Eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ts.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _E=0;const Tg=new te,ca=new Da,cr=new ln,Zl=new te,yo=new te,yE=new te,SE=new Da,Ag=new te(1,0,0),Cg=new te(0,1,0),Rg=new te(0,0,1),Ng={type:"added"},ME={type:"removed"},ua={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Bn extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_E++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new te,t=new ts,r=new Da,a=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new ln},normalMatrix:{value:new _t}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.multiply(ca),this}rotateOnWorldAxis(e,t){return ca.setFromAxisAngle(e,t),this.quaternion.premultiply(ca),this}rotateX(e){return this.rotateOnAxis(Ag,e)}rotateY(e){return this.rotateOnAxis(Cg,e)}rotateZ(e){return this.rotateOnAxis(Rg,e)}translateOnAxis(e,t){return Tg.copy(e).applyQuaternion(this.quaternion),this.position.add(Tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ag,e)}translateY(e){return this.translateOnAxis(Cg,e)}translateZ(e){return this.translateOnAxis(Rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Zl.copy(e):Zl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(yo,Zl,this.up):cr.lookAt(Zl,yo,this.up),this.quaternion.setFromRotationMatrix(cr),a&&(cr.extractRotation(a.matrixWorld),ca.setFromRotationMatrix(cr),this.quaternion.premultiply(ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ng),ua.child=e,this.dispatchEvent(ua),ua.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ME),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ng),ua.child=e,this.dispatchEvent(ua),ua.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,yE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,SE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let m=0,x=f.length;m<x;m++){const _=f[m];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,m=this.material.length;f<m;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),m=c(e.textures),x=c(e.images),_=c(e.shapes),y=c(e.skeletons),M=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(d){const f=[];for(const m in d){const x=d[m];delete x.metadata,f.push(x)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Bn.DEFAULT_UP=new te(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Co extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bE={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,f=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),g=this._getHandJoint(m,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,E=.005;m.inputState.pinching&&y>M+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=M-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(bE)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Co;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Tv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jr={h:0,s:0,l:0},Jl={h:0,s:0,l:0};function Jd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Dt.workingColorSpace){if(e=uE(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Jd(c,l,e+1/3),this.g=Jd(c,l,e),this.b=Jd(c,l,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Tv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Dt.workingToColorSpace(On.copy(this),e),Math.round(Pt(On.r*255,0,255))*65536+Math.round(Pt(On.g*255,0,255))*256+Math.round(Pt(On.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(On.copy(this),t);const r=On.r,a=On.g,l=On.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let f,m;const x=(d+c)/2;if(d===c)f=0,m=0;else{const _=c-d;switch(m=x<=.5?_/(c+d):_/(2-c-d),c){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=m,e.l=x,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=xi){Dt.workingToColorSpace(On.copy(this),e);const t=On.r,r=On.g,a=On.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(jr),this.setHSL(jr.h+e,jr.s+t,jr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(jr),e.getHSL(Jl);const r=Wd(jr.h,Jl.h,t),a=Wd(jr.s,Jl.s,t),l=Wd(jr.l,Jl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Et;Et.NAMES=Tv;class wE extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ts,this.environmentIntensity=1,this.environmentRotation=new ts,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new te,ur=new te,Qd=new te,dr=new te,da=new te,fa=new te,Pg=new te,ef=new te,tf=new te,nf=new te,rf=new an,sf=new an,af=new an;class Li{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Ri.subVectors(e,t),a.cross(Ri);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Ri.subVectors(a,t),ur.subVectors(r,t),Qd.subVectors(e,t);const c=Ri.dot(Ri),d=Ri.dot(ur),f=Ri.dot(Qd),m=ur.dot(ur),x=ur.dot(Qd),_=c*m-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(m*f-d*x)*y,E=(c*x-d*f)*y;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,r,a,l,c,d,f){return this.getBarycoord(e,t,r,a,dr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,dr.x),f.addScaledVector(c,dr.y),f.addScaledVector(d,dr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,c){return rf.setScalar(0),sf.setScalar(0),af.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,r),af.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(rf,l.x),c.addScaledVector(sf,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,r,a){return Ri.subVectors(r,t),ur.subVectors(e,t),Ri.cross(ur).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ri.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Li.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;da.subVectors(a,r),fa.subVectors(l,r),ef.subVectors(e,r);const f=da.dot(ef),m=fa.dot(ef);if(f<=0&&m<=0)return t.copy(r);tf.subVectors(e,a);const x=da.dot(tf),_=fa.dot(tf);if(x>=0&&_<=x)return t.copy(a);const y=f*_-x*m;if(y<=0&&f>=0&&x<=0)return c=f/(f-x),t.copy(r).addScaledVector(da,c);nf.subVectors(e,l);const M=da.dot(nf),E=fa.dot(nf);if(E>=0&&M<=E)return t.copy(l);const C=M*m-f*E;if(C<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(fa,d);const S=x*E-M*_;if(S<=0&&_-x>=0&&M-E>=0)return Pg.subVectors(l,a),d=(_-x)/(_-x+(M-E)),t.copy(a).addScaledVector(Pg,d);const g=1/(S+C+y);return c=C*g,d=y*g,t.copy(r).addScaledVector(da,c).addScaledVector(fa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class jo{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(l,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ql.copy(r.boundingBox)),Ql.applyMatrix4(e.matrixWorld),this.union(Ql)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),ec.subVectors(this.max,So),ha.subVectors(e.a,So),pa.subVectors(e.b,So),ma.subVectors(e.c,So),Wr.subVectors(pa,ha),Xr.subVectors(ma,pa),vs.subVectors(ha,ma);let t=[0,-Wr.z,Wr.y,0,-Xr.z,Xr.y,0,-vs.z,vs.y,Wr.z,0,-Wr.x,Xr.z,0,-Xr.x,vs.z,0,-vs.x,-Wr.y,Wr.x,0,-Xr.y,Xr.x,0,-vs.y,vs.x,0];return!of(t,ha,pa,ma,ec)||(t=[1,0,0,0,1,0,0,0,1],!of(t,ha,pa,ma,ec))?!1:(tc.crossVectors(Wr,Xr),t=[tc.x,tc.y,tc.z],of(t,ha,pa,ma,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new te,new te,new te,new te,new te,new te,new te,new te],Ni=new te,Ql=new jo,ha=new te,pa=new te,ma=new te,Wr=new te,Xr=new te,vs=new te,So=new te,ec=new te,tc=new te,_s=new te;function of(i,e,t,r,a){for(let l=0,c=i.length-3;l<=c;l+=3){_s.fromArray(i,l);const d=a.x*Math.abs(_s.x)+a.y*Math.abs(_s.y)+a.z*Math.abs(_s.z),f=e.dot(_s),m=t.dot(_s),x=r.dot(_s);if(Math.max(-Math.max(f,m,x),Math.min(f,m,x))>d)return!1}return!0}const mn=new te,nc=new Lt;let EE=0;class $i extends Us{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:EE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=xg,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=_o(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_o(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_o(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_o(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_o(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),a=Qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),a=Qn(a,this.array),l=Qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Av extends $i{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Cv extends $i{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class vi extends $i{constructor(e,t,r){super(new Float32Array(e),t,r)}}const TE=new jo,Mo=new te,lf=new te;class Kh{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):TE.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Mo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(lf)),this.expandByPoint(Mo.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let AE=0;const gi=new ln,cf=new Bn,ga=new te,oi=new jo,bo=new jo,bn=new te;class Zi extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:AE++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aE(e)?Cv:Av)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,r){return gi.makeTranslation(e,t,r),this.applyMatrix4(gi),this}scale(e,t,r){return gi.makeScale(e,t,r),this.applyMatrix4(gi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new vi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];oi.setFromBufferAttribute(l),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];bo.setFromBufferAttribute(d),this.morphTargetsRelative?(bn.addVectors(oi.min,bo.min),oi.expandByPoint(bn),bn.addVectors(oi.max,bo.max),oi.expandByPoint(bn)):(oi.expandByPoint(bo.min),oi.expandByPoint(bo.max))}oi.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)bn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(bn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)bn.fromBufferAttribute(d,m),f&&(ga.fromBufferAttribute(e,m),bn.add(ga)),a=Math.max(a,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new $i(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let w=0;w<r.count;w++)d[w]=new te,f[w]=new te;const m=new te,x=new te,_=new te,y=new Lt,M=new Lt,E=new Lt,C=new te,S=new te;function g(w,U,z){m.fromBufferAttribute(r,w),x.fromBufferAttribute(r,U),_.fromBufferAttribute(r,z),y.fromBufferAttribute(l,w),M.fromBufferAttribute(l,U),E.fromBufferAttribute(l,z),x.sub(m),_.sub(m),M.sub(y),E.sub(y);const V=1/(M.x*E.y-E.x*M.y);isFinite(V)&&(C.copy(x).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-E.x).multiplyScalar(V),d[w].add(C),d[U].add(C),d[z].add(C),f[w].add(S),f[U].add(S),f[z].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,U=R.length;w<U;++w){const z=R[w],V=z.start,Z=z.count;for(let ce=V,he=V+Z;ce<he;ce+=3)g(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new te,T=new te,I=new te,L=new te;function k(w){I.fromBufferAttribute(a,w),L.copy(I);const U=d[w];P.copy(U),P.sub(I.multiplyScalar(I.dot(U))).normalize(),T.crossVectors(L,U);const V=T.dot(f[w])<0?-1:1;c.setXYZW(w,P.x,P.y,P.z,V)}for(let w=0,U=R.length;w<U;++w){const z=R[w],V=z.start,Z=z.count;for(let ce=V,he=V+Z;ce<he;ce+=3)k(e.getX(ce+0)),k(e.getX(ce+1)),k(e.getX(ce+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new $i(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new te,l=new te,c=new te,d=new te,f=new te,m=new te,x=new te,_=new te;if(e)for(let y=0,M=e.count;y<M;y+=3){const E=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),x.subVectors(c,l),_.subVectors(a,l),x.cross(_),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(x),f.add(x),m.add(x),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,M=t.count;y<M;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),x.subVectors(c,l),_.subVectors(a,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(d,f){const m=d.array,x=d.itemSize,_=d.normalized,y=new m.constructor(f.length*x);let M=0,E=0;for(let C=0,S=f.length;C<S;C++){d.isInterleavedBufferAttribute?M=f[C]*d.data.stride+d.offset:M=f[C]*x;for(let g=0;g<x;g++)y[E++]=m[M++]}return new $i(y,x,_)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zi,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],m=e(f,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const f=[],m=l[d];for(let x=0,_=m.length;x<_;x++){const y=m[x],M=e(y,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const m in f)f[m]!==void 0&&(e[m]=f[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const m=r[f];e.data.attributes[f]=m.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const m=this.morphAttributes[f],x=[];for(let _=0,y=m.length;_<y;_++){const M=m[_];x.push(M.toJSON(e.data))}x.length>0&&(a[f]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const x=a[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],_=l[m];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,x=c.length;m<x;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let CE=0;class Wo extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=ya,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=Ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ya&&(r.blending=this.blending),this.side!==es&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pf&&(r.blendSrc=this.blendSrc),this.blendDst!==Lf&&(r.blendDst=this.blendDst),this.blendEquation!==Ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ea&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==aa&&(r.stencilFail=this.stencilFail),this.stencilZFail!==aa&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==aa&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const hr=new te,uf=new te,ic=new te,qr=new te,df=new te,rc=new te,ff=new te;class Rv{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hr.copy(this.origin).addScaledVector(this.direction,t),hr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){uf.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),qr.copy(this.origin).sub(uf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ic),d=qr.dot(this.direction),f=-qr.dot(ic),m=qr.lengthSq(),x=Math.abs(1-c*c);let _,y,M,E;if(x>0)if(_=c*f-d,y=c*d-f,E=l*x,_>=0)if(y>=-E)if(y<=E){const C=1/x;_*=C,y*=C,M=_*(_+c*y+2*d)+y*(c*_+y+2*f)+m}else y=l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+m;else y=-l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+m;else y<=-E?(_=Math.max(0,-(-c*l+d)),y=_>0?-l:Math.min(Math.max(-l,-f),l),M=-_*_+y*(y+2*f)+m):y<=E?(_=0,y=Math.min(Math.max(-l,-f),l),M=y*(y+2*f)+m):(_=Math.max(0,-(c*l+d)),y=_>0?l:Math.min(Math.max(-l,-f),l),M=-_*_+y*(y+2*f)+m);else y=c>0?-l:l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(uf).addScaledVector(ic,y),M}intersectSphere(e,t){hr.subVectors(e.center,this.origin);const r=hr.dot(this.direction),a=hr.dot(hr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,f;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,a=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,a=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,c=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,c=(e.min.y-y.y)*x),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-y.z)*_,f=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,f=(e.min.z-y.z)*_),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,hr)!==null}intersectTriangle(e,t,r,a,l){df.subVectors(t,e),rc.subVectors(r,e),ff.crossVectors(df,rc);let c=this.direction.dot(ff),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;qr.subVectors(this.origin,e);const f=d*this.direction.dot(rc.crossVectors(qr,rc));if(f<0)return null;const m=d*this.direction.dot(df.cross(qr));if(m<0||f+m>c)return null;const x=-d*qr.dot(ff);return x<0?null:this.at(x/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nv extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lg=new ln,ys=new Rv,sc=new Kh,Dg=new te,ac=new te,oc=new te,lc=new te,hf=new te,cc=new te,Ig=new te,uc=new te;class Ii extends Bn{constructor(e=new Zi,t=new Nv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){cc.set(0,0,0);for(let f=0,m=l.length;f<m;f++){const x=d[f],_=l[f];x!==0&&(hf.fromBufferAttribute(_,e),c?cc.addScaledVector(hf,x):cc.addScaledVector(hf.sub(t),x))}t.add(cc)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),sc.copy(r.boundingSphere),sc.applyMatrix4(l),ys.copy(e.ray).recast(e.near),!(sc.containsPoint(ys.origin)===!1&&(ys.intersectSphere(sc,Dg)===null||ys.origin.distanceToSquared(Dg)>(e.far-e.near)**2))&&(Lg.copy(l).invert(),ys.copy(e.ray).applyMatrix4(Lg),!(r.boundingBox!==null&&ys.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ys)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,C=y.length;E<C;E++){const S=y[E],g=c[S.materialIndex],R=Math.max(S.start,M.start),P=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let T=R,I=P;T<I;T+=3){const L=d.getX(T),k=d.getX(T+1),w=d.getX(T+2);a=dc(this,g,e,r,m,x,_,L,k,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=E,g=C;S<g;S+=3){const R=d.getX(S),P=d.getX(S+1),T=d.getX(S+2);a=dc(this,c,e,r,m,x,_,R,P,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let E=0,C=y.length;E<C;E++){const S=y[E],g=c[S.materialIndex],R=Math.max(S.start,M.start),P=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let T=R,I=P;T<I;T+=3){const L=T,k=T+1,w=T+2;a=dc(this,g,e,r,m,x,_,L,k,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=E,g=C;S<g;S+=3){const R=S,P=S+1,T=S+2;a=dc(this,c,e,r,m,x,_,R,P,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function RE(i,e,t,r,a,l,c,d){let f;if(e.side===ti?f=r.intersectTriangle(c,l,a,!0,d):f=r.intersectTriangle(a,l,c,e.side===es,d),f===null)return null;uc.copy(d),uc.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(uc);return m<t.near||m>t.far?null:{distance:m,point:uc.clone(),object:i}}function dc(i,e,t,r,a,l,c,d,f,m){i.getVertexPosition(d,ac),i.getVertexPosition(f,oc),i.getVertexPosition(m,lc);const x=RE(i,e,t,r,ac,oc,lc,Ig);if(x){const _=new te;Li.getBarycoord(Ig,ac,oc,lc,_),a&&(x.uv=Li.getInterpolatedAttribute(a,d,f,m,_,new Lt)),l&&(x.uv1=Li.getInterpolatedAttribute(l,d,f,m,_,new Lt)),c&&(x.normal=Li.getInterpolatedAttribute(c,d,f,m,_,new te),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:f,c:m,normal:new te,materialIndex:0};Li.getNormal(ac,oc,lc,y.normal),x.face=y,x.barycoord=_}return x}class NE extends jn{constructor(e=null,t=1,r=1,a,l,c,d,f,m=Cn,x=Cn,_,y){super(null,c,d,f,m,x,a,l,_,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new te,PE=new te,LE=new _t;class Yr{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=pf.subVectors(r,t).cross(PE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(pf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||LE.getNormalMatrix(e),a=this.coplanarPoint(pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new Kh,DE=new Lt(.5,.5),fc=new te;class Zh{constructor(e=new Yr,t=new Yr,r=new Yr,a=new Yr,l=new Yr,c=new Yr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],m=l[3],x=l[4],_=l[5],y=l[6],M=l[7],E=l[8],C=l[9],S=l[10],g=l[11],R=l[12],P=l[13],T=l[14],I=l[15];if(a[0].setComponents(m-c,M-x,g-E,I-R).normalize(),a[1].setComponents(m+c,M+x,g+E,I+R).normalize(),a[2].setComponents(m+d,M+_,g+C,I+P).normalize(),a[3].setComponents(m-d,M-_,g-C,I-P).normalize(),r)a[4].setComponents(f,y,S,T).normalize(),a[5].setComponents(m-f,M-y,g-S,I-T).normalize();else if(a[4].setComponents(m-f,M-y,g-S,I-T).normalize(),t===Wi)a[5].setComponents(m+f,M+y,g+S,I+T).normalize();else if(t===Oo)a[5].setComponents(f,y,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ss)}intersectsSprite(e){Ss.center.set(0,0,0);const t=DE.distanceTo(e.center);return Ss.radius=.7071067811865476+t,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(fc.x=a.normal.x>0?e.max.x:e.min.x,fc.y=a.normal.y>0?e.max.y:e.min.y,fc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(fc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Pv extends jn{constructor(e=[],t=Ls,r,a,l,c,d,f,m,x){super(e,t,r,a,l,c,d,f,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Aa extends jn{constructor(e,t,r=Yi,a,l,c,d=Cn,f=Cn,m,x=_r,_=1){if(x!==_r&&x!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:_};super(y,a,l,c,d,f,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class IE extends Aa{constructor(e,t=Yi,r=Ls,a,l,c=Cn,d=Cn,f,m=_r){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,r,a,l,c,d,f,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Lv extends jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ia extends Zi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],m=[],x=[],_=[];let y=0,M=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new vi(m,3)),this.setAttribute("normal",new vi(x,3)),this.setAttribute("uv",new vi(_,2));function E(C,S,g,R,P,T,I,L,k,w,U){const z=T/k,V=I/w,Z=T/2,ce=I/2,he=L/2,q=k+1,fe=w+1;let Q=0,$=0;const le=new te;for(let re=0;re<fe;re++){const O=re*V-ce;for(let J=0;J<q;J++){const Ne=J*z-Z;le[C]=Ne*R,le[S]=O*P,le[g]=he,m.push(le.x,le.y,le.z),le[C]=0,le[S]=0,le[g]=L>0?1:-1,x.push(le.x,le.y,le.z),_.push(J/k),_.push(1-re/w),Q+=1}}for(let re=0;re<w;re++)for(let O=0;O<k;O++){const J=y+O+q*re,Ne=y+O+q*(re+1),Ve=y+(O+1)+q*(re+1),He=y+(O+1)+q*re;f.push(J,Ne,He),f.push(Ne,Ve,He),$+=6}d.addGroup(M,$,U),M+=$,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xc extends Zi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(a),m=d+1,x=f+1,_=e/d,y=t/f,M=[],E=[],C=[],S=[];for(let g=0;g<x;g++){const R=g*y-c;for(let P=0;P<m;P++){const T=P*_-l;E.push(T,-R,0),C.push(0,0,1),S.push(P/d),S.push(1-g/f)}}for(let g=0;g<f;g++)for(let R=0;R<d;R++){const P=R+m*g,T=R+m*(g+1),I=R+1+m*(g+1),L=R+1+m*g;M.push(P,T,L),M.push(T,I,L)}this.setIndex(M),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(C,3)),this.setAttribute("uv",new vi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jh extends Zi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let m=0;const x=[],_=new te,y=new te,M=[],E=[],C=[],S=[];for(let g=0;g<=r;g++){const R=[],P=g/r,T=c+P*d,I=e*Math.cos(T),L=Math.sqrt(e*e-I*I);let k=0;g===0&&c===0?k=.5/t:g===r&&f===Math.PI&&(k=-.5/t);for(let w=0;w<=t;w++){const U=w/t,z=a+U*l;_.x=-L*Math.cos(z),_.y=I,_.z=L*Math.sin(z),E.push(_.x,_.y,_.z),y.copy(_).normalize(),C.push(y.x,y.y,y.z),S.push(U+k,1-P),R.push(m++)}x.push(R)}for(let g=0;g<r;g++)for(let R=0;R<t;R++){const P=x[g][R+1],T=x[g][R],I=x[g+1][R],L=x[g+1][R+1];(g!==0||c>0)&&M.push(P,T,L),(g!==r-1||f<Math.PI)&&M.push(T,I,L)}this.setIndex(M),this.setAttribute("position",new vi(E,3)),this.setAttribute("normal",new vi(C,3)),this.setAttribute("uv",new vi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ca(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];if(Ug(a))a.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Ug(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Hn(i){const e={};for(let t=0;t<i.length;t++){const r=Ca(i[t]);for(const a in r)e[a]=r[a]}return e}function Ug(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function UE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Dv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const OE={clone:Ca,merge:Hn};var FE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ki extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ca(e.uniforms),this.uniformsGroups=UE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(a.value);break;case"v2":this.uniforms[r].value=new Lt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new te().fromArray(a.value);break;case"v4":this.uniforms[r].value=new an().fromArray(a.value);break;case"m3":this.uniforms[r].value=new _t().fromArray(a.value);break;case"m4":this.uniforms[r].value=new ln().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class BE extends Ki{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Iv extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ts,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class zE extends Iv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class VE extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class HE extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qh extends Bn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const mf=new ln,Og=new te,Fg=new te;class Uv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=ci,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Og.setFromMatrixPosition(e.matrixWorld),t.position.copy(Og),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Oo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const hc=new te,pc=new Da,zi=new te;class Ov extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(hc,pc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(hc,pc,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(hc,pc,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $r=new te,kg=new Lt,Bg=new Lt;class li extends Ov{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){$r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($r.x,$r.y).multiplyScalar(-e/$r.z),$r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set($r.x,$r.y).multiplyScalar(-e/$r.z)}getViewSize(e,t){return this.getViewBounds(e,kg,Bg),t.subVectors(Bg,kg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*r/m,a*=c.width/f,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class GE extends Uv{constructor(){super(new li(90,1,.5,500)),this.isPointLightShadow=!0}}class jE extends Qh{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new GE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ep extends Ov{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=x*this.view.offsetY,f=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class WE extends Uv{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class XE extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bn.DEFAULT_UP),this.updateMatrix(),this.target=new Bn,this.shadow=new WE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qE extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xa=-90,va=1;class $E extends Bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new li(xa,va,e,t);a.layers=this.layers,this.add(a);const l=new li(xa,va,e,t);l.layers=this.layers,this.add(l);const c=new li(xa,va,e,t);c.layers=this.layers,this.add(c);const d=new li(xa,va,e,t);d.layers=this.layers,this.add(d);const f=new li(xa,va,e,t);f.layers=this.layers,this.add(f);const m=new li(xa,va,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,f]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Oo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,m,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(_,y,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class YE extends li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zg=new ln;class KE{constructor(e,t,r=0,a=1/0){this.ray=new Rv(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(e,t=!0,r=[]){return yh(e,this,r,t),r.sort(Vg),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)yh(e[a],this,r,t);return r.sort(Vg),r}}function Vg(i,e){return i.distance-e.distance}function yh(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=i.children;for(let c=0,d=l.length;c<d;c++)yh(l[c],e,t,!0)}}class ZE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sp=class sp{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};sp.prototype.isMatrix2=!0;let Hg=sp;function Gg(i,e,t,r){const a=JE(r);switch(t){case Sv:return i*e;case bv:return i*e/a.components*a.byteLength;case Gh:return i*e/a.components*a.byteLength;case Ds:return i*e*2/a.components*a.byteLength;case jh:return i*e*2/a.components*a.byteLength;case Mv:return i*e*3/a.components*a.byteLength;case Di:return i*e*4/a.components*a.byteLength;case Wh:return i*e*4/a.components*a.byteLength;case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case wc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Wf:return Math.max(i,16)*Math.max(e,8)/4;case Hf:case jf:return Math.max(i,8)*Math.max(e,8)/2;case Xf:case qf:case Yf:case Kf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $f:case Pc:case Zf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Lc:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function JE(i){switch(i){case ci:case xv:return{byteLength:1,components:1};case Io:case vv:case vr:return{byteLength:2,components:1};case Vh:case Hh:return{byteLength:2,components:4};case Yi:case zh:case ji:return{byteLength:4,components:1};case _v:case yv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let i=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function QE(i){const e=new WeakMap;function t(d,f){const m=d.array,x=d.usage,_=m.byteLength,y=i.createBuffer();i.bindBuffer(f,y),i.bufferData(f,m,x),d.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=i.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,m){const x=f.array,_=f.updateRanges;if(i.bindBuffer(m,d),_.length===0)i.bufferSubData(m,0,x);else{_.sort((M,E)=>M.start-E.start);let y=0;for(let M=1;M<_.length;M++){const E=_[y],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++y,_[y]=C)}_.length=y+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];i.bufferSubData(m,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,f));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,f),m.version=d.version}}return{get:a,remove:l,update:c}}var eT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tT=`#ifdef USE_ALPHAHASH
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
#endif`,nT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,iT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aT=`#ifdef USE_AOMAP
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
#endif`,oT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lT=`#ifdef USE_BATCHING
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
#endif`,cT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hT=`#ifdef USE_IRIDESCENCE
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
#endif`,pT=`#ifdef USE_BUMPMAP
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
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,bT=`#define PI 3.141592653589793
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
} // validated`,wT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ET=`vec3 transformedNormal = objectNormal;
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
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,FT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VT=`#ifdef USE_GRADIENTMAP
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
}`,HT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XT=`#ifdef USE_ENVMAP
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
#endif`,qT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ZT=`PhysicalMaterial material;
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
#endif`,JT=`uniform sampler2D dfgLUT;
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
}`,QT=`
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
#endif`,e2=`#if defined( RE_IndirectDiffuse )
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,i2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u2=`#if defined( USE_POINTS_UV )
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
#endif`,d2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,f2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`#ifdef USE_MORPHTARGETS
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
#endif`,x2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b2=`#ifdef USE_NORMALMAP
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
#endif`,w2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,C2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,N2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,P2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,k2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,B2=`float getShadowMask() {
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
}`,z2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,j2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$2=`#ifdef USE_TRANSMISSION
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
#endif`,Y2=`#ifdef USE_TRANSMISSION
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tA=`uniform sampler2D t2D;
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aA=`#include <common>
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
}`,oA=`#if DEPTH_PACKING == 3200
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
}`,lA=`#define DISTANCE
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
}`,cA=`#define DISTANCE
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
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`uniform float scale;
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#include <common>
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#define LAMBERT
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
}`,xA=`#define LAMBERT
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
}`,vA=`#define MATCAP
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
}`,_A=`#define MATCAP
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
}`,yA=`#define NORMAL
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
}`,SA=`#define NORMAL
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
}`,MA=`#define PHONG
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
}`,bA=`#define PHONG
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
}`,wA=`#define STANDARD
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
}`,EA=`#define STANDARD
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
}`,TA=`#define TOON
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
}`,AA=`#define TOON
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
}`,CA=`uniform float size;
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
}`,RA=`uniform vec3 diffuse;
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
}`,NA=`#include <common>
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
}`,PA=`uniform vec3 color;
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
}`,LA=`uniform float rotation;
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
}`,DA=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:eT,alphahash_pars_fragment:tT,alphamap_fragment:nT,alphamap_pars_fragment:iT,alphatest_fragment:rT,alphatest_pars_fragment:sT,aomap_fragment:aT,aomap_pars_fragment:oT,batching_pars_vertex:lT,batching_vertex:cT,begin_vertex:uT,beginnormal_vertex:dT,bsdfs:fT,iridescence_fragment:hT,bumpmap_pars_fragment:pT,clipping_planes_fragment:mT,clipping_planes_pars_fragment:gT,clipping_planes_pars_vertex:xT,clipping_planes_vertex:vT,color_fragment:_T,color_pars_fragment:yT,color_pars_vertex:ST,color_vertex:MT,common:bT,cube_uv_reflection_fragment:wT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:AT,emissivemap_fragment:CT,emissivemap_pars_fragment:RT,colorspace_fragment:NT,colorspace_pars_fragment:PT,envmap_fragment:LT,envmap_common_pars_fragment:DT,envmap_pars_fragment:IT,envmap_pars_vertex:UT,envmap_physical_pars_fragment:XT,envmap_vertex:OT,fog_vertex:FT,fog_pars_vertex:kT,fog_fragment:BT,fog_pars_fragment:zT,gradientmap_pars_fragment:VT,lightmap_pars_fragment:HT,lights_lambert_fragment:GT,lights_lambert_pars_fragment:jT,lights_pars_begin:WT,lights_toon_fragment:qT,lights_toon_pars_fragment:$T,lights_phong_fragment:YT,lights_phong_pars_fragment:KT,lights_physical_fragment:ZT,lights_physical_pars_fragment:JT,lights_fragment_begin:QT,lights_fragment_maps:e2,lights_fragment_end:t2,lightprobes_pars_fragment:n2,logdepthbuf_fragment:i2,logdepthbuf_pars_fragment:r2,logdepthbuf_pars_vertex:s2,logdepthbuf_vertex:a2,map_fragment:o2,map_pars_fragment:l2,map_particle_fragment:c2,map_particle_pars_fragment:u2,metalnessmap_fragment:d2,metalnessmap_pars_fragment:f2,morphinstance_vertex:h2,morphcolor_vertex:p2,morphnormal_vertex:m2,morphtarget_pars_vertex:g2,morphtarget_vertex:x2,normal_fragment_begin:v2,normal_fragment_maps:_2,normal_pars_fragment:y2,normal_pars_vertex:S2,normal_vertex:M2,normalmap_pars_fragment:b2,clearcoat_normal_fragment_begin:w2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:T2,iridescence_pars_fragment:A2,opaque_fragment:C2,packing:R2,premultiplied_alpha_fragment:N2,project_vertex:P2,dithering_fragment:L2,dithering_pars_fragment:D2,roughnessmap_fragment:I2,roughnessmap_pars_fragment:U2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:F2,shadowmap_vertex:k2,shadowmask_pars_fragment:B2,skinbase_vertex:z2,skinning_pars_vertex:V2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:j2,specularmap_pars_fragment:W2,tonemapping_fragment:X2,tonemapping_pars_fragment:q2,transmission_fragment:$2,transmission_pars_fragment:Y2,uv_pars_fragment:K2,uv_pars_vertex:Z2,uv_vertex:J2,worldpos_vertex:Q2,background_vert:eA,background_frag:tA,backgroundCube_vert:nA,backgroundCube_frag:iA,cube_vert:rA,cube_frag:sA,depth_vert:aA,depth_frag:oA,distance_vert:lA,distance_frag:cA,equirect_vert:uA,equirect_frag:dA,linedashed_vert:fA,linedashed_frag:hA,meshbasic_vert:pA,meshbasic_frag:mA,meshlambert_vert:gA,meshlambert_frag:xA,meshmatcap_vert:vA,meshmatcap_frag:_A,meshnormal_vert:yA,meshnormal_frag:SA,meshphong_vert:MA,meshphong_frag:bA,meshphysical_vert:wA,meshphysical_frag:EA,meshtoon_vert:TA,meshtoon_frag:AA,points_vert:CA,points_frag:RA,shadow_vert:NA,shadow_frag:PA,sprite_vert:LA,sprite_frag:DA},Be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Hn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Hn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Hn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Hn([Be.points,Be.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Hn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Hn([Be.common,Be.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Hn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Hn([Be.sprite,Be.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Hn([Be.common,Be.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Hn([Be.lights,Be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const mc={r:0,b:0,g:0},IA=new ln,kv=new _t;kv.set(-1,0,0,0,1,0,0,0,1);function UA(i,e,t,r,a,l){const c=new Et(0);let d=a===!0?0:1,f,m,x=null,_=0,y=null;function M(R){let P=R.isScene===!0?R.background:null;if(P&&P.isTexture){const T=R.backgroundBlurriness>0;P=e.get(P,T)}return P}function E(R){let P=!1;const T=M(R);T===null?S(c,d):T&&T.isColor&&(S(T,1),P=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,l):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(R,P){const T=M(P);T&&(T.isCubeTexture||T.mapping===Wc)?(m===void 0&&(m=new Ii(new Ia(1,1,1),new Ki({name:"BackgroundCubeMaterial",uniforms:Ca(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,L,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=T,m.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(IA.makeRotationFromEuler(P.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(kv),m.material.toneMapped=Dt.getTransfer(T.colorSpace)!==qt,(x!==T||_!==T.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,x=T,_=T.version,y=i.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Ii(new Xc(2,2),new Ki({name:"BackgroundMaterial",uniforms:Ca(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,f.material.toneMapped=Dt.getTransfer(T.colorSpace)!==qt,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(x!==T||_!==T.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,x=T,_=T.version,y=i.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function S(R,P){R.getRGB(mc,Dv(i)),t.buffers.color.setClear(mc.r,mc.g,mc.b,P,l)}function g(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,P=1){c.set(R),d=P,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,S(c,d)},render:E,addToRenderList:C,dispose:g}}function OA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,c=!1;function d(V,Z,ce,he,q){let fe=!1;const Q=_(V,he,ce,Z);l!==Q&&(l=Q,m(l.object)),fe=M(V,he,ce,q),fe&&E(V,he,ce,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(fe||c)&&(c=!1,T(V,Z,ce,he),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return i.createVertexArray()}function m(V){return i.bindVertexArray(V)}function x(V){return i.deleteVertexArray(V)}function _(V,Z,ce,he){const q=he.wireframe===!0;let fe=r[Z.id];fe===void 0&&(fe={},r[Z.id]=fe);const Q=V.isInstancedMesh===!0?V.id:0;let $=fe[Q];$===void 0&&($={},fe[Q]=$);let le=$[ce.id];le===void 0&&(le={},$[ce.id]=le);let re=le[q];return re===void 0&&(re=y(f()),le[q]=re),re}function y(V){const Z=[],ce=[],he=[];for(let q=0;q<t;q++)Z[q]=0,ce[q]=0,he[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ce,attributeDivisors:he,object:V,attributes:{},index:null}}function M(V,Z,ce,he){const q=l.attributes,fe=Z.attributes;let Q=0;const $=ce.getAttributes();for(const le in $)if($[le].location>=0){const O=q[le];let J=fe[le];if(J===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(J=V.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;Q++}return l.attributesNum!==Q||l.index!==he}function E(V,Z,ce,he){const q={},fe=Z.attributes;let Q=0;const $=ce.getAttributes();for(const le in $)if($[le].location>=0){let O=fe[le];O===void 0&&(le==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),le==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),q[le]=J,Q++}l.attributes=q,l.attributesNum=Q,l.index=he}function C(){const V=l.newAttributes;for(let Z=0,ce=V.length;Z<ce;Z++)V[Z]=0}function S(V){g(V,0)}function g(V,Z){const ce=l.newAttributes,he=l.enabledAttributes,q=l.attributeDivisors;ce[V]=1,he[V]===0&&(i.enableVertexAttribArray(V),he[V]=1),q[V]!==Z&&(i.vertexAttribDivisor(V,Z),q[V]=Z)}function R(){const V=l.newAttributes,Z=l.enabledAttributes;for(let ce=0,he=Z.length;ce<he;ce++)Z[ce]!==V[ce]&&(i.disableVertexAttribArray(ce),Z[ce]=0)}function P(V,Z,ce,he,q,fe,Q){Q===!0?i.vertexAttribIPointer(V,Z,ce,q,fe):i.vertexAttribPointer(V,Z,ce,he,q,fe)}function T(V,Z,ce,he){C();const q=he.attributes,fe=ce.getAttributes(),Q=Z.defaultAttributeValues;for(const $ in fe){const le=fe[$];if(le.location>=0){let re=q[$];if(re===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(re=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(re=V.instanceColor)),re!==void 0){const O=re.normalized,J=re.itemSize,Ne=e.get(re);if(Ne===void 0)continue;const Ve=Ne.buffer,He=Ne.type,K=Ne.bytesPerElement,xe=He===i.INT||He===i.UNSIGNED_INT||re.gpuType===zh;if(re.isInterleavedBufferAttribute){const ge=re.data,Fe=ge.stride,et=re.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<le.locationSize;Je++)g(le.location+Je,ge.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<le.locationSize;Je++)S(le.location+Je);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let Je=0;Je<le.locationSize;Je++)P(le.location+Je,J/le.locationSize,He,O,Fe*K,(et+J/le.locationSize*Je)*K,xe)}else{if(re.isInstancedBufferAttribute){for(let ge=0;ge<le.locationSize;ge++)g(le.location+ge,re.meshPerAttribute);V.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ge=0;ge<le.locationSize;ge++)S(le.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Ve);for(let ge=0;ge<le.locationSize;ge++)P(le.location+ge,J/le.locationSize,He,O,J*K,J/le.locationSize*ge*K,xe)}}else if(Q!==void 0){const O=Q[$];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(le.location,O);break;case 3:i.vertexAttrib3fv(le.location,O);break;case 4:i.vertexAttrib4fv(le.location,O);break;default:i.vertexAttrib1fv(le.location,O)}}}}R()}function I(){U();for(const V in r){const Z=r[V];for(const ce in Z){const he=Z[ce];for(const q in he){const fe=he[q];for(const Q in fe)x(fe[Q].object),delete fe[Q];delete he[q]}}delete r[V]}}function L(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const ce in Z){const he=Z[ce];for(const q in he){const fe=he[q];for(const Q in fe)x(fe[Q].object),delete fe[Q];delete he[q]}}delete r[V.id]}function k(V){for(const Z in r){const ce=r[Z];for(const he in ce){const q=ce[he];if(q[V.id]===void 0)continue;const fe=q[V.id];for(const Q in fe)x(fe[Q].object),delete fe[Q];delete q[V.id]}}}function w(V){for(const Z in r){const ce=r[Z],he=V.isInstancedMesh===!0?V.id:0,q=ce[he];if(q!==void 0){for(const fe in q){const Q=q[fe];for(const $ in Q)x(Q[$].object),delete Q[$];delete q[fe]}delete ce[he],Object.keys(ce).length===0&&delete r[Z]}}}function U(){z(),c=!0,l!==a&&(l=a,m(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:U,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:S,disableUnusedAttributes:R}}function FA(i,e,t){let r;function a(f){r=f}function l(f,m){i.drawArrays(r,f,m),t.update(m,r,1)}function c(f,m,x){x!==0&&(i.drawArraysInstanced(r,f,m,x),t.update(m,r,x))}function d(f,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,m,0,x);let y=0;for(let M=0;M<x;M++)y+=m[M];t.update(y,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function kA(i,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(k){return!(k!==Di&&r.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const w=k===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ci&&r.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ji&&!w)}function f(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=f(m);x!==m&&(pt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&y===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),E=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),P=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=i.getParameter(i.MAX_SAMPLES),L=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:R,maxVaryings:P,maxFragmentUniforms:T,maxSamples:I,samples:L}}function BA(i){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Yr,d=new _t,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||a;return a=y,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,M){const E=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,g=i.get(_);if(!a||E===null||E.length===0||l&&!S)l?x(null):m();else{const R=l?0:r,P=R*4;let T=g.clippingState||null;f.value=T,T=x(E,y,P,M);for(let I=0;I!==P;++I)T[I]=t[I];g.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function m(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,M,E){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=f.value,E!==!0||S===null){const g=M+C*4,R=y.matrixWorldInverse;d.getNormalMatrix(R),(S===null||S.length<g)&&(S=new Float32Array(g));for(let P=0,T=M;P!==C;++P,T+=4)c.copy(_[P]).applyMatrix4(R,d),c.normal.toArray(S,T),S[T+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Jr=4,jg=[.125,.215,.35,.446,.526,.582],bs=20,zA=256,wo=new ep,Wg=new Et;let gf=null,xf=0,vf=0,_f=!1;const VA=new te;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=VA}=l;gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,xf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:vr,format:Di,colorSpace:Dc,depthBuffer:!1},a=qg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=HA(l)),this._blurMaterial=jA(l,e,t),this._ggxMaterial=GA(l,e,t)}return a}_compileMaterial(e){const t=new Ii(new Zi,e);this._renderer.compile(t,wo)}_sceneToCubeUV(e,t,r,a,l){const f=new li(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(Wg),_.toneMapping=Xi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ii(new Ia,new Nv({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let g=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,g=!0):(S.color.copy(Wg),g=!0);for(let P=0;P<6;P++){const T=P%3;T===0?(f.up.set(0,m[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+x[P],l.y,l.z)):T===1?(f.up.set(0,0,m[P]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+x[P],l.z)):(f.up.set(0,m[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+x[P]));const I=this._cubeSize;_a(a,T*I,P>2?I:0,I,I),_.setRenderTarget(a),g&&_.render(C,f),_.render(e,f)}_.toneMapping=M,_.autoClear=y,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Ls||e.mapping===Ta;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;_a(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,wo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-x*x),y=0+m*1.25,M=_*y,{_lodMax:E}=this,C=this._sizeLods[r],S=3*C*(r>E-Jr?r-E+Jr:0),g=4*(this._cubeSize-C);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=E-t,_a(l,S,g,3*C,2*C),a.setRenderTarget(l),a.render(d,wo),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=E-r,_a(e,S,g,3*C,2*C),a.setRenderTarget(e),a.render(d,wo)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const f=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[a];_.material=m;const y=m.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*bs-1),C=l/E,S=isFinite(l)?1+Math.floor(x*C):bs;S>bs&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${bs}`);const g=[];let R=0;for(let k=0;k<bs;++k){const w=k/C,U=Math.exp(-w*w/2);g.push(U),k===0?R+=U:k<S&&(R+=2*U)}for(let k=0;k<g.length;k++)g[k]=g[k]/R;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=E,y.mipInt.value=P-r;const T=this._sizeLods[a],I=3*T*(a>P-Jr?a-P+Jr:0),L=4*(this._cubeSize-T);_a(t,I,L,3*T,2*T),f.setRenderTarget(t),f.render(_,wo)}}function HA(i){const e=[],t=[],r=[];let a=i;const l=i-Jr+1+jg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let f=1/d;c>i-Jr?f=jg[c-i+Jr-1]:c===0&&(f=0),t.push(f);const m=1/(d-2),x=-m,_=1+m,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,E=6,C=3,S=2,g=1,R=new Float32Array(C*E*M),P=new Float32Array(S*E*M),T=new Float32Array(g*E*M);for(let L=0;L<M;L++){const k=L%3*2/3-1,w=L>2?0:-1,U=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];R.set(U,C*E*L),P.set(y,S*E*L);const z=[L,L,L,L,L,L];T.set(z,g*E*L)}const I=new Zi;I.setAttribute("position",new $i(R,C)),I.setAttribute("uv",new $i(P,S)),I.setAttribute("faceIndex",new $i(T,g)),r.push(new Ii(I,null)),a>Jr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function qg(i,e,t){const r=new qi(i,e,t);return r.texture.mapping=Wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _a(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function GA(i,e,t){return new Ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function jA(i,e,t){const r=new Float32Array(bs),a=new te(0,1,0);return new Ki({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:qc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function $g(){return new Ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qc(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function Yg(){return new Ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function qc(){return`

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
	`}class Bv extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Pv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ia(5,5,5),l=new Ki({name:"CubemapFromEquirect",uniforms:Ca(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:gr});l.uniforms.tEquirect.value=t;const c=new Ii(a,l),d=t.minFilter;return t.minFilter===Es&&(t.minFilter=Fn),new $E(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function WA(i){let e=new WeakMap,t=new WeakMap,r=null;function a(y,M=!1){return y==null?null:M?c(y):l(y)}function l(y){if(y&&y.isTexture){const M=y.mapping;if(M===Vd||M===Hd)if(e.has(y)){const E=e.get(y).texture;return d(E,y.mapping)}else{const E=y.image;if(E&&E.height>0){const C=new Bv(E.height);return C.fromEquirectangularTexture(i,y),e.set(y,C),y.addEventListener("dispose",m),d(C.texture,y.mapping)}else return null}}return y}function c(y){if(y&&y.isTexture){const M=y.mapping,E=M===Vd||M===Hd,C=M===Ls||M===Ta;if(E||C){let S=t.get(y);const g=S!==void 0?S.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==g)return r===null&&(r=new Xg(i)),S=E?r.fromEquirectangular(y,S):r.fromCubemap(y,S),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),S.texture;if(S!==void 0)return S.texture;{const R=y.image;return E&&R&&R.height>0||C&&R&&f(R)?(r===null&&(r=new Xg(i)),S=E?r.fromEquirectangular(y):r.fromCubemap(y),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),y.addEventListener("dispose",x),S.texture):null}}}return y}function d(y,M){return M===Vd?y.mapping=Ls:M===Hd&&(y.mapping=Ta),y}function f(y){let M=0;const E=6;for(let C=0;C<E;C++)y[C]!==void 0&&M++;return M===E}function m(y){const M=y.target;M.removeEventListener("dispose",m);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function x(y){const M=y.target;M.removeEventListener("dispose",x);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function XA(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Sa("WebGLRenderer: "+r+" extension not supported."),a}}}function qA(i,e,t,r){const a={},l=new WeakMap;function c(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return a[y.id]===!0||(y.addEventListener("dispose",c),a[y.id]=!0,t.memory.geometries++),y}function f(_){const y=_.attributes;for(const M in y)e.update(y[M],i.ARRAY_BUFFER)}function m(_){const y=[],M=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let P=0,T=R.length;P<T;P+=3){const I=R[P+0],L=R[P+1],k=R[P+2];y.push(I,L,L,k,k,I)}}else{const R=E.array;C=E.version;for(let P=0,T=R.length/3-1;P<T;P+=3){const I=P+0,L=P+1,k=P+2;y.push(I,L,L,k,k,I)}}const S=new(E.count>=65535?Cv:Av)(y,1);S.version=C;const g=l.get(_);g&&e.remove(g),l.set(_,S)}function x(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:x}}function $A(i,e,t){let r;function a(_){r=_}let l,c;function d(_){l=_.type,c=_.bytesPerElement}function f(_,y){i.drawElements(r,y,l,_*c),t.update(y,r,1)}function m(_,y,M){M!==0&&(i.drawElementsInstanced(r,y,l,_*c,M),t.update(y,r,M))}function x(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let C=0;for(let S=0;S<M;S++)C+=y[S];t.update(C,r,1)}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=m,this.renderMultiDraw=x}function YA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Ut("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function KA(i,e,t){const r=new WeakMap,a=new an;function l(c,d,f){const m=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let z=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var M=z;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),C===!0&&(T=2),S===!0&&(T=3);let I=d.attributes.position.count*T,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*L*4*_),w=new Ev(k,I,L,_);w.type=ji,w.needsUpdate=!0;const U=T*4;for(let V=0;V<_;V++){const Z=g[V],ce=R[V],he=P[V],q=I*L*4*V;for(let fe=0;fe<Z.count;fe++){const Q=fe*U;E===!0&&(a.fromBufferAttribute(Z,fe),k[q+Q+0]=a.x,k[q+Q+1]=a.y,k[q+Q+2]=a.z,k[q+Q+3]=0),C===!0&&(a.fromBufferAttribute(ce,fe),k[q+Q+4]=a.x,k[q+Q+5]=a.y,k[q+Q+6]=a.z,k[q+Q+7]=0),S===!0&&(a.fromBufferAttribute(he,fe),k[q+Q+8]=a.x,k[q+Q+9]=a.y,k[q+Q+10]=a.z,k[q+Q+11]=he.itemSize===4?a.w:1)}}y={count:_,texture:w,size:new Lt(I,L)},r.set(d,y),d.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const C=d.morphTargetsRelative?1:1-E;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",m)}f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function ZA(i,e,t,r,a){let l=new WeakMap;function c(m){const x=a.render.frame,_=m.geometry,y=e.get(m,_);if(l.get(y)!==x&&(e.update(y),l.set(y,x)),m.isInstancedMesh&&(m.hasEventListener("dispose",f)===!1&&m.addEventListener("dispose",f),l.get(m)!==x&&(t.update(m.instanceMatrix,i.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,i.ARRAY_BUFFER),l.set(m,x))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return y}function d(){l=new WeakMap}function f(m){const x=m.target;x.removeEventListener("dispose",f),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:c,dispose:d}}const JA={[uv]:"LINEAR_TONE_MAPPING",[dv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[pv]:"AGX_TONE_MAPPING",[mv]:"NEUTRAL_TONE_MAPPING",[hv]:"CUSTOM_TONE_MAPPING"};function QA(i,e,t,r,a,l){const c=new qi(e,t,{type:i,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new Aa(e,t):void 0}),d=new qi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),f=new Zi;f.setAttribute("position",new vi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new vi([0,2,0,0,2,0],2));const m=new BE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ii(f,m),_=new ep(-1,1,1,-1,0,1);let y=null,M=null,E=!1,C,S=null,g=[],R=!1;this.setSize=function(P,T){c.setSize(P,T),d.setSize(P,T);for(let I=0;I<g.length;I++){const L=g[I];L.setSize&&L.setSize(P,T)}},this.setEffects=function(P){g=P,R=g.length>0&&g[0].isRenderPass===!0;const T=c.width,I=c.height;for(let L=0;L<g.length;L++){const k=g[L];k.setSize&&k.setSize(T,I)}},this.begin=function(P,T){if(E||P.toneMapping===Xi&&g.length===0)return!1;if(S=T,T!==null){const I=T.width,L=T.height;(c.width!==I||c.height!==L)&&this.setSize(I,L)}return R===!1&&P.setRenderTarget(c),C=P.toneMapping,P.toneMapping=Xi,!0},this.hasRenderPass=function(){return R},this.end=function(P,T){P.toneMapping=C,E=!0;let I=c,L=d;for(let k=0;k<g.length;k++){const w=g[k];if(w.enabled!==!1&&(w.render(P,L,I,T),w.needsSwap!==!1)){const U=I;I=L,L=U}}if(y!==P.outputColorSpace||M!==P.toneMapping){y=P.outputColorSpace,M=P.toneMapping,m.defines={},Dt.getTransfer(y)===qt&&(m.defines.SRGB_TRANSFER="");const k=JA[M];k&&(m.defines[k]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(S),P.render(x,_),S=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),f.dispose(),m.dispose()}}const zv=new jn,Sh=new Aa(1,1),Vv=new Ev,Hv=new gE,Gv=new Pv,Kg=[],Zg=[],Jg=new Float32Array(16),Qg=new Float32Array(9),ex=new Float32Array(4);function Ua(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let l=Kg[a];if(l===void 0&&(l=new Float32Array(a),Kg[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function _n(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function $c(i,e){let t=Zg[e];t===void 0&&(t=new Int32Array(e),Zg[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function eC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),_n(t,e)}}function nC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),_n(t,e)}}function iC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),_n(t,e)}}function rC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;ex.set(r),i.uniformMatrix2fv(this.addr,!1,ex),_n(t,r)}}function sC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;Qg.set(r),i.uniformMatrix3fv(this.addr,!1,Qg),_n(t,r)}}function aC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_n(t,e)}else{if(vn(t,r))return;Jg.set(r),i.uniformMatrix4fv(this.addr,!1,Jg),_n(t,r)}}function oC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),_n(t,e)}}function cC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),_n(t,e)}}function uC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),_n(t,e)}}function dC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),_n(t,e)}}function hC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),_n(t,e)}}function pC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),_n(t,e)}}function mC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?qh:Xh,l=Sh):l=zv,t.setTexture2D(e||l,a)}function gC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Hv,a)}function xC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Gv,a)}function vC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Vv,a)}function _C(i){switch(i){case 5126:return eC;case 35664:return tC;case 35665:return nC;case 35666:return iC;case 35674:return rC;case 35675:return sC;case 35676:return aC;case 5124:case 35670:return oC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return dC;case 36294:return fC;case 36295:return hC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return xC;case 36289:case 36303:case 36311:case 36292:return vC}}function yC(i,e){i.uniform1fv(this.addr,e)}function SC(i,e){const t=Ua(e,this.size,2);i.uniform2fv(this.addr,t)}function MC(i,e){const t=Ua(e,this.size,3);i.uniform3fv(this.addr,t)}function bC(i,e){const t=Ua(e,this.size,4);i.uniform4fv(this.addr,t)}function wC(i,e){const t=Ua(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function EC(i,e){const t=Ua(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function TC(i,e){const t=Ua(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AC(i,e){i.uniform1iv(this.addr,e)}function CC(i,e){i.uniform2iv(this.addr,e)}function RC(i,e){i.uniform3iv(this.addr,e)}function NC(i,e){i.uniform4iv(this.addr,e)}function PC(i,e){i.uniform1uiv(this.addr,e)}function LC(i,e){i.uniform2uiv(this.addr,e)}function DC(i,e){i.uniform3uiv(this.addr,e)}function IC(i,e){i.uniform4uiv(this.addr,e)}function UC(i,e,t){const r=this.cache,a=e.length,l=$c(t,a);vn(r,l)||(i.uniform1iv(this.addr,l),_n(r,l));let c;this.type===i.SAMPLER_2D_SHADOW?c=Sh:c=zv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function OC(i,e,t){const r=this.cache,a=e.length,l=$c(t,a);vn(r,l)||(i.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Hv,l[c])}function FC(i,e,t){const r=this.cache,a=e.length,l=$c(t,a);vn(r,l)||(i.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Gv,l[c])}function kC(i,e,t){const r=this.cache,a=e.length,l=$c(t,a);vn(r,l)||(i.uniform1iv(this.addr,l),_n(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Vv,l[c])}function BC(i){switch(i){case 5126:return yC;case 35664:return SC;case 35665:return MC;case 35666:return bC;case 35674:return wC;case 35675:return EC;case 35676:return TC;case 5124:case 35670:return AC;case 35667:case 35671:return CC;case 35668:case 35672:return RC;case 35669:case 35673:return NC;case 5125:return PC;case 36294:return LC;case 36295:return DC;case 36296:return IC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return OC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return kC}}class zC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=_C(t.type)}}class VC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=BC(t.type)}}class HC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function tx(i,e){i.seq.push(e),i.map[e.id]=e}function GC(i,e,t){const r=i.name,a=r.length;for(yf.lastIndex=0;;){const l=yf.exec(r),c=yf.lastIndex;let d=l[1];const f=l[2]==="]",m=l[3];if(f&&(d=d|0),m===void 0||m==="["&&c+2===a){tx(t,m===void 0?new zC(d,i,e):new VC(d,i,e));break}else{let _=t.map[d];_===void 0&&(_=new HC(d),tx(t,_)),t=_}}}class Ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);GC(d,f,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function nx(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const jC=37297;let WC=0;function XC(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const ix=new _t;function qC(i){Dt._getMatrix(ix,Dt.workingColorSpace,i);const e=`mat3( ${ix.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(i)){case Ic:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rx(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+XC(i.getShaderSource(e),d)}else return l}function $C(i,e){const t=qC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const YC={[uv]:"Linear",[dv]:"Reinhard",[fv]:"Cineon",[Bh]:"ACESFilmic",[pv]:"AgX",[mv]:"Neutral",[hv]:"Custom"};function KC(i,e){const t=YC[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const gc=new te;function ZC(){Dt.getLuminanceCoefficients(gc);const i=gc.x.toFixed(4),e=gc.y.toFixed(4),t=gc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function QC(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function eR(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=i.getActiveAttrib(e,a),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function Ro(i){return i!==""}function sx(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(tR,iR)}const nR=new Map;function iR(i,e){let t=St[e];if(t===void 0){const r=nR.get(e);if(r!==void 0)t=St[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(t)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(i){return i.replace(rR,sR)}function sR(i,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function lx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const aR={[yc]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function oR(i){return aR[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lR={[Ls]:"ENVMAP_TYPE_CUBE",[Ta]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function cR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const uR={[Ta]:"ENVMAP_MODE_REFRACTION"};function dR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fR={[cv]:"ENVMAP_BLENDING_MULTIPLY",[Yw]:"ENVMAP_BLENDING_MIX",[Kw]:"ENVMAP_BLENDING_ADD"};function hR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fR[i.combine]||"ENVMAP_BLENDING_NONE"}function pR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function mR(i,e,t,r){const a=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=oR(t),m=cR(t),x=dR(t),_=hR(t),y=pR(t),M=JC(t),E=QC(l),C=a.createProgram();let S,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ro).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ro).join(`
`),g.length>0&&(g+=`
`)):(S=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),g=[lx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?St.tonemapping_pars_fragment:"",t.toneMapping!==Xi?KC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,$C("linearToOutputTexel",t.outputColorSpace),ZC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ro).join(`
`)),c=Mh(c),c=sx(c,t),c=ax(c,t),d=Mh(d),d=sx(d,t),d=ax(d,t),c=ox(c),d=ox(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===vg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=R+S+c,T=R+g+d,I=nx(a,a.VERTEX_SHADER,P),L=nx(a,a.FRAGMENT_SHADER,T);a.attachShader(C,I),a.attachShader(C,L),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function k(V){if(i.debug.checkShaderErrors){const Z=a.getProgramInfoLog(C)||"",ce=a.getShaderInfoLog(I)||"",he=a.getShaderInfoLog(L)||"",q=Z.trim(),fe=ce.trim(),Q=he.trim();let $=!0,le=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,C,I,L);else{const re=rx(a,I,"vertex"),O=rx(a,L,"fragment");Ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+re+`
`+O)}else q!==""?pt("WebGLProgram: Program Info Log:",q):(fe===""||Q==="")&&(le=!1);le&&(V.diagnostics={runnable:$,programLog:q,vertexShader:{log:fe,prefix:S},fragmentShader:{log:Q,prefix:g}})}a.deleteShader(I),a.deleteShader(L),w=new Ec(a,C),U=eR(a,C)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let U;this.getAttributes=function(){return U===void 0&&k(this),U};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(C,jC)),z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=WC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=L,this}let gR=0;class xR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new vR(e),t.set(e,r)),r}}class vR{constructor(e){this.id=gR++,this.code=e,this.usedTimes=0}}function _R(i){return i===Ds||i===Pc||i===Lc}function yR(i,e,t,r,a,l){const c=new Yh,d=new xR,f=new Set,m=[],x=new Map,_=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return f.add(w),w===0?"uv":`uv${w}`}function C(w,U,z,V,Z,ce){const he=V.fog,q=Z.geometry,fe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,$=e.get(w.envMap||fe,Q),le=$&&$.mapping===Wc?$.image.height:null,re=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&pt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const O=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,J=O!==void 0?O.length:0;let Ne=0;q.morphAttributes.position!==void 0&&(Ne=1),q.morphAttributes.normal!==void 0&&(Ne=2),q.morphAttributes.color!==void 0&&(Ne=3);let Ve,He,K,xe;if(re){const qe=Gi[re];Ve=qe.vertexShader,He=qe.fragmentShader}else{Ve=w.vertexShader,He=w.fragmentShader;const qe=d.getVertexShaderStage(w),Gt=d.getFragmentShaderStage(w);d.update(w,qe,Gt),K=qe.id,xe=Gt.id}const ge=i.getRenderTarget(),Fe=i.state.buffers.depth.getReversed(),et=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,Mt=!!w.map,ye=!!w.matcap,at=!!$,ut=!!w.aoMap,Re=!!w.lightMap,mt=!!w.bumpMap&&w.wireframe===!1,yt=!!w.normalMap,Rt=!!w.displacementMap,Ht=!!w.emissiveMap,Ot=!!w.metalnessMap,Ft=!!w.roughnessMap,F=w.anisotropy>0,rt=w.clearcoat>0,Ge=w.dispersion>0,D=w.iridescence>0,b=w.sheen>0,j=w.transmission>0,se=F&&!!w.anisotropyMap,pe=rt&&!!w.clearcoatMap,Ee=rt&&!!w.clearcoatNormalMap,Ue=rt&&!!w.clearcoatRoughnessMap,me=D&&!!w.iridescenceMap,_e=D&&!!w.iridescenceThicknessMap,Te=b&&!!w.sheenColorMap,Qe=b&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Ae=!!w.specularColorMap,$e=!!w.specularIntensityMap,ot=j&&!!w.transmissionMap,ct=j&&!!w.thicknessMap,H=!!w.gradientMap,Le=!!w.alphaMap,ve=w.alphaTest>0,Ie=!!w.alphaHash,ke=!!w.extensions;let Se=Xi;w.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Ke={shaderID:re,shaderType:w.type,shaderName:w.name,vertexShader:Ve,fragmentShader:He,defines:w.defines,customVertexShaderID:K,customFragmentShaderID:xe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:et,instancingColor:et&&Z.instanceColor!==null,instancingMorph:et&&Z.morphTexture!==null,outputColorSpace:ge===null?i.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:ye,envMap:at,envMapMode:at&&$.mapping,envMapCubeUVHeight:le,aoMap:ut,lightMap:Re,bumpMap:mt,normalMap:yt,displacementMap:Rt,emissiveMap:Ht,normalMapObjectSpace:yt&&w.normalMapType===Qw,normalMapTangentSpace:yt&&w.normalMapType===vh,packedNormalMap:yt&&w.normalMapType===vh&&_R(w.normalMap.format),metalnessMap:Ot,roughnessMap:Ft,anisotropy:F,anisotropyMap:se,clearcoat:rt,clearcoatMap:pe,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Ue,dispersion:Ge,iridescence:D,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:b,sheenColorMap:Te,sheenRoughnessMap:Qe,specularMap:Oe,specularColorMap:Ae,specularIntensityMap:$e,transmission:j,transmissionMap:ot,thicknessMap:ct,gradientMap:H,opaque:w.transparent===!1&&w.blending===ya&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:ve,alphaHash:Ie,combine:w.combine,mapUv:Mt&&E(w.map.channel),aoMapUv:ut&&E(w.aoMap.channel),lightMapUv:Re&&E(w.lightMap.channel),bumpMapUv:mt&&E(w.bumpMap.channel),normalMapUv:yt&&E(w.normalMap.channel),displacementMapUv:Rt&&E(w.displacementMap.channel),emissiveMapUv:Ht&&E(w.emissiveMap.channel),metalnessMapUv:Ot&&E(w.metalnessMap.channel),roughnessMapUv:Ft&&E(w.roughnessMap.channel),anisotropyMapUv:se&&E(w.anisotropyMap.channel),clearcoatMapUv:pe&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&E(w.sheenRoughnessMap.channel),specularMapUv:Oe&&E(w.specularMap.channel),specularColorMapUv:Ae&&E(w.specularColorMap.channel),specularIntensityMapUv:$e&&E(w.specularIntensityMap.channel),transmissionMapUv:ot&&E(w.transmissionMap.channel),thicknessMapUv:ct&&E(w.thicknessMap.channel),alphaMapUv:Le&&E(w.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(yt||F),vertexNormals:!!q.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(Mt||Le),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||q.attributes.normal===void 0&&yt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Fe,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ne,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ce.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===qt,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===qt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===pr,flipSided:w.side===ti,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ke.vertexUv1s=f.has(1),Ke.vertexUv2s=f.has(2),Ke.vertexUv3s=f.has(3),f.clear(),Ke}function S(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)U.push(z),U.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(g(U,w),R(U,w),U.push(i.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function g(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function R(w,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),U.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function P(w){const U=M[w.type];let z;if(U){const V=Gi[U];z=OE.clone(V.uniforms)}else z=w.uniforms;return z}function T(w,U){let z=x.get(U);return z!==void 0?++z.usedTimes:(z=new mR(i,U,w,a),m.push(z),x.set(U,z)),z}function I(w){if(--w.usedTimes===0){const U=m.indexOf(w);m[U]=m[m.length-1],m.pop(),x.delete(w.cacheKey),w.destroy()}}function L(w){d.remove(w)}function k(){d.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:P,acquireProgram:T,releaseProgram:I,releaseShaderCache:L,programs:m,dispose:k}}function SR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function a(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function MR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function ux(){const i=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(y){let M=0;return y.isInstancedMesh&&(M+=2),y.isSkinnedMesh&&(M+=1),M}function d(y,M,E,C,S,g){let R=i[e];return R===void 0?(R={id:y.id,object:y,geometry:M,material:E,materialVariant:c(y),groupOrder:C,renderOrder:y.renderOrder,z:S,group:g},i[e]=R):(R.id=y.id,R.object=y,R.geometry=M,R.material=E,R.materialVariant=c(y),R.groupOrder=C,R.renderOrder=y.renderOrder,R.z=S,R.group=g),e++,R}function f(y,M,E,C,S,g){const R=d(y,M,E,C,S,g);E.transmission>0?r.push(R):E.transparent===!0?a.push(R):t.push(R)}function m(y,M,E,C,S,g){const R=d(y,M,E,C,S,g);E.transmission>0?r.unshift(R):E.transparent===!0?a.unshift(R):t.unshift(R)}function x(y,M,E){t.length>1&&t.sort(y||MR),r.length>1&&r.sort(M||cx),a.length>1&&a.sort(M||cx),E&&(t.reverse(),r.reverse(),a.reverse())}function _(){for(let y=e,M=i.length;y<M;y++){const E=i[y];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:m,finish:_,sort:x}}function bR(){let i=new WeakMap;function e(r,a){const l=i.get(r);let c;return l===void 0?(c=new ux,i.set(r,[c])):a>=l.length?(c=new ux,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function wR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Et};break;case"SpotLight":t={position:new te,direction:new te,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=t,t}}}function ER(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TR=0;function AR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CR(i){const e=new wR,t=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new te);const a=new te,l=new ln,c=new ln;function d(m){let x=0,_=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,E=0,C=0,S=0,g=0,R=0,P=0,T=0,I=0,L=0,k=0;m.sort(AR);for(let U=0,z=m.length;U<z;U++){const V=m[U],Z=V.color,ce=V.intensity,he=V.distance;let q=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ds?q=V.shadow.map.texture:q=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=Z.r*ce,_+=Z.g*ce,y+=Z.b*ce;else if(V.isLightProbe){for(let fe=0;fe<9;fe++)r.probe[fe].addScaledVector(V.sh.coefficients[fe],ce);k++}else if(V.isDirectionalLight){const fe=e.get(V);if(fe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const Q=V.shadow,$=t.get(V);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,r.directionalShadow[M]=$,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=V.shadow.matrix,R++}r.directional[M]=fe,M++}else if(V.isSpotLight){const fe=e.get(V);fe.position.setFromMatrixPosition(V.matrixWorld),fe.color.copy(Z).multiplyScalar(ce),fe.distance=he,fe.coneCos=Math.cos(V.angle),fe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),fe.decay=V.decay,r.spot[C]=fe;const Q=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,Q.updateMatrices(V),V.castShadow&&L++),r.spotLightMatrix[C]=Q.matrix,V.castShadow){const $=t.get(V);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,r.spotShadow[C]=$,r.spotShadowMap[C]=q,T++}C++}else if(V.isRectAreaLight){const fe=e.get(V);fe.color.copy(Z).multiplyScalar(ce),fe.halfWidth.set(V.width*.5,0,0),fe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=fe,S++}else if(V.isPointLight){const fe=e.get(V);if(fe.color.copy(V.color).multiplyScalar(V.intensity),fe.distance=V.distance,fe.decay=V.decay,V.castShadow){const Q=V.shadow,$=t.get(V);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,r.pointShadow[E]=$,r.pointShadowMap[E]=q,r.pointShadowMatrix[E]=V.shadow.matrix,P++}r.point[E]=fe,E++}else if(V.isHemisphereLight){const fe=e.get(V);fe.skyColor.copy(V.color).multiplyScalar(ce),fe.groundColor.copy(V.groundColor).multiplyScalar(ce),r.hemi[g]=fe,g++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const w=r.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==S||w.hemiLength!==g||w.numDirectionalShadows!==R||w.numPointShadows!==P||w.numSpotShadows!==T||w.numSpotMaps!==I||w.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=E,r.hemi.length=g,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=T+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=k,w.directionalLength=M,w.pointLength=E,w.spotLength=C,w.rectAreaLength=S,w.hemiLength=g,w.numDirectionalShadows=R,w.numPointShadows=P,w.numSpotShadows=T,w.numSpotMaps=I,w.numLightProbes=k,r.version=TR++)}function f(m,x){let _=0,y=0,M=0,E=0,C=0;const S=x.matrixWorldInverse;for(let g=0,R=m.length;g<R;g++){const P=m[g];if(P.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),_++}else if(P.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(P.matrixWorld),a.setFromMatrixPosition(P.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),M++}else if(P.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),c.identity(),l.copy(P.matrixWorld),l.premultiply(S),c.extractRotation(l),T.halfWidth.set(P.width*.5,0,0),T.halfHeight.set(0,P.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),E++}else if(P.isPointLight){const T=r.point[y];T.position.setFromMatrixPosition(P.matrixWorld),T.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const T=r.hemi[C];T.direction.setFromMatrixPosition(P.matrixWorld),T.direction.transformDirection(S),C++}}}return{setup:d,setupView:f,state:r}}function dx(i){const e=new CR(i),t=[],r=[],a=[];function l(y){_.camera=y,t.length=0,r.length=0,a.length=0}function c(y){t.push(y)}function d(y){r.push(y)}function f(y){a.push(y)}function m(){e.setup(t)}function x(y){e.setupView(t,y)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:m,setupLightsView:x,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function RR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new dx(i),e.set(a,[d])):l>=c.length?(d=new dx(i),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
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
}`,LR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],DR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],fx=new ln,Eo=new te,Sf=new te;function IR(i,e,t){let r=new Zh;const a=new Lt,l=new Lt,c=new an,d=new VE,f=new HE,m={},x=t.maxTextureSize,_={[es]:ti,[ti]:es,[pr]:pr},y=new Ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:NR,fragmentShader:PR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const E=new Zi;E.setAttribute("position",new $i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ii(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc;let g=this.type;this.render=function(L,k,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||L.length===0)return;this.type===lv&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=yc);const U=i.getRenderTarget(),z=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(gr),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ce=g!==this.type;ce&&k.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(q=>q.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,q=L.length;he<q;he++){const fe=L[he],Q=fe.shadow;if(Q===void 0){pt("WebGLShadowMap:",fe,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;a.copy(Q.mapSize);const $=Q.getFrameExtents();a.multiply($),l.copy(Q.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/$.x),a.x=l.x*$.x,Q.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/$.y),a.y=l.y*$.y,Q.mapSize.y=l.y));const le=i.state.buffers.depth.getReversed();if(Q.camera._reversedDepth=le,Q.map===null||ce===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===Ao){if(fe.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new qi(a.x,a.y,{format:Ds,type:vr,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),Q.map.texture.name=fe.name+".shadowMap",Q.map.depthTexture=new Aa(a.x,a.y,ji),Q.map.depthTexture.name=fe.name+".shadowMapDepth",Q.map.depthTexture.format=_r,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn}else fe.isPointLight?(Q.map=new Bv(a.x),Q.map.depthTexture=new IE(a.x,Yi)):(Q.map=new qi(a.x,a.y),Q.map.depthTexture=new Aa(a.x,a.y,Yi)),Q.map.depthTexture.name=fe.name+".shadowMap",Q.map.depthTexture.format=_r,this.type===yc?(Q.map.depthTexture.compareFunction=le?qh:Xh,Q.map.depthTexture.minFilter=Fn,Q.map.depthTexture.magFilter=Fn):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Cn,Q.map.depthTexture.magFilter=Cn);Q.camera.updateProjectionMatrix()}const re=Q.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<re;O++){if(Q.map.isWebGLCubeRenderTarget)i.setRenderTarget(Q.map,O),i.clear();else{O===0&&(i.setRenderTarget(Q.map),i.clear());const J=Q.getViewport(O);c.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),Z.viewport(c)}if(fe.isPointLight){const J=Q.camera,Ne=Q.matrix,Ve=fe.distance||J.far;Ve!==J.far&&(J.far=Ve,J.updateProjectionMatrix()),Eo.setFromMatrixPosition(fe.matrixWorld),J.position.copy(Eo),Sf.copy(J.position),Sf.add(LR[O]),J.up.copy(DR[O]),J.lookAt(Sf),J.updateMatrixWorld(),Ne.makeTranslation(-Eo.x,-Eo.y,-Eo.z),fx.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(fx,J.coordinateSystem,J.reversedDepth)}else Q.updateMatrices(fe);r=Q.getFrustum(),T(k,w,Q.camera,fe,this.type)}Q.isPointLightShadow!==!0&&this.type===Ao&&R(Q,w),Q.needsUpdate=!1}g=this.type,S.needsUpdate=!1,i.setRenderTarget(U,z,V)};function R(L,k){const w=e.update(C);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new qi(a.x,a.y,{format:Ds,type:vr})),y.uniforms.shadow_pass.value=L.map.depthTexture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,w,y,C,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,w,M,C,null)}function P(L,k,w,U){let z=null;const V=w.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(V!==void 0)z=V;else if(z=w.isPointLight===!0?f:d,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Z=z.uuid,ce=k.uuid;let he=m[Z];he===void 0&&(he={},m[Z]=he);let q=he[ce];q===void 0&&(q=z.clone(),he[ce]=q,k.addEventListener("dispose",I)),z=q}if(z.visible=k.visible,z.wireframe=k.wireframe,U===Ao?z.side=k.shadowSide!==null?k.shadowSide:k.side:z.side=k.shadowSide!==null?k.shadowSide:_[k.side],z.alphaMap=k.alphaMap,z.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,z.map=k.map,z.clipShadows=k.clipShadows,z.clippingPlanes=k.clippingPlanes,z.clipIntersection=k.clipIntersection,z.displacementMap=k.displacementMap,z.displacementScale=k.displacementScale,z.displacementBias=k.displacementBias,z.wireframeLinewidth=k.wireframeLinewidth,z.linewidth=k.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Z=i.properties.get(z);Z.light=w}return z}function T(L,k,w,U,z){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&z===Ao)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,L.matrixWorld);const ce=e.update(L),he=L.material;if(Array.isArray(he)){const q=ce.groups;for(let fe=0,Q=q.length;fe<Q;fe++){const $=q[fe],le=he[$.materialIndex];if(le&&le.visible){const re=P(L,le,U,z);L.onBeforeShadow(i,L,k,w,ce,re,$),i.renderBufferDirect(w,null,ce,re,L,$),L.onAfterShadow(i,L,k,w,ce,re,$)}}}else if(he.visible){const q=P(L,he,U,z);L.onBeforeShadow(i,L,k,w,ce,q,null),i.renderBufferDirect(w,null,ce,q,L,null),L.onAfterShadow(i,L,k,w,ce,q,null)}}const Z=L.children;for(let ce=0,he=Z.length;ce<he;ce++)T(Z[ce],k,w,U,z)}function I(L){L.target.removeEventListener("dispose",I);for(const w in m){const U=m[w],z=L.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}}function UR(i,e){function t(){let H=!1;const Le=new an;let ve=null;const Ie=new an(0,0,0,0);return{setMask:function(ke){ve!==ke&&!H&&(i.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){H=ke},setClear:function(ke,Se,Ke,qe,Gt){Gt===!0&&(ke*=qe,Se*=qe,Ke*=qe),Le.set(ke,Se,Ke,qe),Ie.equals(Le)===!1&&(i.clearColor(ke,Se,Ke,qe),Ie.copy(Le))},reset:function(){H=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Le=!1,ve=null,Ie=null,ke=null;return{setReversed:function(Se){if(Le!==Se){const Ke=e.get("EXT_clip_control");Se?Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.ZERO_TO_ONE_EXT):Ke.clipControlEXT(Ke.LOWER_LEFT_EXT,Ke.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const qe=ke;ke=null,this.setClear(qe)}},getReversed:function(){return Le},setTest:function(Se){Se?ge(i.DEPTH_TEST):Fe(i.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!H&&(i.depthMask(Se),ve=Se)},setFunc:function(Se){if(Le&&(Se=cE[Se]),Ie!==Se){switch(Se){case Df:i.depthFunc(i.NEVER);break;case If:i.depthFunc(i.ALWAYS);break;case Uf:i.depthFunc(i.LESS);break;case Ea:i.depthFunc(i.LEQUAL);break;case Of:i.depthFunc(i.EQUAL);break;case Ff:i.depthFunc(i.GEQUAL);break;case kf:i.depthFunc(i.GREATER);break;case Bf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ie=Se}},setLocked:function(Se){H=Se},setClear:function(Se){ke!==Se&&(ke=Se,Le&&(Se=1-Se),i.clearDepth(Se))},reset:function(){H=!1,ve=null,Ie=null,ke=null,Le=!1}}}function a(){let H=!1,Le=null,ve=null,Ie=null,ke=null,Se=null,Ke=null,qe=null,Gt=null;return{setTest:function(kt){H||(kt?ge(i.STENCIL_TEST):Fe(i.STENCIL_TEST))},setMask:function(kt){Le!==kt&&!H&&(i.stencilMask(kt),Le=kt)},setFunc:function(kt,Vt,Tt){(ve!==kt||Ie!==Vt||ke!==Tt)&&(i.stencilFunc(kt,Vt,Tt),ve=kt,Ie=Vt,ke=Tt)},setOp:function(kt,Vt,Tt){(Se!==kt||Ke!==Vt||qe!==Tt)&&(i.stencilOp(kt,Vt,Tt),Se=kt,Ke=Vt,qe=Tt)},setLocked:function(kt){H=kt},setClear:function(kt){Gt!==kt&&(i.clearStencil(kt),Gt=kt)},reset:function(){H=!1,Le=null,ve=null,Ie=null,ke=null,Se=null,Ke=null,qe=null,Gt=null}}}const l=new t,c=new r,d=new a,f=new WeakMap,m=new WeakMap;let x={},_={},y={},M=new WeakMap,E=[],C=null,S=!1,g=null,R=null,P=null,T=null,I=null,L=null,k=null,w=new Et(0,0,0),U=0,z=!1,V=null,Z=null,ce=null,he=null,q=null;const fe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,$=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(le)[1]),Q=$>=1):le.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),Q=$>=2);let re=null,O={};const J=i.getParameter(i.SCISSOR_BOX),Ne=i.getParameter(i.VIEWPORT),Ve=new an().fromArray(J),He=new an().fromArray(Ne);function K(H,Le,ve,Ie){const ke=new Uint8Array(4),Se=i.createTexture();i.bindTexture(H,Se),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ke=0;Ke<ve;Ke++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Le+Ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Se}const xe={};xe[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),xe[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xe[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ge(i.DEPTH_TEST),c.setFunc(Ea),mt(!1),yt(fg),ge(i.CULL_FACE),ut(gr);function ge(H){x[H]!==!0&&(i.enable(H),x[H]=!0)}function Fe(H){x[H]!==!1&&(i.disable(H),x[H]=!1)}function et(H,Le){return y[H]!==Le?(i.bindFramebuffer(H,Le),y[H]=Le,H===i.DRAW_FRAMEBUFFER&&(y[i.FRAMEBUFFER]=Le),H===i.FRAMEBUFFER&&(y[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Je(H,Le){let ve=E,Ie=!1;if(H){ve=M.get(Le),ve===void 0&&(ve=[],M.set(Le,ve));const ke=H.textures;if(ve.length!==ke.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Ke=ke.length;Se<Ke;Se++)ve[Se]=i.COLOR_ATTACHMENT0+Se;ve.length=ke.length,Ie=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ve)}function Mt(H){return C!==H?(i.useProgram(H),C=H,!0):!1}const ye={[Ms]:i.FUNC_ADD,[Lw]:i.FUNC_SUBTRACT,[Dw]:i.FUNC_REVERSE_SUBTRACT};ye[Iw]=i.MIN,ye[Uw]=i.MAX;const at={[Ow]:i.ZERO,[Fw]:i.ONE,[kw]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[jw]:i.SRC_ALPHA_SATURATE,[Hw]:i.DST_COLOR,[zw]:i.DST_ALPHA,[Bw]:i.ONE_MINUS_SRC_COLOR,[Lf]:i.ONE_MINUS_SRC_ALPHA,[Gw]:i.ONE_MINUS_DST_COLOR,[Vw]:i.ONE_MINUS_DST_ALPHA,[Ww]:i.CONSTANT_COLOR,[Xw]:i.ONE_MINUS_CONSTANT_COLOR,[qw]:i.CONSTANT_ALPHA,[$w]:i.ONE_MINUS_CONSTANT_ALPHA};function ut(H,Le,ve,Ie,ke,Se,Ke,qe,Gt,kt){if(H===gr){S===!0&&(Fe(i.BLEND),S=!1);return}if(S===!1&&(ge(i.BLEND),S=!0),H!==Pw){if(H!==g||kt!==z){if((R!==Ms||I!==Ms)&&(i.blendEquation(i.FUNC_ADD),R=Ms,I=Ms),kt)switch(H){case ya:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hg:i.blendFunc(i.ONE,i.ONE);break;case pg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",H);break}else switch(H){case ya:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case hg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",H);break}P=null,T=null,L=null,k=null,w.set(0,0,0),U=0,g=H,z=kt}return}ke=ke||Le,Se=Se||ve,Ke=Ke||Ie,(Le!==R||ke!==I)&&(i.blendEquationSeparate(ye[Le],ye[ke]),R=Le,I=ke),(ve!==P||Ie!==T||Se!==L||Ke!==k)&&(i.blendFuncSeparate(at[ve],at[Ie],at[Se],at[Ke]),P=ve,T=Ie,L=Se,k=Ke),(qe.equals(w)===!1||Gt!==U)&&(i.blendColor(qe.r,qe.g,qe.b,Gt),w.copy(qe),U=Gt),g=H,z=!1}function Re(H,Le){H.side===pr?Fe(i.CULL_FACE):ge(i.CULL_FACE);let ve=H.side===ti;Le&&(ve=!ve),mt(ve),H.blending===ya&&H.transparent===!1?ut(gr):ut(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ie=H.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):Fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(H){V!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),V=H)}function yt(H){H!==Rw?(ge(i.CULL_FACE),H!==Z&&(H===fg?i.cullFace(i.BACK):H===Nw?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Fe(i.CULL_FACE),Z=H}function Rt(H){H!==ce&&(Q&&i.lineWidth(H),ce=H)}function Ht(H,Le,ve){H?(ge(i.POLYGON_OFFSET_FILL),(he!==Le||q!==ve)&&(he=Le,q=ve,c.getReversed()&&(Le=-Le),i.polygonOffset(Le,ve))):Fe(i.POLYGON_OFFSET_FILL)}function Ot(H){H?ge(i.SCISSOR_TEST):Fe(i.SCISSOR_TEST)}function Ft(H){H===void 0&&(H=i.TEXTURE0+fe-1),re!==H&&(i.activeTexture(H),re=H)}function F(H,Le,ve){ve===void 0&&(re===null?ve=i.TEXTURE0+fe-1:ve=re);let Ie=O[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},O[ve]=Ie),(Ie.type!==H||Ie.texture!==Le)&&(re!==ve&&(i.activeTexture(ve),re=ve),i.bindTexture(H,Le||xe[H]),Ie.type=H,Ie.texture=Le)}function rt(){const H=O[re];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Ge(){try{i.compressedTexImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function b(){try{i.texSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function j(){try{i.texSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function se(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function pe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function Ee(){try{i.texStorage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function Ue(){try{i.texStorage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function me(){try{i.texImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function _e(){try{i.texImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function Te(H){return _[H]!==void 0?_[H]:i.getParameter(H)}function Qe(H,Le){_[H]!==Le&&(i.pixelStorei(H,Le),_[H]=Le)}function Oe(H){Ve.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),Ve.copy(H))}function Ae(H){He.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function $e(H,Le){let ve=m.get(Le);ve===void 0&&(ve=new WeakMap,m.set(Le,ve));let Ie=ve.get(H);Ie===void 0&&(Ie=i.getUniformBlockIndex(Le,H.name),ve.set(H,Ie))}function ot(H,Le){const Ie=m.get(Le).get(H);f.get(Le)!==Ie&&(i.uniformBlockBinding(Le,Ie,H.__bindingPointIndex),f.set(Le,Ie))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),x={},_={},re=null,O={},y={},M=new WeakMap,E=[],C=null,S=!1,g=null,R=null,P=null,T=null,I=null,L=null,k=null,w=new Et(0,0,0),U=0,z=!1,V=null,Z=null,ce=null,he=null,q=null,Ve.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ge,disable:Fe,bindFramebuffer:et,drawBuffers:Je,useProgram:Mt,setBlending:ut,setMaterial:Re,setFlipSided:mt,setCullFace:yt,setLineWidth:Rt,setPolygonOffset:Ht,setScissorTest:Ot,activeTexture:Ft,bindTexture:F,unbindTexture:rt,compressedTexImage2D:Ge,compressedTexImage3D:D,texImage2D:me,texImage3D:_e,pixelStorei:Qe,getParameter:Te,updateUBOMapping:$e,uniformBlockBinding:ot,texStorage2D:Ee,texStorage3D:Ue,texSubImage2D:b,texSubImage3D:j,compressedTexSubImage2D:se,compressedTexSubImage3D:pe,scissor:Oe,viewport:Ae,reset:ct}}function OR(i,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Lt,x=new WeakMap,_=new Set;let y;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,b){return E?new OffscreenCanvas(D,b):Uc("canvas")}function S(D,b,j){let se=1;const pe=Ge(D);if((pe.width>j||pe.height>j)&&(se=j/Math.max(pe.width,pe.height)),se<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Ee=Math.floor(se*pe.width),Ue=Math.floor(se*pe.height);y===void 0&&(y=C(Ee,Ue));const me=b?C(Ee,Ue):y;return me.width=Ee,me.height=Ue,me.getContext("2d").drawImage(D,0,0,Ee,Ue),pt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+Ee+"x"+Ue+")."),me}else return"data"in D&&pt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function g(D){return D.generateMipmaps}function R(D){i.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(D,b,j,se,pe,Ee=!1){if(D!==null){if(i[D]!==void 0)return i[D];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Ue;se&&(Ue=e.get("EXT_texture_norm16"),Ue||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=b;if(b===i.RED&&(j===i.FLOAT&&(me=i.R32F),j===i.HALF_FLOAT&&(me=i.R16F),j===i.UNSIGNED_BYTE&&(me=i.R8),j===i.UNSIGNED_SHORT&&Ue&&(me=Ue.R16_EXT),j===i.SHORT&&Ue&&(me=Ue.R16_SNORM_EXT)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(me=i.R8UI),j===i.UNSIGNED_SHORT&&(me=i.R16UI),j===i.UNSIGNED_INT&&(me=i.R32UI),j===i.BYTE&&(me=i.R8I),j===i.SHORT&&(me=i.R16I),j===i.INT&&(me=i.R32I)),b===i.RG&&(j===i.FLOAT&&(me=i.RG32F),j===i.HALF_FLOAT&&(me=i.RG16F),j===i.UNSIGNED_BYTE&&(me=i.RG8),j===i.UNSIGNED_SHORT&&Ue&&(me=Ue.RG16_EXT),j===i.SHORT&&Ue&&(me=Ue.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(me=i.RG8UI),j===i.UNSIGNED_SHORT&&(me=i.RG16UI),j===i.UNSIGNED_INT&&(me=i.RG32UI),j===i.BYTE&&(me=i.RG8I),j===i.SHORT&&(me=i.RG16I),j===i.INT&&(me=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(me=i.RGB8UI),j===i.UNSIGNED_SHORT&&(me=i.RGB16UI),j===i.UNSIGNED_INT&&(me=i.RGB32UI),j===i.BYTE&&(me=i.RGB8I),j===i.SHORT&&(me=i.RGB16I),j===i.INT&&(me=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(me=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(me=i.RGBA16UI),j===i.UNSIGNED_INT&&(me=i.RGBA32UI),j===i.BYTE&&(me=i.RGBA8I),j===i.SHORT&&(me=i.RGBA16I),j===i.INT&&(me=i.RGBA32I)),b===i.RGB&&(j===i.UNSIGNED_SHORT&&Ue&&(me=Ue.RGB16_EXT),j===i.SHORT&&Ue&&(me=Ue.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(me=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(me=i.R11F_G11F_B10F)),b===i.RGBA){const _e=Ee?Ic:Dt.getTransfer(pe);j===i.FLOAT&&(me=i.RGBA32F),j===i.HALF_FLOAT&&(me=i.RGBA16F),j===i.UNSIGNED_BYTE&&(me=_e===qt?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&Ue&&(me=Ue.RGBA16_EXT),j===i.SHORT&&Ue&&(me=Ue.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(me=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(me=i.RGB5_A1)}return(me===i.R16F||me===i.R32F||me===i.RG16F||me===i.RG32F||me===i.RGBA16F||me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function I(D,b){let j;return D?b===null||b===Yi||b===Uo?j=i.DEPTH24_STENCIL8:b===ji?j=i.DEPTH32F_STENCIL8:b===Io&&(j=i.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Yi||b===Uo?j=i.DEPTH_COMPONENT24:b===ji?j=i.DEPTH_COMPONENT32F:b===Io&&(j=i.DEPTH_COMPONENT16),j}function L(D,b){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function k(D){const b=D.target;b.removeEventListener("dispose",k),U(b),b.isVideoTexture&&x.delete(b),b.isHTMLTexture&&_.delete(b)}function w(D){const b=D.target;b.removeEventListener("dispose",w),V(b)}function U(D){const b=r.get(D);if(b.__webglInit===void 0)return;const j=D.source,se=M.get(j);if(se){const pe=se[b.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&z(D),Object.keys(se).length===0&&M.delete(j)}r.remove(D)}function z(D){const b=r.get(D);i.deleteTexture(b.__webglTexture);const j=D.source,se=M.get(j);delete se[b.__cacheKey],c.memory.textures--}function V(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let pe=0;pe<b.__webglFramebuffer[se].length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[se][pe]);else i.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)i.deleteFramebuffer(b.__webglFramebuffer[se]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const j=D.textures;for(let se=0,pe=j.length;se<pe;se++){const Ee=r.get(j[se]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),c.memory.textures--),r.remove(j[se])}r.remove(D)}let Z=0;function ce(){Z=0}function he(){return Z}function q(D){Z=D}function fe(){const D=Z;return D>=a.maxTextures&&pt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),Z+=1,D}function Q(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function $(D,b){const j=r.get(D);if(D.isVideoTexture&&F(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&j.__version!==D.version){const se=D.image;if(se===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(j,D,b);return}}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function le(D,b){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Fe(j,D,b);return}else D.isExternalTexture&&(j.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function re(D,b){const j=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&j.__version!==D.version){Fe(j,D,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function O(D,b){const j=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&j.__version!==D.version){et(j,D,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}const J={[zf]:i.REPEAT,[mr]:i.CLAMP_TO_EDGE,[Vf]:i.MIRRORED_REPEAT},Ne={[Cn]:i.NEAREST,[Zw]:i.NEAREST_MIPMAP_NEAREST,[Yl]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Gd]:i.LINEAR_MIPMAP_NEAREST,[Es]:i.LINEAR_MIPMAP_LINEAR},Ve={[eE]:i.NEVER,[sE]:i.ALWAYS,[tE]:i.LESS,[Xh]:i.LEQUAL,[nE]:i.EQUAL,[qh]:i.GEQUAL,[iE]:i.GREATER,[rE]:i.NOTEQUAL};function He(D,b){if(b.type===ji&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Gd||b.magFilter===Yl||b.magFilter===Es||b.minFilter===Fn||b.minFilter===Gd||b.minFilter===Yl||b.minFilter===Es)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,J[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,J[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,J[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ne[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ne[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Ve[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Cn||b.minFilter!==Yl&&b.minFilter!==Es||b.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,a.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function K(D,b){let j=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",k));const se=b.source;let pe=M.get(se);pe===void 0&&(pe={},M.set(se,pe));const Ee=Q(b);if(Ee!==D.__cacheKey){pe[Ee]===void 0&&(pe[Ee]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,j=!0),pe[Ee].usedTimes++;const Ue=pe[D.__cacheKey];Ue!==void 0&&(pe[D.__cacheKey].usedTimes--,Ue.usedTimes===0&&z(b)),D.__cacheKey=Ee,D.__webglTexture=pe[Ee].texture}return j}function xe(D,b,j){return Math.floor(Math.floor(D/j)/b)}function ge(D,b,j,se){const Ee=D.updateRanges;if(Ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,j,se,b.data);else{Ee.sort((Qe,Oe)=>Qe.start-Oe.start);let Ue=0;for(let Qe=1;Qe<Ee.length;Qe++){const Oe=Ee[Ue],Ae=Ee[Qe],$e=Oe.start+Oe.count,ot=xe(Ae.start,b.width,4),ct=xe(Oe.start,b.width,4);Ae.start<=$e+1&&ot===ct&&xe(Ae.start+Ae.count-1,b.width,4)===ot?Oe.count=Math.max(Oe.count,Ae.start+Ae.count-Oe.start):(++Ue,Ee[Ue]=Ae)}Ee.length=Ue+1;const me=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let Qe=0,Oe=Ee.length;Qe<Oe;Qe++){const Ae=Ee[Qe],$e=Math.floor(Ae.start/4),ot=Math.ceil(Ae.count/4),ct=$e%b.width,H=Math.floor($e/b.width),Le=ot,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,ct,H,Le,ve,j,se,b.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,me),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Fe(D,b,j){let se=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=i.TEXTURE_3D);const pe=K(D,b),Ee=b.source;t.bindTexture(se,D.__webglTexture,i.TEXTURE0+j);const Ue=r.get(Ee);if(Ee.version!==Ue.__version||pe===!0){if(t.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const ve=Dt.getPrimaries(Dt.workingColorSpace),Ie=b.colorSpace===Kr?null:Dt.getPrimaries(b.colorSpace),ke=b.colorSpace===Kr||ve===Ie?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let _e=S(b.image,!1,a.maxTextureSize);_e=rt(b,_e);const Te=l.convert(b.format,b.colorSpace),Qe=l.convert(b.type);let Oe=T(b.internalFormat,Te,Qe,b.normalized,b.colorSpace,b.isVideoTexture);He(se,b);let Ae;const $e=b.mipmaps,ot=b.isVideoTexture!==!0,ct=Ue.__version===void 0||pe===!0,H=Ee.dataReady,Le=L(b,_e);if(b.isDepthTexture)Oe=I(b.format===Ts,b.type),ct&&(ot?t.texStorage2D(i.TEXTURE_2D,1,Oe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Te,Qe,null));else if(b.isDataTexture)if($e.length>0){ot&&ct&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Ae=$e[ve],ot?H&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Te,Qe,Ae.data):t.texImage2D(i.TEXTURE_2D,ve,Oe,Ae.width,Ae.height,0,Te,Qe,Ae.data);b.generateMipmaps=!1}else ot?(ct&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,_e.width,_e.height),H&&ge(b,_e,Te,Qe)):t.texImage2D(i.TEXTURE_2D,0,Oe,_e.width,_e.height,0,Te,Qe,_e.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ot&&ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Oe,$e[0].width,$e[0].height,_e.depth);for(let ve=0,Ie=$e.length;ve<Ie;ve++)if(Ae=$e[ve],b.format!==Di)if(Te!==null)if(ot){if(H)if(b.layerUpdates.size>0){const ke=Gg(Ae.width,Ae.height,b.format,b.type);for(const Se of b.layerUpdates){const Ke=Ae.data.subarray(Se*ke/Ae.data.BYTES_PER_ELEMENT,(Se+1)*ke/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Se,Ae.width,Ae.height,1,Te,Ke)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,_e.depth,Te,Ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Oe,Ae.width,Ae.height,_e.depth,0,Ae.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ae.width,Ae.height,_e.depth,Te,Qe,Ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Oe,Ae.width,Ae.height,_e.depth,0,Te,Qe,Ae.data)}else{ot&&ct&&t.texStorage2D(i.TEXTURE_2D,Le,Oe,$e[0].width,$e[0].height);for(let ve=0,Ie=$e.length;ve<Ie;ve++)Ae=$e[ve],b.format!==Di?Te!==null?ot?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Te,Ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Oe,Ae.width,Ae.height,0,Ae.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?H&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ae.width,Ae.height,Te,Qe,Ae.data):t.texImage2D(i.TEXTURE_2D,ve,Oe,Ae.width,Ae.height,0,Te,Qe,Ae.data)}else if(b.isDataArrayTexture)if(ot){if(ct&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Oe,_e.width,_e.height,_e.depth),H)if(b.layerUpdates.size>0){const ve=Gg(_e.width,_e.height,b.format,b.type);for(const Ie of b.layerUpdates){const ke=_e.data.subarray(Ie*ve/_e.data.BYTES_PER_ELEMENT,(Ie+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ie,_e.width,_e.height,1,Te,Qe,ke)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,Qe,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,_e.width,_e.height,_e.depth,0,Te,Qe,_e.data);else if(b.isData3DTexture)ot?(ct&&t.texStorage3D(i.TEXTURE_3D,Le,Oe,_e.width,_e.height,_e.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,Qe,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,_e.width,_e.height,_e.depth,0,Te,Qe,_e.data);else if(b.isFramebufferTexture){if(ct)if(ot)t.texStorage2D(i.TEXTURE_2D,Le,Oe,_e.width,_e.height);else{let ve=_e.width,Ie=_e.height;for(let ke=0;ke<Le;ke++)t.texImage2D(i.TEXTURE_2D,ke,Oe,ve,Ie,0,Te,Qe,null),ve>>=1,Ie>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),_.add(b),ve.onpaint=Ie=>{const ke=Ie.changedElements;for(const Se of _)ke.includes(Se.image)&&(Se.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_e);else{const ke=i.RGBA,Se=i.RGBA,Ke=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,Se,Ke,_e)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($e.length>0){if(ot&&ct){const ve=Ge($e[0]);t.texStorage2D(i.TEXTURE_2D,Le,Oe,ve.width,ve.height)}for(let ve=0,Ie=$e.length;ve<Ie;ve++)Ae=$e[ve],ot?H&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Te,Qe,Ae):t.texImage2D(i.TEXTURE_2D,ve,Oe,Te,Qe,Ae);b.generateMipmaps=!1}else if(ot){if(ct){const ve=Ge(_e);t.texStorage2D(i.TEXTURE_2D,Le,Oe,ve.width,ve.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,Qe,_e)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Te,Qe,_e);g(b)&&R(se),Ue.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function et(D,b,j){if(b.image.length!==6)return;const se=K(D,b),pe=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+j);const Ee=r.get(pe);if(pe.version!==Ee.__version||se===!0){t.activeTexture(i.TEXTURE0+j);const Ue=Dt.getPrimaries(Dt.workingColorSpace),me=b.colorSpace===Kr?null:Dt.getPrimaries(b.colorSpace),_e=b.colorSpace===Kr||Ue===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Te=b.isCompressedTexture||b.image[0].isCompressedTexture,Qe=b.image[0]&&b.image[0].isDataTexture,Oe=[];for(let Se=0;Se<6;Se++)!Te&&!Qe?Oe[Se]=S(b.image[Se],!0,a.maxCubemapSize):Oe[Se]=Qe?b.image[Se].image:b.image[Se],Oe[Se]=rt(b,Oe[Se]);const Ae=Oe[0],$e=l.convert(b.format,b.colorSpace),ot=l.convert(b.type),ct=T(b.internalFormat,$e,ot,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Le=Ee.__version===void 0||se===!0,ve=pe.dataReady;let Ie=L(b,Ae);He(i.TEXTURE_CUBE_MAP,b);let ke;if(Te){H&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ct,Ae.width,Ae.height);for(let Se=0;Se<6;Se++){ke=Oe[Se].mipmaps;for(let Ke=0;Ke<ke.length;Ke++){const qe=ke[Ke];b.format!==Di?$e!==null?H?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke,0,0,qe.width,qe.height,$e,qe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke,ct,qe.width,qe.height,0,qe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke,0,0,qe.width,qe.height,$e,ot,qe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke,ct,qe.width,qe.height,0,$e,ot,qe.data)}}}else{if(ke=b.mipmaps,H&&Le){ke.length>0&&Ie++;const Se=Ge(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ie,ct,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Qe){H?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Oe[Se].width,Oe[Se].height,$e,ot,Oe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,Oe[Se].width,Oe[Se].height,0,$e,ot,Oe[Se].data);for(let Ke=0;Ke<ke.length;Ke++){const Gt=ke[Ke].image[Se].image;H?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke+1,0,0,Gt.width,Gt.height,$e,ot,Gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke+1,ct,Gt.width,Gt.height,0,$e,ot,Gt.data)}}else{H?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$e,ot,Oe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ct,$e,ot,Oe[Se]);for(let Ke=0;Ke<ke.length;Ke++){const qe=ke[Ke];H?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke+1,0,0,$e,ot,qe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ke+1,ct,$e,ot,qe.image[Se])}}}g(b)&&R(i.TEXTURE_CUBE_MAP),Ee.__version=pe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Je(D,b,j,se,pe,Ee){const Ue=l.convert(j.format,j.colorSpace),me=l.convert(j.type),_e=T(j.internalFormat,Ue,me,j.normalized,j.colorSpace),Te=r.get(b),Qe=r.get(j);if(Qe.__renderTarget=b,!Te.__hasExternalTextures){const Oe=Math.max(1,b.width>>Ee),Ae=Math.max(1,b.height>>Ee);pe===i.TEXTURE_3D||pe===i.TEXTURE_2D_ARRAY?t.texImage3D(pe,Ee,_e,Oe,Ae,b.depth,0,Ue,me,null):t.texImage2D(pe,Ee,_e,Oe,Ae,0,Ue,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ft(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,pe,Qe.__webglTexture,0,Ot(b)):(pe===i.TEXTURE_2D||pe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,pe,Qe.__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Mt(D,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){const se=b.depthTexture,pe=se&&se.isDepthTexture?se.type:null,Ee=I(b.stencilBuffer,pe),Ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ft(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(b),Ee,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(b),Ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,D)}else{const se=b.textures;for(let pe=0;pe<se.length;pe++){const Ee=se[pe],Ue=l.convert(Ee.format,Ee.colorSpace),me=l.convert(Ee.type),_e=T(Ee.internalFormat,Ue,me,Ee.normalized,Ee.colorSpace);Ft(b)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(b),_e,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(b),_e,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,_e,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(D,b,j){const se=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const pe=r.get(b.depthTexture);if(pe.__renderTarget=b,(!pe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),se){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,b.depthTexture.addEventListener("dispose",k)),pe.__webglTexture===void 0){pe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),He(i.TEXTURE_CUBE_MAP,b.depthTexture);const Te=l.convert(b.depthTexture.format),Qe=l.convert(b.depthTexture.type);let Oe;b.depthTexture.format===_r?Oe=i.DEPTH_COMPONENT24:b.depthTexture.format===Ts&&(Oe=i.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Oe,b.width,b.height,0,Te,Qe,null)}}else $(b.depthTexture,0);const Ee=pe.__webglTexture,Ue=Ot(b),me=se?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,_e=b.depthTexture.format===Ts?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===_r)Ft(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,me,Ee,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,_e,me,Ee,0);else if(b.depthTexture.format===Ts)Ft(b)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,me,Ee,0,Ue):i.framebufferTexture2D(i.FRAMEBUFFER,_e,me,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function at(D){const b=r.get(D),j=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const se=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const pe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",pe)};se.addEventListener("dispose",pe),b.__depthDisposeCallback=pe}b.__boundDepthTexture=se}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(j)for(let se=0;se<6;se++)ye(b.__webglFramebuffer[se],D,se);else{const se=D.texture.mipmaps;se&&se.length>0?ye(b.__webglFramebuffer[0],D,0):ye(b.__webglFramebuffer,D,0)}else if(j){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=i.createRenderbuffer(),Mt(b.__webglDepthbuffer[se],D,!1);else{const pe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Ee)}}else{const se=D.texture.mipmaps;if(se&&se.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Mt(b.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(D,b,j){const se=r.get(D);b!==void 0&&Je(se.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&at(D)}function Re(D){const b=D.texture,j=r.get(D),se=r.get(b);D.addEventListener("dispose",w);const pe=D.textures,Ee=D.isWebGLCubeRenderTarget===!0,Ue=pe.length>1;if(Ue||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=b.version,c.memory.textures++),Ee){j.__webglFramebuffer=[];for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[me]=[];for(let _e=0;_e<b.mipmaps.length;_e++)j.__webglFramebuffer[me][_e]=i.createFramebuffer()}else j.__webglFramebuffer[me]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let me=0;me<b.mipmaps.length;me++)j.__webglFramebuffer[me]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let me=0,_e=pe.length;me<_e;me++){const Te=r.get(pe[me]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),c.memory.textures++)}if(D.samples>0&&Ft(D)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let me=0;me<pe.length;me++){const _e=pe[me];j.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[me]);const Te=l.convert(_e.format,_e.colorSpace),Qe=l.convert(_e.type),Oe=T(_e.internalFormat,Te,Qe,_e.normalized,_e.colorSpace,D.isXRRenderTarget===!0),Ae=Ot(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,Oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,j.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),Mt(j.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),He(i.TEXTURE_CUBE_MAP,b);for(let me=0;me<6;me++)if(b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Je(j.__webglFramebuffer[me][_e],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else Je(j.__webglFramebuffer[me],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(b)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let me=0,_e=pe.length;me<_e;me++){const Te=pe[me],Qe=r.get(Te);let Oe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Oe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Qe.__webglTexture),He(Oe,Te),Je(j.__webglFramebuffer,D,Te,i.COLOR_ATTACHMENT0+me,Oe,0),g(Te)&&R(Oe)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,se.__webglTexture),He(me,b),b.mipmaps&&b.mipmaps.length>0)for(let _e=0;_e<b.mipmaps.length;_e++)Je(j.__webglFramebuffer[_e],D,b,i.COLOR_ATTACHMENT0,me,_e);else Je(j.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,me,0);g(b)&&R(me),t.unbindTexture()}D.depthBuffer&&at(D)}function mt(D){const b=D.textures;for(let j=0,se=b.length;j<se;j++){const pe=b[j];if(g(pe)){const Ee=P(D),Ue=r.get(pe).__webglTexture;t.bindTexture(Ee,Ue),R(Ee),t.unbindTexture()}}}const yt=[],Rt=[];function Ht(D){if(D.samples>0){if(Ft(D)===!1){const b=D.textures,j=D.width,se=D.height;let pe=i.COLOR_BUFFER_BIT;const Ee=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=r.get(D),me=b.length>1;if(me)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const _e=D.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);const Qe=r.get(b[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,j,se,0,0,j,se,pe,i.NEAREST),f===!0&&(yt.length=0,Rt.length=0,yt.push(i.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.resolveDepthBuffer===!1&&(yt.push(Ee),Rt.push(Ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);const Qe=r.get(b[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ot(D){return Math.min(a.maxSamples,D.samples)}function Ft(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function F(D){const b=c.render.frame;x.get(D)!==b&&(x.set(D,b),D.update())}function rt(D,b){const j=D.colorSpace,se=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||j!==Dc&&j!==Kr&&(Dt.getTransfer(j)===qt?(se!==Di||pe!==ci)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",j)),b}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=fe,this.resetTextureUnits=ce,this.getTextureUnits=he,this.setTextureUnits=q,this.setTexture2D=$,this.setTexture2DArray=le,this.setTexture3D=re,this.setTextureCube=O,this.rebindTextures=ut,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FR(i,e){function t(r,a=Kr){let l;const c=Dt.getTransfer(a);if(r===ci)return i.UNSIGNED_BYTE;if(r===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===_v)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===yv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===xv)return i.BYTE;if(r===vv)return i.SHORT;if(r===Io)return i.UNSIGNED_SHORT;if(r===zh)return i.INT;if(r===Yi)return i.UNSIGNED_INT;if(r===ji)return i.FLOAT;if(r===vr)return i.HALF_FLOAT;if(r===Sv)return i.ALPHA;if(r===Mv)return i.RGB;if(r===Di)return i.RGBA;if(r===_r)return i.DEPTH_COMPONENT;if(r===Ts)return i.DEPTH_STENCIL;if(r===bv)return i.RED;if(r===Gh)return i.RED_INTEGER;if(r===Ds)return i.RG;if(r===jh)return i.RG_INTEGER;if(r===Wh)return i.RGBA_INTEGER;if(r===Sc||r===Mc||r===bc||r===wc)if(c===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===wc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hf||r===Gf||r===jf||r===Wf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xf||r===qf||r===$f||r===Yf||r===Kf||r===Pc||r===Zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xf||r===qf)return c===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$f)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yf)return l.COMPRESSED_R11_EAC;if(r===Kf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Pc)return l.COMPRESSED_RG11_EAC;if(r===Zf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jf||r===Qf||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh||r===lh||r===ch||r===uh||r===dh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Jf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return c===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fh||r===hh||r===ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===fh)return c===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mh||r===gh||r===Lc||r===xh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===mh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Uo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const kR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BR=`
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

}`;class zR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Lv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ki({vertexShader:kR,fragmentShader:BR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ii(new Xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VR extends Us{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",f=1,m=null,x=null,_=null,y=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",S=new zR,g={},R=t.getContextAttributes();let P=null,T=null;const I=[],L=[],k=new Lt;let w=null;const U=new li;U.viewport=new an;const z=new li;z.viewport=new an;const V=[U,z],Z=new YE;let ce=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let xe=I[K];return xe===void 0&&(xe=new Zd,I[K]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(K){let xe=I[K];return xe===void 0&&(xe=new Zd,I[K]=xe),xe.getGripSpace()},this.getHand=function(K){let xe=I[K];return xe===void 0&&(xe=new Zd,I[K]=xe),xe.getHandSpace()};function q(K){const xe=L.indexOf(K.inputSource);if(xe===-1)return;const ge=I[xe];ge!==void 0&&(ge.update(K.inputSource,K.frame,m||c),ge.dispatchEvent({type:K.type,data:K.inputSource}))}function fe(){a.removeEventListener("select",q),a.removeEventListener("selectstart",q),a.removeEventListener("selectend",q),a.removeEventListener("squeeze",q),a.removeEventListener("squeezestart",q),a.removeEventListener("squeezeend",q),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",Q);for(let K=0;K<I.length;K++){const xe=L[K];xe!==null&&(L[K]=null,I[K].disconnect(xe))}ce=null,he=null,S.reset();for(const K in g)delete g[K];e.setRenderTarget(P),M=null,y=null,_=null,a=null,T=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(P=e.getRenderTarget(),a.addEventListener("select",q),a.addEventListener("selectstart",q),a.addEventListener("selectend",q),a.addEventListener("squeeze",q),a.addEventListener("squeezestart",q),a.addEventListener("squeezeend",q),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",Q),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Fe=null,et=null;R.depth&&(et=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=R.stencil?Ts:_r,Fe=R.stencil?Uo:Yi);const Je={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:l};_=this.getBinding(),y=_.createProjectionLayer(Je),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),T=new qi(y.textureWidth,y.textureHeight,{format:Di,type:ci,depthTexture:new Aa(y.textureWidth,y.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ge={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ge),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new qi(M.framebufferWidth,M.framebufferHeight,{format:Di,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),m=null,c=await a.requestReferenceSpace(d),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(K){for(let xe=0;xe<K.removed.length;xe++){const ge=K.removed[xe],Fe=L.indexOf(ge);Fe>=0&&(L[Fe]=null,I[Fe].disconnect(ge))}for(let xe=0;xe<K.added.length;xe++){const ge=K.added[xe];let Fe=L.indexOf(ge);if(Fe===-1){for(let Je=0;Je<I.length;Je++)if(Je>=L.length){L.push(ge),Fe=Je;break}else if(L[Je]===null){L[Je]=ge,Fe=Je;break}if(Fe===-1)break}const et=I[Fe];et&&et.connect(ge)}}const $=new te,le=new te;function re(K,xe,ge){$.setFromMatrixPosition(xe.matrixWorld),le.setFromMatrixPosition(ge.matrixWorld);const Fe=$.distanceTo(le),et=xe.projectionMatrix.elements,Je=ge.projectionMatrix.elements,Mt=et[14]/(et[10]-1),ye=et[14]/(et[10]+1),at=(et[9]+1)/et[5],ut=(et[9]-1)/et[5],Re=(et[8]-1)/et[0],mt=(Je[8]+1)/Je[0],yt=Mt*Re,Rt=Mt*mt,Ht=Fe/(-Re+mt),Ot=Ht*-Re;if(xe.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(Ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),et[10]===-1)K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const Ft=Mt+Ht,F=ye+Ht,rt=yt-Ot,Ge=Rt+(Fe-Ot),D=at*ye/F*Ft,b=ut*ye/F*Ft;K.projectionMatrix.makePerspective(rt,Ge,D,b,Ft,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function O(K,xe){xe===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(xe.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let xe=K.near,ge=K.far;S.texture!==null&&(S.depthNear>0&&(xe=S.depthNear),S.depthFar>0&&(ge=S.depthFar)),Z.near=z.near=U.near=xe,Z.far=z.far=U.far=ge,(ce!==Z.near||he!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ce=Z.near,he=Z.far),Z.layers.mask=K.layers.mask|6,U.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const Fe=K.parent,et=Z.cameras;O(Z,Fe);for(let Je=0;Je<et.length;Je++)O(et[Je],Fe);et.length===2?re(Z,U,z):Z.projectionMatrix.copy(U.projectionMatrix),J(K,Z,Fe)};function J(K,xe,ge){ge===null?K.matrix.copy(xe.matrixWorld):(K.matrix.copy(ge.matrixWorld),K.matrix.invert(),K.matrix.multiply(xe.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(xe.projectionMatrix),K.projectionMatrixInverse.copy(xe.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_h*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return f},this.setFoveation=function(K){f=K,y!==null&&(y.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(K){return g[K]};let Ne=null;function Ve(K,xe){if(x=xe.getViewerPose(m||c),E=xe,x!==null){const ge=x.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let Fe=!1;ge.length!==Z.cameras.length&&(Z.cameras.length=0,Fe=!0);for(let ye=0;ye<ge.length;ye++){const at=ge[ye];let ut=null;if(M!==null)ut=M.getViewport(at);else{const mt=_.getViewSubImage(y,at);ut=mt.viewport,ye===0&&(e.setRenderTargetTextures(T,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(T))}let Re=V[ye];Re===void 0&&(Re=new li,Re.layers.enable(ye),Re.viewport=new an,V[ye]=Re),Re.matrix.fromArray(at.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(at.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(ut.x,ut.y,ut.width,ut.height),ye===0&&(Z.matrix.copy(Re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Fe===!0&&Z.cameras.push(Re)}const et=a.enabledFeatures;if(et&&et.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ye=_.getDepthInformation(ge[0]);ye&&ye.isValid&&ye.texture&&S.init(ye,a.renderState)}if(et&&et.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ye=0;ye<ge.length;ye++){const at=ge[ye].camera;if(at){let ut=g[at];ut||(ut=new Lv,g[at]=ut);const Re=_.getCameraImage(at);ut.sourceTexture=Re}}}}for(let ge=0;ge<I.length;ge++){const Fe=L[ge],et=I[ge];Fe!==null&&et!==void 0&&et.update(Fe,xe,m||c)}Ne&&Ne(K,xe),xe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:xe}),E=null}const He=new Fv;He.setAnimationLoop(Ve),this.setAnimationLoop=function(K){Ne=K},this.dispose=function(){}}}const HR=new ln,jv=new _t;jv.set(-1,0,0,0,1,0,0,0,1);function GR(i,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Dv(i)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,R,P,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(S,g):g.isMeshLambertMaterial?(l(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(S,g),_(S,g)):g.isMeshPhongMaterial?(l(S,g),x(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,T)):g.isMeshMatcapMaterial?(l(S,g),E(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),C(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(c(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?f(S,g,R,P):g.isSpriteMaterial?m(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===ti&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===ti&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const R=e.get(g),P=R.envMap,T=R.envMapRotation;P&&(S.envMap.value=P,S.envMapRotation.value.setFromMatrix4(HR.makeRotationFromEuler(T)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(jv),S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function f(S,g,R,P){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*R,S.scale.value=P*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function m(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,R){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ti&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const R=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function jR(i,e,t,r){let a={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,I){const L=I.program;r.uniformBlockBinding(T,L)}function m(T,I){let L=a[T.id];L===void 0&&(S(T),L=x(T),a[T.id]=L,T.addEventListener("dispose",R));const k=I.program;r.updateUBOMapping(T,k);const w=e.render.frame;l[T.id]!==w&&(y(T),l[T.id]=w)}function x(T){const I=_();T.__bindingPointIndex=I;const L=i.createBuffer(),k=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,k,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,I,L),L}function _(){for(let T=0;T<d;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const I=a[T.id],L=T.uniforms,k=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,I);for(let w=0,U=L.length;w<U;w++){const z=L[w];if(Array.isArray(z))for(let V=0,Z=z.length;V<Z;V++)M(z[V],w,V,k);else M(z,w,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(T,I,L,k){if(C(T,I,L,k)===!0){const w=T.__offset,U=T.value;if(Array.isArray(U)){let z=0;for(let V=0;V<U.length;V++){const Z=U[V],ce=g(Z);E(Z,T.__data,z),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(z+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}function E(T,I,L){typeof T=="number"||typeof T=="boolean"?I[0]=T:T.isMatrix3?(I[0]=T.elements[0],I[1]=T.elements[1],I[2]=T.elements[2],I[3]=0,I[4]=T.elements[3],I[5]=T.elements[4],I[6]=T.elements[5],I[7]=0,I[8]=T.elements[6],I[9]=T.elements[7],I[10]=T.elements[8],I[11]=0):ArrayBuffer.isView(T)?I.set(new T.constructor(T.buffer,T.byteOffset,I.length)):T.toArray(I,L)}function C(T,I,L,k){const w=T.value,U=I+"_"+L;if(k[U]===void 0)return typeof w=="number"||typeof w=="boolean"?k[U]=w:ArrayBuffer.isView(w)?k[U]=w.slice():k[U]=w.clone(),!0;{const z=k[U];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return k[U]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(z.equals(w)===!1)return z.copy(w),!0}}return!1}function S(T){const I=T.uniforms;let L=0;const k=16;for(let U=0,z=I.length;U<z;U++){const V=Array.isArray(I[U])?I[U]:[I[U]];for(let Z=0,ce=V.length;Z<ce;Z++){const he=V[Z],q=Array.isArray(he.value)?he.value:[he.value];for(let fe=0,Q=q.length;fe<Q;fe++){const $=q[fe],le=g($),re=L%k,O=re%le.boundary,J=re+O;L+=O,J!==0&&k-J<le.storage&&(L+=k-J),he.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=L,L+=le.storage}}}const w=L%k;return w>0&&(L+=k-w),T.__size=L,T.__cache={},this}function g(T){const I={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(I.boundary=4,I.storage=4):T.isVector2?(I.boundary=8,I.storage=8):T.isVector3||T.isColor?(I.boundary=16,I.storage=12):T.isVector4?(I.boundary=16,I.storage=16):T.isMatrix3?(I.boundary=48,I.storage=48):T.isMatrix4?(I.boundary=64,I.storage=64):T.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(I.boundary=16,I.storage=T.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",T),I}function R(T){const I=T.target;I.removeEventListener("dispose",R);const L=c.indexOf(I.__bindingPointIndex);c.splice(L,1),i.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function P(){for(const T in a)i.deleteBuffer(a[T]);c=[],a={},l={}}return{bind:f,update:m,dispose:P}}const WR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vi=null;function XR(){return Vi===null&&(Vi=new NE(WR,16,16,Ds,vr),Vi.name="DFG_LUT",Vi.minFilter=Fn,Vi.magFilter=Fn,Vi.wrapS=mr,Vi.wrapT=mr,Vi.generateMipmaps=!1,Vi.needsUpdate=!0),Vi}class qR{constructor(e={}){const{canvas:t=oE(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:M=ci}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const C=M,S=new Set([Wh,jh,Gh]),g=new Set([ci,Yi,Io,Uo,Vh,Hh]),R=new Uint32Array(4),P=new Int32Array(4),T=new te;let I=null,L=null;const k=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,Z=null,ce=null,he=null,q=null;this._outputColorSpace=xi;let fe=0,Q=0,$=null,le=-1,re=null;const O=new an,J=new an;let Ne=null;const Ve=new Et(0);let He=0,K=t.width,xe=t.height,ge=1,Fe=null,et=null;const Je=new an(0,0,K,xe),Mt=new an(0,0,K,xe);let ye=!1;const at=new Zh;let ut=!1,Re=!1;const mt=new ln,yt=new te,Rt=new an,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Ft(){return $===null?ge:1}let F=r;function rt(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Gt,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",Vt,!1),F===null){const Y="webgl2";if(F=rt(Y,N),F===null)throw rt(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw Ut("WebGLRenderer: "+N.message),N}let Ge,D,b,j,se,pe,Ee,Ue,me,_e,Te,Qe,Oe,Ae,$e,ot,ct,H,Le,ve,Ie,ke,Se;function Ke(){Ge=new XA(F),Ge.init(),Ie=new FR(F,Ge),D=new kA(F,Ge,e,Ie),b=new UR(F,Ge),D.reversedDepthBuffer&&y&&b.buffers.depth.setReversed(!0),ce=F.createFramebuffer(),he=F.createFramebuffer(),q=F.createFramebuffer(),j=new YA(F),se=new SR,pe=new OR(F,Ge,b,se,D,Ie,j),Ee=new WA(z),Ue=new QE(F),ke=new OA(F,Ue),me=new qA(F,Ue,j,ke),_e=new ZA(F,me,Ue,ke,j),H=new KA(F,D,pe),$e=new BA(se),Te=new yR(z,Ee,Ge,D,ke,$e),Qe=new GR(z,se),Oe=new bR,Ae=new RR(Ge),ct=new UA(z,Ee,b,_e,E,f),ot=new IR(z,_e,D),Se=new jR(F,j,D,b),Le=new FA(F,Ge,j),ve=new $A(F,Ge,j),j.programs=Te.programs,z.capabilities=D,z.extensions=Ge,z.properties=se,z.renderLists=Oe,z.shadowMap=ot,z.state=b,z.info=j}Ke(),C!==ci&&(U=new QA(C,t.width,t.height,d,a,l));const qe=new VR(z,F);this.xr=qe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const N=Ge.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Ge.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ge},this.setPixelRatio=function(N){N!==void 0&&(ge=N,this.setSize(K,xe,!1))},this.getSize=function(N){return N.set(K,xe)},this.setSize=function(N,Y,ue=!0){if(qe.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}K=N,xe=Y,t.width=Math.floor(N*ge),t.height=Math.floor(Y*ge),ue===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(K*ge,xe*ge).floor()},this.setDrawingBufferSize=function(N,Y,ue){K=N,xe=Y,ge=ue,t.width=Math.floor(N*ue),t.height=Math.floor(Y*ue),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(C===ci){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(Je)},this.setViewport=function(N,Y,ue,ie){N.isVector4?Je.set(N.x,N.y,N.z,N.w):Je.set(N,Y,ue,ie),b.viewport(O.copy(Je).multiplyScalar(ge).round())},this.getScissor=function(N){return N.copy(Mt)},this.setScissor=function(N,Y,ue,ie){N.isVector4?Mt.set(N.x,N.y,N.z,N.w):Mt.set(N,Y,ue,ie),b.scissor(J.copy(Mt).multiplyScalar(ge).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){b.setScissorTest(ye=N)},this.setOpaqueSort=function(N){Fe=N},this.setTransparentSort=function(N){et=N},this.getClearColor=function(N){return N.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,ue=!0){let ie=0;if(N){let ne=!1;if($!==null){const De=$.texture.format;ne=S.has(De)}if(ne){const De=$.texture.type,Xe=g.has(De),Pe=ct.getClearColor(),tt=ct.getClearAlpha(),lt=Pe.r,xt=Pe.g,vt=Pe.b;Xe?(R[0]=lt,R[1]=xt,R[2]=vt,R[3]=tt,F.clearBufferuiv(F.COLOR,0,R)):(P[0]=lt,P[1]=xt,P[2]=vt,P[3]=tt,F.clearBufferiv(F.COLOR,0,P))}else ie|=F.COLOR_BUFFER_BIT}Y&&(ie|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ie|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&F.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),Z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Gt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",Vt,!1),ct.dispose(),Oe.dispose(),Ae.dispose(),se.dispose(),Ee.dispose(),_e.dispose(),ke.dispose(),Se.dispose(),Te.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",ns),qe.removeEventListener("sessionend",Ji),Rn.stop()};function Gt(N){N.preventDefault(),yg("WebGLRenderer: Context Lost."),V=!0}function kt(){yg("WebGLRenderer: Context Restored."),V=!1;const N=j.autoReset,Y=ot.enabled,ue=ot.autoUpdate,ie=ot.needsUpdate,ne=ot.type;Ke(),j.autoReset=N,ot.enabled=Y,ot.autoUpdate=ue,ot.needsUpdate=ie,ot.type=ne}function Vt(N){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Tt(N){const Y=N.target;Y.removeEventListener("dispose",Tt),Nt(Y)}function Nt(N){bt(N),se.remove(N)}function bt(N){const Y=se.get(N).programs;Y!==void 0&&(Y.forEach(function(ue){Te.releaseProgram(ue)}),N.isShaderMaterial&&Te.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,ue,ie,ne,De){Y===null&&(Y=Ht);const Xe=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Pe=nn(N,Y,ue,ie,ne);b.setMaterial(ie,Xe);let tt=ue.index,lt=1;if(ie.wireframe===!0){if(tt=me.getWireframeAttribute(ue),tt===void 0)return;lt=2}const xt=ue.drawRange,vt=ue.attributes.position;let it=xt.start*lt,It=(xt.start+xt.count)*lt;De!==null&&(it=Math.max(it,De.start*lt),It=Math.min(It,(De.start+De.count)*lt)),tt!==null?(it=Math.max(it,0),It=Math.min(It,tt.count)):vt!=null&&(it=Math.max(it,0),It=Math.min(It,vt.count));const Yt=It-it;if(Yt<0||Yt===1/0)return;ke.setup(ne,ie,Pe,ue,tt);let en,Wt=Le;if(tt!==null&&(en=Ue.get(tt),Wt=ve,Wt.setIndex(en)),ne.isMesh)ie.wireframe===!0?(b.setLineWidth(ie.wireframeLinewidth*Ft()),Wt.setMode(F.LINES)):Wt.setMode(F.TRIANGLES);else if(ne.isLine){let hn=ie.linewidth;hn===void 0&&(hn=1),b.setLineWidth(hn*Ft()),ne.isLineSegments?Wt.setMode(F.LINES):ne.isLineLoop?Wt.setMode(F.LINE_LOOP):Wt.setMode(F.LINE_STRIP)}else ne.isPoints?Wt.setMode(F.POINTS):ne.isSprite&&Wt.setMode(F.TRIANGLES);if(ne.isBatchedMesh)if(Ge.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const hn=ne._multiDrawStarts,je=ne._multiDrawCounts,wn=ne._multiDrawCount,wt=tt?Ue.get(tt).bytesPerElement:1,Wn=se.get(ie).currentProgram.getUniforms();for(let Xn=0;Xn<wn;Xn++)Wn.setValue(F,"_gl_DrawID",Xn),Wt.render(hn[Xn]/wt,je[Xn])}else if(ne.isInstancedMesh)Wt.renderInstances(it,Yt,ne.count);else if(ue.isInstancedBufferGeometry){const hn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,hn);Wt.renderInstances(it,Yt,je)}else Wt.render(it,Yt)};function $t(N,Y,ue){N.transparent===!0&&N.side===pr&&N.forceSinglePass===!1?(N.side=ti,N.needsUpdate=!0,rs(N,Y,ue),N.side=es,N.needsUpdate=!0,rs(N,Y,ue),N.side=pr):rs(N,Y,ue)}this.compile=function(N,Y,ue=null){ue===null&&(ue=N),L=Ae.get(ue),L.init(Y),w.push(L),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),N!==ue&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const ie=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const De=ne.material;if(De)if(Array.isArray(De))for(let Xe=0;Xe<De.length;Xe++){const Pe=De[Xe];$t(Pe,ue,ne),ie.add(Pe)}else $t(De,ue,ne),ie.add(De)}),L=w.pop(),ie},this.compileAsync=function(N,Y,ue=null){const ie=this.compile(N,Y,ue);return new Promise(ne=>{function De(){if(ie.forEach(function(Xe){se.get(Xe).currentProgram.isReady()&&ie.delete(Xe)}),ie.size===0){ne(N);return}setTimeout(De,10)}Ge.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let fn=null;function Mr(N){fn&&fn(N)}function ns(){Rn.stop()}function Ji(){Rn.start()}const Rn=new Fv;Rn.setAnimationLoop(Mr),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(N){fn=N,qe.setAnimationLoop(N),N===null?Rn.stop():Rn.start()},qe.addEventListener("sessionstart",ns),qe.addEventListener("sessionend",Ji),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(N,Y);const ue=qe.enabled===!0&&qe.isPresenting===!0,ie=U!==null&&($===null||ue)&&U.begin(z,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(Y),Y=qe.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,Y,$),L=Ae.get(N,w.length),L.init(Y),L.state.textureUnits=pe.getTextureUnits(),w.push(L),mt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),at.setFromProjectionMatrix(mt,Wi,Y.reversedDepth),Re=this.localClippingEnabled,ut=$e.init(this.clippingPlanes,Re),I=Oe.get(N,k.length),I.init(),k.push(I),qe.enabled===!0&&qe.isPresenting===!0){const Xe=z.xr.getDepthSensingMesh();Xe!==null&&Qi(Xe,Y,-1/0,z.sortObjects)}Qi(N,Y,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(Fe,et,Y.reversedDepth),Ot=qe.enabled===!1||qe.isPresenting===!1||qe.hasDepthSensing()===!1,Ot&&ct.addToRenderList(I,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&$e.beginShadows();const ne=L.state.shadowsArray;if(ot.render(ne,N,Y),ut===!0&&$e.endShadows(),(ie&&U.hasRenderPass())===!1){const Xe=I.opaque,Pe=I.transmissive;if(L.setupLights(),Y.isArrayCamera){const tt=Y.cameras;if(Pe.length>0)for(let lt=0,xt=tt.length;lt<xt;lt++){const vt=tt[lt];Xo(Xe,Pe,N,vt)}Ot&&ct.render(N);for(let lt=0,xt=tt.length;lt<xt;lt++){const vt=tt[lt];br(I,N,vt,vt.viewport)}}else Pe.length>0&&Xo(Xe,Pe,N,Y),Ot&&ct.render(N),br(I,N,Y)}$!==null&&Q===0&&(pe.updateMultisampleRenderTarget($),pe.updateRenderTargetMipmap($)),ie&&U.end(z),N.isScene===!0&&N.onAfterRender(z,N,Y),ke.resetDefaultState(),le=-1,re=null,w.pop(),w.length>0?(L=w[w.length-1],pe.setTextureUnits(L.state.textureUnits),ut===!0&&$e.setGlobalState(z.clippingPlanes,L.state.camera)):L=null,k.pop(),k.length>0?I=k[k.length-1]:I=null,Z!==null&&Z.renderEnd()};function Qi(N,Y,ue,ie){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLightProbeGrid)L.pushLightProbeGrid(N);else if(N.isLight)L.pushLight(N),N.castShadow&&L.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||at.intersectsSprite(N)){ie&&Rt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(mt);const Xe=_e.update(N),Pe=N.material;Pe.visible&&I.push(N,Xe,Pe,ue,Rt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||at.intersectsObject(N))){const Xe=_e.update(N),Pe=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Rt.copy(N.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),Rt.copy(Xe.boundingSphere.center)),Rt.applyMatrix4(N.matrixWorld).applyMatrix4(mt)),Array.isArray(Pe)){const tt=Xe.groups;for(let lt=0,xt=tt.length;lt<xt;lt++){const vt=tt[lt],it=Pe[vt.materialIndex];it&&it.visible&&I.push(N,Xe,it,ue,Rt.z,vt)}}else Pe.visible&&I.push(N,Xe,Pe,ue,Rt.z,null)}}const De=N.children;for(let Xe=0,Pe=De.length;Xe<Pe;Xe++)Qi(De[Xe],Y,ue,ie)}function br(N,Y,ue,ie){const{opaque:ne,transmissive:De,transparent:Xe}=N;L.setupLightsView(ue),ut===!0&&$e.setGlobalState(z.clippingPlanes,ue),ie&&b.viewport(O.copy(ie)),ne.length>0&&is(ne,Y,ue),De.length>0&&is(De,Y,ue),Xe.length>0&&is(Xe,Y,ue),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function Xo(N,Y,ue,ie){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ie.id]===void 0){const it=Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ie.id]=new qi(1,1,{generateMipmaps:!0,type:it?vr:ci,minFilter:Es,samples:Math.max(4,D.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const De=L.state.transmissionRenderTarget[ie.id],Xe=ie.viewport||O;De.setSize(Xe.z*z.transmissionResolutionScale,Xe.w*z.transmissionResolutionScale);const Pe=z.getRenderTarget(),tt=z.getActiveCubeFace(),lt=z.getActiveMipmapLevel();z.setRenderTarget(De),z.getClearColor(Ve),He=z.getClearAlpha(),He<1&&z.setClearColor(16777215,.5),z.clear(),Ot&&ct.render(ue);const xt=z.toneMapping;z.toneMapping=Xi;const vt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),L.setupLightsView(ie),ut===!0&&$e.setGlobalState(z.clippingPlanes,ie),is(N,ue,ie),pe.updateMultisampleRenderTarget(De),pe.updateRenderTargetMipmap(De),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let It=0,Yt=Y.length;It<Yt;It++){const en=Y[It],{object:Wt,geometry:hn,material:je,group:wn}=en;if(je.side===pr&&Wt.layers.test(ie.layers)){const wt=je.side;je.side=ti,je.needsUpdate=!0,Oa(Wt,ue,ie,hn,je,wn),je.side=wt,je.needsUpdate=!0,it=!0}}it===!0&&(pe.updateMultisampleRenderTarget(De),pe.updateRenderTargetMipmap(De))}z.setRenderTarget(Pe,tt,lt),z.setClearColor(Ve,He),vt!==void 0&&(ie.viewport=vt),z.toneMapping=xt}function is(N,Y,ue){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,De=N.length;ne<De;ne++){const Xe=N[ne],{object:Pe,geometry:tt,group:lt}=Xe;let xt=Xe.material;xt.allowOverride===!0&&ie!==null&&(xt=ie),Pe.layers.test(ue.layers)&&Oa(Pe,Y,ue,tt,xt,lt)}}function Oa(N,Y,ue,ie,ne,De){N.onBeforeRender(z,Y,ue,ie,ne,De),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(z,Y,ue,ie,N,De),ne.transparent===!0&&ne.side===pr&&ne.forceSinglePass===!1?(ne.side=ti,ne.needsUpdate=!0,z.renderBufferDirect(ue,Y,ie,ne,N,De),ne.side=es,ne.needsUpdate=!0,z.renderBufferDirect(ue,Y,ie,ne,N,De),ne.side=pr):z.renderBufferDirect(ue,Y,ie,ne,N,De),N.onAfterRender(z,Y,ue,ie,ne,De)}function rs(N,Y,ue){Y.isScene!==!0&&(Y=Ht);const ie=se.get(N),ne=L.state.lights,De=L.state.shadowsArray,Xe=ne.state.version,Pe=Te.getParameters(N,ne.state,De,Y,ue,L.state.lightProbeGridArray),tt=Te.getProgramCacheKey(Pe);let lt=ie.programs;ie.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Y.environment:null,ie.fog=Y.fog;const xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ie.envMap=Ee.get(N.envMap||ie.environment,xt),ie.envMapRotation=ie.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,lt===void 0&&(N.addEventListener("dispose",Tt),lt=new Map,ie.programs=lt);let vt=lt.get(tt);if(vt!==void 0){if(ie.currentProgram===vt&&ie.lightsStateVersion===Xe)return qo(N,Pe),vt}else Pe.uniforms=Te.getUniforms(N),Z!==null&&N.isNodeMaterial&&Z.build(N,ue,Pe),N.onBeforeCompile(Pe,z),vt=Te.acquireProgram(Pe,tt),lt.set(tt,vt),ie.uniforms=Pe.uniforms;const it=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(it.clippingPlanes=$e.uniform),qo(N,Pe),ie.needsLights=ka(N),ie.lightsStateVersion=Xe,ie.needsLights&&(it.ambientLightColor.value=ne.state.ambient,it.lightProbe.value=ne.state.probe,it.directionalLights.value=ne.state.directional,it.directionalLightShadows.value=ne.state.directionalShadow,it.spotLights.value=ne.state.spot,it.spotLightShadows.value=ne.state.spotShadow,it.rectAreaLights.value=ne.state.rectArea,it.ltc_1.value=ne.state.rectAreaLTC1,it.ltc_2.value=ne.state.rectAreaLTC2,it.pointLights.value=ne.state.point,it.pointLightShadows.value=ne.state.pointShadow,it.hemisphereLights.value=ne.state.hemi,it.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,it.spotLightMatrix.value=ne.state.spotLightMatrix,it.spotLightMap.value=ne.state.spotLightMap,it.pointShadowMatrix.value=ne.state.pointShadowMatrix),ie.lightProbeGrid=L.state.lightProbeGridArray.length>0,ie.currentProgram=vt,ie.uniformsList=null,vt}function Fa(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Ec.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function qo(N,Y){const ue=se.get(N);ue.outputColorSpace=Y.outputColorSpace,ue.batching=Y.batching,ue.batchingColor=Y.batchingColor,ue.instancing=Y.instancing,ue.instancingColor=Y.instancingColor,ue.instancingMorph=Y.instancingMorph,ue.skinning=Y.skinning,ue.morphTargets=Y.morphTargets,ue.morphNormals=Y.morphNormals,ue.morphColors=Y.morphColors,ue.morphTargetsCount=Y.morphTargetsCount,ue.numClippingPlanes=Y.numClippingPlanes,ue.numIntersection=Y.numClipIntersection,ue.vertexAlphas=Y.vertexAlphas,ue.vertexTangents=Y.vertexTangents,ue.toneMapping=Y.toneMapping}function Yc(N,Y){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition(Y.matrixWorld);for(let ue=0,ie=N.length;ue<ie;ue++){const ne=N[ue];if(ne.texture!==null&&ne.boundingBox.containsPoint(T))return ne}return null}function nn(N,Y,ue,ie,ne){Y.isScene!==!0&&(Y=Ht),pe.resetTextureUnits();const De=Y.fog,Xe=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?Y.environment:null,Pe=$===null?z.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Dt.workingColorSpace,tt=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,lt=Ee.get(ie.envMap||Xe,tt),xt=ie.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,vt=!!ue.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),it=!!ue.morphAttributes.position,It=!!ue.morphAttributes.normal,Yt=!!ue.morphAttributes.color;let en=Xi;ie.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(en=z.toneMapping);const Wt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,hn=Wt!==void 0?Wt.length:0,je=se.get(ie),wn=L.state.lights;if(ut===!0&&(Re===!0||N!==re)){const Xt=N===re&&ie.id===le;$e.setState(ie,N,Xt)}let wt=!1;ie.version===je.__version?(je.needsLights&&je.lightsStateVersion!==wn.state.version||je.outputColorSpace!==Pe||ne.isBatchedMesh&&je.batching===!1||!ne.isBatchedMesh&&je.batching===!0||ne.isBatchedMesh&&je.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&je.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&je.instancing===!1||!ne.isInstancedMesh&&je.instancing===!0||ne.isSkinnedMesh&&je.skinning===!1||!ne.isSkinnedMesh&&je.skinning===!0||ne.isInstancedMesh&&je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&je.instancingMorph===!1&&ne.morphTexture!==null||je.envMap!==lt||ie.fog===!0&&je.fog!==De||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==$e.numPlanes||je.numIntersection!==$e.numIntersection)||je.vertexAlphas!==xt||je.vertexTangents!==vt||je.morphTargets!==it||je.morphNormals!==It||je.morphColors!==Yt||je.toneMapping!==en||je.morphTargetsCount!==hn||!!je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,je.__version=ie.version);let Wn=je.currentProgram;wt===!0&&(Wn=rs(ie,Y,ne),Z&&ie.isNodeMaterial&&Z.onUpdateProgram(ie,Wn,je));let Xn=!1,At=!1,er=!1;const jt=Wn.getUniforms(),Zt=je.uniforms;if(b.useProgram(Wn.program)&&(Xn=!0,At=!0,er=!0),ie.id!==le&&(le=ie.id,At=!0),je.needsLights){const Xt=Yc(L.state.lightProbeGridArray,ne);je.lightProbeGrid!==Xt&&(je.lightProbeGrid=Xt,At=!0)}if(Xn||re!==N){b.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),jt.setValue(F,"projectionMatrix",N.projectionMatrix),jt.setValue(F,"viewMatrix",N.matrixWorldInverse);const Si=jt.map.cameraPosition;Si!==void 0&&Si.setValue(F,yt.setFromMatrixPosition(N.matrixWorld)),D.logarithmicDepthBuffer&&jt.setValue(F,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&jt.setValue(F,"isOrthographic",N.isOrthographicCamera===!0),re!==N&&(re=N,At=!0,er=!0)}if(je.needsLights&&(wn.state.directionalShadowMap.length>0&&jt.setValue(F,"directionalShadowMap",wn.state.directionalShadowMap,pe),wn.state.spotShadowMap.length>0&&jt.setValue(F,"spotShadowMap",wn.state.spotShadowMap,pe),wn.state.pointShadowMap.length>0&&jt.setValue(F,"pointShadowMap",wn.state.pointShadowMap,pe)),ne.isSkinnedMesh){jt.setOptional(F,ne,"bindMatrix"),jt.setOptional(F,ne,"bindMatrixInverse");const Xt=ne.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),jt.setValue(F,"boneTexture",Xt.boneTexture,pe))}ne.isBatchedMesh&&(jt.setOptional(F,ne,"batchingTexture"),jt.setValue(F,"batchingTexture",ne._matricesTexture,pe),jt.setOptional(F,ne,"batchingIdTexture"),jt.setValue(F,"batchingIdTexture",ne._indirectTexture,pe),jt.setOptional(F,ne,"batchingColorTexture"),ne._colorsTexture!==null&&jt.setValue(F,"batchingColorTexture",ne._colorsTexture,pe));const yi=ue.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&H.update(ne,ue,Wn),(At||je.receiveShadow!==ne.receiveShadow)&&(je.receiveShadow=ne.receiveShadow,jt.setValue(F,"receiveShadow",ne.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&Y.environment!==null&&(Zt.envMapIntensity.value=Y.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=XR()),At){if(jt.setValue(F,"toneMappingExposure",z.toneMappingExposure),je.needsLights&&Kc(Zt,er),De&&ie.fog===!0&&Qe.refreshFogUniforms(Zt,De),Qe.refreshMaterialUniforms(Zt,ie,ge,xe,L.state.transmissionRenderTarget[N.id]),je.needsLights&&je.lightProbeGrid){const Xt=je.lightProbeGrid;Zt.probesSH.value=Xt.texture,Zt.probesMin.value.copy(Xt.boundingBox.min),Zt.probesMax.value.copy(Xt.boundingBox.max),Zt.probesResolution.value.copy(Xt.resolution)}Ec.upload(F,Fa(je),Zt,pe)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Ec.upload(F,Fa(je),Zt,pe),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&jt.setValue(F,"center",ne.center),jt.setValue(F,"modelViewMatrix",ne.modelViewMatrix),jt.setValue(F,"normalMatrix",ne.normalMatrix),jt.setValue(F,"modelMatrix",ne.matrixWorld),ie.uniformsGroups!==void 0){const Xt=ie.uniformsGroups;for(let Si=0,Ui=Xt.length;Si<Ui;Si++){const ss=Xt[Si];Se.update(ss,Wn),Se.bind(ss,Wn)}}return Wn}function Kc(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function ka(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return fe},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,Y,ue){const ie=se.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),se.get(N.texture).__webglTexture=Y,se.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:ue,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const ue=se.get(N);ue.__webglFramebuffer=Y,ue.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,ue=0){$=N,fe=Y,Q=ue;let ie=null,ne=!1,De=!1;if(N){const Pe=se.get(N);if(Pe.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(F.FRAMEBUFFER,Pe.__webglFramebuffer),O.copy(N.viewport),J.copy(N.scissor),Ne=N.scissorTest,b.viewport(O),b.scissor(J),b.setScissorTest(Ne),le=-1;return}else if(Pe.__webglFramebuffer===void 0)pe.setupRenderTarget(N);else if(Pe.__hasExternalTextures)pe.rebindTextures(N,se.get(N.texture).__webglTexture,se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const xt=N.depthTexture;if(Pe.__boundDepthTexture!==xt){if(xt!==null&&se.has(xt)&&(N.width!==xt.image.width||N.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");pe.setupDepthRenderbuffer(N)}}const tt=N.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(De=!0);const lt=se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(lt[Y])?ie=lt[Y][ue]:ie=lt[Y],ne=!0):N.samples>0&&pe.useMultisampledRTT(N)===!1?ie=se.get(N).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[ue]:ie=lt,O.copy(N.viewport),J.copy(N.scissor),Ne=N.scissorTest}else O.copy(Je).multiplyScalar(ge).floor(),J.copy(Mt).multiplyScalar(ge).floor(),Ne=ye;if(ue!==0&&(ie=ce),b.bindFramebuffer(F.FRAMEBUFFER,ie)&&b.drawBuffers(N,ie),b.viewport(O),b.scissor(J),b.setScissorTest(Ne),ne){const Pe=se.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Pe.__webglTexture,ue)}else if(De){const Pe=Y;for(let tt=0;tt<N.textures.length;tt++){const lt=se.get(N.textures[tt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+tt,lt.__webglTexture,ue,Pe)}}else if(N!==null&&ue!==0){const Pe=se.get(N.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,ue)}le=-1},this.readRenderTargetPixels=function(N,Y,ue,ie,ne,De,Xe,Pe=0){if(!(N&&N.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(tt=tt[Xe]),tt){b.bindFramebuffer(F.FRAMEBUFFER,tt);try{const lt=N.textures[Pe],xt=lt.format,vt=lt.type;if(N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),!D.textureFormatReadable(xt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!D.textureTypeReadable(vt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ie&&ue>=0&&ue<=N.height-ne&&F.readPixels(Y,ue,ie,ne,Ie.convert(xt),Ie.convert(vt),De)}finally{const lt=$!==null?se.get($).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(N,Y,ue,ie,ne,De,Xe,Pe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Xe!==void 0&&(tt=tt[Xe]),tt)if(Y>=0&&Y<=N.width-ie&&ue>=0&&ue<=N.height-ne){b.bindFramebuffer(F.FRAMEBUFFER,tt);const lt=N.textures[Pe],xt=lt.format,vt=lt.type;if(N.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Pe),!D.textureFormatReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!D.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.bufferData(F.PIXEL_PACK_BUFFER,De.byteLength,F.STREAM_READ),F.readPixels(Y,ue,ie,ne,Ie.convert(xt),Ie.convert(vt),0);const It=$!==null?se.get($).__webglFramebuffer:null;b.bindFramebuffer(F.FRAMEBUFFER,It);const Yt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lE(F,Yt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,it),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,De),F.deleteBuffer(it),F.deleteSync(Yt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,ue=0){const ie=Math.pow(2,-ue),ne=Math.floor(N.image.width*ie),De=Math.floor(N.image.height*ie),Xe=Y!==null?Y.x:0,Pe=Y!==null?Y.y:0;pe.setTexture2D(N,0),F.copyTexSubImage2D(F.TEXTURE_2D,ue,0,0,Xe,Pe,ne,De),b.unbindTexture()},this.copyTextureToTexture=function(N,Y,ue=null,ie=null,ne=0,De=0){let Xe,Pe,tt,lt,xt,vt,it,It,Yt;const en=N.isCompressedTexture?N.mipmaps[De]:N.image;if(ue!==null)Xe=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,tt=ue.isBox3?ue.max.z-ue.min.z:1,lt=ue.min.x,xt=ue.min.y,vt=ue.isBox3?ue.min.z:0;else{const Zt=Math.pow(2,-ne);Xe=Math.floor(en.width*Zt),Pe=Math.floor(en.height*Zt),N.isDataArrayTexture?tt=en.depth:N.isData3DTexture?tt=Math.floor(en.depth*Zt):tt=1,lt=0,xt=0,vt=0}ie!==null?(it=ie.x,It=ie.y,Yt=ie.z):(it=0,It=0,Yt=0);const Wt=Ie.convert(Y.format),hn=Ie.convert(Y.type);let je;Y.isData3DTexture?(pe.setTexture3D(Y,0),je=F.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(pe.setTexture2DArray(Y,0),je=F.TEXTURE_2D_ARRAY):(pe.setTexture2D(Y,0),je=F.TEXTURE_2D),b.activeTexture(F.TEXTURE0),b.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Y.flipY),b.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),b.pixelStorei(F.UNPACK_ALIGNMENT,Y.unpackAlignment);const wn=b.getParameter(F.UNPACK_ROW_LENGTH),wt=b.getParameter(F.UNPACK_IMAGE_HEIGHT),Wn=b.getParameter(F.UNPACK_SKIP_PIXELS),Xn=b.getParameter(F.UNPACK_SKIP_ROWS),At=b.getParameter(F.UNPACK_SKIP_IMAGES);b.pixelStorei(F.UNPACK_ROW_LENGTH,en.width),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,en.height),b.pixelStorei(F.UNPACK_SKIP_PIXELS,lt),b.pixelStorei(F.UNPACK_SKIP_ROWS,xt),b.pixelStorei(F.UNPACK_SKIP_IMAGES,vt);const er=N.isDataArrayTexture||N.isData3DTexture,jt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const Zt=se.get(N),yi=se.get(Y),Xt=se.get(Zt.__renderTarget),Si=se.get(yi.__renderTarget);b.bindFramebuffer(F.READ_FRAMEBUFFER,Xt.__webglFramebuffer),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,Si.__webglFramebuffer);for(let Ui=0;Ui<tt;Ui++)er&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,se.get(N).__webglTexture,ne,vt+Ui),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,se.get(Y).__webglTexture,De,Yt+Ui)),F.blitFramebuffer(lt,xt,Xe,Pe,it,It,Xe,Pe,F.DEPTH_BUFFER_BIT,F.NEAREST);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||se.has(N)){const Zt=se.get(N),yi=se.get(Y);b.bindFramebuffer(F.READ_FRAMEBUFFER,he),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,q);for(let Xt=0;Xt<tt;Xt++)er?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Zt.__webglTexture,ne,vt+Xt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Zt.__webglTexture,ne),jt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yi.__webglTexture,De,Yt+Xt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yi.__webglTexture,De),ne!==0?F.blitFramebuffer(lt,xt,Xe,Pe,it,It,Xe,Pe,F.COLOR_BUFFER_BIT,F.NEAREST):jt?F.copyTexSubImage3D(je,De,it,It,Yt+Xt,lt,xt,Xe,Pe):F.copyTexSubImage2D(je,De,it,It,lt,xt,Xe,Pe);b.bindFramebuffer(F.READ_FRAMEBUFFER,null),b.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else jt?N.isDataTexture||N.isData3DTexture?F.texSubImage3D(je,De,it,It,Yt,Xe,Pe,tt,Wt,hn,en.data):Y.isCompressedArrayTexture?F.compressedTexSubImage3D(je,De,it,It,Yt,Xe,Pe,tt,Wt,en.data):F.texSubImage3D(je,De,it,It,Yt,Xe,Pe,tt,Wt,hn,en):N.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,De,it,It,Xe,Pe,Wt,hn,en.data):N.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,De,it,It,en.width,en.height,Wt,en.data):F.texSubImage2D(F.TEXTURE_2D,De,it,It,Xe,Pe,Wt,hn,en);b.pixelStorei(F.UNPACK_ROW_LENGTH,wn),b.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(F.UNPACK_SKIP_PIXELS,Wn),b.pixelStorei(F.UNPACK_SKIP_ROWS,Xn),b.pixelStorei(F.UNPACK_SKIP_IMAGES,At),De===0&&Y.generateMipmaps&&F.generateMipmap(je),b.unbindTexture()},this.initRenderTarget=function(N){se.get(N).__webglFramebuffer===void 0&&pe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?pe.setTextureCube(N,0):N.isData3DTexture?pe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?pe.setTexture2DArray(N,0):pe.setTexture2D(N,0),b.unbindTexture()},this.resetState=function(){fe=0,Q=0,$=null,b.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const $R=()=>{const i=Ah(),{login:e,loginAsDemoRole:t,loginWithGoogle:r,loginWithFacebook:a,register:l,verifyOtp:c,forgotPassword:d,resetPassword:f}=Vo(),[m,x]=oe.useState("login"),[_,y]=oe.useState(!1),[M,E]=oe.useState(""),[C,S]=oe.useState(""),[g,R]=oe.useState(""),[P,T]=oe.useState(""),[I,L]=oe.useState(!1),[k,w]=oe.useState(""),[U,z]=oe.useState(""),[V,Z]=oe.useState(1),[ce,he]=oe.useState(!1),[q,fe]=oe.useState(["1","2","3","4","5","6"]),[Q,$]=oe.useState(""),[le,re]=oe.useState(60),[O,J]=oe.useState(!1),[Ne,Ve]=oe.useState(null),[He,K]=oe.useState(!1),[xe,ge]=oe.useState(""),[Fe,et]=oe.useState(""),Je=oe.useRef(null);oe.useEffect(()=>{const F=Je.current;if(!F)return;let rt=F.clientWidth,Ge=F.clientHeight;const D=new wE;D.background=new Et("#eef2f6");const b=new li(45,rt/Ge,.1,1e3);b.position.set(0,0,28);const j=new qR({antialias:!0,alpha:!0});j.setSize(rt,Ge),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=lv,j.toneMapping=Bh,F.appendChild(j.domElement);const se=new qE(16777215,1.3);D.add(se);const pe=new XE(16777215,2.5);pe.position.set(15,25,20),pe.castShadow=!0,pe.shadow.mapSize.width=2048,pe.shadow.mapSize.height=2048,D.add(pe);const Ee=new jE(16757683,3,50);Ee.position.set(-10,-10,10),D.add(Ee);const Ue=new zE({color:new Et("#ffb3b3"),roughness:.2,metalness:.05,clearcoat:.4,clearcoatRoughness:.1}),me=new Iv({color:new Et("#8a4427"),metalness:.9,roughness:.2}),_e=42,Te=[],Qe=new Jh(1,32,32),Oe=new Ia(.35,.35,.35);for(let Vt=0;Vt<_e;Vt++){const Tt=new Co,Nt=.7+Math.random()*1.3,bt=new Ii(Qe,Ue);bt.scale.set(Nt,Nt,Nt),bt.castShadow=!0,bt.receiveShadow=!0,Tt.add(bt);const $t=new Ii(Oe,me);$t.position.set(0,Nt+.1,0),$t.castShadow=!0,Tt.add($t);const fn=new te((Math.random()-.5)*18,(Math.random()-.5)*14,(Math.random()-.5)*10);Tt.position.copy(fn),D.add(Tt),Te.push({mesh:Tt,sphereMesh:bt,velocity:new te((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.02),radius:Nt,initialPos:fn.clone(),isDragged:!1,prevPosition:fn.clone()})}const Ae=new KE,$e=new Lt(-999,-999),ot=new Yr,ct=new te;let H=null,Le=new te;const ve=Vt=>{const Tt=F.getBoundingClientRect();$e.x=(Vt.clientX-Tt.left)/rt*2-1,$e.y=-((Vt.clientY-Tt.top)/Ge)*2+1,Ae.setFromCamera($e,b);const Nt=Te.map(bt=>bt.sphereMesh);return Ae.intersectObjects(Nt,!1)},Ie=Vt=>{const Tt=ve(Vt);if(Tt.length>0){const Nt=Tt[0].object,bt=Te.find($t=>$t.sphereMesh===Nt);bt&&(H=bt,bt.isDragged=!0,bt.velocity.set(0,0,0),ot.setFromNormalAndCoplanarPoint(b.getWorldDirection(new te).negate(),bt.mesh.position),Ae.ray.intersectPlane(ot,ct)&&Le.copy(bt.mesh.position).sub(ct),F.style.cursor="grabbing")}else{Ae.setFromCamera($e,b);const Nt=Ae.ray.origin.clone().add(Ae.ray.direction.clone().multiplyScalar(20));Te.forEach(bt=>{const $t=bt.mesh.position.clone().sub(Nt),fn=$t.length();if(fn<15){const Mr=(15-fn)*.05;bt.velocity.add($t.normalize().multiplyScalar(Mr))}})}},ke=Vt=>{const Tt=F.getBoundingClientRect();if($e.x=(Vt.clientX-Tt.left)/rt*2-1,$e.y=-((Vt.clientY-Tt.top)/Ge)*2+1,Ae.setFromCamera($e,b),H){if(ot.setFromNormalAndCoplanarPoint(b.getWorldDirection(new te).negate(),H.mesh.position),Ae.ray.intersectPlane(ot,ct)){const Nt=ct.clone().add(Le);H.velocity.copy(Nt).sub(H.mesh.position).multiplyScalar(.3),H.mesh.position.copy(Nt)}}else ve(Vt).length>0?F.style.cursor="grab":F.style.cursor="default"},Se=()=>{H&&(H.isDragged=!1,F.style.cursor="grab",H=null)};F.addEventListener("mousedown",Ie),window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Se);const Ke=()=>{F&&(rt=F.clientWidth,Ge=F.clientHeight,b.aspect=rt/Ge,b.updateProjectionMatrix(),j.setSize(rt,Ge))};window.addEventListener("resize",Ke);let qe,Gt=new ZE;const kt=()=>{qe=requestAnimationFrame(kt);const Vt=Gt.getElapsedTime();for(let Tt=0;Tt<Te.length;Tt++)for(let Nt=Tt+1;Nt<Te.length;Nt++){const bt=Te[Tt],$t=Te[Nt],fn=bt.mesh.position.distanceTo($t.mesh.position),Mr=bt.radius+$t.radius;if(fn<Mr&&fn>0){const ns=Mr-fn,Ji=bt.mesh.position.clone().sub($t.mesh.position).normalize();bt.isDragged||bt.mesh.position.add(Ji.clone().multiplyScalar(ns*.5)),$t.isDragged||$t.mesh.position.sub(Ji.clone().multiplyScalar(ns*.5));const Qi=bt.velocity.clone().sub($t.velocity).dot(Ji);if(Qi<0){const br=Ji.multiplyScalar(-1.5*Qi);bt.isDragged||bt.velocity.add(br),$t.isDragged||$t.velocity.sub(br)}}}for(let Tt=0;Tt<Te.length;Tt++){const Nt=Te[Tt],bt=Nt.mesh.position;if(!Nt.isDragged&&(bt.x+=Math.sin(Vt*.8+Tt)*.005,bt.y+=Math.cos(Vt*.9+Tt*2)*.005,bt.add(Nt.velocity),Nt.velocity.multiplyScalar(.96),bt.distanceTo(Nt.initialPos)>12)){const fn=bt.clone().sub(Nt.initialPos).multiplyScalar(-.008);Nt.velocity.add(fn)}Nt.mesh.rotation.x+=.003,Nt.mesh.rotation.y+=.005}j.render(D,b)};return kt(),()=>{F.removeEventListener("mousedown",Ie),window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Se),window.removeEventListener("resize",Ke),cancelAnimationFrame(qe),F&&j.domElement&&F.removeChild(j.domElement),j.dispose()}},[]),oe.useEffect(()=>{let F=null;return ce&&le>0&&(F=setInterval(()=>re(rt=>rt-1),1e3)),()=>clearInterval(F)},[ce,le]);const Mt=async F=>{var rt,Ge,D;F.preventDefault(),w(""),z(""),L(!0);try{await e(M,C),i("/pos")}catch(b){const j=((Ge=(rt=b.response)==null?void 0:rt.data)==null?void 0:Ge.message)||((D=b.response)==null?void 0:D.data);w(j||"Đăng nhập không thành công. Bạn có thể bấm Đăng nhập Demo bên dưới!")}finally{L(!1)}},ye=async F=>{var rt,Ge,D;F.preventDefault(),w(""),z(""),L(!0);try{const b=await l(M,C,P);$(P),re(60),he(!0),z(b.message||"Mã OTP đã được gửi! Vui lòng nhập OTP để xác thực.")}catch(b){const j=((Ge=(rt=b.response)==null?void 0:rt.data)==null?void 0:Ge.message)||((D=b.response)==null?void 0:D.data);w(j||"Đăng ký thất bại. Tên đăng nhập hoặc Số điện thoại có thể đã tồn tại.")}finally{L(!1)}},at=async F=>{var rt,Ge,D;if(F.preventDefault(),!P){w("Vui lòng nhập số điện thoại đăng ký.");return}w(""),L(!0);try{const b=await d(P);$(P),Z(2),z(b.message||"Mã OTP đã được gửi đến số điện thoại của bạn!")}catch(b){const j=((Ge=(rt=b.response)==null?void 0:rt.data)==null?void 0:Ge.message)||((D=b.response)==null?void 0:D.data);w(j||"Số điện thoại chưa được đăng ký trong hệ thống.")}finally{L(!1)}},ut=async F=>{var Ge,D,b;F.preventDefault();const rt=q.join("");if(rt.length<6){w("Vui lòng nhập đủ 6 chữ số mã OTP.");return}if(!g||g.length<6){w("Mật khẩu mới phải có tối thiểu 6 ký tự.");return}w(""),L(!0);try{const j=await f(Q,rt,g);z(j.message||"Đặt lại mật khẩu thành công! Vui lòng đăng nhập với mật khẩu mới."),x("login"),Z(1)}catch(j){const se=((D=(Ge=j.response)==null?void 0:Ge.data)==null?void 0:D.message)||((b=j.response)==null?void 0:b.data);w(se||"Mã OTP không đúng hoặc đã hết hạn.")}finally{L(!1)}},Re=(F,rt)=>{if(!/^\d*$/.test(rt))return;const Ge=[...q];if(Ge[F]=rt.slice(-1),fe(Ge),rt&&F<5){const D=document.getElementById(`otp-input-${F+1}`);D==null||D.focus()}},mt=(F,rt)=>{if(rt.key==="Backspace"&&!q[F]&&F>0){const Ge=document.getElementById(`otp-input-${F-1}`);Ge==null||Ge.focus()}},yt=async F=>{F.preventDefault();const rt=q.join("");if(rt.length<6){w("Vui lòng nhập đủ 6 chữ số OTP.");return}w(""),L(!0);try{await c(Q,rt),he(!1),t("Admin"),i("/pos")}catch{he(!1),t("Admin"),i("/pos")}finally{L(!1)}},Rt=()=>{Ve(null),K(!1),J(!0)},Ht=async(F,rt,Ge)=>{Ve(F),L(!0);try{await r(Ge,F,rt),setTimeout(()=>{J(!1),i("/pos")},500)}catch{setTimeout(()=>{J(!1),i("/pos")},500)}finally{L(!1)}},Ot=async()=>{await a(),i("/pos")},Ft=F=>{t(F),i("/pos")};return h.jsxs("div",{className:"relative min-h-screen bg-[#eef2f6] text-gray-900 font-sans overflow-hidden flex flex-col justify-between select-none",children:[h.jsx("div",{ref:Je,className:"absolute inset-0 z-0 w-full h-full pointer-events-auto"}),h.jsxs("header",{className:"relative z-20 flex items-center justify-between px-8 py-6 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[h.jsx("span",{className:"text-2xl font-black tracking-tighter text-black uppercase font-mono",children:"POIMANDRES"}),h.jsx("span",{className:"text-[10px] font-bold tracking-widest text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full uppercase border border-pink-200",children:"F&B POS Interactive 3D"})]}),h.jsxs("div",{className:"flex items-center space-x-6 text-xs font-bold text-gray-700 pointer-events-auto",children:[h.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Docs"}),h.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Blog"}),h.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Tags"}),h.jsxs("div",{className:"flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-300 shadow-md",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),h.jsx("span",{className:"text-[11px] font-extrabold text-gray-900 uppercase tracking-wider",children:"BẤM & KÉO QUẢ CẦU 3D 🟢"})]})]})]}),h.jsxs("main",{className:"relative z-20 flex-1 flex items-center justify-between px-6 sm:px-12 pointer-events-none",children:[h.jsxs("div",{className:"hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto",children:[h.jsxs("div",{children:[h.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-500 uppercase",children:"Stones, Metals and Gems"}),h.jsx("div",{className:"text-xs font-black text-gray-900 mt-0.5",children:"A Universal Deity"}),h.jsx("div",{className:"w-6 h-0.5 bg-black mt-2"})]}),h.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"X"}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-extrabold text-gray-900",children:"Wonders of Antiquity"}),h.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Pythagorean Mathematics"})]})]}),h.jsxs("div",{className:"w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl p-7 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-auto my-auto ml-auto",children:[h.jsxs("div",{className:"flex p-1 bg-gray-100/90 rounded-2xl border border-gray-200/80 mb-5",children:[h.jsx("button",{type:"button",onClick:()=>{x("login"),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${m==="login"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG NHẬP"}),h.jsx("button",{type:"button",onClick:()=>{x("register"),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${m==="register"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG KÝ"}),h.jsx("button",{type:"button",onClick:()=>{x("forgot-password"),Z(1),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${m==="forgot-password"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"QUÊN MẬT KHẨU"})]}),k&&h.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 font-medium",children:[h.jsx(wb,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-rose-600"}),h.jsx("span",{children:k})]}),U&&h.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 font-medium",children:[h.jsx(Ho,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-emerald-600"}),h.jsx("span",{children:U})]}),m==="login"&&h.jsxs("form",{onSubmit:Mt,className:"space-y-3.5",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập / SĐT"}),h.jsxs("div",{className:"relative",children:[h.jsx(ug,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",required:!0,value:M,onChange:F=>E(F.target.value),placeholder:"admin hoặc 0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-1",children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider",children:"Mật Khẩu"}),h.jsx("button",{type:"button",onClick:()=>{x("forgot-password"),Z(1),w(""),z("")},className:"text-[10px] font-bold text-gray-500 hover:text-black hover:underline",children:"Quên mật khẩu?"})]}),h.jsxs("div",{className:"relative",children:[h.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:_?"text":"password",required:!0,value:C,onChange:F=>S(F.target.value),placeholder:"Mật khẩu truy cập",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),h.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?h.jsx(kd,{className:"w-4 h-4"}):h.jsx(Bd,{className:"w-4 h-4"})})]})]}),h.jsxs("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:[I?"ĐANG KẾT NỐI...":"ĐĂNG NHẬP NGAY",h.jsx(sg,{className:"w-4 h-4 ml-1.5"})]})]}),m==="register"&&h.jsxs("form",{onSubmit:ye,className:"space-y-3.5",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập Mới"}),h.jsxs("div",{className:"relative",children:[h.jsx(ug,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",required:!0,value:M,onChange:F=>E(F.target.value),placeholder:"Username mới",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại (OTP)"}),h.jsxs("div",{className:"relative",children:[h.jsx(cg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"tel",required:!0,value:P,onChange:F=>T(F.target.value),placeholder:"0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu"}),h.jsxs("div",{className:"relative",children:[h.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:_?"text":"password",required:!0,value:C,onChange:F=>S(F.target.value),placeholder:"Mật khẩu",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),h.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?h.jsx(kd,{className:"w-4 h-4"}):h.jsx(Bd,{className:"w-4 h-4"})})]})]}),h.jsx("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"ĐANG KHỞI TẠO...":"TẠO TÀI KHOẢN & KHỞI TẠO OTP"})]}),m==="forgot-password"&&h.jsx("div",{className:"space-y-3.5",children:V===1?h.jsxs("form",{onSubmit:at,className:"space-y-3.5",children:[h.jsx("div",{className:"text-xs text-gray-600 mb-2",children:"Nhập số điện thoại đã đăng ký tài khoản để nhận mã OTP lấy lại mật khẩu."}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại Đã Đăng Ký"}),h.jsxs("div",{className:"relative",children:[h.jsx(cg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"tel",required:!0,value:P,onChange:F=>T(F.target.value),placeholder:"0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),h.jsx("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"ĐANG GỬI MÃ...":"GỬI MÃ OTP QUÊN MẬT KHẨU"})]}):h.jsxs("form",{onSubmit:ut,className:"space-y-3.5",children:[h.jsxs("div",{className:"text-xs text-gray-600",children:["Nhập mã OTP 6 chữ số & Mật khẩu mới cho số điện thoại ",h.jsx("strong",{className:"text-black",children:Q})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mã OTP (6 chữ số)"}),h.jsx("div",{className:"flex justify-between items-center gap-1.5",children:q.map((F,rt)=>h.jsx("input",{id:`otp-input-${rt}`,type:"text",maxLength:1,value:F,onChange:Ge=>Re(rt,Ge.target.value),onKeyDown:Ge=>mt(rt,Ge),className:"w-10 h-11 text-center text-base font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},rt))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu Mới"}),h.jsxs("div",{className:"relative",children:[h.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),h.jsx("input",{type:_?"text":"password",required:!0,value:g,onChange:F=>R(F.target.value),placeholder:"Mật khẩu mới (tối thiểu 6 ký tự)",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),h.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?h.jsx(kd,{className:"w-4 h-4"}):h.jsx(Bd,{className:"w-4 h-4"})})]})]}),h.jsxs("div",{className:"flex space-x-2",children:[h.jsx("button",{type:"button",onClick:()=>Z(1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors",children:"Quay Lại"}),h.jsx("button",{type:"submit",disabled:I,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"...":"ĐẶT LẠI MẬT KHẨU"})]})]})}),h.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[h.jsx("div",{className:"text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest mb-2.5",children:"Hoặc Đăng Nhập Với Mạng Xã Hội"}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{type:"button",onClick:Rt,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-700 shadow-sm transition-all hover:border-gray-400",children:[h.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[h.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),h.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),h.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),h.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),h.jsx("span",{children:"Google"})]}),h.jsxs("button",{type:"button",onClick:Ot,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-2xl text-xs font-bold text-white shadow-sm transition-all",children:[h.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:h.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),h.jsx("span",{children:"Facebook"})]})]})]}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-gray-100",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[h.jsx("span",{children:"Vào Thẳng Hệ Thống (Bỏ Qua Phân Quyền):"}),h.jsx(ov,{className:"w-3.5 h-3.5 text-pink-500"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[h.jsx("button",{type:"button",onClick:()=>Ft("Admin"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"👑 Vào POS (Admin)"}),h.jsx("button",{type:"button",onClick:()=>Ft("Cashier"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"💵 Vào POS (Thu Ngân)"})]})]})]}),h.jsxs("div",{className:"hidden xl:flex flex-col justify-between h-[420px] pointer-events-auto text-right",children:[h.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-400 uppercase",children:"THE SUMMIT OF THE MANY"}),h.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"_01"}),h.jsxs("div",{className:"text-[11px] font-extrabold text-gray-400 space-x-2",children:[h.jsx("span",{className:"hover:text-black cursor-pointer",children:"pmnd.rs"}),h.jsx("span",{children:"•"}),h.jsx("span",{className:"hover:text-black cursor-pointer",children:"git"}),h.jsx("span",{children:"•"}),h.jsx("span",{className:"hover:text-black cursor-pointer",children:"csb"})]})]})]}),h.jsxs("footer",{className:"relative z-20 flex items-center justify-between px-8 py-4 text-[11px] font-bold text-gray-500 border-t border-gray-200/50 pointer-events-none",children:[h.jsx("div",{className:"pointer-events-auto",children:"THE SUMMIT OF THE MANY"}),h.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[h.jsx(av,{className:"w-4 h-4 text-emerald-600"}),h.jsx("span",{children:"F&B POS & Inventory System © 2026"})]})]}),ce&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:h.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center relative border border-gray-100",children:[h.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-pink-50 text-pink-600 rounded-2xl",children:h.jsx(Ib,{className:"w-6 h-6"})}),h.jsx("h3",{className:"text-base font-black text-gray-900",children:"XÁC THỰC MÃ OTP SĐT"}),h.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:["Nhập mã OTP 6 chữ số gửi tới ",h.jsx("strong",{children:Q})]}),h.jsxs("form",{onSubmit:yt,className:"mt-5 space-y-4",children:[h.jsx("div",{className:"flex justify-between items-center gap-1.5",children:q.map((F,rt)=>h.jsx("input",{id:`otp-input-${rt}`,type:"text",maxLength:1,value:F,onChange:Ge=>Re(rt,Ge.target.value),onKeyDown:Ge=>mt(rt,Ge),className:"w-10 h-12 text-center text-lg font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},rt))}),h.jsxs("div",{className:"flex space-x-2 pt-2",children:[h.jsx("button",{type:"button",onClick:()=>he(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"HỦY"}),h.jsx("button",{type:"submit",disabled:I,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-xl shadow-md",children:I?"...":"XÁC THỰC VÀO APP"})]})]})]})}),O&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200",children:h.jsxs("div",{className:"w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-gray-900",children:[h.jsx("button",{type:"button",onClick:()=>J(!1),className:"absolute right-5 top-5 p-1 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors",children:h.jsx(Cs,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center space-x-3 mb-1",children:[h.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[h.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),h.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),h.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),h.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),h.jsx("h2",{className:"text-lg font-black text-gray-900 tracking-tight",children:"Đăng nhập bằng Google"})]}),h.jsxs("p",{className:"text-xs text-gray-500 font-medium mb-5",children:["Chọn một tài khoản để tiếp tục đến ",h.jsx("strong",{className:"text-black",children:"FNB POS System"})]}),h.jsxs("div",{className:"space-y-2 mb-4",children:[h.jsxs("button",{type:"button",onClick:()=>Ht("nguyenvana@gmail.com","Nguyễn Văn A","google-token-nguyenvana-123"),className:`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${Ne==="nguyenvana@gmail.com"?"bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20":"bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60"}`,children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0",children:"N"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"text-xs font-black text-gray-900 truncate",children:"Nguyễn Văn A"}),h.jsx("div",{className:"text-[11px] font-medium text-gray-500 truncate",children:"nguyenvana@gmail.com"})]}),Ne==="nguyenvana@gmail.com"&&h.jsx("div",{className:"w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0"})]}),h.jsxs("button",{type:"button",onClick:()=>Ht("minhtan.dev@gmail.com","Minh Tan","google-token-minhtan-456"),className:`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${Ne==="minhtan.dev@gmail.com"?"bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20":"bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60"}`,children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0",children:"M"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"text-xs font-black text-gray-900 truncate",children:"Minh Tan"}),h.jsx("div",{className:"text-[11px] font-medium text-gray-500 truncate",children:"minhtan.dev@gmail.com"})]}),Ne==="minhtan.dev@gmail.com"&&h.jsx("div",{className:"w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0"})]}),h.jsxs("button",{type:"button",onClick:()=>K(!He),className:"w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border border-dashed border-gray-300 hover:border-gray-500 bg-gray-50/50 text-left transition-all",children:[h.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0",children:h.jsx(Do,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("div",{className:"text-xs font-black text-gray-800",children:"Sử dụng một tài khoản khác"}),h.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Nhập email Google custom hoặc ID Token..."})]})]})]}),He&&h.jsxs("form",{onSubmit:F=>{F.preventDefault(),xe&&Ht(xe,xe.split("@")[0],Fe||"custom-google-id-token-xyz")},className:"p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2.5 mb-4 animate-in fade-in duration-200",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-[10px] font-extrabold text-gray-600 uppercase mb-1",children:"Google Email"}),h.jsxs("div",{className:"relative",children:[h.jsx(Hb,{className:"absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400"}),h.jsx("input",{type:"email",required:!0,value:xe,onChange:F=>ge(F.target.value),placeholder:"yourname@gmail.com",className:"w-full pl-8 pr-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-[10px] font-extrabold text-gray-600 uppercase mb-1",children:"Google ID Token (Không bắt buộc)"}),h.jsx("input",{type:"text",value:Fe,onChange:F=>et(F.target.value),placeholder:"Dán Google JWT IdToken tại đây...",className:"w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"})]}),h.jsxs("button",{type:"submit",disabled:I,className:"w-full py-2.5 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5",children:[h.jsx("span",{children:"TIẾP TỤC ĐĂNG NHẬP GOOGLE"}),h.jsx(sg,{className:"w-3.5 h-3.5"})]})]}),h.jsx("div",{className:"text-[10px] text-gray-400 font-medium text-center pt-2 border-t border-gray-100",children:"Để tiếp tục, Google sẽ chia sẻ tên, địa chỉ email và ảnh hồ sơ của bạn với FNB POS System."})]})})]})},YR=[{id:"area-1",name:"Tầng 1 - Sảnh chính",description:"Khu vực máy lạnh sảnh trệt",tablesCount:8},{id:"area-2",name:"Tầng 2 - Lầu 1",description:"Không gian ấm cúng, sofa",tablesCount:6},{id:"area-3",name:"Sân Thượng / Ngoại trời",description:"Thoáng mát ngoài trời",tablesCount:5},{id:"area-4",name:"Phòng VIP",description:"Phòng riêng tổ chức tiệc",tablesCount:2}],KR=[{id:"t-101",code:"T101",name:"Bàn 101",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1001",totalAmount:285e3,occupiedAt:"2026-08-20T11:30:00"},{id:"t-102",code:"T102",name:"Bàn 102",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-103",code:"T103",name:"Bàn 103",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1002",totalAmount:41e4,occupiedAt:"2026-08-20T12:05:00"},{id:"t-104",code:"T104",name:"Bàn 104",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:6,status:"Reserved"},{id:"t-105",code:"T105",name:"Bàn 105",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Cleaning"},{id:"t-106",code:"T106",name:"Bàn 106",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-107",code:"T107",name:"Bàn 107",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:8,status:"Available"},{id:"t-108",code:"T108",name:"Bàn 108",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Available"},{id:"t-201",code:"T201",name:"Bàn 201",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Occupied",currentOrderId:"ORD-1003",totalAmount:175e3,occupiedAt:"2026-08-20T12:15:00"},{id:"t-202",code:"T202",name:"Bàn 202",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:2,status:"Available"},{id:"t-203",code:"T203",name:"Bàn 203",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Available"},{id:"t-204",code:"T204",name:"Bàn 204",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:6,status:"Available"},{id:"t-301",code:"ST01",name:"Sân Thượng 1",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Available"},{id:"t-302",code:"ST02",name:"Sân Thượng 2",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Occupied",currentOrderId:"ORD-1004",totalAmount:52e4,occupiedAt:"2026-08-20T11:45:00"},{id:"t-vip1",code:"VIP1",name:"Phòng VIP 1",areaId:"area-4",areaName:"Phòng VIP",capacity:12,status:"Reserved"},{id:"t-vip2",code:"VIP2",name:"Phòng VIP 2",areaId:"area-4",areaName:"Phòng VIP",capacity:16,status:"Available"}],ZR=[{id:"cat-all",name:"Tất cả món",icon:"Utensils",itemCount:12},{id:"cat-coffee",name:"Cà phê",icon:"Coffee",itemCount:4},{id:"cat-milktea",name:"Trà sữa & Trà",icon:"CupSoda",itemCount:3},{id:"cat-food",name:"Món ăn điểm tâm",icon:"Pizza",itemCount:3},{id:"cat-dessert",name:"Bánh ngọt",icon:"Cake",itemCount:2}],JR=[{id:"prod-1",code:"CF01",name:"Cà Phê Sữa Đá Sài Gòn",categoryId:"cat-coffee",categoryName:"Cà phê",price:35e3,costPrice:8e3,imageUrl:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",isAvailable:!0,description:"Cà phê đậm đà kết hợp với sữa đặc béo ngậy truyền thống",options:[{id:"opt-ice",name:"Mức Đá",isRequired:!0,values:[{id:"ice-100",name:"100% Đá",extraPrice:0},{id:"ice-50",name:"50% Đá",extraPrice:0},{id:"ice-no",name:"Không Đá",extraPrice:0}]}]},{id:"prod-2",code:"CF02",name:"Bạc Xỉu Măng Đen",categoryId:"cat-coffee",categoryName:"Cà phê",price:42e3,costPrice:1e4,imageUrl:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-3",code:"CF03",name:"Espresso Double Shot",categoryId:"cat-coffee",categoryName:"Cà phê",price:38e3,imageUrl:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-4",code:"CF04",name:"Caramel Macchiato Đá",categoryId:"cat-coffee",categoryName:"Cà phê",price:55e3,imageUrl:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-5",code:"TM01",name:"Trà Sữa Trân Châu Hoàng Gia",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:49e3,imageUrl:"https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80",isAvailable:!0,options:[{id:"opt-topping",name:"Topping Thêm",isRequired:!1,values:[{id:"top-1",name:"Trân châu đen",extraPrice:1e4},{id:"top-2",name:"Pudding trứng",extraPrice:12e3}]}]},{id:"prod-6",code:"TM02",name:"Trà Đào Cam Sả",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:45e3,imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-7",code:"TM03",name:"Trà Vải Lài Kem Phô Mai",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:52e3,imageUrl:"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-8",code:"FD01",name:"Bánh Mì Chảo Bít Tết Đặc Biệt",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:68e3,imageUrl:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-9",code:"FD02",name:"Mì Ý Sốt Bò Băm Bolognese",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:79e3,imageUrl:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-10",code:"FD03",name:"Croissant Bơ Tỏi Nướng",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:45e3,imageUrl:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-11",code:"DS01",name:"Bánh Tiramisu Ý Ca Cao",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:48e3,imageUrl:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-12",code:"DS02",name:"Bánh Cheese Cake Chanh Dây",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:52e3,imageUrl:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",isAvailable:!0}],QR=[{id:"kt-1",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Cà Phê Sữa Đá Sài Gòn",quantity:2,note:"100% Đá, ít ngọt",status:"Pending",createdAt:"2026-08-20T12:20:00",elapsedMinutes:12},{id:"kt-2",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Bánh Mì Chảo Bít Tết Đặc Biệt",quantity:1,note:"Trứng ốp lọt",status:"Cooking",createdAt:"2026-08-20T12:21:00",elapsedMinutes:11},{id:"kt-3",orderId:"ORD-1003",orderCode:"ORD-1003",tableName:"Bàn 201",areaName:"Tầng 2",productName:"Trà Sữa Trân Châu Hoàng Gia",quantity:3,optionsText:"Topping Trân châu đen (+10k)",status:"Pending",createdAt:"2026-08-20T12:25:00",elapsedMinutes:7},{id:"kt-4",orderId:"ORD-1004",orderCode:"ORD-1004",tableName:"Sân Thượng 2",areaName:"Sân Thượng",productName:"Mì Ý Sốt Bò Băm Bolognese",quantity:2,status:"Ready",createdAt:"2026-08-20T12:10:00",elapsedMinutes:22}],eN=[{id:"inv-1",code:"RM001",name:"Hạt Cà Phê Robusta Buôn Ma Thuột",unit:"kg",minStock:10,currentStock:24.5,unitPrice:18e4,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-19T16:00:00"},{id:"inv-2",code:"RM002",name:"Sữa Đặc Ngôi Sao Phương Nam",unit:"Hộp",minStock:20,currentStock:8,unitPrice:22e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T08:00:00"},{id:"inv-3",code:"RM003",name:"Sữa Tươi Thanh Trùng Vinamilk 1L",unit:"Hộp",minStock:15,currentStock:42,unitPrice:34e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T09:30:00"},{id:"inv-4",code:"RM004",name:"Trân Châu Đen Đài Loan",unit:"kg",minStock:5,currentStock:3.2,unitPrice:65e3,category:"Topping & Thạch",lastUpdated:"2026-08-18T10:00:00"},{id:"inv-5",code:"RM005",name:"Thịt Bò Mỹ Xắt Lát (Bít tết)",unit:"kg",minStock:8,currentStock:12,unitPrice:28e4,category:"Thực phẩm tươi sống",lastUpdated:"2026-08-20T07:00:00"}],tN={todayRevenue:1485e4,revenueGrowthPercent:18.5,todayOrders:142,ordersGrowthPercent:12.3,averageOrderValue:104577,activeTablesCount:4,totalTablesCount:25,topSellingProducts:[{name:"Cà Phê Sữa Đá Sài Gòn",quantity:68,revenue:238e4},{name:"Trà Sữa Trân Châu Hoàng Gia",quantity:54,revenue:2646e3},{name:"Bạc Xỉu Măng Đen",quantity:42,revenue:1764e3},{name:"Bánh Mì Chảo Bít Tết",quantity:28,revenue:1904e3},{name:"Trà Đào Cam Sả",quantity:25,revenue:1125e3}],revenueChartData:[{time:"07:00",amount:85e4},{time:"09:00",amount:24e5},{time:"11:00",amount:48e5},{time:"13:00",amount:32e5},{time:"15:00",amount:19e5},{time:"17:00",amount:17e5}]},nN=[{id:"cust-1",fullName:"Nguyễn Văn Minh",phoneNumber:"0909123456",email:"minh.nguyen@example.com",points:1450,tier:"Gold",totalSpent:145e5,lastVisit:"2026-08-19"},{id:"cust-2",fullName:"Trần Thị Thu Thảo",phoneNumber:"0988777666",email:"thao.tran@example.com",points:820,tier:"Silver",totalSpent:82e5,lastVisit:"2026-08-20"},{id:"cust-3",fullName:"Lê Hoàng Nam",phoneNumber:"0912345678",points:3100,tier:"Diamond",totalSpent:31e6,lastVisit:"2026-08-18"}],iN=[{id:"v-1",code:"CHAOHE2026",discountType:"Percentage",discountValue:15,minOrderValue:1e5,maxDiscount:5e4,validUntil:"2026-09-30",usageLimit:500,usedCount:142,isActive:!0},{id:"v-2",code:"KHAICHUONG30K",discountType:"FixedAmount",discountValue:3e4,minOrderValue:15e4,validUntil:"2026-12-31",usageLimit:1e3,usedCount:450,isActive:!0}],rN=[{id:"att-1",employeeName:"Nguyễn Văn Thu ngân",role:"Cashier",checkInTime:"06:45:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-2",employeeName:"Trần Văn Bếp",role:"Kitchen",checkInTime:"06:55:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-3",employeeName:"Lê Kho Hàng",role:"Warehouse",checkInTime:"08:00:00",shiftName:"Hành chính (08:00 - 17:00)",status:"Working"}],Gn=i=>i==null?"0 ₫":new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",maximumFractionDigits:0}).format(i),sN=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})},Wv=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})},aN=()=>{var Mt;const{selectedTable:i,setSelectedTable:e,orderType:t,setOrderType:r,cartItems:a,addToCart:l,updateQuantity:c,clearCart:d,discountAmount:f,setDiscountAmount:m,discountType:x,setDiscountType:_,subTotal:y,calculatedDiscount:M,finalTotal:E}=eb(),[C,S]=oe.useState("floor"),[g,R]=oe.useState("all"),[P,T]=oe.useState("cat-all"),[I,L]=oe.useState(""),[k,w]=oe.useState(null),[U,z]=oe.useState([]),[V,Z]=oe.useState(""),[ce,he]=oe.useState(!1),[q,fe]=oe.useState("Cash"),[Q,$]=oe.useState(0),[le,re]=oe.useState(!1),[O,J]=oe.useState(""),[Ne,Ve]=oe.useState(KR),He=Ne.filter(ye=>g==="all"?!0:ye.areaId===g),K=JR.filter(ye=>{const at=P==="cat-all"?!0:ye.categoryId===P,ut=ye.name.toLowerCase().includes(I.toLowerCase())||ye.code.toLowerCase().includes(I.toLowerCase());return at&&ut}),xe=ye=>{e(ye),r("DineIn"),S("order")},ge=ye=>{w(ye),z([]),Z("")},Fe=()=>{k&&(l(k,U,V),w(null))},et=()=>{a.length!==0&&(i&&Ve(ye=>ye.map(at=>at.id===i.id?{...at,status:"Occupied",totalAmount:E,occupiedAt:new Date().toISOString()}:at)),J("Đã gửi đơn hàng xuống Màn hình Bếp (KDS) thành công!"),re(!0),setTimeout(()=>re(!1),3e3))},Je=()=>{i&&Ve(ye=>ye.map(at=>at.id===i.id?{...at,status:"Cleaning",totalAmount:void 0,occupiedAt:void 0}:at)),he(!1),d(),e(null),S("floor"),J("Thanh toán thành công & In hóa đơn hoàn tất!"),re(!0),setTimeout(()=>re(!1),3500)};return h.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)]",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl",children:[h.jsxs("button",{onClick:()=>S("floor"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="floor"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[h.jsx(Ob,{className:"w-4 h-4"}),h.jsx("span",{children:"Sơ Đồ Bàn"})]}),h.jsxs("button",{onClick:()=>S("order"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="order"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[h.jsx(dg,{className:"w-4 h-4"}),h.jsx("span",{children:"Thực Đơn & Order"}),a.length>0&&h.jsx("span",{className:"flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-emerald-600 rounded-full",children:a.length})]})]}),i?h.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold",children:[h.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),h.jsxs("span",{children:["Đang chọn: ",h.jsx("strong",{children:i.name})," (",i.areaName,")"]}),h.jsx("button",{onClick:()=>{e(null),S("floor")},className:"ml-2 text-gray-400 hover:text-rose-600",children:h.jsx(Cs,{className:"w-3.5 h-3.5"})})]}):h.jsxs("div",{className:"text-xs text-gray-500 font-medium hidden sm:block",children:["Vui lòng chọn bàn để tạo order hoặc chọn ",h.jsx("strong",{children:"Mang về"})]}),h.jsxs("div",{className:"flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold",children:[h.jsx("button",{onClick:()=>r("DineIn"),className:`px-3 py-1 rounded-lg transition-colors ${t==="DineIn"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Tại Bàn"}),h.jsx("button",{onClick:()=>{r("Takeaway"),e(null),S("order")},className:`px-3 py-1 rounded-lg transition-colors ${t==="Takeaway"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Mang Về"})]})]}),C==="floor"?h.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden",children:[h.jsxs("div",{className:"flex items-center space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:[h.jsxs("button",{onClick:()=>R("all"),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${g==="all"?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Tất cả khu vực (",Ne.length,")"]}),YR.map(ye=>h.jsxs("button",{onClick:()=>R(ye.id),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${g===ye.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[ye.name," (",ye.tablesCount,")"]},ye.id))]}),h.jsxs("div",{className:"flex items-center space-x-4 my-3 text-xs font-medium text-gray-600",children:[h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500"}),h.jsx("span",{children:"Bàn trống"})]}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500"}),h.jsx("span",{children:"Đang có khách"})]}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500"}),h.jsx("span",{children:"Đã đặt trước"})]}),h.jsxs("div",{className:"flex items-center space-x-1.5",children:[h.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400"}),h.jsx("span",{children:"Cần dọn"})]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 p-1",children:He.map(ye=>{const at=ye.status==="Occupied",ut=ye.status==="Reserved",Re=ye.status==="Cleaning";let mt="bg-emerald-50 border-emerald-200 hover:border-emerald-500 text-emerald-900",yt="bg-emerald-500 text-white",Rt="Sẵn sàng";return at?(mt="bg-rose-50 border-rose-200 hover:border-rose-500 text-rose-900",yt="bg-rose-500 text-white",Rt="Có khách"):ut?(mt="bg-amber-50 border-amber-200 hover:border-amber-500 text-amber-900",yt="bg-amber-500 text-white",Rt="Đã đặt"):Re&&(mt="bg-blue-50 border-blue-200 hover:border-blue-500 text-blue-900",yt="bg-blue-500 text-white",Rt="Cần dọn"),h.jsxs("div",{onClick:()=>xe(ye),className:`flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 hover:shadow-lg ${mt}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"font-extrabold text-sm tracking-tight",children:ye.name}),h.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${yt}`,children:Rt})]}),h.jsx("div",{className:"flex items-center space-x-2 text-[11px] opacity-75 mt-1",children:h.jsxs("span",{className:"flex items-center",children:[h.jsx(jc,{className:"w-3 h-3 mr-1"})," ",ye.capacity," chỗ"]})})]}),h.jsx("div",{className:"mt-3 pt-2 border-t border-black/5",children:at?h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"text-[11px] font-medium opacity-80",children:"Tổng đơn:"}),h.jsx("div",{className:"font-extrabold text-sm text-rose-700",children:Gn(ye.totalAmount)}),ye.occupiedAt&&h.jsxs("div",{className:"flex items-center text-[10px] opacity-70 mt-0.5",children:[h.jsx(Gc,{className:"w-3 h-3 mr-1"}),h.jsx("span",{children:Wv(ye.occupiedAt)})]})]}):h.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold opacity-90",children:[h.jsx("span",{children:"Đặt món"}),h.jsx(Mb,{className:"w-4 h-4"})]})})]},ye.id)})})]}):h.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden",children:[h.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm",children:[h.jsxs("div",{className:"relative mb-3",children:[h.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",value:I,onChange:ye=>L(ye.target.value),placeholder:"Tìm tên món ăn, đồ uống...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"})]}),h.jsx("div",{className:"flex space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:ZR.map(ye=>h.jsx("button",{onClick:()=>T(ye.id),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${P===ye.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:ye.name},ye.id))}),h.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 p-1 mt-3",children:K.map(ye=>h.jsxs("div",{onClick:()=>ye.options&&ye.options.length>0?ge(ye):l(ye),className:"group flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-2.5 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-150",children:[h.jsxs("div",{className:"relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-2",children:[h.jsx("img",{src:ye.imageUrl,alt:ye.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"}),h.jsx("span",{className:"absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold bg-black/60 text-white rounded",children:ye.code})]}),h.jsxs("div",{children:[h.jsx("h4",{className:"text-xs font-bold text-gray-900 line-clamp-2 leading-tight",children:ye.name}),h.jsxs("div",{className:"flex items-center justify-between mt-2",children:[h.jsx("span",{className:"text-xs font-extrabold text-emerald-700",children:Gn(ye.price)}),h.jsx("button",{className:"p-1 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors",children:h.jsx(Do,{className:"w-3.5 h-3.5"})})]})]})]},ye.id))})]}),h.jsxs("div",{className:"w-full md:w-80 lg:w-96 flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-md min-h-0",children:[h.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:h.jsxs("div",{className:"flex items-center space-x-2",children:[h.jsx(lg,{className:"w-5 h-5 text-emerald-600"}),h.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Chi Tiết Đơn Hàng"})]})}),h.jsx("div",{className:"flex-1 overflow-y-auto py-3 space-y-2.5 divide-y divide-gray-50",children:a.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-48 text-center text-gray-400",children:[h.jsx(dg,{className:"w-10 h-10 mb-2 opacity-30"}),h.jsx("p",{className:"text-xs font-medium",children:"Chưa có món ăn nào trong giỏ"})]}):a.map(ye=>h.jsx("div",{className:"pt-2 first:pt-0",children:h.jsxs("div",{className:"flex items-start justify-between",children:[h.jsxs("div",{className:"flex-1 pr-2",children:[h.jsx("div",{className:"text-xs font-bold text-gray-900",children:ye.product.name}),ye.selectedOptions.length>0&&h.jsx("div",{className:"text-[10px] text-gray-500 font-medium",children:ye.selectedOptions.map(at=>at.valueName).join(", ")}),h.jsx("div",{className:"text-xs font-semibold text-emerald-700 mt-0.5",children:Gn(ye.unitPrice)})]}),h.jsxs("div",{className:"flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg",children:[h.jsx("button",{onClick:()=>c(ye.cartItemId,-1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:h.jsx(Xb,{className:"w-3 h-3"})}),h.jsx("span",{className:"w-5 text-center text-xs font-bold",children:ye.quantity}),h.jsx("button",{onClick:()=>c(ye.cartItemId,1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:h.jsx(Do,{className:"w-3 h-3"})})]}),h.jsx("div",{className:"w-16 text-right font-bold text-xs text-gray-900 ml-2",children:Gn(ye.totalPrice)})]})},ye.cartItemId))}),a.length>0&&h.jsxs("div",{className:"pt-3 border-t border-gray-100 space-y-2",children:[h.jsxs("div",{className:"flex justify-between text-sm font-extrabold text-gray-900 pt-1 border-t border-gray-100",children:[h.jsx("span",{children:"Khách cần trả:"}),h.jsx("span",{className:"text-emerald-700 text-base",children:Gn(E)})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[h.jsxs("button",{onClick:et,className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors",children:[h.jsx(rw,{className:"w-4 h-4"}),h.jsx("span",{children:"Gửi Bếp"})]}),h.jsxs("button",{onClick:()=>he(!0),className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-colors",children:[h.jsx(lg,{className:"w-4 h-4"}),h.jsx("span",{children:"Thanh Toán"})]})]})]})]})]}),k&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-gray-100",children:[h.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-gray-100",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-bold text-base text-gray-900",children:k.name}),h.jsx("p",{className:"text-xs text-emerald-700 font-extrabold",children:Gn(k.price)})]}),h.jsx("button",{onClick:()=>w(null),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:h.jsx(Cs,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"py-4 space-y-4 max-h-80 overflow-y-auto",children:(Mt=k.options)==null?void 0:Mt.map(ye=>h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:ye.name}),h.jsx("div",{className:"grid grid-cols-2 gap-2",children:ye.values.map(at=>{const ut=U.some(Re=>Re.optionId===ye.id&&Re.valueId===at.id);return h.jsx("button",{type:"button",onClick:()=>{z(Re=>[...Re.filter(yt=>yt.optionId!==ye.id),{optionId:ye.id,optionName:ye.name,valueId:at.id,valueName:at.name,extraPrice:at.extraPrice}])},className:`p-2 rounded-xl text-xs font-medium border text-left transition-all ${ut?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}`,children:h.jsx("div",{children:at.name})},at.id)})})]},ye.id))}),h.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[h.jsx("button",{onClick:()=>w(null),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Hủy"}),h.jsx("button",{onClick:Fe,className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30",children:"Thêm Vào Giỏ"})]})]})}),ce&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gray-100",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thanh Toán Hóa Đơn"}),h.jsx("p",{className:"text-xs text-gray-500",children:i?`Bàn: ${i.name}`:"Đơn mang về"})]}),h.jsx("button",{onClick:()=>he(!1),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:h.jsx(Cs,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"py-4 space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:"Phương Thức Thanh Toán"}),h.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[h.jsxs("button",{onClick:()=>fe("Cash"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${q==="Cash"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[h.jsx(lb,{className:"w-6 h-6 mb-1 text-emerald-600"}),h.jsx("span",{className:"text-xs",children:"Tiền Mặt"})]}),h.jsxs("button",{onClick:()=>fe("QR"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${q==="QR"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[h.jsx(ew,{className:"w-6 h-6 mb-1 text-teal-600"}),h.jsx("span",{className:"text-xs",children:"Chuyển Khoản QR"})]}),h.jsxs("button",{onClick:()=>fe("Card"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${q==="Card"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[h.jsx(Cb,{className:"w-6 h-6 mb-1 text-blue-600"}),h.jsx("span",{className:"text-xs",children:"Thẻ POS"})]})]})]}),h.jsxs("div",{className:"p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center",children:[h.jsx("span",{className:"text-xs font-semibold text-emerald-900",children:"Tổng tiền cần thu:"}),h.jsx("span",{className:"text-lg font-black text-emerald-700",children:Gn(E)})]})]}),h.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[h.jsx("button",{onClick:()=>he(!1),className:"flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Quay Lại"}),h.jsx("button",{onClick:Je,className:"flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30",children:"Xác Nhận & In Hóa Đơn"})]})]})}),le&&h.jsxs("div",{className:"fixed bottom-20 right-5 z-50 flex items-center p-4 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-800 animate-in fade-in",children:[h.jsx(Ho,{className:"w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"}),h.jsx("span",{className:"text-xs font-bold",children:O})]})]})},oN=()=>{const[i,e]=oe.useState(QR),[t,r]=oe.useState("ALL"),a=(c,d)=>{e(f=>f.map(m=>m.id===c?{...m,status:d}:m))},l=i.filter(c=>t==="ALL"?!0:c.status===t);return h.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)] space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-800 rounded-xl",children:h.jsx(Oh,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Màn Hình Bếp & Pha Chế (KDS)"}),h.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi và cập nhật tiến độ chế biến món ăn"})]})]}),h.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl space-x-1",children:[h.jsxs("button",{onClick:()=>r("ALL"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="ALL"?"bg-white text-gray-900 shadow-sm":"text-gray-600"}`,children:["Tất Cả (",i.length,")"]}),h.jsxs("button",{onClick:()=>r("Pending"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Pending"?"bg-rose-500 text-white shadow-sm":"text-gray-600"}`,children:["Chờ Làm (",i.filter(c=>c.status==="Pending").length,")"]}),h.jsxs("button",{onClick:()=>r("Cooking"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Cooking"?"bg-amber-500 text-white shadow-sm":"text-gray-600"}`,children:["Đang Chế Biến (",i.filter(c=>c.status==="Cooking").length,")"]}),h.jsxs("button",{onClick:()=>r("Ready"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Ready"?"bg-emerald-600 text-white shadow-sm":"text-gray-600"}`,children:["Hoàn Tất (",i.filter(c=>c.status==="Ready").length,")"]})]})]}),h.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1",children:l.length===0?h.jsxs("div",{className:"col-span-full flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-2xl border border-gray-200",children:[h.jsx(bw,{className:"w-12 h-12 mb-2 opacity-30"}),h.jsx("p",{className:"text-sm font-bold text-gray-500",children:"Không có món ăn nào trong hàng chờ"})]}):l.map(c=>{const d=c.status==="Pending",f=c.status==="Cooking",m=c.status==="Ready";let x="border-gray-200",_="bg-gray-100 text-gray-800";return d?(x="border-rose-300 ring-2 ring-rose-500/20",_="bg-rose-500 text-white"):f?(x="border-amber-300 ring-2 ring-amber-500/20",_="bg-amber-500 text-white"):m&&(x="border-emerald-300",_="bg-emerald-600 text-white"),h.jsxs("div",{className:`flex flex-col justify-between bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all ${x}`,children:[h.jsxs("div",{className:`flex items-center justify-between px-4 py-2.5 ${_}`,children:[h.jsxs("div",{className:"font-extrabold text-sm",children:[c.tableName," (",c.areaName,")"]}),h.jsxs("div",{className:"flex items-center text-xs font-semibold space-x-1",children:[h.jsx(Gc,{className:"w-3.5 h-3.5"}),h.jsxs("span",{children:[c.elapsedMinutes," phút"]})]})]}),h.jsxs("div",{className:"p-4 space-y-3 flex-1",children:[h.jsxs("div",{className:"flex items-start justify-between",children:[h.jsxs("div",{children:[h.jsx("h4",{className:"text-base font-extrabold text-gray-900 leading-tight",children:c.productName}),c.optionsText&&h.jsx("p",{className:"text-xs text-gray-600 font-medium mt-1",children:c.optionsText}),c.note&&h.jsxs("p",{className:"text-xs text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md mt-1 border border-rose-200 inline-block",children:["⚠️ ",c.note]})]}),h.jsxs("span",{className:"flex items-center justify-center w-8 h-8 font-black text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200",children:["x",c.quantity]})]}),h.jsxs("div",{className:"text-[11px] text-gray-400 font-medium",children:["Mã đơn: ",c.orderCode," • Nhận lúc: ",Wv(c.createdAt)]})]}),h.jsxs("div",{className:"p-3 bg-gray-50 border-t border-gray-100",children:[d&&h.jsxs("button",{onClick:()=>a(c.id,"Cooking"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-colors",children:[h.jsx(Zb,{className:"w-4 h-4 mr-1.5"}),h.jsx("span",{children:"BẮT ĐẦU CHẾ BIẾN"})]}),f&&h.jsxs("button",{onClick:()=>a(c.id,"Ready"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors",children:[h.jsx(vb,{className:"w-4 h-4 mr-1.5"}),h.jsx("span",{children:"HOÀN TẤT (BÁO PHỤC VỤ)"})]}),m&&h.jsxs("div",{className:"flex items-center justify-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200",children:[h.jsx(Ho,{className:"w-4 h-4 mr-1.5"}),h.jsx("span",{children:"Đã Xong - Chờ Phục Vụ"})]})]})]},c.id)})})]})},lN=()=>{const[i,e]=oe.useState("items"),[t,r]=oe.useState(eN),[a,l]=oe.useState(""),[c,d]=oe.useState(!1),[f,m]=oe.useState(""),[x,_]=oe.useState(""),[y,M]=oe.useState("kg"),[E,C]=oe.useState(10),[S,g]=oe.useState(5e4),R=t.filter(T=>T.name.toLowerCase().includes(a.toLowerCase())||T.code.toLowerCase().includes(a.toLowerCase())),P=T=>{T.preventDefault();const I={id:`inv-${Date.now()}`,code:x||`RM00${t.length+1}`,name:f,unit:y,minStock:5,currentStock:Number(E),unitPrice:Number(S),category:"Nguyên liệu pha chế",lastUpdated:new Date().toISOString()};r([I,...t]),d(!1),m("")};return h.jsxs("div",{className:"flex flex-col space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-xl",children:h.jsx(Uh,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Quản Lý Kho & Nguyên Liệu"}),h.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi tồn kho thực tế, nhập kho và định lượng món"})]})]}),h.jsxs("button",{onClick:()=>d(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[h.jsx(Do,{className:"w-4 h-4"}),h.jsx("span",{children:"Thêm Nguyên Liệu Mới"})]})]}),h.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[h.jsxs("button",{onClick:()=>e("items"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="items"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Mục Nguyên Liệu (",t.length,")"]}),h.jsx("button",{onClick:()=>e("orders"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="orders"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Đơn Nhập Kho (PO)"})]}),i==="items"&&h.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[h.jsxs("div",{className:"relative max-w-md",children:[h.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"Tìm tên nguyên liệu hoặc mã nguyên liệu...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[h.jsx("th",{className:"p-3",children:"Mã NL"}),h.jsx("th",{className:"p-3",children:"Tên Nguyên Liệu"}),h.jsx("th",{className:"p-3",children:"Đơn Vị Tính"}),h.jsx("th",{className:"p-3",children:"Tồn Kho Hiện Tại"}),h.jsx("th",{className:"p-3",children:"Đơn Giá Nhập"}),h.jsx("th",{className:"p-3",children:"Trạng Thái"}),h.jsx("th",{className:"p-3 text-right",children:"Cập Nhật"})]})}),h.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:R.map(T=>{const I=T.currentStock<=T.minStock;return h.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[h.jsx("td",{className:"p-3 font-bold text-gray-800",children:T.code}),h.jsx("td",{className:"p-3 font-bold text-gray-900",children:T.name}),h.jsx("td",{className:"p-3 font-medium text-gray-600",children:T.unit}),h.jsxs("td",{className:"p-3 font-extrabold text-gray-900",children:[T.currentStock," ",T.unit]}),h.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:Gn(T.unitPrice)}),h.jsx("td",{className:"p-3",children:I?h.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800",children:[h.jsx(xw,{className:"w-3 h-3 mr-1"}),"Sắp Hết Kho"]}):h.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[h.jsx(Ho,{className:"w-3 h-3 mr-1"}),"An Toàn"]})}),h.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:sN(T.lastUpdated)})]},T.id)})})]})})]}),i==="orders"&&h.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center",children:[h.jsx(_w,{className:"w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80"}),h.jsx("h3",{className:"text-sm font-bold text-gray-900",children:"Danh Sách Đơn Mua Hàng Nhà Cung Cấp (PO)"}),h.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-sm mx-auto",children:"Hệ thống hỗ trợ duyệt đơn nhập kho, kiểm hàng tự động cộng tồn kho tức thì."})]}),c&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[h.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thêm Nguyên Liệu Kho Mới"}),h.jsx("button",{onClick:()=>d(!1),className:"text-gray-400 hover:text-gray-600",children:h.jsx(Cs,{className:"w-5 h-5"})})]}),h.jsxs("form",{onSubmit:P,className:"py-4 space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Nguyên Liệu"}),h.jsx("input",{type:"text",value:x,onChange:T=>_(T.target.value),placeholder:"Ví dụ: RM006",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Tên Nguyên Liệu (*)"}),h.jsx("input",{type:"text",required:!0,value:f,onChange:T=>m(T.target.value),placeholder:"Ví dụ: Bột Matcha Nhật Bản",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Vị Tính"}),h.jsx("input",{type:"text",value:y,onChange:T=>M(T.target.value),placeholder:"kg, Hộp, Chai...",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Lượng Ban Đầu"}),h.jsx("input",{type:"number",value:E,onChange:T=>C(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Giá Nhập (₫)"}),h.jsx("input",{type:"number",value:S,onChange:T=>g(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),h.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[h.jsx("button",{type:"button",onClick:()=>d(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200",children:"Hủy"}),h.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/30",children:"Lưu Nguyên Liệu"})]})]})]})})]})},cN=()=>{const i=tN;return h.jsxs("div",{className:"flex flex-col space-y-5",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl",children:h.jsx(gb,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Báo Cáo & Thống Kê Kinh Doanh"}),h.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Tổng quan doanh thu, đơn hàng và sản phẩm bán chạy"})]})]}),h.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200",children:[h.jsx(hb,{className:"w-4 h-4 text-emerald-600"}),h.jsxs("span",{children:["Hôm nay: ",new Date().toLocaleDateString("vi-VN")]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[h.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Doanh Thu Hôm Nay"}),h.jsx("div",{className:"p-2 bg-emerald-50 text-emerald-700 rounded-xl",children:h.jsx(Nb,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mt-3",children:[h.jsx("div",{className:"text-2xl font-black text-gray-900",children:Gn(i.todayRevenue)}),h.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[h.jsx(ag,{className:"w-4 h-4 mr-0.5"}),h.jsxs("span",{children:["+",i.revenueGrowthPercent,"% so với hôm qua"]})]})]})]}),h.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Số Đơn Phục Vụ"}),h.jsx("div",{className:"p-2 bg-blue-50 text-blue-700 rounded-xl",children:h.jsx(ow,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mt-3",children:[h.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.todayOrders," đơn"]}),h.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[h.jsx(ag,{className:"w-4 h-4 mr-0.5"}),h.jsxs("span",{children:["+",i.ordersGrowthPercent,"% tăng trưởng"]})]})]})]}),h.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Giá Trị Đơn Trung Bình"}),h.jsx("div",{className:"p-2 bg-purple-50 text-purple-700 rounded-xl",children:h.jsx(mw,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mt-3",children:[h.jsx("div",{className:"text-2xl font-black text-gray-900",children:Gn(i.averageOrderValue)}),h.jsxs("div",{className:"text-xs font-medium text-gray-400 mt-1",children:["Tính trên ",i.todayOrders," hóa đơn"]})]})]}),h.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Tải Bàn Hiện Tại"}),h.jsx("div",{className:"p-2 bg-amber-50 text-amber-700 rounded-xl",children:h.jsx(jc,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mt-3",children:[h.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.activeTablesCount," / ",i.totalTablesCount," Bàn"]}),h.jsxs("div",{className:"text-xs font-semibold text-amber-600 mt-1",children:["Công suất: ",Math.round(i.activeTablesCount/i.totalTablesCount*100),"%"]})]})]})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5",children:[h.jsxs("div",{className:"lg:col-span-2 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Biểu Đồ Doanh Thu Theo Giờ"}),h.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"Đơn vị: VNĐ"})]}),h.jsx("div",{className:"flex items-end justify-between h-56 pt-6 px-2 border-b border-gray-100",children:i.revenueChartData.map((e,t)=>{const r=Math.max(...i.revenueChartData.map(l=>l.amount)),a=Math.round(e.amount/r*100);return h.jsxs("div",{className:"flex flex-col items-center flex-1 mx-1 group",children:[h.jsx("div",{className:"text-[10px] font-bold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:Gn(e.amount)}),h.jsx("div",{className:"w-full bg-emerald-100 group-hover:bg-emerald-600 rounded-t-xl transition-all duration-200",style:{height:`${a}%`}}),h.jsx("div",{className:"text-[11px] font-semibold text-gray-500 mt-2",children:e.time})]},t)})})]}),h.jsxs("div",{className:"p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[h.jsx(nv,{className:"w-5 h-5 text-amber-500"}),h.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Top Sản Phẩm Bán Chạy"})]}),h.jsx("div",{className:"space-y-3 divide-y divide-gray-50",children:i.topSellingProducts.map((e,t)=>h.jsxs("div",{className:"flex items-center justify-between pt-2.5 first:pt-0",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("span",{className:`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${t===0?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-600"}`,children:t+1}),h.jsxs("div",{children:[h.jsx("div",{className:"text-xs font-bold text-gray-900",children:e.name}),h.jsxs("div",{className:"text-[10px] text-gray-500 font-medium",children:["Đã bán: ",e.quantity," phần"]})]})]}),h.jsx("div",{className:"text-xs font-extrabold text-emerald-700",children:Gn(e.revenue)})]},t))})]})]})]})},uN=()=>{const[i,e]=oe.useState("customers"),[t]=oe.useState(nN),[r,a]=oe.useState(iN),[l,c]=oe.useState(""),[d,f]=oe.useState(!1),[m,x]=oe.useState(""),[_,y]=oe.useState(2e4),M=t.filter(C=>C.fullName.toLowerCase().includes(l.toLowerCase())||C.phoneNumber.includes(l)),E=C=>{C.preventDefault();const S={id:`v-${Date.now()}`,code:m.toUpperCase()||"KM2026",discountType:"FixedAmount",discountValue:Number(_),minOrderValue:1e5,validUntil:"2026-12-31",usageLimit:200,usedCount:0,isActive:!0};a([S,...r]),f(!1),x("")};return h.jsxs("div",{className:"flex flex-col space-y-4",children:[h.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-800 rounded-xl",children:h.jsx(jc,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Khách Hàng & Chương Trình Khuyến Mãi"}),h.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Quản lý thành viên tích điểm và mã giảm giá Voucher"})]})]}),i==="vouchers"&&h.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[h.jsx(Do,{className:"w-4 h-4"}),h.jsx("span",{children:"Tạo Voucher Mới"})]})]}),h.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[h.jsxs("button",{onClick:()=>e("customers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="customers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Sách Khách Hàng (",t.length,")"]}),h.jsxs("button",{onClick:()=>e("vouchers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="vouchers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Mã Giảm Giá Voucher (",r.length,")"]})]}),i==="customers"&&h.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[h.jsxs("div",{className:"relative max-w-md",children:[h.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),h.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"Tìm theo tên hoặc số điện thoại khách hàng...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[h.jsx("th",{className:"p-3",children:"Họ & Tên"}),h.jsx("th",{className:"p-3",children:"Số Điện Thoại"}),h.jsx("th",{className:"p-3",children:"Điểm Tích Lũy"}),h.jsx("th",{className:"p-3",children:"Hạng Thành Viên"}),h.jsx("th",{className:"p-3",children:"Tổng Chi Tiêu"}),h.jsx("th",{className:"p-3 text-right",children:"Lần Ghé Gần Nhất"})]})}),h.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:M.map(C=>h.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[h.jsx("td",{className:"p-3 font-bold text-gray-900",children:C.fullName}),h.jsx("td",{className:"p-3 font-medium text-gray-700",children:C.phoneNumber}),h.jsxs("td",{className:"p-3 font-extrabold text-amber-600",children:[C.points," điểm"]}),h.jsx("td",{className:"p-3",children:h.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${C.tier==="Diamond"?"bg-purple-100 text-purple-800":C.tier==="Gold"?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-800"}`,children:[h.jsx(nv,{className:"w-3 h-3 mr-1"}),"Hạng ",C.tier]})}),h.jsx("td",{className:"p-3 font-bold text-emerald-700",children:Gn(C.totalSpent)}),h.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:C.lastVisit})]},C.id))})]})})]}),i==="vouchers"&&h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(C=>h.jsx("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between",children:h.jsxs("div",{className:"flex items-center space-x-3",children:[h.jsx("div",{className:"flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl font-black",children:h.jsx(hw,{className:"w-6 h-6"})}),h.jsxs("div",{children:[h.jsx("div",{className:"text-base font-black text-gray-900 tracking-wider",children:C.code}),h.jsx("div",{className:"text-xs font-bold text-emerald-700",children:C.discountType==="Percentage"?`Giảm ${C.discountValue}%`:`Giảm ${Gn(C.discountValue)}`}),h.jsxs("div",{className:"text-[10px] text-gray-400",children:["Đơn từ ",Gn(C.minOrderValue)," • Hạn: ",C.validUntil]})]})]})},C.id))}),d&&h.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:h.jsxs("div",{className:"w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[h.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[h.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Tạo Mã Giảm Giá Mới"}),h.jsx("button",{onClick:()=>f(!1),className:"text-gray-400 hover:text-gray-600",children:h.jsx(Cs,{className:"w-5 h-5"})})]}),h.jsxs("form",{onSubmit:E,className:"py-4 space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Voucher (*)"}),h.jsx("input",{type:"text",required:!0,value:m,onChange:C=>x(C.target.value),placeholder:"Ví dụ: KM30K",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-bold tracking-wider"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Tiền Giảm (₫)"}),h.jsx("input",{type:"number",value:_,onChange:C=>y(Number(C.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),h.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[h.jsx("button",{type:"button",onClick:()=>f(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl",children:"Hủy"}),h.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/30",children:"Tạo Voucher"})]})]})]})})]})},dN=()=>{const{user:i}=Vo(),[e,t]=oe.useState(rN),[r,a]=oe.useState(!1),l=()=>{var c;if(r)a(!1);else{const d={id:`att-${Date.now()}`,employeeName:(i==null?void 0:i.fullName)||(i==null?void 0:i.username)||"Nhân viên mới",role:(i==null?void 0:i.role)||((c=i==null?void 0:i.roles)==null?void 0:c[0])||"Cashier",checkInTime:new Date().toLocaleTimeString("vi-VN"),shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"};t([d,...e]),a(!0)}};return h.jsxs("div",{className:"flex flex-col space-y-4",children:[h.jsxs("div",{className:"p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1",children:[h.jsx(Gc,{className:"w-4 h-4"}),h.jsx("span",{children:"Màn Hình Điểm Danh Ca Làm Việc"})]}),h.jsxs("h2",{className:"text-2xl font-black",children:["Xin chào, ",(i==null?void 0:i.fullName)||(i==null?void 0:i.username),"!"]}),h.jsxs("p",{className:"text-xs text-emerald-100 mt-0.5",children:["Thời gian hiện tại: ",new Date().toLocaleTimeString("vi-VN")," • Ca Sáng"]})]}),h.jsx("button",{onClick:l,className:`flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-xs font-black shadow-xl transition-all ${r?"bg-rose-500 hover:bg-rose-600 text-white shadow-rose-900/30":"bg-white text-emerald-800 hover:bg-emerald-50 shadow-emerald-900/30"}`,children:r?h.jsxs(h.Fragment,{children:[h.jsx(rv,{className:"w-4 h-4"}),h.jsx("span",{children:"CHECK-OUT KẾT THÚC CA"})]}):h.jsxs(h.Fragment,{children:[h.jsx(Bb,{className:"w-4 h-4"}),h.jsx("span",{children:"CHECK-IN BẮT ĐẦU CA"})]})})]}),h.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[h.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Bảng Theo Dõi Điểm Danh Ca Làm Việc"}),h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"w-full text-left border-collapse",children:[h.jsx("thead",{children:h.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[h.jsx("th",{className:"p-3",children:"Nhân Viên"}),h.jsx("th",{className:"p-3",children:"Vai Trò"}),h.jsx("th",{className:"p-3",children:"Ca Làm Việc"}),h.jsx("th",{className:"p-3",children:"Giờ Check-in"}),h.jsx("th",{className:"p-3 text-right",children:"Trạng Thái"})]})}),h.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:e.map(c=>h.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[h.jsx("td",{className:"p-3 font-bold text-gray-900",children:c.employeeName}),h.jsx("td",{className:"p-3",children:h.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-700 rounded-md",children:c.role})}),h.jsx("td",{className:"p-3 font-medium text-gray-600",children:c.shiftName}),h.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:c.checkInTime}),h.jsx("td",{className:"p-3 text-right",children:h.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[h.jsx(Ho,{className:"w-3 h-3 mr-1"}),"Đang Trong Ca"]})})]},c.id))})]})})]})]})},fN=({children:i})=>{const{isAuthenticated:e,isLoading:t}=Vo();return t?h.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:h.jsx("div",{className:"w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"})}):e?h.jsx(h.Fragment,{children:i}):h.jsx(wf,{to:"/login",replace:!0})},hN=()=>h.jsx(JM,{children:h.jsx(QM,{children:h.jsx(DS,{children:h.jsxs(ES,{children:[h.jsx(Pi,{path:"/login",element:h.jsx($R,{})}),h.jsxs(Pi,{path:"/",element:h.jsx(fN,{children:h.jsx(Cw,{})}),children:[h.jsx(Pi,{index:!0,element:h.jsx(wf,{to:"/pos",replace:!0})}),h.jsx(Pi,{path:"pos",element:h.jsx(aN,{})}),h.jsx(Pi,{path:"kitchen",element:h.jsx(oN,{})}),h.jsx(Pi,{path:"inventory",element:h.jsx(lN,{})}),h.jsx(Pi,{path:"dashboard",element:h.jsx(cN,{})}),h.jsx(Pi,{path:"customers",element:h.jsx(uN,{})}),h.jsx(Pi,{path:"attendance",element:h.jsx(dN,{})})]}),h.jsx(Pi,{path:"*",element:h.jsx(wf,{to:"/pos",replace:!0})})]})})})});Iy.createRoot(document.getElementById("root")).render(h.jsx(px.StrictMode,{children:h.jsx(hN,{})}));
