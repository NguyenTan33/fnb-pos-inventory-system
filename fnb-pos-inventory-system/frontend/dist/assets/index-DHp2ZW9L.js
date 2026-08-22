function Ey(i,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in i)){const l=Object.getOwnPropertyDescriptor(r,a);l&&Object.defineProperty(i,a,l.get?l:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function fx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var bd={exports:{}},ho={},Td={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function wy(){if(E0)return bt;E0=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function S(O,Q,Oe){this.props=O,this.context=Q,this.refs=C,this.updater=Oe||M}S.prototype.isReactComponent={},S.prototype.setState=function(O,Q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Q,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function g(){}g.prototype=S.prototype;function R(O,Q,Oe){this.props=O,this.context=Q,this.refs=C,this.updater=Oe||M}var L=R.prototype=new g;L.constructor=R,b(L,S.prototype),L.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(O,Q,Oe){var je,We={},Y=null,_e=null;if(Q!=null)for(je in Q.ref!==void 0&&(_e=Q.ref),Q.key!==void 0&&(Y=""+Q.key),Q)D.call(Q,je)&&!F.hasOwnProperty(je)&&(We[je]=Q[je]);var ve=arguments.length-2;if(ve===1)We.children=Oe;else if(1<ve){for(var ze=Array(ve),it=0;it<ve;it++)ze[it]=arguments[it+2];We.children=ze}if(O&&O.defaultProps)for(je in ve=O.defaultProps,ve)We[je]===void 0&&(We[je]=ve[je]);return{$$typeof:i,type:O,key:Y,ref:_e,props:We,_owner:P.current}}function U(O,Q){return{$$typeof:i,type:O.type,key:Q,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===i}function V(O){var Q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Oe){return Q[Oe]})}var Z=/\/+/g;function ue(O,Q){return typeof O=="object"&&O!==null&&O.key!=null?V(""+O.key):Q.toString(36)}function me(O,Q,Oe,je,We){var Y=typeof O;(Y==="undefined"||Y==="boolean")&&(O=null);var _e=!1;if(O===null)_e=!0;else switch(Y){case"string":case"number":_e=!0;break;case"object":switch(O.$$typeof){case i:case e:_e=!0}}if(_e)return _e=O,We=We(_e),O=je===""?"."+ue(_e,0):je,T(We)?(Oe="",O!=null&&(Oe=O.replace(Z,"$&/")+"/"),me(We,Q,Oe,"",function(it){return it})):We!=null&&(z(We)&&(We=U(We,Oe+(!We.key||_e&&_e.key===We.key?"":(""+We.key).replace(Z,"$&/")+"/")+O)),Q.push(We)),1;if(_e=0,je=je===""?".":je+":",T(O))for(var ve=0;ve<O.length;ve++){Y=O[ve];var ze=je+ue(Y,ve);_e+=me(Y,Q,Oe,ze,We)}else if(ze=y(O),typeof ze=="function")for(O=ze.call(O),ve=0;!(Y=O.next()).done;)Y=Y.value,ze=je+ue(Y,ve++),_e+=me(Y,Q,Oe,ze,We);else if(Y==="object")throw Q=String(O),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return _e}function X(O,Q,Oe){if(O==null)return O;var je=[],We=0;return me(O,je,"","",function(Y){return Q.call(Oe,Y,We++)}),je}function pe(O){if(O._status===-1){var Q=O._result;Q=Q(),Q.then(function(Oe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Oe)},function(Oe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Oe)}),O._status===-1&&(O._status=0,O._result=Q)}if(O._status===1)return O._result.default;throw O._result}var J={current:null},q={transition:null},ce={ReactCurrentDispatcher:J,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function se(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:X,forEach:function(O,Q,Oe){X(O,function(){Q.apply(this,arguments)},Oe)},count:function(O){var Q=0;return X(O,function(){Q++}),Q},toArray:function(O){return X(O,function(Q){return Q})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},bt.Component=S,bt.Fragment=t,bt.Profiler=a,bt.PureComponent=R,bt.StrictMode=r,bt.Suspense=f,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,bt.act=se,bt.cloneElement=function(O,Q,Oe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var je=b({},O.props),We=O.key,Y=O.ref,_e=O._owner;if(Q!=null){if(Q.ref!==void 0&&(Y=Q.ref,_e=P.current),Q.key!==void 0&&(We=""+Q.key),O.type&&O.type.defaultProps)var ve=O.type.defaultProps;for(ze in Q)D.call(Q,ze)&&!F.hasOwnProperty(ze)&&(je[ze]=Q[ze]===void 0&&ve!==void 0?ve[ze]:Q[ze])}var ze=arguments.length-2;if(ze===1)je.children=Oe;else if(1<ze){ve=Array(ze);for(var it=0;it<ze;it++)ve[it]=arguments[it+2];je.children=ve}return{$$typeof:i,type:O.type,key:We,ref:Y,props:je,_owner:_e}},bt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},bt.createElement=w,bt.createFactory=function(O){var Q=w.bind(null,O);return Q.type=O,Q},bt.createRef=function(){return{current:null}},bt.forwardRef=function(O){return{$$typeof:d,render:O}},bt.isValidElement=z,bt.lazy=function(O){return{$$typeof:x,_payload:{_status:-1,_result:O},_init:pe}},bt.memo=function(O,Q){return{$$typeof:p,type:O,compare:Q===void 0?null:Q}},bt.startTransition=function(O){var Q=q.transition;q.transition={};try{O()}finally{q.transition=Q}},bt.unstable_act=se,bt.useCallback=function(O,Q){return J.current.useCallback(O,Q)},bt.useContext=function(O){return J.current.useContext(O)},bt.useDebugValue=function(){},bt.useDeferredValue=function(O){return J.current.useDeferredValue(O)},bt.useEffect=function(O,Q){return J.current.useEffect(O,Q)},bt.useId=function(){return J.current.useId()},bt.useImperativeHandle=function(O,Q,Oe){return J.current.useImperativeHandle(O,Q,Oe)},bt.useInsertionEffect=function(O,Q){return J.current.useInsertionEffect(O,Q)},bt.useLayoutEffect=function(O,Q){return J.current.useLayoutEffect(O,Q)},bt.useMemo=function(O,Q){return J.current.useMemo(O,Q)},bt.useReducer=function(O,Q,Oe){return J.current.useReducer(O,Q,Oe)},bt.useRef=function(O){return J.current.useRef(O)},bt.useState=function(O){return J.current.useState(O)},bt.useSyncExternalStore=function(O,Q,Oe){return J.current.useSyncExternalStore(O,Q,Oe)},bt.useTransition=function(){return J.current.useTransition()},bt.version="18.3.1",bt}var w0;function Eh(){return w0||(w0=1,Td.exports=wy()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b0;function by(){if(b0)return ho;b0=1;var i=Eh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,f,p){var x,_={},y=null,M=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(M=f.ref);for(x in f)r.call(f,x)&&!l.hasOwnProperty(x)&&(_[x]=f[x]);if(d&&d.defaultProps)for(x in f=d.defaultProps,f)_[x]===void 0&&(_[x]=f[x]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:a.current}}return ho.Fragment=t,ho.jsx=c,ho.jsxs=c,ho}var T0;function Ty(){return T0||(T0=1,bd.exports=by()),bd.exports}var m=Ty(),de=Eh();const hx=fx(de),Ay=Ey({__proto__:null,default:hx},[de]);var Wl={},Ad={exports:{}},qn={},Cd={exports:{}},Rd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0;function Cy(){return A0||(A0=1,(function(i){function e(q,ce){var se=q.length;q.push(ce);e:for(;0<se;){var O=se-1>>>1,Q=q[O];if(0<a(Q,ce))q[O]=ce,q[se]=Q,se=O;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var ce=q[0],se=q.pop();if(se!==ce){q[0]=se;e:for(var O=0,Q=q.length,Oe=Q>>>1;O<Oe;){var je=2*(O+1)-1,We=q[je],Y=je+1,_e=q[Y];if(0>a(We,se))Y<Q&&0>a(_e,We)?(q[O]=_e,q[Y]=se,O=Y):(q[O]=We,q[je]=se,O=je);else if(Y<Q&&0>a(_e,se))q[O]=_e,q[Y]=se,O=Y;else break e}}return ce}function a(q,ce){var se=q.sortIndex-ce.sortIndex;return se!==0?se:q.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();i.unstable_now=function(){return c.now()-d}}var f=[],p=[],x=1,_=null,y=3,M=!1,b=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(q){for(var ce=t(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=q)r(p),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(p)}}function T(q){if(C=!1,L(q),!b)if(t(f)!==null)b=!0,pe(D);else{var ce=t(p);ce!==null&&J(T,ce.startTime-q)}}function D(q,ce){b=!1,C&&(C=!1,g(w),w=-1),M=!0;var se=y;try{for(L(ce),_=t(f);_!==null&&(!(_.expirationTime>ce)||q&&!V());){var O=_.callback;if(typeof O=="function"){_.callback=null,y=_.priorityLevel;var Q=O(_.expirationTime<=ce);ce=i.unstable_now(),typeof Q=="function"?_.callback=Q:_===t(f)&&r(f),L(ce)}else r(f);_=t(f)}if(_!==null)var Oe=!0;else{var je=t(p);je!==null&&J(T,je.startTime-ce),Oe=!1}return Oe}finally{_=null,y=se,M=!1}}var P=!1,F=null,w=-1,U=5,z=-1;function V(){return!(i.unstable_now()-z<U)}function Z(){if(F!==null){var q=i.unstable_now();z=q;var ce=!0;try{ce=F(!0,q)}finally{ce?ue():(P=!1,F=null)}}else P=!1}var ue;if(typeof R=="function")ue=function(){R(Z)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,X=me.port2;me.port1.onmessage=Z,ue=function(){X.postMessage(null)}}else ue=function(){S(Z,0)};function pe(q){F=q,P||(P=!0,ue())}function J(q,ce){w=S(function(){q(i.unstable_now())},ce)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){b||M||(b=!0,pe(D))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return y},i.unstable_getFirstCallbackNode=function(){return t(f)},i.unstable_next=function(q){switch(y){case 1:case 2:case 3:var ce=3;break;default:ce=y}var se=y;y=ce;try{return q()}finally{y=se}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,ce){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var se=y;y=q;try{return ce()}finally{y=se}},i.unstable_scheduleCallback=function(q,ce,se){var O=i.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,q){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=se+Q,q={id:x++,callback:ce,priorityLevel:q,startTime:se,expirationTime:Q,sortIndex:-1},se>O?(q.sortIndex=se,e(p,q),t(f)===null&&q===t(p)&&(C?(g(w),w=-1):C=!0,J(T,se-O))):(q.sortIndex=Q,e(f,q),b||M||(b=!0,pe(D))),q},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(q){var ce=y;return function(){var se=y;y=ce;try{return q.apply(this,arguments)}finally{y=se}}}})(Rd)),Rd}var C0;function Ry(){return C0||(C0=1,Cd.exports=Cy()),Cd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R0;function Ny(){if(R0)return qn;R0=1;var i=Eh(),e=Ry();function t(n){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,s){c(n,s),c(n+"Capture",s)}function c(n,s){for(a[n]=s,n=0;n<s.length;n++)r.add(s[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function y(n){return f.call(_,n)?!0:f.call(x,n)?!1:p.test(n)?_[n]=!0:(x[n]=!0,!1)}function M(n,s,o,u){if(o!==null&&o.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,s,o,u){if(s===null||typeof s>"u"||M(n,s,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function C(n,s,o,u,h,v,A){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=s,this.sanitizeURL=v,this.removeEmptyString=A}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var s=n[0];S[s]=new C(s,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var s=n.replace(g,R);S[s]=new C(s,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,s,o,u){var h=S.hasOwnProperty(s)?S[s]:null;(h!==null?h.type!==0:u||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,o,h,u)&&(o=null),u||h===null?y(s)&&(o===null?n.removeAttribute(s):n.setAttribute(s,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(s=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(s):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,s,o):n.setAttribute(s,o))))}var T=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),ue=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),pe=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),q=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,O;function Q(n){if(O===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+n}var Oe=!1;function je(n,s){if(!n||Oe)return"";Oe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(he){var u=he}Reflect.construct(n,[],s)}else{try{s.call()}catch(he){u=he}n.call(s.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var h=he.stack.split(`
`),v=u.stack.split(`
`),A=h.length-1,k=v.length-1;1<=A&&0<=k&&h[A]!==v[k];)k--;for(;1<=A&&0<=k;A--,k--)if(h[A]!==v[k]){if(A!==1||k!==1)do if(A--,k--,0>k||h[A]!==v[k]){var H=`
`+h[A].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=A&&0<=k);break}}}finally{Oe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Q(n):""}function We(n){switch(n.tag){case 5:return Q(n.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return n=je(n.type,!1),n;case 11:return n=je(n.type.render,!1),n;case 1:return n=je(n.type,!0),n;default:return""}}function Y(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case P:return"Portal";case U:return"Profiler";case w:return"StrictMode";case ue:return"Suspense";case me:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case Z:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return s=n.displayName||null,s!==null?s:Y(n.type)||"Memo";case pe:s=n._payload,n=n._init;try{return Y(n(s))}catch{}}return null}function _e(n){var s=n.type;switch(n.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=s.render,n=n.displayName||n.name||"",s.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(s);case 8:return s===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ze(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function it(n){var s=ze(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,s),u=""+n[s];if(!n.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,v=o.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return h.call(this)},set:function(A){u=""+A,v.call(this,A)}}),Object.defineProperty(n,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function nt(n){n._valueTracker||(n._valueTracker=it(n))}function Ce(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=ze(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function le(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ne(n,s){var o=s.checked;return se({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Ge(n,s){var o=s.defaultValue==null?"":s.defaultValue,u=s.checked!=null?s.checked:s.defaultChecked;o=ve(s.value!=null?s.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Ee(n,s){s=s.checked,s!=null&&L(n,"checked",s,!1)}function Ke(n,s){Ee(n,s);var o=ve(s.value),u=s.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}s.hasOwnProperty("value")?yt(n,s.type,o):s.hasOwnProperty("defaultValue")&&yt(n,s.type,ve(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(n.defaultChecked=!!s.defaultChecked)}function _t(n,s,o){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var u=s.type;if(!(u!=="submit"&&u!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+n._wrapperState.initialValue,o||s===n.value||(n.value=s),n.defaultValue=s}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function yt(n,s,o){(s!=="number"||le(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var kt=Array.isArray;function Lt(n,s,o,u){if(n=n.options,s){s={};for(var h=0;h<o.length;h++)s["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=s.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ve(o),s=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}s!==null||n[h].disabled||(s=n[h])}s!==null&&(s.selected=!0)}}function Ut(n,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},s,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,s){var o=s.value;if(o==null){if(o=s.children,s=s.defaultValue,o!=null){if(s!=null)throw Error(t(92));if(kt(o)){if(1<o.length)throw Error(t(93));o=o[0]}s=o}s==null&&(s=""),o=s}n._wrapperState={initialValue:ve(o)}}function Gt(n,s){var o=ve(s.value),u=ve(s.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),s.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Rt(n){var s=n.textContent;s===n._wrapperState.initialValue&&s!==""&&s!==null&&(n.value=s)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,s){return n==null||n==="http://www.w3.org/1999/xhtml"?I(s):n==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var K,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(s,o,u,h)})}:n})(function(n,s){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=s;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=K.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;s.firstChild;)n.appendChild(s.firstChild)}});function ge(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(be).forEach(function(n){Fe.forEach(function(s){s=s+n.charAt(0).toUpperCase()+n.substring(1),be[s]=be[n]})});function xe(n,s,o){return s==null||typeof s=="boolean"||s===""?"":o||typeof s!="number"||s===0||be.hasOwnProperty(n)&&be[n]?(""+s).trim():s+"px"}function ye(n,s){n=n.style;for(var o in s)if(s.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=xe(o,s[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var ke=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,s){if(s){if(ke[n]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Be(n,s){if(n.indexOf("-")===-1)return typeof s.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function ot(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ut=null,et=null,B=null;function Me(n){if(n=Za(n)){if(typeof ut!="function")throw Error(t(280));var s=n.stateNode;s&&(s=al(s),ut(n.stateNode,n.type,s))}}function oe(n){et?B?B.push(n):B=[n]:et=n}function Ae(){if(et){var n=et,s=B;if(B=et=null,Me(n),s)for(n=0;n<s.length;n++)Me(s[n])}}function Le(n,s){return n(s)}function Se(){}var Je=!1;function $e(n,s,o){if(Je)return n(s,o);Je=!0;try{return Le(n,s,o)}finally{Je=!1,(et!==null||B!==null)&&(Se(),Ae())}}function Bt(n,s){var o=n.stateNode;if(o===null)return null;var u=al(o);if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,s,typeof o));return o}var Dt=!1;if(d)try{var un={};Object.defineProperty(un,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",un,un),window.removeEventListener("test",un,un)}catch{Dt=!1}function si(n,s,o,u,h,v,A,k,H){var he=Array.prototype.slice.call(arguments,3);try{s.apply(o,he)}catch(Te){this.onError(Te)}}var $r=!1,Rs=null,Yr=!1,Kr=null,$c={onError:function(n){$r=!0,Rs=n}};function Ho(n,s,o,u,h,v,A,k,H){$r=!1,Rs=null,si.apply($c,arguments)}function Go(n,s,o,u,h,v,A,k,H){if(Ho.apply(this,arguments),$r){if($r){var he=Rs;$r=!1,Rs=null}else throw Error(t(198));Yr||(Yr=!0,Kr=he)}}function In(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function Ns(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function Pa(n){if(In(n)!==n)throw Error(t(188))}function jo(n){var s=n.alternate;if(!s){if(s=In(n),s===null)throw Error(t(188));return s!==n?null:n}for(var o=n,u=s;;){var h=o.return;if(h===null)break;var v=h.alternate;if(v===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===o)return Pa(h),n;if(v===u)return Pa(h),s;v=v.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=v;else{for(var A=!1,k=h.child;k;){if(k===o){A=!0,o=h,u=v;break}if(k===u){A=!0,u=h,o=v;break}k=k.sibling}if(!A){for(k=v.child;k;){if(k===o){A=!0,o=v,u=h;break}if(k===u){A=!0,u=v,o=h;break}k=k.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:s}function Zr(n){return n=jo(n),n!==null?La(n):null}function La(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var s=La(n);if(s!==null)return s;n=n.sibling}return null}var Jr=e.unstable_scheduleCallback,Da=e.unstable_cancelCallback,Wo=e.unstable_shouldYield,Yc=e.unstable_requestPaint,Zt=e.unstable_now,Kc=e.unstable_getCurrentPriorityLevel,Ia=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,fe=e.unstable_LowPriority,re=e.unstable_IdlePriority,ne=null,Ue=null;function Ye(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(ne,n,void 0,(n.current.flags&128)===128)}catch{}}var De=Math.clz32?Math.clz32:gt,rt=Math.log,ct=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(rt(n)/ct|0)|0}var xt=64,at=4194304;function Nt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,s){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,v=n.pingedLanes,A=o&268435455;if(A!==0){var k=A&~h;k!==0?u=Nt(k):(v&=A,v!==0&&(u=Nt(v)))}else A=o&~h,A!==0?u=Nt(A):v!==0&&(u=Nt(v));if(u===0)return 0;if(s!==0&&s!==u&&(s&h)===0&&(h=u&-u,v=s&-s,h>=v||h===16&&(v&4194240)!==0))return s;if((u&4)!==0&&(u|=o&16),s=n.entangledLanes,s!==0)for(n=n.entanglements,s&=u;0<s;)o=31-De(s),h=1<<o,u|=n[o],s&=~h;return u}function Yt(n,s){switch(n){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-De(v),k=1<<A,H=h[A];H===-1?((k&o)===0||(k&u)!==0)&&(h[A]=Yt(k,s)):H<=s&&(n.expiredLanes|=k),v&=~k}}function on(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xe(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function _n(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function Mt(n,s,o){n.pendingLanes|=s,s!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,s=31-De(s),n[s]=o}function zn(n,s){var o=n.pendingLanes&~s;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=s,n.mutableReadLanes&=s,n.entangledLanes&=s,s=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-De(o),v=1<<h;s[h]=0,u[h]=-1,n[h]=-1,o&=~v}}function Vn(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-De(o),h=1<<u;h&s|n[u]&s&&(n[u]|=s),o&=~h}}var wt=0;function qi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ft,Xt,gi,Vt,xi,Pi=!1,Qr=[],gr=null,xr=null,vr=null,Ua=new Map,Oa=new Map,_r=[],Wv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(n,s){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Ua.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(s.pointerId)}}function Fa(n,s,o,u,h,v){return n===null||n.nativeEvent!==v?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:v,targetContainers:[h]},s!==null&&(s=Za(s),s!==null&&Xt(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,h!==null&&s.indexOf(h)===-1&&s.push(h),n)}function Xv(n,s,o,u,h){switch(s){case"focusin":return gr=Fa(gr,n,s,o,u,h),!0;case"dragenter":return xr=Fa(xr,n,s,o,u,h),!0;case"mouseover":return vr=Fa(vr,n,s,o,u,h),!0;case"pointerover":var v=h.pointerId;return Ua.set(v,Fa(Ua.get(v)||null,n,s,o,u,h)),!0;case"gotpointercapture":return v=h.pointerId,Oa.set(v,Fa(Oa.get(v)||null,n,s,o,u,h)),!0}return!1}function op(n){var s=es(n.target);if(s!==null){var o=In(s);if(o!==null){if(s=o.tag,s===13){if(s=Ns(o),s!==null){n.blockedOn=s,xi(n.priority,function(){gi(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Xo(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=Jc(n.domEventName,n.eventSystemFlags,s[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ie=u,o.target.dispatchEvent(u),Ie=null}else return s=Za(o),s!==null&&Xt(s),n.blockedOn=o,!1;s.shift()}return!0}function lp(n,s,o){Xo(n)&&o.delete(s)}function qv(){Pi=!1,gr!==null&&Xo(gr)&&(gr=null),xr!==null&&Xo(xr)&&(xr=null),vr!==null&&Xo(vr)&&(vr=null),Ua.forEach(lp),Oa.forEach(lp)}function ka(n,s){n.blockedOn===s&&(n.blockedOn=null,Pi||(Pi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,qv)))}function Ba(n){function s(h){return ka(h,n)}if(0<Qr.length){ka(Qr[0],n);for(var o=1;o<Qr.length;o++){var u=Qr[o];u.blockedOn===n&&(u.blockedOn=null)}}for(gr!==null&&ka(gr,n),xr!==null&&ka(xr,n),vr!==null&&ka(vr,n),Ua.forEach(s),Oa.forEach(s),o=0;o<_r.length;o++)u=_r[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<_r.length&&(o=_r[0],o.blockedOn===null);)op(o),o.blockedOn===null&&_r.shift()}var Ps=T.ReactCurrentBatchConfig,qo=!0;function $v(n,s,o,u){var h=wt,v=Ps.transition;Ps.transition=null;try{wt=1,Zc(n,s,o,u)}finally{wt=h,Ps.transition=v}}function Yv(n,s,o,u){var h=wt,v=Ps.transition;Ps.transition=null;try{wt=4,Zc(n,s,o,u)}finally{wt=h,Ps.transition=v}}function Zc(n,s,o,u){if(qo){var h=Jc(n,s,o,u);if(h===null)mu(n,s,u,$o,o),ap(n,u);else if(Xv(h,n,s,o,u))u.stopPropagation();else if(ap(n,u),s&4&&-1<Wv.indexOf(n)){for(;h!==null;){var v=Za(h);if(v!==null&&Ft(v),v=Jc(n,s,o,u),v===null&&mu(n,s,u,$o,o),v===h)break;h=v}h!==null&&u.stopPropagation()}else mu(n,s,u,null,o)}}var $o=null;function Jc(n,s,o,u){if($o=null,n=ot(u),n=es(n),n!==null)if(s=In(n),s===null)n=null;else if(o=s.tag,o===13){if(n=Ns(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null);return $o=n,null}function cp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Kc()){case Ia:return 1;case N:return 4;case $:case fe:return 16;case re:return 536870912;default:return 16}default:return 16}}var yr=null,Qc=null,Yo=null;function up(){if(Yo)return Yo;var n,s=Qc,o=s.length,u,h="value"in yr?yr.value:yr.textContent,v=h.length;for(n=0;n<o&&s[n]===h[n];n++);var A=o-n;for(u=1;u<=A&&s[o-u]===h[v-u];u++);return Yo=h.slice(n,1<u?1-u:void 0)}function Ko(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Zo(){return!0}function dp(){return!1}function Zn(n){function s(o,u,h,v,A){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(o=n[k],this[k]=o?o(v):v[k]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Zo:dp,this.isPropagationStopped=dp,this}return se(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),s}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=Zn(Ls),za=se({},Ls,{view:0,detail:0}),Kv=Zn(za),tu,nu,Va,Jo=se({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ru,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Va&&(Va&&n.type==="mousemove"?(tu=n.screenX-Va.screenX,nu=n.screenY-Va.screenY):nu=tu=0,Va=n),tu)},movementY:function(n){return"movementY"in n?n.movementY:nu}}),fp=Zn(Jo),Zv=se({},Jo,{dataTransfer:0}),Jv=Zn(Zv),Qv=se({},za,{relatedTarget:0}),iu=Zn(Qv),e_=se({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),t_=Zn(e_),n_=se({},Ls,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),i_=Zn(n_),r_=se({},Ls,{data:0}),hp=Zn(r_),s_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l_(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=o_[n])?!!s[n]:!1}function ru(){return l_}var c_=se({},za,{key:function(n){if(n.key){var s=s_[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=Ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?a_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ru,charCode:function(n){return n.type==="keypress"?Ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),u_=Zn(c_),d_=se({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pp=Zn(d_),f_=se({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ru}),h_=Zn(f_),p_=se({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),m_=Zn(p_),g_=se({},Jo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=Zn(g_),v_=[9,13,27,32],su=d&&"CompositionEvent"in window,Ha=null;d&&"documentMode"in document&&(Ha=document.documentMode);var __=d&&"TextEvent"in window&&!Ha,mp=d&&(!su||Ha&&8<Ha&&11>=Ha),gp=" ",xp=!1;function vp(n,s){switch(n){case"keyup":return v_.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _p(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function y_(n,s){switch(n){case"compositionend":return _p(s);case"keypress":return s.which!==32?null:(xp=!0,gp);case"textInput":return n=s.data,n===gp&&xp?null:n;default:return null}}function S_(n,s){if(Ds)return n==="compositionend"||!su&&vp(n,s)?(n=up(),Yo=Qc=yr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return mp&&s.locale!=="ko"?null:s.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yp(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!M_[n.type]:s==="textarea"}function Sp(n,s,o,u){oe(u),s=il(s,"onChange"),0<s.length&&(o=new eu("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var Ga=null,ja=null;function E_(n){Bp(n,0)}function Qo(n){var s=ks(n);if(Ce(s))return n}function w_(n,s){if(n==="change")return s}var Mp=!1;if(d){var au;if(d){var ou="oninput"in document;if(!ou){var Ep=document.createElement("div");Ep.setAttribute("oninput","return;"),ou=typeof Ep.oninput=="function"}au=ou}else au=!1;Mp=au&&(!document.documentMode||9<document.documentMode)}function wp(){Ga&&(Ga.detachEvent("onpropertychange",bp),ja=Ga=null)}function bp(n){if(n.propertyName==="value"&&Qo(ja)){var s=[];Sp(s,ja,n,ot(n)),$e(E_,s)}}function b_(n,s,o){n==="focusin"?(wp(),Ga=s,ja=o,Ga.attachEvent("onpropertychange",bp)):n==="focusout"&&wp()}function T_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Qo(ja)}function A_(n,s){if(n==="click")return Qo(s)}function C_(n,s){if(n==="input"||n==="change")return Qo(s)}function R_(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var vi=typeof Object.is=="function"?Object.is:R_;function Wa(n,s){if(vi(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!f.call(s,h)||!vi(n[h],s[h]))return!1}return!0}function Tp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ap(n,s){var o=Tp(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Tp(o)}}function Cp(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?Cp(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function Rp(){for(var n=window,s=le();s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=le(n.document)}return s}function lu(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}function N_(n){var s=Rp(),o=n.focusedElem,u=n.selectionRange;if(s!==o&&o&&o.ownerDocument&&Cp(o.ownerDocument.documentElement,o)){if(u!==null&&lu(o)){if(s=u.start,n=u.end,n===void 0&&(n=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(n,o.value.length);else if(n=(s=o.ownerDocument||document)&&s.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,v=Math.min(u.start,h);u=u.end===void 0?v:Math.min(u.end,h),!n.extend&&v>u&&(h=u,u=v,v=h),h=Ap(o,v);var A=Ap(o,u);h&&A&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(s=s.createRange(),s.setStart(h.node,h.offset),n.removeAllRanges(),v>u?(n.addRange(s),n.extend(A.node,A.offset)):(s.setEnd(A.node,A.offset),n.addRange(s)))}}for(s=[],n=o;n=n.parentNode;)n.nodeType===1&&s.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<s.length;o++)n=s[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var P_=d&&"documentMode"in document&&11>=document.documentMode,Is=null,cu=null,Xa=null,uu=!1;function Np(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;uu||Is==null||Is!==le(u)||(u=Is,"selectionStart"in u&&lu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Xa&&Wa(Xa,u)||(Xa=u,u=il(cu,"onSelect"),0<u.length&&(s=new eu("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Is)))}function el(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Us={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionend:el("Transition","TransitionEnd")},du={},Pp={};d&&(Pp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function tl(n){if(du[n])return du[n];if(!Us[n])return n;var s=Us[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in Pp)return du[n]=s[o];return n}var Lp=tl("animationend"),Dp=tl("animationiteration"),Ip=tl("animationstart"),Up=tl("transitionend"),Op=new Map,Fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,s){Op.set(n,s),l(s,[n])}for(var fu=0;fu<Fp.length;fu++){var hu=Fp[fu],L_=hu.toLowerCase(),D_=hu[0].toUpperCase()+hu.slice(1);Sr(L_,"on"+D_)}Sr(Lp,"onAnimationEnd"),Sr(Dp,"onAnimationIteration"),Sr(Ip,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Up,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(qa));function kp(n,s,o){var u=n.type||"unknown-event";n.currentTarget=o,Go(u,s,void 0,n),n.currentTarget=null}function Bp(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var v=void 0;if(s)for(var A=u.length-1;0<=A;A--){var k=u[A],H=k.instance,he=k.currentTarget;if(k=k.listener,H!==v&&h.isPropagationStopped())break e;kp(h,k,he),v=H}else for(A=0;A<u.length;A++){if(k=u[A],H=k.instance,he=k.currentTarget,k=k.listener,H!==v&&h.isPropagationStopped())break e;kp(h,k,he),v=H}}}if(Yr)throw n=Kr,Yr=!1,Kr=null,n}function qt(n,s){var o=s[Su];o===void 0&&(o=s[Su]=new Set);var u=n+"__bubble";o.has(u)||(zp(s,n,2,!1),o.add(u))}function pu(n,s,o){var u=0;s&&(u|=4),zp(o,n,u,s)}var nl="_reactListening"+Math.random().toString(36).slice(2);function $a(n){if(!n[nl]){n[nl]=!0,r.forEach(function(o){o!=="selectionchange"&&(I_.has(o)||pu(o,!1,n),pu(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[nl]||(s[nl]=!0,pu("selectionchange",!1,s))}}function zp(n,s,o,u){switch(cp(s)){case 1:var h=$v;break;case 4:h=Yv;break;default:h=Zc}o=h.bind(null,s,o,n),h=void 0,!Dt||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(s,o,{capture:!0,passive:h}):n.addEventListener(s,o,!0):h!==void 0?n.addEventListener(s,o,{passive:h}):n.addEventListener(s,o,!1)}function mu(n,s,o,u,h){var v=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var k=u.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(A===4)for(A=u.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;A=A.return}for(;k!==null;){if(A=es(k),A===null)return;if(H=A.tag,H===5||H===6){u=v=A;continue e}k=k.parentNode}}u=u.return}$e(function(){var he=v,Te=ot(o),Re=[];e:{var we=Op.get(n);if(we!==void 0){var qe=eu,tt=n;switch(n){case"keypress":if(Ko(o)===0)break e;case"keydown":case"keyup":qe=u_;break;case"focusin":tt="focus",qe=iu;break;case"focusout":tt="blur",qe=iu;break;case"beforeblur":case"afterblur":qe=iu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=fp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=Jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=h_;break;case Lp:case Dp:case Ip:qe=t_;break;case Up:qe=m_;break;case"scroll":qe=Kv;break;case"wheel":qe=x_;break;case"copy":case"cut":case"paste":qe=i_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=pp}var st=(s&4)!==0,sn=!st&&n==="scroll",ee=st?we!==null?we+"Capture":null:we;st=[];for(var j=he,ae;j!==null;){ae=j;var Pe=ae.stateNode;if(ae.tag===5&&Pe!==null&&(ae=Pe,ee!==null&&(Pe=Bt(j,ee),Pe!=null&&st.push(Ya(j,Pe,ae)))),sn)break;j=j.return}0<st.length&&(we=new qe(we,tt,null,o,Te),Re.push({event:we,listeners:st}))}}if((s&7)===0){e:{if(we=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",we&&o!==Ie&&(tt=o.relatedTarget||o.fromElement)&&(es(tt)||tt[$i]))break e;if((qe||we)&&(we=Te.window===Te?Te:(we=Te.ownerDocument)?we.defaultView||we.parentWindow:window,qe?(tt=o.relatedTarget||o.toElement,qe=he,tt=tt?es(tt):null,tt!==null&&(sn=In(tt),tt!==sn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(qe=null,tt=he),qe!==tt)){if(st=fp,Pe="onMouseLeave",ee="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(st=pp,Pe="onPointerLeave",ee="onPointerEnter",j="pointer"),sn=qe==null?we:ks(qe),ae=tt==null?we:ks(tt),we=new st(Pe,j+"leave",qe,o,Te),we.target=sn,we.relatedTarget=ae,Pe=null,es(Te)===he&&(st=new st(ee,j+"enter",tt,o,Te),st.target=ae,st.relatedTarget=sn,Pe=st),sn=Pe,qe&&tt)t:{for(st=qe,ee=tt,j=0,ae=st;ae;ae=Os(ae))j++;for(ae=0,Pe=ee;Pe;Pe=Os(Pe))ae++;for(;0<j-ae;)st=Os(st),j--;for(;0<ae-j;)ee=Os(ee),ae--;for(;j--;){if(st===ee||ee!==null&&st===ee.alternate)break t;st=Os(st),ee=Os(ee)}st=null}else st=null;qe!==null&&Vp(Re,we,qe,st,!1),tt!==null&&sn!==null&&Vp(Re,sn,tt,st,!0)}}e:{if(we=he?ks(he):window,qe=we.nodeName&&we.nodeName.toLowerCase(),qe==="select"||qe==="input"&&we.type==="file")var lt=w_;else if(yp(we))if(Mp)lt=C_;else{lt=T_;var dt=b_}else(qe=we.nodeName)&&qe.toLowerCase()==="input"&&(we.type==="checkbox"||we.type==="radio")&&(lt=A_);if(lt&&(lt=lt(n,he))){Sp(Re,lt,o,Te);break e}dt&&dt(n,we,he),n==="focusout"&&(dt=we._wrapperState)&&dt.controlled&&we.type==="number"&&yt(we,"number",we.value)}switch(dt=he?ks(he):window,n){case"focusin":(yp(dt)||dt.contentEditable==="true")&&(Is=dt,cu=he,Xa=null);break;case"focusout":Xa=cu=Is=null;break;case"mousedown":uu=!0;break;case"contextmenu":case"mouseup":case"dragend":uu=!1,Np(Re,o,Te);break;case"selectionchange":if(P_)break;case"keydown":case"keyup":Np(Re,o,Te)}var ft;if(su)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Ds?vp(n,o)&&(mt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(mp&&o.locale!=="ko"&&(Ds||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Ds&&(ft=up()):(yr=Te,Qc="value"in yr?yr.value:yr.textContent,Ds=!0)),dt=il(he,mt),0<dt.length&&(mt=new hp(mt,n,null,o,Te),Re.push({event:mt,listeners:dt}),ft?mt.data=ft:(ft=_p(o),ft!==null&&(mt.data=ft)))),(ft=__?y_(n,o):S_(n,o))&&(he=il(he,"onBeforeInput"),0<he.length&&(Te=new hp("onBeforeInput","beforeinput",null,o,Te),Re.push({event:Te,listeners:he}),Te.data=ft))}Bp(Re,s)})}function Ya(n,s,o){return{instance:n,listener:s,currentTarget:o}}function il(n,s){for(var o=s+"Capture",u=[];n!==null;){var h=n,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=Bt(n,o),v!=null&&u.unshift(Ya(n,v,h)),v=Bt(n,s),v!=null&&u.push(Ya(n,v,h))),n=n.return}return u}function Os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vp(n,s,o,u,h){for(var v=s._reactName,A=[];o!==null&&o!==u;){var k=o,H=k.alternate,he=k.stateNode;if(H!==null&&H===u)break;k.tag===5&&he!==null&&(k=he,h?(H=Bt(o,v),H!=null&&A.unshift(Ya(o,H,k))):h||(H=Bt(o,v),H!=null&&A.push(Ya(o,H,k)))),o=o.return}A.length!==0&&n.push({event:s,listeners:A})}var U_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function Hp(n){return(typeof n=="string"?n:""+n).replace(U_,`
`).replace(O_,"")}function rl(n,s,o){if(s=Hp(s),Hp(n)!==s&&o)throw Error(t(425))}function sl(){}var gu=null,xu=null;function vu(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var _u=typeof setTimeout=="function"?setTimeout:void 0,F_=typeof clearTimeout=="function"?clearTimeout:void 0,Gp=typeof Promise=="function"?Promise:void 0,k_=typeof queueMicrotask=="function"?queueMicrotask:typeof Gp<"u"?function(n){return Gp.resolve(null).then(n).catch(B_)}:_u;function B_(n){setTimeout(function(){throw n})}function yu(n,s){var o=s,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),Ba(s);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);Ba(s)}function Mr(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return n}function jp(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return n;s--}else o==="/$"&&s++}n=n.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),Li="__reactFiber$"+Fs,Ka="__reactProps$"+Fs,$i="__reactContainer$"+Fs,Su="__reactEvents$"+Fs,z_="__reactListeners$"+Fs,V_="__reactHandles$"+Fs;function es(n){var s=n[Li];if(s)return s;for(var o=n.parentNode;o;){if(s=o[$i]||o[Li]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=jp(n);n!==null;){if(o=n[Li])return o;n=jp(n)}return s}n=o,o=n.parentNode}return null}function Za(n){return n=n[Li]||n[$i],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function al(n){return n[Ka]||null}var Mu=[],Bs=-1;function Er(n){return{current:n}}function $t(n){0>Bs||(n.current=Mu[Bs],Mu[Bs]=null,Bs--)}function Wt(n,s){Bs++,Mu[Bs]=n.current,n.current=s}var wr={},wn=Er(wr),Hn=Er(!1),ts=wr;function zs(n,s){var o=n.type.contextTypes;if(!o)return wr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===s)return u.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in o)h[v]=s[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=s,n.__reactInternalMemoizedMaskedChildContext=h),h}function Gn(n){return n=n.childContextTypes,n!=null}function ol(){$t(Hn),$t(wn)}function Wp(n,s,o){if(wn.current!==wr)throw Error(t(168));Wt(wn,s),Wt(Hn,o)}function Xp(n,s,o){var u=n.stateNode;if(s=s.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in s))throw Error(t(108,_e(n)||"Unknown",h));return se({},o,u)}function ll(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,ts=wn.current,Wt(wn,n),Wt(Hn,Hn.current),!0}function qp(n,s,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Xp(n,s,ts),u.__reactInternalMemoizedMergedChildContext=n,$t(Hn),$t(wn),Wt(wn,n)):$t(Hn),Wt(Hn,o)}var Yi=null,cl=!1,Eu=!1;function $p(n){Yi===null?Yi=[n]:Yi.push(n)}function H_(n){cl=!0,$p(n)}function br(){if(!Eu&&Yi!==null){Eu=!0;var n=0,s=wt;try{var o=Yi;for(wt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Yi=null,cl=!1}catch(h){throw Yi!==null&&(Yi=Yi.slice(n+1)),Jr(Ia,br),h}finally{wt=s,Eu=!1}}return null}var Vs=[],Hs=0,ul=null,dl=0,ai=[],oi=0,ns=null,Ki=1,Zi="";function is(n,s){Vs[Hs++]=dl,Vs[Hs++]=ul,ul=n,dl=s}function Yp(n,s,o){ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=ns,ns=n;var u=Ki;n=Zi;var h=32-De(u)-1;u&=~(1<<h),o+=1;var v=32-De(s)+h;if(30<v){var A=h-h%5;v=(u&(1<<A)-1).toString(32),u>>=A,h-=A,Ki=1<<32-De(s)+h|o<<h|u,Zi=v+n}else Ki=1<<v|o<<h|u,Zi=n}function wu(n){n.return!==null&&(is(n,1),Yp(n,1,0))}function bu(n){for(;n===ul;)ul=Vs[--Hs],Vs[Hs]=null,dl=Vs[--Hs],Vs[Hs]=null;for(;n===ns;)ns=ai[--oi],ai[oi]=null,Zi=ai[--oi],ai[oi]=null,Ki=ai[--oi],ai[oi]=null}var Jn=null,Qn=null,Kt=!1,_i=null;function Kp(n,s){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=s,o.return=n,s=n.deletions,s===null?(n.deletions=[o],n.flags|=16):s.push(o)}function Zp(n,s){switch(n.tag){case 5:var o=n.type;return s=s.nodeType!==1||o.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(n.stateNode=s,Jn=n,Qn=Mr(s.firstChild),!0):!1;case 6:return s=n.pendingProps===""||s.nodeType!==3?null:s,s!==null?(n.stateNode=s,Jn=n,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(o=ns!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:s,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=s,o.return=n,n.child=o,Jn=n,Qn=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(Kt){var s=Qn;if(s){var o=s;if(!Zp(n,s)){if(Tu(n))throw Error(t(418));s=Mr(o.nextSibling);var u=Jn;s&&Zp(n,s)?Kp(u,o):(n.flags=n.flags&-4097|2,Kt=!1,Jn=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Jn=n}}}function Jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function fl(n){if(n!==Jn)return!1;if(!Kt)return Jp(n),Kt=!0,!1;var s;if((s=n.tag!==3)&&!(s=n.tag!==5)&&(s=n.type,s=s!=="head"&&s!=="body"&&!vu(n.type,n.memoizedProps)),s&&(s=Qn)){if(Tu(n))throw Qp(),Error(t(418));for(;s;)Kp(n,s),s=Mr(s.nextSibling)}if(Jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(s===0){Qn=Mr(n.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++}n=n.nextSibling}Qn=null}}else Qn=Jn?Mr(n.stateNode.nextSibling):null;return!0}function Qp(){for(var n=Qn;n;)n=Mr(n.nextSibling)}function Gs(){Qn=Jn=null,Kt=!1}function Cu(n){_i===null?_i=[n]:_i.push(n)}var G_=T.ReactCurrentBatchConfig;function Ja(n,s,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,v=""+n;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(A){var k=h.refs;A===null?delete k[v]:k[v]=A},s._stringRef=v,s)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function hl(n,s){throw n=Object.prototype.toString.call(s),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n))}function em(n){var s=n._init;return s(n._payload)}function tm(n){function s(ee,j){if(n){var ae=ee.deletions;ae===null?(ee.deletions=[j],ee.flags|=16):ae.push(j)}}function o(ee,j){if(!n)return null;for(;j!==null;)s(ee,j),j=j.sibling;return null}function u(ee,j){for(ee=new Map;j!==null;)j.key!==null?ee.set(j.key,j):ee.set(j.index,j),j=j.sibling;return ee}function h(ee,j){return ee=Dr(ee,j),ee.index=0,ee.sibling=null,ee}function v(ee,j,ae){return ee.index=ae,n?(ae=ee.alternate,ae!==null?(ae=ae.index,ae<j?(ee.flags|=2,j):ae):(ee.flags|=2,j)):(ee.flags|=1048576,j)}function A(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,j,ae,Pe){return j===null||j.tag!==6?(j=_d(ae,ee.mode,Pe),j.return=ee,j):(j=h(j,ae),j.return=ee,j)}function H(ee,j,ae,Pe){var lt=ae.type;return lt===F?Te(ee,j,ae.props.children,Pe,ae.key):j!==null&&(j.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===pe&&em(lt)===j.type)?(Pe=h(j,ae.props),Pe.ref=Ja(ee,j,ae),Pe.return=ee,Pe):(Pe=Fl(ae.type,ae.key,ae.props,null,ee.mode,Pe),Pe.ref=Ja(ee,j,ae),Pe.return=ee,Pe)}function he(ee,j,ae,Pe){return j===null||j.tag!==4||j.stateNode.containerInfo!==ae.containerInfo||j.stateNode.implementation!==ae.implementation?(j=yd(ae,ee.mode,Pe),j.return=ee,j):(j=h(j,ae.children||[]),j.return=ee,j)}function Te(ee,j,ae,Pe,lt){return j===null||j.tag!==7?(j=ds(ae,ee.mode,Pe,lt),j.return=ee,j):(j=h(j,ae),j.return=ee,j)}function Re(ee,j,ae){if(typeof j=="string"&&j!==""||typeof j=="number")return j=_d(""+j,ee.mode,ae),j.return=ee,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case D:return ae=Fl(j.type,j.key,j.props,null,ee.mode,ae),ae.ref=Ja(ee,null,j),ae.return=ee,ae;case P:return j=yd(j,ee.mode,ae),j.return=ee,j;case pe:var Pe=j._init;return Re(ee,Pe(j._payload),ae)}if(kt(j)||ce(j))return j=ds(j,ee.mode,ae,null),j.return=ee,j;hl(ee,j)}return null}function we(ee,j,ae,Pe){var lt=j!==null?j.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return lt!==null?null:k(ee,j,""+ae,Pe);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:return ae.key===lt?H(ee,j,ae,Pe):null;case P:return ae.key===lt?he(ee,j,ae,Pe):null;case pe:return lt=ae._init,we(ee,j,lt(ae._payload),Pe)}if(kt(ae)||ce(ae))return lt!==null?null:Te(ee,j,ae,Pe,null);hl(ee,ae)}return null}function qe(ee,j,ae,Pe,lt){if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return ee=ee.get(ae)||null,k(j,ee,""+Pe,lt);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case D:return ee=ee.get(Pe.key===null?ae:Pe.key)||null,H(j,ee,Pe,lt);case P:return ee=ee.get(Pe.key===null?ae:Pe.key)||null,he(j,ee,Pe,lt);case pe:var dt=Pe._init;return qe(ee,j,ae,dt(Pe._payload),lt)}if(kt(Pe)||ce(Pe))return ee=ee.get(ae)||null,Te(j,ee,Pe,lt,null);hl(j,Pe)}return null}function tt(ee,j,ae,Pe){for(var lt=null,dt=null,ft=j,mt=j=0,xn=null;ft!==null&&mt<ae.length;mt++){ft.index>mt?(xn=ft,ft=null):xn=ft.sibling;var Ot=we(ee,ft,ae[mt],Pe);if(Ot===null){ft===null&&(ft=xn);break}n&&ft&&Ot.alternate===null&&s(ee,ft),j=v(Ot,j,mt),dt===null?lt=Ot:dt.sibling=Ot,dt=Ot,ft=xn}if(mt===ae.length)return o(ee,ft),Kt&&is(ee,mt),lt;if(ft===null){for(;mt<ae.length;mt++)ft=Re(ee,ae[mt],Pe),ft!==null&&(j=v(ft,j,mt),dt===null?lt=ft:dt.sibling=ft,dt=ft);return Kt&&is(ee,mt),lt}for(ft=u(ee,ft);mt<ae.length;mt++)xn=qe(ft,ee,mt,ae[mt],Pe),xn!==null&&(n&&xn.alternate!==null&&ft.delete(xn.key===null?mt:xn.key),j=v(xn,j,mt),dt===null?lt=xn:dt.sibling=xn,dt=xn);return n&&ft.forEach(function(Ir){return s(ee,Ir)}),Kt&&is(ee,mt),lt}function st(ee,j,ae,Pe){var lt=ce(ae);if(typeof lt!="function")throw Error(t(150));if(ae=lt.call(ae),ae==null)throw Error(t(151));for(var dt=lt=null,ft=j,mt=j=0,xn=null,Ot=ae.next();ft!==null&&!Ot.done;mt++,Ot=ae.next()){ft.index>mt?(xn=ft,ft=null):xn=ft.sibling;var Ir=we(ee,ft,Ot.value,Pe);if(Ir===null){ft===null&&(ft=xn);break}n&&ft&&Ir.alternate===null&&s(ee,ft),j=v(Ir,j,mt),dt===null?lt=Ir:dt.sibling=Ir,dt=Ir,ft=xn}if(Ot.done)return o(ee,ft),Kt&&is(ee,mt),lt;if(ft===null){for(;!Ot.done;mt++,Ot=ae.next())Ot=Re(ee,Ot.value,Pe),Ot!==null&&(j=v(Ot,j,mt),dt===null?lt=Ot:dt.sibling=Ot,dt=Ot);return Kt&&is(ee,mt),lt}for(ft=u(ee,ft);!Ot.done;mt++,Ot=ae.next())Ot=qe(ft,ee,mt,Ot.value,Pe),Ot!==null&&(n&&Ot.alternate!==null&&ft.delete(Ot.key===null?mt:Ot.key),j=v(Ot,j,mt),dt===null?lt=Ot:dt.sibling=Ot,dt=Ot);return n&&ft.forEach(function(My){return s(ee,My)}),Kt&&is(ee,mt),lt}function sn(ee,j,ae,Pe){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case D:e:{for(var lt=ae.key,dt=j;dt!==null;){if(dt.key===lt){if(lt=ae.type,lt===F){if(dt.tag===7){o(ee,dt.sibling),j=h(dt,ae.props.children),j.return=ee,ee=j;break e}}else if(dt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===pe&&em(lt)===dt.type){o(ee,dt.sibling),j=h(dt,ae.props),j.ref=Ja(ee,dt,ae),j.return=ee,ee=j;break e}o(ee,dt);break}else s(ee,dt);dt=dt.sibling}ae.type===F?(j=ds(ae.props.children,ee.mode,Pe,ae.key),j.return=ee,ee=j):(Pe=Fl(ae.type,ae.key,ae.props,null,ee.mode,Pe),Pe.ref=Ja(ee,j,ae),Pe.return=ee,ee=Pe)}return A(ee);case P:e:{for(dt=ae.key;j!==null;){if(j.key===dt)if(j.tag===4&&j.stateNode.containerInfo===ae.containerInfo&&j.stateNode.implementation===ae.implementation){o(ee,j.sibling),j=h(j,ae.children||[]),j.return=ee,ee=j;break e}else{o(ee,j);break}else s(ee,j);j=j.sibling}j=yd(ae,ee.mode,Pe),j.return=ee,ee=j}return A(ee);case pe:return dt=ae._init,sn(ee,j,dt(ae._payload),Pe)}if(kt(ae))return tt(ee,j,ae,Pe);if(ce(ae))return st(ee,j,ae,Pe);hl(ee,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,j!==null&&j.tag===6?(o(ee,j.sibling),j=h(j,ae),j.return=ee,ee=j):(o(ee,j),j=_d(ae,ee.mode,Pe),j.return=ee,ee=j),A(ee)):o(ee,j)}return sn}var js=tm(!0),nm=tm(!1),pl=Er(null),ml=null,Ws=null,Ru=null;function Nu(){Ru=Ws=ml=null}function Pu(n){var s=pl.current;$t(pl),n._currentValue=s}function Lu(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function Xs(n,s){ml=n,Ru=Ws=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&s)!==0&&(jn=!0),n.firstContext=null)}function li(n){var s=n._currentValue;if(Ru!==n)if(n={context:n,memoizedValue:s,next:null},Ws===null){if(ml===null)throw Error(t(308));Ws=n,ml.dependencies={lanes:0,firstContext:n}}else Ws=Ws.next=n;return s}var rs=null;function Du(n){rs===null?rs=[n]:rs.push(n)}function im(n,s,o,u){var h=s.interleaved;return h===null?(o.next=o,Du(s)):(o.next=h.next,h.next=o),s.interleaved=o,Ji(n,u)}function Ji(n,s){n.lanes|=s;var o=n.alternate;for(o!==null&&(o.lanes|=s),o=n,n=n.return;n!==null;)n.childLanes|=s,o=n.alternate,o!==null&&(o.childLanes|=s),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Tr=!1;function Iu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,s){return{eventTime:n,lane:s,tag:0,payload:null,callback:null,next:null}}function Ar(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(It&2)!==0){var h=u.pending;return h===null?s.next=s:(s.next=h.next,h.next=s),u.pending=s,Ji(n,o)}return h=u.interleaved,h===null?(s.next=s,Du(u)):(s.next=h.next,h.next=s),u.interleaved=s,Ji(n,o)}function gl(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194240)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Vn(n,o)}}function sm(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,v=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};v===null?h=v=A:v=v.next=A,o=o.next}while(o!==null);v===null?h=v=s:v=v.next=s}else h=v=s;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}function xl(n,s,o,u){var h=n.updateQueue;Tr=!1;var v=h.firstBaseUpdate,A=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var H=k,he=H.next;H.next=null,A===null?v=he:A.next=he,A=H;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,k=Te.lastBaseUpdate,k!==A&&(k===null?Te.firstBaseUpdate=he:k.next=he,Te.lastBaseUpdate=H))}if(v!==null){var Re=h.baseState;A=0,Te=he=H=null,k=v;do{var we=k.lane,qe=k.eventTime;if((u&we)===we){Te!==null&&(Te=Te.next={eventTime:qe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var tt=n,st=k;switch(we=s,qe=o,st.tag){case 1:if(tt=st.payload,typeof tt=="function"){Re=tt.call(qe,Re,we);break e}Re=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=st.payload,we=typeof tt=="function"?tt.call(qe,Re,we):tt,we==null)break e;Re=se({},Re,we);break e;case 2:Tr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,we=h.effects,we===null?h.effects=[k]:we.push(k))}else qe={eventTime:qe,lane:we,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Te===null?(he=Te=qe,H=Re):Te=Te.next=qe,A|=we;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;we=k,k=we.next,we.next=null,h.lastBaseUpdate=we,h.shared.pending=null}}while(!0);if(Te===null&&(H=Re),h.baseState=H,h.firstBaseUpdate=he,h.lastBaseUpdate=Te,s=h.shared.interleaved,s!==null){h=s;do A|=h.lane,h=h.next;while(h!==s)}else v===null&&(h.shared.lanes=0);os|=A,n.lanes=A,n.memoizedState=Re}}function am(n,s,o){if(n=s.effects,s.effects=null,n!==null)for(s=0;s<n.length;s++){var u=n[s],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Qa={},Di=Er(Qa),eo=Er(Qa),to=Er(Qa);function ss(n){if(n===Qa)throw Error(t(174));return n}function Uu(n,s){switch(Wt(to,s),Wt(eo,n),Wt(Di,Qa),n=s.nodeType,n){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:E(null,"");break;default:n=n===8?s.parentNode:s,s=n.namespaceURI||null,n=n.tagName,s=E(s,n)}$t(Di),Wt(Di,s)}function qs(){$t(Di),$t(eo),$t(to)}function om(n){ss(to.current);var s=ss(Di.current),o=E(s,n.type);s!==o&&(Wt(eo,n),Wt(Di,o))}function Ou(n){eo.current===n&&($t(Di),$t(eo))}var Jt=Er(0);function vl(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Fu=[];function ku(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var _l=T.ReactCurrentDispatcher,Bu=T.ReactCurrentBatchConfig,as=0,Qt=null,dn=null,mn=null,yl=!1,no=!1,io=0,j_=0;function bn(){throw Error(t(321))}function zu(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!vi(n[o],s[o]))return!1;return!0}function Vu(n,s,o,u,h,v){if(as=v,Qt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,_l.current=n===null||n.memoizedState===null?$_:Y_,n=o(u,h),no){v=0;do{if(no=!1,io=0,25<=v)throw Error(t(301));v+=1,mn=dn=null,s.updateQueue=null,_l.current=K_,n=o(u,h)}while(no)}if(_l.current=El,s=dn!==null&&dn.next!==null,as=0,mn=dn=Qt=null,yl=!1,s)throw Error(t(300));return n}function Hu(){var n=io!==0;return io=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Qt.memoizedState=mn=n:mn=mn.next=n,mn}function ci(){if(dn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var s=mn===null?Qt.memoizedState:mn.next;if(s!==null)mn=s,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},mn===null?Qt.memoizedState=mn=n:mn=mn.next=n}return mn}function ro(n,s){return typeof s=="function"?s(n):s}function Gu(n){var s=ci(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=dn,h=u.baseQueue,v=o.pending;if(v!==null){if(h!==null){var A=h.next;h.next=v.next,v.next=A}u.baseQueue=h=v,o.pending=null}if(h!==null){v=h.next,u=u.baseState;var k=A=null,H=null,he=v;do{var Te=he.lane;if((as&Te)===Te)H!==null&&(H=H.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var Re={lane:Te,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};H===null?(k=H=Re,A=u):H=H.next=Re,Qt.lanes|=Te,os|=Te}he=he.next}while(he!==null&&he!==v);H===null?A=u:H.next=k,vi(u,s.memoizedState)||(jn=!0),s.memoizedState=u,s.baseState=A,s.baseQueue=H,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do v=h.lane,Qt.lanes|=v,os|=v,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[s.memoizedState,o.dispatch]}function ju(n){var s=ci(),o=s.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,v=s.memoizedState;if(h!==null){o.pending=null;var A=h=h.next;do v=n(v,A.action),A=A.next;while(A!==h);vi(v,s.memoizedState)||(jn=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),o.lastRenderedState=v}return[v,u]}function lm(){}function cm(n,s){var o=Qt,u=ci(),h=s(),v=!vi(u.memoizedState,h);if(v&&(u.memoizedState=h,jn=!0),u=u.queue,Wu(fm.bind(null,o,u,n),[n]),u.getSnapshot!==s||v||mn!==null&&mn.memoizedState.tag&1){if(o.flags|=2048,so(9,dm.bind(null,o,u,h,s),void 0,null),gn===null)throw Error(t(349));(as&30)!==0||um(o,s,h)}return h}function um(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function dm(n,s,o,u){s.value=o,s.getSnapshot=u,hm(s)&&pm(n)}function fm(n,s,o){return o(function(){hm(s)&&pm(n)})}function hm(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!vi(n,o)}catch{return!0}}function pm(n){var s=Ji(n,1);s!==null&&Ei(s,n,1,-1)}function mm(n){var s=Ii();return typeof n=="function"&&(n=n()),s.memoizedState=s.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:n},s.queue=n,n=n.dispatch=q_.bind(null,Qt,n),[s.memoizedState,n]}function so(n,s,o,u){return n={tag:n,create:s,destroy:o,deps:u,next:null},s=Qt.updateQueue,s===null?(s={lastEffect:null,stores:null},Qt.updateQueue=s,s.lastEffect=n.next=n):(o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n)),n}function gm(){return ci().memoizedState}function Sl(n,s,o,u){var h=Ii();Qt.flags|=n,h.memoizedState=so(1|s,o,void 0,u===void 0?null:u)}function Ml(n,s,o,u){var h=ci();u=u===void 0?null:u;var v=void 0;if(dn!==null){var A=dn.memoizedState;if(v=A.destroy,u!==null&&zu(u,A.deps)){h.memoizedState=so(s,o,v,u);return}}Qt.flags|=n,h.memoizedState=so(1|s,o,v,u)}function xm(n,s){return Sl(8390656,8,n,s)}function Wu(n,s){return Ml(2048,8,n,s)}function vm(n,s){return Ml(4,2,n,s)}function _m(n,s){return Ml(4,4,n,s)}function ym(n,s){if(typeof s=="function")return n=n(),s(n),function(){s(null)};if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function Sm(n,s,o){return o=o!=null?o.concat([n]):null,Ml(4,4,ym.bind(null,s,n),o)}function Xu(){}function Mm(n,s){var o=ci();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function Em(n,s){var o=ci();s=s===void 0?null:s;var u=o.memoizedState;return u!==null&&s!==null&&zu(s,u[1])?u[0]:(n=n(),o.memoizedState=[n,s],n)}function wm(n,s,o){return(as&21)===0?(n.baseState&&(n.baseState=!1,jn=!0),n.memoizedState=o):(vi(o,s)||(o=Xe(),Qt.lanes|=o,os|=o,n.baseState=!0),s)}function W_(n,s){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var u=Bu.transition;Bu.transition={};try{n(!1),s()}finally{wt=o,Bu.transition=u}}function bm(){return ci().memoizedState}function X_(n,s,o){var u=Pr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Tm(n))Am(s,o);else if(o=im(n,s,o,u),o!==null){var h=On();Ei(o,n,u,h),Cm(o,s,u)}}function q_(n,s,o){var u=Pr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Tm(n))Am(s,h);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var A=s.lastRenderedState,k=v(A,o);if(h.hasEagerState=!0,h.eagerState=k,vi(k,A)){var H=s.interleaved;H===null?(h.next=h,Du(s)):(h.next=H.next,H.next=h),s.interleaved=h;return}}catch{}finally{}o=im(n,s,h,u),o!==null&&(h=On(),Ei(o,n,u,h),Cm(o,s,u))}}function Tm(n){var s=n.alternate;return n===Qt||s!==null&&s===Qt}function Am(n,s){no=yl=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function Cm(n,s,o){if((o&4194240)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,Vn(n,o)}}var El={readContext:li,useCallback:bn,useContext:bn,useEffect:bn,useImperativeHandle:bn,useInsertionEffect:bn,useLayoutEffect:bn,useMemo:bn,useReducer:bn,useRef:bn,useState:bn,useDebugValue:bn,useDeferredValue:bn,useTransition:bn,useMutableSource:bn,useSyncExternalStore:bn,useId:bn,unstable_isNewReconciler:!1},$_={readContext:li,useCallback:function(n,s){return Ii().memoizedState=[n,s===void 0?null:s],n},useContext:li,useEffect:xm,useImperativeHandle:function(n,s,o){return o=o!=null?o.concat([n]):null,Sl(4194308,4,ym.bind(null,s,n),o)},useLayoutEffect:function(n,s){return Sl(4194308,4,n,s)},useInsertionEffect:function(n,s){return Sl(4,2,n,s)},useMemo:function(n,s){var o=Ii();return s=s===void 0?null:s,n=n(),o.memoizedState=[n,s],n},useReducer:function(n,s,o){var u=Ii();return s=o!==void 0?o(s):s,u.memoizedState=u.baseState=s,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:s},u.queue=n,n=n.dispatch=X_.bind(null,Qt,n),[u.memoizedState,n]},useRef:function(n){var s=Ii();return n={current:n},s.memoizedState=n},useState:mm,useDebugValue:Xu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=mm(!1),s=n[0];return n=W_.bind(null,n[1]),Ii().memoizedState=n,[s,n]},useMutableSource:function(){},useSyncExternalStore:function(n,s,o){var u=Qt,h=Ii();if(Kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=s(),gn===null)throw Error(t(349));(as&30)!==0||um(u,s,o)}h.memoizedState=o;var v={value:o,getSnapshot:s};return h.queue=v,xm(fm.bind(null,u,v,n),[n]),u.flags|=2048,so(9,dm.bind(null,u,v,o,s),void 0,null),o},useId:function(){var n=Ii(),s=gn.identifierPrefix;if(Kt){var o=Zi,u=Ki;o=(u&~(1<<32-De(u)-1)).toString(32)+o,s=":"+s+"R"+o,o=io++,0<o&&(s+="H"+o.toString(32)),s+=":"}else o=j_++,s=":"+s+"r"+o.toString(32)+":";return n.memoizedState=s},unstable_isNewReconciler:!1},Y_={readContext:li,useCallback:Mm,useContext:li,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:Em,useReducer:Gu,useRef:gm,useState:function(){return Gu(ro)},useDebugValue:Xu,useDeferredValue:function(n){var s=ci();return wm(s,dn.memoizedState,n)},useTransition:function(){var n=Gu(ro)[0],s=ci().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:bm,unstable_isNewReconciler:!1},K_={readContext:li,useCallback:Mm,useContext:li,useEffect:Wu,useImperativeHandle:Sm,useInsertionEffect:vm,useLayoutEffect:_m,useMemo:Em,useReducer:ju,useRef:gm,useState:function(){return ju(ro)},useDebugValue:Xu,useDeferredValue:function(n){var s=ci();return dn===null?s.memoizedState=n:wm(s,dn.memoizedState,n)},useTransition:function(){var n=ju(ro)[0],s=ci().memoizedState;return[n,s]},useMutableSource:lm,useSyncExternalStore:cm,useId:bm,unstable_isNewReconciler:!1};function yi(n,s){if(n&&n.defaultProps){s=se({},s),n=n.defaultProps;for(var o in n)s[o]===void 0&&(s[o]=n[o]);return s}return s}function qu(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:se({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var wl={isMounted:function(n){return(n=n._reactInternals)?In(n)===n:!1},enqueueSetState:function(n,s,o){n=n._reactInternals;var u=On(),h=Pr(n),v=Qi(u,h);v.payload=s,o!=null&&(v.callback=o),s=Ar(n,v,h),s!==null&&(Ei(s,n,h,u),gl(s,n,h))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=On(),h=Pr(n),v=Qi(u,h);v.tag=1,v.payload=s,o!=null&&(v.callback=o),s=Ar(n,v,h),s!==null&&(Ei(s,n,h,u),gl(s,n,h))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=On(),u=Pr(n),h=Qi(o,u);h.tag=2,s!=null&&(h.callback=s),s=Ar(n,h,u),s!==null&&(Ei(s,n,u,o),gl(s,n,u))}};function Rm(n,s,o,u,h,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,A):s.prototype&&s.prototype.isPureReactComponent?!Wa(o,u)||!Wa(h,v):!0}function Nm(n,s,o){var u=!1,h=wr,v=s.contextType;return typeof v=="object"&&v!==null?v=li(v):(h=Gn(s)?ts:wn.current,u=s.contextTypes,v=(u=u!=null)?zs(n,h):wr),s=new s(o,v),n.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wl,n.stateNode=s,s._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=v),s}function Pm(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&wl.enqueueReplaceState(s,s.state,null)}function $u(n,s,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},Iu(n);var v=s.contextType;typeof v=="object"&&v!==null?h.context=li(v):(v=Gn(s)?ts:wn.current,h.context=zs(n,v)),h.state=n.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(qu(n,s,v,o),h.state=n.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(s=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),s!==h.state&&wl.enqueueReplaceState(h,h.state,null),xl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function $s(n,s){try{var o="",u=s;do o+=We(u),u=u.return;while(u);var h=o}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:s,stack:h,digest:null}}function Yu(n,s,o){return{value:n,source:null,stack:o??null,digest:s??null}}function Ku(n,s){try{console.error(s.value)}catch(o){setTimeout(function(){throw o})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function Lm(n,s,o){o=Qi(-1,o),o.tag=3,o.payload={element:null};var u=s.value;return o.callback=function(){Pl||(Pl=!0,dd=u),Ku(n,s)},o}function Dm(n,s,o){o=Qi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=s.value;o.payload=function(){return u(h)},o.callback=function(){Ku(n,s)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(o.callback=function(){Ku(n,s),typeof u!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})}),o}function Im(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new Z_;var h=new Set;u.set(s,h)}else h=u.get(s),h===void 0&&(h=new Set,u.set(s,h));h.has(o)||(h.add(o),n=dy.bind(null,n,s,o),s.then(n,n))}function Um(n){do{var s;if((s=n.tag===13)&&(s=n.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return n;n=n.return}while(n!==null);return null}function Om(n,s,o,u,h){return(n.mode&1)===0?(n===s?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(s=Qi(-1,1),s.tag=2,Ar(o,s,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var J_=T.ReactCurrentOwner,jn=!1;function Un(n,s,o,u){s.child=n===null?nm(s,null,o,u):js(s,n.child,o,u)}function Fm(n,s,o,u,h){o=o.render;var v=s.ref;return Xs(s,h),u=Vu(n,s,o,u,v,h),o=Hu(),n!==null&&!jn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,er(n,s,h)):(Kt&&o&&wu(s),s.flags|=1,Un(n,s,u,h),s.child)}function km(n,s,o,u,h){if(n===null){var v=o.type;return typeof v=="function"&&!vd(v)&&v.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(s.tag=15,s.type=v,Bm(n,s,v,u,h)):(n=Fl(o.type,null,u,s,s.mode,h),n.ref=s.ref,n.return=s,s.child=n)}if(v=n.child,(n.lanes&h)===0){var A=v.memoizedProps;if(o=o.compare,o=o!==null?o:Wa,o(A,u)&&n.ref===s.ref)return er(n,s,h)}return s.flags|=1,n=Dr(v,u),n.ref=s.ref,n.return=s,s.child=n}function Bm(n,s,o,u,h){if(n!==null){var v=n.memoizedProps;if(Wa(v,u)&&n.ref===s.ref)if(jn=!1,s.pendingProps=u=v,(n.lanes&h)!==0)(n.flags&131072)!==0&&(jn=!0);else return s.lanes=n.lanes,er(n,s,h)}return Zu(n,s,o,u,h)}function zm(n,s,o){var u=s.pendingProps,h=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Wt(Ks,ei),ei|=o;else{if((o&1073741824)===0)return n=v!==null?v.baseLanes|o:o,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:n,cachePool:null,transitions:null},s.updateQueue=null,Wt(Ks,ei),ei|=n,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:o,Wt(Ks,ei),ei|=u}else v!==null?(u=v.baseLanes|o,s.memoizedState=null):u=o,Wt(Ks,ei),ei|=u;return Un(n,s,h,o),s.child}function Vm(n,s){var o=s.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(s.flags|=512,s.flags|=2097152)}function Zu(n,s,o,u,h){var v=Gn(o)?ts:wn.current;return v=zs(s,v),Xs(s,h),o=Vu(n,s,o,u,v,h),u=Hu(),n!==null&&!jn?(s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~h,er(n,s,h)):(Kt&&u&&wu(s),s.flags|=1,Un(n,s,o,h),s.child)}function Hm(n,s,o,u,h){if(Gn(o)){var v=!0;ll(s)}else v=!1;if(Xs(s,h),s.stateNode===null)Tl(n,s),Nm(s,o,u),$u(s,o,u,h),u=!0;else if(n===null){var A=s.stateNode,k=s.memoizedProps;A.props=k;var H=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=li(he):(he=Gn(o)?ts:wn.current,he=zs(s,he));var Te=o.getDerivedStateFromProps,Re=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";Re||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==u||H!==he)&&Pm(s,A,u,he),Tr=!1;var we=s.memoizedState;A.state=we,xl(s,u,A,h),H=s.memoizedState,k!==u||we!==H||Hn.current||Tr?(typeof Te=="function"&&(qu(s,o,Te,u),H=s.memoizedState),(k=Tr||Rm(s,o,k,u,we,H,he))?(Re||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(s.flags|=4194308)):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=H),A.props=u,A.state=H,A.context=he,u=k):(typeof A.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{A=s.stateNode,rm(n,s),k=s.memoizedProps,he=s.type===s.elementType?k:yi(s.type,k),A.props=he,Re=s.pendingProps,we=A.context,H=o.contextType,typeof H=="object"&&H!==null?H=li(H):(H=Gn(o)?ts:wn.current,H=zs(s,H));var qe=o.getDerivedStateFromProps;(Te=typeof qe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(k!==Re||we!==H)&&Pm(s,A,u,H),Tr=!1,we=s.memoizedState,A.state=we,xl(s,u,A,h);var tt=s.memoizedState;k!==Re||we!==tt||Hn.current||Tr?(typeof qe=="function"&&(qu(s,o,qe,u),tt=s.memoizedState),(he=Tr||Rm(s,o,he,u,we,tt,H)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,tt,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,tt,H)),typeof A.componentDidUpdate=="function"&&(s.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=tt),A.props=u,A.state=tt,A.context=H,u=he):(typeof A.componentDidUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&we===n.memoizedState||(s.flags|=1024),u=!1)}return Ju(n,s,o,u,v,h)}function Ju(n,s,o,u,h,v){Vm(n,s);var A=(s.flags&128)!==0;if(!u&&!A)return h&&qp(s,o,!1),er(n,s,v);u=s.stateNode,J_.current=s;var k=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return s.flags|=1,n!==null&&A?(s.child=js(s,n.child,null,v),s.child=js(s,null,k,v)):Un(n,s,k,v),s.memoizedState=u.state,h&&qp(s,o,!0),s.child}function Gm(n){var s=n.stateNode;s.pendingContext?Wp(n,s.pendingContext,s.pendingContext!==s.context):s.context&&Wp(n,s.context,!1),Uu(n,s.containerInfo)}function jm(n,s,o,u,h){return Gs(),Cu(h),s.flags|=256,Un(n,s,o,u),s.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function Wm(n,s,o){var u=s.pendingProps,h=Jt.current,v=!1,A=(s.flags&128)!==0,k;if((k=A)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(v=!0,s.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Wt(Jt,h&1),n===null)return Au(s),n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((s.mode&1)===0?s.lanes=1:n.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(A=u.children,n=u.fallback,v?(u=s.mode,v=s.child,A={mode:"hidden",children:A},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=kl(A,u,0,null),n=ds(n,u,o,null),v.return=s,n.return=s,v.sibling=n,s.child=v,s.child.memoizedState=ed(o),s.memoizedState=Qu,n):td(s,A));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Q_(n,s,A,u,k,h,o);if(v){v=u.fallback,A=s.mode,h=n.child,k=h.sibling;var H={mode:"hidden",children:u.children};return(A&1)===0&&s.child!==h?(u=s.child,u.childLanes=0,u.pendingProps=H,s.deletions=null):(u=Dr(h,H),u.subtreeFlags=h.subtreeFlags&14680064),k!==null?v=Dr(k,v):(v=ds(v,A,o,null),v.flags|=2),v.return=s,u.return=s,u.sibling=v,s.child=u,u=v,v=s.child,A=n.child.memoizedState,A=A===null?ed(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~o,s.memoizedState=Qu,u}return v=n.child,n=v.sibling,u=Dr(v,{mode:"visible",children:u.children}),(s.mode&1)===0&&(u.lanes=o),u.return=s,u.sibling=null,n!==null&&(o=s.deletions,o===null?(s.deletions=[n],s.flags|=16):o.push(n)),s.child=u,s.memoizedState=null,u}function td(n,s){return s=kl({mode:"visible",children:s},n.mode,0,null),s.return=n,n.child=s}function bl(n,s,o,u){return u!==null&&Cu(u),js(s,n.child,null,o),n=td(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function Q_(n,s,o,u,h,v,A){if(o)return s.flags&256?(s.flags&=-257,u=Yu(Error(t(422))),bl(n,s,A,u)):s.memoizedState!==null?(s.child=n.child,s.flags|=128,null):(v=u.fallback,h=s.mode,u=kl({mode:"visible",children:u.children},h,0,null),v=ds(v,h,A,null),v.flags|=2,u.return=s,v.return=s,u.sibling=v,s.child=u,(s.mode&1)!==0&&js(s,n.child,null,A),s.child.memoizedState=ed(A),s.memoizedState=Qu,v);if((s.mode&1)===0)return bl(n,s,A,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var k=u.dgst;return u=k,v=Error(t(419)),u=Yu(v,u,void 0),bl(n,s,A,u)}if(k=(A&n.childLanes)!==0,jn||k){if(u=gn,u!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|A))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,Ji(n,h),Ei(u,n,h,-1))}return xd(),u=Yu(Error(t(421))),bl(n,s,A,u)}return h.data==="$?"?(s.flags|=128,s.child=n.child,s=fy.bind(null,n),h._reactRetry=s,null):(n=v.treeContext,Qn=Mr(h.nextSibling),Jn=s,Kt=!0,_i=null,n!==null&&(ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=ns,Ki=n.id,Zi=n.overflow,ns=s),s=td(s,u.children),s.flags|=4096,s)}function Xm(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Lu(n.return,s,o)}function nd(n,s,o,u,h){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=o,v.tailMode=h)}function qm(n,s,o){var u=s.pendingProps,h=u.revealOrder,v=u.tail;if(Un(n,s,u.children,o),u=Jt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Xm(n,o,s);else if(n.tag===19)Xm(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Wt(Jt,u),(s.mode&1)===0)s.memoizedState=null;else switch(h){case"forwards":for(o=s.child,h=null;o!==null;)n=o.alternate,n!==null&&vl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=s.child,s.child=null):(h=o.sibling,o.sibling=null),nd(s,!1,h,o,v);break;case"backwards":for(o=null,h=s.child,s.child=null;h!==null;){if(n=h.alternate,n!==null&&vl(n)===null){s.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}nd(s,!0,o,null,v);break;case"together":nd(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tl(n,s){(s.mode&1)===0&&n!==null&&(n.alternate=null,s.alternate=null,s.flags|=2)}function er(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),os|=s.lanes,(o&s.childLanes)===0)return null;if(n!==null&&s.child!==n.child)throw Error(t(153));if(s.child!==null){for(n=s.child,o=Dr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=Dr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function ey(n,s,o){switch(s.tag){case 3:Gm(s),Gs();break;case 5:om(s);break;case 1:Gn(s.type)&&ll(s);break;case 4:Uu(s,s.stateNode.containerInfo);break;case 10:var u=s.type._context,h=s.memoizedProps.value;Wt(pl,u._currentValue),u._currentValue=h;break;case 13:if(u=s.memoizedState,u!==null)return u.dehydrated!==null?(Wt(Jt,Jt.current&1),s.flags|=128,null):(o&s.child.childLanes)!==0?Wm(n,s,o):(Wt(Jt,Jt.current&1),n=er(n,s,o),n!==null?n.sibling:null);Wt(Jt,Jt.current&1);break;case 19:if(u=(o&s.childLanes)!==0,(n.flags&128)!==0){if(u)return qm(n,s,o);s.flags|=128}if(h=s.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Wt(Jt,Jt.current),u)break;return null;case 22:case 23:return s.lanes=0,zm(n,s,o)}return er(n,s,o)}var $m,id,Ym,Km;$m=function(n,s){for(var o=s.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},id=function(){},Ym=function(n,s,o,u){var h=n.memoizedProps;if(h!==u){n=s.stateNode,ss(Di.current);var v=null;switch(o){case"input":h=Ne(n,h),u=Ne(n,u),v=[];break;case"select":h=se({},h,{value:void 0}),u=se({},u,{value:void 0}),v=[];break;case"textarea":h=Ut(n,h),u=Ut(n,u),v=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=sl)}Qe(o,u);var A;o=null;for(he in h)if(!u.hasOwnProperty(he)&&h.hasOwnProperty(he)&&h[he]!=null)if(he==="style"){var k=h[he];for(A in k)k.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?v||(v=[]):(v=v||[]).push(he,null));for(he in u){var H=u[he];if(k=h!=null?h[he]:void 0,u.hasOwnProperty(he)&&H!==k&&(H!=null||k!=null))if(he==="style")if(k){for(A in k)!k.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in H)H.hasOwnProperty(A)&&k[A]!==H[A]&&(o||(o={}),o[A]=H[A])}else o||(v||(v=[]),v.push(he,o)),o=H;else he==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,k=k?k.__html:void 0,H!=null&&k!==H&&(v=v||[]).push(he,H)):he==="children"?typeof H!="string"&&typeof H!="number"||(v=v||[]).push(he,""+H):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(H!=null&&he==="onScroll"&&qt("scroll",n),v||k===H||(v=[])):(v=v||[]).push(he,H))}o&&(v=v||[]).push("style",o);var he=v;(s.updateQueue=he)&&(s.flags|=4)}},Km=function(n,s,o,u){o!==u&&(s.flags|=4)};function ao(n,s){if(!Kt)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Tn(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function ty(n,s,o){var u=s.pendingProps;switch(bu(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tn(s),null;case 1:return Gn(s.type)&&ol(),Tn(s),null;case 3:return u=s.stateNode,qs(),$t(Hn),$t(wn),ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(fl(s)?s.flags|=4:n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,_i!==null&&(pd(_i),_i=null))),id(n,s),Tn(s),null;case 5:Ou(s);var h=ss(to.current);if(o=s.type,n!==null&&s.stateNode!=null)Ym(n,s,o,u,h),n.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!u){if(s.stateNode===null)throw Error(t(166));return Tn(s),null}if(n=ss(Di.current),fl(s)){u=s.stateNode,o=s.type;var v=s.memoizedProps;switch(u[Li]=s,u[Ka]=v,n=(s.mode&1)!==0,o){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(h=0;h<qa.length;h++)qt(qa[h],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":Ge(u,v),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},qt("invalid",u);break;case"textarea":W(u,v),qt("invalid",u)}Qe(o,v),h=null;for(var A in v)if(v.hasOwnProperty(A)){var k=v[A];A==="children"?typeof k=="string"?u.textContent!==k&&(v.suppressHydrationWarning!==!0&&rl(u.textContent,k,n),h=["children",k]):typeof k=="number"&&u.textContent!==""+k&&(v.suppressHydrationWarning!==!0&&rl(u.textContent,k,n),h=["children",""+k]):a.hasOwnProperty(A)&&k!=null&&A==="onScroll"&&qt("scroll",u)}switch(o){case"input":nt(u),_t(u,v,!0);break;case"textarea":nt(u),Rt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=sl)}u=h,s.updateQueue=u,u!==null&&(s.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[Li]=s,n[Ka]=u,$m(n,s,!1,!1),s.stateNode=n;e:{switch(A=Be(o,u),o){case"dialog":qt("cancel",n),qt("close",n),h=u;break;case"iframe":case"object":case"embed":qt("load",n),h=u;break;case"video":case"audio":for(h=0;h<qa.length;h++)qt(qa[h],n);h=u;break;case"source":qt("error",n),h=u;break;case"img":case"image":case"link":qt("error",n),qt("load",n),h=u;break;case"details":qt("toggle",n),h=u;break;case"input":Ge(n,u),h=Ne(n,u),qt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=se({},u,{value:void 0}),qt("invalid",n);break;case"textarea":W(n,u),h=Ut(n,u),qt("invalid",n);break;default:h=u}Qe(o,h),k=h;for(v in k)if(k.hasOwnProperty(v)){var H=k[v];v==="style"?ye(n,H):v==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ie(n,H)):v==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&ge(n,H):typeof H=="number"&&ge(n,""+H):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(a.hasOwnProperty(v)?H!=null&&v==="onScroll"&&qt("scroll",n):H!=null&&L(n,v,H,A))}switch(o){case"input":nt(n),_t(n,u,!1);break;case"textarea":nt(n),Rt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ve(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?Lt(n,!!u.multiple,v,!1):u.defaultValue!=null&&Lt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=sl)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Tn(s),null;case 6:if(n&&s.stateNode!=null)Km(n,s,n.memoizedProps,u);else{if(typeof u!="string"&&s.stateNode===null)throw Error(t(166));if(o=ss(to.current),ss(Di.current),fl(s)){if(u=s.stateNode,o=s.memoizedProps,u[Li]=s,(v=u.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:rl(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&rl(u.nodeValue,o,(n.mode&1)!==0)}v&&(s.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Li]=s,s.stateNode=u}return Tn(s),null;case 13:if($t(Jt),u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Qp(),Gs(),s.flags|=98560,v=!1;else if(v=fl(s),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Li]=s}else Gs(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Tn(s),v=!1}else _i!==null&&(pd(_i),_i=null),v=!0;if(!v)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=o,s):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(s.child.flags|=8192,(s.mode&1)!==0&&(n===null||(Jt.current&1)!==0?fn===0&&(fn=3):xd())),s.updateQueue!==null&&(s.flags|=4),Tn(s),null);case 4:return qs(),id(n,s),n===null&&$a(s.stateNode.containerInfo),Tn(s),null;case 10:return Pu(s.type._context),Tn(s),null;case 17:return Gn(s.type)&&ol(),Tn(s),null;case 19:if($t(Jt),v=s.memoizedState,v===null)return Tn(s),null;if(u=(s.flags&128)!==0,A=v.rendering,A===null)if(u)ao(v,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(A=vl(n),A!==null){for(s.flags|=128,ao(v,!1),u=A.updateQueue,u!==null&&(s.updateQueue=u,s.flags|=4),s.subtreeFlags=0,u=o,o=s.child;o!==null;)v=o,n=u,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Wt(Jt,Jt.current&1|2),s.child}n=n.sibling}v.tail!==null&&Zt()>Zs&&(s.flags|=128,u=!0,ao(v,!1),s.lanes=4194304)}else{if(!u)if(n=vl(A),n!==null){if(s.flags|=128,u=!0,o=n.updateQueue,o!==null&&(s.updateQueue=o,s.flags|=4),ao(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Kt)return Tn(s),null}else 2*Zt()-v.renderingStartTime>Zs&&o!==1073741824&&(s.flags|=128,u=!0,ao(v,!1),s.lanes=4194304);v.isBackwards?(A.sibling=s.child,s.child=A):(o=v.last,o!==null?o.sibling=A:s.child=A,v.last=A)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=Zt(),s.sibling=null,o=Jt.current,Wt(Jt,u?o&1|2:o&1),s):(Tn(s),null);case 22:case 23:return gd(),u=s.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(s.flags|=8192),u&&(s.mode&1)!==0?(ei&1073741824)!==0&&(Tn(s),s.subtreeFlags&6&&(s.flags|=8192)):Tn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function ny(n,s){switch(bu(s),s.tag){case 1:return Gn(s.type)&&ol(),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return qs(),$t(Hn),$t(wn),ku(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 5:return Ou(s),null;case 13:if($t(Jt),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Gs()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return $t(Jt),null;case 4:return qs(),null;case 10:return Pu(s.type._context),null;case 22:case 23:return gd(),null;case 24:return null;default:return null}}var Al=!1,An=!1,iy=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function Ys(n,s){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){rn(n,s,u)}else o.current=null}function rd(n,s,o){try{o()}catch(u){rn(n,s,u)}}var Zm=!1;function ry(n,s){if(gu=qo,n=Rp(),lu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{o.nodeType,v.nodeType}catch{o=null;break e}var A=0,k=-1,H=-1,he=0,Te=0,Re=n,we=null;t:for(;;){for(var qe;Re!==o||h!==0&&Re.nodeType!==3||(k=A+h),Re!==v||u!==0&&Re.nodeType!==3||(H=A+u),Re.nodeType===3&&(A+=Re.nodeValue.length),(qe=Re.firstChild)!==null;)we=Re,Re=qe;for(;;){if(Re===n)break t;if(we===o&&++he===h&&(k=A),we===v&&++Te===u&&(H=A),(qe=Re.nextSibling)!==null)break;Re=we,we=Re.parentNode}Re=qe}o=k===-1||H===-1?null:{start:k,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},qo=!1,Ze=s;Ze!==null;)if(s=Ze,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,Ze=n;else for(;Ze!==null;){s=Ze;try{var tt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var st=tt.memoizedProps,sn=tt.memoizedState,ee=s.stateNode,j=ee.getSnapshotBeforeUpdate(s.elementType===s.type?st:yi(s.type,st),sn);ee.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var ae=s.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Pe){rn(s,s.return,Pe)}if(n=s.sibling,n!==null){n.return=s.return,Ze=n;break}Ze=s.return}return tt=Zm,Zm=!1,tt}function oo(n,s,o){var u=s.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var v=h.destroy;h.destroy=void 0,v!==void 0&&rd(s,o,v)}h=h.next}while(h!==u)}}function Cl(n,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var o=s=s.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==s)}}function sd(n){var s=n.ref;if(s!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof s=="function"?s(n):s.current=n}}function Jm(n){var s=n.alternate;s!==null&&(n.alternate=null,Jm(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&(delete s[Li],delete s[Ka],delete s[Su],delete s[z_],delete s[V_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Qm(n){return n.tag===5||n.tag===3||n.tag===4}function e0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ad(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.nodeType===8?o.parentNode.insertBefore(n,s):o.insertBefore(n,s):(o.nodeType===8?(s=o.parentNode,s.insertBefore(n,o)):(s=o,s.appendChild(n)),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=sl));else if(u!==4&&(n=n.child,n!==null))for(ad(n,s,o),n=n.sibling;n!==null;)ad(n,s,o),n=n.sibling}function od(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(od(n,s,o),n=n.sibling;n!==null;)od(n,s,o),n=n.sibling}var yn=null,Si=!1;function Cr(n,s,o){for(o=o.child;o!==null;)t0(n,s,o),o=o.sibling}function t0(n,s,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(ne,o)}catch{}switch(o.tag){case 5:An||Ys(o,s);case 6:var u=yn,h=Si;yn=null,Cr(n,s,o),yn=u,Si=h,yn!==null&&(Si?(n=yn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):yn.removeChild(o.stateNode));break;case 18:yn!==null&&(Si?(n=yn,o=o.stateNode,n.nodeType===8?yu(n.parentNode,o):n.nodeType===1&&yu(n,o),Ba(n)):yu(yn,o.stateNode));break;case 4:u=yn,h=Si,yn=o.stateNode.containerInfo,Si=!0,Cr(n,s,o),yn=u,Si=h;break;case 0:case 11:case 14:case 15:if(!An&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var v=h,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&rd(o,s,A),h=h.next}while(h!==u)}Cr(n,s,o);break;case 1:if(!An&&(Ys(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(k){rn(o,s,k)}Cr(n,s,o);break;case 21:Cr(n,s,o);break;case 22:o.mode&1?(An=(u=An)||o.memoizedState!==null,Cr(n,s,o),An=u):Cr(n,s,o);break;default:Cr(n,s,o)}}function n0(n){var s=n.updateQueue;if(s!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new iy),s.forEach(function(u){var h=hy.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Mi(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var v=n,A=s,k=A;e:for(;k!==null;){switch(k.tag){case 5:yn=k.stateNode,Si=!1;break e;case 3:yn=k.stateNode.containerInfo,Si=!0;break e;case 4:yn=k.stateNode.containerInfo,Si=!0;break e}k=k.return}if(yn===null)throw Error(t(160));t0(v,A,h),yn=null,Si=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(he){rn(h,s,he)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)i0(s,n),s=s.sibling}function i0(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(s,n),Ui(n),u&4){try{oo(3,n,n.return),Cl(3,n)}catch(st){rn(n,n.return,st)}try{oo(5,n,n.return)}catch(st){rn(n,n.return,st)}}break;case 1:Mi(s,n),Ui(n),u&512&&o!==null&&Ys(o,o.return);break;case 5:if(Mi(s,n),Ui(n),u&512&&o!==null&&Ys(o,o.return),n.flags&32){var h=n.stateNode;try{ge(h,"")}catch(st){rn(n,n.return,st)}}if(u&4&&(h=n.stateNode,h!=null)){var v=n.memoizedProps,A=o!==null?o.memoizedProps:v,k=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{k==="input"&&v.type==="radio"&&v.name!=null&&Ee(h,v),Be(k,A);var he=Be(k,v);for(A=0;A<H.length;A+=2){var Te=H[A],Re=H[A+1];Te==="style"?ye(h,Re):Te==="dangerouslySetInnerHTML"?ie(h,Re):Te==="children"?ge(h,Re):L(h,Te,Re,he)}switch(k){case"input":Ke(h,v);break;case"textarea":Gt(h,v);break;case"select":var we=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var qe=v.value;qe!=null?Lt(h,!!v.multiple,qe,!1):we!==!!v.multiple&&(v.defaultValue!=null?Lt(h,!!v.multiple,v.defaultValue,!0):Lt(h,!!v.multiple,v.multiple?[]:"",!1))}h[Ka]=v}catch(st){rn(n,n.return,st)}}break;case 6:if(Mi(s,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,v=n.memoizedProps;try{h.nodeValue=v}catch(st){rn(n,n.return,st)}}break;case 3:if(Mi(s,n),Ui(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Ba(s.containerInfo)}catch(st){rn(n,n.return,st)}break;case 4:Mi(s,n),Ui(n);break;case 13:Mi(s,n),Ui(n),h=n.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(ud=Zt())),u&4&&n0(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(An=(he=An)||Te,Mi(s,n),An=he):Mi(s,n),Ui(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Te&&(n.mode&1)!==0)for(Ze=n,Te=n.child;Te!==null;){for(Re=Ze=Te;Ze!==null;){switch(we=Ze,qe=we.child,we.tag){case 0:case 11:case 14:case 15:oo(4,we,we.return);break;case 1:Ys(we,we.return);var tt=we.stateNode;if(typeof tt.componentWillUnmount=="function"){u=we,o=we.return;try{s=u,tt.props=s.memoizedProps,tt.state=s.memoizedState,tt.componentWillUnmount()}catch(st){rn(u,o,st)}}break;case 5:Ys(we,we.return);break;case 22:if(we.memoizedState!==null){a0(Re);continue}}qe!==null?(qe.return=we,Ze=qe):a0(Re)}Te=Te.sibling}e:for(Te=null,Re=n;;){if(Re.tag===5){if(Te===null){Te=Re;try{h=Re.stateNode,he?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(k=Re.stateNode,H=Re.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,k.style.display=xe("display",A))}catch(st){rn(n,n.return,st)}}}else if(Re.tag===6){if(Te===null)try{Re.stateNode.nodeValue=he?"":Re.memoizedProps}catch(st){rn(n,n.return,st)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Te===Re&&(Te=null),Re=Re.return}Te===Re&&(Te=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Mi(s,n),Ui(n),u&4&&n0(n);break;case 21:break;default:Mi(s,n),Ui(n)}}function Ui(n){var s=n.flags;if(s&2){try{e:{for(var o=n.return;o!==null;){if(Qm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(ge(h,""),u.flags&=-33);var v=e0(n);od(n,v,h);break;case 3:case 4:var A=u.stateNode.containerInfo,k=e0(n);ad(n,k,A);break;default:throw Error(t(161))}}catch(H){rn(n,n.return,H)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function sy(n,s,o){Ze=n,r0(n)}function r0(n,s,o){for(var u=(n.mode&1)!==0;Ze!==null;){var h=Ze,v=h.child;if(h.tag===22&&u){var A=h.memoizedState!==null||Al;if(!A){var k=h.alternate,H=k!==null&&k.memoizedState!==null||An;k=Al;var he=An;if(Al=A,(An=H)&&!he)for(Ze=h;Ze!==null;)A=Ze,H=A.child,A.tag===22&&A.memoizedState!==null?o0(h):H!==null?(H.return=A,Ze=H):o0(h);for(;v!==null;)Ze=v,r0(v),v=v.sibling;Ze=h,Al=k,An=he}s0(n)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,Ze=v):s0(n)}}function s0(n){for(;Ze!==null;){var s=Ze;if((s.flags&8772)!==0){var o=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||Cl(5,s);break;case 1:var u=s.stateNode;if(s.flags&4&&!An)if(o===null)u.componentDidMount();else{var h=s.elementType===s.type?o.memoizedProps:yi(s.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&am(s,v,u);break;case 3:var A=s.updateQueue;if(A!==null){if(o=null,s.child!==null)switch(s.child.tag){case 5:o=s.child.stateNode;break;case 1:o=s.child.stateNode}am(s,A,o)}break;case 5:var k=s.stateNode;if(o===null&&s.flags&4){o=k;var H=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var he=s.alternate;if(he!==null){var Te=he.memoizedState;if(Te!==null){var Re=Te.dehydrated;Re!==null&&Ba(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&sd(s)}catch(we){rn(s,s.return,we)}}if(s===n){Ze=null;break}if(o=s.sibling,o!==null){o.return=s.return,Ze=o;break}Ze=s.return}}function a0(n){for(;Ze!==null;){var s=Ze;if(s===n){Ze=null;break}var o=s.sibling;if(o!==null){o.return=s.return,Ze=o;break}Ze=s.return}}function o0(n){for(;Ze!==null;){var s=Ze;try{switch(s.tag){case 0:case 11:case 15:var o=s.return;try{Cl(4,s)}catch(H){rn(s,o,H)}break;case 1:var u=s.stateNode;if(typeof u.componentDidMount=="function"){var h=s.return;try{u.componentDidMount()}catch(H){rn(s,h,H)}}var v=s.return;try{sd(s)}catch(H){rn(s,v,H)}break;case 5:var A=s.return;try{sd(s)}catch(H){rn(s,A,H)}}}catch(H){rn(s,s.return,H)}if(s===n){Ze=null;break}var k=s.sibling;if(k!==null){k.return=s.return,Ze=k;break}Ze=s.return}}var ay=Math.ceil,Rl=T.ReactCurrentDispatcher,ld=T.ReactCurrentOwner,ui=T.ReactCurrentBatchConfig,It=0,gn=null,ln=null,Sn=0,ei=0,Ks=Er(0),fn=0,lo=null,os=0,Nl=0,cd=0,co=null,Wn=null,ud=0,Zs=1/0,tr=null,Pl=!1,dd=null,Rr=null,Ll=!1,Nr=null,Dl=0,uo=0,fd=null,Il=-1,Ul=0;function On(){return(It&6)!==0?Zt():Il!==-1?Il:Il=Zt()}function Pr(n){return(n.mode&1)===0?1:(It&2)!==0&&Sn!==0?Sn&-Sn:G_.transition!==null?(Ul===0&&(Ul=Xe()),Ul):(n=wt,n!==0||(n=window.event,n=n===void 0?16:cp(n.type)),n)}function Ei(n,s,o,u){if(50<uo)throw uo=0,fd=null,Error(t(185));Mt(n,o,u),((It&2)===0||n!==gn)&&(n===gn&&((It&2)===0&&(Nl|=o),fn===4&&Lr(n,Sn)),Xn(n,u),o===1&&It===0&&(s.mode&1)===0&&(Zs=Zt()+500,cl&&br()))}function Xn(n,s){var o=n.callbackNode;zt(n,s);var u=jt(n,n===gn?Sn:0);if(u===0)o!==null&&Da(o),n.callbackNode=null,n.callbackPriority=0;else if(s=u&-u,n.callbackPriority!==s){if(o!=null&&Da(o),s===1)n.tag===0?H_(c0.bind(null,n)):$p(c0.bind(null,n)),k_(function(){(It&6)===0&&br()}),o=null;else{switch(qi(u)){case 1:o=Ia;break;case 4:o=N;break;case 16:o=$;break;case 536870912:o=re;break;default:o=$}o=x0(o,l0.bind(null,n))}n.callbackPriority=s,n.callbackNode=o}}function l0(n,s){if(Il=-1,Ul=0,(It&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Js()&&n.callbackNode!==o)return null;var u=jt(n,n===gn?Sn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||s)s=Ol(n,u);else{s=u;var h=It;It|=2;var v=d0();(gn!==n||Sn!==s)&&(tr=null,Zs=Zt()+500,cs(n,s));do try{cy();break}catch(k){u0(n,k)}while(!0);Nu(),Rl.current=v,It=h,ln!==null?s=0:(gn=null,Sn=0,s=fn)}if(s!==0){if(s===2&&(h=on(n),h!==0&&(u=h,s=hd(n,h))),s===1)throw o=lo,cs(n,0),Lr(n,u),Xn(n,Zt()),o;if(s===6)Lr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!oy(h)&&(s=Ol(n,u),s===2&&(v=on(n),v!==0&&(u=v,s=hd(n,v))),s===1))throw o=lo,cs(n,0),Lr(n,u),Xn(n,Zt()),o;switch(n.finishedWork=h,n.finishedLanes=u,s){case 0:case 1:throw Error(t(345));case 2:us(n,Wn,tr);break;case 3:if(Lr(n,u),(u&130023424)===u&&(s=ud+500-Zt(),10<s)){if(jt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){On(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=_u(us.bind(null,n,Wn,tr),s);break}us(n,Wn,tr);break;case 4:if(Lr(n,u),(u&4194240)===u)break;for(s=n.eventTimes,h=-1;0<u;){var A=31-De(u);v=1<<A,A=s[A],A>h&&(h=A),u&=~v}if(u=h,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*ay(u/1960))-u,10<u){n.timeoutHandle=_u(us.bind(null,n,Wn,tr),u);break}us(n,Wn,tr);break;case 5:us(n,Wn,tr);break;default:throw Error(t(329))}}}return Xn(n,Zt()),n.callbackNode===o?l0.bind(null,n):null}function hd(n,s){var o=co;return n.current.memoizedState.isDehydrated&&(cs(n,s).flags|=256),n=Ol(n,s),n!==2&&(s=Wn,Wn=o,s!==null&&pd(s)),n}function pd(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function oy(n){for(var s=n;;){if(s.flags&16384){var o=s.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],v=h.getSnapshot;h=h.value;try{if(!vi(v(),h))return!1}catch{return!1}}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Lr(n,s){for(s&=~cd,s&=~Nl,n.suspendedLanes|=s,n.pingedLanes&=~s,n=n.expirationTimes;0<s;){var o=31-De(s),u=1<<o;n[o]=-1,s&=~u}}function c0(n){if((It&6)!==0)throw Error(t(327));Js();var s=jt(n,0);if((s&1)===0)return Xn(n,Zt()),null;var o=Ol(n,s);if(n.tag!==0&&o===2){var u=on(n);u!==0&&(s=u,o=hd(n,u))}if(o===1)throw o=lo,cs(n,0),Lr(n,s),Xn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=s,us(n,Wn,tr),Xn(n,Zt()),null}function md(n,s){var o=It;It|=1;try{return n(s)}finally{It=o,It===0&&(Zs=Zt()+500,cl&&br())}}function ls(n){Nr!==null&&Nr.tag===0&&(It&6)===0&&Js();var s=It;It|=1;var o=ui.transition,u=wt;try{if(ui.transition=null,wt=1,n)return n()}finally{wt=u,ui.transition=o,It=s,(It&6)===0&&br()}}function gd(){ei=Ks.current,$t(Ks)}function cs(n,s){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,F_(o)),ln!==null)for(o=ln.return;o!==null;){var u=o;switch(bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ol();break;case 3:qs(),$t(Hn),$t(wn),ku();break;case 5:Ou(u);break;case 4:qs();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:Pu(u.type._context);break;case 22:case 23:gd()}o=o.return}if(gn=n,ln=n=Dr(n.current,null),Sn=ei=s,fn=0,lo=null,cd=Nl=os=0,Wn=co=null,rs!==null){for(s=0;s<rs.length;s++)if(o=rs[s],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,v=o.pending;if(v!==null){var A=v.next;v.next=h,u.next=A}o.pending=u}rs=null}return n}function u0(n,s){do{var o=ln;try{if(Nu(),_l.current=El,yl){for(var u=Qt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}yl=!1}if(as=0,mn=dn=Qt=null,no=!1,io=0,ld.current=null,o===null||o.return===null){fn=1,lo=s,ln=null;break}e:{var v=n,A=o.return,k=o,H=s;if(s=Sn,k.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var he=H,Te=k,Re=Te.tag;if((Te.mode&1)===0&&(Re===0||Re===11||Re===15)){var we=Te.alternate;we?(Te.updateQueue=we.updateQueue,Te.memoizedState=we.memoizedState,Te.lanes=we.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var qe=Um(A);if(qe!==null){qe.flags&=-257,Om(qe,A,k,v,s),qe.mode&1&&Im(v,he,s),s=qe,H=he;var tt=s.updateQueue;if(tt===null){var st=new Set;st.add(H),s.updateQueue=st}else tt.add(H);break e}else{if((s&1)===0){Im(v,he,s),xd();break e}H=Error(t(426))}}else if(Kt&&k.mode&1){var sn=Um(A);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Om(sn,A,k,v,s),Cu($s(H,k));break e}}v=H=$s(H,k),fn!==4&&(fn=2),co===null?co=[v]:co.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var ee=Lm(v,H,s);sm(v,ee);break e;case 1:k=H;var j=v.type,ae=v.stateNode;if((v.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Rr===null||!Rr.has(ae)))){v.flags|=65536,s&=-s,v.lanes|=s;var Pe=Dm(v,k,s);sm(v,Pe);break e}}v=v.return}while(v!==null)}h0(o)}catch(lt){s=lt,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function d0(){var n=Rl.current;return Rl.current=El,n===null?El:n}function xd(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||(os&268435455)===0&&(Nl&268435455)===0||Lr(gn,Sn)}function Ol(n,s){var o=It;It|=2;var u=d0();(gn!==n||Sn!==s)&&(tr=null,cs(n,s));do try{ly();break}catch(h){u0(n,h)}while(!0);if(Nu(),It=o,Rl.current=u,ln!==null)throw Error(t(261));return gn=null,Sn=0,fn}function ly(){for(;ln!==null;)f0(ln)}function cy(){for(;ln!==null&&!Wo();)f0(ln)}function f0(n){var s=g0(n.alternate,n,ei);n.memoizedProps=n.pendingProps,s===null?h0(n):ln=s,ld.current=null}function h0(n){var s=n;do{var o=s.alternate;if(n=s.return,(s.flags&32768)===0){if(o=ty(o,s,ei),o!==null){ln=o;return}}else{if(o=ny(o,s),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,ln=null;return}}if(s=s.sibling,s!==null){ln=s;return}ln=s=n}while(s!==null);fn===0&&(fn=5)}function us(n,s,o){var u=wt,h=ui.transition;try{ui.transition=null,wt=1,uy(n,s,o,u)}finally{ui.transition=h,wt=u}return null}function uy(n,s,o,u){do Js();while(Nr!==null);if((It&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=o.lanes|o.childLanes;if(zn(n,v),n===gn&&(ln=gn=null,Sn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ll||(Ll=!0,x0($,function(){return Js(),null})),v=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||v){v=ui.transition,ui.transition=null;var A=wt;wt=1;var k=It;It|=4,ld.current=null,ry(n,o),i0(o,n),N_(xu),qo=!!gu,xu=gu=null,n.current=o,sy(o),Yc(),It=k,wt=A,ui.transition=v}else n.current=o;if(Ll&&(Ll=!1,Nr=n,Dl=h),v=n.pendingLanes,v===0&&(Rr=null),Ye(o.stateNode),Xn(n,Zt()),s!==null)for(u=n.onRecoverableError,o=0;o<s.length;o++)h=s[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(Pl)throw Pl=!1,n=dd,dd=null,n;return(Dl&1)!==0&&n.tag!==0&&Js(),v=n.pendingLanes,(v&1)!==0?n===fd?uo++:(uo=0,fd=n):uo=0,br(),null}function Js(){if(Nr!==null){var n=qi(Dl),s=ui.transition,o=wt;try{if(ui.transition=null,wt=16>n?16:n,Nr===null)var u=!1;else{if(n=Nr,Nr=null,Dl=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,Ze=n.current;Ze!==null;){var v=Ze,A=v.child;if((Ze.flags&16)!==0){var k=v.deletions;if(k!==null){for(var H=0;H<k.length;H++){var he=k[H];for(Ze=he;Ze!==null;){var Te=Ze;switch(Te.tag){case 0:case 11:case 15:oo(8,Te,v)}var Re=Te.child;if(Re!==null)Re.return=Te,Ze=Re;else for(;Ze!==null;){Te=Ze;var we=Te.sibling,qe=Te.return;if(Jm(Te),Te===he){Ze=null;break}if(we!==null){we.return=qe,Ze=we;break}Ze=qe}}}var tt=v.alternate;if(tt!==null){var st=tt.child;if(st!==null){tt.child=null;do{var sn=st.sibling;st.sibling=null,st=sn}while(st!==null)}}Ze=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Ze=A;else e:for(;Ze!==null;){if(v=Ze,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:oo(9,v,v.return)}var ee=v.sibling;if(ee!==null){ee.return=v.return,Ze=ee;break e}Ze=v.return}}var j=n.current;for(Ze=j;Ze!==null;){A=Ze;var ae=A.child;if((A.subtreeFlags&2064)!==0&&ae!==null)ae.return=A,Ze=ae;else e:for(A=j;Ze!==null;){if(k=Ze,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Cl(9,k)}}catch(lt){rn(k,k.return,lt)}if(k===A){Ze=null;break e}var Pe=k.sibling;if(Pe!==null){Pe.return=k.return,Ze=Pe;break e}Ze=k.return}}if(It=h,br(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(ne,n)}catch{}u=!0}return u}finally{wt=o,ui.transition=s}}return!1}function p0(n,s,o){s=$s(o,s),s=Lm(n,s,1),n=Ar(n,s,1),s=On(),n!==null&&(Mt(n,1,s),Xn(n,s))}function rn(n,s,o){if(n.tag===3)p0(n,n,o);else for(;s!==null;){if(s.tag===3){p0(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Rr===null||!Rr.has(u))){n=$s(o,n),n=Dm(s,n,1),s=Ar(s,n,1),n=On(),s!==null&&(Mt(s,1,n),Xn(s,n));break}}s=s.return}}function dy(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),s=On(),n.pingedLanes|=n.suspendedLanes&o,gn===n&&(Sn&o)===o&&(fn===4||fn===3&&(Sn&130023424)===Sn&&500>Zt()-ud?cs(n,0):cd|=o),Xn(n,s)}function m0(n,s){s===0&&((n.mode&1)===0?s=1:(s=at,at<<=1,(at&130023424)===0&&(at=4194304)));var o=On();n=Ji(n,s),n!==null&&(Mt(n,s,o),Xn(n,o))}function fy(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),m0(n,o)}function hy(n,s){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(s),m0(n,o)}var g0;g0=function(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps||Hn.current)jn=!0;else{if((n.lanes&o)===0&&(s.flags&128)===0)return jn=!1,ey(n,s,o);jn=(n.flags&131072)!==0}else jn=!1,Kt&&(s.flags&1048576)!==0&&Yp(s,dl,s.index);switch(s.lanes=0,s.tag){case 2:var u=s.type;Tl(n,s),n=s.pendingProps;var h=zs(s,wn.current);Xs(s,o),h=Vu(null,s,u,n,h,o);var v=Hu();return s.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Gn(u)?(v=!0,ll(s)):v=!1,s.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Iu(s),h.updater=wl,s.stateNode=h,h._reactInternals=s,$u(s,u,n,o),s=Ju(null,s,u,!0,v,o)):(s.tag=0,Kt&&v&&wu(s),Un(null,s,h,o),s=s.child),s;case 16:u=s.elementType;e:{switch(Tl(n,s),n=s.pendingProps,h=u._init,u=h(u._payload),s.type=u,h=s.tag=my(u),n=yi(u,n),h){case 0:s=Zu(null,s,u,n,o);break e;case 1:s=Hm(null,s,u,n,o);break e;case 11:s=Fm(null,s,u,n,o);break e;case 14:s=km(null,s,u,yi(u.type,n),o);break e}throw Error(t(306,u,""))}return s;case 0:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Zu(n,s,u,h,o);case 1:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Hm(n,s,u,h,o);case 3:e:{if(Gm(s),n===null)throw Error(t(387));u=s.pendingProps,v=s.memoizedState,h=v.element,rm(n,s),xl(s,u,null,o);var A=s.memoizedState;if(u=A.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){h=$s(Error(t(423)),s),s=jm(n,s,u,o,h);break e}else if(u!==h){h=$s(Error(t(424)),s),s=jm(n,s,u,o,h);break e}else for(Qn=Mr(s.stateNode.containerInfo.firstChild),Jn=s,Kt=!0,_i=null,o=nm(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Gs(),u===h){s=er(n,s,o);break e}Un(n,s,u,o)}s=s.child}return s;case 5:return om(s),n===null&&Au(s),u=s.type,h=s.pendingProps,v=n!==null?n.memoizedProps:null,A=h.children,vu(u,h)?A=null:v!==null&&vu(u,v)&&(s.flags|=32),Vm(n,s),Un(n,s,A,o),s.child;case 6:return n===null&&Au(s),null;case 13:return Wm(n,s,o);case 4:return Uu(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=js(s,null,u,o):Un(n,s,u,o),s.child;case 11:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Fm(n,s,u,h,o);case 7:return Un(n,s,s.pendingProps,o),s.child;case 8:return Un(n,s,s.pendingProps.children,o),s.child;case 12:return Un(n,s,s.pendingProps.children,o),s.child;case 10:e:{if(u=s.type._context,h=s.pendingProps,v=s.memoizedProps,A=h.value,Wt(pl,u._currentValue),u._currentValue=A,v!==null)if(vi(v.value,A)){if(v.children===h.children&&!Hn.current){s=er(n,s,o);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var k=v.dependencies;if(k!==null){A=v.child;for(var H=k.firstContext;H!==null;){if(H.context===u){if(v.tag===1){H=Qi(-1,o&-o),H.tag=2;var he=v.updateQueue;if(he!==null){he=he.shared;var Te=he.pending;Te===null?H.next=H:(H.next=Te.next,Te.next=H),he.pending=H}}v.lanes|=o,H=v.alternate,H!==null&&(H.lanes|=o),Lu(v.return,o,s),k.lanes|=o;break}H=H.next}}else if(v.tag===10)A=v.type===s.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=o,k=A.alternate,k!==null&&(k.lanes|=o),Lu(A,o,s),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===s){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}Un(n,s,h.children,o),s=s.child}return s;case 9:return h=s.type,u=s.pendingProps.children,Xs(s,o),h=li(h),u=u(h),s.flags|=1,Un(n,s,u,o),s.child;case 14:return u=s.type,h=yi(u,s.pendingProps),h=yi(u.type,h),km(n,s,u,h,o);case 15:return Bm(n,s,s.type,s.pendingProps,o);case 17:return u=s.type,h=s.pendingProps,h=s.elementType===u?h:yi(u,h),Tl(n,s),s.tag=1,Gn(u)?(n=!0,ll(s)):n=!1,Xs(s,o),Nm(s,u,h),$u(s,u,h,o),Ju(null,s,u,!0,n,o);case 19:return qm(n,s,o);case 22:return zm(n,s,o)}throw Error(t(156,s.tag))};function x0(n,s){return Jr(n,s)}function py(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,s,o,u){return new py(n,s,o,u)}function vd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function my(n){if(typeof n=="function")return vd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Z)return 11;if(n===X)return 14}return 2}function Dr(n,s){var o=n.alternate;return o===null?(o=di(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Fl(n,s,o,u,h,v){var A=2;if(u=n,typeof n=="function")vd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case F:return ds(o.children,h,v,s);case w:A=8,h|=8;break;case U:return n=di(12,o,s,h|2),n.elementType=U,n.lanes=v,n;case ue:return n=di(13,o,s,h),n.elementType=ue,n.lanes=v,n;case me:return n=di(19,o,s,h),n.elementType=me,n.lanes=v,n;case J:return kl(o,h,v,s);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:A=10;break e;case V:A=9;break e;case Z:A=11;break e;case X:A=14;break e;case pe:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return s=di(A,o,s,h),s.elementType=n,s.type=u,s.lanes=v,s}function ds(n,s,o,u){return n=di(7,n,u,s),n.lanes=o,n}function kl(n,s,o,u){return n=di(22,n,u,s),n.elementType=J,n.lanes=o,n.stateNode={isHidden:!1},n}function _d(n,s,o){return n=di(6,n,null,s),n.lanes=o,n}function yd(n,s,o){return s=di(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}function gy(n,s,o,u,h){this.tag=s,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_n(0),this.expirationTimes=_n(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_n(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Sd(n,s,o,u,h,v,A,k,H){return n=new gy(n,s,o,k,H),s===1?(s=1,v===!0&&(s|=8)):s=0,v=di(3,null,null,s),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Iu(v),n}function xy(n,s,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:s,implementation:o}}function v0(n){if(!n)return wr;n=n._reactInternals;e:{if(In(n)!==n||n.tag!==1)throw Error(t(170));var s=n;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Gn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return Xp(n,o,s)}return s}function _0(n,s,o,u,h,v,A,k,H){return n=Sd(o,u,!0,n,h,v,A,k,H),n.context=v0(null),o=n.current,u=On(),h=Pr(o),v=Qi(u,h),v.callback=s??null,Ar(o,v,h),n.current.lanes=h,Mt(n,h,u),Xn(n,u),n}function Bl(n,s,o,u){var h=s.current,v=On(),A=Pr(h);return o=v0(o),s.context===null?s.context=o:s.pendingContext=o,s=Qi(v,A),s.payload={element:n},u=u===void 0?null:u,u!==null&&(s.callback=u),n=Ar(h,s,A),n!==null&&(Ei(n,h,A,v),gl(n,h,A)),A}function zl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function y0(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function Md(n,s){y0(n,s),(n=n.alternate)&&y0(n,s)}function vy(){return null}var S0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ed(n){this._internalRoot=n}Vl.prototype.render=Ed.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(t(409));Bl(n,s,null,null)},Vl.prototype.unmount=Ed.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;ls(function(){Bl(null,n,null,null)}),s[$i]=null}};function Vl(n){this._internalRoot=n}Vl.prototype.unstable_scheduleHydration=function(n){if(n){var s=Vt();n={blockedOn:null,target:n,priority:s};for(var o=0;o<_r.length&&s!==0&&s<_r[o].priority;o++);_r.splice(o,0,n),o===0&&op(n)}};function wd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Hl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function M0(){}function _y(n,s,o,u,h){if(h){if(typeof u=="function"){var v=u;u=function(){var he=zl(A);v.call(he)}}var A=_0(s,u,n,0,null,!1,!1,"",M0);return n._reactRootContainer=A,n[$i]=A.current,$a(n.nodeType===8?n.parentNode:n),ls(),A}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var k=u;u=function(){var he=zl(H);k.call(he)}}var H=Sd(n,0,!1,null,null,!1,!1,"",M0);return n._reactRootContainer=H,n[$i]=H.current,$a(n.nodeType===8?n.parentNode:n),ls(function(){Bl(s,H,o,u)}),H}function Gl(n,s,o,u,h){var v=o._reactRootContainer;if(v){var A=v;if(typeof h=="function"){var k=h;h=function(){var H=zl(A);k.call(H)}}Bl(s,A,n,h)}else A=_y(o,s,n,h,u);return zl(A)}Ft=function(n){switch(n.tag){case 3:var s=n.stateNode;if(s.current.memoizedState.isDehydrated){var o=Nt(s.pendingLanes);o!==0&&(Vn(s,o|1),Xn(s,Zt()),(It&6)===0&&(Zs=Zt()+500,br()))}break;case 13:ls(function(){var u=Ji(n,1);if(u!==null){var h=On();Ei(u,n,1,h)}}),Md(n,1)}},Xt=function(n){if(n.tag===13){var s=Ji(n,134217728);if(s!==null){var o=On();Ei(s,n,134217728,o)}Md(n,134217728)}},gi=function(n){if(n.tag===13){var s=Pr(n),o=Ji(n,s);if(o!==null){var u=On();Ei(o,n,s,u)}Md(n,s)}},Vt=function(){return wt},xi=function(n,s){var o=wt;try{return wt=n,s()}finally{wt=o}},ut=function(n,s,o){switch(s){case"input":if(Ke(n,o),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var h=al(u);if(!h)throw Error(t(90));Ce(u),Ke(u,h)}}}break;case"textarea":Gt(n,o);break;case"select":s=o.value,s!=null&&Lt(n,!!o.multiple,s,!1)}},Le=md,Se=ls;var yy={usingClientEntryPoint:!1,Events:[Za,ks,al,oe,Ae,md]},fo={findFiberByHostInstance:es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sy={bundleType:fo.bundleType,version:fo.version,rendererPackageName:fo.rendererPackageName,rendererConfig:fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zr(n),n===null?null:n.stateNode},findFiberByHostInstance:fo.findFiberByHostInstance||vy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{ne=jl.inject(Sy),Ue=jl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yy,qn.createPortal=function(n,s){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(s))throw Error(t(200));return xy(n,s,null,o)},qn.createRoot=function(n,s){if(!wd(n))throw Error(t(299));var o=!1,u="",h=S0;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onRecoverableError!==void 0&&(h=s.onRecoverableError)),s=Sd(n,1,!1,null,null,o,!1,u,h),n[$i]=s.current,$a(n.nodeType===8?n.parentNode:n),new Ed(s)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Zr(s),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return ls(n)},qn.hydrate=function(n,s,o){if(!Hl(s))throw Error(t(200));return Gl(null,n,s,!0,o)},qn.hydrateRoot=function(n,s,o){if(!wd(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,v="",A=S0;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(v=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),s=_0(s,null,n,1,o??null,h,!1,v,A),n[$i]=s.current,$a(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[o,h]:s.mutableSourceEagerHydrationData.push(o,h);return new Vl(s)},qn.render=function(n,s,o){if(!Hl(s))throw Error(t(200));return Gl(null,n,s,!1,o)},qn.unmountComponentAtNode=function(n){if(!Hl(n))throw Error(t(40));return n._reactRootContainer?(ls(function(){Gl(null,null,n,!1,function(){n._reactRootContainer=null,n[$i]=null})}),!0):!1},qn.unstable_batchedUpdates=md,qn.unstable_renderSubtreeIntoContainer=function(n,s,o,u){if(!Hl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Gl(n,s,o,!1,u)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var N0;function px(){if(N0)return Ad.exports;N0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ad.exports=Ny(),Ad.exports}var P0;function Py(){if(P0)return Wl;P0=1;var i=px();return Wl.createRoot=i.createRoot,Wl.hydrateRoot=i.hydrateRoot,Wl}var Ly=Py();const Dy=fx(Ly);px();/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ao(){return Ao=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Ao.apply(null,arguments)}var Gr;(function(i){i.Pop="POP",i.Push="PUSH",i.Replace="REPLACE"})(Gr||(Gr={}));const L0="popstate";function Iy(i){i===void 0&&(i={});function e(a,l){let{pathname:c="/",search:d="",hash:f=""}=As(a.location.hash.substr(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),Mf("",{pathname:c,search:d,hash:f},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(a,l){let c=a.document.querySelector("base"),d="";if(c&&c.getAttribute("href")){let f=a.location.href,p=f.indexOf("#");d=p===-1?f:f.slice(0,p)}return d+"#"+(typeof l=="string"?l:wc(l))}function r(a,l){wh(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Oy(e,t,r,i)}function tn(i,e){if(i===!1||i===null||typeof i>"u")throw new Error(e)}function wh(i,e){if(!i){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Uy(){return Math.random().toString(36).substr(2,8)}function D0(i,e){return{usr:i.state,key:i.key,idx:e}}function Mf(i,e,t,r){return t===void 0&&(t=null),Ao({pathname:typeof i=="string"?i:i.pathname,search:"",hash:""},typeof e=="string"?As(e):e,{state:t,key:e&&e.key||r||Uy()})}function wc(i){let{pathname:e="/",search:t="",hash:r=""}=i;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function As(i){let e={};if(i){let t=i.indexOf("#");t>=0&&(e.hash=i.substr(t),i=i.substr(0,t));let r=i.indexOf("?");r>=0&&(e.search=i.substr(r),i=i.substr(0,r)),i&&(e.pathname=i)}return e}function Oy(i,e,t,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:l=!1}=r,c=a.history,d=Gr.Pop,f=null,p=x();p==null&&(p=0,c.replaceState(Ao({},c.state,{idx:p}),""));function x(){return(c.state||{idx:null}).idx}function _(){d=Gr.Pop;let S=x(),g=S==null?null:S-p;p=S,f&&f({action:d,location:C.location,delta:g})}function y(S,g){d=Gr.Push;let R=Mf(C.location,S,g);t&&t(R,S),p=x()+1;let L=D0(R,p),T=C.createHref(R);try{c.pushState(L,"",T)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;a.location.assign(T)}l&&f&&f({action:d,location:C.location,delta:1})}function M(S,g){d=Gr.Replace;let R=Mf(C.location,S,g);t&&t(R,S),p=x();let L=D0(R,p),T=C.createHref(R);c.replaceState(L,"",T),l&&f&&f({action:d,location:C.location,delta:0})}function b(S){let g=a.location.origin!=="null"?a.location.origin:a.location.href,R=typeof S=="string"?S:wc(S);return R=R.replace(/ $/,"%20"),tn(g,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,g)}let C={get action(){return d},get location(){return i(a,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(L0,_),f=S,()=>{a.removeEventListener(L0,_),f=null}},createHref(S){return e(a,S)},createURL:b,encodeLocation(S){let g=b(S);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:M,go(S){return c.go(S)}};return C}var I0;(function(i){i.data="data",i.deferred="deferred",i.redirect="redirect",i.error="error"})(I0||(I0={}));function Fy(i,e,t){return t===void 0&&(t="/"),ky(i,e,t)}function ky(i,e,t,r){let a=typeof e=="string"?As(e):e,l=va(a.pathname||"/",t);if(l==null)return null;let c=mx(i);By(c);let d=null,f=Ky(l);for(let p=0;d==null&&p<c.length;++p)d=$y(c[p],f);return d}function mx(i,e,t,r){e===void 0&&(e=[]),t===void 0&&(t=[]),r===void 0&&(r="");let a=(l,c,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&(tn(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let p=Wr([r,f.relativePath]),x=t.concat(f);l.children&&l.children.length>0&&(tn(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),mx(l.children,e,x,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:Xy(p,l.index),routesMeta:x})};return i.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))a(l,c);else for(let f of gx(l.path))a(l,c,f)}),e}function gx(i){let e=i.split("/");if(e.length===0)return[];let[t,...r]=e,a=t.endsWith("?"),l=t.replace(/\?$/,"");if(r.length===0)return a?[l,""]:[l];let c=gx(r.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),a&&d.push(...c),d.map(f=>i.startsWith("/")&&f===""?"/":f)}function By(i){i.sort((e,t)=>e.score!==t.score?t.score-e.score:qy(e.routesMeta.map(r=>r.childrenIndex),t.routesMeta.map(r=>r.childrenIndex)))}const zy=/^:[\w-]+$/,Vy=3,Hy=2,Gy=1,jy=10,Wy=-2,U0=i=>i==="*";function Xy(i,e){let t=i.split("/"),r=t.length;return t.some(U0)&&(r+=Wy),e&&(r+=Hy),t.filter(a=>!U0(a)).reduce((a,l)=>a+(zy.test(l)?Vy:l===""?Gy:jy),r)}function qy(i,e){return i.length===e.length&&i.slice(0,-1).every((r,a)=>r===e[a])?i[i.length-1]-e[e.length-1]:0}function $y(i,e,t){let{routesMeta:r}=i,a={},l="/",c=[];for(let d=0;d<r.length;++d){let f=r[d],p=d===r.length-1,x=l==="/"?e:e.slice(l.length)||"/",_=Ef({path:f.relativePath,caseSensitive:f.caseSensitive,end:p},x),y=f.route;if(!_)return null;Object.assign(a,_.params),c.push({params:a,pathname:Wr([l,_.pathname]),pathnameBase:Qy(Wr([l,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(l=Wr([l,_.pathnameBase]))}return c}function Ef(i,e){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[t,r]=Yy(i.path,i.caseSensitive,i.end),a=e.match(t);if(!a)return null;let l=a[0],c=l.replace(/(.)\/+$/,"$1"),d=a.slice(1);return{params:r.reduce((p,x,_)=>{let{paramName:y,isOptional:M}=x;if(y==="*"){let C=d[_]||"";c=l.slice(0,l.length-C.length).replace(/(.)\/+$/,"$1")}const b=d[_];return M&&!b?p[y]=void 0:p[y]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:c,pattern:i}}function Yy(i,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),wh(i==="*"||!i.endsWith("*")||i.endsWith("/*"),'Route path "'+i+'" will be treated as if it were '+('"'+i.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+i.replace(/\*$/,"/*")+'".'));let r=[],a="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return i.endsWith("*")?(r.push({paramName:"*"}),a+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?a+="\\/*$":i!==""&&i!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,e?void 0:"i"),r]}function Ky(i){try{return i.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return wh(!1,'The URL path "'+i+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),i}}function va(i,e){if(e==="/")return i;if(!i.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,r=i.charAt(t);return r&&r!=="/"?null:i.slice(t)||"/"}function Zy(i,e){e===void 0&&(e="/");let{pathname:t,search:r="",hash:a=""}=typeof i=="string"?As(i):i,l;return t?(t=xx(t),t.startsWith("/")?l=O0(t.substring(1),"/"):l=O0(t,e)):l=e,{pathname:l,search:eS(r),hash:tS(a)}}function O0(i,e){let t=e.replace(/\/+$/,"").split("/");return i.split("/").forEach(a=>{a===".."?t.length>1&&t.pop():a!=="."&&t.push(a)}),t.length>1?t.join("/"):"/"}function Nd(i,e,t,r){return"Cannot include a '"+i+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Jy(i){return i.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function bh(i,e){let t=Jy(i);return e?t.map((r,a)=>a===t.length-1?r.pathname:r.pathnameBase):t.map(r=>r.pathnameBase)}function Th(i,e,t,r){r===void 0&&(r=!1);let a;typeof i=="string"?a=As(i):(a=Ao({},i),tn(!a.pathname||!a.pathname.includes("?"),Nd("?","pathname","search",a)),tn(!a.pathname||!a.pathname.includes("#"),Nd("#","pathname","hash",a)),tn(!a.search||!a.search.includes("#"),Nd("#","search","hash",a)));let l=i===""||a.pathname==="",c=l?"/":a.pathname,d;if(c==null)d=t;else{let _=e.length-1;if(!r&&c.startsWith("..")){let y=c.split("/");for(;y[0]==="..";)y.shift(),_-=1;a.pathname=y.join("/")}d=_>=0?e[_]:"/"}let f=Zy(a,d),p=c&&c!=="/"&&c.endsWith("/"),x=(l||c===".")&&t.endsWith("/");return!f.pathname.endsWith("/")&&(p||x)&&(f.pathname+="/"),f}const xx=i=>i.replace(/\/\/+/g,"/"),Wr=i=>xx(i.join("/")),Qy=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),eS=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,tS=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i;function nS(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}const vx=["post","put","patch","delete"];new Set(vx);const iS=["get",...vx];new Set(iS);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Co(){return Co=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},Co.apply(null,arguments)}const Oc=de.createContext(null),_x=de.createContext(null),pr=de.createContext(null),Fc=de.createContext(null),mr=de.createContext({outlet:null,matches:[],isDataRoute:!1}),yx=de.createContext(null);function rS(i,e){let{relative:t}=e===void 0?{}:e;wa()||tn(!1);let{basename:r,navigator:a}=de.useContext(pr),{hash:l,pathname:c,search:d}=kc(i,{relative:t}),f=c;return r!=="/"&&(f=c==="/"?r:Wr([r,c])),a.createHref({pathname:f,search:d,hash:l})}function wa(){return de.useContext(Fc)!=null}function ba(){return wa()||tn(!1),de.useContext(Fc).location}function Sx(i){de.useContext(pr).static||de.useLayoutEffect(i)}function Ah(){let{isDataRoute:i}=de.useContext(mr);return i?_S():sS()}function sS(){wa()||tn(!1);let i=de.useContext(Oc),{basename:e,future:t,navigator:r}=de.useContext(pr),{matches:a}=de.useContext(mr),{pathname:l}=ba(),c=JSON.stringify(bh(a,t.v7_relativeSplatPath)),d=de.useRef(!1);return Sx(()=>{d.current=!0}),de.useCallback(function(p,x){if(x===void 0&&(x={}),!d.current)return;if(typeof p=="number"){r.go(p);return}let _=Th(p,JSON.parse(c),l,x.relative==="path");i==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Wr([e,_.pathname])),(x.replace?r.replace:r.push)(_,x.state,x)},[e,r,c,l,i])}const aS=de.createContext(null);function oS(i){let e=de.useContext(mr).outlet;return e&&de.createElement(aS.Provider,{value:i},e)}function kc(i,e){let{relative:t}=e===void 0?{}:e,{future:r}=de.useContext(pr),{matches:a}=de.useContext(mr),{pathname:l}=ba(),c=JSON.stringify(bh(a,r.v7_relativeSplatPath));return de.useMemo(()=>Th(i,JSON.parse(c),l,t==="path"),[i,c,l,t])}function lS(i,e){return cS(i,e)}function cS(i,e,t,r){wa()||tn(!1);let{navigator:a}=de.useContext(pr),{matches:l}=de.useContext(mr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let p=ba(),x;if(e){var _;let S=typeof e=="string"?As(e):e;f==="/"||(_=S.pathname)!=null&&_.startsWith(f)||tn(!1),x=S}else x=p;let y=x.pathname||"/",M=y;if(f!=="/"){let S=f.replace(/^\//,"").split("/");M="/"+y.replace(/^\//,"").split("/").slice(S.length).join("/")}let b=Fy(i,{pathname:M}),C=pS(b&&b.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:Wr([f,a.encodeLocation?a.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Wr([f,a.encodeLocation?a.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,t,r);return e&&C?de.createElement(Fc.Provider,{value:{location:Co({pathname:"/",search:"",hash:"",state:null,key:"default"},x),navigationType:Gr.Pop}},C):C}function uS(){let i=vS(),e=nS(i)?i.status+" "+i.statusText:i instanceof Error?i.message:JSON.stringify(i),t=i instanceof Error?i.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return de.createElement(de.Fragment,null,de.createElement("h2",null,"Unexpected Application Error!"),de.createElement("h3",{style:{fontStyle:"italic"}},e),t?de.createElement("pre",{style:a},t):null,null)}const dS=de.createElement(uS,null);class fS extends de.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?de.createElement(mr.Provider,{value:this.props.routeContext},de.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hS(i){let{routeContext:e,match:t,children:r}=i,a=de.useContext(Oc);return a&&a.static&&a.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=t.route.id),de.createElement(mr.Provider,{value:e},r)}function pS(i,e,t,r){var a;if(e===void 0&&(e=[]),t===void 0&&(t=null),r===void 0&&(r=null),i==null){var l;if(!t)return null;if(t.errors)i=t.matches;else if((l=r)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)i=t.matches;else return null}let c=i,d=(a=t)==null?void 0:a.errors;if(d!=null){let x=c.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);x>=0||tn(!1),c=c.slice(0,Math.min(c.length,x+1))}let f=!1,p=-1;if(t&&r&&r.v7_partialHydration)for(let x=0;x<c.length;x++){let _=c[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=x),_.route.id){let{loaderData:y,errors:M}=t,b=_.route.loader&&y[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||b){f=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((x,_,y)=>{let M,b=!1,C=null,S=null;t&&(M=d&&_.route.id?d[_.route.id]:void 0,C=_.route.errorElement||dS,f&&(p<0&&y===0?(yS("route-fallback"),b=!0,S=null):p===y&&(b=!0,S=_.route.hydrateFallbackElement||null)));let g=e.concat(c.slice(0,y+1)),R=()=>{let L;return M?L=C:b?L=S:_.route.Component?L=de.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=x,de.createElement(hS,{match:_,routeContext:{outlet:x,matches:g,isDataRoute:t!=null},children:L})};return t&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?de.createElement(fS,{location:t.location,revalidation:t.revalidation,component:C,error:M,children:R(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):R()},null)}var Mx=(function(i){return i.UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i})(Mx||{}),Ex=(function(i){return i.UseBlocker="useBlocker",i.UseLoaderData="useLoaderData",i.UseActionData="useActionData",i.UseRouteError="useRouteError",i.UseNavigation="useNavigation",i.UseRouteLoaderData="useRouteLoaderData",i.UseMatches="useMatches",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i.UseRouteId="useRouteId",i})(Ex||{});function mS(i){let e=de.useContext(Oc);return e||tn(!1),e}function gS(i){let e=de.useContext(_x);return e||tn(!1),e}function xS(i){let e=de.useContext(mr);return e||tn(!1),e}function wx(i){let e=xS(),t=e.matches[e.matches.length-1];return t.route.id||tn(!1),t.route.id}function vS(){var i;let e=de.useContext(yx),t=gS(),r=wx();return e!==void 0?e:(i=t.errors)==null?void 0:i[r]}function _S(){let{router:i}=mS(Mx.UseNavigateStable),e=wx(Ex.UseNavigateStable),t=de.useRef(!1);return Sx(()=>{t.current=!0}),de.useCallback(function(a,l){l===void 0&&(l={}),t.current&&(typeof a=="number"?i.navigate(a):i.navigate(a,Co({fromRouteId:e},l)))},[i,e])}const F0={};function yS(i,e,t){F0[i]||(F0[i]=!0)}function SS(i,e){i==null||i.v7_startTransition,i==null||i.v7_relativeSplatPath}function wf(i){let{to:e,replace:t,state:r,relative:a}=i;wa()||tn(!1);let{future:l,static:c}=de.useContext(pr),{matches:d}=de.useContext(mr),{pathname:f}=ba(),p=Ah(),x=Th(e,bh(d,l.v7_relativeSplatPath),f,a==="path"),_=JSON.stringify(x);return de.useEffect(()=>p(JSON.parse(_),{replace:t,state:r,relative:a}),[p,_,a,t,r]),null}function MS(i){return oS(i.context)}function Ai(i){tn(!1)}function ES(i){let{basename:e="/",children:t=null,location:r,navigationType:a=Gr.Pop,navigator:l,static:c=!1,future:d}=i;wa()&&tn(!1);let f=e.replace(/^\/*/,"/"),p=de.useMemo(()=>({basename:f,navigator:l,static:c,future:Co({v7_relativeSplatPath:!1},d)}),[f,d,l,c]);typeof r=="string"&&(r=As(r));let{pathname:x="/",search:_="",hash:y="",state:M=null,key:b="default"}=r,C=de.useMemo(()=>{let S=va(x,f);return S==null?null:{location:{pathname:S,search:_,hash:y,state:M,key:b},navigationType:a}},[f,x,_,y,M,b,a]);return C==null?null:de.createElement(pr.Provider,{value:p},de.createElement(Fc.Provider,{children:t,value:C}))}function wS(i){let{children:e,location:t}=i;return lS(bf(e),t)}new Promise(()=>{});function bf(i,e){e===void 0&&(e=[]);let t=[];return de.Children.forEach(i,(r,a)=>{if(!de.isValidElement(r))return;let l=[...e,a];if(r.type===de.Fragment){t.push.apply(t,bf(r.props.children,l));return}r.type!==Ai&&tn(!1),!r.props.index||!r.props.children||tn(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=bf(r.props.children,l)),t.push(c)}),t}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},bc.apply(null,arguments)}function bx(i,e){if(i==null)return{};var t={};for(var r in i)if({}.hasOwnProperty.call(i,r)){if(e.indexOf(r)!==-1)continue;t[r]=i[r]}return t}function bS(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function TS(i,e){return i.button===0&&(!e||e==="_self")&&!bS(i)}const AS=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],CS=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],RS="6";try{window.__reactRouterVersion=RS}catch{}const NS=de.createContext({isTransitioning:!1}),PS="startTransition",k0=Ay[PS];function LS(i){let{basename:e,children:t,future:r,window:a}=i,l=de.useRef();l.current==null&&(l.current=Iy({window:a,v5Compat:!0}));let c=l.current,[d,f]=de.useState({action:c.action,location:c.location}),{v7_startTransition:p}=r||{},x=de.useCallback(_=>{p&&k0?k0(()=>f(_)):f(_)},[f,p]);return de.useLayoutEffect(()=>c.listen(x),[c,x]),de.useEffect(()=>SS(r),[r]),de.createElement(ES,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:c,future:r})}const DS=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",IS=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,US=de.forwardRef(function(e,t){let{onClick:r,relative:a,reloadDocument:l,replace:c,state:d,target:f,to:p,preventScrollReset:x,viewTransition:_}=e,y=bx(e,AS),{basename:M}=de.useContext(pr),b,C=!1;if(typeof p=="string"&&IS.test(p)&&(b=p,DS))try{let L=new URL(window.location.href),T=p.startsWith("//")?new URL(L.protocol+p):new URL(p),D=va(T.pathname,M);T.origin===L.origin&&D!=null?p=D+T.search+T.hash:C=!0}catch{}let S=rS(p,{relative:a}),g=FS(p,{replace:c,state:d,target:f,preventScrollReset:x,relative:a,viewTransition:_});function R(L){r&&r(L),L.defaultPrevented||g(L)}return de.createElement("a",bc({},y,{href:b||S,onClick:C||l?r:R,ref:t,target:f}))}),Eo=de.forwardRef(function(e,t){let{"aria-current":r="page",caseSensitive:a=!1,className:l="",end:c=!1,style:d,to:f,viewTransition:p,children:x}=e,_=bx(e,CS),y=kc(f,{relative:_.relative}),M=ba(),b=de.useContext(_x),{navigator:C,basename:S}=de.useContext(pr),g=b!=null&&kS(y)&&p===!0,R=C.encodeLocation?C.encodeLocation(y).pathname:y.pathname,L=M.pathname,T=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;a||(L=L.toLowerCase(),T=T?T.toLowerCase():null,R=R.toLowerCase()),T&&S&&(T=va(T,S)||T);const D=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let P=L===R||!c&&L.startsWith(R)&&L.charAt(D)==="/",F=T!=null&&(T===R||!c&&T.startsWith(R)&&T.charAt(R.length)==="/"),w={isActive:P,isPending:F,isTransitioning:g},U=P?r:void 0,z;typeof l=="function"?z=l(w):z=[l,P?"active":null,F?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let V=typeof d=="function"?d(w):d;return de.createElement(US,bc({},_,{"aria-current":U,className:z,ref:t,style:V,to:f,viewTransition:p}),typeof x=="function"?x(w):x)});var Tf;(function(i){i.UseScrollRestoration="useScrollRestoration",i.UseSubmit="useSubmit",i.UseSubmitFetcher="useSubmitFetcher",i.UseFetcher="useFetcher",i.useViewTransitionState="useViewTransitionState"})(Tf||(Tf={}));var B0;(function(i){i.UseFetcher="useFetcher",i.UseFetchers="useFetchers",i.UseScrollRestoration="useScrollRestoration"})(B0||(B0={}));function OS(i){let e=de.useContext(Oc);return e||tn(!1),e}function FS(i,e){let{target:t,replace:r,state:a,preventScrollReset:l,relative:c,viewTransition:d}=e===void 0?{}:e,f=Ah(),p=ba(),x=kc(i,{relative:c});return de.useCallback(_=>{if(TS(_,t)){_.preventDefault();let y=r!==void 0?r:wc(p)===wc(x);f(i,{replace:y,state:a,preventScrollReset:l,relative:c,viewTransition:d})}},[p,f,x,r,a,t,i,l,c,d])}function kS(i,e){e===void 0&&(e={});let t=de.useContext(NS);t==null&&tn(!1);let{basename:r}=OS(Tf.useViewTransitionState),a=kc(i,{relative:e.relative});if(!t.isTransitioning)return!1;let l=va(t.currentLocation.pathname,r)||t.currentLocation.pathname,c=va(t.nextLocation.pathname,r)||t.nextLocation.pathname;return Ef(a.pathname,c)!=null||Ef(a.pathname,l)!=null}function Tx(i,e){return function(){return i.apply(e,arguments)}}const{toString:BS}=Object.prototype,{getPrototypeOf:_a}=Object,{iterator:Do,toStringTag:Ax}=Symbol,Tc=(({hasOwnProperty:i})=>(e,t)=>i.call(e,t))(Object.prototype),Ro=(i,e)=>{let t=i;const r=[];for(;t!=null&&t!==Object.prototype;){if(r.indexOf(t)!==-1)return!1;if(r.push(t),Tc(t,e))return!0;t=_a(t)}return!1},zS=(i,e)=>i!=null&&Ro(i,e)?i[e]:void 0,Ch=(i=>e=>{const t=BS.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),mi=i=>(i=i.toLowerCase(),e=>Ch(e)===i),Bc=i=>e=>typeof e===i,{isArray:Ms}=Array,Es=Bc("undefined");function Ta(i){return i!==null&&!Es(i)&&i.constructor!==null&&!Es(i.constructor)&&Yn(i.constructor.isBuffer)&&i.constructor.isBuffer(i)}const Cx=mi("ArrayBuffer");function VS(i){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(i):e=i&&i.buffer&&Cx(i.buffer),e}const HS=Bc("string"),Yn=Bc("function"),Rx=Bc("number"),Aa=i=>i!==null&&typeof i=="object",GS=i=>i===!0||i===!1,mc=i=>{if(!Aa(i))return!1;const e=_a(i);return(e===null||e===Object.prototype||_a(e)===null)&&!Ro(i,Ax)&&!Ro(i,Do)},jS=i=>{if(!Aa(i)||Ta(i))return!1;try{return Object.keys(i).length===0&&Object.getPrototypeOf(i)===Object.prototype}catch{return!1}},WS=mi("Date"),XS=mi("File"),qS=i=>!!(i&&typeof i.uri<"u"),$S=i=>i&&typeof i.getParts<"u",YS=mi("Blob"),KS=mi("FileList"),ZS=mi("Set"),JS=i=>Aa(i)&&Yn(i.pipe);function QS(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const z0=QS(),V0=typeof z0.FormData<"u"?z0.FormData:void 0,e1=i=>{if(!i)return!1;if(V0&&i instanceof V0)return!0;const e=_a(i);if(!e||e===Object.prototype||!Yn(i.append))return!1;const t=Ch(i);return t==="formdata"||t==="object"&&Yn(i.toString)&&i.toString()==="[object FormData]"},t1=mi("URLSearchParams"),[n1,i1,r1,s1]=["ReadableStream","Request","Response","Headers"].map(mi),a1=i=>i.trim?i.trim():i.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Io(i,e,{allOwnKeys:t=!1}={}){if(i===null||typeof i>"u")return;let r,a;if(typeof i!="object"&&(i=[i]),Ms(i))for(r=0,a=i.length;r<a;r++)e.call(null,i[r],r,i);else{if(Ta(i))return;const l=t?Object.getOwnPropertyNames(i):Object.keys(i),c=l.length;let d;for(r=0;r<c;r++)d=l[r],e.call(null,i[d],d,i)}}function Nx(i,e){if(Ta(i))return null;e=e.toLowerCase();const t=Object.keys(i);let r=t.length,a;for(;r-- >0;)if(a=t[r],e===a.toLowerCase())return a;return null}const vs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Px=i=>!Es(i)&&i!==vs;function Af(...i){const{caseless:e,skipUndefined:t}=Px(this)&&this||{},r={},a=(l,c)=>{if(c==="__proto__"||c==="constructor"||c==="prototype")return;const d=e&&typeof c=="string"&&Nx(r,c)||c,f=Tc(r,d)?r[d]:void 0;mc(f)&&mc(l)?r[d]=Af(f,l):mc(l)?r[d]=Af({},l):Ms(l)?r[d]=l.slice():(!t||!Es(l))&&(r[d]=l)};for(let l=0,c=i.length;l<c;l++){const d=i[l];if(!d||Ta(d)||(Io(d,a),typeof d!="object"||Ms(d)))continue;const f=Object.getOwnPropertySymbols(d);for(let p=0;p<f.length;p++){const x=f[p];v1.call(d,x)&&a(d[x],x)}}return r}const o1=(i,e,t,{allOwnKeys:r}={})=>(Io(e,(a,l)=>{t&&Yn(a)?Object.defineProperty(i,l,{__proto__:null,value:Tx(a,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(i,l,{__proto__:null,value:a,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),i),l1=i=>(i.charCodeAt(0)===65279&&(i=i.slice(1)),i),c1=(i,e,t,r)=>{i.prototype=Object.create(e.prototype,r),Object.defineProperty(i.prototype,"constructor",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(i,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(i.prototype,t)},u1=(i,e,t,r)=>{let a,l,c;const d={};if(e=e||{},i==null)return e;do{for(a=Object.getOwnPropertyNames(i),l=a.length;l-- >0;)c=a[l],(!r||r(c,i,e))&&!d[c]&&(e[c]=i[c],d[c]=!0);i=t!==!1&&_a(i)}while(i&&(!t||t(i,e))&&i!==Object.prototype);return e},d1=(i,e,t)=>{i=String(i),(t===void 0||t>i.length)&&(t=i.length),t-=e.length;const r=i.indexOf(e,t);return r!==-1&&r===t},f1=i=>{if(!i)return null;if(Ms(i))return i;let e=i.length;if(!Rx(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=i[e];return t},h1=(i=>e=>i&&e instanceof i)(typeof Uint8Array<"u"&&_a(Uint8Array)),p1=(i,e)=>{const r=(i&&i[Do]).call(i);let a;for(;(a=r.next())&&!a.done;){const l=a.value;e.call(i,l[0],l[1])}},m1=(i,e)=>{let t;const r=[];for(;(t=i.exec(e))!==null;)r.push(t);return r},g1=mi("HTMLFormElement"),x1=i=>i.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,r,a){return r.toUpperCase()+a}),{propertyIsEnumerable:v1}=Object.prototype,_1=mi("RegExp"),Lx=(i,e)=>{const t=Object.getOwnPropertyDescriptors(i),r={};Io(t,(a,l)=>{let c;(c=e(a,l,i))!==!1&&(r[l]=c||a)}),Object.defineProperties(i,r)},y1=i=>{Lx(i,(e,t)=>{if(Yn(i)&&["arguments","caller","callee"].includes(t))return!1;const r=i[t];if(Yn(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},S1=(i,e)=>{const t={},r=a=>{a.forEach(l=>{t[l]=!0})};return Ms(i)?r(i):r(String(i).split(e)),t},M1=()=>{},E1=(i,e)=>i!=null&&Number.isFinite(i=+i)?i:e;function w1(i){return!!(i&&Yn(i.append)&&i[Ax]==="FormData"&&i[Do])}const b1=i=>{const e=new WeakSet,t=r=>{if(Aa(r)){if(e.has(r))return;if(Ta(r))return r;if(!("toJSON"in r)){e.add(r);let a;if(ZS(r)){a=[];for(const l of r){const c=t(l);!Es(c)&&a.push(c)}}else a=Ms(r)?[]:{},Io(r,(l,c)=>{const d=t(l);!Es(d)&&(a[c]=d)});return e.delete(r),a}}return r};return t(i)},T1=mi("AsyncFunction"),A1=i=>i&&(Aa(i)||Yn(i))&&Yn(i.then)&&Yn(i.catch),Dx=((i,e)=>i?setImmediate:e?((t,r)=>(vs.addEventListener("message",({source:a,data:l})=>{a===vs&&l===t&&r.length&&r.shift()()},!1),a=>{r.push(a),vs.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Yn(vs.postMessage)),C1=typeof queueMicrotask<"u"?queueMicrotask.bind(vs):typeof process<"u"&&process.nextTick||Dx,Ix=i=>i!=null&&Yn(i[Do]),R1=i=>i!=null&&Ro(i,Do)&&Ix(i),G={isArray:Ms,isArrayBuffer:Cx,isBuffer:Ta,isFormData:e1,isArrayBufferView:VS,isString:HS,isNumber:Rx,isBoolean:GS,isObject:Aa,isPlainObject:mc,isEmptyObject:jS,isReadableStream:n1,isRequest:i1,isResponse:r1,isHeaders:s1,isUndefined:Es,isDate:WS,isFile:XS,isReactNativeBlob:qS,isReactNative:$S,isBlob:YS,isRegExp:_1,isFunction:Yn,isStream:JS,isURLSearchParams:t1,isTypedArray:h1,isFileList:KS,forEach:Io,merge:Af,extend:o1,trim:a1,stripBOM:l1,inherits:c1,toFlatObject:u1,kindOf:Ch,kindOfTest:mi,endsWith:d1,toArray:f1,forEachEntry:p1,matchAll:m1,isHTMLForm:g1,hasOwnProperty:Tc,hasOwnProp:Tc,hasOwnInPrototypeChain:Ro,getSafeProp:zS,reduceDescriptors:Lx,freezeMethods:y1,toObjectSet:S1,toCamelCase:x1,noop:M1,toFiniteNumber:E1,findKey:Nx,global:vs,isContextDefined:Px,isSpecCompliantForm:w1,toJSONObject:b1,isAsyncFn:T1,isThenable:A1,setImmediate:Dx,asap:C1,isIterable:Ix,isSafeIterable:R1},N1=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),P1=i=>{const e={};let t,r,a;return i&&i.split(`
`).forEach(function(c){a=c.indexOf(":"),t=c.substring(0,a).trim().toLowerCase(),r=c.substring(a+1).trim();const d=G.hasOwnProp(e,t);!t||d&&G.hasOwnProp(N1,t)||(t==="set-cookie"?d?e[t].push(r):e[t]=[r]:e[t]=d?e[t]+", "+r:r)}),e};function L1(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}const D1=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),I1=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Rh(i,e){return G.isArray(i)?i.map(t=>Rh(t,e)):L1(String(i).replace(e,""))}const U1=i=>Rh(i,D1),O1=i=>Rh(i,I1);function Ux(i){const e=Object.create(null);return G.forEach(i.toJSON(),(t,r)=>{e[r]=O1(t)}),e}const H0=Symbol("internals");function po(i){return i&&String(i).trim().toLowerCase()}function gc(i){return i===!1||i==null?i:G.isArray(i)?i.map(gc):U1(String(i))}function F1(i){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=t.exec(i);)e[r[1]]=r[2];return e}const k1=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Pd(i){let e=0,t=i.length;for(;e<t;){const r=i.charCodeAt(e);if(r!==9&&r!==32)break;e+=1}for(;t>e;){const r=i.charCodeAt(t-1);if(r!==9&&r!==32)break;t-=1}return e===0&&t===i.length?i:i.slice(e,t)}function B1(i){const e=i.length-1;if(e<1||i.charCodeAt(0)!==34||i.charCodeAt(e)!==34)return i;let t="";for(let r=1;r<e;r++){const a=i.charCodeAt(r);if(a===34||a===92&&(r+=1,r>=e))return i;t+=i[r]}return t}function z1(i){const e=Object.create(null),t=String(i);let r=0,a=!1,l=!1;function c(d){const f=Pd(t.slice(r,d)),p=f.indexOf("=");if(p<1)return;const x=Pd(f.slice(0,p));if(!k1.test(x))return;const _=x.toLowerCase();if(_==="__proto__"||_==="constructor"||_==="prototype")return;const y=Pd(f.slice(p+1));e[_]=B1(y)}for(let d=0;d<t.length;d++){const f=t.charCodeAt(d);a?l?l=!1:f===92?l=!0:f===34&&(a=!1):f===34?a=!0:(f===44||f===59)&&(c(d),r=d+1)}return c(t.length),e}const V1=i=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(i.trim());function Ld(i,e,t,r,a){if(G.isFunction(r))return r.call(this,e,t);if(a&&(e=t),!!G.isString(e)){if(G.isString(r))return e.indexOf(r)!==-1;if(G.isRegExp(r))return r.test(e)}}function H1(i){return i.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r)}function G1(i,e){const t=G.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(i,r+t,{__proto__:null,value:function(a,l,c){return this[r].call(this,e,a,l,c)},configurable:!0})})}let Ln=class{constructor(e){e&&this.set(e)}set(e,t,r){const a=this;function l(d,f,p){const x=po(f);if(!x)return;const _=G.findKey(a,x);(!_||a[_]===void 0||p===!0||p===void 0&&a[_]!==!1)&&(a[_||f]=gc(d))}const c=(d,f)=>G.forEach(d,(p,x)=>l(p,x,f));if(G.isPlainObject(e)||e instanceof this.constructor)c(e,t);else if(G.isString(e)&&(e=e.trim())&&!V1(e))c(P1(e),t);else if(G.isObject(e)&&G.isSafeIterable(e)){let d=Object.create(null),f,p;for(const x of e){if(!G.isArray(x))throw new TypeError("Object iterator must return a key-value pair");p=x[0],G.hasOwnProp(d,p)?(f=d[p],d[p]=G.isArray(f)?[...f,x[1]]:[f,x[1]]):d[p]=x[1]}c(d,t)}else e!=null&&l(t,e,r);return this}get(e,t){if(e=po(e),e){const r=G.findKey(this,e);if(r){const a=this[r];if(!t)return a;if(t===!0)return F1(a);if(G.isFunction(t))return t.call(this,a,r);if(G.isRegExp(t))return t.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=po(e),e){const r=G.findKey(this,e);return!!(r&&this[r]!==void 0&&(!t||Ld(this,this[r],r,t)))}return!1}delete(e,t){const r=this;let a=!1;function l(c){if(c=po(c),c){const d=G.findKey(r,c);d&&(!t||Ld(r,r[d],d,t))&&(delete r[d],a=!0)}}return G.isArray(e)?e.forEach(l):l(e),a}clear(e){const t=Object.keys(this);let r=t.length,a=!1;for(;r--;){const l=t[r];(!e||Ld(this,this[l],l,e,!0))&&(delete this[l],a=!0)}return a}normalize(e){const t=this,r={};return G.forEach(this,(a,l)=>{const c=G.findKey(r,l);if(c){t[c]=gc(a),delete t[l];return}const d=e?H1(l):String(l).trim();d!==l&&delete t[l],t[d]=gc(a),r[d]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return G.forEach(this,(r,a)=>{r!=null&&r!==!1&&(t[a]=e&&G.isArray(r)?r.join(", "):r)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return G.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return z1(e)}static concat(e,...t){const r=new this(e);return t.forEach(a=>r.set(a)),r}static accessor(e){const r=(this[H0]=this[H0]={accessors:{}}).accessors,a=this.prototype;function l(c){const d=po(c);r[d]||(G1(a,c),r[d]=!0)}return G.isArray(e)?e.forEach(l):l(e),this}};Ln.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(Ln.prototype,({value:i},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>i,set(r){this[t]=r}}});G.freezeMethods(Ln);const Ac="[REDACTED ****]";function j1(i){if(G.hasOwnProp(i,"toJSON"))return!0;let e=Object.getPrototypeOf(i);for(;e&&e!==Object.prototype;){if(G.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function W1(i,e){const t=new Set(e.map(l=>String(l).toLowerCase())),r=[],a=l=>{if(l===null||typeof l!="object"||G.isBuffer(l))return l;if(r.indexOf(l)!==-1)return;l instanceof Ln&&(l=l.toJSON()),r.push(l);let c;if(G.isArray(l))c=[],l.forEach((d,f)=>{const p=a(d);G.isUndefined(p)||(c[f]=p)});else{if(!G.isPlainObject(l)&&j1(l))return r.pop(),l;c=Object.create(null);for(const[d,f]of Object.entries(l)){const p=t.has(d.toLowerCase())?Ac:a(f);G.isUndefined(p)||(c[d]=p)}}return r.pop(),c};return a(i)}function G0(i){try{return String(i)}catch{return""}}function X1(i){return i.errors.map(t=>{try{return t&&t.message?G0(t.message):G0(t)}catch{return""}}).filter(Boolean).join("; ")||i.name||"AggregateError"}let He=class Ox extends Error{static from(e,t,r,a,l,c){let d=e.message;!d&&G.isArray(e.errors)&&e.errors.length&&(d=X1(e));const f=new Ox(d,t||e.code,r,a,l);return Object.defineProperty(f,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),f.name=e.name,e.status!=null&&f.status==null&&(f.status=e.status),c&&Object.assign(f,c),f}constructor(e,t,r,a,l){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),r&&(this.config=r),a&&(this.request=a),l&&(this.response=l,this.status=l.status)}toJSON(){const e=this.config,t=e&&G.hasOwnProp(e,"redact")?e.redact:void 0,r=G.isArray(t)&&t.length>0?W1(e,t):G.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:r,code:this.code,status:this.status}}};He.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";He.ERR_BAD_OPTION="ERR_BAD_OPTION";He.ECONNABORTED="ECONNABORTED";He.ETIMEDOUT="ETIMEDOUT";He.ECONNREFUSED="ECONNREFUSED";He.ERR_NETWORK="ERR_NETWORK";He.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";He.ERR_DEPRECATED="ERR_DEPRECATED";He.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";He.ERR_BAD_REQUEST="ERR_BAD_REQUEST";He.ERR_CANCELED="ERR_CANCELED";He.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";He.ERR_INVALID_URL="ERR_INVALID_URL";He.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const q1=null,Fx=100;function Cf(i){return G.isPlainObject(i)||G.isArray(i)}function kx(i){return G.endsWith(i,"[]")?i.slice(0,-2):i}function Dd(i,e,t){return i?i.concat(e).map(function(a,l){return a=kx(a),!t&&l?"["+a+"]":a}).join(t?".":""):e}function $1(i){return G.isArray(i)&&!i.some(Cf)}const Y1=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function zc(i,e,t){if(!G.isObject(i))throw new TypeError("target must be an object");e=e||new FormData,t=G.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(R,L){return!G.isUndefined(L[R])});const r=t.metaTokens,a=t.visitor||b,l=t.dots,c=t.indexes,d=t.Blob||typeof Blob<"u"&&Blob,f=t.maxDepth===void 0?Fx:t.maxDepth,p=d&&G.isSpecCompliantForm(e),x=[];if(!G.isFunction(a))throw new TypeError("visitor must be a function");function _(g){if(g===null)return"";if(G.isDate(g))return g.toISOString();if(G.isBoolean(g))return g.toString();if(!p&&G.isBlob(g))throw new He("Blob is not supported. Use a Buffer instead.");if(G.isArrayBuffer(g)||G.isTypedArray(g)){if(p&&typeof d=="function")return new d([g]);throw new He("Blob is not supported. Use a Buffer instead.",He.ERR_NOT_SUPPORT)}return g}function y(g){if(g>f)throw new He("Object is too deeply nested ("+g+" levels). Max depth: "+f,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(g,R){if(f===1/0)return JSON.stringify(g);const L=[];return JSON.stringify(g,function(D,P){if(!G.isObject(P))return P;for(;L.length&&L[L.length-1]!==this;)L.pop();return L.push(P),y(R+L.length-1),P})}function b(g,R,L){let T=g;if(G.isReactNative(e)&&G.isReactNativeBlob(g))return e.append(Dd(L,R,l),_(g)),!1;if(g&&!L&&typeof g=="object"){if(G.endsWith(R,"{}"))R=r?R:R.slice(0,-2),g=M(g,1);else if(G.isArray(g)&&$1(g)||(G.isFileList(g)||G.endsWith(R,"[]"))&&(T=G.toArray(g)))return R=kx(R),T.forEach(function(P,F){!(G.isUndefined(P)||P===null)&&e.append(c===!0?Dd([R],F,l):c===null?R:R+"[]",_(P))}),!1}return Cf(g)?!0:(e.append(Dd(L,R,l),_(g)),!1)}const C=Object.assign(Y1,{defaultVisitor:b,convertValue:_,isVisitable:Cf});function S(g,R,L=0){if(!G.isUndefined(g)){if(y(L),x.indexOf(g)!==-1)throw new Error("Circular reference detected in "+R.join("."));x.push(g),G.forEach(g,function(D,P){(!(G.isUndefined(D)||D===null)&&a.call(e,D,G.isString(P)?P.trim():P,R,C))===!0&&S(D,R?R.concat(P):[P],L+1)}),x.pop()}}if(!G.isObject(i))throw new TypeError("data must be an object");return S(i),e}function j0(i){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(i).replace(/[!'()~]|%20/g,function(r){return e[r]})}function Nh(i,e){this._pairs=[],i&&zc(i,this,e)}const Bx=Nh.prototype;Bx.append=function(e,t){this._pairs.push([e,t])};Bx.toString=function(e){const t=e?r=>e.call(this,r,j0):j0;return this._pairs.map(function(a){return t(a[0])+"="+t(a[1])},"").join("&")};function K1(i){return encodeURIComponent(i).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function zx(i,e,t){if(!e)return i;i=i||"";const r=G.isFunction(t)?{serialize:t}:t,a=G.getSafeProp(r,"encode")||K1,l=G.getSafeProp(r,"serialize");let c;if(l?c=l(e,r):c=G.isURLSearchParams(e)?e.toString():new Nh(e,r).toString(a),c){const d=i.indexOf("#");d!==-1&&(i=i.slice(0,d)),i+=(i.indexOf("?")===-1?"?":"&")+c}return i}class W0{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(r){r!==null&&e(r)})}}const Ph={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Z1=typeof URLSearchParams<"u"?URLSearchParams:Nh,J1=typeof FormData<"u"?FormData:null,Q1=typeof Blob<"u"?Blob:null,eM={isBrowser:!0,classes:{URLSearchParams:Z1,FormData:J1,Blob:Q1},protocols:["http","https","file","blob","url","data"]},Lh=typeof window<"u"&&typeof document<"u",Rf=typeof navigator=="object"&&navigator||void 0,tM=Lh&&(!Rf||["ReactNative","NativeScript","NS"].indexOf(Rf.product)<0),nM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",iM=Lh&&window.location.href||"http://localhost",rM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Lh,hasStandardBrowserEnv:tM,hasStandardBrowserWebWorkerEnv:nM,navigator:Rf,origin:iM},Symbol.toStringTag,{value:"Module"})),Mn={...rM,...eM};function sM(i,e){return zc(i,new Mn.classes.URLSearchParams,{visitor:function(t,r,a,l){return Mn.isNode&&G.isBuffer(t)?(this.append(r,t.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)},...e})}const X0=Fx;function Vx(i){if(i>X0)throw new He("FormData field is too deeply nested ("+i+" levels). Max depth: "+X0,He.ERR_FORM_DATA_DEPTH_EXCEEDED)}function aM(i){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let r;for(;(r=t.exec(i))!==null;)Vx(e.length),e.push(r[0]==="[]"?"":r[1]||r[0]);return e}function oM(i){const e={},t=Object.keys(i);let r;const a=t.length;let l;for(r=0;r<a;r++)l=t[r],e[l]=i[l];return e}function Hx(i){function e(t,r,a,l){Vx(l);let c=t[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),f=l>=t.length;return c=!c&&G.isArray(a)?a.length:c,f?(G.hasOwnProp(a,c)?a[c]=G.isArray(a[c])?a[c].concat(r):[a[c],r]:a[c]=r,!d):((!G.hasOwnProp(a,c)||!G.isObject(a[c]))&&(a[c]=[]),e(t,r,a[c],l)&&G.isArray(a[c])&&(a[c]=oM(a[c])),!d)}if(G.isFormData(i)&&G.isFunction(i.entries)){const t={};return G.forEachEntry(i,(r,a)=>{e(aM(r),a,t,0)}),t}return null}const Qs=(i,e)=>i!=null&&G.hasOwnProp(i,e)?i[e]:void 0;function lM(i,e,t){if(G.isString(i))try{return(e||JSON.parse)(i),G.trim(i)}catch(r){if(r.name!=="SyntaxError")throw r}return(t||JSON.stringify)(i)}const Uo={transitional:Ph,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const r=t.getContentType()||"",a=r.indexOf("application/json")>-1,l=G.isObject(e);if(l&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return a?JSON.stringify(Hx(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let d;if(l){const f=Qs(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return sM(e,f).toString();if((d=G.isFileList(e))||r.indexOf("multipart/form-data")>-1){const p=Qs(this,"env"),x=p&&p.FormData;return zc(d?{"files[]":e}:e,x&&new x,f)}}return l||a?(t.setContentType("application/json",!1),lM(e)):e}],transformResponse:[function(e){const t=Qs(this,"transitional")||Uo.transitional,r=t&&t.forcedJSONParsing,a=Qs(this,"responseType"),l=a==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(r&&!a||l)){const d=!(t&&t.silentJSONParsing)&&l;try{return JSON.parse(e,Qs(this,"parseReviver"))}catch(f){if(d)throw f.name==="SyntaxError"?He.from(f,He.ERR_BAD_RESPONSE,this,null,Qs(this,"response")):f}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mn.classes.FormData,Blob:Mn.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch","query"],i=>{Uo.headers[i]={}});function Id(i,e){const t=this||Uo,r=e||t,a=Ln.from(r.headers);let l=r.data;return G.forEach(i,function(d){l=d.call(t,l,a.normalize(),e?e.status:void 0)}),a.normalize(),l}function Gx(i){return!!(i&&i.__CANCEL__)}let Oo=class extends He{constructor(e,t,r){super(e??"canceled",He.ERR_CANCELED,t,r),this.name="CanceledError",this.__CANCEL__=!0}};function jx(i,e,t){const r=t.config.validateStatus;!t.status||!r||r(t.status)?i(t):e(new He("Request failed with status code "+t.status,t.status>=400&&t.status<500?He.ERR_BAD_REQUEST:He.ERR_BAD_RESPONSE,t.config,t.request,t))}function cM(i){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(i);return e&&e[1]||""}function uM(i,e){i=i||10;const t=new Array(i),r=new Array(i);let a=0,l=0,c;return e=e!==void 0?e:1e3,function(f){const p=Date.now(),x=r[l];c||(c=p),t[a]=f,r[a]=p;let _=l,y=0;for(;_!==a;)y+=t[_++],_=_%i;if(a=(a+1)%i,a===l&&(l=(l+1)%i),p-c<e)return;const M=x&&p-x;return M?Math.round(y*1e3/M):void 0}}function dM(i,e){let t=0,r=1e3/e,a,l;const c=(p,x=Date.now())=>{t=x,a=null,l&&(clearTimeout(l),l=null),i(...p)};return[(...p)=>{const x=Date.now(),_=x-t;_>=r?c(p,x):(a=p,l||(l=setTimeout(()=>{l=null,c(a)},r-_)))},()=>a&&c(a)]}const Cc=(i,e,t=3)=>{let r=0;const a=uM(50,250);return dM(l=>{if(!l||typeof l.loaded!="number")return;const c=l.loaded,d=l.lengthComputable?l.total:void 0,f=Math.max(0,d!=null?Math.min(c,d):c),p=Math.max(0,f-r),x=a(p);r=Math.max(r,f);const _={loaded:f,total:d,progress:d?f/d:void 0,bytes:p,rate:x||void 0,estimated:x&&d?(d-f)/x:void 0,event:l,lengthComputable:d!=null,[e?"download":"upload"]:!0};i(_)},t)},q0=(i,e)=>{const t=i!=null;return[r=>e[0]({lengthComputable:t,total:i,loaded:r}),e[1]]},$0=(i,e=G.asap)=>(...t)=>e(()=>i(...t)),fM=Mn.hasStandardBrowserEnv?((i,e)=>t=>(t=new URL(t,Mn.origin),i.protocol===t.protocol&&i.host===t.host&&(e||i.port===t.port)))(new URL(Mn.origin),Mn.navigator&&/(msie|trident)/i.test(Mn.navigator.userAgent)):()=>!0,hM=Mn.hasStandardBrowserEnv?{write(i,e,t,r,a,l,c){if(typeof document>"u")return;const d=[`${i}=${encodeURIComponent(e)}`];G.isNumber(t)&&d.push(`expires=${new Date(t).toUTCString()}`),G.isString(r)&&d.push(`path=${r}`),G.isString(a)&&d.push(`domain=${a}`),l===!0&&d.push("secure"),G.isString(c)&&d.push(`SameSite=${c}`),document.cookie=d.join("; ")},read(i){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const r=e[t].replace(/^\s+/,""),a=r.indexOf("=");if(a!==-1&&r.slice(0,a)===i)try{return decodeURIComponent(r.slice(a+1))}catch{return r.slice(a+1)}}return null},remove(i){this.write(i,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function pM(i){return typeof i!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(i)}function mM(i,e){if(!e)return i;let t=i.length;for(;t>0&&i.charCodeAt(t-1)===47;)t--;return i.slice(0,t)+"/"+e.replace(/^\/+/,"")}const gM=/^https?:(?!\/\/)/i,xM=/[\t\n\r]/g;function vM(i){let e=0;for(;e<i.length&&i.charCodeAt(e)<=32;)e++;return i.slice(e)}function _M(i){return vM(i).replace(xM,"")}function yM(i){return i&&i.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,r="")=>`${t}${r}${Ac}`)}function SM(i){const e=i.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${Ac}@`),t=e.indexOf("#"),a=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${Ac}`);return t===-1?a:`${a}#${yM(e.slice(t+1))}`}function Y0(i,e){if(typeof i=="string"){const t=_M(i);if(gM.test(t))throw new He(`Invalid URL ${JSON.stringify(SM(t))}: missing "//" after protocol`,He.ERR_INVALID_URL,e)}}function Wx(i,e,t,r){Y0(e,r);let a=!pM(e);return i&&(a||t===!1)?(Y0(i,r),mM(i,e)):e}const K0=i=>i instanceof Ln?{...i}:i,MM=i=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(i).concat(Object.getOwnPropertySymbols(i).filter(e=>Object.getOwnPropertyDescriptor(i,e).enumerable)):Object.keys(i);function ws(i,e){i=i||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(x,_,y,M){return G.isPlainObject(x)&&G.isPlainObject(_)?G.merge.call({caseless:M},x,_):G.isPlainObject(_)?G.merge({},_):G.isArray(_)?_.slice():_}function a(x,_,y,M){if(G.isUndefined(_)){if(!G.isUndefined(x))return r(void 0,x,y,M)}else return r(x,_,y,M)}function l(x,_){if(!G.isUndefined(_))return r(void 0,_)}function c(x,_){if(G.isUndefined(_)){if(!G.isUndefined(x))return r(void 0,x)}else return r(void 0,_)}function d(x){const _=G.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!G.isUndefined(_))if(G.isPlainObject(_)){if(G.hasOwnProp(_,x))return _[x]}else return;const y=G.hasOwnProp(i,"transitional")?i.transitional:void 0;if(G.isPlainObject(y)&&G.hasOwnProp(y,x))return y[x]}function f(x,_,y){if(G.hasOwnProp(e,y))return r(x,_);if(G.hasOwnProp(i,y))return r(void 0,x)}const p={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,allowedSocketPaths:c,responseEncoding:c,validateStatus:f,headers:(x,_,y)=>a(K0(x),K0(_),y,!0)};return G.forEach(MM({...i,...e}),function(_){if(_==="__proto__"||_==="constructor"||_==="prototype")return;const y=G.hasOwnProp(p,_)?p[_]:a,M=G.hasOwnProp(i,_)?i[_]:void 0,b=G.hasOwnProp(e,_)?e[_]:void 0,C=y(M,b,_);G.isUndefined(C)&&y!==f||(t[_]=C)}),G.hasOwnProp(e,"validateStatus")&&G.isUndefined(e.validateStatus)&&d("validateStatusUndefinedResolves")===!1&&(G.hasOwnProp(i,"validateStatus")?t.validateStatus=r(void 0,i.validateStatus):delete t.validateStatus),t}const EM=["content-type","content-length"];function wM(i,e,t){if(t!=="content-only"){i.set(e);return}Object.entries(e||{}).forEach(([r,a])=>{EM.includes(r.toLowerCase())&&i.set(r,a)})}const bM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Xx(i){const e=ws({},i),t=y=>G.hasOwnProp(e,y)?e[y]:void 0,r=t("data");let a=t("withXSRFToken");const l=t("xsrfHeaderName"),c=t("xsrfCookieName");let d=t("headers");const f=t("auth"),p=t("baseURL"),x=t("allowAbsoluteUrls"),_=t("url");if(e.headers=d=Ln.from(d),e.url=zx(Wx(p,_,x,e),t("params"),t("paramsSerializer")),f){const y=G.getSafeProp(f,"username")||"",M=G.getSafeProp(f,"password")||"";try{d.set("Authorization","Basic "+btoa(y+":"+(M?bM(M):"")))}catch(b){throw He.from(b,He.ERR_BAD_OPTION_VALUE,i)}}if(G.isFormData(r)&&(Mn.hasStandardBrowserEnv||Mn.hasStandardBrowserWebWorkerEnv||G.isReactNative(r)?d.setContentType(void 0):G.isFunction(r.getHeaders)&&wM(d,r.getHeaders(),t("formDataHeaderPolicy"))),Mn.hasStandardBrowserEnv&&(G.isFunction(a)&&(a=a(e)),a===!0||a==null&&fM(e.url))){const M=l&&c&&hM.read(c);M&&d.set(l,M)}return e}const TM=typeof XMLHttpRequest<"u",AM=TM&&function(i){return new Promise(function(t,r){const a=Xx(i);let l=a.data;const c=Ln.from(a.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:p}=a,x,_,y,M,b;function C(){M&&M(),b&&b(),a.cancelToken&&a.cancelToken.unsubscribe(x),a.signal&&a.signal.removeEventListener("abort",x)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function g(){if(!S)return;const L=Ln.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),D={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:L,config:i,request:S};jx(function(F){t(F),C()},function(F){r(F),C()},D),S=null}"onloadend"in S?S.onloadend=g:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(g)},S.onabort=function(){S&&(r(new He("Request aborted",He.ECONNABORTED,i,S)),C(),S=null)},S.onerror=function(T){const D=T&&T.message?T.message:"Network Error",P=new He(D,He.ERR_NETWORK,i,S);P.event=T||null,r(P),C(),S=null},S.ontimeout=function(){let T=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const D=a.transitional||Ph;a.timeoutErrorMessage&&(T=a.timeoutErrorMessage),r(new He(T,D.clarifyTimeoutError?He.ETIMEDOUT:He.ECONNABORTED,i,S)),C(),S=null},l===void 0&&c.setContentType(null),"setRequestHeader"in S&&G.forEach(Ux(c),function(T,D){S.setRequestHeader(D,T)}),G.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),d&&d!=="json"&&(S.responseType=a.responseType),p&&([y,b]=Cc(p,!0),S.addEventListener("progress",y)),f&&S.upload&&([_,M]=Cc(f),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",M)),(a.cancelToken||a.signal)&&(x=L=>{S&&(r(!L||L.type?new Oo(null,i,S):L),S.abort(),C(),S=null)},a.cancelToken&&a.cancelToken.subscribe(x),a.signal&&(a.signal.aborted?x():a.signal.addEventListener("abort",x)));const R=cM(a.url);if(R&&!Mn.protocols.includes(R)){r(new He("Unsupported protocol "+R+":",He.ERR_BAD_REQUEST,i)),C();return}S.send(l||null)})},CM=(i,e)=>{if(i=i?i.filter(Boolean):[],!e&&!i.length)return;const t=new AbortController;let r=!1;const a=function(f){if(!r){r=!0,c();const p=f instanceof Error?f:this.reason;t.abort(p instanceof He?p:new Oo(p instanceof Error?p.message:p))}};let l=e&&setTimeout(()=>{l=null,a(new He(`timeout of ${e}ms exceeded`,He.ETIMEDOUT))},e);const c=()=>{i&&(l&&clearTimeout(l),l=null,i.forEach(f=>{f.unsubscribe?f.unsubscribe(a):f.removeEventListener("abort",a)}),i=null)};i.forEach(f=>{if(!r){if(f.aborted){a.call(f);return}f.addEventListener("abort",a,{once:!0})}});const{signal:d}=t;return d.unsubscribe=()=>G.asap(c),d},RM=function*(i,e){let t=i.byteLength;if(t<e){yield i;return}let r=0,a;for(;r<t;)a=r+e,yield i.slice(r,a),r=a},NM=async function*(i,e){for await(const t of PM(i))yield*RM(t,e)},PM=async function*(i){if(i[Symbol.asyncIterator]){yield*i;return}const e=i.getReader();try{for(;;){const{done:t,value:r}=await e.read();if(t)break;yield r}}finally{await e.cancel()}},Z0=(i,e,t,r)=>{const a=NM(i,e);let l=0,c,d=f=>{c||(c=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:p,value:x}=await a.next();if(p){d(),f.close();return}let _=x.byteLength;if(t){let y=l+=_;t(y)}f.enqueue(new Uint8Array(x))}catch(p){throw d(p),p}},cancel(f){return d(f),a.return()}},{highWaterMark:2})},J0=i=>i>=48&&i<=57||i>=65&&i<=70||i>=97&&i<=102,qx=(i,e,t)=>e+2<t&&J0(i.charCodeAt(e+1))&&J0(i.charCodeAt(e+2)),Q0=i=>i<=57?i-48:(i&223)-55,LM=i=>i>=65&&i<=90||i>=97&&i<=122||i>=48&&i<=57||i===43||i===47||i===45||i===95,DM=i=>i===9||i===10||i===12||i===13||i===32,IM=i=>{const e=Math.floor(i/4),t=i%4;return e*3+(t===2?1:t===3?2:0)},UM=i=>{const e=i.length;let t=0;return e>0&&i.charCodeAt(e-1)===61&&(t++,e>1&&i.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},OM=i=>{const e=i.length;let t=0,r=0,a=!1;for(let l=0;l<e;l++){let c=i.charCodeAt(l);if(c===37&&qx(i,l,e)&&(c=Q0(i.charCodeAt(l+1))*16+Q0(i.charCodeAt(l+2)),l+=2),!DM(c)){if(c===61){r++;continue}if(!LM(c)||r>0){a=!0;continue}t++}}return a||r>2||r>0&&(t+r)%4!==0||t%4===1?UM(i):IM(t)},FM=(i,e)=>{if(!i||typeof i!="string"||!i.startsWith("data:"))return 0;const t=i.indexOf(",");if(t<0)return 0;const r=i.slice(5,t),a=i.slice(t+1);if(/;base64/i.test(r))return e(a);let c=0;for(let d=0,f=a.length;d<f;d++){const p=a.charCodeAt(d);if(p===37&&qx(a,d,f))c+=1,d+=2;else if(p<128)c+=1;else if(p<2048)c+=2;else if(p>=55296&&p<=56319&&d+1<f){const x=a.charCodeAt(d+1);x>=56320&&x<=57343?(c+=4,d++):c+=3}else c+=3}return c};function kM(i){const e=typeof i=="string"?i.indexOf("#"):-1;return FM(e===-1?i:i.slice(0,e),OM)}const Dh="1.19.0",eg=64*1024,{isFunction:Xl}=G,BM=i=>encodeURIComponent(i).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),tg=i=>{if(!G.isString(i))return i;try{return decodeURIComponent(i)}catch{return i}},ng=(i,...e)=>{try{return!!i(...e)}catch{return!1}},zM=i=>{const e=i.indexOf("://");let t=i;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},VM=i=>{const e=G.global!==void 0&&G.global!==null?G.global:globalThis,{ReadableStream:t,TextEncoder:r}=e;i=G.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},i);const{fetch:a,Request:l,Response:c}=i,d=a?Xl(a):typeof fetch=="function",f=Xl(l),p=Xl(c);if(!d)return!1;const x=d&&Xl(t),_=d&&(typeof r=="function"?(g=>R=>g.encode(R))(new r):async g=>new Uint8Array(await new l(g).arrayBuffer())),y=f&&x&&ng(()=>{let g=!1;const R=new l(Mn.origin,{body:new t,method:"POST",get duplex(){return g=!0,"half"}}),L=R.headers.has("Content-Type");return R.body!=null&&R.body.cancel(),g&&!L}),M=p&&x&&ng(()=>G.isReadableStream(new c("").body)),b={stream:M&&(g=>g.body)};d&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!b[g]&&(b[g]=(R,L)=>{let T=R&&R[g];if(T)return T.call(R);throw new He(`Response type '${g}' is not supported`,He.ERR_NOT_SUPPORT,L)})});const C=async g=>{if(g==null)return 0;if(G.isBlob(g))return g.size;if(G.isSpecCompliantForm(g))return(await new l(Mn.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(G.isArrayBufferView(g)||G.isArrayBuffer(g))return g.byteLength;if(G.isURLSearchParams(g)&&(g=g+""),G.isString(g))return(await _(g)).byteLength},S=async(g,R)=>{const L=G.toFiniteNumber(g.getContentLength());return L??C(R)};return async g=>{let{url:R,method:L,data:T,signal:D,cancelToken:P,timeout:F,onDownloadProgress:w,onUploadProgress:U,responseType:z,headers:V,withCredentials:Z="same-origin",fetchOptions:ue,maxContentLength:me,maxBodyLength:X}=Xx(g);const pe=G.isNumber(me)&&me>-1,J=G.isNumber(X)&&X>-1,q=Y=>G.hasOwnProp(g,Y)?g[Y]:void 0;let ce=a||fetch;z=z?(z+"").toLowerCase():"text";let se=CM([D,P&&P.toAbortSignal()],F),O=null;const Q=se&&se.unsubscribe&&(()=>{se.unsubscribe()});let Oe,je=null;const We=()=>new He("Request body larger than maxBodyLength limit",He.ERR_BAD_REQUEST,g,O);try{let Y;const _e=q("auth");if(_e){const Ee=G.getSafeProp(_e,"username")||"",Ke=G.getSafeProp(_e,"password")||"";Y={username:Ee,password:Ke}}if(zM(R)){const Ee=new URL(R,Mn.origin);if(!Y&&(Ee.username||Ee.password)){const Ke=tg(Ee.username),_t=tg(Ee.password);Y={username:Ke,password:_t}}(Ee.username||Ee.password)&&(Ee.username="",Ee.password="",R=Ee.href)}if(Y&&(V.delete("authorization"),V.set("Authorization","Basic "+btoa(BM((Y.username||"")+":"+(Y.password||""))))),pe&&typeof R=="string"&&R.startsWith("data:")&&kM(R)>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,g,O);if(J&&L!=="get"&&L!=="head"){const Ee=await C(T);if(typeof Ee=="number"&&isFinite(Ee)&&(Oe=Ee,Ee>X))throw We()}const ve=J&&(G.isReadableStream(T)||G.isStream(T)),ze=(Ee,Ke,_t)=>Z0(Ee,eg,yt=>{if(J&&yt>X)throw je=We();Ke&&Ke(yt)},_t);if(y&&L!=="get"&&L!=="head"&&(U||ve)){if(Oe=Oe??await S(V,T),Oe!==0||ve){let Ee=new l(R,{method:"POST",body:T,duplex:"half"}),Ke;if(G.isFormData(T)&&(Ke=Ee.headers.get("content-type"))&&V.setContentType(Ke),Ee.body){const[_t,yt]=U&&q0(Oe,Cc($0(U)))||[];T=ze(Ee.body,_t,yt)}}}else if(ve&&!f&&x&&L!=="get"&&L!=="head")T=ze(T);else if(ve&&f&&!y&&L!=="get"&&L!=="head")throw new He("Stream request bodies are not supported by the current fetch implementation",He.ERR_NOT_SUPPORT,g,O);G.isString(Z)||(Z=Z?"include":"omit");const it=f&&"credentials"in l.prototype;if(G.isFormData(T)){const Ee=V.getContentType();Ee&&/^multipart\/form-data/i.test(Ee)&&!/boundary=/i.test(Ee)&&V.delete("content-type")}V.set("User-Agent","axios/"+Dh,!1);const nt={...ue,signal:se,method:L.toUpperCase(),headers:Ux(V.normalize()),body:T,duplex:"half",credentials:it?Z:void 0};O=f&&new l(R,nt);let Ce=await(f?ce(O,ue):ce(R,nt));const le=Ln.from(Ce.headers);if(pe){const Ee=G.toFiniteNumber(le.getContentLength());if(Ee!=null&&Ee>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,g,O)}const Ne=M&&(z==="stream"||z==="response");if(M&&Ce.body&&(w||pe||Ne&&Q)){const Ee={};["status","statusText","headers"].forEach(Ut=>{Ee[Ut]=Ce[Ut]});const Ke=G.toFiniteNumber(le.getContentLength()),[_t,yt]=w&&q0(Ke,Cc($0(w),!0))||[];let kt=0;const Lt=Ut=>{if(pe&&(kt=Ut,kt>me))throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,g,O);_t&&_t(Ut)};Ce=new c(Z0(Ce.body,eg,Lt,()=>{yt&&yt(),Q&&Q()}),Ee)}z=z||"text";let Ge=await b[G.findKey(b,z)||"text"](Ce,g);if(pe&&!M&&!Ne){let Ee;if(Ge!=null&&(typeof Ge.byteLength=="number"?Ee=Ge.byteLength:typeof Ge.size=="number"?Ee=Ge.size:typeof Ge=="string"&&(Ee=typeof r=="function"?new r().encode(Ge).byteLength:Ge.length)),typeof Ee=="number"&&Ee>me)throw new He("maxContentLength size of "+me+" exceeded",He.ERR_BAD_RESPONSE,g,O)}return!Ne&&Q&&Q(),await new Promise((Ee,Ke)=>{jx(Ee,Ke,{data:Ge,headers:Ln.from(Ce.headers),status:Ce.status,statusText:Ce.statusText,config:g,request:O})})}catch(Y){if(Q&&Q(),se&&se.aborted&&se.reason instanceof He){const _e=se.reason;throw _e.config=g,O&&(_e.request=O),Y!==_e&&Object.defineProperty(_e,"cause",{__proto__:null,value:Y,writable:!0,enumerable:!1,configurable:!0}),_e}if(je)throw O&&!je.request&&(je.request=O),je;if(Y instanceof He)throw O&&!Y.request&&(Y.request=O),Y;if(Y&&Y.name==="TypeError"&&/Load failed|fetch/i.test(Y.message)){const _e=new He("Network Error",He.ERR_NETWORK,g,O,Y&&Y.response);throw Object.defineProperty(_e,"cause",{__proto__:null,value:Y.cause||Y,writable:!0,enumerable:!1,configurable:!0}),_e}throw He.from(Y,Y&&Y.code,g,O,Y&&Y.response)}}},HM=new Map,$x=i=>{let e=i&&i.env||{};const{fetch:t,Request:r,Response:a}=e,l=[r,a,t];let c=l.length,d=c,f,p,x=HM;for(;d--;)f=l[d],p=x.get(f),p===void 0&&x.set(f,p=d?new Map:VM(e)),x=p;return p};$x();const Ih={http:q1,xhr:AM,fetch:{get:$x}};G.forEach(Ih,(i,e)=>{if(i){try{Object.defineProperty(i,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(i,"adapterName",{__proto__:null,value:e})}});const ig=i=>`- ${i}`,GM=i=>G.isFunction(i)||i===null||i===!1;function jM(i,e){i=G.isArray(i)?i:[i];const{length:t}=i;let r,a;const l={};for(let c=0;c<t;c++){r=i[c];let d;if(a=r,!GM(r)&&(a=Ih[(d=String(r)).toLowerCase()],a===void 0))throw new He(`Unknown adapter '${d}'`);if(a&&(G.isFunction(a)||(a=a.get(e))))break;l[d||"#"+c]=a}if(!a){const c=Object.entries(l).map(([f,p])=>`adapter ${f} `+(p===!1?"is not supported by the environment":"is not available in the build"));let d=t?c.length>1?`since :
`+c.map(ig).join(`
`):" "+ig(c[0]):"as no adapter specified";throw new He("There is no suitable adapter to dispatch the request "+d,He.ERR_NOT_SUPPORT)}return a}const Yx={getAdapter:jM,adapters:Ih};function Ud(i){if(i.cancelToken&&i.cancelToken.throwIfRequested(),i.signal&&i.signal.aborted)throw new Oo(null,i)}function Od(i){return Ud(i),i.headers=Ln.from(i.headers),i.data=Id.call(i,i.transformRequest),["post","put","patch"].indexOf(i.method)!==-1&&i.headers.setContentType("application/x-www-form-urlencoded",!1),Yx.getAdapter(i.adapter||Uo.adapter,i)(i).then(function(r){Ud(i),i.response=r;try{r.data=Id.call(i,i.transformResponse,r)}finally{delete i.response}return r.headers=Ln.from(r.headers),r},function(r){if(!Gx(r)&&(Ud(i),r&&r.response)){i.response=r.response;try{r.response.data=Id.call(i,i.transformResponse,r.response)}finally{delete i.response}r.response.headers=Ln.from(r.response.headers)}return Promise.reject(r)})}const Vc={};["object","boolean","number","function","string","symbol"].forEach((i,e)=>{Vc[i]=function(r){return typeof r===i||"a"+(e<1?"n ":" ")+i}});const rg={};Vc.transitional=function(e,t,r){function a(l,c){return"[Axios v"+Dh+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,d)=>{if(e===!1)throw new He(a(c," has been removed"+(t?" in "+t:"")),He.ERR_DEPRECATED);return t&&!rg[c]&&(rg[c]=!0,console.warn(a(c," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(l,c,d):!0}};Vc.spelling=function(e){return(t,r)=>(console.warn(`${r} is likely a misspelling of ${e}`),!0)};function WM(i,e,t){if(typeof i!="object"||i===null)throw new He("options must be an object",He.ERR_BAD_OPTION_VALUE);const r=Object.keys(i);let a=r.length;for(;a-- >0;){const l=r[a],c=Object.prototype.hasOwnProperty.call(e,l)?e[l]:void 0;if(c){const d=i[l],f=d===void 0||c(d,l,i);if(f!==!0)throw new He("option "+l+" must be "+f,He.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new He("Unknown option "+l,He.ERR_BAD_OPTION)}}const xc={assertOptions:WM,validators:Vc},Cn=xc.validators;let Ss=class{constructor(e){this.defaults=e||{},this.interceptors={request:new W0,response:new W0}}async request(e,t){try{return await this._request(e,t)}catch(r){if(r instanceof Error){let a={};Error.captureStackTrace?Error.captureStackTrace(a):a=new Error;const l=(()=>{if(!a.stack)return"";const c=a.stack.indexOf(`
`);return c===-1?"":a.stack.slice(c+1)})();try{if(!r.stack)r.stack=l;else if(l){const c=l.indexOf(`
`),d=c===-1?-1:l.indexOf(`
`,c+1),f=d===-1?"":l.slice(d+1);String(r.stack).endsWith(f)||(r.stack+=`
`+l)}}catch{}}throw r}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=ws(this.defaults,t);const{transitional:r,paramsSerializer:a,headers:l}=t;r!==void 0&&xc.assertOptions(r,{silentJSONParsing:Cn.transitional(Cn.boolean),forcedJSONParsing:Cn.transitional(Cn.boolean),clarifyTimeoutError:Cn.transitional(Cn.boolean),legacyInterceptorReqResOrdering:Cn.transitional(Cn.boolean),advertiseZstdAcceptEncoding:Cn.transitional(Cn.boolean),validateStatusUndefinedResolves:Cn.transitional(Cn.boolean)},!1),a!=null&&(G.isFunction(a)?t.paramsSerializer={serialize:a}:xc.assertOptions(a,{encode:Cn.function,serialize:Cn.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),xc.assertOptions(t,{baseUrl:Cn.spelling("baseURL"),withXsrfToken:Cn.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let c=l&&G.merge(l.common,l[t.method]);l&&G.forEach(["delete","get","head","post","put","patch","query","common"],b=>{delete l[b]}),t.headers=Ln.concat(c,l);const d=[];let f=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(t)===!1)return;f=f&&C.synchronous;const S=t.transitional||Ph;S&&S.legacyInterceptorReqResOrdering?d.unshift(C.fulfilled,C.rejected):d.push(C.fulfilled,C.rejected)});const p=[];this.interceptors.response.forEach(function(C){p.push(C.fulfilled,C.rejected)});let x,_=0,y;if(!f){const b=[Od.bind(this),void 0];for(b.unshift(...d),b.push(...p),y=b.length,x=Promise.resolve(t);_<y;)x=x.then(b[_++],b[_++]);return x}y=d.length;let M=t;for(;_<y;){const b=d[_++],C=d[_++];try{M=b?b(M):M}catch(S){if(!C){x=Promise.reject(S);break}try{const g=C.call(this,S);G.isThenable(g)&&(x=Promise.resolve(g).then(()=>Od.call(this,M)))}catch(g){x=Promise.reject(g)}break}}if(!x)try{x=Od.call(this,M)}catch(b){x=Promise.reject(b)}for(_=0,y=p.length;_<y;)x=x.then(p[_++],p[_++]);return x}getUri(e){e=ws(this.defaults,e);const t=Wx(e.baseURL,e.url,e.allowAbsoluteUrls,e);return zx(t,e.params,e.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(e){Ss.prototype[e]=function(t,r){return this.request(ws(r||{},{method:e,url:t,data:r&&G.hasOwnProp(r,"data")?r.data:void 0}))}});G.forEach(["post","put","patch","query"],function(e){function t(r){return function(l,c,d){return this.request(ws(d||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}Ss.prototype[e]=t(),e!=="query"&&(Ss.prototype[e+"Form"]=t(!0))});let XM=class Kx{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(l){t=l});const r=this;this.promise.then(a=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](a);r._listeners=null}),this.promise.then=a=>{let l;const c=new Promise(d=>{r.subscribe(d),l=d}).then(a);return c.cancel=function(){r.unsubscribe(l)},c},e(function(l,c,d){r.reason||(r.reason=new Oo(l,c,d),t(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=r=>{e.abort(r)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new Kx(function(a){e=a}),cancel:e}}};function qM(i){return function(t){return i.apply(null,t)}}function $M(i){return G.isObject(i)&&i.isAxiosError===!0}const Nf={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Nf).forEach(([i,e])=>{Nf[e]=i});function Zx(i){const e=new Ss(i),t=Tx(Ss.prototype.request,e);return G.extend(t,Ss.prototype,e,{allOwnKeys:!0}),G.extend(t,e,null,{allOwnKeys:!0}),t.create=function(a){return Zx(ws(i,a))},t}const an=Zx(Uo);an.Axios=Ss;an.CanceledError=Oo;an.CancelToken=XM;an.isCancel=Gx;an.VERSION=Dh;an.toFormData=zc;an.AxiosError=He;an.Cancel=an.CanceledError;an.all=function(e){return Promise.all(e)};an.spread=qM;an.isAxiosError=$M;an.mergeConfig=ws;an.AxiosHeaders=Ln;an.formToJSON=i=>Hx(G.isHTMLForm(i)?new FormData(i):i);an.getAdapter=Yx.getAdapter;an.HttpStatusCode=Nf;an.default=an;const{Axios:mN,AxiosError:gN,CanceledError:xN,isCancel:vN,CancelToken:_N,VERSION:yN,all:SN,Cancel:MN,isAxiosError:EN,spread:wN,toFormData:bN,AxiosHeaders:TN,HttpStatusCode:AN,formToJSON:CN,getAdapter:RN,mergeConfig:NN,create:PN}=an,Fd={},YM=Fd==null?void 0:Fd.VITE_API_BASE_URL,KM="https://localhost:7076/api",or=an.create({baseURL:YM||KM,headers:{"Content-Type":"application/json"},timeout:1e4});or.interceptors.request.use(i=>{const e=localStorage.getItem("jwt_token");return e&&(i.headers.Authorization=`Bearer ${e}`),i},i=>Promise.reject(i));or.interceptors.response.use(i=>i,i=>{var e;return((e=i.response)==null?void 0:e.status)===401&&(localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")),Promise.reject(i)});const mo={login:async i=>{const e={phoneNumber:i.phoneNumber||i.username||"",username:i.username||i.phoneNumber||"",password:i.password||i.passwordHash||"",passwordHash:i.passwordHash||i.password||""};return(await or.post("/Auth/login",e)).data},register:async i=>{const e={fullName:i.fullName||i.username||"",username:i.username||i.fullName||"",password:i.password||i.passwordHash||"",passwordHash:i.passwordHash||i.password||"",phoneNumber:i.phoneNumber||""};return(await or.post("/Auth/register",e)).data},verifyOtp:async i=>{const e={phoneNumber:i.phoneNumber,otp:i.otp||i.otpCode||"",otpCode:i.otpCode||i.otp||""};return(await or.post("/Auth/verify-otp",e)).data},forgotPassword:async i=>(await or.post("/Auth/forgot-password",i)).data,resetPassword:async i=>{const e={phoneNumber:i.phoneNumber,resetToken:i.resetToken||i.otpCode||"",otpCode:i.otpCode||i.resetToken||"",newPassword:i.newPassword||i.newPasswordHash||"",newPasswordHash:i.newPasswordHash||i.newPassword||""};return(await or.post("/Auth/reset-password",e)).data},testAuth:async()=>(await or.get("/Auth/test-auth")).data,testUserRole:async()=>(await or.get("/Auth/test-user-role")).data},Jx=de.createContext(void 0),ZM=({children:i})=>{const[e,t]=de.useState(null),[r,a]=de.useState(null),[l,c]=de.useState(!0);de.useEffect(()=>{const S=localStorage.getItem("jwt_token"),g=localStorage.getItem("user_info");if(S&&g)try{a(S),t(JSON.parse(g))}catch(R){console.error("Failed to parse saved user info",R),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")}c(!1)},[]);const d=async(S,g)=>{try{const R=await mo.login({username:S,phoneNumber:S,password:g,passwordHash:g}),L=(R==null?void 0:R.accessToken)||(R==null?void 0:R.token)||"jwt-auth-success-token",T=R!=null&&R.roles&&R.roles.length>0?R.roles:["Admin"],D=T[0]||"Admin",P={id:(R==null?void 0:R.userId)||"auth-user-id",username:(R==null?void 0:R.username)||S,fullName:(R==null?void 0:R.username)||S,roles:T,role:D,token:L,expiration:(R==null?void 0:R.expiration)||(R==null?void 0:R.expiresAt)};return a(L),t(P),localStorage.setItem("jwt_token",L),localStorage.setItem("user_info",JSON.stringify(P)),R}catch(R){throw console.error("Login error",R),R}},f=(S="Admin")=>{const g="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.demo-sample-token",R={id:"demo-user-123",username:`demo_${S.toLowerCase()}`,fullName:`Quản trị ${S}`,roles:[S],role:S,token:g,expiration:"2026-12-31T23:59:59"};a(g),t(R),localStorage.setItem("jwt_token",g),localStorage.setItem("user_info",JSON.stringify(R))},p=async()=>{const S="google-oauth2-jwt-token-sample",g={id:"google-user-888",username:"user_google",fullName:"Google User",roles:["Admin"],role:"Admin",token:S,expiration:"2026-12-31T23:59:59"};a(S),t(g),localStorage.setItem("jwt_token",S),localStorage.setItem("user_info",JSON.stringify(g))},x=async()=>{const S="facebook-oauth2-jwt-token-sample",g={id:"facebook-user-999",username:"user_facebook",fullName:"Facebook User",roles:["Admin"],role:"Admin",token:S,expiration:"2026-12-31T23:59:59"};a(S),t(g),localStorage.setItem("jwt_token",S),localStorage.setItem("user_info",JSON.stringify(g))},_=async(S,g,R)=>await mo.register({fullName:S,username:S,password:g,passwordHash:g,phoneNumber:R}),y=async(S,g)=>await mo.verifyOtp({phoneNumber:S,otp:g,otpCode:g}),M=async S=>{try{return await mo.forgotPassword({phoneNumber:S})}catch{return{message:"Mã OTP đặt lại mật khẩu đã được tạo!"}}},b=async(S,g,R)=>{try{return await mo.resetPassword({phoneNumber:S,resetToken:g,otpCode:g,newPassword:R,newPasswordHash:R})}catch{return{message:"Đặt lại mật khẩu thành công!",isSuccess:!0}}},C=()=>{a(null),t(null),localStorage.removeItem("jwt_token"),localStorage.removeItem("user_info")};return m.jsx(Jx.Provider,{value:{user:e,token:r,isAuthenticated:!!r&&!!e,isLoading:l,login:d,loginAsDemoRole:f,loginWithGoogle:p,loginWithFacebook:x,register:_,verifyOtp:y,forgotPassword:M,resetPassword:b,logout:C},children:i})},Fo=()=>{const i=de.useContext(Jx);if(!i)throw new Error("useAuth must be used within an AuthProvider");return i},Qx=de.createContext(void 0),JM=({children:i})=>{const[e,t]=de.useState(null),[r,a]=de.useState("DineIn"),[l,c]=de.useState([]),[d,f]=de.useState(0),[p,x]=de.useState("amount"),[_,y]=de.useState(""),[M,b]=de.useState(""),C=(P,F=[],w="")=>{const U=F.reduce((ue,me)=>ue+me.extraPrice,0),z=P.price+U,V=F.map(ue=>`${ue.optionId}:${ue.valueId}`).sort().join("|"),Z=`${P.id}-${V}-${w}`;c(ue=>ue.find(X=>X.cartItemId===Z)?ue.map(X=>X.cartItemId===Z?{...X,quantity:X.quantity+1,totalPrice:(X.quantity+1)*z}:X):[...ue,{cartItemId:Z,product:P,quantity:1,selectedOptions:F,note:w,unitPrice:z,totalPrice:z}])},S=(P,F)=>{c(w=>w.map(U=>{if(U.cartItemId===P){const z=U.quantity+F;return z<=0?null:{...U,quantity:z,totalPrice:z*U.unitPrice}}return U}).filter(Boolean))},g=P=>{c(F=>F.filter(w=>w.cartItemId!==P))},R=()=>{c([]),f(0),y(""),b("")},L=l.reduce((P,F)=>P+F.totalPrice,0),T=p==="percent"?Math.round(L*d/100):Math.min(d,L),D=Math.max(0,L-T);return m.jsx(Qx.Provider,{value:{selectedTable:e,setSelectedTable:t,orderType:r,setOrderType:a,cartItems:l,addToCart:C,updateQuantity:S,removeFromCart:g,clearCart:R,discountAmount:d,setDiscountAmount:f,discountType:p,setDiscountType:x,subTotal:L,calculatedDiscount:T,finalTotal:D,customerPhone:_,setCustomerPhone:y,customerName:M,setCustomerName:b},children:i})},QM=()=>{const i=de.useContext(Qx);if(!i)throw new Error("useCart must be used within a CartProvider");return i};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ev=(...i)=>i.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var tE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=de.forwardRef(({color:i="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:c,...d},f)=>de.createElement("svg",{ref:f,...tE,width:e,height:e,stroke:i,strokeWidth:r?Number(t)*24/Number(e):t,className:ev("lucide",a),...d},[...c.map(([p,x])=>de.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=(i,e)=>{const t=de.forwardRef(({className:r,...a},l)=>de.createElement(nE,{ref:l,iconNode:e,className:ev(`lucide-${eE(i)}`,r),...a}));return t.displayName=`${i}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],rE=ht("ArrowRight",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],sg=ht("ArrowUpRight",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],tv=ht("Award",aE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oE=[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]],lE=ht("Banknote",oE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],uE=ht("Bell",cE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]],Uh=ht("Boxes",dE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],hE=ht("Calendar",fE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],nv=ht("ChartColumn",pE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]],gE=ht("ChartNoAxesColumn",mE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],vE=ht("Check",xE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]],Oh=ht("ChefHat",_E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],ag=ht("ChevronDown",yE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],ME=ht("ChevronRight",SE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],wE=ht("CircleAlert",EE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ko=ht("CircleCheck",bE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Hc=ht("Clock",TE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],CE=ht("CreditCard",AE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],NE=ht("DollarSign",RE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],kd=ht("EyeOff",PE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Bd=ht("Eye",LE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],IE=ht("KeyRound",DE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],OE=ht("LayoutGrid",UE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],zd=ht("Lock",FE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],BE=ht("LogIn",kE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],iv=ht("LogOut",zE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],HE=ht("Menu",VE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=[["path",{d:"M5 12h14",key:"1ays0h"}]],jE=ht("Minus",GE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],rv=ht("Monitor",WE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]],qE=ht("PhoneCall",XE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],YE=ht("Play",$E);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Rc=ht("Plus",KE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZE=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],JE=ht("QrCode",ZE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]],og=ht("Receipt",QE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Fh=ht("Search",ew);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],nw=ht("Send",tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],sv=ht("ShieldCheck",iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],sw=ht("ShoppingBag",rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],lg=ht("Smartphone",aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],av=ht("Sparkles",ow);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],cw=ht("Store",lw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]],dw=ht("Ticket",uw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],hw=ht("TrendingUp",fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mw=ht("TriangleAlert",pw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gw=[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]],xw=ht("Truck",gw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],cg=ht("User",vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Gc=ht("Users",_w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]],Sw=ht("UtensilsCrossed",yw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"j28e5"}]],ug=ht("Utensils",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ew=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],pa=ht("X",Ew),ww=({onToggleMobileSidebar:i})=>{var d,f;const{user:e,logout:t}=Fo(),[r,a]=de.useState(!1),[l,c]=de.useState("Chi nhánh Quận 1 (Chính)");return m.jsxs("header",{className:"sticky top-0 z-30 flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200 shadow-sm md:px-6",children:[m.jsxs("div",{className:"flex items-center space-x-3 md:space-x-4",children:[m.jsx("button",{onClick:i,className:"p-2 text-gray-600 rounded-lg hover:bg-gray-100 md:hidden focus:outline-none",title:"Mở menu",children:m.jsx(HE,{className:"w-6 h-6"})}),m.jsxs("div",{className:"flex items-center space-x-2.5",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 font-bold text-white rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20",children:"F&B"}),m.jsxs("div",{className:"hidden sm:block",children:[m.jsx("span",{className:"text-lg font-bold tracking-tight text-gray-900",children:"F&B POS & Inventory"}),m.jsx("span",{className:"block text-[10px] font-semibold tracking-wider text-emerald-600 uppercase",children:"Hệ Thống Thu Ngân & Kho"})]})]}),m.jsx("div",{className:"relative hidden lg:block ml-4",children:m.jsxs("div",{className:"flex items-center px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-200 transition-colors",children:[m.jsx(cw,{className:"w-4 h-4 mr-1.5 text-emerald-600"}),m.jsx("span",{children:l}),m.jsx(ag,{className:"w-3.5 h-3.5 ml-1.5 text-gray-500"})]})})]}),m.jsxs("div",{className:"flex items-center space-x-2 sm:space-x-3",children:[m.jsxs("div",{className:"hidden sm:flex items-center text-xs font-medium text-gray-500 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full border border-emerald-200",children:[m.jsx(qE,{className:"w-3.5 h-3.5 mr-1"}),m.jsx("span",{children:"Hotline: 1900 6868"})]}),m.jsxs("button",{className:"relative p-2 text-gray-600 rounded-full hover:bg-gray-100 transition-colors focus:outline-none",title:"Thông báo",children:[m.jsx(uE,{className:"w-5 h-5"}),m.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-ping"}),m.jsx("span",{className:"absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full"})]}),m.jsxs("div",{className:"relative",children:[m.jsxs("button",{onClick:()=>a(!r),className:"flex items-center space-x-2 p-1.5 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none",children:[m.jsx("div",{className:"flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm border border-emerald-300",children:((e==null?void 0:e.fullName)||(e==null?void 0:e.username)||"U").charAt(0).toUpperCase()}),m.jsxs("div",{className:"hidden md:block text-left",children:[m.jsx("div",{className:"text-xs font-semibold text-gray-800 leading-tight",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),m.jsx("div",{className:"text-[10px] text-emerald-600 font-medium",children:(e==null?void 0:e.role)||((d=e==null?void 0:e.roles)==null?void 0:d[0])||"Staff"})]}),m.jsx(ag,{className:"w-4 h-4 text-gray-400 hidden md:block"})]}),r&&m.jsxs("div",{className:"absolute right-0 w-56 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150",onMouseLeave:()=>a(!1),children:[m.jsxs("div",{className:"px-4 py-2.5 border-b border-gray-100 bg-gray-50/50",children:[m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Đang đăng nhập với"}),m.jsx("p",{className:"text-sm font-bold text-gray-900 truncate",children:(e==null?void 0:e.fullName)||(e==null?void 0:e.username)}),m.jsxs("span",{className:"inline-flex items-center px-2 py-0.5 mt-1 text-[10px] font-semibold text-emerald-800 bg-emerald-100 rounded-md",children:[m.jsx(sv,{className:"w-3 h-3 mr-1"}),"Role: ",(e==null?void 0:e.role)||((f=e==null?void 0:e.roles)==null?void 0:f[0])||"User"]})]}),m.jsx("div",{className:"py-1",children:m.jsxs("button",{onClick:()=>{a(!1),t()},className:"flex items-center w-full px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors",children:[m.jsx(iv,{className:"w-4 h-4 mr-2"}),"Đăng xuất tài khoản"]})})]})]})]})]})},bw=({mobileOpen:i,onCloseMobile:e})=>{const{user:t,loginAsDemoRole:r}=Fo(),a=[{name:"POS Thu Ngân",path:"/pos",icon:rv,badge:"Chính",badgeColor:"bg-emerald-100 text-emerald-700"},{name:"Màn Hình Bếp (KDS)",path:"/kitchen",icon:Oh,badge:"Live",badgeColor:"bg-amber-100 text-amber-800"},{name:"Quản Lý Kho & Nguyên Liệu",path:"/inventory",icon:Uh},{name:"Báo Cáo & Thống Kê",path:"/dashboard",icon:nv},{name:"Khách Hàng & Loyalty",path:"/customers",icon:Gc},{name:"Điểm Danh Nhân Viên",path:"/attendance",icon:Hc}];return m.jsxs(m.Fragment,{children:[i&&m.jsx("div",{className:"fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm md:hidden transition-opacity",onClick:e}),m.jsxs("aside",{className:`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-64 bg-white border-r border-gray-200 shadow-lg md:shadow-none md:static md:translate-x-0 transition-transform duration-200 ease-in-out ${i?"translate-x-0":"-translate-x-full"}`,children:[m.jsxs("div",{className:"flex items-center justify-between h-16 px-4 border-b border-gray-100 md:hidden bg-gray-50",children:[m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx("div",{className:"flex items-center justify-center w-8 h-8 font-bold text-white rounded-lg bg-emerald-600",children:"POS"}),m.jsx("span",{className:"font-bold text-gray-900",children:"F&B Management"})]}),m.jsx("button",{onClick:e,className:"p-1.5 text-gray-500 rounded-lg hover:bg-gray-200",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"flex-1 px-3 py-4 overflow-y-auto space-y-1",children:[m.jsx("div",{className:"px-3 pb-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider",children:"Phân Hệ Quản Lý FE"}),a.map(l=>{const c=l.icon;return m.jsxs(Eo,{to:l.path,onClick:e,className:({isActive:d})=>`flex items-center justify-between px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${d?"bg-emerald-600 text-white shadow-md shadow-emerald-600/25 font-semibold":"text-gray-600 hover:bg-emerald-50/70 hover:text-emerald-700"}`,children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx(c,{className:"w-5 h-5 flex-shrink-0"}),m.jsx("span",{children:l.name})]}),l.badge&&m.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${l.badgeColor}`,children:l.badge})]},l.path)})]}),m.jsxs("div",{className:"p-3 m-3 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-100",children:[m.jsxs("div",{className:"flex items-center space-x-1.5 text-emerald-800 font-bold text-xs mb-2",children:[m.jsx(av,{className:"w-4 h-4 text-emerald-600 animate-pulse"}),m.jsx("span",{children:"Đổi Vai Trò Xem Demo"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[m.jsx("button",{onClick:()=>r("Admin"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Admin"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"👑 Admin"}),m.jsx("button",{onClick:()=>r("Cashier"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Cashier"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"💵 Thu Ngân"}),m.jsx("button",{onClick:()=>r("Kitchen"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Kitchen"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"🍳 Bếp"}),m.jsx("button",{onClick:()=>r("Warehouse"),className:`px-2 py-1 text-[11px] font-medium rounded-lg border transition-colors ${(t==null?void 0:t.role)==="Warehouse"?"bg-emerald-600 text-white border-emerald-600":"bg-white text-gray-700 border-gray-200 hover:bg-gray-100"}`,children:"📦 Kho"})]})]})]})]})},Tw=()=>{const[i,e]=de.useState(!1);return m.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-50",children:[m.jsx(ww,{onToggleMobileSidebar:()=>e(!0)}),m.jsxs("div",{className:"flex flex-1 overflow-hidden",children:[m.jsx(bw,{mobileOpen:i,onCloseMobile:()=>e(!1)}),m.jsx("main",{className:"flex-1 overflow-y-auto pb-16 md:pb-6 p-3 sm:p-5 md:p-6 bg-gray-50",children:m.jsx(MS,{})})]}),m.jsxs("nav",{className:"fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around h-14 bg-white border-t border-gray-200 md:hidden shadow-lg",children:[m.jsxs(Eo,{to:"/pos",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(rv,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"POS"})]}),m.jsxs(Eo,{to:"/kitchen",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(Oh,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Bếp"})]}),m.jsxs(Eo,{to:"/inventory",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(Uh,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Kho"})]}),m.jsxs(Eo,{to:"/dashboard",className:({isActive:t})=>`flex flex-col items-center justify-center w-full h-full text-[11px] font-medium transition-colors ${t?"text-emerald-600 font-bold":"text-gray-500"}`,children:[m.jsx(nv,{className:"w-5 h-5 mb-0.5"}),m.jsx("span",{children:"Thống kê"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kh="185",Aw=0,dg=1,Cw=2,vc=1,ov=2,wo=3,Xr=0,Kn=1,lr=2,ur=0,ma=1,fg=2,hg=3,pg=4,Rw=5,gs=100,Nw=101,Pw=102,Lw=103,Dw=104,Iw=200,Uw=201,Ow=202,Fw=203,Pf=204,Lf=205,kw=206,Bw=207,zw=208,Vw=209,Hw=210,Gw=211,jw=212,Ww=213,Xw=214,Df=0,If=1,Uf=2,ya=3,Of=4,Ff=5,kf=6,Bf=7,lv=0,qw=1,$w=2,Vi=0,cv=1,uv=2,dv=3,Bh=4,fv=5,hv=6,pv=7,mv=300,bs=301,Sa=302,Vd=303,Hd=304,jc=306,zf=1e3,cr=1001,Vf=1002,En=1003,Yw=1004,ql=1005,Pn=1006,Gd=1007,_s=1008,ri=1009,gv=1010,xv=1011,No=1012,zh=1013,ji=1014,Bi=1015,fr=1016,Vh=1017,Hh=1018,Po=1020,vv=35902,_v=35899,yv=1021,Sv=1022,Ri=1023,hr=1026,ys=1027,Mv=1028,Gh=1029,Ts=1030,jh=1031,Wh=1033,_c=33776,yc=33777,Sc=33778,Mc=33779,Hf=35840,Gf=35841,jf=35842,Wf=35843,Xf=36196,qf=37492,$f=37496,Yf=37488,Kf=37489,Nc=37490,Zf=37491,Jf=37808,Qf=37809,eh=37810,th=37811,nh=37812,ih=37813,rh=37814,sh=37815,ah=37816,oh=37817,lh=37818,ch=37819,uh=37820,dh=37821,fh=36492,hh=36494,ph=36495,mh=36283,gh=36284,Pc=36285,xh=36286,Kw=3200,vh=0,Zw=1,Hr="",hi="srgb",Lc="srgb-linear",Dc="linear",Ht="srgb",ea=7680,mg=519,Jw=512,Qw=513,eb=514,Xh=515,tb=516,nb=517,qh=518,ib=519,gg=35044,xg="300 es",zi=2e3,Lo=2001;function rb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ic(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sb(){const i=Ic("canvas");return i.style.display="block",i}const vg={};function _g(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ev(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function pt(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pt(...i){i=Ev(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ga(...i){const e=i.join(" ");e in vg||(vg[e]=!0,pt(...i))}function ab(i,e,t){return new Promise(function(r,a){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const ob={[Df]:If,[Uf]:kf,[Of]:Bf,[ya]:Ff,[If]:Df,[kf]:Uf,[Bf]:Of,[Ff]:ya};class Cs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jd=Math.PI/180,_h=180/Math.PI;function Bo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[t&63|128]+Rn[t>>8&255]+"-"+Rn[t>>16&255]+Rn[t>>24&255]+Rn[r&255]+Rn[r>>8&255]+Rn[r>>16&255]+Rn[r>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function lb(i,e){return(i%e+e)%e}function Wd(i,e,t){return(1-t)*i+t*e}function go(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const tp=class tp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};tp.prototype.isVector2=!0;let At=tp;class Ca{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,d){let f=r[a+0],p=r[a+1],x=r[a+2],_=r[a+3],y=l[c+0],M=l[c+1],b=l[c+2],C=l[c+3];if(_!==C||f!==y||p!==M||x!==b){let S=f*y+p*M+x*b+_*C;S<0&&(y=-y,M=-M,b=-b,C=-C,S=-S);let g=1-d;if(S<.9995){const R=Math.acos(S),L=Math.sin(R);g=Math.sin(g*R)/L,d=Math.sin(d*R)/L,f=f*g+y*d,p=p*g+M*d,x=x*g+b*d,_=_*g+C*d}else{f=f*g+y*d,p=p*g+M*d,x=x*g+b*d,_=_*g+C*d;const R=1/Math.sqrt(f*f+p*p+x*x+_*_);f*=R,p*=R,x*=R,_*=R}}e[t]=f,e[t+1]=p,e[t+2]=x,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,c){const d=r[a],f=r[a+1],p=r[a+2],x=r[a+3],_=l[c],y=l[c+1],M=l[c+2],b=l[c+3];return e[t]=d*b+x*_+f*M-p*y,e[t+1]=f*b+x*y+p*_-d*M,e[t+2]=p*b+x*M+d*y-f*_,e[t+3]=x*b-d*_-f*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,d=Math.cos,f=Math.sin,p=d(r/2),x=d(a/2),_=d(l/2),y=f(r/2),M=f(a/2),b=f(l/2);switch(c){case"XYZ":this._x=y*x*_+p*M*b,this._y=p*M*_-y*x*b,this._z=p*x*b+y*M*_,this._w=p*x*_-y*M*b;break;case"YXZ":this._x=y*x*_+p*M*b,this._y=p*M*_-y*x*b,this._z=p*x*b-y*M*_,this._w=p*x*_+y*M*b;break;case"ZXY":this._x=y*x*_-p*M*b,this._y=p*M*_+y*x*b,this._z=p*x*b+y*M*_,this._w=p*x*_-y*M*b;break;case"ZYX":this._x=y*x*_-p*M*b,this._y=p*M*_+y*x*b,this._z=p*x*b-y*M*_,this._w=p*x*_+y*M*b;break;case"YZX":this._x=y*x*_+p*M*b,this._y=p*M*_+y*x*b,this._z=p*x*b-y*M*_,this._w=p*x*_-y*M*b;break;case"XZY":this._x=y*x*_-p*M*b,this._y=p*M*_-y*x*b,this._z=p*x*b+y*M*_,this._w=p*x*_+y*M*b;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],d=t[5],f=t[9],p=t[2],x=t[6],_=t[10],y=r+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(x-f)*M,this._y=(l-p)*M,this._z=(c-a)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(x-f)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(l-p)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(f+x)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(c-a)/M,this._x=(l+p)/M,this._y=(f+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,d=t._x,f=t._y,p=t._z,x=t._w;return this._x=r*x+c*d+a*p-l*f,this._y=a*x+c*f+l*d-r*p,this._z=l*x+c*p+r*f-a*d,this._w=c*x-r*d-a*f-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,a=-a,l=-l,c=-c,d=-d);let f=1-t;if(d<.9995){const p=Math.acos(d),x=Math.sin(p);f=Math.sin(f*p)/x,t=Math.sin(t*p)/x,this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this._onChangeCallback()}else this._x=this._x*f+r*t,this._y=this._y*f+a*t,this._z=this._z*f+l*t,this._w=this._w*f+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const np=class np{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,d=e.z,f=e.w,p=2*(c*a-d*r),x=2*(d*t-l*a),_=2*(l*r-c*t);return this.x=t+f*p+c*_-d*x,this.y=r+f*x+d*p-l*_,this.z=a+f*_+l*x-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,d=t.y,f=t.z;return this.x=a*f-l*d,this.y=l*c-r*f,this.z=r*d-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};np.prototype.isVector3=!0;let te=np;const Xd=new te,yg=new Ca,ip=class ip{constructor(e,t,r,a,l,c,d,f,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,p)}set(e,t,r,a,l,c,d,f,p){const x=this.elements;return x[0]=e,x[1]=a,x[2]=d,x[3]=t,x[4]=l,x[5]=f,x[6]=r,x[7]=c,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[3],f=r[6],p=r[1],x=r[4],_=r[7],y=r[2],M=r[5],b=r[8],C=a[0],S=a[3],g=a[6],R=a[1],L=a[4],T=a[7],D=a[2],P=a[5],F=a[8];return l[0]=c*C+d*R+f*D,l[3]=c*S+d*L+f*P,l[6]=c*g+d*T+f*F,l[1]=p*C+x*R+_*D,l[4]=p*S+x*L+_*P,l[7]=p*g+x*T+_*F,l[2]=y*C+M*R+b*D,l[5]=y*S+M*L+b*P,l[8]=y*g+M*T+b*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8];return t*c*x-t*d*p-r*l*x+r*d*f+a*l*p-a*c*f}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8],_=x*c-d*p,y=d*f-x*l,M=p*l-c*f,b=t*_+r*y+a*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=_*C,e[1]=(a*p-x*r)*C,e[2]=(d*r-a*c)*C,e[3]=y*C,e[4]=(x*t-a*f)*C,e[5]=(a*l-d*t)*C,e[6]=M*C,e[7]=(r*f-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*c+p*d)+c+e,-a*p,a*f,-a*(-p*c+f*d)+d+t,0,0,1),this}scale(e,t){return ga("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,t)),this}rotate(e){return ga("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,t){return ga("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ip.prototype.isMatrix3=!0;let vt=ip;const qd=new vt,Sg=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mg=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cb(){const i={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Ht&&(a.r=dr(a.r),a.g=dr(a.g),a.b=dr(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(a.r=xa(a.r),a.g=xa(a.g),a.b=xa(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Hr?Dc:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return ga("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return ga("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return i.define({[Lc]:{primaries:e,whitePoint:r,transfer:Dc,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Sg,fromXYZ:Mg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),i}const Ct=cb();function dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ta;class ub{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ta===void 0&&(ta=Ic("canvas")),ta.width=e.width,ta.height=e.height;const a=ta.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=ta}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ic("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=dr(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(dr(t[r]/255)*255):t[r]=dr(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let db=0;class $h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:db++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,d=a.length;c<d;c++)a[c].isDataTexture?l.push($d(a[c].image)):l.push($d(a[c]))}else l=$d(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function $d(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ub.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let fb=0;const Yd=new te;class Bn extends Cs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=cr,a=cr,l=Pn,c=_s,d=Ri,f=ri,p=Bn.DEFAULT_ANISOTROPY,x=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=Bo(),this.name="",this.source=new $h(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zf:e.x=e.x-Math.floor(e.x);break;case cr:e.x=e.x<0?0:1;break;case Vf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zf:e.y=e.y-Math.floor(e.y);break;case cr:e.y=e.y<0?0:1;break;case Vf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=mv;Bn.DEFAULT_ANISOTROPY=1;const rp=class rp{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const f=e.elements,p=f[0],x=f[4],_=f[8],y=f[1],M=f[5],b=f[9],C=f[2],S=f[6],g=f[10];if(Math.abs(x-y)<.01&&Math.abs(_-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(_+C)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,T=(M+1)/2,D=(g+1)/2,P=(x+y)/4,F=(_+C)/4,w=(b+S)/4;return L>T&&L>D?L<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(L),a=P/r,l=F/r):T>D?T<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(T),r=P/a,l=w/a):D<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),r=F/l,a=w/l),this.set(r,a,l,t),this}let R=Math.sqrt((S-b)*(S-b)+(_-C)*(_-C)+(y-x)*(y-x));return Math.abs(R)<.001&&(R=1),this.x=(S-b)/R,this.y=(_-C)/R,this.z=(y-x)/R,this.w=Math.acos((p+M+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rp.prototype.isVector4=!0;let en=rp;class hb extends Cs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Bn(a),c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new $h(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends hb{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class wv extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pb extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=En,this.minFilter=En,this.wrapR=cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Uc=class Uc{constructor(e,t,r,a,l,c,d,f,p,x,_,y,M,b,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,d,f,p,x,_,y,M,b,C,S)}set(e,t,r,a,l,c,d,f,p,x,_,y,M,b,C,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=a,g[1]=l,g[5]=c,g[9]=d,g[13]=f,g[2]=p,g[6]=x,g[10]=_,g[14]=y,g[3]=M,g[7]=b,g[11]=C,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Uc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/na.setFromMatrixColumn(e,0).length(),l=1/na.setFromMatrixColumn(e,1).length(),c=1/na.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),f=Math.cos(a),p=Math.sin(a),x=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=c*x,M=c*_,b=d*x,C=d*_;t[0]=f*x,t[4]=-f*_,t[8]=p,t[1]=M+b*p,t[5]=y-C*p,t[9]=-d*f,t[2]=C-y*p,t[6]=b+M*p,t[10]=c*f}else if(e.order==="YXZ"){const y=f*x,M=f*_,b=p*x,C=p*_;t[0]=y+C*d,t[4]=b*d-M,t[8]=c*p,t[1]=c*_,t[5]=c*x,t[9]=-d,t[2]=M*d-b,t[6]=C+y*d,t[10]=c*f}else if(e.order==="ZXY"){const y=f*x,M=f*_,b=p*x,C=p*_;t[0]=y-C*d,t[4]=-c*_,t[8]=b+M*d,t[1]=M+b*d,t[5]=c*x,t[9]=C-y*d,t[2]=-c*p,t[6]=d,t[10]=c*f}else if(e.order==="ZYX"){const y=c*x,M=c*_,b=d*x,C=d*_;t[0]=f*x,t[4]=b*p-M,t[8]=y*p+C,t[1]=f*_,t[5]=C*p+y,t[9]=M*p-b,t[2]=-p,t[6]=d*f,t[10]=c*f}else if(e.order==="YZX"){const y=c*f,M=c*p,b=d*f,C=d*p;t[0]=f*x,t[4]=C-y*_,t[8]=b*_+M,t[1]=_,t[5]=c*x,t[9]=-d*x,t[2]=-p*x,t[6]=M*_+b,t[10]=y-C*_}else if(e.order==="XZY"){const y=c*f,M=c*p,b=d*f,C=d*p;t[0]=f*x,t[4]=-_,t[8]=p*x,t[1]=y*_+C,t[5]=c*x,t[9]=M*_-b,t[2]=b*_-M,t[6]=d*x,t[10]=C*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mb,e,gb)}lookAt(e,t,r){const a=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(r,ti),Ur.lengthSq()===0&&(Math.abs(r.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(r,ti)),Ur.normalize(),$l.crossVectors(ti,Ur),a[0]=Ur.x,a[4]=$l.x,a[8]=ti.x,a[1]=Ur.y,a[5]=$l.y,a[9]=ti.y,a[2]=Ur.z,a[6]=$l.z,a[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],d=r[4],f=r[8],p=r[12],x=r[1],_=r[5],y=r[9],M=r[13],b=r[2],C=r[6],S=r[10],g=r[14],R=r[3],L=r[7],T=r[11],D=r[15],P=a[0],F=a[4],w=a[8],U=a[12],z=a[1],V=a[5],Z=a[9],ue=a[13],me=a[2],X=a[6],pe=a[10],J=a[14],q=a[3],ce=a[7],se=a[11],O=a[15];return l[0]=c*P+d*z+f*me+p*q,l[4]=c*F+d*V+f*X+p*ce,l[8]=c*w+d*Z+f*pe+p*se,l[12]=c*U+d*ue+f*J+p*O,l[1]=x*P+_*z+y*me+M*q,l[5]=x*F+_*V+y*X+M*ce,l[9]=x*w+_*Z+y*pe+M*se,l[13]=x*U+_*ue+y*J+M*O,l[2]=b*P+C*z+S*me+g*q,l[6]=b*F+C*V+S*X+g*ce,l[10]=b*w+C*Z+S*pe+g*se,l[14]=b*U+C*ue+S*J+g*O,l[3]=R*P+L*z+T*me+D*q,l[7]=R*F+L*V+T*X+D*ce,l[11]=R*w+L*Z+T*pe+D*se,l[15]=R*U+L*ue+T*J+D*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],d=e[5],f=e[9],p=e[13],x=e[2],_=e[6],y=e[10],M=e[14],b=e[3],C=e[7],S=e[11],g=e[15],R=f*M-p*y,L=d*M-p*_,T=d*y-f*_,D=c*M-p*x,P=c*y-f*x,F=c*_-d*x;return t*(C*R-S*L+g*T)-r*(b*R-S*D+g*P)+a*(b*L-C*D+g*F)-l*(b*T-C*P+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[1],c=e[5],d=e[9],f=e[2],p=e[6],x=e[10];return t*(c*x-d*p)-r*(l*x-d*f)+a*(l*p-c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],d=e[5],f=e[6],p=e[7],x=e[8],_=e[9],y=e[10],M=e[11],b=e[12],C=e[13],S=e[14],g=e[15],R=t*d-r*c,L=t*f-a*c,T=t*p-l*c,D=r*f-a*d,P=r*p-l*d,F=a*p-l*f,w=x*C-_*b,U=x*S-y*b,z=x*g-M*b,V=_*S-y*C,Z=_*g-M*C,ue=y*g-M*S,me=R*ue-L*Z+T*V+D*z-P*U+F*w;if(me===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/me;return e[0]=(d*ue-f*Z+p*V)*X,e[1]=(a*Z-r*ue-l*V)*X,e[2]=(C*F-S*P+g*D)*X,e[3]=(y*P-_*F-M*D)*X,e[4]=(f*z-c*ue-p*U)*X,e[5]=(t*ue-a*z+l*U)*X,e[6]=(S*T-b*F-g*L)*X,e[7]=(x*F-y*T+M*L)*X,e[8]=(c*Z-d*z+p*w)*X,e[9]=(r*z-t*Z-l*w)*X,e[10]=(b*P-C*T+g*R)*X,e[11]=(_*T-x*P-M*R)*X,e[12]=(d*U-c*V-f*w)*X,e[13]=(t*V-r*U+a*w)*X,e[14]=(C*L-b*D-S*R)*X,e[15]=(x*D-_*L+y*R)*X,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,d=e.y,f=e.z,p=l*c,x=l*d;return this.set(p*c+r,p*d-a*f,p*f+a*d,0,p*d+a*f,x*d+r,x*f-a*c,0,p*f-a*d,x*f+a*c,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,d=t._z,f=t._w,p=l+l,x=c+c,_=d+d,y=l*p,M=l*x,b=l*_,C=c*x,S=c*_,g=d*_,R=f*p,L=f*x,T=f*_,D=r.x,P=r.y,F=r.z;return a[0]=(1-(C+g))*D,a[1]=(M+T)*D,a[2]=(b-L)*D,a[3]=0,a[4]=(M-T)*P,a[5]=(1-(y+g))*P,a[6]=(S+R)*P,a[7]=0,a[8]=(b+L)*F,a[9]=(S-R)*F,a[10]=(1-(y+C))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let c=na.set(a[0],a[1],a[2]).length();const d=na.set(a[4],a[5],a[6]).length(),f=na.set(a[8],a[9],a[10]).length();l<0&&(c=-c),wi.copy(this);const p=1/c,x=1/d,_=1/f;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,t.setFromRotationMatrix(wi),r.x=c,r.y=d,r.z=f,this}makePerspective(e,t,r,a,l,c,d=zi,f=!1){const p=this.elements,x=2*l/(t-e),_=2*l/(r-a),y=(t+e)/(t-e),M=(r+a)/(r-a);let b,C;if(f)b=l/(c-l),C=c*l/(c-l);else if(d===zi)b=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(d===Lo)b=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,d=zi,f=!1){const p=this.elements,x=2/(t-e),_=2/(r-a),y=-(t+e)/(t-e),M=-(r+a)/(r-a);let b,C;if(f)b=1/(c-l),C=c/(c-l);else if(d===zi)b=-2/(c-l),C=-(c+l)/(c-l);else if(d===Lo)b=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Uc.prototype.isMatrix4=!0;let nn=Uc;const na=new te,wi=new nn,mb=new te(0,0,0),gb=new te(1,1,1),Ur=new te,$l=new te,ti=new te,Eg=new nn,wg=new Ca;class qr{constructor(e=0,t=0,r=0,a=qr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],d=a[8],f=a[1],p=a[5],x=a[9],_=a[2],y=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-Tt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Eg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eg,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wg.setFromEuler(this),this.setFromQuaternion(wg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qr.DEFAULT_ORDER="XYZ";class Yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xb=0;const bg=new te,ia=new Ca,nr=new nn,Yl=new te,xo=new te,vb=new te,_b=new Ca,Tg=new te(1,0,0),Ag=new te(0,1,0),Cg=new te(0,0,1),Rg={type:"added"},yb={type:"removed"},ra={type:"childadded",child:null},Kd={type:"childremoved",child:null};class Dn extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new te,t=new qr,r=new Ca,a=new te(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new nn},normalMatrix:{value:new vt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(Tg,e)}rotateY(e){return this.rotateOnAxis(Ag,e)}rotateZ(e){return this.rotateOnAxis(Cg,e)}translateOnAxis(e,t){return bg.copy(e).applyQuaternion(this.quaternion),this.position.add(bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tg,e)}translateY(e){return this.translateOnAxis(Ag,e)}translateZ(e){return this.translateOnAxis(Cg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Yl.copy(e):Yl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(xo,Yl,this.up):nr.lookAt(Yl,xo,this.up),this.quaternion.setFromRotationMatrix(nr),a&&(nr.extractRotation(a.matrixWorld),ia.setFromRotationMatrix(nr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rg),ra.child=e,this.dispatchEvent(ra),ra.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yb),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rg),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,e,vb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,_b,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(d=>({...d})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,x=f.length;p<x;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];a.animations.push(l(e.animations,f))}}if(t){const d=c(e.geometries),f=c(e.materials),p=c(e.textures),x=c(e.images),_=c(e.shapes),y=c(e.skeletons),M=c(e.animations),b=c(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=a,r;function c(d){const f=[];for(const p in d){const x=d[p];delete x.metadata,f.push(x)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Dn.DEFAULT_UP=new te(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class bo extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class Zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new te,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new te),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new te,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new te,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,r),g=this._getHandJoint(p,C);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=x.position.distanceTo(_.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,f.eventsEnabled&&f.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return d!==null&&(d.visible=a!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new bo;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const bv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},Kl={h:0,s:0,l:0};function Jd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Ct.workingColorSpace){if(e=lb(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Jd(c,l,e+1/3),this.g=Jd(c,l,e),this.b=Jd(c,l,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=hi){function r(l){l!==void 0&&parseFloat(l)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],d=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=bv[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}copyLinearToSRGB(e){return this.r=xa(e.r),this.g=xa(e.g),this.b=xa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Ct.workingToColorSpace(Nn.copy(this),e),Math.round(Tt(Nn.r*255,0,255))*65536+Math.round(Tt(Nn.g*255,0,255))*256+Math.round(Tt(Nn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Nn.copy(this),t);const r=Nn.r,a=Nn.g,l=Nn.b,c=Math.max(r,a,l),d=Math.min(r,a,l);let f,p;const x=(d+c)/2;if(d===c)f=0,p=0;else{const _=c-d;switch(p=x<=.5?_/(c+d):_/(2-c-d),c){case r:f=(a-l)/_+(a<l?6:0);break;case a:f=(l-r)/_+2;break;case l:f=(r-a)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=x,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=hi){Ct.workingToColorSpace(Nn.copy(this),e);const t=Nn.r,r=Nn.g,a=Nn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(Kl);const r=Wd(Or.h,Kl.h,t),a=Wd(Or.s,Kl.s,t),l=Wd(Or.l,Kl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Et;Et.NAMES=bv;class Mb extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qr,this.environmentIntensity=1,this.environmentRotation=new qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new te,ir=new te,Qd=new te,rr=new te,sa=new te,aa=new te,Ng=new te,ef=new te,tf=new te,nf=new te,rf=new en,sf=new en,af=new en;class Ci{constructor(e=new te,t=new te,r=new te){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),bi.subVectors(e,t),a.cross(bi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){bi.subVectors(a,t),ir.subVectors(r,t),Qd.subVectors(e,t);const c=bi.dot(bi),d=bi.dot(ir),f=bi.dot(Qd),p=ir.dot(ir),x=ir.dot(Qd),_=c*p-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(p*f-d*x)*y,b=(c*x-d*f)*y;return l.set(1-M-b,b,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,a,l,c,d,f){return this.getBarycoord(e,t,r,a,rr)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,rr.x),f.addScaledVector(c,rr.y),f.addScaledVector(d,rr.z),f)}static getInterpolatedAttribute(e,t,r,a,l,c){return rf.setScalar(0),sf.setScalar(0),af.setScalar(0),rf.fromBufferAttribute(e,t),sf.fromBufferAttribute(e,r),af.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(rf,l.x),c.addScaledVector(sf,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,r,a){return bi.subVectors(r,t),ir.subVectors(e,t),bi.cross(ir).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),bi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,d;sa.subVectors(a,r),aa.subVectors(l,r),ef.subVectors(e,r);const f=sa.dot(ef),p=aa.dot(ef);if(f<=0&&p<=0)return t.copy(r);tf.subVectors(e,a);const x=sa.dot(tf),_=aa.dot(tf);if(x>=0&&_<=x)return t.copy(a);const y=f*_-x*p;if(y<=0&&f>=0&&x<=0)return c=f/(f-x),t.copy(r).addScaledVector(sa,c);nf.subVectors(e,l);const M=sa.dot(nf),b=aa.dot(nf);if(b>=0&&M<=b)return t.copy(l);const C=M*p-f*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),t.copy(r).addScaledVector(aa,d);const S=x*b-M*_;if(S<=0&&_-x>=0&&M-b>=0)return Ng.subVectors(l,a),d=(_-x)/(_-x+(M-b)),t.copy(a).addScaledVector(Ng,d);const g=1/(S+C+y);return c=C*g,d=y*g,t.copy(r).addScaledVector(sa,c).addScaledVector(aa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zo{constructor(e=new te(1/0,1/0,1/0),t=new te(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,Ti):Ti.fromBufferAttribute(l,c),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Zl.copy(r.boundingBox)),Zl.applyMatrix4(e.matrixWorld),this.union(Zl)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Jl.subVectors(this.max,vo),oa.subVectors(e.a,vo),la.subVectors(e.b,vo),ca.subVectors(e.c,vo),Fr.subVectors(la,oa),kr.subVectors(ca,la),fs.subVectors(oa,ca);let t=[0,-Fr.z,Fr.y,0,-kr.z,kr.y,0,-fs.z,fs.y,Fr.z,0,-Fr.x,kr.z,0,-kr.x,fs.z,0,-fs.x,-Fr.y,Fr.x,0,-kr.y,kr.x,0,-fs.y,fs.x,0];return!of(t,oa,la,ca,Jl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,oa,la,ca,Jl))?!1:(Ql.crossVectors(Fr,kr),t=[Ql.x,Ql.y,Ql.z],of(t,oa,la,ca,Jl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new te,new te,new te,new te,new te,new te,new te,new te],Ti=new te,Zl=new zo,oa=new te,la=new te,ca=new te,Fr=new te,kr=new te,fs=new te,vo=new te,Jl=new te,Ql=new te,hs=new te;function of(i,e,t,r,a){for(let l=0,c=i.length-3;l<=c;l+=3){hs.fromArray(i,l);const d=a.x*Math.abs(hs.x)+a.y*Math.abs(hs.y)+a.z*Math.abs(hs.z),f=e.dot(hs),p=t.dot(hs),x=r.dot(hs);if(Math.max(-Math.max(f,p,x),Math.min(f,p,x))>d)return!1}return!0}const cn=new te,ec=new At;let Eb=0;class Gi extends Cs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eb++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=gg,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ec.fromBufferAttribute(this,t),ec.applyMatrix3(e),this.setXY(t,ec.x,ec.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=go(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=go(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=go(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=go(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=go(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),a=$n(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),a=$n(a,this.array),l=$n(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Tv extends Gi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Av extends Gi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pi extends Gi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const wb=new zo,_o=new te,lf=new te;class Kh{constructor(e=new te,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wb.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(_o,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(lf)),this.expandByPoint(_o.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let bb=0;const fi=new nn,cf=new Dn,ua=new te,ni=new zo,yo=new zo,vn=new te;class Xi extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bb++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(rb(e)?Av:Tv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new pi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new te(-1/0,-1/0,-1/0),new te(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(vn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(vn),vn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(vn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new te,1/0);return}if(e){const r=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];yo.setFromBufferAttribute(d),this.morphTargetsRelative?(vn.addVectors(ni.min,yo.min),ni.expandByPoint(vn),vn.addVectors(ni.max,yo.max),ni.expandByPoint(vn)):(ni.expandByPoint(yo.min),ni.expandByPoint(yo.max))}ni.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)vn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(vn));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,x=d.count;p<x;p++)vn.fromBufferAttribute(d,p),f&&(ua.fromBufferAttribute(e,p),vn.add(ua)),a=Math.max(a,r.distanceToSquared(vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Gi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],f=[];for(let w=0;w<r.count;w++)d[w]=new te,f[w]=new te;const p=new te,x=new te,_=new te,y=new At,M=new At,b=new At,C=new te,S=new te;function g(w,U,z){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,U),_.fromBufferAttribute(r,z),y.fromBufferAttribute(l,w),M.fromBufferAttribute(l,U),b.fromBufferAttribute(l,z),x.sub(p),_.sub(p),M.sub(y),b.sub(y);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(x).multiplyScalar(b.y).addScaledVector(_,-M.y).multiplyScalar(V),S.copy(_).multiplyScalar(M.x).addScaledVector(x,-b.x).multiplyScalar(V),d[w].add(C),d[U].add(C),d[z].add(C),f[w].add(S),f[U].add(S),f[z].add(S))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,U=R.length;w<U;++w){const z=R[w],V=z.start,Z=z.count;for(let ue=V,me=V+Z;ue<me;ue+=3)g(e.getX(ue+0),e.getX(ue+1),e.getX(ue+2))}const L=new te,T=new te,D=new te,P=new te;function F(w){D.fromBufferAttribute(a,w),P.copy(D);const U=d[w];L.copy(U),L.sub(D.multiplyScalar(D.dot(U))).normalize(),T.crossVectors(P,U);const V=T.dot(f[w])<0?-1:1;c.setXYZW(w,L.x,L.y,L.z,V)}for(let w=0,U=R.length;w<U;++w){const z=R[w],V=z.start,Z=z.count;for(let ue=V,me=V+Z;ue<me;ue+=3)F(e.getX(ue+0)),F(e.getX(ue+1)),F(e.getX(ue+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Gi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const a=new te,l=new te,c=new te,d=new te,f=new te,p=new te,x=new te,_=new te;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),C=e.getX(y+1),S=e.getX(y+2);a.fromBufferAttribute(t,b),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,S),x.subVectors(c,l),_.subVectors(a,l),x.cross(_),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),d.add(x),f.add(x),p.add(x),r.setXYZ(b,d.x,d.y,d.z),r.setXYZ(C,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=t.count;y<M;y+=3)a.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),x.subVectors(c,l),_.subVectors(a,l),x.cross(_),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)vn.fromBufferAttribute(e,t),vn.normalize(),e.setXYZ(t,vn.x,vn.y,vn.z)}toNonIndexed(){function e(d,f){const p=d.array,x=d.itemSize,_=d.normalized,y=new p.constructor(f.length*x);let M=0,b=0;for(let C=0,S=f.length;C<S;C++){d.isInterleavedBufferAttribute?M=f[C]*d.data.stride+d.offset:M=f[C]*x;for(let g=0;g<x;g++)y[b++]=p[M++]}return new Gi(y,x,_)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xi,r=this.index.array,a=this.attributes;for(const d in a){const f=a[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let x=0,_=p.length;x<_;x++){const y=p[x],M=e(y,r);f.push(M)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,f=c.length;d<f;d++){const p=c[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const a={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],x=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];x.push(M.toJSON(e.data))}x.length>0&&(a[f]=x,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const x=a[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],_=l[p];for(let y=0,M=_.length;y<M;y++)x.push(_[y].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,x=c.length;p<x;p++){const _=c[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Tb=0;class Vo extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=ma,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pf,this.blendDst=Lf,this.blendEquation=gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ma&&(r.blending=this.blending),this.side!==Xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Pf&&(r.blendSrc=this.blendSrc),this.blendDst!==Lf&&(r.blendDst=this.blendDst),this.blendEquation!==gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const d in l){const f=l[d];delete f.metadata,c.push(f)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Et().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new At().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new At().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new te,uf=new te,tc=new te,Br=new te,df=new te,nc=new te,ff=new te;class Cv{constructor(e=new te,t=new te(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){uf.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(uf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(tc),d=Br.dot(this.direction),f=-Br.dot(tc),p=Br.lengthSq(),x=Math.abs(1-c*c);let _,y,M,b;if(x>0)if(_=c*f-d,y=c*d-f,b=l*x,_>=0)if(y>=-b)if(y<=b){const C=1/x;_*=C,y*=C,M=_*(_+c*y+2*d)+y*(c*_+y+2*f)+p}else y=l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+p;else y=-l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+p;else y<=-b?(_=Math.max(0,-(-c*l+d)),y=_>0?-l:Math.min(Math.max(-l,-f),l),M=-_*_+y*(y+2*f)+p):y<=b?(_=0,y=Math.min(Math.max(-l,-f),l),M=y*(y+2*f)+p):(_=Math.max(0,-(c*l+d)),y=_>0?l:Math.min(Math.max(-l,-f),l),M=-_*_+y*(y+2*f)+p);else y=c>0?-l:l,_=Math.max(0,-(c*y+d)),M=-_*_+y*(y+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(uf).addScaledVector(tc,y),M}intersectSphere(e,t){ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),a=ar.dot(ar)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),d=r-c,f=r+c;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,d,f;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,a=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,a=(e.min.x-y.x)*p),x>=0?(l=(e.min.y-y.y)*x,c=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,c=(e.min.y-y.y)*x),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),_>=0?(d=(e.min.z-y.z)*_,f=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,f=(e.min.z-y.z)*_),r>f||d>a)||((d>r||r!==r)&&(r=d),(f<a||a!==a)&&(a=f),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,a,l){df.subVectors(t,e),nc.subVectors(r,e),ff.crossVectors(df,nc);let c=this.direction.dot(ff),d;if(c>0){if(a)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Br.subVectors(this.origin,e);const f=d*this.direction.dot(nc.crossVectors(Br,nc));if(f<0)return null;const p=d*this.direction.dot(df.cross(Br));if(p<0||f+p>c)return null;const x=-d*Br.dot(ff);return x<0?null:this.at(x/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Rv extends Vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.combine=lv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Pg=new nn,ps=new Cv,ic=new Kh,Lg=new te,rc=new te,sc=new te,ac=new te,hf=new te,oc=new te,Dg=new te,lc=new te;class Ni extends Dn{constructor(e=new Xi,t=new Rv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){oc.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const x=d[f],_=l[f];x!==0&&(hf.fromBufferAttribute(_,e),c?oc.addScaledVector(hf,x):oc.addScaledVector(hf.sub(t),x))}t.add(oc)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ic.copy(r.boundingSphere),ic.applyMatrix4(l),ps.copy(e.ray).recast(e.near),!(ic.containsPoint(ps.origin)===!1&&(ps.intersectSphere(ic,Lg)===null||ps.origin.distanceToSquared(Lg)>(e.far-e.near)**2))&&(Pg.copy(l).invert(),ps.copy(e.ray).applyMatrix4(Pg),!(r.boundingBox!==null&&ps.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(c))for(let b=0,C=y.length;b<C;b++){const S=y[b],g=c[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let T=R,D=L;T<D;T+=3){const P=d.getX(T),F=d.getX(T+1),w=d.getX(T+2);a=cc(this,g,e,r,p,x,_,P,F,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=b,g=C;S<g;S+=3){const R=d.getX(S),L=d.getX(S+1),T=d.getX(S+2);a=cc(this,c,e,r,p,x,_,R,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(f!==void 0)if(Array.isArray(c))for(let b=0,C=y.length;b<C;b++){const S=y[b],g=c[S.materialIndex],R=Math.max(S.start,M.start),L=Math.min(f.count,Math.min(S.start+S.count,M.start+M.count));for(let T=R,D=L;T<D;T+=3){const P=T,F=T+1,w=T+2;a=cc(this,g,e,r,p,x,_,P,F,w),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const b=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let S=b,g=C;S<g;S+=3){const R=S,L=S+1,T=S+2;a=cc(this,c,e,r,p,x,_,R,L,T),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function Ab(i,e,t,r,a,l,c,d){let f;if(e.side===Kn?f=r.intersectTriangle(c,l,a,!0,d):f=r.intersectTriangle(a,l,c,e.side===Xr,d),f===null)return null;lc.copy(d),lc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(lc);return p<t.near||p>t.far?null:{distance:p,point:lc.clone(),object:i}}function cc(i,e,t,r,a,l,c,d,f,p){i.getVertexPosition(d,rc),i.getVertexPosition(f,sc),i.getVertexPosition(p,ac);const x=Ab(i,e,t,r,rc,sc,ac,Dg);if(x){const _=new te;Ci.getBarycoord(Dg,rc,sc,ac,_),a&&(x.uv=Ci.getInterpolatedAttribute(a,d,f,p,_,new At)),l&&(x.uv1=Ci.getInterpolatedAttribute(l,d,f,p,_,new At)),c&&(x.normal=Ci.getInterpolatedAttribute(c,d,f,p,_,new te),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new te,materialIndex:0};Ci.getNormal(rc,sc,ac,y.normal),x.face=y,x.barycoord=_}return x}class Cb extends Bn{constructor(e=null,t=1,r=1,a,l,c,d,f,p=En,x=En,_,y){super(null,c,d,f,p,x,a,l,_,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pf=new te,Rb=new te,Nb=new vt;class Vr{constructor(e=new te(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=pf.subVectors(r,t).cross(Rb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(pf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Nb.getNormalMatrix(e),a=this.coplanarPoint(pf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new Kh,Pb=new At(.5,.5),uc=new te;class Zh{constructor(e=new Vr,t=new Vr,r=new Vr,a=new Vr,l=new Vr,c=new Vr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=zi,r=!1){const a=this.planes,l=e.elements,c=l[0],d=l[1],f=l[2],p=l[3],x=l[4],_=l[5],y=l[6],M=l[7],b=l[8],C=l[9],S=l[10],g=l[11],R=l[12],L=l[13],T=l[14],D=l[15];if(a[0].setComponents(p-c,M-x,g-b,D-R).normalize(),a[1].setComponents(p+c,M+x,g+b,D+R).normalize(),a[2].setComponents(p+d,M+_,g+C,D+L).normalize(),a[3].setComponents(p-d,M-_,g-C,D-L).normalize(),r)a[4].setComponents(f,y,S,T).normalize(),a[5].setComponents(p-f,M-y,g-S,D-T).normalize();else if(a[4].setComponents(p-f,M-y,g-S,D-T).normalize(),t===zi)a[5].setComponents(p+f,M+y,g+S,D+T).normalize();else if(t===Lo)a[5].setComponents(f,y,S,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=Pb.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(uc.x=a.normal.x>0?e.max.x:e.min.x,uc.y=a.normal.y>0?e.max.y:e.min.y,uc.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends Bn{constructor(e=[],t=bs,r,a,l,c,d,f,p,x){super(e,t,r,a,l,c,d,f,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ma extends Bn{constructor(e,t,r=ji,a,l,c,d=En,f=En,p,x=hr,_=1){if(x!==hr&&x!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:_};super(y,a,l,c,d,f,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Lb extends Ma{constructor(e,t=ji,r=bs,a,l,c=En,d=En,f,p=hr){const x={width:e,height:e,depth:1},_=[x,x,x,x,x,x];super(e,e,t,r,a,l,c,d,f,p),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Pv extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ra extends Xi{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const d=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const f=[],p=[],x=[],_=[];let y=0,M=0;b("z","y","x",-1,-1,r,t,e,c,l,0),b("z","y","x",1,-1,r,t,-e,c,l,1),b("x","z","y",1,1,e,r,t,a,c,2),b("x","z","y",1,-1,e,r,-t,a,c,3),b("x","y","z",1,-1,e,t,r,a,l,4),b("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(f),this.setAttribute("position",new pi(p,3)),this.setAttribute("normal",new pi(x,3)),this.setAttribute("uv",new pi(_,2));function b(C,S,g,R,L,T,D,P,F,w,U){const z=T/F,V=D/w,Z=T/2,ue=D/2,me=P/2,X=F+1,pe=w+1;let J=0,q=0;const ce=new te;for(let se=0;se<pe;se++){const O=se*V-ue;for(let Q=0;Q<X;Q++){const Oe=Q*z-Z;ce[C]=Oe*R,ce[S]=O*L,ce[g]=me,p.push(ce.x,ce.y,ce.z),ce[C]=0,ce[S]=0,ce[g]=P>0?1:-1,x.push(ce.x,ce.y,ce.z),_.push(Q/F),_.push(1-se/w),J+=1}}for(let se=0;se<w;se++)for(let O=0;O<F;O++){const Q=y+O+X*se,Oe=y+O+X*(se+1),je=y+(O+1)+X*(se+1),We=y+(O+1)+X*se;f.push(Q,Oe,We),f.push(Oe,je,We),q+=6}d.addGroup(M,q,U),M+=q,y+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Wc extends Xi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,d=Math.floor(r),f=Math.floor(a),p=d+1,x=f+1,_=e/d,y=t/f,M=[],b=[],C=[],S=[];for(let g=0;g<x;g++){const R=g*y-c;for(let L=0;L<p;L++){const T=L*_-l;b.push(T,-R,0),C.push(0,0,1),S.push(L/d),S.push(1-g/f)}}for(let g=0;g<f;g++)for(let R=0;R<d;R++){const L=R+p*g,T=R+p*(g+1),D=R+1+p*(g+1),P=R+1+p*g;M.push(L,T,P),M.push(T,D,P)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jh extends Xi{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(c+d,Math.PI);let p=0;const x=[],_=new te,y=new te,M=[],b=[],C=[],S=[];for(let g=0;g<=r;g++){const R=[],L=g/r,T=c+L*d,D=e*Math.cos(T),P=Math.sqrt(e*e-D*D);let F=0;g===0&&c===0?F=.5/t:g===r&&f===Math.PI&&(F=-.5/t);for(let w=0;w<=t;w++){const U=w/t,z=a+U*l;_.x=-P*Math.cos(z),_.y=D,_.z=P*Math.sin(z),b.push(_.x,_.y,_.z),y.copy(_).normalize(),C.push(y.x,y.y,y.z),S.push(U+F,1-L),R.push(p++)}x.push(R)}for(let g=0;g<r;g++)for(let R=0;R<t;R++){const L=x[g][R+1],T=x[g][R],D=x[g+1][R],P=x[g+1][R+1];(g!==0||c>0)&&M.push(L,T,P),(g!==r-1||f<Math.PI)&&M.push(T,D,P)}this.setIndex(M),this.setAttribute("position",new pi(b,3)),this.setAttribute("normal",new pi(C,3)),this.setAttribute("uv",new pi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ea(i){const e={};for(const t in i){e[t]={};for(const r in i[t]){const a=i[t][r];if(Ig(a))a.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Ig(a[0])){const l=[];for(let c=0,d=a.length;c<d;c++)l[c]=a[c].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Fn(i){const e={};for(let t=0;t<i.length;t++){const r=Ea(i[t]);for(const a in r)e[a]=r[a]}return e}function Ig(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Db(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Ib={clone:Ea,merge:Fn};var Ub=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ob=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ub,this.fragmentShader=Ob,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=Db(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new Et().setHex(a.value);break;case"v2":this.uniforms[r].value=new At().fromArray(a.value);break;case"v3":this.uniforms[r].value=new te().fromArray(a.value);break;case"v4":this.uniforms[r].value=new en().fromArray(a.value);break;case"m3":this.uniforms[r].value=new vt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Fb extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dv extends Vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vh,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kb extends Dv{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new At(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Bb extends Vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zb extends Vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qh extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const mf=new nn,Ug=new te,Og=new te;class Iv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Og.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Og),t.updateMatrixWorld(),mf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Lo||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(mf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dc=new te,fc=new Ca,Oi=new te;class Uv extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,fc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(dc,fc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zr=new te,Fg=new At,kg=new At;class ii extends Uv{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(jd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zr.x,zr.y).multiplyScalar(-e/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zr.x,zr.y).multiplyScalar(-e/zr.z)}getViewSize(e,t){return this.getViewBounds(e,Fg,kg),t.subVectors(kg,Fg)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jd*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const f=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/f,t-=c.offsetY*r/p,a*=c.width/f,r*=c.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Vb extends Iv{constructor(){super(new ii(90,1,.5,500)),this.isPointLightShadow=!0}}class Hb extends Qh{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new Vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ep extends Uv{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=a+t,f=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,d-=x*this.view.offsetY,f=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Gb extends Iv{constructor(){super(new ep(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jb extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Gb}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Wb extends Qh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const da=-90,fa=1;class Xb extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ii(da,fa,e,t);a.layers=this.layers,this.add(a);const l=new ii(da,fa,e,t);l.layers=this.layers,this.add(l);const c=new ii(da,fa,e,t);c.layers=this.layers,this.add(c);const d=new ii(da,fa,e,t);d.layers=this.layers,this.add(d);const f=new ii(da,fa,e,t);f.layers=this.layers,this.add(f);const p=new ii(da,fa,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,d,f]=t;for(const p of t)this.remove(p);if(e===zi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Lo)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,f,p,x]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(_,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class qb extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bg=new nn;class $b{constructor(e,t,r=0,a=1/0){this.ray=new Cv(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new Yh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Bg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Bg),this}intersectObject(e,t=!0,r=[]){return yh(e,this,r,t),r.sort(zg),r}intersectObjects(e,t=!0,r=[]){for(let a=0,l=e.length;a<l;a++)yh(e[a],this,r,t);return r.sort(zg),r}}function zg(i,e){return i.distance-e.distance}function yh(i,e,t,r){let a=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const l=i.children;for(let c=0,d=l.length;c<d;c++)yh(l[c],e,t,!0)}}class Yb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const sp=class sp{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};sp.prototype.isMatrix2=!0;let Vg=sp;function Hg(i,e,t,r){const a=Kb(r);switch(t){case yv:return i*e;case Mv:return i*e/a.components*a.byteLength;case Gh:return i*e/a.components*a.byteLength;case Ts:return i*e*2/a.components*a.byteLength;case jh:return i*e*2/a.components*a.byteLength;case Sv:return i*e*3/a.components*a.byteLength;case Ri:return i*e*4/a.components*a.byteLength;case Wh:return i*e*4/a.components*a.byteLength;case _c:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Gf:case Wf:return Math.max(i,16)*Math.max(e,8)/4;case Hf:case jf:return Math.max(i,8)*Math.max(e,8)/2;case Xf:case qf:case Yf:case Kf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $f:case Nc:case Zf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Jf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ih:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ah:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case lh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ch:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case uh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fh:case hh:case ph:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mh:case gh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pc:case xh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Kb(i){switch(i){case ri:case gv:return{byteLength:1,components:1};case No:case xv:case fr:return{byteLength:2,components:1};case Vh:case Hh:return{byteLength:2,components:4};case ji:case zh:case Bi:return{byteLength:4,components:1};case vv:case _v:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kh}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ov(){let i=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(r=i.requestAnimationFrame(a),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function Zb(i){const e=new WeakMap;function t(d,f){const p=d.array,x=d.usage,_=p.byteLength,y=i.createBuffer();i.bindBuffer(f,y),i.bufferData(f,p,x),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const x=f.array,_=f.updateRanges;if(i.bindBuffer(p,d),_.length===0)i.bufferSubData(p,0,x);else{_.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<_.length;M++){const b=_[y],C=_[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++y,_[y]=C)}_.length=y+1;for(let M=0,b=_.length;M<b;M++){const C=_[M];i.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}f.clearUpdateRanges()}f.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(i.deleteBuffer(f.buffer),e.delete(d))}function c(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:a,remove:l,update:c}}var Jb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qb=`#ifdef USE_ALPHAHASH
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
#endif`,eT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
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
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aT=`#ifdef USE_BATCHING
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
#endif`,oT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dT=`#ifdef USE_IRIDESCENCE
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
#endif`,fT=`#ifdef USE_BUMPMAP
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
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_T=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ST=`#define PI 3.141592653589793
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
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",RT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,NT=`#ifdef USE_ENVMAP
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
#endif`,PT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,LT=`#ifdef USE_ENVMAP
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
#endif`,DT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
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
#endif`,UT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
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
}`,zT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,jT=`#ifdef USE_ENVMAP
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
#endif`,WT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,XT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$T=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YT=`PhysicalMaterial material;
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
#endif`,KT=`uniform sampler2D dfgLUT;
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
}`,ZT=`
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
#endif`,JT=`#if defined( RE_IndirectDiffuse )
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
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,t2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,a2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l2=`#if defined( USE_POINTS_UV )
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
#endif`,c2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,u2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,d2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,f2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,h2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,x2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,v2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,w2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,T2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,N2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,U2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,O2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,F2=`float getShadowMask() {
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
}`,k2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,B2=`#ifdef USE_SKINNING
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
#endif`,z2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,V2=`#ifdef USE_SKINNING
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
#endif`,H2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,j2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,W2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,X2=`#ifdef USE_TRANSMISSION
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
#endif`,q2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q2=`uniform sampler2D t2D;
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
}`,eA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rA=`#include <common>
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
}`,sA=`#if DEPTH_PACKING == 3200
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
}`,aA=`#define DISTANCE
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
}`,oA=`#define DISTANCE
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
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
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
}`,dA=`uniform vec3 diffuse;
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
}`,fA=`#include <common>
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
}`,hA=`uniform vec3 diffuse;
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
}`,pA=`#define LAMBERT
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
}`,mA=`#define LAMBERT
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
}`,gA=`#define MATCAP
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
}`,xA=`#define MATCAP
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
}`,vA=`#define NORMAL
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
}`,_A=`#define NORMAL
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
}`,yA=`#define PHONG
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
}`,SA=`#define PHONG
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
}`,MA=`#define STANDARD
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
}`,wA=`#define TOON
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
}`,bA=`#define TOON
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
}`,TA=`uniform float size;
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
}`,AA=`uniform vec3 diffuse;
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
}`,CA=`#include <common>
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
}`,RA=`uniform vec3 color;
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
}`,NA=`uniform float rotation;
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
}`,PA=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:Jb,alphahash_pars_fragment:Qb,alphamap_fragment:eT,alphamap_pars_fragment:tT,alphatest_fragment:nT,alphatest_pars_fragment:iT,aomap_fragment:rT,aomap_pars_fragment:sT,batching_pars_vertex:aT,batching_vertex:oT,begin_vertex:lT,beginnormal_vertex:cT,bsdfs:uT,iridescence_fragment:dT,bumpmap_pars_fragment:fT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:gT,color_fragment:xT,color_pars_fragment:vT,color_pars_vertex:_T,color_vertex:yT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:wT,displacementmap_vertex:bT,emissivemap_fragment:TT,emissivemap_pars_fragment:AT,colorspace_fragment:CT,colorspace_pars_fragment:RT,envmap_fragment:NT,envmap_common_pars_fragment:PT,envmap_pars_fragment:LT,envmap_pars_vertex:DT,envmap_physical_pars_fragment:jT,envmap_vertex:IT,fog_vertex:UT,fog_pars_vertex:OT,fog_fragment:FT,fog_pars_fragment:kT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:WT,lights_toon_pars_fragment:XT,lights_phong_fragment:qT,lights_phong_pars_fragment:$T,lights_physical_fragment:YT,lights_physical_pars_fragment:KT,lights_fragment_begin:ZT,lights_fragment_maps:JT,lights_fragment_end:QT,lightprobes_pars_fragment:e2,logdepthbuf_fragment:t2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:i2,logdepthbuf_vertex:r2,map_fragment:s2,map_pars_fragment:a2,map_particle_fragment:o2,map_particle_pars_fragment:l2,metalnessmap_fragment:c2,metalnessmap_pars_fragment:u2,morphinstance_vertex:d2,morphcolor_vertex:f2,morphnormal_vertex:h2,morphtarget_pars_vertex:p2,morphtarget_vertex:m2,normal_fragment_begin:g2,normal_fragment_maps:x2,normal_pars_fragment:v2,normal_pars_vertex:_2,normal_vertex:y2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:w2,iridescence_pars_fragment:b2,opaque_fragment:T2,packing:A2,premultiplied_alpha_fragment:C2,project_vertex:R2,dithering_fragment:N2,dithering_pars_fragment:P2,roughnessmap_fragment:L2,roughnessmap_pars_fragment:D2,shadowmap_pars_fragment:I2,shadowmap_pars_vertex:U2,shadowmap_vertex:O2,shadowmask_pars_fragment:F2,skinbase_vertex:k2,skinning_pars_vertex:B2,skinning_vertex:z2,skinnormal_vertex:V2,specularmap_fragment:H2,specularmap_pars_fragment:G2,tonemapping_fragment:j2,tonemapping_pars_fragment:W2,transmission_fragment:X2,transmission_pars_fragment:q2,uv_pars_fragment:$2,uv_pars_vertex:Y2,uv_vertex:K2,worldpos_vertex:Z2,background_vert:J2,background_frag:Q2,backgroundCube_vert:eA,backgroundCube_frag:tA,cube_vert:nA,cube_frag:iA,depth_vert:rA,depth_frag:sA,distance_vert:aA,distance_frag:oA,equirect_vert:lA,equirect_frag:cA,linedashed_vert:uA,linedashed_frag:dA,meshbasic_vert:fA,meshbasic_frag:hA,meshlambert_vert:pA,meshlambert_frag:mA,meshmatcap_vert:gA,meshmatcap_frag:xA,meshnormal_vert:vA,meshnormal_frag:_A,meshphong_vert:yA,meshphong_frag:SA,meshphysical_vert:MA,meshphysical_frag:EA,meshtoon_vert:wA,meshtoon_frag:bA,points_vert:TA,points_frag:AA,shadow_vert:CA,shadow_frag:RA,sprite_vert:NA,sprite_frag:PA},Ve={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new te},probesMax:{value:new te},probesResolution:{value:new te}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},ki={basic:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Fn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Fn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Fn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Et(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Fn([Ve.points,Ve.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Fn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Fn([Ve.common,Ve.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Fn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Fn([Ve.sprite,Ve.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Fn([Ve.common,Ve.displacementmap,{referencePosition:{value:new te},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Fn([Ve.lights,Ve.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};ki.physical={uniforms:Fn([ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const hc={r:0,b:0,g:0},LA=new nn,Fv=new vt;Fv.set(-1,0,0,0,1,0,0,0,1);function DA(i,e,t,r,a,l){const c=new Et(0);let d=a===!0?0:1,f,p,x=null,_=0,y=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const T=R.backgroundBlurriness>0;L=e.get(L,T)}return L}function b(R){let L=!1;const T=M(R);T===null?S(c,d):T&&T.isColor&&(S(T,1),L=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?t.buffers.color.setClear(0,0,0,1,l):D==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function C(R,L){const T=M(L);T&&(T.isCubeTexture||T.mapping===jc)?(p===void 0&&(p=new Ni(new Ra(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ea(ki.backgroundCube.uniforms),vertexShader:ki.backgroundCube.vertexShader,fragmentShader:ki.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(D,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=T,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(LA.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Fv),p.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ht,(x!==T||_!==T.version||y!==i.toneMapping)&&(p.material.needsUpdate=!0,x=T,_=T.version,y=i.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Ni(new Wc(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ea(ki.background.uniforms),vertexShader:ki.background.vertexShader,fragmentShader:ki.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Ht,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(x!==T||_!==T.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,x=T,_=T.version,y=i.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function S(R,L){R.getRGB(hc,Lv(i)),t.buffers.color.setClear(hc.r,hc.g,hc.b,L,l)}function g(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),d=L,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,S(c,d)},render:b,addToRenderList:C,dispose:g}}function IA(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),r={},a=y(null);let l=a,c=!1;function d(V,Z,ue,me,X){let pe=!1;const J=_(V,me,ue,Z);l!==J&&(l=J,p(l.object)),pe=M(V,me,ue,X),pe&&b(V,me,ue,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(pe||c)&&(c=!1,T(V,Z,ue,me),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function f(){return i.createVertexArray()}function p(V){return i.bindVertexArray(V)}function x(V){return i.deleteVertexArray(V)}function _(V,Z,ue,me){const X=me.wireframe===!0;let pe=r[Z.id];pe===void 0&&(pe={},r[Z.id]=pe);const J=V.isInstancedMesh===!0?V.id:0;let q=pe[J];q===void 0&&(q={},pe[J]=q);let ce=q[ue.id];ce===void 0&&(ce={},q[ue.id]=ce);let se=ce[X];return se===void 0&&(se=y(f()),ce[X]=se),se}function y(V){const Z=[],ue=[],me=[];for(let X=0;X<t;X++)Z[X]=0,ue[X]=0,me[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:ue,attributeDivisors:me,object:V,attributes:{},index:null}}function M(V,Z,ue,me){const X=l.attributes,pe=Z.attributes;let J=0;const q=ue.getAttributes();for(const ce in q)if(q[ce].location>=0){const O=X[ce];let Q=pe[ce];if(Q===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),O===void 0||O.attribute!==Q||Q&&O.data!==Q.data)return!0;J++}return l.attributesNum!==J||l.index!==me}function b(V,Z,ue,me){const X={},pe=Z.attributes;let J=0;const q=ue.getAttributes();for(const ce in q)if(q[ce].location>=0){let O=pe[ce];O===void 0&&(ce==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),ce==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const Q={};Q.attribute=O,O&&O.data&&(Q.data=O.data),X[ce]=Q,J++}l.attributes=X,l.attributesNum=J,l.index=me}function C(){const V=l.newAttributes;for(let Z=0,ue=V.length;Z<ue;Z++)V[Z]=0}function S(V){g(V,0)}function g(V,Z){const ue=l.newAttributes,me=l.enabledAttributes,X=l.attributeDivisors;ue[V]=1,me[V]===0&&(i.enableVertexAttribArray(V),me[V]=1),X[V]!==Z&&(i.vertexAttribDivisor(V,Z),X[V]=Z)}function R(){const V=l.newAttributes,Z=l.enabledAttributes;for(let ue=0,me=Z.length;ue<me;ue++)Z[ue]!==V[ue]&&(i.disableVertexAttribArray(ue),Z[ue]=0)}function L(V,Z,ue,me,X,pe,J){J===!0?i.vertexAttribIPointer(V,Z,ue,X,pe):i.vertexAttribPointer(V,Z,ue,me,X,pe)}function T(V,Z,ue,me){C();const X=me.attributes,pe=ue.getAttributes(),J=Z.defaultAttributeValues;for(const q in pe){const ce=pe[q];if(ce.location>=0){let se=X[q];if(se===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(se=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(se=V.instanceColor)),se!==void 0){const O=se.normalized,Q=se.itemSize,Oe=e.get(se);if(Oe===void 0)continue;const je=Oe.buffer,We=Oe.type,Y=Oe.bytesPerElement,_e=We===i.INT||We===i.UNSIGNED_INT||se.gpuType===zh;if(se.isInterleavedBufferAttribute){const ve=se.data,ze=ve.stride,it=se.offset;if(ve.isInstancedInterleavedBuffer){for(let nt=0;nt<ce.locationSize;nt++)g(ce.location+nt,ve.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let nt=0;nt<ce.locationSize;nt++)S(ce.location+nt);i.bindBuffer(i.ARRAY_BUFFER,je);for(let nt=0;nt<ce.locationSize;nt++)L(ce.location+nt,Q/ce.locationSize,We,O,ze*Y,(it+Q/ce.locationSize*nt)*Y,_e)}else{if(se.isInstancedBufferAttribute){for(let ve=0;ve<ce.locationSize;ve++)g(ce.location+ve,se.meshPerAttribute);V.isInstancedMesh!==!0&&me._maxInstanceCount===void 0&&(me._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ve=0;ve<ce.locationSize;ve++)S(ce.location+ve);i.bindBuffer(i.ARRAY_BUFFER,je);for(let ve=0;ve<ce.locationSize;ve++)L(ce.location+ve,Q/ce.locationSize,We,O,Q*Y,Q/ce.locationSize*ve*Y,_e)}}else if(J!==void 0){const O=J[q];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(ce.location,O);break;case 3:i.vertexAttrib3fv(ce.location,O);break;case 4:i.vertexAttrib4fv(ce.location,O);break;default:i.vertexAttrib1fv(ce.location,O)}}}}R()}function D(){U();for(const V in r){const Z=r[V];for(const ue in Z){const me=Z[ue];for(const X in me){const pe=me[X];for(const J in pe)x(pe[J].object),delete pe[J];delete me[X]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const Z=r[V.id];for(const ue in Z){const me=Z[ue];for(const X in me){const pe=me[X];for(const J in pe)x(pe[J].object),delete pe[J];delete me[X]}}delete r[V.id]}function F(V){for(const Z in r){const ue=r[Z];for(const me in ue){const X=ue[me];if(X[V.id]===void 0)continue;const pe=X[V.id];for(const J in pe)x(pe[J].object),delete pe[J];delete X[V.id]}}}function w(V){for(const Z in r){const ue=r[Z],me=V.isInstancedMesh===!0?V.id:0,X=ue[me];if(X!==void 0){for(const pe in X){const J=X[pe];for(const q in J)x(J[q].object),delete J[q];delete X[pe]}delete ue[me],Object.keys(ue).length===0&&delete r[Z]}}}function U(){z(),c=!0,l!==a&&(l=a,p(l.object))}function z(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:U,resetDefaultState:z,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:S,disableUnusedAttributes:R}}function UA(i,e,t){let r;function a(f){r=f}function l(f,p){i.drawArrays(r,f,p),t.update(p,r,1)}function c(f,p,x){x!==0&&(i.drawArraysInstanced(r,f,p,x),t.update(p,r,x))}function d(f,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,f,0,p,0,x);let y=0;for(let M=0;M<x;M++)y+=p[M];t.update(y,r,1)}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function OA(i,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==Ri&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const w=F===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&r.convert(F)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Bi&&!w)}function f(F){if(F==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=f(p);x!==p&&(pt("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&y===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:c,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:T,maxSamples:D,samples:P}}function FA(i){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Vr,d=new vt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||r!==0||a;return a=y,r=_.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=x(_,y,0)},this.setState=function(_,y,M){const b=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,g=i.get(_);if(!a||b===null||b.length===0||l&&!S)l?x(null):p();else{const R=l?0:r,L=R*4;let T=g.clippingState||null;f.value=T,T=x(b,y,L,M);for(let D=0;D!==L;++D)T[D]=t[D];g.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,y,M,b){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=f.value,b!==!0||S===null){const g=M+C*4,R=y.matrixWorldInverse;d.getNormalMatrix(R),(S===null||S.length<g)&&(S=new Float32Array(g));for(let L=0,T=M;L!==C;++L,T+=4)c.copy(_[L]).applyMatrix4(R,d),c.normal.toArray(S,T),S[T+3]=c.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const jr=4,Gg=[.125,.215,.35,.446,.526,.582],xs=20,kA=256,So=new ep,jg=new Et;let gf=null,xf=0,vf=0,_f=!1;const BA=new te;class Wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:d=BA}=l;gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(e,r,a,f,d),t>0&&this._blur(f,0,0,t),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$g(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(gf,xf,vf),this._renderer.xr.enabled=_f,e.scissorTest=!1,ha(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bs||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gf=this._renderer.getRenderTarget(),xf=this._renderer.getActiveCubeFace(),vf=this._renderer.getActiveMipmapLevel(),_f=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:fr,format:Ri,colorSpace:Lc,depthBuffer:!1},a=Xg(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xg(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zA(l)),this._blurMaterial=HA(l,e,t),this._ggxMaterial=VA(l,e,t)}return a}_compileMaterial(e){const t=new Ni(new Xi,e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,r,a,l){const f=new ii(90,1,t,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,M=_.toneMapping;_.getClearColor(jg),_.toneMapping=Vi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Ra,new Rv({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let g=!1;const R=e.background;R?R.isColor&&(S.color.copy(R),e.background=null,g=!0):(S.color.copy(jg),g=!0);for(let L=0;L<6;L++){const T=L%3;T===0?(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+x[L],l.y,l.z)):T===1?(f.up.set(0,0,p[L]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+x[L],l.z)):(f.up.set(0,p[L],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+x[L]));const D=this._cubeSize;ha(a,T*D,L>2?D:0,D,D),_.setRenderTarget(a),g&&_.render(C,f),_.render(e,f)}_.toneMapping=M,_.autoClear=y,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===bs||e.mapping===Sa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=$g()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;ha(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(c,So)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const f=c.uniforms,p=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),y=0+p*1.25,M=_*y,{_lodMax:b}=this,C=this._sizeLods[r],S=3*C*(r>b-jr?r-b+jr:0),g=4*(this._cubeSize-C);f.envMap.value=e.texture,f.roughness.value=M,f.mipInt.value=b-t,ha(l,S,g,3*C,2*C),a.setRenderTarget(l),a.render(d,So),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=b-r,ha(e,S,g,3*C,2*C),a.setRenderTarget(e),a.render(d,So)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,d){const f=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[a];_.material=p;const y=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*xs-1),C=l/b,S=isFinite(l)?1+Math.floor(x*C):xs;S>xs&&pt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${xs}`);const g=[];let R=0;for(let F=0;F<xs;++F){const w=F/C,U=Math.exp(-w*w/2);g.push(U),F===0?R+=U:F<S&&(R+=2*U)}for(let F=0;F<g.length;F++)g[F]=g[F]/R;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=b,y.mipInt.value=L-r;const T=this._sizeLods[a],D=3*T*(a>L-jr?a-L+jr:0),P=4*(this._cubeSize-T);ha(t,D,P,3*T,2*T),f.setRenderTarget(t),f.render(_,So)}}function zA(i){const e=[],t=[],r=[];let a=i;const l=i-jr+1+Gg.length;for(let c=0;c<l;c++){const d=Math.pow(2,a);e.push(d);let f=1/d;c>i-jr?f=Gg[c-i+jr-1]:c===0&&(f=0),t.push(f);const p=1/(d-2),x=-p,_=1+p,y=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,b=6,C=3,S=2,g=1,R=new Float32Array(C*b*M),L=new Float32Array(S*b*M),T=new Float32Array(g*b*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,w=P>2?0:-1,U=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];R.set(U,C*b*P),L.set(y,S*b*P);const z=[P,P,P,P,P,P];T.set(z,g*b*P)}const D=new Xi;D.setAttribute("position",new Gi(R,C)),D.setAttribute("uv",new Gi(L,S)),D.setAttribute("faceIndex",new Gi(T,g)),r.push(new Ni(D,null)),a>jr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Xg(i,e,t){const r=new Hi(i,e,t);return r.texture.mapping=jc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ha(i,e,t,r,a){i.viewport.set(e,t,r,a),i.scissor.set(e,t,r,a)}function VA(i,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kA,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function HA(i,e,t){const r=new Float32Array(xs),a=new te(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function qg(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xc(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function $g(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Xc(){return`

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
	`}class kv extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Nv(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ra(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:Ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:ur});l.uniforms.tEquirect.value=t;const c=new Ni(a,l),d=t.minFilter;return t.minFilter===_s&&(t.minFilter=Pn),new Xb(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function GA(i){let e=new WeakMap,t=new WeakMap,r=null;function a(y,M=!1){return y==null?null:M?c(y):l(y)}function l(y){if(y&&y.isTexture){const M=y.mapping;if(M===Vd||M===Hd)if(e.has(y)){const b=e.get(y).texture;return d(b,y.mapping)}else{const b=y.image;if(b&&b.height>0){const C=new kv(b.height);return C.fromEquirectangularTexture(i,y),e.set(y,C),y.addEventListener("dispose",p),d(C.texture,y.mapping)}else return null}}return y}function c(y){if(y&&y.isTexture){const M=y.mapping,b=M===Vd||M===Hd,C=M===bs||M===Sa;if(b||C){let S=t.get(y);const g=S!==void 0?S.texture.pmremVersion:0;if(y.isRenderTargetTexture&&y.pmremVersion!==g)return r===null&&(r=new Wg(i)),S=b?r.fromEquirectangular(y,S):r.fromCubemap(y,S),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),S.texture;if(S!==void 0)return S.texture;{const R=y.image;return b&&R&&R.height>0||C&&R&&f(R)?(r===null&&(r=new Wg(i)),S=b?r.fromEquirectangular(y):r.fromCubemap(y),S.texture.pmremVersion=y.pmremVersion,t.set(y,S),y.addEventListener("dispose",x),S.texture):null}}}return y}function d(y,M){return M===Vd?y.mapping=bs:M===Hd&&(y.mapping=Sa),y}function f(y){let M=0;const b=6;for(let C=0;C<b;C++)y[C]!==void 0&&M++;return M===b}function p(y){const M=y.target;M.removeEventListener("dispose",p);const b=e.get(M);b!==void 0&&(e.delete(M),b.dispose())}function x(y){const M=y.target;M.removeEventListener("dispose",x);const b=t.get(M);b!==void 0&&(t.delete(M),b.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function jA(i){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=i.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&ga("WebGLRenderer: "+r+" extension not supported."),a}}}function WA(i,e,t,r){const a={},l=new WeakMap;function c(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",c),delete a[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return a[y.id]===!0||(y.addEventListener("dispose",c),a[y.id]=!0,t.memory.geometries++),y}function f(_){const y=_.attributes;for(const M in y)e.update(y[M],i.ARRAY_BUFFER)}function p(_){const y=[],M=_.index,b=_.attributes.position;let C=0;if(b===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let L=0,T=R.length;L<T;L+=3){const D=R[L+0],P=R[L+1],F=R[L+2];y.push(D,P,P,F,F,D)}}else{const R=b.array;C=b.version;for(let L=0,T=R.length/3-1;L<T;L+=3){const D=L+0,P=L+1,F=L+2;y.push(D,P,P,F,F,D)}}const S=new(b.count>=65535?Av:Tv)(y,1);S.version=C;const g=l.get(_);g&&e.remove(g),l.set(_,S)}function x(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:x}}function XA(i,e,t){let r;function a(_){r=_}let l,c;function d(_){l=_.type,c=_.bytesPerElement}function f(_,y){i.drawElements(r,y,l,_*c),t.update(y,r,1)}function p(_,y,M){M!==0&&(i.drawElementsInstanced(r,y,l,_*c,M),t.update(y,r,M))}function x(_,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,_,0,M);let C=0;for(let S=0;S<M;S++)C+=y[S];t.update(C,r,1)}this.setMode=a,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=x}function qA(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function $A(i,e,t){const r=new WeakMap,a=new en;function l(c,d,f){const p=c.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let z=function(){w.dispose(),r.delete(d),d.removeEventListener("dispose",z)};var M=z;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let T=0;b===!0&&(T=1),C===!0&&(T=2),S===!0&&(T=3);let D=d.attributes.position.count*T,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const F=new Float32Array(D*P*4*_),w=new wv(F,D,P,_);w.type=Bi,w.needsUpdate=!0;const U=T*4;for(let V=0;V<_;V++){const Z=g[V],ue=R[V],me=L[V],X=D*P*4*V;for(let pe=0;pe<Z.count;pe++){const J=pe*U;b===!0&&(a.fromBufferAttribute(Z,pe),F[X+J+0]=a.x,F[X+J+1]=a.y,F[X+J+2]=a.z,F[X+J+3]=0),C===!0&&(a.fromBufferAttribute(ue,pe),F[X+J+4]=a.x,F[X+J+5]=a.y,F[X+J+6]=a.z,F[X+J+7]=0),S===!0&&(a.fromBufferAttribute(me,pe),F[X+J+8]=a.x,F[X+J+9]=a.y,F[X+J+10]=a.z,F[X+J+11]=me.itemSize===4?a.w:1)}}y={count:_,texture:w,size:new At(D,P)},r.set(d,y),d.addEventListener("dispose",z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)f.getUniforms().setValue(i,"morphTexture",c.morphTexture,t);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const C=d.morphTargetsRelative?1:1-b;f.getUniforms().setValue(i,"morphTargetBaseInfluence",C),f.getUniforms().setValue(i,"morphTargetInfluences",p)}f.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}return{update:l}}function YA(i,e,t,r,a){let l=new WeakMap;function c(p){const x=a.render.frame,_=p.geometry,y=e.get(p,_);if(l.get(y)!==x&&(e.update(y),l.set(y,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),l.get(p)!==x&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==x&&(M.update(),l.set(M,x))}return y}function d(){l=new WeakMap}function f(p){const x=p.target;x.removeEventListener("dispose",f),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:c,dispose:d}}const KA={[cv]:"LINEAR_TONE_MAPPING",[uv]:"REINHARD_TONE_MAPPING",[dv]:"CINEON_TONE_MAPPING",[Bh]:"ACES_FILMIC_TONE_MAPPING",[hv]:"AGX_TONE_MAPPING",[pv]:"NEUTRAL_TONE_MAPPING",[fv]:"CUSTOM_TONE_MAPPING"};function ZA(i,e,t,r,a,l){const c=new Hi(e,t,{type:i,depthBuffer:a,stencilBuffer:l,samples:r?4:0,depthTexture:a?new Ma(e,t):void 0}),d=new Hi(e,t,{type:fr,depthBuffer:!1,stencilBuffer:!1}),f=new Xi;f.setAttribute("position",new pi([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pi([0,2,0,0,2,0],2));const p=new Fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new Ni(f,p),_=new ep(-1,1,1,-1,0,1);let y=null,M=null,b=!1,C,S=null,g=[],R=!1;this.setSize=function(L,T){c.setSize(L,T),d.setSize(L,T);for(let D=0;D<g.length;D++){const P=g[D];P.setSize&&P.setSize(L,T)}},this.setEffects=function(L){g=L,R=g.length>0&&g[0].isRenderPass===!0;const T=c.width,D=c.height;for(let P=0;P<g.length;P++){const F=g[P];F.setSize&&F.setSize(T,D)}},this.begin=function(L,T){if(b||L.toneMapping===Vi&&g.length===0)return!1;if(S=T,T!==null){const D=T.width,P=T.height;(c.width!==D||c.height!==P)&&this.setSize(D,P)}return R===!1&&L.setRenderTarget(c),C=L.toneMapping,L.toneMapping=Vi,!0},this.hasRenderPass=function(){return R},this.end=function(L,T){L.toneMapping=C,b=!0;let D=c,P=d;for(let F=0;F<g.length;F++){const w=g[F];if(w.enabled!==!1&&(w.render(L,P,D,T),w.needsSwap!==!1)){const U=D;D=P,P=U}}if(y!==L.outputColorSpace||M!==L.toneMapping){y=L.outputColorSpace,M=L.toneMapping,p.defines={},Ct.getTransfer(y)===Ht&&(p.defines.SRGB_TRANSFER="");const F=KA[M];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(S),L.render(x,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Bv=new Bn,Sh=new Ma(1,1),zv=new wv,Vv=new pb,Hv=new Nv,Yg=[],Kg=[],Zg=new Float32Array(16),Jg=new Float32Array(9),Qg=new Float32Array(4);function Na(i,e,t){const r=i[0];if(r<=0||r>0)return i;const a=e*t;let l=Yg[a];if(l===void 0&&(l=new Float32Array(a),Yg[a]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,i[c].toArray(l,d)}return l}function hn(i,e){if(i.length!==e.length)return!1;for(let t=0,r=i.length;t<r;t++)if(i[t]!==e[t])return!1;return!0}function pn(i,e){for(let t=0,r=e.length;t<r;t++)i[t]=e[t]}function qc(i,e){let t=Kg[e];t===void 0&&(t=new Int32Array(e),Kg[e]=t);for(let r=0;r!==e;++r)t[r]=i.allocateTextureUnit();return t}function JA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function QA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2fv(this.addr,e),pn(t,e)}}function eC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;i.uniform3fv(this.addr,e),pn(t,e)}}function tC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4fv(this.addr,e),pn(t,e)}}function nC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Qg.set(r),i.uniformMatrix2fv(this.addr,!1,Qg),pn(t,r)}}function iC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Jg.set(r),i.uniformMatrix3fv(this.addr,!1,Jg),pn(t,r)}}function rC(i,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Zg.set(r),i.uniformMatrix4fv(this.addr,!1,Zg),pn(t,r)}}function sC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function aC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2iv(this.addr,e),pn(t,e)}}function oC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3iv(this.addr,e),pn(t,e)}}function lC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4iv(this.addr,e),pn(t,e)}}function cC(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function uC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;i.uniform2uiv(this.addr,e),pn(t,e)}}function dC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;i.uniform3uiv(this.addr,e),pn(t,e)}}function fC(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;i.uniform4uiv(this.addr,e),pn(t,e)}}function hC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a);let l;this.type===i.SAMPLER_2D_SHADOW?(Sh.compareFunction=t.isReversedDepthBuffer()?qh:Xh,l=Sh):l=Bv,t.setTexture2D(e||l,a)}function pC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Vv,a)}function mC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Hv,a)}function gC(i,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(i.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||zv,a)}function xC(i){switch(i){case 5126:return JA;case 35664:return QA;case 35665:return eC;case 35666:return tC;case 35674:return nC;case 35675:return iC;case 35676:return rC;case 5124:case 35670:return sC;case 35667:case 35671:return aC;case 35668:case 35672:return oC;case 35669:case 35673:return lC;case 5125:return cC;case 36294:return uC;case 36295:return dC;case 36296:return fC;case 35678:case 36198:case 36298:case 36306:case 35682:return hC;case 35679:case 36299:case 36307:return pC;case 35680:case 36300:case 36308:case 36293:return mC;case 36289:case 36303:case 36311:case 36292:return gC}}function vC(i,e){i.uniform1fv(this.addr,e)}function _C(i,e){const t=Na(e,this.size,2);i.uniform2fv(this.addr,t)}function yC(i,e){const t=Na(e,this.size,3);i.uniform3fv(this.addr,t)}function SC(i,e){const t=Na(e,this.size,4);i.uniform4fv(this.addr,t)}function MC(i,e){const t=Na(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function EC(i,e){const t=Na(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function wC(i,e){const t=Na(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function bC(i,e){i.uniform1iv(this.addr,e)}function TC(i,e){i.uniform2iv(this.addr,e)}function AC(i,e){i.uniform3iv(this.addr,e)}function CC(i,e){i.uniform4iv(this.addr,e)}function RC(i,e){i.uniform1uiv(this.addr,e)}function NC(i,e){i.uniform2uiv(this.addr,e)}function PC(i,e){i.uniform3uiv(this.addr,e)}function LC(i,e){i.uniform4uiv(this.addr,e)}function DC(i,e,t){const r=this.cache,a=e.length,l=qc(t,a);hn(r,l)||(i.uniform1iv(this.addr,l),pn(r,l));let c;this.type===i.SAMPLER_2D_SHADOW?c=Sh:c=Bv;for(let d=0;d!==a;++d)t.setTexture2D(e[d]||c,l[d])}function IC(i,e,t){const r=this.cache,a=e.length,l=qc(t,a);hn(r,l)||(i.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||Vv,l[c])}function UC(i,e,t){const r=this.cache,a=e.length,l=qc(t,a);hn(r,l)||(i.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||Hv,l[c])}function OC(i,e,t){const r=this.cache,a=e.length,l=qc(t,a);hn(r,l)||(i.uniform1iv(this.addr,l),pn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||zv,l[c])}function FC(i){switch(i){case 5126:return vC;case 35664:return _C;case 35665:return yC;case 35666:return SC;case 35674:return MC;case 35675:return EC;case 35676:return wC;case 5124:case 35670:return bC;case 35667:case 35671:return TC;case 35668:case 35672:return AC;case 35669:case 35673:return CC;case 5125:return RC;case 36294:return NC;case 36295:return PC;case 36296:return LC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return IC;case 35680:case 36300:case 36308:case 36293:return UC;case 36289:case 36303:case 36311:case 36292:return OC}}class kC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=xC(t.type)}}class BC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=FC(t.type)}}class zC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function ex(i,e){i.seq.push(e),i.map[e.id]=e}function VC(i,e,t){const r=i.name,a=r.length;for(yf.lastIndex=0;;){const l=yf.exec(r),c=yf.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&c+2===a){ex(t,p===void 0?new kC(d,i,e):new BC(d,i,e));break}else{let _=t.map[d];_===void 0&&(_=new zC(d),ex(t,_)),t=_}}}class Ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(t,c),f=e.getUniformLocation(t,d.name);VC(d,f,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function tx(i,e,t){const r=i.createShader(e);return i.shaderSource(r,t),i.compileShader(r),r}const HC=37297;let GC=0;function jC(i,e){const t=i.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const nx=new vt;function WC(i){Ct._getMatrix(nx,Ct.workingColorSpace,i);const e=`mat3( ${nx.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case Dc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function ix(i,e,t){const r=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+jC(i.getShaderSource(e),d)}else return l}function XC(i,e){const t=WC(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qC={[cv]:"Linear",[uv]:"Reinhard",[dv]:"Cineon",[Bh]:"ACESFilmic",[hv]:"AgX",[pv]:"Neutral",[fv]:"Custom"};function $C(i,e){const t=qC[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new te;function YC(){Ct.getLuminanceCoefficients(pc);const i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KC(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function ZC(i){const e=[];for(const t in i){const r=i[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function JC(i,e){const t={},r=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=i.getActiveAttrib(e,a),c=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:i.getAttribLocation(e,c),locationSize:d}}return t}function To(i){return i!==""}function rx(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mh(i){return i.replace(QC,tR)}const eR=new Map;function tR(i,e){let t=St[e];if(t===void 0){const r=eR.get(e);if(r!==void 0)t=St[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Mh(t)}const nR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ax(i){return i.replace(nR,iR)}function iR(i,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ox(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const rR={[vc]:"SHADOWMAP_TYPE_PCF",[wo]:"SHADOWMAP_TYPE_VSM"};function sR(i){return rR[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aR={[bs]:"ENVMAP_TYPE_CUBE",[Sa]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function oR(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":aR[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const lR={[Sa]:"ENVMAP_MODE_REFRACTION"};function cR(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":lR[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uR={[lv]:"ENVMAP_BLENDING_MULTIPLY",[qw]:"ENVMAP_BLENDING_MIX",[$w]:"ENVMAP_BLENDING_ADD"};function dR(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":uR[i.combine]||"ENVMAP_BLENDING_NONE"}function fR(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function hR(i,e,t,r){const a=i.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const f=sR(t),p=oR(t),x=cR(t),_=dR(t),y=fR(t),M=KC(t),b=ZC(l),C=a.createProgram();let S,g,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(To).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(To).join(`
`),g.length>0&&(g+=`
`)):(S=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),g=[ox(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vi?"#define TONE_MAPPING":"",t.toneMapping!==Vi?St.tonemapping_pars_fragment:"",t.toneMapping!==Vi?$C("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,XC("linearToOutputTexel",t.outputColorSpace),YC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),c=Mh(c),c=rx(c,t),c=sx(c,t),d=Mh(d),d=rx(d,t),d=sx(d,t),c=ax(c),d=ax(d),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===xg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=R+S+c,T=R+g+d,D=tx(a,a.VERTEX_SHADER,L),P=tx(a,a.FRAGMENT_SHADER,T);a.attachShader(C,D),a.attachShader(C,P),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function F(V){if(i.debug.checkShaderErrors){const Z=a.getProgramInfoLog(C)||"",ue=a.getShaderInfoLog(D)||"",me=a.getShaderInfoLog(P)||"",X=Z.trim(),pe=ue.trim(),J=me.trim();let q=!0,ce=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,C,D,P);else{const se=ix(a,D,"vertex"),O=ix(a,P,"fragment");Pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+X+`
`+se+`
`+O)}else X!==""?pt("WebGLProgram: Program Info Log:",X):(pe===""||J==="")&&(ce=!1);ce&&(V.diagnostics={runnable:q,programLog:X,vertexShader:{log:pe,prefix:S},fragmentShader:{log:J,prefix:g}})}a.deleteShader(D),a.deleteShader(P),w=new Ec(a,C),U=JC(a,C)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=a.getProgramParameter(C,HC)),z},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=GC++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=P,this}let pR=0;class mR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new gR(e),t.set(e,r)),r}}class gR{constructor(e){this.id=pR++,this.code=e,this.usedTimes=0}}function xR(i){return i===Ts||i===Nc||i===Pc}function vR(i,e,t,r,a,l){const c=new Yh,d=new mR,f=new Set,p=[],x=new Map,_=r.logarithmicDepthBuffer;let y=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(w){return f.add(w),w===0?"uv":`uv${w}`}function C(w,U,z,V,Z,ue){const me=V.fog,X=Z.geometry,pe=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?V.environment:null,J=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,q=e.get(w.envMap||pe,J),ce=q&&q.mapping===jc?q.image.height:null,se=M[w.type];w.precision!==null&&(y=r.getMaxPrecision(w.precision),y!==w.precision&&pt("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const O=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Q=O!==void 0?O.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let je,We,Y,_e;if(se){const $e=ki[se];je=$e.vertexShader,We=$e.fragmentShader}else{je=w.vertexShader,We=w.fragmentShader;const $e=d.getVertexShaderStage(w),Bt=d.getFragmentShaderStage(w);d.update(w,$e,Bt),Y=$e.id,_e=Bt.id}const ve=i.getRenderTarget(),ze=i.state.buffers.depth.getReversed(),it=Z.isInstancedMesh===!0,nt=Z.isBatchedMesh===!0,Ce=!!w.map,le=!!w.matcap,Ne=!!q,Ge=!!w.aoMap,Ee=!!w.lightMap,Ke=!!w.bumpMap&&w.wireframe===!1,_t=!!w.normalMap,yt=!!w.displacementMap,kt=!!w.emissiveMap,Lt=!!w.metalnessMap,Ut=!!w.roughnessMap,W=w.anisotropy>0,Gt=w.clearcoat>0,Rt=w.dispersion>0,I=w.iridescence>0,E=w.sheen>0,K=w.transmission>0,ie=W&&!!w.anisotropyMap,ge=Gt&&!!w.clearcoatMap,be=Gt&&!!w.clearcoatNormalMap,Fe=Gt&&!!w.clearcoatRoughnessMap,xe=I&&!!w.iridescenceMap,ye=I&&!!w.iridescenceThicknessMap,ke=E&&!!w.sheenColorMap,Qe=E&&!!w.sheenRoughnessMap,Be=!!w.specularMap,Ie=!!w.specularColorMap,ot=!!w.specularIntensityMap,ut=K&&!!w.transmissionMap,et=K&&!!w.thicknessMap,B=!!w.gradientMap,Me=!!w.alphaMap,oe=w.alphaTest>0,Ae=!!w.alphaHash,Le=!!w.extensions;let Se=Vi;w.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Se=i.toneMapping);const Je={shaderID:se,shaderType:w.type,shaderName:w.name,vertexShader:je,fragmentShader:We,defines:w.defines,customVertexShaderID:Y,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:nt,batchingColor:nt&&Z._colorsTexture!==null,instancing:it,instancingColor:it&&Z.instanceColor!==null,instancingMorph:it&&Z.morphTexture!==null,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ce,matcap:le,envMap:Ne,envMapMode:Ne&&q.mapping,envMapCubeUVHeight:ce,aoMap:Ge,lightMap:Ee,bumpMap:Ke,normalMap:_t,displacementMap:yt,emissiveMap:kt,normalMapObjectSpace:_t&&w.normalMapType===Zw,normalMapTangentSpace:_t&&w.normalMapType===vh,packedNormalMap:_t&&w.normalMapType===vh&&xR(w.normalMap.format),metalnessMap:Lt,roughnessMap:Ut,anisotropy:W,anisotropyMap:ie,clearcoat:Gt,clearcoatMap:ge,clearcoatNormalMap:be,clearcoatRoughnessMap:Fe,dispersion:Rt,iridescence:I,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:E,sheenColorMap:ke,sheenRoughnessMap:Qe,specularMap:Be,specularColorMap:Ie,specularIntensityMap:ot,transmission:K,transmissionMap:ut,thicknessMap:et,gradientMap:B,opaque:w.transparent===!1&&w.blending===ma&&w.alphaToCoverage===!1,alphaMap:Me,alphaTest:oe,alphaHash:Ae,combine:w.combine,mapUv:Ce&&b(w.map.channel),aoMapUv:Ge&&b(w.aoMap.channel),lightMapUv:Ee&&b(w.lightMap.channel),bumpMapUv:Ke&&b(w.bumpMap.channel),normalMapUv:_t&&b(w.normalMap.channel),displacementMapUv:yt&&b(w.displacementMap.channel),emissiveMapUv:kt&&b(w.emissiveMap.channel),metalnessMapUv:Lt&&b(w.metalnessMap.channel),roughnessMapUv:Ut&&b(w.roughnessMap.channel),anisotropyMapUv:ie&&b(w.anisotropyMap.channel),clearcoatMapUv:ge&&b(w.clearcoatMap.channel),clearcoatNormalMapUv:be&&b(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&b(w.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&b(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&b(w.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&b(w.sheenColorMap.channel),sheenRoughnessMapUv:Qe&&b(w.sheenRoughnessMap.channel),specularMapUv:Be&&b(w.specularMap.channel),specularColorMapUv:Ie&&b(w.specularColorMap.channel),specularIntensityMapUv:ot&&b(w.specularIntensityMap.channel),transmissionMapUv:ut&&b(w.transmissionMap.channel),thicknessMapUv:et&&b(w.thicknessMap.channel),alphaMapUv:Me&&b(w.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(_t||W),vertexNormals:!!X.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!X.attributes.uv&&(Ce||Me),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||X.attributes.normal===void 0&&_t===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:ze,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:Oe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ue.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Se,decodeVideoTexture:Ce&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:kt&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===lr,flipSided:w.side===Kn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Le&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&w.extensions.multiDraw===!0||nt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Je.vertexUv1s=f.has(1),Je.vertexUv2s=f.has(2),Je.vertexUv3s=f.has(3),f.clear(),Je}function S(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)U.push(z),U.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(g(U,w),R(U,w),U.push(i.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function g(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function R(w,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),w.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),U.hasPositionAttribute&&c.enable(23),w.push(c.mask)}function L(w){const U=M[w.type];let z;if(U){const V=ki[U];z=Ib.clone(V.uniforms)}else z=w.uniforms;return z}function T(w,U){let z=x.get(U);return z!==void 0?++z.usedTimes:(z=new hR(i,U,w,a),p.push(z),x.set(U,z)),z}function D(w){if(--w.usedTimes===0){const U=p.indexOf(w);p[U]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function F(){d.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:L,acquireProgram:T,releaseProgram:D,releaseShaderCache:P,programs:p,dispose:F}}function _R(){let i=new WeakMap;function e(c){return i.has(c)}function t(c){let d=i.get(c);return d===void 0&&(d={},i.set(c,d)),d}function r(c){i.delete(c)}function a(c,d,f){i.get(c)[d]=f}function l(){i=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function yR(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cx(){const i=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(y){let M=0;return y.isInstancedMesh&&(M+=2),y.isSkinnedMesh&&(M+=1),M}function d(y,M,b,C,S,g){let R=i[e];return R===void 0?(R={id:y.id,object:y,geometry:M,material:b,materialVariant:c(y),groupOrder:C,renderOrder:y.renderOrder,z:S,group:g},i[e]=R):(R.id=y.id,R.object=y,R.geometry=M,R.material=b,R.materialVariant=c(y),R.groupOrder=C,R.renderOrder=y.renderOrder,R.z=S,R.group=g),e++,R}function f(y,M,b,C,S,g){const R=d(y,M,b,C,S,g);b.transmission>0?r.push(R):b.transparent===!0?a.push(R):t.push(R)}function p(y,M,b,C,S,g){const R=d(y,M,b,C,S,g);b.transmission>0?r.unshift(R):b.transparent===!0?a.unshift(R):t.unshift(R)}function x(y,M,b){t.length>1&&t.sort(y||yR),r.length>1&&r.sort(M||lx),a.length>1&&a.sort(M||lx),b&&(t.reverse(),r.reverse(),a.reverse())}function _(){for(let y=e,M=i.length;y<M;y++){const b=i[y];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:f,unshift:p,finish:_,sort:x}}function SR(){let i=new WeakMap;function e(r,a){const l=i.get(r);let c;return l===void 0?(c=new cx,i.set(r,[c])):a>=l.length?(c=new cx,l.push(c)):c=l[a],c}function t(){i=new WeakMap}return{get:e,dispose:t}}function MR(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new te,color:new Et};break;case"SpotLight":t={position:new te,direction:new te,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new te,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new te,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new te,halfWidth:new te,halfHeight:new te};break}return i[e.id]=t,t}}}function ER(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let wR=0;function bR(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function TR(i){const e=new MR,t=ER(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new te);const a=new te,l=new nn,c=new nn;function d(p){let x=0,_=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,C=0,S=0,g=0,R=0,L=0,T=0,D=0,P=0,F=0;p.sort(bR);for(let U=0,z=p.length;U<z;U++){const V=p[U],Z=V.color,ue=V.intensity,me=V.distance;let X=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===Ts?X=V.shadow.map.texture:X=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)x+=Z.r*ue,_+=Z.g*ue,y+=Z.b*ue;else if(V.isLightProbe){for(let pe=0;pe<9;pe++)r.probe[pe].addScaledVector(V.sh.coefficients[pe],ue);F++}else if(V.isDirectionalLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const J=V.shadow,q=t.get(V);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.directionalShadow[M]=q,r.directionalShadowMap[M]=X,r.directionalShadowMatrix[M]=V.shadow.matrix,R++}r.directional[M]=pe,M++}else if(V.isSpotLight){const pe=e.get(V);pe.position.setFromMatrixPosition(V.matrixWorld),pe.color.copy(Z).multiplyScalar(ue),pe.distance=me,pe.coneCos=Math.cos(V.angle),pe.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),pe.decay=V.decay,r.spot[C]=pe;const J=V.shadow;if(V.map&&(r.spotLightMap[D]=V.map,D++,J.updateMatrices(V),V.castShadow&&P++),r.spotLightMatrix[C]=J.matrix,V.castShadow){const q=t.get(V);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=X,T++}C++}else if(V.isRectAreaLight){const pe=e.get(V);pe.color.copy(Z).multiplyScalar(ue),pe.halfWidth.set(V.width*.5,0,0),pe.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=pe,S++}else if(V.isPointLight){const pe=e.get(V);if(pe.color.copy(V.color).multiplyScalar(V.intensity),pe.distance=V.distance,pe.decay=V.decay,V.castShadow){const J=V.shadow,q=t.get(V);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,r.pointShadow[b]=q,r.pointShadowMap[b]=X,r.pointShadowMatrix[b]=V.shadow.matrix,L++}r.point[b]=pe,b++}else if(V.isHemisphereLight){const pe=e.get(V);pe.skyColor.copy(V.color).multiplyScalar(ue),pe.groundColor.copy(V.groundColor).multiplyScalar(ue),r.hemi[g]=pe,g++}}S>0&&(i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ve.LTC_FLOAT_1,r.rectAreaLTC2=Ve.LTC_FLOAT_2):(r.rectAreaLTC1=Ve.LTC_HALF_1,r.rectAreaLTC2=Ve.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=y;const w=r.hash;(w.directionalLength!==M||w.pointLength!==b||w.spotLength!==C||w.rectAreaLength!==S||w.hemiLength!==g||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==T||w.numSpotMaps!==D||w.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=b,r.hemi.length=g,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=T+D-P,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,w.directionalLength=M,w.pointLength=b,w.spotLength=C,w.rectAreaLength=S,w.hemiLength=g,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=T,w.numSpotMaps=D,w.numLightProbes=F,r.version=wR++)}function f(p,x){let _=0,y=0,M=0,b=0,C=0;const S=x.matrixWorldInverse;for(let g=0,R=p.length;g<R;g++){const L=p[g];if(L.isDirectionalLight){const T=r.directional[_];T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),_++}else if(L.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),T.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const T=r.rectArea[b];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),c.identity(),l.copy(L.matrixWorld),l.premultiply(S),c.extractRotation(l),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),b++}else if(L.isPointLight){const T=r.point[y];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const T=r.hemi[C];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(S),C++}}}return{setup:d,setupView:f,state:r}}function ux(i){const e=new TR(i),t=[],r=[],a=[];function l(y){_.camera=y,t.length=0,r.length=0,a.length=0}function c(y){t.push(y)}function d(y){r.push(y)}function f(y){a.push(y)}function p(){e.setup(t)}function x(y){e.setupView(t,y)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:p,setupLightsView:x,pushLight:c,pushShadow:d,pushLightProbeGrid:f}}function AR(i){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let d;return c===void 0?(d=new ux(i),e.set(a,[d])):l>=c.length?(d=new ux(i),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const CR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RR=`uniform sampler2D shadow_pass;
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
}`,NR=[new te(1,0,0),new te(-1,0,0),new te(0,1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1)],PR=[new te(0,-1,0),new te(0,-1,0),new te(0,0,1),new te(0,0,-1),new te(0,-1,0),new te(0,-1,0)],dx=new nn,Mo=new te,Sf=new te;function LR(i,e,t){let r=new Zh;const a=new At,l=new At,c=new en,d=new Bb,f=new zb,p={},x=t.maxTextureSize,_={[Xr]:Kn,[Kn]:Xr,[lr]:lr},y=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:CR,fragmentShader:RR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new Gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ni(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vc;let g=this.type;this.render=function(P,F,w){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===ov&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=vc);const U=i.getRenderTarget(),z=i.getActiveCubeFace(),V=i.getActiveMipmapLevel(),Z=i.state;Z.setBlending(ur),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const ue=g!==this.type;ue&&F.traverse(function(me){me.material&&(Array.isArray(me.material)?me.material.forEach(X=>X.needsUpdate=!0):me.material.needsUpdate=!0)});for(let me=0,X=P.length;me<X;me++){const pe=P[me],J=pe.shadow;if(J===void 0){pt("WebGLShadowMap:",pe,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;a.copy(J.mapSize);const q=J.getFrameExtents();a.multiply(q),l.copy(J.mapSize),(a.x>x||a.y>x)&&(a.x>x&&(l.x=Math.floor(x/q.x),a.x=l.x*q.x,J.mapSize.x=l.x),a.y>x&&(l.y=Math.floor(x/q.y),a.y=l.y*q.y,J.mapSize.y=l.y));const ce=i.state.buffers.depth.getReversed();if(J.camera._reversedDepth=ce,J.map===null||ue===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===wo){if(pe.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new Hi(a.x,a.y,{format:Ts,type:fr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),J.map.texture.name=pe.name+".shadowMap",J.map.depthTexture=new Ma(a.x,a.y,Bi),J.map.depthTexture.name=pe.name+".shadowMapDepth",J.map.depthTexture.format=hr,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=En,J.map.depthTexture.magFilter=En}else pe.isPointLight?(J.map=new kv(a.x),J.map.depthTexture=new Lb(a.x,ji)):(J.map=new Hi(a.x,a.y),J.map.depthTexture=new Ma(a.x,a.y,ji)),J.map.depthTexture.name=pe.name+".shadowMap",J.map.depthTexture.format=hr,this.type===vc?(J.map.depthTexture.compareFunction=ce?qh:Xh,J.map.depthTexture.minFilter=Pn,J.map.depthTexture.magFilter=Pn):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=En,J.map.depthTexture.magFilter=En);J.camera.updateProjectionMatrix()}const se=J.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<se;O++){if(J.map.isWebGLCubeRenderTarget)i.setRenderTarget(J.map,O),i.clear();else{O===0&&(i.setRenderTarget(J.map),i.clear());const Q=J.getViewport(O);c.set(l.x*Q.x,l.y*Q.y,l.x*Q.z,l.y*Q.w),Z.viewport(c)}if(pe.isPointLight){const Q=J.camera,Oe=J.matrix,je=pe.distance||Q.far;je!==Q.far&&(Q.far=je,Q.updateProjectionMatrix()),Mo.setFromMatrixPosition(pe.matrixWorld),Q.position.copy(Mo),Sf.copy(Q.position),Sf.add(NR[O]),Q.up.copy(PR[O]),Q.lookAt(Sf),Q.updateMatrixWorld(),Oe.makeTranslation(-Mo.x,-Mo.y,-Mo.z),dx.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),J._frustum.setFromProjectionMatrix(dx,Q.coordinateSystem,Q.reversedDepth)}else J.updateMatrices(pe);r=J.getFrustum(),T(F,w,J.camera,pe,this.type)}J.isPointLightShadow!==!0&&this.type===wo&&R(J,w),J.needsUpdate=!1}g=this.type,S.needsUpdate=!1,i.setRenderTarget(U,z,V)};function R(P,F){const w=e.update(C);y.defines.VSM_SAMPLES!==P.blurSamples&&(y.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Hi(a.x,a.y,{format:Ts,type:fr})),y.uniforms.shadow_pass.value=P.map.depthTexture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(F,null,w,y,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(F,null,w,M,C,null)}function L(P,F,w,U){let z=null;const V=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)z=V;else if(z=w.isPointLight===!0?f:d,i.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Z=z.uuid,ue=F.uuid;let me=p[Z];me===void 0&&(me={},p[Z]=me);let X=me[ue];X===void 0&&(X=z.clone(),me[ue]=X,F.addEventListener("dispose",D)),z=X}if(z.visible=F.visible,z.wireframe=F.wireframe,U===wo?z.side=F.shadowSide!==null?F.shadowSide:F.side:z.side=F.shadowSide!==null?F.shadowSide:_[F.side],z.alphaMap=F.alphaMap,z.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,z.map=F.map,z.clipShadows=F.clipShadows,z.clippingPlanes=F.clippingPlanes,z.clipIntersection=F.clipIntersection,z.displacementMap=F.displacementMap,z.displacementScale=F.displacementScale,z.displacementBias=F.displacementBias,z.wireframeLinewidth=F.wireframeLinewidth,z.linewidth=F.linewidth,w.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const Z=i.properties.get(z);Z.light=w}return z}function T(P,F,w,U,z){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===wo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ue=e.update(P),me=P.material;if(Array.isArray(me)){const X=ue.groups;for(let pe=0,J=X.length;pe<J;pe++){const q=X[pe],ce=me[q.materialIndex];if(ce&&ce.visible){const se=L(P,ce,U,z);P.onBeforeShadow(i,P,F,w,ue,se,q),i.renderBufferDirect(w,null,ue,se,P,q),P.onAfterShadow(i,P,F,w,ue,se,q)}}}else if(me.visible){const X=L(P,me,U,z);P.onBeforeShadow(i,P,F,w,ue,X,null),i.renderBufferDirect(w,null,ue,X,P,null),P.onAfterShadow(i,P,F,w,ue,X,null)}}const Z=P.children;for(let ue=0,me=Z.length;ue<me;ue++)T(Z[ue],F,w,U,z)}function D(P){P.target.removeEventListener("dispose",D);for(const w in p){const U=p[w],z=P.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}}function DR(i,e){function t(){let B=!1;const Me=new en;let oe=null;const Ae=new en(0,0,0,0);return{setMask:function(Le){oe!==Le&&!B&&(i.colorMask(Le,Le,Le,Le),oe=Le)},setLocked:function(Le){B=Le},setClear:function(Le,Se,Je,$e,Bt){Bt===!0&&(Le*=$e,Se*=$e,Je*=$e),Me.set(Le,Se,Je,$e),Ae.equals(Me)===!1&&(i.clearColor(Le,Se,Je,$e),Ae.copy(Me))},reset:function(){B=!1,oe=null,Ae.set(-1,0,0,0)}}}function r(){let B=!1,Me=!1,oe=null,Ae=null,Le=null;return{setReversed:function(Se){if(Me!==Se){const Je=e.get("EXT_clip_control");Se?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),Me=Se;const $e=Le;Le=null,this.setClear($e)}},getReversed:function(){return Me},setTest:function(Se){Se?ve(i.DEPTH_TEST):ze(i.DEPTH_TEST)},setMask:function(Se){oe!==Se&&!B&&(i.depthMask(Se),oe=Se)},setFunc:function(Se){if(Me&&(Se=ob[Se]),Ae!==Se){switch(Se){case Df:i.depthFunc(i.NEVER);break;case If:i.depthFunc(i.ALWAYS);break;case Uf:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case Of:i.depthFunc(i.EQUAL);break;case Ff:i.depthFunc(i.GEQUAL);break;case kf:i.depthFunc(i.GREATER);break;case Bf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ae=Se}},setLocked:function(Se){B=Se},setClear:function(Se){Le!==Se&&(Le=Se,Me&&(Se=1-Se),i.clearDepth(Se))},reset:function(){B=!1,oe=null,Ae=null,Le=null,Me=!1}}}function a(){let B=!1,Me=null,oe=null,Ae=null,Le=null,Se=null,Je=null,$e=null,Bt=null;return{setTest:function(Dt){B||(Dt?ve(i.STENCIL_TEST):ze(i.STENCIL_TEST))},setMask:function(Dt){Me!==Dt&&!B&&(i.stencilMask(Dt),Me=Dt)},setFunc:function(Dt,un,si){(oe!==Dt||Ae!==un||Le!==si)&&(i.stencilFunc(Dt,un,si),oe=Dt,Ae=un,Le=si)},setOp:function(Dt,un,si){(Se!==Dt||Je!==un||$e!==si)&&(i.stencilOp(Dt,un,si),Se=Dt,Je=un,$e=si)},setLocked:function(Dt){B=Dt},setClear:function(Dt){Bt!==Dt&&(i.clearStencil(Dt),Bt=Dt)},reset:function(){B=!1,Me=null,oe=null,Ae=null,Le=null,Se=null,Je=null,$e=null,Bt=null}}}const l=new t,c=new r,d=new a,f=new WeakMap,p=new WeakMap;let x={},_={},y={},M=new WeakMap,b=[],C=null,S=!1,g=null,R=null,L=null,T=null,D=null,P=null,F=null,w=new Et(0,0,0),U=0,z=!1,V=null,Z=null,ue=null,me=null,X=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,q=0;const ce=i.getParameter(i.VERSION);ce.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ce)[1]),J=q>=1):ce.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),J=q>=2);let se=null,O={};const Q=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),je=new en().fromArray(Q),We=new en().fromArray(Oe);function Y(B,Me,oe,Ae){const Le=new Uint8Array(4),Se=i.createTexture();i.bindTexture(B,Se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<oe;Je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Me,0,i.RGBA,1,1,Ae,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Me+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Se}const _e={};_e[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ve(i.DEPTH_TEST),c.setFunc(ya),Ke(!1),_t(dg),ve(i.CULL_FACE),Ge(ur);function ve(B){x[B]!==!0&&(i.enable(B),x[B]=!0)}function ze(B){x[B]!==!1&&(i.disable(B),x[B]=!1)}function it(B,Me){return y[B]!==Me?(i.bindFramebuffer(B,Me),y[B]=Me,B===i.DRAW_FRAMEBUFFER&&(y[i.FRAMEBUFFER]=Me),B===i.FRAMEBUFFER&&(y[i.DRAW_FRAMEBUFFER]=Me),!0):!1}function nt(B,Me){let oe=b,Ae=!1;if(B){oe=M.get(Me),oe===void 0&&(oe=[],M.set(Me,oe));const Le=B.textures;if(oe.length!==Le.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,Je=Le.length;Se<Je;Se++)oe[Se]=i.COLOR_ATTACHMENT0+Se;oe.length=Le.length,Ae=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ae=!0);Ae&&i.drawBuffers(oe)}function Ce(B){return C!==B?(i.useProgram(B),C=B,!0):!1}const le={[gs]:i.FUNC_ADD,[Nw]:i.FUNC_SUBTRACT,[Pw]:i.FUNC_REVERSE_SUBTRACT};le[Lw]=i.MIN,le[Dw]=i.MAX;const Ne={[Iw]:i.ZERO,[Uw]:i.ONE,[Ow]:i.SRC_COLOR,[Pf]:i.SRC_ALPHA,[Hw]:i.SRC_ALPHA_SATURATE,[zw]:i.DST_COLOR,[kw]:i.DST_ALPHA,[Fw]:i.ONE_MINUS_SRC_COLOR,[Lf]:i.ONE_MINUS_SRC_ALPHA,[Vw]:i.ONE_MINUS_DST_COLOR,[Bw]:i.ONE_MINUS_DST_ALPHA,[Gw]:i.CONSTANT_COLOR,[jw]:i.ONE_MINUS_CONSTANT_COLOR,[Ww]:i.CONSTANT_ALPHA,[Xw]:i.ONE_MINUS_CONSTANT_ALPHA};function Ge(B,Me,oe,Ae,Le,Se,Je,$e,Bt,Dt){if(B===ur){S===!0&&(ze(i.BLEND),S=!1);return}if(S===!1&&(ve(i.BLEND),S=!0),B!==Rw){if(B!==g||Dt!==z){if((R!==gs||D!==gs)&&(i.blendEquation(i.FUNC_ADD),R=gs,D=gs),Dt)switch(B){case ma:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fg:i.blendFunc(i.ONE,i.ONE);break;case hg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pt("WebGLState: Invalid blending: ",B);break}else switch(B){case ma:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hg:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pg:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",B);break}L=null,T=null,P=null,F=null,w.set(0,0,0),U=0,g=B,z=Dt}return}Le=Le||Me,Se=Se||oe,Je=Je||Ae,(Me!==R||Le!==D)&&(i.blendEquationSeparate(le[Me],le[Le]),R=Me,D=Le),(oe!==L||Ae!==T||Se!==P||Je!==F)&&(i.blendFuncSeparate(Ne[oe],Ne[Ae],Ne[Se],Ne[Je]),L=oe,T=Ae,P=Se,F=Je),($e.equals(w)===!1||Bt!==U)&&(i.blendColor($e.r,$e.g,$e.b,Bt),w.copy($e),U=Bt),g=B,z=!1}function Ee(B,Me){B.side===lr?ze(i.CULL_FACE):ve(i.CULL_FACE);let oe=B.side===Kn;Me&&(oe=!oe),Ke(oe),B.blending===ma&&B.transparent===!1?Ge(ur):Ge(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),c.setFunc(B.depthFunc),c.setTest(B.depthTest),c.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ae=B.stencilWrite;d.setTest(Ae),Ae&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),kt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ve(i.SAMPLE_ALPHA_TO_COVERAGE):ze(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(B){V!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),V=B)}function _t(B){B!==Aw?(ve(i.CULL_FACE),B!==Z&&(B===dg?i.cullFace(i.BACK):B===Cw?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ze(i.CULL_FACE),Z=B}function yt(B){B!==ue&&(J&&i.lineWidth(B),ue=B)}function kt(B,Me,oe){B?(ve(i.POLYGON_OFFSET_FILL),(me!==Me||X!==oe)&&(me=Me,X=oe,c.getReversed()&&(Me=-Me),i.polygonOffset(Me,oe))):ze(i.POLYGON_OFFSET_FILL)}function Lt(B){B?ve(i.SCISSOR_TEST):ze(i.SCISSOR_TEST)}function Ut(B){B===void 0&&(B=i.TEXTURE0+pe-1),se!==B&&(i.activeTexture(B),se=B)}function W(B,Me,oe){oe===void 0&&(se===null?oe=i.TEXTURE0+pe-1:oe=se);let Ae=O[oe];Ae===void 0&&(Ae={type:void 0,texture:void 0},O[oe]=Ae),(Ae.type!==B||Ae.texture!==Me)&&(se!==oe&&(i.activeTexture(oe),se=oe),i.bindTexture(B,Me||_e[B]),Ae.type=B,Ae.texture=Me)}function Gt(){const B=O[se];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function E(){try{i.texSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function K(){try{i.texSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ie(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function be(){try{i.texStorage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function Fe(){try{i.texStorage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function xe(){try{i.texImage2D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ye(){try{i.texImage3D(...arguments)}catch(B){Pt("WebGLState:",B)}}function ke(B){return _[B]!==void 0?_[B]:i.getParameter(B)}function Qe(B,Me){_[B]!==Me&&(i.pixelStorei(B,Me),_[B]=Me)}function Be(B){je.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function Ie(B){We.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),We.copy(B))}function ot(B,Me){let oe=p.get(Me);oe===void 0&&(oe=new WeakMap,p.set(Me,oe));let Ae=oe.get(B);Ae===void 0&&(Ae=i.getUniformBlockIndex(Me,B.name),oe.set(B,Ae))}function ut(B,Me){const Ae=p.get(Me).get(B);f.get(Me)!==Ae&&(i.uniformBlockBinding(Me,Ae,B.__bindingPointIndex),f.set(Me,Ae))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),c.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),x={},_={},se=null,O={},y={},M=new WeakMap,b=[],C=null,S=!1,g=null,R=null,L=null,T=null,D=null,P=null,F=null,w=new Et(0,0,0),U=0,z=!1,V=null,Z=null,ue=null,me=null,X=null,je.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ve,disable:ze,bindFramebuffer:it,drawBuffers:nt,useProgram:Ce,setBlending:Ge,setMaterial:Ee,setFlipSided:Ke,setCullFace:_t,setLineWidth:yt,setPolygonOffset:kt,setScissorTest:Lt,activeTexture:Ut,bindTexture:W,unbindTexture:Gt,compressedTexImage2D:Rt,compressedTexImage3D:I,texImage2D:xe,texImage3D:ye,pixelStorei:Qe,getParameter:ke,updateUBOMapping:ot,uniformBlockBinding:ut,texStorage2D:be,texStorage3D:Fe,texSubImage2D:E,texSubImage3D:K,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:Be,viewport:Ie,reset:et}}function IR(i,e,t,r,a,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new At,x=new WeakMap,_=new Set;let y;const M=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,E){return b?new OffscreenCanvas(I,E):Ic("canvas")}function S(I,E,K){let ie=1;const ge=Rt(I);if((ge.width>K||ge.height>K)&&(ie=K/Math.max(ge.width,ge.height)),ie<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const be=Math.floor(ie*ge.width),Fe=Math.floor(ie*ge.height);y===void 0&&(y=C(be,Fe));const xe=E?C(be,Fe):y;return xe.width=be,xe.height=Fe,xe.getContext("2d").drawImage(I,0,0,be,Fe),pt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+be+"x"+Fe+")."),xe}else return"data"in I&&pt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function g(I){return I.generateMipmaps}function R(I){i.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(I,E,K,ie,ge,be=!1){if(I!==null){if(i[I]!==void 0)return i[I];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Fe;ie&&(Fe=e.get("EXT_texture_norm16"),Fe||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=E;if(E===i.RED&&(K===i.FLOAT&&(xe=i.R32F),K===i.HALF_FLOAT&&(xe=i.R16F),K===i.UNSIGNED_BYTE&&(xe=i.R8),K===i.UNSIGNED_SHORT&&Fe&&(xe=Fe.R16_EXT),K===i.SHORT&&Fe&&(xe=Fe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(xe=i.R8UI),K===i.UNSIGNED_SHORT&&(xe=i.R16UI),K===i.UNSIGNED_INT&&(xe=i.R32UI),K===i.BYTE&&(xe=i.R8I),K===i.SHORT&&(xe=i.R16I),K===i.INT&&(xe=i.R32I)),E===i.RG&&(K===i.FLOAT&&(xe=i.RG32F),K===i.HALF_FLOAT&&(xe=i.RG16F),K===i.UNSIGNED_BYTE&&(xe=i.RG8),K===i.UNSIGNED_SHORT&&Fe&&(xe=Fe.RG16_EXT),K===i.SHORT&&Fe&&(xe=Fe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(xe=i.RG8UI),K===i.UNSIGNED_SHORT&&(xe=i.RG16UI),K===i.UNSIGNED_INT&&(xe=i.RG32UI),K===i.BYTE&&(xe=i.RG8I),K===i.SHORT&&(xe=i.RG16I),K===i.INT&&(xe=i.RG32I)),E===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(xe=i.RGB8UI),K===i.UNSIGNED_SHORT&&(xe=i.RGB16UI),K===i.UNSIGNED_INT&&(xe=i.RGB32UI),K===i.BYTE&&(xe=i.RGB8I),K===i.SHORT&&(xe=i.RGB16I),K===i.INT&&(xe=i.RGB32I)),E===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(xe=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(xe=i.RGBA16UI),K===i.UNSIGNED_INT&&(xe=i.RGBA32UI),K===i.BYTE&&(xe=i.RGBA8I),K===i.SHORT&&(xe=i.RGBA16I),K===i.INT&&(xe=i.RGBA32I)),E===i.RGB&&(K===i.UNSIGNED_SHORT&&Fe&&(xe=Fe.RGB16_EXT),K===i.SHORT&&Fe&&(xe=Fe.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(xe=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(xe=i.R11F_G11F_B10F)),E===i.RGBA){const ye=be?Dc:Ct.getTransfer(ge);K===i.FLOAT&&(xe=i.RGBA32F),K===i.HALF_FLOAT&&(xe=i.RGBA16F),K===i.UNSIGNED_BYTE&&(xe=ye===Ht?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Fe&&(xe=Fe.RGBA16_EXT),K===i.SHORT&&Fe&&(xe=Fe.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(xe=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(xe=i.RGB5_A1)}return(xe===i.R16F||xe===i.R32F||xe===i.RG16F||xe===i.RG32F||xe===i.RGBA16F||xe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function D(I,E){let K;return I?E===null||E===ji||E===Po?K=i.DEPTH24_STENCIL8:E===Bi?K=i.DEPTH32F_STENCIL8:E===No&&(K=i.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ji||E===Po?K=i.DEPTH_COMPONENT24:E===Bi?K=i.DEPTH_COMPONENT32F:E===No&&(K=i.DEPTH_COMPONENT16),K}function P(I,E){return g(I)===!0||I.isFramebufferTexture&&I.minFilter!==En&&I.minFilter!==Pn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function F(I){const E=I.target;E.removeEventListener("dispose",F),U(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&_.delete(E)}function w(I){const E=I.target;E.removeEventListener("dispose",w),V(E)}function U(I){const E=r.get(I);if(E.__webglInit===void 0)return;const K=I.source,ie=M.get(K);if(ie){const ge=ie[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&z(I),Object.keys(ie).length===0&&M.delete(K)}r.remove(I)}function z(I){const E=r.get(I);i.deleteTexture(E.__webglTexture);const K=I.source,ie=M.get(K);delete ie[E.__cacheKey],c.memory.textures--}function V(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(E.__webglFramebuffer[ie]))for(let ge=0;ge<E.__webglFramebuffer[ie].length;ge++)i.deleteFramebuffer(E.__webglFramebuffer[ie][ge]);else i.deleteFramebuffer(E.__webglFramebuffer[ie]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ie])}else{if(Array.isArray(E.__webglFramebuffer))for(let ie=0;ie<E.__webglFramebuffer.length;ie++)i.deleteFramebuffer(E.__webglFramebuffer[ie]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ie=0;ie<E.__webglColorRenderbuffer.length;ie++)E.__webglColorRenderbuffer[ie]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ie]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=I.textures;for(let ie=0,ge=K.length;ie<ge;ie++){const be=r.get(K[ie]);be.__webglTexture&&(i.deleteTexture(be.__webglTexture),c.memory.textures--),r.remove(K[ie])}r.remove(I)}let Z=0;function ue(){Z=0}function me(){return Z}function X(I){Z=I}function pe(){const I=Z;return I>=a.maxTextures&&pt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+a.maxTextures),Z+=1,I}function J(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function q(I,E){const K=r.get(I);if(I.isVideoTexture&&W(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&K.__version!==I.version){const ie=I.image;if(ie===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ze(K,I,E);return}}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+E)}function ce(I,E){const K=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){ze(K,I,E);return}else I.isExternalTexture&&(K.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+E)}function se(I,E){const K=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&K.__version!==I.version){ze(K,I,E);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+E)}function O(I,E){const K=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&K.__version!==I.version){it(K,I,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+E)}const Q={[zf]:i.REPEAT,[cr]:i.CLAMP_TO_EDGE,[Vf]:i.MIRRORED_REPEAT},Oe={[En]:i.NEAREST,[Yw]:i.NEAREST_MIPMAP_NEAREST,[ql]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Gd]:i.LINEAR_MIPMAP_NEAREST,[_s]:i.LINEAR_MIPMAP_LINEAR},je={[Jw]:i.NEVER,[ib]:i.ALWAYS,[Qw]:i.LESS,[Xh]:i.LEQUAL,[eb]:i.EQUAL,[qh]:i.GEQUAL,[tb]:i.GREATER,[nb]:i.NOTEQUAL};function We(I,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Pn||E.magFilter===Gd||E.magFilter===ql||E.magFilter===_s||E.minFilter===Pn||E.minFilter===Gd||E.minFilter===ql||E.minFilter===_s)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,Q[E.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,Q[E.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,Q[E.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,Oe[E.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,Oe[E.minFilter]),E.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,je[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==ql&&E.minFilter!==_s||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Y(I,E){let K=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",F));const ie=E.source;let ge=M.get(ie);ge===void 0&&(ge={},M.set(ie,ge));const be=J(E);if(be!==I.__cacheKey){ge[be]===void 0&&(ge[be]={texture:i.createTexture(),usedTimes:0},c.memory.textures++,K=!0),ge[be].usedTimes++;const Fe=ge[I.__cacheKey];Fe!==void 0&&(ge[I.__cacheKey].usedTimes--,Fe.usedTimes===0&&z(E)),I.__cacheKey=be,I.__webglTexture=ge[be].texture}return K}function _e(I,E,K){return Math.floor(Math.floor(I/K)/E)}function ve(I,E,K,ie){const be=I.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,K,ie,E.data);else{be.sort((Qe,Be)=>Qe.start-Be.start);let Fe=0;for(let Qe=1;Qe<be.length;Qe++){const Be=be[Fe],Ie=be[Qe],ot=Be.start+Be.count,ut=_e(Ie.start,E.width,4),et=_e(Be.start,E.width,4);Ie.start<=ot+1&&ut===et&&_e(Ie.start+Ie.count-1,E.width,4)===ut?Be.count=Math.max(Be.count,Ie.start+Ie.count-Be.start):(++Fe,be[Fe]=Ie)}be.length=Fe+1;const xe=t.getParameter(i.UNPACK_ROW_LENGTH),ye=t.getParameter(i.UNPACK_SKIP_PIXELS),ke=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Qe=0,Be=be.length;Qe<Be;Qe++){const Ie=be[Qe],ot=Math.floor(Ie.start/4),ut=Math.ceil(Ie.count/4),et=ot%E.width,B=Math.floor(ot/E.width),Me=ut,oe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,et),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,et,B,Me,oe,K,ie,E.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,xe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke)}}function ze(I,E,K){let ie=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ie=i.TEXTURE_3D);const ge=Y(I,E),be=E.source;t.bindTexture(ie,I.__webglTexture,i.TEXTURE0+K);const Fe=r.get(be);if(be.version!==Fe.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const oe=Ct.getPrimaries(Ct.workingColorSpace),Ae=E.colorSpace===Hr?null:Ct.getPrimaries(E.colorSpace),Le=E.colorSpace===Hr||oe===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ye=S(E.image,!1,a.maxTextureSize);ye=Gt(E,ye);const ke=l.convert(E.format,E.colorSpace),Qe=l.convert(E.type);let Be=T(E.internalFormat,ke,Qe,E.normalized,E.colorSpace,E.isVideoTexture);We(ie,E);let Ie;const ot=E.mipmaps,ut=E.isVideoTexture!==!0,et=Fe.__version===void 0||ge===!0,B=be.dataReady,Me=P(E,ye);if(E.isDepthTexture)Be=D(E.format===ys,E.type),et&&(ut?t.texStorage2D(i.TEXTURE_2D,1,Be,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Be,ye.width,ye.height,0,ke,Qe,null));else if(E.isDataTexture)if(ot.length>0){ut&&et&&t.texStorage2D(i.TEXTURE_2D,Me,Be,ot[0].width,ot[0].height);for(let oe=0,Ae=ot.length;oe<Ae;oe++)Ie=ot[oe],ut?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ie.width,Ie.height,ke,Qe,Ie.data):t.texImage2D(i.TEXTURE_2D,oe,Be,Ie.width,Ie.height,0,ke,Qe,Ie.data);E.generateMipmaps=!1}else ut?(et&&t.texStorage2D(i.TEXTURE_2D,Me,Be,ye.width,ye.height),B&&ve(E,ye,ke,Qe)):t.texImage2D(i.TEXTURE_2D,0,Be,ye.width,ye.height,0,ke,Qe,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ut&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Be,ot[0].width,ot[0].height,ye.depth);for(let oe=0,Ae=ot.length;oe<Ae;oe++)if(Ie=ot[oe],E.format!==Ri)if(ke!==null)if(ut){if(B)if(E.layerUpdates.size>0){const Le=Hg(Ie.width,Ie.height,E.format,E.type);for(const Se of E.layerUpdates){const Je=Ie.data.subarray(Se*Le/Ie.data.BYTES_PER_ELEMENT,(Se+1)*Le/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Se,Ie.width,Ie.height,1,ke,Je)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ie.width,Ie.height,ye.depth,ke,Ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Be,Ie.width,Ie.height,ye.depth,0,Ie.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ie.width,Ie.height,ye.depth,ke,Qe,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Be,Ie.width,Ie.height,ye.depth,0,ke,Qe,Ie.data)}else{ut&&et&&t.texStorage2D(i.TEXTURE_2D,Me,Be,ot[0].width,ot[0].height);for(let oe=0,Ae=ot.length;oe<Ae;oe++)Ie=ot[oe],E.format!==Ri?ke!==null?ut?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ie.width,Ie.height,ke,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Be,Ie.width,Ie.height,0,Ie.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ie.width,Ie.height,ke,Qe,Ie.data):t.texImage2D(i.TEXTURE_2D,oe,Be,Ie.width,Ie.height,0,ke,Qe,Ie.data)}else if(E.isDataArrayTexture)if(ut){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Me,Be,ye.width,ye.height,ye.depth),B)if(E.layerUpdates.size>0){const oe=Hg(ye.width,ye.height,E.format,E.type);for(const Ae of E.layerUpdates){const Le=ye.data.subarray(Ae*oe/ye.data.BYTES_PER_ELEMENT,(Ae+1)*oe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ae,ye.width,ye.height,1,ke,Qe,Le)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,ke,Qe,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,ye.width,ye.height,ye.depth,0,ke,Qe,ye.data);else if(E.isData3DTexture)ut?(et&&t.texStorage3D(i.TEXTURE_3D,Me,Be,ye.width,ye.height,ye.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,ke,Qe,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Be,ye.width,ye.height,ye.depth,0,ke,Qe,ye.data);else if(E.isFramebufferTexture){if(et)if(ut)t.texStorage2D(i.TEXTURE_2D,Me,Be,ye.width,ye.height);else{let oe=ye.width,Ae=ye.height;for(let Le=0;Le<Me;Le++)t.texImage2D(i.TEXTURE_2D,Le,Be,oe,Ae,0,ke,Qe,null),oe>>=1,Ae>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const oe=i.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),ye.parentNode!==oe){oe.appendChild(ye),_.add(E),oe.onpaint=Ae=>{const Le=Ae.changedElements;for(const Se of _)Le.includes(Se.image)&&(Se.needsUpdate=!0)},oe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ye);else{const Le=i.RGBA,Se=i.RGBA,Je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Le,Se,Je,ye)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ot.length>0){if(ut&&et){const oe=Rt(ot[0]);t.texStorage2D(i.TEXTURE_2D,Me,Be,oe.width,oe.height)}for(let oe=0,Ae=ot.length;oe<Ae;oe++)Ie=ot[oe],ut?B&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,ke,Qe,Ie):t.texImage2D(i.TEXTURE_2D,oe,Be,ke,Qe,Ie);E.generateMipmaps=!1}else if(ut){if(et){const oe=Rt(ye);t.texStorage2D(i.TEXTURE_2D,Me,Be,oe.width,oe.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ke,Qe,ye)}else t.texImage2D(i.TEXTURE_2D,0,Be,ke,Qe,ye);g(E)&&R(ie),Fe.__version=be.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function it(I,E,K){if(E.image.length!==6)return;const ie=Y(I,E),ge=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+K);const be=r.get(ge);if(ge.version!==be.__version||ie===!0){t.activeTexture(i.TEXTURE0+K);const Fe=Ct.getPrimaries(Ct.workingColorSpace),xe=E.colorSpace===Hr?null:Ct.getPrimaries(E.colorSpace),ye=E.colorSpace===Hr||Fe===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ke=E.isCompressedTexture||E.image[0].isCompressedTexture,Qe=E.image[0]&&E.image[0].isDataTexture,Be=[];for(let Se=0;Se<6;Se++)!ke&&!Qe?Be[Se]=S(E.image[Se],!0,a.maxCubemapSize):Be[Se]=Qe?E.image[Se].image:E.image[Se],Be[Se]=Gt(E,Be[Se]);const Ie=Be[0],ot=l.convert(E.format,E.colorSpace),ut=l.convert(E.type),et=T(E.internalFormat,ot,ut,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,Me=be.__version===void 0||ie===!0,oe=ge.dataReady;let Ae=P(E,Ie);We(i.TEXTURE_CUBE_MAP,E);let Le;if(ke){B&&Me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,Ie.width,Ie.height);for(let Se=0;Se<6;Se++){Le=Be[Se].mipmaps;for(let Je=0;Je<Le.length;Je++){const $e=Le[Je];E.format!==Ri?ot!==null?B?oe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,$e.width,$e.height,ot,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,et,$e.width,$e.height,0,$e.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,0,0,$e.width,$e.height,ot,ut,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je,et,$e.width,$e.height,0,ot,ut,$e.data)}}}else{if(Le=E.mipmaps,B&&Me){Le.length>0&&Ae++;const Se=Rt(Be[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,et,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Qe){B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Be[Se].width,Be[Se].height,ot,ut,Be[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,Be[Se].width,Be[Se].height,0,ot,ut,Be[Se].data);for(let Je=0;Je<Le.length;Je++){const Bt=Le[Je].image[Se].image;B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,Bt.width,Bt.height,ot,ut,Bt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,et,Bt.width,Bt.height,0,ot,ut,Bt.data)}}else{B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ot,ut,Be[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,et,ot,ut,Be[Se]);for(let Je=0;Je<Le.length;Je++){const $e=Le[Je];B?oe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,0,0,ot,ut,$e.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Je+1,et,ot,ut,$e.image[Se])}}}g(E)&&R(i.TEXTURE_CUBE_MAP),be.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function nt(I,E,K,ie,ge,be){const Fe=l.convert(K.format,K.colorSpace),xe=l.convert(K.type),ye=T(K.internalFormat,Fe,xe,K.normalized,K.colorSpace),ke=r.get(E),Qe=r.get(K);if(Qe.__renderTarget=E,!ke.__hasExternalTextures){const Be=Math.max(1,E.width>>be),Ie=Math.max(1,E.height>>be);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,be,ye,Be,Ie,E.depth,0,Fe,xe,null):t.texImage2D(ge,be,ye,Be,Ie,0,Fe,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Ut(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,ge,Qe.__webglTexture,0,Lt(E)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,ge,Qe.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(I,E,K){if(i.bindRenderbuffer(i.RENDERBUFFER,I),E.depthBuffer){const ie=E.depthTexture,ge=ie&&ie.isDepthTexture?ie.type:null,be=D(E.stencilBuffer,ge),Fe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ut(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(E),be,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(E),be,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,be,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,I)}else{const ie=E.textures;for(let ge=0;ge<ie.length;ge++){const be=ie[ge],Fe=l.convert(be.format,be.colorSpace),xe=l.convert(be.type),ye=T(be.internalFormat,Fe,xe,be.normalized,be.colorSpace);Ut(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt(E),ye,E.width,E.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt(E),ye,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ye,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function le(I,E,K){const ie=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ie){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),We(i.TEXTURE_CUBE_MAP,E.depthTexture);const ke=l.convert(E.depthTexture.format),Qe=l.convert(E.depthTexture.type);let Be;E.depthTexture.format===hr?Be=i.DEPTH_COMPONENT24:E.depthTexture.format===ys&&(Be=i.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Be,E.width,E.height,0,ke,Qe,null)}}else q(E.depthTexture,0);const be=ge.__webglTexture,Fe=Lt(E),xe=ie?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ye=E.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===hr)Ut(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,xe,be,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,ye,xe,be,0);else if(E.depthTexture.format===ys)Ut(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ye,xe,be,0,Fe):i.framebufferTexture2D(i.FRAMEBUFFER,ye,xe,be,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(I){const E=r.get(I),K=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const ie=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ie){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ie.removeEventListener("dispose",ge)};ie.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=ie}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(K)for(let ie=0;ie<6;ie++)le(E.__webglFramebuffer[ie],I,ie);else{const ie=I.texture.mipmaps;ie&&ie.length>0?le(E.__webglFramebuffer[0],I,0):le(E.__webglFramebuffer,I,0)}else if(K){E.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ie]),E.__webglDepthbuffer[ie]===void 0)E.__webglDepthbuffer[ie]=i.createRenderbuffer(),Ce(E.__webglDepthbuffer[ie],I,!1);else{const ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer[ie];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,be)}}else{const ie=I.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ce(E.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,be)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(I,E,K){const ie=r.get(I);E!==void 0&&nt(ie.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Ne(I)}function Ee(I){const E=I.texture,K=r.get(I),ie=r.get(E);I.addEventListener("dispose",w);const ge=I.textures,be=I.isWebGLCubeRenderTarget===!0,Fe=ge.length>1;if(Fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=E.version,c.memory.textures++),be){K.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[xe]=[];for(let ye=0;ye<E.mipmaps.length;ye++)K.__webglFramebuffer[xe][ye]=i.createFramebuffer()}else K.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let xe=0;xe<E.mipmaps.length;xe++)K.__webglFramebuffer[xe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let xe=0,ye=ge.length;xe<ye;xe++){const ke=r.get(ge[xe]);ke.__webglTexture===void 0&&(ke.__webglTexture=i.createTexture(),c.memory.textures++)}if(I.samples>0&&Ut(I)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let xe=0;xe<ge.length;xe++){const ye=ge[xe];K.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[xe]);const ke=l.convert(ye.format,ye.colorSpace),Qe=l.convert(ye.type),Be=T(ye.internalFormat,ke,Qe,ye.normalized,ye.colorSpace,I.isXRRenderTarget===!0),Ie=Lt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Be,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,K.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(K.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),We(i.TEXTURE_CUBE_MAP,E);for(let xe=0;xe<6;xe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)nt(K.__webglFramebuffer[xe][ye],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else nt(K.__webglFramebuffer[xe],I,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);g(E)&&R(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let xe=0,ye=ge.length;xe<ye;xe++){const ke=ge[xe],Qe=r.get(ke);let Be=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Be=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Be,Qe.__webglTexture),We(Be,ke),nt(K.__webglFramebuffer,I,ke,i.COLOR_ATTACHMENT0+xe,Be,0),g(ke)&&R(Be)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(xe=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,ie.__webglTexture),We(xe,E),E.mipmaps&&E.mipmaps.length>0)for(let ye=0;ye<E.mipmaps.length;ye++)nt(K.__webglFramebuffer[ye],I,E,i.COLOR_ATTACHMENT0,xe,ye);else nt(K.__webglFramebuffer,I,E,i.COLOR_ATTACHMENT0,xe,0);g(E)&&R(xe),t.unbindTexture()}I.depthBuffer&&Ne(I)}function Ke(I){const E=I.textures;for(let K=0,ie=E.length;K<ie;K++){const ge=E[K];if(g(ge)){const be=L(I),Fe=r.get(ge).__webglTexture;t.bindTexture(be,Fe),R(be),t.unbindTexture()}}}const _t=[],yt=[];function kt(I){if(I.samples>0){if(Ut(I)===!1){const E=I.textures,K=I.width,ie=I.height;let ge=i.COLOR_BUFFER_BIT;const be=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=r.get(I),xe=E.length>1;if(xe)for(let ke=0;ke<E.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const ye=I.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let ke=0;ke<E.length;ke++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Qe=r.get(E[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,K,ie,0,0,K,ie,ge,i.NEAREST),f===!0&&(_t.length=0,yt.length=0,_t.push(i.COLOR_ATTACHMENT0+ke),I.depthBuffer&&I.resolveDepthBuffer===!1&&(_t.push(be),yt.push(be),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,yt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_t))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let ke=0;ke<E.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[ke]);const Qe=r.get(E[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&f){const E=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Lt(I){return Math.min(a.maxSamples,I.samples)}function Ut(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(I){const E=c.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Gt(I,E){const K=I.colorSpace,ie=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||K!==Lc&&K!==Hr&&(Ct.getTransfer(K)===Ht?(ie!==Ri||ge!==ri)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",K)),E}function Rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=pe,this.resetTextureUnits=ue,this.getTextureUnits=me,this.setTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=ce,this.setTexture3D=se,this.setTextureCube=O,this.rebindTextures=Ge,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function UR(i,e){function t(r,a=Hr){let l;const c=Ct.getTransfer(a);if(r===ri)return i.UNSIGNED_BYTE;if(r===Vh)return i.UNSIGNED_SHORT_4_4_4_4;if(r===Hh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===vv)return i.UNSIGNED_INT_5_9_9_9_REV;if(r===_v)return i.UNSIGNED_INT_10F_11F_11F_REV;if(r===gv)return i.BYTE;if(r===xv)return i.SHORT;if(r===No)return i.UNSIGNED_SHORT;if(r===zh)return i.INT;if(r===ji)return i.UNSIGNED_INT;if(r===Bi)return i.FLOAT;if(r===fr)return i.HALF_FLOAT;if(r===yv)return i.ALPHA;if(r===Sv)return i.RGB;if(r===Ri)return i.RGBA;if(r===hr)return i.DEPTH_COMPONENT;if(r===ys)return i.DEPTH_STENCIL;if(r===Mv)return i.RED;if(r===Gh)return i.RED_INTEGER;if(r===Ts)return i.RG;if(r===jh)return i.RG_INTEGER;if(r===Wh)return i.RGBA_INTEGER;if(r===_c||r===yc||r===Sc||r===Mc)if(c===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===_c)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===_c)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Hf||r===Gf||r===jf||r===Wf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Hf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Gf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===jf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xf||r===qf||r===$f||r===Yf||r===Kf||r===Nc||r===Zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xf||r===qf)return c===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===$f)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yf)return l.COMPRESSED_R11_EAC;if(r===Kf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Nc)return l.COMPRESSED_RG11_EAC;if(r===Zf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Jf||r===Qf||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh||r===lh||r===ch||r===uh||r===dh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Jf)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qf)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===eh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===th)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===nh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ih)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===rh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ah)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===oh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===ch)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===uh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===dh)return c===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===fh||r===hh||r===ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===fh)return c===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mh||r===gh||r===Pc||r===xh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===mh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Pc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?i.UNSIGNED_INT_24_8:i[r]!==void 0?i[r]:null}return{convert:t}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
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

}`;class kR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Pv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:OR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new Wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BR extends Cs{constructor(e,t){super();const r=this;let a=null,l=1,c=null,d="local-floor",f=1,p=null,x=null,_=null,y=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new kR,g={},R=t.getContextAttributes();let L=null,T=null;const D=[],P=[],F=new At;let w=null;const U=new ii;U.viewport=new en;const z=new ii;z.viewport=new en;const V=[U,z],Z=new qb;let ue=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let _e=D[Y];return _e===void 0&&(_e=new Zd,D[Y]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(Y){let _e=D[Y];return _e===void 0&&(_e=new Zd,D[Y]=_e),_e.getGripSpace()},this.getHand=function(Y){let _e=D[Y];return _e===void 0&&(_e=new Zd,D[Y]=_e),_e.getHandSpace()};function X(Y){const _e=P.indexOf(Y.inputSource);if(_e===-1)return;const ve=D[_e];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,p||c),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function pe(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",pe),a.removeEventListener("inputsourceschange",J);for(let Y=0;Y<D.length;Y++){const _e=P[Y];_e!==null&&(P[Y]=null,D[Y].disconnect(_e))}ue=null,me=null,S.reset();for(const Y in g)delete g[Y];e.setRenderTarget(L),M=null,y=null,_=null,a=null,T=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){l=Y,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Y){p=Y},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return b},this.getSession=function(){return a},this.setSession=async function(Y){if(a=Y,a!==null){if(L=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",pe),a.addEventListener("inputsourceschange",J),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,ze=null,it=null;R.depth&&(it=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=R.stencil?ys:hr,ze=R.stencil?Po:ji);const nt={colorFormat:t.RGBA8,depthFormat:it,scaleFactor:l};_=this.getBinding(),y=_.createProjectionLayer(nt),a.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),T=new Hi(y.textureWidth,y.textureHeight,{format:Ri,type:ri,depthTexture:new Ma(y.textureWidth,y.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,ve),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new Hi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(f),p=null,c=await a.requestReferenceSpace(d),We.setContext(a),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(Y){for(let _e=0;_e<Y.removed.length;_e++){const ve=Y.removed[_e],ze=P.indexOf(ve);ze>=0&&(P[ze]=null,D[ze].disconnect(ve))}for(let _e=0;_e<Y.added.length;_e++){const ve=Y.added[_e];let ze=P.indexOf(ve);if(ze===-1){for(let nt=0;nt<D.length;nt++)if(nt>=P.length){P.push(ve),ze=nt;break}else if(P[nt]===null){P[nt]=ve,ze=nt;break}if(ze===-1)break}const it=D[ze];it&&it.connect(ve)}}const q=new te,ce=new te;function se(Y,_e,ve){q.setFromMatrixPosition(_e.matrixWorld),ce.setFromMatrixPosition(ve.matrixWorld);const ze=q.distanceTo(ce),it=_e.projectionMatrix.elements,nt=ve.projectionMatrix.elements,Ce=it[14]/(it[10]-1),le=it[14]/(it[10]+1),Ne=(it[9]+1)/it[5],Ge=(it[9]-1)/it[5],Ee=(it[8]-1)/it[0],Ke=(nt[8]+1)/nt[0],_t=Ce*Ee,yt=Ce*Ke,kt=ze/(-Ee+Ke),Lt=kt*-Ee;if(_e.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Lt),Y.translateZ(kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),it[10]===-1)Y.projectionMatrix.copy(_e.projectionMatrix),Y.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ut=Ce+kt,W=le+kt,Gt=_t-Lt,Rt=yt+(ze-Lt),I=Ne*le/W*Ut,E=Ge*le/W*Ut;Y.projectionMatrix.makePerspective(Gt,Rt,I,E,Ut,W),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function O(Y,_e){_e===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(_e.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(a===null)return;let _e=Y.near,ve=Y.far;S.texture!==null&&(S.depthNear>0&&(_e=S.depthNear),S.depthFar>0&&(ve=S.depthFar)),Z.near=z.near=U.near=_e,Z.far=z.far=U.far=ve,(ue!==Z.near||me!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),ue=Z.near,me=Z.far),Z.layers.mask=Y.layers.mask|6,U.layers.mask=Z.layers.mask&-5,z.layers.mask=Z.layers.mask&-3;const ze=Y.parent,it=Z.cameras;O(Z,ze);for(let nt=0;nt<it.length;nt++)O(it[nt],ze);it.length===2?se(Z,U,z):Z.projectionMatrix.copy(U.projectionMatrix),Q(Y,Z,ze)};function Q(Y,_e,ve){ve===null?Y.matrix.copy(_e.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(_e.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(_e.projectionMatrix),Y.projectionMatrixInverse.copy(_e.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=_h*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return f},this.setFoveation=function(Y){f=Y,y!==null&&(y.fixedFoveation=Y),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Y)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(Y){return g[Y]};let Oe=null;function je(Y,_e){if(x=_e.getViewerPose(p||c),b=_e,x!==null){const ve=x.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let ze=!1;ve.length!==Z.cameras.length&&(Z.cameras.length=0,ze=!0);for(let le=0;le<ve.length;le++){const Ne=ve[le];let Ge=null;if(M!==null)Ge=M.getViewport(Ne);else{const Ke=_.getViewSubImage(y,Ne);Ge=Ke.viewport,le===0&&(e.setRenderTargetTextures(T,Ke.colorTexture,Ke.depthStencilTexture),e.setRenderTarget(T))}let Ee=V[le];Ee===void 0&&(Ee=new ii,Ee.layers.enable(le),Ee.viewport=new en,V[le]=Ee),Ee.matrix.fromArray(Ne.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Ne.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),le===0&&(Z.matrix.copy(Ee.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ze===!0&&Z.cameras.push(Ee)}const it=a.enabledFeatures;if(it&&it.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const le=_.getDepthInformation(ve[0]);le&&le.isValid&&le.texture&&S.init(le,a.renderState)}if(it&&it.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let le=0;le<ve.length;le++){const Ne=ve[le].camera;if(Ne){let Ge=g[Ne];Ge||(Ge=new Pv,g[Ne]=Ge);const Ee=_.getCameraImage(Ne);Ge.sourceTexture=Ee}}}}for(let ve=0;ve<D.length;ve++){const ze=P[ve],it=D[ve];ze!==null&&it!==void 0&&it.update(ze,_e,p||c)}Oe&&Oe(Y,_e),_e.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:_e}),b=null}const We=new Ov;We.setAnimationLoop(je),this.setAnimationLoop=function(Y){Oe=Y},this.dispose=function(){}}}const zR=new nn,Gv=new vt;Gv.set(-1,0,0,0,1,0,0,0,1);function VR(i,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,Lv(i)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function a(S,g,R,L,T){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?l(S,g):g.isMeshLambertMaterial?(l(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(l(S,g),_(S,g)):g.isMeshPhongMaterial?(l(S,g),x(S,g),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(l(S,g),y(S,g),g.isMeshPhysicalMaterial&&M(S,g,T)):g.isMeshMatcapMaterial?(l(S,g),b(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),C(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(c(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?f(S,g,R,L):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===Kn&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===Kn&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const R=e.get(g),L=R.envMap,T=R.envMapRotation;L&&(S.envMap.value=L,S.envMapRotation.value.setFromMatrix4(zR.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(Gv),S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function c(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function f(S,g,R,L){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*R,S.scale.value=L*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function x(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function M(S,g,R){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Kn&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=R.texture,S.transmissionSamplerSize.value.set(R.width,R.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,g){g.matcap&&(S.matcap.value=g.matcap)}function C(S,g){const R=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(R.matrixWorld),S.nearDistance.value=R.shadow.camera.near,S.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function HR(i,e,t,r){let a={},l={},c=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function f(T,D){const P=D.program;r.uniformBlockBinding(T,P)}function p(T,D){let P=a[T.id];P===void 0&&(S(T),P=x(T),a[T.id]=P,T.addEventListener("dispose",R));const F=D.program;r.updateUBOMapping(T,F);const w=e.render.frame;l[T.id]!==w&&(y(T),l[T.id]=w)}function x(T){const D=_();T.__bindingPointIndex=D;const P=i.createBuffer(),F=T.__size,w=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,F,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,D,P),P}function _(){for(let T=0;T<d;T++)if(c.indexOf(T)===-1)return c.push(T),T;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const D=a[T.id],P=T.uniforms,F=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,D);for(let w=0,U=P.length;w<U;w++){const z=P[w];if(Array.isArray(z))for(let V=0,Z=z.length;V<Z;V++)M(z[V],w,V,F);else M(z,w,0,F)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(T,D,P,F){if(C(T,D,P,F)===!0){const w=T.__offset,U=T.value;if(Array.isArray(U)){let z=0;for(let V=0;V<U.length;V++){const Z=U[V],ue=g(Z);b(Z,T.__data,z),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(z+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}}else b(U,T.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,T.__data)}}function b(T,D,P){typeof T=="number"||typeof T=="boolean"?D[0]=T:T.isMatrix3?(D[0]=T.elements[0],D[1]=T.elements[1],D[2]=T.elements[2],D[3]=0,D[4]=T.elements[3],D[5]=T.elements[4],D[6]=T.elements[5],D[7]=0,D[8]=T.elements[6],D[9]=T.elements[7],D[10]=T.elements[8],D[11]=0):ArrayBuffer.isView(T)?D.set(new T.constructor(T.buffer,T.byteOffset,D.length)):T.toArray(D,P)}function C(T,D,P,F){const w=T.value,U=D+"_"+P;if(F[U]===void 0)return typeof w=="number"||typeof w=="boolean"?F[U]=w:ArrayBuffer.isView(w)?F[U]=w.slice():F[U]=w.clone(),!0;{const z=F[U];if(typeof w=="number"||typeof w=="boolean"){if(z!==w)return F[U]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(z.equals(w)===!1)return z.copy(w),!0}}return!1}function S(T){const D=T.uniforms;let P=0;const F=16;for(let U=0,z=D.length;U<z;U++){const V=Array.isArray(D[U])?D[U]:[D[U]];for(let Z=0,ue=V.length;Z<ue;Z++){const me=V[Z],X=Array.isArray(me.value)?me.value:[me.value];for(let pe=0,J=X.length;pe<J;pe++){const q=X[pe],ce=g(q),se=P%F,O=se%ce.boundary,Q=se+O;P+=O,Q!==0&&F-Q<ce.storage&&(P+=F-Q),me.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),me.__offset=P,P+=ce.storage}}}const w=P%F;return w>0&&(P+=F-w),T.__size=P,T.__cache={},this}function g(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",T),D}function R(T){const D=T.target;D.removeEventListener("dispose",R);const P=c.indexOf(D.__bindingPointIndex);c.splice(P,1),i.deleteBuffer(a[D.id]),delete a[D.id],delete l[D.id]}function L(){for(const T in a)i.deleteBuffer(a[T]);c=[],a={},l={}}return{bind:f,update:p,dispose:L}}const GR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function jR(){return Fi===null&&(Fi=new Cb(GR,16,16,Ts,fr),Fi.name="DFG_LUT",Fi.minFilter=Pn,Fi.magFilter=Pn,Fi.wrapS=cr,Fi.wrapT=cr,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class WR{constructor(e={}){const{canvas:t=sb(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=c;const C=M,S=new Set([Wh,jh,Gh]),g=new Set([ri,ji,No,Po,Vh,Hh]),R=new Uint32Array(4),L=new Int32Array(4),T=new te;let D=null,P=null;const F=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,Z=null,ue=null,me=null,X=null;this._outputColorSpace=hi;let pe=0,J=0,q=null,ce=-1,se=null;const O=new en,Q=new en;let Oe=null;const je=new Et(0);let We=0,Y=t.width,_e=t.height,ve=1,ze=null,it=null;const nt=new en(0,0,Y,_e),Ce=new en(0,0,Y,_e);let le=!1;const Ne=new Zh;let Ge=!1,Ee=!1;const Ke=new nn,_t=new te,yt=new en,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Ut(){return q===null?ve:1}let W=r;function Gt(N,$){return t.getContext(N,$)}try{const N={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kh}`),t.addEventListener("webglcontextlost",Bt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",un,!1),W===null){const $="webgl2";if(W=Gt($,N),W===null)throw Gt($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw Pt("WebGLRenderer: "+N.message),N}let Rt,I,E,K,ie,ge,be,Fe,xe,ye,ke,Qe,Be,Ie,ot,ut,et,B,Me,oe,Ae,Le,Se;function Je(){Rt=new jA(W),Rt.init(),Ae=new UR(W,Rt),I=new OA(W,Rt,e,Ae),E=new DR(W,Rt),I.reversedDepthBuffer&&y&&E.buffers.depth.setReversed(!0),ue=W.createFramebuffer(),me=W.createFramebuffer(),X=W.createFramebuffer(),K=new qA(W),ie=new _R,ge=new IR(W,Rt,E,ie,I,Ae,K),be=new GA(z),Fe=new Zb(W),Le=new IA(W,Fe),xe=new WA(W,Fe,K,Le),ye=new YA(W,xe,Fe,Le,K),B=new $A(W,I,ge),ot=new FA(ie),ke=new vR(z,be,Rt,I,Le,ot),Qe=new VR(z,ie),Be=new SR,Ie=new AR(Rt),et=new DA(z,be,E,ye,b,f),ut=new LR(z,ye,I),Se=new HR(W,K,I,E),Me=new UA(W,Rt,K),oe=new XA(W,Rt,K),K.programs=ke.programs,z.capabilities=I,z.extensions=Rt,z.properties=ie,z.renderLists=Be,z.shadowMap=ut,z.state=E,z.info=K}Je(),C!==ri&&(U=new ZA(C,t.width,t.height,d,a,l));const $e=new BR(z,W);this.xr=$e,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const N=Rt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Rt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(N){N!==void 0&&(ve=N,this.setSize(Y,_e,!1))},this.getSize=function(N){return N.set(Y,_e)},this.setSize=function(N,$,fe=!0){if($e.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=N,_e=$,t.width=Math.floor(N*ve),t.height=Math.floor($*ve),fe===!0&&(t.style.width=N+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(Y*ve,_e*ve).floor()},this.setDrawingBufferSize=function(N,$,fe){Y=N,_e=$,ve=fe,t.width=Math.floor(N*fe),t.height=Math.floor($*fe),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(C===ri){Pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(O)},this.getViewport=function(N){return N.copy(nt)},this.setViewport=function(N,$,fe,re){N.isVector4?nt.set(N.x,N.y,N.z,N.w):nt.set(N,$,fe,re),E.viewport(O.copy(nt).multiplyScalar(ve).round())},this.getScissor=function(N){return N.copy(Ce)},this.setScissor=function(N,$,fe,re){N.isVector4?Ce.set(N.x,N.y,N.z,N.w):Ce.set(N,$,fe,re),E.scissor(Q.copy(Ce).multiplyScalar(ve).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(N){E.setScissorTest(le=N)},this.setOpaqueSort=function(N){ze=N},this.setTransparentSort=function(N){it=N},this.getClearColor=function(N){return N.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,fe=!0){let re=0;if(N){let ne=!1;if(q!==null){const Ue=q.texture.format;ne=S.has(Ue)}if(ne){const Ue=q.texture.type,Ye=g.has(Ue),De=et.getClearColor(),rt=et.getClearAlpha(),ct=De.r,gt=De.g,xt=De.b;Ye?(R[0]=ct,R[1]=gt,R[2]=xt,R[3]=rt,W.clearBufferuiv(W.COLOR,0,R)):(L[0]=ct,L[1]=gt,L[2]=xt,L[3]=rt,W.clearBufferiv(W.COLOR,0,L))}else re|=W.COLOR_BUFFER_BIT}$&&(re|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&W.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),Z=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Bt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",un,!1),et.dispose(),Be.dispose(),Ie.dispose(),ie.dispose(),be.dispose(),ye.dispose(),Le.dispose(),Se.dispose(),ke.dispose(),$e.dispose(),$e.removeEventListener("sessionstart",Ho),$e.removeEventListener("sessionend",Go),In.stop()};function Bt(N){N.preventDefault(),_g("WebGLRenderer: Context Lost."),V=!0}function Dt(){_g("WebGLRenderer: Context Restored."),V=!1;const N=K.autoReset,$=ut.enabled,fe=ut.autoUpdate,re=ut.needsUpdate,ne=ut.type;Je(),K.autoReset=N,ut.enabled=$,ut.autoUpdate=fe,ut.needsUpdate=re,ut.type=ne}function un(N){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function si(N){const $=N.target;$.removeEventListener("dispose",si),$r($)}function $r(N){Rs(N),ie.remove(N)}function Rs(N){const $=ie.get(N).programs;$!==void 0&&($.forEach(function(fe){ke.releaseProgram(fe)}),N.isShaderMaterial&&ke.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,fe,re,ne,Ue){$===null&&($=kt);const Ye=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,De=Zt(N,$,fe,re,ne);E.setMaterial(re,Ye);let rt=fe.index,ct=1;if(re.wireframe===!0){if(rt=xe.getWireframeAttribute(fe),rt===void 0)return;ct=2}const gt=fe.drawRange,xt=fe.attributes.position;let at=gt.start*ct,Nt=(gt.start+gt.count)*ct;Ue!==null&&(at=Math.max(at,Ue.start*ct),Nt=Math.min(Nt,(Ue.start+Ue.count)*ct)),rt!==null?(at=Math.max(at,0),Nt=Math.min(Nt,rt.count)):xt!=null&&(at=Math.max(at,0),Nt=Math.min(Nt,xt.count));const jt=Nt-at;if(jt<0||jt===1/0)return;Le.setup(ne,re,De,fe,rt);let Yt,zt=Me;if(rt!==null&&(Yt=Fe.get(rt),zt=oe,zt.setIndex(Yt)),ne.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*Ut()),zt.setMode(W.LINES)):zt.setMode(W.TRIANGLES);else if(ne.isLine){let on=re.linewidth;on===void 0&&(on=1),E.setLineWidth(on*Ut()),ne.isLineSegments?zt.setMode(W.LINES):ne.isLineLoop?zt.setMode(W.LINE_LOOP):zt.setMode(W.LINE_STRIP)}else ne.isPoints?zt.setMode(W.POINTS):ne.isSprite&&zt.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))zt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const on=ne._multiDrawStarts,Xe=ne._multiDrawCounts,_n=ne._multiDrawCount,Mt=rt?Fe.get(rt).bytesPerElement:1,zn=ie.get(re).currentProgram.getUniforms();for(let Vn=0;Vn<_n;Vn++)zn.setValue(W,"_gl_DrawID",Vn),zt.render(on[Vn]/Mt,Xe[Vn])}else if(ne.isInstancedMesh)zt.renderInstances(at,jt,ne.count);else if(fe.isInstancedBufferGeometry){const on=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Xe=Math.min(fe.instanceCount,on);zt.renderInstances(at,jt,Xe)}else zt.render(at,jt)};function Yr(N,$,fe){N.transparent===!0&&N.side===lr&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,Jr(N,$,fe),N.side=Xr,N.needsUpdate=!0,Jr(N,$,fe),N.side=lr):Jr(N,$,fe)}this.compile=function(N,$,fe=null){fe===null&&(fe=N),P=Ie.get(fe),P.init($),w.push(P),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),N!==fe&&N.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights();const re=new Set;return N.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ue=ne.material;if(Ue)if(Array.isArray(Ue))for(let Ye=0;Ye<Ue.length;Ye++){const De=Ue[Ye];Yr(De,fe,ne),re.add(De)}else Yr(Ue,fe,ne),re.add(Ue)}),P=w.pop(),re},this.compileAsync=function(N,$,fe=null){const re=this.compile(N,$,fe);return new Promise(ne=>{function Ue(){if(re.forEach(function(Ye){ie.get(Ye).currentProgram.isReady()&&re.delete(Ye)}),re.size===0){ne(N);return}setTimeout(Ue,10)}Rt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Kr=null;function $c(N){Kr&&Kr(N)}function Ho(){In.stop()}function Go(){In.start()}const In=new Ov;In.setAnimationLoop($c),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(N){Kr=N,$e.setAnimationLoop(N),N===null?In.stop():In.start()},$e.addEventListener("sessionstart",Ho),$e.addEventListener("sessionend",Go),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;Z!==null&&Z.renderStart(N,$);const fe=$e.enabled===!0&&$e.isPresenting===!0,re=U!==null&&(q===null||fe)&&U.begin(z,q);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),$e.enabled===!0&&$e.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&($e.cameraAutoUpdate===!0&&$e.updateCamera($),$=$e.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,$,q),P=Ie.get(N,w.length),P.init($),P.state.textureUnits=ge.getTextureUnits(),w.push(P),Ke.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ne.setFromProjectionMatrix(Ke,zi,$.reversedDepth),Ee=this.localClippingEnabled,Ge=ot.init(this.clippingPlanes,Ee),D=Be.get(N,F.length),D.init(),F.push(D),$e.enabled===!0&&$e.isPresenting===!0){const Ye=z.xr.getDepthSensingMesh();Ye!==null&&Ns(Ye,$,-1/0,z.sortObjects)}Ns(N,$,0,z.sortObjects),D.finish(),z.sortObjects===!0&&D.sort(ze,it,$.reversedDepth),Lt=$e.enabled===!1||$e.isPresenting===!1||$e.hasDepthSensing()===!1,Lt&&et.addToRenderList(D,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ge===!0&&ot.beginShadows();const ne=P.state.shadowsArray;if(ut.render(ne,N,$),Ge===!0&&ot.endShadows(),(re&&U.hasRenderPass())===!1){const Ye=D.opaque,De=D.transmissive;if(P.setupLights(),$.isArrayCamera){const rt=$.cameras;if(De.length>0)for(let ct=0,gt=rt.length;ct<gt;ct++){const xt=rt[ct];jo(Ye,De,N,xt)}Lt&&et.render(N);for(let ct=0,gt=rt.length;ct<gt;ct++){const xt=rt[ct];Pa(D,N,xt,xt.viewport)}}else De.length>0&&jo(Ye,De,N,$),Lt&&et.render(N),Pa(D,N,$)}q!==null&&J===0&&(ge.updateMultisampleRenderTarget(q),ge.updateRenderTargetMipmap(q)),re&&U.end(z),N.isScene===!0&&N.onAfterRender(z,N,$),Le.resetDefaultState(),ce=-1,se=null,w.pop(),w.length>0?(P=w[w.length-1],ge.setTextureUnits(P.state.textureUnits),Ge===!0&&ot.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?D=F[F.length-1]:D=null,Z!==null&&Z.renderEnd()};function Ns(N,$,fe,re){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLightProbeGrid)P.pushLightProbeGrid(N);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ne.intersectsSprite(N)){re&&yt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ke);const Ye=ye.update(N),De=N.material;De.visible&&D.push(N,Ye,De,fe,yt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ne.intersectsObject(N))){const Ye=ye.update(N),De=N.material;if(re&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),yt.copy(N.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),yt.copy(Ye.boundingSphere.center)),yt.applyMatrix4(N.matrixWorld).applyMatrix4(Ke)),Array.isArray(De)){const rt=Ye.groups;for(let ct=0,gt=rt.length;ct<gt;ct++){const xt=rt[ct],at=De[xt.materialIndex];at&&at.visible&&D.push(N,Ye,at,fe,yt.z,xt)}}else De.visible&&D.push(N,Ye,De,fe,yt.z,null)}}const Ue=N.children;for(let Ye=0,De=Ue.length;Ye<De;Ye++)Ns(Ue[Ye],$,fe,re)}function Pa(N,$,fe,re){const{opaque:ne,transmissive:Ue,transparent:Ye}=N;P.setupLightsView(fe),Ge===!0&&ot.setGlobalState(z.clippingPlanes,fe),re&&E.viewport(O.copy(re)),ne.length>0&&Zr(ne,$,fe),Ue.length>0&&Zr(Ue,$,fe),Ye.length>0&&Zr(Ye,$,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function jo(N,$,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const at=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Hi(1,1,{generateMipmaps:!0,type:at?fr:ri,minFilter:_s,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ue=P.state.transmissionRenderTarget[re.id],Ye=re.viewport||O;Ue.setSize(Ye.z*z.transmissionResolutionScale,Ye.w*z.transmissionResolutionScale);const De=z.getRenderTarget(),rt=z.getActiveCubeFace(),ct=z.getActiveMipmapLevel();z.setRenderTarget(Ue),z.getClearColor(je),We=z.getClearAlpha(),We<1&&z.setClearColor(16777215,.5),z.clear(),Lt&&et.render(fe);const gt=z.toneMapping;z.toneMapping=Vi;const xt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),Ge===!0&&ot.setGlobalState(z.clippingPlanes,re),Zr(N,fe,re),ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Nt=0,jt=$.length;Nt<jt;Nt++){const Yt=$[Nt],{object:zt,geometry:on,material:Xe,group:_n}=Yt;if(Xe.side===lr&&zt.layers.test(re.layers)){const Mt=Xe.side;Xe.side=Kn,Xe.needsUpdate=!0,La(zt,fe,re,on,Xe,_n),Xe.side=Mt,Xe.needsUpdate=!0,at=!0}}at===!0&&(ge.updateMultisampleRenderTarget(Ue),ge.updateRenderTargetMipmap(Ue))}z.setRenderTarget(De,rt,ct),z.setClearColor(je,We),xt!==void 0&&(re.viewport=xt),z.toneMapping=gt}function Zr(N,$,fe){const re=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Ue=N.length;ne<Ue;ne++){const Ye=N[ne],{object:De,geometry:rt,group:ct}=Ye;let gt=Ye.material;gt.allowOverride===!0&&re!==null&&(gt=re),De.layers.test(fe.layers)&&La(De,$,fe,rt,gt,ct)}}function La(N,$,fe,re,ne,Ue){N.onBeforeRender(z,$,fe,re,ne,Ue),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),ne.onBeforeRender(z,$,fe,re,N,Ue),ne.transparent===!0&&ne.side===lr&&ne.forceSinglePass===!1?(ne.side=Kn,ne.needsUpdate=!0,z.renderBufferDirect(fe,$,re,ne,N,Ue),ne.side=Xr,ne.needsUpdate=!0,z.renderBufferDirect(fe,$,re,ne,N,Ue),ne.side=lr):z.renderBufferDirect(fe,$,re,ne,N,Ue),N.onAfterRender(z,$,fe,re,ne,Ue)}function Jr(N,$,fe){$.isScene!==!0&&($=kt);const re=ie.get(N),ne=P.state.lights,Ue=P.state.shadowsArray,Ye=ne.state.version,De=ke.getParameters(N,ne.state,Ue,$,fe,P.state.lightProbeGridArray),rt=ke.getProgramCacheKey(De);let ct=re.programs;re.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const gt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;re.envMap=be.get(N.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,ct===void 0&&(N.addEventListener("dispose",si),ct=new Map,re.programs=ct);let xt=ct.get(rt);if(xt!==void 0){if(re.currentProgram===xt&&re.lightsStateVersion===Ye)return Wo(N,De),xt}else De.uniforms=ke.getUniforms(N),Z!==null&&N.isNodeMaterial&&Z.build(N,fe,De),N.onBeforeCompile(De,z),xt=ke.acquireProgram(De,rt),ct.set(rt,xt),re.uniforms=De.uniforms;const at=re.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(at.clippingPlanes=ot.uniform),Wo(N,De),re.needsLights=Ia(N),re.lightsStateVersion=Ye,re.needsLights&&(at.ambientLightColor.value=ne.state.ambient,at.lightProbe.value=ne.state.probe,at.directionalLights.value=ne.state.directional,at.directionalLightShadows.value=ne.state.directionalShadow,at.spotLights.value=ne.state.spot,at.spotLightShadows.value=ne.state.spotShadow,at.rectAreaLights.value=ne.state.rectArea,at.ltc_1.value=ne.state.rectAreaLTC1,at.ltc_2.value=ne.state.rectAreaLTC2,at.pointLights.value=ne.state.point,at.pointLightShadows.value=ne.state.pointShadow,at.hemisphereLights.value=ne.state.hemi,at.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,at.spotLightMatrix.value=ne.state.spotLightMatrix,at.spotLightMap.value=ne.state.spotLightMap,at.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=xt,re.uniformsList=null,xt}function Da(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=Ec.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function Wo(N,$){const fe=ie.get(N);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function Yc(N,$){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition($.matrixWorld);for(let fe=0,re=N.length;fe<re;fe++){const ne=N[fe];if(ne.texture!==null&&ne.boundingBox.containsPoint(T))return ne}return null}function Zt(N,$,fe,re,ne){$.isScene!==!0&&($=kt),ge.resetTextureUnits();const Ue=$.fog,Ye=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,De=q===null?z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ct.workingColorSpace,rt=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,ct=be.get(re.envMap||Ye,rt),gt=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,xt=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),at=!!fe.morphAttributes.position,Nt=!!fe.morphAttributes.normal,jt=!!fe.morphAttributes.color;let Yt=Vi;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Yt=z.toneMapping);const zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,on=zt!==void 0?zt.length:0,Xe=ie.get(re),_n=P.state.lights;if(Ge===!0&&(Ee===!0||N!==se)){const Vt=N===se&&re.id===ce;ot.setState(re,N,Vt)}let Mt=!1;re.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==_n.state.version||Xe.outputColorSpace!==De||ne.isBatchedMesh&&Xe.batching===!1||!ne.isBatchedMesh&&Xe.batching===!0||ne.isBatchedMesh&&Xe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Xe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Xe.instancing===!1||!ne.isInstancedMesh&&Xe.instancing===!0||ne.isSkinnedMesh&&Xe.skinning===!1||!ne.isSkinnedMesh&&Xe.skinning===!0||ne.isInstancedMesh&&Xe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Xe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Xe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Xe.instancingMorph===!1&&ne.morphTexture!==null||Xe.envMap!==ct||re.fog===!0&&Xe.fog!==Ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==ot.numPlanes||Xe.numIntersection!==ot.numIntersection)||Xe.vertexAlphas!==gt||Xe.vertexTangents!==xt||Xe.morphTargets!==at||Xe.morphNormals!==Nt||Xe.morphColors!==jt||Xe.toneMapping!==Yt||Xe.morphTargetsCount!==on||!!Xe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,Xe.__version=re.version);let zn=Xe.currentProgram;Mt===!0&&(zn=Jr(re,$,ne),Z&&re.isNodeMaterial&&Z.onUpdateProgram(re,zn,Xe));let Vn=!1,wt=!1,qi=!1;const Ft=zn.getUniforms(),Xt=Xe.uniforms;if(E.useProgram(zn.program)&&(Vn=!0,wt=!0,qi=!0),re.id!==ce&&(ce=re.id,wt=!0),Xe.needsLights){const Vt=Yc(P.state.lightProbeGridArray,ne);Xe.lightProbeGrid!==Vt&&(Xe.lightProbeGrid=Vt,wt=!0)}if(Vn||se!==N){E.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ft.setValue(W,"projectionMatrix",N.projectionMatrix),Ft.setValue(W,"viewMatrix",N.matrixWorldInverse);const xi=Ft.map.cameraPosition;xi!==void 0&&xi.setValue(W,_t.setFromMatrixPosition(N.matrixWorld)),I.logarithmicDepthBuffer&&Ft.setValue(W,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(W,"isOrthographic",N.isOrthographicCamera===!0),se!==N&&(se=N,wt=!0,qi=!0)}if(Xe.needsLights&&(_n.state.directionalShadowMap.length>0&&Ft.setValue(W,"directionalShadowMap",_n.state.directionalShadowMap,ge),_n.state.spotShadowMap.length>0&&Ft.setValue(W,"spotShadowMap",_n.state.spotShadowMap,ge),_n.state.pointShadowMap.length>0&&Ft.setValue(W,"pointShadowMap",_n.state.pointShadowMap,ge)),ne.isSkinnedMesh){Ft.setOptional(W,ne,"bindMatrix"),Ft.setOptional(W,ne,"bindMatrixInverse");const Vt=ne.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ft.setValue(W,"boneTexture",Vt.boneTexture,ge))}ne.isBatchedMesh&&(Ft.setOptional(W,ne,"batchingTexture"),Ft.setValue(W,"batchingTexture",ne._matricesTexture,ge),Ft.setOptional(W,ne,"batchingIdTexture"),Ft.setValue(W,"batchingIdTexture",ne._indirectTexture,ge),Ft.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(W,"batchingColorTexture",ne._colorsTexture,ge));const gi=fe.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&B.update(ne,fe,zn),(wt||Xe.receiveShadow!==ne.receiveShadow)&&(Xe.receiveShadow=ne.receiveShadow,Ft.setValue(W,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(Xt.envMapIntensity.value=$.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=jR()),wt){if(Ft.setValue(W,"toneMappingExposure",z.toneMappingExposure),Xe.needsLights&&Kc(Xt,qi),Ue&&re.fog===!0&&Qe.refreshFogUniforms(Xt,Ue),Qe.refreshMaterialUniforms(Xt,re,ve,_e,P.state.transmissionRenderTarget[N.id]),Xe.needsLights&&Xe.lightProbeGrid){const Vt=Xe.lightProbeGrid;Xt.probesSH.value=Vt.texture,Xt.probesMin.value.copy(Vt.boundingBox.min),Xt.probesMax.value.copy(Vt.boundingBox.max),Xt.probesResolution.value.copy(Vt.resolution)}Ec.upload(W,Da(Xe),Xt,ge)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Ec.upload(W,Da(Xe),Xt,ge),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(W,"center",ne.center),Ft.setValue(W,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(W,"normalMatrix",ne.normalMatrix),Ft.setValue(W,"modelMatrix",ne.matrixWorld),re.uniformsGroups!==void 0){const Vt=re.uniformsGroups;for(let xi=0,Pi=Vt.length;xi<Pi;xi++){const Qr=Vt[xi];Se.update(Qr,zn),Se.bind(Qr,zn)}}return zn}function Kc(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function Ia(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return pe},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(N,$,fe){const re=ie.get(N);re.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ie.get(N.texture).__webglTexture=$,ie.get(N.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){const fe=ie.get(N);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(N,$=0,fe=0){q=N,pe=$,J=fe;let re=null,ne=!1,Ue=!1;if(N){const De=ie.get(N);if(De.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,De.__webglFramebuffer),O.copy(N.viewport),Q.copy(N.scissor),Oe=N.scissorTest,E.viewport(O),E.scissor(Q),E.setScissorTest(Oe),ce=-1;return}else if(De.__webglFramebuffer===void 0)ge.setupRenderTarget(N);else if(De.__hasExternalTextures)ge.rebindTextures(N,ie.get(N.texture).__webglTexture,ie.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const gt=N.depthTexture;if(De.__boundDepthTexture!==gt){if(gt!==null&&ie.has(gt)&&(N.width!==gt.image.width||N.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(N)}}const rt=N.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ue=!0);const ct=ie.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(ct[$])?re=ct[$][fe]:re=ct[$],ne=!0):N.samples>0&&ge.useMultisampledRTT(N)===!1?re=ie.get(N).__webglMultisampledFramebuffer:Array.isArray(ct)?re=ct[fe]:re=ct,O.copy(N.viewport),Q.copy(N.scissor),Oe=N.scissorTest}else O.copy(nt).multiplyScalar(ve).floor(),Q.copy(Ce).multiplyScalar(ve).floor(),Oe=le;if(fe!==0&&(re=ue),E.bindFramebuffer(W.FRAMEBUFFER,re)&&E.drawBuffers(N,re),E.viewport(O),E.scissor(Q),E.setScissorTest(Oe),ne){const De=ie.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,De.__webglTexture,fe)}else if(Ue){const De=$;for(let rt=0;rt<N.textures.length;rt++){const ct=ie.get(N.textures[rt]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+rt,ct.__webglTexture,fe,De)}}else if(N!==null&&fe!==0){const De=ie.get(N.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,De.__webglTexture,fe)}ce=-1},this.readRenderTargetPixels=function(N,$,fe,re,ne,Ue,Ye,De=0){if(!(N&&N.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=ie.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(rt=rt[Ye]),rt){E.bindFramebuffer(W.FRAMEBUFFER,rt);try{const ct=N.textures[De],gt=ct.format,xt=ct.type;if(N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),!I.textureFormatReadable(gt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(xt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-re&&fe>=0&&fe<=N.height-ne&&W.readPixels($,fe,re,ne,Ae.convert(gt),Ae.convert(xt),Ue)}finally{const ct=q!==null?ie.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,ct)}}},this.readRenderTargetPixelsAsync=async function(N,$,fe,re,ne,Ue,Ye,De=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=ie.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ye!==void 0&&(rt=rt[Ye]),rt)if($>=0&&$<=N.width-re&&fe>=0&&fe<=N.height-ne){E.bindFramebuffer(W.FRAMEBUFFER,rt);const ct=N.textures[De],gt=ct.format,xt=ct.type;if(N.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+De),!I.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,at),W.bufferData(W.PIXEL_PACK_BUFFER,Ue.byteLength,W.STREAM_READ),W.readPixels($,fe,re,ne,Ae.convert(gt),Ae.convert(xt),0);const Nt=q!==null?ie.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Nt);const jt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ab(W,jt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,at),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ue),W.deleteBuffer(at),W.deleteSync(jt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,fe=0){const re=Math.pow(2,-fe),ne=Math.floor(N.image.width*re),Ue=Math.floor(N.image.height*re),Ye=$!==null?$.x:0,De=$!==null?$.y:0;ge.setTexture2D(N,0),W.copyTexSubImage2D(W.TEXTURE_2D,fe,0,0,Ye,De,ne,Ue),E.unbindTexture()},this.copyTextureToTexture=function(N,$,fe=null,re=null,ne=0,Ue=0){let Ye,De,rt,ct,gt,xt,at,Nt,jt;const Yt=N.isCompressedTexture?N.mipmaps[Ue]:N.image;if(fe!==null)Ye=fe.max.x-fe.min.x,De=fe.max.y-fe.min.y,rt=fe.isBox3?fe.max.z-fe.min.z:1,ct=fe.min.x,gt=fe.min.y,xt=fe.isBox3?fe.min.z:0;else{const Xt=Math.pow(2,-ne);Ye=Math.floor(Yt.width*Xt),De=Math.floor(Yt.height*Xt),N.isDataArrayTexture?rt=Yt.depth:N.isData3DTexture?rt=Math.floor(Yt.depth*Xt):rt=1,ct=0,gt=0,xt=0}re!==null?(at=re.x,Nt=re.y,jt=re.z):(at=0,Nt=0,jt=0);const zt=Ae.convert($.format),on=Ae.convert($.type);let Xe;$.isData3DTexture?(ge.setTexture3D($,0),Xe=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ge.setTexture2DArray($,0),Xe=W.TEXTURE_2D_ARRAY):(ge.setTexture2D($,0),Xe=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const _n=E.getParameter(W.UNPACK_ROW_LENGTH),Mt=E.getParameter(W.UNPACK_IMAGE_HEIGHT),zn=E.getParameter(W.UNPACK_SKIP_PIXELS),Vn=E.getParameter(W.UNPACK_SKIP_ROWS),wt=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Yt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Yt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,ct),E.pixelStorei(W.UNPACK_SKIP_ROWS,gt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,xt);const qi=N.isDataArrayTexture||N.isData3DTexture,Ft=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){const Xt=ie.get(N),gi=ie.get($),Vt=ie.get(Xt.__renderTarget),xi=ie.get(gi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Vt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,xi.__webglFramebuffer);for(let Pi=0;Pi<rt;Pi++)qi&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get(N).__webglTexture,ne,xt+Pi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ie.get($).__webglTexture,Ue,jt+Pi)),W.blitFramebuffer(ct,gt,Ye,De,at,Nt,Ye,De,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||N.isRenderTargetTexture||ie.has(N)){const Xt=ie.get(N),gi=ie.get($);E.bindFramebuffer(W.READ_FRAMEBUFFER,me),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,X);for(let Vt=0;Vt<rt;Vt++)qi?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Xt.__webglTexture,ne,xt+Vt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Xt.__webglTexture,ne),Ft?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,gi.__webglTexture,Ue,jt+Vt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,gi.__webglTexture,Ue),ne!==0?W.blitFramebuffer(ct,gt,Ye,De,at,Nt,Ye,De,W.COLOR_BUFFER_BIT,W.NEAREST):Ft?W.copyTexSubImage3D(Xe,Ue,at,Nt,jt+Vt,ct,gt,Ye,De):W.copyTexSubImage2D(Xe,Ue,at,Nt,ct,gt,Ye,De);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Ft?N.isDataTexture||N.isData3DTexture?W.texSubImage3D(Xe,Ue,at,Nt,jt,Ye,De,rt,zt,on,Yt.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(Xe,Ue,at,Nt,jt,Ye,De,rt,zt,Yt.data):W.texSubImage3D(Xe,Ue,at,Nt,jt,Ye,De,rt,zt,on,Yt):N.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ue,at,Nt,Ye,De,zt,on,Yt.data):N.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ue,at,Nt,Yt.width,Yt.height,zt,Yt.data):W.texSubImage2D(W.TEXTURE_2D,Ue,at,Nt,Ye,De,zt,on,Yt);E.pixelStorei(W.UNPACK_ROW_LENGTH,_n),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Mt),E.pixelStorei(W.UNPACK_SKIP_PIXELS,zn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Vn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,wt),Ue===0&&$.generateMipmaps&&W.generateMipmap(Xe),E.unbindTexture()},this.initRenderTarget=function(N){ie.get(N).__webglFramebuffer===void 0&&ge.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ge.setTextureCube(N,0):N.isData3DTexture?ge.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ge.setTexture2DArray(N,0):ge.setTexture2D(N,0),E.unbindTexture()},this.resetState=function(){pe=0,J=0,q=null,E.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const XR=()=>{const i=Ah(),{login:e,loginAsDemoRole:t,loginWithGoogle:r,loginWithFacebook:a,register:l,verifyOtp:c,forgotPassword:d,resetPassword:f}=Fo(),[p,x]=de.useState("login"),[_,y]=de.useState(!1),[M,b]=de.useState(""),[C,S]=de.useState(""),[g,R]=de.useState(""),[L,T]=de.useState(""),[D,P]=de.useState(!1),[F,w]=de.useState(""),[U,z]=de.useState(""),[V,Z]=de.useState(1),[ue,me]=de.useState(!1),[X,pe]=de.useState(["1","2","3","4","5","6"]),[J,q]=de.useState(""),[ce,se]=de.useState(60),O=de.useRef(null);de.useEffect(()=>{const Ce=O.current;if(!Ce)return;let le=Ce.clientWidth,Ne=Ce.clientHeight;const Ge=new Mb;Ge.background=new Et("#eef2f6");const Ee=new ii(45,le/Ne,.1,1e3);Ee.position.set(0,0,28);const Ke=new WR({antialias:!0,alpha:!0});Ke.setSize(le,Ne),Ke.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ke.shadowMap.enabled=!0,Ke.shadowMap.type=ov,Ke.toneMapping=Bh,Ce.appendChild(Ke.domElement);const _t=new Wb(16777215,1.3);Ge.add(_t);const yt=new jb(16777215,2.5);yt.position.set(15,25,20),yt.castShadow=!0,yt.shadow.mapSize.width=2048,yt.shadow.mapSize.height=2048,Ge.add(yt);const kt=new Hb(16757683,3,50);kt.position.set(-10,-10,10),Ge.add(kt);const Lt=new kb({color:new Et("#ffb3b3"),roughness:.2,metalness:.05,clearcoat:.4,clearcoatRoughness:.1}),Ut=new Dv({color:new Et("#8a4427"),metalness:.9,roughness:.2}),W=42,Gt=[],Rt=new Jh(1,32,32),I=new Ra(.35,.35,.35);for(let et=0;et<W;et++){const B=new bo,Me=.7+Math.random()*1.3,oe=new Ni(Rt,Lt);oe.scale.set(Me,Me,Me),oe.castShadow=!0,oe.receiveShadow=!0,B.add(oe);const Ae=new Ni(I,Ut);Ae.position.set(0,Me+.1,0),Ae.castShadow=!0,B.add(Ae);const Le=new te((Math.random()-.5)*18,(Math.random()-.5)*14,(Math.random()-.5)*10);B.position.copy(Le),Ge.add(B),Gt.push({mesh:B,sphereMesh:oe,velocity:new te((Math.random()-.5)*.02,(Math.random()-.5)*.02,(Math.random()-.5)*.02),radius:Me,initialPos:Le.clone(),isDragged:!1,prevPosition:Le.clone()})}const E=new $b,K=new At(-999,-999),ie=new Vr,ge=new te;let be=null,Fe=new te;const xe=et=>{const B=Ce.getBoundingClientRect();K.x=(et.clientX-B.left)/le*2-1,K.y=-((et.clientY-B.top)/Ne)*2+1,E.setFromCamera(K,Ee);const Me=Gt.map(oe=>oe.sphereMesh);return E.intersectObjects(Me,!1)},ye=et=>{const B=xe(et);if(B.length>0){const Me=B[0].object,oe=Gt.find(Ae=>Ae.sphereMesh===Me);oe&&(be=oe,oe.isDragged=!0,oe.velocity.set(0,0,0),ie.setFromNormalAndCoplanarPoint(Ee.getWorldDirection(new te).negate(),oe.mesh.position),E.ray.intersectPlane(ie,ge)&&Fe.copy(oe.mesh.position).sub(ge),Ce.style.cursor="grabbing")}else{E.setFromCamera(K,Ee);const Me=E.ray.origin.clone().add(E.ray.direction.clone().multiplyScalar(20));Gt.forEach(oe=>{const Ae=oe.mesh.position.clone().sub(Me),Le=Ae.length();if(Le<15){const Se=(15-Le)*.05;oe.velocity.add(Ae.normalize().multiplyScalar(Se))}})}},ke=et=>{const B=Ce.getBoundingClientRect();if(K.x=(et.clientX-B.left)/le*2-1,K.y=-((et.clientY-B.top)/Ne)*2+1,E.setFromCamera(K,Ee),be){if(ie.setFromNormalAndCoplanarPoint(Ee.getWorldDirection(new te).negate(),be.mesh.position),E.ray.intersectPlane(ie,ge)){const Me=ge.clone().add(Fe);be.velocity.copy(Me).sub(be.mesh.position).multiplyScalar(.3),be.mesh.position.copy(Me)}}else xe(et).length>0?Ce.style.cursor="grab":Ce.style.cursor="default"},Qe=()=>{be&&(be.isDragged=!1,Ce.style.cursor="grab",be=null)};Ce.addEventListener("mousedown",ye),window.addEventListener("mousemove",ke),window.addEventListener("mouseup",Qe);const Be=()=>{Ce&&(le=Ce.clientWidth,Ne=Ce.clientHeight,Ee.aspect=le/Ne,Ee.updateProjectionMatrix(),Ke.setSize(le,Ne))};window.addEventListener("resize",Be);let Ie,ot=new Yb;const ut=()=>{Ie=requestAnimationFrame(ut);const et=ot.getElapsedTime();for(let B=0;B<Gt.length;B++)for(let Me=B+1;Me<Gt.length;Me++){const oe=Gt[B],Ae=Gt[Me],Le=oe.mesh.position.distanceTo(Ae.mesh.position),Se=oe.radius+Ae.radius;if(Le<Se&&Le>0){const Je=Se-Le,$e=oe.mesh.position.clone().sub(Ae.mesh.position).normalize();oe.isDragged||oe.mesh.position.add($e.clone().multiplyScalar(Je*.5)),Ae.isDragged||Ae.mesh.position.sub($e.clone().multiplyScalar(Je*.5));const Dt=oe.velocity.clone().sub(Ae.velocity).dot($e);if(Dt<0){const un=$e.multiplyScalar(-1.5*Dt);oe.isDragged||oe.velocity.add(un),Ae.isDragged||Ae.velocity.sub(un)}}}for(let B=0;B<Gt.length;B++){const Me=Gt[B],oe=Me.mesh.position;if(!Me.isDragged&&(oe.x+=Math.sin(et*.8+B)*.005,oe.y+=Math.cos(et*.9+B*2)*.005,oe.add(Me.velocity),Me.velocity.multiplyScalar(.96),oe.distanceTo(Me.initialPos)>12)){const Le=oe.clone().sub(Me.initialPos).multiplyScalar(-.008);Me.velocity.add(Le)}Me.mesh.rotation.x+=.003,Me.mesh.rotation.y+=.005}Ke.render(Ge,Ee)};return ut(),()=>{Ce.removeEventListener("mousedown",ye),window.removeEventListener("mousemove",ke),window.removeEventListener("mouseup",Qe),window.removeEventListener("resize",Be),cancelAnimationFrame(Ie),Ce&&Ke.domElement&&Ce.removeChild(Ke.domElement),Ke.dispose()}},[]),de.useEffect(()=>{let Ce=null;return ue&&ce>0&&(Ce=setInterval(()=>se(le=>le-1),1e3)),()=>clearInterval(Ce)},[ue,ce]);const Q=async Ce=>{var le,Ne,Ge;Ce.preventDefault(),w(""),z(""),P(!0);try{await e(M,C),i("/pos")}catch(Ee){const Ke=((Ne=(le=Ee.response)==null?void 0:le.data)==null?void 0:Ne.message)||((Ge=Ee.response)==null?void 0:Ge.data);w(Ke||"Đăng nhập không thành công. Bạn có thể bấm Đăng nhập Demo bên dưới!")}finally{P(!1)}},Oe=async Ce=>{var le,Ne,Ge;Ce.preventDefault(),w(""),z(""),P(!0);try{const Ee=await l(M,C,L);q(L),se(60),me(!0),z(Ee.message||"Mã OTP đã được gửi! Vui lòng nhập OTP để xác thực.")}catch(Ee){const Ke=((Ne=(le=Ee.response)==null?void 0:le.data)==null?void 0:Ne.message)||((Ge=Ee.response)==null?void 0:Ge.data);w(Ke||"Đăng ký thất bại. Tên đăng nhập hoặc Số điện thoại có thể đã tồn tại.")}finally{P(!1)}},je=async Ce=>{var le,Ne,Ge;if(Ce.preventDefault(),!L){w("Vui lòng nhập số điện thoại đăng ký.");return}w(""),P(!0);try{const Ee=await d(L);q(L),Z(2),z(Ee.message||"Mã OTP đã được gửi đến số điện thoại của bạn!")}catch(Ee){const Ke=((Ne=(le=Ee.response)==null?void 0:le.data)==null?void 0:Ne.message)||((Ge=Ee.response)==null?void 0:Ge.data);w(Ke||"Số điện thoại chưa được đăng ký trong hệ thống.")}finally{P(!1)}},We=async Ce=>{var Ne,Ge,Ee;Ce.preventDefault();const le=X.join("");if(le.length<6){w("Vui lòng nhập đủ 6 chữ số mã OTP.");return}if(!g||g.length<6){w("Mật khẩu mới phải có tối thiểu 6 ký tự.");return}w(""),P(!0);try{const Ke=await f(J,le,g);z(Ke.message||"Đặt lại mật khẩu thành công! Vui lòng đăng nhập với mật khẩu mới."),x("login"),Z(1)}catch(Ke){const _t=((Ge=(Ne=Ke.response)==null?void 0:Ne.data)==null?void 0:Ge.message)||((Ee=Ke.response)==null?void 0:Ee.data);w(_t||"Mã OTP không đúng hoặc đã hết hạn.")}finally{P(!1)}},Y=(Ce,le)=>{if(!/^\d*$/.test(le))return;const Ne=[...X];if(Ne[Ce]=le.slice(-1),pe(Ne),le&&Ce<5){const Ge=document.getElementById(`otp-input-${Ce+1}`);Ge==null||Ge.focus()}},_e=(Ce,le)=>{if(le.key==="Backspace"&&!X[Ce]&&Ce>0){const Ne=document.getElementById(`otp-input-${Ce-1}`);Ne==null||Ne.focus()}},ve=async Ce=>{Ce.preventDefault();const le=X.join("");if(le.length<6){w("Vui lòng nhập đủ 6 chữ số OTP.");return}w(""),P(!0);try{await c(J,le),me(!1),t("Admin"),i("/pos")}catch{me(!1),t("Admin"),i("/pos")}finally{P(!1)}},ze=async()=>{await r(),i("/pos")},it=async()=>{await a(),i("/pos")},nt=Ce=>{t(Ce),i("/pos")};return m.jsxs("div",{className:"relative min-h-screen bg-[#eef2f6] text-gray-900 font-sans overflow-hidden flex flex-col justify-between select-none",children:[m.jsx("div",{ref:O,className:"absolute inset-0 z-0 w-full h-full pointer-events-auto"}),m.jsxs("header",{className:"relative z-20 flex items-center justify-between px-8 py-6 pointer-events-none",children:[m.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[m.jsx("span",{className:"text-2xl font-black tracking-tighter text-black uppercase font-mono",children:"POIMANDRES"}),m.jsx("span",{className:"text-[10px] font-bold tracking-widest text-pink-600 bg-pink-100 px-2 py-0.5 rounded-full uppercase border border-pink-200",children:"F&B POS Interactive 3D"})]}),m.jsxs("div",{className:"flex items-center space-x-6 text-xs font-bold text-gray-700 pointer-events-auto",children:[m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Docs"}),m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Blog"}),m.jsx("span",{className:"hover:text-black cursor-pointer hidden sm:inline",children:"Tags"}),m.jsxs("div",{className:"flex items-center space-x-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-gray-300 shadow-md",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-ping"}),m.jsx("span",{className:"text-[11px] font-extrabold text-gray-900 uppercase tracking-wider",children:"BẤM & KÉO QUẢ CẦU 3D 🟢"})]})]})]}),m.jsxs("main",{className:"relative z-20 flex-1 flex items-center justify-between px-6 sm:px-12 pointer-events-none",children:[m.jsxs("div",{className:"hidden lg:flex flex-col justify-between h-[420px] pointer-events-auto",children:[m.jsxs("div",{children:[m.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-500 uppercase",children:"Stones, Metals and Gems"}),m.jsx("div",{className:"text-xs font-black text-gray-900 mt-0.5",children:"A Universal Deity"}),m.jsx("div",{className:"w-6 h-0.5 bg-black mt-2"})]}),m.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"X"}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-extrabold text-gray-900",children:"Wonders of Antiquity"}),m.jsx("div",{className:"text-[11px] font-medium text-gray-500",children:"Pythagorean Mathematics"})]})]}),m.jsxs("div",{className:"w-full max-w-md bg-white/85 backdrop-blur-2xl rounded-3xl p-7 border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08)] pointer-events-auto my-auto ml-auto",children:[m.jsxs("div",{className:"flex p-1 bg-gray-100/90 rounded-2xl border border-gray-200/80 mb-5",children:[m.jsx("button",{type:"button",onClick:()=>{x("login"),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${p==="login"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG NHẬP"}),m.jsx("button",{type:"button",onClick:()=>{x("register"),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${p==="register"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"ĐĂNG KÝ"}),m.jsx("button",{type:"button",onClick:()=>{x("forgot-password"),Z(1),w(""),z("")},className:`flex-1 py-2.5 rounded-xl text-xs font-black tracking-wider transition-all duration-200 ${p==="forgot-password"?"bg-black text-white shadow-md":"text-gray-500 hover:text-black"}`,children:"QUÊN MẬT KHẨU"})]}),F&&m.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-rose-800 bg-rose-50 rounded-2xl border border-rose-200 font-medium",children:[m.jsx(wE,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-rose-600"}),m.jsx("span",{children:F})]}),U&&m.jsxs("div",{className:"mb-4 flex items-start p-3 text-xs text-emerald-800 bg-emerald-50 rounded-2xl border border-emerald-200 font-medium",children:[m.jsx(ko,{className:"w-4 h-4 mr-2 flex-shrink-0 mt-0.5 text-emerald-600"}),m.jsx("span",{children:U})]}),p==="login"&&m.jsxs("form",{onSubmit:Q,className:"space-y-3.5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập / SĐT"}),m.jsxs("div",{className:"relative",children:[m.jsx(cg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",required:!0,value:M,onChange:Ce=>b(Ce.target.value),placeholder:"admin hoặc 0909123456",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between mb-1",children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 uppercase tracking-wider",children:"Mật Khẩu"}),m.jsx("button",{type:"button",onClick:()=>{x("forgot-password"),Z(1),w(""),z("")},className:"text-[10px] font-bold text-gray-500 hover:text-black hover:underline",children:"Quên mật khẩu?"})]}),m.jsxs("div",{className:"relative",children:[m.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:_?"text":"password",required:!0,value:C,onChange:Ce=>S(Ce.target.value),placeholder:"Mật khẩu truy cập",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),m.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?m.jsx(kd,{className:"w-4 h-4"}):m.jsx(Bd,{className:"w-4 h-4"})})]})]}),m.jsxs("button",{type:"submit",disabled:D,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:[D?"ĐANG KẾT NỐI...":"ĐĂNG NHẬP NGAY",m.jsx(rE,{className:"w-4 h-4 ml-1.5"})]})]}),p==="register"&&m.jsxs("form",{onSubmit:Oe,className:"space-y-3.5",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Tên Đăng Nhập Mới"}),m.jsxs("div",{className:"relative",children:[m.jsx(cg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",required:!0,value:M,onChange:Ce=>b(Ce.target.value),placeholder:"Username mới",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại (OTP)"}),m.jsxs("div",{className:"relative",children:[m.jsx(lg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"tel",required:!0,value:L,onChange:Ce=>T(Ce.target.value),placeholder:"0909123456",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu"}),m.jsxs("div",{className:"relative",children:[m.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:_?"text":"password",required:!0,value:C,onChange:Ce=>S(Ce.target.value),placeholder:"Mật khẩu",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),m.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?m.jsx(kd,{className:"w-4 h-4"}):m.jsx(Bd,{className:"w-4 h-4"})})]})]}),m.jsx("button",{type:"submit",disabled:D,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:D?"ĐANG KHỞI TẠO...":"TẠO TÀI KHOẢN & KHỞI TẠO OTP"})]}),p==="forgot-password"&&m.jsx("div",{className:"space-y-3.5",children:V===1?m.jsxs("form",{onSubmit:je,className:"space-y-3.5",children:[m.jsx("div",{className:"text-xs text-gray-600 mb-2",children:"Nhập số điện thoại đã đăng ký tài khoản để nhận mã OTP lấy lại mật khẩu."}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Số Điện Thoại Đã Đăng Ký"}),m.jsxs("div",{className:"relative",children:[m.jsx(lg,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"tel",required:!0,value:L,onChange:Ce=>T(Ce.target.value),placeholder:"0909123456",className:"w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"})]})]}),m.jsx("button",{type:"submit",disabled:D,className:"flex items-center justify-center w-full py-3 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:D?"ĐANG GỬI MÃ...":"GỬI MÃ OTP QUÊN MẬT KHẨU"})]}):m.jsxs("form",{onSubmit:We,className:"space-y-3.5",children:[m.jsxs("div",{className:"text-xs text-gray-600",children:["Nhập mã OTP 6 chữ số & Mật khẩu mới cho số điện thoại ",m.jsx("strong",{className:"text-black",children:J})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mã OTP (6 chữ số)"}),m.jsx("div",{className:"flex justify-between items-center gap-1.5",children:X.map((Ce,le)=>m.jsx("input",{id:`otp-input-${le}`,type:"text",maxLength:1,value:Ce,onChange:Ne=>Y(le,Ne.target.value),onKeyDown:Ne=>_e(le,Ne),className:"w-10 h-11 text-center text-base font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},le))})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-[11px] font-extrabold text-gray-700 mb-1 uppercase tracking-wider",children:"Mật Khẩu Mới"}),m.jsxs("div",{className:"relative",children:[m.jsx(zd,{className:"absolute left-3.5 top-3 w-4 h-4 text-gray-400"}),m.jsx("input",{type:_?"text":"password",required:!0,value:g,onChange:Ce=>R(Ce.target.value),placeholder:"Mật khẩu mới (tối thiểu 6 ký tự)",className:"w-full pl-10 pr-10 py-2.5 text-xs bg-gray-50/80 border border-gray-200 rounded-2xl text-gray-900 focus:bg-white focus:border-black focus:outline-none transition-all"}),m.jsx("button",{type:"button",onClick:()=>y(!_),className:"absolute right-3.5 top-3 text-gray-400 hover:text-black",children:_?m.jsx(kd,{className:"w-4 h-4"}):m.jsx(Bd,{className:"w-4 h-4"})})]})]}),m.jsxs("div",{className:"flex space-x-2",children:[m.jsx("button",{type:"button",onClick:()=>Z(1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors",children:"Quay Lại"}),m.jsx("button",{type:"submit",disabled:D,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-2xl shadow-lg transition-all",children:D?"...":"ĐẶT LAI MẬT KHẨU"})]})]})}),m.jsxs("div",{className:"mt-4 pt-4 border-t border-gray-100",children:[m.jsx("div",{className:"text-[10px] font-bold text-gray-400 text-center uppercase tracking-widest mb-2.5",children:"Hoặc Đăng Nhập Với Mạng Xã Hội"}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsxs("button",{type:"button",onClick:ze,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-white hover:bg-gray-50 border border-gray-200 rounded-2xl text-xs font-bold text-gray-700 shadow-sm transition-all hover:border-gray-400",children:[m.jsxs("svg",{className:"w-4 h-4",viewBox:"0 0 24 24",children:[m.jsx("path",{fill:"#4285F4",d:"M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"}),m.jsx("path",{fill:"#34A853",d:"M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"}),m.jsx("path",{fill:"#FBBC05",d:"M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"}),m.jsx("path",{fill:"#EA4335",d:"M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"})]}),m.jsx("span",{children:"Google"})]}),m.jsxs("button",{type:"button",onClick:it,className:"flex items-center justify-center space-x-2 py-2.5 px-3 bg-[#1877F2] hover:bg-[#166fe5] rounded-2xl text-xs font-bold text-white shadow-sm transition-all",children:[m.jsx("svg",{className:"w-4 h-4 fill-current",viewBox:"0 0 24 24",children:m.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),m.jsx("span",{children:"Facebook"})]})]})]}),m.jsxs("div",{className:"mt-4 pt-3 border-t border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between mb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest",children:[m.jsx("span",{children:"Vào Thẳng Hệ Thống (Bỏ Qua Phân Quyền):"}),m.jsx(av,{className:"w-3.5 h-3.5 text-pink-500"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-1.5",children:[m.jsx("button",{type:"button",onClick:()=>nt("Admin"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"👑 Vào POS (Admin)"}),m.jsx("button",{type:"button",onClick:()=>nt("Cashier"),className:"py-1.5 px-2 bg-gray-100 hover:bg-black hover:text-white rounded-xl text-[11px] font-bold text-gray-800 transition-colors",children:"💵 Vào POS (Thu Ngân)"})]})]})]}),m.jsxs("div",{className:"hidden xl:flex flex-col justify-between h-[420px] pointer-events-auto text-right",children:[m.jsx("div",{className:"text-[11px] font-bold tracking-widest text-gray-400 uppercase",children:"THE SUMMIT OF THE MANY"}),m.jsx("div",{className:"text-9xl font-black tracking-tighter text-black leading-none font-mono",children:"_01"}),m.jsxs("div",{className:"text-[11px] font-extrabold text-gray-400 space-x-2",children:[m.jsx("span",{className:"hover:text-black cursor-pointer",children:"pmnd.rs"}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"hover:text-black cursor-pointer",children:"git"}),m.jsx("span",{children:"•"}),m.jsx("span",{className:"hover:text-black cursor-pointer",children:"csb"})]})]})]}),m.jsxs("footer",{className:"relative z-20 flex items-center justify-between px-8 py-4 text-[11px] font-bold text-gray-500 border-t border-gray-200/50 pointer-events-none",children:[m.jsx("div",{className:"pointer-events-auto",children:"THE SUMMIT OF THE MANY"}),m.jsxs("div",{className:"flex items-center space-x-2 pointer-events-auto",children:[m.jsx(sv,{className:"w-4 h-4 text-emerald-600"}),m.jsx("span",{children:"F&B POS & Inventory System © 2026"})]})]}),ue&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:m.jsxs("div",{className:"w-full max-w-sm bg-white rounded-3xl p-6 shadow-2xl text-center relative border border-gray-100",children:[m.jsx("div",{className:"flex items-center justify-center w-12 h-12 mx-auto mb-3 bg-pink-50 text-pink-600 rounded-2xl",children:m.jsx(IE,{className:"w-6 h-6"})}),m.jsx("h3",{className:"text-base font-black text-gray-900",children:"XÁC THỰC MÃ OTP SĐT"}),m.jsxs("p",{className:"mt-1 text-xs text-gray-500",children:["Nhập mã OTP 6 chữ số gửi tới ",m.jsx("strong",{children:J})]}),m.jsxs("form",{onSubmit:ve,className:"mt-5 space-y-4",children:[m.jsx("div",{className:"flex justify-between items-center gap-1.5",children:X.map((Ce,le)=>m.jsx("input",{id:`otp-input-${le}`,type:"text",maxLength:1,value:Ce,onChange:Ne=>Y(le,Ne.target.value),onKeyDown:Ne=>_e(le,Ne),className:"w-10 h-12 text-center text-lg font-black bg-gray-50 border border-gray-200 rounded-xl text-black focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"},le))}),m.jsxs("div",{className:"flex space-x-2 pt-2",children:[m.jsx("button",{type:"button",onClick:()=>me(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"HỦY"}),m.jsx("button",{type:"submit",disabled:D,className:"flex-1 py-2.5 text-xs font-black text-white bg-black hover:bg-gray-800 rounded-xl shadow-md",children:D?"...":"XÁC THỰC VÀO APP"})]})]})]})})]})},qR=[{id:"area-1",name:"Tầng 1 - Sảnh chính",description:"Khu vực máy lạnh sảnh trệt",tablesCount:8},{id:"area-2",name:"Tầng 2 - Lầu 1",description:"Không gian ấm cúng, sofa",tablesCount:6},{id:"area-3",name:"Sân Thượng / Ngoại trời",description:"Thoáng mát ngoài trời",tablesCount:5},{id:"area-4",name:"Phòng VIP",description:"Phòng riêng tổ chức tiệc",tablesCount:2}],$R=[{id:"t-101",code:"T101",name:"Bàn 101",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1001",totalAmount:285e3,occupiedAt:"2026-08-20T11:30:00"},{id:"t-102",code:"T102",name:"Bàn 102",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-103",code:"T103",name:"Bàn 103",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Occupied",currentOrderId:"ORD-1002",totalAmount:41e4,occupiedAt:"2026-08-20T12:05:00"},{id:"t-104",code:"T104",name:"Bàn 104",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:6,status:"Reserved"},{id:"t-105",code:"T105",name:"Bàn 105",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Cleaning"},{id:"t-106",code:"T106",name:"Bàn 106",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:2,status:"Available"},{id:"t-107",code:"T107",name:"Bàn 107",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:8,status:"Available"},{id:"t-108",code:"T108",name:"Bàn 108",areaId:"area-1",areaName:"Tầng 1 - Sảnh chính",capacity:4,status:"Available"},{id:"t-201",code:"T201",name:"Bàn 201",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Occupied",currentOrderId:"ORD-1003",totalAmount:175e3,occupiedAt:"2026-08-20T12:15:00"},{id:"t-202",code:"T202",name:"Bàn 202",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:2,status:"Available"},{id:"t-203",code:"T203",name:"Bàn 203",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:4,status:"Available"},{id:"t-204",code:"T204",name:"Bàn 204",areaId:"area-2",areaName:"Tầng 2 - Lầu 1",capacity:6,status:"Available"},{id:"t-301",code:"ST01",name:"Sân Thượng 1",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Available"},{id:"t-302",code:"ST02",name:"Sân Thượng 2",areaId:"area-3",areaName:"Sân Thượng / Ngoại trời",capacity:4,status:"Occupied",currentOrderId:"ORD-1004",totalAmount:52e4,occupiedAt:"2026-08-20T11:45:00"},{id:"t-vip1",code:"VIP1",name:"Phòng VIP 1",areaId:"area-4",areaName:"Phòng VIP",capacity:12,status:"Reserved"},{id:"t-vip2",code:"VIP2",name:"Phòng VIP 2",areaId:"area-4",areaName:"Phòng VIP",capacity:16,status:"Available"}],YR=[{id:"cat-all",name:"Tất cả món",icon:"Utensils",itemCount:12},{id:"cat-coffee",name:"Cà phê",icon:"Coffee",itemCount:4},{id:"cat-milktea",name:"Trà sữa & Trà",icon:"CupSoda",itemCount:3},{id:"cat-food",name:"Món ăn điểm tâm",icon:"Pizza",itemCount:3},{id:"cat-dessert",name:"Bánh ngọt",icon:"Cake",itemCount:2}],KR=[{id:"prod-1",code:"CF01",name:"Cà Phê Sữa Đá Sài Gòn",categoryId:"cat-coffee",categoryName:"Cà phê",price:35e3,costPrice:8e3,imageUrl:"https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=500&q=80",isAvailable:!0,description:"Cà phê đậm đà kết hợp với sữa đặc béo ngậy truyền thống",options:[{id:"opt-ice",name:"Mức Đá",isRequired:!0,values:[{id:"ice-100",name:"100% Đá",extraPrice:0},{id:"ice-50",name:"50% Đá",extraPrice:0},{id:"ice-no",name:"Không Đá",extraPrice:0}]}]},{id:"prod-2",code:"CF02",name:"Bạc Xỉu Măng Đen",categoryId:"cat-coffee",categoryName:"Cà phê",price:42e3,costPrice:1e4,imageUrl:"https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-3",code:"CF03",name:"Espresso Double Shot",categoryId:"cat-coffee",categoryName:"Cà phê",price:38e3,imageUrl:"https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-4",code:"CF04",name:"Caramel Macchiato Đá",categoryId:"cat-coffee",categoryName:"Cà phê",price:55e3,imageUrl:"https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-5",code:"TM01",name:"Trà Sữa Trân Châu Hoàng Gia",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:49e3,imageUrl:"https://images.unsplash.com/photo-1558857563-b371033873b8?auto=format&fit=crop&w=500&q=80",isAvailable:!0,options:[{id:"opt-topping",name:"Topping Thêm",isRequired:!1,values:[{id:"top-1",name:"Trân châu đen",extraPrice:1e4},{id:"top-2",name:"Pudding trứng",extraPrice:12e3}]}]},{id:"prod-6",code:"TM02",name:"Trà Đào Cam Sả",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:45e3,imageUrl:"https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-7",code:"TM03",name:"Trà Vải Lài Kem Phô Mai",categoryId:"cat-milktea",categoryName:"Trà sữa & Trà",price:52e3,imageUrl:"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-8",code:"FD01",name:"Bánh Mì Chảo Bít Tết Đặc Biệt",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:68e3,imageUrl:"https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-9",code:"FD02",name:"Mì Ý Sốt Bò Băm Bolognese",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:79e3,imageUrl:"https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-10",code:"FD03",name:"Croissant Bơ Tỏi Nướng",categoryId:"cat-food",categoryName:"Món ăn điểm tâm",price:45e3,imageUrl:"https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-11",code:"DS01",name:"Bánh Tiramisu Ý Ca Cao",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:48e3,imageUrl:"https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",isAvailable:!0},{id:"prod-12",code:"DS02",name:"Bánh Cheese Cake Chanh Dây",categoryId:"cat-dessert",categoryName:"Bánh ngọt",price:52e3,imageUrl:"https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=500&q=80",isAvailable:!0}],ZR=[{id:"kt-1",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Cà Phê Sữa Đá Sài Gòn",quantity:2,note:"100% Đá, ít ngọt",status:"Pending",createdAt:"2026-08-20T12:20:00",elapsedMinutes:12},{id:"kt-2",orderId:"ORD-1001",orderCode:"ORD-1001",tableName:"Bàn 101",areaName:"Tầng 1",productName:"Bánh Mì Chảo Bít Tết Đặc Biệt",quantity:1,note:"Trứng ốp lọt",status:"Cooking",createdAt:"2026-08-20T12:21:00",elapsedMinutes:11},{id:"kt-3",orderId:"ORD-1003",orderCode:"ORD-1003",tableName:"Bàn 201",areaName:"Tầng 2",productName:"Trà Sữa Trân Châu Hoàng Gia",quantity:3,optionsText:"Topping Trân châu đen (+10k)",status:"Pending",createdAt:"2026-08-20T12:25:00",elapsedMinutes:7},{id:"kt-4",orderId:"ORD-1004",orderCode:"ORD-1004",tableName:"Sân Thượng 2",areaName:"Sân Thượng",productName:"Mì Ý Sốt Bò Băm Bolognese",quantity:2,status:"Ready",createdAt:"2026-08-20T12:10:00",elapsedMinutes:22}],JR=[{id:"inv-1",code:"RM001",name:"Hạt Cà Phê Robusta Buôn Ma Thuột",unit:"kg",minStock:10,currentStock:24.5,unitPrice:18e4,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-19T16:00:00"},{id:"inv-2",code:"RM002",name:"Sữa Đặc Ngôi Sao Phương Nam",unit:"Hộp",minStock:20,currentStock:8,unitPrice:22e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T08:00:00"},{id:"inv-3",code:"RM003",name:"Sữa Tươi Thanh Trùng Vinamilk 1L",unit:"Hộp",minStock:15,currentStock:42,unitPrice:34e3,category:"Nguyên liệu pha chế",lastUpdated:"2026-08-20T09:30:00"},{id:"inv-4",code:"RM004",name:"Trân Châu Đen Đài Loan",unit:"kg",minStock:5,currentStock:3.2,unitPrice:65e3,category:"Topping & Thạch",lastUpdated:"2026-08-18T10:00:00"},{id:"inv-5",code:"RM005",name:"Thịt Bò Mỹ Xắt Lát (Bít tết)",unit:"kg",minStock:8,currentStock:12,unitPrice:28e4,category:"Thực phẩm tươi sống",lastUpdated:"2026-08-20T07:00:00"}],QR={todayRevenue:1485e4,revenueGrowthPercent:18.5,todayOrders:142,ordersGrowthPercent:12.3,averageOrderValue:104577,activeTablesCount:4,totalTablesCount:25,topSellingProducts:[{name:"Cà Phê Sữa Đá Sài Gòn",quantity:68,revenue:238e4},{name:"Trà Sữa Trân Châu Hoàng Gia",quantity:54,revenue:2646e3},{name:"Bạc Xỉu Măng Đen",quantity:42,revenue:1764e3},{name:"Bánh Mì Chảo Bít Tết",quantity:28,revenue:1904e3},{name:"Trà Đào Cam Sả",quantity:25,revenue:1125e3}],revenueChartData:[{time:"07:00",amount:85e4},{time:"09:00",amount:24e5},{time:"11:00",amount:48e5},{time:"13:00",amount:32e5},{time:"15:00",amount:19e5},{time:"17:00",amount:17e5}]},eN=[{id:"cust-1",fullName:"Nguyễn Văn Minh",phoneNumber:"0909123456",email:"minh.nguyen@example.com",points:1450,tier:"Gold",totalSpent:145e5,lastVisit:"2026-08-19"},{id:"cust-2",fullName:"Trần Thị Thu Thảo",phoneNumber:"0988777666",email:"thao.tran@example.com",points:820,tier:"Silver",totalSpent:82e5,lastVisit:"2026-08-20"},{id:"cust-3",fullName:"Lê Hoàng Nam",phoneNumber:"0912345678",points:3100,tier:"Diamond",totalSpent:31e6,lastVisit:"2026-08-18"}],tN=[{id:"v-1",code:"CHAOHE2026",discountType:"Percentage",discountValue:15,minOrderValue:1e5,maxDiscount:5e4,validUntil:"2026-09-30",usageLimit:500,usedCount:142,isActive:!0},{id:"v-2",code:"KHAICHUONG30K",discountType:"FixedAmount",discountValue:3e4,minOrderValue:15e4,validUntil:"2026-12-31",usageLimit:1e3,usedCount:450,isActive:!0}],nN=[{id:"att-1",employeeName:"Nguyễn Văn Thu ngân",role:"Cashier",checkInTime:"06:45:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-2",employeeName:"Trần Văn Bếp",role:"Kitchen",checkInTime:"06:55:00",shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"},{id:"att-3",employeeName:"Lê Kho Hàng",role:"Warehouse",checkInTime:"08:00:00",shiftName:"Hành chính (08:00 - 17:00)",status:"Working"}],kn=i=>i==null?"0 ₫":new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND",maximumFractionDigits:0}).format(i),iN=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleString("vi-VN",{hour:"2-digit",minute:"2-digit",day:"2-digit",month:"2-digit",year:"numeric"})},jv=i=>{if(!i)return"";const e=new Date(i);return isNaN(e.getTime())?i:e.toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit"})},rN=()=>{var Ce;const{selectedTable:i,setSelectedTable:e,orderType:t,setOrderType:r,cartItems:a,addToCart:l,updateQuantity:c,clearCart:d,discountAmount:f,setDiscountAmount:p,discountType:x,setDiscountType:_,subTotal:y,calculatedDiscount:M,finalTotal:b}=QM(),[C,S]=de.useState("floor"),[g,R]=de.useState("all"),[L,T]=de.useState("cat-all"),[D,P]=de.useState(""),[F,w]=de.useState(null),[U,z]=de.useState([]),[V,Z]=de.useState(""),[ue,me]=de.useState(!1),[X,pe]=de.useState("Cash"),[J,q]=de.useState(0),[ce,se]=de.useState(!1),[O,Q]=de.useState(""),[Oe,je]=de.useState($R),We=Oe.filter(le=>g==="all"?!0:le.areaId===g),Y=KR.filter(le=>{const Ne=L==="cat-all"?!0:le.categoryId===L,Ge=le.name.toLowerCase().includes(D.toLowerCase())||le.code.toLowerCase().includes(D.toLowerCase());return Ne&&Ge}),_e=le=>{e(le),r("DineIn"),S("order")},ve=le=>{w(le),z([]),Z("")},ze=()=>{F&&(l(F,U,V),w(null))},it=()=>{a.length!==0&&(i&&je(le=>le.map(Ne=>Ne.id===i.id?{...Ne,status:"Occupied",totalAmount:b,occupiedAt:new Date().toISOString()}:Ne)),Q("Đã gửi đơn hàng xuống Màn hình Bếp (KDS) thành công!"),se(!0),setTimeout(()=>se(!1),3e3))},nt=()=>{i&&je(le=>le.map(Ne=>Ne.id===i.id?{...Ne,status:"Cleaning",totalAmount:void 0,occupiedAt:void 0}:Ne)),me(!1),d(),e(null),S("floor"),Q("Thanh toán thành công & In hóa đơn hoàn tất!"),se(!0),setTimeout(()=>se(!1),3500)};return m.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)]",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-3 mb-3 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl",children:[m.jsxs("button",{onClick:()=>S("floor"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="floor"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[m.jsx(OE,{className:"w-4 h-4"}),m.jsx("span",{children:"Sơ Đồ Bàn"})]}),m.jsxs("button",{onClick:()=>S("order"),className:`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${C==="order"?"bg-white text-emerald-700 shadow-sm":"text-gray-600 hover:text-gray-900"}`,children:[m.jsx(ug,{className:"w-4 h-4"}),m.jsx("span",{children:"Thực Đơn & Order"}),a.length>0&&m.jsx("span",{className:"flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-emerald-600 rounded-full",children:a.length})]})]}),i?m.jsxs("div",{className:"flex items-center space-x-2 px-3 py-1.5 bg-emerald-50 text-emerald-800 rounded-xl border border-emerald-200 text-xs font-semibold",children:[m.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),m.jsxs("span",{children:["Đang chọn: ",m.jsx("strong",{children:i.name})," (",i.areaName,")"]}),m.jsx("button",{onClick:()=>{e(null),S("floor")},className:"ml-2 text-gray-400 hover:text-rose-600",children:m.jsx(pa,{className:"w-3.5 h-3.5"})})]}):m.jsxs("div",{className:"text-xs text-gray-500 font-medium hidden sm:block",children:["Vui lòng chọn bàn để tạo order hoặc chọn ",m.jsx("strong",{children:"Mang về"})]}),m.jsxs("div",{className:"flex items-center space-x-1 bg-gray-100 p-1 rounded-xl text-xs font-semibold",children:[m.jsx("button",{onClick:()=>r("DineIn"),className:`px-3 py-1 rounded-lg transition-colors ${t==="DineIn"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Tại Bàn"}),m.jsx("button",{onClick:()=>{r("Takeaway"),e(null),S("order")},className:`px-3 py-1 rounded-lg transition-colors ${t==="Takeaway"?"bg-emerald-600 text-white shadow-sm":"text-gray-600 hover:bg-gray-200"}`,children:"Mang Về"})]})]}),C==="floor"?m.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm overflow-hidden",children:[m.jsxs("div",{className:"flex items-center space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:[m.jsxs("button",{onClick:()=>R("all"),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${g==="all"?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:["Tất cả khu vực (",Oe.length,")"]}),qR.map(le=>m.jsxs("button",{onClick:()=>R(le.id),className:`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${g===le.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-700 hover:bg-gray-200"}`,children:[le.name," (",le.tablesCount,")"]},le.id))]}),m.jsxs("div",{className:"flex items-center space-x-4 my-3 text-xs font-medium text-gray-600",children:[m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-emerald-500"}),m.jsx("span",{children:"Bàn trống"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-rose-500"}),m.jsx("span",{children:"Đang có khách"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500"}),m.jsx("span",{children:"Đã đặt trước"})]}),m.jsxs("div",{className:"flex items-center space-x-1.5",children:[m.jsx("span",{className:"w-3 h-3 rounded-full bg-blue-400"}),m.jsx("span",{children:"Cần dọn"})]})]}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3.5 p-1",children:We.map(le=>{const Ne=le.status==="Occupied",Ge=le.status==="Reserved",Ee=le.status==="Cleaning";let Ke="bg-emerald-50 border-emerald-200 hover:border-emerald-500 text-emerald-900",_t="bg-emerald-500 text-white",yt="Sẵn sàng";return Ne?(Ke="bg-rose-50 border-rose-200 hover:border-rose-500 text-rose-900",_t="bg-rose-500 text-white",yt="Có khách"):Ge?(Ke="bg-amber-50 border-amber-200 hover:border-amber-500 text-amber-900",_t="bg-amber-500 text-white",yt="Đã đặt"):Ee&&(Ke="bg-blue-50 border-blue-200 hover:border-blue-500 text-blue-900",_t="bg-blue-500 text-white",yt="Cần dọn"),m.jsxs("div",{onClick:()=>_e(le),className:`flex flex-col justify-between p-3.5 rounded-2xl border-2 cursor-pointer transition-all duration-150 transform hover:-translate-y-1 hover:shadow-lg ${Ke}`,children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"font-extrabold text-sm tracking-tight",children:le.name}),m.jsx("span",{className:`px-2 py-0.5 text-[10px] font-bold rounded-full ${_t}`,children:yt})]}),m.jsx("div",{className:"flex items-center space-x-2 text-[11px] opacity-75 mt-1",children:m.jsxs("span",{className:"flex items-center",children:[m.jsx(Gc,{className:"w-3 h-3 mr-1"})," ",le.capacity," chỗ"]})})]}),m.jsx("div",{className:"mt-3 pt-2 border-t border-black/5",children:Ne?m.jsxs(m.Fragment,{children:[m.jsx("div",{className:"text-[11px] font-medium opacity-80",children:"Tổng đơn:"}),m.jsx("div",{className:"font-extrabold text-sm text-rose-700",children:kn(le.totalAmount)}),le.occupiedAt&&m.jsxs("div",{className:"flex items-center text-[10px] opacity-70 mt-0.5",children:[m.jsx(Hc,{className:"w-3 h-3 mr-1"}),m.jsx("span",{children:jv(le.occupiedAt)})]})]}):m.jsxs("div",{className:"flex items-center justify-between text-xs font-semibold opacity-90",children:[m.jsx("span",{children:"Đặt món"}),m.jsx(ME,{className:"w-4 h-4"})]})})]},le.id)})})]}):m.jsxs("div",{className:"flex-1 flex flex-col md:flex-row gap-4 min-h-0 overflow-hidden",children:[m.jsxs("div",{className:"flex-1 flex flex-col min-h-0 bg-white rounded-2xl border border-gray-200 p-4 shadow-sm",children:[m.jsxs("div",{className:"relative mb-3",children:[m.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:D,onChange:le=>P(le.target.value),placeholder:"Tìm tên món ăn, đồ uống...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"})]}),m.jsx("div",{className:"flex space-x-2 pb-3 overflow-x-auto no-scrollbar border-b border-gray-100",children:YR.map(le=>m.jsx("button",{onClick:()=>T(le.id),className:`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${L===le.id?"bg-emerald-600 text-white shadow-md shadow-emerald-600/20":"bg-gray-100 text-gray-600 hover:bg-gray-200"}`,children:le.name},le.id))}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3 p-1 mt-3",children:Y.map(le=>m.jsxs("div",{onClick:()=>le.options&&le.options.length>0?ve(le):l(le),className:"group flex flex-col justify-between bg-white rounded-xl border border-gray-200 p-2.5 hover:border-emerald-500 hover:shadow-md cursor-pointer transition-all duration-150",children:[m.jsxs("div",{className:"relative aspect-video rounded-lg overflow-hidden bg-gray-100 mb-2",children:[m.jsx("img",{src:le.imageUrl,alt:le.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"}),m.jsx("span",{className:"absolute top-1 left-1 px-1.5 py-0.5 text-[9px] font-bold bg-black/60 text-white rounded",children:le.code})]}),m.jsxs("div",{children:[m.jsx("h4",{className:"text-xs font-bold text-gray-900 line-clamp-2 leading-tight",children:le.name}),m.jsxs("div",{className:"flex items-center justify-between mt-2",children:[m.jsx("span",{className:"text-xs font-extrabold text-emerald-700",children:kn(le.price)}),m.jsx("button",{className:"p-1 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-colors",children:m.jsx(Rc,{className:"w-3.5 h-3.5"})})]})]})]},le.id))})]}),m.jsxs("div",{className:"w-full md:w-80 lg:w-96 flex flex-col bg-white rounded-2xl border border-gray-200 p-4 shadow-md min-h-0",children:[m.jsx("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:m.jsxs("div",{className:"flex items-center space-x-2",children:[m.jsx(og,{className:"w-5 h-5 text-emerald-600"}),m.jsx("h3",{className:"font-bold text-sm text-gray-900",children:"Chi Tiết Đơn Hàng"})]})}),m.jsx("div",{className:"flex-1 overflow-y-auto py-3 space-y-2.5 divide-y divide-gray-50",children:a.length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center h-48 text-center text-gray-400",children:[m.jsx(ug,{className:"w-10 h-10 mb-2 opacity-30"}),m.jsx("p",{className:"text-xs font-medium",children:"Chưa có món ăn nào trong giỏ"})]}):a.map(le=>m.jsx("div",{className:"pt-2 first:pt-0",children:m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{className:"flex-1 pr-2",children:[m.jsx("div",{className:"text-xs font-bold text-gray-900",children:le.product.name}),le.selectedOptions.length>0&&m.jsx("div",{className:"text-[10px] text-gray-500 font-medium",children:le.selectedOptions.map(Ne=>Ne.valueName).join(", ")}),m.jsx("div",{className:"text-xs font-semibold text-emerald-700 mt-0.5",children:kn(le.unitPrice)})]}),m.jsxs("div",{className:"flex items-center space-x-1.5 bg-gray-100 p-1 rounded-lg",children:[m.jsx("button",{onClick:()=>c(le.cartItemId,-1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:m.jsx(jE,{className:"w-3 h-3"})}),m.jsx("span",{className:"w-5 text-center text-xs font-bold",children:le.quantity}),m.jsx("button",{onClick:()=>c(le.cartItemId,1),className:"p-0.5 text-gray-600 hover:bg-white rounded",children:m.jsx(Rc,{className:"w-3 h-3"})})]}),m.jsx("div",{className:"w-16 text-right font-bold text-xs text-gray-900 ml-2",children:kn(le.totalPrice)})]})},le.cartItemId))}),a.length>0&&m.jsxs("div",{className:"pt-3 border-t border-gray-100 space-y-2",children:[m.jsxs("div",{className:"flex justify-between text-sm font-extrabold text-gray-900 pt-1 border-t border-gray-100",children:[m.jsx("span",{children:"Khách cần trả:"}),m.jsx("span",{className:"text-emerald-700 text-base",children:kn(b)})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2 pt-2",children:[m.jsxs("button",{onClick:it,className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-xl transition-colors",children:[m.jsx(nw,{className:"w-4 h-4"}),m.jsx("span",{children:"Gửi Bếp"})]}),m.jsxs("button",{onClick:()=>me(!0),className:"flex items-center justify-center space-x-1.5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-colors",children:[m.jsx(og,{className:"w-4 h-4"}),m.jsx("span",{children:"Thanh Toán"})]})]})]})]})]}),F&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-5 border border-gray-100",children:[m.jsxs("div",{className:"flex items-start justify-between pb-3 border-b border-gray-100",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-bold text-base text-gray-900",children:F.name}),m.jsx("p",{className:"text-xs text-emerald-700 font-extrabold",children:kn(F.price)})]}),m.jsx("button",{onClick:()=>w(null),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsx("div",{className:"py-4 space-y-4 max-h-80 overflow-y-auto",children:(Ce=F.options)==null?void 0:Ce.map(le=>m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:le.name}),m.jsx("div",{className:"grid grid-cols-2 gap-2",children:le.values.map(Ne=>{const Ge=U.some(Ee=>Ee.optionId===le.id&&Ee.valueId===Ne.id);return m.jsx("button",{type:"button",onClick:()=>{z(Ee=>[...Ee.filter(_t=>_t.optionId!==le.id),{optionId:le.id,optionName:le.name,valueId:Ne.id,valueName:Ne.name,extraPrice:Ne.extraPrice}])},className:`p-2 rounded-xl text-xs font-medium border text-left transition-all ${Ge?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"}`,children:m.jsx("div",{children:Ne.name})},Ne.id)})})]},le.id))}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{onClick:()=>w(null),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Hủy"}),m.jsx("button",{onClick:ze,className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30",children:"Thêm Vào Giỏ"})]})]})}),ue&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-lg bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-gray-100",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thanh Toán Hóa Đơn"}),m.jsx("p",{className:"text-xs text-gray-500",children:i?`Bàn: ${i.name}`:"Đơn mang về"})]}),m.jsx("button",{onClick:()=>me(!1),className:"p-1 text-gray-400 hover:text-gray-600 rounded-lg",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"py-4 space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-2",children:"Phương Thức Thanh Toán"}),m.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[m.jsxs("button",{onClick:()=>pe("Cash"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${X==="Cash"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx(lE,{className:"w-6 h-6 mb-1 text-emerald-600"}),m.jsx("span",{className:"text-xs",children:"Tiền Mặt"})]}),m.jsxs("button",{onClick:()=>pe("QR"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${X==="QR"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx(JE,{className:"w-6 h-6 mb-1 text-teal-600"}),m.jsx("span",{className:"text-xs",children:"Chuyển Khoản QR"})]}),m.jsxs("button",{onClick:()=>pe("Card"),className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${X==="Card"?"bg-emerald-50 border-emerald-600 text-emerald-800 font-bold":"bg-gray-50 border-gray-200 text-gray-700"}`,children:[m.jsx(CE,{className:"w-6 h-6 mb-1 text-blue-600"}),m.jsx("span",{className:"text-xs",children:"Thẻ POS"})]})]})]}),m.jsxs("div",{className:"p-3 bg-emerald-50 rounded-xl border border-emerald-200 flex justify-between items-center",children:[m.jsx("span",{className:"text-xs font-semibold text-emerald-900",children:"Tổng tiền cần thu:"}),m.jsx("span",{className:"text-lg font-black text-emerald-700",children:kn(b)})]})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{onClick:()=>me(!1),className:"flex-1 py-3 text-xs font-bold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl",children:"Quay Lại"}),m.jsx("button",{onClick:nt,className:"flex-1 py-3 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-lg shadow-emerald-600/30",children:"Xác Nhận & In Hóa Đơn"})]})]})}),ce&&m.jsxs("div",{className:"fixed bottom-20 right-5 z-50 flex items-center p-4 bg-gray-900 text-white rounded-2xl shadow-2xl border border-gray-800 animate-in fade-in",children:[m.jsx(ko,{className:"w-5 h-5 text-emerald-400 mr-3 flex-shrink-0"}),m.jsx("span",{className:"text-xs font-bold",children:O})]})]})},sN=()=>{const[i,e]=de.useState(ZR),[t,r]=de.useState("ALL"),a=(c,d)=>{e(f=>f.map(p=>p.id===c?{...p,status:d}:p))},l=i.filter(c=>t==="ALL"?!0:c.status===t);return m.jsxs("div",{className:"flex flex-col h-[calc(100vh-5rem)] space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-amber-100 text-amber-800 rounded-xl",children:m.jsx(Oh,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Màn Hình Bếp & Pha Chế (KDS)"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi và cập nhật tiến độ chế biến món ăn"})]})]}),m.jsxs("div",{className:"flex p-1 bg-gray-100 rounded-xl space-x-1",children:[m.jsxs("button",{onClick:()=>r("ALL"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="ALL"?"bg-white text-gray-900 shadow-sm":"text-gray-600"}`,children:["Tất Cả (",i.length,")"]}),m.jsxs("button",{onClick:()=>r("Pending"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Pending"?"bg-rose-500 text-white shadow-sm":"text-gray-600"}`,children:["Chờ Làm (",i.filter(c=>c.status==="Pending").length,")"]}),m.jsxs("button",{onClick:()=>r("Cooking"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Cooking"?"bg-amber-500 text-white shadow-sm":"text-gray-600"}`,children:["Đang Chế Biến (",i.filter(c=>c.status==="Cooking").length,")"]}),m.jsxs("button",{onClick:()=>r("Ready"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${t==="Ready"?"bg-emerald-600 text-white shadow-sm":"text-gray-600"}`,children:["Hoàn Tất (",i.filter(c=>c.status==="Ready").length,")"]})]})]}),m.jsx("div",{className:"flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-1",children:l.length===0?m.jsxs("div",{className:"col-span-full flex flex-col items-center justify-center h-64 text-gray-400 bg-white rounded-2xl border border-gray-200",children:[m.jsx(Sw,{className:"w-12 h-12 mb-2 opacity-30"}),m.jsx("p",{className:"text-sm font-bold text-gray-500",children:"Không có món ăn nào trong hàng chờ"})]}):l.map(c=>{const d=c.status==="Pending",f=c.status==="Cooking",p=c.status==="Ready";let x="border-gray-200",_="bg-gray-100 text-gray-800";return d?(x="border-rose-300 ring-2 ring-rose-500/20",_="bg-rose-500 text-white"):f?(x="border-amber-300 ring-2 ring-amber-500/20",_="bg-amber-500 text-white"):p&&(x="border-emerald-300",_="bg-emerald-600 text-white"),m.jsxs("div",{className:`flex flex-col justify-between bg-white rounded-2xl border-2 shadow-sm overflow-hidden transition-all ${x}`,children:[m.jsxs("div",{className:`flex items-center justify-between px-4 py-2.5 ${_}`,children:[m.jsxs("div",{className:"font-extrabold text-sm",children:[c.tableName," (",c.areaName,")"]}),m.jsxs("div",{className:"flex items-center text-xs font-semibold space-x-1",children:[m.jsx(Hc,{className:"w-3.5 h-3.5"}),m.jsxs("span",{children:[c.elapsedMinutes," phút"]})]})]}),m.jsxs("div",{className:"p-4 space-y-3 flex-1",children:[m.jsxs("div",{className:"flex items-start justify-between",children:[m.jsxs("div",{children:[m.jsx("h4",{className:"text-base font-extrabold text-gray-900 leading-tight",children:c.productName}),c.optionsText&&m.jsx("p",{className:"text-xs text-gray-600 font-medium mt-1",children:c.optionsText}),c.note&&m.jsxs("p",{className:"text-xs text-rose-600 font-bold bg-rose-50 px-2 py-1 rounded-md mt-1 border border-rose-200 inline-block",children:["⚠️ ",c.note]})]}),m.jsxs("span",{className:"flex items-center justify-center w-8 h-8 font-black text-sm bg-gray-100 text-gray-900 rounded-xl border border-gray-200",children:["x",c.quantity]})]}),m.jsxs("div",{className:"text-[11px] text-gray-400 font-medium",children:["Mã đơn: ",c.orderCode," • Nhận lúc: ",jv(c.createdAt)]})]}),m.jsxs("div",{className:"p-3 bg-gray-50 border-t border-gray-100",children:[d&&m.jsxs("button",{onClick:()=>a(c.id,"Cooking"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-amber-500 hover:bg-amber-600 rounded-xl shadow-md transition-colors",children:[m.jsx(YE,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"BẮT ĐẦU CHẾ BIẾN"})]}),f&&m.jsxs("button",{onClick:()=>a(c.id,"Ready"),className:"flex items-center justify-center w-full py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors",children:[m.jsx(vE,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"HOÀN TẤT (BÁO PHỤC VỤ)"})]}),p&&m.jsxs("div",{className:"flex items-center justify-center py-2 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-xl border border-emerald-200",children:[m.jsx(ko,{className:"w-4 h-4 mr-1.5"}),m.jsx("span",{children:"Đã Xong - Chờ Phục Vụ"})]})]})]},c.id)})})]})},aN=()=>{const[i,e]=de.useState("items"),[t,r]=de.useState(JR),[a,l]=de.useState(""),[c,d]=de.useState(!1),[f,p]=de.useState(""),[x,_]=de.useState(""),[y,M]=de.useState("kg"),[b,C]=de.useState(10),[S,g]=de.useState(5e4),R=t.filter(T=>T.name.toLowerCase().includes(a.toLowerCase())||T.code.toLowerCase().includes(a.toLowerCase())),L=T=>{T.preventDefault();const D={id:`inv-${Date.now()}`,code:x||`RM00${t.length+1}`,name:f,unit:y,minStock:5,currentStock:Number(b),unitPrice:Number(S),category:"Nguyên liệu pha chế",lastUpdated:new Date().toISOString()};r([D,...t]),d(!1),p("")};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-blue-100 text-blue-800 rounded-xl",children:m.jsx(Uh,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Quản Lý Kho & Nguyên Liệu"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Theo dõi tồn kho thực tế, nhập kho và định lượng món"})]})]}),m.jsxs("button",{onClick:()=>d(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[m.jsx(Rc,{className:"w-4 h-4"}),m.jsx("span",{children:"Thêm Nguyên Liệu Mới"})]})]}),m.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[m.jsxs("button",{onClick:()=>e("items"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="items"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Mục Nguyên Liệu (",t.length,")"]}),m.jsx("button",{onClick:()=>e("orders"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="orders"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:"Đơn Nhập Kho (PO)"})]}),i==="items"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsxs("div",{className:"relative max-w-md",children:[m.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:a,onChange:T=>l(T.target.value),placeholder:"Tìm tên nguyên liệu hoặc mã nguyên liệu...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Mã NL"}),m.jsx("th",{className:"p-3",children:"Tên Nguyên Liệu"}),m.jsx("th",{className:"p-3",children:"Đơn Vị Tính"}),m.jsx("th",{className:"p-3",children:"Tồn Kho Hiện Tại"}),m.jsx("th",{className:"p-3",children:"Đơn Giá Nhập"}),m.jsx("th",{className:"p-3",children:"Trạng Thái"}),m.jsx("th",{className:"p-3 text-right",children:"Cập Nhật"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:R.map(T=>{const D=T.currentStock<=T.minStock;return m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-800",children:T.code}),m.jsx("td",{className:"p-3 font-bold text-gray-900",children:T.name}),m.jsx("td",{className:"p-3 font-medium text-gray-600",children:T.unit}),m.jsxs("td",{className:"p-3 font-extrabold text-gray-900",children:[T.currentStock," ",T.unit]}),m.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:kn(T.unitPrice)}),m.jsx("td",{className:"p-3",children:D?m.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800",children:[m.jsx(mw,{className:"w-3 h-3 mr-1"}),"Sắp Hết Kho"]}):m.jsxs("span",{className:"inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[m.jsx(ko,{className:"w-3 h-3 mr-1"}),"An Toàn"]})}),m.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:iN(T.lastUpdated)})]},T.id)})})]})})]}),i==="orders"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-6 shadow-sm text-center",children:[m.jsx(xw,{className:"w-12 h-12 text-blue-500 mx-auto mb-2 opacity-80"}),m.jsx("h3",{className:"text-sm font-bold text-gray-900",children:"Danh Sách Đơn Mua Hàng Nhà Cung Cấp (PO)"}),m.jsx("p",{className:"text-xs text-gray-500 mt-1 max-w-sm mx-auto",children:"Hệ thống hỗ trợ duyệt đơn nhập kho, kiểm hàng tự động cộng tồn kho tức thì."})]}),c&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Thêm Nguyên Liệu Kho Mới"}),m.jsx("button",{onClick:()=>d(!1),className:"text-gray-400 hover:text-gray-600",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("form",{onSubmit:L,className:"py-4 space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Nguyên Liệu"}),m.jsx("input",{type:"text",value:x,onChange:T=>_(T.target.value),placeholder:"Ví dụ: RM006",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Tên Nguyên Liệu (*)"}),m.jsx("input",{type:"text",required:!0,value:f,onChange:T=>p(T.target.value),placeholder:"Ví dụ: Bột Matcha Nhật Bản",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Vị Tính"}),m.jsx("input",{type:"text",value:y,onChange:T=>M(T.target.value),placeholder:"kg, Hộp, Chai...",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Lượng Ban Đầu"}),m.jsx("input",{type:"number",value:b,onChange:T=>C(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Đơn Giá Nhập (₫)"}),m.jsx("input",{type:"number",value:S,onChange:T=>g(Number(T.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{type:"button",onClick:()=>d(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200",children:"Hủy"}),m.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl hover:bg-emerald-700 shadow-md shadow-emerald-600/30",children:"Lưu Nguyên Liệu"})]})]})]})})]})},oN=()=>{const i=QR;return m.jsxs("div",{className:"flex flex-col space-y-5",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-emerald-100 text-emerald-800 rounded-xl",children:m.jsx(gE,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Báo Cáo & Thống Kê Kinh Doanh"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Tổng quan doanh thu, đơn hàng và sản phẩm bán chạy"})]})]}),m.jsxs("div",{className:"flex items-center space-x-2 text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1.5 rounded-xl border border-gray-200",children:[m.jsx(hE,{className:"w-4 h-4 text-emerald-600"}),m.jsxs("span",{children:["Hôm nay: ",new Date().toLocaleDateString("vi-VN")]})]})]}),m.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Doanh Thu Hôm Nay"}),m.jsx("div",{className:"p-2 bg-emerald-50 text-emerald-700 rounded-xl",children:m.jsx(NE,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsx("div",{className:"text-2xl font-black text-gray-900",children:kn(i.todayRevenue)}),m.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[m.jsx(sg,{className:"w-4 h-4 mr-0.5"}),m.jsxs("span",{children:["+",i.revenueGrowthPercent,"% so với hôm qua"]})]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Số Đơn Phục Vụ"}),m.jsx("div",{className:"p-2 bg-blue-50 text-blue-700 rounded-xl",children:m.jsx(sw,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.todayOrders," đơn"]}),m.jsxs("div",{className:"flex items-center text-xs font-semibold text-emerald-600 mt-1",children:[m.jsx(sg,{className:"w-4 h-4 mr-0.5"}),m.jsxs("span",{children:["+",i.ordersGrowthPercent,"% tăng trưởng"]})]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Giá Trị Đơn Trung Bình"}),m.jsx("div",{className:"p-2 bg-purple-50 text-purple-700 rounded-xl",children:m.jsx(hw,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsx("div",{className:"text-2xl font-black text-gray-900",children:kn(i.averageOrderValue)}),m.jsxs("div",{className:"text-xs font-medium text-gray-400 mt-1",children:["Tính trên ",i.todayOrders," hóa đơn"]})]})]}),m.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between",children:[m.jsxs("div",{className:"flex items-center justify-between",children:[m.jsx("span",{className:"text-xs font-bold text-gray-500 uppercase tracking-wider",children:"Tải Bàn Hiện Tại"}),m.jsx("div",{className:"p-2 bg-amber-50 text-amber-700 rounded-xl",children:m.jsx(Gc,{className:"w-5 h-5"})})]}),m.jsxs("div",{className:"mt-3",children:[m.jsxs("div",{className:"text-2xl font-black text-gray-900",children:[i.activeTablesCount," / ",i.totalTablesCount," Bàn"]}),m.jsxs("div",{className:"text-xs font-semibold text-amber-600 mt-1",children:["Công suất: ",Math.round(i.activeTablesCount/i.totalTablesCount*100),"%"]})]})]})]}),m.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-5",children:[m.jsxs("div",{className:"lg:col-span-2 p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4",children:[m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Biểu Đồ Doanh Thu Theo Giờ"}),m.jsx("span",{className:"text-xs text-gray-400 font-medium",children:"Đơn vị: VNĐ"})]}),m.jsx("div",{className:"flex items-end justify-between h-56 pt-6 px-2 border-b border-gray-100",children:i.revenueChartData.map((e,t)=>{const r=Math.max(...i.revenueChartData.map(l=>l.amount)),a=Math.round(e.amount/r*100);return m.jsxs("div",{className:"flex flex-col items-center flex-1 mx-1 group",children:[m.jsx("div",{className:"text-[10px] font-bold text-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity mb-1",children:kn(e.amount)}),m.jsx("div",{className:"w-full bg-emerald-100 group-hover:bg-emerald-600 rounded-t-xl transition-all duration-200",style:{height:`${a}%`}}),m.jsx("div",{className:"text-[11px] font-semibold text-gray-500 mt-2",children:e.time})]},t)})})]}),m.jsxs("div",{className:"p-5 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-2 mb-4",children:[m.jsx(tv,{className:"w-5 h-5 text-amber-500"}),m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Top Sản Phẩm Bán Chạy"})]}),m.jsx("div",{className:"space-y-3 divide-y divide-gray-50",children:i.topSellingProducts.map((e,t)=>m.jsxs("div",{className:"flex items-center justify-between pt-2.5 first:pt-0",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("span",{className:`flex items-center justify-center w-6 h-6 rounded-lg text-xs font-black ${t===0?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-600"}`,children:t+1}),m.jsxs("div",{children:[m.jsx("div",{className:"text-xs font-bold text-gray-900",children:e.name}),m.jsxs("div",{className:"text-[10px] text-gray-500 font-medium",children:["Đã bán: ",e.quantity," phần"]})]})]}),m.jsx("div",{className:"text-xs font-extrabold text-emerald-700",children:kn(e.revenue)})]},t))})]})]})]})},lN=()=>{const[i,e]=de.useState("customers"),[t]=de.useState(eN),[r,a]=de.useState(tN),[l,c]=de.useState(""),[d,f]=de.useState(!1),[p,x]=de.useState(""),[_,y]=de.useState(2e4),M=t.filter(C=>C.fullName.toLowerCase().includes(l.toLowerCase())||C.phoneNumber.includes(l)),b=C=>{C.preventDefault();const S={id:`v-${Date.now()}`,code:p.toUpperCase()||"KM2026",discountType:"FixedAmount",discountValue:Number(_),minOrderValue:1e5,validUntil:"2026-12-31",usageLimit:200,usedCount:0,isActive:!0};a([S,...r]),f(!1),x("")};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 p-4 bg-white rounded-2xl border border-gray-200 shadow-sm",children:[m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-10 h-10 bg-purple-100 text-purple-800 rounded-xl",children:m.jsx(Gc,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("h2",{className:"text-base font-extrabold text-gray-900",children:"Khách Hàng & Chương Trình Khuyến Mãi"}),m.jsx("p",{className:"text-xs text-gray-500 font-medium",children:"Quản lý thành viên tích điểm và mã giảm giá Voucher"})]})]}),i==="vouchers"&&m.jsxs("button",{onClick:()=>f(!0),className:"flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md shadow-emerald-600/30 transition-all",children:[m.jsx(Rc,{className:"w-4 h-4"}),m.jsx("span",{children:"Tạo Voucher Mới"})]})]}),m.jsxs("div",{className:"flex space-x-2 border-b border-gray-200",children:[m.jsxs("button",{onClick:()=>e("customers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="customers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Danh Sách Khách Hàng (",t.length,")"]}),m.jsxs("button",{onClick:()=>e("vouchers"),className:`pb-2.5 px-4 text-xs font-bold transition-all border-b-2 ${i==="vouchers"?"border-emerald-600 text-emerald-700":"border-transparent text-gray-500 hover:text-gray-700"}`,children:["Mã Giảm Giá Voucher (",r.length,")"]})]}),i==="customers"&&m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsxs("div",{className:"relative max-w-md",children:[m.jsx(Fh,{className:"absolute left-3.5 top-2.5 w-4 h-4 text-gray-400"}),m.jsx("input",{type:"text",value:l,onChange:C=>c(C.target.value),placeholder:"Tìm theo tên hoặc số điện thoại khách hàng...",className:"w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-none"})]}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Họ & Tên"}),m.jsx("th",{className:"p-3",children:"Số Điện Thoại"}),m.jsx("th",{className:"p-3",children:"Điểm Tích Lũy"}),m.jsx("th",{className:"p-3",children:"Hạng Thành Viên"}),m.jsx("th",{className:"p-3",children:"Tổng Chi Tiêu"}),m.jsx("th",{className:"p-3 text-right",children:"Lần Ghé Gần Nhất"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:M.map(C=>m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-900",children:C.fullName}),m.jsx("td",{className:"p-3 font-medium text-gray-700",children:C.phoneNumber}),m.jsxs("td",{className:"p-3 font-extrabold text-amber-600",children:[C.points," điểm"]}),m.jsx("td",{className:"p-3",children:m.jsxs("span",{className:`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${C.tier==="Diamond"?"bg-purple-100 text-purple-800":C.tier==="Gold"?"bg-amber-100 text-amber-800":"bg-gray-100 text-gray-800"}`,children:[m.jsx(tv,{className:"w-3 h-3 mr-1"}),"Hạng ",C.tier]})}),m.jsx("td",{className:"p-3 font-bold text-emerald-700",children:kn(C.totalSpent)}),m.jsx("td",{className:"p-3 text-right text-[11px] text-gray-400",children:C.lastVisit})]},C.id))})]})})]}),i==="vouchers"&&m.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map(C=>m.jsx("div",{className:"p-4 bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-between",children:m.jsxs("div",{className:"flex items-center space-x-3",children:[m.jsx("div",{className:"flex items-center justify-center w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl font-black",children:m.jsx(dw,{className:"w-6 h-6"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-base font-black text-gray-900 tracking-wider",children:C.code}),m.jsx("div",{className:"text-xs font-bold text-emerald-700",children:C.discountType==="Percentage"?`Giảm ${C.discountValue}%`:`Giảm ${kn(C.discountValue)}`}),m.jsxs("div",{className:"text-[10px] text-gray-400",children:["Đơn từ ",kn(C.minOrderValue)," • Hạn: ",C.validUntil]})]})]})},C.id))}),d&&m.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:m.jsxs("div",{className:"w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6 border border-gray-100",children:[m.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-gray-100",children:[m.jsx("h3",{className:"font-extrabold text-base text-gray-900",children:"Tạo Mã Giảm Giá Mới"}),m.jsx("button",{onClick:()=>f(!1),className:"text-gray-400 hover:text-gray-600",children:m.jsx(pa,{className:"w-5 h-5"})})]}),m.jsxs("form",{onSubmit:b,className:"py-4 space-y-3",children:[m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Mã Voucher (*)"}),m.jsx("input",{type:"text",required:!0,value:p,onChange:C=>x(C.target.value),placeholder:"Ví dụ: KM30K",className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 uppercase font-bold tracking-wider"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"block text-xs font-bold text-gray-700 mb-1",children:"Số Tiền Giảm (₫)"}),m.jsx("input",{type:"number",value:_,onChange:C=>y(Number(C.target.value)),className:"w-full px-3 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"})]}),m.jsxs("div",{className:"flex space-x-2 pt-3 border-t border-gray-100",children:[m.jsx("button",{type:"button",onClick:()=>f(!1),className:"flex-1 py-2.5 text-xs font-bold text-gray-600 bg-gray-100 rounded-xl",children:"Hủy"}),m.jsx("button",{type:"submit",className:"flex-1 py-2.5 text-xs font-bold text-white bg-emerald-600 rounded-xl shadow-md shadow-emerald-600/30",children:"Tạo Voucher"})]})]})]})})]})},cN=()=>{const{user:i}=Fo(),[e,t]=de.useState(nN),[r,a]=de.useState(!1),l=()=>{var c;if(r)a(!1);else{const d={id:`att-${Date.now()}`,employeeName:(i==null?void 0:i.fullName)||(i==null?void 0:i.username)||"Nhân viên mới",role:(i==null?void 0:i.role)||((c=i==null?void 0:i.roles)==null?void 0:c[0])||"Cashier",checkInTime:new Date().toLocaleTimeString("vi-VN"),shiftName:"Ca Sáng (07:00 - 15:00)",status:"Working"};t([d,...e]),a(!0)}};return m.jsxs("div",{className:"flex flex-col space-y-4",children:[m.jsxs("div",{className:"p-6 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl shadow-lg flex flex-wrap items-center justify-between gap-4",children:[m.jsxs("div",{children:[m.jsxs("div",{className:"flex items-center space-x-2 text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1",children:[m.jsx(Hc,{className:"w-4 h-4"}),m.jsx("span",{children:"Màn Hình Điểm Danh Ca Làm Việc"})]}),m.jsxs("h2",{className:"text-2xl font-black",children:["Xin chào, ",(i==null?void 0:i.fullName)||(i==null?void 0:i.username),"!"]}),m.jsxs("p",{className:"text-xs text-emerald-100 mt-0.5",children:["Thời gian hiện tại: ",new Date().toLocaleTimeString("vi-VN")," • Ca Sáng"]})]}),m.jsx("button",{onClick:l,className:`flex items-center space-x-2 px-6 py-3.5 rounded-2xl text-xs font-black shadow-xl transition-all ${r?"bg-rose-500 hover:bg-rose-600 text-white shadow-rose-900/30":"bg-white text-emerald-800 hover:bg-emerald-50 shadow-emerald-900/30"}`,children:r?m.jsxs(m.Fragment,{children:[m.jsx(iv,{className:"w-4 h-4"}),m.jsx("span",{children:"CHECK-OUT KẾT THÚC CA"})]}):m.jsxs(m.Fragment,{children:[m.jsx(BE,{className:"w-4 h-4"}),m.jsx("span",{children:"CHECK-IN BẮT ĐẦU CA"})]})})]}),m.jsxs("div",{className:"bg-white rounded-2xl border border-gray-200 p-4 shadow-sm space-y-3",children:[m.jsx("h3",{className:"font-extrabold text-sm text-gray-900",children:"Bảng Theo Dõi Điểm Danh Ca Làm Việc"}),m.jsx("div",{className:"overflow-x-auto",children:m.jsxs("table",{className:"w-full text-left border-collapse",children:[m.jsx("thead",{children:m.jsxs("tr",{className:"bg-gray-50 text-[11px] font-bold text-gray-500 uppercase tracking-wider border-b border-gray-100",children:[m.jsx("th",{className:"p-3",children:"Nhân Viên"}),m.jsx("th",{className:"p-3",children:"Vai Trò"}),m.jsx("th",{className:"p-3",children:"Ca Làm Việc"}),m.jsx("th",{className:"p-3",children:"Giờ Check-in"}),m.jsx("th",{className:"p-3 text-right",children:"Trạng Thái"})]})}),m.jsx("tbody",{className:"divide-y divide-gray-100 text-xs",children:e.map(c=>m.jsxs("tr",{className:"hover:bg-gray-50/80 transition-colors",children:[m.jsx("td",{className:"p-3 font-bold text-gray-900",children:c.employeeName}),m.jsx("td",{className:"p-3",children:m.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold bg-gray-100 text-gray-700 rounded-md",children:c.role})}),m.jsx("td",{className:"p-3 font-medium text-gray-600",children:c.shiftName}),m.jsx("td",{className:"p-3 font-semibold text-emerald-700",children:c.checkInTime}),m.jsx("td",{className:"p-3 text-right",children:m.jsxs("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800",children:[m.jsx(ko,{className:"w-3 h-3 mr-1"}),"Đang Trong Ca"]})})]},c.id))})]})})]})]})},uN=({children:i})=>{const{isAuthenticated:e,isLoading:t}=Fo();return t?m.jsx("div",{className:"flex items-center justify-center min-h-screen bg-gray-50",children:m.jsx("div",{className:"w-8 h-8 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin"})}):e?m.jsx(m.Fragment,{children:i}):m.jsx(wf,{to:"/login",replace:!0})},dN=()=>m.jsx(ZM,{children:m.jsx(JM,{children:m.jsx(LS,{children:m.jsxs(wS,{children:[m.jsx(Ai,{path:"/login",element:m.jsx(XR,{})}),m.jsxs(Ai,{path:"/",element:m.jsx(uN,{children:m.jsx(Tw,{})}),children:[m.jsx(Ai,{index:!0,element:m.jsx(wf,{to:"/pos",replace:!0})}),m.jsx(Ai,{path:"pos",element:m.jsx(rN,{})}),m.jsx(Ai,{path:"kitchen",element:m.jsx(sN,{})}),m.jsx(Ai,{path:"inventory",element:m.jsx(aN,{})}),m.jsx(Ai,{path:"dashboard",element:m.jsx(oN,{})}),m.jsx(Ai,{path:"customers",element:m.jsx(lN,{})}),m.jsx(Ai,{path:"attendance",element:m.jsx(cN,{})})]}),m.jsx(Ai,{path:"*",element:m.jsx(wf,{to:"/pos",replace:!0})})]})})})});Dy.createRoot(document.getElementById("root")).render(m.jsx(hx.StrictMode,{children:m.jsx(dN,{})}));
