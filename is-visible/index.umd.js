(function(e,i){typeof exports=="object"&&typeof module!="undefined"?i(exports):typeof define=="function"&&define.amd?define(["exports"],i):(e=typeof globalThis!="undefined"?globalThis:e||self,i(e["is-visible"]={}))})(this,function(e){"use strict";const i=(n,{root:t=null,rootMargin:r="0px",threshold:f=0}={})=>new Promise((u,b)=>{const s=new IntersectionObserver(o=>{o.forEach(d=>{d.isIntersecting&&(u(o),s.unobserve(n))})},{root:t,rootMargin:r,threshold:f});s.observe(n)});e.isVisible=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
