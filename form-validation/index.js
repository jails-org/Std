(function(s,t){typeof exports=="object"&&typeof module!="undefined"?t(exports):typeof define=="function"&&define.amd?define(["exports"],t):(s=typeof globalThis!="undefined"?globalThis:s||self,t(s["form-validation"]={}))})(this,function(s){"use strict";var G=Object.defineProperty,H=Object.defineProperties;var J=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var x=(s,t,o)=>t in s?G(s,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[t]=o,k=(s,t)=>{for(var o in t||(t={}))Q.call(t,o)&&x(s,o,t[o]);if(w)for(var o of w(t))R.call(t,o)&&x(s,o,t[o]);return s},O=(s,t)=>H(s,J(t));const t="form-validation",o="[data-validation]",T="[data-mask]";function _({main:f,elm:c,state:r,on:l,emit:v,dependencies:F,trigger:I}){var A;const{validations:p,masks:D}=F,m=(A=c.querySelector("input,select,textarea"))==null?void 0:A.form;let g=y(m);f(e=>{l("input","input, textarea, select",z),l("input",T,q),l("focus",o,K),l("input",o,b("input")),l("change",o,b("change")),l("blur",o,b("blur")),m.addEventListener("reset",P),m.addEventListener("submit",$),N()});const N=()=>{if(!p)throw new Error("<form-validation> - No validations provided in dependencies");const e=S();r.set(n=>n.form.fields=e)},S=()=>{const e={};return g.forEach(n=>e[n]=""),e},b=e=>n=>{const a=n.target,d=a.name,u=M(a,m),E=a.dataset.validation.split(/\s/),h=[],L=r.get();E.forEach(i=>{if(i in p){const{ok:B,message:C}=p[i](u,a,m);B||h.push(C)}}),h.length?e==="input"?(g.add(a.name),r.set(i=>{i.form.isValid=!1,L.form.errors[d]&&h[0]!=L.form.errors[d]&&(i.form.errors[d]=h[0])})):(e==="blur"||e==="change")&&(g.add(a.name),r.set(i=>{i.form.errors[d]=h[0],i.form.isValid=!1})):(g.delete(a.name),r.set(i=>{delete i.form.errors[d],g.size||(i.form.isValid=!0)}))},z=e=>{const{name:n}=e.target,a=M(e.target,m);r.set(d=>d.form.fields[n]=a)},$=e=>{e.preventDefault(),I("blur",o);const a=r.get().form.errors;if(Object.keys(a).length)v(`${t}:error`,{errors:a});else{const u=j(e.target);v(`${t}:submit`,k({},u))}},q=e=>{let n=e.target.value;const{mask:a}=e.target.dataset;a.split(/s/).forEach(u=>{if(u&&u in D){const E=D[u];n=E(n,e.target,e.target.form)}}),r.set(u=>u.form.fields[e.target.name]=n||"")},K=e=>{r.set(n=>n.form.touched[e.target.name]=!0)},P=()=>{g=y(m),r.set({form:O(k({},V.form),{fields:S()})})}}const V={form:{errors:{},fields:{},touched:{},isValid:!1}},j=f=>{const c=new FormData(f),r={};for(let[l,v]of c)r[l]=v;return{formData:c,data:r}},M=(f,c)=>{const{name:r,type:l}=f;return l=="checkbox"?f.checked?f.value:"":c[r].value},y=f=>{const c=new Set;return Array.from(f.elements).filter(r=>r.name).forEach(r=>c.add(r.name)),c};s.default=_,s.model=V,Object.defineProperties(s,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
