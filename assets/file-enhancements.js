(function(){"use strict";var mp=typeof document<"u"?document.currentScript:null;const WP="modulepreload",qP=function(a,e){return new URL(a,e).href},YP={},sA=function(e,t,i){let s=Promise.resolve();function l(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return s.then(c=>{for(const f of c||[])f.status==="rejected"&&l(f.reason);return e().catch(l)})};function oA(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var gp={exports:{}},bt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function lA(){if(kv)return bt;kv=1;var a=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),_=Symbol.iterator;function x(B){return B===null||typeof B!="object"?null:(B=_&&B[_]||B["@@iterator"],typeof B=="function"?B:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function S(B,Z,ve){this.props=B,this.context=Z,this.refs=y,this.updater=ve||b}S.prototype.isReactComponent={},S.prototype.setState=function(B,Z){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,Z,"setState")},S.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function R(){}R.prototype=S.prototype;function w(B,Z,ve){this.props=B,this.context=Z,this.refs=y,this.updater=ve||b}var C=w.prototype=new R;C.constructor=w,M(C,S.prototype),C.isPureReactComponent=!0;var O=Array.isArray;function L(){}var U={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function P(B,Z,ve){var ye=ve.ref;return{$$typeof:a,type:B,key:Z,ref:ye!==void 0?ye:null,props:ve}}function I(B,Z){return P(B.type,Z,B.props)}function H(B){return typeof B=="object"&&B!==null&&B.$$typeof===a}function k(B){var Z={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ve){return Z[ve]})}var te=/\/+/g;function J(B,Z){return typeof B=="object"&&B!==null&&B.key!=null?k(""+B.key):Z.toString(36)}function X(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(L,L):(B.status="pending",B.then(function(Z){B.status==="pending"&&(B.status="fulfilled",B.value=Z)},function(Z){B.status==="pending"&&(B.status="rejected",B.reason=Z)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function z(B,Z,ve,ye,Ce){var ne=typeof B;(ne==="undefined"||ne==="boolean")&&(B=null);var Se=!1;if(B===null)Se=!0;else switch(ne){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(B.$$typeof){case a:case e:Se=!0;break;case g:return Se=B._init,z(Se(B._payload),Z,ve,ye,Ce)}}if(Se)return Ce=Ce(B),Se=ye===""?"."+J(B,0):ye,O(Ce)?(ve="",Se!=null&&(ve=Se.replace(te,"$&/")+"/"),z(Ce,Z,ve,"",function(Xe){return Xe})):Ce!=null&&(H(Ce)&&(Ce=I(Ce,ve+(Ce.key==null||B&&B.key===Ce.key?"":(""+Ce.key).replace(te,"$&/")+"/")+Se)),Z.push(Ce)),1;Se=0;var re=ye===""?".":ye+":";if(O(B))for(var Me=0;Me<B.length;Me++)ye=B[Me],ne=re+J(ye,Me),Se+=z(ye,Z,ve,ne,Ce);else if(Me=x(B),typeof Me=="function")for(B=Me.call(B),Me=0;!(ye=B.next()).done;)ye=ye.value,ne=re+J(ye,Me++),Se+=z(ye,Z,ve,ne,Ce);else if(ne==="object"){if(typeof B.then=="function")return z(X(B),Z,ve,ye,Ce);throw Z=String(B),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function G(B,Z,ve){if(B==null)return B;var ye=[],Ce=0;return z(B,ye,"","",function(ne){return Z.call(ve,ne,Ce++)}),ye}function ee(B){if(B._status===-1){var Z=B._result;Z=Z(),Z.then(function(ve){(B._status===0||B._status===-1)&&(B._status=1,B._result=ve)},function(ve){(B._status===0||B._status===-1)&&(B._status=2,B._result=ve)}),B._status===-1&&(B._status=0,B._result=Z)}if(B._status===1)return B._result.default;throw B._result}var ue=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)},V={map:G,forEach:function(B,Z,ve){G(B,function(){Z.apply(this,arguments)},ve)},count:function(B){var Z=0;return G(B,function(){Z++}),Z},toArray:function(B){return G(B,function(Z){return Z})||[]},only:function(B){if(!H(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return bt.Activity=v,bt.Children=V,bt.Component=S,bt.Fragment=t,bt.Profiler=s,bt.PureComponent=w,bt.StrictMode=i,bt.Suspense=h,bt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,bt.__COMPILER_RUNTIME={__proto__:null,c:function(B){return U.H.useMemoCache(B)}},bt.cache=function(B){return function(){return B.apply(null,arguments)}},bt.cacheSignal=function(){return null},bt.cloneElement=function(B,Z,ve){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var ye=M({},B.props),Ce=B.key;if(Z!=null)for(ne in Z.key!==void 0&&(Ce=""+Z.key),Z)!T.call(Z,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&Z.ref===void 0||(ye[ne]=Z[ne]);var ne=arguments.length-2;if(ne===1)ye.children=ve;else if(1<ne){for(var Se=Array(ne),re=0;re<ne;re++)Se[re]=arguments[re+2];ye.children=Se}return P(B.type,Ce,ye)},bt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:l,_context:B},B},bt.createElement=function(B,Z,ve){var ye,Ce={},ne=null;if(Z!=null)for(ye in Z.key!==void 0&&(ne=""+Z.key),Z)T.call(Z,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ce[ye]=Z[ye]);var Se=arguments.length-2;if(Se===1)Ce.children=ve;else if(1<Se){for(var re=Array(Se),Me=0;Me<Se;Me++)re[Me]=arguments[Me+2];Ce.children=re}if(B&&B.defaultProps)for(ye in Se=B.defaultProps,Se)Ce[ye]===void 0&&(Ce[ye]=Se[ye]);return P(B,ne,Ce)},bt.createRef=function(){return{current:null}},bt.forwardRef=function(B){return{$$typeof:f,render:B}},bt.isValidElement=H,bt.lazy=function(B){return{$$typeof:g,_payload:{_status:-1,_result:B},_init:ee}},bt.memo=function(B,Z){return{$$typeof:d,type:B,compare:Z===void 0?null:Z}},bt.startTransition=function(B){var Z=U.T,ve={};U.T=ve;try{var ye=B(),Ce=U.S;Ce!==null&&Ce(ve,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(L,ue)}catch(ne){ue(ne)}finally{Z!==null&&ve.types!==null&&(Z.types=ve.types),U.T=Z}},bt.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},bt.use=function(B){return U.H.use(B)},bt.useActionState=function(B,Z,ve){return U.H.useActionState(B,Z,ve)},bt.useCallback=function(B,Z){return U.H.useCallback(B,Z)},bt.useContext=function(B){return U.H.useContext(B)},bt.useDebugValue=function(){},bt.useDeferredValue=function(B,Z){return U.H.useDeferredValue(B,Z)},bt.useEffect=function(B,Z){return U.H.useEffect(B,Z)},bt.useEffectEvent=function(B){return U.H.useEffectEvent(B)},bt.useId=function(){return U.H.useId()},bt.useImperativeHandle=function(B,Z,ve){return U.H.useImperativeHandle(B,Z,ve)},bt.useInsertionEffect=function(B,Z){return U.H.useInsertionEffect(B,Z)},bt.useLayoutEffect=function(B,Z){return U.H.useLayoutEffect(B,Z)},bt.useMemo=function(B,Z){return U.H.useMemo(B,Z)},bt.useOptimistic=function(B,Z){return U.H.useOptimistic(B,Z)},bt.useReducer=function(B,Z,ve){return U.H.useReducer(B,Z,ve)},bt.useRef=function(B){return U.H.useRef(B)},bt.useState=function(B){return U.H.useState(B)},bt.useSyncExternalStore=function(B,Z,ve){return U.H.useSyncExternalStore(B,Z,ve)},bt.useTransition=function(){return U.H.useTransition()},bt.version="19.2.7",bt}var Xv;function _p(){return Xv||(Xv=1,gp.exports=lA()),gp.exports}var ke=_p();const st=oA(ke);var vp={exports:{}},wu={},xp={exports:{}},yp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function uA(){return Wv||(Wv=1,(function(a){function e(z,G){var ee=z.length;z.push(G);e:for(;0<ee;){var ue=ee-1>>>1,V=z[ue];if(0<s(V,G))z[ue]=G,z[ee]=V,ee=ue;else break e}}function t(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var G=z[0],ee=z.pop();if(ee!==G){z[0]=ee;e:for(var ue=0,V=z.length,B=V>>>1;ue<B;){var Z=2*(ue+1)-1,ve=z[Z],ye=Z+1,Ce=z[ye];if(0>s(ve,ee))ye<V&&0>s(Ce,ve)?(z[ue]=Ce,z[ye]=ee,ue=ye):(z[ue]=ve,z[Z]=ee,ue=Z);else if(ye<V&&0>s(Ce,ee))z[ue]=Ce,z[ye]=ee,ue=ye;else break e}}return G}function s(z,G){var ee=z.sortIndex-G.sortIndex;return ee!==0?ee:z.id-G.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;a.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();a.unstable_now=function(){return c.now()-f}}var h=[],d=[],g=1,v=null,_=3,x=!1,b=!1,M=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function C(z){for(var G=t(d);G!==null;){if(G.callback===null)i(d);else if(G.startTime<=z)i(d),G.sortIndex=G.expirationTime,e(h,G);else break;G=t(d)}}function O(z){if(M=!1,C(z),!b)if(t(h)!==null)b=!0,L||(L=!0,k());else{var G=t(d);G!==null&&X(O,G.startTime-z)}}var L=!1,U=-1,T=5,P=-1;function I(){return y?!0:!(a.unstable_now()-P<T)}function H(){if(y=!1,L){var z=a.unstable_now();P=z;var G=!0;try{e:{b=!1,M&&(M=!1,R(U),U=-1),x=!0;var ee=_;try{t:{for(C(z),v=t(h);v!==null&&!(v.expirationTime>z&&I());){var ue=v.callback;if(typeof ue=="function"){v.callback=null,_=v.priorityLevel;var V=ue(v.expirationTime<=z);if(z=a.unstable_now(),typeof V=="function"){v.callback=V,C(z),G=!0;break t}v===t(h)&&i(h),C(z)}else i(h);v=t(h)}if(v!==null)G=!0;else{var B=t(d);B!==null&&X(O,B.startTime-z),G=!1}}break e}finally{v=null,_=ee,x=!1}G=void 0}}finally{G?k():L=!1}}}var k;if(typeof w=="function")k=function(){w(H)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,J=te.port2;te.port1.onmessage=H,k=function(){J.postMessage(null)}}else k=function(){S(H,0)};function X(z,G){U=S(function(){z(a.unstable_now())},G)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(z){z.callback=null},a.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<z?Math.floor(1e3/z):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_next=function(z){switch(_){case 1:case 2:case 3:var G=3;break;default:G=_}var ee=_;_=G;try{return z()}finally{_=ee}},a.unstable_requestPaint=function(){y=!0},a.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ee=_;_=z;try{return G()}finally{_=ee}},a.unstable_scheduleCallback=function(z,G,ee){var ue=a.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ue+ee:ue):ee=ue,z){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=ee+V,z={id:g++,callback:G,priorityLevel:z,startTime:ee,expirationTime:V,sortIndex:-1},ee>ue?(z.sortIndex=ee,e(d,z),t(h)===null&&z===t(d)&&(M?(R(U),U=-1):M=!0,X(O,ee-ue))):(z.sortIndex=V,e(h,z),b||x||(b=!0,L||(L=!0,k()))),z},a.unstable_shouldYield=I,a.unstable_wrapCallback=function(z){var G=_;return function(){var ee=_;_=G;try{return z.apply(this,arguments)}finally{_=ee}}}})(yp)),yp}var qv;function cA(){return qv||(qv=1,xp.exports=uA()),xp.exports}var Sp={exports:{}},Si={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yv;function fA(){if(Yv)return Si;Yv=1;var a=_p();function e(h){var d="https://react.dev/errors/"+h;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)d+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+h+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(h,d,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:h,containerInfo:d,implementation:g}}var c=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(h,d){if(h==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return Si.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Si.createPortal=function(h,d){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(e(299));return l(h,d,null,g)},Si.flushSync=function(h){var d=c.T,g=i.p;try{if(c.T=null,i.p=2,h)return h()}finally{c.T=d,i.p=g,i.d.f()}},Si.preconnect=function(h,d){typeof h=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,i.d.C(h,d))},Si.prefetchDNS=function(h){typeof h=="string"&&i.d.D(h)},Si.preinit=function(h,d){if(typeof h=="string"&&d&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin),_=typeof d.integrity=="string"?d.integrity:void 0,x=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;g==="style"?i.d.S(h,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:_,fetchPriority:x}):g==="script"&&i.d.X(h,{crossOrigin:v,integrity:_,fetchPriority:x,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},Si.preinitModule=function(h,d){if(typeof h=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var g=f(d.as,d.crossOrigin);i.d.M(h,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&i.d.M(h)},Si.preload=function(h,d){if(typeof h=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var g=d.as,v=f(g,d.crossOrigin);i.d.L(h,g,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},Si.preloadModule=function(h,d){if(typeof h=="string")if(d){var g=f(d.as,d.crossOrigin);i.d.m(h,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else i.d.m(h)},Si.requestFormReset=function(h){i.d.r(h)},Si.unstable_batchedUpdates=function(h,d){return h(d)},Si.useFormState=function(h,d,g){return c.H.useFormState(h,d,g)},Si.useFormStatus=function(){return c.H.useHostTransitionStatus()},Si.version="19.2.7",Si}var Zv;function hA(){if(Zv)return Sp.exports;Zv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Sp.exports=fA(),Sp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kv;function dA(){if(Kv)return wu;Kv=1;var a=cA(),e=_p(),t=hA();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function c(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function f(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(l(n)!==n)throw Error(i(188))}function d(n){var r=n.alternate;if(!r){if(r=l(n),r===null)throw Error(i(188));return r!==n?null:n}for(var o=n,u=r;;){var p=o.return;if(p===null)break;var m=p.alternate;if(m===null){if(u=p.return,u!==null){o=u;continue}break}if(p.child===m.child){for(m=p.child;m;){if(m===o)return h(p),n;if(m===u)return h(p),r;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=p,u=m;else{for(var E=!1,F=p.child;F;){if(F===o){E=!0,o=p,u=m;break}if(F===u){E=!0,u=p,o=m;break}F=F.sibling}if(!E){for(F=m.child;F;){if(F===o){E=!0,o=m,u=p;break}if(F===u){E=!0,u=m,o=p;break}F=F.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:r}function g(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=g(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,_=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),P=Symbol.for("react.activity"),I=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function k(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var te=Symbol.for("react.client.reference");function J(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===te?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case M:return"Fragment";case S:return"Profiler";case y:return"StrictMode";case O:return"Suspense";case L:return"SuspenseList";case P:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case b:return"Portal";case w:return n.displayName||"Context";case R:return(n._context.displayName||"Context")+".Consumer";case C:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case U:return r=n.displayName||null,r!==null?r:J(n.type)||"Memo";case T:r=n._payload,n=n._init;try{return J(n(r))}catch{}}return null}var X=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ue=[],V=-1;function B(n){return{current:n}}function Z(n){0>V||(n.current=ue[V],ue[V]=null,V--)}function ve(n,r){V++,ue[V]=n.current,n.current=r}var ye=B(null),Ce=B(null),ne=B(null),Se=B(null);function re(n,r){switch(ve(ne,r),ve(Ce,n),ve(ye,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?wT(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=wT(r),n=DT(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Z(ye),ve(ye,n)}function Me(){Z(ye),Z(Ce),Z(ne)}function Xe(n){n.memoizedState!==null&&ve(Se,n);var r=ye.current,o=DT(r,n.type);r!==o&&(ve(Ce,n),ve(ye,o))}function ze(n){Ce.current===n&&(Z(ye),Z(Ce)),Se.current===n&&(Z(Se),vf._currentValue=ee)}var et,He;function Qe(n){if(et===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);et=r&&r[1]||"",He=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+et+n+He}var ot=!1;function at(n,r){if(!n||ot)return"";ot=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var Re=function(){throw Error()};if(Object.defineProperty(Re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Re,[])}catch(ge){var pe=ge}Reflect.construct(n,[],Re)}else{try{Re.call()}catch(ge){pe=ge}n.call(Re.prototype)}}else{try{throw Error()}catch(ge){pe=ge}(Re=n())&&typeof Re.catch=="function"&&Re.catch(function(){})}}catch(ge){if(ge&&pe&&typeof ge.stack=="string")return[ge.stack,pe.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],F=m[1];if(E&&F){var W=E.split(`
`),fe=F.split(`
`);for(p=u=0;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;for(;p<fe.length&&!fe[p].includes("DetermineComponentFrameRoot");)p++;if(u===W.length||p===fe.length)for(u=W.length-1,p=fe.length-1;1<=u&&0<=p&&W[u]!==fe[p];)p--;for(;1<=u&&0<=p;u--,p--)if(W[u]!==fe[p]){if(u!==1||p!==1)do if(u--,p--,0>p||W[u]!==fe[p]){var Te=`
`+W[u].replace(" at new "," at ");return n.displayName&&Te.includes("<anonymous>")&&(Te=Te.replace("<anonymous>",n.displayName)),Te}while(1<=u&&0<=p);break}}}finally{ot=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?Qe(o):""}function se(n,r){switch(n.tag){case 26:case 27:case 5:return Qe(n.type);case 16:return Qe("Lazy");case 13:return n.child!==r&&r!==null?Qe("Suspense Fallback"):Qe("Suspense");case 19:return Qe("SuspenseList");case 0:case 15:return at(n.type,!1);case 11:return at(n.type.render,!1);case 1:return at(n.type,!0);case 31:return Qe("Activity");default:return""}}function yt(n){try{var r="",o=null;do r+=se(n,o),o=n,n=n.return;while(n);return r}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Bt=Object.prototype.hasOwnProperty,j=a.unstable_scheduleCallback,vt=a.unstable_cancelCallback,ut=a.unstable_shouldYield,Ct=a.unstable_requestPaint,Ee=a.unstable_now,Y=a.unstable_getCurrentPriorityLevel,D=a.unstable_ImmediatePriority,A=a.unstable_UserBlockingPriority,K=a.unstable_NormalPriority,de=a.unstable_LowPriority,be=a.unstable_IdlePriority,Oe=a.log,we=a.unstable_setDisableYieldValue,me=null,_e=null;function Ge(n){if(typeof Oe=="function"&&we(n),_e&&typeof _e.setStrictMode=="function")try{_e.setStrictMode(me,n)}catch{}}var Ve=Math.clz32?Math.clz32:We,Be=Math.log,Fe=Math.LN2;function We(n){return n>>>=0,n===0?32:31-(Be(n)/Fe|0)|0}var mt=256,St=262144,q=4194304;function Ue(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function xe(n,r,o){var u=n.pendingLanes;if(u===0)return 0;var p=0,m=n.suspendedLanes,E=n.pingedLanes;n=n.warmLanes;var F=u&134217727;return F!==0?(u=F&~m,u!==0?p=Ue(u):(E&=F,E!==0?p=Ue(E):o||(o=F&~n,o!==0&&(p=Ue(o))))):(F=u&~m,F!==0?p=Ue(F):E!==0?p=Ue(E):o||(o=u&~n,o!==0&&(p=Ue(o)))),p===0?0:r!==0&&r!==p&&(r&m)===0&&(m=p&-p,o=r&-r,m>=o||m===32&&(o&4194048)!==0)?r:p}function qe(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Ie(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var n=q;return q<<=1,(q&62914560)===0&&(q=4194304),n}function Le(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Pe(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ht(n,r,o,u,p,m){var E=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var F=n.entanglements,W=n.expirationTimes,fe=n.hiddenUpdates;for(o=E&~o;0<o;){var Te=31-Ve(o),Re=1<<Te;F[Te]=0,W[Te]=-1;var pe=fe[Te];if(pe!==null)for(fe[Te]=null,Te=0;Te<pe.length;Te++){var ge=pe[Te];ge!==null&&(ge.lane&=-536870913)}o&=~Re}u!==0&&Ne(n,u,0),m!==0&&p===0&&n.tag!==0&&(n.suspendedLanes|=m&~(E&~r))}function Ne(n,r,o){n.pendingLanes|=r,n.suspendedLanes&=~r;var u=31-Ve(r);n.entangledLanes|=r,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function ft(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var u=31-Ve(o),p=1<<u;p&r|n[u]&r&&(n[u]|=r),o&=~p}}function tt(n,r){var o=r&-r;return o=(o&42)!==0?1:gt(o),(o&(n.suspendedLanes|r))!==0?0:o}function gt(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Cn(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function Lt(){var n=G.p;return n!==0?n:(n=window.event,n===void 0?32:$T(n.type))}function xn(n,r){var o=G.p;try{return G.p=n,r()}finally{G.p=o}}var Qt=Math.random().toString(36).slice(2),Et="__reactFiber$"+Qt,wt="__reactProps$"+Qt,Ht="__reactContainer$"+Qt,jn="__reactEvents$"+Qt,dn="__reactListeners$"+Qt,Qn="__reactHandles$"+Qt,wi="__reactResources$"+Qt,Mn="__reactMarker$"+Qt;function Pn(n){delete n[Et],delete n[wt],delete n[jn],delete n[dn],delete n[Qn]}function bn(n){var r=n[Et];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ht]||o[Et]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=IT(n);n!==null;){if(o=n[Et])return o;n=IT(n)}return r}n=o,o=n.parentNode}return null}function Di(n){if(n=n[Et]||n[Ht]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function zr(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function En(n){var r=n[wi];return r||(r=n[wi]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function Pt(n){n[Mn]=!0}var Hi=new Set,N={};function $(n,r){ce(n,r),ce(n+"Capture",r)}function ce(n,r){for(N[n]=r,n=0;n<r.length;n++)Hi.add(r[n])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oe={},Ye={};function Ke(n){return Bt.call(Ye,n)?!0:Bt.call(oe,n)?!1:ae.test(n)?Ye[n]=!0:(oe[n]=!0,!1)}function Ze(n,r,o){if(Ke(r))if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+o)}}function it(n,r,o){if(o===null)n.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+o)}}function $e(n,r,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(r,o,""+u)}}function dt(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Dt(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ct(n,r,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var p=u.get,m=u.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){o=""+E,m.call(this,E)}}),Object.defineProperty(n,r,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(E){o=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Jt(n){if(!n._valueTracker){var r=Dt(n)?"checked":"value";n._valueTracker=ct(n,r,""+n[r])}}function wn(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return n&&(u=Dt(n)?n.checked?"true":"false":n.value),n=u,n!==o?(r.setValue(n),!0):!1}function yn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var ln=/[\n"\\]/g;function un(n){return n.replace(ln,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Je(n,r,o,u,p,m,E,F){n.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?n.type=E:n.removeAttribute("type"),r!=null?E==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+dt(r)):n.value!==""+dt(r)&&(n.value=""+dt(r)):E!=="submit"&&E!=="reset"||n.removeAttribute("value"),r!=null?Gt(n,E,dt(r)):o!=null?Gt(n,E,dt(o)):u!=null&&n.removeAttribute("value"),p==null&&m!=null&&(n.defaultChecked=!!m),p!=null&&(n.checked=p&&typeof p!="function"&&typeof p!="symbol"),F!=null&&typeof F!="function"&&typeof F!="symbol"&&typeof F!="boolean"?n.name=""+dt(F):n.removeAttribute("name")}function Ui(n,r,o,u,p,m,E,F){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){Jt(n);return}o=o!=null?""+dt(o):"",r=r!=null?""+dt(r):o,F||r===n.value||(n.value=r),n.defaultValue=r}u=u??p,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=F?n.checked:!!u,n.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(n.name=E),Jt(n)}function Gt(n,r,o){r==="number"&&yn(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function oi(n,r,o,u){if(n=n.options,r){r={};for(var p=0;p<o.length;p++)r["$"+o[p]]=!0;for(o=0;o<n.length;o++)p=r.hasOwnProperty("$"+n[o].value),n[o].selected!==p&&(n[o].selected=p),p&&u&&(n[o].defaultSelected=!0)}else{for(o=""+dt(o),r=null,p=0;p<n.length;p++){if(n[p].value===o){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function vr(n,r,o){if(r!=null&&(r=""+dt(r),r!==n.value&&(n.value=r),o==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=o!=null?""+dt(o):""}function ra(n,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(i(92));if(X(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=dt(r),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),Jt(n)}function xr(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var cn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Dn(n,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":u?n.setProperty(r,o):typeof o!="number"||o===0||cn.has(r)?r==="float"?n.cssFloat=o:n[r]=(""+o).trim():n[r]=o+"px"}function aa(n,r,o){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var p in r)u=r[p],r.hasOwnProperty(p)&&o[p]!==u&&Dn(n,p,u)}else for(var m in r)r.hasOwnProperty(m)&&Dn(n,m,r[m])}function an(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ea=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ps=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ho(n){return Ps.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Ya(){}var Hg=null;function Gg(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Jl=null,$l=null;function C1(n){var r=Di(n);if(r&&(n=r.stateNode)){var o=n[wt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Je(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+un(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==n&&u.form===n.form){var p=u[wt]||null;if(!p)throw Error(i(90));Je(u,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===n.form&&wn(u)}break e;case"textarea":vr(n,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&oi(n,!!o.multiple,r,!1)}}}var Vg=!1;function w1(n,r,o){if(Vg)return n(r,o);Vg=!0;try{var u=n(r);return u}finally{if(Vg=!1,(Jl!==null||$l!==null)&&(Yd(),Jl&&(r=Jl,n=$l,$l=Jl=null,C1(r),n)))for(r=0;r<n.length;r++)C1(n[r])}}function Oc(n,r){var o=n.stateNode;if(o===null)return null;var u=o[wt]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,r,typeof o));return o}var Za=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),kg=!1;if(Za)try{var Pc={};Object.defineProperty(Pc,"passive",{get:function(){kg=!0}}),window.addEventListener("test",Pc,Pc),window.removeEventListener("test",Pc,Pc)}catch{kg=!1}var Fs=null,Xg=null,od=null;function D1(){if(od)return od;var n,r=Xg,o=r.length,u,p="value"in Fs?Fs.value:Fs.textContent,m=p.length;for(n=0;n<o&&r[n]===p[n];n++);var E=o-n;for(u=1;u<=E&&r[o-u]===p[m-u];u++);return od=p.slice(n,1<u?1-u:void 0)}function ld(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function ud(){return!0}function U1(){return!1}function Ji(n){function r(o,u,p,m,E){this._reactName=o,this._targetInst=p,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(o=n[F],this[F]=o?o(m):m[F]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ud:U1,this.isPropagationStopped=U1,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ud)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ud)},persist:function(){},isPersistent:ud}),r}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cd=Ji(Go),Fc=v({},Go,{view:0,detail:0}),kN=Ji(Fc),Wg,qg,Ic,fd=v({},Fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ic&&(Ic&&n.type==="mousemove"?(Wg=n.screenX-Ic.screenX,qg=n.screenY-Ic.screenY):qg=Wg=0,Ic=n),Wg)},movementY:function(n){return"movementY"in n?n.movementY:qg}}),L1=Ji(fd),XN=v({},fd,{dataTransfer:0}),WN=Ji(XN),qN=v({},Fc,{relatedTarget:0}),Yg=Ji(qN),YN=v({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),ZN=Ji(YN),KN=v({},Go,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jN=Ji(KN),QN=v({},Go,{data:0}),N1=Ji(QN),JN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$N={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eO={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tO(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=eO[n])?!!r[n]:!1}function Zg(){return tO}var nO=v({},Fc,{key:function(n){if(n.key){var r=JN[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ld(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$N[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zg,charCode:function(n){return n.type==="keypress"?ld(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ld(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),iO=Ji(nO),rO=v({},fd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),O1=Ji(rO),aO=v({},Fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zg}),sO=Ji(aO),oO=v({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),lO=Ji(oO),uO=v({},fd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),cO=Ji(uO),fO=v({},Go,{newState:0,oldState:0}),hO=Ji(fO),dO=[9,13,27,32],Kg=Za&&"CompositionEvent"in window,zc=null;Za&&"documentMode"in document&&(zc=document.documentMode);var pO=Za&&"TextEvent"in window&&!zc,P1=Za&&(!Kg||zc&&8<zc&&11>=zc),F1=" ",I1=!1;function z1(n,r){switch(n){case"keyup":return dO.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function B1(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var eu=!1;function mO(n,r){switch(n){case"compositionend":return B1(r);case"keypress":return r.which!==32?null:(I1=!0,F1);case"textInput":return n=r.data,n===F1&&I1?null:n;default:return null}}function gO(n,r){if(eu)return n==="compositionend"||!Kg&&z1(n,r)?(n=D1(),od=Xg=Fs=null,eu=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return P1&&r.locale!=="ko"?null:r.data;default:return null}}var _O={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function H1(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!_O[n.type]:r==="textarea"}function G1(n,r,o,u){Jl?$l?$l.push(u):$l=[u]:Jl=u,r=ep(r,"onChange"),0<r.length&&(o=new cd("onChange","change",null,o,u),n.push({event:o,listeners:r}))}var Bc=null,Hc=null;function vO(n){bT(n,0)}function hd(n){var r=zr(n);if(wn(r))return n}function V1(n,r){if(n==="change")return r}var k1=!1;if(Za){var jg;if(Za){var Qg="oninput"in document;if(!Qg){var X1=document.createElement("div");X1.setAttribute("oninput","return;"),Qg=typeof X1.oninput=="function"}jg=Qg}else jg=!1;k1=jg&&(!document.documentMode||9<document.documentMode)}function W1(){Bc&&(Bc.detachEvent("onpropertychange",q1),Hc=Bc=null)}function q1(n){if(n.propertyName==="value"&&hd(Hc)){var r=[];G1(r,Hc,n,Gg(n)),w1(vO,r)}}function xO(n,r,o){n==="focusin"?(W1(),Bc=r,Hc=o,Bc.attachEvent("onpropertychange",q1)):n==="focusout"&&W1()}function yO(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hd(Hc)}function SO(n,r){if(n==="click")return hd(r)}function MO(n,r){if(n==="input"||n==="change")return hd(r)}function bO(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var yr=typeof Object.is=="function"?Object.is:bO;function Gc(n,r){if(yr(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var p=o[u];if(!Bt.call(r,p)||!yr(n[p],r[p]))return!1}return!0}function Y1(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Z1(n,r){var o=Y1(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=r&&u>=r)return{node:o,offset:r-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Y1(o)}}function K1(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?K1(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function j1(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=yn(n.document);r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=yn(n.document)}return r}function Jg(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var EO=Za&&"documentMode"in document&&11>=document.documentMode,tu=null,$g=null,Vc=null,e_=!1;function Q1(n,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;e_||tu==null||tu!==yn(u)||(u=tu,"selectionStart"in u&&Jg(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Vc&&Gc(Vc,u)||(Vc=u,u=ep($g,"onSelect"),0<u.length&&(r=new cd("onSelect","select",null,r,o),n.push({event:r,listeners:u}),r.target=tu)))}function Vo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var nu={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionrun:Vo("Transition","TransitionRun"),transitionstart:Vo("Transition","TransitionStart"),transitioncancel:Vo("Transition","TransitionCancel"),transitionend:Vo("Transition","TransitionEnd")},t_={},J1={};Za&&(J1=document.createElement("div").style,"AnimationEvent"in window||(delete nu.animationend.animation,delete nu.animationiteration.animation,delete nu.animationstart.animation),"TransitionEvent"in window||delete nu.transitionend.transition);function ko(n){if(t_[n])return t_[n];if(!nu[n])return n;var r=nu[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in J1)return t_[n]=r[o];return n}var $1=ko("animationend"),eb=ko("animationiteration"),tb=ko("animationstart"),TO=ko("transitionrun"),AO=ko("transitionstart"),RO=ko("transitioncancel"),nb=ko("transitionend"),ib=new Map,n_="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");n_.push("scrollEnd");function sa(n,r){ib.set(n,r),$(r,[n])}var dd=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},Br=[],iu=0,i_=0;function pd(){for(var n=iu,r=i_=iu=0;r<n;){var o=Br[r];Br[r++]=null;var u=Br[r];Br[r++]=null;var p=Br[r];Br[r++]=null;var m=Br[r];if(Br[r++]=null,u!==null&&p!==null){var E=u.pending;E===null?p.next=p:(p.next=E.next,E.next=p),u.pending=p}m!==0&&rb(o,p,m)}}function md(n,r,o,u){Br[iu++]=n,Br[iu++]=r,Br[iu++]=o,Br[iu++]=u,i_|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function r_(n,r,o,u){return md(n,r,o,u),gd(n)}function Xo(n,r){return md(n,null,null,r),gd(n)}function rb(n,r,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var p=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(p=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,p&&r!==null&&(p=31-Ve(o),n=m.hiddenUpdates,u=n[p],u===null?n[p]=[r]:u.push(r),r.lane=o|536870912),m):null}function gd(n){if(50<ff)throw ff=0,dv=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var ru={};function CO(n,r,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Sr(n,r,o,u){return new CO(n,r,o,u)}function a_(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ka(n,r){var o=n.alternate;return o===null?(o=Sr(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function ab(n,r){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,r=o.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function _d(n,r,o,u,p,m){var E=0;if(u=n,typeof n=="function")a_(n)&&(E=1);else if(typeof n=="string")E=NP(n,o,ye.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case P:return n=Sr(31,o,r,p),n.elementType=P,n.lanes=m,n;case M:return Wo(o.children,p,m,r);case y:E=8,p|=24;break;case S:return n=Sr(12,o,r,p|2),n.elementType=S,n.lanes=m,n;case O:return n=Sr(13,o,r,p),n.elementType=O,n.lanes=m,n;case L:return n=Sr(19,o,r,p),n.elementType=L,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case w:E=10;break e;case R:E=9;break e;case C:E=11;break e;case U:E=14;break e;case T:E=16,u=null;break e}E=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return r=Sr(E,o,r,p),r.elementType=n,r.type=u,r.lanes=m,r}function Wo(n,r,o,u){return n=Sr(7,n,u,r),n.lanes=o,n}function s_(n,r,o){return n=Sr(6,n,null,r),n.lanes=o,n}function sb(n){var r=Sr(18,null,null,0);return r.stateNode=n,r}function o_(n,r,o){return r=Sr(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var ob=new WeakMap;function Hr(n,r){if(typeof n=="object"&&n!==null){var o=ob.get(n);return o!==void 0?o:(r={value:n,source:r,stack:yt(r)},ob.set(n,r),r)}return{value:n,source:r,stack:yt(r)}}var au=[],su=0,vd=null,kc=0,Gr=[],Vr=0,Is=null,Ta=1,Aa="";function ja(n,r){au[su++]=kc,au[su++]=vd,vd=n,kc=r}function lb(n,r,o){Gr[Vr++]=Ta,Gr[Vr++]=Aa,Gr[Vr++]=Is,Is=n;var u=Ta;n=Aa;var p=32-Ve(u)-1;u&=~(1<<p),o+=1;var m=32-Ve(r)+p;if(30<m){var E=p-p%5;m=(u&(1<<E)-1).toString(32),u>>=E,p-=E,Ta=1<<32-Ve(r)+p|o<<p|u,Aa=m+n}else Ta=1<<m|o<<p|u,Aa=n}function l_(n){n.return!==null&&(ja(n,1),lb(n,1,0))}function u_(n){for(;n===vd;)vd=au[--su],au[su]=null,kc=au[--su],au[su]=null;for(;n===Is;)Is=Gr[--Vr],Gr[Vr]=null,Aa=Gr[--Vr],Gr[Vr]=null,Ta=Gr[--Vr],Gr[Vr]=null}function ub(n,r){Gr[Vr++]=Ta,Gr[Vr++]=Aa,Gr[Vr++]=Is,Ta=r.id,Aa=r.overflow,Is=n}var _i=null,Tn=null,Kt=!1,zs=null,kr=!1,c_=Error(i(519));function Bs(n){var r=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xc(Hr(r,n)),c_}function cb(n){var r=n.stateNode,o=n.type,u=n.memoizedProps;switch(r[Et]=n,r[wt]=u,o){case"dialog":kt("cancel",r),kt("close",r);break;case"iframe":case"object":case"embed":kt("load",r);break;case"video":case"audio":for(o=0;o<df.length;o++)kt(df[o],r);break;case"source":kt("error",r);break;case"img":case"image":case"link":kt("error",r),kt("load",r);break;case"details":kt("toggle",r);break;case"input":kt("invalid",r),Ui(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":kt("invalid",r);break;case"textarea":kt("invalid",r),ra(r,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||RT(r.textContent,o)?(u.popover!=null&&(kt("beforetoggle",r),kt("toggle",r)),u.onScroll!=null&&kt("scroll",r),u.onScrollEnd!=null&&kt("scrollend",r),u.onClick!=null&&(r.onclick=Ya),r=!0):r=!1,r||Bs(n,!0)}function fb(n){for(_i=n.return;_i;)switch(_i.tag){case 5:case 31:case 13:kr=!1;return;case 27:case 3:kr=!0;return;default:_i=_i.return}}function ou(n){if(n!==_i)return!1;if(!Kt)return fb(n),Kt=!0,!1;var r=n.tag,o;if((o=r!==3&&r!==27)&&((o=r===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Cv(n.type,n.memoizedProps)),o=!o),o&&Tn&&Bs(n),fb(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Tn=FT(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Tn=FT(n)}else r===27?(r=Tn,$s(n.type)?(n=Nv,Nv=null,Tn=n):Tn=r):Tn=_i?Wr(n.stateNode.nextSibling):null;return!0}function qo(){Tn=_i=null,Kt=!1}function f_(){var n=zs;return n!==null&&(nr===null?nr=n:nr.push.apply(nr,n),zs=null),n}function Xc(n){zs===null?zs=[n]:zs.push(n)}var h_=B(null),Yo=null,Qa=null;function Hs(n,r,o){ve(h_,r._currentValue),r._currentValue=o}function Ja(n){n._currentValue=h_.current,Z(h_)}function d_(n,r,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),n===o)break;n=n.return}}function p_(n,r,o,u){var p=n.child;for(p!==null&&(p.return=n);p!==null;){var m=p.dependencies;if(m!==null){var E=p.child;m=m.firstContext;e:for(;m!==null;){var F=m;m=p;for(var W=0;W<r.length;W++)if(F.context===r[W]){m.lanes|=o,F=m.alternate,F!==null&&(F.lanes|=o),d_(m.return,o,n),u||(E=null);break e}m=F.next}}else if(p.tag===18){if(E=p.return,E===null)throw Error(i(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),d_(E,o,n),E=null}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===n){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}}function lu(n,r,o,u){n=null;for(var p=r,m=!1;p!==null;){if(!m){if((p.flags&524288)!==0)m=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var E=p.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var F=p.type;yr(p.pendingProps.value,E.value)||(n!==null?n.push(F):n=[F])}}else if(p===Se.current){if(E=p.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(n!==null?n.push(vf):n=[vf])}p=p.return}n!==null&&p_(r,n,o,u),r.flags|=262144}function xd(n){for(n=n.firstContext;n!==null;){if(!yr(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Zo(n){Yo=n,Qa=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vi(n){return hb(Yo,n)}function yd(n,r){return Yo===null&&Zo(n),hb(n,r)}function hb(n,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},Qa===null){if(n===null)throw Error(i(308));Qa=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Qa=Qa.next=r;return o}var wO=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){r.aborted=!0,n.forEach(function(o){return o()})}},DO=a.unstable_scheduleCallback,UO=a.unstable_NormalPriority,Jn={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function m_(){return{controller:new wO,data:new Map,refCount:0}}function Wc(n){n.refCount--,n.refCount===0&&DO(UO,function(){n.controller.abort()})}var qc=null,g_=0,uu=0,cu=null;function LO(n,r){if(qc===null){var o=qc=[];g_=0,uu=xv(),cu={status:"pending",value:void 0,then:function(u){o.push(u)}}}return g_++,r.then(db,db),r}function db(){if(--g_===0&&qc!==null){cu!==null&&(cu.status="fulfilled");var n=qc;qc=null,uu=0,cu=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function NO(n,r){var o=[],u={status:"pending",value:null,reason:null,then:function(p){o.push(p)}};return n.then(function(){u.status="fulfilled",u.value=r;for(var p=0;p<o.length;p++)(0,o[p])(r)},function(p){for(u.status="rejected",u.reason=p,p=0;p<o.length;p++)(0,o[p])(void 0)}),u}var pb=z.S;z.S=function(n,r){QE=Ee(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&LO(n,r),pb!==null&&pb(n,r)};var Ko=B(null);function __(){var n=Ko.current;return n!==null?n:Sn.pooledCache}function Sd(n,r){r===null?ve(Ko,Ko.current):ve(Ko,r.pool)}function mb(){var n=__();return n===null?null:{parent:Jn._currentValue,pool:n}}var fu=Error(i(460)),v_=Error(i(474)),Md=Error(i(542)),bd={then:function(){}};function gb(n){return n=n.status,n==="fulfilled"||n==="rejected"}function _b(n,r,o){switch(o=n[o],o===void 0?n.push(r):o!==r&&(r.then(Ya,Ya),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,xb(n),n;default:if(typeof r.status=="string")r.then(Ya,Ya);else{if(n=Sn,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(u){if(r.status==="pending"){var p=r;p.status="fulfilled",p.value=u}},function(u){if(r.status==="pending"){var p=r;p.status="rejected",p.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,xb(n),n}throw Qo=r,fu}}function jo(n){try{var r=n._init;return r(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Qo=o,fu):o}}var Qo=null;function vb(){if(Qo===null)throw Error(i(459));var n=Qo;return Qo=null,n}function xb(n){if(n===fu||n===Md)throw Error(i(483))}var hu=null,Yc=0;function Ed(n){var r=Yc;return Yc+=1,hu===null&&(hu=[]),_b(hu,n,r)}function Zc(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Td(n,r){throw r.$$typeof===_?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function yb(n){function r(ie,Q){if(n){var le=ie.deletions;le===null?(ie.deletions=[Q],ie.flags|=16):le.push(Q)}}function o(ie,Q){if(!n)return null;for(;Q!==null;)r(ie,Q),Q=Q.sibling;return null}function u(ie){for(var Q=new Map;ie!==null;)ie.key!==null?Q.set(ie.key,ie):Q.set(ie.index,ie),ie=ie.sibling;return Q}function p(ie,Q){return ie=Ka(ie,Q),ie.index=0,ie.sibling=null,ie}function m(ie,Q,le){return ie.index=le,n?(le=ie.alternate,le!==null?(le=le.index,le<Q?(ie.flags|=67108866,Q):le):(ie.flags|=67108866,Q)):(ie.flags|=1048576,Q)}function E(ie){return n&&ie.alternate===null&&(ie.flags|=67108866),ie}function F(ie,Q,le,Ae){return Q===null||Q.tag!==6?(Q=s_(le,ie.mode,Ae),Q.return=ie,Q):(Q=p(Q,le),Q.return=ie,Q)}function W(ie,Q,le,Ae){var pt=le.type;return pt===M?Te(ie,Q,le.props.children,Ae,le.key):Q!==null&&(Q.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===T&&jo(pt)===Q.type)?(Q=p(Q,le.props),Zc(Q,le),Q.return=ie,Q):(Q=_d(le.type,le.key,le.props,null,ie.mode,Ae),Zc(Q,le),Q.return=ie,Q)}function fe(ie,Q,le,Ae){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==le.containerInfo||Q.stateNode.implementation!==le.implementation?(Q=o_(le,ie.mode,Ae),Q.return=ie,Q):(Q=p(Q,le.children||[]),Q.return=ie,Q)}function Te(ie,Q,le,Ae,pt){return Q===null||Q.tag!==7?(Q=Wo(le,ie.mode,Ae,pt),Q.return=ie,Q):(Q=p(Q,le),Q.return=ie,Q)}function Re(ie,Q,le){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=s_(""+Q,ie.mode,le),Q.return=ie,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case x:return le=_d(Q.type,Q.key,Q.props,null,ie.mode,le),Zc(le,Q),le.return=ie,le;case b:return Q=o_(Q,ie.mode,le),Q.return=ie,Q;case T:return Q=jo(Q),Re(ie,Q,le)}if(X(Q)||k(Q))return Q=Wo(Q,ie.mode,le,null),Q.return=ie,Q;if(typeof Q.then=="function")return Re(ie,Ed(Q),le);if(Q.$$typeof===w)return Re(ie,yd(ie,Q),le);Td(ie,Q)}return null}function pe(ie,Q,le,Ae){var pt=Q!==null?Q.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return pt!==null?null:F(ie,Q,""+le,Ae);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case x:return le.key===pt?W(ie,Q,le,Ae):null;case b:return le.key===pt?fe(ie,Q,le,Ae):null;case T:return le=jo(le),pe(ie,Q,le,Ae)}if(X(le)||k(le))return pt!==null?null:Te(ie,Q,le,Ae,null);if(typeof le.then=="function")return pe(ie,Q,Ed(le),Ae);if(le.$$typeof===w)return pe(ie,Q,yd(ie,le),Ae);Td(ie,le)}return null}function ge(ie,Q,le,Ae,pt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number"||typeof Ae=="bigint")return ie=ie.get(le)||null,F(Q,ie,""+Ae,pt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case x:return ie=ie.get(Ae.key===null?le:Ae.key)||null,W(Q,ie,Ae,pt);case b:return ie=ie.get(Ae.key===null?le:Ae.key)||null,fe(Q,ie,Ae,pt);case T:return Ae=jo(Ae),ge(ie,Q,le,Ae,pt)}if(X(Ae)||k(Ae))return ie=ie.get(le)||null,Te(Q,ie,Ae,pt,null);if(typeof Ae.then=="function")return ge(ie,Q,le,Ed(Ae),pt);if(Ae.$$typeof===w)return ge(ie,Q,le,yd(Q,Ae),pt);Td(Q,Ae)}return null}function rt(ie,Q,le,Ae){for(var pt=null,$t=null,lt=Q,Nt=Q=0,Wt=null;lt!==null&&Nt<le.length;Nt++){lt.index>Nt?(Wt=lt,lt=null):Wt=lt.sibling;var en=pe(ie,lt,le[Nt],Ae);if(en===null){lt===null&&(lt=Wt);break}n&&lt&&en.alternate===null&&r(ie,lt),Q=m(en,Q,Nt),$t===null?pt=en:$t.sibling=en,$t=en,lt=Wt}if(Nt===le.length)return o(ie,lt),Kt&&ja(ie,Nt),pt;if(lt===null){for(;Nt<le.length;Nt++)lt=Re(ie,le[Nt],Ae),lt!==null&&(Q=m(lt,Q,Nt),$t===null?pt=lt:$t.sibling=lt,$t=lt);return Kt&&ja(ie,Nt),pt}for(lt=u(lt);Nt<le.length;Nt++)Wt=ge(lt,ie,Nt,le[Nt],Ae),Wt!==null&&(n&&Wt.alternate!==null&&lt.delete(Wt.key===null?Nt:Wt.key),Q=m(Wt,Q,Nt),$t===null?pt=Wt:$t.sibling=Wt,$t=Wt);return n&&lt.forEach(function(ro){return r(ie,ro)}),Kt&&ja(ie,Nt),pt}function _t(ie,Q,le,Ae){if(le==null)throw Error(i(151));for(var pt=null,$t=null,lt=Q,Nt=Q=0,Wt=null,en=le.next();lt!==null&&!en.done;Nt++,en=le.next()){lt.index>Nt?(Wt=lt,lt=null):Wt=lt.sibling;var ro=pe(ie,lt,en.value,Ae);if(ro===null){lt===null&&(lt=Wt);break}n&&lt&&ro.alternate===null&&r(ie,lt),Q=m(ro,Q,Nt),$t===null?pt=ro:$t.sibling=ro,$t=ro,lt=Wt}if(en.done)return o(ie,lt),Kt&&ja(ie,Nt),pt;if(lt===null){for(;!en.done;Nt++,en=le.next())en=Re(ie,en.value,Ae),en!==null&&(Q=m(en,Q,Nt),$t===null?pt=en:$t.sibling=en,$t=en);return Kt&&ja(ie,Nt),pt}for(lt=u(lt);!en.done;Nt++,en=le.next())en=ge(lt,ie,Nt,en.value,Ae),en!==null&&(n&&en.alternate!==null&&lt.delete(en.key===null?Nt:en.key),Q=m(en,Q,Nt),$t===null?pt=en:$t.sibling=en,$t=en);return n&&lt.forEach(function(XP){return r(ie,XP)}),Kt&&ja(ie,Nt),pt}function gn(ie,Q,le,Ae){if(typeof le=="object"&&le!==null&&le.type===M&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case x:e:{for(var pt=le.key;Q!==null;){if(Q.key===pt){if(pt=le.type,pt===M){if(Q.tag===7){o(ie,Q.sibling),Ae=p(Q,le.props.children),Ae.return=ie,ie=Ae;break e}}else if(Q.elementType===pt||typeof pt=="object"&&pt!==null&&pt.$$typeof===T&&jo(pt)===Q.type){o(ie,Q.sibling),Ae=p(Q,le.props),Zc(Ae,le),Ae.return=ie,ie=Ae;break e}o(ie,Q);break}else r(ie,Q);Q=Q.sibling}le.type===M?(Ae=Wo(le.props.children,ie.mode,Ae,le.key),Ae.return=ie,ie=Ae):(Ae=_d(le.type,le.key,le.props,null,ie.mode,Ae),Zc(Ae,le),Ae.return=ie,ie=Ae)}return E(ie);case b:e:{for(pt=le.key;Q!==null;){if(Q.key===pt)if(Q.tag===4&&Q.stateNode.containerInfo===le.containerInfo&&Q.stateNode.implementation===le.implementation){o(ie,Q.sibling),Ae=p(Q,le.children||[]),Ae.return=ie,ie=Ae;break e}else{o(ie,Q);break}else r(ie,Q);Q=Q.sibling}Ae=o_(le,ie.mode,Ae),Ae.return=ie,ie=Ae}return E(ie);case T:return le=jo(le),gn(ie,Q,le,Ae)}if(X(le))return rt(ie,Q,le,Ae);if(k(le)){if(pt=k(le),typeof pt!="function")throw Error(i(150));return le=pt.call(le),_t(ie,Q,le,Ae)}if(typeof le.then=="function")return gn(ie,Q,Ed(le),Ae);if(le.$$typeof===w)return gn(ie,Q,yd(ie,le),Ae);Td(ie,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,Q!==null&&Q.tag===6?(o(ie,Q.sibling),Ae=p(Q,le),Ae.return=ie,ie=Ae):(o(ie,Q),Ae=s_(le,ie.mode,Ae),Ae.return=ie,ie=Ae),E(ie)):o(ie,Q)}return function(ie,Q,le,Ae){try{Yc=0;var pt=gn(ie,Q,le,Ae);return hu=null,pt}catch(lt){if(lt===fu||lt===Md)throw lt;var $t=Sr(29,lt,null,ie.mode);return $t.lanes=Ae,$t.return=ie,$t}finally{}}}var Jo=yb(!0),Sb=yb(!1),Gs=!1;function x_(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function y_(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Vs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ks(n,r,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(nn&2)!==0){var p=u.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),u.pending=r,r=gd(n),rb(n,null,o),r}return md(n,u,r,o),gd(n)}function Kc(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194048)!==0)){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ft(n,o)}}function S_(n,r){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var p=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?p=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?p=m=r:m=m.next=r}else p=m=r;o={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}var M_=!1;function jc(){if(M_){var n=cu;if(n!==null)throw n}}function Qc(n,r,o,u){M_=!1;var p=n.updateQueue;Gs=!1;var m=p.firstBaseUpdate,E=p.lastBaseUpdate,F=p.shared.pending;if(F!==null){p.shared.pending=null;var W=F,fe=W.next;W.next=null,E===null?m=fe:E.next=fe,E=W;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,F=Te.lastBaseUpdate,F!==E&&(F===null?Te.firstBaseUpdate=fe:F.next=fe,Te.lastBaseUpdate=W))}if(m!==null){var Re=p.baseState;E=0,Te=fe=W=null,F=m;do{var pe=F.lane&-536870913,ge=pe!==F.lane;if(ge?(Xt&pe)===pe:(u&pe)===pe){pe!==0&&pe===uu&&(M_=!0),Te!==null&&(Te=Te.next={lane:0,tag:F.tag,payload:F.payload,callback:null,next:null});e:{var rt=n,_t=F;pe=r;var gn=o;switch(_t.tag){case 1:if(rt=_t.payload,typeof rt=="function"){Re=rt.call(gn,Re,pe);break e}Re=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=_t.payload,pe=typeof rt=="function"?rt.call(gn,Re,pe):rt,pe==null)break e;Re=v({},Re,pe);break e;case 2:Gs=!0}}pe=F.callback,pe!==null&&(n.flags|=64,ge&&(n.flags|=8192),ge=p.callbacks,ge===null?p.callbacks=[pe]:ge.push(pe))}else ge={lane:pe,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Te===null?(fe=Te=ge,W=Re):Te=Te.next=ge,E|=pe;if(F=F.next,F===null){if(F=p.shared.pending,F===null)break;ge=F,F=ge.next,ge.next=null,p.lastBaseUpdate=ge,p.shared.pending=null}}while(!0);Te===null&&(W=Re),p.baseState=W,p.firstBaseUpdate=fe,p.lastBaseUpdate=Te,m===null&&(p.shared.lanes=0),Zs|=E,n.lanes=E,n.memoizedState=Re}}function Mb(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function bb(n,r){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Mb(o[n],r)}var du=B(null),Ad=B(0);function Eb(n,r){n=os,ve(Ad,n),ve(du,r),os=n|r.baseLanes}function b_(){ve(Ad,os),ve(du,du.current)}function E_(){os=Ad.current,Z(du),Z(Ad)}var Mr=B(null),Xr=null;function Xs(n){var r=n.alternate;ve(kn,kn.current&1),ve(Mr,n),Xr===null&&(r===null||du.current!==null||r.memoizedState!==null)&&(Xr=n)}function T_(n){ve(kn,kn.current),ve(Mr,n),Xr===null&&(Xr=n)}function Tb(n){n.tag===22?(ve(kn,kn.current),ve(Mr,n),Xr===null&&(Xr=n)):Ws()}function Ws(){ve(kn,kn.current),ve(Mr,Mr.current)}function br(n){Z(Mr),Xr===n&&(Xr=null),Z(kn)}var kn=B(0);function Rd(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||Uv(o)||Lv(o)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var $a=0,Ut=null,pn=null,$n=null,Cd=!1,pu=!1,$o=!1,wd=0,Jc=0,mu=null,OO=0;function Bn(){throw Error(i(321))}function A_(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!yr(n[o],r[o]))return!1;return!0}function R_(n,r,o,u,p,m){return $a=m,Ut=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,z.H=n===null||n.memoizedState===null?lE:V_,$o=!1,m=o(u,p),$o=!1,pu&&(m=Rb(r,o,u,p)),Ab(n),m}function Ab(n){z.H=tf;var r=pn!==null&&pn.next!==null;if($a=0,$n=pn=Ut=null,Cd=!1,Jc=0,mu=null,r)throw Error(i(300));n===null||ei||(n=n.dependencies,n!==null&&xd(n)&&(ei=!0))}function Rb(n,r,o,u){Ut=n;var p=0;do{if(pu&&(mu=null),Jc=0,pu=!1,25<=p)throw Error(i(301));if(p+=1,$n=pn=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=uE,m=r(o,u)}while(pu);return m}function PO(){var n=z.H,r=n.useState()[0];return r=typeof r.then=="function"?$c(r):r,n=n.useState()[0],(pn!==null?pn.memoizedState:null)!==n&&(Ut.flags|=1024),r}function C_(){var n=wd!==0;return wd=0,n}function w_(n,r,o){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~o}function D_(n){if(Cd){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Cd=!1}$a=0,$n=pn=Ut=null,pu=!1,Jc=wd=0,mu=null}function Gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $n===null?Ut.memoizedState=$n=n:$n=$n.next=n,$n}function Xn(){if(pn===null){var n=Ut.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=$n===null?Ut.memoizedState:$n.next;if(r!==null)$n=r,pn=n;else{if(n===null)throw Ut.alternate===null?Error(i(467)):Error(i(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},$n===null?Ut.memoizedState=$n=n:$n=$n.next=n}return $n}function Dd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $c(n){var r=Jc;return Jc+=1,mu===null&&(mu=[]),n=_b(mu,n,r),r=Ut,($n===null?r.memoizedState:$n.next)===null&&(r=r.alternate,z.H=r===null||r.memoizedState===null?lE:V_),n}function Ud(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return $c(n);if(n.$$typeof===w)return vi(n)}throw Error(i(438,String(n)))}function U_(n){var r=null,o=Ut.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ut.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(p){return p.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=Dd(),Ut.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(n),u=0;u<n;u++)o[u]=I;return r.index++,o}function es(n,r){return typeof r=="function"?r(n):r}function Ld(n){var r=Xn();return L_(r,pn,n)}function L_(n,r,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var p=n.baseQueue,m=u.pending;if(m!==null){if(p!==null){var E=p.next;p.next=m.next,m.next=E}r.baseQueue=p=m,u.pending=null}if(m=n.baseState,p===null)n.memoizedState=m;else{r=p.next;var F=E=null,W=null,fe=r,Te=!1;do{var Re=fe.lane&-536870913;if(Re!==fe.lane?(Xt&Re)===Re:($a&Re)===Re){var pe=fe.revertLane;if(pe===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Re===uu&&(Te=!0);else if(($a&pe)===pe){fe=fe.next,pe===uu&&(Te=!0);continue}else Re={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},W===null?(F=W=Re,E=m):W=W.next=Re,Ut.lanes|=pe,Zs|=pe;Re=fe.action,$o&&o(m,Re),m=fe.hasEagerState?fe.eagerState:o(m,Re)}else pe={lane:Re,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},W===null?(F=W=pe,E=m):W=W.next=pe,Ut.lanes|=Re,Zs|=Re;fe=fe.next}while(fe!==null&&fe!==r);if(W===null?E=m:W.next=F,!yr(m,n.memoizedState)&&(ei=!0,Te&&(o=cu,o!==null)))throw o;n.memoizedState=m,n.baseState=E,n.baseQueue=W,u.lastRenderedState=m}return p===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function N_(n){var r=Xn(),o=r.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,p=o.pending,m=r.memoizedState;if(p!==null){o.pending=null;var E=p=p.next;do m=n(m,E.action),E=E.next;while(E!==p);yr(m,r.memoizedState)||(ei=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Cb(n,r,o){var u=Ut,p=Xn(),m=Kt;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=r();var E=!yr((pn||p).memoizedState,o);if(E&&(p.memoizedState=o,ei=!0),p=p.queue,F_(Ub.bind(null,u,p,n),[n]),p.getSnapshot!==r||E||$n!==null&&$n.memoizedState.tag&1){if(u.flags|=2048,gu(9,{destroy:void 0},Db.bind(null,u,p,o,r),null),Sn===null)throw Error(i(349));m||($a&127)!==0||wb(u,r,o)}return o}function wb(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Ut.updateQueue,r===null?(r=Dd(),Ut.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Db(n,r,o,u){r.value=o,r.getSnapshot=u,Lb(r)&&Nb(n)}function Ub(n,r,o){return o(function(){Lb(r)&&Nb(n)})}function Lb(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!yr(n,o)}catch{return!0}}function Nb(n){var r=Xo(n,2);r!==null&&ir(r,n,2)}function O_(n){var r=Gi();if(typeof n=="function"){var o=n;if(n=o(),$o){Ge(!0);try{o()}finally{Ge(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:n},r}function Ob(n,r,o,u){return n.baseState=o,L_(n,pn,typeof u=="function"?u:es)}function FO(n,r,o,u,p){if(Pd(n))throw Error(i(485));if(n=r.action,n!==null){var m={payload:p,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};z.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,Pb(r,m)):(m.next=o.next,r.pending=o.next=m)}}function Pb(n,r){var o=r.action,u=r.payload,p=n.state;if(r.isTransition){var m=z.T,E={};z.T=E;try{var F=o(p,u),W=z.S;W!==null&&W(E,F),Fb(n,r,F)}catch(fe){P_(n,r,fe)}finally{m!==null&&E.types!==null&&(m.types=E.types),z.T=m}}else try{m=o(p,u),Fb(n,r,m)}catch(fe){P_(n,r,fe)}}function Fb(n,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Ib(n,r,u)},function(u){return P_(n,r,u)}):Ib(n,r,o)}function Ib(n,r,o){r.status="fulfilled",r.value=o,zb(r),n.state=o,r=n.pending,r!==null&&(o=r.next,o===r?n.pending=null:(o=o.next,r.next=o,Pb(n,o)))}function P_(n,r,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,zb(r),r=r.next;while(r!==u)}n.action=null}function zb(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Bb(n,r){return r}function Hb(n,r){if(Kt){var o=Sn.formState;if(o!==null){e:{var u=Ut;if(Kt){if(Tn){t:{for(var p=Tn,m=kr;p.nodeType!==8;){if(!m){p=null;break t}if(p=Wr(p.nextSibling),p===null){p=null;break t}}m=p.data,p=m==="F!"||m==="F"?p:null}if(p){Tn=Wr(p.nextSibling),u=p.data==="F!";break e}}Bs(u)}u=!1}u&&(r=o[0])}}return o=Gi(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bb,lastRenderedState:r},o.queue=u,o=aE.bind(null,Ut,u),u.dispatch=o,u=O_(!1),m=G_.bind(null,Ut,!1,u.queue),u=Gi(),p={state:r,dispatch:null,action:n,pending:null},u.queue=p,o=FO.bind(null,Ut,p,m,o),p.dispatch=o,u.memoizedState=n,[r,o,!1]}function Gb(n){var r=Xn();return Vb(r,pn,n)}function Vb(n,r,o){if(r=L_(n,r,Bb)[0],n=Ld(es)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var u=$c(r)}catch(E){throw E===fu?Md:E}else u=r;r=Xn();var p=r.queue,m=p.dispatch;return o!==r.memoizedState&&(Ut.flags|=2048,gu(9,{destroy:void 0},IO.bind(null,p,o),null)),[u,m,n]}function IO(n,r){n.action=r}function kb(n){var r=Xn(),o=pn;if(o!==null)return Vb(r,o,n);Xn(),r=r.memoizedState,o=Xn();var u=o.queue.dispatch;return o.memoizedState=n,[r,u,!1]}function gu(n,r,o,u){return n={tag:n,create:o,deps:u,inst:r,next:null},r=Ut.updateQueue,r===null&&(r=Dd(),Ut.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,r.lastEffect=n),n}function Xb(){return Xn().memoizedState}function Nd(n,r,o,u){var p=Gi();Ut.flags|=n,p.memoizedState=gu(1|r,{destroy:void 0},o,u===void 0?null:u)}function Od(n,r,o,u){var p=Xn();u=u===void 0?null:u;var m=p.memoizedState.inst;pn!==null&&u!==null&&A_(u,pn.memoizedState.deps)?p.memoizedState=gu(r,m,o,u):(Ut.flags|=n,p.memoizedState=gu(1|r,m,o,u))}function Wb(n,r){Nd(8390656,8,n,r)}function F_(n,r){Od(2048,8,n,r)}function zO(n){Ut.flags|=4;var r=Ut.updateQueue;if(r===null)r=Dd(),Ut.updateQueue=r,r.events=[n];else{var o=r.events;o===null?r.events=[n]:o.push(n)}}function qb(n){var r=Xn().memoizedState;return zO({ref:r,nextImpl:n}),function(){if((nn&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}function Yb(n,r){return Od(4,2,n,r)}function Zb(n,r){return Od(4,4,n,r)}function Kb(n,r){if(typeof r=="function"){n=n();var o=r(n);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function jb(n,r,o){o=o!=null?o.concat([n]):null,Od(4,4,Kb.bind(null,r,n),o)}function I_(){}function Qb(n,r){var o=Xn();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&A_(r,u[1])?u[0]:(o.memoizedState=[n,r],n)}function Jb(n,r){var o=Xn();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&A_(r,u[1]))return u[0];if(u=n(),$o){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,r],u}function z_(n,r,o){return o===void 0||($a&1073741824)!==0&&(Xt&261930)===0?n.memoizedState=r:(n.memoizedState=o,n=$E(),Ut.lanes|=n,Zs|=n,o)}function $b(n,r,o,u){return yr(o,r)?o:du.current!==null?(n=z_(n,o,u),yr(n,r)||(ei=!0),n):($a&42)===0||($a&1073741824)!==0&&(Xt&261930)===0?(ei=!0,n.memoizedState=o):(n=$E(),Ut.lanes|=n,Zs|=n,r)}function eE(n,r,o,u,p){var m=G.p;G.p=m!==0&&8>m?m:8;var E=z.T,F={};z.T=F,G_(n,!1,r,o);try{var W=p(),fe=z.S;if(fe!==null&&fe(F,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var Te=NO(W,u);ef(n,r,Te,Ar(n))}else ef(n,r,u,Ar(n))}catch(Re){ef(n,r,{then:function(){},status:"rejected",reason:Re},Ar())}finally{G.p=m,E!==null&&F.types!==null&&(E.types=F.types),z.T=E}}function BO(){}function B_(n,r,o,u){if(n.tag!==5)throw Error(i(476));var p=tE(n).queue;eE(n,p,r,ee,o===null?BO:function(){return nE(n),o(u)})}function tE(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:ee},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:es,lastRenderedState:o},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function nE(n){var r=tE(n);r.next===null&&(r=n.alternate.memoizedState),ef(n,r.next.queue,{},Ar())}function H_(){return vi(vf)}function iE(){return Xn().memoizedState}function rE(){return Xn().memoizedState}function HO(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var o=Ar();n=Vs(o);var u=ks(r,n,o);u!==null&&(ir(u,r,o),Kc(u,r,o)),r={cache:m_()},n.payload=r;return}r=r.return}}function GO(n,r,o){var u=Ar();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pd(n)?sE(r,o):(o=r_(n,r,o,u),o!==null&&(ir(o,n,u),oE(o,r,u)))}function aE(n,r,o){var u=Ar();ef(n,r,o,u)}function ef(n,r,o,u){var p={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(Pd(n))sE(r,p);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,F=m(E,o);if(p.hasEagerState=!0,p.eagerState=F,yr(F,E))return md(n,r,p,0),Sn===null&&pd(),!1}catch{}finally{}if(o=r_(n,r,p,u),o!==null)return ir(o,n,u),oE(o,r,u),!0}return!1}function G_(n,r,o,u){if(u={lane:2,revertLane:xv(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},Pd(n)){if(r)throw Error(i(479))}else r=r_(n,o,u,2),r!==null&&ir(r,n,2)}function Pd(n){var r=n.alternate;return n===Ut||r!==null&&r===Ut}function sE(n,r){pu=Cd=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function oE(n,r,o){if((o&4194048)!==0){var u=r.lanes;u&=n.pendingLanes,o|=u,r.lanes=o,ft(n,o)}}var tf={readContext:vi,use:Ud,useCallback:Bn,useContext:Bn,useEffect:Bn,useImperativeHandle:Bn,useLayoutEffect:Bn,useInsertionEffect:Bn,useMemo:Bn,useReducer:Bn,useRef:Bn,useState:Bn,useDebugValue:Bn,useDeferredValue:Bn,useTransition:Bn,useSyncExternalStore:Bn,useId:Bn,useHostTransitionStatus:Bn,useFormState:Bn,useActionState:Bn,useOptimistic:Bn,useMemoCache:Bn,useCacheRefresh:Bn};tf.useEffectEvent=Bn;var lE={readContext:vi,use:Ud,useCallback:function(n,r){return Gi().memoizedState=[n,r===void 0?null:r],n},useContext:vi,useEffect:Wb,useImperativeHandle:function(n,r,o){o=o!=null?o.concat([n]):null,Nd(4194308,4,Kb.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Nd(4194308,4,n,r)},useInsertionEffect:function(n,r){Nd(4,2,n,r)},useMemo:function(n,r){var o=Gi();r=r===void 0?null:r;var u=n();if($o){Ge(!0);try{n()}finally{Ge(!1)}}return o.memoizedState=[u,r],u},useReducer:function(n,r,o){var u=Gi();if(o!==void 0){var p=o(r);if($o){Ge(!0);try{o(r)}finally{Ge(!1)}}}else p=r;return u.memoizedState=u.baseState=p,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:p},u.queue=n,n=n.dispatch=GO.bind(null,Ut,n),[u.memoizedState,n]},useRef:function(n){var r=Gi();return n={current:n},r.memoizedState=n},useState:function(n){n=O_(n);var r=n.queue,o=aE.bind(null,Ut,r);return r.dispatch=o,[n.memoizedState,o]},useDebugValue:I_,useDeferredValue:function(n,r){var o=Gi();return z_(o,n,r)},useTransition:function(){var n=O_(!1);return n=eE.bind(null,Ut,n.queue,!0,!1),Gi().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,o){var u=Ut,p=Gi();if(Kt){if(o===void 0)throw Error(i(407));o=o()}else{if(o=r(),Sn===null)throw Error(i(349));(Xt&127)!==0||wb(u,r,o)}p.memoizedState=o;var m={value:o,getSnapshot:r};return p.queue=m,Wb(Ub.bind(null,u,m,n),[n]),u.flags|=2048,gu(9,{destroy:void 0},Db.bind(null,u,m,o,r),null),o},useId:function(){var n=Gi(),r=Sn.identifierPrefix;if(Kt){var o=Aa,u=Ta;o=(u&~(1<<32-Ve(u)-1)).toString(32)+o,r="_"+r+"R_"+o,o=wd++,0<o&&(r+="H"+o.toString(32)),r+="_"}else o=OO++,r="_"+r+"r_"+o.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:H_,useFormState:Hb,useActionState:Hb,useOptimistic:function(n){var r=Gi();r.memoizedState=r.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=G_.bind(null,Ut,!0,o),o.dispatch=r,[n,r]},useMemoCache:U_,useCacheRefresh:function(){return Gi().memoizedState=HO.bind(null,Ut)},useEffectEvent:function(n){var r=Gi(),o={impl:n};return r.memoizedState=o,function(){if((nn&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},V_={readContext:vi,use:Ud,useCallback:Qb,useContext:vi,useEffect:F_,useImperativeHandle:jb,useInsertionEffect:Yb,useLayoutEffect:Zb,useMemo:Jb,useReducer:Ld,useRef:Xb,useState:function(){return Ld(es)},useDebugValue:I_,useDeferredValue:function(n,r){var o=Xn();return $b(o,pn.memoizedState,n,r)},useTransition:function(){var n=Ld(es)[0],r=Xn().memoizedState;return[typeof n=="boolean"?n:$c(n),r]},useSyncExternalStore:Cb,useId:iE,useHostTransitionStatus:H_,useFormState:Gb,useActionState:Gb,useOptimistic:function(n,r){var o=Xn();return Ob(o,pn,n,r)},useMemoCache:U_,useCacheRefresh:rE};V_.useEffectEvent=qb;var uE={readContext:vi,use:Ud,useCallback:Qb,useContext:vi,useEffect:F_,useImperativeHandle:jb,useInsertionEffect:Yb,useLayoutEffect:Zb,useMemo:Jb,useReducer:N_,useRef:Xb,useState:function(){return N_(es)},useDebugValue:I_,useDeferredValue:function(n,r){var o=Xn();return pn===null?z_(o,n,r):$b(o,pn.memoizedState,n,r)},useTransition:function(){var n=N_(es)[0],r=Xn().memoizedState;return[typeof n=="boolean"?n:$c(n),r]},useSyncExternalStore:Cb,useId:iE,useHostTransitionStatus:H_,useFormState:kb,useActionState:kb,useOptimistic:function(n,r){var o=Xn();return pn!==null?Ob(o,pn,n,r):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:U_,useCacheRefresh:rE};uE.useEffectEvent=qb;function k_(n,r,o,u){r=n.memoizedState,o=o(u,r),o=o==null?r:v({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var X_={enqueueSetState:function(n,r,o){n=n._reactInternals;var u=Ar(),p=Vs(u);p.payload=r,o!=null&&(p.callback=o),r=ks(n,p,u),r!==null&&(ir(r,n,u),Kc(r,n,u))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var u=Ar(),p=Vs(u);p.tag=1,p.payload=r,o!=null&&(p.callback=o),r=ks(n,p,u),r!==null&&(ir(r,n,u),Kc(r,n,u))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Ar(),u=Vs(o);u.tag=2,r!=null&&(u.callback=r),r=ks(n,u,o),r!==null&&(ir(r,n,o),Kc(r,n,o))}};function cE(n,r,o,u,p,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!Gc(o,u)||!Gc(p,m):!0}function fE(n,r,o,u){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==n&&X_.enqueueReplaceState(r,r.state,null)}function el(n,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(n=n.defaultProps){o===r&&(o=v({},o));for(var p in n)o[p]===void 0&&(o[p]=n[p])}return o}function hE(n){dd(n)}function dE(n){console.error(n)}function pE(n){dd(n)}function Fd(n,r){try{var o=n.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function mE(n,r,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function W_(n,r,o){return o=Vs(o),o.tag=3,o.payload={element:null},o.callback=function(){Fd(n,r)},o}function gE(n){return n=Vs(n),n.tag=3,n}function _E(n,r,o,u){var p=o.type.getDerivedStateFromError;if(typeof p=="function"){var m=u.value;n.payload=function(){return p(m)},n.callback=function(){mE(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(n.callback=function(){mE(r,o,u),typeof p!="function"&&(Ks===null?Ks=new Set([this]):Ks.add(this));var F=u.stack;this.componentDidCatch(u.value,{componentStack:F!==null?F:""})})}function VO(n,r,o,u,p){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&lu(r,o,p,!0),o=Mr.current,o!==null){switch(o.tag){case 31:case 13:return Xr===null?Zd():o.alternate===null&&Hn===0&&(Hn=3),o.flags&=-257,o.flags|=65536,o.lanes=p,u===bd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),gv(n,u,p)),!1;case 22:return o.flags|=65536,u===bd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),gv(n,u,p)),!1}throw Error(i(435,o.tag))}return gv(n,u,p),Zd(),!1}if(Kt)return r=Mr.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=p,u!==c_&&(n=Error(i(422),{cause:u}),Xc(Hr(n,o)))):(u!==c_&&(r=Error(i(423),{cause:u}),Xc(Hr(r,o))),n=n.current.alternate,n.flags|=65536,p&=-p,n.lanes|=p,u=Hr(u,o),p=W_(n.stateNode,u,p),S_(n,p),Hn!==4&&(Hn=2)),!1;var m=Error(i(520),{cause:u});if(m=Hr(m,o),cf===null?cf=[m]:cf.push(m),Hn!==4&&(Hn=2),r===null)return!0;u=Hr(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,n=p&-p,o.lanes|=n,n=W_(o.stateNode,u,n),S_(o,n),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ks===null||!Ks.has(m))))return o.flags|=65536,p&=-p,o.lanes|=p,p=gE(p),_E(p,n,o,u),S_(o,p),!1}o=o.return}while(o!==null);return!1}var q_=Error(i(461)),ei=!1;function xi(n,r,o,u){r.child=n===null?Sb(r,null,o,u):Jo(r,n.child,o,u)}function vE(n,r,o,u,p){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var F in u)F!=="ref"&&(E[F]=u[F])}else E=u;return Zo(r),u=R_(n,r,o,E,m,p),F=C_(),n!==null&&!ei?(w_(n,r,p),ts(n,r,p)):(Kt&&F&&l_(r),r.flags|=1,xi(n,r,u,p),r.child)}function xE(n,r,o,u,p){if(n===null){var m=o.type;return typeof m=="function"&&!a_(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,yE(n,r,m,u,p)):(n=_d(o.type,null,u,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!ev(n,p)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:Gc,o(E,u)&&n.ref===r.ref)return ts(n,r,p)}return r.flags|=1,n=Ka(m,u),n.ref=r.ref,n.return=r,r.child=n}function yE(n,r,o,u,p){if(n!==null){var m=n.memoizedProps;if(Gc(m,u)&&n.ref===r.ref)if(ei=!1,r.pendingProps=u=m,ev(n,p))(n.flags&131072)!==0&&(ei=!0);else return r.lanes=n.lanes,ts(n,r,p)}return Y_(n,r,o,u,p)}function SE(n,r,o,u){var p=u.children,m=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=r.child=n.child,p=0;u!==null;)p=p|u.lanes|u.childLanes,u=u.sibling;u=p&~m}else u=0,r.child=null;return ME(n,r,m,o,u)}if((o&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Sd(r,m!==null?m.cachePool:null),m!==null?Eb(r,m):b_(),Tb(r);else return u=r.lanes=536870912,ME(n,r,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Sd(r,m.cachePool),Eb(r,m),Ws(),r.memoizedState=null):(n!==null&&Sd(r,null),b_(),Ws());return xi(n,r,p,o),r.child}function nf(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function ME(n,r,o,u,p){var m=__();return m=m===null?null:{parent:Jn._currentValue,pool:m},r.memoizedState={baseLanes:o,cachePool:m},n!==null&&Sd(r,null),b_(),Tb(r),n!==null&&lu(n,r,u,!0),r.childLanes=p,null}function Id(n,r){return r=Bd({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function bE(n,r,o){return Jo(r,n.child,null,o),n=Id(r,r.pendingProps),n.flags|=2,br(r),r.memoizedState=null,n}function kO(n,r,o){var u=r.pendingProps,p=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(Kt){if(u.mode==="hidden")return n=Id(r,u),r.lanes=536870912,nf(null,n);if(T_(r),(n=Tn)?(n=PT(n,kr),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Is!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},o=sb(n),o.return=r,r.child=o,_i=r,Tn=null)):n=null,n===null)throw Bs(r);return r.lanes=536870912,null}return Id(r,u)}var m=n.memoizedState;if(m!==null){var E=m.dehydrated;if(T_(r),p)if(r.flags&256)r.flags&=-257,r=bE(n,r,o);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(i(558));else if(ei||lu(n,r,o,!1),p=(o&n.childLanes)!==0,ei||p){if(u=Sn,u!==null&&(E=tt(u,o),E!==0&&E!==m.retryLane))throw m.retryLane=E,Xo(n,E),ir(u,n,E),q_;Zd(),r=bE(n,r,o)}else n=m.treeContext,Tn=Wr(E.nextSibling),_i=r,Kt=!0,zs=null,kr=!1,n!==null&&ub(r,n),r=Id(r,u),r.flags|=4096;return r}return n=Ka(n.child,{mode:u.mode,children:u.children}),n.ref=r.ref,r.child=n,n.return=r,n}function zd(n,r){var o=r.ref;if(o===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(r.flags|=4194816)}}function Y_(n,r,o,u,p){return Zo(r),o=R_(n,r,o,u,void 0,p),u=C_(),n!==null&&!ei?(w_(n,r,p),ts(n,r,p)):(Kt&&u&&l_(r),r.flags|=1,xi(n,r,o,p),r.child)}function EE(n,r,o,u,p,m){return Zo(r),r.updateQueue=null,o=Rb(r,u,o,p),Ab(n),u=C_(),n!==null&&!ei?(w_(n,r,m),ts(n,r,m)):(Kt&&u&&l_(r),r.flags|=1,xi(n,r,o,m),r.child)}function TE(n,r,o,u,p){if(Zo(r),r.stateNode===null){var m=ru,E=o.contextType;typeof E=="object"&&E!==null&&(m=vi(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=X_,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},x_(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?vi(E):ru,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(k_(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&X_.enqueueReplaceState(m,m.state,null),Qc(r,u,m,p),jc(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(n===null){m=r.stateNode;var F=r.memoizedProps,W=el(o,F);m.props=W;var fe=m.context,Te=o.contextType;E=ru,typeof Te=="object"&&Te!==null&&(E=vi(Te));var Re=o.getDerivedStateFromProps;Te=typeof Re=="function"||typeof m.getSnapshotBeforeUpdate=="function",F=r.pendingProps!==F,Te||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(F||fe!==E)&&fE(r,m,u,E),Gs=!1;var pe=r.memoizedState;m.state=pe,Qc(r,u,m,p),jc(),fe=r.memoizedState,F||pe!==fe||Gs?(typeof Re=="function"&&(k_(r,o,Re,u),fe=r.memoizedState),(W=Gs||cE(r,o,W,u,pe,fe,E))?(Te||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=fe),m.props=u,m.state=fe,m.context=E,u=W):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,y_(n,r),E=r.memoizedProps,Te=el(o,E),m.props=Te,Re=r.pendingProps,pe=m.context,fe=o.contextType,W=ru,typeof fe=="object"&&fe!==null&&(W=vi(fe)),F=o.getDerivedStateFromProps,(fe=typeof F=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==Re||pe!==W)&&fE(r,m,u,W),Gs=!1,pe=r.memoizedState,m.state=pe,Qc(r,u,m,p),jc();var ge=r.memoizedState;E!==Re||pe!==ge||Gs||n!==null&&n.dependencies!==null&&xd(n.dependencies)?(typeof F=="function"&&(k_(r,o,F,u),ge=r.memoizedState),(Te=Gs||cE(r,o,Te,u,pe,ge,W)||n!==null&&n.dependencies!==null&&xd(n.dependencies))?(fe||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ge,W),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ge,W)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=ge),m.props=u,m.state=ge,m.context=W,u=Te):(typeof m.componentDidUpdate!="function"||E===n.memoizedProps&&pe===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===n.memoizedProps&&pe===n.memoizedState||(r.flags|=1024),u=!1)}return m=u,zd(n,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&u?(r.child=Jo(r,n.child,null,p),r.child=Jo(r,null,o,p)):xi(n,r,o,p),r.memoizedState=m.state,n=r.child):n=ts(n,r,p),n}function AE(n,r,o,u){return qo(),r.flags|=256,xi(n,r,o,u),r.child}var Z_={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function K_(n){return{baseLanes:n,cachePool:mb()}}function j_(n,r,o){return n=n!==null?n.childLanes&~o:0,r&&(n|=Tr),n}function RE(n,r,o){var u=r.pendingProps,p=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=n!==null&&n.memoizedState===null?!1:(kn.current&2)!==0),E&&(p=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,n===null){if(Kt){if(p?Xs(r):Ws(),(n=Tn)?(n=PT(n,kr),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:Is!==null?{id:Ta,overflow:Aa}:null,retryLane:536870912,hydrationErrors:null},o=sb(n),o.return=r,r.child=o,_i=r,Tn=null)):n=null,n===null)throw Bs(r);return Lv(n)?r.lanes=32:r.lanes=536870912,null}var F=u.children;return u=u.fallback,p?(Ws(),p=r.mode,F=Bd({mode:"hidden",children:F},p),u=Wo(u,p,o,null),F.return=r,u.return=r,F.sibling=u,r.child=F,u=r.child,u.memoizedState=K_(o),u.childLanes=j_(n,E,o),r.memoizedState=Z_,nf(null,u)):(Xs(r),Q_(r,F))}var W=n.memoizedState;if(W!==null&&(F=W.dehydrated,F!==null)){if(m)r.flags&256?(Xs(r),r.flags&=-257,r=J_(n,r,o)):r.memoizedState!==null?(Ws(),r.child=n.child,r.flags|=128,r=null):(Ws(),F=u.fallback,p=r.mode,u=Bd({mode:"visible",children:u.children},p),F=Wo(F,p,o,null),F.flags|=2,u.return=r,F.return=r,u.sibling=F,r.child=u,Jo(r,n.child,null,o),u=r.child,u.memoizedState=K_(o),u.childLanes=j_(n,E,o),r.memoizedState=Z_,r=nf(null,u));else if(Xs(r),Lv(F)){if(E=F.nextSibling&&F.nextSibling.dataset,E)var fe=E.dgst;E=fe,u=Error(i(419)),u.stack="",u.digest=E,Xc({value:u,source:null,stack:null}),r=J_(n,r,o)}else if(ei||lu(n,r,o,!1),E=(o&n.childLanes)!==0,ei||E){if(E=Sn,E!==null&&(u=tt(E,o),u!==0&&u!==W.retryLane))throw W.retryLane=u,Xo(n,u),ir(E,n,u),q_;Uv(F)||Zd(),r=J_(n,r,o)}else Uv(F)?(r.flags|=192,r.child=n.child,r=null):(n=W.treeContext,Tn=Wr(F.nextSibling),_i=r,Kt=!0,zs=null,kr=!1,n!==null&&ub(r,n),r=Q_(r,u.children),r.flags|=4096);return r}return p?(Ws(),F=u.fallback,p=r.mode,W=n.child,fe=W.sibling,u=Ka(W,{mode:"hidden",children:u.children}),u.subtreeFlags=W.subtreeFlags&65011712,fe!==null?F=Ka(fe,F):(F=Wo(F,p,o,null),F.flags|=2),F.return=r,u.return=r,u.sibling=F,r.child=u,nf(null,u),u=r.child,F=n.child.memoizedState,F===null?F=K_(o):(p=F.cachePool,p!==null?(W=Jn._currentValue,p=p.parent!==W?{parent:W,pool:W}:p):p=mb(),F={baseLanes:F.baseLanes|o,cachePool:p}),u.memoizedState=F,u.childLanes=j_(n,E,o),r.memoizedState=Z_,nf(n.child,u)):(Xs(r),o=n.child,n=o.sibling,o=Ka(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,n!==null&&(E=r.deletions,E===null?(r.deletions=[n],r.flags|=16):E.push(n)),r.child=o,r.memoizedState=null,o)}function Q_(n,r){return r=Bd({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Bd(n,r){return n=Sr(22,n,null,r),n.lanes=0,n}function J_(n,r,o){return Jo(r,n.child,null,o),n=Q_(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function CE(n,r,o){n.lanes|=r;var u=n.alternate;u!==null&&(u.lanes|=r),d_(n.return,r,o)}function $_(n,r,o,u,p,m){var E=n.memoizedState;E===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:p,treeForkCount:m}:(E.isBackwards=r,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=o,E.tailMode=p,E.treeForkCount=m)}function wE(n,r,o){var u=r.pendingProps,p=u.revealOrder,m=u.tail;u=u.children;var E=kn.current,F=(E&2)!==0;if(F?(E=E&1|2,r.flags|=128):E&=1,ve(kn,E),xi(n,r,u,o),u=Kt?kc:0,!F&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&CE(n,o,r);else if(n.tag===19)CE(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(p){case"forwards":for(o=r.child,p=null;o!==null;)n=o.alternate,n!==null&&Rd(n)===null&&(p=o),o=o.sibling;o=p,o===null?(p=r.child,r.child=null):(p=o.sibling,o.sibling=null),$_(r,!1,p,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Rd(n)===null){r.child=p;break}n=p.sibling,p.sibling=o,o=p,p=n}$_(r,!0,o,null,m,u);break;case"together":$_(r,!1,null,null,void 0,u);break;default:r.memoizedState=null}return r.child}function ts(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Zs|=r.lanes,(o&r.childLanes)===0)if(n!==null){if(lu(n,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,o=Ka(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ka(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function ev(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&xd(n)))}function XO(n,r,o){switch(r.tag){case 3:re(r,r.stateNode.containerInfo),Hs(r,Jn,n.memoizedState.cache),qo();break;case 27:case 5:Xe(r);break;case 4:re(r,r.stateNode.containerInfo);break;case 10:Hs(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,T_(r),null;break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(Xs(r),r.flags|=128,null):(o&r.child.childLanes)!==0?RE(n,r,o):(Xs(r),n=ts(n,r,o),n!==null?n.sibling:null);Xs(r);break;case 19:var p=(n.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(lu(n,r,o,!1),u=(o&r.childLanes)!==0),p){if(u)return wE(n,r,o);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),ve(kn,kn.current),u)break;return null;case 22:return r.lanes=0,SE(n,r,o,r.pendingProps);case 24:Hs(r,Jn,n.memoizedState.cache)}return ts(n,r,o)}function DE(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps)ei=!0;else{if(!ev(n,o)&&(r.flags&128)===0)return ei=!1,XO(n,r,o);ei=(n.flags&131072)!==0}else ei=!1,Kt&&(r.flags&1048576)!==0&&lb(r,kc,r.index);switch(r.lanes=0,r.tag){case 16:e:{var u=r.pendingProps;if(n=jo(r.elementType),r.type=n,typeof n=="function")a_(n)?(u=el(n,u),r.tag=1,r=TE(null,r,n,u,o)):(r.tag=0,r=Y_(null,r,n,u,o));else{if(n!=null){var p=n.$$typeof;if(p===C){r.tag=11,r=vE(null,r,n,u,o);break e}else if(p===U){r.tag=14,r=xE(null,r,n,u,o);break e}}throw r=J(n)||n,Error(i(306,r,""))}}return r;case 0:return Y_(n,r,r.type,r.pendingProps,o);case 1:return u=r.type,p=el(u,r.pendingProps),TE(n,r,u,p,o);case 3:e:{if(re(r,r.stateNode.containerInfo),n===null)throw Error(i(387));u=r.pendingProps;var m=r.memoizedState;p=m.element,y_(n,r),Qc(r,u,null,o);var E=r.memoizedState;if(u=E.cache,Hs(r,Jn,u),u!==m.cache&&p_(r,[Jn],o,!0),jc(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=AE(n,r,u,o);break e}else if(u!==p){p=Hr(Error(i(424)),r),Xc(p),r=AE(n,r,u,o);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Tn=Wr(n.firstChild),_i=r,Kt=!0,zs=null,kr=!0,o=Sb(r,null,u,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(qo(),u===p){r=ts(n,r,o);break e}xi(n,r,u,o)}r=r.child}return r;case 26:return zd(n,r),n===null?(o=GT(r.type,null,r.pendingProps,null))?r.memoizedState=o:Kt||(o=r.type,n=r.pendingProps,u=tp(ne.current).createElement(o),u[Et]=r,u[wt]=n,yi(u,o,n),Pt(u),r.stateNode=u):r.memoizedState=GT(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return Xe(r),n===null&&Kt&&(u=r.stateNode=zT(r.type,r.pendingProps,ne.current),_i=r,kr=!0,p=Tn,$s(r.type)?(Nv=p,Tn=Wr(u.firstChild)):Tn=p),xi(n,r,r.pendingProps.children,o),zd(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&Kt&&((p=u=Tn)&&(u=yP(u,r.type,r.pendingProps,kr),u!==null?(r.stateNode=u,_i=r,Tn=Wr(u.firstChild),kr=!1,p=!0):p=!1),p||Bs(r)),Xe(r),p=r.type,m=r.pendingProps,E=n!==null?n.memoizedProps:null,u=m.children,Cv(p,m)?u=null:E!==null&&Cv(p,E)&&(r.flags|=32),r.memoizedState!==null&&(p=R_(n,r,PO,null,null,o),vf._currentValue=p),zd(n,r),xi(n,r,u,o),r.child;case 6:return n===null&&Kt&&((n=o=Tn)&&(o=SP(o,r.pendingProps,kr),o!==null?(r.stateNode=o,_i=r,Tn=null,n=!0):n=!1),n||Bs(r)),null;case 13:return RE(n,r,o);case 4:return re(r,r.stateNode.containerInfo),u=r.pendingProps,n===null?r.child=Jo(r,null,u,o):xi(n,r,u,o),r.child;case 11:return vE(n,r,r.type,r.pendingProps,o);case 7:return xi(n,r,r.pendingProps,o),r.child;case 8:return xi(n,r,r.pendingProps.children,o),r.child;case 12:return xi(n,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Hs(r,r.type,u.value),xi(n,r,u.children,o),r.child;case 9:return p=r.type._context,u=r.pendingProps.children,Zo(r),p=vi(p),u=u(p),r.flags|=1,xi(n,r,u,o),r.child;case 14:return xE(n,r,r.type,r.pendingProps,o);case 15:return yE(n,r,r.type,r.pendingProps,o);case 19:return wE(n,r,o);case 31:return kO(n,r,o);case 22:return SE(n,r,o,r.pendingProps);case 24:return Zo(r),u=vi(Jn),n===null?(p=__(),p===null&&(p=Sn,m=m_(),p.pooledCache=m,m.refCount++,m!==null&&(p.pooledCacheLanes|=o),p=m),r.memoizedState={parent:u,cache:p},x_(r),Hs(r,Jn,p)):((n.lanes&o)!==0&&(y_(n,r),Qc(r,null,null,o),jc()),p=n.memoizedState,m=r.memoizedState,p.parent!==u?(p={parent:u,cache:u},r.memoizedState=p,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=p),Hs(r,Jn,u)):(u=m.cache,Hs(r,Jn,u),u!==p.cache&&p_(r,[Jn],o,!0))),xi(n,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function ns(n){n.flags|=4}function tv(n,r,o,u,p){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(p&335544128)===p)if(n.stateNode.complete)n.flags|=8192;else if(iT())n.flags|=8192;else throw Qo=bd,v_}else n.flags&=-16777217}function UE(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!qT(r))if(iT())n.flags|=8192;else throw Qo=bd,v_}function Hd(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?De():536870912,n.lanes|=r,yu|=r)}function rf(n,r){if(!Kt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function An(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(r)for(var p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags&65011712,u|=p.flags&65011712,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)o|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=o,r}function WO(n,r,o){var u=r.pendingProps;switch(u_(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return An(r),null;case 1:return An(r),null;case 3:return o=r.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),Ja(Jn),Me(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(ou(r)?ns(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,f_())),An(r),null;case 26:var p=r.type,m=r.memoizedState;return n===null?(ns(r),m!==null?(An(r),UE(r,m)):(An(r),tv(r,p,null,u,o))):m?m!==n.memoizedState?(ns(r),An(r),UE(r,m)):(An(r),r.flags&=-16777217):(n=n.memoizedProps,n!==u&&ns(r),An(r),tv(r,p,n,u,o)),null;case 27:if(ze(r),o=ne.current,p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ns(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}n=ye.current,ou(r)?cb(r):(n=zT(p,u,o),r.stateNode=n,ns(r))}return An(r),null;case 5:if(ze(r),p=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==u&&ns(r);else{if(!u){if(r.stateNode===null)throw Error(i(166));return An(r),null}if(m=ye.current,ou(r))cb(r);else{var E=tp(ne.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(p,{is:u.is}):E.createElement(p)}}m[Et]=r,m[wt]=u;e:for(E=r.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===r)break e;for(;E.sibling===null;){if(E.return===null||E.return===r)break e;E=E.return}E.sibling.return=E.return,E=E.sibling}r.stateNode=m;e:switch(yi(m,p,u),p){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&ns(r)}}return An(r),tv(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,o),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==u&&ns(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(i(166));if(n=ne.current,ou(r)){if(n=r.stateNode,o=r.memoizedProps,u=null,p=_i,p!==null)switch(p.tag){case 27:case 5:u=p.memoizedProps}n[Et]=r,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||RT(n.nodeValue,o)),n||Bs(r,!0)}else n=tp(n).createTextNode(u),n[Et]=r,r.stateNode=n}return An(r),null;case 31:if(o=r.memoizedState,n===null||n.memoizedState!==null){if(u=ou(r),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[Et]=r}else qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),n=!1}else o=f_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return r.flags&256?(br(r),r):(br(r),null);if((r.flags&128)!==0)throw Error(i(558))}return An(r),null;case 13:if(u=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(p=ou(r),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(i(318));if(p=r.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(i(317));p[Et]=r}else qo(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;An(r),p=!1}else p=f_(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=p),p=!0;if(!p)return r.flags&256?(br(r),r):(br(r),null)}return br(r),(r.flags&128)!==0?(r.lanes=o,r):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=r.child,p=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(p=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==p&&(u.flags|=2048)),o!==n&&o&&(r.child.flags|=8192),Hd(r,r.updateQueue),An(r),null);case 4:return Me(),n===null&&bv(r.stateNode.containerInfo),An(r),null;case 10:return Ja(r.type),An(r),null;case 19:if(Z(kn),u=r.memoizedState,u===null)return An(r),null;if(p=(r.flags&128)!==0,m=u.rendering,m===null)if(p)rf(u,!1);else{if(Hn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Rd(n),m!==null){for(r.flags|=128,rf(u,!1),n=m.updateQueue,r.updateQueue=n,Hd(r,n),r.subtreeFlags=0,n=o,o=r.child;o!==null;)ab(o,n),o=o.sibling;return ve(kn,kn.current&1|2),Kt&&ja(r,u.treeForkCount),r.child}n=n.sibling}u.tail!==null&&Ee()>Wd&&(r.flags|=128,p=!0,rf(u,!1),r.lanes=4194304)}else{if(!p)if(n=Rd(m),n!==null){if(r.flags|=128,p=!0,n=n.updateQueue,r.updateQueue=n,Hd(r,n),rf(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Kt)return An(r),null}else 2*Ee()-u.renderingStartTime>Wd&&o!==536870912&&(r.flags|=128,p=!0,rf(u,!1),r.lanes=4194304);u.isBackwards?(m.sibling=r.child,r.child=m):(n=u.last,n!==null?n.sibling=m:r.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=Ee(),n.sibling=null,o=kn.current,ve(kn,p?o&1|2:o&1),Kt&&ja(r,u.treeForkCount),n):(An(r),null);case 22:case 23:return br(r),E_(),u=r.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?(o&536870912)!==0&&(r.flags&128)===0&&(An(r),r.subtreeFlags&6&&(r.flags|=8192)):An(r),o=r.updateQueue,o!==null&&Hd(r,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),n!==null&&Z(Ko),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),Ja(Jn),An(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function qO(n,r){switch(u_(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ja(Jn),Me(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return ze(r),null;case 31:if(r.memoizedState!==null){if(br(r),r.alternate===null)throw Error(i(340));qo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(br(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));qo()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Z(kn),null;case 4:return Me(),null;case 10:return Ja(r.type),null;case 22:case 23:return br(r),E_(),n!==null&&Z(Ko),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Ja(Jn),null;case 25:return null;default:return null}}function LE(n,r){switch(u_(r),r.tag){case 3:Ja(Jn),Me();break;case 26:case 27:case 5:ze(r);break;case 4:Me();break;case 31:r.memoizedState!==null&&br(r);break;case 13:br(r);break;case 19:Z(kn);break;case 10:Ja(r.type);break;case 22:case 23:br(r),E_(),n!==null&&Z(Ko);break;case 24:Ja(Jn)}}function af(n,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var p=u.next;o=p;do{if((o.tag&n)===n){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==p)}}catch(F){hn(r,r.return,F)}}function qs(n,r,o){try{var u=r.updateQueue,p=u!==null?u.lastEffect:null;if(p!==null){var m=p.next;u=m;do{if((u.tag&n)===n){var E=u.inst,F=E.destroy;if(F!==void 0){E.destroy=void 0,p=r;var W=o,fe=F;try{fe()}catch(Te){hn(p,W,Te)}}}u=u.next}while(u!==m)}}catch(Te){hn(r,r.return,Te)}}function NE(n){var r=n.updateQueue;if(r!==null){var o=n.stateNode;try{bb(r,o)}catch(u){hn(n,n.return,u)}}}function OE(n,r,o){o.props=el(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){hn(n,r,u)}}function sf(n,r){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(p){hn(n,r,p)}}function Ra(n,r){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(p){hn(n,r,p)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(p){hn(n,r,p)}else o.current=null}function PE(n){var r=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(p){hn(n,n.return,p)}}function nv(n,r,o){try{var u=n.stateNode;pP(u,n.type,o,r),u[wt]=r}catch(p){hn(n,n.return,p)}}function FE(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&$s(n.type)||n.tag===4}function iv(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||FE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&$s(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rv(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,r):(r=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,r.appendChild(n),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=Ya));else if(u!==4&&(u===27&&$s(n.type)&&(o=n.stateNode,r=null),n=n.child,n!==null))for(rv(n,r,o),n=n.sibling;n!==null;)rv(n,r,o),n=n.sibling}function Gd(n,r,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(u!==4&&(u===27&&$s(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(Gd(n,r,o),n=n.sibling;n!==null;)Gd(n,r,o),n=n.sibling}function IE(n){var r=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,p=r.attributes;p.length;)r.removeAttributeNode(p[0]);yi(r,u,o),r[Et]=n,r[wt]=o}catch(m){hn(n,n.return,m)}}var is=!1,ti=!1,av=!1,zE=typeof WeakSet=="function"?WeakSet:Set,di=null;function YO(n,r){if(n=n.containerInfo,Av=lp,n=j1(n),Jg(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var p=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,F=-1,W=-1,fe=0,Te=0,Re=n,pe=null;t:for(;;){for(var ge;Re!==o||p!==0&&Re.nodeType!==3||(F=E+p),Re!==m||u!==0&&Re.nodeType!==3||(W=E+u),Re.nodeType===3&&(E+=Re.nodeValue.length),(ge=Re.firstChild)!==null;)pe=Re,Re=ge;for(;;){if(Re===n)break t;if(pe===o&&++fe===p&&(F=E),pe===m&&++Te===u&&(W=E),(ge=Re.nextSibling)!==null)break;Re=pe,pe=Re.parentNode}Re=ge}o=F===-1||W===-1?null:{start:F,end:W}}else o=null}o=o||{start:0,end:0}}else o=null;for(Rv={focusedElem:n,selectionRange:o},lp=!1,di=r;di!==null;)if(r=di,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,di=n;else for(;di!==null;){switch(r=di,m=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)p=n[o],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=r,p=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var rt=el(o.type,p);n=u.getSnapshotBeforeUpdate(rt,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(_t){hn(o,o.return,_t)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,o=n.nodeType,o===9)Dv(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Dv(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,di=n;break}di=r.return}}function BE(n,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:as(n,o),u&4&&af(5,o);break;case 1:if(as(n,o),u&4)if(n=o.stateNode,r===null)try{n.componentDidMount()}catch(E){hn(o,o.return,E)}else{var p=el(o.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(p,r,n.__reactInternalSnapshotBeforeUpdate)}catch(E){hn(o,o.return,E)}}u&64&&NE(o),u&512&&sf(o,o.return);break;case 3:if(as(n,o),u&64&&(n=o.updateQueue,n!==null)){if(r=null,o.child!==null)switch(o.child.tag){case 27:case 5:r=o.child.stateNode;break;case 1:r=o.child.stateNode}try{bb(n,r)}catch(E){hn(o,o.return,E)}}break;case 27:r===null&&u&4&&IE(o);case 26:case 5:as(n,o),r===null&&u&4&&PE(o),u&512&&sf(o,o.return);break;case 12:as(n,o);break;case 31:as(n,o),u&4&&VE(n,o);break;case 13:as(n,o),u&4&&kE(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=nP.bind(null,o),MP(n,o))));break;case 22:if(u=o.memoizedState!==null||is,!u){r=r!==null&&r.memoizedState!==null||ti,p=is;var m=ti;is=u,(ti=r)&&!m?ss(n,o,(o.subtreeFlags&8772)!==0):as(n,o),is=p,ti=m}break;case 30:break;default:as(n,o)}}function HE(n){var r=n.alternate;r!==null&&(n.alternate=null,HE(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Pn(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Un=null,$i=!1;function rs(n,r,o){for(o=o.child;o!==null;)GE(n,r,o),o=o.sibling}function GE(n,r,o){if(_e&&typeof _e.onCommitFiberUnmount=="function")try{_e.onCommitFiberUnmount(me,o)}catch{}switch(o.tag){case 26:ti||Ra(o,r),rs(n,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ti||Ra(o,r);var u=Un,p=$i;$s(o.type)&&(Un=o.stateNode,$i=!1),rs(n,r,o),mf(o.stateNode),Un=u,$i=p;break;case 5:ti||Ra(o,r);case 6:if(u=Un,p=$i,Un=null,rs(n,r,o),Un=u,$i=p,Un!==null)if($i)try{(Un.nodeType===9?Un.body:Un.nodeName==="HTML"?Un.ownerDocument.body:Un).removeChild(o.stateNode)}catch(m){hn(o,r,m)}else try{Un.removeChild(o.stateNode)}catch(m){hn(o,r,m)}break;case 18:Un!==null&&($i?(n=Un,NT(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),Cu(n)):NT(Un,o.stateNode));break;case 4:u=Un,p=$i,Un=o.stateNode.containerInfo,$i=!0,rs(n,r,o),Un=u,$i=p;break;case 0:case 11:case 14:case 15:qs(2,o,r),ti||qs(4,o,r),rs(n,r,o);break;case 1:ti||(Ra(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&OE(o,r,u)),rs(n,r,o);break;case 21:rs(n,r,o);break;case 22:ti=(u=ti)||o.memoizedState!==null,rs(n,r,o),ti=u;break;default:rs(n,r,o)}}function VE(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{Cu(n)}catch(o){hn(r,r.return,o)}}}function kE(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{Cu(n)}catch(o){hn(r,r.return,o)}}function ZO(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new zE),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new zE),r;default:throw Error(i(435,n.tag))}}function Vd(n,r){var o=ZO(n);r.forEach(function(u){if(!o.has(u)){o.add(u);var p=iP.bind(null,n,u);u.then(p,p)}})}function er(n,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var p=o[u],m=n,E=r,F=E;e:for(;F!==null;){switch(F.tag){case 27:if($s(F.type)){Un=F.stateNode,$i=!1;break e}break;case 5:Un=F.stateNode,$i=!1;break e;case 3:case 4:Un=F.stateNode.containerInfo,$i=!0;break e}F=F.return}if(Un===null)throw Error(i(160));GE(m,E,p),Un=null,$i=!1,m=p.alternate,m!==null&&(m.return=null),p.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)XE(r,n),r=r.sibling}var oa=null;function XE(n,r){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:er(r,n),tr(n),u&4&&(qs(3,n,n.return),af(3,n),qs(5,n,n.return));break;case 1:er(r,n),tr(n),u&512&&(ti||o===null||Ra(o,o.return)),u&64&&is&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var p=oa;if(er(r,n),tr(n),u&512&&(ti||o===null||Ra(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,p=p.ownerDocument||p;t:switch(u){case"title":m=p.getElementsByTagName("title")[0],(!m||m[Mn]||m[Et]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=p.createElement(u),p.head.insertBefore(m,p.querySelector("head > title"))),yi(m,u,o),m[Et]=n,Pt(m),u=m;break e;case"link":var E=XT("link","href",p).get(u+(o.href||""));if(E){for(var F=0;F<E.length;F++)if(m=E[F],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(F,1);break t}}m=p.createElement(u),yi(m,u,o),p.head.appendChild(m);break;case"meta":if(E=XT("meta","content",p).get(u+(o.content||""))){for(F=0;F<E.length;F++)if(m=E[F],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(F,1);break t}}m=p.createElement(u),yi(m,u,o),p.head.appendChild(m);break;default:throw Error(i(468,u))}m[Et]=n,Pt(m),u=m}n.stateNode=u}else WT(p,n.type,n.stateNode);else n.stateNode=kT(p,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?WT(p,n.type,n.stateNode):kT(p,u,n.memoizedProps)):u===null&&n.stateNode!==null&&nv(n,n.memoizedProps,o.memoizedProps)}break;case 27:er(r,n),tr(n),u&512&&(ti||o===null||Ra(o,o.return)),o!==null&&u&4&&nv(n,n.memoizedProps,o.memoizedProps);break;case 5:if(er(r,n),tr(n),u&512&&(ti||o===null||Ra(o,o.return)),n.flags&32){p=n.stateNode;try{xr(p,"")}catch(rt){hn(n,n.return,rt)}}u&4&&n.stateNode!=null&&(p=n.memoizedProps,nv(n,p,o!==null?o.memoizedProps:p)),u&1024&&(av=!0);break;case 6:if(er(r,n),tr(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(rt){hn(n,n.return,rt)}}break;case 3:if(rp=null,p=oa,oa=np(r.containerInfo),er(r,n),oa=p,tr(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Cu(r.containerInfo)}catch(rt){hn(n,n.return,rt)}av&&(av=!1,WE(n));break;case 4:u=oa,oa=np(n.stateNode.containerInfo),er(r,n),tr(n),oa=u;break;case 12:er(r,n),tr(n);break;case 31:er(r,n),tr(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Vd(n,u)));break;case 13:er(r,n),tr(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Xd=Ee()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Vd(n,u)));break;case 22:p=n.memoizedState!==null;var W=o!==null&&o.memoizedState!==null,fe=is,Te=ti;if(is=fe||p,ti=Te||W,er(r,n),ti=Te,is=fe,tr(n),u&8192)e:for(r=n.stateNode,r._visibility=p?r._visibility&-2:r._visibility|1,p&&(o===null||W||is||ti||tl(n)),o=null,r=n;;){if(r.tag===5||r.tag===26){if(o===null){W=o=r;try{if(m=W.stateNode,p)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{F=W.stateNode;var Re=W.memoizedProps.style,pe=Re!=null&&Re.hasOwnProperty("display")?Re.display:null;F.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(rt){hn(W,W.return,rt)}}}else if(r.tag===6){if(o===null){W=r;try{W.stateNode.nodeValue=p?"":W.memoizedProps}catch(rt){hn(W,W.return,rt)}}}else if(r.tag===18){if(o===null){W=r;try{var ge=W.stateNode;p?OT(ge,!0):OT(W.stateNode,!1)}catch(rt){hn(W,W.return,rt)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,Vd(n,o))));break;case 19:er(r,n),tr(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,Vd(n,u)));break;case 30:break;case 21:break;default:er(r,n),tr(n)}}function tr(n){var r=n.flags;if(r&2){try{for(var o,u=n.return;u!==null;){if(FE(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var p=o.stateNode,m=iv(n);Gd(n,m,p);break;case 5:var E=o.stateNode;o.flags&32&&(xr(E,""),o.flags&=-33);var F=iv(n);Gd(n,F,E);break;case 3:case 4:var W=o.stateNode.containerInfo,fe=iv(n);rv(n,fe,W);break;default:throw Error(i(161))}}catch(Te){hn(n,n.return,Te)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function WE(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;WE(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function as(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)BE(n,r.alternate,r),r=r.sibling}function tl(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:qs(4,r,r.return),tl(r);break;case 1:Ra(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&OE(r,r.return,o),tl(r);break;case 27:mf(r.stateNode);case 26:case 5:Ra(r,r.return),tl(r);break;case 22:r.memoizedState===null&&tl(r);break;case 30:tl(r);break;default:tl(r)}n=n.sibling}}function ss(n,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,p=n,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:ss(p,m,o),af(4,m);break;case 1:if(ss(p,m,o),u=m,p=u.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(fe){hn(u,u.return,fe)}if(u=m,p=u.updateQueue,p!==null){var F=u.stateNode;try{var W=p.shared.hiddenCallbacks;if(W!==null)for(p.shared.hiddenCallbacks=null,p=0;p<W.length;p++)Mb(W[p],F)}catch(fe){hn(u,u.return,fe)}}o&&E&64&&NE(m),sf(m,m.return);break;case 27:IE(m);case 26:case 5:ss(p,m,o),o&&u===null&&E&4&&PE(m),sf(m,m.return);break;case 12:ss(p,m,o);break;case 31:ss(p,m,o),o&&E&4&&VE(p,m);break;case 13:ss(p,m,o),o&&E&4&&kE(p,m);break;case 22:m.memoizedState===null&&ss(p,m,o),sf(m,m.return);break;case 30:break;default:ss(p,m,o)}r=r.sibling}}function sv(n,r){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Wc(o))}function ov(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Wc(n))}function la(n,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)qE(n,r,o,u),r=r.sibling}function qE(n,r,o,u){var p=r.flags;switch(r.tag){case 0:case 11:case 15:la(n,r,o,u),p&2048&&af(9,r);break;case 1:la(n,r,o,u);break;case 3:la(n,r,o,u),p&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Wc(n)));break;case 12:if(p&2048){la(n,r,o,u),n=r.stateNode;try{var m=r.memoizedProps,E=m.id,F=m.onPostCommit;typeof F=="function"&&F(E,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(W){hn(r,r.return,W)}}else la(n,r,o,u);break;case 31:la(n,r,o,u);break;case 13:la(n,r,o,u);break;case 23:break;case 22:m=r.stateNode,E=r.alternate,r.memoizedState!==null?m._visibility&2?la(n,r,o,u):of(n,r):m._visibility&2?la(n,r,o,u):(m._visibility|=2,_u(n,r,o,u,(r.subtreeFlags&10256)!==0||!1)),p&2048&&sv(E,r);break;case 24:la(n,r,o,u),p&2048&&ov(r.alternate,r);break;default:la(n,r,o,u)}}function _u(n,r,o,u,p){for(p=p&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=n,E=r,F=o,W=u,fe=E.flags;switch(E.tag){case 0:case 11:case 15:_u(m,E,F,W,p),af(8,E);break;case 23:break;case 22:var Te=E.stateNode;E.memoizedState!==null?Te._visibility&2?_u(m,E,F,W,p):of(m,E):(Te._visibility|=2,_u(m,E,F,W,p)),p&&fe&2048&&sv(E.alternate,E);break;case 24:_u(m,E,F,W,p),p&&fe&2048&&ov(E.alternate,E);break;default:_u(m,E,F,W,p)}r=r.sibling}}function of(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=n,u=r,p=u.flags;switch(u.tag){case 22:of(o,u),p&2048&&sv(u.alternate,u);break;case 24:of(o,u),p&2048&&ov(u.alternate,u);break;default:of(o,u)}r=r.sibling}}var lf=8192;function vu(n,r,o){if(n.subtreeFlags&lf)for(n=n.child;n!==null;)YE(n,r,o),n=n.sibling}function YE(n,r,o){switch(n.tag){case 26:vu(n,r,o),n.flags&lf&&n.memoizedState!==null&&OP(o,oa,n.memoizedState,n.memoizedProps);break;case 5:vu(n,r,o);break;case 3:case 4:var u=oa;oa=np(n.stateNode.containerInfo),vu(n,r,o),oa=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=lf,lf=16777216,vu(n,r,o),lf=u):vu(n,r,o));break;default:vu(n,r,o)}}function ZE(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function uf(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];di=u,jE(u,n)}ZE(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)KE(n),n=n.sibling}function KE(n){switch(n.tag){case 0:case 11:case 15:uf(n),n.flags&2048&&qs(9,n,n.return);break;case 3:uf(n);break;case 12:uf(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,kd(n)):uf(n);break;default:uf(n)}}function kd(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];di=u,jE(u,n)}ZE(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:qs(8,r,r.return),kd(r);break;case 22:o=r.stateNode,o._visibility&2&&(o._visibility&=-3,kd(r));break;default:kd(r)}n=n.sibling}}function jE(n,r){for(;di!==null;){var o=di;switch(o.tag){case 0:case 11:case 15:qs(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Wc(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,di=u;else e:for(o=n;di!==null;){u=di;var p=u.sibling,m=u.return;if(HE(u),u===o){di=null;break e}if(p!==null){p.return=m,di=p;break e}di=m}}}var KO={getCacheForType:function(n){var r=vi(Jn),o=r.data.get(n);return o===void 0&&(o=n(),r.data.set(n,o)),o},cacheSignal:function(){return vi(Jn).controller.signal}},jO=typeof WeakMap=="function"?WeakMap:Map,nn=0,Sn=null,Vt=null,Xt=0,fn=0,Er=null,Ys=!1,xu=!1,lv=!1,os=0,Hn=0,Zs=0,nl=0,uv=0,Tr=0,yu=0,cf=null,nr=null,cv=!1,Xd=0,QE=0,Wd=1/0,qd=null,Ks=null,li=0,js=null,Su=null,ls=0,fv=0,hv=null,JE=null,ff=0,dv=null;function Ar(){return(nn&2)!==0&&Xt!==0?Xt&-Xt:z.T!==null?xv():Lt()}function $E(){if(Tr===0)if((Xt&536870912)===0||Kt){var n=St;St<<=1,(St&3932160)===0&&(St=262144),Tr=n}else Tr=536870912;return n=Mr.current,n!==null&&(n.flags|=32),Tr}function ir(n,r,o){(n===Sn&&(fn===2||fn===9)||n.cancelPendingCommit!==null)&&(Mu(n,0),Qs(n,Xt,Tr,!1)),Pe(n,o),((nn&2)===0||n!==Sn)&&(n===Sn&&((nn&2)===0&&(nl|=o),Hn===4&&Qs(n,Xt,Tr,!1)),Ca(n))}function eT(n,r,o){if((nn&6)!==0)throw Error(i(327));var u=!o&&(r&127)===0&&(r&n.expiredLanes)===0||qe(n,r),p=u?$O(n,r):mv(n,r,!0),m=u;do{if(p===0){xu&&!u&&Qs(n,r,0,!1);break}else{if(o=n.current.alternate,m&&!QO(o)){p=mv(n,r,!1),m=!1;continue}if(p===2){if(m=r,n.errorRecoveryDisabledLanes&m)var E=0;else E=n.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var F=n;p=cf;var W=F.current.memoizedState.isDehydrated;if(W&&(Mu(F,E).flags|=256),E=mv(F,E,!1),E!==2){if(lv&&!W){F.errorRecoveryDisabledLanes|=m,nl|=m,p=4;break e}m=nr,nr=p,m!==null&&(nr===null?nr=m:nr.push.apply(nr,m))}p=E}if(m=!1,p!==2)continue}}if(p===1){Mu(n,0),Qs(n,r,0,!0);break}e:{switch(u=n,m=p,m){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Qs(u,r,Tr,!Ys);break e;case 2:nr=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(p=Xd+300-Ee(),10<p)){if(Qs(u,r,Tr,!Ys),xe(u,0,!0)!==0)break e;ls=r,u.timeoutHandle=UT(tT.bind(null,u,o,nr,qd,cv,r,Tr,nl,yu,Ys,m,"Throttled",-0,0),p);break e}tT(u,o,nr,qd,cv,r,Tr,nl,yu,Ys,m,null,-0,0)}}break}while(!0);Ca(n)}function tT(n,r,o,u,p,m,E,F,W,fe,Te,Re,pe,ge){if(n.timeoutHandle=-1,Re=r.subtreeFlags,Re&8192||(Re&16785408)===16785408){Re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},YE(r,m,Re);var rt=(m&62914560)===m?Xd-Ee():(m&4194048)===m?QE-Ee():0;if(rt=PP(Re,rt),rt!==null){ls=m,n.cancelPendingCommit=rt(uT.bind(null,n,r,m,o,u,p,E,F,W,Te,Re,null,pe,ge)),Qs(n,m,E,!fe);return}}uT(n,r,m,o,u,p,E,F,W)}function QO(n){for(var r=n;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var p=o[u],m=p.getSnapshot;p=p.value;try{if(!yr(m(),p))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qs(n,r,o,u){r&=~uv,r&=~nl,n.suspendedLanes|=r,n.pingedLanes&=~r,u&&(n.warmLanes|=r),u=n.expirationTimes;for(var p=r;0<p;){var m=31-Ve(p),E=1<<m;u[m]=-1,p&=~E}o!==0&&Ne(n,o,r)}function Yd(){return(nn&6)===0?(hf(0),!1):!0}function pv(){if(Vt!==null){if(fn===0)var n=Vt.return;else n=Vt,Qa=Yo=null,D_(n),hu=null,Yc=0,n=Vt;for(;n!==null;)LE(n.alternate,n),n=n.return;Vt=null}}function Mu(n,r){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,_P(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),ls=0,pv(),Sn=n,Vt=o=Ka(n.current,null),Xt=r,fn=0,Er=null,Ys=!1,xu=qe(n,r),lv=!1,yu=Tr=uv=nl=Zs=Hn=0,nr=cf=null,cv=!1,(r&8)!==0&&(r|=r&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=r;0<u;){var p=31-Ve(u),m=1<<p;r|=n[p],u&=~m}return os=r,pd(),o}function nT(n,r){Ut=null,z.H=tf,r===fu||r===Md?(r=vb(),fn=3):r===v_?(r=vb(),fn=4):fn=r===q_?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Er=r,Vt===null&&(Hn=1,Fd(n,Hr(r,n.current)))}function iT(){var n=Mr.current;return n===null?!0:(Xt&4194048)===Xt?Xr===null:(Xt&62914560)===Xt||(Xt&536870912)!==0?n===Xr:!1}function rT(){var n=z.H;return z.H=tf,n===null?tf:n}function aT(){var n=z.A;return z.A=KO,n}function Zd(){Hn=4,Ys||(Xt&4194048)!==Xt&&Mr.current!==null||(xu=!0),(Zs&134217727)===0&&(nl&134217727)===0||Sn===null||Qs(Sn,Xt,Tr,!1)}function mv(n,r,o){var u=nn;nn|=2;var p=rT(),m=aT();(Sn!==n||Xt!==r)&&(qd=null,Mu(n,r)),r=!1;var E=Hn;e:do try{if(fn!==0&&Vt!==null){var F=Vt,W=Er;switch(fn){case 8:pv(),E=6;break e;case 3:case 2:case 9:case 6:Mr.current===null&&(r=!0);var fe=fn;if(fn=0,Er=null,bu(n,F,W,fe),o&&xu){E=0;break e}break;default:fe=fn,fn=0,Er=null,bu(n,F,W,fe)}}JO(),E=Hn;break}catch(Te){nT(n,Te)}while(!0);return r&&n.shellSuspendCounter++,Qa=Yo=null,nn=u,z.H=p,z.A=m,Vt===null&&(Sn=null,Xt=0,pd()),E}function JO(){for(;Vt!==null;)sT(Vt)}function $O(n,r){var o=nn;nn|=2;var u=rT(),p=aT();Sn!==n||Xt!==r?(qd=null,Wd=Ee()+500,Mu(n,r)):xu=qe(n,r);e:do try{if(fn!==0&&Vt!==null){r=Vt;var m=Er;t:switch(fn){case 1:fn=0,Er=null,bu(n,r,m,1);break;case 2:case 9:if(gb(m)){fn=0,Er=null,oT(r);break}r=function(){fn!==2&&fn!==9||Sn!==n||(fn=7),Ca(n)},m.then(r,r);break e;case 3:fn=7;break e;case 4:fn=5;break e;case 7:gb(m)?(fn=0,Er=null,oT(r)):(fn=0,Er=null,bu(n,r,m,7));break;case 5:var E=null;switch(Vt.tag){case 26:E=Vt.memoizedState;case 5:case 27:var F=Vt;if(E?qT(E):F.stateNode.complete){fn=0,Er=null;var W=F.sibling;if(W!==null)Vt=W;else{var fe=F.return;fe!==null?(Vt=fe,Kd(fe)):Vt=null}break t}}fn=0,Er=null,bu(n,r,m,5);break;case 6:fn=0,Er=null,bu(n,r,m,6);break;case 8:pv(),Hn=6;break e;default:throw Error(i(462))}}eP();break}catch(Te){nT(n,Te)}while(!0);return Qa=Yo=null,z.H=u,z.A=p,nn=o,Vt!==null?0:(Sn=null,Xt=0,pd(),Hn)}function eP(){for(;Vt!==null&&!ut();)sT(Vt)}function sT(n){var r=DE(n.alternate,n,os);n.memoizedProps=n.pendingProps,r===null?Kd(n):Vt=r}function oT(n){var r=n,o=r.alternate;switch(r.tag){case 15:case 0:r=EE(o,r,r.pendingProps,r.type,void 0,Xt);break;case 11:r=EE(o,r,r.pendingProps,r.type.render,r.ref,Xt);break;case 5:D_(r);default:LE(o,r),r=Vt=ab(r,os),r=DE(o,r,os)}n.memoizedProps=n.pendingProps,r===null?Kd(n):Vt=r}function bu(n,r,o,u){Qa=Yo=null,D_(r),hu=null,Yc=0;var p=r.return;try{if(VO(n,p,r,o,Xt)){Hn=1,Fd(n,Hr(o,n.current)),Vt=null;return}}catch(m){if(p!==null)throw Vt=p,m;Hn=1,Fd(n,Hr(o,n.current)),Vt=null;return}r.flags&32768?(Kt||u===1?n=!0:xu||(Xt&536870912)!==0?n=!1:(Ys=n=!0,(u===2||u===9||u===3||u===6)&&(u=Mr.current,u!==null&&u.tag===13&&(u.flags|=16384))),lT(r,n)):Kd(r)}function Kd(n){var r=n;do{if((r.flags&32768)!==0){lT(r,Ys);return}n=r.return;var o=WO(r.alternate,r,os);if(o!==null){Vt=o;return}if(r=r.sibling,r!==null){Vt=r;return}Vt=r=n}while(r!==null);Hn===0&&(Hn=5)}function lT(n,r){do{var o=qO(n.alternate,n);if(o!==null){o.flags&=32767,Vt=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(n=n.sibling,n!==null)){Vt=n;return}Vt=n=o}while(n!==null);Hn=6,Vt=null}function uT(n,r,o,u,p,m,E,F,W){n.cancelPendingCommit=null;do jd();while(li!==0);if((nn&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(m=r.lanes|r.childLanes,m|=i_,ht(n,o,m,E,F,W),n===Sn&&(Vt=Sn=null,Xt=0),Su=r,js=n,ls=o,fv=m,hv=p,JE=u,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,rP(K,function(){return pT(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||u){u=z.T,z.T=null,p=G.p,G.p=2,E=nn,nn|=4;try{YO(n,r,o)}finally{nn=E,G.p=p,z.T=u}}li=1,cT(),fT(),hT()}}function cT(){if(li===1){li=0;var n=js,r=Su,o=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||o){o=z.T,z.T=null;var u=G.p;G.p=2;var p=nn;nn|=4;try{XE(r,n);var m=Rv,E=j1(n.containerInfo),F=m.focusedElem,W=m.selectionRange;if(E!==F&&F&&F.ownerDocument&&K1(F.ownerDocument.documentElement,F)){if(W!==null&&Jg(F)){var fe=W.start,Te=W.end;if(Te===void 0&&(Te=fe),"selectionStart"in F)F.selectionStart=fe,F.selectionEnd=Math.min(Te,F.value.length);else{var Re=F.ownerDocument||document,pe=Re&&Re.defaultView||window;if(pe.getSelection){var ge=pe.getSelection(),rt=F.textContent.length,_t=Math.min(W.start,rt),gn=W.end===void 0?_t:Math.min(W.end,rt);!ge.extend&&_t>gn&&(E=gn,gn=_t,_t=E);var ie=Z1(F,_t),Q=Z1(F,gn);if(ie&&Q&&(ge.rangeCount!==1||ge.anchorNode!==ie.node||ge.anchorOffset!==ie.offset||ge.focusNode!==Q.node||ge.focusOffset!==Q.offset)){var le=Re.createRange();le.setStart(ie.node,ie.offset),ge.removeAllRanges(),_t>gn?(ge.addRange(le),ge.extend(Q.node,Q.offset)):(le.setEnd(Q.node,Q.offset),ge.addRange(le))}}}}for(Re=[],ge=F;ge=ge.parentNode;)ge.nodeType===1&&Re.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof F.focus=="function"&&F.focus(),F=0;F<Re.length;F++){var Ae=Re[F];Ae.element.scrollLeft=Ae.left,Ae.element.scrollTop=Ae.top}}lp=!!Av,Rv=Av=null}finally{nn=p,G.p=u,z.T=o}}n.current=r,li=2}}function fT(){if(li===2){li=0;var n=js,r=Su,o=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||o){o=z.T,z.T=null;var u=G.p;G.p=2;var p=nn;nn|=4;try{BE(n,r.alternate,r)}finally{nn=p,G.p=u,z.T=o}}li=3}}function hT(){if(li===4||li===3){li=0,Ct();var n=js,r=Su,o=ls,u=JE;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?li=5:(li=0,Su=js=null,dT(n,n.pendingLanes));var p=n.pendingLanes;if(p===0&&(Ks=null),Cn(o),r=r.stateNode,_e&&typeof _e.onCommitFiberRoot=="function")try{_e.onCommitFiberRoot(me,r,void 0,(r.current.flags&128)===128)}catch{}if(u!==null){r=z.T,p=G.p,G.p=2,z.T=null;try{for(var m=n.onRecoverableError,E=0;E<u.length;E++){var F=u[E];m(F.value,{componentStack:F.stack})}}finally{z.T=r,G.p=p}}(ls&3)!==0&&jd(),Ca(n),p=n.pendingLanes,(o&261930)!==0&&(p&42)!==0?n===dv?ff++:(ff=0,dv=n):ff=0,hf(0)}}function dT(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Wc(r)))}function jd(){return cT(),fT(),hT(),pT()}function pT(){if(li!==5)return!1;var n=js,r=fv;fv=0;var o=Cn(ls),u=z.T,p=G.p;try{G.p=32>o?32:o,z.T=null,o=hv,hv=null;var m=js,E=ls;if(li=0,Su=js=null,ls=0,(nn&6)!==0)throw Error(i(331));var F=nn;if(nn|=4,KE(m.current),qE(m,m.current,E,o),nn=F,hf(0,!1),_e&&typeof _e.onPostCommitFiberRoot=="function")try{_e.onPostCommitFiberRoot(me,m)}catch{}return!0}finally{G.p=p,z.T=u,dT(n,r)}}function mT(n,r,o){r=Hr(o,r),r=W_(n.stateNode,r,2),n=ks(n,r,2),n!==null&&(Pe(n,2),Ca(n))}function hn(n,r,o){if(n.tag===3)mT(n,n,o);else for(;r!==null;){if(r.tag===3){mT(r,n,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ks===null||!Ks.has(u))){n=Hr(o,n),o=gE(2),u=ks(r,o,2),u!==null&&(_E(o,u,r,n),Pe(u,2),Ca(u));break}}r=r.return}}function gv(n,r,o){var u=n.pingCache;if(u===null){u=n.pingCache=new jO;var p=new Set;u.set(r,p)}else p=u.get(r),p===void 0&&(p=new Set,u.set(r,p));p.has(o)||(lv=!0,p.add(o),n=tP.bind(null,n,r,o),r.then(n,n))}function tP(n,r,o){var u=n.pingCache;u!==null&&u.delete(r),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,Sn===n&&(Xt&o)===o&&(Hn===4||Hn===3&&(Xt&62914560)===Xt&&300>Ee()-Xd?(nn&2)===0&&Mu(n,0):uv|=o,yu===Xt&&(yu=0)),Ca(n)}function gT(n,r){r===0&&(r=De()),n=Xo(n,r),n!==null&&(Pe(n,r),Ca(n))}function nP(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),gT(n,o)}function iP(n,r){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(o=p.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(r),gT(n,o)}function rP(n,r){return j(n,r)}var Qd=null,Eu=null,_v=!1,Jd=!1,vv=!1,Js=0;function Ca(n){n!==Eu&&n.next===null&&(Eu===null?Qd=Eu=n:Eu=Eu.next=n),Jd=!0,_v||(_v=!0,sP())}function hf(n,r){if(!vv&&Jd){vv=!0;do for(var o=!1,u=Qd;u!==null;){if(n!==0){var p=u.pendingLanes;if(p===0)var m=0;else{var E=u.suspendedLanes,F=u.pingedLanes;m=(1<<31-Ve(42|n)+1)-1,m&=p&~(E&~F),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,yT(u,m))}else m=Xt,m=xe(u,u===Sn?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||qe(u,m)||(o=!0,yT(u,m));u=u.next}while(o);vv=!1}}function aP(){_T()}function _T(){Jd=_v=!1;var n=0;Js!==0&&gP()&&(n=Js);for(var r=Ee(),o=null,u=Qd;u!==null;){var p=u.next,m=vT(u,r);m===0?(u.next=null,o===null?Qd=p:o.next=p,p===null&&(Eu=o)):(o=u,(n!==0||(m&3)!==0)&&(Jd=!0)),u=p}li!==0&&li!==5||hf(n),Js!==0&&(Js=0)}function vT(n,r){for(var o=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var E=31-Ve(m),F=1<<E,W=p[E];W===-1?((F&o)===0||(F&u)!==0)&&(p[E]=Ie(F,r)):W<=r&&(n.expiredLanes|=F),m&=~F}if(r=Sn,o=Xt,o=xe(n,n===r?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===r&&(fn===2||fn===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&vt(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||qe(n,o)){if(r=o&-o,r===n.callbackPriority)return r;switch(u!==null&&vt(u),Cn(o)){case 2:case 8:o=A;break;case 32:o=K;break;case 268435456:o=be;break;default:o=K}return u=xT.bind(null,n),o=j(o,u),n.callbackPriority=r,n.callbackNode=o,r}return u!==null&&u!==null&&vt(u),n.callbackPriority=2,n.callbackNode=null,2}function xT(n,r){if(li!==0&&li!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(jd()&&n.callbackNode!==o)return null;var u=Xt;return u=xe(n,n===Sn?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(eT(n,u,r),vT(n,Ee()),n.callbackNode!=null&&n.callbackNode===o?xT.bind(null,n):null)}function yT(n,r){if(jd())return null;eT(n,r,!0)}function sP(){vP(function(){(nn&6)!==0?j(D,aP):_T()})}function xv(){if(Js===0){var n=uu;n===0&&(n=mt,mt<<=1,(mt&261888)===0&&(mt=256)),Js=n}return Js}function ST(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:Ho(""+n)}function MT(n,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,n.id&&o.setAttribute("form",n.id),r.parentNode.insertBefore(o,r),n=new FormData(n),o.parentNode.removeChild(o),n}function oP(n,r,o,u,p){if(r==="submit"&&o&&o.stateNode===p){var m=ST((p[wt]||null).action),E=u.submitter;E&&(r=(r=E[wt]||null)?ST(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var F=new cd("action","action",null,u,p);n.push({event:F,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Js!==0){var W=E?MT(p,E):new FormData(p);B_(o,{pending:!0,data:W,method:p.method,action:m},null,W)}}else typeof m=="function"&&(F.preventDefault(),W=E?MT(p,E):new FormData(p),B_(o,{pending:!0,data:W,method:p.method,action:m},m,W))},currentTarget:p}]})}}for(var yv=0;yv<n_.length;yv++){var Sv=n_[yv],lP=Sv.toLowerCase(),uP=Sv[0].toUpperCase()+Sv.slice(1);sa(lP,"on"+uP)}sa($1,"onAnimationEnd"),sa(eb,"onAnimationIteration"),sa(tb,"onAnimationStart"),sa("dblclick","onDoubleClick"),sa("focusin","onFocus"),sa("focusout","onBlur"),sa(TO,"onTransitionRun"),sa(AO,"onTransitionStart"),sa(RO,"onTransitionCancel"),sa(nb,"onTransitionEnd"),ce("onMouseEnter",["mouseout","mouseover"]),ce("onMouseLeave",["mouseout","mouseover"]),ce("onPointerEnter",["pointerout","pointerover"]),ce("onPointerLeave",["pointerout","pointerover"]),$("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$("onBeforeInput",["compositionend","keypress","textInput","paste"]),$("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var df="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cP=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(df));function bT(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],p=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var F=u[E],W=F.instance,fe=F.currentTarget;if(F=F.listener,W!==m&&p.isPropagationStopped())break e;m=F,p.currentTarget=fe;try{m(p)}catch(Te){dd(Te)}p.currentTarget=null,m=W}else for(E=0;E<u.length;E++){if(F=u[E],W=F.instance,fe=F.currentTarget,F=F.listener,W!==m&&p.isPropagationStopped())break e;m=F,p.currentTarget=fe;try{m(p)}catch(Te){dd(Te)}p.currentTarget=null,m=W}}}}function kt(n,r){var o=r[jn];o===void 0&&(o=r[jn]=new Set);var u=n+"__bubble";o.has(u)||(ET(r,n,2,!1),o.add(u))}function Mv(n,r,o){var u=0;r&&(u|=4),ET(o,n,u,r)}var $d="_reactListening"+Math.random().toString(36).slice(2);function bv(n){if(!n[$d]){n[$d]=!0,Hi.forEach(function(o){o!=="selectionchange"&&(cP.has(o)||Mv(o,!1,n),Mv(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[$d]||(r[$d]=!0,Mv("selectionchange",!1,r))}}function ET(n,r,o,u){switch($T(r)){case 2:var p=zP;break;case 8:p=BP;break;default:p=zv}o=p.bind(null,r,o,n),p=void 0,!kg||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(r,o,{capture:!0,passive:p}):n.addEventListener(r,o,!0):p!==void 0?n.addEventListener(r,o,{passive:p}):n.addEventListener(r,o,!1)}function Ev(n,r,o,u,p){var m=u;if((r&1)===0&&(r&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var F=u.stateNode.containerInfo;if(F===p)break;if(E===4)for(E=u.return;E!==null;){var W=E.tag;if((W===3||W===4)&&E.stateNode.containerInfo===p)return;E=E.return}for(;F!==null;){if(E=bn(F),E===null)return;if(W=E.tag,W===5||W===6||W===26||W===27){u=m=E;continue e}F=F.parentNode}}u=u.return}w1(function(){var fe=m,Te=Gg(o),Re=[];e:{var pe=ib.get(n);if(pe!==void 0){var ge=cd,rt=n;switch(n){case"keypress":if(ld(o)===0)break e;case"keydown":case"keyup":ge=iO;break;case"focusin":rt="focus",ge=Yg;break;case"focusout":rt="blur",ge=Yg;break;case"beforeblur":case"afterblur":ge=Yg;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=L1;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=WN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=sO;break;case $1:case eb:case tb:ge=ZN;break;case nb:ge=lO;break;case"scroll":case"scrollend":ge=kN;break;case"wheel":ge=cO;break;case"copy":case"cut":case"paste":ge=jN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=O1;break;case"toggle":case"beforetoggle":ge=hO}var _t=(r&4)!==0,gn=!_t&&(n==="scroll"||n==="scrollend"),ie=_t?pe!==null?pe+"Capture":null:pe;_t=[];for(var Q=fe,le;Q!==null;){var Ae=Q;if(le=Ae.stateNode,Ae=Ae.tag,Ae!==5&&Ae!==26&&Ae!==27||le===null||ie===null||(Ae=Oc(Q,ie),Ae!=null&&_t.push(pf(Q,Ae,le))),gn)break;Q=Q.return}0<_t.length&&(pe=new ge(pe,rt,null,o,Te),Re.push({event:pe,listeners:_t}))}}if((r&7)===0){e:{if(pe=n==="mouseover"||n==="pointerover",ge=n==="mouseout"||n==="pointerout",pe&&o!==Hg&&(rt=o.relatedTarget||o.fromElement)&&(bn(rt)||rt[Ht]))break e;if((ge||pe)&&(pe=Te.window===Te?Te:(pe=Te.ownerDocument)?pe.defaultView||pe.parentWindow:window,ge?(rt=o.relatedTarget||o.toElement,ge=fe,rt=rt?bn(rt):null,rt!==null&&(gn=l(rt),_t=rt.tag,rt!==gn||_t!==5&&_t!==27&&_t!==6)&&(rt=null)):(ge=null,rt=fe),ge!==rt)){if(_t=L1,Ae="onMouseLeave",ie="onMouseEnter",Q="mouse",(n==="pointerout"||n==="pointerover")&&(_t=O1,Ae="onPointerLeave",ie="onPointerEnter",Q="pointer"),gn=ge==null?pe:zr(ge),le=rt==null?pe:zr(rt),pe=new _t(Ae,Q+"leave",ge,o,Te),pe.target=gn,pe.relatedTarget=le,Ae=null,bn(Te)===fe&&(_t=new _t(ie,Q+"enter",rt,o,Te),_t.target=le,_t.relatedTarget=gn,Ae=_t),gn=Ae,ge&&rt)t:{for(_t=fP,ie=ge,Q=rt,le=0,Ae=ie;Ae;Ae=_t(Ae))le++;Ae=0;for(var pt=Q;pt;pt=_t(pt))Ae++;for(;0<le-Ae;)ie=_t(ie),le--;for(;0<Ae-le;)Q=_t(Q),Ae--;for(;le--;){if(ie===Q||Q!==null&&ie===Q.alternate){_t=ie;break t}ie=_t(ie),Q=_t(Q)}_t=null}else _t=null;ge!==null&&TT(Re,pe,ge,_t,!1),rt!==null&&gn!==null&&TT(Re,gn,rt,_t,!0)}}e:{if(pe=fe?zr(fe):window,ge=pe.nodeName&&pe.nodeName.toLowerCase(),ge==="select"||ge==="input"&&pe.type==="file")var $t=V1;else if(H1(pe))if(k1)$t=MO;else{$t=yO;var lt=xO}else ge=pe.nodeName,!ge||ge.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?fe&&an(fe.elementType)&&($t=V1):$t=SO;if($t&&($t=$t(n,fe))){G1(Re,$t,o,Te);break e}lt&&lt(n,pe,fe),n==="focusout"&&fe&&pe.type==="number"&&fe.memoizedProps.value!=null&&Gt(pe,"number",pe.value)}switch(lt=fe?zr(fe):window,n){case"focusin":(H1(lt)||lt.contentEditable==="true")&&(tu=lt,$g=fe,Vc=null);break;case"focusout":Vc=$g=tu=null;break;case"mousedown":e_=!0;break;case"contextmenu":case"mouseup":case"dragend":e_=!1,Q1(Re,o,Te);break;case"selectionchange":if(EO)break;case"keydown":case"keyup":Q1(Re,o,Te)}var Nt;if(Kg)e:{switch(n){case"compositionstart":var Wt="onCompositionStart";break e;case"compositionend":Wt="onCompositionEnd";break e;case"compositionupdate":Wt="onCompositionUpdate";break e}Wt=void 0}else eu?z1(n,o)&&(Wt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Wt="onCompositionStart");Wt&&(P1&&o.locale!=="ko"&&(eu||Wt!=="onCompositionStart"?Wt==="onCompositionEnd"&&eu&&(Nt=D1()):(Fs=Te,Xg="value"in Fs?Fs.value:Fs.textContent,eu=!0)),lt=ep(fe,Wt),0<lt.length&&(Wt=new N1(Wt,n,null,o,Te),Re.push({event:Wt,listeners:lt}),Nt?Wt.data=Nt:(Nt=B1(o),Nt!==null&&(Wt.data=Nt)))),(Nt=pO?mO(n,o):gO(n,o))&&(Wt=ep(fe,"onBeforeInput"),0<Wt.length&&(lt=new N1("onBeforeInput","beforeinput",null,o,Te),Re.push({event:lt,listeners:Wt}),lt.data=Nt)),oP(Re,n,fe,o,Te)}bT(Re,r)})}function pf(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ep(n,r){for(var o=r+"Capture",u=[];n!==null;){var p=n,m=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||m===null||(p=Oc(n,o),p!=null&&u.unshift(pf(n,p,m)),p=Oc(n,r),p!=null&&u.push(pf(n,p,m))),n.tag===3)return u;n=n.return}return[]}function fP(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function TT(n,r,o,u,p){for(var m=r._reactName,E=[];o!==null&&o!==u;){var F=o,W=F.alternate,fe=F.stateNode;if(F=F.tag,W!==null&&W===u)break;F!==5&&F!==26&&F!==27||fe===null||(W=fe,p?(fe=Oc(o,m),fe!=null&&E.unshift(pf(o,fe,W))):p||(fe=Oc(o,m),fe!=null&&E.push(pf(o,fe,W)))),o=o.return}E.length!==0&&n.push({event:r,listeners:E})}var hP=/\r\n?/g,dP=/\u0000|\uFFFD/g;function AT(n){return(typeof n=="string"?n:""+n).replace(hP,`
`).replace(dP,"")}function RT(n,r){return r=AT(r),AT(n)===r}function mn(n,r,o,u,p,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||xr(n,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&xr(n,""+u);break;case"className":it(n,"class",u);break;case"tabIndex":it(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":it(n,o,u);break;case"style":aa(n,u,m);break;case"data":if(r!=="object"){it(n,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ho(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&mn(n,r,"name",p.name,p,null),mn(n,r,"formEncType",p.formEncType,p,null),mn(n,r,"formMethod",p.formMethod,p,null),mn(n,r,"formTarget",p.formTarget,p,null)):(mn(n,r,"encType",p.encType,p,null),mn(n,r,"method",p.method,p,null),mn(n,r,"target",p.target,p,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=Ho(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Ya);break;case"onScroll":u!=null&&kt("scroll",n);break;case"onScrollEnd":u!=null&&kt("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=Ho(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":kt("beforetoggle",n),kt("toggle",n),Ze(n,"popover",u);break;case"xlinkActuate":$e(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":$e(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":$e(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":$e(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":$e(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":$e(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":$e(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":$e(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":$e(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Ze(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=Ea.get(o)||o,Ze(n,o,u))}}function Tv(n,r,o,u,p,m){switch(o){case"style":aa(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(p.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?xr(n,u):(typeof u=="number"||typeof u=="bigint")&&xr(n,""+u);break;case"onScroll":u!=null&&kt("scroll",n);break;case"onScrollEnd":u!=null&&kt("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!N.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(p=o.endsWith("Capture"),r=o.slice(2,p?o.length-7:void 0),m=n[wt]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(r,m,p),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(r,u,p);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Ze(n,o,u)}}}function yi(n,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":kt("error",n),kt("load",n);var u=!1,p=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:mn(n,r,m,E,o,null)}}p&&mn(n,r,"srcSet",o.srcSet,o,null),u&&mn(n,r,"src",o.src,o,null);return;case"input":kt("invalid",n);var F=m=E=p=null,W=null,fe=null;for(u in o)if(o.hasOwnProperty(u)){var Te=o[u];if(Te!=null)switch(u){case"name":p=Te;break;case"type":E=Te;break;case"checked":W=Te;break;case"defaultChecked":fe=Te;break;case"value":m=Te;break;case"defaultValue":F=Te;break;case"children":case"dangerouslySetInnerHTML":if(Te!=null)throw Error(i(137,r));break;default:mn(n,r,u,Te,o,null)}}Ui(n,m,F,W,fe,E,p,!1);return;case"select":kt("invalid",n),u=E=m=null;for(p in o)if(o.hasOwnProperty(p)&&(F=o[p],F!=null))switch(p){case"value":m=F;break;case"defaultValue":E=F;break;case"multiple":u=F;default:mn(n,r,p,F,o,null)}r=m,o=E,n.multiple=!!u,r!=null?oi(n,!!u,r,!1):o!=null&&oi(n,!!u,o,!0);return;case"textarea":kt("invalid",n),m=p=u=null;for(E in o)if(o.hasOwnProperty(E)&&(F=o[E],F!=null))switch(E){case"value":u=F;break;case"defaultValue":p=F;break;case"children":m=F;break;case"dangerouslySetInnerHTML":if(F!=null)throw Error(i(91));break;default:mn(n,r,E,F,o,null)}ra(n,u,p,m);return;case"option":for(W in o)if(o.hasOwnProperty(W)&&(u=o[W],u!=null))switch(W){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:mn(n,r,W,u,o,null)}return;case"dialog":kt("beforetoggle",n),kt("toggle",n),kt("cancel",n),kt("close",n);break;case"iframe":case"object":kt("load",n);break;case"video":case"audio":for(u=0;u<df.length;u++)kt(df[u],n);break;case"image":kt("error",n),kt("load",n);break;case"details":kt("toggle",n);break;case"embed":case"source":case"link":kt("error",n),kt("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in o)if(o.hasOwnProperty(fe)&&(u=o[fe],u!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:mn(n,r,fe,u,o,null)}return;default:if(an(r)){for(Te in o)o.hasOwnProperty(Te)&&(u=o[Te],u!==void 0&&Tv(n,r,Te,u,o,void 0));return}}for(F in o)o.hasOwnProperty(F)&&(u=o[F],u!=null&&mn(n,r,F,u,o,null))}function pP(n,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,m=null,E=null,F=null,W=null,fe=null,Te=null;for(ge in o){var Re=o[ge];if(o.hasOwnProperty(ge)&&Re!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":W=Re;default:u.hasOwnProperty(ge)||mn(n,r,ge,null,u,Re)}}for(var pe in u){var ge=u[pe];if(Re=o[pe],u.hasOwnProperty(pe)&&(ge!=null||Re!=null))switch(pe){case"type":m=ge;break;case"name":p=ge;break;case"checked":fe=ge;break;case"defaultChecked":Te=ge;break;case"value":E=ge;break;case"defaultValue":F=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(i(137,r));break;default:ge!==Re&&mn(n,r,pe,ge,u,Re)}}Je(n,E,F,W,fe,Te,m,p);return;case"select":ge=E=F=pe=null;for(m in o)if(W=o[m],o.hasOwnProperty(m)&&W!=null)switch(m){case"value":break;case"multiple":ge=W;default:u.hasOwnProperty(m)||mn(n,r,m,null,u,W)}for(p in u)if(m=u[p],W=o[p],u.hasOwnProperty(p)&&(m!=null||W!=null))switch(p){case"value":pe=m;break;case"defaultValue":F=m;break;case"multiple":E=m;default:m!==W&&mn(n,r,p,m,u,W)}r=F,o=E,u=ge,pe!=null?oi(n,!!o,pe,!1):!!u!=!!o&&(r!=null?oi(n,!!o,r,!0):oi(n,!!o,o?[]:"",!1));return;case"textarea":ge=pe=null;for(F in o)if(p=o[F],o.hasOwnProperty(F)&&p!=null&&!u.hasOwnProperty(F))switch(F){case"value":break;case"children":break;default:mn(n,r,F,null,u,p)}for(E in u)if(p=u[E],m=o[E],u.hasOwnProperty(E)&&(p!=null||m!=null))switch(E){case"value":pe=p;break;case"defaultValue":ge=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(i(91));break;default:p!==m&&mn(n,r,E,p,u,m)}vr(n,pe,ge);return;case"option":for(var rt in o)if(pe=o[rt],o.hasOwnProperty(rt)&&pe!=null&&!u.hasOwnProperty(rt))switch(rt){case"selected":n.selected=!1;break;default:mn(n,r,rt,null,u,pe)}for(W in u)if(pe=u[W],ge=o[W],u.hasOwnProperty(W)&&pe!==ge&&(pe!=null||ge!=null))switch(W){case"selected":n.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:mn(n,r,W,pe,u,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var _t in o)pe=o[_t],o.hasOwnProperty(_t)&&pe!=null&&!u.hasOwnProperty(_t)&&mn(n,r,_t,null,u,pe);for(fe in u)if(pe=u[fe],ge=o[fe],u.hasOwnProperty(fe)&&pe!==ge&&(pe!=null||ge!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(i(137,r));break;default:mn(n,r,fe,pe,u,ge)}return;default:if(an(r)){for(var gn in o)pe=o[gn],o.hasOwnProperty(gn)&&pe!==void 0&&!u.hasOwnProperty(gn)&&Tv(n,r,gn,void 0,u,pe);for(Te in u)pe=u[Te],ge=o[Te],!u.hasOwnProperty(Te)||pe===ge||pe===void 0&&ge===void 0||Tv(n,r,Te,pe,u,ge);return}}for(var ie in o)pe=o[ie],o.hasOwnProperty(ie)&&pe!=null&&!u.hasOwnProperty(ie)&&mn(n,r,ie,null,u,pe);for(Re in u)pe=u[Re],ge=o[Re],!u.hasOwnProperty(Re)||pe===ge||pe==null&&ge==null||mn(n,r,Re,pe,u,ge)}function CT(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mP(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var p=o[u],m=p.transferSize,E=p.initiatorType,F=p.duration;if(m&&F&&CT(E)){for(E=0,F=p.responseEnd,u+=1;u<o.length;u++){var W=o[u],fe=W.startTime;if(fe>F)break;var Te=W.transferSize,Re=W.initiatorType;Te&&CT(Re)&&(W=W.responseEnd,E+=Te*(W<F?1:(F-fe)/(W-fe)))}if(--u,r+=8*(m+E)/(p.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Av=null,Rv=null;function tp(n){return n.nodeType===9?n:n.ownerDocument}function wT(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function DT(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Cv(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var wv=null;function gP(){var n=window.event;return n&&n.type==="popstate"?n===wv?!1:(wv=n,!0):(wv=null,!1)}var UT=typeof setTimeout=="function"?setTimeout:void 0,_P=typeof clearTimeout=="function"?clearTimeout:void 0,LT=typeof Promise=="function"?Promise:void 0,vP=typeof queueMicrotask=="function"?queueMicrotask:typeof LT<"u"?function(n){return LT.resolve(null).then(n).catch(xP)}:UT;function xP(n){setTimeout(function(){throw n})}function $s(n){return n==="head"}function NT(n,r){var o=r,u=0;do{var p=o.nextSibling;if(n.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(p),Cu(r);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")mf(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,mf(o);for(var m=o.firstChild;m;){var E=m.nextSibling,F=m.nodeName;m[Mn]||F==="SCRIPT"||F==="STYLE"||F==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=E}}else o==="body"&&mf(n.ownerDocument.body);o=p}while(o);Cu(r)}function OT(n,r){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?r?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(r?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function Dv(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Dv(o),Pn(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function yP(n,r,o,u){for(;n.nodeType===1;){var p=o;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[Mn])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==p.rel||n.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||n.getAttribute("title")!==(p.title==null?null:p.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(p.src==null?null:p.src)||n.getAttribute("type")!==(p.type==null?null:p.type)||n.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=p.name==null?null:""+p.name;if(p.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=Wr(n.nextSibling),n===null)break}return null}function SP(n,r,o){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=Wr(n.nextSibling),n===null))return null;return n}function PT(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=Wr(n.nextSibling),n===null))return null;return n}function Uv(n){return n.data==="$?"||n.data==="$~"}function Lv(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function MP(n,r){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||o.readyState!=="loading")r();else{var u=function(){r(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function Wr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Nv=null;function FT(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(r===0)return Wr(n.nextSibling);r--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||r++}n=n.nextSibling}return null}function IT(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(r===0)return n;r--}else o!=="/$"&&o!=="/&"||r++}n=n.previousSibling}return null}function zT(n,r,o){switch(r=tp(o),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function mf(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Pn(n)}var qr=new Map,BT=new Set;function np(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var us=G.d;G.d={f:bP,r:EP,D:TP,C:AP,L:RP,m:CP,X:DP,S:wP,M:UP};function bP(){var n=us.f(),r=Yd();return n||r}function EP(n){var r=Di(n);r!==null&&r.tag===5&&r.type==="form"?nE(r):us.r(n)}var Tu=typeof document>"u"?null:document;function HT(n,r,o){var u=Tu;if(u&&typeof r=="string"&&r){var p=un(r);p='link[rel="'+n+'"][href="'+p+'"]',typeof o=="string"&&(p+='[crossorigin="'+o+'"]'),BT.has(p)||(BT.add(p),n={rel:n,crossOrigin:o,href:r},u.querySelector(p)===null&&(r=u.createElement("link"),yi(r,"link",n),Pt(r),u.head.appendChild(r)))}}function TP(n){us.D(n),HT("dns-prefetch",n,null)}function AP(n,r){us.C(n,r),HT("preconnect",n,r)}function RP(n,r,o){us.L(n,r,o);var u=Tu;if(u&&n&&r){var p='link[rel="preload"][as="'+un(r)+'"]';r==="image"&&o&&o.imageSrcSet?(p+='[imagesrcset="'+un(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(p+='[imagesizes="'+un(o.imageSizes)+'"]')):p+='[href="'+un(n)+'"]';var m=p;switch(r){case"style":m=Au(n);break;case"script":m=Ru(n)}qr.has(m)||(n=v({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:n,as:r},o),qr.set(m,n),u.querySelector(p)!==null||r==="style"&&u.querySelector(gf(m))||r==="script"&&u.querySelector(_f(m))||(r=u.createElement("link"),yi(r,"link",n),Pt(r),u.head.appendChild(r)))}}function CP(n,r){us.m(n,r);var o=Tu;if(o&&n){var u=r&&typeof r.as=="string"?r.as:"script",p='link[rel="modulepreload"][as="'+un(u)+'"][href="'+un(n)+'"]',m=p;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Ru(n)}if(!qr.has(m)&&(n=v({rel:"modulepreload",href:n},r),qr.set(m,n),o.querySelector(p)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(_f(m)))return}u=o.createElement("link"),yi(u,"link",n),Pt(u),o.head.appendChild(u)}}}function wP(n,r,o){us.S(n,r,o);var u=Tu;if(u&&n){var p=En(u).hoistableStyles,m=Au(n);r=r||"default";var E=p.get(m);if(!E){var F={loading:0,preload:null};if(E=u.querySelector(gf(m)))F.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},o),(o=qr.get(m))&&Ov(n,o);var W=E=u.createElement("link");Pt(W),yi(W,"link",n),W._p=new Promise(function(fe,Te){W.onload=fe,W.onerror=Te}),W.addEventListener("load",function(){F.loading|=1}),W.addEventListener("error",function(){F.loading|=2}),F.loading|=4,ip(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:F},p.set(m,E)}}}function DP(n,r){us.X(n,r);var o=Tu;if(o&&n){var u=En(o).hoistableScripts,p=Ru(n),m=u.get(p);m||(m=o.querySelector(_f(p)),m||(n=v({src:n,async:!0},r),(r=qr.get(p))&&Pv(n,r),m=o.createElement("script"),Pt(m),yi(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function UP(n,r){us.M(n,r);var o=Tu;if(o&&n){var u=En(o).hoistableScripts,p=Ru(n),m=u.get(p);m||(m=o.querySelector(_f(p)),m||(n=v({src:n,async:!0,type:"module"},r),(r=qr.get(p))&&Pv(n,r),m=o.createElement("script"),Pt(m),yi(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(p,m))}}function GT(n,r,o,u){var p=(p=ne.current)?np(p):null;if(!p)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=Au(o.href),o=En(p).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Au(o.href);var m=En(p).hoistableStyles,E=m.get(n);if(E||(p=p.ownerDocument||p,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,E),(m=p.querySelector(gf(n)))&&!m._p&&(E.instance=m,E.state.loading=5),qr.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},qr.set(n,o),m||LP(p,n,o,E.state))),r&&u===null)throw Error(i(528,""));return E}if(r&&u!==null)throw Error(i(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Ru(o),o=En(p).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Au(n){return'href="'+un(n)+'"'}function gf(n){return'link[rel="stylesheet"]['+n+"]"}function VT(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function LP(n,r,o,u){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=n.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),yi(r,"link",o),Pt(r),n.head.appendChild(r))}function Ru(n){return'[src="'+un(n)+'"]'}function _f(n){return"script[async]"+n}function kT(n,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=n.querySelector('style[data-href~="'+un(o.href)+'"]');if(u)return r.instance=u,Pt(u),u;var p=v({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Pt(u),yi(u,"style",p),ip(u,o.precedence,n),r.instance=u;case"stylesheet":p=Au(o.href);var m=n.querySelector(gf(p));if(m)return r.state.loading|=4,r.instance=m,Pt(m),m;u=VT(o),(p=qr.get(p))&&Ov(u,p),m=(n.ownerDocument||n).createElement("link"),Pt(m);var E=m;return E._p=new Promise(function(F,W){E.onload=F,E.onerror=W}),yi(m,"link",u),r.state.loading|=4,ip(m,o.precedence,n),r.instance=m;case"script":return m=Ru(o.src),(p=n.querySelector(_f(m)))?(r.instance=p,Pt(p),p):(u=o,(p=qr.get(m))&&(u=v({},o),Pv(u,p)),n=n.ownerDocument||n,p=n.createElement("script"),Pt(p),yi(p,"link",u),n.head.appendChild(p),r.instance=p);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(u=r.instance,r.state.loading|=4,ip(u,o.precedence,n));return r.instance}function ip(n,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=u.length?u[u.length-1]:null,m=p,E=0;E<u.length;E++){var F=u[E];if(F.dataset.precedence===r)m=F;else if(m!==p)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(n,r.firstChild))}function Ov(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Pv(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var rp=null;function XT(n,r,o){if(rp===null){var u=new Map,p=rp=new Map;p.set(o,u)}else p=rp,u=p.get(o),u||(u=new Map,p.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),p=0;p<o.length;p++){var m=o[p];if(!(m[Mn]||m[Et]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=n+E;var F=u.get(E);F?F.push(m):u.set(E,[m])}}return u}function WT(n,r,o){n=n.ownerDocument||n,n.head.insertBefore(o,r==="title"?n.querySelector("head > title"):null)}function NP(n,r,o){if(o===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function qT(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function OP(n,r,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var p=Au(u.href),m=r.querySelector(gf(p));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=ap.bind(n),r.then(n,n)),o.state.loading|=4,o.instance=m,Pt(m);return}m=r.ownerDocument||r,u=VT(u),(p=qr.get(p))&&Ov(u,p),m=m.createElement("link"),Pt(m);var E=m;E._p=new Promise(function(F,W){E.onload=F,E.onerror=W}),yi(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,r),(r=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=ap.bind(n),r.addEventListener("load",o),r.addEventListener("error",o))}}var Fv=0;function PP(n,r){return n.stylesheets&&n.count===0&&op(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&op(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+r);0<n.imgBytes&&Fv===0&&(Fv=62500*mP());var p=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&op(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Fv?50:800)+r);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(p)}}:null}function ap(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)op(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var sp=null;function op(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,sp=new Map,r.forEach(FP,n),sp=null,ap.call(n))}function FP(n,r){if(!(r.state.loading&4)){var o=sp.get(n);if(o)var u=o.get(null);else{o=new Map,sp.set(n,o);for(var p=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<p.length;m++){var E=p[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}p=r.instance,E=p.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,p),o.set(E,p),this.count++,u=ap.bind(this),p.addEventListener("load",u),p.addEventListener("error",u),m?m.parentNode.insertBefore(p,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(p,n.firstChild)),r.state.loading|=4}}var vf={$$typeof:w,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function IP(n,r,o,u,p,m,E,F,W){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Le(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Le(0),this.hiddenUpdates=Le(null),this.identifierPrefix=u,this.onUncaughtError=p,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function YT(n,r,o,u,p,m,E,F,W,fe,Te,Re){return n=new IP(n,r,o,E,W,fe,Te,Re,F),r=1,m===!0&&(r|=24),m=Sr(3,null,null,r),n.current=m,m.stateNode=n,r=m_(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},x_(m),n}function ZT(n){return n?(n=ru,n):ru}function KT(n,r,o,u,p,m){p=ZT(p),u.context===null?u.context=p:u.pendingContext=p,u=Vs(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=ks(n,u,r),o!==null&&(ir(o,n,r),Kc(o,n,r))}function jT(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Iv(n,r){jT(n,r),(n=n.alternate)&&jT(n,r)}function QT(n){if(n.tag===13||n.tag===31){var r=Xo(n,67108864);r!==null&&ir(r,n,67108864),Iv(n,67108864)}}function JT(n){if(n.tag===13||n.tag===31){var r=Ar();r=gt(r);var o=Xo(n,r);o!==null&&ir(o,n,r),Iv(n,r)}}var lp=!0;function zP(n,r,o,u){var p=z.T;z.T=null;var m=G.p;try{G.p=2,zv(n,r,o,u)}finally{G.p=m,z.T=p}}function BP(n,r,o,u){var p=z.T;z.T=null;var m=G.p;try{G.p=8,zv(n,r,o,u)}finally{G.p=m,z.T=p}}function zv(n,r,o,u){if(lp){var p=Bv(u);if(p===null)Ev(n,r,u,up,o),eA(n,u);else if(GP(p,n,r,o,u))u.stopPropagation();else if(eA(n,u),r&4&&-1<HP.indexOf(n)){for(;p!==null;){var m=Di(p);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Ue(m.pendingLanes);if(E!==0){var F=m;for(F.pendingLanes|=2,F.entangledLanes|=2;E;){var W=1<<31-Ve(E);F.entanglements[1]|=W,E&=~W}Ca(m),(nn&6)===0&&(Wd=Ee()+500,hf(0))}}break;case 31:case 13:F=Xo(m,2),F!==null&&ir(F,m,2),Yd(),Iv(m,2)}if(m=Bv(u),m===null&&Ev(n,r,u,up,o),m===p)break;p=m}p!==null&&u.stopPropagation()}else Ev(n,r,u,null,o)}}function Bv(n){return n=Gg(n),Hv(n)}var up=null;function Hv(n){if(up=null,n=bn(n),n!==null){var r=l(n);if(r===null)n=null;else{var o=r.tag;if(o===13){if(n=c(r),n!==null)return n;n=null}else if(o===31){if(n=f(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return up=n,null}function $T(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case D:return 2;case A:return 8;case K:case de:return 32;case be:return 268435456;default:return 32}default:return 32}}var Gv=!1,eo=null,to=null,no=null,xf=new Map,yf=new Map,io=[],HP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eA(n,r){switch(n){case"focusin":case"focusout":eo=null;break;case"dragenter":case"dragleave":to=null;break;case"mouseover":case"mouseout":no=null;break;case"pointerover":case"pointerout":xf.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":yf.delete(r.pointerId)}}function Sf(n,r,o,u,p,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[p]},r!==null&&(r=Di(r),r!==null&&QT(r)),n):(n.eventSystemFlags|=u,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function GP(n,r,o,u,p){switch(r){case"focusin":return eo=Sf(eo,n,r,o,u,p),!0;case"dragenter":return to=Sf(to,n,r,o,u,p),!0;case"mouseover":return no=Sf(no,n,r,o,u,p),!0;case"pointerover":var m=p.pointerId;return xf.set(m,Sf(xf.get(m)||null,n,r,o,u,p)),!0;case"gotpointercapture":return m=p.pointerId,yf.set(m,Sf(yf.get(m)||null,n,r,o,u,p)),!0}return!1}function tA(n){var r=bn(n.target);if(r!==null){var o=l(r);if(o!==null){if(r=o.tag,r===13){if(r=c(o),r!==null){n.blockedOn=r,xn(n.priority,function(){JT(o)});return}}else if(r===31){if(r=f(o),r!==null){n.blockedOn=r,xn(n.priority,function(){JT(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function cp(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Bv(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Hg=u,o.target.dispatchEvent(u),Hg=null}else return r=Di(o),r!==null&&QT(r),n.blockedOn=o,!1;r.shift()}return!0}function nA(n,r,o){cp(n)&&o.delete(r)}function VP(){Gv=!1,eo!==null&&cp(eo)&&(eo=null),to!==null&&cp(to)&&(to=null),no!==null&&cp(no)&&(no=null),xf.forEach(nA),yf.forEach(nA)}function fp(n,r){n.blockedOn===r&&(n.blockedOn=null,Gv||(Gv=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,VP)))}var hp=null;function iA(n){hp!==n&&(hp=n,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){hp===n&&(hp=null);for(var r=0;r<n.length;r+=3){var o=n[r],u=n[r+1],p=n[r+2];if(typeof u!="function"){if(Hv(u||o)===null)continue;break}var m=Di(o);m!==null&&(n.splice(r,3),r-=3,B_(m,{pending:!0,data:p,method:o.method,action:u},u,p))}}))}function Cu(n){function r(W){return fp(W,n)}eo!==null&&fp(eo,n),to!==null&&fp(to,n),no!==null&&fp(no,n),xf.forEach(r),yf.forEach(r);for(var o=0;o<io.length;o++){var u=io[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<io.length&&(o=io[0],o.blockedOn===null);)tA(o),o.blockedOn===null&&io.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var p=o[u],m=o[u+1],E=p[wt]||null;if(typeof m=="function")E||iA(o);else if(E){var F=null;if(m&&m.hasAttribute("formAction")){if(p=m,E=m[wt]||null)F=E.formAction;else if(Hv(p)!==null)continue}else F=E.action;typeof F=="function"?o[u+1]=F:(o.splice(u,3),u-=3),iA(o)}}}function rA(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return p=E})},focusReset:"manual",scroll:"manual"})}function r(){p!==null&&(p(),p=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,p=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),p!==null&&(p(),p=null)}}}function Vv(n){this._internalRoot=n}dp.prototype.render=Vv.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var o=r.current,u=Ar();KT(o,u,n,r,null,null)},dp.prototype.unmount=Vv.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;KT(n.current,2,null,n,null,null),Yd(),r[Ht]=null}};function dp(n){this._internalRoot=n}dp.prototype.unstable_scheduleHydration=function(n){if(n){var r=Lt();n={blockedOn:null,target:n,priority:r};for(var o=0;o<io.length&&r!==0&&r<io[o].priority;o++);io.splice(o,0,n),o===0&&tA(n)}};var aA=e.version;if(aA!=="19.2.7")throw Error(i(527,aA,"19.2.7"));G.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=d(r),n=n!==null?g(n):null,n=n===null?null:n.stateNode,n};var kP={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pp.isDisabled&&pp.supportsFiber)try{me=pp.inject(kP),_e=pp}catch{}}return wu.createRoot=function(n,r){if(!s(n))throw Error(i(299));var o=!1,u="",p=hE,m=dE,E=pE;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(p=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError)),r=YT(n,1,!1,null,null,o,u,null,p,m,E,rA),n[Ht]=r.current,bv(n),new Vv(r)},wu.hydrateRoot=function(n,r,o){if(!s(n))throw Error(i(299));var u=!1,p="",m=hE,E=dE,F=pE,W=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(F=o.onRecoverableError),o.formState!==void 0&&(W=o.formState)),r=YT(n,1,!0,r,o??null,u,p,W,m,E,F,rA),r.context=ZT(null),o=r.current,u=Ar(),u=gt(u),p=Vs(u),p.callback=null,ks(o,p,u),o=u,r.current.lanes=o,Pe(r,o),Ca(r),n[Ht]=r.current,bv(n),new dp(r)},wu.version="19.2.7",wu}var jv;function pA(){if(jv)return vp.exports;jv=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),vp.exports=dA(),vp.exports}var Qv=pA();const Mf=document.getElementById("liquidEtherBg"),mA=window.matchMedia("(prefers-reduced-motion: reduce)").matches,gA=window.matchMedia("(pointer: coarse)").matches,_A=Number(navigator.deviceMemory||8)<=4;let Mp=null,bp=!1;function vA(a){if("requestIdleCallback"in window){window.requestIdleCallback(a,{timeout:1400});return}window.setTimeout(a,600)}async function xA(){if(!Mf||bp)return;bp=!0;const{default:a}=await sA(async()=>{const{default:e}=await Promise.resolve().then(()=>VN);return{default:e}},void 0,mp&&mp.tagName.toUpperCase()==="SCRIPT"&&mp.src||new URL("assets/file-enhancements.js",document.baseURI).href);Mp=Mp||Qv.createRoot(Mf),Mp.render(st.createElement(a,{colors:["#94ff27","#b6ff9f","#9bcf97"],mouseForce:9,cursorSize:52,isViscous:!0,viscous:24,iterationsViscous:12,iterationsPoisson:14,dt:.016,BFECC:!0,resolution:.32,isBounce:!1,autoDemo:!0,autoSpeed:.95,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,frameInterval:1e3/30}))}if(Mf&&!mA&&!gA&&!_A){let a=function(){const i=Mf.getBoundingClientRect();return window.scrollY>220||i.top<window.innerHeight*.72},e=function(){bp||!a()||(t(),vA(xA))};const t=()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",e)};window.addEventListener("scroll",e,{passive:!0}),window.addEventListener("resize",e),e()}function Jv(a){const e=ke.useRef(null);return e.current===null&&(e.current=a()),e.current}const yA=typeof window<"u"?ke.useLayoutEffect:ke.useEffect;function SA(a,e){a.indexOf(e)===-1&&a.push(e)}function MA(a,e){const t=a.indexOf(e);t>-1&&a.splice(t,1)}const ao=(a,e,t)=>t>e?e:t<a?a:t;let $v=()=>{};const Ep={},bf=a=>a,Tp=(...a)=>a.reduce((e,t)=>i=>t(e(i))),ex=(a,e,t)=>{const i=e-a;return i?(t-a)/i:1};class bA{constructor(){this.subscriptions=[]}add(e){return SA(this.subscriptions,e),()=>MA(this.subscriptions,e)}notify(e,t,i){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](e,t,i);else for(let l=0;l<s;l++){const c=this.subscriptions[l];c&&c(e,t,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const il=a=>a*1e3,cs=a=>a/1e3,tx=(a,e)=>e?a*(1e3/e):0,nx=(a,e,t)=>(((1-3*t+3*e)*a+(3*t-6*e))*a+3*e)*a,EA=1e-7,TA=12;function AA(a,e,t,i,s){let l,c,f=0;do c=e+(t-e)/2,l=nx(c,i,s)-a,l>0?t=c:e=c;while(Math.abs(l)>EA&&++f<TA);return c}function Du(a,e,t,i){if(a===e&&t===i)return bf;const s=l=>AA(l,0,1,a,t);return l=>l===0||l===1?l:nx(s(l),e,i)}const ix=a=>e=>e<=.5?a(2*e)/2:(2-a(2*(1-e)))/2,rx=a=>e=>1-a(1-e),ax=Du(.33,1.53,.69,.99),Ap=rx(ax),RA=ix(Ap),CA=a=>a>=1?1:(a*=2)<1?.5*Ap(a):.5*(2-Math.pow(2,-10*(a-1))),Rp=a=>1-Math.sin(Math.acos(a)),wA=rx(Rp),DA=ix(Rp),UA=Du(.42,0,1,1),LA=Du(0,0,.58,1),sx=Du(.42,0,.58,1),NA=a=>Array.isArray(a)&&typeof a[0]!="number",OA=a=>Array.isArray(a)&&typeof a[0]=="number",PA={linear:bf,easeIn:UA,easeInOut:sx,easeOut:LA,circIn:Rp,circInOut:DA,circOut:wA,backIn:Ap,backInOut:RA,backOut:ax,anticipate:CA},FA=a=>typeof a=="string",ox=a=>{if(OA(a)){$v(a.length===4);const[e,t,i,s]=a;return Du(e,t,i,s)}else if(FA(a))return PA[a];return a},Ef=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function IA(a,e){let t=new Set,i=new Set,s=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function h(g){c.has(g)&&(d.schedule(g),a()),g(f)}const d={schedule:(g,v=!1,_=!1)=>{const b=_&&s?t:i;return v&&c.add(g),b.add(g),g},cancel:g=>{i.delete(g),c.delete(g)},process:g=>{if(f=g,s){l=!0;return}s=!0;const v=t;t=i,i=v,t.forEach(h),t.clear(),s=!1,l&&(l=!1,d.process(g))}};return d}const zA=40;function BA(a,e){let t=!1,i=!0;const s={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,c=Ef.reduce((w,C)=>(w[C]=IA(l),w),{}),{setup:f,read:h,resolveKeyframes:d,preUpdate:g,update:v,preRender:_,render:x,postRender:b}=c,M=()=>{const w=Ep.useManualTiming,C=w?s.timestamp:performance.now();t=!1,w||(s.delta=i?1e3/60:Math.max(Math.min(C-s.timestamp,zA),1)),s.timestamp=C,s.isProcessing=!0,f.process(s),h.process(s),d.process(s),g.process(s),v.process(s),_.process(s),x.process(s),b.process(s),s.isProcessing=!1,t&&e&&(i=!1,a(M))},y=()=>{t=!0,i=!0,s.isProcessing||a(M)};return{schedule:Ef.reduce((w,C)=>{const O=c[C];return w[C]=(L,U=!1,T=!1)=>(t||y(),O.schedule(L,U,T)),w},{}),cancel:w=>{for(let C=0;C<Ef.length;C++)c[Ef[C]].cancel(w)},state:s,steps:c}}const{schedule:Tf,cancel:lx,state:Af}=BA(typeof requestAnimationFrame<"u"?requestAnimationFrame:bf,!0);let Rf;function HA(){Rf=void 0}const wa={now:()=>(Rf===void 0&&wa.set(Af.isProcessing||Ep.useManualTiming?Af.timestamp:performance.now()),Rf),set:a=>{Rf=a,queueMicrotask(HA)}},GA=(a=>e=>typeof e=="string"&&e.startsWith(a))("var(--"),VA=a=>GA(a)?kA.test(a.split("/*")[0].trim()):!1,kA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ux={test:a=>typeof a=="number",parse:parseFloat,transform:a=>a},cx={...ux,transform:a=>ao(0,1,a)},Uu=a=>Math.round(a*1e5)/1e5,fx=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function XA(a){return a==null}const WA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Cp=(a,e)=>t=>!!(typeof t=="string"&&WA.test(t)&&t.startsWith(a)||e&&!XA(t)&&Object.prototype.hasOwnProperty.call(t,e)),hx=(a,e,t)=>i=>{if(typeof i!="string")return i;const[s,l,c,f]=i.match(fx);return{[a]:parseFloat(s),[e]:parseFloat(l),[t]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},qA=a=>ao(0,255,a),wp={...ux,transform:a=>Math.round(qA(a))},so={test:Cp("rgb","red"),parse:hx("red","green","blue"),transform:({red:a,green:e,blue:t,alpha:i=1})=>"rgba("+wp.transform(a)+", "+wp.transform(e)+", "+wp.transform(t)+", "+Uu(cx.transform(i))+")"};function YA(a){let e="",t="",i="",s="";return a.length>5?(e=a.substring(1,3),t=a.substring(3,5),i=a.substring(5,7),s=a.substring(7,9)):(e=a.substring(1,2),t=a.substring(2,3),i=a.substring(3,4),s=a.substring(4,5),e+=e,t+=t,i+=i,s+=s),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(i,16),alpha:s?parseInt(s,16)/255:1}}const Dp={test:Cp("#"),parse:YA,transform:so.transform},dx=(a=>({test:e=>typeof e=="string"&&e.endsWith(a)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${a}`}))("%"),rl={test:Cp("hsl","hue"),parse:hx("hue","saturation","lightness"),transform:({hue:a,saturation:e,lightness:t,alpha:i=1})=>"hsla("+Math.round(a)+", "+dx.transform(Uu(e))+", "+dx.transform(Uu(t))+", "+Uu(cx.transform(i))+")"},Da={test:a=>so.test(a)||Dp.test(a)||rl.test(a),parse:a=>so.test(a)?so.parse(a):rl.test(a)?rl.parse(a):Dp.parse(a),transform:a=>typeof a=="string"?a:a.hasOwnProperty("red")?so.transform(a):rl.transform(a),getAnimatableNone:a=>{const e=Da.parse(a);return e.alpha=0,Da.transform(e)}},ZA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KA(a){var e,t;return isNaN(a)&&typeof a=="string"&&(((e=a.match(fx))==null?void 0:e.length)||0)+(((t=a.match(ZA))==null?void 0:t.length)||0)>0}const px="number",mx="color",jA="var",QA="var(",gx="${}",JA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Lu(a){const e=a.toString(),t=[],i={color:[],number:[],var:[]},s=[];let l=0;const f=e.replace(JA,h=>(Da.test(h)?(i.color.push(l),s.push(mx),t.push(Da.parse(h))):h.startsWith(QA)?(i.var.push(l),s.push(jA),t.push(h)):(i.number.push(l),s.push(px),t.push(parseFloat(h))),++l,gx)).split(gx);return{values:t,split:f,indexes:i,types:s}}function $A(a){return Lu(a).values}function _x({split:a,types:e}){const t=a.length;return i=>{let s="";for(let l=0;l<t;l++)if(s+=a[l],i[l]!==void 0){const c=e[l];c===px?s+=Uu(i[l]):c===mx?s+=Da.transform(i[l]):s+=i[l]}return s}}function e2(a){return _x(Lu(a))}const t2=a=>typeof a=="number"?0:Da.test(a)?Da.getAnimatableNone(a):a,n2=(a,e)=>typeof a=="number"?e!=null&&e.trim().endsWith("/")?a:0:t2(a);function i2(a){const e=Lu(a);return _x(e)(e.values.map((i,s)=>n2(i,e.split[s])))}const r2={test:KA,parse:$A,createTransformer:e2,getAnimatableNone:i2};function Up(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*(2/3-t)*6:a}function a2({hue:a,saturation:e,lightness:t,alpha:i}){a/=360,e/=100,t/=100;let s=0,l=0,c=0;if(!e)s=l=c=t;else{const f=t<.5?t*(1+e):t+e-t*e,h=2*t-f;s=Up(h,f,a+1/3),l=Up(h,f,a),c=Up(h,f,a-1/3)}return{red:Math.round(s*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:i}}function Cf(a,e){return t=>t>0?e:a}const wf=(a,e,t)=>a+(e-a)*t,Lp=(a,e,t)=>{const i=a*a,s=t*(e*e-i)+i;return s<0?0:Math.sqrt(s)},s2=[Dp,so,rl],o2=a=>s2.find(e=>e.test(a));function vx(a){const e=o2(a);if(!e)return!1;let t=e.parse(a);return e===rl&&(t=a2(t)),t}const xx=(a,e)=>{const t=vx(a),i=vx(e);if(!t||!i)return Cf(a,e);const s={...t};return l=>(s.red=Lp(t.red,i.red,l),s.green=Lp(t.green,i.green,l),s.blue=Lp(t.blue,i.blue,l),s.alpha=wf(t.alpha,i.alpha,l),so.transform(s))},Np=new Set(["none","hidden"]);function l2(a,e){return Np.has(a)?t=>t<=0?a:e:t=>t>=1?e:a}function u2(a,e){return t=>wf(a,e,t)}function Op(a){return typeof a=="number"?u2:typeof a=="string"?VA(a)?Cf:Da.test(a)?xx:h2:Array.isArray(a)?yx:typeof a=="object"?Da.test(a)?xx:c2:Cf}function yx(a,e){const t=[...a],i=t.length,s=a.map((l,c)=>Op(l)(l,e[c]));return l=>{for(let c=0;c<i;c++)t[c]=s[c](l);return t}}function c2(a,e){const t={...a,...e},i={};for(const s in t)a[s]!==void 0&&e[s]!==void 0&&(i[s]=Op(a[s])(a[s],e[s]));return s=>{for(const l in i)t[l]=i[l](s);return t}}function f2(a,e){const t=[],i={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const l=e.types[s],c=a.indexes[l][i[l]],f=a.values[c]??0;t[s]=f,i[l]++}return t}const h2=(a,e)=>{const t=r2.createTransformer(e),i=Lu(a),s=Lu(e);return i.indexes.var.length===s.indexes.var.length&&i.indexes.color.length===s.indexes.color.length&&i.indexes.number.length>=s.indexes.number.length?Np.has(a)&&!s.values.length||Np.has(e)&&!i.values.length?l2(a,e):Tp(yx(f2(i,s),s.values),t):Cf(a,e)};function Sx(a,e,t){return typeof a=="number"&&typeof e=="number"&&typeof t=="number"?wf(a,e,t):Op(a)(a,e)}const d2=a=>{const e=({timestamp:t})=>a(t);return{start:(t=!0)=>Tf.update(e,t),stop:()=>lx(e),now:()=>Af.isProcessing?Af.timestamp:wa.now()}},p2=(a,e,t=10)=>{let i="";const s=Math.max(Math.round(e/t),2);for(let l=0;l<s;l++)i+=Math.round(a(l/(s-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},Df=2e4;function Pp(a){let e=0;const t=50;let i=a.next(e);for(;!i.done&&e<Df;)e+=t,i=a.next(e);return e>=Df?1/0:e}function m2(a,e=100,t){const i=t({...a,keyframes:[0,e]}),s=Math.min(Pp(i),Df);return{type:"keyframes",ease:l=>i.next(s*l).value/e,duration:cs(s)}}const Fn={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Fp(a,e){return a*Math.sqrt(1-e*e)}const g2=12;function _2(a,e,t){let i=t;for(let s=1;s<g2;s++)i=i-a(i)/e(i);return i}const Ip=.001;function v2({duration:a=Fn.duration,bounce:e=Fn.bounce,velocity:t=Fn.velocity,mass:i=Fn.mass}){let s,l,c=1-e;c=ao(Fn.minDamping,Fn.maxDamping,c),a=ao(Fn.minDuration,Fn.maxDuration,cs(a)),c<1?(s=d=>{const g=d*c,v=g*a,_=g-t,x=Fp(d,c),b=Math.exp(-v);return Ip-_/x*b},l=d=>{const v=d*c*a,_=v*t+t,x=Math.pow(c,2)*Math.pow(d,2)*a,b=Math.exp(-v),M=Fp(Math.pow(d,2),c);return(-s(d)+Ip>0?-1:1)*((_-x)*b)/M}):(s=d=>{const g=Math.exp(-d*a),v=(d-t)*a+1;return-Ip+g*v},l=d=>{const g=Math.exp(-d*a),v=(t-d)*(a*a);return g*v});const f=5/a,h=_2(s,l,f);if(a=il(a),isNaN(h))return{stiffness:Fn.stiffness,damping:Fn.damping,duration:a};{const d=Math.pow(h,2)*i;return{stiffness:d,damping:c*2*Math.sqrt(i*d),duration:a}}}const x2=["duration","bounce"],y2=["stiffness","damping","mass"];function Mx(a,e){return e.some(t=>a[t]!==void 0)}function S2(a){let e={velocity:Fn.velocity,stiffness:Fn.stiffness,damping:Fn.damping,mass:Fn.mass,isResolvedFromDuration:!1,...a};if(!Mx(a,y2)&&Mx(a,x2))if(e.velocity=0,a.visualDuration){const t=a.visualDuration,i=2*Math.PI/(t*1.2),s=i*i,l=2*ao(.05,1,1-(a.bounce||0))*Math.sqrt(s);e={...e,mass:Fn.mass,stiffness:s,damping:l}}else{const t=v2({...a,velocity:0});e={...e,...t,mass:Fn.mass},e.isResolvedFromDuration=!0}return e}function Uf(a=Fn.visualDuration,e=Fn.bounce){const t=typeof a!="object"?{visualDuration:a,keyframes:[0,1],bounce:e}:a;let{restSpeed:i,restDelta:s}=t;const l=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],f={done:!1,value:l},{stiffness:h,damping:d,mass:g,duration:v,velocity:_,isResolvedFromDuration:x}=S2({...t,velocity:-cs(t.velocity||0)}),b=_||0,M=d/(2*Math.sqrt(h*g)),y=c-l,S=cs(Math.sqrt(h/g)),R=Math.abs(y)<5;i||(i=R?Fn.restSpeed.granular:Fn.restSpeed.default),s||(s=R?Fn.restDelta.granular:Fn.restDelta.default);let w,C,O,L,U,T;if(M<1)O=Fp(S,M),L=(b+M*S*y)/O,w=I=>{const H=Math.exp(-M*S*I);return c-H*(L*Math.sin(O*I)+y*Math.cos(O*I))},U=M*S*L+y*O,T=M*S*y-L*O,C=I=>Math.exp(-M*S*I)*(U*Math.sin(O*I)+T*Math.cos(O*I));else if(M===1){w=H=>c-Math.exp(-S*H)*(y+(b+S*y)*H);const I=b+S*y;C=H=>Math.exp(-S*H)*(S*I*H-b)}else{const I=S*Math.sqrt(M*M-1);w=J=>{const X=Math.exp(-M*S*J),z=Math.min(I*J,300);return c-X*((b+M*S*y)*Math.sinh(z)+I*y*Math.cosh(z))/I};const H=(b+M*S*y)/I,k=M*S*H-y*I,te=M*S*y-H*I;C=J=>{const X=Math.exp(-M*S*J),z=Math.min(I*J,300);return X*(k*Math.sinh(z)+te*Math.cosh(z))}}const P={calculatedDuration:x&&v||null,velocity:I=>il(C(I)),next:I=>{if(!x&&M<1){const k=Math.exp(-M*S*I),te=Math.sin(O*I),J=Math.cos(O*I),X=c-k*(L*te+y*J),z=il(k*(U*te+T*J));return f.done=Math.abs(z)<=i&&Math.abs(c-X)<=s,f.value=f.done?c:X,f}const H=w(I);if(x)f.done=I>=v;else{const k=il(C(I));f.done=Math.abs(k)<=i&&Math.abs(c-H)<=s}return f.value=f.done?c:H,f},toString:()=>{const I=Math.min(Pp(P),Df),H=p2(k=>P.next(I*k).value,I,30);return I+"ms "+H},toTransition:()=>{}};return P}Uf.applyToOptions=a=>{const e=m2(a,100,Uf);return a.ease=e.ease,a.duration=il(e.duration),a.type="keyframes",a};const M2=5;function bx(a,e,t){const i=Math.max(e-M2,0);return tx(t-a(i),e-i)}function zp({keyframes:a,velocity:e=0,power:t=.8,timeConstant:i=325,bounceDamping:s=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:h,restDelta:d=.5,restSpeed:g}){const v=a[0],_={done:!1,value:v},x=T=>f!==void 0&&T<f||h!==void 0&&T>h,b=T=>f===void 0?h:h===void 0||Math.abs(f-T)<Math.abs(h-T)?f:h;let M=t*e;const y=v+M,S=c===void 0?y:c(y);S!==y&&(M=S-v);const R=T=>-M*Math.exp(-T/i),w=T=>S+R(T),C=T=>{const P=R(T),I=w(T);_.done=Math.abs(P)<=d,_.value=_.done?S:I};let O,L;const U=T=>{x(_.value)&&(O=T,L=Uf({keyframes:[_.value,b(_.value)],velocity:bx(w,T,_.value),damping:s,stiffness:l,restDelta:d,restSpeed:g}))};return U(0),{calculatedDuration:null,next:T=>{let P=!1;return!L&&O===void 0&&(P=!0,C(T),U(T)),O!==void 0&&T>=O?L.next(T-O):(!P&&C(T),_)}}}function b2(a,e,t){const i=[],s=t||Ep.mix||Sx,l=a.length-1;for(let c=0;c<l;c++){let f=s(a[c],a[c+1]);if(e){const h=Array.isArray(e)?e[c]||bf:e;f=Tp(h,f)}i.push(f)}return i}function Ex(a,e,{clamp:t=!0,ease:i,mixer:s}={}){const l=a.length;if($v(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const c=a[0]===a[1];a[0]>a[l-1]&&(a=[...a].reverse(),e=[...e].reverse());const f=b2(e,i,s),h=f.length,d=g=>{if(c&&g<a[0])return e[0];let v=0;if(h>1)for(;v<a.length-2&&!(g<a[v+1]);v++);const _=ex(a[v],a[v+1],g);return f[v](_)};return t?g=>d(ao(a[0],a[l-1],g)):d}function E2(a,e){const t=a[a.length-1];for(let i=1;i<=e;i++){const s=ex(0,e,i);a.push(wf(t,1,s))}}function T2(a){const e=[0];return E2(e,a.length-1),e}function A2(a,e){return a.map(t=>t*e)}function R2(a,e){return a.map(()=>e||sx).splice(0,a.length-1)}function Nu({duration:a=300,keyframes:e,times:t,ease:i="easeInOut"}){const s=NA(i)?i.map(ox):ox(i),l={done:!1,value:e[0]},c=A2(t&&t.length===e.length?t:T2(e),a),f=Ex(c,e,{ease:Array.isArray(s)?s:R2(e,s)});return{calculatedDuration:a,next:h=>(l.value=f(h),l.done=h>=a,l)}}const C2=a=>a!==null;function w2(a,{repeat:e,repeatType:t="loop"},i,s=1){const l=a.filter(C2),f=s<0||e&&t!=="loop"&&e%2===1?0:l.length-1;return!f||i===void 0?l[f]:i}const D2={decay:zp,inertia:zp,tween:Nu,keyframes:Nu,spring:Uf};function U2(a){typeof a.type=="string"&&(a.type=D2[a.type])}class L2{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const N2=a=>a/100;class O2 extends L2{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,s;const{motionValue:t}=this.options;t&&t.updatedAt!==wa.now()&&this.tick(wa.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(i=this.options).onStop)==null||s.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;U2(e);const{type:t=Nu,repeat:i=0,repeatDelay:s=0,repeatType:l,velocity:c=0}=e;let{keyframes:f}=e;const h=t||Nu;h!==Nu&&typeof f[0]!="number"&&(this.mixKeyframes=Tp(N2,Sx(f[0],f[1])),f=[0,100]);const d=h({...e,keyframes:f});l==="mirror"&&(this.mirroredGenerator=h({...e,keyframes:[...f].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=Pp(d));const{calculatedDuration:g}=d;this.calculatedDuration=g,this.resolvedDuration=g+s,this.totalDuration=this.resolvedDuration*(i+1)-s,this.generator=d}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:i,totalDuration:s,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:h}=this;if(this.startTime===null)return i.next(0);const{delay:d=0,keyframes:g,repeat:v,repeatType:_,repeatDelay:x,type:b,onUpdate:M,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-s/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-d*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?S<0:S>s;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let w=this.currentTime,C=i;if(v){const T=Math.min(this.currentTime,s)/f;let P=Math.floor(T),I=T%1;!I&&T>=1&&(I=1),I===1&&P--,P=Math.min(P,v+1),!!(P%2)&&(_==="reverse"?(I=1-I,x&&(I-=x/f)):_==="mirror"&&(C=c)),w=ao(0,1,I)*f}let O;R?(this.delayState.value=g[0],O=this.delayState):O=C.next(w),l&&!R&&(O.value=l(O.value));let{done:L}=O;!R&&h!==null&&(L=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return U&&b!==zp&&(O.value=w2(g,this.options,y,this.speed)),M&&M(O.value),U&&this.finish(),O}then(e,t){return this.finished.then(e,t)}get duration(){return cs(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+cs(e)}get time(){return cs(this.currentTime)}set time(e){e=il(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return bx(i=>this.generator.next(i).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(wa.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=cs(this.currentTime))}play(){var s,l;if(this.isStopped)return;const{driver:e=d2,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(l=(s=this.options).onPlay)==null||l.call(s);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=t??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(wa.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}const Tx=30,P2=a=>!isNaN(parseFloat(a)),Ou={current:void 0};class F2{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var l;const s=wa.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((l=this.events.change)==null||l.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=wa.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=P2(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new bA);const i=this.events[e].add(t);return e==="change"?()=>{i(),Tf.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,i){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Ou.current&&Ou.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=wa.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Tx)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,Tx);return tx(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function I2(a,e){return new F2(a,e)}const Ax=a=>!!(a&&a.getVelocity);function z2(a,e,t){if(a==null)return[];if(a instanceof EventTarget)return[a];if(typeof a=="string"){const s=document.querySelectorAll(a);return s?Array.from(s):[]}return Array.from(a).filter(i=>i!=null)}function B2(...a){const e=!Array.isArray(a[0]),t=e?0:-1,i=a[0+t],s=a[1+t],l=a[2+t],c=a[3+t],f=Ex(s,l,c);return e?f(i):f}function H2(a,e,t={}){const i=a.get();let s=null,l=i,c;const f=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,h=()=>{s&&(s.stop(),s=null),a.animation=void 0},d=()=>{const v=Rx(a.get()),_=Rx(l);if(v===_){h();return}const x=s?s.getGeneratorVelocity():a.getVelocity();h(),s=new O2({keyframes:[v,_],velocity:x,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c})},g=()=>{var v;d(),a.animation=s??void 0,(v=a.events.animationStart)==null||v.notify(),s==null||s.then(()=>{var _;a.animation=void 0,(_=a.events.animationComplete)==null||_.notify()})};if(a.attach((v,_)=>{l=v,c=x=>_(Bp(x,f)),Tf.postRender(g)},h),Ax(e)){let v=t.skipInitialAnimation===!0;const _=e.on("change",b=>{v?(v=!1,a.jump(Bp(b,f),!1)):a.set(Bp(b,f))}),x=a.on("destroy",_);return()=>{_(),x()}}return h}function Bp(a,e){return e?a+e:a}function Rx(a){return typeof a=="number"?a:parseFloat(a)}const Cx=ke.createContext({transformPagePoint:a=>a,isStatic:!1,reducedMotion:"never"});function Hp(a){const e=Jv(()=>I2(a)),{isStatic:t}=ke.useContext(Cx);if(t){const[,i]=ke.useState(a);ke.useEffect(()=>e.on("change",i),[])}return e}function wx(a,e){const t=Hp(e()),i=()=>t.set(e());return i(),yA(()=>{const s=()=>Tf.preRender(i,!1,!0),l=a.map(c=>c.on("change",s));return()=>{l.forEach(c=>c()),lx(i)}}),t}function G2(a){Ou.current=[],a();const e=wx(Ou.current,a);return Ou.current=void 0,e}function V2(a,e,t,i){if(typeof a=="function")return G2(a);const l=B2(e,t,i),c=Array.isArray(a)?Dx(a,l):Dx([a],([h])=>l(h)),f=Array.isArray(a)?void 0:a.accelerate;return f&&!f.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(i==null?void 0:i.clamp)!==!1&&(c.accelerate={...f,times:e,keyframes:t,isTransformed:!0}),c}function Dx(a,e){const t=Jv(()=>[]);return wx(a,()=>{t.length=0;const i=a.length;for(let s=0;s<i;s++)t[s]=a[s].get();return e(t)})}function k2(a,e={}){const{isStatic:t}=ke.useContext(Cx),i=()=>Ax(a)?a.get():a;if(t)return V2(i);const s=Hp(i());return ke.useInsertionEffect(()=>H2(s,a,e),[s,JSON.stringify(e)]),s}function X2(a,e={}){return k2(a,{type:"spring",...e})}const W2={some:0,all:1};function q2(a,e,{root:t,margin:i,amount:s="some"}={}){const l=z2(a),c=new WeakMap,f=d=>{d.forEach(g=>{const v=c.get(g.target);if(g.isIntersecting!==!!v)if(g.isIntersecting){const _=e(g.target,g);typeof _=="function"?c.set(g.target,_):h.unobserve(g.target)}else typeof v=="function"&&(v(g),c.delete(g.target))})},h=new IntersectionObserver(f,{root:t,rootMargin:i,threshold:typeof s=="number"?s:W2[s]});return l.forEach(d=>h.observe(d)),()=>h.disconnect()}function Y2(a,{root:e,margin:t,amount:i,once:s=!1,initial:l=!1}={}){const[c,f]=ke.useState(l);return ke.useEffect(()=>{if(!a.current||s&&c)return;const h=()=>(f(!0),s?void 0:()=>f(!1)),d={root:e&&e.current||void 0,margin:t,amount:i};return q2(a.current,h,d)},[e,a,t,s,i]),c}function Z2({to:a,from:e=0,direction:t="up",delay:i=0,duration:s=2,className:l="",startWhen:c=!0,separator:f="",onStart:h,onEnd:d}){const g=ke.useRef(null),v=Hp(t==="down"?a:e),_=20+40*(1/s),x=100*(1/s),b=X2(v,{damping:_,stiffness:x}),M=Y2(g,{once:!0,margin:"0px"}),y=w=>{const C=w.toString();if(C.includes(".")){const O=C.split(".")[1];if(parseInt(O,10)!==0)return O.length}return 0},S=Math.max(y(e),y(a)),R=ke.useCallback(w=>{const C=S>0,O={useGrouping:!!f,minimumFractionDigits:C?S:0,maximumFractionDigits:C?S:0},L=Intl.NumberFormat("en-US",O).format(w);return f?L.replace(/,/g,f):L},[S,f]);return ke.useEffect(()=>{g.current&&(g.current.textContent=R(t==="down"?a:e))},[e,a,t,R]),ke.useEffect(()=>{if(M&&c){typeof h=="function"&&h();const w=setTimeout(()=>{v.set(t==="down"?e:a)},i*1e3),C=setTimeout(()=>{typeof d=="function"&&d()},i*1e3+s*1e3);return()=>{clearTimeout(w),clearTimeout(C)}}},[M,c,v,t,e,a,i,h,d,s]),ke.useEffect(()=>{const w=b.on("change",C=>{g.current&&(g.current.textContent=R(C))});return()=>w()},[b,R]),st.createElement("span",{className:l,ref:g})}const al={SMOOTH_TAU:.25,MIN_COPIES:2,COPY_HEADROOM:2},Gp=a=>typeof a=="number"?`${a}px`:a??void 0,K2=(a,e,t)=>{ke.useEffect(()=>{if(!window.ResizeObserver){const s=()=>a();return window.addEventListener("resize",s),a(),()=>window.removeEventListener("resize",s)}const i=e.map(s=>{if(!s.current)return null;const l=new ResizeObserver(a);return l.observe(s.current),l});return a(),()=>{i.forEach(s=>s==null?void 0:s.disconnect())}},[a,e,t])},j2=(a,e,t)=>{ke.useEffect(()=>{var c;const i=((c=a.current)==null?void 0:c.querySelectorAll("img"))??[];if(i.length===0){e();return}let s=i.length;const l=()=>{s-=1,s===0&&e()};return i.forEach(f=>{f.complete?l():(f.addEventListener("load",l,{once:!0}),f.addEventListener("error",l,{once:!0}))}),()=>{i.forEach(f=>{f.removeEventListener("load",l),f.removeEventListener("error",l)})}},[e,a,t])},Q2=(a,e,t,i,s,l,c)=>{const f=ke.useRef(null),h=ke.useRef(null),d=ke.useRef(0),g=ke.useRef(0);ke.useEffect(()=>{const v=a.current;if(!v)return;const _=c?i:t;if(_>0){d.current=(d.current%_+_)%_;const b=c?`translate3d(0, ${-d.current}px, 0)`:`translate3d(${-d.current}px, 0, 0)`;v.style.transform=b}const x=b=>{h.current===null&&(h.current=b);const M=Math.max(0,b-h.current)/1e3;h.current=b;const y=s&&l!==void 0?l:e,S=1-Math.exp(-M/al.SMOOTH_TAU);if(g.current+=(y-g.current)*S,_>0){let R=d.current+g.current*M;R=(R%_+_)%_,d.current=R;const w=c?`translate3d(0, ${-d.current}px, 0)`:`translate3d(${-d.current}px, 0, 0)`;v.style.transform=w}f.current=requestAnimationFrame(x)};return f.current=requestAnimationFrame(x),()=>{f.current!==null&&(cancelAnimationFrame(f.current),f.current=null),h.current=null}},[e,t,i,s,l,c,a])},Vp=ke.memo(({logos:a,speed:e=120,direction:t="left",width:i="100%",logoHeight:s=28,gap:l=32,pauseOnHover:c,hoverSpeed:f,fadeOut:h=!1,fadeOutColor:d,scaleOnHover:g=!1,renderItem:v,ariaLabel:_="Partner logos",className:x,style:b})=>{const M=ke.useRef(null),y=ke.useRef(null),S=ke.useRef(null),[R,w]=ke.useState(0),[C,O]=ke.useState(0),[L,U]=ke.useState(al.MIN_COPIES),[T,P]=ke.useState(!1),I=ke.useMemo(()=>{if(f!==void 0)return f;if(c===!0)return 0;if(c!==!1)return 0},[f,c]),H=t==="up"||t==="down",k=ke.useMemo(()=>{const B=Math.abs(e),Z=H?t==="up"?1:-1:t==="left"?1:-1,ve=e<0?-1:1;return B*Z*ve},[e,t,H]),te=ke.useCallback(()=>{var Ce,ne,Se,re,Me,Xe;const B=((Ce=M.current)==null?void 0:Ce.clientWidth)??0,Z=(Se=(ne=S.current)==null?void 0:ne.getBoundingClientRect)==null?void 0:Se.call(ne),ve=(Z==null?void 0:Z.width)??0,ye=(Z==null?void 0:Z.height)??0;if(H){const ze=((Me=(re=M.current)==null?void 0:re.parentElement)==null?void 0:Me.clientHeight)??0;if(M.current&&ze>0){const et=Math.ceil(ze);M.current.style.height!==`${et}px`&&(M.current.style.height=`${et}px`)}if(ye>0){O(Math.ceil(ye));const et=((Xe=M.current)==null?void 0:Xe.clientHeight)??ze??ye,He=Math.ceil(et/ye)+al.COPY_HEADROOM;U(Math.max(al.MIN_COPIES,He))}}else if(ve>0){w(Math.ceil(ve));const ze=Math.ceil(B/ve)+al.COPY_HEADROOM;U(Math.max(al.MIN_COPIES,ze))}},[H]);K2(te,[M,S],[a,l,s,H]),j2(S,te,[a,l,s,H]),Q2(y,k,R,C,T,I,H);const J=ke.useMemo(()=>({"--logoloop-gap":`${l}px`,"--logoloop-logoHeight":`${s}px`,...d&&{"--logoloop-fadeColor":d}}),[l,s,d]),X=ke.useMemo(()=>["logoloop",H?"logoloop--vertical":"logoloop--horizontal",h&&"logoloop--fade",g&&"logoloop--scale-hover",x].filter(Boolean).join(" "),[H,h,g,x]),z=ke.useCallback(()=>{I!==void 0&&P(!0)},[I]),G=ke.useCallback(()=>{I!==void 0&&P(!1)},[I]),ee=ke.useCallback((B,Z)=>{if(v)return st.createElement("li",{className:"logoloop__item",key:Z,role:"listitem"},v(B,Z));const ve="node"in B,ye=ve?st.createElement("span",{className:"logoloop__node","aria-hidden":!!B.href&&!B.ariaLabel},B.node):st.createElement("img",{src:B.src,width:B.width,height:B.height,alt:B.alt??"",title:B.title,loading:"lazy",decoding:"async",draggable:!1}),Ce=ve?B.ariaLabel??B.title:B.alt??B.title,ne=B.href?st.createElement("a",{className:"logoloop__link",href:B.href,"aria-label":Ce||"logo link",target:"_blank",rel:"noreferrer noopener"},ye):ye;return st.createElement("li",{className:"logoloop__item",key:Z,role:"listitem"},ne)},[v]),ue=ke.useMemo(()=>Array.from({length:L},(B,Z)=>st.createElement("ul",{className:"logoloop__list",key:`copy-${Z}`,role:"list","aria-hidden":Z>0,ref:Z===0?S:void 0},a.map((ve,ye)=>ee(ve,`${Z}-${ye}`)))),[L,a,ee]),V=ke.useMemo(()=>({width:H?Gp(i)==="100%"?void 0:Gp(i):Gp(i)??"100%",...J,...b}),[i,J,b,H]);return st.createElement("div",{ref:M,className:X,style:V,role:"region","aria-label":_},st.createElement("div",{className:"logoloop__track",ref:y,onMouseEnter:z,onMouseLeave:G},ue))});Vp.displayName="LogoLoop";const J2=({children:a,className:e="",spotlightColor:t="rgba(148, 255, 39, 0.18)"})=>{const i=ke.useRef(null),s=l=>{if(!i.current)return;const c=i.current.getBoundingClientRect(),f=l.clientX-c.left,h=l.clientY-c.top;i.current.style.setProperty("--mouse-x",`${f}px`),i.current.style.setProperty("--mouse-y",`${h}px`),i.current.style.setProperty("--spotlight-color",t)};return st.createElement("div",{ref:i,onMouseMove:s,className:`card-spotlight ${e}`},a)};function Ua(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ux(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rr={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Pu={duration:.5,overwrite:!1,delay:0},kp,pi,Rn,Rr=1e8,_n=1/Rr,Xp=Math.PI*2,$2=Xp/4,eR=0,Lx=Math.sqrt,tR=Math.cos,nR=Math.sin,ui=function(e){return typeof e=="string"},In=function(e){return typeof e=="function"},La=function(e){return typeof e=="number"},Wp=function(e){return typeof e>"u"},ua=function(e){return typeof e=="object"},Vi=function(e){return e!==!1},qp=function(){return typeof window<"u"},Lf=function(e){return In(e)||ui(e)},Nx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Mi=Array.isArray,iR=/random\([^)]+\)/g,rR=/,\s*/g,Ox=/(?:-?\.?\d|\.)+/gi,Px=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Fx=/[+-]=-?[.\d]+/,aR=/[^,'"\[\]\s]+/gi,sR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ln,ca,Zp,Kp,ar={},Nf={},Ix,zx=function(e){return(Nf=ll(e,ar))&&qi},jp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fu=function(e,t){return!t&&console.warn(e)},Bx=function(e,t){return e&&(ar[e]=t)&&Nf&&(Nf[e]=t)||ar},Iu=function(){return 0},oR={suppressEvents:!0,isStart:!0,kill:!1},Of={suppressEvents:!0,kill:!1},lR={suppressEvents:!0},Qp={},fs=[],Jp={},Hx,sr={},$p={},Gx=30,Pf=[],em="",tm=function(e){var t=e[0],i,s;if(ua(t)||In(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=Pf.length;s--&&!Pf[s].targetTest(t););i=Pf[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new py(e[s],i)))||e.splice(s,1);return e},oo=function(e){return e._gsap||tm(wr(e))[0]._gsap},Vx=function(e,t,i){return(i=e[t])&&In(i)?e[t]():Wp(i)&&e.getAttribute&&e.getAttribute(t)||i},ki=function(e,t){return(e=e.split(",")).forEach(t)||e},Gn=function(e){return Math.round(e*1e5)/1e5||0},Nn=function(e){return Math.round(e*1e7)/1e7||0},ol=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},uR=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},Ff=function(){var e=fs.length,t=fs.slice(0),i,s;for(Jp={},fs.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},nm=function(e){return!!(e._initted||e._startAt||e.add)},kx=function(e,t,i,s){fs.length&&!pi&&Ff(),e.render(t,i,!!(pi&&t<0&&nm(e))),fs.length&&!pi&&Ff()},Xx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(aR).length<2?t:ui(e)?e.trim():e},Wx=function(e){return e},or=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},cR=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},ll=function(e,t){for(var i in t)e[i]=t[i];return e},qx=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=ua(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},If=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},zu=function(e){var t=e.parent||Ln,i=e.keyframes?cR(Mi(e.keyframes)):or;if(Vi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},fR=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Yx=function(e,t,i,s,l){var c=e[s],f;if(l)for(f=t[l];c&&c[l]>f;)c=c._prev;return c?(t._next=c._next,c._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=c,t.parent=t._dp=e,t},zf=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var l=t._prev,c=t._next;l?l._next=c:e[i]===t&&(e[i]=c),c?c._prev=l:e[s]===t&&(e[s]=l),t._next=t._prev=t.parent=null},hs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},lo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},hR=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},im=function(e,t,i,s){return e._startAt&&(pi?e._startAt.revert(Of):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},dR=function a(e){return!e||e._ts&&a(e.parent)},Zx=function(e){return e._repeat?ul(e._tTime,e=e.duration()+e._rDelay)*e:0},ul=function(e,t){var i=Math.floor(e=Nn(e/t));return e&&i===e?i-1:i},Bf=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hf=function(e){return e._end=Nn(e._start+(e._tDur/Math.abs(e._ts||e._rts||_n)||0))},Gf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hf(e),i._dirty||lo(i,e)),e},Kx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Bf(e.rawTime(),t),(!t._dur||Hu(0,t.totalDuration(),i)-t._tTime>_n)&&t.render(i,!0)),lo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-_n}},fa=function(e,t,i,s){return t.parent&&hs(t),t._start=Nn((La(i)?i:i||e!==Ln?Cr(e,i,t):e._time)+t._delay),t._end=Nn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yx(e,t,"_first","_last",e._sort?"_start":0),rm(t)||(e._recent=t),s||Kx(e,t),e._ts<0&&Gf(e,e._tTime),e},jx=function(e,t){return(ar.ScrollTrigger||jp("scrollTrigger",t))&&ar.ScrollTrigger.create(t,e)},Qx=function(e,t,i,s,l){if(dm(e,t,l),!e._initted)return 1;if(!i&&e._pt&&!pi&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Hx!==ur.frame)return fs.push(e),e._lazy=[l,s],1},pR=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},rm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},mR=function(e,t,i,s){var l=e.ratio,c=t<0||!t&&(!e._start&&pR(e)&&!(!e._initted&&rm(e))||(e._ts<0||e._dp._ts<0)&&!rm(e))?0:1,f=e._rDelay,h=0,d,g,v;if(f&&e._repeat&&(h=Hu(0,e._tDur,t),g=ul(h,f),e._yoyo&&g&1&&(c=1-c),g!==ul(e._tTime,f)&&(l=1-c,e.vars.repeatRefresh&&e._initted&&e.invalidate())),c!==l||pi||s||e._zTime===_n||!t&&e._zTime){if(!e._initted&&Qx(e,t,s,i,h))return;for(v=e._zTime,e._zTime=t||(i?_n:0),i||(i=t&&!v),e.ratio=c,e._from&&(c=1-c),e._time=0,e._tTime=h,d=e._pt;d;)d.r(c,d.d),d=d._next;t<0&&im(e,t,i,!0),e._onUpdate&&!i&&lr(e,"onUpdate"),h&&e._repeat&&!i&&e.parent&&lr(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===c&&(c&&hs(e,1),!i&&!pi&&(lr(e,c?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gR=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},cl=function(e,t,i,s){var l=e._repeat,c=Nn(t)||0,f=e._tTime/e._tDur;return f&&!s&&(e._time*=c/e._dur),e._dur=c,e._tDur=l?l<0?1e10:Nn(c*(l+1)+e._rDelay*l):c,f>0&&!s&&Gf(e,e._tTime=e._tDur*f),e.parent&&Hf(e),i||lo(e.parent,e),e},Jx=function(e){return e instanceof Xi?lo(e):cl(e,e._dur)},_R={_start:0,endTime:Iu,totalDuration:Iu},Cr=function a(e,t,i){var s=e.labels,l=e._recent||_R,c=e.duration()>=Rr?l.endTime(!1):e._dur,f,h,d;return ui(t)&&(isNaN(t)||t in s)?(h=t.charAt(0),d=t.substr(-1)==="%",f=t.indexOf("="),h==="<"||h===">"?(f>=0&&(t=t.replace(/=/,"")),(h==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(t.substr(1))||0)*(d?(f<0?l:i).totalDuration()/100:1)):f<0?(t in s||(s[t]=c),s[t]):(h=parseFloat(t.charAt(f-1)+t.substr(f+1)),d&&i&&(h=h/100*(Mi(i)?i[0]:i).totalDuration()),f>1?a(e,t.substr(0,f-1),i)+h:c+h)):t==null?c:+t},Bu=function(e,t,i){var s=La(t[1]),l=(s?2:1)+(e<2?0:1),c=t[l],f,h;if(s&&(c.duration=t[1]),c.parent=i,e){for(f=c,h=i;h&&!("immediateRender"in f);)f=h.vars.defaults||{},h=Vi(h.vars.inherit)&&h.parent;c.immediateRender=Vi(f.immediateRender),e<2?c.runBackwards=1:c.startAt=t[l-1]}return new Wn(t[0],c,t[l+1])},ds=function(e,t){return e||e===0?t(e):t},Hu=function(e,t,i){return i<e?e:i>t?t:i},bi=function(e,t){return!ui(e)||!(t=sR.exec(e))?"":t[1]},vR=function(e,t,i){return ds(i,function(s){return Hu(e,t,s)})},am=[].slice,$x=function(e,t){return e&&ua(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ua(e[0]))&&!e.nodeType&&e!==ca},xR=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var l;return ui(s)&&!t||$x(s,1)?(l=i).push.apply(l,wr(s)):i.push(s)})||i},wr=function(e,t,i){return Rn&&!t&&Rn.selector?Rn.selector(e):ui(e)&&!i&&(Zp||!hl())?am.call((t||Kp).querySelectorAll(e),0):Mi(e)?xR(e,i):$x(e)?am.call(e,0):e?[e]:[]},sm=function(e){return e=wr(e)[0]||Fu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return wr(t,i.querySelectorAll?i:i===e?Fu("Invalid scope")||Kp.createElement("div"):e)}},ey=function(e){return e.sort(function(){return .5-Math.random()})},ty=function(e){if(In(e))return e;var t=ua(e)?e:{each:e},i=uo(t.ease),s=t.from||0,l=parseFloat(t.base)||0,c={},f=s>0&&s<1,h=isNaN(s)||f,d=t.axis,g=s,v=s;return ui(s)?g=v={center:.5,edges:.5,end:1}[s]||0:!f&&h&&(g=s[0],v=s[1]),function(_,x,b){var M=(b||t).length,y=c[M],S,R,w,C,O,L,U,T,P;if(!y){if(P=t.grid==="auto"?0:(t.grid||[1,Rr])[1],!P){for(U=-Rr;U<(U=b[P++].getBoundingClientRect().left)&&P<M;);P<M&&P--}for(y=c[M]=[],S=h?Math.min(P,M)*g-.5:s%P,R=P===Rr?0:h?M*v/P-.5:s/P|0,U=0,T=Rr,L=0;L<M;L++)w=L%P-S,C=R-(L/P|0),y[L]=O=d?Math.abs(d==="y"?C:w):Lx(w*w+C*C),O>U&&(U=O),O<T&&(T=O);s==="random"&&ey(y),y.max=U-T,y.min=T,y.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(P>M?M-1:d?d==="y"?M/P:P:Math.max(P,M/P))||0)*(s==="edges"?-1:1),y.b=M<0?l-M:l,y.u=bi(t.amount||t.each)||0,i=i&&M<0?LR(i):i}return M=(y[_]-y.min)/y.max||0,Nn(y.b+(i?i(M):M)*y.v)+y.u}},om=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Nn(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(La(i)?0:bi(i))}},ny=function(e,t){var i=Mi(e),s,l;return!i&&ua(e)&&(s=i=e.radius||Rr,e.values?(e=wr(e.values),(l=!La(e[0]))&&(s*=s)):e=om(e.increment)),ds(t,i?In(e)?function(c){return l=e(c),Math.abs(l-c)<=s?l:c}:function(c){for(var f=parseFloat(l?c.x:c),h=parseFloat(l?c.y:0),d=Rr,g=0,v=e.length,_,x;v--;)l?(_=e[v].x-f,x=e[v].y-h,_=_*_+x*x):_=Math.abs(e[v]-f),_<d&&(d=_,g=v);return g=!s||d<=s?e[g]:c,l||g===c||La(c)?g:g+bi(c)}:om(e))},iy=function(e,t,i,s){return ds(Mi(e)?!t:i===!0?!!(i=0):!s,function(){return Mi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},yR=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(l,c){return c(l)},s)}},SR=function(e,t){return function(i){return e(parseFloat(i))+(t||bi(i))}},MR=function(e,t,i){return ay(e,t,0,1,i)},ry=function(e,t,i){return ds(i,function(s){return e[~~t(s)]})},bR=function a(e,t,i){var s=t-e;return Mi(e)?ry(e,a(0,e.length),t):ds(i,function(l){return(s+(l-e)%s)%s+e})},ER=function a(e,t,i){var s=t-e,l=s*2;return Mi(e)?ry(e,a(0,e.length-1),t):ds(i,function(c){return c=(l+(c-e)%l)%l||0,e+(c>s?l-c:c)})},Gu=function(e){return e.replace(iR,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(rR);return iy(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},ay=function(e,t,i,s,l){var c=t-e,f=s-i;return ds(l,function(h){return i+((h-e)/c*f||0)})},TR=function a(e,t,i,s){var l=isNaN(e+t)?0:function(x){return(1-x)*e+x*t};if(!l){var c=ui(e),f={},h,d,g,v,_;if(i===!0&&(s=1)&&(i=null),c)e={p:e},t={p:t};else if(Mi(e)&&!Mi(t)){for(g=[],v=e.length,_=v-2,d=1;d<v;d++)g.push(a(e[d-1],e[d]));v--,l=function(b){b*=v;var M=Math.min(_,~~b);return g[M](b-M)},i=t}else s||(e=ll(Mi(e)?[]:{},e));if(!g){for(h in t)fm.call(f,e,h,"get",t[h]);l=function(b){return gm(b,f)||(c?e.p:e)}}}return ds(i,l)},sy=function(e,t,i){var s=e.labels,l=Rr,c,f,h;for(c in s)f=s[c]-t,f<0==!!i&&f&&l>(f=Math.abs(f))&&(h=c,l=f);return h},lr=function(e,t,i){var s=e.vars,l=s[t],c=Rn,f=e._ctx,h,d,g;if(l)return h=s[t+"Params"],d=s.callbackScope||e,i&&fs.length&&Ff(),f&&(Rn=f),g=h?l.apply(d,h):l.call(d),Rn=c,g},Vu=function(e){return hs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!pi),e.progress()<1&&lr(e,"onInterrupt"),e},fl,oy=[],ly=function(e){if(e)if(e=!e.name&&e.default||e,qp()||e.headless){var t=e.name,i=In(e),s=t&&!i&&e.init?function(){this._props=[]}:e,l={init:Iu,render:gm,add:fm,kill:VR,modifier:GR,rawVars:0},c={targetTest:0,get:0,getSetter:mm,aliases:{},register:0};if(hl(),e!==s){if(sr[t])return;or(s,or(If(e,l),c)),ll(s.prototype,ll(l,If(e,c))),sr[s.prop=t]=s,e.targetTest&&(Pf.push(s),Qp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Bx(t,s),e.register&&e.register(qi,s,Wi)}else oy.push(e)},vn=255,ku={aqua:[0,vn,vn],lime:[0,vn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,vn],navy:[0,0,128],white:[vn,vn,vn],olive:[128,128,0],yellow:[vn,vn,0],orange:[vn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[vn,0,0],pink:[vn,192,203],cyan:[0,vn,vn],transparent:[vn,vn,vn,0]},lm=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*vn+.5|0},uy=function(e,t,i){var s=e?La(e)?[e>>16,e>>8&vn,e&vn]:0:ku.black,l,c,f,h,d,g,v,_,x,b;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ku[e])s=ku[e];else if(e.charAt(0)==="#"){if(e.length<6&&(l=e.charAt(1),c=e.charAt(2),f=e.charAt(3),e="#"+l+l+c+c+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&vn,s&vn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&vn,e&vn]}else if(e.substr(0,3)==="hsl"){if(s=b=e.match(Ox),!t)h=+s[0]%360/360,d=+s[1]/100,g=+s[2]/100,c=g<=.5?g*(d+1):g+d-g*d,l=g*2-c,s.length>3&&(s[3]*=1),s[0]=lm(h+1/3,l,c),s[1]=lm(h,l,c),s[2]=lm(h-1/3,l,c);else if(~e.indexOf("="))return s=e.match(Px),i&&s.length<4&&(s[3]=1),s}else s=e.match(Ox)||ku.transparent;s=s.map(Number)}return t&&!b&&(l=s[0]/vn,c=s[1]/vn,f=s[2]/vn,v=Math.max(l,c,f),_=Math.min(l,c,f),g=(v+_)/2,v===_?h=d=0:(x=v-_,d=g>.5?x/(2-v-_):x/(v+_),h=v===l?(c-f)/x+(c<f?6:0):v===c?(f-l)/x+2:(l-c)/x+4,h*=60),s[0]=~~(h+.5),s[1]=~~(d*100+.5),s[2]=~~(g*100+.5)),i&&s.length<4&&(s[3]=1),s},cy=function(e){var t=[],i=[],s=-1;return e.split(ps).forEach(function(l){var c=l.match(sl)||[];t.push.apply(t,c),i.push(s+=c.length+1)}),t.c=i,t},fy=function(e,t,i){var s="",l=(e+s).match(ps),c=t?"hsla(":"rgba(",f=0,h,d,g,v;if(!l)return e;if(l=l.map(function(_){return(_=uy(_,t,1))&&c+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(g=cy(e),h=i.c,h.join(s)!==g.c.join(s)))for(d=e.replace(ps,"1").split(sl),v=d.length-1;f<v;f++)s+=d[f]+(~h.indexOf(f)?l.shift()||c+"0,0,0,0)":(g.length?g:l.length?l:i).shift());if(!d)for(d=e.split(ps),v=d.length-1;f<v;f++)s+=d[f]+l[f];return s+d[v]},ps=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ku)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),AR=/hsl[a]?\(/,hy=function(e){var t=e.join(" "),i;if(ps.lastIndex=0,ps.test(t))return i=AR.test(t),e[1]=fy(e[1],i),e[0]=fy(e[0],i,cy(e[1])),!0},Xu,ur=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,l=1e3/240,c=l,f=[],h,d,g,v,_,x,b=function M(y){var S=a()-s,R=y===!0,w,C,O,L;if((S>e||S<0)&&(i+=S-t),s+=S,O=s-i,w=O-c,(w>0||R)&&(L=++v.frame,_=O-v.time*1e3,v.time=O=O/1e3,c+=w+(w>=l?4:l-w),C=1),R||(h=d(M)),C)for(x=0;x<f.length;x++)f[x](O,_,L,y)};return v={time:0,frame:0,tick:function(){b(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){Ix&&(!Zp&&qp()&&(ca=Zp=window,Kp=ca.document||{},ar.gsap=qi,(ca.gsapVersions||(ca.gsapVersions=[])).push(qi.version),zx(Nf||ca.GreenSockGlobals||!ca.gsap&&ca||{}),oy.forEach(ly)),g=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&v.sleep(),d=g||function(y){return setTimeout(y,c-v.time*1e3+1|0)},Xu=1,b(2))},sleep:function(){(g?cancelAnimationFrame:clearTimeout)(h),Xu=0,d=Iu},lagSmoothing:function(y,S){e=y||1/0,t=Math.min(S||33,e)},fps:function(y){l=1e3/(y||240),c=v.time*1e3+l},add:function(y,S,R){var w=S?function(C,O,L,U){y(C,O,L,U),v.remove(w)}:y;return v.remove(y),f[R?"unshift":"push"](w),hl(),w},remove:function(y,S){~(S=f.indexOf(y))&&f.splice(S,1)&&x>=S&&x--},_listeners:f},v})(),hl=function(){return!Xu&&ur.wake()},qt={},RR=/^[\d.\-M][\d.\-,\s]/,CR=/["']/g,wR=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],l=1,c=i.length,f,h,d;l<c;l++)h=i[l],f=l!==c-1?h.lastIndexOf(","):h.length,d=h.substr(0,f),t[s]=isNaN(d)?d.replace(CR,"").trim():+d,s=h.substr(f+1).trim();return t},DR=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},UR=function(e){var t=(e+"").split("("),i=qt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[wR(t[1])]:DR(e).split(",").map(Xx)):qt._CE&&RR.test(e)?qt._CE("",e):i},LR=function(e){return function(t){return 1-e(1-t)}},uo=function(e,t){return e&&(In(e)?e:qt[e]||UR(e))||t},co=function(e,t,i,s){i===void 0&&(i=function(h){return 1-t(1-h)}),s===void 0&&(s=function(h){return h<.5?t(h*2)/2:1-t((1-h)*2)/2});var l={easeIn:t,easeOut:i,easeInOut:s},c;return ki(e,function(f){qt[f]=ar[f]=l,qt[c=f.toLowerCase()]=i;for(var h in l)qt[c+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=qt[f+"."+h]=l[h]}),l},dy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},um=function a(e,t,i){var s=t>=1?t:1,l=(i||(e?.3:.45))/(t<1?t:1),c=l/Xp*(Math.asin(1/s)||0),f=function(g){return g===1?1:s*Math.pow(2,-10*g)*nR((g-c)*l)+1},h=e==="out"?f:e==="in"?function(d){return 1-f(1-d)}:dy(f);return l=Xp/l,h.config=function(d,g){return a(e,d,g)},h},cm=function a(e,t){t===void 0&&(t=1.70158);var i=function(c){return c?--c*c*((t+1)*c+t)+1:0},s=e==="out"?i:e==="in"?function(l){return 1-i(1-l)}:dy(i);return s.config=function(l){return a(e,l)},s};ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;co(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})}),qt.Linear.easeNone=qt.none=qt.Linear.easeIn,co("Elastic",um("in"),um("out"),um()),(function(a,e){var t=1/e,i=2*t,s=2.5*t,l=function(f){return f<t?a*f*f:f<i?a*Math.pow(f-1.5/e,2)+.75:f<s?a*(f-=2.25/e)*f+.9375:a*Math.pow(f-2.625/e,2)+.984375};co("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75),co("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)}),co("Circ",function(a){return-(Lx(1-a*a)-1)}),co("Sine",function(a){return a===1?1:-tR(a*$2)+1}),co("Back",cm("in"),cm("out"),cm()),qt.SteppedEase=qt.steps=ar.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),l=t?1:0,c=1-_n;return function(f){return((s*Hu(0,c,f)|0)+l)*i}}},Pu.ease=qt["quad.out"],ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return em+=a+","+a+"Params,"});var py=function(e,t){this.id=eR++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vx,this.set=t?t.getSetter:mm},Wu=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,cl(this,+t.duration,1,1),this.data=t.data,Rn&&(this._ctx=Rn,Rn.data.push(this)),Xu||ur.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,cl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(hl(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Gf(this,i),!l._dp||l.parent||Kx(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fa(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===_n||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),kx(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Zx(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Zx(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*l,s):this._repeat?ul(this._tTime,l)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-_n?0:this._rts;if(this._rts===i)return this;var l=this.parent&&this._ts?Bf(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-_n?0:this._rts,this.totalTime(Hu(-Math.abs(this._delay),this.totalDuration(),l),s!==!1),Hf(this),hR(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_n&&(this._tTime-=_n)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Nn(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&fa(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Vi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bf(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=lR);var s=pi;return pi=i,nm(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),pi=s,this},e.globalTime=function(i){for(var s=this,l=arguments.length?i:s.rawTime();s;)l=s._start+l/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):l},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Jx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,Jx(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Cr(this,i),Vi(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,Vi(s)),this._dur||(this._zTime=-_n),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-_n:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_n,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,l;return!!(!i||this._ts&&this._initted&&i.isActive()&&(l=i.rawTime(!0))>=s&&l<this.endTime(!0)-_n)},e.eventCallback=function(i,s,l){var c=this.vars;return arguments.length>1?(s?(c[i]=s,l&&(c[i+"Params"]=l),i==="onUpdate"&&(this._onUpdate=s)):delete c[i],this):c[i]},e.then=function(i){var s=this,l=s._prom;return new Promise(function(c){var f=In(i)?i:Wx,h=function(){var g=s.then;s.then=null,l&&l(),In(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=g),c(f),s.then=g};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?h():s._prom=h})},e.kill=function(){Vu(this)},a})();or(Wu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_n,_prom:0,_ps:!1,_rts:1});var Xi=(function(a){Ux(e,a);function e(i,s){var l;return i===void 0&&(i={}),l=a.call(this,i)||this,l.labels={},l.smoothChildTiming=!!i.smoothChildTiming,l.autoRemoveChildren=!!i.autoRemoveChildren,l._sort=Vi(i.sortChildren),Ln&&fa(i.parent||Ln,Ua(l),s),i.reversed&&l.reverse(),i.paused&&l.paused(!0),i.scrollTrigger&&jx(Ua(l),i.scrollTrigger),l}var t=e.prototype;return t.to=function(s,l,c){return Bu(0,arguments,this),this},t.from=function(s,l,c){return Bu(1,arguments,this),this},t.fromTo=function(s,l,c,f){return Bu(2,arguments,this),this},t.set=function(s,l,c){return l.duration=0,l.parent=this,zu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new Wn(s,l,Cr(this,c),1),this},t.call=function(s,l,c){return fa(this,Wn.delayedCall(0,s,l),c)},t.staggerTo=function(s,l,c,f,h,d,g){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=g,c.parent=this,new Wn(s,c,Cr(this,h)),this},t.staggerFrom=function(s,l,c,f,h,d,g){return c.runBackwards=1,zu(c).immediateRender=Vi(c.immediateRender),this.staggerTo(s,l,c,f,h,d,g)},t.staggerFromTo=function(s,l,c,f,h,d,g,v){return f.startAt=c,zu(f).immediateRender=Vi(f.immediateRender),this.staggerTo(s,l,f,h,d,g,v)},t.render=function(s,l,c){var f=this._time,h=this._dirty?this.totalDuration():this._tDur,d=this._dur,g=s<=0?0:Nn(s),v=this._zTime<0!=s<0&&(this._initted||!d),_,x,b,M,y,S,R,w,C,O,L,U;if(this!==Ln&&g>h&&s>=0&&(g=h),g!==this._tTime||c||v){if(f!==this._time&&d&&(g+=this._time-f,s+=this._time-f),_=g,C=this._start,w=this._ts,S=!w,v&&(d||(f=this._zTime),(s||!l)&&(this._zTime=s)),this._repeat){if(L=this._yoyo,y=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(y*100+s,l,c);if(_=Nn(g%y),g===h?(M=this._repeat,_=d):(O=Nn(g/y),M=~~O,M&&M===O&&(_=d,M--),_>d&&(_=d)),O=ul(this._tTime,y),!f&&this._tTime&&O!==M&&this._tTime-O*y-this._dur<=0&&(O=M),L&&M&1&&(_=d-_,U=1),M!==O&&!this._lock){var T=L&&O&1,P=T===(L&&M&1);if(M<O&&(T=!T),f=T?0:g%d?d:g,this._lock=1,this.render(f||(U?0:Nn(M*y)),l,!d)._lock=0,this._tTime=g,!l&&this.parent&&lr(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1,O=M),f&&f!==this._time||S!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,h=this._tDur,P&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!S)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=gR(this,Nn(f),Nn(_)),R&&(g-=_-(_=R._start))),this._tTime=g,this._time=_,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&g&&d&&!l&&!O&&(lr(this,"onStart"),this._tTime!==g))return this;if(_>=f&&s>=0)for(x=this._first;x;){if(b=x._next,(x._act||_>=x._start)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(_-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(_-x._start)*x._ts,l,c),_!==this._time||!this._ts&&!S){R=0,b&&(g+=this._zTime=-_n);break}}x=b}else{x=this._last;for(var I=s<0?s:_;x;){if(b=x._prev,(x._act||I<=x._end)&&x._ts&&R!==x){if(x.parent!==this)return this.render(s,l,c);if(x.render(x._ts>0?(I-x._start)*x._ts:(x._dirty?x.totalDuration():x._tDur)+(I-x._start)*x._ts,l,c||pi&&nm(x)),_!==this._time||!this._ts&&!S){R=0,b&&(g+=this._zTime=I?-_n:_n);break}}x=b}}if(R&&!l&&(this.pause(),R.render(_>=f?0:-_n)._zTime=_>=f?1:-1,this._ts))return this._start=C,Hf(this),this.render(s,l,c);this._onUpdate&&!l&&lr(this,"onUpdate",!0),(g===h&&this._tTime>=this.totalDuration()||!g&&f)&&(C===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(g===h&&this._ts>0||!g&&this._ts<0)&&hs(this,1),!l&&!(s<0&&!f)&&(g||f||!h)&&(lr(this,g===h&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(g<h&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,l){var c=this;if(La(l)||(l=Cr(this,l,s)),!(s instanceof Wu)){if(Mi(s))return s.forEach(function(f){return c.add(f,l)}),this;if(ui(s))return this.addLabel(s,l);if(In(s))s=Wn.delayedCall(0,s);else return this}return this!==s?fa(this,s,l):this},t.getChildren=function(s,l,c,f){s===void 0&&(s=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-Rr);for(var h=[],d=this._first;d;)d._start>=f&&(d instanceof Wn?l&&h.push(d):(c&&h.push(d),s&&h.push.apply(h,d.getChildren(!0,l,c)))),d=d._next;return h},t.getById=function(s){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===s)return l[c]},t.remove=function(s){return ui(s)?this.removeLabel(s):In(s)?this.killTweensOf(s):(s.parent===this&&zf(this,s),s===this._recent&&(this._recent=this._last),lo(this))},t.totalTime=function(s,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nn(ur.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,l),this._forcing=0,this):this._tTime},t.addLabel=function(s,l){return this.labels[s]=Cr(this,l),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,l,c){var f=Wn.delayedCall(0,l||Iu,c);return f.data="isPause",this._hasPause=1,fa(this,f,Cr(this,s))},t.removePause=function(s){var l=this._first;for(s=Cr(this,s);l;)l._start===s&&l.data==="isPause"&&hs(l),l=l._next},t.killTweensOf=function(s,l,c){for(var f=this.getTweensOf(s,c),h=f.length;h--;)ms!==f[h]&&f[h].kill(s,l);return this},t.getTweensOf=function(s,l){for(var c=[],f=wr(s),h=this._first,d=La(l),g;h;)h instanceof Wn?uR(h._targets,f)&&(d?(!ms||h._initted&&h._ts)&&h.globalTime(0)<=l&&h.globalTime(h.totalDuration())>l:!l||h.isActive())&&c.push(h):(g=h.getTweensOf(f,l)).length&&c.push.apply(c,g),h=h._next;return c},t.tweenTo=function(s,l){l=l||{};var c=this,f=Cr(c,s),h=l,d=h.startAt,g=h.onStart,v=h.onStartParams,_=h.immediateRender,x,b=Wn.to(c,or({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||_n,onStart:function(){if(c.pause(),!x){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());b._dur!==y&&cl(b,y,0,1).render(b._time,!0,!0),x=1}g&&g.apply(b,v||[])}},l));return _?b.render(0):b},t.tweenFromTo=function(s,l,c){return this.tweenTo(l,or({startAt:{time:Cr(this,s)}},c))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),sy(this,Cr(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),sy(this,Cr(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+_n)},t.shiftChildren=function(s,l,c){c===void 0&&(c=0);var f=this._first,h=this.labels,d;for(s=Nn(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(l)for(d in h)h[d]>=c&&(h[d]+=s);return lo(this)},t.invalidate=function(s){var l=this._first;for(this._lock=0;l;)l.invalidate(s),l=l._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),lo(this)},t.totalDuration=function(s){var l=0,c=this,f=c._last,h=Rr,d,g,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),g=f._start,g>h&&c._sort&&f._ts&&!c._lock?(c._lock=1,fa(c,f,g-f._delay,1)._lock=0):h=g,g<0&&f._ts&&(l-=g,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=Nn(g/c._ts),c._time-=g,c._tTime-=g),c.shiftChildren(-g,!1,-1/0),h=0),f._end>l&&f._ts&&(l=f._end),f=d;cl(c,c===Ln&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},e.updateRoot=function(s){if(Ln._ts&&(kx(Ln,Bf(s,Ln)),Hx=ur.frame),ur.frame>=Gx){Gx+=rr.autoSleep||120;var l=Ln._first;if((!l||!l._ts)&&rr.autoSleep&&ur._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||ur.sleep()}}},e})(Wu);or(Xi.prototype,{_lock:0,_hasPause:0,_forcing:0});var NR=function(e,t,i,s,l,c,f){var h=new Wi(this._pt,e,t,0,1,yy,null,l),d=0,g=0,v,_,x,b,M,y,S,R;for(h.b=i,h.e=s,i+="",s+="",(S=~s.indexOf("random("))&&(s=Gu(s)),c&&(R=[i,s],c(R,e,t),i=R[0],s=R[1]),_=i.match(Yp)||[];v=Yp.exec(s);)b=v[0],M=s.substring(d,v.index),x?x=(x+1)%5:M.substr(-5)==="rgba("&&(x=1),b!==_[g++]&&(y=parseFloat(_[g-1])||0,h._pt={_next:h._pt,p:M||g===1?M:",",s:y,c:b.charAt(1)==="="?ol(y,b)-y:parseFloat(b)-y,m:x&&x<4?Math.round:0},d=Yp.lastIndex);return h.c=d<s.length?s.substring(d,s.length):"",h.fp=f,(Fx.test(s)||S)&&(h.e=0),this._pt=h,h},fm=function(e,t,i,s,l,c,f,h,d,g){In(s)&&(s=s(l||0,e,c));var v=e[t],_=i!=="get"?i:In(v)?d?e[t.indexOf("set")||!In(e["get"+t.substr(3)])?t:"get"+t.substr(3)](d):e[t]():v,x=In(v)?d?zR:vy:pm,b;if(ui(s)&&(~s.indexOf("random(")&&(s=Gu(s)),s.charAt(1)==="="&&(b=ol(_,s)+(bi(_)||0),(b||b===0)&&(s=b))),!g||_!==s||hm)return!isNaN(_*s)&&s!==""?(b=new Wi(this._pt,e,t,+_||0,s-(_||0),typeof v=="boolean"?HR:xy,0,x),d&&(b.fp=d),f&&b.modifier(f,this,e),this._pt=b):(!v&&!(t in e)&&jp(t,s),NR.call(this,e,t,_,s,x,h||rr.stringFilter,d))},OR=function(e,t,i,s,l){if(In(e)&&(e=qu(e,l,t,i,s)),!ua(e)||e.style&&e.nodeType||Mi(e)||Nx(e))return ui(e)?qu(e,l,t,i,s):e;var c={},f;for(f in e)c[f]=qu(e[f],l,t,i,s);return c},my=function(e,t,i,s,l,c){var f,h,d,g;if(sr[e]&&(f=new sr[e]).init(l,f.rawVars?t[e]:OR(t[e],s,l,c,i),i,s,c)!==!1&&(i._pt=h=new Wi(i._pt,l,e,0,1,f.render,f,0,f.priority),i!==fl))for(d=i._ptLookup[i._targets.indexOf(l)],g=f._props.length;g--;)d[f._props[g]]=h;return f},ms,hm,dm=function a(e,t,i){var s=e.vars,l=s.ease,c=s.startAt,f=s.immediateRender,h=s.lazy,d=s.onUpdate,g=s.runBackwards,v=s.yoyoEase,_=s.keyframes,x=s.autoRevert,b=e._dur,M=e._startAt,y=e._targets,S=e.parent,R=S&&S.data==="nested"?S.vars.targets:y,w=e._overwrite==="auto"&&!kp,C=e.timeline,O=s.easeReverse||v,L,U,T,P,I,H,k,te,J,X,z,G,ee;if(C&&(!_||!l)&&(l="none"),e._ease=uo(l,Pu.ease),e._rEase=O&&(uo(O)||e._ease),e._from=!C&&!!s.runBackwards,e._from&&(e.ratio=1),!C||_&&!s.stagger){if(te=y[0]?oo(y[0]).harness:0,G=te&&s[te.prop],L=If(s,Qp),M&&(M._zTime<0&&M.progress(1),t<0&&g&&f&&!x?M.render(-1,!0):M.revert(g&&b?Of:oR),M._lazy=0),c){if(hs(e._startAt=Wn.set(y,or({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:!M&&Vi(h),startAt:null,delay:0,onUpdate:d&&function(){return lr(e,"onUpdate")},stagger:0},c))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pi||!f&&!x)&&e._startAt.revert(Of),f&&b&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(g&&b&&!M){if(t&&(f=!1),T=or({overwrite:!1,data:"isFromStart",lazy:f&&!M&&Vi(h),immediateRender:f,stagger:0,parent:S},L),G&&(T[te.prop]=G),hs(e._startAt=Wn.set(y,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(pi?e._startAt.revert(Of):e._startAt.render(-1,!0)),e._zTime=t,!f)a(e._startAt,_n,_n);else if(!t)return}for(e._pt=e._ptCache=0,h=b&&Vi(h)||h&&!b,U=0;U<y.length;U++){if(I=y[U],k=I._gsap||tm(y)[U]._gsap,e._ptLookup[U]=X={},Jp[k.id]&&fs.length&&Ff(),z=R===y?U:R.indexOf(I),te&&(J=new te).init(I,G||L,e,z,R)!==!1&&(e._pt=P=new Wi(e._pt,I,J.name,0,1,J.render,J,0,J.priority),J._props.forEach(function(ue){X[ue]=P}),J.priority&&(H=1)),!te||G)for(T in L)sr[T]&&(J=my(T,L,e,z,I,R))?J.priority&&(H=1):X[T]=P=fm.call(e,I,T,"get",L[T],z,R,0,s.stringFilter);e._op&&e._op[U]&&e.kill(I,e._op[U]),w&&e._pt&&(ms=e,Ln.killTweensOf(I,X,e.globalTime(t)),ee=!e.parent,ms=0),e._pt&&h&&(Jp[k.id]=1)}H&&Sy(e),e._onInit&&e._onInit(e)}e._onUpdate=d,e._initted=(!e._op||e._pt)&&!ee,_&&t<=0&&C.render(Rr,!0,!0)},PR=function(e,t,i,s,l,c,f,h){var d=(e._pt&&e._ptCache||(e._ptCache={}))[t],g,v,_,x;if(!d)for(d=e._ptCache[t]=[],_=e._ptLookup,x=e._targets.length;x--;){if(g=_[x][t],g&&g.d&&g.d._pt)for(g=g.d._pt;g&&g.p!==t&&g.fp!==t;)g=g._next;if(!g)return hm=1,e.vars[t]="+=0",dm(e,f),hm=0,h?Fu(t+" not eligible for reset. Try splitting into individual properties"):1;d.push(g)}for(x=d.length;x--;)v=d[x],g=v._pt||v,g.s=(s||s===0)&&!l?s:g.s+(s||0)+c*g.c,g.c=i-g.s,v.e&&(v.e=Gn(i)+bi(v.e)),v.b&&(v.b=g.s+bi(v.b))},FR=function(e,t){var i=e[0]?oo(e[0]).harness:0,s=i&&i.aliases,l,c,f,h;if(!s)return t;l=ll({},t);for(c in s)if(c in l)for(h=s[c].split(","),f=h.length;f--;)l[h[f]]=l[c];return l},IR=function(e,t,i,s){var l=t.ease||s||"power1.inOut",c,f;if(Mi(t))f=i[e]||(i[e]=[]),t.forEach(function(h,d){return f.push({t:d/(t.length-1)*100,v:h,e:l})});else for(c in t)f=i[c]||(i[c]=[]),c==="ease"||f.push({t:parseFloat(e),v:t[c],e:l})},qu=function(e,t,i,s,l){return In(e)?e.call(t,i,s,l):ui(e)&&~e.indexOf("random(")?Gu(e):e},gy=em+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",_y={};ki(gy+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return _y[a]=1});var Wn=(function(a){Ux(e,a);function e(i,s,l,c){var f;typeof s=="number"&&(l.duration=s,s=l,l=null),f=a.call(this,c?s:zu(s))||this;var h=f.vars,d=h.duration,g=h.delay,v=h.immediateRender,_=h.stagger,x=h.overwrite,b=h.keyframes,M=h.defaults,y=h.scrollTrigger,S=s.parent||Ln,R=(Mi(i)||Nx(i)?La(i[0]):"length"in s)?[i]:wr(i),w,C,O,L,U,T,P,I;if(f._targets=R.length?tm(R):Fu("GSAP target "+i+" not found. https://gsap.com",!rr.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=x,b||_||Lf(d)||Lf(g)){s=f.vars;var H=s.easeReverse||s.yoyoEase;if(w=f.timeline=new Xi({data:"nested",defaults:M||{},targets:S&&S.data==="nested"?S.vars.targets:R}),w.kill(),w.parent=w._dp=Ua(f),w._start=0,_||Lf(d)||Lf(g)){if(L=R.length,P=_&&ty(_),ua(_))for(U in _)~gy.indexOf(U)&&(I||(I={}),I[U]=_[U]);for(C=0;C<L;C++)O=If(s,_y),O.stagger=0,H&&(O.easeReverse=H),I&&ll(O,I),T=R[C],O.duration=+qu(d,Ua(f),C,T,R),O.delay=(+qu(g,Ua(f),C,T,R)||0)-f._delay,!_&&L===1&&O.delay&&(f._delay=g=O.delay,f._start+=g,O.delay=0),w.to(T,O,P?P(C,T,R):0),w._ease=qt.none;w.duration()?d=g=0:f.timeline=0}else if(b){zu(or(w.vars.defaults,{ease:"none"})),w._ease=uo(b.ease||s.ease||"none");var k=0,te,J,X;if(Mi(b))b.forEach(function(z){return w.to(R,z,">")}),w.duration();else{O={};for(U in b)U==="ease"||U==="easeEach"||IR(U,b[U],O,b.easeEach);for(U in O)for(te=O[U].sort(function(z,G){return z.t-G.t}),k=0,C=0;C<te.length;C++)J=te[C],X={ease:J.e,duration:(J.t-(C?te[C-1].t:0))/100*d},X[U]=J.v,w.to(R,X,k),k+=X.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||f.duration(d=w.duration())}else f.timeline=0;return x===!0&&!kp&&(ms=Ua(f),Ln.killTweensOf(R),ms=0),fa(S,Ua(f),l),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!d&&!b&&f._start===Nn(S._time)&&Vi(v)&&dR(Ua(f))&&S.data!=="nested")&&(f._tTime=-_n,f.render(Math.max(0,-g)||0)),y&&jx(Ua(f),y),f}var t=e.prototype;return t.render=function(s,l,c){var f=this._time,h=this._tDur,d=this._dur,g=s<0,v=s>h-_n&&!g?h:s<_n?0:s,_,x,b,M,y,S,R,w;if(!d)mR(this,s,l,c);else if(v!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==g||this._lazy){if(_=v,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&g)return this.totalTime(M*100+s,l,c);if(_=Nn(v%M),v===h?(b=this._repeat,_=d):(y=Nn(v/M),b=~~y,b&&b===y?(_=d,b--):_>d&&(_=d)),S=this._yoyo&&b&1,S&&(_=d-_),y=ul(this._tTime,M),_===f&&!c&&this._initted&&b===y)return this._tTime=v,this;b!==y&&this.vars.repeatRefresh&&!S&&!this._lock&&_!==M&&this._initted&&(this._lock=c=1,this.render(Nn(M*b),!0).invalidate()._lock=0)}if(!this._initted){if(Qx(this,g?s:_,c,l,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&b!==y))return this;if(d!==this._dur)return this.render(s,l,c)}if(this._rEase){var C=_<f;if(C!==this._inv){var O=C?f:d-f;this._inv=C,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=f,this._invRecip=O?(C?-1:1)/O:0,this._invScale=C?-this.ratio:1-this.ratio,this._invEase=C?this._rEase:this._ease}this.ratio=R=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=R=this._ease(_/d);if(this._from&&(this.ratio=R=1-R),this._tTime=v,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!f&&v&&!l&&!y&&(lr(this,"onStart"),this._tTime!==v))return this;for(x=this._pt;x;)x.r(R,x.d),x=x._next;w&&w.render(s<0?s:w._dur*w._ease(_/this._dur),l,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!l&&(g&&im(this,s,l,c),lr(this,"onUpdate")),this._repeat&&b!==y&&this.vars.onRepeat&&!l&&this.parent&&lr(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(g&&!this._onUpdate&&im(this,s,!0,!0),(s||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&hs(this,1),!l&&!(g&&!f)&&(v||f||S)&&(lr(this,v===h?"onComplete":"onReverseComplete",!0),this._prom&&!(v<h&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,l,c,f,h){Xu||ur.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),g;return this._initted||dm(this,d),g=this._ease(d/this._dur),PR(this,s,l,c,f,g,d,h)?this.resetTo(s,l,c,f,1):(Gf(this,0),this.parent||Yx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,l){if(l===void 0&&(l="all"),!s&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?Vu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!pi),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,l,ms&&ms.vars.overwrite!==!0)._first||Vu(this),this.parent&&c!==this.timeline.totalDuration()&&cl(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,h=s?wr(s):f,d=this._ptLookup,g=this._pt,v,_,x,b,M,y,S;if((!l||l==="all")&&fR(f,h))return l==="all"&&(this._pt=0),Vu(this);for(v=this._op=this._op||[],l!=="all"&&(ui(l)&&(M={},ki(l,function(R){return M[R]=1}),l=M),l=FR(f,l)),S=f.length;S--;)if(~h.indexOf(f[S])){_=d[S],l==="all"?(v[S]=l,b=_,x={}):(x=v[S]=v[S]||{},b=l);for(M in b)y=_&&_[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&zf(this,y,"_pt"),delete _[M]),x!=="all"&&(x[M]=1)}return this._initted&&!this._pt&&g&&Vu(this),this},e.to=function(s,l){return new e(s,l,arguments[2])},e.from=function(s,l){return Bu(1,arguments)},e.delayedCall=function(s,l,c,f){return new e(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},e.fromTo=function(s,l,c){return Bu(2,arguments)},e.set=function(s,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new e(s,l)},e.killTweensOf=function(s,l,c){return Ln.killTweensOf(s,l,c)},e})(Wu);or(Wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ki("staggerTo,staggerFrom,staggerFromTo",function(a){Wn[a]=function(){var e=new Xi,t=am.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var pm=function(e,t,i){return e[t]=i},vy=function(e,t,i){return e[t](i)},zR=function(e,t,i,s){return e[t](s.fp,i)},BR=function(e,t,i){return e.setAttribute(t,i)},mm=function(e,t){return In(e[t])?vy:Wp(e[t])&&e.setAttribute?BR:pm},xy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},HR=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yy=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},gm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},GR=function(e,t,i,s){for(var l=this._pt,c;l;)c=l._next,l.p===s&&l.modifier(e,t,i),l=c},VR=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?zf(this,t,"_pt"):t.dep||(i=1),t=s;return!i},kR=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},Sy=function(e){for(var t=e._pt,i,s,l,c;t;){for(i=t._next,s=l;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:c)?t._prev._next=t:l=t,(t._next=s)?s._prev=t:c=t,t=i}e._pt=l},Wi=(function(){function a(t,i,s,l,c,f,h,d,g){this.t=i,this.s=l,this.c=c,this.p=s,this.r=f||xy,this.d=h||this,this.set=d||pm,this.pr=g||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,l){this.mSet=this.mSet||this.set,this.set=kR,this.m=i,this.mt=l,this.tween=s},a})();ki(em+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return Qp[a]=1}),ar.TweenMax=ar.TweenLite=Wn,ar.TimelineLite=ar.TimelineMax=Xi,Ln=new Xi({sortChildren:!1,defaults:Pu,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),rr.stringFilter=hy;var fo=[],Vf={},XR=[],My=0,WR=0,_m=function(e){return(Vf[e]||XR).map(function(t){return t()})},vm=function(){var e=Date.now(),t=[];e-My>2&&(_m("matchMediaInit"),fo.forEach(function(i){var s=i.queries,l=i.conditions,c,f,h,d;for(f in s)c=ca.matchMedia(s[f]).matches,c&&(h=1),c!==l[f]&&(l[f]=c,d=1);d&&(i.revert(),h&&t.push(i))}),_m("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),My=e,_m("matchMedia"))},by=(function(){function a(t,i){this.selector=i&&sm(i),this.data=[],this._r=[],this.isReverted=!1,this.id=WR++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,l){In(i)&&(l=s,s=i,i=In);var c=this,f=function(){var d=Rn,g=c.selector,v;return d&&d!==c&&d.data.push(c),l&&(c.selector=sm(l)),Rn=c,v=s.apply(c,arguments),In(v)&&c._r.push(v),Rn=d,c.selector=g,c.isReverted=!1,v};return c.last=f,i===In?f(c,function(h){return c.add(null,h)}):i?c[i]=f:f},e.ignore=function(i){var s=Rn;Rn=null,i(this),Rn=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof Wn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var l=this;if(i?(function(){for(var f=l.getTweens(),h=l.data.length,d;h--;)d=l.data[h],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(g){return f.splice(f.indexOf(g),1)}));for(f.map(function(g){return{g:g._dur||g._delay||g._sat&&!g._sat.vars.immediateRender?g.globalTime(0):-1/0,t:g}}).sort(function(g,v){return v.g-g.g||-1/0}).forEach(function(g){return g.t.revert(i)}),h=l.data.length;h--;)d=l.data[h],d instanceof Xi?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof Wn)&&d.revert&&d.revert(i);l._r.forEach(function(g){return g(i,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=fo.length;c--;)fo[c].id===this.id&&fo.splice(c,1)},e.revert=function(i){this.kill(i||{})},a})(),qR=(function(){function a(t){this.contexts=[],this.scope=t,Rn&&Rn.data.push(this)}var e=a.prototype;return e.add=function(i,s,l){ua(i)||(i={matches:i});var c=new by(0,l||this.scope),f=c.conditions={},h,d,g;Rn&&!c.selector&&(c.selector=Rn.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=i;for(d in i)d==="all"?g=1:(h=ca.matchMedia(i[d]),h&&(fo.indexOf(c)<0&&fo.push(c),(f[d]=h.matches)&&(g=1),h.addListener?h.addListener(vm):h.addEventListener("change",vm)));return g&&s(c,function(v){return c.add(null,v)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),kf={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return ly(s)})},timeline:function(e){return new Xi(e)},getTweensOf:function(e,t){return Ln.getTweensOf(e,t)},getProperty:function(e,t,i,s){ui(e)&&(e=wr(e)[0]);var l=oo(e||{}).get,c=i?Wx:Xx;return i==="native"&&(i=""),e&&(t?c((sr[t]&&sr[t].get||l)(e,t,i,s)):function(f,h,d){return c((sr[f]&&sr[f].get||l)(e,f,h,d))})},quickSetter:function(e,t,i){if(e=wr(e),e.length>1){var s=e.map(function(g){return qi.quickSetter(g,t,i)}),l=s.length;return function(g){for(var v=l;v--;)s[v](g)}}e=e[0]||{};var c=sr[t],f=oo(e),h=f.harness&&(f.harness.aliases||{})[t]||t,d=c?function(g){var v=new c;fl._pt=0,v.init(e,i?g+i:g,fl,0,[e]),v.render(1,v),fl._pt&&gm(1,fl)}:f.set(e,h);return c?d:function(g){return d(e,h,i?g+i:g,f,1)}},quickTo:function(e,t,i){var s,l=qi.to(e,or((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),c=function(h,d,g){return l.resetTo(t,h,d,g)};return c.tween=l,c},isTweening:function(e){return Ln.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=uo(e.ease,Pu.ease)),qx(Pu,e||{})},config:function(e){return qx(rr,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,l=e.defaults,c=e.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!sr[f]&&!ar[f]&&Fu(t+" effect requires "+f+" plugin.")}),$p[t]=function(f,h,d){return i(wr(f),or(h||{},l),d)},c&&(Xi.prototype[t]=function(f,h,d){return this.add($p[t](f,ua(h)?h:(d=h)&&{},this),d)})},registerEase:function(e,t){qt[e]=uo(t)},parseEase:function(e,t){return arguments.length?uo(e,t):qt},getById:function(e){return Ln.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Xi(e),s,l;for(i.smoothChildTiming=Vi(e.smoothChildTiming),Ln.remove(i),i._dp=0,i._time=i._tTime=Ln._time,s=Ln._first;s;)l=s._next,(t||!(!s._dur&&s instanceof Wn&&s.vars.onComplete===s._targets[0]))&&fa(i,s,s._start-s._delay),s=l;return fa(Ln,i,0),i},context:function(e,t){return e?new by(e,t):Rn},matchMedia:function(e){return new qR(e)},matchMediaRefresh:function(){return fo.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||vm()},addEventListener:function(e,t){var i=Vf[e]||(Vf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Vf[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:bR,wrapYoyo:ER,distribute:ty,random:iy,snap:ny,normalize:MR,getUnit:bi,clamp:vR,splitColor:uy,toArray:wr,selector:sm,mapRange:ay,pipe:yR,unitize:SR,interpolate:TR,shuffle:ey},install:zx,effects:$p,ticker:ur,updateRoot:Xi.updateRoot,plugins:sr,globalTimeline:Ln,core:{PropTween:Wi,globals:Bx,Tween:Wn,Timeline:Xi,Animation:Wu,getCache:oo,_removeLinkedListItem:zf,reverting:function(){return pi},context:function(e){return e&&Rn&&(Rn.data.push(e),e._ctx=Rn),Rn},suppressOverwrites:function(e){return kp=e}}};ki("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return kf[a]=Wn[a]}),ur.add(Xi.updateRoot),fl=kf.to({},{duration:0});var YR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ZR=function(e,t){var i=e._targets,s,l,c;for(s in t)for(l=i.length;l--;)c=e._ptLookup[l][s],c&&(c=c.d)&&(c._pt&&(c=YR(c,s)),c&&c.modifier&&c.modifier(t[s],e,i[l],s))},xm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,l,c){c._onInit=function(f){var h,d;if(ui(l)&&(h={},ki(l,function(g){return h[g]=1}),l=h),t){h={};for(d in l)h[d]=t(l[d]);l=h}ZR(f,l)}}}},qi=kf.registerPlugin({name:"attr",init:function(e,t,i,s,l){var c,f,h;this.tween=i;for(c in t)h=e.getAttribute(c)||"",f=this.add(e,"setAttribute",(h||0)+"",t[c],s,l,0,0,c),f.op=c,f.b=h,this._props.push(c)},render:function(e,t){for(var i=t._pt;i;)pi?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},xm("roundProps",om),xm("modifiers"),xm("snap",ny))||kf;Wn.version=Xi.version=qi.version="3.15.0",Ix=1,qp()&&hl(),qt.Power0,qt.Power1,qt.Power2,qt.Power3,qt.Power4,qt.Linear,qt.Quad,qt.Cubic,qt.Quart,qt.Quint,qt.Strong,qt.Elastic,qt.Back,qt.SteppedEase,qt.Bounce,qt.Sine,qt.Expo,qt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ey,gs,dl,ym,ho,Ty,Sm,KR=function(){return typeof window<"u"},Na={},po=180/Math.PI,pl=Math.PI/180,ml=Math.atan2,Ay=1e8,Mm=/([A-Z])/g,jR=/(left|right|width|margin|padding|x)/i,QR=/[\s,\(]\S/,ha={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},$R=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eC=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},tC=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ry=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},nC=function(e,t,i){return e.style[t]=i},iC=function(e,t,i){return e.style.setProperty(t,i)},rC=function(e,t,i){return e._gsap[t]=i},aC=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sC=function(e,t,i,s,l){var c=e._gsap;c.scaleX=c.scaleY=i,c.renderTransform(l,c)},oC=function(e,t,i,s,l){var c=e._gsap;c[t]=i,c.renderTransform(l,c)},On="transform",Yi=On+"Origin",lC=function a(e,t){var i=this,s=this.target,l=s.style,c=s._gsap;if(e in Na&&l){if(this.tfm=this.tfm||{},e!=="transform")e=ha[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return i.tfm[f]=Oa(s,f)}):this.tfm[e]=c.x?c[e]:Oa(s,e),e===Yi&&(this.tfm.zOrigin=c.zOrigin);else return ha.transform.split(",").forEach(function(f){return a.call(i,f,t)});if(this.props.indexOf(On)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(Yi,t,"")),e=On}(l||t)&&this.props.push(e,t,l[e])},wy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},uC=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,l,c;for(l=0;l<e.length;l+=3)e[l+1]?e[l+1]===2?t[e[l]](e[l+2]):t[e[l]]=e[l+2]:e[l+2]?i[e[l]]=e[l+2]:i.removeProperty(e[l].substr(0,2)==="--"?e[l]:e[l].replace(Mm,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),l=Sm(),(!l||!l.isStart)&&!i[On]&&(wy(i),s.zOrigin&&i[Yi]&&(i[Yi]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},Dy=function(e,t){var i={target:e,props:[],revert:uC,save:lC};return e._gsap||qi.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},Uy,Em=function(e,t){var i=gs.createElementNS?gs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):gs.createElement(e);return i&&i.style?i:gs.createElement(e)},cr=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Mm,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,gl(t)||t,1)||""},Ly="O,Moz,ms,Ms,Webkit".split(","),gl=function(e,t,i){var s=t||ho,l=s.style,c=5;if(e in l&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);c--&&!(Ly[c]+e in l););return c<0?null:(c===3?"ms":c>=0?Ly[c]:"")+e},Tm=function(){KR()&&window.document&&(Ey=window,gs=Ey.document,dl=gs.documentElement,ho=Em("div")||{style:{}},Em("div"),On=gl(On),Yi=On+"Origin",ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Uy=!!gl("perspective"),Sm=qi.core.reverting,ym=1)},Ny=function(e){var t=e.ownerSVGElement,i=Em("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),l;s.style.display="block",i.appendChild(s),dl.appendChild(i);try{l=s.getBBox()}catch{}return i.removeChild(s),dl.removeChild(i),l},Oy=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Py=function(e){var t,i;try{t=e.getBBox()}catch{t=Ny(e),i=1}return t&&(t.width||t.height)||i||(t=Ny(e)),t&&!t.width&&!t.x&&!t.y?{x:+Oy(e,["x","cx","x1"])||0,y:+Oy(e,["y","cy","y1"])||0,width:0,height:0}:t},Fy=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Py(e))},_s=function(e,t){if(t){var i=e.style,s;t in Na&&t!==Yi&&(t=On),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Mm,"-$1").toLowerCase())):i.removeAttribute(t)}},vs=function(e,t,i,s,l,c){var f=new Wi(e._pt,t,i,0,1,c?Cy:Ry);return e._pt=f,f.b=s,f.e=l,e._props.push(i),f},Iy={deg:1,rad:1,turn:1},cC={grid:1,flex:1},xs=function a(e,t,i,s){var l=parseFloat(i)||0,c=(i+"").trim().substr((l+"").length)||"px",f=ho.style,h=jR.test(t),d=e.tagName.toLowerCase()==="svg",g=(d?"client":"offset")+(h?"Width":"Height"),v=100,_=s==="px",x=s==="%",b,M,y,S;if(s===c||!l||Iy[s]||Iy[c])return l;if(c!=="px"&&!_&&(l=a(e,t,i,"px")),S=e.getCTM&&Fy(e),(x||c==="%")&&(Na[t]||~t.indexOf("adius")))return b=S?e.getBBox()[h?"width":"height"]:e[g],Gn(x?l/b*v:l/100*b);if(f[h?"width":"height"]=v+(_?c:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!d?e:e.parentNode,S&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===gs||!M.appendChild)&&(M=gs.body),y=M._gsap,y&&x&&y.width&&h&&y.time===ur.time&&!y.uncache)return Gn(l/y.width*v);if(x&&(t==="height"||t==="width")){var R=e.style[t];e.style[t]=v+s,b=e[g],R?e.style[t]=R:_s(e,t)}else(x||c==="%")&&!cC[cr(M,"display")]&&(f.position=cr(e,"position")),M===e&&(f.position="static"),M.appendChild(ho),b=ho[g],M.removeChild(ho),f.position="absolute";return h&&x&&(y=oo(M),y.time=ur.time,y.width=M[g]),Gn(_?b*l/v:b&&l?v/b*l:0)},Oa=function(e,t,i,s){var l;return ym||Tm(),t in ha&&t!=="transform"&&(t=ha[t],~t.indexOf(",")&&(t=t.split(",")[0])),Na[t]&&t!=="transform"?(l=Zu(e,s),l=t!=="transformOrigin"?l[t]:l.svg?l.origin:Wf(cr(e,Yi))+" "+l.zOrigin+"px"):(l=e.style[t],(!l||l==="auto"||s||~(l+"").indexOf("calc("))&&(l=Xf[t]&&Xf[t](e,t,i)||cr(e,t)||Vx(e,t)||(t==="opacity"?1:0))),i&&!~(l+"").trim().indexOf(" ")?xs(e,t,l,i)+i:l},fC=function(e,t,i,s){if(!i||i==="none"){var l=gl(t,e,1),c=l&&cr(e,l,1);c&&c!==i?(t=l,i=c):t==="borderColor"&&(i=cr(e,"borderTopColor"))}var f=new Wi(this._pt,e.style,t,0,1,yy),h=0,d=0,g,v,_,x,b,M,y,S,R,w,C,O;if(f.b=i,f.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=cr(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=cr(e,t)||s,M?e.style[t]=M:_s(e,t)),g=[i,s],hy(g),i=g[0],s=g[1],_=i.match(sl)||[],O=s.match(sl)||[],O.length){for(;v=sl.exec(s);)y=v[0],R=s.substring(h,v.index),b?b=(b+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(b=1),y!==(M=_[d++]||"")&&(x=parseFloat(M)||0,C=M.substr((x+"").length),y.charAt(1)==="="&&(y=ol(x,y)+C),S=parseFloat(y),w=y.substr((S+"").length),h=sl.lastIndex-w.length,w||(w=w||rr.units[t]||C,h===s.length&&(s+=w,f.e+=w)),C!==w&&(x=xs(e,t,M,w)||0),f._pt={_next:f._pt,p:R||d===1?R:",",s:x,c:S-x,m:b&&b<4||t==="zIndex"?Math.round:0});f.c=h<s.length?s.substring(h,s.length):""}else f.r=t==="display"&&s==="none"?Cy:Ry;return Fx.test(s)&&(f.e=0),this._pt=f,f},zy={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},hC=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=zy[i]||i,t[1]=zy[s]||s,t.join(" ")},dC=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,l=t.u,c=i._gsap,f,h,d;if(l==="all"||l===!0)s.cssText="",h=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],Na[f]&&(h=1,f=f==="transformOrigin"?Yi:On),_s(i,f);h&&(_s(i,On),c&&(c.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",Zu(i,1),c.uncache=1,wy(s)))}},Xf={clearProps:function(e,t,i,s,l){if(l.data!=="isFromStart"){var c=e._pt=new Wi(e._pt,t,i,0,0,dC);return c.u=s,c.pr=-10,c.tween=l,e._props.push(i),1}}},Yu=[1,0,0,1,0,0],By={},Hy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Gy=function(e){var t=cr(e,On);return Hy(t)?Yu:t.substr(7).match(Px).map(Gn)},Am=function(e,t){var i=e._gsap||oo(e),s=e.style,l=Gy(e),c,f,h,d;return i.svg&&e.getAttribute("transform")?(h=e.transform.baseVal.consolidate().matrix,l=[h.a,h.b,h.c,h.d,h.e,h.f],l.join(",")==="1,0,0,1,0,0"?Yu:l):(l===Yu&&!e.offsetParent&&e!==dl&&!i.svg&&(h=s.display,s.display="block",c=e.parentNode,(!c||!e.offsetParent&&!e.getBoundingClientRect().width)&&(d=1,f=e.nextElementSibling,dl.appendChild(e)),l=Gy(e),h?s.display=h:_s(e,"display"),d&&(f?c.insertBefore(e,f):c?c.appendChild(e):dl.removeChild(e))),t&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},Rm=function(e,t,i,s,l,c){var f=e._gsap,h=l||Am(e,!0),d=f.xOrigin||0,g=f.yOrigin||0,v=f.xOffset||0,_=f.yOffset||0,x=h[0],b=h[1],M=h[2],y=h[3],S=h[4],R=h[5],w=t.split(" "),C=parseFloat(w[0])||0,O=parseFloat(w[1])||0,L,U,T,P;i?h!==Yu&&(U=x*y-b*M)&&(T=C*(y/U)+O*(-M/U)+(M*R-y*S)/U,P=C*(-b/U)+O*(x/U)-(x*R-b*S)/U,C=T,O=P):(L=Py(e),C=L.x+(~w[0].indexOf("%")?C/100*L.width:C),O=L.y+(~(w[1]||w[0]).indexOf("%")?O/100*L.height:O)),s||s!==!1&&f.smooth?(S=C-d,R=O-g,f.xOffset=v+(S*x+R*M)-S,f.yOffset=_+(S*b+R*y)-R):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=O,f.smooth=!!s,f.origin=t,f.originIsAbsolute=!!i,e.style[Yi]="0px 0px",c&&(vs(c,f,"xOrigin",d,C),vs(c,f,"yOrigin",g,O),vs(c,f,"xOffset",v,f.xOffset),vs(c,f,"yOffset",_,f.yOffset)),e.setAttribute("data-svg-origin",C+" "+O)},Zu=function(e,t){var i=e._gsap||new py(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,l=i.scaleX<0,c="px",f="deg",h=getComputedStyle(e),d=cr(e,Yi)||"0",g,v,_,x,b,M,y,S,R,w,C,O,L,U,T,P,I,H,k,te,J,X,z,G,ee,ue,V,B,Z,ve,ye,Ce;return g=v=_=M=y=S=R=w=C=0,x=b=1,i.svg=!!(e.getCTM&&Fy(e)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(s[On]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[On]!=="none"?h[On]:"")),s.scale=s.rotate=s.translate="none"),U=Am(e,i.svg),i.svg&&(i.uncache?(ee=e.getBBox(),d=i.xOrigin-ee.x+"px "+(i.yOrigin-ee.y)+"px",G=""):G=!t&&e.getAttribute("data-svg-origin"),Rm(e,G||d,!!G||i.originIsAbsolute,i.smooth!==!1,U)),O=i.xOrigin||0,L=i.yOrigin||0,U!==Yu&&(H=U[0],k=U[1],te=U[2],J=U[3],g=X=U[4],v=z=U[5],U.length===6?(x=Math.sqrt(H*H+k*k),b=Math.sqrt(J*J+te*te),M=H||k?ml(k,H)*po:0,R=te||J?ml(te,J)*po+M:0,R&&(b*=Math.abs(Math.cos(R*pl))),i.svg&&(g-=O-(O*H+L*te),v-=L-(O*k+L*J))):(Ce=U[6],ve=U[7],V=U[8],B=U[9],Z=U[10],ye=U[11],g=U[12],v=U[13],_=U[14],T=ml(Ce,Z),y=T*po,T&&(P=Math.cos(-T),I=Math.sin(-T),G=X*P+V*I,ee=z*P+B*I,ue=Ce*P+Z*I,V=X*-I+V*P,B=z*-I+B*P,Z=Ce*-I+Z*P,ye=ve*-I+ye*P,X=G,z=ee,Ce=ue),T=ml(-te,Z),S=T*po,T&&(P=Math.cos(-T),I=Math.sin(-T),G=H*P-V*I,ee=k*P-B*I,ue=te*P-Z*I,ye=J*I+ye*P,H=G,k=ee,te=ue),T=ml(k,H),M=T*po,T&&(P=Math.cos(T),I=Math.sin(T),G=H*P+k*I,ee=X*P+z*I,k=k*P-H*I,z=z*P-X*I,H=G,X=ee),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,S=180-S),x=Gn(Math.sqrt(H*H+k*k+te*te)),b=Gn(Math.sqrt(z*z+Ce*Ce)),T=ml(X,z),R=Math.abs(T)>2e-4?T*po:0,C=ye?1/(ye<0?-ye:ye):0),i.svg&&(G=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Hy(cr(e,On)),G&&e.setAttribute("transform",G))),Math.abs(R)>90&&Math.abs(R)<270&&(l?(x*=-1,R+=M<=0?180:-180,M+=M<=0?180:-180):(b*=-1,R+=R<=0?180:-180)),t=t||i.uncache,i.x=g-((i.xPercent=g&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-g)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+c,i.y=v-((i.yPercent=v&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-v)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+c,i.z=_+c,i.scaleX=Gn(x),i.scaleY=Gn(b),i.rotation=Gn(M)+f,i.rotationX=Gn(y)+f,i.rotationY=Gn(S)+f,i.skewX=R+f,i.skewY=w+f,i.transformPerspective=C+c,(i.zOrigin=parseFloat(d.split(" ")[2])||!t&&i.zOrigin||0)&&(s[Yi]=Wf(d)),i.xOffset=i.yOffset=0,i.force3D=rr.force3D,i.renderTransform=i.svg?mC:Uy?Vy:pC,i.uncache=0,i},Wf=function(e){return(e=e.split(" "))[0]+" "+e[1]},Cm=function(e,t,i){var s=bi(t);return Gn(parseFloat(t)+parseFloat(xs(e,"x",i+"px",s)))+s},pC=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Vy(e,t)},mo="0deg",Ku="0px",go=") ",Vy=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.z,d=i.rotation,g=i.rotationY,v=i.rotationX,_=i.skewX,x=i.skewY,b=i.scaleX,M=i.scaleY,y=i.transformPerspective,S=i.force3D,R=i.target,w=i.zOrigin,C="",O=S==="auto"&&e&&e!==1||S===!0;if(w&&(v!==mo||g!==mo)){var L=parseFloat(g)*pl,U=Math.sin(L),T=Math.cos(L),P;L=parseFloat(v)*pl,P=Math.cos(L),c=Cm(R,c,U*P*-w),f=Cm(R,f,-Math.sin(L)*-w),h=Cm(R,h,T*P*-w+w)}y!==Ku&&(C+="perspective("+y+go),(s||l)&&(C+="translate("+s+"%, "+l+"%) "),(O||c!==Ku||f!==Ku||h!==Ku)&&(C+=h!==Ku||O?"translate3d("+c+", "+f+", "+h+") ":"translate("+c+", "+f+go),d!==mo&&(C+="rotate("+d+go),g!==mo&&(C+="rotateY("+g+go),v!==mo&&(C+="rotateX("+v+go),(_!==mo||x!==mo)&&(C+="skew("+_+", "+x+go),(b!==1||M!==1)&&(C+="scale("+b+", "+M+go),R.style[On]=C||"translate(0, 0)"},mC=function(e,t){var i=t||this,s=i.xPercent,l=i.yPercent,c=i.x,f=i.y,h=i.rotation,d=i.skewX,g=i.skewY,v=i.scaleX,_=i.scaleY,x=i.target,b=i.xOrigin,M=i.yOrigin,y=i.xOffset,S=i.yOffset,R=i.forceCSS,w=parseFloat(c),C=parseFloat(f),O,L,U,T,P;h=parseFloat(h),d=parseFloat(d),g=parseFloat(g),g&&(g=parseFloat(g),d+=g,h+=g),h||d?(h*=pl,d*=pl,O=Math.cos(h)*v,L=Math.sin(h)*v,U=Math.sin(h-d)*-_,T=Math.cos(h-d)*_,d&&(g*=pl,P=Math.tan(d-g),P=Math.sqrt(1+P*P),U*=P,T*=P,g&&(P=Math.tan(g),P=Math.sqrt(1+P*P),O*=P,L*=P)),O=Gn(O),L=Gn(L),U=Gn(U),T=Gn(T)):(O=v,T=_,L=U=0),(w&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(w=xs(x,"x",c,"px"),C=xs(x,"y",f,"px")),(b||M||y||S)&&(w=Gn(w+b-(b*O+M*U)+y),C=Gn(C+M-(b*L+M*T)+S)),(s||l)&&(P=x.getBBox(),w=Gn(w+s/100*P.width),C=Gn(C+l/100*P.height)),P="matrix("+O+","+L+","+U+","+T+","+w+","+C+")",x.setAttribute("transform",P),R&&(x.style[On]=P)},gC=function(e,t,i,s,l){var c=360,f=ui(l),h=parseFloat(l)*(f&&~l.indexOf("rad")?po:1),d=h-s,g=s+d+"deg",v,_;return f&&(v=l.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*Ay)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*Ay)%c-~~(d/c)*c)),e._pt=_=new Wi(e._pt,t,i,s,d,JR),_.e=g,_.u="deg",e._props.push(i),_},ky=function(e,t){for(var i in t)e[i]=t[i];return e},_C=function(e,t,i){var s=ky({},i._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=i.style,f,h,d,g,v,_,x,b;s.svg?(d=i.getAttribute("transform"),i.setAttribute("transform",""),c[On]=t,f=Zu(i,1),_s(i,On),i.setAttribute("transform",d)):(d=getComputedStyle(i)[On],c[On]=t,f=Zu(i,1),c[On]=d);for(h in Na)d=s[h],g=f[h],d!==g&&l.indexOf(h)<0&&(x=bi(d),b=bi(g),v=x!==b?xs(i,h,d,b):parseFloat(d),_=parseFloat(g),e._pt=new Wi(e._pt,f,h,v,_-v,bm),e._pt.u=b||0,e._props.push(h));ky(f,s)};ki("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",l="Left",c=(e<3?[t,i,s,l]:[t+l,t+i,s+i,s+l]).map(function(f){return e<2?a+f:"border"+f+a});Xf[e>1?"border"+a:a]=function(f,h,d,g,v){var _,x;if(arguments.length<4)return _=c.map(function(b){return Oa(f,b,d)}),x=_.join(" "),x.split(_[0]).length===5?_[0]:x;_=(g+"").split(" "),x={},c.forEach(function(b,M){return x[b]=_[M]=_[M]||_[(M-1)/2|0]}),f.init(h,x,v)}});var Xy={name:"css",register:Tm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,l){var c=this._props,f=e.style,h=i.vars.startAt,d,g,v,_,x,b,M,y,S,R,w,C,O,L,U,T,P;ym||Tm(),this.styles=this.styles||Dy(e),T=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(g=t[M],!(sr[M]&&my(M,t,i,s,e,l)))){if(x=typeof g,b=Xf[M],x==="function"&&(g=g.call(i,s,e,l),x=typeof g),x==="string"&&~g.indexOf("random(")&&(g=Gu(g)),b)b(this,e,M,g,i)&&(U=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(e).getPropertyValue(M)+"").trim(),g+="",ps.lastIndex=0,ps.test(d)||(y=bi(d),S=bi(g),S?y!==S&&(d=xs(e,M,d,S)+S):y&&(g+=y)),this.add(f,"setProperty",d,g,s,l,0,0,M),c.push(M),T.push(M,0,f[M]);else if(x!=="undefined"){if(h&&M in h?(d=typeof h[M]=="function"?h[M].call(i,s,e,l):h[M],ui(d)&&~d.indexOf("random(")&&(d=Gu(d)),bi(d+"")||d==="auto"||(d+=rr.units[M]||bi(Oa(e,M))||""),(d+"").charAt(1)==="="&&(d=Oa(e,M))):d=Oa(e,M),_=parseFloat(d),R=x==="string"&&g.charAt(1)==="="&&g.substr(0,2),R&&(g=g.substr(2)),v=parseFloat(g),M in ha&&(M==="autoAlpha"&&(_===1&&Oa(e,"visibility")==="hidden"&&v&&(_=0),T.push("visibility",0,f.visibility),vs(this,f,"visibility",_?"inherit":"hidden",v?"inherit":"hidden",!v)),M!=="scale"&&M!=="transform"&&(M=ha[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in Na,w){if(this.styles.save(M),P=g,x==="string"&&g.substring(0,6)==="var(--"){if(g=cr(e,g.substring(4,g.indexOf(")"))),g.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=g,g=cr(e,"perspective"),I?e.style.perspective=I:_s(e,"perspective")}v=parseFloat(g)}if(C||(O=e._gsap,O.renderTransform&&!t.parseTransform||Zu(e,t.parseTransform),L=t.smoothOrigin!==!1&&O.smooth,C=this._pt=new Wi(this._pt,f,On,0,1,O.renderTransform,O,0,-1),C.dep=1),M==="scale")this._pt=new Wi(this._pt,O,"scaleY",O.scaleY,(R?ol(O.scaleY,R+v):v)-O.scaleY||0,bm),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){T.push(Yi,0,f[Yi]),g=hC(g),O.svg?Rm(e,g,0,L,0,this):(S=parseFloat(g.split(" ")[2])||0,S!==O.zOrigin&&vs(this,O,"zOrigin",O.zOrigin,S),vs(this,f,M,Wf(d),Wf(g)));continue}else if(M==="svgOrigin"){Rm(e,g,1,L,0,this);continue}else if(M in By){gC(this,O,M,_,R?ol(_,R+g):g);continue}else if(M==="smoothOrigin"){vs(this,O,"smooth",O.smooth,g);continue}else if(M==="force3D"){O[M]=g;continue}else if(M==="transform"){_C(this,g,e);continue}}else M in f||(M=gl(M)||M);if(w||(v||v===0)&&(_||_===0)&&!QR.test(g)&&M in f)y=(d+"").substr((_+"").length),v||(v=0),S=bi(g)||(M in rr.units?rr.units[M]:y),y!==S&&(_=xs(e,M,d,S)),this._pt=new Wi(this._pt,w?O:f,M,_,(R?ol(_,R+v):v)-_,!w&&(S==="px"||M==="zIndex")&&t.autoRound!==!1?tC:bm),this._pt.u=S||0,w&&P!==g?(this._pt.b=d,this._pt.e=P,this._pt.r=eC):y!==S&&S!=="%"&&(this._pt.b=d,this._pt.r=$R);else if(M in f)fC.call(this,e,M,d,R?R+g:g);else if(M in e)this.add(e,M,d||e[M],R?R+g:g,s,l);else if(M!=="parseTransform"){jp(M,g);continue}w||(M in f?T.push(M,0,f[M]):typeof e[M]=="function"?T.push(M,2,e[M]()):T.push(M,1,d||e[M])),c.push(M)}}U&&Sy(this)},render:function(e,t){if(t.tween._time||!Sm())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Oa,aliases:ha,getSetter:function(e,t,i){var s=ha[t];return s&&s.indexOf(",")<0&&(t=s),t in Na&&t!==Yi&&(e._gsap.x||Oa(e,"x"))?i&&Ty===i?t==="scale"?aC:rC:(Ty=i||{})&&(t==="scale"?sC:oC):e.style&&!Wp(e.style[t])?nC:~t.indexOf("-")?iC:mm(e,t)},core:{_removeProperty:_s,_getMatrix:Am}};qi.utils.checkPrefix=gl,qi.core.getStyleSaver=Dy,(function(a,e,t,i){var s=ki(a+","+e+","+t,function(l){Na[l]=1});ki(e,function(l){rr.units[l]="deg",By[l]=1}),ha[s[13]]=a+","+e,ki(i,function(l){var c=l.split(":");ha[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){rr.units[a]="px"}),qi.registerPlugin(Xy);var Rt=qi.registerPlugin(Xy)||qi;Rt.core.Tween;const vC=({position:a="right",colors:e=["#94ff27","#b6ff9f"],items:t=[],socialItems:i=[],displaySocials:s=!0,displayItemNumbering:l=!0,className:c,logoUrl:f="",menuButtonColor:h="#eef5f2",openMenuButtonColor:d="#eef5f2",accentColor:g="#94ff27",changeMenuColorOnOpen:v=!0,isFixed:_=!1,closeOnClickAway:x=!0,onMenuOpen:b,onMenuClose:M})=>{const[y,S]=ke.useState(!1),R=ke.useRef(!1),w=ke.useRef(null),C=ke.useRef(null),O=ke.useRef([]),L=ke.useRef(null),U=ke.useRef(null),T=ke.useRef(null),P=ke.useRef(null),[I,H]=ke.useState(["菜单","关闭"]),k=ke.useRef(null),te=ke.useRef(null),J=ke.useRef(null),X=ke.useRef(null),z=ke.useRef(null),G=ke.useRef(null),ee=ke.useRef(!1),ue=ke.useRef(null);ke.useLayoutEffect(()=>{const re=Rt.context(()=>{const Me=w.current,Xe=C.current,ze=L.current,et=U.current,He=T.current,Qe=P.current;if(!Me||!ze||!et||!He||!Qe)return;let ot=[];Xe&&(ot=Array.from(Xe.querySelectorAll(".sm-prelayer"))),O.current=ot;const at=a==="left"?-100:100;Rt.set([Me,...ot],{xPercent:at,opacity:1}),Xe&&Rt.set(Xe,{xPercent:0,opacity:1}),Rt.set(ze,{transformOrigin:"50% 50%",rotate:0}),Rt.set(et,{transformOrigin:"50% 50%",rotate:90}),Rt.set(He,{rotate:0,transformOrigin:"50% 50%"}),Rt.set(Qe,{yPercent:0}),G.current&&Rt.set(G.current,{color:h})});return()=>re.revert()},[h,a]);const V=ke.useCallback(()=>{var Bt,j,vt;const re=w.current,Me=O.current;if(!re)return null;(Bt=k.current)==null||Bt.kill(),(j=te.current)==null||j.kill(),(vt=ue.current)==null||vt.kill();const Xe=Array.from(re.querySelectorAll(".sm-panel-itemLabel")),ze=Array.from(re.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item")),et=re.querySelector(".sm-socials-title"),He=Array.from(re.querySelectorAll(".sm-socials-link")),Qe=a==="left"?-100:100;Xe.length&&Rt.set(Xe,{yPercent:140,rotate:10}),ze.length&&Rt.set(ze,{"--sm-num-opacity":0}),et&&Rt.set(et,{opacity:0}),He.length&&Rt.set(He,{y:25,opacity:0});const ot=Rt.timeline({paused:!0});Me.forEach((ut,Ct)=>{ot.fromTo(ut,{xPercent:Qe},{xPercent:0,duration:.5,ease:"power4.out"},Ct*.07)});const se=(Me.length?(Me.length-1)*.07:0)+(Me.length?.08:0),yt=.65;if(ot.fromTo(re,{xPercent:Qe},{xPercent:0,duration:yt,ease:"power4.out"},se),Xe.length){const ut=se+yt*.15;ot.to(Xe,{yPercent:0,rotate:0,duration:1,ease:"power4.out",stagger:{each:.1,from:"start"}},ut),ze.length&&ot.to(ze,{duration:.6,ease:"power2.out","--sm-num-opacity":1,stagger:{each:.08,from:"start"}},ut+.1)}if(et||He.length){const ut=se+yt*.4;et&&ot.to(et,{opacity:1,duration:.5,ease:"power2.out"},ut),He.length&&ot.to(He,{y:0,opacity:1,duration:.55,ease:"power3.out",stagger:{each:.08,from:"start"},onComplete:()=>Rt.set(He,{clearProps:"opacity"})},ut+.04)}return k.current=ot,ot},[a]),B=ke.useCallback(()=>{if(ee.current)return;ee.current=!0;const re=V();re?(re.eventCallback("onComplete",()=>{ee.current=!1}),re.play(0)):ee.current=!1},[V]),Z=ke.useCallback(()=>{var et,He,Qe;(et=k.current)==null||et.kill(),k.current=null,(He=ue.current)==null||He.kill();const re=w.current,Me=O.current;if(!re)return;const Xe=[...Me,re];(Qe=te.current)==null||Qe.kill();const ze=a==="left"?-100:100;te.current=Rt.to(Xe,{xPercent:ze,duration:.32,ease:"power3.in",overwrite:"auto",onComplete:()=>{const ot=Array.from(re.querySelectorAll(".sm-panel-itemLabel"));ot.length&&Rt.set(ot,{yPercent:140,rotate:10});const at=Array.from(re.querySelectorAll(".sm-panel-list[data-numbering] .sm-panel-item"));at.length&&Rt.set(at,{"--sm-num-opacity":0});const se=re.querySelector(".sm-socials-title"),yt=Array.from(re.querySelectorAll(".sm-socials-link"));se&&Rt.set(se,{opacity:0}),yt.length&&Rt.set(yt,{y:25,opacity:0}),ee.current=!1}})},[a]),ve=ke.useCallback(re=>{var Xe;const Me=T.current;Me&&((Xe=J.current)==null||Xe.kill(),J.current=Rt.to(Me,{rotate:re?225:0,duration:re?.8:.35,ease:re?"power4.out":"power3.inOut",overwrite:"auto"}))},[]),ye=ke.useCallback(re=>{var Xe;const Me=G.current;if(Me)if((Xe=z.current)==null||Xe.kill(),v){const ze=re?d:h;z.current=Rt.to(Me,{color:ze,delay:.18,duration:.3,ease:"power2.out"})}else Rt.set(Me,{color:h})},[d,h,v]);st.useEffect(()=>{if(!G.current)return;const re=v&&R.current?d:h;Rt.set(G.current,{color:re})},[v,h,d]);const Ce=ke.useCallback(re=>{var Qe;const Me=P.current;if(!Me)return;(Qe=X.current)==null||Qe.kill();const Xe=re?"菜单":"关闭",ze=re?"关闭":"菜单",et=[Xe,ze,Xe,ze,ze];H(et),Rt.set(Me,{yPercent:0});const He=(et.length-1)/et.length*100;X.current=Rt.to(Me,{yPercent:-He,duration:.78,ease:"power4.out"})},[]),ne=ke.useCallback(()=>{R.current&&(R.current=!1,S(!1),M==null||M(),Z(),ve(!1),ye(!1),Ce(!1))},[Z,ve,ye,Ce,M]),Se=ke.useCallback(()=>{const re=!R.current;R.current=re,S(re),re?(b==null||b(),B()):(M==null||M(),Z()),ve(re),ye(re),Ce(re)},[B,Z,ve,ye,Ce,b,M]);return st.useEffect(()=>{if(!x||!y)return;const re=Me=>{w.current&&!w.current.contains(Me.target)&&G.current&&!G.current.contains(Me.target)&&ne()};return document.addEventListener("mousedown",re),()=>document.removeEventListener("mousedown",re)},[x,y,ne]),st.createElement("div",{className:(c?`${c} `:"")+"staggered-menu-wrapper"+(_?" fixed-wrapper":""),style:g?{"--sm-accent":g}:void 0,"data-position":a,"data-open":y||void 0},st.createElement("div",{ref:C,className:"sm-prelayers","aria-hidden":"true"},(e&&e.length?e.slice(0,3):["#94ff27","#b6ff9f"]).map((re,Me)=>st.createElement("div",{key:Me,className:"sm-prelayer",style:{background:re}}))),st.createElement("header",{className:"staggered-menu-header","aria-label":"移动端导航"},st.createElement("div",{className:"sm-logo","aria-label":"Logo"},f?st.createElement("img",{src:f,alt:"Logo",className:"sm-logo-img",draggable:!1,width:110,height:24}):st.createElement("span",{className:"sm-logo-text"},"LXY")),st.createElement("button",{ref:G,className:"sm-toggle","aria-label":y?"关闭导航菜单":"打开导航菜单","aria-expanded":y,"aria-controls":"staggered-menu-panel",onClick:Se,type:"button"},st.createElement("span",{className:"sm-toggle-textWrap","aria-hidden":"true"},st.createElement("span",{ref:P,className:"sm-toggle-textInner"},I.map((re,Me)=>st.createElement("span",{className:"sm-toggle-line",key:`${re}-${Me}`},re)))),st.createElement("span",{ref:T,className:"sm-icon","aria-hidden":"true"},st.createElement("span",{ref:L,className:"sm-icon-line"}),st.createElement("span",{ref:U,className:"sm-icon-line sm-icon-line-v"})))),st.createElement("aside",{id:"staggered-menu-panel",ref:w,className:"staggered-menu-panel","aria-hidden":!y},st.createElement("div",{className:"sm-panel-inner"},st.createElement("ul",{className:"sm-panel-list",role:"list","data-numbering":l||void 0},t.map((re,Me)=>st.createElement("li",{className:"sm-panel-itemWrap",key:`${re.label}-${Me}`},st.createElement("a",{className:"sm-panel-item",href:re.link,"aria-label":re.ariaLabel,"data-index":Me+1,onClick:ne},st.createElement("span",{className:"sm-panel-itemLabel"},re.label))))),s&&i.length>0&&st.createElement("div",{className:"sm-socials","aria-label":"联系信息"},st.createElement("h3",{className:"sm-socials-title"},"Contact"),st.createElement("ul",{className:"sm-socials-list",role:"list"},i.map((re,Me)=>st.createElement("li",{key:`${re.label}-${Me}`,className:"sm-socials-item"},st.createElement("a",{href:re.link,className:"sm-socials-link"},re.label))))))))},Wy={blue:"linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",purple:"linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",red:"linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",indigo:"linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",orange:"linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",green:"linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))"},xC=({items:a=[],className:e=""})=>{const t=i=>Wy[i]?{background:Wy[i]}:{background:i};return st.createElement("div",{className:`icon-btns ${e}`},a.map((i,s)=>st.createElement("button",{key:`${i.label}-${s}`,className:`icon-btn ${i.customClass||""}`,"aria-label":i.label,type:"button"},st.createElement("span",{className:"icon-btn__back",style:t(i.color)}),st.createElement("span",{className:"icon-btn__front"},st.createElement("span",{className:"icon-btn__icon","aria-hidden":"true"},i.icon)),st.createElement("span",{className:"icon-btn__label"},i.label))))};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qy=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MC=ke.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:c,...f},h)=>ke.createElement("svg",{ref:h,...SC,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:qy("lucide",s),...f},[...c.map(([d,g])=>ke.createElement(d,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=(a,e)=>{const t=ke.forwardRef(({className:i,...s},l)=>ke.createElement(MC,{ref:l,iconNode:e,className:qy(`lucide-${yC(a)}`,i),...s}));return t.displayName=`${a}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bC=_l("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EC=_l("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=_l("ClipboardCheck",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=_l("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=_l("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=_l("Workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]),Yy=new WeakMap;function vl(a,e){if(!a||Yy.has(a))return;const t=Qv.createRoot(a);Yy.set(a,t),t.render(e)}function wC(){document.querySelectorAll("[data-countup]").forEach(a=>{const e=Number(a.dataset.to||0),t=Number(a.dataset.from||0),i=a.dataset.suffix||"",s=a.dataset.separator||"",l=Number(a.dataset.duration||1.35);vl(a,st.createElement(st.Fragment,null,st.createElement(Z2,{from:t,to:e,duration:l,separator:s,className:"count-up-core"}),i?st.createElement("span",{className:"count-up-suffix"},i):null))})}const Zy=[{src:"assets/tools/tool-sketch.svg",alt:"Sketch"},{src:"assets/tools/tool-figma.svg",alt:"Figma"},{src:"assets/tools/tool-comfyui.svg",alt:"ComfyUI"},{src:"assets/tools/tool-blender.svg",alt:"Blender"},{src:"assets/tools/tool-codex.svg",alt:"Codex"},{src:"assets/tools/tool-photoshop.svg",alt:"Photoshop"},{src:"assets/tools/tool-illustrator.svg",alt:"Illustrator"},{src:"assets/tools/tool-after-effects.svg",alt:"After Effects"},{src:"assets/tools/tool-premiere-pro.svg",alt:"Premiere Pro"}];function DC(){const a=document.getElementById("toolLogoLoop");vl(a,st.createElement(Vp,{logos:Zy,speed:88,direction:"left",logoHeight:30,gap:64,hoverSpeed:24,fadeOut:!0,fadeOutColor:"#080a09",scaleOnHover:!0,ariaLabel:"设计软件与工具",className:"portfolio-logo-loop"}));const e=document.getElementById("mobileToolLogoLoop");vl(e,st.createElement(Vp,{logos:Zy,speed:58,direction:"left",logoHeight:24,gap:28,hoverSpeed:16,fadeOut:!0,fadeOutColor:"#000000",scaleOnHover:!0,ariaLabel:"设计软件与工具",className:"portfolio-logo-loop"}))}function Ky(){document.querySelectorAll(".resume-timeline-card[data-spotlight-card]").forEach(a=>{let e=[];try{e=JSON.parse(a.dataset.bullets||"[]")}catch{e=[]}vl(a,st.createElement(J2,{className:"timeline-card-shell",spotlightColor:"rgba(148, 255, 39, 0.13)"},st.createElement("ul",{className:"timeline-spotlight-list"},e.map((t,i)=>st.createElement("li",{key:`${i}-${t}`},t)))))})}const jy=[{icon:st.createElement(CC,null),color:"linear-gradient(135deg, #94ff27 0%, #5f7cff 100%)",label:"复杂系统梳理"},{icon:st.createElement(EC,null),color:"linear-gradient(135deg, #b6ff9f 0%, #26d7ff 100%)",label:"数据可视化"},{icon:st.createElement(bC,null),color:"linear-gradient(135deg, #9bcf97 0%, #94ff27 100%)",label:"组件与规范"},{icon:st.createElement(AC,null),color:"linear-gradient(135deg, #76ead7 0%, #94ff27 100%)",label:"政企产品经验"},{icon:st.createElement(RC,null),color:"linear-gradient(135deg, #ff9b3d 0%, #94ff27 100%)",label:"AI 多媒体输出"},{icon:st.createElement(TC,null),color:"linear-gradient(135deg, #ff4d78 0%, #b6ff9f 100%)",label:"产品助理能力"}];function Qy(){document.querySelectorAll("[data-glass-icon]").forEach(a=>{const e=Number(a.dataset.glassIcon||0),t=jy[e]||jy[0],i=a.classList.contains("mobile-glass-icon")?"mobile-cap-glass-icons":"cap-glass-icons";vl(a,st.createElement(xC,{items:[t],className:i}))})}function UC(){const a=document.getElementById("mobileStaggeredMenu");vl(a,st.createElement(vC,{position:"right",colors:["#94ff27","#b6ff9f","#9bcf97"],accentColor:"#94ff27",items:[{label:"首页",ariaLabel:"返回首页",link:"#m-home"},{label:"简历",ariaLabel:"查看简历",link:"#m-resume"},{label:"作品",ariaLabel:"查看作品",link:"#m-works"},{label:"优势",ariaLabel:"查看个人优势",link:"#m-capability"},{label:"联系",ariaLabel:"查看联系方式",link:"#m-contact"}],socialItems:[{label:"18679188660",link:"tel:18679188660"},{label:"lxy152827@sina.com",link:"mailto:lxy152827@sina.com"}],displaySocials:!0,displayItemNumbering:!0,isFixed:!0,closeOnClickAway:!0,menuButtonColor:"#eef5f2",openMenuButtonColor:"#eef5f2"}))}function Jy(){wC(),DC(),Ky(),Qy(),UC()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Jy,{once:!0}):Jy(),requestAnimationFrame(()=>{Ky(),Qy()});function LC(a,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(a,i.key,i)}}function NC(a,e,t){return e&&LC(a.prototype,e),a}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var mi,qf,fr,ys,Ss,xl,$y,_o,yl,eS,Pa,Yr,tS,nS=function(){return mi||typeof window<"u"&&(mi=window.gsap)&&mi.registerPlugin&&mi},iS=1,Sl=[],It=[],da=[],ju=Date.now,wm=function(e,t){return t},OC=function(){var e=yl.core,t=e.bridge||{},i=e._scrollers,s=e._proxies;i.push.apply(i,It),s.push.apply(s,da),It=i,da=s,wm=function(c,f){return t[c](f)}},Ms=function(e,t){return~da.indexOf(e)&&da[da.indexOf(e)+1][t]},Qu=function(e){return!!~eS.indexOf(e)},Li=function(e,t,i,s,l){return e.addEventListener(t,i,{passive:s!==!1,capture:!!l})},Ni=function(e,t,i,s){return e.removeEventListener(t,i,!!s)},Yf="scrollLeft",Zf="scrollTop",Dm=function(){return Pa&&Pa.isPressed||It.cache++},Kf=function(e,t){var i=function s(l){if(l||l===0){iS&&(fr.history.scrollRestoration="manual");var c=Pa&&Pa.isPressed;l=s.v=Math.round(l)||(Pa&&Pa.iOS?1:0),e(l),s.cacheID=It.cache,c&&wm("ss",l)}else(t||It.cache!==s.cacheID||wm("ref"))&&(s.cacheID=It.cache,s.v=e());return s.v+s.offset};return i.offset=0,e&&i},Oi={s:Yf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kf(function(a){return arguments.length?fr.scrollTo(a,ni.sc()):fr.pageXOffset||ys[Yf]||Ss[Yf]||xl[Yf]||0})},ni={s:Zf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Oi,sc:Kf(function(a){return arguments.length?fr.scrollTo(Oi.sc(),a):fr.pageYOffset||ys[Zf]||Ss[Zf]||xl[Zf]||0})},Zi=function(e,t){return(t&&t._ctx&&t._ctx.selector||mi.utils.toArray)(e)[0]||(typeof e=="string"&&mi.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},PC=function(e,t){for(var i=t.length;i--;)if(t[i]===e||t[i].contains(e))return!0;return!1},bs=function(e,t){var i=t.s,s=t.sc;Qu(e)&&(e=ys.scrollingElement||Ss);var l=It.indexOf(e),c=s===ni.sc?1:2;!~l&&(l=It.push(e)-1),It[l+c]||Li(e,"scroll",Dm);var f=It[l+c],h=f||(It[l+c]=Kf(Ms(e,i),!0)||(Qu(e)?s:Kf(function(d){return arguments.length?e[i]=d:e[i]})));return h.target=e,f||(h.smooth=mi.getProperty(e,"scrollBehavior")==="smooth"),h},Um=function(e,t,i){var s=e,l=e,c=ju(),f=c,h=t||50,d=Math.max(500,h*3),g=function(b,M){var y=ju();M||y-c>h?(l=s,s=b,f=c,c=y):i?s+=b:s=l+(b-l)/(y-f)*(c-f)},v=function(){l=s=i?0:s,f=c=0},_=function(b){var M=f,y=l,S=ju();return(b||b===0)&&b!==s&&g(b),c===f||S-f>d?0:(s+(i?y:-y))/((i?S:c)-M)*1e3};return{update:g,reset:v,getVelocity:_}},Ju=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},rS=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},aS=function(){yl=mi.core.globals().ScrollTrigger,yl&&yl.core&&OC()},sS=function(e){return mi=e||nS(),!qf&&mi&&typeof document<"u"&&document.body&&(fr=window,ys=document,Ss=ys.documentElement,xl=ys.body,eS=[fr,ys,Ss,xl],mi.utils.clamp,tS=mi.core.context||function(){},_o="onpointerenter"in xl?"pointer":"mouse",$y=Vn.isTouch=fr.matchMedia&&fr.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fr||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yr=Vn.eventTypes=("ontouchstart"in Ss?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ss?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return iS=0},500),qf=1),yl||aS(),qf};Oi.op=ni,It.cache=0;var Vn=(function(){function a(t){this.init(t)}var e=a.prototype;return e.init=function(i){qf||sS(mi)||console.warn("Please gsap.registerPlugin(Observer)"),yl||aS();var s=i.tolerance,l=i.dragMinimum,c=i.type,f=i.target,h=i.lineHeight,d=i.debounce,g=i.preventDefault,v=i.onStop,_=i.onStopDelay,x=i.ignore,b=i.wheelSpeed,M=i.event,y=i.onDragStart,S=i.onDragEnd,R=i.onDrag,w=i.onPress,C=i.onRelease,O=i.onRight,L=i.onLeft,U=i.onUp,T=i.onDown,P=i.onChangeX,I=i.onChangeY,H=i.onChange,k=i.onToggleX,te=i.onToggleY,J=i.onHover,X=i.onHoverEnd,z=i.onMove,G=i.ignoreCheck,ee=i.isNormalizer,ue=i.onGestureStart,V=i.onGestureEnd,B=i.onWheel,Z=i.onEnable,ve=i.onDisable,ye=i.onClick,Ce=i.scrollSpeed,ne=i.capture,Se=i.allowClicks,re=i.lockAxis,Me=i.onLockAxis;this.target=f=Zi(f)||Ss,this.vars=i,x&&(x=mi.utils.toArray(x)),s=s||1e-9,l=l||0,b=b||1,Ce=Ce||1,c=c||"wheel,touch,pointer",d=d!==!1,h||(h=parseFloat(fr.getComputedStyle(xl).lineHeight)||22);var Xe,ze,et,He,Qe,ot,at,se=this,yt=0,Bt=0,j=i.passive||!g&&i.passive!==!1,vt=bs(f,Oi),ut=bs(f,ni),Ct=vt(),Ee=ut(),Y=~c.indexOf("touch")&&!~c.indexOf("pointer")&&Yr[0]==="pointerdown",D=Qu(f),A=f.ownerDocument||ys,K=[0,0,0],de=[0,0,0],be=0,Oe=function(){return be=ju()},we=function(Pe,ht){return(se.event=Pe)&&x&&PC(Pe.target,x)||ht&&Y&&Pe.pointerType!=="touch"||G&&G(Pe,ht)},me=function(){se._vx.reset(),se._vy.reset(),ze.pause(),v&&v(se)},_e=function(){var Pe=se.deltaX=rS(K),ht=se.deltaY=rS(de),Ne=Math.abs(Pe)>=s,ft=Math.abs(ht)>=s;H&&(Ne||ft)&&H(se,Pe,ht,K,de),Ne&&(O&&se.deltaX>0&&O(se),L&&se.deltaX<0&&L(se),P&&P(se),k&&se.deltaX<0!=yt<0&&k(se),yt=se.deltaX,K[0]=K[1]=K[2]=0),ft&&(T&&se.deltaY>0&&T(se),U&&se.deltaY<0&&U(se),I&&I(se),te&&se.deltaY<0!=Bt<0&&te(se),Bt=se.deltaY,de[0]=de[1]=de[2]=0),(He||et)&&(z&&z(se),et&&(y&&et===1&&y(se),R&&R(se),et=0),He=!1),ot&&!(ot=!1)&&Me&&Me(se),Qe&&(B(se),Qe=!1),Xe=0},Ge=function(Pe,ht,Ne){K[Ne]+=Pe,de[Ne]+=ht,se._vx.update(Pe),se._vy.update(ht),d?Xe||(Xe=requestAnimationFrame(_e)):_e()},Ve=function(Pe,ht){re&&!at&&(se.axis=at=Math.abs(Pe)>Math.abs(ht)?"x":"y",ot=!0),at!=="y"&&(K[2]+=Pe,se._vx.update(Pe,!0)),at!=="x"&&(de[2]+=ht,se._vy.update(ht,!0)),d?Xe||(Xe=requestAnimationFrame(_e)):_e()},Be=function(Pe){if(!we(Pe,1)){Pe=Ju(Pe,g);var ht=Pe.clientX,Ne=Pe.clientY,ft=ht-se.x,tt=Ne-se.y,gt=se.isDragging;se.x=ht,se.y=Ne,(gt||(ft||tt)&&(Math.abs(se.startX-ht)>=l||Math.abs(se.startY-Ne)>=l))&&(et||(et=gt?2:1),gt||(se.isDragging=!0),Ve(ft,tt))}},Fe=se.onPress=function(Le){we(Le,1)||Le&&Le.button||(se.axis=at=null,ze.pause(),se.isPressed=!0,Le=Ju(Le),yt=Bt=0,se.startX=se.x=Le.clientX,se.startY=se.y=Le.clientY,se._vx.reset(),se._vy.reset(),Li(ee?f:A,Yr[1],Be,j,!0),se.deltaX=se.deltaY=0,w&&w(se))},We=se.onRelease=function(Le){if(!we(Le,1)){Ni(ee?f:A,Yr[1],Be,!0);var Pe=!isNaN(se.y-se.startY),ht=se.isDragging,Ne=ht&&(Math.abs(se.x-se.startX)>3||Math.abs(se.y-se.startY)>3),ft=Ju(Le);!Ne&&Pe&&(se._vx.reset(),se._vy.reset(),g&&Se&&mi.delayedCall(.08,function(){if(ju()-be>300&&!Le.defaultPrevented){if(Le.target.click)Le.target.click();else if(A.createEvent){var tt=A.createEvent("MouseEvents");tt.initMouseEvent("click",!0,!0,fr,1,ft.screenX,ft.screenY,ft.clientX,ft.clientY,!1,!1,!1,!1,0,null),Le.target.dispatchEvent(tt)}}})),se.isDragging=se.isGesturing=se.isPressed=!1,v&&ht&&!ee&&ze.restart(!0),et&&_e(),S&&ht&&S(se),C&&C(se,Ne)}},mt=function(Pe){return Pe.touches&&Pe.touches.length>1&&(se.isGesturing=!0)&&ue(Pe,se.isDragging)},St=function(){return(se.isGesturing=!1)||V(se)},q=function(Pe){if(!we(Pe)){var ht=vt(),Ne=ut();Ge((ht-Ct)*Ce,(Ne-Ee)*Ce,1),Ct=ht,Ee=Ne,v&&ze.restart(!0)}},Ue=function(Pe){if(!we(Pe)){Pe=Ju(Pe,g),B&&(Qe=!0);var ht=(Pe.deltaMode===1?h:Pe.deltaMode===2?fr.innerHeight:1)*b;Ge(Pe.deltaX*ht,Pe.deltaY*ht,0),v&&!ee&&ze.restart(!0)}},xe=function(Pe){if(!we(Pe)){var ht=Pe.clientX,Ne=Pe.clientY,ft=ht-se.x,tt=Ne-se.y;se.x=ht,se.y=Ne,He=!0,v&&ze.restart(!0),(ft||tt)&&Ve(ft,tt)}},qe=function(Pe){se.event=Pe,J(se)},Ie=function(Pe){se.event=Pe,X(se)},De=function(Pe){return we(Pe)||Ju(Pe,g)&&ye(se)};ze=se._dc=mi.delayedCall(_||.25,me).pause(),se.deltaX=se.deltaY=0,se._vx=Um(0,50,!0),se._vy=Um(0,50,!0),se.scrollX=vt,se.scrollY=ut,se.isDragging=se.isGesturing=se.isPressed=!1,tS(this),se.enable=function(Le){return se.isEnabled||(Li(D?A:f,"scroll",Dm),c.indexOf("scroll")>=0&&Li(D?A:f,"scroll",q,j,ne),c.indexOf("wheel")>=0&&Li(f,"wheel",Ue,j,ne),(c.indexOf("touch")>=0&&$y||c.indexOf("pointer")>=0)&&(Li(f,Yr[0],Fe,j,ne),Li(A,Yr[2],We),Li(A,Yr[3],We),Se&&Li(f,"click",Oe,!0,!0),ye&&Li(f,"click",De),ue&&Li(A,"gesturestart",mt),V&&Li(A,"gestureend",St),J&&Li(f,_o+"enter",qe),X&&Li(f,_o+"leave",Ie),z&&Li(f,_o+"move",xe)),se.isEnabled=!0,se.isDragging=se.isGesturing=se.isPressed=He=et=!1,se._vx.reset(),se._vy.reset(),Ct=vt(),Ee=ut(),Le&&Le.type&&Fe(Le),Z&&Z(se)),se},se.disable=function(){se.isEnabled&&(Sl.filter(function(Le){return Le!==se&&Qu(Le.target)}).length||Ni(D?A:f,"scroll",Dm),se.isPressed&&(se._vx.reset(),se._vy.reset(),Ni(ee?f:A,Yr[1],Be,!0)),Ni(D?A:f,"scroll",q,ne),Ni(f,"wheel",Ue,ne),Ni(f,Yr[0],Fe,ne),Ni(A,Yr[2],We),Ni(A,Yr[3],We),Ni(f,"click",Oe,!0),Ni(f,"click",De),Ni(A,"gesturestart",mt),Ni(A,"gestureend",St),Ni(f,_o+"enter",qe),Ni(f,_o+"leave",Ie),Ni(f,_o+"move",xe),se.isEnabled=se.isPressed=se.isDragging=!1,ve&&ve(se))},se.kill=se.revert=function(){se.disable();var Le=Sl.indexOf(se);Le>=0&&Sl.splice(Le,1),Pa===se&&(Pa=0)},Sl.push(se),ee&&Qu(f)&&(Pa=se),se.enable(M)},NC(a,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),a})();Vn.version="3.15.0",Vn.create=function(a){return new Vn(a)},Vn.register=sS,Vn.getAll=function(){return Sl.slice()},Vn.getById=function(a){return Sl.filter(function(e){return e.vars.id===a})[0]},nS()&&mi.registerPlugin(Vn);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var nt,Ml,zt,sn,hr,rn,Lm,jf,$u,ec,tc,Qf,Ei,Jf,Nm,Pi,oS,lS,bl,uS,Om,cS,Fi,Pm,fS,hS,Es,Fm,Im,El,zm,nc,Bm,Hm,$f=1,Ti=Date.now,Gm=Ti(),Dr=0,ic=0,dS=function(e,t,i){var s=dr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=s,s?e.substr(6,e.length-7):e},pS=function(e,t){return t&&(!dr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},FC=function a(){return ic&&requestAnimationFrame(a)},mS=function(){return Jf=1},gS=function(){return Jf=0},pa=function(e){return e},rc=function(e){return Math.round(e*1e5)/1e5||0},_S=function(){return typeof window<"u"},vS=function(){return nt||_S()&&(nt=window.gsap)&&nt.registerPlugin&&nt},vo=function(e){return!!~Lm.indexOf(e)},xS=function(e){return(e==="Height"?zm:zt["inner"+e])||hr["client"+e]||rn["client"+e]},yS=function(e){return Ms(e,"getBoundingClientRect")||(vo(e)?function(){return hh.width=zt.innerWidth,hh.height=zm,hh}:function(){return Fa(e)})},IC=function(e,t,i){var s=i.d,l=i.d2,c=i.a;return(c=Ms(e,"getBoundingClientRect"))?function(){return c()[s]}:function(){return(t?xS(l):e["client"+l])||0}},zC=function(e,t){return!t||~da.indexOf(e)?yS(e):function(){return hh}},ma=function(e,t){var i=t.s,s=t.d2,l=t.d,c=t.a;return Math.max(0,(i="scroll"+s)&&(c=Ms(e,i))?c()-yS(e)()[l]:vo(e)?(hr[i]||rn[i])-xS(s):e[i]-e["offset"+s])},eh=function(e,t){for(var i=0;i<bl.length;i+=3)(!t||~t.indexOf(bl[i+1]))&&e(bl[i],bl[i+1],bl[i+2])},dr=function(e){return typeof e=="string"},Ai=function(e){return typeof e=="function"},ac=function(e){return typeof e=="number"},xo=function(e){return typeof e=="object"},sc=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},Tl=function(e,t,i){if(e.enabled){var s=e._ctx?e._ctx.add(function(){return t(e,i)}):t(e,i);s&&s.totalTime&&(e.callbackAnimation=s)}},Al=Math.abs,SS="left",MS="top",Vm="right",km="bottom",yo="width",So="height",oc="Right",lc="Left",uc="Top",cc="Bottom",qn="padding",Ur="margin",Rl="Width",Xm="Height",ii="px",Lr=function(e){return zt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},BC=function(e){var t=Lr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},bS=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fa=function(e,t){var i=t&&Lr(e)[Nm]!=="matrix(1, 0, 0, 1, 0, 0)"&&nt.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),s=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return i&&i.progress(0).kill(),s},th=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},ES=function(e){var t=[],i=e.labels,s=e.duration(),l;for(l in i)t.push(i[l]/s);return t},HC=function(e){return function(t){return nt.utils.snap(ES(e),t)}},Wm=function(e){var t=nt.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(s,l){return s-l});return i?function(s,l,c){c===void 0&&(c=.001);var f;if(!l)return t(s);if(l>0){for(s-=c,f=0;f<i.length;f++)if(i[f]>=s)return i[f];return i[f-1]}else for(f=i.length,s+=c;f--;)if(i[f]<=s)return i[f];return i[0]}:function(s,l,c){c===void 0&&(c=.001);var f=t(s);return!l||Math.abs(f-s)<c||f-s<0==l<0?f:t(l<0?s-e:s+e)}},GC=function(e){return function(t,i){return Wm(ES(e))(t,i.direction)}},nh=function(e,t,i,s){return i.split(",").forEach(function(l){return e(t,l,s)})},ci=function(e,t,i,s,l){return e.addEventListener(t,i,{passive:!s,capture:!!l})},fi=function(e,t,i,s){return e.removeEventListener(t,i,!!s)},ih=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},TS={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rh={toggleActions:"play",anticipatePin:0},ah={top:0,left:0,center:.5,bottom:1,right:1},sh=function(e,t){if(dr(e)){var i=e.indexOf("="),s=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(s*=t/100),e=e.substr(0,i-1)),e=s+(e in ah?ah[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},oh=function(e,t,i,s,l,c,f,h){var d=l.startColor,g=l.endColor,v=l.fontSize,_=l.indent,x=l.fontWeight,b=sn.createElement("div"),M=vo(i)||Ms(i,"pinType")==="fixed",y=e.indexOf("scroller")!==-1,S=M?rn:i.tagName==="IFRAME"?i.contentDocument.body:i,R=e.indexOf("start")!==-1,w=R?d:g,C="border-color:"+w+";font-size:"+v+";color:"+w+";font-weight:"+x+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return C+="position:"+((y||h)&&M?"fixed;":"absolute;"),(y||h||!M)&&(C+=(s===ni?Vm:km)+":"+(c+parseFloat(_))+"px;"),f&&(C+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),b._isStart=R,b.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),b.style.cssText=C,b.innerText=t||t===0?e+"-"+t:e,S.children[0]?S.insertBefore(b,S.children[0]):S.appendChild(b),b._offset=b["offset"+s.op.d2],lh(b,0,s,R),b},lh=function(e,t,i,s){var l={display:"block"},c=i[s?"os2":"p2"],f=i[s?"p2":"os2"];e._isFlipped=s,l[i.a+"Percent"]=s?-100:0,l[i.a]=s?"1px":0,l["border"+c+Rl]=1,l["border"+f+Rl]=0,l[i.p]=t+"px",nt.set(e,l)},Ft=[],qm={},fc,AS=function(){return Ti()-Dr>34&&(fc||(fc=requestAnimationFrame(Ia)))},Cl=function(){(!Fi||!Fi.isPressed||Fi.startX>rn.clientWidth)&&(It.cache++,Fi?fc||(fc=requestAnimationFrame(Ia)):Ia(),Dr||bo("scrollStart"),Dr=Ti())},Ym=function(){hS=zt.innerWidth,fS=zt.innerHeight},hc=function(e){It.cache++,(e===!0||!Ei&&!cS&&!sn.fullscreenElement&&!sn.webkitFullscreenElement&&(!Pm||hS!==zt.innerWidth||Math.abs(zt.innerHeight-fS)>zt.innerHeight*.25))&&jf.restart(!0)},Mo={},VC=[],RS=function a(){return fi(Tt,"scrollEnd",a)||To(!0)},bo=function(e){return Mo[e]&&Mo[e].map(function(t){return t()})||VC},pr=[],CS=function(e){for(var t=0;t<pr.length;t+=5)(!e||pr[t+4]&&pr[t+4].query===e)&&(pr[t].style.cssText=pr[t+1],pr[t].getBBox&&pr[t].setAttribute("transform",pr[t+2]||""),pr[t+3].uncache=1)},wS=function(){return It.forEach(function(e){return Ai(e)&&++e.cacheID&&(e.rec=e())})},Zm=function(e,t){var i;for(Pi=0;Pi<Ft.length;Pi++)i=Ft[Pi],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));nc=!0,t&&CS(t),t||bo("revert")},DS=function(e,t){It.cache++,(t||!Ii)&&It.forEach(function(i){return Ai(i)&&i.cacheID++&&(i.rec=0)}),dr(e)&&(zt.history.scrollRestoration=Im=e)},Ii,Eo=0,US,kC=function(){if(US!==Eo){var e=US=Eo;requestAnimationFrame(function(){return e===Eo&&To(!0)})}},LS=function(){rn.appendChild(El),zm=!Fi&&El.offsetHeight||zt.innerHeight,rn.removeChild(El)},NS=function(e){return $u(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},To=function(e,t){if(hr=sn.documentElement,rn=sn.body,Lm=[zt,sn,hr,rn],Dr&&!e&&!nc){ci(Tt,"scrollEnd",RS);return}LS(),Ii=Tt.isRefreshing=!0,nc||wS();var i=bo("refreshInit");uS&&Tt.sort(),t||Zm(),It.forEach(function(s){Ai(s)&&(s.smooth&&(s.target.style.scrollBehavior="auto"),s(0))}),Ft.slice(0).forEach(function(s){return s.refresh()}),nc=!1,Ft.forEach(function(s){if(s._subPinOffset&&s.pin){var l=s.vars.horizontal?"offsetWidth":"offsetHeight",c=s.pin[l];s.revert(!0,1),s.adjustPinSpacing(s.pin[l]-c),s.refresh()}}),Bm=1,NS(!0),Ft.forEach(function(s){var l=ma(s.scroller,s._dir),c=s.vars.end==="max"||s._endClamp&&s.end>l,f=s._startClamp&&s.start>=l;(c||f)&&s.setPositions(f?l-1:s.start,c?Math.max(f?l:s.start+1,l):s.end,!0)}),NS(!1),Bm=0,i.forEach(function(s){return s&&s.render&&s.render(-1)}),It.forEach(function(s){Ai(s)&&(s.smooth&&requestAnimationFrame(function(){return s.target.style.scrollBehavior="smooth"}),s.rec&&s(s.rec))}),DS(Im,1),jf.pause(),Eo++,Ii=2,Ia(2),Ft.forEach(function(s){return Ai(s.vars.onRefresh)&&s.vars.onRefresh(s)}),Ii=Tt.isRefreshing=!1,bo("refresh")},Km=0,uh=1,dc,Ia=function(e){if(e===2||!Ii&&!nc){Tt.isUpdating=!0,dc&&dc.update(0);var t=Ft.length,i=Ti(),s=i-Gm>=50,l=t&&Ft[0].scroll();if(uh=Km>l?-1:1,Ii||(Km=l),s&&(Dr&&!Jf&&i-Dr>200&&(Dr=0,bo("scrollEnd")),tc=Gm,Gm=i),uh<0){for(Pi=t;Pi-- >0;)Ft[Pi]&&Ft[Pi].update(0,s);uh=1}else for(Pi=0;Pi<t;Pi++)Ft[Pi]&&Ft[Pi].update(0,s);Tt.isUpdating=!1}fc=0},jm=[SS,MS,km,Vm,Ur+cc,Ur+oc,Ur+uc,Ur+lc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ch=jm.concat([yo,So,"boxSizing","max"+Rl,"max"+Xm,"position",Ur,qn,qn+uc,qn+oc,qn+cc,qn+lc]),XC=function(e,t,i){wl(i);var s=e._gsap;if(s.spacerIsNative)wl(s.spacerState);else if(e._gsap.swappedIn){var l=t.parentNode;l&&(l.insertBefore(e,t),l.removeChild(t))}e._gsap.swappedIn=!1},Qm=function(e,t,i,s){if(!e._gsap.swappedIn){for(var l=jm.length,c=t.style,f=e.style,h;l--;)h=jm[l],c[h]=i[h];c.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(c.display="inline-block"),f[km]=f[Vm]="auto",c.flexBasis=i.flexBasis||"auto",c.overflow="visible",c.boxSizing="border-box",c[yo]=th(e,Oi)+ii,c[So]=th(e,ni)+ii,c[qn]=f[Ur]=f[MS]=f[SS]="0",wl(s),f[yo]=f["max"+Rl]=i[yo],f[So]=f["max"+Xm]=i[So],f[qn]=i[qn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},WC=/([A-Z])/g,wl=function(e){if(e){var t=e.t.style,i=e.length,s=0,l,c;for((e.t._gsap||nt.core.getCache(e.t)).uncache=1;s<i;s+=2)c=e[s+1],l=e[s],c?t[l]=c:t[l]&&t.removeProperty(l.replace(WC,"-$1").toLowerCase())}},fh=function(e){for(var t=ch.length,i=e.style,s=[],l=0;l<t;l++)s.push(ch[l],i[ch[l]]);return s.t=e,s},qC=function(e,t,i){for(var s=[],l=e.length,c=i?8:0,f;c<l;c+=2)f=e[c],s.push(f,f in t?t[f]:e[c+1]);return s.t=e.t,s},hh={left:0,top:0},OS=function(e,t,i,s,l,c,f,h,d,g,v,_,x,b){Ai(e)&&(e=e(h)),dr(e)&&e.substr(0,3)==="max"&&(e=_+(e.charAt(4)==="="?sh("0"+e.substr(3),i):0));var M=x?x.time():0,y,S,R;if(x&&x.seek(0),isNaN(e)||(e=+e),ac(e))x&&(e=nt.utils.mapRange(x.scrollTrigger.start,x.scrollTrigger.end,0,_,e)),f&&lh(f,i,s,!0);else{Ai(t)&&(t=t(h));var w=(e||"0").split(" "),C,O,L,U;R=Zi(t,h)||rn,C=Fa(R)||{},(!C||!C.left&&!C.top)&&Lr(R).display==="none"&&(U=R.style.display,R.style.display="block",C=Fa(R),U?R.style.display=U:R.style.removeProperty("display")),O=sh(w[0],C[s.d]),L=sh(w[1]||"0",i),e=C[s.p]-d[s.p]-g+O+l-L,f&&lh(f,L,s,i-L<20||f._isStart&&L>20),i-=i-L}if(b&&(h[b]=e||-.001,e<0&&(e=0)),c){var T=e+i,P=c._isStart;y="scroll"+s.d2,lh(c,T,s,P&&T>20||!P&&(v?Math.max(rn[y],hr[y]):c.parentNode[y])<=T+1),v&&(d=Fa(f),v&&(c.style[s.op.p]=d[s.op.p]-s.op.m-c._offset+ii))}return x&&R&&(y=Fa(R),x.seek(_),S=Fa(R),x._caScrollDist=y[s.p]-S[s.p],e=e/x._caScrollDist*_),x&&x.seek(M),x?e:Math.round(e)},YC=/(webkit|moz|length|cssText|inset)/i,PS=function(e,t,i,s){if(e.parentNode!==t){var l=e.style,c,f;if(t===rn){e._stOrig=l.cssText,f=Lr(e);for(c in f)!+c&&!YC.test(c)&&f[c]&&typeof l[c]=="string"&&c!=="0"&&(l[c]=f[c]);l.top=i,l.left=s}else l.cssText=e._stOrig;nt.core.getCache(e).uncache=1,t.appendChild(e)}},FS=function(e,t,i){var s=t,l=s;return function(c){var f=Math.round(e());return f!==s&&f!==l&&Math.abs(f-s)>3&&Math.abs(f-l)>3&&(c=f,i&&i()),l=s,s=Math.round(c),s}},dh=function(e,t,i){var s={};s[t.p]="+="+i,nt.set(e,s)},IS=function(e,t){var i=bs(e,t),s="_scroll"+t.p2,l=function c(f,h,d,g,v){var _=c.tween,x=h.onComplete,b={};d=d||i();var M=FS(i,d,function(){_.kill(),c.tween=0});return v=g&&v||0,g=g||f-d,_&&_.kill(),h[s]=f,h.inherit=!1,h.modifiers=b,b[s]=function(){return M(d+g*_.ratio+v*_.ratio*_.ratio)},h.onUpdate=function(){It.cache++,c.tween&&Ia()},h.onComplete=function(){c.tween=0,x&&x.call(_)},_=c.tween=nt.to(e,h),_};return e[s]=i,i.wheelHandler=function(){return l.tween&&l.tween.kill()&&(l.tween=0)},ci(e,"wheel",i.wheelHandler),Tt.isTouch&&ci(e,"touchmove",i.wheelHandler),l},Tt=(function(){function a(t,i){Ml||a.register(nt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Fm(this),this.init(t,i)}var e=a.prototype;return e.init=function(i,s){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ic){this.update=this.refresh=this.kill=pa;return}i=bS(dr(i)||ac(i)||i.nodeType?{trigger:i}:i,rh);var l=i,c=l.onUpdate,f=l.toggleClass,h=l.id,d=l.onToggle,g=l.onRefresh,v=l.scrub,_=l.trigger,x=l.pin,b=l.pinSpacing,M=l.invalidateOnRefresh,y=l.anticipatePin,S=l.onScrubComplete,R=l.onSnapComplete,w=l.once,C=l.snap,O=l.pinReparent,L=l.pinSpacer,U=l.containerAnimation,T=l.fastScrollEnd,P=l.preventOverlaps,I=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Oi:ni,H=!v&&v!==0,k=Zi(i.scroller||zt),te=nt.core.getCache(k),J=vo(k),X=("pinType"in i?i.pinType:Ms(k,"pinType")||J&&"fixed")==="fixed",z=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],G=H&&i.toggleActions.split(" "),ee="markers"in i?i.markers:rh.markers,ue=J?0:parseFloat(Lr(k)["border"+I.p2+Rl])||0,V=this,B=i.onRefreshInit&&function(){return i.onRefreshInit(V)},Z=IC(k,J,I),ve=zC(k,J),ye=0,Ce=0,ne=0,Se=bs(k,I),re,Me,Xe,ze,et,He,Qe,ot,at,se,yt,Bt,j,vt,ut,Ct,Ee,Y,D,A,K,de,be,Oe,we,me,_e,Ge,Ve,Be,Fe,We,mt,St,q,Ue,xe,qe,Ie;if(V._startClamp=V._endClamp=!1,V._dir=I,y*=45,V.scroller=k,V.scroll=U?U.time.bind(U):Se,ze=Se(),V.vars=i,s=s||i.animation,"refreshPriority"in i&&(uS=1,i.refreshPriority===-9999&&(dc=V)),te.tweenScroll=te.tweenScroll||{top:IS(k,ni),left:IS(k,Oi)},V.tweenTo=re=te.tweenScroll[I.p],V.scrubDuration=function(Ne){mt=ac(Ne)&&Ne,mt?We?We.duration(Ne):We=nt.to(s,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:mt,paused:!0,onComplete:function(){return S&&S(V)}}):(We&&We.progress(1).kill(),We=0)},s&&(s.vars.lazy=!1,s._initted&&!V.isReverted||s.vars.immediateRender!==!1&&i.immediateRender!==!1&&s.duration()&&s.render(0,!0,!0),V.animation=s.pause(),s.scrollTrigger=V,V.scrubDuration(v),Be=0,h||(h=s.vars.id)),C&&((!xo(C)||C.push)&&(C={snapTo:C}),"scrollBehavior"in rn.style&&nt.set(J?[rn,hr]:k,{scrollBehavior:"auto"}),It.forEach(function(Ne){return Ai(Ne)&&Ne.target===(J?sn.scrollingElement||hr:k)&&(Ne.smooth=!1)}),Xe=Ai(C.snapTo)?C.snapTo:C.snapTo==="labels"?HC(s):C.snapTo==="labelsDirectional"?GC(s):C.directional!==!1?function(Ne,ft){return Wm(C.snapTo)(Ne,Ti()-Ce<500?0:ft.direction)}:nt.utils.snap(C.snapTo),St=C.duration||{min:.1,max:2},St=xo(St)?ec(St.min,St.max):ec(St,St),q=nt.delayedCall(C.delay||mt/2||.1,function(){var Ne=Se(),ft=Ti()-Ce<500,tt=re.tween;if((ft||Math.abs(V.getVelocity())<10)&&!tt&&!Jf&&ye!==Ne){var gt=(Ne-He)/vt,Cn=s&&!H?s.totalProgress():gt,Lt=ft?0:(Cn-Fe)/(Ti()-tc)*1e3||0,xn=nt.utils.clamp(-gt,1-gt,Al(Lt/2)*Lt/.185),Qt=gt+(C.inertia===!1?0:xn),Et,wt,Ht=C,jn=Ht.onStart,dn=Ht.onInterrupt,Qn=Ht.onComplete;if(Et=Xe(Qt,V),ac(Et)||(Et=Qt),wt=Math.max(0,Math.round(He+Et*vt)),Ne<=Qe&&Ne>=He&&wt!==Ne){if(tt&&!tt._initted&&tt.data<=Al(wt-Ne))return;C.inertia===!1&&(xn=Et-gt),re(wt,{duration:St(Al(Math.max(Al(Qt-Cn),Al(Et-Cn))*.185/Lt/.05||0)),ease:C.ease||"power3",data:Al(wt-Ne),onInterrupt:function(){return q.restart(!0)&&dn&&Tl(V,dn)},onComplete:function(){V.update(),ye=Se(),s&&!H&&(We?We.resetTo("totalProgress",Et,s._tTime/s._tDur):s.progress(Et)),Be=Fe=s&&!H?s.totalProgress():V.progress,R&&R(V),Qn&&Tl(V,Qn)}},Ne,xn*vt,wt-Ne-xn*vt),jn&&Tl(V,jn,re.tween)}}else V.isActive&&ye!==Ne&&q.restart(!0)}).pause()),h&&(qm[h]=V),_=V.trigger=Zi(_||x!==!0&&x),Ie=_&&_._gsap&&_._gsap.stRevert,Ie&&(Ie=Ie(V)),x=x===!0?_:Zi(x),dr(f)&&(f={targets:_,className:f}),x&&(b===!1||b===Ur||(b=!b&&x.parentNode&&x.parentNode.style&&Lr(x.parentNode).display==="flex"?!1:qn),V.pin=x,Me=nt.core.getCache(x),Me.spacer?ut=Me.pinState:(L&&(L=Zi(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Me.spacerIsNative=!!L,L&&(Me.spacerState=fh(L))),Me.spacer=Y=L||sn.createElement("div"),Y.classList.add("pin-spacer"),h&&Y.classList.add("pin-spacer-"+h),Me.pinState=ut=fh(x)),i.force3D!==!1&&nt.set(x,{force3D:!0}),V.spacer=Y=Me.spacer,Ve=Lr(x),Oe=Ve[b+I.os2],A=nt.getProperty(x),K=nt.quickSetter(x,I.a,ii),Qm(x,Y,Ve),Ee=fh(x)),ee){Bt=xo(ee)?bS(ee,TS):TS,se=oh("scroller-start",h,k,I,Bt,0),yt=oh("scroller-end",h,k,I,Bt,0,se),D=se["offset"+I.op.d2];var De=Zi(Ms(k,"content")||k);ot=this.markerStart=oh("start",h,De,I,Bt,D,0,U),at=this.markerEnd=oh("end",h,De,I,Bt,D,0,U),U&&(qe=nt.quickSetter([ot,at],I.a,ii)),!X&&!(da.length&&Ms(k,"fixedMarkers")===!0)&&(BC(J?rn:k),nt.set([se,yt],{force3D:!0}),me=nt.quickSetter(se,I.a,ii),Ge=nt.quickSetter(yt,I.a,ii))}if(U){var Le=U.vars.onUpdate,Pe=U.vars.onUpdateParams;U.eventCallback("onUpdate",function(){V.update(0,0,1),Le&&Le.apply(U,Pe||[])})}if(V.previous=function(){return Ft[Ft.indexOf(V)-1]},V.next=function(){return Ft[Ft.indexOf(V)+1]},V.revert=function(Ne,ft){if(!ft)return V.kill(!0);var tt=Ne!==!1||!V.enabled,gt=Ei;tt!==V.isReverted&&(tt&&(Ue=Math.max(Se(),V.scroll.rec||0),ne=V.progress,xe=s&&s.progress()),ot&&[ot,at,se,yt].forEach(function(Cn){return Cn.style.display=tt?"none":"block"}),tt&&(Ei=V,V.update(tt)),x&&(!O||!V.isActive)&&(tt?XC(x,Y,ut):Qm(x,Y,Lr(x),we)),tt||V.update(tt),Ei=gt,V.isReverted=tt)},V.refresh=function(Ne,ft,tt,gt){if(!((Ei||!V.enabled)&&!ft)){if(x&&Ne&&Dr){ci(a,"scrollEnd",RS);return}!Ii&&B&&B(V),Ei=V,re.tween&&!tt&&(re.tween.kill(),re.tween=0),We&&We.pause(),M&&s&&(s.revert({kill:!1}).invalidate(),s.getChildren?s.getChildren(!0,!0,!1).forEach(function(Ke){return Ke.vars.immediateRender&&Ke.render(0,!0,!0)}):s.vars.immediateRender&&s.render(0,!0,!0)),V.isReverted||V.revert(!0,!0),V._subPinOffset=!1;var Cn=Z(),Lt=ve(),xn=U?U.duration():ma(k,I),Qt=vt<=.01||!vt,Et=0,wt=gt||0,Ht=xo(tt)?tt.end:i.end,jn=i.endTrigger||_,dn=xo(tt)?tt.start:i.start||(i.start===0||!_?0:x?"0 0":"0 100%"),Qn=V.pinnedContainer=i.pinnedContainer&&Zi(i.pinnedContainer,V),wi=_&&Math.max(0,Ft.indexOf(V))||0,Mn=wi,Pn,bn,Di,zr,En,Pt,Hi,N,$,ce,ae,oe,Ye;for(ee&&xo(tt)&&(oe=nt.getProperty(se,I.p),Ye=nt.getProperty(yt,I.p));Mn-- >0;)Pt=Ft[Mn],Pt.end||Pt.refresh(0,1)||(Ei=V),Hi=Pt.pin,Hi&&(Hi===_||Hi===x||Hi===Qn)&&!Pt.isReverted&&(ce||(ce=[]),ce.unshift(Pt),Pt.revert(!0,!0)),Pt!==Ft[Mn]&&(wi--,Mn--);for(Ai(dn)&&(dn=dn(V)),dn=dS(dn,"start",V),He=OS(dn,_,Cn,I,Se(),ot,se,V,Lt,ue,X,xn,U,V._startClamp&&"_startClamp")||(x?-.001:0),Ai(Ht)&&(Ht=Ht(V)),dr(Ht)&&!Ht.indexOf("+=")&&(~Ht.indexOf(" ")?Ht=(dr(dn)?dn.split(" ")[0]:"")+Ht:(Et=sh(Ht.substr(2),Cn),Ht=dr(dn)?dn:(U?nt.utils.mapRange(0,U.duration(),U.scrollTrigger.start,U.scrollTrigger.end,He):He)+Et,jn=_)),Ht=dS(Ht,"end",V),Qe=Math.max(He,OS(Ht||(jn?"100% 0":xn),jn,Cn,I,Se()+Et,at,yt,V,Lt,ue,X,xn,U,V._endClamp&&"_endClamp"))||-.001,Et=0,Mn=wi;Mn--;)Pt=Ft[Mn]||{},Hi=Pt.pin,Hi&&Pt.start-Pt._pinPush<=He&&!U&&Pt.end>0&&(Pn=Pt.end-(V._startClamp?Math.max(0,Pt.start):Pt.start),(Hi===_&&Pt.start-Pt._pinPush<He||Hi===Qn)&&isNaN(dn)&&(Et+=Pn*(1-Pt.progress)),Hi===x&&(wt+=Pn));if(He+=Et,Qe+=Et,V._startClamp&&(V._startClamp+=Et),V._endClamp&&!Ii&&(V._endClamp=Qe||-.001,Qe=Math.min(Qe,ma(k,I))),vt=Qe-He||(He-=.01)&&.001,Qt&&(ne=nt.utils.clamp(0,1,nt.utils.normalize(He,Qe,Ue))),V._pinPush=wt,ot&&Et&&(Pn={},Pn[I.a]="+="+Et,Qn&&(Pn[I.p]="-="+Se()),nt.set([ot,at],Pn)),x&&!(Bm&&V.end>=ma(k,I)))Pn=Lr(x),zr=I===ni,Di=Se(),de=parseFloat(A(I.a))+wt,!xn&&Qe>1&&(ae=(J?sn.scrollingElement||hr:k).style,ae={style:ae,value:ae["overflow"+I.a.toUpperCase()]},J&&Lr(rn)["overflow"+I.a.toUpperCase()]!=="scroll"&&(ae.style["overflow"+I.a.toUpperCase()]="scroll")),Qm(x,Y,Pn),Ee=fh(x),bn=Fa(x,!0),N=X&&bs(k,zr?Oi:ni)(),b?(we=[b+I.os2,vt+wt+ii],we.t=Y,Mn=b===qn?th(x,I)+vt+wt:0,Mn&&(we.push(I.d,Mn+ii),Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=Mn+ii)),wl(we),Qn&&Ft.forEach(function(Ke){Ke.pin===Qn&&Ke.vars.pinSpacing!==!1&&(Ke._subPinOffset=!0)}),X&&Se(Ue)):(Mn=th(x,I),Mn&&Y.style.flexBasis!=="auto"&&(Y.style.flexBasis=Mn+ii)),X&&(En={top:bn.top+(zr?Di-He:N)+ii,left:bn.left+(zr?N:Di-He)+ii,boxSizing:"border-box",position:"fixed"},En[yo]=En["max"+Rl]=Math.ceil(bn.width)+ii,En[So]=En["max"+Xm]=Math.ceil(bn.height)+ii,En[Ur]=En[Ur+uc]=En[Ur+oc]=En[Ur+cc]=En[Ur+lc]="0",En[qn]=Pn[qn],En[qn+uc]=Pn[qn+uc],En[qn+oc]=Pn[qn+oc],En[qn+cc]=Pn[qn+cc],En[qn+lc]=Pn[qn+lc],Ct=qC(ut,En,O),Ii&&Se(0)),s?($=s._initted,Om(1),s.render(s.duration(),!0,!0),be=A(I.a)-de+vt+wt,_e=Math.abs(vt-be)>1,X&&_e&&Ct.splice(Ct.length-2,2),s.render(0,!0,!0),$||s.invalidate(!0),s.parent||s.totalTime(s.totalTime()),Om(0)):be=vt,ae&&(ae.value?ae.style["overflow"+I.a.toUpperCase()]=ae.value:ae.style.removeProperty("overflow-"+I.a));else if(_&&Se()&&!U)for(bn=_.parentNode;bn&&bn!==rn;)bn._pinOffset&&(He-=bn._pinOffset,Qe-=bn._pinOffset),bn=bn.parentNode;ce&&ce.forEach(function(Ke){return Ke.revert(!1,!0)}),V.start=He,V.end=Qe,ze=et=Ii?Ue:Se(),!U&&!Ii&&(ze<Ue&&Se(Ue),V.scroll.rec=0),V.revert(!1,!0),Ce=Ti(),q&&(ye=-1,q.restart(!0)),Ei=0,s&&H&&(s._initted||xe)&&s.progress()!==xe&&s.progress(xe||0,!0).render(s.time(),!0,!0),(Qt||ne!==V.progress||U||M||s&&!s._initted)&&(s&&!H&&(s._initted||ne||s.vars.immediateRender!==!1)&&s.totalProgress(U&&He<-.001&&!ne?nt.utils.normalize(He,Qe,0):ne,!0),V.progress=Qt||(ze-He)/vt===ne?0:ne),x&&b&&(Y._pinOffset=Math.round(V.progress*be)),We&&We.invalidate(),isNaN(oe)||(oe-=nt.getProperty(se,I.p),Ye-=nt.getProperty(yt,I.p),dh(se,I,oe),dh(ot,I,oe-(gt||0)),dh(yt,I,Ye),dh(at,I,Ye-(gt||0))),Qt&&!Ii&&V.update(),g&&!Ii&&!j&&(j=!0,g(V),j=!1)}},V.getVelocity=function(){return(Se()-et)/(Ti()-tc)*1e3||0},V.endAnimation=function(){sc(V.callbackAnimation),s&&(We?We.progress(1):s.paused()?H||sc(s,V.direction<0,1):sc(s,s.reversed()))},V.labelToScroll=function(Ne){return s&&s.labels&&(He||V.refresh()||He)+s.labels[Ne]/s.duration()*vt||0},V.getTrailing=function(Ne){var ft=Ft.indexOf(V),tt=V.direction>0?Ft.slice(0,ft).reverse():Ft.slice(ft+1);return(dr(Ne)?tt.filter(function(gt){return gt.vars.preventOverlaps===Ne}):tt).filter(function(gt){return V.direction>0?gt.end<=He:gt.start>=Qe})},V.update=function(Ne,ft,tt){if(!(U&&!tt&&!Ne)){var gt=Ii===!0?Ue:V.scroll(),Cn=Ne?0:(gt-He)/vt,Lt=Cn<0?0:Cn>1?1:Cn||0,xn=V.progress,Qt,Et,wt,Ht,jn,dn,Qn,wi;if(ft&&(et=ze,ze=U?Se():gt,C&&(Fe=Be,Be=s&&!H?s.totalProgress():Lt)),y&&x&&!Ei&&!$f&&Dr&&(!Lt&&He<gt+(gt-et)/(Ti()-tc)*y?Lt=1e-4:Lt===1&&Qe>gt+(gt-et)/(Ti()-tc)*y&&(Lt=.9999)),Lt!==xn&&V.enabled){if(Qt=V.isActive=!!Lt&&Lt<1,Et=!!xn&&xn<1,dn=Qt!==Et,jn=dn||!!Lt!=!!xn,V.direction=Lt>xn?1:-1,V.progress=Lt,jn&&!Ei&&(wt=Lt&&!xn?0:Lt===1?1:xn===1?2:3,H&&(Ht=!dn&&G[wt+1]!=="none"&&G[wt+1]||G[wt],wi=s&&(Ht==="complete"||Ht==="reset"||Ht in s))),P&&(dn||wi)&&(wi||v||!s)&&(Ai(P)?P(V):V.getTrailing(P).forEach(function(Di){return Di.endAnimation()})),H||(We&&!Ei&&!$f?(We._dp._time-We._start!==We._time&&We.render(We._dp._time-We._start),We.resetTo?We.resetTo("totalProgress",Lt,s._tTime/s._tDur):(We.vars.totalProgress=Lt,We.invalidate().restart())):s&&s.totalProgress(Lt,!!(Ei&&(Ce||Ne)))),x){if(Ne&&b&&(Y.style[b+I.os2]=Oe),!X)K(rc(de+be*Lt));else if(jn){if(Qn=!Ne&&Lt>xn&&Qe+1>gt&&gt+1>=ma(k,I),O)if(!Ne&&(Qt||Qn)){var Mn=Fa(x,!0),Pn=gt-He;PS(x,rn,Mn.top+(I===ni?Pn:0)+ii,Mn.left+(I===ni?0:Pn)+ii)}else PS(x,Y);wl(Qt||Qn?Ct:Ee),_e&&Lt<1&&Qt||K(de+(Lt===1&&!Qn?be:0))}}C&&!re.tween&&!Ei&&!$f&&q.restart(!0),f&&(dn||w&&Lt&&(Lt<1||!Hm))&&$u(f.targets).forEach(function(Di){return Di.classList[Qt||w?"add":"remove"](f.className)}),c&&!H&&!Ne&&c(V),jn&&!Ei?(H&&(wi&&(Ht==="complete"?s.pause().totalProgress(1):Ht==="reset"?s.restart(!0).pause():Ht==="restart"?s.restart(!0):s[Ht]()),c&&c(V)),(dn||!Hm)&&(d&&dn&&Tl(V,d),z[wt]&&Tl(V,z[wt]),w&&(Lt===1?V.kill(!1,1):z[wt]=0),dn||(wt=Lt===1?1:3,z[wt]&&Tl(V,z[wt]))),T&&!Qt&&Math.abs(V.getVelocity())>(ac(T)?T:2500)&&(sc(V.callbackAnimation),We?We.progress(1):sc(s,Ht==="reverse"?1:!Lt,1))):H&&c&&!Ei&&c(V)}if(Ge){var bn=U?gt/U.duration()*(U._caScrollDist||0):gt;me(bn+(se._isFlipped?1:0)),Ge(bn)}qe&&qe(-gt/U.duration()*(U._caScrollDist||0))}},V.enable=function(Ne,ft){V.enabled||(V.enabled=!0,ci(k,"resize",hc),J||ci(k,"scroll",Cl),B&&ci(a,"refreshInit",B),Ne!==!1&&(V.progress=ne=0,ze=et=ye=Se()),ft!==!1&&V.refresh())},V.getTween=function(Ne){return Ne&&re?re.tween:We},V.setPositions=function(Ne,ft,tt,gt){if(U){var Cn=U.scrollTrigger,Lt=U.duration(),xn=Cn.end-Cn.start;Ne=Cn.start+xn*Ne/Lt,ft=Cn.start+xn*ft/Lt}V.refresh(!1,!1,{start:pS(Ne,tt&&!!V._startClamp),end:pS(ft,tt&&!!V._endClamp)},gt),V.update()},V.adjustPinSpacing=function(Ne){if(we&&Ne){var ft=we.indexOf(I.d)+1;we[ft]=parseFloat(we[ft])+Ne+ii,we[1]=parseFloat(we[1])+Ne+ii,wl(we)}},V.disable=function(Ne,ft){if(Ne!==!1&&V.revert(!0,!0),V.enabled&&(V.enabled=V.isActive=!1,ft||We&&We.pause(),Ue=0,Me&&(Me.uncache=1),B&&fi(a,"refreshInit",B),q&&(q.pause(),re.tween&&re.tween.kill()&&(re.tween=0)),!J)){for(var tt=Ft.length;tt--;)if(Ft[tt].scroller===k&&Ft[tt]!==V)return;fi(k,"resize",hc),J||fi(k,"scroll",Cl)}},V.kill=function(Ne,ft){V.disable(Ne,ft),We&&!ft&&We.kill(),h&&delete qm[h];var tt=Ft.indexOf(V);tt>=0&&Ft.splice(tt,1),tt===Pi&&uh>0&&Pi--,tt=0,Ft.forEach(function(gt){return gt.scroller===V.scroller&&(tt=1)}),tt||Ii||(V.scroll.rec=0),s&&(s.scrollTrigger=null,Ne&&s.revert({kill:!1}),ft||s.kill()),ot&&[ot,at,se,yt].forEach(function(gt){return gt.parentNode&&gt.parentNode.removeChild(gt)}),dc===V&&(dc=0),x&&(Me&&(Me.uncache=1),tt=0,Ft.forEach(function(gt){return gt.pin===x&&tt++}),tt||(Me.spacer=0)),i.onKill&&i.onKill(V)},Ft.push(V),V.enable(!1,!1),Ie&&Ie(V),s&&s.add&&!vt){var ht=V.update;V.update=function(){V.update=ht,It.cache++,He||Qe||V.refresh()},nt.delayedCall(.01,V.update),vt=.01,He=Qe=0}else V.refresh();x&&kC()},a.register=function(i){return Ml||(nt=i||vS(),_S()&&window.document&&a.enable(),Ml=ic),Ml},a.defaults=function(i){if(i)for(var s in i)rh[s]=i[s];return rh},a.disable=function(i,s){ic=0,Ft.forEach(function(c){return c[s?"kill":"disable"](i)}),fi(zt,"wheel",Cl),fi(sn,"scroll",Cl),clearInterval(Qf),fi(sn,"touchcancel",pa),fi(rn,"touchstart",pa),nh(fi,sn,"pointerdown,touchstart,mousedown",mS),nh(fi,sn,"pointerup,touchend,mouseup",gS),jf.kill(),eh(fi);for(var l=0;l<It.length;l+=3)ih(fi,It[l],It[l+1]),ih(fi,It[l],It[l+2])},a.enable=function(){if(zt=window,sn=document,hr=sn.documentElement,rn=sn.body,nt){if($u=nt.utils.toArray,ec=nt.utils.clamp,Fm=nt.core.context||pa,Om=nt.core.suppressOverwrites||pa,Im=zt.history.scrollRestoration||"auto",Km=zt.pageYOffset||0,nt.core.globals("ScrollTrigger",a),rn){ic=1,El=document.createElement("div"),El.style.height="100vh",El.style.position="absolute",LS(),FC(),Vn.register(nt),a.isTouch=Vn.isTouch,Es=Vn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Pm=Vn.isTouch===1,ci(zt,"wheel",Cl),Lm=[zt,sn,hr,rn],nt.matchMedia?(a.matchMedia=function(g){var v=nt.matchMedia(),_;for(_ in g)v.add(_,g[_]);return v},nt.addEventListener("matchMediaInit",function(){wS(),Zm()}),nt.addEventListener("matchMediaRevert",function(){return CS()}),nt.addEventListener("matchMedia",function(){To(0,1),bo("matchMedia")}),nt.matchMedia().add("(orientation: portrait)",function(){return Ym(),Ym})):console.warn("Requires GSAP 3.11.0 or later"),Ym(),ci(sn,"scroll",Cl);var i=rn.hasAttribute("style"),s=rn.style,l=s.borderTopStyle,c=nt.core.Animation.prototype,f,h;for(c.revert||Object.defineProperty(c,"revert",{value:function(){return this.time(-.01,!0)}}),s.borderTopStyle="solid",f=Fa(rn),ni.m=Math.round(f.top+ni.sc())||0,Oi.m=Math.round(f.left+Oi.sc())||0,l?s.borderTopStyle=l:s.removeProperty("border-top-style"),i||(rn.setAttribute("style",""),rn.removeAttribute("style")),Qf=setInterval(AS,250),nt.delayedCall(.5,function(){return $f=0}),ci(sn,"touchcancel",pa),ci(rn,"touchstart",pa),nh(ci,sn,"pointerdown,touchstart,mousedown",mS),nh(ci,sn,"pointerup,touchend,mouseup",gS),Nm=nt.utils.checkPrefix("transform"),ch.push(Nm),Ml=Ti(),jf=nt.delayedCall(.2,To).pause(),bl=[sn,"visibilitychange",function(){var g=zt.innerWidth,v=zt.innerHeight;sn.hidden?(oS=g,lS=v):(oS!==g||lS!==v)&&hc()},sn,"DOMContentLoaded",To,zt,"load",To,zt,"resize",hc],eh(ci),Ft.forEach(function(g){return g.enable(0,1)}),h=0;h<It.length;h+=3)ih(fi,It[h],It[h+1]),ih(fi,It[h],It[h+2])}else if(sn){var d=function g(){a.enable(),sn.removeEventListener("DOMContentLoaded",g)};sn.addEventListener("DOMContentLoaded",d)}}},a.config=function(i){"limitCallbacks"in i&&(Hm=!!i.limitCallbacks);var s=i.syncInterval;s&&clearInterval(Qf)||(Qf=s)&&setInterval(AS,s),"ignoreMobileResize"in i&&(Pm=a.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(eh(fi)||eh(ci,i.autoRefreshEvents||"none"),cS=(i.autoRefreshEvents+"").indexOf("resize")===-1)},a.scrollerProxy=function(i,s){var l=Zi(i),c=It.indexOf(l),f=vo(l);~c&&It.splice(c,f?6:2),s&&(f?da.unshift(zt,s,rn,s,hr,s):da.unshift(l,s))},a.clearMatchMedia=function(i){Ft.forEach(function(s){return s._ctx&&s._ctx.query===i&&s._ctx.kill(!0,!0)})},a.isInViewport=function(i,s,l){var c=(dr(i)?Zi(i):i).getBoundingClientRect(),f=c[l?yo:So]*s||0;return l?c.right-f>0&&c.left+f<zt.innerWidth:c.bottom-f>0&&c.top+f<zt.innerHeight},a.positionInViewport=function(i,s,l){dr(i)&&(i=Zi(i));var c=i.getBoundingClientRect(),f=c[l?yo:So],h=s==null?f/2:s in ah?ah[s]*f:~s.indexOf("%")?parseFloat(s)*f/100:parseFloat(s)||0;return l?(c.left+h)/zt.innerWidth:(c.top+h)/zt.innerHeight},a.killAll=function(i){if(Ft.slice(0).forEach(function(l){return l.vars.id!=="ScrollSmoother"&&l.kill()}),i!==!0){var s=Mo.killAll||[];Mo={},s.forEach(function(l){return l()})}},a})();Tt.version="3.15.0",Tt.saveStyles=function(a){return a?$u(a).forEach(function(e){if(e&&e.style){var t=pr.indexOf(e);t>=0&&pr.splice(t,5),pr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),nt.core.getCache(e),Fm())}}):pr},Tt.revert=function(a,e){return Zm(!a,e)},Tt.create=function(a,e){return new Tt(a,e)},Tt.refresh=function(a){return a?hc(!0):(Ml||Tt.register())&&To(!0)},Tt.update=function(a){return++It.cache&&Ia(a===!0?2:0)},Tt.clearScrollMemory=DS,Tt.maxScroll=function(a,e){return ma(a,e?Oi:ni)},Tt.getScrollFunc=function(a,e){return bs(Zi(a),e?Oi:ni)},Tt.getById=function(a){return qm[a]},Tt.getAll=function(){return Ft.filter(function(a){return a.vars.id!=="ScrollSmoother"})},Tt.isScrolling=function(){return!!Dr},Tt.snapDirectional=Wm,Tt.addEventListener=function(a,e){var t=Mo[a]||(Mo[a]=[]);~t.indexOf(e)||t.push(e)},Tt.removeEventListener=function(a,e){var t=Mo[a],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)},Tt.batch=function(a,e){var t=[],i={},s=e.interval||.016,l=e.batchMax||1e9,c=function(d,g){var v=[],_=[],x=nt.delayedCall(s,function(){g(v,_),v=[],_=[]}).pause();return function(b){v.length||x.restart(!0),v.push(b.trigger),_.push(b),l<=v.length&&x.progress(1)}},f;for(f in e)i[f]=f.substr(0,2)==="on"&&Ai(e[f])&&f!=="onRefreshInit"?c(f,e[f]):e[f];return Ai(l)&&(l=l(),ci(Tt,"refresh",function(){return l=e.batchMax()})),$u(a).forEach(function(h){var d={};for(f in i)d[f]=i[f];d.trigger=h,t.push(Tt.create(d))}),t};var zS=function(e,t,i,s){return t>s?e(s):t<0&&e(0),i>s?(s-t)/(i-t):i<0?t/(t-i):1},Jm=function a(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Vn.isTouch?" pinch-zoom":""):"none",e===hr&&a(rn,t)},ph={auto:1,scroll:1},ZC=function(e){var t=e.event,i=e.target,s=e.axis,l=(t.changedTouches?t.changedTouches[0]:t).target,c=l._gsap||nt.core.getCache(l),f=Ti(),h;if(!c._isScrollT||f-c._isScrollT>2e3){for(;l&&l!==rn&&(l.scrollHeight<=l.clientHeight&&l.scrollWidth<=l.clientWidth||!(ph[(h=Lr(l)).overflowY]||ph[h.overflowX]));)l=l.parentNode;c._isScroll=l&&l!==i&&!vo(l)&&(ph[(h=Lr(l)).overflowY]||ph[h.overflowX]),c._isScrollT=f}(c._isScroll||s==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},BS=function(e,t,i,s){return Vn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:s=s&&ZC,onPress:s,onDrag:s,onScroll:s,onEnable:function(){return i&&ci(sn,Vn.eventTypes[0],GS,!1,!0)},onDisable:function(){return fi(sn,Vn.eventTypes[0],GS,!0)}})},KC=/(input|label|select|textarea)/i,HS,GS=function(e){var t=KC.test(e.target.tagName);(t||HS)&&(e._gsapAllow=!0,HS=t)},jC=function(e){xo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,s=t.momentum,l=t.allowNestedScroll,c=t.onRelease,f,h,d=Zi(e.target)||hr,g=nt.core.globals().ScrollSmoother,v=g&&g.get(),_=Es&&(e.content&&Zi(e.content)||v&&e.content!==!1&&!v.smooth()&&v.content()),x=bs(d,ni),b=bs(d,Oi),M=1,y=(Vn.isTouch&&zt.visualViewport?zt.visualViewport.scale*zt.visualViewport.width:zt.outerWidth)/zt.innerWidth,S=0,R=Ai(s)?function(){return s(f)}:function(){return s||2.8},w,C,O=BS(d,e.type,!0,l),L=function(){return C=!1},U=pa,T=pa,P=function(){h=ma(d,ni),T=ec(Es?1:0,h),i&&(U=ec(0,ma(d,Oi))),w=Eo},I=function(){_._gsap.y=rc(parseFloat(_._gsap.y)+x.offset)+"px",_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(_._gsap.y)+", 0, 1)",x.offset=x.cacheID=0},H=function(){if(C){requestAnimationFrame(L);var ee=rc(f.deltaY/2),ue=T(x.v-ee);if(_&&ue!==x.v+x.offset){x.offset=ue-x.v;var V=rc((parseFloat(_&&_._gsap.y)||0)-x.offset);_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+V+", 0, 1)",_._gsap.y=V+"px",x.cacheID=It.cache,Ia()}return!0}x.offset&&I(),C=!0},k,te,J,X,z=function(){P(),k.isActive()&&k.vars.scrollY>h&&(x()>h?k.progress(1)&&x(h):k.resetTo("scrollY",h))};return _&&nt.set(_,{y:"+=0"}),e.ignoreCheck=function(G){return Es&&G.type==="touchmove"&&H()||M>1.05&&G.type!=="touchstart"||f.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){C=!1;var G=M;M=rc((zt.visualViewport&&zt.visualViewport.scale||1)/y),k.pause(),G!==M&&Jm(d,M>1.01?!0:i?!1:"x"),te=b(),J=x(),P(),w=Eo},e.onRelease=e.onGestureStart=function(G,ee){if(x.offset&&I(),!ee)X.restart(!0);else{It.cache++;var ue=R(),V,B;i&&(V=b(),B=V+ue*.05*-G.velocityX/.227,ue*=zS(b,V,B,ma(d,Oi)),k.vars.scrollX=U(B)),V=x(),B=V+ue*.05*-G.velocityY/.227,ue*=zS(x,V,B,ma(d,ni)),k.vars.scrollY=T(B),k.invalidate().duration(ue).play(.01),(Es&&k.vars.scrollY>=h||V>=h-1)&&nt.to({},{onUpdate:z,duration:ue})}c&&c(G)},e.onWheel=function(){k._ts&&k.pause(),Ti()-S>1e3&&(w=0,S=Ti())},e.onChange=function(G,ee,ue,V,B){if(Eo!==w&&P(),ee&&i&&b(U(V[2]===ee?te+(G.startX-G.x):b()+ee-V[1])),ue){x.offset&&I();var Z=B[2]===ue,ve=Z?J+G.startY-G.y:x()+ue-B[1],ye=T(ve);Z&&ve!==ye&&(J+=ye-ve),x(ye)}(ue||ee)&&Ia()},e.onEnable=function(){Jm(d,i?!1:"x"),Tt.addEventListener("refresh",z),ci(zt,"resize",z),x.smooth&&(x.target.style.scrollBehavior="auto",x.smooth=b.smooth=!1),O.enable()},e.onDisable=function(){Jm(d,!0),fi(zt,"resize",z),Tt.removeEventListener("refresh",z),O.kill()},e.lockAxis=e.lockAxis!==!1,f=new Vn(e),f.iOS=Es,Es&&!x()&&x(1),Es&&nt.ticker.add(pa),X=f._dc,k=nt.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:FS(x,x(),function(){return k.pause()})},onUpdate:Ia,onComplete:X.vars.onComplete}),f};Tt.sort=function(a){if(Ai(a))return Ft.sort(a);var e=zt.pageYOffset||0;return Tt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+zt.innerHeight}),Ft.sort(a||function(t,i){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((i.vars.containerAnimation?1e6:i._sortY)+(i.vars.refreshPriority||0)*-1e6)})},Tt.observe=function(a){return new Vn(a)},Tt.normalizeScroll=function(a){if(typeof a>"u")return Fi;if(a===!0&&Fi)return Fi.enable();if(a===!1){Fi&&Fi.kill(),Fi=a;return}var e=a instanceof Vn?a:jC(a);return Fi&&Fi.target===e.target&&Fi.kill(),vo(e.target)&&(Fi=e),e},Tt.core={_getVelocityProp:Um,_inputObserver:BS,_scrollers:It,_proxies:da,bridge:{ss:function(){Dr||bo("scrollStart"),Dr=Ti()},ref:function(){return Ei}}},vS()&&nt.registerPlugin(Tt),Rt.registerPlugin(Tt),Tt.config({ignoreMobileResize:!0,limitCallbacks:!0});const mh=window.__portfolioMotionState||{};mh.cleanup&&mh.cleanup(),window.__portfolioMotionState=mh,window.__portfolioMotionLoaded=!0,window.__portfolioMotionVersion="creative-gsap-2";const QC=window.matchMedia("(prefers-reduced-motion: reduce)").matches,JC=window.matchMedia("(pointer: coarse)").matches,$C=Number(navigator.deviceMemory||8)<=4,pc=[];function ew(a){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",a,{once:!0});return}a()}function tw(){const a=document.getElementById("portfolio-motion-styles");a&&a.remove();const e=document.createElement("style");e.id="portfolio-motion-styles",e.textContent=`
    .motion-opening-stage {
      position: fixed;
      inset: 0;
      z-index: 120;
      overflow: hidden;
      pointer-events: none;
      background: #020302;
      color: #94ff27;
      isolation: isolate;
    }

    .motion-opening-stage::before {
      position: absolute;
      inset: -20%;
      content: "";
      background:
        linear-gradient(120deg, transparent 0 35%, rgba(148, 255, 39, 0.18) 42%, transparent 49%),
        radial-gradient(circle at 50% 42%, rgba(148, 255, 39, 0.16), transparent 28%);
      opacity: 0.78;
      transform: translate3d(-18%, 0, 0) skewX(-18deg);
    }

    .motion-opening-stage::after {
      position: absolute;
      inset: 0;
      content: "";
      background:
        repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 4px),
        linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.78));
      mix-blend-mode: screen;
      opacity: 0.28;
    }

    .motion-opening-index {
      position: absolute;
      left: clamp(20px, 5vw, 72px);
      bottom: clamp(22px, 6vw, 76px);
      z-index: 2;
      display: grid;
      gap: 8px;
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.16em;
      text-transform: uppercase;
    }

    .motion-opening-index strong {
      display: block;
      color: #eef5f2;
      font-size: clamp(38px, 8vw, 104px);
      line-height: 0.88;
      letter-spacing: 0;
    }

    .motion-opening-slab {
      position: absolute;
      inset: 0 auto 0 0;
      z-index: 1;
      width: 62vw;
      background: #94ff27;
      transform-origin: 0 50%;
      mix-blend-mode: screen;
    }

    .motion-opening-slab.is-dark {
      left: auto;
      right: 0;
      width: 55vw;
      background: #050705;
      mix-blend-mode: normal;
      transform-origin: 100% 50%;
    }

    .motion-clip-target {
      overflow: hidden;
      will-change: transform, clip-path, opacity;
    }

    .motion-image-target {
      will-change: transform, clip-path;
      transform-origin: 50% 50%;
    }

    .motion-card-target {
      will-change: transform, clip-path, opacity, filter;
      transform-origin: 50% 100%;
    }
  `,document.head.appendChild(e),pc.push(()=>e.remove())}function ri(a,e=document){return a?e.querySelector(a):null}function mc(a,e=document){return a?Array.from(e.querySelectorAll(a)):[]}function gc(a){if(!a)return!1;const e=getComputedStyle(a);if(e.display==="none"||e.visibility==="hidden")return!1;const t=a.getBoundingClientRect();return t.width>0&&t.height>0}function nw(a,e,t="*"){return mc(t,a).find(i=>i.textContent.trim()===e)}function iw(a){if(!a)return[];if(a.classList.add("motion-clip-target"),a.children.length)return Array.from(a.children);const e=document.createElement("span");return e.textContent=a.textContent,a.textContent="",a.appendChild(e),[e]}function rw(){return new Promise(a=>{let e=0;const t=()=>{e+=1;const i=ri(".resume-timeline-card .timeline-card-shell"),s=ri(".cap-card .icon-btn")||ri(".mobile-skill-card .icon-btn");if(i&&s||e>90){a();return}requestAnimationFrame(t)};requestAnimationFrame(t)})}function aw(){const a=ri("#frame"),e=ri(".mobile-hero"),t=gc(a);if(!(t?a:e))return;const s=document.createElement("div");s.className="motion-opening-stage",s.innerHTML=`
    <div class="motion-opening-slab"></div>
    <div class="motion-opening-slab is-dark"></div>
    <div class="motion-opening-index"><span>Portfolio / Opening</span><strong>LXY</strong></div>
  `,document.body.appendChild(s);const l=t?ri(".video-bg",a):ri("video",e),c=t?ri("h1",a):ri(".mobile-title",e),f=iw(c),h=t?nw(a,"[PORTFOLIO]","p"):ri(".mobile-kicker",e),d=t?ri('[data-countup][data-to="10"]',a):ri(".mobile-number",e),g=t?mc("#frame > p, #frame > a.btn, #frame > div.absolute.font-cn.text-right").filter(y=>{const S=parseFloat(y.style.top||"9999");return S>880&&S<1030}):[],v=t?[]:[ri(".mobile-copy",e),ri(".mobile-actions",e),ri(".mobile-motto",e),ri(".mobile-top",e)],_=[d,...g,...v].filter(Boolean);Rt.set(s.querySelector(".motion-opening-slab"),{scaleX:1.12,xPercent:-8,skewX:-12}),Rt.set(s.querySelector(".motion-opening-slab.is-dark"),{scaleX:1.05,xPercent:8,skewX:-12}),Rt.set(s.querySelector(".motion-opening-index"),{y:36,opacity:0}),l&&Rt.set(l,{scale:1.16,filter:"blur(12px) brightness(0.58) saturate(0.8)"}),h&&Rt.set(h,{clipPath:"inset(0 100% 0 0)",opacity:.72}),f.length&&Rt.set(f,{yPercent:118,scaleY:.46,skewY:7,opacity:0,transformOrigin:"0% 100%",willChange:"transform, opacity"}),_.length&&Rt.set(_,{y:68,opacity:0,filter:"blur(8px)"});let x=0;const b=()=>{window.clearTimeout(x),s.remove(),Rt.set([l,h,...f,..._].filter(Boolean),{clearProps:"willChange,filter,clipPath,transform,opacity"})},M=Rt.timeline({defaults:{ease:"expo.out"},onComplete:b});pc.push(()=>{window.clearTimeout(x),M.kill()}),x=window.setTimeout(b,6200),M.to(s.querySelector(".motion-opening-index"),{y:0,opacity:1,duration:.9},0).to(s.querySelector(".motion-opening-slab"),{xPercent:102,scaleX:.72,duration:1.55},.18).to(s.querySelector(".motion-opening-slab.is-dark"),{xPercent:-112,scaleX:.84,duration:1.65},.26),l&&M.to(l,{scale:1,filter:"blur(0px) brightness(1.02) saturate(1)",duration:2.05},.16),h&&M.to(h,{clipPath:"inset(0 0% 0 0)",opacity:1,duration:.95},.7),f.length&&M.to(f,{yPercent:0,scaleY:1,skewY:0,opacity:1,duration:1.45,stagger:.15},.82),_.length&&M.to(_,{y:0,opacity:1,filter:"blur(0px)",duration:1.05,stagger:.08},1.18),M.to(s,{opacity:0,duration:.75,ease:"power3.inOut"},1.68)}function Ts({trigger:a,eyebrow:e,heading:t,cards:i,images:s}){const l=ri(a);if(!l||!gc(l))return;const c=ri(e),f=ri(t),h=mc(i).filter(gc),d=mc(s).filter(gc);[c,f].filter(Boolean).forEach(v=>v.classList.add("motion-clip-target")),h.forEach(v=>v.classList.add("motion-card-target")),d.forEach(v=>v.classList.add("motion-image-target")),c&&Rt.set(c,{x:-260,y:36,scale:4.6,opacity:0,clipPath:"inset(0 100% 0 0)",transformOrigin:"0% 50%"}),f&&f!==c&&Rt.set(f,{y:58,opacity:0,clipPath:"inset(0 0 100% 0)"}),h.length&&Rt.set(h,{y:94,opacity:0,filter:"blur(10px)",clipPath:"inset(16% 0 0 0)",scale:.975}),d.length&&Rt.set(d,{scale:1.18,clipPath:"inset(0 0 100% 0)"});const g=Rt.timeline({scrollTrigger:{trigger:l,start:"top 74%",once:!0,invalidateOnRefresh:!0},defaults:{ease:"expo.out"}});c&&g.to(c,{x:0,y:0,scale:1,opacity:1,clipPath:"inset(0 0% 0 0)",duration:1.18}),f&&f!==c&&g.to(f,{y:0,opacity:1,clipPath:"inset(0 0 0% 0)",duration:1.08},c?"<0.18":0),h.length&&g.to(h,{y:0,opacity:1,filter:"blur(0px)",clipPath:"inset(0% 0 0 0)",scale:1,duration:1.18,stagger:{each:.12,from:"start"}},"<0.24"),d.length&&g.to(d,{scale:1.045,clipPath:"inset(0 0 0% 0)",duration:1.28,stagger:{each:.08,from:"start"}},"<0.08"),pc.push(()=>g.kill())}function sw(){if(Ts({trigger:"#resume",eyebrow:"#resumeEyebrow",heading:"#frame h2",cards:".resume-glow-card, .resume-timeline-card",images:""}),Ts({trigger:"#works",eyebrow:"#works + p",heading:"#works + p + h2",cards:".project-card",images:".project-card img"}),Ts({trigger:"#capability",eyebrow:"#capability + p",heading:"#capability + p + h2",cards:".cap-card",images:""}),Ts({trigger:"#contact",eyebrow:"#contact + p",heading:"#contact + p + h2",cards:"#contact ~ .btn",images:""}),Ts({trigger:"#m-resume",eyebrow:"#m-resume .mobile-eyebrow",heading:"#m-resume .mobile-heading",cards:"#m-resume .mobile-card, #m-resume .mobile-stat, #m-resume .mobile-timeline-item",images:""}),Ts({trigger:"#m-works",eyebrow:"#m-works .mobile-eyebrow",heading:"#m-works .mobile-heading",cards:"#m-works .mobile-work-card",images:"#m-works .mobile-work-card img"}),Ts({trigger:"#m-capability",eyebrow:"#m-capability .mobile-eyebrow",heading:"#m-capability .mobile-heading",cards:"#m-capability .mobile-skill-card",images:""}),Ts({trigger:"#m-contact",eyebrow:"#m-contact .mobile-eyebrow",heading:"#m-contact .mobile-contact-title",cards:"#m-contact .mobile-btn",images:""}),JC||$C){Tt.refresh();return}mc(".project-card img, .mobile-work-card img").filter(gc).forEach(a=>{const e=a.closest(".project-card, .mobile-work-card"),t=Rt.to(a,{y:22,ease:"none",scrollTrigger:{trigger:e,start:"top bottom",end:"bottom top",scrub:.9,invalidateOnRefresh:!0}});pc.push(()=>t.kill())}),Tt.refresh()}function ow(){tw(),aw(),window.__portfolioMotionReady=!0,rw().then(()=>{sw(),window.setTimeout(()=>Tt.refresh(),600)})}ew(()=>{if(QC){Tt.killAll();return}ow()});function lw(){var a;pc.splice(0).forEach(e=>e()),Tt.getAll().forEach(e=>e.kill()),(a=document.querySelector(".motion-opening-stage"))==null||a.remove()}mh.cleanup=lw;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $m="184",uw=0,VS=1,cw=2,gh=1,fw=2,_c=3,As=0,Ki=1,za=2,Ba=0,Dl=1,e0=2,kS=3,XS=4,hw=5,Ao=100,dw=101,pw=102,mw=103,gw=104,_w=200,vw=201,xw=202,yw=203,t0=204,n0=205,Sw=206,Mw=207,bw=208,Ew=209,Tw=210,Aw=211,Rw=212,Cw=213,ww=214,i0=0,r0=1,a0=2,Ul=3,s0=4,o0=5,l0=6,u0=7,WS=0,Dw=1,Uw=2,ga=0,qS=1,YS=2,ZS=3,KS=4,jS=5,QS=6,JS=7,$S=300,Ro=301,Ll=302,c0=303,f0=304,_h=306,h0=1e3,mr=1001,d0=1002,gi=1003,Lw=1004,vh=1005,Yn=1006,p0=1007,Co=1008,Nr=1009,eM=1010,tM=1011,vc=1012,m0=1013,_a=1014,Zr=1015,va=1016,g0=1017,_0=1018,xc=1020,nM=35902,iM=35899,rM=1021,aM=1022,Or=1023,Ha=1026,wo=1027,sM=1028,v0=1029,Do=1030,x0=1031,y0=1033,xh=33776,yh=33777,Sh=33778,Mh=33779,S0=35840,M0=35841,b0=35842,E0=35843,T0=36196,A0=37492,R0=37496,C0=37488,w0=37489,bh=37490,D0=37491,U0=37808,L0=37809,N0=37810,O0=37811,P0=37812,F0=37813,I0=37814,z0=37815,B0=37816,H0=37817,G0=37818,V0=37819,k0=37820,X0=37821,W0=36492,q0=36494,Y0=36495,Z0=36283,K0=36284,Eh=36285,j0=36286,Nw=3200,oM=0,Ow=1,Rs="",Pr="srgb",Th="srgb-linear",Ah="linear",on="srgb",Nl=7680,lM=519,Pw=512,Fw=513,Iw=514,Q0=515,zw=516,Bw=517,J0=518,Hw=519,uM=35044,cM="300 es",xa=2e3,Rh=2001;function Gw(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ch(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Vw(){const a=Ch("canvas");return a.style.display="block",a}const fM={};function hM(...a){const e="THREE."+a.shift();console.log(e,...a)}function dM(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function xt(...a){a=dM(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function jt(...a){a=dM(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function $0(...a){const e=a.join(" ");e in fM||(fM[e]=!0,xt(...a))}function kw(a,e,t){return new Promise(function(i,s){function l(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:i()}}setTimeout(l,t)})}const Xw={[i0]:r0,[a0]:l0,[s0]:u0,[Ul]:o0,[r0]:i0,[l0]:a0,[u0]:s0,[o0]:Ul};class Uo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let l=0,c=s.length;l<c;l++)s[l].call(this,e);e.target=null}}}const Ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eg=Math.PI/180,tg=180/Math.PI;function yc(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ri[a&255]+Ri[a>>8&255]+Ri[a>>16&255]+Ri[a>>24&255]+"-"+Ri[e&255]+Ri[e>>8&255]+"-"+Ri[e>>16&15|64]+Ri[e>>24&255]+"-"+Ri[t&63|128]+Ri[t>>8&255]+"-"+Ri[t>>16&255]+Ri[t>>24&255]+Ri[i&255]+Ri[i>>8&255]+Ri[i>>16&255]+Ri[i>>24&255]).toLowerCase()}function Yt(a,e,t){return Math.max(e,Math.min(t,a))}function Ww(a,e){return(a%e+e)%e}function ng(a,e,t){return(1-t)*a+t*e}function Sc(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function ji(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Pg=class Pg{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*i-c*s+e.x,this.y=l*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Pg.prototype.isVector2=!0;let Mt=Pg;class Ol{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,l,c,f){let h=i[s+0],d=i[s+1],g=i[s+2],v=i[s+3],_=l[c+0],x=l[c+1],b=l[c+2],M=l[c+3];if(v!==M||h!==_||d!==x||g!==b){let y=h*_+d*x+g*b+v*M;y<0&&(_=-_,x=-x,b=-b,M=-M,y=-y);let S=1-f;if(y<.9995){const R=Math.acos(y),w=Math.sin(R);S=Math.sin(S*R)/w,f=Math.sin(f*R)/w,h=h*S+_*f,d=d*S+x*f,g=g*S+b*f,v=v*S+M*f}else{h=h*S+_*f,d=d*S+x*f,g=g*S+b*f,v=v*S+M*f;const R=1/Math.sqrt(h*h+d*d+g*g+v*v);h*=R,d*=R,g*=R,v*=R}}e[t]=h,e[t+1]=d,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,i,s,l,c){const f=i[s],h=i[s+1],d=i[s+2],g=i[s+3],v=l[c],_=l[c+1],x=l[c+2],b=l[c+3];return e[t]=f*b+g*v+h*x-d*_,e[t+1]=h*b+g*_+d*v-f*x,e[t+2]=d*b+g*x+f*_-h*v,e[t+3]=g*b-f*v-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,d=f(i/2),g=f(s/2),v=f(l/2),_=h(i/2),x=h(s/2),b=h(l/2);switch(c){case"XYZ":this._x=_*g*v+d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v-_*x*b;break;case"YXZ":this._x=_*g*v+d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v+_*x*b;break;case"ZXY":this._x=_*g*v-d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v-_*x*b;break;case"ZYX":this._x=_*g*v-d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v+_*x*b;break;case"YZX":this._x=_*g*v+d*x*b,this._y=d*x*v+_*g*b,this._z=d*g*b-_*x*v,this._w=d*g*v-_*x*b;break;case"XZY":this._x=_*g*v-d*x*b,this._y=d*x*v-_*g*b,this._z=d*g*b+_*x*v,this._w=d*g*v+_*x*b;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],l=t[8],c=t[1],f=t[5],h=t[9],d=t[2],g=t[6],v=t[10],_=i+f+v;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(g-h)*x,this._y=(l-d)*x,this._z=(c-s)*x}else if(i>f&&i>v){const x=2*Math.sqrt(1+i-f-v);this._w=(g-h)/x,this._x=.25*x,this._y=(s+c)/x,this._z=(l+d)/x}else if(f>v){const x=2*Math.sqrt(1+f-i-v);this._w=(l-d)/x,this._x=(s+c)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+v-i-f);this._w=(c-s)/x,this._x=(l+d)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,l=e._z,c=e._w,f=t._x,h=t._y,d=t._z,g=t._w;return this._x=i*g+c*f+s*d-l*h,this._y=s*g+c*h+l*f-i*d,this._z=l*g+c*d+i*h-s*f,this._w=c*g-i*f-s*h-l*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(i=-i,s=-s,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const d=Math.acos(f),g=Math.sin(d);h=Math.sin(h*d)/g,t=Math.sin(t*d)/g,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fg=class Fg{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pM.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pM.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*i+l[6]*s,this.y=l[1]*t+l[4]*i+l[7]*s,this.z=l[2]*t+l[5]*i+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=e.elements,c=1/(l[3]*t+l[7]*i+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*i+l[8]*s+l[12])*c,this.y=(l[1]*t+l[5]*i+l[9]*s+l[13])*c,this.z=(l[2]*t+l[6]*i+l[10]*s+l[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,l=e.x,c=e.y,f=e.z,h=e.w,d=2*(c*s-f*i),g=2*(f*t-l*s),v=2*(l*i-c*t);return this.x=t+h*d+c*v-f*g,this.y=i+h*g+f*d-l*v,this.z=s+h*v+l*g-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*i+l[8]*s,this.y=l[1]*t+l[5]*i+l[9]*s,this.z=l[2]*t+l[6]*i+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this.z=Yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this.z=Yt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=s*h-l*f,this.y=l*c-i*h,this.z=i*f-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ig.copy(this).projectOnVector(e),this.sub(ig)}reflect(e){return this.sub(ig.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fg.prototype.isVector3=!0;let he=Fg;const ig=new he,pM=new Ol,Ig=class Ig{constructor(e,t,i,s,l,c,f,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,h,d)}set(e,t,i,s,l,c,f,h,d){const g=this.elements;return g[0]=e,g[1]=s,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=i,g[7]=c,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[3],h=i[6],d=i[1],g=i[4],v=i[7],_=i[2],x=i[5],b=i[8],M=s[0],y=s[3],S=s[6],R=s[1],w=s[4],C=s[7],O=s[2],L=s[5],U=s[8];return l[0]=c*M+f*R+h*O,l[3]=c*y+f*w+h*L,l[6]=c*S+f*C+h*U,l[1]=d*M+g*R+v*O,l[4]=d*y+g*w+v*L,l[7]=d*S+g*C+v*U,l[2]=_*M+x*R+b*O,l[5]=_*y+x*w+b*L,l[8]=_*S+x*C+b*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8];return t*c*g-t*f*d-i*l*g+i*f*h+s*l*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=g*c-f*d,_=f*h-g*l,x=d*l-c*h,b=t*v+i*_+s*x;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/b;return e[0]=v*M,e[1]=(s*d-g*i)*M,e[2]=(f*i-s*c)*M,e[3]=_*M,e[4]=(g*t-s*h)*M,e[5]=(s*l-f*t)*M,e[6]=x*M,e[7]=(i*h-d*t)*M,e[8]=(c*t-i*l)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,l,c,f){const h=Math.cos(l),d=Math.sin(l);return this.set(i*h,i*d,-i*(h*c+d*f)+c+e,-s*d,s*h,-s*(-d*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(rg.makeScale(e,t)),this}rotate(e){return this.premultiply(rg.makeRotation(-e)),this}translate(e,t){return this.premultiply(rg.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ig.prototype.isMatrix3=!0;let At=Ig;const rg=new At,mM=new At().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gM=new At().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qw(){const a={enabled:!0,workingColorSpace:Th,spaces:{},convert:function(s,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===on&&(s.r=Ga(s.r),s.g=Ga(s.g),s.b=Ga(s.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===on&&(s.r=Pl(s.r),s.g=Pl(s.g),s.b=Pl(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Rs?Ah:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,c){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return $0("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return $0("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Th]:{primaries:e,whitePoint:i,transfer:Ah,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pr},outputColorSpaceConfig:{drawingBufferColorSpace:Pr}},[Pr]:{primaries:e,whitePoint:i,transfer:on,toXYZ:mM,fromXYZ:gM,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pr}}}),a}const Zt=qw();function Ga(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Pl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Fl;class Yw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fl===void 0&&(Fl=Ch("canvas")),Fl.width=e.width,Fl.height=e.height;const s=Fl.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fl}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ch("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),l=s.data;for(let c=0;c<l.length;c++)l[c]=Ga(l[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ga(t[i]/255)*255):t[i]=Ga(t[i]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Zw=0;class ag{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=yc(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?l.push(sg(s[c].image)):l.push(sg(s[c]))}else l=sg(s);i.url=l}return t||(e.images[this.uuid]=i),i}}function sg(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Yw.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let Kw=0;const og=new he;class zi extends Uo{constructor(e=zi.DEFAULT_IMAGE,t=zi.DEFAULT_MAPPING,i=mr,s=mr,l=Yn,c=Co,f=Or,h=Nr,d=zi.DEFAULT_ANISOTROPY,g=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=yc(),this.name="",this.source=new ag(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(og).x}get height(){return this.source.getSize(og).y}get depth(){return this.source.getSize(og).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case h0:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case d0:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case h0:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case d0:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zi.DEFAULT_IMAGE=null,zi.DEFAULT_MAPPING=$S,zi.DEFAULT_ANISOTROPY=1;const zg=class zg{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*l,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*l,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*l,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,l;const h=e.elements,d=h[0],g=h[4],v=h[8],_=h[1],x=h[5],b=h[9],M=h[2],y=h[6],S=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-M)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+M)<.1&&Math.abs(b+y)<.1&&Math.abs(d+x+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(d+1)/2,C=(x+1)/2,O=(S+1)/2,L=(g+_)/4,U=(v+M)/4,T=(b+y)/4;return w>C&&w>O?w<.01?(i=0,s=.707106781,l=.707106781):(i=Math.sqrt(w),s=L/i,l=U/i):C>O?C<.01?(i=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),i=L/s,l=T/s):O<.01?(i=.707106781,s=.707106781,l=0):(l=Math.sqrt(O),i=U/l,s=T/l),this.set(i,s,l,t),this}let R=Math.sqrt((y-b)*(y-b)+(v-M)*(v-M)+(_-g)*(_-g));return Math.abs(R)<.001&&(R=1),this.x=(y-b)/R,this.y=(v-M)/R,this.z=(_-g)/R,this.w=Math.acos((d+x+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Yt(this.x,e.x,t.x),this.y=Yt(this.y,e.y,t.y),this.z=Yt(this.z,e.z,t.z),this.w=Yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Yt(this.x,e,t),this.y=Yt(this.y,e,t),this.z=Yt(this.z,e,t),this.w=Yt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zg.prototype.isVector4=!0;let zn=zg;class jw extends Uo{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new zn(0,0,e,t),this.scissorTest=!1,this.viewport=new zn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},l=new zi(s),c=i.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new ag(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kr extends jw{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class _M extends zi{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qw extends zi{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=gi,this.minFilter=gi,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sd=class sd{constructor(e,t,i,s,l,c,f,h,d,g,v,_,x,b,M,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,l,c,f,h,d,g,v,_,x,b,M,y)}set(e,t,i,s,l,c,f,h,d,g,v,_,x,b,M,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=l,S[5]=c,S[9]=f,S[13]=h,S[2]=d,S[6]=g,S[10]=v,S[14]=_,S[3]=x,S[7]=b,S[11]=M,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sd().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Il.setFromMatrixColumn(e,0).length(),l=1/Il.setFromMatrixColumn(e,1).length(),c=1/Il.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*l,t[5]=i[5]*l,t[6]=i[6]*l,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,l=e.z,c=Math.cos(i),f=Math.sin(i),h=Math.cos(s),d=Math.sin(s),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=c*g,x=c*v,b=f*g,M=f*v;t[0]=h*g,t[4]=-h*v,t[8]=d,t[1]=x+b*d,t[5]=_-M*d,t[9]=-f*h,t[2]=M-_*d,t[6]=b+x*d,t[10]=c*h}else if(e.order==="YXZ"){const _=h*g,x=h*v,b=d*g,M=d*v;t[0]=_+M*f,t[4]=b*f-x,t[8]=c*d,t[1]=c*v,t[5]=c*g,t[9]=-f,t[2]=x*f-b,t[6]=M+_*f,t[10]=c*h}else if(e.order==="ZXY"){const _=h*g,x=h*v,b=d*g,M=d*v;t[0]=_-M*f,t[4]=-c*v,t[8]=b+x*f,t[1]=x+b*f,t[5]=c*g,t[9]=M-_*f,t[2]=-c*d,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const _=c*g,x=c*v,b=f*g,M=f*v;t[0]=h*g,t[4]=b*d-x,t[8]=_*d+M,t[1]=h*v,t[5]=M*d+_,t[9]=x*d-b,t[2]=-d,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const _=c*h,x=c*d,b=f*h,M=f*d;t[0]=h*g,t[4]=M-_*v,t[8]=b*v+x,t[1]=v,t[5]=c*g,t[9]=-f*g,t[2]=-d*g,t[6]=x*v+b,t[10]=_-M*v}else if(e.order==="XZY"){const _=c*h,x=c*d,b=f*h,M=f*d;t[0]=h*g,t[4]=-v,t[8]=d*g,t[1]=_*v+M,t[5]=c*g,t[9]=x*v-b,t[2]=b*v-x,t[6]=f*g,t[10]=M*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jw,e,$w)}lookAt(e,t,i){const s=this.elements;return gr.subVectors(e,t),gr.lengthSq()===0&&(gr.z=1),gr.normalize(),Cs.crossVectors(i,gr),Cs.lengthSq()===0&&(Math.abs(i.z)===1?gr.x+=1e-4:gr.z+=1e-4,gr.normalize(),Cs.crossVectors(i,gr)),Cs.normalize(),wh.crossVectors(gr,Cs),s[0]=Cs.x,s[4]=wh.x,s[8]=gr.x,s[1]=Cs.y,s[5]=wh.y,s[9]=gr.y,s[2]=Cs.z,s[6]=wh.z,s[10]=gr.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,l=this.elements,c=i[0],f=i[4],h=i[8],d=i[12],g=i[1],v=i[5],_=i[9],x=i[13],b=i[2],M=i[6],y=i[10],S=i[14],R=i[3],w=i[7],C=i[11],O=i[15],L=s[0],U=s[4],T=s[8],P=s[12],I=s[1],H=s[5],k=s[9],te=s[13],J=s[2],X=s[6],z=s[10],G=s[14],ee=s[3],ue=s[7],V=s[11],B=s[15];return l[0]=c*L+f*I+h*J+d*ee,l[4]=c*U+f*H+h*X+d*ue,l[8]=c*T+f*k+h*z+d*V,l[12]=c*P+f*te+h*G+d*B,l[1]=g*L+v*I+_*J+x*ee,l[5]=g*U+v*H+_*X+x*ue,l[9]=g*T+v*k+_*z+x*V,l[13]=g*P+v*te+_*G+x*B,l[2]=b*L+M*I+y*J+S*ee,l[6]=b*U+M*H+y*X+S*ue,l[10]=b*T+M*k+y*z+S*V,l[14]=b*P+M*te+y*G+S*B,l[3]=R*L+w*I+C*J+O*ee,l[7]=R*U+w*H+C*X+O*ue,l[11]=R*T+w*k+C*z+O*V,l[15]=R*P+w*te+C*G+O*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],l=e[12],c=e[1],f=e[5],h=e[9],d=e[13],g=e[2],v=e[6],_=e[10],x=e[14],b=e[3],M=e[7],y=e[11],S=e[15],R=h*x-d*_,w=f*x-d*v,C=f*_-h*v,O=c*x-d*g,L=c*_-h*g,U=c*v-f*g;return t*(M*R-y*w+S*C)-i*(b*R-y*O+S*L)+s*(b*w-M*O+S*U)-l*(b*C-M*L+y*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],l=e[3],c=e[4],f=e[5],h=e[6],d=e[7],g=e[8],v=e[9],_=e[10],x=e[11],b=e[12],M=e[13],y=e[14],S=e[15],R=t*f-i*c,w=t*h-s*c,C=t*d-l*c,O=i*h-s*f,L=i*d-l*f,U=s*d-l*h,T=g*M-v*b,P=g*y-_*b,I=g*S-x*b,H=v*y-_*M,k=v*S-x*M,te=_*S-x*y,J=R*te-w*k+C*H+O*I-L*P+U*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/J;return e[0]=(f*te-h*k+d*H)*X,e[1]=(s*k-i*te-l*H)*X,e[2]=(M*U-y*L+S*O)*X,e[3]=(_*L-v*U-x*O)*X,e[4]=(h*I-c*te-d*P)*X,e[5]=(t*te-s*I+l*P)*X,e[6]=(y*C-b*U-S*w)*X,e[7]=(g*U-_*C+x*w)*X,e[8]=(c*k-f*I+d*T)*X,e[9]=(i*I-t*k-l*T)*X,e[10]=(b*L-M*C+S*R)*X,e[11]=(v*C-g*L-x*R)*X,e[12]=(f*P-c*H-h*T)*X,e[13]=(t*H-i*P+s*T)*X,e[14]=(M*w-b*O-y*R)*X,e[15]=(g*O-v*w+_*R)*X,this}scale(e){const t=this.elements,i=e.x,s=e.y,l=e.z;return t[0]*=i,t[4]*=s,t[8]*=l,t[1]*=i,t[5]*=s,t[9]*=l,t[2]*=i,t[6]*=s,t[10]*=l,t[3]*=i,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),l=1-i,c=e.x,f=e.y,h=e.z,d=l*c,g=l*f;return this.set(d*c+i,d*f-s*h,d*h+s*f,0,d*f+s*h,g*f+i,g*h-s*c,0,d*h-s*f,g*h+s*c,l*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,l,c){return this.set(1,i,l,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,d=l+l,g=c+c,v=f+f,_=l*d,x=l*g,b=l*v,M=c*g,y=c*v,S=f*v,R=h*d,w=h*g,C=h*v,O=i.x,L=i.y,U=i.z;return s[0]=(1-(M+S))*O,s[1]=(x+C)*O,s[2]=(b-w)*O,s[3]=0,s[4]=(x-C)*L,s[5]=(1-(_+S))*L,s[6]=(y+R)*L,s[7]=0,s[8]=(b+w)*U,s[9]=(y-R)*U,s[10]=(1-(_+M))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinant();if(l===0)return i.set(1,1,1),t.identity(),this;let c=Il.set(s[0],s[1],s[2]).length();const f=Il.set(s[4],s[5],s[6]).length(),h=Il.set(s[8],s[9],s[10]).length();l<0&&(c=-c),jr.copy(this);const d=1/c,g=1/f,v=1/h;return jr.elements[0]*=d,jr.elements[1]*=d,jr.elements[2]*=d,jr.elements[4]*=g,jr.elements[5]*=g,jr.elements[6]*=g,jr.elements[8]*=v,jr.elements[9]*=v,jr.elements[10]*=v,t.setFromRotationMatrix(jr),i.x=c,i.y=f,i.z=h,this}makePerspective(e,t,i,s,l,c,f=xa,h=!1){const d=this.elements,g=2*l/(t-e),v=2*l/(i-s),_=(t+e)/(t-e),x=(i+s)/(i-s);let b,M;if(h)b=l/(c-l),M=c*l/(c-l);else if(f===xa)b=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Rh)b=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=v,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,l,c,f=xa,h=!1){const d=this.elements,g=2/(t-e),v=2/(i-s),_=-(t+e)/(t-e),x=-(i+s)/(i-s);let b,M;if(h)b=1/(c-l),M=c/(c-l);else if(f===xa)b=-2/(c-l),M=-(c+l)/(c-l);else if(f===Rh)b=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=g,d[4]=0,d[8]=0,d[12]=_,d[1]=0,d[5]=v,d[9]=0,d[13]=x,d[2]=0,d[6]=0,d[10]=b,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};sd.prototype.isMatrix4=!0;let Zn=sd;const Il=new he,jr=new Zn,Jw=new he(0,0,0),$w=new he(1,1,1),Cs=new he,wh=new he,gr=new he,vM=new Zn,xM=new Ol;class Lo{constructor(e=0,t=0,i=0,s=Lo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,l=s[0],c=s[4],f=s[8],h=s[1],d=s[5],g=s[9],v=s[2],_=s[6],x=s[10];switch(t){case"XYZ":this._y=Math.asin(Yt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,x),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Yt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,x));break;case"XZY":this._z=Math.asin(-Yt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vM.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vM,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xM.setFromEuler(this),this.setFromQuaternion(xM,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lo.DEFAULT_ORDER="XYZ";class yM{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e3=0;const SM=new he,zl=new Ol,Va=new Zn,Dh=new he,Mc=new he,t3=new he,n3=new Ol,MM=new he(1,0,0),bM=new he(0,1,0),EM=new he(0,0,1),TM={type:"added"},i3={type:"removed"},Bl={type:"childadded",child:null},lg={type:"childremoved",child:null};class Qi extends Uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e3++}),this.uuid=yc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qi.DEFAULT_UP.clone();const e=new he,t=new Lo,i=new Ol,s=new he(1,1,1);function l(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Zn},normalMatrix:{value:new At}}),this.matrix=new Zn,this.matrixWorld=new Zn,this.matrixAutoUpdate=Qi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yM,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zl.setFromAxisAngle(e,t),this.quaternion.multiply(zl),this}rotateOnWorldAxis(e,t){return zl.setFromAxisAngle(e,t),this.quaternion.premultiply(zl),this}rotateX(e){return this.rotateOnAxis(MM,e)}rotateY(e){return this.rotateOnAxis(bM,e)}rotateZ(e){return this.rotateOnAxis(EM,e)}translateOnAxis(e,t){return SM.copy(e).applyQuaternion(this.quaternion),this.position.add(SM.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(MM,e)}translateY(e){return this.translateOnAxis(bM,e)}translateZ(e){return this.translateOnAxis(EM,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dh.copy(e):Dh.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(Mc,Dh,this.up):Va.lookAt(Dh,Mc,this.up),this.quaternion.setFromRotationMatrix(Va),s&&(Va.extractRotation(s.matrixWorld),zl.setFromRotationMatrix(Va),this.quaternion.premultiply(zl.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(TM),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i3),lg.child=e,this.dispatchEvent(lg),lg.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Va.multiply(e.parent.matrixWorld)),e.applyMatrix4(Va),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(TM),Bl.child=e,this.dispatchEvent(Bl),Bl.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mc,e,t3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mc,n3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*i-l[8]*s,l[13]+=i-l[1]*t-l[5]*i-l[9]*s,l[14]+=s-l[2]*t-l[6]*i-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let l=0,c=s.length;l<c;l++)s[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let d=0,g=h.length;d<g;d++){const v=h[d];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,d=this.material.length;h<d;h++)f.push(l(e.materials,this.material[h]));s.material=f}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];s.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),d=c(e.textures),g=c(e.images),v=c(e.shapes),_=c(e.skeletons),x=c(e.animations),b=c(e.nodes);f.length>0&&(i.geometries=f),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),g.length>0&&(i.images=g),v.length>0&&(i.shapes=v),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),b.length>0&&(i.nodes=b)}return i.object=s,i;function c(f){const h=[];for(const d in f){const g=f[d];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Qi.DEFAULT_UP=new he(0,1,0),Qi.DEFAULT_MATRIX_AUTO_UPDATE=!0,Qi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Uh extends Qi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r3={type:"move"};class ug{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Uh,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Uh,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Uh,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,l=null,c=null;const f=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),S=this._getHandJoint(d,M);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const g=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],_=g.position.distanceTo(v.position),x=.02,b=.005;d.inputState.pinching&&_>x+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,i),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&l!==null&&(s=l),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(r3)))}return f!==null&&(f.visible=s!==null),h!==null&&(h.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Uh;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const AM={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ws={h:0,s:0,l:0},Lh={h:0,s:0,l:0};function cg(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class tn{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Zt.workingColorSpace){if(e=Ww(e,1),t=Yt(t,0,1),i=Yt(i,0,1),t===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+t):i+t-i*t,c=2*i-l;this.r=cg(c,l,e+1/3),this.g=cg(c,l,e),this.b=cg(c,l,e-1/3)}return Zt.colorSpaceToWorking(this,s),this}setStyle(e,t=Pr){function i(l){l!==void 0&&parseFloat(l)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pr){const i=AM[e.toLowerCase()];return i!==void 0?this.setHex(i,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ga(e.r),this.g=Ga(e.g),this.b=Ga(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pr){return Zt.workingToColorSpace(Ci.copy(this),e),Math.round(Yt(Ci.r*255,0,255))*65536+Math.round(Yt(Ci.g*255,0,255))*256+Math.round(Yt(Ci.b*255,0,255))}getHexString(e=Pr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.workingToColorSpace(Ci.copy(this),t);const i=Ci.r,s=Ci.g,l=Ci.b,c=Math.max(i,s,l),f=Math.min(i,s,l);let h,d;const g=(f+c)/2;if(f===c)h=0,d=0;else{const v=c-f;switch(d=g<=.5?v/(c+f):v/(2-c-f),c){case i:h=(s-l)/v+(s<l?6:0);break;case s:h=(l-i)/v+2;break;case l:h=(i-s)/v+4;break}h/=6}return e.h=h,e.s=d,e.l=g,e}getRGB(e,t=Zt.workingColorSpace){return Zt.workingToColorSpace(Ci.copy(this),t),e.r=Ci.r,e.g=Ci.g,e.b=Ci.b,e}getStyle(e=Pr){Zt.workingToColorSpace(Ci.copy(this),e);const t=Ci.r,i=Ci.g,s=Ci.b;return e!==Pr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ws),this.setHSL(ws.h+e,ws.s+t,ws.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ws),e.getHSL(Lh);const i=ng(ws.h,Lh.h,t),s=ng(ws.s,Lh.s,t),l=ng(ws.l,Lh.l,t);return this.setHSL(i,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*i+l[6]*s,this.g=l[1]*t+l[4]*i+l[7]*s,this.b=l[2]*t+l[5]*i+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ci=new tn;tn.NAMES=AM;class RM extends Qi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Lo,this.environmentIntensity=1,this.environmentRotation=new Lo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Qr=new he,ka=new he,fg=new he,Xa=new he,Hl=new he,Gl=new he,CM=new he,hg=new he,dg=new he,pg=new he,mg=new zn,gg=new zn,_g=new zn;class Jr{constructor(e=new he,t=new he,i=new he){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Qr.subVectors(e,t),s.cross(Qr);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,i,s,l){Qr.subVectors(s,t),ka.subVectors(i,t),fg.subVectors(e,t);const c=Qr.dot(Qr),f=Qr.dot(ka),h=Qr.dot(fg),d=ka.dot(ka),g=ka.dot(fg),v=c*d-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,x=(d*h-f*g)*_,b=(c*g-f*h)*_;return l.set(1-x-b,b,x)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(e,t,i,s,l,c,f,h){return this.getBarycoord(e,t,i,s,Xa)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xa.x),h.addScaledVector(c,Xa.y),h.addScaledVector(f,Xa.z),h)}static getInterpolatedAttribute(e,t,i,s,l,c){return mg.setScalar(0),gg.setScalar(0),_g.setScalar(0),mg.fromBufferAttribute(e,t),gg.fromBufferAttribute(e,i),_g.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(mg,l.x),c.addScaledVector(gg,l.y),c.addScaledVector(_g,l.z),c}static isFrontFacing(e,t,i,s){return Qr.subVectors(i,t),ka.subVectors(e,t),Qr.cross(ka).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qr.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),Qr.cross(ka).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Jr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Jr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,l){return Jr.getInterpolation(e,this.a,this.b,this.c,t,i,s,l)}containsPoint(e){return Jr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Jr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,l=this.c;let c,f;Hl.subVectors(s,i),Gl.subVectors(l,i),hg.subVectors(e,i);const h=Hl.dot(hg),d=Gl.dot(hg);if(h<=0&&d<=0)return t.copy(i);dg.subVectors(e,s);const g=Hl.dot(dg),v=Gl.dot(dg);if(g>=0&&v<=g)return t.copy(s);const _=h*v-g*d;if(_<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(i).addScaledVector(Hl,c);pg.subVectors(e,l);const x=Hl.dot(pg),b=Gl.dot(pg);if(b>=0&&x<=b)return t.copy(l);const M=x*d-h*b;if(M<=0&&d>=0&&b<=0)return f=d/(d-b),t.copy(i).addScaledVector(Gl,f);const y=g*b-x*v;if(y<=0&&v-g>=0&&x-b>=0)return CM.subVectors(l,s),f=(v-g)/(v-g+(x-b)),t.copy(s).addScaledVector(CM,f);const S=1/(y+M+_);return c=M*S,f=_*S,t.copy(i).addScaledVector(Hl,c).addScaledVector(Gl,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class bc{constructor(e=new he(1/0,1/0,1/0),t=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($r.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($r.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$r.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const l=i.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,$r):$r.fromBufferAttribute(l,c),$r.applyMatrix4(e.matrixWorld),this.expandByPoint($r);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nh.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nh.copy(i.boundingBox)),Nh.applyMatrix4(e.matrixWorld),this.union(Nh)}const s=e.children;for(let l=0,c=s.length;l<c;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$r),$r.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ec),Oh.subVectors(this.max,Ec),Vl.subVectors(e.a,Ec),kl.subVectors(e.b,Ec),Xl.subVectors(e.c,Ec),Ds.subVectors(kl,Vl),Us.subVectors(Xl,kl),No.subVectors(Vl,Xl);let t=[0,-Ds.z,Ds.y,0,-Us.z,Us.y,0,-No.z,No.y,Ds.z,0,-Ds.x,Us.z,0,-Us.x,No.z,0,-No.x,-Ds.y,Ds.x,0,-Us.y,Us.x,0,-No.y,No.x,0];return!vg(t,Vl,kl,Xl,Oh)||(t=[1,0,0,0,1,0,0,0,1],!vg(t,Vl,kl,Xl,Oh))?!1:(Ph.crossVectors(Ds,Us),t=[Ph.x,Ph.y,Ph.z],vg(t,Vl,kl,Xl,Oh))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$r).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($r).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wa=[new he,new he,new he,new he,new he,new he,new he,new he],$r=new he,Nh=new bc,Vl=new he,kl=new he,Xl=new he,Ds=new he,Us=new he,No=new he,Ec=new he,Oh=new he,Ph=new he,Oo=new he;function vg(a,e,t,i,s){for(let l=0,c=a.length-3;l<=c;l+=3){Oo.fromArray(a,l);const f=s.x*Math.abs(Oo.x)+s.y*Math.abs(Oo.y)+s.z*Math.abs(Oo.z),h=e.dot(Oo),d=t.dot(Oo),g=i.dot(Oo);if(Math.max(-Math.max(h,d,g),Math.min(h,d,g))>f)return!1}return!0}const Kn=new he,Fh=new Mt;let a3=0;class ea extends Uo{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a3++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=uM,this.updateRanges=[],this.gpuType=Zr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Fh.fromBufferAttribute(this,t),Fh.applyMatrix3(e),this.setXY(t,Fh.x,Fh.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix3(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyMatrix4(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.applyNormalMatrix(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kn.fromBufferAttribute(this,t),Kn.transformDirection(e),this.setXYZ(t,Kn.x,Kn.y,Kn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sc(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ji(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sc(t,this.array)),t}setX(e,t){return this.normalized&&(t=ji(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sc(t,this.array)),t}setY(e,t){return this.normalized&&(t=ji(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ji(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sc(t,this.array)),t}setW(e,t){return this.normalized&&(t=ji(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ji(t,this.array),i=ji(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ji(t,this.array),i=ji(i,this.array),s=ji(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,l){return e*=this.itemSize,this.normalized&&(t=ji(t,this.array),i=ji(i,this.array),s=ji(s,this.array),l=ji(l,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==uM&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class wM extends ea{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class DM extends ea{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ta extends ea{constructor(e,t,i){super(new Float32Array(e),t,i)}}const s3=new bc,Tc=new he,xg=new he;class Ih{constructor(e=new he,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s3.setFromPoints(e).getCenter(i);let s=0;for(let l=0,c=e.length;l<c;l++)s=Math.max(s,i.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Tc.subVectors(e,this.center);const t=Tc.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Tc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xg.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Tc.copy(e.center).add(xg)),this.expandByPoint(Tc.copy(e.center).sub(xg))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o3=0;const Fr=new Zn,yg=new Qi,Wl=new he,_r=new bc,Ac=new bc,hi=new he;class na extends Uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o3++}),this.uuid=yc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gw(e)?DM:wM)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new At().getNormalMatrix(e);i.applyNormalMatrix(l),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fr.makeRotationFromQuaternion(e),this.applyMatrix4(Fr),this}rotateX(e){return Fr.makeRotationX(e),this.applyMatrix4(Fr),this}rotateY(e){return Fr.makeRotationY(e),this.applyMatrix4(Fr),this}rotateZ(e){return Fr.makeRotationZ(e),this.applyMatrix4(Fr),this}translate(e,t,i){return Fr.makeTranslation(e,t,i),this.applyMatrix4(Fr),this}scale(e,t,i){return Fr.makeScale(e,t,i),this.applyMatrix4(Fr),this}lookAt(e){return yg.lookAt(e),yg.updateMatrix(),this.applyMatrix4(yg.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wl).negate(),this.translate(Wl.x,Wl.y,Wl.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,l=e.length;s<l;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ta(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const l=t[i];_r.setFromBufferAttribute(l),this.morphTargetsRelative?(hi.addVectors(this.boundingBox.min,_r.min),this.boundingBox.expandByPoint(hi),hi.addVectors(this.boundingBox.max,_r.max),this.boundingBox.expandByPoint(hi)):(this.boundingBox.expandByPoint(_r.min),this.boundingBox.expandByPoint(_r.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ih);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const i=this.boundingSphere.center;if(_r.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Ac.setFromBufferAttribute(f),this.morphTargetsRelative?(hi.addVectors(_r.min,Ac.min),_r.expandByPoint(hi),hi.addVectors(_r.max,Ac.max),_r.expandByPoint(hi)):(_r.expandByPoint(Ac.min),_r.expandByPoint(Ac.max))}_r.getCenter(i);let s=0;for(let l=0,c=e.count;l<c;l++)hi.fromBufferAttribute(e,l),s=Math.max(s,i.distanceToSquared(hi));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let d=0,g=f.count;d<g;d++)hi.fromBufferAttribute(f,d),h&&(Wl.fromBufferAttribute(e,d),hi.add(Wl)),s=Math.max(s,i.distanceToSquared(hi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ea(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<i.count;T++)f[T]=new he,h[T]=new he;const d=new he,g=new he,v=new he,_=new Mt,x=new Mt,b=new Mt,M=new he,y=new he;function S(T,P,I){d.fromBufferAttribute(i,T),g.fromBufferAttribute(i,P),v.fromBufferAttribute(i,I),_.fromBufferAttribute(l,T),x.fromBufferAttribute(l,P),b.fromBufferAttribute(l,I),g.sub(d),v.sub(d),x.sub(_),b.sub(_);const H=1/(x.x*b.y-b.x*x.y);isFinite(H)&&(M.copy(g).multiplyScalar(b.y).addScaledVector(v,-x.y).multiplyScalar(H),y.copy(v).multiplyScalar(x.x).addScaledVector(g,-b.x).multiplyScalar(H),f[T].add(M),f[P].add(M),f[I].add(M),h[T].add(y),h[P].add(y),h[I].add(y))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,P=R.length;T<P;++T){const I=R[T],H=I.start,k=I.count;for(let te=H,J=H+k;te<J;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const w=new he,C=new he,O=new he,L=new he;function U(T){O.fromBufferAttribute(s,T),L.copy(O);const P=f[T];w.copy(P),w.sub(O.multiplyScalar(O.dot(P))).normalize(),C.crossVectors(L,P);const H=C.dot(h[T])<0?-1:1;c.setXYZW(T,w.x,w.y,w.z,H)}for(let T=0,P=R.length;T<P;++T){const I=R[T],H=I.start,k=I.count;for(let te=H,J=H+k;te<J;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ea(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new he,l=new he,c=new he,f=new he,h=new he,d=new he,g=new he,v=new he;if(e)for(let _=0,x=e.count;_<x;_+=3){const b=e.getX(_+0),M=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,b),l.fromBufferAttribute(t,M),c.fromBufferAttribute(t,y),g.subVectors(c,l),v.subVectors(s,l),g.cross(v),f.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),d.fromBufferAttribute(i,y),f.add(g),h.add(g),d.add(g),i.setXYZ(b,f.x,f.y,f.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,x=t.count;_<x;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),c.fromBufferAttribute(t,_+2),g.subVectors(c,l),v.subVectors(s,l),g.cross(v),i.setXYZ(_+0,g.x,g.y,g.z),i.setXYZ(_+1,g.x,g.y,g.z),i.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)hi.fromBufferAttribute(e,t),hi.normalize(),e.setXYZ(t,hi.x,hi.y,hi.z)}toNonIndexed(){function e(f,h){const d=f.array,g=f.itemSize,v=f.normalized,_=new d.constructor(h.length*g);let x=0,b=0;for(let M=0,y=h.length;M<y;M++){f.isInterleavedBufferAttribute?x=h[M]*f.data.stride+f.offset:x=h[M]*g;for(let S=0;S<g;S++)_[b++]=d[x++]}return new ea(_,g,v)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new na,i=this.index.array,s=this.attributes;for(const f in s){const h=s[f],d=e(h,i);t.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const h=[],d=l[f];for(let g=0,v=d.length;g<v;g++){const _=d[g],x=e(_,i);h.push(x)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const d=c[f];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let l=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],g=[];for(let v=0,_=d.length;v<_;v++){const x=d[v];g.push(x.toJSON(e.data))}g.length>0&&(s[h]=g,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const g=s[d];this.setAttribute(d,g.clone(t))}const l=e.morphAttributes;for(const d in l){const g=[],v=l[d];for(let _=0,x=v.length;_<x;_++)g.push(v[_].clone(t));this.morphAttributes[d]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,g=c.length;d<g;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let l3=0;class Rc extends Uo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:l3++}),this.uuid=yc(),this.name="",this.type="Material",this.blending=Dl,this.side=As,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=t0,this.blendDst=n0,this.blendEquation=Ao,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tn(0,0,0),this.blendAlpha=0,this.depthFunc=Ul,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nl,this.stencilZFail=Nl,this.stencilZPass=Nl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dl&&(i.blending=this.blending),this.side!==As&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==t0&&(i.blendSrc=this.blendSrc),this.blendDst!==n0&&(i.blendDst=this.blendDst),this.blendEquation!==Ao&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ul&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lM&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Nl&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Nl&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Nl&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=s(e.textures),c=s(e.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let l=0;l!==s;++l)i[l]=t[l].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qa=new he,Sg=new he,zh=new he,Ls=new he,Mg=new he,Bh=new he,bg=new he;class UM{constructor(e=new he,t=new he(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qa)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qa.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qa.copy(this.origin).addScaledVector(this.direction,t),qa.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Sg.copy(e).add(t).multiplyScalar(.5),zh.copy(t).sub(e).normalize(),Ls.copy(this.origin).sub(Sg);const l=e.distanceTo(t)*.5,c=-this.direction.dot(zh),f=Ls.dot(this.direction),h=-Ls.dot(zh),d=Ls.lengthSq(),g=Math.abs(1-c*c);let v,_,x,b;if(g>0)if(v=c*h-f,_=c*f-h,b=l*g,v>=0)if(_>=-b)if(_<=b){const M=1/g;v*=M,_*=M,x=v*(v+c*_+2*f)+_*(c*v+_+2*h)+d}else _=l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*h)+d;else _=-l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*h)+d;else _<=-b?(v=Math.max(0,-(-c*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d):_<=b?(v=0,_=Math.min(Math.max(-l,-h),l),x=_*(_+2*h)+d):(v=Math.max(0,-(c*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),x=-v*v+_*(_+2*h)+d);else _=c>0?-l:l,v=Math.max(0,-(c*_+f)),x=-v*v+_*(_+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(Sg).addScaledVector(zh,_),x}intersectSphere(e,t){qa.subVectors(e.center,this.origin);const i=qa.dot(this.direction),s=qa.dot(qa)-i*i,l=e.radius*e.radius;if(s>l)return null;const c=Math.sqrt(l-s),f=i-c,h=i+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,l,c,f,h;const d=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),g>=0?(l=(e.min.y-_.y)*g,c=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,c=(e.min.y-_.y)*g),i>c||l>s||((l>i||isNaN(i))&&(i=l),(c<s||isNaN(s))&&(s=c),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),i>h||f>s)||((f>i||i!==i)&&(i=f),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,qa)!==null}intersectTriangle(e,t,i,s,l){Mg.subVectors(t,e),Bh.subVectors(i,e),bg.crossVectors(Mg,Bh);let c=this.direction.dot(bg),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Ls.subVectors(this.origin,e);const h=f*this.direction.dot(Bh.crossVectors(Ls,Bh));if(h<0)return null;const d=f*this.direction.dot(Mg.cross(Ls));if(d<0||h+d>c)return null;const g=-f*Ls.dot(bg);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LM extends Rc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tn(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Lo,this.combine=WS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const NM=new Zn,Po=new UM,Hh=new Ih,OM=new he,Gh=new he,Vh=new he,kh=new he,Eg=new he,Xh=new he,PM=new he,Wh=new he;class Ir extends Qi{constructor(e=new na,t=new LM){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const f=this.morphTargetInfluences;if(l&&f){Xh.set(0,0,0);for(let h=0,d=l.length;h<d;h++){const g=f[h],v=l[h];g!==0&&(Eg.fromBufferAttribute(v,e),c?Xh.addScaledVector(Eg,g):Xh.addScaledVector(Eg.sub(t),g))}t.add(Xh)}return t}raycast(e,t){const i=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hh.copy(i.boundingSphere),Hh.applyMatrix4(l),Po.copy(e.ray).recast(e.near),!(Hh.containsPoint(Po.origin)===!1&&(Po.intersectSphere(Hh,OM)===null||Po.origin.distanceToSquared(OM)>(e.far-e.near)**2))&&(NM.copy(l).invert(),Po.copy(e.ray).applyMatrix4(NM),!(i.boundingBox!==null&&Po.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Po)))}_computeIntersections(e,t,i){let s;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,x=l.drawRange;if(f!==null)if(Array.isArray(c))for(let b=0,M=_.length;b<M;b++){const y=_[b],S=c[y.materialIndex],R=Math.max(y.start,x.start),w=Math.min(f.count,Math.min(y.start+y.count,x.start+x.count));for(let C=R,O=w;C<O;C+=3){const L=f.getX(C),U=f.getX(C+1),T=f.getX(C+2);s=qh(this,S,e,i,d,g,v,L,U,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const b=Math.max(0,x.start),M=Math.min(f.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const R=f.getX(y),w=f.getX(y+1),C=f.getX(y+2);s=qh(this,c,e,i,d,g,v,R,w,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let b=0,M=_.length;b<M;b++){const y=_[b],S=c[y.materialIndex],R=Math.max(y.start,x.start),w=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let C=R,O=w;C<O;C+=3){const L=C,U=C+1,T=C+2;s=qh(this,S,e,i,d,g,v,L,U,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const b=Math.max(0,x.start),M=Math.min(h.count,x.start+x.count);for(let y=b,S=M;y<S;y+=3){const R=y,w=y+1,C=y+2;s=qh(this,c,e,i,d,g,v,R,w,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function u3(a,e,t,i,s,l,c,f){let h;if(e.side===Ki?h=i.intersectTriangle(c,l,s,!0,f):h=i.intersectTriangle(s,l,c,e.side===As,f),h===null)return null;Wh.copy(f),Wh.applyMatrix4(a.matrixWorld);const d=t.ray.origin.distanceTo(Wh);return d<t.near||d>t.far?null:{distance:d,point:Wh.clone(),object:a}}function qh(a,e,t,i,s,l,c,f,h,d){a.getVertexPosition(f,Gh),a.getVertexPosition(h,Vh),a.getVertexPosition(d,kh);const g=u3(a,e,t,i,Gh,Vh,kh,PM);if(g){const v=new he;Jr.getBarycoord(PM,Gh,Vh,kh,v),s&&(g.uv=Jr.getInterpolatedAttribute(s,f,h,d,v,new Mt)),l&&(g.uv1=Jr.getInterpolatedAttribute(l,f,h,d,v,new Mt)),c&&(g.normal=Jr.getInterpolatedAttribute(c,f,h,d,v,new he),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:d,normal:new he,materialIndex:0};Jr.getNormal(Gh,Vh,kh,_.normal),g.face=_,g.barycoord=v}return g}class FM extends zi{constructor(e=null,t=1,i=1,s,l,c,f,h,d=gi,g=gi,v,_){super(null,c,f,h,d,g,s,l,v,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tg=new he,c3=new he,f3=new At;class Fo{constructor(e=new he(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Tg.subVectors(i,t).cross(c3.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Tg),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||f3.getNormalMatrix(e),s=this.coplanarPoint(Tg).applyMatrix4(e),l=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Io=new Ih,h3=new Mt(.5,.5),Yh=new he;class IM{constructor(e=new Fo,t=new Fo,i=new Fo,s=new Fo,l=new Fo,c=new Fo){this.planes=[e,t,i,s,l,c]}set(e,t,i,s,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(i),f[3].copy(s),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xa,i=!1){const s=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],d=l[3],g=l[4],v=l[5],_=l[6],x=l[7],b=l[8],M=l[9],y=l[10],S=l[11],R=l[12],w=l[13],C=l[14],O=l[15];if(s[0].setComponents(d-c,x-g,S-b,O-R).normalize(),s[1].setComponents(d+c,x+g,S+b,O+R).normalize(),s[2].setComponents(d+f,x+v,S+M,O+w).normalize(),s[3].setComponents(d-f,x-v,S-M,O-w).normalize(),i)s[4].setComponents(h,_,y,C).normalize(),s[5].setComponents(d-h,x-_,S-y,O-C).normalize();else if(s[4].setComponents(d-h,x-_,S-y,O-C).normalize(),t===xa)s[5].setComponents(d+h,x+_,S+y,O+C).normalize();else if(t===Rh)s[5].setComponents(h,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Io)}intersectsSprite(e){Io.center.set(0,0,0);const t=h3.distanceTo(e.center);return Io.radius=.7071067811865476+t,Io.applyMatrix4(e.matrixWorld),this.intersectsSphere(Io)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Yh.x=s.normal.x>0?e.max.x:e.min.x,Yh.y=s.normal.y>0?e.max.y:e.min.y,Yh.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yh)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class d3 extends Rc{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tn(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zh=new he,Kh=new he,zM=new Zn,Cc=new UM,jh=new Ih,Ag=new he,BM=new he;class p3 extends Qi{constructor(e=new na,t=new d3){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,l=t.count;s<l;s++)Zh.fromBufferAttribute(t,s-1),Kh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Zh.distanceTo(Kh);e.setAttribute("lineDistance",new ta(i,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,l=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jh.copy(i.boundingSphere),jh.applyMatrix4(s),jh.radius+=l,e.ray.intersectsSphere(jh)===!1)return;zM.copy(s).invert(),Cc.copy(e.ray).applyMatrix4(zM);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,d=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const x=Math.max(0,c.start),b=Math.min(g.count,c.start+c.count);for(let M=x,y=b-1;M<y;M+=d){const S=g.getX(M),R=g.getX(M+1),w=Qh(this,e,Cc,h,S,R,M);w&&t.push(w)}if(this.isLineLoop){const M=g.getX(b-1),y=g.getX(x),S=Qh(this,e,Cc,h,M,y,b-1);S&&t.push(S)}}else{const x=Math.max(0,c.start),b=Math.min(_.count,c.start+c.count);for(let M=x,y=b-1;M<y;M+=d){const S=Qh(this,e,Cc,h,M,M+1,M);S&&t.push(S)}if(this.isLineLoop){const M=Qh(this,e,Cc,h,b-1,x,b-1);M&&t.push(M)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=s.length;l<c;l++){const f=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Qh(a,e,t,i,s,l,c){const f=a.geometry.attributes.position;if(Zh.fromBufferAttribute(f,s),Kh.fromBufferAttribute(f,l),t.distanceSqToSegment(Zh,Kh,Ag,BM)>i)return;Ag.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(Ag);if(!(d<e.near||d>e.far))return{distance:d,point:BM.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const HM=new he,GM=new he;class m3 extends p3{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,l=t.count;s<l;s+=2)HM.fromBufferAttribute(t,s),GM.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+HM.distanceTo(GM);e.setAttribute("lineDistance",new ta(i,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class VM extends zi{constructor(e=[],t=Ro,i,s,l,c,f,h,d,g){super(e,t,i,s,l,c,f,h,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ql extends zi{constructor(e,t,i=_a,s,l,c,f=gi,h=gi,d,g=Ha,v=1){if(g!==Ha&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,s,l,c,f,h,g,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ag(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class g3 extends ql{constructor(e,t=_a,i=Ro,s,l,c=gi,f=gi,h,d=Ha){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,t,i,s,l,c,f,h,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kM extends zi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wc extends na{constructor(e=1,t=1,i=1,s=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:l,depthSegments:c};const f=this;s=Math.floor(s),l=Math.floor(l),c=Math.floor(c);const h=[],d=[],g=[],v=[];let _=0,x=0;b("z","y","x",-1,-1,i,t,e,c,l,0),b("z","y","x",1,-1,i,t,-e,c,l,1),b("x","z","y",1,1,e,i,t,s,c,2),b("x","z","y",1,-1,e,i,-t,s,c,3),b("x","y","z",1,-1,e,t,i,s,l,4),b("x","y","z",-1,-1,e,t,-i,s,l,5),this.setIndex(h),this.setAttribute("position",new ta(d,3)),this.setAttribute("normal",new ta(g,3)),this.setAttribute("uv",new ta(v,2));function b(M,y,S,R,w,C,O,L,U,T,P){const I=C/U,H=O/T,k=C/2,te=O/2,J=L/2,X=U+1,z=T+1;let G=0,ee=0;const ue=new he;for(let V=0;V<z;V++){const B=V*H-te;for(let Z=0;Z<X;Z++){const ve=Z*I-k;ue[M]=ve*R,ue[y]=B*w,ue[S]=J,d.push(ue.x,ue.y,ue.z),ue[M]=0,ue[y]=0,ue[S]=L>0?1:-1,g.push(ue.x,ue.y,ue.z),v.push(Z/U),v.push(1-V/T),G+=1}}for(let V=0;V<T;V++)for(let B=0;B<U;B++){const Z=_+B+X*V,ve=_+B+X*(V+1),ye=_+(B+1)+X*(V+1),Ce=_+(B+1)+X*V;h.push(Z,ve,Ce),h.push(ve,ye,Ce),ee+=6}f.addGroup(x,ee,P),x+=ee,_+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zo extends na{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const l=e/2,c=t/2,f=Math.floor(i),h=Math.floor(s),d=f+1,g=h+1,v=e/f,_=t/h,x=[],b=[],M=[],y=[];for(let S=0;S<g;S++){const R=S*_-c;for(let w=0;w<d;w++){const C=w*v-l;b.push(C,-R,0),M.push(0,0,1),y.push(w/f),y.push(1-S/h)}}for(let S=0;S<h;S++)for(let R=0;R<f;R++){const w=R+d*S,C=R+d*(S+1),O=R+1+d*(S+1),L=R+1+d*S;x.push(w,C,L),x.push(C,O,L)}this.setIndex(x),this.setAttribute("position",new ta(b,3)),this.setAttribute("normal",new ta(M,3)),this.setAttribute("uv",new ta(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}function Yl(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(XM(s))s.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(XM(s[0])){const l=[];for(let c=0,f=s.length;c<f;c++)l[c]=s[c].clone();e[t][i]=l}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Bi(a){const e={};for(let t=0;t<a.length;t++){const i=Yl(a[t]);for(const s in i)e[s]=i[s]}return e}function XM(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function _3(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function WM(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Zt.workingColorSpace}const v3={clone:Yl,merge:Bi};var x3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,y3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ya extends Rc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x3,this.fragmentShader=y3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yl(e.uniforms),this.uniformsGroups=_3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Dc extends ya{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class S3 extends Rc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M3 extends Rc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jh=new he,$h=new Ol,Sa=new he;class ed extends Qi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zn,this.projectionMatrix=new Zn,this.projectionMatrixInverse=new Zn,this.coordinateSystem=xa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jh,$h,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,$h,Sa.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Jh,$h,Sa),Sa.x===1&&Sa.y===1&&Sa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jh,$h,Sa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ns=new he,qM=new Mt,YM=new Mt;class ia extends ed{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=tg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eg*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tg*2*Math.atan(Math.tan(eg*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z),Ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ns.x,Ns.y).multiplyScalar(-e/Ns.z)}getViewSize(e,t){return this.getViewBounds(e,qM,YM),t.subVectors(YM,qM)}setViewOffset(e,t,i,s,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eg*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,l=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;l+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ZM extends ed{constructor(e=-1,t=1,i=1,s=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=i-e,c=i+e,f=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zl=-90,Kl=1;class b3 extends Qi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ia(Zl,Kl,e,t);s.layers=this.layers,this.add(s);const l=new ia(Zl,Kl,e,t);l.layers=this.layers,this.add(l);const c=new ia(Zl,Kl,e,t);c.layers=this.layers,this.add(c);const f=new ia(Zl,Kl,e,t);f.layers=this.layers,this.add(f);const h=new ia(Zl,Kl,e,t);h.layers=this.layers,this.add(h);const d=new ia(Zl,Kl,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,l,c,f,h]=t;for(const d of t)this.remove(d);if(e===xa)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Rh)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,d,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(i,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,g),e.setRenderTarget(v,_,x),e.xr.enabled=b,i.texture.needsPMREMUpdate=!0}}class E3 extends ia{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Bg=class Bg{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const l=this.elements;return l[0]=e,l[2]=t,l[1]=i,l[3]=s,this}};Bg.prototype.isMatrix2=!0;let KM=Bg;function jM(a,e,t,i){const s=T3(i);switch(t){case rM:return a*e;case sM:return a*e/s.components*s.byteLength;case v0:return a*e/s.components*s.byteLength;case Do:return a*e*2/s.components*s.byteLength;case x0:return a*e*2/s.components*s.byteLength;case aM:return a*e*3/s.components*s.byteLength;case Or:return a*e*4/s.components*s.byteLength;case y0:return a*e*4/s.components*s.byteLength;case xh:case yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Sh:case Mh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case M0:case E0:return Math.max(a,16)*Math.max(e,8)/4;case S0:case b0:return Math.max(a,8)*Math.max(e,8)/2;case T0:case A0:case C0:case w0:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case R0:case bh:case D0:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case U0:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case L0:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case N0:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case O0:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case P0:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case F0:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case I0:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case z0:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case B0:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case H0:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case G0:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case V0:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case k0:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case X0:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case W0:case q0:case Y0:return Math.ceil(a/4)*Math.ceil(e/4)*16;case Z0:case K0:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Eh:case j0:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T3(a){switch(a){case Nr:case eM:return{byteLength:1,components:1};case vc:case tM:case va:return{byteLength:2,components:1};case g0:case _0:return{byteLength:2,components:4};case _a:case m0:case Zr:return{byteLength:4,components:1};case nM:case iM:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$m}})),typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$m);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function QM(){let a=null,e=!1,t=null,i=null;function s(l,c){t(l,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){a=l}}}function A3(a){const e=new WeakMap;function t(f,h){const d=f.array,g=f.usage,v=d.byteLength,_=a.createBuffer();a.bindBuffer(h,_),a.bufferData(h,d,g),f.onUploadCallback();let x;if(d instanceof Float32Array)x=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)x=a.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?x=a.HALF_FLOAT:x=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=a.SHORT;else if(d instanceof Uint32Array)x=a.UNSIGNED_INT;else if(d instanceof Int32Array)x=a.INT;else if(d instanceof Int8Array)x=a.BYTE;else if(d instanceof Uint8Array)x=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function i(f,h,d){const g=h.array,v=h.updateRanges;if(a.bindBuffer(d,f),v.length===0)a.bufferSubData(d,0,g);else{v.sort((x,b)=>x.start-b.start);let _=0;for(let x=1;x<v.length;x++){const b=v[_],M=v[x];M.start<=b.start+b.count+1?b.count=Math.max(b.count,M.start+M.count-b.start):(++_,v[_]=M)}v.length=_+1;for(let x=0,b=v.length;x<b;x++){const M=v[x];a.bufferSubData(d,M.start*g.BYTES_PER_ELEMENT,g,M.start,M.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(a.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=e.get(f);if(d===void 0)e.set(f,t(f,h));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,f,h),d.version=f.version}}return{get:s,remove:l,update:c}}var R3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,C3=`#ifdef USE_ALPHAHASH
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
#endif`,w3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N3=`#ifdef USE_AOMAP
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
#endif`,O3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P3=`#ifdef USE_BATCHING
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
#endif`,F3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,H3=`#ifdef USE_IRIDESCENCE
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
#endif`,G3=`#ifdef USE_BUMPMAP
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
#endif`,V3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,k3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,X3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Y3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Z3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,K3=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,j3=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Q3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,J3=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iD="gl_FragColor = linearToOutputTexel( gl_FragColor );",rD=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,aD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,sD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,oD=`#ifdef USE_ENVMAP
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
#endif`,lD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pD=`#ifdef USE_GRADIENTMAP
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
}`,mD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_D=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vD=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#include <lightprobes_pars_fragment>`,xD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,yD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,SD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bD=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ED=`PhysicalMaterial material;
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
#endif`,TD=`uniform sampler2D dfgLUT;
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
}`,AD=`
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
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RD=`#if defined( RE_IndirectDiffuse )
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
#endif`,CD=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wD=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,DD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,UD=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LD=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ND=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OD=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PD=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,FD=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ID=`#if defined( USE_POINTS_UV )
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
#endif`,zD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,GD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kD=`#ifdef USE_MORPHTARGETS
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
#endif`,XD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,YD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jD=`#ifdef USE_NORMALMAP
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
#endif`,QD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,JD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$D=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eU=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tU=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nU=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,iU=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rU=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aU=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sU=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oU=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lU=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cU=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fU=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,hU=`float getShadowMask() {
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
}`,dU=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pU=`#ifdef USE_SKINNING
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
#endif`,mU=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gU=`#ifdef USE_SKINNING
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
#endif`,_U=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vU=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xU=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yU=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,SU=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MU=`#ifdef USE_TRANSMISSION
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
#endif`,bU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TU=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AU=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ot={alphahash_fragment:R3,alphahash_pars_fragment:C3,alphamap_fragment:w3,alphamap_pars_fragment:D3,alphatest_fragment:U3,alphatest_pars_fragment:L3,aomap_fragment:N3,aomap_pars_fragment:O3,batching_pars_vertex:P3,batching_vertex:F3,begin_vertex:I3,beginnormal_vertex:z3,bsdfs:B3,iridescence_fragment:H3,bumpmap_pars_fragment:G3,clipping_planes_fragment:V3,clipping_planes_pars_fragment:k3,clipping_planes_pars_vertex:X3,clipping_planes_vertex:W3,color_fragment:q3,color_pars_fragment:Y3,color_pars_vertex:Z3,color_vertex:K3,common:j3,cube_uv_reflection_fragment:Q3,defaultnormal_vertex:J3,displacementmap_pars_vertex:$3,displacementmap_vertex:eD,emissivemap_fragment:tD,emissivemap_pars_fragment:nD,colorspace_fragment:iD,colorspace_pars_fragment:rD,envmap_fragment:aD,envmap_common_pars_fragment:sD,envmap_pars_fragment:oD,envmap_pars_vertex:lD,envmap_physical_pars_fragment:xD,envmap_vertex:uD,fog_vertex:cD,fog_pars_vertex:fD,fog_fragment:hD,fog_pars_fragment:dD,gradientmap_pars_fragment:pD,lightmap_pars_fragment:mD,lights_lambert_fragment:gD,lights_lambert_pars_fragment:_D,lights_pars_begin:vD,lights_toon_fragment:yD,lights_toon_pars_fragment:SD,lights_phong_fragment:MD,lights_phong_pars_fragment:bD,lights_physical_fragment:ED,lights_physical_pars_fragment:TD,lights_fragment_begin:AD,lights_fragment_maps:RD,lights_fragment_end:CD,lightprobes_pars_fragment:wD,logdepthbuf_fragment:DD,logdepthbuf_pars_fragment:UD,logdepthbuf_pars_vertex:LD,logdepthbuf_vertex:ND,map_fragment:OD,map_pars_fragment:PD,map_particle_fragment:FD,map_particle_pars_fragment:ID,metalnessmap_fragment:zD,metalnessmap_pars_fragment:BD,morphinstance_vertex:HD,morphcolor_vertex:GD,morphnormal_vertex:VD,morphtarget_pars_vertex:kD,morphtarget_vertex:XD,normal_fragment_begin:WD,normal_fragment_maps:qD,normal_pars_fragment:YD,normal_pars_vertex:ZD,normal_vertex:KD,normalmap_pars_fragment:jD,clearcoat_normal_fragment_begin:QD,clearcoat_normal_fragment_maps:JD,clearcoat_pars_fragment:$D,iridescence_pars_fragment:eU,opaque_fragment:tU,packing:nU,premultiplied_alpha_fragment:iU,project_vertex:rU,dithering_fragment:aU,dithering_pars_fragment:sU,roughnessmap_fragment:oU,roughnessmap_pars_fragment:lU,shadowmap_pars_fragment:uU,shadowmap_pars_vertex:cU,shadowmap_vertex:fU,shadowmask_pars_fragment:hU,skinbase_vertex:dU,skinning_pars_vertex:pU,skinning_vertex:mU,skinnormal_vertex:gU,specularmap_fragment:_U,specularmap_pars_fragment:vU,tonemapping_fragment:xU,tonemapping_pars_fragment:yU,transmission_fragment:SU,transmission_pars_fragment:MU,uv_pars_fragment:bU,uv_pars_vertex:EU,uv_vertex:TU,worldpos_vertex:AU,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
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
void main () {
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},je={common:{diffuse:{value:new tn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},envMapRotation:{value:new At},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new he},probesMax:{value:new he},probesResolution:{value:new he}},points:{diffuse:{value:new tn(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new tn(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Ma={basic:{uniforms:Bi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Bi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new tn(0)},envMapIntensity:{value:1}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Bi([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new tn(0)},specular:{value:new tn(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Bi([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new tn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Bi([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new tn(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Bi([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Bi([je.points,je.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Bi([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Bi([je.common,je.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Bi([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Bi([je.sprite,je.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new At}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distance:{uniforms:Bi([je.common,je.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distance_vert,fragmentShader:Ot.distance_frag},shadow:{uniforms:Bi([je.lights,je.fog,{color:{value:new tn(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};Ma.physical={uniforms:Bi([Ma.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new tn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new tn(0)},specularColor:{value:new tn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const td={r:0,b:0,g:0},RU=new Zn,JM=new At;JM.set(-1,0,0,0,1,0,0,0,1);function CU(a,e,t,i,s,l){const c=new tn(0);let f=s===!0?0:1,h,d,g=null,v=0,_=null;function x(R){let w=R.isScene===!0?R.background:null;if(w&&w.isTexture){const C=R.backgroundBlurriness>0;w=e.get(w,C)}return w}function b(R){let w=!1;const C=x(R);C===null?y(c,f):C&&C.isColor&&(y(C,1),w=!0);const O=a.xr.getEnvironmentBlendMode();O==="additive"?t.buffers.color.setClear(0,0,0,1,l):O==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(a.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(R,w){const C=x(w);C&&(C.isCubeTexture||C.mapping===_h)?(d===void 0&&(d=new Ir(new wc(1,1,1),new ya({name:"BackgroundCubeMaterial",uniforms:Yl(Ma.backgroundCube.uniforms),vertexShader:Ma.backgroundCube.vertexShader,fragmentShader:Ma.backgroundCube.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=C,d.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(RU.makeRotationFromEuler(w.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(JM),d.material.toneMapped=Zt.getTransfer(C.colorSpace)!==on,(g!==C||v!==C.version||_!==a.toneMapping)&&(d.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new Ir(new zo(2,2),new ya({name:"BackgroundMaterial",uniforms:Yl(Ma.background.uniforms),vertexShader:Ma.background.vertexShader,fragmentShader:Ma.background.fragmentShader,side:As,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(C.colorSpace)!==on,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(g!==C||v!==C.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,g=C,v=C.version,_=a.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function y(R,w){R.getRGB(td,WM(a)),t.buffers.color.setClear(td.r,td.g,td.b,w,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,w=1){c.set(R),f=w,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,y(c,f)},render:b,addToRenderList:M,dispose:S}}function wU(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=_(null);let l=s,c=!1;function f(H,k,te,J,X){let z=!1;const G=v(H,J,te,k);l!==G&&(l=G,d(l.object)),z=x(H,J,te,X),z&&b(H,J,te,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(z||c)&&(c=!1,C(H,k,te,J),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return a.createVertexArray()}function d(H){return a.bindVertexArray(H)}function g(H){return a.deleteVertexArray(H)}function v(H,k,te,J){const X=J.wireframe===!0;let z=i[k.id];z===void 0&&(z={},i[k.id]=z);const G=H.isInstancedMesh===!0?H.id:0;let ee=z[G];ee===void 0&&(ee={},z[G]=ee);let ue=ee[te.id];ue===void 0&&(ue={},ee[te.id]=ue);let V=ue[X];return V===void 0&&(V=_(h()),ue[X]=V),V}function _(H){const k=[],te=[],J=[];for(let X=0;X<t;X++)k[X]=0,te[X]=0,J[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:J,object:H,attributes:{},index:null}}function x(H,k,te,J){const X=l.attributes,z=k.attributes;let G=0;const ee=te.getAttributes();for(const ue in ee)if(ee[ue].location>=0){const B=X[ue];let Z=z[ue];if(Z===void 0&&(ue==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),ue==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),B===void 0||B.attribute!==Z||Z&&B.data!==Z.data)return!0;G++}return l.attributesNum!==G||l.index!==J}function b(H,k,te,J){const X={},z=k.attributes;let G=0;const ee=te.getAttributes();for(const ue in ee)if(ee[ue].location>=0){let B=z[ue];B===void 0&&(ue==="instanceMatrix"&&H.instanceMatrix&&(B=H.instanceMatrix),ue==="instanceColor"&&H.instanceColor&&(B=H.instanceColor));const Z={};Z.attribute=B,B&&B.data&&(Z.data=B.data),X[ue]=Z,G++}l.attributes=X,l.attributesNum=G,l.index=J}function M(){const H=l.newAttributes;for(let k=0,te=H.length;k<te;k++)H[k]=0}function y(H){S(H,0)}function S(H,k){const te=l.newAttributes,J=l.enabledAttributes,X=l.attributeDivisors;te[H]=1,J[H]===0&&(a.enableVertexAttribArray(H),J[H]=1),X[H]!==k&&(a.vertexAttribDivisor(H,k),X[H]=k)}function R(){const H=l.newAttributes,k=l.enabledAttributes;for(let te=0,J=k.length;te<J;te++)k[te]!==H[te]&&(a.disableVertexAttribArray(te),k[te]=0)}function w(H,k,te,J,X,z,G){G===!0?a.vertexAttribIPointer(H,k,te,X,z):a.vertexAttribPointer(H,k,te,J,X,z)}function C(H,k,te,J){M();const X=J.attributes,z=te.getAttributes(),G=k.defaultAttributeValues;for(const ee in z){const ue=z[ee];if(ue.location>=0){let V=X[ee];if(V===void 0&&(ee==="instanceMatrix"&&H.instanceMatrix&&(V=H.instanceMatrix),ee==="instanceColor"&&H.instanceColor&&(V=H.instanceColor)),V!==void 0){const B=V.normalized,Z=V.itemSize,ve=e.get(V);if(ve===void 0)continue;const ye=ve.buffer,Ce=ve.type,ne=ve.bytesPerElement,Se=Ce===a.INT||Ce===a.UNSIGNED_INT||V.gpuType===m0;if(V.isInterleavedBufferAttribute){const re=V.data,Me=re.stride,Xe=V.offset;if(re.isInstancedInterleavedBuffer){for(let ze=0;ze<ue.locationSize;ze++)S(ue.location+ze,re.meshPerAttribute);H.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ze=0;ze<ue.locationSize;ze++)y(ue.location+ze);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let ze=0;ze<ue.locationSize;ze++)w(ue.location+ze,Z/ue.locationSize,Ce,B,Me*ne,(Xe+Z/ue.locationSize*ze)*ne,Se)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<ue.locationSize;re++)S(ue.location+re,V.meshPerAttribute);H.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<ue.locationSize;re++)y(ue.location+re);a.bindBuffer(a.ARRAY_BUFFER,ye);for(let re=0;re<ue.locationSize;re++)w(ue.location+re,Z/ue.locationSize,Ce,B,Z*ne,Z/ue.locationSize*re*ne,Se)}}else if(G!==void 0){const B=G[ee];if(B!==void 0)switch(B.length){case 2:a.vertexAttrib2fv(ue.location,B);break;case 3:a.vertexAttrib3fv(ue.location,B);break;case 4:a.vertexAttrib4fv(ue.location,B);break;default:a.vertexAttrib1fv(ue.location,B)}}}}R()}function O(){P();for(const H in i){const k=i[H];for(const te in k){const J=k[te];for(const X in J){const z=J[X];for(const G in z)g(z[G].object),delete z[G];delete J[X]}}delete i[H]}}function L(H){if(i[H.id]===void 0)return;const k=i[H.id];for(const te in k){const J=k[te];for(const X in J){const z=J[X];for(const G in z)g(z[G].object),delete z[G];delete J[X]}}delete i[H.id]}function U(H){for(const k in i){const te=i[k];for(const J in te){const X=te[J];if(X[H.id]===void 0)continue;const z=X[H.id];for(const G in z)g(z[G].object),delete z[G];delete X[H.id]}}}function T(H){for(const k in i){const te=i[k],J=H.isInstancedMesh===!0?H.id:0,X=te[J];if(X!==void 0){for(const z in X){const G=X[z];for(const ee in G)g(G[ee].object),delete G[ee];delete X[z]}delete te[J],Object.keys(te).length===0&&delete i[k]}}}function P(){I(),c=!0,l!==s&&(l=s,d(l.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:P,resetDefaultState:I,dispose:O,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:y,disableUnusedAttributes:R}}function DU(a,e,t){let i;function s(h){i=h}function l(h,d){a.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,g){g!==0&&(a.drawArraysInstanced(i,h,d,g),t.update(d,i,g))}function f(h,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,g);let _=0;for(let x=0;x<g;x++)_+=d[x];t.update(_,i,1)}this.setMode=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function UU(a,e,t,i){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==Or&&i.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const T=U===va&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Nr&&i.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Zr&&!T)}function h(U){if(U==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const g=h(d);g!==d&&(xt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const v=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),y=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),R=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),w=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),O=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:_,maxTextures:x,maxVertexTextures:b,maxTextureSize:M,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:C,maxSamples:O,samples:L}}function LU(a){const e=this;let t=null,i=0,s=!1,l=!1;const c=new Fo,f=new At,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const x=v.length!==0||_||i!==0||s;return s=_,i=v.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,x){const b=v.clippingPlanes,M=v.clipIntersection,y=v.clipShadows,S=a.get(v);if(!s||b===null||b.length===0||l&&!y)l?g(null):d();else{const R=l?0:i,w=R*4;let C=S.clippingState||null;h.value=C,C=g(b,_,w,x);for(let O=0;O!==w;++O)C[O]=t[O];S.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=R}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function g(v,_,x,b){const M=v!==null?v.length:0;let y=null;if(M!==0){if(y=h.value,b!==!0||y===null){const S=x+M*4,R=_.matrixWorldInverse;f.getNormalMatrix(R),(y===null||y.length<S)&&(y=new Float32Array(S));for(let w=0,C=x;w!==M;++w,C+=4)c.copy(v[w]).applyMatrix4(R,f),c.normal.toArray(y,C),y[C+3]=c.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}const Os=4,$M=[.125,.215,.35,.446,.526,.582],Bo=20,NU=256,Uc=new ZM,e1=new tn;let Rg=null,Cg=0,wg=0,Dg=!1;const OU=new he;class t1{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,l={}){const{size:c=256,position:f=OU}=l;Rg=this._renderer.getRenderTarget(),Cg=this._renderer.getActiveCubeFace(),wg=this._renderer.getActiveMipmapLevel(),Dg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rg,Cg,wg),this._renderer.xr.enabled=Dg,e.scissorTest=!1,jl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Ll?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rg=this._renderer.getRenderTarget(),Cg=this._renderer.getActiveCubeFace(),wg=this._renderer.getActiveMipmapLevel(),Dg=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:va,format:Or,colorSpace:Th,depthBuffer:!1},s=n1(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n1(e,t,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=PU(l)),this._blurMaterial=IU(l,e,t),this._ggxMaterial=FU(l,e,t)}return s}_compileMaterial(e){const t=new Ir(new na,e);this._renderer.compile(t,Uc)}_sceneToCubeUV(e,t,i,s,l){const h=new ia(90,1,t,i),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,x=v.toneMapping;v.getClearColor(e1),v.toneMapping=ga,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ir(new wc,new LM({name:"PMREM.Background",side:Ki,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let S=!1;const R=e.background;R?R.isColor&&(y.color.copy(R),e.background=null,S=!0):(y.color.copy(e1),S=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(h.up.set(0,d[w],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[w],l.y,l.z)):C===1?(h.up.set(0,0,d[w]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[w],l.z)):(h.up.set(0,d[w],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[w]));const O=this._cubeSize;jl(s,C*O,w>2?O:0,O,O),v.setRenderTarget(s),S&&v.render(M,h),v.render(e,h)}v.toneMapping=x,v.autoClear=_,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ro||e.mapping===Ll;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=r1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i1());const l=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;jl(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Uc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),g=t/(this._lodMeshes.length-1),v=Math.sqrt(d*d-g*g),_=0+d*1.25,x=v*_,{_lodMax:b}=this,M=this._sizeLods[i],y=3*M*(i>b-Os?i-b+Os:0),S=4*(this._cubeSize-M);h.envMap.value=e.texture,h.roughness.value=x,h.mipInt.value=b-t,jl(l,y,S,3*M,2*M),s.setRenderTarget(l),s.render(f,Uc),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=b-i,jl(e,y,S,3*M,2*M),s.setRenderTarget(e),s.render(f,Uc)}_blur(e,t,i,s,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",l),this._halfBlur(c,e,i,i,s,"longitudinal",l)}_halfBlur(e,t,i,s,l,c,f){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&jt("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[s];v.material=d;const _=d.uniforms,x=this._sizeLods[i]-1,b=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Bo-1),M=l/b,y=isFinite(l)?1+Math.floor(g*M):Bo;y>Bo&&xt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Bo}`);const S=[];let R=0;for(let U=0;U<Bo;++U){const T=U/M,P=Math.exp(-T*T/2);S.push(P),U===0?R+=P:U<y&&(R+=2*P)}for(let U=0;U<S.length;U++)S[U]=S[U]/R;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=S,_.latitudinal.value=c==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:w}=this;_.dTheta.value=b,_.mipInt.value=w-i;const C=this._sizeLods[s],O=3*C*(s>w-Os?s-w+Os:0),L=4*(this._cubeSize-C);jl(t,O,L,3*C,2*C),h.setRenderTarget(t),h.render(v,Uc)}}function PU(a){const e=[],t=[],i=[];let s=a;const l=a-Os+1+$M.length;for(let c=0;c<l;c++){const f=Math.pow(2,s);e.push(f);let h=1/f;c>a-Os?h=$M[c-a+Os-1]:c===0&&(h=0),t.push(h);const d=1/(f-2),g=-d,v=1+d,_=[g,g,v,g,v,v,g,g,v,v,g,v],x=6,b=6,M=3,y=2,S=1,R=new Float32Array(M*b*x),w=new Float32Array(y*b*x),C=new Float32Array(S*b*x);for(let L=0;L<x;L++){const U=L%3*2/3-1,T=L>2?0:-1,P=[U,T,0,U+2/3,T,0,U+2/3,T+1,0,U,T,0,U+2/3,T+1,0,U,T+1,0];R.set(P,M*b*L),w.set(_,y*b*L);const I=[L,L,L,L,L,L];C.set(I,S*b*L)}const O=new na;O.setAttribute("position",new ea(R,M)),O.setAttribute("uv",new ea(w,y)),O.setAttribute("faceIndex",new ea(C,S)),i.push(new Ir(O,null)),s>Os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function n1(a,e,t){const i=new Kr(a,e,t);return i.texture.mapping=_h,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function jl(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function FU(a,e,t){return new ya({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:NU,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function IU(a,e,t){const i=new Float32Array(Bo),s=new he(0,1,0);return new ya({name:"SphericalGaussianBlur",defines:{n:Bo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function i1(){return new ya({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nd(),fragmentShader:`

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
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function r1(){return new ya({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ba,depthTest:!1,depthWrite:!1})}function nd(){return`

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
	`}class a1 extends Kr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new VM(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new wc(5,5,5),l=new ya({name:"CubemapFromEquirect",uniforms:Yl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ki,blending:Ba});l.uniforms.tEquirect.value=t;const c=new Ir(s,l),f=t.minFilter;return t.minFilter===Co&&(t.minFilter=Yn),new b3(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(l)}}function zU(a){let e=new WeakMap,t=new WeakMap,i=null;function s(_,x=!1){return _==null?null:x?c(_):l(_)}function l(_){if(_&&_.isTexture){const x=_.mapping;if(x===c0||x===f0)if(e.has(_)){const b=e.get(_).texture;return f(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const M=new a1(b.height);return M.fromEquirectangularTexture(a,_),e.set(_,M),_.addEventListener("dispose",d),f(M.texture,_.mapping)}else return null}}return _}function c(_){if(_&&_.isTexture){const x=_.mapping,b=x===c0||x===f0,M=x===Ro||x===Ll;if(b||M){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return i===null&&(i=new t1(a)),y=b?i.fromEquirectangular(_,y):i.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const R=_.image;return b&&R&&R.height>0||M&&R&&h(R)?(i===null&&(i=new t1(a)),y=b?i.fromEquirectangular(_):i.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",g),y.texture):null}}}return _}function f(_,x){return x===c0?_.mapping=Ro:x===f0&&(_.mapping=Ll),_}function h(_){let x=0;const b=6;for(let M=0;M<b;M++)_[M]!==void 0&&x++;return x===b}function d(_){const x=_.target;x.removeEventListener("dispose",d);const b=e.get(x);b!==void 0&&(e.delete(x),b.dispose())}function g(_){const x=_.target;x.removeEventListener("dispose",g);const b=t.get(x);b!==void 0&&(t.delete(x),b.dispose())}function v(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:v}}function BU(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&$0("WebGLRenderer: "+i+" extension not supported."),s}}}function HU(a,e,t,i){const s={},l=new WeakMap;function c(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const b in _.attributes)e.remove(_.attributes[b]);_.removeEventListener("dispose",c),delete s[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return s[_.id]===!0||(_.addEventListener("dispose",c),s[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const x in _)e.update(_[x],a.ARRAY_BUFFER)}function d(v){const _=[],x=v.index,b=v.attributes.position;let M=0;if(b===void 0)return;if(x!==null){const R=x.array;M=x.version;for(let w=0,C=R.length;w<C;w+=3){const O=R[w+0],L=R[w+1],U=R[w+2];_.push(O,L,L,U,U,O)}}else{const R=b.array;M=b.version;for(let w=0,C=R.length/3-1;w<C;w+=3){const O=w+0,L=w+1,U=w+2;_.push(O,L,L,U,U,O)}}const y=new(b.count>=65535?DM:wM)(_,1);y.version=M;const S=l.get(v);S&&e.remove(S),l.set(v,y)}function g(v){const _=l.get(v);if(_){const x=v.index;x!==null&&_.version<x.version&&d(v)}else d(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function GU(a,e,t){let i;function s(v){i=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function h(v,_){a.drawElements(i,_,l,v*c),t.update(_,i,1)}function d(v,_,x){x!==0&&(a.drawElementsInstanced(i,_,l,v*c,x),t.update(_,i,x))}function g(v,_,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,l,v,0,x);let M=0;for(let y=0;y<x;y++)M+=_[y];t.update(M,i,1)}this.setMode=s,this.setIndex=f,this.render=h,this.renderInstances=d,this.renderMultiDraw=g}function VU(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,f){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=f*(l/3);break;case a.LINES:t.lines+=f*(l/2);break;case a.LINE_STRIP:t.lines+=f*(l-1);break;case a.LINE_LOOP:t.lines+=f*l;break;case a.POINTS:t.points+=f*l;break;default:jt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function kU(a,e,t){const i=new WeakMap,s=new zn;function l(c,f,h){const d=c.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=i.get(f);if(_===void 0||_.count!==v){let P=function(){U.dispose(),i.delete(f),f.removeEventListener("dispose",P)};_!==void 0&&_.texture.dispose();const x=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,M=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],R=f.morphAttributes.color||[];let w=0;x===!0&&(w=1),b===!0&&(w=2),M===!0&&(w=3);let C=f.attributes.position.count*w,O=1;C>e.maxTextureSize&&(O=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const L=new Float32Array(C*O*4*v),U=new _M(L,C,O,v);U.type=Zr,U.needsUpdate=!0;const T=w*4;for(let I=0;I<v;I++){const H=y[I],k=S[I],te=R[I],J=C*O*4*I;for(let X=0;X<H.count;X++){const z=X*T;x===!0&&(s.fromBufferAttribute(H,X),L[J+z+0]=s.x,L[J+z+1]=s.y,L[J+z+2]=s.z,L[J+z+3]=0),b===!0&&(s.fromBufferAttribute(k,X),L[J+z+4]=s.x,L[J+z+5]=s.y,L[J+z+6]=s.z,L[J+z+7]=0),M===!0&&(s.fromBufferAttribute(te,X),L[J+z+8]=s.x,L[J+z+9]=s.y,L[J+z+10]=s.z,L[J+z+11]=te.itemSize===4?s.w:1)}}_={count:v,texture:U,size:new Mt(C,O)},i.set(f,_),f.addEventListener("dispose",P)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let x=0;for(let M=0;M<d.length;M++)x+=d[M];const b=f.morphTargetsRelative?1:1-x;h.getUniforms().setValue(a,"morphTargetBaseInfluence",b),h.getUniforms().setValue(a,"morphTargetInfluences",d)}h.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:l}}function XU(a,e,t,i,s){let l=new WeakMap;function c(d){const g=s.render.frame,v=d.geometry,_=e.get(d,v);if(l.get(_)!==g&&(e.update(_),l.set(_,g)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),l.get(d)!==g&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),l.set(d,g))),d.isSkinnedMesh){const x=d.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return _}function f(){l=new WeakMap}function h(d){const g=d.target;g.removeEventListener("dispose",h),i.releaseStatesOfObject(g),t.remove(g.instanceMatrix),g.instanceColor!==null&&t.remove(g.instanceColor)}return{update:c,dispose:f}}const WU={[qS]:"LINEAR_TONE_MAPPING",[YS]:"REINHARD_TONE_MAPPING",[ZS]:"CINEON_TONE_MAPPING",[KS]:"ACES_FILMIC_TONE_MAPPING",[QS]:"AGX_TONE_MAPPING",[JS]:"NEUTRAL_TONE_MAPPING",[jS]:"CUSTOM_TONE_MAPPING"};function qU(a,e,t,i,s){const l=new Kr(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new ql(e,t):void 0}),c=new Kr(e,t,{type:va,depthBuffer:!1,stencilBuffer:!1}),f=new na;f.setAttribute("position",new ta([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ta([0,2,0,0,2,0],2));const h=new Dc({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ir(f,h),g=new ZM(-1,1,1,-1,0,1);let v=null,_=null,x=!1,b,M=null,y=[],S=!1;this.setSize=function(R,w){l.setSize(R,w),c.setSize(R,w);for(let C=0;C<y.length;C++){const O=y[C];O.setSize&&O.setSize(R,w)}},this.setEffects=function(R){y=R,S=y.length>0&&y[0].isRenderPass===!0;const w=l.width,C=l.height;for(let O=0;O<y.length;O++){const L=y[O];L.setSize&&L.setSize(w,C)}},this.begin=function(R,w){if(x||R.toneMapping===ga&&y.length===0)return!1;if(M=w,w!==null){const C=w.width,O=w.height;(l.width!==C||l.height!==O)&&this.setSize(C,O)}return S===!1&&R.setRenderTarget(l),b=R.toneMapping,R.toneMapping=ga,!0},this.hasRenderPass=function(){return S},this.end=function(R,w){R.toneMapping=b,x=!0;let C=l,O=c;for(let L=0;L<y.length;L++){const U=y[L];if(U.enabled!==!1&&(U.render(R,O,C,w),U.needsSwap!==!1)){const T=C;C=O,O=T}}if(v!==R.outputColorSpace||_!==R.toneMapping){v=R.outputColorSpace,_=R.toneMapping,h.defines={},Zt.getTransfer(v)===on&&(h.defines.SRGB_TRANSFER="");const L=WU[_];L&&(h.defines[L]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,R.setRenderTarget(M),R.render(d,g),M=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const s1=new zi,Ug=new ql(1,1),o1=new _M,l1=new Qw,u1=new VM,c1=[],f1=[],h1=new Float32Array(16),d1=new Float32Array(9),p1=new Float32Array(4);function Ql(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let l=c1[s];if(l===void 0&&(l=new Float32Array(s),c1[s]=l),e!==0){i.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,a[c].toArray(l,f)}return l}function ai(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function si(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function id(a,e){let t=f1[e];t===void 0&&(t=new Int32Array(e),f1[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function YU(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function ZU(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;a.uniform2fv(this.addr,e),si(t,e)}}function KU(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ai(t,e))return;a.uniform3fv(this.addr,e),si(t,e)}}function jU(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;a.uniform4fv(this.addr,e),si(t,e)}}function QU(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),si(t,e)}else{if(ai(t,i))return;p1.set(i),a.uniformMatrix2fv(this.addr,!1,p1),si(t,i)}}function JU(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),si(t,e)}else{if(ai(t,i))return;d1.set(i),a.uniformMatrix3fv(this.addr,!1,d1),si(t,i)}}function $U(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(ai(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),si(t,e)}else{if(ai(t,i))return;h1.set(i),a.uniformMatrix4fv(this.addr,!1,h1),si(t,i)}}function eL(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function tL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;a.uniform2iv(this.addr,e),si(t,e)}}function nL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ai(t,e))return;a.uniform3iv(this.addr,e),si(t,e)}}function iL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;a.uniform4iv(this.addr,e),si(t,e)}}function rL(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function aL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ai(t,e))return;a.uniform2uiv(this.addr,e),si(t,e)}}function sL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ai(t,e))return;a.uniform3uiv(this.addr,e),si(t,e)}}function oL(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ai(t,e))return;a.uniform4uiv(this.addr,e),si(t,e)}}function lL(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let l;this.type===a.SAMPLER_2D_SHADOW?(Ug.compareFunction=t.isReversedDepthBuffer()?J0:Q0,l=Ug):l=s1,t.setTexture2D(e||l,s)}function uL(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||l1,s)}function cL(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||u1,s)}function fL(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||o1,s)}function hL(a){switch(a){case 5126:return YU;case 35664:return ZU;case 35665:return KU;case 35666:return jU;case 35674:return QU;case 35675:return JU;case 35676:return $U;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return aL;case 36295:return sL;case 36296:return oL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return fL}}function dL(a,e){a.uniform1fv(this.addr,e)}function pL(a,e){const t=Ql(e,this.size,2);a.uniform2fv(this.addr,t)}function mL(a,e){const t=Ql(e,this.size,3);a.uniform3fv(this.addr,t)}function gL(a,e){const t=Ql(e,this.size,4);a.uniform4fv(this.addr,t)}function _L(a,e){const t=Ql(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function vL(a,e){const t=Ql(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function xL(a,e){const t=Ql(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function yL(a,e){a.uniform1iv(this.addr,e)}function SL(a,e){a.uniform2iv(this.addr,e)}function ML(a,e){a.uniform3iv(this.addr,e)}function bL(a,e){a.uniform4iv(this.addr,e)}function EL(a,e){a.uniform1uiv(this.addr,e)}function TL(a,e){a.uniform2uiv(this.addr,e)}function AL(a,e){a.uniform3uiv(this.addr,e)}function RL(a,e){a.uniform4uiv(this.addr,e)}function CL(a,e,t){const i=this.cache,s=e.length,l=id(t,s);ai(i,l)||(a.uniform1iv(this.addr,l),si(i,l));let c;this.type===a.SAMPLER_2D_SHADOW?c=Ug:c=s1;for(let f=0;f!==s;++f)t.setTexture2D(e[f]||c,l[f])}function wL(a,e,t){const i=this.cache,s=e.length,l=id(t,s);ai(i,l)||(a.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||l1,l[c])}function DL(a,e,t){const i=this.cache,s=e.length,l=id(t,s);ai(i,l)||(a.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||u1,l[c])}function UL(a,e,t){const i=this.cache,s=e.length,l=id(t,s);ai(i,l)||(a.uniform1iv(this.addr,l),si(i,l));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||o1,l[c])}function LL(a){switch(a){case 5126:return dL;case 35664:return pL;case 35665:return mL;case 35666:return gL;case 35674:return _L;case 35675:return vL;case 35676:return xL;case 5124:case 35670:return yL;case 35667:case 35671:return SL;case 35668:case 35672:return ML;case 35669:case 35673:return bL;case 5125:return EL;case 36294:return TL;case 36295:return AL;case 36296:return RL;case 35678:case 36198:case 36298:case 36306:case 35682:return CL;case 35679:case 36299:case 36307:return wL;case 35680:case 36300:case 36308:case 36293:return DL;case 36289:case 36303:case 36311:case 36292:return UL}}class NL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hL(t.type)}}class OL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LL(t.type)}}class PL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let l=0,c=s.length;l!==c;++l){const f=s[l];f.setValue(e,t[f.id],i)}}}const Lg=/(\w+)(\])?(\[|\.)?/g;function m1(a,e){a.seq.push(e),a.map[e.id]=e}function FL(a,e,t){const i=a.name,s=i.length;for(Lg.lastIndex=0;;){const l=Lg.exec(i),c=Lg.lastIndex;let f=l[1];const h=l[2]==="]",d=l[3];if(h&&(f=f|0),d===void 0||d==="["&&c+2===s){m1(t,d===void 0?new NL(f,a,e):new OL(f,a,e));break}else{let v=t.map[f];v===void 0&&(v=new PL(f),m1(t,v)),t=v}}}class rd{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);FL(f,h,this)}const s=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):l.push(c);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,i,s){const l=this.map[t];l!==void 0&&l.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=i[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,l=e.length;s!==l;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function g1(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const IL=37297;let zL=0;function BL(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=s;c<l;c++){const f=c+1;i.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return i.join(`
`)}const _1=new At;function HL(a){Zt._getMatrix(_1,Zt.workingColorSpace,a);const e=`mat3( ${_1.elements.map(t=>t.toFixed(4))} )`;switch(Zt.getTransfer(a)){case Ah:return[e,"LinearTransferOETF"];case on:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function v1(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),l=(a.getShaderInfoLog(e)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+BL(a.getShaderSource(e),f)}else return l}function GL(a,e){const t=HL(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const VL={[qS]:"Linear",[YS]:"Reinhard",[ZS]:"Cineon",[KS]:"ACESFilmic",[QS]:"AgX",[JS]:"Neutral",[jS]:"Custom"};function kL(a,e){const t=VL[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ad=new he;function XL(){Zt.getLuminanceCoefficients(ad);const a=ad.x.toFixed(4),e=ad.y.toFixed(4),t=ad.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function WL(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lc).join(`
`)}function qL(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function YL(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const l=a.getActiveAttrib(e,s),c=l.name;let f=1;l.type===a.FLOAT_MAT2&&(f=2),l.type===a.FLOAT_MAT3&&(f=3),l.type===a.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:a.getAttribLocation(e,c),locationSize:f}}return t}function Lc(a){return a!==""}function x1(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y1(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ZL=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ng(a){return a.replace(ZL,jL)}const KL=new Map;function jL(a,e){let t=Ot[e];if(t===void 0){const i=KL.get(e);if(i!==void 0)t=Ot[i],xt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ng(t)}const QL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S1(a){return a.replace(QL,JL)}function JL(a,e,t,i){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function M1(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $L={[gh]:"SHADOWMAP_TYPE_PCF",[_c]:"SHADOWMAP_TYPE_VSM"};function eN(a){return $L[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tN={[Ro]:"ENVMAP_TYPE_CUBE",[Ll]:"ENVMAP_TYPE_CUBE",[_h]:"ENVMAP_TYPE_CUBE_UV"};function nN(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":tN[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const iN={[Ll]:"ENVMAP_MODE_REFRACTION"};function rN(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":iN[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aN={[WS]:"ENVMAP_BLENDING_MULTIPLY",[Dw]:"ENVMAP_BLENDING_MIX",[Uw]:"ENVMAP_BLENDING_ADD"};function sN(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":aN[a.combine]||"ENVMAP_BLENDING_NONE"}function oN(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function lN(a,e,t,i){const s=a.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=eN(t),d=nN(t),g=rN(t),v=sN(t),_=oN(t),x=WL(t),b=qL(l),M=s.createProgram();let y,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Lc).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b].filter(Lc).join(`
`),S.length>0&&(S+=`
`)):(y=[M1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lc).join(`
`),S=[M1(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,b,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ga?"#define TONE_MAPPING":"",t.toneMapping!==ga?Ot.tonemapping_pars_fragment:"",t.toneMapping!==ga?kL("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,GL("linearToOutputTexel",t.outputColorSpace),XL(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Lc).join(`
`)),c=Ng(c),c=x1(c,t),c=y1(c,t),f=Ng(f),f=x1(f,t),f=y1(f,t),c=S1(c),f=S1(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===cM?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cM?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const w=R+y+c,C=R+S+f,O=g1(s,s.VERTEX_SHADER,w),L=g1(s,s.FRAGMENT_SHADER,C);s.attachShader(M,O),s.attachShader(M,L),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function U(H){if(a.debug.checkShaderErrors){const k=s.getProgramInfoLog(M)||"",te=s.getShaderInfoLog(O)||"",J=s.getShaderInfoLog(L)||"",X=k.trim(),z=te.trim(),G=J.trim();let ee=!0,ue=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ee=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,O,L);else{const V=v1(s,O,"vertex"),B=v1(s,L,"fragment");jt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+X+`
`+V+`
`+B)}else X!==""?xt("WebGLProgram: Program Info Log:",X):(z===""||G==="")&&(ue=!1);ue&&(H.diagnostics={runnable:ee,programLog:X,vertexShader:{log:z,prefix:y},fragmentShader:{log:G,prefix:S}})}s.deleteShader(O),s.deleteShader(L),T=new rd(s,M),P=YL(s,M)}let T;this.getUniforms=function(){return T===void 0&&U(this),T};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(M,IL)),I},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zL++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=O,this.fragmentShader=L,this}let uN=0;class cN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fN(e),t.set(e,i)),i}}class fN{constructor(e){this.id=uN++,this.code=e,this.usedTimes=0}}function hN(a){return a===Do||a===bh||a===Eh}function dN(a,e,t,i,s,l){const c=new yM,f=new cN,h=new Set,d=[],g=new Map,v=i.logarithmicDepthBuffer;let _=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(T){return h.add(T),T===0?"uv":`uv${T}`}function M(T,P,I,H,k,te){const J=H.fog,X=k.geometry,z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?H.environment:null,G=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,ee=e.get(T.envMap||z,G),ue=ee&&ee.mapping===_h?ee.image.height:null,V=x[T.type];T.precision!==null&&(_=i.getMaxPrecision(T.precision),_!==T.precision&&xt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const B=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Z=B!==void 0?B.length:0;let ve=0;X.morphAttributes.position!==void 0&&(ve=1),X.morphAttributes.normal!==void 0&&(ve=2),X.morphAttributes.color!==void 0&&(ve=3);let ye,Ce,ne,Se;if(V){const Pe=Ma[V];ye=Pe.vertexShader,Ce=Pe.fragmentShader}else ye=T.vertexShader,Ce=T.fragmentShader,f.update(T),ne=f.getVertexShaderID(T),Se=f.getFragmentShaderID(T);const re=a.getRenderTarget(),Me=a.state.buffers.depth.getReversed(),Xe=k.isInstancedMesh===!0,ze=k.isBatchedMesh===!0,et=!!T.map,He=!!T.matcap,Qe=!!ee,ot=!!T.aoMap,at=!!T.lightMap,se=!!T.bumpMap,yt=!!T.normalMap,Bt=!!T.displacementMap,j=!!T.emissiveMap,vt=!!T.metalnessMap,ut=!!T.roughnessMap,Ct=T.anisotropy>0,Ee=T.clearcoat>0,Y=T.dispersion>0,D=T.iridescence>0,A=T.sheen>0,K=T.transmission>0,de=Ct&&!!T.anisotropyMap,be=Ee&&!!T.clearcoatMap,Oe=Ee&&!!T.clearcoatNormalMap,we=Ee&&!!T.clearcoatRoughnessMap,me=D&&!!T.iridescenceMap,_e=D&&!!T.iridescenceThicknessMap,Ge=A&&!!T.sheenColorMap,Ve=A&&!!T.sheenRoughnessMap,Be=!!T.specularMap,Fe=!!T.specularColorMap,We=!!T.specularIntensityMap,mt=K&&!!T.transmissionMap,St=K&&!!T.thicknessMap,q=!!T.gradientMap,Ue=!!T.alphaMap,xe=T.alphaTest>0,qe=!!T.alphaHash,Ie=!!T.extensions;let De=ga;T.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(De=a.toneMapping);const Le={shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:ye,fragmentShader:Ce,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:Se,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:ze,batchingColor:ze&&k._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&k.instanceColor!==null,instancingMorph:Xe&&k.morphTexture!==null,outputColorSpace:re===null?a.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Zt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:et,matcap:He,envMap:Qe,envMapMode:Qe&&ee.mapping,envMapCubeUVHeight:ue,aoMap:ot,lightMap:at,bumpMap:se,normalMap:yt,displacementMap:Bt,emissiveMap:j,normalMapObjectSpace:yt&&T.normalMapType===Ow,normalMapTangentSpace:yt&&T.normalMapType===oM,packedNormalMap:yt&&T.normalMapType===oM&&hN(T.normalMap.format),metalnessMap:vt,roughnessMap:ut,anisotropy:Ct,anisotropyMap:de,clearcoat:Ee,clearcoatMap:be,clearcoatNormalMap:Oe,clearcoatRoughnessMap:we,dispersion:Y,iridescence:D,iridescenceMap:me,iridescenceThicknessMap:_e,sheen:A,sheenColorMap:Ge,sheenRoughnessMap:Ve,specularMap:Be,specularColorMap:Fe,specularIntensityMap:We,transmission:K,transmissionMap:mt,thicknessMap:St,gradientMap:q,opaque:T.transparent===!1&&T.blending===Dl&&T.alphaToCoverage===!1,alphaMap:Ue,alphaTest:xe,alphaHash:qe,combine:T.combine,mapUv:et&&b(T.map.channel),aoMapUv:ot&&b(T.aoMap.channel),lightMapUv:at&&b(T.lightMap.channel),bumpMapUv:se&&b(T.bumpMap.channel),normalMapUv:yt&&b(T.normalMap.channel),displacementMapUv:Bt&&b(T.displacementMap.channel),emissiveMapUv:j&&b(T.emissiveMap.channel),metalnessMapUv:vt&&b(T.metalnessMap.channel),roughnessMapUv:ut&&b(T.roughnessMap.channel),anisotropyMapUv:de&&b(T.anisotropyMap.channel),clearcoatMapUv:be&&b(T.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&b(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&b(T.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&b(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&b(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&b(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&b(T.sheenRoughnessMap.channel),specularMapUv:Be&&b(T.specularMap.channel),specularColorMapUv:Fe&&b(T.specularColorMap.channel),specularIntensityMapUv:We&&b(T.specularIntensityMap.channel),transmissionMapUv:mt&&b(T.transmissionMap.channel),thicknessMapUv:St&&b(T.thicknessMap.channel),alphaMapUv:Ue&&b(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(yt||Ct),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(et||Ue),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&yt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ve,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:De,decodeVideoTexture:et&&T.map.isVideoTexture===!0&&Zt.getTransfer(T.map.colorSpace)===on,decodeVideoTextureEmissive:j&&T.emissiveMap.isVideoTexture===!0&&Zt.getTransfer(T.emissiveMap.colorSpace)===on,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===za,flipSided:T.side===Ki,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ie&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&T.extensions.multiDraw===!0||ze)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Le.vertexUv1s=h.has(1),Le.vertexUv2s=h.has(2),Le.vertexUv3s=h.has(3),h.clear(),Le}function y(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)P.push(I),P.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(S(P,T),R(P,T),P.push(a.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function S(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function R(T,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),P.packedNormalMap&&c.enable(22),P.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),P.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function w(T){const P=x[T.type];let I;if(P){const H=Ma[P];I=v3.clone(H.uniforms)}else I=T.uniforms;return I}function C(T,P){let I=g.get(P);return I!==void 0?++I.usedTimes:(I=new lN(a,P,T,s),d.push(I),g.set(P,I)),I}function O(T){if(--T.usedTimes===0){const P=d.indexOf(T);d[P]=d[d.length-1],d.pop(),g.delete(T.cacheKey),T.destroy()}}function L(T){f.remove(T)}function U(){f.dispose()}return{getParameters:M,getProgramCacheKey:y,getUniforms:w,acquireProgram:C,releaseProgram:O,releaseShaderCache:L,programs:d,dispose:U}}function pN(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let f=a.get(c);return f===void 0&&(f={},a.set(c,f)),f}function i(c){a.delete(c)}function s(c,f,h){a.get(c)[f]=h}function l(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:l}}function mN(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function b1(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function E1(){const a=[];let e=0;const t=[],i=[],s=[];function l(){e=0,t.length=0,i.length=0,s.length=0}function c(_){let x=0;return _.isInstancedMesh&&(x+=2),_.isSkinnedMesh&&(x+=1),x}function f(_,x,b,M,y,S){let R=a[e];return R===void 0?(R={id:_.id,object:_,geometry:x,material:b,materialVariant:c(_),groupOrder:M,renderOrder:_.renderOrder,z:y,group:S},a[e]=R):(R.id=_.id,R.object=_,R.geometry=x,R.material=b,R.materialVariant=c(_),R.groupOrder=M,R.renderOrder=_.renderOrder,R.z=y,R.group=S),e++,R}function h(_,x,b,M,y,S){const R=f(_,x,b,M,y,S);b.transmission>0?i.push(R):b.transparent===!0?s.push(R):t.push(R)}function d(_,x,b,M,y,S){const R=f(_,x,b,M,y,S);b.transmission>0?i.unshift(R):b.transparent===!0?s.unshift(R):t.unshift(R)}function g(_,x){t.length>1&&t.sort(_||mN),i.length>1&&i.sort(x||b1),s.length>1&&s.sort(x||b1)}function v(){for(let _=e,x=a.length;_<x;_++){const b=a[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:i,transparent:s,init:l,push:h,unshift:d,finish:v,sort:g}}function gN(){let a=new WeakMap;function e(i,s){const l=a.get(i);let c;return l===void 0?(c=new E1,a.set(i,[c])):s>=l.length?(c=new E1,l.push(c)):c=l[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function _N(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new he,color:new tn};break;case"SpotLight":t={position:new he,direction:new he,color:new tn,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new he,color:new tn,distance:0,decay:0};break;case"HemisphereLight":t={direction:new he,skyColor:new tn,groundColor:new tn};break;case"RectAreaLight":t={color:new tn,position:new he,halfWidth:new he,halfHeight:new he};break}return a[e.id]=t,t}}}function vN(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let xN=0;function yN(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function SN(a){const e=new _N,t=vN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new he);const s=new he,l=new Zn,c=new Zn;function f(d){let g=0,v=0,_=0;for(let P=0;P<9;P++)i.probe[P].set(0,0,0);let x=0,b=0,M=0,y=0,S=0,R=0,w=0,C=0,O=0,L=0,U=0;d.sort(yN);for(let P=0,I=d.length;P<I;P++){const H=d[P],k=H.color,te=H.intensity,J=H.distance;let X=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Do?X=H.shadow.map.texture:X=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)g+=k.r*te,v+=k.g*te,_+=k.b*te;else if(H.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(H.sh.coefficients[z],te);U++}else if(H.isDirectionalLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,ee=t.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.directionalShadow[x]=ee,i.directionalShadowMap[x]=X,i.directionalShadowMatrix[x]=H.shadow.matrix,R++}i.directional[x]=z,x++}else if(H.isSpotLight){const z=e.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(k).multiplyScalar(te),z.distance=J,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,i.spot[M]=z;const G=H.shadow;if(H.map&&(i.spotLightMap[O]=H.map,O++,G.updateMatrices(H),H.castShadow&&L++),i.spotLightMatrix[M]=G.matrix,H.castShadow){const ee=t.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=X,C++}M++}else if(H.isRectAreaLight){const z=e.get(H);z.color.copy(k).multiplyScalar(te),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),i.rectArea[y]=z,y++}else if(H.isPointLight){const z=e.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const G=H.shadow,ee=t.get(H);ee.shadowIntensity=G.intensity,ee.shadowBias=G.bias,ee.shadowNormalBias=G.normalBias,ee.shadowRadius=G.radius,ee.shadowMapSize=G.mapSize,ee.shadowCameraNear=G.camera.near,ee.shadowCameraFar=G.camera.far,i.pointShadow[b]=ee,i.pointShadowMap[b]=X,i.pointShadowMatrix[b]=H.shadow.matrix,w++}i.point[b]=z,b++}else if(H.isHemisphereLight){const z=e.get(H);z.skyColor.copy(H.color).multiplyScalar(te),z.groundColor.copy(H.groundColor).multiplyScalar(te),i.hemi[S]=z,S++}}y>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=je.LTC_FLOAT_1,i.rectAreaLTC2=je.LTC_FLOAT_2):(i.rectAreaLTC1=je.LTC_HALF_1,i.rectAreaLTC2=je.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=v,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==x||T.pointLength!==b||T.spotLength!==M||T.rectAreaLength!==y||T.hemiLength!==S||T.numDirectionalShadows!==R||T.numPointShadows!==w||T.numSpotShadows!==C||T.numSpotMaps!==O||T.numLightProbes!==U)&&(i.directional.length=x,i.spot.length=M,i.rectArea.length=y,i.point.length=b,i.hemi.length=S,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=C+O-L,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=U,T.directionalLength=x,T.pointLength=b,T.spotLength=M,T.rectAreaLength=y,T.hemiLength=S,T.numDirectionalShadows=R,T.numPointShadows=w,T.numSpotShadows=C,T.numSpotMaps=O,T.numLightProbes=U,i.version=xN++)}function h(d,g){let v=0,_=0,x=0,b=0,M=0;const y=g.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const w=d[S];if(w.isDirectionalLight){const C=i.directional[v];C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),v++}else if(w.isSpotLight){const C=i.spot[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(y),x++}else if(w.isRectAreaLight){const C=i.rectArea[b];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(w.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),b++}else if(w.isPointLight){const C=i.point[_];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),_++}else if(w.isHemisphereLight){const C=i.hemi[M];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:h,state:i}}function T1(a){const e=new SN(a),t=[],i=[],s=[];function l(_){v.camera=_,t.length=0,i.length=0,s.length=0}function c(_){t.push(_)}function f(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(t)}function g(_){e.setupView(t,_)}const v={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:v,setupLights:d,setupLightsView:g,pushLight:c,pushShadow:f,pushLightProbeGrid:h}}function MN(a){let e=new WeakMap;function t(s,l=0){const c=e.get(s);let f;return c===void 0?(f=new T1(a),e.set(s,[f])):l>=c.length?(f=new T1(a),c.push(f)):f=c[l],f}function i(){e=new WeakMap}return{get:t,dispose:i}}const bN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,EN=`uniform sampler2D shadow_pass;
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
}`,TN=[new he(1,0,0),new he(-1,0,0),new he(0,1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1)],AN=[new he(0,-1,0),new he(0,-1,0),new he(0,0,1),new he(0,0,-1),new he(0,-1,0),new he(0,-1,0)],A1=new Zn,Nc=new he,Og=new he;function RN(a,e,t){let i=new IM;const s=new Mt,l=new Mt,c=new zn,f=new S3,h=new M3,d={},g=t.maxTextureSize,v={[As]:Ki,[Ki]:As,[za]:za},_=new ya({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:bN,fragmentShader:EN}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const b=new na;b.setAttribute("position",new ea(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Ir(b,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gh;let S=this.type;this.render=function(L,U,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;this.type===fw&&(xt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gh);const P=a.getRenderTarget(),I=a.getActiveCubeFace(),H=a.getActiveMipmapLevel(),k=a.state;k.setBlending(Ba),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const te=S!==this.type;te&&U.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(X=>X.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,X=L.length;J<X;J++){const z=L[J],G=z.shadow;if(G===void 0){xt("WebGLShadowMap:",z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ee=G.getFrameExtents();s.multiply(ee),l.copy(G.mapSize),(s.x>g||s.y>g)&&(s.x>g&&(l.x=Math.floor(g/ee.x),s.x=l.x*ee.x,G.mapSize.x=l.x),s.y>g&&(l.y=Math.floor(g/ee.y),s.y=l.y*ee.y,G.mapSize.y=l.y));const ue=a.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ue,G.map===null||te===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===_c){if(z.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Kr(s.x,s.y,{format:Do,type:va,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),G.map.texture.name=z.name+".shadowMap",G.map.depthTexture=new ql(s.x,s.y,Zr),G.map.depthTexture.name=z.name+".shadowMapDepth",G.map.depthTexture.format=Ha,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gi,G.map.depthTexture.magFilter=gi}else z.isPointLight?(G.map=new a1(s.x),G.map.depthTexture=new g3(s.x,_a)):(G.map=new Kr(s.x,s.y),G.map.depthTexture=new ql(s.x,s.y,_a)),G.map.depthTexture.name=z.name+".shadowMap",G.map.depthTexture.format=Ha,this.type===gh?(G.map.depthTexture.compareFunction=ue?J0:Q0,G.map.depthTexture.minFilter=Yn,G.map.depthTexture.magFilter=Yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=gi,G.map.depthTexture.magFilter=gi);G.camera.updateProjectionMatrix()}const V=G.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<V;B++){if(G.map.isWebGLCubeRenderTarget)a.setRenderTarget(G.map,B),a.clear();else{B===0&&(a.setRenderTarget(G.map),a.clear());const Z=G.getViewport(B);c.set(l.x*Z.x,l.y*Z.y,l.x*Z.z,l.y*Z.w),k.viewport(c)}if(z.isPointLight){const Z=G.camera,ve=G.matrix,ye=z.distance||Z.far;ye!==Z.far&&(Z.far=ye,Z.updateProjectionMatrix()),Nc.setFromMatrixPosition(z.matrixWorld),Z.position.copy(Nc),Og.copy(Z.position),Og.add(TN[B]),Z.up.copy(AN[B]),Z.lookAt(Og),Z.updateMatrixWorld(),ve.makeTranslation(-Nc.x,-Nc.y,-Nc.z),A1.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),G._frustum.setFromProjectionMatrix(A1,Z.coordinateSystem,Z.reversedDepth)}else G.updateMatrices(z);i=G.getFrustum(),C(U,T,G.camera,z,this.type)}G.isPointLightShadow!==!0&&this.type===_c&&R(G,T),G.needsUpdate=!1}S=this.type,y.needsUpdate=!1,a.setRenderTarget(P,I,H)};function R(L,U){const T=e.update(M);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,x.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Kr(s.x,s.y,{format:Do,type:va})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(U,null,T,_,M,null),x.uniforms.shadow_pass.value=L.mapPass.texture,x.uniforms.resolution.value=L.mapSize,x.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(U,null,T,x,M,null)}function w(L,U,T,P){let I=null;const H=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(H!==void 0)I=H;else if(I=T.isPointLight===!0?h:f,a.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const k=I.uuid,te=U.uuid;let J=d[k];J===void 0&&(J={},d[k]=J);let X=J[te];X===void 0&&(X=I.clone(),J[te]=X,U.addEventListener("dispose",O)),I=X}if(I.visible=U.visible,I.wireframe=U.wireframe,P===_c?I.side=U.shadowSide!==null?U.shadowSide:U.side:I.side=U.shadowSide!==null?U.shadowSide:v[U.side],I.alphaMap=U.alphaMap,I.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,I.map=U.map,I.clipShadows=U.clipShadows,I.clippingPlanes=U.clippingPlanes,I.clipIntersection=U.clipIntersection,I.displacementMap=U.displacementMap,I.displacementScale=U.displacementScale,I.displacementBias=U.displacementBias,I.wireframeLinewidth=U.wireframeLinewidth,I.linewidth=U.linewidth,T.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const k=a.properties.get(I);k.light=T}return I}function C(L,U,T,P,I){if(L.visible===!1)return;if(L.layers.test(U.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&I===_c)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const te=e.update(L),J=L.material;if(Array.isArray(J)){const X=te.groups;for(let z=0,G=X.length;z<G;z++){const ee=X[z],ue=J[ee.materialIndex];if(ue&&ue.visible){const V=w(L,ue,P,I);L.onBeforeShadow(a,L,U,T,te,V,ee),a.renderBufferDirect(T,null,te,V,L,ee),L.onAfterShadow(a,L,U,T,te,V,ee)}}}else if(J.visible){const X=w(L,J,P,I);L.onBeforeShadow(a,L,U,T,te,X,null),a.renderBufferDirect(T,null,te,X,L,null),L.onAfterShadow(a,L,U,T,te,X,null)}}const k=L.children;for(let te=0,J=k.length;te<J;te++)C(k[te],U,T,P,I)}function O(L){L.target.removeEventListener("dispose",O);for(const T in d){const P=d[T],I=L.target.uuid;I in P&&(P[I].dispose(),delete P[I])}}}function CN(a,e){function t(){let q=!1;const Ue=new zn;let xe=null;const qe=new zn(0,0,0,0);return{setMask:function(Ie){xe!==Ie&&!q&&(a.colorMask(Ie,Ie,Ie,Ie),xe=Ie)},setLocked:function(Ie){q=Ie},setClear:function(Ie,De,Le,Pe,ht){ht===!0&&(Ie*=Pe,De*=Pe,Le*=Pe),Ue.set(Ie,De,Le,Pe),qe.equals(Ue)===!1&&(a.clearColor(Ie,De,Le,Pe),qe.copy(Ue))},reset:function(){q=!1,xe=null,qe.set(-1,0,0,0)}}}function i(){let q=!1,Ue=!1,xe=null,qe=null,Ie=null;return{setReversed:function(De){if(Ue!==De){const Le=e.get("EXT_clip_control");De?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),Ue=De;const Pe=Ie;Ie=null,this.setClear(Pe)}},getReversed:function(){return Ue},setTest:function(De){De?re(a.DEPTH_TEST):Me(a.DEPTH_TEST)},setMask:function(De){xe!==De&&!q&&(a.depthMask(De),xe=De)},setFunc:function(De){if(Ue&&(De=Xw[De]),qe!==De){switch(De){case i0:a.depthFunc(a.NEVER);break;case r0:a.depthFunc(a.ALWAYS);break;case a0:a.depthFunc(a.LESS);break;case Ul:a.depthFunc(a.LEQUAL);break;case s0:a.depthFunc(a.EQUAL);break;case o0:a.depthFunc(a.GEQUAL);break;case l0:a.depthFunc(a.GREATER);break;case u0:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}qe=De}},setLocked:function(De){q=De},setClear:function(De){Ie!==De&&(Ie=De,Ue&&(De=1-De),a.clearDepth(De))},reset:function(){q=!1,xe=null,qe=null,Ie=null,Ue=!1}}}function s(){let q=!1,Ue=null,xe=null,qe=null,Ie=null,De=null,Le=null,Pe=null,ht=null;return{setTest:function(Ne){q||(Ne?re(a.STENCIL_TEST):Me(a.STENCIL_TEST))},setMask:function(Ne){Ue!==Ne&&!q&&(a.stencilMask(Ne),Ue=Ne)},setFunc:function(Ne,ft,tt){(xe!==Ne||qe!==ft||Ie!==tt)&&(a.stencilFunc(Ne,ft,tt),xe=Ne,qe=ft,Ie=tt)},setOp:function(Ne,ft,tt){(De!==Ne||Le!==ft||Pe!==tt)&&(a.stencilOp(Ne,ft,tt),De=Ne,Le=ft,Pe=tt)},setLocked:function(Ne){q=Ne},setClear:function(Ne){ht!==Ne&&(a.clearStencil(Ne),ht=Ne)},reset:function(){q=!1,Ue=null,xe=null,qe=null,Ie=null,De=null,Le=null,Pe=null,ht=null}}}const l=new t,c=new i,f=new s,h=new WeakMap,d=new WeakMap;let g={},v={},_={},x=new WeakMap,b=[],M=null,y=!1,S=null,R=null,w=null,C=null,O=null,L=null,U=null,T=new tn(0,0,0),P=0,I=!1,H=null,k=null,te=null,J=null,X=null;const z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const ue=a.getParameter(a.VERSION);ue.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(ue)[1]),G=ee>=1):ue.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),G=ee>=2);let V=null,B={};const Z=a.getParameter(a.SCISSOR_BOX),ve=a.getParameter(a.VIEWPORT),ye=new zn().fromArray(Z),Ce=new zn().fromArray(ve);function ne(q,Ue,xe,qe){const Ie=new Uint8Array(4),De=a.createTexture();a.bindTexture(q,De),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Le=0;Le<xe;Le++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ue,0,a.RGBA,1,1,qe,0,a.RGBA,a.UNSIGNED_BYTE,Ie):a.texImage2D(Ue+Le,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ie);return De}const Se={};Se[a.TEXTURE_2D]=ne(a.TEXTURE_2D,a.TEXTURE_2D,1),Se[a.TEXTURE_CUBE_MAP]=ne(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[a.TEXTURE_2D_ARRAY]=ne(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),Se[a.TEXTURE_3D]=ne(a.TEXTURE_3D,a.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),re(a.DEPTH_TEST),c.setFunc(Ul),se(!1),yt(VS),re(a.CULL_FACE),ot(Ba);function re(q){g[q]!==!0&&(a.enable(q),g[q]=!0)}function Me(q){g[q]!==!1&&(a.disable(q),g[q]=!1)}function Xe(q,Ue){return _[q]!==Ue?(a.bindFramebuffer(q,Ue),_[q]=Ue,q===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ue),q===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ue),!0):!1}function ze(q,Ue){let xe=b,qe=!1;if(q){xe=x.get(Ue),xe===void 0&&(xe=[],x.set(Ue,xe));const Ie=q.textures;if(xe.length!==Ie.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let De=0,Le=Ie.length;De<Le;De++)xe[De]=a.COLOR_ATTACHMENT0+De;xe.length=Ie.length,qe=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,qe=!0);qe&&a.drawBuffers(xe)}function et(q){return M!==q?(a.useProgram(q),M=q,!0):!1}const He={[Ao]:a.FUNC_ADD,[dw]:a.FUNC_SUBTRACT,[pw]:a.FUNC_REVERSE_SUBTRACT};He[mw]=a.MIN,He[gw]=a.MAX;const Qe={[_w]:a.ZERO,[vw]:a.ONE,[xw]:a.SRC_COLOR,[t0]:a.SRC_ALPHA,[Tw]:a.SRC_ALPHA_SATURATE,[bw]:a.DST_COLOR,[Sw]:a.DST_ALPHA,[yw]:a.ONE_MINUS_SRC_COLOR,[n0]:a.ONE_MINUS_SRC_ALPHA,[Ew]:a.ONE_MINUS_DST_COLOR,[Mw]:a.ONE_MINUS_DST_ALPHA,[Aw]:a.CONSTANT_COLOR,[Rw]:a.ONE_MINUS_CONSTANT_COLOR,[Cw]:a.CONSTANT_ALPHA,[ww]:a.ONE_MINUS_CONSTANT_ALPHA};function ot(q,Ue,xe,qe,Ie,De,Le,Pe,ht,Ne){if(q===Ba){y===!0&&(Me(a.BLEND),y=!1);return}if(y===!1&&(re(a.BLEND),y=!0),q!==hw){if(q!==S||Ne!==I){if((R!==Ao||O!==Ao)&&(a.blendEquation(a.FUNC_ADD),R=Ao,O=Ao),Ne)switch(q){case Dl:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case e0:a.blendFunc(a.ONE,a.ONE);break;case kS:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case XS:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:jt("WebGLState: Invalid blending: ",q);break}else switch(q){case Dl:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case e0:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case kS:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case XS:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",q);break}w=null,C=null,L=null,U=null,T.set(0,0,0),P=0,S=q,I=Ne}return}Ie=Ie||Ue,De=De||xe,Le=Le||qe,(Ue!==R||Ie!==O)&&(a.blendEquationSeparate(He[Ue],He[Ie]),R=Ue,O=Ie),(xe!==w||qe!==C||De!==L||Le!==U)&&(a.blendFuncSeparate(Qe[xe],Qe[qe],Qe[De],Qe[Le]),w=xe,C=qe,L=De,U=Le),(Pe.equals(T)===!1||ht!==P)&&(a.blendColor(Pe.r,Pe.g,Pe.b,ht),T.copy(Pe),P=ht),S=q,I=!1}function at(q,Ue){q.side===za?Me(a.CULL_FACE):re(a.CULL_FACE);let xe=q.side===Ki;Ue&&(xe=!xe),se(xe),q.blending===Dl&&q.transparent===!1?ot(Ba):ot(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),l.setMask(q.colorWrite);const qe=q.stencilWrite;f.setTest(qe),qe&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),j(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?re(a.SAMPLE_ALPHA_TO_COVERAGE):Me(a.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){H!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),H=q)}function yt(q){q!==uw?(re(a.CULL_FACE),q!==k&&(q===VS?a.cullFace(a.BACK):q===cw?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Me(a.CULL_FACE),k=q}function Bt(q){q!==te&&(G&&a.lineWidth(q),te=q)}function j(q,Ue,xe){q?(re(a.POLYGON_OFFSET_FILL),(J!==Ue||X!==xe)&&(J=Ue,X=xe,c.getReversed()&&(Ue=-Ue),a.polygonOffset(Ue,xe))):Me(a.POLYGON_OFFSET_FILL)}function vt(q){q?re(a.SCISSOR_TEST):Me(a.SCISSOR_TEST)}function ut(q){q===void 0&&(q=a.TEXTURE0+z-1),V!==q&&(a.activeTexture(q),V=q)}function Ct(q,Ue,xe){xe===void 0&&(V===null?xe=a.TEXTURE0+z-1:xe=V);let qe=B[xe];qe===void 0&&(qe={type:void 0,texture:void 0},B[xe]=qe),(qe.type!==q||qe.texture!==Ue)&&(V!==xe&&(a.activeTexture(xe),V=xe),a.bindTexture(q,Ue||Se[q]),qe.type=q,qe.texture=Ue)}function Ee(){const q=B[V];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Y(){try{a.compressedTexImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function D(){try{a.compressedTexImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function A(){try{a.texSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function K(){try{a.texSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function de(){try{a.compressedTexSubImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function be(){try{a.compressedTexSubImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function Oe(){try{a.texStorage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function we(){try{a.texStorage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function me(){try{a.texImage2D(...arguments)}catch(q){jt("WebGLState:",q)}}function _e(){try{a.texImage3D(...arguments)}catch(q){jt("WebGLState:",q)}}function Ge(q){return v[q]!==void 0?v[q]:a.getParameter(q)}function Ve(q,Ue){v[q]!==Ue&&(a.pixelStorei(q,Ue),v[q]=Ue)}function Be(q){ye.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),ye.copy(q))}function Fe(q){Ce.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),Ce.copy(q))}function We(q,Ue){let xe=d.get(Ue);xe===void 0&&(xe=new WeakMap,d.set(Ue,xe));let qe=xe.get(q);qe===void 0&&(qe=a.getUniformBlockIndex(Ue,q.name),xe.set(q,qe))}function mt(q,Ue){const qe=d.get(Ue).get(q);h.get(Ue)!==qe&&(a.uniformBlockBinding(Ue,qe,q.__bindingPointIndex),h.set(Ue,qe))}function St(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),g={},v={},V=null,B={},_={},x=new WeakMap,b=[],M=null,y=!1,S=null,R=null,w=null,C=null,O=null,L=null,U=null,T=new tn(0,0,0),P=0,I=!1,H=null,k=null,te=null,J=null,X=null,ye.set(0,0,a.canvas.width,a.canvas.height),Ce.set(0,0,a.canvas.width,a.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:re,disable:Me,bindFramebuffer:Xe,drawBuffers:ze,useProgram:et,setBlending:ot,setMaterial:at,setFlipSided:se,setCullFace:yt,setLineWidth:Bt,setPolygonOffset:j,setScissorTest:vt,activeTexture:ut,bindTexture:Ct,unbindTexture:Ee,compressedTexImage2D:Y,compressedTexImage3D:D,texImage2D:me,texImage3D:_e,pixelStorei:Ve,getParameter:Ge,updateUBOMapping:We,uniformBlockBinding:mt,texStorage2D:Oe,texStorage3D:we,texSubImage2D:A,texSubImage3D:K,compressedTexSubImage2D:de,compressedTexSubImage3D:be,scissor:Be,viewport:Fe,reset:St}}function wN(a,e,t,i,s,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Mt,g=new WeakMap,v=new Set;let _;const x=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,A){return b?new OffscreenCanvas(D,A):Ch("canvas")}function y(D,A,K){let de=1;const be=Y(D);if((be.width>K||be.height>K)&&(de=K/Math.max(be.width,be.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Oe=Math.floor(de*be.width),we=Math.floor(de*be.height);_===void 0&&(_=M(Oe,we));const me=A?M(Oe,we):_;return me.width=Oe,me.height=we,me.getContext("2d").drawImage(D,0,0,Oe,we),xt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Oe+"x"+we+")."),me}else return"data"in D&&xt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),D;return D}function S(D){return D.generateMipmaps}function R(D){a.generateMipmap(D)}function w(D){return D.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?a.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(D,A,K,de,be,Oe=!1){if(D!==null){if(a[D]!==void 0)return a[D];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let we;de&&(we=e.get("EXT_texture_norm16"),we||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=A;if(A===a.RED&&(K===a.FLOAT&&(me=a.R32F),K===a.HALF_FLOAT&&(me=a.R16F),K===a.UNSIGNED_BYTE&&(me=a.R8),K===a.UNSIGNED_SHORT&&we&&(me=we.R16_EXT),K===a.SHORT&&we&&(me=we.R16_SNORM_EXT)),A===a.RED_INTEGER&&(K===a.UNSIGNED_BYTE&&(me=a.R8UI),K===a.UNSIGNED_SHORT&&(me=a.R16UI),K===a.UNSIGNED_INT&&(me=a.R32UI),K===a.BYTE&&(me=a.R8I),K===a.SHORT&&(me=a.R16I),K===a.INT&&(me=a.R32I)),A===a.RG&&(K===a.FLOAT&&(me=a.RG32F),K===a.HALF_FLOAT&&(me=a.RG16F),K===a.UNSIGNED_BYTE&&(me=a.RG8),K===a.UNSIGNED_SHORT&&we&&(me=we.RG16_EXT),K===a.SHORT&&we&&(me=we.RG16_SNORM_EXT)),A===a.RG_INTEGER&&(K===a.UNSIGNED_BYTE&&(me=a.RG8UI),K===a.UNSIGNED_SHORT&&(me=a.RG16UI),K===a.UNSIGNED_INT&&(me=a.RG32UI),K===a.BYTE&&(me=a.RG8I),K===a.SHORT&&(me=a.RG16I),K===a.INT&&(me=a.RG32I)),A===a.RGB_INTEGER&&(K===a.UNSIGNED_BYTE&&(me=a.RGB8UI),K===a.UNSIGNED_SHORT&&(me=a.RGB16UI),K===a.UNSIGNED_INT&&(me=a.RGB32UI),K===a.BYTE&&(me=a.RGB8I),K===a.SHORT&&(me=a.RGB16I),K===a.INT&&(me=a.RGB32I)),A===a.RGBA_INTEGER&&(K===a.UNSIGNED_BYTE&&(me=a.RGBA8UI),K===a.UNSIGNED_SHORT&&(me=a.RGBA16UI),K===a.UNSIGNED_INT&&(me=a.RGBA32UI),K===a.BYTE&&(me=a.RGBA8I),K===a.SHORT&&(me=a.RGBA16I),K===a.INT&&(me=a.RGBA32I)),A===a.RGB&&(K===a.UNSIGNED_SHORT&&we&&(me=we.RGB16_EXT),K===a.SHORT&&we&&(me=we.RGB16_SNORM_EXT),K===a.UNSIGNED_INT_5_9_9_9_REV&&(me=a.RGB9_E5),K===a.UNSIGNED_INT_10F_11F_11F_REV&&(me=a.R11F_G11F_B10F)),A===a.RGBA){const _e=Oe?Ah:Zt.getTransfer(be);K===a.FLOAT&&(me=a.RGBA32F),K===a.HALF_FLOAT&&(me=a.RGBA16F),K===a.UNSIGNED_BYTE&&(me=_e===on?a.SRGB8_ALPHA8:a.RGBA8),K===a.UNSIGNED_SHORT&&we&&(me=we.RGBA16_EXT),K===a.SHORT&&we&&(me=we.RGBA16_SNORM_EXT),K===a.UNSIGNED_SHORT_4_4_4_4&&(me=a.RGBA4),K===a.UNSIGNED_SHORT_5_5_5_1&&(me=a.RGB5_A1)}return(me===a.R16F||me===a.R32F||me===a.RG16F||me===a.RG32F||me===a.RGBA16F||me===a.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function O(D,A){let K;return D?A===null||A===_a||A===xc?K=a.DEPTH24_STENCIL8:A===Zr?K=a.DEPTH32F_STENCIL8:A===vc&&(K=a.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===_a||A===xc?K=a.DEPTH_COMPONENT24:A===Zr?K=a.DEPTH_COMPONENT32F:A===vc&&(K=a.DEPTH_COMPONENT16),K}function L(D,A){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==gi&&D.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function U(D){const A=D.target;A.removeEventListener("dispose",U),P(A),A.isVideoTexture&&g.delete(A),A.isHTMLTexture&&v.delete(A)}function T(D){const A=D.target;A.removeEventListener("dispose",T),H(A)}function P(D){const A=i.get(D);if(A.__webglInit===void 0)return;const K=D.source,de=x.get(K);if(de){const be=de[A.__cacheKey];be.usedTimes--,be.usedTimes===0&&I(D),Object.keys(de).length===0&&x.delete(K)}i.remove(D)}function I(D){const A=i.get(D);a.deleteTexture(A.__webglTexture);const K=D.source,de=x.get(K);delete de[A.__cacheKey],c.memory.textures--}function H(D){const A=i.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),i.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let be=0;be<A.__webglFramebuffer[de].length;be++)a.deleteFramebuffer(A.__webglFramebuffer[de][be]);else a.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)a.deleteFramebuffer(A.__webglFramebuffer[de]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=D.textures;for(let de=0,be=K.length;de<be;de++){const Oe=i.get(K[de]);Oe.__webglTexture&&(a.deleteTexture(Oe.__webglTexture),c.memory.textures--),i.remove(K[de])}i.remove(D)}let k=0;function te(){k=0}function J(){return k}function X(D){k=D}function z(){const D=k;return D>=s.maxTextures&&xt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),k+=1,D}function G(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function ee(D,A){const K=i.get(D);if(D.isVideoTexture&&Ct(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const de=D.image;if(de===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(K,D,A);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,K.__webglTexture,a.TEXTURE0+A)}function ue(D,A){const K=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Me(K,D,A);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,K.__webglTexture,a.TEXTURE0+A)}function V(D,A){const K=i.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Me(K,D,A);return}t.bindTexture(a.TEXTURE_3D,K.__webglTexture,a.TEXTURE0+A)}function B(D,A){const K=i.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&K.__version!==D.version){Xe(K,D,A);return}t.bindTexture(a.TEXTURE_CUBE_MAP,K.__webglTexture,a.TEXTURE0+A)}const Z={[h0]:a.REPEAT,[mr]:a.CLAMP_TO_EDGE,[d0]:a.MIRRORED_REPEAT},ve={[gi]:a.NEAREST,[Lw]:a.NEAREST_MIPMAP_NEAREST,[vh]:a.NEAREST_MIPMAP_LINEAR,[Yn]:a.LINEAR,[p0]:a.LINEAR_MIPMAP_NEAREST,[Co]:a.LINEAR_MIPMAP_LINEAR},ye={[Pw]:a.NEVER,[Hw]:a.ALWAYS,[Fw]:a.LESS,[Q0]:a.LEQUAL,[Iw]:a.EQUAL,[J0]:a.GEQUAL,[zw]:a.GREATER,[Bw]:a.NOTEQUAL};function Ce(D,A){if(A.type===Zr&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===p0||A.magFilter===vh||A.magFilter===Co||A.minFilter===Yn||A.minFilter===p0||A.minFilter===vh||A.minFilter===Co)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(D,a.TEXTURE_WRAP_S,Z[A.wrapS]),a.texParameteri(D,a.TEXTURE_WRAP_T,Z[A.wrapT]),(D===a.TEXTURE_3D||D===a.TEXTURE_2D_ARRAY)&&a.texParameteri(D,a.TEXTURE_WRAP_R,Z[A.wrapR]),a.texParameteri(D,a.TEXTURE_MAG_FILTER,ve[A.magFilter]),a.texParameteri(D,a.TEXTURE_MIN_FILTER,ve[A.minFilter]),A.compareFunction&&(a.texParameteri(D,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(D,a.TEXTURE_COMPARE_FUNC,ye[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===gi||A.minFilter!==vh&&A.minFilter!==Co||A.type===Zr&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");a.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function ne(D,A){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",U));const de=A.source;let be=x.get(de);be===void 0&&(be={},x.set(de,be));const Oe=G(A);if(Oe!==D.__cacheKey){be[Oe]===void 0&&(be[Oe]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,K=!0),be[Oe].usedTimes++;const we=be[D.__cacheKey];we!==void 0&&(be[D.__cacheKey].usedTimes--,we.usedTimes===0&&I(A)),D.__cacheKey=Oe,D.__webglTexture=be[Oe].texture}return K}function Se(D,A,K){return Math.floor(Math.floor(D/K)/A)}function re(D,A,K,de){const Oe=D.updateRanges;if(Oe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,K,de,A.data);else{Oe.sort((Ve,Be)=>Ve.start-Be.start);let we=0;for(let Ve=1;Ve<Oe.length;Ve++){const Be=Oe[we],Fe=Oe[Ve],We=Be.start+Be.count,mt=Se(Fe.start,A.width,4),St=Se(Be.start,A.width,4);Fe.start<=We+1&&mt===St&&Se(Fe.start+Fe.count-1,A.width,4)===mt?Be.count=Math.max(Be.count,Fe.start+Fe.count-Be.start):(++we,Oe[we]=Fe)}Oe.length=we+1;const me=t.getParameter(a.UNPACK_ROW_LENGTH),_e=t.getParameter(a.UNPACK_SKIP_PIXELS),Ge=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let Ve=0,Be=Oe.length;Ve<Be;Ve++){const Fe=Oe[Ve],We=Math.floor(Fe.start/4),mt=Math.ceil(Fe.count/4),St=We%A.width,q=Math.floor(We/A.width),Ue=mt,xe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,St),t.pixelStorei(a.UNPACK_SKIP_ROWS,q),t.texSubImage2D(a.TEXTURE_2D,0,St,q,Ue,xe,K,de,A.data)}D.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,me),t.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ge)}}function Me(D,A,K){let de=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=a.TEXTURE_3D);const be=ne(D,A),Oe=A.source;t.bindTexture(de,D.__webglTexture,a.TEXTURE0+K);const we=i.get(Oe);if(Oe.version!==we.__version||be===!0){if(t.activeTexture(a.TEXTURE0+K),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=Zt.getPrimaries(Zt.workingColorSpace),qe=A.colorSpace===Rs?null:Zt.getPrimaries(A.colorSpace),Ie=A.colorSpace===Rs||xe===qe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment);let _e=y(A.image,!1,s.maxTextureSize);_e=Ee(A,_e);const Ge=l.convert(A.format,A.colorSpace),Ve=l.convert(A.type);let Be=C(A.internalFormat,Ge,Ve,A.normalized,A.colorSpace,A.isVideoTexture);Ce(de,A);let Fe;const We=A.mipmaps,mt=A.isVideoTexture!==!0,St=we.__version===void 0||be===!0,q=Oe.dataReady,Ue=L(A,_e);if(A.isDepthTexture)Be=O(A.format===wo,A.type),St&&(mt?t.texStorage2D(a.TEXTURE_2D,1,Be,_e.width,_e.height):t.texImage2D(a.TEXTURE_2D,0,Be,_e.width,_e.height,0,Ge,Ve,null));else if(A.isDataTexture)if(We.length>0){mt&&St&&t.texStorage2D(a.TEXTURE_2D,Ue,Be,We[0].width,We[0].height);for(let xe=0,qe=We.length;xe<qe;xe++)Fe=We[xe],mt?q&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Fe.width,Fe.height,Ge,Ve,Fe.data):t.texImage2D(a.TEXTURE_2D,xe,Be,Fe.width,Fe.height,0,Ge,Ve,Fe.data);A.generateMipmaps=!1}else mt?(St&&t.texStorage2D(a.TEXTURE_2D,Ue,Be,_e.width,_e.height),q&&re(A,_e,Ge,Ve)):t.texImage2D(a.TEXTURE_2D,0,Be,_e.width,_e.height,0,Ge,Ve,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){mt&&St&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Be,We[0].width,We[0].height,_e.depth);for(let xe=0,qe=We.length;xe<qe;xe++)if(Fe=We[xe],A.format!==Or)if(Ge!==null)if(mt){if(q)if(A.layerUpdates.size>0){const Ie=jM(Fe.width,Fe.height,A.format,A.type);for(const De of A.layerUpdates){const Le=Fe.data.subarray(De*Ie/Fe.data.BYTES_PER_ELEMENT,(De+1)*Ie/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,De,Fe.width,Fe.height,1,Ge,Le)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Fe.width,Fe.height,_e.depth,Ge,Fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Be,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?q&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Fe.width,Fe.height,_e.depth,Ge,Ve,Fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,xe,Be,Fe.width,Fe.height,_e.depth,0,Ge,Ve,Fe.data)}else{mt&&St&&t.texStorage2D(a.TEXTURE_2D,Ue,Be,We[0].width,We[0].height);for(let xe=0,qe=We.length;xe<qe;xe++)Fe=We[xe],A.format!==Or?Ge!==null?mt?q&&t.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Fe.width,Fe.height,Ge,Fe.data):t.compressedTexImage2D(a.TEXTURE_2D,xe,Be,Fe.width,Fe.height,0,Fe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?q&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Fe.width,Fe.height,Ge,Ve,Fe.data):t.texImage2D(a.TEXTURE_2D,xe,Be,Fe.width,Fe.height,0,Ge,Ve,Fe.data)}else if(A.isDataArrayTexture)if(mt){if(St&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ue,Be,_e.width,_e.height,_e.depth),q)if(A.layerUpdates.size>0){const xe=jM(_e.width,_e.height,A.format,A.type);for(const qe of A.layerUpdates){const Ie=_e.data.subarray(qe*xe/_e.data.BYTES_PER_ELEMENT,(qe+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,qe,_e.width,_e.height,1,Ge,Ve,Ie)}A.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Ve,_e.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Be,_e.width,_e.height,_e.depth,0,Ge,Ve,_e.data);else if(A.isData3DTexture)mt?(St&&t.texStorage3D(a.TEXTURE_3D,Ue,Be,_e.width,_e.height,_e.depth),q&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ge,Ve,_e.data)):t.texImage3D(a.TEXTURE_3D,0,Be,_e.width,_e.height,_e.depth,0,Ge,Ve,_e.data);else if(A.isFramebufferTexture){if(St)if(mt)t.texStorage2D(a.TEXTURE_2D,Ue,Be,_e.width,_e.height);else{let xe=_e.width,qe=_e.height;for(let Ie=0;Ie<Ue;Ie++)t.texImage2D(a.TEXTURE_2D,Ie,Be,xe,qe,0,Ge,Ve,null),xe>>=1,qe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),v.add(A),xe.onpaint=Pe=>{const ht=Pe.changedElements;for(const Ne of v)ht.includes(Ne.image)&&(Ne.needsUpdate=!0)},xe.requestPaint();return}const qe=0,Ie=a.RGBA,De=a.RGBA,Le=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,qe,Ie,De,Le,_e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(We.length>0){if(mt&&St){const xe=Y(We[0]);t.texStorage2D(a.TEXTURE_2D,Ue,Be,xe.width,xe.height)}for(let xe=0,qe=We.length;xe<qe;xe++)Fe=We[xe],mt?q&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ge,Ve,Fe):t.texImage2D(a.TEXTURE_2D,xe,Be,Ge,Ve,Fe);A.generateMipmaps=!1}else if(mt){if(St){const xe=Y(_e);t.texStorage2D(a.TEXTURE_2D,Ue,Be,xe.width,xe.height)}q&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ge,Ve,_e)}else t.texImage2D(a.TEXTURE_2D,0,Be,Ge,Ve,_e);S(A)&&R(de),we.__version=Oe.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Xe(D,A,K){if(A.image.length!==6)return;const de=ne(D,A),be=A.source;t.bindTexture(a.TEXTURE_CUBE_MAP,D.__webglTexture,a.TEXTURE0+K);const Oe=i.get(be);if(be.version!==Oe.__version||de===!0){t.activeTexture(a.TEXTURE0+K);const we=Zt.getPrimaries(Zt.workingColorSpace),me=A.colorSpace===Rs?null:Zt.getPrimaries(A.colorSpace),_e=A.colorSpace===Rs||we===me?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ge=A.isCompressedTexture||A.image[0].isCompressedTexture,Ve=A.image[0]&&A.image[0].isDataTexture,Be=[];for(let De=0;De<6;De++)!Ge&&!Ve?Be[De]=y(A.image[De],!0,s.maxCubemapSize):Be[De]=Ve?A.image[De].image:A.image[De],Be[De]=Ee(A,Be[De]);const Fe=Be[0],We=l.convert(A.format,A.colorSpace),mt=l.convert(A.type),St=C(A.internalFormat,We,mt,A.normalized,A.colorSpace),q=A.isVideoTexture!==!0,Ue=Oe.__version===void 0||de===!0,xe=be.dataReady;let qe=L(A,Fe);Ce(a.TEXTURE_CUBE_MAP,A);let Ie;if(Ge){q&&Ue&&t.texStorage2D(a.TEXTURE_CUBE_MAP,qe,St,Fe.width,Fe.height);for(let De=0;De<6;De++){Ie=Be[De].mipmaps;for(let Le=0;Le<Ie.length;Le++){const Pe=Ie[Le];A.format!==Or?We!==null?q?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le,0,0,Pe.width,Pe.height,We,Pe.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le,St,Pe.width,Pe.height,0,Pe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le,0,0,Pe.width,Pe.height,We,mt,Pe.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le,St,Pe.width,Pe.height,0,We,mt,Pe.data)}}}else{if(Ie=A.mipmaps,q&&Ue){Ie.length>0&&qe++;const De=Y(Be[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,qe,St,De.width,De.height)}for(let De=0;De<6;De++)if(Ve){q?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,Be[De].width,Be[De].height,We,mt,Be[De].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,St,Be[De].width,Be[De].height,0,We,mt,Be[De].data);for(let Le=0;Le<Ie.length;Le++){const ht=Ie[Le].image[De].image;q?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le+1,0,0,ht.width,ht.height,We,mt,ht.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le+1,St,ht.width,ht.height,0,We,mt,ht.data)}}else{q?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,0,0,We,mt,Be[De]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,0,St,We,mt,Be[De]);for(let Le=0;Le<Ie.length;Le++){const Pe=Ie[Le];q?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le+1,0,0,We,mt,Pe.image[De]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+De,Le+1,St,We,mt,Pe.image[De])}}}S(A)&&R(a.TEXTURE_CUBE_MAP),Oe.__version=be.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function ze(D,A,K,de,be,Oe){const we=l.convert(K.format,K.colorSpace),me=l.convert(K.type),_e=C(K.internalFormat,we,me,K.normalized,K.colorSpace),Ge=i.get(A),Ve=i.get(K);if(Ve.__renderTarget=A,!Ge.__hasExternalTextures){const Be=Math.max(1,A.width>>Oe),Fe=Math.max(1,A.height>>Oe);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?t.texImage3D(be,Oe,_e,Be,Fe,A.depth,0,we,me,null):t.texImage2D(be,Oe,_e,Be,Fe,0,we,me,null)}t.bindFramebuffer(a.FRAMEBUFFER,D),ut(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,de,be,Ve.__webglTexture,0,vt(A)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,de,be,Ve.__webglTexture,Oe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function et(D,A,K){if(a.bindRenderbuffer(a.RENDERBUFFER,D),A.depthBuffer){const de=A.depthTexture,be=de&&de.isDepthTexture?de.type:null,Oe=O(A.stencilBuffer,be),we=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;ut(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(A),Oe,A.width,A.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(A),Oe,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Oe,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,D)}else{const de=A.textures;for(let be=0;be<de.length;be++){const Oe=de[be],we=l.convert(Oe.format,Oe.colorSpace),me=l.convert(Oe.type),_e=C(Oe.internalFormat,we,me,Oe.normalized,Oe.colorSpace);ut(A)?f.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,vt(A),_e,A.width,A.height):K?a.renderbufferStorageMultisample(a.RENDERBUFFER,vt(A),_e,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,_e,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function He(D,A,K){const de=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=i.get(A.depthTexture);if(be.__renderTarget=A,(!be.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),de){if(be.__webglInit===void 0&&(be.__webglInit=!0,A.depthTexture.addEventListener("dispose",U)),be.__webglTexture===void 0){be.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,A.depthTexture);const Ge=l.convert(A.depthTexture.format),Ve=l.convert(A.depthTexture.type);let Be;A.depthTexture.format===Ha?Be=a.DEPTH_COMPONENT24:A.depthTexture.format===wo&&(Be=a.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Be,A.width,A.height,0,Ge,Ve,null)}}else ee(A.depthTexture,0);const Oe=be.__webglTexture,we=vt(A),me=de?a.TEXTURE_CUBE_MAP_POSITIVE_X+K:a.TEXTURE_2D,_e=A.depthTexture.format===wo?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ha)ut(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,me,Oe,0,we):a.framebufferTexture2D(a.FRAMEBUFFER,_e,me,Oe,0);else if(A.depthTexture.format===wo)ut(A)?f.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,me,Oe,0,we):a.framebufferTexture2D(a.FRAMEBUFFER,_e,me,Oe,0);else throw new Error("Unknown depthTexture format")}function Qe(D){const A=i.get(D),K=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const be=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",be)};de.addEventListener("dispose",be),A.__depthDisposeCallback=be}A.__boundDepthTexture=de}if(D.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let de=0;de<6;de++)He(A.__webglFramebuffer[de],D,de);else{const de=D.texture.mipmaps;de&&de.length>0?He(A.__webglFramebuffer[0],D,0):He(A.__webglFramebuffer,D,0)}else if(K){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=a.createRenderbuffer(),et(A.__webglDepthbuffer[de],D,!1);else{const be=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=A.__webglDepthbuffer[de];a.bindRenderbuffer(a.RENDERBUFFER,Oe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Oe)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),et(A.__webglDepthbuffer,D,!1);else{const be=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Oe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Oe)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function ot(D,A,K){const de=i.get(D);A!==void 0&&ze(de.__webglFramebuffer,D,D.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),K!==void 0&&Qe(D)}function at(D){const A=D.texture,K=i.get(D),de=i.get(A);D.addEventListener("dispose",T);const be=D.textures,Oe=D.isWebGLCubeRenderTarget===!0,we=be.length>1;if(we||(de.__webglTexture===void 0&&(de.__webglTexture=a.createTexture()),de.__version=A.version,c.memory.textures++),Oe){K.__webglFramebuffer=[];for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[me]=[];for(let _e=0;_e<A.mipmaps.length;_e++)K.__webglFramebuffer[me][_e]=a.createFramebuffer()}else K.__webglFramebuffer[me]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let me=0;me<A.mipmaps.length;me++)K.__webglFramebuffer[me]=a.createFramebuffer()}else K.__webglFramebuffer=a.createFramebuffer();if(we)for(let me=0,_e=be.length;me<_e;me++){const Ge=i.get(be[me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=a.createTexture(),c.memory.textures++)}if(D.samples>0&&ut(D)===!1){K.__webglMultisampledFramebuffer=a.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let me=0;me<be.length;me++){const _e=be[me];K.__webglColorRenderbuffer[me]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,K.__webglColorRenderbuffer[me]);const Ge=l.convert(_e.format,_e.colorSpace),Ve=l.convert(_e.type),Be=C(_e.internalFormat,Ge,Ve,_e.normalized,_e.colorSpace,D.isXRRenderTarget===!0),Fe=vt(D);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,Be,D.width,D.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+me,a.RENDERBUFFER,K.__webglColorRenderbuffer[me])}a.bindRenderbuffer(a.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=a.createRenderbuffer(),et(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Oe){t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),Ce(a.TEXTURE_CUBE_MAP,A);for(let me=0;me<6;me++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)ze(K.__webglFramebuffer[me][_e],D,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,_e);else ze(K.__webglFramebuffer[me],D,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);S(A)&&R(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(we){for(let me=0,_e=be.length;me<_e;me++){const Ge=be[me],Ve=i.get(Ge);let Be=a.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Be=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Be,Ve.__webglTexture),Ce(Be,Ge),ze(K.__webglFramebuffer,D,Ge,a.COLOR_ATTACHMENT0+me,Be,0),S(Ge)&&R(Be)}t.unbindTexture()}else{let me=a.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(me,de.__webglTexture),Ce(me,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)ze(K.__webglFramebuffer[_e],D,A,a.COLOR_ATTACHMENT0,me,_e);else ze(K.__webglFramebuffer,D,A,a.COLOR_ATTACHMENT0,me,0);S(A)&&R(me),t.unbindTexture()}D.depthBuffer&&Qe(D)}function se(D){const A=D.textures;for(let K=0,de=A.length;K<de;K++){const be=A[K];if(S(be)){const Oe=w(D),we=i.get(be).__webglTexture;t.bindTexture(Oe,we),R(Oe),t.unbindTexture()}}}const yt=[],Bt=[];function j(D){if(D.samples>0){if(ut(D)===!1){const A=D.textures,K=D.width,de=D.height;let be=a.COLOR_BUFFER_BIT;const Oe=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,we=i.get(D),me=A.length>1;if(me)for(let Ge=0;Ge<A.length;Ge++)t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const _e=D.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ge=0;Ge<A.length;Ge++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),me){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,we.__webglColorRenderbuffer[Ge]);const Ve=i.get(A[Ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ve,0)}a.blitFramebuffer(0,0,K,de,0,0,K,de,be,a.NEAREST),h===!0&&(yt.length=0,Bt.length=0,yt.push(a.COLOR_ATTACHMENT0+Ge),D.depthBuffer&&D.resolveDepthBuffer===!1&&(yt.push(Oe),Bt.push(Oe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Bt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),me)for(let Ge=0;Ge<A.length;Ge++){t.bindFramebuffer(a.FRAMEBUFFER,we.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,we.__webglColorRenderbuffer[Ge]);const Ve=i.get(A[Ge]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,we.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,Ve,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const A=D.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function vt(D){return Math.min(s.maxSamples,D.samples)}function ut(D){const A=i.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ct(D){const A=c.render.frame;g.get(D)!==A&&(g.set(D,A),D.update())}function Ee(D,A){const K=D.colorSpace,de=D.format,be=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Th&&K!==Rs&&(Zt.getTransfer(K)===on?(de!==Or||be!==Nr)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",K)),A}function Y(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(d.width=D.naturalWidth||D.width,d.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(d.width=D.displayWidth,d.height=D.displayHeight):(d.width=D.width,d.height=D.height),d}this.allocateTextureUnit=z,this.resetTextureUnits=te,this.getTextureUnits=J,this.setTextureUnits=X,this.setTexture2D=ee,this.setTexture2DArray=ue,this.setTexture3D=V,this.setTextureCube=B,this.rebindTextures=ot,this.setupRenderTarget=at,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ze,this.useMultisampledRTT=ut,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function DN(a,e){function t(i,s=Rs){let l;const c=Zt.getTransfer(s);if(i===Nr)return a.UNSIGNED_BYTE;if(i===g0)return a.UNSIGNED_SHORT_4_4_4_4;if(i===_0)return a.UNSIGNED_SHORT_5_5_5_1;if(i===nM)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===iM)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===eM)return a.BYTE;if(i===tM)return a.SHORT;if(i===vc)return a.UNSIGNED_SHORT;if(i===m0)return a.INT;if(i===_a)return a.UNSIGNED_INT;if(i===Zr)return a.FLOAT;if(i===va)return a.HALF_FLOAT;if(i===rM)return a.ALPHA;if(i===aM)return a.RGB;if(i===Or)return a.RGBA;if(i===Ha)return a.DEPTH_COMPONENT;if(i===wo)return a.DEPTH_STENCIL;if(i===sM)return a.RED;if(i===v0)return a.RED_INTEGER;if(i===Do)return a.RG;if(i===x0)return a.RG_INTEGER;if(i===y0)return a.RGBA_INTEGER;if(i===xh||i===yh||i===Sh||i===Mh)if(c===on)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===xh)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Sh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mh)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===xh)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yh)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Sh)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mh)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===S0||i===M0||i===b0||i===E0)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===S0)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===M0)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===b0)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===E0)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===T0||i===A0||i===R0||i===C0||i===w0||i===bh||i===D0)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(i===T0||i===A0)return c===on?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===R0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===C0)return l.COMPRESSED_R11_EAC;if(i===w0)return l.COMPRESSED_SIGNED_R11_EAC;if(i===bh)return l.COMPRESSED_RG11_EAC;if(i===D0)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===U0||i===L0||i===N0||i===O0||i===P0||i===F0||i===I0||i===z0||i===B0||i===H0||i===G0||i===V0||i===k0||i===X0)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(i===U0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===L0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===N0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===O0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===P0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===F0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===I0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===z0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===B0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===H0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===G0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===V0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===k0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===X0)return c===on?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===W0||i===q0||i===Y0)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(i===W0)return c===on?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===q0)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Y0)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Z0||i===K0||i===Eh||i===j0)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(i===Z0)return l.COMPRESSED_RED_RGTC1_EXT;if(i===K0)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===j0)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xc?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const UN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,LN=`
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

}`;class NN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new kM(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ya({vertexShader:UN,fragmentShader:LN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ir(new zo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ON extends Uo{constructor(e,t){super();const i=this;let s=null,l=1,c=null,f="local-floor",h=1,d=null,g=null,v=null,_=null,x=null,b=null;const M=typeof XRWebGLBinding<"u",y=new NN,S={},R=t.getContextAttributes();let w=null,C=null;const O=[],L=[],U=new Mt;let T=null;const P=new ia;P.viewport=new zn;const I=new ia;I.viewport=new zn;const H=[P,I],k=new E3;let te=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let Se=O[ne];return Se===void 0&&(Se=new ug,O[ne]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(ne){let Se=O[ne];return Se===void 0&&(Se=new ug,O[ne]=Se),Se.getGripSpace()},this.getHand=function(ne){let Se=O[ne];return Se===void 0&&(Se=new ug,O[ne]=Se),Se.getHandSpace()};function X(ne){const Se=L.indexOf(ne.inputSource);if(Se===-1)return;const re=O[Se];re!==void 0&&(re.update(ne.inputSource,ne.frame,d||c),re.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",G);for(let ne=0;ne<O.length;ne++){const Se=L[ne];Se!==null&&(L[ne]=null,O[ne].disconnect(Se))}te=null,J=null,y.reset();for(const ne in S)delete S[ne];e.setRenderTarget(w),x=null,_=null,v=null,s=null,C=null,Ce.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,i.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){f=ne,i.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ne){d=ne},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return v===null&&M&&(v=new XRWebGLBinding(s,t)),v},this.getFrame=function(){return b},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",z),s.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Me=null,Xe=null;R.depth&&(Xe=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=R.stencil?wo:Ha,Me=R.stencil?xc:_a);const ze={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:l};v=this.getBinding(),_=v.createProjectionLayer(ze),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Kr(_.textureWidth,_.textureHeight,{format:Or,type:Nr,depthTexture:new ql(_.textureWidth,_.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const re={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),C=new Kr(x.framebufferWidth,x.framebufferHeight,{format:Or,type:Nr,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(f),Ce.setContext(s),Ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function G(ne){for(let Se=0;Se<ne.removed.length;Se++){const re=ne.removed[Se],Me=L.indexOf(re);Me>=0&&(L[Me]=null,O[Me].disconnect(re))}for(let Se=0;Se<ne.added.length;Se++){const re=ne.added[Se];let Me=L.indexOf(re);if(Me===-1){for(let ze=0;ze<O.length;ze++)if(ze>=L.length){L.push(re),Me=ze;break}else if(L[ze]===null){L[ze]=re,Me=ze;break}if(Me===-1)break}const Xe=O[Me];Xe&&Xe.connect(re)}}const ee=new he,ue=new he;function V(ne,Se,re){ee.setFromMatrixPosition(Se.matrixWorld),ue.setFromMatrixPosition(re.matrixWorld);const Me=ee.distanceTo(ue),Xe=Se.projectionMatrix.elements,ze=re.projectionMatrix.elements,et=Xe[14]/(Xe[10]-1),He=Xe[14]/(Xe[10]+1),Qe=(Xe[9]+1)/Xe[5],ot=(Xe[9]-1)/Xe[5],at=(Xe[8]-1)/Xe[0],se=(ze[8]+1)/ze[0],yt=et*at,Bt=et*se,j=Me/(-at+se),vt=j*-at;if(Se.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(vt),ne.translateZ(j),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse);else{const ut=et+j,Ct=He+j,Ee=yt-vt,Y=Bt+(Me-vt),D=Qe*He/Ct*ut,A=ot*He/Ct*ut;ne.projectionMatrix.makePerspective(Ee,Y,D,A,ut,Ct),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function B(ne,Se){Se===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(Se.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let Se=ne.near,re=ne.far;y.texture!==null&&(y.depthNear>0&&(Se=y.depthNear),y.depthFar>0&&(re=y.depthFar)),k.near=I.near=P.near=Se,k.far=I.far=P.far=re,(te!==k.near||J!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),te=k.near,J=k.far),k.layers.mask=ne.layers.mask|6,P.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;const Me=ne.parent,Xe=k.cameras;B(k,Me);for(let ze=0;ze<Xe.length;ze++)B(Xe[ze],Me);Xe.length===2?V(k,P,I):k.projectionMatrix.copy(P.projectionMatrix),Z(ne,k,Me)};function Z(ne,Se,re){re===null?ne.matrix.copy(Se.matrixWorld):(ne.matrix.copy(re.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(Se.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(Se.projectionMatrix),ne.projectionMatrixInverse.copy(Se.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=tg*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(ne){h=ne,_!==null&&(_.fixedFoveation=ne),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(k)},this.getCameraTexture=function(ne){return S[ne]};let ve=null;function ye(ne,Se){if(g=Se.getViewerPose(d||c),b=Se,g!==null){const re=g.views;x!==null&&(e.setRenderTargetFramebuffer(C,x.framebuffer),e.setRenderTarget(C));let Me=!1;re.length!==k.cameras.length&&(k.cameras.length=0,Me=!0);for(let He=0;He<re.length;He++){const Qe=re[He];let ot=null;if(x!==null)ot=x.getViewport(Qe);else{const se=v.getViewSubImage(_,Qe);ot=se.viewport,He===0&&(e.setRenderTargetTextures(C,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(C))}let at=H[He];at===void 0&&(at=new ia,at.layers.enable(He),at.viewport=new zn,H[He]=at),at.matrix.fromArray(Qe.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Qe.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(ot.x,ot.y,ot.width,ot.height),He===0&&(k.matrix.copy(at.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Me===!0&&k.cameras.push(at)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){v=i.getBinding();const He=v.getDepthInformation(re[0]);He&&He.isValid&&He.texture&&y.init(He,s.renderState)}if(Xe&&Xe.includes("camera-access")&&M){e.state.unbindTexture(),v=i.getBinding();for(let He=0;He<re.length;He++){const Qe=re[He].camera;if(Qe){let ot=S[Qe];ot||(ot=new kM,S[Qe]=ot);const at=v.getCameraImage(Qe);ot.sourceTexture=at}}}}for(let re=0;re<O.length;re++){const Me=L[re],Xe=O[re];Me!==null&&Xe!==void 0&&Xe.update(Me,Se,d||c)}ve&&ve(ne,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),b=null}const Ce=new QM;Ce.setAnimationLoop(ye),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const PN=new Zn,R1=new At;R1.set(-1,0,0,0,1,0,0,0,1);function FN(a,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function i(y,S){S.color.getRGB(y.fogColor.value,WM(a)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,R,w,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),v(y,S)):S.isMeshPhongMaterial?(l(y,S),g(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&x(y,S,C)):S.isMeshMatcapMaterial?(l(y,S),b(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),M(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&f(y,S)):S.isPointsMaterial?h(y,S,R,w):S.isSpriteMaterial?d(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Ki&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Ki&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const R=e.get(S),w=R.envMap,C=R.envMapRotation;w&&(y.envMap.value=w,y.envMapRotation.value.setFromMatrix4(PN.makeRotationFromEuler(C)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(R1),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function f(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function h(y,S,R,w){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*R,y.scale.value=w*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function d(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function x(y,S,R){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Ki&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=R.texture,y.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function M(y,S){const R=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(R.matrixWorld),y.nearDistance.value=R.shadow.camera.near,y.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function IN(a,e,t,i){let s={},l={},c=[];const f=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,w){const C=w.program;i.uniformBlockBinding(R,C)}function d(R,w){let C=s[R.id];C===void 0&&(b(R),C=g(R),s[R.id]=C,R.addEventListener("dispose",y));const O=w.program;i.updateUBOMapping(R,O);const L=e.render.frame;l[R.id]!==L&&(_(R),l[R.id]=L)}function g(R){const w=v();R.__bindingPointIndex=w;const C=a.createBuffer(),O=R.__size,L=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,O,L),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,w,C),C}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const w=s[R.id],C=R.uniforms,O=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,w);for(let L=0,U=C.length;L<U;L++){const T=Array.isArray(C[L])?C[L]:[C[L]];for(let P=0,I=T.length;P<I;P++){const H=T[P];if(x(H,L,P,O)===!0){const k=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let J=0;for(let X=0;X<te.length;X++){const z=te[X],G=M(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,a.bufferSubData(a.UNIFORM_BUFFER,k+J,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):ArrayBuffer.isView(z)?H.__data.set(new z.constructor(z.buffer,z.byteOffset,H.__data.length)):(z.toArray(H.__data,J),J+=G.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,k,H.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function x(R,w,C,O){const L=R.value,U=w+"_"+C;if(O[U]===void 0)return typeof L=="number"||typeof L=="boolean"?O[U]=L:ArrayBuffer.isView(L)?O[U]=L.slice():O[U]=L.clone(),!0;{const T=O[U];if(typeof L=="number"||typeof L=="boolean"){if(T!==L)return O[U]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(T.equals(L)===!1)return T.copy(L),!0}}return!1}function b(R){const w=R.uniforms;let C=0;const O=16;for(let U=0,T=w.length;U<T;U++){const P=Array.isArray(w[U])?w[U]:[w[U]];for(let I=0,H=P.length;I<H;I++){const k=P[I],te=Array.isArray(k.value)?k.value:[k.value];for(let J=0,X=te.length;J<X;J++){const z=te[J],G=M(z),ee=C%O,ue=ee%G.boundary,V=ee+ue;C+=ue,V!==0&&O-V<G.storage&&(C+=O-V),k.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=C,C+=G.storage}}}const L=C%O;return L>0&&(C+=O-L),R.__size=C,R.__cache={},this}function M(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(w.boundary=16,w.storage=R.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",R),w}function y(R){const w=R.target;w.removeEventListener("dispose",y);const C=c.indexOf(w.__bindingPointIndex);c.splice(C,1),a.deleteBuffer(s[w.id]),delete s[w.id],delete l[w.id]}function S(){for(const R in s)a.deleteBuffer(s[R]);c=[],s={},l={}}return{bind:h,update:d,dispose:S}}const zN=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ba=null;function BN(){return ba===null&&(ba=new FM(zN,16,16,Do,va),ba.name="DFG_LUT",ba.minFilter=Yn,ba.magFilter=Yn,ba.wrapS=mr,ba.wrapT=mr,ba.generateMipmaps=!1,ba.needsUpdate=!0),ba}class HN{constructor(e={}){const{canvas:t=Vw(),context:i=null,depth:s=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:_=!1,outputBufferType:x=Nr}=e;this.isWebGLRenderer=!0;let b;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=i.getContextAttributes().alpha}else b=c;const M=x,y=new Set([y0,x0,v0]),S=new Set([Nr,_a,vc,xc,g0,_0]),R=new Uint32Array(4),w=new Int32Array(4),C=new he;let O=null,L=null;const U=[],T=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let H=!1,k=null;this._outputColorSpace=Pr;let te=0,J=0,X=null,z=-1,G=null;const ee=new zn,ue=new zn;let V=null;const B=new tn(0);let Z=0,ve=t.width,ye=t.height,Ce=1,ne=null,Se=null;const re=new zn(0,0,ve,ye),Me=new zn(0,0,ve,ye);let Xe=!1;const ze=new IM;let et=!1,He=!1;const Qe=new Zn,ot=new he,at=new zn,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Bt(){return X===null?Ce:1}let j=i;function vt(N,$){return t.getContext(N,$)}try{const N={alpha:!0,depth:s,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$m}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),j===null){const $="webgl2";if(j=vt($,N),j===null)throw vt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw jt("WebGLRenderer: "+N.message),N}let ut,Ct,Ee,Y,D,A,K,de,be,Oe,we,me,_e,Ge,Ve,Be,Fe,We,mt,St,q,Ue,xe;function qe(){ut=new BU(j),ut.init(),q=new DN(j,ut),Ct=new UU(j,ut,e,q),Ee=new CN(j,ut),Ct.reversedDepthBuffer&&_&&Ee.buffers.depth.setReversed(!0),Y=new VU(j),D=new pN,A=new wN(j,ut,Ee,D,Ct,q,Y),K=new zU(I),de=new A3(j),Ue=new wU(j,de),be=new HU(j,de,Y,Ue),Oe=new XU(j,be,de,Ue,Y),We=new kU(j,Ct,A),Ve=new LU(D),we=new dN(I,K,ut,Ct,Ue,Ve),me=new FN(I,D),_e=new gN,Ge=new MN(ut),Fe=new CU(I,K,Ee,Oe,b,h),Be=new RN(I,Oe,Ct),xe=new IN(j,Y,Ct,Ee),mt=new DU(j,ut,Y),St=new GU(j,ut,Y),Y.programs=we.programs,I.capabilities=Ct,I.extensions=ut,I.properties=D,I.renderLists=_e,I.shadowMap=Be,I.state=Ee,I.info=Y}qe(),M!==Nr&&(P=new qU(M,t.width,t.height,s,l));const Ie=new ON(I,j);this.xr=Ie,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=ut.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ut.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(N){N!==void 0&&(Ce=N,this.setSize(ve,ye,!1))},this.getSize=function(N){return N.set(ve,ye)},this.setSize=function(N,$,ce=!0){if(Ie.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=N,ye=$,t.width=Math.floor(N*Ce),t.height=Math.floor($*Ce),ce===!0&&(t.style.width=N+"px",t.style.height=$+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,N,$)},this.getDrawingBufferSize=function(N){return N.set(ve*Ce,ye*Ce).floor()},this.setDrawingBufferSize=function(N,$,ce){ve=N,ye=$,Ce=ce,t.width=Math.floor(N*ce),t.height=Math.floor($*ce),this.setViewport(0,0,N,$)},this.setEffects=function(N){if(M===Nr){jt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let $=0;$<N.length;$++)if(N[$].isOutputPass===!0){xt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ee)},this.getViewport=function(N){return N.copy(re)},this.setViewport=function(N,$,ce,ae){N.isVector4?re.set(N.x,N.y,N.z,N.w):re.set(N,$,ce,ae),Ee.viewport(ee.copy(re).multiplyScalar(Ce).round())},this.getScissor=function(N){return N.copy(Me)},this.setScissor=function(N,$,ce,ae){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,$,ce,ae),Ee.scissor(ue.copy(Me).multiplyScalar(Ce).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(N){Ee.setScissorTest(Xe=N)},this.setOpaqueSort=function(N){ne=N},this.setTransparentSort=function(N){Se=N},this.getClearColor=function(N){return N.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(N=!0,$=!0,ce=!0){let ae=0;if(N){let oe=!1;if(X!==null){const Ye=X.texture.format;oe=y.has(Ye)}if(oe){const Ye=X.texture.type,Ke=S.has(Ye),Ze=Fe.getClearColor(),it=Fe.getClearAlpha(),$e=Ze.r,dt=Ze.g,Dt=Ze.b;Ke?(R[0]=$e,R[1]=dt,R[2]=Dt,R[3]=it,j.clearBufferuiv(j.COLOR,0,R)):(w[0]=$e,w[1]=dt,w[2]=Dt,w[3]=it,j.clearBufferiv(j.COLOR,0,w))}else ae|=j.COLOR_BUFFER_BIT}$&&(ae|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&j.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),k=N},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),Fe.dispose(),_e.dispose(),Ge.dispose(),D.dispose(),K.dispose(),Oe.dispose(),Ue.dispose(),xe.dispose(),we.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Lt),Ie.removeEventListener("sessionend",xn),Qt.stop()};function De(N){N.preventDefault(),hM("WebGLRenderer: Context Lost."),H=!0}function Le(){hM("WebGLRenderer: Context Restored."),H=!1;const N=Y.autoReset,$=Be.enabled,ce=Be.autoUpdate,ae=Be.needsUpdate,oe=Be.type;qe(),Y.autoReset=N,Be.enabled=$,Be.autoUpdate=ce,Be.needsUpdate=ae,Be.type=oe}function Pe(N){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function ht(N){const $=N.target;$.removeEventListener("dispose",ht),Ne($)}function Ne(N){ft(N),D.remove(N)}function ft(N){const $=D.get(N).programs;$!==void 0&&($.forEach(function(ce){we.releaseProgram(ce)}),N.isShaderMaterial&&we.releaseShaderCache(N))}this.renderBufferDirect=function(N,$,ce,ae,oe,Ye){$===null&&($=se);const Ke=oe.isMesh&&oe.matrixWorld.determinant()<0,Ze=bn(N,$,ce,ae,oe);Ee.setMaterial(ae,Ke);let it=ce.index,$e=1;if(ae.wireframe===!0){if(it=be.getWireframeAttribute(ce),it===void 0)return;$e=2}const dt=ce.drawRange,Dt=ce.attributes.position;let ct=dt.start*$e,Jt=(dt.start+dt.count)*$e;Ye!==null&&(ct=Math.max(ct,Ye.start*$e),Jt=Math.min(Jt,(Ye.start+Ye.count)*$e)),it!==null?(ct=Math.max(ct,0),Jt=Math.min(Jt,it.count)):Dt!=null&&(ct=Math.max(ct,0),Jt=Math.min(Jt,Dt.count));const wn=Jt-ct;if(wn<0||wn===1/0)return;Ue.setup(oe,ae,Ze,ce,it);let yn,ln=mt;if(it!==null&&(yn=de.get(it),ln=St,ln.setIndex(yn)),oe.isMesh)ae.wireframe===!0?(Ee.setLineWidth(ae.wireframeLinewidth*Bt()),ln.setMode(j.LINES)):ln.setMode(j.TRIANGLES);else if(oe.isLine){let un=ae.linewidth;un===void 0&&(un=1),Ee.setLineWidth(un*Bt()),oe.isLineSegments?ln.setMode(j.LINES):oe.isLineLoop?ln.setMode(j.LINE_LOOP):ln.setMode(j.LINE_STRIP)}else oe.isPoints?ln.setMode(j.POINTS):oe.isSprite&&ln.setMode(j.TRIANGLES);if(oe.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))ln.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const un=oe._multiDrawStarts,Je=oe._multiDrawCounts,Ui=oe._multiDrawCount,Gt=it?de.get(it).bytesPerElement:1,oi=D.get(ae).currentProgram.getUniforms();for(let vr=0;vr<Ui;vr++)oi.setValue(j,"_gl_DrawID",vr),ln.render(un[vr]/Gt,Je[vr])}else if(oe.isInstancedMesh)ln.renderInstances(ct,wn,oe.count);else if(ce.isInstancedBufferGeometry){const un=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Je=Math.min(ce.instanceCount,un);ln.renderInstances(ct,wn,Je)}else ln.render(ct,wn)};function tt(N,$,ce){N.transparent===!0&&N.side===za&&N.forceSinglePass===!1?(N.side=Ki,N.needsUpdate=!0,Qn(N,$,ce),N.side=As,N.needsUpdate=!0,Qn(N,$,ce),N.side=za):Qn(N,$,ce)}this.compile=function(N,$,ce=null){ce===null&&(ce=N),L=Ge.get(ce),L.init($),T.push(L),ce.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),N!==ce&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test($.layers)&&(L.pushLight(oe),oe.castShadow&&L.pushShadow(oe))}),L.setupLights();const ae=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ye=oe.material;if(Ye)if(Array.isArray(Ye))for(let Ke=0;Ke<Ye.length;Ke++){const Ze=Ye[Ke];tt(Ze,ce,oe),ae.add(Ze)}else tt(Ye,ce,oe),ae.add(Ye)}),L=T.pop(),ae},this.compileAsync=function(N,$,ce=null){const ae=this.compile(N,$,ce);return new Promise(oe=>{function Ye(){if(ae.forEach(function(Ke){D.get(Ke).currentProgram.isReady()&&ae.delete(Ke)}),ae.size===0){oe(N);return}setTimeout(Ye,10)}ut.get("KHR_parallel_shader_compile")!==null?Ye():setTimeout(Ye,10)})};let gt=null;function Cn(N){gt&&gt(N)}function Lt(){Qt.stop()}function xn(){Qt.start()}const Qt=new QM;Qt.setAnimationLoop(Cn),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(N){gt=N,Ie.setAnimationLoop(N),N===null?Qt.stop():Qt.start()},Ie.addEventListener("sessionstart",Lt),Ie.addEventListener("sessionend",xn),this.render=function(N,$){if($!==void 0&&$.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;k!==null&&k.renderStart(N,$);const ce=Ie.enabled===!0&&Ie.isPresenting===!0,ae=P!==null&&(X===null||ce)&&P.begin(I,X);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera($),$=Ie.getCamera()),N.isScene===!0&&N.onBeforeRender(I,N,$,X),L=Ge.get(N,T.length),L.init($),L.state.textureUnits=A.getTextureUnits(),T.push(L),Qe.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ze.setFromProjectionMatrix(Qe,xa,$.reversedDepth),He=this.localClippingEnabled,et=Ve.init(this.clippingPlanes,He),O=_e.get(N,U.length),O.init(),U.push(O),Ie.enabled===!0&&Ie.isPresenting===!0){const Ke=I.xr.getDepthSensingMesh();Ke!==null&&Et(Ke,$,-1/0,I.sortObjects)}Et(N,$,0,I.sortObjects),O.finish(),I.sortObjects===!0&&O.sort(ne,Se),yt=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,yt&&Fe.addToRenderList(O,N),this.info.render.frame++,et===!0&&Ve.beginShadows();const oe=L.state.shadowsArray;if(Be.render(oe,N,$),et===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&P.hasRenderPass())===!1){const Ke=O.opaque,Ze=O.transmissive;if(L.setupLights(),$.isArrayCamera){const it=$.cameras;if(Ze.length>0)for(let $e=0,dt=it.length;$e<dt;$e++){const Dt=it[$e];Ht(Ke,Ze,N,Dt)}yt&&Fe.render(N);for(let $e=0,dt=it.length;$e<dt;$e++){const Dt=it[$e];wt(O,N,Dt,Dt.viewport)}}else Ze.length>0&&Ht(Ke,Ze,N,$),yt&&Fe.render(N),wt(O,N,$)}X!==null&&J===0&&(A.updateMultisampleRenderTarget(X),A.updateRenderTargetMipmap(X)),ae&&P.end(I),N.isScene===!0&&N.onAfterRender(I,N,$),Ue.resetDefaultState(),z=-1,G=null,T.pop(),T.length>0?(L=T[T.length-1],A.setTextureUnits(L.state.textureUnits),et===!0&&Ve.setGlobalState(I.clippingPlanes,L.state.camera)):L=null,U.pop(),U.length>0?O=U[U.length-1]:O=null,k!==null&&k.renderEnd()};function Et(N,$,ce,ae){if(N.visible===!1)return;if(N.layers.test($.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update($);else if(N.isLightProbeGrid)L.pushLightProbeGrid(N);else if(N.isLight)L.pushLight(N),N.castShadow&&L.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||ze.intersectsSprite(N)){ae&&at.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Qe);const Ke=Oe.update(N),Ze=N.material;Ze.visible&&O.push(N,Ke,Ze,ce,at.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||ze.intersectsObject(N))){const Ke=Oe.update(N),Ze=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),at.copy(N.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),at.copy(Ke.boundingSphere.center)),at.applyMatrix4(N.matrixWorld).applyMatrix4(Qe)),Array.isArray(Ze)){const it=Ke.groups;for(let $e=0,dt=it.length;$e<dt;$e++){const Dt=it[$e],ct=Ze[Dt.materialIndex];ct&&ct.visible&&O.push(N,Ke,ct,ce,at.z,Dt)}}else Ze.visible&&O.push(N,Ke,Ze,ce,at.z,null)}}const Ye=N.children;for(let Ke=0,Ze=Ye.length;Ke<Ze;Ke++)Et(Ye[Ke],$,ce,ae)}function wt(N,$,ce,ae){const{opaque:oe,transmissive:Ye,transparent:Ke}=N;L.setupLightsView(ce),et===!0&&Ve.setGlobalState(I.clippingPlanes,ce),ae&&Ee.viewport(ee.copy(ae)),oe.length>0&&jn(oe,$,ce),Ye.length>0&&jn(Ye,$,ce),Ke.length>0&&jn(Ke,$,ce),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ht(N,$,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[ae.id]===void 0){const ct=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[ae.id]=new Kr(1,1,{generateMipmaps:!0,type:ct?va:Nr,minFilter:Co,samples:Math.max(4,Ct.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Zt.workingColorSpace})}const Ye=L.state.transmissionRenderTarget[ae.id],Ke=ae.viewport||ee;Ye.setSize(Ke.z*I.transmissionResolutionScale,Ke.w*I.transmissionResolutionScale);const Ze=I.getRenderTarget(),it=I.getActiveCubeFace(),$e=I.getActiveMipmapLevel();I.setRenderTarget(Ye),I.getClearColor(B),Z=I.getClearAlpha(),Z<1&&I.setClearColor(16777215,.5),I.clear(),yt&&Fe.render(ce);const dt=I.toneMapping;I.toneMapping=ga;const Dt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),L.setupLightsView(ae),et===!0&&Ve.setGlobalState(I.clippingPlanes,ae),jn(N,ce,ae),A.updateMultisampleRenderTarget(Ye),A.updateRenderTargetMipmap(Ye),ut.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Jt=0,wn=$.length;Jt<wn;Jt++){const yn=$[Jt],{object:ln,geometry:un,material:Je,group:Ui}=yn;if(Je.side===za&&ln.layers.test(ae.layers)){const Gt=Je.side;Je.side=Ki,Je.needsUpdate=!0,dn(ln,ce,ae,un,Je,Ui),Je.side=Gt,Je.needsUpdate=!0,ct=!0}}ct===!0&&(A.updateMultisampleRenderTarget(Ye),A.updateRenderTargetMipmap(Ye))}I.setRenderTarget(Ze,it,$e),I.setClearColor(B,Z),Dt!==void 0&&(ae.viewport=Dt),I.toneMapping=dt}function jn(N,$,ce){const ae=$.isScene===!0?$.overrideMaterial:null;for(let oe=0,Ye=N.length;oe<Ye;oe++){const Ke=N[oe],{object:Ze,geometry:it,group:$e}=Ke;let dt=Ke.material;dt.allowOverride===!0&&ae!==null&&(dt=ae),Ze.layers.test(ce.layers)&&dn(Ze,$,ce,it,dt,$e)}}function dn(N,$,ce,ae,oe,Ye){N.onBeforeRender(I,$,ce,ae,oe,Ye),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(I,$,ce,ae,N,Ye),oe.transparent===!0&&oe.side===za&&oe.forceSinglePass===!1?(oe.side=Ki,oe.needsUpdate=!0,I.renderBufferDirect(ce,$,ae,oe,N,Ye),oe.side=As,oe.needsUpdate=!0,I.renderBufferDirect(ce,$,ae,oe,N,Ye),oe.side=za):I.renderBufferDirect(ce,$,ae,oe,N,Ye),N.onAfterRender(I,$,ce,ae,oe,Ye)}function Qn(N,$,ce){$.isScene!==!0&&($=se);const ae=D.get(N),oe=L.state.lights,Ye=L.state.shadowsArray,Ke=oe.state.version,Ze=we.getParameters(N,oe.state,Ye,$,ce,L.state.lightProbeGridArray),it=we.getProgramCacheKey(Ze);let $e=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?$.environment:null,ae.fog=$.fog;const dt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=K.get(N.envMap||ae.environment,dt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?$.environmentRotation:N.envMapRotation,$e===void 0&&(N.addEventListener("dispose",ht),$e=new Map,ae.programs=$e);let Dt=$e.get(it);if(Dt!==void 0){if(ae.currentProgram===Dt&&ae.lightsStateVersion===Ke)return Mn(N,Ze),Dt}else Ze.uniforms=we.getUniforms(N),k!==null&&N.isNodeMaterial&&k.build(N,ce,Ze),N.onBeforeCompile(Ze,I),Dt=we.acquireProgram(Ze,it),$e.set(it,Dt),ae.uniforms=Ze.uniforms;const ct=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(ct.clippingPlanes=Ve.uniform),Mn(N,Ze),ae.needsLights=zr(N),ae.lightsStateVersion=Ke,ae.needsLights&&(ct.ambientLightColor.value=oe.state.ambient,ct.lightProbe.value=oe.state.probe,ct.directionalLights.value=oe.state.directional,ct.directionalLightShadows.value=oe.state.directionalShadow,ct.spotLights.value=oe.state.spot,ct.spotLightShadows.value=oe.state.spotShadow,ct.rectAreaLights.value=oe.state.rectArea,ct.ltc_1.value=oe.state.rectAreaLTC1,ct.ltc_2.value=oe.state.rectAreaLTC2,ct.pointLights.value=oe.state.point,ct.pointLightShadows.value=oe.state.pointShadow,ct.hemisphereLights.value=oe.state.hemi,ct.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,ct.spotLightMatrix.value=oe.state.spotLightMatrix,ct.spotLightMap.value=oe.state.spotLightMap,ct.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=L.state.lightProbeGridArray.length>0,ae.currentProgram=Dt,ae.uniformsList=null,Dt}function wi(N){if(N.uniformsList===null){const $=N.currentProgram.getUniforms();N.uniformsList=rd.seqWithValue($.seq,N.uniforms)}return N.uniformsList}function Mn(N,$){const ce=D.get(N);ce.outputColorSpace=$.outputColorSpace,ce.batching=$.batching,ce.batchingColor=$.batchingColor,ce.instancing=$.instancing,ce.instancingColor=$.instancingColor,ce.instancingMorph=$.instancingMorph,ce.skinning=$.skinning,ce.morphTargets=$.morphTargets,ce.morphNormals=$.morphNormals,ce.morphColors=$.morphColors,ce.morphTargetsCount=$.morphTargetsCount,ce.numClippingPlanes=$.numClippingPlanes,ce.numIntersection=$.numClipIntersection,ce.vertexAlphas=$.vertexAlphas,ce.vertexTangents=$.vertexTangents,ce.toneMapping=$.toneMapping}function Pn(N,$){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;C.setFromMatrixPosition($.matrixWorld);for(let ce=0,ae=N.length;ce<ae;ce++){const oe=N[ce];if(oe.texture!==null&&oe.boundingBox.containsPoint(C))return oe}return null}function bn(N,$,ce,ae,oe){$.isScene!==!0&&($=se),A.resetTextureUnits();const Ye=$.fog,Ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?$.environment:null,Ze=X===null?I.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Zt.workingColorSpace,it=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,$e=K.get(ae.envMap||Ke,it),dt=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Dt=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),ct=!!ce.morphAttributes.position,Jt=!!ce.morphAttributes.normal,wn=!!ce.morphAttributes.color;let yn=ga;ae.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(yn=I.toneMapping);const ln=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,un=ln!==void 0?ln.length:0,Je=D.get(ae),Ui=L.state.lights;if(et===!0&&(He===!0||N!==G)){const an=N===G&&ae.id===z;Ve.setState(ae,N,an)}let Gt=!1;ae.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Ui.state.version||Je.outputColorSpace!==Ze||oe.isBatchedMesh&&Je.batching===!1||!oe.isBatchedMesh&&Je.batching===!0||oe.isBatchedMesh&&Je.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Je.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Je.instancing===!1||!oe.isInstancedMesh&&Je.instancing===!0||oe.isSkinnedMesh&&Je.skinning===!1||!oe.isSkinnedMesh&&Je.skinning===!0||oe.isInstancedMesh&&Je.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Je.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Je.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Je.instancingMorph===!1&&oe.morphTexture!==null||Je.envMap!==$e||ae.fog===!0&&Je.fog!==Ye||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ve.numPlanes||Je.numIntersection!==Ve.numIntersection)||Je.vertexAlphas!==dt||Je.vertexTangents!==Dt||Je.morphTargets!==ct||Je.morphNormals!==Jt||Je.morphColors!==wn||Je.toneMapping!==yn||Je.morphTargetsCount!==un||!!Je.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(Gt=!0):(Gt=!0,Je.__version=ae.version);let oi=Je.currentProgram;Gt===!0&&(oi=Qn(ae,$,oe),k&&ae.isNodeMaterial&&k.onUpdateProgram(ae,oi,Je));let vr=!1,ra=!1,xr=!1;const cn=oi.getUniforms(),Dn=Je.uniforms;if(Ee.useProgram(oi.program)&&(vr=!0,ra=!0,xr=!0),ae.id!==z&&(z=ae.id,ra=!0),Je.needsLights){const an=Pn(L.state.lightProbeGridArray,oe);Je.lightProbeGrid!==an&&(Je.lightProbeGrid=an,ra=!0)}if(vr||G!==N){Ee.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),cn.setValue(j,"projectionMatrix",N.projectionMatrix),cn.setValue(j,"viewMatrix",N.matrixWorldInverse);const Ea=cn.map.cameraPosition;Ea!==void 0&&Ea.setValue(j,ot.setFromMatrixPosition(N.matrixWorld)),Ct.logarithmicDepthBuffer&&cn.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&cn.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),G!==N&&(G=N,ra=!0,xr=!0)}if(Je.needsLights&&(Ui.state.directionalShadowMap.length>0&&cn.setValue(j,"directionalShadowMap",Ui.state.directionalShadowMap,A),Ui.state.spotShadowMap.length>0&&cn.setValue(j,"spotShadowMap",Ui.state.spotShadowMap,A),Ui.state.pointShadowMap.length>0&&cn.setValue(j,"pointShadowMap",Ui.state.pointShadowMap,A)),oe.isSkinnedMesh){cn.setOptional(j,oe,"bindMatrix"),cn.setOptional(j,oe,"bindMatrixInverse");const an=oe.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),cn.setValue(j,"boneTexture",an.boneTexture,A))}oe.isBatchedMesh&&(cn.setOptional(j,oe,"batchingTexture"),cn.setValue(j,"batchingTexture",oe._matricesTexture,A),cn.setOptional(j,oe,"batchingIdTexture"),cn.setValue(j,"batchingIdTexture",oe._indirectTexture,A),cn.setOptional(j,oe,"batchingColorTexture"),oe._colorsTexture!==null&&cn.setValue(j,"batchingColorTexture",oe._colorsTexture,A));const aa=ce.morphAttributes;if((aa.position!==void 0||aa.normal!==void 0||aa.color!==void 0)&&We.update(oe,ce,oi),(ra||Je.receiveShadow!==oe.receiveShadow)&&(Je.receiveShadow=oe.receiveShadow,cn.setValue(j,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&$.environment!==null&&(Dn.envMapIntensity.value=$.environmentIntensity),Dn.dfgLUT!==void 0&&(Dn.dfgLUT.value=BN()),ra){if(cn.setValue(j,"toneMappingExposure",I.toneMappingExposure),Je.needsLights&&Di(Dn,xr),Ye&&ae.fog===!0&&me.refreshFogUniforms(Dn,Ye),me.refreshMaterialUniforms(Dn,ae,Ce,ye,L.state.transmissionRenderTarget[N.id]),Je.needsLights&&Je.lightProbeGrid){const an=Je.lightProbeGrid;Dn.probesSH.value=an.texture,Dn.probesMin.value.copy(an.boundingBox.min),Dn.probesMax.value.copy(an.boundingBox.max),Dn.probesResolution.value.copy(an.resolution)}rd.upload(j,wi(Je),Dn,A)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(rd.upload(j,wi(Je),Dn,A),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&cn.setValue(j,"center",oe.center),cn.setValue(j,"modelViewMatrix",oe.modelViewMatrix),cn.setValue(j,"normalMatrix",oe.normalMatrix),cn.setValue(j,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const an=ae.uniformsGroups;for(let Ea=0,Ps=an.length;Ea<Ps;Ea++){const Ho=an[Ea];xe.update(Ho,oi),xe.bind(Ho,oi)}}return oi}function Di(N,$){N.ambientLightColor.needsUpdate=$,N.lightProbe.needsUpdate=$,N.directionalLights.needsUpdate=$,N.directionalLightShadows.needsUpdate=$,N.pointLights.needsUpdate=$,N.pointLightShadows.needsUpdate=$,N.spotLights.needsUpdate=$,N.spotLightShadows.needsUpdate=$,N.rectAreaLights.needsUpdate=$,N.hemisphereLights.needsUpdate=$}function zr(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(N,$,ce){const ae=D.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),D.get(N.texture).__webglTexture=$,D.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,$){const ce=D.get(N);ce.__webglFramebuffer=$,ce.__useDefaultFramebuffer=$===void 0};const En=j.createFramebuffer();this.setRenderTarget=function(N,$=0,ce=0){X=N,te=$,J=ce;let ae=null,oe=!1,Ye=!1;if(N){const Ze=D.get(N);if(Ze.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(j.FRAMEBUFFER,Ze.__webglFramebuffer),ee.copy(N.viewport),ue.copy(N.scissor),V=N.scissorTest,Ee.viewport(ee),Ee.scissor(ue),Ee.setScissorTest(V),z=-1;return}else if(Ze.__webglFramebuffer===void 0)A.setupRenderTarget(N);else if(Ze.__hasExternalTextures)A.rebindTextures(N,D.get(N.texture).__webglTexture,D.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const dt=N.depthTexture;if(Ze.__boundDepthTexture!==dt){if(dt!==null&&D.has(dt)&&(N.width!==dt.image.width||N.height!==dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(N)}}const it=N.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ye=!0);const $e=D.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray($e[$])?ae=$e[$][ce]:ae=$e[$],oe=!0):N.samples>0&&A.useMultisampledRTT(N)===!1?ae=D.get(N).__webglMultisampledFramebuffer:Array.isArray($e)?ae=$e[ce]:ae=$e,ee.copy(N.viewport),ue.copy(N.scissor),V=N.scissorTest}else ee.copy(re).multiplyScalar(Ce).floor(),ue.copy(Me).multiplyScalar(Ce).floor(),V=Xe;if(ce!==0&&(ae=En),Ee.bindFramebuffer(j.FRAMEBUFFER,ae)&&Ee.drawBuffers(N,ae),Ee.viewport(ee),Ee.scissor(ue),Ee.setScissorTest(V),oe){const Ze=D.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Ze.__webglTexture,ce)}else if(Ye){const Ze=$;for(let it=0;it<N.textures.length;it++){const $e=D.get(N.textures[it]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+it,$e.__webglTexture,ce,Ze)}}else if(N!==null&&ce!==0){const Ze=D.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ze.__webglTexture,ce)}z=-1},this.readRenderTargetPixels=function(N,$,ce,ae,oe,Ye,Ke,Ze=0){if(!(N&&N.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=D.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){Ee.bindFramebuffer(j.FRAMEBUFFER,it);try{const $e=N.textures[Ze],dt=$e.format,Dt=$e.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ze),!Ct.textureFormatReadable(dt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Dt)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=N.width-ae&&ce>=0&&ce<=N.height-oe&&j.readPixels($,ce,ae,oe,q.convert(dt),q.convert(Dt),Ye)}finally{const $e=X!==null?D.get(X).__webglFramebuffer:null;Ee.bindFramebuffer(j.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(N,$,ce,ae,oe,Ye,Ke,Ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=D.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it)if($>=0&&$<=N.width-ae&&ce>=0&&ce<=N.height-oe){Ee.bindFramebuffer(j.FRAMEBUFFER,it);const $e=N.textures[Ze],dt=$e.format,Dt=$e.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ze),!Ct.textureFormatReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ct),j.bufferData(j.PIXEL_PACK_BUFFER,Ye.byteLength,j.STREAM_READ),j.readPixels($,ce,ae,oe,q.convert(dt),q.convert(Dt),0);const Jt=X!==null?D.get(X).__webglFramebuffer:null;Ee.bindFramebuffer(j.FRAMEBUFFER,Jt);const wn=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await kw(j,wn,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ct),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ye),j.deleteBuffer(ct),j.deleteSync(wn),Ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,$=null,ce=0){const ae=Math.pow(2,-ce),oe=Math.floor(N.image.width*ae),Ye=Math.floor(N.image.height*ae),Ke=$!==null?$.x:0,Ze=$!==null?$.y:0;A.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,Ke,Ze,oe,Ye),Ee.unbindTexture()};const Pt=j.createFramebuffer(),Hi=j.createFramebuffer();this.copyTextureToTexture=function(N,$,ce=null,ae=null,oe=0,Ye=0){let Ke,Ze,it,$e,dt,Dt,ct,Jt,wn;const yn=N.isCompressedTexture?N.mipmaps[Ye]:N.image;if(ce!==null)Ke=ce.max.x-ce.min.x,Ze=ce.max.y-ce.min.y,it=ce.isBox3?ce.max.z-ce.min.z:1,$e=ce.min.x,dt=ce.min.y,Dt=ce.isBox3?ce.min.z:0;else{const Dn=Math.pow(2,-oe);Ke=Math.floor(yn.width*Dn),Ze=Math.floor(yn.height*Dn),N.isDataArrayTexture?it=yn.depth:N.isData3DTexture?it=Math.floor(yn.depth*Dn):it=1,$e=0,dt=0,Dt=0}ae!==null?(ct=ae.x,Jt=ae.y,wn=ae.z):(ct=0,Jt=0,wn=0);const ln=q.convert($.format),un=q.convert($.type);let Je;$.isData3DTexture?(A.setTexture3D($,0),Je=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(A.setTexture2DArray($,0),Je=j.TEXTURE_2D_ARRAY):(A.setTexture2D($,0),Je=j.TEXTURE_2D),Ee.activeTexture(j.TEXTURE0),Ee.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),Ee.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),Ee.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const Ui=Ee.getParameter(j.UNPACK_ROW_LENGTH),Gt=Ee.getParameter(j.UNPACK_IMAGE_HEIGHT),oi=Ee.getParameter(j.UNPACK_SKIP_PIXELS),vr=Ee.getParameter(j.UNPACK_SKIP_ROWS),ra=Ee.getParameter(j.UNPACK_SKIP_IMAGES);Ee.pixelStorei(j.UNPACK_ROW_LENGTH,yn.width),Ee.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yn.height),Ee.pixelStorei(j.UNPACK_SKIP_PIXELS,$e),Ee.pixelStorei(j.UNPACK_SKIP_ROWS,dt),Ee.pixelStorei(j.UNPACK_SKIP_IMAGES,Dt);const xr=N.isDataArrayTexture||N.isData3DTexture,cn=$.isDataArrayTexture||$.isData3DTexture;if(N.isDepthTexture){const Dn=D.get(N),aa=D.get($),an=D.get(Dn.__renderTarget),Ea=D.get(aa.__renderTarget);Ee.bindFramebuffer(j.READ_FRAMEBUFFER,an.__webglFramebuffer),Ee.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ea.__webglFramebuffer);for(let Ps=0;Ps<it;Ps++)xr&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get(N).__webglTexture,oe,Dt+Ps),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,D.get($).__webglTexture,Ye,wn+Ps)),j.blitFramebuffer($e,dt,Ke,Ze,ct,Jt,Ke,Ze,j.DEPTH_BUFFER_BIT,j.NEAREST);Ee.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||D.has(N)){const Dn=D.get(N),aa=D.get($);Ee.bindFramebuffer(j.READ_FRAMEBUFFER,Pt),Ee.bindFramebuffer(j.DRAW_FRAMEBUFFER,Hi);for(let an=0;an<it;an++)xr?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Dn.__webglTexture,oe,Dt+an):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Dn.__webglTexture,oe),cn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,aa.__webglTexture,Ye,wn+an):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,aa.__webglTexture,Ye),oe!==0?j.blitFramebuffer($e,dt,Ke,Ze,ct,Jt,Ke,Ze,j.COLOR_BUFFER_BIT,j.NEAREST):cn?j.copyTexSubImage3D(Je,Ye,ct,Jt,wn+an,$e,dt,Ke,Ze):j.copyTexSubImage2D(Je,Ye,ct,Jt,$e,dt,Ke,Ze);Ee.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else cn?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Je,Ye,ct,Jt,wn,Ke,Ze,it,ln,un,yn.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(Je,Ye,ct,Jt,wn,Ke,Ze,it,ln,yn.data):j.texSubImage3D(Je,Ye,ct,Jt,wn,Ke,Ze,it,ln,un,yn):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ye,ct,Jt,Ke,Ze,ln,un,yn.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ye,ct,Jt,yn.width,yn.height,ln,yn.data):j.texSubImage2D(j.TEXTURE_2D,Ye,ct,Jt,Ke,Ze,ln,un,yn);Ee.pixelStorei(j.UNPACK_ROW_LENGTH,Ui),Ee.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Gt),Ee.pixelStorei(j.UNPACK_SKIP_PIXELS,oi),Ee.pixelStorei(j.UNPACK_SKIP_ROWS,vr),Ee.pixelStorei(j.UNPACK_SKIP_IMAGES,ra),Ye===0&&$.generateMipmaps&&j.generateMipmap(Je),Ee.unbindTexture()},this.initRenderTarget=function(N){D.get(N).__webglFramebuffer===void 0&&A.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?A.setTextureCube(N,0):N.isData3DTexture?A.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?A.setTexture2DArray(N,0):A.setTexture2D(N,0),Ee.unbindTexture()},this.resetState=function(){te=0,J=0,X=null,Ee.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Zt._getUnpackColorSpace()}}function GN({mouseForce:a=20,cursorSize:e=100,isViscous:t=!1,viscous:i=30,iterationsViscous:s=32,iterationsPoisson:l=32,dt:c=.014,BFECC:f=!0,resolution:h=.5,isBounce:d=!1,colors:g=["#5227FF","#FF9FFC","#B497CF"],style:v={},className:_="",autoDemo:x=!0,autoSpeed:b=.5,autoIntensity:M=2.2,takeoverDuration:y=.25,autoResumeDelay:S=1e3,autoRampDuration:R=.6,frameInterval:w=1e3/30}){const C=ke.useRef(null),O=ke.useRef(null),L=ke.useRef(null),U=ke.useRef(null),T=ke.useRef(null),P=ke.useRef(!0),I=ke.useRef(null);return ke.useEffect(()=>{if(!C.current)return;function H(Ee){let Y;Array.isArray(Ee)&&Ee.length>0?Ee.length===1?Y=[Ee[0],Ee[0]]:Y=Ee:Y=["#ffffff","#ffffff"];const D=Y.length,A=new Uint8Array(D*4);for(let de=0;de<D;de++){const be=new tn(Y[de]);A[de*4+0]=Math.round(be.r*255),A[de*4+1]=Math.round(be.g*255),A[de*4+2]=Math.round(be.b*255),A[de*4+3]=255}const K=new FM(A,D,1,Or);return K.magFilter=Yn,K.minFilter=Yn,K.wrapS=mr,K.wrapT=mr,K.generateMipmaps=!1,K.needsUpdate=!0,K}const k=H(g),te=new zn(0,0,0,0);class J{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.lastUpdateTime=0}init(Y){this.container=Y,this.pixelRatio=Math.min(window.devicePixelRatio||1,1),this.resize(),this.renderer=new HN({alpha:!0,antialias:!1,depth:!1,powerPreference:"low-power",stencil:!1}),this.renderer.autoClear=!1,this.renderer.setClearColor(new tn(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.lastUpdateTime=performance.now()}resize(){if(!this.container)return;const Y=this.container.getBoundingClientRect(),D=Y.width<768?.45:.55;this.width=Math.max(1,Math.min(1280,Math.floor(Y.width*D))),this.height=Math.max(1,Math.min(1600,Math.floor(Y.height*D))),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){const Y=performance.now();this.delta=Math.min((Y-this.lastUpdateTime)/1e3,.05),this.lastUpdateTime=Y,this.time+=this.delta}}const X=new J;class z{constructor(){this.mouseMoved=!1,this.coords=new Mt,this.coords_old=new Mt,this.diff=new Mt,this.rawDiff=new Mt,this.smoothDiff=new Mt,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Mt,this.takeoverTo=new Mt,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(Y){this.container=Y,this.docTarget=Y.ownerDocument||null;const D=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);D&&(this.listenerTarget=D,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(Y,D){if(!this.container)return!1;const A=this.container.getBoundingClientRect();return A.width===0||A.height===0?!1:Y>=A.left&&Y<=A.right&&D>=A.top&&D<=A.bottom}updateHoverState(Y,D){return this.isHoverInside=this.isPointInside(Y,D),this.isHoverInside}setCoords(Y,D){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const A=this.container.getBoundingClientRect();if(A.width===0||A.height===0)return;const K=(Y-A.left)/A.width,de=(D-A.top)/A.height,be=K*2-1,Oe=-(de*2-1);!this.hasUserControl&&!this.mouseMoved&&(this.coords_old.set(be,Oe),this.smoothDiff.set(0,0)),this.coords.set(be,Oe),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},140)}setNormalized(Y,D){this.coords.set(Y,D),this.mouseMoved=!0}onDocumentMouseMove(Y){if(this.updateHoverState(Y.clientX,Y.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const D=this.container.getBoundingClientRect();if(D.width===0||D.height===0)return;const A=(Y.clientX-D.left)/D.width,K=(Y.clientY-D.top)/D.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(A*2-1,-(K*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(Y.clientX,Y.clientY),this.hasUserControl=!0}}onDocumentTouchStart(Y){if(Y.touches.length!==1)return;const D=Y.touches[0];this.updateHoverState(D.clientX,D.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(D.clientX,D.clientY),this.hasUserControl=!0)}onDocumentTouchMove(Y){if(Y.touches.length!==1)return;const D=Y.touches[0];this.updateHoverState(D.clientX,D.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(D.clientX,D.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const Y=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(Y>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const D=Y*Y*(3-2*Y);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,D)}}this.rawDiff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.rawDiff.set(0,0),this.rawDiff.lengthSq()>1e-7?this.smoothDiff.lerp(this.rawDiff,.58):this.smoothDiff.multiplyScalar(this.isHoverInside?.88:.72),this.diff.copy(this.smoothDiff),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const G=new z;class ee{constructor(Y,D,A){this.mouse=Y,this.manager=D,this.enabled=A.enabled,this.speed=A.speed,this.resumeDelay=A.resumeDelay||3e3,this.rampDurationMs=(A.rampDuration||0)*1e3,this.active=!1,this.current=new Mt(0,0),this.target=new Mt,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Mt,this.pickNewTarget()}pickNewTarget(){const Y=Math.random;this.target.set((Y()*2-1)*(1-this.margin),(Y()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const Y=performance.now();if(Y-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=Y,this.activationTime=Y),!this.active)return;this.mouse.isAutoActive=!0;let A=(Y-this.lastTime)/1e3;this.lastTime=Y,A>.2&&(A=.016);const K=this._tmpDir.subVectors(this.target,this.current),de=K.length();if(de<.01){this.pickNewTarget();return}K.normalize();let be=1;if(this.rampDurationMs>0){const me=Math.min(1,(Y-this.activationTime)/this.rampDurationMs);be=me*me*(3-2*me)}const Oe=this.speed*A*be,we=Math.min(Oe,de);this.current.addScaledVector(K,we),this.mouse.setNormalized(this.current.x,this.current.y)}}const ue=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,V=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,B=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,Z=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,ve=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,ye=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Ce=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,ne=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,Se=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,re=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Me{constructor(Y){var D;this.props=Y||{},this.uniforms=(D=this.props.material)==null?void 0:D.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new RM,this.camera=new ed,this.uniforms&&(this.material=new Dc(this.props.material),this.geometry=new zo(2,2),this.plane=new Ir(this.geometry,this.material),this.scene.add(this.plane))}update(){X.renderer.setRenderTarget(this.props.output||null),X.renderer.render(this.scene,this.camera),X.renderer.setRenderTarget(null)}}class Xe extends Me{constructor(Y){super({material:{vertexShader:ue,fragmentShader:Z,uniforms:{boundarySpace:{value:Y.cellScale},px:{value:Y.cellScale},fboSize:{value:Y.fboSize},velocity:{value:Y.src.texture},dt:{value:Y.dt},isBFECC:{value:!0}}},output:Y.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const Y=new na,D=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);Y.setAttribute("position",new ea(D,3));const A=new Dc({vertexShader:V,fragmentShader:Z,uniforms:this.uniforms});this.line=new m3(Y,A),this.scene.add(this.line)}update({dt:Y,isBounce:D,BFECC:A}){this.uniforms.dt.value=Y,this.line.visible=D,this.uniforms.isBFECC.value=A,super.update()}}class ze extends Me{constructor(Y){super({output:Y.dst}),this.init(Y)}init(Y){super.init();const D=new zo(1,1),A=new Dc({vertexShader:B,fragmentShader:Ce,blending:e0,depthWrite:!1,uniforms:{px:{value:Y.cellScale},force:{value:new Mt(0,0)},center:{value:new Mt(0,0)},scale:{value:new Mt(Y.cursor_size,Y.cursor_size)}}});this.mouse=new Ir(D,A),this.scene.add(this.mouse)}update(Y){const D=G.diff.x/2*Y.mouse_force,A=G.diff.y/2*Y.mouse_force,K=Y.cursor_size*Y.cellScale.x,de=Y.cursor_size*Y.cellScale.y,be=Math.min(Math.max(G.coords.x,-1+K+Y.cellScale.x*2),1-K-Y.cellScale.x*2),Oe=Math.min(Math.max(G.coords.y,-1+de+Y.cellScale.y*2),1-de-Y.cellScale.y*2),we=this.mouse.material.uniforms;we.force.value.set(D,A),we.center.value.set(be,Oe),we.scale.value.set(Y.cursor_size,Y.cursor_size),super.update()}}class et extends Me{constructor(Y){super({material:{vertexShader:ue,fragmentShader:re,uniforms:{boundarySpace:{value:Y.boundarySpace},velocity:{value:Y.src.texture},velocity_new:{value:Y.dst_.texture},v:{value:Y.viscous},px:{value:Y.cellScale},dt:{value:Y.dt}}},output:Y.dst,output0:Y.dst_,output1:Y.dst}),this.init()}update({viscous:Y,iterations:D,dt:A}){let K,de;this.uniforms.v.value=Y;for(let be=0;be<D;be++)be%2===0?(K=this.props.output0,de=this.props.output1):(K=this.props.output1,de=this.props.output0),this.uniforms.velocity_new.value=K.texture,this.props.output=de,this.uniforms.dt.value=A,super.update();return de}}class He extends Me{constructor(Y){super({material:{vertexShader:ue,fragmentShader:ye,uniforms:{boundarySpace:{value:Y.boundarySpace},velocity:{value:Y.src.texture},px:{value:Y.cellScale},dt:{value:Y.dt}}},output:Y.dst}),this.init()}update({vel:Y}){this.uniforms.velocity.value=Y.texture,super.update()}}class Qe extends Me{constructor(Y){super({material:{vertexShader:ue,fragmentShader:ne,uniforms:{boundarySpace:{value:Y.boundarySpace},pressure:{value:Y.dst_.texture},divergence:{value:Y.src.texture},px:{value:Y.cellScale}}},output:Y.dst,output0:Y.dst_,output1:Y.dst}),this.init()}update({iterations:Y}){let D,A;for(let K=0;K<Y;K++)K%2===0?(D=this.props.output0,A=this.props.output1):(D=this.props.output1,A=this.props.output0),this.uniforms.pressure.value=D.texture,this.props.output=A,super.update();return A}}class ot extends Me{constructor(Y){super({material:{vertexShader:ue,fragmentShader:Se,uniforms:{boundarySpace:{value:Y.boundarySpace},pressure:{value:Y.src_p.texture},velocity:{value:Y.src_v.texture},px:{value:Y.cellScale},dt:{value:Y.dt}}},output:Y.dst}),this.init()}update({vel:Y,pressure:D}){this.uniforms.velocity.value=Y.texture,this.uniforms.pressure.value=D.texture,super.update()}}class at{constructor(Y){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...Y},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Mt,this.cellScale=new Mt,this.boundarySpace=new Mt,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?va:Zr}createAllFBO(){const D={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:Yn,magFilter:Yn,wrapS:mr,wrapT:mr};for(let A in this.fbos)this.fbos[A]=new Kr(this.fboSize.x,this.fboSize.y,D)}createShaderPass(){this.advection=new Xe({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new ze({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new et({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new He({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new Qe({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new ot({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const Y=Math.max(1,Math.round(this.options.resolution*X.width)),D=Math.max(1,Math.round(this.options.resolution*X.height)),A=1/Y,K=1/D;this.cellScale.set(A,K),this.fboSize.set(Y,D)}resize(){this.calcSize();for(let Y in this.fbos)this.fbos[Y].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let Y=this.fbos.vel_1;this.options.isViscous&&(Y=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:Y});const D=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:Y,pressure:D})}}class se{constructor(){this.init()}init(){this.simulation=new at,this.scene=new RM,this.camera=new ed,this.output=new Ir(new zo(2,2),new Dc({vertexShader:ue,fragmentShader:ve,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Mt},palette:{value:k},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(Y){this.scene.add(Y)}resize(){this.simulation.resize()}render(){X.renderer.setRenderTarget(null),X.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class yt{constructor(Y){this.props=Y,X.init(Y.$wrapper),G.init(Y.$wrapper),G.autoIntensity=Y.autoIntensity,G.takeoverDuration=Y.takeoverDuration,this.lastUserInteraction=performance.now(),G.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ee(G,this,{enabled:Y.autoDemo,speed:Y.autoSpeed,resumeDelay:Y.autoResumeDelay,rampDuration:Y.autoRampDuration}),this.frameInterval=Y.frameInterval||1e3/30,this.lastFrameTime=0,this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():P.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(X.renderer.domElement),this.output=new se}resize(){X.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),G.update(),X.update(),this.output.update()}loop(Y=performance.now()){this.running&&(Y-this.lastFrameTime>=this.frameInterval&&(this.lastFrameTime=Y,this.render()),U.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this.lastFrameTime=0,this._loop(performance.now()))}pause(){this.running=!1,U.current&&(cancelAnimationFrame(U.current),U.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),G.dispose(),X.renderer){const Y=X.renderer.domElement;Y&&Y.parentNode&&Y.parentNode.removeChild(Y),X.renderer.dispose(),X.renderer.forceContextLoss()}}catch{}}}const Bt=C.current;Bt.style.position=Bt.style.position||"relative",Bt.style.overflow=Bt.style.overflow||"hidden";const j=new yt({$wrapper:Bt,autoDemo:x,autoSpeed:b,autoIntensity:M,takeoverDuration:y,autoResumeDelay:S,autoRampDuration:R,frameInterval:w});O.current=j,(()=>{var D;if(!O.current)return;const Ee=(D=O.current.output)==null?void 0:D.simulation;if(!Ee)return;const Y=Ee.options.resolution;Object.assign(Ee.options,{mouse_force:a,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:s,iterations_poisson:l,dt:c,BFECC:f,resolution:h,isBounce:d}),h!==Y&&Ee.resize()})(),j.start();const ut=new IntersectionObserver(Ee=>{const Y=Ee[0],D=Y.isIntersecting&&Y.intersectionRatio>0;P.current=D,O.current&&(D&&!document.hidden?O.current.start():O.current.pause())},{threshold:[0,.01,.1]});ut.observe(Bt),T.current=ut;const Ct=new ResizeObserver(()=>{O.current&&(I.current&&cancelAnimationFrame(I.current),I.current=requestAnimationFrame(()=>{O.current&&O.current.resize()}))});return Ct.observe(Bt),L.current=Ct,()=>{if(U.current&&cancelAnimationFrame(U.current),L.current)try{L.current.disconnect()}catch{}if(T.current)try{T.current.disconnect()}catch{}O.current&&O.current.dispose(),O.current=null}},[f,e,c,d,t,l,s,a,h,i,g,x,b,M,y,S,R,w]),ke.useEffect(()=>{var J;const H=O.current;if(!H)return;const k=(J=H.output)==null?void 0:J.simulation;if(!k)return;const te=k.options.resolution;Object.assign(k.options,{mouse_force:a,cursor_size:e,isViscous:t,viscous:i,iterations_viscous:s,iterations_poisson:l,dt:c,BFECC:f,resolution:h,isBounce:d}),H.autoDriver&&(H.autoDriver.enabled=x,H.autoDriver.speed=b,H.autoDriver.resumeDelay=S,H.autoDriver.rampDurationMs=R*1e3,H.autoDriver.mouse&&(H.autoDriver.mouse.autoIntensity=M,H.autoDriver.mouse.takeoverDuration=y)),h!==te&&k.resize()},[a,e,t,i,s,l,c,f,h,d,x,b,M,y,S,R]),st.createElement("div",{ref:C,className:`liquid-ether-container ${_||""}`,style:v})}const VN=Object.freeze(Object.defineProperty({__proto__:null,default:GN},Symbol.toStringTag,{value:"Module"}))})();
