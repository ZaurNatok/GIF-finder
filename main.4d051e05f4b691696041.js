!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=40)}([function(t,n,e){(function(n){var e="object",r=function(t){return t&&t.Math==Math&&t};t.exports=r(typeof globalThis==e&&globalThis)||r(typeof window==e&&window)||r(typeof self==e&&self)||r(typeof n==e&&n)||Function("return this")()}).call(this,e(42))},function(t,n,e){var r=e(0),o=e(10),i=e(29),c=e(58),u=r.Symbol,f=o("wks");t.exports=function(t){return f[t]||(f[t]=c&&u[t]||(c?u:i)("Symbol."+t))}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(3);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(2);t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(7),o=e(9),i=e(20);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7),o=e(24),i=e(6),c=e(23),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(0),o=e(16),i=e(26),c=r["__core-js_shared__"]||o("__core-js_shared__",{});(t.exports=function(t,n){return c[t]||(c[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:i?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},function(t,n,e){var r=e(31),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(7),o=e(43),i=e(20),c=e(14),u=e(23),f=e(5),a=e(24),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(t){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n,e){var r=e(21),o=e(22);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(10),i=e(8),c=e(5),u=e(16),f=e(27),a=e(28),s=a.get,l=a.enforce,p=String(f).split("toString");o("inspectSource",(function(t){return f.call(t)})),(t.exports=function(t,n,e,o){var f=!!o&&!!o.unsafe,a=!!o&&!!o.enumerable,s=!!o&&!!o.noTargetGet;"function"==typeof e&&("string"!=typeof n||c(e,"name")||i(e,"name",n),l(e).source=p.join("string"==typeof n?n:"")),t!==r?(f?!s&&t[n]&&(a=!0):delete t[n],a?t[n]=e:i(t,n,e)):a?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||f.call(this)}))},function(t,n,e){var r=e(0),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(32),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(12);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(0),o=e(13).f,i=e(8),c=e(15),u=e(16),f=e(46),a=e(33);t.exports=function(t,n){var e,s,l,p,v,d=t.target,h=t.global,y=t.stat;if(e=h?r:y?r[d]||u(d,{}):(r[d]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(v=o(e,s))&&v.value:e[s],!a(h?s:d+(y?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;f(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2),o=e(4),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(3);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(2),i=e(25);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(0),o=e(3),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n){t.exports=!1},function(t,n,e){var r=e(10);t.exports=r("native-function-to-string",Function.toString)},function(t,n,e){var r,o,i,c=e(44),u=e(0),f=e(3),a=e(8),s=e(5),l=e(45),p=e(30),v=u.WeakMap;if(c){var d=new v,h=d.get,y=d.has,m=d.set;r=function(t,n){return m.call(d,t,n),n},o=function(t){return h.call(d,t)||{}},i=function(t){return y.call(d,t)}}else{var g=l("state");p[g]=!0,r=function(t,n){return a(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){t.exports=e(0)},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(2),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},function(t,n,e){"use strict";var r=e(54).forEach,o=e(59);t.exports=o("forEach")?function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},function(t,n,e){var r=e(4),o=e(1)("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var n,e,c;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?e:i?r(n):"Object"==(c=r(n))&&"function"==typeof n.callee?"Arguments":c}},function(t,n){t.exports={}},function(t,n,e){var r,o,i,c=e(0),u=e(2),f=e(4),a=e(18),s=e(73),l=e(25),p=c.location,v=c.setImmediate,d=c.clearImmediate,h=c.process,y=c.MessageChannel,m=c.Dispatch,g=0,x={},b=function(t){if(x.hasOwnProperty(t)){var n=x[t];delete x[t],n()}},S=function(t){return function(){b(t)}},w=function(t){b(t.data)},j=function(t){c.postMessage(t+"",p.protocol+"//"+p.host)};v&&d||(v=function(t){for(var n=[],e=1;arguments.length>e;)n.push(arguments[e++]);return x[++g]=function(){("function"==typeof t?t:Function(t)).apply(void 0,n)},r(g),g},d=function(t){delete x[t]},"process"==f(h)?r=function(t){h.nextTick(S(t))}:m&&m.now?r=function(t){m.now(S(t))}:y?(i=(o=new y).port2,o.port1.onmessage=w,r=a(i.postMessage,i,1)):!c.addEventListener||"function"!=typeof postMessage||c.importScripts||u(j)?r="onreadystatechange"in l("script")?function(t){s.appendChild(l("script")).onreadystatechange=function(){s.removeChild(this),b(t)}}:function(t){setTimeout(S(t),0)}:(r=j,c.addEventListener("message",w,!1))),t.exports={set:v,clear:d}},function(t,n,e){var r=e(11);t.exports=r("navigator","userAgent")||""},function(t,n,e){"use strict";var r=e(12),o=function(t){var n,e;this.promise=new t((function(t,r){if(void 0!==n||void 0!==e)throw TypeError("Bad Promise constructor");n=t,e=r})),this.resolve=r(n),this.reject=r(e)};t.exports.f=function(t){return new o(t)}},function(t,n,e){"use strict";e.r(n);e(41),e(60),e(62),e(78),e(80);var r=document.querySelector(".section__result"),o=(document.querySelector(".section"),document.querySelector(".search__button")),i=document.querySelector(".search__keyword");function c(t){return r.textContent="",document.querySelector(".section-error").textContent="",u(!0),fetch("http://api.giphy.com/v1/gifs/search?api_key=3iMjTFwmRAFuCLm6QuyMDXwrQsXhdkZH&q=".concat(t)).then((function(t){return t.json()})).then((function(t){var n=t.data;0===n.length?(document.querySelector(".section-error").textContent="Ничего не найдено",u(!1)):(n.forEach((function(t){!function(t,n){var e=document.createElement("a"),o=document.createElement("img");o.classList.add("result__item"),o.setAttribute("src",t),e.setAttribute("href",n),e.setAttribute("target","_blank"),r.appendChild(e),e.appendChild(o)}(t.images.downsized_large.url,t.embed_url)})),document.querySelector(".loader").setAttribute("style","display:none")),u(!1)}))}function u(t){t?document.querySelector(".loader").setAttribute("style","display:block"):document.querySelector(".loader").setAttribute("style","display:none")}o.addEventListener("click",(function(){event.preventDefault(),c(i.value)}))},function(t,n,e){"use strict";var r=e(19),o=e(34);r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(27),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o.call(i))},function(t,n,e){var r=e(10),o=e(29),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n,e){var r=e(5),o=e(47),i=e(13),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||u(t,s,f(n,s))}}},function(t,n,e){var r=e(11),o=e(48),i=e(53),c=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(49),o=e(52).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(5),o=e(14),i=e(50).indexOf,c=e(30);t.exports=function(t,n){var e,u=o(t),f=0,a=[];for(e in u)!r(c,e)&&r(u,e)&&a.push(e);for(;n.length>f;)r(u,e=n[f++])&&(~i(a,e)||a.push(e));return a}},function(t,n,e){var r=e(14),o=e(17),i=e(51),c=function(t){return function(n,e,c){var u,f=r(n),a=o(f.length),s=i(c,a);if(t&&e!=e){for(;a>s;)if((u=f[s++])!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(32),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(18),o=e(21),i=e(55),c=e(17),u=e(56),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,d,h,y){for(var m,g,x=i(v),b=o(x),S=r(d,h,3),w=c(b.length),j=0,O=y||u,E=n?O(v,w):e?O(v,0):void 0;w>j;j++)if((p||j in b)&&(g=S(m=b[j],j,x),t))if(n)E[j]=g;else if(g)switch(t){case 3:return!0;case 5:return m;case 6:return j;case 2:f.call(E,m)}else if(s)return!1;return l?-1:a||s?s:E}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},function(t,n,e){var r=e(22);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(3),o=e(57),i=e(1)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(4);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(2);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){"use strict";var r=e(2);t.exports=function(t,n){var e=[][t];return!e||!r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(15),o=e(61),i=Object.prototype;o!==i.toString&&r(i,"toString",o,{unsafe:!0})},function(t,n,e){"use strict";var r=e(35),o={};o[e(1)("toStringTag")]="z",t.exports="[object z]"!==String(o)?function(){return"[object "+r(this)+"]"}:o.toString},function(t,n,e){"use strict";var r,o,i,c=e(19),u=e(26),f=e(0),a=e(31),s=e(63),l=e(64),p=e(65),v=e(3),d=e(12),h=e(66),y=e(4),m=e(67),g=e(71),x=e(72),b=e(37).set,S=e(74),w=e(75),j=e(76),O=e(39),E=e(77),T=e(38),L=e(28),M=e(33),P=e(1)("species"),_="Promise",A=L.get,k=L.set,C=L.getterFor(_),q=f[_],D=f.TypeError,F=f.document,I=f.process,N=f.fetch,G=I&&I.versions,R=G&&G.v8||"",V=O.f,z=V,H="process"==y(I),W=!!(F&&F.createEvent&&f.dispatchEvent),B=M(_,(function(){var t=q.resolve(1),n=function(){},e=(t.constructor={})[P]=function(t){t(n,n)};return!((H||"function"==typeof PromiseRejectionEvent)&&(!u||t.finally)&&t.then(n)instanceof e&&0!==R.indexOf("6.6")&&-1===T.indexOf("Chrome/66"))})),K=B||!g((function(t){q.all(t).catch((function(){}))})),Q=function(t){var n;return!(!v(t)||"function"!=typeof(n=t.then))&&n},U=function(t,n,e){if(!n.notified){n.notified=!0;var r=n.reactions;S((function(){for(var o=n.value,i=1==n.state,c=0;r.length>c;){var u,f,a,s=r[c++],l=i?s.ok:s.fail,p=s.resolve,v=s.reject,d=s.domain;try{l?(i||(2===n.rejection&&J(t,n),n.rejection=1),!0===l?u=o:(d&&d.enter(),u=l(o),d&&(d.exit(),a=!0)),u===s.promise?v(D("Promise-chain cycle")):(f=Q(u))?f.call(u,p,v):p(u)):v(o)}catch(t){d&&!a&&d.exit(),v(t)}}n.reactions=[],n.notified=!1,e&&!n.rejection&&Y(t,n)}))}},X=function(t,n,e){var r,o;W?((r=F.createEvent("Event")).promise=n,r.reason=e,r.initEvent(t,!1,!0),f.dispatchEvent(r)):r={promise:n,reason:e},(o=f["on"+t])?o(r):"unhandledrejection"===t&&j("Unhandled promise rejection",e)},Y=function(t,n){b.call(f,(function(){var e,r=n.value;if(Z(n)&&(e=E((function(){H?I.emit("unhandledRejection",r,t):X("unhandledrejection",t,r)})),n.rejection=H||Z(n)?2:1,e.error))throw e.value}))},Z=function(t){return 1!==t.rejection&&!t.parent},J=function(t,n){b.call(f,(function(){H?I.emit("rejectionHandled",t):X("rejectionhandled",t,n.value)}))},$=function(t,n,e,r){return function(o){t(n,e,o,r)}},tt=function(t,n,e,r){n.done||(n.done=!0,r&&(n=r),n.value=e,n.state=2,U(t,n,!0))},nt=function(t,n,e,r){if(!n.done){n.done=!0,r&&(n=r);try{if(t===e)throw D("Promise can't be resolved itself");var o=Q(e);o?S((function(){var r={done:!1};try{o.call(e,$(nt,t,r,n),$(tt,t,r,n))}catch(e){tt(t,r,e,n)}})):(n.value=e,n.state=1,U(t,n,!1))}catch(e){tt(t,{done:!1},e,n)}}};B&&(q=function(t){h(this,q,_),d(t),r.call(this);var n=A(this);try{t($(nt,this,n),$(tt,this,n))}catch(t){tt(this,n,t)}},(r=function(t){k(this,{type:_,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=s(q.prototype,{then:function(t,n){var e=C(this),r=V(x(this,q));return r.ok="function"!=typeof t||t,r.fail="function"==typeof n&&n,r.domain=H?I.domain:void 0,e.parent=!0,e.reactions.push(r),0!=e.state&&U(this,e,!1),r.promise},catch:function(t){return this.then(void 0,t)}}),o=function(){var t=new r,n=A(t);this.promise=t,this.resolve=$(nt,t,n),this.reject=$(tt,t,n)},O.f=V=function(t){return t===q||t===i?new o(t):z(t)},u||"function"!=typeof N||c({global:!0,enumerable:!0,forced:!0},{fetch:function(t){return w(q,N.apply(f,arguments))}})),c({global:!0,wrap:!0,forced:B},{Promise:q}),l(q,_,!1,!0),p(_),i=a[_],c({target:_,stat:!0,forced:B},{reject:function(t){var n=V(this);return n.reject.call(void 0,t),n.promise}}),c({target:_,stat:!0,forced:u||B},{resolve:function(t){return w(u&&this===i?q:this,t)}}),c({target:_,stat:!0,forced:K},{all:function(t){var n=this,e=V(n),r=e.resolve,o=e.reject,i=E((function(){var e=d(n.resolve),i=[],c=0,u=1;m(t,(function(t){var f=c++,a=!1;i.push(void 0),u++,e.call(n,t).then((function(t){a||(a=!0,i[f]=t,--u||r(i))}),o)})),--u||r(i)}));return i.error&&o(i.value),e.promise},race:function(t){var n=this,e=V(n),r=e.reject,o=E((function(){var o=d(n.resolve);m(t,(function(t){o.call(n,t).then(e.resolve,r)}))}));return o.error&&r(o.value),e.promise}})},function(t,n,e){var r=e(15);t.exports=function(t,n,e){for(var o in n)r(t,o,n[o],e);return t}},function(t,n,e){var r=e(9).f,o=e(5),i=e(1)("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,i)&&r(t,i,{configurable:!0,value:n})}},function(t,n,e){"use strict";var r=e(11),o=e(9),i=e(1),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},function(t,n){t.exports=function(t,n,e){if(!(t instanceof n))throw TypeError("Incorrect "+(e?e+" ":"")+"invocation");return t}},function(t,n,e){var r=e(6),o=e(68),i=e(17),c=e(18),u=e(69),f=e(70),a=function(t,n){this.stopped=t,this.result=n};(t.exports=function(t,n,e,s,l){var p,v,d,h,y,m,g=c(n,e,s?2:1);if(l)p=t;else{if("function"!=typeof(v=u(t)))throw TypeError("Target is not iterable");if(o(v)){for(d=0,h=i(t.length);h>d;d++)if((y=s?g(r(m=t[d])[0],m[1]):g(t[d]))&&y instanceof a)return y;return new a(!1)}p=v.call(t)}for(;!(m=p.next()).done;)if((y=f(p,g,m.value,s))&&y instanceof a)return y;return new a(!1)}).stop=function(t){return new a(!0,t)}},function(t,n,e){var r=e(1),o=e(36),i=r("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,n,e){var r=e(35),o=e(36),i=e(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,n,e){var r=e(6);t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(n){var i=t.return;throw void 0!==i&&r(i.call(t)),n}}},function(t,n,e){var r=e(1)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[r]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var e=!1;try{var i={};i[r]=function(){return{next:function(){return{done:e=!0}}}},t(i)}catch(t){}return e}},function(t,n,e){var r=e(6),o=e(12),i=e(1)("species");t.exports=function(t,n){var e,c=r(t).constructor;return void 0===c||null==(e=r(c)[i])?n:o(e)}},function(t,n,e){var r=e(11);t.exports=r("document","documentElement")},function(t,n,e){var r,o,i,c,u,f,a,s=e(0),l=e(13).f,p=e(4),v=e(37).set,d=e(38),h=s.MutationObserver||s.WebKitMutationObserver,y=s.process,m=s.Promise,g="process"==p(y),x=l(s,"queueMicrotask"),b=x&&x.value;b||(r=function(){var t,n;for(g&&(t=y.domain)&&t.exit();o;){n=o.fn,o=o.next;try{n()}catch(t){throw o?c():i=void 0,t}}i=void 0,t&&t.enter()},g?c=function(){y.nextTick(r)}:h&&!/(iphone|ipod|ipad).*applewebkit/i.test(d)?(u=!0,f=document.createTextNode(""),new h(r).observe(f,{characterData:!0}),c=function(){f.data=u=!u}):m&&m.resolve?(a=m.resolve(void 0),c=function(){a.then(r)}):c=function(){v.call(s,r)}),t.exports=b||function(t){var n={fn:t,next:void 0};i&&(i.next=n),o||(o=n,c()),i=n}},function(t,n,e){var r=e(6),o=e(3),i=e(39);t.exports=function(t,n){if(r(t),o(n)&&n.constructor===t)return n;var e=i.f(t);return(0,e.resolve)(n),e.promise}},function(t,n,e){var r=e(0);t.exports=function(t,n){var e=r.console;e&&e.error&&(1===arguments.length?e.error(t):e.error(t,n))}},function(t,n){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},function(t,n,e){var r=e(0),o=e(79),i=e(34),c=e(8);for(var u in o){var f=r[u],a=f&&f.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(t){a.forEach=i}}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n,e){}]);