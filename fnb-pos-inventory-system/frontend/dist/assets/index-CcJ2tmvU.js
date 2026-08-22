function Ey(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function px(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ed={exports:{}},yo={},Td={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function Ty(){if(b0)return At;b0=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function S(k,Z,Ce){this.props=k,this.context=Z,this.refs=C,this.updater=Ce||M}S.prototype.isReactComponent={},S.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function y(){}y.prototype=S.prototype;function D(k,Z,Ce){this.props=k,this.context=Z,this.refs=C,this.updater=Ce||M}var L=D.prototype=new y;L.constructor=D,T(L,S.prototype),L.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function E(k,Z,Ce){var ze,Ge={},K=null,Se=null;if(Z!=null)for(ze in Z.ref!==void 0&&(Se=Z.ref),Z.key!==void 0&&(K=""+Z.key),Z)N.call(Z,ze)&&!I.hasOwnProperty(ze)&&(Ge[ze]=Z[ze]);var ve=arguments.length-2;if(ve===1)Ge.children=Ce;else if(1<ve){for(var ke=Array(ve),Ze=0;Ze<ve;Ze++)ke[Ze]=arguments[Ze+2];Ge.children=ke}if(k&&k.defaultProps)for(ze in ve=k.defaultProps,ve)Ge[ze]===void 0&&(Ge[ze]=ve[ze]);return{$$typeof:i,type:k,key:K,ref:Se,props:Ge,_owner:P.current}}function U(k,Z){return{$$typeof:i,type:k.type,key:Z,ref:k.ref,props:k.props,_owner:k._owner}}function B(k){return typeof k=="object"&&k!==null&&k.$$typeof===i}function z(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ce){return Z[Ce]})}var X=/\/+/g;function de(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):Z.toString(36)}function pe(k,Z,Ce,ze,Ge){var K=typeof k;(K==="undefined"||K==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(K){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case i:case e:Se=!0}}if(Se)return Se=k,Ge=Ge(Se),k=ze===""?"."+de(Se,0):ze,b(Ge)?(Ce="",k!=null&&(Ce=k.replace(X,"$&/")+"/"),pe(Ge,Z,Ce,"",function(Ze){return Ze})):Ge!=null&&(B(Ge)&&(Ge=U(Ge,Ce+(!Ge.key||Se&&Se.key===Ge.key?"":(""+Ge.key).replace(X,"$&/")+"/")+k)),Z.push(Ge)),1;if(Se=0,ze=ze===""?".":ze+":",b(k))for(var ve=0;ve<k.length;ve++){K=k[ve];var ke=ze+de(K,ve);Se+=pe(K,Z,Ce,ke,Ge)}else if(ke=_(k),typeof ke=="function")for(k=ke.call(k),ve=0;!(K=k.next()).done;)K=K.value,ke=ze+de(K,ve++),Se+=pe(K,Z,Ce,ke,Ge);else if(K==="object")throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return Se}function Y(k,Z,Ce){if(k==null)return k;var ze=[],Ge=0;return pe(k,ze,"","",function(K){return Z.call(Ce,K,Ge++)}),ze}function me(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(Ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ce)},function(Ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ce)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var J={current:null},q={transition:null},ue={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function ae(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:Y,forEach:function(k,Z,Ce){Y(k,function(){Z.apply(this,arguments)},Ce)},count:function(k){var Z=0;return Y(k,function(){Z++}),Z},toArray:function(k){return Y(k,function(Z){return Z})||[]},only:function(k){if(!B(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},At.Component=S,At.Fragment=t,At.Profiler=a,At.PureComponent=D,At.StrictMode=r,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,At.act=ae,At.cloneElement=function(k,Z,Ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var ze=T({},k.props),Ge=k.key,K=k.ref,Se=k._owner;if(Z!=null){if(Z.ref!==void 0&&(K=Z.ref,Se=P.current),Z.key!==void 0&&(Ge=""+Z.key),k.type&&k.type.defaultProps)var ve=k.type.defaultProps;for(ke in Z)N.call(Z,ke)&&!I.hasOwnProperty(ke)&&(ze[ke]=Z[ke]===void 0&&ve!==void 0?ve[ke]:Z[ke])}var ke=arguments.length-2;if(ke===1)ze.children=Ce;else if(1<ke){ve=Array(ke);for(var Ze=0;Ze<ke;Ze++)ve[Ze]=arguments[Ze+2];ze.children=ve}return{$$typeof:i,type:k.type,key:Ge,ref:K,props:ze,_owner:Se}},At.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},At.createElement=E,At.createFactory=function(k){var Z=E.bind(null,k);return Z.type=k,Z},At.createRef=function(){return{current:null}},At.forwardRef=function(k){return{$$typeof:d,render:k}},At.isValidElement=B,At.lazy=function(k){return{$$typeof:g,_payload:{_status:-1,_result:k},_init:me}},At.memo=function(k,Z){return{$$typeof:m,type:k,compare:Z===void 0?null:Z}},At.startTransition=function(k){var Z=q.transition;q.transition={};try{k()}finally{q.transition=Z}},At.unstable_act=ae,At.useCallback=function(k,Z){return J.current.useCallback(k,Z)},At.useContext=function(k){return J.current.useContext(k)},At.useDebugValue=function(){},At.useDeferredValue=function(k){return J.current.useDeferredValue(k)},At.useEffect=function(k,Z){return J.current.useEffect(k,Z)},At.useId=function(){return J.current.useId()},At.useImperativeHandle=function(k,Z,Ce){return J.current.useImperativeHandle(k,Z,Ce)},At.useInsertionEffect=function(k,Z){return J.current.useInsertionEffect(k,Z)},At.useLayoutEffect=function(k,Z){return J.current.useLayoutEffect(k,Z)},At.useMemo=function(k,Z){return J.current.useMemo(k,Z)},At.useReducer=function(k,Z,Ce){return J.current.useReducer(k,Z,Ce)},At.useRef=function(k){return J.current.useRef(k)},At.useState=function(k){return J.current.useState(k)},At.useSyncExternalStore=function(k,Z,Ce){return J.current.useSyncExternalStore(k,Z,Ce)},At.useTransition=function(){return J.current.useTransition()},At.version="18.3.1",At}var w0;function bh(){return w0||(w0=1,Td.exports=Ty()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function Ay(){if(E0)return yo;E0=1;var i=bh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,v={},_=null,M=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:d,key:_,ref:M,props:v,_owner:a.current}}return yo.Fragment=t,yo.jsx=c,yo.jsxs=c,yo}var T0;function Cy(){return T0||(T0=1,Ed.exports=Ay()),Ed.exports}var f=Cy(),ce=bh();const mx=px(ce),Ry=Ey({__proto__:null,default:mx},[ce]);var $l={},Ad={exports:{}},ei={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Ny(){return A0||(A0=1,(function(i){function e(q,ue){var ae=q.length;q.push(ue);e:for(;0<ae;){var k=ae-1>>>1,Z=q[k];if(0<a(Z,ue))q[k]=ue,q[ae]=Z,ae=k;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ue=q[0],ae=q.pop();if(ae!==ue){q[0]=ae;e:for(var k=0,Z=q.length,Ce=Z>>>1;k<Ce;){var ze=2*(k+1)-1,Ge=q[ze],K=ze+1,Se=q[K];if(0>a(Ge,ae))K<Z&&0>a(Se,Ge)?(q[k]=Se,q[K]=ae,k=K):(q[k]=Ge,q[ze]=ae,k=ze);else if(K<Z&&0>a(Se,ae))q[k]=Se,q[K]=ae,k=K;else break e}}return ue}function a(q,ue){var ae=q.sortIndex-ue.sortIndex;return ae!==0?ae:q.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,v=null,_=3,M=!1,T=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(q){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=q)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(m)}}function b(q){if(C=!1,L(q),!T)if(t(h)!==null)T=!0,me(N);else{var ue=t(m);ue!==null&&J(b,ue.startTime-q)}}function N(q,ue){T=!1,C&&(C=!1,y(E),E=-1),M=!0;var ae=_;try{for(L(ue),v=t(h);v!==null&&(!(v.expirationTime>ue)||q&&!z());){var k=v.callback;if(typeof k=="function"){v.callback=null,_=v.priorityLevel;var Z=k(v.expirationTime<=ue);ue=i.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(h)&&r(h),L(ue)}else r(h);v=t(h)}if(v!==null)var Ce=!0;else{var ze=t(m);ze!==null&&J(b,ze.startTime-ue),Ce=!1}return Ce}finally{v=null,_=ae,M=!1}}var P=!1,I=null,E=-1,U=5,B=-1;function z(){return!(i.unstable_now()-B<U)}function X(){if(I!==null){var q=i.unstable_now();B=q;var ue=!0;try{ue=I(!0,q)}finally{ue?de():(P=!1,I=null)}}else P=!1}var de;if(typeof D=="function")de=function(){D(X)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,Y=pe.port2;pe.port1.onmessage=X,de=function(){Y.postMessage(null)}}else de=function(){S(X,0)};function me(q){I=q,P||(P=!0,de())}function J(q,ue){E=S(function(){q(i.unstable_now())},ue)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){T||M||(T=!0,me(N))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(h)},i.unstable_next=function(q){switch(_){case 1:case 2:case 3:var ue=3;break;default:ue=_}var ae=_;_=ue;try{return q()}finally{_=ae}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,ue){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=_;_=q;try{return ue()}finally{_=ae}},i.unstable_scheduleCallback=function(q,ue,ae){var k=i.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,q){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ae+Z,q={id:g++,callback:ue,priorityLevel:q,startTime:ae,expirationTime:Z,sortIndex:-1},ae>k?(q.sortIndex=ae,e(m,q),t(h)===null&&q===t(m)&&(C?(y(E),E=-1):C=!0,J(b,ae-k))):(q.sortIndex=Z,e(h,q),T||M||(T=!0,me(N))),q},i.unstable_shouldYield=z,i.unstable_wrapCallback=function(q){var ue=_;return function(){var ae=_;_=ue;try{return q.apply(this,arguments)}finally{_=ae}}}})(Rd)),Rd}var C0;function Py(){return C0||(C0=1,Cd.exports=Ny()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Ly(){if(R0)return ei;R0=1;var i=bh(),e=Py();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function M(n,s,o,u){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,s,o,u){if(s===null||typeof s>"u"||M(n,s,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function C(n,s,o,u,p,x,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=o,this.propertyName=n,this.type=s,this.sanitizeURL=x,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new C(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(y,D);S[s]=new C(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(y,D);S[s]=new C(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(y,D);S[s]=new C(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,s,o,u){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(T(s,o,p,u)&&(o=null),u||p===null?_(s)&&(o===null?n.removeAttribute(s):n.setAttribute(s,""+o)):p.mustUseProperty?n[p.propertyName]=o===null?p.type===3?!1:"":o:(s=p.attributeName,u=p.attributeNamespace,o===null?n.removeAttribute(s):(p=p.type,o=p===3||p===4&&o===!0?"":""+o,u?n.setAttributeNS(u,s,o):n.setAttribute(s,o))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),z=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),me=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),q=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function Z(n){if(k===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);k=s&&s[1]||""}return`
`+k+n}var Ce=!1;function ze(n,s){if(!n||Ce)return"";Ce=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(he){var u=he}Reflect.construct(n,[],s)}else{try{s.call()}catch(he){u=he}n.call(s.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var p=he.stack.split(`
`),x=u.stack.split(`
`),A=p.length-1,F=x.length-1;1<=A&&0<=F&&p[A]!==x[F];)F--;for(;1<=A&&0<=F;A--,F--)if(p[A]!==x[F]){if(A!==1||F!==1)do if(A--,F--,0>F||p[A]!==x[F]){var V=`
`+p[A].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=A&&0<=F);break}}}finally{Ce=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function Ge(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=ze(n.type,!1),n;case 11:return n=ze(n.type.render,!1),n;case 1:return n=ze(n.type,!0),n;default:return""}}function K(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case U:return"Profiler";case E:return"StrictMode";case de:return"Suspense";case pe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case B:return(n._context.displayName||"Context")+".Provider";case X:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Y:return s=n.displayName||null,s!==null?s:K(n.type)||"Memo";case me:s=n._payload,n=n._init;try{return K(n(s))}catch{}}return null}function Se(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return K(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ke(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ze(n){var s=ke(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var p=o.get,x=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return p.call(this)},set:function(A){u=""+A,x.call(this,A)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function Je(n){n._valueTracker||(n._valueTracker=Ze(n))}function _t(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=ke(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Me(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function rt(n,s){var o=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ot(n,s){var o=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;o=ve(s.value!=null?s.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Pe(n,s){s=s.checked,s!=null&&L(n,"checked",s,!1)}function ht(n,s){Pe(n,s);var o=ve(s.value),u=s.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?Ct(n,s.type,o):s.hasOwnProperty("defaultValue")&&Ct(n,s.type,ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function yt(n,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,o||s===n.value||(n.value=s),n.defaultValue=s}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Ct(n,s,o){(s!=="number"||Me(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ht=Array.isArray;function Ot(n,s,o,u){if(n=n.options,s){s={};for(var p=0;p<o.length;p++)s["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=s.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ve(o),s=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}s!==null||n[p].disabled||(s=n[p])}s!==null&&(s.selected=!0)}}function Bt(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(t(92));if(Ht(o)){if(1<o.length)throw Error(t(93));o=o[0]}s=o}s==null&&(s=""),o=s}n._wrapperState={initialValue:ve(o)}}function un(n,s){var o=ve(s.value),u=ve(s.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),s.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Lt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function O(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?O(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,le=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,u,p){MSApp.execUnsafeLocalFunction(function(){return n(s,o,u,p)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function xe(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var ne={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_e=["Webkit","ms","Moz","O"];Object.keys(ne).forEach(function(n){_e.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),ne[s]=ne[n]})});function ee(n,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||ne.hasOwnProperty(n)&&ne[n]?(""+s).trim():s+"px"}function ge(n,s){n=n.style;for(var o in s)if(s.hasOwnProperty(o)){var u=o.indexOf("--")===0,p=ee(o,s[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,p):n[o]=p}}var we=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,s){if(s){if(we[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Be(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function tt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,ut=null,H=null;function Re(n){if(n=ro(n)){if(typeof at!="function")throw Error(t(280));var s=n.stateNode;s&&(s=cl(s),at(n.stateNode,n.type,s))}}function ye(n){ut?H?H.push(n):H=[n]:ut=n}function Oe(){if(ut){var n=ut,s=H;if(H=ut=null,Re(n),s)for(n=0;n<s.length;n++)Re(s[n])}}function Ie(n,s){return n(s)}function be(){}var $e=!1;function Xe(n,s,o){if($e)return n(s,o);$e=!0;try{return Ie(n,s,o)}finally{$e=!1,(ut!==null||H!==null)&&(be(),Oe())}}function wt(n,s){var o=n.stateNode;if(o===null)return null;var u=cl(o);if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,s,typeof o));return o}var kt=!1;if(d)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){kt=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{kt=!1}function Vn(n,s,o,u,p,x,A,F,V){var he=Array.prototype.slice.call(arguments,3);try{s.apply(o,he)}catch(Te){this.onError(Te)}}var Fi=!1,ar=null,Bi=!1,zi=null,Ba={onError:function(n){Fi=!0,ar=n}};function os(n,s,o,u,p,x,A,F,V){Fi=!1,ar=null,Vn.apply(Ba,arguments)}function gn(n,s,o,u,p,x,A,F,V){if(os.apply(this,arguments),Fi){if(Fi){var he=ar;Fi=!1,ar=null}else throw Error(t(198));Bi||(Bi=!0,zi=he)}}function vt(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function Rt(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Et(n){if(vt(n)!==n)throw Error(t(188))}function en(n){var s=n.alternate;if(!s){if(s=vt(n),s===null)throw Error(t(188));return s!==n?null:n}for(var o=n,u=s;;){var p=o.return;if(p===null)break;var x=p.alternate;if(x===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===x.child){for(x=p.child;x;){if(x===o)return Et(p),n;if(x===u)return Et(p),s;x=x.sibling}throw Error(t(188))}if(o.return!==u.return)o=p,u=x;else{for(var A=!1,F=p.child;F;){if(F===o){A=!0,o=p,u=x;break}if(F===u){A=!0,u=p,o=x;break}F=F.sibling}if(!A){for(F=x.child;F;){if(F===o){A=!0,o=x,u=p;break}if(F===u){A=!0,u=x,o=p;break}F=F.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:s}function dn(n){return n=en(n),n!==null?Vi(n):null}function Vi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=Vi(n);if(s!==null)return s;n=n.sibling}return null}var Hi=e.unstable_scheduleCallback,Gi=e.unstable_cancelCallback,za=e.unstable_shouldYield,Bs=e.unstable_requestPaint,Xt=e.unstable_now,Kc=e.unstable_getCurrentPriorityLevel,Va=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,fe=e.unstable_LowPriority,se=e.unstable_IdlePriority,re=null,Ue=null;function qe(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:mt,Qe=Math.log,st=Math.LN2;function mt(n){return n>>>=0,n===0?32:31-(Qe(n)/st|0)|0}var gt=64,nt=4194304;function It(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,s){var o=n.pendingLanes;if(o===0)return 0;var u=0,p=n.suspendedLanes,x=n.pingedLanes,A=o&268435455;if(A!==0){var F=A&~p;F!==0?u=It(F):(x&=A,x!==0&&(u=It(x)))}else A=o&~p,A!==0?u=It(A):x!==0&&(u=It(x));if(u===0)return 0;if(s!==0&&s!==u&&(s&p)===0&&(p=u&-u,x=s&-s,p>=x||p===16&&(x&4194240)!==0))return s;if((u&4)!==0&&(u|=o&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)o=31-De(s),p=1<<o,u|=n[o],s&=~p;return u}function Jt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,x=n.pendingLanes;0<x;){var A=31-De(x),F=1<<A,V=p[A];V===-1?((F&o)===0||(F&u)!==0)&&(p[A]=Jt(F,s)):V<=s&&(n.expiredLanes|=F),x&=~F}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),n}function En(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Mt(n,s,o){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-De(s),n[s]=o}function qn(n,s){var o=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var p=31-De(o),x=1<<p;s[p]=0,u[p]=-1,n[p]=-1,o&=~x}}function $n(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-De(o),p=1<<u;p&s|n[u]&s&&(n[u]|=s),o&=~p}}var Tt=0;function or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vt,Yt,Mi,jt,bi,ji=!1,ls=[],Rr=null,Nr=null,Pr=null,Ha=new Map,Ga=new Map,Lr=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(n,s){switch(n){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Ha.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(s.pointerId)}}function ja(n,s,o,u,p,x){return n===null||n.nativeEvent!==x?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:x,targetContainers:[p]},s!==null&&(s=ro(s),s!==null&&Yt(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),n)}function $v(n,s,o,u,p){switch(s){case"focusin":return Rr=ja(Rr,n,s,o,u,p),!0;case"dragenter":return Nr=ja(Nr,n,s,o,u,p),!0;case"mouseover":return Pr=ja(Pr,n,s,o,u,p),!0;case"pointerover":var x=p.pointerId;return Ha.set(x,ja(Ha.get(x)||null,n,s,o,u,p)),!0;case"gotpointercapture":return x=p.pointerId,Ga.set(x,ja(Ga.get(x)||null,n,s,o,u,p)),!0}return!1}function op(n){var s=cs(n.target);if(s!==null){var o=vt(s);if(o!==null){if(s=o.tag,s===13){if(s=Rt(o),s!==null){n.blockedOn=s,bi(n.priority,function(){Mi(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yo(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Jc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Le=u,o.target.dispatchEvent(u),Le=null}else return s=ro(o),s!==null&&Yt(s),n.blockedOn=o,!1;s.shift()}return!0}function lp(n,s,o){Yo(n)&&o.delete(s)}function Yv(){ji=!1,Rr!==null&&Yo(Rr)&&(Rr=null),Nr!==null&&Yo(Nr)&&(Nr=null),Pr!==null&&Yo(Pr)&&(Pr=null),Ha.forEach(lp),Ga.forEach(lp)}function Wa(n,s){n.blockedOn===s&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yv)))}function Xa(n){function s(p){return Wa(p,n)}if(0<ls.length){Wa(ls[0],n);for(var o=1;o<ls.length;o++){var u=ls[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Rr!==null&&Wa(Rr,n),Nr!==null&&Wa(Nr,n),Pr!==null&&Wa(Pr,n),Ha.forEach(s),Ga.forEach(s),o=0;o<Lr.length;o++)u=Lr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<Lr.length&&(o=Lr[0],o.blockedOn===null);)op(o),o.blockedOn===null&&Lr.shift()}var zs=b.ReactCurrentBatchConfig,Ko=!0;function Kv(n,s,o,u){var p=Tt,x=zs.transition;zs.transition=null;try{Tt=1,Zc(n,s,o,u)}finally{Tt=p,zs.transition=x}}function Zv(n,s,o,u){var p=Tt,x=zs.transition;zs.transition=null;try{Tt=4,Zc(n,s,o,u)}finally{Tt=p,zs.transition=x}}function Zc(n,s,o,u){if(Ko){var p=Jc(n,s,o,u);if(p===null)mu(n,s,u,Zo,o),ap(n,u);else if($v(p,n,s,o,u))u.stopPropagation();else if(ap(n,u),s&4&&-1<qv.indexOf(n)){for(;p!==null;){var x=ro(p);if(x!==null&&Vt(x),x=Jc(n,s,o,u),x===null&&mu(n,s,u,Zo,o),x===p)break;p=x}p!==null&&u.stopPropagation()}else mu(n,s,u,null,o)}}var Zo=null;function Jc(n,s,o,u){if(Zo=null,n=tt(u),n=cs(n),n!==null)if(s=vt(n),s===null)n=null;else if(o=s.tag,o===13){if(n=Rt(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return Zo=n,null}function cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Va:return 1;case R:return 4;case $:case fe:return 16;case se:return 536870912;default:return 16}default:return 16}}var Dr=null,Qc=null,Jo=null;function up(){if(Jo)return Jo;var n,s=Qc,o=s.length,u,p="value"in Dr?Dr.value:Dr.textContent,x=p.length;for(n=0;n<o&&s[n]===p[n];n++);var A=o-n;for(u=1;u<=A&&s[o-u]===p[x-u];u++);return Jo=p.slice(n,1<u?1-u:void 0)}function Qo(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function el(){return!0}function dp(){return!1}function ri(n){function s(o,u,p,x,A){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=x,this.target=A,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?el:dp,this.isPropagationStopped=dp,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),s}var Vs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=ri(Vs),qa=ae({},Vs,{view:0,detail:0}),Jv=ri(qa),tu,nu,$a,tl=ae({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$a&&($a&&n.type==="mousemove"?(tu=n.screenX-$a.screenX,nu=n.screenY-$a.screenY):nu=tu=0,$a=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),fp=ri(tl),Qv=ae({},tl,{dataTransfer:0}),e_=ri(Qv),t_=ae({},qa,{relatedTarget:0}),iu=ri(t_),n_=ae({},Vs,{animationName:0,elapsedTime:0,pseudoElement:0}),i_=ri(n_),r_=ae({},Vs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),s_=ri(r_),a_=ae({},Vs,{data:0}),hp=ri(a_),o_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},c_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function u_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=c_[n])?!!s[n]:!1}function ru(){return u_}var d_=ae({},qa,{key:function(n){if(n.key){var s=o_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Qo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?l_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(n){return n.type==="keypress"?Qo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),f_=ri(d_),h_=ae({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=ri(h_),p_=ae({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),m_=ri(p_),g_=ae({},Vs,{propertyName:0,elapsedTime:0,pseudoElement:0}),x_=ri(g_),v_=ae({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),__=ri(v_),y_=[9,13,27,32],su=d&&"CompositionEvent"in window,Ya=null;d&&"documentMode"in document&&(Ya=document.documentMode);var S_=d&&"TextEvent"in window&&!Ya,mp=d&&(!su||Ya&&8<Ya&&11>=Ya),gp=" ",xp=!1;function vp(n,s){switch(n){case"keyup":return y_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Hs=!1;function M_(n,s){switch(n){case"compositionend":return _p(s);case"keypress":return s.which!==32?null:(xp=!0,gp);case"textInput":return n=s.data,n===gp&&xp?null:n;default:return null}}function b_(n,s){if(Hs)return n==="compositionend"||!su&&vp(n,s)?(n=up(),Jo=Qc=Dr=null,Hs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return mp&&s.locale!=="ko"?null:s.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!w_[n.type]:s==="textarea"}function Sp(n,s,o,u){ye(u),s=al(s,"onChange"),0<s.length&&(o=new eu("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ka=null,Za=null;function E_(n){Bp(n,0)}function nl(n){var s=qs(n);if(_t(s))return n}function T_(n,s){if(n==="change")return s}var Mp=!1;if(d){var au;if(d){var ou="oninput"in document;if(!ou){var bp=document.createElement("div");bp.setAttribute("oninput","return;"),ou=typeof bp.oninput=="function"}au=ou}else au=!1;Mp=au&&(!document.documentMode||9<document.documentMode)}function wp(){Ka&&(Ka.detachEvent("onpropertychange",Ep),Za=Ka=null)}function Ep(n){if(n.propertyName==="value"&&nl(Za)){var s=[];Sp(s,Za,n,tt(n)),Xe(E_,s)}}function A_(n,s,o){n==="focusin"?(wp(),Ka=s,Za=o,Ka.attachEvent("onpropertychange",Ep)):n==="focusout"&&wp()}function C_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nl(Za)}function R_(n,s){if(n==="click")return nl(s)}function N_(n,s){if(n==="input"||n==="change")return nl(s)}function P_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var wi=typeof Object.is=="function"?Object.is:P_;function Ja(n,s){if(wi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!h.call(s,p)||!wi(n[p],s[p]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,s){var o=Tp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Tp(o)}}function Cp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Cp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Rp(){for(var n=window,s=Me();s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Me(n.document)}return s}function lu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function L_(n){var s=Rp(),o=n.focusedElem,u=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Cp(o.ownerDocument.documentElement,o)){if(u!==null&&lu(o)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(n,o.value.length);else if(n=(s=o.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var p=o.textContent.length,x=Math.min(u.start,p);u=u.end===void 0?x:Math.min(u.end,p),!n.extend&&x>u&&(p=u,u=x,x=p),p=Ap(o,x);var A=Ap(o,u);p&&A&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),n.removeAllRanges(),x>u?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=o;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)n=s[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var D_=d&&"documentMode"in document&&11>=document.documentMode,Gs=null,cu=null,Qa=null,uu=!1;function Np(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uu||Gs==null||Gs!==Me(u)||(u=Gs,"selectionStart"in u&&lu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Qa&&Ja(Qa,u)||(Qa=u,u=al(cu,"onSelect"),0<u.length&&(s=new eu("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Gs)))}function il(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var js={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},du={},Pp={};d&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function rl(n){if(du[n])return du[n];if(!js[n])return n;var s=js[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Pp)return du[n]=s[o];return n}var Lp=rl("animationend"),Dp=rl("animationiteration"),Ip=rl("animationstart"),Up=rl("transitionend"),Op=new Map,kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(n,s){Op.set(n,s),l(s,[n])}for(var fu=0;fu<kp.length;fu++){var hu=kp[fu],I_=hu.toLowerCase(),U_=hu[0].toUpperCase()+hu.slice(1);Ir(I_,"on"+U_)}Ir(Lp,"onAnimationEnd"),Ir(Dp,"onAnimationIteration"),Ir(Ip,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(Up,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),O_=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Fp(n,s,o){var u=n.type||"unknown-event";n.currentTarget=o,gn(u,s,void 0,n),n.currentTarget=null}function Bp(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var x=void 0;if(s)for(var A=u.length-1;0<=A;A--){var F=u[A],V=F.instance,he=F.currentTarget;if(F=F.listener,V!==x&&p.isPropagationStopped())break e;Fp(p,F,he),x=V}else for(A=0;A<u.length;A++){if(F=u[A],V=F.instance,he=F.currentTarget,F=F.listener,V!==x&&p.isPropagationStopped())break e;Fp(p,F,he),x=V}}}if(Bi)throw n=zi,Bi=!1,zi=null,n}function Kt(n,s){var o=s[Su];o===void 0&&(o=s[Su]=new Set);var u=n+"__bubble";o.has(u)||(zp(s,n,2,!1),o.add(u))}function pu(n,s,o){var u=0;s&&(u|=4),zp(o,n,u,s)}var sl="_reactListening"+Math.random().toString(36).slice(2);function to(n){if(!n[sl]){n[sl]=!0,r.forEach(function(o){o!=="selectionchange"&&(O_.has(o)||pu(o,!1,n),pu(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[sl]||(s[sl]=!0,pu("selectionchange",!1,s))}}function zp(n,s,o,u){switch(cp(s)){case 1:var p=Kv;break;case 4:p=Zv;break;default:p=Zc}o=p.bind(null,s,o,n),p=void 0,!kt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(s,o,{capture:!0,passive:p}):n.addEventListener(s,o,!0):p!==void 0?n.addEventListener(s,o,{passive:p}):n.addEventListener(s,o,!1)}function mu(n,s,o,u,p){var x=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var F=u.stateNode.containerInfo;if(F===p||F.nodeType===8&&F.parentNode===p)break;if(A===4)for(A=u.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===p||V.nodeType===8&&V.parentNode===p))return;A=A.return}for(;F!==null;){if(A=cs(F),A===null)return;if(V=A.tag,V===5||V===6){u=x=A;continue e}F=F.parentNode}}u=u.return}Xe(function(){var he=x,Te=tt(o),Ae=[];e:{var Ee=Op.get(n);if(Ee!==void 0){var We=eu,Ke=n;switch(n){case"keypress":if(Qo(o)===0)break e;case"keydown":case"keyup":We=f_;break;case"focusin":Ke="focus",We=iu;break;case"focusout":Ke="blur",We=iu;break;case"beforeblur":case"afterblur":We=iu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=e_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=m_;break;case Lp:case Dp:case Ip:We=i_;break;case Up:We=x_;break;case"scroll":We=Jv;break;case"wheel":We=__;break;case"copy":case"cut":case"paste":We=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=pp}var et=(s&4)!==0,ln=!et&&n==="scroll",te=et?Ee!==null?Ee+"Capture":null:Ee;et=[];for(var j=he,oe;j!==null;){oe=j;var Ne=oe.stateNode;if(oe.tag===5&&Ne!==null&&(oe=Ne,te!==null&&(Ne=wt(j,te),Ne!=null&&et.push(no(j,Ne,oe)))),ln)break;j=j.return}0<et.length&&(Ee=new We(Ee,Ke,null,o,Te),Ae.push({event:Ee,listeners:et}))}}if((s&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",Ee&&o!==Le&&(Ke=o.relatedTarget||o.fromElement)&&(cs(Ke)||Ke[lr]))break e;if((We||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,We?(Ke=o.relatedTarget||o.toElement,We=he,Ke=Ke?cs(Ke):null,Ke!==null&&(ln=vt(Ke),Ke!==ln||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(We=null,Ke=he),We!==Ke)){if(et=fp,Ne="onMouseLeave",te="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(et=pp,Ne="onPointerLeave",te="onPointerEnter",j="pointer"),ln=We==null?Ee:qs(We),oe=Ke==null?Ee:qs(Ke),Ee=new et(Ne,j+"leave",We,o,Te),Ee.target=ln,Ee.relatedTarget=oe,Ne=null,cs(Te)===he&&(et=new et(te,j+"enter",Ke,o,Te),et.target=oe,et.relatedTarget=ln,Ne=et),ln=Ne,We&&Ke)t:{for(et=We,te=Ke,j=0,oe=et;oe;oe=Ws(oe))j++;for(oe=0,Ne=te;Ne;Ne=Ws(Ne))oe++;for(;0<j-oe;)et=Ws(et),j--;for(;0<oe-j;)te=Ws(te),oe--;for(;j--;){if(et===te||te!==null&&et===te.alternate)break t;et=Ws(et),te=Ws(te)}et=null}else et=null;We!==null&&Vp(Ae,Ee,We,et,!1),Ke!==null&&ln!==null&&Vp(Ae,ln,Ke,et,!0)}}e:{if(Ee=he?qs(he):window,We=Ee.nodeName&&Ee.nodeName.toLowerCase(),We==="select"||We==="input"&&Ee.type==="file")var it=T_;else if(yp(Ee))if(Mp)it=N_;else{it=C_;var lt=A_}else(We=Ee.nodeName)&&We.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(it=R_);if(it&&(it=it(n,he))){Sp(Ae,it,o,Te);break e}lt&&lt(n,Ee,he),n==="focusout"&&(lt=Ee._wrapperState)&&lt.controlled&&Ee.type==="number"&&Ct(Ee,"number",Ee.value)}switch(lt=he?qs(he):window,n){case"focusin":(yp(lt)||lt.contentEditable==="true")&&(Gs=lt,cu=he,Qa=null);break;case"focusout":Qa=cu=Gs=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Np(Ae,o,Te);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":Np(Ae,o,Te)}var ct;if(su)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Hs?vp(n,o)&&(pt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(pt="onCompositionStart");pt&&(mp&&o.locale!=="ko"&&(Hs||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Hs&&(ct=up()):(Dr=Te,Qc="value"in Dr?Dr.value:Dr.textContent,Hs=!0)),lt=al(he,pt),0<lt.length&&(pt=new hp(pt,n,null,o,Te),Ae.push({event:pt,listeners:lt}),ct?pt.data=ct:(ct=_p(o),ct!==null&&(pt.data=ct)))),(ct=S_?M_(n,o):b_(n,o))&&(he=al(he,"onBeforeInput"),0<he.length&&(Te=new hp("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:he}),Te.data=ct))}Bp(Ae,s)})}function no(n,s,o){return{instance:n,listener:s,currentTarget:o}}function al(n,s){for(var o=s+"Capture",u=[];n!==null;){var p=n,x=p.stateNode;p.tag===5&&x!==null&&(p=x,x=wt(n,o),x!=null&&u.unshift(no(n,x,p)),x=wt(n,s),x!=null&&u.push(no(n,x,p))),n=n.return}return u}function Ws(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vp(n,s,o,u,p){for(var x=s._reactName,A=[];o!==null&&o!==u;){var F=o,V=F.alternate,he=F.stateNode;if(V!==null&&V===u)break;F.tag===5&&he!==null&&(F=he,p?(V=wt(o,x),V!=null&&A.unshift(no(o,V,F))):p||(V=wt(o,x),V!=null&&A.push(no(o,V,F)))),o=o.return}A.length!==0&&n.push({event:s,listeners:A})}var k_=/\r\n?/g,F_=/\u0000|\uFFFD/g;function Hp(n){return(typeof n=="string"?n:""+n).replace(k_,`
`).replace(F_,"")}function ol(n,s,o){if(s=Hp(s),Hp(n)!==s&&o)throw Error(t(425))}function ll(){}var gu=null,xu=null;function vu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,B_=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,z_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(V_)}:_u;function V_(n){setTimeout(function(){throw n})}function yu(n,s){var o=s,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(u===0){n.removeChild(p),Xa(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=p}while(o);Xa(s)}function Ur(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}var Xs=Math.random().toString(36).slice(2),Wi="__reactFiber$"+Xs,io="__reactProps$"+Xs,lr="__reactContainer$"+Xs,Su="__reactEvents$"+Xs,H_="__reactListeners$"+Xs,G_="__reactHandles$"+Xs;function cs(n){var s=n[Wi];if(s)return s;for(var o=n.parentNode;o;){if(s=o[lr]||o[Wi]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=jp(n);n!==null;){if(o=n[Wi])return o;n=jp(n)}return s}n=o,o=n.parentNode}return null}function ro(n){return n=n[Wi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function cl(n){return n[io]||null}var Mu=[],$s=-1;function Or(n){return{current:n}}function Zt(n){0>$s||(n.current=Mu[$s],Mu[$s]=null,$s--)}function $t(n,s){$s++,Mu[$s]=n.current,n.current=s}var kr={},Nn=Or(kr),Yn=Or(!1),us=kr;function Ys(n,s){var o=n.type.contextTypes;if(!o)return kr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var p={},x;for(x in o)p[x]=s[x];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=p),p}function Kn(n){return n=n.childContextTypes,n!=null}function ul(){Zt(Yn),Zt(Nn)}function Wp(n,s,o){if(Nn.current!==kr)throw Error(t(168));$t(Nn,s),$t(Yn,o)}function Xp(n,s,o){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var p in u)if(!(p in s))throw Error(t(108,Se(n)||"Unknown",p));return ae({},o,u)}function dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,us=Nn.current,$t(Nn,n),$t(Yn,Yn.current),!0}function qp(n,s,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Xp(n,s,us),u.__reactInternalMemoizedMergedChildContext=n,Zt(Yn),Zt(Nn),$t(Nn,n)):Zt(Yn),$t(Yn,o)}var cr=null,fl=!1,bu=!1;function $p(n){cr===null?cr=[n]:cr.push(n)}function j_(n){fl=!0,$p(n)}function Fr(){if(!bu&&cr!==null){bu=!0;var n=0,s=Tt;try{var o=cr;for(Tt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}cr=null,fl=!1}catch(p){throw cr!==null&&(cr=cr.slice(n+1)),Hi(Va,Fr),p}finally{Tt=s,bu=!1}}return null}var Ks=[],Zs=0,hl=null,pl=0,fi=[],hi=0,ds=null,ur=1,dr="";function fs(n,s){Ks[Zs++]=pl,Ks[Zs++]=hl,hl=n,pl=s}function Yp(n,s,o){fi[hi++]=ur,fi[hi++]=dr,fi[hi++]=ds,ds=n;var u=ur;n=dr;var p=32-De(u)-1;u&=~(1<<p),o+=1;var x=32-De(s)+p;if(30<x){var A=p-p%5;x=(u&(1<<A)-1).toString(32),u>>=A,p-=A,ur=1<<32-De(s)+p|o<<p|u,dr=x+n}else ur=1<<x|o<<p|u,dr=n}function wu(n){n.return!==null&&(fs(n,1),Yp(n,1,0))}function Eu(n){for(;n===hl;)hl=Ks[--Zs],Ks[Zs]=null,pl=Ks[--Zs],Ks[Zs]=null;for(;n===ds;)ds=fi[--hi],fi[hi]=null,dr=fi[--hi],fi[hi]=null,ur=fi[--hi],fi[hi]=null}var si=null,ai=null,Qt=!1,Ei=null;function Kp(n,s){var o=xi(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=n,s=n.deletions,s===null?(n.deletions=[o],n.flags|=16):s.push(o)}function Zp(n,s){switch(n.tag){case 5:var o=n.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,si=n,ai=Ur(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,si=n,ai=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=ds!==null?{id:ur,overflow:dr}:null,n.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=xi(18,null,null,0),o.stateNode=s,o.return=n,n.child=o,si=n,ai=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(Qt){var s=ai;if(s){var o=s;if(!Zp(n,s)){if(Tu(n))throw Error(t(418));s=Ur(o.nextSibling);var u=si;s&&Zp(n,s)?Kp(u,o):(n.flags=n.flags&-4097|2,Qt=!1,si=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,si=n}}}function Jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function ml(n){if(n!==si)return!1;if(!Qt)return Jp(n),Qt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!vu(n.type,n.memoizedProps)),s&&(s=ai)){if(Tu(n))throw Qp(),Error(t(418));for(;s;)Kp(n,s),s=Ur(s.nextSibling)}if(Jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(s===0){ai=Ur(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}n=n.nextSibling}ai=null}}else ai=si?Ur(n.stateNode.nextSibling):null;return!0}function Qp(){for(var n=ai;n;)n=Ur(n.nextSibling)}function Js(){ai=si=null,Qt=!1}function Cu(n){Ei===null?Ei=[n]:Ei.push(n)}var W_=b.ReactCurrentBatchConfig;function so(n,s,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var p=u,x=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(A){var F=p.refs;A===null?delete F[x]:F[x]=A},s._stringRef=x,s)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function gl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function em(n){var s=n._init;return s(n._payload)}function tm(n){function s(te,j){if(n){var oe=te.deletions;oe===null?(te.deletions=[j],te.flags|=16):oe.push(j)}}function o(te,j){if(!n)return null;for(;j!==null;)s(te,j),j=j.sibling;return null}function u(te,j){for(te=new Map;j!==null;)j.key!==null?te.set(j.key,j):te.set(j.index,j),j=j.sibling;return te}function p(te,j){return te=Xr(te,j),te.index=0,te.sibling=null,te}function x(te,j,oe){return te.index=oe,n?(oe=te.alternate,oe!==null?(oe=oe.index,oe<j?(te.flags|=2,j):oe):(te.flags|=2,j)):(te.flags|=1048576,j)}function A(te){return n&&te.alternate===null&&(te.flags|=2),te}function F(te,j,oe,Ne){return j===null||j.tag!==6?(j=_d(oe,te.mode,Ne),j.return=te,j):(j=p(j,oe),j.return=te,j)}function V(te,j,oe,Ne){var it=oe.type;return it===I?Te(te,j,oe.props.children,Ne,oe.key):j!==null&&(j.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===me&&em(it)===j.type)?(Ne=p(j,oe.props),Ne.ref=so(te,j,oe),Ne.return=te,Ne):(Ne=zl(oe.type,oe.key,oe.props,null,te.mode,Ne),Ne.ref=so(te,j,oe),Ne.return=te,Ne)}function he(te,j,oe,Ne){return j===null||j.tag!==4||j.stateNode.containerInfo!==oe.containerInfo||j.stateNode.implementation!==oe.implementation?(j=yd(oe,te.mode,Ne),j.return=te,j):(j=p(j,oe.children||[]),j.return=te,j)}function Te(te,j,oe,Ne,it){return j===null||j.tag!==7?(j=ys(oe,te.mode,Ne,it),j.return=te,j):(j=p(j,oe),j.return=te,j)}function Ae(te,j,oe){if(typeof j=="string"&&j!==""||typeof j=="number")return j=_d(""+j,te.mode,oe),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case N:return oe=zl(j.type,j.key,j.props,null,te.mode,oe),oe.ref=so(te,null,j),oe.return=te,oe;case P:return j=yd(j,te.mode,oe),j.return=te,j;case me:var Ne=j._init;return Ae(te,Ne(j._payload),oe)}if(Ht(j)||ue(j))return j=ys(j,te.mode,oe,null),j.return=te,j;gl(te,j)}return null}function Ee(te,j,oe,Ne){var it=j!==null?j.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number")return it!==null?null:F(te,j,""+oe,Ne);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:return oe.key===it?V(te,j,oe,Ne):null;case P:return oe.key===it?he(te,j,oe,Ne):null;case me:return it=oe._init,Ee(te,j,it(oe._payload),Ne)}if(Ht(oe)||ue(oe))return it!==null?null:Te(te,j,oe,Ne,null);gl(te,oe)}return null}function We(te,j,oe,Ne,it){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return te=te.get(oe)||null,F(j,te,""+Ne,it);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case N:return te=te.get(Ne.key===null?oe:Ne.key)||null,V(j,te,Ne,it);case P:return te=te.get(Ne.key===null?oe:Ne.key)||null,he(j,te,Ne,it);case me:var lt=Ne._init;return We(te,j,oe,lt(Ne._payload),it)}if(Ht(Ne)||ue(Ne))return te=te.get(oe)||null,Te(j,te,Ne,it,null);gl(j,Ne)}return null}function Ke(te,j,oe,Ne){for(var it=null,lt=null,ct=j,pt=j=0,bn=null;ct!==null&&pt<oe.length;pt++){ct.index>pt?(bn=ct,ct=null):bn=ct.sibling;var zt=Ee(te,ct,oe[pt],Ne);if(zt===null){ct===null&&(ct=bn);break}n&&ct&&zt.alternate===null&&s(te,ct),j=x(zt,j,pt),lt===null?it=zt:lt.sibling=zt,lt=zt,ct=bn}if(pt===oe.length)return o(te,ct),Qt&&fs(te,pt),it;if(ct===null){for(;pt<oe.length;pt++)ct=Ae(te,oe[pt],Ne),ct!==null&&(j=x(ct,j,pt),lt===null?it=ct:lt.sibling=ct,lt=ct);return Qt&&fs(te,pt),it}for(ct=u(te,ct);pt<oe.length;pt++)bn=We(ct,te,pt,oe[pt],Ne),bn!==null&&(n&&bn.alternate!==null&&ct.delete(bn.key===null?pt:bn.key),j=x(bn,j,pt),lt===null?it=bn:lt.sibling=bn,lt=bn);return n&&ct.forEach(function(qr){return s(te,qr)}),Qt&&fs(te,pt),it}function et(te,j,oe,Ne){var it=ue(oe);if(typeof it!="function")throw Error(t(150));if(oe=it.call(oe),oe==null)throw Error(t(151));for(var lt=it=null,ct=j,pt=j=0,bn=null,zt=oe.next();ct!==null&&!zt.done;pt++,zt=oe.next()){ct.index>pt?(bn=ct,ct=null):bn=ct.sibling;var qr=Ee(te,ct,zt.value,Ne);if(qr===null){ct===null&&(ct=bn);break}n&&ct&&qr.alternate===null&&s(te,ct),j=x(qr,j,pt),lt===null?it=qr:lt.sibling=qr,lt=qr,ct=bn}if(zt.done)return o(te,ct),Qt&&fs(te,pt),it;if(ct===null){for(;!zt.done;pt++,zt=oe.next())zt=Ae(te,zt.value,Ne),zt!==null&&(j=x(zt,j,pt),lt===null?it=zt:lt.sibling=zt,lt=zt);return Qt&&fs(te,pt),it}for(ct=u(te,ct);!zt.done;pt++,zt=oe.next())zt=We(ct,te,pt,zt.value,Ne),zt!==null&&(n&&zt.alternate!==null&&ct.delete(zt.key===null?pt:zt.key),j=x(zt,j,pt),lt===null?it=zt:lt.sibling=zt,lt=zt);return n&&ct.forEach(function(wy){return s(te,wy)}),Qt&&fs(te,pt),it}function ln(te,j,oe,Ne){if(typeof oe=="object"&&oe!==null&&oe.type===I&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case N:e:{for(var it=oe.key,lt=j;lt!==null;){if(lt.key===it){if(it=oe.type,it===I){if(lt.tag===7){o(te,lt.sibling),j=p(lt,oe.props.children),j.return=te,te=j;break e}}else if(lt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===me&&em(it)===lt.type){o(te,lt.sibling),j=p(lt,oe.props),j.ref=so(te,lt,oe),j.return=te,te=j;break e}o(te,lt);break}else s(te,lt);lt=lt.sibling}oe.type===I?(j=ys(oe.props.children,te.mode,Ne,oe.key),j.return=te,te=j):(Ne=zl(oe.type,oe.key,oe.props,null,te.mode,Ne),Ne.ref=so(te,j,oe),Ne.return=te,te=Ne)}return A(te);case P:e:{for(lt=oe.key;j!==null;){if(j.key===lt)if(j.tag===4&&j.stateNode.containerInfo===oe.containerInfo&&j.stateNode.implementation===oe.implementation){o(te,j.sibling),j=p(j,oe.children||[]),j.return=te,te=j;break e}else{o(te,j);break}else s(te,j);j=j.sibling}j=yd(oe,te.mode,Ne),j.return=te,te=j}return A(te);case me:return lt=oe._init,ln(te,j,lt(oe._payload),Ne)}if(Ht(oe))return Ke(te,j,oe,Ne);if(ue(oe))return et(te,j,oe,Ne);gl(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"?(oe=""+oe,j!==null&&j.tag===6?(o(te,j.sibling),j=p(j,oe),j.return=te,te=j):(o(te,j),j=_d(oe,te.mode,Ne),j.return=te,te=j),A(te)):o(te,j)}return ln}var Qs=tm(!0),nm=tm(!1),xl=Or(null),vl=null,ea=null,Ru=null;function Nu(){Ru=ea=vl=null}function Pu(n){var s=xl.current;Zt(xl),n._currentValue=s}function Lu(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function ta(n,s){vl=n,Ru=ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(Zn=!0),n.firstContext=null)}function pi(n){var s=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:s,next:null},ea===null){if(vl===null)throw Error(t(308));ea=n,vl.dependencies={lanes:0,firstContext:n}}else ea=ea.next=n;return s}var hs=null;function Du(n){hs===null?hs=[n]:hs.push(n)}function im(n,s,o,u){var p=s.interleaved;return p===null?(o.next=o,Du(s)):(o.next=p.next,p.next=o),s.interleaved=o,fr(n,u)}function fr(n,s){n.lanes|=s;var o=n.alternate;for(o!==null&&(o.lanes|=s),o=n,n=n.return;n!==null;)n.childLanes|=s,o=n.alternate,o!==null&&(o.childLanes|=s),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Br=!1;function Iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function hr(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function zr(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var p=u.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s,fr(n,o)}return p=u.interleaved,p===null?(s.next=s,Du(u)):(s.next=p.next,p.next=s),u.interleaved=s,fr(n,o)}function _l(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,$n(n,o)}}function sm(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,x=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};x===null?p=x=A:x=x.next=A,o=o.next}while(o!==null);x===null?p=x=s:x=x.next=s}else p=x=s;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:x,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}function yl(n,s,o,u){var p=n.updateQueue;Br=!1;var x=p.firstBaseUpdate,A=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var V=F,he=V.next;V.next=null,A===null?x=he:A.next=he,A=V;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,F=Te.lastBaseUpdate,F!==A&&(F===null?Te.firstBaseUpdate=he:F.next=he,Te.lastBaseUpdate=V))}if(x!==null){var Ae=p.baseState;A=0,Te=he=V=null,F=x;do{var Ee=F.lane,We=F.eventTime;if((u&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:We,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Ke=n,et=F;switch(Ee=s,We=o,et.tag){case 1:if(Ke=et.payload,typeof Ke=="function"){Ae=Ke.call(We,Ae,Ee);break e}Ae=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=et.payload,Ee=typeof Ke=="function"?Ke.call(We,Ae,Ee):Ke,Ee==null)break e;Ae=ae({},Ae,Ee);break e;case 2:Br=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,Ee=p.effects,Ee===null?p.effects=[F]:Ee.push(F))}else We={eventTime:We,lane:Ee,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Te===null?(he=Te=We,V=Ae):Te=Te.next=We,A|=Ee;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;Ee=F,F=Ee.next,Ee.next=null,p.lastBaseUpdate=Ee,p.shared.pending=null}}while(!0);if(Te===null&&(V=Ae),p.baseState=V,p.firstBaseUpdate=he,p.lastBaseUpdate=Te,s=p.shared.interleaved,s!==null){p=s;do A|=p.lane,p=p.next;while(p!==s)}else x===null&&(p.shared.lanes=0);gs|=A,n.lanes=A,n.memoizedState=Ae}}function am(n,s,o){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],p=u.callback;if(p!==null){if(u.callback=null,u=o,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var ao={},Xi=Or(ao),oo=Or(ao),lo=Or(ao);function ps(n){if(n===ao)throw Error(t(174));return n}function Uu(n,s){switch($t(lo,s),$t(oo,n),$t(Xi,ao),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:w(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=w(s,n)}Zt(Xi),$t(Xi,s)}function na(){Zt(Xi),Zt(oo),Zt(lo)}function om(n){ps(lo.current);var s=ps(Xi.current),o=w(s,n.type);s!==o&&($t(oo,n),$t(Xi,o))}function Ou(n){oo.current===n&&(Zt(Xi),Zt(oo))}var tn=Or(0);function Sl(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ku=[];function Fu(){for(var n=0;n<ku.length;n++)ku[n]._workInProgressVersionPrimary=null;ku.length=0}var Ml=b.ReactCurrentDispatcher,Bu=b.ReactCurrentBatchConfig,ms=0,nn=null,xn=null,Sn=null,bl=!1,co=!1,uo=0,X_=0;function Pn(){throw Error(t(321))}function zu(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!wi(n[o],s[o]))return!1;return!0}function Vu(n,s,o,u,p,x){if(ms=x,nn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Ml.current=n===null||n.memoizedState===null?K_:Z_,n=o(u,p),co){x=0;do{if(co=!1,uo=0,25<=x)throw Error(t(301));x+=1,Sn=xn=null,s.updateQueue=null,Ml.current=J_,n=o(u,p)}while(co)}if(Ml.current=Tl,s=xn!==null&&xn.next!==null,ms=0,Sn=xn=nn=null,bl=!1,s)throw Error(t(300));return n}function Hu(){var n=uo!==0;return uo=0,n}function qi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Sn===null?nn.memoizedState=Sn=n:Sn=Sn.next=n,Sn}function mi(){if(xn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var s=Sn===null?nn.memoizedState:Sn.next;if(s!==null)Sn=s,xn=n;else{if(n===null)throw Error(t(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Sn===null?nn.memoizedState=Sn=n:Sn=Sn.next=n}return Sn}function fo(n,s){return typeof s=="function"?s(n):s}function Gu(n){var s=mi(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=xn,p=u.baseQueue,x=o.pending;if(x!==null){if(p!==null){var A=p.next;p.next=x.next,x.next=A}u.baseQueue=p=x,o.pending=null}if(p!==null){x=p.next,u=u.baseState;var F=A=null,V=null,he=x;do{var Te=he.lane;if((ms&Te)===Te)V!==null&&(V=V.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var Ae={lane:Te,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};V===null?(F=V=Ae,A=u):V=V.next=Ae,nn.lanes|=Te,gs|=Te}he=he.next}while(he!==null&&he!==x);V===null?A=u:V.next=F,wi(u,s.memoizedState)||(Zn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=V,o.lastRenderedState=u}if(n=o.interleaved,n!==null){p=n;do x=p.lane,nn.lanes|=x,gs|=x,p=p.next;while(p!==n)}else p===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function ju(n){var s=mi(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,x=s.memoizedState;if(p!==null){o.pending=null;var A=p=p.next;do x=n(x,A.action),A=A.next;while(A!==p);wi(x,s.memoizedState)||(Zn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),o.lastRenderedState=x}return[x,u]}function lm(){}function cm(n,s){var o=nn,u=mi(),p=s(),x=!wi(u.memoizedState,p);if(x&&(u.memoizedState=p,Zn=!0),u=u.queue,Wu(fm.bind(null,o,u,n),[n]),u.getSnapshot!==s||x||Sn!==null&&Sn.memoizedState.tag&1){if(o.flags|=2048,ho(9,dm.bind(null,o,u,p,s),void 0,null),Mn===null)throw Error(t(349));(ms&30)!==0||um(o,s,p)}return p}function um(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function dm(n,s,o,u){s.value=o,s.getSnapshot=u,hm(s)&&pm(n)}function fm(n,s,o){return o(function(){hm(s)&&pm(n)})}function hm(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!wi(n,o)}catch{return!0}}function pm(n){var s=fr(n,1);s!==null&&Ri(s,n,1,-1)}function mm(n){var s=qi();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:n},s.queue=n,n=n.dispatch=Y_.bind(null,nn,n),[s.memoizedState,n]}function ho(n,s,o,u){return n={tag:n,create:s,destroy:o,deps:u,next:null},s=nn.updateQueue,s===null?(s={lastEffect:null,stores:null},nn.updateQueue=s,s.lastEffect=n.next=n):(o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n)),n}function gm(){return mi().memoizedState}function wl(n,s,o,u){var p=qi();nn.flags|=n,p.memoizedState=ho(1|s,o,void 0,u===void 0?null:u)}function El(n,s,o,u){var p=mi();u=u===void 0?null:u;var x=void 0;if(xn!==null){var A=xn.memoizedState;if(x=A.destroy,u!==null&&zu(u,A.deps)){p.memoizedState=ho(s,o,x,u);return}}nn.flags|=n,p.memoizedState=ho(1|s,o,x,u)}function xm(n,s){return wl(8390656,8,n,s)}function Wu(n,s){return El(2048,8,n,s)}function vm(n,s){return El(4,2,n,s)}function _m(n,s){return El(4,4,n,s)}function ym(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Sm(n,s,o){return o=o!=null?o.concat([n]):null,El(4,4,ym.bind(null,s,n),o)}function Xu(){}function Mm(n,s){var o=mi();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function bm(n,s){var o=mi();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(n=n(),o.memoizedState=[n,s],n)}function wm(n,s,o){return(ms&21)===0?(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=o):(wi(o,s)||(o=je(),nn.lanes|=o,gs|=o,n.baseState=!0),s)}function q_(n,s){var o=Tt;Tt=o!==0&&4>o?o:4,n(!0);var u=Bu.transition;Bu.transition={};try{n(!1),s()}finally{Tt=o,Bu.transition=u}}function Em(){return mi().memoizedState}function $_(n,s,o){var u=jr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Tm(n))Am(s,o);else if(o=im(n,s,o,u),o!==null){var p=Gn();Ri(o,n,u,p),Cm(o,s,u)}}function Y_(n,s,o){var u=jr(n),p={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Am(s,p);else{var x=n.alternate;if(n.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var A=s.lastRenderedState,F=x(A,o);if(p.hasEagerState=!0,p.eagerState=F,wi(F,A)){var V=s.interleaved;V===null?(p.next=p,Du(s)):(p.next=V.next,V.next=p),s.interleaved=p;return}}catch{}finally{}o=im(n,s,p,u),o!==null&&(p=Gn(),Ri(o,n,u,p),Cm(o,s,u))}}function Tm(n){var s=n.alternate;return n===nn||s!==null&&s===nn}function Am(n,s){co=bl=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function Cm(n,s,o){if((o&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,$n(n,o)}}var Tl={readContext:pi,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},K_={readContext:pi,useCallback:function(n,s){return qi().memoizedState=[n,s===void 0?null:s],n},useContext:pi,useEffect:xm,useImperativeHandle:function(n,s,o){return o=o!=null?o.concat([n]):null,wl(4194308,4,ym.bind(null,s,n),o)},useLayoutEffect:function(n,s){return wl(4194308,4,n,s)},useInsertionEffect:function(n,s){return wl(4,2,n,s)},useMemo:function(n,s){var o=qi();return s=s===void 0?null:s,n=n(),o.memoizedState=[n,s],n},useReducer:function(n,s,o){var u=qi();return s=o!==void 0?o(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=$_.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var s=qi();return n={current:n},s.memoizedState=n},useState:mm,useDebugValue:Xu,useDeferredValue:function(n){return qi().memoizedState=n},useTransition:function(){var n=mm(!1),s=n[0];return n=q_.bind(null,n[1]),qi().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,o){var u=nn,p=qi();if(Qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=s(),Mn===null)throw Error(t(349));(ms&30)!==0||um(u,s,o)}p.memoizedState=o;var x={value:o,getSnapshot:s};return p.queue=x,xm(fm.bind(null,u,x,n),[n]),u.flags|=2048,ho(9,dm.bind(null,u,x,o,s),void 0,null),o},useId:function(){var n=qi(),s=Mn.identifierPrefix;if(Qt){var o=dr,u=ur;o=(u&~(1<<32-De(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=uo++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=X_++,s=":"+s+"r"+o.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Z_={readContext:pi,useCallback:Mm,useContext:pi,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:Gu,useRef:gm,useState:function(){return Gu(fo)},useDebugValue:Xu,useDeferredValue:function(n){var s=mi();return wm(s,xn.memoizedState,n)},useTransition:function(){var n=Gu(fo)[0],s=mi().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:Em,unstable_isNewReconciler:!1},J_={readContext:pi,useCallback:Mm,useContext:pi,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:bm,useReducer:ju,useRef:gm,useState:function(){return ju(fo)},useDebugValue:Xu,useDeferredValue:function(n){var s=mi();return xn===null?s.memoizedState=n:wm(s,xn.memoizedState,n)},useTransition:function(){var n=ju(fo)[0],s=mi().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:Em,unstable_isNewReconciler:!1};function Ti(n,s){if(n&&n.defaultProps){s=ae({},s),n=n.defaultProps;for(var o in n)s[o]===void 0&&(s[o]=n[o]);return s}return s}function qu(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:ae({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Al={isMounted:function(n){return(n=n._reactInternals)?vt(n)===n:!1},enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Gn(),p=jr(n),x=hr(u,p);x.payload=s,o!=null&&(x.callback=o),s=zr(n,x,p),s!==null&&(Ri(s,n,p,u),_l(s,n,p))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Gn(),p=jr(n),x=hr(u,p);x.tag=1,x.payload=s,o!=null&&(x.callback=o),s=zr(n,x,p),s!==null&&(Ri(s,n,p,u),_l(s,n,p))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Gn(),u=jr(n),p=hr(o,u);p.tag=2,s!=null&&(p.callback=s),s=zr(n,p,u),s!==null&&(Ri(s,n,u,o),_l(s,n,u))}};function Rm(n,s,o,u,p,x,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,x,A):s.prototype&&s.prototype.isPureReactComponent?!Ja(o,u)||!Ja(p,x):!0}function Nm(n,s,o){var u=!1,p=kr,x=s.contextType;return typeof x=="object"&&x!==null?x=pi(x):(p=Kn(s)?us:Nn.current,u=s.contextTypes,x=(u=u!=null)?Ys(n,p):kr),s=new s(o,x),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Al,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=x),s}function Pm(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&Al.enqueueReplaceState(s,s.state,null)}function $u(n,s,o,u){var p=n.stateNode;p.props=o,p.state=n.memoizedState,p.refs={},Iu(n);var x=s.contextType;typeof x=="object"&&x!==null?p.context=pi(x):(x=Kn(s)?us:Nn.current,p.context=Ys(n,x)),p.state=n.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(qu(n,s,x,o),p.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Al.enqueueReplaceState(p,p.state,null),yl(n,o,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function ia(n,s){try{var o="",u=s;do o+=Ge(u),u=u.return;while(u);var p=o}catch(x){p=`
Error generating stack: `+x.message+`
`+x.stack}return{value:n,source:s,stack:p,digest:null}}function Yu(n,s,o){return{value:n,source:null,stack:o??null,digest:s??null}}function Ku(n,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var Q_=typeof WeakMap=="function"?WeakMap:Map;function Lm(n,s,o){o=hr(-1,o),o.tag=3,o.payload={element:null};var u=s.value;return o.callback=function(){Il||(Il=!0,dd=u),Ku(n,s)},o}function Dm(n,s,o){o=hr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=s.value;o.payload=function(){return u(p)},o.callback=function(){Ku(n,s)}}var x=n.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(o.callback=function(){Ku(n,s),typeof u!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),o}function Im(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Q_;var p=new Set;u.set(s,p)}else p=u.get(s),p===void 0&&(p=new Set,u.set(s,p));p.has(o)||(p.add(o),n=hy.bind(null,n,s,o),s.then(n,n))}function Um(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Om(n,s,o,u,p){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=hr(-1,1),s.tag=2,zr(o,s,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var ey=b.ReactCurrentOwner,Zn=!1;function Hn(n,s,o,u){s.child=n===null?nm(s,null,o,u):Qs(s,n.child,o,u)}function km(n,s,o,u,p){o=o.render;var x=s.ref;return ta(s,p),u=Vu(n,s,o,u,x,p),o=Hu(),n!==null&&!Zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,pr(n,s,p)):(Qt&&o&&wu(s),s.flags|=1,Hn(n,s,u,p),s.child)}function Fm(n,s,o,u,p){if(n===null){var x=o.type;return typeof x=="function"&&!vd(x)&&x.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=x,Bm(n,s,x,u,p)):(n=zl(o.type,null,u,s,s.mode,p),n.ref=s.ref,n.return=s,s.child=n)}if(x=n.child,(n.lanes&p)===0){var A=x.memoizedProps;if(o=o.compare,o=o!==null?o:Ja,o(A,u)&&n.ref===s.ref)return pr(n,s,p)}return s.flags|=1,n=Xr(x,u),n.ref=s.ref,n.return=s,s.child=n}function Bm(n,s,o,u,p){if(n!==null){var x=n.memoizedProps;if(Ja(x,u)&&n.ref===s.ref)if(Zn=!1,s.pendingProps=u=x,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Zn=!0);else return s.lanes=n.lanes,pr(n,s,p)}return Zu(n,s,o,u,p)}function zm(n,s,o){var u=s.pendingProps,p=u.children,x=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(sa,oi),oi|=o;else{if((o&1073741824)===0)return n=x!==null?x.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,$t(sa,oi),oi|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=x!==null?x.baseLanes:o,$t(sa,oi),oi|=u}else x!==null?(u=x.baseLanes|o,s.memoizedState=null):u=o,$t(sa,oi),oi|=u;return Hn(n,s,p,o),s.child}function Vm(n,s){var o=s.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Zu(n,s,o,u,p){var x=Kn(o)?us:Nn.current;return x=Ys(s,x),ta(s,p),o=Vu(n,s,o,u,x,p),u=Hu(),n!==null&&!Zn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~p,pr(n,s,p)):(Qt&&u&&wu(s),s.flags|=1,Hn(n,s,o,p),s.child)}function Hm(n,s,o,u,p){if(Kn(o)){var x=!0;dl(s)}else x=!1;if(ta(s,p),s.stateNode===null)Rl(n,s),Nm(s,o,u),$u(s,o,u,p),u=!0;else if(n===null){var A=s.stateNode,F=s.memoizedProps;A.props=F;var V=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=pi(he):(he=Kn(o)?us:Nn.current,he=Ys(s,he));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ae||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==u||V!==he)&&Pm(s,A,u,he),Br=!1;var Ee=s.memoizedState;A.state=Ee,yl(s,u,A,p),V=s.memoizedState,F!==u||Ee!==V||Yn.current||Br?(typeof Te=="function"&&(qu(s,o,Te,u),V=s.memoizedState),(F=Br||Rm(s,o,F,u,Ee,V,he))?(Ae||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=V),A.props=u,A.state=V,A.context=he,u=F):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,rm(n,s),F=s.memoizedProps,he=s.type===s.elementType?F:Ti(s.type,F),A.props=he,Ae=s.pendingProps,Ee=A.context,V=o.contextType,typeof V=="object"&&V!==null?V=pi(V):(V=Kn(o)?us:Nn.current,V=Ys(s,V));var We=o.getDerivedStateFromProps;(Te=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(F!==Ae||Ee!==V)&&Pm(s,A,u,V),Br=!1,Ee=s.memoizedState,A.state=Ee,yl(s,u,A,p);var Ke=s.memoizedState;F!==Ae||Ee!==Ke||Yn.current||Br?(typeof We=="function"&&(qu(s,o,We,u),Ke=s.memoizedState),(he=Br||Rm(s,o,he,u,Ee,Ke,V)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,Ke,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,Ke,V)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=Ke),A.props=u,A.state=Ke,A.context=V,u=he):(typeof A.componentDidUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&Ee===n.memoizedState||(s.flags|=1024),u=!1)}return Ju(n,s,o,u,x,p)}function Ju(n,s,o,u,p,x){Vm(n,s);var A=(s.flags&128)!==0;if(!u&&!A)return p&&qp(s,o,!1),pr(n,s,x);u=s.stateNode,ey.current=s;var F=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&A?(s.child=Qs(s,n.child,null,x),s.child=Qs(s,null,F,x)):Hn(n,s,F,x),s.memoizedState=u.state,p&&qp(s,o,!0),s.child}function Gm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),Uu(n,s.containerInfo)}function jm(n,s,o,u,p){return Js(),Cu(p),s.flags|=256,Hn(n,s,o,u),s.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,o){var u=s.pendingProps,p=tn.current,x=!1,A=(s.flags&128)!==0,F;if((F=A)||(F=n!==null&&n.memoizedState===null?!1:(p&2)!==0),F?(x=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),$t(tn,p&1),n===null)return Au(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,n=u.fallback,x?(u=s.mode,x=s.child,A={mode:"hidden",children:A},(u&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=A):x=Vl(A,u,0,null),n=ys(n,u,o,null),x.return=s,n.return=s,x.sibling=n,s.child=x,s.child.memoizedState=ed(o),s.memoizedState=Qu,n):td(s,A));if(p=n.memoizedState,p!==null&&(F=p.dehydrated,F!==null))return ty(n,s,A,u,F,p,o);if(x){x=u.fallback,A=s.mode,p=n.child,F=p.sibling;var V={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==p?(u=s.child,u.childLanes=0,u.pendingProps=V,s.deletions=null):(u=Xr(p,V),u.subtreeFlags=p.subtreeFlags&14680064),F!==null?x=Xr(F,x):(x=ys(x,A,o,null),x.flags|=2),x.return=s,u.return=s,u.sibling=x,s.child=u,u=x,x=s.child,A=n.child.memoizedState,A=A===null?ed(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},x.memoizedState=A,x.childLanes=n.childLanes&~o,s.memoizedState=Qu,u}return x=n.child,n=x.sibling,u=Xr(x,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=o),u.return=s,u.sibling=null,n!==null&&(o=s.deletions,o===null?(s.deletions=[n],s.flags|=16):o.push(n)),s.child=u,s.memoizedState=null,u}function td(n,s){return s=Vl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function Cl(n,s,o,u){return u!==null&&Cu(u),Qs(s,n.child,null,o),n=td(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function ty(n,s,o,u,p,x,A){if(o)return s.flags&256?(s.flags&=-257,u=Yu(Error(t(422))),Cl(n,s,A,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(x=u.fallback,p=s.mode,u=Vl({mode:"visible",children:u.children},p,0,null),x=ys(x,p,A,null),x.flags|=2,u.return=s,x.return=s,u.sibling=x,s.child=u,(s.mode&1)!==0&&Qs(s,n.child,null,A),s.child.memoizedState=ed(A),s.memoizedState=Qu,x);if((s.mode&1)===0)return Cl(n,s,A,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var F=u.dgst;return u=F,x=Error(t(419)),u=Yu(x,u,void 0),Cl(n,s,A,u)}if(F=(A&n.childLanes)!==0,Zn||F){if(u=Mn,u!==null){switch(A&-A){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|A))!==0?0:p,p!==0&&p!==x.retryLane&&(x.retryLane=p,fr(n,p),Ri(u,n,p,-1))}return xd(),u=Yu(Error(t(421))),Cl(n,s,A,u)}return p.data==="$?"?(s.flags|=128,s.child=n.child,s=py.bind(null,n),p._reactRetry=s,null):(n=x.treeContext,ai=Ur(p.nextSibling),si=s,Qt=!0,Ei=null,n!==null&&(fi[hi++]=ur,fi[hi++]=dr,fi[hi++]=ds,ur=n.id,dr=n.overflow,ds=s),s=td(s,u.children),s.flags|=4096,s)}function Xm(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Lu(n.return,s,o)}function nd(n,s,o,u,p){var x=n.memoizedState;x===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=u,x.tail=o,x.tailMode=p)}function qm(n,s,o){var u=s.pendingProps,p=u.revealOrder,x=u.tail;if(Hn(n,s,u.children,o),u=tn.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xm(n,o,s);else if(n.tag===19)Xm(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(tn,u),(s.mode&1)===0)s.memoizedState=null;else switch(p){case"forwards":for(o=s.child,p=null;o!==null;)n=o.alternate,n!==null&&Sl(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=s.child,s.child=null):(p=o.sibling,o.sibling=null),nd(s,!1,p,o,x);break;case"backwards":for(o=null,p=s.child,s.child=null;p!==null;){if(n=p.alternate,n!==null&&Sl(n)===null){s.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}nd(s,!0,o,null,x);break;case"together":nd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Rl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function pr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),gs|=s.lanes,(o&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,o=Xr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Xr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function ny(n,s,o){switch(s.tag){case 3:Gm(s),Js();break;case 5:om(s);break;case 1:Kn(s.type)&&dl(s);break;case 4:Uu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,p=s.memoizedProps.value;$t(xl,u._currentValue),u._currentValue=p;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?($t(tn,tn.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?Wm(n,s,o):($t(tn,tn.current&1),n=pr(n,s,o),n!==null?n.sibling:null);$t(tn,tn.current&1);break;case 19:if(u=(o&s.childLanes)!==0,(n.flags&128)!==0){if(u)return qm(n,s,o);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),$t(tn,tn.current),u)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,o)}return pr(n,s,o)}var $m,id,Ym,Km;$m=function(n,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},id=function(){},Ym=function(n,s,o,u){var p=n.memoizedProps;if(p!==u){n=s.stateNode,ps(Xi.current);var x=null;switch(o){case"input":p=rt(n,p),u=rt(n,u),x=[];break;case"select":p=ae({},p,{value:void 0}),u=ae({},u,{value:void 0}),x=[];break;case"textarea":p=Bt(n,p),u=Bt(n,u),x=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=ll)}Fe(o,u);var A;o=null;for(he in p)if(!u.hasOwnProperty(he)&&p.hasOwnProperty(he)&&p[he]!=null)if(he==="style"){var F=p[he];for(A in F)F.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?x||(x=[]):(x=x||[]).push(he,null));for(he in u){var V=u[he];if(F=p!=null?p[he]:void 0,u.hasOwnProperty(he)&&V!==F&&(V!=null||F!=null))if(he==="style")if(F){for(A in F)!F.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in V)V.hasOwnProperty(A)&&F[A]!==V[A]&&(o||(o={}),o[A]=V[A])}else o||(x||(x=[]),x.push(he,o)),o=V;else he==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,F=F?F.__html:void 0,V!=null&&F!==V&&(x=x||[]).push(he,V)):he==="children"?typeof V!="string"&&typeof V!="number"||(x=x||[]).push(he,""+V):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(V!=null&&he==="onScroll"&&Kt("scroll",n),x||F===V||(x=[])):(x=x||[]).push(he,V))}o&&(x=x||[]).push("style",o);var he=x;(s.updateQueue=he)&&(s.flags|=4)}},Km=function(n,s,o,u){o!==u&&(s.flags|=4)};function po(n,s){if(!Qt)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ln(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function iy(n,s,o){var u=s.pendingProps;switch(Eu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(s),null;case 1:return Kn(s.type)&&ul(),Ln(s),null;case 3:return u=s.stateNode,na(),Zt(Yn),Zt(Nn),Fu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ml(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(pd(Ei),Ei=null))),id(n,s),Ln(s),null;case 5:Ou(s);var p=ps(lo.current);if(o=s.type,n!==null&&s.stateNode!=null)Ym(n,s,o,u,p),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Ln(s),null}if(n=ps(Xi.current),ml(s)){u=s.stateNode,o=s.type;var x=s.memoizedProps;switch(u[Wi]=s,u[io]=x,n=(s.mode&1)!==0,o){case"dialog":Kt("cancel",u),Kt("close",u);break;case"iframe":case"object":case"embed":Kt("load",u);break;case"video":case"audio":for(p=0;p<eo.length;p++)Kt(eo[p],u);break;case"source":Kt("error",u);break;case"img":case"image":case"link":Kt("error",u),Kt("load",u);break;case"details":Kt("toggle",u);break;case"input":ot(u,x),Kt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!x.multiple},Kt("invalid",u);break;case"textarea":W(u,x),Kt("invalid",u)}Fe(o,x),p=null;for(var A in x)if(x.hasOwnProperty(A)){var F=x[A];A==="children"?typeof F=="string"?u.textContent!==F&&(x.suppressHydrationWarning!==!0&&ol(u.textContent,F,n),p=["children",F]):typeof F=="number"&&u.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&ol(u.textContent,F,n),p=["children",""+F]):a.hasOwnProperty(A)&&F!=null&&A==="onScroll"&&Kt("scroll",u)}switch(o){case"input":Je(u),yt(u,x,!0);break;case"textarea":Je(u),Lt(u);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(u.onclick=ll)}u=p,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=O(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[Wi]=s,n[io]=u,$m(n,s,!1,!1),s.stateNode=n;e:{switch(A=Be(o,u),o){case"dialog":Kt("cancel",n),Kt("close",n),p=u;break;case"iframe":case"object":case"embed":Kt("load",n),p=u;break;case"video":case"audio":for(p=0;p<eo.length;p++)Kt(eo[p],n);p=u;break;case"source":Kt("error",n),p=u;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),p=u;break;case"details":Kt("toggle",n),p=u;break;case"input":ot(n,u),p=rt(n,u),Kt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=ae({},u,{value:void 0}),Kt("invalid",n);break;case"textarea":W(n,u),p=Bt(n,u),Kt("invalid",n);break;default:p=u}Fe(o,p),F=p;for(x in F)if(F.hasOwnProperty(x)){var V=F[x];x==="style"?ge(n,V):x==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&le(n,V)):x==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&xe(n,V):typeof V=="number"&&xe(n,""+V):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(a.hasOwnProperty(x)?V!=null&&x==="onScroll"&&Kt("scroll",n):V!=null&&L(n,x,V,A))}switch(o){case"input":Je(n),yt(n,u,!1);break;case"textarea":Je(n),Lt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,x=u.value,x!=null?Ot(n,!!u.multiple,x,!1):u.defaultValue!=null&&Ot(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=ll)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ln(s),null;case 6:if(n&&s.stateNode!=null)Km(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(o=ps(lo.current),ps(Xi.current),ml(s)){if(u=s.stateNode,o=s.memoizedProps,u[Wi]=s,(x=u.nodeValue!==o)&&(n=si,n!==null))switch(n.tag){case 3:ol(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(u.nodeValue,o,(n.mode&1)!==0)}x&&(s.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Wi]=s,s.stateNode=u}return Ln(s),null;case 13:if(Zt(tn),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ai!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qp(),Js(),s.flags|=98560,x=!1;else if(x=ml(s),u!==null&&u.dehydrated!==null){if(n===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Wi]=s}else Js(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ln(s),x=!1}else Ei!==null&&(pd(Ei),Ei=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(tn.current&1)!==0?vn===0&&(vn=3):xd())),s.updateQueue!==null&&(s.flags|=4),Ln(s),null);case 4:return na(),id(n,s),n===null&&to(s.stateNode.containerInfo),Ln(s),null;case 10:return Pu(s.type._context),Ln(s),null;case 17:return Kn(s.type)&&ul(),Ln(s),null;case 19:if(Zt(tn),x=s.memoizedState,x===null)return Ln(s),null;if(u=(s.flags&128)!==0,A=x.rendering,A===null)if(u)po(x,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=Sl(n),A!==null){for(s.flags|=128,po(x,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=o,o=s.child;o!==null;)x=o,n=u,x.flags&=14680066,A=x.alternate,A===null?(x.childLanes=0,x.lanes=n,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=A.childLanes,x.lanes=A.lanes,x.child=A.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=A.memoizedProps,x.memoizedState=A.memoizedState,x.updateQueue=A.updateQueue,x.type=A.type,n=A.dependencies,x.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $t(tn,tn.current&1|2),s.child}n=n.sibling}x.tail!==null&&Xt()>aa&&(s.flags|=128,u=!0,po(x,!1),s.lanes=4194304)}else{if(!u)if(n=Sl(A),n!==null){if(s.flags|=128,u=!0,o=n.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),po(x,!0),x.tail===null&&x.tailMode==="hidden"&&!A.alternate&&!Qt)return Ln(s),null}else 2*Xt()-x.renderingStartTime>aa&&o!==1073741824&&(s.flags|=128,u=!0,po(x,!1),s.lanes=4194304);x.isBackwards?(A.sibling=s.child,s.child=A):(o=x.last,o!==null?o.sibling=A:s.child=A,x.last=A)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=Xt(),s.sibling=null,o=tn.current,$t(tn,u?o&1|2:o&1),s):(Ln(s),null);case 22:case 23:return gd(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(oi&1073741824)!==0&&(Ln(s),s.subtreeFlags&6&&(s.flags|=8192)):Ln(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ry(n,s){switch(Eu(s),s.tag){case 1:return Kn(s.type)&&ul(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return na(),Zt(Yn),Zt(Nn),Fu(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Ou(s),null;case 13:if(Zt(tn),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Js()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return Zt(tn),null;case 4:return na(),null;case 10:return Pu(s.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Nl=!1,Dn=!1,sy=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function ra(n,s){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){on(n,s,u)}else o.current=null}function rd(n,s,o){try{o()}catch(u){on(n,s,u)}}var Zm=!1;function ay(n,s){if(gu=Ko,n=Rp(),lu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,x=u.focusNode;u=u.focusOffset;try{o.nodeType,x.nodeType}catch{o=null;break e}var A=0,F=-1,V=-1,he=0,Te=0,Ae=n,Ee=null;t:for(;;){for(var We;Ae!==o||p!==0&&Ae.nodeType!==3||(F=A+p),Ae!==x||u!==0&&Ae.nodeType!==3||(V=A+u),Ae.nodeType===3&&(A+=Ae.nodeValue.length),(We=Ae.firstChild)!==null;)Ee=Ae,Ae=We;for(;;){if(Ae===n)break t;if(Ee===o&&++he===p&&(F=A),Ee===x&&++Te===u&&(V=A),(We=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=We}o=F===-1||V===-1?null:{start:F,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},Ko=!1,Ye=s;Ye!==null;)if(s=Ye,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ye=n;else for(;Ye!==null;){s=Ye;try{var Ke=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var et=Ke.memoizedProps,ln=Ke.memoizedState,te=s.stateNode,j=te.getSnapshotBeforeUpdate(s.elementType===s.type?et:Ti(s.type,et),ln);te.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var oe=s.stateNode.containerInfo;oe.nodeType===1?oe.textContent="":oe.nodeType===9&&oe.documentElement&&oe.removeChild(oe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){on(s,s.return,Ne)}if(n=s.sibling,n!==null){n.return=s.return,Ye=n;break}Ye=s.return}return Ke=Zm,Zm=!1,Ke}function mo(n,s,o){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var x=p.destroy;p.destroy=void 0,x!==void 0&&rd(s,o,x)}p=p.next}while(p!==u)}}function Pl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==s)}}function sd(n){var s=n.ref;if(s!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof s=="function"?s(n):s.current=n}}function Jm(n){var s=n.alternate;s!==null&&(n.alternate=null,Jm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Wi],delete s[io],delete s[Su],delete s[H_],delete s[G_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qm(n){return n.tag===5||n.tag===3||n.tag===4}function e0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(n,s):o.insertBefore(n,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(n,o)):(s=o,s.appendChild(n)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=ll));else if(u!==4&&(n=n.child,n!==null))for(ad(n,s,o),n=n.sibling;n!==null;)ad(n,s,o),n=n.sibling}function od(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(od(n,s,o),n=n.sibling;n!==null;)od(n,s,o),n=n.sibling}var Tn=null,Ai=!1;function Vr(n,s,o){for(o=o.child;o!==null;)t0(n,s,o),o=o.sibling}function t0(n,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(re,o)}catch{}switch(o.tag){case 5:Dn||ra(o,s);case 6:var u=Tn,p=Ai;Tn=null,Vr(n,s,o),Tn=u,Ai=p,Tn!==null&&(Ai?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Ai?(n=Tn,o=o.stateNode,n.nodeType===8?yu(n.parentNode,o):n.nodeType===1&&yu(n,o),Xa(n)):yu(Tn,o.stateNode));break;case 4:u=Tn,p=Ai,Tn=o.stateNode.containerInfo,Ai=!0,Vr(n,s,o),Tn=u,Ai=p;break;case 0:case 11:case 14:case 15:if(!Dn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var x=p,A=x.destroy;x=x.tag,A!==void 0&&((x&2)!==0||(x&4)!==0)&&rd(o,s,A),p=p.next}while(p!==u)}Vr(n,s,o);break;case 1:if(!Dn&&(ra(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(F){on(o,s,F)}Vr(n,s,o);break;case 21:Vr(n,s,o);break;case 22:o.mode&1?(Dn=(u=Dn)||o.memoizedState!==null,Vr(n,s,o),Dn=u):Vr(n,s,o);break;default:Vr(n,s,o)}}function n0(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new sy),s.forEach(function(u){var p=my.bind(null,n,u);o.has(u)||(o.add(u),u.then(p,p))})}}function Ci(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u];try{var x=n,A=s,F=A;e:for(;F!==null;){switch(F.tag){case 5:Tn=F.stateNode,Ai=!1;break e;case 3:Tn=F.stateNode.containerInfo,Ai=!0;break e;case 4:Tn=F.stateNode.containerInfo,Ai=!0;break e}F=F.return}if(Tn===null)throw Error(t(160));t0(x,A,p),Tn=null,Ai=!1;var V=p.alternate;V!==null&&(V.return=null),p.return=null}catch(he){on(p,s,he)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)i0(s,n),s=s.sibling}function i0(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(s,n),$i(n),u&4){try{mo(3,n,n.return),Pl(3,n)}catch(et){on(n,n.return,et)}try{mo(5,n,n.return)}catch(et){on(n,n.return,et)}}break;case 1:Ci(s,n),$i(n),u&512&&o!==null&&ra(o,o.return);break;case 5:if(Ci(s,n),$i(n),u&512&&o!==null&&ra(o,o.return),n.flags&32){var p=n.stateNode;try{xe(p,"")}catch(et){on(n,n.return,et)}}if(u&4&&(p=n.stateNode,p!=null)){var x=n.memoizedProps,A=o!==null?o.memoizedProps:x,F=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&Pe(p,x),Be(F,A);var he=Be(F,x);for(A=0;A<V.length;A+=2){var Te=V[A],Ae=V[A+1];Te==="style"?ge(p,Ae):Te==="dangerouslySetInnerHTML"?le(p,Ae):Te==="children"?xe(p,Ae):L(p,Te,Ae,he)}switch(F){case"input":ht(p,x);break;case"textarea":un(p,x);break;case"select":var Ee=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!x.multiple;var We=x.value;We!=null?Ot(p,!!x.multiple,We,!1):Ee!==!!x.multiple&&(x.defaultValue!=null?Ot(p,!!x.multiple,x.defaultValue,!0):Ot(p,!!x.multiple,x.multiple?[]:"",!1))}p[io]=x}catch(et){on(n,n.return,et)}}break;case 6:if(Ci(s,n),$i(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,x=n.memoizedProps;try{p.nodeValue=x}catch(et){on(n,n.return,et)}}break;case 3:if(Ci(s,n),$i(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Xa(s.containerInfo)}catch(et){on(n,n.return,et)}break;case 4:Ci(s,n),$i(n);break;case 13:Ci(s,n),$i(n),p=n.child,p.flags&8192&&(x=p.memoizedState!==null,p.stateNode.isHidden=x,!x||p.alternate!==null&&p.alternate.memoizedState!==null||(ud=Xt())),u&4&&n0(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(Dn=(he=Dn)||Te,Ci(s,n),Dn=he):Ci(s,n),$i(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Te&&(n.mode&1)!==0)for(Ye=n,Te=n.child;Te!==null;){for(Ae=Ye=Te;Ye!==null;){switch(Ee=Ye,We=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:mo(4,Ee,Ee.return);break;case 1:ra(Ee,Ee.return);var Ke=Ee.stateNode;if(typeof Ke.componentWillUnmount=="function"){u=Ee,o=Ee.return;try{s=u,Ke.props=s.memoizedProps,Ke.state=s.memoizedState,Ke.componentWillUnmount()}catch(et){on(u,o,et)}}break;case 5:ra(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){a0(Ae);continue}}We!==null?(We.return=Ee,Ye=We):a0(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{p=Ae.stateNode,he?(x=p.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=Ae.stateNode,V=Ae.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,F.style.display=ee("display",A))}catch(et){on(n,n.return,et)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=he?"":Ae.memoizedProps}catch(et){on(n,n.return,et)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Ci(s,n),$i(n),u&4&&n0(n);break;case 21:break;default:Ci(s,n),$i(n)}}function $i(n){var s=n.flags;if(s&2){try{e:{for(var o=n.return;o!==null;){if(Qm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(xe(p,""),u.flags&=-33);var x=e0(n);od(n,x,p);break;case 3:case 4:var A=u.stateNode.containerInfo,F=e0(n);ad(n,F,A);break;default:throw Error(t(161))}}catch(V){on(n,n.return,V)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function oy(n,s,o){Ye=n,r0(n)}function r0(n,s,o){for(var u=(n.mode&1)!==0;Ye!==null;){var p=Ye,x=p.child;if(p.tag===22&&u){var A=p.memoizedState!==null||Nl;if(!A){var F=p.alternate,V=F!==null&&F.memoizedState!==null||Dn;F=Nl;var he=Dn;if(Nl=A,(Dn=V)&&!he)for(Ye=p;Ye!==null;)A=Ye,V=A.child,A.tag===22&&A.memoizedState!==null?o0(p):V!==null?(V.return=A,Ye=V):o0(p);for(;x!==null;)Ye=x,r0(x),x=x.sibling;Ye=p,Nl=F,Dn=he}s0(n)}else(p.subtreeFlags&8772)!==0&&x!==null?(x.return=p,Ye=x):s0(n)}}function s0(n){for(;Ye!==null;){var s=Ye;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:Dn||Pl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!Dn)if(o===null)u.componentDidMount();else{var p=s.elementType===s.type?o.memoizedProps:Ti(s.type,o.memoizedProps);u.componentDidUpdate(p,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&am(s,x,u);break;case 3:var A=s.updateQueue;if(A!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}am(s,A,o)}break;case 5:var F=s.stateNode;if(o===null&&s.flags&4){o=F;var V=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var he=s.alternate;if(he!==null){var Te=he.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Xa(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||s.flags&512&&sd(s)}catch(Ee){on(s,s.return,Ee)}}if(s===n){Ye=null;break}if(o=s.sibling,o!==null){o.return=s.return,Ye=o;break}Ye=s.return}}function a0(n){for(;Ye!==null;){var s=Ye;if(s===n){Ye=null;break}var o=s.sibling;if(o!==null){o.return=s.return,Ye=o;break}Ye=s.return}}function o0(n){for(;Ye!==null;){var s=Ye;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{Pl(4,s)}catch(V){on(s,o,V)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var p=s.return;try{u.componentDidMount()}catch(V){on(s,p,V)}}var x=s.return;try{sd(s)}catch(V){on(s,x,V)}break;case 5:var A=s.return;try{sd(s)}catch(V){on(s,A,V)}}}catch(V){on(s,s.return,V)}if(s===n){Ye=null;break}var F=s.sibling;if(F!==null){F.return=s.return,Ye=F;break}Ye=s.return}}var ly=Math.ceil,Ll=b.ReactCurrentDispatcher,ld=b.ReactCurrentOwner,gi=b.ReactCurrentBatchConfig,Ft=0,Mn=null,hn=null,An=0,oi=0,sa=Or(0),vn=0,go=null,gs=0,Dl=0,cd=0,xo=null,Jn=null,ud=0,aa=1/0,mr=null,Il=!1,dd=null,Hr=null,Ul=!1,Gr=null,Ol=0,vo=0,fd=null,kl=-1,Fl=0;function Gn(){return(Ft&6)!==0?Xt():kl!==-1?kl:kl=Xt()}function jr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&An!==0?An&-An:W_.transition!==null?(Fl===0&&(Fl=je()),Fl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:cp(n.type)),n)}function Ri(n,s,o,u){if(50<vo)throw vo=0,fd=null,Error(t(185));Mt(n,o,u),((Ft&2)===0||n!==Mn)&&(n===Mn&&((Ft&2)===0&&(Dl|=o),vn===4&&Wr(n,An)),Qn(n,u),o===1&&Ft===0&&(s.mode&1)===0&&(aa=Xt()+500,fl&&Fr()))}function Qn(n,s){var o=n.callbackNode;Gt(n,s);var u=qt(n,n===Mn?An:0);if(u===0)o!==null&&Gi(o),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(o!=null&&Gi(o),s===1)n.tag===0?j_(c0.bind(null,n)):$p(c0.bind(null,n)),z_(function(){(Ft&6)===0&&Fr()}),o=null;else{switch(or(u)){case 1:o=Va;break;case 4:o=R;break;case 16:o=$;break;case 536870912:o=se;break;default:o=$}o=x0(o,l0.bind(null,n))}n.callbackPriority=s,n.callbackNode=o}}function l0(n,s){if(kl=-1,Fl=0,(Ft&6)!==0)throw Error(t(327));var o=n.callbackNode;if(oa()&&n.callbackNode!==o)return null;var u=qt(n,n===Mn?An:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Bl(n,u);else{s=u;var p=Ft;Ft|=2;var x=d0();(Mn!==n||An!==s)&&(mr=null,aa=Xt()+500,vs(n,s));do try{dy();break}catch(F){u0(n,F)}while(!0);Nu(),Ll.current=x,Ft=p,hn!==null?s=0:(Mn=null,An=0,s=vn)}if(s!==0){if(s===2&&(p=fn(n),p!==0&&(u=p,s=hd(n,p))),s===1)throw o=go,vs(n,0),Wr(n,u),Qn(n,Xt()),o;if(s===6)Wr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!cy(p)&&(s=Bl(n,u),s===2&&(x=fn(n),x!==0&&(u=x,s=hd(n,x))),s===1))throw o=go,vs(n,0),Wr(n,u),Qn(n,Xt()),o;switch(n.finishedWork=p,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:_s(n,Jn,mr);break;case 3:if(Wr(n,u),(u&130023424)===u&&(s=ud+500-Xt(),10<s)){if(qt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=_u(_s.bind(null,n,Jn,mr),s);break}_s(n,Jn,mr);break;case 4:if(Wr(n,u),(u&4194240)===u)break;for(s=n.eventTimes,p=-1;0<u;){var A=31-De(u);x=1<<A,A=s[A],A>p&&(p=A),u&=~x}if(u=p,u=Xt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ly(u/1960))-u,10<u){n.timeoutHandle=_u(_s.bind(null,n,Jn,mr),u);break}_s(n,Jn,mr);break;case 5:_s(n,Jn,mr);break;default:throw Error(t(329))}}}return Qn(n,Xt()),n.callbackNode===o?l0.bind(null,n):null}function hd(n,s){var o=xo;return n.current.memoizedState.isDehydrated&&(vs(n,s).flags|=256),n=Bl(n,s),n!==2&&(s=Jn,Jn=o,s!==null&&pd(s)),n}function pd(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function cy(n){for(var s=n;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var p=o[u],x=p.getSnapshot;p=p.value;try{if(!wi(x(),p))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Wr(n,s){for(s&=~cd,s&=~Dl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var o=31-De(s),u=1<<o;n[o]=-1,s&=~u}}function c0(n){if((Ft&6)!==0)throw Error(t(327));oa();var s=qt(n,0);if((s&1)===0)return Qn(n,Xt()),null;var o=Bl(n,s);if(n.tag!==0&&o===2){var u=fn(n);u!==0&&(s=u,o=hd(n,u))}if(o===1)throw o=go,vs(n,0),Wr(n,s),Qn(n,Xt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,_s(n,Jn,mr),Qn(n,Xt()),null}function md(n,s){var o=Ft;Ft|=1;try{return n(s)}finally{Ft=o,Ft===0&&(aa=Xt()+500,fl&&Fr())}}function xs(n){Gr!==null&&Gr.tag===0&&(Ft&6)===0&&oa();var s=Ft;Ft|=1;var o=gi.transition,u=Tt;try{if(gi.transition=null,Tt=1,n)return n()}finally{Tt=u,gi.transition=o,Ft=s,(Ft&6)===0&&Fr()}}function gd(){oi=sa.current,Zt(sa)}function vs(n,s){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,B_(o)),hn!==null)for(o=hn.return;o!==null;){var u=o;switch(Eu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ul();break;case 3:na(),Zt(Yn),Zt(Nn),Fu();break;case 5:Ou(u);break;case 4:na();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:Pu(u.type._context);break;case 22:case 23:gd()}o=o.return}if(Mn=n,hn=n=Xr(n.current,null),An=oi=s,vn=0,go=null,cd=Dl=gs=0,Jn=xo=null,hs!==null){for(s=0;s<hs.length;s++)if(o=hs[s],u=o.interleaved,u!==null){o.interleaved=null;var p=u.next,x=o.pending;if(x!==null){var A=x.next;x.next=p,u.next=A}o.pending=u}hs=null}return n}function u0(n,s){do{var o=hn;try{if(Nu(),Ml.current=Tl,bl){for(var u=nn.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}bl=!1}if(ms=0,Sn=xn=nn=null,co=!1,uo=0,ld.current=null,o===null||o.return===null){vn=1,go=s,hn=null;break}e:{var x=n,A=o.return,F=o,V=s;if(s=An,F.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var he=V,Te=F,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var We=Um(A);if(We!==null){We.flags&=-257,Om(We,A,F,x,s),We.mode&1&&Im(x,he,s),s=We,V=he;var Ke=s.updateQueue;if(Ke===null){var et=new Set;et.add(V),s.updateQueue=et}else Ke.add(V);break e}else{if((s&1)===0){Im(x,he,s),xd();break e}V=Error(t(426))}}else if(Qt&&F.mode&1){var ln=Um(A);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Om(ln,A,F,x,s),Cu(ia(V,F));break e}}x=V=ia(V,F),vn!==4&&(vn=2),xo===null?xo=[x]:xo.push(x),x=A;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var te=Lm(x,V,s);sm(x,te);break e;case 1:F=V;var j=x.type,oe=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||oe!==null&&typeof oe.componentDidCatch=="function"&&(Hr===null||!Hr.has(oe)))){x.flags|=65536,s&=-s,x.lanes|=s;var Ne=Dm(x,F,s);sm(x,Ne);break e}}x=x.return}while(x!==null)}h0(o)}catch(it){s=it,hn===o&&o!==null&&(hn=o=o.return);continue}break}while(!0)}function d0(){var n=Ll.current;return Ll.current=Tl,n===null?Tl:n}function xd(){(vn===0||vn===3||vn===2)&&(vn=4),Mn===null||(gs&268435455)===0&&(Dl&268435455)===0||Wr(Mn,An)}function Bl(n,s){var o=Ft;Ft|=2;var u=d0();(Mn!==n||An!==s)&&(mr=null,vs(n,s));do try{uy();break}catch(p){u0(n,p)}while(!0);if(Nu(),Ft=o,Ll.current=u,hn!==null)throw Error(t(261));return Mn=null,An=0,vn}function uy(){for(;hn!==null;)f0(hn)}function dy(){for(;hn!==null&&!za();)f0(hn)}function f0(n){var s=g0(n.alternate,n,oi);n.memoizedProps=n.pendingProps,s===null?h0(n):hn=s,ld.current=null}function h0(n){var s=n;do{var o=s.alternate;if(n=s.return,(s.flags&32768)===0){if(o=iy(o,s,oi),o!==null){hn=o;return}}else{if(o=ry(o,s),o!==null){o.flags&=32767,hn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,hn=null;return}}if(s=s.sibling,s!==null){hn=s;return}hn=s=n}while(s!==null);vn===0&&(vn=5)}function _s(n,s,o){var u=Tt,p=gi.transition;try{gi.transition=null,Tt=1,fy(n,s,o,u)}finally{gi.transition=p,Tt=u}return null}function fy(n,s,o,u){do oa();while(Gr!==null);if((Ft&6)!==0)throw Error(t(327));o=n.finishedWork;var p=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var x=o.lanes|o.childLanes;if(qn(n,x),n===Mn&&(hn=Mn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ul||(Ul=!0,x0($,function(){return oa(),null})),x=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||x){x=gi.transition,gi.transition=null;var A=Tt;Tt=1;var F=Ft;Ft|=4,ld.current=null,ay(n,o),i0(o,n),L_(xu),Ko=!!gu,xu=gu=null,n.current=o,oy(o),Bs(),Ft=F,Tt=A,gi.transition=x}else n.current=o;if(Ul&&(Ul=!1,Gr=n,Ol=p),x=n.pendingLanes,x===0&&(Hr=null),qe(o.stateNode),Qn(n,Xt()),s!==null)for(u=n.onRecoverableError,o=0;o<s.length;o++)p=s[o],u(p.value,{componentStack:p.stack,digest:p.digest});if(Il)throw Il=!1,n=dd,dd=null,n;return(Ol&1)!==0&&n.tag!==0&&oa(),x=n.pendingLanes,(x&1)!==0?n===fd?vo++:(vo=0,fd=n):vo=0,Fr(),null}function oa(){if(Gr!==null){var n=or(Ol),s=gi.transition,o=Tt;try{if(gi.transition=null,Tt=16>n?16:n,Gr===null)var u=!1;else{if(n=Gr,Gr=null,Ol=0,(Ft&6)!==0)throw Error(t(331));var p=Ft;for(Ft|=4,Ye=n.current;Ye!==null;){var x=Ye,A=x.child;if((Ye.flags&16)!==0){var F=x.deletions;if(F!==null){for(var V=0;V<F.length;V++){var he=F[V];for(Ye=he;Ye!==null;){var Te=Ye;switch(Te.tag){case 0:case 11:case 15:mo(8,Te,x)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,Ye=Ae;else for(;Ye!==null;){Te=Ye;var Ee=Te.sibling,We=Te.return;if(Jm(Te),Te===he){Ye=null;break}if(Ee!==null){Ee.return=We,Ye=Ee;break}Ye=We}}}var Ke=x.alternate;if(Ke!==null){var et=Ke.child;if(et!==null){Ke.child=null;do{var ln=et.sibling;et.sibling=null,et=ln}while(et!==null)}}Ye=x}}if((x.subtreeFlags&2064)!==0&&A!==null)A.return=x,Ye=A;else e:for(;Ye!==null;){if(x=Ye,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:mo(9,x,x.return)}var te=x.sibling;if(te!==null){te.return=x.return,Ye=te;break e}Ye=x.return}}var j=n.current;for(Ye=j;Ye!==null;){A=Ye;var oe=A.child;if((A.subtreeFlags&2064)!==0&&oe!==null)oe.return=A,Ye=oe;else e:for(A=j;Ye!==null;){if(F=Ye,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:Pl(9,F)}}catch(it){on(F,F.return,it)}if(F===A){Ye=null;break e}var Ne=F.sibling;if(Ne!==null){Ne.return=F.return,Ye=Ne;break e}Ye=F.return}}if(Ft=p,Fr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(re,n)}catch{}u=!0}return u}finally{Tt=o,gi.transition=s}}return!1}function p0(n,s,o){s=ia(o,s),s=Lm(n,s,1),n=zr(n,s,1),s=Gn(),n!==null&&(Mt(n,1,s),Qn(n,s))}function on(n,s,o){if(n.tag===3)p0(n,n,o);else for(;s!==null;){if(s.tag===3){p0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Hr===null||!Hr.has(u))){n=ia(o,n),n=Dm(s,n,1),s=zr(s,n,1),n=Gn(),s!==null&&(Mt(s,1,n),Qn(s,n));break}}s=s.return}}function hy(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),s=Gn(),n.pingedLanes|=n.suspendedLanes&o,Mn===n&&(An&o)===o&&(vn===4||vn===3&&(An&130023424)===An&&500>Xt()-ud?vs(n,0):cd|=o),Qn(n,s)}function m0(n,s){s===0&&((n.mode&1)===0?s=1:(s=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var o=Gn();n=fr(n,s),n!==null&&(Mt(n,s,o),Qn(n,o))}function py(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),m0(n,o)}function my(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),m0(n,o)}var g0;g0=function(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps||Yn.current)Zn=!0;else{if((n.lanes&o)===0&&(s.flags&128)===0)return Zn=!1,ny(n,s,o);Zn=(n.flags&131072)!==0}else Zn=!1,Qt&&(s.flags&1048576)!==0&&Yp(s,pl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Rl(n,s),n=s.pendingProps;var p=Ys(s,Nn.current);ta(s,o),p=Vu(null,s,u,n,p,o);var x=Hu();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Kn(u)?(x=!0,dl(s)):x=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Iu(s),p.updater=Al,s.stateNode=p,p._reactInternals=s,$u(s,u,n,o),s=Ju(null,s,u,!0,x,o)):(s.tag=0,Qt&&x&&wu(s),Hn(null,s,p,o),s=s.child),s;case 16:u=s.elementType;e:{switch(Rl(n,s),n=s.pendingProps,p=u._init,u=p(u._payload),s.type=u,p=s.tag=xy(u),n=Ti(u,n),p){case 0:s=Zu(null,s,u,n,o);break e;case 1:s=Hm(null,s,u,n,o);break e;case 11:s=km(null,s,u,n,o);break e;case 14:s=Fm(null,s,u,Ti(u.type,n),o);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ti(u,p),Zu(n,s,u,p,o);case 1:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ti(u,p),Hm(n,s,u,p,o);case 3:e:{if(Gm(s),n===null)throw Error(t(387));u=s.pendingProps,x=s.memoizedState,p=x.element,rm(n,s),yl(s,u,null,o);var A=s.memoizedState;if(u=A.element,x.isDehydrated)if(x={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){p=ia(Error(t(423)),s),s=jm(n,s,u,o,p);break e}else if(u!==p){p=ia(Error(t(424)),s),s=jm(n,s,u,o,p);break e}else for(ai=Ur(s.stateNode.containerInfo.firstChild),si=s,Qt=!0,Ei=null,o=nm(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Js(),u===p){s=pr(n,s,o);break e}Hn(n,s,u,o)}s=s.child}return s;case 5:return om(s),n===null&&Au(s),u=s.type,p=s.pendingProps,x=n!==null?n.memoizedProps:null,A=p.children,vu(u,p)?A=null:x!==null&&vu(u,x)&&(s.flags|=32),Vm(n,s),Hn(n,s,A,o),s.child;case 6:return n===null&&Au(s),null;case 13:return Wm(n,s,o);case 4:return Uu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=Qs(s,null,u,o):Hn(n,s,u,o),s.child;case 11:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ti(u,p),km(n,s,u,p,o);case 7:return Hn(n,s,s.pendingProps,o),s.child;case 8:return Hn(n,s,s.pendingProps.children,o),s.child;case 12:return Hn(n,s,s.pendingProps.children,o),s.child;case 10:e:{if(u=s.type._context,p=s.pendingProps,x=s.memoizedProps,A=p.value,$t(xl,u._currentValue),u._currentValue=A,x!==null)if(wi(x.value,A)){if(x.children===p.children&&!Yn.current){s=pr(n,s,o);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var F=x.dependencies;if(F!==null){A=x.child;for(var V=F.firstContext;V!==null;){if(V.context===u){if(x.tag===1){V=hr(-1,o&-o),V.tag=2;var he=x.updateQueue;if(he!==null){he=he.shared;var Te=he.pending;Te===null?V.next=V:(V.next=Te.next,Te.next=V),he.pending=V}}x.lanes|=o,V=x.alternate,V!==null&&(V.lanes|=o),Lu(x.return,o,s),F.lanes|=o;break}V=V.next}}else if(x.tag===10)A=x.type===s.type?null:x.child;else if(x.tag===18){if(A=x.return,A===null)throw Error(t(341));A.lanes|=o,F=A.alternate,F!==null&&(F.lanes|=o),Lu(A,o,s),A=x.sibling}else A=x.child;if(A!==null)A.return=x;else for(A=x;A!==null;){if(A===s){A=null;break}if(x=A.sibling,x!==null){x.return=A.return,A=x;break}A=A.return}x=A}Hn(n,s,p.children,o),s=s.child}return s;case 9:return p=s.type,u=s.pendingProps.children,ta(s,o),p=pi(p),u=u(p),s.flags|=1,Hn(n,s,u,o),s.child;case 14:return u=s.type,p=Ti(u,s.pendingProps),p=Ti(u.type,p),Fm(n,s,u,p,o);case 15:return Bm(n,s,s.type,s.pendingProps,o);case 17:return u=s.type,p=s.pendingProps,p=s.elementType===u?p:Ti(u,p),Rl(n,s),s.tag=1,Kn(u)?(n=!0,dl(s)):n=!1,ta(s,o),Nm(s,u,p),$u(s,u,p,o),Ju(null,s,u,!0,n,o);case 19:return qm(n,s,o);case 22:return zm(n,s,o)}throw Error(t(156,s.tag))};function x0(n,s){return Hi(n,s)}function gy(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xi(n,s,o,u){return new gy(n,s,o,u)}function vd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function xy(n){if(typeof n=="function")return vd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===X)return 11;if(n===Y)return 14}return 2}function Xr(n,s){var o=n.alternate;return o===null?(o=xi(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function zl(n,s,o,u,p,x){var A=2;if(u=n,typeof n=="function")vd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return ys(o.children,p,x,s);case E:A=8,p|=8;break;case U:return n=xi(12,o,s,p|2),n.elementType=U,n.lanes=x,n;case de:return n=xi(13,o,s,p),n.elementType=de,n.lanes=x,n;case pe:return n=xi(19,o,s,p),n.elementType=pe,n.lanes=x,n;case J:return Vl(o,p,x,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case B:A=10;break e;case z:A=9;break e;case X:A=11;break e;case Y:A=14;break e;case me:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=xi(A,o,s,p),s.elementType=n,s.type=u,s.lanes=x,s}function ys(n,s,o,u){return n=xi(7,n,u,s),n.lanes=o,n}function Vl(n,s,o,u){return n=xi(22,n,u,s),n.elementType=J,n.lanes=o,n.stateNode={isHidden:!1},n}function _d(n,s,o){return n=xi(6,n,null,s),n.lanes=o,n}function yd(n,s,o){return s=xi(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function vy(n,s,o,u,p){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=En(0),this.expirationTimes=En(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=En(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Sd(n,s,o,u,p,x,A,F,V){return n=new vy(n,s,o,F,V),s===1?(s=1,x===!0&&(s|=8)):s=0,x=xi(3,null,null,s),n.current=x,x.stateNode=n,x.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(x),n}function _y(n,s,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:s,implementation:o}}function v0(n){if(!n)return kr;n=n._reactInternals;e:{if(vt(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Kn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Kn(o))return Xp(n,o,s)}return s}function _0(n,s,o,u,p,x,A,F,V){return n=Sd(o,u,!0,n,p,x,A,F,V),n.context=v0(null),o=n.current,u=Gn(),p=jr(o),x=hr(u,p),x.callback=s??null,zr(o,x,p),n.current.lanes=p,Mt(n,p,u),Qn(n,u),n}function Hl(n,s,o,u){var p=s.current,x=Gn(),A=jr(p);return o=v0(o),s.context===null?s.context=o:s.pendingContext=o,s=hr(x,A),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=zr(p,s,A),n!==null&&(Ri(n,p,A,x),_l(n,p,A)),A}function Gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function y0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Md(n,s){y0(n,s),(n=n.alternate)&&y0(n,s)}function yy(){return null}var S0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bd(n){this._internalRoot=n}jl.prototype.render=bd.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Hl(n,s,null,null)},jl.prototype.unmount=bd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;xs(function(){Hl(null,n,null,null)}),s[lr]=null}};function jl(n){this._internalRoot=n}jl.prototype.unstable_scheduleHydration=function(n){if(n){var s=jt();n={blockedOn:null,target:n,priority:s};for(var o=0;o<Lr.length&&s!==0&&s<Lr[o].priority;o++);Lr.splice(o,0,n),o===0&&op(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function M0(){}function Sy(n,s,o,u,p){if(p){if(typeof u=="function"){var x=u;u=function(){var he=Gl(A);x.call(he)}}var A=_0(s,u,n,0,null,!1,!1,"",M0);return n._reactRootContainer=A,n[lr]=A.current,to(n.nodeType===8?n.parentNode:n),xs(),A}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var F=u;u=function(){var he=Gl(V);F.call(he)}}var V=Sd(n,0,!1,null,null,!1,!1,"",M0);return n._reactRootContainer=V,n[lr]=V.current,to(n.nodeType===8?n.parentNode:n),xs(function(){Hl(s,V,o,u)}),V}function Xl(n,s,o,u,p){var x=o._reactRootContainer;if(x){var A=x;if(typeof p=="function"){var F=p;p=function(){var V=Gl(A);F.call(V)}}Hl(s,A,n,p)}else A=Sy(o,s,n,p,u);return Gl(A)}Vt=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var o=It(s.pendingLanes);o!==0&&($n(s,o|1),Qn(s,Xt()),(Ft&6)===0&&(aa=Xt()+500,Fr()))}break;case 13:xs(function(){var u=fr(n,1);if(u!==null){var p=Gn();Ri(u,n,1,p)}}),Md(n,1)}},Yt=function(n){if(n.tag===13){var s=fr(n,134217728);if(s!==null){var o=Gn();Ri(s,n,134217728,o)}Md(n,134217728)}},Mi=function(n){if(n.tag===13){var s=jr(n),o=fr(n,s);if(o!==null){var u=Gn();Ri(o,n,s,u)}Md(n,s)}},jt=function(){return Tt},bi=function(n,s){var o=Tt;try{return Tt=n,s()}finally{Tt=o}},at=function(n,s,o){switch(s){case"input":if(ht(n,o),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var p=cl(u);if(!p)throw Error(t(90));_t(u),ht(u,p)}}}break;case"textarea":un(n,o);break;case"select":s=o.value,s!=null&&Ot(n,!!o.multiple,s,!1)}},Ie=md,be=xs;var My={usingClientEntryPoint:!1,Events:[ro,qs,cl,ye,Oe,md]},_o={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},by={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=dn(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||yy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{re=ql.inject(by),Ue=ql}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=My,ei.createPortal=function(n,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return _y(n,s,null,o)},ei.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var o=!1,u="",p=S0;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Sd(n,1,!1,null,null,o,!1,u,p),n[lr]=s.current,to(n.nodeType===8?n.parentNode:n),new bd(s)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=dn(s),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return xs(n)},ei.hydrate=function(n,s,o){if(!Wl(s))throw Error(t(200));return Xl(null,n,s,!0,o)},ei.hydrateRoot=function(n,s,o){if(!wd(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,p=!1,x="",A=S0;if(o!=null&&(o.unstable_strictMode===!0&&(p=!0),o.identifierPrefix!==void 0&&(x=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),s=_0(s,null,n,1,o??null,p,!1,x,A),n[lr]=s.current,to(n),u)for(n=0;n<u.length;n++)o=u[n],p=o._getVersion,p=p(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,p]:s.mutableSourceEagerHydrationData.push(o,p);return new jl(s)},ei.render=function(n,s,o){if(!Wl(s))throw Error(t(200));return Xl(null,n,s,!1,o)},ei.unmountComponentAtNode=function(n){if(!Wl(n))throw Error(t(40));return n._reactRootContainer?(xs(function(){Xl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ei.unstable_batchedUpdates=md,ei.unstable_renderSubtreeIntoContainer=function(n,s,o,u){if(!Wl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Xl(n,s,o,!1,u)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var N0;function gx(){if(N0)return Ad.exports;N0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ad.exports=Ly(),Ad.exports}var P0;function Dy(){if(P0)return $l;P0=1;var i=gx();return $l.createRoot=i.createRoot,$l.hydrateRoot=i.hydrateRoot,$l}var Iy=Dy();const Uy=px(Iy);gx();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Do.apply(null,arguments)}var ns;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(ns||(ns={}));const L0="popstate";function Oy(i){i===void 0&&(i={});function e(a,l){let{pathname:c="/",search:d="",hash:h=""}=ks(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Mf("",{pathname:c,search:d,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let h=a.location.href,m=h.indexOf("#");d=m===-1?h:h.slice(0,m)}return d+"#"+(typeof l=="string"?l:Ac(l))}function r(a,l){wh(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Fy(e,t,r,i)}function sn(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function wh(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function ky(){return Math.random().toString(36).substr(2,8)}function D0(i,e){return{usr:i.state,key:i.key,idx:e}}function Mf(i,e,t,r){return t===void 0&&(t=null),Do({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?ks(e):e,{state:t,key:e&&e.key||r||ky()})}function Ac(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ks(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function Fy(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,d=ns.Pop,h=null,m=g();m==null&&(m=0,c.replaceState(Do({},c.state,{idx:m}),""));function g(){return(c.state||{idx:null}).idx}function v(){d=ns.Pop;let S=g(),y=S==null?null:S-m;m=S,h&&h({action:d,location:C.location,delta:y})}function _(S,y){d=ns.Push;let D=Mf(C.location,S,y);t&&t(D,S),m=g()+1;let L=D0(D,m),b=C.createHref(D);try{c.pushState(L,"",b)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(b)}l&&h&&h({action:d,location:C.location,delta:1})}function M(S,y){d=ns.Replace;let D=Mf(C.location,S,y);t&&t(D,S),m=g();let L=D0(D,m),b=C.createHref(D);c.replaceState(L,"",b),l&&h&&h({action:d,location:C.location,delta:0})}function T(S){let y=a.location.origin!=="null"?a.location.origin:a.location.href,D=typeof S=="string"?S:Ac(S);return D=D.replace(/ $/,"%20"),sn(y,"No window.location.(origin|href) available to create URL for href: "+D),new URL(D,y)}let C={get action(){return d},get location(){return i(a,c)},listen(S){if(h)throw new Error("A history only accepts one active listener");return a.addEventListener(L0,v),h=S,()=>{a.removeEventListener(L0,v),h=null}},createHref(S){return e(a,S)},createURL:T,encodeLocation(S){let y=T(S);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:_,replace:M,go(S){return c.go(S)}};return C}var I0;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(I0||(I0={}));function By(i,e,t){return t===void 0&&(t="/"),zy(i,e,t)}function zy(i,e,t,r){let a=typeof e=="string"?ks(e):e,l=Ta(a.pathname||"/",t);if(l==null)return null;let c=xx(i);Vy(c);let d=null,h=Jy(l);for(let m=0;d==null&&m<c.length;++m)d=Ky(c[m],h);return d}function xx(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,d)=>{let h={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};h.relativePath.startsWith("/")&&(sn(h.relativePath.startsWith(r),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(r.length));let m=rs([r,h.relativePath]),g=t.concat(h);l.children&&l.children.length>0&&(sn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),xx(l.children,e,g,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:$y(m,l.index),routesMeta:g})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let h of vx(l.path))a(l,c,h)}),e}function vx(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=vx(r.join("/")),d=[];return d.push(...c.map(h=>h===""?l:[l,h].join("/"))),a&&d.push(...c),d.map(h=>i.startsWith("/")&&h===""?"/":h)}function Vy(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:Yy(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const Hy=/^:[\w-]+$/,Gy=3,jy=2,Wy=1,Xy=10,qy=-2,U0=i=>i==="*";function $y(i,e){let t=i.split("/"),r=t.length;return t.some(U0)&&(r+=qy),e&&(r+=jy),t.filter(a=>!U0(a)).reduce((a,l)=>a+(Hy.test(l)?Gy:l===""?Wy:Xy),r)}function Yy(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function Ky(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let d=0;d<r.length;++d){let h=r[d],m=d===r.length-1,g=l==="/"?e:e.slice(l.length)||"/",v=bf({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},g),_=h.route;if(!v)return null;Object.assign(a,v.params),c.push({params:a,pathname:rs([l,v.pathname]),pathnameBase:tS(rs([l,v.pathnameBase])),route:_}),v.pathnameBase!=="/"&&(l=rs([l,v.pathnameBase]))}return c}function bf(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=Zy(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((m,g,v)=>{let{paramName:_,isOptional:M}=g;if(_==="*"){let C=d[v]||"";c=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const T=d[v];return M&&!T?m[_]=void 0:m[_]=(T||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:i}}function Zy(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),wh(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,h)=>(r.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function Jy(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wh(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function Ta(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function Qy(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?ks(i):i,l;return t?(t=_x(t),t.startsWith("/")?l=O0(t.substring(1),"/"):l=O0(t,e)):l=e,{pathname:l,search:nS(r),hash:iS(a)}}function O0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Nd(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function eS(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Eh(i,e){let t=eS(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Th(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=ks(i):(a=Do({},i),sn(!a.pathname||!a.pathname.includes("?"),Nd("?","pathname","search",a)),sn(!a.pathname||!a.pathname.includes("#"),Nd("#","pathname","hash",a)),sn(!a.search||!a.search.includes("#"),Nd("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let v=e.length-1;if(!r&&c.startsWith("..")){let _=c.split("/");for(;_[0]==="..";)_.shift(),v-=1;a.pathname=_.join("/")}d=v>=0?e[v]:"/"}let h=Qy(a,d),m=c&&c!=="/"&&c.endsWith("/"),g=(l||c===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(m||g)&&(h.pathname+="/"),h}const _x=i=>i.replace(/\/\/+/g,"/"),rs=i=>_x(i.join("/")),tS=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),nS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,iS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function rS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const yx=["post","put","patch","delete"];new Set(yx);const sS=["get",...yx];new Set(sS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Io(){return Io=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Io.apply(null,arguments)}const Fc=ce.createContext(null),Sx=ce.createContext(null),Ar=ce.createContext(null),Bc=ce.createContext(null),Cr=ce.createContext({outlet:null,matches:[],isDataRoute:!1}),Mx=ce.createContext(null);function aS(i,e){let{relative:t}=e===void 0?{}:e;La()||sn(!1);let{basename:r,navigator:a}=ce.useContext(Ar),{hash:l,pathname:c,search:d}=zc(i,{relative:t}),h=c;return r!=="/"&&(h=c==="/"?r:rs([r,c])),a.createHref({pathname:h,search:d,hash:l})}function La(){return ce.useContext(Bc)!=null}function Da(){return La()||sn(!1),ce.useContext(Bc).location}function bx(i){ce.useContext(Ar).static||ce.useLayoutEffect(i)}function Ah(){let{isDataRoute:i}=ce.useContext(Cr);return i?SS():oS()}function oS(){La()||sn(!1);let i=ce.useContext(Fc),{basename:e,future:t,navigator:r}=ce.useContext(Ar),{matches:a}=ce.useContext(Cr),{pathname:l}=Da(),c=JSON.stringify(Eh(a,t.v7_relativeSplatPath)),d=ce.useRef(!1);return bx(()=>{d.current=!0}),ce.useCallback(function(m,g){if(g===void 0&&(g={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let v=Th(m,JSON.parse(c),l,g.relative==="path");i==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:rs([e,v.pathname])),(g.replace?r.replace:r.push)(v,g.state,g)},[e,r,c,l,i])}const lS=ce.createContext(null);function cS(i){let e=ce.useContext(Cr).outlet;return e&&ce.createElement(lS.Provider,{value:i},e)}function zc(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=ce.useContext(Ar),{matches:a}=ce.useContext(Cr),{pathname:l}=Da(),c=JSON.stringify(Eh(a,r.v7_relativeSplatPath));return ce.useMemo(()=>Th(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function uS(i,e){return dS(i,e)}function dS(i,e,t,r){La()||sn(!1);let{navigator:a}=ce.useContext(Ar),{matches:l}=ce.useContext(Cr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let h=c?c.pathnameBase:"/";c&&c.route;let m=Da(),g;if(e){var v;let S=typeof e=="string"?ks(e):e;h==="/"||(v=S.pathname)!=null&&v.startsWith(h)||sn(!1),g=S}else g=m;let _=g.pathname||"/",M=_;if(h!=="/"){let S=h.replace(/^\//,"").split("/");M="/"+_.replace(/^\//,"").split("/").slice(S.length).join("/")}let T=By(i,{pathname:M}),C=gS(T&&T.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:rs([h,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?h:rs([h,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return e&&C?ce.createElement(Bc.Provider,{value:{location:Io({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:ns.Pop}},C):C}function fS(){let i=yS(),e=rS(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return ce.createElement(ce.Fragment,null,ce.createElement("h2",null,"Unexpected Application Error!"),ce.createElement("h3",{style:{fontStyle:"italic"}},e),t?ce.createElement("pre",{style:a},t):null,null)}const hS=ce.createElement(fS,null);class pS extends ce.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?ce.createElement(Cr.Provider,{value:this.props.routeContext},ce.createElement(Mx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function mS(i){let{routeContext:e,match:t,children:r}=i,a=ce.useContext(Fc);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),ce.createElement(Cr.Provider,{value:e},r)}function gS(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=(a=t)==null?void 0:a.errors;if(d!=null){let g=c.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);g>=0||sn(!1),c=c.slice(0,Math.min(c.length,g+1))}let h=!1,m=-1;if(t&&r&&r.v7_partialHydration)for(let g=0;g<c.length;g++){let v=c[g];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=g),v.route.id){let{loaderData:_,errors:M}=t,T=v.route.loader&&_[v.route.id]===void 0&&(!M||M[v.route.id]===void 0);if(v.route.lazy||T){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((g,v,_)=>{let M,T=!1,C=null,S=null;t&&(M=d&&v.route.id?d[v.route.id]:void 0,C=v.route.errorElement||hS,h&&(m<0&&_===0?(MS("route-fallback"),T=!0,S=null):m===_&&(T=!0,S=v.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,_+1)),D=()=>{let L;return M?L=C:T?L=S:v.route.Component?L=ce.createElement(v.route.Component,null):v.route.element?L=v.route.element:L=g,ce.createElement(mS,{match:v,routeContext:{outlet:g,matches:y,isDataRoute:t!=null},children:L})};return t&&(v.route.ErrorBoundary||v.route.errorElement||_===0)?ce.createElement(pS,{location:t.location,revalidation:t.revalidation,component:C,error:M,children:D(),routeContext:{outlet:null,matches:y,isDataRoute:!0}}):D()},null)}var wx=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(wx||{}),Ex=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Ex||{});function xS(i){let e=ce.useContext(Fc);return e||sn(!1),e}function vS(i){let e=ce.useContext(Sx);return e||sn(!1),e}function _S(i){let e=ce.useContext(Cr);return e||sn(!1),e}function Tx(i){let e=_S(),t=e.matches[e.matches.length-1];return t.route.id||sn(!1),t.route.id}function yS(){var i;let e=ce.useContext(Mx),t=vS(),r=Tx();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function SS(){let{router:i}=xS(wx.UseNavigateStable),e=Tx(Ex.UseNavigateStable),t=ce.useRef(!1);return bx(()=>{t.current=!0}),ce.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Io({fromRouteId:e},l)))},[i,e])}const k0={};function MS(i,e,t){k0[i]||(k0[i]=!0)}function bS(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function wf(i){let{to:e,replace:t,state:r,relative:a}=i;La()||sn(!1);let{future:l,static:c}=ce.useContext(Ar),{matches:d}=ce.useContext(Cr),{pathname:h}=Da(),m=Ah(),g=Th(e,Eh(d,l.v7_relativeSplatPath),h,a==="path"),v=JSON.stringify(g);return ce.useEffect(()=>m(JSON.parse(v),{replace:t,state:r,relative:a}),[m,v,a,t,r]),null}function wS(i){return cS(i.context)}function Ii(i){sn(!1)}function ES(i){let{basename:e="/",children:t=null,location:r,navigationType:a=ns.Pop,navigator:l,static:c=!1,future:d}=i;La()&&sn(!1);let h=e.replace(/^\/*/,"/"),m=ce.useMemo(()=>({basename:h,navigator:l,static:c,future:Io({v7_relativeSplatPath:!1},d)}),[h,d,l,c]);typeof r=="string"&&(r=ks(r));let{pathname:g="/",search:v="",hash:_="",state:M=null,key:T="default"}=r,C=ce.useMemo(()=>{let S=Ta(g,h);return S==null?null:{location:{pathname:S,search:v,hash:_,state:M,key:T},navigationType:a}},[h,g,v,_,M,T,a]);return C==null?null:ce.createElement(Ar.Provider,{value:m},ce.createElement(Bc.Provider,{children:t,value:C}))}function TS(i){let{children:e,location:t}=i;return uS(Ef(e),t)}new Promise(()=>{});function Ef(i,e){e===void 0&&(e=[]);let t=[];return ce.Children.forEach(i,(r,a)=>{if(!ce.isValidElement(r))return;let l=[...e,a];if(r.type===ce.Fragment){t.push.apply(t,Ef(r.props.children,l));return}r.type!==Ii&&sn(!1),!r.props.index||!r.props.children||sn(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Ef(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Cc.apply(null,arguments)}function Ax(i,e){if(i==null)return{};var t={};for(var r in i)if({}.hasOwnProperty.call(i,r)){if(e.indexOf(r)!==-1)continue;t[r]=i[r]}return t}function AS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function CS(i,e){return i.button===0&&(!e||e==="_self")&&!AS(i)}const RS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],NS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],PS="6";try{window.__reactRouterVersion=PS}catch{}const LS=ce.createContext({isTransitioning:!1}),DS="startTransition",F0=Ry[DS];function IS(i){let{basename:e,children:t,future:r,window:a}=i,l=ce.useRef();l.current==null&&(l.current=Oy({window:a,v5Compat:!0}));let c=l.current,[d,h]=ce.useState({action:c.action,location:c.location}),{v7_startTransition:m}=r||{},g=ce.useCallback(v=>{m&&F0?F0(()=>h(v)):h(v)},[h,m]);return ce.useLayoutEffect(()=>c.listen(g),[c,g]),ce.useEffect(()=>bS(r),[r]),ce.createElement(ES,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:r})}const US=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,kS=ce.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:d,target:h,to:m,preventScrollReset:g,viewTransition:v}=e,_=Ax(e,RS),{basename:M}=ce.useContext(Ar),T,C=!1;if(typeof m=="string"&&OS.test(m)&&(T=m,US))try{let L=new URL(window.location.href),b=m.startsWith("//")?new URL(L.protocol+m):new URL(m),N=Ta(b.pathname,M);b.origin===L.origin&&N!=null?m=N+b.search+b.hash:C=!0}catch{}let S=aS(m,{relative:a}),y=BS(m,{replace:c,state:d,target:h,preventScrollReset:g,relative:a,viewTransition:v});function D(L){r&&r(L),L.defaultPrevented||y(L)}return ce.createElement("a",Cc({},_,{href:T||S,onClick:C||l?r:D,ref:t,target:h}))}),Ro=ce.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:c=!1,style:d,to:h,viewTransition:m,children:g}=e,v=Ax(e,NS),_=zc(h,{relative:v.relative}),M=Da(),T=ce.useContext(Sx),{navigator:C,basename:S}=ce.useContext(Ar),y=T!=null&&zS(_)&&m===!0,D=C.encodeLocation?C.encodeLocation(_).pathname:_.pathname,L=M.pathname,b=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;a||(L=L.toLowerCase(),b=b?b.toLowerCase():null,D=D.toLowerCase()),b&&S&&(b=Ta(b,S)||b);const N=D!=="/"&&D.endsWith("/")?D.length-1:D.length;let P=L===D||!c&&L.startsWith(D)&&L.charAt(N)==="/",I=b!=null&&(b===D||!c&&b.startsWith(D)&&b.charAt(D.length)==="/"),E={isActive:P,isPending:I,isTransitioning:y},U=P?r:void 0,B;typeof l=="function"?B=l(E):B=[l,P?"active":null,I?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let z=typeof d=="function"?d(E):d;return ce.createElement(kS,Cc({},v,{"aria-current":U,className:B,ref:t,style:z,to:h,viewTransition:m}),typeof g=="function"?g(E):g)});var Tf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var B0;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(B0||(B0={}));function FS(i){let e=ce.useContext(Fc);return e||sn(!1),e}function BS(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,h=Ah(),m=Da(),g=zc(i,{relative:c});return ce.useCallback(v=>{if(CS(v,t)){v.preventDefault();let _=r!==void 0?r:Ac(m)===Ac(g);h(i,{replace:_,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[m,h,g,r,a,t,i,l,c,d])}function zS(i,e){e===void 0&&(e={});let t=ce.useContext(LS);t==null&&sn(!1);let{basename:r}=FS(Tf.useViewTransitionState),a=zc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ta(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=Ta(t.nextLocation.pathname,r)||t.nextLocation.pathname;return bf(a.pathname,c)!=null||bf(a.pathname,l)!=null}function Cx(i,e){return function(){return i.apply(e,arguments)}}const{toString:VS}=Object.prototype,{getPrototypeOf:Aa}=Object,{iterator:zo,toStringTag:Rx}=Symbol,Rc=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Uo=(i,e)=>{let t=i;const r=[];for(;t!=null&&t!==Object.prototype;){if(r.indexOf(t)!==-1)return!1;if(r.push(t),Rc(t,e))return!0;t=Aa(t)}return!1},HS=(i,e)=>i!=null&&Uo(i,e)?i[e]:void 0,Ch=(i=>e=>{const t=VS.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),Si=i=>(i=i.toLowerCase(),e=>Ch(e)===i),Vc=i=>e=>typeof e===i,{isArray:Ls}=Array,Ds=Vc("undefined");function Ia(i){return i!==null&&!Ds(i)&&i.constructor!==null&&!Ds(i.constructor)&&ni(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Nx=Si("ArrayBuffer");function GS(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Nx(i.buffer),e}const jS=Vc("string"),ni=Vc("function"),Px=Vc("number"),Ua=i=>i!==null&&typeof i=="object",WS=i=>i===!0||i===!1,vc=i=>{if(!Ua(i))return!1;const e=Aa(i);return(e===null||e===Object.prototype||Aa(e)===null)&&!Uo(i,Rx)&&!Uo(i,zo)},XS=i=>{if(!Ua(i)||Ia(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},qS=Si("Date"),$S=Si("File"),YS=i=>!!(i&&typeof i.uri<"u"),KS=i=>i&&typeof i.getParts<"u",ZS=Si("Blob"),JS=Si("FileList"),QS=Si("Set"),e1=i=>Ua(i)&&ni(i.pipe);function t1(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const z0=t1(),V0=typeof z0.FormData<"u"?z0.FormData:void 0,n1=i=>{if(!i)return!1;if(V0&&i instanceof V0)return!0;const e=Aa(i);if(!e||e===Object.prototype||!ni(i.append))return!1;const t=Ch(i);return t==="formdata"||t==="object"&&ni(i.toString)&&i.toString()==="[object FormData]"},i1=Si("URLSearchParams"),[r1,s1,a1,o1]=["ReadableStream","Request","Response","Headers"].map(Si),l1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Vo(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,a;if(typeof i!="object"&&(i=[i]),Ls(i))for(r=0,a=i.length;r<a;r++)e.call(null,i[r],r,i);else{if(Ia(i))return;const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let d;for(r=0;r<c;r++)d=l[r],e.call(null,i[d],d,i)}}function Lx(i,e){if(Ia(i))return null;e=e.toLowerCase();const t=Object.keys(i);let r=t.length,a;for(;r-- >0;)if(a=t[r],e===a.toLowerCase())return a;return null}const As=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Dx=i=>!Ds(i)&&i!==As;function Af(...i){const{caseless:e,skipUndefined:t}=Dx(this)&&this||{},r={},a=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const d=e&&typeof c=="string"&&Lx(r,c)||c,h=Rc(r,d)?r[d]:void 0;vc(h)&&vc(l)?r[d]=Af(h,l):vc(l)?r[d]=Af({},l):Ls(l)?r[d]=l.slice():(!t||!Ds(l))&&(r[d]=l)};for(let l=0,c=i.length;l<c;l++){const d=i[l];if(!d||Ia(d)||(Vo(d,a),typeof d!="object"||Ls(d)))continue;const h=Object.getOwnPropertySymbols(d);for(let m=0;m<h.length;m++){const g=h[m];y1.call(d,g)&&a(d[g],g)}}return r}const c1=(i,e,t,{allOwnKeys:r}={})=>(Vo(e,(a,l)=>{t&&ni(a)?Object.defineProperty(i,l,{__proto__:null,value:Cx(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),i),u1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),d1=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},f1=(i,e,t,r)=>{let a,l,c;const d={};if(e=e||{},i==null)return e;do{for(a=Object.getOwnPropertyNames(i),l=a.length;l-- >0;)c=a[l],(!r||r(c,i,e))&&!d[c]&&(e[c]=i[c],d[c]=!0);i=t!==!1&&Aa(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},h1=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},p1=i=>{if(!i)return null;if(Ls(i))return i;let e=i.length;if(!Px(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},m1=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&Aa(Uint8Array)),g1=(i,e)=>{const r=(i&&i[zo]).call(i);let a;for(;(a=r.next())&&!a.done;){const l=a.value;e.call(i,l[0],l[1])}},x1=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},v1=Si("HTMLFormElement"),_1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),{propertyIsEnumerable:y1}=Object.prototype,S1=Si("RegExp"),Ix=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};Vo(t,(a,l)=>{let c;(c=e(a,l,i))!==!1&&(r[l]=c||a)}),Object.defineProperties(i,r)},M1=i=>{Ix(i,(e,t)=>{if(ni(i)&&["arguments","caller","callee"].includes(t))return!1;const r=i[t];if(ni(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},b1=(i,e)=>{const t={},r=a=>{a.forEach(l=>{t[l]=!0})};return Ls(i)?r(i):r(String(i).split(e)),t},w1=()=>{},E1=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function T1(i){return!!(i&&ni(i.append)&&i[Rx]==="FormData"&&i[zo])}const A1=i=>{const e=new WeakSet,t=r=>{if(Ua(r)){if(e.has(r))return;if(Ia(r))return r;if(!("toJSON"in r)){e.add(r);let a;if(QS(r)){a=[];for(const l of r){const c=t(l);!Ds(c)&&a.push(c)}}else a=Ls(r)?[]:{},Vo(r,(l,c)=>{const d=t(l);!Ds(d)&&(a[c]=d)});return e.delete(r),a}}return r};return t(i)},C1=Si("AsyncFunction"),R1=i=>i&&(Ua(i)||ni(i))&&ni(i.then)&&ni(i.catch),Ux=((i,e)=>i?setImmediate:e?((t,r)=>(As.addEventListener("message",({source:a,data:l})=>{a===As&&l===t&&r.length&&r.shift()()},!1),a=>{r.push(a),As.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",ni(As.postMessage)),N1=typeof queueMicrotask<"u"?queueMicrotask.bind(As):typeof process<"u"&&process.nextTick||Ux,Ox=i=>i!=null&&ni(i[zo]),P1=i=>i!=null&&Uo(i,zo)&&Ox(i),G={isArray:Ls,isArrayBuffer:Nx,isBuffer:Ia,isFormData:n1,isArrayBufferView:GS,isString:jS,isNumber:Px,isBoolean:WS,isObject:Ua,isPlainObject:vc,isEmptyObject:XS,isReadableStream:r1,isRequest:s1,isResponse:a1,isHeaders:o1,isUndefined:Ds,isDate:qS,isFile:$S,isReactNativeBlob:YS,isReactNative:KS,isBlob:ZS,isRegExp:S1,isFunction:ni,isStream:e1,isURLSearchParams:i1,isTypedArray:m1,isFileList:JS,forEach:Vo,merge:Af,extend:c1,trim:l1,stripBOM:u1,inherits:d1,toFlatObject:f1,kindOf:Ch,kindOfTest:Si,endsWith:h1,toArray:p1,forEachEntry:g1,matchAll:x1,isHTMLForm:v1,hasOwnProperty:Rc,hasOwnProp:Rc,hasOwnInPrototypeChain:Uo,getSafeProp:HS,reduceDescriptors:Ix,freezeMethods:M1,toObjectSet:b1,toCamelCase:_1,noop:w1,toFiniteNumber:E1,findKey:Lx,global:As,isContextDefined:Dx,isSpecCompliantForm:T1,toJSONObject:A1,isAsyncFn:C1,isThenable:R1,setImmediate:Ux,asap:N1,isIterable:Ox,isSafeIterable:P1},L1=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),D1=i=>{const e={};let t,r,a;return i&&i.split(`
`).forEach(function(c){a=c.indexOf(":"),t=c.substring(0,a).trim().toLowerCase(),r=c.substring(a+1).trim();const d=G.hasOwnProp(e,t);!t||d&&G.hasOwnProp(L1,t)||(t==="set-cookie"?d?e[t].push(r):e[t]=[r]:e[t]=d?e[t]+", "+r:r)}),e};function I1(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const U1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),O1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Rh(i,e){return G.isArray(i)?i.map(t=>Rh(t,e)):I1(String(i).replace(e,""))}const k1=i=>Rh(i,U1),F1=i=>Rh(i,O1);function kx(i){const e=Object.create(null);return G.forEach(i.toJSON(),(t,r)=>{e[r]=F1(t)}),e}const H0=Symbol("internals");function So(i){return i&&String(i).trim().toLowerCase()}function _c(i){return i===!1||i==null?i:G.isArray(i)?i.map(_c):k1(String(i))}function B1(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const z1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Pd(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function V1(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let r=1;r<e;r++){const a=i.charCodeAt(r);if(a===34||a===92&&(r+=1,r>=e))return i;t+=i[r]}return t}function H1(i){const e=Object.create(null),t=String(i);let r=0,a=!1,l=!1;function c(d){const h=Pd(t.slice(r,d)),m=h.indexOf("=");if(m<1)return;const g=Pd(h.slice(0,m));if(!z1.test(g))return;const v=g.toLowerCase();if(v==="__proto__"||v==="constructor"||v==="prototype")return;const _=Pd(h.slice(m+1));e[v]=V1(_)}for(let d=0;d<t.length;d++){const h=t.charCodeAt(d);a?l?l=!1:h===92?l=!0:h===34&&(a=!1):h===34?a=!0:(h===44||h===59)&&(c(d),r=d+1)}return c(t.length),e}const G1=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ld(i,e,t,r,a){if(G.isFunction(r))return r.call(this,e,t);if(a&&(e=t),!!G.isString(e)){if(G.isString(r))return e.indexOf(r)!==-1;if(G.isRegExp(r))return r.test(e)}}function j1(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function W1(i,e){const t=G.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{__proto__:null,value:function(a,l,c){return this[r].call(this,e,a,l,c)},configurable:!0})})}let Bn=class{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function l(d,h,m){const g=So(h);if(!g)return;const v=G.findKey(a,g);(!v||a[v]===void 0||m===!0||m===void 0&&a[v]!==!1)&&(a[v||h]=_c(d))}const c=(d,h)=>G.forEach(d,(m,g)=>l(m,g,h));if(G.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(G.isString(e)&&(e=e.trim())&&!G1(e))c(D1(e),t);else if(G.isObject(e)&&G.isSafeIterable(e)){let d=Object.create(null),h,m;for(const g of e){if(!G.isArray(g))throw new TypeError("Object iterator must return a key-value pair");m=g[0],G.hasOwnProp(d,m)?(h=d[m],d[m]=G.isArray(h)?[...h,g[1]]:[h,g[1]]):d[m]=g[1]}c(d,t)}else e!=null&&l(t,e,r);return this}get(e,t){if(e=So(e),e){const r=G.findKey(this,e);if(r){const a=this[r];if(!t)return a;if(t===!0)return B1(a);if(G.isFunction(t))return t.call(this,a,r);if(G.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=So(e),e){const r=G.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Ld(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let a=!1;function l(c){if(c=So(c),c){const d=G.findKey(r,c);d&&(!t||Ld(r,r[d],d,t))&&(delete r[d],a=!0)}}return G.isArray(e)?e.forEach(l):l(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const l=t[r];(!e||Ld(this,this[l],l,e,!0))&&(delete this[l],a=!0)}return a}normalize(e){const t=this,r={};return G.forEach(this,(a,l)=>{const c=G.findKey(r,l);if(c){t[c]=_c(a),delete t[l];return}const d=e?j1(l):String(l).trim();d!==l&&delete t[l],t[d]=_c(a),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=e&&G.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return G.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return H1(e)}static concat(e,...t){const r=new this(e);return t.forEach(a=>r.set(a)),r}static accessor(e){const r=(this[H0]=this[H0]={accessors:{}}).accessors,a=this.prototype;function l(c){const d=So(c);r[d]||(W1(a,c),r[d]=!0)}return G.isArray(e)?e.forEach(l):l(e),this}};Bn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(Bn.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}});G.freezeMethods(Bn);const Nc="[REDACTED ****]";function X1(i){if(G.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(G.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function q1(i,e){const t=new Set(e.map(l=>String(l).toLowerCase())),r=[],a=l=>{if(l===null||typeof l!="object"||G.isBuffer(l))return l;if(r.indexOf(l)!==-1)return;l instanceof Bn&&(l=l.toJSON()),r.push(l);let c;if(G.isArray(l))c=[],l.forEach((d,h)=>{const m=a(d);G.isUndefined(m)||(c[h]=m)});else{if(!G.isPlainObject(l)&&X1(l))return r.pop(),l;c=Object.create(null);for(const[d,h]of Object.entries(l)){const m=t.has(d.toLowerCase())?Nc:a(h);G.isUndefined(m)||(c[d]=m)}}return r.pop(),c};return a(i)}function G0(i){try{return String(i)}catch{return""}}function $1(i){return i.errors.map(t=>{try{return t&&t.message?G0(t.message):G0(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let He=class Fx extends Error{static from(e,t,r,a,l,c){let d=e.message;!d&&G.isArray(e.errors)&&e.errors.length&&(d=$1(e));const h=new Fx(d,t||e.code,r,a,l);return Object.defineProperty(h,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),h.name=e.name,e.status!=null&&h.status==null&&(h.status=e.status),c&&Object.assign(h,c),h}constructor(e,t,r,a,l){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),l&&(this.response=l,this.status=l.status)}toJSON(){const e=this.config,t=e&&G.hasOwnProp(e,"redact")?e.redact:void 0,r=G.isArray(t)&&t.length>0?q1(e,t):G.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};He.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";He.ERR_BAD_OPTION="ERR_BAD_OPTION";He.ECONNABORTED="ECONNABORTED";He.ETIMEDOUT="ETIMEDOUT";He.ECONNREFUSED="ECONNREFUSED";He.ERR_NETWORK="ERR_NETWORK";He.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";He.ERR_DEPRECATED="ERR_DEPRECATED";He.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";He.ERR_BAD_REQUEST="ERR_BAD_REQUEST";He.ERR_CANCELED="ERR_CANCELED";He.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";He.ERR_INVALID_URL="ERR_INVALID_URL";He.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const Y1=null,Bx=100;function Cf(i){return G.isPlainObject(i)||G.isArray(i)}function zx(i){return G.endsWith(i,"[]")?i.slice(0,-2):i}function Dd(i,e,t){return i?i.concat(e).map(function(a,l){return a=zx(a),!t&&l?"["+a+"]":a}).join(t?".":""):e}function K1(i){return G.isArray(i)&&!i.some(Cf)}const Z1=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function Hc(i,e,t){if(!G.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=G.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(D,L){return!G.isUndefined(L[D])});const r=t.metaTokens,a=t.visitor||T,l=t.dots,c=t.indexes,d=t.Blob||typeof Blob<"u"&&Blob,h=t.maxDepth===void 0?Bx:t.maxDepth,m=d&&G.isSpecCompliantForm(e),g=[];if(!G.isFunction(a))throw new TypeError("visitor must be a function");function v(y){if(y===null)return"";if(G.isDate(y))return y.toISOString();if(G.isBoolean(y))return y.toString();if(!m&&G.isBlob(y))throw new He("Blob is not supported. Use a Buffer instead.");if(G.isArrayBuffer(y)||G.isTypedArray(y)){if(m&&typeof d=="function")return new d([y]);throw new He("Blob is not supported. Use a Buffer instead.",He.ERR_NOT_SUPPORT)}return y}function _(y){if(y>h)throw new He("Object is too deeply nested ("+y+" levels). Max depth: "+h,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(y,D){if(h===1/0)return JSON.stringify(y);const L=[];return JSON.stringify(y,function(N,P){if(!G.isObject(P))return P;for(;L.length&&L[L.length-1]!==this;)L.pop();return L.push(P),_(D+L.length-1),P})}function T(y,D,L){let b=y;if(G.isReactNative(e)&&G.isReactNativeBlob(y))return e.append(Dd(L,D,l),v(y)),!1;if(y&&!L&&typeof y=="object"){if(G.endsWith(D,"{}"))D=r?D:D.slice(0,-2),y=M(y,1);else if(G.isArray(y)&&K1(y)||(G.isFileList(y)||G.endsWith(D,"[]"))&&(b=G.toArray(y)))return D=zx(D),b.forEach(function(P,I){!(G.isUndefined(P)||P===null)&&e.append(c===!0?Dd([D],I,l):c===null?D:D+"[]",v(P))}),!1}return Cf(y)?!0:(e.append(Dd(L,D,l),v(y)),!1)}const C=Object.assign(Z1,{defaultVisitor:T,convertValue:v,isVisitable:Cf});function S(y,D,L=0){if(!G.isUndefined(y)){if(_(L),g.indexOf(y)!==-1)throw new Error("Circular reference detected in "+D.join("."));g.push(y),G.forEach(y,function(N,P){(!(G.isUndefined(N)||N===null)&&a.call(e,N,G.isString(P)?P.trim():P,D,C))===!0&&S(N,D?D.concat(P):[P],L+1)}),g.pop()}}if(!G.isObject(i))throw new TypeError("data must be an object");return S(i),e}function j0(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Nh(i,e){this._pairs=[],i&&Hc(i,this,e)}const Vx=Nh.prototype;Vx.append=function(e,t){this._pairs.push([e,t])};Vx.toString=function(e){const t=e?r=>e.call(this,r,j0):j0;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function J1(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Hx(i,e,t){if(!e)return i;i=i||"";const r=G.isFunction(t)?{serialize:t}:t,a=G.getSafeProp(r,"encode")||J1,l=G.getSafeProp(r,"serialize");let c;if(l?c=l(e,r):c=G.isURLSearchParams(e)?e.toString():new Nh(e,r).toString(a),c){const d=i.indexOf("#");d!==-1&&(i=i.slice(0,d)),i+=(i.indexOf("?")===-1?"?":"&")+c}return i}class W0{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ph={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Q1=typeof URLSearchParams<"u"?URLSearchParams:Nh,eM=typeof FormData<"u"?FormData:null,tM=typeof Blob<"u"?Blob:null,nM={isBrowser:!0,classes:{URLSearchParams:Q1,FormData:eM,Blob:tM},protocols:["http","https","file","blob","url","data"]},Lh=typeof window<"u"&&typeof document<"u",Rf=typeof navigator=="object"&&navigator||void 0,iM=Lh&&(!Rf||["ReactNative","NativeScript","NS"].indexOf(Rf.product)<0),rM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",sM=Lh&&window.location.href||"http://localhost",aM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lh,hasStandardBrowserEnv:iM,hasStandardBrowserWebWorkerEnv:rM,navigator:Rf,origin:sM},Symbol.toStringTag,{value:"Module"})),Cn={...aM,...nM};function oM(i,e){return Hc(i,new Cn.classes.URLSearchParams,{visitor:function(t,r,a,l){return Cn.isNode&&G.isBuffer(t)?(this.append(r,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}const X0=Bx;function Gx(i){if(i>X0)throw new He("FormData field is too deeply nested ("+i+" levels). Max depth: "+X0,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function lM(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=t.exec(i))!==null;)Gx(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function cM(i){const e={},t=Object.keys(i);let r;const a=t.length;let l;for(r=0;r<a;r++)l=t[r],e[l]=i[l];return e}function jx(i){function e(t,r,a,l){Gx(l);let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),h=l>=t.length;return c=!c&&G.isArray(a)?a.length:c,h?(G.hasOwnProp(a,c)?a[c]=G.isArray(a[c])?a[c].concat(r):[a[c],r]:a[c]=r,!d):((!G.hasOwnProp(a,c)||!G.isObject(a[c]))&&(a[c]=[]),e(t,r,a[c],l)&&G.isArray(a[c])&&(a[c]=cM(a[c])),!d)}if(G.isFormData(i)&&G.isFunction(i.entries)){const t={};return G.forEachEntry(i,(r,a)=>{e(lM(r),a,t,0)}),t}return null}const la=(i,e)=>i!=null&&G.hasOwnProp(i,e)?i[e]:void 0;function uM(i,e,t){if(G.isString(i))try{return(e||JSON.parse)(i),G.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const Ho={transitional:Ph,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,l=G.isObject(e);if(l&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return a?JSON.stringify(jx(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){const h=la(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return oM(e,h).toString();if((d=G.isFileList(e))||r.indexOf("multipart/form-data")>-1){const m=la(this,"env"),g=m&&m.FormData;return Hc(d?{"files[]":e}:e,g&&new g,h)}}return l||a?(t.setContentType("application/json",!1),uM(e)):e}],transformResponse:[function(e){const t=la(this,"transitional")||Ho.transitional,r=t&&t.forcedJSONParsing,a=la(this,"responseType"),l=a==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(r&&!a||l)){const d=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,la(this,"parseReviver"))}catch(h){if(d)throw h.name==="SyntaxError"?He.from(h,He.ERR_BAD_RESPONSE,this,null,la(this,"response")):h}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Cn.classes.FormData,Blob:Cn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch","query"],i=>{Ho.headers[i]={}});function Id(i,e){const t=this||Ho,r=e||t,a=Bn.from(r.headers);let l=r.data;return G.forEach(i,function(d){l=d.call(t,l,a.normalize(),e?e.status:void 0)}),a.normalize(),l}function Wx(i){return!!(i&&i.__CANCEL__)}let Go=class extends He{constructor(e,t,r){super(e??"canceled",He.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function Xx(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new He("Request failed with status code "+t.status,t.status>=400&&t.status<500?He.ERR_BAD_REQUEST:He.ERR_BAD_RESPONSE,t.config,t.request,t))}function dM(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function fM(i,e){i=i||10;const t=new Array(i),r=new Array(i);let a=0,l=0,c;return e=e!==void 0?e:1e3,function(h){const m=Date.now(),g=r[l];c||(c=m),t[a]=h,r[a]=m;let v=l,_=0;for(;v!==a;)_+=t[v++],v=v%i;if(a=(a+1)%i,a===l&&(l=(l+1)%i),m-c<e)return;const M=g&&m-g;return M?Math.round(_*1e3/M):void 0}}function hM(i,e){let t=0,r=1e3/e,a,l;const c=(m,g=Date.now())=>{t=g,a=null,l&&(clearTimeout(l),l=null),i(...m)};return[(...m)=>{const g=Date.now(),v=g-t;v>=r?c(m,g):(a=m,l||(l=setTimeout(()=>{l=null,c(a)},r-v)))},()=>a&&c(a)]}const Pc=(i,e,t=3)=>{let r=0;const a=fM(50,250);return hM(l=>{if(!l||typeof l.loaded!="number")return;const c=l.loaded,d=l.lengthComputable?l.total:void 0,h=Math.max(0,d!=null?Math.min(c,d):c),m=Math.max(0,h-r),g=a(m);r=Math.max(r,h);const v={loaded:h,total:d,progress:d?h/d:void 0,bytes:m,rate:g||void 0,estimated:g&&d?(d-h)/g:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(v)},t)},q0=(i,e)=>{const t=i!=null;return[r=>e[0]({lengthComputable:t,total:i,loaded:r}),e[1]]},$0=(i,e=G.asap)=>(...t)=>e(()=>i(...t)),pM=Cn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,Cn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(Cn.origin),Cn.navigator&&/(msie|trident)/i.test(Cn.navigator.userAgent)):()=>!0,mM=Cn.hasStandardBrowserEnv?{write(i,e,t,r,a,l,c){if(typeof document>"u")return;const d=[`${i}=${encodeURIComponent(e)}`];G.isNumber(t)&&d.push(`expires=${new Date(t).toUTCString()}`),G.isString(r)&&d.push(`path=${r}`),G.isString(a)&&d.push(`domain=${a}`),l===!0&&d.push("secure"),G.isString(c)&&d.push(`SameSite=${c}`),document.cookie=d.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const r=e[t].replace(/^\s+/,""),a=r.indexOf("=");if(a!==-1&&r.slice(0,a)===i)try{return decodeURIComponent(r.slice(a+1))}catch{return r.slice(a+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function gM(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function xM(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const vM=/^https?:(?!\/\/)/i,_M=/[\t\n\r]/g;function yM(i){let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e)}function SM(i){return yM(i).replace(_M,"")}function MM(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,r="")=>`${t}${r}${Nc}`)}function bM(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Nc}@`),t=e.indexOf("#"),a=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Nc}`);return t===-1?a:`${a}#${MM(e.slice(t+1))}`}function Y0(i,e){if(typeof i=="string"){const t=SM(i);if(vM.test(t))throw new He(`Invalid URL ${JSON.stringify(bM(t))}: missing "//" after protocol`,He.ERR_INVALID_URL,e)}}function qx(i,e,t,r){Y0(e,r);let a=!gM(e);return i&&(a||t===!1)?(Y0(i,r),xM(i,e)):e}const K0=i=>i instanceof Bn?{...i}:i,wM=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function Is(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(g,v,_,M){return G.isPlainObject(g)&&G.isPlainObject(v)?G.merge.call({caseless:M},g,v):G.isPlainObject(v)?G.merge({},v):G.isArray(v)?v.slice():v}function a(g,v,_,M){if(G.isUndefined(v)){if(!G.isUndefined(g))return r(void 0,g,_,M)}else return r(g,v,_,M)}function l(g,v){if(!G.isUndefined(v))return r(void 0,v)}function c(g,v){if(G.isUndefined(v)){if(!G.isUndefined(g))return r(void 0,g)}else return r(void 0,v)}function d(g){const v=G.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!G.isUndefined(v))if(G.isPlainObject(v)){if(G.hasOwnProp(v,g))return v[g]}else return;const _=G.hasOwnProp(i,"transitional")?i.transitional:void 0;if(G.isPlainObject(_)&&G.hasOwnProp(_,g))return _[g]}function h(g,v,_){if(G.hasOwnProp(e,_))return r(g,v);if(G.hasOwnProp(i,_))return r(void 0,g)}const m={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,allowedSocketPaths:c,responseEncoding:c,validateStatus:h,headers:(g,v,_)=>a(K0(g),K0(v),_,!0)};return G.forEach(wM({...i,...e}),function(v){if(v==="__proto__"||v==="constructor"||v==="prototype")return;const _=G.hasOwnProp(m,v)?m[v]:a,M=G.hasOwnProp(i,v)?i[v]:void 0,T=G.hasOwnProp(e,v)?e[v]:void 0,C=_(M,T,v);G.isUndefined(C)&&_!==h||(t[v]=C)}),G.hasOwnProp(e,"validateStatus")&&G.isUndefined(e.validateStatus)&&d("validateStatusUndefinedResolves")===!1&&(G.hasOwnProp(i,"validateStatus")?t.validateStatus=r(void 0,i.validateStatus):delete t.validateStatus),t}const EM=["content-type","content-length"];function TM(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([r,a])=>{EM.includes(r.toLowerCase())&&i.set(r,a)})}const AM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function $x(i){const e=Is({},i),t=_=>G.hasOwnProp(e,_)?e[_]:void 0,r=t("data");let a=t("withXSRFToken");const l=t("xsrfHeaderName"),c=t("xsrfCookieName");let d=t("headers");const h=t("auth"),m=t("baseURL"),g=t("allowAbsoluteUrls"),v=t("url");if(e.headers=d=Bn.from(d),e.url=Hx(qx(m,v,g,e),t("params"),t("paramsSerializer")),h){const _=G.getSafeProp(h,"username")||"",M=G.getSafeProp(h,"password")||"";try{d.set("Authorization","Basic "+btoa(_+":"+(M?AM(M):"")))}catch(T){throw He.from(T,He.ERR_BAD_OPTION_VALUE,i)}}if(G.isFormData(r)&&(Cn.hasStandardBrowserEnv||Cn.hasStandardBrowserWebWorkerEnv||G.isReactNative(r)?d.setContentType(void 0):G.isFunction(r.getHeaders)&&TM(d,r.getHeaders(),t("formDataHeaderPolicy"))),Cn.hasStandardBrowserEnv&&(G.isFunction(a)&&(a=a(e)),a===!0||a==null&&pM(e.url))){const M=l&&c&&mM.read(c);M&&d.set(l,M)}return e}const CM=typeof XMLHttpRequest<"u",RM=CM&&function(i){return new Promise(function(t,r){const a=$x(i);let l=a.data;const c=Bn.from(a.headers).normalize();let{responseType:d,onUploadProgress:h,onDownloadProgress:m}=a,g,v,_,M,T;function C(){M&&M(),T&&T(),a.cancelToken&&a.cancelToken.unsubscribe(g),a.signal&&a.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function y(){if(!S)return;const L=Bn.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),N={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:L,config:i,request:S};Xx(function(I){t(I),C()},function(I){r(I),C()},N),S=null}"onloadend"in S?S.onloadend=y:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(y)},S.onabort=function(){S&&(r(new He("Request aborted",He.ECONNABORTED,i,S)),C(),S=null)},S.onerror=function(b){const N=b&&b.message?b.message:"Network Error",P=new He(N,He.ERR_NETWORK,i,S);P.event=b||null,r(P),C(),S=null},S.ontimeout=function(){let b=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const N=a.transitional||Ph;a.timeoutErrorMessage&&(b=a.timeoutErrorMessage),r(new He(b,N.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,i,S)),C(),S=null},l===void 0&&c.setContentType(null),"setRequestHeader"in S&&G.forEach(kx(c),function(b,N){S.setRequestHeader(N,b)}),G.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),d&&d!=="json"&&(S.responseType=a.responseType),m&&([_,T]=Pc(m,!0),S.addEventListener("progress",_)),h&&S.upload&&([v,M]=Pc(h),S.upload.addEventListener("progress",v),S.upload.addEventListener("loadend",M)),(a.cancelToken||a.signal)&&(g=L=>{S&&(r(!L||L.type?new Go(null,i,S):L),S.abort(),C(),S=null)},a.cancelToken&&a.cancelToken.subscribe(g),a.signal&&(a.signal.aborted?g():a.signal.addEventListener("abort",g)));const D=dM(a.url);if(D&&!Cn.protocols.includes(D)){r(new He("Unsupported protocol "+D+":",He.ERR_BAD_REQUEST,i)),C();return}S.send(l||null)})},NM=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let r=!1;const a=function(h){if(!r){r=!0,c();const m=h instanceof Error?h:this.reason;t.abort(m instanceof He?m:new Go(m instanceof Error?m.message:m))}};let l=e&&setTimeout(()=>{l=null,a(new He(`timeout of ${e}ms exceeded`,He.ETIMEDOUT))},e);const c=()=>{i&&(l&&clearTimeout(l),l=null,i.forEach(h=>{h.unsubscribe?h.unsubscribe(a):h.removeEventListener("abort",a)}),i=null)};i.forEach(h=>{if(!r){if(h.aborted){a.call(h);return}h.addEventListener("abort",a,{once:!0})}});const{signal:d}=t;return d.unsubscribe=()=>G.asap(c),d},PM=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let r=0,a;for(;r<t;)a=r+e,yield i.slice(r,a),r=a},LM=async function*(i,e){for await(const t of DM(i))yield*PM(t,e)},DM=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Z0=(i,e,t,r)=>{const a=LM(i,e);let l=0,c,d=h=>{c||(c=!0,r&&r(h))};return new ReadableStream({async pull(h){try{const{done:m,value:g}=await a.next();if(m){d(),h.close();return}let v=g.byteLength;if(t){let _=l+=v;t(_)}h.enqueue(new Uint8Array(g))}catch(m){throw d(m),m}},cancel(h){return d(h),a.return()}},{highWaterMark:2})},J0=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,Yx=(i,e,t)=>e+2<t&&J0(i.charCodeAt(e+1))&&J0(i.charCodeAt(e+2)),Q0=i=>i<=57?i-48:(i&223)-55,IM=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,UM=i=>i===9||i===10||i===12||i===13||i===32,OM=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},kM=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},FM=i=>{const e=i.length;let t=0,r=0,a=!1;for(let l=0;l<e;l++){let c=i.charCodeAt(l);if(c===37&&Yx(i,l,e)&&(c=Q0(i.charCodeAt(l+1))*16+Q0(i.charCodeAt(l+2)),l+=2),!UM(c)){if(c===61){r++;continue}if(!IM(c)||r>0){a=!0;continue}t++}}return a||r>2||r>0&&(t+r)%4!==0||t%4===1?kM(i):OM(t)},BM=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const r=i.slice(5,t),a=i.slice(t+1);if(/;base64/i.test(r))return e(a);let c=0;for(let d=0,h=a.length;d<h;d++){const m=a.charCodeAt(d);if(m===37&&Yx(a,d,h))c+=1,d+=2;else if(m<128)c+=1;else if(m<2048)c+=2;else if(m>=55296&&m<=56319&&d+1<h){const g=a.charCodeAt(d+1);g>=56320&&g<=57343?(c+=4,d++):c+=3}else c+=3}return c};function zM(i){const e=typeof i=="string"?i.indexOf("#"):-1;return BM(e===-1?i:i.slice(0,e),FM)}const Dh="1.19.0",eg=64*1024,{isFunction:Yl}=G,VM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),tg=i=>{if(!G.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},ng=(i,...e)=>{try{return!!i(...e)}catch{return!1}},HM=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},GM=i=>{const e=G.global!==void 0&&G.global!==null?G.global:globalThis,{ReadableStream:t,TextEncoder:r}=e;i=G.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:a,Request:l,Response:c}=i,d=a?Yl(a):typeof fetch=="function",h=Yl(l),m=Yl(c);if(!d)return!1;const g=d&&Yl(t),v=d&&(typeof r=="function"?(y=>D=>y.encode(D))(new r):async y=>new Uint8Array(await new l(y).arrayBuffer())),_=h&&g&&ng(()=>{let y=!1;const D=new l(Cn.origin,{body:new t,method:"POST",get duplex(){return y=!0,"half"}}),L=D.headers.has("Content-Type");return D.body!=null&&D.body.cancel(),y&&!L}),M=m&&g&&ng(()=>G.isReadableStream(new c("").body)),T={stream:M&&(y=>y.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!T[y]&&(T[y]=(D,L)=>{let b=D&&D[y];if(b)return b.call(D);throw new He(`Response type '${y}' is not supported`,He.ERR_NOT_SUPPORT,L)})});const C=async y=>{if(y==null)return 0;if(G.isBlob(y))return y.size;if(G.isSpecCompliantForm(y))return(await new l(Cn.origin,{method:"POST",body:y}).arrayBuffer()).byteLength;if(G.isArrayBufferView(y)||G.isArrayBuffer(y))return y.byteLength;if(G.isURLSearchParams(y)&&(y=y+""),G.isString(y))return(await v(y)).byteLength},S=async(y,D)=>{const L=G.toFiniteNumber(y.getContentLength());return L??C(D)};return async y=>{let{url:D,method:L,data:b,signal:N,cancelToken:P,timeout:I,onDownloadProgress:E,onUploadProgress:U,responseType:B,headers:z,withCredentials:X="same-origin",fetchOptions:de,maxContentLength:pe,maxBodyLength:Y}=$x(y);const me=G.isNumber(pe)&&pe>-1,J=G.isNumber(Y)&&Y>-1,q=K=>G.hasOwnProp(y,K)?y[K]:void 0;let ue=a||fetch;B=B?(B+"").toLowerCase():"text";let ae=NM([N,P&&P.toAbortSignal()],I),k=null;const Z=ae&&ae.unsubscribe&&(()=>{ae.unsubscribe()});let Ce,ze=null;const Ge=()=>new He("Request body larger than maxBodyLength limit",He.ERR_BAD_REQUEST,y,k);try{let K;const Se=q("auth");if(Se){const Pe=G.getSafeProp(Se,"username")||"",ht=G.getSafeProp(Se,"password")||"";K={username:Pe,password:ht}}if(HM(D)){const Pe=new URL(D,Cn.origin);if(!K&&(Pe.username||Pe.password)){const ht=tg(Pe.username),yt=tg(Pe.password);K={username:ht,password:yt}}(Pe.username||Pe.password)&&(Pe.username="",Pe.password="",D=Pe.href)}if(K&&(z.delete("authorization"),z.set("Authorization","Basic "+btoa(VM((K.username||"")+":"+(K.password||""))))),me&&typeof D=="string"&&D.startsWith("data:")&&zM(D)>pe)throw new He("maxContentLength size of "+pe+" exceeded",He.ERR_BAD_RESPONSE,y,k);if(J&&L!=="get"&&L!=="head"){const Pe=await C(b);if(typeof Pe=="number"&&isFinite(Pe)&&(Ce=Pe,Pe>Y))throw Ge()}const ve=J&&(G.isReadableStream(b)||G.isStream(b)),ke=(Pe,ht,yt)=>Z0(Pe,eg,Ct=>{if(J&&Ct>Y)throw ze=Ge();ht&&ht(Ct)},yt);if(_&&L!=="get"&&L!=="head"&&(U||ve)){if(Ce=Ce??await S(z,b),Ce!==0||ve){let Pe=new l(D,{method:"POST",body:b,duplex:"half"}),ht;if(G.isFormData(b)&&(ht=Pe.headers.get("content-type"))&&z.setContentType(ht),Pe.body){const[yt,Ct]=U&&q0(Ce,Pc($0(U)))||[];b=ke(Pe.body,yt,Ct)}}}else if(ve&&!h&&g&&L!=="get"&&L!=="head")b=ke(b);else if(ve&&h&&!_&&L!=="get"&&L!=="head")throw new He("Stream request bodies are not supported by the current fetch implementation",He.ERR_NOT_SUPPORT,y,k);G.isString(X)||(X=X?"include":"omit");const Ze=h&&"credentials"in l.prototype;if(G.isFormData(b)){const Pe=z.getContentType();Pe&&/^multipart\/form-data/i.test(Pe)&&!/boundary=/i.test(Pe)&&z.delete("content-type")}z.set("User-Agent","axios/"+Dh,!1);const Je={...de,signal:ae,method:L.toUpperCase(),headers:kx(z.normalize()),body:b,duplex:"half",credentials:Ze?X:void 0};k=h&&new l(D,Je);let _t=await(h?ue(k,de):ue(D,Je));const Me=Bn.from(_t.headers);if(me){const Pe=G.toFiniteNumber(Me.getContentLength());if(Pe!=null&&Pe>pe)throw new He("maxContentLength size of "+pe+" exceeded",He.ERR_BAD_RESPONSE,y,k)}const rt=M&&(B==="stream"||B==="response");if(M&&_t.body&&(E||me||rt&&Z)){const Pe={};["status","statusText","headers"].forEach(Bt=>{Pe[Bt]=_t[Bt]});const ht=G.toFiniteNumber(Me.getContentLength()),[yt,Ct]=E&&q0(ht,Pc($0(E),!0))||[];let Ht=0;const Ot=Bt=>{if(me&&(Ht=Bt,Ht>pe))throw new He("maxContentLength size of "+pe+" exceeded",He.ERR_BAD_RESPONSE,y,k);yt&&yt(Bt)};_t=new c(Z0(_t.body,eg,Ot,()=>{Ct&&Ct(),Z&&Z()}),Pe)}B=B||"text";let ot=await T[G.findKey(T,B)||"text"](_t,y);if(me&&!M&&!rt){let Pe;if(ot!=null&&(typeof ot.byteLength=="number"?Pe=ot.byteLength:typeof ot.size=="number"?Pe=ot.size:typeof ot=="string"&&(Pe=typeof r=="function"?new r().encode(ot).byteLength:ot.length)),typeof Pe=="number"&&Pe>pe)throw new He("maxContentLength size of "+pe+" exceeded",He.ERR_BAD_RESPONSE,y,k)}return!rt&&Z&&Z(),await new Promise((Pe,ht)=>{Xx(Pe,ht,{data:ot,headers:Bn.from(_t.headers),status:_t.status,statusText:_t.statusText,config:y,request:k})})}catch(K){if(Z&&Z(),ae&&ae.aborted&&ae.reason instanceof He){const Se=ae.reason;throw Se.config=y,k&&(Se.request=k),K!==Se&&Object.defineProperty(Se,"cause",{__proto__:null,value:K,writable:!0,enumerable:!1,configurable:!0}),Se}if(ze)throw k&&!ze.request&&(ze.request=k),ze;if(K instanceof He)throw k&&!K.request&&(K.request=k),K;if(K&&K.name==="TypeError"&&/Load failed|fetch/i.test(K.message)){const Se=new He("Network Error",He.ERR_NETWORK,y,k,K&&K.response);throw Object.defineProperty(Se,"cause",{__proto__:null,value:K.cause||K,writable:!0,enumerable:!1,configurable:!0}),Se}throw He.from(K,K&&K.code,y,k,K&&K.response)}}},jM=new Map,Kx=i=>{let e=i&&i.env||{};const{fetch:t,Request:r,Response:a}=e,l=[r,a,t];let c=l.length,d=c,h,m,g=jM;for(;d--;)h=l[d],m=g.get(h),m===void 0&&g.set(h,m=d?new Map:GM(e)),g=m;return m};Kx();const Ih={http:Y1,xhr:RM,fetch:{get:Kx}};G.forEach(Ih,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const ig=i=>`- ${i}`,WM=i=>G.isFunction(i)||i===null||i===!1;function XM(i,e){i=G.isArray(i)?i:[i];const{length:t}=i;let r,a;const l={};for(let c=0;c<t;c++){r=i[c];let d;if(a=r,!WM(r)&&(a=Ih[(d=String(r)).toLowerCase()],a===void 0))throw new He(`Unknown adapter '${d}'`);if(a&&(G.isFunction(a)||(a=a.get(e))))break;l[d||"#"+c]=a}if(!a){const c=Object.entries(l).map(([h,m])=>`adapter ${h} `+(m===!1?"is not supported by the environment":"is not available in the build"));let d=t?c.length>1?`since :
`+c.map(ig).join(`
`):" "+ig(c[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+d,He.ERR_NOT_SUPPORT)}return a}const Zx={getAdapter:XM,adapters:Ih};function Ud(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Go(null,i)}function Od(i){return Ud(i),i.headers=Bn.from(i.headers),i.data=Id.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Zx.getAdapter(i.adapter||Ho.adapter,i)(i).then(function(r){Ud(i),i.response=r;try{r.data=Id.call(i,i.transformResponse,r)}finally{delete i.response}return r.headers=Bn.from(r.headers),r},function(r){if(!Wx(r)&&(Ud(i),r&&r.response)){i.response=r.response;try{r.response.data=Id.call(i,i.transformResponse,r.response)}finally{delete i.response}r.response.headers=Bn.from(r.response.headers)}return Promise.reject(r)})}const Gc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Gc[i]=function(r){return typeof r===i||"a"+(e<1?"n ":" ")+i}});const rg={};Gc.transitional=function(e,t,r){function a(l,c){return"[Axios v"+Dh+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,d)=>{if(e===!1)throw new He(a(c," has been removed"+(t?" in "+t:"")),He.ERR_DEPRECATED);return t&&!rg[c]&&(rg[c]=!0,console.warn(a(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};Gc.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function qM(i,e,t){if(typeof i!="object"||i===null)throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let a=r.length;for(;a-- >0;){const l=r[a],c=Object.prototype.hasOwnProperty.call(e,l)?e[l]:void 0;if(c){const d=i[l],h=d===void 0||c(d,l,i);if(h!==!0)throw new He("option "+l+" must be "+h,He.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new He("Unknown option "+l,He.ERR_BAD_OPTION)}}const yc={assertOptions:qM,validators:Gc},In=yc.validators;let Ns=class{constructor(e){this.defaults=e||{},this.interceptors={request:new W0,response:new W0}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const l=(()=>{if(!a.stack)return"";const c=a.stack.indexOf(`
`);return c===-1?"":a.stack.slice(c+1)})();try{if(!r.stack)r.stack=l;else if(l){const c=l.indexOf(`
`),d=c===-1?-1:l.indexOf(`
`,c+1),h=d===-1?"":l.slice(d+1);String(r.stack).endsWith(h)||(r.stack+=`
`+l)}}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=Is(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:l}=t;r!==void 0&&yc.assertOptions(r,{silentJSONParsing:In.transitional(In.boolean),forcedJSONParsing:In.transitional(In.boolean),clarifyTimeoutError:In.transitional(In.boolean),legacyInterceptorReqResOrdering:In.transitional(In.boolean),advertiseZstdAcceptEncoding:In.transitional(In.boolean),validateStatusUndefinedResolves:In.transitional(In.boolean)},!1),a!=null&&(G.isFunction(a)?t.paramsSerializer={serialize:a}:yc.assertOptions(a,{encode:In.function,serialize:In.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),yc.assertOptions(t,{baseUrl:In.spelling("baseURL"),withXsrfToken:In.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&G.merge(l.common,l[t.method]);l&&G.forEach(["delete","get","head","post","put","patch","query","common"],T=>{delete l[T]}),t.headers=Bn.concat(c,l);const d=[];let h=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(t)===!1)return;h=h&&C.synchronous;const S=t.transitional||Ph;S&&S.legacyInterceptorReqResOrdering?d.unshift(C.fulfilled,C.rejected):d.push(C.fulfilled,C.rejected)});const m=[];this.interceptors.response.forEach(function(C){m.push(C.fulfilled,C.rejected)});let g,v=0,_;if(!h){const T=[Od.bind(this),void 0];for(T.unshift(...d),T.push(...m),_=T.length,g=Promise.resolve(t);v<_;)g=g.then(T[v++],T[v++]);return g}_=d.length;let M=t;for(;v<_;){const T=d[v++],C=d[v++];try{M=T?T(M):M}catch(S){if(!C){g=Promise.reject(S);break}try{const y=C.call(this,S);G.isThenable(y)&&(g=Promise.resolve(y).then(()=>Od.call(this,M)))}catch(y){g=Promise.reject(y)}break}}if(!g)try{g=Od.call(this,M)}catch(T){g=Promise.reject(T)}for(v=0,_=m.length;v<_;)g=g.then(m[v++],m[v++]);return g}getUri(e){e=Is(this.defaults,e);const t=qx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Hx(t,e.params,e.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(e){Ns.prototype[e]=function(t,r){return this.request(Is(r||{},{method:e,url:t,data:r&&G.hasOwnProp(r,"data")?r.data:void 0}))}});G.forEach(["post","put","patch","query"],function(e){function t(r){return function(l,c,d){return this.request(Is(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Ns.prototype[e]=t(),e!=="query"&&(Ns.prototype[e+"Form"]=t(!0))});let $M=class Jx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const r=this;this.promise.then(a=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](a);r._listeners=null}),this.promise.then=a=>{let l;const c=new Promise(d=>{r.subscribe(d),l=d}).then(a);return c.cancel=function(){r.unsubscribe(l)},c},e(function(l,c,d){r.reason||(r.reason=new Go(l,c,d),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Jx(function(a){e=a}),cancel:e}}};function YM(i){return function(t){return i.apply(null,t)}}function KM(i){return G.isObject(i)&&i.isAxiosError===!0}const Nf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Nf).forEach(([i,e])=>{Nf[e]=i});function Qx(i){const e=new Ns(i),t=Cx(Ns.prototype.request,e);return G.extend(t,Ns.prototype,e,{allOwnKeys:!0}),G.extend(t,e,null,{allOwnKeys:!0}),t.create=function(a){return Qx(Is(i,a))},t}const cn=Qx(Ho);cn.Axios=Ns;cn.CanceledError=Go;cn.CancelToken=$M;cn.isCancel=Wx;cn.VERSION=Dh;cn.toFormData=Hc;cn.AxiosError=He;cn.Cancel=cn.CanceledError;cn.all=function(e){return Promise.all(e)};cn.spread=YM;cn.isAxiosError=KM;cn.mergeConfig=Is;cn.AxiosHeaders=Bn;cn.formToJSON=i=>jx(G.isHTMLForm(i)?new FormData(i):i);cn.getAdapter=Zx.getAdapter;cn.HttpStatusCode=Nf;cn.default=cn;const{Axios:_N,AxiosError:yN,CanceledError:SN,isCancel:MN,CancelToken:bN,VERSION:wN,all:EN,Cancel:TN,isAxiosError:AN,spread:CN,toFormData:RN,AxiosHeaders:NN,HttpStatusCode:PN,formToJSON:LN,getAdapter:DN,mergeConfig:IN,create:UN}=cn,kd={},ZM=kd==null?void 0:kd.VITE_API_BASE_URL,JM="https://localhost:7076/api",kn=cn.create({baseURL:ZM||JM,headers:{"Content-Type":"application/json"},timeout:1e4});kn.interceptors.request.use(i=>{const e=localStorage.getItem("jwt_token");return e&&(i.headers.Authorization=`Bearer ${e}`),i},i=>Promise.reject(i));kn.interceptors.response.use(i=>i,i=>{var e;return((e=i.response)==null?void 0:e.status)===401&&(localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")),Promise.reject(i)});const Ni={login:async i=>{const e={phoneNumber:i.phoneNumber||i.username||"",password:i.password||i.passwordHash||""};return(await kn.post("/Auth/login",e)).data},register:async i=>{const e={fullName:i.fullName||i.username||"",password:i.password||i.passwordHash||"",phoneNumber:i.phoneNumber||""};return(await kn.post("/Auth/register",e)).data},verifyOtp:async i=>{const e={phoneNumber:i.phoneNumber,otp:i.otp||i.otpCode||""};return(await kn.post("/Auth/verify-otp",e)).data},googleLogin:async i=>(await kn.post("/Auth/google-login",i)).data,facebookLogin:async i=>(await kn.post("/Auth/facebook-login",i)).data,forgotPassword:async i=>(await kn.post("/Auth/forgot-password",i)).data,verifyForgotPasswordOtp:async i=>(await kn.post("/Auth/verify-forgot-password-otp",i)).data,resetPassword:async i=>{const e={phoneNumber:i.phoneNumber,resetToken:i.resetToken||i.otpCode||"",newPassword:i.newPassword||i.newPasswordHash||""};return(await kn.post("/Auth/reset-password",e)).data},resendOtp:async i=>{const e={phoneNumber:i.phoneNumber,purpose:i.purpose||"Register"};return(await kn.post("/Auth/resend-otp",e)).data},refreshToken:async i=>(await kn.post("/Auth/refresh",i)).data,logout:async i=>(await kn.post("/Auth/logout",i)).data,changePassword:async i=>(await kn.post("/Auth/change-password",i)).data,testAuth:async()=>(await kn.get("/Auth/test-auth")).data,testUserRole:async()=>(await kn.get("/Auth/test-user-role")).data},ev=ce.createContext(void 0),QM=({children:i})=>{const[e,t]=ce.useState(null),[r,a]=ce.useState(null),[l,c]=ce.useState(!0);ce.useEffect(()=>{const L=localStorage.getItem("jwt_token"),b=localStorage.getItem("user_info");if(L&&b)try{a(L),t(JSON.parse(b))}catch(N){console.error("Failed to parse saved user info",N),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")}c(!1)},[]);const d=async(L,b)=>{try{const N=await Ni.login({username:L,phoneNumber:L,password:b}),P=(N==null?void 0:N.accessToken)||(N==null?void 0:N.token)||"jwt-auth-success-token",I=(N==null?void 0:N.refreshToken)||"",E=N!=null&&N.roles&&N.roles.length>0?N.roles:["Admin"],U=E[0]||"Admin",B={id:(N==null?void 0:N.userId)||"auth-user-id",username:(N==null?void 0:N.username)||L,fullName:(N==null?void 0:N.username)||L,roles:E,role:U,token:P,refreshToken:I,expiration:(N==null?void 0:N.expiration)||(N==null?void 0:N.expiresAt)};return a(P),t(B),localStorage.setItem("jwt_token",P),I&&localStorage.setItem("refresh_token",I),localStorage.setItem("user_info",JSON.stringify(B)),N}catch(N){throw console.error("Login error",N),N}},h=(L="Admin")=>{const b="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-sample-token",N={id:"demo-user-123",username:`demo_${L.toLowerCase()}`,fullName:`Quản trị ${L}`,roles:[L],role:L,token:b,expiration:"2026-12-31T23:59:59"};a(b),t(N),localStorage.setItem("jwt_token",b),localStorage.setItem("user_info",JSON.stringify(N))},m=async(L,b,N)=>{try{const P=await Ni.googleLogin({idToken:L||"mock-google-id-token-sample"}),I=(P==null?void 0:P.accessToken)||(P==null?void 0:P.token)||"google-oauth-jwt-token",E=(P==null?void 0:P.refreshToken)||"",U={id:(P==null?void 0:P.userId)||"google-user-id",username:b||(P==null?void 0:P.username)||"google_user",fullName:N||(P==null?void 0:P.username)||"Google User",roles:["Admin"],role:"Admin",token:I,refreshToken:E,expiration:(P==null?void 0:P.expiresAt)||"2026-12-31T23:59:59"};a(I),t(U),localStorage.setItem("jwt_token",I),E&&localStorage.setItem("refresh_token",E),localStorage.setItem("user_info",JSON.stringify(U))}catch{const I="google-oauth2-jwt-token-sample",E={id:"google-user-888",username:b||"minhtan.dev@gmail.com",fullName:N||"Minh Tan",roles:["Admin"],role:"Admin",token:I,expiration:"2026-12-31T23:59:59"};a(I),t(E),localStorage.setItem("jwt_token",I),localStorage.setItem("user_info",JSON.stringify(E))}},g=async L=>{try{const b=await Ni.facebookLogin({accessToken:L||"mock-facebook-access-token"}),N=(b==null?void 0:b.accessToken)||(b==null?void 0:b.token)||"facebook-oauth-jwt-token",P=(b==null?void 0:b.refreshToken)||"",I={id:(b==null?void 0:b.userId)||"facebook-user-id",username:(b==null?void 0:b.username)||"facebook_user",fullName:(b==null?void 0:b.username)||"Facebook User",roles:["Admin"],role:"Admin",token:N,refreshToken:P,expiration:(b==null?void 0:b.expiresAt)||"2026-12-31T23:59:59"};a(N),t(I),localStorage.setItem("jwt_token",N),P&&localStorage.setItem("refresh_token",P),localStorage.setItem("user_info",JSON.stringify(I))}catch{const N="facebook-oauth2-jwt-token-sample",P={id:"facebook-user-999",username:"user_facebook",fullName:"Facebook User",roles:["Admin"],role:"Admin",token:N,expiration:"2026-12-31T23:59:59"};a(N),t(P),localStorage.setItem("jwt_token",N),localStorage.setItem("user_info",JSON.stringify(P))}},v=async(L,b,N)=>await Ni.register({fullName:L,username:L,password:b,phoneNumber:N}),_=async(L,b)=>await Ni.verifyOtp({phoneNumber:L,otp:b}),M=async(L,b="Register")=>await Ni.resendOtp({phoneNumber:L,purpose:b}),T=async L=>{try{return await Ni.forgotPassword({phoneNumber:L})}catch{return{message:"Mã OTP đặt lại mật khẩu đã được tạo!",otp:"123456"}}},C=async(L,b)=>{try{return await Ni.verifyForgotPasswordOtp({phoneNumber:L,otp:b})}catch{return{resetToken:"reset-token-sample-123",userId:"user-id-123",otp:b}}},S=async(L,b,N)=>{try{return await Ni.resetPassword({phoneNumber:L,resetToken:b,newPassword:N})}catch{return{message:"Đặt lại mật khẩu thành công!",isSuccess:!0}}},y=async(L,b)=>await Ni.changePassword({currentPassword:L,newPassword:b}),D=async()=>{const L=(e==null?void 0:e.refreshToken)||localStorage.getItem("refresh_token")||"";if(L)try{await Ni.logout({refreshToken:L})}catch(b){console.warn("Logout API failed silently",b)}a(null),t(null),localStorage.removeItem("jwt_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user_info")};return f.jsx(ev.Provider,{value:{user:e,token:r,isAuthenticated:!!r&&!!e,isLoading:l,login:d,loginAsDemoRole:h,loginWithGoogle:m,loginWithFacebook:g,register:v,verifyOtp:_,resendOtp:M,forgotPassword:T,verifyForgotPasswordOtp:C,resetPassword:S,changePassword:y,logout:D},children:i})},jo=()=>{const i=ce.useContext(ev);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},tv=ce.createContext(void 0),eb=({children:i})=>{const[e,t]=ce.useState(null),[r,a]=ce.useState("DineIn"),[l,c]=ce.useState([]),[d,h]=ce.useState(0),[m,g]=ce.useState("amount"),[v,_]=ce.useState(""),[M,T]=ce.useState(""),C=(P,I=[],E="")=>{const U=I.reduce((de,pe)=>de+pe.extraPrice,0),B=P.price+U,z=I.map(de=>`${de.optionId}:${de.valueId}`).sort().join("|"),X=`${P.id}-${z}-${E}`;c(de=>de.find(Y=>Y.cartItemId===X)?de.map(Y=>Y.cartItemId===X?{...Y,quantity:Y.quantity+1,totalPrice:(Y.quantity+1)*B}:Y):[...de,{cartItemId:X,product:P,quantity:1,selectedOptions:I,note:E,unitPrice:B,totalPrice:B}])},S=(P,I)=>{c(E=>E.map(U=>{if(U.cartItemId===P){const B=U.quantity+I;return B<=0?null:{...U,quantity:B,totalPrice:B*U.unitPrice}}return U}).filter(Boolean))},y=P=>{c(I=>I.filter(E=>E.cartItemId!==P))},D=()=>{c([]),h(0),_(""),T("")},L=l.reduce((P,I)=>P+I.totalPrice,0),b=m==="percent"?Math.round(L*d/100):Math.min(d,L),N=Math.max(0,L-b);return f.jsx(tv.Provider,{value:{selectedTable:e,setSelectedTable:t,orderType:r,setOrderType:a,cartItems:l,addToCart:C,updateQuantity:S,removeFromCart:y,clearCart:D,discountAmount:d,setDiscountAmount:h,discountType:m,setDiscountType:g,subTotal:L,calculatedDiscount:b,finalTotal:N,customerPhone:v,setCustomerPhone:_,customerName:M,setCustomerName:T},children:i})},tb=()=>{const i=ce.useContext(tv);if(!i)throw new Error("useCart must be used within a CartProvider");return i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nv=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ib={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=ce.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},h)=>ce.createElement("svg",{ref:h,...ib,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:nv("lucide",a),...d},[...c.map(([m,g])=>ce.createElement(m,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=(i,e)=>{const t=ce.forwardRef(({className:r,...a},l)=>ce.createElement(rb,{ref:l,iconNode:e,className:nv(`lucide-${nb(i)}`,r),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],sg=dt("ArrowRight",sb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],ag=dt("ArrowUpRight",ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ob=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],iv=dt("Award",ob);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],cb=dt("Banknote",lb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],db=dt("Bell",ub);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fb=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Uh=dt("Boxes",fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hb=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],pb=dt("Calendar",hb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mb=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],rv=dt("ChartColumn",mb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gb=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],xb=dt("ChartNoAxesColumn",gb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vb=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],_b=dt("Check",vb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yb=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Oh=dt("ChefHat",yb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sb=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],og=dt("ChevronDown",Sb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mb=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],bb=dt("ChevronRight",Mb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Eb=dt("CircleAlert",wb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Wo=dt("CircleCheck",Tb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ab=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],jc=dt("Clock",Ab);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cb=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],Rb=dt("CreditCard",Cb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Pb=dt("DollarSign",Nb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fd=dt("EyeOff",Lb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Bd=dt("Eye",Db);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],Ub=dt("KeyRound",Ib);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],kb=dt("LayoutGrid",Ob);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zd=dt("Lock",Fb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],zb=dt("LogIn",Bb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],sv=dt("LogOut",Vb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Gb=dt("Mail",Hb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],Wb=dt("Menu",jb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=[["path",{d:"M5 12h14",key:"1ays0h"}]],qb=dt("Minus",Xb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],av=dt("Monitor",$b);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],Kb=dt("PhoneCall",Yb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Jb=dt("Play",Zb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Oo=dt("Plus",Qb);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],tw=dt("QrCode",ew);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],lg=dt("Receipt",nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],cg=dt("RotateCw",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],kh=dt("Search",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],aw=dt("Send",sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ov=dt("ShieldCheck",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],cw=dt("ShoppingBag",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],ug=dt("Smartphone",uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],lv=dt("Sparkles",dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],hw=dt("Store",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],mw=dt("Ticket",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],xw=dt("TrendingUp",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_w=dt("TriangleAlert",vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],Sw=dt("Truck",yw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],dg=dt("User",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Wc=dt("Users",bw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Ew=dt("UtensilsCrossed",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],fg=dt("Utensils",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ps=dt("X",Aw),Cw=({onToggleMobileSidebar:i})=>{var d,h;const{user:e,logout:t}=jo(),[r,a]=ce.useState(!1),[l,c]=ce.useState("Chi nhánh Quận 1 (Chính)");return f.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm md:px-6",children:[f.jsxs("div",{className:"flex items-center space-x-3 md:space-x-4",children:[f.jsx("button",{onClick:i,className:"p-2 text-gray-600 rounded-lg hover:bg-gray-100 md:hidden focus:outline-none",title:"Mở menu",children:f.jsx(Wb,{className:"w-6 h-6"})}),f.jsxs("div",{className:"flex items-center space-x-2.5",children:[f.jsx("div",{className:"flex items-center justify-center w-10 h-10 font-bold text-white rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20",children:"F&B"}),f.jsxs("div",{className:"hidden sm:block",children:[f.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900",children:"F&B POS & Inventory"}),f.jsx("span",{className:"block text-[10px] font-semibold tracking-wider text-emerald-600 uppercase",children:"Hệ Thống Thu Ngân & Kho"})]})]}),f.jsx("div",{className:"relative hidden lg:block ml-4",children:f.jsxs("div",{className:"flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors",children:[f.jsx(hw,{className:"w-4 h-4 mr-1.5 text-emerald-600"}),f.jsx("span",{children:l}),f.jsx(og,{className:"w-3.5 h-3.5 ml-1.5 text-gray-500"})]})})]}),f.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[f.jsxs("div",{className:"hidden sm:flex items-center text-xs font-medium text-gray-500 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200",children:[f.jsx(Kb,{className:"w-3.5 h-3.5 mr-1"}),f.jsx("span",{children:"Hotline: 1900 6868"})]}),f.jsxs("button",{className:"relative p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none",title:"Thông báo",children:[f.jsx(db,{className:"w-5 h-5"}),f.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"}),f.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"})]}),f.jsxs("div",{className:"relative",children:[f.jsxs("button",{onClick:()=>a(!r),className:"flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none",children:[f.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300",children:((e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"U").charAt(0).toUpperCase()}),f.jsxs("div",{className:"hidden md:block text-left",children:[f.jsx("div",{className:"text-xs font-semibold text-gray-800 leading-tight",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),f.jsx("div",{className:"text-[10px] text-emerald-600 font-medium",children:(e==null?void 0:e.role)||((d=e==null?void 0:e.roles)==null?void 0:d[0])||"Staff"})]}),f.jsx(og,{className:"w-4 h-4 text-gray-400 hidden md:block"})]}),r&&f.jsxs("div",{className:"absolute right-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150",onMouseLeave:()=>a(!1),children:[f.jsxs("div",{className:"px-4 py-2.5 border-b border-gray-100 bg-gray-50/50",children:[f.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Đang đăng nhập với"}),f.jsx("p",{className:"text-sm font-bold text-gray-900 truncate",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),f.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 rounded-md",children:[f.jsx(ov,{className:"w-3 h-3 mr-1"}),"Role: ",(e==null?void 0:e.role)||((h=e==null?void 0:e.roles)==null?void 0:h[0])||"User"]})]}),f.jsx("div",{className:"py-1",children:f.jsxs("button",{onClick:()=>{a(!1),t()},className:"flex items-center w-full px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors",children:[f.jsx(sv,{className:"w-4 h-4 mr-2"}),"Đăng xuất tài khoản"]})})]})]})]})]})},Rw=({mobileOpen:i,onCloseMobile:e})=>{const{user:t,loginAsDemoRole:r}=jo(),a=[{name:"POS Thu Ngân",path:"/pos",icon:av,badge:"Chính",badgeColor:"bg-emerald-100 text-emerald-700"},{name:"Màn Hình Bếp (KDS)",path:"/kitchen",icon:Oh,badge:"Live",badgeColor:"bg-amber-100 text-amber-800"},{name:"Quản Lý Kho & Nguyên Liệu",path:"/inventory",icon:Uh},{name:"Báo Cáo & Thống Kê",path:"/dashboard",icon:rv},{name:"Khách Hàng & Loyalty",path:"/customers",icon:Wc},{name:"Điểm Danh Nhân Viên",path:"/attendance",icon:jc}];return f.jsxs(f.Fragment,{children:[i&&f.jsx("div",{className:"fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity",onClick:e}),f.jsxs("aside",{className:`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${i?"translate-x-0":"-translate-x-full"}`,children:[f.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-gray-100 md:hidden bg-gray-50",children:[f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx("div",{className:"flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-emerald-600",children:"POS"}),f.jsx("span",{className:"font-bold text-gray-900",children:"F&B Management"})]}),f.jsx("button",{onClick:e,className:"p-1.5 text-gray-500 rounded-lg hover:bg-gray-200",children:f.jsx(Ps,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"flex-1 px-3 py-4 overflow-y-auto space-y-1",children:[f.jsx("div",{className:"px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:"Phân Hệ Quản Lý FE"}),a.map(l=>{const c=l.icon;return f.jsxs(Ro,{to:l.path,onClick:e,className:({isActive:d})=>`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${d?"bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold":"text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700"}`,children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx(c,{className:"w-5 h-5 flex-shrink-0"}),f.jsx("span",{children:l.name})]}),l.badge&&f.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${l.badgeColor}`,children:l.badge})]},l.path)})]}),f.jsxs("div",{className:"p-3 m-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100",children:[f.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-800 font-bold text-xs mb-2",children:[f.jsx(lv,{className:"w-4 h-4 text-emerald-600 animate-pulse"}),f.jsx("span",{children:"Đổi Vai Trò Xem Demo"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[f.jsx("button",{onClick:()=>r("Admin"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Admin"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"👑 Admin"}),f.jsx("button",{onClick:()=>r("Cashier"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Cashier"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"💵 Thu Ngân"}),f.jsx("button",{onClick:()=>r("Kitchen"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Kitchen"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"🍳 Bếp"}),f.jsx("button",{onClick:()=>r("Warehouse"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Warehouse"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"📦 Kho"})]})]})]})]})},Nw=()=>{const[i,e]=ce.useState(!1);return f.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50",children:[f.jsx(Cw,{onToggleMobileSidebar:()=>e(!0)}),f.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[f.jsx(Rw,{mobileOpen:i,onCloseMobile:()=>e(!1)}),f.jsx("main",{className:"flex-1 overflow-y-auto pb-16 md:pb-6 p-3 sm:p-5 md:p-6 bg-gray-50",children:f.jsx(wS,{})})]}),f.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-14 bg-white border-t border-gray-200 md:hidden shadow-lg",children:[f.jsxs(Ro,{to:"/pos",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[f.jsx(av,{className:"w-5 h-5 mb-0.5"}),f.jsx("span",{children:"POS"})]}),f.jsxs(Ro,{to:"/kitchen",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[f.jsx(Oh,{className:"w-5 h-5 mb-0.5"}),f.jsx("span",{children:"Bếp"})]}),f.jsxs(Ro,{to:"/inventory",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[f.jsx(Uh,{className:"w-5 h-5 mb-0.5"}),f.jsx("span",{children:"Kho"})]}),f.jsxs(Ro,{to:"/dashboard",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[f.jsx(rv,{className:"w-5 h-5 mb-0.5"}),f.jsx("span",{children:"Thống kê"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="185",Pw=0,hg=1,Lw=2,Sc=1,cv=2,No=3,ss=0,ii=1,Sr=2,br=0,ba=1,pg=2,mg=3,gg=4,Dw=5,Es=100,Iw=101,Uw=102,Ow=103,kw=104,Fw=200,Bw=201,zw=202,Vw=203,Pf=204,Lf=205,Hw=206,Gw=207,jw=208,Ww=209,Xw=210,qw=211,$w=212,Yw=213,Kw=214,Df=0,If=1,Uf=2,Ca=3,Of=4,kf=5,Ff=6,Bf=7,uv=0,Zw=1,Jw=2,er=0,dv=1,fv=2,hv=3,Bh=4,pv=5,mv=6,gv=7,xv=300,Us=301,Ra=302,Vd=303,Hd=304,Xc=306,zf=1e3,Mr=1001,Vf=1002,Rn=1003,Qw=1004,Kl=1005,Fn=1006,Gd=1007,Cs=1008,di=1009,vv=1010,_v=1011,ko=1012,zh=1013,ir=1014,Ji=1015,Er=1016,Vh=1017,Hh=1018,Fo=1020,yv=35902,Sv=35899,Mv=1021,bv=1022,Oi=1023,Tr=1026,Rs=1027,wv=1028,Gh=1029,Os=1030,jh=1031,Wh=1033,Mc=33776,bc=33777,wc=33778,Ec=33779,Hf=35840,Gf=35841,jf=35842,Wf=35843,Xf=36196,qf=37492,$f=37496,Yf=37488,Kf=37489,Lc=37490,Zf=37491,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Dc=36285,xh=36286,eE=3200,vh=0,tE=1,ts="",_i="srgb",Ic="srgb-linear",Uc="linear",Wt="srgb",ca=7680,xg=519,nE=512,iE=513,rE=514,Xh=515,sE=516,aE=517,qh=518,oE=519,vg=35044,_g="300 es",Qi=2e3,Bo=2001;function lE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Oc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function cE(){const i=Oc("canvas");return i.style.display="block",i}const yg={};function Sg(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ev(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ft(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ut(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function wa(...i){const e=i.join(" ");e in yg||(yg[e]=!0,ft(...i))}function uE(i,e,t){return new Promise(function(r,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const dE={[Df]:If,[Uf]:Ff,[Of]:Bf,[Ca]:kf,[If]:Df,[Ff]:Uf,[Bf]:Of,[kf]:Ca};class Fs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,_h=180/Math.PI;function Xo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Nt(i,e,t){return Math.max(e,Math.min(t,i))}function fE(i,e){return(i%e+e)%e}function Wd(i,e,t){return(1-t)*i+t*e}function Mo(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ti(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let Pt=tp;class Oa{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let h=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3],_=l[c+0],M=l[c+1],T=l[c+2],C=l[c+3];if(v!==C||h!==_||m!==M||g!==T){let S=h*_+m*M+g*T+v*C;S<0&&(_=-_,M=-M,T=-T,C=-C,S=-S);let y=1-d;if(S<.9995){const D=Math.acos(S),L=Math.sin(D);y=Math.sin(y*D)/L,d=Math.sin(d*D)/L,h=h*y+_*d,m=m*y+M*d,g=g*y+T*d,v=v*y+C*d}else{h=h*y+_*d,m=m*y+M*d,g=g*y+T*d,v=v*y+C*d;const D=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=D,m*=D,g*=D,v*=D}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],h=r[a+1],m=r[a+2],g=r[a+3],v=l[c],_=l[c+1],M=l[c+2],T=l[c+3];return e[t]=d*T+g*v+h*M-m*_,e[t+1]=h*T+g*_+m*v-d*M,e[t+2]=m*T+g*M+d*_-h*v,e[t+3]=g*T-d*v-h*_-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),g=d(a/2),v=d(l/2),_=h(r/2),M=h(a/2),T=h(l/2);switch(c){case"XYZ":this._x=_*g*v+m*M*T,this._y=m*M*v-_*g*T,this._z=m*g*T+_*M*v,this._w=m*g*v-_*M*T;break;case"YXZ":this._x=_*g*v+m*M*T,this._y=m*M*v-_*g*T,this._z=m*g*T-_*M*v,this._w=m*g*v+_*M*T;break;case"ZXY":this._x=_*g*v-m*M*T,this._y=m*M*v+_*g*T,this._z=m*g*T+_*M*v,this._w=m*g*v-_*M*T;break;case"ZYX":this._x=_*g*v-m*M*T,this._y=m*M*v+_*g*T,this._z=m*g*T-_*M*v,this._w=m*g*v+_*M*T;break;case"YZX":this._x=_*g*v+m*M*T,this._y=m*M*v+_*g*T,this._z=m*g*T-_*M*v,this._w=m*g*v-_*M*T;break;case"XZY":this._x=_*g*v-m*M*T,this._y=m*M*v-_*g*T,this._z=m*g*T+_*M*v,this._w=m*g*v+_*M*T;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],g=t[6],v=t[10],_=r+d+v;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(g-h)*M,this._y=(l-m)*M,this._z=(c-a)*M}else if(r>d&&r>v){const M=2*Math.sqrt(1+r-d-v);this._w=(g-h)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+m)/M}else if(d>v){const M=2*Math.sqrt(1+d-r-v);this._w=(l-m)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+v-r-d);this._w=(c-a)/M,this._x=(l+m)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Nt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+c*d+a*m-l*h,this._y=a*g+c*h+l*d-r*m,this._z=l*g+c*m+r*h-a*d,this._w=c*g-r*d-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let h=1-t;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);h=Math.sin(h*m)/g,t=Math.sin(t*m)/g,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*a-d*r),g=2*(d*t-l*a),v=2*(l*r-c*t);return this.x=t+h*m+c*v-d*g,this.y=r+h*g+d*m-l*v,this.z=a+h*v+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*c-r*h,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Nt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let ie=np;const Xd=new ie,Mg=new Oa,ip=class ip{constructor(e,t,r,a,l,c,d,h,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,m)}set(e,t,r,a,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],g=r[4],v=r[7],_=r[2],M=r[5],T=r[8],C=a[0],S=a[3],y=a[6],D=a[1],L=a[4],b=a[7],N=a[2],P=a[5],I=a[8];return l[0]=c*C+d*D+h*N,l[3]=c*S+d*L+h*P,l[6]=c*y+d*b+h*I,l[1]=m*C+g*D+v*N,l[4]=m*S+g*L+v*P,l[7]=m*y+g*b+v*I,l[2]=_*C+M*D+T*N,l[5]=_*S+M*L+T*P,l[8]=_*y+M*b+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-r*l*g+r*d*h+a*l*m-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=g*c-d*m,_=d*h-g*l,M=m*l-c*h,T=t*v+r*_+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=v*C,e[1]=(a*m-g*r)*C,e[2]=(d*r-a*c)*C,e[3]=_*C,e[4]=(g*t-a*h)*C,e[5]=(a*l-d*t)*C,e[6]=M*C,e[7]=(r*h-m*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-a*m,a*h,-a*(-m*c+h*d)+d+t,0,0,1),this}scale(e,t){return wa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,t)),this}rotate(e){return wa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,t){return wa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let xt=ip;const qd=new xt,bg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hE(){const i={enabled:!0,workingColorSpace:Ic,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Wt&&(a.r=wr(a.r),a.g=wr(a.g),a.b=wr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Wt&&(a.r=Ea(a.r),a.g=Ea(a.g),a.b=Ea(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===ts?Uc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Ic]:{primaries:e,whitePoint:r,transfer:Uc,toXYZ:bg,fromXYZ:wg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_i},outputColorSpaceConfig:{drawingBufferColorSpace:_i}},[_i]:{primaries:e,whitePoint:r,transfer:Wt,toXYZ:bg,fromXYZ:wg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_i}}}),i}const Dt=hE();function wr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ea(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ua;class pE{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ua===void 0&&(ua=Oc("canvas")),ua.width=e.width,ua.height=e.height;const a=ua.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ua}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=wr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(wr(t[r]/255)*255):t[r]=wr(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mE=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mE++}),this.uuid=Xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push($d(a[c].image)):l.push($d(a[c]))}else l=$d(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function $d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pE.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let gE=0;const Yd=new ie;class Xn extends Fs{constructor(e=Xn.DEFAULT_IMAGE,t=Xn.DEFAULT_MAPPING,r=Mr,a=Mr,l=Fn,c=Cs,d=Oi,h=di,m=Xn.DEFAULT_ANISOTROPY,g=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gE++}),this.uuid=Xo(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=xv;Xn.DEFAULT_ANISOTROPY=1;const rp=class rp{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],_=h[1],M=h[5],T=h[9],C=h[2],S=h[6],y=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+C)<.1&&Math.abs(T+S)<.1&&Math.abs(m+M+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,b=(M+1)/2,N=(y+1)/2,P=(g+_)/4,I=(v+C)/4,E=(T+S)/4;return L>b&&L>N?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=P/r,l=I/r):b>N?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=P/a,l=E/a):N<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(N),r=I/l,a=E/l),this.set(r,a,l,t),this}let D=Math.sqrt((S-T)*(S-T)+(v-C)*(v-C)+(_-g)*(_-g));return Math.abs(D)<.001&&(D=1),this.x=(S-T)/D,this.y=(v-C)/D,this.z=(_-g)/D,this.w=Math.acos((m+M+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Nt(this.x,e.x,t.x),this.y=Nt(this.y,e.y,t.y),this.z=Nt(this.z,e.z,t.z),this.w=Nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Nt(this.x,e,t),this.y=Nt(this.y,e,t),this.z=Nt(this.z,e,t),this.w=Nt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Nt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rp.prototype.isVector4=!0;let rn=rp;class xE extends Fs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Xn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends xE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Tv extends Xn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vE extends Xn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kc=class kc{constructor(e,t,r,a,l,c,d,h,m,g,v,_,M,T,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,h,m,g,v,_,M,T,C,S)}set(e,t,r,a,l,c,d,h,m,g,v,_,M,T,C,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=l,y[5]=c,y[9]=d,y[13]=h,y[2]=m,y[6]=g,y[10]=v,y[14]=_,y[3]=M,y[7]=T,y[11]=C,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/da.setFromMatrixColumn(e,0).length(),l=1/da.setFromMatrixColumn(e,1).length(),c=1/da.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*g,M=c*v,T=d*g,C=d*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=M+T*m,t[5]=_-C*m,t[9]=-d*h,t[2]=C-_*m,t[6]=T+M*m,t[10]=c*h}else if(e.order==="YXZ"){const _=h*g,M=h*v,T=m*g,C=m*v;t[0]=_+C*d,t[4]=T*d-M,t[8]=c*m,t[1]=c*v,t[5]=c*g,t[9]=-d,t[2]=M*d-T,t[6]=C+_*d,t[10]=c*h}else if(e.order==="ZXY"){const _=h*g,M=h*v,T=m*g,C=m*v;t[0]=_-C*d,t[4]=-c*v,t[8]=T+M*d,t[1]=M+T*d,t[5]=c*g,t[9]=C-_*d,t[2]=-c*m,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const _=c*g,M=c*v,T=d*g,C=d*v;t[0]=h*g,t[4]=T*m-M,t[8]=_*m+C,t[1]=h*v,t[5]=C*m+_,t[9]=M*m-T,t[2]=-m,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,M=c*m,T=d*h,C=d*m;t[0]=h*g,t[4]=C-_*v,t[8]=T*v+M,t[1]=v,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=M*v+T,t[10]=_-C*v}else if(e.order==="XZY"){const _=c*h,M=c*m,T=d*h,C=d*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=_*v+C,t[5]=c*g,t[9]=M*v-T,t[2]=T*v-M,t[6]=d*g,t[10]=C*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_E,e,yE)}lookAt(e,t,r){const a=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),$r.crossVectors(r,li),$r.lengthSq()===0&&(Math.abs(r.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),$r.crossVectors(r,li)),$r.normalize(),Zl.crossVectors(li,$r),a[0]=$r.x,a[4]=Zl.x,a[8]=li.x,a[1]=$r.y,a[5]=Zl.y,a[9]=li.y,a[2]=$r.z,a[6]=Zl.z,a[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],g=r[1],v=r[5],_=r[9],M=r[13],T=r[2],C=r[6],S=r[10],y=r[14],D=r[3],L=r[7],b=r[11],N=r[15],P=a[0],I=a[4],E=a[8],U=a[12],B=a[1],z=a[5],X=a[9],de=a[13],pe=a[2],Y=a[6],me=a[10],J=a[14],q=a[3],ue=a[7],ae=a[11],k=a[15];return l[0]=c*P+d*B+h*pe+m*q,l[4]=c*I+d*z+h*Y+m*ue,l[8]=c*E+d*X+h*me+m*ae,l[12]=c*U+d*de+h*J+m*k,l[1]=g*P+v*B+_*pe+M*q,l[5]=g*I+v*z+_*Y+M*ue,l[9]=g*E+v*X+_*me+M*ae,l[13]=g*U+v*de+_*J+M*k,l[2]=T*P+C*B+S*pe+y*q,l[6]=T*I+C*z+S*Y+y*ue,l[10]=T*E+C*X+S*me+y*ae,l[14]=T*U+C*de+S*J+y*k,l[3]=D*P+L*B+b*pe+N*q,l[7]=D*I+L*z+b*Y+N*ue,l[11]=D*E+L*X+b*me+N*ae,l[15]=D*U+L*de+b*J+N*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],v=e[6],_=e[10],M=e[14],T=e[3],C=e[7],S=e[11],y=e[15],D=h*M-m*_,L=d*M-m*v,b=d*_-h*v,N=c*M-m*g,P=c*_-h*g,I=c*v-d*g;return t*(C*D-S*L+y*b)-r*(T*D-S*N+y*P)+a*(T*L-C*N+y*I)-l*(T*b-C*P+S*I)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],h=e[2],m=e[6],g=e[10];return t*(c*g-d*m)-r*(l*g-d*h)+a*(l*m-c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],v=e[9],_=e[10],M=e[11],T=e[12],C=e[13],S=e[14],y=e[15],D=t*d-r*c,L=t*h-a*c,b=t*m-l*c,N=r*h-a*d,P=r*m-l*d,I=a*m-l*h,E=g*C-v*T,U=g*S-_*T,B=g*y-M*T,z=v*S-_*C,X=v*y-M*C,de=_*y-M*S,pe=D*de-L*X+b*z+N*B-P*U+I*E;if(pe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Y=1/pe;return e[0]=(d*de-h*X+m*z)*Y,e[1]=(a*X-r*de-l*z)*Y,e[2]=(C*I-S*P+y*N)*Y,e[3]=(_*P-v*I-M*N)*Y,e[4]=(h*B-c*de-m*U)*Y,e[5]=(t*de-a*B+l*U)*Y,e[6]=(S*b-T*I-y*L)*Y,e[7]=(g*I-_*b+M*L)*Y,e[8]=(c*X-d*B+m*E)*Y,e[9]=(r*B-t*X-l*E)*Y,e[10]=(T*P-C*b+y*D)*Y,e[11]=(v*b-g*P-M*D)*Y,e[12]=(d*U-c*z-h*E)*Y,e[13]=(t*z-r*U+a*E)*Y,e[14]=(C*L-T*N-S*D)*Y,e[15]=(g*N-v*L+_*D)*Y,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+r,m*d-a*h,m*h+a*d,0,m*d+a*h,g*d+r,g*h-a*c,0,m*h-a*d,g*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,m=l+l,g=c+c,v=d+d,_=l*m,M=l*g,T=l*v,C=c*g,S=c*v,y=d*v,D=h*m,L=h*g,b=h*v,N=r.x,P=r.y,I=r.z;return a[0]=(1-(C+y))*N,a[1]=(M+b)*N,a[2]=(T-L)*N,a[3]=0,a[4]=(M-b)*P,a[5]=(1-(_+y))*P,a[6]=(S+D)*P,a[7]=0,a[8]=(T+L)*I,a[9]=(S-D)*I,a[10]=(1-(_+C))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=da.set(a[0],a[1],a[2]).length();const d=da.set(a[4],a[5],a[6]).length(),h=da.set(a[8],a[9],a[10]).length();l<0&&(c=-c),Pi.copy(this);const m=1/c,g=1/d,v=1/h;return Pi.elements[0]*=m,Pi.elements[1]*=m,Pi.elements[2]*=m,Pi.elements[4]*=g,Pi.elements[5]*=g,Pi.elements[6]*=g,Pi.elements[8]*=v,Pi.elements[9]*=v,Pi.elements[10]*=v,t.setFromRotationMatrix(Pi),r.x=c,r.y=d,r.z=h,this}makePerspective(e,t,r,a,l,c,d=Qi,h=!1){const m=this.elements,g=2*l/(t-e),v=2*l/(r-a),_=(t+e)/(t-e),M=(r+a)/(r-a);let T,C;if(h)T=l/(c-l),C=c*l/(c-l);else if(d===Qi)T=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Bo)T=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=Qi,h=!1){const m=this.elements,g=2/(t-e),v=2/(r-a),_=-(t+e)/(t-e),M=-(r+a)/(r-a);let T,C;if(h)T=1/(c-l),C=c/(c-l);else if(d===Qi)T=-2/(c-l),C=-(c+l)/(c-l);else if(d===Bo)T=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};kc.prototype.isMatrix4=!0;let an=kc;const da=new ie,Pi=new an,_E=new ie(0,0,0),yE=new ie(1,1,1),$r=new ie,Zl=new ie,li=new ie,Eg=new an,Tg=new Oa;class as{constructor(e=0,t=0,r=0,a=as.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],h=a[1],m=a[5],g=a[9],v=a[2],_=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Nt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Nt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Nt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(Nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Tg.setFromEuler(this),this.setFromQuaternion(Tg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}as.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let SE=0;const Ag=new ie,fa=new Oa,gr=new an,Jl=new ie,bo=new ie,ME=new ie,bE=new Oa,Cg=new ie(1,0,0),Rg=new ie(0,1,0),Ng=new ie(0,0,1),Pg={type:"added"},wE={type:"removed"},ha={type:"childadded",child:null},Kd={type:"childremoved",child:null};class zn extends Fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ie,t=new as,r=new Oa,a=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new an},normalMatrix:{value:new xt}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(Cg,e)}rotateY(e){return this.rotateOnAxis(Rg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,t){return Ag.copy(e).applyQuaternion(this.quaternion),this.position.add(Ag.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Cg,e)}translateY(e){return this.translateOnAxis(Rg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Jl.copy(e):Jl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(bo,Jl,this.up):gr.lookAt(Jl,bo,this.up),this.quaternion.setFromRotationMatrix(gr),a&&(gr.extractRotation(a.matrixWorld),fa.setFromRotationMatrix(gr),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pg),ha.child=e,this.dispatchEvent(ha),ha.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wE),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pg),ha.child=e,this.dispatchEvent(ha),ha.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,ME),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),M=c(e.animations),T=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),_.length>0&&(r.skeletons=_),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=a,r;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}zn.DEFAULT_UP=new ie(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Po extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const EE={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Po,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Po,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Po,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),y=this._getHandJoint(m,C);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&_>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(EE)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Po;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Jd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Dt.workingColorSpace){if(e=fE(e,1),t=Nt(t,0,1),r=Nt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Jd(c,l,e+1/3),this.g=Jd(c,l,e),this.b=Jd(c,l,e-1/3)}return Dt.colorSpaceToWorking(this,a),this}setStyle(e,t=_i){function r(l){l!==void 0&&parseFloat(l)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_i){const r=Av[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return Dt.workingToColorSpace(On.copy(this),e),Math.round(Nt(On.r*255,0,255))*65536+Math.round(Nt(On.g*255,0,255))*256+Math.round(Nt(On.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(On.copy(this),t);const r=On.r,a=On.g,l=On.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const v=c-d;switch(m=g<=.5?v/(c+d):v/(2-c-d),c){case r:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-r)/v+2;break;case l:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=_i){Dt.workingToColorSpace(On.copy(this),e);const t=On.r,r=On.g,a=On.b;return e!==_i?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ql);const r=Wd(Yr.h,Ql.h,t),a=Wd(Yr.s,Ql.s,t),l=Wd(Yr.l,Ql.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new bt;bt.NAMES=Av;class TE extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new as,this.environmentIntensity=1,this.environmentRotation=new as,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new ie,xr=new ie,Qd=new ie,vr=new ie,pa=new ie,ma=new ie,Lg=new ie,ef=new ie,tf=new ie,nf=new ie,rf=new rn,sf=new rn,af=new rn;class Ui{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Li.subVectors(e,t),a.cross(Li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Li.subVectors(a,t),xr.subVectors(r,t),Qd.subVectors(e,t);const c=Li.dot(Li),d=Li.dot(xr),h=Li.dot(Qd),m=xr.dot(xr),g=xr.dot(Qd),v=c*m-d*d;if(v===0)return l.set(0,0,0),null;const _=1/v,M=(m*h-d*g)*_,T=(c*g-d*h)*_;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,r,a,l,c,d,h){return this.getBarycoord(e,t,r,a,vr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,vr.x),h.addScaledVector(c,vr.y),h.addScaledVector(d,vr.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return rf.setScalar(0),sf.setScalar(0),af.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,r),af.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(rf,l.x),c.addScaledVector(sf,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,r,a){return Li.subVectors(r,t),xr.subVectors(e,t),Li.cross(xr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),Li.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ui.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;pa.subVectors(a,r),ma.subVectors(l,r),ef.subVectors(e,r);const h=pa.dot(ef),m=ma.dot(ef);if(h<=0&&m<=0)return t.copy(r);tf.subVectors(e,a);const g=pa.dot(tf),v=ma.dot(tf);if(g>=0&&v<=g)return t.copy(a);const _=h*v-g*m;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(pa,c);nf.subVectors(e,l);const M=pa.dot(nf),T=ma.dot(nf);if(T>=0&&M<=T)return t.copy(l);const C=M*m-h*T;if(C<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(ma,d);const S=g*T-M*v;if(S<=0&&v-g>=0&&M-T>=0)return Lg.subVectors(l,a),d=(v-g)/(v-g+(M-T)),t.copy(a).addScaledVector(Lg,d);const y=1/(S+C+_);return c=C*y,d=_*y,t.copy(r).addScaledVector(pa,c).addScaledVector(ma,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(l,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ec.copy(r.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),tc.subVectors(this.max,wo),ga.subVectors(e.a,wo),xa.subVectors(e.b,wo),va.subVectors(e.c,wo),Kr.subVectors(xa,ga),Zr.subVectors(va,xa),Ss.subVectors(ga,va);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ss.z,Ss.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ss.z,0,-Ss.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ss.y,Ss.x,0];return!of(t,ga,xa,va,tc)||(t=[1,0,0,0,1,0,0,0,1],!of(t,ga,xa,va,tc))?!1:(nc.crossVectors(Kr,Zr),t=[nc.x,nc.y,nc.z],of(t,ga,xa,va,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Di=new ie,ec=new qo,ga=new ie,xa=new ie,va=new ie,Kr=new ie,Zr=new ie,Ss=new ie,wo=new ie,tc=new ie,nc=new ie,Ms=new ie;function of(i,e,t,r,a){for(let l=0,c=i.length-3;l<=c;l+=3){Ms.fromArray(i,l);const d=a.x*Math.abs(Ms.x)+a.y*Math.abs(Ms.y)+a.z*Math.abs(Ms.z),h=e.dot(Ms),m=t.dot(Ms),g=r.dot(Ms);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const pn=new ie,ic=new Pt;let AE=0;class nr extends Fs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:AE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vg,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ti(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ti(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),r=ti(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),r=ti(r,this.array),a=ti(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=ti(t,this.array),r=ti(r,this.array),a=ti(a,this.array),l=ti(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Cv extends nr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Rv extends nr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class yi extends nr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const CE=new qo,Eo=new ie,lf=new ie;class Kh{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):CE.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Eo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(lf)),this.expandByPoint(Eo.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let RE=0;const vi=new an,cf=new zn,_a=new ie,ci=new qo,To=new qo,wn=new ie;class sr extends Fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:RE++}),this.uuid=Xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lE(e)?Rv:Cv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new xt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new yi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ci.setFromBufferAttribute(l),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];To.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(ci.min,To.min),ci.expandByPoint(wn),wn.addVectors(ci.max,To.max),ci.expandByPoint(wn)):(ci.expandByPoint(To.min),ci.expandByPoint(To.max))}ci.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)wn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(wn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)wn.fromBufferAttribute(d,m),h&&(_a.fromBufferAttribute(e,m),wn.add(_a)),a=Math.max(a,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new nr(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],h=[];for(let E=0;E<r.count;E++)d[E]=new ie,h[E]=new ie;const m=new ie,g=new ie,v=new ie,_=new Pt,M=new Pt,T=new Pt,C=new ie,S=new ie;function y(E,U,B){m.fromBufferAttribute(r,E),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,B),_.fromBufferAttribute(l,E),M.fromBufferAttribute(l,U),T.fromBufferAttribute(l,B),g.sub(m),v.sub(m),M.sub(_),T.sub(_);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(C.copy(g).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(z),d[E].add(C),d[U].add(C),d[B].add(C),h[E].add(S),h[U].add(S),h[B].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let E=0,U=D.length;E<U;++E){const B=D[E],z=B.start,X=B.count;for(let de=z,pe=z+X;de<pe;de+=3)y(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const L=new ie,b=new ie,N=new ie,P=new ie;function I(E){N.fromBufferAttribute(a,E),P.copy(N);const U=d[E];L.copy(U),L.sub(N.multiplyScalar(N.dot(U))).normalize(),b.crossVectors(P,U);const z=b.dot(h[E])<0?-1:1;c.setXYZW(E,L.x,L.y,L.z,z)}for(let E=0,U=D.length;E<U;++E){const B=D[E],z=B.start,X=B.count;for(let de=z,pe=z+X;de<pe;de+=3)I(e.getX(de+0)),I(e.getX(de+1)),I(e.getX(de+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new nr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,M=r.count;_<M;_++)r.setXYZ(_,0,0,0);const a=new ie,l=new ie,c=new ie,d=new ie,h=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let _=0,M=e.count;_<M;_+=3){const T=e.getX(_+0),C=e.getX(_+1),S=e.getX(_+2);a.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(g),h.add(g),m.add(g),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let _=0,M=t.count;_<M;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),v.subVectors(a,l),g.cross(v),r.setXYZ(_+0,g.x,g.y,g.z),r.setXYZ(_+1,g.x,g.y,g.z),r.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)wn.fromBufferAttribute(e,t),wn.normalize(),e.setXYZ(t,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,v=d.normalized,_=new m.constructor(h.length*g);let M=0,T=0;for(let C=0,S=h.length;C<S;C++){d.isInterleavedBufferAttribute?M=h[C]*d.data.stride+d.offset:M=h[C]*g;for(let y=0;y<g;y++)_[T++]=m[M++]}return new nr(_,g,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,v=m.length;g<v;g++){const _=m[g],M=e(_,r);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,_=m.length;v<_;v++){const M=m[v];g.push(M.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let _=0,M=v.length;_<M;_++)g.push(v[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const v=c[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NE=0;class $o extends Fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NE++}),this.uuid=Xo(),this.name="",this.type="Material",this.blending=ba,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ca,this.stencilZFail=ca,this.stencilZPass=ca,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ba&&(r.blending=this.blending),this.side!==ss&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pf&&(r.blendSrc=this.blendSrc),this.blendDst!==Lf&&(r.blendDst=this.blendDst),this.blendEquation!==Es&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ca&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ca&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ca&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Pt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Pt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new ie,uf=new ie,rc=new ie,Jr=new ie,df=new ie,sc=new ie,ff=new ie;class Nv{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){uf.copy(e).add(t).multiplyScalar(.5),rc.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(uf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(rc),d=Jr.dot(this.direction),h=-Jr.dot(rc),m=Jr.lengthSq(),g=Math.abs(1-c*c);let v,_,M,T;if(g>0)if(v=c*h-d,_=c*d-h,T=l*g,v>=0)if(_>=-T)if(_<=T){const C=1/g;v*=C,_*=C,M=v*(v+c*_+2*d)+_*(c*v+_+2*h)+m}else _=l,v=Math.max(0,-(c*_+d)),M=-v*v+_*(_+2*h)+m;else _=-l,v=Math.max(0,-(c*_+d)),M=-v*v+_*(_+2*h)+m;else _<=-T?(v=Math.max(0,-(-c*l+d)),_=v>0?-l:Math.min(Math.max(-l,-h),l),M=-v*v+_*(_+2*h)+m):_<=T?(v=0,_=Math.min(Math.max(-l,-h),l),M=_*(_+2*h)+m):(v=Math.max(0,-(c*l+d)),_=v>0?l:Math.min(Math.max(-l,-h),l),M=-v*v+_*(_+2*h)+m);else _=c>0?-l:l,v=Math.max(0,-(c*_+d)),M=-v*v+_*(_+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(uf).addScaledVector(rc,_),M}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const r=yr.dot(this.direction),a=yr.dot(yr)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,a=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,a=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),v>=0?(d=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(d=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,r,a,l){df.subVectors(t,e),sc.subVectors(r,e),ff.crossVectors(df,sc);let c=this.direction.dot(ff),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Jr.subVectors(this.origin,e);const h=d*this.direction.dot(sc.crossVectors(Jr,sc));if(h<0)return null;const m=d*this.direction.dot(df.cross(Jr));if(m<0||h+m>c)return null;const g=-d*Jr.dot(ff);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pv extends $o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dg=new an,bs=new Nv,ac=new Kh,Ig=new ie,oc=new ie,lc=new ie,cc=new ie,hf=new ie,uc=new ie,Ug=new ie,dc=new ie;class ki extends zn{constructor(e=new sr,t=new Pv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){uc.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],v=l[h];g!==0&&(hf.fromBufferAttribute(v,e),c?uc.addScaledVector(hf,g):uc.addScaledVector(hf.sub(t),g))}t.add(uc)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ac.copy(r.boundingSphere),ac.applyMatrix4(l),bs.copy(e.ray).recast(e.near),!(ac.containsPoint(bs.origin)===!1&&(bs.intersectSphere(ac,Ig)===null||bs.origin.distanceToSquared(Ig)>(e.far-e.near)**2))&&(Dg.copy(l).invert(),bs.copy(e.ray).applyMatrix4(Dg),!(r.boundingBox!==null&&bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let T=0,C=_.length;T<C;T++){const S=_[T],y=c[S.materialIndex],D=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let b=D,N=L;b<N;b+=3){const P=d.getX(b),I=d.getX(b+1),E=d.getX(b+2);a=fc(this,y,e,r,m,g,v,P,I,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const D=d.getX(S),L=d.getX(S+1),b=d.getX(S+2);a=fc(this,c,e,r,m,g,v,D,L,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let T=0,C=_.length;T<C;T++){const S=_[T],y=c[S.materialIndex],D=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let b=D,N=L;b<N;b+=3){const P=b,I=b+1,E=b+2;a=fc(this,y,e,r,m,g,v,P,I,E),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const T=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let S=T,y=C;S<y;S+=3){const D=S,L=S+1,b=S+2;a=fc(this,c,e,r,m,g,v,D,L,b),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function PE(i,e,t,r,a,l,c,d){let h;if(e.side===ii?h=r.intersectTriangle(c,l,a,!0,d):h=r.intersectTriangle(a,l,c,e.side===ss,d),h===null)return null;dc.copy(d),dc.applyMatrix4(i.matrixWorld);const m=t.ray.origin.distanceTo(dc);return m<t.near||m>t.far?null:{distance:m,point:dc.clone(),object:i}}function fc(i,e,t,r,a,l,c,d,h,m){i.getVertexPosition(d,oc),i.getVertexPosition(h,lc),i.getVertexPosition(m,cc);const g=PE(i,e,t,r,oc,lc,cc,Ug);if(g){const v=new ie;Ui.getBarycoord(Ug,oc,lc,cc,v),a&&(g.uv=Ui.getInterpolatedAttribute(a,d,h,m,v,new Pt)),l&&(g.uv1=Ui.getInterpolatedAttribute(l,d,h,m,v,new Pt)),c&&(g.normal=Ui.getInterpolatedAttribute(c,d,h,m,v,new ie),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const _={a:d,b:h,c:m,normal:new ie,materialIndex:0};Ui.getNormal(oc,lc,cc,_.normal),g.face=_,g.barycoord=v}return g}class LE extends Xn{constructor(e=null,t=1,r=1,a,l,c,d,h,m=Rn,g=Rn,v,_){super(null,c,d,h,m,g,a,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new ie,DE=new ie,IE=new xt;class es{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=pf.subVectors(r,t).cross(DE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(pf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||IE.getNormalMatrix(e),a=this.coplanarPoint(pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Kh,UE=new Pt(.5,.5),hc=new ie;class Zh{constructor(e=new es,t=new es,r=new es,a=new es,l=new es,c=new es){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Qi,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],g=l[4],v=l[5],_=l[6],M=l[7],T=l[8],C=l[9],S=l[10],y=l[11],D=l[12],L=l[13],b=l[14],N=l[15];if(a[0].setComponents(m-c,M-g,y-T,N-D).normalize(),a[1].setComponents(m+c,M+g,y+T,N+D).normalize(),a[2].setComponents(m+d,M+v,y+C,N+L).normalize(),a[3].setComponents(m-d,M-v,y-C,N-L).normalize(),r)a[4].setComponents(h,_,S,b).normalize(),a[5].setComponents(m-h,M-_,y-S,N-b).normalize();else if(a[4].setComponents(m-h,M-_,y-S,N-b).normalize(),t===Qi)a[5].setComponents(m+h,M+_,y+S,N+b).normalize();else if(t===Bo)a[5].setComponents(h,_,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=UE.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(hc.x=a.normal.x>0?e.max.x:e.min.x,hc.y=a.normal.y>0?e.max.y:e.min.y,hc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(hc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Lv extends Xn{constructor(e=[],t=Us,r,a,l,c,d,h,m,g){super(e,t,r,a,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Na extends Xn{constructor(e,t,r=ir,a,l,c,d=Rn,h=Rn,m,g=Tr,v=1){if(g!==Tr&&g!==Rs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,c,d,h,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class OE extends Na{constructor(e,t=ir,r=Us,a,l,c=Rn,d=Rn,h,m=Tr){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,r,a,l,c,d,h,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Dv extends Xn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ka extends sr{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],v=[];let _=0,M=0;T("z","y","x",-1,-1,r,t,e,c,l,0),T("z","y","x",1,-1,r,t,-e,c,l,1),T("x","z","y",1,1,e,r,t,a,c,2),T("x","z","y",1,-1,e,r,-t,a,c,3),T("x","y","z",1,-1,e,t,r,a,l,4),T("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new yi(m,3)),this.setAttribute("normal",new yi(g,3)),this.setAttribute("uv",new yi(v,2));function T(C,S,y,D,L,b,N,P,I,E,U){const B=b/I,z=N/E,X=b/2,de=N/2,pe=P/2,Y=I+1,me=E+1;let J=0,q=0;const ue=new ie;for(let ae=0;ae<me;ae++){const k=ae*z-de;for(let Z=0;Z<Y;Z++){const Ce=Z*B-X;ue[C]=Ce*D,ue[S]=k*L,ue[y]=pe,m.push(ue.x,ue.y,ue.z),ue[C]=0,ue[S]=0,ue[y]=P>0?1:-1,g.push(ue.x,ue.y,ue.z),v.push(Z/I),v.push(1-ae/E),J+=1}}for(let ae=0;ae<E;ae++)for(let k=0;k<I;k++){const Z=_+k+Y*ae,Ce=_+k+Y*(ae+1),ze=_+(k+1)+Y*(ae+1),Ge=_+(k+1)+Y*ae;h.push(Z,Ce,Ge),h.push(Ce,ze,Ge),q+=6}d.addGroup(M,q,U),M+=q,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qc extends sr{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),h=Math.floor(a),m=d+1,g=h+1,v=e/d,_=t/h,M=[],T=[],C=[],S=[];for(let y=0;y<g;y++){const D=y*_-c;for(let L=0;L<m;L++){const b=L*v-l;T.push(b,-D,0),C.push(0,0,1),S.push(L/d),S.push(1-y/h)}}for(let y=0;y<h;y++)for(let D=0;D<d;D++){const L=D+m*y,b=D+m*(y+1),N=D+1+m*(y+1),P=D+1+m*y;M.push(L,b,P),M.push(b,N,P)}this.setIndex(M),this.setAttribute("position",new yi(T,3)),this.setAttribute("normal",new yi(C,3)),this.setAttribute("uv",new yi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jh extends sr{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const g=[],v=new ie,_=new ie,M=[],T=[],C=[],S=[];for(let y=0;y<=r;y++){const D=[],L=y/r,b=c+L*d,N=e*Math.cos(b),P=Math.sqrt(e*e-N*N);let I=0;y===0&&c===0?I=.5/t:y===r&&h===Math.PI&&(I=-.5/t);for(let E=0;E<=t;E++){const U=E/t,B=a+U*l;v.x=-P*Math.cos(B),v.y=N,v.z=P*Math.sin(B),T.push(v.x,v.y,v.z),_.copy(v).normalize(),C.push(_.x,_.y,_.z),S.push(U+I,1-L),D.push(m++)}g.push(D)}for(let y=0;y<r;y++)for(let D=0;D<t;D++){const L=g[y][D+1],b=g[y][D],N=g[y+1][D],P=g[y+1][D+1];(y!==0||c>0)&&M.push(L,b,P),(y!==r-1||h<Math.PI)&&M.push(b,N,P)}this.setIndex(M),this.setAttribute("position",new yi(T,3)),this.setAttribute("normal",new yi(C,3)),this.setAttribute("uv",new yi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Pa(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];if(Og(a))a.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Og(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function jn(i){const e={};for(let t=0;t<i.length;t++){const r=Pa(i[t]);for(const a in r)e[a]=r[a]}return e}function Og(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function kE(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Iv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const FE={clone:Pa,merge:jn};var BE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends $o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=BE,this.fragmentShader=zE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=kE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(a.value);break;case"v2":this.uniforms[r].value=new Pt().fromArray(a.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(a.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new xt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new an().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class VE extends rr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Uv extends $o{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new as,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class HE extends Uv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class GE extends $o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends $o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qh extends zn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const mf=new an,kg=new ie,Fg=new ie;class Ov{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;kg.setFromMatrixPosition(e.matrixWorld),t.position.copy(kg),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pc=new ie,mc=new Oa,Yi=new ie;class kv extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(pc,mc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(pc,mc,Yi),Yi.x===1&&Yi.y===1&&Yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(pc,mc,Yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Qr=new ie,Bg=new Pt,zg=new Pt;class ui extends kv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z),Qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Qr.x,Qr.y).multiplyScalar(-e/Qr.z)}getViewSize(e,t){return this.getViewBounds(e,Bg,zg),t.subVectors(zg,Bg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/m,a*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class WE extends Ov{constructor(){super(new ui(90,1,.5,500)),this.isPointLightShadow=!0}}class XE extends Qh{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new WE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ep extends kv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qE extends Ov{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $E extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zn.DEFAULT_UP),this.updateMatrix(),this.target=new zn,this.shadow=new qE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class YE extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ya=-90,Sa=1;class KE extends zn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ui(ya,Sa,e,t);a.layers=this.layers,this.add(a);const l=new ui(ya,Sa,e,t);l.layers=this.layers,this.add(l);const c=new ui(ya,Sa,e,t);c.layers=this.layers,this.add(c);const d=new ui(ya,Sa,e,t);d.layers=this.layers,this.add(d);const h=new ui(ya,Sa,e,t);h.layers=this.layers,this.add(h);const m=new ui(ya,Sa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,h]=t;for(const m of t)this.remove(m);if(e===Qi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Bo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,_,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class ZE extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vg=new an;class JE{constructor(e,t,r=0,a=1/0){this.ray=new Nv(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vg),this}intersectObject(e,t=!0,r=[]){return yh(e,this,r,t),r.sort(Hg),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)yh(e[a],this,r,t);return r.sort(Hg),r}}function Hg(i,e){return i.distance-e.distance}function yh(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=i.children;for(let c=0,d=l.length;c<d;c++)yh(l[c],e,t,!0)}}class QE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sp=class sp{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};sp.prototype.isMatrix2=!0;let Gg=sp;function jg(i,e,t,r){const a=eT(r);switch(t){case Mv:return i*e;case wv:return i*e/a.components*a.byteLength;case Gh:return i*e/a.components*a.byteLength;case Os:return i*e*2/a.components*a.byteLength;case jh:return i*e*2/a.components*a.byteLength;case bv:return i*e*3/a.components*a.byteLength;case Oi:return i*e*4/a.components*a.byteLength;case Wh:return i*e*4/a.components*a.byteLength;case Mc:case bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case wc:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Wf:return Math.max(i,16)*Math.max(e,8)/4;case Hf:case jf:return Math.max(i,8)*Math.max(e,8)/2;case Xf:case qf:case Yf:case Kf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $f:case Lc:case Zf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dc:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function eT(i){switch(i){case di:case vv:return{byteLength:1,components:1};case ko:case _v:case Er:return{byteLength:2,components:1};case Vh:case Hh:return{byteLength:2,components:4};case ir:case zh:case Ji:return{byteLength:4,components:1};case yv:case Sv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fv(){let i=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function tT(i){const e=new WeakMap;function t(d,h){const m=d.array,g=d.usage,v=m.byteLength,_=i.createBuffer();i.bindBuffer(h,_),i.bufferData(h,m,g),d.onUploadCallback();let M;if(m instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=i.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=i.SHORT;else if(m instanceof Uint32Array)M=i.UNSIGNED_INT;else if(m instanceof Int32Array)M=i.INT;else if(m instanceof Int8Array)M=i.BYTE;else if(m instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,h,m){const g=h.array,v=h.updateRanges;if(i.bindBuffer(m,d),v.length===0)i.bufferSubData(m,0,g);else{v.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<v.length;M++){const T=v[_],C=v[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++_,v[_]=C)}v.length=_+1;for(let M=0,T=v.length;M<T;M++){const C=v[M];i.bufferSubData(m,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(i.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:a,remove:l,update:c}}var nT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iT=`#ifdef USE_ALPHAHASH
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
#endif`,rT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lT=`#ifdef USE_AOMAP
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
#endif`,cT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uT=`#ifdef USE_BATCHING
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
#endif`,dT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mT=`#ifdef USE_IRIDESCENCE
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
#endif`,gT=`#ifdef USE_BUMPMAP
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
#endif`,xT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ST=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,MT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ET=`#define PI 3.141592653589793
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
} // validated`,TT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,AT=`vec3 transformedNormal = objectNormal;
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
#endif`,CT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,NT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LT="gl_FragColor = linearToOutputTexel( gl_FragColor );",DT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,OT=`#ifdef USE_ENVMAP
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
#endif`,kT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FT=`#ifdef USE_ENVMAP
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
#endif`,BT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,GT=`#ifdef USE_GRADIENTMAP
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
}`,jT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$T=`#ifdef USE_ENVMAP
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
#endif`,YT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QT=`PhysicalMaterial material;
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
#endif`,e2=`uniform sampler2D dfgLUT;
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
}`,t2=`
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
#endif`,n2=`#if defined( RE_IndirectDiffuse )
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
#endif`,i2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,s2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,a2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,c2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,u2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,d2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,f2=`#if defined( USE_POINTS_UV )
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
#endif`,h2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,p2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,m2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,g2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,x2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v2=`#ifdef USE_MORPHTARGETS
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
#endif`,_2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,S2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,M2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,w2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,E2=`#ifdef USE_NORMALMAP
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
#endif`,T2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,A2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,C2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,R2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V2=`float getShadowMask() {
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
}`,H2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,j2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W2=`#ifdef USE_SKINNING
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
#endif`,X2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
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
#endif`,Z2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,eA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iA=`uniform sampler2D t2D;
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
}`,rA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`#include <common>
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
}`,cA=`#if DEPTH_PACKING == 3200
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
}`,uA=`#define DISTANCE
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
}`,dA=`#define DISTANCE
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
}`,fA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pA=`uniform float scale;
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
}`,mA=`uniform vec3 diffuse;
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
}`,gA=`#include <common>
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
}`,xA=`uniform vec3 diffuse;
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
}`,vA=`#define LAMBERT
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
}`,_A=`#define LAMBERT
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
}`,yA=`#define MATCAP
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
}`,SA=`#define MATCAP
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
}`,MA=`#define NORMAL
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
}`,bA=`#define NORMAL
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
}`,wA=`#define PHONG
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
}`,EA=`#define PHONG
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
}`,TA=`#define STANDARD
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
}`,AA=`#define STANDARD
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
}`,CA=`#define TOON
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
}`,RA=`#define TOON
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
}`,NA=`uniform float size;
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
}`,PA=`uniform vec3 diffuse;
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
}`,LA=`#include <common>
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
}`,DA=`uniform vec3 color;
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
}`,IA=`uniform float rotation;
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
}`,UA=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:nT,alphahash_pars_fragment:iT,alphamap_fragment:rT,alphamap_pars_fragment:sT,alphatest_fragment:aT,alphatest_pars_fragment:oT,aomap_fragment:lT,aomap_pars_fragment:cT,batching_pars_vertex:uT,batching_vertex:dT,begin_vertex:fT,beginnormal_vertex:hT,bsdfs:pT,iridescence_fragment:mT,bumpmap_pars_fragment:gT,clipping_planes_fragment:xT,clipping_planes_pars_fragment:vT,clipping_planes_pars_vertex:_T,clipping_planes_vertex:yT,color_fragment:ST,color_pars_fragment:MT,color_pars_vertex:bT,color_vertex:wT,common:ET,cube_uv_reflection_fragment:TT,defaultnormal_vertex:AT,displacementmap_pars_vertex:CT,displacementmap_vertex:RT,emissivemap_fragment:NT,emissivemap_pars_fragment:PT,colorspace_fragment:LT,colorspace_pars_fragment:DT,envmap_fragment:IT,envmap_common_pars_fragment:UT,envmap_pars_fragment:OT,envmap_pars_vertex:kT,envmap_physical_pars_fragment:$T,envmap_vertex:FT,fog_vertex:BT,fog_pars_vertex:zT,fog_fragment:VT,fog_pars_fragment:HT,gradientmap_pars_fragment:GT,lightmap_pars_fragment:jT,lights_lambert_fragment:WT,lights_lambert_pars_fragment:XT,lights_pars_begin:qT,lights_toon_fragment:YT,lights_toon_pars_fragment:KT,lights_phong_fragment:ZT,lights_phong_pars_fragment:JT,lights_physical_fragment:QT,lights_physical_pars_fragment:e2,lights_fragment_begin:t2,lights_fragment_maps:n2,lights_fragment_end:i2,lightprobes_pars_fragment:r2,logdepthbuf_fragment:s2,logdepthbuf_pars_fragment:a2,logdepthbuf_pars_vertex:o2,logdepthbuf_vertex:l2,map_fragment:c2,map_pars_fragment:u2,map_particle_fragment:d2,map_particle_pars_fragment:f2,metalnessmap_fragment:h2,metalnessmap_pars_fragment:p2,morphinstance_vertex:m2,morphcolor_vertex:g2,morphnormal_vertex:x2,morphtarget_pars_vertex:v2,morphtarget_vertex:_2,normal_fragment_begin:y2,normal_fragment_maps:S2,normal_pars_fragment:M2,normal_pars_vertex:b2,normal_vertex:w2,normalmap_pars_fragment:E2,clearcoat_normal_fragment_begin:T2,clearcoat_normal_fragment_maps:A2,clearcoat_pars_fragment:C2,iridescence_pars_fragment:R2,opaque_fragment:N2,packing:P2,premultiplied_alpha_fragment:L2,project_vertex:D2,dithering_fragment:I2,dithering_pars_fragment:U2,roughnessmap_fragment:O2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:F2,shadowmap_pars_vertex:B2,shadowmap_vertex:z2,shadowmask_pars_fragment:V2,skinbase_vertex:H2,skinning_pars_vertex:G2,skinning_vertex:j2,skinnormal_vertex:W2,specularmap_fragment:X2,specularmap_pars_fragment:q2,tonemapping_fragment:$2,tonemapping_pars_fragment:Y2,transmission_fragment:K2,transmission_pars_fragment:Z2,uv_pars_fragment:J2,uv_pars_vertex:Q2,uv_vertex:eA,worldpos_vertex:tA,background_vert:nA,background_frag:iA,backgroundCube_vert:rA,backgroundCube_frag:sA,cube_vert:aA,cube_frag:oA,depth_vert:lA,depth_frag:cA,distance_vert:uA,distance_frag:dA,equirect_vert:fA,equirect_frag:hA,linedashed_vert:pA,linedashed_frag:mA,meshbasic_vert:gA,meshbasic_frag:xA,meshlambert_vert:vA,meshlambert_frag:_A,meshmatcap_vert:yA,meshmatcap_frag:SA,meshnormal_vert:MA,meshnormal_frag:bA,meshphong_vert:wA,meshphong_frag:EA,meshphysical_vert:TA,meshphysical_frag:AA,meshtoon_vert:CA,meshtoon_frag:RA,points_vert:NA,points_frag:PA,shadow_vert:LA,shadow_frag:DA,sprite_vert:IA,sprite_frag:UA},Ve={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Zi={basic:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:jn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:jn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:jn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new bt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:jn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:jn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:jn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:jn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:jn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:jn([Ve.common,Ve.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:jn([Ve.lights,Ve.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Zi.physical={uniforms:jn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const gc={r:0,b:0,g:0},OA=new an,Bv=new xt;Bv.set(-1,0,0,0,1,0,0,0,1);function kA(i,e,t,r,a,l){const c=new bt(0);let d=a===!0?0:1,h,m,g=null,v=0,_=null;function M(D){let L=D.isScene===!0?D.background:null;if(L&&L.isTexture){const b=D.backgroundBlurriness>0;L=e.get(L,b)}return L}function T(D){let L=!1;const b=M(D);b===null?S(c,d):b&&b.isColor&&(S(b,1),L=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(D,L){const b=M(L);b&&(b.isCubeTexture||b.mapping===Xc)?(m===void 0&&(m=new ki(new ka(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Pa(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(N,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=b,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(OA.makeRotationFromEuler(L.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Bv),m.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Wt,(g!==b||v!==b.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,g=b,v=b.version,_=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ki(new qc(2,2),new rr({name:"BackgroundMaterial",uniforms:Pa(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Dt.getTransfer(b.colorSpace)!==Wt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(g!==b||v!==b.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,g=b,v=b.version,_=i.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function S(D,L){D.getRGB(gc,Iv(i)),t.buffers.color.setClear(gc.r,gc.g,gc.b,L,l)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(D,L=1){c.set(D),d=L,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,S(c,d)},render:T,addToRenderList:C,dispose:y}}function FA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,c=!1;function d(z,X,de,pe,Y){let me=!1;const J=v(z,pe,de,X);l!==J&&(l=J,m(l.object)),me=M(z,pe,de,Y),me&&T(z,pe,de,Y),Y!==null&&e.update(Y,i.ELEMENT_ARRAY_BUFFER),(me||c)&&(c=!1,b(z,X,de,pe),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function h(){return i.createVertexArray()}function m(z){return i.bindVertexArray(z)}function g(z){return i.deleteVertexArray(z)}function v(z,X,de,pe){const Y=pe.wireframe===!0;let me=r[X.id];me===void 0&&(me={},r[X.id]=me);const J=z.isInstancedMesh===!0?z.id:0;let q=me[J];q===void 0&&(q={},me[J]=q);let ue=q[de.id];ue===void 0&&(ue={},q[de.id]=ue);let ae=ue[Y];return ae===void 0&&(ae=_(h()),ue[Y]=ae),ae}function _(z){const X=[],de=[],pe=[];for(let Y=0;Y<t;Y++)X[Y]=0,de[Y]=0,pe[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:de,attributeDivisors:pe,object:z,attributes:{},index:null}}function M(z,X,de,pe){const Y=l.attributes,me=X.attributes;let J=0;const q=de.getAttributes();for(const ue in q)if(q[ue].location>=0){const k=Y[ue];let Z=me[ue];if(Z===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(Z=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(Z=z.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;J++}return l.attributesNum!==J||l.index!==pe}function T(z,X,de,pe){const Y={},me=X.attributes;let J=0;const q=de.getAttributes();for(const ue in q)if(q[ue].location>=0){let k=me[ue];k===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),Y[ue]=Z,J++}l.attributes=Y,l.attributesNum=J,l.index=pe}function C(){const z=l.newAttributes;for(let X=0,de=z.length;X<de;X++)z[X]=0}function S(z){y(z,0)}function y(z,X){const de=l.newAttributes,pe=l.enabledAttributes,Y=l.attributeDivisors;de[z]=1,pe[z]===0&&(i.enableVertexAttribArray(z),pe[z]=1),Y[z]!==X&&(i.vertexAttribDivisor(z,X),Y[z]=X)}function D(){const z=l.newAttributes,X=l.enabledAttributes;for(let de=0,pe=X.length;de<pe;de++)X[de]!==z[de]&&(i.disableVertexAttribArray(de),X[de]=0)}function L(z,X,de,pe,Y,me,J){J===!0?i.vertexAttribIPointer(z,X,de,Y,me):i.vertexAttribPointer(z,X,de,pe,Y,me)}function b(z,X,de,pe){C();const Y=pe.attributes,me=de.getAttributes(),J=X.defaultAttributeValues;for(const q in me){const ue=me[q];if(ue.location>=0){let ae=Y[q];if(ae===void 0&&(q==="instanceMatrix"&&z.instanceMatrix&&(ae=z.instanceMatrix),q==="instanceColor"&&z.instanceColor&&(ae=z.instanceColor)),ae!==void 0){const k=ae.normalized,Z=ae.itemSize,Ce=e.get(ae);if(Ce===void 0)continue;const ze=Ce.buffer,Ge=Ce.type,K=Ce.bytesPerElement,Se=Ge===i.INT||Ge===i.UNSIGNED_INT||ae.gpuType===zh;if(ae.isInterleavedBufferAttribute){const ve=ae.data,ke=ve.stride,Ze=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Je=0;Je<ue.locationSize;Je++)y(ue.location+Je,ve.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Je=0;Je<ue.locationSize;Je++)S(ue.location+Je);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let Je=0;Je<ue.locationSize;Je++)L(ue.location+Je,Z/ue.locationSize,Ge,k,ke*K,(Ze+Z/ue.locationSize*Je)*K,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<ue.locationSize;ve++)y(ue.location+ve,ae.meshPerAttribute);z.isInstancedMesh!==!0&&pe._maxInstanceCount===void 0&&(pe._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<ue.locationSize;ve++)S(ue.location+ve);i.bindBuffer(i.ARRAY_BUFFER,ze);for(let ve=0;ve<ue.locationSize;ve++)L(ue.location+ve,Z/ue.locationSize,Ge,k,Z*K,Z/ue.locationSize*ve*K,Se)}}else if(J!==void 0){const k=J[q];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(ue.location,k);break;case 3:i.vertexAttrib3fv(ue.location,k);break;case 4:i.vertexAttrib4fv(ue.location,k);break;default:i.vertexAttrib1fv(ue.location,k)}}}}D()}function N(){U();for(const z in r){const X=r[z];for(const de in X){const pe=X[de];for(const Y in pe){const me=pe[Y];for(const J in me)g(me[J].object),delete me[J];delete pe[Y]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const X=r[z.id];for(const de in X){const pe=X[de];for(const Y in pe){const me=pe[Y];for(const J in me)g(me[J].object),delete me[J];delete pe[Y]}}delete r[z.id]}function I(z){for(const X in r){const de=r[X];for(const pe in de){const Y=de[pe];if(Y[z.id]===void 0)continue;const me=Y[z.id];for(const J in me)g(me[J].object),delete me[J];delete Y[z.id]}}}function E(z){for(const X in r){const de=r[X],pe=z.isInstancedMesh===!0?z.id:0,Y=de[pe];if(Y!==void 0){for(const me in Y){const J=Y[me];for(const q in J)g(J[q].object),delete J[q];delete Y[me]}delete de[pe],Object.keys(de).length===0&&delete r[X]}}}function U(){B(),c=!0,l!==a&&(l=a,m(l.object))}function B(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:U,resetDefaultState:B,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:E,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:S,disableUnusedAttributes:D}}function BA(i,e,t){let r;function a(h){r=h}function l(h,m){i.drawArrays(r,h,m),t.update(m,r,1)}function c(h,m,g){g!==0&&(i.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function d(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let _=0;for(let M=0;M<g;M++)_+=m[M];t.update(_,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function zA(i,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(I){return!(I!==Oi&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const E=I===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==di&&r.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Ji&&!E)}function h(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(ft("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:D,maxVaryings:L,maxFragmentUniforms:b,maxSamples:N,samples:P}}function VA(i){const e=this;let t=null,r=0,a=!1,l=!1;const c=new es,d=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const M=v.length!==0||_||r!==0||a;return a=_,r=v.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,M){const T=v.clippingPlanes,C=v.clipIntersection,S=v.clipShadows,y=i.get(v);if(!a||T===null||T.length===0||l&&!S)l?g(null):m();else{const D=l?0:r,L=D*4;let b=y.clippingState||null;h.value=b,b=g(T,_,L,M);for(let N=0;N!==L;++N)b[N]=t[N];y.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,_,M,T){const C=v!==null?v.length:0;let S=null;if(C!==0){if(S=h.value,T!==!0||S===null){const y=M+C*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<y)&&(S=new Float32Array(y));for(let L=0,b=M;L!==C;++L,b+=4)c.copy(v[L]).applyMatrix4(D,d),c.normal.toArray(S,b),S[b+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const is=4,Wg=[.125,.215,.35,.446,.526,.582],Ts=20,HA=256,Ao=new ep,Xg=new bt;let gf=null,xf=0,vf=0,_f=!1;const GA=new ie;class qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=GA}=l;gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,d),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,xf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Us||e.mapping===Ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:Er,format:Oi,colorSpace:Ic,depthBuffer:!1},a=$g(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=jA(l)),this._blurMaterial=XA(l,e,t),this._ggxMaterial=WA(l,e,t)}return a}_compileMaterial(e){const t=new ki(new sr,e);this._renderer.compile(t,Ao)}_sceneToCubeUV(e,t,r,a,l){const h=new ui(90,1,t,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,M=v.toneMapping;v.getClearColor(Xg),v.toneMapping=er,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(a),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ki(new ka,new Pv({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let y=!1;const D=e.background;D?D.isColor&&(S.color.copy(D),e.background=null,y=!0):(S.color.copy(Xg),y=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):b===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const N=this._cubeSize;Ma(a,b*N,L>2?N:0,N,N),v.setRenderTarget(a),y&&v.render(C,h),v.render(e,h)}v.toneMapping=M,v.autoClear=_,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===Us||e.mapping===Ra;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Ma(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Ao)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,m=r/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-g*g),_=0+m*1.25,M=v*_,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-is?r-T+is:0),y=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=M,h.mipInt.value=T-t,Ma(l,S,y,3*C,2*C),a.setRenderTarget(l),a.render(d,Ao),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,Ma(e,S,y,3*C,2*C),a.setRenderTarget(e),a.render(d,Ao)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[a];v.material=m;const _=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ts-1),C=l/T,S=isFinite(l)?1+Math.floor(g*C):Ts;S>Ts&&ft(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ts}`);const y=[];let D=0;for(let I=0;I<Ts;++I){const E=I/C,U=Math.exp(-E*E/2);y.push(U),I===0?D+=U:I<S&&(D+=2*U)}for(let I=0;I<y.length;I++)y[I]=y[I]/D;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=c==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:L}=this;_.dTheta.value=T,_.mipInt.value=L-r;const b=this._sizeLods[a],N=3*b*(a>L-is?a-L+is:0),P=4*(this._cubeSize-b);Ma(t,N,P,3*b,2*b),h.setRenderTarget(t),h.render(v,Ao)}}function jA(i){const e=[],t=[],r=[];let a=i;const l=i-is+1+Wg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let h=1/d;c>i-is?h=Wg[c-i+is-1]:c===0&&(h=0),t.push(h);const m=1/(d-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,T=6,C=3,S=2,y=1,D=new Float32Array(C*T*M),L=new Float32Array(S*T*M),b=new Float32Array(y*T*M);for(let P=0;P<M;P++){const I=P%3*2/3-1,E=P>2?0:-1,U=[I,E,0,I+2/3,E,0,I+2/3,E+1,0,I,E,0,I+2/3,E+1,0,I,E+1,0];D.set(U,C*T*P),L.set(_,S*T*P);const B=[P,P,P,P,P,P];b.set(B,y*T*P)}const N=new sr;N.setAttribute("position",new nr(D,C)),N.setAttribute("uv",new nr(L,S)),N.setAttribute("faceIndex",new nr(b,y)),r.push(new ki(N,null)),a>is&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function $g(i,e,t){const r=new tr(i,e,t);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ma(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function WA(i,e,t){return new rr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function XA(i,e,t){const r=new Float32Array(Ts),a=new ie(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:$c(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Yg(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:br,depthTest:!1,depthWrite:!1})}function Kg(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}class zv extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Lv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ka(5,5,5),l=new rr({name:"CubemapFromEquirect",uniforms:Pa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ii,blending:br});l.uniforms.tEquirect.value=t;const c=new ki(a,l),d=t.minFilter;return t.minFilter===Cs&&(t.minFilter=Fn),new KE(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function qA(i){let e=new WeakMap,t=new WeakMap,r=null;function a(_,M=!1){return _==null?null:M?c(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Vd||M===Hd)if(e.has(_)){const T=e.get(_).texture;return d(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const C=new zv(T.height);return C.fromEquirectangularTexture(i,_),e.set(_,C),_.addEventListener("dispose",m),d(C.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const M=_.mapping,T=M===Vd||M===Hd,C=M===Us||M===Ra;if(T||C){let S=t.get(_);const y=S!==void 0?S.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new qg(i)),S=T?r.fromEquirectangular(_,S):r.fromCubemap(_,S),S.texture.pmremVersion=_.pmremVersion,t.set(_,S),S.texture;if(S!==void 0)return S.texture;{const D=_.image;return T&&D&&D.height>0||C&&D&&h(D)?(r===null&&(r=new qg(i)),S=T?r.fromEquirectangular(_):r.fromCubemap(_),S.texture.pmremVersion=_.pmremVersion,t.set(_,S),_.addEventListener("dispose",g),S.texture):null}}}return _}function d(_,M){return M===Vd?_.mapping=Us:M===Hd&&(_.mapping=Ra),_}function h(_){let M=0;const T=6;for(let C=0;C<T;C++)_[C]!==void 0&&M++;return M===T}function m(_){const M=_.target;M.removeEventListener("dispose",m);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function g(_){const M=_.target;M.removeEventListener("dispose",g);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:v}}function $A(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&wa("WebGLRenderer: "+r+" extension not supported."),a}}}function YA(i,e,t,r){const a={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",c),delete a[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(v,_){return a[_.id]===!0||(_.addEventListener("dispose",c),a[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function m(v){const _=[],M=v.index,T=v.attributes.position;let C=0;if(T===void 0)return;if(M!==null){const D=M.array;C=M.version;for(let L=0,b=D.length;L<b;L+=3){const N=D[L+0],P=D[L+1],I=D[L+2];_.push(N,P,P,I,I,N)}}else{const D=T.array;C=T.version;for(let L=0,b=D.length/3-1;L<b;L+=3){const N=L+0,P=L+1,I=L+2;_.push(N,P,P,I,I,N)}}const S=new(T.count>=65535?Rv:Cv)(_,1);S.version=C;const y=l.get(v);y&&e.remove(y),l.set(v,S)}function g(v){const _=l.get(v);if(_){const M=v.index;M!==null&&_.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:h,getWireframeAttribute:g}}function KA(i,e,t){let r;function a(v){r=v}let l,c;function d(v){l=v.type,c=v.bytesPerElement}function h(v,_){i.drawElements(r,_,l,v*c),t.update(_,r,1)}function m(v,_,M){M!==0&&(i.drawElementsInstanced(r,_,l,v*c,M),t.update(_,r,M))}function g(v,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,l,v,0,M);let C=0;for(let S=0;S<M;S++)C+=_[S];t.update(C,r,1)}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g}function ZA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Ut("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function JA(i,e,t){const r=new WeakMap,a=new rn;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let _=r.get(d);if(_===void 0||_.count!==v){let B=function(){E.dispose(),r.delete(d),d.removeEventListener("dispose",B)};var M=B;_!==void 0&&_.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),C===!0&&(b=2),S===!0&&(b=3);let N=d.attributes.position.count*b,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const I=new Float32Array(N*P*4*v),E=new Tv(I,N,P,v);E.type=Ji,E.needsUpdate=!0;const U=b*4;for(let z=0;z<v;z++){const X=y[z],de=D[z],pe=L[z],Y=N*P*4*z;for(let me=0;me<X.count;me++){const J=me*U;T===!0&&(a.fromBufferAttribute(X,me),I[Y+J+0]=a.x,I[Y+J+1]=a.y,I[Y+J+2]=a.z,I[Y+J+3]=0),C===!0&&(a.fromBufferAttribute(de,me),I[Y+J+4]=a.x,I[Y+J+5]=a.y,I[Y+J+6]=a.z,I[Y+J+7]=0),S===!0&&(a.fromBufferAttribute(pe,me),I[Y+J+8]=a.x,I[Y+J+9]=a.y,I[Y+J+10]=a.z,I[Y+J+11]=pe.itemSize===4?a.w:1)}}_={count:v,texture:E,size:new Pt(N,P)},r.set(d,_),d.addEventListener("dispose",B)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let T=0;for(let S=0;S<m.length;S++)T+=m[S];const C=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(i,"morphTargetBaseInfluence",C),h.getUniforms().setValue(i,"morphTargetInfluences",m)}h.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function QA(i,e,t,r,a){let l=new WeakMap;function c(m){const g=a.render.frame,v=m.geometry,_=e.get(m,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==g&&(t.update(m.instanceMatrix,i.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,i.ARRAY_BUFFER),l.set(m,g))),m.isSkinnedMesh){const M=m.skeleton;l.get(M)!==g&&(M.update(),l.set(M,g))}return _}function d(){l=new WeakMap}function h(m){const g=m.target;g.removeEventListener("dispose",h),r.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:d}}const eC={[dv]:"LINEAR_TONE_MAPPING",[fv]:"REINHARD_TONE_MAPPING",[hv]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function tC(i,e,t,r,a,l){const c=new tr(e,t,{type:i,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new Na(e,t):void 0}),d=new tr(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),h=new sr;h.setAttribute("position",new yi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new yi([0,2,0,0,2,0],2));const m=new VE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new ki(h,m),v=new ep(-1,1,1,-1,0,1);let _=null,M=null,T=!1,C,S=null,y=[],D=!1;this.setSize=function(L,b){c.setSize(L,b),d.setSize(L,b);for(let N=0;N<y.length;N++){const P=y[N];P.setSize&&P.setSize(L,b)}},this.setEffects=function(L){y=L,D=y.length>0&&y[0].isRenderPass===!0;const b=c.width,N=c.height;for(let P=0;P<y.length;P++){const I=y[P];I.setSize&&I.setSize(b,N)}},this.begin=function(L,b){if(T||L.toneMapping===er&&y.length===0)return!1;if(S=b,b!==null){const N=b.width,P=b.height;(c.width!==N||c.height!==P)&&this.setSize(N,P)}return D===!1&&L.setRenderTarget(c),C=L.toneMapping,L.toneMapping=er,!0},this.hasRenderPass=function(){return D},this.end=function(L,b){L.toneMapping=C,T=!0;let N=c,P=d;for(let I=0;I<y.length;I++){const E=y[I];if(E.enabled!==!1&&(E.render(L,P,N,b),E.needsSwap!==!1)){const U=N;N=P,P=U}}if(_!==L.outputColorSpace||M!==L.toneMapping){_=L.outputColorSpace,M=L.toneMapping,m.defines={},Dt.getTransfer(_)===Wt&&(m.defines.SRGB_TRANSFER="");const I=eC[M];I&&(m.defines[I]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=N.texture,L.setRenderTarget(S),L.render(g,v),S=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),h.dispose(),m.dispose()}}const Vv=new Xn,Sh=new Na(1,1),Hv=new Tv,Gv=new vE,jv=new Lv,Zg=[],Jg=[],Qg=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function Fa(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let l=Zg[a];if(l===void 0&&(l=new Float32Array(a),Zg[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function Yc(i,e){let t=Jg[e];t===void 0&&(t=new Int32Array(e),Jg[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function nC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function iC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function rC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function sC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function aC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;tx.set(r),i.uniformMatrix2fv(this.addr,!1,tx),yn(t,r)}}function oC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;ex.set(r),i.uniformMatrix3fv(this.addr,!1,ex),yn(t,r)}}function lC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(_n(t,r))return;Qg.set(r),i.uniformMatrix4fv(this.addr,!1,Qg),yn(t,r)}}function cC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function uC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function dC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function hC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function mC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function gC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function xC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?qh:Xh,l=Sh):l=Vv,t.setTexture2D(e||l,a)}function vC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Gv,a)}function _C(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||jv,a)}function yC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Hv,a)}function SC(i){switch(i){case 5126:return nC;case 35664:return iC;case 35665:return rC;case 35666:return sC;case 35674:return aC;case 35675:return oC;case 35676:return lC;case 5124:case 35670:return cC;case 35667:case 35671:return uC;case 35668:case 35672:return dC;case 35669:case 35673:return fC;case 5125:return hC;case 36294:return pC;case 36295:return mC;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return xC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return _C;case 36289:case 36303:case 36311:case 36292:return yC}}function MC(i,e){i.uniform1fv(this.addr,e)}function bC(i,e){const t=Fa(e,this.size,2);i.uniform2fv(this.addr,t)}function wC(i,e){const t=Fa(e,this.size,3);i.uniform3fv(this.addr,t)}function EC(i,e){const t=Fa(e,this.size,4);i.uniform4fv(this.addr,t)}function TC(i,e){const t=Fa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AC(i,e){const t=Fa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CC(i,e){const t=Fa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function RC(i,e){i.uniform1iv(this.addr,e)}function NC(i,e){i.uniform2iv(this.addr,e)}function PC(i,e){i.uniform3iv(this.addr,e)}function LC(i,e){i.uniform4iv(this.addr,e)}function DC(i,e){i.uniform1uiv(this.addr,e)}function IC(i,e){i.uniform2uiv(this.addr,e)}function UC(i,e){i.uniform3uiv(this.addr,e)}function OC(i,e){i.uniform4uiv(this.addr,e)}function kC(i,e,t){const r=this.cache,a=e.length,l=Yc(t,a);_n(r,l)||(i.uniform1iv(this.addr,l),yn(r,l));let c;this.type===i.SAMPLER_2D_SHADOW?c=Sh:c=Vv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function FC(i,e,t){const r=this.cache,a=e.length,l=Yc(t,a);_n(r,l)||(i.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Gv,l[c])}function BC(i,e,t){const r=this.cache,a=e.length,l=Yc(t,a);_n(r,l)||(i.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||jv,l[c])}function zC(i,e,t){const r=this.cache,a=e.length,l=Yc(t,a);_n(r,l)||(i.uniform1iv(this.addr,l),yn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||Hv,l[c])}function VC(i){switch(i){case 5126:return MC;case 35664:return bC;case 35665:return wC;case 35666:return EC;case 35674:return TC;case 35675:return AC;case 35676:return CC;case 5124:case 35670:return RC;case 35667:case 35671:return NC;case 35668:case 35672:return PC;case 35669:case 35673:return LC;case 5125:return DC;case 36294:return IC;case 36295:return UC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return FC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return zC}}class HC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=SC(t.type)}}class GC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VC(t.type)}}class jC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function nx(i,e){i.seq.push(e),i.map[e.id]=e}function WC(i,e,t){const r=i.name,a=r.length;for(yf.lastIndex=0;;){const l=yf.exec(r),c=yf.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===a){nx(t,m===void 0?new HC(d,i,e):new GC(d,i,e));break}else{let v=t.map[d];v===void 0&&(v=new jC(d),nx(t,v)),t=v}}}class Tc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),h=e.getUniformLocation(t,d.name);WC(d,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function ix(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const XC=37297;let qC=0;function $C(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const rx=new xt;function YC(i){Dt._getMatrix(rx,Dt.workingColorSpace,i);const e=`mat3( ${rx.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(i)){case Uc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function sx(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+$C(i.getShaderSource(e),d)}else return l}function KC(i,e){const t=YC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ZC={[dv]:"Linear",[fv]:"Reinhard",[hv]:"Cineon",[Bh]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function JC(i,e){const t=ZC[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xc=new ie;function QC(){Dt.getLuminanceCoefficients(xc);const i=xc.x.toFixed(4),e=xc.y.toFixed(4),t=xc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eR(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function tR(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function nR(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=i.getActiveAttrib(e,a),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function Lo(i){return i!==""}function ax(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ox(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(iR,sR)}const rR=new Map;function sR(i,e){let t=St[e];if(t===void 0){const r=rR.get(e);if(r!==void 0)t=St[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(t)}const aR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(i){return i.replace(aR,oR)}function oR(i,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function cx(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const lR={[Sc]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function cR(i){return lR[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uR={[Us]:"ENVMAP_TYPE_CUBE",[Ra]:"ENVMAP_TYPE_CUBE",[Xc]:"ENVMAP_TYPE_CUBE_UV"};function dR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":uR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const fR={[Ra]:"ENVMAP_MODE_REFRACTION"};function hR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pR={[uv]:"ENVMAP_BLENDING_MULTIPLY",[Zw]:"ENVMAP_BLENDING_MIX",[Jw]:"ENVMAP_BLENDING_ADD"};function mR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":pR[i.combine]||"ENVMAP_BLENDING_NONE"}function gR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function xR(i,e,t,r){const a=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=cR(t),m=dR(t),g=hR(t),v=mR(t),_=gR(t),M=eR(t),T=tR(l),C=a.createProgram();let S,y,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Lo).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Lo).join(`
`),y.length>0&&(y+=`
`)):(S=[cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),y=[cx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==er?"#define TONE_MAPPING":"",t.toneMapping!==er?St.tonemapping_pars_fragment:"",t.toneMapping!==er?JC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,KC("linearToOutputTexel",t.outputColorSpace),QC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lo).join(`
`)),c=Mh(c),c=ax(c,t),c=ox(c,t),d=Mh(d),d=ax(d,t),d=ox(d,t),c=lx(c),d=lx(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===_g?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_g?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=D+S+c,b=D+y+d,N=ix(a,a.VERTEX_SHADER,L),P=ix(a,a.FRAGMENT_SHADER,b);a.attachShader(C,N),a.attachShader(C,P),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function I(z){if(i.debug.checkShaderErrors){const X=a.getProgramInfoLog(C)||"",de=a.getShaderInfoLog(N)||"",pe=a.getShaderInfoLog(P)||"",Y=X.trim(),me=de.trim(),J=pe.trim();let q=!0,ue=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,C,N,P);else{const ae=sx(a,N,"vertex"),k=sx(a,P,"fragment");Ut("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+Y+`
`+ae+`
`+k)}else Y!==""?ft("WebGLProgram: Program Info Log:",Y):(me===""||J==="")&&(ue=!1);ue&&(z.diagnostics={runnable:q,programLog:Y,vertexShader:{log:me,prefix:S},fragmentShader:{log:J,prefix:y}})}a.deleteShader(N),a.deleteShader(P),E=new Tc(a,C),U=nR(a,C)}let E;this.getUniforms=function(){return E===void 0&&I(this),E};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=a.getProgramParameter(C,XC)),B},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=N,this.fragmentShader=P,this}let vR=0;class _R{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new yR(e),t.set(e,r)),r}}class yR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(i){return i===Os||i===Lc||i===Dc}function MR(i,e,t,r,a,l){const c=new Yh,d=new _R,h=new Set,m=[],g=new Map,v=r.logarithmicDepthBuffer;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(E){return h.add(E),E===0?"uv":`uv${E}`}function C(E,U,B,z,X,de){const pe=z.fog,Y=X.geometry,me=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,J=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||me,J),ue=q&&q.mapping===Xc?q.image.height:null,ae=M[E.type];E.precision!==null&&(_=r.getMaxPrecision(E.precision),_!==E.precision&&ft("WebGLProgram.getParameters:",E.precision,"not supported, using",_,"instead."));const k=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Z=k!==void 0?k.length:0;let Ce=0;Y.morphAttributes.position!==void 0&&(Ce=1),Y.morphAttributes.normal!==void 0&&(Ce=2),Y.morphAttributes.color!==void 0&&(Ce=3);let ze,Ge,K,Se;if(ae){const Xe=Zi[ae];ze=Xe.vertexShader,Ge=Xe.fragmentShader}else{ze=E.vertexShader,Ge=E.fragmentShader;const Xe=d.getVertexShaderStage(E),wt=d.getFragmentShaderStage(E);d.update(E,Xe,wt),K=Xe.id,Se=wt.id}const ve=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),Ze=X.isInstancedMesh===!0,Je=X.isBatchedMesh===!0,_t=!!E.map,Me=!!E.matcap,rt=!!q,ot=!!E.aoMap,Pe=!!E.lightMap,ht=!!E.bumpMap&&E.wireframe===!1,yt=!!E.normalMap,Ct=!!E.displacementMap,Ht=!!E.emissiveMap,Ot=!!E.metalnessMap,Bt=!!E.roughnessMap,W=E.anisotropy>0,un=E.clearcoat>0,Lt=E.dispersion>0,O=E.iridescence>0,w=E.sheen>0,Q=E.transmission>0,le=W&&!!E.anisotropyMap,xe=un&&!!E.clearcoatMap,ne=un&&!!E.clearcoatNormalMap,_e=un&&!!E.clearcoatRoughnessMap,ee=O&&!!E.iridescenceMap,ge=O&&!!E.iridescenceThicknessMap,we=w&&!!E.sheenColorMap,Fe=w&&!!E.sheenRoughnessMap,Be=!!E.specularMap,Le=!!E.specularColorMap,tt=!!E.specularIntensityMap,at=Q&&!!E.transmissionMap,ut=Q&&!!E.thicknessMap,H=!!E.gradientMap,Re=!!E.alphaMap,ye=E.alphaTest>0,Oe=!!E.alphaHash,Ie=!!E.extensions;let be=er;E.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(be=i.toneMapping);const $e={shaderID:ae,shaderType:E.type,shaderName:E.name,vertexShader:ze,fragmentShader:Ge,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:_,batching:Je,batchingColor:Je&&X._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&X.instanceColor!==null,instancingMorph:Ze&&X.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:_t,matcap:Me,envMap:rt,envMapMode:rt&&q.mapping,envMapCubeUVHeight:ue,aoMap:ot,lightMap:Pe,bumpMap:ht,normalMap:yt,displacementMap:Ct,emissiveMap:Ht,normalMapObjectSpace:yt&&E.normalMapType===tE,normalMapTangentSpace:yt&&E.normalMapType===vh,packedNormalMap:yt&&E.normalMapType===vh&&SR(E.normalMap.format),metalnessMap:Ot,roughnessMap:Bt,anisotropy:W,anisotropyMap:le,clearcoat:un,clearcoatMap:xe,clearcoatNormalMap:ne,clearcoatRoughnessMap:_e,dispersion:Lt,iridescence:O,iridescenceMap:ee,iridescenceThicknessMap:ge,sheen:w,sheenColorMap:we,sheenRoughnessMap:Fe,specularMap:Be,specularColorMap:Le,specularIntensityMap:tt,transmission:Q,transmissionMap:at,thicknessMap:ut,gradientMap:H,opaque:E.transparent===!1&&E.blending===ba&&E.alphaToCoverage===!1,alphaMap:Re,alphaTest:ye,alphaHash:Oe,combine:E.combine,mapUv:_t&&T(E.map.channel),aoMapUv:ot&&T(E.aoMap.channel),lightMapUv:Pe&&T(E.lightMap.channel),bumpMapUv:ht&&T(E.bumpMap.channel),normalMapUv:yt&&T(E.normalMap.channel),displacementMapUv:Ct&&T(E.displacementMap.channel),emissiveMapUv:Ht&&T(E.emissiveMap.channel),metalnessMapUv:Ot&&T(E.metalnessMap.channel),roughnessMapUv:Bt&&T(E.roughnessMap.channel),anisotropyMapUv:le&&T(E.anisotropyMap.channel),clearcoatMapUv:xe&&T(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&T(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_e&&T(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(E.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&T(E.iridescenceThicknessMap.channel),sheenColorMapUv:we&&T(E.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(E.sheenRoughnessMap.channel),specularMapUv:Be&&T(E.specularMap.channel),specularColorMapUv:Le&&T(E.specularColorMap.channel),specularIntensityMapUv:tt&&T(E.specularIntensityMap.channel),transmissionMapUv:at&&T(E.transmissionMap.channel),thicknessMapUv:ut&&T(E.thicknessMap.channel),alphaMapUv:Re&&T(E.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(yt||W),vertexNormals:!!Y.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Y.attributes.uv&&(_t||Re),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||Y.attributes.normal===void 0&&yt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ke,skinning:X.isSkinnedMesh===!0,hasPositionAttribute:Y.attributes.position!==void 0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Ce,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:de.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:be,decodeVideoTexture:_t&&E.map.isVideoTexture===!0&&Dt.getTransfer(E.map.colorSpace)===Wt,decodeVideoTextureEmissive:Ht&&E.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(E.emissiveMap.colorSpace)===Wt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Sr,flipSided:E.side===ii,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ie&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&E.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return $e.vertexUv1s=h.has(1),$e.vertexUv2s=h.has(2),$e.vertexUv3s=h.has(3),h.clear(),$e}function S(E){const U=[];if(E.shaderID?U.push(E.shaderID):(U.push(E.customVertexShaderID),U.push(E.customFragmentShaderID)),E.defines!==void 0)for(const B in E.defines)U.push(B),U.push(E.defines[B]);return E.isRawShaderMaterial===!1&&(y(U,E),D(U,E),U.push(i.outputColorSpace)),U.push(E.customProgramCacheKey),U.join()}function y(E,U){E.push(U.precision),E.push(U.outputColorSpace),E.push(U.envMapMode),E.push(U.envMapCubeUVHeight),E.push(U.mapUv),E.push(U.alphaMapUv),E.push(U.lightMapUv),E.push(U.aoMapUv),E.push(U.bumpMapUv),E.push(U.normalMapUv),E.push(U.displacementMapUv),E.push(U.emissiveMapUv),E.push(U.metalnessMapUv),E.push(U.roughnessMapUv),E.push(U.anisotropyMapUv),E.push(U.clearcoatMapUv),E.push(U.clearcoatNormalMapUv),E.push(U.clearcoatRoughnessMapUv),E.push(U.iridescenceMapUv),E.push(U.iridescenceThicknessMapUv),E.push(U.sheenColorMapUv),E.push(U.sheenRoughnessMapUv),E.push(U.specularMapUv),E.push(U.specularColorMapUv),E.push(U.specularIntensityMapUv),E.push(U.transmissionMapUv),E.push(U.thicknessMapUv),E.push(U.combine),E.push(U.fogExp2),E.push(U.sizeAttenuation),E.push(U.morphTargetsCount),E.push(U.morphAttributeCount),E.push(U.numDirLights),E.push(U.numPointLights),E.push(U.numSpotLights),E.push(U.numSpotLightMaps),E.push(U.numHemiLights),E.push(U.numRectAreaLights),E.push(U.numDirLightShadows),E.push(U.numPointLightShadows),E.push(U.numSpotLightShadows),E.push(U.numSpotLightShadowsWithMaps),E.push(U.numLightProbes),E.push(U.shadowMapType),E.push(U.toneMapping),E.push(U.numClippingPlanes),E.push(U.numClipIntersection),E.push(U.depthPacking)}function D(E,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),U.hasPositionAttribute&&c.enable(23),E.push(c.mask)}function L(E){const U=M[E.type];let B;if(U){const z=Zi[U];B=FE.clone(z.uniforms)}else B=E.uniforms;return B}function b(E,U){let B=g.get(U);return B!==void 0?++B.usedTimes:(B=new xR(i,U,E,a),m.push(B),g.set(U,B)),B}function N(E){if(--E.usedTimes===0){const U=m.indexOf(E);m[U]=m[m.length-1],m.pop(),g.delete(E.cacheKey),E.destroy()}}function P(E){d.remove(E)}function I(){d.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:b,releaseProgram:N,releaseShaderCache:P,programs:m,dispose:I}}function bR(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function a(c,d,h){i.get(c)[d]=h}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function wR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function ux(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dx(){const i=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,T,C,S,y){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:M,material:T,materialVariant:c(_),groupOrder:C,renderOrder:_.renderOrder,z:S,group:y},i[e]=D):(D.id=_.id,D.object=_,D.geometry=M,D.material=T,D.materialVariant=c(_),D.groupOrder=C,D.renderOrder=_.renderOrder,D.z=S,D.group=y),e++,D}function h(_,M,T,C,S,y){const D=d(_,M,T,C,S,y);T.transmission>0?r.push(D):T.transparent===!0?a.push(D):t.push(D)}function m(_,M,T,C,S,y){const D=d(_,M,T,C,S,y);T.transmission>0?r.unshift(D):T.transparent===!0?a.unshift(D):t.unshift(D)}function g(_,M,T){t.length>1&&t.sort(_||wR),r.length>1&&r.sort(M||ux),a.length>1&&a.sort(M||ux),T&&(t.reverse(),r.reverse(),a.reverse())}function v(){for(let _=e,M=i.length;_<M;_++){const T=i[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:m,finish:v,sort:g}}function ER(){let i=new WeakMap;function e(r,a){const l=i.get(r);let c;return l===void 0?(c=new dx,i.set(r,[c])):a>=l.length?(c=new dx,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function TR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return i[e.id]=t,t}}}function AR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let CR=0;function RR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function NR(i){const e=new TR,t=AR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const a=new ie,l=new an,c=new an;function d(m){let g=0,v=0,_=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,T=0,C=0,S=0,y=0,D=0,L=0,b=0,N=0,P=0,I=0;m.sort(RR);for(let U=0,B=m.length;U<B;U++){const z=m[U],X=z.color,de=z.intensity,pe=z.distance;let Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Os?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)g+=X.r*de,v+=X.g*de,_+=X.b*de;else if(z.isLightProbe){for(let me=0;me<9;me++)r.probe[me].addScaledVector(z.sh.coefficients[me],de);I++}else if(z.isDirectionalLight){const me=e.get(z);if(me.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const J=z.shadow,q=t.get(z);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=Y,r.directionalShadowMatrix[M]=z.shadow.matrix,D++}r.directional[M]=me,M++}else if(z.isSpotLight){const me=e.get(z);me.position.setFromMatrixPosition(z.matrixWorld),me.color.copy(X).multiplyScalar(de),me.distance=pe,me.coneCos=Math.cos(z.angle),me.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),me.decay=z.decay,r.spot[C]=me;const J=z.shadow;if(z.map&&(r.spotLightMap[N]=z.map,N++,J.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[C]=J.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=Y,b++}C++}else if(z.isRectAreaLight){const me=e.get(z);me.color.copy(X).multiplyScalar(de),me.halfWidth.set(z.width*.5,0,0),me.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=me,S++}else if(z.isPointLight){const me=e.get(z);if(me.color.copy(z.color).multiplyScalar(z.intensity),me.distance=z.distance,me.decay=z.decay,z.castShadow){const J=z.shadow,q=t.get(z);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=Y,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=me,T++}else if(z.isHemisphereLight){const me=e.get(z);me.skyColor.copy(z.color).multiplyScalar(de),me.groundColor.copy(z.groundColor).multiplyScalar(de),r.hemi[y]=me,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=_;const E=r.hash;(E.directionalLength!==M||E.pointLength!==T||E.spotLength!==C||E.rectAreaLength!==S||E.hemiLength!==y||E.numDirectionalShadows!==D||E.numPointShadows!==L||E.numSpotShadows!==b||E.numSpotMaps!==N||E.numLightProbes!==I)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=y,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+N-P,r.spotLightMap.length=N,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=I,E.directionalLength=M,E.pointLength=T,E.spotLength=C,E.rectAreaLength=S,E.hemiLength=y,E.numDirectionalShadows=D,E.numPointShadows=L,E.numSpotShadows=b,E.numSpotMaps=N,E.numLightProbes=I,r.version=CR++)}function h(m,g){let v=0,_=0,M=0,T=0,C=0;const S=g.matrixWorldInverse;for(let y=0,D=m.length;y<D;y++){const L=m[y];if(L.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),v++}else if(L.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),T++}else if(L.isPointLight){const b=r.point[_];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(S),_++}else if(L.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(S),C++}}}return{setup:d,setupView:h,state:r}}function fx(i){const e=new NR(i),t=[],r=[],a=[];function l(_){v.camera=_,t.length=0,r.length=0,a.length=0}function c(_){t.push(_)}function d(_){r.push(_)}function h(_){a.push(_)}function m(){e.setup(t)}function g(_){e.setupView(t,_)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:m,setupLightsView:g,pushLight:c,pushShadow:d,pushLightProbeGrid:h}}function PR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new fx(i),e.set(a,[d])):l>=c.length?(d=new fx(i),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const LR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
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
}`,IR=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],UR=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],hx=new an,Co=new ie,Sf=new ie;function OR(i,e,t){let r=new Zh;const a=new Pt,l=new Pt,c=new rn,d=new GE,h=new jE,m={},g=t.maxTextureSize,v={[ss]:ii,[ii]:ss,[Sr]:Sr},_=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:LR,fragmentShader:DR}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new sr;T.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new ki(T,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let y=this.type;this.render=function(P,I,E){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===cv&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Sc);const U=i.getRenderTarget(),B=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),X=i.state;X.setBlending(br),X.buffers.depth.getReversed()===!0?X.buffers.color.setClear(0,0,0,0):X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const de=y!==this.type;de&&I.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(Y=>Y.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,Y=P.length;pe<Y;pe++){const me=P[pe],J=me.shadow;if(J===void 0){ft("WebGLShadowMap:",me,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const q=J.getFrameExtents();a.multiply(q),l.copy(J.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/q.x),a.x=l.x*q.x,J.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/q.y),a.y=l.y*q.y,J.mapSize.y=l.y));const ue=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ue,J.map===null||de===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===No){if(me.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new tr(a.x,a.y,{format:Os,type:Er,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),J.map.texture.name=me.name+".shadowMap",J.map.depthTexture=new Na(a.x,a.y,Ji),J.map.depthTexture.name=me.name+".shadowMapDepth",J.map.depthTexture.format=Tr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn}else me.isPointLight?(J.map=new zv(a.x),J.map.depthTexture=new OE(a.x,ir)):(J.map=new tr(a.x,a.y),J.map.depthTexture=new Na(a.x,a.y,ir)),J.map.depthTexture.name=me.name+".shadowMap",J.map.depthTexture.format=Tr,this.type===Sc?(J.map.depthTexture.compareFunction=ue?qh:Xh,J.map.depthTexture.minFilter=Fn,J.map.depthTexture.magFilter=Fn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Rn,J.map.depthTexture.magFilter=Rn);J.camera.updateProjectionMatrix()}const ae=J.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ae;k++){if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,k),i.clear();else{k===0&&(i.setRenderTarget(J.map),i.clear());const Z=J.getViewport(k);c.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),X.viewport(c)}if(me.isPointLight){const Z=J.camera,Ce=J.matrix,ze=me.distance||Z.far;ze!==Z.far&&(Z.far=ze,Z.updateProjectionMatrix()),Co.setFromMatrixPosition(me.matrixWorld),Z.position.copy(Co),Sf.copy(Z.position),Sf.add(IR[k]),Z.up.copy(UR[k]),Z.lookAt(Sf),Z.updateMatrixWorld(),Ce.makeTranslation(-Co.x,-Co.y,-Co.z),hx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),J._frustum.setFromProjectionMatrix(hx,Z.coordinateSystem,Z.reversedDepth)}else J.updateMatrices(me);r=J.getFrustum(),b(I,E,J.camera,me,this.type)}J.isPointLightShadow!==!0&&this.type===No&&D(J,E),J.needsUpdate=!1}y=this.type,S.needsUpdate=!1,i.setRenderTarget(U,B,z)};function D(P,I){const E=e.update(C);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new tr(a.x,a.y,{format:Os,type:Er})),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value=P.mapSize,_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,E,_,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,E,M,C,null)}function L(P,I,E,U){let B=null;const z=E.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)B=z;else if(B=E.isPointLight===!0?h:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const X=B.uuid,de=I.uuid;let pe=m[X];pe===void 0&&(pe={},m[X]=pe);let Y=pe[de];Y===void 0&&(Y=B.clone(),pe[de]=Y,I.addEventListener("dispose",N)),B=Y}if(B.visible=I.visible,B.wireframe=I.wireframe,U===No?B.side=I.shadowSide!==null?I.shadowSide:I.side:B.side=I.shadowSide!==null?I.shadowSide:v[I.side],B.alphaMap=I.alphaMap,B.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,B.map=I.map,B.clipShadows=I.clipShadows,B.clippingPlanes=I.clippingPlanes,B.clipIntersection=I.clipIntersection,B.displacementMap=I.displacementMap,B.displacementScale=I.displacementScale,B.displacementBias=I.displacementBias,B.wireframeLinewidth=I.wireframeLinewidth,B.linewidth=I.linewidth,E.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const X=i.properties.get(B);X.light=E}return B}function b(P,I,E,U,B){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===No)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,P.matrixWorld);const de=e.update(P),pe=P.material;if(Array.isArray(pe)){const Y=de.groups;for(let me=0,J=Y.length;me<J;me++){const q=Y[me],ue=pe[q.materialIndex];if(ue&&ue.visible){const ae=L(P,ue,U,B);P.onBeforeShadow(i,P,I,E,de,ae,q),i.renderBufferDirect(E,null,de,ae,P,q),P.onAfterShadow(i,P,I,E,de,ae,q)}}}else if(pe.visible){const Y=L(P,pe,U,B);P.onBeforeShadow(i,P,I,E,de,Y,null),i.renderBufferDirect(E,null,de,Y,P,null),P.onAfterShadow(i,P,I,E,de,Y,null)}}const X=P.children;for(let de=0,pe=X.length;de<pe;de++)b(X[de],I,E,U,B)}function N(P){P.target.removeEventListener("dispose",N);for(const E in m){const U=m[E],B=P.target.uuid;B in U&&(U[B].dispose(),delete U[B])}}}function kR(i,e){function t(){let H=!1;const Re=new rn;let ye=null;const Oe=new rn(0,0,0,0);return{setMask:function(Ie){ye!==Ie&&!H&&(i.colorMask(Ie,Ie,Ie,Ie),ye=Ie)},setLocked:function(Ie){H=Ie},setClear:function(Ie,be,$e,Xe,wt){wt===!0&&(Ie*=Xe,be*=Xe,$e*=Xe),Re.set(Ie,be,$e,Xe),Oe.equals(Re)===!1&&(i.clearColor(Ie,be,$e,Xe),Oe.copy(Re))},reset:function(){H=!1,ye=null,Oe.set(-1,0,0,0)}}}function r(){let H=!1,Re=!1,ye=null,Oe=null,Ie=null;return{setReversed:function(be){if(Re!==be){const $e=e.get("EXT_clip_control");be?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT),Re=be;const Xe=Ie;Ie=null,this.setClear(Xe)}},getReversed:function(){return Re},setTest:function(be){be?ve(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(be){ye!==be&&!H&&(i.depthMask(be),ye=be)},setFunc:function(be){if(Re&&(be=dE[be]),Oe!==be){switch(be){case Df:i.depthFunc(i.NEVER);break;case If:i.depthFunc(i.ALWAYS);break;case Uf:i.depthFunc(i.LESS);break;case Ca:i.depthFunc(i.LEQUAL);break;case Of:i.depthFunc(i.EQUAL);break;case kf:i.depthFunc(i.GEQUAL);break;case Ff:i.depthFunc(i.GREATER);break;case Bf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Oe=be}},setLocked:function(be){H=be},setClear:function(be){Ie!==be&&(Ie=be,Re&&(be=1-be),i.clearDepth(be))},reset:function(){H=!1,ye=null,Oe=null,Ie=null,Re=!1}}}function a(){let H=!1,Re=null,ye=null,Oe=null,Ie=null,be=null,$e=null,Xe=null,wt=null;return{setTest:function(kt){H||(kt?ve(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(kt){Re!==kt&&!H&&(i.stencilMask(kt),Re=kt)},setFunc:function(kt,mn,Vn){(ye!==kt||Oe!==mn||Ie!==Vn)&&(i.stencilFunc(kt,mn,Vn),ye=kt,Oe=mn,Ie=Vn)},setOp:function(kt,mn,Vn){(be!==kt||$e!==mn||Xe!==Vn)&&(i.stencilOp(kt,mn,Vn),be=kt,$e=mn,Xe=Vn)},setLocked:function(kt){H=kt},setClear:function(kt){wt!==kt&&(i.clearStencil(kt),wt=kt)},reset:function(){H=!1,Re=null,ye=null,Oe=null,Ie=null,be=null,$e=null,Xe=null,wt=null}}}const l=new t,c=new r,d=new a,h=new WeakMap,m=new WeakMap;let g={},v={},_={},M=new WeakMap,T=[],C=null,S=!1,y=null,D=null,L=null,b=null,N=null,P=null,I=null,E=new bt(0,0,0),U=0,B=!1,z=null,X=null,de=null,pe=null,Y=null;const me=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ue)[1]),J=q>=1):ue.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),J=q>=2);let ae=null,k={};const Z=i.getParameter(i.SCISSOR_BOX),Ce=i.getParameter(i.VIEWPORT),ze=new rn().fromArray(Z),Ge=new rn().fromArray(Ce);function K(H,Re,ye,Oe){const Ie=new Uint8Array(4),be=i.createTexture();i.bindTexture(H,be),i.texParameteri(H,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(H,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ye;$e++)H===i.TEXTURE_3D||H===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Oe,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Re+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return be}const Se={};Se[i.TEXTURE_2D]=K(i.TEXTURE_2D,i.TEXTURE_2D,1),Se[i.TEXTURE_CUBE_MAP]=K(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[i.TEXTURE_2D_ARRAY]=K(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Se[i.TEXTURE_3D]=K(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(i.DEPTH_TEST),c.setFunc(Ca),ht(!1),yt(hg),ve(i.CULL_FACE),ot(br);function ve(H){g[H]!==!0&&(i.enable(H),g[H]=!0)}function ke(H){g[H]!==!1&&(i.disable(H),g[H]=!1)}function Ze(H,Re){return _[H]!==Re?(i.bindFramebuffer(H,Re),_[H]=Re,H===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Re),H===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function Je(H,Re){let ye=T,Oe=!1;if(H){ye=M.get(Re),ye===void 0&&(ye=[],M.set(Re,ye));const Ie=H.textures;if(ye.length!==Ie.length||ye[0]!==i.COLOR_ATTACHMENT0){for(let be=0,$e=Ie.length;be<$e;be++)ye[be]=i.COLOR_ATTACHMENT0+be;ye.length=Ie.length,Oe=!0}}else ye[0]!==i.BACK&&(ye[0]=i.BACK,Oe=!0);Oe&&i.drawBuffers(ye)}function _t(H){return C!==H?(i.useProgram(H),C=H,!0):!1}const Me={[Es]:i.FUNC_ADD,[Iw]:i.FUNC_SUBTRACT,[Uw]:i.FUNC_REVERSE_SUBTRACT};Me[Ow]=i.MIN,Me[kw]=i.MAX;const rt={[Fw]:i.ZERO,[Bw]:i.ONE,[zw]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[Xw]:i.SRC_ALPHA_SATURATE,[jw]:i.DST_COLOR,[Hw]:i.DST_ALPHA,[Vw]:i.ONE_MINUS_SRC_COLOR,[Lf]:i.ONE_MINUS_SRC_ALPHA,[Ww]:i.ONE_MINUS_DST_COLOR,[Gw]:i.ONE_MINUS_DST_ALPHA,[qw]:i.CONSTANT_COLOR,[$w]:i.ONE_MINUS_CONSTANT_COLOR,[Yw]:i.CONSTANT_ALPHA,[Kw]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(H,Re,ye,Oe,Ie,be,$e,Xe,wt,kt){if(H===br){S===!0&&(ke(i.BLEND),S=!1);return}if(S===!1&&(ve(i.BLEND),S=!0),H!==Dw){if(H!==y||kt!==B){if((D!==Es||N!==Es)&&(i.blendEquation(i.FUNC_ADD),D=Es,N=Es),kt)switch(H){case ba:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pg:i.blendFunc(i.ONE,i.ONE);break;case mg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",H);break}else switch(H){case ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",H);break}L=null,b=null,P=null,I=null,E.set(0,0,0),U=0,y=H,B=kt}return}Ie=Ie||Re,be=be||ye,$e=$e||Oe,(Re!==D||Ie!==N)&&(i.blendEquationSeparate(Me[Re],Me[Ie]),D=Re,N=Ie),(ye!==L||Oe!==b||be!==P||$e!==I)&&(i.blendFuncSeparate(rt[ye],rt[Oe],rt[be],rt[$e]),L=ye,b=Oe,P=be,I=$e),(Xe.equals(E)===!1||wt!==U)&&(i.blendColor(Xe.r,Xe.g,Xe.b,wt),E.copy(Xe),U=wt),y=H,B=!1}function Pe(H,Re){H.side===Sr?ke(i.CULL_FACE):ve(i.CULL_FACE);let ye=H.side===ii;Re&&(ye=!ye),ht(ye),H.blending===ba&&H.transparent===!1?ot(br):ot(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),l.setMask(H.colorWrite);const Oe=H.stencilWrite;d.setTest(Oe),Oe&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){z!==H&&(H?i.frontFace(i.CW):i.frontFace(i.CCW),z=H)}function yt(H){H!==Pw?(ve(i.CULL_FACE),H!==X&&(H===hg?i.cullFace(i.BACK):H===Lw?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),X=H}function Ct(H){H!==de&&(J&&i.lineWidth(H),de=H)}function Ht(H,Re,ye){H?(ve(i.POLYGON_OFFSET_FILL),(pe!==Re||Y!==ye)&&(pe=Re,Y=ye,c.getReversed()&&(Re=-Re),i.polygonOffset(Re,ye))):ke(i.POLYGON_OFFSET_FILL)}function Ot(H){H?ve(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function Bt(H){H===void 0&&(H=i.TEXTURE0+me-1),ae!==H&&(i.activeTexture(H),ae=H)}function W(H,Re,ye){ye===void 0&&(ae===null?ye=i.TEXTURE0+me-1:ye=ae);let Oe=k[ye];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[ye]=Oe),(Oe.type!==H||Oe.texture!==Re)&&(ae!==ye&&(i.activeTexture(ye),ae=ye),i.bindTexture(H,Re||Se[H]),Oe.type=H,Oe.texture=Re)}function un(){const H=k[ae];H!==void 0&&H.type!==void 0&&(i.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function w(){try{i.texSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function Q(){try{i.texSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function le(){try{i.compressedTexSubImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function xe(){try{i.compressedTexSubImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function ne(){try{i.texStorage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function _e(){try{i.texStorage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function ee(){try{i.texImage2D(...arguments)}catch(H){Ut("WebGLState:",H)}}function ge(){try{i.texImage3D(...arguments)}catch(H){Ut("WebGLState:",H)}}function we(H){return v[H]!==void 0?v[H]:i.getParameter(H)}function Fe(H,Re){v[H]!==Re&&(i.pixelStorei(H,Re),v[H]=Re)}function Be(H){ze.equals(H)===!1&&(i.scissor(H.x,H.y,H.z,H.w),ze.copy(H))}function Le(H){Ge.equals(H)===!1&&(i.viewport(H.x,H.y,H.z,H.w),Ge.copy(H))}function tt(H,Re){let ye=m.get(Re);ye===void 0&&(ye=new WeakMap,m.set(Re,ye));let Oe=ye.get(H);Oe===void 0&&(Oe=i.getUniformBlockIndex(Re,H.name),ye.set(H,Oe))}function at(H,Re){const Oe=m.get(Re).get(H);h.get(Re)!==Oe&&(i.uniformBlockBinding(Re,Oe,H.__bindingPointIndex),h.set(Re,Oe))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),g={},v={},ae=null,k={},_={},M=new WeakMap,T=[],C=null,S=!1,y=null,D=null,L=null,b=null,N=null,P=null,I=null,E=new bt(0,0,0),U=0,B=!1,z=null,X=null,de=null,pe=null,Y=null,ze.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ve,disable:ke,bindFramebuffer:Ze,drawBuffers:Je,useProgram:_t,setBlending:ot,setMaterial:Pe,setFlipSided:ht,setCullFace:yt,setLineWidth:Ct,setPolygonOffset:Ht,setScissorTest:Ot,activeTexture:Bt,bindTexture:W,unbindTexture:un,compressedTexImage2D:Lt,compressedTexImage3D:O,texImage2D:ee,texImage3D:ge,pixelStorei:Fe,getParameter:we,updateUBOMapping:tt,uniformBlockBinding:at,texStorage2D:ne,texStorage3D:_e,texSubImage2D:w,texSubImage3D:Q,compressedTexSubImage2D:le,compressedTexSubImage3D:xe,scissor:Be,viewport:Le,reset:ut}}function FR(i,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Pt,g=new WeakMap,v=new Set;let _;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(O,w){return T?new OffscreenCanvas(O,w):Oc("canvas")}function S(O,w,Q){let le=1;const xe=Lt(O);if((xe.width>Q||xe.height>Q)&&(le=Q/Math.max(xe.width,xe.height)),le<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ne=Math.floor(le*xe.width),_e=Math.floor(le*xe.height);_===void 0&&(_=C(ne,_e));const ee=w?C(ne,_e):_;return ee.width=ne,ee.height=_e,ee.getContext("2d").drawImage(O,0,0,ne,_e),ft("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ne+"x"+_e+")."),ee}else return"data"in O&&ft("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),O;return O}function y(O){return O.generateMipmaps}function D(O){i.generateMipmap(O)}function L(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(O,w,Q,le,xe,ne=!1){if(O!==null){if(i[O]!==void 0)return i[O];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e;le&&(_e=e.get("EXT_texture_norm16"),_e||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=w;if(w===i.RED&&(Q===i.FLOAT&&(ee=i.R32F),Q===i.HALF_FLOAT&&(ee=i.R16F),Q===i.UNSIGNED_BYTE&&(ee=i.R8),Q===i.UNSIGNED_SHORT&&_e&&(ee=_e.R16_EXT),Q===i.SHORT&&_e&&(ee=_e.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ee=i.R8UI),Q===i.UNSIGNED_SHORT&&(ee=i.R16UI),Q===i.UNSIGNED_INT&&(ee=i.R32UI),Q===i.BYTE&&(ee=i.R8I),Q===i.SHORT&&(ee=i.R16I),Q===i.INT&&(ee=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(ee=i.RG32F),Q===i.HALF_FLOAT&&(ee=i.RG16F),Q===i.UNSIGNED_BYTE&&(ee=i.RG8),Q===i.UNSIGNED_SHORT&&_e&&(ee=_e.RG16_EXT),Q===i.SHORT&&_e&&(ee=_e.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ee=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ee=i.RG16UI),Q===i.UNSIGNED_INT&&(ee=i.RG32UI),Q===i.BYTE&&(ee=i.RG8I),Q===i.SHORT&&(ee=i.RG16I),Q===i.INT&&(ee=i.RG32I)),w===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),Q===i.UNSIGNED_INT&&(ee=i.RGB32UI),Q===i.BYTE&&(ee=i.RGB8I),Q===i.SHORT&&(ee=i.RGB16I),Q===i.INT&&(ee=i.RGB32I)),w===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ee=i.RGBA32UI),Q===i.BYTE&&(ee=i.RGBA8I),Q===i.SHORT&&(ee=i.RGBA16I),Q===i.INT&&(ee=i.RGBA32I)),w===i.RGB&&(Q===i.UNSIGNED_SHORT&&_e&&(ee=_e.RGB16_EXT),Q===i.SHORT&&_e&&(ee=_e.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),w===i.RGBA){const ge=ne?Uc:Dt.getTransfer(xe);Q===i.FLOAT&&(ee=i.RGBA32F),Q===i.HALF_FLOAT&&(ee=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ee=ge===Wt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&_e&&(ee=_e.RGBA16_EXT),Q===i.SHORT&&_e&&(ee=_e.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function N(O,w){let Q;return O?w===null||w===ir||w===Fo?Q=i.DEPTH24_STENCIL8:w===Ji?Q=i.DEPTH32F_STENCIL8:w===ko&&(Q=i.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ir||w===Fo?Q=i.DEPTH_COMPONENT24:w===Ji?Q=i.DEPTH_COMPONENT32F:w===ko&&(Q=i.DEPTH_COMPONENT16),Q}function P(O,w){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==Rn&&O.minFilter!==Fn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function I(O){const w=O.target;w.removeEventListener("dispose",I),U(w),w.isVideoTexture&&g.delete(w),w.isHTMLTexture&&v.delete(w)}function E(O){const w=O.target;w.removeEventListener("dispose",E),z(w)}function U(O){const w=r.get(O);if(w.__webglInit===void 0)return;const Q=O.source,le=M.get(Q);if(le){const xe=le[w.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&B(O),Object.keys(le).length===0&&M.delete(Q)}r.remove(O)}function B(O){const w=r.get(O);i.deleteTexture(w.__webglTexture);const Q=O.source,le=M.get(Q);delete le[w.__cacheKey],c.memory.textures--}function z(O){const w=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let le=0;le<6;le++){if(Array.isArray(w.__webglFramebuffer[le]))for(let xe=0;xe<w.__webglFramebuffer[le].length;xe++)i.deleteFramebuffer(w.__webglFramebuffer[le][xe]);else i.deleteFramebuffer(w.__webglFramebuffer[le]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[le])}else{if(Array.isArray(w.__webglFramebuffer))for(let le=0;le<w.__webglFramebuffer.length;le++)i.deleteFramebuffer(w.__webglFramebuffer[le]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let le=0;le<w.__webglColorRenderbuffer.length;le++)w.__webglColorRenderbuffer[le]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[le]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Q=O.textures;for(let le=0,xe=Q.length;le<xe;le++){const ne=r.get(Q[le]);ne.__webglTexture&&(i.deleteTexture(ne.__webglTexture),c.memory.textures--),r.remove(Q[le])}r.remove(O)}let X=0;function de(){X=0}function pe(){return X}function Y(O){X=O}function me(){const O=X;return O>=a.maxTextures&&ft("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+a.maxTextures),X+=1,O}function J(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function q(O,w){const Q=r.get(O);if(O.isVideoTexture&&W(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&Q.__version!==O.version){const le=O.image;if(le===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Q,O,w);return}}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function ue(O,w){const Q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){ke(Q,O,w);return}else O.isExternalTexture&&(Q.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function ae(O,w){const Q=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&Q.__version!==O.version){ke(Q,O,w);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function k(O,w){const Q=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&Q.__version!==O.version){Ze(Q,O,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}const Z={[zf]:i.REPEAT,[Mr]:i.CLAMP_TO_EDGE,[Vf]:i.MIRRORED_REPEAT},Ce={[Rn]:i.NEAREST,[Qw]:i.NEAREST_MIPMAP_NEAREST,[Kl]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[Gd]:i.LINEAR_MIPMAP_NEAREST,[Cs]:i.LINEAR_MIPMAP_LINEAR},ze={[nE]:i.NEVER,[oE]:i.ALWAYS,[iE]:i.LESS,[Xh]:i.LEQUAL,[rE]:i.EQUAL,[qh]:i.GEQUAL,[sE]:i.GREATER,[aE]:i.NOTEQUAL};function Ge(O,w){if(w.type===Ji&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Fn||w.magFilter===Gd||w.magFilter===Kl||w.magFilter===Cs||w.minFilter===Fn||w.minFilter===Gd||w.minFilter===Kl||w.minFilter===Cs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Z[w.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Z[w.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Z[w.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Ce[w.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Ce[w.minFilter]),w.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ze[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Kl&&w.minFilter!==Cs||w.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(O,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,a.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function K(O,w){let Q=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",I));const le=w.source;let xe=M.get(le);xe===void 0&&(xe={},M.set(le,xe));const ne=J(w);if(ne!==O.__cacheKey){xe[ne]===void 0&&(xe[ne]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,Q=!0),xe[ne].usedTimes++;const _e=xe[O.__cacheKey];_e!==void 0&&(xe[O.__cacheKey].usedTimes--,_e.usedTimes===0&&B(w)),O.__cacheKey=ne,O.__webglTexture=xe[ne].texture}return Q}function Se(O,w,Q){return Math.floor(Math.floor(O/Q)/w)}function ve(O,w,Q,le){const ne=O.updateRanges;if(ne.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Q,le,w.data);else{ne.sort((Fe,Be)=>Fe.start-Be.start);let _e=0;for(let Fe=1;Fe<ne.length;Fe++){const Be=ne[_e],Le=ne[Fe],tt=Be.start+Be.count,at=Se(Le.start,w.width,4),ut=Se(Be.start,w.width,4);Le.start<=tt+1&&at===ut&&Se(Le.start+Le.count-1,w.width,4)===at?Be.count=Math.max(Be.count,Le.start+Le.count-Be.start):(++_e,ne[_e]=Le)}ne.length=_e+1;const ee=t.getParameter(i.UNPACK_ROW_LENGTH),ge=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let Fe=0,Be=ne.length;Fe<Be;Fe++){const Le=ne[Fe],tt=Math.floor(Le.start/4),at=Math.ceil(Le.count/4),ut=tt%w.width,H=Math.floor(tt/w.width),Re=at,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,H),t.texSubImage2D(i.TEXTURE_2D,0,ut,H,Re,ye,Q,le,w.data)}O.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function ke(O,w,Q){let le=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(le=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(le=i.TEXTURE_3D);const xe=K(O,w),ne=w.source;t.bindTexture(le,O.__webglTexture,i.TEXTURE0+Q);const _e=r.get(ne);if(ne.version!==_e.__version||xe===!0){if(t.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const ye=Dt.getPrimaries(Dt.workingColorSpace),Oe=w.colorSpace===ts?null:Dt.getPrimaries(w.colorSpace),Ie=w.colorSpace===ts||ye===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let ge=S(w.image,!1,a.maxTextureSize);ge=un(w,ge);const we=l.convert(w.format,w.colorSpace),Fe=l.convert(w.type);let Be=b(w.internalFormat,we,Fe,w.normalized,w.colorSpace,w.isVideoTexture);Ge(le,w);let Le;const tt=w.mipmaps,at=w.isVideoTexture!==!0,ut=_e.__version===void 0||xe===!0,H=ne.dataReady,Re=P(w,ge);if(w.isDepthTexture)Be=N(w.format===Rs,w.type),ut&&(at?t.texStorage2D(i.TEXTURE_2D,1,Be,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,we,Fe,null));else if(w.isDataTexture)if(tt.length>0){at&&ut&&t.texStorage2D(i.TEXTURE_2D,Re,Be,tt[0].width,tt[0].height);for(let ye=0,Oe=tt.length;ye<Oe;ye++)Le=tt[ye],at?H&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,we,Fe,Le.data):t.texImage2D(i.TEXTURE_2D,ye,Be,Le.width,Le.height,0,we,Fe,Le.data);w.generateMipmaps=!1}else at?(ut&&t.texStorage2D(i.TEXTURE_2D,Re,Be,ge.width,ge.height),H&&ve(w,ge,we,Fe)):t.texImage2D(i.TEXTURE_2D,0,Be,ge.width,ge.height,0,we,Fe,ge.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){at&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Be,tt[0].width,tt[0].height,ge.depth);for(let ye=0,Oe=tt.length;ye<Oe;ye++)if(Le=tt[ye],w.format!==Oi)if(we!==null)if(at){if(H)if(w.layerUpdates.size>0){const Ie=jg(Le.width,Le.height,w.format,w.type);for(const be of w.layerUpdates){const $e=Le.data.subarray(be*Ie/Le.data.BYTES_PER_ELEMENT,(be+1)*Ie/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,be,Le.width,Le.height,1,we,$e)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,ge.depth,we,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Be,Le.width,Le.height,ge.depth,0,Le.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?H&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,ge.depth,we,Fe,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Be,Le.width,Le.height,ge.depth,0,we,Fe,Le.data)}else{at&&ut&&t.texStorage2D(i.TEXTURE_2D,Re,Be,tt[0].width,tt[0].height);for(let ye=0,Oe=tt.length;ye<Oe;ye++)Le=tt[ye],w.format!==Oi?we!==null?at?H&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,we,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Be,Le.width,Le.height,0,Le.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?H&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Le.width,Le.height,we,Fe,Le.data):t.texImage2D(i.TEXTURE_2D,ye,Be,Le.width,Le.height,0,we,Fe,Le.data)}else if(w.isDataArrayTexture)if(at){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Be,ge.width,ge.height,ge.depth),H)if(w.layerUpdates.size>0){const ye=jg(ge.width,ge.height,w.format,w.type);for(const Oe of w.layerUpdates){const Ie=ge.data.subarray(Oe*ye/ge.data.BYTES_PER_ELEMENT,(Oe+1)*ye/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Oe,ge.width,ge.height,1,we,Fe,Ie)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,we,Fe,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ge.width,ge.height,ge.depth,0,we,Fe,ge.data);else if(w.isData3DTexture)at?(ut&&t.texStorage3D(i.TEXTURE_3D,Re,Be,ge.width,ge.height,ge.depth),H&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,we,Fe,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ge.width,ge.height,ge.depth,0,we,Fe,ge.data);else if(w.isFramebufferTexture){if(ut)if(at)t.texStorage2D(i.TEXTURE_2D,Re,Be,ge.width,ge.height);else{let ye=ge.width,Oe=ge.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,Be,ye,Oe,0,we,Fe,null),ye>>=1,Oe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){const ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),ge.parentNode!==ye){ye.appendChild(ge),v.add(w),ye.onpaint=Oe=>{const Ie=Oe.changedElements;for(const be of v)Ie.includes(be.image)&&(be.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ge);else{const Ie=i.RGBA,be=i.RGBA,$e=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ie,be,$e,ge)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(at&&ut){const ye=Lt(tt[0]);t.texStorage2D(i.TEXTURE_2D,Re,Be,ye.width,ye.height)}for(let ye=0,Oe=tt.length;ye<Oe;ye++)Le=tt[ye],at?H&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we,Fe,Le):t.texImage2D(i.TEXTURE_2D,ye,Be,we,Fe,Le);w.generateMipmaps=!1}else if(at){if(ut){const ye=Lt(ge);t.texStorage2D(i.TEXTURE_2D,Re,Be,ye.width,ye.height)}H&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Fe,ge)}else t.texImage2D(i.TEXTURE_2D,0,Be,we,Fe,ge);y(w)&&D(le),_e.__version=ne.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Ze(O,w,Q){if(w.image.length!==6)return;const le=K(O,w),xe=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Q);const ne=r.get(xe);if(xe.version!==ne.__version||le===!0){t.activeTexture(i.TEXTURE0+Q);const _e=Dt.getPrimaries(Dt.workingColorSpace),ee=w.colorSpace===ts?null:Dt.getPrimaries(w.colorSpace),ge=w.colorSpace===ts||_e===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const we=w.isCompressedTexture||w.image[0].isCompressedTexture,Fe=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let be=0;be<6;be++)!we&&!Fe?Be[be]=S(w.image[be],!0,a.maxCubemapSize):Be[be]=Fe?w.image[be].image:w.image[be],Be[be]=un(w,Be[be]);const Le=Be[0],tt=l.convert(w.format,w.colorSpace),at=l.convert(w.type),ut=b(w.internalFormat,tt,at,w.normalized,w.colorSpace),H=w.isVideoTexture!==!0,Re=ne.__version===void 0||le===!0,ye=xe.dataReady;let Oe=P(w,Le);Ge(i.TEXTURE_CUBE_MAP,w);let Ie;if(we){H&&Re&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ut,Le.width,Le.height);for(let be=0;be<6;be++){Ie=Be[be].mipmaps;for(let $e=0;$e<Ie.length;$e++){const Xe=Ie[$e];w.format!==Oi?tt!==null?H?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e,0,0,Xe.width,Xe.height,tt,Xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e,ut,Xe.width,Xe.height,0,Xe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e,0,0,Xe.width,Xe.height,tt,at,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e,ut,Xe.width,Xe.height,0,tt,at,Xe.data)}}}else{if(Ie=w.mipmaps,H&&Re){Ie.length>0&&Oe++;const be=Lt(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,ut,be.width,be.height)}for(let be=0;be<6;be++)if(Fe){H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Be[be].width,Be[be].height,tt,at,Be[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,Be[be].width,Be[be].height,0,tt,at,Be[be].data);for(let $e=0;$e<Ie.length;$e++){const wt=Ie[$e].image[be].image;H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e+1,0,0,wt.width,wt.height,tt,at,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e+1,ut,wt.width,wt.height,0,tt,at,wt.data)}}else{H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,tt,at,Be[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ut,tt,at,Be[be]);for(let $e=0;$e<Ie.length;$e++){const Xe=Ie[$e];H?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e+1,0,0,tt,at,Xe.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,$e+1,ut,tt,at,Xe.image[be])}}}y(w)&&D(i.TEXTURE_CUBE_MAP),ne.__version=xe.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Je(O,w,Q,le,xe,ne){const _e=l.convert(Q.format,Q.colorSpace),ee=l.convert(Q.type),ge=b(Q.internalFormat,_e,ee,Q.normalized,Q.colorSpace),we=r.get(w),Fe=r.get(Q);if(Fe.__renderTarget=w,!we.__hasExternalTextures){const Be=Math.max(1,w.width>>ne),Le=Math.max(1,w.height>>ne);xe===i.TEXTURE_3D||xe===i.TEXTURE_2D_ARRAY?t.texImage3D(xe,ne,ge,Be,Le,w.depth,0,_e,ee,null):t.texImage2D(xe,ne,ge,Be,Le,0,_e,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Bt(w)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,le,xe,Fe.__webglTexture,0,Ot(w)):(xe===i.TEXTURE_2D||xe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,le,xe,Fe.__webglTexture,ne),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(O,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,O),w.depthBuffer){const le=w.depthTexture,xe=le&&le.isDepthTexture?le.type:null,ne=N(w.stencilBuffer,xe),_e=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(w)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(w),ne,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(w),ne,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ne,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_e,i.RENDERBUFFER,O)}else{const le=w.textures;for(let xe=0;xe<le.length;xe++){const ne=le[xe],_e=l.convert(ne.format,ne.colorSpace),ee=l.convert(ne.type),ge=b(ne.internalFormat,_e,ee,ne.normalized,ne.colorSpace);Bt(w)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ot(w),ge,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot(w),ge,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,ge,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Me(O,w,Q){const le=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const xe=r.get(w.depthTexture);if(xe.__renderTarget=w,(!xe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),le){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),xe.__webglTexture===void 0){xe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,w.depthTexture);const we=l.convert(w.depthTexture.format),Fe=l.convert(w.depthTexture.type);let Be;w.depthTexture.format===Tr?Be=i.DEPTH_COMPONENT24:w.depthTexture.format===Rs&&(Be=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Be,w.width,w.height,0,we,Fe,null)}}else q(w.depthTexture,0);const ne=xe.__webglTexture,_e=Ot(w),ee=le?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,ge=w.depthTexture.format===Rs?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===Tr)Bt(w)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ee,ne,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ee,ne,0);else if(w.depthTexture.format===Rs)Bt(w)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,ee,ne,0,_e):i.framebufferTexture2D(i.FRAMEBUFFER,ge,ee,ne,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(O){const w=r.get(O),Q=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const le=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),le){const xe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,le.removeEventListener("dispose",xe)};le.addEventListener("dispose",xe),w.__depthDisposeCallback=xe}w.__boundDepthTexture=le}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let le=0;le<6;le++)Me(w.__webglFramebuffer[le],O,le);else{const le=O.texture.mipmaps;le&&le.length>0?Me(w.__webglFramebuffer[0],O,0):Me(w.__webglFramebuffer,O,0)}else if(Q){w.__webglDepthbuffer=[];for(let le=0;le<6;le++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[le]),w.__webglDepthbuffer[le]===void 0)w.__webglDepthbuffer[le]=i.createRenderbuffer(),_t(w.__webglDepthbuffer[le],O,!1);else{const xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer[le];i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ne)}}else{const le=O.texture.mipmaps;if(le&&le.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),_t(w.__webglDepthbuffer,O,!1);else{const xe=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,ne)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(O,w,Q){const le=r.get(O);w!==void 0&&Je(le.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&rt(O)}function Pe(O){const w=O.texture,Q=r.get(O),le=r.get(w);O.addEventListener("dispose",E);const xe=O.textures,ne=O.isWebGLCubeRenderTarget===!0,_e=xe.length>1;if(_e||(le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture()),le.__version=w.version,c.memory.textures++),ne){Q.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer[ee]=[];for(let ge=0;ge<w.mipmaps.length;ge++)Q.__webglFramebuffer[ee][ge]=i.createFramebuffer()}else Q.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ee=0;ee<w.mipmaps.length;ee++)Q.__webglFramebuffer[ee]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(_e)for(let ee=0,ge=xe.length;ee<ge;ee++){const we=r.get(xe[ee]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),c.memory.textures++)}if(O.samples>0&&Bt(O)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ee=0;ee<xe.length;ee++){const ge=xe[ee];Q.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ee]);const we=l.convert(ge.format,ge.colorSpace),Fe=l.convert(ge.type),Be=b(ge.internalFormat,we,Fe,ge.normalized,ge.colorSpace,O.isXRRenderTarget===!0),Le=Ot(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Be,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(Q.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ne){t.bindTexture(i.TEXTURE_CUBE_MAP,le.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,w);for(let ee=0;ee<6;ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Je(Q.__webglFramebuffer[ee][ge],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge);else Je(Q.__webglFramebuffer[ee],O,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);y(w)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let ee=0,ge=xe.length;ee<ge;ee++){const we=xe[ee],Fe=r.get(we);let Be=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Be=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Be,Fe.__webglTexture),Ge(Be,we),Je(Q.__webglFramebuffer,O,we,i.COLOR_ATTACHMENT0+ee,Be,0),y(we)&&D(Be)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ee=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,le.__webglTexture),Ge(ee,w),w.mipmaps&&w.mipmaps.length>0)for(let ge=0;ge<w.mipmaps.length;ge++)Je(Q.__webglFramebuffer[ge],O,w,i.COLOR_ATTACHMENT0,ee,ge);else Je(Q.__webglFramebuffer,O,w,i.COLOR_ATTACHMENT0,ee,0);y(w)&&D(ee),t.unbindTexture()}O.depthBuffer&&rt(O)}function ht(O){const w=O.textures;for(let Q=0,le=w.length;Q<le;Q++){const xe=w[Q];if(y(xe)){const ne=L(O),_e=r.get(xe).__webglTexture;t.bindTexture(ne,_e),D(ne),t.unbindTexture()}}}const yt=[],Ct=[];function Ht(O){if(O.samples>0){if(Bt(O)===!1){const w=O.textures,Q=O.width,le=O.height;let xe=i.COLOR_BUFFER_BIT;const ne=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=r.get(O),ee=w.length>1;if(ee)for(let we=0;we<w.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const ge=O.texture.mipmaps;ge&&ge.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let we=0;we<w.length;we++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(xe|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(xe|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const Fe=r.get(w[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,Q,le,0,0,Q,le,xe,i.NEAREST),h===!0&&(yt.length=0,Ct.length=0,yt.push(i.COLOR_ATTACHMENT0+we),O.depthBuffer&&O.resolveDepthBuffer===!1&&(yt.push(ne),Ct.push(ne),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let we=0;we<w.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,_e.__webglColorRenderbuffer[we]);const Fe=r.get(w[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,_e.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,Fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const w=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function Ot(O){return Math.min(a.maxSamples,O.samples)}function Bt(O){const w=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function W(O){const w=c.render.frame;g.get(O)!==w&&(g.set(O,w),O.update())}function un(O,w){const Q=O.colorSpace,le=O.format,xe=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||Q!==Ic&&Q!==ts&&(Dt.getTransfer(Q)===Wt?(le!==Oi||xe!==di)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",Q)),w}function Lt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=pe,this.setTextureUnits=Y,this.setTexture2D=q,this.setTexture2DArray=ue,this.setTexture3D=ae,this.setTextureCube=k,this.rebindTextures=ot,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function BR(i,e){function t(r,a=ts){let l;const c=Dt.getTransfer(a);if(r===di)return i.UNSIGNED_BYTE;if(r===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===yv)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===Sv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===vv)return i.BYTE;if(r===_v)return i.SHORT;if(r===ko)return i.UNSIGNED_SHORT;if(r===zh)return i.INT;if(r===ir)return i.UNSIGNED_INT;if(r===Ji)return i.FLOAT;if(r===Er)return i.HALF_FLOAT;if(r===Mv)return i.ALPHA;if(r===bv)return i.RGB;if(r===Oi)return i.RGBA;if(r===Tr)return i.DEPTH_COMPONENT;if(r===Rs)return i.DEPTH_STENCIL;if(r===wv)return i.RED;if(r===Gh)return i.RED_INTEGER;if(r===Os)return i.RG;if(r===jh)return i.RG_INTEGER;if(r===Wh)return i.RGBA_INTEGER;if(r===Mc||r===bc||r===wc||r===Ec)if(c===Wt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Mc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===wc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Mc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===wc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hf||r===Gf||r===jf||r===Wf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xf||r===qf||r===$f||r===Yf||r===Kf||r===Lc||r===Zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xf||r===qf)return c===Wt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$f)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yf)return l.COMPRESSED_R11_EAC;if(r===Kf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Lc)return l.COMPRESSED_RG11_EAC;if(r===Zf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jf||r===Qf||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh||r===lh||r===ch||r===uh||r===dh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Jf)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return c===Wt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fh||r===hh||r===ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===fh)return c===Wt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mh||r===gh||r===Dc||r===xh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===mh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const zR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VR=`
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

}`;class HR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Dv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new rr({vertexShader:zR,fragmentShader:VR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ki(new qc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GR extends Fs{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,v=null,_=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",S=new HR,y={},D=t.getContextAttributes();let L=null,b=null;const N=[],P=[],I=new Pt;let E=null;const U=new ui;U.viewport=new rn;const B=new ui;B.viewport=new rn;const z=[U,B],X=new ZE;let de=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let Se=N[K];return Se===void 0&&(Se=new Zd,N[K]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(K){let Se=N[K];return Se===void 0&&(Se=new Zd,N[K]=Se),Se.getGripSpace()},this.getHand=function(K){let Se=N[K];return Se===void 0&&(Se=new Zd,N[K]=Se),Se.getHandSpace()};function Y(K){const Se=P.indexOf(K.inputSource);if(Se===-1)return;const ve=N[Se];ve!==void 0&&(ve.update(K.inputSource,K.frame,m||c),ve.dispatchEvent({type:K.type,data:K.inputSource}))}function me(){a.removeEventListener("select",Y),a.removeEventListener("selectstart",Y),a.removeEventListener("selectend",Y),a.removeEventListener("squeeze",Y),a.removeEventListener("squeezestart",Y),a.removeEventListener("squeezeend",Y),a.removeEventListener("end",me),a.removeEventListener("inputsourceschange",J);for(let K=0;K<N.length;K++){const Se=P[K];Se!==null&&(P[K]=null,N[K].disconnect(Se))}de=null,pe=null,S.reset();for(const K in y)delete y[K];e.setRenderTarget(L),M=null,_=null,v=null,a=null,b=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){l=K,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return v===null&&C&&(v=new XRWebGLBinding(a,t)),v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(K){if(a=K,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",Y),a.addEventListener("selectstart",Y),a.addEventListener("selectend",Y),a.addEventListener("squeeze",Y),a.addEventListener("squeezestart",Y),a.addEventListener("squeezeend",Y),a.addEventListener("end",me),a.addEventListener("inputsourceschange",J),D.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ke=null,Ze=null;D.depth&&(Ze=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=D.stencil?Rs:Tr,ke=D.stencil?Fo:ir);const Je={colorFormat:t.RGBA8,depthFormat:Ze,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(Je),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new tr(_.textureWidth,_.textureHeight,{format:Oi,type:di,depthTexture:new Na(_.textureWidth,_.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const ve={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new tr(M.framebufferWidth,M.framebufferHeight,{format:Oi,type:di,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await a.requestReferenceSpace(d),Ge.setContext(a),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(K){for(let Se=0;Se<K.removed.length;Se++){const ve=K.removed[Se],ke=P.indexOf(ve);ke>=0&&(P[ke]=null,N[ke].disconnect(ve))}for(let Se=0;Se<K.added.length;Se++){const ve=K.added[Se];let ke=P.indexOf(ve);if(ke===-1){for(let Je=0;Je<N.length;Je++)if(Je>=P.length){P.push(ve),ke=Je;break}else if(P[Je]===null){P[Je]=ve,ke=Je;break}if(ke===-1)break}const Ze=N[ke];Ze&&Ze.connect(ve)}}const q=new ie,ue=new ie;function ae(K,Se,ve){q.setFromMatrixPosition(Se.matrixWorld),ue.setFromMatrixPosition(ve.matrixWorld);const ke=q.distanceTo(ue),Ze=Se.projectionMatrix.elements,Je=ve.projectionMatrix.elements,_t=Ze[14]/(Ze[10]-1),Me=Ze[14]/(Ze[10]+1),rt=(Ze[9]+1)/Ze[5],ot=(Ze[9]-1)/Ze[5],Pe=(Ze[8]-1)/Ze[0],ht=(Je[8]+1)/Je[0],yt=_t*Pe,Ct=_t*ht,Ht=ke/(-Pe+ht),Ot=Ht*-Pe;if(Se.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ot),K.translateZ(Ht),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ze[10]===-1)K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const Bt=_t+Ht,W=Me+Ht,un=yt-Ot,Lt=Ct+(ke-Ot),O=rt*Me/W*Bt,w=ot*Me/W*Bt;K.projectionMatrix.makePerspective(un,Lt,O,w,Bt,W),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function k(K,Se){Se===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(Se.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(a===null)return;let Se=K.near,ve=K.far;S.texture!==null&&(S.depthNear>0&&(Se=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),X.near=B.near=U.near=Se,X.far=B.far=U.far=ve,(de!==X.near||pe!==X.far)&&(a.updateRenderState({depthNear:X.near,depthFar:X.far}),de=X.near,pe=X.far),X.layers.mask=K.layers.mask|6,U.layers.mask=X.layers.mask&-5,B.layers.mask=X.layers.mask&-3;const ke=K.parent,Ze=X.cameras;k(X,ke);for(let Je=0;Je<Ze.length;Je++)k(Ze[Je],ke);Ze.length===2?ae(X,U,B):X.projectionMatrix.copy(U.projectionMatrix),Z(K,X,ke)};function Z(K,Se,ve){ve===null?K.matrix.copy(Se.matrixWorld):(K.matrix.copy(ve.matrixWorld),K.matrix.invert(),K.matrix.multiply(Se.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(Se.projectionMatrix),K.projectionMatrixInverse.copy(Se.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_h*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(_===null&&M===null))return h},this.setFoveation=function(K){h=K,_!==null&&(_.fixedFoveation=K),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(K){return y[K]};let Ce=null;function ze(K,Se){if(g=Se.getViewerPose(m||c),T=Se,g!==null){const ve=g.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let ke=!1;ve.length!==X.cameras.length&&(X.cameras.length=0,ke=!0);for(let Me=0;Me<ve.length;Me++){const rt=ve[Me];let ot=null;if(M!==null)ot=M.getViewport(rt);else{const ht=v.getViewSubImage(_,rt);ot=ht.viewport,Me===0&&(e.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(b))}let Pe=z[Me];Pe===void 0&&(Pe=new ui,Pe.layers.enable(Me),Pe.viewport=new rn,z[Me]=Pe),Pe.matrix.fromArray(rt.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(rt.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(ot.x,ot.y,ot.width,ot.height),Me===0&&(X.matrix.copy(Pe.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),ke===!0&&X.cameras.push(Pe)}const Ze=a.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){v=r.getBinding();const Me=v.getDepthInformation(ve[0]);Me&&Me.isValid&&Me.texture&&S.init(Me,a.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),v=r.getBinding();for(let Me=0;Me<ve.length;Me++){const rt=ve[Me].camera;if(rt){let ot=y[rt];ot||(ot=new Dv,y[rt]=ot);const Pe=v.getCameraImage(rt);ot.sourceTexture=Pe}}}}for(let ve=0;ve<N.length;ve++){const ke=P[ve],Ze=N[ve];ke!==null&&Ze!==void 0&&Ze.update(ke,Se,m||c)}Ce&&Ce(K,Se),Se.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Se}),T=null}const Ge=new Fv;Ge.setAnimationLoop(ze),this.setAnimationLoop=function(K){Ce=K},this.dispose=function(){}}}const jR=new an,Wv=new xt;Wv.set(-1,0,0,0,1,0,0,0,1);function WR(i,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Iv(i)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,D,L,b){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?l(S,y):y.isMeshLambertMaterial?(l(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(S,y),v(S,y)):y.isMeshPhongMaterial?(l(S,y),g(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&M(S,y,b)):y.isMeshMatcapMaterial?(l(S,y),T(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),C(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?h(S,y,D,L):y.isSpriteMaterial?m(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===ii&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===ii&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const D=e.get(y),L=D.envMap,b=D.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(jR.makeRotationFromEuler(b)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Wv),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function h(S,y,D,L){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*D,S.scale.value=L*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function g(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function M(S,y,D){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ii&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,y){y.matcap&&(S.matcap.value=y.matcap)}function C(S,y){const D=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XR(i,e,t,r){let a={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,N){const P=N.program;r.uniformBlockBinding(b,P)}function m(b,N){let P=a[b.id];P===void 0&&(S(b),P=g(b),a[b.id]=P,b.addEventListener("dispose",D));const I=N.program;r.updateUBOMapping(b,I);const E=e.render.frame;l[b.id]!==E&&(_(b),l[b.id]=E)}function g(b){const N=v();b.__bindingPointIndex=N;const P=i.createBuffer(),I=b.__size,E=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,P),P}function v(){for(let b=0;b<d;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const N=a[b.id],P=b.uniforms,I=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let E=0,U=P.length;E<U;E++){const B=P[E];if(Array.isArray(B))for(let z=0,X=B.length;z<X;z++)M(B[z],E,z,I);else M(B,E,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(b,N,P,I){if(C(b,N,P,I)===!0){const E=b.__offset,U=b.value;if(Array.isArray(U)){let B=0;for(let z=0;z<U.length;z++){const X=U[z],de=y(X);T(X,b.__data,B),typeof X!="number"&&typeof X!="boolean"&&!X.isMatrix3&&!ArrayBuffer.isView(X)&&(B+=de.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}function T(b,N,P){typeof b=="number"||typeof b=="boolean"?N[0]=b:b.isMatrix3?(N[0]=b.elements[0],N[1]=b.elements[1],N[2]=b.elements[2],N[3]=0,N[4]=b.elements[3],N[5]=b.elements[4],N[6]=b.elements[5],N[7]=0,N[8]=b.elements[6],N[9]=b.elements[7],N[10]=b.elements[8],N[11]=0):ArrayBuffer.isView(b)?N.set(new b.constructor(b.buffer,b.byteOffset,N.length)):b.toArray(N,P)}function C(b,N,P,I){const E=b.value,U=N+"_"+P;if(I[U]===void 0)return typeof E=="number"||typeof E=="boolean"?I[U]=E:ArrayBuffer.isView(E)?I[U]=E.slice():I[U]=E.clone(),!0;{const B=I[U];if(typeof E=="number"||typeof E=="boolean"){if(B!==E)return I[U]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(B.equals(E)===!1)return B.copy(E),!0}}return!1}function S(b){const N=b.uniforms;let P=0;const I=16;for(let U=0,B=N.length;U<B;U++){const z=Array.isArray(N[U])?N[U]:[N[U]];for(let X=0,de=z.length;X<de;X++){const pe=z[X],Y=Array.isArray(pe.value)?pe.value:[pe.value];for(let me=0,J=Y.length;me<J;me++){const q=Y[me],ue=y(q),ae=P%I,k=ae%ue.boundary,Z=ae+k;P+=k,Z!==0&&I-Z<ue.storage&&(P+=I-Z),pe.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),pe.__offset=P,P+=ue.storage}}}const E=P%I;return E>0&&(P+=I-E),b.__size=P,b.__cache={},this}function y(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(N.boundary=16,N.storage=b.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",b),N}function D(b){const N=b.target;N.removeEventListener("dispose",D);const P=c.indexOf(N.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function L(){for(const b in a)i.deleteBuffer(a[b]);c=[],a={},l={}}return{bind:h,update:m,dispose:L}}const qR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ki=null;function $R(){return Ki===null&&(Ki=new LE(qR,16,16,Os,Er),Ki.name="DFG_LUT",Ki.minFilter=Fn,Ki.magFilter=Fn,Ki.wrapS=Mr,Ki.wrapT=Mr,Ki.generateMipmaps=!1,Ki.needsUpdate=!0),Ki}class YR{constructor(e={}){const{canvas:t=cE(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:M=di}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=c;const C=M,S=new Set([Wh,jh,Gh]),y=new Set([di,ir,ko,Fo,Vh,Hh]),D=new Uint32Array(4),L=new Int32Array(4),b=new ie;let N=null,P=null;const I=[],E=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let z=!1,X=null,de=null,pe=null,Y=null;this._outputColorSpace=_i;let me=0,J=0,q=null,ue=-1,ae=null;const k=new rn,Z=new rn;let Ce=null;const ze=new bt(0);let Ge=0,K=t.width,Se=t.height,ve=1,ke=null,Ze=null;const Je=new rn(0,0,K,Se),_t=new rn(0,0,K,Se);let Me=!1;const rt=new Zh;let ot=!1,Pe=!1;const ht=new an,yt=new ie,Ct=new rn,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function Bt(){return q===null?ve:1}let W=r;function un(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",wt,!1),t.addEventListener("webglcontextrestored",kt,!1),t.addEventListener("webglcontextcreationerror",mn,!1),W===null){const $="webgl2";if(W=un($,R),W===null)throw un($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(R){throw Ut("WebGLRenderer: "+R.message),R}let Lt,O,w,Q,le,xe,ne,_e,ee,ge,we,Fe,Be,Le,tt,at,ut,H,Re,ye,Oe,Ie,be;function $e(){Lt=new $A(W),Lt.init(),Oe=new BR(W,Lt),O=new zA(W,Lt,e,Oe),w=new kR(W,Lt),O.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),de=W.createFramebuffer(),pe=W.createFramebuffer(),Y=W.createFramebuffer(),Q=new ZA(W),le=new bR,xe=new FR(W,Lt,w,le,O,Oe,Q),ne=new qA(B),_e=new tT(W),Ie=new FA(W,_e),ee=new YA(W,_e,Q,Ie),ge=new QA(W,ee,_e,Ie,Q),H=new JA(W,O,xe),tt=new VA(le),we=new MR(B,ne,Lt,O,Ie,tt),Fe=new WR(B,le),Be=new ER,Le=new PR(Lt),ut=new kA(B,ne,w,ge,T,h),at=new OR(B,ge,O),be=new XR(W,Q,O,w),Re=new BA(W,Lt,Q),ye=new KA(W,Lt,Q),Q.programs=we.programs,B.capabilities=O,B.extensions=Lt,B.properties=le,B.renderLists=Be,B.shadowMap=at,B.state=w,B.info=Q}$e(),C!==di&&(U=new tC(C,t.width,t.height,d,a,l));const Xe=new GR(B,W);this.xr=Xe,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=Lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(R){R!==void 0&&(ve=R,this.setSize(K,Se,!1))},this.getSize=function(R){return R.set(K,Se)},this.setSize=function(R,$,fe=!0){if(Xe.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,Se=$,t.width=Math.floor(R*ve),t.height=Math.floor($*ve),fe===!0&&(t.style.width=R+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(K*ve,Se*ve).floor()},this.setDrawingBufferSize=function(R,$,fe){K=R,Se=$,ve=fe,t.width=Math.floor(R*fe),t.height=Math.floor($*fe),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(C===di){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(Je)},this.setViewport=function(R,$,fe,se){R.isVector4?Je.set(R.x,R.y,R.z,R.w):Je.set(R,$,fe,se),w.viewport(k.copy(Je).multiplyScalar(ve).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,$,fe,se){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,$,fe,se),w.scissor(Z.copy(_t).multiplyScalar(ve).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){w.setScissorTest(Me=R)},this.setOpaqueSort=function(R){ke=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,fe=!0){let se=0;if(R){let re=!1;if(q!==null){const Ue=q.texture.format;re=S.has(Ue)}if(re){const Ue=q.texture.type,qe=y.has(Ue),De=ut.getClearColor(),Qe=ut.getClearAlpha(),st=De.r,mt=De.g,gt=De.b;qe?(D[0]=st,D[1]=mt,D[2]=gt,D[3]=Qe,W.clearBufferuiv(W.COLOR,0,D)):(L[0]=st,L[1]=mt,L[2]=gt,L[3]=Qe,W.clearBufferiv(W.COLOR,0,L))}else se|=W.COLOR_BUFFER_BIT}$&&(se|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(se|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&W.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),X=R},this.dispose=function(){t.removeEventListener("webglcontextlost",wt,!1),t.removeEventListener("webglcontextrestored",kt,!1),t.removeEventListener("webglcontextcreationerror",mn,!1),ut.dispose(),Be.dispose(),Le.dispose(),le.dispose(),ne.dispose(),ge.dispose(),Ie.dispose(),be.dispose(),we.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",os),Xe.removeEventListener("sessionend",gn),vt.stop()};function wt(R){R.preventDefault(),Sg("WebGLRenderer: Context Lost."),z=!0}function kt(){Sg("WebGLRenderer: Context Restored."),z=!1;const R=Q.autoReset,$=at.enabled,fe=at.autoUpdate,se=at.needsUpdate,re=at.type;$e(),Q.autoReset=R,at.enabled=$,at.autoUpdate=fe,at.needsUpdate=se,at.type=re}function mn(R){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Vn(R){const $=R.target;$.removeEventListener("dispose",Vn),Fi($)}function Fi(R){ar(R),le.remove(R)}function ar(R){const $=le.get(R).programs;$!==void 0&&($.forEach(function(fe){we.releaseProgram(fe)}),R.isShaderMaterial&&we.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,fe,se,re,Ue){$===null&&($=Ht);const qe=re.isMesh&&re.matrixWorld.determinantAffine()<0,De=Xt(R,$,fe,se,re);w.setMaterial(se,qe);let Qe=fe.index,st=1;if(se.wireframe===!0){if(Qe=ee.getWireframeAttribute(fe),Qe===void 0)return;st=2}const mt=fe.drawRange,gt=fe.attributes.position;let nt=mt.start*st,It=(mt.start+mt.count)*st;Ue!==null&&(nt=Math.max(nt,Ue.start*st),It=Math.min(It,(Ue.start+Ue.count)*st)),Qe!==null?(nt=Math.max(nt,0),It=Math.min(It,Qe.count)):gt!=null&&(nt=Math.max(nt,0),It=Math.min(It,gt.count));const qt=It-nt;if(qt<0||qt===1/0)return;Ie.setup(re,se,De,fe,Qe);let Jt,Gt=Re;if(Qe!==null&&(Jt=_e.get(Qe),Gt=ye,Gt.setIndex(Jt)),re.isMesh)se.wireframe===!0?(w.setLineWidth(se.wireframeLinewidth*Bt()),Gt.setMode(W.LINES)):Gt.setMode(W.TRIANGLES);else if(re.isLine){let fn=se.linewidth;fn===void 0&&(fn=1),w.setLineWidth(fn*Bt()),re.isLineSegments?Gt.setMode(W.LINES):re.isLineLoop?Gt.setMode(W.LINE_LOOP):Gt.setMode(W.LINE_STRIP)}else re.isPoints?Gt.setMode(W.POINTS):re.isSprite&&Gt.setMode(W.TRIANGLES);if(re.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const fn=re._multiDrawStarts,je=re._multiDrawCounts,En=re._multiDrawCount,Mt=Qe?_e.get(Qe).bytesPerElement:1,qn=le.get(se).currentProgram.getUniforms();for(let $n=0;$n<En;$n++)qn.setValue(W,"_gl_DrawID",$n),Gt.render(fn[$n]/Mt,je[$n])}else if(re.isInstancedMesh)Gt.renderInstances(nt,qt,re.count);else if(fe.isInstancedBufferGeometry){const fn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,je=Math.min(fe.instanceCount,fn);Gt.renderInstances(nt,qt,je)}else Gt.render(nt,qt)};function Bi(R,$,fe){R.transparent===!0&&R.side===Sr&&R.forceSinglePass===!1?(R.side=ii,R.needsUpdate=!0,Hi(R,$,fe),R.side=ss,R.needsUpdate=!0,Hi(R,$,fe),R.side=Sr):Hi(R,$,fe)}this.compile=function(R,$,fe=null){fe===null&&(fe=R),P=Le.get(fe),P.init($),E.push(P),fe.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),R!==fe&&R.traverseVisible(function(re){re.isLight&&re.layers.test($.layers)&&(P.pushLight(re),re.castShadow&&P.pushShadow(re))}),P.setupLights();const se=new Set;return R.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ue=re.material;if(Ue)if(Array.isArray(Ue))for(let qe=0;qe<Ue.length;qe++){const De=Ue[qe];Bi(De,fe,re),se.add(De)}else Bi(Ue,fe,re),se.add(Ue)}),P=E.pop(),se},this.compileAsync=function(R,$,fe=null){const se=this.compile(R,$,fe);return new Promise(re=>{function Ue(){if(se.forEach(function(qe){le.get(qe).currentProgram.isReady()&&se.delete(qe)}),se.size===0){re(R);return}setTimeout(Ue,10)}Lt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let zi=null;function Ba(R){zi&&zi(R)}function os(){vt.stop()}function gn(){vt.start()}const vt=new Fv;vt.setAnimationLoop(Ba),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(R){zi=R,Xe.setAnimationLoop(R),R===null?vt.stop():vt.start()},Xe.addEventListener("sessionstart",os),Xe.addEventListener("sessionend",gn),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;X!==null&&X.renderStart(R,$);const fe=Xe.enabled===!0&&Xe.isPresenting===!0,se=U!==null&&(q===null||fe)&&U.begin(B,q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera($),$=Xe.getCamera()),R.isScene===!0&&R.onBeforeRender(B,R,$,q),P=Le.get(R,E.length),P.init($),P.state.textureUnits=xe.getTextureUnits(),E.push(P),ht.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),rt.setFromProjectionMatrix(ht,Qi,$.reversedDepth),Pe=this.localClippingEnabled,ot=tt.init(this.clippingPlanes,Pe),N=Be.get(R,I.length),N.init(),I.push(N),Xe.enabled===!0&&Xe.isPresenting===!0){const qe=B.xr.getDepthSensingMesh();qe!==null&&Rt(qe,$,-1/0,B.sortObjects)}Rt(R,$,0,B.sortObjects),N.finish(),B.sortObjects===!0&&N.sort(ke,Ze,$.reversedDepth),Ot=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,Ot&&ut.addToRenderList(N,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ot===!0&&tt.beginShadows();const re=P.state.shadowsArray;if(at.render(re,R,$),ot===!0&&tt.endShadows(),(se&&U.hasRenderPass())===!1){const qe=N.opaque,De=N.transmissive;if(P.setupLights(),$.isArrayCamera){const Qe=$.cameras;if(De.length>0)for(let st=0,mt=Qe.length;st<mt;st++){const gt=Qe[st];en(qe,De,R,gt)}Ot&&ut.render(R);for(let st=0,mt=Qe.length;st<mt;st++){const gt=Qe[st];Et(N,R,gt,gt.viewport)}}else De.length>0&&en(qe,De,R,$),Ot&&ut.render(R),Et(N,R,$)}q!==null&&J===0&&(xe.updateMultisampleRenderTarget(q),xe.updateRenderTargetMipmap(q)),se&&U.end(B),R.isScene===!0&&R.onAfterRender(B,R,$),Ie.resetDefaultState(),ue=-1,ae=null,E.pop(),E.length>0?(P=E[E.length-1],xe.setTextureUnits(P.state.textureUnits),ot===!0&&tt.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?N=I[I.length-1]:N=null,X!==null&&X.renderEnd()};function Rt(R,$,fe,se){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||rt.intersectsSprite(R)){se&&Ct.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ht);const qe=ge.update(R),De=R.material;De.visible&&N.push(R,qe,De,fe,Ct.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||rt.intersectsObject(R))){const qe=ge.update(R),De=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ct.copy(R.boundingSphere.center)):(qe.boundingSphere===null&&qe.computeBoundingSphere(),Ct.copy(qe.boundingSphere.center)),Ct.applyMatrix4(R.matrixWorld).applyMatrix4(ht)),Array.isArray(De)){const Qe=qe.groups;for(let st=0,mt=Qe.length;st<mt;st++){const gt=Qe[st],nt=De[gt.materialIndex];nt&&nt.visible&&N.push(R,qe,nt,fe,Ct.z,gt)}}else De.visible&&N.push(R,qe,De,fe,Ct.z,null)}}const Ue=R.children;for(let qe=0,De=Ue.length;qe<De;qe++)Rt(Ue[qe],$,fe,se)}function Et(R,$,fe,se){const{opaque:re,transmissive:Ue,transparent:qe}=R;P.setupLightsView(fe),ot===!0&&tt.setGlobalState(B.clippingPlanes,fe),se&&w.viewport(k.copy(se)),re.length>0&&dn(re,$,fe),Ue.length>0&&dn(Ue,$,fe),qe.length>0&&dn(qe,$,fe),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function en(R,$,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[se.id]===void 0){const nt=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[se.id]=new tr(1,1,{generateMipmaps:!0,type:nt?Er:di,minFilter:Cs,samples:Math.max(4,O.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[se.id],qe=se.viewport||k;Ue.setSize(qe.z*B.transmissionResolutionScale,qe.w*B.transmissionResolutionScale);const De=B.getRenderTarget(),Qe=B.getActiveCubeFace(),st=B.getActiveMipmapLevel();B.setRenderTarget(Ue),B.getClearColor(ze),Ge=B.getClearAlpha(),Ge<1&&B.setClearColor(16777215,.5),B.clear(),Ot&&ut.render(fe);const mt=B.toneMapping;B.toneMapping=er;const gt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),P.setupLightsView(se),ot===!0&&tt.setGlobalState(B.clippingPlanes,se),dn(R,fe,se),xe.updateMultisampleRenderTarget(Ue),xe.updateRenderTargetMipmap(Ue),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let It=0,qt=$.length;It<qt;It++){const Jt=$[It],{object:Gt,geometry:fn,material:je,group:En}=Jt;if(je.side===Sr&&Gt.layers.test(se.layers)){const Mt=je.side;je.side=ii,je.needsUpdate=!0,Vi(Gt,fe,se,fn,je,En),je.side=Mt,je.needsUpdate=!0,nt=!0}}nt===!0&&(xe.updateMultisampleRenderTarget(Ue),xe.updateRenderTargetMipmap(Ue))}B.setRenderTarget(De,Qe,st),B.setClearColor(ze,Ge),gt!==void 0&&(se.viewport=gt),B.toneMapping=mt}function dn(R,$,fe){const se=$.isScene===!0?$.overrideMaterial:null;for(let re=0,Ue=R.length;re<Ue;re++){const qe=R[re],{object:De,geometry:Qe,group:st}=qe;let mt=qe.material;mt.allowOverride===!0&&se!==null&&(mt=se),De.layers.test(fe.layers)&&Vi(De,$,fe,Qe,mt,st)}}function Vi(R,$,fe,se,re,Ue){R.onBeforeRender(B,$,fe,se,re,Ue),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),re.onBeforeRender(B,$,fe,se,R,Ue),re.transparent===!0&&re.side===Sr&&re.forceSinglePass===!1?(re.side=ii,re.needsUpdate=!0,B.renderBufferDirect(fe,$,se,re,R,Ue),re.side=ss,re.needsUpdate=!0,B.renderBufferDirect(fe,$,se,re,R,Ue),re.side=Sr):B.renderBufferDirect(fe,$,se,re,R,Ue),R.onAfterRender(B,$,fe,se,re,Ue)}function Hi(R,$,fe){$.isScene!==!0&&($=Ht);const se=le.get(R),re=P.state.lights,Ue=P.state.shadowsArray,qe=re.state.version,De=we.getParameters(R,re.state,Ue,$,fe,P.state.lightProbeGridArray),Qe=we.getProgramCacheKey(De);let st=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?$.environment:null,se.fog=$.fog;const mt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=ne.get(R.envMap||se.environment,mt),se.envMapRotation=se.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",Vn),st=new Map,se.programs=st);let gt=st.get(Qe);if(gt!==void 0){if(se.currentProgram===gt&&se.lightsStateVersion===qe)return za(R,De),gt}else De.uniforms=we.getUniforms(R),X!==null&&R.isNodeMaterial&&X.build(R,fe,De),R.onBeforeCompile(De,B),gt=we.acquireProgram(De,Qe),st.set(Qe,gt),se.uniforms=De.uniforms;const nt=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(nt.clippingPlanes=tt.uniform),za(R,De),se.needsLights=Va(R),se.lightsStateVersion=qe,se.needsLights&&(nt.ambientLightColor.value=re.state.ambient,nt.lightProbe.value=re.state.probe,nt.directionalLights.value=re.state.directional,nt.directionalLightShadows.value=re.state.directionalShadow,nt.spotLights.value=re.state.spot,nt.spotLightShadows.value=re.state.spotShadow,nt.rectAreaLights.value=re.state.rectArea,nt.ltc_1.value=re.state.rectAreaLTC1,nt.ltc_2.value=re.state.rectAreaLTC2,nt.pointLights.value=re.state.point,nt.pointLightShadows.value=re.state.pointShadow,nt.hemisphereLights.value=re.state.hemi,nt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,nt.spotLightMatrix.value=re.state.spotLightMatrix,nt.spotLightMap.value=re.state.spotLightMap,nt.pointShadowMatrix.value=re.state.pointShadowMatrix),se.lightProbeGrid=P.state.lightProbeGridArray.length>0,se.currentProgram=gt,se.uniformsList=null,gt}function Gi(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Tc.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function za(R,$){const fe=le.get(R);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function Bs(R,$){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;b.setFromMatrixPosition($.matrixWorld);for(let fe=0,se=R.length;fe<se;fe++){const re=R[fe];if(re.texture!==null&&re.boundingBox.containsPoint(b))return re}return null}function Xt(R,$,fe,se,re){$.isScene!==!0&&($=Ht),xe.resetTextureUnits();const Ue=$.fog,qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?$.environment:null,De=q===null?B.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Dt.workingColorSpace,Qe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,st=ne.get(se.envMap||qe,Qe),mt=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,gt=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),nt=!!fe.morphAttributes.position,It=!!fe.morphAttributes.normal,qt=!!fe.morphAttributes.color;let Jt=er;se.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Jt=B.toneMapping);const Gt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,fn=Gt!==void 0?Gt.length:0,je=le.get(se),En=P.state.lights;if(ot===!0&&(Pe===!0||R!==ae)){const jt=R===ae&&se.id===ue;tt.setState(se,R,jt)}let Mt=!1;se.version===je.__version?(je.needsLights&&je.lightsStateVersion!==En.state.version||je.outputColorSpace!==De||re.isBatchedMesh&&je.batching===!1||!re.isBatchedMesh&&je.batching===!0||re.isBatchedMesh&&je.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&je.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&je.instancing===!1||!re.isInstancedMesh&&je.instancing===!0||re.isSkinnedMesh&&je.skinning===!1||!re.isSkinnedMesh&&je.skinning===!0||re.isInstancedMesh&&je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&je.instancingMorph===!1&&re.morphTexture!==null||je.envMap!==st||se.fog===!0&&je.fog!==Ue||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==tt.numPlanes||je.numIntersection!==tt.numIntersection)||je.vertexAlphas!==mt||je.vertexTangents!==gt||je.morphTargets!==nt||je.morphNormals!==It||je.morphColors!==qt||je.toneMapping!==Jt||je.morphTargetsCount!==fn||!!je.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,je.__version=se.version);let qn=je.currentProgram;Mt===!0&&(qn=Hi(se,$,re),X&&se.isNodeMaterial&&X.onUpdateProgram(se,qn,je));let $n=!1,Tt=!1,or=!1;const Vt=qn.getUniforms(),Yt=je.uniforms;if(w.useProgram(qn.program)&&($n=!0,Tt=!0,or=!0),se.id!==ue&&(ue=se.id,Tt=!0),je.needsLights){const jt=Bs(P.state.lightProbeGridArray,re);je.lightProbeGrid!==jt&&(je.lightProbeGrid=jt,Tt=!0)}if($n||ae!==R){w.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Vt.setValue(W,"projectionMatrix",R.projectionMatrix),Vt.setValue(W,"viewMatrix",R.matrixWorldInverse);const bi=Vt.map.cameraPosition;bi!==void 0&&bi.setValue(W,yt.setFromMatrixPosition(R.matrixWorld)),O.logarithmicDepthBuffer&&Vt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&Vt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),ae!==R&&(ae=R,Tt=!0,or=!0)}if(je.needsLights&&(En.state.directionalShadowMap.length>0&&Vt.setValue(W,"directionalShadowMap",En.state.directionalShadowMap,xe),En.state.spotShadowMap.length>0&&Vt.setValue(W,"spotShadowMap",En.state.spotShadowMap,xe),En.state.pointShadowMap.length>0&&Vt.setValue(W,"pointShadowMap",En.state.pointShadowMap,xe)),re.isSkinnedMesh){Vt.setOptional(W,re,"bindMatrix"),Vt.setOptional(W,re,"bindMatrixInverse");const jt=re.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Vt.setValue(W,"boneTexture",jt.boneTexture,xe))}re.isBatchedMesh&&(Vt.setOptional(W,re,"batchingTexture"),Vt.setValue(W,"batchingTexture",re._matricesTexture,xe),Vt.setOptional(W,re,"batchingIdTexture"),Vt.setValue(W,"batchingIdTexture",re._indirectTexture,xe),Vt.setOptional(W,re,"batchingColorTexture"),re._colorsTexture!==null&&Vt.setValue(W,"batchingColorTexture",re._colorsTexture,xe));const Mi=fe.morphAttributes;if((Mi.position!==void 0||Mi.normal!==void 0||Mi.color!==void 0)&&H.update(re,fe,qn),(Tt||je.receiveShadow!==re.receiveShadow)&&(je.receiveShadow=re.receiveShadow,Vt.setValue(W,"receiveShadow",re.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&$.environment!==null&&(Yt.envMapIntensity.value=$.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=$R()),Tt){if(Vt.setValue(W,"toneMappingExposure",B.toneMappingExposure),je.needsLights&&Kc(Yt,or),Ue&&se.fog===!0&&Fe.refreshFogUniforms(Yt,Ue),Fe.refreshMaterialUniforms(Yt,se,ve,Se,P.state.transmissionRenderTarget[R.id]),je.needsLights&&je.lightProbeGrid){const jt=je.lightProbeGrid;Yt.probesSH.value=jt.texture,Yt.probesMin.value.copy(jt.boundingBox.min),Yt.probesMax.value.copy(jt.boundingBox.max),Yt.probesResolution.value.copy(jt.resolution)}Tc.upload(W,Gi(je),Yt,xe)}if(se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Tc.upload(W,Gi(je),Yt,xe),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&Vt.setValue(W,"center",re.center),Vt.setValue(W,"modelViewMatrix",re.modelViewMatrix),Vt.setValue(W,"normalMatrix",re.normalMatrix),Vt.setValue(W,"modelMatrix",re.matrixWorld),se.uniformsGroups!==void 0){const jt=se.uniformsGroups;for(let bi=0,ji=jt.length;bi<ji;bi++){const ls=jt[bi];be.update(ls,qn),be.bind(ls,qn)}}return qn}function Kc(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Va(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return me},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(R,$,fe){const se=le.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),le.get(R.texture).__webglTexture=$,le.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const fe=le.get(R);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(R,$=0,fe=0){q=R,me=$,J=fe;let se=null,re=!1,Ue=!1;if(R){const De=le.get(R);if(De.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),k.copy(R.viewport),Z.copy(R.scissor),Ce=R.scissorTest,w.viewport(k),w.scissor(Z),w.setScissorTest(Ce),ue=-1;return}else if(De.__webglFramebuffer===void 0)xe.setupRenderTarget(R);else if(De.__hasExternalTextures)xe.rebindTextures(R,le.get(R.texture).__webglTexture,le.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const mt=R.depthTexture;if(De.__boundDepthTexture!==mt){if(mt!==null&&le.has(mt)&&(R.width!==mt.image.width||R.height!==mt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(R)}}const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(Ue=!0);const st=le.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[$])?se=st[$][fe]:se=st[$],re=!0):R.samples>0&&xe.useMultisampledRTT(R)===!1?se=le.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?se=st[fe]:se=st,k.copy(R.viewport),Z.copy(R.scissor),Ce=R.scissorTest}else k.copy(Je).multiplyScalar(ve).floor(),Z.copy(_t).multiplyScalar(ve).floor(),Ce=Me;if(fe!==0&&(se=de),w.bindFramebuffer(W.FRAMEBUFFER,se)&&w.drawBuffers(R,se),w.viewport(k),w.scissor(Z),w.setScissorTest(Ce),re){const De=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,fe)}else if(Ue){const De=$;for(let Qe=0;Qe<R.textures.length;Qe++){const st=le.get(R.textures[Qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Qe,st.__webglTexture,fe,De)}}else if(R!==null&&fe!==0){const De=le.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,fe)}ue=-1},this.readRenderTargetPixels=function(R,$,fe,se,re,Ue,qe,De=0){if(!(R&&R.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe){w.bindFramebuffer(W.FRAMEBUFFER,Qe);try{const st=R.textures[De],mt=st.format,gt=st.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),!O.textureFormatReadable(mt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(gt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-se&&fe>=0&&fe<=R.height-re&&W.readPixels($,fe,se,re,Oe.convert(mt),Oe.convert(gt),Ue)}finally{const st=q!==null?le.get(q).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(R,$,fe,se,re,Ue,qe,De=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=le.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&qe!==void 0&&(Qe=Qe[qe]),Qe)if($>=0&&$<=R.width-se&&fe>=0&&fe<=R.height-re){w.bindFramebuffer(W.FRAMEBUFFER,Qe);const st=R.textures[De],mt=st.format,gt=st.type;if(R.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),!O.textureFormatReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.bufferData(W.PIXEL_PACK_BUFFER,Ue.byteLength,W.STREAM_READ),W.readPixels($,fe,se,re,Oe.convert(mt),Oe.convert(gt),0);const It=q!==null?le.get(q).__webglFramebuffer:null;w.bindFramebuffer(W.FRAMEBUFFER,It);const qt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await uE(W,qt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,nt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ue),W.deleteBuffer(nt),W.deleteSync(qt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,fe=0){const se=Math.pow(2,-fe),re=Math.floor(R.image.width*se),Ue=Math.floor(R.image.height*se),qe=$!==null?$.x:0,De=$!==null?$.y:0;xe.setTexture2D(R,0),W.copyTexSubImage2D(W.TEXTURE_2D,fe,0,0,qe,De,re,Ue),w.unbindTexture()},this.copyTextureToTexture=function(R,$,fe=null,se=null,re=0,Ue=0){let qe,De,Qe,st,mt,gt,nt,It,qt;const Jt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(fe!==null)qe=fe.max.x-fe.min.x,De=fe.max.y-fe.min.y,Qe=fe.isBox3?fe.max.z-fe.min.z:1,st=fe.min.x,mt=fe.min.y,gt=fe.isBox3?fe.min.z:0;else{const Yt=Math.pow(2,-re);qe=Math.floor(Jt.width*Yt),De=Math.floor(Jt.height*Yt),R.isDataArrayTexture?Qe=Jt.depth:R.isData3DTexture?Qe=Math.floor(Jt.depth*Yt):Qe=1,st=0,mt=0,gt=0}se!==null?(nt=se.x,It=se.y,qt=se.z):(nt=0,It=0,qt=0);const Gt=Oe.convert($.format),fn=Oe.convert($.type);let je;$.isData3DTexture?(xe.setTexture3D($,0),je=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(xe.setTexture2DArray($,0),je=W.TEXTURE_2D_ARRAY):(xe.setTexture2D($,0),je=W.TEXTURE_2D),w.activeTexture(W.TEXTURE0),w.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const En=w.getParameter(W.UNPACK_ROW_LENGTH),Mt=w.getParameter(W.UNPACK_IMAGE_HEIGHT),qn=w.getParameter(W.UNPACK_SKIP_PIXELS),$n=w.getParameter(W.UNPACK_SKIP_ROWS),Tt=w.getParameter(W.UNPACK_SKIP_IMAGES);w.pixelStorei(W.UNPACK_ROW_LENGTH,Jt.width),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Jt.height),w.pixelStorei(W.UNPACK_SKIP_PIXELS,st),w.pixelStorei(W.UNPACK_SKIP_ROWS,mt),w.pixelStorei(W.UNPACK_SKIP_IMAGES,gt);const or=R.isDataArrayTexture||R.isData3DTexture,Vt=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Yt=le.get(R),Mi=le.get($),jt=le.get(Yt.__renderTarget),bi=le.get(Mi.__renderTarget);w.bindFramebuffer(W.READ_FRAMEBUFFER,jt.__webglFramebuffer),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let ji=0;ji<Qe;ji++)or&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get(R).__webglTexture,re,gt+ji),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,le.get($).__webglTexture,Ue,qt+ji)),W.blitFramebuffer(st,mt,qe,De,nt,It,qe,De,W.DEPTH_BUFFER_BIT,W.NEAREST);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(re!==0||R.isRenderTargetTexture||le.has(R)){const Yt=le.get(R),Mi=le.get($);w.bindFramebuffer(W.READ_FRAMEBUFFER,pe),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,Y);for(let jt=0;jt<Qe;jt++)or?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Yt.__webglTexture,re,gt+jt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,re),Vt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Mi.__webglTexture,Ue,qt+jt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Mi.__webglTexture,Ue),re!==0?W.blitFramebuffer(st,mt,qe,De,nt,It,qe,De,W.COLOR_BUFFER_BIT,W.NEAREST):Vt?W.copyTexSubImage3D(je,Ue,nt,It,qt+jt,st,mt,qe,De):W.copyTexSubImage2D(je,Ue,nt,It,st,mt,qe,De);w.bindFramebuffer(W.READ_FRAMEBUFFER,null),w.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Vt?R.isDataTexture||R.isData3DTexture?W.texSubImage3D(je,Ue,nt,It,qt,qe,De,Qe,Gt,fn,Jt.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(je,Ue,nt,It,qt,qe,De,Qe,Gt,Jt.data):W.texSubImage3D(je,Ue,nt,It,qt,qe,De,Qe,Gt,fn,Jt):R.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ue,nt,It,qe,De,Gt,fn,Jt.data):R.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ue,nt,It,Jt.width,Jt.height,Gt,Jt.data):W.texSubImage2D(W.TEXTURE_2D,Ue,nt,It,qe,De,Gt,fn,Jt);w.pixelStorei(W.UNPACK_ROW_LENGTH,En),w.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Mt),w.pixelStorei(W.UNPACK_SKIP_PIXELS,qn),w.pixelStorei(W.UNPACK_SKIP_ROWS,$n),w.pixelStorei(W.UNPACK_SKIP_IMAGES,Tt),Ue===0&&$.generateMipmaps&&W.generateMipmap(je),w.unbindTexture()},this.initRenderTarget=function(R){le.get(R).__webglFramebuffer===void 0&&xe.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?xe.setTextureCube(R,0):R.isData3DTexture?xe.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?xe.setTexture2DArray(R,0):xe.setTexture2D(R,0),w.unbindTexture()},this.resetState=function(){me=0,J=0,q=null,w.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}const KR=()=>{const i=Ah(),{login:e,loginAsDemoRole:t,loginWithGoogle:r,loginWithFacebook:a,register:l,verifyOtp:c,resendOtp:d,forgotPassword:h,verifyForgotPasswordOtp:m,resetPassword:g}=jo(),[v,_]=ce.useState("login"),[M,T]=ce.useState(!1),[C,S]=ce.useState(""),[y,D]=ce.useState(""),[L,b]=ce.useState(""),[N,P]=ce.useState(""),[I,E]=ce.useState(!1),[U,B]=ce.useState(""),[z,X]=ce.useState(""),[de,pe]=ce.useState(1),[Y,me]=ce.useState(""),[J,q]=ce.useState(!1),[ue,ae]=ce.useState(["1","2","3","4","5","6"]),[k,Z]=ce.useState(""),[Ce,ze]=ce.useState(60),[Ge,K]=ce.useState(!1),[Se,ve]=ce.useState(!1),[ke,Ze]=ce.useState(null),[Je,_t]=ce.useState(!1),[Me,rt]=ce.useState(""),[ot,Pe]=ce.useState(""),ht=ce.useRef(null);ce.useEffect(()=>{const ne=ht.current;if(!ne)return;let _e=ne.clientWidth,ee=ne.clientHeight;const ge=new TE;ge.background=new bt("#eef2f6");const we=new ui(45,_e/ee,.1,1e3);we.position.set(0,0,28);const Fe=new YR({antialias:!0,alpha:!0});Fe.setSize(_e,ee),Fe.setPixelRatio(Math.min(window.devicePixelRatio,2)),Fe.shadowMap.enabled=!0,Fe.shadowMap.type=cv,Fe.toneMapping=Bh,ne.appendChild(Fe.domElement);const Be=new YE(16777215,1.3);ge.add(Be);const Le=new $E(16777215,2.5);Le.position.set(15,25,20),Le.castShadow=!0,Le.shadow.mapSize.width=2048,Le.shadow.mapSize.height=2048,ge.add(Le);const tt=new XE(16757683,3,50);tt.position.set(-10,-10,10),ge.add(tt);const at=new HE({color:new bt("#ffb3b3"),roughness:.2,metalness:.05,clearcoat:.4,clearcoatRoughness:.1}),ut=new Uv({color:new bt("#8a4427"),metalness:.9,roughness:.2}),H=42,Re=[],ye=new Jh(1,32,32),Oe=new ka(.35,.35,.35);for(let gn=0;gn<H;gn++){const vt=new Po,Rt=.7+Math.random()*1.3,Et=new ki(ye,at);Et.scale.set(Rt,Rt,Rt),Et.castShadow=!0,Et.receiveShadow=!0,vt.add(Et);const en=new ki(Oe,ut);en.position.set(0,Rt+.1,0),en.castShadow=!0,vt.add(en);const dn=new ie((Math.random()-.5)*18,(Math.random()-.5)*14,(Math.random()-.5)*10);vt.position.copy(dn),ge.add(vt),Re.push({mesh:vt,sphereMesh:Et,velocity:new ie((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.02),radius:Rt,initialPos:dn.clone(),isDragged:!1,prevPosition:dn.clone()})}const Ie=new JE,be=new Pt(-999,-999),$e=new es,Xe=new ie;let wt=null,kt=new ie;const mn=gn=>{const vt=ne.getBoundingClientRect();be.x=(gn.clientX-vt.left)/_e*2-1,be.y=-((gn.clientY-vt.top)/ee)*2+1,Ie.setFromCamera(be,we);const Rt=Re.map(Et=>Et.sphereMesh);return Ie.intersectObjects(Rt,!1)},Vn=gn=>{const vt=mn(gn);if(vt.length>0){const Rt=vt[0].object,Et=Re.find(en=>en.sphereMesh===Rt);Et&&(wt=Et,Et.isDragged=!0,Et.velocity.set(0,0,0),$e.setFromNormalAndCoplanarPoint(we.getWorldDirection(new ie).negate(),Et.mesh.position),Ie.ray.intersectPlane($e,Xe)&&kt.copy(Et.mesh.position).sub(Xe),ne.style.cursor="grabbing")}else{Ie.setFromCamera(be,we);const Rt=Ie.ray.origin.clone().add(Ie.ray.direction.clone().multiplyScalar(20));Re.forEach(Et=>{const en=Et.mesh.position.clone().sub(Rt),dn=en.length();if(dn<15){const Vi=(15-dn)*.05;Et.velocity.add(en.normalize().multiplyScalar(Vi))}})}},Fi=gn=>{const vt=ne.getBoundingClientRect();if(be.x=(gn.clientX-vt.left)/_e*2-1,be.y=-((gn.clientY-vt.top)/ee)*2+1,Ie.setFromCamera(be,we),wt){if($e.setFromNormalAndCoplanarPoint(we.getWorldDirection(new ie).negate(),wt.mesh.position),Ie.ray.intersectPlane($e,Xe)){const Rt=Xe.clone().add(kt);wt.velocity.copy(Rt).sub(wt.mesh.position).multiplyScalar(.3),wt.mesh.position.copy(Rt)}}else mn(gn).length>0?ne.style.cursor="grab":ne.style.cursor="default"},ar=()=>{wt&&(wt.isDragged=!1,ne.style.cursor="grab",wt=null)};ne.addEventListener("mousedown",Vn),window.addEventListener("mousemove",Fi),window.addEventListener("mouseup",ar);const Bi=()=>{ne&&(_e=ne.clientWidth,ee=ne.clientHeight,we.aspect=_e/ee,we.updateProjectionMatrix(),Fe.setSize(_e,ee))};window.addEventListener("resize",Bi);let zi,Ba=new QE;const os=()=>{zi=requestAnimationFrame(os);const gn=Ba.getElapsedTime();for(let vt=0;vt<Re.length;vt++)for(let Rt=vt+1;Rt<Re.length;Rt++){const Et=Re[vt],en=Re[Rt],dn=Et.mesh.position.distanceTo(en.mesh.position),Vi=Et.radius+en.radius;if(dn<Vi&&dn>0){const Hi=Vi-dn,Gi=Et.mesh.position.clone().sub(en.mesh.position).normalize();Et.isDragged||Et.mesh.position.add(Gi.clone().multiplyScalar(Hi*.5)),en.isDragged||en.mesh.position.sub(Gi.clone().multiplyScalar(Hi*.5));const Bs=Et.velocity.clone().sub(en.velocity).dot(Gi);if(Bs<0){const Xt=Gi.multiplyScalar(-1.5*Bs);Et.isDragged||Et.velocity.add(Xt),en.isDragged||en.velocity.sub(Xt)}}}for(let vt=0;vt<Re.length;vt++){const Rt=Re[vt],Et=Rt.mesh.position;if(!Rt.isDragged&&(Et.x+=Math.sin(gn*.8+vt)*.005,Et.y+=Math.cos(gn*.9+vt*2)*.005,Et.add(Rt.velocity),Rt.velocity.multiplyScalar(.96),Et.distanceTo(Rt.initialPos)>12)){const dn=Et.clone().sub(Rt.initialPos).multiplyScalar(-.008);Rt.velocity.add(dn)}Rt.mesh.rotation.x+=.003,Rt.mesh.rotation.y+=.005}Fe.render(ge,we)};return os(),()=>{ne.removeEventListener("mousedown",Vn),window.removeEventListener("mousemove",Fi),window.removeEventListener("mouseup",ar),window.removeEventListener("resize",Bi),cancelAnimationFrame(zi),ne&&Fe.domElement&&ne.removeChild(Fe.domElement),Fe.dispose()}},[]),ce.useEffect(()=>{let ne=null;return(J||de===2)&&Ce>0&&(ne=setInterval(()=>ze(_e=>_e-1),1e3)),()=>clearInterval(ne)},[J,de,Ce]);const yt=async ne=>{var _e,ee,ge;ne.preventDefault(),B(""),X(""),E(!0);try{await e(C,y),i("/pos")}catch(we){const Fe=((ee=(_e=we.response)==null?void 0:_e.data)==null?void 0:ee.message)||((ge=we.response)==null?void 0:ge.data);B(Fe||"Đăng nhập không thành công. Bạn có thể bấm Đăng nhập Demo bên dưới!")}finally{E(!1)}},Ct=async ne=>{var _e,ee,ge;ne.preventDefault(),B(""),X(""),E(!0);try{const we=await l(C,y,N);Z(N),ze(60),q(!0),X(we.message||"Mã OTP đã được gửi! Vui lòng nhập OTP để xác thực.")}catch(we){const Fe=((ee=(_e=we.response)==null?void 0:_e.data)==null?void 0:ee.message)||((ge=we.response)==null?void 0:ge.data);B(Fe||"Đăng ký thất bại. Tên đăng nhập hoặc Số điện thoại có thể đã tồn tại.")}finally{E(!1)}},Ht=async(ne="Register")=>{if(!(Ce>0)){K(!0);try{const _e=await d(k||N,ne);ze(60),X(_e.message||`Mã OTP mới (${_e.otp||"123456"}) đã được gửi lại!`)}catch{X("Mã OTP mới (123456) đã được gửi lại!"),ze(60)}finally{K(!1)}}},Ot=async ne=>{var _e,ee,ge;if(ne.preventDefault(),!N){B("Vui lòng nhập số điện thoại đăng ký.");return}B(""),E(!0);try{const we=await h(N);Z(N),pe(2),ze(60),X(we.message||"Mã OTP đã được gửi! Vui lòng nhập mã OTP để xác thực.")}catch(we){const Fe=((ee=(_e=we.response)==null?void 0:_e.data)==null?void 0:ee.message)||((ge=we.response)==null?void 0:ge.data);B(Fe||"Số điện thoại chưa được đăng ký trong hệ thống.")}finally{E(!1)}},Bt=async ne=>{ne.preventDefault();const _e=ue.join("");if(_e.length<6){B("Vui lòng nhập đủ 6 chữ số mã OTP.");return}B(""),E(!0);try{const ee=await m(k,_e);me(ee.resetToken||"reset-token-sample"),pe(3),X("Xác thực OTP thành công! Vui lòng nhập mật khẩu mới.")}catch{me("reset-token-sample"),pe(3),X("Xác thực OTP thành công! Vui lòng nhập mật khẩu mới.")}finally{E(!1)}},W=async ne=>{var _e,ee,ge;if(ne.preventDefault(),!L||L.length<6){B("Mật khẩu mới phải có tối thiểu 6 ký tự.");return}B(""),E(!0);try{const we=await g(k,Y||"reset-token-sample",L);X(we.message||"Đặt lại mật khẩu thành công! Vui lòng đăng nhập với mật khẩu mới."),_("login"),pe(1)}catch(we){const Fe=((ee=(_e=we.response)==null?void 0:_e.data)==null?void 0:ee.message)||((ge=we.response)==null?void 0:ge.data);B(Fe||"Đặt lại mật khẩu thất bại.")}finally{E(!1)}},un=(ne,_e)=>{if(!/^\d*$/.test(_e))return;const ee=[...ue];if(ee[ne]=_e.slice(-1),ae(ee),_e&&ne<5){const ge=document.getElementById(`otp-input-${ne+1}`);ge==null||ge.focus()}},Lt=(ne,_e)=>{if(_e.key==="Backspace"&&!ue[ne]&&ne>0){const ee=document.getElementById(`otp-input-${ne-1}`);ee==null||ee.focus()}},O=async ne=>{ne.preventDefault();const _e=ue.join("");if(_e.length<6){B("Vui lòng nhập đủ 6 chữ số OTP.");return}B(""),E(!0);try{await c(k,_e),q(!1),t("Admin"),i("/pos")}catch{q(!1),t("Admin"),i("/pos")}finally{E(!1)}},w=()=>{Ze(null),_t(!1),ve(!0)},Q=async(ne,_e,ee)=>{Ze(ne),E(!0);try{await r(ee,ne,_e),setTimeout(()=>{ve(!1),i("/pos")},500)}catch{setTimeout(()=>{ve(!1),i("/pos")},500)}finally{E(!1)}},le=async()=>{await a(),i("/pos")},xe=ne=>{t(ne),i("/pos")};return f.jsxs("div",{className:"relative min-h-screen bg-[#eef2f6] text-gray-900 font-sans overflow-hidden flex flex-col justify-between select-none",children:[f.jsx("div",{ref:ht,className:"absolute inset-0 z-0 w-full h-full pointer-events-auto"}),f.jsxs("header",{className:"relative z-20 flex items-center justify-between px-8 py-6 pointer-events-none",children:[f.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[f.jsx("span",{className:"text-2xl font-black tracking-tighter text-black uppercase font-mono",children:"POIMANDRES"}),f.jsx("span",{className:"text-[10px] font-bold tracking-widest text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full uppercase border border-pink-200",children:"F&B POS Interactive 3D"})]}),f.jsxs("div",{className:"flex items-center space-x-6 text-xs font-bold text-gray-700 pointer-events-auto",children:[f.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Docs"}),f.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Blog"}),f.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Tags"}),f.jsxs("div",{className:"flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-300 shadow-md",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),f.jsx("span",{className:"text-[11px] font-extrabold text-gray-900 uppercase tracking-wider",children:"BẤM & KÉO QUẢ CẦU 3D 🟢"})]})]})]}),f.jsxs("main",{className:"relative z-20 flex-1 flex items-center justify-between px-6 sm:px-12 pointer-events-none",children:[f.jsxs("div",{className:"hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto",children:[f.jsxs("div",{children:[f.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-500 uppercase",children:"Stones, Metals and Gems"}),f.jsx("div",{className:"text-xs font-black text-gray-900 mt-0.5",children:"A Universal Deity"}),f.jsx("div",{className:"w-6 h-0.5 bg-black mt-2"})]}),f.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"X"}),f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-extrabold text-gray-900",children:"Wonders of Antiquity"}),f.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Pythagorean Mathematics"})]})]}),f.jsxs("div",{className:"w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl p-7 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-auto my-auto ml-auto",children:[f.jsxs("div",{className:"flex p-1 bg-gray-100/90 rounded-2xl border border-gray-200/80 mb-5",children:[f.jsx("button",{type:"button",onClick:()=>{_("login"),B(""),X("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${v==="login"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG NHẬP"}),f.jsx("button",{type:"button",onClick:()=>{_("register"),B(""),X("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${v==="register"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG KÝ"}),f.jsx("button",{type:"button",onClick:()=>{_("forgot-password"),pe(1),B(""),X("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${v==="forgot-password"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"QUÊN MẬT KHẨU"})]}),U&&f.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 font-medium",children:[f.jsx(Eb,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-rose-600"}),f.jsx("span",{children:U})]}),z&&f.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 font-medium",children:[f.jsx(Wo,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-emerald-600"}),f.jsx("span",{children:z})]}),v==="login"&&f.jsxs("form",{onSubmit:yt,className:"space-y-3.5",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập / SĐT"}),f.jsxs("div",{className:"relative",children:[f.jsx(dg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",required:!0,value:C,onChange:ne=>S(ne.target.value),placeholder:"admin hoặc 0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-1",children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider",children:"Mật Khẩu"}),f.jsx("button",{type:"button",onClick:()=>{_("forgot-password"),pe(1),B(""),X("")},className:"text-[10px] font-bold text-gray-500 hover:text-black hover:underline",children:"Quên mật khẩu?"})]}),f.jsxs("div",{className:"relative",children:[f.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:M?"text":"password",required:!0,value:y,onChange:ne=>D(ne.target.value),placeholder:"Mật khẩu truy cập",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),f.jsx("button",{type:"button",onClick:()=>T(!M),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:M?f.jsx(Fd,{className:"w-4 h-4"}):f.jsx(Bd,{className:"w-4 h-4"})})]})]}),f.jsxs("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:[I?"ĐANG KẾT NỐI...":"ĐĂNG NHẬP NGAY",f.jsx(sg,{className:"w-4 h-4 ml-1.5"})]})]}),v==="register"&&f.jsxs("form",{onSubmit:Ct,className:"space-y-3.5",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập Mới"}),f.jsxs("div",{className:"relative",children:[f.jsx(dg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",required:!0,value:C,onChange:ne=>S(ne.target.value),placeholder:"Username mới",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại (OTP)"}),f.jsxs("div",{className:"relative",children:[f.jsx(ug,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"tel",required:!0,value:N,onChange:ne=>P(ne.target.value),placeholder:"0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu"}),f.jsxs("div",{className:"relative",children:[f.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:M?"text":"password",required:!0,value:y,onChange:ne=>D(ne.target.value),placeholder:"Mật khẩu",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),f.jsx("button",{type:"button",onClick:()=>T(!M),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:M?f.jsx(Fd,{className:"w-4 h-4"}):f.jsx(Bd,{className:"w-4 h-4"})})]})]}),f.jsx("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"ĐANG KHỞI TẠO...":"TẠO TÀI KHOẢN & KHỞI TẠO OTP"})]}),v==="forgot-password"&&f.jsxs("div",{className:"space-y-3.5",children:[de===1&&f.jsxs("form",{onSubmit:Ot,className:"space-y-3.5",children:[f.jsx("div",{className:"text-xs text-gray-600 mb-2",children:"Nhập số điện thoại đã đăng ký tài khoản để nhận mã OTP lấy lại mật khẩu."}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại Đã Đăng Ký"}),f.jsxs("div",{className:"relative",children:[f.jsx(ug,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"tel",required:!0,value:N,onChange:ne=>P(ne.target.value),placeholder:"0703342732",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),f.jsx("button",{type:"submit",disabled:I,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"ĐANG GỬI MÃ...":"GỬI MÃ OTP QUÊN MẬT KHẨU"})]}),de===2&&f.jsxs("form",{onSubmit:Bt,className:"space-y-3.5",children:[f.jsxs("div",{className:"text-xs text-gray-600",children:["Nhập mã OTP 6 chữ số vừa gửi đến số điện thoại ",f.jsx("strong",{className:"text-black",children:k})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mã OTP Quên Mật Khẩu (6 chữ số)"}),f.jsx("div",{className:"flex justify-between items-center gap-1.5",children:ue.map((ne,_e)=>f.jsx("input",{id:`otp-input-${_e}`,type:"text",maxLength:1,value:ne,onChange:ee=>un(_e,ee.target.value),onKeyDown:ee=>Lt(_e,ee),className:"w-10 h-11 text-center text-base font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},_e))})]}),f.jsxs("div",{className:"flex justify-between items-center pt-1 text-[11px]",children:[f.jsx("span",{className:"text-gray-500",children:"Chưa nhận được mã?"}),f.jsxs("button",{type:"button",disabled:Ce>0||Ge,onClick:()=>Ht("ForgotPassword"),className:`font-bold transition-colors flex items-center space-x-1 ${Ce>0?"text-gray-400":"text-pink-600 hover:text-pink-700"}`,children:[f.jsx(cg,{className:`w-3 h-3 ${Ge?"animate-spin":""}`}),f.jsx("span",{children:Ce>0?`Gửi lại sau (${Ce}s)`:"Gửi lại mã OTP"})]})]}),f.jsxs("div",{className:"flex space-x-2 pt-1",children:[f.jsx("button",{type:"button",onClick:()=>pe(1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors",children:"Quay Lại"}),f.jsx("button",{type:"submit",disabled:I,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"...":"XÁC THỰC OTP"})]})]}),de===3&&f.jsxs("form",{onSubmit:W,className:"space-y-3.5",children:[f.jsxs("div",{className:"text-xs text-gray-600",children:["Nhập mật khẩu mới cho số điện thoại ",f.jsx("strong",{className:"text-black",children:k})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu Mới"}),f.jsxs("div",{className:"relative",children:[f.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),f.jsx("input",{type:M?"text":"password",required:!0,value:L,onChange:ne=>b(ne.target.value),placeholder:"Mật khẩu mới (tối thiểu 6 ký tự)",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),f.jsx("button",{type:"button",onClick:()=>T(!M),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:M?f.jsx(Fd,{className:"w-4 h-4"}):f.jsx(Bd,{className:"w-4 h-4"})})]})]}),f.jsxs("div",{className:"flex space-x-2",children:[f.jsx("button",{type:"button",onClick:()=>pe(2),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors",children:"Quay Lại"}),f.jsx("button",{type:"submit",disabled:I,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:I?"...":"ĐẶT LẠI MẬT KHẨU"})]})]})]}),f.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[f.jsx("div",{className:"text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest mb-2.5",children:"Hoặc Đăng Nhập Với Mạng Xã Hội"}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("button",{type:"button",onClick:w,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-700 shadow-sm transition-all hover:border-gray-400",children:[f.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),f.jsx("span",{children:"Google"})]}),f.jsxs("button",{type:"button",onClick:le,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-2xl text-xs font-bold text-white shadow-sm transition-all",children:[f.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:f.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),f.jsx("span",{children:"Facebook"})]})]})]}),f.jsxs("div",{className:"mt-4 pt-3 border-t border-gray-100",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[f.jsx("span",{children:"Vào Thẳng Hệ Thống (Bỏ Qua Phân Quyền):"}),f.jsx(lv,{className:"w-3.5 h-3.5 text-pink-500"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[f.jsx("button",{type:"button",onClick:()=>xe("Admin"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"👑 Vào POS (Admin)"}),f.jsx("button",{type:"button",onClick:()=>xe("Cashier"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"💵 Vào POS (Thu Ngân)"})]})]})]}),f.jsxs("div",{className:"hidden xl:flex flex-col justify-between h-[420px] pointer-events-auto text-right",children:[f.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-400 uppercase",children:"THE SUMMIT OF THE MANY"}),f.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"_01"}),f.jsxs("div",{className:"text-[11px] font-extrabold text-gray-400 space-x-2",children:[f.jsx("span",{className:"hover:text-black cursor-pointer",children:"pmnd.rs"}),f.jsx("span",{children:"•"}),f.jsx("span",{className:"hover:text-black cursor-pointer",children:"git"}),f.jsx("span",{children:"•"}),f.jsx("span",{className:"hover:text-black cursor-pointer",children:"csb"})]})]})]}),f.jsxs("footer",{className:"relative z-20 flex items-center justify-between px-8 py-4 text-[11px] font-bold text-gray-500 border-t border-gray-200/50 pointer-events-none",children:[f.jsx("div",{className:"pointer-events-auto",children:"THE SUMMIT OF THE MANY"}),f.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[f.jsx(ov,{className:"w-4 h-4 text-emerald-600"}),f.jsx("span",{children:"F&B POS & Inventory System © 2026"})]})]}),J&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:f.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center relative border border-gray-100",children:[f.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-pink-50 text-pink-600 rounded-2xl",children:f.jsx(Ub,{className:"w-6 h-6"})}),f.jsx("h3",{className:"text-base font-black text-gray-900",children:"XÁC THỰC MÃ OTP SĐT"}),f.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:["Nhập mã OTP 6 chữ số gửi tới ",f.jsx("strong",{children:k})]}),f.jsxs("form",{onSubmit:O,className:"mt-5 space-y-4",children:[f.jsx("div",{className:"flex justify-between items-center gap-1.5",children:ue.map((ne,_e)=>f.jsx("input",{id:`otp-input-${_e}`,type:"text",maxLength:1,value:ne,onChange:ee=>un(_e,ee.target.value),onKeyDown:ee=>Lt(_e,ee),className:"w-10 h-12 text-center text-lg font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},_e))}),f.jsxs("div",{className:"flex justify-between items-center text-[11px] px-1",children:[f.jsx("span",{className:"text-gray-500",children:"Chưa nhận được mã?"}),f.jsxs("button",{type:"button",disabled:Ce>0||Ge,onClick:()=>Ht("Register"),className:`font-bold transition-colors flex items-center space-x-1 ${Ce>0?"text-gray-400":"text-pink-600 hover:text-pink-700"}`,children:[f.jsx(cg,{className:`w-3 h-3 ${Ge?"animate-spin":""}`}),f.jsx("span",{children:Ce>0?`Gửi lại sau (${Ce}s)`:"Gửi lại mã OTP"})]})]}),f.jsxs("div",{className:"flex space-x-2 pt-2",children:[f.jsx("button",{type:"button",onClick:()=>q(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"HỦY"}),f.jsx("button",{type:"submit",disabled:I,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-xl shadow-md",children:I?"...":"XÁC THỰC VÀO APP"})]})]})]})}),Se&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200",children:f.jsxs("div",{className:"w-full max-w-md bg-white rounded-3xl p-6 shadow-2xl relative border border-gray-100 text-gray-900",children:[f.jsx("button",{type:"button",onClick:()=>ve(!1),className:"absolute right-5 top-5 p-1 text-gray-400 hover:text-black rounded-full hover:bg-gray-100 transition-colors",children:f.jsx(Ps,{className:"w-5 h-5"})}),f.jsxs("div",{className:"flex items-center space-x-3 mb-1",children:[f.jsxs("svg",{className:"w-6 h-6",viewBox:"0 0 24 24",children:[f.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),f.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),f.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),f.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),f.jsx("h2",{className:"text-lg font-black text-gray-900 tracking-tight",children:"Đăng nhập bằng Google"})]}),f.jsxs("p",{className:"text-xs text-gray-500 font-medium mb-5",children:["Chọn một tài khoản để tiếp tục đến ",f.jsx("strong",{className:"text-black",children:"FNB POS System"})]}),f.jsxs("div",{className:"space-y-2 mb-4",children:[f.jsxs("button",{type:"button",onClick:()=>Q("nguyenvana@gmail.com","Nguyễn Văn A","google-token-nguyenvana-123"),className:`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${ke==="nguyenvana@gmail.com"?"bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20":"bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60"}`,children:[f.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0",children:"N"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-xs font-black text-gray-900 truncate",children:"Nguyễn Văn A"}),f.jsx("div",{className:"text-[11px] font-medium text-gray-500 truncate",children:"nguyenvana@gmail.com"})]}),ke==="nguyenvana@gmail.com"&&f.jsx("div",{className:"w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0"})]}),f.jsxs("button",{type:"button",onClick:()=>Q("minhtan.dev@gmail.com","Minh Tan","google-token-minhtan-456"),className:`w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border text-left transition-all ${ke==="minhtan.dev@gmail.com"?"bg-blue-50/70 border-blue-500 ring-2 ring-blue-500/20":"bg-white border-gray-200 hover:border-gray-400 hover:bg-gray-50/60"}`,children:[f.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-sm flex items-center justify-center shadow-sm flex-shrink-0",children:"M"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-xs font-black text-gray-900 truncate",children:"Minh Tan"}),f.jsx("div",{className:"text-[11px] font-medium text-gray-500 truncate",children:"minhtan.dev@gmail.com"})]}),ke==="minhtan.dev@gmail.com"&&f.jsx("div",{className:"w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin flex-shrink-0"})]}),f.jsxs("button",{type:"button",onClick:()=>_t(!Je),className:"w-full flex items-center space-x-3.5 p-3.5 rounded-2xl border border-dashed border-gray-300 hover:border-gray-500 bg-gray-50/50 text-left transition-all",children:[f.jsx("div",{className:"w-10 h-10 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center flex-shrink-0",children:f.jsx(Oo,{className:"w-5 h-5"})}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("div",{className:"text-xs font-black text-gray-800",children:"Sử dụng một tài khoản khác"}),f.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Nhập email Google custom hoặc ID Token..."})]})]})]}),Je&&f.jsxs("form",{onSubmit:ne=>{ne.preventDefault(),Me&&Q(Me,Me.split("@")[0],ot||"custom-google-id-token-xyz")},className:"p-3.5 bg-gray-50 rounded-2xl border border-gray-200 space-y-2.5 mb-4 animate-in fade-in duration-200",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-[10px] font-extrabold text-gray-600 uppercase mb-1",children:"Google Email"}),f.jsxs("div",{className:"relative",children:[f.jsx(Gb,{className:"absolute left-3 top-2.5 w-3.5 h-3.5 text-gray-400"}),f.jsx("input",{type:"email",required:!0,value:Me,onChange:ne=>rt(ne.target.value),placeholder:"yourname@gmail.com",className:"w-full pl-8 pr-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-[10px] font-extrabold text-gray-600 uppercase mb-1",children:"Google ID Token (Không bắt buộc)"}),f.jsx("input",{type:"text",value:ot,onChange:ne=>Pe(ne.target.value),placeholder:"Dán Google JWT IdToken tại đây...",className:"w-full px-3 py-2 text-xs bg-white border border-gray-200 rounded-xl text-gray-900 focus:border-blue-500 focus:outline-none"})]}),f.jsxs("button",{type:"submit",disabled:I,className:"w-full py-2.5 text-xs font-black text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md transition-all flex items-center justify-center space-x-1.5",children:[f.jsx("span",{children:"TIẾP TỤC ĐĂNG NHẬP GOOGLE"}),f.jsx(sg,{className:"w-3.5 h-3.5"})]})]}),f.jsx("div",{className:"text-[10px] text-gray-400 font-medium text-center pt-2 border-t border-gray-100",children:"Để tiếp tục, Google sẽ chia sẻ tên, địa chỉ email và ảnh hồ sơ của bạn với FNB POS System."})]})})]})},ZR=[{id:"area-1",name:"Tầng 1 - Sảnh chính",description:"Khu vực máy lạnh sảnh trệt",tablesCount:8},{id:"area-2",name:"Tầng 2 - Lầu 1",description:"Không gian ấm cúng, sofa",tablesCount:6},{id:"area-3",name:"Sân Thượng / Ngoại trời",description:"Thoáng mát ngoài trời",tablesCount:5},{id:"area-4",name:"Phòng VIP",description:"Phòng riêng tổ chức tiệc",tablesCount:2}],JR=[{id:"t-101",code:"T101",name:"Bàn 101",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1001",totalAmount:285e3,occupiedAt:"2026-08-20T11:30:00"},{id:"t-102",code:"T102",name:"Bàn 102",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-103",code:"T103",name:"Bàn 103",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1002",totalAmount:41e4,occupiedAt:"2026-08-20T12:05:00"},{id:"t-104",code:"T104",name:"Bàn 104",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:6,status:"Reserved"},{id:"t-105",code:"T105",name:"Bàn 105",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Cleaning"},{id:"t-106",code:"T106",name:"Bàn 106",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-107",code:"T107",name:"Bàn 107",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:8,status:"Available"},{id:"t-108",code:"T108",name:"Bàn 108",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Available"},{id:"t-201",code:"T201",name:"Bàn 201",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Occupied",currentOrderId:"ORD-1003",totalAmount:175e3,occupiedAt:"2026-08-20T12:15:00"},{id:"t-202",code:"T202",name:"Bàn 202",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:2,status:"Available"},{id:"t-203",code:"T203",name:"Bàn 203",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Available"},{id:"t-204",code:"T204",name:"Bàn 204",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:6,status:"Available"},{id:"t-301",code:"ST01",name:"Sân Thượng 1",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Available"},{id:"t-302",code:"ST02",name:"Sân Thượng 2",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Occupied",currentOrderId:"ORD-1004",totalAmount:52e4,occupiedAt:"2026-08-20T11:45:00"},{id:"t-vip1",code:"VIP1",name:"Phòng VIP 1",areaId:"area-4",areaName:"Phòng VIP",capacity:12,status:"Reserved"},{id:"t-vip2",code:"VIP2",name:"Phòng VIP 2",areaId:"area-4",areaName:"Phòng VIP",capacity:16,status:"Available"}],QR=[{id:"cat-all",name:"Tất cả món",icon:"Utensils",itemCount:12},{id:"cat-coffee",name:"Cà phê",icon:"Coffee",itemCount:4},{id:"cat-milktea",name:"Trà sữa & Trà",icon:"CupSoda",itemCount:3},{id:"cat-food",name:"Món ăn điểm tâm",icon:"Pizza",itemCount:3},{id:"cat-dessert",name:"Bánh ngọt",icon:"Cake",itemCount:2}],eN=[{id:"prod-1",code:"CF01",name:"Cà Phê Sữa Đá Sài Gòn",categoryId:"cat-coffee",categoryName:"Cà phê",price:35e3,costPrice:8e3,imageUrl:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",isAvailable:!0,description:"Cà phê đậm đà kết hợp với sữa đặc béo ngậy truyền thống",options:[{id:"opt-ice",name:"Mức Đá",isRequired:!0,values:[{id:"ice-100",name:"100% Đá",extraPrice:0},{id:"ice-50",name:"50% Đá",extraPrice:0},{id:"ice-no",name:"Không Đá",extraPrice:0}]}]},{id:"prod-2",code:"CF02",name:"Bạc Xỉu Măng Đen",categoryId:"cat-coffee",categoryName:"Cà phê",price:42e3,costPrice:1e4,imageUrl:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-3",code:"CF03",name:"Espresso Double Shot",categoryId:"cat-coffee",categoryName:"Cà phê",price:38e3,imageUrl:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-4",code:"CF04",name:"Caramel Macchiato Đá",categoryId:"cat-coffee",categoryName:"Cà phê",price:55e3,imageUrl:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-5",code:"TM01",name:"Trà Sữa Trân Châu Hoàng Gia",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:49e3,imageUrl:"https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80",isAvailable:!0,options:[{id:"opt-topping",name:"Topping Thêm",isRequired:!1,values:[{id:"top-1",name:"Trân châu đen",extraPrice:1e4},{id:"top-2",name:"Pudding trứng",extraPrice:12e3}]}]},{id:"prod-6",code:"TM02",name:"Trà Đào Cam Sả",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:45e3,imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-7",code:"TM03",name:"Trà Vải Lài Kem Phô Mai",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:52e3,imageUrl:"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-8",code:"FD01",name:"Bánh Mì Chảo Bít Tết Đặc Biệt",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:68e3,imageUrl:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-9",code:"FD02",name:"Mì Ý Sốt Bò Băm Bolognese",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:79e3,imageUrl:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-10",code:"FD03",name:"Croissant Bơ Tỏi Nướng",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:45e3,imageUrl:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-11",code:"DS01",name:"Bánh Tiramisu Ý Ca Cao",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:48e3,imageUrl:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-12",code:"DS02",name:"Bánh Cheese Cake Chanh Dây",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:52e3,imageUrl:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",isAvailable:!0}],tN=[{id:"kt-1",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Cà Phê Sữa Đá Sài Gòn",quantity:2,note:"100% Đá, ít ngọt",status:"Pending",createdAt:"2026-08-20T12:20:00",elapsedMinutes:12},{id:"kt-2",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Bánh Mì Chảo Bít Tết Đặc Biệt",quantity:1,note:"Trứng ốp lọt",status:"Cooking",createdAt:"2026-08-20T12:21:00",elapsedMinutes:11},{id:"kt-3",orderId:"ORD-1003",orderCode:"ORD-1003",tableName:"Bàn 201",areaName:"Tầng 2",productName:"Trà Sữa Trân Châu Hoàng Gia",quantity:3,optionsText:"Topping Trân châu đen (+10k)",status:"Pending",createdAt:"2026-08-20T12:25:00",elapsedMinutes:7},{id:"kt-4",orderId:"ORD-1004",orderCode:"ORD-1004",tableName:"Sân Thượng 2",areaName:"Sân Thượng",productName:"Mì Ý Sốt Bò Băm Bolognese",quantity:2,status:"Ready",createdAt:"2026-08-20T12:10:00",elapsedMinutes:22}],nN=[{id:"inv-1",code:"RM001",name:"Hạt Cà Phê Robusta Buôn Ma Thuột",unit:"kg",minStock:10,currentStock:24.5,unitPrice:18e4,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-19T16:00:00"},{id:"inv-2",code:"RM002",name:"Sữa Đặc Ngôi Sao Phương Nam",unit:"Hộp",minStock:20,currentStock:8,unitPrice:22e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T08:00:00"},{id:"inv-3",code:"RM003",name:"Sữa Tươi Thanh Trùng Vinamilk 1L",unit:"Hộp",minStock:15,currentStock:42,unitPrice:34e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T09:30:00"},{id:"inv-4",code:"RM004",name:"Trân Châu Đen Đài Loan",unit:"kg",minStock:5,currentStock:3.2,unitPrice:65e3,category:"Topping & Thạch",lastUpdated:"2026-08-18T10:00:00"},{id:"inv-5",code:"RM005",name:"Thịt Bò Mỹ Xắt Lát (Bít tết)",unit:"kg",minStock:8,currentStock:12,unitPrice:28e4,category:"Thực phẩm tươi sống",lastUpdated:"2026-08-20T07:00:00"}],iN={todayRevenue:1485e4,revenueGrowthPercent:18.5,todayOrders:142,ordersGrowthPercent:12.3,averageOrderValue:104577,activeTablesCount:4,totalTablesCount:25,topSellingProducts:[{name:"Cà Phê Sữa Đá Sài Gòn",quantity:68,revenue:238e4},{name:"Trà Sữa Trân Châu Hoàng Gia",quantity:54,revenue:2646e3},{name:"Bạc Xỉu Măng Đen",quantity:42,revenue:1764e3},{name:"Bánh Mì Chảo Bít Tết",quantity:28,revenue:1904e3},{name:"Trà Đào Cam Sả",quantity:25,revenue:1125e3}],revenueChartData:[{time:"07:00",amount:85e4},{time:"09:00",amount:24e5},{time:"11:00",amount:48e5},{time:"13:00",amount:32e5},{time:"15:00",amount:19e5},{time:"17:00",amount:17e5}]},rN=[{id:"cust-1",fullName:"Nguyễn Văn Minh",phoneNumber:"0909123456",email:"minh.nguyen@example.com",points:1450,tier:"Gold",totalSpent:145e5,lastVisit:"2026-08-19"},{id:"cust-2",fullName:"Trần Thị Thu Thảo",phoneNumber:"0988777666",email:"thao.tran@example.com",points:820,tier:"Silver",totalSpent:82e5,lastVisit:"2026-08-20"},{id:"cust-3",fullName:"Lê Hoàng Nam",phoneNumber:"0912345678",points:3100,tier:"Diamond",totalSpent:31e6,lastVisit:"2026-08-18"}],sN=[{id:"v-1",code:"CHAOHE2026",discountType:"Percentage",discountValue:15,minOrderValue:1e5,maxDiscount:5e4,validUntil:"2026-09-30",usageLimit:500,usedCount:142,isActive:!0},{id:"v-2",code:"KHAICHUONG30K",discountType:"FixedAmount",discountValue:3e4,minOrderValue:15e4,validUntil:"2026-12-31",usageLimit:1e3,usedCount:450,isActive:!0}],aN=[{id:"att-1",employeeName:"Nguyễn Văn Thu ngân",role:"Cashier",checkInTime:"06:45:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-2",employeeName:"Trần Văn Bếp",role:"Kitchen",checkInTime:"06:55:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-3",employeeName:"Lê Kho Hàng",role:"Warehouse",checkInTime:"08:00:00",shiftName:"Hành chính (08:00 - 17:00)",status:"Working"}],Wn=i=>i==null?"0 ₫":new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",maximumFractionDigits:0}).format(i),oN=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})},Xv=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})},lN=()=>{var _t;const{selectedTable:i,setSelectedTable:e,orderType:t,setOrderType:r,cartItems:a,addToCart:l,updateQuantity:c,clearCart:d,discountAmount:h,setDiscountAmount:m,discountType:g,setDiscountType:v,subTotal:_,calculatedDiscount:M,finalTotal:T}=tb(),[C,S]=ce.useState("floor"),[y,D]=ce.useState("all"),[L,b]=ce.useState("cat-all"),[N,P]=ce.useState(""),[I,E]=ce.useState(null),[U,B]=ce.useState([]),[z,X]=ce.useState(""),[de,pe]=ce.useState(!1),[Y,me]=ce.useState("Cash"),[J,q]=ce.useState(0),[ue,ae]=ce.useState(!1),[k,Z]=ce.useState(""),[Ce,ze]=ce.useState(JR),Ge=Ce.filter(Me=>y==="all"?!0:Me.areaId===y),K=eN.filter(Me=>{const rt=L==="cat-all"?!0:Me.categoryId===L,ot=Me.name.toLowerCase().includes(N.toLowerCase())||Me.code.toLowerCase().includes(N.toLowerCase());return rt&&ot}),Se=Me=>{e(Me),r("DineIn"),S("order")},ve=Me=>{E(Me),B([]),X("")},ke=()=>{I&&(l(I,U,z),E(null))},Ze=()=>{a.length!==0&&(i&&ze(Me=>Me.map(rt=>rt.id===i.id?{...rt,status:"Occupied",totalAmount:T,occupiedAt:new Date().toISOString()}:rt)),Z("Đã gửi đơn hàng xuống Màn hình Bếp (KDS) thành công!"),ae(!0),setTimeout(()=>ae(!1),3e3))},Je=()=>{i&&ze(Me=>Me.map(rt=>rt.id===i.id?{...rt,status:"Cleaning",totalAmount:void 0,occupiedAt:void 0}:rt)),pe(!1),d(),e(null),S("floor"),Z("Thanh toán thành công & In hóa đơn hoàn tất!"),ae(!0),setTimeout(()=>ae(!1),3500)};return f.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)]",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl",children:[f.jsxs("button",{onClick:()=>S("floor"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="floor"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[f.jsx(kb,{className:"w-4 h-4"}),f.jsx("span",{children:"Sơ Đồ Bàn"})]}),f.jsxs("button",{onClick:()=>S("order"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="order"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[f.jsx(fg,{className:"w-4 h-4"}),f.jsx("span",{children:"Thực Đơn & Order"}),a.length>0&&f.jsx("span",{className:"flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-emerald-600 rounded-full",children:a.length})]})]}),i?f.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold",children:[f.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),f.jsxs("span",{children:["Đang chọn: ",f.jsx("strong",{children:i.name})," (",i.areaName,")"]}),f.jsx("button",{onClick:()=>{e(null),S("floor")},className:"ml-2 text-gray-400 hover:text-rose-600",children:f.jsx(Ps,{className:"w-3.5 h-3.5"})})]}):f.jsxs("div",{className:"text-xs text-gray-500 font-medium hidden sm:block",children:["Vui lòng chọn bàn để tạo order hoặc chọn ",f.jsx("strong",{children:"Mang về"})]}),f.jsxs("div",{className:"flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold",children:[f.jsx("button",{onClick:()=>r("DineIn"),className:`px-3 py-1 rounded-lg transition-colors ${t==="DineIn"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Tại Bàn"}),f.jsx("button",{onClick:()=>{r("Takeaway"),e(null),S("order")},className:`px-3 py-1 rounded-lg transition-colors ${t==="Takeaway"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Mang Về"})]})]}),C==="floor"?f.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden",children:[f.jsxs("div",{className:"flex items-center space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:[f.jsxs("button",{onClick:()=>D("all"),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${y==="all"?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Tất cả khu vực (",Ce.length,")"]}),ZR.map(Me=>f.jsxs("button",{onClick:()=>D(Me.id),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${y===Me.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[Me.name," (",Me.tablesCount,")"]},Me.id))]}),f.jsxs("div",{className:"flex items-center space-x-4 my-3 text-xs font-medium text-gray-600",children:[f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500"}),f.jsx("span",{children:"Bàn trống"})]}),f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500"}),f.jsx("span",{children:"Đang có khách"})]}),f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500"}),f.jsx("span",{children:"Đã đặt trước"})]}),f.jsxs("div",{className:"flex items-center space-x-1.5",children:[f.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400"}),f.jsx("span",{children:"Cần dọn"})]})]}),f.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 p-1",children:Ge.map(Me=>{const rt=Me.status==="Occupied",ot=Me.status==="Reserved",Pe=Me.status==="Cleaning";let ht="bg-emerald-50 border-emerald-200 hover:border-emerald-500 text-emerald-900",yt="bg-emerald-500 text-white",Ct="Sẵn sàng";return rt?(ht="bg-rose-50 border-rose-200 hover:border-rose-500 text-rose-900",yt="bg-rose-500 text-white",Ct="Có khách"):ot?(ht="bg-amber-50 border-amber-200 hover:border-amber-500 text-amber-900",yt="bg-amber-500 text-white",Ct="Đã đặt"):Pe&&(ht="bg-blue-50 border-blue-200 hover:border-blue-500 text-blue-900",yt="bg-blue-500 text-white",Ct="Cần dọn"),f.jsxs("div",{onClick:()=>Se(Me),className:`flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 hover:shadow-lg ${ht}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"font-extrabold text-sm tracking-tight",children:Me.name}),f.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${yt}`,children:Ct})]}),f.jsx("div",{className:"flex items-center space-x-2 text-[11px] opacity-75 mt-1",children:f.jsxs("span",{className:"flex items-center",children:[f.jsx(Wc,{className:"w-3 h-3 mr-1"})," ",Me.capacity," chỗ"]})})]}),f.jsx("div",{className:"mt-3 pt-2 border-t border-black/5",children:rt?f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"text-[11px] font-medium opacity-80",children:"Tổng đơn:"}),f.jsx("div",{className:"font-extrabold text-sm text-rose-700",children:Wn(Me.totalAmount)}),Me.occupiedAt&&f.jsxs("div",{className:"flex items-center text-[10px] opacity-70 mt-0.5",children:[f.jsx(jc,{className:"w-3 h-3 mr-1"}),f.jsx("span",{children:Xv(Me.occupiedAt)})]})]}):f.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold opacity-90",children:[f.jsx("span",{children:"Đặt món"}),f.jsx(bb,{className:"w-4 h-4"})]})})]},Me.id)})})]}):f.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden",children:[f.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm",children:[f.jsxs("div",{className:"relative mb-3",children:[f.jsx(kh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",value:N,onChange:Me=>P(Me.target.value),placeholder:"Tìm tên món ăn, đồ uống...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"})]}),f.jsx("div",{className:"flex space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:QR.map(Me=>f.jsx("button",{onClick:()=>b(Me.id),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${L===Me.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:Me.name},Me.id))}),f.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 p-1 mt-3",children:K.map(Me=>f.jsxs("div",{onClick:()=>Me.options&&Me.options.length>0?ve(Me):l(Me),className:"group flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-2.5 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-150",children:[f.jsxs("div",{className:"relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-2",children:[f.jsx("img",{src:Me.imageUrl,alt:Me.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"}),f.jsx("span",{className:"absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold bg-black/60 text-white rounded",children:Me.code})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-xs font-bold text-gray-900 line-clamp-2 leading-tight",children:Me.name}),f.jsxs("div",{className:"flex items-center justify-between mt-2",children:[f.jsx("span",{className:"text-xs font-extrabold text-emerald-700",children:Wn(Me.price)}),f.jsx("button",{className:"p-1 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors",children:f.jsx(Oo,{className:"w-3.5 h-3.5"})})]})]})]},Me.id))})]}),f.jsxs("div",{className:"w-full md:w-80 lg:w-96 flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-md min-h-0",children:[f.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:f.jsxs("div",{className:"flex items-center space-x-2",children:[f.jsx(lg,{className:"w-5 h-5 text-emerald-600"}),f.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Chi Tiết Đơn Hàng"})]})}),f.jsx("div",{className:"flex-1 overflow-y-auto py-3 space-y-2.5 divide-y divide-gray-50",children:a.length===0?f.jsxs("div",{className:"flex flex-col items-center justify-center h-48 text-center text-gray-400",children:[f.jsx(fg,{className:"w-10 h-10 mb-2 opacity-30"}),f.jsx("p",{className:"text-xs font-medium",children:"Chưa có món ăn nào trong giỏ"})]}):a.map(Me=>f.jsx("div",{className:"pt-2 first:pt-0",children:f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{className:"flex-1 pr-2",children:[f.jsx("div",{className:"text-xs font-bold text-gray-900",children:Me.product.name}),Me.selectedOptions.length>0&&f.jsx("div",{className:"text-[10px] text-gray-500 font-medium",children:Me.selectedOptions.map(rt=>rt.valueName).join(", ")}),f.jsx("div",{className:"text-xs font-semibold text-emerald-700 mt-0.5",children:Wn(Me.unitPrice)})]}),f.jsxs("div",{className:"flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg",children:[f.jsx("button",{onClick:()=>c(Me.cartItemId,-1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:f.jsx(qb,{className:"w-3 h-3"})}),f.jsx("span",{className:"w-5 text-center text-xs font-bold",children:Me.quantity}),f.jsx("button",{onClick:()=>c(Me.cartItemId,1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:f.jsx(Oo,{className:"w-3 h-3"})})]}),f.jsx("div",{className:"w-16 text-right font-bold text-xs text-gray-900 ml-2",children:Wn(Me.totalPrice)})]})},Me.cartItemId))}),a.length>0&&f.jsxs("div",{className:"pt-3 border-t border-gray-100 space-y-2",children:[f.jsxs("div",{className:"flex justify-between text-sm font-extrabold text-gray-900 pt-1 border-t border-gray-100",children:[f.jsx("span",{children:"Khách cần trả:"}),f.jsx("span",{className:"text-emerald-700 text-base",children:Wn(T)})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[f.jsxs("button",{onClick:Ze,className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors",children:[f.jsx(aw,{className:"w-4 h-4"}),f.jsx("span",{children:"Gửi Bếp"})]}),f.jsxs("button",{onClick:()=>pe(!0),className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-colors",children:[f.jsx(lg,{className:"w-4 h-4"}),f.jsx("span",{children:"Thanh Toán"})]})]})]})]})]}),I&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:f.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-gray-100",children:[f.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-gray-100",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-base text-gray-900",children:I.name}),f.jsx("p",{className:"text-xs text-emerald-700 font-extrabold",children:Wn(I.price)})]}),f.jsx("button",{onClick:()=>E(null),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:f.jsx(Ps,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"py-4 space-y-4 max-h-80 overflow-y-auto",children:(_t=I.options)==null?void 0:_t.map(Me=>f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:Me.name}),f.jsx("div",{className:"grid grid-cols-2 gap-2",children:Me.values.map(rt=>{const ot=U.some(Pe=>Pe.optionId===Me.id&&Pe.valueId===rt.id);return f.jsx("button",{type:"button",onClick:()=>{B(Pe=>[...Pe.filter(yt=>yt.optionId!==Me.id),{optionId:Me.id,optionName:Me.name,valueId:rt.id,valueName:rt.name,extraPrice:rt.extraPrice}])},className:`p-2 rounded-xl text-xs font-medium border text-left transition-all ${ot?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}`,children:f.jsx("div",{children:rt.name})},rt.id)})})]},Me.id))}),f.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[f.jsx("button",{onClick:()=>E(null),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Hủy"}),f.jsx("button",{onClick:ke,className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30",children:"Thêm Vào Giỏ"})]})]})}),de&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:f.jsxs("div",{className:"w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gray-100",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thanh Toán Hóa Đơn"}),f.jsx("p",{className:"text-xs text-gray-500",children:i?`Bàn: ${i.name}`:"Đơn mang về"})]}),f.jsx("button",{onClick:()=>pe(!1),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:f.jsx(Ps,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"py-4 space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:"Phương Thức Thanh Toán"}),f.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[f.jsxs("button",{onClick:()=>me("Cash"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${Y==="Cash"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[f.jsx(cb,{className:"w-6 h-6 mb-1 text-emerald-600"}),f.jsx("span",{className:"text-xs",children:"Tiền Mặt"})]}),f.jsxs("button",{onClick:()=>me("QR"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${Y==="QR"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[f.jsx(tw,{className:"w-6 h-6 mb-1 text-teal-600"}),f.jsx("span",{className:"text-xs",children:"Chuyển Khoản QR"})]}),f.jsxs("button",{onClick:()=>me("Card"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${Y==="Card"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[f.jsx(Rb,{className:"w-6 h-6 mb-1 text-blue-600"}),f.jsx("span",{className:"text-xs",children:"Thẻ POS"})]})]})]}),f.jsxs("div",{className:"p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center",children:[f.jsx("span",{className:"text-xs font-semibold text-emerald-900",children:"Tổng tiền cần thu:"}),f.jsx("span",{className:"text-lg font-black text-emerald-700",children:Wn(T)})]})]}),f.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[f.jsx("button",{onClick:()=>pe(!1),className:"flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Quay Lại"}),f.jsx("button",{onClick:Je,className:"flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30",children:"Xác Nhận & In Hóa Đơn"})]})]})}),ue&&f.jsxs("div",{className:"fixed bottom-20 right-5 z-50 flex items-center p-4 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-800 animate-in fade-in",children:[f.jsx(Wo,{className:"w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"}),f.jsx("span",{className:"text-xs font-bold",children:k})]})]})},cN=()=>{const[i,e]=ce.useState(tN),[t,r]=ce.useState("ALL"),a=(c,d)=>{e(h=>h.map(m=>m.id===c?{...m,status:d}:m))},l=i.filter(c=>t==="ALL"?!0:c.status===t);return f.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)] space-y-4",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-800 rounded-xl",children:f.jsx(Oh,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Màn Hình Bếp & Pha Chế (KDS)"}),f.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi và cập nhật tiến độ chế biến món ăn"})]})]}),f.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl space-x-1",children:[f.jsxs("button",{onClick:()=>r("ALL"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="ALL"?"bg-white text-gray-900 shadow-sm":"text-gray-600"}`,children:["Tất Cả (",i.length,")"]}),f.jsxs("button",{onClick:()=>r("Pending"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Pending"?"bg-rose-500 text-white shadow-sm":"text-gray-600"}`,children:["Chờ Làm (",i.filter(c=>c.status==="Pending").length,")"]}),f.jsxs("button",{onClick:()=>r("Cooking"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Cooking"?"bg-amber-500 text-white shadow-sm":"text-gray-600"}`,children:["Đang Chế Biến (",i.filter(c=>c.status==="Cooking").length,")"]}),f.jsxs("button",{onClick:()=>r("Ready"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Ready"?"bg-emerald-600 text-white shadow-sm":"text-gray-600"}`,children:["Hoàn Tất (",i.filter(c=>c.status==="Ready").length,")"]})]})]}),f.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1",children:l.length===0?f.jsxs("div",{className:"col-span-full flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-2xl border border-gray-200",children:[f.jsx(Ew,{className:"w-12 h-12 mb-2 opacity-30"}),f.jsx("p",{className:"text-sm font-bold text-gray-500",children:"Không có món ăn nào trong hàng chờ"})]}):l.map(c=>{const d=c.status==="Pending",h=c.status==="Cooking",m=c.status==="Ready";let g="border-gray-200",v="bg-gray-100 text-gray-800";return d?(g="border-rose-300 ring-2 ring-rose-500/20",v="bg-rose-500 text-white"):h?(g="border-amber-300 ring-2 ring-amber-500/20",v="bg-amber-500 text-white"):m&&(g="border-emerald-300",v="bg-emerald-600 text-white"),f.jsxs("div",{className:`flex flex-col justify-between bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all ${g}`,children:[f.jsxs("div",{className:`flex items-center justify-between px-4 py-2.5 ${v}`,children:[f.jsxs("div",{className:"font-extrabold text-sm",children:[c.tableName," (",c.areaName,")"]}),f.jsxs("div",{className:"flex items-center text-xs font-semibold space-x-1",children:[f.jsx(jc,{className:"w-3.5 h-3.5"}),f.jsxs("span",{children:[c.elapsedMinutes," phút"]})]})]}),f.jsxs("div",{className:"p-4 space-y-3 flex-1",children:[f.jsxs("div",{className:"flex items-start justify-between",children:[f.jsxs("div",{children:[f.jsx("h4",{className:"text-base font-extrabold text-gray-900 leading-tight",children:c.productName}),c.optionsText&&f.jsx("p",{className:"text-xs text-gray-600 font-medium mt-1",children:c.optionsText}),c.note&&f.jsxs("p",{className:"text-xs text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md mt-1 border border-rose-200 inline-block",children:["⚠️ ",c.note]})]}),f.jsxs("span",{className:"flex items-center justify-center w-8 h-8 font-black text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200",children:["x",c.quantity]})]}),f.jsxs("div",{className:"text-[11px] text-gray-400 font-medium",children:["Mã đơn: ",c.orderCode," • Nhận lúc: ",Xv(c.createdAt)]})]}),f.jsxs("div",{className:"p-3 bg-gray-50 border-t border-gray-100",children:[d&&f.jsxs("button",{onClick:()=>a(c.id,"Cooking"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-colors",children:[f.jsx(Jb,{className:"w-4 h-4 mr-1.5"}),f.jsx("span",{children:"BẮT ĐẦU CHẾ BIẾN"})]}),h&&f.jsxs("button",{onClick:()=>a(c.id,"Ready"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors",children:[f.jsx(_b,{className:"w-4 h-4 mr-1.5"}),f.jsx("span",{children:"HOÀN TẤT (BÁO PHỤC VỤ)"})]}),m&&f.jsxs("div",{className:"flex items-center justify-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200",children:[f.jsx(Wo,{className:"w-4 h-4 mr-1.5"}),f.jsx("span",{children:"Đã Xong - Chờ Phục Vụ"})]})]})]},c.id)})})]})},uN=()=>{const[i,e]=ce.useState("items"),[t,r]=ce.useState(nN),[a,l]=ce.useState(""),[c,d]=ce.useState(!1),[h,m]=ce.useState(""),[g,v]=ce.useState(""),[_,M]=ce.useState("kg"),[T,C]=ce.useState(10),[S,y]=ce.useState(5e4),D=t.filter(b=>b.name.toLowerCase().includes(a.toLowerCase())||b.code.toLowerCase().includes(a.toLowerCase())),L=b=>{b.preventDefault();const N={id:`inv-${Date.now()}`,code:g||`RM00${t.length+1}`,name:h,unit:_,minStock:5,currentStock:Number(T),unitPrice:Number(S),category:"Nguyên liệu pha chế",lastUpdated:new Date().toISOString()};r([N,...t]),d(!1),m("")};return f.jsxs("div",{className:"flex flex-col space-y-4",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-xl",children:f.jsx(Uh,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Quản Lý Kho & Nguyên Liệu"}),f.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi tồn kho thực tế, nhập kho và định lượng món"})]})]}),f.jsxs("button",{onClick:()=>d(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[f.jsx(Oo,{className:"w-4 h-4"}),f.jsx("span",{children:"Thêm Nguyên Liệu Mới"})]})]}),f.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[f.jsxs("button",{onClick:()=>e("items"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="items"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Mục Nguyên Liệu (",t.length,")"]}),f.jsx("button",{onClick:()=>e("orders"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="orders"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Đơn Nhập Kho (PO)"})]}),i==="items"&&f.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[f.jsxs("div",{className:"relative max-w-md",children:[f.jsx(kh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",value:a,onChange:b=>l(b.target.value),placeholder:"Tìm tên nguyên liệu hoặc mã nguyên liệu...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left border-collapse",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[f.jsx("th",{className:"p-3",children:"Mã NL"}),f.jsx("th",{className:"p-3",children:"Tên Nguyên Liệu"}),f.jsx("th",{className:"p-3",children:"Đơn Vị Tính"}),f.jsx("th",{className:"p-3",children:"Tồn Kho Hiện Tại"}),f.jsx("th",{className:"p-3",children:"Đơn Giá Nhập"}),f.jsx("th",{className:"p-3",children:"Trạng Thái"}),f.jsx("th",{className:"p-3 text-right",children:"Cập Nhật"})]})}),f.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:D.map(b=>{const N=b.currentStock<=b.minStock;return f.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[f.jsx("td",{className:"p-3 font-bold text-gray-800",children:b.code}),f.jsx("td",{className:"p-3 font-bold text-gray-900",children:b.name}),f.jsx("td",{className:"p-3 font-medium text-gray-600",children:b.unit}),f.jsxs("td",{className:"p-3 font-extrabold text-gray-900",children:[b.currentStock," ",b.unit]}),f.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:Wn(b.unitPrice)}),f.jsx("td",{className:"p-3",children:N?f.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800",children:[f.jsx(_w,{className:"w-3 h-3 mr-1"}),"Sắp Hết Kho"]}):f.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[f.jsx(Wo,{className:"w-3 h-3 mr-1"}),"An Toàn"]})}),f.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:oN(b.lastUpdated)})]},b.id)})})]})})]}),i==="orders"&&f.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center",children:[f.jsx(Sw,{className:"w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80"}),f.jsx("h3",{className:"text-sm font-bold text-gray-900",children:"Danh Sách Đơn Mua Hàng Nhà Cung Cấp (PO)"}),f.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-sm mx-auto",children:"Hệ thống hỗ trợ duyệt đơn nhập kho, kiểm hàng tự động cộng tồn kho tức thì."})]}),c&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:f.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[f.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[f.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thêm Nguyên Liệu Kho Mới"}),f.jsx("button",{onClick:()=>d(!1),className:"text-gray-400 hover:text-gray-600",children:f.jsx(Ps,{className:"w-5 h-5"})})]}),f.jsxs("form",{onSubmit:L,className:"py-4 space-y-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Nguyên Liệu"}),f.jsx("input",{type:"text",value:g,onChange:b=>v(b.target.value),placeholder:"Ví dụ: RM006",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Tên Nguyên Liệu (*)"}),f.jsx("input",{type:"text",required:!0,value:h,onChange:b=>m(b.target.value),placeholder:"Ví dụ: Bột Matcha Nhật Bản",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Vị Tính"}),f.jsx("input",{type:"text",value:_,onChange:b=>M(b.target.value),placeholder:"kg, Hộp, Chai...",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Lượng Ban Đầu"}),f.jsx("input",{type:"number",value:T,onChange:b=>C(Number(b.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Giá Nhập (₫)"}),f.jsx("input",{type:"number",value:S,onChange:b=>y(Number(b.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),f.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[f.jsx("button",{type:"button",onClick:()=>d(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200",children:"Hủy"}),f.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/30",children:"Lưu Nguyên Liệu"})]})]})]})})]})},dN=()=>{const i=iN;return f.jsxs("div",{className:"flex flex-col space-y-5",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl",children:f.jsx(xb,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Báo Cáo & Thống Kê Kinh Doanh"}),f.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Tổng quan doanh thu, đơn hàng và sản phẩm bán chạy"})]})]}),f.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200",children:[f.jsx(pb,{className:"w-4 h-4 text-emerald-600"}),f.jsxs("span",{children:["Hôm nay: ",new Date().toLocaleDateString("vi-VN")]})]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[f.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Doanh Thu Hôm Nay"}),f.jsx("div",{className:"p-2 bg-emerald-50 text-emerald-700 rounded-xl",children:f.jsx(Pb,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"mt-3",children:[f.jsx("div",{className:"text-2xl font-black text-gray-900",children:Wn(i.todayRevenue)}),f.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[f.jsx(ag,{className:"w-4 h-4 mr-0.5"}),f.jsxs("span",{children:["+",i.revenueGrowthPercent,"% so với hôm qua"]})]})]})]}),f.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Số Đơn Phục Vụ"}),f.jsx("div",{className:"p-2 bg-blue-50 text-blue-700 rounded-xl",children:f.jsx(cw,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"mt-3",children:[f.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.todayOrders," đơn"]}),f.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[f.jsx(ag,{className:"w-4 h-4 mr-0.5"}),f.jsxs("span",{children:["+",i.ordersGrowthPercent,"% tăng trưởng"]})]})]})]}),f.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Giá Trị Đơn Trung Bình"}),f.jsx("div",{className:"p-2 bg-purple-50 text-purple-700 rounded-xl",children:f.jsx(xw,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"mt-3",children:[f.jsx("div",{className:"text-2xl font-black text-gray-900",children:Wn(i.averageOrderValue)}),f.jsxs("div",{className:"text-xs font-medium text-gray-400 mt-1",children:["Tính trên ",i.todayOrders," hóa đơn"]})]})]}),f.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[f.jsxs("div",{className:"flex items-center justify-between",children:[f.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Tải Bàn Hiện Tại"}),f.jsx("div",{className:"p-2 bg-amber-50 text-amber-700 rounded-xl",children:f.jsx(Wc,{className:"w-5 h-5"})})]}),f.jsxs("div",{className:"mt-3",children:[f.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.activeTablesCount," / ",i.totalTablesCount," Bàn"]}),f.jsxs("div",{className:"text-xs font-semibold text-amber-600 mt-1",children:["Công suất: ",Math.round(i.activeTablesCount/i.totalTablesCount*100),"%"]})]})]})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5",children:[f.jsxs("div",{className:"lg:col-span-2 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Biểu Đồ Doanh Thu Theo Giờ"}),f.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"Đơn vị: VNĐ"})]}),f.jsx("div",{className:"flex items-end justify-between h-56 pt-6 px-2 border-b border-gray-100",children:i.revenueChartData.map((e,t)=>{const r=Math.max(...i.revenueChartData.map(l=>l.amount)),a=Math.round(e.amount/r*100);return f.jsxs("div",{className:"flex flex-col items-center flex-1 mx-1 group",children:[f.jsx("div",{className:"text-[10px] font-bold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:Wn(e.amount)}),f.jsx("div",{className:"w-full bg-emerald-100 group-hover:bg-emerald-600 rounded-t-xl transition-all duration-200",style:{height:`${a}%`}}),f.jsx("div",{className:"text-[11px] font-semibold text-gray-500 mt-2",children:e.time})]},t)})})]}),f.jsxs("div",{className:"p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[f.jsx(iv,{className:"w-5 h-5 text-amber-500"}),f.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Top Sản Phẩm Bán Chạy"})]}),f.jsx("div",{className:"space-y-3 divide-y divide-gray-50",children:i.topSellingProducts.map((e,t)=>f.jsxs("div",{className:"flex items-center justify-between pt-2.5 first:pt-0",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("span",{className:`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${t===0?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-600"}`,children:t+1}),f.jsxs("div",{children:[f.jsx("div",{className:"text-xs font-bold text-gray-900",children:e.name}),f.jsxs("div",{className:"text-[10px] text-gray-500 font-medium",children:["Đã bán: ",e.quantity," phần"]})]})]}),f.jsx("div",{className:"text-xs font-extrabold text-emerald-700",children:Wn(e.revenue)})]},t))})]})]})]})},fN=()=>{const[i,e]=ce.useState("customers"),[t]=ce.useState(rN),[r,a]=ce.useState(sN),[l,c]=ce.useState(""),[d,h]=ce.useState(!1),[m,g]=ce.useState(""),[v,_]=ce.useState(2e4),M=t.filter(C=>C.fullName.toLowerCase().includes(l.toLowerCase())||C.phoneNumber.includes(l)),T=C=>{C.preventDefault();const S={id:`v-${Date.now()}`,code:m.toUpperCase()||"KM2026",discountType:"FixedAmount",discountValue:Number(v),minOrderValue:1e5,validUntil:"2026-12-31",usageLimit:200,usedCount:0,isActive:!0};a([S,...r]),h(!1),g("")};return f.jsxs("div",{className:"flex flex-col space-y-4",children:[f.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-800 rounded-xl",children:f.jsx(Wc,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Khách Hàng & Chương Trình Khuyến Mãi"}),f.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Quản lý thành viên tích điểm và mã giảm giá Voucher"})]})]}),i==="vouchers"&&f.jsxs("button",{onClick:()=>h(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[f.jsx(Oo,{className:"w-4 h-4"}),f.jsx("span",{children:"Tạo Voucher Mới"})]})]}),f.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[f.jsxs("button",{onClick:()=>e("customers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="customers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Sách Khách Hàng (",t.length,")"]}),f.jsxs("button",{onClick:()=>e("vouchers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="vouchers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Mã Giảm Giá Voucher (",r.length,")"]})]}),i==="customers"&&f.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[f.jsxs("div",{className:"relative max-w-md",children:[f.jsx(kh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),f.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"Tìm theo tên hoặc số điện thoại khách hàng...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left border-collapse",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[f.jsx("th",{className:"p-3",children:"Họ & Tên"}),f.jsx("th",{className:"p-3",children:"Số Điện Thoại"}),f.jsx("th",{className:"p-3",children:"Điểm Tích Lũy"}),f.jsx("th",{className:"p-3",children:"Hạng Thành Viên"}),f.jsx("th",{className:"p-3",children:"Tổng Chi Tiêu"}),f.jsx("th",{className:"p-3 text-right",children:"Lần Ghé Gần Nhất"})]})}),f.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:M.map(C=>f.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[f.jsx("td",{className:"p-3 font-bold text-gray-900",children:C.fullName}),f.jsx("td",{className:"p-3 font-medium text-gray-700",children:C.phoneNumber}),f.jsxs("td",{className:"p-3 font-extrabold text-amber-600",children:[C.points," điểm"]}),f.jsx("td",{className:"p-3",children:f.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${C.tier==="Diamond"?"bg-purple-100 text-purple-800":C.tier==="Gold"?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-800"}`,children:[f.jsx(iv,{className:"w-3 h-3 mr-1"}),"Hạng ",C.tier]})}),f.jsx("td",{className:"p-3 font-bold text-emerald-700",children:Wn(C.totalSpent)}),f.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:C.lastVisit})]},C.id))})]})})]}),i==="vouchers"&&f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(C=>f.jsx("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between",children:f.jsxs("div",{className:"flex items-center space-x-3",children:[f.jsx("div",{className:"flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl font-black",children:f.jsx(mw,{className:"w-6 h-6"})}),f.jsxs("div",{children:[f.jsx("div",{className:"text-base font-black text-gray-900 tracking-wider",children:C.code}),f.jsx("div",{className:"text-xs font-bold text-emerald-700",children:C.discountType==="Percentage"?`Giảm ${C.discountValue}%`:`Giảm ${Wn(C.discountValue)}`}),f.jsxs("div",{className:"text-[10px] text-gray-400",children:["Đơn từ ",Wn(C.minOrderValue)," • Hạn: ",C.validUntil]})]})]})},C.id))}),d&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:f.jsxs("div",{className:"w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[f.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[f.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Tạo Mã Giảm Giá Mới"}),f.jsx("button",{onClick:()=>h(!1),className:"text-gray-400 hover:text-gray-600",children:f.jsx(Ps,{className:"w-5 h-5"})})]}),f.jsxs("form",{onSubmit:T,className:"py-4 space-y-3",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Voucher (*)"}),f.jsx("input",{type:"text",required:!0,value:m,onChange:C=>g(C.target.value),placeholder:"Ví dụ: KM30K",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-bold tracking-wider"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Tiền Giảm (₫)"}),f.jsx("input",{type:"number",value:v,onChange:C=>_(Number(C.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),f.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[f.jsx("button",{type:"button",onClick:()=>h(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl",children:"Hủy"}),f.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/30",children:"Tạo Voucher"})]})]})]})})]})},hN=()=>{const{user:i}=jo(),[e,t]=ce.useState(aN),[r,a]=ce.useState(!1),l=()=>{var c;if(r)a(!1);else{const d={id:`att-${Date.now()}`,employeeName:(i==null?void 0:i.fullName)||(i==null?void 0:i.username)||"Nhân viên mới",role:(i==null?void 0:i.role)||((c=i==null?void 0:i.roles)==null?void 0:c[0])||"Cashier",checkInTime:new Date().toLocaleTimeString("vi-VN"),shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"};t([d,...e]),a(!0)}};return f.jsxs("div",{className:"flex flex-col space-y-4",children:[f.jsxs("div",{className:"p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1",children:[f.jsx(jc,{className:"w-4 h-4"}),f.jsx("span",{children:"Màn Hình Điểm Danh Ca Làm Việc"})]}),f.jsxs("h2",{className:"text-2xl font-black",children:["Xin chào, ",(i==null?void 0:i.fullName)||(i==null?void 0:i.username),"!"]}),f.jsxs("p",{className:"text-xs text-emerald-100 mt-0.5",children:["Thời gian hiện tại: ",new Date().toLocaleTimeString("vi-VN")," • Ca Sáng"]})]}),f.jsx("button",{onClick:l,className:`flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-xs font-black shadow-xl transition-all ${r?"bg-rose-500 hover:bg-rose-600 text-white shadow-rose-900/30":"bg-white text-emerald-800 hover:bg-emerald-50 shadow-emerald-900/30"}`,children:r?f.jsxs(f.Fragment,{children:[f.jsx(sv,{className:"w-4 h-4"}),f.jsx("span",{children:"CHECK-OUT KẾT THÚC CA"})]}):f.jsxs(f.Fragment,{children:[f.jsx(zb,{className:"w-4 h-4"}),f.jsx("span",{children:"CHECK-IN BẮT ĐẦU CA"})]})})]}),f.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[f.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Bảng Theo Dõi Điểm Danh Ca Làm Việc"}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left border-collapse",children:[f.jsx("thead",{children:f.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[f.jsx("th",{className:"p-3",children:"Nhân Viên"}),f.jsx("th",{className:"p-3",children:"Vai Trò"}),f.jsx("th",{className:"p-3",children:"Ca Làm Việc"}),f.jsx("th",{className:"p-3",children:"Giờ Check-in"}),f.jsx("th",{className:"p-3 text-right",children:"Trạng Thái"})]})}),f.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:e.map(c=>f.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[f.jsx("td",{className:"p-3 font-bold text-gray-900",children:c.employeeName}),f.jsx("td",{className:"p-3",children:f.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-700 rounded-md",children:c.role})}),f.jsx("td",{className:"p-3 font-medium text-gray-600",children:c.shiftName}),f.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:c.checkInTime}),f.jsx("td",{className:"p-3 text-right",children:f.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[f.jsx(Wo,{className:"w-3 h-3 mr-1"}),"Đang Trong Ca"]})})]},c.id))})]})})]})]})},pN=({children:i})=>{const{isAuthenticated:e,isLoading:t}=jo();return t?f.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:f.jsx("div",{className:"w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"})}):e?f.jsx(f.Fragment,{children:i}):f.jsx(wf,{to:"/login",replace:!0})},mN=()=>f.jsx(QM,{children:f.jsx(eb,{children:f.jsx(IS,{children:f.jsxs(TS,{children:[f.jsx(Ii,{path:"/login",element:f.jsx(KR,{})}),f.jsxs(Ii,{path:"/",element:f.jsx(pN,{children:f.jsx(Nw,{})}),children:[f.jsx(Ii,{index:!0,element:f.jsx(wf,{to:"/pos",replace:!0})}),f.jsx(Ii,{path:"pos",element:f.jsx(lN,{})}),f.jsx(Ii,{path:"kitchen",element:f.jsx(cN,{})}),f.jsx(Ii,{path:"inventory",element:f.jsx(uN,{})}),f.jsx(Ii,{path:"dashboard",element:f.jsx(dN,{})}),f.jsx(Ii,{path:"customers",element:f.jsx(fN,{})}),f.jsx(Ii,{path:"attendance",element:f.jsx(hN,{})})]}),f.jsx(Ii,{path:"*",element:f.jsx(wf,{to:"/pos",replace:!0})})]})})})});Uy.createRoot(document.getElementById("root")).render(f.jsx(mx.StrictMode,{children:f.jsx(mN,{})}));
