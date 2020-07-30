self.weLib=function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e,t,n){return(u=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function c(e){var t="function"==typeof Map?new Map:void 0;return(c=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,r(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),o(i,e)})(e)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var f=function(e,t){var n=new WeakMap,r=new WeakMap,o=[].filter,i=function(e,t){for(var n=0,o=e.length;n<o;n++){var i=e[n],u=i.target,c=i.attributeName,a=i.oldValue,f=u.getAttribute(c);r.get(t).call(u,c,a,f)}},u=function(e){return"querySelectorAll"in e},c=function(e){for(var t=0,n=e.length;t<n;t++){var r=e[t],i=r.addedNodes,c=r.removedNodes;a(o.call(i,u),"c",new Set),a(o.call(c,u),"d",new Set)}},a=function e(r,o,i){for(var u=0,c=r.length;u<c;u++){var a=r[u];i.has(a)||(i.add(a),n.has(a)?n.get(a)[o].forEach(l,a):"c"===o&&t(a),e(a.querySelectorAll("*"),o,i))}},f=new MutationObserver(c);return f.observe(e,{childList:!0,subtree:!0}),function(e,t){var o=t.connectedCallback,u=t.disconnectedCallback,a=t.observedAttributes,l=t.attributeChangedCallback;c(f.takeRecords());var s=n.get(e)||function(e){var t={c:new Set,d:new Set};return n.set(e,t),t}(e),p=s.c,d=s.d;if(a){var h=new MutationObserver(i);h.observe(e,{attributes:!0,attributeOldValue:!0,attributeFilter:a.map((function(t){return e.hasAttribute(t)&&l.call(e,t,null,e.getAttribute(t)),t}))}),r.set(h,l)}return u&&d.add(u),o&&(p.add(o),e.ownerDocument.compareDocumentPosition(e)&e.DOCUMENT_POSITION_DISCONNECTED||o.call(e)),e}};function l(e){e.call(this)}var s="function"==typeof Promise?Promise:function(e){var t=[],n=0;return e((function(){n=1,t.splice(0).forEach(r)})),{then:r};function r(e){return n?setTimeout(e):t.push(e),this}},p=Object.create,d=Object.keys,h=[],v=[],b={},y=new Set,g=new WeakMap,w=new WeakMap,m=function(e,t,n,r,o){var i=function(e,t){for(var n=0,r=e.length;n<r;n++)t.has(e[n])||(t.add(e[n]),u(e[n],t))},u=function(e,r){for(var u=0,c=t.length;u<c;u++)(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t[u])&&o(e,n[u]);r&&function(e,n){t.length&&i(e.querySelectorAll(t),n)}(e,r)};return{get:function(e){var r=t.indexOf(e);return r<0?void 0:n[r].o},upgrade:function(e){u(e,new Set)},whenDefined:function(e){if(!(e in r)){var t,n=new s((function(e){t=e}));r[e]={_:t,$:n}}return r[e].$},$:i,_:f(e,u)}}(document,v,h,b,(function(e,t){var n=t.m,r=t.l,o=t.o;if(!n.has(e)){var i=p(o,{element:{enumerable:!0,value:e}});n.set(e,0),g.has(e)||g.set(e,[]),g.get(e).push(i);for(var u=0,c=r.length;u<c;u++)e.addEventListener(r[u].t,i,r[u].o);i.init&&i.init(),_(e,o)}})),O=m.get,S=m.upgrade,k=m.whenDefined,E=m.$,_=m._,M=function(e,t,n){return function(r){for(var o=g.get(this),i=0,u=o.length;i<u;i++)t===o[i][e]&&(n||-1<(o[i].observedAttributes||[]).indexOf(r))&&t.apply(o[i],arguments)}},C=function(e,t){if(O(e))throw new Error("duplicated: "+e);for(var n=[],r=p(null),o=d(t),i=0,u=o.length;i<u;i++){var c=o[i];if(/^(?:connected|disconnected|attributeChanged)$/.test(c))w.has(t[c])||w.set(t[c],M(c,t[c],"a"!==c[0])),t[c+"Callback"]=w.get(t[c]);else if(/^on/.test(c)&&!/Options$/.test(c)){var a=t[c+"Options"]||!1,f=c.toLowerCase(),l=f.slice(2);n.push({t:l,o:a}),r[l]=c,f!==c&&(l=c.slice(2,3).toLowerCase()+c.slice(3),r[l]=c,n.push({t:l,o:a}))}}n.length&&(t.handleEvent=function(e){this[r[e.type]](e)}),v.push(e),h.push({m:new WeakMap,l:n,o:t}),E(document.querySelectorAll(e),new Set),k(e),y.has(e)||b[e]._()},A=function(e,t,n){y.add(e),C(e,{init:function(){y.has(e)&&(y.delete(e),t().then((function(t){var r=t.default,o=v.indexOf(e);v.splice(o,1),h.splice(o,1),(n||C)(e,r)})))}})};return customElements.define("we-lib",function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(d,e);var u,c,f,l,s,p=(u=d,c=i(),function(){var e,t=r(u);if(c){var n=r(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return a(this,e)});function d(){return t(this,d),p.apply(this,arguments)}return f=d,s=[{key:"define",get:function(){return C}},{key:"defineAsync",get:function(){return A}},{key:"get",get:function(){return O}},{key:"upgrade",get:function(){return S}},{key:"whenDefined",get:function(){return k}}],(l=null)&&n(f.prototype,l),s&&n(f,s),d}(c(HTMLElement))),e.define=C,e.defineAsync=A,e.get=O,e.upgrade=S,e.whenDefined=k,e}({});