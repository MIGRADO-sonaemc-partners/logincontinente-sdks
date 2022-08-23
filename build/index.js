!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ContinenteCredentials",[],t):"object"==typeof exports?exports.ContinenteCredentials=t():e.ContinenteCredentials=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>R});var r={continenteCredentialsUrl:"".concat("https://digidmlogcnt-tst-as-ne.azurewebsites.net")},n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.create;function a(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)a.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return a}function c(e,t,r){if(r||2===arguments.length)for(var n,o=0,i=t.length;o<i;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}Object.create;
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var l=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var u=function(){function e(e,t){for(var r=[],n=2;n<arguments.length;n++)r[n-2]=arguments[n];this.root=e,this.initialize.apply(this,c([],s(r))),this.foundation=void 0===t?this.getDefaultFoundation():t,this.foundation.init(),this.initialSyncWithDOM()}return e.attachTo=function(t){return new e(t,new l({}))},e.prototype.initialize=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]},e.prototype.getDefaultFoundation=function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")},e.prototype.initialSyncWithDOM=function(){},e.prototype.destroy=function(){this.foundation.destroy()},e.prototype.listen=function(e,t,r){this.root.addEventListener(e,t,r)},e.prototype.unlisten=function(e,t,r){this.root.removeEventListener(e,t,r)},e.prototype.emit=function(e,t,r){var n;void 0===r&&(r=!1),"function"==typeof CustomEvent?n=new CustomEvent(e,{bubbles:r,detail:t}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,t),this.root.dispatchEvent(n)},e}();
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var d={animation:{prefixed:"-webkit-animation",standard:"animation"},transform:{prefixed:"-webkit-transform",standard:"transform"},transition:{prefixed:"-webkit-transition",standard:"transition"}};function f(e){return Boolean(e.document)&&"function"==typeof e.document.createElement}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var p={CLOSED_CLASS:"mdc-linear-progress--closed",CLOSED_ANIMATION_OFF_CLASS:"mdc-linear-progress--closed-animation-off",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed",ANIMATION_READY_CLASS:"mdc-linear-progress--animation-ready"},h={ARIA_HIDDEN:"aria-hidden",ARIA_VALUEMAX:"aria-valuemax",ARIA_VALUEMIN:"aria-valuemin",ARIA_VALUENOW:"aria-valuenow",BUFFER_BAR_SELECTOR:".mdc-linear-progress__buffer-bar",FLEX_BASIS:"flex-basis",PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar"},y=.8367142,m=2.00611057,v=.37651913,b=.84386165,g=1.60277782,A=function(e){function t(r){var n=e.call(this,i(i({},t.defaultAdapter),r))||this;return n.observer=null,n}return o(t,e),Object.defineProperty(t,"cssClasses",{get:function(){return p},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return h},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},attachResizeObserver:function(){return null},forceLayout:function(){},getWidth:function(){return 0},hasClass:function(){return!1},setBufferBarStyle:function(){return null},setPrimaryBarStyle:function(){return null},setStyle:function(){},removeAttribute:function(){},removeClass:function(){},setAttribute:function(){}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this;this.determinate=!this.adapter.hasClass(p.INDETERMINATE_CLASS),this.adapter.addClass(p.ANIMATION_READY_CLASS),this.progress=0,this.buffer=1,this.observer=this.adapter.attachResizeObserver((function(t){var r,n;if(!e.determinate)try{for(var o=a(t),i=o.next();!i.done;i=o.next()){var s=i.value;s.contentRect&&e.calculateAndSetDimensions(s.contentRect.width)}}catch(e){r={error:e}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}})),!this.determinate&&this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth())},t.prototype.setDeterminate=function(e){if(this.determinate=e,this.determinate)return this.adapter.removeClass(p.INDETERMINATE_CLASS),this.adapter.setAttribute(h.ARIA_VALUENOW,this.progress.toString()),this.adapter.setAttribute(h.ARIA_VALUEMAX,"1"),this.adapter.setAttribute(h.ARIA_VALUEMIN,"0"),this.setPrimaryBarProgress(this.progress),void this.setBufferBarProgress(this.buffer);this.observer&&this.calculateAndSetDimensions(this.adapter.getWidth()),this.adapter.addClass(p.INDETERMINATE_CLASS),this.adapter.removeAttribute(h.ARIA_VALUENOW),this.adapter.removeAttribute(h.ARIA_VALUEMAX),this.adapter.removeAttribute(h.ARIA_VALUEMIN),this.setPrimaryBarProgress(1),this.setBufferBarProgress(1)},t.prototype.isDeterminate=function(){return this.determinate},t.prototype.setProgress=function(e){this.progress=e,this.determinate&&(this.setPrimaryBarProgress(e),this.adapter.setAttribute(h.ARIA_VALUENOW,e.toString()))},t.prototype.getProgress=function(){return this.progress},t.prototype.setBuffer=function(e){this.buffer=e,this.determinate&&this.setBufferBarProgress(e)},t.prototype.getBuffer=function(){return this.buffer},t.prototype.open=function(){this.adapter.removeClass(p.CLOSED_CLASS),this.adapter.removeClass(p.CLOSED_ANIMATION_OFF_CLASS),this.adapter.removeAttribute(h.ARIA_HIDDEN)},t.prototype.close=function(){this.adapter.addClass(p.CLOSED_CLASS),this.adapter.setAttribute(h.ARIA_HIDDEN,"true")},t.prototype.isClosed=function(){return this.adapter.hasClass(p.CLOSED_CLASS)},t.prototype.handleTransitionEnd=function(){this.adapter.hasClass(p.CLOSED_CLASS)&&this.adapter.addClass(p.CLOSED_ANIMATION_OFF_CLASS)},t.prototype.destroy=function(){e.prototype.destroy.call(this),this.observer&&this.observer.disconnect()},t.prototype.restartAnimation=function(){this.adapter.removeClass(p.ANIMATION_READY_CLASS),this.adapter.forceLayout(),this.adapter.addClass(p.ANIMATION_READY_CLASS)},t.prototype.setPrimaryBarProgress=function(e){var t="scaleX("+e+")",r="undefined"!=typeof window?function(e,t){if(f(e)&&t in d){var r=e.document.createElement("div"),n=d[t],o=n.standard,i=n.prefixed;return o in r.style?o:i}return t}(window,"transform"):"transform";this.adapter.setPrimaryBarStyle(r,t)},t.prototype.setBufferBarProgress=function(e){var t=100*e+"%";this.adapter.setBufferBarStyle(h.FLEX_BASIS,t)},t.prototype.calculateAndSetDimensions=function(e){var t=e*y,r=e*m,n=e*v,o=e*b,i=e*g;this.adapter.setStyle("--mdc-linear-progress-primary-half",t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-half-neg",-t+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full",r+"px"),this.adapter.setStyle("--mdc-linear-progress-primary-full-neg",-r+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter",n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg",-n+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half",o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg",-o+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full",i+"px"),this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg",-i+"px"),this.restartAnimation()},t}(l);
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o(t,e),t.attachTo=function(e){return new t(e)},Object.defineProperty(t.prototype,"determinate",{set:function(e){this.foundation.setDeterminate(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"progress",{set:function(e){this.foundation.setProgress(e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"buffer",{set:function(e){this.foundation.setBuffer(e)},enumerable:!1,configurable:!0}),t.prototype.open=function(){this.foundation.open()},t.prototype.close=function(){this.foundation.close()},t.prototype.initialSyncWithDOM=function(){var e=this;this.root.addEventListener("transitionend",(function(){e.foundation.handleTransitionEnd()}))},t.prototype.getDefaultFoundation=function(){var e=this;return new A({addClass:function(t){e.root.classList.add(t)},forceLayout:function(){e.root.getBoundingClientRect()},setBufferBarStyle:function(t,r){var n=e.root.querySelector(A.strings.BUFFER_BAR_SELECTOR);n&&n.style.setProperty(t,r)},setPrimaryBarStyle:function(t,r){var n=e.root.querySelector(A.strings.PRIMARY_BAR_SELECTOR);n&&n.style.setProperty(t,r)},hasClass:function(t){return e.root.classList.contains(t)},removeAttribute:function(t){e.root.removeAttribute(t)},removeClass:function(t){e.root.classList.remove(t)},setAttribute:function(t,r){e.root.setAttribute(t,r)},setStyle:function(t,r){e.root.style.setProperty(t,r)},attachResizeObserver:function(t){var r=window.ResizeObserver;if(r){var n=new r(t);return n.observe(e.root),n}return null},getWidth:function(){return e.root.offsetWidth}})},t}(u);function C(e){return("0"+e.toString(16)).substr(-2)}function _(e){return(t=e,r=(new TextEncoder).encode(t),window.crypto.subtle.digest("SHA-256",r)).then((function(e){return function(e){for(var t="",r=new Uint8Array(e),n=r.byteLength,o=0;o<n;o++)t+=String.fromCharCode(r[o]);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}(e)})).catch((function(e){return console.warn(e),null}));var t,r}function E(){var e;return _((e=new Uint32Array(28),window.crypto.getRandomValues(e),Array.from(e,C).join("")))}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function O(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(){function e(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=o.baseUrl,a=void 0===i?r.continenteCredentialsUrl:i,s=o.onClose,c=o.onSuccess,l=o.isMobile,u=void 0!==l&&l;if(w(this,e),I(this,"containerSelector",void 0),I(this,"clientId",void 0),I(this,"container",void 0),I(this,"onClose",void 0),I(this,"onSuccess",void 0),I(this,"loadingContainer",void 0),I(this,"isMobile",!1),I(this,"baseUrl",void 0),I(this,"modalContainerId","continente-credentials-container-modal"),I(this,"containerId","continente-credentials-container"),!n)throw new Error("clientId is required");if(!c)throw new Error("onSuccess is required");this.containerSelector=t,this.clientId=n,this.onClose=s,this.onSuccess=c,this.baseUrl=a,this.isMobile=u,window.onmessage=this.onMessage.bind(this)}var t,n,o;return t=e,(n=[{key:"open",value:function(){this.createContainer()}},{key:"close",value:function(){this.container&&this.container.remove(),this.onClose&&this.onClose()}},{key:"createHeader",value:function(e){var t=document.createElement("div");return t.className="header",t.style.width="".concat(e.clientWidth,"px"),this.loadingContainer=document.createElement("div"),this.loadingContainer.innerHTML='<div role="progressbar" class="mdc-linear-progress" id="my-progress-bar"><div class="mdc-linear-progress__buffering-dots"></div><div class="mdc-linear-progress__buffer"></div><div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div><div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>',new S(this.loadingContainer).determinate=!1,t.appendChild(this.loadingContainer),t}},{key:"createIframe",value:function(){var e=this;return E().then((function(t){var r="".concat(e.baseUrl,"/user-register?clientId=").concat(e.clientId,"&close=").concat(!e.isMobile),n=new URL(r);n.searchParams.append("clientId",e.clientId),n.searchParams.append("code_challenge",t),n.searchParams.append("code_challenge_method","S256");var o=document.createElement("iframe");return o.src=n,o.sandbox="allow-same-origin allow-scripts allow-popups allow-forms",o.addEventListener("load",(function(){e.loadingContainer.remove()})),o})).catch((function(e){return console.log(e),null}))}},{key:"createCloseButton",value:function(){var e=this,t=document.createElement("div");return t.className="close-button",t.innerHTML='<svg width="20" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z"/></svg>',t.addEventListener("click",(function(){e.close()})),t}},{key:"createContainer",value:function(){var e=this;if(document.body){this.container=document.createElement("div"),this.container.className=this.containerId;var t=document.querySelector(this.containerSelector),r=this.createHeader(t),n=this.createCloseButton();this.createIframe().then((function(o){if(e.container.appendChild(r),e.container.appendChild(n),e.container.appendChild(o),t){var i=e.container.querySelector(".close-button");i&&i.remove(),t.appendChild(e.container)}else e.container.className=e.modalContainerId,document.body.appendChild(e.container)}))}}},{key:"onMessage",value:function(e){if(e.origin===this.baseUrl)switch(e.data.type){case"close":this.close();break;case"signup":window.location.href=e.data.redirect_url;break;case"login":case"success":this.onSuccess(e.data)}}}])&&O(t.prototype,n),o&&O(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();const R=L;return t=t.default})()}));
//# sourceMappingURL=index.js.map