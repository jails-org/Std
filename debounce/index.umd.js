(function(e,n){typeof exports=="object"&&typeof module!="undefined"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(e=typeof globalThis!="undefined"?globalThis:e||self,n(e.debounce={}))})(this,function(e){"use strict";const n=(o,i=250)=>{let t;return(...d)=>{clearTimeout(t),t=setTimeout(()=>{o.apply(void 0,d)},i)}};e.debounce=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
